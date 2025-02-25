import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Wind, Wifi, Shield } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingModels from '../../components/landing/ProductLandingModels';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import { toshibaData } from '../../data/brands/toshiba';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function ToshibaLanding() {
  // Select top models to showcase
  const featuredModels = toshibaData.models.slice(0, 3);

  // Define features with icons
  const features = [
    {
      title: 'Ultra Pure Filtertechnologie',
      description: 'Geavanceerde filters die tot 94% van de PM2.5 fijnstofdeeltjes uit de lucht verwijderen voor een gezonder binnenklimaat.',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Magic Coil Coating',
      description: 'Speciale coating op de warmtewisselaar die zelfreinigende eigenschappen heeft en de levensduur verlengt.',
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: 'Plasma Ionizer',
      description: 'Actieve luchtzuivering die virussen, bacteriën en allergenen neutraliseert voor een gezondere leefomgeving.',
      icon: <Wind className="h-8 w-8" />
    },
    {
      title: 'Smart Home Integratie',
      description: 'Eenvoudige bediening via smartphone, tablet of stembesturing met Alexa en Google Assistant.',
      icon: <Wifi className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Toshiba Airconditioning | Premium Japanse Technologie | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek de premium Toshiba airconditioners met Ultra Pure filtertechnologie en uniek design. Japanse kwaliteit met focus op duurzaamheid en innovatie. Vraag nu een vrijblijvende offerte aan bij StayCool Airco."
        />
        <meta 
          name="keywords" 
          content="Toshiba, airconditioning, Ultra Pure filter, Magic Coil, Plasma Ionizer, Haori, Daiseikai, Japanse kwaliteit, Limburg"
        />
        <link rel="canonical" href="https://staycoolairco.nl/landing/toshiba" />
      </Helmet>

      <SchemaMarkup 
        type="Product"
        data={{
          "@type": "Product",
          "name": "Toshiba Airconditioning",
          "description": "Premium Japanse technologie met focus op design, duurzaamheid en innovatie. Toshiba staat bekend om hun hoogwaardige airconditioners met unieke features.",
          "brand": {
            "@type": "Brand",
            "name": "Toshiba"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "1299",
            "highPrice": "2499",
            "offerCount": toshibaData.models.length,
            "availability": "https://schema.org/InStock"
          },
          "image": toshibaData.imageUrl,
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.8",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "StayCool Airco Klanten"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "92"
          }
        }}
      />

      <ProductLandingHero 
        title="Toshiba Airconditioning: Premium Japanse Technologie voor Stijlvol Comfort"
        subtitle="Ultra Pure Filter • Uniek Design • Plasma Ionizer"
        description="Toshiba staat bekend om premium Japanse technologie met focus op design, duurzaamheid en innovatie. Ontdek waarom deze hoogwaardige airconditioners met unieke features de voorkeur genieten van designbewuste gebruikers."
        backgroundImage="/images/products/Haori-zwart-vooraanzicht_3_11zon.webp"
        brandName="Toshiba"
        features={[
          "Ultra Pure filtertechnologie (94% PM2.5)",
          "Magic Coil coating voor langere levensduur",
          "Plasma Ionizer voor actieve luchtzuivering",
          "Smart Home integratie",
          "Unieke designs zoals Haori met stoffen bekleding",
          "Energielabel tot A+++",
          "Fluisterstille werking vanaf 19dB"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom Kiezen voor Toshiba?"
        subtitle="Ontdek de unieke voordelen van Toshiba airconditioners"
        features={features}
      />

      <ProductLandingModels 
        title="Populaire Toshiba Modellen"
        subtitle="Ontdek onze bestsellers voor optimaal comfort"
        brandName="Toshiba"
        brandSlug="toshiba"
        models={featuredModels}
      />

      <ProductLandingContact 
        title="Vraag een Vrijblijvende Offerte Aan"
        subtitle="Ontvang persoonlijk advies en een scherpe prijsopgave voor uw Toshiba airconditioning"
        brandName="Toshiba"
      />
    </>
  );
}
