import { build } from 'esbuild';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { pageFile } from './prerender-site.mjs';

// Mirror production clean URLs and edge redirects when reviewing the built site locally.
export async function configurePagePreview(server, outDir = 'dist') {
  const bundle = await build({ entryPoints: ['middleware.ts'], bundle: true, platform: 'node', format: 'esm', write: false });
  const { default: middleware } = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
  const hosting = JSON.parse(await readFile('vercel.json', 'utf8'));
  server.middlewares.use(async (req, res, next) => {
    try {
      const url = new URL(req.url || '/', 'http://127.0.0.1');
      const fixedRedirect = hosting.redirects.find(r => r.source === url.pathname);
      if (fixedRedirect) {
        res.statusCode = 308; res.setHeader('Location', fixedRedirect.destination + url.search); res.end(); return;
      }
      const response = middleware(new Request(url, { method: req.method || 'GET' }));
      if (response) {
        res.statusCode = response.status;
        response.headers.forEach((value, key) => res.setHeader(key, key === 'location' ? new URL(value).pathname + new URL(value).search : value));
        res.end(req.method === 'HEAD' ? undefined : await response.text()); return;
      }
      if (/\.[a-zA-Z0-9]+$/.test(url.pathname) || /^\/(api|assets|images|fonts|\.well-known)(\/|$)/.test(url.pathname)) return next();
      const file = pageFile(outDir, decodeURIComponent(url.pathname));
      if (!existsSync(file)) { res.statusCode = 404; res.end('Pagina niet gevonden'); return; }
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'no-cache');
      res.end(req.method === 'HEAD' ? undefined : await readFile(file));
    } catch (error) { next(error); }
  });
}
