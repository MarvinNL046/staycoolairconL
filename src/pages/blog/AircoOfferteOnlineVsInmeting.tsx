import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoOfferteOnlineVsInmeting() {
  return (
    <>
      <MetaTags
        title="Airco offerte online of fysieke inmeting? Wanneer welke kiezen (2026)"
        description="Online airco offerte of fysieke inmeting? Eerlijke vergelijking: wanneer is digitaal voldoende, wanneer is inmeting essentieel, wat mis je online en hoe werk je om aggregator-marges heen."
        keywords="airco offerte online, airco offerte fysieke inmeting, airco offerte vergelijken online, airco inmeting thuis, airco offerte zonder bezoek, werkspot airco, homedeal airco offerte"
        canonicalUrl="https://staycoolairco.nl/blog/airco-offerte-online-vs-inmeting"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco offerte online of fysieke inmeting? Wanneer welke kiezen (2026)",
          description: "Comparison-gids voor airco-offertes: wanneer volstaat een online offerte, wanneer is fysieke inmeting essentieel, wat zijn de trade-offs en hoe vermijd je aggregator-marges van Homedeal en Werkspot.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-offerte-online-vs-inmeting.webp"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Is een online airco offerte bindend?",
            "answer": "Nee. Bijna alle online offertes staan \"onder voorbehoud van inmeting\" of bevatten een clausule over meerwerk. Lees de kleine lettertjes goed: een \"vaste prijs\" online is zelden écht vast. Een fysieke inmeting-offerte is wél bindend voor het bedrag op papier."
            },
            {
            "question": "Hoe lang duurt een fysieke inmeting bij StayCool?",
            "answer": "Gemiddeld 30–45 minuten voor een single-split. Voor multisplit of een complexe woning kan het oplopen tot 60–75 minuten. Je hoeft niks voor te bereiden — we kijken, meten en adviseren. Definitieve offerte volgt binnen 2 werkdagen in je mailbox."
            },
            {
            "question": "Kost een inmeting bij jullie iets?",
            "answer": "Nee, de inmeting is gratis en vrijblijvend. Ook als je uiteindelijk voor een ander kiest. We verdienen aan installaties, niet aan bezoekjes — dus we gaan er niet uren zitten om je te overtuigen. In en uit, heldere offerte, jouw keus."
            },
            {
            "question": "Wat als ik al een online offerte heb en die wil laten checken?",
            "answer": "Dat kan. Veel klanten sturen ons een concurrerende offerte als vergelijkingsmateriaal. We kijken er eerlijk naar: soms zit er een scherpe deal in, vaak missen er elementen (elektrawerk, ISDE-meldcode, lengte koelleiding). Daar is onze offerte-checklist handig bij om zelf mee te kijken."
            },
            {
            "question": "Klaar om de juiste route te kiezen?",
            "answer": "Of je nu eerst een snelle online indicatie wilt of direct een fysieke inmeting — StayCool biedt beide, zonder aggregator-marge. Eén aanspreekpunt, eigen vaste monteurs, prijsgarantie na inmeting."
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
              { label: 'Online offerte vs inmeting' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>11 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Offertes</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco offerte online of fysieke inmeting? Wanneer welke kiezen
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Kort antwoord: <strong>een online airco offerte is voldoende voor simpele, standaard situaties</strong>
                {' '}(één splitunit, eengezinswoning, normale meterkast). Zodra er sprake is van multisplit, een
                monumentale woning, complex elektrawerk of een lastig dakvlak, is <strong>een fysieke inmeting onmisbaar</strong>.
                Hieronder leggen onze monteurs uit wat je wél en níet ziet in een online offerte, waarom aggregator-tools
                vaak onvolledig zijn en hoe je beide routes slim combineert.
              </p>
            </header>

            <figure className="mb-8">
              <img
                src="/images/blog/airco-offerte-online-vs-inmeting.webp"
                alt="Vergelijking airco offerte online versus fysieke inmeting thuis"
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Online offerte of toch liever een monteur over de vloer? Beide hebben hun plek.
              </figcaption>
            </figure>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS ==================== */}
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
                      <td className="py-2 pr-4">Online offerte voldoende voor?</td>
                      <td className="py-2">Enkele splitunit, standaard woning, bekende situatie</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Fysieke inmeting essentieel voor?</td>
                      <td className="py-2">Multisplit, monumenten, vreemde dakvorm, zwaar elektra</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Typische meerwerk-kans bij online offerte</td>
                      <td className="py-2">€250 – €900 bij onverwachte situaties</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Tijd fysieke inmeting StayCool</td>
                      <td className="py-2">30–45 minuten, gratis en vrijblijvend</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Aggregator-marge op online offertes</td>
                      <td className="py-2">15–25% bovenop installateur-prijs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== SECTION 1: ONLINE ==================== */}
              <h2>Online offertes: voor- en nadelen</h2>

              <p>
                Een online airco offerte werkt meestal zo: je vult een formulier in met kamergrootte, woningtype,
                gewenste plaatsing buitenunit en enkele foto's. Binnen 24–48 uur krijg je een prijsindicatie — soms
                meerdere, als je via een aggregator aanvraagt. Dit is snel, laagdrempelig en kost jou geen halve dag
                thuiswerken.
              </p>

              <h3>Wat werkt goed aan online</h3>
              <ul>
                <li><strong>Snel oriënteren</strong>: binnen een dag een grove prijsrange weten.</li>
                <li><strong>Geen druk</strong>: geen verkoper over de vloer die wil dichten.</li>
                <li><strong>Makkelijk meerdere offertes vergelijken</strong>: grove benchmark of je niet wordt overvraagd.</li>
                <li><strong>Goed voor standaardwerk</strong>: rijwoning, 3,5 kW woonkamer, buitenunit op balkon.</li>
              </ul>

              <h3>Waar het mis gaat</h3>
              <ul>
                <li>
                  <strong>Onvolledige informatie</strong>: foto's vangen geen kabeltracé, geen meterkast-situatie en
                  geen geluidsgevoelige buren op.
                </li>
                <li>
                  <strong>Warmtepomp-berekening ontbreekt</strong>: zonder isolatie-inspectie is het juiste vermogen
                  een gok. Te groot = energieverspilling, te klein = continu vol vermogen.
                </li>
                <li>
                  <strong>Meerwerk-risico</strong>: op de installatiedag komt de monteur voor nieuwe verrassingen te
                  staan. Reken €250–€900 meerprijs, soms afzegging.
                </li>
                <li>
                  <strong>Geen persoonlijk advies</strong>: standaard specs in plaats van een systeem afgestemd op
                  jouw leefritme en woning.
                </li>
              </ul>

              {/* ==================== SECTION 2: INMETING ==================== */}
              <h2>Fysieke inmeting: wat gebeurt er en waarom</h2>

              <p>
                Een fysieke inmeting (bij StayCool gratis en vrijblijvend, duurt 30–45 minuten) is geen verkoopgesprek
                van anderhalf uur. Onze monteurs lopen met je mee en kijken concreet naar deze punten:
              </p>

              <div className="not-prose space-y-3 my-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">1. Warmte/koudebelasting per ruimte</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Oppervlakte, raamoriëntatie, isolatiewaarde, hoogte plafond en warmtebelastende apparatuur
                    (tv, server, keuken). Dit bepaalt het juiste kW-vermogen.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">2. Plaatsing binnenunit én buitenunit</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Akoestiek, luchtstroom, esthetiek (monumentaal?), vorstgevoeligheid, afstand tot slaapkamer buren.
                    Op foto's zie je deze afwegingen niet.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">3. Kabel- en leidingtracé</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Waar kunnen we koelleiding én elektra leggen zonder dragende wanden te doorboren? Soms 2 meter
                    verschil = €150 minder installatiekosten.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">4. Elektrische situatie</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Meterkast-capaciteit, aparte groep nodig (verplicht vanaf 5 kW), afstand tot meterkast, aanwezige
                    beveiligingen. Dit is niet in te schatten vanaf een foto.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                  <h4 className="font-bold text-green-900 mb-1">5. Condensafvoer</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Waar kan water weg? In een nieuwbouwwoning vaak simpel; in een bovenverdieping van een vooroorlogse
                    woning soms ingewikkeld met condenspomp nodig (€120 extra).
                  </p>
                </div>
              </div>

              <p>
                Na die 45 minuten krijg je een definitieve offerte met typenummers, vermogens, exacte leidingmeters,
                eventueel elektrawerk en reële oplever­datum. Geen meerwerk, geen verrassingen, geen "oh dat zag ik niet
                op de foto".
              </p>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Twijfel je welke route bij jouw situatie past?</h3>
                <p className="mb-4">
                  Bel kort met onze planner — in 5 minuten weten we of een online offerte volstaat of dat een gratis
                  inmeting slimmer is. Geen verkooppraatjes, gewoon eerlijk advies.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Neem vrijblijvend contact op
                </Link>
              </div>

              {/* ==================== SECTION 3: COMPARISON TABLE ==================== */}
              <h2>Vergelijkingstabel: online offerte vs fysieke inmeting</h2>

              <p>
                Tien criteria waarop beide routes verschillen. Wat voor jou het zwaarst weegt, hangt af van je
                situatie — maar de tabel helpt je kiezen op feiten in plaats van reclame.
              </p>

              <div className="not-prose overflow-x-auto my-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Criterium</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Online offerte</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Fysieke inmeting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Prijs-accuraatheid</strong></td>
                      <td className="border border-gray-300 px-4 py-2">± 15–30% marge</td>
                      <td className="border border-gray-300 px-4 py-2">± 0–5% marge (definitief)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Meerwerk-risico</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Hoog (€250–€900)</td>
                      <td className="border border-gray-300 px-4 py-2">Vrijwel nul</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Snelheid offerte</strong></td>
                      <td className="border border-gray-300 px-4 py-2">24–48 uur</td>
                      <td className="border border-gray-300 px-4 py-2">2–5 werkdagen</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Advies op maat</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Standaardpakket</td>
                      <td className="border border-gray-300 px-4 py-2">Volledig op jouw woning afgestemd</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Vermogensberekening</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Ruwe formule (m² × factor)</td>
                      <td className="border border-gray-300 px-4 py-2">Warmtebelasting incl. isolatie</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Garantie offerte-prijs</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Indicatief, vaak "onder voorbehoud"</td>
                      <td className="border border-gray-300 px-4 py-2">Vast, schriftelijk gegarandeerd</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Geschikt voor multisplit</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Nee — te complex</td>
                      <td className="border border-gray-300 px-4 py-2">Ja, essentieel</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Investering tijd klant</strong></td>
                      <td className="border border-gray-300 px-4 py-2">15 min formulier</td>
                      <td className="border border-gray-300 px-4 py-2">45 min thuis</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Aggregator-marge risico</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Hoog (Homedeal, Werkspot, Zoofy)</td>
                      <td className="border border-gray-300 px-4 py-2">Nul bij directe aanvraag lokaal</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>ISDE-subsidieklaar</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Meldcode vaak vergeten</td>
                      <td className="border border-gray-300 px-4 py-2">Wordt direct meegenomen</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-600 italic">
                Conclusie uit de tabel: online is sneller en laagdrempeliger, fysieke inmeting is nauwkeuriger en
                risicoloos. Bij eenvoudige projecten is dat verschil klein; bij alles wat complexer is, telt het snel op.
              </p>

              {/* ==================== SECTION 4: WHEN ONLINE ==================== */}
              <h2>Wanneer kies je online? 5 scenarios</h2>

              <p>
                Een online offerte is prima als je zeker weet dat jouw situatie standaard is. Deze vijf scenario's zien
                onze monteurs als veilig voor een digitale route:
              </p>

              <ol>
                <li>
                  <strong>Rijwoning tot 2010, standaard 3,5 of 5 kW split</strong>: kamergrootte is bekend, isolatie is
                  gangbaar, buitenunit gaat op achtergevel. Online prijs ligt meestal binnen 10% van de werkelijkheid.
                </li>
                <li>
                  <strong>Appartement met balkon voor buitenunit</strong>: mits de VvE toestemming geeft (belangrijk
                  vooraf checken). Plaatsing is voorspelbaar, meterkast is modern.
                </li>
                <li>
                  <strong>Je hebt al een airco gehad op dezelfde plek</strong>: de bestaande koelleiding, gaten en
                  condensafvoer zijn er al. Vervanging is voor 90% voorspelbaar vanaf foto.
                </li>
                <li>
                  <strong>Nieuwbouw (na 2018)</strong>: strakke isolatie, voorspelbare ruimtes, meterkast op standaard
                  plek. Grote woningen (&gt;150 m²) met multisplit uitgezonderd.
                </li>
                <li>
                  <strong>Oriënterende prijsvergelijking</strong>: je wilt eerst weten of je budget realistisch is
                  voordat je een monteur uitnodigt. Volstrekt legitiem gebruik.
                </li>
              </ol>

              {/* ==================== SECTION 5: WHEN INMETING ==================== */}
              <h2>Wanneer kies je fysieke inmeting? 5 scenarios</h2>

              <p>
                In deze vijf situaties bespaart een fysieke inmeting je vrijwel altijd geld, gedoe en
                meerwerk-verrassingen. Laat je niet verleiden door een "snelle offerte" — de tijd win je niet terug.
              </p>

              <ol>
                <li>
                  <strong>Multisplit voor 2+ ruimtes</strong>: leidingtracés, gedeelde buitenunit-capaciteit en
                  volgorde van verbindingen zijn vakwerk. Een foto mist 80% van de benodigde info.
                </li>
                <li>
                  <strong>Monumentale of vooroorlogse woning</strong>: verboden boorzones, karakteristieke gevels,
                  dikke muren met holle ruimtes. De plaatsingsopties zijn hier zelden standaard.
                </li>
                <li>
                  <strong>Complex elektra</strong>: oude meterkast, bijna vol, 3-fasen nodig voor grotere systemen,
                  aparte groep ontbreekt. Elektrawerk kan €180–€600 aan extra kosten zijn; dit hoort in de offerte.
                </li>
                <li>
                  <strong>Vreemde dakconstructie of schuine muren</strong>: zolderkamer, dakkapel, rieten dak,
                  doorvoer door isolatiepakket. Er zijn hier 5+ plaatsingsvarianten met verschillende prijzen.
                </li>
                <li>
                  <strong>Geluidsgevoelige buren of strenge VvE</strong>: je wilt zekerheid dat de buitenunit binnen
                  de geluidsnormen blijft. Dit vraagt ter plekke afweging van positie en isolatiedempers.
                </li>
              </ol>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Multisplit of complexe situatie?</h3>
                <p className="text-gray-700 mb-4">
                  Voor alles boven één splitunit adviseren onze monteurs een inmeting. 45 minuten van jouw tijd
                  voorkomt honderden euro's aan meerwerk later. De inmeting is bij StayCool altijd gratis — ook als
                  je uiteindelijk voor een andere installateur kiest.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Plan gratis inmeting in
                </Link>
              </div>

              {/* ==================== SECTION 6: AGGREGATOR ==================== */}
              <h2>Het aggregator-probleem met online tools</h2>

              <p>
                De meeste "gratis offertes vergelijken"-sites zijn geen installateurs. Het zijn
                <strong> doorverkoop-platformen</strong>: jij vult een formulier in, zij verkopen jouw aanvraag door
                aan 3–5 aangesloten installateurs, en die installateurs betalen daarvoor een lead-fee. Dat geld komt
                terug in jouw offerte.
              </p>

              <h3>Hoe de marge oploopt</h3>

              <div className="not-prose bg-red-50 border border-red-200 rounded-lg p-5 my-6">
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside m-0">
                  <li><strong>Homedeal / Werkspot / Zoofy</strong>: lead-kosten €45–€120 per aanvraag voor installateur.</li>
                  <li><strong>Conversieratio van lead naar klant</strong>: circa 20–30%. Installateur betaalt dus 3–5× lead-fee per gewonnen klus.</li>
                  <li><strong>Doorberekening in offerte</strong>: 15–25% marge bovenop de werkelijke installatieprijs.</li>
                  <li><strong>Netto resultaat</strong>: op een €2.500 installatie betaal je circa €375–€625 aan aggregator-marge — zonder dat je het ziet.</li>
                </ul>
              </div>

              <p>
                We schreven hier uitgebreider over in onze{' '}
                <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">airco offerte gids voor Limburg</Link>
                {' '}— inclusief hoe je herkent of een offerte via een aggregator loopt (hint: vaak zie je drie offertes
                in dezelfde e-mail, binnen 48 uur, met suspicious ronde bedragen).
              </p>

              <h3>Het alternatief: direct een lokale installateur</h3>

              <p>
                Wie direct bij een lokale installateur aanvraagt, bespaart die marge én krijgt meteen de juiste
                gesprekspartner. Bij StayCool Airconditioning is elke offerte direct — er zit geen lead-platform
                tussen. Je belt, we plannen, we komen langs, je krijgt één definitieve offerte zonder tussenlaag.
              </p>

              {/* ==================== SECTION 7: HYBRID ==================== */}
              <h2>De hybride aanpak: het beste van twee werelden</h2>

              <p>
                Onze monteurs zien in de praktijk een slimme tussenroute die veel klanten niet kennen:
              </p>

              <ol>
                <li>
                  <strong>Stap 1 — Online oriëntatie</strong>: vraag bij 2 partijen een online offerte aan voor een
                  grove prijsrange. Zo weet je of je budget realistisch is.
                </li>
                <li>
                  <strong>Stap 2 — Kies 1 lokale installateur voor fysieke inmeting</strong>: bij voorkeur direct
                  (geen aggregator). Check Google-reviews, F-gassen-certificering en of ze eigen vaste monteurs hebben.
                </li>
                <li>
                  <strong>Stap 3 — Bevestig definitieve offerte</strong>: bij de inmeting krijg je een vaste prijs
                  zonder meerwerk-risico. Dit is de offerte die je tekent.
                </li>
              </ol>

              <p>
                Op deze manier krijg je de snelheid van online (prijsgevoel binnen een dag) én de nauwkeurigheid van
                een fysieke inmeting (geen verrassingen). De online offertes gebruik je als onderhandelingsbasis,
                niet als eindproduct.
              </p>

              {/* ==================== FAQ ==================== */}
              <h2>Veelgestelde vragen</h2>

              <h3>Is een online airco offerte bindend?</h3>
              <p>
                Nee. Bijna alle online offertes staan "onder voorbehoud van inmeting" of bevatten een clausule over
                meerwerk. Lees de kleine lettertjes goed: een "vaste prijs" online is zelden écht vast. Een fysieke
                inmeting-offerte is wél bindend voor het bedrag op papier.
              </p>

              <h3>Hoe lang duurt een fysieke inmeting bij StayCool?</h3>
              <p>
                Gemiddeld 30–45 minuten voor een single-split. Voor multisplit of een complexe woning kan het oplopen
                tot 60–75 minuten. Je hoeft niks voor te bereiden — we kijken, meten en adviseren. Definitieve offerte
                volgt binnen 2 werkdagen in je mailbox.
              </p>

              <h3>Kost een inmeting bij jullie iets?</h3>
              <p>
                Nee, de inmeting is gratis en vrijblijvend. Ook als je uiteindelijk voor een ander kiest. We verdienen
                aan installaties, niet aan bezoekjes — dus we gaan er niet uren zitten om je te overtuigen. In en uit,
                heldere offerte, jouw keus.
              </p>

              <h3>Wat als ik al een online offerte heb en die wil laten checken?</h3>
              <p>
                Dat kan. Veel klanten sturen ons een concurrerende offerte als vergelijkingsmateriaal. We kijken er
                eerlijk naar: soms zit er een scherpe deal in, vaak missen er elementen (elektrawerk, ISDE-meldcode,
                lengte koelleiding). Daar is onze{' '}
                <Link to="/blog/airco-offerte-aanvragen-checklist" className="text-blue-600 hover:underline">offerte-checklist</Link>
                {' '}handig bij om zelf mee te kijken.
              </p>

              {/* ==================== CTA 3 FINAL ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Klaar om de juiste route te kiezen?</h3>
                <p className="mb-4">
                  Of je nu eerst een snelle online indicatie wilt of direct een fysieke inmeting — StayCool biedt
                  beide, zonder aggregator-marge. Eén aanspreekpunt, eigen vaste monteurs, prijsgarantie na inmeting.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag offerte of inmeting aan
                </Link>
              </div>

              {/* ==================== PILLAR LINK ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-8">
                <p className="text-gray-800 m-0">
                  <strong>Verder lezen:</strong> Voor de complete offerte-checklist inclusief beide routes, prijsranges
                  per vermogen en aggregator-waarschuwingen, zie onze{' '}
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline font-semibold">
                    airco offerte gids voor Limburg
                  </Link>. Dit is de pillar-pagina waar dit artikel op voortbouwt.
                </p>
              </div>

              {/* ==================== RELATED ==================== */}
              <div className="not-prose bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">🔗 Andere offerte-cluster pagina\'s</h3>
                <ul className="space-y-2 text-sm">
                  <li>➤ <Link to="/blog/airco-offerte-aanvragen-checklist" className="text-blue-600 hover:underline font-medium">12-punts offerte-checklist</Link> — werk deze door na je keuze online/inmeting</li>
                  <li>➤ <Link to="/blog/waarom-verschillen-airco-offertes" className="text-blue-600 hover:underline font-medium">Waarom verschillen offertes 30-50%?</Link> — belangrijk voor online-offerte-vergelijking</li>
                  <li>➤ <Link to="/blog/multisplit-airco-offerte-wanneer-rendabel" className="text-blue-600 hover:underline font-medium">Multisplit offerte wanneer rendabel?</Link> — multisplit vraagt bijna altijd fysieke inmeting</li>
                  <li>➤ Lokaal: <Link to="/blog/airco-offerte-maastricht" className="text-blue-600 hover:underline">Maastricht</Link>, <Link to="/blog/airco-offerte-heerlen" className="text-blue-600 hover:underline">Heerlen</Link>, <Link to="/blog/airco-offerte-sittard" className="text-blue-600 hover:underline">Sittard</Link></li>
                </ul>
              </div>

              <h2>Gerelateerde artikelen</h2>
              <ul>
                <li>
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                    Airco offerte Limburg 2026: echte prijzen + vergelijkings-checklist (pillar)
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-offerte-aanvragen-checklist" className="text-blue-600 hover:underline">
                    Airco offerte aanvragen: de complete 12-punts checklist
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
