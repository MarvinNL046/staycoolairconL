import fs from 'fs';
import path from 'path';

// Function to get all TSX files from a directory recursively
function getTsxFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(getTsxFiles(filePath));
    } else if (file.endsWith('.tsx') && !file.includes('[') && !file.includes(']')) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Convert file path to URL
function filePathToUrl(filePath) {
  // Convert Windows path separators to forward slashes
  filePath = filePath.replace(/\\/g, '/');
  
  // Extract the relative path from src/pages
  const pagesIndex = filePath.indexOf('src/pages/');
  if (pagesIndex === -1) return null;
  
  let url = filePath.slice(pagesIndex + 'src/pages/'.length).replace('.tsx', '');

  // Handle index files
  if (url.endsWith('/index')) {
    url = url.replace('/index', '');
  }

  // Convert PascalCase to kebab-case
  url = url.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

  // Special handling for articles and calculator
  if (url.startsWith('articles/')) {
    url = url.replace('articles/', 'kennisbank/');
  } else if (url === 'capacity-calculator') {
    url = 'capaciteit-calculator';
  }

  return `https://staycoolairco.nl/${url}`;
}

// Generate sitemap XML content
function generateSitemap(files) {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://staycoolairco.nl/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Add all pages
  for (const file of files) {
    const url = filePathToUrl(file);
    if (url) {
      const isArticle = url.includes('/kennisbank/');
      // Remove domain from URL for main page check
      const urlPath = url.replace('https://staycoolairco.nl', '');
      // Define main pages and pages to skip
      const mainPages = ['/', '/products', '/airco-covers', '/werkgebied', '/contact'];
      const isMainPage = mainPages.includes(urlPath);
      
      // Skip pages that don't exist
      const skipPages = [
        '/brand-detail',
        '/common-problems',
        '/home',
        '/knowledge-base',
        '/maintenance-procedures',
        '/privacy',
        '/product-detail',
        '/product-example',
        '/service-area',
        '/terms'
      ];
      
      // Handle path mapping
      let finalPath = urlPath;
      let finalUrl = url;
      if (urlPath === '/service-area') {
        finalPath = '/werkgebied';
        finalUrl = 'https://staycoolairco.nl/werkgebied';
      }

      // Only include if page exists and isn't dynamic
      if ((!skipPages.includes(finalPath) || mainPages.includes(finalPath)) && !finalUrl.includes('[') && !finalUrl.includes(']')) {
        let priority = '0.8';
        let changefreq = 'monthly';

        if (isMainPage) {
          priority = '0.9';
          changefreq = 'weekly';
        } else if (isArticle) {
          priority = '0.7';
          changefreq = 'monthly';
        }

        sitemap += `
  <url>
    <loc>${finalUrl}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      }
    }
  }

  sitemap += '\n</urlset>';
  return sitemap;
}

// Main execution
const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = getTsxFiles(pagesDir);
const sitemap = generateSitemap(files);

// Write to both locations
fs.writeFileSync('sitemap.xml', sitemap);
fs.writeFileSync('public/sitemap.xml', sitemap);

console.log('Sitemap generated successfully!');
