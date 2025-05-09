import { writeFile } from 'fs/promises';
import { join } from 'path';

// Base domain
const DOMAIN = 'https://staycoolairco.nl';

// Blog posts data - we'll keep this updated manually for now
// In the future, this could be generated from a database or file scanning
const blogPosts = [
  {
    slug: 'airco-specialist-limburg',
    lastmod: '2025-05-11',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    slug: 'airco-offerte-limburg',
    lastmod: '2025-05-10',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    slug: 'airco-onderhoud-limburg-belangrijk',
    lastmod: '2025-05-09',
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    slug: 'airco-installateur-limburg-kiezen',
    lastmod: '2025-05-08',
    priority: '0.8',
    changefreq: 'monthly'
  }
];

// XML template for the blog sitemap
const blogSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/blog</loc>
    <lastmod>2025-05-11</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>${blogPosts.map(post => `
  <url>
    <loc>${DOMAIN}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>`).join('')}
</urlset>`;

// Save the blog sitemap file
async function generateBlogSitemap() {
  try {
    await writeFile(join(process.cwd(), 'public', 'blog-sitemap.xml'), blogSitemapXml);
    console.log('✅ Blog sitemap generated successfully!');
  } catch (error) {
    console.error('❌ Error generating blog sitemap:', error);
  }
}

// Execute the function
generateBlogSitemap();
