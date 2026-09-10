import { Helmet } from 'react-helmet-async';

type SchemaType = 'LocalBusiness' | 'Service' | 'Product' | 'Article' | 'Review' | 'FAQPage' | 'HowTo' | 'CollectionPage' | 'Organization' | 'WebSite' | 'BreadcrumbList' | 'Table' | 'WebPage' | 'ItemList';
interface SchemaMarkupProps {
  type: SchemaType;
  data: Record<string, any>;
  location?: { city?: string; region?: string; postalCode?: string; latitude?: number; longitude?: number };
}

// A service area is not a branch address. Keep one business identity across pages.
const organization = {
  '@type': 'Organization',
  '@id': 'https://staycoolairco.nl/#organization',
  name: 'StayCool Airco',
  url: 'https://staycoolairco.nl',
  telephone: '+31462021430',
  email: 'info@staycoolairco.nl',
  logo: 'https://staycoolairco.nl/images/logo.svg',
  address: {
    '@type': 'PostalAddress', streetAddress: 'Aan de Bogen 11',
    addressLocality: 'Nieuwstadt', postalCode: '6118 AS', addressRegion: 'Limburg', addressCountry: 'NL',
  },
};

export default function SchemaMarkup({ type, data, location }: SchemaMarkupProps) {
  const areaServed = location?.city
    ? { '@type': 'City', name: location.city }
    : { '@type': 'AdministrativeArea', name: 'Limburg' };
  const base = { '@context': 'https://schema.org', '@type': type };
  let schema: Record<string, any> = { ...base, ...data };
  switch (type) {
    case 'LocalBusiness':
    case 'Organization':
      schema = { ...organization, ...base, areaServed, ...data };
      break;
    case 'Service':
      schema = { ...base, provider: organization, areaServed, ...data };
      break;
    case 'Product':
      schema = { ...base, ...data, brand: typeof data.brand === 'string' ? { '@type': 'Brand', name: data.brand } : data.brand };
      // Never fabricate an offer, stock status, expiry date or product rating.
      if (data.offers) {
        const enhance = (offer: Record<string, unknown>) => ({ seller: organization, ...offer });
        schema.offers = Array.isArray(data.offers) ? data.offers.map(enhance) : enhance(data.offers);
      }
      break;
    case 'Article':
      schema = { ...base, publisher: organization, author: organization, ...data };
      break;
    case 'FAQPage':
      schema = { ...base, mainEntity: data.mainEntity ?? (data.questions ?? []).map((item: any) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
      break;
    case 'HowTo': {
      const { supplies, tools, steps, ...rest } = data;
      schema = {
        ...base, ...rest,
        ...(supplies && { supply: supplies.map((name: string) => ({ '@type': 'HowToSupply', name })) }),
        ...(tools && { tool: tools.map((name: string) => ({ '@type': 'HowToTool', name })) }),
        ...(steps && { step: steps.map((step: any, index: number) => ({ '@type': 'HowToStep', position: index + 1, ...step })) }),
      };
      break;
    }
    case 'CollectionPage':
    case 'WebSite':
      schema = { ...base, publisher: organization, ...data };
      break;
    case 'BreadcrumbList':
      schema = { ...base, itemListElement: data.itemListElement ?? (data.items ?? []).map((item: any, index: number) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })) };
      break;
    case 'Table': {
      const { items, ...rest } = data;
      schema = { ...base, ...rest, ...(items && { about: items }) };
      break;
    }
  }
  return <Helmet><script type="application/ld+json">{JSON.stringify(schema).replace(/</g, '\\u003c')}</script></Helmet>;
}
