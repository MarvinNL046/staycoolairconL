import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Wind, Truck, ArrowRight } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';

export default function MobieleAircoLanding() {
  // Define features with icons
  const features = [
    {
      title: 'Eenvoudige installatie',
      description: 'Geen permanente installatie nodig - sluit aan en geniet direct van verkoeling zonder boren of technische kennis.',
      icon: <Truck className="h-8 w-8" />
    },
    {
      title: 'Energiezuinige modellen',
      description: 'Moderne mobiele airco\'s bieden uitstekende koeling met laag energieverbruik en voordelige gebruikskosten.',
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: 'Fluisterstille werking',
      description: 'Geniet van ongestoorde nachten met onze stille mobiele airconditioners vanaf 45dB.',
      icon: <Wind className="h-8 w-8" />
    },
    {
      title: 'Flexibele plaatsing',
      description: 'Verplaats uw mobiele airco gemakkelijk naar elke ruimte waar verkoeling nodig is.',
      icon: <ArrowRight className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobiele Airco | LG & Tosot | Direct Verkoeling | StayCool Airco</title>
        <meta 
          name="description" 
          content="Hoogwaardige mobiele airco's van LG en Tosot - direct verkoeling zonder vaste installatie. Energiezuinige A+ modellen met wifi-besturing en tot 58m² bereik. Inclusief gratis verzending."
        />
        <meta 
          name="keywords" 
          content="mobiele airco, LG mobiele airco, Tosot mobiele airco, portable airconditioner, zonder installatie, verplaatsbare airco, energiezuinige airco, stille airco, wifi airco"
        />
        <link rel="canonical" href="https://staycoolairco.nl/mobiele-airco" />
      </Helmet>

      <SchemaMarkup 
        type="Product"
        data={{
          "@type": "Product",
          "name": "Mobiele Airco",
          "description": "Hoogwaardige mobiele airconditioners voor directe verkoeling zonder vaste installatie.",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "399",
            "highPrice": "899",
            "offerCount": "5",
            "availability": "https://schema.org/InStock"
          },
          "image": "/images/products/mobiele-airco-header.webp",
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "StayCool Airco Klanten"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "67"
          }
        }}
      />

      <ProductLandingHero 
        title="Mobiele Airco: Direct Verkoeling Zonder Installatie"
        subtitle="Flexibel • Energiezuinig • Geen Boren"
        description="Ontdek onze collectie hoogwaardige mobiele airconditioners. Geniet van directe verkoeling zonder vaste installatie, perfect voor huurwoningen of ruimtes waar een split airco niet mogelijk is."
        backgroundImage="/images/products/mobiele-airco-header.webp"
        brandName="Mobiele Airco"
        features={[
          "Geen vaste installatie nodig",
          "Direct inzetbaar",
          "Eenvoudig te verplaatsen",
          "Energiezuinige modellen beschikbaar",
          "Ideaal voor huurwoningen",
          "Stille werking vanaf 45dB",
          "Voor ruimtes tot 40m²"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom Kiezen voor een Mobiele Airco?"
        subtitle="Ontdek de voordelen van een verplaatsbare airconditioner"
        features={features}
      />

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Mobiele Airco vs. Split Airco
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Vergelijk de verschillende opties om de beste keuze voor uw situatie te maken
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Mobiele Airco</h3>
                <ul className="mt-5 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Direct te gebruiken, geen installatie</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Eenvoudig te verplaatsen</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Lage aanschafkosten</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Ideaal voor huurwoningen</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Hoger energieverbruik</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Beperkt vermogen (max 40m²)</p>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/kennisbank/mobiele-vs-split-airco" className="text-base font-medium text-blue-600 hover:text-blue-500">
                    Meer over mobiele airco's <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Split Airco</h3>
                <ul className="mt-5 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Zeer energiezuinig (tot A+++)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Fluisterstille werking (vanaf 20dB)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Krachtige koeling én verwarming</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Langere levensduur (10+ jaar)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Professionele installatie vereist</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">Hogere aanschafkosten</p>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/airco-met-buitenunit" className="text-base font-medium text-blue-600 hover:text-blue-500">
                    Bekijk split airco's <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Onze Mobiele Airco's
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Bekijk onze hoogwaardige mobiele airconditioners van topmerken
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LG Mobiele Airco Card */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src="/images/products/mobiele airco/lg mobiele airco/lg-mobiele-airco-staycoolairco.webp" 
                  alt="LG Mobiele Airco Dual Inverter Smart" 
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">LG Mobiele Airco Dual Inverter Smart</h3>
                <p className="text-gray-600 mb-4">De krachtige en energiezuinige LG Mobiele Airco met dual inverter technologie voor ruimtes tot 43m².</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Capaciteit:</span>
                    <span className="ml-2 text-sm text-gray-900">2,5 kW (11.000 BTU)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Energielabel:</span>
                    <span className="ml-2 text-sm text-gray-900">A+</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Wifi-bediening:</span>
                    <span className="ml-2 text-sm text-gray-900">Ja</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Geluidsniveau:</span>
                    <span className="ml-2 text-sm text-gray-900">42 dB(A)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">€749,-</span>
                  <Link to="/products/lg-mobiele-airco/lg-mobiele-airco-dual-inverter-smart" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Bekijk details
                  </Link>
                </div>
              </div>
            </div>

            {/* Tosot Mobiele Airco Card */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src="/images/products/mobiele airco/tosot mobiele airco/tosot-mobiele-airco-staycoolairco-1.webp" 
                  alt="Tosot MONA by GREE mobiele airco" 
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tosot MONA by GREE Mobiele Airco</h3>
                <p className="text-gray-600 mb-4">Krachtige Tosot mobiele airco met hoge koelcapaciteit voor ruimtes tot 58m² en wifi-bediening.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Capaciteit:</span>
                    <span className="ml-2 text-sm text-gray-900">3,5 kW (12.000 BTU)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Energielabel:</span>
                    <span className="ml-2 text-sm text-gray-900">A+</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Wifi-bediening:</span>
                    <span className="ml-2 text-sm text-gray-900">Ja</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500">Geluidsniveau:</span>
                    <span className="ml-2 text-sm text-gray-900">49 dB(A)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">€350,-</span>
                  <Link to="/products/tosot-mobiele-airco/tosot-mona-mobiele-airco" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Bekijk details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductLandingContact 
        title="Meer Informatie of Advies Nodig?"
        subtitle="Onze airco-experts helpen u graag bij het maken van de juiste keuze"
        brandName="Mobiele Airco"
      />
    </>
  );
}
