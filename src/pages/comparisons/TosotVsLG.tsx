import React from 'react';
import ComparisonTable from '../../components/ComparisonTable';
import MetaTags from '../../components/MetaTags';
import Breadcrumbs from '../../components/SEO/Breadcrumbs';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star, TrendingUp, Check, Calendar, Home } from 'lucide-react';

export default function TosotVsLG() {
  const comparisonData = {
    product1: {
      name: 'Tosot Pular',
      image: '/images/products/tosot/Tosot-pular-wandmodel-airco-1-510x510.webp',
      price: 'vanaf €1.195,-',
      link: '/products/tosot/pular',
      pros: [
        'Uitstekende prijs-kwaliteitverhouding',
        'Betrouwbare kwaliteit (onderdeel van Gree)',
        'Goede energiezuinigheid (A++)',
        'WiFi standaard inbegrepen',
        '10 jaar garantie op compressor',
        'Golden Fin anti-corrosie coating'
      ],
      cons: [
        'Minder bekende merknaam',
        'Basis smart home integratie',
        'Minder designopties'
      ]
    },
    product2: {
      name: 'LG Deluxe',
      image: '/images/products/lg/lg-deluxe-dc24rq-airco-koeling-1.webp',
      price: 'vanaf €1.595,-',
      link: '/products/lg/deluxe',
      pros: [
        'Innovatieve technologie (Dual Inverter)',
        'Zeer stil (19 dB)',
        'Uitgebreide smart features (ThinQ)',
        'Plasmaster Ionizer+ luchtzuivering',
        'Premium design en afwerking',
        'Energiezuinig verwarmen tot -15°C'
      ],
      cons: [
        'Hogere aanschafprijs',
        'Complexere bediening',
        'Duurdere onderdelen'
      ]
    }
  };

  const comparisonItems = [
    { feature: 'Energielabel koelen', product1: 'A++', product2: 'A+++', highlight: 'product2' },
    { feature: 'Energielabel verwarmen', product1: 'A++', product2: 'A+++', highlight: 'product2' },
    { feature: 'SEER waarde', product1: '6.1', product2: '8.5', highlight: 'product2' },
    { feature: 'SCOP waarde', product1: '4.0', product2: '4.7', highlight: 'product2' },
    { feature: 'Geluidsniveau (min)', product1: '22', product2: '19', unit: 'dB', highlight: 'product2' },
    { feature: 'Capaciteitbereik', product1: '2.0-7.0', product2: '2.0-6.6', unit: 'kW', highlight: 'product1' },
    { feature: 'WiFi ingebouwd', product1: true, product2: true, highlight: 'both' },
    { feature: 'Luchtzuivering', product1: 'Cold Plasma', product2: 'Plasmaster Ionizer+', highlight: 'both' },
    { feature: 'Auto-cleaning', product1: true, product2: true, highlight: 'both' },
    { feature: 'Garantie compressor', product1: '10 jaar', product2: '10 jaar', highlight: 'both' },
    { feature: 'Smart home integratie', product1: 'Basis app', product2: 'ThinQ + Google/Alexa', highlight: 'product2' },
    { feature: 'Prijs vanaf', product1: '€1.195', product2: '€1.595', highlight: 'product1' }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tosot vs LG Airco Vergelijking",
    "description": "Vergelijk Tosot Pular met LG Deluxe airconditioners. Ontdek welke airco de beste prijs-kwaliteitverhouding biedt voor uw situatie.",
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
          "name": "Tosot vs LG",
          "item": "https://staycoolairco.nl/vergelijkingen/tosot-vs-lg"
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title="Tosot vs LG Airco Vergelijking 2024 | Beste Keuze?"
        description="Tosot Pular of LG Deluxe? Vergelijk prijzen, features en prestaties. Ontdek welke airco de beste investering is voor uw woning. Expert advies!"
        canonicalUrl="https://staycoolairco.nl/vergelijkingen/tosot-vs-lg"
        type="article"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Breadcrumbs 
        items={[
          { name: "Vergelijkingen", path: "/vergelijkingen" },
          { name: "Tosot vs LG", path: "/vergelijkingen/tosot-vs-lg" }
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tosot vs LG Airconditioning
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Betaalbare kwaliteit versus premium innovatie. Vergelijk twee populaire 
              keuzes en ontdek welke airco het beste bij uw budget en wensen past.
            </p>
          </div>

          {/* Market Position */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Marktpositionering</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tosot: Opkomende Kracht</h3>
                <p className="text-gray-600">
                  Onderdeel van Gree (werelds grootste airco fabrikant). 
                  Focus op prijs-kwaliteit zonder concessies aan betrouwbaarheid.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">LG: Premium Innovator</h3>
                <p className="text-gray-600">
                  Zuid-Koreaanse technologiegigant. Premium positionering met 
                  focus op innovatie, design en smart home integratie.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Decision Guide */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Kies Tosot voor...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Beste prijs-kwaliteitverhouding</li>
                <li>✓ Betrouwbare basisfunctionaliteit</li>
                <li>✓ Grotere capaciteit nodig (tot 7kW)</li>
                <li>✓ Budget is belangrijk</li>
                <li>✓ Bewezen technologie zonder toeters en bellen</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded">
                <p className="text-sm font-medium text-gray-900">Besparing: ±€400 op aanschaf</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Kies LG voor...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Nieuwste technologie en innovatie</li>
                <li>✓ Maximale energiebesparing (A+++)</li>
                <li>✓ Fluisterstille werking (19 dB)</li>
                <li>✓ Uitgebreide smart home features</li>
                <li>✓ Premium design en gebruikerservaring</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded">
                <p className="text-sm font-medium text-gray-900">Extra: ±€150/jaar energiebesparing</p>
              </div>
            </div>
          </div>

          {/* Detailed Comparison */}
          <ComparisonTable 
            {...comparisonData}
            items={comparisonItems}
            title="Specificaties Vergelijking"
          />

          {/* Real World Performance */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-12 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Praktijkervaring van Onze Klanten
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-600">Tosot Gebruikers Zeggen:</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {'★★★★★'.split('').map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">Peter, Weert</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Voor deze prijs echt een topapparaat. Koelt perfect, verwarmt goed 
                      en de WiFi bediening werkt prima. Geen spijt van mijn keuze!"
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {'★★★★☆'.split('').map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">Linda, Roermond</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Uitstekende airco voor normale gebruik. App is basic maar doet wat 
                      het moet doen. Blij met de besparing t.o.v. A-merken."
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-blue-600">LG Gebruikers Zeggen:</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {'★★★★★'.split('').map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">Mark, Maastricht</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "De stilste airco die ik ooit heb gehad. ThinQ app is fantastisch 
                      en de integratie met Google Home werkt perfect. Premium gevoel!"
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {'★★★★★'.split('').map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">Sandra, Heerlen</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Duurder maar het waard. Energieverbruik is echt laag en de 
                      luchtzuivering is top voor mijn allergie. Design past perfect!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Cost of Ownership */}
          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Total Cost of Ownership (10 jaar)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-green-600">Tosot Pular 3.5kW</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Aanschaf + installatie:</span>
                    <span className="font-medium">€1.695</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energiekosten (10 jaar):</span>
                    <span className="font-medium">€2.500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Onderhoud (10 jaar):</span>
                    <span className="font-medium">€800</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Totaal na 10 jaar:</span>
                      <span className="text-green-600">€4.995</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-blue-600">LG Deluxe 3.5kW</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Aanschaf + installatie:</span>
                    <span className="font-medium">€2.095</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energiekosten (10 jaar):</span>
                    <span className="font-medium">€2.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Onderhoud (10 jaar):</span>
                    <span className="font-medium">€800</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Totaal na 10 jaar:</span>
                      <span className="text-blue-600">€4.895</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-gray-700">
                <strong>Conclusie:</strong> LG is duurder in aanschaf maar verdient zich terug 
                door lager energieverbruik. Na 10 jaar zijn de totale kosten vergelijkbaar!
              </p>
            </div>
          </div>

          {/* Expert CTA */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Laat onze experts u helpen kiezen
                </h3>
                <p className="text-gray-700 mb-6">
                  We komen graag bij u thuis voor een demonstratie en persoonlijk advies. 
                  Onze experts helpen u de beste keuze te maken voor uw specifieke situatie!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Eerlijk advies zonder verkooppraatjes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Demonstratie bij u thuis</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span>Persoonlijke terugverdienberekening</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Bel voor direct advies:
                </p>
                <a
                  href="tel:0462021430"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center text-xl font-bold mb-4"
                >
                  <Phone className="h-6 w-6 mr-2" />
                  046 202 1430
                </a>
                <p className="text-sm text-gray-600 mb-4">
                  7 dagen per week bereikbaar
                </p>
                <div className="border-t pt-4">
                  <Link
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Of vraag online advies aan
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 mt-8">
            <div className="text-center">
              <Home className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Plan Direct een Gratis Thuisbezoek
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Onze expert komt bij u thuis voor persoonlijk advies. We nemen de tijd om uw 
                situatie te bekijken en alle mogelijkheden te bespreken.
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
                  Bel Direct: 046 202 1430
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}