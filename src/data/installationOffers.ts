import { cashflowVariants } from './cashflowVariants';
export { priceIncludingVat, formatPrice } from '../utils/installationPricing';
// Verkoopprijzen gelezen uit Cashflow op 2026-09-10. Zie outputs/koop-update voor bronverantwoording.
// Exclusief btw in gehele centen; installatie en materialen zijn al inbegrepen.
export const installationOffers = [
  { id: 'pular-25', name: 'Tosot PULAR', configuration: 'Single-split set · 2,5 kW', brand: 'Tosot', type: 'single', netCents: cashflowVariants.find(p => p.sourceSlug === 'tosot-by-gree-tosot-pular-by-gree-single-split-airco-r32-set-2-5-kw')!.netCents, vatRate: 21, image: '/images/products/568-Pular-indoor-vooraanzicht.webp' },
  { id: 'pular-35', name: 'Tosot PULAR', configuration: 'Single-split set · 3,5 kW', brand: 'Tosot', type: 'single', netCents: cashflowVariants.find(p => p.sourceSlug === 'tosot-by-gree-tosot-pular-by-gree-single-split-airco-r32-set-3-5-kw')!.netCents, vatRate: 21, image: '/images/products/568-Pular-indoor-vooraanzicht.webp' },
  { id: 'clivia-white-25', name: 'Tosot CLIVIA White', configuration: 'Single-split set · 2,5 kW', brand: 'Tosot', type: 'single', netCents: cashflowVariants.find(p => p.sourceSlug === 'tosot-by-gree-tosot-clivia-by-gree-inverter-airco-white-r32-set-2-5-kw')!.netCents, vatRate: 21, image: '/images/products/724-clivia-wit-vooraanzicht.webp' },
  { id: 'lg-standard-25', name: 'LG Standaard Plus Smart Inverter', configuration: 'Single-split set · 2,5 kW', brand: 'LG', type: 'single', netCents: cashflowVariants.find(p => p.sourceSlug === 'lg-standaard-plus-smart-inverter-airco-r32-set-2-5-kw')!.netCents, vatRate: 21, image: null },
  { id: 'perfera-25', name: 'Daikin Perfera FTXM25A/RXM', configuration: 'Single-split set · 2,5 kW', brand: 'Daikin', type: 'single', netCents: cashflowVariants.find(p => p.sourceSlug === 'daikin-perfera-split-airco-ftxm25a-rxm-2-5-kw')!.netCents, vatRate: 21, image: '/images/products/daikin-perfera-wit.webp' },
  { id: 'perfera-duo-25', name: 'Daikin Duo-Split Perfera', configuration: '9000+9000 · 2 × 2,5 kW', brand: 'Daikin', type: 'multi', netCents: 318099, vatRate: 21, image: null },
] as const;
