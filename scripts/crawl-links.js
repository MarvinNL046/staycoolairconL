#!/usr/bin/env node
/**
 * Real internal-link crawler. Starts at the homepage, renders each page with
 * a real browser, harvests every same-origin <a href>, and recurses. Detects
 * client-side 404s by inspecting <title> after the SPA hydrates.
 *
 * This finds broken links the sitemap-based checker misses — links that exist
 * in nav/footer/page content but aren't in any sitemap.
 *
 * Usage:
 *   node scripts/crawl-links.js                            # crawl production
 *   node scripts/crawl-links.js http://localhost:4173
 *   MAX_PAGES=500 CONCURRENCY=8 node scripts/crawl-links.js
 */

import { chromium } from 'playwright';

const BASE_URL = (process.argv[2] || process.env.BASE_URL || 'https://staycoolairco.nl').replace(/\/$/, '');
const CONCURRENCY = Number(process.env.CONCURRENCY || 6);
const MAX_PAGES = Number(process.env.MAX_PAGES || 1000);
const NAV_TIMEOUT = Number(process.env.NAV_TIMEOUT || 20000);
const NOT_FOUND_MARKERS = [/404/, /niet gevonden/i, /pagina niet gevonden/i];

const colors = {
  reset: '\x1b[0m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m',
  blue: '\x1b[34m', gray: '\x1b[90m', bold: '\x1b[1m',
};

const origin = new URL(BASE_URL).origin;

function normalizeUrl(href, fromUrl) {
  try {
    const u = new URL(href, fromUrl);
    if (u.origin !== origin) return null;
    if (!['http:', 'https:'].includes(u.protocol)) return null;
    u.hash = '';
    // Drop trailing slash for consistent dedup (except root).
    if (u.pathname.length > 1 && u.pathname.endsWith('/')) {
      u.pathname = u.pathname.slice(0, -1);
    }
    return u.toString();
  } catch {
    return null;
  }
}

async function visit(context, url) {
  const page = await context.newPage();
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });
    await page.waitForLoadState('networkidle', { timeout: NAV_TIMEOUT }).catch(() => {});
    const title = (await page.title()) || '';
    const is404 = NOT_FOUND_MARKERS.some(re => re.test(title));
    const httpStatus = response ? response.status() : 0;

    let links = [];
    if (!is404) {
      links = await page.$$eval('a[href]', anchors => anchors.map(a => a.getAttribute('href')).filter(Boolean));
    }
    return { url, title, is404, httpStatus, links, error: null };
  } catch (err) {
    return { url, title: '', is404: false, httpStatus: 0, links: [], error: err.message };
  } finally {
    await page.close().catch(() => {});
  }
}

(async () => {
  console.log(`${colors.bold}🕷  Internal-link crawler${colors.reset}`);
  console.log(`Base URL:    ${BASE_URL}`);
  console.log(`Concurrency: ${CONCURRENCY}`);
  console.log(`Max pages:   ${MAX_PAGES}\n`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    userAgent: 'StayCool-Crawler/1.0',
    viewport: { width: 1280, height: 720 },
  });

  const queue = [BASE_URL];
  const seen = new Set([BASE_URL]);
  const referrers = new Map(); // url -> first URL that linked to it
  const results = [];
  let inFlight = 0;
  let processed = 0;
  const start = Date.now();

  await new Promise(resolve => {
    const tick = async () => {
      while (inFlight < CONCURRENCY && queue.length > 0 && results.length < MAX_PAGES) {
        const url = queue.shift();
        inFlight++;
        visit(context, url).then(result => {
          results.push(result);
          processed++;
          const tag = result.error ? `${colors.red}ERR${colors.reset}` :
                      result.is404 ? `${colors.red}404${colors.reset}` :
                      `${colors.green}OK ${colors.reset}`;
          process.stdout.write(`\r${colors.blue}[${processed} done, ${queue.length} queued]${colors.reset} ${tag} ${result.url.slice(-80).padEnd(80)}      `);

          if (!result.is404 && !result.error) {
            for (const href of result.links) {
              const normalized = normalizeUrl(href, result.url);
              if (normalized && !seen.has(normalized) && seen.size < MAX_PAGES) {
                seen.add(normalized);
                referrers.set(normalized, result.url);
                queue.push(normalized);
              }
            }
          }
          inFlight--;
          if (inFlight === 0 && queue.length === 0) resolve();
          else tick();
        });
      }
      if (inFlight === 0 && queue.length === 0) resolve();
    };
    tick();
  });

  process.stdout.write('\n');
  await browser.close();

  const duration = ((Date.now() - start) / 1000).toFixed(1);
  const broken = results.filter(r => r.is404);
  const errors = results.filter(r => r.error);
  const ok = results.filter(r => !r.is404 && !r.error);

  console.log(`\n${colors.bold}Summary${colors.reset} (${duration}s, ${results.length} pages crawled)`);
  console.log(`  ${colors.green}✓ OK:        ${ok.length}${colors.reset}`);
  console.log(`  ${colors.red}✗ 404 page:  ${broken.length}${colors.reset}`);
  console.log(`  ${colors.yellow}⚠ Errors:    ${errors.length}${colors.reset}\n`);

  if (broken.length > 0) {
    console.log(`${colors.red}${colors.bold}Broken pages (resolved to 404):${colors.reset}`);
    for (const r of broken) {
      const ref = referrers.get(r.url) || '(seed)';
      console.log(`  ${r.url}`);
      console.log(`    ${colors.gray}linked from: ${ref}${colors.reset}`);
    }
    console.log();
  }

  if (errors.length > 0) {
    console.log(`${colors.yellow}${colors.bold}Errored pages:${colors.reset}`);
    for (const r of errors) {
      const ref = referrers.get(r.url) || '(seed)';
      console.log(`  ${r.url}`);
      console.log(`    ${colors.gray}from: ${ref} — ${r.error}${colors.reset}`);
    }
    console.log();
  }

  process.exit(broken.length > 0 || errors.length > 0 ? 1 : 0);
})().catch(err => {
  console.error(`${colors.red}Fatal: ${err.message}${colors.reset}`);
  process.exit(1);
});
