import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, Thermometer, Zap, TrendingDown, AlertTriangle, Calculator } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { aggregateReviews } from '../data/reviews';

const CANONICAL_URL = 'https://staycoolairco.nl/airco-warmtepomp';

const AircoWarmtepomp: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco-warmtepomp' },
  ];

  // Vergelijking systemen
  const systeemVergelijking = [
    {
      type: 'Airco-warmtepomp (lucht-lucht)',
      scop: '4,0 – 5,3',
      investering: '€1.600 – €5.500 all-in',
      werkt: 'Ja, vanaf 1e dag',
      isde: false,
      besparing: '55% t.o.v. gas, 75% t.o.v. elektrisch',
      voor: 'Particuliere woning met goede gas-CV als back-up; tussenseizoenen + zomerverwarming',
    },
    {
      type: 'Lucht-water warmtepomp',
      scop: '3,5 – 5,0',
      investering: '€8.000 – €15.000 all-in',
      werkt: 'Vereist nieuwe radiatoren of vloerverwarming',
      isde: true,
      besparing: '60% t.o.v. gas (bij goed-geïsoleerde woning)',
      voor: 'Woning waar gas-CV vervangen wordt + LT-verwarming aanwezig',
    },
    {
      type: 'Hybride warmtepomp',
      scop: '3,5 – 4,2',
      investering: '€5.000 – €9.000',
      werkt: 'Naast bestaande gas-CV',
      isde: true,
      besparing: '40-50% t.o.v. gas',
      voor: 'Tussenstap voor woningen die nog niet vol-elektrisch willen',
    },
    {
      type: 'Bodemwarmtepomp',
      scop: '4,5 – 5,5',
      investering: '€16.000 – €25.000',
      werkt: 'Vereist grondbron-installatie',
      isde: true,
      besparing: '70% t.o.v. gas',
      voor: 'Vrijstaande woning met tuin; lange terugverdientijd',
    },
  ];

  // Concrete besparingscijfers Limburgs huis
  const besparingsScenario = [
    {
      huistype: 'Rijtjeshuis 1970-1990 (gemiddeld geïsoleerd, 110 m²)',
      gasVerbruikJaar: '€2.200 – €2.600',
      airco: 'Single-split 5 kW + behoud gas-CV',
      airco_gebruik: 'Sept-mei verwarmen met airco, dec-feb soms gas-CV bij <-3°C',
      jaarkosten: '€900 stroom (airco) + €700 gas (back-up) = €1.600',
      besparing: '€700 – €900/jaar',
      terugverdien: '4 – 5 jaar',
    },
    {
      huistype: 'Goed geïsoleerde woning na 2010 (140 m²)',
      gasVerbruikJaar: '€1.500 – €1.900',
      airco: 'Multi-split 7 kW + behoud gas-CV',
      airco_gebruik: 'Vrijwel hele jaar verwarmen met airco; gas-CV alleen bij <-5°C',
      jaarkosten: '€800 stroom + €350 gas = €1.150',
      besparing: '€450 – €650/jaar',
      terugverdien: '5 – 7 jaar',
    },
    {
      huistype: 'Vrijstaande woning < 1980, beperkte isolatie (180 m²)',
      gasVerbruikJaar: '€3.500 – €4.500',
      airco: 'Multi-split 10 kW als bijverwarming',
      airco_gebruik: 'Tussenseizoenen volledig airco; winter combi',
      jaarkosten: '€1.300 stroom + €1.800 gas = €3.100',
      besparing: '€1.000 – €1.500/jaar',
      terugverdien: '3 – 4 jaar',
    },
  ];

  const faqItems = [
    {
      question: 'Is een airco hetzelfde als een warmtepomp?',
      answer: 'Een moderne airco is technisch een lucht-lucht warmtepomp. Hij gebruikt een koudemiddel-cyclus om warmte te transporteren — in de zomer naar buiten (koelen), in de winter naar binnen (verwarmen). Hetzelfde principe als een lucht-water warmtepomp, alleen geeft die de warmte af aan water (radiatoren) in plaats van direct aan de kamerlucht. Voor de overheid en RVO zijn het verschillende categorieën: lucht-water krijgt ISDE, lucht-lucht (= airco) niet.',
    },
    {
      question: 'Hoeveel goedkoper is verwarmen met airco vergeleken met gas?',
      answer: 'Op basis van actuele tarieven (2026): verwarmen met airco kost ongeveer €0,07 per kWh warmte (bij SCOP 4,5 en stroom €0,32/kWh). Verwarmen met gas-CV kost €0,12 per kWh warmte (bij gas €1,15/m³ en CV-rendement 95%). Dat is 42% goedkoper per kWh. In de praktijk, voor de gemiddelde Limburgse winter, levert dit een jaarlijkse besparing op van €450-€1.500 — afhankelijk van woninggrootte en isolatie. Specifieke berekening per woning: zie de tabel in de sectie over besparingsscenario\'s.',
    },
    {
      question: 'Wat is SCOP en COP precies?',
      answer: 'COP (Coefficient Of Performance) = de verhouding tussen warmte-output en stroom-input op een gegeven moment. SCOP (Seasonal COP) = het seizoengemiddelde over een verwarmingsseizoen. SCOP is realistischer omdat het rekening houdt met variërende buitentemperaturen. Bij +7°C kan een unit COP 5 halen, bij -5°C zakt dat naar COP 2,5 — gemiddeld over het seizoen kom je dan rond SCOP 4-4,5. Hoger SCOP = zuiniger. Moderne A+++-airco\'s halen SCOP 4,5-5,3.',
    },
    {
      question: 'Werkt een airco-warmtepomp ook bij vorst?',
      answer: 'Tot ongeveer -10 à -15°C werkt een airco-warmtepomp gewoon door, maar het rendement valt terug. Bij +7°C levert hij maximaal 4,5-5 kWh warmte per kWh stroom; bij -5°C zakt dat naar 2-3 kWh. Voor de gemiddelde Limburgse winter (zelden langer dan een paar dagen onder -5°C) is dat geen probleem. Onze advies: behoud uw gas-CV als back-up voor extreme koude — beter twee keer per winter de gas-CV aan dan een airco-warmtepomp die op zijn limiet draait.',
    },
    {
      question: 'Kan ik mijn gas-CV vervangen door alleen een airco-warmtepomp?',
      answer: 'Theoretisch kan dat, maar voor de meeste woningen adviseren we het niet. Reden: bij extreme koude (onder -10°C) zakt het rendement van een lucht-lucht warmtepomp dramatisch. Plus de luchtverdeling: een airco werkt per ruimte, een gas-CV verwarmt het hele huis via radiatoren. Beste praktijk: airco-warmtepomp als hoofdverwarming voor 90% van het seizoen, gas-CV als back-up. Voor volledige gas-CV-vervanging is een lucht-water warmtepomp (mét ISDE) geschikter — maar die kost €8.000-€15.000.',
    },
    {
      question: 'Krijg ik subsidie voor een airco-warmtepomp?',
      answer: 'Geen ISDE in 2026 (zie onze pagina over airco subsidie voor de uitleg). Wel: 9% BTW op installatie bij woning >2 jaar oud (~€155 besparing). Soms gemeentelijke energieregelingen — wisselend per gemeente. Een airco-warmtepomp is in de meeste Limburgse situaties zonder subsidie financieel rendabel: terugverdientijd 3-7 jaar door lager stroomverbruik en gas-CV-besparing.',
    },
    {
      question: 'Hoeveel kW moet mijn airco-warmtepomp hebben?',
      answer: 'Vuistregel: 1 kW per 10 m² woonoppervlak voor goed geïsoleerde woningen, 1,2 kW per 10 m² voor slechter geïsoleerde. Een typische woonkamer van 30 m² heeft genoeg aan 3 kW. Voor de hele begane grond (50-70 m²) is 5-7 kW realistisch. Multi-split met meerdere binnenunits geeft de beste verdeling. Bij de opname rekenen we het exact uit op basis van isolatie, raampartij en gewenst comfort. Geen "voor de zekerheid" extra vermogen — dat is verspilling én sneller slijtage.',
    },
    {
      question: 'Wat is het verschil tussen een airco-warmtepomp en een hybride warmtepomp?',
      answer: 'Een airco-warmtepomp = lucht-lucht. Verwarmt direct de kamerlucht via een binnenunit. Een hybride warmtepomp = lucht-water, geïntegreerd met uw bestaande gas-CV. Werkt via radiatoren of vloerverwarming. Beide zijn goede oplossingen, maar de airco-warmtepomp is goedkoper in aanschaf (€1.600-€5.500 vs €5.000-€9.000) en heeft snelle reactie. Hybride heeft het voordeel van centrale verwarming via radiatoren en krijgt ISDE (€2.125+). Zie onze pagina over hybride warmtepomp + airco voor de combinatie-mogelijkheden.',
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
          { '@type': 'ListItem', position: 2, name: 'Airco-warmtepomp', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${CANONICAL_URL}#service`,
        serviceType: 'Airco-warmtepomp installatie',
        name: 'Airco als lucht-lucht warmtepomp — installatie en advies',
        description: 'Moderne A+++ airco-warmtepomp voor verwarmen + koelen. SCOP 4-5,3, 55% goedkoper dan gas. Vanaf €1.600 all-in incl. BTW, F-gassen + STEK gecertificeerd, heel Limburg.',
        url: CANONICAL_URL,
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://staycoolairco.nl/#organization',
          name: 'StayCool Airco',
          telephone: '+31462021430',
          email: 'info@staycoolairco.nl',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: aggregateReviews.averageRating.toString(),
            reviewCount: aggregateReviews.totalReviews.toString(),
            bestRating: '5',
          },
        },
        areaServed: { '@type': 'AdministrativeArea', name: 'Limburg', addressCountry: 'NL' },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '1600',
          highPrice: '5500',
          description: 'Single-split airco-warmtepomp €1.600-€2.500. Multi-split €2.800-€5.500. All-in incl. BTW.',
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
        title="Airco-Warmtepomp 2026 | 55% Goedkoper Dan Gas | StayCool"
        description="Een airco IS een lucht-lucht warmtepomp. SCOP 4-5,3, 55% goedkoper dan gas, 75% goedkoper dan elektrisch. Vanaf €1.600 all-in incl. BTW. Heel Limburg. Bel 046 202 1430."
        canonicalUrl={CANONICAL_URL}
        type="service"
        serviceType="Airco-warmtepomp"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco-warmtepomp — 55% goedkoper dan gas, vanaf €1.600
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 mb-8 max-w-3xl">
            Een moderne airco IS een lucht-lucht warmtepomp. SCOP 4-5,3, verwarmt én koelt, en bespaart u €450-€1.500 per jaar op stookkosten. Geen ISDE — wel 9% BTW + snelle terugverdientijd.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="h-5 w-5 mr-2" />Bel 046 202 1430
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors">
              <Calculator className="h-5 w-5 mr-2" />Vraag offerte aan
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">SCOP 4-5,3</div>
              <div className="text-xs opacity-90 mt-1">Seizoensrendement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">55%</div>
              <div className="text-xs opacity-90 mt-1">Goedkoper dan gas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">3-7 jaar</div>
              <div className="text-xs opacity-90 mt-1">Terugverdientijd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="text-gray-600">
            <strong className="text-gray-900">Geschreven door:</strong> Marvin Smit, eigenaar StayCool Airco — F-gassen + STEK gecertificeerd
          </div>
          <time dateTime="2026-05-06" className="text-gray-500">Laatste update: 6 mei 2026</time>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-emerald-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Op deze pagina</h2>
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="#hoe-werkt" className="text-emerald-700 hover:underline">Hoe werkt het</a>
            <a href="#scop" className="text-emerald-700 hover:underline">SCOP/COP uitleg</a>
            <a href="#vergelijking" className="text-emerald-700 hover:underline">Vergelijking systemen</a>
            <a href="#besparing" className="text-emerald-700 hover:underline">Concrete besparing</a>
            <a href="#installatie" className="text-emerald-700 hover:underline">Installatie</a>
            <a href="#nadelen" className="text-emerald-700 hover:underline">Eerlijke nadelen</a>
            <a href="#faq" className="text-emerald-700 hover:underline">FAQ</a>
          </nav>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

            <p>
              Veel mensen denken dat een airco alleen koelt en een warmtepomp iets compleet anders is. Technisch gezien is dat onjuist: <strong>een moderne split-airco IS een lucht-lucht warmtepomp</strong>. Hij verplaatst warmte, in plaats van die te genereren — daarom is hij zo efficiënt. In de zomer verplaatst hij warmte van binnen naar buiten (koelen), in de winter andersom (verwarmen). Hetzelfde principe als een lucht-water warmtepomp, alleen geeft die de warmte af aan water in radiatoren in plaats van direct aan de kamerlucht.
            </p>

            <p>
              Op deze pagina leggen we uit hoe het technisch werkt, wat de SCOP-waarde betekent, hoe de besparing zich verhoudt tot gas en elektrisch, en wanneer een airco-warmtepomp wel of niet past bij uw woning. Geen verkooppraat — eerlijke afwegingen, ook over de nadelen.
            </p>

            <h2 id="hoe-werkt" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Hoe werkt een airco als warmtepomp?</h2>

            <p>
              Een airco-warmtepomp gebruikt een koudemiddel-cyclus die de wetten van fysica omdraait: hij <em>haalt</em> warmte uit de buitenlucht — zelfs bij vorst — en geeft die af in uw woning. Vier hoofdcomponenten:
            </p>

            <ol className="space-y-3 ml-6 my-6 list-decimal">
              <li><strong>Verdamper (buitenunit):</strong> koudemiddel verdampt en absorbeert warmte uit de buitenlucht.</li>
              <li><strong>Compressor:</strong> verhoogt de druk van het koudemiddel, waardoor de temperatuur stijgt.</li>
              <li><strong>Condensor (binnenunit):</strong> heet koudemiddel geeft warmte af aan de kamerlucht.</li>
              <li><strong>Expansieventiel:</strong> verlaagt de druk weer, koudemiddel koelt af, cyclus begint opnieuw.</li>
            </ol>

            <p>
              Met deze cyclus zet de airco 1 kWh stroom om in 4-5 kWh warmte. Vergelijk: een elektrisch verwarmingselement geeft 1 kWh warmte per 1 kWh stroom (rendement 100%). Een gas-CV haalt ongeveer 0,9 kWh warmte uit 1 kWh gas (95% rendement, oudere ketels minder). De airco-warmtepomp is dus 4-5 keer efficiënter dan elektrisch verwarmen, en duidelijk goedkoper dan gas.
            </p>

            <h2 id="scop" className="text-3xl font-bold text-gray-900 mt-12 mb-4">SCOP, COP en wat de cijfers betekenen</h2>

            <p>
              Op de specsheet van een airco-warmtepomp ziet u twee kerngetallen voor verwarmen:
            </p>

            <ul className="space-y-2 ml-6 my-6">
              <li><strong>COP (Coefficient Of Performance)</strong> — de verhouding tussen warmte-output en stroom-input op een gegeven moment, bij een specifieke buitentemperatuur. Bijvoorbeeld COP 5,2 bij 7°C buiten.</li>
              <li><strong>SCOP (Seasonal COP)</strong> — het seizoensgemiddelde over een heel verwarmingsseizoen. Realistischer dan COP omdat het rekening houdt met variërende buitentemperaturen. SCOP 4,5 betekent: gemiddeld over het hele seizoen levert de unit 4,5 kWh warmte per kWh stroom.</li>
            </ul>

            <p>
              Wat zijn realistische SCOP-waarden voor moderne A+++-airco's? Volgens metingen van klimaatexpert.com en fabrikant-data:
            </p>

            <div className="bg-emerald-50 rounded-lg p-6 my-8 border-l-4 border-emerald-500">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Thermometer className="h-5 w-5 text-emerald-600 mr-2" />
                SCOP-bereik per categorie (2026)
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Budget-units (B-merken, oudere modellen):</strong> SCOP 3,2 – 3,8</li>
                <li><strong>Mid-range A++ (Tosot, basis-LG, basis-Samsung):</strong> SCOP 4,0 – 4,3</li>
                <li><strong>Premium A+++ (Daikin Emura, Mitsubishi Heavy):</strong> SCOP 4,5 – 5,0</li>
                <li><strong>Top-end (Daikin Stylish, Mitsubishi MSZ-LN):</strong> SCOP 5,1 – 5,3</li>
              </ul>
            </div>

            <p>
              Voor de meeste klanten in Limburg is SCOP 4,3-4,8 de sweet-spot: kostenrendabel, betrouwbaar bij de winters die we hier kennen, en de prijspremie voor SCOP 5+ verdient zich pas terug bij heel intensief verwarmingsgebruik (8+ uur per dag in koude maanden).
            </p>

            <h2 id="vergelijking" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Vergelijking: 4 typen warmtepompen</h2>

            <p>
              Om uw beslissing te helpen — een eerlijke vergelijking. Niet alles wat we hieronder noemen installeren wij; sommige systemen verwijzen we door naar gespecialiseerde partners.
            </p>

            <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-900">Type</th>
                      <th className="text-left p-3 font-semibold text-gray-900">SCOP</th>
                      <th className="text-left p-3 font-semibold text-gray-900">Investering</th>
                      <th className="text-center p-3 font-semibold text-gray-900">ISDE</th>
                      <th className="text-left p-3 font-semibold text-gray-900 hidden md:table-cell">Voor wie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {systeemVergelijking.map((row, i) => (
                      <tr key={i} className={i !== systeemVergelijking.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="p-3 align-top font-semibold text-gray-900">{row.type}</td>
                        <td className="p-3 align-top text-emerald-700 font-semibold whitespace-nowrap">{row.scop}</td>
                        <td className="p-3 align-top text-gray-700 whitespace-nowrap">{row.investering}</td>
                        <td className="p-3 align-top text-center">
                          {row.isde ? <span className="text-green-600 font-bold">Ja</span> : <span className="text-red-500 font-bold">Nee</span>}
                        </td>
                        <td className="p-3 align-top text-gray-600 hidden md:table-cell">{row.voor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              <strong>Onze observatie:</strong> voor de meeste Limburgse rijtjeshuizen (de typische 1970-2000 woning) is een airco-warmtepomp financieel rendabeler dan een lucht-water. De ISDE op lucht-water (€2.150-€3.500) is mooi, maar wordt opgegeten door de hogere investering (€8.000+ vs €1.600+) en de noodzaak om uw radiatoren of vloerverwarming aan te passen. De terugverdientijd is langer.
            </p>

            <h2 id="besparing" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Concrete besparing: 3 Limburgse scenario's</h2>

            <p>
              Aan de hand van actuele tarieven (gas €1,15/m³, stroom €0,32/kWh, peil 2026) — drie woningprofielen die we vaak tegenkomen:
            </p>

            <div className="space-y-6 my-8">
              {besparingsScenario.map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-emerald-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.huistype}</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-700 mb-2"><strong>Gas-verbruik nu:</strong> {s.gasVerbruikJaar}/jaar</p>
                      <p className="text-gray-700 mb-2"><strong>Aanbevolen airco:</strong> {s.airco}</p>
                      <p className="text-gray-700"><strong>Gebruik:</strong> {s.airco_gebruik}</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <p className="text-gray-700 mb-2"><strong>Jaarkosten met airco:</strong> {s.jaarkosten}</p>
                      <p className="text-emerald-700 font-bold mb-1">Besparing: {s.besparing}</p>
                      <p className="text-gray-600 text-sm">Terugverdientijd: {s.terugverdien}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p>
              <strong>Belangrijke nuance:</strong> deze cijfers gaan uit van een airco-warmtepomp met SCOP 4,5, gemiddeld Limburgs winterklimaat, en gemiddeld stookgedrag. Bij intensiever gebruik of een hogere SCOP (4,8-5,0) verbetert de besparing nog 10-15%. Bij korte periodes onder -5°C draait de airco minder efficiënt — bewaar uw gas-CV als back-up.
            </p>

            <h2 id="installatie" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Installatie — wat houdt het in?</h2>

            <p>
              Een airco-warmtepomp installeren is wezenlijk hetzelfde als een airco-installatie — wij doen ze identiek. Verschil zit in de keuze van het toestel: een echte airco-warmtepomp heeft een verwarming-modus en een SCOP-rating &gt;3,5. Niet alle goedkope airco's halen dat — vraag altijd naar de SCOP-waarde voor u koopt.
            </p>

            <ul className="space-y-2 ml-6 my-6">
              <li><strong>Doorlooptijd:</strong> 1 werkdag voor single-split, 1-2 dagen voor multi-split.</li>
              <li><strong>Wat we plaatsen:</strong> binnenunit (op gewenste muur), buitenunit (gevel of plat dak), koudemiddelleidingen + isolatie, condensafvoer, stroomaansluiting.</li>
              <li><strong>Wat u behoudt:</strong> uw gas-CV blijft als back-up gewoon werken — geen ingrepen in uw centrale verwarming.</li>
              <li><strong>F-gassen procedure:</strong> wij zijn gecertificeerd, vacumeren systeem volgens fabrieksspec, lekdichtheid getest, NEa-registratie.</li>
              <li><strong>Garantie:</strong> 5 jaar fabrieksgarantie + 2 jaar installatie-garantie StayCool.</li>
            </ul>

            <p>
              Prijzen all-in incl. BTW: single-split €1.600-€3.500, multi-split (2 binnenunits) €2.800-€4.000, multi-split (3+ binnenunits) €4.000-€5.500. BTW 9% verrekend bij woningen ouder dan 2 jaar. Volledige uitleg over montage en wat erin zit: zie onze <Link to="/airco-installatie" className="text-emerald-700 underline">airco-installatie pagina</Link>.
            </p>

            <h2 id="nadelen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Eerlijke nadelen — niet alles is positief</h2>

            <p>
              We zouden niet objectief zijn als we alleen de voordelen noemen. Vier punten die u moet weten:
            </p>

            <div className="space-y-4 my-8">
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                  Lokale verwarming, niet centraal
                </h3>
                <p className="text-gray-700 text-sm">
                  Een airco-warmtepomp verwarmt de ruimte waar de binnenunit hangt. Voor een hele woning heeft u meerdere binnenunits nodig (multi-split). Een gas-CV verwarmt automatisch elke kamer met een radiator. Voor wie centrale gelijke temperatuur in elke kamer belangrijk vindt — niet altijd de slimste keuze.
                </p>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                  Rendementsdaling bij vorst
                </h3>
                <p className="text-gray-700 text-sm">
                  Bij +7°C buiten werkt de unit op COP 5; bij -5°C zakt dat naar COP 2,5-3. Bij &lt;-10°C kan een unit zelfs in defrost-modus gaan. Voor het Limburgse klimaat (gemiddeld 5-15 dagen onder -3°C per winter) niet kritiek, maar in een strenge winter merkt u het.
                </p>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                  Geen ISDE-subsidie
                </h3>
                <p className="text-gray-700 text-sm">
                  Lucht-lucht warmtepompen (= airco's) zijn uitgesloten van ISDE in 2026. Wel BTW-9% bij woningen &gt;2 jaar oud. Voor mensen die specifiek aanjager-subsidies willen: een lucht-water warmtepomp krijgt wel ISDE, maar kost €8.000-€15.000 i.p.v. €1.600. Zie onze pagina <Link to="/airco-subsidie" className="text-amber-700 underline">airco subsidie</Link> voor de eerlijke uitleg.
                </p>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                  Buitenunit-positionering
                </h3>
                <p className="text-gray-700 text-sm">
                  Iedere split-installatie heeft een buitenunit nodig. Bij appartementen met VvE-regels of beschermde gevels kan de positionering complex zijn. Bij de opname rekenen we de optie\'s door en stemmen we af met VvE waar nodig.
                </p>
              </div>
            </div>

            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Veelgestelde vragen</h2>

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
      <section className="py-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Wilt u een persoonlijke besparingsberekening?</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Wij rekenen voor uw specifieke situatie door of een airco-warmtepomp rendabel is. Inclusief vergelijking met behoud van uw gas-CV en een hybride-opzet. Geen verkooppraat — alleen de cijfers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
              <Phone className="h-6 w-6 mr-2" />Bel 046 202 1430
            </a>
            <Link to="/hybride-warmtepomp-airco" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors text-lg">
              Hybride opzet bekijken →
            </Link>
            <Link to="/airco-subsidie" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-900 transition-colors text-lg">
              Subsidie info →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoWarmtepomp;
