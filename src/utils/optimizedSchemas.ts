import realReviewData from './realReviewData';

// Optimized schema generators with all recommended fields and real review data
export class OptimizedSchemaFactory {
  
  // Enhanced LocalBusiness schema with all recommended fields
  static createLocalBusinessSchema(data: {
    name: string;
    alternateName?: string;
    url: string;
    telephone: string;
    email: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo: {
      latitude: string;
      longitude: string;
    };
    city?: string;
    region?: string;
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": data.name,
      ...(data.alternateName && { "alternateName": data.alternateName }),
      "@id": data.city ? `${data.url}/werkgebied/${data.city.toLowerCase()}` : `${data.url}/#organization`,
      "url": data.url,
      "telephone": data.telephone,
      "email": data.email,
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "iDEAL"],
      "description": "Specialist in airconditioning installatie, onderhoud en reparatie in Limburg. F-gassen gecertificeerd met meer dan 1000+ installaties.",
      "foundingDate": "2018",
      "slogan": "Koeling én Verwarming, Jaar Rond Comfort",
      "logo": {
        "@type": "ImageObject",
        "url": `${data.url}/images/logo.svg`,
        "width": 200,
        "height": 60
      },
      "image": [
        `${data.url}/images/logo.svg`,
        `${data.url}/images/staycoolairco_logo.png`
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": data.address.streetAddress,
        "addressLocality": data.address.addressLocality,
        "addressRegion": data.address.addressRegion,
        "postalCode": data.address.postalCode,
        "addressCountry": data.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": data.geo.latitude,
        "longitude": data.geo.longitude
      },
      "areaServed": [
        {
          "@type": "State",
          "name": data.region || "Limburg"
        },
        ...(data.city ? [{
          "@type": "City",
          "name": data.city,
          "containedIn": {
            "@type": "AdministrativeArea",
            "name": data.region || "Limburg"
          }
        }] : [])
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": data.geo.latitude,
          "longitude": data.geo.longitude
        },
        "geoRadius": "50000"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Airconditioning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airco Installatie",
              "description": "Professionele installatie van airconditioningsystemen",
              "provider": {
                "@type": "LocalBusiness",
                "name": data.name
              },
              "areaServed": {
                "@type": "State",
                "name": "Limburg"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airco Onderhoud",
              "description": "Regelmatig onderhoud voor optimale prestaties",
              "provider": {
                "@type": "LocalBusiness",
                "name": data.name
              },
              "areaServed": {
                "@type": "State",
                "name": "Limburg"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airco Reparatie",
              "description": "Snelle reparatie van airconditioningsystemen",
              "provider": {
                "@type": "LocalBusiness",
                "name": data.name
              },
              "areaServed": {
                "@type": "State",
                "name": "Limburg"
              }
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": realReviewData.trustpilotStats.rating,
        "reviewCount": realReviewData.trustpilotStats.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      },
      "sameAs": [
        "https://www.facebook.com/staycoolairco",
        "https://www.linkedin.com/company/staycoolairco",
        "https://www.instagram.com/staycoolairco"
      ]
    };
  }

  // Enhanced Product schema with all recommended fields
  static createProductSchema(data: {
    name: string;
    brand: string;
    model: string;
    description: string;
    images: string[];
    price?: number;
    sku: string;
    mpn?: string;
    gtin?: string;
    category: string;
    specifications: Array<{ label: string; value: string }>;
    energyLabel?: string;
    capacity?: string;
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.name,
      "image": data.images,
      "description": data.description,
      "sku": data.sku,
      "mpn": data.mpn || data.model,
      ...(data.gtin && { "gtin": data.gtin }),
      "category": data.category,
      "brand": {
        "@type": "Brand",
        "name": data.brand
      },
      "manufacturer": {
        "@type": "Organization",
        "name": data.brand
      },
      "model": data.model,
      ...(data.price && {
        "offers": {
          "@type": "Offer",
          "priceCurrency": "EUR",
          "price": data.price,
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "StayCool Airco"
          },
          "warranty": "PT5Y"
        }
      }),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": realReviewData.getReviewStats().averageRating,
        "reviewCount": realReviewData.getReviewStats().totalReviews,
        "bestRating": 5,
        "worstRating": 1
      },
      "review": realReviewData.getSchemaReviews(3).map(review => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewBody": review.reviewBody,
        "datePublished": review.datePublished,
        ...(review.location && {
          "locationCreated": {
            "@type": "Place",
            "name": review.location
          }
        })
      })),
      "additionalProperty": [
        ...(data.energyLabel ? [{
          "@type": "PropertyValue",
          "name": "Energielabel",
          "value": data.energyLabel
        }] : []),
        ...(data.capacity ? [{
          "@type": "PropertyValue",
          "name": "Capaciteit",
          "value": data.capacity
        }] : []),
        ...data.specifications.map(spec => ({
          "@type": "PropertyValue",
          "name": spec.label,
          "value": spec.value
        }))
      ]
    };
  }

  // Enhanced VideoObject schema with all recommended fields
  static createVideoSchema(data: {
    name: string;
    description: string;
    thumbnailUrl: string;
    contentUrl: string;
    embedUrl?: string;
    duration: string;
    uploadDate: string;
    transcript?: string;
    chapters?: Array<{
      startTime: string;
      title: string;
      description?: string;
    }>;
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": data.name,
      "description": data.description,
      "thumbnailUrl": data.thumbnailUrl,
      "contentUrl": data.contentUrl,
      "embedUrl": data.embedUrl || data.contentUrl,
      "duration": data.duration,
      "uploadDate": data.uploadDate,
      "author": {
        "@type": "Organization",
        "name": "StayCool Airco",
        "url": "https://staycoolairco.nl"
      },
      "publisher": {
        "@type": "Organization",
        "name": "StayCool Airco",
        "logo": {
          "@type": "ImageObject",
          "url": "https://staycoolairco.nl/images/logo.svg",
          "width": 200,
          "height": 60
        }
      },
      ...(data.transcript && {
        "transcript": {
          "@type": "MediaObject",
          "contentUrl": `data:text/plain;charset=utf-8,${encodeURIComponent(data.transcript)}`
        }
      }),
      ...(data.chapters && data.chapters.length > 0 && {
        "hasPart": data.chapters.map((chapter, index) => ({
          "@type": "Clip",
          "name": chapter.title,
          "description": chapter.description,
          "startOffset": chapter.startTime,
          "url": `${data.contentUrl}#t=${chapter.startTime}`
        }))
      })
    };
  }

  // Enhanced HowTo schema for instructional content
  static createHowToSchema(data: {
    name: string;
    description: string;
    image?: string;
    totalTime?: string;
    estimatedCost?: string;
    supply?: string[];
    tool?: string[];
    steps: Array<{
      name: string;
      text: string;
      image?: string;
      url?: string;
    }>;
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": data.name,
      "description": data.description,
      ...(data.image && { "image": data.image }),
      ...(data.totalTime && { "totalTime": data.totalTime }),
      ...(data.estimatedCost && { "estimatedCost": data.estimatedCost }),
      ...(data.supply && {
        "supply": data.supply.map(item => ({
          "@type": "HowToSupply",
          "name": item
        }))
      }),
      ...(data.tool && {
        "tool": data.tool.map(item => ({
          "@type": "HowToTool",
          "name": item
        }))
      }),
      "step": data.steps.map((step, index) => ({
        "@type": "HowToStep",
        "name": step.name,
        "text": step.text,
        "position": index + 1,
        ...(step.image && { "image": step.image }),
        ...(step.url && { "url": step.url })
      }))
    };
  }

  // Enhanced Article schema with all recommended fields
  static createArticleSchema(data: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    url: string;
    wordCount?: number;
    articleBody?: string;
  }) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.headline,
      "description": data.description,
      "image": {
        "@type": "ImageObject",
        "url": data.image,
        "width": 1200,
        "height": 630
      },
      "datePublished": data.datePublished,
      "dateModified": data.dateModified || data.datePublished,
      "author": {
        "@type": "Organization",
        "name": data.author || "StayCool Airco"
      },
      "publisher": {
        "@type": "Organization",
        "name": "StayCool Airco",
        "logo": {
          "@type": "ImageObject",
          "url": "https://staycoolairco.nl/images/logo.svg",
          "width": 200,
          "height": 60
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data.url
      },
      ...(data.wordCount && { "wordCount": data.wordCount }),
      ...(data.articleBody && { "articleBody": data.articleBody })
    };
  }

  // Enhanced FAQPage schema
  static createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }
}

export default OptimizedSchemaFactory;