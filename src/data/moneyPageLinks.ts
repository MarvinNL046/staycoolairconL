export interface MoneyPageLink {
  title: string;
  description: string;
  path: string;
}

export const primaryMoneyPageLinks: MoneyPageLink[] = [
  {
    title: 'Airco laten plaatsen Limburg',
    description: 'Vrijblijvend een passende offerte voor jouw woning.',
    path: '/airco-laten-plaatsen-limburg',
  },
  {
    title: 'Airco installatie Limburg',
    description: 'Duidelijke installatie-aanvraag met lokale dekking.',
    path: '/airco-installatie-limburg',
  },
  {
    title: 'Airco kopen en laten installeren',
    description: 'Een compleet traject van keuze tot montage.',
    path: '/airco-kopen-en-laten-installeren-limburg',
  },
  {
    title: 'Airco offerte aanvragen',
    description: 'Snel duidelijkheid en binnen 24 uur reactie.',
    path: '/airco-offerte-aanvragen-limburg',
  },
];

export const footerMoneyPageLinks: MoneyPageLink[] = [
  ...primaryMoneyPageLinks,
  {
    title: 'Airco installatie prijs',
    description: 'Bekijk waar de installatiekosten van afhangen.',
    path: '/airco-installatie-prijs-limburg',
  },
  {
    title: 'Airco onderhoud Limburg',
    description: 'Service, controle en reiniging voor je airco.',
    path: '/airco-onderhoud-limburg',
  },
  {
    title: 'Airco reparatie Limburg',
    description: 'Hulp bij storingen, lekkage of minder vermogen.',
    path: '/airco-reparatie-limburg',
  },
  {
    title: 'Multi split airco installatie',
    description: 'Meerdere ruimtes koelen of verwarmen.',
    path: '/multi-split-airco-installatie-limburg',
  },
];

