import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}

interface PriceInfo {
  price: string;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
}

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object;
  faqs?: FAQ[];
  reviews?: Review[];
  priceInfo?: PriceInfo;
  breadcrumbItems?: {name: string, url: string}[];
  productInfo?: {
    productName?: string;
    brand?: string;
    sku?: string;
    category?: string;
  };
}

export default function MetaTags({ 
  title, 
  description, 
  keywords,
  canonicalUrl = "https://staycoolairco.nl",
  ogImage = "https://staycoolairco.nl/og-image.jpg",
  type = 'website',
  schema,
  faqs,
  reviews,
  priceInfo,
  breadcrumbItems,
  productInfo
}: MetaTagsProps) {
  // Enhancement for Google search: Add action verbs and specific benefits to title if it's an article
  let enhancedTitle = title;
  if (type === 'article' && !title.includes('|')) {
    enhancedTitle = `${title} | Advies & Oplossingen 2025`;
  }
  
  // Enhancement for Google search: Add urgency/CTA to description
  let enhancedDescription = description;
  if (!description.includes('Nu')) {
    enhancedDescription = description.endsWith('.') 
      ? `${description.slice(0, -1)} | Nu vrijblijvend advies ontvangen.` 
      : `${description} | Nu vrijblijvend advies ontvangen.`;
  }
  
  // Default schema for organization
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StayCool Airco",
    "url": "https://staycoolairco.nl",
    "logo": "https://staycoolairco.nl/images/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "046-202-1430",
      "contactType": "customer service"
    }
  };
  
  // Prepare FAQ schema if FAQs provided
  const faqSchema = faqs && faqs.length > 0 ? {
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
  } : null;
  
  // Prepare Reviews schema if reviews provided
  const reviewSchema = reviews && reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": type === 'product' ? "Product" : "LocalBusiness",
    "name": productInfo?.productName || "StayCool Airco",
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      ...(review.datePublished && { "datePublished": review.datePublished })
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length,
      "reviewCount": reviews.length
    }
  } : null;
  
  // Prepare Product schema if it's a product page with price info
  const productSchema = type === 'product' && priceInfo && productInfo ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productInfo.productName || title,
    "image": ogImage,
    "description": description,
    ...(productInfo.brand && { "brand": {
      "@type": "Brand",
      "name": productInfo.brand
    }}),
    ...(productInfo.sku && { "sku": productInfo.sku }),
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": priceInfo.currency || "EUR",
      "price": priceInfo.price,
      "availability": `https://schema.org/${priceInfo.availability || 'InStock'}`
    }
  } : null;
  
  // Prepare Breadcrumb schema if breadcrumbs provided
  const breadcrumbSchema = breadcrumbItems && breadcrumbItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;
  
  // Combine all schemas
  const schemas = [
    schema || defaultSchema,
    faqSchema,
    reviewSchema,
    productSchema,
    breadcrumbSchema
  ].filter(Boolean);

  return (
    <Helmet>
      <html lang="nl" />
      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language */}
      <meta property="og:locale" content="nl_NL" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={enhancedTitle} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Rich Snippets / Structured Data */}
      {schemas.map((schemaObj, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaObj)}
        </script>
      ))}
    </Helmet>
  );
}
