import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Wind, Wifi, DollarSign } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingModels from '../../components/landing/ProductLandingModels';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import { tosotData } from '../../data/brands/tosot';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function TosotLanding() {
  // Select top models to showcase
  const featuredModels = tosotData.models.slice(0, 3);

  // Define features with icons
  const features = [
    {
      title: 'G-Tech Inverter Technologie',
      description: 'Geavanceerde inverter technologie die zorgt voor energiebesparing en een stabiele temperatuur.',
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: 'Uitstekende Prijs-Kwaliteit',
      description: 'Hoogwaardige airconditioners met premium features tegen een zeer aantrekkelijke prijs.',
      icon: <DollarSign className="h-8 w-8" />
    },
    {
      title: 'Fluisterstille Werking',
      description: 'Geniet van optimaal comfort zonder storend geluid dankzij de stille werking van Tosot airconditioners.',
      icon: <Wind className="h-8 w-8" />
    },
    {
      title: 'Wifi-Ready Modellen',
      description: 'Bedien uw Tosot airconditioning eenvoudig via smartphone of tablet met de beschikbare wifi-functionaliteit.',
      icon: <Wifi className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tosot Airconditioning | Premium Kwaliteit, Scherpe Prijs | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek de Tosot airconditioners met G-Tech Inverter technologie. Moderne technologie voor optimaal comfort tegen een scherpe prijs. Vraag nu een vrijblijvende offerte aan bij StayCool Airco."
        />
        <meta 
          name="keywords" 
          content="Tosot, Gree, airconditioning, G-Tech Inverter, energiezuinig, wifi-ready, Clivia, Pular, Cosmo, Limburg"
        />
        <link rel="canonical" href="https://staycoolairco.nl/landing/tosot" />
      </Helmet>

      <SchemaMarkup 
        type="Product"
        data={{
          "@type": "Product",
          "name": "Tosot Airconditioning",
          "description": "Moderne technologie voor optimaal comfort tegen een scherpe prijs. Tosot is het premium merk van GREE, één van de grootste airco fabrikanten ter wereld.",
          "brand": {
            "@type": "Brand",
            "name": "Tosot by Gree"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "1395",
            "highPrice": "1845",
            "offerCount": tosotData.models.length,
            "availability": "https://schema.org/InStock"
          },
          "image": tosotData.imageUrl,
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.6",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "StayCool Airco Klanten"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "78"
          }
        }}
      />

      <ProductLandingHero 
        title="Tosot Airconditioning: Premium Kwaliteit voor een Scherpe Prijs"
        subtitle="G-Tech Inverter • Energiezuinig • Wifi-Ready"
        description="Tosot is het premium merk van GREE, één van de grootste airco fabrikanten ter wereld. Ontdek waarom deze moderne airconditioners met uitstekende prijs-kwaliteitverhouding steeds populairder worden."
        backgroundImage="/images/products/724-clivia-wit-vooraanzicht.webp"
        brandName="Tosot"
        features={[
          "G-Tech Inverter technologie",
          "Wifi-ready modellen beschikbaar",
          "Energiezuinige werking",
          "Uitstekende prijs-kwaliteitverhouding",
          "Stijlvolle designs in wit en zwart",
          "Energielabel A++",
          "Professionele installatie"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom Kiezen voor Tosot?"
        subtitle="Ontdek de unieke voordelen van Tosot airconditioners"
        features={features}
      />

      <ProductLandingModels 
        title="Populaire Tosot Modellen"
        subtitle="Ontdek onze bestsellers voor optimaal comfort"
        brandName="Tosot"
        brandSlug="tosot"
        models={featuredModels}
      />

      <ProductLandingContact 
        title="Vraag een Vrijblijvende Offerte Aan"
        subtitle="Ontvang persoonlijk advies en een scherpe prijsopgave voor uw Tosot airconditioning"
        brandName="Tosot"
      />
    </>
  );
}
