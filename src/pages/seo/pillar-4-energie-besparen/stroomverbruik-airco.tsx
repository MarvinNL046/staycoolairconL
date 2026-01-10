import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calculator, Euro, Zap, TrendingDown, Phone, Info, ThermometerSun } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const StroomverbruikAirco: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Energie Besparen', path: '/seo/pillar-4-energie-besparen' },
    { label: 'Stroomverbruik Airco' }
  ];

  const usps = [
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: 'Eenvoudige Berekening',
      description: 'Bereken exact hoeveel uw airco verbruikt met onze handige formules en rekenvoorbeelden.'
    },
    {
      icon: <Euro className="h-12 w-12 text-green-500" />,
      title: 'Kosten Inzichtelijk',
      description: 'Weet precies wat uw airco per dag, maand en jaar kost aan elektriciteit voor koelen en verwarmen.'
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-purple-600" />,
      title: 'Besparingstips',
      description: 'Praktische tips om het stroomverbruik van uw airco met 20-40% te verlagen zonder comfort in te leveren.'
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: 'Efficiency Vergelijken',
      description: 'Vergelijk verschillende modellen en energielabels om de meest energiezuinige keuze te maken.'
    }
  ];

  const faqs = [
    {
      question: 'Hoeveel stroom verbruikt een airco gemiddeld per uur?',
      answer: 'Het stroomverbruik per uur hangt sterk af van de capaciteit, het energielabel en de gebruiksmodus. Voor koelen verbruikt een moderne inverter airco van 3,5 kW gemiddeld 0,4-0,8 kW per uur (400-800 Watt), wat neerkomt op €0,12-0,24 per uur bij €0,30/kWh. Voor verwarmen met een SCOP van 4,5 verbruikt diezelfde airco 0,7-1,2 kW per uur, oftewel €0,21-0,36 per uur. Oudere on/off modellen verbruiken 50-100% meer. De werkelijke kosten hangen af van buitentemperatuur, isolatie, gewenste binnentemperatuur en hoe vaak de compressor moet draaien.'
    },
    {
      question: 'Wat is het verschil in verbruik tussen koelen en verwarmen?',
      answer: 'Koelen is over het algemeen energiezuiniger dan verwarmen. Bij koelen haal je warmte uit de binnenruimte en voert deze naar buiten - een relatief eenvoudig proces. Bij verwarmen moet je warmte uit koude buitenlucht halen, wat meer energie kost naarmate het kouder is. Een airco met SEER 8,0 (koelen) verbruikt circa 0,44 kW per kW koelvermogen. Diezelfde airco met SCOP 4,5 (verwarmen) verbruikt 0,22 kW per kW verwarmingsvermogen. Paradoxaal genoeg is verwarmen met een warmtepomp dus efficiënter dan koelen! Bij -5°C buitentemperatuur kan het verbruik voor verwarmen wel oplopen omdat de efficiency afneemt.'
    },
    {
      question: 'Hoe bereken ik het jaarlijkse stroomverbruik van mijn airco?',
      answer: 'Gebruik deze formule: Jaarverbruik (kWh) = (Koeluren × Koelvermogen ÷ SEER) + (Verwarmingsuren × Verwarmingsvermogen ÷ SCOP). Voorbeeld: 3,5 kW airco, 500 uur koelen (SEER 8,0), 1.200 uur verwarmen (SCOP 4,5). Koelen: 500 × 3,5 ÷ 8,0 = 219 kWh. Verwarmen: 1.200 × 3,5 ÷ 4,5 = 933 kWh. Totaal: 1.152 kWh per jaar. Bij €0,30/kWh zijn de jaarkosten €346. Dit is een schatting - werkelijk verbruik hangt af van gebruik, isolatie en temperatuurinstellingen. Moderne airco\'s met Wi-Fi tonen het actuele verbruik in de app voor nauwkeurige tracking.'
    },
    {
      question: 'Verbruikt een inverter airco minder dan een on/off model?',
      answer: 'Ja, aanzienlijk minder - wel 30-50% besparing. Een on/off airco schakelt volledig aan (100% vermogen) of uit (0% vermogen). Dit veroorzaakt stroompieken bij elke start en de compressor moet telkens opnieuw opstarten, wat veel energie kost. Een inverter airco past het toerental van de compressor geleidelijk aan tussen 20-100% vermogen, afhankelijk van de warmte/koel-behoefte. Hierdoor draait de compressor continu op laag toerental, wat veel energiezuiniger is dan constant aan/uit schakelen. Bovendien houdt een inverter de temperatuur stabieler, wat comfort verhoogt. Alle moderne airco\'s (vanaf 2015) hebben inverter technologie - koop nooit meer een on/off model.'
    },
    {
      question: 'Wat kost het om een airco een hele zomer te gebruiken?',
      answer: 'Voor een gemiddeld huishouden in Limburg (airco 8 uur per dag, 90 dagen zomer, 3,5 kW capaciteit, SEER 8,0): Dagverbruik = 8 uur × 3,5 kW ÷ 8,0 = 3,5 kWh. Dagkosten = 3,5 kWh × €0,30 = €1,05. Zomerkosten = 90 dagen × €1,05 = €94,50 voor de hele zomer. Dit is een conservatieve schatting waarbij we uitgaan van continu gebruik op maximaal vermogen. In de praktijk verbruikt een moderne inverter airco minder omdat deze het vermogen aanpast. Realistische zomerkosten liggen tussen €60-120 afhankelijk van gebruik, buitentemperatuur en isolatie. Veel goedkoper dan vroeger verwacht!'
    },
    {
      question: 'Hoe kan ik het stroomverbruik van mijn airco verlagen?',
      answer: 'Er zijn diverse manieren om 20-40% te besparen: (1) Stel de thermostaat niet te laag in bij koelen (24-26°C is ideaal) of te hoog bij verwarmen (20-21°C). Elk graadje scheelt 5-7% energie. (2) Reinig filters elke 2-3 maanden - vuile filters verhogen verbruik met 10-20%. (3) Gebruik de eco/energiebespaarmodus. (4) Sluit gordijnen/zonwering overdag bij koelen om warmte buiten te houden. (5) Verbeter woningisolatie (grootste impact!). (6) Gebruik timers om de airco uit te schakelen wanneer u er niet bent. (7) Laat jaarlijks onderhoud uitvoeren voor optimale efficiency. (8) Upgrade naar een A+++ model met SCOP  meer dan 5,0 als uw airco ouder dan 10 jaar is.'
    },
    {
      question: 'Is verwarmen met een airco goedkoper dan met gas?',
      answer: 'In de meeste gevallen ja, zeker met huidige energieprijzen (2024-2025). Een warmtepomp airco met SCOP 4,5 produceert 4,5 kW warmte uit 1 kW stroom (kosten: €0,30). Dat is €0,067 per kWh warmte. Een HR-combiketel met 95% rendement kost bij €1,45/m³ gas (inclusief vastrecht): €1,45 ÷ (10,3 kWh × 0,95) = €0,148 per kWh warmte. De airco is dus 55% goedkoper dan gas! Met zonnepanelen (eigen stroom €0,10/kWh) wordt het verschil nog groter: €0,022 per kWh warmte met airco vs €0,148 met gas = 85% goedkoper. Enige kanttekening: bij zeer lage buitentemperaturen (<-10°C) daalt de efficiency van de airco, maar in Limburg komt dat zelden voor.'
    },
    {
      question: 'Hoe nauwkeurig zijn de verbruiksgegevens van de fabrikant?',
      answer: 'De verbruiksgegevens (SEER/SCOP) zijn gemeten onder gestandaardiseerde laboratoriumomstandigheden volgens EU-norm EN14825. In de praktijk kunnen de werkelijke waarden 5-15% afwijken, afhankelijk van lokale omstandigheden. Factoren die verbruik verhogen: slechte isolatie, vuile filters, te kleine/grote capaciteit, slechte plaatsing buitenunit, extreme buitentemperaturen. Factoren die efficiency verbeteren: goede isolatie, regelmatig onderhoud, optimale temperatuurinstellingen, milder klimaat dan testklimaat. Bij professionele installatie en normaal gebruik komen de opgegeven waarden goed overeen met de praktijk. Moderne airco\'s met Wi-Fi/app tonen real-time verbruik, waarmee u de efficiency zelf kunt monitoren.'
    }
  ];

  return (
    <>
      <MetaTags
        title="Stroomverbruik Airco Berekenen - Kosten per Maand | Limburg"
        description="Stroomverbruik airco berekenen ✓ Kosten per uur/dag/maand ✓ Inverter vs on/off ✓ Besparingstips ✓ Gratis calculator Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Stroomverbruik Airco Berekenen - Kosten en Besparing",
          description: "Complete gids over het stroomverbruik van airco's. Bereken uw kosten, vergelijk modellen en ontdek hoe u 20-40% kunt besparen met praktische tips.",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          },
          publisher: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stroomverbruik Airco Berekenen - Kosten en Besparing Inzichtelijk
          </h1>

          <p className="text-xl md:text-2xl text-blue-50 mb-8 max-w-4xl">
            Ontdek hoeveel uw airco verbruikt en wat dit kost. Bereken uw maandelijkse kosten,
            vergelijk modellen en leer hoe u tot 40% kunt besparen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken uw Verbruik
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Advies
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-blue-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Handige rekentool</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Kosten per uur/dag/maand</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Besparingstips</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Model vergelijking</span>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Hoe Bereken ik het Stroomverbruik van Mijn Airco?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Het stroomverbruik van een airco hangt af van diverse factoren: de capaciteit (kW), het energielabel
                (SEER/SCOP), hoe vaak u de airco gebruikt, de buitentemperatuur en uw gewenste binnentemperatuur. Met de
                juiste formules kunt u eenvoudig berekenen wat uw airco kost per uur, dag, maand of jaar.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 my-8 border-2 border-blue-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calculator className="h-8 w-8 mr-3 text-blue-600" />
                  Basis Formule Stroomverbruik
                </h3>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Voor Koelen:</h4>
                    <div className="bg-blue-100 rounded p-4 mb-3 font-mono text-lg text-center">
                      Verbruik (kW) = Koelvermogen (kW) ÷ SEER
                    </div>
                    <p className="text-sm text-gray-700">
                      <strong>Voorbeeld:</strong> Airco van 3,5 kW met SEER 8,0<br />
                      Verbruik = 3,5 ÷ 8,0 = 0,44 kW per uur (440 Watt)
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Voor Verwarmen:</h4>
                    <div className="bg-orange-100 rounded p-4 mb-3 font-mono text-lg text-center">
                      Verbruik (kW) = Verwarmingsvermogen (kW) ÷ SCOP
                    </div>
                    <p className="text-sm text-gray-700">
                      <strong>Voorbeeld:</strong> Airco van 3,5 kW met SCOP 4,5<br />
                      Verbruik = 3,5 ÷ 4,5 = 0,78 kW per uur (780 Watt)
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Kosten Berekenen:</h4>
                    <div className="bg-green-100 rounded p-4 mb-3 font-mono text-lg text-center">
                      Kosten = Verbruik (kW) × Gebruiksuren × Elektriciteitstarief (€/kWh)
                    </div>
                    <p className="text-sm text-gray-700">
                      <strong>Voorbeeld:</strong> 0,44 kW × 8 uur × €0,30 = €1,06 per dag (koelen)<br />
                      <strong>Voorbeeld:</strong> 0,78 kW × 8 uur × €0,30 = €1,87 per dag (verwarmen)
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Stroomverbruik: Koelen vs Verwarmen
              </h2>

              <p>
                Een veelvoorkomende misvatting is dat koelen goedkoper is dan verwarmen. In werkelijkheid is het tegenovergestelde
                waar bij moderne warmtepomp airco's. Laten we dit met concrete cijfers verduidelijken.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-200">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center text-xl">
                    <ThermometerSun className="h-6 w-6 mr-2 text-cyan-600" />
                    Koelen (Zomer)
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>SEER-waarde:</strong> 7,0 - 9,0 (gemiddeld 8,0)</li>
                    <li><strong>Efficiency:</strong> 700-900% rendement</li>
                    <li><strong>Verbruik 3,5 kW:</strong> 0,39-0,50 kW/uur</li>
                    <li><strong>Kosten per uur:</strong> €0,12-0,15 (@€0,30/kWh)</li>
                    <li><strong>Dagkosten (8u):</strong> €0,94-1,20</li>
                    <li><strong>Maandkosten:</strong> €28-36 (bij dagelijks 8u gebruik)</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    Koelen is relatief energie-intensief omdat u warmte moet "verplaatsen" tegen de natuurlijke richting in.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center text-xl">
                    <ThermometerSun className="h-6 w-6 mr-2 text-orange-600" />
                    Verwarmen (Winter)
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>SCOP-waarde:</strong> 4,0 - 5,5 (gemiddeld 4,5)</li>
                    <li><strong>Efficiency:</strong> 400-550% rendement</li>
                    <li><strong>Verbruik 3,5 kW:</strong> 0,64-0,88 kW/uur</li>
                    <li><strong>Kosten per uur:</strong> €0,19-0,26 (@€0,30/kWh)</li>
                    <li><strong>Dagkosten (8u):</strong> €1,54-2,11</li>
                    <li><strong>Maandkosten:</strong> €46-63 (bij dagelijks 8u gebruik)</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    Ondanks hoger stroomverbruik is verwarmen met warmtepomp nog steeds 2-4x efficiënter dan elektrische kachels!
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingDown className="h-6 w-6 mr-2 text-green-600" />
                  Vergelijking met Andere Verwarmingsmethoden
                </h4>
                <p className="text-gray-700 mb-4">
                  Voor 3,5 kW warmteafgifte gedurende 8 uur (28 kWh warmte):
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Warmtepomp airco (SCOP 4,5):</strong> 6,2 kWh stroom = €1,87</li>
                  <li>• <strong>Elektrische kachel:</strong> 28 kWh stroom = €8,40 (350% duurder!)</li>
                  <li>• <strong>HR-combiketel (gas):</strong> 3,2 m³ gas = €4,64 (148% duurder)</li>
                  <li>• <strong>Oude CV-ketel (80%):</strong> 3,8 m³ gas = €5,51 (194% duurder)</li>
                </ul>
                <p className="mt-4 font-semibold text-green-700">
                  Een warmtepomp airco is verreweg de goedkoopste manier om te verwarmen - zelfs goedkoper dan gas!
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Rekenvoorbeelden: Wat Kost Mijn Airco Echt?
              </h2>

              <p>
                Laten we met concrete voorbeelden berekenen wat verschillende scenario's kosten voor een gemiddeld huishouden
                in Limburg.
              </p>

              <div className="space-y-8 my-8">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Scenario 1: Airco voor Slaapkamer (Alleen Koelen)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Specificaties:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Capaciteit: 2,5 kW</li>
                        <li>• Energielabel: A++ (SEER 7,5)</li>
                        <li>• Gebruik: Alleen 's nachts (8 uur), 90 nachten per zomer</li>
                        <li>• Elektriciteitstarief: €0,30/kWh</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Berekening:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Verbruik/uur: 2,5 ÷ 7,5 = 0,33 kW</li>
                        <li>• Verbruik/nacht: 0,33 × 8 = 2,67 kWh</li>
                        <li>• Kosten/nacht: 2,67 × €0,30 = €0,80</li>
                        <li>• <strong>Zomerkosten: 90 × €0,80 = €72</strong></li>
                        <li>• <strong>Jaarkosten: €72</strong> (alleen koelen)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 mt-4">
                    <p className="text-gray-700"><strong>Conclusie:</strong> Een complete zomer slapen in een koele slaapkamer kost €72 - minder dan €0,80 per nacht. Dat is comfort voor een habbekrats!</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Scenario 2: Airco voor Woonkamer (Koelen + Verwarmen)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Specificaties:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Capaciteit: 3,5 kW</li>
                        <li>• Energielabel: A+++ (SEER 8,5, SCOP 5,0)</li>
                        <li>• Koelen: 8 uur/dag, 90 dagen zomer</li>
                        <li>• Verwarmen: 8 uur/dag, 150 dagen winter</li>
                        <li>• Elektriciteitstarief: €0,30/kWh</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Berekening:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Koelen:</strong></li>
                        <li>• Verbruik: 3,5 ÷ 8,5 = 0,41 kW/uur</li>
                        <li>• Dagkosten: 0,41 × 8 × €0,30 = €0,99</li>
                        <li>• Zomerkosten: 90 × €0,99 = €89</li>
                        <li><strong>Verwarmen:</strong></li>
                        <li>• Verbruik: 3,5 ÷ 5,0 = 0,70 kW/uur</li>
                        <li>• Dagkosten: 0,70 × 8 × €0,30 = €1,68</li>
                        <li>• Winterkosten: 150 × €1,68 = €252</li>
                        <li>• <strong>Jaarkosten: €89 + €252 = €341</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 mt-4">
                    <p className="text-gray-700">
                      <strong>Conclusie:</strong> Voor €341 per jaar heeft u het hele jaar door perfect klimaat in uw woonkamer.
                      Vergeleken met gas (€800+) of elektrische verwarming (€1.500+) bespaart u €460-1.160 per jaar!
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Scenario 3: Multi-Split voor Hele Woning (Intensief Gebruik)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Specificaties:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Systeem: 3 binnenunits (2,5 + 3,5 + 2,5 kW = 8,5 kW totaal)</li>
                        <li>• Energielabel: A++ (SEER 7,8, SCOP 4,6)</li>
                        <li>• Koelen: 10 uur/dag, 100 dagen</li>
                        <li>• Verwarmen: 12 uur/dag, 180 dagen</li>
                        <li>• Elektriciteitstarief: €0,30/kWh</li>
                        <li>• Gelijktijdigheid: 70% (niet alle units tegelijk op max)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Berekening:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Effectief vermogen: 8,5 × 0,7 = 5,95 kW</li>
                        <li><strong>Koelen:</strong></li>
                        <li>• Verbruik: 5,95 ÷ 7,8 = 0,76 kW/uur</li>
                        <li>• Dagkosten: 0,76 × 10 × €0,30 = €2,29</li>
                        <li>• Zomerkosten: 100 × €2,29 = €229</li>
                        <li><strong>Verwarmen:</strong></li>
                        <li>• Verbruik: 5,95 ÷ 4,6 = 1,29 kW/uur</li>
                        <li>• Dagkosten: 1,29 × 12 × €0,30 = €4,65</li>
                        <li>• Winterkosten: 180 × €4,65 = €837</li>
                        <li>• <strong>Jaarkosten: €229 + €837 = €1.066</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 mt-4">
                    <p className="text-gray-700">
                      <strong>Conclusie:</strong> Voor €1.066 per jaar verwarmt én koelt u uw hele woning. Vergeleken met
                      gas verwarming (€1.800+) + elektrische airco koeling (€300) bespaart u ruim €1.000 per jaar!
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Inverter vs On/Off: Het Grote Verschil
              </h2>

              <p>
                Het type compressor heeft enorme impact op het stroomverbruik. Laten we het verschil tussen een moderne
                inverter airco en een oudere on/off airco verduidelijken.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">❌ On/Off Airco (Oudere Technologie)</h4>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li><strong>Werking:</strong> Compressor draait op 100% of 0% (aan/uit)</li>
                    <li><strong>Stroompieken:</strong> Hoge stroompieken bij elke start (tot 5x nominaal vermogen)</li>
                    <li><strong>Temperatuurschommelingen:</strong> ±2-3°C fluctuaties</li>
                    <li><strong>Geluid:</strong> Luid bij starten, stil wanneer uit</li>
                    <li><strong>Levensduur:</strong> Korter (8-10 jaar) door vele start/stop cycli</li>
                    <li><strong>Efficiency:</strong> SEER 5,5-6,5 / SCOP 3,0-3,5</li>
                  </ul>
                  <div className="bg-red-100 rounded-lg p-4 mt-4">
                    <p className="font-bold text-red-900 mb-2">Dagverbruik Voorbeeld (8u koelen, 3,5 kW):</p>
                    <p className="text-red-800">3,5 ÷ 6,0 × 8 = 4,67 kWh → €1,40 per dag</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-4">✅ Inverter Airco (Moderne Technologie)</h4>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li><strong>Werking:</strong> Compressor past toerental aan (20-100%)</li>
                    <li><strong>Gelijkmatig verbruik:</strong> Geen stroompieken, constant laag toerental</li>
                    <li><strong>Stabiele temperatuur:</strong> ±0,5°C nauwkeurigheid</li>
                    <li><strong>Geluid:</strong> Zeer stil en constant niveau</li>
                    <li><strong>Levensduur:</strong> Langer (15-20 jaar) door geleidelijke werking</li>
                    <li><strong>Efficiency:</strong> SEER 7,5-9,0 / SCOP 4,5-5,5</li>
                  </ul>
                  <div className="bg-green-100 rounded-lg p-4 mt-4">
                    <p className="font-bold text-green-900 mb-2">Dagverbruik Voorbeeld (8u koelen, 3,5 kW):</p>
                    <p className="text-green-800">3,5 ÷ 8,5 × 8 = 3,29 kWh → €0,99 per dag</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 my-8 border-2 border-yellow-300">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">Besparing Inverter vs On/Off</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between items-center border-b border-yellow-200 pb-2">
                    <span><strong>Dagbesparing (8u gebruik):</strong></span>
                    <span className="font-bold text-yellow-700">€0,41 (29% minder)</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-yellow-200 pb-2">
                    <span><strong>Maandbesparing (30 dagen):</strong></span>
                    <span className="font-bold text-yellow-700">€12,30</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-yellow-200 pb-2">
                    <span><strong>Jaarbesparing (240 dagen gebruik):</strong></span>
                    <span className="font-bold text-yellow-700">€98,40</span>
                  </li>
                  <li className="flex justify-between items-center pt-2">
                    <span><strong>Besparing over 15 jaar:</strong></span>
                    <span className="font-bold text-orange-700 text-xl">€1.476</span>
                  </li>
                </ul>
                <p className="mt-6 font-semibold text-orange-900">
                  Een inverter airco kost weliswaar €200-400 meer in aanschaf, maar verdient dit terug in 2-4 jaar.
                  Koop nooit meer een on/off model!
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                10 Praktische Tips om 20-40% te Besparen
              </h2>

              <p>
                Met deze tips verlaagt u het stroomverbruik van uw airco zonder comfort in te leveren:
              </p>

              <div className="space-y-4 my-8">
                {[
                  {
                    number: 1,
                    title: 'Optimale Temperatuur Instellen',
                    description: 'Koelen: 24-26°C (niet kouder!). Verwarmen: 20-21°C (niet warmer!). Elk graadje scheelt 5-7% energie.',
                    savings: '5-15%'
                  },
                  {
                    number: 2,
                    title: 'Filters Regelmatig Reinigen',
                    description: 'Reinig filters elke 2-3 maanden. Vuile filters blokkeren luchtstroom en verhogen verbruik met 10-20%.',
                    savings: '10-20%'
                  },
                  {
                    number: 3,
                    title: 'Gebruik Eco/Energiebespaarmodus',
                    description: 'De eco-modus past temperatuur en ventilatorsnelheid automatisch aan voor maximale efficiency.',
                    savings: '10-15%'
                  },
                  {
                    number: 4,
                    title: 'Sluit Gordijnen/Zonwering Overdag',
                    description: 'Bij koelen: hou hitte buiten met zonwering. Bij verwarmen: laat zon binnen, sluit gordijnen \'s avonds.',
                    savings: '15-25%'
                  },
                  {
                    number: 5,
                    title: 'Verbeter Woningisolatie',
                    description: 'Dubbel glas, dakisolatie en spouwmuurisolatie verlagen warmteverlies met 30-50%. Grootste impact!',
                    savings: '30-50%'
                  },
                  {
                    number: 6,
                    title: 'Gebruik Timers en Schema\'s',
                    description: 'Schakel airco uit wanneer u weg bent. Gebruik wekelijkse schema\'s voor automatisch aan/uit.',
                    savings: '10-20%'
                  },
                  {
                    number: 7,
                    title: 'Sluit Deuren van Ongebruikte Kamers',
                    description: 'Beperk het te koelen/verwarmen volume. Kleinere ruimte = lager verbruik.',
                    savings: '10-15%'
                  },
                  {
                    number: 8,
                    title: 'Jaarlijks Professioneel Onderhoud',
                    description: 'Laat jaarlijks onderhoud uitvoeren: koudemiddel check, reiniging warmtewisselaars, efficiency test.',
                    savings: '5-10%'
                  },
                  {
                    number: 9,
                    title: 'Optimale Plaatsing Buitenunit',
                    description: 'Zorg voor schaduw op buitenunit in zomer (niet direct zonlicht) en vrije luchtstroom rondom.',
                    savings: '5-10%'
                  },
                  {
                    number: 10,
                    title: 'Upgrade naar A+++ Model',
                    description: 'Als uw airco ouder dan 10 jaar is: upgrade naar A+++ model met SCOP  meer dan 5,0. Terugverdientijd 3-5 jaar.',
                    savings: '30-40%'
                  }
                ].map((tip) => (
                  <div key={tip.number} className="bg-white rounded-lg shadow-md p-6 flex items-start hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {tip.number}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{tip.title}</h4>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold ml-4 flex-shrink-0">
                          {tip.savings}
                        </span>
                      </div>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-8 my-8 border border-purple-200">
                <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                  <TrendingDown className="h-7 w-7 mr-3 text-purple-600" />
                  Cumulatief Besparingseffect
                </h4>
                <p className="text-gray-700 mb-4">
                  Door meerdere tips te combineren, kunt u het verbruik met 20-40% verlagen:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Basismaatregelen</strong> (tips 1, 2, 3, 6): 20-25% besparing</li>
                  <li>• <strong>+ Isolatie/zonwering</strong> (tips 4, 5, 7): Extra 15-20% besparing</li>
                  <li>• <strong>+ Onderhoud/optimalisatie</strong> (tips 8, 9): Extra 5-10% besparing</li>
                  <li>• <strong>+ Upgrade A+++</strong> (tip 10): Extra 20-30% besparing bij oude airco</li>
                </ul>
                <div className="bg-purple-100 rounded-lg p-4 mt-4">
                  <p className="font-bold text-purple-900 text-lg">
                    Totaal besparingspotentieel: 40-60% voor oudere airco's, 20-30% voor moderne airco's
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wilt u Weten wat uw Airco Kost?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Gebruik onze gratis calculator of laat u adviseren door onze specialisten. We berekenen exact
            uw verbruik en kosten op basis van uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken uw Kosten
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Bel: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Stroomverbruik Airco
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bespaar tot 40% op uw Airco Kosten
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Ontdek hoe u uw stroomverbruik kunt verlagen met een moderne A+++ airco en slimme besparingstips.
            Gratis advies en besparingsanalyse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/merken"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Zap className="h-6 w-6 mr-2" />
              Bekijk Zuinige Modellen
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Besparingsadvies
            </Link>
          </div>
          <p className="text-blue-100">
            <strong>Direct contact?</strong> Bel{' '}
            <a href="tel:0462021430" className="underline hover:text-white font-semibold">
              046 202 1430
            </a>{' '}
            of WhatsApp{' '}
            <a href="https://wa.me/31636481054" className="underline hover:text-white font-semibold">
              06 36481054
            </a>
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Gerelateerde Informatie</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/seo/pillar-4-energie-besparen/verwarmen-met-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Verwarmen met airco - warmtepomp efficiency
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/scop-waarde-uitgelegd" className="text-blue-600 hover:text-blue-700 hover:underline">
              → SCOP waarde uitgelegd
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/energielabel-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → A+++ energielabel airco
            </Link>
            <Link to="/capaciteit-calculator" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Bereken ideale capaciteit en kosten
            </Link>
            <Link to="/merken" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Onze energiezuinige A+++ modellen
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Persoonlijk advies aanvragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StroomverbruikAirco;
