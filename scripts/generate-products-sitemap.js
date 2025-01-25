import fs from 'fs';

function generateProductsSitemap() {
  // Define products data directly to avoid TypeScript imports
  const products = {
    daikin: [
      { slug: 'ururu-sarara' },
      { slug: 'sensira-ftxf' },
      { slug: 'comfora' },
      { slug: 'perfera-ftxm-r' },
      { slug: 'stylish' },
      { slug: 'perfera-vloermodel' },
      { slug: 'emura' }
    ],
    lg: [
      { slug: 'dualcool-standaard-plus' },
      { slug: 'dualcool-premium' },
      { slug: 'artcool-mirror' },
      { slug: 'artcool-black' }
    ],
    'mitsubishi-heavy': [
      { slug: 'srk-zs-w' },
      { slug: 'srk-zsx-w' }
    ],
    toshiba: [
      { slug: 'seiya' },
      { slug: 'shorai-edge' },
      { slug: 'haori' },
      { slug: 'daiseikai-9' }
    ],
    tosot: [
      { slug: 'sophia' },
      { slug: 'storm' }
    ]
  };

  const aircoCovers = [
    { slug: 'airco-omkasting-antraciet-medium' },
    { slug: 'airco-omkasting-antraciet-large' },
    { slug: 'airco-omkasting-wit-medium' },
    { slug: 'airco-omkasting-wit-large' }
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add airco units
  for (const [brand, models] of Object.entries(products)) {
    for (const model of models) {
      sitemap += `
  <url>
    <loc>https://staycoolairco.nl/products/${brand}/${model.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }
  }

  // Add airco covers
  for (const cover of aircoCovers) {
    sitemap += `
  <url>
    <loc>https://staycoolairco.nl/airco-covers/${cover.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }

  sitemap += '\n</urlset>';

  // Write the sitemap
  fs.writeFileSync('public/products-sitemap.xml', sitemap);
  console.log('Products sitemap generated successfully!');
}

generateProductsSitemap();
