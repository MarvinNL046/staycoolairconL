export type CityTier = 'groot' | 'middel' | 'klein';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CityOverrides {
  /** Pre-pended before generated FAQs — for genuinely city-specific questions. */
  extraFaqs?: FaqItem[];
  /** Appended after tier-generated specialFeatures. */
  extraSpecialFeatures?: string[];
  /** Appended after region-based climateFacts. */
  extraClimateFacts?: string[];
  /** Path to a city-specific image, e.g. "/images/locations/maastricht.webp". */
  localImage?: string;
}

export interface ProgrammaticLocationProfile {
  slug: string;
  city: string;
  region: 'Noord-Limburg' | 'Midden-Limburg' | 'Zuid-Limburg';
  postalCodes: string;
  populationCount: number;
  installationCount: number;
  neighborhoods: [string, string];
  landmarks: [string, string];
  housingMix: string;
  localConstraint: string;
  tier: CityTier;
  overrides?: CityOverrides;
}

export interface LocationCaseStudy {
  title: string;
  neighborhood: string;
  summary: string;
  outcome: string;
}

export interface LocationExpertiseSignals {
  reviewedBy: string;
  lastReviewed: string;
  certifications: string[];
  yearsActive: number;
  localProjects: number;
  responseTime: string;
}
