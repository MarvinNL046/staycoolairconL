import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, TrendingDown, Award, Leaf, Euro, Phone, Info } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoEnergielabelUitgelegd = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Energiezuinige Airco', path: '/kennisbank/energiezuinige-airco-limburg' },
    { label: 'Energielabel Uitgelegd' }
  ];

  const labelKlassen = [
    {
      label: 'A+++',
      kleur: 'from-green-600 to-green-700',
      scop: '≥ 5.1',
      seer: '≥ 8.5',
      verbruik: '0.4-0.5 kWh/uur',
      kosten: '€96-€120/jaar',
      beschrijving: 'Top efficiëntie, hoogste besparing'
    },
    {
      label: 'A++',
      kleur: 'from-green-500 to-green-600',
      scop: '4.6-5.09',
      seer: '7.5-8.49',
      verbruik: '0.5-0.6 kWh/uur',
      kosten: '€120-€144/jaar',
      beschrijving: 'Zeer efficiënt, grote besparing'
    },
    {
      label: 'A+',
      kleur: 'from-lime-500 to-green-500',
      scop: '4.0-4.59',
      seer: '6.1-7.49',
      verbruik: '0.6-0.7 kWh/uur',
      kosten: '€144-€168/jaar',
      beschrijving: 'Goed, redelijke besparing'
    },
    {
      label: 'A',
      kleur: 'from-yellow-500 to-lime-500',
      scop: '3.4-3.99',
      seer: '5.1-6.09',
      verbruik: '0.7-0.9 kWh/uur',
      kosten: '€168-€216/jaar',
      beschrijving: 'Basis, minimale besparing'
    },
    {
      label: 'B',
      kleur: 'from-orange-500 to-yellow-500',
      scop: '3.1-3.39',
      seer: '4.5-5.09',
      verbruik: '0.9-1.1 kWh/uur',
      kosten: '€216-€264/jaar',
      beschrijving: 'Matig, niet aan te raden'
    },
    {
      label: 'C-D',
      kleur: 'from-red-500 to-orange-500',
      scop: '< 3.1',
      seer: '< 4.5',
      verbruik: '> 1.1 kWh/uur',
      kosten: '> €264/jaar',
      beschrijving: 'Onzuinig, hoge kosten'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Energielabel Uitgelegd - A+++ Label & SCOP/SEER | StayCool"
        description="Wat betekent het energielabel van je airco? Complete uitleg A+++ tot D, SCOP en SEER waarden, en wat dit betekent voor je energierekening."
        canonicalUrl="https://staycoolairco.nl/energiezuinig/noindex/energielabel"
        noIndex={true}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Officiële EU Energielabels</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airco Energielabel Uitgelegd
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Begrijp wat A+++, SCOP en SEER betekenen en hoeveel je bespaart
            met een zuinig energielabel.
          </p>
        </div>
      </section>

      {/* Wat is het Energielabel */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wat is het Energielabel?
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-4">
                Het energielabel voor airconditioning is een EU-verplichte classificatie
                die aangeeft hoe zuinig een airco is. Labels lopen van A+++ (zeer zuinig)
                tot D (onzuinig).
              </p>
              <p className="mb-4">
                Het label is gebaseerd op twee belangrijke metingen:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span><strong>SCOP</strong> - Seasonal Coefficient of Performance (verwarmen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingDown className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>SEER</strong> - Seasonal Energy Efficiency Ratio (koelen)</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-blue-900">
                  <strong>Let op:</strong> Voor split-unit airco's zijn er twee afzonderlijke
                  labels: één voor koelen en één voor verwarmen. Multi-split systemen hebben
                  vaak een apart label per binnenunit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energielabel Klassen */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Energielabel Klassen
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Kosten gebaseerd op 600 uur gebruik per jaar @ €0.40/kWh
          </p>

          <div className="space-y-4">
            {labelKlassen.map((klasse, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Label Badge */}
                  <div className={`bg-gradient-to-br ${klasse.kleur} text-white p-6 md:p-8 flex items-center justify-center md:w-48`}>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">{klasse.label}</div>
                      <div className="text-sm opacity-90">Energielabel</div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-6 md:p-8">
                    <p className="text-gray-700 mb-4 font-medium">{klasse.beschrijving}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">SCOP</p>
                        <p className="text-lg font-bold text-orange-600">{klasse.scop}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">SEER</p>
                        <p className="text-lg font-bold text-blue-600">{klasse.seer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Verbruik</p>
                        <p className="text-lg font-bold text-gray-900">{klasse.verbruik}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Jaarkosten</p>
                        <p className="text-lg font-bold text-green-600">{klasse.kosten}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Vanaf 2025: Strengere Energielabels
                </p>
                <p className="text-gray-700">
                  De EU herziet de energielabels. De huidige A+++ wordt waarschijnlijk de nieuwe
                  'B' of 'C'. Dit betekent niet dat je airco minder zuinig wordt, maar dat de
                  meetlat strenger wordt. Adviseren wij nu minimaal A++!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOP en SEER Diep Duiken */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            SCOP en SEER Waardes in Detail
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SCOP Detail */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-lg shadow">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SCOP</h3>
                  <p className="text-gray-600">Verwarmen (winter)</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Wat Meet SCOP?</h4>
                <p className="text-gray-700 mb-4">
                  De SCOP meet de verhouding tussen geproduceerde warmte en verbruikte
                  elektriciteit over een heel stookseizoen.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-mono text-sm text-gray-800">
                    SCOP = Totale warmte (kWh) ÷ Verbruikte energie (kWh)
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Praktijkvoorbeeld</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">SCOP waarde:</span>
                    <span className="font-bold text-orange-600">5.1</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Verbruik:</span>
                    <span className="font-bold">1 kWh elektriciteit</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Opbrengst:</span>
                    <span className="font-bold text-green-600">5.1 kWh warmte</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-700">Efficiëntie:</span>
                    <span className="font-bold text-green-600 text-xl">510%!</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-3">Testcondities SCOP</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Gemeten bij 3 buitentemperaturen (-10°C, +2°C, +12°C)</li>
                  <li>• Inclusief ontdooi-cycli</li>
                  <li>• Binnentemperatuur: 20°C</li>
                  <li>• Klimaatzone: Gemiddeld Europa (Straatsburg)</li>
                </ul>
              </div>
            </div>

            {/* SEER Detail */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-lg shadow">
                  <TrendingDown className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SEER</h3>
                  <p className="text-gray-600">Koelen (zomer)</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Wat Meet SEER?</h4>
                <p className="text-gray-700 mb-4">
                  De SEER meet de verhouding tussen geproduceerde koude en verbruikte
                  elektriciteit over een heel koelseizoen.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-mono text-sm text-gray-800">
                    SEER = Totale koeling (kWh) ÷ Verbruikte energie (kWh)
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Praktijkvoorbeeld</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">SEER waarde:</span>
                    <span className="font-bold text-blue-600">8.5</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Verbruik:</span>
                    <span className="font-bold">1 kWh elektriciteit</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-gray-700">Opbrengst:</span>
                    <span className="font-bold text-green-600">8.5 kWh koeling</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-700">Efficiëntie:</span>
                    <span className="font-bold text-green-600 text-xl">850%!</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-bold text-gray-900 mb-3">Testcondities SEER</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Gemeten bij 4 buitentemperaturen (20-35°C)</li>
                  <li>• 4 belastingsniveaus (25%, 50%, 75%, 100%)</li>
                  <li>• Binnentemperatuur: 27°C (koelen) / 20°C (ontv.)</li>
                  <li>• Klimaatzone: Gemiddeld Europa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Besparing Berekening */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wat Betekent Dit Voor Je Portemonnee?
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Vergelijking: A+++ vs A-label
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-600">
                <div className="text-center mb-4">
                  <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                    A+++
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>SCOP/SEER:</span>
                    <strong>5.1 / 8.5</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Verbruik:</span>
                    <strong>0.4 kWh/uur</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Per uur:</span>
                    <strong>€0.16</strong>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>600 uur/jaar:</span>
                    <strong className="text-lg text-green-600">€96</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>1200 uur/jaar:</span>
                    <strong className="text-lg text-green-600">€192</strong>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-lg border-2 border-orange-400">
                <div className="text-center mb-4">
                  <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full font-bold">
                    A
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>SCOP/SEER:</span>
                    <strong>3.5 / 5.5</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Verbruik:</span>
                    <strong>0.7 kWh/uur</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Per uur:</span>
                    <strong>€0.28</strong>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>600 uur/jaar:</span>
                    <strong className="text-lg text-orange-600">€168</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>1200 uur/jaar:</span>
                    <strong className="text-lg text-orange-600">€336</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
              <div className="text-center">
                <p className="text-2xl font-bold mb-2">
                  Jaarlijkse Besparing: €72 - €144
                </p>
                <p className="text-white/90">
                  Een A+++ airco verdient het prijsverschil in 2-4 jaar terug!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-blue-900 mb-2">
                  Realistische Besparingen
                </p>
                <p className="text-blue-800 text-sm">
                  Deze berekeningen zijn gebaseerd op een stroomprijs van €0.40/kWh.
                  Afhankelijk van je contract en gebruik kunnen de besparingen hoger
                  of lager uitvallen. Bij intensief gebruik (verwarmen én koelen)
                  kan een A+++ airco al €200-€400 per jaar besparen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar Pillar Page */}
      <section className="py-12 px-4 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/kennisbank/energiezuinige-airco-limburg"
            className="block bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  → Complete Gids Energiezuinige Airco
                </h3>
                <p className="text-gray-600 mb-4">
                  Meer informatie over energiebesparing, subsidies, beste merken en
                  praktische tips voor maximale efficiëntie.
                </p>
                <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                  Bekijk de hoofdgids
                  <span>→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-12 rounded-2xl shadow-xl">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">
              Advies Over Energielabels?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Twijfel je welk energielabel het beste bij jouw situatie past?
              Wij berekenen precies wat je bespaart en adviseren objectief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0475303000"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                0475-303000
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Gratis Adviesgesprek
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AircoEnergielabelUitgelegd;
