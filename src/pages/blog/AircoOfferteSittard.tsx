import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoOfferteSittard() {
  return (
    <>
      <MetaTags
        title="Airco offerte Sittard 2026: echte prijzen + timeline Sittard-Geleen | StayCool"
        description="Airco offerte voor Sittard, Geleen, Born en Beek: €1.400–€3.200 incl. installatie. Waarom Sittard vaak goedkoper is dan Maastricht, nieuwbouw vs oudbouw en realistische levertijd."
        keywords="airco offerte sittard, airco sittard-geleen, airco installateur sittard, airco prijzen westelijke mijnstreek, airco geleen, airco born, airco nieuwbouw sittard"
        canonicalUrl="https://staycoolairco.nl/blog/airco-offerte-sittard"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco offerte Sittard: echte prijzen + timeline voor Sittard-Geleen 2026",
          description: "Concrete offerteprijzen voor airco in Sittard, Geleen, Born en Beek. Waarom installaties in de Westelijke Mijnstreek vaak goedkoper zijn dan in heuvelachtig Zuid-Limburg, plus timeline en corporatie-opties.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-offerte-sittard.webp"
        }}
      />

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Blog', path: '/blog' },
              { label: 'Airco offerte Sittard' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>10 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Lokaal / Offerte</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco offerte Sittard: echte prijzen + timeline voor Sittard-Geleen 2026
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Een airco-offerte voor een standaard woning in{' '}
                <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline">Sittard</Link>{' '}
                ligt in 2026 tussen <strong>€1.400 en €3.200</strong> inclusief F-gassen-gecertificeerde
                installatie — vaak €200 tot €500 lager dan vergelijkbare installaties in Maastricht of
                Valkenburg. De reden is simpel: de vlakke bebouwing in de Westelijke Mijnstreek,
                standaard woningtypes en goede toegang voor onze monteurs maken de installatie sneller
                en minder complex. Hieronder leggen onze monteurs uit Sittard-Geleen precies uit wat u
                mag verwachten.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Sittard-offerte in 6 feiten</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Vraag</th>
                      <th className="text-left py-2 font-semibold">Antwoord 2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Gemiddelde offerte woonkamer (3,5 kW)</td>
                      <td className="py-2">€1.600 – €2.300 incl. montage</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Nieuwbouw Sittard-Noord / Hoogveld</td>
                      <td className="py-2">Vaak 2,5 kW voldoende: €1.400 – €1.800</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Jaren-80 twee-onder-een-kap</td>
                      <td className="py-2">3,5 kW single-split: €1.700 – €2.400</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Werkgebied offerte</td>
                      <td className="py-2">Sittard, Geleen, Born, Beek, Echt, Susteren</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Offerte-termijn</td>
                      <td className="py-2">Binnen 48 uur na inmeting</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Installatie-termijn</td>
                      <td className="py-2">Meestal binnen 7–10 werkdagen</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Offerte voor uw woning in Sittard-Geleen</h3>
                <p className="mb-4">
                  Onze monteurs rijden dagelijks in Sittard, Geleen, Born en Beek. Inmeting binnen de
                  week, offerte binnen 48 uur. Geen verkooppraatjes — gewoon een eerlijke prijs en
                  realistische planning. Gratis jaarlijks onderhoud bij installatie via ons.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag uw Sittard-offerte aan
                </Link>
              </div>

              {/* ==================== SECTION 1: PRIJZEN SITTARDSE WONINGEN ==================== */}
              <h2>1. Prijsranges voor typische Sittardse woningen</h2>

              <p>
                De woningvoorraad in Sittard-Geleen is relatief homogeen: veel jaren-60 tot jaren-90
                rijtjeshuizen, twee-onder-een-kap woningen in wijken als Broeksittard, Kollenberg,
                Ophoven en Lahrhof, plus nieuwbouw in Sittard-Noord en Hoogveld. Dat maakt de
                prijsranges voorspelbaarder dan in bijvoorbeeld de monumentale binnenstad van
                Maastricht.
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Woningtype Sittard-Geleen</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Aanbevolen vermogen</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Prijs incl. installatie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Na ISDE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Nieuwbouw Sittard-Noord / Hoogveld</td>
                      <td className="border border-gray-300 px-4 py-2">2,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.400 – €1.800</td>
                      <td className="border border-gray-300 px-4 py-2">€900 – €1.300</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Rijtjeshuis jaren 70–80 (Broeksittard, Ophoven)</td>
                      <td className="border border-gray-300 px-4 py-2">3,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.600 – €2.300</td>
                      <td className="border border-gray-300 px-4 py-2">€1.100 – €1.800</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Twee-onder-een-kap jaren 80–90 (Kollenberg, Lahrhof)</td>
                      <td className="border border-gray-300 px-4 py-2">3,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.700 – €2.400</td>
                      <td className="border border-gray-300 px-4 py-2">€1.200 – €1.900</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Open keuken-woonkamer (Geleen, Born)</td>
                      <td className="border border-gray-300 px-4 py-2">5,0 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€2.200 – €3.200</td>
                      <td className="border border-gray-300 px-4 py-2">€1.700 – €2.700</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Vrijstaande woning (Overhoven, Limbrichterveld)</td>
                      <td className="border border-gray-300 px-4 py-2">Multisplit 2–3 units</td>
                      <td className="border border-gray-300 px-4 py-2">€3.500 – €6.000</td>
                      <td className="border border-gray-300 px-4 py-2">€3.000 – €5.500</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Appartement (centrum Sittard, Geleen)</td>
                      <td className="border border-gray-300 px-4 py-2">2,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.500 – €2.100</td>
                      <td className="border border-gray-300 px-4 py-2">€1.000 – €1.600</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Prijzen inclusief: F-gassen-gecertificeerde installatie, standaard leidingwerk tot 5 m,
                muurdoorvoer, condensafvoer, BTW en eerste jaar onderhoud. Exclusief: leidingwerk {'>'}5 m,
                speciale steigerwerkzaamheden of VvE-trajecten.
              </p>

              {/* ==================== SECTION 2: WAAROM SITTARD GOEDKOPER ==================== */}
              <h2>2. Waarom Sittard vaak goedkoper is dan Maastricht of Valkenburg</h2>

              <p>
                Als u offertes vergelijkt tussen verschillende Limburgse steden, valt u mogelijk op dat
                Sittard-Geleen er meestal €200–€500 onder zit. Dat is geen korting of lokprijs — het is
                eenvoudigweg een gevolg van de bouwtechnische situatie in de Westelijke Mijnstreek.
                Vier concrete redenen:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🏞️ Vlakke bebouwing</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    Geen steile heuvelstraten zoals in Maastricht-Sint-Pieter of Valkenburg. Onze
                    monteurs kunnen de servicebus vlak voor de voordeur parkeren, steigermateriaal
                    gemakkelijk aanvoeren. Scheelt snel 1–2 uur per installatie.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🧱 Standaard woningtypes</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    Spouwmuren, standaard verdiepingshoogte (2,60–2,70 m), voorspelbare indeling. Geen
                    mergelwanden of 17e-eeuwse constructies zoals in Maastrichtse binnenstad. Boren en
                    leidingwerk zijn rechttoe rechtaan.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">📋 Geen monumentenregime</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    In tegenstelling tot de Maastrichtse binnenstad zijn er in Sittard-Geleen weinig
                    beschermde gevels. Alleen het Sittardse centrum (Markt, Steenweg) heeft enkele
                    monumenten. Elders: geen vergunningsaanvraag nodig, installatie kan direct
                    doorgaan.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🏡 Moderne isolatie = kleiner vermogen</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    Veel Sittardse woningen zijn in de jaren 80–90 gebouwd met redelijke isolatie, en
                    de nieuwbouw voldoet aan BENG-normen. Een goed geïsoleerde woning heeft vaak
                    voldoende aan 2,5 kW in plaats van 3,5 kW = €200–€400 lager op de eindrekening.
                  </p>
                </div>
              </div>

              <p>
                Belangrijk voor de eerlijkheid: dit gaat om <em>gemiddelden</em>. Een vrijstaande villa
                in Overhoven met complex leidingwerk kost evenveel als een vergelijkbare villa in
                Heerlen of Maastricht. Maar de doorsnee rijwoning in Broeksittard of Ophoven is echt
                voordeliger dan dezelfde installatie in bijvoorbeeld Heuvelland.
              </p>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🏠 Offerte op maat voor úw Sittardse woning</h3>
                <p className="text-gray-700 mb-4">
                  Elke woning is anders. Onze monteurs komen gratis langs in Sittard, Geleen, Born of
                  Beek voor een precieze inmeting. Daarna een concrete offerte met merk, model en
                  netto-prijs na ISDE. Geen addertjes, geen ondermin-ruis.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Plan gratis inmeting in
                </Link>
              </div>

              {/* ==================== SECTION 3: NIEUWBOUW VS OUDBOUW ==================== */}
              <h2>3. Nieuwbouw vs. oudbouw: het verschil in offerte</h2>

              <p>
                Sittard-Geleen heeft twee duidelijke woningvoorraden: het DSM-Chemelot-tijdperk
                (jaren 50–70, standaard arbeiderswoningen en eengezinswoningen) en de moderne
                uitbreidingen (Sittard-Noord, Hoogveld, Watersley). De offerte verschilt aanzienlijk:
              </p>

              <h3>Nieuwbouw (na 2010)</h3>
              <ul>
                <li>
                  <strong>Isolatie:</strong> Rc ≥ 4,5 voor gevels, drievoudig glas, kierdichting — een
                  airco van 2,5 kW koelt en verwarmt vaak 30–40 m² moeiteloos.
                </li>
                <li>
                  <strong>Leidingwerk:</strong> vaak al voorbereide doorvoerkanalen of technische
                  ruimte — installatie in halve dag mogelijk.
                </li>
                <li>
                  <strong>Typische offerte:</strong> €1.400–€1.800 voor een enkele ruimte, €2.800–€3.800
                  voor woonkamer + slaapkamer via multisplit.
                </li>
                <li>
                  <strong>Tip:</strong> wie in Sittard-Noord of Hoogveld koopt voordat de bouw klaar
                  is, kan vaak de leidingen laten meenemen door de aannemer — scheelt €150–€250 op onze
                  latere installatie.
                </li>
              </ul>

              <h3>Oudbouw (voor 1990)</h3>
              <ul>
                <li>
                  <strong>Isolatie:</strong> wisselend. Veel jaren-70 rijtjes in Broeksittard hebben
                  matige spouw-isolatie — 3,5 kW is veiliger dan 2,5 kW.
                </li>
                <li>
                  <strong>Leidingwerk:</strong> boren door spouwmuur, soms via plint of bovenkast.
                  Reken op 4–6 uur installatie.
                </li>
                <li>
                  <strong>Typische offerte:</strong> €1.600–€2.400 voor woonkamer. Als tegelijk de
                  slaapkamer meegaat via multisplit: €2.800–€4.000.
                </li>
                <li>
                  <strong>Tip:</strong> vraag altijd naar stroomgroep-check. Jaren-70 huizen in Geleen
                  en Sittard hebben vaak een oude meterkast die bij multisplit-systemen een aparte
                  groep nodig heeft (€150–€300 extra via erkend elektricien).
                </li>
              </ul>

              <h3>Renovatie of verbouwing meenemen</h3>
              <p>
                Veel Sittardse klanten combineren de airco-installatie met een verbouwing (uitbouw
                keuken, kap-isolatie, zonnepanelen). Dat kan flink schelen: als de elektricien en
                stucadoor toch al in huis zijn, rekenen wij geen extra voorrijkosten of breekwerk. Meld
                het gerust bij de offerte-aanvraag — we stemmen de planning af op uw
                verbouwingsschema.
              </p>

              {/* ==================== SECTION 4: CORPORATIE-OPTIES ==================== */}
              <h2>4. Corporatie-opties in Sittard-Geleen</h2>

              <p>
                Een substantieel deel van de Sittardse woningvoorraad is in handen van corporaties:
                ZOwonen (grootste speler), Wonen Limburg en enkele kleinere verhuurders. Huurt u bij
                een corporatie, dan kan een airco-installatie vaak — maar niet zonder spelregels:
              </p>

              <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r my-6">
                <h4 className="font-bold text-amber-900 mb-3">Zo werkt het met corporatie-huurwoningen</h4>
                <ul className="text-sm text-gray-700 space-y-2 mb-0">
                  <li>
                    <strong>Altijd toestemming vragen</strong> — Zelf-Aangebrachte-Voorzieningen (ZAV)
                    formulier invullen. ZOwonen beoordeelt binnen 4–6 weken.
                  </li>
                  <li>
                    <strong>F-gassen-gecertificeerde installatie verplicht</strong> — corporaties
                    accepteren géén doe-het-zelf of Belgische montage. Wij leveren het officiële
                    installatiebewijs dat zij nodig hebben.
                  </li>
                  <li>
                    <strong>Buitenunit bij vertrek:</strong> corporatie kan vragen om verwijdering óf
                    om overname voor een restwaarde. Vraag dit vóór u tekent.
                  </li>
                  <li>
                    <strong>Soms collectieve projecten</strong> — in bepaalde Sittardse wijken (bijv.
                    renovaties in Ophoven-Kemperkoul) biedt ZOwonen zelf lucht-lucht warmtepompen aan.
                    Dan is individuele installatie niet nodig.
                  </li>
                  <li>
                    <strong>ISDE geldt ook voor huurders</strong> — als ú als huurder betaalt voor de
                    installatie, kunt ú de subsidie aanvragen. Meldcode staat op onze installatiebon.
                  </li>
                </ul>
              </div>

              <p>
                Heeft u een koopwoning in een Sittardse VvE (bijv. appartementen in het centrum of aan
                de Dr. Nolenslaan)? Dan geldt dezelfde VvE-procedure als elders: technisch dossier
                aanleveren, geluidsberekening, plaatsing buitenunit afstemmen. Onze monteurs leveren
                dat pakket gratis aan — in 80% van de VvE-aanvragen krijgen we akkoord met het juiste
                dossier.
              </p>

              {/* ==================== SECTION 5: TIMELINE ==================== */}
              <h2>5. Timeline: hoe snel levert StayCool in de Westelijke Mijnstreek?</h2>

              <p>
                Omdat onze monteurs dagelijks in Sittard, Geleen en Born werken, zijn de doorlooptijden
                in de Westelijke Mijnstreek onder de kortste van Zuid-Limburg. Concreet:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 1–2</div>
                  <h4 className="font-bold mb-2">Aanvraag & telefonisch overleg</h4>
                  <p className="text-sm text-gray-700 m-0">
                    U vult het contactformulier in of belt. Wij bellen binnen 1 werkdag terug voor
                    eerste vragen en plannen de inmeting — vaak al binnen 2–4 dagen.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 3–5</div>
                  <h4 className="font-bold mb-2">Gratis inmeting bij u thuis</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Monteur komt in Sittard of Geleen langs, meet ruimtes, checkt meterkast en
                    buitenunit-locatie. Duurt 30–45 minuten.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 5–7</div>
                  <h4 className="font-bold mb-2">Concrete offerte per e-mail</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Binnen 48 uur na inmeting krijgt u een gedetailleerde offerte: merk/model-opties
                    (Daikin, Toshiba, LG), netto-prijs na ISDE, planning.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 10–17</div>
                  <h4 className="font-bold mb-2">Installatie in 1 dag</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Standaard single-split: 4–6 uur. Multisplit: 1 volledige werkdag. Inclusief
                    proefdraaien, F-gassen-rapport en uitleg bediening.
                  </p>
                </div>
              </div>

              <p>
                In de piek (april–juni) kan de planning uitlopen naar 3–4 weken omdat dan heel
                Zuid-Limburg tegelijk gaat bestellen. <strong>Tip van onze monteurs:</strong> bestel
                in het najaar of winter. Dan installeren we binnen een week én heeft u in maart alles
                al werkend voor het eerste warme weekend.
              </p>

              {/* ==================== SECTION 6: WAT STAAT ER OP DE OFFERTE ==================== */}
              <h2>6. Wat moet er op uw Sittard-offerte staan?</h2>

              <p>
                Een serieuze offerte voor airco in Sittard-Geleen bevat minstens de volgende punten.
                Staat er iets niet? Vraag het alsnog op of vergelijk met een andere partij:
              </p>

              <ol>
                <li>
                  <strong>Merk en exact modelnummer</strong> — niet "Daikin 3,5 kW" maar bijv. "Daikin
                  FTXM35R + RXM35R". Alleen dan kunt u COP-waarde en ISDE-subsidie verifiëren op de
                  RVO-meldcodelijst.
                </li>
                <li>
                  <strong>Aantal meter leidingwerk</strong> — standaard is 5 m. Is het meer, dan
                  meerprijs specificeren (meestal €20–€30 per meter).
                </li>
                <li>
                  <strong>Locatie buitenunit + isolatie-maatregelen</strong> — op rubberen
                  trillingsdempers? Op gevelbeugels? Aan de achterzijde? Dit bepaalt geluid voor
                  buren.
                </li>
                <li>
                  <strong>F-gassen-certificaatnummer van uitvoerend monteur</strong> — check op
                  <a href="https://www.stek.nl/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline"> stek.nl</a>.
                </li>
                <li>
                  <strong>Elektrotechnische aanpassingen</strong> — aparte groep nodig? Indien ja,
                  inclusief of exclusief?
                </li>
                <li>
                  <strong>Garantietermijn</strong> — 5 jaar op toestel is standaard bij Daikin/LG/Toshiba.
                  Installatiegarantie bij StayCool: 2 jaar.
                </li>
                <li>
                  <strong>Onderhoudsvoorwaarden</strong> — bij ons:{' '}
                  <Link to="/gratis-onderhoud" className="text-blue-600 hover:underline">gratis jaarlijks onderhoud</Link>{' '}
                  zolang u klant bent.
                </li>
                <li>
                  <strong>BTW-tarief</strong> — lucht-lucht warmtepompen vallen soms onder 9% i.p.v. 21%
                  BTW. Vraag expliciet of uw offerte dit correct toepast.
                </li>
              </ol>

              <p>
                Voor een complete checklist en vergelijkingspunten — ook voor andere Limburgse steden —
                raden we onze pillar-gids aan. <strong>Kritische link:</strong> voor algemene
                offerte-checklist, zie onze{' '}
                <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline font-semibold">
                  volledige airco offerte gids voor Limburg
                </Link>.
              </p>

              {/* ==================== SECTION 7: DSM/CHEMELOT ==================== */}
              <h2>7. Pragmatische keuze voor DSM-Chemelot-werknemers</h2>

              <p>
                Een flink deel van de inwoners van Sittard, Geleen en Born werkt bij Chemelot, DSM,
                Fibrant of aanverwante bedrijven. Uit de offerte-aanvragen die wij krijgen blijkt een
                duidelijk patroon: deze klanten kiezen <em>pragmatisch en technisch</em>, niet op
                marketing. Daarom structureren wij onze offerte voor Chemelot-omgeving iets anders:
              </p>

              <ul>
                <li>
                  <strong>COP-waardes en SCOP bij -7°C mét vermelding</strong> — niet alleen de
                  glossy-waarde bij 7°C buiten. Chemelot-mensen willen weten hoe het ding écht
                  presteert in januari.
                </li>
                <li>
                  <strong>Merkverschillen hard uitgelegd</strong> — Daikin vs. Mitsubishi vs. LG: wat
                  is het werkelijke verschil in R&D, niet in reclame? Wij geven onze eerlijke mening
                  op basis van servicegesprekken.
                </li>
                <li>
                  <strong>Terugverdientijd in spreadsheet-vorm</strong> — op aanvraag leveren we de
                  kostenberekening aan als Excel. Veel klanten willen zelf de aannames kunnen
                  bijstellen.
                </li>
                <li>
                  <strong>Minimum 2 merken aanbieden</strong> — geen "ons huismerk" push. U kiest.
                </li>
              </ul>

              <p>
                Wilt u weten welke merken in de praktijk het meest betrouwbaar zijn? Lees onze{' '}
                <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                  vergelijking van de beste airco-merken 2026
                </Link>{' '}
                — geschreven op basis van wat onze monteurs in Limburgse service-calls écht meemaken.
              </p>

              {/* ==================== SECTION 8: SUBSIDIE LINK ==================== */}
              <h2>8. Subsidie en fiscaal voordeel in Sittard-Geleen</h2>

              <p>
                De landelijke ISDE-subsidie (minstens €500 voor lucht-lucht warmtepomp) geldt ook voor
                Sittardse en Gelense installaties. Daarnaast:
              </p>

              <ul>
                <li>
                  <strong>Gemeente Sittard-Geleen verduurzamingslening</strong> — via het landelijke
                  Warmtefonds, tot €25.000 tegen lage rente. Check de website van de gemeente voor
                  actuele voorwaarden.
                </li>
                <li>
                  <strong>9% BTW-tarief</strong> — bij plaatsing van de buitenunit op of aan de woning
                  mag soms 9% in plaats van 21% BTW worden gerekend. Wij passen dit automatisch toe
                  waar het mag.
                </li>
                <li>
                  <strong>Combinatie-subsidies</strong> — combineer airco-installatie met isolatie of
                  zonnepanelen voor hogere ISDE-uitkering.
                </li>
              </ul>

              <p>
                Voor een volledig overzicht van wat in 2026 beschikbaar is in Limburg:{' '}
                <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                  Airco subsidie 2026 Limburg — welke regelingen wel of niet
                </Link>.
              </p>

              {/* ==================== FAQ ==================== */}
              <h2>9. Veelgestelde vragen over airco offerte Sittard</h2>

              <h3>Wat kost een airco in Sittard gemiddeld?</h3>
              <p>
                Voor een standaard woonkamer (3,5 kW single-split) in een rijtjeshuis of
                twee-onder-een-kap: €1.600–€2.400 inclusief F-gassen-installatie. Na ISDE-subsidie voor
                lucht-lucht warmtepomp: €1.100–€1.900 netto. Nieuwbouw in Sittard-Noord of Hoogveld kan
                met 2,5 kW toe en komt op €1.400–€1.800 uit.
              </p>

              <h3>Rijden jullie ook in Geleen, Born en Beek?</h3>
              <p>
                Ja. Ons werkgebied omvat heel Sittard-Geleen (incl. Geleen, Born, Obbicht, Grevenbicht,
                Lindenheuvel, Krawinkel, Lutterade), plus{' '}
                <Link to="/werkgebied/beek" className="text-blue-600 hover:underline">Beek</Link>,{' '}
                <Link to="/werkgebied/echt" className="text-blue-600 hover:underline">Echt</Link>,
                Susteren, Roosteren, Nieuwstadt en Urmond. Dezelfde prijzen, dezelfde planning-termijnen.
              </p>

              <h3>Hoe lang duurt het vanaf offerte tot installatie?</h3>
              <p>
                Bij standaard-opdrachten: 7–10 werkdagen vanaf getekende offerte. In het voorjaar
                (april–juni) kan dit oplopen naar 3–4 weken. Onze monteurs plannen altijd realistisch
                — liever een iets latere datum die we halen dan een belofte die we moeten schuiven.
              </p>

              <h3>Is een installatie in Sittard echt goedkoper dan in Maastricht?</h3>
              <p>
                Gemiddeld €200–€500 per installatie, ja. Reden: vlakke bebouwing (geen steile
                heuvelstraten), standaard woningtypes zonder monumentenregime, en goede isolatie in
                moderne woningen betekent vaak kleiner (dus goedkoper) vermogen. Voor een vrijstaande
                villa met complex leidingwerk is het verschil kleiner.
              </p>

              {/* ==================== CTA 3 FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Concrete offerte voor uw Sittardse woning</h3>
                <p className="mb-4">
                  Onze monteurs in Sittard-Geleen meten gratis in, rekenen ISDE en BTW-voordeel uit,
                  en leveren binnen 48 uur een eerlijke offerte. Geen voorschot, geen pushgesprek.
                  Werkgebied: Sittard, Geleen, Born, Beek, Echt, Susteren.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag gratis inmeting aan
                </Link>
              </div>

              {/* ==================== RELATED ==================== */}
              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                    Airco offerte Limburg — complete checklist en vergelijkingspunten (pillar-gids)
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                    Airco subsidie 2026 Limburg: welke regelingen wel of niet
                  </Link>
                </li>
                <li>
                  <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                    Beste airco merken 2026: wat onze monteurs in de praktijk zien
                  </Link>
                </li>
                <li>
                  <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline">
                    Ons werkgebied Sittard
                  </Link>
                  {' · '}
                  <Link to="/werkgebied/geleen" className="text-blue-600 hover:underline">Geleen</Link>
                  {' · '}
                  <Link to="/werkgebied/born" className="text-blue-600 hover:underline">Born</Link>
                  {' · '}
                  <Link to="/werkgebied/beek" className="text-blue-600 hover:underline">Beek</Link>
                  {' · '}
                  <Link to="/werkgebied/echt" className="text-blue-600 hover:underline">Echt</Link>
                </li>
              </ul>

            </div>
          </article>
        </div>
      </m.div>
    </>
  );
}
