import React from 'react';

interface LocalBusinessProps {
  city: string;
  region?: string;
  postalCode?: string;
}

export default function LocalBusiness({ city, region = "Limburg", postalCode }: LocalBusinessProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "StayCool Airco",
    "@id": `https://staycoolairco.nl/werkgebied/${city.toLowerCase()}`,
    "url": "https://staycoolairco.nl",
    "telephone": "+31462021430",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aan De Bogen 11",
      "addressLocality": "Nieuwstadt",
      "addressRegion": "Limburg",
      "postalCode": "6118AS",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.0419",
      "longitude": "5.8614"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
