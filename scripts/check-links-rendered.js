#!/usr/bin/env node
/**
 * Renders every URL from the sitemaps with a real browser and checks whether
 * React Router resolved to the NotFound page. Needed because this is a SPA —
 * the server returns 200 + index.html for every URL, so HTTP-only checks miss
 * client-side 404s.
 *
 * Detection: the NotFound component sets <title> to "Pagina niet gevonden - 404 ...".
 *
 * Usage:
 *   node scripts/check-links-rendered.js                     # checks production
 *   node scripts/check-links-rendered.js http://localhost:4173
 *   CONCURRENCY=8 node scripts/check-links-rendered.js
 */

import { chromium } from 'playwright';

const BASE_URL = (process.argv[2] || process.env.BASE_URL || 'https://staycoolairco.nl').replace(/\/$/, '');
const CONCURRENCY = Number(process.env.CONCURRENCY || 6);
const NAV_TIMEOUT = Number(process.env.NAV_TIMEOUT || 20000);
const SITEMAP_INDEX = `${BASE_URL}/sitemap-index.xml`;
const NOT_FOUND_MARKERS = [/404/, /niet gevonden/i, /pagina niet gevonden/i];

const colors = {
  reset: '\x1b[0m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m',
  blue: '\x1b[34m', gray: '\x1b[90m', bold: '\x1b[1m',
};

function extractTagValues(xml, tag) {
  const re = new RegExp(`<${tag}>\\s*([^<]+?)\\s*</${tag}>`, 'gi');
  const out = [];
  let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1].trim());
  return out;
}

async function fetchSitemap(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

async function collectUrls(sitemapUrl, seen = new Set()) {
  if (seen.has(sitemapUrl)) return [];
  seen.add(sitemapUrl);
  let xml;
  try { xml = await fetchSitemap(sitemapUrl); }
  catch (err) {
    console.warn(`${colors.yellow}⚠ ${err.message}${colors.reset}`);
    return [];
  }
  if (/<sitemapindex/i.test(xml)) {
    const children = extractTagValues(xml, 'loc');
    console.log(`${colors.gray}→ Index ${sitemapUrl}: ${children.length} sub-sitemap(s)${colors.reset}`);
    const all = [];
    for (const child of children) {
      const localChild = child.replace(/^https?:\/\/[^/]+/, BASE_URL);
      all.push(...await collectUrls(localChild, seen));
    }
    return all;
  }
  const urls = extractTagValues(xml, 'loc');
  console.log(`${colors.gray}→ ${sitemapUrl}: ${urls.length} URL(s)${colors.reset}`);
  return urls;
}

async function checkPage(context, url) {
  const localUrl = url.replace(/^https?:\/\/[^/]+/, BASE_URL);
  const page = await context.newPage();
  try {
    const response = await page.goto(localUrl, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });
    // Allow React Router + helmet-async a moment to set the title.
    await page.waitForLoadState('networkidle', { timeout: NAV_TIMEOUT }).catch(() => {});
    const title = (await page.title()) || '';
    const httpStatus = response ? response.status() : 0;
    const is404 = NOT_FOUND_MARKERS.some(re => re.test(title));
    return { url: localUrl, httpStatus, title, is404, error: null };
  } catch (err) {
    return { url: localUrl, httpStatus: 0, title: '', is404: false, error: err.message };
  } finally {
    await page.close().catch(() => {});
  }
}

async function runWithConcurrency(items, worker, concurrency) {
  const results = new Array(items.length);
  let next = 0, done = 0;
  const total = items.length;
  async function loop() {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      results[i] = await worker(items[i], i);
      done++;
      const r = results[i];
      const tag = r.error ? `${colors.red}ERR${colors.reset}` :
                  r.is404 ? `${colors.red}404${colors.reset}` :
                  `${colors.green}OK ${colors.reset}`;
      process.stdout.write(`\r${colors.blue}[${done}/${total}]${colors.reset} ${tag} ${r.url.slice(-70).padEnd(70)}      `);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, loop));
  process.stdout.write('\n');
  return results;
}

(async () => {
  console.log(`${colors.bold}🔗 Rendered link checker (Playwright)${colors.reset}`);
  console.log(`Base URL:    ${BASE_URL}`);
  console.log(`Concurrency: ${CONCURRENCY}`);
  console.log(`Sitemap:     ${SITEMAP_INDEX}\n`);

  const allUrls = await collectUrls(SITEMAP_INDEX);
  const unique = [...new Set(allUrls)];
  console.log(`\n${colors.bold}Found ${unique.length} unique URL(s) — rendering each…${colors.reset}\n`);

  if (unique.length === 0) {
    console.error(`${colors.red}No URLs found.${colors.reset}`);
    process.exit(1);
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    userAgent: 'StayCool-LinkChecker/1.0 (+rendered)',
    viewport: { width: 1280, height: 720 },
  });

  const start = Date.now();
  const results = await runWithConcurrency(unique, (url) => checkPage(context, url), CONCURRENCY);
  const duration = ((Date.now() - start) / 1000).toFixed(1);

  await browser.close();

  const broken = results.filter(r => r.is404);
  const errors = results.filter(r => r.error);
  const ok = results.filter(r => !r.is404 && !r.error);

  console.log(`\n${colors.bold}Summary${colors.reset} (${duration}s)`);
  console.log(`  ${colors.green}✓ OK:        ${ok.length}${colors.reset}`);
  console.log(`  ${colors.red}✗ 404 page:  ${broken.length}${colors.reset}`);
  console.log(`  ${colors.yellow}⚠ Errors:    ${errors.length}${colors.reset}\n`);

  if (broken.length > 0) {
    console.log(`${colors.red}${colors.bold}URLs resolving to 404 page:${colors.reset}`);
    for (const r of broken) {
      console.log(`  ${r.url}`);
      console.log(`    ${colors.gray}title: ${r.title}${colors.reset}`);
    }
    console.log();
  }

  if (errors.length > 0) {
    console.log(`${colors.yellow}${colors.bold}URLs that errored:${colors.reset}`);
    for (const r of errors) console.log(`  ${r.url}\n    ${colors.gray}${r.error}${colors.reset}`);
    console.log();
  }

  if (broken.length === 0 && errors.length === 0) {
    console.log(`${colors.green}${colors.bold}All ${ok.length} pages render correctly ✨${colors.reset}`);
    process.exit(0);
  }
  process.exit(1);
})().catch(err => {
  console.error(`${colors.red}Fatal: ${err.message}${colors.reset}`);
  process.exit(1);
});
