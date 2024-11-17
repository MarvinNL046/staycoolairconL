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
          content="airco installateur limburg, airco specialist limburg, airco plaatsen limburg, airconditioning limburg, airco installatie limburg, airco kopen limburg, airco onderhoud limburg, airco service limburg, airco monteur limburg, airco prijzen limburg, airco offertes limburg, airco advies limburg, professionele airco installatie, gecertificeerde airco installateur, energiezuinige airco's, daikin dealer limburg, mitsubishi electric dealer limburg, split airco systemen, multisplit airco's, binnenklimaat verbeteren"
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