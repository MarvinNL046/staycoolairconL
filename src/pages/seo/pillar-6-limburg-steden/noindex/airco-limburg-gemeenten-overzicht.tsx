import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function AircoLimburgGemeentenOverzicht() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Airco Service Per Gemeente Limburg | Volledige Dekking | StayCool"
        description="Ontdek in welke Limburgse gemeenten wij airconditioning installeren en onderhouden. Complete service voor heel Limburg met lokale expertise."
        noIndex={true}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Airco Limburg', path: '/kennisbank/airco-installatie-limburg' },
          { label: 'Gemeenten Overzicht' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Airco Service Per Gemeente in Limburg
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            StayCool levert airco installatie en onderhoud door heel Limburg. Ontdek onze service per gemeente, lokale expertise en wat u kunt verwachten qua bereikbaarheid en service.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Grote Gemeenten - Volledig Servicebereik</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Gemeente Maastricht</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="font-semibold mb-2">Kernen:</p>
                  <ul className="list-disc pl-6">
                    <li>Maastricht (centrum)</li>
                    <li>Amby</li>
                    <li>Borgharen</li>
                    <li>Itteren</li>
                    <li>De Heeg</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Service Details:</p>
                  <ul className="list-disc pl-6">
                    <li>Spoed binnen 24 uur</li>
                    <li>Regulier binnen 48 uur</li>
                    <li>Vaste monteurs voor regio</li>
                    <li>Voorraad in Maastricht</li>
                  </ul>
                </div>
              </div>
              <Link to="/airco-installatie-maastricht" className="text-blue-600 hover:text-blue-800">
                Uitgebreide info Maastricht →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Gemeente Heerlen</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="font-semibold mb-2">Kernen:</p>
                  <ul className="list-disc pl-6">
                    <li>Heerlen (centrum)</li>
                    <li>Hoensbroek</li>
                    <li>Heerlerbaan</li>
                    <li>Molenberg</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Service Details:</p>
                  <ul className="list-disc pl-6">
                    <li>Snelle service Parkstad</li>
                    <li>Ervaring mijnstreek</li>
                    <li>Specialistische isolatie-adviezen</li>
                    <li>Complete werkplaats service</li>
                  </ul>
                </div>
              </div>
              <Link to="/airco-installatie-heerlen" className="text-blue-600 hover:text-blue-800">
                Uitgebreide info Heerlen →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Gemeente Sittard-Geleen</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="font-semibold mb-2">Kernen:</p>
                  <ul className="list-disc pl-6">
                    <li>Sittard</li>
                    <li>Geleen</li>
                    <li>Born</li>
                    <li>Munstergeleen</li>
                    <li>Limbricht</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Service Details:</p>
                  <ul className="list-disc pl-6">
                    <li>Dekking beide kernen</li>
                    <li>Zakelijk & particulier</li>
                    <li>Snelle responstijden</li>
                    <li>Industriële ervaring</li>
                  </ul>
                </div>
              </div>
              <Link to="/airco-installatie-sittard-geleen" className="text-blue-600 hover:text-blue-800">
                Uitgebreide info Sittard-Geleen →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Gemeente Venlo</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="font-semibold mb-2">Kernen:</p>
                  <ul className="list-disc pl-6">
                    <li>Venlo (centrum)</li>
                    <li>Blerick</li>
                    <li>Tegelen</li>
                    <li>Belfeld</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Service Details:</p>
                  <ul className="list-disc pl-6">
                    <li>Hub voor Noord-Limburg</li>
                    <li>Snelle service Duitse grens</li>
                    <li>Nieuwbouw specialisatie</li>
                    <li>Commercieel & particulier</li>
                  </ul>
                </div>
              </div>
              <Link to="/airco-installatie-venlo" className="text-blue-600 hover:text-blue-800">
                Uitgebreide info Venlo →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Gemeente Roermond</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="font-semibold mb-2">Kernen:</p>
                  <ul className="list-disc pl-6">
                    <li>Roermond (centrum)</li>
                    <li>Herten</li>
                    <li>Swalmen</li>
                    <li>Maasniel</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Service Details:</p>
                  <ul className="list-disc pl-6">
                    <li>Centraal in Midden-Limburg</li>
                    <li>Designer Outlet expertise</li>
                    <li>Monumentenpanden ervaring</li>
                    <li>Zakelijke groothandel</li>
                  </ul>
                </div>
              </div>
              <Link to="/airco-installatie-roermond" className="text-blue-600 hover:text-blue-800">
                Uitgebreide info Roermond →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Gemeente Weert</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="font-semibold mb-2">Kernen:</p>
                  <ul className="list-disc pl-6">
                    <li>Weert (centrum)</li>
                    <li>Stramproy</li>
                    <li>Tungelroy</li>
                    <li>Altweerterheide</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Service Details:</p>
                  <ul className="list-disc pl-6">
                    <li>Grensgebied Brabant</li>
                    <li>Nieuwbouwprojecten</li>
                    <li>Reguliere planning</li>
                    <li>Complete service</li>
                  </ul>
                </div>
              </div>
              <Link to="/airco-installatie-weert" className="text-blue-600 hover:text-blue-800">
                Uitgebreide info Weert →
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Middelgrote Gemeenten</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Gemeente Brunssum</h3>
                <ul className="list-disc pl-6 mb-3">
                  <li>Reguliere service vanuit Heerlen</li>
                  <li>Parkstad-voordelen</li>
                  <li>48 uur responstijd</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Gemeente Kerkrade</h3>
                <ul className="list-disc pl-6 mb-3">
                  <li>Service vanuit Heerlen hub</li>
                  <li>Duitse grens expertise</li>
                  <li>Snelle spoed service</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Gemeente Landgraaf</h3>
                <ul className="list-disc pl-6 mb-3">
                  <li>Onderdeel Parkstad service</li>
                  <li>Heuvels expertise</li>
                  <li>Complete ondersteuning</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Gemeente Beek</h3>
                <ul className="list-disc pl-6 mb-3">
                  <li>Service vanuit Maastricht</li>
                  <li>Vliegbasis omgeving ervaring</li>
                  <li>Snelle bereikbaarheid</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Gemeente Meerssen</h3>
                <ul className="list-disc pl-6 mb-3">
                  <li>Maastricht service gebied</li>
                  <li>Historische panden expertise</li>
                  <li>48 uur response</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Gemeente Valkenburg</h3>
                <ul className="list-disc pl-6 mb-3">
                  <li>Toeristische sector ervaring</li>
                  <li>Monumenten specialisme</li>
                  <li>Zakelijk & particulier</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kleinere Gemeenten</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4">Noord-Limburg</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="list-disc pl-6">
                  <li>Venray</li>
                  <li>Peel en Maas</li>
                  <li>Beesel</li>
                  <li>Bergen (L)</li>
                </ul>
                <ul className="list-disc pl-6">
                  <li>Gennep</li>
                  <li>Horst aan de Maas</li>
                  <li>Mook en Middelaar</li>
                </ul>
                <div>
                  <p className="font-semibold mb-2">Service vanuit Venlo:</p>
                  <p className="text-sm text-gray-600">Reguliere planning, 2-3 dagen responstijd</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4">Midden-Limburg</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="list-disc pl-6">
                  <li>Echt-Susteren</li>
                  <li>Leudal</li>
                  <li>Maasgouw</li>
                  <li>Roerdalen</li>
                </ul>
                <ul className="list-disc pl-6">
                  <li>Nederweert</li>
                  <li>Roggel en Neer</li>
                  <li>Haelen</li>
                </ul>
                <div>
                  <p className="font-semibold mb-2">Service vanuit Roermond:</p>
                  <p className="text-sm text-gray-600">Volledige dekking, 48 uur standaard</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4">Zuid-Limburg</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="list-disc pl-6">
                  <li>Simpelveld</li>
                  <li>Gulpen-Wittem</li>
                  <li>Vaals</li>
                  <li>Eijsden-Margraten</li>
                </ul>
                <ul className="list-disc pl-6">
                  <li>Voerendaal</li>
                  <li>Nuth</li>
                  <li>Onderbanken</li>
                </ul>
                <div>
                  <p className="font-semibold mb-2">Service vanuit Maastricht/Heerlen:</p>
                  <p className="text-sm text-gray-600">Volledige service, heuvels expertise</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Niveau Per Regio</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left">Service Type</th>
                    <th className="px-6 py-3 text-left">Grote Steden</th>
                    <th className="px-6 py-3 text-left">Middelgroot</th>
                    <th className="px-6 py-3 text-left">Landelijk</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Spoed (24u)</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">⚠️ Op aanvraag</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Standaard (48u)</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">✅ Ja</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Onderhoud Contract</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">✅ Ja</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Voorraad Lokaal</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">⚠️ Via hub</td>
                    <td className="px-6 py-4">⚠️ Via hub</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Vaste Monteur</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">✅ Ja</td>
                    <td className="px-6 py-4">⚠️ Regiomonteur</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Limburg Dekking</h2>
            <p className="text-lg mb-6">
              Waar u ook in Limburg woont of werkt, StayCool staat voor u klaar met professionele airco service. Van Venlo tot Vaals, van Weert tot Valkenburg - wij kennen de lokale situatie en leveren kwaliteit op maat.
            </p>
            <Link
              to="/kennisbank/airco-installatie-limburg"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Meer over Airco in Limburg
            </Link>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Vraag Service in Uw Gemeente</h2>
            <p className="text-xl mb-6">
              Wilt u weten wat onze service mogelijkheden zijn in uw gemeente? Vraag een vrijblijvende offerte aan en ontdek wat wij voor u kunnen betekenen.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Vraag Offerte Aan
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
