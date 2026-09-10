export interface Specification {
  label: string;
  value: string;
}

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Model {
  cashflowOffers?: Array<{ family: string; name: string; configuration: string; sourceSlug: string; netCents: number; vatRate: number }>;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  images?: ProductImage[];
  price?: string;
  availability?: string;  // Added for availability status
  energyLabel: string;
  capacity: string;
  features: string[];
  specifications: Specification[];
  stripeBuyUrl?: string;  // Added for Stripe buy button URL
  videoUrl?: string;  // Added for product videos
}

export interface Brand {
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
  models: Model[];
  maxPrice?: number;
  minPrice?: number;
}

export interface ProductData {
  brands: Brand[];
}
