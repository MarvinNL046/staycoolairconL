/**
 * Centralized review data for consistent display across the site
 * Used for rich snippets, social proof, and review displays
 */

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
  source?: 'google' | 'trustpilot' | 'internal';
}

export interface AggregateReviewData {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

// Aggregate review statistics
export const aggregateReviews: AggregateReviewData = {
  averageRating: 4.9,
  totalReviews: 231,
  ratingDistribution: {
    5: 198,
    4: 28,
    3: 4,
    2: 1,
    1: 0,
  },
};

// Featured reviews for display
export const featuredReviews: Review[] = [
  {
    name: 'Peter V.',
    location: 'Maastricht',
    rating: 5,
    text: 'Fantastische service! Binnen 2 dagen geïnstalleerd en we besparen nu enorm op onze energiekosten.',
    date: '2024-12-15',
    source: 'google',
  },
  {
    name: 'Maria B.',
    location: 'Roermond',
    rating: 5,
    text: 'Heel tevreden met de installatie. Prima advies over welke airco het beste bij onze woning past.',
    date: '2024-12-10',
    source: 'google',
  },
  {
    name: 'Jan K.',
    location: 'Heerlen',
    rating: 5,
    text: 'Professioneel team, eerlijke prijzen. Duidelijke uitleg over alle opties. Zeker een aanrader!',
    date: '2024-12-05',
    source: 'google',
  },
  {
    name: 'Rob R.',
    location: 'Sittard',
    rating: 5,
    text: 'Prima bedrijf. Komen hun afspraken na en goede service. Airco werkt perfect.',
    date: '2024-11-28',
    source: 'google',
  },
  {
    name: 'Hans van den H.',
    location: 'Venlo',
    rating: 4,
    text: 'Goede installatie, alleen wat langer moeten wachten op de afspraak. Maar resultaat is top!',
    date: '2024-11-20',
    source: 'google',
  },
  {
    name: 'Emile R.',
    location: 'Weert',
    rating: 5,
    text: 'Super tevreden! Snelle reactie, vakkundige installatie en prima nazorg.',
    date: '2024-11-15',
    source: 'google',
  },
];

// Schema.org compatible review data for rich snippets
export function getAggregateRatingSchema() {
  return {
    '@type': 'AggregateRating',
    ratingValue: aggregateReviews.averageRating.toString(),
    reviewCount: aggregateReviews.totalReviews.toString(),
    bestRating: '5',
    worstRating: '1',
  };
}

// Get review schema for a specific review
export function getReviewSchema(review: Review) {
  return {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.text,
    ...(review.date && { datePublished: review.date }),
  };
}

// Google review URL
export const googleReviewUrl = 'https://www.google.com/search?q=staycool+airco+reviews';

// Trustpilot review URL (if applicable)
export const trustpilotUrl = 'https://nl.trustpilot.com/review/staycoolairco.nl';
