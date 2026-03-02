import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import {
  daikinData,
  lgData,
  mitsubishiHeavyData,
  samsungData,
  toshibaData,
  tosotData,
  aircoCoversData
} from '../dist/brands-data.js';

function getProgrammaticLocations() {
  const sourcePath = path.join(process.cwd(), 'src', 'data', 'programmaticLocations.ts');
  const source = fs.readFileSync(sourcePath, 'utf-8');
  const match = source.match(/export const programmaticLocations:[\s\S]*?=\s*(\[[\s\S]*?\]);/);

  if (!match) {
    throw new Error('Kon programmaticLocations niet lezen uit src/data/programmaticLocations.ts');
  }

  // eslint-disable-next-line no-new-func
  const locations = Function(`return ${match[1]};`)();
  return Array.isArray(locations) ? locations : [];
}

function shouldIndexRoute(routePath) {
  if (!routePath) return false;
  if (routePath.includes(':') || routePath.includes('*')) return false;
  if (routePath.includes('/noindex/')) return false;
  return true;
}

function discoverAppRoutes(appContent) {
  const routePattern = /<Route\s+path="([^"]+)"\s+element={<\s*([A-Za-z0-9_]+)\s*\/>}/g;
  const routes = [];
  let match;

  while ((match = routePattern.exec(appContent)) !== null) {
    routes.push({ path: match[1], component: match[2] });
  }

  return routes.filter((route) => shouldIndexRoute(route.path));
}

function buildComponentFileMap(appContent) {
  const componentToPath = new Map();

  const directImportPattern = /import\s+([A-Za-z0-9_]+)\s+from\s+'(\.\/[^']+)'/g;
  let importMatch;
  while ((importMatch = directImportPattern.exec(appContent)) !== null) {
    const componentName = importMatch[1];
    const importPath = importMatch[2];
    componentToPath.set(componentName, importPath);
  }

  const lazyImportPattern = /const\s+([A-Za-z0-9_]+)\s*=\s*lazy\(\(\)\s*=>\s*import\('(\.\/[^']+)'\)\)/g;
  let lazyMatch;
  while ((lazyMatch = lazyImportPattern.exec(appContent)) !== null) {
    const componentName = lazyMatch[1];
    const importPath = lazyMatch[2];
    componentToPath.set(componentName, importPath);
  }

  return componentToPath;
}

function resolveComponentFilePath(componentImportPath) {
  if (!componentImportPath) return null;
  const normalized = componentImportPath.replace(/^\.\//, '');

  const tsxPath = path.join(process.cwd(), 'src', `${normalized}.tsx`);
  const indexTsxPath = path.join(process.cwd(), 'src', normalized, 'index.tsx');

  if (fs.existsSync(tsxPath)) return tsxPath;
  if (fs.existsSync(indexTsxPath)) return indexTsxPath;
  return null;
}

// Automatically discover blog posts from App.tsx
async function discoverBlogPosts() {
  const appPath = path.join(process.cwd(), 'src', 'App.tsx');
  const appContent = await fs.promises.readFile(appPath, 'utf-8');

  // Extract blog routes from App.tsx
  const blogRoutePattern = /<Route\s+path="\/blog\/([^"]+)"\s+element={<([^>]+)\s*\/>}/g;
  const blogPosts = [];
  let match;

  while ((match = blogRoutePattern.exec(appContent)) !== null) {
    const slug = match[1];
    const componentName = match[2];

    // Try to get file modification time for the component
    const componentPath = path.join(process.cwd(), 'src', 'pages', 'blog', `${componentName}.tsx`);
    let lastmod;

    try {
      lastmod = await getFileModTime(componentPath);
    } catch {
      // If file not found, use current date
      lastmod = new Date().toISOString().split('T')[0];
    }

    blogPosts.push({ slug, lastmod });
  }

  return blogPosts;
}

// Get file modification time
async function getFileModTime(filePath) {
  try {
    const stats = await fs.promises.stat(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (error) {
    return new Date().toISOString().split('T')[0];
  }
}

// Convert route path to file name
function routeToFileName(route) {
  return route.charAt(0).toUpperCase() + route.slice(1);
}

// Generate main sitemap
async function generateMainSitemap() {
  console.log('Generating main sitemap...');

  const appPath = path.join(process.cwd(), 'src', 'App.tsx');
  const appContent = await fs.promises.readFile(appPath, 'utf-8');
  const routes = discoverAppRoutes(appContent);
  const componentMap = buildComponentFileMap(appContent);

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const uniqueRoutes = [...new Map(routes.map((route) => [route.path, route])).values()];

  for (const route of uniqueRoutes) {
    const componentImportPath = componentMap.get(route.component);
    const componentFilePath = resolveComponentFilePath(componentImportPath);
    const lastmod = componentFilePath ? await getFileModTime(componentFilePath) : await getFileModTime(appPath);

    const normalizedRoute = route.path === '/' ? '' : route.path;
    const priority = normalizedRoute === '' ? '1.0' :
      normalizedRoute.startsWith('/products') || normalizedRoute.startsWith('/airco-installatie') || normalizedRoute.startsWith('/vergelijkingen') ? '0.9' : '0.7';
    const changefreq = normalizedRoute === '' ? 'daily' : 'weekly';

    sitemap += `
  <url>
    <loc>https://staycoolairco.nl${normalizedRoute}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Main sitemap generated successfully!');
}

// Generate products sitemap with images
async function generateProductsSitemap() {
  console.log('Generating products sitemap...');

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  const lastmod = new Date().toISOString().split('T')[0];

  // Create brands list from individual imports
  const brandsList = [
    daikinData,
    lgData,
    mitsubishiHeavyData,
    samsungData,
    toshibaData,
    tosotData,
    aircoCoversData
  ];

  for (const brand of brandsList) {
    for (const product of brand.models) {
      const brandSlug = brand.name.toLowerCase().replace(/\s+/g, '-');
      const productSlug = product.slug || product.name.toLowerCase().replace(/\s+/g, '-');

      sitemap += `
  <url>
    <loc>https://staycoolairco.nl/products/${brandSlug}/${productSlug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>`;

      // Add product image if available
      if (product.imageUrl || product.image) {
        const imageUrl = product.imageUrl || product.image;
        sitemap += `
    <image:image>
      <image:loc>https://staycoolairco.nl${imageUrl}</image:loc>
      <image:title>${brand.name} ${product.name} Airco</image:title>
      <image:caption>Professionele installatie van ${brand.name} ${product.name} airco in Limburg</image:caption>
    </image:image>`;
      }

      sitemap += `
  </url>`;
    }
  }

  sitemap += '\n</urlset>';

  fs.writeFileSync('public/products-sitemap.xml', sitemap);
  console.log('Products sitemap generated successfully!');
}

// Generate service areas sitemap
async function generateServiceAreasSitemap() {
  console.log('Generating service areas sitemap...');

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const lastmod = new Date().toISOString().split('T')[0];

  const allLocations = getProgrammaticLocations();

  // Add all location pages from the single source of truth
  for (const location of allLocations) {
    const priority = location.installationCount >= 100 ? '0.9' : '0.8';
    const changefreq = location.installationCount >= 100 ? 'weekly' : 'monthly';

    sitemap += `
  <url>
    <loc>https://staycoolairco.nl/airco-installatie/${location.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';

  fs.writeFileSync('public/service-areas-sitemap.xml', sitemap);
  console.log('Service areas sitemap generated successfully!');
}

// Generate blog sitemap
async function generateBlogSitemap() {
  console.log('Generating blog sitemap...');

  // Automatically discover blog posts
  const blogPosts = await discoverBlogPosts();
  console.log(`Found ${blogPosts.length} blog posts`);

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add blog index
  const blogIndexPath = path.join(process.cwd(), 'src', 'pages', 'blog', 'BlogPage.tsx');
  const blogIndexLastmod = await getFileModTime(blogIndexPath);

  sitemap += `
  <url>
    <loc>https://staycoolairco.nl/blog</loc>
    <lastmod>${blogIndexLastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;

  // Add blog posts
  for (const post of blogPosts) {
    sitemap += `
  <url>
    <loc>https://staycoolairco.nl/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';

  fs.writeFileSync('public/blog-sitemap.xml', sitemap);
  console.log('Blog sitemap generated successfully!');
}

// Generate sitemap index
async function generateSitemapIndex() {
  console.log('Generating sitemap index...');

  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://staycoolairco.nl/sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://staycoolairco.nl/products-sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://staycoolairco.nl/service-areas-sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://staycoolairco.nl/blog-sitemap.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync('public/sitemap-index.xml', sitemap);
  console.log('Sitemap index generated successfully!');
}

// Validate sitemaps
function validateSitemaps() {
  console.log('Validating sitemaps...');

  const sitemaps = [
    'public/sitemap.xml',
    'public/products-sitemap.xml',
    'public/service-areas-sitemap.xml',
    'public/blog-sitemap.xml',
    'public/sitemap-index.xml'
  ];

  for (const sitemapPath of sitemaps) {
    try {
      const content = fs.readFileSync(sitemapPath, 'utf-8');
      const urlCount = (content.match(/<url>/g) || []).length;
      const fileSize = fs.statSync(sitemapPath).size;

      console.log(`✓ ${path.basename(sitemapPath)}: ${urlCount} URLs, ${(fileSize / 1024).toFixed(2)} KB`);

      // Check sitemap limits
      if (urlCount > 50000) {
        console.warn(`⚠️  ${path.basename(sitemapPath)} exceeds 50,000 URL limit!`);
      }
      if (fileSize > 50 * 1024 * 1024) {
        console.warn(`⚠️  ${path.basename(sitemapPath)} exceeds 50MB size limit!`);
      }
    } catch (error) {
      console.error(`✗ Error validating ${sitemapPath}: ${error.message}`);
    }
  }
}

// Main function
async function generateAllSitemaps() {
  console.log('Starting unified sitemap generation...\n');

  try {
    await generateMainSitemap();
    await generateProductsSitemap();
    await generateServiceAreasSitemap();
    await generateBlogSitemap();
    await generateSitemapIndex();

    console.log('\nAll sitemaps generated successfully!');

    // Validate the generated sitemaps
    console.log('\nValidating sitemaps...');
    validateSitemaps();

  } catch (error) {
    console.error('Error generating sitemaps:', error);
    process.exit(1);
  }
}

// Run the generation
generateAllSitemaps();
