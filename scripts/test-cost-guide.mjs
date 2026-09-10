import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { build } from 'esbuild';

const source = await build({ entryPoints: ['src/data/costGuide.ts'], bundle: true, platform: 'node', format: 'esm', write: false });
const { costExamples, costInquiry, costSeo } = await import('data:text/javascript;base64,' + Buffer.from(source.outputFiles[0].text).toString('base64'));
// Controle tegen de afzonderlijk vastgelegde Cashflow-bedragen: btw precies één keer.
assert.deepEqual(costExamples.map(x => x.grossCents), [139500, 159539, 228901, 319150, 391133]);
for (const example of costExamples) {
  assert.match(costInquiry(example), /incl\. btw, installatie en materialen/);
  assert.ok(example.source.sourceSlug);
}
const html = await readFile('dist/kosten-airco-plaatsen.html', 'utf8');
function checkHtml(content) {
  assert.equal((content.match(/<h1\b/g) || []).length, 1);
  assert.equal((content.match(/<title\b[^>]*>/g) || []).length, 1);
  assert.equal((content.match(/name="description"/g) || []).length, 1);
  assert.equal((content.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(content.includes(costSeo.canonical));
  assert.ok(content.includes('Wat kost een airco inclusief installatie?'));
  assert.ok(!content.includes('class="initial-loader"'));
  assert.ok(!content.includes('FAQPage'));
  for (const example of costExamples) {
    const formatted = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(example.grossCents / 100);
    assert.ok(content.includes(formatted), formatted);
  }
  const ids = [...content.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, 'Dubbele HTML-ids');
  for (const match of content.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), 'Anker ' + match[1]);
  for (const match of content.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
    const schema = JSON.parse(match[1]);
    if (schema['@graph']) assert.equal(schema['@graph'][0].url, costSeo.canonical);
  }
  assert.match(content, /href="tel:0462021430"/);
  assert.match(content, /href="mailto:info@staycoolairco.nl/);
}
checkHtml(html);
const oldPath = '/seo/pillar-9-kosten-prijzen/kosten-airco-plaatsen';
const hosting = JSON.parse(await readFile('vercel.json', 'utf8'));
assert.ok(hosting.redirects.some(r => r.source === oldPath && r.destination === '/kosten-airco-plaatsen' && r.permanent));
assert.equal(hosting.cleanUrls, true);
assert.equal(hosting.trailingSlash, false);
assert.equal(hosting.rewrites, undefined);
for (const file of ['public/sitemap.xml', 'public/sitemap-seo.xml']) assert.ok(!(await readFile(file, 'utf8')).includes(oldPath));
assert.equal(((await readFile('public/sitemap.xml', 'utf8')).match(/<loc>https:\/\/staycoolairco.nl\/kosten-airco-plaatsen<\/loc>/g) || []).length, 1);
const routingSource = await build({ entryPoints: ['middleware.ts'], bundle: true, platform: 'node', format: 'esm', write: false });
const { isKnownPage } = await import('data:text/javascript;base64,' + Buffer.from(routingSource.outputFiles[0].text).toString('base64'));
for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"#]*)"/g)) assert.ok(isKnownPage(match[1]), 'Interne paginalink ' + match[1]);
if (process.argv.includes('--http')) {
  for (const path of ['/kosten-airco-plaatsen', '/kosten-airco-plaatsen/', '/kosten-airco-plaatsen?bron=controle']) {
    const response = await fetch('http://127.0.0.1:4173' + path);
    assert.equal(response.status, 200);
    checkHtml(await response.text());
  }
}
console.log('Kostenpagina: vijf bronprijzen, HTML zonder JavaScript, metadata, schema, ankers, routes, sitemap en redirectconfiguratie gecontroleerd.');
