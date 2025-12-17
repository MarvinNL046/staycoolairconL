import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, CheckCircle, Phone, Battery, TrendingUp, Award, AlertCircle, Euro, Calendar, Zap, ArrowRight } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijLevensduurGarantiePage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Levensduur & Garantie' }
  ];

  const usps = [
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: "15-20 Jaar Levensduur",
      description: "AlphaESS LFP batterijen gaan minimaal 15, vaak 20+ jaar mee bij normaal gebruik"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "10 Jaar Volledige Garantie",
      description: "Fabrieksgarantie op minimaal 80% capaciteit na 10.000 cycli binnen 10 jaar"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "&lt;1% Degradatie/Jaar",
      description: "LFP technologie behoudt &gt;90% capaciteit na 10 jaar, &gt;80% na 15 jaar"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "10.000 Cycli Gegarandeerd",
      description: "Bij 1 cyclus/dag = 27 jaar gebruik, bij 1,5 cycli/dag = 18 jaar gebruik"
    }
  ];

  const lifespanComparison = [
    {
      technology: "AlphaESS LFP (Lithium Ferro Fosfaat)",
      years: "15-20 jaar",
      cycles: "10.000+ cycli",
      degradation: "&lt;1% per jaar (eerste 10 jaar)",
      capacity10year: "&gt;90%",
      capacity15year: "&gt;80%",
      realUsage: "Typisch 18-25 jaar in praktijk",
      advantages: ["Meest stabiel", "Veiligste chemie", "Temperatuur tolerant", "Geen brand risico"]
    },
    {
      technology: "NMC (Nikkel Mangaan Kobalt)",
      years: "10-15 jaar",
      cycles: "6.000-8.000 cycli",
      degradation: "1-2% per jaar",
      capacity10year: "85-90%",
      capacity15year: "70-80%",
      realUsage: "Typisch 12-15 jaar in praktijk",
      advantages: ["Hogere energie dichtheid", "Goedkoper per kWh", "Lichter gewicht", "Compact"]
    },
    {
      technology: "Lead-Acid (Lood-zuur)",
      years: "3-7 jaar",
      cycles: "500-2.000 cycli",
      degradation: "10-15% per jaar",
      capacity10year: "N.V.T. (vervangen na 5-7 jaar)",
      capacity15year: "N.V.T. (2-3x vervangen nodig)",
      realUsage: "Vervangen elke 3-5 jaar",
      advantages: ["Goedkoop initieel", "Recyclebaar", "Bewezen technologie", "Simpel"]
    }
  ];

  const cycleExplanation = [
    {
      title: "Wat is een Cyclus?",
      description: "1 cyclus = batterij volledig vol laden → volledig leeg ontladen → weer volledig vol laden. Let op: Partiële ontladingen tellen ook mee!",
      examples: [
        "Van 100% naar 0% en terug = 1 cyclus",
        "Van 100% naar 50% en terug = 0,5 cyclus",
        "Van 80% naar 30% en terug = 0,5 cyclus",
        "4x per dag 25% ontladen = 1 cyclus totaal"
      ]
    },
    {
      title: "Hoe Veel Cycli Gebruikt U?",
      description: "Hangt af van batterijgrootte vs. dagelijks verbruik en uw patroon:",
      examples: [
        "Klein huishouden (2.000 kWh/jaar, 5 kWh batterij): ~0,6 cycli/dag = 16+ jaar",
        "Gemiddeld huishouden (3.500 kWh/jaar, 5 kWh batterij): ~1,0 cyclus/dag = 10 jaar",
        "Groot huishouden (5.500 kWh/jaar, 10 kWh batterij): ~1,2 cycli/dag = 8 jaar",
        "Met EV (9.000 kWh/jaar, 10 kWh batterij): ~1,5 cycli/dag = 6-7 jaar"
      ]
    },
    {
      title: "10.000 Cycli = Hoeveel Jaar?",
      description: "Bereken uw eigen levensduur op basis van gebruik:",
      examples: [
        "0,5 cycli/dag = 10.000 / (0,5 × 365) = 55 jaar (!)",
        "1,0 cyclus/dag = 10.000 / 365 = 27 jaar",
        "1,5 cycli/dag = 10.000 / (1,5 × 365) = 18 jaar",
        "2,0 cycli/dag = 10.000 / (2 × 365) = 14 jaar"
      ]
    },
    {
      title: "AlphaCloud Cycli Tracking",
      description: "De AlphaCloud app houdt precies bij hoeveel cycli u heeft gebruikt:",
      examples: [
        "Real-time cyclus teller in app",
        "Historische trend over maanden/jaren",
        "Schatting resterende levensduur",
        "Automatische logging voor garantieclaims"
      ]
    }
  ];

  const degradationTimeline = [
    {
      period: "Jaar 0-3",
      cycles: "0-1.095 cycli",
      expectedCapacity: "98-100%",
      description: "Break-in periode. Batterij functioneert als nieuw. Minimale degradatie (<0,5% per jaar). Sommige batterijen presteren zelfs beter na inlopen.",
      visibility: "Niet merkbaar - systeem werkt perfect",
      recommendation: "Geniet van optimale prestaties. Houd AlphaCloud app bij voor basislijn metingen."
    },
    {
      period: "Jaar 4-7",
      cycles: "1.096-2.555 cycli",
      expectedCapacity: "94-98%",
      description: "Stabiele fase. Degradatie 0,5-1% per jaar. Batterij presteert uitstekend. Dit is de 'sweet spot' periode waar investering rendeert.",
      visibility: "Nauwelijks merkbaar in dagelijks gebruik",
      recommendation: "Check jaarlijks capaciteit via app. Bij &gt;5% capaciteit alles perfect."
    },
    {
      period: "Jaar 8-10",
      cycles: "2.556-3.650 cycli",
      expectedCapacity: "90-94%",
      description: "Garantieperiode loopt af. Batterij heeft &gt;90% capaciteit - ruim boven garantielimiet (80%). Nog jaren excellente prestaties vooruit.",
      visibility: "Licht merkbaar: 5-10% minder opslag dan nieuw, maar nog steeds zeer effectief",
      recommendation: "Optioneel: professional check voor gemoedsrust. Systeem nog lang bruikbaar."
    },
    {
      period: "Jaar 11-15",
      cycles: "3.651-5.475 cycli",
      expectedCapacity: "82-90%",
      description: "Na garantie maar batterij nog uitstekend. 80-90% capaciteit betekent systeem volledig functioneel. Besparingen blijven significant.",
      visibility: "Merkbaar: 10-18% minder opslag. Mogelijk verbruik iets aanpassen of extra netinkoop accepteren",
      recommendation: "Monitor prestaties. Bij &gt;85% geen actie nodig. Bij &lt;80% overweeg upgrade planning."
    },
    {
      period: "Jaar 16-20",
      cycles: "5.476-7.300 cycli",
      expectedCapacity: "75-82%",
      description: "Batterij veroudert maar blijft werken. 75-80% capaciteit is acceptabel voor minder kritische toepassingen. Overweeg upgrade.",
      visibility: "Duidelijk merkbaar: 20-25% minder opslag. Systeem werkt maar niet optimaal meer",
      recommendation: "Plan vervanging binnen 2-3 jaar. Evalueer nieuwere technologie (betere specs, lagere prijzen)."
    },
    {
      period: "Jaar 20+",
      cycles: "7.301+ cycli",
      expectedCapacity: "65-75%",
      description: "End-of-life bereikt. Batterij kan nog functioneren maar met sterk verminderde capaciteit. Tijd voor upgrade naar moderne systemen.",
      visibility: "Significant verminderd: 25-35% minder opslag. Vervanging hoogst aanbevolen",
      recommendation: "Vervang systeem. Na 20 jaar heeft u meer dan terugverdiend. Nieuwe batterij = betere ROI."
    }
  ];

  const warrantyDetails = [
    {
      category: "Capaciteit Garantie",
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      guarantee: "&gt;80% capaciteit na 10 jaar OF 10.000 cycli",
      details: "AlphaESS garandeert dat uw batterij na 10 jaar OF 10.000 cycli (wat eerst komt) nog minimaal 80% van de originele capaciteit heeft. In praktijk behalen batterijen vaak 85-90%.",
      whatIfBelow: "Als capaciteit <80%: Kosteloos vervangen of upgraden naar nieuwer model",
      proof: "AlphaCloud app logt automatisch alle data - geen dispuut mogelijk",
      realistic: "Zeer zeldzaam dat dit gebeurt - AlphaESS conservatief gespecificeerd"
    },
    {
      category: "Defect Garantie",
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      guarantee: "10 jaar volledige garantie op alle componenten",
      details: "Batterij cellen, BMS (Battery Management System), inverter, behuizing, elektronica, bekabeling - alles gedekt bij fabricagefout of defect.",
      whatIfBelow: "Bij defect: Diagnose binnen 48 uur, vervanging binnen 1-2 weken. Geen kosten.",
      proof: "Serienummer registratie + installatiedatum. Wij regelen bij oplevering.",
      realistic: "Defectpercentage &lt;1% - AlphaESS premium kwaliteit met 20+ jaar ervaring"
    },
    {
      category: "Installatie Garantie",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      guarantee: "10 jaar garantie op vakmanschap installatie",
      details: "StayCool Airco garandeert correcte installatie volgens NEN1010. Alle bekabeling, aansluitingen, AC-kast, aarding, beveiliging gedekt.",
      whatIfBelow: "Bij installatiefout: Kosteloos herstel binnen 48 uur. Ook na jaren.",
      proof: "Opleverdocument + inspectie rapportage + installateurspas",
      realistic: "Wij zijn erkend AlphaESS installateur - duizenden tevreden klanten"
    }
  ];

  const afterWarranty = [
    {
      scenario: "Batterij Degradatie <80% (Normaal)",
      likelihood: "90% kans",
      whatHappens: "Batterij heeft na 10 jaar 80-90% capaciteit. Nog jaren te gebruiken zonder problemen. Geen actie nodig.",
      costs: "€0 - Gewoon blijven gebruiken",
      action: "Monitoren via app. Bij <75% capaciteit na 15 jaar: Overweeg upgrade."
    },
    {
      scenario: "Batterij Defect (Zeldzaam)",
      likelihood: "5% kans",
      whatHappens: "Na garantie kan component defect raken (inverter, BMS, cel). AlphaESS service center kan vaak repareren.",
      costs: "Reparatie: €500-1.500, Vervanging batterij module: €2.000-4.000 (prijzen dalen)",
      action: "Evalueer: Repareren vs. vervangen vs. upgraden naar nieuwer model."
    },
    {
      scenario: "Totaal Uitgevallen (Zeer Zeldzaam)",
      likelihood: "&lt;1% kans",
      whatHappens: "Batterij volledig defect en niet meer te repareren. Komt bijna nooit voor bij LFP batterijen.",
      costs: "Nieuwe batterij: €4.000-8.000 (afhankelijk van capaciteit en technologie)",
      action: "Na 10-15 jaar: Upgrade naar modernere technologie met betere specs en lagere prijzen."
    },
    {
      scenario: "Geplande Upgrade (Gewenst)",
      likelihood: "Optioneel",
      whatHappens: "Na 15-20 jaar besluiten veel eigenaren te upgraden naar nieuwere batterij technologie met meer capaciteit en functies.",
      costs: "Nieuwe batterij €4.000-10.000, oude batterij heeft nog restwaarde (verkoop, recycling)",
      action: "Wacht tot prijzen verder dalen en technologie verder verbetert. Geen haast."
    }
  ];

  const maxLifespan = [
    {
      factor: "Optimale Temperatuur (15-25°C)",
      impact: "+3-5 jaar",
      description: "Plaats batterij binnen (garage, kelder, technische ruimte) voor stabiele temperatuur. Vermijd directe zon en extreme koude/warmte.",
      implementation: "Controleer locatie bij installatie. Isoleer indien nodig. Verwarm bij <0°C structureel."
    },
    {
      factor: "Conservatief Gebruik (0,7-1,0 cycli/dag)",
      impact: "+2-4 jaar",
      description: "Grotere batterij kopen dan minimaal nodig = minder cycli/dag = langere levensduur. 5 kWh batterij met 3,5 kWh dagelijks verbruik = 0,7 cycli.",
      implementation: "Kies iets grotere capaciteit dan strikt noodzakelijk. SMILE5 is modulair uitbreidbaar."
    },
    {
      factor: "Firmware Updates (Gratis OTA)",
      impact: "+1-2 jaar",
      description: "AlphaESS brengt regelmatig BMS optimalisaties uit die levensduur verlengen door slimmere laad/ontlaad algoritmes.",
      implementation: "Installeer updates zodra beschikbaar via app. Duurt 5-10 minuten, gebeurt automatisch."
    },
    {
      factor: "Regelmatige Monitoring (Wekelijks)",
      impact: "+1-2 jaar",
      description: "Check AlphaCloud app wekelijks voor afwijkingen. Vroeg detecteren van problemen voorkomt cascade failures.",
      implementation: "Maak gewoonte: Elke zondag 2 minuten app checken. Let op waarschuwingen en trends."
    },
    {
      factor: "Vermijd Extreme Ontlading (<10% SOC)",
      impact: "+1 jaar",
      description: "Hoewel LFP diepe ontlading goed verdraagt, verlengt regelmatig &gt;0% SOC houden de levensduur licht.",
      implementation: "Stel in app minimum SOC in op 15-20%. Systeem stopt ontladen automatisch."
    },
    {
      factor: "Professional Check (1x/5 jaar)",
      impact: "+1-2 jaar",
      description: "Professionele inspectie detecteert kleine problemen voordat ze groot worden. Preventief onderhoud loont.",
      implementation: "Plan om de 5 jaar inspectie (€150-250). Niet verplicht maar wel verstandig."
    }
  ];

  const faqs = [
    {
      question: "Hoelang gaat mijn AlphaESS thuisbatterij mee?",
      answer: "Realistische levensduur: 15-20 jaar bij normaal gebruik. AlphaESS LFP batterijen zijn gegarandeerd voor 10 jaar of 10.000 cycli met minimaal 80% capaciteit. In praktijk degraderen ze &lt;1% per jaar in de eerste 10 jaar, wat betekent &gt;90% capaciteit na 10 jaar en &gt;80% na 15 jaar. Bij 1 cyclus per dag heeft u 27+ jaar gebruik voordat 10.000 cycli limiet bereikt is. Meeste batterijen halen 18-25 jaar in echte wereld scenario's."
    },
    {
      question: "Wat betekent de 10 jaar / 10.000 cycli garantie precies?",
      answer: "De garantie betekent: AlphaESS garandeert dat uw batterij na 10 jaar OF 10.000 cycli (wat eerst komt) nog minimaal 80% van de originele capaciteit heeft. Als u bijvoorbeeld 1,5 cycli/dag gebruikt, bereikt u 10.000 cycli na ~18 jaar - garantie geldt dan tot 10 jaar. Bij 0,8 cycli/dag heeft u na 10 jaar pas ~2.900 cycli - garantie dekt dan capaciteit na die 2.900 cycli. In praktijk hebben batterijen na 10 jaar typisch 85-90% capaciteit, dus ruim boven de garantielimiet. Claims zijn zeer zeldzaam."
    },
    {
      question: "Hoe snel degradeert mijn batterij en is dit merkbaar?",
      answer: "AlphaESS LFP batterijen degraderen &lt;1% per jaar in de eerste 10 jaar. Dit betekent: Jaar 1-3: 98-100% (niet merkbaar), Jaar 4-7: 94-98% (nauwelijks merkbaar), Jaar 8-10: 90-94% (licht merkbaar, 5-10% minder opslag), Jaar 11-15: 82-90% (merkbaar maar acceptabel), Jaar 16-20: 75-82% (duidelijk verminderd, upgrade overwegen). In dagelijks gebruik merkt u de eerste 7-10 jaar vrijwel niets. Na 10 jaar is verschil zichtbaar maar systeem blijft goed functioneren."
    },
    {
      question: "Wat gebeurt er na de 10 jaar garantie?",
      answer: "Na garantie blijft uw batterij gewoon werken - vaak nog 5-10 jaar extra! Scenario 1 (90% kans): Batterij heeft 80-90% capaciteit en blijft uitstekend functioneren. Geen actie nodig, gewoon blijven gebruiken. Kosten: €0. Scenario 2 (9% kans): Component defect. Reparatie €500-1.500 of module vervanging €2.000-4.000 mogelijk. Evalueer repareren vs. upgraden. Scenario 3 (&lt;1% kans): Totaal defect. Nieuwe batterij kopen (na 10-15 jaar zijn prijzen veel lager en specs beter). Realiteit: De meeste batterijen halen probleemloos 15-20 jaar."
    },
    {
      question: "Hoe kan ik de levensduur van mijn batterij maximaliseren?",
      answer: "Top 6 tips: (1) Temperatuur: Plaats binnen (garage/kelder) voor 15-25°C, vermijd directe zon en extreme koude - impact +3-5 jaar. (2) Gebruik: Kies iets grotere capaciteit dan minimaal nodig voor minder cycli/dag - impact +2-4 jaar. (3) Updates: Installeer firmware updates zodra beschikbaar (gratis OTA) - impact +1-2 jaar. (4) Monitoring: Check app wekelijks voor afwijkingen en trends - impact +1-2 jaar. (5) SOC: Stel minimum SOC in op 15-20% om extreme ontlading te vermijden - impact +1 jaar. (6) Inspectie: Professional check 1x/5 jaar - impact +1-2 jaar. Totaal potentieel: +9-16 jaar extra!"
    },
    {
      question: "Is LFP echt beter dan NMC voor levensduur?",
      answer: "Ja, significant! LFP (Lithium Ferro Fosfaat) vs. NMC (Nikkel Mangaan Kobalt): Levensduur - LFP: 15-20 jaar, NMC: 10-15 jaar. Cycli - LFP: 10.000+, NMC: 6.000-8.000. Degradatie - LFP: &lt;1%/jaar, NMC: 1-2%/jaar. Capaciteit na 10 jaar - LFP: &gt;90%, NMC: 85-90%. Temperatuur tolerantie - LFP: uitstekend, NMC: gemiddeld. Veiligheid - LFP: zeer stabiel, NMC: meer gevoelig. Diepe ontlading - LFP: geen probleem, NMC: versnelt degradatie. Conclusie: LFP is superieur voor thuisopslag waar levensduur en veiligheid cruciaal zijn."
    },
    {
      question: "Hoe weet ik of mijn batterij nog gezond is?",
      answer: "Check in AlphaCloud app: (1) SOH% (State of Health): &gt;5% = excellent (nieuw), 90-95% = zeer goed, 85-90% = goed, 80-85% = acceptabel, &lt;80% = degradatie zichtbaar. (2) Cycli teller: Vergelijk met verwachting (1 cyclus/dag × jaren = totaal cycli). (3) Capaciteitstest: Volledig laden, volledig ontladen, meet kWh in app - vergelijk met originele capaciteit. (4) Trend analyse: Bekijk historische grafieken - geleidelijke daling is normaal, plotse drop is afwijkend. (5) Besparingen: Als besparingen onverklaarbaar dalen zonder gedragsverandering, mogelijk capaciteitsverlies. Doe test 1x per jaar en documenteer resultaten."
    },
    {
      question: "Wat is de restwaarde van mijn batterij na 10-15 jaar?",
      answer: "Na 10 jaar (80-90% capaciteit): Restwaarde bij verkoop woning ~30-40% van nieuwprijs (€1.500-3.000 voor 5 kWh systeem). Kopers waarderen energieopsla hoog. Na 15 jaar (75-85% capaciteit): Restwaarde ~20-30% (€1.000-2.000). Nog steeds waardevol voor minder kritische toepassingen. Recycling waarde: LFP cellen zijn waardevol en goed recyclebaar. Tweede leven: Sommige bedrijven kopen oude thuisbatterijen voor stationaire opslag (minder kritisch gebruik). AlphaESS neemt oude batterijen in bij upgrade met korting op nieuwe. Conclusie: Thuisbatterij behoudt substantiële waarde - niet vergeten in ROI berekening!"
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Levensduur & Garantie: Hoelang Gaat Batterij Mee? | StayCool"
        description="Thuisbatterij levensduur ✓ 15-20 jaar AlphaESS LFP ✓ 10 jaar garantie ✓ 10.000 cycli ✓ &lt;1% degradatie/jaar ✓ &gt;80% capaciteit na 10 jaar ✓ Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij Levensduur en Garantie: Complete Gids 2024",
          description: "Uitgebreide informatie over levensduur, degradatie, cycli en garantie van AlphaESS LFP thuisbatterijen.",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Levensduur & Garantie: Hoelang Gaat Uw Batterij Mee?
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            AlphaESS LFP batterijen: 15-20 jaar levensduur, 10 jaar garantie, 10.000 cycli gegarandeerd, en &lt;1% degradatie per jaar. Ontdek wat u kunt verwachten en wat gebeurt na de garantie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Vraag Garantie Details
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk Thuisbatterijen
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Clock className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">15-20 Jaar Betrouwbare Prestaties</p>
                <p className="text-sm">
                  LFP batterijen gaan langer mee dan u denkt. 10 jaar garantie, maar de meeste systemen halen 18-25 jaar in de praktijk. Dat is pas duurzaam investeren!
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
              Waarom AlphaESS Batterijen Zo Lang Meegaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium LFP technologie voor maximale levensduur en minimale degradatie
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
              Batterij Technologie Vergelijking: Wat Gaat Langer Mee?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Niet alle batterijen zijn gelijk. <strong>LFP (Lithium Ferro Fosfaat)</strong> technologie die AlphaESS gebruikt is superieur voor levensduur vergeleken met andere chemieën:
            </p>

            <div className="space-y-6 mb-8">
              {lifespanComparison.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`px-6 py-4 ${
                    index === 0 ? 'bg-green-500 text-white' :
                    index === 1 ? 'bg-blue-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    <h3 className="text-2xl font-bold">{tech.technology}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Levensduur:</p>
                        <p className="text-xl font-bold text-gray-900">{tech.years}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Gegarandeerde Cycli:</p>
                        <p className="text-xl font-bold text-gray-900">{tech.cycles}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Degradatie:</p>
                        <p className="text-xl font-bold text-gray-900">{tech.degradation}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Capaciteit na 10 jaar:</p>
                        <p className="text-lg font-bold text-green-600">{tech.capacity10year}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Capaciteit na 15 jaar:</p>
                        <p className="text-lg font-bold text-green-600">{tech.capacity15year}</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded p-4 mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Realistisch gebruik:</p>
                      <p className="text-gray-700">{tech.realUsage}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">Voordelen:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {tech.advantages.map((adv, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {adv}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-3">✅ Conclusie: LFP is de Beste Keuze</h3>
              <p className="text-green-800">
                Voor thuisopslag waar <strong>levensduur, veiligheid en betrouwbaarheid</strong> cruciaal zijn, is LFP de duidelijke winnaar. AlphaESS kiest bewust voor LFP ondanks iets lagere energie dichtheid - de voordelen op lange termijn zijn aanzienlijk groter.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Cycli Uitgelegd: Wat Betekent 10.000 Cycli?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De garantie spreekt over "10.000 cycli" - maar wat betekent dit en hoelang duurt dit? Hier de complete uitleg:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {cycleExplanation.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-700 mb-4">{section.description}</p>
                  <div className="bg-gray-50 rounded p-4">
                    <ul className="space-y-2">
                      {section.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Praktijkvoorbeeld: Gemiddeld Huishouden</h3>
              <p className="text-blue-800 mb-3">
                Gezin met 3.500 kWh/jaar verbruik, 5 kWh batterij (SMILE5), 10 zonnepanelen:
              </p>
              <ul className="text-blue-800 space-y-2">
                <li><strong>Dagelijks patroon:</strong> 1.400 kWh/jaar via batterij = 3,8 kWh/dag = 0,76 cycli/dag</li>
                <li><strong>Jaren tot 10.000 cycli:</strong> 10.000 / (0,76 × 365) = 36 jaar (!)</li>
                <li><strong>Capaciteit na 10 jaar:</strong> &gt;90% (garantie vereist &gt;80%)</li>
                <li><strong>Verwachte levensduur:</strong> 20-25 jaar voordat vervanging nodig is</li>
                <li><strong>Conclusie:</strong> Batterij overleeft u waarschijnlijk - upgrade uit wens, niet noodzaak</li>
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Degradatie Timeline: Wat Verwacht U Per Periode?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Hoe verandert de capaciteit van uw batterij over de jaren? Hier een realistische timeline met verwachtingen per periode:
            </p>

            <div className="space-y-6 mb-8">
              {degradationTimeline.map((period, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{period.period}</h3>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{period.expectedCapacity}</p>
                        <p className="text-sm">{period.cycles}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{period.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded p-4">
                        <p className="text-sm font-semibold text-blue-900 mb-1">Merkbaarheid:</p>
                        <p className="text-sm text-gray-700">{period.visibility}</p>
                      </div>
                      <div className="bg-green-50 rounded p-4">
                        <p className="text-sm font-semibold text-green-900 mb-1">Aanbeveling:</p>
                        <p className="text-sm text-gray-700">{period.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              10 Jaar Garantie: Wat Wordt Precies Gedekt?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              AlphaESS biedt een uitgebreide 10 jaar garantie. Hier exact wat gedekt wordt, hoe claims werken, en wat realistisch is:
            </p>

            <div className="space-y-6 mb-8">
              {warrantyDetails.map((detail, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start mb-4">
                    {detail.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-3">{detail.category}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm font-semibold text-green-900 mb-1">Garantie:</p>
                      <p className="text-lg font-bold text-green-700">{detail.guarantee}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">Details:</p>
                      <p className="text-gray-700">{detail.details}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-4">
                      <p className="text-sm font-semibold text-blue-900 mb-1">Als capaciteit onder limiet:</p>
                      <p className="text-gray-700">{detail.whatIfBelow}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 rounded p-3">
                        <p className="text-sm font-semibold text-yellow-900 mb-1">Bewijs:</p>
                        <p className="text-sm text-gray-700">{detail.proof}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm font-semibold text-gray-900 mb-1">Realiteit:</p>
                        <p className="text-sm text-gray-700">{detail.realistic}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">⚠️ Garantie Uitsluitingen - Let Op</h3>
                  <p className="text-red-800 mb-3">De garantie dekt NIET:</p>
                  <ul className="text-red-800 space-y-1">
                    <li>• Fysieke schade (stoten, vallen, vandalisme)</li>
                    <li>• Waterschade (overstroming, lekkage, condens)</li>
                    <li>• Blikseminslag (gedekt door opstalverzekering)</li>
                    <li>• Wijzigingen door derden (niet-erkende installateurs)</li>
                    <li>• Verwaarlozing of verkeerd gebruik (overbelasting)</li>
                    <li>• Normale slijtage buiten specificaties (&gt;10.000 cycli)</li>
                  </ul>
                  <p className="text-red-800 mt-3">
                    <strong>Tip:</strong> Sluit opstalverzekering af die thuisbatterij dekt (€30-50/jaar extra). Dit dekt schade die buiten garantie valt.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Na de Garantie: Wat Kunt U Verwachten?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De garantie eindigt na 10 jaar, maar uw batterij niet! Hier de realistische scenario's voor jaar 11-20:
            </p>

            <div className="space-y-6 mb-8">
              {afterWarranty.map((scenario, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{scenario.scenario}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      scenario.likelihood.includes('90%') ? 'bg-green-100 text-green-800' :
                      scenario.likelihood.includes('5%') ? 'bg-yellow-100 text-yellow-800' :
                      scenario.likelihood.includes('&lt;1%') ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {scenario.likelihood}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Wat gebeurt er:</p>
                      <p className="text-gray-700">{scenario.whatHappens}</p>
                    </div>
                    <div className="bg-yellow-50 rounded p-3">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Kosten:</p>
                      <p className="text-gray-700">{scenario.costs}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Actie:</p>
                      <p className="text-gray-700">{scenario.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Maximale Levensduur: Hoe Haalt U 20+ Jaar?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Met deze optimalisaties kunt u de levensduur van uw batterij met <strong>9-16 jaar verlengen</strong> tot 25-30 jaar totaal:
            </p>

            <div className="space-y-4 mb-8">
              {maxLifespan.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{tip.factor}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {tip.impact}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{tip.description}</p>
                  <div className="bg-blue-50 rounded p-4">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Hoe te implementeren:</p>
                    <p className="text-sm text-gray-700">{tip.implementation}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-3">🎯 Totaal Potentieel: +9-16 Jaar Extra Levensduur!</h3>
              <p className="text-green-800 mb-3">
                Door bovenstaande factoren te combineren kunt u de levensduur aanzienlijk verlengen:
              </p>
              <ul className="text-green-800 space-y-1">
                <li><strong>Basis levensduur:</strong> 15-20 jaar (standaard gebruik)</li>
                <li><strong>Met optimalisaties:</strong> 24-36 jaar (alle tips toegepast)</li>
                <li><strong>Realistisch scenario:</strong> 22-28 jaar (meeste tips toegepast)</li>
                <li><strong>Record houders:</strong> Sommige early adopters hebben 12+ jaar oude LFP batterijen die nog &gt;85% capaciteit hebben!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vragen Over Levensduur of Garantie?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Onze specialisten leggen graag uit wat u kunt verwachten van uw thuisbatterij. Transparante info, geen verrassingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Garantie Info
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
            Veelgestelde Vragen over Levensduur & Garantie
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
            Meer over Thuisbatterijen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terugverdientijd</h3>
              <p className="text-sm text-gray-600 mb-3">5-12 jaar ROI berekenen</p>
              <p className="text-yellow-600 font-bold">Wanneer verdien ik terug?</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-onderhoud"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Calendar className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Onderhoud</h3>
              <p className="text-sm text-gray-600 mb-3">Onderhoudsvrij & kosten</p>
              <p className="text-yellow-600 font-bold">Wat moet ik doen?</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alle Thuisbatterijen</h3>
              <p className="text-sm text-gray-600 mb-3">SMILE-B3, SMILE5, SMILE-T10</p>
              <p className="text-yellow-600 font-bold">Bekijk onze modellen</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investeer in Duurzaamheid: 15-20 Jaar Betrouwbare Energieopslag
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS LFP batterijen combineren lange levensduur met uitstekende garantie. 10 jaar zorgeloos, daarna vaak nog 10 jaar extra gebruik. Dat is pas slim investeren!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk Thuisbatterijen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijLevensduurGarantiePage;
