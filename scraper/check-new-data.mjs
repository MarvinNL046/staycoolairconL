import fs from 'fs';

// Read the generated file and parse the data
const content = fs.readFileSync('../src/data/aircoProducts.ts', 'utf8');
const match = content.match(/export const aircoProducts: AircoProduct\[\] = (\[[\s\S]*?\]);/);
const aircoProducts = JSON.parse(match[1]);

const withDim = aircoProducts.filter(p => p.dimensions.binnenunit || p.dimensions.buitenunit);
const withSpecs = aircoProducts.filter(p => Object.keys(p.specifications).length > 10);
const withEnergy = aircoProducts.filter(p => p.energyLabel);
const withSeer = aircoProducts.filter(p => p.seer);

console.log('Totaal producten:', aircoProducts.length);
console.log('Met afmetingen:', withDim.length);
console.log('Met 10+ specs:', withSpecs.length);
console.log('Met energielabel:', withEnergy.length);
console.log('Met SEER:', withSeer.length);

console.log('\n--- Voorbeeld Tosot product met alle data ---');
const example = withDim.find(p => p.brand === 'Tosot');
if (example) {
  console.log('Product:', example.name);
  console.log('Binnenunit:', example.dimensions.binnenunit);
  console.log('Buitenunit:', example.dimensions.buitenunit);
  console.log('Energielabel:', example.energyLabel);
  console.log('SEER:', example.seer);
  console.log('Koelcapaciteit:', example.coolingCapacity);
  console.log('Geluidsniveau:', example.soundLevel);
  console.log('Aantal specs:', Object.keys(example.specifications).length);
}

console.log('\n--- Voorbeeld LG product ---');
const lgExample = withDim.find(p => p.brand === 'LG');
if (lgExample) {
  console.log('Product:', lgExample.name);
  console.log('Binnenunit:', lgExample.dimensions.binnenunit);
  console.log('Buitenunit:', lgExample.dimensions.buitenunit);
  console.log('Energielabel:', lgExample.energyLabel);
  console.log('SEER:', lgExample.seer);
  console.log('Aantal specs:', Object.keys(lgExample.specifications).length);
}

console.log('\n--- Voorbeeld MaxiCool product ---');
const mcExample = withDim.find(p => p.brand === 'MaxiCool');
if (mcExample) {
  console.log('Product:', mcExample.name);
  console.log('Binnenunit:', mcExample.dimensions.binnenunit);
  console.log('Buitenunit:', mcExample.dimensions.buitenunit);
  console.log('Energielabel:', mcExample.energyLabel);
  console.log('Aantal specs:', Object.keys(mcExample.specifications).length);
}

console.log('\n--- Producten ZONDER afmetingen ---');
const noDim = aircoProducts.filter(p => !p.dimensions.binnenunit && !p.dimensions.buitenunit);
console.log('Totaal zonder afmetingen:', noDim.length);
noDim.slice(0, 5).forEach(p => {
  console.log(' -', p.name, '| specs:', Object.keys(p.specifications).length);
});
