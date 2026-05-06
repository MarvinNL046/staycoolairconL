import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle, Phone, Wrench, AlertTriangle, ShieldCheck, Clock, Calendar, Droplets, Zap, Filter,
} from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { aggregateReviews } from '../data/reviews';

const CANONICAL_URL = 'https://staycoolairco.nl/airco-service';

const AircoService: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco service' },
  ];

  // ─── 5 service-typen — hub-and-spoke naar bestaande supporting pages ────────
  const serviceTypen = [
    {
      icon: <Calendar className="h-10 w-10 text-sky-500" />,
      titel: 'Jaarlijks onderhoud',
      tekst: 'Preventief, eenmaal per jaar. Filter, drukcheck, lekcontrole, algehele inspectie. Vanaf €99 per beurt of €11/mnd in onderhoudscontract.',
      url: '/seo/pillar-2-onderhoud-service/jaarlijks-airco-onderhoud',
      cta: 'Bekijk jaarlijks onderhoud →',
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-orange-500" />,
      titel: 'Storing oplossen',
      tekst: 'Airco doet niet meer wat hij moet doen — geen koeling, ijsvorming, foutcode op het display. Diagnose ter plaatse, oplossing meestal binnen één werkdag.',
      url: '/seo/pillar-2-onderhoud-service/airco-storing-oplossen',
      cta: 'Bekijk storingsservice →',
    },
    {
      icon: <Wrench className="h-10 w-10 text-red-500" />,
      titel: 'Reparatie',
      tekst: 'Onderdeel kapot, lek bij een verbinding, compressor-defect. We diagnosticeren, geven offerte, en repareren met 1 jaar werk-garantie.',
      url: '/seo/pillar-2-onderhoud-service/airco-reparatie-service',
      cta: 'Bekijk reparatiediensten →',
    },
    {
      icon: <Droplets className="h-10 w-10 text-blue-500" />,
      titel: 'Bijvullen + lekdetectie',
      tekst: 'Verminderde koeling vaak = lek + tekort koudemiddel. Wij doen lekdetectie eerst, repareren, dan pas bijvullen. R32, R410A, R407C.',
      url: '/airco-bijvullen',
      cta: 'Bekijk airco bijvullen →',
    },
    {
      icon: <Filter className="h-10 w-10 text-green-500" />,
      titel: 'Filter reiniging',
      tekst: 'Maandelijks filter zelf reinigen voorkomt 70% van de servicebellen. Diepere reiniging (inwendige verdamper) doen wij bij groot onderhoud.',
      url: '/seo/pillar-2-onderhoud-service/airco-filter-reiniging',
      cta: 'Bekijk filter reiniging →',
    },
  ];

  // ─── Prijstabel — service per type, all-in incl. BTW ────────────────────────
  const prijsTabel = [
    {
      label: 'Onderhoudscontract single-unit',
      prijs: 'vanaf €11/mnd',
      details: 'Premium pakket: jaarlijks onderhoud + voorrang bij storing + 10% korting op reparaties. €132/jaar incl. BTW.',
    },
    {
      label: 'Losse onderhoudsbeurt',
      prijs: '€99 – €150',
      details: 'Filter, drukcheck, lekcontrole, algehele inspectie. Eenmalig of zonder contract.',
    },
    {
      label: 'Storingsbezoek + diagnose',
      prijs: '€89 voorrijden',
      details: 'Verrekend in totaalbedrag bij reparatie. Diagnose krijgt u op papier voordat we doorgaan.',
    },
    {
      label: 'Lekdetectie + diagnose koudemiddel',
      prijs: 'vanaf €149',
      details: 'UV-tracer, drukmeting, elektronische detector. Combineerbaar met bijvulling.',
    },
    {
      label: 'Reparatie kleine onderdelen (sensor, klep)',
      prijs: '€95 – €175',
      details: 'Inclusief onderdeel + arbeid. Bij meerwerk vooraf nieuwe offerte.',
    },
    {
      label: 'Reparatie groot onderdeel (printplaat, motor)',
      prijs: '€225 – €450',
      details: 'Onderdeel-kost + arbeid. We rekenen vooraf of reparatie nog rendabel is voor de leeftijd van uw unit.',
    },
    {
      label: 'Compressor-vervanging',
      prijs: 'op aanvraag',
      details: 'Bij oudere units (10+ jaar) vaak goedkoper een nieuwe airco te installeren — we rekenen het door.',
    },
  ];

  const wanneerServiceGeval = [
    {
      symptoom: 'Verminderde koeling',
      actie: 'Filter zelf reinigen (gratis), buitenunit vrijhouden. Werkt het niet? → bel ons binnen 1-3 dagen voordat compressor schade krijgt.',
    },
    {
      symptoom: 'Foutcode op display',
      actie: 'Stuur foto van de code via WhatsApp (06 36481054). Veel codes zijn op afstand te interpreteren — vaak filter of sensor-probleem dat u zelf oplost.',
    },
    {
      symptoom: 'Sissend of borrelend geluid',
      actie: 'Vrijwel altijd koudemiddel-lek. Stop met gebruik en bel direct. Doordraaien = compressor-schade van €1.500-€2.500.',
    },
    {
      symptoom: 'Water lekt uit binnenunit',
      actie: 'Meestal verstopte condensafvoer. Wij blazen die door (€95-€135). Soms zelf op te lossen door afvoerbakje schoon te maken.',
    },
    {
      symptoom: 'Airco slaat niet meer aan',
      actie: 'Check eerst: stop in stopcontact, batterijen afstandsbediening, zekering meterkast, thermostaat-modus. 4 op 10 keer is dat de oorzaak. Zo niet: storingsbezoek.',
    },
    {
      symptoom: 'IJsvorming op leidingen',
      actie: 'Stop direct met gebruik. Vrijwel altijd: koudemiddel-tekort + onderliggend lek. Bel ons dezelfde dag.',
    },
  ];

  const faqItems = [
    {
      question: 'Hoe vaak moet airco onderhoud gedaan worden?',
      answer: 'Eén keer per jaar minimaal — bij voorkeur in het voorjaar voor het hoogseizoen. Bij intensief gebruik (zakelijk, 8+ uur per dag) of voor multi-split-systemen adviseren we twee beurten per jaar. In ons onderhoudscontract van €11/mnd zit één jaarlijkse beurt standaard inbegrepen — meer afspraken op aanvraag.',
    },
    {
      question: 'Wat zit er in een onderhoudscontract van StayCool?',
      answer: 'Ons Premium pakket vanaf €11/mnd bevat: jaarlijks preventief onderhoud (filter, drukcheck, lekcontrole, inspectie van alle componenten), voorrang bij spoed-storingen tijdens het seizoen, en 10% korting op alle reparaties die buiten het preventief onderhoud vallen. Voor 2 of meer binnenunits hebben we een tweede pakket — zie de details op de pagina airco onderhoud.',
    },
    {
      question: 'Wat kost een airco-storing oplossen?',
      answer: 'Storingsbezoek (voorrijden + diagnose op locatie) is €89. Bij reparatie verrekenen we dat bedrag in de totaalprijs. Reparatiekosten variëren: kleine onderdelen €95-€175, grote onderdelen €225-€450, compressor-defect €600+ (vaak rendabeler om te vervangen). Exact bedrag staat in de offerte voordat we beginnen.',
    },
    {
      question: 'Kan ik losse beurt boeken zonder contract?',
      answer: 'Zeker. Een losse onderhoudsbeurt kost €99-€150 afhankelijk van type systeem. Praktisch verschil met een contract: bij een contract betaalt u €132/jaar (€11×12) en krijgt u priority bij storingen. Bij losse beurten is de prijs vergelijkbaar maar zonder voorrang — in piekweken (juli-augustus) kan u 2-3 weken moeten wachten.',
    },
    {
      question: 'Hoe snel kunnen jullie ter plaatse zijn bij storing?',
      answer: 'Voor klanten in Limburg: meestal binnen 1-3 werkdagen. In het laagseizoen (november-maart) regelmatig dezelfde week. In de zomerpiek (juni-augustus) loopt dat op tot 5-7 werkdagen — daar kan een onderhoudscontract verschil maken (voorrang). Voor échte spoed (lekkage, ijsvorming, compressor draait door) maken we ruimte op dezelfde dag.',
    },
    {
      question: 'Werken jullie ook in zakelijke setting?',
      answer: 'Ja — voor kantoorpanden, winkels, restaurants en kleine bedrijven. Voor zakelijke klanten geldt verplichte lekcontrole bij systemen boven 5 ton CO₂-equivalent (vrijwel alle VRF/VRV-systemen): bij 5-50 ton één keer per jaar, bij 50-500 ton één keer per half jaar. Wij plannen dat automatisch in een onderhoudscontract en houden uw F-gas-logboek bij.',
    },
    {
      question: 'Wat als de unit te oud is om nog te repareren?',
      answer: 'We zeggen het eerlijk. Voor units van 10+ jaar met een grote storing rekenen we door of reparatie of vervanging voordeliger is. Vaak is een nieuwe single-split-installatie van €1.600 all-in binnen 4-6 jaar terugverdiend door lager stroomverbruik (moderne SCOP 4-5 vs ~2,5 op oudere systemen) en moderne R32 koudemiddel. Geen verkooppraat — u krijgt de getallen, u kiest.',
    },
    {
      question: 'Welke garantie krijg ik op service-werk?',
      answer: '1 jaar volledige garantie op het werk dat we verrichten — als hetzelfde onderdeel of dezelfde verbinding binnen 12 maanden weer faalt door onze fout, kosteloos opgelost. Op vervangen onderdelen geldt de fabrieksgarantie van die onderdeel-leverancier (meestal 2-5 jaar afhankelijk van merk).',
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
          { '@type': 'ListItem', position: 2, name: 'Airco service', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${CANONICAL_URL}#service`,
        serviceType: 'Airco service en onderhoud',
        name: 'Airco service Limburg — onderhoud, storing, reparatie, bijvullen',
        description: 'Complete airco service in Limburg: jaarlijks onderhoud vanaf €11/mnd, storing oplossen, reparatie, koudemiddel bijvullen. F-gassen + STEK gecertificeerd, 1 jaar garantie op werk.',
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
          lowPrice: '11',
          highPrice: '650',
          offerCount: '7',
          description: 'Onderhoudscontract vanaf €11/mnd. Losse onderhoudsbeurt €99-€150. Storingsbezoek €89 voorrijden. Reparaties €95-€450. Lekdetectie + bijvullen €149-€650.',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Service-typen',
          itemListElement: serviceTypen.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.titel },
          })),
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
        title="Airco Service Limburg | Onderhoud vanaf €11/mnd | StayCool"
        description="Airco service in Limburg: onderhoudscontract vanaf €11/mnd, storing oplossen, reparatie, koudemiddel bijvullen. F-gas + STEK gecertificeerd. 1 jaar garantie. Bel 046 202 1430"
        canonicalUrl={CANONICAL_URL}
        type="service"
        serviceType="Airco service"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco service in Limburg — alles op één plek
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Onderhoud vanaf €11/mnd, storing oplossen binnen 1-3 werkdagen, reparatie, lekdetectie en bijvullen.
            F-gassen + STEK gecertificeerd — heel Limburg, vanaf Nieuwstadt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <ShieldCheck className="h-5 w-5 mr-2" />Vraag offerte aan
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />Bel direct: 046 202 1430
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" />F-gas + STEK gecertificeerd</span>
            <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" />1 jaar werk-garantie</span>
            <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" />1.000+ servicebezoeken</span>
            <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" />Heel Limburg</span>
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
            <a href="#service-typen" className="text-sky-700 hover:underline">5 service-typen</a>
            <a href="#prijzen" className="text-sky-700 hover:underline">Prijzen 2026</a>
            <a href="#wanneer-bellen" className="text-sky-700 hover:underline">Wanneer bel je ons</a>
            <a href="#contract-vs-los" className="text-sky-700 hover:underline">Contract vs. los</a>
            <a href="#onderhoudsbeurt-stappen" className="text-sky-700 hover:underline">Wat doen we precies</a>
            <a href="#proces" className="text-sky-700 hover:underline">Hoe het werkt</a>
            <a href="#zakelijk" className="text-sky-700 hover:underline">Zakelijk</a>
            <a href="#faq" className="text-sky-700 hover:underline">Veelgestelde vragen</a>
          </nav>
        </div>
      </section>

      {/* 5 service-typen — hub naar supporting pages */}
      <section id="service-typen" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">5 soorten airco service — wat hebt u nodig?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Service is een breed begrip. Hieronder de vijf veelgevraagde categorieën, met directe link naar de detailpagina van elk type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypen.map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.titel}</h3>
                <p className="text-gray-600 mb-4 text-sm">{s.tekst}</p>
                <Link to={s.url} className="text-sky-600 hover:text-sky-700 font-medium text-sm">{s.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Een airco draait 5 tot 15 jaar mee — als u 'm goed onderhoudt. Op deze pagina staat hoe ons service-aanbod is opgebouwd, wat de prijzen zijn, en wanneer u welk type service kiest. <strong>Eerlijk uitgangspunt:</strong> de goedkoopste service is de service die u niet nodig heeft. Daarom adviseren we vroeg een onderhoudscontract af te sluiten — meestal voorkomt u daarmee de duurdere reparaties die ontstaan als kleine problemen niet vroeg worden opgemerkt.
            </p>

            <h2 id="prijzen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Prijzen 2026 — alles all-in incl. BTW</h2>

            <p>
              Hieronder de richtprijzen per service-type. Bij ons betekent "all-in" inclusief BTW, voorrijden binnen Limburg, koudemiddel waar van toepassing, en NEa-registratie waar wettelijk verplicht. Wat in de offerte staat is wat u betaalt — geen meerwerk-verrassingen achteraf.
            </p>

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
                          <p className="text-sm text-gray-600 mt-1 md:hidden">{row.details}</p>
                        </td>
                        <td className="p-4 align-top whitespace-nowrap font-semibold text-sky-700">{row.prijs}</td>
                        <td className="p-4 align-top text-sm text-gray-600 hidden md:table-cell">{row.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              Ter vergelijking: Werkspot en Homedeal melden marktprijzen van €75-€150 per losse onderhoudsbeurt en €110-€190 per jaar voor een onderhoudscontract. Onze €11/mnd (€132/jaar) zit precies in de markt — niet de allergoedkoopste, niet duur, maar wel met voorrang en 10% korting op reparaties die andere partijen niet bieden.
            </p>

            <h2 id="wanneer-bellen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Wanneer belt u ons (en wanneer kunt u zelf wat)</h2>

            <p>
              Niet elk geluid of foutmelding vraagt een installateur. Hieronder zes veelvoorkomende symptomen, met advies wat u zelf kunt proberen voordat u belt. Doel: u helpen besparen op onnodige bezoeken.
            </p>

            <div className="space-y-4 my-8">
              {wanneerServiceGeval.map((g, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-sky-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Zap className="h-5 w-5 text-sky-500 mr-2 flex-shrink-0" />
                    {g.symptoom}
                  </h3>
                  <p className="text-gray-700">{g.actie}</p>
                </div>
              ))}
            </div>

            <p>
              Een service-bezoek dat we zelf vermijden door eerlijk te zeggen "probeer dit eerst" is geen omzet-verlies — het is vertrouwen voor de keren dat u ons echt nodig hebt. Voor een complete uitleg over wat u zelf kunt onderhouden: zie ook <Link to="/seo/pillar-2-onderhoud-service/airco-filter-reiniging" className="text-sky-600 underline">filter reiniging stap voor stap</Link>.
            </p>

            <h2 id="contract-vs-los" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Onderhoudscontract of losse beurt — wat past bij u?</h2>

            <p>
              Concrete vraag waar veel klanten mee zitten. Drie scenario's en wat we adviseren:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Calendar className="h-5 w-5 text-sky-500 mr-2" />
                  Kies een onderhoudscontract als...
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• U gebruikt de airco 4+ maanden per jaar (intensief)</li>
                  <li>• Multi-split-systeem of 2+ binnenunits</li>
                  <li>• Zakelijke installatie (verplichte lekcontrole boven 5 ton CO₂eq)</li>
                  <li>• U wilt voorrang bij storing in de zomerpiek</li>
                  <li>• U vindt vaste maandkosten prettig boven onverwachte rekeningen</li>
                </ul>
                <Link to="/airco-onderhoud" className="inline-block mt-4 text-sky-700 font-semibold hover:text-sky-900">
                  → Bekijk de pakketten vanaf €11/mnd
                </Link>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-amber-600 mr-2" />
                  Losse beurt is genoeg als...
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Single-unit, gebruikt &lt; 4 maanden per jaar</li>
                  <li>• Recente installatie (eerste 2 jaar onder fabrieksgarantie)</li>
                  <li>• U bent bereid 2-3 weken te wachten in piek</li>
                  <li>• Niet bezwaarlijk losse facturen te krijgen</li>
                </ul>
                <p className="text-sm text-gray-700 mt-4">
                  Losse beurt: €99-€150 per jaar. Plan in via 046 202 1430.
                </p>
              </div>
            </div>

            <p>
              Praktisch verschil over 5 jaar: contract €660 totaal, losse beurten €595-€750. Comparable kostprijs — het verschil zit in de voorrang bij storingen en de 10% korting op reparaties. Bij één enkele reparatie van €350 hebt u die korting al terugverdiend.
            </p>

            <h2 id="onderhoudsbeurt-stappen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">
              Wat doen we precies bij een onderhoudsbeurt?
            </h2>

            <p>
              Veel onderhoudsbedrijven zeggen "we doen onderhoud" zonder concreet te maken wat dat is. Hieronder onze werkelijke stappen — geen marketing-tekst, maar wat onze monteurs daadwerkelijk doen op locatie. Dit verschilt bewust van bedrijven die alleen een filter afstoffen en weer wegrijden.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 my-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Binnenunit — diepe reiniging</h3>
              <ol className="space-y-3 list-decimal ml-6 text-gray-700">
                <li>
                  <strong>Kapjes en filterhouder demonteren.</strong>
                  We halen de behuizing van de binnenunit eraf — niet alleen het filter eruit klikken zoals u zelf doet, maar echt opengelegd zodat we bij de verdamper kunnen.
                </li>
                <li>
                  <strong>Waterzak monteren.</strong>
                  Onder de binnenunit komt een speciale opvangzak. Reden: we gaan straks met druk spuiten en zonder die zak druipt vuil reinigingswater op uw plafond, muur of meubels. Standaard onderdeel, geen extra kosten.
                </li>
                <li>
                  <strong>Verdamper en ventilator uitspuiten.</strong>
                  Met een professionele drukspuit (chemisch reinigingsmiddel + water) reinigen we de aluminium lamellen van de verdamper en de bladen van de ventilator-rol. Hier zit jaarlijks een laag stof, vet en schimmel — onzichtbaar voor u, maar de hoofdoorzaak van vermogensverlies en muffe geur.
                </li>
                <li>
                  <strong>Antibacteriële spray + parfum.</strong>
                  Na de reiniging brengen we een antibacterieel middel aan dat schimmel en bacteriën in de verdamper aanpakt, plus een neutrale geur. De airco ruikt na onderhoud weer fris in plaats van naar "warme stof".
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Buitenunit — uit elkaar en doorspuiten</h3>
              <ol start={5} className="space-y-3 list-decimal ml-6 text-gray-700">
                <li>
                  <strong>Buitenunit gedeeltelijk demonteren.</strong>
                  Buitenkap eraf, eventueel ventilator-rooster los. Zo kunnen we bij de condensor-lamellen en de ventilator-motor — twee onderdelen die door bladeren, pollen en regen flink kunnen vervuilen.
                </li>
                <li>
                  <strong>Condensor-lamellen volledig doorspuiten.</strong>
                  Vuile lamellen verlagen de warmte-afgifte aanzienlijk. Een schone buitenunit gebruikt 10-20% minder stroom voor dezelfde koeling — direct merkbaar op uw rekening over een seizoen.
                </li>
                <li>
                  <strong>Ventilatormotor controleren.</strong>
                  We luisteren naar lagers (rommelt? — vervangen voordat hij vastloopt), checken trilling, smering en spanning op de motor. Een ventilator die op het punt van vastlopen staat detecteren we hier vóór hij u op een hete dag in de steek laat.
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Wel of niet aan het koudemiddel zitten?</h3>
              <p className="text-gray-700">
                <strong>Standaard niet.</strong> Een airco is een gesloten systeem. Als hij goed werkt, zit het koudemiddel op de juiste druk en hoeft er niets bij. Wij meten alléén de druk en checken op koudemiddel-lekken bij <strong>verdenking van mindere werking of géén werking</strong> — bv. de unit koelt slecht ondanks schone filter, of compressor draait constant door. Voor een routine-beurt zonder klachten is drukmeting overbodig en zelfs onverstandig: elke aansluiting van het manometerset op de servicepoort is een potentieel klein lekrisico.
              </p>
              <p className="text-gray-700 mt-3">
                Krijgt u dus een offerte waarbij "koudemiddel checken" of "drukmeting" standaard wordt mee-gefactureerd op een routine-onderhoud? Vraag waarom. Bij ons doen we het alleen als de klachten erom vragen — meer over koudemiddel en de F-gas-procedure: zie <Link to="/airco-bijvullen" className="text-sky-600 underline">de pagina airco bijvullen</Link>.
              </p>
            </div>

            <h2 id="proces" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Hoe een service-bezoek loopt</h2>

            <p>
              Vanaf het moment dat u belt tot we wegrijden — zes stappen, transparant.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 my-8">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                  <div>
                    <strong className="text-gray-900">Telefoon of WhatsApp</strong>
                    <p className="text-gray-600 text-sm">U belt 046 202 1430 of stuurt foto via WhatsApp 06 36481054 (vaak het snelst). Beschrijf het probleem; we geven indicatie van prijsband en plannen het bezoek.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                  <div>
                    <strong className="text-gray-900">Inplannen</strong>
                    <p className="text-gray-600 text-sm">Onderhoud: binnen 1-3 weken (of vaste datum bij contract). Storing: 1-3 werkdagen. Spoed: dezelfde dag waar mogelijk.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                  <div>
                    <strong className="text-gray-900">Diagnose ter plaatse</strong>
                    <p className="text-gray-600 text-sm">We rapporteren wat we zien — geen vaag jargon, gewoon uitleg. Meestal Danny, onze vaste monteur die in reviews vaak bij naam wordt genoemd.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                  <div>
                    <strong className="text-gray-900">Offerte voordat we beginnen</strong>
                    <p className="text-gray-600 text-sm">Geen meerwerk-verrassingen achteraf. Gaat het om reparatie? Dan krijgt u eerst het bedrag op papier voordat we doorgaan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                  <div>
                    <strong className="text-gray-900">Werkzaamheden</strong>
                    <p className="text-gray-600 text-sm">Onderhoud meestal 30-60 minuten. Reparatie: enkele uren tot een werkdag. We laten netjes achter — geen rommel, geen achtergebleven gereedschap.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-3">6</span>
                  <div>
                    <strong className="text-gray-900">Test, factuur, garantie</strong>
                    <p className="text-gray-600 text-sm">Volledige werkingstest voor we wegrijden. Factuur op naam met BTW-specificatie en omschrijving. 1 jaar werk-garantie — bewaar de factuur voor eventuele claims.</p>
                  </div>
                </li>
              </ol>
            </div>

            <h2 id="zakelijk" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Zakelijk — wat u moet weten</h2>

            <p>
              Voor zakelijke klanten (kantoorpanden, winkels, restaurants, kleine bedrijven) gelden andere regels. Drie verschillen met particuliere service:
            </p>

            <ul className="space-y-2 ml-6 my-6">
              <li>
                <strong>Verplichte lekcontroles voor systemen &gt; 5 ton CO₂-equivalent.</strong>
                Bij 5-50 ton: één keer per jaar. Bij 50-500 ton: één keer per half jaar. Vrijwel alle VRF/VRV-systemen vallen in deze categorie. Boete bij non-compliance loopt op tot duizenden euro's per overtreding. Met een onderhoudscontract plannen we dat automatisch in en houden uw F-gas-logboek bij.
              </li>
              <li>
                <strong>F-gas-logboek-verplichting.</strong>
                Per koudemiddelmutatie (toevoegen, afnemen, terugwinnen) moet u een logboek bijhouden dat aantoont aan welke wetgeving u voldoet. Wij vullen dat correct in en u krijgt elk jaar een uitdraai voor uw boekhouding/audit.
              </li>
              <li>
                <strong>Andere prijspunten.</strong>
                Zakelijke onderhoudscontracten beginnen meestal vanaf €25-€40/mnd (afhankelijk van systeem-grootte). Reparaties kennen vaak SLA-afspraken (binnen 24 uur, binnen 4 uur). Voor een offerte op uw specifieke situatie: bel 046 202 1430.
              </li>
            </ul>

            <p>
              Voor zakelijke klanten in heel Limburg bedienen we onder andere bedrijven in Maastricht, Heerlen, Sittard-Geleen, Roermond, Venlo en Weert. Werken we al samen met installatiepartners voor nieuwbouw — service- en onderhoudscontracten zijn een aparte propositie die we los offreren.
            </p>

            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Veelgestelde vragen over airco service</h2>

            <div className="space-y-4 my-8">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Service nodig? Drie routes.</h2>
          <p className="text-xl mb-8 text-orange-50">
            Onderhoudscontract afsluiten, losse beurt boeken, of acute storing melden — bel of stuur een appje, we plannen direct.
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
              to="/airco-onderhoud"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-800 text-white font-bold rounded-lg hover:bg-orange-900 transition-colors text-lg"
            >
              Contract vanaf €11/mnd →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoService;
