import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function AircoTypesVergelijkenGids() {
  return (
    <>
      <MetaTags
        title="Complete Gids: Airco Types Vergelijken | StayCool Airco"
        description="Ontdek hoe u verschillende airco types vergelijkt. Uitgebreide gids over split units, mobiele airco's, multi-split systemen en meer."
        noIndex={true}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Airco Vergelijkingen', path: '/kennisbank/airco-vergelijking' },
          { label: 'Types Vergelijken Gids' }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Gids: Airco Types Vergelijken
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Het kiezen van het juiste type airconditioning kan overweldigend zijn. Deze uitgebreide gids helpt u verschillende airco types te vergelijken en de beste keuze te maken voor uw situatie.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Belangrijkste Airco Types
            </h2>

            {/* Split Unit vs Mobiele Airco */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Split Unit vs Mobiele Airco
              </h3>
              <p className="text-gray-700 mb-4">
                De meest fundamentele keuze bij het aanschaffen van een airco. Beide types hebben hun voor- en nadelen.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Split Unit Airco</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Vaste installatie aan de muur</li>
                  <li>Zeer energie-efficiënt</li>
                  <li>Stiller dan mobiele airco's</li>
                  <li>Professionele installatie vereist</li>
                  <li>Hogere aanschafkosten</li>
                </ul>
              </div>
              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Mobiele Airco</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Verplaatsbaar tussen ruimtes</li>
                  <li>Geen installatie nodig</li>
                  <li>Lagere aanschafkosten</li>
                  <li>Minder energie-efficiënt</li>
                  <li>Meer geluidsoverlast</li>
                </ul>
              </div>
              <Link
                to="/kennisbank/split-unit-vs-mobiele-airco"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Lees de uitgebreide vergelijking →
              </Link>
            </div>

            {/* Mono-Split vs Multi-Split */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Mono-Split vs Multi-Split Systemen
              </h3>
              <p className="text-gray-700 mb-4">
                Bij split units heeft u de keuze tussen één binnen- en buitenunit (mono-split) of meerdere binnenunits op één buitenunit (multi-split).
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Mono-Split Systeem</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Eén binnenunit gekoppeld aan één buitenunit</li>
                  <li>Ideaal voor één ruimte</li>
                  <li>Lagere aanschafkosten</li>
                  <li>Simpeler onderhoud</li>
                  <li>Meerdere buitenunits bij meerdere ruimtes</li>
                </ul>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Multi-Split Systeem</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Meerdere binnenunits op één buitenunit</li>
                  <li>Perfect voor meerdere ruimtes</li>
                  <li>Slechts één buitenunit nodig</li>
                  <li>Nettere gevelafwerking</li>
                  <li>Hogere aanschafkosten</li>
                </ul>
              </div>
              <Link
                to="/kennisbank/mono-split-vs-multi-split"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Bekijk de volledige vergelijking →
              </Link>
            </div>

            {/* Inverter vs On/Off */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Inverter vs On/Off Technologie
              </h3>
              <p className="text-gray-700 mb-4">
                De technologie van de compressor bepaalt hoe efficiënt uw airco werkt en hoeveel energie deze verbruikt.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Inverter Airco</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Variabel toerental compressor</li>
                  <li>30-50% energiebesparing</li>
                  <li>Constante temperatuur</li>
                  <li>Stiller in werking</li>
                  <li>Hogere aanschafprijs</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">On/Off Airco</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Compressor aan of uit</li>
                  <li>Hogere energiekosten</li>
                  <li>Temperatuurschommelingen</li>
                  <li>Meer geluidsoverlast</li>
                  <li>Lagere aanschafprijs</li>
                </ul>
              </div>
              <Link
                to="/kennisbank/inverter-vs-on-off-airco"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Ontdek het verschil in detail →
              </Link>
            </div>

            {/* A+++ vs A++ */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Energielabels: A+++ vs A++ Airco's
              </h3>
              <p className="text-gray-700 mb-4">
                Het energielabel geeft aan hoe efficiënt een airco omgaat met energie. Dit heeft directe impact op uw energierekening.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-green-50 border-l-4 border-green-600 p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">A+++ Airco</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Hoogste energie-efficiëntie</li>
                    <li>Laagste stroomkosten</li>
                    <li>Milieuvriendelijkst</li>
                    <li>Sneller terugverdiend</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">A++ Airco</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Goede energie-efficiëntie</li>
                    <li>Lager aanschafbedrag</li>
                    <li>Nog steeds zuinig</li>
                    <li>Populaire keuze</li>
                  </ul>
                </div>
              </div>
              <Link
                to="/kennisbank/energielabel-airco"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Leer alles over energielabels →
              </Link>
            </div>
          </div>

          {/* Vergelijkingstabel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Snelle Vergelijkingstabel
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 font-semibold">Criterium</th>
                    <th className="p-4 font-semibold">Split Unit</th>
                    <th className="p-4 font-semibold">Mobiele Airco</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Energie-efficiëntie</td>
                    <td className="p-4 text-green-600">★★★★★</td>
                    <td className="p-4 text-orange-600">★★☆☆☆</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Geluidsniveau</td>
                    <td className="p-4 text-green-600">★★★★★</td>
                    <td className="p-4 text-orange-600">★★☆☆☆</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Aanschafkosten</td>
                    <td className="p-4 text-orange-600">★★☆☆☆</td>
                    <td className="p-4 text-green-600">★★★★☆</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Installatiegemak</td>
                    <td className="p-4 text-orange-600">★★☆☆☆</td>
                    <td className="p-4 text-green-600">★★★★★</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Flexibiliteit</td>
                    <td className="p-4 text-orange-600">★★☆☆☆</td>
                    <td className="p-4 text-green-600">★★★★★</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Levensduur</td>
                    <td className="p-4 text-green-600">★★★★★</td>
                    <td className="p-4 text-orange-600">★★★☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Keuzehulp */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Hulp Nodig Bij Uw Keuze?
            </h2>
            <p className="text-xl mb-6 leading-relaxed">
              Onze experts helpen u graag bij het vergelijken van verschillende airco types en het maken van de juiste keuze voor uw situatie. Wij bieden onafhankelijk advies op maat.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Gratis en vrijblijvend adviesgesprek</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Persoonlijke vergelijking op basis van uw wensen</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Transparante prijsopgave voor alle opties</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition mt-6"
            >
              Vraag Gratis Advies Aan
            </Link>
          </div>

          {/* Extra Resources */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Meer Vergelijkingen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/kennisbank/split-unit-vs-mobiele-airco"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Split Unit vs Mobiele Airco</h3>
                <p className="text-gray-700 text-sm">Uitgebreide vergelijking van beide systemen</p>
              </Link>
              <Link
                to="/kennisbank/mono-split-vs-multi-split"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Mono-Split vs Multi-Split</h3>
                <p className="text-gray-700 text-sm">Welk split systeem past bij u?</p>
              </Link>
              <Link
                to="/kennisbank/inverter-vs-on-off-airco"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Inverter vs On/Off</h3>
                <p className="text-gray-700 text-sm">Vergelijk de technologieën</p>
              </Link>
              <Link
                to="/kennisbank/energielabel-airco"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Energielabels Uitgelegd</h3>
                <p className="text-gray-700 text-sm">A+++ vs A++ en wat het betekent</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
