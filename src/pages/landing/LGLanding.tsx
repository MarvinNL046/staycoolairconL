import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Wind, Wifi, Shield } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingModels from '../../components/landing/ProductLandingModels';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import { lgData } from '../../data/brands/lg';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function LGLanding() {
  // Select top models to showcase
  const featuredModels = lgData.models.slice(0, 3);

  // Define features with icons
  const features = [
    {
      title: 'Dual Inverter Compressor',
      description: 'Tot 70% energiebesparing en 40% snellere koeling dankzij de geavanceerde Dual Inverter technologie.',
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: 'Fluisterstille werking',
      description: 'Met geluidsniveaus vanaf 20dB geniet u van optimaal comfort zonder storend geluid.',
      icon: <Wind className="h-8 w-8" />
    },
    {
      title: 'ThinQ Smart Technologie',
      description: 'Bedien uw LG airconditioning eenvoudig via smartphone, tablet of stembesturing.',
      icon: <Wifi className="h-8 w-8" />
    },
    {
      title: '10 jaar garantie',
      description: 'LG biedt 10 jaar garantie op de compressor voor zorgeloos gebruik en betrouwbaarheid.',
      icon: <Shield className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>LG Airconditioning | Innovatieve Aircosystemen | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek de innovatieve LG airconditioners met Dual Inverter technologie. Energiezuinig, fluisterstil en met ThinQ smart technologie. Vraag nu een vrijblijvende offerte aan bij StayCool Airco."
        />
        <meta 
          name="keywords" 
          content="LG, airconditioning, Dual Inverter, ThinQ, energiezuinig, fluisterstil, smart home, Limburg"
        />
        <link rel="canonical" href="https://staycoolairco.nl/landing/lg" />
      </Helmet>

      <SchemaMarkup 
        type="Product"
        data={{
          "@type": "Product",
          "name": "LG Airconditioning",
          "description": "Vooruitstrevende technologie met focus op design, gebruiksgemak en luchtkwaliteit.",
          "brand": {
            "@type": "Brand",
            "name": "LG"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "1695",
            "highPrice": "2530",
            "offerCount": lgData.models.length,
            "availability": "https://schema.org/InStock"
          },
          "image": lgData.imageUrl,
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.7",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "StayCool Airco Klanten"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "98"
          }
        }}
      />

      <ProductLandingHero 
        title="LG Airconditioning: Innovatieve Technologie voor Optimaal Comfort"
        subtitle="Dual Inverter • ThinQ Smart • UVnano Technologie"
        description="LG staat bekend om vooruitstrevende technologie met focus op design, gebruiksgemak en luchtkwaliteit. Ontdek waarom LG de voorkeur geniet van miljoenen huishoudens wereldwijd."
        backgroundImage="/images/products/rac-eu-lg-premium.webp"
        brandName="LG"
        features={[
          "Tot 70% energiebesparing",
          "Dual Inverter Compressor",
          "ThinQ Smart Diagnosis",
          "UVnano technologie",
          "Fluisterstille werking vanaf 20dB",
          "10 jaar garantie op compressor",
          "Professionele installatie"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom Kiezen voor LG?"
        subtitle="Ontdek de unieke voordelen van LG airconditioners"
        features={features}
      />

      <ProductLandingModels 
        title="Populaire LG Modellen"
        subtitle="Ontdek onze bestsellers voor optimaal comfort"
        brandName="LG"
        brandSlug="lg"
        models={featuredModels}
      />

      <ProductLandingContact 
        title="Vraag een Vrijblijvende Offerte Aan"
        subtitle="Ontvang persoonlijk advies en een scherpe prijsopgave voor uw LG airconditioning"
        brandName="LG"
      />
    </>
  );
}
