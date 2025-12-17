import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Zap, TrendingUp, Leaf, Euro, Phone, Info, AlertCircle } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoStroomverbruikBerekenen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Energiezuinige Airco', path: '/kennisbank/energiezuinige-airco-limburg' },
    { label: 'Stroomverbruik Berekenen' }
  ];

  // Calculator state
  const [capaciteit, setCapaciteit] = useState(3.5);
  const [energieLabel, setEnergieLabel] = useState('A+++');
  const [urenPerDag, setUrenPerDag] = useState(8);
  const [dagenPerJaar, setDagenPerJaar] = useState(150);
  const [stroomprijs, setStroomprijs] = useState(0.40);

  // Bereken verbruik
  const getVerbruikPerUur = (label: string) => {
    const verbruikMap: { [key: string]: number } = {
      'A+++': 0.4,
      'A++': 0.5,
      'A+': 0.6,
      'A': 0.7,
      'B': 0.9,
      'C': 1.1
    };
    return verbruikMap[label] || 0.7;
  };

  const verbruikPerUur = getVerbruikPerUur(energieLabel) * (capaciteit / 3.5);
  const verbruikPerDag = verbruikPerUur * urenPerDag;
  const verbruikPerJaar = verbruikPerDag * dagenPerJaar;
  const kostenPerUur = verbruikPerUur * stroomprijs;
  const kostenPerDag = verbruikPerDag * stroomprijs;
  const kostenPerJaar = verbruikPerJaar * stroomprijs;

  const modelVergelijking = [
    {
      type: '2.5 kW (kleine kamer)',
      capaciteit: '2.5 kW',
      labels: {
        'A+++': { verbruik: '0.3 kWh/u', kosten: '€0.12/u', jaar: '€72' },
        'A++': { verbruik: '0.36 kWh/u', kosten: '€0.14/u', jaar: '€86' },
        'A': { verbruik: '0.5 kWh/u', kosten: '€0.20/u', jaar: '€120' }
      }
    },
    {
      type: '3.5 kW (gemiddelde kamer)',
      capaciteit: '3.5 kW',
      labels: {
        'A+++': { verbruik: '0.4 kWh/u', kosten: '€0.16/u', jaar: '€96' },
        'A++': { verbruik: '0.5 kWh/u', kosten: '€0.20/u', jaar: '€120' },
        'A': { verbruik: '0.7 kWh/u', kosten: '€0.28/u', jaar: '€168' }
      }
    },
    {
      type: '5.0 kW (grote kamer)',
      capaciteit: '5.0 kW',
      labels: {
        'A+++': { verbruik: '0.55 kWh/u', kosten: '€0.22/u', jaar: '€132' },
        'A++': { verbruik: '0.7 kWh/u', kosten: '€0.28/u', jaar: '€168' },
        'A': { verbruik: '1.0 kWh/u', kosten: '€0.40/u', jaar: '€240' }
      }
    },
    {
      type: '7.0 kW (zeer grote ruimte)',
      capaciteit: '7.0 kW',
      labels: {
        'A+++': { verbruik: '0.8 kWh/u', kosten: '€0.32/u', jaar: '€192' },
        'A++': { verbruik: '1.0 kWh/u', kosten: '€0.40/u', jaar: '€240' },
        'A': { verbruik: '1.4 kWh/u', kosten: '€0.56/u', jaar: '€336' }
      }
    }
  ];

  const bespaartips = [
    {
      titel: 'Gebruik Slimme Thermostaat',
      besparing: '15-25%',
      beschrijving: 'Programmeer de airco om alleen te werken wanneer nodig',
      praktisch: 'Zet op 24°C in plaats van 20°C voor koelen'
    },
    {
      titel: 'Onderhoud Filters',
      besparing: '10-15%',
      beschrijving: 'Vuile filters verhogen het stroomverbruik aanzienlijk',
      praktisch: 'Reinig filters elke 2 weken, vervang 1x per jaar'
    },
    {
      titel: 'Isoleer Goed',
      besparing: '20-30%',
      beschrijving: 'Voorkom warmte-uitwisseling met buiten',
      praktisch: 'Sluit deuren en ramen, gebruik zonwering'
    },
    {
      titel: 'Juiste Capaciteit',
      besparing: '15-20%',
      beschrijving: 'Te groot is net zo verkwistend als te klein',
      praktisch: 'Bereken: 100W per m² voor goede isolatie'
    },
    {
      titel: 'Nachtmodus Gebruiken',
      besparing: '10-15%',
      beschrijving: 'Automatisch lagere prestaties in de nacht',
      praktisch: 'Temperatuur stijgt/daalt geleidelijk tijdens slaap'
    },
    {
      titel: 'Regelmatig Onderhoud',
      besparing: '10-20%',
      beschrijving: 'Jaarlijks onderhoud houdt efficiëntie op peil',
      praktisch: 'Laat buitenunit reinigen en koudemiddel controleren'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Stroomverbruik Berekenen - Kosten Calculator | StayCool"
        description="Bereken exact hoeveel stroom je airco verbruikt. Inclusief rekenvoorbeelden per model, energielabel vergelijking en praktische bespaartips."
        canonicalUrl="https://staycoolairco.nl/energiezuinig/noindex/stroomverbruik"
        noIndex={true}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Interactieve Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airco Stroomverbruik Berekenen
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Bereken precies hoeveel je airco kost en ontdek hoe je tot 40% kunt besparen
            op je energierekening.
          </p>
        </div>
      </section>

      {/* Interactieve Calculator */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-600">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Bereken Jouw Stroomverbruik
                </h2>
                <p className="text-gray-600">Vul je gegevens in voor een exacte berekening</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {/* Capaciteit */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Capaciteit Airco: {capaciteit} kW
                </label>
                <input
                  type="range"
                  min="2.5"
                  max="7"
                  step="0.5"
                  value={capaciteit}
                  onChange={(e) => setCapaciteit(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>2.5 kW</span>
                  <span>7.0 kW</span>
                </div>
              </div>

              {/* Energielabel */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Energielabel
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {['A+++', 'A++', 'A+', 'A', 'B', 'C'].map((label) => (
                    <button
                      key={label}
                      onClick={() => setEnergieLabel(label)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        energieLabel === label
                          ? 'bg-blue-600 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Uren per dag */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Uren per dag: {urenPerDag} uur
                </label>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={urenPerDag}
                  onChange={(e) => setUrenPerDag(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Dagen per jaar */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Dagen per jaar: {dagenPerJaar} dagen
                </label>
                <input
                  type="range"
                  min="30"
                  max="365"
                  value={dagenPerJaar}
                  onChange={(e) => setDagenPerJaar(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Stroomprijs */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Stroomprijs: €{stroomprijs.toFixed(2)}/kWh
                </label>
                <input
                  type="range"
                  min="0.20"
                  max="0.60"
                  step="0.01"
                  value={stroomprijs}
                  onChange={(e) => setStroomprijs(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Resultaten */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Jouw Resultaat</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-white/80 mb-2">Verbruik per uur</p>
                  <p className="text-3xl font-bold">{verbruikPerUur.toFixed(2)}</p>
                  <p className="text-white/80">kWh</p>
                </div>
                <div className="text-center">
                  <p className="text-white/80 mb-2">Verbruik per jaar</p>
                  <p className="text-3xl font-bold">{verbruikPerJaar.toFixed(0)}</p>
                  <p className="text-white/80">kWh</p>
                </div>
                <div className="text-center">
                  <p className="text-white/80 mb-2">Kosten per jaar</p>
                  <p className="text-3xl font-bold">€{kostenPerJaar.toFixed(0)}</p>
                  <p className="text-white/80">per jaar</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex justify-around text-center text-sm">
                  <div>
                    <p className="text-white/80">Per uur</p>
                    <p className="font-bold text-lg">€{kostenPerUur.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-white/80">Per dag</p>
                    <p className="font-bold text-lg">€{kostenPerDag.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-white/80">Per maand</p>
                    <p className="font-bold text-lg">€{(kostenPerJaar / 12).toFixed(0)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Vergelijking */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Verbruik Per Model en Energielabel
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Gebaseerd op 600 uur gebruik per jaar @ €0.40/kWh
          </p>

          <div className="space-y-6">
            {modelVergelijking.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4">
                  <h3 className="text-xl font-bold">{model.type}</h3>
                  <p className="text-white/90 text-sm">Koelvermogen: {model.capaciteit}</p>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(model.labels).map(([label, data]) => (
                      <div
                        key={label}
                        className={`p-4 rounded-lg border-2 ${
                          label === 'A+++'
                            ? 'border-green-600 bg-green-50'
                            : label === 'A++'
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-orange-400 bg-orange-50'
                        }`}
                      >
                        <div className="text-center mb-3">
                          <span
                            className={`inline-block px-3 py-1 rounded-full font-bold ${
                              label === 'A+++'
                                ? 'bg-green-600 text-white'
                                : label === 'A++'
                                ? 'bg-blue-600 text-white'
                                : 'bg-orange-400 text-white'
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Verbruik:</span>
                            <strong>{data.verbruik}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Per uur:</span>
                            <strong>{data.kosten}</strong>
                          </div>
                          <div className="flex justify-between pt-2 border-t">
                            <span className="text-gray-600">Per jaar:</span>
                            <strong className="text-lg">{data.jaar}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-blue-900 mb-2">
                  Variaties in Verbruik
                </p>
                <p className="text-blue-800 text-sm">
                  Het werkelijke verbruik hangt af van buitentemperatuur, isolatie, gewenste
                  binnentemperatuur en gebruik. Een A+++ airco past zijn vermogen automatisch
                  aan (inverter), waardoor het gemiddelde verbruik lager ligt dan het maximum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespaartips */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Tot 40% Besparen</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              6 Praktische Tips Om Verbruik Te Verlagen
            </h2>
            <p className="text-xl text-gray-600">
              Zo haal je het maximale uit je airco en minimaliseer je het verbruik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bespaartips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    {tip.titel}
                  </h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                    {tip.besparing}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{tip.beschrijving}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Praktisch:</strong> {tip.praktisch}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-green-600 to-blue-600 text-white p-8 rounded-xl shadow-xl">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">
                Combineer Deze Tips Voor Maximale Besparing
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Door alle tips te combineren kun je het stroomverbruik van je airco
                met 30-40% verlagen. Dat scheelt al snel €100-€200 per jaar!
              </p>
              <div className="inline-flex items-center gap-4 bg-white/10 px-6 py-3 rounded-lg">
                <div className="text-left">
                  <p className="text-sm text-white/80">Gemiddelde besparing</p>
                  <p className="text-2xl font-bold">€150 per jaar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veel Voorkomende Vragen */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen Over Verbruik
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Verbruikt een airco veel stroom?
              </h3>
              <p className="text-gray-700">
                Een moderne A+++ airco verbruikt 0.4-0.5 kWh per uur, vergelijkbaar met
                een waterkoker die 30 minuten aanstaat. Bij 600 uur gebruik per jaar
                kost dit €96-€120. Dat is minder dan een oude koelkast!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is verwarmen met een airco goedkoper dan gasverwarming?
              </h3>
              <p className="text-gray-700 mb-3">
                Ja! Een airco met SCOP 5.0 produceert 5 kWh warmte per 1 kWh elektriciteit.
                Bij €0.40/kWh stroom kost 1 kWh warmte dus €0.08. Gas kost €1.50/m³ ≈ €0.15
                per kWh warmte. Dat is bijna 2x zo duur!
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <p className="text-green-900 text-sm">
                  <strong>Besparing:</strong> Met een airco verwarmen kan €300-€600 per jaar
                  schelen t.o.v. gasverwarming (bij gemiddeld gebruik).
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Waarom verschilt mijn verbruik van de specificaties?
              </h3>
              <p className="text-gray-700">
                Het werkelijke verbruik hangt af van:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Temperatuurverschil binnen/buiten (groter = meer verbruik)</li>
                <li>Isolatie van je woning (beter = minder verbruik)</li>
                <li>Gewenste binnentemperatuur (extremer = meer verbruik)</li>
                <li>Onderhoudsstaat (vuile filters = +15% verbruik)</li>
                <li>Juiste capaciteit (te groot/klein = verkwisting)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kan ik mijn oude airco upgraden?
              </h3>
              <p className="text-gray-700">
                Een oude B-label airco (van 10+ jaar oud) verbruikt vaak 2x zoveel als
                een nieuwe A+++ airco. Vervanging verdient zich in 3-5 jaar terug door
                lagere energiekosten. Bereken: (oud verbruik - nieuw verbruik) × uren × prijs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar Pillar Page */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-600 to-green-600">
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
                  Meer informatie over energiebesparing, subsidies, energielabels en
                  de beste energiezuinige airco's voor jouw situatie.
                </p>
                <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                  Bekijk alle informatie
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
          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-12 rounded-2xl shadow-xl">
            <Calculator className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">
              Persoonlijke Verbruiksanalyse?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Wij berekenen exact wat je huidige airco verbruikt en hoeveel je
              kunt besparen met een zuiniger model. Inclusief terugverdientijd!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0475303000"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                0475-303000
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Gratis Besparingsadvies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AircoStroomverbruikBerekenen;
