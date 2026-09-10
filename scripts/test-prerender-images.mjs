import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import { pageFile } from './prerender-site.mjs';

const base = 'http://127.0.0.1:4173';
const out = process.argv[2] || '.cache/prerender-verification';
await mkdir(out, { recursive: true });
const report = JSON.parse(await readFile('.cache/prerender/report.json', 'utf8'));
const products = [];
for (const page of report.pages) {
  if ((await readFile(pageFile('dist', page.path), 'utf8')).includes('aria-label="Product image carousel"')) products.push(page.path);
}
assert.ok(products.length > 0, 'No product carousels found');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 900 } });
await context.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
const page = await context.newPage();
const results = [];
try {
  for (const path of products) {
    try {
      await page.goto(base + path, { waitUntil: 'load' });
      const img = page.locator('[aria-label="Product image carousel"] img').first();
      await img.evaluate(element => element.decode());
      const observed = await img.evaluate(element => {
        let visible = true;
        for (let node = element; node; node = node.parentElement) {
          const style = getComputedStyle(node);
          if (style.opacity === '0' || style.visibility === 'hidden' || style.display === 'none') visible = false;
        }
        return { src: element.getAttribute('src'), complete: element.complete, naturalWidth: element.naturalWidth, width: element.getBoundingClientRect().width, visible };
      });
      assert.equal(observed.complete, true);
      assert.ok(observed.naturalWidth > 0, 'Product image failed to load');
      assert.ok(observed.width > 0 && observed.visible, 'Product image hidden');
      if (path === '/products/tosot/pular') await page.screenshot({ path: out + '/nojs--products-tosot-pular.png' });
      results.push({ path, passed: true, ...observed });
    } catch (error) {
      results.push({ path, passed: false, error: error.message });
    }
  }
} finally {
  await browser.close();
}
const failures = results.filter(result => !result.passed);
await writeFile(out + '/product-images.json', JSON.stringify({ checkedAt: new Date().toISOString(), pages: results.length, failures, results }, null, 2));
console.log(JSON.stringify({ pages: results.length, failures }));
if (failures.length) process.exitCode = 1;
