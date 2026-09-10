export const comparisonPath = '/seo/pillar-8-vergelijkingen/mono-split-vs-multi-split';
export const comparisonSeo = {
  title: 'Single-split of multi-split airco? Verschillen en keuzehulp',
  description: 'Vergelijk single-split en multi-split op buitenunits, gebruik, uitbreiding en kosten. Krijg advies en een offerte voor uw woning in Limburg.',
  canonical: `https://staycoolairco.nl${comparisonPath}`,
};
export const comparisonChoices = [
  { id: 'single', title: 'Ik begin met één ruimte', description: 'Bijvoorbeeld alleen een slaapkamer of werkkamer.', cta: 'Advies voor één ruimte', context: 'Single-split of multi-split — ik wil beginnen met één ruimte en ontvang graag advies en een offerte.' },
  { id: 'multi', title: 'Ik wil meerdere ruimtes', description: 'Vergelijk één multi-split met meerdere losse single-splits.', cta: 'Vergelijk mijn installatieopties', context: 'Single-split of multi-split — ik wil meerdere ruimtes en wil een multi-split vergelijken met losse single-splits, inclusief installatie.' },
  { id: 'later', title: 'Ik wil later uitbreiden', description: 'Neem toekomstige kamers mee in het installatieplan.', cta: 'Bespreek mijn uitbreidingsplan', context: 'Single-split of multi-split — ik wil nu beginnen en later mogelijk uitbreiden. Graag advies over een passende opstelling en offerte.' },
] as const;
export type ComparisonChoice = typeof comparisonChoices[number];
export const comparisonSchema = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${comparisonSeo.canonical}#webpage`, url: comparisonSeo.canonical, name: comparisonSeo.title, description: comparisonSeo.description, inLanguage: 'nl-NL', breadcrumb: { '@id': `${comparisonSeo.canonical}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${comparisonSeo.canonical}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://staycoolairco.nl/' },
      { '@type': 'ListItem', position: 2, name: 'Single-split of multi-split', item: comparisonSeo.canonical },
    ] },
  ],
};
