import fs from 'node:fs';
import ts from 'typescript';
import { build } from 'esbuild';

export async function generateRoutingManifest() {
  const source = ts.createSourceFile('App.tsx', fs.readFileSync('src/App.tsx', 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const paths = [];
  const redirects = {};
  function visit(node) {
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(source) === 'Route') {
      const attr = node.attributes.properties.find(p => ts.isJsxAttribute(p) && p.name.getText(source) === 'path');
      if (attr?.initializer && ts.isStringLiteral(attr.initializer)) {
        const path = attr.initializer.text;
        paths.push(path);
        const element = node.attributes.properties.find(p => ts.isJsxAttribute(p) && p.name.getText(source) === 'element')?.initializer?.expression;
        if (element && ts.isJsxSelfClosingElement(element) && element.tagName.getText(source) === 'Navigate') {
          const to = element.attributes.properties.find(p => ts.isJsxAttribute(p) && p.name.getText(source) === 'to')?.initializer;
          if (to && ts.isStringLiteral(to)) redirects[path] = to.text;
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  const dynamic = paths.filter(p => p.includes(':')).sort();
  const expected = ['/products/airco/:productId', '/products/:brand', '/products/:brand/:model', '/werkgebied/:city', '/products/airco-bescherming/omkasting/:slug', '/aircos/:productId', '/airco-installatie/:citySlug', '/airco/:ruimte/:city'].sort();
  if (JSON.stringify(dynamic) !== JSON.stringify(expected)) throw new Error('Dynamic routes changed: update middleware validation before building.');
  const bundle = await build({stdin:{contents:`
    import { productData } from './src/data/products';
    import { aircoProducts } from './src/data/aircoProducts';
    import { programmaticLocations } from './src/data/programmaticLocations';
    import { ruimteData } from './src/data/programmaticRuimteStad';
    import { servicePages } from './src/data/servicePages';
    import { productBrandSlug } from './src/utils/productBrands';
    export default {
      brands: productData.brands.map(b => ({name:b.name.toLowerCase(),slug:productBrandSlug(b.name),models:b.models.map(m => m.slug)})),
      products: aircoProducts.map(p => p.id),
      cities: programmaticLocations.map(c => c.slug),
      rooms: ruimteData.map(r => r.slug),
      services: servicePages.map(p => '/' + p.slug)
    };`,resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',write:false});
  const data = (await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'))).default;
  for (const slug of ['lg-mobiele-airco', 'tosot-mobiele-airco']) {
    const brand = data.brands.find(b => b.slug === slug);
    redirects['/products/' + slug] = brand?.models[0] ? `/products/${slug}/${brand.models[0]}` : '/products';
  }
  for (const redirect of JSON.parse(fs.readFileSync('vercel.json', 'utf8')).redirects || []) {
    redirects[redirect.source] = redirect.destination;
  }
  const manifest = {paths:[...new Set([...paths.filter(p => p.startsWith('/') && !p.includes(':') && !p.includes('*')), ...data.services])].sort(),...data, redirects};
  fs.writeFileSync('routing-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
  return manifest;
}
if (process.argv[1]?.endsWith('generate-routing-manifest.mjs')) await generateRoutingManifest();
