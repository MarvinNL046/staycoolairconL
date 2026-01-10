import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Battery, CheckCircle, Euro, TrendingUp, Phone, Zap, ArrowRight, Clock, Shield } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijZonnepanelenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Thuisbatterij met Zonnepanelen' }
  ];

  const usps = [
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "90% Zelfvoorziening Mogelijk",
      description: "Sla overtollige zonne-energie op en gebruik deze 's avonds en 's nachts"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "Voorkom Terugleverkosten",
      description: "Vanaf 2027: €0,08 terugleververgoeding vs. €0,40 eigen gebruik = €0,32 verschil!"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "Optimale Batterijbenutting",
      description: "Dagelijkse cycli = snellere terugverdientijd en maximale levensduur"
    },
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: "Perfect Duo Energietransitie",
      description: "Zonnepanelen + batterij = complete onafhankelijkheid van energiemaatschappij"
    }
  ];

  const benefits = [
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Terugleverkosten Voorkomen",
      before: "Zonder batterij: 2.000 kWh terugleveren @ €0,08/kWh = €160",
      after: "Met batterij: 2.000 kWh zelf gebruiken @ €0,40/kWh = €800",
      saving: "€640/jaar extra waarde",
      explanation: "Na afbouw saldering (2027) krijg je slechts €0,08/kWh voor teruglevering maar betaal je €0,40/kWh voor inkoop. Een batterij voorkomt dit enorme verschil door overtollige energie op te slaan."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      title: "Hogere Zelfvoorzieningsgraad",
      before: "Zonder batterij: 30-40% zelfvoorziening (alleen overdag direct verbruik)",
      after: "Met batterij: 70-90% zelfvoorziening (ook 's avonds/nachts eigen stroom)",
      saving: "50% meer onafhankelijkheid",
      explanation: "Zonnepanelen produceren vooral overdag maar je verbruikt vooral 's avonds. Een batterij overbrugt dit gat en verhoogt je zelfvoorziening drastisch."
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "100% Groene Energie Gebruik",
      before: "Zonder batterij: 's avonds grijze stroom van het net (fossiel/nucleair)",
      after: "Met batterij: 24/7 je eigen groene zonnestroom gebruiken",
      saving: "Zero carbon footprint",
      explanation: "Met een batterij gebruik je letterlijk je eigen zonnestroom in plaats van grijze stroom van de energiemaatschappij. Volledig duurzaam en klimaatneutraal."
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Bescherming Tegen Prijsstijgingen",
      before: "Zonder batterij: afhankelijk van stijgende energieprijzen (€0,40 → €0,50+/kWh)",
      after: "Met batterij: vaste 'prijs' van €0/kWh voor opgeslagen zonne-energie",
      saving: "Toekomstbestendig",
      explanation: "Energieprijzen stijgen structureel door energietransitie. Met batterij + zonnepanelen ben je immuun voor prijsstijgingen en heb je zekerheid."
    }
  ];

  const combinations = [
    {
      solar: "6 zonnepanelen (2,4 kWp)",
      production: "2.100 kWh/jaar",
      battery: "SMILE-B3 (2,9 kWh)",
      household: "1-2 personen, appartement",
      consumption: "2.500 kWh/jaar",
      investment: "€8.000 (panelen + batterij)",
      selfSufficiency: "60-70%",
      saving: "€450/jaar (€250 panelen + €200 batterij)",
      payback: "18 jaar",
      verdict: "Basis combinatie, beperkte ruimte, langzame terugverdientijd"
    },
    {
      solar: "10 zonnepanelen (4 kWp)",
      production: "3.500 kWh/jaar",
      battery: "SMILE5 (5 kWh)",
      household: "2-3 personen, tussenwoning",
      consumption: "3.800 kWh/jaar",
      investment: "€11.500 (panelen + batterij)",
      selfSufficiency: "75-85%",
      saving: "€750/jaar (€400 panelen + €350 batterij)",
      payback: "15 jaar",
      verdict: "Populairste combinatie, goede balans prijs/prestatie"
    },
    {
      solar: "15 zonnepanelen (6 kWp)",
      production: "5.250 kWh/jaar",
      battery: "SMILE5 (10 kWh)",
      household: "4+ personen, vrijstaand huis",
      consumption: "5.500 kWh/jaar",
      investment: "€15.000 (panelen + batterij)",
      selfSufficiency: "85-90%",
      saving: "€1.100/jaar (€550 panelen + €550 batterij)",
      payback: "14 jaar",
      verdict: "Optimale combinatie, hoge zelfvoorziening, excellent rendement"
    },
    {
      solar: "20 zonnepanelen (8 kWp)",
      production: "7.000 kWh/jaar",
      battery: "SMILE-G3-T10 (10 kWh)",
      household: "Met elektrische auto",
      consumption: "8.500 kWh/jaar (incl. 3.000 kWh EV)",
      investment: "€18.500 (panelen + batterij)",
      selfSufficiency: "80-85% (incl. EV laden)",
      saving: "€1.600/jaar (€700 panelen + €600 batterij + €300 EV)",
      payback: "12 jaar",
      verdict: "Perfect voor EV-bezitters, hoogste absolute besparing"
    }
  ];

  const sizing = [
    {
      title: "Te Klein Batterij",
      solar: "4 kWp (10 panelen)",
      battery: "2,9 kWh",
      problem: "Zonne-overproductie niet volledig opgeslagen",
      consequence: "Moet nog terugleveren tegen €0,08/kWh = gemiste besparing",
      loss: "€200-400/jaar gemist",
      solution: "Vergroot batterij naar 5-10 kWh"
    },
    {
      title: "Te Groot Batterij",
      solar: "2,4 kWp (6 panelen)",
      battery: "15 kWh",
      problem: "Batterij wordt niet dagelijks vol = onderbenutte capaciteit",
      consequence: "Hogere investering zonder evenredige besparing = langere terugverdientijd",
      loss: "2-3 jaar langere ROI",
      solution: "Kies batterij passend bij zonne-opbrengst"
    },
    {
      title: "Perfect Afgestemd",
      solar: "4 kWp (10 panelen)",
      battery: "5-7 kWh",
      problem: "Geen problemen",
      consequence: "Batterij dagelijks vol geladen en leeg gebruikt = optimale ROI",
      loss: "€0",
      solution: "Dit is de ideale configuratie!"
    }
  ];

  const saldoPhases = [
    {
      year: "2024",
      saldering: "70%",
      teruglevering: "€0,10/kWh (70% van €0,14)",
      inkoop: "€0,40/kWh",
      verschil: "€0,30/kWh verlies",
      batterijVoordeel: "Voorkom €0,30 verlies door zelf te gebruiken",
      impact: "Batterij wordt interessanter"
    },
    {
      year: "2025",
      saldering: "50%",
      teruglevering: "€0,07/kWh (50% van €0,14)",
      inkoop: "€0,40/kWh",
      verschil: "€0,33/kWh verlies",
      batterijVoordeel: "Voorkom €0,33 verlies door zelf te gebruiken",
      impact: "Batterij sterk aanbevolen"
    },
    {
      year: "2026",
      saldering: "30%",
      teruglevering: "€0,05/kWh (30% van €0,14)",
      inkoop: "€0,40/kWh",
      verschil: "€0,35/kWh verlies",
      batterijVoordeel: "Voorkom €0,35 verlies door zelf te gebruiken",
      impact: "Batterij vrijwel essentieel"
    },
    {
      year: "2027",
      saldering: "0%",
      teruglevering: "€0,08/kWh (pure terugleververgoeding)",
      inkoop: "€0,40/kWh",
      verschil: "€0,32/kWh verlies",
      batterijVoordeel: "Voorkom €0,32 verlies door zelf te gebruiken",
      impact: "Batterij absoluut noodzakelijk"
    }
  ];

  const tips = [
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Installeer Panelen + Batterij Tegelijk",
      description: "Bespaart installatiekosten (één keer de installateur) en je profiteert direct van beide systemen. Vaak kortingspakketten beschikbaar. 0% BTW geldt voor beide producten.",
      saving: "€500-1.000 korting op installatie"
    },
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Kies Batterij Passend Bij Zonne-Opbrengst",
      description: "Vuistregel: batterijcapaciteit = 30-50% van dagelijkse zonne-opbrengst. Bij 4 kWp (11 kWh/dag): kies 4-6 kWh batterij. Bij 8 kWp (22 kWh/dag): kies 8-10 kWh batterij.",
      saving: "Optimale ROI, geen overcapaciteit"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Laat Slim Monitoren Installeren",
      description: "Investeer in monitoring (P1 meter, AlphaCloud) om productie, opslag en verbruik real-time te zien. Identificeer verspilling en optimaliseer gedrag. Verhoogt besparing met 10-20%.",
      saving: "€100-300/jaar extra door optimalisatie"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      title: "Optimaliseer Verbruiksmoment",
      description: "Gebruik grote apparaten (wasmachine, droger, vaatwasser) overdag tijdens zonproductie óf 's avonds uit batterij. Vermijd verbruik 's nachts (nettarieven). Elke kWh uit batterij = €0,40 bespaard.",
      saving: "€200-400/jaar door slim timing"
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Profiteer van 0% BTW Nu",
      description: "Sinds 2023: 0% BTW op zonnepanelen én thuisbatterijen. Dit scheelt 21% op totale investering = €2.000-4.000 voordeel. Onduidelijk of dit permanent blijft - profiteer nu!",
      saving: "€2.000-4.000 BTW voordeel"
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      title: "Installeer Voor 2027",
      description: "Na 2027 stopt saldering volledig. Hoe eerder je batterij installeert, hoe langer je profiteert. Elk jaar wachten = jaar besparing gemist + jaar dichter bij nul saldering.",
      saving: "€500-800/jaar gemiste besparing per jaar uitstel"
    }
  ];

  const faqs = [
    {
      question: "Waarom zou ik een thuisbatterij nemen als ik al zonnepanelen heb?",
      answer: "Zonnepanelen produceren vooral overdag, maar je verbruikt vooral 's avonds/nachts. Zonder batterij lever je overdag terug tegen €0,08/kWh en koop je 's avonds in tegen €0,40/kWh = €0,32 verlies per kWh. Met batterij sla je overdag op en gebruik je 's avonds = €0,32 winst per kWh. Bij 2.000 kWh/jaar door batterij = €640/jaar extra besparing. Daarnaast verhoogt een batterij je zelfvoorziening van 30-40% naar 70-90%."
    },
    {
      question: "Hoe groot moet mijn thuisbatterij zijn bij mijn zonnepanelen?",
      answer: "Vuistregel: batterijcapaciteit = 30-50% van dagelijkse zonne-productie. Berekening: (aantal kWp × 2,7 kWh/kWp/dag) × 0,3-0,5. Voorbeelden: 4 kWp (11 kWh/dag) → 4-6 kWh batterij (SMILE5), 6 kWp (16 kWh/dag) → 5-8 kWh batterij (SMILE5 uitgebreid), 8 kWp (22 kWh/dag) → 8-10 kWh batterij (SMILE-T10). Te klein = gemiste opslag, te groot = onderbenutte capaciteit."
    },
    {
      question: "Kan ik een batterij later toevoegen of moet dit tegelijk met zonnepanelen?",
      answer: "Beide kan, maar tegelijk heeft voordelen: (1) Lagere installatiekosten (één keer installateur), (2) Betere systeemintegratie, (3) Direct optimaal rendement, (4) Vaak combi-kortingen. Later toevoegen kan ook: (1) Spreidt investering, (2) Eerst zonnepanelen afschrijven, (3) Batterijprijzen mogelijk lager in toekomst. Nadeel: gemiste besparing tijdens wachtperiode (€300-600/jaar) en extra installatiekosten (€400-800). Advies: bij nieuwbouw of renovatie meteen beide, anders eerst zonnepanelen dan batterij binnen 1-2 jaar."
    },
    {
      question: "Wat gebeurt er met mijn terugleververgoeding na 2027?",
      answer: "Vanaf 2027 stopt de salderingsregeling volledig. Dit betekent: (1) Teruglevering: €0,08-0,12/kWh (pure inkoopprijs energiemaatschappij), (2) Inkoop: €0,35-0,45/kWh (normale consumentenprijs), (3) Verschil: €0,27-0,37 verlies per kWh teruggeleverd. Zonder batterij levert gemiddeld huishouden 2.000-3.000 kWh terug = €540-1.110 gemiste waarde per jaar. Met batterij voorkom je dit verlies door overtollige energie zelf te gebruiken = €540-1.110 extra per jaar. Batterij is dus na 2027 vrijwel essentieel voor zonnepaneel-bezitters."
    },
    {
      question: "Loont een thuisbatterij ook zonder zonnepanelen?",
      answer: "Mogelijk, maar minder aantrekkelijk. Zonder zonnepanelen: (1) Batterij vullen met goedkope netstroom (€0,20/kWh nachttarief), (2) Gebruiken tijdens duur tarief (€0,40/kWh avond) = €0,20 winst/kWh. Met 5 kWh batterij en dagelijks cyclus: €0,20 × 5 kWh × 300 dagen = €300/jaar. Investering €5.785 / €300 = 19 jaar terugverdientijd. MET zonnepanelen: €750/jaar = 8 jaar terugverdientijd. Conclusie: batterij loont vooral in combinatie met zonnepanelen. Zonder zonnepanelen: alleen bij dynamisch contract (EPEX) aantrekkelijk (zie onze EPEX pagina)."
    },
    {
      question: "Welke AlphaESS batterij past het beste bij mijn zonnepanelen?",
      answer: "Afhankelijk van aantal zonnepanelen: (1) 6-8 panelen (2-3 kWp): SMILE-B3 (2,9 kWh) - klein, compact, basis zelfvoorziening, (2) 8-12 panelen (3-5 kWp): SMILE5 (5 kWh) - populairste keuze, goede balans, modulair uitbreidbaar, (3) 12-16 panelen (5-6,5 kWp): SMILE5 (10 kWh uitgebreid) - hoge zelfvoorziening, geschikt voor gezinnen, (4) 16-25 panelen (6,5-10 kWp): SMILE-G3-T10 (10 kWh 3-fase) - hoogste capaciteit, EPEX handel mogelijk, perfect voor EV. Alle systemen: 10 jaar garantie, 0% BTW, 24/7 monitoring."
    },
    {
      question: "Hoe beïnvloedt een batterij de terugverdientijd van mijn zonnepanelen?",
      answer: "Een batterij VERBETERT de terugverdientijd van zonnepanelen: Zonder batterij: terugverdientijd 8-12 jaar (afhankelijk van saldering). Met batterij: terugverdientijd 7-10 jaar (hogere eigen verbruik = meer besparing). Reden: elke kWh zelf gebruiken = €0,40 besparing vs. terugleveren = €0,08 opbrengst = €0,32 verschil. Bij 2.000 kWh extra eigen verbruik door batterij = €640/jaar extra. Dit compenseert de batterij-investering (€5.000-8.000) binnen 8-12 jaar, waarna BEIDE systemen volledig zijn terugverdiend en u 10+ jaar gratis energie heeft."
    },
    {
      question: "Kan ik met zonnepanelen + batterij volledig zelfvoorzienend zijn?",
      answer: "Vrijwel volledig in zomermaanden, gedeeltelijk in winter: (1) Zomer (april-september): 90-100% zelfvoorziening mogelijk - lange dagen, hoge productie, kleine batterij voldoet, (2) Winter (oktober-maart): 40-60% zelfvoorziening - korte dagen, lage productie, grotere batterij nodig, (3) Jaargemiddeld: 70-85% zelfvoorziening met goed afgestemd systeem. Voor 100% zelfvoorziening hele jaar: 25-30% overcapaciteit nodig (groot systeem, onderbenutte zomer), waardoor ROI verslechtert. Advies: richt op 75-85% zelfvoorziening voor beste balans tussen onafhankelijkheid en rendement."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij met Zonnepanelen | 90% Zelfvoorziening & Terugleverkosten Vermijden | StayCool Airco"
        description="Thuisbatterij + zonnepanelen ✓ 70-90% zelfvoorziening ✓ €640/jaar extra besparing ✓ AlphaESS 0% BTW ✓ Complete installatie Limburg"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          serviceType: "Thuisbatterij met Zonnepanelen Installatie",
          description: "Complete installatie van zonnepanelen met thuisbatterij voor maximale zelfvoorziening en minimale energiekosten. Voorkom terugleverkosten en verhoog zelfvoorziening tot 90%.",
          provider: {
            "@type": "Organization",
            name: "StayCool Airco"
          },
          areaServed: "Limburg, Nederland"
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij met Zonnepanelen: 90% Zelfvoorziening en €640/Jaar Extra Besparing
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            De perfecte combinatie: zonnepanelen produceren overdag, thuisbatterij slaat op, jij gebruikt 's avonds. Voorkom terugleverkosten (€0,32/kWh verschil!) en word energieonafhankelijk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Combi-Advies
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk AlphaESS Batterijen
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <TrendingUp className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Saldering Stopt in 2027!</p>
                <p className="text-sm">
                  Teruglevering wordt €0,08/kWh, inkoop blijft €0,40/kWh. Met batterij voorkom je €0,32 verlies per kWh = €640/jaar extra besparing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom Zonnepanelen + Thuisbatterij de Slimste Investering Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximale energieonafhankelijkheid en besparing door perfecte synergie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Waarom Zonnepanelen + Thuisbatterij de Perfecte Combinatie Zijn
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              <strong>Zonnepanelen</strong> produceren stroom overdag wanneer de zon schijnt. Maar je verbruikt vooral 's avonds en 's nachts (koken, TV, verlichting, verwarming). Zonder thuisbatterij lever je overdag terug tegen lage vergoeding (€0,08/kWh na 2027) en koop je 's avonds in tegen hoge prijs (€0,40/kWh). Dit <strong>€0,32 verschil per kWh</strong> is pure geldverspilling.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Een <strong>thuisbatterij</strong> lost dit op: sla overtollige zonne-energie overdag op en gebruik deze 's avonds. Je voorkomt teruglevering tegen lage prijs én inkoop tegen hoge prijs. Bij 2.000 kWh per jaar door batterij = <strong>€640 extra besparing</strong>. Daarnaast verhoogt een batterij je zelfvoorziening van 30-40% (alleen zonnepanelen) naar 70-90% (met batterij).
            </p>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Het Verschil Met en Zonder Thuisbatterij</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-2 border-red-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-red-600 mb-4 text-center">❌ Zonder Thuisbatterij</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="font-bold text-gray-900">Overdag (zon):</p>
                      <p className="text-gray-700">Direct verbruik + rest terugleveren @ €0,08/kWh</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded">
                      <p className="font-bold text-gray-900">'s Avonds/nachts:</p>
                      <p className="text-gray-700">Inkoop van net @ €0,40/kWh</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded">
                      <p className="font-bold text-red-700">Verlies: €0,32/kWh</p>
                      <p className="text-sm text-gray-600">Bij 2.000 kWh = €640/jaar verlies</p>
                    </div>
                    <div className="pt-3 border-t-2">
                      <p className="font-bold text-gray-900">Zelfvoorziening:</p>
                      <p className="text-2xl font-bold text-red-600">30-40%</p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-green-200 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-600 mb-4 text-center">✅ Met Thuisbatterij</h4>
                  <div className="space-y-3 text-sm">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-bold text-gray-900">Overdag (zon):</p>
                      <p className="text-gray-700">Direct verbruik + rest opslaan in batterij</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-bold text-gray-900">'s Avonds/nachts:</p>
                      <p className="text-gray-700">Gebruik uit batterij @ €0/kWh (gratis!)</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded">
                      <p className="font-bold text-green-700">Winst: €0,40/kWh</p>
                      <p className="text-sm text-gray-600">Bij 2.000 kWh = €800/jaar waarde</p>
                    </div>
                    <div className="pt-3 border-t-2">
                      <p className="font-bold text-gray-900">Zelfvoorziening:</p>
                      <p className="text-2xl font-bold text-green-600">70-90%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              4 Concrete Voordelen van Batterij + Zonnepanelen
            </h2>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{benefit.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 rounded p-4">
                      <p className="text-sm font-bold text-red-700 mb-2">❌ Zonder Batterij:</p>
                      <p className="text-sm text-gray-700">{benefit.before}</p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm font-bold text-green-700 mb-2">✅ Met Batterij:</p>
                      <p className="text-sm text-gray-700">{benefit.after}</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 mb-3">
                    <p className="text-center">
                      <span className="font-bold text-gray-900">Besparing: </span>
                      <span className="text-xl font-bold text-green-600">{benefit.saving}</span>
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.explanation}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Welke Combinatie Past Bij Jouw Situatie?
            </h2>

            <div className="space-y-8 mb-8">
              {combinations.map((combo, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{combo.solar} + {combo.battery}</h3>
                        <p className="text-sm">{combo.household}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Zelfvoorziening</p>
                        <p className="text-2xl font-bold">{combo.selfSufficiency}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Zonne-productie</p>
                        <p className="text-lg font-bold text-gray-900">{combo.production}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Jaarverbruik</p>
                        <p className="text-lg font-bold text-gray-900">{combo.consumption}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Investering</p>
                        <p className="text-lg font-bold text-gray-900">{combo.investment}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Jaarlijkse Besparing</p>
                          <p className="text-2xl font-bold text-green-600">{combo.saving}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Terugverdientijd</p>
                          <p className="text-2xl font-bold text-yellow-600">{combo.payback}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-center">
                      <strong>Advies:</strong> {combo.verdict}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Juiste Batterijgrootte Kiezen: Waarom Dit Cruciaal Is
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De grootte van je thuisbatterij moet aansluiten bij je zonne-opbrengst én dagelijks verbruikspatroon. Te klein betekent gemiste opslag, te groot betekent onderbenutte capaciteit en langere terugverdientijd.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {sizing.map((size, index) => (
                <div key={index} className={`rounded-lg p-6 shadow-md ${
                  size.title === "Perfect Afgestemd" ? "bg-green-50 border-2 border-green-500" : "bg-white"
                }`}>
                  <h3 className={`text-xl font-bold mb-3 ${
                    size.title === "Perfect Afgestemd" ? "text-green-700" : "text-gray-900"
                  }`}>
                    {size.title}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-bold text-gray-700">Zonnepanelen:</p>
                      <p className="text-gray-600">{size.solar}</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700">Batterij:</p>
                      <p className="text-gray-600">{size.battery}</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700">Probleem:</p>
                      <p className="text-gray-600">{size.problem}</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700">Gevolg:</p>
                      <p className="text-gray-600">{size.consequence}</p>
                    </div>
                    <div className={`p-3 rounded ${
                      size.title === "Perfect Afgestemd" ? "bg-green-100" : "bg-red-50"
                    }`}>
                      <p className="font-bold text-gray-900">{size.title === "Perfect Afgestemd" ? "Resultaat" : "Verlies"}:</p>
                      <p className={size.title === "Perfect Afgestemd" ? "text-green-700 font-bold" : "text-red-700"}>{size.loss}</p>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="font-bold text-gray-700">Oplossing:</p>
                      <p className="text-gray-900">{size.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Saldering Afbouw: Waarom Batterij Steeds Belangrijker Wordt
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De salderingsregeling wordt afgebouwd en stopt volledig in 2027. Dit maakt een thuisbatterij steeds waardevoller:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Jaar</th>
                    <th className="px-4 py-3 text-left">Saldering</th>
                    <th className="px-4 py-3 text-left">Teruglevering</th>
                    <th className="px-4 py-3 text-left">Verschil</th>
                    <th className="px-4 py-3 text-left">Batterij Voordeel</th>
                  </tr>
                </thead>
                <tbody>
                  {saldoPhases.map((phase, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3 font-bold">{phase.year}</td>
                      <td className="px-4 py-3">{phase.saldering}</td>
                      <td className="px-4 py-3 text-sm">{phase.teruglevering}</td>
                      <td className="px-4 py-3">
                        <span className="font-bold text-red-600">{phase.verschil}</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className="font-bold text-green-600">{phase.batterijVoordeel}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <p className="font-bold text-gray-900 mb-2">⚠️ Belangrijk Te Weten:</p>
              <p className="text-gray-700 mb-2">
                Vanaf 2027 voorkom je met een thuisbatterij <strong>€0,32 verlies per kWh</strong>. Bij gemiddeld 2.000 kWh per jaar door batterij = <strong>€640 extra besparing per jaar</strong> bovenop de normale zonnepaneel-besparing.
              </p>
              <p className="text-gray-700">
                Elk jaar dat je wacht met batterij = jaar besparing gemist. Installeer voor 2027 om maximaal te profiteren!
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              6 Tips voor Optimale Combinatie Zonnepanelen + Batterij
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    {tip.icon}
                    <h3 className="text-lg font-bold text-gray-900 ml-3">{tip.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tip.description}</p>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-bold text-green-700">{tip.saving}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar Voor 90% Energieonafhankelijkheid?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Laat ons je helpen met de perfecte combinatie zonnepanelen + thuisbatterij. Gratis advies, scherpe prijzen, professionele installatie in Limburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Combi-Advies
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Batterij + Zonnepanelen
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Meer Over Thuisbatterijen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terugverdientijd</h3>
              <p className="text-sm text-gray-600 mb-3">ROI berekening met zonnepanelen</p>
              <p className="text-yellow-600 font-bold">7-10 jaar terugverdientijd</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE5 Batterij</h3>
              <p className="text-sm text-gray-600 mb-3">Populairste keuze bij zonnepanelen</p>
              <p className="text-yellow-600 font-bold">5-30 kWh modulair</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alle Batterijen</h3>
              <p className="text-sm text-gray-600 mb-3">Compleet AlphaESS assortiment</p>
              <p className="text-yellow-600 font-bold">Vind jouw perfecte match</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Word Energieonafhankelijk Met Zonnepanelen + Thuisbatterij
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            70-90% zelfvoorziening, €640/jaar extra besparing, 0% BTW, 10 jaar garantie. Complete installatie door gecertificeerde monteurs in Limburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Gratis Intake
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk AlphaESS Systemen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijZonnepanelenPage;
