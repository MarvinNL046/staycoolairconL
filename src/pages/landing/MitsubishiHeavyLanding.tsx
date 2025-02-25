import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wind, Shield, Zap, Snowflake } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingModels from '../../components/landing/ProductLandingModels';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import { mitsubishiHeavyData } from '../../data/brands/mitsubishi-heavy';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function MitsubishiHeavyLanding() {
  // Select top models to showcase
  const featuredModels = mitsubishiHeavyData.models.slice(0, 3);

  // Define features with icons
  const features = [
    {
      title: 'Allergeenfilter',
      description: 'Geavanceerde filtertechnologie die allergenen, bacteriën en virussen effectief uit de lucht verwijdert.',
      icon: <Snowflake className="h-8 w-8" />
    },
    {
      title: 'Silent Operation',
      description: 'Met geluidsniveaus vanaf 18dB geniet u van optimaal comfort zonder storend geluid.',
      icon: <Wind className="h-8 w-8" />
    },
    {
      title: '3D Auto Functie',
      description: 'Geavanceerde luchtstroom die de ruimte gelijkmatig verwarmt of koelt voor optimaal comfort.',
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: 'Extreme Temperatuurbestendigheid',
      description: 'Betrouwbare werking onder extreme weersomstandigheden voor jaar-rond comfort.',
      icon: <Shield className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mitsubishi Heavy Industries Airconditioning | Japanse Kwaliteit | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek de hoogwaardige Mitsubishi Heavy Industries airconditioners. Japanse engineering met focus op duurzaamheid en betrouwbaarheid. Vraag nu een vrijblijvende offerte aan bij StayCool Airco."
        />
        <meta 
          name="keywords" 
          content="Mitsubishi Heavy Industries, airconditioning, allergeenfilter, 3D Auto, silent operation, Japanse kwaliteit, Limburg"
        />
        <link rel="canonical" href="https://staycoolairco.nl/landing/mitsubishi-heavy" />
      </Helmet>

      <SchemaMarkup 
        type="Product"
        data={{
          "@type": "Product",
          "name": "Mitsubishi Heavy Industries Airconditioning",
          "description": "Hoogwaardige Japanse engineering met focus op duurzaamheid en betrouwbaarheid. Mitsubishi Heavy Industries staat bekend om hun robuuste en efficiënte airconditioners.",
          "brand": {
            "@type": "Brand",
            "name": "Mitsubishi Heavy Industries"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "1099",
            "highPrice": "1599",
            "offerCount": mitsubishiHeavyData.models.length,
            "availability": "https://schema.org/InStock"
          },
          "image": mitsubishiHeavyData.imageUrl,
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.9",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "StayCool Airco Klanten"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "87"
          }
        }}
      />

      <ProductLandingHero 
        title="Mitsubishi Heavy Industries: Japanse Engineering voor Optimaal Comfort"
        subtitle="Allergeenfilter • Silent Operation • 3D Auto Functie"
        description="Mitsubishi Heavy Industries staat bekend om hoogwaardige Japanse engineering met focus op duurzaamheid en betrouwbaarheid. Ontdek waarom deze robuuste en efficiënte airconditioners de voorkeur genieten van veeleisende gebruikers."
        backgroundImage="/images/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft-1.webp"
        brandName="Mitsubishi Heavy Industries"
        features={[
          "Allergeenfilter voor gezonde lucht",
          "Silent Operation vanaf 18dB",
          "Extreme temperatuurbestendigheid",
          "3D Auto functie voor optimale luchtverdeling",
          "Energielabel tot A+++",
          "Wifi-besturing",
          "Professionele installatie"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom Kiezen voor Mitsubishi Heavy Industries?"
        subtitle="Ontdek de unieke voordelen van Mitsubishi Heavy Industries airconditioners"
        features={features}
      />

      <ProductLandingModels 
        title="Populaire Mitsubishi Heavy Industries Modellen"
        subtitle="Ontdek onze bestsellers voor optimaal comfort"
        brandName="Mitsubishi Heavy Industries"
        brandSlug="mitsubishi-heavy"
        models={featuredModels}
      />

      <ProductLandingContact 
        title="Vraag een Vrijblijvende Offerte Aan"
        subtitle="Ontvang persoonlijk advies en een scherpe prijsopgave voor uw Mitsubishi Heavy Industries airconditioning"
        brandName="Mitsubishi Heavy Industries"
      />
    </>
  );
}
