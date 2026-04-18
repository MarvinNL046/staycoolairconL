import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function MultisplitAircoOfferteWanneerRendabel() {
  return (
    <>
      <MetaTags
        title="Multisplit airco offerte: wanneer wel, wanneer beter losse single splits?"
        description="Vanaf welk aantal units is een multisplit airco goedkoper dan meerdere single splits? Vergelijking op prijs, onderhoud, storingsrisico en flexibiliteit. Met break-even analyse en praktijkvoorbeelden."
        keywords="multisplit airco offerte, multisplit vs single split, multisplit kosten, multi split airco prijzen, multisplit rendabel, multisplit of losse units"
        canonicalUrl="https://staycoolairco.nl/blog/multisplit-airco-offerte-wanneer-rendabel"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Multisplit airco offerte: wanneer wel, wanneer beter losse single splits?",
          description: "Analyse wanneer een multisplit systeem economisch rendabel is ten opzichte van meerdere losse single splits. Break-even analyse, technische voor- en nadelen, storingsrisico en praktijkvoorbeelden uit Limburg.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/multisplit-airco-offerte-wanneer-rendabel.webp"
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
              { label: 'Multisplit offerte rendabel?' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>11 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Offerte &amp; Prijzen</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Multisplit airco offerte: wanneer wel, wanneer beter losse units?
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Korte stelregel uit de praktijk: <strong>bij 2 te koelen ruimtes zijn twee losse single splits
                meestal voordeliger</strong>, bij <strong>3 of meer ruimtes wordt een multisplit-systeem vaak
                economisch aantrekkelijker</strong>. De werkelijke keuze hangt af van leidinglengte, gevelbeeld,
                gebruiksfrequentie en hoe erg je een single point of failure vindt. Hieronder de cijfers, de
                technische voor- en nadelen en een break-even analyse — zonder marketingpraat.
              </p>
            </header>

            <figure className="mb-8">
              <img
                src="/images/blog/multisplit-airco-offerte-wanneer-rendabel.webp"
                alt="Multisplit airco buitenunit met meerdere binnenunits — wanneer is het rendabel?"
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Eén buitenunit, meerdere binnendelen: slim of een risico? De afweging hangt af van het aantal ruimtes en het gebruik.
              </figcaption>
            </figure>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS TABLE ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Het belangrijkste in één overzicht</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Vraag</th>
                      <th className="text-left py-2 font-semibold">Antwoord</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Break-even multisplit vs single splits</td>
                      <td className="py-2">Vanaf 3 binnendelen meestal voordeliger</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Prijsrange multisplit 2 units</td>
                      <td className="py-2">€3.000 – €4.500 incl. installatie</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Prijsrange multisplit 3-4 units</td>
                      <td className="py-2">€4.500 – €7.500 incl. installatie</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Grootste nadeel multisplit</td>
                      <td className="py-2">Één buitenunit = single point of failure</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Grootste voordeel multisplit</td>
                      <td className="py-2">Slechts 1 gevelunit, minder gevelwerk</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Beste keuze voor 2-kamer appartement</td>
                      <td className="py-2">Meestal 2 losse single splits</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Beste keuze voor 4-slaapkamer villa</td>
                      <td className="py-2">Multisplit met 1 zware buitenunit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== SECTION 1: WAT IS ==================== */}
              <h2>1. Wat is een multisplit airco precies?</h2>

              <p>
                Een <strong>multisplit systeem</strong> is één buitenunit die via gescheiden koelcircuits verbonden
                is met meerdere binnendelen (2 tot 5 of zelfs 8 stuks, afhankelijk van het merk). Elk binnendeel
                heeft een eigen thermostaat en kan onafhankelijk koelen of verwarmen — op voorwaarde dat alle
                binnendelen op datzelfde moment dezelfde <em>modus</em> draaien (allemaal koelen, of allemaal
                verwarmen).
              </p>

              <p>
                Ter vergelijking: bij <strong>losse single splits</strong> heeft elke kamer zijn eigen buitenunit
                én eigen binnenunit. Dat is technisch eenvoudiger en robuuster, maar kost meer gevelwerk en meer
                installatietijd. Enkele kernpunten om dit in je hoofd te hebben:
              </p>

              <ul>
                <li><strong>Multisplit</strong>: 1 buitenunit + 2-5 binnendelen via aparte koelleidingen.</li>
                <li><strong>Single split</strong>: 1 buitenunit + 1 binnendeel (per ruimte).</li>
                <li><strong>Simultaan koelen én verwarmen</strong> in verschillende kamers kan bij standaard multisplits <em>niet</em> — dat vraagt een duurder VRF-systeem.</li>
                <li><strong>Capaciteit</strong> van de buitenunit is vrijwel altijd kleiner dan de som van de binnendelen (typisch 70-85%), op basis van gelijktijdigheid.</li>
              </ul>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Twijfelt u tussen multisplit of losse units?</h3>
                <p className="mb-4">
                  Onze monteurs komen gratis langs, bekijken gevelmogelijkheden, leidingtrajecten en uw
                  gebruikspatroon. U krijgt <em>beide</em> scenario's doorgerekend zodat u op cijfers kiest,
                  niet op gokwerk.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag vergelijkende offerte aan
                </Link>
              </div>

              {/* ==================== SECTION 2: VERGELIJKINGSTABEL ==================== */}
              <h2>2. Vergelijkingstabel: multisplit vs. meerdere single splits</h2>

              <p>
                Hieronder de acht criteria waar onze monteurs in de praktijk naar kijken als ze klanten adviseren.
                Geen enkel criterium is op zichzelf doorslaggevend — het is de combinatie die de keuze bepaalt.
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Criterium</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Multisplit</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Meerdere single splits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Aanschafprijs 2 units</strong></td>
                      <td className="border border-gray-300 px-4 py-2">€3.000 – €4.500</td>
                      <td className="border border-gray-300 px-4 py-2">€2.800 – €4.200 (winnaar, kleine marge)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Aanschafprijs 3-4 units</strong></td>
                      <td className="border border-gray-300 px-4 py-2">€4.500 – €7.500 (winnaar)</td>
                      <td className="border border-gray-300 px-4 py-2">€5.400 – €8.800</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Aantal buitenunits op gevel</strong></td>
                      <td className="border border-gray-300 px-4 py-2">1 (winnaar qua esthetiek)</td>
                      <td className="border border-gray-300 px-4 py-2">2-4 stuks verspreid</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Gelijktijdig koelen + verwarmen</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Niet mogelijk (standaard)</td>
                      <td className="border border-gray-300 px-4 py-2">Wel mogelijk (winnaar)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Energie-efficiëntie bij deelbelasting</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Goed als meerdere units draaien; minder efficiënt met maar 1 actief binnendeel</td>
                      <td className="border border-gray-300 px-4 py-2">Elke unit optimaal voor zijn eigen kamer (winnaar bij sporadisch gebruik)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Storingsrisico / systeemfalen</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Buitenunit stuk = alles eruit</td>
                      <td className="border border-gray-300 px-4 py-2">Eén unit stuk, rest werkt (winnaar)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Onderhoudskosten per jaar</strong></td>
                      <td className="border border-gray-300 px-4 py-2">€130 – €180 (1 buitenunit + alle binnendelen)</td>
                      <td className="border border-gray-300 px-4 py-2">€85 – €120 per unit × aantal</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Installatietijd</strong></td>
                      <td className="border border-gray-300 px-4 py-2">1,5 – 2 dagen (winnaar bij 3+)</td>
                      <td className="border border-gray-300 px-4 py-2">Halve dag per unit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Let op: de exacte getallen variëren per merk, moeilijkheidsgraad van de installatie en leidinglengte.
                Zie ook onze <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                airco offerte gids voor Limburg</Link> voor hoe je deze posten herkent in een offerte.
              </p>

              {/* ==================== SECTION 3: BREAK-EVEN ==================== */}
              <h2>3. Break-even analyse: vanaf welk aantal units wordt multisplit rendabel?</h2>

              <p>
                De break-even wordt vrijwel volledig gedreven door één post: <strong>de buitenunit</strong>. Een
                losse buitenunit kost aan onderdelen en installatie ongeveer €700-€1.100 per stuk. Elke buitenunit
                die je uitspaart door over te stappen op multisplit, bespaart in ruwe cijfers €500-€800 (want een
                multisplit-buitenunit is wel duurder dan een single-split-buitenunit).
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Aantal ruimtes</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Single splits (range)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Multisplit (range)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Voordeel multisplit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2 ruimtes</td>
                      <td className="border border-gray-300 px-4 py-2">€2.800 – €4.200</td>
                      <td className="border border-gray-300 px-4 py-2">€3.000 – €4.500</td>
                      <td className="border border-gray-300 px-4 py-2 text-red-700">Meestal géén (−€100 tot −€400)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">3 ruimtes</td>
                      <td className="border border-gray-300 px-4 py-2">€4.100 – €6.400</td>
                      <td className="border border-gray-300 px-4 py-2">€4.500 – €6.200</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-700">Beperkt (+€200 tot +€400)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">4 ruimtes</td>
                      <td className="border border-gray-300 px-4 py-2">€5.400 – €8.800</td>
                      <td className="border border-gray-300 px-4 py-2">€5.200 – €7.500</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-700">Duidelijk (+€800 tot +€1.300)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">5 ruimtes</td>
                      <td className="border border-gray-300 px-4 py-2">€6.700 – €11.000</td>
                      <td className="border border-gray-300 px-4 py-2">€6.000 – €8.900</td>
                      <td className="border border-gray-300 px-4 py-2 text-green-700">Groot (+€1.500 tot +€2.500)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Je ziet het omslagpunt ligt ongeveer bij <strong>3 binnendelen</strong>. Bij 2 ruimtes is
                multisplit in puur aankoopgeld nog net iets duurder; de meerprijs is dan enkel te rechtvaardigen
                vanuit esthetiek (één buitenunit) of gevelrestricties. Vanaf 4 binnendelen wordt het financiële
                verschil echt groot.
              </p>

              <p>
                Reken bij deze tabel echter ook <strong>onderhoudskosten op 10 jaar</strong> mee. Single splits
                kosten €85-€120 × aantal units × 10 jaar. Bij 4 single splits is dat €3.400-€4.800 onderhoud.
                Bij een multisplit: €130-€180 × 10 = €1.300-€1.800. Die €2.000+ aan lagere onderhoudskosten
                tikt aan en maakt multisplit bij 4+ units financieel sterker dan de tabel alleen al suggereert.
              </p>

              {/* ==================== SECTION 4: PRAKTIJKVOORBEELDEN ==================== */}
              <h2>4. Twee praktijkvoorbeelden uit Limburg</h2>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Voorbeeld A: 2-kamer appartement Maastricht</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Woonkamer (3,5 kW) + slaapkamer (2,5 kW). Bewoner werkt overdag thuis, slaapkamer-airco
                    wordt alleen 's zomers 's nachts gebruikt.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc list-inside mb-2">
                    <li>2× single split: ca. €3.400</li>
                    <li>Multisplit 2-port: ca. €3.600</li>
                  </ul>
                  <p className="text-sm font-bold text-blue-900">
                    Advies: 2× single splits. Bij overwegend gebruik van maar 1 binnendeel draait een
                    multisplit-buitenunit inefficiënt (lage deelbelasting). Ook: kamer-per-kamer vervangbaarheid.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 p-5 rounded-lg">
                  <h4 className="font-bold text-amber-900 mb-2">Voorbeeld B: 4-slaapkamer villa Valkenburg</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Ouderslaapkamer, 2 kinderkamers, studeerkamer. Allemaal 2,5 kW. Gevel beschermd dorpsgezicht:
                    max 1 buitenunit toegestaan.
                  </p>
                  <ul className="text-sm text-gray-700 list-disc list-inside mb-2">
                    <li>4× single split: ca. €6.800 (én gevelvergunning probleem)</li>
                    <li>Multisplit 4-port: ca. €5.900</li>
                  </ul>
                  <p className="text-sm font-bold text-amber-900">
                    Advies: multisplit. Niet alleen goedkoper (€900), maar ook de enige optie die voldoet aan
                    de gevelrestrictie. Extra voordeel: 1 jaarlijkse onderhoudsbeurt in plaats van 4.
                  </p>
                </div>
              </div>

              <p>
                Deze voorbeelden komen overeen met wat onze monteurs in{' '}
                <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link>,{' '}
                <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline">Heerlen</Link> en{' '}
                <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline">Sittard</Link> dagelijks
                zien. Het patroon is duidelijk: appartementen met 2 kamers komen vrijwel altijd beter uit met
                losse units, ruimere woningen vanaf 3-4 ruimtes kantelen naar multisplit.
              </p>

              {/* ==================== SECTION 5: STORINGSRISICO ==================== */}
              <h2>5. Het storing-risico: één buitenunit = single point of failure</h2>

              <p>
                Dit is het argument dat klanten het vaakst onderschatten. Bij een multisplit-systeem hangt
                <strong> het koel- of verwarmingscomfort van ál je kamers aan één buitenunit</strong>.
                Gaat de compressor kapot, valt er een elektronische print uit of stopt de ventilator — dan
                staat het hele huis zonder klimaat. Geen enkele kamer doet het nog.
              </p>

              <p>
                Bij losse single splits is dat anders: als één buitenunit uitvalt, werken de andere door.
                Je kunt nog slapen in een koele slaapkamer terwijl de monteur over 3 dagen de woonkamer-unit
                komt repareren. Dat is een fundamenteel verschil in <em>resilience</em> dat vooral telt als je:
              </p>

              <ul>
                <li>De airco gebruikt als <strong>hoofdverwarming</strong> (winter zonder warmte is een echt probleem).</li>
                <li>Een <strong>hittegevoelig familielid</strong> hebt (ouderen, chronische ziekte, hittegolf-risico).</li>
                <li>De airco gebruikt in een <strong>thuiswerk-situatie</strong> waarbij comfort gekoppeld is aan productiviteit.</li>
                <li>Afhankelijk bent van koeling voor <strong>serverruimtes of hobbyruimtes</strong> met elektronica.</li>
              </ul>

              <div className="not-prose bg-red-50 border-l-4 border-red-500 p-4 rounded-r my-6">
                <p className="text-sm text-gray-800 m-0">
                  <strong>In de praktijk:</strong> moderne multisplit-buitenunits zijn zeer betrouwbaar (5-10 jaar
                  zonder grote storing komt vaak voor). Maar <em>als</em> het misgaat, is de impact en de urgentie
                  veel groter. Reken op een levertijd van 3-10 werkdagen voor vervangingsonderdelen buiten het
                  hoogseizoen, tot 3 weken in juli/augustus.
                </p>
              </div>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Welke optie past bij uw woning?</h3>
                <p className="text-gray-700 mb-4">
                  Kiezen tussen multisplit en losse units is geen standaard-antwoord. Onze monteurs brengen
                  ter plekke leidinglengte, gevelopties, gebruiksprofiel en subsidiemogelijkheden in kaart —
                  en leveren een offerte met <strong>beide varianten doorgerekend</strong>, zodat u zelf kunt
                  vergelijken.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Plan gratis inmeetafspraak in
                </Link>
              </div>

              {/* ==================== SECTION 6: INSTALLATIECOMPLEXITEIT ==================== */}
              <h2>6. Installatiecomplexiteit en arbeidsuren</h2>

              <p>
                Multisplit-installaties zijn technisch <em>complexer</em> maar vaak <em>korter in doorlooptijd</em>
                dan 3-4 losse single splits achter elkaar. Enkele observaties uit onze eigen werkbonnen:
              </p>

              <ul>
                <li>
                  <strong>Single split</strong>: gemiddeld 4-6 uur per unit. 3 single splits = 2 werkdagen, verdeeld
                  over meerdere bezoeken om gevelwerk en stof te spreiden.
                </li>
                <li>
                  <strong>Multisplit met 3 binnendelen</strong>: gemiddeld 10-14 arbeidsuur totaal. Verdeeld over
                  1,5 dag — vaak op één lange bezoekdag plus 1 korte dag voor inbedrijfstelling.
                </li>
                <li>
                  <strong>Koelleidingen leggen</strong> is bij multisplit complexer: elke binnenunit krijgt een
                  eigen paar leidingen naar dezelfde buitenunit. Dat betekent 3-5 paar leidingen door dezelfde
                  leidinggoot — meer voorbereidingswerk, moeilijker aan te sluiten.
                </li>
                <li>
                  <strong>Foutgevoeligheid</strong>: een foutje in de verdeelklep of leiding-isolatie van één
                  binnenunit kan de prestatie van alle andere beïnvloeden. Vraag nadrukkelijk om{' '}
                  <strong>drukproef en stikstoftest per circuit</strong> in de offerte.
                </li>
              </ul>

              <h2>7. Welke woningtypes zijn ideaal voor welk systeem?</h2>

              <p>
                Snelle matrix op basis van woningtype en gebruikspatroon:
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Woningtype</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Aanbeveling</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Reden</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2-kamer appartement</td>
                      <td className="border border-gray-300 px-4 py-2">2× single split</td>
                      <td className="border border-gray-300 px-4 py-2">Kleinere prijs, afzonderlijke modus (koel/warm)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Rijwoning 3 slaapkamers + woonkamer</td>
                      <td className="border border-gray-300 px-4 py-2">Afhankelijk — offerte beide</td>
                      <td className="border border-gray-300 px-4 py-2">Grens-scenario, gevelplek buitenunits doorslaggevend</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2-onder-1-kap, 4+ ruimtes</td>
                      <td className="border border-gray-300 px-4 py-2">Multisplit</td>
                      <td className="border border-gray-300 px-4 py-2">Financieel voordeel + minder gevelwerk</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Villa met 4-5 slaapkamers</td>
                      <td className="border border-gray-300 px-4 py-2">Multisplit (5-port)</td>
                      <td className="border border-gray-300 px-4 py-2">Grootste besparing, 1 onderhoudscyclus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Monumentaal pand / beschermd dorpsgezicht</td>
                      <td className="border border-gray-300 px-4 py-2">Multisplit</td>
                      <td className="border border-gray-300 px-4 py-2">Vaak slechts 1 buitenunit toegestaan door vergunning</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Kantoor-aan-huis / zakelijk</td>
                      <td className="border border-gray-300 px-4 py-2">Single splits</td>
                      <td className="border border-gray-300 px-4 py-2">Kantoor moet werken als slaapkamer niet in gebruik is</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>8. Onderhoudskosten op de lange termijn</h2>

              <p>
                Een veel over het hoofd geziene factor. Bij <strong>jaarlijks preventief onderhoud</strong>{' '}
                (verplicht voor garantie bij vrijwel alle merken) zijn de kosten als volgt:
              </p>

              <ul>
                <li>
                  <strong>Single split onderhoud</strong>: €85-€120 per unit per jaar. Bij 4 units = €340-€480
                  per jaar, of €3.400-€4.800 over 10 jaar.
                </li>
                <li>
                  <strong>Multisplit onderhoud</strong>: €130-€180 per jaar voor de hele installatie (1
                  buitenunit + 4 binnendelen worden samen bijgehouden, omdat het dezelfde monteur-afspraak is).
                  Over 10 jaar: €1.300-€1.800.
                </li>
                <li>
                  <strong>Vervangingsonderdelen</strong>: omdat bij multisplit alles aan 1 buitenunit hangt, is
                  de vervangingskost bij einde levensduur meestal hoger (€1.200-€2.000 voor een zware multisplit-
                  buitenunit) dan bij een losse single-split buitenunit (€500-€800). Single splits laten zich
                  ook individueel vervangen, wat flexibeler is bij gefaseerde vernieuwing.
                </li>
              </ul>

              <p>
                Onze klanten bij StayCool krijgen standaard het{' '}
                <Link to="/gratis-onderhoud" className="text-blue-600 hover:underline">
                eerste jaar onderhoud gratis</Link>, los van of ze voor multisplit of single splits kiezen.
              </p>

              {/* ==================== SECTION 9: OFFERTERANGES ==================== */}
              <h2>9. Hoe zien multisplit-offerteprijzen er in 2026 uit?</h2>

              <p>
                Net als bij single splits geldt: de prijs varieert met merk, gevelcomplexiteit en of een
                aggregator tussen zit. De volgende ranges zijn representatief voor directe offertes van lokale
                installateurs in Limburg (incl. BTW, F-gassen, koelleidingen tot 5-6 m per circuit, eerste
                jaaronderhoud):
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Configuratie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Budgetrange</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Premium-range (Daikin / Mitsubishi)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2-port, 2× 2,5 kW</td>
                      <td className="border border-gray-300 px-4 py-2">€3.000 – €3.600</td>
                      <td className="border border-gray-300 px-4 py-2">€3.700 – €4.500</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">3-port, 2× 2,5 + 1× 3,5 kW</td>
                      <td className="border border-gray-300 px-4 py-2">€4.500 – €5.400</td>
                      <td className="border border-gray-300 px-4 py-2">€5.400 – €6.400</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">4-port, 3× 2,5 + 1× 3,5 kW</td>
                      <td className="border border-gray-300 px-4 py-2">€5.600 – €6.800</td>
                      <td className="border border-gray-300 px-4 py-2">€6.800 – €7.800</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">5-port, 4× 2,5 + 1× 5,0 kW</td>
                      <td className="border border-gray-300 px-4 py-2">€6.800 – €8.200</td>
                      <td className="border border-gray-300 px-4 py-2">€8.200 – €9.800</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Tip: vraag de offerte op met <strong>typenummer per binnendeel en buitenunit</strong>. Zonder
                model-specificatie is elke vergelijking onzinnig. Zie ook de tips in onze{' '}
                <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                merkenvergelijking 2026</Link> voor welke series goed werken in multi-configuratie.
              </p>

              {/* ==================== SECTION 10: ENERGIE ==================== */}
              <h2>10. Energieverbruik: vier binnendelen op één buitenunit</h2>

              <p>
                Er bestaat een hardnekkig misverstand dat multisplit altijd zuiniger is omdat er maar één
                buitenunit draait. <strong>Dat klopt alleen als meerdere binnendelen gelijktijdig in bedrijf
                zijn</strong>. Bij zeer lage deelbelasting (alleen 1 binnendeel van de 4 aan) moet de buitenunit
                relatief veel energie in zijn eigen minimum-draaien steken, wat de SCOP verlaagt.
              </p>

              <p>
                Voor huishoudens waar de airco meestal centraal wordt gebruikt (alle kamers op gelijke tijden,
                zoals verwarming in de winter) werkt multisplit prima en efficiënt. Bij zeer onregelmatig
                gebruik (alleen 's nachts 1 slaapkamer, rest uit) is een single split per kamer efficiënter.
                Voor een gedetailleerde kostenberekening per uur zie onze analyse{' '}
                <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">
                wat 1 uur airco draaien kost</Link>.
              </p>

              {/* ==================== SECTION 11: FAQ ==================== */}
              <h2>11. Veelgestelde vragen</h2>

              <h3>Kan een multisplit tegelijk koelen en verwarmen in verschillende kamers?</h3>
              <p>
                Bij standaard residentiële multisplits <strong>niet</strong>. Alle aangesloten binnendelen moeten
                tegelijk in koelmodus of tegelijk in verwarmingsmodus staan. Gelijktijdig koelen én verwarmen in
                verschillende kamers vereist een <em>VRF- of 3-pipe-systeem</em>, wat technisch en financieel
                een heel andere categorie is (meestal zakelijk).
              </p>

              <h3>Hoeveel binnendelen kan ik op één buitenunit aansluiten?</h3>
              <p>
                Dat hangt van het model af. Gangbare residentiële multisplits ondersteunen 2 tot 5 binnendelen.
                Premium-modellen van Daikin en Mitsubishi gaan tot 6-8 binnendelen. Regel van onze monteurs:
                de totale capaciteit van binnendelen mag 120-130% zijn van de buitenunit-capaciteit, afhankelijk
                van gelijktijdigheidsfactor.
              </p>

              <h3>Is een multisplit toekomstbestendig? Kan ik later een binnendeel bijplaatsen?</h3>
              <p>
                Beperkt. Je kunt alleen bijplaatsen als de buitenunit al vooringeplande poorten en reserve-
                capaciteit heeft. Wij adviseren standaard om <strong>bij aanleg een extra leidingtraject mee te
                trekken</strong> voor toekomstige uitbreiding — dat is vele malen goedkoper dan achteraf. Indien
                je nu al weet dat je over 2-3 jaar uitbreidt, koop dan direct een multisplit met 1 poort meer dan
                je nu nodig hebt.
              </p>

              <h3>Wat als één binnendeel kapotgaat — draaien de andere dan wel door?</h3>
              <p>
                Meestal wel. Als het defect alleen in het binnendeel zelf zit (bijvoorbeeld ventilator of
                elektronische print), kan dat binnendeel worden uitgeschakeld en blijven de andere functioneren.
                Ligt het probleem bij de <strong>buitenunit</strong> (compressor, printkaart, refrigerant-lek),
                dan staan alle binnendelen stil tot reparatie.
              </p>

              {/* ==================== LINK TO PILLAR ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r my-8">
                <p className="text-gray-800 m-0">
                  <strong>Voor algemene offerte-aspecten</strong> (checklist, aggregator-marges, subsidie, BTW)
                  zie onze{' '}
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline font-semibold">
                    airco offerte gids voor Limburg
                  </Link>
                  . Die gids is de pillar waar dit artikel op aansluit en behandelt de vragen die voor álle
                  airco-offertes relevant zijn.
                </p>
              </div>

              {/* ==================== CTA 3 (FINAL) ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Beide scenario's doorgerekend op uw situatie</h3>
                <p className="mb-4">
                  In plaats van gokken: laat een monteur van StayCool gratis langskomen en u krijgt twee
                  offertes — multisplit én losse single splits — met prijs, jaarlijks energieverbruik en
                  onderhoudskosten naast elkaar. Kies op cijfers, niet op intuïtie.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag vergelijkende offerte aan
                </Link>
              </div>

              {/* ==================== RELATED ==================== */}
              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                    Airco offerte Limburg 2026 — echte prijzen + vergelijkings-checklist (pillar)
                  </Link>
                </li>
                <li>
                  <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                    Beste airco merken 2026: wat onze monteurs in de praktijk zien
                  </Link>
                </li>
                <li>
                  <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">
                    Wat kost 1 uur airco draaien? Stroomkosten 2026 + rekenvoorbeelden
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
