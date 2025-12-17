import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function SplitVsMobielWatKiezen() {
  return (
    <>
      <MetaTags
        title="Split Airco of Mobiele Airco: Wat Moet Ik Kiezen? | StayCool"
        description="Twijfelt u tussen een split airco en mobiele airco? Ontdek welke keuze het beste bij uw situatie past met onze uitgebreide beslissingsgids."
        noIndex={true}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Airco Vergelijkingen', path: '/kennisbank/airco-vergelijking' },
          { label: 'Split vs Mobiel: Wat Kiezen?' }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Split Airco of Mobiele Airco: Wat Moet Ik Kiezen?
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              De keuze tussen een split airco en mobiele airco is een van de belangrijkste beslissingen bij het aanschaffen van airconditioning. Deze gids helpt u de juiste keuze te maken op basis van uw specifieke situatie.
            </p>
          </div>

          {/* Keuzeboom */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Snelle Keuzehulp
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">Kies een Split Airco als:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>U een vaste oplossing zoekt voor één of meer ruimtes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>Energie-efficiëntie belangrijk is (lagere maandelijkse kosten)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>U weinig geluidshinder wilt (fluisterstil 19-25 dB)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>U ook wilt verwarmen in de winter</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>U een eigen woning heeft (of toestemming van verhuurder)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">Kies een Mobiele Airco als:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>U flexibiliteit wilt (verplaatsen tussen ruimtes)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>U huurt en geen vaste installatie mag plaatsen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>Lage aanschafkosten prioriteit hebben</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>U slechts enkele weken per jaar koeling nodig heeft</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <span>U direct wilt starten zonder installatiewerk</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Situatie-analyse */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Keuze Op Basis Van Uw Situatie
            </h2>

            {/* Woonsituatie */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Uw Woonsituatie
              </h3>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Eigen Woning → Split Airco</h4>
                <p className="text-gray-700 mb-3">
                  Als u eigenaar bent van uw woning, is een split airco meestal de beste investering. De voordelen op lange termijn wegen ruimschoots op tegen de hogere aanschafkosten:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Hogere woningwaarde (gemiddeld €2.000-€5.000 meerwaarde)</li>
                  <li>Lagere energiekosten (besparing €300-€600 per jaar)</li>
                  <li>Langere levensduur (15-20 jaar vs 5-8 jaar mobiel)</li>
                  <li>Betere prestaties en comfort</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Huurwoning → Mobiele Airco of Split met Toestemming</h4>
                <p className="text-gray-700 mb-3">
                  Als huurder heeft u twee opties:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Mobiele airco:</strong> Geen toestemming nodig, meenemen bij verhuizing</li>
                  <li><strong>Split airco:</strong> Met schriftelijke toestemming verhuurder mogelijk</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  <strong>Tip:</strong> Sommige verhuurders staan split units toe als u de woning bij vertrek in originele staat herstelt, of ze waarderen de investering omdat het de woning verbetert.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Appartement/VvE → Check Regels</h4>
                <p className="text-gray-700 mb-3">
                  Bij een appartement met VvE zijn er vaak specifieke regels:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Buitenunit mag soms niet zichtbaar zijn vanaf de straat</li>
                  <li>Sommige VvE's hebben uniformiteitsregels voor gevels</li>
                  <li>Mobiele airco is altijd toegestaan (maar let op afvoerslang uit raam)</li>
                </ul>
              </div>
            </div>

            {/* Gebruik */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Gebruiksfrequentie
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border-l-4 border-green-600 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Dagelijks/Regelmatig</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Beste keuze: Split Airco</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>30-50% lagere energiekosten</li>
                    <li>Veel stiller in gebruik</li>
                    <li>Betere temperatuurregeling</li>
                    <li>Sneller terugverdiend</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-semibold">
                    Terugverdientijd: 2-4 jaar door lagere energiekosten
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Incidenteel/Seizoensgebonden</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Overweeg: Mobiele Airco</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Lagere aanschafkosten (€300-€800)</li>
                    <li>Alleen gebruiken als nodig</li>
                    <li>Opbergen in wintermaanden</li>
                    <li>Snel ingezet bij hittegolven</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-semibold">
                    Ideaal bij &lt;30 dagen gebruik per jaar
                  </p>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Budget en Kosten
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left font-semibold">Kostenpost</th>
                      <th className="p-4 text-left font-semibold">Split Airco</th>
                      <th className="p-4 text-left font-semibold">Mobiele Airco</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Aanschaf</td>
                      <td className="p-4">€1.500 - €3.500</td>
                      <td className="p-4 text-green-600">€300 - €800</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Installatie</td>
                      <td className="p-4">€400 - €800</td>
                      <td className="p-4 text-green-600">€0 (doe-het-zelf)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Energiekosten/jaar</td>
                      <td className="p-4 text-green-600">€120 - €200</td>
                      <td className="p-4">€300 - €500</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 font-semibold">Onderhoud/jaar</td>
                      <td className="p-4">€75 - €150</td>
                      <td className="p-4 text-green-600">€0 - €50</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Levensduur</td>
                      <td className="p-4 text-green-600">15-20 jaar</td>
                      <td className="p-4">5-8 jaar</td>
                    </tr>
                    <tr className="bg-blue-50 font-semibold">
                      <td className="p-4">Totaal over 10 jaar</td>
                      <td className="p-4 text-green-600">€4.450 - €7.000</td>
                      <td className="p-4">€3.800 - €6.300</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Conclusie Budget:</h4>
                <p className="text-gray-700">
                  <strong>Split airco is op lange termijn (10+ jaar) voordeliger</strong> door lagere energiekosten en langere levensduur. Mobiele airco wint bij korte termijn (1-3 jaar) door lage aanschafkosten.
                </p>
              </div>
            </div>

            {/* Comfort en Prestaties */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Comfort en Prestaties
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Geluidsniveau</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900">Split Airco: 19-25 dB</p>
                      <p className="text-gray-700 text-sm">Vergelijkbaar met fluisteren</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900">Mobiele Airco: 45-65 dB</p>
                      <p className="text-gray-700 text-sm">Vergelijkbaar met normaal gesprek</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Koelvermogen</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900">Split Airco</p>
                      <p className="text-gray-700 text-sm">30-40m² per unit</p>
                      <p className="text-gray-700 text-sm">Constante temperatuur ±0.5°C</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900">Mobiele Airco</p>
                      <p className="text-gray-700 text-sm">15-25m² effectief bereik</p>
                      <p className="text-gray-700 text-sm">Schommelingen ±2°C</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beslissingshulp */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Beslisboom: Maak de Juiste Keuze
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <p className="font-semibold text-gray-900">Heeft u een eigen woning?</p>
                <p className="text-gray-700">→ JA: Ga verder → NEE: Overweeg mobiele airco</p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-2">
                <p className="font-semibold text-gray-900">Gebruikt u airco meer dan 30 dagen per jaar?</p>
                <p className="text-gray-700">→ JA: Split airco aanbevolen → NEE: Mobiele airco volstaat</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <p className="font-semibold text-gray-900">Is laag geluidsniveau belangrijk (slaapkamer)?</p>
                <p className="text-gray-700">→ JA: Split airco noodzakelijk → NEE: Beide opties mogelijk</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <p className="font-semibold text-gray-900">Wilt u ook verwarmen in de winter?</p>
                <p className="text-gray-700">→ JA: Split airco met warmtepomp → NEE: Beide opties</p>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <p className="font-semibold text-gray-900">Is energie-efficiëntie belangrijk?</p>
                <p className="text-gray-700">→ JA: Split airco bespaart €200-€400/jaar → NEE: Beide opties</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Nog Steeds Twijfels? Wij Helpen U!
            </h2>
            <p className="text-xl mb-6 leading-relaxed">
              Onze airco-experts adviseren u graag persoonlijk. Wij bekijken uw specifieke situatie en geven onafhankelijk advies over de beste oplossing.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Gratis woningbezoek en adviesgesprek</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Vergelijk split en mobiele airco voor uw situatie</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Direct inzicht in kosten en besparingen</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Vrijblijvende offerte binnen 24 uur</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Vraag Gratis Advies Aan
            </Link>
          </div>

          {/* Extra Resources */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Lees Meer Over Airco Vergelijkingen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/kennisbank/split-unit-vs-mobiele-airco"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Complete Vergelijking Split vs Mobiel</h3>
                <p className="text-gray-700 text-sm">Alle technische details en specificaties</p>
              </Link>
              <Link
                to="/kennisbank/mono-split-vs-multi-split"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Mono-Split vs Multi-Split</h3>
                <p className="text-gray-700 text-sm">Meerdere ruimtes koelen met één systeem</p>
              </Link>
              <Link
                to="/kennisbank/inverter-vs-on-off-airco"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Inverter vs On/Off Technologie</h3>
                <p className="text-gray-700 text-sm">Vergelijk de compressor technologieën</p>
              </Link>
              <Link
                to="/kennisbank/energielabel-airco"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Energielabels Vergelijken</h3>
                <p className="text-gray-700 text-sm">A+++ vs A++ en de impact op uw kosten</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
