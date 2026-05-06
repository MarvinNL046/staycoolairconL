import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle, Phone, MapPin, ShieldCheck, Clock, Calendar, AlertTriangle, Wrench, Home as HomeIcon, Building2,
} from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { aggregateReviews } from '../data/reviews';

const CANONICAL_URL = 'https://staycoolairco.nl/airco-plaatsen-limburg';

const AircoPlaatsenLimburg: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco plaatsen Limburg' },
  ];

  // ─── Prijsblok — alle bedragen uit references/stats.md ──────────────────────
  const prijsTabel = [
    {
      label: 'Single-split installatie',
      prijs: 'vanaf €1.600',
      details: 'Unit, montage, leidingwerk tot 5 m, F-gas-vulling, opstart, factuur op naam — all-in incl. BTW.',
    },
    {
      label: 'Single-split mid-range',
      prijs: '€1.600 – €2.500',
      details: 'Tosot, LG of Samsung — afhankelijk van capaciteit (2,5 / 3,5 / 5,0 kW) en model.',
    },
    {
      label: 'Single-split premium',
      prijs: '€2.500 – €3.500',
      details: 'Daikin, Mitsubishi Heavy of Toshiba — fluisterstil, A+++, 5-7 jaar fabrieksgarantie.',
    },
    {
      label: 'Multi-split (2 binnenunits)',
      prijs: '€2.800 – €4.000',
      details: 'Eén buitenunit, twee binnenunits — bv. slaapkamer + woonkamer of zolder + werkkamer.',
    },
    {
      label: 'Multi-split (3+ binnenunits)',
      prijs: '€4.000 – €5.500',
      details: 'Eén buitenunit, 3-5 binnenunits — meestal grotere woningen of klein kantoor.',
    },
  ];

  // ─── Stappenplan installatiedag ─────────────────────────────────────────────
  const stappen = [
    {
      titel: 'Aankomst en check',
      tekst: 'Tussen 8:00 en 9:00 — we lopen samen door wat we afgesproken hebben (locatie binnenunit, route leidingen, plek buitenunit). Geen verrassingen, alles afgesproken in de offerte.',
    },
    {
      titel: 'Buitenunit op zijn plek',
      tekst: 'Op gevelbeugels (standaard) of op de grond (beton-tegels). Trillingsdempers eronder zodat geluid niet via de muur het huis intrekt. Vlak en stabiel — anders gaat-ie op termijn lekken.',
    },
    {
      titel: 'Doorvoer + leidingen',
      tekst: 'Eén kerngat van Ø 60 mm door de gevel (binnen 30 minuten geboord, schoon afgewerkt). Koel-leidingen + condensafvoer + electra in één bundel — meestal weggewerkt in een witte kabelgoot.',
    },
    {
      titel: 'Binnenunit hangen',
      tekst: 'Wandbeugel op stevige plek (geen gipsplaat zonder stijl), unit erop, ruimte boven minimaal 5 cm voor luchtstroming. Recht hangen — anders druppelt condens niet de afvoer in.',
    },
    {
      titel: 'Vacumeren + F-gas vullen',
      tekst: 'Hier is het F-gas-certificaat voor: leidingen 30-45 minuten vacuüm trekken (verwijdert vocht en lucht), dan precieze hoeveelheid R32 of R410A erin. Wettelijk verplicht door gecertificeerd persoon — boete tot €1.500 als dat niet klopt.',
    },
    {
      titel: 'Opstart, werkingstest, factuur',
      tekst: 'We zetten hem aan, koelen en verwarmen testen, geluidsmeting buiten als je dat wil. Korte uitleg afstandsbediening + filter-reiniging. Factuur op naam met BTW-specificatie en F-gas-rapport — bewaar dat voor garantie.',
    },
  ];

  // ─── 8 FAQ-vragen — uit PAA + competitor-FAQ + Limburg-regelgeving ──────────
  const faqItems = [
    {
      question: 'Wat kost airco plaatsen in Limburg in 2026?',
      answer: 'Een complete single-split installatie all-in begint bij ons bij €1.600 incl. BTW — unit, montage, leidingwerk tot 5 m, F-gas-vulling, opstart en factuur op naam. Premium merken (Daikin, Mitsubishi Heavy) lopen door tot ongeveer €3.500. Multi-split met twee binnenunits zit tussen €2.800 en €4.000; drie of meer binnenunits €4.000-€5.500. Geen verborgen meerprijs achteraf — extra leiding boven 5 m rekenen we tegen €20-€40 per meter en alleen wanneer dat in de offerte staat.',
    },
    {
      question: 'Hoe lang duurt een airco-installatie?',
      answer: 'Een single-split staat in één werkdag — gemiddeld 4-8 uur, afhankelijk van waar de leidingen langs moeten en of we hak- en breekwerk hebben. Een multi-split met meerdere binnenunits is meestal één tot twee dagen. Op zolder of bij verdiepingen boven de derde duurt het langer omdat we extra logistiek nodig hebben (steiger of hoogwerker).',
    },
    {
      question: 'Mag ik zelf airco plaatsen in Limburg?',
      answer: 'De units ophangen mag je zelf, maar het vacumeren en vullen met R32 of R410A koudemiddel mag wettelijk alleen door iemand die F-gas-gecertificeerd is (EU-verordening 517/2014). Doe je dat zonder certificering en het komt aan het licht — bv. omdat een latere monteur het bij service ontdekt — dan loopt de boete op tot €1.500. We zien jaarlijks een handvol DIY-installaties die toch onze service-rekening opleveren omdat het vullen niet klopte. Lees ook onze eerlijke uitleg over <a href="/kennisbank/airco-bijvullen-zelf-doen">airco bijvullen zelf doen</a>.',
    },
    {
      question: 'Heb ik een vergunning nodig voor de buitenunit?',
      answer: 'In de meeste Limburgse gemeenten (Sittard, Heerlen, Roermond, Venlo, Weert) is een airco-buitenunit vergunningvrij als hij aan de zij- of achtergevel hangt, niet hoger dan 5 m boven het maaiveld zit en niet zichtbaar is vanaf de openbare weg. Op de grond geldt: maximaal 1 m hoog en niet groter dan 2 m² (IPLO/Omgevingsloket). Maastricht is het uitzonderingsgeval — daar geldt voor delen van de binnenstad en gebieden met beschermd stadsgezicht of monumenten dat je vrijwel altijd vergunning moet aanvragen. Doe altijd de Vergunningcheck op het Omgevingsloket voor je eigen adres.',
    },
    {
      question: 'Waar mag ik de buitenunit plaatsen op het perceel?',
      answer: 'Sinds 1 januari 2024 geldt op grond van het Bbl (Besluit bouwwerken leefomgeving, art. 4.107) een geluidsnorm: het geluid van de buitenunit mag op de erfgrens niet meer zijn dan 45 dB(A) overdag en 40 dB(A) \'s nachts. In de praktijk betekent dat: minstens 1-2 m van de erfgrens, op trillingsdempers, en bij voorkeur niet recht tegenover een slaapkamerraam van de buren. Wij kiezen de plek samen met jou bij de opname — onze monteurs weten welke plek geluidstechnisch werkt.',
    },
    {
      question: 'Welke airco past het beste bij mijn woning?',
      answer: 'Eén kamer (slaapkamer, woonkamer, zolder) = single-split. Twee tot vier kamers waarvan je vaak meerdere tegelijk koelt = multi-split met één buitenunit. Kantoor of winkel met een grote open ruimte = cassette in het plafond. Voor de meeste Limburgse rijwoningen volstaat een 3,5 kW single-split in de woonkamer plus eventueel later een kleinere unit op de slaapverdieping. Bij de opname meten we de ruimte op (kubieke meters, glasoppervlak, isolatie) en geven we passend advies — zonder dat je verplicht bent.',
    },
    {
      question: 'Hoe vaak moet de airco onderhoud krijgen?',
      answer: 'Eén keer per jaar groot onderhoud is de norm — filter, drukcheck, lekcontrole, condensafvoer. Daarnaast adviseren we de filter zelf maandelijks even uit te kloppen of af te spoelen — dat voorkomt 70% van de servicebellen. Bij ons kost een losse onderhoudsbeurt vanaf €99, of je sluit een onderhoudscontract af voor €11/mnd (€132/jaar) met voorrang bij storing. Meer info op <a href="/airco-service">/airco-service</a>.',
    },
    {
      question: 'Welke gemeenten in Limburg bedienen jullie?',
      answer: 'Heel Limburg, vanaf onze vestiging in Nieuwstadt. Zuid-Limburg: Maastricht, Heerlen, Sittard-Geleen, Brunssum, Kerkrade, Landgraaf, Valkenburg, Beek, Stein, Voerendaal, Hoensbroek, Vaals, Eijsden-Margraten, Gulpen-Wittem, Meerssen. Midden-Limburg: Roermond, Echt-Susteren, Maasbracht, Weert, Nederweert. Noord-Limburg: Venlo, Venray, Horst, Tegelen, Panningen, Gennep. Daarbuiten op aanvraag.',
    },
  ];

  // ─── Schema.org @graph — BreadcrumbList + Service + LocalBusiness + FAQPage ─
  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${CANONICAL_URL}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://staycoolairco.nl/' },
          { '@type': 'ListItem', position: 2, name: 'Airco plaatsen Limburg', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${CANONICAL_URL}#service`,
        serviceType: 'Air conditioner installation',
        name: 'Airco plaatsen Limburg — installatie inclusief F-gas-vulling',
        description:
          'Airco plaatsen in Limburg vanaf €1.600 all-in: single-split, multi-split en cassette. F-gassen + STEK gecertificeerd, montage in 1 werkdag, eerlijk advies over vergunning en geluidsnormen (Bbl).',
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
          lowPrice: '1600',
          highPrice: '5500',
          offerCount: '5',
          description:
            'Single-split vanaf €1.600. Mid-range €1.600-€2.500. Premium €2.500-€3.500. Multi-split (2 units) €2.800-€4.000. Multi-split (3+ units) €4.000-€5.500. Alles all-in incl. BTW.',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${CANONICAL_URL}#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer.replace(/<[^>]+>/g, '') },
        })),
      },
    ],
  };

  return (
    <>
      <MetaTags
        title="Airco plaatsen Limburg | Vanaf €1.600 all-in | StayCool"
        description="Airco plaatsen in Limburg vanaf €1.600 all-in. F-gas + STEK gecertificeerd, montage in 1 werkdag, eerlijk advies over vergunning Maastricht. Bel 046 202 1430."
        canonicalUrl={CANONICAL_URL}
        type="service"
        serviceType="Airco installatie"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco plaatsen in Limburg — alles over installatie, prijs en regels (2026)
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-6 max-w-3xl">
            Bij ons begint een complete installatie all-in bij €1.600 incl. BTW, en een single-split staat in één werkdag —
            mits de buitenunit op een gewone gevel mag. Of dat zo is, hangt af van je gemeente: in Maastricht
            (beschermd stadsgezicht) gelden andere regels dan in Sittard, Heerlen of Roermond.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl">
            <div className="flex items-center text-sky-50">
              <ShieldCheck className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm">F-gas + STEK</span>
            </div>
            <div className="flex items-center text-sky-50">
              <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm">1 werkdag</span>
            </div>
            <div className="flex items-center text-sky-50">
              <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm">Heel Limburg</span>
            </div>
            <div className="flex items-center text-sky-50">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm">{aggregateReviews.averageRating}★ ({aggregateReviews.totalReviews})</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />Bel 046 202 1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Vraag offerte aan
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-sky">

            {/* Sectie 1 — kosten */}
            <h2 id="kosten" className="text-3xl font-bold text-gray-900 mt-4 mb-4">Wat kost airco plaatsen in Limburg?</h2>

            <p>
              Hier de echte prijzen die we hanteren — geen "vanaf"-cijfers met asterisk en verborgen meerwerk achteraf.
              Alles all-in inclusief BTW, leidingwerk tot 5 meter, F-gas-vulling, opstart en factuur op naam:
            </p>

            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {prijsTabel.map((rij, i) => (
                <div key={i} className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-semibold text-gray-900">{rij.label}</h3>
                    <span className="text-lg font-bold text-sky-600 whitespace-nowrap ml-3">{rij.prijs}</span>
                  </div>
                  <p className="text-sm text-gray-600">{rij.details}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Wat NIET in de instapprijs zit</h3>
            <ul>
              <li>Extra leidinglengte boven 5 m: <strong>€20-€40 per meter</strong>, afhankelijk van diameter en afwerking</li>
              <li>Hak- en breekwerk in een dragende muur — prijs op aanvraag in offerte</li>
              <li>Steiger of hoogwerker bij installaties op verdieping 3 of hoger</li>
              <li>Stroomgroep aanleggen als je meterkast vol zit</li>
            </ul>

            <p>
              We benoemen al deze posten al bij de opname. Voor een diepere uitleg per type airco en alle prijscomponenten,
              zie onze <Link to="/seo/pillar-9-kosten-prijzen/kosten-airco-plaatsen">kosten-deepdive airco plaatsen</Link>.
              Op zoek naar specifieke modellen en de bijbehorende prijzen?
              {' '}<Link to="/airco-kopen-limburg">Bekijk onze prijslijst voor airco kopen in Limburg</Link>.
            </p>

            {/* Sectie 2 — installatiedag */}
            <h2 id="installatiedag" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Hoe verloopt een installatiedag?</h2>

            <p>
              We hebben dit ritme strak: aankomst tussen 8:00 en 9:00, klaar voor 16:00 — een gemiddelde single-split
              kost ons 4 tot 8 uur. Hier de zes stappen, in volgorde:
            </p>

            <ol className="not-prose space-y-3 my-8">
              {stappen.map((stap, i) => (
                <li key={i} className="flex items-start bg-white rounded-lg p-4 border border-gray-200">
                  <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="text-gray-900">{stap.titel}</strong>
                    <p className="text-gray-600 text-sm mt-1">{stap.tekst}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p>
              Multi-split met meerdere binnenunits is hetzelfde proces, alleen met meer leidingen — duurt meestal
              één tot twee dagen, afhankelijk van complexiteit. Je hoeft niet de hele tijd thuis te blijven; aanwezig
              bij de start (om de plekken door te lopen) en bij de oplevering is genoeg.
            </p>

            {/* Sectie 3 — welk type */}
            <h2 id="type" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Welke airco past bij jouw woning in Limburg?</h2>

            <p>
              Drie hoofdtypen, en de keuze gaat eigenlijk altijd over hoeveel ruimtes je wilt koelen en of je
              wilt verwarmen:
            </p>

            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <HomeIcon className="h-8 w-8 text-sky-500 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Single-split</h3>
                <p className="text-sm text-gray-600">
                  Eén kamer — slaapkamer, woonkamer of zolder. 2,5 / 3,5 / 5 kW afhankelijk van ruimte.
                  Voor de meeste Limburgse rijwoningen voldoende voor de woonkamer. Vanaf €1.600.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <HomeIcon className="h-8 w-8 text-sky-500 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Multi-split</h3>
                <p className="text-sm text-gray-600">
                  Twee tot vier ruimtes vanaf één buitenunit. Bv. woonkamer + slaapkamer + werkkamer.
                  Bespaart gevelruimte en is op termijn goedkoper dan losse units. €2.800-€5.500.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 border border-gray-200">
                <Building2 className="h-8 w-8 text-sky-500 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Cassette / kanaalunit</h3>
                <p className="text-sm text-gray-600">
                  Kantoor, winkel of grote open ruimte. Hangt in het verlaagde plafond, blaast naar 4 kanten.
                  Maatwerk — prijs op aanvraag.
                </p>
              </div>
            </div>

            <p>
              Bij de gratis opname meten we kubieke meters, glasoppervlak en isolatie en geven we een passend
              kW-advies. Je betaalt niet voor "te groot" en je houdt geen vermogen tekort. We installeren alleen
              A-merken: Daikin, Mitsubishi Heavy Industries, LG, Samsung, Toshiba en Tosot. Geen no-name units van
              Marktplaats — die hebben geen Nederlandse service-organisatie en daar lopen klanten op vast als er iets stuk gaat.
            </p>

            {/* Sectie 4 — vergunning */}
            <h2 id="vergunning" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Vergunning en regels: Limburg-specifiek</h2>

            <p>
              Dit is waar veel gidsen vaag worden — en waar het in Limburg juist concreet zit. Drie dingen om te checken
              voor je een airco plaatst:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Vergunningvrij of niet?</h3>
            <p>
              In de meeste Limburgse gemeenten — Sittard, Heerlen, Roermond, Venlo, Weert, Geleen — is een airco-buitenunit
              <strong> vergunningvrij</strong> als hij aan de zij- of achtergevel hangt, niet hoger dan 5 m boven het maaiveld
              zit, en niet zichtbaar is vanaf de openbare weg. Op de grond gelden andere maten: maximaal 1 m hoog en niet
              groter dan 2 m² (IPLO/Omgevingsloket).
            </p>

            <p>
              <strong>Maastricht is het Limburgse uitzonderingsgeval.</strong> In delen van de binnenstad, bij monumenten en in
              gebieden met beschermd stadsgezicht is bijna altijd een omgevingsvergunning nodig — ook voor units die elders
              vergunningvrij zouden zijn. We zien dit regelmatig in het Stokstraatkwartier, het Jekerkwartier en rond de Markt.
              Doe altijd de Vergunningcheck van het Omgevingsloket op je eigen adres voor je een definitieve afspraak maakt.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Geluidsnorm: 45 / 40 dB(A) op de erfgrens</h3>
            <p>
              Sinds <strong>1 januari 2024</strong> geldt op grond van het <strong>Bbl (Besluit bouwwerken leefomgeving),
              artikel 4.107</strong> — opvolger van het Bouwbesluit — een harde geluidsnorm: het geluid van een
              warmtepomp- of airco-buitenunit mag op de erfgrens niet meer zijn dan <strong>45 dB(A) overdag</strong> en
              <strong> 40 dB(A) 's nachts</strong>. In de praktijk betekent dat:
            </p>

            <ul>
              <li>Minstens 1-2 m van de erfgrens, op trillingsdempers</li>
              <li>Liever niet recht onder een slaapkamerraam van de buren</li>
              <li>Geluidsschermen (sommige merken) kunnen 5-8 dB(A) schelen als de plek krap is</li>
            </ul>

            <p>
              Voor een uitgebreidere uitleg over plaatsing en de exacte criteria zie onze
              {' '}<Link to="/seo/pillar-7-technische-gidsen/airco-buitenunit-plaatsing">complete gids over airco buitenunit-plaatsing</Link>.
              We doen bij de opname altijd een geluidsschets — als de standaardplek aan de norm twijfelt, kiezen
              we direct een alternatief.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">VVE en huurwoning</h3>
            <p>
              Wonen in een appartement met VVE: vrijwel altijd toestemming nodig van de VVE-vergadering (gevel = gemeenschappelijk
              eigendom). Huurwoning: schriftelijke toestemming van de verhuurder, plus de afspraak hoe het bij verhuizen geregeld is.
              We installeren niet zonder die papieren — daarmee bescherm je jezelf tegen herstelkosten of boete.
            </p>

            {/* Sectie 5 — DIY */}
            <h2 id="zelf-doen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Mag je zelf airco plaatsen?</h2>

            <p>
              De units ophangen — wandbeugel boren, unit erop — mag je technisch zelf. Wat <strong>niet</strong> mag:
              vacumeren en vullen met R32 of R410A koudemiddel. Dat is een wettelijke handeling die alleen door een
              <strong> F-gas-gecertificeerd persoon</strong> mag worden uitgevoerd (EU-verordening 517/2014). Doe je het
              toch zelf, en het komt aan het licht — bv. wanneer een latere monteur het bij service ontdekt, of bij een
              koudemiddel-lekkage waar de fabrikant op aanslaat — dan loopt de boete op tot <strong>€1.500</strong>.
            </p>

            <p>
              In de praktijk: we krijgen elk jaar een handvol "ik heb hem al gehangen, kunnen jullie hem alleen vullen?"-aanvragen.
              Antwoord is meestal "ja, maar we vacumeren eerst opnieuw zodat we kunnen tekenen voor onze montage" — en dan
              wordt het al snel duurder dan een complete installatie geweest zou zijn. Lees onze eerlijke uitleg in
              {' '}<Link to="/kennisbank/airco-bijvullen-zelf-doen">kennisbank: airco bijvullen zelf doen</Link>.
            </p>

            {/* Sectie 6 — onderhoud */}
            <h2 id="onderhoud" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Onderhoud na installatie</h2>

            <p>
              Een airco is een mechanisch apparaat met koudemiddel onder druk — die wil één keer per jaar gecheckt worden:
              filter reinigen, druk meten, lekkage controleren, condensafvoer doorblazen. Dat is bij ons <strong>€99 per beurt</strong>{' '}
              of <strong>€11/mnd</strong> in onderhoudscontract (€132/jaar) met voorrang bij storing en 10% korting op reparaties.
            </p>

            <p>
              Tussen onderhoudsbeurten kun je zelf veel doen: filter elke maand even uitkloppen of onder de kraan afspoelen
              voorkomt 70% van de servicebellen. Hoe ouder de airco, hoe relevanter dat wordt. Voor alle service-typen
              (jaarlijks onderhoud, storing, reparatie, bijvullen) zie {' '}<Link to="/airco-service">/airco-service</Link>.
              Specifiek voor service in onze regio: {' '}<Link to="/airco-service-limburg">complete airco service in heel Limburg</Link>.
              En als de airco minder gaat koelen, dan is de eerste check meestal koudemiddel —
              {' '}<Link to="/airco-bijvullen">wanneer airco bijvullen nodig is</Link>.
            </p>

            {/* Sectie 7 — werkgebied */}
            <h2 id="werkgebied" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Hele Limburg, één vaste crew</h2>

            <p>
              We zijn met een klein team en doen alles zelf — geen onderaannemers, geen wisselend gezicht. Marvin (eigenaar,
              F-gassen + STEK gecertificeerd) en vaste monteur Danny rijden vanaf Nieuwstadt. Werkgebied:
            </p>

            <ul>
              <li><strong>Zuid-Limburg:</strong> Maastricht, Heerlen, Sittard-Geleen, Brunssum, Kerkrade, Landgraaf, Valkenburg, Beek, Stein, Voerendaal, Hoensbroek, Vaals, Eijsden-Margraten, Gulpen-Wittem, Meerssen.</li>
              <li><strong>Midden-Limburg:</strong> Roermond, Echt-Susteren, Maasbracht, Weert, Nederweert.</li>
              <li><strong>Noord-Limburg:</strong> Venlo, Venray, Horst, Tegelen, Panningen, Gennep.</li>
            </ul>

            <p>
              We hebben sinds 2021 ruim 1.000 installaties achter de rug, en eerlijk gezegd: telefonische bereikbaarheid
              is bij ons niet altijd top — we zijn vaak op pad bij klanten. WhatsApp (06 36481054) is meestal de snelste
              route voor een eerste reactie. Voor de praktijk-context van een installatie in Zuid-Limburg, lees ook
              {' '}<Link to="/blog/airco-installatie-zuid-limburg">de Zuid-Limburg installatie-praktijk</Link>.
            </p>

            <p>
              <em>— Marvin Smit, StayCool Airco</em>
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Veelgestelde vragen</h2>

            <div className="not-prose space-y-4 my-8">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Airco laten plaatsen in Limburg?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag een vrijblijvende opname aan — we komen langs, meten op, en geven concrete prijs in 24-48 uur.
            Geen verplichtingen, geen verkooppraatje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />Bel 046 202 1430
            </a>
            <a
              href="https://wa.me/31636481054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              WhatsApp 06 36481054
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-800 text-white font-bold rounded-lg hover:bg-orange-900 transition-colors text-lg"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoPlaatsenLimburg;
