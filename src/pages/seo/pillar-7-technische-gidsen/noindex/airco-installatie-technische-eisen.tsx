import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function AircoInstallatieTechnischeEisen() {
  return (
    <>
      <MetaTags
        title="Technische Eisen Airco Installatie | Stroomvoorziening & Montage"
        description="Alles over technische vereisten voor airco installatie: stroomvoorziening, leidingwerk, condensafvoer, montageplaats en F-gas certificering."
        noIndex={true}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumbs />

          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Technische Eisen voor Airco Installatie
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Een professionele airco installatie voldoet aan strikte technische eisen.
                Ontdek wat er nodig is voor een veilige, efficiënte en duurzame installatie.
              </p>
            </header>

            {/* Stroomvoorziening */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Elektrische Stroomvoorziening
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Een betrouwbare stroomvoorziening is essentieel voor veilig en efficiënt gebruik
                  van uw airconditioner. De elektrische eisen variëren op basis van het vermogen.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Vermogen en Stroomvoorziening
                </h3>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Capaciteit</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Spanning</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Groep</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Aardlekschakelaar</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="px-4 py-3">2.5 - 3.5 kW</td>
                        <td className="px-4 py-3">230V 1-fase</td>
                        <td className="px-4 py-3">16A</td>
                        <td className="px-4 py-3">30mA</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3">5.0 - 7.0 kW</td>
                        <td className="px-4 py-3">230V 1-fase</td>
                        <td className="px-4 py-3">16-20A</td>
                        <td className="px-4 py-3">30mA</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3">7.0+ kW</td>
                        <td className="px-4 py-3">400V 3-fase</td>
                        <td className="px-4 py-3">16A</td>
                        <td className="px-4 py-3">30mA</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">VRV/VRF Systemen</td>
                        <td className="px-4 py-3">400V 3-fase</td>
                        <td className="px-4 py-3">20-32A</td>
                        <td className="px-4 py-3">30mA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">⚡ Belangrijk:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Elke airco vereist een <strong>aparte groep</strong> in de meterkast</li>
                    <li>• Installatie door <strong>gecertificeerd elektricien</strong> verplicht</li>
                    <li>• <strong>Aardlekschakelaar (30mA)</strong> is wettelijk verplicht</li>
                    <li>• Gebruik altijd <strong>vaste bedrading</strong>, geen verlengsnoeren</li>
                    <li>• Voor 3-fase: controleer beschikbaarheid in uw woning</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Kabelspecificaties
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Minimale Kabeldikte:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>2.5 mm² (3x2.5)</strong> - tot 3.5 kW (standaard)</li>
                    <li>• <strong>4.0 mm² (3x4.0)</strong> - 5.0-7.0 kW</li>
                    <li>• <strong>6.0 mm² (5x6.0)</strong> - 3-fase systemen</li>
                    <li>• <strong>10+ mm² (5x10)</strong> - VRV/VRF systemen</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3">
                    Kabeltype: NYM-J of VMVL volgens NEN 1010 norm
                  </p>
                </div>
              </div>
            </section>

            {/* Koudemiddelleidingen */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Koudemiddelleidingen
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  De koudemiddelleidingen vormen de verbinding tussen binnen- en buitenunit.
                  Correcte installatie is cruciaal voor efficiëntie en levensduur.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Leidingdiameters per Capaciteit
                </h3>

                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Capaciteit</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Vloeistofleiding</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Gasleiding</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Max. Lengte</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="px-4 py-3">2.5 kW</td>
                        <td className="px-4 py-3">1/4" (6.35mm)</td>
                        <td className="px-4 py-3">3/8" (9.52mm)</td>
                        <td className="px-4 py-3">15m</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3">3.5 kW</td>
                        <td className="px-4 py-3">1/4" (6.35mm)</td>
                        <td className="px-4 py-3">3/8" (9.52mm)</td>
                        <td className="px-4 py-3">20m</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3">5.0 kW</td>
                        <td className="px-4 py-3">1/4" (6.35mm)</td>
                        <td className="px-4 py-3">1/2" (12.7mm)</td>
                        <td className="px-4 py-3">25m</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">7.0 kW</td>
                        <td className="px-4 py-3">3/8" (9.52mm)</td>
                        <td className="px-4 py-3">5/8" (15.88mm)</td>
                        <td className="px-4 py-3">30m</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">✓ Kwaliteitseisen Leidingwerk:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Gebruik <strong>koperen leidingen</strong> volgens EN 12735-1 norm</li>
                    <li>• Minimale wanddikte <strong>0.8mm</strong> voor R32 koelmiddel</li>
                    <li>• Leidingen moeten <strong>volledig geïsoleerd</strong> worden (9mm isolatie)</li>
                    <li>• Voorkom <strong>scherpe bochten</strong> (&lt;90° met minimaal 4x diameter buigradius)</li>
                    <li>• Maximaal <strong>2-3 bochten</strong> in het leidingtraject</li>
                    <li>• Gebruik altijd <strong>prefab bocht stukken</strong> waar mogelijk</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Hoogteverschillen
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Standaard systemen:</strong> Max. 15m hoogteverschil</li>
                    <li><strong>High-end systemen:</strong> Max. 30m hoogteverschil</li>
                    <li><strong>VRV/VRF systemen:</strong> Max. 50m hoogteverschil</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3">
                    Bij grote hoogteverschillen kan extra koelmiddel nodig zijn
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Vacuümeren en Druktest
                </h3>
                <p className="text-gray-700 mb-4">
                  Na installatie van de leidingen zijn twee cruciale stappen verplicht:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-indigo-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">1. Druktest (Leaktest)</h4>
                    <p className="text-gray-700">
                      Leidingen worden onder <strong>42 bar stikstofdruk</strong> gezet voor minimaal
                      24 uur om lekken op te sporen. Bij R32 systemen is dit wettelijk verplicht.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">2. Vacuümeren</h4>
                    <p className="text-gray-700">
                      Het systeem wordt tot <strong>-1 bar (vacuüm)</strong> leeggezogen gedurende
                      minimaal 30 minuten om vocht en lucht te verwijderen. Een vacuüm van
                      <strong> -0.995 bar of lager</strong> moet minimaal 30 minuten stabiel blijven.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Condensafvoer */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Condensafvoer Systeem
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Tijdens het koelen produceert een airco condenswater dat veilig afgevoerd moet worden.
                  Een correcte condensafvoer voorkomt waterschade en optimale werking.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Afvoerspecificaties
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Slangdiameter:</strong> 16-20mm PVC of PE slang</li>
                    <li><strong>Afschot:</strong> Minimaal 1-2° (2cm per meter)</li>
                    <li><strong>Max. afvoerlengte:</strong> 20 meter zonder pomp, onbeperkt met pomp</li>
                    <li><strong>Productie:</strong> 0.5-2 liter per uur (afhankelijk van capaciteit)</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Afvoermogelijkheden
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">✓ Ideale Opties</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Aansluiting op rioolafvoer</li>
                      <li>• Afvoer naar regenpijp</li>
                      <li>• Goot of dakgoot</li>
                      <li>• Tuin of drainage</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">⚠️ Vermijd</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Afvoer op gevels (vochtschade)</li>
                      <li>• Afvoer op buren (overlast)</li>
                      <li>• Geen afvoer (opvangbak)</li>
                      <li>• Afvoer op openbaar terrein</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Condenspomp
                </h3>
                <p className="text-gray-700 mb-4">
                  Wanneer afvoer op natuurlijk afschot niet mogelijk is, wordt een condenspomp gebruikt:
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Pompcapaciteit:</strong> 10-15 liter/uur</li>
                    <li><strong>Opvoerhoogte:</strong> Tot 8 meter verticaal</li>
                    <li><strong>Stroomverbruik:</strong> 5-10W (verwaarloosbaar)</li>
                    <li><strong>Geluidsniveau:</strong> 25-35 dB</li>
                    <li><strong>Kosten:</strong> €50-150 inclusief installatie</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Montageplaats Eisen */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Montageplaats Vereisten
              </h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Binnenunit Montage
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Minimale Afstanden:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>15cm</strong> vanaf plafond (voor airflow en onderhoud)</li>
                    <li>• <strong>10cm</strong> aan weerszijden</li>
                    <li>• <strong>2+ meter</strong> boven de vloer (optimaal 2.2-2.5m)</li>
                    <li>• <strong>1+ meter</strong> van hoeken voor optimale luchtverdeling</li>
                    <li>• <strong>Geen obstakels</strong> voor luchtuitlaat (gordijnen, meubels)</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">⚠️ Vermijd Plaatsing:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Direct boven bed of zitplaatsen (tocht)</li>
                    <li>• Nabij warmtebronnen (direct zonlicht, verwarming)</li>
                    <li>• In vochtige ruimtes zonder geschikte bescherming</li>
                    <li>• Te dicht bij deuren (luchtstromen verstoren werking)</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Buitenunit Montage
                </h3>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Locatie-eisen:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Vrije luchtcirculatie:</strong> 30cm aan voorzijde, 10cm zijkanten</li>
                    <li>• <strong>Stevige ondergrond:</strong> Betonnen vloer, muurbeugels (tot 100kg draagkracht)</li>
                    <li>• <strong>Bereikbaar voor onderhoud:</strong> Minimaal 50cm vrije ruimte</li>
                    <li>• <strong>Beschermd tegen extreme weersomstandigheden</strong></li>
                    <li>• <strong>Niet in gesloten ruimtes</strong> (garage, berging zonder ventilatie)</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Geluid en Overlast
                </h3>
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-3">
                    Moderne buitenunits produceren 45-55 dB geluid op 1 meter afstand.
                    Houd rekening met:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Minimaal <strong>3 meter</strong> van slaapkamerramen (eigen en buren)</li>
                    <li>• <strong>Trilingdempers</strong> bij wandmontage verplicht</li>
                    <li>• <strong>Geluidschermen</strong> bij geluidsoverlast</li>
                    <li>• Naleving van <strong>gemeentelijke geluidsverordening</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* F-gas Certificering */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                F-gas Certificering en Regelgeving
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Installatie, onderhoud en reparatie van airconditioners met meer dan 5 ton CO₂-equivalent
                  (ca. 1.2 kg R32 koelmiddel) mag alleen door F-gas gecertificeerde bedrijven.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">⚠️ Wettelijke Verplichtingen:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>F-gas gecertificeerd installateur</strong> verplicht voor vrijwel alle airco's</li>
                    <li>• <strong>Lektest verplicht</strong> jaarlijks voor systemen &gt;5 ton CO₂-eq</li>
                    <li>• <strong>Registratie in landelijk register</strong> (STEK-register)</li>
                    <li>• <strong>Installatiecertificaat</strong> voor elk geïnstalleerd systeem</li>
                    <li>• Bewaar installatiedocumentatie gedurende <strong>minimaal 5 jaar</strong></li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Waarom F-gas Certificering Belangrijk Is
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Voor U als Klant</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Garantie geldig bij gecertificeerde installatie</li>
                      <li>• Verzekering dekt schade bij correcte installatie</li>
                      <li>• Geen boetes bij controle</li>
                      <li>• Veilige en efficiënte werking</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Voor het Milieu</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Voorkomt lekkage van F-gassen</li>
                      <li>• Correcte recycling bij verwijdering</li>
                      <li>• Minimale impact op klimaat</li>
                      <li>• Duurzame installatie praktijken</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">✓ StayCool Airco is F-gas Gecertificeerd</h4>
                  <p className="text-gray-700">
                    Al onze installateurs beschikken over de vereiste F-gas certificering en
                    worden regelmatig bijgeschoold. U ontvangt na installatie alle wettelijk
                    verplichte documentatie en certificaten.
                  </p>
                </div>
              </div>
            </section>

            {/* Bouwkundige Aanpassingen */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bouwkundige Aanpassingen
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Voor installatie zijn enkele bouwkundige aanpassingen nodig. Deze worden
                  vakkundig uitgevoerd en netjes afgewerkt.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Wanddoorvoer
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Diameter:</strong> 65-80mm (afhankelijk van aantal leidingen)</li>
                    <li><strong>Afschot:</strong> 2-3° naar buiten (vochtafvoer)</li>
                    <li><strong>Afdichting:</strong> PU-schuim + afwerkring + siliconenkit</li>
                    <li><strong>Isolatie:</strong> Volledige isolatie van doorvoer</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                  Leidingwerk Wegwerken
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Optie 1: Kanaal in Muur</h4>
                    <p className="text-gray-700">
                      Leidingen worden in de muur gefreesd en afgedekt met gips of stucwerk.
                      Meest esthetisch maar arbeidsintensief.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Optie 2: Kabelgoot</h4>
                    <p className="text-gray-700">
                      Leidingen in PVC kabelgoot (40x60mm of 60x80mm). Snelle installatie,
                      nette afwerking, eenvoudig onderhoud.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Optie 3: Door Spouw</h4>
                    <p className="text-gray-700">
                      Bij spouwmuren kunnen leidingen door de spouw geleid worden.
                      Volledig onzichtbaar maar niet altijd mogelijk.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kennisbank Links */}
            <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meer Installatie Informatie
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/kennisbank/airco-installatie"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Complete Installatie Gids
                  </h3>
                  <p className="text-gray-700">
                    Uitgebreide uitleg over het volledige installatieproces en tijdsindicaties
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-capaciteit-berekenen"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Capaciteit Berekenen
                  </h3>
                  <p className="text-gray-700">
                    Bepaal het juiste vermogen voor uw situatie met onze handige calculator
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-kosten"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Kosten Overzicht
                  </h3>
                  <p className="text-gray-700">
                    Alle kosten op een rij: aanschaf, installatie, onderhoud en energieverbruik
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-onderhoud"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Onderhoud en Levensduur
                  </h3>
                  <p className="text-gray-700">
                    Verleng de levensduur van uw airco met goed onderhoud
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Professionele Installatie Gegarandeerd
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Al onze installateurs zijn F-gas gecertificeerd en werken volgens de hoogste kwaliteitsnormen
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  Gratis Plaatsbezoek
                </Link>
                <Link
                  to="/offerte"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-block border-2 border-white"
                >
                  Offerte Aanvragen
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
