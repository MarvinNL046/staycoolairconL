import fs from 'fs';
import path from 'path';
import pkg from 'papaparse';
const { parse } = pkg;

function generateServiceAreasSitemap() {
  // Read the CSV file
  const csvContent = fs.readFileSync(path.join(process.cwd(), 'public', 'service-areas.csv'), 'utf-8');
  
  // Parse CSV content
  const { data } = parse(csvContent, {
    header: true,
    skipEmptyLines: true
  });

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add each city
  for (const row of data) {
    const citySlug = row.city.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens

    sitemap += `
  <url>
    <loc>https://staycoolairco.nl/werkgebied/${citySlug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';

  // Write the sitemap
  fs.writeFileSync('public/service-areas-sitemap.xml', sitemap);
  console.log('Service areas sitemap generated successfully!');
}

generateServiceAreasSitemap();
