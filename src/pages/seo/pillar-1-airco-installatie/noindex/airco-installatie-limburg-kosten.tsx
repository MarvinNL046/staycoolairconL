import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, Calculator, CheckCircle, Phone, ArrowRight, TrendingUp, AlertCircle, Info, Zap, Home } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoInstallatieLimburgKostenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Installatie Limburg', path: '/kennisbank/airco-installatie-limburg' },
    { label: 'Kosten' }
  ];

  const prijzenOverzicht = [
    {
      systeem: 'Single-split systeem',
      prijs: 'vanaf €1.650',
      capaciteit: '2.5 - 3.5 kW',
      geschiktVoor: '20-35 m²',
      inclusief: ['Binnen- en buitenunit', 'Montage', 'Leidingwerk tot 5m', 'Elektrische aansluiting', 'Inbedrijfstelling', 'Instructie'],
      populair: true
    },
    {
      systeem: 'Multi-split 2 units',
      prijs: 'vanaf €3.200',
      capaciteit: '5.0 - 7.0 kW',
      geschiktVoor: '40-70 m²',
      inclusief: ['1 buitenunit', '2 binnenunits', 'Montage', 'Leidingwerk tot 5m per unit', 'Elektrische aansluiting', 'Inbedrijfstelling', 'Instructie'],
      populair: false
    },
    {
      systeem: 'Multi-split 3 units',
      prijs: 'vanaf €4.500',
      capaciteit: '7.5 - 10.5 kW',
      geschiktVoor: '75-105 m²',
      inclusief: ['1 buitenunit', '3 binnenunits', 'Montage', 'Leidingwerk tot 5m per unit', 'Elektrische aansluiting', 'Inbedrijfstelling', 'Instructie'],
      populair: false
    }
  ];

  const kostenFactoren = [
    {
      factor: 'Type airco systeem',
      impact: 'Hoog',
      uitleg: 'Single-split systemen zijn goedkoper dan multi-split. Inverter technologie is duurder maar zuiniger.',
      prijsverschil: '€800 - €3.000'
    },
    {
      factor: 'Capaciteit (kW)',
      impact: 'Hoog',
      uitleg: 'Grotere ruimtes vereisen krachtigere systemen met hogere capaciteit.',
      prijsverschil: '€200 - €800 per kW'
    },
    {
      factor: 'Aantal binnenunits',
      impact: 'Zeer hoog',
      uitleg: 'Elke extra binnenunit betekent meer materiaal, leidingwerk en installatietijd.',
      prijsverschil: '€800 - €1.200 per unit'
    },
    {
      factor: 'Leidingwerk afstand',
      impact: 'Gemiddeld',
      uitleg: 'Tot 5 meter is inclusief. Elke extra meter kost extra door materiaal en werktijd.',
      prijsverschil: '€30 - €60 per extra meter'
    },
    {
      factor: 'Type binnenunit',
      impact: 'Gemiddeld',
      uitleg: 'Wandunit is standaard. Cassette, vloer- of plafondmodellen zijn duurder.',
      prijsverschil: '€200 - €600 verschil'
    },
    {
      factor: 'Gebouwtype',
      impact: 'Laag-Gemiddeld',
      uitleg: 'Oudere woningen kunnen extra werk vereisen (gaten boren door dikke muren, elektrische aanpassingen).',
      prijsverschil: '€100 - €400 extra'
    },
    {
      factor: 'Seizoen',
      impact: 'Laag',
      uitleg: 'In voor- en naseizoen zijn er vaak acties. Zomer is piekseizoen met langere wachttijden.',
      prijsverschil: '€100 - €300 korting mogelijk'
    }
  ];

  const verborgenKosten = [
    {
      titel: 'Extra leidingwerk',
      beschrijving: 'Meer dan 5 meter leidingwerk per unit',
      kosten: '€30 - €60 per extra meter',
      vermijden: 'Vraag vooraf naar maximaal inbegrepen meters'
    },
    {
      titel: 'Elektrische aanpassingen',
      beschrijving: 'Oude meterkast of onvoldoende capaciteit',
      kosten: '€150 - €500',
      vermijden: 'Laat elektra vooraf controleren door installateur'
    },
    {
      titel: 'Muur- en plafondwerk',
      beschrijving: 'Extra groot gat boren of doorvoeren door moeilijke muren',
      kosten: '€50 - €200',
      vermijden: 'Bespreek situatie vooraf tijdens offerte-afspraak'
    },
    {
      titel: 'Condensafvoer',
      beschrijving: 'Pomp nodig als natuurlijke afvoer niet mogelijk is',
      kosten: '€100 - €250',
      vermijden: 'Check afvoermogelijkheden vooraf'
    },
    {
      titel: 'Onderhoud kosten',
      beschrijving: 'Jaarlijks onderhoud voor optimale werking',
      kosten: '€11/mnd of €179 losse beurt',
      vermijden: 'Sluit onderhoudscontract af voor beste prijs'
    }
  ];

  const roiBerekening = [
    {
      situatie: 'Vervanging elektrische verwarming',
      oudeSituatie: '€1.800/jaar',
      nieuweSituatie: '€600/jaar',
      besparing: '€1.200/jaar',
      terugverdientijd: '1,5 - 2 jaar',
      icon: TrendingUp,
      color: 'green'
    },
    {
      situatie: 'Aanvulling op CV-ketel',
      oudeSituatie: '€1.400/jaar',
      nieuweSituatie: '€1.000/jaar',
      besparing: '€400/jaar',
      terugverdientijd: '4 - 5 jaar',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      situatie: 'Alleen koelen (zonder verwarming)',
      oudeSituatie: '€200/jaar (ventilator)',
      nieuweSituatie: '€120/jaar',
      besparing: '€80/jaar + comfort',
      terugverdientijd: '15+ jaar (primair comfort)',
      icon: Info,
      color: 'gray'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Installatie Kosten Limburg 2025 | Prijzen & Kostenopbouw"
        description="Wat kost een airco installatie in Limburg? Bekijk actuele prijzen, kostenopbouw en waar u op moet letten. Inclusief prijsvoorbeelden en bespaartips."
        canonicalUrl="https://staycoolairco.nl/airco-installatie/noindex/kosten-limburg"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero met prijsindicatie */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Euro className="inline w-4 h-4 mr-2" />
              Transparante Prijzen 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Wat Kost Airco Installatie in Limburg?
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Volledig transparante kostenopbouw met actuele prijzen, bespaartips en ROI-berekeningen.
              Van €1.650 voor single-split tot €4.500 voor multi-split 3 units.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center shadow-lg"
              >
                Gratis Offerte
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:0462021430"
                className="bg-blue-500/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500/40 transition-colors inline-flex items-center border-2 border-white/30"
              >
                <Phone className="mr-2 w-5 h-5" />
                046 202 1430
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Snelle Prijsindicator */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Snelle Prijsindicator</h2>
                <p className="text-gray-600">Actuele prijzen voor Limburg - inclusief installatie, geen voorrijkosten</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <div className="text-sm text-gray-600 mb-2">1 Ruimte koelen/verwarmen</div>
                <div className="text-3xl font-bold text-green-600 mb-1">€1.650</div>
                <div className="text-sm text-gray-500">Single-split systeem</div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <div className="text-sm text-gray-600 mb-2">2 Ruimtes koelen/verwarmen</div>
                <div className="text-3xl font-bold text-blue-600 mb-1">€3.200</div>
                <div className="text-sm text-gray-500">Multi-split 2 units</div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <div className="text-sm text-gray-600 mb-2">3 Ruimtes koelen/verwarmen</div>
                <div className="text-3xl font-bold text-blue-600 mb-1">€4.500</div>
                <div className="text-sm text-gray-500">Multi-split 3 units</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gedetailleerde Prijstabellen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volledige Prijsopbouw per Systeem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparant overzicht van wat u krijgt voor uw investering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {prijzenOverzicht.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  item.populair ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {item.populair && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-bold">
                    MEEST GEKOZEN
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.systeem}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-blue-600">{item.prijs}</span>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-600 mb-1">Capaciteit</div>
                    <div className="font-semibold text-gray-900">{item.capaciteit}</div>
                    <div className="text-sm text-gray-600 mt-2 mb-1">Geschikt voor</div>
                    <div className="font-semibold text-gray-900">{item.geschiktVoor}</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="font-semibold text-gray-900 mb-3">Inclusief:</div>
                    {item.inclusief.map((inclusief, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{inclusief}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-gray-900 mb-2">Wat is inclusief bij StayCool?</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Complete installatie door gecertificeerd installateurs</li>
                  <li>• Leidingwerk tot 5 meter per binnenunit</li>
                  <li>• Elektrische aansluiting en inbedrijfstelling</li>
                  <li>• Instructie en handleiding</li>
                  <li>• Fabrieksgarantie (2-5 jaar afhankelijk van merk)</li>
                  <li>• Geen voorrijkosten in heel Limburg</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kostenopbouw Uitleg */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waar Bestaat de Prijs Uit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inzicht in alle kostenposten voor complete transparantie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Materiaalkosten (60-70%)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Airco units (binnen + buiten)</span>
                  <span className="font-semibold text-gray-900">€900 - €2.500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Leidingwerk en isolatie</span>
                  <span className="font-semibold text-gray-900">€150 - €400</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Bevestigingsmaterialen</span>
                  <span className="font-semibold text-gray-900">€50 - €100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Elektrische componenten</span>
                  <span className="font-semibold text-gray-900">€75 - €150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Koudemiddel (R32)</span>
                  <span className="font-semibold text-gray-900">€30 - €80</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Arbeidskosten (30-40%)</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Plaatsing buitenunit</span>
                  <span className="font-semibold text-gray-900">€150 - €250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Plaatsing binnenunit(s)</span>
                  <span className="font-semibold text-gray-900">€100 - €200/unit</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Leidingwerk aanleggen</span>
                  <span className="font-semibold text-gray-900">€150 - €300</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Elektrische aansluiting</span>
                  <span className="font-semibold text-gray-900">€100 - €150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Vacuüm trekken + vullen</span>
                  <span className="font-semibold text-gray-900">€75 - €125</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Inbedrijfstelling + instructie</span>
                  <span className="font-semibold text-gray-900">€50 - €100</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-gray-900 mb-2">Let op: Basis vs. Totaalprijs</div>
                <p className="text-gray-700">
                  Sommige aanbieders adverteren met een lage "basisprijs" maar rekenen extra voor installatie,
                  leidingwerk, elektrische aansluiting, etc. Bij StayCool is de genoemde prijs altijd inclusief
                  complete installatie (met leidingwerk tot 5m). Vraag altijd naar de <strong>totaalprijs inclusief installatie</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factoren die Prijs Beïnvloeden */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Welke Factoren Beïnvloeden de Kosten?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Begrijp waarom prijzen kunnen variëren en waar u invloed op heeft
            </p>
          </div>

          <div className="space-y-4">
            {kostenFactoren.map((factor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{factor.factor}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        factor.impact === 'Zeer hoog' ? 'bg-red-100 text-red-700' :
                        factor.impact === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                        factor.impact === 'Gemiddeld' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {factor.impact} impact
                      </span>
                    </div>
                    <p className="text-gray-600">{factor.uitleg}</p>
                  </div>
                  <div className="bg-blue-50 px-6 py-3 rounded-lg text-center flex-shrink-0">
                    <div className="text-sm text-gray-600 mb-1">Prijsverschil</div>
                    <div className="text-lg font-bold text-blue-600">{factor.prijsverschil}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verborgen Kosten Vermijden */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Verborgen Kosten Vermijden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Waar u op moet letten om verrassingen achteraf te voorkomen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {verborgenKosten.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.titel}</h3>
                    <p className="text-gray-700 mb-2">{item.beschrijving}</p>
                    <div className="bg-white rounded-lg px-3 py-2 inline-block mb-2">
                      <span className="text-sm text-gray-600">Mogelijke extra kosten: </span>
                      <span className="font-bold text-red-600">{item.kosten}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                  <div className="text-sm">
                    <span className="font-semibold text-green-800">✓ Hoe te vermijden: </span>
                    <span className="text-gray-700">{item.vermijden}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-gray-900 mb-2">StayCool Transparantie Garantie</div>
                <p className="text-gray-700 mb-3">
                  Bij StayCool krijgt u altijd vooraf een complete offerte met alle kosten. Geen verrassingen achteraf:
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Vaste prijs inclusief standaard installatie (leidingwerk tot 5m)</li>
                  <li>✓ Eventuele meerkosten worden vooraf besproken en goedgekeurd</li>
                  <li>✓ Geen voorrijkosten in Limburg</li>
                  <li>✓ Duidelijke offerte met alle specificaties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Berekening */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Return on Investment (ROI)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wanneer verdient een airco zichzelf terug? Realistische berekeningen
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {roiBerekening.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      item.color === 'green' ? 'bg-green-100' :
                      item.color === 'blue' ? 'bg-blue-100' :
                      'bg-gray-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        item.color === 'green' ? 'text-green-600' :
                        item.color === 'blue' ? 'text-blue-600' :
                        'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.situatie}</h3>

                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-red-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">Oude situatie</div>
                          <div className="text-lg font-bold text-red-600">{item.oudeSituatie}</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">Met airco</div>
                          <div className="text-lg font-bold text-green-600">{item.nieuweSituatie}</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">Besparing</div>
                          <div className="text-lg font-bold text-blue-600">{item.besparing}</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">Terugverdientijd</div>
                          <div className="text-lg font-bold text-purple-600">{item.terugverdientijd}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <div className="flex gap-3">
              <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-gray-900 mb-2">Berekeningsvoorbeeld Single-Split (€1.650)</div>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Scenario: Vervanging elektrische verwarming (20m² slaapkamer)</strong></p>
                  <p>• Oude situatie: Elektrische verwarming 1500W × 8 uur/dag × 180 dagen × €0,40/kWh = <strong>€1.728/jaar</strong></p>
                  <p>• Met airco: Airco 2,5kW (0,7kW input) × 8 uur/dag × 180 dagen × €0,40/kWh = <strong>€605/jaar</strong></p>
                  <p>• <strong>Besparing: €1.123 per jaar</strong></p>
                  <p>• <strong>Terugverdientijd: 1,5 jaar</strong> (€1.650 / €1.123)</p>
                  <p className="text-sm italic">Na 10 jaar: €11.230 bespaard - €1.650 investering - €500 onderhoud = €9.080 netto voordeel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Zap className="w-8 h-8 text-yellow-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Energiebesparing</h3>
              <p className="text-gray-600 text-sm mb-3">
                Moderne airco's zijn 3-4x efficiënter dan elektrische verwarming dankzij warmtepomp technologie.
              </p>
              <div className="bg-green-50 rounded px-3 py-2">
                <span className="text-green-700 font-semibold">SCOP 4.0+</span>
                <span className="text-gray-600 text-sm ml-2">= 400% rendement</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <Home className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Waarde Toevoeging</h3>
              <p className="text-gray-600 text-sm mb-3">
                Een airco verhoogt de verkoopwaarde en aantrekkelijkheid van uw woning.
              </p>
              <div className="bg-blue-50 rounded px-3 py-2">
                <span className="text-blue-700 font-semibold">+€2.000 - €5.000</span>
                <span className="text-gray-600 text-sm ml-2">woningwaarde</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Toekomstbestendig</h3>
              <p className="text-gray-600 text-sm mb-3">
                Energieprijzen stijgen. Investeer nu en profiteer jarenlang van lagere kosten.
              </p>
              <div className="bg-purple-50 rounded px-3 py-2">
                <span className="text-purple-700 font-semibold">15-20 jaar</span>
                <span className="text-gray-600 text-sm ml-2">levensduur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespaartips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              7 Tips om Kosten te Besparen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Slim investeren zonder in te boeten op kwaliteit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Koop buiten het hoogseizoen</h3>
                  <p className="text-gray-600 text-sm">
                    Voor- en najaar (maart-mei, september-oktober) bieden vaak betere prijzen en kortere wachttijden.
                  </p>
                  <div className="mt-2 text-green-700 font-semibold text-sm">Mogelijke besparing: €100 - €300</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Optimaliseer leidingwerk afstand</h3>
                  <p className="text-gray-600 text-sm">
                    Plaats binnen- en buitenunit zo dicht mogelijk bij elkaar (binnen 5m is vaak inclusief).
                  </p>
                  <div className="mt-2 text-blue-700 font-semibold text-sm">Mogelijke besparing: €30 - €60 per extra meter</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kies multi-split voor meerdere ruimtes</h3>
                  <p className="text-gray-600 text-sm">
                    3 separate single-splits kosten meer dan 1 multi-split met 3 binnenunits.
                  </p>
                  <div className="mt-2 text-purple-700 font-semibold text-sm">Mogelijke besparing: €500 - €1.000</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 border-orange-200">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Vergelijk complete offertes</h3>
                  <p className="text-gray-600 text-sm">
                    Let op totaalprijs inclusief installatie. Goedkope units kunnen dure installatie hebben.
                  </p>
                  <div className="mt-2 text-orange-700 font-semibold text-sm">Voorkom verrassingen van €200 - €500</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Sluit onderhoudscontract af</h3>
                  <p className="text-gray-600 text-sm">
                    €11-€16/maand is goedkoper dan losse beurten (€179) en verlengt levensduur.
                  </p>
                  <div className="mt-2 text-red-700 font-semibold text-sm">Besparing: €47 per jaar + langere levensduur</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border-2 border-teal-200">
              <div className="flex items-start gap-3">
                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kies juiste capaciteit</h3>
                  <p className="text-gray-600 text-sm">
                    Te groot = duurder in aanschaf. Te klein = hogere energiekosten. Vraag advies voor juiste maat.
                  </p>
                  <div className="mt-2 text-teal-700 font-semibold text-sm">Optimale efficiëntie = lagere jaarkosten</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border-2 border-indigo-200">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">7</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Investeer in kwaliteit</h3>
                  <p className="text-gray-600 text-sm">
                    A-merken gaan langer mee en zijn zuiniger. Lagere prijs nu = hogere kosten later.
                  </p>
                  <div className="mt-2 text-indigo-700 font-semibold text-sm">15-20 jaar vs. 8-12 jaar bij budgetmerken</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border-2 border-yellow-200">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">💡</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Bonus: Check subsidies</h3>
                  <p className="text-gray-600 text-sm">
                    Informeer bij gemeente naar ISDE subsidie of lokale regelingen voor duurzame verwarming.
                  </p>
                  <div className="mt-2 text-yellow-700 font-semibold text-sm">Mogelijk tot €500 - €1.500 subsidie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar pillar page */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Meer Informatie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/kennisbank/airco-installatie-limburg" className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <ArrowRight className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-600 mb-2 text-lg">Airco Installatie Limburg</h3>
                  <p className="text-gray-600">Alles over professionele airco installatie in Limburg: proces, voorbereiding, merken en garanties</p>
                </div>
              </div>
            </Link>

            <Link to="/contact" className="group p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md hover:shadow-xl transition-all text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-lg">Gratis Offerte Aanvragen</h3>
                  <p className="text-green-50">Ontvang binnen 24 uur een vrijblijvende offerte op maat met transparante prijzen</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transparante Prijs Garantie
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bij StayCool krijgt u altijd een complete offerte inclusief alle installatiekosten.
            Geen verrassingen, geen verborgen kosten.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="font-bold mb-1">Vaste Prijs</div>
              <div className="text-sm text-blue-100">Inclusief installatie tot 5m leidingwerk</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="font-bold mb-1">Geen Voorrijkosten</div>
              <div className="text-sm text-blue-100">Gratis service in heel Limburg</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="font-bold mb-1">24u Respons</div>
              <div className="text-sm text-blue-100">Snelle offerte binnen 1 werkdag</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-lg text-lg"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Bereken Uw Prijs
            </Link>
            <a
              href="tel:0462021430"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors inline-flex items-center justify-center shadow-lg text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              046 202 1430
            </a>
          </div>

          <p className="text-sm text-blue-200 mt-6">
            Bel voor direct advies of vul het contactformulier in voor een schriftelijke offerte
          </p>
        </div>
      </section>
    </div>
  );
};

export default AircoInstallatieLimburgKostenPage;
