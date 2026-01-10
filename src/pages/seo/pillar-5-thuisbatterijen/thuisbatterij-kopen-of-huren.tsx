import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock, Euro, Calculator, Phone, TrendingUp, CheckCircle, ArrowRight, AlertCircle, DollarSign } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijKopenOfHurenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Kopen of Huren' }
  ];

  const usps = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-yellow-500" />,
      title: "Kopen = Beste ROI",
      description: "Direct eigenaar, lagste totaalkosten over 15 jaar, optimale besparing na terugverdientijd"
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: "Huren = Lage Start",
      description: "Geen grote investering vooraf, onderhoud inclusief, maar hogere maandlasten"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "0% BTW bij Kopen",
      description: "21% korting door BTW-vrijstelling, geldt alleen bij directe aankoop"
    },
    {
      icon: <Calculator className="h-12 w-12 text-yellow-500" />,
      title: "Persoonlijk Advies",
      description: "Wij berekenen wat voor uw situatie voordeliger is - kopen of huren"
    }
  ];

  const detailedComparison = [
    {
      aspect: "Initiële Investering",
      kopen: "€4.545 - €11.000 eenmalig",
      huren: "€0 startkosten",
      leasen: "€0 - €500 startkosten",
      winner: "Huren/Leasen",
      explanation: "Huren en leasen vereisen geen grote investering vooraf, ideaal als je direct wilt besparen zonder kapitaal beschikbaar te hebben."
    },
    {
      aspect: "Maandelijkse Kosten",
      kopen: "€0 (na aankoop)",
      huren: "€95 - €150/maand",
      leasen: "€85 - €140/maand",
      winner: "Kopen",
      explanation: "Na aankoop geen maandlasten meer. Huren en leasen betekent permanente maandelijkse kosten die nooit stoppen."
    },
    {
      aspect: "Eigendomsrecht",
      kopen: "Direct eigenaar",
      huren: "Blijft van verhuurder",
      leasen: "Optie tot koop na contract",
      winner: "Kopen",
      explanation: "Bij kopen ben je direct eigenaar. Bij huren blijft het systeem eigendom van verhuurder. Leasen kan optie tot overname hebben."
    },
    {
      aspect: "BTW Voordeel",
      kopen: "0% BTW = 21% korting",
      huren: "21% BTW in maandlast",
      leasen: "21% BTW in maandlast",
      winner: "Kopen",
      explanation: "Enorme besparing: €1.200-2.300 door 0% BTW bij aankoop. Dit voordeel geldt niet bij huren of leasen."
    },
    {
      aspect: "Onderhoud & Service",
      kopen: "Zelf verantwoordelijk (10 jaar garantie)",
      huren: "Inclusief in maandlast",
      leasen: "Meestal inclusief",
      winner: "Huren/Leasen",
      explanation: "Onderhoud is geregeld bij huren/leasen. Bij kopen heb je wel 10 jaar garantie en AlphaESS systemen zijn onderhoudsvrij."
    },
    {
      aspect: "Totale Kosten 15 Jaar (SMILE5)",
      kopen: "€5.785 eenmalig",
      huren: "€17.100 - €27.000",
      leasen: "€15.300 - €25.200",
      winner: "Kopen",
      explanation: "Na 15 jaar heb je bij huren/leasen €10.000-20.000 meer betaald dan bij kopen. Dit is pure verlies zonder eigendom."
    },
    {
      aspect: "Flexibiliteit",
      kopen: "Blijvende investering",
      huren: "Opzegbaar (meestal 5-10 jaar)",
      leasen: "Contract gebonden (3-10 jaar)",
      winner: "Huren",
      explanation: "Huren biedt meeste flexibiliteit als je niet zeker bent. Leasen en kopen zijn langetermijn commitments."
    },
    {
      aspect: "Geschikt Voor",
      kopen: "Wie kapitaal heeft en lange termijn denkt",
      huren: "Wie weinig kapitaal heeft of kort blijft wonen",
      leasen: "Zakelijk gebruik of later willen kopen",
      winner: "Afhankelijk van situatie",
      explanation: "Beste keuze hangt af van financiële situatie, woonduur en voorkeuren."
    }
  ];

  const scenarios = [
    {
      title: "Scenario 1: SMILE5 Kopen",
      description: "Eenmalig kopen met 0% BTW voordeel",
      investment: "€5.785 eenmalig",
      monthlyPayment: "€0",
      yearlySavings: "€600/jaar",
      paybackPeriod: "10 jaar",
      totalCost15Years: "€5.785",
      totalSavings15Years: "€9.000 (€600 × 15)",
      netProfit15Years: "+€3.215",
      ownership: "Direct eigenaar",
      verdict: "Beste keuze voor wie kapitaal heeft. Laagste totaalkosten en hoogste rendement na terugverdientijd. BTW-voordeel van €1.215 is enorm voordeel.",
      color: "green"
    },
    {
      title: "Scenario 2: SMILE5 Huren",
      description: "Maandelijks huren zonder startkosten",
      investment: "€0 startkosten",
      monthlyPayment: "€95/maand",
      yearlySavings: "€600/jaar",
      paybackPeriod: "N.v.t. (blijft huren)",
      totalCost15Years: "€17.100 (€95 × 180 maanden)",
      totalSavings15Years: "€9.000 (€600 × 15)",
      netProfit15Years: "-€8.100",
      ownership: "Nooit eigenaar",
      verdict: "Geschikt voor wie geen kapitaal heeft, maar financieel nadelig op lange termijn. Na 15 jaar €11.315 meer betaald dan bij kopen.",
      color: "orange"
    },
    {
      title: "Scenario 3: SMILE5 Leasen",
      description: "Zakelijk leasen met maandlasten",
      investment: "€500 startkosten",
      monthlyPayment: "€85/maand",
      yearlySavings: "€600/jaar",
      paybackPeriod: "N.v.t. (lease contract)",
      totalCost15Years: "€15.800 (€500 + €85 × 180)",
      totalSavings15Years: "€9.000 (€600 × 15)",
      netProfit15Years: "-€6.800",
      ownership: "Mogelijk na contract",
      verdict: "Iets voordeliger dan huren maar nog steeds €10.015 duurder dan kopen. Wel zakelijk aftrekbaar en mogelijkheid tot overname.",
      color: "yellow"
    },
    {
      title: "Scenario 4: Kopen met Lening",
      description: "Kopen met persoonlijke lening (5% rente)",
      investment: "€5.785 gefinancierd",
      monthlyPayment: "€61/maand (10 jaar)",
      yearlySavings: "€600/jaar",
      paybackPeriod: "13 jaar (incl. rente)",
      totalCost15Years: "€7.320 (€5.785 + €1.535 rente)",
      totalSavings15Years: "€9.000 (€600 × 15)",
      netProfit15Years: "+€1.680",
      ownership: "Direct eigenaar",
      verdict: "Interessante optie als je geen kapitaal hebt maar wel wilt kopen. Nog steeds voordeliger dan huren/leasen door 0% BTW voordeel.",
      color: "blue"
    }
  ];

  const situationAdvice = [
    {
      title: "Je hebt kapitaal beschikbaar (€5.000-12.000)",
      recommendation: "Kopen",
      reason: "Laagste totaalkosten, directe 21% BTW-korting, beste ROI. Na 10 jaar terugverdientijd nog 5-10 jaar gratis energie.",
      calculation: "SMILE5: €5.785 → 10 jaar terugverdientijd → 5-10 jaar pure winst (€3.000-6.000 extra)"
    },
    {
      title: "Je hebt weinig kapitaal maar wel goede kredietwaardigheid",
      recommendation: "Kopen met persoonlijke lening",
      reason: "Profiteer van 0% BTW (€1.215 besparing) en word eigenaar. Maandlasten vergelijkbaar met huren maar lagere totaalkosten.",
      calculation: "SMILE5: €61/maand (10 jaar) vs €95/maand huren → Na 10 jaar eigenaar met €6.000+ minder betaald"
    },
    {
      title: "Je blijft kort wonen op huidige adres (<5 jaar)",
      recommendation: "Huren of Niet Doen",
      reason: "Terugverdientijd is te kort voor aankoop. Huren kan wel, maar rendement laag. Overwegen voor volgende woning.",
      calculation: "Bij 4 jaar wonen: Kopen verlies €2.000+. Huren verlies €4.560. Mogelijk beter wachten."
    },
    {
      title: "Zakelijk gebruik of ZZP-er",
      recommendation: "Kopen of Leasen zakelijk",
      reason: "Zakelijke aftrek mogelijk. BTW terug te vorderen. Leasen biedt fiscale voordelen en afschrijving.",
      calculation: "Zakelijk kopen: BTW terug + zakelijke aftrek. Leasen: maandlasten volledig aftrekbaar, geen groot kapitaal nodig"
    },
    {
      title: "Je wilt risico minimaliseren",
      recommendation: "Huren met korte opzegtermijn",
      reason: "Geen groot kapitaal vast, onderhoud inclusief, flexibel opzegbaar. Wel hogere totaalkosten op lange termijn.",
      calculation: "Huren: €0 risico op defecten/onderhoud. Nadeel: €11.315 meer betalen over 15 jaar vergeleken met kopen"
    }
  ];

  const hiddenCosts = [
    {
      type: "Kopen",
      visible: "€5.785 eenmalig (SMILE5)",
      hidden: [
        "Geen verborgen kosten",
        "0% BTW = geen extra tarieven",
        "10 jaar garantie inclusief",
        "AlphaCloud monitoring gratis",
        "Eventueel: verzekering €30-50/jaar (optioneel)"
      ],
      total: "€5.785 + eventueel €450 verzekering over 15 jaar = €6.235 totaal",
      transparency: "Zeer transparant - je weet exact wat je betaalt"
    },
    {
      type: "Huren",
      visible: "€95/maand",
      hidden: [
        "21% BTW in maandlast (€16/maand)",
        "Vaak indexatie (2-3% per jaar)",
        "Administratiekosten soms extra",
        "Verzekering meestal verplicht in prijs",
        "Boetes bij voortijdige beëindiging"
      ],
      total: "€17.100 basis + €1.500-3.000 indexatie over 15 jaar = €18.600-20.100",
      transparency: "Let op kleine lettertjes - totaalprijs vaak hoger dan gedacht"
    },
    {
      type: "Leasen",
      visible: "€500 + €85/maand",
      hidden: [
        "21% BTW in maandlast (€15/maand)",
        "Rentepercentage vaak onduidelijk",
        "Restschuld bij overname (€1.000-2.000)",
        "Administratiekosten per maand mogelijk",
        "Boetes bij contractbreuk"
      ],
      total: "€15.800 basis + €1.000-2.000 restschuld = €16.800-17.800",
      transparency: "Matige transparantie - lees contract goed door"
    }
  ];

  const faqs = [
    {
      question: "Is kopen of huren voordeliger voor een thuisbatterij?",
      answer: "Kopen is financieel altijd voordeliger op lange termijn. Bij SMILE5 betaal je €5.785 eenmalig versus €17.100-27.000 over 15 jaar bij huren. Het verschil van €11.315-21.215 is enorm. Bovendien profiteer je bij kopen van 0% BTW (€1.215 korting) en ben je na terugverdientijd (10 jaar) eigenaar. Huren is alleen zinvol als je (1) geen kapitaal hebt, (2) kort blijft wonen, of (3) risico wilt minimaliseren."
    },
    {
      question: "Wat als ik geen €5.000-10.000 heb om direct te kopen?",
      answer: "Dan zijn er drie opties: (1) Kopen met persoonlijke lening - maandlasten €61/maand vergelijkbaar met huren maar je wordt wel eigenaar en profiteert van 0% BTW. (2) Sparen en later kopen - elke maand uitstel betekent wel gemiste besparing. (3) Huren als tijdelijke oplossing - meteen besparen maar hogere totaalkosten. Onze aanbeveling: optie 1 (lening) als je kredietwaardig bent, anders optie 3 (huren) voor maximaal 3-5 jaar."
    },
    {
      question: "Kan ik een thuisbatterij via mijn hypotheek financieren?",
      answer: "Ja, bij nieuwbouw of grondige renovatie kun je de thuisbatterij meefinancieren in je hypotheek. Voordeel: lage rente (2-4% vs 5-7% persoonlijke lening) en lange looptijd (30 jaar). Nadeel: alleen mogelijk bij specifieke situaties. Bij bestaande woning zonder verbouwing is dit meestal niet mogelijk. In dat geval is persoonlijke lening of kopen uit eigen middelen de beste optie. Het 0% BTW voordeel geldt in alle gevallen."
    },
    {
      question: "Hoe zit het met onderhoud bij kopen versus huren?",
      answer: "Bij huren is onderhoud inclusief - verhuurder regelt reparaties. Bij kopen heb je 10 jaar garantie op AlphaESS systemen. Het belangrijkste: AlphaESS batterijen zijn volledig onderhoudsvrij - geen jaarlijkse controles nodig. Enige kosten: optionele verzekering (€30-50/jaar). Bij defect binnen 10 jaar regelt garantie alles. Na 10 jaar is batterij meestal nog 70%+ capaciteit. Conclusie: onderhoud is bij beide opties minimaal, maar bij kopen bespaart je €11.000+ totaalkosten."
    },
    {
      question: "Kan ik de thuisbatterij meenemen bij verhuizing?",
      answer: "Bij kopen: Ja, technisch mogelijk maar kostbaar (€800-1.500 demontage + installatie). Vaak voordeliger om mee te verkopen met woning - verhoogt woningwaarde met €3.000-6.000. Bij huren: Nee, contract is gekoppeld aan adres. Sommige verhuurders bieden relocatie tegen meerprijs. Bij leasen: Meestal niet, contract blijft lopen of je betaalt restschuld. Advies: Als je binnen 3-5 jaar verhuist, overweeg huren of wacht met aankoop."
    },
    {
      question: "Is leasen een goede tussenvorm tussen kopen en huren?",
      answer: "Leasen zit financieel tussen kopen en huren maar heeft niet de voordelen van beide. Totaalkosten 15 jaar: €15.800-17.800 (vs €5.785 kopen, €17.100+ huren). Je bent geen eigenaar tijdens contract en betaalt vaak €1.000-2.000 restschuld bij overname. Enig voordeel: zakelijke aftrek voor ZZP/bedrijven en lagere maandlasten dan huren. Voor particulieren is leasen zelden de beste keuze - koop direct of huur tijdelijk."
    },
    {
      question: "Geldt de 0% BTW ook bij huren of leasen?",
      answer: "Nee, het 0% BTW tarief geldt alleen bij directe aankoop van thuisbatterij. Bij huren en leasen betaal je 21% BTW over de maandlasten. Dit is een enorm verschil: bij SMILE5 kopen bespaart je €1.215 BTW eenmalig. Bij huren betaal je €16/maand BTW = €2.880 over 15 jaar. Bij leasen vergelijkbaar. Dit alleen al maakt kopen €1.215-2.880 voordeliger. De BTW-vrijstelling is dus een sterke reden om te kopen in plaats van huren/leasen."
    },
    {
      question: "Wat gebeurt er na afloop van het huurcontract?",
      answer: "Dat hangt af van contract: (1) Voortzetting - je blijft betalen, systeem blijft van verhuurder, (2) Koop - je kunt systeem overnemen voor restwaarde (€1.500-3.000), (3) Retourneren - systeem wordt opgehaald, je bent alles kwijt wat je betaalde. Let op: na 10-15 jaar huur heb je €17.000-40.000 betaald maar ben je nog steeds geen eigenaar. Bij kopen had je voor €5.785 direct eigenaar geweest en na 10 jaar nog 5-10 jaar gratis gebruik gehad."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Kopen of Huren? Complete Vergelijking 2024 | StayCool Airco"
        description="Thuisbatterij kopen of huren? ✓ Complete kostenvergelijking ✓ Kopen €11.000+ voordeliger ✓ 0% BTW alleen bij kopen ✓ Lease opties ✓ Persoonlijk advies ✓ Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij Kopen of Huren: Complete Financiële Vergelijking 2024",
          description: "Uitgebreide vergelijking tussen kopen, huren en leasen van thuisbatterijen. Kosten, voor- en nadelen, situatieadvies en verborgen kosten.",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Kopen of Huren? Complete Vergelijking & Advies
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Kopen is €11.000+ voordeliger over 15 jaar door 0% BTW en geen maandlasten. Huren alleen zinvol bij weinig kapitaal of korte woonduur. Wij berekenen wat voor jouw situatie het beste is.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Jouw Situatie
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Persoonlijk Advies
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <TrendingUp className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Kopen = €11.315 Voordeliger over 15 Jaar</p>
                <p className="text-sm">
                  SMILE5 kopen: €5.785 totaal. Huren: €17.100+ totaal. Plus 0% BTW voordeel alleen bij kopen (€1.215 besparing).
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
              Kopen, Huren of Leasen: De Verschillen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elk heeft voor- en nadelen afhankelijk van jouw situatie
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

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Uitgebreide Vergelijking: Kopen vs Huren vs Leasen
          </h2>

          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Alle belangrijke aspecten naast elkaar - zo maak je de juiste keuze voor jouw situatie
          </p>

          <div className="space-y-6">
            {detailedComparison.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="bg-yellow-500 text-gray-900 px-6 py-3">
                  <h3 className="text-xl font-bold">{item.aspect}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className={`rounded-lg p-4 ${item.winner === 'Kopen' ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50'}`}>
                      <p className="font-bold text-gray-900 mb-2">Kopen</p>
                      <p className="text-gray-700">{item.kopen}</p>
                    </div>
                    <div className={`rounded-lg p-4 ${item.winner === 'Huren/Leasen' || item.winner === 'Huren' ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50'}`}>
                      <p className="font-bold text-gray-900 mb-2">Huren</p>
                      <p className="text-gray-700">{item.huren}</p>
                    </div>
                    <div className={`rounded-lg p-4 ${item.winner === 'Huren/Leasen' ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50'}`}>
                      <p className="font-bold text-gray-900 mb-2">Leasen</p>
                      <p className="text-gray-700">{item.leasen}</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Winnaar: {item.winner}</strong> - {item.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Calculations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Realistische Scenario's: Totaalkosten over 15 Jaar
          </h2>

          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Concrete berekeningen voor SMILE5 (5 kWh) systeem - meest gekozen batterij
          </p>

          <div className="space-y-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className={`px-6 py-4 ${
                  scenario.color === 'green' ? 'bg-green-500 text-white' :
                  scenario.color === 'blue' ? 'bg-blue-500 text-white' :
                  scenario.color === 'orange' ? 'bg-orange-500 text-white' :
                  'bg-yellow-500 text-gray-900'
                }`}>
                  <h3 className="text-2xl font-bold">{scenario.title}</h3>
                  <p className="text-sm opacity-90">{scenario.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Kosten & Besparing:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Investering:</strong> {scenario.investment}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Maandlast:</strong> {scenario.monthlyPayment}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Jaarlijkse besparing:</strong> {scenario.yearlySavings}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Terugverdientijd:</strong> {scenario.paybackPeriod}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">15 Jaar Totaalbeeld:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Totale kosten:</strong> {scenario.totalCost15Years}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Totale besparing:</strong> {scenario.totalSavings15Years}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Netto resultaat:</strong> <span className={
                            scenario.netProfit15Years.startsWith('+') ? 'text-green-600 font-bold' : 'text-red-600 font-bold'
                          }>{scenario.netProfit15Years}</span></span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Eigendom:</strong> {scenario.ownership}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`rounded-lg p-6 ${
                    scenario.color === 'green' ? 'bg-green-50 border-2 border-green-500' :
                    scenario.color === 'blue' ? 'bg-blue-50 border-2 border-blue-500' :
                    scenario.color === 'orange' ? 'bg-orange-50 border-2 border-orange-500' :
                    'bg-yellow-50 border-2 border-yellow-500'
                  }`}>
                    <p className="text-gray-900">
                      <strong>Conclusie:</strong> {scenario.verdict}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situation-Based Advice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Advies op Basis van Jouw Situatie
          </h2>

          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Welke optie past het beste bij jouw financiële situatie en woonsituatie?
          </p>

          <div className="space-y-6">
            {situationAdvice.map((situation, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{situation.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-bold text-yellow-600 mb-2">Aanbeveling:</p>
                    <p className="text-gray-900 font-semibold">{situation.recommendation}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-bold text-gray-900 mb-2">Waarom:</p>
                    <p className="text-gray-700 mb-3">{situation.reason}</p>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-sm text-gray-600">
                        <strong>Berekening:</strong> {situation.calculation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Costs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Verborgen Kosten & Transparantie
          </h2>

          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Let op deze extra kosten die vaak vergeten worden in de vergelijking
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hiddenCosts.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.type}</h3>
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-600 mb-2">Zichtbare kosten:</p>
                  <p className="text-gray-900 font-semibold">{item.visible}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-600 mb-2">Vaak vergeten kosten:</p>
                  <ul className="space-y-1">
                    {item.hidden.map((cost, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <AlertCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded p-4 mb-4">
                  <p className="text-sm font-bold text-gray-900 mb-1">Werkelijke totaalkosten:</p>
                  <p className="text-gray-700">{item.total}</p>
                </div>
                <div className="text-sm text-gray-600 italic">
                  {item.transparency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wil Je Weten Wat voor Jouw Situatie het Beste is?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij berekenen gratis en vrijblijvend wat kopen, huren of leasen voor jou betekent. Inclusief alle kosten en besparingen over 15 jaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Online Berekenen
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen: Kopen of Huren
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Meer Informatie over Thuisbatterijen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/thuisbatterijen"
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <ShoppingCart className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AlphaESS Modellen</h3>
              <p className="text-sm text-gray-600 mb-3">Alle batterijen te koop</p>
              <p className="text-yellow-600 font-bold">Bekijk Aanbod →</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terugverdientijd</h3>
              <p className="text-sm text-gray-600 mb-3">ROI berekening</p>
              <p className="text-yellow-600 font-bold">5-12 jaar ROI</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-alphaess-vs-concurrenten"
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <CheckCircle className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Merkenvergelijking</h3>
              <p className="text-sm text-gray-600 mb-3">AlphaESS vs Tesla etc</p>
              <p className="text-yellow-600 font-bold">Vergelijk Merken →</p>
            </Link>

            <Link
              to="/besparingcalculator"
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Calculator className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Besparing Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Bereken jouw ROI</p>
              <p className="text-yellow-600 font-bold">Start Calculator →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kopen = €11.000+ Voordeliger. Begin Vandaag met Besparen!
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Profiteer van 0% BTW en word direct eigenaar. Lagste totaalkosten en hoogste rendement. Gratis offerte binnen 24 uur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Offerte Aanvragen
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Online Berekenen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijKopenOfHurenPage;
