import { build } from 'esbuild';
import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises';
import { resolve, dirname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { DOMParser, XMLSerializer } from 'xmldom';
import { createHash } from 'node:crypto';

const origin = 'https://staycoolairco.nl';
export function pageFile(outDir, path) {
  if (!path.startsWith('/') || path.includes('..') || /[?#\\]/.test(path)) throw new Error(`Unsafe page path: ${path}`);
  const root = resolve(outDir);
  const file = resolve(root, path === '/' ? 'index.html' : path.slice(1) + '.html');
  if (!file.startsWith(root + sep)) throw new Error(`Page outside build: ${path}`);
  return file;
}

export async function prerenderSite(outDir = 'dist', publicEnv = {}) {
  const routes = JSON.parse(await readFile('routing-manifest.json', 'utf8'));
  const cacheDir = resolve('.cache/prerender');
  await mkdir(cacheDir, { recursive: true });
  const bundlePath = resolve(cacheDir, `server-${process.pid}-${Date.now()}.cjs`);
  const originalFetch = globalThis.fetch;
  try {
    await build({
      stdin: { contents: "export { renderPage } from './src/entry-server'; export { resolvePagePath } from './src/utils/pageRouting';", resolveDir: process.cwd(), loader: 'ts' },
      bundle: true, jsx: 'automatic', platform: 'node', format: 'cjs', outfile: bundlePath,
      external: ['react', 'react-dom', 'react-dom/server'], mainFields: ['module', 'main'],
      define: { 'import.meta.env': JSON.stringify({ ...publicEnv, SSR: true }), 'process.env.NODE_ENV': '"production"' },
      plugins: [{ name: 'server-css', setup(b) {
        b.onResolve({ filter: /\.css$/ }, args => ({ path: args.path, namespace: 'server-css' }));
        b.onLoad({ filter: /.*/, namespace: 'server-css' }, () => ({ contents: '', loader: 'js' }));
      } }], logLevel: 'silent',
    });
    globalThis.fetch = () => { throw new Error('Prerender must use local content, not external requests'); };
    const { renderPage, resolvePagePath } = await import(pathToFileURL(bundlePath).href);
    const sitemapFiles = new Map();
    const sitemapPaths = new Set();
    async function collectSitemap(name) {
      if (sitemapFiles.has(name)) return;
      if (!/^[\w-]+\.xml$/.test(name)) throw new Error(`Unexpected sitemap: ${name}`);
      const document = new DOMParser().parseFromString(await readFile(resolve(outDir, name), 'utf8'), 'text/xml');
      sitemapFiles.set(name, document);
      for (const entry of Array.from(document.documentElement.childNodes).filter(n => n.nodeType === 1)) {
        const loc = entry.getElementsByTagName('loc')[0];
        if (!loc) continue;
        const url = new URL(loc.textContent);
        if (url.origin !== origin) throw new Error(`External sitemap URL: ${url}`);
        if (entry.localName === 'sitemap') await collectSitemap(url.pathname.slice(1));
        else if (entry.localName === 'url') sitemapPaths.add(url.pathname);
      }
    }
    await collectSitemap('sitemap-index.xml');
    const candidates = new Set([
      ...routes.paths, ...sitemapPaths,
      ...routes.cities.map(c => `/airco-installatie/${c}`),
      ...routes.rooms.flatMap(r => routes.cities.map(c => `/airco/${r}/${c}`)),
      ...routes.products.map(id => `/products/airco/${id}`),
      ...routes.brands.flatMap(b => [`/products/${b.slug}`, ...b.models.map(m => `/products/${b.slug}/${m}`)]),
    ]);
    const paths = [...new Set([...candidates].map(resolvePagePath))].sort();
    let template = await readFile(resolve(outDir, 'index.html'), 'utf8');
    template = template.replace(/<title\b[^>]*>[\s\S]*?<\/title>/g, '').replace(/<meta\b[^>]*data-rh="true"[^>]*>/g, '');
    const rootStart = template.indexOf('<div id="root">');
    const loaderScript = template.indexOf('<!-- Inline script for immediate loading feedback -->', rootStart);
    const rootEnd = template.lastIndexOf('</div>', loaderScript) + 6;
    if (rootStart < 0 || loaderScript < 0 || rootEnd <= rootStart) throw new Error('Unexpected HTML template');
    const before = template.slice(0, rootStart), after = template.slice(rootEnd);
    const pages = [], errors = [];
    for (const path of paths) {
      try {
        const { markup, head } = await renderPage(path);
        const headDoc = new DOMParser().parseFromString(`<head>${head.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '')}</head>`, 'text/xml');
        const metas = Array.from(headDoc.getElementsByTagName('meta'));
        const canonical = Array.from(headDoc.getElementsByTagName('link')).filter(e => e.getAttribute('rel') === 'canonical');
        const titles = Array.from(headDoc.getElementsByTagName('title'));
        const descriptions = metas.filter(e => e.getAttribute('name') === 'description');
        const indexable = !metas.some(e => ['robots', 'bingbot'].includes(e.getAttribute('name')) && /noindex/.test(e.getAttribute('content')));
        if ((markup.match(/<h1\b/g) || []).length !== 1 || canonical.length !== 1 || titles.length !== 1 || !titles[0].textContent || descriptions.length !== 1 || !descriptions[0].getAttribute('content')) throw new Error('Missing or duplicate H1/title/description/canonical');
        if (markup.includes('<!--$!-->') || markup.includes('<!--$?-->')) throw new Error('Unfinished Suspense boundary');
        const revision = createHash('sha256').update(head + markup).digest('hex');
        const revisionTag = `<meta name="content-revision" content="${revision}">`;
        const html = before.replace('</head>', head + revisionTag + '\n</head>') + `<div id="root" data-prerendered="true">${markup}</div>` + after;
        const file = pageFile(outDir, path);
        await mkdir(dirname(file), { recursive: true });
        await writeFile(file, html);
        pages.push({ path, title: titles[0].textContent, canonical: canonical[0].getAttribute('href'), indexable, revision, bytes: Buffer.byteLength(html) });
      } catch (error) { errors.push({ path, error: error.message }); }
    }
    // Keep the authored sitemap inventory; only normalize existing aliases and remove duplicates/noindex.
    const pageMap = new Map(pages.map(p => [p.path, p]));
    for (const page of pages.filter(p => p.indexable)) {
      const canonical = new URL(page.canonical);
      if (canonical.origin !== origin || !pageMap.get(resolvePagePath(canonical.pathname))?.indexable) {
        errors.push({ path: page.path, error: 'Canonical must resolve to an indexable page on this site' });
      }
    }
    const listed = new Set();
    for (const [name, document] of sitemapFiles) {
      for (const entry of Array.from(document.documentElement.childNodes).filter(n => n.nodeType === 1 && n.localName === 'url')) {
        const loc = entry.getElementsByTagName('loc')[0];
        let path = resolvePagePath(new URL(loc.textContent).pathname);
        let page = pageMap.get(path);
        if (!page) { errors.push({ path, error: 'Sitemap destination has no rendered HTML' }); continue; }
        if (page.indexable) {
          const canonical = new URL(page.canonical);
          if (canonical.origin !== origin) { errors.push({ path, error: 'External canonical in sitemap' }); continue; }
          path = resolvePagePath(canonical.pathname);
          page = pageMap.get(path);
          if (!page) { errors.push({ path, error: 'Canonical sitemap destination has no rendered HTML' }); continue; }
        }
        if (!page.indexable || listed.has(path)) { document.documentElement.removeChild(entry); continue; }
        listed.add(path);
        loc.textContent = origin + path;
      }
      await writeFile(resolve(outDir, name), new XMLSerializer().serializeToString(document));
    }
    const report = { renderedAt: new Date().toISOString(), pages, redirects: [...candidates].filter(p => resolvePagePath(p) !== p).map(path => ({ path, destination: resolvePagePath(path) })), sitemapUrls: listed.size, errors };
    await writeFile(resolve(cacheDir, 'report.json'), JSON.stringify(report, null, 2));
    if (errors.length) throw new Error(`Prerender failed on ${errors.length} pages: ${JSON.stringify(errors)}`);
    // Publish the exact sitemap revisions with the deployment; the notifier verifies these on the live pages.
    // This generates a manifest only and never sends a request to a search engine.
    const { host, keyFile } = JSON.parse(await readFile('indexnow-changes.json', 'utf8'));
    const changes = [];
    for (const path of [...listed].sort()) {
      const page = pageMap.get(path);
      const html = await readFile(pageFile(outDir, path), 'utf8');
      changes.push({ path, revision: page.revision, expectedTitle: html.match(/<title[^>]*>([^<]*)<\/title>/i)[1], expectedText: `<meta name="content-revision" content="${page.revision}">` });
    }
    await writeFile(resolve(outDir, 'indexnow-manifest.json'), JSON.stringify({ host, keyFile, changes }, null, 2));
    console.log(`HTML gereed: ${pages.length} pagina's, ${listed.size} sitemap-URL's, ${report.redirects.length} bestaande redirects.`);
    return report;
  } finally {
    globalThis.fetch = originalFetch;
    await unlink(bundlePath).catch(() => {});
  }
}
