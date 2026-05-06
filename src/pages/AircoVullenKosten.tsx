import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertTriangle, Phone, TrendingDown, Calculator } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { aggregateReviews } from '../data/reviews';

const CANONICAL_URL = 'https://staycoolairco.nl/airco-vullen-kosten';

const AircoVullenKosten: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/airco-service' },
    { label: 'Airco bijvullen', path: '/airco-bijvullen' },
    { label: 'Kosten' },
  ];

  // Prijstabel: per type koudemiddel + variabelen
  const prijsTabel = [
    { label: 'Lekdetectie + diagnose', prijs: 'Vanaf €149', uitleg: 'UV-tracer, drukmeting, elektronische detector' },
    { label: 'Bijvulling R32 (single-split tot 3,5 kW)', prijs: '€175 – €275', uitleg: 'Inclusief koudemiddel + vacuümtrekken + drukcontrole' },
    { label: 'Bijvulling R410A (single- of multi-split)', prijs: '€225 – €375', uitleg: 'R410A wordt uitgefaseerd, prijs koudemiddel stijgt jaarlijks' },
    { label: 'Bijvulling R407C (oudere systemen)', prijs: '€275 – €425', uitleg: 'Lastig leverbaar koudemiddel; vervanging vaak voordeliger' },
    { label: 'Lekreparatie + bijvulling combinatie', prijs: '€350 – €650', uitleg: 'Lek lokaliseren, repareren, vacumeren, bijvullen + 1 jaar garantie' },
    { label: 'Bijvulling VRF-systeem (zakelijk, tot 5 kg)', prijs: '€450 – €1.200', uitleg: 'Inclusief verplichte logbook-registratie' },
  ];

  const variabelen = [
    {
      titel: 'Type koudemiddel',
      detail: 'R32 is goedkoper dan R410A. R410A wordt uitgefaseerd waardoor de marktprijs jaarlijks 8-15% stijgt. R407C is moeilijk leverbaar, R22 is verboden — bij die laatste tweede is vervanging vaak goedkoper dan bijvulling.',
      impact: '€50 – €150',
    },
    {
      titel: 'Hoeveelheid koudemiddel',
      detail: 'Een single-split heeft typisch 0,5-1,5 kg, multi-split 1,5-3 kg, en VRF/VRV-systemen 4-15 kg. Per kilo R32 rekent u op €60-€90, R410A op €80-€120 (peil 2026).',
      impact: '€30 – €1.000+',
    },
    {
      titel: 'Lekdetectie inbegrepen of niet',
      detail: 'Bij goedkope vergelijkingsplatforms staat lekdetectie zelden in de prijs. Wij doen lekdetectie altijd standaard. Reden: zonder lekdetectie staat u over zes weken weer aan de beurt — twee keer betalen.',
      impact: '€75 – €150',
    },
    {
      titel: 'Lekreparatie kosten',
      detail: 'Een flare-verbinding opnieuw afdichten: €50-€100. Een gescheurde leiding lassen of vervangen: €150-€300. Een afdichting in de buitenunit: €100-€200. Bij grote lekken (compressor) kan dit oplopen — dan is vervanging meestal voordeliger.',
      impact: '€50 – €500',
    },
    {
      titel: 'Voorrijkosten',
      detail: 'Bij ons in de offerte verrekend in heel Limburg — geen losse voorrijkosten in onze regio. Andere bedrijven rekenen vaak €30-€60 extra voor afstanden boven 25 km.',
      impact: '€0 – €60',
    },
    {
      titel: 'Spoed of plannen',
      detail: 'Ingepland binnen 1-2 weken: standaard tarief. Spoed binnen 24 uur (bv. compressor draait al door op een hete dag): meerprijs van €50-€100.',
      impact: '€0 – €100',
    },
  ];

  const faqItems = [
    {
      question: 'Wat is de gemiddelde prijs voor airco bijvullen in 2026?',
      answer: 'Voor een R32 single-split rekent u op €175-€275 all-in incl. BTW bij ons (StayCool Airco, Limburg). Op de bredere markt zien we prijzen vanaf €120 voor "alleen bijvullen zonder lekdetectie" tot €375 voor R410A multi-split. Lekreparatie + bijvulling samen: €350-€650. Exact bedrag staat altijd in de offerte voordat we beginnen.',
    },
    {
      question: 'Waarom zit er zo veel verschil tussen "vanaf €65" en €275 prijzen?',
      answer: 'Drie hoofdredenen. Eén: bij goedkope prijzen zit lekdetectie er niet in — u betaalt alleen het bijvullen, en staat over enkele weken weer aan de beurt omdat het lek niet is gevonden. Twee: bij ons zit vacuümtrekken altijd in de prijs (essentieel voor compressor-bescherming), bij goedkope services regelmatig niet. Drie: vergelijkings-platforms werken met onderaannemers zonder garantie — wij komen zelf, geven 1 jaar garantie op het werk.',
    },
    {
      question: 'Goedkoop airco bijvullen — kan dat ook bij StayCool?',
      answer: 'Eerlijk antwoord: nee. Onze instapprijs is €175 voor R32. Onder dat tarief kunnen we de F-gassen-procedure niet uitvoeren zoals het hoort (vacuümtrekken, drukcontrole, fabrieksspec). Wat we wél doen: bij de opname rekenen we voor of bijvullen of vervangen voordeliger is — soms is een nieuwe unit van €1.600 binnen 4 jaar terugverdiend tegenover steeds bijvullen op een lekkend ouder systeem.',
    },
    {
      question: 'Wanneer is vervangen goedkoper dan bijvullen?',
      answer: 'Drie scenario\'s: (1) systeem is ouder dan 10 jaar én heeft een groot lek — reparatie + bijvulling van €600+ op een unit die toch op vervanging staat is geld weggooien; (2) R22-systeem (vóór 2010) — koudemiddel verboden, kan niet meer; (3) compressor-defect, want een nieuwe compressor kost €600-€1.000 plus arbeid. Een nieuwe single-split installatie begint bij €1.600 all-in en heeft betere SCOP — terugverdientijd 4-6 jaar via lager stroomverbruik.',
    },
    {
      question: 'Zit BTW in de prijs?',
      answer: 'Ja, al onze prijzen zijn all-in incl. BTW. Voor woningen ouder dan 2 jaar geldt 9% verlaagd BTW-tarief op installatie-werkzaamheden, voor jongere woningen 21%. Voor zakelijke klanten kunt u BTW terugvragen.',
    },
    {
      question: 'Welke kosten kan ik niet voorzien?',
      answer: 'Bij een eerlijke offerte achteraf zijn er geen verrassingen. Wij benoemen alle posten op de offerte: lekdetectie, lekreparatie, koudemiddel, vacumeren, drukcontrole, NEa-registratie. Mogelijke uitzonderingen die we vooraf benoemen: extra leidinglengte (~€20-€40/m boven 5 m), hak- en breekwerk in dragende muur, hoogwerker bij verdieping 3+. Komen die aan de orde, krijgt u een meeroffert vóór we starten — geen meerwerk-verrassingen.',
    },
    {
      question: 'Krijg ik een factuur of bon?',
      answer: 'Altijd een factuur op naam, met BTW-specificatie en omschrijving van het werk. Voor zakelijke klanten met BTW-nummer. Voor particulieren is de factuur tegelijk de garantiebewijs — bewaar hem voor de 1 jaar werk-garantie en de fabrieksgarantie op de unit zelf.',
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
          { '@type': 'ListItem', position: 2, name: 'Service', item: 'https://staycoolairco.nl/airco-service' },
          { '@type': 'ListItem', position: 3, name: 'Airco bijvullen', item: 'https://staycoolairco.nl/airco-bijvullen' },
          { '@type': 'ListItem', position: 4, name: 'Kosten', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${CANONICAL_URL}#service`,
        serviceType: 'Airco bijvullen kosten',
        name: 'Airco bijvullen kosten en prijsindicatie',
        description: 'Volledige kosten-uitsplitsing voor airco bijvullen in Limburg. Per type koudemiddel, all-in incl. BTW. Lekdetectie inbegrepen.',
        url: CANONICAL_URL,
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://staycoolairco.nl/#organization',
          name: 'StayCool Airco',
          telephone: '+31462021430',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: aggregateReviews.averageRating.toString(),
            reviewCount: aggregateReviews.totalReviews.toString(),
            bestRating: '5',
          },
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '149',
          highPrice: '1200',
          offerCount: '6',
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
        title="Airco Vullen Kosten 2026 | Per Koudemiddel | StayCool Limburg"
        description="Airco vullen kosten 2026: R32 vanaf €175, R410A €225-€375, lekreparatie €350-€650. All-in incl. BTW. Volledige uitsplitsing per koudemiddel — eerlijke richtprijzen."
        canonicalUrl={CANONICAL_URL}
        type="service"
        serviceType="Airco vullen kosten"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco vullen kosten 2026 — eerlijke richtprijzen
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Volledige kosten-uitsplitsing per type koudemiddel. R32 vanaf €175 all-in incl. BTW. Lekdetectie standaard inbegrepen — geen "vanaf €65" zonder context.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              <Calculator className="h-5 w-5 mr-2" />Vraag offerte aan
            </Link>
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="h-5 w-5 mr-2" />Bel direct: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* Author + last-updated */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="text-gray-600">
            <strong className="text-gray-900">Geschreven door:</strong> Marvin Smit, eigenaar StayCool Airco — F-gassen + STEK gecertificeerd
          </div>
          <time dateTime="2026-05-06" className="text-gray-500">Laatste update: 6 mei 2026</time>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-sky-50 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Op deze pagina</h2>
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="#prijstabel" className="text-sky-700 hover:underline">Prijstabel 2026</a>
            <a href="#variabelen" className="text-sky-700 hover:underline">Wat bepaalt de prijs</a>
            <a href="#vergelijken" className="text-sky-700 hover:underline">Vergelijken op prijs</a>
            <a href="#besparen" className="text-sky-700 hover:underline">Hoe te besparen</a>
            <a href="#faq" className="text-sky-700 hover:underline">Veelgestelde vragen</a>
          </nav>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Eerlijke vraag: <strong>wat kost airco bijvullen écht?</strong> Op vergelijkers ziet u prijzen vanaf €65 staan. In de praktijk betaalt vrijwel niemand dat bedrag — want zonder lekdetectie staat u over zes weken weer aan de beurt, en zonder vacuümtrekken sloopt u uw compressor binnen een seizoen. Hieronder de richtprijzen 2026 voor StayCool Airco in Limburg, met uitleg waarom we wat rekenen en wanneer vervangen voordeliger is.
            </p>

            <p>
              Alle bedragen zijn <strong>all-in incl. BTW</strong> en bevatten lekdetectie, koudemiddel, vacuümtrekken, drukcontrole volgens fabrieksspec, NEa-registratie én 1 jaar garantie op het werk. Wat in de offerte staat is wat u betaalt — geen meerwerk-verrassingen achteraf.
            </p>

            <h2 id="prijstabel" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Prijstabel 2026 per service-type</h2>

            <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-sky-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-900">Service</th>
                      <th className="text-left p-4 font-semibold text-gray-900">Prijs all-in</th>
                      <th className="text-left p-4 font-semibold text-gray-900 hidden md:table-cell">Wat zit erin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prijsTabel.map((row, i) => (
                      <tr key={i} className={i !== prijsTabel.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="p-4 align-top">
                          <strong className="text-gray-900">{row.label}</strong>
                          <p className="text-sm text-gray-600 mt-1 md:hidden">{row.uitleg}</p>
                        </td>
                        <td className="p-4 align-top whitespace-nowrap font-semibold text-sky-700">{row.prijs}</td>
                        <td className="p-4 align-top text-sm text-gray-600 hidden md:table-cell">{row.uitleg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              <strong>Belangrijke nuance:</strong> exacte bedrag staat pas vast na lekdetectie. Reden: tot we het lek hebben gelokaliseerd weten we niet of u alleen bijvulling nodig heeft (lichtere kant van de range) of ook lekreparatie (zwaardere kant). Wij rapporteren tijdens de opname; u beslist daarna of we doorgaan.
            </p>

            <h2 id="variabelen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Wat bepaalt uiteindelijk de prijs?</h2>

            <p>Zes variabelen bepalen of u op de €175 of op de €650 uitkomt. Hieronder per stuk wat de impact is:</p>

            <div className="space-y-4 my-8">
              {variabelen.map((v, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6 border-l-4 border-sky-500">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{v.titel}</h3>
                    <span className="text-sm font-semibold text-sky-700 whitespace-nowrap ml-4">{v.impact}</span>
                  </div>
                  <p className="text-gray-700">{v.detail}</p>
                </div>
              ))}
            </div>

            <h2 id="vergelijken" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Onze prijzen versus internetvergelijkers</h2>

            <p>
              U vindt op <a href="https://www.werkspot.nl/air-conditioning/prijzen-kosten/airco-afvullen" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Werkspot</a>, <a href="https://www.homedeal.nl/airco/airco-bijvullen/" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Homedeal</a> en <a href="https://www.airco-expres.nl/bijvullen/" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Airco-Expres</a> richtprijzen die soms lager zijn dan de onze. Drie redenen om dat verschil te begrijpen vóór u kiest:
            </p>

            <ol className="space-y-3 ml-6 my-6 list-decimal">
              <li><strong>Lead-platforms versus directe installateurs.</strong> Werkspot en Homedeal verkopen geen service — ze verkopen leads aan installateurs. Wie opduikt is wisselend, vaak een onderaannemer die dezelfde leadkost ergens moet terugverdienen. Wij komen altijd zelf, met eigen team. Geen tussenpersoon = geen marge-stapeling.</li>
              <li><strong>Lekdetectie inbegrepen of niet.</strong> "Vanaf €65 voor bijvullen" betekent meestal: alleen bijvullen, geen lekdetectie, geen lekreparatie. Dat klinkt aantrekkelijk tot u beseft dat u over zes weken weer een lekkende airco heeft. Bij ons is lekdetectie standaard.</li>
              <li><strong>Procedure-volledigheid.</strong> Snelle "kom binnen, kom buiten"-services slaan vaak vacuümtrekken over (essentieel om vocht en lucht eruit te halen) of doen geen drukcontrole volgens fabrieksspec. Op korte termijn lijkt dat goedkoper. Op middellange termijn — 6 tot 18 maanden — verloopt de compressor en betaalt u €1.500-€2.500 voor een nieuwe buitenunit.</li>
            </ol>

            <p>
              Eerlijk: bij niet elke klant past onze prijs. Heeft u een 12 jaar oude unit met een groot lek? Dan rekenen wij door of bijvullen of vervangen voordeliger uitvalt. Vaak is een nieuwe single-split installatie van €1.600 all-in binnen 4-6 jaar terugverdiend door lager verbruik (zie <Link to="/airco-bijvullen" className="text-sky-600 underline">de pillar-page bijvullen</Link>). Wij zeggen het ook als de slimmere keuze géén bijvulling is.
            </p>

            <h2 id="besparen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Drie manieren om kosten te besparen</h2>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingDown className="h-6 w-6 text-amber-600 mr-2" />
                De goedkoopste bijvulling is de bijvulling die u niet nodig heeft
              </h3>
              <ol className="space-y-3 text-gray-700 list-decimal ml-6">
                <li><strong>Onderhoudscontract</strong> — voor €99-€150 per jaar voert ons team jaarlijks onderhoud uit incl. drukcheck. Beginnende lekken pakken we vroeg, vaak voor &lt;€100. Zonder contract groeit datzelfde lek uit tot een €350-€650 reparatie.</li>
                <li><strong>Vroeg signaleren</strong> — bij verminderde koeling, ijsvorming of een sissend geluid: wachten kost geld. Een tijdige detectie kost €350; doordraaien tot compressor-defect kost €1.500+.</li>
                <li><strong>Bij installatie kiezen voor R32</strong> — als u nog overweegt of upgrade plant: R32 is structureel goedkoper bij te vullen (€175-€275 vs €225-€375 voor R410A) én blijft langer leverbaar. R410A wordt uitgefaseerd, marktprijs koudemiddel stijgt jaarlijks 8-15%.</li>
              </ol>
            </div>

            <p>
              Voor de volledige inhoudelijke uitleg over koudemiddeltypes, F-gas-wetgeving en het achtstaps proces dat we volgen: zie de <Link to="/airco-bijvullen" className="text-sky-600 underline font-semibold">pillar-page airco bijvullen</Link>. Voor de wettelijke kant — waarom u dit niet zelf mag doen — lees <Link to="/kennisbank/airco-bijvullen-zelf-doen" className="text-sky-600 underline">waarom airco zelf bijvullen niet kan</Link>.
            </p>

            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Veelgestelde vragen over kosten</h2>
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

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Wilt u een persoonlijke prijsindicatie?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Stuur ons een foto van het typeplaatje van uw buitenunit via WhatsApp. We zien meteen welk koudemiddel erin zit en geven een realistische bandbreedte voordat we langskomen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
              <Phone className="h-6 w-6 mr-2" />Bel 046 202 1430
            </a>
            <a href="https://wa.me/31636481054" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
              WhatsApp 06 36481054
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoVullenKosten;
