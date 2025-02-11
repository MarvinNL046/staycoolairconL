import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create dist directories
const distTypesDir = path.join('dist', 'types');
const distDataDir = path.join('dist', 'data', 'brands');
fs.mkdirSync(distTypesDir, { recursive: true });
fs.mkdirSync(distDataDir, { recursive: true });

// First compile the products type file
const productsTypePath = path.join('src', 'types', 'products.ts');
try {
  execSync(`tsc ${productsTypePath} --outDir ${distTypesDir} --module ES2020 --moduleResolution bundler --target ES2020`);
  console.log('Compiled products.ts');
} catch (error) {
  console.error('Error compiling products.ts:', error);
  process.exit(1);
}

// Then compile brand files
const srcDir = path.join('src', 'data', 'brands');
const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.ts'));

files.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const distPath = path.join(distDataDir, file.replace('.ts', '.js'));
  
  try {
    execSync(`tsc ${srcPath} --outDir ${path.dirname(distPath)} --module ES2020 --moduleResolution bundler --target ES2020`);
    console.log(`Compiled ${file}`);
  } catch (error) {
    console.error(`Error compiling ${file}:`, error);
  }
});

console.log('Brand data compilation complete');
