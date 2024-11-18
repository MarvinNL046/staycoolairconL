import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
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
      <WhyUs />
      <Contact />
    </>
  );
}