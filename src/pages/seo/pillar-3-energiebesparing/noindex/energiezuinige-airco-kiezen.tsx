import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Leaf, TrendingDown, Star, Award, Phone, CheckCircle2 } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const EnergiezuinigeAircoKiezen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Energiezuinige Airco', path: '/kennisbank/energiezuinige-airco-limburg' },
    { label: 'Airco Kiezen' }
  ];

  const topModels = [
    {
      merk: 'Daikin Emura',
      scop: '5.15',
      seer: '8.73',
      label: 'A+++',
      verbruik: '0.4 kWh/uur',
      besparing: '42%'
    },
    {
      merk: 'Mitsubishi MSZ-LN',
      scop: '5.10',
      seer: '8.60',
      label: 'A+++',
      verbruik: '0.45 kWh/uur',
      besparing: '40%'
    },
    {
      merk: 'Panasonic Etherea',
      scop: '5.05',
      seer: '8.50',
      label: 'A+++',
      verbruik: '0.48 kWh/uur',
      besparing: '38%'
    },
    {
      merk: 'LG Artcool',
      scop: '4.90',
      seer: '8.30',
      label: 'A++',
      verbruik: '0.52 kWh/uur',
      besparing: '35%'
    },
    {
      merk: 'Samsung WindFree',
      scop: '4.85',
      seer: '8.20',
      label: 'A++',
      verbruik: '0.55 kWh/uur',
      besparing: '33%'
    }
  ];

  const selectieCriteria = [
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      titel: 'Energielabel A+++',
      beschrijving: 'Kies minimaal A++ of A+++ voor maximale besparing',
      waarden: 'SCOP >5.1, SEER >8.5'
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-blue-600" />,
      titel: 'Laag Verbruik',
      beschrijving: 'Let op kWh verbruik per uur koelen/verwarmen',
      waarden: 'Streef naar <0.5 kWh/uur'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      titel: 'Inverter Technologie',
      beschrijving: 'Essentieel voor zuinig en stil gebruik',
      waarden: 'Tot 30% besparing vs on/off'
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      titel: 'R32 Koelmiddel',
      beschrijving: 'Milieuvriendelijk en efficiënter',
      waarden: 'Lager GWP, betere prestaties'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Energiezuinige Airco Kiezen - SCOP & SEER Guide | StayCool"
        description="Zo kies je de zuinigste airco. Uitleg SCOP/SEER waarden, top 5 zuinigste modellen en waar je op moet letten bij A+++ airconditioning."
        canonicalUrl="https://staycoolairco.nl/energiezuinig/noindex/kiezen"
        noIndex={true}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Leaf className="w-5 h-5" />
            <span className="font-semibold">Bespaar tot 42% op energiekosten</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Zo Kies Je de Zuinigste Airco
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Complete gids voor het kiezen van een energiezuinige airco met A+++ label.
            Begrijp SCOP en SEER waarden en ontdek de top 5 zuinigste modellen.
          </p>
        </div>
      </section>

      {/* Belangrijkste Criteria */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Waar Let Je Op Bij Een Zuinige Airco?
            </h2>
            <p className="text-xl text-gray-600">
              Deze 4 factoren bepalen het energieverbruik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {selectieCriteria.map((criterium, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    {criterium.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {criterium.titel}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {criterium.beschrijving}
                    </p>
                    <div className="bg-green-50 px-4 py-2 rounded-lg inline-block">
                      <span className="text-sm font-semibold text-green-700">
                        {criterium.waarden}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOP en SEER Uitleg */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            SCOP en SEER Waarden Begrijpen
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* SCOP */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SCOP</h3>
                  <p className="text-gray-600">Verwarmingsefficiëntie</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Wat is SCOP?</p>
                  <p className="text-gray-700">
                    Seasonal Coefficient of Performance. Meet hoeveel warmte de airco
                    produceert per kWh elektriciteit over een heel stookseizoen.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-900 mb-2">Classificatie:</p>
                  <ul className="space-y-1 text-sm text-orange-800">
                    <li>• <strong>A+++:</strong> SCOP ≥ 5.1</li>
                    <li>• <strong>A++:</strong> SCOP 4.6 - 5.09</li>
                    <li>• <strong>A+:</strong> SCOP 4.0 - 4.59</li>
                    <li>• <strong>A:</strong> SCOP 3.4 - 3.99</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Voorbeeld:</strong> SCOP 5.1 betekent: per 1 kWh
                    elektriciteit krijg je 5.1 kWh warmte. Dat is 510% efficiënt!
                  </p>
                </div>
              </div>
            </div>

            {/* SEER */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <TrendingDown className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SEER</h3>
                  <p className="text-gray-600">Koelefficiëntie</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Wat is SEER?</p>
                  <p className="text-gray-700">
                    Seasonal Energy Efficiency Ratio. Meet hoeveel koude de airco
                    produceert per kWh elektriciteit over een heel koelseizoen.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-2">Classificatie:</p>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• <strong>A+++:</strong> SEER ≥ 8.5</li>
                    <li>• <strong>A++:</strong> SEER 7.5 - 8.49</li>
                    <li>• <strong>A+:</strong> SEER 6.1 - 7.49</li>
                    <li>• <strong>A:</strong> SEER 5.1 - 6.09</li>
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    <strong>Voorbeeld:</strong> SEER 8.5 betekent: per 1 kWh
                    elektriciteit krijg je 8.5 kWh koeling. Dat is 850% efficiënt!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Praktisch Voorbeeld */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">💡 Praktisch Voorbeeld</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold mb-2">Airco A+++ (SCOP 5.1)</p>
                <p className="text-white/90 text-sm">
                  Verbruikt 0.4 kWh/uur × €0.40 = <strong>€0.16 per uur</strong> verwarmen
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Airco A (SCOP 3.5)</p>
                <p className="text-white/90 text-sm">
                  Verbruikt 0.7 kWh/uur × €0.40 = <strong>€0.28 per uur</strong> verwarmen
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="font-bold">
                Besparing: €0.12 per uur = €288 per jaar (2400 uur gebruik)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 Zuinigste Modellen */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Top 5 Selectie</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Zuinigste Airco's van 2024
            </h2>
            <p className="text-xl text-gray-600">
              Deze modellen scoren het hoogst op energiebesparing
            </p>
          </div>

          <div className="space-y-6">
            {topModels.map((model, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold text-lg">
                      #{index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{model.merk}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                          {model.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">SCOP</p>
                      <p className="text-xl font-bold text-orange-600">{model.scop}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">SEER</p>
                      <p className="text-xl font-bold text-blue-600">{model.seer}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Verbruik</p>
                      <p className="text-lg font-bold text-gray-900">{model.verbruik}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Besparing</p>
                      <p className="text-lg font-bold text-green-600">{model.besparing}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-blue-900">
              <strong>Let op:</strong> Besparing berekend t.o.v. een gemiddelde A-label airco.
              Bij 2400 uur gebruik per jaar bespaart een A+++ airco al snel €250-€400 per jaar!
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Airco Kiezen */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Checklist: Zuinige Airco Kiezen
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-4">
              {[
                'Kies minimaal energielabel A++ of A+++',
                'Check SCOP waarde (>5.0 voor verwarmen)',
                'Check SEER waarde (>8.0 voor koelen)',
                'Controleer kWh verbruik per uur (liefst <0.5)',
                'Vraag naar inverter technologie (standaard bij A+++)',
                'Kies voor R32 koelmiddel (efficiënter dan R410A)',
                'Bepaal juiste capaciteit (te groot = verkwisting)',
                'Vraag naar wifi-bediening voor slimmer gebruik',
                'Overweeg duo-split voor meerdere ruimtes (efficiënter)',
                'Laat berekenen: terugverdientijd t.o.v. goedkoper model'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600">
                <strong>Pro tip:</strong> Een A+++ airco kost vaak €300-€500 meer dan een A+ model,
                maar verdient zich in 2-3 jaar terug door lagere energiekosten.
              </p>
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
                  Alles over energiebesparing, subsidies, berekeningen en de beste merken
                  voor energiezuinige airconditioning in Limburg.
                </p>
                <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                  Lees de volledige gids
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
            <h2 className="text-3xl font-bold mb-4">
              Hulp Nodig Bij Het Kiezen?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Onze specialisten helpen je de zuinigste airco te kiezen voor jouw situatie.
              Inclusief gratis advies en exacte besparingsberekening.
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
                Vraag Offerte Aan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergiezuinigeAircoKiezen;
