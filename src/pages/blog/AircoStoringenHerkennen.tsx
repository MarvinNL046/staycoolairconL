import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoStoringenHerkennen() {
  return (
    <>
      <MetaTags
        title="Airco storingen herkennen: 10 meest voorkomende problemen 2026 | StayCool"
        description="Koelt uw airco niet, lekt water of geeft een error-code? Herken de 10 meest voorkomende airco-storingen, wat u zelf kunt doen en wanneer een monteur nodig is."
        keywords="airco storingen herkennen, hoe weet je dat je airco kapot is, aircoproblemen, airco error code, airco koelt niet, airco lekt water, airco reparatie kosten, airco monteur limburg"
        canonicalUrl="https://staycoolairco.nl/blog/airco-storingen-herkennen"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco storingen herkennen: 10 meest voorkomende problemen + wanneer monteur bellen",
          description: "Praktische diagnosegids voor airco-storingen: symptomen, oorzaken, error-codes per merk, reparatiekosten en wanneer u zelf aan de slag kunt versus een monteur inschakelt.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-storingen-herkennen.webp"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Hoe weet je dat je airco kapot is?",
            "answer": "De duidelijkste signalen: de airco koelt of verwarmt niet meer zoals voorheen, er komt water uit de binnenunit, u hoort nieuwe geluiden (tikken, zoemen, sissen), er verschijnt een error-code op het display, of het stroomverbruik stijgt ineens fors. Ruikt u brand- of chemische lucht — schakel de unit direct uit en bel een monteur."
            },
            {
            "question": "Wat zijn de meest voorkomende aircoproblemen?",
            "answer": "Uit onze service-data top-3: (1) verminderd koelvermogen door vieze filters of te laag koudemiddel, (2) waterlekkage door verstopte condensaatafvoer, en (3) vreemde geluiden door slijtage of losgekomen onderdelen. Daarna volgen error-codes door sensor-uitval en short cycling door verkeerd gedimensioneerd vermogen."
            },
            {
            "question": "Wat is het grootste nadeel van een aircosysteem?",
            "answer": "Er is niet één \"grootste\" nadeel — maar de meest onderschatte is de afhankelijkheid van jaarlijks onderhoud. In tegenstelling tot een CV-ketel kun je onderhoud niet jaren overslaan zonder rendementsverlies en storingen. Daarnaast: de aanvangsinvestering (€1.800+) en de strenger wordende F-gassen-regelgeving die toekomstige reparaties duurder kan..."
            },
            {
            "question": "Wanneer moet ik een monteur bellen in plaats van zelf te proberen?",
            "answer": "Bel altijd een monteur bij: werk aan het koelcircuit (F-gassen — wettelijk verplicht), elektrische reparaties, compressor-problemen, error-codes na een reset, brand- of chemische lucht en zichtbare ijs- of olie-sporen op de buitenunit. Zelf doen kan: filters schoonmaken, afvoer visueel checken, stekker reset, batterijen vervangen."
            },
            {
            "question": "Wat kost een airco-storing repareren gemiddeld?",
            "answer": "Een eenvoudige diagnose en reset kost €75–€180. Reiniging en condensaatafvoer-herstel €120–€280. F-gas bijvullen met leksporen €250–€600. Printplaat of compressor-reparatie €350–€1.200. Exacte prijs hangt af van merk, model, onderdelen-beschikbaarheid en regio. Vraag altijd eerst een diagnose en prijsopgave."
            },
            {
            "question": "Waarom koelt mijn airco niet meer?",
            "answer": "In 8 van de 10 gevallen: vervuilde filters of een te lage koudemiddel-vulling (klein lek). Andere mogelijke oorzaken: defecte thermostaat of sensor, bevroren verdamper door verstopte luchtstroom, compressor die niet meer op vol vermogen draait, of een dichtgeslibde buitenunit-warmtewisselaar. Begin altijd met filter uitspoelen en afvoer controle..."
            },
            {
            "question": "Wat betekenen de error-codes op mijn airco?",
            "answer": "Error-codes verschillen per merk (Daikin F3/A5, Mitsubishi E6, Toshiba F01, Panasonic H11, enz.) en duiden doorgaans op sensor-uitval, communicatiefouten tussen binnen- en buitenunit, drukbeveiligingen of temperatuur-afwijkingen. Zie onze tabel in sectie 2 voor algemene betekenis. Exacte diagnose en reparatie hoort bij een gecertificeerde monteu..."
            },
            {
            "question": "Moet ik mijn airco in de winter uitschakelen?",
            "answer": "Nee. Moderne airco's hebben een vorstbeveiliging die minimale stroom verbruikt (&lt; €3/jaar) en voorkomt dat het koelcircuit bevriest. Volledig uitzetten is alleen zinvol bij langdurige afwezigheid in combinatie met een service-beurt voor vorst."
            },
            {
            "question": "Hoe vaak moet ik filters schoonmaken?",
            "answer": "Elke 2 maanden bij normaal gebruik, elke maand als u huisdieren heeft of veel stof in de ruimte. Uitspoelen met lauw water + mild afwasmiddel, volledig laten drogen, terugplaatsen. Dit is de enkelvoudig beste storingspreventie die u zelf kunt doen."
            },
            {
            "question": "Storing of voorkomen? Wij helpen u verder.",
            "answer": "Of u nu een acute storing heeft of preventief een onderhoudscontract wilt: StayCool serviced dagelijks airco's in Maastricht, Heerlen, Sittard en omstreken. Bel ons, of vraag online een storingsmelding of onderhoudscontract aan."
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
              { label: 'Airco storingen herkennen' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>12 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Storingen & Reparatie</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco storingen herkennen: 10 meest voorkomende problemen + wanneer monteur bellen
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Een airco die ineens minder goed koelt, vreemde geluiden maakt of water lekt — in onze service-praktijk
                komt <strong>ruim 80% van de storingen voort uit achterstallig onderhoud</strong>: vieze filters, verstopte
                afvoer of vervuilde warmtewisselaars. De overige 20% vraagt specifieke actie van een gecertificeerde
                monteur. Hieronder leggen onze Limburgse monteurs rustig uit hoe u zelf de diagnose stelt, welke signalen
                u niet mag negeren en wanneer u beter direct contact opneemt.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS TABLE ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Symptoom-diagnose in één overzicht</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Symptoom</th>
                      <th className="text-left py-2 font-semibold">Meest waarschijnlijke oorzaak</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Airco koelt niet meer</td>
                      <td className="py-2">Vies filter, te weinig koudemiddel of defecte thermostaat</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Water lekt uit binnenunit</td>
                      <td className="py-2">Verstopte condensaatafvoer of scheve montage</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Vreemde geluiden (tikken, piepen)</td>
                      <td className="py-2">Losse ventilatorblad, slijtage lagers of trillend paneel</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Muffe geur bij aanzetten</td>
                      <td className="py-2">Schimmel op warmtewisselaar of vervuilde verdamper</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Error-code op display</td>
                      <td className="py-2">Sensor-uitval, communicatiefout of beveiligingsmodus</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Spoed-storing? StayCool monteurs bereikbaar in Limburg.</h3>
                <p className="mb-4">
                  Airco volledig uitgevallen, lekkage of brandlucht? Onze service-monteurs rukken in de regio Maastricht,
                  Heerlen, Sittard en omstreken uit voor acute storingen. Bel of mail — we plannen zo snel mogelijk in,
                  meestal binnen 24–48 uur.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Meld een storing aan
                </Link>
              </div>

              {/* ==================== SECTION 1: 10 PROBLEMS ==================== */}
              <h2>1. De 10 meest voorkomende aircoproblemen</h2>

              <p>
                Dit zijn de symptomen die wij in onze service-calls verreweg het vaakst zien. Per probleem benoemen
                we de meest waarschijnlijke oorzaken — in volgorde van "simpel" naar "vakman nodig".
              </p>

              <h3>1.1 Airco koelt niet of warmt niet meer</h3>
              <p>
                Het meest gemelde probleem. In onze ervaring ligt dit in 8 van de 10 gevallen aan drie oorzaken:
              </p>
              <ul>
                <li><strong>Vervuilde filters</strong> — de luchtstroom is zo beperkt dat de warmtewisselaar niet
                    genoeg lucht krijgt. Filters uitnemen en uitspoelen met lauw water lost dit vaak meteen op.</li>
                <li><strong>Te lage koudemiddeldruk (F-gas)</strong> — vaak door een klein lek op een koppeling of
                    leiding. Bijvullen en leksporen is wettelijk <em>uitsluitend</em> toegestaan voor
                    F-gassen-gecertificeerde monteurs.</li>
                <li><strong>Defecte thermostaat of sensor</strong> — de airco "denkt" dat de gewenste temperatuur al
                    bereikt is en moduleert terug.</li>
              </ul>

              <h3>1.2 Airco maakt vreemde geluiden</h3>
              <p>
                Een moderne inverter-airco hoort stiller te zijn dan een koelkast. Wij horen deze klachten:
              </p>
              <ul>
                <li><strong>Tikken of klapperen</strong> — vaak een losgekomen ventilatorblad of een klep die
                    niet meer soepel sluit.</li>
                <li><strong>Zoemend brommen uit buitenunit</strong> — kan wijzen op slijtage van compressor-lagers of
                    een veer die door trillingen is verschoven.</li>
                <li><strong>Piepen of fluiten</strong> — meestal een klein koudemiddel-lek, of lucht in het
                    koelcircuit na een ondeskundige installatie.</li>
                <li><strong>Resonantie / trillen</strong> — bevestigingsbeugels los, of rubber anti-trilblokken onder
                    de buitenunit versleten.</li>
              </ul>

              <h3>1.3 Airco lekt water</h3>
              <p>
                Waterdruppels uit de binnenunit zijn nooit normaal. Oorzaken in volgorde van frequentie:
              </p>
              <ul>
                <li><strong>Verstopte condensaatafvoer</strong> — slib, schimmel of insectennest in de afvoerslang.
                    Dit is met uitblazen of voorzichtig doorprikken te verhelpen.</li>
                <li><strong>Scheef gemonteerde binnenunit</strong> — het condenswater loopt niet naar de afvoer.
                    Verplaatsen/herpositioneren = monteurswerk.</li>
                <li><strong>Condensaatpomp defect</strong> — bij units in ruimtes zonder natuurlijk afschot.</li>
                <li><strong>Bevriezing van de verdamper</strong> — bij te weinig koudemiddel of een vies filter
                    bevriest de warmtewisselaar en loopt het smeltwater óver de afvoerbak.</li>
              </ul>

              <h3>1.4 Airco ruikt vreemd</h3>
              <p>
                Geuren vertellen veel over wat er mis is:
              </p>
              <ul>
                <li><strong>Muf / schimmel</strong> — vocht in combinatie met stof op de warmtewisselaar. Grondige
                    reiniging lost dit op.</li>
                <li><strong>Brandlucht</strong> — <em>direct uitschakelen</em>. Kan wijzen op doorgebrande
                    printplaat, motorwikkeling of een smeltende kabel. Nooit opnieuw inschakelen zonder diagnose.</li>
                <li><strong>Zoetige of chemische lucht</strong> — kan duiden op een koudemiddel-lek. Ruimte ventileren
                    en monteur bellen.</li>
              </ul>

              <h3>1.5 Error-codes op het display</h3>
              <p>
                Vrijwel elke moderne airco geeft bij een storing een letter-cijfercombinatie op de binnenunit of
                afstandsbediening. Deze codes zijn merk-specifiek — zie sectie 2 voor een overzicht. Belangrijk:
                <strong> noteer de exacte code voordat u de stekker eruit trekt</strong>, zodat de monteur gericht kan
                komen.
              </p>

              <h3>1.6 Buitenunit bevriest in de winter</h3>
              <p>
                Een dun laagje rijp op de lamellen is normaal — moderne systemen ontdooien zichzelf automatisch elke
                30–90 minuten. Zorgwekkend wordt het als:
              </p>
              <ul>
                <li>Er een dikke ijslaag over de volledige unit ligt die niet wegsmelt.</li>
                <li>De unit telkens in "defrost mode" blijft staan en niet meer verwarmt.</li>
                <li>Er ijs van de bovenzijde groeit (dan is de afvoer van smeltwater verstopt).</li>
              </ul>
              <p>
                Oorzaken: defecte 4-wegs-klep, uitgevallen sensor, te laag koudemiddel of een defecte ontdooicyclus.
                Alles monteurswerk.
              </p>

              <h3>1.7 Airco start helemaal niet</h3>
              <p>
                Voordat u denkt aan een grote reparatie, loop deze volgorde af:
              </p>
              <ul>
                <li>Batterijen van de afstandsbediening vervangen.</li>
                <li>Controleer de groep in de meterkast — springt de aardlek/automaat eruit?</li>
                <li>Reset via de aan/uit-knop op de binnenunit zelf (meestal achter het frontpaneel).</li>
                <li>Check of een beveiliging (overdruk, oververhitting) niet is ingetreden — vaak blinkt er dan een
                    LED in een bepaald patroon.</li>
              </ul>
              <p>
                Als alle bovenstaande in orde zijn en de unit blijft dood: printplaat of voeding defect. Monteur.
              </p>

              <h3>1.8 Airco schakelt steeds uit (short cycling)</h3>
              <p>
                De unit slaat aan, draait 2–5 minuten en stopt weer. Dit is niet alleen vervelend maar veroorzaakt
                extra slijtage aan de compressor. Oorzaken:
              </p>
              <ul>
                <li><strong>Te zwaar vermogen voor de ruimte</strong> — de setpoint is te snel bereikt.</li>
                <li><strong>Defecte temperatuursensor</strong> — geeft verkeerde metingen door.</li>
                <li><strong>Oververhittingsbeveiliging</strong> — bij vervuilde condensor of verstopte luchttoevoer.</li>
                <li><strong>Te laag koudemiddel</strong> — drukschakelaar grijpt in.</li>
              </ul>

              <h3>1.9 Hoger stroomverbruik dan voorheen</h3>
              <p>
                Als uw energierekening ineens 20–40% hoger is zonder dat u meer uren draait, is er iets structureel
                mis. Meestal:
              </p>
              <ul>
                <li>Vervuilde warmtewisselaars (binnen én buiten) — de unit moet harder werken voor hetzelfde resultaat.</li>
                <li>Koudemiddel onder optimaal niveau — COP zakt sterk.</li>
                <li>Slijtende compressor — oudere modellen (10+ jaar) verliezen geleidelijk rendement.</li>
              </ul>
              <p>
                Zie onze aparte gids over <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">
                wat 1 uur airco draaien kost in 2026</Link> om uw verbruik te vergelijken met gezonde referentiewaardes.
              </p>

              <h3>1.10 Minder luchtstroming dan gewend</h3>
              <p>
                Als er duidelijk minder lucht uit de binnenunit komt:
              </p>
              <ul>
                <li>Filters vervuild — meest voorkomende oorzaak (80% van de gevallen).</li>
                <li>Lamellen-motor defect (louvers staan niet meer open).</li>
                <li>Ventilatorwiel vuil of uit balans.</li>
                <li>Vervuiling op de verdamper die de doorstroming blokkeert.</li>
              </ul>

              {/* ==================== SECTION 2: ERROR CODES ==================== */}
              <h2>2. Error-codes — wat betekenen ze?</h2>

              <p>
                Elke fabrikant hanteert zijn eigen codering. De onderstaande tabel geeft de algemene <em>betekenis</em>
                {' '}van veelvoorkomende codes per merk. <strong>Dit is bewust geen reparatiehandleiding</strong>:
                de meeste oplossingen vereisen werk aan het koelcircuit, de printplaat of elektrische componenten en
                dat mag wettelijk alleen een F-gassen-gecertificeerde monteur doen.
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Merk</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Code</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Algemene betekenis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Daikin</strong></td>
                      <td className="border border-gray-300 px-4 py-2">A5</td>
                      <td className="border border-gray-300 px-4 py-2">Beveiliging hoge/lage druk ingeschakeld</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Daikin</strong></td>
                      <td className="border border-gray-300 px-4 py-2">F3</td>
                      <td className="border border-gray-300 px-4 py-2">Te hoge perstemperatuur compressor</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Daikin</strong></td>
                      <td className="border border-gray-300 px-4 py-2">U4 / UF</td>
                      <td className="border border-gray-300 px-4 py-2">Communicatiefout binnen- en buitenunit</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Mitsubishi Electric</strong></td>
                      <td className="border border-gray-300 px-4 py-2">E6</td>
                      <td className="border border-gray-300 px-4 py-2">Communicatiefout tussen units</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Mitsubishi Electric</strong></td>
                      <td className="border border-gray-300 px-4 py-2">P8</td>
                      <td className="border border-gray-300 px-4 py-2">Temperatuur-probleem bij pijpsensor</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Mitsubishi Heavy</strong></td>
                      <td className="border border-gray-300 px-4 py-2">E9</td>
                      <td className="border border-gray-300 px-4 py-2">Probleem met aflaat / condensaatpomp</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Toshiba</strong></td>
                      <td className="border border-gray-300 px-4 py-2">F01</td>
                      <td className="border border-gray-300 px-4 py-2">Sensorfout binnenunit warmtewisselaar</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Toshiba</strong></td>
                      <td className="border border-gray-300 px-4 py-2">F04</td>
                      <td className="border border-gray-300 px-4 py-2">Sensorfout buitenunit compressor</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Panasonic</strong></td>
                      <td className="border border-gray-300 px-4 py-2">H11</td>
                      <td className="border border-gray-300 px-4 py-2">Communicatie binnen-/buitenunit onderbroken</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Panasonic</strong></td>
                      <td className="border border-gray-300 px-4 py-2">F91</td>
                      <td className="border border-gray-300 px-4 py-2">Afwijking in koelcyclus (lage druk / lek)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>LG</strong></td>
                      <td className="border border-gray-300 px-4 py-2">CH05</td>
                      <td className="border border-gray-300 px-4 py-2">Communicatiefout</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Samsung</strong></td>
                      <td className="border border-gray-300 px-4 py-2">E101 / E102</td>
                      <td className="border border-gray-300 px-4 py-2">Installatie-/communicatieprobleem</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r my-6">
                <h4 className="font-bold text-amber-900 mb-2">Waarom geen fix-instructies per code?</h4>
                <p className="text-sm text-gray-700 m-0">
                  Veel "doe-het-zelf oplossingen" op internet adviseren om de unit te resetten door de stekker eruit te
                  trekken. Dat kan helpen bij een tijdelijke communicatiefout, maar bij een échte storing (druk,
                  compressor, koudemiddel) maskeert het alleen het probleem en kan de schade groter worden. De
                  F-gassen-verordening (EU 517/2014) verbiedt bovendien dat niet-gecertificeerden aan het koelcircuit
                  werken. Boetes lopen op tot €5.000.
                </p>
              </div>

              {/* ==================== SECTION 3: DIY VS MONTEUR ==================== */}
              <h2>3. Wanneer kan ik het zelf? Wanneer monteur bellen?</h2>

              <p>
                Een eerlijke beslissingsmatrix. Het doe-het-zelf-rijtje is bewust kort. Alles wat niet genoemd staat
                in de groene kolom, is monteurswerk.
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r">
                  <h4 className="font-bold text-green-900 mb-3">Dit mag u zelf doen</h4>
                  <ul className="text-sm text-gray-700 space-y-2 mb-0">
                    <li><strong>Filters uitnemen en uitspoelen</strong> met lauw water + mild afwasmiddel, laten drogen,
                        terugplaatsen. Eens per 2 maanden.</li>
                    <li><strong>Buitenunit lamellen voorzichtig afstoffen</strong> met een zachte borstel (unit uit!).</li>
                    <li><strong>Condensaatafvoer visueel checken</strong> — zichtbaar vuil verwijderen aan het
                        uiteinde buiten.</li>
                    <li><strong>Reset via aan/uit-knop</strong> of stekker 60 seconden eruit bij een eenmalige
                        communicatiefout.</li>
                    <li><strong>Afstandsbediening batterijen</strong> vervangen.</li>
                    <li><strong>Ruimte rond buitenunit vrijhouden</strong> (minimaal 30 cm lucht).</li>
                  </ul>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r">
                  <h4 className="font-bold text-red-900 mb-3">Altijd monteur (wettelijk verplicht)</h4>
                  <ul className="text-sm text-gray-700 space-y-2 mb-0">
                    <li><strong>Alles met koudemiddel / F-gas</strong> — bijvullen, leksporen, afpompen. Wettelijk
                        alleen toegestaan voor gecertificeerden.</li>
                    <li><strong>Compressor-reparatie of vervanging.</strong></li>
                    <li><strong>Elektrische reparaties</strong> — printplaat, sensors, bedrading, voedingen.</li>
                    <li><strong>4-wegs-klep of expansieventiel</strong> vervangen.</li>
                    <li><strong>Vaste leidingen en koppelingen</strong> aanpassen (risico op lek of verstopping).</li>
                    <li><strong>Verplaatsen of herbevestigen</strong> van binnen-/buitenunit.</li>
                    <li><strong>Brandlucht, verdacht vocht of sissen</strong> — niet meer inschakelen, direct
                        laten nakijken.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-600 italic">
                Let op: zelf aan het koelcircuit werken is niet alleen wettelijk verboden maar ook praktisch risicovol.
                Koudemiddel kan bij direct huidcontact ernstige vrieswonden geven en de druk in het systeem kan
                componenten bij ondeskundig openen laten "schieten".
              </p>

              {/* ==================== SECTION 4: COSTS ==================== */}
              <h2>4. Wat kost een reparatie ongeveer?</h2>

              <p>
                Exacte prijzen zijn lastig te noemen — het hangt af van voorrijkosten, onderdelen-beschikbaarheid en
                de aard van het probleem. Onderstaande ranges zijn onze praktijkervaring voor een gemiddelde
                enkelvoudige split-unit in de regio Limburg (2026, inclusief btw).
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Storing</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Indicatieve prijs</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Toelichting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Voorrijkosten + diagnose</td>
                      <td className="border border-gray-300 px-4 py-2">€75 – €180</td>
                      <td className="border border-gray-300 px-4 py-2">Eenvoudige reset of uitleesbare code</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Filter- & grondige reiniging</td>
                      <td className="border border-gray-300 px-4 py-2">€120 – €220</td>
                      <td className="border border-gray-300 px-4 py-2">Binnen- en buitenunit, chemisch schoonmaken</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Condensaatafvoer herstellen</td>
                      <td className="border border-gray-300 px-4 py-2">€150 – €280</td>
                      <td className="border border-gray-300 px-4 py-2">Doorspuiten, nieuwe slang of pomp</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">F-gas bijvullen + leksporen</td>
                      <td className="border border-gray-300 px-4 py-2">€250 – €600</td>
                      <td className="border border-gray-300 px-4 py-2">Inclusief lekzoeken en herstel koppeling</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Sensor / thermistor vervangen</td>
                      <td className="border border-gray-300 px-4 py-2">€180 – €380</td>
                      <td className="border border-gray-300 px-4 py-2">Onderdeel + arbeid, per component</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Printplaat vervangen</td>
                      <td className="border border-gray-300 px-4 py-2">€350 – €850</td>
                      <td className="border border-gray-300 px-4 py-2">Sterk afhankelijk van merk/model</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Compressor-reparatie / vervangen</td>
                      <td className="border border-gray-300 px-4 py-2">€400 – €1.200</td>
                      <td className="border border-gray-300 px-4 py-2">Vaak "break-even"-punt vs. nieuwe unit</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">4-wegs-klep vervangen</td>
                      <td className="border border-gray-300 px-4 py-2">€450 – €900</td>
                      <td className="border border-gray-300 px-4 py-2">Inclusief afpompen en hervullen</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Waarom deze ranges?</strong> Voorrij- en diagnosekosten verschillen per regio. Onderdelen-prijzen
                variëren sterk per merk (Daikin-compressor is fors duurder dan een Gree-compressor). En bij veel
                storingen wordt pas bij openmaken duidelijk wat écht nodig is. Een goede monteur geeft altijd eerst
                een diagnose en daarna een prijsopgave vóórdat de reparatie start.
              </p>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Voorkom de meeste storingen met jaarlijks onderhoud</h3>
                <p className="text-gray-700 mb-4">
                  Onze service-data laat zien: klanten met een vast onderhoudscontract hebben 70% minder storingsmeldingen.
                  Lees ons artikel <Link to="/blog/airco-onderhoud-limburg-belangrijk" className="text-blue-600 hover:underline">
                  waarom jaarlijks airco-onderhoud in Limburg essentieel is</Link> of plan direct een controle in.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Plan jaarlijks onderhoud
                </Link>
              </div>

              {/* ==================== SECTION 5: REPAIR VS REPLACE ==================== */}
              <h2>5. Wanneer is het niet meer de moeite om te repareren?</h2>

              <p>
                Soms is een reparatie technisch mogelijk, maar economisch niet meer verstandig. Onze monteurs hanteren
                deze vuistregels:
              </p>

              <ul>
                <li><strong>Airco ouder dan 12 jaar én reparatie &gt; 40% van nieuwprijs</strong> → vervangen aanraden.
                    Restlevensduur te kort voor terugverdienen.</li>
                <li><strong>Compressor-defect bij unit ouder dan 8 jaar</strong> → meestal vervangen. Compressor is
                    het duurste onderdeel; andere componenten volgen vaak binnen enkele jaren.</li>
                <li><strong>Oud koudemiddel (R22 of R410A in stervende systemen)</strong> → R22 is sinds 2015 niet
                    meer legaal te bijvullen; R410A wordt uitgefaseerd. Overstappen op R32-systemen is vaak goedkoper
                    op termijn.</li>
                <li><strong>Meerdere gelijktijdige defecten</strong> (bijv. printplaat + sensor + lek) → de
                    "een-voor-een"-reparatie loopt snel op tot nieuwprijs.</li>
                <li><strong>Energielabel lager dan A++</strong> → moderne A+++ units besparen zoveel stroom dat de
                    investering in 6–9 jaar terugverdient.</li>
              </ul>

              <p>
                Meer hierover leest u binnenkort in onze aparte gids <Link to="/blog/airco-levensduur-wanneer-vervangen" className="text-blue-600 hover:underline">
                airco-levensduur: wanneer vervangen?</Link> — met concrete beslismatrix per leeftijd en merk.
              </p>

              {/* ==================== SECTION 6: PREVENTION ==================== */}
              <h2>6. Preventie — voorkom 80% van storingen</h2>

              <p>
                Onze service-statistieken zijn helder: wie onderstaande zes punten volgt, voorkomt het overgrote deel
                van storingen die wij doorgaans zien.
              </p>

              <div className="not-prose space-y-4 my-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">1. Filters elke 2 maanden uitspoelen</h4>
                  <p className="text-sm text-gray-700 m-0">
                    De belangrijkste preventieve actie. Vies filter = minder koeling, hoger verbruik, snellere slijtage.
                    Kosten: €0. Tijd: 10 minuten.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">2. Jaarlijks professioneel onderhoud</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Buitenunit chemisch reinigen, drukcontrole, elektrische check, condensaatafvoer doorspuiten.
                    Verlengt levensduur met gemiddeld 3–5 jaar.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">3. Buitenunit vrijhouden</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Minimaal 30 cm rond de unit geen bladeren, takken of schuttingen. Een unit tegen een muur gedrukt
                    verbruikt 10–15% meer stroom.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">4. In winter niet volledig uitschakelen</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Laat de vorstbeveiliging staan. Dit voorkomt condensatie en bevriezing van het koelcircuit. Verbruik
                    standby &lt; €3 per jaar.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">5. Setpoint rustig kiezen</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Extreme setpoints (18°C koelen of 26°C verwarmen) laten de compressor uren op maximaal draaien.
                    Comfortabele waardes (22–24°C koelen, 19–21°C verwarmen) sparen de machine.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">6. Afstandsbediening-instellingen controleren</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Veel "storingen" blijken verkeerde modus (dry/fan i.p.v. cool), verkeerde setpoint of een
                    kindersloten-toggle. Check altijd eerst het display.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION 7: DISADVANTAGES ==================== */}
              <h2>7. Grootste nadelen van een aircosysteem (eerlijk)</h2>

              <p>
                Wij verkopen en installeren airco's — maar we hebben er geen belang bij om onrealistische verwachtingen
                te scheppen. Vijf echte nadelen die u moet kennen:
              </p>

              <ol>
                <li>
                  <strong>Stroomverbruik bij verkeerde design-keuzes.</strong> Een te grote of te kleine unit draait
                  structureel inefficiënt. Een airco die "gewoon maar neergezet" wordt zonder capaciteitsberekening kan
                  20–40% meer verbruiken dan nodig. Daarom altijd eerst een warmteverlies-berekening.
                </li>
                <li>
                  <strong>Jaarlijks onderhoud is niet optioneel.</strong> In tegenstelling tot een CV-ketel die je jaren
                  kunt vergeten, eist een airco periodieke reiniging en druk-controle. Reken op €100–€180 per jaar voor
                  een enkelvoudige split. Skip je dit, dan zak je rendement en loop je reparatiekosten op.
                </li>
                <li>
                  <strong>F-gassen-regulering wordt strenger.</strong> EU-verordening faseren HFK-koudemiddelen geleidelijk
                  uit. R32 (huidige standaard) is nu courant, maar zal over 10–15 jaar ook onder druk komen. Dit
                  betekent: reparaties kunnen op langere termijn duurder worden en u bent voor service-werk altijd
                  afhankelijk van gecertificeerde monteurs.
                </li>
                <li>
                  <strong>Aanvangsinvestering is hoog.</strong> Een goede enkelvoudige split kost inclusief installatie
                  €1.800 tot €3.200. Multisplit-systemen €4.000+. Dit betaalt zich terug via lagere stookkosten en
                  comfort, maar is een hogere drempel dan een radiator.
                </li>
                <li>
                  <strong>Geluid van de buitenunit.</strong> Moderne premium-units zijn stil (38–48 dB), maar niet
                  onhoorbaar. In compacte woonwijken met kleine tuinen kan dit klachten opleveren. Plaats altijd met
                  aandacht voor buren (minimaal 2m tot erfgrens is ons advies, ook als vergunning lagere eisen stelt).
                </li>
              </ol>

              <p>
                <strong>StayCool's benadering:</strong> wij berekenen vooraf of een airco écht de juiste oplossing is
                voor uw situatie. Bij een goed geïsoleerde nieuwbouw: bijna altijd ja. Bij een slecht geïsoleerd
                vooroorlogs pand zonder dakisolatie: we adviseren eerst isolatie aan te pakken. Eerlijkheid boven
                omzet.
              </p>

              {/* ==================== SECTION 8: FAQ ==================== */}
              <h2>8. Veelgestelde vragen</h2>

              <h3>Hoe weet je dat je airco kapot is?</h3>
              <p>
                De duidelijkste signalen: de airco koelt of verwarmt niet meer zoals voorheen, er komt water uit de
                binnenunit, u hoort nieuwe geluiden (tikken, zoemen, sissen), er verschijnt een error-code op het
                display, of het stroomverbruik stijgt ineens fors. Ruikt u brand- of chemische lucht — schakel de unit
                direct uit en bel een monteur.
              </p>

              <h3>Wat zijn de meest voorkomende aircoproblemen?</h3>
              <p>
                Uit onze service-data top-3: (1) verminderd koelvermogen door vieze filters of te laag koudemiddel,
                (2) waterlekkage door verstopte condensaatafvoer, en (3) vreemde geluiden door slijtage of losgekomen
                onderdelen. Daarna volgen error-codes door sensor-uitval en short cycling door verkeerd gedimensioneerd
                vermogen.
              </p>

              <h3>Wat is het grootste nadeel van een aircosysteem?</h3>
              <p>
                Er is niet één "grootste" nadeel — maar de meest onderschatte is de <strong>afhankelijkheid van jaarlijks
                onderhoud</strong>. In tegenstelling tot een CV-ketel kun je onderhoud niet jaren overslaan zonder
                rendementsverlies en storingen. Daarnaast: de aanvangsinvestering (€1.800+) en de strenger wordende
                F-gassen-regelgeving die toekomstige reparaties duurder kan maken.
              </p>

              <h3>Wanneer moet ik een monteur bellen in plaats van zelf te proberen?</h3>
              <p>
                Bel altijd een monteur bij: werk aan het koelcircuit (F-gassen — wettelijk verplicht), elektrische
                reparaties, compressor-problemen, error-codes na een reset, brand- of chemische lucht en zichtbare ijs-
                of olie-sporen op de buitenunit. Zelf doen kan: filters schoonmaken, afvoer visueel checken, stekker
                reset, batterijen vervangen.
              </p>

              <h3>Wat kost een airco-storing repareren gemiddeld?</h3>
              <p>
                Een eenvoudige diagnose en reset kost €75–€180. Reiniging en condensaatafvoer-herstel €120–€280.
                F-gas bijvullen met leksporen €250–€600. Printplaat of compressor-reparatie €350–€1.200. Exacte prijs
                hangt af van merk, model, onderdelen-beschikbaarheid en regio. Vraag altijd eerst een diagnose en prijsopgave.
              </p>

              <h3>Waarom koelt mijn airco niet meer?</h3>
              <p>
                In 8 van de 10 gevallen: vervuilde filters of een te lage koudemiddel-vulling (klein lek). Andere
                mogelijke oorzaken: defecte thermostaat of sensor, bevroren verdamper door verstopte luchtstroom,
                compressor die niet meer op vol vermogen draait, of een dichtgeslibde buitenunit-warmtewisselaar.
                Begin altijd met filter uitspoelen en afvoer controleren — helpt dit niet, dan monteur.
              </p>

              <h3>Wat betekenen de error-codes op mijn airco?</h3>
              <p>
                Error-codes verschillen per merk (Daikin F3/A5, Mitsubishi E6, Toshiba F01, Panasonic H11, enz.) en
                duiden doorgaans op sensor-uitval, communicatiefouten tussen binnen- en buitenunit, drukbeveiligingen
                of temperatuur-afwijkingen. Zie onze tabel in sectie 2 voor algemene betekenis. Exacte diagnose en
                reparatie hoort bij een gecertificeerde monteur — niet bij YouTube-handleidingen.
              </p>

              <h3>Moet ik mijn airco in de winter uitschakelen?</h3>
              <p>
                Nee. Moderne airco's hebben een vorstbeveiliging die minimale stroom verbruikt (&lt; €3/jaar) en
                voorkomt dat het koelcircuit bevriest. Volledig uitzetten is alleen zinvol bij langdurige afwezigheid
                in combinatie met een service-beurt voor vorst.
              </p>

              <h3>Hoe vaak moet ik filters schoonmaken?</h3>
              <p>
                Elke 2 maanden bij normaal gebruik, elke maand als u huisdieren heeft of veel stof in de ruimte.
                Uitspoelen met lauw water + mild afwasmiddel, volledig laten drogen, terugplaatsen. Dit is de
                enkelvoudig beste storingspreventie die u zelf kunt doen.
              </p>

              {/* ==================== CTA 3 FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Storing of voorkomen? Wij helpen u verder.</h3>
                <p className="mb-4">
                  Of u nu een acute storing heeft of preventief een onderhoudscontract wilt: StayCool serviced dagelijks
                  airco's in <Link to="/werkgebied/maastricht" className="text-white underline hover:no-underline">Maastricht</Link>,
                  {' '}<Link to="/werkgebied/heerlen" className="text-white underline hover:no-underline">Heerlen</Link>,
                  {' '}<Link to="/werkgebied/sittard" className="text-white underline hover:no-underline">Sittard</Link>
                  {' '}en omstreken. Bel ons, of vraag online een storingsmelding of onderhoudscontract aan.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Meld storing of plan onderhoud
                </Link>
              </div>

              {/* ==================== RELATED ==================== */}
              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/blog/airco-onderhoud-limburg-belangrijk" className="text-blue-600 hover:underline">
                    Waarom jaarlijks airco-onderhoud in Limburg essentieel is
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
                <li>
                  <Link to="/blog/airco-levensduur-wanneer-vervangen" className="text-blue-600 hover:underline">
                    Airco-levensduur: wanneer is vervangen slimmer dan repareren?
                  </Link>
                </li>
              </ul>

              <p className="text-xs text-gray-500 mt-8 italic">
                Deze diagnose-gids is gebaseerd op StayCool's eigen service-data 2019–2026 in de Limburgse regio.
                Genoemde prijs-ranges zijn indicatief en kunnen afwijken afhankelijk van merk, model, regio en
                beschikbaarheid van onderdelen. Werk aan het koelcircuit (F-gassen) is op grond van EU-verordening
                517/2014 uitsluitend toegestaan voor gecertificeerde monteurs. Laatst bijgewerkt: 18 april 2026.
              </p>

            </div>
          </article>
        </div>
      </m.div>
    </>
  );
}
