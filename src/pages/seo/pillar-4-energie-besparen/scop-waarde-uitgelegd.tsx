import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, TrendingUp, ThermometerSun, Award, Phone, Calculator, Info } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const SCOPWaardeUitgelegd: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Energie Besparen', path: '/seo/pillar-4-energie-besparen' },
    { label: 'SCOP Waarde Uitgelegd' }
  ];

  const usps = [
    {
      icon: <Info className="h-12 w-12 text-blue-600" />,
      title: 'SCOP = Seizoensrendement',
      description: 'De SCOP (Seasonal Coefficient of Performance) geeft het gemiddelde rendement weer over een heel verwarmingsseizoen.'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-500" />,
      title: 'SCOP 4.5 = 450% Rendement',
      description: 'Een SCOP van 4,5 betekent dat u 4,5 kW warmte krijgt uit 1 kW elektriciteit. Dat is 450% efficiency.'
    },
    {
      icon: <ThermometerSun className="h-12 w-12 text-orange-500" />,
      title: 'Temperatuurafhankelijk',
      description: 'SCOP houdt rekening met wisselende buitentemperaturen tijdens het verwarmingsseizoen voor realistische prestaties.'
    },
    {
      icon: <Award className="h-12 w-12 text-purple-600" />,
      title: 'A+++ = SCOP  meer dan 5.1',
      description: 'Energielabel A+++ vereist een SCOP van minimaal 5,1. De beste warmtepompen halen SCOP 5,2-5,5.'
    }
  ];

  const faqs = [
    {
      question: 'Wat is het verschil tussen COP en SCOP?',
      answer: 'COP (Coefficient of Performance) is het momentane rendement bij een specifieke buitentemperatuur, meestal gemeten bij 7°C. SCOP (Seasonal COP) is het gemiddelde rendement over een heel verwarmingsseizoen, rekening houdend met temperatuurschommelingen van -10°C tot +15°C. SCOP geeft dus een realistischer beeld van de werkelijke prestaties. Een airco met COP 5,5 bij 7°C kan een SCOP van 4,8 hebben omdat deze bij lagere temperaturen minder efficient werkt. Voor een eerlijke vergelijking kijkt u altijd naar de SCOP-waarde.'
    },
    {
      question: 'Waarom is SCOP belangrijker dan COP voor verwarmen?',
      answer: 'COP wordt gemeten onder ideale omstandigheden (meestal 7°C buitentemperatuur), wat niet representatief is voor een compleet verwarmingsseizoen. In Nederland hebben we temperaturen van -10°C tot +15°C tijdens het stookseizoen. SCOP houdt hier rekening mee door het gemiddelde rendement te berekenen over diverse temperaturen. Dit geeft een veel realistischer beeld van uw werkelijke energiekosten. Een hoge COP bij 7°C zegt niets over prestaties bij -5°C, terwijl SCOP dit wel meeneemt.'
    },
    {
      question: 'Wat is een goede SCOP waarde voor een warmtepomp airco?',
      answer: 'Voor Nederlands klimaat adviseren we een minimale SCOP van 4,0. Dit betekent 400% rendement - u krijgt 4 kW warmte uit 1 kW stroom. Goede mid-range modellen halen 4,2-4,5. Premium modellen zoals Daikin Emura, Mitsubishi Diamond en LG Artcool Mirror behalen 4,6-5,2. Voor A+++ energielabel is minimaal SCOP 5,1 vereist. In Limburg, met relatief milde winters, presteren deze systemen vaak nog beter dan hun SCOP aangeeft omdat onze gemiddelde wintertemperaturen hoger liggen dan het Europese testklimaat.'
    },
    {
      question: 'Hoe wordt SCOP gemeten en berekend?',
      answer: 'SCOP wordt gemeten volgens Europese norm EN14825. De meting vindt plaats bij vier verschillende buitentemperaturen: -7°C, 2°C, 7°C en 12°C. Deze temperaturen vertegenwoordigen een gemiddeld Europees klimaat (Straatsburg, Frankrijk). Elk meetpunt krijgt een weging op basis van hoe vaak die temperatuur voorkomt tijdens een verwarmingsseizoen. Het gewogen gemiddelde van deze vier metingen vormt de SCOP. Voor warmer klimaat zoals Zuid-Europa wordt een andere temperatuurweging gebruikt (Athens), voor kouder klimaat (Helsinki) ook weer andere wegingen.'
    },
    {
      question: 'Vertaalt een hogere SCOP zich direct in lagere kosten?',
      answer: 'Ja, absoluut. Een hogere SCOP betekent direct lagere stroomkosten voor dezelfde hoeveelheid warmte. Voorbeeld: voor 10.000 kWh warmte per jaar heeft een airco met SCOP 4,0 in totaal 2.500 kWh stroom nodig (kosten: €750 bij €0,30/kWh). Een model met SCOP 5,0 heeft slechts 2.000 kWh nodig (kosten: €600). Het verschil van €150 per jaar stapelt zich op over de levensduur van 15 jaar tot €2.250 besparing. Daarom loont het vaak om te investeren in een model met hogere SCOP, zelfs als de aanschafprijs €400-600 hoger is.'
    },
    {
      question: 'Bereikt een airco in de praktijk de opgegeven SCOP?',
      answer: 'In de meeste gevallen wel, mits correct geïnstalleerd en gebruikt. De SCOP wordt gemeten onder gecontroleerde laboratoriumomstandigheden volgens strikte Europese normen. In de praktijk kunnen lokale omstandigheden de prestaties beïnvloeden. Factoren die SCOP positief beïnvloeden: mildere winters dan testklimaat (komt vaak voor in Nederland), goede isolatie waardoor de airco minder hard hoeft te werken, regelmatig onderhoud. Negatieve factoren: slechte plaatsing buitenunit, vervuilde filters, te kleine capaciteit waardoor de airco constant op maximum draait. Bij professionele installatie en normaal gebruik haalt u de opgegeven SCOP meestal wel.'
    },
    {
      question: 'Hoe verhoudt SCOP zich tot het energielabel?',
      answer: 'Het energielabel voor warmtepompen is direct gekoppeld aan de SCOP-waarde. De schaal loopt van A+++ (meest efficiënt) tot D (minst efficiënt). Verdeling voor verwarmen: A+++ = SCOP ≥5,1, A++ = SCOP 4,6-5,0, A+ = SCOP 4,0-4,5, A = SCOP 3,4-3,9, B = SCOP 3,1-3,3, C = SCOP 2,6-3,0, D = SCOP  minder dan 2,6. Wij raden minimaal A+ aan (SCOP ≥4,0), maar bij voorkeur A++ of A+++ voor optimale besparing. Het hogere energielabel vertaalt zich direct in lagere operationele kosten over de levensduur.'
    },
    {
      question: 'Is SCOP ook relevant voor koelen in de zomer?',
      answer: 'Voor koelen wordt niet SCOP maar SEER (Seasonal Energy Efficiency Ratio) gebruikt. Dit is het equivalent van SCOP maar dan voor koeling. SEER wordt gemeten bij temperaturen tussen 20°C en 35°C en geeft het gemiddelde koelrendement weer. Een hoge SCOP gaat meestal samen met een hoge SEER omdat beide afhangen van de kwaliteit van de compressor en warmtewisselaars. Topmodellen hebben SCOP 5,0+ en SEER 8,0+. Voor complete beoordeling van een airco kijkt u dus naar beide waarden: SCOP voor winter, SEER voor zomer.'
    }
  ];

  return (
    <>
      <MetaTags
        title="SCOP Waarde Uitgelegd - Seizoensrendement Warmtepomp | Limburg"
        description="SCOP waarde uitgelegd ✓ Seizoensrendement warmtepomp ✓ Verschil COP vs SCOP ✓ A+++ energielabel ✓ Beste SCOP airco's ✓ Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "SCOP Waarde Uitgelegd - Seizoensrendement Warmtepomp Airco",
          description: "Uitgebreide uitleg over SCOP (Seasonal Coefficient of Performance), het seizoensrendement van warmtepomp airco's. Verschil tussen COP en SCOP, energielabels en praktische tips.",
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            SCOP Waarde Uitgelegd - Seizoensrendement van Warmtepomp Airco's
          </h1>

          <p className="text-xl md:text-2xl text-blue-50 mb-8 max-w-4xl">
            Ontdek wat SCOP betekent en waarom deze waarde cruciaal is voor uw energiebesparing.
            Leer het verschil tussen COP en SCOP en welke SCOP-waarde u moet kiezen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis SCOP Advies
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Besparing
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-blue-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>SCOP 4.0-5.5 modellen</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>A+++ energielabel</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Realistisch rendement</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Expert uitleg</span>
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
              Wat is SCOP? De Belangrijkste Efficiëntie-indicator
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                SCOP staat voor <strong>Seasonal Coefficient of Performance</strong> en is de belangrijkste indicator voor de
                energie-efficiëntie van een warmtepomp airco. In tegenstelling tot de COP, die het rendement op één specifiek
                moment meet, geeft de SCOP het gemiddelde rendement weer over een compleet verwarmingsseizoen. Dit maakt SCOP
                veel relevanter voor het inschatten van uw werkelijke energiekosten.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 my-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-7 w-7 mr-3 text-blue-600" />
                  SCOP in Eenvoudige Termen
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  De SCOP geeft aan hoeveel kW warmte u gemiddeld krijgt uit 1 kW elektriciteit over een heel verwarmingsseizoen:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold text-blue-600 mr-3 text-xl">→</span>
                    <span><strong>SCOP 4,0:</strong> 1 kW stroom levert 4 kW warmte = 400% rendement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-blue-600 mr-3 text-xl">→</span>
                    <span><strong>SCOP 4,5:</strong> 1 kW stroom levert 4,5 kW warmte = 450% rendement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-blue-600 mr-3 text-xl">→</span>
                    <span><strong>SCOP 5,0:</strong> 1 kW stroom levert 5 kW warmte = 500% rendement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-blue-600 mr-3 text-xl">→</span>
                    <span><strong>SCOP 5,5:</strong> 1 kW stroom levert 5,5 kW warmte = 550% rendement</span>
                  </li>
                </ul>
                <p className="mt-6 font-semibold text-blue-900 text-lg">
                  Hoe hoger de SCOP, hoe efficiënter de warmtepomp en hoe lager uw energiekosten!
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Het Verschil tussen COP en SCOP
              </h2>

              <p>
                Veel mensen verwarren COP met SCOP, maar het verschil is belangrijk om te begrijpen. Laten we beide termen
                helder uitleggen.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                COP: Momentaan Rendement
              </h3>

              <p>
                COP (Coefficient of Performance) meet het rendement van een warmtepomp op één specifiek moment bij een vaste
                buitentemperatuur. De standaard COP-meting vindt plaats bij 7°C buitentemperatuur en 20°C binnentemperatuur.
                Dit is een "snapshot" - een momentopname die niet het hele verhaal vertelt.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Voorbeeld COP-meting:</h4>
                <p className="text-gray-700 mb-2">
                  Een airco heeft een COP van 5,5 bij 7°C buitentemperatuur. Dit betekent dat bij deze specifieke temperatuur
                  de warmtepomp 5,5 kW warmte levert uit 1 kW stroom.
                </p>
                <p className="text-gray-700 font-semibold mt-3">
                  ⚠️ Probleem: Bij -5°C kan diezelfde airco een COP van slechts 3,2 hebben. De COP-waarde zegt dus weinig
                  over de gemiddelde prestaties tijdens een compleet stookseizoen.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                SCOP: Seizoensrendement
              </h3>

              <p>
                SCOP (Seasonal COP) meet het gemiddelde rendement over een volledig verwarmingsseizoen. De meting vindt plaats
                bij vier verschillende buitentemperaturen die representatief zijn voor een Europees winterklimaat: -7°C, 2°C,
                7°C en 12°C. Elk meetpunt krijgt een weging op basis van hoe vaak die temperatuur voorkomt.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Voorbeeld SCOP-berekening:</h4>
                <p className="text-gray-700 mb-3">
                  Diezelfde airco met COP 5,5 bij 7°C heeft een SCOP van 4,8. Deze waarde is berekend door het gemiddelde
                  te nemen van metingen bij verschillende temperaturen:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bij -7°C: COP 3,2 (weging 6% van seizoen)</li>
                  <li>• Bij +2°C: COP 4,5 (weging 22% van seizoen)</li>
                  <li>• Bij +7°C: COP 5,5 (weging 35% van seizoen)</li>
                  <li>• Bij +12°C: COP 6,8 (weging 37% van seizoen)</li>
                </ul>
                <p className="text-gray-700 font-semibold mt-3">
                  ✓ Het gewogen gemiddelde geeft een realistisch beeld van prestaties over het hele seizoen: SCOP 4,8
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Waarom SCOP Belangrijker Is
              </h3>

              <ul className="list-disc pl-6 space-y-3 my-6">
                <li>
                  <strong>Realistische prestaties:</strong> SCOP houdt rekening met temperatuurschommelingen tijdens het seizoen,
                  niet alleen ideale omstandigheden.
                </li>
                <li>
                  <strong>Betere vergelijking:</strong> Alle fabrikanten gebruiken dezelfde testmethode (EN14825), waardoor
                  verschillende merken eerlijk vergeleken kunnen worden.
                </li>
                <li>
                  <strong>Nauwkeurige kostenberekening:</strong> Met SCOP kunt u uw verwachte energiekosten veel nauwkeuriger
                  berekenen dan met COP.
                </li>
                <li>
                  <strong>Energielabel gekoppeld aan SCOP:</strong> Het energielabel (A+++ tot D) is gebaseerd op SCOP, niet op COP.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Hoe Wordt SCOP Gemeten?
              </h2>

              <p>
                SCOP wordt gemeten volgens de Europese norm EN14825. Deze norm specificeert exact hoe metingen moeten plaatsvinden
                om eerlijke vergelijkingen tussen verschillende warmtepompen mogelijk te maken.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                De Testprocedure
              </h3>

              <p>
                De warmtepomp wordt getest bij vier specifieke buitentemperaturen die representatief zijn voor een gemiddeld
                Europees klimaat (gebaseerd op Straatsburg, Frankrijk):
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Buitentemperatuur</th>
                      <th className="px-6 py-4 text-left font-semibold">Weging in Seizoen</th>
                      <th className="px-6 py-4 text-left font-semibold">Representeert</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">-7°C</td>
                      <td className="px-6 py-4 text-gray-600">6%</td>
                      <td className="px-6 py-4 text-gray-600">Koude winterdagen</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">+2°C</td>
                      <td className="px-6 py-4 text-gray-600">22%</td>
                      <td className="px-6 py-4 text-gray-600">Koele winterdagen</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">+7°C</td>
                      <td className="px-6 py-4 text-gray-600">35%</td>
                      <td className="px-6 py-4 text-gray-600">Gemiddelde winterdagen</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">+12°C</td>
                      <td className="px-6 py-4 text-gray-600">37%</td>
                      <td className="px-6 py-4 text-gray-600">Milde winterdagen/overgang</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                De COP wordt bij elk van deze temperaturen gemeten. Vervolgens wordt het gewogen gemiddelde berekend op basis
                van de percentages. Dit gewogen gemiddelde is de SCOP.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Verschillende Klimaatzones
              </h3>

              <p>
                De Europese norm definieert drie klimaatzones met verschillende wegingen:
              </p>

              <ul className="list-disc pl-6 space-y-3 my-6">
                <li>
                  <strong>Warmer klimaat (Athens):</strong> Minder wegingen bij lage temperaturen, geschikt voor Zuid-Europa.
                  SCOP wordt gemeten bij -7°C (1%), +2°C (9%), +7°C (23%), +12°C (31%) en +20°C (36%).
                </li>
                <li>
                  <strong>Gemiddeld klimaat (Straatsburg):</strong> Standaard wegingen zoals hierboven beschreven,
                  representatief voor Midden-Europa inclusief Nederland.
                </li>
                <li>
                  <strong>Kouder klimaat (Helsinki):</strong> Meer wegingen bij lage temperaturen, geschikt voor Noord-Europa.
                  SCOP wordt gemeten bij -22°C (3%), -7°C (10%), +2°C (26%), +7°C (34%) en +12°C (27%).
                </li>
              </ul>

              <p>
                Voor Nederland gebruiken we de Straatsburg-norm, hoewel ons klimaat eigenlijk iets milder is. Dit betekent
                dat warmtepompen in Nederland in de praktijk vaak iets beter presteren dan de opgegeven SCOP suggereert.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                SCOP en Energielabel
              </h2>

              <p>
                Het energielabel voor warmtepompen is direct gekoppeld aan de SCOP-waarde. Hoe hoger de SCOP, hoe hoger
                het energielabel, en hoe lager uw operationele kosten.
              </p>

              <div className="my-8 space-y-4">
                <div className="flex items-center bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg p-4 shadow-md">
                  <div className="w-24 flex-shrink-0 font-bold text-2xl text-center">A+++</div>
                  <div className="flex-grow">
                    <p className="font-semibold">SCOP ≥ 5,1</p>
                    <p className="text-sm text-green-100">Meest efficiënt - Topmodellen Daikin, Mitsubishi, LG</p>
                  </div>
                </div>

                <div className="flex items-center bg-gradient-to-r from-green-500 to-lime-500 text-white rounded-lg p-4 shadow-md">
                  <div className="w-24 flex-shrink-0 font-bold text-2xl text-center">A++</div>
                  <div className="flex-grow">
                    <p className="font-semibold">SCOP 4,6 - 5,0</p>
                    <p className="text-sm text-green-100">Zeer efficiënt - Premium mid-range modellen</p>
                  </div>
                </div>

                <div className="flex items-center bg-gradient-to-r from-lime-500 to-yellow-500 text-white rounded-lg p-4 shadow-md">
                  <div className="w-24 flex-shrink-0 font-bold text-2xl text-center">A+</div>
                  <div className="flex-grow">
                    <p className="font-semibold">SCOP 4,0 - 4,5</p>
                    <p className="text-sm text-yellow-100">Efficiënt - Goede basis modellen (minimaal aanbevolen)</p>
                  </div>
                </div>

                <div className="flex items-center bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-lg p-4 shadow-md">
                  <div className="w-24 flex-shrink-0 font-bold text-2xl text-center">A</div>
                  <div className="flex-grow">
                    <p className="font-semibold">SCOP 3,4 - 3,9</p>
                    <p className="text-sm text-orange-100">Gemiddeld - Lagere efficiency, niet aanbevolen voor verwarmen</p>
                  </div>
                </div>

                <div className="flex items-center bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg p-4 shadow-md">
                  <div className="w-24 flex-shrink-0 font-bold text-2xl text-center">B-D</div>
                  <div className="flex-grow">
                    <p className="font-semibold">SCOP minder dan 3,4</p>
                    <p className="text-sm text-red-100">Laag - Oude systemen, niet geschikt voor efficiënt verwarmen</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-blue-600" />
                  Onze Aanbeveling
                </h4>
                <p className="text-gray-700">
                  Voor optimale besparing en duurzaamheid raden wij minimaal <strong>energielabel A+</strong> aan (SCOP ≥4,0).
                  Voor nieuwe installaties adviseren wij <strong>A++ of A+++</strong> (SCOP ≥4,6). Het verschil in aanschafprijs
                  verdient zich binnen 3-5 jaar terug door lagere energiekosten.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                SCOP in de Praktijk: Rekenvoorbeelden
              </h2>

              <p>
                Laten we de impact van verschillende SCOP-waarden op uw energiekosten verduidelijken met concrete rekenvoorbeelden.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Scenario: Woning 120m² in Limburg
              </h3>

              <p>
                <strong>Uitgangspunten:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li>Verwarmingsbehoefte: 12.000 kWh per jaar</li>
                <li>Elektriciteitstarief: €0,30 per kWh</li>
                <li>Verwarmingsseizoen: oktober t/m april</li>
                <li>Gemiddelde buitentemperatuur tijdens seizoen: +6°C</li>
              </ul>

              <div className="space-y-6 my-8">
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    Airco met SCOP 3,5 (Label A)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stroomverbruik: 12.000 kWh ÷ 3,5 = 3.429 kWh</li>
                    <li>• Jaarkosten: 3.429 kWh × €0,30 = <strong>€1.029</strong></li>
                  </ul>
                  <p className="mt-3 text-sm text-red-700 font-semibold">Niet aanbevolen voor verwarmen - lage efficiency</p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-300">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    Airco met SCOP 4,0 (Label A+)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stroomverbruik: 12.000 kWh ÷ 4,0 = 3.000 kWh</li>
                    <li>• Jaarkosten: 3.000 kWh × €0,30 = <strong>€900</strong></li>
                    <li>• <strong>Besparing vs SCOP 3,5:</strong> €129 per jaar</li>
                  </ul>
                  <p className="mt-3 text-sm text-yellow-700 font-semibold">Minimaal aanbevolen niveau</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-300">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    Airco met SCOP 4,5 (Label A++)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stroomverbruik: 12.000 kWh ÷ 4,5 = 2.667 kWh</li>
                    <li>• Jaarkosten: 2.667 kWh × €0,30 = <strong>€800</strong></li>
                    <li>• <strong>Besparing vs SCOP 3,5:</strong> €229 per jaar</li>
                    <li>• <strong>Besparing vs SCOP 4,0:</strong> €100 per jaar</li>
                  </ul>
                  <p className="mt-3 text-sm text-green-700 font-semibold">Uitstekende prijs-prestatie verhouding</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-300">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    Airco met SCOP 5,0 (Label A+++)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stroomverbruik: 12.000 kWh ÷ 5,0 = 2.400 kWh</li>
                    <li>• Jaarkosten: 2.400 kWh × €0,30 = <strong>€720</strong></li>
                    <li>• <strong>Besparing vs SCOP 3,5:</strong> €309 per jaar</li>
                    <li>• <strong>Besparing vs SCOP 4,0:</strong> €180 per jaar</li>
                    <li>• <strong>Besparing vs SCOP 4,5:</strong> €80 per jaar</li>
                  </ul>
                  <p className="mt-3 text-sm text-blue-700 font-semibold">Maximale efficiency - beste keuze op lange termijn</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-8 my-8 border-2 border-purple-200">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">Besparing over 15 Jaar (gemiddelde levensduur)</h4>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex justify-between items-center border-b border-purple-200 pb-2">
                    <span>SCOP 4,0 vs 3,5:</span>
                    <span className="font-bold text-green-600">€1.935 totaal</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-purple-200 pb-2">
                    <span>SCOP 4,5 vs 3,5:</span>
                    <span className="font-bold text-green-600">€3.435 totaal</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-purple-200 pb-2">
                    <span>SCOP 5,0 vs 3,5:</span>
                    <span className="font-bold text-green-600">€4.635 totaal</span>
                  </li>
                  <li className="flex justify-between items-center pt-2">
                    <span className="font-bold">SCOP 5,0 vs 4,0:</span>
                    <span className="font-bold text-green-700 text-xl">€2.700 totaal</span>
                  </li>
                </ul>
                <p className="mt-6 font-semibold text-purple-900">
                  Een hogere SCOP betekent een hoger rendement op uw investering. Het verschil van €400-600 in aanschafprijs
                  tussen een A+ en A+++ model verdient zich binnen 3-4 jaar terug!
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Top Airco's met Hoogste SCOP-waarden
              </h2>

              <p>
                Niet alle warmtepomp airco's zijn gelijk. Hier zijn de topmodellen met de hoogste SCOP-waarden die wij
                aanbevelen voor optimale energiebesparing in Limburg.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">Daikin Emura FTXJ-MS</h4>
                      <p className="text-gray-600">Premium design model</p>
                    </div>
                    <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                      SCOP 5,15
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• <strong>Energielabel:</strong> A+++ voor verwarmen</li>
                    <li>• <strong>Capaciteiten:</strong> 2,0 - 5,0 kW</li>
                    <li>• <strong>Geluidsniveau:</strong> Vanaf 19 dB (A) binnen</li>
                    <li>• <strong>Bijzonderheden:</strong> Elegant design, 3D-luchtstroom, Coanda-effect</li>
                  </ul>
                  <p className="text-sm text-gray-600 italic">Prijs: €1.800 - €2.400 incl. installatie</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">Mitsubishi Heavy SRK-ZS Diamond</h4>
                      <p className="text-gray-600">Ultra stille topklasse</p>
                    </div>
                    <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                      SCOP 5,20
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• <strong>Energielabel:</strong> A+++ voor verwarmen</li>
                    <li>• <strong>Capaciteiten:</strong> 2,5 - 6,1 kW</li>
                    <li>• <strong>Geluidsniveau:</strong> Vanaf 19 dB (A) binnen - ultra stil</li>
                    <li>• <strong>Bijzonderheden:</strong> Plasma Quad filter, tot -25°C bedrijfstemperatuur</li>
                  </ul>
                  <p className="text-sm text-gray-600 italic">Prijs: €1.900 - €2.500 incl. installatie</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">LG Artcool Mirror AC12BQ</h4>
                      <p className="text-gray-600">Design icoon met spiegelfront</p>
                    </div>
                    <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                      SCOP 4,65
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• <strong>Energielabel:</strong> A++ voor verwarmen</li>
                    <li>• <strong>Capaciteiten:</strong> 2,5 - 5,0 kW</li>
                    <li>• <strong>Geluidsniveau:</strong> Vanaf 20 dB (A) binnen</li>
                    <li>• <strong>Bijzonderheden:</strong> Uniek spiegeldesign, UV Nano technologie, Wi-Fi</li>
                  </ul>
                  <p className="text-sm text-gray-600 italic">Prijs: €1.700 - €2.200 incl. installatie</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">Daikin Perfera FTXM-R</h4>
                      <p className="text-gray-600">Beste prijs-prestatie A+++</p>
                    </div>
                    <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                      SCOP 5,10
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• <strong>Energielabel:</strong> A+++ voor verwarmen</li>
                    <li>• <strong>Capaciteiten:</strong> 2,0 - 5,0 kW</li>
                    <li>• <strong>Geluidsniveau:</strong> Vanaf 20 dB (A) binnen</li>
                    <li>• <strong>Bijzonderheden:</strong> 3D-luchtstroom, Flash Streamer luchtzuivering</li>
                  </ul>
                  <p className="text-sm text-gray-600 italic">Prijs: €1.600 - €2.100 incl. installatie</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Tips voor Optimale SCOP-prestaties
              </h2>

              <p>
                De opgegeven SCOP is gemeten onder ideale omstandigheden. Om in de praktijk deze prestaties te bereiken of
                zelfs te overtreffen, zijn er een aantal factoren belangrijk.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                    1. Correcte Capaciteitskeuze
                  </h4>
                  <p className="text-gray-700">
                    Een te kleine airco moet constant op vol vermogen draaien, wat de efficiency verlaagt. Een te grote airco
                    schakelt vaak aan en uit, wat ook efficiëntieverlies geeft. Laat een professional de juiste capaciteit
                    berekenen op basis van ruimtevolume, isolatie en gewenste temperatuur.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-blue-500" />
                    2. Optimale Plaatsing Buitenunit
                  </h4>
                  <p className="text-gray-700">
                    Plaats de buitenunit op een locatie met goede luchtstroom, uit directe wind of zon. Zorg voor minimaal
                    30 cm vrije ruimte rondom voor luchtcirculatie. Vermijd plaatsing in een hoek of kast waar lucht niet
                    goed kan circuleren.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-orange-500" />
                    3. Regelmatig Onderhoud
                  </h4>
                  <p className="text-gray-700">
                    Reinig filters elke 2-3 maanden en laat jaarlijks professioneel onderhoud uitvoeren. Vervuilde filters
                    en warmtewisselaars verlagen de efficiency met 10-20%. Een goed onderhouden systeem haalt gemakkelijk
                    de opgegeven SCOP of presteert zelfs beter.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-purple-500" />
                    4. Juiste Temperatuurinstelling
                  </h4>
                  <p className="text-gray-700">
                    Stel de gewenste temperatuur niet te hoog in. Elk graadje extra kost circa 5-7% meer energie. Voor
                    optimale efficiency en comfort: 20-21°C overdag, 18-19°C 's nachts. Gebruik de slaapstand of timer-
                    functies om automatisch de temperatuur te verlagen wanneer u slaapt of weg bent.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2 text-red-500" />
                    5. Goede Woningisolatie
                  </h4>
                  <p className="text-gray-700">
                    Hoe beter uw woning geïsoleerd is, hoe minder capaciteit uw airco nodig heeft en hoe efficiënter deze
                    kan werken. Investeer eerst in basismaatregelen: dubbel glas, dakisolatie, spouwmuurisolatie. Een goed
                    geïsoleerde woning kan 30-50% besparen op verwarmingskosten ongeacht het systeem.
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
            Kies de Juiste SCOP voor Maximale Besparing
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij helpen u de warmtepomp airco te kiezen met de beste SCOP voor uw situatie.
            Gratis advies en capaciteitsberekening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Expert Advies
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over SCOP
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
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor een Warmtepomp met Topefficiency?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Ontdek onze selectie A+++ warmtepompen met SCOP 5,0+. Maximale besparing, minimale kosten.
            F-gassen gecertificeerd, 10 jaar garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/merken"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Award className="h-6 w-6 mr-2" />
              Bekijk Top SCOP Modellen
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Gratis Adviesgesprek
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
              → Verwarmen met airco - warmtepomp efficiëntie
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/energielabel-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → A+++ energielabel airco uitgelegd
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/stroomverbruik-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Stroomverbruik airco berekenen
            </Link>
            <Link to="/merken" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Onze A+++ warmtepomp merken
            </Link>
            <Link to="/capaciteit-calculator" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Bereken uw ideale capaciteit
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Persoonlijk SCOP advies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SCOPWaardeUitgelegd;
