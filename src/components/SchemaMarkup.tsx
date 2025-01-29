import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'Product' | 'Article' | 'Review';
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type
  };

  const getLocalBusinessSchema = () => ({
    ...baseSchema,
    name: "StayCool Airco",
    image: "https://staycoolairco.nl/images/logo.svg",
    "@id": "https://staycoolairco.nl",
    url: "https://staycoolairco.nl",
    telephone: "046 202 1430",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL"
    },
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.0,
        longitude: 5.9
      },
      geoRadius: "50000"
    },
    areaServed: {
      "@type": "State",
      name: "Limburg"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "09:00",
      closes: "17:00"
    },
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    ...data
  });

  const getServiceSchema = () => ({
    ...baseSchema,
    provider: {
      "@type": "LocalBusiness",
      name: "StayCool Airco",
      url: "https://staycoolairco.nl"
    },
    areaServed: {
      "@type": "State",
      name: "Limburg"
    },
    ...data
  });

  const getProductSchema = () => ({
    ...baseSchema,
    brand: {
      "@type": "Brand",
      name: data.brand
    },
    manufacturer: {
      "@type": "Organization",
      name: data.brand
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "StayCool Airco"
      }
    },
    ...data
  });

  const getArticleSchema = () => ({
    ...baseSchema,
    publisher: {
      "@type": "Organization",
      name: "StayCool Airco",
      logo: {
        "@type": "ImageObject",
        url: "https://staycoolairco.nl/images/logo.svg"
      }
    },
    author: {
      "@type": "Organization",
      name: "StayCool Airco"
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    ...data
  });

  const getReviewSchema = () => ({
    ...baseSchema,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "StayCool Airco"
    },
    author: {
      "@type": "Person",
      name: data.author
    },
    ...data
  });

  const schemaMap = {
    LocalBusiness: getLocalBusinessSchema,
    Service: getServiceSchema,
    Product: getProductSchema,
    Article: getArticleSchema,
    Review: getReviewSchema
  };

  const schema = schemaMap[type]();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
