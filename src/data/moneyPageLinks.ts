export interface MoneyPageLink {
  title: string;
  description: string;
  path: string;
}

export const primaryMoneyPageLinks: MoneyPageLink[] = [
  { title: 'Airco kopen in Limburg', description: 'Vergelijk systemen en vraag advies voor uw woning aan.', path: '/airco-kopen-limburg' },
  { title: 'Kosten airco plaatsen', description: 'Voorbeelden inclusief installatie, materialen en btw.', path: '/kosten-airco-plaatsen' },
  { title: 'Single-split of multi-split?', description: 'Vergelijk de opties voor één of meerdere ruimtes.', path: '/seo/pillar-8-vergelijkingen/mono-split-vs-multi-split' },
  { title: 'Onderhoudsabonnementen', description: 'Kies Basis of Premium voor uw door StayCool geplaatste airco.', path: '/onderhoud' },
];

export const footerMoneyPageLinks: MoneyPageLink[] = [
  ...primaryMoneyPageLinks,
  { title: 'Installatie voorbereiden', description: 'Checklist voor plaatsing in uw woning.', path: '/airco-laten-plaatsen-limburg' },
  { title: 'Hoe verloopt de installatie?', description: 'Van opname tot oplevering in Limburg.', path: '/airco-installatie-limburg' },
  { title: 'Installatieofferte controleren', description: 'Vergelijk dezelfde uitvoering en werkzaamheden.', path: '/airco-kopen-en-laten-installeren-limburg' },
  { title: 'Airco offerte aanvragen', description: 'Ontvang een voorstel voor uw woning.', path: '/airco-offerte-aanvragen-limburg' },
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
  {
    title: 'Airco buitenunit regels',
    description: 'Check regels, geluid en plaatsing vooraf.',
    path: '/airco-buitenunit-plaatsen-regels-limburg',
  },
  {
    title: 'Stille airco buitenunit',
    description: 'Voorkom geluidsoverlast bij buren.',
    path: '/stille-airco-buitenunit-limburg',
  },
  {
    title: 'Airco vergunning nodig?',
    description: 'Controleer VvE, dak, gevel en balkon.',
    path: '/airco-vergunning-nodig-limburg',
  },
];
