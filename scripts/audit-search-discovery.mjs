import { mkdir, writeFile } from 'node:fs/promises';
import { DOMParser } from 'xmldom';

const origin = 'https://staycoolairco.nl';
const out = process.argv[2] || '.cache/search-discovery';
const sitemapReports = [];
const pages = new Set();
const seen = new Set();
const get = url => fetch(url, { signal: AbortSignal.timeout(20000), redirect: 'manual', headers: { 'User-Agent': 'StayCool-Site-Audit/1.0' } });
async function collect(url) {
  if (seen.has(url)) return;
  if (new URL(url).origin !== origin) throw new Error('Sitemap buiten eigen domein');
  seen.add(url);
  const response = await get(url);
  if (response.status !== 200) throw new Error(`Sitemap ${url}: HTTP ${response.status}`);
  const xml = await response.text();
  if (/<!DOCTYPE|<!ENTITY/i.test(xml)) throw new Error('Onverwachte XML-declaratie');
  const doc = new DOMParser({ errorHandler: { warning() {}, error(message) { throw new Error(message); }, fatalError(message) { throw new Error(message); } } }).parseFromString(xml, 'text/xml');
  const type = doc.documentElement.localName;
  if (!['sitemapindex', 'urlset'].includes(type)) throw new Error(`Ongeldige sitemap ${url}`);
  const entries = [...Array.from(doc.documentElement.childNodes)].filter(n => n.nodeType === 1 && ['url', 'sitemap'].includes(n.localName));
  const urls = entries.map(n => n.getElementsByTagName('loc')[0]?.textContent.trim()).filter(Boolean);
  sitemapReports.push({ url, status: response.status, type, entries: urls.length });
  for (const entry of urls) {
    if (type === 'sitemapindex') await collect(entry);
    else pages.add(entry);
  }
}
const robotsResponse = await get(origin + '/robots.txt');
const robots = await robotsResponse.text();
await collect(origin + '/sitemap-index.xml');
const urls = [...pages];
const results = [];
let cursor = 0;
async function worker() {
  while (cursor < urls.length) {
    const url = urls[cursor++];
    if (new URL(url).origin !== origin) { results.push({ url, error: 'Ander domein' }); continue; }
    try {
      const response = await get(url);
      const html = await response.text();
      const canonicalTag = html.match(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i)?.[0];
      const canonical = canonicalTag?.match(/href=["']([^"']+)["']/i)?.[1] || null;
      const directives = [...html.matchAll(/<meta\b(?=[^>]*name=["'](?:robots|bingbot|googlebot|yandex)["'])[^>]*>/gi)].map(m => m[0]).join(' ');
      results.push({ url, status: response.status, location: response.headers.get('location'), xRobotsTag: response.headers.get('x-robots-tag'), noindex: /\bnoindex\b/i.test(directives + ' ' + response.headers.get('x-robots-tag')), canonical, title: html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || null, h1InSource: /<h1\b/i.test(html), html: /text\/html/i.test(response.headers.get('content-type') || '') });
    } catch (error) { results.push({ url, error: error.message }); }
    if (results.length % 50 === 0) console.log(`${results.length}/${urls.length} live URL's gecontroleerd`);
    await new Promise(resolve => setTimeout(resolve, 200));
  }
}
await Promise.all([worker(), worker(), worker()]);
const summary = {
  measuredAt: new Date().toISOString(), source: 'Live sitemapindex en HTTP-bronrespons; geen zoekmachine-indexrapport',
  sitemapCount: sitemapReports.length, urls: urls.length,
  http200: results.filter(r => r.status === 200).length,
  redirects: results.filter(r => r.status >= 300 && r.status < 400).length,
  errors: results.filter(r => r.error || r.status >= 400).length,
  noindexInResponse: results.filter(r => r.noindex).length,
  missingH1InSource: results.filter(r => r.status === 200 && !r.h1InSource).length,
  missingCanonicalInSource: results.filter(r => r.status === 200 && !r.canonical).length,
};
await mkdir(out, { recursive: true });
await writeFile(`${out}/live-search-discovery.json`, JSON.stringify({ summary, robotsStatus: robotsResponse.status, robots, sitemaps: sitemapReports, pages: results }, null, 2));
console.log(JSON.stringify(summary));
