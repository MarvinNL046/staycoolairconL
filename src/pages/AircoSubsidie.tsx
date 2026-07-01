import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, AlertTriangle, Euro, FileText, Calculator, X, Check } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { aggregateReviews } from '../data/reviews';

const CANONICAL_URL = 'https://staycoolairco.nl/airco-subsidie';

const AircoSubsidie: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco subsidie' },
  ];

  // ─── Eerlijke vergelijking — wat krijg je voor wat ──────────────────────────
  const subsidieVergelijking = [
    {
      type: 'Split-airco (lucht-lucht warmtepomp)',
      isde: false,
      gemeente: 'Soms (per gemeente verschillend)',
      voorbeeld: 'Geen landelijke subsidie — verdient zich terug via energiebesparing (€700-€1.200/jaar)',
    },
    {
      type: 'Lucht-water warmtepomp (centraal verwarmingssysteem)',
      isde: true,
      gemeente: 'Soms',
      voorbeeld: 'ISDE €1.025 startbedrag + €225/kW + €200 label-bonus = €2.150-€3.500',
    },
    {
      type: 'Hybride warmtepomp (lucht-water + behoud gas-CV)',
      isde: true,
      gemeente: 'Soms',
      voorbeeld: 'ISDE €2.125 voor 4 kW unit + extra bij isolatie-combinatie',
    },
    {
      type: 'Bodemwarmtepomp (grondbron)',
      isde: true,
      gemeente: 'Soms',
      voorbeeld: 'ISDE €4.425 voor 6 kW (rendabel bij grote percelen)',
    },
    {
      type: 'Mobiele airco',
      isde: false,
      gemeente: false,
      voorbeeld: 'Geen subsidies — bovendien zelden rendabel (zie ons advies)',
    },
  ];

  const stappenIsde = [
    { stap: 1, titel: 'Kies een ISDE-erkende installateur', detail: 'Voor lucht-water warmtepomp installatie. Wij installeren split-airco\'s — voor lucht-water verwijzen we u naar gespecialiseerde partners.' },
    { stap: 2, titel: 'Check de RVO-apparatenlijst', detail: 'Het toestel moet op de officiële ISDE-apparatenlijst van rvo.nl staan. Erkende installateurs werken alleen met goedgekeurde merken.' },
    { stap: 3, titel: 'Laat installeren binnen 12 maanden', detail: 'Tussen offerte en aanvraag mag maximaal 12 maanden zitten. Liefst dezelfde installatie-week aanvragen.' },
    { stap: 4, titel: 'Verzamel documenten', detail: 'Factuur installatie, betaalbewijs, ondertekend installatiebewijs, foto\'s van geplaatste unit. Bewaar alles digitaal.' },
    { stap: 5, titel: 'Dien aanvraag in via MijnRVO', detail: 'Inloggen met DigiD, formulier invullen, documenten uploaden. Doorlooptijd bij compleet dossier: 8 weken tot uitkering.' },
    { stap: 6, titel: 'Houd budget in de gaten', detail: 'ISDE-budget is jaarlijks beperkt. Bij vroeg-jaars uitputting volgt afkapping. Niet wachten met aanvraag.' },
  ];

  const faqItems = [
    {
      question: 'Krijg ik ISDE-subsidie voor een gewone airco in 2026?',
      answer: 'Nee. ISDE geldt alleen voor lucht-water warmtepompen, hybride warmtepompen, bodemwarmtepompen, warmtepompboilers en zonneboilers (bron: rvo.nl). Een split-airco — technisch een lucht-lucht warmtepomp — staat niet op de ISDE-lijst voor 2026. Sommige installateurs en blogs claimen wél ISDE voor split-airco\'s. Dat klopt niet en kan u tot een afgewezen aanvraag leiden. Wij zijn daar eerlijk over.',
    },
    {
      question: 'Wat krijg ik dan wél als financieel voordeel op een airco-installatie?',
      answer: 'Voor particulieren geen subsidie en geen BTW-korting op een split-airco — laten we daar eerlijk over zijn. Het voordeel zit in de energiebesparing: een A+++ airco bespaart op een Limburgs rijtjeshuis typisch €700-€1.200 per jaar ten opzichte van gas, met een terugverdientijd van 4-6 jaar. Twee dingen die soms wél iets opleveren: (1) gemeentelijke energieregelingen — verschilt per gemeente, check uw gemeentewebsite of energieloket. (2) Bent u ondernemer en gebruikt u de airco zakelijk? Dan kunt u de 21% BTW meestal als voorbelasting terugvragen — overleg met uw boekhouder.',
    },
    {
      question: 'Mijn buurman zegt dat hij wél ISDE kreeg voor zijn airco. Hoe kan dat?',
      answer: 'Drie mogelijkheden. Eén: hij heeft een lucht-water warmtepomp, geen split-airco — die zien er in de buitenunit vaak hetzelfde uit. Twee: hij heeft de subsidie aangevraagd in 2022/2023 toen er korte tijd voor sommige reversibele systemen wel een regeling was. Drie: gemeentelijke regeling, geen ISDE. ISDE 2026 voor split-airco bestaat niet bij RVO — als u niet zeker bent kunt u dit verifiëren op de ISDE-apparatenlijst rvo.nl.',
    },
    {
      question: 'Wat is het verschil tussen lucht-lucht en lucht-water warmtepomp?',
      answer: 'Een lucht-lucht warmtepomp (= moderne split-airco) verwarmt direct de kamerlucht — efficiënt, snel reagerend, geschikt voor één of meerdere ruimtes. Een lucht-water warmtepomp verwarmt water in een buffervat dat naar radiatoren of vloerverwarming gaat — werkt als vervanging voor uw gas-CV, vereist een groter systeem en hogere investering (€8.000-€15.000) maar krijgt wel ISDE. Voor de meeste Limburgse huishoudens met een goed werkende gas-CV is een airco-warmtepomp (zonder ISDE) financieel rendabeler. Zie onze pagina airco-warmtepomp voor de volledige uitleg.',
    },
    {
      question: 'Betaal ik 9% of 21% BTW op een airco-installatie?',
      answer: '21%. Op airco-installatie geldt het standaard BTW-tarief van 21% — er is geen verlaagd 9%-tarief voor airco of lucht-lucht warmtepompen. Het 9%-tarief dat u online tegenkomt, geldt voor isolatiewerk aan woningen ouder dan 2 jaar, niet voor airco. Andere installateurs die "9% BTW" op een airco beloven, zitten fout — op uw factuur hoort 21% te staan. Bent u ondernemer met zakelijk gebruik, dan kunt u die 21% meestal als voorbelasting terugvragen bij de Belastingdienst.',
    },
    {
      question: 'Bestaan er gemeentelijke subsidies in Limburg voor airco-installatie?',
      answer: 'Soms — verschilt per gemeente en wijzigt regelmatig. Voorbeelden die we langskwamen: energiepremies via gemeente Maastricht voor verduurzaming algemeen, regelingen via Heerlen voor mijnwater-aansluiting (niet airco-specifiek). De duidelijkste route: bel uw gemeente-energieloket of zoek "energiesubsidie [stadnaam]" online. Voor specifieke verwijzingen: niet bij ons aan, dat is gemeentewerk.',
    },
    {
      question: 'Kan ik een lucht-water warmtepomp via StayCool laten installeren?',
      answer: 'Wij installeren split-airco\'s en multi-split-systemen — onze kernspecialisatie. Voor een lucht-water warmtepomp (volledig nieuw centraal verwarmingssysteem ter vervanging van gas-CV) verwijzen we naar gespecialiseerde installateurs. Eerlijk advies: in de meeste Limburgse rijtjeshuizen verdient een split-airco-warmtepomp zich sneller terug dan een lucht-water-installatie van €10.000+. We rekenen het door bij de opname.',
    },
    {
      question: 'Wat als ik nu al ISDE heb aangevraagd voor mijn split-airco?',
      answer: 'Helaas — RVO zal de aanvraag afwijzen omdat split-airco\'s niet op de ISDE-apparatenlijst staan. Geen rampscenario: u verliest geen geld, alleen de moeite van de aanvraag. Wat we adviseren: check uw gemeentewebsite op lokale energieregelingen, en houd er rekening mee dat op airco gewoon 21% BTW geldt (geen verlaagd tarief). Heeft u twijfels over de installateur die ISDE beloofde? Vraag schriftelijk waar in het ISDE-reglement het staat. Bij ons werk: geen valse beloftes.',
    },
  ];

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${CANONICAL_URL}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://staycoolairco.nl/' },
          { '@type': 'ListItem', position: 2, name: 'Airco subsidie', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'Article',
        '@id': `${CANONICAL_URL}#article`,
        headline: 'Airco subsidie 2026 — eerlijke uitleg over ISDE en BTW',
        description: 'Krijg je ISDE-subsidie voor een split-airco? Nee — dit bevestigt RVO. En 9% BTW? Dat geldt niet voor airco: het tarief is 21%. Het eerlijke verhaal, met bronnen.',
        url: CANONICAL_URL,
        datePublished: '2026-05-06',
        dateModified: '2026-05-06',
        author: {
          '@type': 'Person',
          name: 'Marvin Smit',
          jobTitle: 'F-gassen + STEK gecertificeerd airco-specialist',
          worksFor: { '@type': 'Organization', name: 'StayCool Airco' },
        },
        publisher: {
          '@type': 'Organization',
          name: 'StayCool Airco',
          url: 'https://staycoolairco.nl',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${CANONICAL_URL}#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <MetaTags
        title="Airco Subsidie 2026 | Eerlijke Uitleg ISDE + BTW | StayCool"
        description="Krijg ik ISDE-subsidie voor een airco in 2026? Nee — RVO bevestigt: split-airco's vallen niet onder ISDE. En 9% BTW geldt niet voor airco: het tarief is 21%. Eerlijk verhaal."
        canonicalUrl={CANONICAL_URL}
        type="article"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco subsidie 2026 — eerlijke uitleg
          </h1>
          <p className="text-xl md:text-2xl text-amber-50 mb-4 max-w-3xl">
            Korte versie: voor een gewone split-airco krijgt u <strong>geen ISDE-subsidie</strong> in 2026 — andere sites claimen dat soms ten onrechte. Ook een verlaagd 9% BTW-tarief geldt <strong>niet</strong> voor airco (dat is voor isolatie); u betaalt gewoon 21%. Wat telt: de energiebesparing, en soms een gemeentelijke regeling.
          </p>
          <p className="text-base text-amber-100 max-w-3xl">
            Hieronder de feiten — zonder valse hoop, met concrete bedragen en bronvermelding naar RVO.
          </p>
        </div>
      </section>

      {/* Author + last-updated */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="text-gray-600">
            <strong className="text-gray-900">Geschreven door:</strong> Marvin Smit, eigenaar StayCool Airco — F-gassen + STEK gecertificeerd
          </div>
          <time dateTime="2026-05-06" className="text-gray-500">Laatste update: 6 mei 2026 (RVO 2026 bedragen)</time>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Op deze pagina</h2>
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="#waarom-niet" className="text-amber-700 hover:underline">Waarom geen ISDE</a>
            <a href="#vergelijking" className="text-amber-700 hover:underline">Welk systeem wel?</a>
            <a href="#btw" className="text-amber-700 hover:underline">BTW op airco (21%)</a>
            <a href="#gemeente" className="text-amber-700 hover:underline">Gemeentelijke regeling</a>
            <a href="#aanvragen" className="text-amber-700 hover:underline">ISDE aanvragen</a>
            <a href="#waarschuwing" className="text-amber-700 hover:underline">Pas op voor</a>
            <a href="#faq" className="text-amber-700 hover:underline">Veelgestelde vragen</a>
          </nav>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

            <p>
              We krijgen elke week telefoontjes van klanten die "even willen weten of er subsidie op de airco zit". Eerlijk antwoord: voor een split-airco — de standaard binnen-en-buitenunit-combinatie waar u waarschijnlijk over nadenkt — geldt sinds 2024 geen ISDE-subsidie meer. RVO bevestigt dit voor 2026: alleen lucht-water warmtepompen, bodemwarmtepompen en hybride systemen krijgen ISDE.
            </p>

            <p>
              Veel sites claimen wel "tot €2.000 subsidie op uw airco". Soms staat dat ook in offertes van andere installateurs. Onze ervaring: dat is gedateerde info uit 2022/2023, of een misinterpretatie. Wie er nu een aanvraag op indient, krijgt een afwijzing van RVO. Daarom: dit verhaal stelt rechtdoor wat wel en niet kan, op basis van de actuele <a href="https://www.rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-2026" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">RVO ISDE-regeling 2026</a>.
            </p>

            <h2 id="waarom-niet" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Waarom krijgt een split-airco geen ISDE?</h2>

            <p>
              Een split-airco is technisch een <strong>lucht-lucht warmtepomp</strong>: hij haalt warmte uit de buitenlucht en geeft die direct af aan de binnenlucht. Energie-efficiënt (SCOP 4-5 voor moderne A+++-units), milieuvriendelijker dan elektrische verwarming, prima oplossing. Maar:
            </p>

            <ul className="space-y-2 ml-6 my-6">
              <li><strong>ISDE is sinds 2024 gefocust op lucht-water</strong> — systemen die water verwarmen voor radiatoren of vloerverwarming. Reden: de overheid wil gasaansluitingen vervangen, en lucht-lucht is een aanvulling, geen vervanging.</li>
              <li><strong>De ISDE-apparatenlijst van RVO</strong> bevat alleen lucht-water units. Split-airco's staan er niet op — een aanvraag wordt automatisch afgewezen.</li>
              <li><strong>EU-emissieregels</strong> — split-airco's met meer dan 3 kg koudemiddel en GWP &gt; 750 zijn extra uitgesloten, juist om milieureden.</li>
            </ul>

            <p>
              Dit betekent niet dat een split-airco financieel onaantrekkelijk is. Een goed gedimensioneerde A+++ unit met SCOP 4,5 verwarmt voor ~€0,07 per kWh warmte — substantieel goedkoper dan gas (€0,12/kWh) en beduidend onder elektrische verwarming. Op een Limburgs rijtjeshuis met €2.400 jaarlijks gasverbruik bespaart u typisch €700-€1.200 per jaar. Geen subsidie nodig om binnen 4-6 jaar terug te verdienen.
            </p>

            <h2 id="vergelijking" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Welk systeem komt wél voor ISDE in aanmerking?</h2>

            <p>
              Hieronder een eerlijke vergelijking — let op: dit is niet wat we verkopen, het is wat geldig is in 2026 volgens RVO.
            </p>

            <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-amber-50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-900">Systeem</th>
                      <th className="text-center p-3 font-semibold text-gray-900">ISDE</th>
                      <th className="text-left p-3 font-semibold text-gray-900 hidden md:table-cell">Voorbeeld bedrag 2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subsidieVergelijking.map((row, i) => (
                      <tr key={i} className={i !== subsidieVergelijking.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="p-3 align-top font-semibold text-gray-900">{row.type}</td>
                        <td className="p-3 align-top text-center">
                          {row.isde ? <Check className="h-5 w-5 text-green-600 inline" /> : <X className="h-5 w-5 text-red-500 inline" />}
                        </td>
                        <td className="p-3 align-top text-gray-700 hidden md:table-cell">{row.voorbeeld}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              <strong>Belangrijke nuance:</strong> wij installeren split-airco's en multi-split — onze specialisatie. Voor een lucht-water warmtepomp (totale gas-CV-vervanging) verwijzen we klanten naar gespecialiseerde partners. We kunnen wél eerlijk doorrekenen welk systeem voor uw situatie financieel het beste werkt — soms is een split-airco zonder subsidie voordeliger dan een lucht-water mét subsidie. Zie onze pagina <Link to="/airco-warmtepomp" className="text-amber-700 underline">over airco als warmtepomp</Link> voor de techniek en het besparingsmodel.
            </p>

            <h2 id="btw" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Let op: geen verlaagd BTW-tarief op airco (het is 21%)</h2>

            <p>
              Een hardnekkig misverstand: dat u op een airco-installatie 9% BTW zou betalen in plaats van 21%. Dat klopt niet. Het verlaagde 9%-tarief geldt in Nederland voor specifiek isolatiewerk aan woningen ouder dan 2 jaar — niet voor de installatie van een airco of lucht-lucht warmtepomp. Op airco-installatie geldt gewoon het standaardtarief van <strong>21% BTW</strong>. Wij rekenen dat ook zo op de offerte — eerlijk, zonder verrassingen achteraf op uw factuur. Komt u een installateur tegen die "9% BTW" op een airco belooft? Vraag dan hoe dat op de factuur onderbouwd wordt — uiteindelijk moet daar 21% staan.
            </p>

            <p>
              Wat wél scheelt: <strong>als u ondernemer bent</strong> en de airco zakelijk gebruikt, kunt u de 21% BTW in de meeste gevallen als voorbelasting terugvragen bij de Belastingdienst. Voor particulieren is dat niet mogelijk. Overleg dit met uw boekhouder of belastingadviseur.
            </p>

            <p>
              En het echte financiële plaatje voor particulieren zit niet in een subsidie of BTW-korting, maar in de <strong>energiebesparing</strong>: een goed gedimensioneerde A+++ split-airco verwarmt voor ~€0,07 per kWh warmte en bespaart op een Limburgs rijtjeshuis typisch €700-€1.200 per jaar ten opzichte van gas. Terugverdientijd zonder subsidie: 4-6 jaar. Zie ons <Link to="/airco-warmtepomp" className="text-amber-700 underline">besparingsmodel bij airco-warmtepomp</Link>.
            </p>

            <h2 id="gemeente" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Gemeentelijke regelingen — soms beschikbaar</h2>

            <p>
              Naast landelijke regelingen bieden sommige Limburgse gemeenten eigen energiepremies. Het beeld is wisselend:
            </p>

            <ul className="space-y-2 ml-6 my-6">
              <li><strong>Niet altijd specifiek voor airco</strong> — meestal generieke verduurzamings-regelingen waar een airco-warmtepomp soms onder valt.</li>
              <li><strong>Bedragen variëren sterk</strong> — van €100 voor energie-advies tot €500-€1.500 voor specifieke verduurzamings-investeringen, afhankelijk van gemeente en jaar.</li>
              <li><strong>Vaak gekoppeld aan inkomen of WOZ</strong> — niet voor iedereen, en soms gericht op huishoudens onder een bepaald inkomen.</li>
              <li><strong>Budgetten zijn beperkt</strong> — wie eerst aanvraagt, krijgt eerst.</li>
            </ul>

            <p>
              <strong>Hoe te checken:</strong> google "energiesubsidie [stadnaam]" of bel het energieloket van uw gemeente. Onze adviezen voor Limburg-gemeenten:
            </p>

            <ul className="space-y-2 ml-6 my-6">
              <li><strong>Maastricht:</strong> via gemeente Maastricht "Stimuleringsregeling duurzame energie" — wisselend per jaar beschikbaar.</li>
              <li><strong>Heerlen:</strong> energieadvies via Mijnstreek-energieloket; geen directe airco-premie maar wel gratis advies-traject.</li>
              <li><strong>Sittard-Geleen, Roermond, Venlo:</strong> via Provincie Limburg of regionale energieloketten.</li>
              <li><strong>Algemene route:</strong> <a href="https://www.energieloket.nl" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">energieloket.nl</a> kent alle regionale regelingen per postcode.</li>
            </ul>

            <p>
              Wat we niet doen: gemeentelijke aanvragen voor u afhandelen. Dat is gemeentewerk, niet ons werkterrein. Wel helpen we met het beantwoorden van de specifiek-technische vragen die de gemeente over uw installatie kan stellen.
            </p>

            <h2 id="aanvragen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">ISDE aanvragen — als u tóch een lucht-water warmtepomp installeert</h2>

            <p>
              Heeft u in plaats van een split-airco een lucht-water warmtepomp gekocht — bijvoorbeeld als gas-CV-vervanging? Dan kunt u wel ISDE krijgen. Het stappenplan:
            </p>

            <div className="bg-white rounded-lg shadow-md my-8 p-6 border border-gray-200">
              <ol className="space-y-4">
                {stappenIsde.map((s) => (
                  <li key={s.stap} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold mr-3">{s.stap}</span>
                    <div>
                      <strong className="text-gray-900">{s.titel}</strong>
                      <p className="text-gray-600 text-sm mt-1">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p>
              Voor het volledige stappenplan met checklist + termijnen: zie onze pagina <Link to="/isde-aanvragen-airco" className="text-amber-700 underline font-semibold">ISDE aanvragen voor warmtepomp</Link>.
            </p>

            <h2 id="waarschuwing" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Pas op voor — drie veelvoorkomende vergissingen</h2>

            <div className="space-y-4 my-8">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  Installateurs die ISDE beloven voor split-airco
                </h3>
                <p className="text-gray-700">
                  Als een installateur in zijn offerte vermeldt "u kunt ISDE-subsidie aanvragen voor deze airco-installatie" — vraag schriftelijke verwijzing naar de specifieke ISDE-categorie. Krijgt u die niet? Het is óf een vergissing van de offerteopsteller, óf gedateerde info uit 2022. Geen reden om de installateur volledig af te schrijven, maar wel om kritisch te zijn op de overige claims in de offerte.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  "U vraagt de subsidie zelf later aan"
                </h3>
                <p className="text-gray-700">
                  Klassieke truc: installateur factureert vol incl. 21% BTW, en zegt "u krijgt €X van de subsidie terug, dus netto valt het mee". In de praktijk komt die subsidie nooit op uw rekening. Bij ons ziet u gewoon de netto prijs incl. 21% BTW — het bedrag in de offerte is wat u betaalt. Lucht-water-installateurs kunnen ISDE direct in de offerte verrekenen — eis dat ook van hen.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  "Gemeente-subsidie €1.500" zonder onderbouwing
                </h3>
                <p className="text-gray-700">
                  Sommige offertes vermelden "gemeentelijke subsidie tot €1.500" als onderdeel van de berekening. Vraag om de naam van de regeling en de aanvraag-link bij de gemeente. Als u die niet binnen 24 uur kunt verifiëren op de gemeentewebsite, is het mogelijk een verzonnen post om de offerte aantrekkelijker te maken. Wij gebruiken alleen verifieerbare regelingen.
                </p>
              </div>
            </div>

            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Veelgestelde vragen over airco subsidie</h2>

            <div className="space-y-4 my-8">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Eerlijke offerte — zonder verzonnen subsidies</h2>
          <p className="text-xl mb-8 text-amber-50">
            Bij ons staat in de offerte wat u écht kunt verwachten: de nette prijs incl. 21% BTW, geen valse ISDE-beloftes, geen "u kunt later aanvragen". We laten zien wat de installatie netto kost, zonder fictieve aftrekposten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
              <Phone className="h-6 w-6 mr-2" />Bel 046 202 1430
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
              <Calculator className="h-6 w-6 mr-2" />Vraag offerte aan
            </Link>
            <Link to="/airco-warmtepomp" className="inline-flex items-center justify-center px-8 py-4 bg-orange-800 text-white font-bold rounded-lg hover:bg-orange-900 transition-colors text-lg">
              Hoe werkt airco-warmtepomp →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoSubsidie;
