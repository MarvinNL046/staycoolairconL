import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, AlertTriangle, FileText, Clock, Euro } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const CANONICAL_URL = 'https://staycoolairco.nl/isde-aanvragen-airco';

const IsdeAanvragenAirco: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco subsidie', path: '/airco-subsidie' },
    { label: 'ISDE aanvragen' },
  ];

  // ISDE 2026 bedragen (RVO-bron)
  const isdeBedragen = [
    { type: 'Lucht-water warmtepomp — startbedrag', bedrag: '€1.025', detail: 'Vast bedrag bij 1e installatie, ongeacht vermogen' },
    { type: 'Per kW vermogen', bedrag: '€225 per kW', detail: 'Voor elke kilowatt thermisch vermogen, vanaf de eerste kW' },
    { type: 'Energielabel-bonus', bedrag: '€200', detail: 'Bij combinatie met label-verbetering of isolatie' },
    { type: 'Hybride warmtepomp 4 kW (A+++)', bedrag: '€2.125', detail: 'Realistisch totaal voor typische woning' },
    { type: 'Volledig elektrisch 8 kW (A+++)', bedrag: '€3.025', detail: 'Voor grotere huizen, geen gas-CV meer' },
    { type: 'Bodemwarmtepomp 6 kW (A+++)', bedrag: '€4.425', detail: 'Hoogste bedrag, vereist grondbron-installatie' },
  ];

  const documentenChecklist = [
    'Factuur van de installateur (volledig betaald, met BTW-specificatie)',
    'Betaalbewijs (bankafschrift of betaalbevestiging)',
    'Ondertekend installatiebewijs van de erkende installateur',
    'Foto van het type-plaatje van de buitenunit (merk, model, serienummer)',
    'Foto van de geïnstalleerde unit op de eindbestemming',
    'Eigendomsbewijs of huurcontract (alleen bij verzoek)',
    'BAG-id (woning-identificatie via kadaster.nl)',
    'IBAN-rekeningnummer voor uitkering',
  ];

  const tijdlijn = [
    { fase: 'Offerte → installatie', duur: 'Max 12 maanden', detail: 'ISDE-regel: tussen ondertekenen offerte en aanvraag-indiening max 12 maanden' },
    { fase: 'Installatie → aanvraag indienen', duur: 'Aanbevolen: < 4 weken', detail: 'Liefst direct na installatie + foto\'s' },
    { fase: 'Aanvraag indienen → ontvangstbevestiging', duur: '1-3 werkdagen', detail: 'Email van RVO bevestigt ontvangst' },
    { fase: 'RVO-beoordeling', duur: '8-13 weken', detail: 'Bij compleet dossier: meestal 8 weken; bij vragen kan 13+ weken' },
    { fase: 'Goedkeuring → uitkering', duur: '2-4 weken', detail: 'Op uw IBAN, gespecificeerde post in afschrift' },
  ];

  const veelgemaakteFouten = [
    'Aanvraag te laat ingediend (>12 maanden na installatie) — automatische afwijzing',
    'Toestel staat niet op de officiële RVO-apparatenlijst — niet alle "warmtepompen" kwalificeren',
    'Lucht-lucht warmtepomp / split-airco aangemeld — komt sinds 2024 niet meer in aanmerking',
    'Onvolledige documenten (missende factuur, geen foto type-plaatje) — wachten op aanvulling = uitstel',
    'Verkeerde BAG-id of IBAN — check vooraf op kadaster.nl en uw bank',
    'Aanvraag bij verkeerd jaar-budget — ISDE wordt jaarlijks ge-allocateerd, late aanvragen vallen onder volgend jaar',
  ];

  const faqItems = [
    {
      question: 'Hoe lang duurt het voordat ik de ISDE-uitkering ontvang?',
      answer: 'Bij compleet dossier ontvangt u binnen 8-13 weken na indiening een goedkeuringsbeschikking, gevolgd door uitkering op uw IBAN binnen 2-4 weken. Totale doorlooptijd vanaf indiening: 10-17 weken. Onvolledige aanvragen of vragen van RVO kunnen dit met 4-8 weken verlengen.',
    },
    {
      question: 'Kan StayCool de ISDE-aanvraag voor mij indienen?',
      answer: 'Nee — ISDE moet door de eigenaar van de woning (of huurder met toestemming) worden aangevraagd via Mijn RVO met DigiD. Wij leveren wel alle vereiste documenten correct aan: factuur met BTW-specificatie, ondertekend installatiebewijs, foto\'s. Voor de aanvraag zelf moet u inloggen op rvo.nl. Heeft u hulp nodig met de invoer? Stuur een appje (06 36481054) voor algemene tips, maar de aanvraag zelf is uw verantwoordelijkheid.',
    },
    {
      question: 'Wat als RVO mijn aanvraag afwijst?',
      answer: 'Eerste stap: lees de afwijzings-motivatie zorgvuldig. De meest voorkomende redenen zijn formele fouten (verkeerd type warmtepomp, niet-erkende installateur, te late aanvraag) — soms herstelbaar via bezwaar. U heeft 6 weken om bezwaar te maken via Mijn RVO. Voor materiële afwijzingen (toestel komt echt niet in aanmerking) is bezwaar zinloos. Voor formele kwesties (ontbrekende foto, verkeerde BAG-id) wel.',
    },
    {
      question: 'Krijg ik ook ISDE als de installateur niet ISDE-erkend is?',
      answer: 'Nee. RVO eist een installatie door een ISDE-erkende installateur (zogeheten "vakbedrijf"). Een lijst van erkende installateurs vindt u op rvo.nl. Wijzig dit niet — een afgewezen aanvraag wegens ongeerkende installateur betekent: subsidie kwijt. Wij installeren split-airco\'s en zijn daar specialist in; voor lucht-water warmtepomp installatie verwijzen we naar partners die wel ISDE-erkend zijn.',
    },
    {
      question: 'Wat als ik in een huurwoning woon?',
      answer: 'In een huurwoning kan alleen de eigenaar (verhuurder) ISDE aanvragen, of de huurder met expliciete schriftelijke toestemming van de verhuurder. Praktisch: bespreek met uw verhuurder vóór installatie wie de aanvraag doet en wie de subsidie krijgt. Wij komen wél langs voor advies — voor de juridische kant moet u zelf de afspraak maken met de verhuurder.',
    },
    {
      question: 'Combineren met andere subsidies?',
      answer: 'ISDE laat zich combineren met: 9% BTW-tarief op installatiewerk (bij woning >2 jaar), gemeentelijke energiepremies (wisselend), Energiebespaarlening (laagrentend, €2.500-€65.000). Niet combineerbaar met: regionale ROZ-regelingen voor zelfde investering. Houd er rekening mee dat sommige gemeenten een ISDE-trekking als reden gebruiken om gemeente-subsidie te weigeren — vraag vooraf bij beide partijen.',
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
          { '@type': 'ListItem', position: 2, name: 'Airco subsidie', item: 'https://staycoolairco.nl/airco-subsidie' },
          { '@type': 'ListItem', position: 3, name: 'ISDE aanvragen', item: CANONICAL_URL },
        ],
      },
      {
        '@type': 'HowTo',
        '@id': `${CANONICAL_URL}#howto`,
        name: 'ISDE aanvragen voor warmtepomp',
        description: 'Stappenplan om ISDE-subsidie aan te vragen voor een warmtepomp via Mijn RVO.',
        totalTime: 'P12W',
        step: tijdlijn.map((t, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: t.fase,
          text: `${t.fase}: ${t.detail}`,
        })),
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
        title="ISDE Aanvragen Voor Warmtepomp 2026 | Stappenplan + Checklist"
        description="ISDE aanvragen voor lucht-water warmtepomp: stappenplan, documenten-checklist, bedragen 2026 (€1.025-€4.425). Plus: waarom een split-airco geen ISDE krijgt."
        canonicalUrl={CANONICAL_URL}
        type="article"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(graphSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-white" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ISDE aanvragen voor warmtepomp — stappenplan 2026
          </h1>
          <p className="text-xl md:text-2xl text-amber-50 mb-4 max-w-3xl">
            Volledig stappenplan om ISDE-subsidie aan te vragen voor uw lucht-water of hybride warmtepomp. Inclusief documenten-checklist, tijdlijn en typische valkuilen.
          </p>
          <p className="text-base text-amber-100 max-w-3xl">
            <strong>Belangrijk:</strong> ISDE geldt niet voor split-airco's (lucht-lucht). Hebt u een split-airco overwogen? Lees eerst onze <Link to="/airco-subsidie" className="underline font-semibold">eerlijke uitleg over airco subsidie</Link>.
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
            <a href="#bedragen" className="text-amber-700 hover:underline">Bedragen 2026</a>
            <a href="#tijdlijn" className="text-amber-700 hover:underline">Tijdlijn</a>
            <a href="#documenten" className="text-amber-700 hover:underline">Checklist documenten</a>
            <a href="#stappen" className="text-amber-700 hover:underline">Stappenplan</a>
            <a href="#valkuilen" className="text-amber-700 hover:underline">Veelgemaakte fouten</a>
            <a href="#faq" className="text-amber-700 hover:underline">FAQ</a>
          </nav>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

            <p>
              ISDE-subsidie aanvragen is een proces waarbij u, de woningeigenaar, zelf de aanvraag indient via Mijn RVO. De installateur levert de documenten — u doet de aanvraag. Hieronder de complete handleiding.
            </p>

            <p>
              <strong>Voor wie geldt deze pagina:</strong> klanten die een lucht-water warmtepomp, hybride warmtepomp of bodemwarmtepomp hebben laten installeren (of overwegen). Voor split-airco-eigenaars is ISDE niet van toepassing — zie onze <Link to="/airco-subsidie" className="text-amber-700 underline">algemene subsidie-pagina</Link> voor alternatieven (BTW-9%, gemeentelijke regelingen).
            </p>

            <h2 id="bedragen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">ISDE-bedragen 2026 — wat krijgt u terug?</h2>

            <p>
              RVO publiceert jaarlijks de bedragen. Voor 2026 zijn de hoofdregels (bron: <a href="https://www.rvo.nl/subsidies-financiering/isde/isde-wat-wijzigt-er-2026" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">RVO ISDE 2026</a>):
            </p>

            <div className="bg-white rounded-lg shadow-md my-8 overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-amber-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-900">Onderdeel</th>
                      <th className="text-left p-4 font-semibold text-gray-900">Bedrag</th>
                      <th className="text-left p-4 font-semibold text-gray-900 hidden md:table-cell">Toelichting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isdeBedragen.map((row, i) => (
                      <tr key={i} className={i !== isdeBedragen.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="p-4 align-top font-semibold text-gray-900">{row.type}</td>
                        <td className="p-4 align-top whitespace-nowrap font-semibold text-amber-700">{row.bedrag}</td>
                        <td className="p-4 align-top text-sm text-gray-600 hidden md:table-cell">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              <strong>Reken-voorbeeld:</strong> typische 5 kW lucht-water warmtepomp = €1.025 (start) + 5 × €225 (per kW) + €200 (label-bonus) = <strong>€2.350 ISDE-uitkering</strong>. Bij installatie-investering van €11.000 incl. BTW betekent dit dat u netto ~€8.650 betaalt.
            </p>

            <h2 id="tijdlijn" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Tijdlijn — van offerte tot uitkering</h2>

            <div className="space-y-4 my-8">
              {tijdlijn.map((t, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-amber-500">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Clock className="h-5 w-5 text-amber-600 mr-2" />
                      {t.fase}
                    </h3>
                    <span className="text-amber-700 font-semibold whitespace-nowrap">{t.duur}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{t.detail}</p>
                </div>
              ))}
            </div>

            <p>
              <strong>Realistisch totaal:</strong> 10 tot 17 weken vanaf aanvraag-indiening tot geld op uw rekening. Plan dit in als financieel buffermoment — u betaalt eerst de installateur volledig, daarna komt de subsidie pas.
            </p>

            <h2 id="documenten" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Documenten-checklist</h2>

            <p>
              Voordat u begint met de aanvraag in Mijn RVO, zorg dat u álle onderstaande documenten digitaal beschikbaar hebt. Onvolledig dossier = vragen van RVO = uitstel van 4-8 weken.
            </p>

            <div className="bg-amber-50 rounded-lg p-6 my-8 border-l-4 border-amber-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <FileText className="h-5 w-5 text-amber-600 mr-2" />
                Wat u nodig heeft (in deze volgorde)
              </h3>
              <ul className="space-y-2 text-gray-700">
                {documentenChecklist.map((d, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <h2 id="stappen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Stap-voor-stap aanvraag in Mijn RVO</h2>

            <ol className="space-y-4 my-8 list-decimal ml-6">
              <li>
                <strong>Ga naar Mijn RVO</strong> — log in met DigiD via <a href="https://mijn.rvo.nl" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">mijn.rvo.nl</a>. Eerste keer? Maak een persoonlijk account aan.
              </li>
              <li>
                <strong>Selecteer "ISDE Subsidie woning"</strong> — niet de zakelijke variant. Voor uw eigen woning kiest u particulier.
              </li>
              <li>
                <strong>Vul het BAG-id van uw woning in</strong> — te vinden via <a href="https://www.kadaster.nl/-/bag-bevragen" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">kadaster.nl/bag-bevragen</a>. Schrijf dit eerder op.
              </li>
              <li>
                <strong>Selecteer het type warmtepomp</strong> — de keuze tussen lucht-water, hybride, bodem of zonneboiler bepaalt het bedrag. Bij twijfel: check de documenten van uw installateur op het exacte type.
              </li>
              <li>
                <strong>Voer het thermisch vermogen in (kW)</strong> — staat op het type-plaatje van de buitenunit. Niet het elektrisch vermogen, maar het thermisch vermogen (warmte-output).
              </li>
              <li>
                <strong>Upload alle documenten</strong> — uit de checklist hierboven. Bestandsformaten: PDF voor facturen, JPG/PNG voor foto's. Houdt onder 10 MB per bestand.
              </li>
              <li>
                <strong>Vul IBAN in voor uitkering</strong> — controleer twee keer dat het rekeningnummer klopt. Een typo betekent vertraging van weken.
              </li>
              <li>
                <strong>Verstuur de aanvraag</strong> — u krijgt een ontvangstbevestiging per e-mail binnen 1-3 werkdagen. Bewaar deze e-mail.
              </li>
            </ol>

            <h2 id="valkuilen" className="text-3xl font-bold text-gray-900 mt-12 mb-4">Veelgemaakte fouten — niet doen</h2>

            <div className="bg-red-50 rounded-lg p-6 my-8 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                6 fouten die de aanvraag tegenhouden
              </h3>
              <ul className="space-y-2 text-gray-700">
                {veelgemaakteFouten.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Onze ervaring uit klant-cases: het meeste tijdverlies komt door onvolledige documenten. Een ontbrekende foto van het type-plaatje of een afgekeurde BAG-id kan een aanvraag 6-8 weken vertragen. De moeite om vooraf alles compleet te krijgen verdient zich altijd terug.
            </p>

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
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Eerst zeker weten welk systeem het beste past?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Wij installeren split-airco's (zonder ISDE, wel BTW-9%). Voor lucht-water warmtepomp verwijzen we naar gespecialiseerde partners. Bij twijfel: bel ons, we rekenen het door zonder verkooppraat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700">
              <Phone className="h-5 w-5 mr-2" />Bel 046 202 1430
            </a>
            <Link to="/airco-subsidie" className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg border-2 border-amber-600 hover:bg-amber-50">
              ← Terug naar airco subsidie
            </Link>
            <Link to="/airco-warmtepomp" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
              Hoe werkt airco-warmtepomp →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IsdeAanvragenAirco;
