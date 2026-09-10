export function priceIncludingVat(netCents: number, vatRate: number): number {
  if (!Number.isSafeInteger(netCents) || netCents <= 0 || ![0, 9, 21].includes(vatRate)) {
    throw new Error('Een positieve verkoopprijs in centen en een gecontroleerd numeriek btw-tarief zijn vereist.');
  }
  return netCents + Math.round(netCents * vatRate / 100);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(cents / 100);
}
