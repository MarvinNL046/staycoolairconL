import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getCoordinatesForCity } from '../data/geoCoordinates';

interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'Product' | 'Article' | 'Review' | 'FAQPage' | 'HowTo' | 'CollectionPage';
  data: any;
  location?: {
    city?: string;
    region?: string;
    postalCode?: string;
    latitude?: number;
    longitude?: number;
  };
}

export default function SchemaMarkup({ type, data, location }: SchemaMarkupProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type
  };

  const getLocalBusinessSchema = () => {
    // Get accurate geo coordinates from database or use defaults
    const cityCoordinates = location?.city ? getCoordinatesForCity(location.city) : null;
    const latitude = location?.latitude || cityCoordinates?.latitude || 51.0;
    const longitude = location?.longitude || cityCoordinates?.longitude || 5.9;
    
    // Determine postal address based on location data
    const postalAddress = location?.city ? {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region || "Limburg",
      postalCode: location.postalCode,
      addressCountry: "NL"
    } : {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL"
    };
    
    // Determine area served based on location
    const areaServed = location?.city ? {
      "@type": "City",
      name: location.city,
      ...(location.region && { 
        containedIn: {
          "@type": "AdministrativeArea",
          name: location.region
        }
      })
    } : {
      "@type": "State",
      name: "Limburg"
    };
    
    return {
      ...baseSchema,
      name: "StayCool Airco",
      image: "https://staycoolairco.nl/images/logo.svg",
      "@id": "https://staycoolairco.nl",
      url: "https://staycoolairco.nl",
      telephone: "046 202 1430",
      address: postalAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude,
        longitude
      },
      areaServed,
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1"
      },
      ...data
    };
  };

  const getServiceSchema = () => {
    // Determine area served based on location
    const areaServed = location?.city ? {
      "@type": "City",
      name: location.city,
      ...(location.region && { 
        containedIn: {
          "@type": "AdministrativeArea",
          name: location.region
        }
      })
    } : {
      "@type": "State",
      name: "Limburg"
    };
    
    // Create address for provider
    const address = location?.city ? {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region || "Limburg",
      ...(location.postalCode && { postalCode: location.postalCode }),
      addressCountry: "NL"
    } : {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL"
    };
    
    return {
      ...baseSchema,
      provider: {
        "@type": "LocalBusiness",
        name: "StayCool Airco",
        url: "https://staycoolairco.nl",
        address
      },
      areaServed,
      ...data
    };
  };

  const getProductSchema = () => {
    // Enhanced seller information with location
    const seller = {
      "@type": "LocalBusiness",
      name: "StayCool Airco",
      ...(location?.city && {
        address: {
          "@type": "PostalAddress",
          addressLocality: location.city,
          addressRegion: location.region || "Limburg",
          ...(location.postalCode && { postalCode: location.postalCode }),
          addressCountry: "NL"
        }
      })
    };
    
    // Add area served to offers if location is available
    const areaServed = location?.city ? {
      areaServed: {
        "@type": "City",
        name: location.city,
        ...(location.region && { 
          containedIn: {
            "@type": "AdministrativeArea",
            name: location.region
          }
        })
      }
    } : {};
    
    // Handle offers based on whether it's already provided in data
    let offers;
    if (data.offers) {
      // If offers is provided, ensure it has priceValidUntil
      offers = {
        ...data.offers,
        // Add priceValidUntil if not already present
        ...((!data.offers.priceValidUntil) && {
          priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString()
        }),
        seller,
        ...areaServed
      };
    } else {
      // Default offers object
      offers = {
        "@type": "Offer",
        priceCurrency: "EUR",
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        availability: "https://schema.org/InStock",
        seller,
        ...areaServed
      };
    }
    
    // Create the schema object, ensuring we include all data properties
    const schema = {
      ...baseSchema,
      ...data,
      // Ensure brand is properly formatted
      brand: data.brand && typeof data.brand === 'string' 
        ? { "@type": "Brand", name: data.brand }
        : data.brand,
      // Replace offers with our enhanced version
      offers
    };
    
    return schema;
  };

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

  const getFAQPageSchema = () => ({
    ...baseSchema,
    mainEntity: data.questions.map((item: any) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  });
  
  const getHowToSchema = () => ({
    ...baseSchema,
    name: data.name,
    description: data.description,
    totalTime: data.totalTime || "PT1H", // Default 1 hour if not specified
    supply: Array.isArray(data.supplies) ? data.supplies.map((supply: string) => ({
      "@type": "HowToSupply",
      name: supply
    })) : [],
    tool: Array.isArray(data.tools) ? data.tools.map((tool: string) => ({
      "@type": "HowToTool",
      name: tool
    })) : [],
    step: Array.isArray(data.steps) ? data.steps.map((step: any, index: number) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { 
        image: {
          "@type": "ImageObject",
          url: step.image
        } 
      })
    })) : [],
    ...(location?.city && {
      locationCreated: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: location.city,
          addressRegion: location.region || "Limburg",
          addressCountry: "NL"
        }
      }
    })
  });
  
  const getCollectionPageSchema = () => ({
    ...baseSchema,
    url: "https://staycoolairco.nl/blog",
    publisher: {
      "@type": "Organization",
      name: "StayCool Airco",
      logo: {
        "@type": "ImageObject",
        url: "https://staycoolairco.nl/images/logo.svg"
      }
    },
    ...data
  });
  
  const schemaMap = {
    LocalBusiness: getLocalBusinessSchema,
    Service: getServiceSchema,
    Product: getProductSchema,
    Article: getArticleSchema,
    Review: getReviewSchema,
    FAQPage: getFAQPageSchema,
    HowTo: getHowToSchema,
    CollectionPage: getCollectionPageSchema
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
