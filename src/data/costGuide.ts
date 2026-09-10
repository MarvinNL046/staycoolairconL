import { cashflowVariants } from './cashflowVariants';
import { cashflowArticleOffers } from './cashflowArticleOffers';
import { formatPrice,priceIncludingVat } from '../utils/installationPricing';

// Dezelfde gecontroleerde bronnen als op de productpagina's. Installatie zit al in de verkoopprijs.
function single(sourceSlug: string) {
  const source = cashflowVariants.find(item => item.sourceSlug === sourceSlug);
  if (!source) throw new Error(`Prijsbron ontbreekt: ${sourceSlug}`);
  return source;
}
function multi(id: string) {
  const source = cashflowArticleOffers[id];
  if (!source || source.expectedType !== 'multi-split') throw new Error(`Multi-split prijsbron ontbreekt: ${id}`);
  return source;
}
export const costExamples = [
  { id: 'cosmo-25', name: 'Tosot Cosmo', configuration: 'Single-split · 2,5 kW', rooms: 1, href: '/products/tosot/cosmo', source: single('tosot-cosmo-2-5kw-wifi') },
  { id: 'pular-35', name: 'Tosot Pular', configuration: 'Single-split · 3,5 kW', rooms: 1, href: '/products/tosot/pular', source: single('tosot-by-gree-tosot-pular-by-gree-single-split-airco-r32-set-3-5-kw') },
  { id: 'perfera-25', name: 'Daikin Perfera FTXM-A/RXM', configuration: 'Single-split · 2,5 kW', rooms: 1, href: '/products/daikin/perfera-ftxm-a', source: single('daikin-perfera-split-airco-ftxm25a-rxm-2-5-kw') },
  { id: 'lg-duo', name: 'LG MU2R15-0909', configuration: 'Duo-split · 2 × 2,5 kW', rooms: 2, href: '/products/airco/81001627', source: multi('81001627') },
  { id: 'pular-triple', name: 'Tosot Pular 090909P', configuration: 'Triple-split · 3 × 2,5 kW', rooms: 3, href: '/products/airco/81001692', source: multi('81001692') },
].map(example => ({ ...example, grossCents: priceIncludingVat(example.source.netCents, example.source.vatRate) }));
export type CostExample = typeof costExamples[number];
export function costInquiry(example: CostExample) {
  return `${example.name} — ${example.configuration} — ${formatPrice(example.grossCents)} incl. btw, installatie en materialen`;
}
export const costSeo = {
  title: 'Wat kost een airco inclusief installatie? | Prijzen 2026',
  description: 'Bekijk aircoprijzen inclusief btw, installatie en materialen voor één, twee of drie ruimtes. Vergelijk opstellingen en vraag een offerte aan in Limburg.',
  canonical: 'https://staycoolairco.nl/kosten-airco-plaatsen',
};
export const costSchema = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${costSeo.canonical}#webpage`, url: costSeo.canonical, name: costSeo.title, description: costSeo.description, inLanguage: 'nl-NL', breadcrumb: { '@id': `${costSeo.canonical}#breadcrumb` }, about: { '@id': `${costSeo.canonical}#service` } },
    { '@type': 'BreadcrumbList', '@id': `${costSeo.canonical}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://staycoolairco.nl/' },
      { '@type': 'ListItem', position: 2, name: 'Kosten airco plaatsen', item: costSeo.canonical },
    ] },
    { '@type': 'Service', '@id': `${costSeo.canonical}#service`, name: 'Airco leveren en installeren in Limburg', serviceType: 'Airco-installatie', areaServed: { '@type': 'AdministrativeArea', name: 'Limburg, Nederland' }, provider: { '@type': 'Organization', name: 'StayCool Airco', url: 'https://staycoolairco.nl/' } },
  ],
};
