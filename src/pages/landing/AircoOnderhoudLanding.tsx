import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Calendar, AlertTriangle, Clock } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';

export default function AircoOnderhoudLanding() {
  // Define features with icons
  const features = [
    {
      title: 'Professioneel onderhoud',
      description: 'Vakkundig onderhoud door gecertificeerde monteurs voor een langere levensduur van uw airconditioning.',
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      title: 'Jaarlijkse onderhoudscontracten',
      description: 'Voordelige onderhoudscontracten die u zorgen uit handen nemen en de garantie van uw airco behouden.',
      icon: <Calendar className="h-8 w-8" />
    },
    {
      title: 'Preventieve controles',
      description: 'Regelmatige controles voorkomen duurdere storingen en reparaties in de toekomst.',
      icon: <AlertTriangle className="h-8 w-8" />
    },
    {
      title: 'Snelle service',
      description: 'Flexibele planning van onderhoud op een moment dat u het beste uitkomt.',
      icon: <Clock className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Onderhoud | Vakkundig & Betaalbaar | StayCool Airco</title>
        <meta 
          name="description" 
          content="Professioneel airco onderhoud door gecertificeerde monteurs. Verleng de levensduur van uw airco, bespaar energie en voorkom dure reparaties met regelmatig onderhoud."
        />
        <meta 
          name="keywords" 
          content="airco onderhoud, airconditioning onderhoud, airco servicebeurt, airco schoonmaken, airco filters vervangen, airco onderhoudcontract"
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-onderhoud" />
      </Helmet>

      <SchemaMarkup 
        type="Service"
        data={{
          "@type": "Service",
          "name": "Airco Onderhoud Service",
          "serviceType": "Airconditioning Maintenance",
          "provider": {
            "@type": "LocalBusiness",
            "name": "StayCool Airco"
          },
          "description": "Professioneel onderhoud van airconditioningsystemen door gecertificeerde monteurs. Inclusief reiniging, controle en optimalisatie.",
          "areaServed": {
            "@type": "State",
            "name": "Limburg"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "11",
            "highPrice": "15.95",
            "offerCount": "2",
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
            "reviewCount": "112"
          }
        }}
      />

      <ProductLandingHero 
        title="Airco Onderhoud: Optimale Prestaties Garanderen"
        subtitle="Vakkundig • Betrouwbaar • Betaalbaar"
        description="Verleng de levensduur van uw airconditioning en zorg voor een gezond binnenklimaat. Onze ervaren, F-gassen gecertificeerde monteurs voeren het onderhoud aan uw airconditioning professioneel en grondig uit."
        backgroundImage="/images/products/570-Pular-indoor-right.webp"
        brandName="Airco Onderhoud"
        features={[
          "F-gassen gecertificeerde monteurs",
          "Reiniging van filters en condensors",
          "Controle op koelmiddel en lekkages",
          "Elektrische controles",
          "Efficiëntie-optimalisatie",
          "Voordelige onderhoudscontracten",
          "Complete rapportage"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom is Regelmatig Onderhoud Essentieel?"
        subtitle="Voordelen van ons professionele airco-onderhoud"
        features={features}
      />

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Wat houdt ons onderhoud in?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Uitgebreide onderhoudsservice voor een optimaal functionerende airconditioning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Standaard onderhoudsbeurt</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Reiniging filters binnenunit</p>
                    <p className="text-gray-600 text-sm">Grondig reinigen of vervangen van de filters voor betere luchtkwaliteit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Reiniging condensor buitenunit</p>
                    <p className="text-gray-600 text-sm">Verwijderen van vuil en obstakels voor optimale warmteafgifte</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Controle koelmiddel</p>
                    <p className="text-gray-600 text-sm">Controleren van koelmiddelniveau en druk in het systeem</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Uitgebreide onderhoudsbeurt</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Alle standaard onderhoudspunten</p>
                    <p className="text-gray-600 text-sm">Inclusief alle basis onderhoudswerkzaamheden</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Uitgebreide reiniging warmtewisselaar</p>
                    <p className="text-gray-600 text-sm">Diepgaande reiniging van de volledige warmtewisselaar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Anti-bacteriële behandeling</p>
                    <p className="text-gray-600 text-sm">Speciale behandeling tegen bacteriën en schimmels</p>
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
              Onderhoudscontracten en prijzen
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Kies het onderhoudspakket dat het beste bij u past
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-blue-600 p-6 text-center relative">
                <h3 className="text-xl font-bold text-white">Premium Pakket</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-gray-900">€11,-</p>
                  <p className="text-sm text-gray-500">p.m.</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Jaarlijks onderhoud</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Reiniging van binnen- en buitenunit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Controle koudemiddel en druk</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Inspectie elektrische aansluitingen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Controle condensafvoer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Voorrang bij storingen</span>
                  </li>
                </ul>

                <div className="text-center">
                  <Link to="/contact" className="inline-block px-6 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700">
                    Kies Premium Pakket
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border-2 border-blue-600">
              <div className="bg-blue-700 p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 text-xs font-bold py-1 px-3 rounded-full">
                  MEEST GEKOZEN
                </div>
                <h3 className="text-xl font-bold text-white">All-Inclusive Pakket</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-gray-900">€15,95</p>
                  <p className="text-sm text-gray-500">p.m.</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Alles uit het Premium Pakket</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Directe vervanging bij defecten</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Geen onverwachte kosten</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Priority storingsdienst</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Garantie op onderdelen</span>
                  </li>
                </ul>

                <div className="text-center">
                  <Link to="/contact" className="inline-block px-6 py-3 rounded bg-blue-700 text-white font-medium hover:bg-blue-800">
                    Kies All-Inclusive Pakket
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">Prijzen zijn per maand. Jaarlijks onderhoud inbegrepen in beide pakketten.</p>
            <p className="text-gray-600 mt-2">Vraag naar onze zakelijke onderhoudscontracten voor meerdere units.</p>
          </div>
        </div>
      </div>

      <ProductLandingContact 
        title="Vraag een Vrijblijvende Offerte Aan"
        subtitle="Ontvang persoonlijk advies en een scherpe prijsopgave voor uw airco onderhoud"
        brandName="Airco Onderhoud"
      />
    </>
  );
}
