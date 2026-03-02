import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import HeroRedesign from '../components/HeroRedesign';
import Services from '../components/ServicesOptimized';
import ProductGrid from '../components/ProductGrid';
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

      {/* Product Grid - Direct onder hero voor maximale conversie */}
      <ProductGrid
        maxProducts={8}
        title="Populaire Airco Systemen"
        subtitle="Bekijk onze bestsellers - complete sets inclusief binnen- en buitenunit"
      />

      {/* Static H1 Section - Critical for SEO */}
      <section className="py-32 bg-quatt-warm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-quatt-orange font-black tracking-[0.2em] uppercase text-xs mb-8 block">StayCool Airco Installateur</span>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-quatt-dark mb-10 leading-[0.85] tracking-tighter italic">
            Airco Specialist <br />
            <span className="text-quatt-orange">Limburg</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-500 max-w-4xl mx-auto mb-16 leading-relaxed">
            StayCool Airco is uw erkende specialist voor klimaatbeheersing in heel Limburg.
            Bespaar direct tot <span className="text-quatt-dark font-black">60% op uw gasrekening</span> door slim te verwarmen.
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-quatt-dark/40 font-black uppercase text-xs tracking-widest">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full text-quatt-orange shadow-sm border border-gray-100">
                <Check className="h-4 w-4" />
              </div>
              <span>F-gassen gecertificeerd</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full text-quatt-orange shadow-sm border border-gray-100">
                <Check className="h-4 w-4" />
              </div>
              <span>500+ Tevreden klanten</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-full text-quatt-orange shadow-sm border border-gray-100">
                <Check className="h-4 w-4" />
              </div>
              <span>Gratis advies aan huis</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Keyword Rich */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-quatt-dark mb-12 tracking-tighter italic">
              Airco Installatie in de buurt
            </h2>
            <div className="prose prose-xl prose-slate max-w-none text-gray-500 space-y-8 leading-relaxed">
              <p>
                Zoekt u een betrouwbare <strong>airco installateur in Limburg</strong>? StayCool Airco is uw lokale specialist voor professionele
                klimaatbeheersing in heel Limburg. Met meer dan 500+ tevreden klanten zijn wij dé erkende airco monteur voor installatie,
                onderhoud en reparatie van airconditioningsystemen.
              </p>

              <div className="grid md:grid-cols-2 gap-12 my-20 not-prose">
                <div className="bg-quatt-warm p-12 rounded-[3.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  <h3 className="text-2xl font-black text-quatt-dark mb-6 tracking-tight flex items-center">
                    Installatie
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    Als F-gassen gecertificeerd airco bedrijf verzorgen wij vakkundige installatie van split-units, multi-split systemen en
                    vloer airconditioners. Wij bedienen heel <strong>Limburg</strong>.
                  </p>
                </div>

                <div className="bg-quatt-warm p-12 rounded-[3.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-quatt-dark/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  <h3 className="text-2xl font-black text-quatt-dark mb-6 tracking-tight flex items-center">
                    Waarom StayCool?
                  </h3>
                  <ul className="text-gray-500 space-y-4 font-black uppercase text-[10px] tracking-widest">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-quatt-orange" /> Binnen 2 weken koud</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-quatt-orange" /> Gratis adviesgesprek</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-quatt-orange" /> Dealer van A-Merken</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-quatt-orange" /> Transparant & Lokaal</li>
                  </ul>
                </div>
              </div>

              <div className="bg-quatt-dark text-white p-12 sm:p-20 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-gray-200 mt-20 not-prose">
                <div className="absolute top-0 right-0 w-96 h-96 bg-quatt-orange/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <h3 className="text-3xl sm:text-4xl font-black mb-8 tracking-tighter italic relative z-10">
                  Service in heel Limburg
                </h3>
                <p className="text-white/60 text-xl leading-relaxed relative z-10 max-w-2xl">
                  Wij zijn uw lokale <strong>airco specialist dichtbij</strong> met snelle service in alle Limburgse steden.
                  Van Roermond tot Maastricht en van Venlo tot Weert.
                </p>
              </div>
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
