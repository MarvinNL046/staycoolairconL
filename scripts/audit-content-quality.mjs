import fs from 'node:fs/promises';
import { DOMParser } from 'xmldom';
import { pageFile } from './prerender-site.mjs';
const out = process.argv.slice(2).find(arg => arg !== '--check') || '.cache/content-quality';
await fs.mkdir(out, { recursive: true });
const rendered = JSON.parse(await fs.readFile('.cache/prerender/report.json', 'utf8'));
const pages = [];
const claims = [];
const schemaTypes = {};
for (const row of rendered.pages) {
  const html = await fs.readFile(pageFile('dist', row.path), 'utf8');
  const doc = new DOMParser({ errorHandler: { warning: () => {}, error: () => {}, fatalError: () => {} } }).parseFromString(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>/g, ''), 'text/html');
  const main = doc.getElementsByTagName('main')[0];
  const text = main?.textContent.replace(/\s+/g, ' ').trim() || '';
  const description = Array.from(doc.getElementsByTagName('meta')).find(n => n.getAttribute('name') === 'description')?.getAttribute('content');
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const schemaIssues = [];
  function walk(value) {
    if (!value || typeof value !== 'object') return;
    if (value['@type']) for (const type of [].concat(value['@type'])) schemaTypes[type] = (schemaTypes[type] || 0) + 1;
    if (value['@type'] === 'Product' && value.aggregateRating) schemaIssues.push('product-rating');
    if (['LocalBusiness', 'Organization', 'HVACBusiness', 'Service'].includes(value['@type']) && (value.review || value.aggregateRating)) schemaIssues.push('business-service-rating');
    if (value['@type'] === 'Product' && value.offers) {
      for (const offer of [].concat(value.offers)) if (offer['@type'] === 'Offer' && offer.price === undefined && offer.priceSpecification?.price === undefined) schemaIssues.push('product-offer-without-price');
    }
    if (value['@type'] === 'ComparisonTable') schemaIssues.push('invalid-comparison-type');
    for (const nested of Object.values(value)) if (nested && typeof nested === 'object') if (Array.isArray(nested)) nested.forEach(walk); else walk(nested);
  }
  schemas.forEach(walk);
  pages.push({ ...row, description, words: text.split(/\s+/).length, schemaIssues: [...new Set(schemaIssues)] });
  for (const match of text.matchAll(/.{0,65}(?:\d[\d.,+]*\s*(?:%|jaar garantie|installaties|tevreden klanten)|ISDE|subsidie).{0,110}/gi)) claims.push({ path: row.path, excerpt: match[0] });
}
function duplicates(key) {
  const groups = new Map();
  for (const p of pages.filter(p => p.indexable)) {
    const value = p[key]?.replace(/\s+/g, ' ').trim();
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push({ path: p.path, canonical: p.canonical });
  }
  return [...groups].filter(([, rows]) => rows.length > 1).map(([value, rows]) => ({ value, distinctCanonicals: new Set(rows.map(p => p.canonical)).size, pages: rows }));
}
const report = { checkedAt: new Date().toISOString(), pages, duplicateTitles: duplicates('title'), duplicateDescriptions: duplicates('description'), schemaTypes, claims };
await fs.writeFile(out + '/audit.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ pages: pages.length, duplicateTitles: report.duplicateTitles, duplicateDescriptions: report.duplicateDescriptions, schemaIssues: pages.filter(p => p.schemaIssues.length).length, schemaTypes, claimExcerpts: claims.length }, null, 2));
if (process.argv.includes('--check') && (report.duplicateTitles.some(g => g.distinctCanonicals > 1) || report.duplicateDescriptions.some(g => g.distinctCanonicals > 1) || pages.some(p => p.schemaIssues.length))) process.exitCode = 1;
