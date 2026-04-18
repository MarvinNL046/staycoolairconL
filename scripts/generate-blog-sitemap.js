import { writeFile } from 'fs/promises';
import { join } from 'path';

// Base domain
const DOMAIN = 'https://staycoolairco.nl';

// Blog posts data - we'll keep this updated manually for now
// In the future, this could be generated from a database or file scanning
const blogPosts = [
  // === PILLAR ===
  { slug: 'airco-offerte-limburg', lastmod: '2026-04-18', priority: '0.9', changefreq: 'monthly' },

  // === 2026 offerte cluster ===
  { slug: 'airco-offerte-maastricht', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'airco-offerte-heerlen', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'airco-offerte-sittard', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'airco-offerte-aanvragen-checklist', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'airco-offerte-online-vs-inmeting', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'waarom-verschillen-airco-offertes', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'multisplit-airco-offerte-wanneer-rendabel', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },

  // === 2026 research + buyer-intent cluster ===
  { slug: 'wat-kost-1-uur-airco-draaien', lastmod: '2026-04-17', priority: '0.8', changefreq: 'monthly' },
  { slug: 'airco-subsidie-2026-limburg', lastmod: '2026-04-17', priority: '0.8', changefreq: 'monthly' },
  { slug: 'beste-airco-merken-2026', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'airco-maastricht-complete-gids-2026', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'airco-storingen-herkennen', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },
  { slug: 'airco-levensduur-wanneer-vervangen', lastmod: '2026-04-18', priority: '0.8', changefreq: 'monthly' },

  // === legacy ===
  { slug: 'airco-specialist-limburg', lastmod: '2025-05-11', priority: '0.7', changefreq: 'monthly' },
  { slug: 'airco-onderhoud-limburg-belangrijk', lastmod: '2025-05-09', priority: '0.7', changefreq: 'monthly' },
  { slug: 'airco-installateur-limburg-kiezen', lastmod: '2025-05-08', priority: '0.7', changefreq: 'monthly' },
  { slug: 'airco-installatie-zuid-limburg', lastmod: '2025-05-31', priority: '0.7', changefreq: 'monthly' }
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
