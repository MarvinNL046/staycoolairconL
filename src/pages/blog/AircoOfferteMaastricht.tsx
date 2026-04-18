import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoOfferteMaastricht() {
  return (
    <>
      <MetaTags
        title="Airco offerte Maastricht: echte prijzen per wijk + checklist 2026 | StayCool"
        description="Wat kost een airco offerte in Maastricht? Binnenstad €2.800–€5.000, Heer €1.500–€2.200, Céramique €3.000–€4.200. Checklist, VvE-proces en monumentenvergunning-kosten voor 2026."
        keywords="airco offerte maastricht, airco prijs maastricht, airco offerte binnenstad maastricht, airco offerte ceramique, airco offerte wyck, airco offerte heer, offerte airco limburg"
        canonicalUrl="https://staycoolairco.nl/blog/airco-offerte-maastricht"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco offerte Maastricht: echte prijzen per wijk + checklist 2026",
          description: "Prijsverwachting per Maastrichtse wijk, wat er in een offerte moet staan en waarom twee offertes 30% kunnen verschillen. Inclusief monumentenvergunning en VvE-traject.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-offerte-maastricht.webp"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Hoe snel krijg ik een offerte voor airco in Maastricht?",
            "answer": "Bij StayCool meestal binnen 48 uur na de gratis inmeting. De inmeting zelf plannen we binnen 2–4 werkdagen. Voor een rijtjeshuis in Heer of Scharn betekent dit: binnen een week heeft u een complete offerte op tafel."
            },
            {
            "question": "Is de offerte bindend als ik nog geen monumentenvergunning heb?",
            "answer": "Onze offertes hebben 30 dagen geldigheid. Bij monumenten nemen we een optionele post op voor vergunningregie (€300–€500). Als de gemeente Maastricht onverhoopt weigert, vervalt het deel van de installatie — u betaalt dan alleen de tekening- en leges-kosten. Geen verrassingen."
            },
            {
            "question": "Kan ik een offerte uit België gebruiken in Maastricht?",
            "answer": "Technisch ja, juridisch nee. Voor installatie op Nederlands grondgebied is een Nederlandse F-gassen- gecertificeerde monteur verplicht. Belgische offertes lijken 15–20% goedkoper, maar bij problemen heeft u geen NL-garantie en riskeert u boetes tot €5.000 bij een illegale installatie."
            },
            {
            "question": "Verschilt een offerte in Maastricht van één in Heerlen of Sittard?",
            "answer": "Ja. Maastricht heeft meer monumentenpanden, strengere VvE-regels in Céramique/Wyck en vaker mergelgrond. Voor algemene offerte-aspecten die in heel Limburg gelden, raden we onze volledige airco offerte gids voor Limburg aan."
            },
            {
            "question": "Klaar voor uw Maastrichtse offerte?",
            "answer": "Gratis inmeting bij u thuis — in elke wijk van Maastricht. Offerte binnen 48 uur, alle 10 checklist-punten compleet ingevuld. Geen meerwerk achteraf, geen verkooppraatjes."
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
              { label: 'Airco offerte Maastricht' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>8 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Offertes & Prijzen</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco offerte Maastricht: echte prijzen per wijk + checklist 2026
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Een eerlijke airco offerte in <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link>
                {' '}ligt in 2026 tussen <strong>€1.500 en €5.000</strong>, sterk afhankelijk van uw wijk.
                Een rijtjeshuis in Heer is meestal €1.500–€2.200; een appartement in Céramique €3.000–€4.200;
                een monumentenpand aan de Markt of Vrijthof €2.800–€5.000 vanwege vergunning- en cassette-werk.
                Hieronder leest u exact welke posten in een Maastrichtse offerte horen, waarom twee offertes
                30% kunnen verschillen én hoe snel onze monteurs in Maastricht leveren.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Offerte Maastricht in één oogopslag</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Vraag</th>
                      <th className="text-left py-2 font-semibold">Antwoord 2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Gemiddelde offerteprijs Maastricht</td>
                      <td className="py-2">€1.500 – €5.000 (wijkafhankelijk)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Offerte binnen hoeveel dagen?</td>
                      <td className="py-2">48 uur na inmeting</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Monumentenvergunning-kosten</td>
                      <td className="py-2">€150 – €500 leges + 6–8 weken doorlooptijd</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Geldigheid offerte</td>
                      <td className="py-2">30 dagen (bij StayCool)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Grootste prijsverschil tussen offertes?</td>
                      <td className="py-2">Leidinglengte, vergunning en VvE-kosten</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Offerte op maat voor uw Maastrichtse woning</h3>
                <p className="mb-4">
                  Onze monteurs in Maastricht kennen de binnenstad, Céramique, Heer en Sint-Pieter uit het hoofd.
                  Gratis inmeting dezelfde week, offerte binnen 48 uur, zonder verkooppraatjes.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag offerte Maastricht aan
                </Link>
              </div>

              {/* ==================== SECTION 1: PRIJS-MATRIX PER WIJK ==================== */}
              <h2>1. Prijsverwachting per Maastrichtse wijk</h2>

              <p>
                Geen wijk in Maastricht is hetzelfde. Onze monteurs zien dat de verschillen vooral zitten in
                <strong> leidinglengte, toegankelijkheid van de buitenunit en vergunning-complexiteit</strong>.
                Hieronder de ranges die wij in 2026 realistisch achten voor een standaard single-split woonkamer,
                inclusief F-gassen-gecertificeerde installatie en BTW.
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Wijk</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Typisch woningtype</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Prijsrange 3,5 kW</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Extra complicaties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Binnenstad</strong> (Vrijthof, Markt, Jeker)</td>
                      <td className="border border-gray-300 px-4 py-2">Monument, grachtenpand</td>
                      <td className="border border-gray-300 px-4 py-2">€2.800 – €5.000</td>
                      <td className="border border-gray-300 px-4 py-2">Monumentenvergunning, cassette-unit</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Wyck</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Herenhuis, stadsappartement</td>
                      <td className="border border-gray-300 px-4 py-2">€2.200 – €3.500</td>
                      <td className="border border-gray-300 px-4 py-2">VvE, hoogbouw-toeslag</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Céramique</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Modern appartement</td>
                      <td className="border border-gray-300 px-4 py-2">€3.000 – €4.200</td>
                      <td className="border border-gray-300 px-4 py-2">Strenge VvE, gevel-eisen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Heer, Scharn, Amby</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Jaren 60–80 rijtjeshuis</td>
                      <td className="border border-gray-300 px-4 py-2">€1.500 – €2.200</td>
                      <td className="border border-gray-300 px-4 py-2">Geen; standaardwerk</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Sint-Pieter, Villapark</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Vrijstaande villa</td>
                      <td className="border border-gray-300 px-4 py-2">€2.400 – €3.800 (enkel)</td>
                      <td className="border border-gray-300 px-4 py-2">Mergelbodem, multisplit gewenst</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Malberg, Malpertuis, Nazareth</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Flat/portiekwoning</td>
                      <td className="border border-gray-300 px-4 py-2">€1.700 – €2.600</td>
                      <td className="border border-gray-300 px-4 py-2">VvE-afstemming gevel</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Deze ranges zijn voor één binnenunit (3,5 kW) in een gangbare woonkamer. Multisplit of cassette
                ligt structureel 40–80% hoger. Deze prijzen zijn exclusief eventuele leges voor vergunningen en
                exclusief VvE-proceskosten (indien van toepassing).
              </p>

              {/* ==================== SECTION 2: MUST-HAVES IN OFFERTE ==================== */}
              <h2>2. Wat moet er in een Maastrichtse offerte staan? (10-punts checklist)</h2>

              <p>
                Een goede offerte in Maastricht is specifieker dan in een doorsnee Nederlandse stad. Onze monteurs
                krijgen regelmatig offertes van andere bedrijven onder ogen waar cruciale posten ontbreken. Loop dit
                lijstje af voordat u tekent:
              </p>

              <ol>
                <li>
                  <strong>Merk, model en vermogen (kW)</strong> — niet alleen "splitunit 3,5 kW" maar een concrete
                  typenummer (bijv. Daikin FTXM35R). Zonder dit kan de installateur achteraf schuiven met kwaliteit.
                </li>
                <li>
                  <strong>COP- en SEER-waarde</strong> — voor ISDE-aanvraag essentieel én voor uw stroomverbruik
                  belangrijk. Zie ook onze uitleg over <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">stroomkosten per uur</Link>.
                </li>
                <li>
                  <strong>Locatie binnen- en buitenunit</strong> — letterlijk beschreven. "Buitenunit op achtergevel
                  boven keukenraam" is concreet; "buitenunit op geschikte plek" is vaag en gaat later mis.
                </li>
                <li>
                  <strong>Leidinglengte in meters</strong> — tot 5 meter valt meestal binnen standaardtarief, daarboven
                  per strekkende meter. In Maastrichtse grachtenpanden met dikke muren ziet onze monteur regelmatig
                  12–18 meter; dat is een prijspunt van €300–€600.
                </li>
                <li>
                  <strong>Muurdoorvoer-methode</strong> — bij monumenten of mergel-muren wordt dit duurder
                  (kernboring €75–€150 per doorvoer in plaats van €25). Moet expliciet staan.
                </li>
                <li>
                  <strong>F-gassen-certificaatnummer van de installateur</strong> — wettelijk verplicht. Geen
                  nummer = geen legale installatie.
                </li>
                <li>
                  <strong>Vergunning-regie (monument/beschermd stadsgezicht)</strong> — wie dient de aanvraag in, wie
                  betaalt leges, wat gebeurt er bij afwijzing? Zie sectie 4.
                </li>
                <li>
                  <strong>VvE-afstemming (Céramique/Wyck/Malberg)</strong> — wie levert technische specs aan de VvE,
                  wie woont de ALV bij? Zie sectie 5.
                </li>
                <li>
                  <strong>Garantietermijn en onderhoudsafspraak</strong> — fabrieksgarantie (vaak 5 jaar) én installatie-
                  garantie (2 jaar). StayCool biedt daarbij <Link to="/gratis-onderhoud" className="text-blue-600 hover:underline">gratis jaarlijks onderhoud</Link>{' '}
                  bij installatie via ons.
                </li>
                <li>
                  <strong>Meldcode voor ISDE-subsidie</strong> — de offerte moet een model bevatten dat op de RVO-lijst
                  staat, anders krijgt u geen subsidie.
                </li>
              </ol>

              {/* ==================== SECTION 3: WAAROM VERSCHIL 30% ==================== */}
              <h2>3. Waarom twee offertes in Maastricht 30% kunnen verschillen</h2>

              <p>
                Klanten in de <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">gemeente Maastricht</Link>
                {' '}vergelijken vaak drie offertes en schrikken van de verschillen. Vier concrete oorzaken die onze
                monteurs wekelijks tegenkomen:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">1. Leidinglengte onderschatten</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    In een Binnenstadspand vanaf de Sint-Servaasbrug richting Maastrichter Brugstraat lopen leidingen
                    vaak 15 m door drie tussenmuren. Offertes met "5 m standaard" lijken goedkoop maar worden in de
                    praktijk €400–€700 duurder.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">2. Wel of geen vergunning inbegrepen</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    Eén offerte regelt de monumentenvergunning voor u (€300–€500 meer, inclusief begeleiding),
                    de andere zegt "zelf regelen". Dat lijkt €500 verschil, maar zelf doen kost u 8 weken en vaak
                    een weigering.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">3. VvE-proces meegerekend of niet</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    In Céramique of Wyck is een VvE-traject standaard 2–4 uur werk van de installateur: tekening maken,
                    geluidsberekening, ALV-presentatie. Dat is €200–€400 die in sommige offertes wel en in andere niet
                    zit.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">4. Toegankelijkheid buitenunit</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    Een 5e verdieping aan de Avenue Céramique vraagt een hoogwerker (€250–€400 dagtarief). Een
                    rijtjeshuis in Heer gewoon een ladder. Niet elke offerte benoemt dit vooraf.
                  </p>
                </div>
              </div>

              <p>
                <strong>Tip:</strong> leg offertes náást elkaar op de 10-punts checklist hierboven. Dan zijn de verschillen
                ineens verklaarbaar in plaats van verdacht.
              </p>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Transparante offerte zonder verrassingen</h3>
                <p className="text-gray-700 mb-4">
                  Onze monteurs in Maastricht meten ter plaatse leidinglengte, controleren monumentstatus,
                  checken VvE-reglement en leveren één offerte waarin alles staat. Geen meerwerk achteraf.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Plan gratis inmeting in Maastricht
                </Link>
              </div>

              {/* ==================== SECTION 4: MONUMENTENVERGUNNING ==================== */}
              <h2>4. Monumentenvergunning in Maastricht: kosten en proces</h2>

              <p>
                Maastricht kent <strong>meer dan 1.650 rijksmonumenten</strong> en een groot beschermd stadsgezicht.
                Woont u in de Binnenstad (tussen Vrijthof, Maastrichter Brugstraat en Sint-Pieterstraat), Wyck of
                delen van Sint-Pieter, dan is de kans groot dat u vergunningplichtig bent zodra er een buitenunit
                zichtbaar aan de gevel of op het dak komt.
              </p>

              <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r my-6">
                <h4 className="font-bold text-amber-900 mb-3">Typische kostenposten voor een monumentale offerte</h4>
                <ul className="text-sm text-gray-700 space-y-2 mb-0">
                  <li>
                    <strong>Leges gemeente Maastricht:</strong> €150 – €500, afhankelijk van ingreep.
                  </li>
                  <li>
                    <strong>Tekenwerk door installateur:</strong> €150 – €300 (plattegrond, gevel-aanzicht, locatie unit).
                  </li>
                  <li>
                    <strong>Advies monumentencommissie (indien vereist):</strong> kosteloos, maar +4 weken doorlooptijd.
                  </li>
                  <li>
                    <strong>Eventuele cassette- of kanaalunit:</strong> €400 – €1.200 meer dan standaard split
                    (omdat buitenunit niet zichtbaar mag zijn).
                  </li>
                  <li>
                    <strong>Extra muurdoorvoer (kernboring):</strong> €75 – €150 per stuk bij monumentale dikke muren.
                  </li>
                </ul>
              </div>

              <p>
                Onze monteurs regelen dit complete pakket. Bij StayCool rekenen we <strong>€300–€500 vast tarief voor
                vergunning-regie</strong> — inclusief tekening, indiening en antwoord richting gemeente. Dat staat één op
                één in de offerte, nooit achteraf bijgeleverd.
              </p>

              {/* ==================== SECTION 5: VVE PROCES ==================== */}
              <h2>5. VvE-proces voor appartementen in Céramique en Wyck</h2>

              <p>
                In de moderne appartementencomplexen rondom Avenue Céramique, Plein 1992 en de Wycker Grachtstraat
                is de VvE-procedure meestal <strong>48% van de totale doorlooptijd</strong>. Wie dit onderschat, staat
                zes weken droog. Een realistische planning:
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Week 1</div>
                  <h4 className="font-bold mb-2">Inmeting + dossier</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Onze monteur meet bij u thuis, maakt gevel-tekening en geluidsberekening. U ontvangt een
                    compleet VvE-dossier dat u kunt indienen.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Week 2–4</div>
                  <h4 className="font-bold mb-2">VvE-bestuur beoordeelt</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Het bestuur bekijkt het dossier. Vaak stellen ze technische vragen; onze monteur beantwoordt die
                    direct. Soms wordt verwezen naar de eerstvolgende ALV.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Week 4–6</div>
                  <h4 className="font-bold mb-2">ALV-besluit</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Bij de Algemene Ledenvergadering volgt stemming. 80% van onze klanten krijgt goedkeuring mits
                    het dossier een stille unit, trillingsisolatie en nette gevelplaatsing laat zien.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Week 6–8</div>
                  <h4 className="font-bold mb-2">Installatie</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Na schriftelijke VvE-goedkeuring plannen we installatie. Meestal 1 werkdag. Inclusief F-gassen-
                    rapport en ISDE-meldcode voor uw aanvraag.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION 6: SNELHEID / TIMELINE ==================== */}
              <h2>6. Hoe snel een offerte en installatie in Maastricht?</h2>

              <p>
                De gemiddelde doorlooptijd van eerste contact tot werkende airco in Maastricht, per scenario:
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Scenario</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Inmeting</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Offerte</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Installatie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Totaal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Rijtjeshuis Heer/Scharn</td>
                      <td className="border border-gray-300 px-4 py-2">2–4 dagen</td>
                      <td className="border border-gray-300 px-4 py-2">48 uur</td>
                      <td className="border border-gray-300 px-4 py-2">1–2 weken</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>2–3 weken</strong></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Villa Sint-Pieter (multisplit)</td>
                      <td className="border border-gray-300 px-4 py-2">2–4 dagen</td>
                      <td className="border border-gray-300 px-4 py-2">3–5 dagen</td>
                      <td className="border border-gray-300 px-4 py-2">2–3 weken</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>3–4 weken</strong></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Appartement Céramique (VvE)</td>
                      <td className="border border-gray-300 px-4 py-2">2–4 dagen</td>
                      <td className="border border-gray-300 px-4 py-2">48 uur</td>
                      <td className="border border-gray-300 px-4 py-2">4–8 weken (na VvE)</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>6–10 weken</strong></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Monument Binnenstad</td>
                      <td className="border border-gray-300 px-4 py-2">2–4 dagen</td>
                      <td className="border border-gray-300 px-4 py-2">3–5 dagen</td>
                      <td className="border border-gray-300 px-4 py-2">6–10 weken (na vergunning)</td>
                      <td className="border border-gray-300 px-4 py-2"><strong>8–12 weken</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Woont u in een aangrenzende gemeente zoals <Link to="/werkgebied/valkenburg" className="text-blue-600 hover:underline">Valkenburg</Link>
                {' '}of <Link to="/werkgebied/eijsden-margraten" className="text-blue-600 hover:underline">Eijsden-Margraten</Link>?
                Daar gelden vergelijkbare doorlooptijden, alleen is monumentvergunning minder vaak nodig.
              </p>

              {/* ==================== SECTION 7: FAQ ==================== */}
              <h2>7. Veelgestelde vragen over offertes in Maastricht</h2>

              <h3>Hoe snel krijg ik een offerte voor airco in Maastricht?</h3>
              <p>
                Bij StayCool meestal binnen 48 uur na de gratis inmeting. De inmeting zelf plannen we binnen 2–4
                werkdagen. Voor een rijtjeshuis in Heer of Scharn betekent dit: binnen een week heeft u een
                complete offerte op tafel.
              </p>

              <h3>Is de offerte bindend als ik nog geen monumentenvergunning heb?</h3>
              <p>
                Onze offertes hebben 30 dagen geldigheid. Bij monumenten nemen we een optionele post op voor
                vergunningregie (€300–€500). Als de gemeente Maastricht onverhoopt weigert, vervalt het deel van
                de installatie — u betaalt dan alleen de tekening- en leges-kosten. Geen verrassingen.
              </p>

              <h3>Kan ik een offerte uit België gebruiken in Maastricht?</h3>
              <p>
                Technisch ja, juridisch nee. Voor installatie op Nederlands grondgebied is een Nederlandse F-gassen-
                gecertificeerde monteur verplicht. Belgische offertes lijken 15–20% goedkoper, maar bij problemen
                heeft u geen NL-garantie en riskeert u boetes tot €5.000 bij een illegale installatie.
              </p>

              <h3>Verschilt een offerte in Maastricht van één in Heerlen of Sittard?</h3>
              <p>
                Ja. Maastricht heeft meer monumentenpanden, strengere VvE-regels in Céramique/Wyck en vaker
                mergelgrond. Voor algemene offerte-aspecten die in heel Limburg gelden, raden we onze{' '}
                <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                  volledige airco offerte gids voor Limburg
                </Link>{' '}
                aan.
              </p>

              {/* ==================== CTA 3 FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Klaar voor uw Maastrichtse offerte?</h3>
                <p className="mb-4">
                  Gratis inmeting bij u thuis — in elke wijk van Maastricht. Offerte binnen 48 uur, alle 10
                  checklist-punten compleet ingevuld. Geen meerwerk achteraf, geen verkooppraatjes.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag uw offerte aan
                </Link>
              </div>

              {/* ==================== RELATED ==================== */}
              <div className="not-prose bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">🔗 Andere Limburgse offerte-gidsen</h3>
                <ul className="space-y-2 text-sm">
                  <li>➤ <Link to="/blog/airco-offerte-heerlen" className="text-blue-600 hover:underline font-medium">Airco offerte Heerlen</Link> — Parkstad-woningen met ISDE-combi voordeel</li>
                  <li>➤ <Link to="/blog/airco-offerte-sittard" className="text-blue-600 hover:underline font-medium">Airco offerte Sittard</Link> — Sittard-Geleen pragmatische prijsranges</li>
                  <li>➤ <Link to="/blog/airco-offerte-aanvragen-checklist" className="text-blue-600 hover:underline font-medium">12-punts offerte-checklist</Link> — wat vraag je installateurs?</li>
                  <li>➤ <Link to="/blog/waarom-verschillen-airco-offertes" className="text-blue-600 hover:underline font-medium">Waarom verschillen offertes 30-50%?</Link> — 10 redenen uitgelegd</li>
                </ul>
              </div>

              <h2>Verder lezen</h2>
              <p>
                Voor algemene offerte-aspecten, zie onze{' '}
                <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline font-semibold">
                  volledige airco offerte gids voor Limburg
                </Link>.
              </p>
              <ul>
                <li>
                  <Link to="/blog/airco-maastricht-complete-gids-2026" className="text-blue-600 hover:underline">
                    Airco in Maastricht 2026: complete gids met kosten, subsidies en wijktips
                  </Link>
                </li>
                <li>
                  <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                    Beste airco merken 2026: wat onze monteurs in de praktijk zien
                  </Link>
                </li>
                <li>
                  <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">
                    Ons werkgebied Maastricht — alle wijken en diensten
                  </Link>
                </li>
                <li>
                  <Link to="/werkgebied/valkenburg" className="text-blue-600 hover:underline">
                    Airco installatie in Valkenburg
                  </Link>
                </li>
                <li>
                  <Link to="/werkgebied/eijsden-margraten" className="text-blue-600 hover:underline">
                    Airco installatie in Eijsden-Margraten
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
