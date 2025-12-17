import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, TrendingUp, Zap, Euro, Phone, AlertCircle, Award, Home, Battery } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijBesparingBerekenenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Besparing Berekenen' }
  ];

  const usps = [
    {
      icon: <Calculator className="h-12 w-12 text-yellow-500" />,
      title: "Jaarlijkse Besparing",
      description: "€500-€1.200/jaar afhankelijk van gebruik en capaciteit"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "Terugverdientijd",
      description: "8-12 jaar met subsidies en 0% BTW"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Piek/Dal Besparing",
      description: "€0,15-0,25/kWh verschil tussen opslag en inkoop"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "Onafhankelijkheid",
      description: "70-85% zelfvoorzienend met batterij + zonnepanelen"
    }
  ];

  const calculationFactors = [
    {
      factor: "1. Uw Stroomverbruik",
      description: "Jaarlijks verbruik kWh en verdeling dag/nacht",
      impact: "Hoog verbruik = hogere besparing",
      typical: "Gemiddeld huishouden: 3.000-4.000 kWh/jaar",
      details: "Meet uw verbruik via slimme meter of jaarafrekening. Let op piekmomenten (ochtend/avond) vs. daluren (nacht/middag). Hoe meer verbruik 's avonds/nacht, hoe meer besparing met batterij."
    },
    {
      factor: "2. Zonnepanelenopbrengst",
      description: "kWh productie zonnepanelen per jaar",
      impact: "Hogere opbrengst = meer op te slaan",
      typical: "10 panelen (4 kWp): 3.500-4.000 kWh/jaar",
      details: "Zonnepanelen produceren overdag, verbruik is vooral 's avonds. Zonder batterij: teruglevering tegen lage prijs. Met batterij: zelf gebruiken 's avonds tegen hoge prijs."
    },
    {
      factor: "3. Energietarieven",
      description: "Inkoop- en teruglevertarief per kWh",
      impact: "Groter verschil = hogere besparing",
      typical: "Inkoop €0,30-0,40/kWh, teruglevering €0,05-0,10/kWh",
      details: "Met dynamisch contract (Tibber, ANWB Energie, Frank Energie): koop goedkoop 's nachts (€0,05-0,15/kWh), gebruik batterij 's avonds (€0,30-0,50/kWh). Besparing: €0,15-0,35/kWh."
    },
    {
      factor: "4. Zelfconsumptie zonder Batterij",
      description: "Percentage zonne-energie direct gebruikt",
      impact: "Lage zelfconsumptie = meer besparing met batterij",
      typical: "Zonder batterij: 30-40%, met batterij: 70-85%",
      details: "Zonder batterij gebruikt u alleen zonne-energie als u thuis bent overdag. Met batterij slaat u overschot op en gebruikt u 's avonds/nacht. Zelfconsumptie stijgt van 35% naar 75%."
    },
    {
      factor: "5. Batterijcapaciteit",
      description: "kWh opslagcapaciteit thuisbatterij",
      impact: "Grotere batterij = meer besparing tot optimum",
      typical: "3-5 kWh: €500-700/jaar, 10 kWh: €800-1.200/jaar",
      details: "SMILE-B3 (2,9 kWh): klein huishouden €500-650/jaar. SMILE5 (5-10 kWh): gemiddeld huishouden €700-1.000/jaar. SMILE-T10 (10 kWh 3-fase): groot huishouden €1.000-1.200/jaar."
    },
    {
      factor: "6. Saldering 2027",
      description: "Einde saldering verhoogt waarde batterij",
      impact: "Na 2027: 30-50% meer besparing met batterij",
      typical: "Saldering eindigt volledig in 2027",
      details: "Tot 2027: teruglevering nog deels gecompenseerd via saldering. Na 2027: teruglevering tegen marktprijs (€0,05-0,10/kWh). Batterij wordt essentieel voor optimale besparing."
    }
  ];

  const scenarioComparisons = [
    {
      household: "Klein Huishouden (2 personen)",
      consumption: "2.500 kWh/jaar",
      solarProduction: "3.000 kWh/jaar (8 panelen, 3 kWp)",
      battery: "SMILE-B3 (2,9 kWh)",
      withoutBattery: {
        directUse: "900 kWh (30% zelfconsumptie)",
        feedIn: "2.100 kWh teruglevering",
        purchased: "1.600 kWh inkoop",
        directSavings: "€270 (900 × €0,30)",
        feedInRevenue: "€158 (2.100 × €0,075)",
        purchaseCost: "-€480 (1.600 × €0,30)",
        netCost: "€52 netto kosten"
      },
      withBattery: {
        directUse: "900 kWh direct",
        batteryUse: "1.100 kWh via batterij",
        feedIn: "1.000 kWh teruglevering",
        purchased: "500 kWh inkoop",
        selfConsumption: "80% (2.000 / 2.500)",
        savings: "€600 (2.000 × €0,30)",
        feedInRevenue: "€75 (1.000 × €0,075)",
        purchaseCost: "-€150 (500 × €0,30)",
        netBenefit: "€525 netto voordeel",
        yearlyGain: "€577 extra besparing vs. zonder batterij"
      }
    },
    {
      household: "Gemiddeld Huishouden (3-4 personen)",
      consumption: "3.500 kWh/jaar",
      solarProduction: "4.000 kWh/jaar (10 panelen, 4 kWp)",
      battery: "SMILE5 (5 kWh basis)",
      withoutBattery: {
        directUse: "1.200 kWh (30% zelfconsumptie)",
        feedIn: "2.800 kWh teruglevering",
        purchased: "2.300 kWh inkoop",
        directSavings: "€360 (1.200 × €0,30)",
        feedInRevenue: "€210 (2.800 × €0,075)",
        purchaseCost: "-€690 (2.300 × €0,30)",
        netCost: "€120 netto kosten"
      },
      withBattery: {
        directUse: "1.200 kWh direct",
        batteryUse: "1.800 kWh via batterij",
        feedIn: "1.000 kWh teruglevering",
        purchased: "500 kWh inkoop",
        selfConsumption: "86% (3.000 / 3.500)",
        savings: "€900 (3.000 × €0,30)",
        feedInRevenue: "€75 (1.000 × €0,075)",
        purchaseCost: "-€150 (500 × €0,30)",
        netBenefit: "€825 netto voordeel",
        yearlyGain: "€945 extra besparing vs. zonder batterij"
      }
    },
    {
      household: "Groot Huishouden (5+ personen)",
      consumption: "5.000 kWh/jaar",
      solarProduction: "5.000 kWh/jaar (14 panelen, 5,5 kWp)",
      battery: "SMILE5 (10 kWh uitgebreid)",
      withoutBattery: {
        directUse: "1.500 kWh (30% zelfconsumptie)",
        feedIn: "3.500 kWh teruglevering",
        purchased: "3.500 kWh inkoop",
        directSavings: "€450 (1.500 × €0,30)",
        feedInRevenue: "€263 (3.500 × €0,075)",
        purchaseCost: "-€1.050 (3.500 × €0,30)",
        netCost: "€337 netto kosten"
      },
      withBattery: {
        directUse: "1.500 kWh direct",
        batteryUse: "2.700 kWh via batterij",
        feedIn: "800 kWh teruglevering",
        purchased: "800 kWh inkoop",
        selfConsumption: "84% (4.200 / 5.000)",
        savings: "€1.260 (4.200 × €0,30)",
        feedInRevenue: "€60 (800 × €0,075)",
        purchaseCost: "-€240 (800 × €0,30)",
        netBenefit: "€1.080 netto voordeel",
        yearlyGain: "€1.417 extra besparing vs. zonder batterij"
      }
    }
  ];

  const dynamicPricingExample = {
    scenario: "Dynamisch Contract (Tibber, ANWB, Frank Energie)",
    strategy: "Laad batterij goedkoop 's nachts, gebruik 's avonds",
    nightRate: "€0,08/kWh (gemiddelde daluren)",
    eveningRate: "€0,35/kWh (gemiddelde piekuren)",
    difference: "€0,27/kWh voordeel",
    batteryCapacity: "5 kWh",
    dailyCycles: "1 cyclus/dag (5 kWh)",
    yearlyStorage: "1.825 kWh/jaar (5 × 365)",
    savings: "€493/jaar extra (1.825 × €0,27)",
    totalWithSolar: "€945 (zonnepanelen) + €493 (dynamisch) = €1.438/jaar"
  };

  const investmentCalculation = [
    {
      system: "SMILE-B3 (2,9 kWh)",
      price: "€5.500",
      btwDiscount: "-€955",
      isdeSubsidy: "-€1.740",
      gemeenteSubsidy: "-€750",
      netInvestment: "€2.055",
      yearlySavings: "€577",
      paybackYears: "3,6 jaar",
      savingsAfter10Years: "€5.770",
      netProfit10Years: "€3.715",
      roi10Years: "181%"
    },
    {
      system: "SMILE5 (5 kWh)",
      price: "€7.000",
      btwDiscount: "-€1.215",
      isdeSubsidy: "-€1.740",
      gemeenteSubsidy: "-€1.000",
      netInvestment: "€3.045",
      yearlySavings: "€945",
      paybackYears: "3,2 jaar",
      savingsAfter10Years: "€9.450",
      netProfit10Years: "€6.405",
      roi10Years: "210%"
    },
    {
      system: "SMILE5 (10 kWh)",
      price: "€9.000",
      btwDiscount: "-€1.562",
      isdeSubsidy: "-€1.740",
      gemeenteSubsidy: "-€1.500",
      netInvestment: "€4.198",
      yearlySavings: "€1.417",
      paybackYears: "3,0 jaar",
      savingsAfter10Years: "€14.170",
      netProfit10Years: "€9.972",
      roi10Years: "238%"
    }
  ];

  const faqs = [
    {
      question: "Hoeveel kan ik besparen met een thuisbatterij per jaar?",
      answer: "De jaarlijkse besparing hangt af van uw verbruik, zonnepanelenopbrengst en energietarieven. Klein huishouden (2 personen, SMILE-B3): €500-650/jaar. Gemiddeld huishouden (3-4 personen, SMILE5 5 kWh): €700-1.000/jaar. Groot huishouden (5+ personen, SMILE5 10 kWh): €1.000-1.400/jaar. Met dynamisch contract (piek/daluren) kunt u 20-40% extra besparen door slim laden en ontladen. Na einde saldering 2027 stijgt besparing met 30-50%."
    },
    {
      question: "Hoe bereken ik mijn eigen besparing?",
      answer: "Formule: Jaarlijkse besparing = (Batterijgebruik × Inkooptarief) - (Teruglevering × Teruglevertarief) - (Extra inkoop × Inkooptarief). Stap 1: Bepaal jaarverbruik (kWh) en zonnepanelenopbrengst. Stap 2: Bereken huidige zelfconsumptie zonder batterij (meestal 30-40%). Stap 3: Bereken zelfconsumptie met batterij (70-85%). Stap 4: Verschil × inkooptarief = besparing. Voorbeeld: 3.500 kWh verbruik, 4.000 kWh zonnepanelen, €0,30/kWh inkoop. Zonder batterij: 1.200 kWh zelf (34%). Met batterij: 3.000 kWh zelf (86%). Besparing: (3.000 - 1.200) × €0,30 = €540/jaar."
    },
    {
      question: "Wat is de terugverdientijd van een thuisbatterij?",
      answer: "Met subsidies en 0% BTW: 3-4 jaar terugverdientijd. SMILE-B3: 3,6 jaar (netto €2.055, besparing €577/jaar). SMILE5 (5 kWh): 3,2 jaar (netto €3.045, besparing €945/jaar). SMILE5 (10 kWh): 3,0 jaar (netto €4.198, besparing €1.417/jaar). Zonder subsidies: 8-12 jaar terugverdientijd. Na terugverdientijd: pure winst gedurende resterende levensduur (20-25 jaar AlphaESS garantie). Totale winst na 10 jaar: €3.715 tot €9.972 afhankelijk van systeem."
    },
    {
      question: "Hoe verandert de besparing na einde saldering in 2027?",
      answer: "Saldering eindigt volledig in 2027. Impact: teruglevering tegen marktprijs (€0,05-0,10/kWh) i.p.v. compensatie tegen inkooptarief (€0,30/kWh). Zonder batterij: verlies €0,20-0,25/kWh op teruggeleverde stroom. Met batterij: opslaan en zelf gebruiken, geen verlies. Verwachte besparingstijging: 30-50% extra waarde batterij. Voorbeeld: 2.000 kWh teruglevering zonder batterij = €100-200 opbrengst na 2027. Met batterij: 2.000 kWh zelf gebruiken = €600-800 waarde. Extra voordeel: €400-600/jaar. Thuisbatterij wordt essentieel na 2027."
    },
    {
      question: "Wat is het voordeel van dynamische energiecontracten met batterij?",
      answer: "Dynamische contracten (Tibber, ANWB Energie, Frank Energie) hebben per uur wisselende tarieven. Daluren (nacht, middag): €0,05-0,15/kWh. Piekuren (ochtend, avond): €0,30-0,60/kWh. Met batterij: laad goedkoop 's nachts, gebruik 's avonds. Besparing: €0,15-0,35/kWh verschil. Voorbeeld 5 kWh batterij: 1 cyclus/dag = 1.825 kWh/jaar. Voordeel: 1.825 × €0,27 = €493/jaar extra bovenop zonnepanelenbesparing. Totaal: €945 (zonnepanelen) + €493 (dynamisch) = €1.438/jaar. Let op: vereist slimme sturing en monitoring."
    },
    {
      question: "Hoe lang gaat een thuisbatterij mee en wat zijn de kosten?",
      answer: "AlphaESS thuisbatterijen: 10 jaar fabrieksgarantie, 20-25 jaar verwachte levensduur. Degradatie: 80% capaciteit na 6.000 cycli (16+ jaar dagelijks gebruik). Onderhoudskosten: minimaal, geen jaarlijkse service nodig. Kosten na garantie: eventuele reparaties €200-800. Totale kosten 25 jaar: netto investering + onderhoudskosten (€2.055-4.198 + €500-1.500) = €2.555-5.698. Totale besparing 25 jaar: €14.425-35.425 (€577-1.417/jaar × 25). Netto winst 25 jaar: €8.727-29.727. Conclusie: thuisbatterij loont financieel ruimschoots."
    },
    {
      question: "Kan ik besparen met een batterij als ik geen zonnepanelen heb?",
      answer: "Ja, ook zonder zonnepanelen kunt u besparen met dynamisch contract. Strategie: laad batterij 's nachts (€0,05-0,15/kWh), gebruik 's avonds (€0,30-0,50/kWh). Besparing: €0,15-0,35/kWh. Voorbeeld 5 kWh batterij: 1 cyclus/dag = 1.825 kWh/jaar × €0,27 = €493/jaar. Let op: zonder zonnepanelen geen 0% BTW (wel 21% BTW) en geen ISDE subsidie. Netto investering: €7.000 (incl. BTW) minus gemeentesubsidie €1.000 = €6.000. Terugverdientijd: 12 jaar. Met zonnepanelen: terugverdientijd 3-4 jaar. Advies: combineer batterij met zonnepanelen voor optimale besparing."
    },
    {
      question: "Wat zijn de beste tarieven om te kiezen voor maximale besparing?",
      answer: "Beste tarieven met thuisbatterij + zonnepanelen: Dynamisch contract (Tibber, ANWB Energie, Frank Energie) voor maximale piek/dal-besparing. Inkoop: €0,05-0,60/kWh variabel. Teruglevering: marktprijs €0,05-0,10/kWh. Vast contract: minder flexibiliteit, maar zekerheid. Inkoop: €0,28-0,35/kWh vast. Teruglevering: €0,08-0,12/kWh. Advies: dynamisch contract voor huishoudens met thuisbatterij en flexibel verbruik. Vereisten: slimme meter, monitoring-app, bereidheid om vraag/aanbod te volgen. Extra besparing: €300-600/jaar vs. vast contract. Risico: prijspieken bij schaarste (winter), maar batterij dempt dit."
    }
  ];

  const tips = [
    "Meet uw huidige verbruik via slimme meter of jaarafrekening energieleverancier",
    "Bepaal uw zonnepanelenopbrengst met productiegegevens of schattingen (www.zonneplan.nl)",
    "Check actuele energietarieven en verschil inkoop vs. teruglevering",
    "Bereken zelfconsumptie zonder batterij (meestal 30-40%)",
    "Kies batterijcapaciteit passend bij uw verbruiksprofiel (niet te groot, niet te klein)",
    "Overweeg dynamisch energiecontract voor extra besparing met slimme sturing",
    "Reken subsidies en BTW-voordeel mee in terugverdientijd (grote impact!)",
    "Plan installatie vóór 2027 voor optimaal rendement met salderingsvoordeel"
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Besparing Berekenen | €500-€1.400/Jaar | StayCool Airco"
        description="Thuisbatterij besparing berekenen ✓ €500-1.400/jaar ✓ Terugverdientijd 3-4 jaar ✓ Rekenvoorbeelden ✓ Zelfconsumptie 70-85% ✓ Gratis advies!"
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Besparing Berekenen: €500-€1.400/Jaar
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Bereken hoeveel u bespaart met een thuisbatterij. Rekenvoorbeelden voor klein, gemiddeld en groot huishouden. Terugverdientijd 3-4 jaar met subsidies!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Persoonlijke Berekening
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Advies
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Let op: Na 2027 30-50% Meer Besparing</p>
                <p className="text-sm">
                  Einde saldering 2027 maakt batterij essentieel. Teruglevering tegen marktprijs (€0,05-0,10/kWh) vs. zelf gebruiken (€0,30/kWh).
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
              Wat Bespaart U Met Een Thuisbatterij?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete besparingen en terugverdientijd per situatie
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

      {/* Calculation Factors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            6 Factoren Die Uw Besparing Bepalen
          </h2>

          <div className="space-y-6">
            {calculationFactors.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-xl font-bold text-gray-900">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.factor}</h3>
                    <p className="text-lg text-gray-700 mb-3">{item.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-14">
                  <div className="bg-yellow-50 rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Impact</p>
                    <p className="font-bold text-gray-900">{item.impact}</p>
                  </div>
                  <div className="bg-yellow-50 rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Typisch</p>
                    <p className="font-bold text-gray-900">{item.typical}</p>
                  </div>
                  <div className="bg-gray-50 rounded p-4 md:col-span-1">
                    <p className="text-sm text-gray-700">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Comparisons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Rekenvoorbeelden: Met en Zonder Batterij
          </h2>

          <div className="space-y-12">
            {scenarioComparisons.map((scenario, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Home className="h-8 w-8 text-yellow-500 mr-3" />
                  {scenario.household}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Jaarverbruik</p>
                    <p className="font-bold text-gray-900">{scenario.consumption}</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Zonnepanelen</p>
                    <p className="font-bold text-gray-900">{scenario.solarProduction}</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Batterij</p>
                    <p className="font-bold text-gray-900">{scenario.battery}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Without Battery */}
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">❌ Zonder Batterij</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Direct gebruik:</span>
                        <span className="font-semibold">{scenario.withoutBattery.directUse}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Teruglevering:</span>
                        <span className="font-semibold">{scenario.withoutBattery.feedIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Inkoop netwerk:</span>
                        <span className="font-semibold">{scenario.withoutBattery.purchased}</span>
                      </div>
                      <div className="border-t border-red-200 pt-2 mt-2">
                        <div className="flex justify-between text-green-600">
                          <span>Besparing direct:</span>
                          <span className="font-bold">{scenario.withoutBattery.directSavings}</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>Opbrengst teruglevering:</span>
                          <span className="font-bold">{scenario.withoutBattery.feedInRevenue}</span>
                        </div>
                        <div className="flex justify-between text-red-600">
                          <span>Kosten inkoop:</span>
                          <span className="font-bold">{scenario.withoutBattery.purchaseCost}</span>
                        </div>
                      </div>
                      <div className="border-t-2 border-red-300 pt-2 mt-2">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-900">Netto resultaat:</span>
                          <span className="font-bold text-red-600 text-lg">{scenario.withoutBattery.netCost}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* With Battery */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">✅ Met Batterij</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Direct gebruik:</span>
                        <span className="font-semibold">{scenario.withBattery.directUse}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Via batterij:</span>
                        <span className="font-semibold">{scenario.withBattery.batteryUse}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Teruglevering:</span>
                        <span className="font-semibold">{scenario.withBattery.feedIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Inkoop netwerk:</span>
                        <span className="font-semibold">{scenario.withBattery.purchased}</span>
                      </div>
                      <div className="flex justify-between bg-green-100 rounded p-2">
                        <span className="font-bold">Zelfconsumptie:</span>
                        <span className="font-bold text-green-700">{scenario.withBattery.selfConsumption}</span>
                      </div>
                      <div className="border-t border-green-200 pt-2 mt-2">
                        <div className="flex justify-between text-green-600">
                          <span>Besparing zelf:</span>
                          <span className="font-bold">{scenario.withBattery.savings}</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>Opbrengst teruglevering:</span>
                          <span className="font-bold">{scenario.withBattery.feedInRevenue}</span>
                        </div>
                        <div className="flex justify-between text-red-600">
                          <span>Kosten inkoop:</span>
                          <span className="font-bold">{scenario.withBattery.purchaseCost}</span>
                        </div>
                      </div>
                      <div className="border-t-2 border-green-300 pt-2 mt-2">
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-900">Netto resultaat:</span>
                          <span className="font-bold text-green-600 text-lg">{scenario.withBattery.netBenefit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg p-6">
                  <div className="text-center">
                    <p className="text-gray-700 mb-2">Extra Besparing met Batterij</p>
                    <p className="text-4xl font-bold text-green-600">{scenario.withBattery.yearlyGain}</p>
                    <p className="text-sm text-gray-600 mt-2">Terugverdientijd: 3-4 jaar met subsidies</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Example Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Extra Besparing met Dynamisch Energiecontract
          </h2>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Zap className="h-8 w-8 text-yellow-500 mr-3" />
              {dynamicPricingExample.scenario}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Strategie</p>
                  <p className="text-lg font-semibold text-gray-900">{dynamicPricingExample.strategy}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Daluren (nacht)</p>
                    <p className="text-2xl font-bold text-blue-600">{dynamicPricingExample.nightRate}</p>
                  </div>
                  <div className="bg-orange-50 rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Piekuren (avond)</p>
                    <p className="text-2xl font-bold text-orange-600">{dynamicPricingExample.eveningRate}</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm text-gray-600 mb-1">Voordeel per kWh</p>
                  <p className="text-3xl font-bold text-green-600">{dynamicPricingExample.difference}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">Jaarlijkse Berekening</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Batterijcapaciteit:</span>
                    <span className="font-semibold">{dynamicPricingExample.batteryCapacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dagelijkse cycli:</span>
                    <span className="font-semibold">{dynamicPricingExample.dailyCycles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jaarlijkse opslag:</span>
                    <span className="font-semibold">{dynamicPricingExample.yearlyStorage}</span>
                  </div>
                  <div className="border-t-2 border-yellow-400 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-bold">Extra besparing:</span>
                      <span className="font-bold text-green-600 text-xl">{dynamicPricingExample.savings}</span>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded p-3 mt-4">
                    <p className="text-xs text-gray-700 mb-1">Totale besparing met zonnepanelen</p>
                    <p className="font-bold text-green-700">{dynamicPricingExample.totalWithSolar}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Terugverdientijd en ROI Berekening
          </h2>

          <div className="space-y-6">
            {investmentCalculation.map((calc, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Battery className="h-8 w-8 text-yellow-500 mr-3" />
                  {calc.system}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 mb-3">Investering</h4>
                    <div className="flex justify-between text-sm">
                      <span>Adviesprijs:</span>
                      <span className="font-semibold">{calc.price}</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600">
                      <span>BTW-voordeel:</span>
                      <span className="font-semibold">{calc.btwDiscount}</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600">
                      <span>ISDE subsidie:</span>
                      <span className="font-semibold">{calc.isdeSubsidy}</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Gemeente subsidie:</span>
                      <span className="font-semibold">{calc.gemeenteSubsidy}</span>
                    </div>
                    <div className="border-t-2 border-gray-300 pt-2">
                      <div className="flex justify-between">
                        <span className="font-bold">Netto investering:</span>
                        <span className="font-bold text-gray-900">{calc.netInvestment}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Besparing</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Per jaar:</span>
                        <span className="font-bold text-green-600">{calc.yearlySavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Terugverdientijd:</span>
                        <span className="font-bold text-gray-900">{calc.paybackYears}</span>
                      </div>
                      <div className="border-t border-green-200 pt-2 mt-2">
                        <div className="flex justify-between">
                          <span>Na 10 jaar:</span>
                          <span className="font-bold text-gray-900">{calc.savingsAfter10Years}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">ROI</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-700 mb-1">Netto winst (10 jaar)</p>
                        <p className="text-3xl font-bold text-green-600">{calc.netProfit10Years}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 mb-1">Return on Investment</p>
                        <p className="text-2xl font-bold text-gray-900">{calc.roi10Years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Let op: Na 25 Jaar Nog Meer Winst</h3>
            <p className="text-gray-700 mb-3">
              AlphaESS batterijen gaan 20-25 jaar mee. Totale besparing 25 jaar: €14.425-€35.425. Netto winst na kosten: €8.727-€29.727.
            </p>
            <p className="text-gray-700">
              <strong>Conclusie:</strong> Thuisbatterij loont financieel ruimschoots, vooral met subsidies en na einde saldering 2027.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            8 Tips voor Nauwkeurige Berekening
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gratis Persoonlijke Besparingsberekening
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij berekenen exact hoeveel u bespaart met uw verbruik, zonnepanelen en energietarieven. Geheel vrijblijvend!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Start Calculator
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
            Veelgestelde Vragen Besparing
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
              <Award className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Subsidie 2026</h3>
              <p className="text-gray-600 mb-4">
                Tot €3.240 subsidie: ISDE €1.740 + gemeente tot €2.000.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-saldering-2027"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <AlertCircle className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Einde Saldering 2027</h3>
              <p className="text-gray-600 mb-4">
                Wat betekent dit voor uw besparing? 30-50% meer waarde batterij.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-financieren"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Financieren</h3>
              <p className="text-gray-600 mb-4">
                Betaal vanaf €50/maand, ontvang subsidies later terug.
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
            Begin Met Besparen: ROI 238% Na 10 Jaar
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Thuisbatterij loont financieel ruimschoots. Terugverdientijd 3-4 jaar, daarna pure winst gedurende 20+ jaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Uw Besparing
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk Batterijen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijBesparingBerekenenPage;
