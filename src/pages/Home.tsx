import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/HeroOptimized';
import Services from '../components/ServicesOptimized';
import WhyUs from '../components/WhyUs';
import BrandLogos from '../components/BrandLogos';
import HomeBattery from '../components/HomeBattery';
import Contact from '../components/Contact';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Home() {
  const services = [
    {
      "@type": "Service",
      name: "Airco Installatie",
      description: "Professionele installatie van airconditioningsystemen in heel Limburg",
      provider: {
        "@type": "LocalBusiness",
        name: "StayCool Airco"
      },
      areaServed: {
        "@type": "State",
        name: "Limburg"
      }
    },
    {
      "@type": "Service",
      name: "Airco Onderhoud",
      description: "Vakkundig onderhoud van uw airconditioning systeem",
      provider: {
        "@type": "LocalBusiness",
        name: "StayCool Airco"
      },
      areaServed: {
        "@type": "State",
        name: "Limburg"
      }
    },
    {
      "@type": "Service",
      name: "Airco Reparatie",
      description: "Snelle en betrouwbare reparatie van airconditioningsystemen",
      provider: {
        "@type": "LocalBusiness",
        name: "StayCool Airco"
      },
      areaServed: {
        "@type": "State",
        name: "Limburg"
      }
    }
  ];

  return (
    <>
      <SchemaMarkup 
        type="LocalBusiness"
        data={{
          description: "Specialist in airco installatie en onderhoud in Limburg. Bespaar op terugleverkosten van zonnepanelen door slim te verwarmen met airco.",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Airconditioning Services",
            itemListElement: services
          },
          sameAs: [
            "https://www.facebook.com/staycoolairco",
            "https://www.instagram.com/staycoolairco",
            "https://www.linkedin.com/company/staycoolairco"
          ]
        }}
      />
      <Helmet>
        <title>Airco Installatie Limburg | StayCool Airco | Specialist in Heerlen, Weert</title>
        <meta 
          name="description" 
          content="Specialist in airco installatie en onderhoud in Limburg. Bespaar op terugleverkosten van zonnepanelen door slim te verwarmen met airco. ✓ F-gassen gecertificeerd ✓ Gratis advies"
        />
        <meta 
          name="keywords" 
          content="airco installateur limburg, airco specialist limburg, airco plaatsen limburg, airconditioning limburg, airco installatie limburg"
        />
        <link rel="canonical" href="https://staycoolairco.nl" />
      </Helmet>

      <Hero />
      <Services />
      <HomeBattery />
      <WhyUs />
      <BrandLogos />
      <Contact />
    </>
  );
}
