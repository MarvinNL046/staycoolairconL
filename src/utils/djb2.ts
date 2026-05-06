/**
 * djb2 hash — Daniel J. Bernstein's classic string hash.
 * Used for stable variant-selection across pages: same input → same output,
 * so /airco-installatie/maastricht always picks the same paragraph variant
 * (good for Google caching, bad for accidental flicker).
 *
 * Returns an unsigned 32-bit integer. Modulo with the variant pool length
 * to pick a stable index.
 */
export function djb2Hash(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return hash >>> 0; // unsigned 32-bit
}
