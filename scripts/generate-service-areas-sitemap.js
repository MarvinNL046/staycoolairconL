import fs from 'fs';

function generateServiceAreasSitemap() {
  // Only include hand-written quality location pages
  const qualityLocations = [
    'roermond',
    'maastricht', 
    'heerlen',
    'venlo',
    'sittard',
    'weert',
    'geleen',
    'stein',
    'landgraaf'
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add each quality location page
  for (const citySlug of qualityLocations) {
    sitemap += `
  <url>
    <loc>https://staycoolairco.nl/airco-installatie/${citySlug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';

  // Write the sitemap
  fs.writeFileSync('public/service-areas-sitemap.xml', sitemap);
  console.log('Service areas sitemap generated successfully with quality locations only!');
}

generateServiceAreasSitemap();
