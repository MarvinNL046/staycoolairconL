import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const path = '/seo/pillar-8-vergelijkingen/mono-split-vs-multi-split';
const canonical = 'https://staycoolairco.nl' + path;
function inspect(html) {
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal((html.match(/name="description"/g) || []).length, 1);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(html.includes(canonical));
  assert.ok(html.includes('Single-split of multi-split airco: wat past bij uw woning?'));
  for (const removed of ['30-40%', '99%+', '€95', '€125', 'FAQPage', 'class="initial-loader"']) assert.ok(!html.includes(removed), removed);
  for (const text of ['€ 1.395,00', '€ 3.191,50', '€ 3.911,33', 'Advies voor één ruimte', 'Vergelijk mijn installatieopties', 'Bespreek mijn uitbreidingsplan']) assert.ok(html.includes(text), text);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), match[1]);
  const schemaText = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)?.[1];
  assert.equal(JSON.parse(schemaText)['@graph'][0].url, canonical);
}
inspect(await readFile(`dist${path}.html`, 'utf8'));
if (process.argv.includes('--http')) for (const suffix of ['', '/', '?bron=test']) {
  const response = await fetch(`http://127.0.0.1:4173${path}${suffix}`);
  assert.equal(response.status, 200);
  inspect(await response.text());
}
console.log('Splitvergelijking: inhoud zonder JavaScript, bronprijzen, metadata, schema en CTA-ankers gecontroleerd.');
