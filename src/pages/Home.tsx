import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroRedesign from '../components/HeroRedesign';
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
        <title>Airco Installateur Limburg | Professionele Installatie & Onderhoud | StayCool</title>
        <meta
          name="description"
          content="Erkend airco installateur Limburg ✓ Bespaar 60% op verwarming ✓ F-gassen gecertificeerd ✓ Gratis advies in Roermond, Maastricht, Heerlen. Nu offerte!"
        />
        <link rel="canonical" href="https://staycoolairco.nl" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://staycoolairco.nl" />
        <meta property="og:title" content="Airco Installateur Limburg | StayCool Airco" />
        <meta property="og:description" content="Erkend airco installateur Limburg ✓ Bespaar 60% op verwarming ✓ F-gassen gecertificeerd ✓ Gratis advies. Nu offerte!" />
        <meta property="og:image" content="https://staycoolairco.nl/og-image.jpg" />
        <meta property="og:locale" content="nl_NL" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Airco Installateur Limburg | StayCool Airco" />
        <meta name="twitter:description" content="Erkend airco installateur Limburg ✓ Bespaar 60% op verwarming ✓ F-gassen gecertificeerd" />
        <meta name="twitter:image" content="https://staycoolairco.nl/og-image.jpg" />
      </Helmet>

      <HeroRedesign />

      {/* Static H1 Section - Critical for SEO */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Airco Installateur Limburg
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mt-2">
              Professionele Installatie & Onderhoud
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
            StayCool Airco is uw erkende specialist voor klimaatbeheersing in heel Limburg.
            <strong className="text-blue-600"> Bespaar tot 60% op uw verwarmingskosten</strong> door slim te verwarmen met een airco.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">F-gassen gecertificeerd</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">500+ Tevreden klanten</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Gratis advies aan huis</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Keyword Rich */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Airco Installateur bij u in de Buurt in Limburg
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Zoekt u een betrouwbare <strong>airco installateur in Limburg</strong>? StayCool Airco is uw lokale specialist voor professionele
              klimaatbeheersing in heel Limburg. Met meer dan 500+ tevreden klanten zijn wij dé erkende airco monteur voor installatie,
              onderhoud en reparatie van airconditioningsystemen.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Airco Installatie in Limburg
                </h3>
                <p className="text-gray-600">
                  Als F-gassen gecertificeerd airco bedrijf verzorgen wij vakkundige installatie van split-units, multi-split systemen en
                  vloer airconditioners. Van <strong>airco installatie Roermond</strong> tot <strong>airconditioning plaatsen Maastricht</strong> -
                  wij bedienen heel Zuid-Limburg, Midden-Limburg en Noord-Limburg.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">✓</span>
                  Waarom Kiezen voor StayCool?
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Erkend en gecertificeerd airco installateur</li>
                  <li>• Snelle service in heel Limburg (binnen 48 uur)</li>
                  <li>• Gratis advies en offerte aan huis</li>
                  <li>• Officiële dealer van A-merken (Daikin, Mitsubishi)</li>
                  <li>• Transparante prijzen zonder verrassingen</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Airco Service in Roermond, Maastricht, Heerlen, Venlo, Weert & omgeving
              </h3>
              <p className="text-gray-700">
                Wij zijn uw lokale <strong>airco specialist dichtbij</strong> met snelle service in alle Limburgse steden.
                Of u nu woont in Sittard, Geleen, Stein, Landgraaf of een andere plaats - als erkend klimaatbeheersing bedrijf
                staan wij altijd voor u klaar met professionele installatie en onderhoud.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <HomeBattery />
      <WhyUs />
      <BrandLogos />
      <Contact />
    </>
  );
}
