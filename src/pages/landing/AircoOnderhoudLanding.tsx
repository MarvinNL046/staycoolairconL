import MaintenanceOffer from '../../components/MaintenanceOffer';
import { Helmet } from 'react-helmet-async';
import { CheckCircle,Calendar,AlertTriangle,Clock } from 'lucide-react';
import ProductLandingHero from '../../components/landing/ProductLandingHero';
import ProductLandingFeatures from '../../components/landing/ProductLandingFeatures';
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
    <div className="break-words">
      <Helmet>
        <title>Airco onderhoud: werkzaamheden en controles | StayCool</title>
        <meta
          name="description"
          content="Wat gebeurt er bij airco onderhoud? Bekijk reiniging, controles en onderhoud voor bestaande StayCool-klanten. Lees verder over frequentie, kosten en pakketten."
        />
        <meta
          name="keywords"
          content="airco onderhoudscontract, airco onderhoud abonnement, jaarlijks airco onderhoud, airco servicebeurt, airco schoonmaken, onderhoudsabonnement airco Limburg"
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
            "lowPrice": "13",
            "highPrice": "16",
            "offerCount": "2",
            "availability": "https://schema.org/InStock"
          },


        }}
      />

      <ProductLandingHero primaryTo="/onderhoud" primaryLabel="Vergelijk onderhoudspakketten"
        title="Wat houdt airco onderhoud in?"
        subtitle="Vakkundig • Betrouwbaar • Betaalbaar"
        description="Bij een onderhoudsbeurt worden uw airco, filters en afvoer gereinigd en gecontroleerd. Hier leest u welke werkzaamheden daarbij horen. StayCool verzorgt onderhoud aan airco’s die wij zelf hebben geleverd en geïnstalleerd."
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
                <li className="flex flex-col sm:flex-row items-start">
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

          <MaintenanceOffer />
          <nav aria-label="Meer over onderhoud" className="mt-6 flex flex-col gap-3">
            <Link to="/kennisbank/hoe-vaak-airco-onderhoud" className="text-blue-800 underline">Hoe vaak heeft uw airco onderhoud nodig?</Link>
            <Link to="/seo/pillar-9-kosten-prijzen/airco-onderhoud-kosten" className="text-blue-800 underline">Kosten van los onderhoud en abonnementen vergelijken</Link>
            <Link to="/airco-onderhoud-limburg" className="text-blue-800 underline">Onderhoud voor bestaande klanten in Limburg</Link>
          </nav>
        </div>
      </div>

      {/* Important Notice Section */}
      <div className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-8 md:p-12">
            <div className="flex flex-col sm:flex-row items-start">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-12 w-12 text-orange-500" />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 min-w-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Belangrijk: Onderhoudsbeleid StayCool Airco
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Bij StayCool Airco streven we naar de hoogste kwaliteit en service voor onze klanten.
                    Om dit te kunnen garanderen, voeren wij <strong>uitsluitend onderhoud en reparaties</strong> uit
                    aan airconditioningsystemen die door ons zijn geleverd en geïnstalleerd.
                  </p>
                  <p className="mb-4">
                    Dit beleid stelt ons in staat om:
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>De volledige geschiedenis van uw systeem te kennen</li>
                    <li>Garantie te bieden op onderdelen en arbeid</li>
                    <li>Optimale service te verlenen aan onze bestaande klanten</li>
                    <li>De kwaliteit van onze dienstverlening te waarborgen</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Heeft u een airco die niet door StayCool is geïnstalleerd?</strong><br />
                    Wij adviseren u contact op te nemen met de oorspronkelijke installateur of een algemene
                    onderhoudspartij voor airconditioningsystemen.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Wij begrijpen dat dit mogelijk ongemak veroorzaakt en bieden hiervoor onze excuses aan.
                    Deze keuze is gemaakt om de beste service aan onze klanten te kunnen blijven bieden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="py-10 text-center"><Link to="/onderhoud" className="inline-block rounded-lg bg-blue-700 px-6 py-4 font-bold text-white">Vergelijk Basis en Premium</Link></div>
    </div>
  );
}
