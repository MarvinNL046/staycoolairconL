import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, Calculator, Thermometer, AlertTriangle } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const CANONICAL_URL = 'https://staycoolairco.nl/hybride-warmtepomp-airco';

const HybrideWarmtepompAirco: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco-warmtepomp', path: '/airco-warmtepomp' },
    { label: 'Hybride opzet' },
  ];

  // Twee betekenissen van "hybride" — uitleg
  const hybrideTypen = [
    {
      titel: 'Officiële hybride warmtepomp (lucht-water + gas-CV)',
      uitleg: 'Een lucht-water warmtepomp wordt geïntegreerd in uw bestaande gas-CV-systeem. Verwarmt water voor radiatoren of vloerverwarming. Gas-CV blijft als back-up bij koude pieken.',
      kosten: '€5.000 – €9.000 incl. BTW',
      isde: 'Ja — €2.125 (4 kW) tot €3.025 (8 kW)',
      voor: 'Woningen waar centrale gelijke verwarming via radiatoren belangrijk is, en waar u gas wilt blijven gebruiken voor extreme vorst',
      doenWij: false,
    },
    {
      titel: 'Praktische hybride (airco-warmtepomp + behoud gas-CV)',
      uitleg: 'U behoudt uw gas-CV exact zoals hij is, en plaatst er een airco-warmtepomp bij. Airco verwarmt 80-90% van het seizoen; gas-CV alleen op echt koude dagen of in kamers zonder airco.',
      kosten: '€1.600 – €5.500 (alleen airco)',
      isde: 'Nee (lucht-lucht), wel 9% BTW',
      voor: 'Verreweg de meeste Limburgse rijtjeshuizen — kleinste investering, snelste terugverdientijd, geen ingrepen in CV',
      doenWij: true,
    },
  ];

  // Wanneer welke variant
  const wanneerWelke = [
    {
      situatie: 'Gemiddelde Limburgse rijtjeswoning, gas-CV werkt nog goed (10-15 jaar oud)',
      keuze: 'Praktische hybride: airco-warmtepomp + behoud gas-CV',
      reden: 'Laagste investering (€1.600+), snelste terugverdientijd (3-5 jaar), geen verstoring van bestaande verwarming. Wij installeren dit.',
    },
    {
      situatie: 'Gas-CV is verouderd (15+ jaar) of stuk, en u zou anyway moeten vervangen',
      keuze: 'Officiële hybride: lucht-water warmtepomp als gas-CV-vervanger',
      reden: 'ISDE-subsidie maakt het financieel competitief. Vervangingspad voor de toekomst. Wij verwijzen naar gespecialiseerde lucht-water installateurs.',
    },
    {
      situatie: 'Goed geïsoleerde nieuwbouw of grondige renovatie, lage warmtevraag',
      keuze: 'Volledig elektrisch: lucht-water of bodemwarmtepomp zonder gas',
      reden: 'Bij lage warmtevraag werkt vol-elektrisch ook in koude periodes betrouwbaar. ISDE €3.025-€4.425. Niet onze specialisatie.',
    },
    {
      situatie: 'Vrijstaande woning met meerdere kamers en oude radiatoren',
      keuze: 'Praktische hybride: multi-split airco + gas-CV',
      reden: 'Lokale verwarming per kamer is comfortabeler dan radiatoren bij vraag-gestuurd gebruik. Multi-split (3-4 binnenunits) bedient alle hoofdruimtes; gas-CV als back-up.',
    },
  ];

  const reken = [
    { post: 'Investering airco-warmtepomp', bedrag: '€2.500', toelichting: 'Multi-split 5 kW met 2 binnenunits (woonkamer + slaapkamer)' },
    { post: 'Besparing op gas-verbruik (jaar 1)', bedrag: '+ €700', toelichting: 'Airco-warmtepomp neemt 50% van warmtevraag over' },
    { post: 'Extra stroomkosten (jaar 1)', bedrag: '- €450', toelichting: 'Stroomverbruik airco bij SCOP 4,5' },
    { post: 'Netto besparing jaar 1', bedrag: '€250', toelichting: 'Plus comfort van koeling in zomer (+€0)' },
    { post: 'Vanaf jaar 2 (gas-tarief stijgt naar verwachting)', bedrag: '€350-€500/jaar', toelichting: 'Bij gas-stijging van 5%/jaar' },
    { post: 'Terugverdientijd cumulatief', bedrag: '4-5 jaar', toelichting: 'Bij stabiele gebruikspatronen' },
  ];

  const faqItems = [
    {
      question: 'Wat is precies "hybride" bij een warmtepomp?',
      answer: 'Hybride betekent: combinatie van twee energiebronnen. Officieel verwijst "hybride warmtepomp" naar een lucht-water warmtepomp die geïntegreerd is met een gas-CV — beide warmen samen op via dezelfde radiatoren of vloerverwarming. Praktisch gebruiken veel mensen "hybride" ook voor: airco-warmtepomp toevoegen aan een bestaande gas-CV. De twee zijn fundamenteel verschillend qua kosten en complexiteit. Op deze pagina behandelen we beide — voor wie welke past.',
    },
    {
      question: 'Welke krijgt ISDE-subsidie?',
      answer: 'Alleen de officiële hybride warmtepomp (lucht-water + gas-CV) komt in aanmerking voor ISDE: €2.125 voor 4 kW unit + €200 label-bonus + extra bij isolatie-combinatie. Een airco-warmtepomp toegevoegd aan een bestaande gas-CV is technisch een lucht-lucht warmtepomp en krijgt geen ISDE — wel BTW-9% (~€155 besparing op de installatie).',
    },
    {
      question: 'Is een hybride opzet zuiniger dan vol-elektrisch?',
      answer: 'Voor de meeste bestaande woningen zonder uitstekende isolatie: ja. Reden: een lucht-warmtepomp werkt het meest efficiënt boven 0°C; bij vorst zakt het rendement. Een gas-CV pakt die koude pieken efficiënt op. In een goed-geïsoleerde nieuwbouw is vol-elektrisch even goed of zelfs beter (lagere warmtevraag, geen pieken). Voor een Limburgs rijtjeshuis uit 1980: hybride is meestal de slimste keuze.',
    },
    {
      question: 'Kan ik mijn bestaande radiatoren behouden bij een hybride opzet?',
      answer: 'Bij een lucht-water hybride moet u uw radiatoren mogelijk vervangen door grotere modellen (de warmtepomp werkt op lagere watertemperaturen, dus grotere radiatoren nodig voor zelfde warmte-afgifte). Reken op €1.500-€3.000 extra. Bij een airco-warmtepomp + behoud gas-CV: u behoudt alle radiatoren ongewijzigd. Geen extra investering buiten de airco zelf.',
    },
    {
      question: 'Hoe combineren airco-warmtepomp en gas-CV elkaar in de praktijk?',
      answer: 'Drie scenario\'s die we vaak zien: (1) airco-warmtepomp neemt verwarming over in september-mei, gas-CV alleen aan bij vorst onder -3°C; (2) airco voor woon-/slaapkamers, gas-CV voor badkamer + warm water; (3) airco hele jaar door, gas-CV alleen voor warm tapwater. Welke past het beste hangt af van uw warmtevraag-patroon. Bij de opname rekenen we het door.',
    },
    {
      question: 'Wat als mijn gas-CV nu uitvalt — is een hybride dan nog rendabel?',
      answer: 'Belangrijke beslisvraag. Twee opties: (1) gas-CV vervangen door nieuwe + airco-warmtepomp toevoegen — totale investering €5.000-€8.000, comfort en flexibiliteit. (2) Gas-CV niet vervangen, alleen lucht-water warmtepomp installeren — €8.000-€15.000 + ISDE €2.150-€3.500. Beide werken; afweging gaat over hoe lang u nog in de woning blijft, isolatie, en uw warmtevraag-pieken. Eerlijk: voor vol-elektrisch heeft u een goed geïsoleerde woning nodig.',
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
          { '@type': 'ListItem', position: 2, name: 'Airco-warmtepomp', item: 'https://staycoolairco.nl/airco-warmtepomp' },
          { '@type': 'ListItem', position: 3, name: 'Hybride opzet', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'Article',
        '@id': `${CANONICAL_URL}#article`,
        headline: 'Hybride warmtepomp + airco — twee betekenissen, twee scenario\'s',
        description: 'Officiële hybride (lucht-water + gas-CV) versus praktische hybride (airco + behoud gas-CV). Welke past bij uw woning? Inclusief reken-voorbeelden.',
        url: CANONICAL_URL,
        datePublished: '2026-05-06',
        dateModified: '2026-05-06',
        author: {
          '@type': 'Person',
          name: 'Marvin Smit',
          jobTitle: 'F-gassen + STEK gecertificeerd airco-specialist',
          worksFor: { '@type': 'Organization', name: 'StayCool Airco' },
        },
        publisher: { '@type': 'Organization', name: 'StayCool Airco', url: 'https://staycoolairco.nl' },
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
        title="Hybride Warmtepomp + Airco | Welke Combinatie | StayCool"
        description="Hybride warmtepomp uitgelegd: officiële variant (lucht-water + gas-CV met ISDE) versus praktische hybride (airco-warmtepomp + behoud gas-CV). Welke past bij uw woning? Reken-voorbeelden."
        canonicalUrl={CANONICAL_URL}
        type="article"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hybride warmtepomp + airco — welke combinatie past?
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 mb-4 max-w-3xl">
            <strong>"Hybride"</strong> betekent twee verschillende dingen — afhankelijk van wie u het vraagt. We leggen beide uit en rekenen door welke past bij uw situatie.
          </p>
          <p className="text-base text-teal-100 max-w-3xl">
            Voor de meeste Limburgse woningen blijkt de praktische hybride (airco-warmtepomp + behoud gas-CV) financieel rendabeler dan de officiële versie — ook al krijgt u dan geen ISDE.
          </p>
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
      <section className="bg-teal-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Op deze pagina</h2>
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="#twee-typen" className="text-teal-700 hover:underline">Twee typen hybride</a>
            <a href="#wanneer" className="text-teal-700 hover:underline">Welke voor u</a>
            <a href="#reken" className="text-teal-700 hover:underline">Reken-voorbeeld</a>
            <a href="#faq" className="text-teal-700 hover:underline">FAQ</a>
          </nav>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

            <p>
              Veel klanten bellen ons over "hybride warmtepomp" zonder helemaal duidelijk te hebben wat er bedoeld wordt. Logisch — de term wordt voor twee verschillende systemen gebruikt. Hieronder leggen we beide uit, vergelijken we de kosten, en helpen we u kiezen wat past bij uw woning. Voor bepaalde scenario's is een airco-warmtepomp + behoud van uw gas-CV de slimste hybride opzet — voor andere situaties past een officiële lucht-water hybride beter.
            </p>

            <h2 id="twee-typen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Twee typen hybride — wat is het verschil?</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {hybrideTypen.map((h, i) => (
                <div key={i} className={`rounded-lg p-6 border-2 ${h.doenWij ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-gray-50'}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{h.titel}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{h.uitleg}</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Investering:</strong> {h.kosten}</li>
                    <li><strong>ISDE:</strong> {h.isde}</li>
                    <li><strong>Voor:</strong> {h.voor}</li>
                  </ul>
                  {h.doenWij ? (
                    <div className="mt-4 inline-flex items-center text-teal-700 font-semibold text-sm">
                      <CheckCircle className="h-5 w-5 mr-1" /> Wij installeren dit
                    </div>
                  ) : (
                    <div className="mt-4 inline-flex items-center text-gray-600 text-sm">
                      Wij verwijzen naar gespecialiseerde partner
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p>
              Onze ervaring: 8 op de 10 klanten in Limburg die initieel naar een "hybride warmtepomp" vragen, blijken bij de opname uiteindelijk beter af met de praktische variant — airco-warmtepomp toevoegen aan bestaande gas-CV. Reden: kleinere investering (€1.600-€5.500 vs €5.000-€9.000), snellere terugverdientijd, geen verstoring van uw warmtesysteem, en u behoudt de gas-CV als back-up voor extreme vorst.
            </p>

            <h2 id="wanneer" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Wanneer welke variant?</h2>

            <p>
              Vier herkenbare situaties — uitgewerkt zodat u uw eigen woning kunt vergelijken:
            </p>

            <div className="space-y-4 my-8">
              {wanneerWelke.map((w, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-teal-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                    <Thermometer className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-1" />
                    <span>{w.situatie}</span>
                  </h3>
                  <p className="text-teal-700 font-semibold mb-2">→ {w.keuze}</p>
                  <p className="text-gray-700 text-sm">{w.reden}</p>
                </div>
              ))}
            </div>

            <h2 id="reken" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Reken-voorbeeld: praktische hybride in een Limburgs rijtjeshuis</h2>

            <p>
              Een klassiek scenario dat we vaak doorrekenen — Limburgs rijtjeshuis 110m², gas-verbruik €2.300/jaar, gas-CV uit 2015 (nog 8-10 jaar mee), bewoner werkt thuis 4 dagen per week.
            </p>

            <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-teal-50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-900">Post</th>
                      <th className="text-right p-3 font-semibold text-gray-900">Bedrag</th>
                      <th className="text-left p-3 font-semibold text-gray-900 hidden md:table-cell">Toelichting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reken.map((r, i) => (
                      <tr key={i} className={i !== reken.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="p-3 align-top font-semibold text-gray-900">{r.post}</td>
                        <td className="p-3 align-top text-right font-semibold text-teal-700 whitespace-nowrap">{r.bedrag}</td>
                        <td className="p-3 align-top text-gray-600 text-sm hidden md:table-cell">{r.toelichting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              <strong>Belangrijk:</strong> dit is een illustratieve berekening met realistische maar gemiddelde getallen. In uw eigen situatie kunnen de bedragen 20-30% afwijken — afhankelijk van isolatie, ramen, gebruikspatroon, en welke ruimtes u verwarmt. Bij de opname doen we een persoonlijke berekening en u krijgt het op papier vóór u beslist.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                Wat u niet zelf hoeft te bouwen — onze stelregel
              </h3>
              <p className="text-gray-700 mb-2">
                Als bij u de gas-CV nog 5+ jaar meegaat en isolatie redelijk is, is de praktische hybride (airco + behoud gas-CV) vrijwel altijd voordeliger over 10 jaar dan een lucht-water-installatie. ISDE-subsidie compenseert de hogere investering niet altijd. Door beide opties op papier te zetten kunt u zelf zien welke past.
              </p>
              <p className="text-gray-700">
                Wat we niet doen: u overhalen tot een lucht-water systeem alleen omdat het ISDE krijgt. Voor sommige situaties is dat de juiste keuze — voor de meeste niet.
              </p>
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

      {/* CTA */}
      <section className="py-16 bg-teal-50 border-t border-teal-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Welke hybride past bij uw woning?</h2>
          <p className="text-lg text-gray-700 mb-6">
            We rekenen het voor uw specifieke situatie door. Inclusief vergelijking met behoud gas-CV — geen verkooppraat, alleen de cijfers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
              <Phone className="h-5 w-5 mr-2" />Bel 046 202 1430
            </a>
            <Link to="/airco-warmtepomp" className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50">
              ← Terug naar airco-warmtepomp
            </Link>
            <Link to="/airco-subsidie" className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600">
              Subsidie info →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HybrideWarmtepompAirco;
