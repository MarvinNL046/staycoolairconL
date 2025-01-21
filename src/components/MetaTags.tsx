import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object;
}

export default function MetaTags({ 
  title, 
  description, 
  keywords,
  canonicalUrl = "https://staycoolairco.nl",
  ogImage = "https://staycoolairco.nl/og-image.jpg",
  type = 'website',
  schema
}: MetaTagsProps) {
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

  return (
    <Helmet>
      <html lang="nl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language */}
      <meta property="og:locale" content="nl_NL" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
