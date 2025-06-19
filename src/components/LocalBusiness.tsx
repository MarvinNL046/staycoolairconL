import React from 'react';
import { OptimizedSchemaFactory } from '../utils/optimizedSchemas';
import realReviewData from '../utils/realReviewData';

interface LocalBusinessProps {
  city: string;
  region?: string;
  postalCode?: string;
}

export default function LocalBusiness({ city, region = "Limburg", postalCode }: LocalBusinessProps) {
  const schema = OptimizedSchemaFactory.createLocalBusinessSchema({
    name: "StayCool Airco",
    alternateName: "StayCool Airconditioning",
    url: "https://staycoolairco.nl",
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    address: {
      streetAddress: realReviewData.companyInfo.operationalAddress.street,
      addressLocality: realReviewData.companyInfo.operationalAddress.city,
      addressRegion: realReviewData.companyInfo.operationalAddress.region,
      postalCode: realReviewData.companyInfo.operationalAddress.postalCode,
      addressCountry: "NL"
    },
    geo: {
      latitude: "51.0419",
      longitude: "5.8614"
    },
    city,
    region
  });

  // Override with additional real company data
  const enhancedSchema = {
    ...schema,
    "@id": `https://staycoolairco.nl/werkgebied/${city.toLowerCase()}`,
    "foundingDate": realReviewData.companyInfo.foundingDate,
    "legalName": "Staycool Airconditioning",
    "vatID": `NL${realReviewData.companyInfo.kvkNumber}`,
    "taxID": realReviewData.companyInfo.kvkNumber,
    "sameAs": [
      "https://www.facebook.com/staycoolairco",
      "https://www.linkedin.com/company/staycoolairco", 
      "https://www.instagram.com/staycoolairco",
      "https://www.trustpilot.com/review/staycoolairco.nl"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedSchema) }}
    />
  );
}
