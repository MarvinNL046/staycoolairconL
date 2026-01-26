import fs from 'fs';
import path from 'path';

const data = JSON.parse(fs.readFileSync('./data/all_products.json', 'utf8'));

// Helper functie om capaciteit uit naam te halen
function extractCapacity(name) {
  const match = name.match(/(\d+[,.]?\d*)\s*kW/i);
  return match ? match[1].replace(',', '.') : null;
}

// Helper functie om merk uit category_name te halen
function extractBrand(categoryName) {
  if (categoryName.includes('LG')) return 'LG';
  if (categoryName.includes('Tosot')) return 'Tosot';
  if (categoryName.includes('MaxiCool')) return 'MaxiCool';
  return 'Overig';
}

// Helper functie om type te bepalen
function extractType(categoryName) {
  if (categoryName.includes('Single-split')) return 'single-split';
  if (categoryName.includes('Multi-split')) return 'multi-split';
  if (categoryName.includes('Commercieel')) return 'commercieel';
  return 'overig';
}

// Zoek de juiste main image filename
function findMainImage(sku) {
  const imagesDir = '../public/images/airco-products/';
  try {
    const files = fs.readdirSync(imagesDir);
    const match = files.find(f => f.startsWith(sku + '_'));
    return match ? `/images/airco-products/${match}` : null;
  } catch {
    return null;
  }
}

const products = data.map(p => ({
  id: p.artikelnummer,
  name: p.name,
  brand: extractBrand(p.category_name),
  type: extractType(p.category_name),
  category: p.category_name,
  capacity: extractCapacity(p.name),
  description: p.description ? p.description.split('\n')[0].substring(0, 200) + '...' : '',
  image: findMainImage(p.artikelnummer),
  url: p.url
})).filter(p => p.image); // Alleen producten met afbeelding

const output = `// Auto-gegenereerd product data bestand
// Gegenereerd op: ${new Date().toISOString()}

export interface AircoProduct {
  id: string;
  name: string;
  brand: 'LG' | 'Tosot' | 'MaxiCool' | 'Overig';
  type: 'single-split' | 'multi-split' | 'commercieel' | 'overig';
  category: string;
  capacity: string | null;
  description: string;
  image: string | null;
  url: string;
}

export const aircoProducts: AircoProduct[] = ${JSON.stringify(products, null, 2)};

export const productsByBrand = {
  LG: aircoProducts.filter(p => p.brand === 'LG'),
  Tosot: aircoProducts.filter(p => p.brand === 'Tosot'),
  MaxiCool: aircoProducts.filter(p => p.brand === 'MaxiCool'),
};

export const productsByType = {
  'single-split': aircoProducts.filter(p => p.type === 'single-split'),
  'multi-split': aircoProducts.filter(p => p.type === 'multi-split'),
  'commercieel': aircoProducts.filter(p => p.type === 'commercieel'),
};
`;

fs.writeFileSync('../src/data/aircoProducts.ts', output);
console.log('Created aircoProducts.ts with', products.length, 'products');
