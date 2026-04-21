const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'src', 'data', 'servicePages.ts');
const auditPath = path.join(root, 'docs', 'seo-service-pages-overlap-audit.md');
const appPath = path.join(root, 'src', 'App.tsx');
const templatePath = path.join(root, 'src', 'pages', 'ServiceLandingPage.tsx');
const sitemapGeneratorPath = path.join(root, 'scripts', 'generate-sitemaps-unified.js');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(filePath) {
  assert(fs.existsSync(filePath), `Missing required file: ${path.relative(root, filePath)}`);
  return fs.readFileSync(filePath, 'utf8');
}

function extractServicePages(source) {
  const marker = 'export const servicePages';
  const start = source.indexOf(marker);
  assert(start >= 0, 'servicePages export not found');

  const assignmentStart = source.indexOf('=', start);
  assert(assignmentStart >= 0, 'servicePages assignment not found');

  const arrayStart = source.indexOf('[', assignmentStart);
  assert(arrayStart >= 0, 'servicePages array start not found');

  let depth = 0;
  let end = -1;
  for (let i = arrayStart; i < source.length; i += 1) {
    const char = source[i];
    if (char === '[') depth += 1;
    if (char === ']') depth -= 1;
    if (depth === 0) {
      end = i + 1;
      break;
    }
  }

  assert(end > arrayStart, 'servicePages array end not found');
  const arraySource = source.slice(arrayStart, end)
    .replace(/ as const/g, '')
    .replace(/ satisfies [^;]+/g, '');

  return Function(`"use strict"; return (${arraySource});`)();
}

const dataSource = read(dataPath);
const appSource = read(appPath);
const templateSource = read(templatePath);
const auditSource = read(auditPath);
const sitemapGeneratorSource = read(sitemapGeneratorPath);
const pages = extractServicePages(dataSource);

const requiredKeys = [
  'slug',
  'title',
  'metaTitle',
  'metaDescription',
  'h1',
  'intentType',
  'category',
  'primaryKeyword',
  'secondaryKeywords',
  'intro',
  'benefits',
  'faq',
  'ctaVariant',
  'relatedSlugs',
  'canonicalSlug',
  'indexable',
];

assert(pages.length === 30, `Expected 30 service pages, found ${pages.length}`);

const slugs = new Set();
for (const page of pages) {
  for (const key of requiredKeys) {
    assert(Object.prototype.hasOwnProperty.call(page, key), `${page.slug || 'unknown page'} missing ${key}`);
  }

  assert(!slugs.has(page.slug), `Duplicate slug: ${page.slug}`);
  slugs.add(page.slug);
  assert(!page.slug.startsWith('/'), `${page.slug} must be a root slug without leading slash`);
  assert(page.indexable === true, `${page.slug} must be indexable`);
  assert(page.canonicalSlug === page.slug, `${page.slug} canonicalSlug must match slug`);
  assert(page.metaTitle.length <= 60, `${page.slug} metaTitle too long: ${page.metaTitle.length}`);
  assert(page.metaDescription.length <= 155, `${page.slug} metaDescription too long: ${page.metaDescription.length}`);
  assert(page.h1.toLowerCase().includes('limburg'), `${page.slug} H1 must include Limburg`);
  assert(page.primaryKeyword.toLowerCase().includes('limburg'), `${page.slug} primaryKeyword must include Limburg`);
  assert(page.intro.length >= 90, `${page.slug} intro is too short`);
  assert(page.benefits.length >= 3, `${page.slug} needs at least 3 benefits`);
  assert(page.faq.length >= 4, `${page.slug} needs at least 4 FAQs`);
  assert(page.relatedSlugs.length >= 3, `${page.slug} needs at least 3 relatedSlugs`);

  for (const relatedSlug of page.relatedSlugs) {
    assert(relatedSlug !== page.slug, `${page.slug} links to itself`);
  }
}

for (const page of pages) {
  for (const relatedSlug of page.relatedSlugs) {
    assert(slugs.has(relatedSlug), `${page.slug} relatedSlug not found: ${relatedSlug}`);
  }
}

assert(appSource.includes('servicePages.map'), 'App.tsx must map servicePages to root-level routes');
assert(appSource.includes('ServiceLandingPage'), 'App.tsx must render ServiceLandingPage');
assert(templateSource.includes('Ontvang vrijblijvend een offerte'), 'Template missing primary CTA');
assert(templateSource.includes('Binnen 24 uur reactie'), 'Template missing response-time CTA');
assert(templateSource.includes('Veelgestelde vragen'), 'Template missing FAQ section');
assert(templateSource.includes('relatedSlugs'), 'Template missing automatic related link block');
assert(sitemapGeneratorSource.includes('getServicePages'), 'Sitemap generator must read servicePages');
assert(sitemapGeneratorSource.includes('servicePages.map'), 'Sitemap generator must add service page routes');

const auditRequired = [
  '/airco-installatie-limburg',
  '/airco-installatie-prijs',
  '/airco-kopen-limburg',
  '/multi-split-airco-installatie',
  '/airco-voor-slaapkamer',
  '/airco-voor-woonkamer',
  '/airco-voor-zolder',
  '/airco-service-limburg',
];

for (const route of auditRequired) {
  assert(auditSource.includes(route), `Overlap audit missing ${route}`);
}

console.log(`Validated ${pages.length} service pages and overlap audit.`);
