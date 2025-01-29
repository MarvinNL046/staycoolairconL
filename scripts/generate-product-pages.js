import fs from 'fs';
import path from 'path';

// Product data
const productData = {
  brands: [
    {
      name: 'Daikin',
      models: [
        {
          name: 'Ururu Sarara',
          slug: 'ururu-sarara',
          description: 'De Daikin Ururu Sarara is het meest geavanceerde model met unieke bevochtigings- en ontvochtigingsfuncties.',
          images: [
            { url: '/images/products/Ururu-Sarara-left.webp', alt: 'Daikin Ururu Sarara - Links' },
            { url: '/images/products/Ururu-Sarara-right.webp', alt: 'Daikin Ururu Sarara - Rechts' }
          ],
          price: '€4.500,- inclusief standaard installatie',
          energyLabel: 'A+++',
          capacity: '2,5 kW - 5,0 kW',
          features: [
            'Unieke bevochtigingsfunctie (Ururu)',
            'Ontvochtigingsfunctie zonder temperatuurdaling (Sarara)',
            'Flash Streamer technologie'
          ],
          specifications: [
            { label: 'Koelcapaciteit', value: '2,5 - 5,0 kW' },
            { label: 'SEER', value: 'tot 9.54' }
          ]
        },
        {
          name: 'Stylish',
          slug: 'stylish',
          description: 'De Daikin Stylish combineert stijlvol design met geavanceerde technologie.',
          images: [
            { url: '/images/products/daikin-stylish-wit.webp', alt: 'Daikin Stylish - Wit' },
            { url: '/images/products/daikin-stylish-zwart.webp', alt: 'Daikin Stylish - Zwart' }
          ],
          price: '€2.710,- inclusief standaard installatie',
          energyLabel: 'A+++',
          capacity: '2,0 kW - 5,0 kW',
          features: [
            'Coanda-effect voor optimale luchtverdeling',
            'Flash Streamer technologie',
            'Ingebouwde wifi-adapter'
          ],
          specifications: [
            { label: 'Koelcapaciteit', value: '2,0 - 5,0 kW' },
            { label: 'SEER', value: 'tot 8.74' }
          ]
        }
      ]
    },
    {
      name: 'Mitsubishi',
      models: [
        {
          name: 'Daiseikai 10',
          slug: 'daiseikai-10',
          description: 'De Mitsubishi Daiseikai 10 biedt superieure prestaties en comfort.',
          images: [
            { url: '/images/products/Daiseikai 10-Hout-links-open_5_11zon.webp', alt: 'Daiseikai 10 - Links' },
            { url: '/images/products/Daiseikai 10-Hout-vooraanzicht_2_11zon.webp', alt: 'Daiseikai 10 - Voor' }
          ],
          price: '€3.200,- inclusief standaard installatie',
          energyLabel: 'A+++',
          capacity: '2,5 kW - 5,0 kW',
          features: [
            'Plasma-technologie voor luchtzuivering',
            'Ultra-stil (slechts 20 dB)',
            'Ingebouwde wifi-module'
          ],
          specifications: [
            { label: 'Koelcapaciteit', value: '2,5 - 5,0 kW' },
            { label: 'SEER', value: 'tot 8.90' }
          ]
        }
      ]
    }
  ]
};

const PAGES_DIR = path.join(process.cwd(), 'src', 'pages', 'products');

// Ensure the products directory exists
if (!fs.existsSync(PAGES_DIR)) {
  fs.mkdirSync(PAGES_DIR, { recursive: true });
}

function generateProductPage(brand, model) {
  const fileName = `${model.slug}.tsx`;
  const filePath = path.join(PAGES_DIR, fileName);

  const content = `import React from 'react';
import ProductModelTemplate from '../../templates/ProductModelTemplate';

export default function ${model.name.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <ProductModelTemplate
      brand="${brand.name}"
      model="${model.name}"
      description="${model.description.replace(/"/g, '\\"')}"
      images={${JSON.stringify(model.images)}}
      price="${model.price || ''}"
      energyLabel="${model.energyLabel}"
      capacity="${model.capacity}"
      features={${JSON.stringify(model.features)}}
      specifications={${JSON.stringify(model.specifications)}}
      slug="${model.slug}"
    />
  );
}`;

  fs.writeFileSync(filePath, content);
  console.log(`Generated product page: ${filePath}`);
}

// Generate pages for each model
productData.brands.forEach(brand => {
  brand.models?.forEach(model => {
    generateProductPage(brand, model);
  });
});

// Update App.tsx with new routes
const appPath = path.join(process.cwd(), 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf-8');

// Generate route imports
const routeImports = productData.brands
  .flatMap(brand => 
    brand.models?.map(model => 
      `import ${model.name.replace(/[^a-zA-Z0-9]/g, '')}Page from './pages/products/${model.slug}';`
    ) || []
  )
  .join('\n');

// Generate routes
const routes = productData.brands
  .flatMap(brand =>
    brand.models?.map(model =>
      `<Route path="/products/${brand.name.toLowerCase()}/${model.slug}" element={<${model.name.replace(/[^a-zA-Z0-9]/g, '')}Page />} />`
    ) || []
  )
  .join('\n          ');

// Update App.tsx content
const updatedAppContent = appContent
  // Add imports after react-router-dom import
  .replace(
    /(import {[^}]+} from 'react-router-dom';)/,
    `$1\n${routeImports}`
  )
  // Add routes before the first existing route
  .replace(
    /(<Route path="\/"\s+element={<Home \/>}\s*\/>)/,
    `${routes}\n                $1`
  );

fs.writeFileSync(appPath, updatedAppContent);
console.log('Updated App.tsx with new routes');

// Generate sitemap entries
const sitemapPath = path.join(process.cwd(), 'public', 'products-sitemap.xml');
const sitemapEntries = productData.brands
  .flatMap(brand =>
    brand.models?.map(model => `
    <url>
      <loc>https://staycoolairco.nl/products/${brand.name.toLowerCase()}/${model.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`
    ) || []
  )
  .join('\n');

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries}
</urlset>`;

fs.writeFileSync(sitemapPath, sitemapContent);
console.log('Generated products sitemap');
