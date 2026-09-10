import routes from '../../routing-manifest.json';
import { matchesProductBrand } from './productBrands';

const redirects = routes.redirects as Record<string, string>;

// Share existing client redirects with the build, preview and production server.
export function pageRedirect(path: string): string | null {
  const direct = redirects[path];
  if (direct && !path.includes(':')) return direct;
  const parts = path.split('/').slice(1);
  if (parts[0] === 'werkgebied' && parts.length === 2) return `/airco-installatie/${parts[1]}`;
  if (parts[0] === 'aircos' && parts.length === 2 && routes.products.includes(parts[1])) return `/products/airco/${parts[1]}`;
  if (parts[0] !== 'products') return null;
  if (parts[1] === 'airco-bescherming' && parts[2] === 'omkasting' && parts.length === 4) return '/products/airco-covers';
  if (parts.length !== 2 && parts.length !== 3) return null;
  const brand = routes.brands.find(b => matchesProductBrand(b.name, parts[1]));
  if (brand && parts[1] !== brand.slug && (parts.length === 2 || brand.models.includes(parts[2]))) {
    return `/products/${brand.slug}${parts[2] ? '/' + parts[2] : ''}`;
  }
  return null;
}

export function resolvePagePath(path: string): string {
  const seen = new Set<string>();
  for (;;) {
    if (seen.has(path)) throw new Error(`Redirect cycle at ${path}`);
    seen.add(path);
    const next = pageRedirect(path);
    if (!next) return path;
    path = next;
  }
}
