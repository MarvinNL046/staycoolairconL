// Utility functions for testing and validating schemas

export class SchemaTestUtils {
  
  // Generate Google Rich Results Test URL
  static getRichResultsTestUrl(pageUrl: string): string {
    const encodedUrl = encodeURIComponent(pageUrl);
    return `https://search.google.com/test/rich-results?url=${encodedUrl}`;
  }

  // Generate Schema.org validator URL
  static getSchemaOrgValidatorUrl(pageUrl: string): string {
    const encodedUrl = encodeURIComponent(pageUrl);
    return `https://validator.schema.org/#url=${encodedUrl}`;
  }

  // Generate Structured Data Testing Tool URL (legacy)
  static getStructuredDataTestUrl(pageUrl: string): string {
    const encodedUrl = encodeURIComponent(pageUrl);
    return `https://search.google.com/structured-data/testing-tool#url=${encodedUrl}`;
  }

  // Extract all schemas from current page
  static extractPageSchemas(): any[] {
    if (typeof window === 'undefined') return [];
    
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

  // Check if page has specific schema type
  static hasSchemaType(schemaType: string): boolean {
    const schemas = this.extractPageSchemas();
    return schemas.some(schema => schema['@type'] === schemaType);
  }

  // Get schemas by type
  static getSchemasByType(schemaType: string): any[] {
    const schemas = this.extractPageSchemas();
    return schemas.filter(schema => schema['@type'] === schemaType);
  }

  // Validate schema against Google guidelines
  static validateForGoogle(schema: any): {
    isValid: boolean;
    issues: string[];
    recommendations: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Basic validation
    if (!schema['@context']) {
      issues.push('Missing @context property');
    }

    if (!schema['@type']) {
      issues.push('Missing @type property');
    }

    // Type-specific validations
    switch (schema['@type']) {
      case 'LocalBusiness':
        this.validateLocalBusinessForGoogle(schema, issues, recommendations);
        break;
      case 'Product':
        this.validateProductForGoogle(schema, issues, recommendations);
        break;
      case 'VideoObject':
        this.validateVideoForGoogle(schema, issues, recommendations);
        break;
      case 'Article':
        this.validateArticleForGoogle(schema, issues, recommendations);
        break;
      case 'FAQPage':
        this.validateFAQForGoogle(schema, issues, recommendations);
        break;
    }

    return {
      isValid: issues.length === 0,
      issues,
      recommendations
    };
  }

  private static validateLocalBusinessForGoogle(
    schema: any, 
    issues: string[], 
    recommendations: string[]
  ): void {
    // Required fields for Google
    if (!schema.name) issues.push('LocalBusiness: Missing name');
    if (!schema.address) issues.push('LocalBusiness: Missing address');
    if (!schema.telephone) issues.push('LocalBusiness: Missing telephone');

    // Recommended fields
    if (!schema.openingHoursSpecification) {
      recommendations.push('LocalBusiness: Add opening hours for better visibility');
    }
    if (!schema.aggregateRating) {
      recommendations.push('LocalBusiness: Add customer ratings');
    }
    if (!schema.priceRange) {
      recommendations.push('LocalBusiness: Add price range information');
    }
    if (!schema.geo) {
      recommendations.push('LocalBusiness: Add geographic coordinates');
    }
  }

  private static validateProductForGoogle(
    schema: any, 
    issues: string[], 
    recommendations: string[]
  ): void {
    // Required fields for Google
    if (!schema.name) issues.push('Product: Missing name');
    if (!schema.image) issues.push('Product: Missing image');
    if (!schema.offers) {
      recommendations.push('Product: Add pricing information for better rich snippets');
    }

    // Recommended fields
    if (!schema.aggregateRating && !schema.review) {
      recommendations.push('Product: Add reviews or ratings');
    }
    if (!schema.brand) {
      recommendations.push('Product: Add brand information');
    }
    if (!schema.sku) {
      recommendations.push('Product: Add SKU for better product identification');
    }
  }

  private static validateVideoForGoogle(
    schema: any, 
    issues: string[], 
    recommendations: string[]
  ): void {
    // Required fields for Google
    if (!schema.name) issues.push('VideoObject: Missing name');
    if (!schema.description) issues.push('VideoObject: Missing description');
    if (!schema.thumbnailUrl) issues.push('VideoObject: Missing thumbnailUrl');
    if (!schema.uploadDate) issues.push('VideoObject: Missing uploadDate');

    // Recommended fields
    if (!schema.duration) {
      recommendations.push('VideoObject: Add duration for better display');
    }
    if (!schema.contentUrl && !schema.embedUrl) {
      recommendations.push('VideoObject: Add contentUrl or embedUrl');
    }
  }

  private static validateArticleForGoogle(
    schema: any, 
    issues: string[], 
    recommendations: string[]
  ): void {
    // Required fields for Google
    if (!schema.headline) issues.push('Article: Missing headline');
    if (!schema.author) issues.push('Article: Missing author');
    if (!schema.datePublished) issues.push('Article: Missing datePublished');
    if (!schema.publisher) issues.push('Article: Missing publisher');

    // Publisher logo validation
    if (schema.publisher && !schema.publisher.logo) {
      issues.push('Article: Publisher missing logo');
    }

    // Recommended fields
    if (!schema.image) {
      recommendations.push('Article: Add featured image');
    }
    if (!schema.dateModified) {
      recommendations.push('Article: Add dateModified');
    }
  }

  private static validateFAQForGoogle(
    schema: any, 
    issues: string[], 
    recommendations: string[]
  ): void {
    // Required fields for Google
    if (!schema.mainEntity) {
      issues.push('FAQPage: Missing mainEntity');
      return;
    }

    const questions = Array.isArray(schema.mainEntity) ? schema.mainEntity : [schema.mainEntity];
    
    questions.forEach((question: any, index: number) => {
      if (!question.name) {
        issues.push(`FAQPage: Question ${index + 1} missing name`);
      }
      if (!question.acceptedAnswer || !question.acceptedAnswer.text) {
        issues.push(`FAQPage: Question ${index + 1} missing acceptedAnswer.text`);
      }
    });

    // Recommendations
    if (questions.length < 2) {
      recommendations.push('FAQPage: Consider adding more Q&A pairs for better rich results');
    }
  }

  // Generate schema optimization report
  static generateOptimizationReport(): {
    summary: {
      totalSchemas: number;
      validSchemas: number;
      totalIssues: number;
      totalRecommendations: number;
    };
    details: Array<{
      type: string;
      schema: any;
      validation: ReturnType<typeof SchemaTestUtils.validateForGoogle>;
    }>;
  } {
    const schemas = this.extractPageSchemas();
    const details = schemas.map(schema => ({
      type: schema['@type'] || 'Unknown',
      schema,
      validation: this.validateForGoogle(schema)
    }));

    const summary = {
      totalSchemas: schemas.length,
      validSchemas: details.filter(d => d.validation.isValid).length,
      totalIssues: details.reduce((acc, d) => acc + d.validation.issues.length, 0),
      totalRecommendations: details.reduce((acc, d) => acc + d.validation.recommendations.length, 0)
    };

    return { summary, details };
  }

  // Create downloadable schema report
  static downloadSchemaReport(): void {
    const report = this.generateOptimizationReport();
    const reportData = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      ...report
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: 'application/json'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `schema-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

export default SchemaTestUtils;