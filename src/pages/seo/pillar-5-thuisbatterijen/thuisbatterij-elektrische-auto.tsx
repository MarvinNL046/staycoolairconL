import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Battery, CheckCircle, Euro, TrendingUp, Phone, Zap, ArrowRight, Sun, Shield } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijElektrischeAutoPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Thuisbatterij + Elektrische Auto' }
  ];

  const usps = [
    {
      icon: <Car className="h-12 w-12 text-yellow-500" />,
      title: "Laad Je EV Met Zonnestroom",
      description: "Gebruik opgeslagen zonne-energie voor EV laden - bespaar €3-4 per 100 km"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Slim Laden & V2H Ready",
      description: "Intelligente laadsturing + Vehicle-to-Home: auto als extra batterij"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "€1.200-2.000/Jaar Besparing",
      description: "Vergelijking: eigen zonnestroom vs. laadpaal/snellaadstation"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "Grotere Batterij Nodig",
      description: "10-15 kWh voor optimale EV-ondersteuning + huisverbruik"
    }
  ];

  const scenarios = [
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Overdag Laden (Thuis Werken)",
      before: "Zonder batterij: direct zonnestroom + bijkoop net (€0,40/kWh)",
      after: "Met batterij: eerst batterij vol, dan EV laden met zonnestroom",
      saving: "€500-800/jaar",
      explanation: "Als je overdag thuiswerkt, laadt je auto direct met zonnestroom. Batterij vangt pieken op en zorgt dat huisverbruik ook wordt gedekt zonder netinkoop. Optimaal scenario met 90%+ groene kilometers."
    },
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "'s Avonds Laden (Kantoorwerk)",
      before: "Zonder batterij: EV laden van net (€0,40/kWh) = €12 per volle lading",
      after: "Met batterij: EV laden met opgeslagen zonnestroom = €0",
      saving: "€1.200-1.500/jaar",
      explanation: "Werk je overdag op kantoor? Batterij slaat overdag zonne-energie op. 's Avonds thuis laad je EV met deze opgeslagen stroom. Bij 15.000 km/jaar = 3.000 kWh × €0,40 = €1.200 besparing vs. netinkoop."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Slim Laden Met Dynamisch Tarief",
      before: "Zonder batterij: EV laden tijdens piekuren (€0,50/kWh) + teruglevering zonne-energie (€0,08/kWh)",
      after: "Met batterij: opslaan zonnestroom + laden tijdens daluren met goedkope netstroom indien nodig",
      saving: "€600-1.000/jaar",
      explanation: "Combineer batterij met dynamisch contract (Tibber/ANWB Energie): laad EV 's nachts goedkoop (€0,10-0,15/kWh), gebruik batterij voor huisverbruik overdag, verkoop overtollige zonnestroom tegen piekprijs. Advanced strategie met hoogste ROI."
    },
    {
      icon: <Car className="h-8 w-8 text-yellow-500" />,
      title: "Vehicle-to-Home (V2H) Ready",
      before: "Zonder V2H: batterij 10 kWh capaciteit voor huis",
      after: "Met V2H: batterij 10 kWh + EV 60 kWh = 70 kWh totaal",
      saving: "7 dagen noodstroom + extra flexibiliteit",
      explanation: "Nieuwere EV's (Nissan Leaf, Hyundai IONIQ 5, Ford F-150) ondersteunen bidirectioneel laden. Je auto wordt een rijdende batterij van 60-80 kWh. Bij stroomuitval: 7+ dagen backup. Bij thuisbatterij vol: overtollige zonnestroom naar EV. Toekomstbestendig!"
    }
  ];

  const calculations = [
    {
      kmPerYear: "10.000 km/jaar",
      consumption: "2.000 kWh",
      battery: "SMILE5 (10 kWh)",
      solarPanels: "12 panelen (5 kWp)",
      method: "60% EV laden uit batterij + 40% net",
      netCost: "€800 (2.000 × €0,40)",
      batteryCost: "€240 (40% × €0,40) + €0 (60% gratis)",
      saving: "€560/jaar",
      payback: "10-12 jaar",
      verdict: "Goede basisset voor gemiddelde rijder"
    },
    {
      kmPerYear: "15.000 km/jaar",
      consumption: "3.000 kWh",
      battery: "SMILE5 (15 kWh)",
      solarPanels: "16 panelen (6,5 kWp)",
      method: "70% EV laden uit batterij + 30% net",
      netCost: "€1.200 (3.000 × €0,40)",
      batteryCost: "€360 (30% × €0,40) + €0 (70% gratis)",
      saving: "€840/jaar",
      payback: "9-11 jaar",
      verdict: "Populairste configuratie voor woon-werk verkeer"
    },
    {
      kmPerYear: "20.000 km/jaar",
      consumption: "4.000 kWh",
      battery: "SMILE-G3-T10 (15 kWh 3-fase)",
      solarPanels: "20 panelen (8 kWp)",
      method: "75% EV laden uit batterij + 25% net",
      netCost: "€1.600 (4.000 × €0,40)",
      batteryCost: "€400 (25% × €0,40) + €0 (75% gratis)",
      saving: "€1.200/jaar",
      payback: "8-10 jaar",
      verdict: "Optimaal voor veel rijden + groot dak"
    },
    {
      kmPerYear: "25.000 km/jaar",
      consumption: "5.000 kWh",
      battery: "SMILE-G3-T10 (20 kWh 3-fase)",
      solarPanels: "25 panelen (10 kWp)",
      method: "80% EV laden uit batterij + 20% dynamisch tarief",
      netCost: "€2.000 (5.000 × €0,40)",
      batteryCost: "€200 (20% × €0,20 slim) + €0 (80% gratis)",
      saving: "€1.800/jaar",
      payback: "7-9 jaar",
      verdict: "Zakelijk/intensief gebruik - hoogste besparing"
    }
  ];

  const comparisons = [
    {
      method: "Publieke Laadpaal",
      costPerkWh: "€0,60-0,80/kWh",
      cost15000km: "€1.800-2.400/jaar",
      convenience: "❌ Zoeken, wachten, parkeerkosten",
      notes: "Duurste optie, tijdverlies, beperkte beschikbaarheid"
    },
    {
      method: "Snellader Onderweg",
      costPerkWh: "€0,70-0,90/kWh",
      cost15000km: "€2.100-2.700/jaar",
      convenience: "❌ Alleen voor lange ritten, kort parkeren",
      notes: "Zeer duur, alleen geschikt voor onderweg laden"
    },
    {
      method: "Thuis Laden (Net)",
      costPerkWh: "€0,35-0,40/kWh",
      cost15000km: "€1.050-1.200/jaar",
      convenience: "✅ Gemak, altijd beschikbaar",
      notes: "Goedkoper dan publiek, maar nog steeds netkosten"
    },
    {
      method: "Thuis + Thuisbatterij + Zonnepanelen",
      costPerkWh: "€0,05-0,10/kWh (alleen restinkoop)",
      cost15000km: "€150-300/jaar",
      convenience: "✅ Ultiem gemak, 100% groen, onafhankelijk",
      notes: "Goedkoopste + groenste optie, eigen 'tankstation'"
    }
  ];

  const tips = [
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Kies Grotere Batterij (10-15 kWh)",
      description: "EV laadbehoeften = 8-12 kWh per dag (15.000 km/jaar). Tel hier huisverbruik bij op (5-8 kWh/dag). Totaal: 13-20 kWh/dag → kies batterij 10-15 kWh voor optimale dekking. Te kleine batterij = onvoldoende EV-ondersteuning.",
      saving: "70-80% groene kilometers mogelijk"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Installeer 3-Fase Systeem",
      description: "EV's laden met 11 kW (3-fase) of 3,7 kW (1-fase). Bij 3-fase batterij (SMILE-G3-T10) laad je 3× sneller én balanceer je netbelasting beter. Investering: €1.000-2.000 extra, maar snellere lading + toekomstbestendig.",
      saving: "Volle lading in 3 uur vs. 10 uur"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Overschat Zonnepanelen (8-10 kWp)",
      description: "Voor EV + huis: minimum 8 kWp zonnepanelen nodig (20 panelen). EV = 3.000 kWh/jaar + huis 3.500 kWh = 6.500 kWh totaal. Bij 8 kWp = 7.000 kWh productie. Precies genoeg voor volledige zelfvoorziening incl. EV!",
      saving: "90%+ zelfvoorziening mogelijk"
    },
    {
      icon: <Car className="h-8 w-8 text-yellow-500" />,
      title: "Overweeg V2H-Ready Systeem",
      description: "Vehicle-to-Home (V2H) laat je EV terugleveren naar huis. Vereist: V2H-geschikte EV + omvormer (Wallbox Quasar, Forenex). Investering €3.000-5.000 extra, maar EV wordt mega-batterij (60-80 kWh). Toekomst = VPP (virtual power plant) verdiensten.",
      saving: "€500-1.000/jaar VPP verdiensten mogelijk"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      title: "Combineer Met Dynamisch Contract",
      description: "Dynamische contracten (Tibber, ANWB Energie, Ostrom) hebben uurtarieven (€0,05-0,60/kWh). Slimme strategie: laad EV 's nachts goedkoop (€0,10/kWh), gebruik batterij overdag, verkoop zonnestroom bij piekprijzen (€0,40+). Optimalisatie-apps automatiseren dit.",
      saving: "€300-600/jaar extra door slim inkoopmoment"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Plan Installatie Samen",
      description: "Installeer zonnepanelen, thuisbatterij én laadpaal tegelijk. Voordelen: (1) Lagere installatiekosten (€500-1.000 bespaard), (2) Optimale systeemintegratie, (3) Één aannemer = één aanspreekpunt, (4) Kortingen op combipakketten (5-10%). 0% BTW geldt voor alle drie producten!",
      saving: "€1.000-2.000 korting combi-installatie"
    }
  ];

  const faqs = [
    {
      question: "Kan ik mijn elektrische auto volledig laden met zonnepanelen en thuisbatterij?",
      answer: "Grotendeels wel: in zomermaanden 80-100%, in wintermaanden 40-60%, jaargemiddeld 60-80% afhankelijk van systeem en rijgedrag. Berekening: 15.000 km/jaar = 3.000 kWh EV-verbruik. Bij 8 kWp zonnepanelen = 7.000 kWh/jaar productie. Met 10-15 kWh batterij kun je 60-80% van EV-laadbehoeften dekken uit opgeslagen zonnestroom. Resterende 20-40% inkoop van net (nachttarief of dynamisch tarief). Volledig zelfvoorzienend = oversized systeem (10+ kWp) met te lage ROI."
    },
    {
      question: "Hoe groot moet mijn thuisbatterij zijn als ik een elektrische auto heb?",
      answer: "Minimum 10 kWh, optimaal 10-15 kWh afhankelijk van rijgedrag: (1) 10.000 km/jaar (2.000 kWh): SMILE5 10 kWh voldoet, dekking 60-70% EV + huis, (2) 15.000 km/jaar (3.000 kWh): SMILE5 10-15 kWh of SMILE-T10, dekking 65-75% EV + huis, (3) 20.000+ km/jaar (4.000+ kWh): SMILE-G3-T10 15-20 kWh nodig, dekking 70-80% EV + huis. Vuistregel: (dagelijks EV-verbruik + huisverbruik) × 0,7 = minimale batterijcapaciteit. Te klein = onvoldoende, te groot = overcapaciteit."
    },
    {
      question: "Hoeveel bespaar ik door mijn EV te laden met thuisbatterij + zonnepanelen?",
      answer: "€1.200-2.000/jaar afhankelijk van kilometers: (1) 10.000 km = 2.000 kWh: €800 (netprijs) vs. €200 (20% restinkoop) = €600 besparing, (2) 15.000 km = 3.000 kWh: €1.200 vs. €300 = €900 besparing, (3) 20.000 km = 4.000 kWh: €1.600 vs. €400 = €1.200 besparing, (4) 25.000 km = 5.000 kWh: €2.000 vs. €400 = €1.600 besparing. Vergelijking: publieke laadpaal (€0,70/kWh) bij 15.000 km = €2.100 → met batterij = €1.800 extra besparing per jaar! Terugverdientijd: 8-12 jaar totaal systeem (panelen + batterij + laadpaal)."
    },
    {
      question: "Is het voordeliger om een elektrische auto te hebben met een thuisbatterij?",
      answer: "Absoluut - batterij + EV = perfecte synergie: (1) Zonder EV: batterij terugverdientijd 12-15 jaar (alleen huisverbruik 3.500 kWh/jaar), (2) Met EV: terugverdientijd 8-12 jaar (huisverbruik + EV = 6.500 kWh/jaar = bijna 2× gebruik = snellere ROI), (3) Grotere batterij = meer dagelijkse cycli = betere benutting = snellere ROI, (4) EV-laadkosten zonder batterij: €1.200/jaar, met batterij: €300/jaar = €900 extra besparing. Conclusie: EV maakt thuisbatterij aantrekkelijker, thuisbatterij maakt EV goedkoper. Win-win!"
    },
    {
      question: "Wat is Vehicle-to-Home (V2H) en werkt dat met een thuisbatterij?",
      answer: "Vehicle-to-Home (V2H) = bidirectioneel laden: je EV kan stroom leveren aan je huis. Hoe werkt het: (1) V2H-geschikte EV (Nissan Leaf, Hyundai IONIQ 5/6, Kia EV6, Ford F-150 Lightning) + V2H-omvormer (Wallbox Quasar, Forenex) nodig. (2) EV batterij (60-80 kWh) wordt extra thuisbatterij. (3) Strategie: vul EV 's nachts goedkoop (€0,10/kWh dynamisch tarief), gebruik EV-stroom overdag (bespaart €0,40/kWh inkoop), laad EV overdag met zonnepanelen. Voordelen: 7-10 dagen noodstroom bij stroomuitval, flexibele opslag, VPP-verdiensten (€500-1.000/jaar). Investering: €3.000-5.000 extra, ROI 6-10 jaar."
    },
    {
      question: "Kan ik mijn EV snelladen aan een thuisbatterij?",
      answer: "Nee - thuisbatterijen leveren 3-5 kW (1-fase) of 11 kW (3-fase), EV snelladen = 50-350 kW. Echter: (1) Thuisladen = langzaam laden (3,7-11 kW) = ideaal voor dagelijks gebruik, volle lading in 4-10 uur. (2) Thuisbatterij ondersteunt dit prima: SMILE-G3-T10 (3-fase) levert 11 kW = 50 km range per uur laden. (3) Snelladen (50+ kW) = alleen onderweg nodig bij lange ritten, niet thuis. (4) Slim: laad thuis altijd langzaam uit batterij/zonnepanelen (gratis), gebruik snelladers alleen onderweg als nodig (€0,70/kWh). Voordeel thuisladen met batterij: 90%+ van laadbehoeften tegen €0-0,10/kWh, 10% snelladen onderweg tegen €0,70/kWh = gemiddeld €0,15/kWh."
    },
    {
      question: "Welke zonnepanelen en batterij combinatie is ideaal voor een elektrische auto?",
      answer: "Afhankelijk van jaarkilometers - 4 scenario's: (1) 10.000 km: 12 panelen (5 kWp) + SMILE5 (10 kWh) = €12.500, 60% groen rijden, terugverdientijd 10-12 jaar. (2) 15.000 km (populairst): 16 panelen (6,5 kWp) + SMILE5 (15 kWh) = €15.500, 70% groen rijden, terugverdientijd 9-11 jaar. (3) 20.000 km: 20 panelen (8 kWp) + SMILE-T10 (15 kWh 3-fase) = €18.500, 75% groen rijden, terugverdientijd 8-10 jaar. (4) 25.000+ km: 25 panelen (10 kWp) + SMILE-T10 (20 kWh 3-fase) = €22.000, 80% groen rijden, terugverdientijd 7-9 jaar. Algemene vuistregel: 1 kWp per 1.000 km/jaar + 1 kWh batterij per 1.500 km/jaar."
    },
    {
      question: "Wat zijn de kosten van thuisladen met en zonder batterij?",
      answer: "Enorm verschil - kosten per 100 km: (1) Publieke laadpaal: €12-15 (€0,70/kWh × 20 kWh), (2) Snellader: €14-18 (€0,80/kWh × 20 kWh), (3) Thuis zonder batterij: €7-8 (€0,40/kWh × 20 kWh), (4) Thuis met batterij + zonnepanelen: €1-2 (€0,08/kWh restinkoop × 20 kWh). Bij 15.000 km/jaar = 150× laden: publiek €1.950, snellader €2.250, thuis net €1.125, thuis batterij €225. Verschil: €1.725/jaar goedkoper met batterij vs. publiek laden! Vergelijk benzine: 15.000 km × €0,15/km = €2.250 → EV met batterij = €225 = 10× goedkoper dan benzine."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij + Elektrische Auto | €1.200-2.000/Jaar Besparing | V2H Ready | StayCool Airco"
        description="Laad je EV met zonnestroom via thuisbatterij ✓ €1.200-2.000/jaar besparing ✓ V2H ready ✓ AlphaESS installatie Limburg"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          serviceType: "Thuisbatterij Elektrische Auto Installatie",
          description: "Complete installatie van thuisbatterij, zonnepanelen en laadpaal voor elektrische auto. Laad je EV met zonnestroom en bespaar €1.200-2.000 per jaar op laadkosten.",
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
            Thuisbatterij + Elektrische Auto: Laad Je EV Met Zonnestroom voor €0,05/kWh
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            De perfecte combinatie: zonnepanelen produceren, batterij slaat op, jij laadt je elektrische auto 's avonds met eigen groene stroom. Bespaar €1.200-2.000/jaar vs. publiek laden!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis EV + Batterij Advies
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
              <Car className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Publiek Laden = €0,70/kWh, Thuis Met Batterij = €0,05/kWh</p>
                <p className="text-sm">
                  Bij 15.000 km/jaar = €2.100 publiek vs. €225 thuis = €1.875 besparing per jaar!
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
              Waarom Thuisbatterij + EV de Slimste Investering Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eigen 'tankstation' met 100% groene stroom tegen marginale kosten
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
              Waarom EV-Bezitters Thuisbatterij Nodig Hebben
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              <strong>Elektrische auto's</strong> zijn goedkoop in gebruik - maar alleen als je slim laadt. Publieke laadpalen kosten €0,60-0,80/kWh, thuis uit het net €0,35-0,40/kWh. Bij 15.000 km/jaar (3.000 kWh) = €1.050-2.400/jaar aan laadkosten. Dat is veel geld voor 'gratis' zonne-energie die overdag wordt geproduceerd!
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Een <strong>thuisbatterij</strong> lost dit op: sla overdag zonne-energie op en laad je EV 's avonds met deze opgeslagen stroom tegen €0/kWh. Bij 60-80% groene kilometers = €1.200-2.000 besparing per jaar vs. publiek/net laden. Daarnaast: altijd volle batterij 's ochtends (comfort), 100% groene kilometers (duurzaam), onafhankelijk van laadpalen (gemak). De perfecte synergie!
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              4 Scenario's: Hoe Batterij EV-Laden Optimaliseert
            </h2>

            <div className="space-y-6 mb-8">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start mb-4">
                    {scenario.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{scenario.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 rounded p-4">
                      <p className="text-sm font-bold text-red-700 mb-2">❌ Zonder Batterij:</p>
                      <p className="text-sm text-gray-700">{scenario.before}</p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm font-bold text-green-700 mb-2">✅ Met Batterij:</p>
                      <p className="text-sm text-gray-700">{scenario.after}</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 mb-3">
                    <p className="text-center">
                      <span className="font-bold text-gray-900">Besparing: </span>
                      <span className="text-xl font-bold text-green-600">{scenario.saving}</span>
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">{scenario.explanation}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Welke Batterij + Zonnepanelen Voor Jouw Kilometers?
            </h2>

            <div className="space-y-8 mb-8">
              {calculations.map((calc, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{calc.kmPerYear}</h3>
                        <p className="text-sm">{calc.consumption} EV-verbruik</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Jaarlijkse Besparing</p>
                        <p className="text-2xl font-bold">{calc.saving}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Batterij</p>
                        <p className="text-lg font-bold text-gray-900">{calc.battery}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Zonnepanelen</p>
                        <p className="text-lg font-bold text-gray-900">{calc.solarPanels}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Laadmethode</p>
                        <p className="text-sm font-bold text-gray-900">{calc.method}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Zonder Batterij</p>
                          <p className="text-xl font-bold text-red-600">{calc.netCost}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Met Batterij</p>
                          <p className="text-xl font-bold text-green-600">{calc.batteryCost}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700">
                        <strong>Terugverdientijd:</strong> {calc.payback}
                      </p>
                    </div>
                    <p className="text-gray-700 text-center mt-3 text-sm">
                      <strong>Advies:</strong> {calc.verdict}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Kostenvergelijking: Thuisladen Met Batterij vs. Alternatieven
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Laadmethode</th>
                    <th className="px-4 py-3 text-left">Kosten/kWh</th>
                    <th className="px-4 py-3 text-left">Kosten 15.000 km</th>
                    <th className="px-4 py-3 text-left">Gemak</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comp, index) => (
                    <tr key={index} className={index === 3 ? 'bg-green-50 font-bold' : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3">{comp.method}</td>
                      <td className="px-4 py-3">{comp.costPerkWh}</td>
                      <td className="px-4 py-3">
                        <span className={index === 3 ? 'text-green-600' : 'text-gray-900'}>{comp.cost15000km}</span>
                      </td>
                      <td className="px-4 py-3 text-sm">{comp.convenience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="font-bold text-gray-900 mb-2">💰 Enorme Besparing:</p>
              <p className="text-gray-700">
                Bij 15.000 km/jaar: <strong>€2.100 publiek laden vs. €225 thuis met batterij = €1.875 besparing per jaar!</strong> Dit maakt thuisbatterij nog aantrekkelijker: terugverdientijd verkort van 15 jaar (alleen huis) naar 8-12 jaar (huis + EV).
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              6 Tips Voor Optimale EV + Batterij Combinatie
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
            Klaar Voor Je Eigen Groene Tankstation?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Laat ons je helpen met de perfecte combinatie: zonnepanelen + thuisbatterij + laadpaal. Bespaar €1.200-2.000/jaar op EV-laadkosten!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis EV + Batterij Advies
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
            Veelgestelde Vragen over Thuisbatterij + Elektrische Auto
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
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-zonnepanelen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Sun className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Batterij + Zonnepanelen</h3>
              <p className="text-sm text-gray-600 mb-3">Perfecte combinatie voor zelfvoorziening</p>
              <p className="text-yellow-600 font-bold">70-90% onafhankelijk</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-g3-t10"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE-G3-T10</h3>
              <p className="text-sm text-gray-600 mb-3">3-fase batterij ideaal voor EV</p>
              <p className="text-yellow-600 font-bold">10-20 kWh capaciteit</p>
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
            Rijd 60-80% Groene Kilometers Met Eigen Zonnestroom
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            €1.200-2.000/jaar besparing, 100% groene stroom, 0% BTW, 10 jaar garantie. Complete installatie door gecertificeerde monteurs in Limburg.
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

export default ThuisbatterijElektrischeAutoPage;
