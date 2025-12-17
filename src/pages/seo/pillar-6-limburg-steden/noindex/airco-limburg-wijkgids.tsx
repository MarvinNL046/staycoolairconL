import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function AircoLimburgWijkgids() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Airco Wijkgids Limburg - Per Wijk & Buurt | StayCool"
        description="Ontdek welke airco oplossingen het beste passen bij uw wijk in Limburg. Wijkspecifieke informatie over airconditioning installatie en service."
        noIndex={true}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Airco Limburg', path: '/kennisbank/airco-installatie-limburg' },
          { label: 'Wijkgids' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Airco Wijkgids Limburg
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Elk wijk in Limburg heeft zijn eigen karakteristieken. Ontdek welke airco oplossing het beste bij uw buurt past en wat u kunt verwachten qua installatie en service.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maastricht Wijken</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Wyck & Céramique</h3>
              <p className="text-gray-700 mb-4">
                Historische en moderne wijken met gevarieerde woningtypen. Veel monumentale panden in Wyck vereisen speciale aandacht bij airco installatie.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Monumentenpanden: Split-units met discrete buitenunits</li>
                <li>Nieuwbouw Céramique: Complete klimaatsystemen mogelijk</li>
                <li>Appartementen: Compacte multi-split oplossingen</li>
              </ul>
              <Link to="/airco-installatie-maastricht" className="text-blue-600 hover:text-blue-800">
                Meer over airco in Maastricht →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Jekerkwartier & Boschstraatkwartier</h3>
              <p className="text-gray-700 mb-4">
                Dichtbebouwde stadswijken met rijwoningen en herenhuizen. Akoestiek en plaatsing van buitenunits vraagt om extra zorg.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Geluidsisolatie: Stille airco modellen noodzakelijk</li>
                <li>Beperkte buitenruimte: Slimme montage oplossingen</li>
                <li>Achtergevel installatie vaak meest geschikt</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Malberg & Malpertuis</h3>
              <p className="text-gray-700 mb-4">
                Rustige woonwijken met vrijstaande woningen en ruime kavels. Ideaal voor complete klimaatoplossingen.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Veel plaatsingsopties voor buitenunits</li>
                <li>Multi-room oplossingen populair</li>
                <li>Combinatie met vloerverwarming mogelijk</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Heerlen Wijken</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Centrum & Heerlerbaan</h3>
              <p className="text-gray-700 mb-4">
                Diverse woningtypen van appartementen tot herenhuizen. Toegankelijkheid voor installatie varieert sterk.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Appartementen: VvE toestemming benodigd</li>
                <li>Bereikbaarheid: Soms hoogwerker noodzakelijk</li>
                <li>Geluidsoverlast preventie belangrijk</li>
              </ul>
              <Link to="/airco-installatie-heerlen" className="text-blue-600 hover:text-blue-800">
                Meer over airco in Heerlen →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Molenberg & Passart</h3>
              <p className="text-gray-700 mb-4">
                Naoorlogse wijken met uniforme woningbouw. Efficiënte installatie door vergelijkbare woningtypen.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Standaard installaties goed uitvoerbaar</li>
                <li>Isolatie vaak matig: capaciteit airco belangrijk</li>
                <li>Mogelijkheden voor buurtactie (groepskorting)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sittard-Geleen Wijken</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Sittard Centrum</h3>
              <p className="text-gray-700 mb-4">
                Historisch centrum met beschermde stadsgezichten. Esthetiek en regelgeving spelen grote rol.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Welstandscommissie: Vooroverleg aanbevolen</li>
                <li>Discrete installatie essentieel</li>
                <li>Binnenunit plaatsing vaak vooraan</li>
              </ul>
              <Link to="/airco-installatie-sittard-geleen" className="text-blue-600 hover:text-blue-800">
                Meer over airco in Sittard-Geleen →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Geleen & Lindenheuvel</h3>
              <p className="text-gray-700 mb-4">
                Voormalige mijnwerkerswijk met karakteristieke rijtjeshuizen. Uniforme bebouwing maakt installatie voorspelbaar.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Traditionele woningbouw: Standaard oplossingen</li>
                <li>Smalle voortuinen: Achterzijde plaatsing gebruikelijk</li>
                <li>Goede ervaringen met buurtprojecten</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Venlo Wijken</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Blerick & Tegelen</h3>
              <p className="text-gray-700 mb-4">
                Diverse woongebieden met mix van oud en nieuw. Goede bereikbaarheid voor installatiewerk.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Ruime kavels: Veel plaatsingsopties</li>
                <li>Nieuwbouw: Vaak airco-ready</li>
                <li>Oudere woningen: Isolatie check aanbevolen</li>
              </ul>
              <Link to="/airco-installatie-venlo" className="text-blue-600 hover:text-blue-800">
                Meer over airco in Venlo →
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Roermond Wijken</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Binnenstad & Designer Outlet</h3>
              <p className="text-gray-700 mb-4">
                Historische binnenstad met moderne uitbreiding. Verschillende eisen per locatie.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Monumenten: Speciale procedures</li>
                <li>Nieuwbouw: Moderne klimaatoplossingen</li>
                <li>Zakelijk: Ook commerciële airco mogelijk</li>
              </ul>
              <Link to="/airco-installatie-roermond" className="text-blue-600 hover:text-blue-800">
                Meer over airco in Roermond →
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weert Wijken</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-3">Fatima & Boshoven</h3>
              <p className="text-gray-700 mb-4">
                Groene woonwijken met ruime opzet. Ideaal voor hoogwaardige airco installaties.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Veel ruimte voor buitenunits</li>
                <li>Moderne woningen: Goede isolatie</li>
                <li>Multi-zone systemen populair</li>
              </ul>
              <Link to="/airco-installatie-weert" className="text-blue-600 hover:text-blue-800">
                Meer over airco in Weert →
              </Link>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Algemene Wijkoverwegingen</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Stedelijk vs. Buitengebied</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Stedelijk: Let op geluidsoverlast buren</li>
                  <li>Buitengebied: Meer vrijheid in plaatsing</li>
                  <li>Appartementen: VvE regelgeving</li>
                  <li>Vrijstaand: Complete systemen mogelijk</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Lokale Regelgeving</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Welstandscommissie in beschermde gebieden</li>
                  <li>Gemeentelijke voorschriften geluid</li>
                  <li>VvE toestemming bij appartementen</li>
                  <li>Monumentenstatus: Extra procedures</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Vraag Wijkspecifiek Advies Aan</h2>
            <p className="text-xl mb-6">
              Wilt u weten wat de beste airco oplossing is voor uw specifieke wijk? Onze experts kennen de lokale situatie en regelgeving.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Vraag Wijkadvies Aan
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
