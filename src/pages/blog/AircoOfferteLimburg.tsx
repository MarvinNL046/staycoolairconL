import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoOfferteLimburg() {
  return (
    <>
      <MetaTags
        title="Airco offerte Limburg 2026: echte prijzen + vergelijkings-checklist"
        description="Wat kost een airco inclusief installatie in Limburg in 2026? Eerlijke prijsranges (€1.500-€3.500), checklist voor het vergelijken van offertes en wat te letten op wel/geen aggregator."
        keywords="airco offerte limburg, airco prijzen 2026, airco offerte vergelijken, airco kosten inclusief installatie, airco offerte aanvragen, airco prijs per kw"
        canonicalUrl="https://staycoolairco.nl/blog/airco-offerte-limburg"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco offerte Limburg 2026: echte prijzen + vergelijkings-checklist",
          description: "Een airco inclusief installatie in Limburg kost gemiddeld tussen €1.500 en €3.500 in 2026. Prijzen per vermogen en woningtype, checklist voor het vergelijken van offertes en tips om aggregator-marges te omzeilen.",
          datePublished: "2025-05-10",
          dateModified: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-offerte-limburg-staycool.png"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Is airco ook geschikt om te verwarmen?",
            "answer": "Ja, de meeste airco's functioneren ook als warmtepomp. Ze zijn ideaal voor bijverwarming in voor- en najaar."
            },
            {
            "question": "Hoe lang duurt de installatie?",
            "answer": "Een standaard installatie duurt meestal 4 tot 6 uur. Complexere installaties kunnen tot 2 dagen duren."
            },
            {
            "question": "Moet ik onderhoud laten doen?",
            "answer": "Ja, jaarlijks onderhoud verlengt de levensduur en behoudt het rendement. Dit is vaak ook verplicht voor garantie."
            },
            {
            "question": "Is subsidie beschikbaar?",
            "answer": "Voor een split-airco (ook 'airco met verwarmingsfunctie' of lucht-lucht warmtepomp genoemd) is er geen ISDE-subsidie en geen 9% BTW. ISDE geldt alleen voor lucht-water-, hybride- en bodemwarmtepompen. Wat wél kan: soms een gemeentelijke energieregeling en voor ondernemers BTW-teruggave. De grootste winst zit in de energiebesparing."
            },
            {
            "question": "Kan ik de offerte online aanvragen?",
            "answer": "Ja, bij StayCool kun je eenvoudig via de website een offerte aanvragen, met of zonder bezoek op locatie."
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
              { label: 'Airco offerte Limburg' }
            ]}
          />
          
          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>Bijgewerkt: 18 april 2026</span>
                <span className="mx-2">•</span>
                <span>8 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Prijzen</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco offerte Limburg 2026: echte prijzen + vergelijkings-checklist
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Een airco inclusief installatie in Limburg kost in 2026 gemiddeld tussen de <strong>€1.500 en €3.500</strong>.
                Voor multisplit-systemen reken op €3.000 tot €7.500. De grote verschillen tussen offertes zijn meestal
                te verklaren: omvang van installatiewerk, kwaliteit van onderdelen en of een aggregator tussen zit
                (die 15-25% marge pakt). Hieronder echte prijzen voor 2026 + een checklist om offertes eerlijk te
                vergelijken.
              </p>
            </header>
            
            <figure className="mb-8">
              <img 
                src="/images/blog/airco-offerte-limburg-staycool.png" 
                alt="Airco offerte aanvragen in Limburg" 
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Vraag een vrijblijvende airco offerte aan bij StayCool in Limburg
              </figcaption>
            </figure>
            
            <div className="prose prose-lg max-w-none">
              <h2>Waarom een airco offerte in Limburg aanvragen?</h2>
              <p>
                De zomers in Limburg worden warmer en langer. Een goed werkende airco verhoogt je comfort aanzienlijk. Het aanvragen van een offerte geeft inzicht in de kosten, installatieopties en levertijd.
              </p>
              
              <h2>Wat kost een airco met buitenunit inclusief installatie?</h2>
              <p>
                De prijs voor een split airco inclusief buitenunit en installatie varieert. Dit hangt af van het vermogen (in kW), merk en installatiewerkzaamheden. Gemiddeld kost een standaard 3,5 kW model tussen de €1.800 en €2.200.
              </p>
              
              <table className="min-w-full border-collapse border border-gray-200 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-2 text-left">Type ruimte</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Vermogen (kW)</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Prijs-range 2026 (incl. montage)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Slaapkamer / studeerkamer</td>
                    <td className="border border-gray-200 px-4 py-2">2,5 kW</td>
                    <td className="border border-gray-200 px-4 py-2">€1.500 – €1.900</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Woonkamer klein (20-30 m²)</td>
                    <td className="border border-gray-200 px-4 py-2">3,5 kW</td>
                    <td className="border border-gray-200 px-4 py-2">€1.700 – €2.400</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Woonkamer groot (40-55 m²)</td>
                    <td className="border border-gray-200 px-4 py-2">5,0 kW</td>
                    <td className="border border-gray-200 px-4 py-2">€2.300 – €3.200</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Open keuken-woonkamer</td>
                    <td className="border border-gray-200 px-4 py-2">7,0 kW</td>
                    <td className="border border-gray-200 px-4 py-2">€2.800 – €3.700</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Multisplit 2 ruimtes</td>
                    <td className="border border-gray-200 px-4 py-2">2× units</td>
                    <td className="border border-gray-200 px-4 py-2">€3.000 – €4.500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Multisplit 3-4 ruimtes</td>
                    <td className="border border-gray-200 px-4 py-2">3-4 units</td>
                    <td className="border border-gray-200 px-4 py-2">€4.500 – €7.500</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 italic">
                * Prijsranges inclusief btw, F-gassen-gecertificeerde installatie, koelleidingen tot 5 m, gootwerk
                en eerste jaaronderhoud. <strong>Waarom zo'n brede range?</strong> Verschil zit in merk (Daikin duurder
                dan Toshiba), extra koelleidingen bij moeilijke plaatsing, en of jouw offerte via een aggregator
                komt of direct van een lokale installateur. Zie sectie "aggregator-marges" hieronder.
              </p>
              
              <h2>Wat is de prijs van een airco inclusief montage?</h2>
              <p>
                Montagekosten maken ongeveer 25-35% uit van het totaalbedrag. Bij StayCool Airconditioning is de montage altijd inbegrepen in de offerte. Een gemiddelde installatie duurt 1 werkdag.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                <p className="font-medium">
                  Wist je dat? StayCool Airconditioning biedt altijd een all-in prijs, zonder verborgen kosten.
                  <Link to="/contact" className="text-blue-600 hover:underline ml-1">
                    Vraag direct een offerte aan &rarr;
                  </Link>
                </p>
              </div>
              
              <h2>Factoren die de offerte beïnvloeden</h2>
              
              <h3>Type woning en bereikbaarheid</h3>
              <p>
                Een installatie op een appartement of moeilijk bereikbare gevel verhoogt de kosten. Extra steigers of hoogwerkers zijn dan nodig.
              </p>
              
              <h3>Lengte koelleidingen en elektrawerk</h3>
              <p>
                Standaard is 5-6 meter koelleiding inbegrepen. Meerwerk wordt apart berekend.
              </p>
              
              <h2>Welke merken zijn populair in Limburg?</h2>
              <p>
                In Limburg zien we vooral vraag naar merken zoals:
              </p>
              <ul>
                <li>Daikin</li>
                <li>Mitsubishi Heavy</li>
                <li>LG</li>
                <li>Tosot</li>
              </ul>
              <p>
                Deze merken combineren energiezuinigheid met een stille werking en lange levensduur.
              </p>
              
              <h2>Energieverbruik en kostenbesparing</h2>
              <p>
                Een moderne airco met energielabel A++ verbruikt gemiddeld 0,8 kWh per uur. Bij een elektriciteitsprijs van €0,35/kWh betaal je dus €0,28 per uur. Verwarmen met een airco (warmtepompfunctie) is vaak goedkoper dan gas.
              </p>
              
              <div className="not-prose bg-orange-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Actie: Gratis onderhoud</h3>
                <p className="text-gray-700 mb-4">
                  Wil je exact weten wat een airco kost in jouw situatie? Plan een vrijblijvend adviesgesprek met één van onze specialisten. Nu bij aanschaf van een complete airco installatie: gratis onderhoudsbeurt t.w.v. €179,-!
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Profiteer van deze actie
                </Link>
                <p className="text-xs text-gray-500 mt-2">Actie geldig t/m 30 juni 2025. Vraag naar de voorwaarden.</p>
              </div>
              
              <h2>Verdiept: hoe aggregator-marges jouw offerte beïnvloeden</h2>
              <p>
                Lead-aggregators (Werkspot, Homedeal, Zoofy, Bouwofferte) werken zo: jij vraagt een "gratis offerte",
                zij verkopen jouw aanvraag door aan 3-5 lokale installateurs. Die installateurs betalen <strong>€15-€45
                per lead</strong> aan de aggregator. Om die kosten terug te verdienen, verhogen ze de offerteprijs
                meestal met 8-15%. Plus de aggregator-marge die verschilt per platform (soms tot 25%).
              </p>
              <p>
                Concreet: een installatie die direct zou kosten <strong>€2.200</strong> wordt via een aggregator-route
                <strong>€2.530 - €2.750</strong>. Dat is 15-25% extra voor precies dezelfde monteur, hetzelfde merk,
                dezelfde garantie. Het enige verschil is een extra tussenlaag die meedeelt in jouw investering.
              </p>
              <p>
                Hoe herken je een aggregator-offerte? Vaak is de eerste regel een generiek bedrijf (installateursbedrijf
                met nietszeggende naam) dat vervolgens naar "onze partner" verwijst. Of de inmeting wordt uitbesteed
                aan een monteur die je niet eerder gesproken hebt. Zie onze{' '}
                <Link to="/blog/waarom-verschillen-airco-offertes" className="text-blue-600 hover:underline">
                  volledige uitleg over offerte-verschillen
                </Link>
                {' '}voor meer signalen.
              </p>

              <h2>Rekenvoorbeeld: subsidie op isolatie, niet op de airco</h2>
              <p>
                Belangrijk om eerst helder te hebben: een split-airco (ook &quot;airco met verwarmingsfunctie&quot; of
                lucht-lucht warmtepomp genoemd) krijgt in 2026 <strong>geen ISDE-subsidie</strong>. De ISDE geldt alleen
                voor lucht-water- en hybride warmtepompen, bodemwarmtepompen, warmtepompboilers en zonneboilers.
                Wél kan de <strong>isolatie</strong> die je apart laat uitvoeren voor ISDE in aanmerking komen — en bij
                twee of meer maatregelen binnen 24 maanden verdubbelt dat isolatie-subsidiebedrag. Concreet voor een
                gemiddelde Limburgse situatie:
              </p>

              <table className="min-w-full border-collapse border border-gray-200 my-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-2 text-left">Scenario</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Bruto kosten</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">ISDE (alleen isolatie)</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Netto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Alleen airco (3,5 kW)</td>
                    <td className="border border-gray-200 px-4 py-2">€2.200</td>
                    <td className="border border-gray-200 px-4 py-2">€0 (geen ISDE op airco)</td>
                    <td className="border border-gray-200 px-4 py-2"><strong>€2.200</strong></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Airco + dakisolatie</td>
                    <td className="border border-gray-200 px-4 py-2">€2.200 + €2.400</td>
                    <td className="border border-gray-200 px-4 py-2">€1.040 (op isolatie)</td>
                    <td className="border border-gray-200 px-4 py-2"><strong>€3.560</strong> totaal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Airco + 2× isolatie</td>
                    <td className="border border-gray-200 px-4 py-2">€2.200 + €4.000</td>
                    <td className="border border-gray-200 px-4 py-2">€2.000 (op isolatie)</td>
                    <td className="border border-gray-200 px-4 py-2"><strong>€4.200</strong> totaal</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm text-gray-600 italic">
                Voor de volledige voorwaarden, bedragen en aanvraagprocedure: zie{' '}
                <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                  onze ISDE-uitleg 2026
                </Link>
                {' '}of direct op rvo.nl/isde.
              </p>

              <h2>Waar zit het meerwerk? 8 veelvoorkomende extra's</h2>
              <p>
                Offertes bevatten vaak "standaard" onderdelen, en alles daarbuiten is meerwerk. Belangrijk om te weten
                vóór je tekent:
              </p>
              <ul>
                <li><strong>Extra koelleiding</strong>: meer dan 5 m standaard — €35-€65 per extra meter</li>
                <li><strong>Aparte elektragroep</strong> (verplicht vanaf 5 kW multisplit): €180-€350</li>
                <li><strong>Hoogwerker of steiger</strong> (flatgebouw boven 3e verdieping): €250-€600</li>
                <li><strong>Muurdoorvoer in hardsteen of monument</strong>: €120-€400</li>
                <li><strong>Condensaat-afvoer pomp</strong> (als natuurlijk afvoer niet kan): €150-€350</li>
                <li><strong>Extra binnenunits</strong> in multisplit (meer dan 2-3): €600-€900 per extra unit</li>
                <li><strong>Stekkerwerk/kabelgoot</strong> langere afstanden: €80-€200</li>
                <li><strong>Verwijdering oude airco</strong> (F-gas-recycling): €75-€150</li>
              </ul>
              <p>
                Een goede offerte benoemt al deze items EXPLICIET, ook als ze €0 kosten voor jouw situatie. Een offerte
                die alleen het totaalbedrag geeft zonder uitsplitsing verbergt mogelijk meerwerk dat later meerkost wordt.
              </p>

              <div className="not-prose bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800">🎯 Gebruik deze cluster-gids voor jouw offerte</h3>
                <p className="mb-4 text-sm text-gray-700">
                  Wij hebben meerdere deep-dive artikelen die je helpen bij het aanvragen en vergelijken van offertes:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>➤ <Link to="/blog/airco-offerte-aanvragen-checklist" className="text-blue-600 hover:underline font-medium">12-punts checklist deep-dive</Link> — wat vraag je installateurs?</li>
                  <li>➤ <Link to="/blog/waarom-verschillen-airco-offertes" className="text-blue-600 hover:underline font-medium">Waarom verschillen offertes 30-50%?</Link> — 10 redenen + red flags</li>
                  <li>➤ <Link to="/blog/airco-offerte-online-vs-inmeting" className="text-blue-600 hover:underline font-medium">Online of fysieke inmeting?</Link> — wanneer welke route</li>
                  <li>➤ <Link to="/blog/multisplit-airco-offerte-wanneer-rendabel" className="text-blue-600 hover:underline font-medium">Multisplit offerte wanneer rendabel?</Link> — break-even analyse</li>
                </ul>
                <p className="mt-4 text-sm text-gray-700 mb-0">
                  <strong>Lokale offerte-gidsen</strong>:{' '}
                  <Link to="/blog/airco-offerte-maastricht" className="text-blue-600 hover:underline">Maastricht</Link>
                  {' '}·{' '}
                  <Link to="/blog/airco-offerte-heerlen" className="text-blue-600 hover:underline">Heerlen</Link>
                  {' '}·{' '}
                  <Link to="/blog/airco-offerte-sittard" className="text-blue-600 hover:underline">Sittard</Link>
                </p>
              </div>

              <h2>Waarom kiezen voor StayCool Airconditioning?</h2>
              <p>
                StayCool Airconditioning is dé specialist in Limburg. Wij bieden:
              </p>
              <ul>
                <li>Persoonlijk advies bij u thuis (gratis en vrijblijvend)</li>
                <li>F-gassen-gecertificeerde monteurs, eigen vaste team</li>
                <li>Standaard 3 jaar garantie op onderdelen, uitbreidbaar tot 5 jaar</li>
                <li>Eerste jaar onderhoud inbegrepen bij elke installatie</li>
                <li>Directe offertes zonder aggregator-marge</li>
                <li>Werkgebied heel Limburg, gemiddeld binnen 2 weken ingepland</li>
              </ul>
              
              <h2>Veelvoorkomende fouten bij het aanvragen van een offerte</h2>
              
              <h3>Geen appels met peren vergelijken</h3>
              <p>
                Let goed op of een offerte inclusief of exclusief installatie is. Ook garantie en onderhoud zijn belangrijk.
              </p>
              
              <h3>Te klein of te groot vermogen kiezen</h3>
              <p>
                Een te lichte airco werkt te hard en gaat sneller stuk. Een te zware airco is duurder in aanschaf en verbruik.
              </p>
              
              <h2>Veelgestelde vragen</h2>
              
              <h3>1. Is airco ook geschikt om te verwarmen?</h3>
              <p>
                Ja, de meeste airco's functioneren ook als warmtepomp. Ze zijn ideaal voor bijverwarming in voor- en najaar.
              </p>
              
              <h3>2. Hoe lang duurt de installatie?</h3>
              <p>
                Een standaard installatie duurt meestal 4 tot 6 uur. Complexere installaties kunnen tot 2 dagen duren.
              </p>
              
              <h3>3. Moet ik onderhoud laten doen?</h3>
              <p>
                Ja, jaarlijks onderhoud verlengt de levensduur en behoudt het rendement. Dit is vaak ook verplicht voor garantie.
              </p>
              
              <h3>4. Is subsidie beschikbaar?</h3>
              <p>
                Voor een split-airco (ook &quot;airco met verwarmingsfunctie&quot; of lucht-lucht warmtepomp genoemd) is
                er geen ISDE-subsidie en geen 9% BTW — daarop geldt 21% BTW. ISDE geldt alleen voor lucht-water-,
                hybride- en bodemwarmtepompen. Wat wél kan: soms een gemeentelijke energieregeling en voor ondernemers
                BTW-teruggave. De grootste winst zit in de energiebesparing zelf.
              </p>
              
              <h3>5. Kan ik de offerte online aanvragen?</h3>
              <p>
                Ja, bij StayCool kun je eenvoudig via de website een offerte aanvragen, met of zonder bezoek op locatie.
              </p>
              
              <h2>Offertes vergelijken: 10-punts checklist</h2>
              <p>
                Verschillende installateurs bieden zelden één-op-één dezelfde offerte aan. Gebruik deze checklist
                zodat je appels met appels vergelijkt en niet verrast wordt door onzichtbare meerkosten:
              </p>

              <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
                  <li><strong>Inclusief F-gassen-certificaat?</strong> Verplicht bij elke installatie. Offerte zonder certificaat = illegaal werk én geen garantie.</li>
                  <li><strong>Exacte vermogen en merk/model in offerte?</strong> "Een airco van 3,5 kW" is te vaag. Vraag om typenummer.</li>
                  <li><strong>Lengte koelleidingen inbegrepen?</strong> Standaard 5 m is gangbaar. Elke extra meter: €35-€65.</li>
                  <li><strong>Elektrawerk inbegrepen?</strong> Aparte groep (verplicht vanaf 5 kW) kost €180-€350 extra als niet inbegrepen.</li>
                  <li><strong>Garantie onderdelen + installatie apart?</strong> Minimum: 3 jaar onderdelen. Premium: 5 jaar. Installatiefouten moeten los gegarandeerd zijn.</li>
                  <li><strong>Eerste jaaronderhoud inbegrepen?</strong> Scheelt €85-€120.</li>
                  <li><strong>Eerlijk over subsidie?</strong> Een split-airco krijgt geen ISDE en geen 9% BTW — pas op voor offertes die dat wél beloven. ISDE geldt alleen voor lucht-water/hybride/bodemwarmtepompen.</li>
                  <li><strong>Aggregator of direct?</strong> Werkspot / Homedeal / Zoofy nemen 15-25% marge op de offerte — je betaalt dus meer voor hetzelfde.</li>
                  <li><strong>Opruim- en beschermings-werk inbegrepen?</strong> Boren creëert gips-stof. Fatsoenlijke installateurs schoonmaken of rekenen dit apart.</li>
                  <li><strong>BTW inbegrepen?</strong> Particulieren zien vaak offertes exclusief BTW. 21% verschil = groot.</li>
                </ol>
              </div>

              <h2>⚠️ Waarschuwing: aggregator-marges op offertes</h2>

              <p>
                Sites als <strong>Werkspot, Homedeal en Zoofy</strong> bieden "gratis offertes vergelijken" — maar zij
                leven van het doorverkopen van jouw aanvraag aan installateurs. Die installateurs rekenen die kosten
                door in hun offerte (15-25% opslag). Je betaalt dus niet alleen voor de installatie, maar ook voor
                de aggregator-tussenlaag.
              </p>

              <p>
                <strong>Directe offerte aanvragen bij een lokale installateur</strong> zoals StayCool Airconditioning
                bespaart je die marge. Omdat wij geen aggregator-fees betalen, kunnen wij scherpere prijzen bieden én
                meer persoonlijke service. Zie onze <Link to="/blog/airco-maastricht-complete-gids-2026" className="text-blue-600 hover:underline">Maastricht gids</Link>
                {' '}of <Link to="/werkgebied/heerlen" className="text-blue-600 hover:underline">Heerlen werkgebied</Link>
                {' '}voor lokale kosten.
              </p>

              <h2>Subsidie: wat kan wél en wat niet</h2>
              <p>
                Reken je niet rijk: een split-airco (lucht-lucht warmtepomp) krijgt <strong>geen ISDE</strong> en
                <strong> geen 9% BTW</strong> — daarop geldt gewoon 21% BTW. De <strong>ISDE</strong> is er alleen voor
                lucht-water-, hybride- en bodemwarmtepompen. Wat voor een gewone airco wél kan: soms een gemeentelijke
                energieregeling, en voor ondernemers BTW-teruggave. De grootste winst zit in de energiebesparing zelf
                (terugverdientijd doorgaans 4-6 jaar). Check onze volledige{' '}
                <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">subsidie-uitleg 2026</Link>.
              </p>

              <h2>Extra tips bij het vergelijken</h2>
              <ul>
                <li><strong>Type koelmiddel</strong>: R32 is moderne standaard (lagere GWP). Vermijd R410A-modellen — worden uitgefaseerd.</li>
                <li><strong>COP en SCOP-waardes</strong>: hoger = zuiniger. Minimum COP 3,8 voor koelen, SCOP 4,0 voor verwarmen.</li>
                <li><strong>Energielabel</strong>: A+++ minimum in 2026.</li>
                <li><strong>Geluidsniveau (dB)</strong>: &lt;22 dB voor slaapkamers, &lt;45 dB voor buitenunit.</li>
                <li><strong>Levertermijn</strong>: 2-4 weken normaal. Langer kan betekenen: seizoensprak of merkvoorraad-probleem.</li>
              </ul>
              
              <h2>Wanneer is het beste moment om een airco te laten installeren?</h2>
              <p>
                De drukste maanden zijn mei t/m augustus. Vraag je offerte dus tijdig aan in het voorjaar of najaar om wachttijden te vermijden.
              </p>
              
              <h2>Conclusie: Airco offerte Limburg aanvragen?</h2>
              <p>
                Wil je deze zomer koel blijven in Limburg? Vraag dan tijdig een offerte aan. Een goede airco inclusief installatie kost gemiddeld tussen de €1.800 en €2.500 en biedt verkoeling én besparing op je energierekening. StayCool Airconditioning staat klaar om jou persoonlijk te adviseren.
              </p>
              
              <div className="not-prose bg-blue-600 text-white rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold mb-4">Klaar voor een vrijblijvende offerte?</h3>
                <p className="mb-4">
                  StayCool Airconditioning is dé airco specialist in Limburg. Vraag nu een gratis en vrijblijvende offerte aan voor jouw situatie.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Offerte aanvragen
                  </Link>
                  <Link 
                    to="/products" 
                    className="inline-block border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Bekijk ons aanbod
                  </Link>
                </div>
              </div>
              
              <h3>Gerelateerde artikelen</h3>
              <ul>
                <li>
                  <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">
                    Wat kost 1 uur airco draaien? Stroomkosten 2026 + rekenvoorbeelden
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                    Airco subsidie 2026 Limburg: ISDE-regeling + wijkspecifieke regelingen
                  </Link>
                </li>
                <li>
                  <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                    Beste airco merken 2026: wat onze monteurs in de praktijk zien
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-installateur-limburg-kiezen" className="text-blue-600 hover:underline">
                    Hoe kies je de juiste airco installateur in Limburg?
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-levensduur-wanneer-vervangen" className="text-blue-600 hover:underline">
                    Gemiddelde levensduur airco: wanneer vervangen?
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
