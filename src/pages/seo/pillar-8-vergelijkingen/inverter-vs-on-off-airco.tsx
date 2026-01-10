import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Euro, Zap, TrendingDown, Activity, Phone, Calculator, ThermometerSun } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const InverterVsOnOffAirco = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Vergelijkingen', path: '/seo/pillar-8-vergelijkingen' },
    { label: 'Inverter vs On-off Airco' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "60% Energiebesparing",
      description: "Inverter airco's verbruiken 40-60% minder energie dan on-off"
    },
    {
      icon: <ThermometerSun className="h-12 w-12 text-sky-500" />,
      title: "Stabiele Temperatuur",
      description: "Constante temperatuur zonder schommelingen"
    },
    {
      icon: <Activity className="h-12 w-12 text-sky-500" />,
      title: "Langere Levensduur",
      description: "Tot 30% langere levensduur door geleidelijke werking"
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-sky-500" />,
      title: "Stiller Gebruik",
      description: "Minder geluid door variabele snelheid compressor"
    }
  ];

  const inverterVoordelen = [
    "40-60% lager energieverbruik vs on-off systemen",
    "Constante comfortabele temperatuur zonder schommelingen",
    "30% langere levensduur door minder aan/uit schakelen",
    "Stiller werken - variabele compressorsnelheid",
    "Sneller gewenste temperatuur bereiken",
    "Geschikt als warmtepomp - verwarmen én koelen",
    "Betere vochtregulering door continue werking",
    "Minder slijtage door geleidelijke belasting"
  ];

  const inverterNadelen = [
    "Hogere aanschafprijs (€200-€400 meer dan on-off)",
    "Complexere technologie - hogere reparatiekosten",
    "Vereist professionele installatie en onderhoud",
    "Elektronische componenten kunnen defect raken"
  ];

  const onoffVoordelen = [
    "Lagere aanschafprijs (vanaf €300)",
    "Eenvoudige technologie - goedkopere reparaties",
    "Breed beschikbaar in alle prijsklassen",
    "Minder gevoelig voor elektronische storingen"
  ];

  const onoffNadelen = [
    "2-3x hoger energieverbruik dan inverter",
    "Temperatuurschommelingen van 2-4°C",
    "Veel lawaai bij constant aan/uit schakelen",
    "Kortere levensduur (8-12 jaar vs 15-20 jaar)",
    "Hogere slijtage door constant starten compressor",
    "Minder geschikt voor verwarmingsfunctie",
    "Hogere energiekosten maken het duurder op lange termijn",
    "Oncomfortabel door temperatuurpieken"
  ];

  const faqs = [
    {
      question: "Wat is het verschil tussen inverter en on-off airco?",
      answer: "Een on-off airco werkt met vaste snelheid: 100% aan of 100% uit. Dit veroorzaakt temperatuurschommelingen en hoog verbruik. Een inverter airco past de compressorsnelheid continu aan (10-100%) om de exacte temperatuur te handhaven. Dit resulteert in 40-60% energiebesparing, stabiele temperatuur en stiller gebruik."
    },
    {
      question: "Hoeveel kan ik besparen met een inverter airco?",
      answer: "Bij gemiddeld gebruik (500 uur/jaar) bespaart u €150-€200 per jaar op energiekosten. Bij een prijsverschil van €300 (inverter vs on-off) verdient de inverter zich in 2 jaar terug. Over 15 jaar levensduur bespaart u €2.250-€3.000 totaal aan energiekosten."
    },
    {
      question: "Zijn alle moderne airco's inverter?",
      answer: "Nee, zeker niet. Budget merken en mobiele airco's gebruiken vaak nog on-off technologie vanwege de lagere kostprijs. Premium merken (Daikin, Mitsubishi, LG) leveren standaard inverter systemen. Bij StayCool Airco werken wij uitsluitend met inverter airco's voor maximale besparing en comfort."
    },
    {
      question: "Waarom is inverter stiller dan on-off?",
      answer: "On-off airco's starten constant op volle kracht (100%), wat veel geluid produceert (45-55 dB). Inverter airco's draaien meestal op 30-50% capaciteit (19-35 dB) en variëren geleidelijk. Dit scheelt 20-30 dB geluid, wat als 75% stiller wordt ervaren - vergelijkbaar met fluisteren vs normaal gesprek."
    },
    {
      question: "Gaat een inverter airco echt langer mee?",
      answer: "Ja, gemiddeld 30% langer. On-off compressoren maken 10-15 start/stop cycli per uur, wat enorme slijtage veroorzaakt. Inverter compressoren draaien continu op variabele snelheid met slechts 2-3 opstartmomenten per uur. Dit resulteert in 15-20 jaar levensduur vs 8-12 jaar voor on-off."
    },
    {
      question: "Kan ik een on-off airco upgraden naar inverter?",
      answer: "Nee, dat is niet mogelijk. Inverter technologie zit in de compressor en de elektronica van de buitenunit. U zou het complete systeem moeten vervangen. Daarom raden wij aan om direct te investeren in inverter - het bespaart u op termijn duizenden euro's."
    },
    {
      question: "Zijn inverter airco's geschikt voor verwarmen?",
      answer: "Ja, inverter airco's zijn bij uitstek geschikt als warmtepomp. De variabele capaciteit zorgt voor efficiënte verwarming tot -15°C buitentemperatuur. On-off systemen zijn minder geschikt voor verwarmen omdat ze niet kunnen doseren - het is te warm of te koud."
    },
    {
      question: "Wat zijn de totale kosten over 10 jaar?",
      answer: "Inverter: €1.600 aanschaf + €600 energie + €200 onderhoud = €2.400 totaal. On-off: €1.200 aanschaf + €1.500 energie + €200 onderhoud + €1.200 vervanging (na 8 jaar) = €4.100 totaal. Inverter bespaart €1.700 over 10 jaar."
    }
  ];

  return (
    <>
      <MetaTags
        title="Inverter vs On-off Airco | 60% Energiebesparing | StayCool Limburg"
        description="Inverter vs on-off airco ✓ 60% besparing ✓ Stabiele temperatuur ✓ 30% langere levensduur ✓ Stiller ✓ Complete vergelijking ✓ Expert advies Limburg"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Inverter vs On-off Airco: Energiebesparing Vergelijking",
          description: "Complete vergelijking tussen inverter en on-off airconditioners inclusief energiebesparing, kosten en voor- en nadelen.",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          },
          publisher: {
            "@type": "Organization",
            name: "StayCool Airco",
            logo: {
              "@type": "ImageObject",
              url: "https://staycoolairco.nl/logo.png"
            }
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Inverter vs On-off Airco: 60% Energiebesparing
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Inverter airco's verbruiken 40-60% minder energie, werken stiller en gaan 30% langer mee. Ontdek waarom inverter technologie de beste investering is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Bespaar op Energiekosten
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken uw Besparing
            </Link>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{usp.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Hoe Werkt Inverter vs On-off Technologie?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                <Activity className="h-8 w-8 text-red-600 mr-3" />
                On-off Airco (Conventioneel)
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Een on-off airco werkt als een klassieke lichtschakelaar: <strong>100% aan of 100% uit</strong>. Zodra de gewenste temperatuur bereikt is, schakelt de compressor volledig uit. Wanneer het te warm wordt, start de compressor weer op volle kracht.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Temperatuur 24°C:</strong> Compressor stopt volledig</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Temperatuur 26°C:</strong> Compressor start op 100% (veel geluid)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Resultaat:</strong> Temperatuurschommelingen 22-26°C</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Effect:</strong> Hoog verbruik, veel lawaai, slijtage</span>
                </li>
              </ul>

              <div className="mt-6 bg-red-100 border-l-4 border-red-600 p-4 rounded">
                <p className="text-red-900 font-semibold">
                  10-15 start/stop cycli per uur = maximale slijtage en energieverspilling
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                <Zap className="h-8 w-8 text-green-600 mr-3" />
                Inverter Airco (Modern)
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Een inverter airco werkt als een <strong>dimbare lamp</strong>: de compressor draait continu op variabele snelheid tussen 10-100%. Zodra de gewenste temperatuur bereikt is, schakelt de airco naar lage snelheid (bijv. 30%) om de temperatuur te handhaven.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Start:</strong> Compressor 100% (snelle koeling)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Gewenste temp bereikt:</strong> 30% (onderhoud temp)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Resultaat:</strong> Constante temperatuur 24°C (±0,5°C)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Effect:</strong> Laag verbruik, stil, geen slijtage</span>
                </li>
              </ul>

              <div className="mt-6 bg-green-100 border-l-4 border-green-600 p-4 rounded">
                <p className="text-green-900 font-semibold">
                  Continue werking op lage snelheid = maximale efficiëntie en comfort
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg">
              <strong>Vergelijking:</strong> On-off is als constant gas geven en remmen in een auto - inefficiënt en slijtagegevoelig. Inverter is zoals cruise control - constante snelheid, laag verbruik, maximaal comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Directe Vergelijking
          </h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-sky-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Eigenschap</th>
                  <th className="px-6 py-4 text-left font-semibold">Inverter</th>
                  <th className="px-6 py-4 text-left font-semibold">On-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Aanschafprijs</td>
                  <td className="px-6 py-4 text-gray-700">€1.400-€2.200</td>
                  <td className="px-6 py-4 text-green-600">€1.000-€1.800</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Energieverbruik</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">0,6 kW/uur (€0,15/uur)</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">1,5 kW/uur (€0,37/uur)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Jaarlijkse energiekosten</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">€75 (500 uur)</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">€185 (500 uur)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Temperatuurstabiliteit</td>
                  <td className="px-6 py-4 text-green-600">±0,5°C (constant)</td>
                  <td className="px-6 py-4 text-red-600">±2-4°C (schommelingen)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Geluidsniveau</td>
                  <td className="px-6 py-4 text-green-600">19-32 dB (fluisteren)</td>
                  <td className="px-6 py-4 text-red-600">45-55 dB (gesprek)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Start/stop cycli per uur</td>
                  <td className="px-6 py-4 text-green-600">2-3 cycli</td>
                  <td className="px-6 py-4 text-red-600">10-15 cycli</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Levensduur</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">15-20 jaar</td>
                  <td className="px-6 py-4 text-orange-600">8-12 jaar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Verwarmen mogelijk</td>
                  <td className="px-6 py-4 text-green-600">✓ Efficiënt tot -15°C</td>
                  <td className="px-6 py-4 text-orange-600">Beperkt tot 0°C</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Comfort</td>
                  <td className="px-6 py-4 text-green-600">Uitstekend</td>
                  <td className="px-6 py-4 text-orange-600">Matig</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Totale kosten 10 jaar</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">€2.400</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">€4.100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Energiebesparing Berekening */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Reële Energiebesparing en Kosten
          </h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 text-lg">
              Laten we een realistische berekening maken voor een woonkamer van 25m² met 500 gebruiksuren per jaar (typisch Nederlands klimaat):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inverter Airco</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Vermogen:</strong> 0,6 kW gemiddeld (variabel 0,2-1,5 kW)</li>
                <li><strong>Uurverbruik:</strong> 0,6 kWh × €0,25 = €0,15/uur</li>
                <li><strong>Jaarverbruik:</strong> 500 uur × €0,15 = €75/jaar</li>
                <li><strong>10 jaar energie:</strong> €750</li>
                <li className="text-xl font-bold text-green-600 pt-3 border-t-2">Totaal verbruik: 3.000 kWh (10 jaar)</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-off Airco</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Vermogen:</strong> 1,5 kW constant (alleen 100% of 0%)</li>
                <li><strong>Uurverbruik:</strong> 1,5 kWh × €0,25 = €0,37/uur</li>
                <li><strong>Jaarverbruik:</strong> 500 uur × €0,37 = €185/jaar</li>
                <li><strong>10 jaar energie:</strong> €1.850</li>
                <li className="text-xl font-bold text-red-600 pt-3 border-t-2">Totaal verbruik: 7.500 kWh (10 jaar)</li>
              </ul>
            </div>
          </div>

          <div className="bg-sky-50 border-2 border-sky-400 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-sky-900 mb-4 flex items-center">
              <Euro className="h-8 w-8 text-sky-600 mr-3" />
              Totale Besparing over 10 Jaar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-2"><strong>Energiebesparing:</strong></p>
                <ul className="space-y-2 text-gray-700">
                  <li>Jaarlijks: €110 besparing</li>
                  <li>10 jaar: €1.100 besparing</li>
                  <li>15 jaar: €1.650 besparing</li>
                  <li className="font-bold text-green-600">4.500 kWh minder verbruik (10 jaar)</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700 mb-2"><strong>CO2 reductie:</strong></p>
                <ul className="space-y-2 text-gray-700">
                  <li>Per jaar: 220 kg CO2 besparing</li>
                  <li>10 jaar: 2.250 kg CO2 besparing</li>
                  <li className="font-bold text-green-600">Equivalent aan 15.000 km autorijden</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-orange-900 mb-3">Terugverdientijd</h3>
            <p className="text-gray-700 text-lg">
              Het prijsverschil van €300-€400 (inverter vs on-off) verdient u terug in <strong>2,5-3,5 jaar</strong> door lagere energiekosten. Daarna bespaart u elk jaar €110 puur winst. Over de gehele levensduur (15 jaar) bespaart u <strong>€1.650 - €2.250</strong> aan energiekosten, plus lagere vervangingskosten omdat de inverter airco langer meegaat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bespaar Tot €2.250 op Energiekosten
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Investeer nu in inverter technologie en profiteer jarenlang van lagere energierekeningen. Wij adviseren u gratis over de beste optie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Bereken uw Besparing
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              Bel: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* Voor- en Nadelen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Voor- en Nadelen per Systeem
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inverter */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="h-8 w-8 text-green-500 mr-3" />
                Inverter Airco
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {inverterVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />
                  Nadelen
                </h4>
                <ul className="space-y-3">
                  {inverterNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* On-off */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="h-8 w-8 text-red-500 mr-3" />
                On-off Airco
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {onoffVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />
                  Nadelen
                </h4>
                <ul className="space-y-3">
                  {onoffNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer kiezen */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Wanneer Kiest u voor Welk Systeem?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                Kies Inverter (aanbevolen)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Bij regelmatig gebruik ( meer dan 100 uur/jaar)</strong>
                    <p className="text-gray-700">Energiebesparing verdient investering terug</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Voor slaapkamers en kantoren</strong>
                    <p className="text-gray-700">Stil gebruik (19-32 dB) essentieel</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Als u ook wilt verwarmen</strong>
                    <p className="text-gray-700">Efficiënte warmtepompfunctie tot -15°C</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Voor constant comfort</strong>
                    <p className="text-gray-700">Stabiele temperatuur zonder schommelingen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Lange termijn investering</strong>
                    <p className="text-gray-700">15-20 jaar betrouwbare werking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Bij nieuwe installatie</strong>
                    <p className="text-gray-700">Beste investering voor toekomst</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 bg-green-200 border-l-4 border-green-600 p-4 rounded">
                <p className="text-green-900 font-semibold">
                  ✓ Aanbevolen voor 95% van de situaties - beste prijs/kwaliteit verhouding op lange termijn
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                <Activity className="h-8 w-8 text-orange-600 mr-3" />
                Kies On-off (beperkt)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Zeer beperkt budget (minder dan €1.000)</strong>
                    <p className="text-gray-700">Let op: hogere gebruikskosten</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Tijdelijke oplossing (1-2 jaar)</strong>
                    <p className="text-gray-700">Binnenkort verhuizing of vervanging</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Extreem beperkt gebruik ( minder dan 20 uur/jaar)</strong>
                    <p className="text-gray-700">Alleen enkele warme dagen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Mobiele airco alternatief</strong>
                    <p className="text-gray-700">On-off split beter dan mobiel</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 bg-orange-200 border-l-4 border-orange-600 p-4 rounded">
                <p className="text-orange-900 font-semibold">
                  ⚠️ Let op: Bij gebruik  meer dan 100 uur/jaar betaalt u meer aan energiekosten dan de besparing op aanschaf
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-sky-50 border-2 border-sky-400 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-sky-900 mb-4">StayCool Airco Advies</h3>
            <p className="text-gray-700 text-lg">
              <strong>Wij installeren uitsluitend inverter airco's</strong> omdat deze op lange termijn altijd voordeliger zijn voor onze klanten. Het kleine verschil in aanschafprijs verdient u binnen 2-3 jaar terug, waarna u jarenlang profiteert van 60% lagere energiekosten, stiller gebruik en betere betrouwbaarheid. On-off systemen zijn vals goedkoop - de energierekening maakt ze uiteindelijk duurder.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor 60% Energiebesparing?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Investeer in inverter technologie en bespaar jarenlang op uw energierekening. StayCool Airco installeert uitsluitend hoogwaardige inverter systemen met 10 jaar garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Gratis Offerte Aanvragen
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-700 text-white font-bold rounded-lg hover:bg-sky-800 transition-colors text-lg"
            >
              Bekijk Inverter Merken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InverterVsOnOffAirco;
