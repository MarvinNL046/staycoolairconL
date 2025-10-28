import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, TrendingUp, Zap, Euro, Phone, Calculator, Info, Star } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const EnergielabelAirco: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Energie Besparen', path: '/seo/pillar-4-energie-besparen' },
    { label: 'Energielabel Airco' }
  ];

  const usps = [
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: 'A+++ = Maximale Besparing',
      description: 'Energielabel A+++ airco\'s hebben SCOP ≥5,1 en besparen tot 40% vergeleken met A+ modellen.'
    },
    {
      icon: <Euro className="h-12 w-12 text-blue-600" />,
      title: 'Snelle Terugverdientijd',
      description: 'Het verschil in aanschafprijs verdient zich binnen 3-5 jaar terug door lagere energiekosten.'
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: 'Premium Kwaliteit',
      description: 'A+++ modellen zijn topkwaliteit met beste componenten, langere levensduur en stiller werken.'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
      title: 'Hogere Woningwaarde',
      description: 'Energiezuinige installaties verhogen de waarde en aantrekkelijkheid van uw woning.'
    }
  ];

  const faqs = [
    {
      question: 'Wat betekent het energielabel van een airco?',
      answer: 'Het energielabel geeft de energie-efficiëntie van een airco weer op een schaal van A+++ (meest efficiënt) tot D (minst efficiënt). Het label is gebaseerd op de SCOP-waarde voor verwarmen en de SEER-waarde voor koelen. Een hoger label betekent dat de airco minder stroom verbruikt voor dezelfde hoeveelheid warmte of koeling. Het energielabel is EU-breed gestandaardiseerd volgens verordening (EU) 626/2011, dus alle fabrikanten moeten dezelfde meetmethode gebruiken. Dit maakt eerlijke vergelijking tussen merken en modellen mogelijk.'
    },
    {
      question: 'Wat is het verschil tussen energielabel voor koelen en verwarmen?',
      answer: 'Een airco heeft twee aparte energielabels: één voor koelen (gebaseerd op SEER) en één voor verwarmen (gebaseerd op SCOP). Het label voor koelen varieert meestal tussen A+ en A+++, terwijl het label voor verwarmen tussen A en A+++ kan liggen. Voor verwarmen zijn de eisen strenger omdat het moeilijker is om efficiënt te verwarmen dan te koelen. Bij de aankoop van een airco die u voornamelijk voor verwarmen wilt gebruiken, kijkt u vooral naar het label voor verwarmen. Topmodellen hebben vaak A+++ voor zowel koelen als verwarmen.'
    },
    {
      question: 'Hoeveel bespaar ik met een A+++ airco ten opzichte van een A+ model?',
      answer: 'Het verschil is substantieel. Een A+++ airco met SCOP 5,0 verbruikt circa 20-25% minder stroom dan een A+ model met SCOP 4,0 voor dezelfde hoeveelheid warmte. Voor een gemiddelde woning in Limburg (120m², 12.000 kWh warmtevraag per jaar) betekent dit een besparing van €180-250 per jaar. Over een levensduur van 15 jaar is dit €2.700-3.750 totale besparing. Het verschil in aanschafprijs (gemiddeld €400-600) verdient zich dus binnen 2-3 jaar terug. Bovendien krijgt u vaak een betere garantie, stiller werken en meer functies bij A+++ modellen.'
    },
    {
      question: 'Zijn A+++ airco\'s duurder in aanschaf?',
      answer: 'Ja, A+++ modellen zijn doorgaans €400-800 duurder dan vergelijkbare A+ modellen. Een A+ single-split 3,5 kW kost circa €1.600-1.900 all-in, terwijl een A+++ model €2.000-2.400 kost. Dit verschil lijkt groot, maar de investering verdient zich snel terug. Bij gebruik voor verwarmen is de terugverdientijd 2-4 jaar door lagere stroomkosten. Bovendien zijn A+++ modellen vaak premium uitvoeringen met betere filters, stillere werking, langere garantie (tot 10 jaar) en geavanceerde functies zoals Wi-Fi bediening en intelligente sensoren. De totale eigenaarskostenkosten over 15 jaar zijn lager bij A+++ modellen.'
    },
    {
      question: 'Welke merken hebben de beste energielabels?',
      answer: 'Daikin, Mitsubishi Heavy Industries en LG domineren de A+++ categorie met de meest efficiënte modellen. Daikin Emura (SCOP 5,15) en Perfera (SCOP 5,10), Mitsubishi SRK-ZS Diamond (SCOP 5,20) en LG Artcool series (SCOP 4,6-4,8) zijn toppers. Deze Japanse merken investeren sterk in R&D voor warmtepomp technologie. Ook Samsung en Panasonic hebben A+++ modellen, maar met iets lagere SCOP-waarden (4,6-4,8). Voor de allerbeste efficiency en langste garantie (10 jaar) raden wij Daikin en Mitsubishi aan. Deze merken hebben bewezen betrouwbaar te zijn in Nederlands klimaat en bieden uitstekende after-sales support.'
    },
    {
      question: 'Hoe kan ik controleren of mijn airco echt het opgegeven energielabel haalt?',
      answer: 'Het energielabel is gebaseerd op laboratoriumtests volgens strikte EU-normen. In de praktijk kunt u de efficiency controleren door uw stroomverbruik en warmteafgifte te meten. Moderne airco\'s met Wi-Fi tonen het actuele verbruik in de app. Voor een accurate check: meet uw stroomverbruik met een slimme meter over een maand tijdens het stookseizoen, noteer de gemiddelde buitentemperatuur, en vergelijk met de SCOP-specificaties. Bij goed onderhoud en correcte installatie haalt u de opgegeven waarden. Factoren die efficiency verlagen: vuile filters, slechte plaatsing buitenunit, te kleine/grote capaciteit voor de ruimte, of koudemiddellekkage. Jaarlijks onderhoud garandeert optimale prestaties.'
    },
    {
      question: 'Krijg ik subsidie voor een A+++ airco?',
      answer: 'Voor 2024-2025 zijn er diverse subsidiemogelijkheden voor energiezuinige warmtepompen. De ISDE-subsidie (Investeringssubsidie Duurzame Energie) biedt tot €2.550 voor lucht-lucht warmtepompen (airco\'s) met minimaal energielabel A++. Aanvragen gaat via RVO.nl. Let op: het subsidiebudget raakt vaak binnen enkele maanden uitgeput, dus wees er snel bij. Daarnaast zijn er gemeentelijke regelingen in Limburg die wisselen per gemeente. Ook kunt u in sommige gevallen in aanmerking komen voor een energiebespaarlening met lage rente. BTW-verlaging geldt helaas alleen voor zonnepanelen en thuisbatterijen, niet voor airco\'s. Wij helpen graag bij het aanvragen van subsidies.'
    },
    {
      question: 'Is een A+++ energielabel ook beter voor het milieu?',
      answer: 'Absoluut. Een hogere energie-efficiency betekent minder elektriciteitsverbruik en dus een lagere CO2-uitstoot. Een A+++ airco met SCOP 5,0 stoot 20-25% minder CO2 uit dan een A+ model met SCOP 4,0 voor dezelfde hoeveelheid warmte. In combinatie met groene stroom of eigen zonnepanelen verwarmt u vrijwel CO2-neutraal. Moderne A+++ modellen gebruiken ook milieuvriendelijker koudemiddel (R32 in plaats van R410A), wat een 3x lagere Global Warming Potential heeft. Plus: door de langere levensduur (15-20 jaar voor premium modellen) hoeft u minder vaak een nieuw apparaat te kopen, wat productie-impact en afval vermindert. Investeren in A+++ is dus een duurzame keuze op alle fronten.'
    }
  ];

  return (
    <>
      <MetaTags
        title="A+++ Energielabel Airco - Maximale Efficiency | Limburg | StayCool"
        description="A+++ energielabel airco ✓ SCOP 5.0-5.5 ✓ 40% besparing vs A+ ✓ Top merken Daikin, Mitsubishi, LG ✓ Subsidie mogelijk ✓ Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "A+++ Energielabel Airco Installatie",
          description: "Installatie van A+++ energielabel warmtepomp airco's met maximale efficiency (SCOP 5.0+). Premium merken, F-gassen gecertificeerd, 10 jaar garantie.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-2021430",
            email: "info@staycoolairco.nl"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A+++ Energielabel Airco - Maximale Efficiency en Besparing
          </h1>

          <p className="text-xl md:text-2xl text-green-50 mb-8 max-w-4xl">
            Kies een A+++ energielabel airco en bespaar tot 40% op uw energiekosten. Premium modellen
            met SCOP 5,0-5,5, 10 jaar garantie en de beste merken: Daikin, Mitsubishi, LG.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis A+++ Advies
            </Link>
            <Link
              to="/merken"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Award className="h-6 w-6 mr-2" />
              Bekijk A+++ Modellen
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-green-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>SCOP 5.0-5.5</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Tot €3.750 besparing over 15 jaar</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>10 jaar garantie</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Subsidie mogelijk</span>
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
              Wat is een A+++ Energielabel Airco?
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Het energielabel A+++ is de hoogste efficiëntieklasse voor warmtepomp airco's in Europa. Dit label garandeert
                dat u investeert in de meest energiezuinige en kostenefficiënte verwarmings- en koelingsoplossing die momenteel
                beschikbaar is. A+++ airco's hebben een SCOP (Seasonal Coefficient of Performance) van minimaal 5,1 voor verwarmen,
                wat betekent dat ze uit 1 kW elektriciteit maar liefst 5,1 kW warmte produceren - een rendement van 510%.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 my-8 border-2 border-green-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-8 w-8 mr-3 text-green-600" />
                  Waarom A+++ de Beste Keuze Is
                </h3>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>40% lagere kosten:</strong> Vergeleken met A+ modellen bespaart u 20-40% op stroomkosten</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Premium kwaliteit:</strong> Beste componenten, langere levensduur, stillere werking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Toekomstbestendig:</strong> Voldoet ruimschoots aan toekomstige EU-normen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Duurzaam:</strong> 25-40% lagere CO2-uitstoot en milieuvriendelijk koudemiddel</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Subsidie mogelijk:</strong> Tot €2.550 ISDE-subsidie voor A++ en A+++ modellen</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Het EU Energielabel Systeem Uitgelegd
              </h2>

              <p>
                Het Europese energielabel voor airco's is ingevoerd om consumenten te helpen energiezuinige keuzes te maken.
                Het label loopt van A+++ (meest efficiënt) tot D (minst efficiënt) en is gebaseerd op wetenschappelijke
                metingen volgens de EU-verordening 626/2011.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Energielabel Categorieën voor Verwarmen
              </h3>

              <div className="space-y-4 my-8">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-2xl mb-1">A+++</h4>
                      <p className="text-green-100 mb-2">SCOP ≥ 5,1 | Maximale efficiency</p>
                      <p className="text-sm">Daikin Emura, Mitsubishi Diamond, Premium LG modellen</p>
                    </div>
                    <div className="text-4xl font-bold opacity-75">510%+</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-lime-500 to-green-400 text-white rounded-lg p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-2xl mb-1">A++</h4>
                      <p className="text-lime-100 mb-2">SCOP 4,6 - 5,0 | Zeer hoge efficiency</p>
                      <p className="text-sm">Daikin Stylish, Samsung Wind-Free, Panasonic Etherea</p>
                    </div>
                    <div className="text-4xl font-bold opacity-75">460-500%</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500 to-lime-400 text-white rounded-lg p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-2xl mb-1">A+</h4>
                      <p className="text-yellow-100 mb-2">SCOP 4,0 - 4,5 | Goede efficiency (minimum aanbevolen)</p>
                      <p className="text-sm">Basis inverter modellen, mid-range kwaliteit</p>
                    </div>
                    <div className="text-4xl font-bold opacity-75">400-450%</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-lg p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-2xl mb-1">A</h4>
                      <p className="text-orange-100 mb-2">SCOP 3,4 - 3,9 | Gemiddelde efficiency</p>
                      <p className="text-sm">Oudere inverter modellen, niet aanbevolen voor verwarmen</p>
                    </div>
                    <div className="text-4xl font-bold opacity-75">340-390%</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-lg p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-2xl mb-1">B - D</h4>
                      <p className="text-red-100 mb-2">SCOP minder dan 3,4 | Lage efficiency</p>
                      <p className="text-sm">Oude on/off systemen, vermijden voor verwarmingsdoeleinden</p>
                    </div>
                    <div className="text-4xl font-bold opacity-75"> minder dan 340%</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Info className="h-6 w-6 mr-2 text-blue-600" />
                  Let Op: Twee Aparte Labels
                </h4>
                <p className="text-gray-700">
                  Een airco heeft twee energielabels: één voor <strong>koelen</strong> (gebaseerd op SEER) en één voor{' '}
                  <strong>verwarmen</strong> (gebaseerd op SCOP). Als u de airco vooral voor verwarmen gebruikt, let dan
                  primair op het verwarmingslabel. Topmodellen hebben vaak A+++ voor beide functies.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Kostenbesparingen: A+++ vs Lagere Labels
              </h2>

              <p>
                Het verschil in energiekosten tussen verschillende energielabels is aanzienlijk. Laten we dit verduidelijken
                met concrete rekenvoorbeelden voor een gemiddelde woning in Limburg.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 my-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rekenvoorbeeld: Woning 120m² Limburg</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Uitgangspunten:</strong> Verwarmingsbehoefte 12.000 kWh/jaar, elektriciteitstarief €0,30/kWh,
                  verwarmingsseizoen oktober-april
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Label</th>
                        <th className="px-6 py-4 text-left font-semibold">SCOP</th>
                        <th className="px-6 py-4 text-right font-semibold">Stroomverbruik</th>
                        <th className="px-6 py-4 text-right font-semibold">Jaarkosten</th>
                        <th className="px-6 py-4 text-right font-semibold">15-Jaar Totaal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-green-50 font-semibold">
                        <td className="px-6 py-4">A+++</td>
                        <td className="px-6 py-4">5,1</td>
                        <td className="px-6 py-4 text-right">2.353 kWh</td>
                        <td className="px-6 py-4 text-right text-green-700">€706</td>
                        <td className="px-6 py-4 text-right text-green-700">€10.590</td>
                      </tr>
                      <tr className="bg-lime-50">
                        <td className="px-6 py-4">A++</td>
                        <td className="px-6 py-4">4,6</td>
                        <td className="px-6 py-4 text-right">2.609 kWh</td>
                        <td className="px-6 py-4 text-right">€783</td>
                        <td className="px-6 py-4 text-right">€11.745</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="px-6 py-4">A+</td>
                        <td className="px-6 py-4">4,0</td>
                        <td className="px-6 py-4 text-right">3.000 kWh</td>
                        <td className="px-6 py-4 text-right">€900</td>
                        <td className="px-6 py-4 text-right">€13.500</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="px-6 py-4">A</td>
                        <td className="px-6 py-4">3,5</td>
                        <td className="px-6 py-4 text-right">3.429 kWh</td>
                        <td className="px-6 py-4 text-right text-orange-700">€1.029</td>
                        <td className="px-6 py-4 text-right text-orange-700">€15.435</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="bg-green-100 rounded-lg p-4">
                    <p className="font-bold text-green-900 mb-1">A+++ vs A+: Besparing</p>
                    <p className="text-green-800">€194 per jaar | €2.910 over 15 jaar | 21,5% kostenreductie</p>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <p className="font-bold text-blue-900 mb-1">A+++ vs A: Besparing</p>
                    <p className="text-blue-800">€323 per jaar | €4.845 over 15 jaar | 31,4% kostenreductie</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Terugverdientijd Hogere Investering
              </h3>

              <p>
                Een A+++ airco kost gemiddeld €400-600 meer dan een A+ model. Maar deze investering verdient zich snel terug:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6">
                <h4 className="font-bold text-gray-900 mb-3">Terugverdientijd Berekening</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Extra investering:</strong> €500 (gemiddeld verschil A+++ vs A+)</li>
                  <li>• <strong>Jaarlijkse besparing:</strong> €194 (zie tabel hierboven)</li>
                  <li>• <strong>Terugverdientijd:</strong> €500 ÷ €194 = <span className="font-bold text-yellow-700">2,6 jaar</span></li>
                </ul>
                <p className="mt-4 font-semibold text-yellow-900">
                  Na 2,6 jaar heeft u uw extra investering terugverdiend. De resterende 12,4 jaar van de levensduur is
                  pure besparing: €2.410 extra in uw portemonnee!
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Top A+++ Airco Modellen voor Limburg
              </h2>

              <p>
                Niet alle A+++ modellen zijn gelijk. Hier zijn onze topkeuzes gebaseerd op SCOP-waarde, betrouwbaarheid,
                garantie en prijs-prestatie verhouding.
              </p>

              <div className="space-y-8 my-8">
                <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-red-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Star className="h-6 w-6 text-yellow-500 mr-2" />
                        <h4 className="font-bold text-2xl text-gray-900">Daikin Emura FTXJ-MS</h4>
                      </div>
                      <p className="text-gray-600 text-lg">Onze #1 aanbeveling - Design ontmoet topefficiency</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-2">
                        SCOP 5,15
                      </div>
                      <div className="text-sm text-gray-600">A+++ | SEER 8,73</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technische Specs:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Capaciteit: 2,0 / 2,5 / 3,5 / 5,0 kW</li>
                        <li>• Geluid: 19-32 dB (A) binnen</li>
                        <li>• Werkbereik: -25°C tot +46°C</li>
                        <li>• Koudemiddel: R32 (milieuvriendelijk)</li>
                        <li>• Garantie: 5 jaar standaard, 10 jaar optioneel</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Unieke Features:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Premium design met aluminium front</li>
                        <li>• 3D-luchtstroom met Coanda-effect</li>
                        <li>• Wi-Fi + Daikin Onecta app</li>
                        <li>• Intelligente oog-sensor</li>
                        <li>• Flash Streamer luchtzuivering</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Waarom deze keuze:</strong> De Daikin Emura combineert de hoogste SCOP-waarde met prachtig
                      design en uitstekende betrouwbaarheid. Ideaal voor wie het beste wil zonder concessies.
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      Prijs: €1.800 - €2.400 all-in (afhankelijk van capaciteit)
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-orange-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Star className="h-6 w-6 text-yellow-500 mr-2" />
                        <h4 className="font-bold text-2xl text-gray-900">Mitsubishi Heavy SRK-ZS Diamond</h4>
                      </div>
                      <p className="text-gray-600 text-lg">Hoogste SCOP + Ultra stil</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-2">
                        SCOP 5,20
                      </div>
                      <div className="text-sm text-gray-600">A+++ | SEER 9,20</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technische Specs:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Capaciteit: 2,5 / 3,5 / 5,0 / 6,1 kW</li>
                        <li>• Geluid: 19-33 dB (A) binnen (ultra stil!)</li>
                        <li>• Werkbereik: -25°C tot +46°C</li>
                        <li>• Koudemiddel: R32</li>
                        <li>• Garantie: 5 jaar, 10 jaar optioneel</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Unieke Features:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Plasma Quad Plus luchtzuivering</li>
                        <li>• 4-voudig filter systeem</li>
                        <li>• MELCloud Wi-Fi module</li>
                        <li>• Weekly timer programmering</li>
                        <li>• Ultra stille night mode</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Waarom deze keuze:</strong> De allerhoogste SCOP op de markt (5,20) en ultra stil (19 dB).
                      Perfecte keuze voor slaapkamers en wie absolute topkwaliteit wil.
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      Prijs: €1.900 - €2.500 all-in (afhankelijk van capaciteit)
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-blue-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Star className="h-6 w-6 text-yellow-500 mr-2" />
                        <h4 className="font-bold text-2xl text-gray-900">Daikin Perfera FTXM-R</h4>
                      </div>
                      <p className="text-gray-600 text-lg">Beste prijs-prestatie A+++</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-2">
                        SCOP 5,10
                      </div>
                      <div className="text-sm text-gray-600">A+++ | SEER 8,65</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technische Specs:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Capaciteit: 2,0 / 2,5 / 3,5 / 5,0 kW</li>
                        <li>• Geluid: 20-34 dB (A) binnen</li>
                        <li>• Werkbereik: -25°C tot +46°C</li>
                        <li>• Koudemiddel: R32</li>
                        <li>• Garantie: 5 jaar, 10 jaar optioneel</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Unieke Features:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• 3D-luchtstroom voor optimale verdeling</li>
                        <li>• Flash Streamer luchtzuivering</li>
                        <li>• Wi-Fi + Daikin Onecta app</li>
                        <li>• Eco-modus voor energiebesparing</li>
                        <li>• Intelligent eye sensor</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Waarom deze keuze:</strong> Uitstekende A+++ prestaties voor een zeer aantrekkelijke prijs.
                      Perfecte keuze voor wie topkwaliteit zoekt zonder het absolute premium prijskaartje.
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      Prijs: €1.600 - €2.100 all-in (afhankelijk van capaciteit)
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-6 border-t-4 border-purple-500">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Star className="h-6 w-6 text-yellow-500 mr-2" />
                        <h4 className="font-bold text-2xl text-gray-900">LG Artcool Mirror AC12BQ</h4>
                      </div>
                      <p className="text-gray-600 text-lg">Design icoon met spiegelfront</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-lime-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-2">
                        SCOP 4,65
                      </div>
                      <div className="text-sm text-gray-600">A++ | SEER 8,40</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technische Specs:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Capaciteit: 2,5 / 3,5 / 5,0 kW</li>
                        <li>• Geluid: 20-35 dB (A) binnen</li>
                        <li>• Werkbereik: -15°C tot +48°C</li>
                        <li>• Koudemiddel: R32</li>
                        <li>• Garantie: 5 jaar, 10 jaar optioneel</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Unieke Features:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Uniek premium spiegeldesign</li>
                        <li>• UV Nano luchtzuivering</li>
                        <li>• LG ThinQ Wi-Fi app</li>
                        <li>• Dual inverter compressor</li>
                        <li>• 4-richtingen luchtstroom</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Waarom deze keuze:</strong> Voor wie design net zo belangrijk vindt als efficiency. Het unieke
                      spiegelfront maakt deze airco een blikvanger in elk interieur. A++ label met uitstekende prestaties.
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      Prijs: €1.700 - €2.200 all-in (afhankelijk van capaciteit)
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Subsidie en Financiering voor A+++ Airco's
              </h2>

              <p>
                De aanschaf van een A+++ airco kan deels gesubsidieerd worden, wat de terugverdientijd nog korter maakt.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Euro className="h-6 w-6 mr-2 text-green-600" />
                    ISDE Subsidie (Investeringssubsidie Duurzame Energie)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Bedrag:</strong> Tot €2.550 voor lucht-lucht warmtepompen (airco\'s) met label A++ of hoger</li>
                    <li>• <strong>Voorwaarden:</strong> Minimaal energielabel A++ voor verwarmen, professionele installatie door erkend bedrijf</li>
                    <li>• <strong>Aanvraag:</strong> Via RVO.nl, meestal in januari/februari geopend voor dat jaar</li>
                    <li>• <strong>Let op:</strong> Budget raakt vaak binnen enkele weken/maanden uitgeput - wees er snel bij!</li>
                  </ul>
                  <p className="mt-3 text-sm font-semibold text-green-700">
                    Wij helpen graag bij het aanvragen van ISDE-subsidie en regelen alle benodigde documentatie.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Euro className="h-6 w-6 mr-2 text-blue-600" />
                    Gemeentelijke Subsidieregelingen Limburg
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Diverse gemeenten in Limburg hebben eigen subsidieregelingen voor energiebesparende maatregelen.
                    De regelingen en bedragen verschillen per gemeente:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Maastricht:</strong> Check duurzaamheidslening en groenfondsen</li>
                    <li>• <strong>Roermond:</strong> Energiebesparende-investeringsregeling (wisselend budget)</li>
                    <li>• <strong>Venlo:</strong> Verduurzamingslening tot €30.000 tegen 0-2% rente</li>
                    <li>• <strong>Sittard-Geleen:</strong> Check gemeentelijke stimuleringsregelingen</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 italic">
                    Regelingen kunnen per jaar wijzigen. Check altijd de actuele stand bij uw gemeente of neem contact
                    met ons op voor actuele informatie.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Euro className="h-6 w-6 mr-2 text-purple-600" />
                    Energiebespaarlening
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Diverse banken en het Nationaal Warmtefonds bieden energiebespaarleningen met lage rente (1,5-3,5%)
                    voor energiebesparende investeringen zoals A+++ warmtepompen.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Bedrag:</strong> €2.500 - €25.000</li>
                    <li>• <strong>Looptijd:</strong> 5-15 jaar</li>
                    <li>• <strong>Rente:</strong> 1,5-3,5% (afhankelijk van aanbieder en looptijd)</li>
                    <li>• <strong>Voordeel:</strong> Lagere maandlasten dan energiebesparing → netto voordeel vanaf dag 1</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Rekenvoorbeeld met Subsidie
              </h3>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 my-6 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-4 text-xl">Investering Daikin Emura A+++ met ISDE-subsidie</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• <strong>Aanschafprijs incl. installatie:</strong> €2.200</li>
                  <li>• <strong>ISDE-subsidie:</strong> -€1.000 (gemiddeld voor airco's)</li>
                  <li>• <strong>Netto investering:</strong> €1.200</li>
                  <li>• <strong>Jaarlijkse besparing vs A+ model:</strong> €194</li>
                  <li>• <strong>Terugverdientijd:</strong> €1.200 ÷ €194 = <span className="font-bold text-green-700">6,2 jaar</span></li>
                </ul>
                <div className="bg-green-600 text-white rounded-lg p-4 mt-4">
                  <p className="font-bold text-lg mb-2">Na 6,2 jaar: Volledig terugverdiend</p>
                  <p className="text-green-100">
                    Resterende 8,8 jaar (van 15 jaar levensduur): €1.707 netto voordeel + u heeft een premium A+++
                    systeem met 10 jaar garantie!
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
            Investeer in Maximale Efficiency
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Kies een A+++ airco en geniet van 40% lagere energiekosten, premium kwaliteit en tot €2.550 subsidie.
            Gratis advies en capaciteitsberekening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Gratis Adviesgesprek
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
            Veelgestelde Vragen over A+++ Energielabel
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
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor A+++ Topkwaliteit?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Bekijk onze selectie premium A+++ airco's of laat u vrijblijvend adviseren door onze specialisten.
            F-gassen gecertificeerd, 10 jaar garantie, hele Limburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/merken"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              <Award className="h-6 w-6 mr-2" />
              Bekijk A+++ Modellen
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-colors text-lg shadow-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken uw Besparing
            </Link>
          </div>
          <p className="text-green-100">
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
            <Link to="/seo/pillar-4-energie-besparen/scop-waarde-uitgelegd" className="text-blue-600 hover:text-blue-700 hover:underline">
              → SCOP waarde uitgelegd
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/verwarmen-met-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Verwarmen met airco - warmtepomp efficiency
            </Link>
            <Link to="/seo/pillar-4-energie-besparen/stroomverbruik-airco" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Stroomverbruik airco berekenen
            </Link>
            <Link to="/merken" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Onze premium A+++ merken
            </Link>
            <Link to="/capaciteit-calculator" className="text-blue-600 hover:text-blue-700 hover:underline">
              → Bereken ideale capaciteit
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

export default EnergielabelAirco;
