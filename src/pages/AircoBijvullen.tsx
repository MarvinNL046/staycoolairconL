import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle, Shield, Droplets, AlertTriangle, Phone, Award, Settings,
} from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { aggregateReviews } from '../data/reviews';

const CANONICAL_URL = 'https://staycoolairco.nl/airco-bijvullen';

const AircoBijvullen: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/airco-service' },
    { label: 'Airco bijvullen' },
  ];

  // ─── Content-data — feiten en cijfers, geen marketing ────────────────────
  const usps = [
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: 'F-gassen gecertificeerd',
      description: 'Alleen daarvoor opgeleide monteurs mogen aan koudemiddel werken — wettelijk verplicht sinds 2015.',
    },
    {
      icon: <Droplets className="h-12 w-12 text-sky-500" />,
      title: 'Lekdetectie inbegrepen',
      description: 'We zoeken altijd eerst de oorzaak. Bijvullen zonder lek opsporen is geld weggooien.',
    },
    {
      icon: <Settings className="h-12 w-12 text-sky-500" />,
      title: 'Juiste hoeveelheid',
      description: 'Drukmeting volgens fabrieksspecificatie. Te veel is even slecht als te weinig — beide schadelijk voor de compressor.',
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: 'Heldere prijzen all-in',
      description: 'Geen "vanaf €X" zonder context. Wat in de offerte staat is wat u betaalt — incl. BTW, incl. werk, incl. koudemiddel.',
    },
  ];

  const tekensTekort = [
    {
      symptoom: 'Verminderde koeling',
      beschrijving: 'Airco koelt niet meer voldoende of doet er veel langer over om de gewenste temperatuur te halen. Vaakste signaal.',
      ernst: 'Matig',
    },
    {
      symptoom: 'IJsvorming op leidingen',
      beschrijving: 'Zichtbare ijslaag op de koudemiddelleidingen of op de verdamper bij de binnenunit. Stop direct met gebruik en bel ons.',
      ernst: 'Ernstig',
    },
    {
      symptoom: 'Hoger energieverbruik',
      beschrijving: 'Energierekening loopt op terwijl uw gebruik gelijk bleef. De compressor moet harder werken om dezelfde koeling te halen.',
      ernst: 'Matig',
    },
    {
      symptoom: 'Compressor draait constant door',
      beschrijving: 'Buitenunit slaat niet meer af. Hij blijft draaien zonder de doeltemperatuur te halen — slijt in een fractie van de normale levensduur.',
      ernst: 'Ernstig',
    },
    {
      symptoom: 'Warme of lauwe lucht',
      beschrijving: 'Airco staat aan op koel-stand maar blaast gewoon kamerlucht of zelfs lauwe lucht. Vrijwel altijd: koudemiddel-tekort of compressor-defect.',
      ernst: 'Ernstig',
    },
    {
      symptoom: 'Sissend of borrelend geluid',
      beschrijving: 'Hoorbaar bij stille nachten. Vaak een lek bij een verbinding of in een leiding. We pakken dit met een UV-tracer.',
      ernst: 'Matig',
    },
  ];

  const koudemiddelTypes = [
    {
      type: 'R32',
      eigenschappen: 'Modern, lage GWP (675), energie-efficiënt',
      toepassingen: 'Vrijwel alle nieuwe single-split en multi-split sinds 2018',
      milieu: 'Standaard voor nieuwe systemen, milieuvriendelijker dan R410A',
    },
    {
      type: 'R410A',
      eigenschappen: 'Veelgebruikt, hoge GWP (2.088), goede prestaties',
      toepassingen: 'Meeste systemen geïnstalleerd 2010-2018',
      milieu: 'Wordt uitgefaseerd, prijs van het koudemiddel zelf stijgt jaarlijks',
    },
    {
      type: 'R407C',
      eigenschappen: 'Vervanger van R22, GWP 1.774',
      toepassingen: 'Oudere systemen en sommige industriële installaties',
      milieu: 'Overgangsproduct, niet meer in nieuwbouw',
    },
    {
      type: 'R22',
      eigenschappen: 'Verboden sinds 2015 — niet meer leverbaar',
      toepassingen: 'Systemen van vóór 2010',
      milieu: 'Bijvullen onmogelijk. Tip: vervang het systeem voor een R32-unit, levert direct besparing op stroom en milieu.',
    },
    {
      type: 'R290 (propaan)',
      eigenschappen: 'Natuurlijk koudemiddel, GWP 3 (zeer laag)',
      toepassingen: 'Nieuwste generatie milieuvriendelijke systemen',
      milieu: 'Toekomst — brandbaar in grote hoeveelheden, daarom in kleine doseringen toegepast',
    },
  ];

  const lekOorzaken = [
    'Slecht aangelegde flareverbindingen door een ongekwalificeerde installateur',
    'Corrosie van koperleidingen door vocht of zout in de lucht',
    'Mechanische schade — schilderwerk, verbouwing, of een onhandige tuinharkbeweging',
    'Trillingsschade aan verbindingen door slechte montage zonder dempers',
    'Slijtage van rubber afdichtingen en O-ringen na 8-10 jaar',
    'Vorstschade aan ongeïsoleerde leidingen tijdens een onverwacht koude winter',
    'Fabricagefouten — zeldzaam, maar gebeurt',
  ];

  // ─── Concrete prijzen 2026 ────────────────────────────────────────────────
  const prijsTabel = [
    {
      service: 'Lekdetectie + diagnose',
      prijs: 'Vanaf €149',
      detail: 'UV-tracer, drukmeting, elektronische detector. We rapporteren wat we vinden — geen werk zonder uw akkoord.',
    },
    {
      service: 'Bijvulling R32 (single-split tot 3,5 kW)',
      prijs: '€175 – €275',
      detail: 'Inclusief koudemiddel, vacuümtrekken, drukcontrole en testen.',
    },
    {
      service: 'Bijvulling R410A (single- of multi-split)',
      prijs: '€225 – €375',
      detail: 'R410A wordt uitgefaseerd, prijs koudemiddel stijgt jaarlijks. In sommige gevallen rendabel om systeem te vervangen.',
    },
    {
      service: 'Lekreparatie + bijvulling',
      prijs: '€350 – €650',
      detail: 'Lek lokaliseren, repareren (lassen of onderdeel vervangen), systeem vacumeren en hervullen. Volledige garantie op het werk.',
    },
    {
      service: 'Volledige hervulling na grote lek',
      prijs: 'Op aanvraag',
      detail: 'Bij compressorschade of lege buitenunit hangt prijs af van type. Soms is vervanging goedkoper — eerlijk advies vooraf.',
    },
  ];

  const faqItems = [
    {
      question: 'Hoe vaak moet airco bijvullen?',
      answer: 'Eerlijk antwoord: nooit, als de installatie goed is gedaan. Een airco is een gesloten systeem. Koudemiddel verdampt niet en raakt niet "op". Moet u toch bijvullen, dan is er altijd een lek — klein of groot. Wij zoeken die eerst en repareren \'m. Steeds opnieuw bijvullen zonder lekreparatie is geld door de gootsteen.',
    },
    {
      question: 'Wat kost airco bijvullen in Limburg?',
      answer: 'Voor een R32-systeem rekent u op €175-€275 all-in incl. BTW voor enkel bijvullen, met lekdetectie erbij €350-€650. R410A ligt iets hoger door de oplopende koudemiddelprijs. Exact bedrag staat in de offerte voordat we beginnen — geen meerwerk-verrassingen achteraf. Zie onze [kosten-pagina](/airco-vullen-kosten) voor de volledige uitsplitsing.',
    },
    {
      question: 'Kan ik airco zelf bijvullen?',
      answer: 'Nee — dat is in Nederland sinds 2015 wettelijk verboden voor particulieren. Alleen F-gassen gecertificeerde monteurs mogen aan koudemiddelsystemen werken. Reden: koudemiddel is een sterk broeikasgas (R410A is 2.088× krachtiger dan CO₂), de druk in het systeem is hoog, en verkeerd vullen sloopt uw compressor binnen een seizoen. Meer over de wet en risico\'s: [waarom airco zelf bijvullen niet kan](/kennisbank/airco-bijvullen-zelf-doen).',
    },
    {
      question: 'Hoe weet ik welk koudemiddel mijn airco gebruikt?',
      answer: 'Op het typeplaatje van de buitenunit (en meestal ook op de binnenunit) staat het type vermeld — R32, R410A, R407C of soms R22. Twijfel? Stuur ons een foto van het typeplaatje via WhatsApp (06 36481054); wij vertellen meteen wat het is en wat een bijvulling realistisch kost.',
    },
    {
      question: 'Wat als ik R22-systeem heb?',
      answer: 'R22 is sinds 2015 verboden in Europa en niet meer leverbaar. Bijvullen kan dus niet — wettelijk noch praktisch. Realistisch advies: vervang het systeem voor een R32-unit. Een nieuwe single-split installatie kost vanaf €1.600 all-in en is binnen 4-6 jaar terugverdiend door lager stroomverbruik en de mogelijkheid om mee te verwarmen in tussenseizoenen.',
    },
    {
      question: 'Kan ik van R410A naar R32 overstappen?',
      answer: 'Nee, niet zonder volledige systeemvervanging. R32 en R410A werken op andere drukken en vereisen andere componenten. Alle elke unit is "single fluid" ontworpen. Bij een echt slecht functionerend R410A-systeem berekenen we wel even of doorgaan met bijvullen of nieuw aanschaffen voordeliger uitkomt. Vaak is vervanging na 10+ jaar de slimmere route.',
    },
    {
      question: 'Wat als mijn airco te veel koudemiddel krijgt?',
      answer: 'Net zo schadelijk als te weinig. Te hoge druk overbelast de compressor, vermindert efficiency en kan binnen een jaar leiden tot een buitenunit die u moet vervangen — een rekening van €1.500+. Daarom werken wij met drukmeting volgens fabrieksspecificatie, niet "een beetje extra voor de zekerheid". Heeft een ander de unit overvuld? Wij meten en corrigeren.',
    },
    {
      question: 'Komen jullie ook in heel Limburg voor bijvullen?',
      answer: 'Ja, in heel Limburg — Maastricht, Heerlen, Sittard-Geleen, Roermond, Venlo, Weert en alle gemeenten daartussen. We rijden vanuit Nieuwstadt en zijn meestal binnen 30-45 minuten ter plaatse. Bij spoed (compressor draait al, ijsvorming) plannen we vaak nog dezelfde week in.',
    },
  ];

  // ─── @graph schema (BreadcrumbList + Service + FAQPage + LocalBusiness) ────
  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${CANONICAL_URL}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://staycoolairco.nl/' },
          { '@type': 'ListItem', position: 2, name: 'Service', item: 'https://staycoolairco.nl/airco-service' },
          { '@type': 'ListItem', position: 3, name: 'Airco bijvullen', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${CANONICAL_URL}#service`,
        serviceType: 'Airco bijvullen / koudemiddel-service',
        name: 'Airco bijvullen door F-gassen gecertificeerde monteur',
        description: 'Professionele lekdetectie en koudemiddel bijvulling voor R32, R410A en R407C-systemen in heel Limburg. Vanaf €175 all-in incl. BTW.',
        url: CANONICAL_URL,
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://staycoolairco.nl/#organization',
          name: 'StayCool Airco',
          telephone: '+31462021430',
          email: 'info@staycoolairco.nl',
          url: 'https://staycoolairco.nl',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Aan de Bogen 11',
            addressLocality: 'Nieuwstadt',
            postalCode: '6118 AS',
            addressRegion: 'Limburg',
            addressCountry: 'NL',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: aggregateReviews.averageRating.toString(),
            reviewCount: aggregateReviews.totalReviews.toString(),
            bestRating: '5',
            worstRating: '1',
          },
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Limburg',
          addressCountry: 'NL',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '175',
          highPrice: '650',
          offerCount: '5',
          description: 'Bijvullen R32: €175-€275. Bijvullen R410A: €225-€375. Lekreparatie + bijvulling: €350-€650. Lekdetectie vanaf €149.',
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
        title="Airco Bijvullen Limburg | Vanaf €175 All-In | F-gas Gecertificeerd"
        description="Airco bijvullen nodig in Limburg? F-gassen + STEK gecertificeerd ✓ Lekdetectie inbegrepen ✓ R32, R410A & R407C ✓ Vanaf €175 all-in incl. BTW ✓ Bel 046 202 1430"
        canonicalUrl={CANONICAL_URL}
        type="service"
        serviceType="Airco bijvullen"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco bijvullen in Limburg — vanaf €175 all-in
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            F-gassen gecertificeerde service voor R32, R410A en R407C. We zoeken eerst de oorzaak, repareren het lek, en vullen daarna pas bij. Anders bent u over een paar weken weer aan de beurt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Droplets className="h-5 w-5 mr-2" />
              Vraag offerte aan
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel direct: 046 202 1430
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" />F-gas gecertificeerd</span>
            <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" />Lekdetectie inbegrepen</span>
            <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" />R32, R410A, R407C</span>
            <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" />Heel Limburg</span>
          </div>
        </div>
      </section>

      {/* Author + last-updated meta-balk */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-3 text-gray-600">
            <span><strong className="text-gray-900">Geschreven door:</strong> Marvin Smit, eigenaar StayCool Airco — F-gassen + STEK gecertificeerd</span>
          </div>
          <div className="text-gray-500">
            <time dateTime="2026-05-06">Laatste inhoudscontrole: 6 mei 2026</time>
          </div>
        </div>
      </section>

      {/* Table of Contents — jump-links voor long-form content */}
      <section className="bg-sky-50 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Op deze pagina</h2>
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="#overzicht" className="text-sky-700 hover:text-sky-900 hover:underline">Overzicht</a>
            <a href="#signalen" className="text-sky-700 hover:text-sky-900 hover:underline">Signalen tekort</a>
            <a href="#prijzen" className="text-sky-700 hover:text-sky-900 hover:underline">Prijzen 2026</a>
            <a href="#koudemiddel-types" className="text-sky-700 hover:text-sky-900 hover:underline">Type koudemiddel</a>
            <a href="#lekdetectie" className="text-sky-700 hover:text-sky-900 hover:underline">Lekdetectie</a>
            <a href="#proces" className="text-sky-700 hover:text-sky-900 hover:underline">Ons proces</a>
            <a href="#mobiele-airco" className="text-sky-700 hover:text-sky-900 hover:underline">Mobiele airco</a>
            <a href="#zakelijk-vrf" className="text-sky-700 hover:text-sky-900 hover:underline">Zakelijk &amp; VRF</a>
            <a href="#bespaartips" className="text-sky-700 hover:text-sky-900 hover:underline">Bespaartips</a>
            <a href="#wetgeving" className="text-sky-700 hover:text-sky-900 hover:underline">F-gas wet</a>
            <a href="#bijvullen-vs-vervangen" className="text-sky-700 hover:text-sky-900 hover:underline">Vervangen?</a>
            <a href="#faq" className="text-sky-700 hover:text-sky-900 hover:underline">Veelgestelde vragen</a>
          </nav>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom alleen F-gassen + STEK gecertificeerd
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veilig, wettelijk correct, en u krijgt het bedrag op papier voordat we beginnen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">{usp.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center text-sm">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="overzicht" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Airco bijvullen: hoe het écht zit
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  We krijgen elke week telefoontjes van klanten die "even hun airco willen laten bijvullen". Eerlijk verhaal: een airco is een gesloten systeem. Koudemiddel verdampt niet en raakt niet op. <strong>Moet u bijvullen, dan is er een lek</strong> — klein of groot. Daarom doen wij eerst lekdetectie, dan repareren, en pas dan bijvullen. Anders is het bijvullen over een paar weken alweer een herhaling, en dan twee keer betalen.
                </p>

                <p>
                  Sinds 2015 mag in Nederland alleen een <strong>F-gassen gecertificeerd</strong> bedrijf — in de praktijk vaak ook <strong>STEK gecertificeerd</strong> via de Stichting Erkenningsregeling voor het Koeltechnisch Installatiebedrijf — aan koudemiddelsystemen werken. Dat is geen formaliteit: koudemiddelen zijn krachtige broeikasgassen (R410A is 2.088 keer sterker dan CO₂ volgens <a href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32014R0517" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">EU-verordening 517/2014</a>), de druk in het systeem ligt rond de 25 bar, en verkeerd vullen sloopt uw compressor binnen een seizoen. We zien dat regelmatig — klanten die ergens een goedkope "service" hadden geboekt en bij ons komen omdat de unit er een jaar later mee stopte.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                    Zelf bijvullen is illegaal — en zinloos
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Particulieren mogen sinds 2015 wettelijk niet aan koudemiddel werken. Het is geen schemerzone — het is een EU-verordening (517/2014). Daarnaast:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cilinders met R32 of R410A worden niet aan particulieren verkocht door legitieme leveranciers.</li>
                    <li>• Zonder vacuümpomp en manometerset breng je vocht en lucht in het systeem — direct compressorschade.</li>
                    <li>• Verkeerd type erin vullen kan tot brand leiden (bij R290 in een R32-systeem).</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Lees ook: <Link to="/kennisbank/airco-bijvullen-zelf-doen" className="text-sky-600 underline">waarom airco zelf bijvullen niet kan</Link>.
                  </p>
                </div>

                <h3 id="signalen" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Tekenen dat uw airco koudemiddel mist
                </h3>

                <p>
                  Negen van de tien keer hoort u een van deze symptomen voordat u belt. Hoe sneller u erbij bent, hoe groter de kans dat de compressor het overleeft.
                </p>

                <div className="space-y-4 my-8">
                  {tekensTekort.map((teken, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-sky-500">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{teken.symptoom}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          teken.ernst === 'Ernstig' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {teken.ernst}
                        </span>
                      </div>
                      <p className="text-gray-600">{teken.beschrijving}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Bij ijsvorming op de leidingen of "compressor draait constant door": stop met gebruik en bel ons vandaag. Doordraaien met een tekort kost in het slechtste geval een nieuwe compressor — €1.500 tot €2.500 reparatie. Vroeg ingrijpen kost €350-€650 totaal.
                </p>

                <h3 id="prijzen" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Prijzen — wat u écht betaalt
                </h3>

                <p>
                  Eerlijk en helder. We zien overal in de markt "vanaf €X" zonder context. Bij ons staat het bedrag in de offerte voordat we beginnen. Hieronder de richtprijzen 2026 — exact bedrag pas vast na lekdetectie, omdat we eerst willen weten of u een nieuwe leiding moet, een afdichting, of alleen bijvulling.
                </p>

                <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-sky-50">
                        <tr>
                          <th className="text-left p-4 font-semibold text-gray-900">Wat u nodig heeft</th>
                          <th className="text-left p-4 font-semibold text-gray-900">Prijs all-in incl. BTW</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prijsTabel.map((row, idx) => (
                          <tr key={idx} className={idx !== prijsTabel.length - 1 ? 'border-b border-gray-200' : ''}>
                            <td className="p-4 align-top">
                              <strong className="text-gray-900 block mb-1">{row.service}</strong>
                              <span className="text-sm text-gray-600">{row.detail}</span>
                            </td>
                            <td className="p-4 align-top whitespace-nowrap font-semibold text-sky-700">{row.prijs}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p>
                  Volledige uitsplitsing per koudemiddeltype en wanneer vervangen voordeliger is dan bijvullen: zie <Link to="/airco-vullen-kosten" className="text-sky-600 underline font-semibold">airco vullen kosten</Link>.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Eerlijk: waarom wij iets duurder zijn dan internetvergelijkers
                  </h4>
                  <p className="text-gray-700 mb-2">
                    U ziet op vergelijkingsplatforms prijzen vanaf €65-€95 voor "alleen bijvullen". Wij zitten daarboven, en we zeggen er meteen bij waarom.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Wij zijn geen vergelijkings-platform met onderaannemers — u krijgt elke keer ons eigen team, vaak Danny.</li>
                    <li>• Lekdetectie zit standaard in ons tarief. Bij goedkopere prijzen vrijwel altijd niet — en zonder lekdetectie staat u over zes weken weer aan de beurt.</li>
                    <li>• 1 jaar garantie op het werk. Lekt dezelfde verbinding binnen 12 maanden? Kosteloos opgelost.</li>
                    <li>• Vacuümtrekken volgens fabrieksspec — een stap die "snelle services" overslaan, en die binnen 6-12 maanden tot compressorschade leidt.</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Goedkoop blijkt dan duur. Dat is geen marketingclaim — dat zien we elke maand bij klanten die ons na een eerste sub-€100-service alsnog bellen.
                  </p>
                </div>

                <h3 id="koudemiddel-types" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Welk koudemiddel zit in uw airco?
                </h3>

                <p>
                  Belangrijk om te weten, want de prijs varieert per type. R32 is sinds 2018 standaard in nieuwbouw — milieuvriendelijker en goedkoper bij te vullen. R410A zit in vrijwel alle systemen tussen 2010-2018 en wordt uitgefaseerd, dus de koudemiddelprijs zelf stijgt jaarlijks. R22 is sinds 2015 verboden — daarvoor is bijvullen géén optie meer.
                </p>

                <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden">
                  {koudemiddelTypes.map((km, index) => (
                    <div key={index} className={`p-6 ${index !== koudemiddelTypes.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Droplets className="h-5 w-5 text-sky-500 mr-2" />
                        {km.type}
                      </h4>
                      <div className="space-y-2 text-gray-600 text-sm">
                        <p><strong>Eigenschappen:</strong> {km.eigenschappen}</p>
                        <p><strong>Toepassingen:</strong> {km.toepassingen}</p>
                        <p><strong>Milieu:</strong> {km.milieu}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  Stuur ons een foto van het typeplaatje van uw buitenunit (via WhatsApp 06 36481054), dan zien wij meteen wat erin zit en kunnen een realistische prijs noemen voordat we langskomen.
                </p>

                <h3 id="lekdetectie" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Lekdetectie — waarom we het altijd doen
                </h3>

                <p>
                  Bijvullen zonder de oorzaak te zoeken is symptoombestrijding. Onze ervaring: in negen van de tien gevallen zit het lek bij een verbinding (flare-koppeling) of in een afdichting na 8-10 jaar. We werken met:
                </p>

                <ul className="space-y-2 ml-6 my-6">
                  <li><strong>Visuele inspectie</strong> — olievlekken zijn vaak een indicator van waar het lek zit.</li>
                  <li><strong>Elektronische lekdetector</strong> — pakt zelfs micro-lekken die niet visueel zichtbaar zijn.</li>
                  <li><strong>UV-tracer</strong> — stof in het systeem brengen en met UV-lamp het lek lokaliseren. Werkt ook bij heel kleine lekken.</li>
                  <li><strong>Druktest</strong> — stikstof onder druk brengen om grotere lekken meteen te horen of te voelen.</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Veelvoorkomende lekoorzaken</h4>

                <div className="bg-sky-50 rounded-lg p-6 my-6">
                  <ul className="space-y-2 text-gray-700">
                    {lekOorzaken.map((oorzaak, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        {oorzaak}
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 id="proces" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Ons proces — acht stappen, geen verrassingen
                </h3>

                <p>
                  Hoe het werkt vanaf het moment dat u belt tot we wegrijden:
                </p>

                <div className="bg-white rounded-lg shadow-md p-6 my-8">
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                      <div>
                        <strong className="text-gray-900">Telefoon of WhatsApp</strong>
                        <p className="text-gray-600 text-sm">U belt of stuurt foto van typeplaatje. Wij geven indicatie van prijs en plannen langskomen — meestal binnen een week.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                      <div>
                        <strong className="text-gray-900">Diagnose ter plaatse</strong>
                        <p className="text-gray-600 text-sm">Drukmeting, visuele inspectie, controle van symptomen. We vertellen wat we zien.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                      <div>
                        <strong className="text-gray-900">Lekdetectie</strong>
                        <p className="text-gray-600 text-sm">Elektronische detector + UV-tracer + druktest. Tot we het vinden — en als het niet goed is op te lossen, zeggen we dat ook.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                      <div>
                        <strong className="text-gray-900">Offerte op papier</strong>
                        <p className="text-gray-600 text-sm">Voordat we beginnen krijgt u het exacte bedrag. Geen meerwerk-verrassingen achteraf.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                      <div>
                        <strong className="text-gray-900">Reparatie van het lek</strong>
                        <p className="text-gray-600 text-sm">Lassen, afdichting vervangen, of soms een hele leiding. Wat het probleem ook is, we lossen het op.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">6</span>
                      <div>
                        <strong className="text-gray-900">Vacuümtrekken</strong>
                        <p className="text-gray-600 text-sm">Vocht en lucht uit het systeem. Wordt vaak overgeslagen door cowboys — en die compressor begeeft het dan binnen een jaar.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">7</span>
                      <div>
                        <strong className="text-gray-900">Vullen volgens fabrieksspec</strong>
                        <p className="text-gray-600 text-sm">Niet "ergens in de buurt", maar exact het aantal gram dat de fabrikant voorschrijft. Drukcontrole erbij.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">8</span>
                      <div>
                        <strong className="text-gray-900">Test + registratie</strong>
                        <p className="text-gray-600 text-sm">Volledige werkingstest, plus wettelijke registratie van koudemiddel-hoeveelheid bij de NEa. Garantie op het werk: 1 jaar.</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <h3 id="wetgeving" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  F-gassen wetgeving — kort
                </h3>

                <p>
                  Sinds 2015 is werken aan koudemiddel in Europa gereguleerd via EU-verordening 517/2014. Concreet:
                </p>

                <ul className="space-y-2 ml-6 my-6">
                  <li><strong>F-gassen certificering verplicht</strong> — wij hebben die. Vraag bij twijfel om het certificaatnummer.</li>
                  <li><strong>Registratieplicht</strong> — alle koudemiddelmutaties moeten geregistreerd bij de <a href="https://www.emissieautoriteit.nl/onderwerpen/algemeen-f-gassen" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">Nederlandse Emissieautoriteit (NEa)</a>.</li>
                  <li><strong>Lekcontrole verplicht</strong> — voor systemen boven 5 ton CO₂-equivalent (zakelijke installaties); zie ook <a href="https://www.rvo.nl/onderwerpen/f-gassen" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">RVO F-gassen-richtlijnen</a>.</li>
                  <li><strong>Terugwinplicht</strong> — bij demontage of vervanging mogen we koudemiddel niet "in de lucht laten"; alles wordt opgevangen en hergebruikt of vernietigd.</li>
                  <li><strong>Uitfasering</strong> — R410A wordt geleidelijk vervangen, R32 is de huidige standaard, R290 (propaan) komt op.</li>
                </ul>

                <p>
                  StayCool Airco is volledig geregistreerd bij de NEa en werkt volgens deze regels. Geen schemerzone, geen tussenoplossingen.
                </p>

                <h3 id="bijvullen-vs-vervangen" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Vraag is: bijvullen of vervangen?
                </h3>

                <p>
                  Eerlijk advies hoort hier ook bij. Soms is bijvullen niet de slimste route. Drie scenario's waarbij we vervanging adviseren in plaats van bijvullen:
                </p>

                <ul className="space-y-2 ml-6 my-6">
                  <li><strong>R22-systeem</strong> (vóór 2010) — koudemiddel is verboden, bijvullen kan niet. Vervanging is de enige optie.</li>
                  <li><strong>10+ jaar oud + groot lek</strong> — reparatie + bijvulling kan oplopen tot €700, terwijl een nieuwe single-split installatie vanaf €1.600 binnen 4-6 jaar is terugverdiend door lager verbruik (SCOP 4-5 vs ~2,5 op oudere systemen).</li>
                  <li><strong>Lekkende compressor zelf</strong> — onderdeel kost €600-€1.000 plus arbeid. Op een 10-jaar-oude unit niet meer rendabel.</li>
                </ul>

                <p>
                  Bij de opname rekenen we beide scenario's voor u door. Geen verkooppraat — u krijgt de getallen, u kiest.
                </p>

                <h3 id="mobiele-airco" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Mobiele airco bijvullen — kort verhaal
                </h3>

                <p>
                  Mobiele airco's (de wieltjesmodellen met de slang naar het raam) kunt u in de praktijk niet laten bijvullen. Ze zijn ontworpen als "wegwerp"-apparaat met een gesloten R290 of R410A-circuit zonder service-aansluitingen. Daarbij komt: een mobiele unit gebruikt 2-3× meer stroom dan een vaste split-unit voor dezelfde koeling, en het rendement zakt in zodra de slang door het kierende raam warme buitenlucht aanzuigt.
                </p>

                <p>
                  Onze ervaring: in negen van de tien gevallen waarbij iemand belt over een mobiele airco die niet meer koelt, is reparatie + bijvulling rond de €200-€300 geen rendabele keuze. Een nieuwe mobiele unit kost €400-€700. Een vaste single-split-installatie vanaf €1.600 all-in is binnen 3-4 jaar terugverdiend door lager stroomverbruik én de mogelijkheid om in tussenseizoenen mee te verwarmen. Zie ook onze <Link to="/seo/pillar-2-onderhoud-service/mobiele-vs-split-airco" className="text-sky-600 underline">vergelijking mobiele vs vaste airco</Link>.
                </p>

                <h3 id="zakelijk-vrf" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Zakelijk &amp; VRF / VRV-systemen
                </h3>

                <p>
                  Voor zakelijke installaties (kantoorpanden, winkels, restaurants) en VRF/VRV-systemen werken we met dezelfde aanpak: lekdetectie eerst, daarna repareren, daarna bijvullen. Verschil zit in twee zaken:
                </p>

                <ul className="space-y-2 ml-6 my-6">
                  <li><strong>Verplichte lekcontroles</strong> — voor systemen boven 5 ton CO₂-equivalent (vrijwel alle VRF/VRV) bent u wettelijk verplicht periodiek te laten controleren: bij 5-50 ton één keer per jaar, bij 50-500 ton één keer per half jaar. We bieden een onderhoudscontract dat die controles automatisch inplant.</li>
                  <li><strong>Hogere prijspunten</strong> — VRF-systemen werken met meer kilo's koudemiddel (vaak 4-15 kg vs 0,5-1,5 kg voor residentieel) en hebben complexere leidingnetten. Bijvullen ligt typisch tussen €450 en €1.200 all-in incl. BTW, afhankelijk van systeemgrootte. Exact bedrag in offerte na opname.</li>
                  <li><strong>Logbook-verplichting</strong> — bij zakelijke systemen is een F-gassen-logboek verplicht. Wij vullen dat correct in en houden uw dossier op orde.</li>
                </ul>

                <p>
                  Voor een prijsindicatie op uw VRF/VRV-systeem: bel 046 202 1430 of stuur een appje met foto van het typeplaatje van de buitenunit naar 06 36481054.
                </p>

                <h3 id="bespaartips" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  Vijf manieren om kosten op bijvullen te besparen
                </h3>

                <p>
                  Eerlijk advies: de goedkoopste bijvulling is de bijvulling die u niet nodig heeft. Vijf concrete tips waar wij zelf onze klanten op wijzen — ook als dat ons minder werk oplevert.
                </p>

                <ol className="space-y-3 ml-6 my-6 list-decimal">
                  <li>
                    <strong>Maandelijks filters reinigen</strong> — niet exact bijvullen-gerelateerd, maar wel: een vervuilde filter laat de unit harder werken, wat sneller slijtage geeft aan flare-verbindingen waar de meeste lekken ontstaan. 2 minuten werk per maand bespaart u op termijn een hele bijvulling.
                  </li>
                  <li>
                    <strong>Buitenunit vrijhouden</strong> — bladeren, sneeuw, bloembakken tegen de buitenunit verminderen de luchtstroom en verhogen de druk in het systeem. Hogere druk = sneller lekkage bij verbindingen. Houdt de unit minimaal 30 cm vrij aan alle kanten.
                  </li>
                  <li>
                    <strong>Onderhoudscontract afsluiten</strong> — voor €99-€150 per jaar krijgt u een vaste jaarlijkse onderhoudsbeurt inclusief drukcheck. Wij detecteren beginnende lekken vroeg en repareren ze meestal voor &lt;€100 — voordat ze uitgroeien tot een €650-bijvulling-met-reparatie.
                  </li>
                  <li>
                    <strong>Bij installatie kiezen voor R32 ipv R410A</strong> — als u nog moet kiezen of een upgrade overweegt: R32 is goedkoper bij te vullen (€175-€275 vs €225-€375 voor R410A) en zal langer leverbaar blijven. R410A wordt uitgefaseerd, waardoor de koudemiddelprijs jaarlijks stijgt.
                  </li>
                  <li>
                    <strong>Niet wachten als u een signaal opmerkt</strong> — een airco die langer doet over koelen, of die af en toe een sissend geluid maakt, kost u €350-€650 om vroeg te repareren. Wachten tot de compressor het opgeeft betekent een nieuwe buitenunit van €1.500-€2.500. Vroeg ingrijpen is altijd voordeliger.
                  </li>
                </ol>

                <p>
                  Tip 6, gratis: stuur ons een foto van uw typeplaatje via WhatsApp (06 36481054). Dan zien we direct welk koudemiddel erin zit en kunnen we vooraf inschatten of het probleem groot of klein is — voordat we langskomen.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct hulp nodig?</h3>
                <p className="text-gray-600 mb-6">
                  Bel of stuur een appje met een foto van het typeplaatje. We geven meteen een indicatie.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:0462021430"
                    className="block w-full text-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Phone className="inline h-5 w-5 mr-2" />
                    046 202 1430
                  </a>

                  <a
                    href="https://wa.me/31636481054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    WhatsApp 06 36481054
                  </a>

                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Vraag offerte aan
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Wat zit in de prijs</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />Lekdetectie en diagnose</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />Lekreparatie (lassen / vervangen)</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />Vacuümtrekken</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />Vullen volgens fabrieksspec</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />Werkingstest en NEa-registratie</li>
                    <li className="flex items-start"><CheckCircle className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0 mt-0.5" />1 jaar garantie op het werk</li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Gerelateerde pagina's</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/airco-vullen-kosten" className="text-sky-600 hover:text-sky-700">→ Airco vullen kosten</Link></li>
                    <li><Link to="/kennisbank/airco-bijvullen-zelf-doen" className="text-sky-600 hover:text-sky-700">→ Waarom je airco niet zelf bijvult</Link></li>
                    <li><Link to="/seo/pillar-2-onderhoud-service/airco-storing-oplossen" className="text-sky-600 hover:text-sky-700">→ Airco storing oplossen</Link></li>
                    <li><Link to="/seo/pillar-2-onderhoud-service/airco-reparatie-service" className="text-sky-600 hover:text-sky-700">→ Airco reparatie service</Link></li>
                    <li><Link to="/seo/pillar-2-onderhoud-service/jaarlijks-airco-onderhoud" className="text-sky-600 hover:text-sky-700">→ Jaarlijks onderhoud</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials uit echte Google reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Wat onze klanten zeggen
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {aggregateReviews.averageRating} sterren gemiddeld over {aggregateReviews.totalReviews}+ Google-reviews. Hieronder een paar uit Limburg, op naam.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">&quot;Na een klein jaar na plaatsing zag ik een kleine lekkage. Slang stuk aan de buitenkant. Waren snel hier en geheel kosteloos en vakkundig geregeld door zeer vriendelijke heren.&quot;</p>
              <p className="text-sm font-semibold text-gray-900">Dennis Linssen — Limburg</p>
              <p className="text-xs text-gray-500">Google-review, garantie-fix kosteloos opgelost</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">&quot;Het probleem met de lekkende airco was daags erna al opgelost, door vriendelijke jongens die het probleem vlug gevonden en gerepareerd hadden. Zeer naar tevredenheid opgelost.&quot;</p>
              <p className="text-sm font-semibold text-gray-900">Truus Dodmond — Limburg</p>
              <p className="text-xs text-gray-500">Google-review, lekreparatie binnen 1 werkdag</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-3">&quot;Professioneel team, eerlijke prijzen. Duidelijke uitleg over alle opties. Zeker een aanrader!&quot;</p>
              <p className="text-sm font-semibold text-gray-900">Jan K. — Heerlen</p>
              <p className="text-xs text-gray-500">Google-review</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde vragen — eerlijke antwoorden
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Airco bijvullen of laten checken?</h2>
          <p className="text-xl mb-8 text-orange-50">
            We rijden vanuit Nieuwstadt door heel Limburg. Foto van het typeplaatje sturen via WhatsApp is meestal het snelst — dan weten wij meteen om welk koudemiddel het gaat en wat een realistische prijs is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Bel 046 202 1430
            </a>
            <a
              href="https://wa.me/31636481054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              <Droplets className="h-6 w-6 mr-2" />
              WhatsApp 06 36481054
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoBijvullen;
