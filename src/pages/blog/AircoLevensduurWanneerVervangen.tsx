import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoLevensduurWanneerVervangen() {
  return (
    <>
      <MetaTags
        title="Gemiddelde levensduur airco: wanneer vervangen? (2026) | StayCool"
        description="Gemiddelde levensduur van een airco is 10-15 jaar bij goed onderhoud. Ontdek wanneer vervangen goedkoper is dan repareren en hoe je je airco langer laat meegaan."
        keywords="levensduur airco, wanneer airco vervangen, airco repareren of vervangen, hoe oud kan een airco worden, airco kapot, airco vervangen kosten, airco levensduur r32"
        canonicalUrl="https://staycoolairco.nl/blog/airco-levensduur-wanneer-vervangen"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Gemiddelde levensduur airco: wanneer vervangen? (2026)",
          description: "Complete gids over levensduur van airco's: 10-15 jaar gemiddeld, factoren, tekenen van slijtage, repareren vs vervangen en tips om de airco langer te laten meegaan.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-levensduur-wanneer-vervangen.webp"
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
              { label: 'Airco levensduur' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>12 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Onderhoud & Levensduur</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Gemiddelde levensduur airco: wanneer vervangen? (2026)
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Kort antwoord: <strong>de gemiddelde levensduur van een airco is 10 tot 15 jaar bij goed onderhoud</strong>.
                Premium splitunits geïnstalleerd na 2017 halen met jaarlijks onderhoud vaak 12-17 jaar, terwijl goedkope
                mobiele units meestal na 5-8 jaar aan vervanging toe zijn. De trade-off: een oudere airco blijft koelen,
                maar verbruikt aanzienlijk meer stroom en werkt nog met verouderde koudemiddelen. Hieronder leggen onze
                monteurs uit wanneer vervangen slimmer is dan blijven repareren.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS TABLE ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Het belangrijkste in één overzicht</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Vraag</th>
                      <th className="text-left py-2 font-semibold">Antwoord (2026)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Gemiddelde levensduur split-airco</td>
                      <td className="py-2">10-15 jaar bij jaarlijks onderhoud</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Wanneer vervangen goedkoper dan repareren?</td>
                      <td className="py-2">Reparatie &gt; 40% van nieuwprijs bij &gt; 10 jaar oud</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Werkt een oude airco nog met R32?</td>
                      <td className="py-2">Nee, oude systemen zijn ontworpen voor R22 of R410A</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Grootste factor voor levensduur</td>
                      <td className="py-2">Jaarlijks onderhoud + niet te zware belasting</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Gemiddelde besparing nieuw model</td>
                      <td className="py-2">30-45% minder stroomverbruik vs. model uit 2010</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Twijfelt u over vervangen vs repareren?</h3>
                <p className="mb-4">
                  Gratis advies van onze monteurs. Wij komen langs, bekijken uw huidige systeem, berekenen de
                  werkelijke stroomkosten en geven u een eerlijk advies: blijven repareren of vervangen door een
                  moderne A+++ unit. Geen verkooppraat — gewoon cijfers.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag gratis vervang-advies aan
                </Link>
              </div>

              {/* ==================== SECTION 1 ==================== */}
              <h2>1. Wat is de gemiddelde levensduur van een airco?</h2>

              <p>
                De gemiddelde levensduur van een airco in Nederland ligt tussen de <strong>10 en 15 jaar</strong>.
                Dit geldt voor split-units van gerenommeerde merken die jaarlijks worden onderhouden. In onze
                service-praktijk in Limburg zien we zelfs regelmatig units uit 2008-2010 die nog probleemloos draaien
                — vaak dankzij consistent onderhoud en een stabiele omgeving.
              </p>

              <p>
                Maar "gemiddeld" verbergt grote verschillen. Een split-airco van een premium Japans merk gaat
                substantieel langer mee dan een mobiele unit uit de bouwmarkt. En een airco die 8 uur per dag op
                vol vermogen draait in een slecht geïsoleerd kantoor versleet sneller dan eenzelfde unit die 2 uur
                per dag moduleert in een goed geïsoleerde woonkamer.
              </p>

              <h3>Levensduur per type airco</h3>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type airco</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Levensduur bij goed onderhoud</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Levensduur zonder onderhoud</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Typische toepassing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Split-airco (premium)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">12-17 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">7-10 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">Woonkamer, slaapkamer</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Split-airco (midden)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">10-14 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">6-9 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">Woonkamer, kantoor</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Multi-split systeem</strong></td>
                      <td className="border border-gray-300 px-4 py-2">12-16 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">7-10 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">Hele woning, meerdere kamers</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Mobiele airco</strong></td>
                      <td className="border border-gray-300 px-4 py-2">5-8 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">3-5 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">Tijdelijk, huurwoning</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Industriële VRF/VRV</strong></td>
                      <td className="border border-gray-300 px-4 py-2">15-20 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">8-12 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">Kantoorgebouwen, horeca</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Raamairco</strong></td>
                      <td className="border border-gray-300 px-4 py-2">7-10 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">4-6 jaar</td>
                      <td className="border border-gray-300 px-4 py-2">Tijdelijke oplossing, zelden in NL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Ranges gebaseerd op onze service-ervaring in Limburg (2019-2026). Merk-verschillen tellen mee:
                premium Japanse merken zitten aan de bovenkant, Chinese budget-merken aan de onderkant.
                Meer over merkkeuze in onze gids over <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">beste airco merken 2026</Link>.
              </p>

              {/* ==================== SECTION 2 ==================== */}
              <h2>2. Wat bepaalt de levensduur van een airco?</h2>

              <p>
                Vijf factoren maken het verschil tussen 8 jaar en 17 jaar probleemloos draaien. Onze monteurs zien
                keer op keer dezelfde patronen.
              </p>

              <div className="not-prose space-y-4 my-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <h4 className="font-bold text-blue-900 mb-1">1. Jaarlijks onderhoud</h4>
                  <p className="text-sm text-gray-700 m-0">
                    De grootste factor. Een airco zonder onderhoud verliest 10-15% efficiëntie per jaar door vervuiling
                    van de warmtewisselaar. De compressor moet harder werken, elektronica krijgt meer belasting en
                    de levensduur halveert soms. Klanten die jaarlijks <Link to="/blog/airco-onderhoud-limburg-belangrijk" className="text-blue-600 hover:underline">professioneel onderhoud</Link> laten uitvoeren zien hun units vaak 40-60% langer meegaan.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <h4 className="font-bold text-blue-900 mb-1">2. Gebruiksintensiteit</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Een airco die 12+ uur per dag draait in een kantoor slijt sneller dan een die 2-4 uur per dag
                    gebruikt wordt. Vooral aan/uit-cycli zijn belastend voor de compressor. Inverter-technologie
                    (moduleren in plaats van aan/uit) reduceert deze belasting aanzienlijk.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <h4 className="font-bold text-blue-900 mb-1">3. Merk en bouwkwaliteit</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Premium Japanse merken gebruiken robuustere compressoren, betere elektronica en corrosiebestendigere
                    behuizingen. Chinese budget-merken kunnen op papier gelijkwaardig lijken maar hebben vaak
                    goedkopere onderdelen die eerder falen. Het verschil zien we pas na 7-8 jaar.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <h4 className="font-bold text-blue-900 mb-1">4. Isolatie van de woning</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Slecht geïsoleerde woningen dwingen de airco continu op vol vermogen te draaien om de temperatuur
                    vast te houden. Dat is slopend. In goed geïsoleerde nieuwbouw of na-geïsoleerde rijwoningen in
                    <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline mx-1">Maastricht</Link>
                    en <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline">Heerlen</Link> gaan units
                    significant langer mee omdat ze grotendeels modulerend werken.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                  <h4 className="font-bold text-blue-900 mb-1">5. Woonomgeving en plaatsing</h4>
                  <p className="text-sm text-gray-700 m-0">
                    De buitenunit is de meest kwetsbare component. Directe zon de hele dag, zoutlucht (Zuid-Limburg kent
                    dat nauwelijks, maar stedelijke vervuiling wel), bladafval in de ventilator en plaatsing vlak bij
                    de grond (modder, opspattend water) verkorten de levensduur. Een goed geplaatste buitenunit onder
                    een overkapping gaat 3-5 jaar langer mee.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION 3 ==================== */}
              <h2>3. Hoe herken ik dat mijn airco aan vervanging toe is?</h2>

              <p>
                Onze monteurs worden regelmatig gebeld met klachten die eigenlijk al signalen zijn dat het einde
                in zicht is. Hieronder 7 concrete tekenen dat uw airco versleten raakt.
              </p>

              <div className="not-prose space-y-3 my-6">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <h4 className="font-bold text-amber-900 mb-1">1. Veel minder koelvermogen dan vroeger</h4>
                  <p className="text-sm text-gray-700 m-0">
                    De ruimte wordt niet meer echt koud, of het duurt uren om op temperatuur te komen. Dit wijst
                    meestal op koudemiddel-verlies, een versleten compressor of dichtgeslibde warmtewisselaar.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <h4 className="font-bold text-amber-900 mb-1">2. Sterk gestegen stroomverbruik</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Als uw airco-rekening 30-50% hoger is dan vroeger bij vergelijkbaar gebruik, draait het systeem
                    inefficiënt. Vaak onomkeerbaar bij units ouder dan 10-12 jaar.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <h4 className="font-bold text-amber-900 mb-1">3. Vreemde geluiden (gerommel, fluiten, kloppen)</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Lagers van de ventilator of compressor lopen vast. Op korte termijn te repareren, maar bij een
                    10+ jaar oude unit vaak een voorbode van grotere defecten.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <h4 className="font-bold text-amber-900 mb-1">4. Lekkend water uit de binnenunit</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Verstopte condensafvoer is makkelijk te verhelpen. Maar bij oude units zit het probleem vaak in
                    gescheurde afvoerbakjes of corrosie van de lekbak — daar gaat een reparatie niet meer helpen.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <h4 className="font-bold text-amber-900 mb-1">5. Steeds vaker fout-codes of automatisch uitschakelen</h4>
                  <p className="text-sm text-gray-700 m-0">
                    De elektronische printplaat degradeert. Als dezelfde fout meermaals per seizoen terugkomt
                    ondanks reparatie, is het apparaat op.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <h4 className="font-bold text-amber-900 mb-1">6. IJsvorming op de leidingen of buitenunit</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Wijst op koudemiddel-problemen of sensor-defecten. Kan bij jonge units eenmalig voorkomen.
                    Bij oude units terugkerend en duur om op te lossen.
                  </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                  <h4 className="font-bold text-amber-900 mb-1">7. Bedrijfsgeur of vochtige geur bij opstarten</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Schimmelvorming in onbereikbare delen van de verdamper. Slecht voor de luchtkwaliteit én een
                    teken dat de binnenunit niet meer grondig te reinigen is.
                  </p>
                </div>
              </div>

              <h3>Hoe weet je dat je airco kapot is?</h3>
              <p>
                Echt "kapot" betekent meestal: de unit start niet meer, koelt niet meer ondanks groene LED, of geeft
                een error-code die na reset direct terugkomt. Tussen "volledig kapot" en "werkt prima" zit een grijze
                zone waar de airco nog wel draait maar met 30-50% verminderde prestaties. Juist in die zone is het
                beslismoment: repareren of vervangen.
              </p>

              {/* ==================== SECTION 4 ==================== */}
              <h2>4. Repareren vs vervangen: wanneer wat?</h2>

              <p>
                De 50%-regel die onze monteurs hanteren: <strong>als de reparatiekosten meer dan 50% van de
                nieuwprijs bedragen bij een unit ouder dan 10 jaar, is vervangen bijna altijd slimmer</strong>.
                Hieronder een concrete beslissingsmatrix.
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Leeftijd airco</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Reparatie &lt; €200</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Reparatie €200-€500</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Reparatie €500-€900</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Reparatie &gt; €900</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>0-5 jaar</strong></td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">Repareren</td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">Repareren (garantie check)</td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">Repareren</td>
                      <td className="border border-gray-300 px-4 py-2 bg-yellow-50">Afwegen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>6-9 jaar</strong></td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">Repareren</td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">Repareren</td>
                      <td className="border border-gray-300 px-4 py-2 bg-yellow-50">Afwegen</td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">Vervangen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>10-13 jaar</strong></td>
                      <td className="border border-gray-300 px-4 py-2 bg-green-50">Repareren</td>
                      <td className="border border-gray-300 px-4 py-2 bg-yellow-50">Afwegen</td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">Vervangen</td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">Vervangen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>14+ jaar</strong></td>
                      <td className="border border-gray-300 px-4 py-2 bg-yellow-50">Afwegen</td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">Vervangen</td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">Vervangen</td>
                      <td className="border border-gray-300 px-4 py-2 bg-red-50">Vervangen</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Wanneer is het goedkoper om een airco te vervangen dan te repareren?</h3>
              <p>
                Vervangen is in de praktijk goedkoper dan repareren als aan minstens twee van deze voorwaarden is voldaan:
              </p>
              <ul>
                <li>De unit is 10 jaar of ouder</li>
                <li>De reparatie kost meer dan 40% van de nieuwprijs</li>
                <li>Het is de tweede of derde grote reparatie binnen 3 jaar</li>
                <li>De unit werkt nog met R22 of R410A (verouderde koudemiddelen)</li>
                <li>Het stroomverbruik is aantoonbaar 30%+ gestegen</li>
              </ul>

              <p>
                Rekenvoorbeeld: een 12 jaar oude 3,5 kW airco met compressor-defect. Reparatie: €650 (inclusief
                koudemiddel bijvullen). Nieuwe A+++ unit inclusief installatie: €1.800-€2.200. Verschil: €1.150-€1.550.
                Maar: de nieuwe unit verbruikt 35-45% minder stroom — ongeveer €180-€250 besparing per jaar. Terug­verdien­tijd
                op de vervanging: 5-7 jaar. Voor een unit die nog 3-5 jaar zou meegaan na reparatie is dat geen
                slechte deal.
              </p>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Kiest u een nieuwe airco?</h3>
                <p className="text-gray-700 mb-4">
                  Voordat u vervangt, is merkkeuze cruciaal. Een premium Japanse unit gaat vaak 5+ jaar langer mee
                  dan een budget-alternatief. In onze gids over <strong>beste airco merken 2026</strong> leggen we
                  per merk uit wat onze monteurs in de praktijk zien aan betrouwbaarheid en onderdelen-beschikbaarheid.
                </p>
                <Link
                  to="/blog/beste-airco-merken-2026"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Lees de merkenvergelijking
                </Link>
              </div>

              {/* ==================== SECTION 5 ==================== */}
              <h2>5. Zo verleng je de levensduur van je airco</h2>

              <p>
                Zeven concrete tips van onze monteurs die aantoonbaar verschil maken. Niet spectaculair — gewoon wat
                werkt.
              </p>

              <div className="not-prose space-y-4 my-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">1. Laat jaarlijks professioneel onderhoud uitvoeren</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Het belangrijkste advies. Een professionele servicebeurt kost €80-€130 per jaar en verlengt de
                    levensduur met 4-7 jaar in onze ervaring. De warmtewisselaar wordt chemisch gereinigd, het
                    koudemiddel gemeten en de elektronica gecontroleerd. StayCool-klanten krijgen <Link to="/gratis-onderhoud" className="text-blue-600 hover:underline">gratis onderhoud</Link> het eerste jaar.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">2. Reinig zelf de filters elke 4-6 weken</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Binnenunit openen, filter eruit nemen, uitspoelen onder lauw water, laten drogen, terugplaatsen.
                    Kost 5 minuten en bespaart 10-15% stroomverbruik. Een schoon filter betekent minder belasting op
                    de compressor en dus langere levensduur.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">3. Houd de buitenunit vrij van blad en vuil</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Check maandelijks de ventilator en lamellen van de buitenunit. Blad, pluis en spinnenwebben
                    belemmeren de luchtstroom, waardoor de unit harder moet werken. 2-3 keer per jaar voorzichtig met
                    een zachte borstel of tuinslang reinigen (nooit hogedruk).
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">4. Vermijd aan/uit-gedrag</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Elke keer dat de compressor start, krijgt hij een piekbelasting. 10x per dag aan/uit is slopender
                    dan continu modulerend draaien. Stel een vast setpoint in (21-22°C bij verwarmen, 24-25°C bij
                    koelen) en laat de inverter het werk doen.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">5. Zorg voor een goed geplaatste buitenunit</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Niet in direct zonlicht de hele dag, niet te dicht op de grond (minimaal 30 cm), niet onder een
                    dakrand waar regenwater op valt, en niet ingeklemd tussen muren (luchtstroom belemmerd).
                    Goed geplaatst = jaren extra levensduur.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">6. Gebruik de airco jaarrond, niet alleen in de zomer</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Tegenintuïtief, maar waar: een airco die 8 maanden per jaar stilstaat, krijgt afdichtingen die
                    uitdrogen, olie die scheidt in de compressor en vochtvorming in de elektronica. Schakel hem in de
                    winter minimaal 1x per maand 20 minuten in (ook verwarmingsstand).
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">7. Laat reparaties direct uitvoeren</h4>
                  <p className="text-sm text-gray-700 m-0">
                    "Het doet het nog wel, ik laat het later maken" is de klassieke valkuil. Een kleine koudemiddel-lekkage
                    die 6 maanden doorloopt, laat de compressor oververhitten — en die vervangen kost €600-€1.000.
                    Snel ingrijpen bespaart vaak honderden euro's.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION 6 ==================== */}
              <h2>6. Wat kost een nieuwe airco in 2026?</h2>

              <p>
                Als u besluit te vervangen, zijn dit de actuele prijsranges voor Limburg (2026, inclusief installatie door
                een F-gassen-gecertificeerde monteur):
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Systeem</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Toepassing</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Prijs inclusief installatie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>2,5 kW split (midden)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Slaapkamer, klein kantoor</td>
                      <td className="border border-gray-300 px-4 py-2">€1.400 - €1.800</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>3,5 kW split (premium)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Woonkamer 25-35 m²</td>
                      <td className="border border-gray-300 px-4 py-2">€1.900 - €2.500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>5,0 kW split (premium)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Open woonkamer 40-55 m²</td>
                      <td className="border border-gray-300 px-4 py-2">€2.300 - €3.100</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Multi-split (2 binnenunits)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Woonkamer + slaapkamer</td>
                      <td className="border border-gray-300 px-4 py-2">€3.200 - €4.500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Multi-split (3-4 binnenunits)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Hele rijwoning</td>
                      <td className="border border-gray-300 px-4 py-2">€5.500 - €8.500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                De verwachte terugverdientijd van een nieuwe A+++ unit ten opzichte van een 12+ jaar oude unit ligt
                meestal tussen 6 en 10 jaar via lagere stroomrekening alleen. Voor gedetailleerde berekeningen over
                stroomkosten zie onze gids <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">wat kost 1 uur airco draaien</Link>.
              </p>

              {/* ==================== SECTION 7: CO2 + R32 ==================== */}
              <h2>7. CO2-footprint en koudemiddelen bij vervangen</h2>

              <p>
                Een eerlijk punt: een nieuwe airco kopen is niet per se "groener" dan doorgaan met de oude. De productie
                kost energie en grondstoffen. Maar er is één belangrijke overweging die de balans vaak doet omslaan:
                <strong> het koudemiddel</strong>.
              </p>

              <h3>Kunnen oude airco's nog met R32 gas werken?</h3>
              <p>
                Nee. Oude airco's (geïnstalleerd vóór 2017-2018) zijn vrijwel altijd ontworpen voor <strong>R22</strong>
                (vóór 2010) of <strong>R410A</strong> (2010-2017). Deze systemen kunnen niet zomaar worden omgezet naar
                R32 — de componenten (compressor, leidingen, expansieventielen) zijn geoptimaliseerd voor andere drukken
                en eigenschappen.
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Koudemiddel</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Gebruikt in</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">GWP (broeikas-impact)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Status 2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>R22</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Airco's vóór 2010</td>
                      <td className="border border-gray-300 px-4 py-2">1.810</td>
                      <td className="border border-gray-300 px-4 py-2">Verboden (alleen bestaand vullen mag nog)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>R410A</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Airco's 2010-2017</td>
                      <td className="border border-gray-300 px-4 py-2">2.088</td>
                      <td className="border border-gray-300 px-4 py-2">Uitfaseren, duur om bij te vullen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>R32</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Airco's 2017-heden (standaard)</td>
                      <td className="border border-gray-300 px-4 py-2">675</td>
                      <td className="border border-gray-300 px-4 py-2">Actuele standaard</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>R290 (propaan)</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Nieuwste systemen (2024+)</td>
                      <td className="border border-gray-300 px-4 py-2">3</td>
                      <td className="border border-gray-300 px-4 py-2">Opkomend, specialistische installatie</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                De cruciale praktijkpunten:
              </p>
              <ul>
                <li><strong>R22-units lekken? Vervangen is meestal de enige optie</strong> — nieuw R22 bijvullen mag
                    niet meer, gerecycled R22 is schaars en duur (€80-€150 per kg tegen €15-€25 voor R32).</li>
                <li><strong>R410A wordt de komende jaren fors duurder</strong> door EU-uitfasering. Bij grote reparaties
                    aan R410A-units is vervanging door R32 vaak binnen 3-5 jaar terugverdiend.</li>
                <li><strong>R32 is geen onderdeel-upgrade</strong>. U kunt niet uw oude R22-airco "omzetten" naar R32.
                    Complete vervanging is nodig.</li>
              </ul>

              <h3>Wat is het grootste nadeel van een aircosysteem?</h3>
              <p>
                Eerlijk gezegd: <strong>de milieu-impact bij lekkage van koudemiddel</strong>. Zelfs moderne R32 heeft
                een GWP van 675 — een kleine lekkage van 0,5 kg staat gelijk aan meer dan 330 kg CO2. Daarnaast kost
                een airco aanschaf en installatie relatief veel (€1.500-€3.000), vereist hij jaarlijks onderhoud en
                produceert hij geluid (zowel binnen als buiten). Voor veel Nederlandse huishoudens wegen comfort en
                energiezuinig verwarmen daar tegenop, maar het is een reëel nadeel dat eerlijk benoemd mag worden.
              </p>

              {/* ==================== FAQ SECTION ==================== */}
              <h2>8. Veelgestelde vragen</h2>

              <h3>Wat is de gemiddelde levensduur van een airco?</h3>
              <p>
                10 tot 15 jaar bij jaarlijks professioneel onderhoud. Premium split-units halen 12-17 jaar, mobiele
                units 5-8 jaar. Zonder onderhoud zakt de levensduur met 30-40%. Modellen geïnstalleerd na 2017 met
                inverter-technologie zitten doorgaans aan de bovenkant van de range.
              </p>

              <h3>Hoe weet je dat je airco kapot is?</h3>
              <p>
                Zeven signalen: verminderd koelvermogen, sterk gestegen stroomverbruik, vreemde geluiden, lekkend water,
                terugkerende fout-codes, ijsvorming op leidingen en muffe geur bij opstarten. Als er twee of meer tegelijk
                spelen, is reparatie vaak niet meer lonend bij een unit ouder dan 10 jaar.
              </p>

              <h3>Wanneer is het goedkoper om een airco te vervangen dan te repareren?</h3>
              <p>
                Bij een unit van 10+ jaar waarvan de reparatiekosten meer dan 40-50% van de nieuwprijs bedragen. Ook als
                het de tweede grote reparatie binnen 3 jaar is, of als het systeem nog werkt op R22 (waar koudemiddel
                bijvullen fors duurder is geworden). Houd rekening met €180-€250 per jaar besparing op stroom bij een
                modern A+++ model.
              </p>

              <h3>Wat is het grootste nadeel van een aircosysteem?</h3>
              <p>
                De milieu-impact van koudemiddel bij lekkage — zelfs moderne R32 heeft een GWP van 675. Daarnaast zijn
                aanschaf en installatie een forse investering (€1.500-€3.000), is jaarlijks onderhoud vereist en
                produceren airco's geluid. Voor de meeste huishoudens wegen comfort, zuinig verwarmen en koeltein de
                zomer daar wel tegenop.
              </p>

              <h3>Kunnen oude airco's nog met R32 gas werken?</h3>
              <p>
                Nee. Oude systemen zijn ontworpen voor R22 (vóór 2010) of R410A (2010-2017) en kunnen niet worden
                omgezet naar R32. De drukken en componenten verschillen. Als uw airco een R22- of R410A-lekkage heeft,
                is vervanging door een R32-systeem meestal de enige economische oplossing.
              </p>

              <h3>Wat bepaalt de levensduur van een airco?</h3>
              <p>
                Vijf hoofdfactoren: jaarlijks onderhoud (grootste impact), gebruiksintensiteit, merk en bouwkwaliteit,
                isolatie van de woning en plaatsing van de buitenunit. Premium Japanse merken in een goed geïsoleerde
                woning met jaarlijks onderhoud halen gemakkelijk 15+ jaar. Een budget-merk zonder onderhoud in een
                slecht geïsoleerde ruimte soms maar 6-8 jaar.
              </p>

              <h3>Hoe verleng ik de levensduur van mijn airco?</h3>
              <p>
                Jaarlijks professioneel onderhoud (belangrijkste), filters elke 4-6 weken zelf reinigen, buitenunit vrij
                houden van blad en vuil, aan/uit-gedrag vermijden (modulerend draaien), goede plaatsing van de buitenunit,
                ook in de winter af en toe gebruiken (niet 8 maanden stilzetten) en kleine reparaties direct laten
                uitvoeren. Onze monteurs zien gemakkelijk 40-60% langere levensduur bij klanten die dit consistent doen.
                Wij bedienen klanten in <Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link>,
                <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline mx-1">Heerlen</Link>,
                <Link to="/werkgebied/sittard" className="text-blue-600 hover:underline">Sittard</Link> en verder in Limburg.
              </p>

              {/* ==================== CTA 3 (FINAL) ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Tijd voor een vrijblijvende inmeting?</h3>
                <p className="mb-4">
                  Of u nu twijfelt over vervangen, een tweede airco wilt of een oud R410A-systeem wilt upgraden:
                  onze monteurs komen gratis langs voor inmeting en advies. U krijgt een concrete offerte op maat,
                  rekening houdend met uw woning, isolatie en gebruik. Geen verrassingen achteraf.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Plan gratis inmeting in
                </Link>
              </div>

              {/* ==================== RELATED ==================== */}
              <h2>Verder lezen</h2>
              <ul>
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
                  <Link to="/blog/airco-onderhoud-limburg-belangrijk" className="text-blue-600 hover:underline">
                    Waarom regelmatig airco-onderhoud essentieel is in Limburg
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                    Airco offerte Limburg — wat je moet weten in 2026
                  </Link>
                </li>
              </ul>

              <p className="text-xs text-gray-500 mt-8 italic">
                Dit artikel is gebaseerd op StayCool's eigen service-data 2019-2026 in Limburg, aangevuld met EU-richtlijnen
                over koudemiddelen (F-gassenverordening). Levensduur van airco's varieert per model, gebruik en onderhoud.
                Laatst bijgewerkt: 18 april 2026.
              </p>

            </div>
          </article>
        </div>
      </m.div>
    </>
  );
}
