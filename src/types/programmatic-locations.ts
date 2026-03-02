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
