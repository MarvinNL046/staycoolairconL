#!/usr/bin/env node
/**
 * Crawls all sitemaps and verifies every URL returns 2xx/3xx.
 * Usage:
 *   node scripts/check-links.js                    # checks https://staycoolairco.nl
 *   node scripts/check-links.js http://localhost:4173
 *   BASE_URL=https://staging.example.com node scripts/check-links.js
 */

const BASE_URL = (process.argv[2] || process.env.BASE_URL || 'https://staycoolairco.nl').replace(/\/$/, '');
const CONCURRENCY = Number(process.env.CONCURRENCY || 20);
const TIMEOUT_MS = Number(process.env.TIMEOUT_MS || 15000);
const SITEMAP_INDEX = `${BASE_URL}/sitemap-index.xml`;

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
  bold: '\x1b[1m',
};

async function fetchWithTimeout(url, opts = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...opts, signal: ctrl.signal, redirect: 'manual' });
  } finally {
    clearTimeout(t);
  }
}

function extractTagValues(xml, tag) {
  const re = new RegExp(`<${tag}>\\s*([^<]+?)\\s*</${tag}>`, 'gi');
  const out = [];
  let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1].trim());
  return out;
}

async function fetchSitemap(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch sitemap ${url}: ${res.status}`);
  return await res.text();
}

async function collectUrls(sitemapUrl, seen = new Set()) {
  if (seen.has(sitemapUrl)) return [];
  seen.add(sitemapUrl);

  let xml;
  try {
    xml = await fetchSitemap(sitemapUrl);
  } catch (err) {
    console.warn(`${colors.yellow}⚠ Cannot fetch sitemap ${sitemapUrl}: ${err.message}${colors.reset}`);
    return [];
  }

  const isIndex = /<sitemapindex/i.test(xml);
  if (isIndex) {
    const childSitemaps = extractTagValues(xml, 'loc');
    console.log(`${colors.gray}→ Index ${sitemapUrl} contains ${childSitemaps.length} sitemap(s)${colors.reset}`);
    const all = [];
    for (const child of childSitemaps) {
      const localChild = child.replace(/^https?:\/\/[^/]+/, BASE_URL);
      const urls = await collectUrls(localChild, seen);
      all.push(...urls);
    }
    return all;
  }

  const urls = extractTagValues(xml, 'loc');
  console.log(`${colors.gray}→ ${sitemapUrl}: ${urls.length} URL(s)${colors.reset}`);
  return urls;
}

async function checkUrl(url) {
  const localUrl = url.replace(/^https?:\/\/[^/]+/, BASE_URL);
  try {
    let res = await fetchWithTimeout(localUrl, { method: 'HEAD' });
    // Some servers don't support HEAD properly — retry with GET if non-2xx/3xx.
    if (res.status >= 400 || res.status === 0) {
      res = await fetchWithTimeout(localUrl, { method: 'GET' });
    }
    return { url: localUrl, status: res.status };
  } catch (err) {
    return { url: localUrl, status: 0, error: err.message };
  }
}

async function runWithConcurrency(items, worker, concurrency) {
  const results = new Array(items.length);
  let next = 0;
  let done = 0;
  const total = items.length;

  async function runOne() {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      results[i] = await worker(items[i], i);
      done++;
      if (done % 25 === 0 || done === total) {
        process.stdout.write(`\r${colors.blue}Checked ${done}/${total}${colors.reset}      `);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runOne));
  process.stdout.write('\n');
  return results;
}

(async () => {
  console.log(`${colors.bold}🔗 Link checker${colors.reset}`);
  console.log(`Base URL:    ${BASE_URL}`);
  console.log(`Concurrency: ${CONCURRENCY}`);
  console.log(`Sitemap:     ${SITEMAP_INDEX}\n`);

  const allUrls = await collectUrls(SITEMAP_INDEX);
  const unique = [...new Set(allUrls)];
  console.log(`\n${colors.bold}Found ${unique.length} unique URL(s) — checking…${colors.reset}\n`);

  if (unique.length === 0) {
    console.error(`${colors.red}No URLs found in sitemaps.${colors.reset}`);
    process.exit(1);
  }

  const start = Date.now();
  const results = await runWithConcurrency(unique, checkUrl, CONCURRENCY);
  const duration = ((Date.now() - start) / 1000).toFixed(1);

  const broken = results.filter(r => r.status >= 400 || r.status === 0);
  const redirects = results.filter(r => r.status >= 300 && r.status < 400);
  const ok = results.filter(r => r.status >= 200 && r.status < 300);

  console.log(`\n${colors.bold}Summary${colors.reset} (${duration}s)`);
  console.log(`  ${colors.green}✓ OK:        ${ok.length}${colors.reset}`);
  console.log(`  ${colors.yellow}↪ Redirect:  ${redirects.length}${colors.reset}`);
  console.log(`  ${colors.red}✗ Broken:    ${broken.length}${colors.reset}\n`);

  if (redirects.length > 0 && process.env.SHOW_REDIRECTS === '1') {
    console.log(`${colors.yellow}Redirects:${colors.reset}`);
    for (const r of redirects) console.log(`  ${r.status}  ${r.url}`);
    console.log();
  }

  if (broken.length > 0) {
    console.log(`${colors.red}${colors.bold}Broken URLs:${colors.reset}`);
    for (const r of broken) {
      const tag = r.status === 0 ? 'ERR' : r.status;
      const extra = r.error ? ` (${r.error})` : '';
      console.log(`  ${colors.red}${tag}${colors.reset}  ${r.url}${colors.gray}${extra}${colors.reset}`);
    }
    process.exit(1);
  }

  console.log(`${colors.green}${colors.bold}All links healthy ✨${colors.reset}`);
})().catch(err => {
  console.error(`${colors.red}Fatal: ${err.message}${colors.reset}`);
  process.exit(1);
});
