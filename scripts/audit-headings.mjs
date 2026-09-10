import { chromium } from 'playwright';
import { DOMParser } from 'xmldom';
import { mkdir, writeFile } from 'node:fs/promises';
const base = 'http://127.0.0.1:4173';
const out = process.argv[2] || '.cache/heading-audit';
const seen = new Set(), urls = new Set();
async function collect(path) {
  if (seen.has(path)) return;
  seen.add(path);
  const response = await fetch(base + path);
  if (!response.ok) throw new Error('Sitemap ' + response.status);
  const doc = new DOMParser().parseFromString(await response.text(), 'text/xml');
  const isIndex = doc.documentElement.localName === 'sitemapindex';
  for (const node of Array.from(doc.documentElement.childNodes).filter(n => n.nodeType === 1 && ['url','sitemap'].includes(n.localName))) {
    const url = node.getElementsByTagName('loc')[0]?.textContent;
    if (!url) continue;
    const pathname = new URL(url).pathname;
    if (isIndex) await collect(pathname); else urls.add(pathname);
  }
}
await collect('/sitemap-index.xml');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const context = await browser.newContext();
await context.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
let cursor = 0;
const paths = [...urls], results = [];
async function worker() {
  const page = await context.newPage();
  while (cursor < paths.length) {
    const path = paths[cursor++];
    try {
      await page.goto(base + path, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => Boolean(document.querySelector('main h1') && document.querySelector('link[rel="canonical"]')), undefined, { timeout: 5000, polling: 100 }).catch(() => {});
      const result = await page.evaluate(() => {
        const headings = [...document.querySelectorAll('main h1,main h2,main h3,main h4,main h5,main h6')].map(e => ({ level: Number(e.tagName[1]), text: e.textContent.trim() }));
        const skips = [];
        for (let i = 1; i < headings.length; i++) if (headings[i].level > headings[i-1].level + 1) skips.push([headings[i-1], headings[i]]);
        return { finalPath: location.pathname, title: document.title, h1: headings.filter(h => h.level === 1), firstLevel: headings[0]?.level ?? null, skips, headings, canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || null, canonicalCount: document.querySelectorAll('link[rel="canonical"]').length, descriptions: [...document.querySelectorAll('meta[name="description"]')].map(e => e.getAttribute('content')) };
      });
      results.push({ path, ...result });
    } catch (error) { results.push({ path, error: error.message }); }
    if (results.length % 20 === 0) console.log(`${results.length}/${paths.length} kopstructuren gecontroleerd`);
  }
  await page.close();
}
try { await Promise.all([worker(),worker(),worker(),worker()]); } finally { await browser.close(); }
const summary = { measuredAt: new Date().toISOString(), environment: base, pages: paths.length, errors: results.filter(r => r.error).length, notOneH1: results.filter(r => !r.error && r.h1.length !== 1).length, firstHeadingNotH1: results.filter(r => !r.error && r.firstLevel !== 1).length, withSkippedLevels: results.filter(r => r.skips?.length).length };
summary.notOneCanonical = results.filter(r => !r.error && r.canonicalCount !== 1).length;
summary.notOneDescription = results.filter(r => !r.error && (r.descriptions.length !== 1 || !r.descriptions[0]?.trim())).length;
await mkdir(out, { recursive: true });
await writeFile(`${out}/heading-audit.json`, JSON.stringify({ summary, pages: results }, null, 2));
console.log(JSON.stringify(summary));
if (summary.errors || summary.notOneH1 || summary.firstHeadingNotH1 || summary.withSkippedLevels || summary.notOneCanonical || summary.notOneDescription) process.exitCode = 1;
