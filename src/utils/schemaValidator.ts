interface SchemaValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  schemaType: string;
}

interface SchemaValidationSummary {
  totalSchemas: number;
  validSchemas: number;
  invalidSchemas: number;
  results: SchemaValidationResult[];
}

export class SchemaValidator {
  private requiredFields: Record<string, string[]> = {
    'LocalBusiness': [
      'name', 'address', 'telephone', 'url', 'areaServed'
    ],
    'Product': [
      'name', 'image', 'description', 'brand', 'offers'
    ],
    'Service': [
      'name', 'provider', 'areaServed', 'description'
    ],
    'Article': [
      'headline', 'author', 'publisher', 'datePublished'
    ],
    'FAQPage': [
      'mainEntity'
    ],
    'HowTo': [
      'name', 'step'
    ],
    'VideoObject': [
      'name', 'description', 'thumbnailUrl', 'uploadDate'
    ],
    'Review': [
      'reviewRating', 'author', 'reviewBody', 'itemReviewed'
    ]
  };

  private recommendedFields: Record<string, string[]> = {
    'LocalBusiness': [
      'geo', 'openingHoursSpecification', 'priceRange', 'aggregateRating', 'sameAs'
    ],
    'Product': [
      'aggregateRating', 'review', 'sku', 'gtin', 'mpn'
    ],
    'Service': [
      'offers', 'aggregateRating', 'review'
    ],
    'Article': [
      'image', 'dateModified', 'mainEntityOfPage'
    ],
    'VideoObject': [
      'duration', 'contentUrl', 'embedUrl', 'transcript'
    ]
  };

  validateSchema(schema: any): SchemaValidationResult {
    const result: SchemaValidationResult = {
      isValid: true,
      errors: [],
      warnings: [],
      schemaType: schema['@type'] || 'Unknown'
    };

    // Basic structure validation
    if (!schema['@context']) {
      result.errors.push('Missing required @context');
      result.isValid = false;
    }

    if (!schema['@type']) {
      result.errors.push('Missing required @type');
      result.isValid = false;
      return result;
    }

    const schemaType = schema['@type'];
    const required = this.requiredFields[schemaType] || [];
    const recommended = this.recommendedFields[schemaType] || [];

    // Check required fields
    for (const field of required) {
      if (!schema[field]) {
        result.errors.push(`Missing required field: ${field}`);
        result.isValid = false;
      }
    }

    // Check recommended fields
    for (const field of recommended) {
      if (!schema[field]) {
        result.warnings.push(`Missing recommended field: ${field}`);
      }
    }

    // Specific validations per schema type
    this.validateSpecificSchema(schema, result);

    return result;
  }

  private validateSpecificSchema(schema: any, result: SchemaValidationResult): void {
    switch (schema['@type']) {
      case 'LocalBusiness':
        this.validateLocalBusiness(schema, result);
        break;
      case 'Product':
        this.validateProduct(schema, result);
        break;
      case 'FAQPage':
        this.validateFAQPage(schema, result);
        break;
      case 'VideoObject':
        this.validateVideoObject(schema, result);
        break;
    }
  }

  private validateLocalBusiness(schema: any, result: SchemaValidationResult): void {
    // Address validation
    if (schema.address) {
      if (!schema.address.addressLocality && !schema.address.addressRegion) {
        result.warnings.push('Address should include addressLocality or addressRegion');
      }
      if (!schema.address.addressCountry) {
        result.warnings.push('Address should include addressCountry');
      }
    }

    // Telephone validation
    if (schema.telephone && !schema.telephone.startsWith('+')) {
      result.warnings.push('Telephone should include country code (e.g., +31)');
    }

    // Geo coordinates validation
    if (schema.geo) {
      if (!schema.geo.latitude || !schema.geo.longitude) {
        result.errors.push('Geo coordinates must include both latitude and longitude');
        result.isValid = false;
      }
    }

    // Opening hours validation
    if (schema.openingHoursSpecification) {
      const hours = schema.openingHoursSpecification;
      if (!hours.dayOfWeek || !hours.opens || !hours.closes) {
        result.warnings.push('Opening hours should include dayOfWeek, opens, and closes');
      }
    }
  }

  private validateProduct(schema: any, result: SchemaValidationResult): void {
    // Offers validation
    if (schema.offers) {
      const offers = Array.isArray(schema.offers) ? schema.offers[0] : schema.offers;
      if (!offers.price && !offers.priceRange) {
        result.warnings.push('Offers should include price or priceRange');
      }
      if (!offers.priceCurrency) {
        result.warnings.push('Offers should include priceCurrency');
      }
      if (!offers.availability) {
        result.warnings.push('Offers should include availability');
      }
    }

    // Brand validation
    if (schema.brand && typeof schema.brand === 'string') {
      result.warnings.push('Brand should be an object with @type and name properties');
    }

    // Image validation
    if (schema.image && typeof schema.image === 'string') {
      result.warnings.push('Consider using ImageObject for better image markup');
    }
  }

  private validateFAQPage(schema: any, result: SchemaValidationResult): void {
    if (schema.mainEntity) {
      const questions = Array.isArray(schema.mainEntity) ? schema.mainEntity : [schema.mainEntity];
      
      questions.forEach((question: any, index: number) => {
        if (!question.name) {
          result.errors.push(`FAQ question ${index + 1} missing name`);
          result.isValid = false;
        }
        if (!question.acceptedAnswer || !question.acceptedAnswer.text) {
          result.errors.push(`FAQ question ${index + 1} missing acceptedAnswer.text`);
          result.isValid = false;
        }
      });
    }
  }

  private validateVideoObject(schema: any, result: SchemaValidationResult): void {
    // Duration validation (ISO 8601 format)
    if (schema.duration && !schema.duration.startsWith('PT')) {
      result.warnings.push('Duration should be in ISO 8601 format (e.g., PT5M30S)');
    }

    // Upload date validation
    if (schema.uploadDate && isNaN(Date.parse(schema.uploadDate))) {
      result.errors.push('uploadDate should be a valid ISO 8601 date');
      result.isValid = false;
    }

    // URL validation
    if (schema.contentUrl && !this.isValidUrl(schema.contentUrl)) {
      result.warnings.push('contentUrl should be a valid URL');
    }

    if (schema.embedUrl && !this.isValidUrl(schema.embedUrl)) {
      result.warnings.push('embedUrl should be a valid URL');
    }
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  validateMultipleSchemas(schemas: any[]): SchemaValidationSummary {
    const results = schemas.map(schema => this.validateSchema(schema));
    
    return {
      totalSchemas: schemas.length,
      validSchemas: results.filter(r => r.isValid).length,
      invalidSchemas: results.filter(r => !r.isValid).length,
      results
    };
  }

  generateSchemaReport(schemas: any[]): string {
    const summary = this.validateMultipleSchemas(schemas);
    
    let report = `Schema Validation Report\n`;
    report += `========================\n\n`;
    report += `Total Schemas: ${summary.totalSchemas}\n`;
    report += `Valid Schemas: ${summary.validSchemas}\n`;
    report += `Invalid Schemas: ${summary.invalidSchemas}\n`;
    report += `Success Rate: ${((summary.validSchemas / summary.totalSchemas) * 100).toFixed(1)}%\n\n`;

    summary.results.forEach((result, index) => {
      report += `Schema ${index + 1}: ${result.schemaType}\n`;
      report += `Status: ${result.isValid ? '✅ Valid' : '❌ Invalid'}\n`;
      
      if (result.errors.length > 0) {
        report += `Errors:\n`;
        result.errors.forEach(error => report += `  - ${error}\n`);
      }
      
      if (result.warnings.length > 0) {
        report += `Warnings:\n`;
        result.warnings.forEach(warning => report += `  - ${warning}\n`);
      }
      
      report += `\n`;
    });

    return report;
  }

  // Helper function to extract all schemas from a page
  extractSchemasFromPage(): any[] {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    const schemas: any[] = [];

    scripts.forEach(script => {
      try {
        const schema = JSON.parse(script.textContent || '');
        schemas.push(schema);
      } catch (error) {
        console.warn('Invalid JSON-LD found:', error);
      }
    });

    return schemas;
  }
}

// Enhanced schema generators
export const createOptimizedLocalBusinessSchema = (data: {
  name: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  telephone: string;
  email?: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: {
    days: string[];
    opens: string;
    closes: string;
  };
  services: string[];
  priceRange: string;
  rating?: {
    value: number;
    count: number;
  };
  socialMedia?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://staycoolairco.nl/#organization",
    "name": data.name,
    "url": "https://staycoolairco.nl",
    "telephone": data.telephone,
    ...(data.email && { "email": data.email }),
    "priceRange": data.priceRange,
    "currenciesAccepted": "EUR",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "iDEAL"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.street,
      "addressLocality": data.address.locality,
      "addressRegion": data.address.region,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.geo.latitude,
      "longitude": data.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": data.openingHours.days,
      "opens": data.openingHours.opens,
      "closes": data.openingHours.closes
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airconditioning Services",
      "itemListElement": data.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    },
    ...(data.rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": data.rating.value,
        "reviewCount": data.rating.count,
        "bestRating": 5,
        "worstRating": 1
      }
    }),
    ...(data.socialMedia && {
      "sameAs": data.socialMedia
    })
  };
};

export const validator = new SchemaValidator();