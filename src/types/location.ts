export interface LocationContent {
  id: string;
  city: string;
  region: string;
  postal_codes: string;
  population: number;
  metadata: {
    written_by: string;
    last_updated: Date | string;
    generation_attempt?: number;
  };
  content: {
    keyTakeaways: string[];
    intro: string;
    climate: {
      description: string;
      challenges: string[];
    };
    aircoInfo: {
      benefits: string;
      recommendations: string;
    };
    sections: Array<{
      title: string;
      content: string;
      internalLinks?: Array<{
        text: string;
        url: string;
      }>;
      images?: Array<{
        url: string;
        alt: string;
      }>;
      bulletPoints?: string[];
      table?: {
        headers: string[];
        rows: string[][];
      };
    }>;
    expertTips: Array<{
      tip: string;
      explanation: string;
    }>;
    serviceAreas: string[];
    faq: Array<{
      question: string;
      answer: string;
    }>;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    internalLinks: Array<{
      text: string;
      url: string;
    }>;
  };
  last_updated: Date | string;
}
