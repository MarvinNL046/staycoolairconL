import assert from 'node:assert/strict';
import fs from 'node:fs';
import { build } from 'esbuild';
import { generateRoutingManifest } from './generate-routing-manifest.mjs';
import ts from 'typescript';
import { matchRoutes } from 'react-router-dom';
const brandHelpers = await build({entryPoints:['src/utils/productBrands.ts'],bundle:true,platform:'node',format:'esm',write:false});
const {productBrandSlug} = await import('data:text/javascript;base64,'+Buffer.from(brandHelpers.outputFiles[0].text).toString('base64'));
const manifest = await generateRoutingManifest();
// Check actual route precedence as well as the server allowlist: a static route
// rendering ProductDetail without :brand/:model previously lost both parameters.
const appSource=ts.createSourceFile('App.tsx',fs.readFileSync('src/App.tsx','utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
const renderedRoutes=[];
function collectRoutes(node) {
  if(ts.isJsxSelfClosingElement(node)&&node.tagName.getText(appSource)==='Route') {
    const attr=node.attributes.properties.find(p=>ts.isJsxAttribute(p)&&p.name.getText(appSource)==='path');
    if(attr?.initializer&&ts.isStringLiteral(attr.initializer)) renderedRoutes.push({path:attr.initializer.text});
  }
  ts.forEachChild(node,collectRoutes);
}
collectRoutes(appSource);
const output = await build({entryPoints:['middleware.ts'],bundle:true,platform:'node',format:'esm',write:false});
const {default:middleware,isKnownPage} = await import('data:text/javascript;base64,' + Buffer.from(output.outputFiles[0].text).toString('base64'));
for (const path of manifest.paths) assert.equal(isKnownPage(path),true,path);
for (const city of manifest.cities) {
  assert.equal(isKnownPage('/airco-installatie/'+city),true);
  for (const room of manifest.rooms) assert.equal(isKnownPage(`/airco/${room}/${city}`),true);
}
for (const id of manifest.products) {
  assert.equal(isKnownPage('/products/airco/'+id),true);
  assert.equal(isKnownPage('/aircos/'+id),true);
}
for (const brand of manifest.brands) for (const model of brand.models) assert.equal(isKnownPage(`/products/${brand.name.replace(/ /g,'-')}/${model}`),true);
for(const brand of manifest.brands) {
  assert.equal(isKnownPage(`/products/${productBrandSlug(brand.name)}`),true,brand.name);
  for(const model of brand.models) {
    const path=`/products/${productBrandSlug(brand.name)}/${model}`;
    assert.equal(isKnownPage(path),true,model);
    const match=matchRoutes(renderedRoutes,path)?.at(-1);
    assert.equal(match?.params.brand,productBrandSlug(brand.name),path);
    assert.equal(match?.params.model,model,path);
  }
}
for (const path of ['/bestaat-echt-niet','/404','/onderhoud/extra','/products/airco/verzonnen-product','/products/daikin/verzonnen-model','/products/verzonnen-merk','/airco-installatie/verzonnen-stad','/airco/verzonnen-ruimte/heerlen','/%E0%A4%A']) {
  const response = middleware(new Request('https://staycoolairco.nl'+path));
  assert.equal(response?.status,404,path);
  assert.equal(response.headers.get('X-Robots-Tag'),'noindex, follow');
  assert.match(await response.text(),/Pagina niet gevonden/);
}
for(const path of ['/onderhoud?pakket=basis','/api/send-email','/assets/app.js','/images/a.webp','/sitemap.xml']) assert.equal(middleware(new Request('https://staycoolairco.nl'+path)),undefined,path);
const head = middleware(new Request('https://staycoolairco.nl/onbekend',{method:'HEAD'}));
assert.equal(head.status,404); assert.equal(await head.text(),'');
const hosting = JSON.parse(fs.readFileSync('vercel.json','utf8'));
for (const redirect of hosting.redirects) assert.equal(middleware(new Request('https://staycoolairco.nl'+redirect.source)),undefined);
const sitemapPaths = new Set();
for (const file of fs.readdirSync('public').filter(f => /^sitemap.*\.xml$/.test(f))) {
  for (const match of fs.readFileSync('public/'+file,'utf8').matchAll(/<loc>(.*?)<\/loc>/g)) {
    const path = new URL(match[1]).pathname;
    if (!path.endsWith('.xml')) sitemapPaths.add(path);
  }
}
const unmatched = [...sitemapPaths].filter(p => !isKnownPage(p));
console.log('Sitemap paths requiring review:',JSON.stringify(unmatched));
console.log(`Routing checks passed: ${manifest.paths.length} explicit pages, ${manifest.cities.length} cities, ${manifest.products.length} products; invalid pages, assets, query strings, redirects and HEAD.`);

for(const [path,destination] of [['/onderhoud/','/onderhoud'],['/werkgebied/heerlen','/airco-installatie/heerlen'],['/products/airco-bescherming/omkasting/oud-model','/products/airco-covers'],['/Contact/','/contact'],['/kosten-airco-plaatsen.html','/kosten-airco-plaatsen']]){
 const response=middleware(new Request('https://staycoolairco.nl'+path+'?bron=test'));assert.equal(response.status,308);const url=new URL(response.headers.get('location'));assert.equal(url.pathname,destination);assert.equal(url.search,'?bron=test');
}
