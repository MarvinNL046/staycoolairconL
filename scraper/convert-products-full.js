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

// Get all images for a product
function getProductImages(product) {
  const productId = product.artikelnummer;
  const imagesDir = '../public/images/airco-products/';
  const images = [];

  try {
    const files = fs.readdirSync(imagesDir);
    const productFiles = files.filter(f => f.startsWith(productId + '_'));

    // Sort images: main first, then dimensions, energy, other
    const sortOrder = ['main', 'dimensions', 'energy', 'other'];
    productFiles.sort((a, b) => {
      const getOrder = (filename) => {
        for (let i = 0; i < sortOrder.length; i++) {
          if (filename.includes(sortOrder[i])) return i;
        }
        return sortOrder.length;
      };
      return getOrder(a) - getOrder(b);
    });

    productFiles.forEach(file => {
      // Determine image type
      let type = 'other';
      if (file.includes('main')) type = 'main';
      else if (file.includes('dimension')) type = 'dimensions';
      else if (file.includes('energy') || file.includes('Energy')) type = 'energy';

      images.push({
        path: `/images/airco-products/${file}`,
        type: type,
        filename: file
      });
    });
  } catch (e) {
    console.error(`Error reading images for ${productId}:`, e.message);
  }

  return images;
}

// Extract dimensions from specifications object
function extractDimensions(specs) {
  const hoogteBinnen = specs['Hoogte binnenunit'];
  const breedteBinnen = specs['Breedte binnenunit'];
  const diepteBinnen = specs['Diepte binnenunit'];

  const hoogteBuiten = specs['Hoogte buitenunit'];
  const breedteBuiten = specs['Breedte buitenunit'];
  const diepteBuiten = specs['Diepte buitenunit'];

  return {
    binnenunit: (hoogteBinnen && breedteBinnen && diepteBinnen)
      ? `${hoogteBinnen} x ${breedteBinnen} x ${diepteBinnen}`.replace(/\s*mm/g, '') + ' mm'
      : null,
    buitenunit: (hoogteBuiten && breedteBuiten && diepteBuiten)
      ? `${hoogteBuiten} x ${breedteBuiten} x ${diepteBuiten}`.replace(/\s*mm/g, '') + ' mm'
      : null
  };
}

// Extract cooling/heating capacity from specifications object
function extractCapacities(specs) {
  // Try different spec key variations
  const koelMax = specs['Koelcapaciteit (max)'] || specs['Koelcapaciteit'];
  const verwarmMax = specs['Verwarmingscapaciteit (max)'] || specs['Verwarmingscapaciteit'];

  const parseCapacity = (val) => {
    if (!val) return null;
    const match = val.match(/(\d+[,.]?\d*)/);
    return match ? match[1].replace(',', '.') : null;
  };

  return {
    cooling: parseCapacity(koelMax),
    heating: parseCapacity(verwarmMax)
  };
}

// Extract energy efficiency from specifications
function extractEnergyInfo(specs) {
  return {
    seer: specs['SEER (koeling)'] || null,
    scop: specs['SCOP (verwarmen)'] || null,
    energyLabelCooling: specs['Energie-efficiëntieklasse koelen'] || specs['Energielabel'] || null,
    energyLabelHeating: specs['Energie-efficiëntieklasse verwarmen'] || null
  };
}

// Extract noise levels from specifications
function extractNoiseLevels(specs) {
  return {
    indoorMin: specs['Geluidsdrukniveau binnenunit koelen (min)'] || null,
    indoorMax: specs['Geluidsdrukniveau binnenunit koelen (max)'] || null,
    outdoorMin: specs['Geluidsdrukniveau buitenunit koelen (min)'] || null,
    outdoorMax: specs['Geluidsdrukniveau buitenunit koelen (max)'] || null
  };
}

const products = data.map(p => {
  const images = getProductImages(p);
  const mainImage = images.find(img => img.type === 'main')?.path || images[0]?.path || null;
  const specs = p.specifications || {};
  const dimensions = extractDimensions(specs);
  const capacities = extractCapacities(specs);
  const energy = extractEnergyInfo(specs);
  const noise = extractNoiseLevels(specs);

  return {
    id: p.artikelnummer,
    sku: p.artikelnummer_fabrikant || null,
    name: p.name,
    brand: extractBrand(p.category_name),
    type: extractType(p.category_name),
    category: p.category_name,
    capacity: extractCapacity(p.name),
    coolingCapacity: capacities.cooling,
    heatingCapacity: capacities.heating,
    description: p.description || '',
    dimensions: dimensions,
    energyLabel: energy.energyLabelCooling,
    seer: energy.seer,
    scop: energy.scop,
    soundLevel: noise.indoorMax,
    specifications: specs,
    image: mainImage,
    images: images,
    url: p.url,
    documents: p.documents || []
  };
}).filter(p => p.images.length > 0); // Alleen producten met afbeeldingen

const output = `// Auto-gegenereerd product data bestand
// Gegenereerd op: ${new Date().toISOString()}

export interface ProductImage {
  path: string;
  type: 'main' | 'dimensions' | 'energy' | 'other';
  filename: string;
}

export interface ProductDocument {
  url: string;
  name: string;
}

export interface AircoProduct {
  id: string;
  sku: string | null;
  name: string;
  brand: 'LG' | 'Tosot' | 'MaxiCool' | 'Overig';
  type: 'single-split' | 'multi-split' | 'commercieel' | 'overig';
  category: string;
  capacity: string | null;
  coolingCapacity: string | null;
  heatingCapacity: string | null;
  description: string;
  dimensions: {
    binnenunit: string | null;
    buitenunit: string | null;
  };
  energyLabel: string | null;
  seer: string | null;
  scop: string | null;
  soundLevel: string | null;
  specifications: Record<string, string>;
  image: string | null;
  images: ProductImage[];
  url: string;
  documents: ProductDocument[];
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
console.log('Total images:', products.reduce((sum, p) => sum + p.images.length, 0));
