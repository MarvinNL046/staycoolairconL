import routes from './routing-manifest.json';
import hosting from './vercel.json';
import { matchesProductBrand } from './src/utils/productBrands';
import { resolvePagePath } from './src/utils/pageRouting';

const staticPaths = new Set(routes.paths.map(p => p.toLowerCase()));
const pathCase = new Map(routes.paths.map(p => [p.toLowerCase(), p]));
const products = new Set(routes.products);
const cities = new Set(routes.cities);
const rooms = new Set(routes.rooms);

export function isKnownPage(pathname: string): boolean {
  let path: string;
  try { path = decodeURIComponent(pathname).replace(/\/+$/, '') || '/'; }
  catch { return false; }
  if (staticPaths.has(path.toLowerCase())) return true;
  const parts = path.split('/').slice(1);
  if (parts[0] === 'aircos' && parts.length === 2) return products.has(parts[1]);
  if (parts[0] === 'airco-installatie' && parts.length === 2) return cities.has(parts[1]);
  // Existing redirect routes intentionally accept any slug; their destination validates it.
  if (parts[0] === 'werkgebied' && parts.length === 2) return true;
  if (parts[0] === 'airco' && parts.length === 3) return rooms.has(parts[1]) && cities.has(parts[2]);
  if (parts[0] !== 'products') return false;
  if (parts[1] === 'airco-bescherming' && parts[2] === 'omkasting' && parts.length === 4) return true;
  if (parts[1] === 'airco' && parts.length === 3) return products.has(parts[2]);
  if (parts.length === 2) return routes.brands.some(b => matchesProductBrand(b.name, parts[1]));
  if (parts.length !== 3) return false;
  // Use the same brand resolver as the rendered catalog.
  const brand = parts[1].toLowerCase();
  const match = routes.brands.find(b => matchesProductBrand(b.name, brand));
  return Boolean(match?.models.includes(parts[2]));
}

const notFoundHtml = `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, follow"><title>Pagina niet gevonden | StayCool Airco</title><style>body{font:18px/1.6 system-ui,sans-serif;background:#f2f7fa;color:#18364b;margin:0}main{max-width:650px;margin:12vh auto;padding:28px}h1{font-size:64px;margin:0}a{color:#146ea8;display:inline-block;margin:10px 20px 10px 0}p{max-width:550px}</style></head><body><main><p>StayCool Airco</p><h1>404</h1><h2>Pagina niet gevonden</h2><p>Deze pagina bestaat niet of is verplaatst. Via onderstaande links helpen we u verder.</p><nav aria-label="Verder zoeken"><a href="/">Naar de homepage</a><a href="/products">Bekijk airco’s</a><a href="/onderhoud">Onderhoudspakketten</a><a href="/contact">Contact</a></nav></main></body></html>`;

export default function middleware(request: Request) {
  const url = new URL(request.url);
  if (url.pathname.endsWith('.html')) {
    const clean = url.pathname === '/index.html' ? '/' : url.pathname.slice(0, -5);
    if (isKnownPage(clean)) { url.pathname = resolvePagePath(clean); return Response.redirect(url, 308); }
  }
  // Preserve platform handling for API endpoints and files (including missing assets).
  if (/^\/(api|assets|images|fonts|\.well-known)(\/|$)/.test(url.pathname) || /\.[a-zA-Z0-9]+$/.test(url.pathname)) return;
  if (hosting.redirects.some(redirect => redirect.source === url.pathname)) return;
  const trimmed = url.pathname.replace(/\/+$/, '') || '/';
  const normalized = pathCase.get(trimmed.toLowerCase()) || trimmed;
  const destination = resolvePagePath(normalized);
  if (destination !== url.pathname) {
    url.pathname = destination;
    return Response.redirect(url, 308);
  }
  if (isKnownPage(url.pathname)) return;
  return new Response(request.method === 'HEAD' ? null : notFoundHtml, {
    status: 404,
    headers: {'Content-Type':'text/html; charset=utf-8','X-Robots-Tag':'noindex, follow','Cache-Control':'no-store'},
  });
}
