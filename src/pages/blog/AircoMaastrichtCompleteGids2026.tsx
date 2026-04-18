import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoMaastrichtCompleteGids2026() {
  return (
    <>
      <MetaTags
        title="Airco Maastricht 2026: Installateur, Kosten, Subsidie + Wijkgids | StayCool"
        description="Complete gids voor airco in Maastricht: kosten €1.500–€3.500, ISDE-subsidie voor lucht-lucht warmtepomp, wijkspecifieke overwegingen voor Binnenstad, Wyck, Heer en meer."
        keywords="airco maastricht, airco installateur maastricht, airco kosten maastricht, airco subsidie maastricht, airco binnenstad maastricht, airco wyck, airco heer"
        canonicalUrl="https://staycoolairco.nl/blog/airco-maastricht-complete-gids-2026"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco Maastricht 2026: Complete gids voor installatie, kosten en subsidies",
          description: "Alles wat u moet weten over airco in Maastricht — per wijk, per woningtype, inclusief subsidies en kosten.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-maastricht-complete-gids-2026.webp"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Wat kost een airco in Maastricht inclusief montage?",
            "answer": "Voor een gangbare woonkamer (3,5 kW single-split): €1.700–€2.400 inclusief installatie. Na ISDE-subsidie voor lucht-lucht warmtepomp: €1.200–€1.900 netto. Voor grotere of complexere installaties (villa, monumenten, multisplit): €3.000–€7.500."
            },
            {
            "question": "Mag ik zomaar een airco plaatsen in een monument?",
            "answer": "Nee. Maastrichtse binnenstadwoningen onder monumentenbescherming vragen vergunning voor externe wijzigingen. Binnen-units zijn meestal vrij, buiten-units vereisen beoordeling. Wij regelen de vergunningsaanvraag."
            },
            {
            "question": "Kan ik subsidie krijgen voor airco in Maastricht?",
            "answer": "Alleen als de airco verwarmingsfunctie heeft (lucht-lucht warmtepomp), én het model op de RVO-meldcode- lijst staat. Minimum €500 ISDE. Aanvullende gemeentelijke regelingen variëren; check gemeente Maastricht of energiesubsidiewijzer.nl."
            },
            {
            "question": "Hoe lang duurt installatie in Maastricht?",
            "answer": "Standaard-installatie (enkel split): 1 werkdag. Multisplit: 2 werkdagen. Planning vanaf aanvraag: meestal binnen 2 weken. Voor monumenten: reken op 6–10 weken vanwege vergunning."
            },
            {
            "question": "Werken jullie in heel Maastricht?",
            "answer": "Ja, in alle wijken: binnenstad, Wyck, Céramique, Heer, Scharn, Amby, Sint-Pieter, Villapark, Biesland, Campagne, Limmel, Malberg, Malpertuis, Nazareth, Wittevrouwenveld, Wijckerpoort. Ook aangrenzende gemeenten zoals Eijsden, Meerssen, Valkenburg."
            },
            {
            "question": "Wat als mijn VvE geen toestemming geeft?",
            "answer": "Kom dan met een compleet technisch voorstel: specs van stille binnenunit, locatie van buitenunit op onopvallende plek, geluidsberekening, trillings-isolatie. In 80% van onze VvE-aanvragen krijgen we goedkeuring met het juiste dossier. Wij helpen daarmee gratis."
            },
            {
            "question": "Gratis inmeting bij u thuis in Maastricht",
            "answer": "Geen verkooppraatjes, geen valse beloftes. Gewoon een monteur die bij u langskomt, meet, advies geeft en de juiste oplossing voor úw woning bepaalt. Inclusief VvE- en vergunningsvragen beantwoorden."
            }
            ]
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
              { label: 'Airco Maastricht complete gids' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>10 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Lokaal</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco in Maastricht 2026: complete gids met kosten, subsidies en wijktips
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Airco laten plaatsen in <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link>
                {' '}kost gemiddeld <strong>€1.500 tot €3.500</strong> inclusief F-gassen-gecertificeerde installatie.
                Met ISDE-subsidie voor lucht-lucht warmtepompen (min. €500) blijft het netto €1.000–€3.000.
                Maar Maastricht is bijzonder: monumentale binnenstad, steile straten in Sint-Pieter, moderne
                nieuwbouw in Céramique. Hier vertellen we per wijk en woningtype wat u écht moet weten.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Maastricht in 5 feiten</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Vraag</th>
                      <th className="text-left py-2 font-semibold">Antwoord 2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Gemiddelde installatie-kosten?</td>
                      <td className="py-2">€1.500 – €3.500 (afhankelijk van vermogen)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Subsidie beschikbaar?</td>
                      <td className="py-2">ISDE min. €500 voor lucht-lucht warmtepomp</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Monumentale woning (binnenstad)?</td>
                      <td className="py-2">Vergunning vaak vereist — check gemeenteloket</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Installatie-termijn?</td>
                      <td className="py-2">1 dag, meestal binnen 2 weken gepland</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">F-gassen-certificaat nodig?</td>
                      <td className="py-2">Ja, altijd. Werk met Nederlands erkende installateur.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Airco in Maastricht — binnen 2 dagen geplaatst</h3>
                <p className="mb-4">
                  StayCool heeft F-gassen-gecertificeerde monteurs gevestigd in Limburg. Voor Maastricht betekent dat:
                  snelle inmeting (dezelfde week), offerte binnen 48 uur, installatie meestal binnen 2 weken. Gratis
                  jaarlijks onderhoud bij installatie via ons.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag offerte voor Maastricht aan
                </Link>
              </div>

              {/* ==================== SECTION 1: WAAROM MAASTRICHT BIJZONDER ==================== */}
              <h2>1. Waarom Maastricht anders is dan andere Limburgse steden</h2>

              <p>
                Maastricht heeft eigenschappen die airco-installatie complexer maken dan in bijvoorbeeld
                <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline mx-1">Sittard</Link> of
                <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline mx-1">Heerlen</Link>.
                Dit zijn de belangrijkste:
              </p>

              <ul>
                <li>
                  <strong>Monumentale bebouwing</strong> — veel woningen in de binnenstad hebben beschermde
                  status. Externe airco-units mogen niet zichtbaar zijn vanuit de straat.
                </li>
                <li>
                  <strong>Hoge oude plafonds</strong> — 17e-eeuwse woningen hebben vaak plafonds van 3,5 m+. Een
                  standaard 2,5 kW airco is te klein. Reken op 3,5–5,0 kW voor 25 m² ruimte.
                </li>
                <li>
                  <strong>Dikke stenen muren</strong> — goede isolatie-eigenschappen 's zomers, maar verwarmen
                  duurt langer op te starten. Aanbeveling: airco continu op lage stand houden in plaats van
                  aan/uit.
                </li>
                <li>
                  <strong>Mergelgrond in Sint-Pieter en Heer</strong> — bijzondere boorspecificaties nodig voor
                  kabeldoorvoer.
                </li>
                <li>
                  <strong>Dichte Belgische grens</strong> — sommige inwoners kopen airco's in België goedkoper.
                  Attentie: andere garantie-voorwaarden en F-gassen-regels.
                </li>
              </ul>

              {/* ==================== SECTION 2: PER WIJK ==================== */}
              <h2>2. Per wijk: wat u moet weten</h2>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🏛️ Binnenstad (Vrijthof, Markt, Jeker)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Uitdaging:</strong> monumentenvergunning vereist voor externe units. Veel panden zijn
                    beschermd.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Oplossing:</strong> multisplit-systeem met buitenunit op binnenterrein, of
                    cassette-unit voor plat dak. Wij helpen met vergunningsaanvraag bij gemeente.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🏙️ Céramique & Wyck</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> moderne appartementen, goede isolatie, veel VvE-bestuur.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Aandachtspunt:</strong> VvE-toestemming nodig voor gevel-plaatsing. Wij leveren
                    technische specs voor VvE-vergaderingen.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🏘️ Heer, Scharn, Amby</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> rijtjeshuizen jaren 60–80, standaard indeling. Soms mergelbodem.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Voordeel:</strong> goede toegang voor tuinplaatsing buitenunit. Typisch €1.500–€2.200
                    totaal.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🏡 Sint-Pieter & Villapark</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> vrijstaande villa's, grote ruimtes, vaak meerdere units nodig.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Overweging:</strong> multisplit of full-inverter systeem met centrale buitenunit. Reken op
                    €4.000–€7.000 voor 3+ kamers.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🌳 Malberg, Malpertuis, Nazareth</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> portiek- en flatwoningen, VvE's.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Oplossing:</strong> kleine slanke split-units (Daikin Emura, Toshiba Haori) passen goed
                    in kleinere kamers. VvE-goedkeuring doorgaans standaard.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">🏞️ Biesland, Campagne, Limmel</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> gemengd (rijtjes + twee-onder-een-kap), groene omgeving.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Tip:</strong> buitenunit op achtergevel kan geluid op terras geven — onze monteurs
                    adviseren altijd een stil merk (Daikin/Toshiba) en plaatsing op isolatie-rubbers.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION 3: KOSTEN ==================== */}
              <h2>3. Wat kost airco in Maastricht? Prijzen per woningtype</h2>

              <p>
                Prijzen variëren met vermogen, merk en installatie-complexiteit. Onderstaande tabel is onze
                standaard-range voor Maastricht-installaties in 2026:
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Woningtype / ruimte</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Aanbevolen vermogen</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Prijs incl. installatie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Na ISDE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Slaapkamer/studeerkamer</td>
                      <td className="border border-gray-300 px-4 py-2">2,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.400 – €1.900</td>
                      <td className="border border-gray-300 px-4 py-2">€900 – €1.400</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Woonkamer rijtjeshuis</td>
                      <td className="border border-gray-300 px-4 py-2">3,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.700 – €2.400</td>
                      <td className="border border-gray-300 px-4 py-2">€1.200 – €1.900</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Open keuken-woonkamer (villa)</td>
                      <td className="border border-gray-300 px-4 py-2">5,0 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€2.300 – €3.200</td>
                      <td className="border border-gray-300 px-4 py-2">€1.800 – €2.700</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">2-kamer appartement (Wyck/Céramique)</td>
                      <td className="border border-gray-300 px-4 py-2">Multisplit 2x (2x2,5 kW)</td>
                      <td className="border border-gray-300 px-4 py-2">€3.000 – €4.200</td>
                      <td className="border border-gray-300 px-4 py-2">€2.500 – €3.700</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Vrijstaande villa 3+ ruimtes</td>
                      <td className="border border-gray-300 px-4 py-2">Multisplit 3–4 units</td>
                      <td className="border border-gray-300 px-4 py-2">€4.500 – €7.500</td>
                      <td className="border border-gray-300 px-4 py-2">€4.000 – €7.000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Monumentale binnenstadwoning</td>
                      <td className="border border-gray-300 px-4 py-2">Cassette/kanaalunit</td>
                      <td className="border border-gray-300 px-4 py-2">€2.800 – €5.000</td>
                      <td className="border border-gray-300 px-4 py-2">€2.300 – €4.500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Prijzen inclusief: F-gassen-gecertificeerde installatie, standaard leidingwerk tot 5 m,
                BTW, jaarlijks onderhoud eerste jaar. Exclusief: vergunning voor monumenten, extra leidingwerk
                {'>'}5 m, speciale muurdoorvoer in monumenten of bakstenen.
              </p>

              {/* ==================== SECTION 4: SUBSIDIE ==================== */}
              <h2>4. Subsidies specifiek voor Maastricht</h2>

              <p>
                Naast de landelijke ISDE-subsidie biedt de gemeente Maastricht soms aanvullende regelingen. De
                situatie in 2026:
              </p>

              <div className="not-prose bg-green-50 border-l-4 border-green-500 p-5 rounded-r my-6">
                <h4 className="font-bold text-green-900 mb-2">💰 Beschikbare regelingen</h4>
                <ul className="text-sm text-gray-700 space-y-2 mb-0">
                  <li>
                    <strong>ISDE (landelijk)</strong> — min. €500 voor lucht-lucht warmtepomp, meer bij combinatie
                    met isolatie.{' '}
                    <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">Lees volledige uitleg</Link>.
                  </li>
                  <li>
                    <strong>Maastricht Duurzaam</strong> — gemeentelijk programma voor verduurzaming, vaak gekoppeld
                    aan wijk-aanpakken in bijv. Malpertuis. Check gemeentemaastricht.nl/duurzaam.
                  </li>
                  <li>
                    <strong>Warmtefonds lening</strong> — rentevrij/voordelig lenen voor duurzaamheid, voor
                    huishoudens tot modaal inkomen.
                  </li>
                  <li>
                    <strong>Energiesubsidiewijzer.nl</strong> — landelijke aggregator; vul uw Maastrichtse postcode
                    in voor actuele regelingen.
                  </li>
                </ul>
              </div>

              <p>
                <strong>Let op:</strong> circulerende verhalen over "€10.000 subsidie per postcode" gaan meestal over
                collectieve aardgasvrij-projecten in specifieke wijken, niet over individuele airco-installaties.
                Check altijd de bron voor u iets gelooft.
              </p>

              {/* ==================== SECTION 5: INSTALLATIE-PROCES ==================== */}
              <h2>5. Het installatie-proces: van offerte tot ingebruikname</h2>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 1</div>
                  <h4 className="font-bold mb-2">Gratis inmeting bij u thuis</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Onze monteur komt langs in Maastricht, meet ruimtes, bekijkt isolatie, bepaalt optimale
                    plaatsing van binnen- en buitenunit. Duurt ca. 45 minuten. Geen kosten.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 2–3</div>
                  <h4 className="font-bold mb-2">Offerte per e-mail</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Binnen 48 uur krijgt u een gedetailleerde offerte met merk/model opties, netto kosten na ISDE,
                    en planning-optie. Vergelijk gerust met andere partijen.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 4–14</div>
                  <h4 className="font-bold mb-2">Planning & eventueel vergunning</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Voor standaard-locaties plannen we binnen 2 weken. Bij monumenten regelen wij de
                    vergunningaanvraag — ca. 6–8 weken extra.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag X</div>
                  <h4 className="font-bold mb-2">Installatiedag</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Meestal 1 werkdag. Inclusief proefdraaien, uitleg bediening, F-gassen-rapport + meldcode
                    voor ISDE-aanvraag.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION 6: COMMON PITFALLS ==================== */}
              <h2>6. Veelvoorkomende valkuilen in Maastricht</h2>

              <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r my-6">
                <h4 className="font-bold text-amber-900 mb-3">Wat wij klanten achteraf horen</h4>
                <ul className="text-sm text-gray-700 space-y-2 mb-0">
                  <li>
                    <strong>"Ik kocht goedkoop in België"</strong> — zonder F-gassen-gecertificeerde NL-installatie
                    is de installatie illegaal, boetes tot €5.000. Meld nooit dat u buitenlandse onderdelen laat
                    monteren door niet-erkende monteurs.
                  </li>
                  <li>
                    <strong>"Ik wilde zelf installeren"</strong> — F-gassen-regelgeving verbiedt dit voor
                    splitunits. Alleen "plug-and-play" monoblocks mogen door particulieren.
                  </li>
                  <li>
                    <strong>"Vergeten VvE te informeren"</strong> — in Céramique/Wyck kan de VvE achteraf eisen dat
                    de unit wordt weggehaald. Altijd vóór plaatsing toestemming vragen.
                  </li>
                  <li>
                    <strong>"Te klein vermogen gekocht online"</strong> — 2,5 kW voor een open woon-keukenruimte van
                    40 m² draait continu op vol vermogen, verbruikt extra en koelt nauwelijks.
                  </li>
                  <li>
                    <strong>"Monumentale vergunning gemist"</strong> — binnenstad woningen hebben meestal specifieke
                    regels. Check dit VOOR u koopt.
                  </li>
                </ul>
              </div>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🏠 Wij kennen Maastricht door en door</h3>
                <p className="text-gray-700 mb-4">
                  Van monumentenpand aan de Markt tot moderne loft in Céramique — onze monteurs hebben overal in
                  Maastricht gewerkt. We kennen de VvE-procedures, de vergunningstermijnen en de technische
                  uitdagingen. Dat bespaart u tijd, geld en zorgen.
                </p>
                <Link
                  to="/werkgebied/maastricht"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Lees meer over ons werk in Maastricht
                </Link>
              </div>

              {/* ==================== SECTION 7: KIEZEN ==================== */}
              <h2>7. Hoe kies je de juiste installateur in Maastricht?</h2>

              <p>
                Er zijn meerdere airco-installateurs actief in Maastricht. Waarop moet u letten?
              </p>

              <ol>
                <li>
                  <strong>F-gassen-certificaat</strong> — verplicht wettelijk. Vraag naar het nummer en check op
                  <a href="https://www.stek.nl/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline"> stek.nl</a>.
                </li>
                <li>
                  <strong>Nederlandse BTW-nummer + KvK</strong> — geen Belgische/Duitse installateur voor NL-installatie
                  (complicatie garantie én F-gassen-administratie).
                </li>
                <li>
                  <strong>Lokale ervaring</strong> — Maastrichtse wijken hebben specifieke uitdagingen. Vraag naar
                  recente referenties in uw buurt.
                </li>
                <li>
                  <strong>Onderhoud inbegrepen</strong> — sommige installateurs bieden gratis jaarlijks onderhoud. Dat
                  is 5+ jaar waarde (normaal €85–€120/bezoek).
                </li>
                <li>
                  <strong>Reviews controleren</strong> — op Google, Trustoo, Werkspot. Kijk naar service-follow-up, niet
                  alleen installatie-dag.
                </li>
                <li>
                  <strong>Meerdere offertes</strong> — vraag minstens 2 aan. Laagste prijs is zelden beste keuze.
                </li>
              </ol>

              <p>
                Lees onze uitgebreide gids:{' '}
                <Link to="/blog/airco-installateur-limburg-kiezen" className="text-blue-600 hover:underline">
                  Hoe kies je de juiste airco-installateur in Limburg?
                </Link>
              </p>

              {/* ==================== FAQ ==================== */}
              <h2>8. Veelgestelde vragen over airco in Maastricht</h2>

              <h3>Wat kost een airco in Maastricht inclusief montage?</h3>
              <p>
                Voor een gangbare woonkamer (3,5 kW single-split): €1.700–€2.400 inclusief installatie. Na ISDE-subsidie
                voor lucht-lucht warmtepomp: €1.200–€1.900 netto. Voor grotere of complexere installaties (villa,
                monumenten, multisplit): €3.000–€7.500.
              </p>

              <h3>Mag ik zomaar een airco plaatsen in een monument?</h3>
              <p>
                Nee. Maastrichtse binnenstadwoningen onder monumentenbescherming vragen vergunning voor externe
                wijzigingen. Binnen-units zijn meestal vrij, buiten-units vereisen beoordeling. Wij regelen de
                vergunningsaanvraag.
              </p>

              <h3>Kan ik subsidie krijgen voor airco in Maastricht?</h3>
              <p>
                Alleen als de airco verwarmingsfunctie heeft (lucht-lucht warmtepomp), én het model op de RVO-meldcode-
                lijst staat. Minimum €500 ISDE. Aanvullende gemeentelijke regelingen variëren; check gemeente Maastricht
                of energiesubsidiewijzer.nl.
              </p>

              <h3>Hoe lang duurt installatie in Maastricht?</h3>
              <p>
                Standaard-installatie (enkel split): 1 werkdag. Multisplit: 2 werkdagen. Planning vanaf aanvraag:
                meestal binnen 2 weken. Voor monumenten: reken op 6–10 weken vanwege vergunning.
              </p>

              <h3>Werken jullie in heel Maastricht?</h3>
              <p>
                Ja, in alle wijken: binnenstad, Wyck, Céramique, Heer, Scharn, Amby, Sint-Pieter, Villapark, Biesland,
                Campagne, Limmel, Malberg, Malpertuis, Nazareth, Wittevrouwenveld, Wijckerpoort. Ook aangrenzende
                gemeenten zoals Eijsden, Meerssen, Valkenburg.
              </p>

              <h3>Wat als mijn VvE geen toestemming geeft?</h3>
              <p>
                Kom dan met een compleet technisch voorstel: specs van stille binnenunit, locatie van buitenunit op
                onopvallende plek, geluidsberekening, trillings-isolatie. In 80% van onze VvE-aanvragen krijgen we
                goedkeuring met het juiste dossier. Wij helpen daarmee gratis.
              </p>

              {/* ==================== CTA 3 FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Gratis inmeting bij u thuis in Maastricht</h3>
                <p className="mb-4">
                  Geen verkooppraatjes, geen valse beloftes. Gewoon een monteur die bij u langskomt, meet, advies
                  geeft en de juiste oplossing voor úw woning bepaalt. Inclusief VvE- en vergunningsvragen beantwoorden.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Plan gratis inmeting in Maastricht
                </Link>
              </div>

              {/* ==================== RELATED ==================== */}
              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/blog/airco-installatie-zuid-limburg" className="text-blue-600 hover:underline">
                    Airco installatie in Zuid-Limburg: van Maastricht tot Kerkrade
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                    Airco subsidie 2026: wanneer wel, wanneer niet + Limburgse regelingen
                  </Link>
                </li>
                <li>
                  <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                    Beste airco merken 2026: wat onze monteurs in de praktijk zien
                  </Link>
                </li>
                <li>
                  <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">
                    Wat kost 1 uur airco draaien? Stroomkosten 2026
                  </Link>
                </li>
              </ul>

            </div>
          </article>
        </div>
      </m.div>
    </>
  );
}
