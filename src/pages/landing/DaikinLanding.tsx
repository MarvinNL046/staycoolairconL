import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ThermometerSun, Wind, Zap, Wifi } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingModels from '../../components/landing/ProductLandingModels';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import { daikinData } from '../../data/brands/daikin';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function DaikinLanding() {
  // Select top models to showcase
  const featuredModels = daikinData.models.slice(0, 3);

  // Define features with icons
  const features = [
    {
      title: 'Energiezuinig',
      description: 'Daikin airconditioners behoren tot de meest energiezuinige op de markt met energielabels tot A+++.',
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: 'Fluisterstil',
      description: 'Met geluidsniveaus vanaf 19dB geniet u van optimaal comfort zonder storend geluid.',
      icon: <Wind className="h-8 w-8" />
    },
    {
      title: 'Smart Home Integratie',
      description: 'Bedien uw Daikin airconditioning eenvoudig via smartphone, tablet of stembesturing.',
      icon: <Wifi className="h-8 w-8" />
    },
    {
      title: 'Verwarmen & Koelen',
      description: 'Daikin warmtepompen bieden het hele jaar door comfort met efficiënte verwarming en verkoeling.',
      icon: <ThermometerSun className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Daikin Airconditioning | Topkwaliteit Aircosystemen | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek de premium Daikin airconditioners. Energiezuinig, fluisterstil en met smart home integratie. Vraag nu een vrijblijvende offerte aan bij StayCool Airco."
        />
        <meta 
          name="keywords" 
          content="Daikin, airconditioning, warmtepomp, energiezuinig, A+++, fluisterstil, smart home, Limburg"
        />
        <link rel="canonical" href="https://staycoolairco.nl/landing/daikin" />
      </Helmet>

      <SchemaMarkup 
        type="Product"
        data={{
          "@type": "Product",
          "name": "Daikin Airconditioning",
          "description": "Japanse kwaliteit en innovatie, bekend om hun betrouwbaarheid en energiezuinigheid.",
          "brand": {
            "@type": "Brand",
            "name": "Daikin"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "1599",
            "highPrice": "4500",
            "offerCount": daikinData.models.length,
            "availability": "https://schema.org/InStock"
          },
          "image": daikinData.imageUrl,
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
            "reviewCount": "124"
          }
        }}
      />

      <ProductLandingHero 
        title="Daikin Airconditioning: Japanse Topkwaliteit voor Optimaal Comfort"
        subtitle="Energiezuinig • Fluisterstil • Smart Home Integratie"
        description="Daikin is wereldwijd marktleider in klimaatbeheersing en staat bekend om betrouwbaarheid, innovatie en energiezuinigheid. Ontdek waarom Daikin de voorkeur geniet van miljoenen huishoudens."
        backgroundImage="/images/products/daikin-stylish-wit.webp"
        brandName="Daikin"
        features={[
          "Tot 60% besparing op verwarmingskosten",
          "Energielabel tot A+++",
          "Fluisterstille werking vanaf 19dB",
          "Smart Home integratie",
          "Flash Streamer luchtzuivering",
          "5 jaar garantie",
          "Professionele installatie"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom Kiezen voor Daikin?"
        subtitle="Ontdek de unieke voordelen van Daikin airconditioners"
        features={features}
      />

      <ProductLandingModels 
        title="Populaire Daikin Modellen"
        subtitle="Ontdek onze bestsellers voor optimaal comfort"
        brandName="Daikin"
        brandSlug="daikin"
        models={featuredModels}
      />

      <ProductLandingContact 
        title="Vraag een Vrijblijvende Offerte Aan"
        subtitle="Ontvang persoonlijk advies en een scherpe prijsopgave voor uw Daikin airconditioning"
        brandName="Daikin"
      />
    </>
  );
}
