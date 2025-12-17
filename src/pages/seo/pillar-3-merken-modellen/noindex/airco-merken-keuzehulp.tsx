import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function AircoMerkenKeuzehulp() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Merken', path: '/airco/merken' },
    { label: 'Keuzehulp', path: '/airco-merken/noindex/keuzehulp' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Merken Keuzehulp - Welk Merk Past Bij Jou? | StayCool</title>
        <meta name="description" content="Hulp nodig bij het kiezen van een airco merk? Vergelijk Daikin, Mitsubishi, LG, Samsung en Tosot. Advies op maat voor jouw situatie." />
      </Helmet>

      <MetaTags
        title="Airco Merken Keuzehulp - Welk Merk Past Bij Jou?"
        description="Hulp nodig bij het kiezen van een airco merk? Vergelijk Daikin, Mitsubishi, LG, Samsung en Tosot. Advies op maat voor jouw situatie."
        noIndex={true}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Breadcrumbs items={breadcrumbItems} />

          <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-6">
            Airco Merken Keuzehulp
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Het kiezen van het juiste airco merk kan overweldigend zijn. Deze keuzehulp helpt je stap voor stap het perfecte merk te vinden voor jouw situatie.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stap 1: Bepaal Je Budget</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg mb-2">Budget: €1.000 - €1.500</h3>
                <p className="text-gray-700 mb-2">
                  Voor een beperkt budget zijn <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline">Tosot airco's</Link> een uitstekende keuze. Goede prijs-kwaliteitverhouding met A++ energie-efficiëntie.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-lg mb-2">Budget: €1.500 - €2.500</h3>
                <p className="text-gray-700 mb-2">
                  In dit middensegment kun je kiezen tussen <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">LG airco's</Link> en <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline">Samsung airco's</Link>. Beide merken bieden moderne features en goede energie-efficiëntie.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg mb-2">Budget: €2.500+</h3>
                <p className="text-gray-700 mb-2">
                  Voor premium kwaliteit kies je voor <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin airco's</Link> of <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi airco's</Link>. Deze topmerken bieden de hoogste efficiëntie en langste levensduur.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stap 2: Bepaal Je Prioriteiten</h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">🔇 Stilte is Prioriteit</h3>
                <p className="text-gray-700 mb-2">
                  <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin Emura</Link> en <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi MSZ-LN</Link> zijn de stilste modellen op de markt (van 19 dB).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">⚡ Energie-Efficiëntie</h3>
                <p className="text-gray-700 mb-2">
                  Voor de hoogste energie-efficiëntie (A+++) kies je <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link> of <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi</Link>. Deze merken hebben SCOP waarden tot 5.15.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">📱 Slimme Functies</h3>
                <p className="text-gray-700 mb-2">
                  <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">LG</Link> en <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline">Samsung</Link> bieden uitstekende WiFi-integratie en app-besturing met geavanceerde smart home features.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🎨 Design</h3>
                <p className="text-gray-700 mb-2">
                  Voor een strak design zijn <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin Emura</Link> en <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">LG Artcool</Link> de mooiste opties met hun moderne uitstraling.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stap 3: Type Ruimte</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">🏠 Woonkamer / Grote Ruimte (30-50m²)</h3>
                <p className="text-gray-700">
                  Kies voor een krachtig systeem van <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link> of <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi</Link> met hoog vermogen (5.0-7.1 kW).
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">🛏️ Slaapkamer (15-25m²)</h3>
                <p className="text-gray-700">
                  Focus op stilte en nachtmodus. <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin Emura</Link> (19 dB) of <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi MSZ-LN</Link> (19 dB) zijn ideaal.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">🏢 Kantoor / Praktijk</h3>
                <p className="text-gray-700">
                  Betrouwbaarheid en laag onderhoud zijn belangrijk. <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link> heeft de beste service en langste garantie.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Merkvergelijking Samenvatting</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Merk</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Prijs</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Beste Voor</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Unieke Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">
                      <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline font-semibold">Daikin</Link>
                    </td>
                    <td className="px-4 py-3">€€€</td>
                    <td className="px-4 py-3">Premium kwaliteit</td>
                    <td className="px-4 py-3">Langste levensduur (20+ jaar)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline font-semibold">Mitsubishi</Link>
                    </td>
                    <td className="px-4 py-3">€€€</td>
                    <td className="px-4 py-3">Stilte en efficiëntie</td>
                    <td className="px-4 py-3">Beste luchtzuivering</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Link to="/airco/merken/lg" className="text-blue-600 hover:underline font-semibold">LG</Link>
                    </td>
                    <td className="px-4 py-3">€€</td>
                    <td className="px-4 py-3">Smart features</td>
                    <td className="px-4 py-3">ThinQ app integratie</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline font-semibold">Samsung</Link>
                    </td>
                    <td className="px-4 py-3">€€</td>
                    <td className="px-4 py-3">Design en technologie</td>
                    <td className="px-4 py-3">Wind-Free koeling</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline font-semibold">Tosot</Link>
                    </td>
                    <td className="px-4 py-3">€</td>
                    <td className="px-4 py-3">Prijs-kwaliteit</td>
                    <td className="px-4 py-3">Laagste aanschafprijs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nog Twijfels?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700 mb-4">
                Weet je nog niet zeker welk merk het beste bij jou past? Onze ervaren adviseurs helpen je graag verder met een persoonlijk advies.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Vraag Gratis Advies Aan
              </Link>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-3">Gerelateerde Pagina's</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">→ Daikin Airco's</Link>
                <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">→ Mitsubishi Airco's</Link>
                <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">→ LG Airco's</Link>
                <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline">→ Samsung Airco's</Link>
                <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline">→ Tosot Airco's</Link>
                <Link to="/airco/merken" className="text-blue-600 hover:underline">→ Alle Merken Overzicht</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
