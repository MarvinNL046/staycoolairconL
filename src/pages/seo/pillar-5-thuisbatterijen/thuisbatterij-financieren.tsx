import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, CheckCircle, CreditCard, FileText, Calculator, Phone, TrendingUp, AlertCircle, Award, PiggyBank } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import HowToSchema from '../../../components/SEO/HowToSchema';

const ThuisbatterijFinancierenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Financieren' }
  ];

  const usps = [
    {
      icon: <CreditCard className="h-12 w-12 text-yellow-500" />,
      title: "Vanaf €50/Maand",
      description: "Betaal in termijnen, bespaar direct op energierekening"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "Energielening 0,5%",
      description: "Nationale Hypotheek Garantie energielening met lage rente"
    },
    {
      icon: <PiggyBank className="h-12 w-12 text-yellow-500" />,
      title: "Lease Opties",
      description: "Operational lease vanaf €95/maand met all-in service"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-500" />,
      title: "Subsidies Achteraf",
      description: "Ontvang ISDE + gemeente subsidies na installatie terug"
    }
  ];

  const financingOptions = [
    {
      name: "Energielening NHG",
      monthlyPayment: "€50 - €80/maand",
      interest: "0,5% - 2,5%",
      duration: "60-180 maanden",
      totalCost: "Laagste totaalkosten",
      advantages: [
        "Zeer lage rente door overheidsgarantie",
        "Tot €25.000 financieren voor energiebesparende maatregelen",
        "Lange looptijd tot 15 jaar mogelijk",
        "Rente fiscaal aftrekbaar bij eigenwoningschuld",
        "Combineer met subsidies (ISDE, gemeente)"
      ],
      disadvantages: [
        "Aanvraag via hypotheekverstrekker (administratie)",
        "Eigenwoningschuld moet lager zijn dan WOZ-waarde",
        "Beperkt beschikbaar voor huurwoningen"
      ],
      bestFor: "Eigenaren met hypotheek die laagste totaalkosten willen"
    },
    {
      name: "Consumptief Krediet",
      monthlyPayment: "€60 - €120/maand",
      interest: "4,5% - 7,5%",
      duration: "24-120 maanden",
      totalCost: "Gemiddelde totaalkosten",
      advantages: [
        "Snelle aanvraag en goedkeuring (binnen 24 uur)",
        "Geen onderpand nodig",
        "Flexibele aflossing mogelijk",
        "Ook voor huurders beschikbaar",
        "Combineer met subsidies"
      ],
      disadvantages: [
        "Hogere rente dan energielening (4,5-7,5%)",
        "Rente niet fiscaal aftrekbaar",
        "BKR-registratie beïnvloedt kredietwaardigheid"
      ],
      bestFor: "Wie snel wil starten zonder complexe aanvraag"
    },
    {
      name: "Operational Lease",
      monthlyPayment: "€95 - €180/maand",
      interest: "Geen eigendom",
      duration: "60-120 maanden all-in",
      totalCost: "Hogere totaalkosten, maar zorgeloos",
      advantages: [
        "All-in: installatie, onderhoud, verzekering, garantie inbegrepen",
        "Geen investering vooraf, spreid kosten over tijd",
        "Batterij blijft eigendom leasemaatschappij (geen risico)",
        "Na afloop: nieuwe batterij of afkopen",
        "Voor zakelijk gebruik: maandelijkse kosten aftrekbaar"
      ],
      disadvantages: [
        "Hogere totaalkosten dan kopen + financieren",
        "Geen eigendom: batterij niet van u",
        "Vaak minimale looptijd 5 jaar verplicht",
        "Subsidies gaan naar leasemaatschappij"
      ],
      bestFor: "Wie zorgeloos wil en geen investering vooraf wil doen"
    },
    {
      name: "Particuliere Betaalregeling",
      monthlyPayment: "€150 - €300/maand",
      interest: "0% - 3%",
      duration: "12-36 maanden",
      totalCost: "Laag tot gemiddeld",
      advantages: [
        "Geen of zeer lage rente (vaak 0-3%)",
        "Directe afspraak met installateur (wij regelen)",
        "Flexibele afspraken mogelijk",
        "Geen BKR-registratie bij lage bedragen",
        "Snelle goedkeuring"
      ],
      disadvantages: [
        "Kortere looptijd (1-3 jaar)",
        "Hogere maandlasten door korte looptijd",
        "Vaak alleen voor kleinere bedragen (<€10.000)",
        "Beperkte totaallooptijd"
      ],
      bestFor: "Wie op korte termijn wil aflossen zonder externe financier"
    }
  ];

  const calculationExamples = [
    {
      scenario: "SMILE-B3 (2,9 kWh) met Energielening",
      investmentGross: "€5.500",
      btwDiscount: "-€955 (0% BTW)",
      investmentNet: "€4.545",
      isdeSubsidy: "€1.740 (later terugontvangen)",
      gemeenteSubsidy: "€750 (later terugontvangen)",
      financedAmount: "€4.545",
      duration: "84 maanden (7 jaar)",
      interest: "1,5%",
      monthlyPayment: "€58/maand",
      totalInterest: "€327",
      totalPaid: "€4.872",
      subsidiesReceived: "€2.490",
      netInvestment: "€2.382",
      monthlySavings: "€40-60",
      conclusion: "Positieve cashflow: maandelijks saldo +/-€0"
    },
    {
      scenario: "SMILE5 (5 kWh) met Consumptief Krediet",
      investmentGross: "€7.000",
      btwDiscount: "-€1.215 (0% BTW)",
      investmentNet: "€5.785",
      isdeSubsidy: "€1.740 (later terugontvangen)",
      gemeenteSubsidy: "€1.000 (later terugontvangen)",
      financedAmount: "€5.785",
      duration: "72 maanden (6 jaar)",
      interest: "5,5%",
      monthlyPayment: "€95/maand",
      totalInterest: "€1.055",
      totalPaid: "€6.840",
      subsidiesReceived: "€2.740",
      netInvestment: "€4.100",
      monthlySavings: "€60-90",
      conclusion: "Kleine positieve cashflow: maandelijks saldo +/-€0"
    },
    {
      scenario: "SMILE5 (10 kWh) met Operational Lease",
      investmentGross: "€9.000",
      btwDiscount: "Inbegrepen in lease",
      investmentNet: "Geen voorinvestering",
      isdeSubsidy: "Naar leasemaatschappij",
      gemeenteSubsidy: "Naar leasemaatschappij",
      financedAmount: "All-in lease",
      duration: "84 maanden (7 jaar)",
      interest: "N.v.t.",
      monthlyPayment: "€145/maand all-in",
      totalInterest: "N.v.t.",
      totalPaid: "€12.180",
      subsidiesReceived: "€0 (naar leasemaatschappij)",
      netInvestment: "€12.180 totaal",
      monthlySavings: "€90-120",
      conclusion: "Negatieve cashflow: -€25-55/maand, maar zorgeloos"
    }
  ];

  const leasingDetails = {
    included: [
      "Installatie en inbedrijfstelling professioneel uitgevoerd",
      "Onderhoud en service gedurende looptijd inbegrepen",
      "Reparaties en eventuele vervanging van defecte onderdelen",
      "Verzekering tegen schade, diefstal en technische defecten",
      "Monitoring en software-updates op afstand",
      "10 jaar fabrieksgarantie AlphaESS doorlopend",
      "Helpdesk en storingsdienst 24/7 bereikbaar"
    ],
    endOfContract: [
      "Optie 1: Afkopen tegen restwaarde (meestal 10-20% aanschafprijs)",
      "Optie 2: Inruilen en upgraden naar nieuwere batterij",
      "Optie 3: Contract verlengen tegen lagere maandelijkse kosten",
      "Optie 4: Batterij laten verwijderen (meestal zonder kosten)"
    ]
  };

  const comparisonTable = [
    {
      aspect: "Voorinvestering",
      energielening: "€0 (100% gefinancierd)",
      krediet: "€0 (100% gefinancierd)",
      lease: "€0 (geen voorinvestering)",
      betaalregeling: "€0-€1.000"
    },
    {
      aspect: "Maandlasten SMILE-B3",
      energielening: "€50-60/maand",
      krediet: "€65-80/maand",
      lease: "€95-120/maand",
      betaalregeling: "€150-200/maand"
    },
    {
      aspect: "Rentepercentage",
      energielening: "0,5% - 2,5%",
      krediet: "4,5% - 7,5%",
      lease: "N.v.t. (all-in)",
      betaalregeling: "0% - 3%"
    },
    {
      aspect: "Looptijd",
      energielening: "5-15 jaar",
      krediet: "2-10 jaar",
      lease: "5-10 jaar",
      betaalregeling: "1-3 jaar"
    },
    {
      aspect: "Totaalkosten laagst",
      energielening: "✓✓✓ Beste",
      krediet: "✓✓ Goed",
      lease: "✓ Duurder",
      betaalregeling: "✓✓ Goed"
    },
    {
      aspect: "Snelheid aanvraag",
      energielening: "2-4 weken",
      krediet: "1-2 dagen",
      lease: "1 week",
      betaalregeling: "Direct"
    },
    {
      aspect: "Onderhoud inbegrepen",
      energielening: "Nee (zelf)",
      krediet: "Nee (zelf)",
      lease: "Ja (all-in)",
      betaalregeling: "Nee (zelf)"
    },
    {
      aspect: "Subsidies",
      energielening: "Voor u (terug)",
      krediet: "Voor u (terug)",
      lease: "Leasemij.",
      betaalregeling: "Voor u (terug)"
    }
  ];

  const faqs = [
    {
      question: "Wat is de goedkoopste manier om een thuisbatterij te financieren?",
      answer: "De Energielening NHG is de goedkoopste optie met rentepercentages van 0,5-2,5% en looptijden tot 15 jaar. Voor SMILE-B3 betaalt u €50-60/maand bij 7 jaar looptijd. Totale rentekosten blijven onder €500. Daarnaast zijn ISDE en gemeentelijke subsidies (tot €3.240) volledig voor u, waardoor uw netto investering zeer laag uitvalt. Nadeel: aanvraag via hypotheekverstrekker duurt 2-4 weken."
    },
    {
      question: "Kan ik subsidies combineren met financiering?",
      answer: "Ja, absoluut! U financiert eerst de volledige aanschafprijs (minus BTW-voordeel). Na installatie ontvangt u ISDE subsidie (€1.740) en gemeentelijke subsidie (€750-€2.000) terug, die u kunt gebruiken om extra af te lossen of als buffer. Bij energielening en consumptief krediet blijven subsidies volledig voor u. Bij operational lease gaan subsidies naar de leasemaatschappij (zit verwerkt in leasetarief)."
    },
    {
      question: "Wat zijn de maandlasten voor SMILE5 (5 kWh) batterij?",
      answer: "SMILE5 (5 kWh) kost €7.000, na 0% BTW €5.785. Bij energielening (1,5%, 7 jaar): €75/maand. Bij consumptief krediet (5,5%, 6 jaar): €95/maand. Bij operational lease (7 jaar all-in): €110-130/maand. Bij particuliere betaalregeling (0%, 3 jaar): €195/maand. Uw maandelijkse energiebesparing: €60-90. Bij energielening en krediet ontvangt u later €2.740 subsidies terug, waardoor uw netto investering €3.045-4.100 bedraagt."
    },
    {
      question: "Is operational lease interessant voor particulieren?",
      answer: "Operational lease is interessant als u zorgeloos wilt zijn en geen voorinvestering wilt doen. Maandelijkse kosten zijn hoger (€95-180/maand), maar onderhoud, reparaties, verzekering en garantie zijn volledig inbegrepen. Na 5-10 jaar kunt u de batterij afkopen (10-20% restwaarde) of inruilen voor nieuwere versie. Nadeel: subsidies gaan naar leasemaatschappij en totaalkosten zijn 30-40% hoger. Voor particulieren is kopen + energielening meestal voordeliger."
    },
    {
      question: "Hoe lang duurt goedkeuring van financieringsaanvraag?",
      answer: "Energielening NHG: 2-4 weken (via hypotheekverstrekker, uitgebreide toetsing). Consumptief krediet: 1-2 dagen (online aanvraag, snelle BKR-check). Operational lease: 1 week (kredietwaardigheid + eigendomscheck). Particuliere betaalregeling StayCool: direct (geen externe financier). Voor snelle start adviseren wij consumptief krediet of betaalregeling. Voor laagste kosten: energielening, maar plan 4-6 weken voor aanvraag + installatie."
    },
    {
      question: "Wat gebeurt er als ik mijn maandelijkse besparing wil maximaliseren?",
      answer: "Voor maximale maandelijkse cashflow: kies energielening met lange looptijd (12-15 jaar) en lage rente (0,5-1,5%). SMILE-B3 voorbeeld: €4.545 financieren over 12 jaar = €35-40/maand. Uw maandelijkse energiebesparing: €40-60. Resultaat: positieve cashflow vanaf dag 1. Na 6-12 maanden ontvangt u €2.490 subsidies terug, waarmee u extra kunt aflossen. Totale terugverdientijd inclusief financieringskosten: 8-10 jaar."
    },
    {
      question: "Kan ik als huurder ook financieren?",
      answer: "Ja, als huurder kunt u consumptief krediet of particuliere betaalregeling gebruiken. Energielening NHG is meestal niet beschikbaar zonder eigenwoningschuld. Operational lease is beperkt mogelijk (afhankelijk van toestemming verhuurder en eigendomsstructuur). Let op: bij huurwoning heeft u schriftelijke toestemming verhuurder nodig voor installatie thuisbatterij. Subsidies (ISDE, gemeente) zijn wel beschikbaar voor huurders met toestemming verhuurder."
    },
    {
      question: "Wat zijn de voor- en nadelen van aflossen met subsidiegeld?",
      answer: "Voordelen extra aflossen met subsidiegeld: lagere rentekosten (bespaar €200-500), kortere looptijd (1-2 jaar eerder aflost), snellere terugverdientijd. Nadelen: geen liquiditeitsbuffer meer, geen flexibiliteit voor andere investeringen. Advies: bij hoge rente (&gt;%) extra aflossen. Bij lage rente (&lt;2%) subsidiegeld beter op spaarrekening (3-4% rente) of extra zonnepanelen. Wij adviseren persoonlijk op basis van uw situatie."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Gratis Adviesgesprek",
      description: "Wij bespreken uw situatie en wensen. Welke batterij past bij u? Welke financieringsvorm is meest voordelig? Wij berekenen totaalkosten en maandlasten."
    },
    {
      number: 2,
      title: "Financieringsopties Vergelijken",
      description: "U ontvangt gedetailleerd overzicht van energielening, consumptief krediet, lease en betaalregeling met exacte maandlasten, rentekosten en totaalkosten."
    },
    {
      number: 3,
      title: "Financiering Aanvragen",
      description: "Wij helpen met aanvraag bij financier of regelen particuliere betaalregeling. Bij energielening: aanvraag via hypotheekverstrekker. Bij krediet: online aanvraag met begeleiding."
    },
    {
      number: 4,
      title: "Goedkeuring & Planning",
      description: "Na goedkeuring (1 dag - 4 weken) plannen we installatie. U betaalt pas na installatie, of in termijnen volgens betaalregeling."
    },
    {
      number: 5,
      title: "Subsidieaanvraag & Installatie",
      description: "Wij dienen subsidies in en installeren batterij. Na oplevering start maandelijkse betaling. U bespaart direct op energierekening."
    },
    {
      number: 6,
      title: "Subsidies Ontvangen & Aflossen",
      description: "Na 6-12 maanden ontvangt u ISDE + gemeente subsidies (€2.490-€3.240). U kunt hiermee extra aflossen of als buffer houden."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Financieren Limburg | Vanaf €50/Maand | StayCool Airco"
        description="Thuisbatterij financieren ✓ Vanaf €50/maand ✓ Energielening 0,5% ✓ Consumptief krediet ✓ Lease opties ✓ Subsidies achteraf ✓ Gratis advies!"
      />

      <SchemaMarkup
        type="FAQPage"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />

      <FAQSchema faqs={faqs} />

      <HowToSchema
        name="Thuisbatterij Financieren: 6 Stappen naar Uw Gefinancierde Batterij"
        description="Van gratis adviesgesprek tot subsidies ontvangen: het complete proces om uw thuisbatterij te financieren."
        totalTime="PT720H"
        steps={steps.map(step => ({
          name: step.title,
          text: step.description
        }))}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Financieren: Betaal Vanaf €50/Maand
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Kies uit energielening (0,5%), consumptief krediet, operational lease of betaalregeling. Bespaar direct op energierekening en ontvang subsidies later terug!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Financieringsadvies
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Maandlasten
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Positieve Cashflow Mogelijk</p>
                <p className="text-sm">
                  Bij energielening met lange looptijd kunt u maandelijks meer besparen dan u aflost. Direct voordeel!
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
              Flexibele Financieringsmogelijkheden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Voor elk budget en elke situatie een passende oplossing
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

      {/* Financing Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            4 Financieringsopties Vergeleken
          </h2>

          <div className="space-y-8">
            {financingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-800">Maandlast</p>
                      <p className="font-bold text-gray-900">{option.monthlyPayment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">Rente</p>
                      <p className="font-bold text-gray-900">{option.interest}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">Looptijd</p>
                      <p className="font-bold text-gray-900">{option.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">Totaalkosten</p>
                      <p className="font-bold text-gray-900">{option.totalCost}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Voordelen
                      </h4>
                      <ul className="space-y-2">
                        {option.advantages.map((adv, advIndex) => (
                          <li key={advIndex} className="flex items-start text-sm text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                        Nadelen
                      </h4>
                      <ul className="space-y-2">
                        {option.disadvantages.map((dis, disIndex) => (
                          <li key={disIndex} className="flex items-start text-sm text-gray-600">
                            <span className="text-orange-500 mr-2">−</span>
                            {dis}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700">
                      <strong>Best voor:</strong> {option.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation Examples Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Rekenvoorbeelden: Totale Kosten en Cashflow
          </h2>

          <div className="space-y-8">
            {calculationExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{example.scenario}</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2 space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Adviesprijs incl. BTW:</span>
                      <span className="font-bold text-gray-900">{example.investmentGross}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">BTW-voordeel (0%):</span>
                      <span className="font-bold text-green-600">{example.btwDiscount}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-400">
                      <span className="text-gray-900 font-bold">Te financieren bedrag:</span>
                      <span className="font-bold text-gray-900">{example.investmentNet}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 text-sm">ISDE subsidie (later terug):</span>
                      <span className="text-green-600 text-sm">{example.isdeSubsidy}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600 text-sm">Gemeente subsidie (later terug):</span>
                      <span className="text-green-600 text-sm">{example.gemeenteSubsidy}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Looptijd:</span>
                      <span className="font-semibold text-gray-900">{example.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Rente:</span>
                      <span className="font-semibold text-gray-900">{example.interest}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Totaal rentekosten:</span>
                      <span className="font-semibold text-orange-600">{example.totalInterest}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-400">
                      <span className="text-gray-900 font-bold">Totaal betaald:</span>
                      <span className="font-bold text-gray-900">{example.totalPaid}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Subsidies terugontvangen:</span>
                      <span className="font-bold text-green-600">{example.subsidiesReceived}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-6 flex flex-col justify-center">
                    <div className="text-center mb-4">
                      <p className="text-gray-700 mb-2">Maandlast:</p>
                      <p className="text-4xl font-bold text-gray-900 mb-4">{example.monthlyPayment}</p>
                    </div>
                    <div className="border-t-2 border-yellow-400 pt-4 mb-4">
                      <p className="text-gray-700 text-center mb-2">Netto investering:</p>
                      <p className="text-2xl font-bold text-gray-900 text-center mb-1">{example.netInvestment}</p>
                      <p className="text-sm text-gray-600 text-center">(na subsidies)</p>
                    </div>
                    <div className="border-t-2 border-yellow-400 pt-4">
                      <p className="text-gray-700 text-center mb-2">Maandelijkse besparing:</p>
                      <p className="text-xl font-bold text-green-600 text-center mb-2">{example.monthlySavings}</p>
                      <p className="text-sm font-bold text-gray-900 text-center bg-white rounded p-2">{example.conclusion}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Vergelijkingstabel Financieringsopties
          </h2>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-yellow-500 text-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Aspect</th>
                    <th className="px-6 py-4 text-left font-bold">Energielening</th>
                    <th className="px-6 py-4 text-left font-bold">Krediet</th>
                    <th className="px-6 py-4 text-left font-bold">Lease</th>
                    <th className="px-6 py-4 text-left font-bold">Betaalregeling</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.aspect}</td>
                      <td className="px-6 py-4 text-gray-700">{row.energielening}</td>
                      <td className="px-6 py-4 text-gray-700">{row.krediet}</td>
                      <td className="px-6 py-4 text-gray-700">{row.lease}</td>
                      <td className="px-6 py-4 text-gray-700">{row.betaalregeling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Leasing Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Operational Lease: Wat is Inbegrepen?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-yellow-500 mr-3" />
                Inbegrepen in Maandtarief
              </h3>
              <ul className="space-y-3">
                {leasingDetails.included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-yellow-500 mr-3" />
                Einde Contractperiode
              </h3>
              <ul className="space-y-3">
                {leasingDetails.endOfContract.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold text-yellow-600 mr-3">{index + 1}.</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lease of Kopen: Wat is Slimmer?</h3>
            <p className="text-gray-700 mb-3">
              <strong>Lease:</strong> Totaalkosten 30-40% hoger, maar zorgeloos en geen voorinvestering. Geschikt voor wie zekerheid wil over onderhoud en reparaties.
            </p>
            <p className="text-gray-700">
              <strong>Kopen + financieren:</strong> Totaalkosten 30-40% lager, subsidies voor u, maar u draagt risico van onderhoud na garantieperiode. Geschikt voor wie optimale totaalkosten wil.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            In 6 Stappen naar Uw Gefinancierde Thuisbatterij
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start bg-white rounded-lg p-6 shadow-md">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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
            Gratis Financieringsadvies op Maat
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij berekenen voor uw situatie de meest voordelige financieringsvorm met exacte maandlasten en totaalkosten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Aanvragen Adviesgesprek
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen Financieren
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
            Meer Financiële Informatie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-2026"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Subsidie 2026</h3>
              <p className="text-gray-600 mb-4">
                ISDE €1.740 + gemeente tot €2.000. Wij regelen aanvraag.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-besparing-berekenen"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Calculator className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Besparing Berekenen</h3>
              <p className="text-gray-600 mb-4">
                Bereken uw maandelijkse energiebesparing met voorbeelden.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-btw-teruggave"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <FileText className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BTW Teruggave</h3>
              <p className="text-gray-600 mb-4">
                0% BTW-tarief: direct 21% korting op aanschafprijs.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Direct met Financiering
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Geen voorinvestering nodig. Begin met besparen en betaal in termijnen. Wij begeleiden u van A tot Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Maandlasten
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Award className="h-6 w-6 mr-2" />
              Bekijk AlphaESS Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijFinancierenPage;
