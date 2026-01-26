import BrightDataClient from './brightdata-client.js';
import MaxicoolParser from './parser.js';
import fs from 'fs';

const client = new BrightDataClient();
const parser = new MaxicoolParser();

const url = 'https://www.maxicool.nl/nl_NL/p/tosot-pular-by-gree-single-split-airco-r32-22-kw-set/29375/';

console.log('Fetching HTML...');
const html = await client.fetch(url);

// Save HTML for analysis
fs.writeFileSync('./data/test-page.html', html);
console.log('Saved HTML to data/test-page.html');

// Parse with our parser
const product = parser.parseProductPage(html, url);
console.log('\nParsed product:');
console.log('Name:', product.name);
console.log('Brand:', product.brand);
console.log('Specs count:', Object.keys(product.specifications).length);
console.log('\nSpecifications:');
console.log(JSON.stringify(product.specifications, null, 2));
