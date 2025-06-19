import { SchemaValidator, validator } from './schemaValidator';

// Schema audit utility to validate and optimize existing schemas
export class SchemaAudit {
  private validator: SchemaValidator;

  constructor() {
    this.validator = validator;
  }

  // Audit LocalBusiness schema from LocalBusiness component
  auditLocalBusinessSchema() {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "StayCool Airco",
      "alternateName": "StayCool Airconditioning",
      "email": "info@staycoolairco.nl",
      "foundingDate": "2018",
      "slogan": "Koeling én Verwarming, Jaar Rond Comfort",
      "url": "https://staycoolairco.nl",
      "telephone": "+31462021430",
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "iDEAL"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Industrieweg 15A",
        "addressLocality": "Echt",
        "addressRegion": "Limburg",
        "postalCode": "6101 XZ",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.1045,
        "longitude": 5.8781
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Limburg"
        }
      ],
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
              "name": "Airco Installatie"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Airco Onderhoud"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Airco Reparatie"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.8,
        "reviewCount": 150,
        "bestRating": 5,
        "worstRating": 1
      },
      "sameAs": [
        "https://www.facebook.com/staycoolairco",
        "https://www.instagram.com/staycoolairco"
      ]
    };

    return this.validator.validateSchema(localBusinessSchema);
  }

  // Audit Product schema from ProductDetail component
  auditProductSchema() {
    const productSchema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Daikin Emura FTXJ25MS",
      "image": ["/images/products/daikin-emura-wit.webp"],
      "description": "Stijlvolle wandmodel airco met superior design en uitstekende prestaties",
      "brand": {
        "@type": "Brand",
        "name": "Daikin"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Daikin"
      },
      "model": "Emura FTXJ25MS",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": 1395,
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "StayCool Airco"
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Energielabel",
          "value": "A+++"
        },
        {
          "@type": "PropertyValue",
          "name": "Capaciteit", 
          "value": "2.5 kW"
        },
        {
          "@type": "PropertyValue",
          "name": "SEER",
          "value": "8.73"
        },
        {
          "@type": "PropertyValue",
          "name": "SCOP",
          "value": "5.15"
        }
      ]
    };

    return this.validator.validateSchema(productSchema);
  }

  // Audit VideoObject schema from VideoPlayer component
  auditVideoSchema() {
    const videoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Airco Installatie Stap voor Stap",
      "description": "Bekijk hoe onze monteurs professioneel een airco installeren van A tot Z",
      "thumbnailUrl": "/images/videos/installatie-thumbnail.webp",
      "uploadDate": "2024-01-15T10:00:00Z",
      "duration": "PT8M30S",
      "contentUrl": "https://example.com/installatie-video.mp4",
      "embedUrl": "https://example.com/installatie-video.mp4",
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
          "url": "https://staycoolairco.nl/images/logo.svg"
        }
      }
    };

    return this.validator.validateSchema(videoSchema);
  }

  // Audit FAQ schema from MetaTags component
  auditFAQSchema() {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Voor welke ruimtegrootte is deze airco geschikt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "De airco met 2.5 kW is geschikt voor ruimtes van ongeveer 25-30 m². Voor een exacte berekening adviseren onze experts u graag op basis van isolatie en raamoppervlak."
          }
        },
        {
          "@type": "Question",
          "name": "Wat zijn de jaarlijkse energiekosten van deze airco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bij gemiddeld gebruik (1000 uur koelen en 1000 uur verwarmen per jaar) kost deze airco ongeveer €180-220 per jaar aan elektriciteit. Dit is aanzienlijk goedkoper dan elektrische verwarming."
          }
        }
      ]
    };

    return this.validator.validateSchema(faqSchema);
  }

  // Audit Article schema from blog articles
  auditArticleSchema() {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Airco in de Winter: Efficiënt Verwarmen met uw Airconditioning",
      "author": {
        "@type": "Organization",
        "name": "StayCool Airco"
      },
      "publisher": {
        "@type": "Organization",
        "name": "StayCool Airco",
        "logo": {
          "@type": "ImageObject",
          "url": "https://staycoolairco.nl/images/logo.svg"
        }
      },
      "datePublished": "2024-11-15",
      "dateModified": "2024-11-15",
      "description": "Ontdek hoe u uw airco optimaal kunt gebruiken voor verwarming in de winter. Tips voor energiebesparing en comfort.",
      "image": "https://staycoolairco.nl/images/blog/verwarmen-winter.webp",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://staycoolairco.nl/blog/airco-in-de-winter"
      }
    };

    return this.validator.validateSchema(articleSchema);
  }

  // Run complete audit
  runCompleteAudit() {
    const results = {
      localBusiness: this.auditLocalBusinessSchema(),
      product: this.auditProductSchema(),
      video: this.auditVideoSchema(),
      faq: this.auditFAQSchema(),
      article: this.auditArticleSchema()
    };

    return results;
  }

  // Generate optimization recommendations
  generateOptimizationRecommendations(auditResults: any) {
    const recommendations = [];

    // Check LocalBusiness schema
    if (auditResults.localBusiness.warnings.length > 0) {
      recommendations.push({
        component: 'LocalBusiness',
        priority: 'medium',
        recommendations: auditResults.localBusiness.warnings.map((warning: string) => ({
          issue: warning,
          solution: this.getLocalBusinessSolution(warning)
        }))
      });
    }

    // Check Product schema
    if (auditResults.product.warnings.length > 0) {
      recommendations.push({
        component: 'Product',
        priority: 'high',
        recommendations: auditResults.product.warnings.map((warning: string) => ({
          issue: warning,
          solution: this.getProductSolution(warning)
        }))
      });
    }

    // Check Video schema
    if (auditResults.video.warnings.length > 0) {
      recommendations.push({
        component: 'VideoObject',
        priority: 'medium',
        recommendations: auditResults.video.warnings.map((warning: string) => ({
          issue: warning,
          solution: this.getVideoSolution(warning)
        }))
      });
    }

    return recommendations;
  }

  private getLocalBusinessSolution(warning: string): string {
    if (warning.includes('aggregateRating')) {
      return 'Add aggregateRating with actual review data from Google Reviews';
    }
    if (warning.includes('sameAs')) {
      return 'Add social media profiles and directory listings';
    }
    if (warning.includes('priceRange')) {
      return 'Add price range information (€€)';
    }
    return 'Review LocalBusiness schema structure';
  }

  private getProductSolution(warning: string): string {
    if (warning.includes('aggregateRating')) {
      return 'Add product-specific reviews and ratings';
    }
    if (warning.includes('review')) {
      return 'Add individual customer reviews for this product';
    }
    if (warning.includes('sku')) {
      return 'Add unique SKU identifier for the product';
    }
    if (warning.includes('gtin')) {
      return 'Add GTIN/EAN barcode if available';
    }
    return 'Enhance product schema with missing recommended fields';
  }

  private getVideoSolution(warning: string): string {
    if (warning.includes('transcript')) {
      return 'Add video transcript for accessibility and SEO';
    }
    if (warning.includes('contentUrl')) {
      return 'Ensure video URLs are valid and accessible';
    }
    if (warning.includes('duration')) {
      return 'Format duration in ISO 8601 format (PT8M30S)';
    }
    return 'Enhance video schema with recommended fields';
  }
}

export const schemaAudit = new SchemaAudit();