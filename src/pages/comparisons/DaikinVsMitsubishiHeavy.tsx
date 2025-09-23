import React from 'react';
import ComparisonTable from '../../components/ComparisonTable';
import MetaTags from '../../components/MetaTags';
import Breadcrumbs from '../../components/SEO/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Download, Calendar, Home } from 'lucide-react';

export default function DaikinVsMitsubishiHeavy() {
  const comparisonData = {
    product1: {
      name: 'Daikin Stylish',
      image: '/images/products/daikin-stylish-wit.webp',
      price: 'vanaf €1.895,-',
      link: '/products/daikin/stylish',
      pros: [
        'Beste energiezuinigheid (A+++)',
        'Zeer stil (19 dB)',
        'Stijlvol design (verkrijgbaar in 3 kleuren)',
        'Uitstekende luchtzuivering (Flash Streamer)',
        'Smart Home integratie',
        'Coanda-effect voor optimale luchtverdeling'
      ],
      cons: [
        'Hogere aanschafprijs',
        'Installatie kan complex zijn',
        'App soms instabiel'
      ]
    },
    product2: {
      name: 'Mitsubishi Heavy ZS-WF',
      image: '/images/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft-1.webp',
      price: 'vanaf €1.550,-',
      link: '/products/mitsubishi-heavy-industries/zs-w',
      pros: [
        'Zeer betrouwbaar en duurzaam',
        'Allergeenfilter standaard',
        'Extreme temperatuurbestendigheid (-15°C tot 46°C)',
        '3D Auto functie voor optimale luchtverdeling',
        'Lagere aanschafprijs',
        'Jet Air technologie'
      ],
      cons: [
        'Iets minder energiezuinig dan Daikin',
        'Minder designopties',
        'Basis app functionaliteit'
      ]
    }
  };

  const comparisonItems = [
    { feature: 'Energielabel koelen', product1: 'A+++', product2: 'A++', highlight: 'product1' },
    { feature: 'Energielabel verwarmen', product1: 'A+++', product2: 'A++', highlight: 'product1' },
    { feature: 'SEER waarde', product1: '8.75', product2: '8.5', highlight: 'product1' },
    { feature: 'SCOP waarde', product1: '5.15', product2: '4.6', highlight: 'product1' },
    { feature: 'Geluidsniveau (min)', product1: '19', product2: '21', unit: 'dB', highlight: 'product1' },
    { feature: 'Capaciteitbereik', product1: '1.3-5.0', product2: '2.5-8.0', unit: 'kW', highlight: 'product2' },
    { feature: 'WiFi ingebouwd', product1: true, product2: true, highlight: 'both' },
    { feature: 'Luchtzuivering', product1: 'Flash Streamer', product2: 'Allergeenfilter', highlight: 'both' },
    { feature: 'Bewegingssensor', product1: true, product2: false, highlight: 'product1' },
    { feature: 'Zelfreinigend', product1: true, product2: true, highlight: 'both' },
    { feature: 'Garantie compressor', product1: '10 jaar', product2: '10 jaar', highlight: 'both' },
    { feature: 'Beschikbare kleuren', product1: '3 (wit, zilver, zwart)', product2: '2 (wit, titanium)', highlight: 'product1' },
    { feature: 'Prijs vanaf', product1: '€1.895', product2: '€1.550', highlight: 'product2' }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Daikin vs Mitsubishi Heavy Industries Airco Vergelijking",
    "description": "Uitgebreide vergelijking tussen Daikin Stylish en Mitsubishi Heavy ZS-WF airconditioners. Ontdek welke airco het beste bij uw situatie past.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://staycoolairco.nl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Vergelijkingen",
          "item": "https://staycoolairco.nl/vergelijkingen"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Daikin vs Mitsubishi Heavy",
          "item": "https://staycoolairco.nl/vergelijkingen/daikin-vs-mitsubishi-heavy"
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title="Daikin vs Mitsubishi Heavy Airco Vergelijking 2024 | StayCool Airco"
        description="Vergelijk Daikin Stylish met Mitsubishi Heavy ZS-WF airconditioners. Ontdek verschillen in prijs, energieverbruik, geluidsniveau en features. Gratis advies!"
        canonicalUrl="https://staycoolairco.nl/vergelijkingen/daikin-vs-mitsubishi-heavy"
        type="article"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Breadcrumbs 
        items={[
          { name: "Vergelijkingen", path: "/vergelijkingen" },
          { name: "Daikin vs Mitsubishi Heavy", path: "/vergelijkingen/daikin-vs-mitsubishi-heavy" }
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Daikin vs Mitsubishi Heavy Industries
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een uitgebreide vergelijking tussen twee Japanse topmerken. 
              Ontdek welke airco het beste past bij uw wensen en budget.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Kies voor Daikin als...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Energiebesparing topprioriteit is (laagste verbruik)</li>
                <li>✓ U waarde hecht aan design en stijl</li>
                <li>✓ Fluisterstille werking belangrijk is (19 dB)</li>
                <li>✓ U geavanceerde smart home features wilt</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Kies voor Mitsubishi Heavy als...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Betrouwbaarheid en duurzaamheid voorop staan</li>
                <li>✓ U een scherper geprijsd alternatief zoekt</li>
                <li>✓ Allergeenfiltering belangrijk is</li>
                <li>✓ U een groter capaciteitbereik nodig heeft (tot 8kW)</li>
              </ul>
            </div>
          </div>

          {/* Comparison Table */}
          <ComparisonTable 
            {...comparisonData}
            items={comparisonItems}
            title="Gedetailleerde Vergelijking"
          />

          {/* Additional CTAs */}
          <div className="mt-16 space-y-8">
            {/* Download CTA */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download Gratis Vergelijkingsgids
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Ontvang een uitgebreide PDF met alle specificaties, prijzen en ons expertoordeel 
                over welke airco het beste past bij verschillende situaties.
              </p>
              <Link
                to="/contact?request=vergelijkingsgids-daikin-mitsubishi"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Vergelijkingsgids
              </Link>
            </div>

            {/* Expert Advice CTA */}
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Persoonlijk advies van onze experts?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Elke situatie is uniek. Onze specialisten helpen u graag met een 
                    advies op maat, gebaseerd op uw specifieke wensen en woonsituatie.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>✓ Gratis en vrijblijvend adviesgesprek</li>
                    <li>✓ Berekening van terugverdientijd</li>
                    <li>✓ Demonstratie van beide systemen mogelijk</li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    Direct contact met een expert:
                  </p>
                  <a
                    href="tel:0462021430"
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center text-lg font-semibold mb-4"
                  >
                    <Phone className="h-6 w-6 mr-2" />
                    046 202 1430
                  </a>
                  <p className="text-sm text-gray-600">
                    Ma-Za: 8:00 - 20:00 uur
                  </p>
                </div>
              </div>
            </div>

            {/* Related Comparisons */}
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Andere Interessante Vergelijkingen
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  to="/vergelijkingen/split-vs-monoblock"
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Split vs Monoblock</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Ontdek de verschillen tussen split en monoblock aircosystemen
                  </p>
                  <span className="text-blue-600 font-medium inline-flex items-center">
                    Lees meer <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
                
                <Link
                  to="/vergelijkingen/tosot-vs-lg"
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Tosot vs LG</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Vergelijk betaalbare kwaliteit met premium innovatie
                  </p>
                  <span className="text-blue-600 font-medium inline-flex items-center">
                    Lees meer <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
                
                <Link
                  to="/vergelijkingen/energie-labels"
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Energielabels Uitgelegd</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Wat betekenen A+++, SEER en SCOP voor uw energierekening?
                  </p>
                  <span className="text-blue-600 font-medium inline-flex items-center">
                    Lees meer <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Appointment CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 mt-8">
              <div className="text-center">
                <Home className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Plan een Gratis Adviesgesprek bij u Thuis
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Onze specialist komt bij u thuis om de situatie te bekijken en u te adviseren 
                  over de beste keuze tussen Daikin en Mitsubishi Heavy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://afspraken.staycoolairco.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Plan Thuisbezoek In
                  </a>
                  <a
                    href="tel:0462021430"
                    className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors inline-flex items-center justify-center font-semibold"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Of Bel: 046 202 1430
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}