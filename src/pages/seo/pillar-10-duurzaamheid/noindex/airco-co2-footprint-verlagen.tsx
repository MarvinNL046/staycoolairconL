import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';

export default function AircoCO2FootprintVerlagen() {
  return (
    <>
      <MetaTags
        title="CO2-Footprint van Uw Airco Verlagen | StayCool Airco"
        description="Ontdek hoe u de CO2-uitstoot van uw airconditioning drastisch kunt verlagen. Praktische tips over energiebesparing, R32 koudemiddel en groene stroom voor klimaatvriendelijke koeling."
        noIndex={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8 md:py-12">

          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                CO2-Footprint van Uw Airco Verlagen
              </h1>
              <p className="text-xl text-gray-600">
                Van klimaatprobleem naar klimaatoplossing: maak uw airco CO2-neutraal
              </p>
            </header>

            {/* Introduction */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                De Impact van Airconditioning op het Klimaat
              </h2>
              <p className="text-gray-700 mb-4">
                Airconditioning heeft een dubbele klimaatimpact: directe uitstoot door koudemiddelen en
                indirecte uitstoot door energieverbruik. Met de juiste aanpak kunt u deze footprint met
                80-90% verlagen.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-semibold text-red-900 mb-2">Traditionele Airco</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• 800-1200 kg CO2/jaar</li>
                    <li>• Hoge GWP koudemiddelen</li>
                    <li>• Inefficiënt energieverbruik</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Duurzame Airco</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• 150-300 kg CO2/jaar</li>
                    <li>• R32 koudemiddel (lage GWP)</li>
                    <li>• Inverter + zonne-energie</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Understanding CO2 Impact */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Begrip van CO2-Uitstoot bij Airconditioning
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Twee Bronnen van CO2-Uitstoot
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">1. Directe Uitstoot (Koudemiddelen)</h4>
                      <p className="text-gray-700 mb-3">
                        Koudemiddelen hebben een Global Warming Potential (GWP) die duizenden keren sterker kan zijn
                        dan CO2. Bij lekkage komt dit direct in de atmosfeer.
                      </p>
                      <div className="bg-white p-3 rounded">
                        <p className="text-sm text-gray-700 mb-2"><strong>Vergelijking koudemiddelen:</strong></p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• R410A: GWP 2088 (zeer schadelijk)</li>
                          <li>• R32: GWP 675 (68% lager)</li>
                          <li>• R290 (propaan): GWP 3 (natuurlijk)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">2. Indirecte Uitstoot (Energieverbruik)</h4>
                      <p className="text-gray-700 mb-3">
                        Het energieverbruik van uw airco leidt tot CO2-uitstoot bij elektriciteitsopwekking.
                        Dit is meestal de grootste factor (70-80% van totale footprint).
                      </p>
                      <div className="bg-white p-3 rounded">
                        <p className="text-sm text-gray-700">
                          <strong>Voorbeeld:</strong> 1000 kWh verbruik = 400 kg CO2 (grijze stroom) of 0 kg CO2 (groene stroom)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategy 1: Efficient System */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Strategie 1: Kies een Energie-Efficiënt Systeem
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700">
                  De basis van CO2-reductie begint bij een zuinig systeem. Moderne technologie kan het
                  energieverbruik met 50-70% verlagen vergeleken met oude systemen.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Essentiële Eigenschappen:</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Inverter Technologie (Essentieel)</h4>
                        <p className="text-gray-700 text-sm">
                          Past vermogen geleidelijk aan in plaats van aan/uit schakelen. Bespaart 40-60% energie
                          en vermindert CO2-uitstoot met 200-400 kg/jaar.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">A+++ Energielabel (Hoogste Efficiency)</h4>
                        <p className="text-gray-700 text-sm">
                          SEER waarde van 8.5+ betekent uitzonderlijk laag verbruik. Dit scheelt 30-50% energie
                          ten opzichte van A++ systemen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Juiste Dimensionering (Cruciaal)</h4>
                        <p className="text-gray-700 text-sm">
                          Te groot = energieverspilling door korte cycli. Te klein = constant maximaal vermogen.
                          Professionele berekening voorkomt 20-30% onnodige CO2-uitstoot.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-gray-700">
                    <strong>CO2-Reductie:</strong> Met inverter + A+++ label kunt u 400-600 kg CO2 per jaar besparen
                    ten opzichte van een oud on/off systeem.
                  </p>
                </div>

                <p className="text-gray-700">
                  Lees meer over <Link to="/kennisbank/energielabel-verbetering" className="text-blue-600 hover:underline">
                    energielabel verbetering
                  </Link> en de impact op uw CO2-footprint.
                </p>
              </div>
            </section>

            {/* Strategy 2: R32 Refrigerant */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Strategie 2: Kies voor R32 Koudemiddel
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700">
                  Het koudemiddel heeft enorme impact op de directe CO2-footprint. R32 is momenteel de beste
                  keuze voor duurzame klimaatbeheersing.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">R410A (Oud)</h4>
                    <p className="text-sm text-gray-700 mb-2">GWP: 2088</p>
                    <p className="text-xs text-gray-600">
                      1 kg lekkage = 2088 kg CO2-equivalent. Wordt uitgefaseerd.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2">R32 (Aanbevolen)</h4>
                    <p className="text-sm text-gray-700 mb-2">GWP: 675</p>
                    <p className="text-xs text-gray-600">
                      1 kg lekkage = 675 kg CO2-equivalent. 68% beter dan R410A.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">R290 (Toekomst)</h4>
                    <p className="text-sm text-gray-700 mb-2">GWP: 3</p>
                    <p className="text-xs text-gray-600">
                      Natuurlijk koudemiddel (propaan). Zeer lage impact.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Waarom R32 de Juiste Keuze Is:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>68% lagere GWP betekent drastisch minder klimaatimpact bij lekkage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Betere thermodynamische eigenschappen = lager energieverbruik</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Minder koudemiddel nodig per systeem (kleinere vulhoeveelheid)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Gemakkelijker te recyclen en hergebruiken</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Voldoet aan toekomstige F-gassen regelgeving</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p className="text-gray-700">
                    <strong>Let op:</strong> Bij vervanging van uw oude airco is overstappen naar R32 verplicht.
                    R410A systemen mogen vanaf 2025 niet meer geïnstalleerd worden.
                  </p>
                </div>

                <p className="text-gray-700">
                  Ontdek meer over <Link to="/kennisbank/koudemiddel-r32" className="text-blue-600 hover:underline">
                    R32 koudemiddel en milieuvriendelijkheid
                  </Link>.
                </p>
              </div>
            </section>

            {/* Strategy 3: Green Energy */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Strategie 3: Combineer met Groene Energie
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700">
                  De grootste CO2-impact komt van het energieverbruik. Door over te stappen op groene stroom
                  kunt u de indirecte uitstoot tot nul reduceren.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-300">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="text-3xl mr-3">☀️</span>
                      Eigen Zonnepanelen (Beste Optie)
                    </h3>
                    <p className="text-gray-700 mb-3">
                      De perfecte combinatie: uw airco gebruikt de meeste energie wanneer de zon schijnt en uw
                      panelen de meeste stroom produceren.
                    </p>
                    <div className="bg-white p-4 rounded">
                      <p className="font-semibold text-gray-900 mb-2">Voordelen:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 100% CO2-neutrale koeling</li>
                        <li>• Gratis elektriciteit overdag</li>
                        <li>• Snelle terugverdientijd</li>
                        <li>• Verhoogt woningwaarde</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-300">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="text-3xl mr-3">🌱</span>
                      Groene Stroomcontract
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Geen zonnepanelen mogelijk? Kies dan voor een 100% groene stromleverancier met
                      duurzaamheidskeurmerk.
                    </p>
                    <div className="bg-white p-4 rounded">
                      <p className="font-semibold text-gray-900 mb-2">Let op:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Echt groen vs. groen gewassen</li>
                        <li>• Certificering controleren</li>
                        <li>• Kleine meerprijs, grote impact</li>
                        <li>• Combineerbaar met subsidies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Rekenvoorbeeld: Airco met Zonnepanelen</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-700 mb-2"><strong>Airco verbruik:</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 600 kWh per zomer</li>
                        <li>• Vooral overdag (70%)</li>
                        <li>• = 420 kWh eigen stroom</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 mb-2"><strong>CO2-reductie:</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Zonder zonnepanelen: 240 kg CO2</li>
                        <li>• Met zonnepanelen: 72 kg CO2</li>
                        <li className="text-green-600 font-semibold">• Besparing: 168 kg CO2 (70%)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700">
                  Meer informatie over <Link to="/kennisbank/duurzame-verwarming" className="text-blue-600 hover:underline">
                    duurzame klimaatoplossingen
                  </Link>.
                </p>
              </div>
            </section>

            {/* Strategy 4: Smart Usage */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Strategie 4: Slim Gebruik voor Minimale Footprint
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700">
                  Zelfs de meest efficiënte airco verspilt energie bij verkeerd gebruik. Deze tips verlagen
                  uw CO2-uitstoot met nog eens 30-40%.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">✓ Temperatuur Management</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 24-25°C instelling (niet kouder)</li>
                      <li>• Elke graad lager = 10% meer CO2</li>
                      <li>• Maximaal 7°C verschil met buiten</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">✓ Timing & Planning</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Alleen aan bij aanwezigheid</li>
                      <li>• Timer/WiFi voor optimaal gebruik</li>
                      <li>• Eco-modus voor 20% besparing</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">✓ Onderhoud & Efficiency</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Filters 2-wekelijks reinigen</li>
                      <li>• Vuile filter = 30% meer CO2</li>
                      <li>• Jaarlijkse professionele beurt</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">✓ Passieve Maatregelen</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Zonwering voor 40% minder load</li>
                      <li>• Nachtventilatie gebruiken</li>
                      <li>• Isolatie verbeteren</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CO2 Calculation */}
            <section className="mb-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Bereken Uw CO2-Besparing
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-4">Scenario: Oude Airco naar Duurzaam Systeem</h3>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-2 text-left">Kenmerk</th>
                          <th className="p-2 text-left">Oude Situatie</th>
                          <th className="p-2 text-left">Nieuwe Situatie</th>
                          <th className="p-2 text-left">Verschil</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-t">
                          <td className="p-2">Systeem</td>
                          <td className="p-2">On/off, R410A</td>
                          <td className="p-2">Inverter A+++, R32</td>
                          <td className="p-2 text-green-600 font-semibold">-</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">Energieverbruik</td>
                          <td className="p-2">1200 kWh/jaar</td>
                          <td className="p-2">500 kWh/jaar</td>
                          <td className="p-2 text-green-600 font-semibold">-58%</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">Energie CO2</td>
                          <td className="p-2">480 kg</td>
                          <td className="p-2">60 kg (zonnepanelen)</td>
                          <td className="p-2 text-green-600 font-semibold">-420 kg</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2">Koudemiddel GWP</td>
                          <td className="p-2">2088</td>
                          <td className="p-2">675</td>
                          <td className="p-2 text-green-600 font-semibold">-68%</td>
                        </tr>
                        <tr className="border-t bg-green-50">
                          <td className="p-2 font-semibold">Totale CO2</td>
                          <td className="p-2 font-semibold">950 kg/jaar</td>
                          <td className="p-2 font-semibold">110 kg/jaar</td>
                          <td className="p-2 text-green-600 font-bold">-88%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold mb-2">840 kg CO2 Besparing per Jaar</p>
                  <p className="text-xl mb-4">Dat is gelijk aan:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded">
                      <p className="text-2xl font-bold">3,700 km</p>
                      <p className="text-sm">Autorijden</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-3 rounded">
                      <p className="text-2xl font-bold">42</p>
                      <p className="text-sm">Bomen planten</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-3 rounded">
                      <p className="text-2xl font-bold">5</p>
                      <p className="text-sm">Vluchten NL-Spanje</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Plan */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Uw Actieplan voor CO2-Reductie
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Huidige Footprint Meten</h3>
                    <p className="text-gray-700 text-sm">
                      Check uw huidige energieverbruik, type koudemiddel en energielabel. Dit is uw nulmeting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Korte Termijn: Optimaliseer Gebruik</h3>
                    <p className="text-gray-700 text-sm">
                      Start met temperatuurinstellingen, filters reinigen en slimme functies gebruiken. Dit kost niets
                      en bespaart direct 20-30% CO2.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Middellange Termijn: Groene Stroom</h3>
                    <p className="text-gray-700 text-sm">
                      Overstappen naar groene stromleverancier of investeren in zonnepanelen. Dit elimineert
                      de indirecte CO2-uitstoot (70-80% van totaal).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Lange Termijn: Vervang Oud Systeem</h3>
                    <p className="text-gray-700 text-sm">
                      Bij vervanging kiezen voor inverter A+++, R32 koudemiddel en juiste dimensionering.
                      Dit halveert het energieverbruik permanent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Resultaat: CO2-Neutrale Koeling</h3>
                    <p className="text-gray-700 text-sm">
                      Met deze stappen bereikt u 85-90% CO2-reductie en geniet u comfortabel met minimale
                      klimaatimpact.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Vandaag met CO2-Reductie
              </h2>
              <p className="text-xl mb-8 text-green-50">
                Onze duurzaamheidsexperts berekenen de CO2-besparing voor uw specifieke situatie en adviseren
                over de meest effectieve maatregelen
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg"
                >
                  Gratis CO2-Scan
                </Link>
                <Link
                  to="/kennisbank/duurzame-verwarming"
                  className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-colors"
                >
                  Meer over Duurzaamheid
                </Link>
              </div>
              <p className="mt-6 text-green-100">
                🌍 Samen maken we het verschil voor ons klimaat
              </p>
            </section>

            {/* Related Links */}
            <section className="mt-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde Informatie</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/kennisbank/duurzame-verwarming" className="text-blue-600 hover:underline">
                  → Duurzame verwarming met warmtepomp
                </Link>
                <Link to="/kennisbank/koudemiddel-r32" className="text-blue-600 hover:underline">
                  → R32 koudemiddel uitgelegd
                </Link>
                <Link to="/kennisbank/energielabel-verbetering" className="text-blue-600 hover:underline">
                  → Energielabel verbeteren voor lagere CO2
                </Link>
                <Link to="/diensten/airco-installatie" className="text-blue-600 hover:underline">
                  → Installatie van duurzame systemen
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
