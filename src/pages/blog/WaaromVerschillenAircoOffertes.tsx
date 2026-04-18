import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function WaaromVerschillenAircoOffertes() {
  return (
    <>
      <MetaTags
        title="Waarom verschillen airco offertes 30-50%? 10 echte redenen uitgelegd (2026)"
        description="Drie offertes van €1.800, €2.400 en €3.100 voor dezelfde 3,5 kW airco? Dit zijn de 10 echte redenen waarom airco offertes tot 50% verschillen — en hoe je een eerlijke offerte herkent."
        keywords="waarom verschillen airco offertes, airco offerte vergelijken, waarom is airco offerte duur, airco prijsverschil, eerlijke airco offerte, airco offerte te duur"
        canonicalUrl="https://staycoolairco.nl/blog/waarom-verschillen-airco-offertes"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Waarom verschillen airco offertes 30-50%? De echte redenen uitgelegd",
          description: "Uitleg-artikel over waarom drie offertes voor dezelfde airco tot 50% van elkaar kunnen verschillen. Tien concrete oorzaken — van aggregator-marges tot merkkeuze, extra koelleidingen en seizoenstoeslagen.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/waarom-verschillen-airco-offertes.webp"
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
              { label: 'Waarom offertes verschillen' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>10 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Prijzen</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Waarom verschillen airco offertes 30-50%? De echte redenen uitgelegd
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                U vraagt drie offertes op voor dezelfde <strong>3,5 kW airco</strong> in dezelfde woonkamer. Wat krijgt u terug?
                Offerte A: <strong>€1.800</strong>. Offerte B: <strong>€2.400</strong>. Offerte C: <strong>€3.100</strong>. Dat
                is een verschil van bijna 75% tussen de goedkoopste en duurste. Zijn die twee duurdere bedrijven oplichters?
                Bijna nooit. In 9 op de 10 gevallen is het verschil perfect te verklaren. Onze monteurs leggen de 10 meest
                voorkomende oorzaken transparant uit — zodat u zelf kunt beoordelen welke offerte <em>echt</em> de beste is.
              </p>
            </header>

            <figure className="mb-8">
              <img
                src="/images/blog/waarom-verschillen-airco-offertes.webp"
                alt="Waarom verschillen airco offertes zo sterk? De echte redenen uitgelegd door StayCool"
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Drie offertes, één woning, drie prijzen: zo verklaart u het verschil.
              </figcaption>
            </figure>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Het belangrijkste in één overzicht</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Oorzaak prijsverschil</th>
                      <th className="text-left py-2 font-semibold">Impact op offerte</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">Aggregator-marge (Werkspot/Homedeal)</td>
                      <td className="py-2">+15 tot 25%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Merkkeuze (Daikin vs Toshiba)</td>
                      <td className="py-2">+20 tot 30%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Extra koelleidingen boven 5 m</td>
                      <td className="py-2">€35 – €65 per meter</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Aparte elektragroep</td>
                      <td className="py-2">€180 – €350</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Garantieduur (3 vs 5 jaar)</td>
                      <td className="py-2">+5 tot 12%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Seizoenspiek-toeslag (mei-aug)</td>
                      <td className="py-2">+8 tot 15%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Eerste jaaronderhoud in/uit</td>
                      <td className="py-2">€85 – €120</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== INTRO ==================== */}
              <h2>Een realistisch voorbeeld: drie offertes, één woonkamer</h2>

              <p>
                Stel: u woont in een tussenwoning in Sittard, woonkamer van 28 m², en u wilt een splitunit van 3,5 kW.
                Drie installateurs komen langs. Na een week liggen er drie PDF's in uw mailbox:
              </p>

              <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Offerte A — €1.800</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    Tosot 3,5 kW, 3 jaar garantie, 5 m leidingen, geen onderhoud inbegrepen, installatie in november.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-lg">
                  <h4 className="font-bold text-yellow-900 mb-2">Offerte B — €2.400</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    Mitsubishi Heavy 3,5 kW, 5 jaar garantie, 7 m leidingen, 1e jaaronderhoud inbegrepen, installatie juni.
                  </p>
                </div>
                <div className="bg-red-50 border border-red-200 p-5 rounded-lg">
                  <h4 className="font-bold text-red-900 mb-2">Offerte C — €3.100</h4>
                  <p className="text-sm text-gray-700 mb-0">
                    Daikin 3,5 kW, 5 jaar garantie, 7 m leidingen, aparte groep, via Werkspot, installatie juli.
                  </p>
                </div>
              </div>

              <p>
                Ziet u het al? Het verschil van <strong>€1.300</strong> tussen A en C is geen "oplichting" — het zijn drie
                verschillende producten en diensten onder dezelfde noemer "3,5 kW airco". Hieronder de 10 oorzaken uitgepakt.
              </p>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Liever direct een transparante offerte?</h3>
                <p className="mb-4">
                  Bij StayCool splitsen wij elke offertepost zichtbaar uit: unit, leidingen, elektra, garantie en
                  onderhoud. Geen verborgen marges, geen aggregator-tussenlaag. U ziet precies waarvoor u betaalt.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag eerlijke offerte aan
                </Link>
              </div>

              {/* ==================== 10 REASONS ==================== */}
              <h2>10 redenen waarom airco offertes zo sterk verschillen</h2>

              <h3>1. Aggregator-marge: 15 tot 25% opslag</h3>
              <p>
                Sites als <strong>Werkspot, Homedeal, Zoofy en Offerte.nl</strong> presenteren zich als "gratis
                vergelijkingsdienst", maar verdienen geld door uw aanvraag door te verkopen aan installateurs — tegen
                een <strong>lead-fee van €35 tot €120 per offerte</strong>. Die installateur rekent dat gewoon door
                in zijn offerte, bovenop een gebruikelijke marge voor administratie. Effectief betaalt u 15 tot 25%
                meer voor exact dezelfde installatie.
              </p>
              <p className="text-sm text-gray-600 italic">
                Voorbeeld: een installatie die direct €2.000 kost, komt via Werkspot vaak uit op €2.400-€2.500.
                Voor u is dat €400-€500 die volledig naar het platform vloeit — niet naar betere service of garantie.
              </p>

              <h3>2. Merk- en modelkeuze: Daikin is structureel 20-30% duurder</h3>
              <p>
                De grootste "stille" prijsdriver. Op papier is een 3,5 kW airco een 3,5 kW airco, maar de inkoop varieert fors:
              </p>
              <ul>
                <li><strong>Tosot / TCL / Haier</strong>: budgetklasse, inkoop €450-€650. Prima kwaliteit, minder servicepunten.</li>
                <li><strong>Toshiba / Mitsubishi Heavy / LG</strong>: middenklasse, inkoop €700-€900. Goede COP-waardes, ruim servicepunten.</li>
                <li><strong>Daikin / Mitsubishi Electric</strong>: premium, inkoop €950-€1.250. Stilste units, beste garantie-netwerk.</li>
              </ul>
              <p>
                Tussen Tosot en Daikin zit ruw €500-€700 pure hardware-verschil. Dat is niet oplichting — dat is merkkeuze.
                Lees onze <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">airco merken-vergelijking 2026</Link> voor welk merk bij welk budget past.
              </p>

              <h3>3. Extra koelleidingen: €35 tot €65 per meter</h3>
              <p>
                Standaard is 5 meter leiding tussen binnen- en buitenunit inbegrepen. In de praktijk heeft een gemiddelde
                Nederlandse woonkamer-installatie <strong>7 tot 12 meter</strong> nodig omdat de buitenunit op de achtergevel
                of het platte dak moet. Elke extra meter kost:
              </p>
              <ul>
                <li>Koelleiding (isolatie + koperen buizen): €18-€28 per meter</li>
                <li>Extra arbeidstijd (plooien, solderen, vacumeren): €17-€37 per meter</li>
                <li>Totaal: <strong>€35-€65 per extra meter</strong></li>
              </ul>
              <p>
                Een offerte die 12 meter rekent vs een die 5 meter aanneemt kan alléén daardoor al <strong>€245-€455</strong>
                verschillen. Vraag altijd: "Hoeveel meter zit er in deze prijs en wat kost een extra meter?"
              </p>

              <h3>4. Aparte elektragroep: €180 tot €350</h3>
              <p>
                Vanaf een vermogen van 5 kW is een aparte groep in uw meterkast <strong>verplicht</strong>. Ook bij
                3,5 kW units adviseren onze monteurs een aparte groep als de bestaande meterkast al zwaar belast is
                (bijv. inductiekookplaat + wasmachine + droger op één groep). Deze kosten worden vaak als "meerwerk"
                achteraf op de factuur geplaatst — niet in de offerte.
              </p>
              <p>
                <strong>Rode vlag:</strong> staat "elektra: in overleg" of "p.m." (pro memorie) in de offerte? Reken dan
                op €180-€350 extra achteraf. Een nette offerte benoemt de groep expliciet.
              </p>

              <h3>5. Monumenten- en VvE-toeslagen</h3>
              <p>
                Installatie in een monumentaal pand of bovenaf een VvE-appartementencomplex vereist:
              </p>
              <ul>
                <li>Schriftelijke toestemming VvE (soms kosten voor juridische check: €75-€150)</li>
                <li>Aangepaste buitenunit-positie (vaak op het dak in plaats van gevel: +€200-€400 meerwerk)</li>
                <li>Monumentencommissie-aanvraag bij gemeente (advieskosten installateur: €100-€250)</li>
                <li>Hoogwerker of steiger bij hoge gevels: €250-€600 per dag</li>
              </ul>
              <p>
                Een installateur die dit <em>niet</em> in zijn offerte benoemt, weet óf niet dat uw pand monumentaal is,
                óf stuurt u later een meerwerkfactuur. In beide gevallen reden om door te vragen.
              </p>

              <h3>6. Garantieduur zit verborgen in de prijs</h3>
              <p>
                Elke airco heeft een <strong>fabrieksgarantie</strong> (meestal 3 jaar op onderdelen). Daarbovenop geeft
                de installateur een <strong>installatiegarantie</strong> op zijn eigen werk (lekkages, montagefouten).
                De duur van die installatiegarantie varieert enorm:
              </p>
              <ul>
                <li>Budgetinstallateurs: 1 jaar op installatie, 3 jaar op unit</li>
                <li>Middenklasse (zoals StayCool standaard): 3 jaar installatie + 3 jaar unit</li>
                <li>Premium: 5 jaar totaal op installatie én unit</li>
              </ul>
              <p>
                De "extra" 2 jaar garantie is niet gratis — die kost de installateur geld (reserveringen voor eventuele
                claims, duurdere onderdelen). Reken op <strong>5 tot 12% prijsverschil</strong> tussen 3- en 5-jaars garanties
                op installatie.
              </p>

              <h3>7. Eerste jaaronderhoud: inbegrepen of niet?</h3>
              <p>
                Een professionele onderhoudsbeurt kost normaal €85 tot €120. Een Daikin- of Mitsubishi-garantie loopt
                alleen door als u die beurt daadwerkelijk laat uitvoeren. Installateurs gaan hier op twee manieren mee om:
              </p>
              <ul>
                <li><strong>Inbegrepen in offerte:</strong> transparant, u ziet één totaalbedrag en de afspraak wordt automatisch ingepland</li>
                <li><strong>Niet inbegrepen (losse factuur na 12 maanden):</strong> goedkoper lijkt de offerte, maar het komt er alsnog bij</li>
              </ul>
              <p>
                Bij StayCool krijgt u het eerste jaaronderhoud <Link to="/gratis-onderhoud" className="text-blue-600 hover:underline">gratis</Link> bij elke installatie.
                Dat is standaard €85-€120 die u dus niet betaalt — een verschil dat u soms ziet terug in een schijnbaar
                "duurdere" offerte die uiteindelijk voordeliger uitpakt.
              </p>

              <h3>8. Regionale arbeidskostenverschillen</h3>
              <p>
                Het uurtarief van een F-gassen-gecertificeerde monteur verschilt per regio:
              </p>
              <ul>
                <li>Groningen / Drenthe: €52-€62 per uur</li>
                <li>Limburg / Noord-Brabant: €58-€70 per uur</li>
                <li>Randstad (Amsterdam/Utrecht): €75-€95 per uur</li>
              </ul>
              <p>
                Een gemiddelde installatie duurt 5-7 uur. Een Amsterdamse installateur die uw Limburgse woning bedient,
                rekent vaak nog reiskosten erbovenop — 50 km x €0,38/km is €38 extra alleen voor de rit. Een lokale
                Limburgse installateur als StayCool valt daardoor altijd goedkoper uit. Zie onze
                {' '}<Link to="/werkgebied/maastricht" className="text-blue-600 hover:underline">Maastricht</Link>,
                {' '}<Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline">Heerlen</Link> en
                {' '}<Link to="/werkgebied/sittard" className="text-blue-600 hover:underline">Sittard</Link> werkgebieden.
              </p>

              <h3>9. Seizoenspiek-toeslagen (mei t/m augustus)</h3>
              <p>
                In de zomermaanden explodeert de vraag naar airco's. Installateurs hebben dan niet genoeg monteurs om
                de piek op te vangen en rekenen <strong>8 tot 15% meer</strong> voor installaties in juni-juli-augustus.
                In het voor- of najaar (oktober-maart) staan diezelfde monteurs half leeg en krijgt u vaak spontaan
                5-10% korting.
              </p>
              <p>
                Vraagt u drie offertes op met verschillende installatiemaanden? Vergelijk dan niet alleen de prijs,
                maar ook de planning. Een offerte van €2.400 voor juni kan bij dezelfde installateur in februari €2.150 zijn.
              </p>

              <h3>10. "Gratis" inmeting versus betaald advies</h3>
              <p>
                Sommige installateurs rekenen een <strong>voorrijkosten of inmetings-fee</strong> (€45-€95) die in de
                uiteindelijke offerte verrekend wordt mits u bij hen afneemt. Wie niet boekt, krijgt de factuur. Andere
                installateurs — waaronder StayCool — komen <strong>echt gratis en vrijblijvend</strong> langs, zonder
                verborgen verplichting.
              </p>
              <p>
                Een "gratis inmeting" die verdisconteerd is in een hogere offerteprijs voelt gratis, maar is het niet.
                Vraag expliciet: "Komt de inmeting terug in de offerte als ik bij u afneem?" en "Wat kost het als ik
                niet bij u afneem?".
              </p>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Inmeting kost u bij StayCool nooit iets</h3>
                <p className="text-gray-700 mb-4">
                  Geen voorrijkosten, geen lead-fee, geen aggregator-marge. Onze monteur komt langs, meet op, adviseert
                  en maakt een uitgespecificeerde offerte — of u nu bij ons afneemt of niet. Zo hoort het.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Plan gratis inmeting in
                </Link>
              </div>

              {/* ==================== FAIR VS OVERPRICED ==================== */}
              <h2>Hoe herken je een eerlijke offerte vs een overprijsde?</h2>

              <p>
                Na het lezen van deze 10 oorzaken weet u waarvandaan prijsverschillen komen. Maar hoe scheidt u nu een
                eerlijke middenklasse-offerte van een overprijsde? Let op deze 6 kenmerken van een <strong>eerlijke offerte</strong>:
              </p>

              <div className="not-prose bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6">
                <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside m-0">
                  <li><strong>Exacte typenummers vermeld.</strong> Niet "Daikin 3,5 kW" maar "Daikin Perfera FTXM35R + RXM35R9". U kunt het zelf googelen.</li>
                  <li><strong>Uitgesplitste posten.</strong> Unit, leidingen (met meterprijs), elektra, installatie en onderhoud staan apart genoemd — niet één vaag totaalbedrag.</li>
                  <li><strong>Meter-specificatie voor leidingen.</strong> "7 meter inbegrepen, €45/m extra" in plaats van "leidingen naar behoefte".</li>
                  <li><strong>Garantievoorwaarden zwart-op-wit.</strong> X jaar op installatie, Y jaar op onderdelen, met duidelijke uitsluitingen.</li>
                  <li><strong>BTW-percentage expliciet.</strong> "€2.400 incl. 21% btw" — niet alleen "€2.400".</li>
                  <li><strong>Geldigheidsduur offerte.</strong> Eerlijke offertes zijn 30-60 dagen geldig; daarna kunnen materiaalprijzen schuiven.</li>
                </ol>
              </div>

              <p>
                Zet een offerte waar deze 6 punten niet op staan, aan de kant — of vraag expliciet na. Een betrouwbare
                installateur voorziet deze vragen en heeft ze automatisch in zijn offerte staan.
              </p>

              {/* ==================== RED FLAG ==================== */}
              <h2>Wanneer is de goedkoopste offerte een red flag?</h2>

              <p>
                Een airco-offerte die 25-35% onder het gemiddelde ligt, is bijna altijd reden voor argwaan. De realistische
                prijs voor een nette 3,5 kW installatie in Limburg ligt in 2026 tussen <strong>€1.700 en €2.400</strong>.
                Een offerte van €1.300 klinkt aantrekkelijk, maar check deze signalen:
              </p>

              <div className="not-prose bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside m-0">
                  <li><strong>Geen F-gassen-certificering genoemd.</strong> Illegale installatie = geen garantie én gevaar voor milieu. Loop weg.</li>
                  <li><strong>"All-in" zonder uitsplitsing.</strong> Grote kans dat elektra, extra meters en aparte groep achteraf als meerwerk erbij komen.</li>
                  <li><strong>Onbekend merk zonder Nederlands servicenetwerk.</strong> Nooit van "CoolMax Pro" gehoord? Bij een storing over 3 jaar ook niet.</li>
                  <li><strong>Installatie over 10-14 dagen.</strong> Serieuze installateurs plannen 2-6 weken vooruit. Onmiddellijke ruimte = of heel stil of slordige planning.</li>
                  <li><strong>Alleen telefonische offerte, geen plaatsbezoek.</strong> Een professional komt altijd kijken — op afstand inschatten is riskant.</li>
                  <li><strong>Aanbetaling van 50%+ vooraf.</strong> 20-30% is normaal. Meer dan de helft betalen voor start = financieel risico bij faillissement.</li>
                </ul>
              </div>

              <p>
                Kortom: de goedkoopste offerte <em>kan</em> legitiem zijn (kleine eenmanszaak zonder overhead, directe
                inkoop bij groothandel), maar combineert u lage prijs met één of meer van bovenstaande signalen, dan is
                de kans groot dat u achteraf meer betaalt dan bij een middenklasse-offerte.
              </p>

              {/* ==================== FAQ ==================== */}
              <h2>Veelgestelde vragen</h2>

              <h3>Waarom is een airco offerte soms wel 50% duurder bij een ander bedrijf?</h3>
              <p>
                Meestal een combinatie van: ander merk (Daikin in plaats van Tosot: +25%), aggregator-marge (+20%),
                langere leidingen meegerekend (+€300), aparte elektragroep (+€250) en langere garantie (+€150).
                Alles bij elkaar zit u snel op 40-50% verschil zonder dat iemand "te duur" is — het zijn gewoon andere producten.
              </p>

              <h3>Mag een installateur zomaar meerwerk in rekening brengen?</h3>
              <p>
                Alleen als het in de offerte benoemd is als "mogelijk meerwerk" of als u expliciet akkoord geeft op
                onvoorziene extra werkzaamheden tijdens installatie. Een eerlijke installateur belt u ter plaatse als hij
                iets onverwachts tegenkomt, vóór hij doorwerkt. Meerwerk achteraf zonder overleg = weigeren te betalen
                is uw recht.
              </p>

              <h3>Is een offerte via Werkspot of Homedeal per definitie duurder?</h3>
              <p>
                Niet per definitie — maar wel in 80% van de gevallen. De installateur moet zijn lead-kosten terugverdienen
                en rekent dat in zijn prijs. In zeldzame gevallen gebruikt een installateur Werkspot alleen als marketing-kanaal
                en biedt hij dezelfde prijs als direct. Vraag daarom altijd óók een directe offerte aan, ter vergelijking.
              </p>

              <h3>Hoeveel offertes moet ik opvragen voor een goede vergelijking?</h3>
              <p>
                Drie is ideaal: dan ziet u de bandbreedte. Twee kan ook als ze sterk verschillen in opzet (bijv. één
                lokale installateur en één landelijke ketenaanbieder). Meer dan vier offertes leidt meestal tot
                keuze-verlamming — de verschillen worden dan vooral nuance.
              </p>

              {/* ==================== CTA FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Klaar voor een transparante offerte van StayCool?</h3>
                <p className="mb-4">
                  Geen aggregator-opslag, uitgesplitste posten, exacte typenummers, eerste jaaronderhoud gratis.
                  We komen vrijblijvend langs, meten uw ruimte, bekijken uw meterkast en leveren binnen 48 uur een
                  helder voorstel. Vergelijkt u het met andere offertes? Graag — u zult zien dat alles klopt.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag transparante offerte aan
                </Link>
              </div>

              {/* ==================== PILLAR LINK ==================== */}
              <div className="not-prose bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Diepere lezing: de complete offerte-checklist</h3>
                <p className="text-gray-700 mb-0">
                  Wilt u niet alleen begrijpen <em>waarom</em> offertes verschillen, maar ook <em>hoe</em> u ze
                  punt-voor-punt vergelijkt? Gebruik onze{' '}
                  <Link to="/blog/airco-offerte-limburg" className="text-orange-700 font-semibold hover:underline">
                    complete offerte-checklist voor Limburg
                  </Link>
                  {' '}— inclusief prijzen per vermogen, een 10-punts vergelijkingsformulier en subsidie-tips.
                </p>
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
                  <Link to="/blog/airco-offerte-aanvragen-checklist" className="text-blue-600 hover:underline">
                    Airco offerte aanvragen: volledige checklist vóór u iets tekent
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
