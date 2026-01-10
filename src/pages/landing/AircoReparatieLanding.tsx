import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Clock, Zap, Wrench } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';

export default function AircoReparatieLanding() {
  // Define features with icons
  const features = [
    {
      title: 'Snelle diagnose',
      description: 'Nauwkeurige probleemdiagnose door onze F-gassen gecertificeerde monteurs met jarenlange ervaring in airco reparatie.',
      icon: <Wrench className="h-8 w-8" />
    },
    {
      title: 'Spoedservice',
      description: 'Beschikbaar voor spoedgevallen met snelle responstijden om uw comfort zo snel mogelijk te herstellen.',
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: 'Scherpe tarieven',
      description: 'Transparante prijzen zonder verborgen kosten. Duidelijkheid vooraf over de te verwachten reparatiekosten.',
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: 'Garantie op reparaties',
      description: 'Zekerheid met tot 12 maanden garantie op alle uitgevoerde reparaties en vervangen onderdelen.',
      icon: <ShieldCheck className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Reparatie | Professionele Storingsservice | StayCool Airco</title>
        <meta
          name="description"
          content="Airco reparatie: F-gassen gecertificeerd | Spoedservice | Alle merken | Garantie op reparaties | Transparante tarieven. Gratis advies!"
        />
        <meta 
          name="keywords" 
          content="airco reparatie, airco storing, airco kapot, airco maken, airco service, airco problemen oplossen, airco monteur"
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-reparatie" />
      </Helmet>

      <SchemaMarkup 
        type="Service"
        data={{
          "@type": "Service",
          "name": "Airco Reparatie Service",
          "serviceType": "Airconditioning Repair",
          "provider": {
            "@type": "LocalBusiness",
            "name": "StayCool Airco"
          },
          "description": "Professionele reparatie van alle soorten airconditioningsystemen door gecertificeerde monteurs. Inclusief diagnose, reparatie en optimalisatie.",
          "areaServed": {
            "@type": "State",
            "name": "Limburg"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "85",
            "highPrice": "350",
            "offerCount": "8",
            "availability": "https://schema.org/InStock"
          },
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
            "reviewCount": "98"
          }
        }}
      />

      <ProductLandingHero 
        title="Airco Reparatie: Snel Weer Cool & Comfortabel"
        subtitle="Vakkundig • Betrouwbaar • Snel"
        description="Is uw airconditioning kapot, maakt deze vreemde geluiden of koelt niet meer goed? Onze ervaren, F-gassen gecertificeerde monteurs lossen uw airco-problemen snel en professioneel op."
        backgroundImage="/images/products/727-clivia-wit-zijkant.webp"
        brandName="Airco Reparatie"
        features={[
          "F-gassen gecertificeerde monteurs",
          "Diagnose en reparatie van alle merken",
          "Spoedservice beschikbaar",
          "Transparante tarieven",
          "Garantie op alle reparaties",
          "Originele onderdelen",
          "Preventief advies om toekomstige storingen te voorkomen"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom Kiezen voor Onze Reparatieservice?"
        subtitle="Uw airconditioningsysteem verdient de beste zorg"
        features={features}
      />

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Veelvoorkomende airco problemen die wij oplossen
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Onze experts hebben ervaring met alle soorten aircostoringen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Technische storingen</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Koelmiddel lekkage</p>
                    <p className="text-gray-600 text-sm">Detectie en reparatie van lekkages in het systeem</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Compressorproblemen</p>
                    <p className="text-gray-600 text-sm">Reparatie of vervanging van defecte compressoren</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Elektrische defecten</p>
                    <p className="text-gray-600 text-sm">Reparatie van printplaten, sensoren en bedrading</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Ventilatorproblemen</p>
                    <p className="text-gray-600 text-sm">Reparatie of vervanging van binnen- en buitenunit ventilatoren</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Functionele problemen</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Airco koelt of verwarmt niet goed</p>
                    <p className="text-gray-600 text-sm">Diagnose en oplossing van temperatuurproblemen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Vreemde geluiden</p>
                    <p className="text-gray-600 text-sm">Identificatie en oplossing van abnormale geluiden</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Waterlekkage</p>
                    <p className="text-gray-600 text-sm">Reparatie van condensafvoerproblemen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Storingscodes</p>
                    <p className="text-gray-600 text-sm">Interpretatie en oplossing van foutcodes op uw display</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Onze airco reparatie aanpak
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Transparant proces van diagnose tot oplossing
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-gray-200">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white">
                  <div className="text-white font-bold">1</div>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Aanmelding & Intake</h3>
                <p className="mb-2 text-base font-normal text-gray-600">
                  Na uw melding nemen we direct contact op om het probleem te bespreken en een afspraak in te plannen
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white">
                  <div className="text-white font-bold">2</div>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Diagnose</h3>
                <p className="mb-2 text-base font-normal text-gray-600">
                  Onze monteur voert een grondige inspectie uit om de oorzaak van het probleem nauwkeurig vast te stellen
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white">
                  <div className="text-white font-bold">3</div>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Offerte & Goedkeuring</h3>
                <p className="mb-2 text-base font-normal text-gray-600">
                  U ontvangt een duidelijke prijsopgave voor de reparatie. Pas na uw akkoord starten we met de werkzaamheden
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white">
                  <div className="text-white font-bold">4</div>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Reparatie</h3>
                <p className="mb-2 text-base font-normal text-gray-600">
                  We repareren het probleem met gebruik van hoogwaardige onderdelen en materialen
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white">
                  <div className="text-white font-bold">5</div>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Testen & Advies</h3>
                <p className="mb-2 text-base font-normal text-gray-600">
                  Na de reparatie testen we het systeem en geven we advies om toekomstige problemen te voorkomen
                </p>
              </li>
            </ol>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
              <Link to="/kennisbank/veelvoorkomende-problemen" className="text-blue-600 hover:text-blue-800 font-medium">
                Bekijk onze gids voor veelvoorkomende airco problemen
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ProductLandingContact 
        title="Airco Problemen? Vraag Direct Hulp Aan"
        subtitle="Onze experts staan klaar om uw airconditioning snel weer in topconditie te krijgen"
        brandName="Airco Reparatie"
      />
    </>
  );
}
