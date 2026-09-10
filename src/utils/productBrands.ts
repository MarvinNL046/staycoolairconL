// Bestaande merkroutes en leesbare aliassen verwijzen naar dezelfde productdata.
export function productBrandSlug(name: string): string {
  const aliases: Record<string, string> = {
    'tosot by gree': 'tosot', 'mitsubishi heavy industries': 'mitsubishi-heavy',
    'airco bescherming/omkasting': 'airco-covers',
  };
  return aliases[name.toLowerCase()] || name.toLowerCase().replace(/ /g, '-');
}

export function matchesProductBrand(name: string, route = ''): boolean {
  const normalized = route.toLowerCase().replace(/ /g, '-');
  return productBrandSlug(name) === normalized || name.toLowerCase().replace(/ /g, '-') === normalized
    || (name.toLowerCase() === 'mitsubishi heavy industries' && normalized === 'mitsubishi');
}
