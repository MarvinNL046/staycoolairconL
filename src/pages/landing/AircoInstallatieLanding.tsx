import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Clock, Award, Wrench } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
import ProductLandingContact from '../../components/landing/ProductLandingContact';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';

export default function AircoInstallatieLanding() {
  // Define features with icons
  const features = [
    {
      title: 'Professionele montage',
      description: 'Installatieservice door gecertificeerde F-gassen monteurs met jarenlange ervaring in de airco branche.',
      icon: <Wrench className="h-8 w-8" />
    },
    {
      title: 'Behoud van garantie',
      description: 'Met onze erkende installatie blijft de fabrieksgarantie op uw airco volledig behouden.',
      icon: <ShieldCheck className="h-8 w-8" />
    },
    {
      title: 'Snelle service',
      description: 'Installatie mogelijk binnen 5 werkdagen na bestelling, vaak zelfs sneller.',
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: '5 jaar installatiegarantie',
      description: 'Naast de productgarantie bieden wij 5 jaar garantie op onze installatiewerkzaamheden.',
      icon: <Award className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Installatie | Inclusief Montage | Door Gecertificeerde Monteurs | StayCool Airco</title>
        <meta
          name="description"
          content="Airco installatie: F-gassen gecertificeerd | 5 jaar garantie | Behoud fabrieksgarantie | Nette afwerking. Erkend Limburg. Gratis offerte!"
        />
        <meta 
          name="keywords" 
          content="airco installatie, airco met montage, airco inclusief installatie, airco laten installeren, airco montage, airco plaatsen"
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-installatie" />
      </Helmet>

      <SchemaMarkup 
        type="Service"
        data={{
          "@type": "Service",
          "name": "Airco Installatie Service",
          "serviceType": "Airconditioning Installation",
          "provider": {
            "@type": "LocalBusiness",
            "name": "StayCool Airco"
          },
          "description": "Professionele airconditioning installatie door gecertificeerde monteurs. Inclusief materialen, montage en volledige afwerking.",
          "areaServed": {
            "@type": "State",
            "name": "Limburg"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "EUR",
            "lowPrice": "450",
            "highPrice": "950",
            "offerCount": "10",
            "availability": "https://schema.org/InStock"
          },
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
            "reviewCount": "127"
          }
        }}
      />

      <ProductLandingHero 
        title="Airco Installatie: Professionele Montage Service"
        subtitle="Vakkundig • Verzorgd • Snel"
        description="Kwaliteit en betrouwbaarheid bij de installatie van uw airconditioning. Onze ervaren, F-gassen gecertificeerde monteurs verzorgen de complete installatie van uw airco, van A tot Z."
        backgroundImage="/images/products/568-Pular-indoor-vooraanzicht.webp"
        brandName="Airco Installatie"
        features={[
          "F-gassen gecertificeerde monteurs",
          "Behoud van fabrieksgarantie",
          "Netjes afgewerkte installatie",
          "Alle materialen inbegrepen",
          "5 jaar garantie op installatie",
          "Uitleg over bediening",
          "Snelle en flexibele planning"
        ]}
      />

      <ProductLandingFeatures 
        title="Waarom Kiezen voor Onze Installatieservice?"
        subtitle="Kwaliteit en zekerheid bij de installatie van uw airconditioning"
        features={features}
      />

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Wat houdt onze installatie in?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Een complete en zorgeloze installatie van uw airconditioning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Standaard in onze installatie</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Voorbereidende inspectie</p>
                    <p className="text-gray-600 text-sm">Optimale locatiebepaling voor binnen- en buitenunit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Professionele montage</p>
                    <p className="text-gray-600 text-sm">Veilige bevestiging van binnen- en buitenunit op wandbeugels</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Leidingwerk (tot 3 meter)</p>
                    <p className="text-gray-600 text-sm">Aanleg van geïsoleerde koelleidingen, condensafvoer en elektrische bekabeling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Netjes afgewerkte muurdoorvoer</p>
                    <p className="text-gray-600 text-sm">Professionele doorvoeringen door muur of glas, inclusief afdichting</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Vacumeren en testen</p>
                    <p className="text-gray-600 text-sm">Systeem vacumeren en druktest uitvoeren voor optimale werking</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Extra opties (tegen meerprijs)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Extended leidingwerk</p>
                    <p className="text-gray-600 text-sm">Extra leidinglengte boven 3 meter (prijs op aanvraag)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Condenspomp</p>
                    <p className="text-gray-600 text-sm">Voor situaties waarin een natuurlijk afschot niet mogelijk is (€175)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Hoogtemontage</p>
                    <p className="text-gray-600 text-sm">Montage boven 2,5 meter vanaf de grond (prijs op aanvraag)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Wi-Fi module installatie</p>
                    <p className="text-gray-600 text-sm">Configuratie van smart functionaliteit voor bediening op afstand (prijs op aanvraag)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-medium">Leidingkanaal</p>
                    <p className="text-gray-600 text-sm">Nette afwerking van zichtbaar leidingwerk (prijs op aanvraag)</p>
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
              Prijzen en installatieproces
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Transparante prijzen en duidelijk proces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Installatiekosten</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Single split airco installatie</span>
                  <span className="font-semibold">Op aanvraag</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Duo split airco installatie</span>
                  <span className="font-semibold">Op aanvraag</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Multi split airco installatie</span>
                  <span className="font-semibold">Op aanvraag</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">Mobiele airco aansluiting</span>
                  <span className="font-semibold">Op aanvraag</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                * Bovenstaande prijzen zijn inclusief 3 meter leidingwerk, standaard muurdoorvoer, beugels, 
                en alle benodigde materialen. Exacte prijs is afhankelijk van het specifieke model en situatie ter plaatse.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Installatieproces</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Vrijblijvende offerte</h4>
                    <p className="text-gray-600">Na uw aanvraag nemen wij contact met u op voor een offerte op maat</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Installatieafspraak</h4>
                    <p className="text-gray-600">Na akkoord plannen we een installatiedatum die u goed uitkomt</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Professionele installatie</h4>
                    <p className="text-gray-600">Onze monteurs verzorgen de complete installatie, meestal binnen één werkdag</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Uitleg en overdracht</h4>
                    <p className="text-gray-600">Na installatie krijgt u uitleg over de bediening en onderhoudstips</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/kennisbank/airco-laten-installeren" className="text-blue-600 hover:text-blue-800 font-medium">
                  Lees meer over het installatieproces →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductLandingContact 
        title="Vraag een Vrijblijvende Offerte Aan"
        subtitle="Ontvang persoonlijk advies en een scherpe prijsopgave voor uw airco installatie"
        brandName="Airco Installatie"
      />
    </>
  );
}
