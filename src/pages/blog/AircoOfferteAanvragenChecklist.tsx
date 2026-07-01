import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import MetaTags from '../../components/MetaTags';

export default function AircoOfferteAanvragenChecklist() {
  return (
    <>
      <MetaTags
        title="Airco offerte aanvragen: 12-punts checklist + red flags 2026"
        description="Wat vraag je écht in een airco-offerte? 12-punts checklist met achtergrond per punt, red flags in antwoorden van installateurs en template-vragen die je letterlijk kunt kopiëren."
        keywords="airco offerte aanvragen, wat vraag je in een offerte, airco offerte checklist, airco offerte vergelijken, red flags airco installateur, f-gassen certificaat controleren, airco aanbetaling"
        canonicalUrl="https://staycoolairco.nl/blog/airco-offerte-aanvragen-checklist"
        type="article"
      />

      <SchemaMarkup
        type="Article"
        data={{
          name: "Airco offerte aanvragen: 12-punts checklist + red flag herkennen",
          description: "Deep-dive checklist voor het aanvragen van een airco-offerte: 12 punten uitgebreid toegelicht met context, red flags, template-vragen en wat het kost als je een punt mist.",
          datePublished: "2026-04-18",
          image: "https://staycoolairco.nl/images/blog/airco-offerte-aanvragen-checklist.webp"
        }}
      />
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: [
            {
            "question": "Wat vraag je in een airco-offerte?",
            "answer": "Minimaal deze 12 punten: F-gassen-nummer, typenummer, leidinglengte, elektrawerk, garantie-splitsing, eerste jaaronderhoud, ISDE-meldcode, aggregator-status, opruimwerk, BTW, betalingsvoorwaarden en levertijd. Gebruik de template hierboven als uitgangspunt. Een offerte die deze punten niet beantwoordt is incompleet."
            },
            {
            "question": "Hoeveel offertes moet ik aanvragen?",
            "answer": "Drie is het minimum voor een eerlijke vergelijking: één van een lokale installateur, één via een landelijke keten en één die aanbeveling is van bekende of via Google-zoekresultaten. Méér dan 5 wordt vaak onoverzichtelijk. Zie ook onze gids over het kiezen van een airco-installateur ."
            },
            {
            "question": "Is een mondelinge offerte geldig?",
            "answer": "Juridisch wel, praktisch niet. Zonder schriftelijke offerte met handtekening van beide partijen is alles moeilijk aantoonbaar bij conflict. Vraag altijd om een PDF-offerte met bedrijfsgegevens, KvK-nummer en BTW-nummer. Mondelinge toezeggingen mogen — schriftelijk bevestigd."
            },
            {
            "question": "Hoe lang is een offerte geldig?",
            "answer": "Standaard 30 dagen, soms 14 dagen in hoogseizoen (mei-juli) door koersschommelingen in de valutamarkt die merk-inkoopprijzen beïnvloeden. Staat de geldigheidstermijn niet op de offerte, vraag dit dan expliciet — anders kan de installateur de prijs achteraf \"aanpassen wegens gewijzigde inkoopprijs\"."
            },
            {
            "question": "Deze checklist is onderdeel van onze pillar",
            "answer": "Deze 12-punts checklist staat centraal in onze complete airco offerte gids Limburg 2026 met context per regio, prijsranges per vermogensklasse en uitleg over aggregator-marges. Gebruik deze deep-dive checklist voor de aanvraag-fase en de pillar voor de prijsbepaling-fase."
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
              { label: 'Airco offerte checklist' }
            ]}
          />

          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>18 april 2026</span>
                <span className="mx-2">•</span>
                <span>12 min leestijd</span>
                <span className="mx-2">•</span>
                <span className="text-blue-600">Checklist</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Airco offerte aanvragen: 12-punts checklist + red flag herkennen
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Een airco-offerte van €2.400 kan in werkelijkheid €3.100 worden als je drie verkeerde punten over het
                hoofd ziet. Deze checklist is de dedicated deep-dive bij onze{' '}
                <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                  pillar over airco-offertes in Limburg
                </Link>
                : 12 punten met context, red flags in de antwoorden van installateurs en template-vragen die je
                letterlijk kunt kopiëren-plakken naar je offerte-aanvraag.
              </p>
            </header>

            <figure className="mb-8">
              <img
                src="/images/blog/airco-offerte-aanvragen-checklist.webp"
                alt="Airco offerte aanvragen checklist 2026"
                className="rounded-lg w-full h-auto"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Een serieuze offerte-aanvraag bespaart honderden euro's aan meerwerk achteraf.
              </figcaption>
            </figure>

            <div className="prose prose-lg max-w-none">

              {/* ==================== KEY TAKEAWAYS TABLE ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Top-5 aandachtspunten in één overzicht</h2>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 font-semibold">Aandachtspunt</th>
                      <th className="text-left py-2 font-semibold">Wat het kost als je dit mist</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-200">
                    <tr>
                      <td className="py-2 pr-4">F-gassen-certificaat installateur</td>
                      <td className="py-2">Illegaal werk + geen garantie (claim ~€2.000+)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Exact typenummer in offerte</td>
                      <td className="py-2">"Gelijkwaardig" model = vaak €200–€400 minder kwaliteit</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Koelleidinglengte vastleggen</td>
                      <td className="py-2">Meerwerk €35–€65 per extra meter achteraf</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Aparte elektrische groep</td>
                      <td className="py-2">€180–€350 aan meerwerk + 1 dag vertraging</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">ISDE-meldcode beschikbaar</td>
                      <td className="py-2">€500+ aan misgelopen subsidie</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ==================== SECTION 1: VOORWERK ==================== */}
              <h2>Wat voor informatie heb je nodig VOOR je een offerte aanvraagt?</h2>

              <p>
                Installateurs krijgen dagelijks vage aanvragen als <em>"ik wil een airco voor de woonkamer,
                wat kost dat?"</em>. Het antwoord is dan ook vaag: een prijsrange van €1.500 tot €3.500. Wil je
                een <strong>serieuze, vergelijkbare offerte</strong>, dan moet jij eerst je huiswerk doen. Zo presenteer
                je jezelf als een klant die weet wat hij vraagt — en krijg je binnen 24–48 uur een scherpe offerte
                terug in plaats van een generieke mail.
              </p>

              <h3>De 4 getallen die je paraat moet hebben</h3>

              <div className="not-prose overflow-x-auto my-4">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Gegeven</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Waarom belangrijk</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Hoe meet je dit?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Oppervlakte in m²</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Bepaalt minimaal benodigd kW-vermogen</td>
                      <td className="border border-gray-300 px-4 py-2">Rolmaat: lengte × breedte</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Plafondhoogte</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Vooral relevant boven 2,7 m (extra vermogen)</td>
                      <td className="border border-gray-300 px-4 py-2">Rolmaat verticaal</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2"><strong>Bouwjaar + energielabel</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Slecht isolerend = 30% meer vermogen nodig</td>
                      <td className="border border-gray-300 px-4 py-2">Energielabel.nl (gratis)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2"><strong>Afstand binnen-buitenunit</strong></td>
                      <td className="border border-gray-300 px-4 py-2">Bepaalt leidinglengte + prijsopslag</td>
                      <td className="border border-gray-300 px-4 py-2">Meten langs beoogde kabelroute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Extra info die echt helpt</h3>
              <ul>
                <li><strong>Type woning</strong>: rijwoning, 2-onder-1-kap, vrijstaand, appartement, bovenwoning.</li>
                <li><strong>Plaats binnenunit</strong>: welke wand heb je voor ogen? Foto's meesturen scheelt een bezoek.</li>
                <li><strong>Plaats buitenunit</strong>: tuin, plat dak, gevel, balkon? Bij VvE: is toestemming geregeld?</li>
                <li><strong>Huidige verwarming</strong>: gasketel, hybride, stadsverwarming. Relevant voor ISDE-subsidie.</li>
                <li><strong>Gewenste functionaliteit</strong>: alleen koelen, ook verwarmen, of volledige warmtepomp-vervanging?</li>
                <li><strong>Budget-indicatie</strong>: geef een range. Dit bespaart de installateur tijd en jou irrelevante voorstellen.</li>
              </ul>

              <p>
                <strong>Pro-tip:</strong> maak 3–4 foto's — binnenmuur, beoogde buitenunit-plek, meterkast en
                (bij appartement) het zicht vanuit de tuin op je balkon. Dit bespaart 1 bezoekmoment en vertelt de
                installateur binnen 30 seconden of hij überhaupt het werk wil aannemen.
              </p>

              {/* ==================== CTA 1 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-3">Geen zin om zelf te meten?</h3>
                <p className="mb-4">
                  Onze monteurs komen gratis en vrijblijvend meten, beoordelen de plaatsing en leveren een
                  all-in offerte met álle 12 checklist-punten al ingevuld. Geen verrassingen achteraf.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Vraag gratis offerte-bezoek aan
                </Link>
              </div>

              {/* ==================== SECTION 2: 12-PUNTS CHECKLIST ==================== */}
              <h2>De 12-punts checklist verdiept</h2>

              <p>
                De <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">pillar</Link> geeft
                de 10-punts versie. Hieronder de uitgebreide deep-dive met 2 extra punten (betalingsvoorwaarden en
                levertijd), context per punt, red flags in de antwoorden en een template-vraag per punt die je
                letterlijk kunt kopiëren.
              </p>

              {/* ==================== PUNT 1 ==================== */}
              <h3>1. F-gassen-certificaat: verifieer het nummer</h3>
              <p>
                <strong>Context:</strong> sinds 2015 mag in Nederland alleen een F-gassen-gecertificeerd bedrijf een
                koelsysteem aansluiten. Dit is wettelijk verplicht, wordt gecontroleerd door de NVWA en bij overtreding
                volgt een boete tot €20.500. Belangrijker voor jou: <strong>zonder certificaat vervalt de
                fabrieksgarantie</strong> op de unit — en een compressor-storing in jaar 3 kost dan al snel €800–€1.400.
              </p>
              <p>
                <strong>Red flag:</strong> "Wij werken samen met een gecertificeerde partner" zonder dat je de naam
                of het certificaatnummer krijgt. Dit betekent vrijwel altijd: de monteur die bij jou komt is niet
                gecertificeerd, de papieren worden achteraf door iemand anders ondertekend.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Kunt u in de offerte het F-gassen-certificaatnummer van het
                bedrijf vermelden, én de naam van de monteur die de installatie uitvoert? Ik wil die naam verifiëren
                bij register.fgassen.nl."</em>
              </p>

              {/* ==================== PUNT 2 ==================== */}
              <h3>2. Exact typenummer, bouwjaar en serie</h3>
              <p>
                <strong>Context:</strong> "Een Daikin 3,5 kW" is geen specificatie. Een <em>Daikin FTXM35R</em> is
                iets heel anders dan een <em>Daikin FTXP35N</em> — zelfde vermogen, €300–€500 verschil in aanschaf.
                Ook <em>bouwjaar 2025 vs. 2026</em> maakt uit: uitgefaseerde modellen worden soms als "nieuw" aangeboden
                maar missen de nieuwste COP-verbeteringen en krijgen korter firmware-support.
              </p>
              <p>
                <strong>Red flag:</strong> "gelijkwaardig model" of "vergelijkbaar type" in de offerte. Dit geeft de
                installateur de vrijheid om later een goedkoper model te leveren zonder jouw toestemming. Ook: een
                typenummer zonder modeljaar-suffix (bij Daikin: de laatste letter, R = 2026, N = 2023).
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Graag in de offerte: exact typenummer binnenunit, exact
                typenummer buitenunit, bouwjaar én energielabel. Als later een ander model wordt geleverd, wil ik
                schriftelijke toestemming geven voor de wissel."</em>
              </p>

              {/* ==================== PUNT 3 ==================== */}
              <h3>3. Koelleidinglengte: standaard én prijs per extra meter</h3>
              <p>
                <strong>Context:</strong> de meeste offertes includeren 5 meter koperen koelleiding. In een rijwoning
                is dat meestal genoeg. In een vrijstaand huis of bij plaatsing aan de achterzijde-gevel zit je
                zomaar op 8–12 meter. <strong>Meerwerk kost €35–€65 per meter</strong>, inclusief isolatie, bevestiging
                en koudemiddel-bijvulling.
              </p>
              <p>
                <strong>Red flag:</strong> offerte zonder vermelding van leidinglengte, of "leidingen inbegrepen"
                zonder limiet. Dat laatste klinkt goed maar betekent in praktijk: de installateur rekent achteraf
                alsnog meerwerk omdat "het meer werk was dan gedacht".
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Hoeveel meter koelleiding zit inbegrepen in deze offerte? Wat
                is de prijs per extra meter? Kunt u tijdens het meetbezoek direct vaststellen hoeveel meter ik
                daadwerkelijk nodig heb, zodat dit vooraf op de offerte staat?"</em>
              </p>

              {/* ==================== PUNT 4 ==================== */}
              <h3>4. Elektrawerk: aparte groep of op bestaande?</h3>
              <p>
                <strong>Context:</strong> vanaf 5 kW vermogen adviseert NEN 1010 een aparte groep in de meterkast.
                Vanaf 7 kW of bij een multisplit is dit feitelijk verplicht om overbelasting van je bestaande
                groep te voorkomen. Een nieuwe groep aanleggen kost <strong>€180–€350</strong> afhankelijk van afstand
                meterkast-buitenunit.
              </p>
              <p>
                <strong>Red flag:</strong> "We sluiten aan op een bestaande groep" bij een unit &gt;5 kW, zonder dat
                er iemand in je meterkast heeft gekeken. Dit gaat 2 van de 10 keer fout: de groep klapt uit bij warm
                weer als de airco én de vaatwasser tegelijk draaien. Jij merkt dat drie maanden later.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Wordt de airco op een nieuwe aparte groep aangesloten, of op
                een bestaande? Als bestaande: op welke en welke belasting zit daar nu al op? Graag dit punt uitgebreid
                in de offerte, inclusief kosten installatie groep + aardlekautomaat."</em>
              </p>

              {/* ==================== PUNT 5 ==================== */}
              <h3>5. Garantie: splits onderdelen, arbeid en installatie</h3>
              <p>
                <strong>Context:</strong> garantie is geen monolitisch ding. Er zijn minstens drie lagen:
                fabrieksgarantie op onderdelen (meestal 3–5 jaar), garantie op de compressor (7–10 jaar bij
                premiummerken), én <strong>installatiegarantie</strong> op het werk van de monteur (meestal 2 jaar).
                Deze drie moeten in de offerte apart benoemd worden.
              </p>
              <p>
                <strong>Red flag:</strong> "5 jaar volledige garantie" zonder onderscheid. Dit klinkt goed maar geeft
                geen dekking als de installateur failliet gaat en je naar de fabrikant moet. Fabrikanten geven
                namelijk alleen onderdelen-garantie — de reis- en arbeidskosten (€150–€300 per bezoek) moet jij
                betalen als de installateur er niet meer is.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Splits de garantie in drie delen: (a) fabrieksgarantie onderdelen
                in jaren, (b) compressor-garantie in jaren, (c) installatiegarantie op arbeid in jaren. Wie draagt
                reis- en voorrijkosten binnen die garantietermijnen?"</em>
              </p>

              {/* ==================== PUNT 6 ==================== */}
              <h3>6. Eerste jaar onderhoud inbegrepen?</h3>
              <p>
                <strong>Context:</strong> jaarlijks onderhoud kost €85–€120 en is bij bijna alle fabrikanten
                <strong> verplicht om de garantie in stand te houden</strong>. Sla je een jaar over en klapt de unit
                in jaar 4, dan kan de fabrikant garantie afwijzen. Serieuze installateurs bieden het eerste jaar
                onderhoud gratis mee — dit is een kwaliteitssignaal.
              </p>
              <p>
                <strong>Red flag:</strong> geen enkele vermelding van onderhoud in de offerte. Dit betekent: de
                installateur heeft geen eigen onderhoudsafdeling en ziet jou na installatie nooit meer terug. Als er
                over 3 jaar iets mis gaat, zit je alleen met de fabrikant.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Is de eerste jaarlijkse onderhoudsbeurt inbegrepen? Hoeveel
                kost onderhoud daarna per jaar? Heeft u een eigen onderhoudsafdeling of besteedt u uit?"</em>
                {' '}Bij StayCool is <Link to="/gratis-onderhoud" className="text-blue-600 hover:underline">onderhoud gratis</Link>
                {' '}voor klanten die via ons installeren.
              </p>

              {/* ==================== PUNT 7 ==================== */}
              <h3>7. Eerlijkheid over subsidie</h3>
              <p>
                <strong>Context:</strong> een split-airco (lucht-lucht warmtepomp) krijgt <strong>géén ISDE-subsidie</strong>
                {' '}— ook niet als de airco kan verwarmen — en <strong>geen verlaagd 9% BTW-tarief</strong>. ISDE is alleen
                voor lucht-water/hybride/bodemwarmtepompen; op airco geldt 21% BTW. Andere sites en installateurs
                beloven dit soms ten onrechte.
              </p>
              <p>
                <strong>Red flag:</strong> een offerte die "ISDE tot €500" of "9% BTW" op de airco belooft. Vraag om
                een schriftelijke onderbouwing (de ISDE-categorie of de wettelijke grond). Krijg je die niet, dan
                klopt de belofte niet — en zijn de andere posten ook het dubbelchecken waard.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Ik ga ervan uit dat op deze airco 21% BTW geldt en geen ISDE —
                klopt dat? En zijn er lokale gemeentelijke regelingen die wél van toepassing zijn?" Zie ook{' '}</em>
                <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                  onze eerlijke subsidie-gids 2026
                </Link>.
              </p>

              {/* ==================== PUNT 8 ==================== */}
              <h3>8. Aggregator of direct van installateur?</h3>
              <p>
                <strong>Context:</strong> aanvragen via Werkspot, Homedeal, Zoofy of "offertes-vergelijken"-sites
                kosten jou geld. De aggregator verkoopt je lead voor €40–€95 aan installateurs, die deze kosten
                <strong> plus 15–25% marge</strong> in hun offerte verwerken. Je betaalt dus mee aan het
                reclamemodel van de aggregator.
              </p>
              <p>
                <strong>Red flag:</strong> de installateur bevestigt dat hij via een platform werkt maar "dezelfde
                prijs rekent". Wiskundig onmogelijk — of hij liegt, of hij bezuinigt ergens (koudere leiding, korte
                installatietijd, of goedkopere onderdelen).
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Komt u via een platform zoals Werkspot/Homedeal/Zoofy, of werk
                ik direct met uw bedrijf? Als via platform: hoeveel bedraagt de platform-fee en wordt die in mijn
                offerte verwerkt?"</em>
              </p>

              {/* ==================== PUNT 9 ==================== */}
              <h3>9. Opruim- en beschermwerk</h3>
              <p>
                <strong>Context:</strong> boren in steenmuur/beton voor de koelleiding-doorvoer levert gipsstof en
                puin op. Het plaatsen van een buitenunit op de tuin vraagt om bescherming van tuintegels. Een goede
                installateur brengt folies, schoonmaakt en voert afval af. Een minder goede laat de rotzooi liggen en
                verwacht dat jij zelf opruimt.
              </p>
              <p>
                <strong>Red flag:</strong> "U hoeft niets schoon te maken" als toezegging is prima — maar check of dit
                schriftelijk staat. Mondelinge toezeggingen van de rayon-verkoper verdampen als de onderaannemende
                monteur aankomt.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Is opruim- en beschermwerk inbegrepen: folies op vloer, afzuigen
                boorstof, afvoeren bouwafval en eventuele kitwerk bij gevel-doorvoer? Graag dit apart benoemd in
                de offerte."</em>
              </p>

              {/* ==================== PUNT 10 ==================== */}
              <h3>10. BTW: inclusief of exclusief?</h3>
              <p>
                <strong>Context:</strong> particulieren krijgen offertes meestal inclusief 21% BTW. Bedrijven zien
                vaak exclusief. Een offerte van €2.000 ex. BTW is €2.420 inc. BTW — dat is een groot verschil.
                <strong> Let op: op een airco-installatie geldt gewoon het standaardtarief van 21% BTW — ook als de
                airco kan verwarmen.</strong> Het verlaagde 9%-tarief geldt voor isolatiewerk, niet voor airco of
                lucht-lucht warmtepompen. Een installateur die "9% BTW" op de airco belooft, zit fout.
              </p>
              <p>
                <strong>Red flag:</strong> de totaalprijs staat wel op de offerte maar BTW-percentage is niet
                gespecificeerd — óf er wordt 9% BTW op de airco gerekend. Beide zijn reden om door te vragen; op de
                factuur hoort 21% te staan.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Graag de offerte met het BTW-percentage per regel. Op de
                airco-installatie ga ik uit van 21% — klopt dat?"</em> Bent u ondernemer met zakelijk gebruik? Dan
                kunt u die 21% meestal als voorbelasting terugvragen.
              </p>

              {/* ==================== PUNT 11: NIEUW ==================== */}
              <h3>11. Betalingsvoorwaarden: aanbetaling en eindfactuur</h3>
              <p>
                <strong>Context:</strong> dit is het <strong>meest onderschatte punt</strong> en een van de
                kern-indicatoren voor betrouwbaarheid. Normaal is: 30% aanbetaling bij opdracht, 70% na oplevering.
                Of: €0 aanbetaling, 100% binnen 14 dagen na oplevering. Wie 100% aanbetaling vooraf vraagt — zelfs
                bij een "scherpe prijs" — loopt risico op faillissement of opleverings-conflict.
              </p>
              <p>
                <strong>Red flag 1:</strong> meer dan 50% aanbetaling gevraagd. Wettelijk mag het, praktisch risicovol.
              </p>
              <p>
                <strong>Red flag 2:</strong> aanbetaling naar een persoonlijke rekening of ZZP-rekening die niet op
                naam van het bedrijf uit het handelsregister staat. Check de KvK-naam en IBAN met een onafhankelijke
                bron.
              </p>
              <p>
                <strong>Red flag 3:</strong> geen schriftelijk contract of opdrachtbevestiging met de
                aanbetalings-afspraken. Mondelinge afspraken zijn juridisch geldig maar in conflict onhandig.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Welk percentage aanbetaling vraagt u, wanneer, en naar welke
                tenaamgestelde bankrekening? Welk percentage na oplevering? Is er een eindfactuur met
                14 dagen-betalingstermijn ná officiële oplevering en acceptatie?"</em>
              </p>

              {/* ==================== PUNT 12: NIEUW ==================== */}
              <h3>12. Levertijd, planning en weer-voorbehoud</h3>
              <p>
                <strong>Context:</strong> gangbare levertijd in 2026 is 2–4 weken, bij seizoenspiek (mei-juli) kan
                dit oplopen tot 8 weken. Een realistische installateur zegt dat ook. <strong>Wees wantrouwig bij
                beloftes van "deze week nog"</strong> in juni — dat betekent ofwel een onderaannemer met gaten in
                de planning (minder betrouwbaar), ofwel voorraad die al een seizoen op de plank ligt.
              </p>
              <p>
                <strong>Red flag:</strong> geen weer-voorbehoud in de offerte. Koperen leidingen bij vorst solderen
                gaat niet goed, en een buitenunit plaatsen bij zware regen is onveilig. Een goede offerte heeft een
                clausule voor verplaatsing bij extreem weer zonder boete.
              </p>
              <p>
                <strong>Template-vraag:</strong> <em>"Wat is uw huidige levertijd van opdrachtbevestiging tot
                installatie? Krijg ik een datumoptie binnen 7 werkdagen? Wat is de regeling bij weersverplaatsing
                van mijn kant of uw kant?"</em>
              </p>

              {/* ==================== CTA 2 ==================== */}
              <div className="not-prose bg-white border-2 border-blue-500 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Deze 12 punten in één offerte ontvangen?</h3>
                <p className="text-gray-700 mb-4">
                  Bij StayCool krijg je standaard een offerte waarin alle 12 checklist-punten zijn verwerkt —
                  F-gassen-nummer, typenummer, leidinglengte, BTW-splitsing, betalingsvoorwaarden, alles. Geen verrassingen
                  achteraf, geen kleine lettertjes.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vraag complete offerte aan
                </Link>
              </div>

              {/* ==================== SECTION: RED FLAGS ==================== */}
              <h2>Red flags in antwoorden — vermijd deze installateurs</h2>

              <p>
                Na 10+ jaar in het vak kennen onze monteurs de klassieke antwoorden van minder serieuze
                concurrenten. Als je een of meer van deze dingen hoort, overweeg een andere aanbieder:
              </p>

              <div className="not-prose space-y-4 my-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                  <h4 className="font-bold text-red-900 mb-1">"We regelen het wel op locatie"</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Uitgeschreven: "ik schat nu maar wat en als het anders uitpakt wordt jij achteraf verrast met
                    meerwerk". Vraag écht concrete getallen, ook als ze een schatting zijn.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                  <h4 className="font-bold text-red-900 mb-1">"Subsidies regelt u zelf met de overheid"</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Kenmerkt een installateur die óf het ISDE-systeem niet kent óf geen zin heeft in de administratie.
                    Serieuze installateurs helpen met meldcode én aanvraagformulier.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                  <h4 className="font-bold text-red-900 mb-1">"Die garantie geeft de fabrikant, niet wij"</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Dit klopt voor onderdelen, maar installatiegarantie moet de installateur wél geven. Als hij dit
                    wegschuift, accepteert hij geen verantwoordelijkheid voor zijn eigen werk.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                  <h4 className="font-bold text-red-900 mb-1">"100% aanbetaling voor de beste prijs"</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Een van de duidelijkste signalen van cashflow-problemen. Bedrijven die gezond zijn hebben geen
                    100% aanbetaling nodig om spullen te bestellen. Loop weg.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                  <h4 className="font-bold text-red-900 mb-1">"Typenummer heeft toch geen zin, allemaal hetzelfde"</h4>
                  <p className="text-sm text-gray-700 m-0">
                    Airco's zijn net zo min "allemaal hetzelfde" als auto's hetzelfde zijn. Een installateur die dit
                    zegt, verkoopt waarschijnlijk incourant voorraad. Vraag specifiek model en modeljaar.
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                  <h4 className="font-bold text-red-900 mb-1">"Contant betalen is goedkoper"</h4>
                  <p className="text-sm text-gray-700 m-0">
                    BTW-fraude. Illegaal. Bij gebrek komt er ook geen factuur = geen garantie = geen ISDE-subsidie
                    = geen verzekeringsdekking bij schade. Altijd weigeren.
                  </p>
                </div>
              </div>

              {/* ==================== SECTION: TEMPLATE ==================== */}
              <h2>Template-vragen die je kunt kopiëren naar je offerte-aanvraag</h2>

              <p>
                Je hoeft het wiel niet opnieuw uit te vinden. Hieronder een complete template die je 1-op-1 kunt
                kopiëren naar het aanvraagformulier of de e-mail naar de installateur. Vul eigen gegevens in,
                stuur dit naar 2–3 installateurs en vergelijk de offertes met deze 12-punts checklist.
              </p>

              <div className="not-prose bg-gray-50 border border-gray-300 rounded-lg p-6 my-6 font-mono text-sm whitespace-pre-wrap text-gray-800">
{`Beste [installateur],

Ik wil een offerte aanvragen voor een airco-installatie met de volgende
specificaties:

WONING
- Adres / plaatsnaam: [...]
- Type woning: [rijwoning / 2-onder-1-kap / vrijstaand / appartement]
- Bouwjaar: [...]
- Energielabel: [...]
- Huidige hoofdverwarming: [gas / hybride / warmtepomp / anders]

RUIMTE
- Ruimte: [woonkamer / slaapkamer / ...]
- Oppervlakte: [...] m²
- Plafondhoogte: [...] m
- Gewenste functionaliteit: [alleen koelen / koelen + verwarmen]

PLAATSING
- Beoogde plek binnenunit: [wand / foto bijgevoegd]
- Beoogde plek buitenunit: [tuin / plat dak / balkon]
- Geschatte leidinglengte binnen-buiten: [...] m
- VvE-toestemming (indien appartement): [geregeld / n.v.t.]

BUDGET-INDICATIE: € [...] – € [...]

Graag in de offerte:
1. F-gassen-certificaatnummer bedrijf + naam monteur
2. Exact typenummer binnen- en buitenunit + modeljaar + energielabel
3. Inbegrepen koelleidinglengte + prijs per extra meter
4. Aparte elektrische groep ja/nee, inclusief kosten
5. Garantie gesplitst: onderdelen, compressor, installatie (in jaren)
6. Eerste jaar onderhoud inbegrepen ja/nee + prijs daarna
7. ISDE-meldcode + verwachte subsidiebedrag
8. Aggregator/platform-fee ja/nee
9. Opruim- en beschermwerk inbegrepen
10. BTW-percentage per regel — op airco-installatie hoort 21% te staan (geen verlaagd 9%-tarief)
11. Aanbetalingspercentage + tenaamgestelde bankrekening
12. Levertijd opdracht-installatie + weer-voorbehoud

Graag ontvang ik de offerte binnen 7 werkdagen.

Met vriendelijke groet,
[Naam]`}
              </div>

              <p>
                Gebruik deze template bij minstens 3 installateurs. Je zult merken dat de response-tijd, de
                volledigheid van de offerte en de bereidheid om op punt-voor-punt te antwoorden dramatisch verschilt
                — en dat is exact de informatie die je nodig hebt om een keuze te maken.
              </p>

              {/* ==================== CTA 3 ==================== */}
              <div className="not-prose bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg my-10">
                <h3 className="text-2xl font-bold mb-3">Stuur deze template gerust naar StayCool</h3>
                <p className="mb-4">
                  Wij beantwoorden alle 12 punten schriftelijk in onze offerte. Als installateur in Limburg sinds
                  2013 werken we direct met klanten zonder aggregator, met vast team en eigen onderhoudsafdeling.
                  Gratis meetbezoek, antwoord binnen 48 uur.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Stuur je offerte-aanvraag
                </Link>
              </div>

              {/* ==================== FAQ ==================== */}
              <h2>Veelgestelde vragen</h2>

              <h3>Wat vraag je in een airco-offerte?</h3>
              <p>
                Minimaal deze 12 punten: F-gassen-nummer, typenummer, leidinglengte, elektrawerk, garantie-splitsing,
                eerste jaaronderhoud, ISDE-meldcode, aggregator-status, opruimwerk, BTW, betalingsvoorwaarden
                en levertijd. Gebruik de template hierboven als uitgangspunt. Een offerte die deze punten niet
                beantwoordt is incompleet.
              </p>

              <h3>Hoeveel offertes moet ik aanvragen?</h3>
              <p>
                Drie is het minimum voor een eerlijke vergelijking: één van een lokale installateur, één via een
                landelijke keten en één die aanbeveling is van bekende of via Google-zoekresultaten. Méér dan 5
                wordt vaak onoverzichtelijk. Zie ook onze{' '}
                <Link to="/blog/airco-installateur-limburg-kiezen" className="text-blue-600 hover:underline">
                  gids over het kiezen van een airco-installateur
                </Link>.
              </p>

              <h3>Is een mondelinge offerte geldig?</h3>
              <p>
                Juridisch wel, praktisch niet. Zonder schriftelijke offerte met handtekening van beide partijen is
                alles moeilijk aantoonbaar bij conflict. Vraag altijd om een PDF-offerte met bedrijfsgegevens,
                KvK-nummer en BTW-nummer. Mondelinge toezeggingen mogen — schriftelijk bevestigd.
              </p>

              <h3>Hoe lang is een offerte geldig?</h3>
              <p>
                Standaard 30 dagen, soms 14 dagen in hoogseizoen (mei-juli) door koersschommelingen in de
                valutamarkt die merk-inkoopprijzen beïnvloeden. Staat de geldigheidstermijn niet op de offerte,
                vraag dit dan expliciet — anders kan de installateur de prijs achteraf "aanpassen wegens gewijzigde
                inkoopprijs".
              </p>

              {/* ==================== PILLAR LINK ==================== */}
              <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deze checklist is onderdeel van onze pillar</h3>
                <p className="text-gray-700 mb-3">
                  Deze 12-punts checklist staat centraal in onze{' '}
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline font-semibold">
                    complete airco offerte gids Limburg 2026
                  </Link>
                  {' '}met context per regio, prijsranges per vermogensklasse en uitleg over aggregator-marges.
                  Gebruik deze deep-dive checklist voor de <em>aanvraag-fase</em> en de pillar voor de
                  <em> prijsbepaling-fase</em>.
                </p>
              </div>

              {/* ==================== RELATED ==================== */}
              <div className="not-prose bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">🔗 Andere offerte-cluster pagina\'s</h3>
                <ul className="space-y-2 text-sm">
                  <li>➤ <Link to="/blog/waarom-verschillen-airco-offertes" className="text-blue-600 hover:underline font-medium">Waarom verschillen offertes 30-50%?</Link> — 10 redenen + red flags</li>
                  <li>➤ <Link to="/blog/airco-offerte-online-vs-inmeting" className="text-blue-600 hover:underline font-medium">Online offerte of fysieke inmeting?</Link> — welke route wanneer</li>
                  <li>➤ <Link to="/blog/multisplit-airco-offerte-wanneer-rendabel" className="text-blue-600 hover:underline font-medium">Multisplit offerte wanneer rendabel?</Link> — break-even analyse</li>
                  <li>➤ Lokaal: <Link to="/blog/airco-offerte-maastricht" className="text-blue-600 hover:underline">Maastricht</Link>, <Link to="/blog/airco-offerte-heerlen" className="text-blue-600 hover:underline">Heerlen</Link>, <Link to="/blog/airco-offerte-sittard" className="text-blue-600 hover:underline">Sittard</Link></li>
                </ul>
              </div>

              <h2>Verder lezen</h2>
              <ul>
                <li>
                  <Link to="/blog/airco-offerte-limburg" className="text-blue-600 hover:underline">
                    Airco offerte Limburg 2026: echte prijzen + vergelijkings-checklist (pillar)
                  </Link>
                </li>
                <li>
                  <Link to="/blog/beste-airco-merken-2026" className="text-blue-600 hover:underline">
                    Beste airco merken 2026: wat onze monteurs in de praktijk zien
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-installateur-limburg-kiezen" className="text-blue-600 hover:underline">
                    Hoe kies je de juiste airco-installateur in Limburg?
                  </Link>
                </li>
                <li>
                  <Link to="/blog/wat-kost-1-uur-airco-draaien" className="text-blue-600 hover:underline">
                    Wat kost 1 uur airco draaien? Stroomkosten 2026
                  </Link>
                </li>
                <li>
                  <Link to="/blog/airco-subsidie-2026-limburg" className="text-blue-600 hover:underline">
                    Airco subsidie 2026 Limburg: ISDE-regeling uitgelegd
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
