import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Home, Wind, Zap, Phone, Calculator, Award, TrendingUp, Settings } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const MultiSplitAircoInstallatie: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Installatie', path: '/aircos' },
    { label: 'Multi-split' }
  ];

  const usps = [
    {
      icon: <Home className="h-12 w-12 text-sky-500" />,
      title: "Meerdere Ruimtes",
      description: "2-8 binnenunits op één buitenunit - ideaal voor hele woning"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Kostenefficiënt",
      description: "30% goedkoper dan meerdere single-splits, efficiënter energieverbruik"
    },
    {
      icon: <Settings className="h-12 w-12 text-sky-500" />,
      title: "Individuele Regeling",
      description: "Elke kamer apart instelbaar, iedereen zijn eigen temperatuur"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Nette Afwerking",
      description: "Één buitenunit, minimale gevelimpact, professioneel leidingwerk"
    }
  ];

  const faqs = [
    {
      question: "Wat is een multi-split airco en hoe werkt het?",
      answer: "Een multi-split systeem heeft meerdere binnenunits (2-8 stuks) aangesloten op één buitenunit. Elk binnenunit kan apart bediend worden en heeft zijn eigen temperatuurinstelling. De buitenunit verdeelt intelligente het koudemiddel over de binnenunits op basis van behoefte. Bijvoorbeeld: woonkamer vraagt koeling, slaapkamer verwarming, keuken uit - de multi-split regelt dit allemaal simultaan. Ideaal voor woningen waar je meerdere kamers wilt klimatiseren zonder meerdere buitenunits aan de gevel."
    },
    {
      question: "Wat zijn de kosten van een multi-split airco installatie?",
      answer: "Multi-split kosten hangen af van aantal binnenunits en capaciteit. 2 units (bijv. woonkamer + slaapkamer): €3.800-5.200. 3 units (woonkamer + 2 slaapkamers): €5.200-6.800. 4 units (hele benedenverdieping): €6.500-8.500. 5+ units (hele woning): €8.000-12.000. Prijs is inclusief professionele installatie, leidingwerk, elektrische aansluiting en garantie. Multi-split is 25-35% goedkoper dan evenveel single-splits omdat je maar één buitenunit hebt. Daarnaast bespaart u op elektriciteitsaansluiting (één i.p.v. meerdere groepen) en installatie-uren."
    },
    {
      question: "Kan ik later nog extra binnenunits toevoegen?",
      answer: "Ja, maar met voorwaarden. De buitenunit moet vanaf het begin voldoende capaciteit hebben. Bijvoorbeeld: 5.0 kW buitenunit kan maximaal 6.0 kW aan binnenunits aansturen (100-120% regel). Als u start met 2x 2.5kW units (5.0kW totaal) kunt u later 1x 1.0kW unit toevoegen. Capaciteit uitbreiden door buitenunit te vervangen is ook mogelijk maar duurder. Wij adviseren: denk vooruit en installeer buitenunit met reserve capaciteit. Aanleggen extra leidingen naar toekomstige locaties tijdens initiële installatie bespaart later veel kosten."
    },
    {
      question: "Is multi-split energiezuiniger dan meerdere single-splits?",
      answer: "Ja, multi-split is 15-25% energiezuiniger. Redenen: 1) Eén compressor die slim vermogen verdeelt is efficiënter dan meerdere kleine compressoren. 2) Bij gedeeltelijke belasting (niet alle units aan) draait de compressor op optimaal toerental. 3) Moderne multi-split heeft intelligente load balancing en dual inverter technologie. 4) Minder stilstandsverliezen. Concreet: 3 single-splits verbruiken €450/jaar, vergelijkbare multi-split €340-380/jaar. Besparing: €70-110 per jaar. Bij gemiddelde levensduur 15 jaar totaal €1.050-1.650 besparing op energie."
    },
    {
      question: "Hoeveel binnenunits kan ik maximaal aansluiten?",
      answer: "Afhankelijk van systeem en merk. Standaard multi-split: 2-5 binnenunits. Grote multi-split: 6-8 binnenunits. Daikin en Mitsubishi hebben speciale systemen tot 9 units. Let op capaciteitsregel: totale capaciteit binnenunits mag 100-120% zijn van buitenunit capaciteit. Voorbeeld: 10kW buitenunit kan 11-12kW aan binnenunits aansturen (omdat nooit alle units simultaan op maximum draaien). Voor meer dan 8 units adviseren wij VRV/VRF systeem (commercieel) of twee separate multi-split systemen."
    },
    {
      question: "Wat gebeurt er als één binnenunit stuk gaat?",
      answer: "Bij storing aan één binnenunit blijven de andere units gewoon werken. Alleen de defecte unit functioneert niet. Dit is een voordeel van multi-split: gedeeltelijke redundantie. Als de buitenunit defect is, werkt het hele systeem niet (nadeel vs. meerdere single-splits). Preventief onderhoud reduceert storingskans drastisch. Premium merken (Daikin, Mitsubishi) hebben self-diagnostics die problemen vroegtijdig detecteren. Bij onderhoudscontract hebben wij reserve units beschikbaar voor kritieke situaties (bijv. hittegolf of winter)."
    },
    {
      question: "Hoe lang duurt een multi-split installatie?",
      answer: "Installatieduur hangt af van aantal units en woningcomplexiteit. 2-3 units: 6-10 uur (1 werkdag). 4-5 units: 10-16 uur (1-2 werkdagen). 6-8 units: 16-24 uur (2-3 werkdagen). Complexere situaties (lange leidinglengtes, verdiepingen, verborgen leidingwerk) kunnen langer duren. Planning: binnenunits plaatsen, buitenunit monteren, leidingen trekken, elektrisch aansluiten, vacuümeren, vullen met koudemiddel, testen. Wij werken netjes, schoon en efficiënt. Al het afval wordt professioneel afgevoerd."
    },
    {
      question: "Is multi-split geschikt voor een hele woning klimatiseren?",
      answer: "Ja, uitstekend geschikt! Multi-split is de ideale oplossing voor gezinswoningen. Typische configuratie: woonkamer (3.5kW), keuken (2.5kW), slaapkamer ouders (2.5kW), kinderkamer 1 (2.0kW), kinderkamer 2 (2.0kW) = 12.5kW totaal op één 12kW buitenunit. Voordelen: elke kamer eigen temperatuur, 's nachts alleen slaapkamers aan (energiebesparing), zomer koelen + winter verwarmen, één buitenunit (nette gevel). Investering hele woning: €8.000-12.000. Energiekosten: €600-900/jaar voor koelen én verwarmen. Vergelijk: elektrische verwarming zou €1.500-2.000/jaar kosten."
    }
  ];

  return (
    <>
      <MetaTags
        title="Multi-split Airco Installatie Limburg | 2-8 Units op 1 Buitenunit | StayCool"
        description="Multi-split airco ✓ Meerdere kamers op 1 buitenunit ✓ 30% goedkoper ✓ Individueel regelbaar ✓ 10 jaar garantie. Gratis advies!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Multi-split Airco Installatie",
          description: "Professionele installatie van multi-split airconditioning. Meerdere binnenunits op één buitenunit voor maximaal comfort en efficiency in uw hele woning.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "+31462021430",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          offers: {
            "@type": "Offer",
            priceRange: "€3800-€12000",
            priceCurrency: "EUR"
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Multi-split Airco Installatie - Hele Woning Klimatiseren
            </h1>
            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Klimatiseer uw hele woning met één systeem. 2-8 binnenunits op één buitenunit, elke kamer individueel regelbaar. 30% kostenefficiënter dan aparte units. Vanaf €3.800 inclusief installatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                Gratis Advies Multi-split
              </Link>
              <Link to="/capaciteit-calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Calculator className="h-5 w-5 mr-2" />
                Bereken Capaciteit
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sky-50">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>2-8 Units Mogelijk</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>30% Goedkoper</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Individueel Regelbaar</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Waarom Multi-split de Slimme Keuze is voor Meerdere Ruimtes
              </h2>

              <p className="text-gray-600 mb-6">
                Als u meerdere ruimtes in uw woning of bedrijf wilt klimatiseren, staat u voor een belangrijke keuze: meerdere aparte single-split systemen of één multi-split systeem? Multi-split biedt aanzienlijke voordelen in kosten, efficiëntie en esthetiek, vooral vanaf 3 of meer ruimtes.
              </p>

              <div className="bg-sky-50 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  <TrendingUp className="inline h-6 w-6 text-sky-500 mr-2" />
                  Kostenanalyse: Multi-split vs. Meerdere Single-splits
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-sky-500 pl-4">
                    <p className="font-semibold text-gray-900 mb-2">Scenario: 3 Kamers Klimatiseren</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">3× Single-split</p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• 3× Installatie: €7.200</li>
                          <li>• 3× Buitenunits aan gevel</li>
                          <li>• 3× Elektrische groepen</li>
                          <li>• Energiekosten: €450/jaar</li>
                          <li>• Onderhoud: €360/jaar (3x €120)</li>
                        </ul>
                        <p className="text-gray-900 font-semibold mt-2">Totaal 5 jaar: €11.250</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded">
                        <p className="font-semibold text-green-600 mb-2">1× Multi-split (3 units)</p>
                        <ul className="space-y-1 text-gray-600 text-sm">
                          <li>• Installatie: €5.400 (-25%)</li>
                          <li>• 1× Buitenunit (netter)</li>
                          <li>• 1× Elektrische groep</li>
                          <li>• Energiekosten: €360/jaar (-20%)</li>
                          <li>• Onderhoud: €180/jaar</li>
                        </ul>
                        <p className="text-green-600 font-semibold mt-2">Totaal 5 jaar: €7.200 (€4.050 besparing!)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Hoe Werkt een Multi-split Systeem?
              </h2>

              <p className="text-gray-600 mb-6">
                Een multi-split systeem is technisch geavanceerder dan een single-split. De buitenunit heeft een krachtige inverter compressor die intelligent koudemiddel verdeelt over meerdere binnenunits. Elk binnenunit communiceert real-time met de buitenunit over zijn koelbehoefte.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-sky-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Intelligente Vermogensverdeling</h4>
                  <p className="text-gray-600 mb-4">
                    De buitenunit past continu het vermogen aan op basis van de gecombineerde vraag van alle binnenunits. Voorbeeld situatie:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Woonkamer:</strong> 28°C → vraagt 80% vermogen (koelen)</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Slaapkamer:</strong> 22°C → vraagt 20% vermogen (onderhouden)</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Keuken:</strong> Uitgeschakeld → 0% vermogen</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    De compressor draait op 60% capaciteit (optimaal efficiënt) en verdeelt dit over woonkamer (80% van 60% = 48% totaal) en slaapkamer (20% van 60% = 12% totaal).
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Individuele Controle per Kamer</h4>
                  <p className="text-gray-600 mb-4">
                    Elk binnenunit heeft zijn eigen:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Temperatuursensor en instelbaar setpoint</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Afstandsbediening of app control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Timer en slaapstand functies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ventilatorsnelheid aanpassing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Luchtrichting (lamellen) instelling</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    <strong>Resultaat:</strong> Iedereen zijn eigen ideale temperatuur zonder compromis. Woonkamer 21°C, slaapkamer 18°C, studeerkamer 23°C - allemaal tegelijk perfect.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Configuratie Voorbeelden voor Verschillende Woningen
              </h2>

              <p className="text-gray-600 mb-6">
                Multi-split systemen zijn modulair en volledig aanpasbaar aan uw woonsituatie. Hier zijn typische configuraties met capaciteiten en investeringen:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">Appartement / Klein Huis (2 units)</h4>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 font-semibold rounded">€3.800-5.200</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Configuratie</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Woonkamer: 3.5 kW (25-35m²)</li>
                        <li>• Slaapkamer: 2.5 kW (15-20m²)</li>
                        <li>• Buitenunit: 6.0 kW</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Geschikt voor</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Appartement</li>
                        <li>• Kleine rijwoning</li>
                        <li>• Twee cruciale ruimtes</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    <em>Jaarlijkse energiekosten: €180-250 (koelen + verwarmen)</em>
                  </p>
                </div>

                <div className="border-2 border-sky-500 rounded-lg p-6 bg-sky-50">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">Standaard Gezinswoning (4 units)</h4>
                    <span className="px-3 py-1 bg-sky-600 text-white font-semibold rounded">€6.500-8.500</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Configuratie</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Woonkamer: 3.5 kW (30-40m²)</li>
                        <li>• Keuken: 2.5 kW (15-20m²)</li>
                        <li>• Slaapkamer 1: 2.5 kW (15-20m²)</li>
                        <li>• Slaapkamer 2: 2.0 kW (12-16m²)</li>
                        <li>• Buitenunit: 10.0 kW</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Geschikt voor</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Tussenwoning</li>
                        <li>• Hoekwoning</li>
                        <li>• Complete benedenverdieping + master bedroom</li>
                        <li>• Gezin met 2-3 kinderen</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4 text-sm font-semibold">
                    Meest populaire configuratie! Jaarlijkse energiekosten: €450-600 vs. €1.200 elektrische verwarming = €600-750 besparing/jaar
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">Grote Woning / Villa (6-8 units)</h4>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 font-semibold rounded">€9.500-12.000</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Configuratie</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Woonkamer: 5.0 kW (40-50m²)</li>
                        <li>• Keuken: 3.5 kW (20-30m²)</li>
                        <li>• Studeerkamer: 2.5 kW (15-20m²)</li>
                        <li>• Master bedroom: 3.5 kW (20-30m²)</li>
                        <li>• Kinderkamer 1: 2.5 kW</li>
                        <li>• Kinderkamer 2: 2.5 kW</li>
                        <li>• Bijkeuken/gang: 2.0 kW</li>
                        <li>• Buitenunit: 16.0 kW</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Geschikt voor</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Vrijstaande woning</li>
                        <li>• Villa</li>
                        <li>• Grote tussenwoning</li>
                        <li>• Complete klimatisering alle ruimtes</li>
                        <li>• Gezin 4+ personen</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    <em>Jaarlijkse energiekosten: €700-900 (hele woning klimatiseren). Bij  meer dan 8 units adviseren wij twee aparte multi-split systemen of VRV.</em>
                  </p>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Technische Specificaties en Limieten
              </h2>

              <p className="text-gray-600 mb-6">
                Multi-split systemen hebben technische beperkingen waar u rekening mee moet houden bij ontwerp en installatie. Onze adviseurs berekenen dit exact, maar deze richtlijnen geven inzicht:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Leidingwerk Specificaties</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      <strong className="text-gray-900">Maximale leidinglengte:</strong><br/>
                      Standaard systeem: 50-70 meter totaal<br/>
                      High-performance: 80-100 meter totaal<br/>
                      <span className="text-sm text-gray-500">Per binnenunit: max 25 meter vanaf splitsing</span>
                    </li>
                    <li>
                      <strong className="text-gray-900">Hoogteverschil:</strong><br/>
                      Binnenunit boven buitenunit: max 15-20 meter<br/>
                      Binnenunit onder buitenunit: max 10 meter<br/>
                      <span className="text-sm text-gray-500">Tussen binnenunits onderling: max 15 meter</span>
                    </li>
                    <li>
                      <strong className="text-gray-900">Leidingdiameter:</strong><br/>
                      Hoofdleiding: 12.7-15.9mm<br/>
                      Aftakkingen: 6.35-9.52mm<br/>
                      <span className="text-sm text-gray-500">Afhankelijk van capaciteit en afstand</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Capaciteit Regels</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      <strong className="text-gray-900">100-120% regel:</strong><br/>
                      Totale capaciteit binnenunits mag 100-120% zijn van buitenunit.<br/>
                      <span className="text-sm text-gray-500">Voorbeeld: 10kW buitenunit → max 11-12kW binnenunits totaal</span>
                    </li>
                    <li>
                      <strong className="text-gray-900">Minimum per unit:</strong><br/>
                      Elke binnenunit moet minimaal 15-20% van buitenunit capaciteit zijn.<br/>
                      <span className="text-sm text-gray-500">Voorbeeld: 10kW buitenunit → min 1.8kW per binnenunit</span>
                    </li>
                    <li>
                      <strong className="text-gray-900">Simultane werking:</strong><br/>
                      Alle units kunnen tegelijk aan, maar niet allemaal op 100%.<br/>
                      <span className="text-sm text-gray-500">Systeem verdeelt beschikbare capaciteit intelligent</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 mt-12">
                Installatieproces Multi-split Systeem
              </h2>

              <p className="text-gray-600 mb-6">
                Een multi-split installatie is complexer dan single-split door het leidingnetwerk en elektrische aansluiting. Onze F-gas gecertificeerde installateurs werken volgens strikte protocollen:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Planning en Ontwerp</h5>
                    <p className="text-gray-600">Bepalen optimale positie binnenunits, leidingtraject tekenen, elektrisch schema maken. Planning gericht op kortste leidingen, minimale zichtbaarheid, beste prestaties.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Binnenunits Monteren</h5>
                    <p className="text-gray-600">Alle binnenunits worden gemonteerd op optimale hoogte (2.2-2.5m) en positie. Muurplaten waterpas, units stevig bevestigd. Condensafvoer voorzien per unit.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Buitenunit Plaatsen</h5>
                    <p className="text-gray-600">Buitenunit op stabiel fundament, vaak groter dan single-split unit. Voldoende vrije ruimte rondom voor luchtcirculatie. Anti-vibratie dempers voor geluidsreductie.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Leidingnetwerk Aanleggen</h5>
                    <p className="text-gray-600">Hoofdleiding naar centrale verdeler, van daaruit aftakkingen naar elke binnenunit. Leidingen geïsoleerd, beschermd in goten of verborgen in spouw/schacht. Professionele lasverbindingen op aftakkingen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Elektrische Aansluiting</h5>
                    <p className="text-gray-600">Dedicated 16A of 20A groep in meterkast (afhankelijk van vermogen). Bekabeling naar buitenunit en communicatiekabels naar alle binnenunits. Alles volgens NEN-normen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Vacuümeren en Vullen</h5>
                    <p className="text-gray-600">Compleet systeem vacuümeren (min. 1 uur) om vocht en lucht te verwijderen. Lektest op alle verbindingen. Vullen met koudemiddel volgens fabrieksspecificaties (grotere hoeveelheid dan single-split).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Inregelen en Testen</h5>
                    <p className="text-gray-600">Elk binnenunit testen (koelen, verwarmen, ventileren). Luchtstromingen optimaliseren. Temperatuurverschillen tussen units controleren. Uitgebreide instructie bediening per unit en centrale besturing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Wilt u uw Hele Woning Klimatiseren met één Systeem?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Vraag gratis advies aan. Wij berekenen de optimale configuratie en maken een offerte op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
                <Phone className="h-6 w-6 mr-2" />
                Gratis Multi-split Advies
              </Link>
              <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
                046 202 1430
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde Vragen Multi-split Airco
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Andere Installatie Opties
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/seo/pillar-1-installatie-services/airco-installatie-woonkamer" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Single-split Woonkamer</h3>
                <p className="text-gray-600 mb-4">Ideaal voor één ruimte</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/seo/pillar-1-installatie-services/airco-installatie-slaapkamer" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Slaapkamer Airco</h3>
                <p className="text-gray-600 mb-4">Ultrastil voor perfecte nachtrust</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
              <Link to="/aircos" className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Alle Merken</h3>
                <p className="text-gray-600 mb-4">Vergelijk specificaties en prijzen</p>
                <span className="text-sky-600 font-semibold">Lees meer →</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MultiSplitAircoInstallatie;
