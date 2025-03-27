import fs from 'fs';
import {
  daikinData,
  lgData,
  mitsubishiHeavyData,
  samsungData,
  toshibaData,
  tosotData,
  aircoCoversData
} from '../dist/brands-data.js';

function generateProductsSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // Helper function to add a product to the sitemap
  function addProductToSitemap(brand, model, brandSlug) {
    const url = `https://staycoolairco.nl/products/${brandSlug}/${model.slug}`;
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>`;

    // Add main product image
    if (model.imageUrl) {
      sitemap += `
    <image:image>
      <image:loc>https://staycoolairco.nl${model.imageUrl}</image:loc>
      <image:title>${model.name}</image:title>
      <image:caption>${model.description}</image:caption>
    </image:image>`;
    }

    // Add additional product images
    if (model.images) {
      model.images.forEach(image => {
        sitemap += `
    <image:image>
      <image:loc>https://staycoolairco.nl${image.url}</image:loc>
      <image:title>${model.name}</image:title>
      <image:caption>${image.alt}</image:caption>
    </image:image>`;
      });
    }

    sitemap += `
  </url>`;
  }

  // Add Daikin products
  daikinData.models.forEach(model => {
    addProductToSitemap(daikinData, model, 'daikin');
  });

  // Add LG products
  lgData.models.forEach(model => {
    addProductToSitemap(lgData, model, 'lg');
  });

  // Add Mitsubishi Heavy products
  mitsubishiHeavyData.models.forEach(model => {
    addProductToSitemap(mitsubishiHeavyData, model, 'mitsubishi-heavy');
  });

  // Add Toshiba products
  toshibaData.models.forEach(model => {
    addProductToSitemap(toshibaData, model, 'toshiba');
  });

  // Add Tosot products
  tosotData.models.forEach(model => {
    addProductToSitemap(tosotData, model, 'tosot');
  });

  // Add Samsung products
  samsungData.models.forEach(model => {
    addProductToSitemap(samsungData, model, 'samsung');
  });

  // Add Airco Covers
  aircoCoversData.models.forEach(model => {
    const url = `https://staycoolairco.nl/airco-covers/${model.slug}`;
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>`;

    // Add main cover image
    if (model.imageUrl) {
      sitemap += `
    <image:image>
      <image:loc>https://staycoolairco.nl${model.imageUrl}</image:loc>
      <image:title>${model.name}</image:title>
      <image:caption>${model.description}</image:caption>
    </image:image>`;
    }

    // Add additional cover images
    if (model.images) {
      model.images.forEach(image => {
        sitemap += `
    <image:image>
      <image:loc>https://staycoolairco.nl${image.url}</image:loc>
      <image:title>${model.name}</image:title>
      <image:caption>${image.alt}</image:caption>
    </image:image>`;
      });
    }

    sitemap += `
  </url>`;
  });

  sitemap += '\n</urlset>';

  // Write the sitemap
  fs.writeFileSync('public/products-sitemap.xml', sitemap);
  console.log('Products sitemap generated successfully!');
}

generateProductsSitemap();
