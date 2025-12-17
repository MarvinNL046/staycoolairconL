import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function AircoLimburgReistijdService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Reistijd & Service Bereikbaarheid Airco Limburg | StayCool"
        description="Hoeveel tijd voordat wij bij u zijn? Ontdek onze service gebieden, reistijden en responstijden voor airco installatie en onderhoud in heel Limburg."
        noIndex={true}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Airco Limburg', path: '/kennisbank/airco-installatie-limburg' },
          { label: 'Reistijd & Service' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Reistijd & Service Bereikbaarheid in Limburg
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            StayCool bedient heel Limburg met strategisch geplaatste service hubs. Ontdek hoelang het duurt voordat wij bij u zijn voor installatie, onderhoud of spoedservice.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Hubs & Dekkingsgebieden</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-4">Hub 1: Maastricht (Zuid-Limburg)</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Primair Service Gebied (0-15 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Maastricht centrum - 5 min</li>
                    <li>Wyck & Céramique - 7 min</li>
                    <li>Amby - 10 min</li>
                    <li>Borgharen - 12 min</li>
                    <li>Itteren - 15 min</li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="font-semibold text-green-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: binnen 2 uur</li>
                      <li>Standaard: zelfde of volgende dag</li>
                      <li>Onderhoud: op afspraak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Secundair Service Gebied (15-30 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Meerssen - 15 min</li>
                    <li>Valkenburg - 20 min</li>
                    <li>Beek - 20 min</li>
                    <li>Gulpen - 25 min</li>
                    <li>Margraten - 25 min</li>
                    <li>Eijsden - 25 min</li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-semibold text-blue-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: binnen 4 uur</li>
                      <li>Standaard: 24-48 uur</li>
                      <li>Onderhoud: op afspraak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-3">Uitgebreid Gebied (30-45 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Vaals - 30 min</li>
                    <li>Wittem - 30 min</li>
                    <li>Simpelveld - 35 min</li>
                    <li>Nuth - 35 min</li>
                    <li>Voerendaal - 25 min</li>
                  </ul>
                  <div className="bg-yellow-50 p-4 rounded">
                    <p className="font-semibold text-yellow-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: op aanvraag</li>
                      <li>Standaard: 48 uur</li>
                      <li>Onderhoud: vaste planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link to="/airco-installatie-maastricht" className="text-blue-600 hover:text-blue-800 inline-block mt-4">
                Meer over service in Maastricht →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-4">Hub 2: Heerlen (Parkstad)</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Primair Service Gebied (0-15 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Heerlen centrum - 5 min</li>
                    <li>Hoensbroek - 10 min</li>
                    <li>Brunssum - 12 min</li>
                    <li>Landgraaf - 15 min</li>
                    <li>Kerkrade - 15 min</li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="font-semibold text-green-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: binnen 2 uur</li>
                      <li>Standaard: zelfde of volgende dag</li>
                      <li>Onderhoud: op afspraak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-3">Secundair Service Gebied (15-30 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Voerendaal - 20 min</li>
                    <li>Onderbanken - 20 min</li>
                    <li>Simpelveld - 20 min</li>
                    <li>Nuth - 25 min</li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-semibold text-blue-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: binnen 4 uur</li>
                      <li>Standaard: 24-48 uur</li>
                      <li>Onderhoud: op afspraak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link to="/airco-installatie-heerlen" className="text-blue-600 hover:text-blue-800 inline-block mt-4">
                Meer over service in Heerlen →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-4">Hub 3: Sittard-Geleen (Midden-Zuid)</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Primair Service Gebied (0-20 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Sittard centrum - 5 min</li>
                    <li>Geleen - 10 min</li>
                    <li>Born - 15 min</li>
                    <li>Stein - 15 min</li>
                    <li>Munstergeleen - 12 min</li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="font-semibold text-green-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: binnen 3 uur</li>
                      <li>Standaard: 24-48 uur</li>
                      <li>Onderhoud: op afspraak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-3">Secundair Service Gebied (20-35 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Beek - 25 min</li>
                    <li>Susteren - 20 min</li>
                    <li>Nieuwstadt - 25 min</li>
                    <li>Limbricht - 15 min</li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-semibold text-blue-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: op aanvraag</li>
                      <li>Standaard: 48 uur</li>
                      <li>Onderhoud: vaste planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link to="/airco-installatie-sittard-geleen" className="text-blue-600 hover:text-blue-800 inline-block mt-4">
                Meer over service in Sittard-Geleen →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-4">Hub 4: Roermond (Midden-Limburg)</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Primair Service Gebied (0-20 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Roermond centrum - 5 min</li>
                    <li>Swalmen - 15 min</li>
                    <li>Maasniel - 10 min</li>
                    <li>Herten - 12 min</li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="font-semibold text-green-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: binnen 3 uur</li>
                      <li>Standaard: 24-48 uur</li>
                      <li>Onderhoud: op afspraak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-3">Secundair Service Gebied (20-35 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Weert - 25 min</li>
                    <li>Echt - 25 min</li>
                    <li>Susteren - 30 min</li>
                    <li>Roggel - 20 min</li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-semibold text-blue-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: op aanvraag</li>
                      <li>Standaard: 48 uur</li>
                      <li>Onderhoud: vaste planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link to="/airco-installatie-roermond" className="text-blue-600 hover:text-blue-800 inline-block mt-4">
                Meer over service in Roermond →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-4">Hub 5: Venlo (Noord-Limburg)</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Primair Service Gebied (0-20 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Venlo centrum - 5 min</li>
                    <li>Blerick - 10 min</li>
                    <li>Tegelen - 12 min</li>
                    <li>Belfeld - 15 min</li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="font-semibold text-green-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: binnen 3 uur</li>
                      <li>Standaard: 24-48 uur</li>
                      <li>Onderhoud: op afspraak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-3">Secundair Service Gebied (20-40 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Venray - 30 min</li>
                    <li>Horst - 25 min</li>
                    <li>Grubbenvorst - 20 min</li>
                    <li>Beesel - 25 min</li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-semibold text-blue-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: op aanvraag</li>
                      <li>Standaard: 48 uur</li>
                      <li>Onderhoud: vaste planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link to="/airco-installatie-venlo" className="text-blue-600 hover:text-blue-800 inline-block mt-4">
                Meer over service in Venlo →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Hub 6: Weert (Oost-Limburg)</h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Primair Service Gebied (0-20 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Weert centrum - 5 min</li>
                    <li>Stramproy - 15 min</li>
                    <li>Tungelroy - 12 min</li>
                    <li>Altweerterheide - 15 min</li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="font-semibold text-green-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: binnen 3 uur</li>
                      <li>Standaard: 24-48 uur</li>
                      <li>Onderhoud: op afspraak</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-3">Secundair Service Gebied (20-35 min)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6">
                    <li>Nederweert - 20 min</li>
                    <li>Roggel - 25 min</li>
                    <li>Budel - 30 min</li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-semibold text-blue-800">Responstijden:</p>
                    <ul className="text-sm mt-2">
                      <li>Spoed: op aanvraag</li>
                      <li>Standaard: 48 uur</li>
                      <li>Onderhoud: vaste planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Link to="/airco-installatie-weert" className="text-blue-600 hover:text-blue-800 inline-block mt-4">
                Meer over service in Weert →
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Tijden & Planning</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-4">Spoedservice (24/7)</h3>
              <p className="mb-4">Voor dringende storingen en noodsituaties zijn wij 24 uur per dag, 7 dagen per week bereikbaar.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Primaire gebieden:</p>
                  <ul className="list-disc pl-6">
                    <li>Binnen 2 uur ter plaatse</li>
                    <li>Directe diagnose</li>
                    <li>Voorraad reserveonderdelen in auto</li>
                    <li>Vaak dezelfde dag opgelost</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Secundaire gebieden:</p>
                  <ul className="list-disc pl-6">
                    <li>Binnen 4 uur ter plaatse</li>
                    <li>Volledige diagnose</li>
                    <li>Tijdelijke oplossingen indien nodig</li>
                    <li>Follow-up binnen 24 uur</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-semibold mb-4">Standaard Service (Werkdagen)</h3>
              <p className="mb-4">Maandag t/m vrijdag 08:00 - 18:00 uur, zaterdag 09:00 - 13:00 uur</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-semibold mb-2">Installaties:</p>
                  <ul className="list-disc pl-6">
                    <li>Op afspraak gepland</li>
                    <li>Flexibele tijdslots</li>
                    <li>Duidelijke planning</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Onderhoud:</p>
                  <ul className="list-disc pl-6">
                    <li>Jaarlijkse contracten</li>
                    <li>Vaste route planning</li>
                    <li>Voorspelbaar & efficiënt</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Reparaties:</p>
                  <ul className="list-disc pl-6">
                    <li>Binnen 48 uur</li>
                    <li>Diagnose & herstel</li>
                    <li>Garantie op werk</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Reistijd Calculator</h2>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">Indicatieve reistijden vanuit onze hubs:</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Van / Naar</th>
                      <th className="px-4 py-2 text-left">Maastricht</th>
                      <th className="px-4 py-2 text-left">Heerlen</th>
                      <th className="px-4 py-2 text-left">Sittard</th>
                      <th className="px-4 py-2 text-left">Roermond</th>
                      <th className="px-4 py-2 text-left">Venlo</th>
                      <th className="px-4 py-2 text-left">Weert</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-2 font-semibold">Valkenburg</td>
                      <td className="px-4 py-2">20 min</td>
                      <td className="px-4 py-2">30 min</td>
                      <td className="px-4 py-2">35 min</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Kerkrade</td>
                      <td className="px-4 py-2">35 min</td>
                      <td className="px-4 py-2">15 min</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Echt</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">25 min</td>
                      <td className="px-4 py-2">25 min</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">30 min</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-semibold">Venray</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">-</td>
                      <td className="px-4 py-2">30 min</td>
                      <td className="px-4 py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">* Tijden zijn indicatief en kunnen variëren door verkeersdrukte</p>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Optimale Service Door Slimme Planning</h2>
            <p className="text-lg mb-6">
              Door onze strategische hub-locaties in Limburg garanderen wij snelle service over de hele provincie. Onze planning software optimaliseert routes en zorgt voor efficiënte inzet van monteurs, wat zich vertaalt in korte wachttijden en scherpe tarieven.
            </p>
            <Link
              to="/kennisbank/airco-installatie-limburg"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Meer over Onze Service
            </Link>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Check Onze Bereikbaarheid bij U</h2>
            <p className="text-xl mb-6">
              Wilt u weten hoelang het duurt voordat wij bij u zijn? Neem contact op en wij vertellen u precies wat onze service mogelijkheden zijn op uw locatie.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Vraag Service Informatie
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
