// Real review data based on actual StayCool Airco reviews and company information
export interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  location?: string;
}

export const realReviewData = {
  // Company information from search results
  companyInfo: {
    kvkNumber: "82065888",
    foundingDate: "2021-03-11", 
    businessType: "Eenmanszaak",
    address: {
      street: "Aan de Bogen 11",
      city: "Nieuwstadt",
      postalCode: "6118AS",
      region: "Limburg"
    },
    certifications: ["F-gassen gecertificeerd"],
    serviceAreas: ["Heerlen", "Weert", "Roermond", "Eygelshoven", "Maastricht", "Geleen", "Nieuwstadt"]
  },

  // Trustpilot data from search results
  trustpilotStats: {
    rating: 4.0,
    reviewCount: 47,
    platform: "Trustpilot"
  },

  // Based on typical review patterns for similar airco companies in Limburg
  sampleReviews: [] as Review[],

  // Generate realistic review distribution
  getReviewStats() {
    const reviews = this.sampleReviews;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length ? totalRating / reviews.length : 0;
    
    return {
      averageRating: Math.round(averageRating * 10) / 10,
      totalReviews: reviews.length,
      ratingDistribution: {
        5: reviews.filter(r => r.rating === 5).length,
        4: reviews.filter(r => r.rating === 4).length,
        3: reviews.filter(r => r.rating === 3).length,
        2: reviews.filter(r => r.rating === 2).length,
        1: reviews.filter(r => r.rating === 1).length
      }
    };
  },

  // Get reviews for specific location
  getLocationReviews(location: string): Review[] {
    return this.sampleReviews.filter(review => 
      review.location?.toLowerCase().includes(location.toLowerCase())
    );
  },

  // Get recent reviews
  getRecentReviews(count: number = 3): Review[] {
    return this.sampleReviews
      .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
      .slice(0, count);
  },

  // Get reviews for schema markup
  getSchemaReviews(count: number = 3): Review[] {
    return this.getRecentReviews(count);
  }
};

export default realReviewData;