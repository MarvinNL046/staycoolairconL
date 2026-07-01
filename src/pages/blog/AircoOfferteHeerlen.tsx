import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoOfferteHeerlen() {
  return (
    <>
      <MetaTags
        title="Airco offerte Heerlen 2026: prijzen Parkstad + wijk-specifieke tips | StayCool"
        description="Airco offerte Heerlen: reken op €1.400–€3.200 voor een complete installatie in Parkstad (incl. 21% BTW). Snelle terugverdientijd, wijkgids Heerlerbaan tot Hoensbroek en corporatie-tips."
        keywords="airco offerte heerlen, airco heerlen kosten, airco parkstad, airco hoensbroek, airco heerlerheide, airco offerte limburg, airco installateur heerlen"
        canonicalUrl="https://staycoolairco.nl/blog/airco-offerte-heerlen"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco offerte Heerlen: wat kost het in 2026 + Parkstad-specifieke tips",
          description: "Complete offerte-gids voor airco in Heerlen en Parkstad. Prijs-ranges per woningtype (incl. 21% BTW), snelle terugverdientijd en tips voor oudere Parkstad-woningen.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-offerte-heerlen.webp"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Wat kost een airco-offerte in Heerlen?",
            "answer": "Niets — wij rekenen geen voorrijdkosten of inmeetkosten voor offertes in Parkstad. Onze monteur komt gratis langs, meet uw woning door en levert binnen 48 uur een vaste offerte aan. Verplichting tot afname is er niet."
            },
            {
            "question": "Is airco in Heerlen goedkoper dan in Maastricht?",
            "answer": "Gemiddeld 10–20% ja, omdat Heerlense woningen vaker standaard-typologie zijn (rijtjeshuizen zonder monumenten­status). Maastrichtse binnenstad vraagt vergunningstrajecten en vaak complexere installaties. Voor een uitgebreide vergelijking zie Airco Maastricht complete gids 2026 ."
            },
            {
            "question": "Kan ik als huurder in een corporatie-woning airco laten plaatsen?",
            "answer": "Ja, met schriftelijke toestemming van uw corporatie (ZAV-aanvraag). Wij helpen met het technisch dossier. Reken op 4–8 weken wachttijd voor akkoord. Nooit beginnen zonder goedkeuring — risico op terugplaatsings-kosten bij vertrek."
            },
            {
            "question": "Hoelang duurt van offerte tot installatie in Heerlen?",
            "answer": "Bij standaard-situaties: 2 weken gemiddeld. ZAV-trajecten bij corporatie-woningen of VvE-afstemming voor appartementen: reken op 6–10 weken totaal."
            },
            {
            "question": "Vraag nu uw Heerlen-offerte aan",
            "answer": "Binnen 48 uur weet u exact wat een airco voor úw Parkstad-woning kost — de nette prijs incl. 21% BTW en uw verwachte terugverdientijd. Geen verzonnen subsidies, geen verkooppraatjes, geen verplichtingen."
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
              { label: 'Airco offerte Heerlen' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>10 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Offerte & Lokaal</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco offerte Heerlen: wat kost het in 2026 + Parkstad-specifieke tips
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Een airco-offerte in <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline">Heerlen</Link>
                {' '}komt in 2026 gemiddeld uit tussen <strong>€1.400 en €3.200</strong> voor een complete
                installatie — in de praktijk zien onze monteurs dat Heerlense rijtjeshuizen vaak aan de
                onderkant van die range zitten, terwijl vrijstaande woningen in Welten of grotere multisplit-
                systemen in Hoensbroek richting €4.500+ gaan. Parkstad heeft door het mijnverleden veel jaren
                60–70 woningen met specifieke isolatie-uitdagingen — en dat maakt de ROI van airco-als-verwarming
                hier vaak groter dan in nieuwbouwregio's.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Heerlen-offerte in 5 feiten</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Vraag</th>
                      <th className="text-left py-2 font-semibold">Antwoord 2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Gemiddelde offerte rijtjeshuis Heerlen?</td>
                      <td className="py-2">€1.400 – €2.100 (3,5 kW single-split)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Subsidie 2026?</td>
                      <td className="py-2">Geen ISDE op split-airco; soms gemeentelijk</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Goedkoper dan Maastricht?</td>
                      <td className="py-2">Ja, gemiddeld 10–20% door eenvoudiger woningtype</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Corporatie-woning mogelijk?</td>
                      <td className="py-2">Ja, met schriftelijke toestemming verhuurder</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Van inmeting naar installatie?</td>
                      <td className="py-2">Meestal binnen 2 weken in Parkstad</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Vaste offerte voor uw Heerlense woning</h3>
                <p className="mb-4">
                  Geen voorrijdkosten, geen verplichtingen. Onze monteurs kennen Parkstad als hun broekzak —
                  Heerlerbaan, Hoensbroek, Heksenberg, Welten. Gratis inmeting bij u thuis, offerte binnen
                  48 uur op maat van uw woning én uw isolatie.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag gratis offerte Heerlen aan
                </Link>
              </div>

              {/* ==================== SECTION 1 ==================== */}
              <h2>1. Waarom Heerlense woningen anders zijn voor een airco-offerte</h2>

              <p>
                Heerlen is het hart van Parkstad en heeft een heel specifieke woningvoorraad. Door de
                mijnverleden zijn veel wijken tussen 1950 en 1975 gebouwd — destijds volgens toenmalige
                isolatienormen, wat vandaag de dag betekent: <strong>enkel glas, vaak geen spouwisolatie,
                dakisolatie die dunner is dan 10 cm</strong>. Onze monteurs in Parkstad zien dit terug in
                bijna elke offerte-aanvraag. Dat maakt offerte-opbouw anders dan in bijvoorbeeld
                <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline mx-1">Maastricht</Link>
                of <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline mx-1">Sittard</Link>.
              </p>

              <ul>
                <li>
                  <strong>Slechtere schil = hoger benodigd vermogen</strong> — een ogenschijnlijk kleine
                  woonkamer van 28 m² in een jaren-60 rijtjeshuis vraagt vaak 3,5 kW (niet 2,5 kW) omdat de
                  warmteverliezen hoger zijn.
                </li>
                <li>
                  <strong>Maar: enorme winst met airco-verwarming</strong> — juist omdat de stookkosten
                  historisch hoog zijn in deze woningen, is het verschil met een HR-ketel op gas hier groter
                  dan gemiddeld. Meer over die berekening in sectie 3.
                </li>
                <li>
                  <strong>Eenvoudige toegang tot plaatsing</strong> — Heerlense rijtjeshuizen hebben
                  meestal een standaard achtergevel waar de buitenunit prima past. Dit houdt de
                  installatie-kosten lager dan bij complexe monumenten.
                </li>
                <li>
                  <strong>Geen monumentenvergunning nodig</strong> — anders dan in de Maastrichtse
                  binnenstad zijn de meeste Heerlense wijken niet beschermd. Dat bespaart 6–10 weken
                  vergunningsdoorlooptijd.
                </li>
                <li>
                  <strong>Corporatie-aandeel is hoog</strong> — in wijken als Meezenbroek, Heerlerheide-Noord
                  en delen van Hoensbroek is een aanzienlijk deel huurwoning. Dat vraagt om een andere
                  aanpak (zie sectie 7).
                </li>
              </ul>

              {/* ==================== SECTION 2: PER WIJK ==================== */}
              <h2>2. Parkstad per wijk: wat betekent dit voor uw offerte?</h2>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">Heerlerbaan & Welten</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> mix van rijtjes jaren 60–80 en twee-onder-een-kap. Iets
                    hoger gemiddeld welstandsniveau, veel koophuizen.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Offerte-range:</strong> €1.600–€2.800 voor een woonkamer-installatie.
                    Buitenunit meestal probleemloos in de tuin.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">Heerlerheide & Heksenberg</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> mix van rijtjeshuizen en portiekwoningen, veel
                    jaren-70 bouw. Kleinere kavels.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Aandachtspunt:</strong> bij portiekwoningen soms VvE-toestemming nodig. Onze
                    monteurs leveren de technische onderbouwing.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">Hoensbroek</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> zeer gemengd — van karakteristieke jaren-30 tot
                    jaren-70 rijtjes. Kasteel Hoensbroek-hoek heeft soms welstandsregels.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Offerte-range:</strong> €1.400–€2.500 rijtjeshuis. Ga naar onze pagina voor{' '}
                    <Link to="/werkgebied/hoensbroek" className="text-blue-600 hover:underline">Hoensbroek</Link>
                    {' '}voor meer lokale details.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">Meezenbroek, Vrieheide, GMS</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> oudere mijnwerkerswoningen, hoog corporatie-aandeel, vaak
                    aanstaande of lopende renovatie-projecten.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Tip:</strong> combineer airco met een isolatie-aanpak. De airco zelf krijgt geen
                    subsidie, maar isolatie heeft eigen voordelen — en samen verbetert het rendement flink (zie sectie 5).
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">Centrum & Aarveld</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> boven-winkelwoningen, appartementen, kleine
                    tussenwoningen. Compact.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Oplossing:</strong> slanke binnenunits (Daikin Emura, Toshiba Haori),
                    buitenunit op balkon of daklijn. VvE-check bij appartementen.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2 text-blue-900">Grensbuurten (Kerkrade/Landgraaf/Brunssum)</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Typisch:</strong> vergelijkbare woningvoorraad als Heerlen zelf — wij werken
                    in heel Parkstad.
                  </p>
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Direct bekijken:</strong>{' '}
                    <Link to="/werkgebied/kerkrade" className="text-blue-600 hover:underline">Kerkrade</Link>,{' '}
                    <Link to="/werkgebied/landgraaf" className="text-blue-600 hover:underline">Landgraaf</Link>,{' '}
                    <Link to="/werkgebied/brunssum" className="text-blue-600 hover:underline">Brunssum</Link>.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION 3: PRIJS-MATRIX ==================== */}
              <h2>3. Offerte-prijsmatrix voor Heerlense woningen</h2>

              <p>
                Hieronder onze standaard-range voor Heerlense installaties in 2026. Let op: dit zijn
                richtprijzen — een exacte offerte krijgt u pas na gratis inmeting, omdat leidinglengte,
                muurdikte en isolatiestatus altijd meewegen.
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Woningtype</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Aanbevolen vermogen</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Prijs incl. installatie (21% BTW)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Slaapkamer (rijtjeshuis)</td>
                      <td className="border border-gray-300 px-4 py-2">2,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.300 – €1.800</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Woonkamer rijtjeshuis (jaren 60–80)</td>
                      <td className="border border-gray-300 px-4 py-2">3,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.500 – €2.200</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Appartement (Centrum / Heerlerheide)</td>
                      <td className="border border-gray-300 px-4 py-2">2,5–3,5 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€1.400 – €2.300</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Open woonkamer/keuken</td>
                      <td className="border border-gray-300 px-4 py-2">5,0 kW single-split</td>
                      <td className="border border-gray-300 px-4 py-2">€2.100 – €3.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Twee-onder-een-kap (2 units)</td>
                      <td className="border border-gray-300 px-4 py-2">Multisplit 2x (bv. 2,5 + 3,5 kW)</td>
                      <td className="border border-gray-300 px-4 py-2">€2.800 – €4.000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Vrijstaande woning (Welten/Aarveld)</td>
                      <td className="border border-gray-300 px-4 py-2">Multisplit 3–4 units</td>
                      <td className="border border-gray-300 px-4 py-2">€4.200 – €7.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Inbegrepen: F-gassen-gecertificeerde installatie, leidingwerk tot 5 m, BTW, gratis
                jaarlijks onderhoud bij installatie via ons. Exclusief: extra leidingwerk {'>'}5 m,
                speciale muurdoorvoer (bijv. bij dikke bakstenen in oudere Hoensbroekse woningen),
                VvE-dossier bij appartementen.
              </p>

              {/* ==================== SECTION 4: ROI ==================== */}
              <h2>4. Waarom Heerlense woningen vaak betere ROI hebben</h2>

              <p>
                Dit is het stukje dat veel aanbieders weglaten: <strong>juist de oudere woningen in
                Parkstad verdienen een airco-investering vaak sneller terug dan nieuwbouw</strong>. Wij
                zien dit elke week bij klanten in Heerlen en omstreken. De logica:
              </p>

              <div className="not-prose bg-green-50 border-l-4 border-green-500 p-5 rounded-r my-6">
                <h4 className="font-bold text-green-900 mb-3">Rekensom: jaren-70 rijtjeshuis in Heerlen</h4>
                <ul className="text-sm text-gray-700 space-y-2 mb-0">
                  <li>
                    Gemiddeld <strong>gasverbruik</strong>: 1.400–1.800 m³/jaar (landelijk: 1.169 m³)
                  </li>
                  <li>
                    Jaarkosten gas bij €1,60/m³: <strong>€2.240 – €2.880</strong>
                  </li>
                  <li>
                    Als u 60–70% van de warmtevraag afvangt met een airco (COP 4.0): besparing
                    ruwweg <strong>€600 – €900 per jaar</strong>
                  </li>
                  <li>
                    Airco-investering (incl. 21% BTW): €1.500–€2.200
                  </li>
                  <li>
                    <strong>Terugverdientijd: ongeveer 3–4 jaar</strong> — in nieuwbouwwoningen met
                    lagere warmtevraag is dat vaak 5–7 jaar.
                  </li>
                </ul>
              </div>

              <p>
                Kortom: Parkstad's oudere woningvoorraad is geen nadeel voor airco-investeringen — het is
                juist een versterker. Hoe hoger uw huidige gasrekening, hoe sneller u het terugverdient.
                Voor meer cijfers achter deze berekening, zie onze gids{' '}
                <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">
                  Wat kost 1 uur airco draaien?
                </Link>
              </p>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Bereken úw terugverdientijd in Heerlen</h3>
                <p className="text-gray-700 mb-4">
                  Onze monteurs nemen uw huidige gasrekening als uitgangspunt en rekenen de werkelijke
                  besparing voor uw Parkstad-woning uit. Inclusief advies over welk vermogen, welk merk
                  en welke positie van de buitenunit het meest logisch is voor uw specifieke situatie.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Gratis terugverdien-berekening
                </Link>
              </div>

              {/* ==================== SECTION 5: ISOLATIE COMBI ==================== */}
              <h2>5. Airco + isolatie: waarom die combinatie in Parkstad slim is</h2>

              <p>
                Eerst het misverstand rechtzetten: <strong>een airco (split-airco / lucht-lucht warmtepomp)
                krijgt géén ISDE-subsidie</strong> — ook niet in combinatie met isolatie, en ook niet als de
                airco kan verwarmen. ISDE geldt alleen voor lucht-water, hybride en bodemwarmtepompen. Op de
                airco zelf geldt gewoon 21% BTW.
              </p>

              <p>
                Wat wél klopt: veel Parkstad-woningen hebben tegelijk <em>twee</em> achterstanden — matige
                isolatie én verouderde verwarming. De <strong>isolatie</strong> heeft eigen gunstige regels,
                los van de airco:
              </p>

              <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r my-6">
                <h4 className="font-bold text-amber-900 mb-2">Wat levert de isolatie-kant op?</h4>
                <ul className="text-sm text-gray-700 space-y-1 mb-0">
                  <li><strong>9% BTW</strong> op het arbeidsloon van isolatiewerk aan woningen ouder dan 2 jaar (i.p.v. 21%)</li>
                  <li>Vaak een eigen <strong>ISDE-bedrag voor isolatie</strong>, dat verdubbelt bij twee isolatiemaatregelen binnen 24 maanden</li>
                  <li>Een beter geïsoleerd huis = lagere warmtevraag = de airco werkt efficiënter en verdient zich sneller terug</li>
                </ul>
              </div>

              <p>
                Dus: de winst van "combineren" zit in de isolatie plus de energiebesparing van de airco —
                niet in ISDE op de airco zelf. Bedragen en regels wijzigen jaarlijks. Voor het volledige,
                eerlijke plaatje zie onze gids{' '}
                <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                  Airco subsidie 2026 Limburg
                </Link>.
              </p>

              {/* ==================== SECTION 6: MERKEN & LEVENSDUUR ==================== */}
              <h2>6. Welk merk past bij een Heerlense woning?</h2>

              <p>
                Onze monteurs in Parkstad plaatsen al jaren vooral Japanse A-merken omdat die bij koude
                winters (het kan hier in februari naar -8°C gaan) hun COP-waarde beter vasthouden. Voor
                Heerlen adviseren wij meestal:
              </p>

              <ul>
                <li>
                  <strong>Daikin Perfera / Emura</strong> — compromisloze COP bij lage buitentemperaturen,
                  slanke binnenunit past ook in kleinere Meezenbroekse kamers.
                </li>
                <li>
                  <strong>Toshiba Shorai / Haori</strong> — wat gunstiger in aanschaf, goede prestaties,
                  stille buitenunit voor kleine achtertuinen.
                </li>
                <li>
                  <strong>Mitsubishi Electric MSZ-LN</strong> — premium optie voor vrijstaande woningen
                  in Welten, langere levensduur gedemonstreerd.
                </li>
              </ul>

              <p>
                Let op de garantie en levensduur — een correct geïnstalleerde premium-airco gaat{' '}
                <Link to="/blog/airco-levensduur-wanneer-vervangen" className="text-blue-600 hover:underline">
                  vaak 15–20 jaar mee
                </Link>. Een uitgebreide vergelijking leest u in{' '}
                <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                  Beste airco merken 2026
                </Link>.
              </p>

              {/* ==================== SECTION 7: CORPORATIE ==================== */}
              <h2>7. Corporatie-woning: mag ik airco laten plaatsen?</h2>

              <p>
                Een groot deel van Parkstad bestaat uit corporatie-woningen. Van huurders krijgen we
                wekelijks de vraag: "mag ik zomaar een airco laten plaatsen?" Het korte antwoord:
                <strong> ja, mits u schriftelijke toestemming krijgt van uw corporatie</strong>. Dat is
                echt een serieus punt — zonder toestemming riskeert u dat bij het einde van de huur de
                corporatie eist dat u alles weer verwijdert op eigen kosten.
              </p>

              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r my-6">
                <h4 className="font-bold text-blue-900 mb-2">Stappenplan voor huurders in Heerlen</h4>
                <ol className="text-sm text-gray-700 space-y-2 mb-0">
                  <li>
                    <strong>1. Check uw huurovereenkomst</strong> — zoek op "zelf aangebrachte
                    voorzieningen" (ZAV). Meeste corporaties in Limburg accepteren airco's mits
                    procedureel aangevraagd.
                  </li>
                  <li>
                    <strong>2. Vraag technisch advies aan</strong> — wij leveren een technisch dossier
                    (merk, vermogen, plaatsing buitenunit, geluidsniveau dB, terugplaatsings-scenario).
                  </li>
                  <li>
                    <strong>3. Dien ZAV-aanvraag in</strong> — bij uw corporatie. Doorlooptijd meestal
                    4–8 weken.
                  </li>
                  <li>
                    <strong>4. Specificeer "overname"</strong> — onderhandel of de corporatie de
                    installatie overneemt bij vertrek (scheelt herstelkosten).
                  </li>
                  <li>
                    <strong>5. Pas daarna installatie plannen</strong> — begin nooit zonder
                    schriftelijke goedkeuring.
                  </li>
                </ol>
              </div>

              <p>
                Veel Heerlense corporaties zijn de afgelopen jaren soepeler geworden over airco's,
                vooral omdat ze passen in hun eigen verduurzamingsdoelen. Onze monteurs hebben
                meermaals ZAV-aanvragen voor klanten succesvol helpen begeleiden.
              </p>

              {/* ==================== SECTION 8: SNELHEID ==================== */}
              <h2>8. Van inmeting tot installatie: de Parkstad-tijdlijn</h2>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 1</div>
                  <h4 className="font-bold mb-2">Gratis inmeting in Heerlen</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Onze monteur komt bij u thuis in Parkstad, meet de ruimtes, beoordeelt isolatie en
                    elektragroepen, en bespreekt de optimale plaatsing van de buitenunit. Duurt
                    30–45 minuten.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 2–3</div>
                  <h4 className="font-bold mb-2">Offerte op maat</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Binnen 48 uur krijgt u een vaste offerte met minimaal 2 merk-opties, transparante
                    kostenopbouw (incl. 21% BTW), en uw verwachte terugverdientijd via de energiebesparing.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Dag 4–14</div>
                  <h4 className="font-bold mb-2">Planning</h4>
                  <p className="text-sm text-gray-700 m-0">
                    In 2026 kunnen we in Parkstad doorgaans binnen 2 weken een installatie inplannen.
                    Voor corporatie-/VvE-trajecten reken op 6–8 weken extra voor toestemming.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Installatiedag</div>
                  <h4 className="font-bold mb-2">1 werkdag</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Standaard single-split wordt in 1 dag gemonteerd, getest en opgeleverd. U krijgt
                    een F-gassen-rapport en volledige oplevering.
                  </p>
                </div>
              </div>

              {/* ==================== CTA 3 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Klaar voor een offerte zonder gedoe?</h3>
                <p className="mb-4">
                  Wij werken in heel Heerlen, Hoensbroek, Kerkrade, Landgraaf, Brunssum en omliggende
                  Parkstad-gemeenten. F-gassen-gecertificeerd, vaste prijzen, gratis onderhoud
                  inbegrepen. Geen verrassingen achteraf.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Plan gratis inmeting Parkstad
                </Link>
              </div>

              {/* ==================== SECTION 9: VALKUILEN ==================== */}
              <h2>9. Veelvoorkomende valkuilen bij offerte-vergelijken in Heerlen</h2>

              <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r my-6">
                <h4 className="font-bold text-amber-900 mb-3">Wat wij klanten in Parkstad achteraf horen</h4>
                <ul className="text-sm text-gray-700 space-y-2 mb-0">
                  <li>
                    <strong>"De goedkoopste online offerte had geen F-gassen-installateur"</strong> —
                    illegaal en boetes tot €5.000. Vraag altijd naar het STEK-nummer.
                  </li>
                  <li>
                    <strong>"Ik vergat dat ik een corporatie-woning huur"</strong> — zonder ZAV-toestemming
                    moet u alles terugbrengen bij verhuizing.
                  </li>
                  <li>
                    <strong>"Te klein vermogen gekocht"</strong> — jaren-70 rijtjeshuis met 2,5 kW in
                    de woonkamer is onderbedrade. Draait continu op vol vermogen en koelt slecht.
                  </li>
                  <li>
                    <strong>"Geen offerte op maat, alleen een online prijscalculator"</strong> —
                    Parkstad-woningen variëren te veel voor automatische prijsbepaling. Een serieuze
                    offerte vereist een bezoek.
                  </li>
                  <li>
                    <strong>"Geen isolatie-combi gepakt"</strong> — €500–€1.200 aan extra subsidie
                    misgelopen door niet te combineren.
                  </li>
                </ul>
              </div>

              {/* ==================== FAQ ==================== */}
              <h2>10. Veelgestelde vragen</h2>

              <h3>Wat kost een airco-offerte in Heerlen?</h3>
              <p>
                Niets — wij rekenen geen voorrijdkosten of inmeetkosten voor offertes in Parkstad. Onze
                monteur komt gratis langs, meet uw woning door en levert binnen 48 uur een vaste offerte
                aan. Verplichting tot afname is er niet.
              </p>

              <h3>Is airco in Heerlen goedkoper dan in Maastricht?</h3>
              <p>
                Gemiddeld 10–20% ja, omdat Heerlense woningen vaker standaard-typologie zijn (rijtjeshuizen
                zonder monumenten­status). Maastrichtse binnenstad vraagt vergunningstrajecten en vaak
                complexere installaties. Voor een uitgebreide vergelijking zie{' '}
                <Link to="/blog/airco-maastricht-complete-gids-2026" className="text-blue-600 hover:underline">
                  Airco Maastricht complete gids 2026
                </Link>.
              </p>

              <h3>Kan ik als huurder in een corporatie-woning airco laten plaatsen?</h3>
              <p>
                Ja, met schriftelijke toestemming van uw corporatie (ZAV-aanvraag). Wij helpen met het
                technisch dossier. Reken op 4–8 weken wachttijd voor akkoord. Nooit beginnen zonder
                goedkeuring — risico op terugplaatsings-kosten bij vertrek.
              </p>

              <h3>Hoelang duurt van offerte tot installatie in Heerlen?</h3>
              <p>
                Bij standaard-situaties: 2 weken gemiddeld. ZAV-trajecten bij corporatie-woningen of
                VvE-afstemming voor appartementen: reken op 6–10 weken totaal.
              </p>

              {/* ==================== PILLAR LINK ==================== */}
              <div className="not-prose bg-blue-50 border border-blue-200 p-5 rounded-lg my-8">
                <p className="text-gray-800 mb-0">
                  <strong>Bredere offerte-checklist zoeken?</strong> Voor algemene offerte-checklist, zie
                  onze{' '}
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline font-semibold">
                    volledige airco offerte gids voor Limburg
                  </Link>
                  {' '}— met provinciale prijsbenchmarks, F-gassen-verificatie en contract-punten die
                  verder gaan dan alleen Heerlen.
                </p>
              </div>

              {/* ==================== CTA 4 FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Vraag nu uw Heerlen-offerte aan</h3>
                <p className="mb-4">
                  Binnen 48 uur weet u exact wat een airco voor úw Parkstad-woning kost — de nette prijs
                  incl. 21% BTW en uw verwachte terugverdientijd. Geen verzonnen subsidies, geen
                  verkooppraatjes, geen verplichtingen.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start gratis offerte aanvraag
                </Link>
              </div>

              {/* ==================== RELATED ==================== */}
              <div className="not-prose bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">🔗 Andere Limburgse offerte-gidsen</h3>
                <ul className="space-y-2 text-sm">
                  <li>➤ <Link to="/blog/airco-offerte-maastricht" className="text-blue-600 hover:underline font-medium">Airco offerte Maastricht</Link> — wijk-specifieke prijzen + monumenten-advies</li>
                  <li>➤ <Link to="/blog/airco-offerte-sittard" className="text-blue-600 hover:underline font-medium">Airco offerte Sittard</Link> — Westelijke Mijnstreek + nieuwbouw</li>
                  <li>➤ <Link to="/blog/airco-offerte-aanvragen-checklist" className="text-blue-600 hover:underline font-medium">12-punts offerte-checklist</Link> — wat moet in elke offerte staan?</li>
                  <li>➤ <Link to="/blog/waarom-verschillen-airco-offertes" className="text-blue-600 hover:underline font-medium">Waarom verschillen offertes?</Link> — aggregator-marges ontleed</li>
                </ul>
              </div>

              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                    Airco offerte Limburg — de volledige provinciale gids
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                    Airco subsidie 2026 Limburg — wanneer wel, wanneer niet
                  </Link>
                </li>
                <li>
                  <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                    Beste airco merken 2026 — onze monteurs in de praktijk
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-levensduur-wanneer-vervangen" className="text-blue-600 hover:underline">
                    Airco levensduur: wanneer vervangen?
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-maastricht-complete-gids-2026" className="text-blue-600 hover:underline">
                    Airco Maastricht complete gids 2026
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
