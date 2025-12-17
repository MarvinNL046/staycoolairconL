import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, CheckCircle, Calculator, Phone, Zap, Home, TrendingUp, ArrowRight, AlertCircle, Users } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijCapaciteitKiezenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Capaciteit Kiezen' }
  ];

  const usps = [
    {
      icon: <Calculator className="h-12 w-12 text-yellow-500" />,
      title: "30-50% van Dagverbruik",
      description: "Vuistregel voor optimale capaciteit: sla 30-50% van dagelijks verbruik op"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "2,9-30 kWh Bereik",
      description: "Van compact 2,9 kWh voor starters tot 30 kWh voor grote huishoudens"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "Modulair Uitbreidbaar",
      description: "SMILE5 systeem groeit mee - begin klein en breid later uit indien gewenst"
    },
    {
      icon: <Home className="h-12 w-12 text-yellow-500" />,
      title: "Gratis Maatwerk Advies",
      description: "Wij berekenen exact welke capaciteit perfect past bij uw situatie"
    }
  ];

  const capacityGuide = [
    {
      capacity: "2,9 kWh (SMILE-B3)",
      dailyConsumption: "6-10 kWh/dag",
      yearlyConsumption: "2.000-3.500 kWh/jaar",
      household: "1-2 personen, appartement, starterswoning",
      solarPanels: "6-8 panelen (2,4-3,2 kWp)",
      coverage: "30-40% eigen verbruik 's avonds",
      investment: "€4.545",
      yearlyBenefit: "€300-400",
      advantages: "Compacte afmetingen, lage investering, ideaal voor kleine ruimtes",
      disadvantages: "Beperkte capaciteit, niet geschikt voor grote huishoudens of EV",
      bestFor: "Starters, appartementen, alleenstaanden, lage energieverbruik"
    },
    {
      capacity: "5 kWh (SMILE5 Basis)",
      dailyConsumption: "10-15 kWh/dag",
      yearlyConsumption: "3.500-5.500 kWh/jaar",
      household: "2-3 personen, tussenwoning, rijtjeshuis",
      solarPanels: "8-12 panelen (3,2-4,8 kWp)",
      coverage: "40-60% eigen verbruik 's avonds",
      investment: "€5.785",
      yearlyBenefit: "€500-700",
      advantages: "Beste prijs-kwaliteit, modulair uitbreidbaar, meest gekozen",
      disadvantages: "Mogelijk te klein voor grote huishoudens of EV",
      bestFor: "Gemiddelde gezinnen, standaard verbruik, kostenefficiënt"
    },
    {
      capacity: "10 kWh (SMILE5 Uitgebreid)",
      dailyConsumption: "15-25 kWh/dag",
      yearlyConsumption: "5.500-9.000 kWh/jaar",
      household: "3-5 personen, vrijstaand huis, of met elektrische auto",
      solarPanels: "12-18 panelen (4,8-7,2 kWp)",
      coverage: "60-75% eigen verbruik 's avonds + EV laden",
      investment: "€7.438",
      yearlyBenefit: "€800-1.200",
      advantages: "Hoge capaciteit, perfect voor EV, snelle terugverdientijd",
      disadvantages: "Hogere investering, meer ruimte nodig",
      bestFor: "Grote gezinnen, EV-bezitters, hoog energieverbruik"
    },
    {
      capacity: "10 kWh 3-Fase (SMILE-T10)",
      dailyConsumption: "20-30 kWh/dag",
      yearlyConsumption: "7.000-11.000 kWh/jaar",
      household: "Groot huishouden met EV, of zakelijk gebruik",
      solarPanels: "15-25 panelen (6-10 kWp)",
      coverage: "70-85% zelfvoorzieningsgraad",
      investment: "€10.744",
      yearlyBenefit: "€1.200-1.800",
      advantages: "3-fase aansluiting, snelladen, peak shaving, zakelijk gebruik",
      disadvantages: "Hoogste investering, 3-fase aansluiting vereist",
      bestFor: "EV-bezitters, zakelijk, groot verbruik, 3-fase installatie"
    },
    {
      capacity: "15-30 kWh (SMILE5 XL)",
      dailyConsumption: "30-60 kWh/dag",
      yearlyConsumption: "11.000-22.000 kWh/jaar",
      household: "Zeer groot huishouden, meerdere EV's, zakelijk",
      solarPanels: "25-40 panelen (10-16 kWp)",
      coverage: "80-95% zelfvoorzieningsgraad",
      investment: "€11.000-15.000",
      yearlyBenefit: "€1.800-3.000",
      advantages: "Maximale onafhankelijkheid, meerdere EV's, back-up capaciteit",
      disadvantages: "Zeer hoge investering, veel ruimte nodig, overgedimensioneerd risico",
      bestFor: "Premium segmentatie, bedrijven, luxe woningen, off-grid ambities"
    }
  ];

  const calculationSteps = [
    {
      step: "1",
      title: "Bepaal Uw Dagelijks Verbruik",
      description: "Check uw jaarverbruik (kWh) op energierekening en deel door 365. Of bekijk slimme meter voor dagelijks gemiddelde.",
      example: "4.000 kWh/jaar ÷ 365 = 11 kWh/dag gemiddeld verbruik",
      tips: [
        "Let op: winterverbruik hoger dan zomer",
        "Check pieken: dagen met hoog verbruik bepalen piekbehoefte",
        "EV-verbruik apart meenemen: gemiddeld 3-4 kWh/dag extra"
      ]
    },
    {
      step: "2",
      title: "Analyseer Uw Verbruikspatroon",
      description: "Wanneer verbruikt u het meest? Overdag (bij zon) of 's avonds/nachts? Dit bepaalt hoeveel batterijcapaciteit u nodig heeft.",
      example: "Gezin verbruikt 70% 's avonds (17:00-23:00) = hogere batterijbehoefte",
      tips: [
        "Avondverbruik: batterij essentieel voor opslag zonne-energie",
        "Dagverbruik: minder urgent, maar nog steeds voordelig",
        "Nachtverbruik: batterij kan dag én avondoverschot opslaan"
      ]
    },
    {
      step: "3",
      title: "Bereken Avond/Nacht Verbruik",
      description: "Hoeveel kWh verbruikt u tussen 17:00-07:00? Dit is de capaciteit die uw batterij moet dekken voor maximale zelfvoorziening.",
      example: "11 kWh/dag × 70% avond/nacht = 7,7 kWh te dekken",
      tips: [
        "Check slimme meter voor uurverbruik",
        "Schat grote verbruikers: koken (2 kWh), tv (0,5 kWh), verlichting (1 kWh)",
        "EV laden 's nachts? Tel dit apart mee (20-30 kWh per laadbeurt)"
      ]
    },
    {
      step: "4",
      title: "Pas 30-50% Vuistregel Toe",
      description: "Batterij hoeft niet 100% avondverbruik te dekken. 30-50% is optimaal voor prijs-prestatie balans en terugverdientijd.",
      example: "7,7 kWh avondverbruik × 40% = 3,1 kWh batterij capaciteit ideaal",
      tips: [
        "30%: minimale impact, snelste terugverdientijd",
        "40-50%: beste balans prijs-besparing (standaard advies)",
        "60-80%: maximale onafhankelijkheid, langere terugverdientijd",
        "100%: alleen bij off-grid ambitie of frequente stroomuitval"
      ]
    },
    {
      step: "5",
      title: "Check Zonnepanelen Opbrengst",
      description: "Uw zonnepanelen moeten voldoende overtollige energie leveren om batterij te vullen. Check of balans klopt.",
      example: "10 panelen (4 kWp) leveren 11 kWh/dag, waarvan 6 kWh overschot in zomer",
      tips: [
        "Zomermaanden: groot overschot, batterij volledig benutten",
        "Wintermaanden: minder overschot, batterij deels benutten",
        "Jaargemiddelde: rekenen met 50-70% benutting is realistisch",
        "Te weinig panelen? Overweeg eerst panelen uitbreiden"
      ]
    },
    {
      step: "6",
      title: "Denk Vooruit: Toekomstige Plannen",
      description: "Plant u elektrische auto? Warmtepomp? Uitbreiding gezin? Reken hier alvast rekening mee of kies modulair systeem.",
      example: "Nu 5 kWh SMILE5, over 2 jaar EV → later uitbreiden naar 10 kWh",
      tips: [
        "SMILE5 modulair: begin klein, breid later uit zonder nieuw systeem",
        "EV plannen? Reken +3-4 kWh/dag verbruik (1.200 kWh/jaar)",
        "Warmtepomp? Reken +2.500-4.000 kWh/jaar verbruik",
        "Uitbreiding gezin? +500-1.000 kWh/jaar per persoon"
      ]
    }
  ];

  const mistakes = [
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      mistake: "Te Grote Batterij Kiezen",
      why: "Overcapaciteit = langere terugverdientijd en onnodig hoge investering. Batterij wordt niet volledig benut.",
      impact: "1-3 jaar langere terugverdientijd, €1.000-3.000 gemiste efficiency",
      solution: "Volg 30-50% vuistregel. Start klein en breid uit indien nodig (SMILE5)."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      mistake: "Te Kleine Batterij Kiezen",
      why: "Gemiste besparingspotentieel. U verbruikt meer 's avonds dan batterij kan leveren, dus koopt u nog veel van het net.",
      impact: "€200-500/jaar gemiste besparing, achteraf uitbreiden is duurder",
      solution: "Bereken realistisch avondverbruik en dek minimaal 40%. Liever iets ruimer dan te krap."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      mistake: "Toekomst Niet Meenemen",
      why: "EV kopen over 2 jaar maar nu te kleine batterij geïnstalleerd. Uitbreiden is duurder dan direct juiste keuze.",
      impact: "Extra installatiekosten €500-1.000, gemiste besparing €300-600/jaar",
      solution: "Kies modulair systeem (SMILE5) of reken vooruit. SMILE-T10 bij EV-plannen binnen 3 jaar."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      mistake: "Alleen op Prijs Letten",
      why: "Goedkoopste batterij is niet altijd beste keuze. Capaciteit moet matchen met verbruik voor optimale ROI.",
      impact: "Verkeerde verwachtingen, teleurstelling over besparingen, langere terugverdientijd",
      solution: "Focus op € besparing per jaar én terugverdientijd. Niet op aanschafprijs alleen."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      mistake: "Seizoensvariatie Negeren",
      why: "Zomer: veel zon, batterij volledig benut. Winter: weinig zon, batterij deels benut. Jaargemiddelde is leidend.",
      impact: "Overschatting besparingen, verkeerde capaciteitskeuze",
      solution: "Reken met 60-70% benutting over gehele jaar. Niet op zomerpieken dimensioneren."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      mistake: "Zonnepanelen Balans Vergeten",
      why: "Te kleine PV-installatie voor grote batterij = batterij wordt nooit vol. Te groot PV voor kleine batterij = gemist potentieel.",
      impact: "Sub-optimale systeemconfiguratie, langere terugverdientijd",
      solution: "Vuistregel: 1 kWh batterij per 1-1,5 kWp zonnepanelen voor optimale balans."
    }
  ];

  const faqs = [
    {
      question: "Hoeveel kWh batterijcapaciteit heb ik nodig voor een gemiddeld gezin?",
      answer: "Voor een gemiddeld Nederlands gezin (2-4 personen) met 3.500-5.000 kWh jaarverbruik is 5-7 kWh batterijcapaciteit ideaal. Dit dekt 40-50% van avondverbruik en heeft een terugverdientijd van 9-11 jaar. Met elektrisch rijden adviseren we 10 kWh voor optimale balans tussen investering en besparing."
    },
    {
      question: "Kan mijn batterij ooit te groot zijn?",
      answer: "Ja, een te grote batterij is zonde van uw investering. Als uw batterij nooit volledig geladen/ontladen wordt, betaalt u voor onbenutte capaciteit. Dit verlengt de terugverdientijd met 1-4 jaar. Vuistregel: batterij moet gemiddeld 1x per dag cycleren (vol → leeg → vol). Bij minder: overweeg kleinere capaciteit."
    },
    {
      question: "Wat is de vuistregel voor capaciteit ten opzichte van zonnepanelen?",
      answer: "Vuistregel: 1 kWh batterijcapaciteit per 1-1,5 kWp aan zonnepanelen. Voorbeelden: 4 kWp PV = 3-5 kWh batterij, 6 kWp PV = 5-8 kWh batterij, 10 kWp PV = 8-12 kWh batterij. Dit zorgt voor optimale balans - voldoende overschot om batterij te vullen zonder overcapaciteit."
    },
    {
      question: "Hoe bereken ik hoeveel kWh ik 's avonds verbruik?",
      answer: "Methode 1: Check slimme meter voor uurverbruik tussen 17:00-23:00. Tel op voor gemiddelde avond. Methode 2: Schat grote verbruikers - koken (2 kWh), tv/entertainment (1 kWh), verlichting (0,5 kWh), boiler (1,5 kWh), wasmachine/droger (2 kWh). Gemiddeld gezin: 6-9 kWh per avond. Vermenigvuldig met 40-50% voor ideale batterijcapaciteit."
    },
    {
      question: "Is het slim om direct een grote batterij te kopen voor toekomstige elektrische auto?",
      answer: "Alleen als u binnen 2 jaar een EV koopt. Anders betaalt u jaren voor onbenutte capaciteit (langere terugverdientijd). Slimme optie: kies modulair systeem zoals SMILE5. Begin met 5 kWh, breid uit naar 10-15 kWh wanneer u daadwerkelijk EV koopt. Dit optimaliseert ROI en voorkomt overcapaciteit."
    },
    {
      question: "Wat is het verschil tussen bruikbare en totale capaciteit?",
      answer: "Totale capaciteit is fysieke batterijgrootte. Bruikbare capaciteit is wat u daadwerkelijk kunt gebruiken (meestal 90-95%). Voorbeeld: SMILE5 heeft 5,0 kWh totaal, waarvan 4,75 kWh bruikbaar. AlphaESS gebruikt LFP-technologie met 90-95% bruikbare capaciteit. Concurrenten soms maar 80-85%. Wij geven altijd bruikbare capaciteit aan."
    },
    {
      question: "Kan ik mijn batterij later uitbreiden?",
      answer: "Bij SMILE5: ja, modulair uitbreidbaar van 5 naar 30 kWh door extra batterijtorens. Extra kosten: €1.653 per 5 kWh module plus €200 installatiekosten. SMILE-B3 en SMILE-T10: niet uitbreidbaar, capaciteit is vast. Daarom adviseren we SMILE5 bij twijfel - u koopt niet meer dan u nu nodig heeft, maar kunt altijd groeien."
    },
    {
      question: "Hoe vaak moet mijn batterij cycleren voor optimale levensduur?",
      answer: "AlphaESS LFP-batterijen zijn ontworpen voor 6.000+ cycli bij 90% DoD (Depth of Discharge). Dat betekent: 1x per dag volledig cycleren = 16+ jaar levensduur. Voor optimale ROI willen we 0,7-1,2 cycli per dag. Minder = onderbenutte capaciteit. Meer = snelle slijtage (geldt niet voor LFP, wel voor andere technologieën). LFP: geen degradatie bij frequenter gebruik."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Capaciteit Kiezen: kWh Gids 2025 | StayCool Airco"
        description="Juiste thuisbatterij capaciteit kiezen ✓ 2,9-30 kWh bereik ✓ 30-50% vuistregel ✓ Bereken uw ideale kWh ✓ Gratis maatwerk advies ✓ Limburg!"
      />

      <SchemaMarkup
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: "Hoe kies je de juiste thuisbatterij capaciteit",
          description: "Stapsgewijze handleiding voor het kiezen van de juiste kWh-capaciteit voor uw thuisbatterij op basis van verbruik en situatie.",
          step: calculationSteps.map(step => ({
            "@type": "HowToStep",
            name: step.title,
            text: step.description
          }))
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Capaciteit Kiezen: Hoeveel kWh Heeft U Nodig?
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Ontdek welke batterijcapaciteit perfect past bij uw situatie. Van compact 2,9 kWh tot krachtige 30 kWh - met praktische vuistregel van 30-50% van dagelijks verbruik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Ideale Capaciteit
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Maatwerk Advies
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Battery className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Vuistregel Capaciteit</p>
                <p className="text-sm">
                  Sla 30-50% van uw dagelijks verbruik op voor optimale balans tussen investering en besparing. Te groot = onnodig duur, te klein = gemiste kansen.
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
              De Juiste Capaciteit Bepaalt Uw Succes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Niet te groot, niet te klein - precies wat u nodig heeft
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

      {/* Capacity Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Capaciteit Overzicht: Van Klein tot Groot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volledige vergelijking om uw ideale capaciteit te vinden
            </p>
          </div>

          <div className="space-y-8">
            {capacityGuide.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{item.capacity}</h3>
                    <span className="text-lg font-semibold">{item.investment}</span>
                  </div>
                  <p className="text-sm mt-1">{item.household}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Verbruik:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Per dag:</strong> {item.dailyConsumption}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Per jaar:</strong> {item.yearlyConsumption}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Dekking:</strong> {item.coverage}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Systeem:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Panelen:</strong> {item.solarPanels}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Investering:</strong> {item.investment}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Besparing:</strong> <span className="text-green-600 font-bold">{item.yearlyBenefit}</span></span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Geschikt voor:</h4>
                      <p className="text-gray-700 text-sm mb-3">{item.bestFor}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm text-gray-700"><strong className="text-green-700">Voordelen:</strong> {item.advantages}</p>
                    </div>
                    <div className="bg-red-50 rounded p-4">
                      <p className="text-sm text-gray-700"><strong className="text-red-700">Nadelen:</strong> {item.disadvantages}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              In 6 Stappen: Bereken Uw Ideale Capaciteit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volg deze systematische aanpak voor de perfecte keuze
            </p>
          </div>

          <div className="space-y-8">
            {calculationSteps.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-3">
                      <p className="text-sm font-semibold text-gray-900">Voorbeeld:</p>
                      <p className="text-sm text-gray-700">{item.example}</p>
                    </div>
                    <div className="bg-white rounded p-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Tips:</p>
                      <ul className="space-y-1">
                        {item.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelgemaakte Fouten bij Capaciteitskeuze
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vermijd deze kostbare vergissingen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mistakes.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{item.mistake}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Waarom fout:</p>
                    <p className="text-sm text-gray-700">{item.why}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-red-700 mb-1">Impact:</p>
                    <p className="text-sm text-gray-700">{item.impact}</p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold text-green-700 mb-1">Oplossing:</p>
                    <p className="text-sm text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Twijfelt U Over de Juiste Capaciteit?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij berekenen gratis de optimale kWh voor uw situatie. Inclusief verbruiksanalyse, systeemadvies en ROI-berekening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Uw Capaciteit
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
            Veelgestelde Vragen over Batterij Capaciteit
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

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Bekijk Onze AlphaESS Capaciteiten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-b3"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE-B3</h3>
              <p className="text-sm text-gray-600 mb-3">2,9 kWh compact</p>
              <p className="text-yellow-600 font-bold">Voor 1-2 personen</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE5</h3>
              <p className="text-sm text-gray-600 mb-3">5-30 kWh modulair</p>
              <p className="text-yellow-600 font-bold">Meest gekozen</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-t10"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE-T10</h3>
              <p className="text-sm text-gray-600 mb-3">10 kWh 3-fase</p>
              <p className="text-yellow-600 font-bold">Voor EV-bezitters</p>
            </Link>

            <Link
              to="/besparingcalculator"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Calculator className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calculator</h3>
              <p className="text-sm text-gray-600 mb-3">Bereken uw ideale kWh</p>
              <p className="text-yellow-600 font-bold">Gratis advies</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maak de Juiste Keuze - Eerste Keer Goed
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            De juiste capaciteit kiest u maar één keer. Wij helpen u de perfecte balans te vinden tussen investering, besparing en toekomstbestendigheid. Gratis advies binnen 24 uur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Gratis Advies
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Online Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijCapaciteitKiezenPage;
