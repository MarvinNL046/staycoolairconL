import { aircoProducts } from '../src/data/aircoProducts.ts';

const withDim = aircoProducts.filter(p => p.dimensions.binnenunit || p.dimensions.buitenunit);
const noDim = aircoProducts.filter(p => !p.dimensions.binnenunit && !p.dimensions.buitenunit);

console.log('Met afmetingen:', withDim.length);
console.log('Zonder afmetingen:', noDim.length);

console.log('\n--- Voorbeelden ZONDER afmetingen ---');
noDim.slice(0, 5).forEach(p => {
  console.log('\n' + p.id + ': ' + p.name);
  console.log('  Brand:', p.brand);
  console.log('  Beschrijving (150 chars):', p.description.substring(0, 150) + '...');
});

console.log('\n--- Check brondata voor een product zonder afmetingen ---');
import fs from 'fs';
const rawData = JSON.parse(fs.readFileSync('./data/all_products.json', 'utf8'));
const exampleId = noDim[0]?.id;
if (exampleId) {
  const rawProduct = rawData.find(p => p.artikelnummer === exampleId);
  if (rawProduct) {
    console.log('\nRaw beschrijving van', exampleId + ':');
    console.log(rawProduct.description);
  }
}
