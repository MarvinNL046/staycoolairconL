import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// Create virtual index file
const brandsDir = path.join('src', 'data', 'brands');
const files = fs.readdirSync(brandsDir)
  .filter(file => file.endsWith('.ts') && file !== 'index.ts');

const indexContent = files.map(file => {
              const name = path.basename(file, '.ts');
              // Convert hyphenated names to camelCase for variable names
              const varName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
              // Special case for airco-covers
              if (name === 'airco-covers') {
                return `import { aircoCoverData as aircoCoversData } from './${name}'; export { aircoCoversData };`;
              }
              return `export { ${varName}Data } from './${name}';`;
}).join('\n');

fs.writeFileSync(path.join(brandsDir, 'index.ts'), indexContent);

// Bundle the files
esbuild.build({
  entryPoints: [path.join(brandsDir, 'index.ts')],
  bundle: true,
  outfile: 'dist/brands-data.js',
  format: 'esm',
  platform: 'node',
  target: 'es2020',
}).catch(() => process.exit(1));
