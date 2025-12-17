import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, TrendingDown, Zap, Euro, Phone, Calculator, Award, Battery, TrendingUp } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijSaldering2027Page = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Saldering 2027' }
  ];

  const usps = [
    {
      icon: <TrendingDown className="h-12 w-12 text-yellow-500" />,
      title: "Saldering Eindigt 2027",
      description: "Teruglevering tegen marktprijs €0,05-0,10/kWh i.p.v. compensatie"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "Batterij Wordt Essentieel",
      description: "30-50% meer waarde batterij na einde saldering"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "Bespaar €400-900 Extra",
      description: "Opslaan en zelf gebruiken vs. terugleveren tegen lage prijs"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Bereid U Voor Nu",
      description: "Installeer vóór 2027 voor subsidies en BTW-voordeel"
    }
  ];

  const saldingTimeline = [
    {
      year: "Tot 2023",
      percentage: "100% saldering",
      description: "Teruglevering volledig gecompenseerd tegen inkooptarief",
      impact: "Geen financiële voordeel batterij, saldering was voordeliger",
      advice: "Batterij niet urgent, saldering gunstig"
    },
    {
      year: "2024",
      percentage: "82% saldering",
      description: "18% van teruglevering tegen marktprijs (€0,075/kWh)",
      impact: "Beperkt nadeel zonder batterij, eerste voordeel batterij",
      advice: "Batterij wordt interessant, maar niet urgent"
    },
    {
      year: "2025",
      percentage: "64% saldering",
      description: "36% van teruglevering tegen marktprijs (€0,075/kWh)",
      impact: "Groeiend nadeel zonder batterij, batterij loont meer",
      advice: "Goede moment voor batterij-investering"
    },
    {
      year: "2026",
      percentage: "46% saldering",
      description: "54% van teruglevering tegen marktprijs (€0,075/kWh)",
      impact: "Aanzienlijk nadeel zonder batterij, batterij essentieel",
      advice: "Laatste jaar met beperkte saldering, installeer nu!"
    },
    {
      year: "2027",
      percentage: "0% saldering",
      description: "100% teruglevering tegen marktprijs (€0,05-0,10/kWh)",
      impact: "Groot financieel nadeel zonder batterij, batterij noodzakelijk",
      advice: "Te laat voor optimale subsidies, maar batterij nog steeds essentieel"
    }
  ];

  const impactExamples = [
    {
      household: "Klein Huishouden (2.500 kWh/jaar)",
      solarProduction: "3.000 kWh/jaar",
      excessProduction: "2.100 kWh teruglevering",
      currentSituation2025: {
        saldering64: "1.344 kWh (64% × 2.100) tegen inkoop €0,30",
        market36: "756 kWh (36% × 2.100) tegen markt €0,075",
        revenue: "€403 saldering + €57 markt = €460 opbrengst"
      },
      future2027: {
        saldering0: "0 kWh saldering",
        market100: "2.100 kWh tegen markt €0,075",
        revenue: "€158 opbrengst",
        loss: "€302 verlies vs. 2025 (€460 - €158)"
      },
      withBattery2027: {
        stored: "1.600 kWh opgeslagen en zelf gebruikt",
        excess: "500 kWh teruglevering",
        savings: "€480 besparing (1.600 × €0,30)",
        marketRevenue: "€38 (500 × €0,075)",
        total: "€518 totaal",
        gain: "€360 voordeel vs. zonder batterij (€518 - €158)"
      }
    },
    {
      household: "Gemiddeld Huishouden (3.500 kWh/jaar)",
      solarProduction: "4.000 kWh/jaar",
      excessProduction: "2.800 kWh teruglevering",
      currentSituation2025: {
        saldering64: "1.792 kWh (64% × 2.800) tegen inkoop €0,30",
        market36: "1.008 kWh (36% × 2.800) tegen markt €0,075",
        revenue: "€538 saldering + €76 markt = €614 opbrengst"
      },
      future2027: {
        saldering0: "0 kWh saldering",
        market100: "2.800 kWh tegen markt €0,075",
        revenue: "€210 opbrengst",
        loss: "€404 verlies vs. 2025 (€614 - €210)"
      },
      withBattery2027: {
        stored: "2.300 kWh opgeslagen en zelf gebruikt",
        excess: "500 kWh teruglevering",
        savings: "€690 besparing (2.300 × €0,30)",
        marketRevenue: "€38 (500 × €0,075)",
        total: "€728 totaal",
        gain: "€518 voordeel vs. zonder batterij (€728 - €210)"
      }
    },
    {
      household: "Groot Huishouden (5.000 kWh/jaar)",
      solarProduction: "5.000 kWh/jaar",
      excessProduction: "3.500 kWh teruglevering",
      currentSituation2025: {
        saldering64: "2.240 kWh (64% × 3.500) tegen inkoop €0,30",
        market36: "1.260 kWh (36% × 3.500) tegen markt €0,075",
        revenue: "€672 saldering + €95 markt = €767 opbrengst"
      },
      future2027: {
        saldering0: "0 kWh saldering",
        market100: "3.500 kWh tegen markt €0,075",
        revenue: "€263 opbrengst",
        loss: "€504 verlies vs. 2025 (€767 - €263)"
      },
      withBattery2027: {
        stored: "3.200 kWh opgeslagen en zelf gebruikt",
        excess: "300 kWh teruglevering",
        savings: "€960 besparing (3.200 × €0,30)",
        marketRevenue: "€23 (300 × €0,075)",
        total: "€983 totaal",
        gain: "€720 voordeel vs. zonder batterij (€983 - €263)"
      }
    }
  ];

  const preparationSteps = [
    {
      step: 1,
      title: "Analyseer Uw Situatie (Nu)",
      description: "Bereken hoeveel u jaarlijks teruglevering aan het net. Check uw energierekening of slimme meter.",
      action: "Meet teruglevering via slimme meter, bereken verlies na 2027",
      timing: "December 2025 - Maart 2026",
      urgency: "Hoog - planning nodig"
    },
    {
      step: 2,
      title: "Bereken Financieel Voordeel Batterij",
      description: "Hoeveel bespaart u met batterij vs. zonder? Reken subsidies en BTW-voordeel mee.",
      action: "Gebruik besparingcalculator, vraag offerte aan",
      timing: "Januari - April 2026",
      urgency: "Hoog - subsidiebudget op=op"
    },
    {
      step: 3,
      title: "Vraag Subsidies Aan (Q1-Q2 2026)",
      description: "ISDE subsidie €1.740 + gemeentelijke subsidies €750-€2.000. Budget 2026 beschikbaar, maar op=op.",
      action: "Dien subsidieaanvraag in vóór Q3 2026 voor zekerheid",
      timing: "Februari - Juni 2026",
      urgency: "Zeer hoog - laatste kans optimale subsidies"
    },
    {
      step: 4,
      title: "Installeer Thuisbatterij (Voor Eind 2026)",
      description: "Plan installatie ruim vóór 2027 om direct te profiteren van batterij en subsidies.",
      action: "Offerte accepteren, installatie plannen",
      timing: "Maart - December 2026",
      urgency: "Hoog - voorkom wachtlijst"
    },
    {
      step: 5,
      title: "Optimaliseer Gebruik (Vanaf 2027)",
      description: "Stel batterij in voor maximale zelfconsumptie. Overweeg dynamisch energiecontract.",
      action: "Monitoring instellen, verbruikspatroon aanpassen",
      timing: "Januari 2027 en later",
      urgency: "Gemiddeld - continue optimalisatie"
    }
  ];

  const alternatives = [
    {
      option: "Niets Doen (Geen Batterij)",
      investment: "€0",
      revenue2027: "€158-€263 teruglevering per jaar",
      loss: "€302-€504 verlies vs. 2025",
      longTerm: "Blijvend nadeel, teruglevering onrendabel",
      advice: "Niet aan te raden bij veel teruglevering (&gt;.000 kWh/jaar)"
    },
    {
      option: "Thuisbatterij Aanschaffen (Aanbevolen)",
      investment: "€2.055-€4.198 netto (met subsidies)",
      revenue2027: "€518-€983 besparing per jaar",
      gain: "€360-€720 voordeel vs. geen batterij",
      longTerm: "Terugverdientijd 3-4 jaar, daarna pure winst 20+ jaar",
      advice: "Best optie: maximale besparing, onafhankelijkheid, toekomstbestendig"
    },
    {
      option: "Verbruik Verplaatsen Naar Overdag",
      investment: "€0 (gedragsverandering)",
      revenue2027: "Beperkt effect, moeilijk vol te houden",
      gain: "€100-200 extra zelfconsumptie mogelijk",
      longTerm: "Beperkt haalbaar voor gezinnen, batterij blijft nodig",
      advice: "Kan aanvullend, maar vervangt batterij niet"
    },
    {
      option: "Extra Zonnepanelen Plaatsen",
      investment: "€2.000-€4.000 voor 4-6 panelen",
      revenue2027: "Meer teruglevering, maar tegen lage prijs",
      gain: "Beperkt zonder batterij, wel met batterij",
      longTerm: "Alleen zinvol in combinatie met batterij",
      advice: "Overweeg bij batterij-aanschaf voor maximale zelfconsumptie"
    }
  ];

  const faqs = [
    {
      question: "Wat is saldering en waarom eindigt het in 2027?",
      answer: "Saldering is een regeling waarbij teruggeleverde zonne-energie wordt gecompenseerd tegen hetzelfde tarief als inkoop (€0,30/kWh). Dit werd ingevoerd om zonnepanelen te stimuleren. De overheid vindt dat zonnepanelen nu voldoende gangbaar zijn en dat de regeling te duur wordt (€2,5 miljard/jaar subsidie). Vanaf 2027 wordt teruglevering alleen vergoed tegen marktprijs (€0,05-0,10/kWh). Dit betekent €0,20-0,25/kWh verlies op elke teruggeleverde kWh. Voor gemiddeld huishouden: €300-500/jaar verlies."
    },
    {
      question: "Hoeveel verlies ik na 2027 zonder thuisbatterij?",
      answer: "Het verlies hangt af van uw teruglevering. Klein huishouden (2.100 kWh teruglevering): €302/jaar verlies. Gemiddeld huishouden (2.800 kWh): €404/jaar verlies. Groot huishouden (3.500 kWh): €504/jaar verlies. Dit is het verschil tussen saldering 2025 (64%) en geen saldering 2027 (0%). Bereken uw persoonlijke verlies: (Teruglevering kWh) × (€0,30 - €0,075) = Verlies per jaar. Let op: marktprijs kan verder dalen tot €0,05/kWh, waardoor verlies nog groter wordt."
    },
    {
      question: "Hoeveel bespaar ik met een thuisbatterij na 2027?",
      answer: "Met thuisbatterij slaat u overschot op en gebruikt u 's avonds, waardoor u geen/nauwelijks teruglevering heeft. Klein huishouden: €360/jaar voordeel vs. zonder batterij. Gemiddeld huishouden: €518/jaar voordeel. Groot huishouden: €720/jaar voordeel. Dit is bovenop de normale besparing met batterij (€577-€1.417/jaar). Totale besparing met batterij na 2027: €937-€2.137/jaar. Zonder batterij: €158-€263/jaar. Verschil: €779-€1.874/jaar. Batterij wordt 30-50% waardevoller na einde saldering."
    },
    {
      question: "Moet ik nu nog een batterij kopen of kan ik wachten tot 2027?",
      answer: "Koop NU (voor eind 2026) vanwege: 1) ISDE subsidie €1.740 (budget 2026 beschikbaar, 2027 onzeker). 2) Gemeentelijke subsidies €750-€2.000 (2027 mogelijk lager/weg). 3) 0% BTW-tarief blijft (maar subsidies mogelijk niet). 4) Langer profiteren: elke maand uitstel = €50-120 gemiste besparing. 5) Voorkom wachtlijst: tegen eind 2026 grote vraag verwacht. Bij wachten tot 2027: mogelijk €2.000-€3.000 minder subsidie, langere levertijd, hogere kosten door vraagpiek. Advies: plan installatie Q2-Q4 2026."
    },
    {
      question: "Kan ik nog profiteren van saldering als ik in 2026 een batterij installeer?",
      answer: "Ja, gedeeltelijk. In 2026 geldt 46% saldering, dus u profiteert nog beperkt van de oude regeling. Maar belangrijker: met batterij heeft u nauwelijks teruglevering meer, dus saldering is minder relevant. Zonder batterij in 2026: €614 opbrengst (voorbeeld gemiddeld huishouden). Met batterij in 2026: €945 besparing (zelfconsumptie 86%). U profiteert dus meer van batterij dan van saldering. En vanaf 2027 is batterij essentieel. Conclusie: installeer in 2026, profiteer van subsidies en start met optimale besparing vóór einde saldering."
    },
    {
      question: "Wat als ik geen zonnepanelen heb, is een batterij dan nog zinvol?",
      answer: "Zonder zonnepanelen is batterij alleen zinvol met dynamisch energiecontract: laad 's nachts goedkoop (€0,08/kWh), gebruik 's avonds duur (€0,35/kWh). Besparing: €0,27/kWh verschil. Voor 5 kWh batterij: €493/jaar extra. Nadeel: geen 0% BTW zonder zonnepanelen (wel 21% BTW) en geen ISDE subsidie. Netto investering: €7.000 - €1.000 gemeente = €6.000. Terugverdientijd: 12 jaar. Advies: combineer batterij altijd met zonnepanelen voor optimaal rendement (terugverdientijd 3-4 jaar). Alleen batterij is beperkt rendabel."
    },
    {
      question: "Wat zijn de beste alternatieven voor een thuisbatterij?",
      answer: "Er zijn weinig goede alternatieven: 1) Verbruik verplaatsen naar overdag (beperkt haalbaar, max €100-200 extra). 2) Extra zonnepanelen (alleen zinvol met batterij, anders meer teruglevering tegen lage prijs). 3) Dynamisch contract (helpt, maar vervangt batterij niet volledig). 4) Virtuele batterij/energiedelen (nog experimenteel, beperkte beschikbaarheid). Conclusie: thuisbatterij is verreweg beste optie voor maximale besparing en onafhankelijkheid na 2027. Geen reëel alternatief voor huishoudens met veel zonnepanelenopbrengst. Doe-niets-scenario leidt tot €300-500/jaar verlies."
    },
    {
      question: "Hoe zeker is het dat saldering echt eindigt in 2027?",
      answer: "99% zeker. Saldering-afbouw is vastgelegd in Belastingplan 2023 en wordt geleidelijk afgebouwd: 2024 (82%), 2025 (64%), 2026 (46%), 2027 (0%). Politieke partijen zijn het eens over afschaffing, alleen timing werd bediscussieerd. Uitstel tot na 2027 is vrijwel uitgesloten vanwege hoge kosten (€2,5 miljard/jaar) en Europese regelgeving (staatssteun). Enige onzekerheid: exacte teruglevertarief na 2027 (€0,05-0,10/kWh afhankelijk van markt). Maar in alle scenario's is batterij na 2027 essentieel voor optimale besparing. Bereid u voor alsof saldering zeker eindigt."
    }
  ];

  return (
    <>
      <MetaTags
        title="Einde Saldering 2027: Thuisbatterij Essentieel | StayCool Airco"
        description="Saldering eindigt 2027 ✓ €300-500 verlies zonder batterij ✓ 30-50% meer waarde batterij ✓ Installeer nu voor subsidies ✓ Bereid u voor!"
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
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-orange-100" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Einde Saldering 2027: Thuisbatterij Wordt Essentieel
          </h1>

          <p className="text-xl md:text-2xl text-orange-50 mb-8 max-w-3xl">
            Saldering eindigt volledig in 2027. Teruglevering tegen €0,05-0,10/kWh i.p.v. €0,30/kWh. Zonder batterij: €300-500/jaar verlies. Met batterij: €360-720 extra besparing. Bereid u voor!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Uw Verlies/Winst
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Adviesgesprek
            </Link>
          </div>

          <div className="bg-red-700 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Laatste Kans Subsidies 2026!</p>
                <p className="text-sm">
                  ISDE €1.740 + gemeente €750-€2.000. Installeer vóór eind 2026 voor maximaal voordeel. Budget op=op!
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
              Waarom Thuisbatterij Na 2027 Essentieel Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Einde saldering maakt batterij 30-50% waardevoller
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

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Tijdlijn Afbouw Saldering
          </h2>

          <div className="space-y-6">
            {saldingTimeline.map((item, index) => (
              <div key={index} className={`rounded-lg p-8 shadow-md ${item.year === '2027' ? 'bg-red-50 border-2 border-red-500' : 'bg-white'}`}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.year}</h3>
                    <p className="text-3xl font-bold text-orange-600">{item.percentage}</p>
                  </div>
                  <div className="md:col-span-3 space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Regeling</p>
                      <p className="font-semibold text-gray-900">{item.description}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Impact</p>
                      <p className="text-gray-700">{item.impact}</p>
                    </div>
                    <div className={`rounded p-3 ${item.year === '2027' ? 'bg-red-100' : 'bg-yellow-50'}`}>
                      <p className="text-sm font-semibold text-gray-900">💡 {item.advice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Let op: Marktprijs Kan Verder Dalen</h3>
            <p className="text-gray-700 mb-3">
              Huidige inschatting teruglevertarief 2027: €0,075/kWh gemiddeld. Bij grote zonne-energie-aanbod (zomermiddagen) kan marktprijs dalen tot €0,02-0,05/kWh. Dit vergroot het belang van batterijopslag nog meer.
            </p>
            <p className="text-gray-700">
              <strong>Conclusie:</strong> Reken op worst-case scenario (€0,05/kWh teruglevering) voor realistische besparing-berekening batterij.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Examples Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Rekenvoorbeelden: Impact Einde Saldering
          </h2>

          <div className="space-y-12">
            {impactExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{example.household}</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Jaarverbruik</p>
                    <p className="font-bold text-gray-900">{example.household.split('(')[1].split(')')[0]}</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Zonnepanelen</p>
                    <p className="font-bold text-gray-900">{example.solarProduction}</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Teruglevering</p>
                    <p className="font-bold text-orange-600">{example.excessProduction}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Current Situation 2025 */}
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">📅 Nu (2025)</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">{example.currentSituation2025.saldering64}</p>
                      <p className="text-gray-700">{example.currentSituation2025.market36}</p>
                      <div className="border-t border-yellow-200 pt-2 mt-2">
                        <p className="font-bold text-green-600">{example.currentSituation2025.revenue}</p>
                      </div>
                    </div>
                  </div>

                  {/* Future 2027 Without Battery */}
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">❌ 2027 Zonder Batterij</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">{example.future2027.saldering0}</p>
                      <p className="text-gray-700">{example.future2027.market100}</p>
                      <div className="border-t border-red-200 pt-2 mt-2">
                        <p className="font-bold text-red-600">{example.future2027.revenue}</p>
                        <p className="text-xs text-red-700 mt-2">{example.future2027.loss}</p>
                      </div>
                    </div>
                  </div>

                  {/* Future 2027 With Battery */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">✅ 2027 Met Batterij</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">{example.withBattery2027.stored}</p>
                      <p className="text-gray-700">{example.withBattery2027.excess}</p>
                      <div className="border-t border-green-200 pt-2 mt-2">
                        <p className="text-green-600">{example.withBattery2027.savings}</p>
                        <p className="text-green-600">{example.withBattery2027.marketRevenue}</p>
                        <p className="font-bold text-green-600 mt-2">{example.withBattery2027.total}</p>
                        <p className="text-xs text-green-700 mt-2 font-bold">{example.withBattery2027.gain}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Conclusie: Batterij Essentieel Na 2027</h3>
            <p className="text-gray-700 mb-3">
              Zonder batterij: €158-€263 teruglevering, verlies €302-€504 vs. 2025.
            </p>
            <p className="text-gray-700 mb-3">
              Met batterij: €518-€983 besparing, winst €360-€720 vs. zonder batterij.
            </p>
            <p className="text-gray-700 font-bold">
              Batterij wordt 30-50% waardevoller na einde saldering. Terugverdientijd daalt van 8-12 jaar naar 3-4 jaar met subsidies.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            5 Stappen: Bereid U Voor Op 2027
          </h2>

          <div className="space-y-6">
            {preparationSteps.map((step, index) => (
              <div key={index} className={`rounded-lg p-6 shadow-md ${step.urgency.includes('Zeer') ? 'bg-red-50 border-2 border-red-500' : step.urgency.includes('Hoog') ? 'bg-orange-50 border border-orange-300' : 'bg-white'}`}>
                <div className="flex items-start">
                  <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 mb-3">{step.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Actie</p>
                        <p className="font-semibold text-gray-900 text-sm">{step.action}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Timing</p>
                        <p className="font-semibold text-gray-900 text-sm">{step.timing}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Urgentie</p>
                        <p className={`font-semibold text-sm ${step.urgency.includes('Zeer') ? 'text-red-600' : step.urgency.includes('Hoog') ? 'text-orange-600' : 'text-gray-900'}`}>{step.urgency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Alternatieven Vergeleken
          </h2>

          <div className="space-y-6">
            {alternatives.map((alt, index) => (
              <div key={index} className={`rounded-lg p-8 shadow-md ${alt.option.includes('Aanbevolen') ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{alt.option}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Investering</p>
                    <p className="font-bold text-gray-900">{alt.investment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Opbrengst 2027</p>
                    <p className="font-semibold text-gray-900">{alt.revenue2027}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{alt.loss ? 'Verlies' : alt.gain ? 'Voordeel' : 'Effect'}</p>
                    <p className={`font-bold ${alt.loss ? 'text-red-600' : alt.gain ? 'text-green-600' : 'text-gray-900'}`}>{alt.loss || alt.gain || alt.revenue2027}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Lange termijn</p>
                    <p className="text-sm text-gray-700">{alt.longTerm}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Advies</p>
                    <p className="text-sm font-semibold text-gray-900">{alt.advice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Winnaar: Thuisbatterij Aanschaffen</h3>
            <p className="text-gray-700 mb-3">
              Thuisbatterij is verreweg beste optie voor maximale besparing, onafhankelijkheid en toekomstbestendigheid. Geen reëel alternatief voor huishoudens met veel zonnepanelenopbrengst.
            </p>
            <p className="text-gray-700 font-bold">
              Terugverdientijd 3-4 jaar met subsidies. Na 10 jaar: €3.715-€9.972 netto winst. Na 25 jaar: €8.727-€29.727 winst.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereid U Voor: Installeer Vóór Eind 2026
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            ISDE €1.740 + gemeente tot €2.000 = tot €3.740 subsidie. Budget 2026 ruim, maar 2027 onzeker. Plan nu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Besparing 2027
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
            Veelgestelde Vragen Einde Saldering
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
            Meer Informatie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-besparing-berekenen"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Calculator className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Besparing Berekenen</h3>
              <p className="text-gray-600 mb-4">
                Bereken hoeveel u bespaart met batterij na 2027. Rekenvoorbeelden.
              </p>
              <span className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center">
                Lees meer →
              </span>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-2026"
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <Award className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Subsidie 2026</h3>
              <p className="text-gray-600 mb-4">
                ISDE €1.740 + gemeente tot €2.000. Wij regelen aanvraag.
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
                Betaal vanaf €50/maand. Ontvang subsidies later terug.
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
            Wacht Niet Tot 2027: Profiteer Nu Van Subsidies
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Elke maand uitstel = €50-120 gemiste besparing + risico op lagere subsidies. Plan installatie Q2-Q4 2026 voor optimaal voordeel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Voorbereiding 2027
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

export default ThuisbatterijSaldering2027Page;
