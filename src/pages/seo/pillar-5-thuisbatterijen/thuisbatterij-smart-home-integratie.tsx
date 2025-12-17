import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, Wifi, Phone, Home, Zap, Settings, ArrowRight, Battery, Cloud } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijSmartHomeIntegratiePage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Smart Home Integratie' }
  ];

  const usps = [
    {
      icon: <Home className="h-12 w-12 text-yellow-500" />,
      title: "Home Assistant Integratie",
      description: "Volledige integratie met Home Assistant via Modbus TCP voor ultieme controle"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-yellow-500" />,
      title: "AlphaCloud App",
      description: "Native app met real-time monitoring, configuratie en notificaties"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Automatische Optimalisatie",
      description: "Slimme laad/ontlaadstrategie op basis van weersvoorspelling en verbruik"
    },
    {
      icon: <Cloud className="h-12 w-12 text-yellow-500" />,
      title: "Cloud + Lokaal",
      description: "Werkt zowel met internet als lokaal netwerk (fallback bij storing)"
    }
  ];

  const platforms = [
    {
      name: "Home Assistant",
      logo: "🏠",
      integration: "Officiële Modbus TCP integratie",
      difficulty: "Gemiddeld (technische kennis vereist)",
      features: [
        "Volledige controle over alle batterijparameters",
        "Real-time monitoring SOC, vermogen, temperatuur",
        "Automatiseringen op basis van batterijstatus",
        "Energie dashboard integratie",
        "Notificaties bij lage SOC of problemen",
        "Laad/ontlaad schema's programmeren"
      ],
      setup: "Modbus TCP integratie via YAML configuratie",
      cost: "Gratis (Home Assistant is open source)",
      recommendation: "Perfect voor tech-savvy gebruikers die ultieme controle willen",
      guide: "https://www.home-assistant.io/integrations/modbus/"
    },
    {
      name: "AlphaCloud App (Officieel)",
      logo: "☁️",
      integration: "Native AlphaESS app",
      difficulty: "Eenvoudig (plug & play)",
      features: [
        "Real-time monitoring batterij, PV, verbruik",
        "Historische grafieken (dag/week/maand/jaar)",
        "Werkingsmodus aanpassen (zelfverbruik/back-up/dynamisch)",
        "Laad/ontlaad limieten instellen",
        "Push notificaties bij problemen",
        "Remote configuratie en updates"
      ],
      setup: "App downloaden, QR-code scannen, klaar",
      cost: "Gratis (inclusief bij AlphaESS systemen)",
      recommendation: "Beste keuze voor iedereen - eenvoudig en compleet",
      guide: "Meegeleverd bij installatie"
    },
    {
      name: "Google Home / Alexa",
      logo: "🎤",
      integration: "Via Home Assistant als bridge",
      difficulty: "Moeilijk (vereist Home Assistant setup)",
      features: [
        "Spraakcommando's: 'Hoeveel % heeft de batterij?'",
        "Status opvragen via voice assistant",
        "Beperkte controle (veiligheidszones actief)",
        "Integratie met routines en scenes"
      ],
      setup: "Home Assistant + Google/Alexa integratie configureren",
      cost: "Gratis (wel Google/Alexa apparaat nodig)",
      recommendation: "Leuk extraatje, maar niet essentieel",
      guide: "Via Home Assistant community"
    },
    {
      name: "Homey / Domoticz",
      logo: "🏡",
      integration: "Mogelijk via Modbus of MQTT bridge",
      difficulty: "Moeilijk (custom integratie)",
      features: [
        "Batterijstatus beschikbaar in Homey flows",
        "Automatiseringen op basis van SOC",
        "Beperkte configuratie mogelijkheden",
        "Community-supported plugins"
      ],
      setup: "Custom integratie via community plugins",
      cost: "Gratis plugins beschikbaar",
      recommendation: "Alleen indien u al Homey/Domoticz gebruikt",
      guide: "Homey/Domoticz community forums"
    }
  ];

  const automations = [
    {
      title: "Dynamisch Laden op Basis van Stroomprijs",
      platform: "Home Assistant + Dynamisch Tarief",
      description: "Laad batterij wanneer stroom goedkoop is, ontlaad tijdens dure uren.",
      trigger: "Elektriciteitsprijs < €0,10/kWh",
      action: "Forceer batterij laden vanaf net",
      benefit: "€300-600/jaar extra besparing bovenop zelfverbruik",
      complexity: "Gemiddeld - vereist dynamisch energiecontract + HA configuratie",
      example: "Nachttarief €0,08/kWh: laden. Avondpiek €0,50/kWh: ontladen. Verschil: €0,42/kWh winst."
    },
    {
      title: "Slim Laden op Basis van Weersvoorspelling",
      platform: "Home Assistant + Weersintegratie",
      description: "Voorkom overladen bij verwachte zonnige dag, laad extra bij bewolkte verwachting.",
      trigger: "Weersvoorspelling morgen: <30% zon verwacht",
      action: "Laad batterij 's nachts naar 100% vanaf net (goedkoop tarief)",
      benefit: "Optimale benutting batterij ongeacht weer, geen verspilling",
      complexity: "Gemiddeld - vereist weersintegratie + automatiseringslogica",
      example: "Maandag bewolkt verwacht: batterij vol laden zondag avond. Dinsdag zonnig: batterij niet vol laden, PV doet het werk."
    },
    {
      title: "Automatisch EV Laden uit Batterij",
      platform: "Home Assistant + Laadpaal Integratie",
      description: "Start EV-laden automatisch wanneer batterij vol is en overdag zon schijnt.",
      trigger: "Batterij SOC &gt;90% EN PV overschot &gt;kW",
      action: "Start EV-laadpaal en laad met PV+batterij",
      benefit: "Maximaal zonne-energie benutten, batterij optimaal cycleren",
      complexity: "Gemiddeld - vereist slimme laadpaal (OCPP of Modbus)",
      example: "Zaterdag middag: batterij vol, zon schijnt, EV staat in oprit → automatisch laden gestart."
    },
    {
      title: "Wasmachine/Droger Starten bij Overschot",
      platform: "Home Assistant + Slimme Stekkers",
      description: "Start grote verbruikers automatisch wanneer PV-overschot beschikbaar is.",
      trigger: "PV overschot &gt;kW voor &gt;0 minuten",
      action: "Schakel slimme stekker in voor wasmachine (vooraf ingevuld)",
      benefit: "Gratis wassen met zonne-energie, batterij blijft vol voor avond",
      complexity: "Eenvoudig - alleen slimme stekker nodig (€15-30)",
      example: "Dinsdag 13:00: zon schijnt, overschot 3kW → wasmachine automatisch gestart (was vooraf ingeladen)."
    },
    {
      title: "Notificatie bij Lage Batterij",
      platform: "AlphaCloud App of Home Assistant",
      description: "Ontvang push notificatie wanneer batterij onder bepaald percentage komt.",
      trigger: "Batterij SOC <20% EN geen PV-opbrengst verwacht",
      action: "Stuur notificatie: 'Batterij bijna leeg, verminder verbruik'",
      benefit: "Bewustwording verbruik, voorkom volledig lege batterij",
      complexity: "Eenvoudig - standaard functie in AlphaCloud app",
      example: "Winteravond 21:00: batterij 18%, geen zon morgen → notificatie om zuinig te doen tot morgen."
    },
    {
      title: "Back-up Modus bij Slecht Weer",
      platform: "Home Assistant + Weersintegratie",
      description: "Schakel automatisch naar back-up modus bij storm/onweer (stroompanne-risico).",
      trigger: "Weerswaarschuwing code oranje/rood",
      action: "Schakel batterij naar back-up modus (reserveer 50% capaciteit)",
      benefit: "Altijd reserve bij stroomuitval, gemoedsrust",
      complexity: "Gemiddeld - vereist weerswaarschuwing integratie",
      example: "KNMI code oranje storm: batterij automatisch reserveren voor noodstroom."
    }
  ];

  const setupGuides = [
    {
      platform: "AlphaCloud App",
      steps: [
        {
          step: "1",
          title: "Download App",
          description: "AlphaCloud app downloaden uit App Store (iOS) of Google Play (Android).",
          details: "Gratis app, werkt op alle smartphones en tablets vanaf iOS 12 / Android 8."
        },
        {
          step: "2",
          title: "Account Aanmaken",
          description: "Maak account aan met e-mailadres en wachtwoord.",
          details: "Account is nodig voor cloud synchronisatie en remote toegang."
        },
        {
          step: "3",
          title: "Systeem Toevoegen",
          description: "Scan QR-code op inverter of voer serienummer handmatig in.",
          details: "QR-code staat op zijkant inverter. Serienummer is 10 cijfers."
        },
        {
          step: "4",
          title: "WiFi Configureren",
          description: "Koppel batterij aan uw WiFi-netwerk via app.",
          details: "Selecteer uw netwerk, voer wachtwoord in, batterij maakt verbinding. Duurt ~2 minuten."
        },
        {
          step: "5",
          title: "Installatie Voltooien",
          description: "Vul systeeminformatie in: PV-vermogen, batterijcapaciteit, locatie.",
          details: "Deze data gebruikt AlphaESS voor optimalisatie en statistieken."
        },
        {
          step: "6",
          title: "Klaar!",
          description: "Dashboard toont nu real-time data. Begin met verkennen.",
          details: "Wijzig werkingsmodus, bekijk grafieken, stel notificaties in."
        }
      ]
    },
    {
      platform: "Home Assistant (Modbus TCP)",
      steps: [
        {
          step: "1",
          title: "Batterij IP-Adres Bepalen",
          description: "Zoek IP-adres van batterij in router of via AlphaCloud app.",
          details: "Router → Aangesloten apparaten → AlphaESS. Of app → Settings → Network Info."
        },
        {
          step: "2",
          title: "Modbus TCP Inschakelen",
          description: "Activeer Modbus TCP op batterij via lokale webinterface of app.",
          details: "Standaard uitgeschakeld om veiligheid. Inschakelen: Settings → Advanced → Modbus TCP."
        },
        {
          step: "3",
          title: "HA Configuratie",
          description: "Voeg Modbus TCP integratie toe in Home Assistant configuration.yaml.",
          details: "Code beschikbaar op HA community. Configureer IP, poort 502, registers."
        },
        {
          step: "4",
          title: "Entities Toevoegen",
          description: "Definieer sensors en switches voor batterij parameters.",
          details: "SOC, power, voltage, temperature als sensors. Charge/discharge control als switches."
        },
        {
          step: "5",
          title: "Dashboard Maken",
          description: "Maak energy dashboard in HA met batterij entities.",
          details: "HA Energy dashboard toont nu batterij flow naast PV en verbruik."
        },
        {
          step: "6",
          title: "Automatiseringen",
          description: "Creëer automatiseringen op basis van batterij status.",
          details: "Voorbeelden: notificaties, slimme laadschema's, apparaat aansturen."
        }
      ]
    }
  ];

  const apiFeatures = [
    {
      feature: "Real-time Data",
      description: "SOC, laad/ontlaad vermogen, PV-opbrengst, verbruik, temperatuur",
      updateFrequency: "Elke 5-10 seconden",
      useCase: "Live monitoring dashboards, real-time beslissingen"
    },
    {
      feature: "Historische Data",
      description: "Dag/week/maand/jaar statistieken: opbrengst, verbruik, besparingen",
      dataRetention: "5 jaar in cloud",
      useCase: "Trend analyse, ROI berekening, seizoensvergelijking"
    },
    {
      feature: "Configuratie",
      description: "Werkingsmodus, laad/ontlaad limieten, back-up percentage wijzigen",
      permission: "Lokaal netwerk of app (cloud)",
      useCase: "Remote aanpassingen, automatische optimalisatie"
    },
    {
      feature: "Diagnostics",
      description: "Foutcodes, waarschuwingen, systeemstatus, firmware versie",
      alerts: "Push notificaties via app",
      useCase: "Proactief onderhoud, probleem detectie"
    },
    {
      feature: "Weersintegratie",
      description: "Verwachte PV-opbrengst op basis van weersvoorspelling",
      source: "AlphaESS cloud (gebruikt lokale weerdata)",
      useCase: "Slimme laadstrategieën, planning"
    }
  ];

  const faqs = [
    {
      question: "Werkt mijn thuisbatterij zonder internet of app?",
      answer: "Ja, absoluut! De batterij werkt volledig autonoom zonder internet of app. De CT-sensor detecteert overschot/tekort en batterij reageert automatisch. App en internet zijn alleen nodig voor: (1) Remote monitoring, (2) Configuratie wijzigen op afstand, (3) Firmware updates, (4) Statistieken opslaan in cloud. Bij internetstoring blijft batterij gewoon werken volgens laatste instellingen."
    },
    {
      question: "Kan ik mijn AlphaESS batterij koppelen met Home Assistant?",
      answer: "Ja, via Modbus TCP protocol. AlphaESS ondersteunt officieel Modbus voor lokale integratie. Dit geeft volledige controle over alle parameters: SOC uitlezen, laad/ontlaad forceren, werkingsmodus wijzigen. Home Assistant community heeft uitgebreide documentatie en ready-to-use configuraties. Technische kennis vereist maar veel mogelijkheden voor automatisering en optimalisatie."
    },
    {
      question: "Welke data kan ik zien in de AlphaCloud app?",
      answer: "Complete energie flow visualisatie: (1) Batterij status: SOC%, laad/ontlaad vermogen, temperatuur, (2) PV opbrengst: real-time en historisch, (3) Verbruik: huidig en dagelijks, (4) Netinteractie: inkoop/teruglevering, (5) Besparingen: dagelijks/maandelijks in euro's, (6) Grafieken: dag/week/maand/jaar overzichten, (7) Instellingen: werkingsmodus, limieten, back-up percentage. Update elke 5-10 seconden via cloud."
    },
    {
      question: "Kan ik mijn batterij automatisch laten laden bij lage stroomprijzen?",
      answer: "Ja, met slim configuratie! Opties: (1) AlphaESS app: handmatig werkingsmodus wijzigen naar 'Time of Use' en schema invoeren, (2) Home Assistant: automatisering op basis van dynamisch tarief API (EPEX, Tibber, etc.), laad forceren <€0,10/kWh, (3) AlphaESS Dynamic Pricing modus (vanaf firmware 2024): automatische integratie met dynamische contracten. Bij dynamisch contract kan dit €300-600/jaar extra opleveren bovenop zelfverbruik besparing."
    },
    {
      question: "Hoe stel ik automatiseringen in voor mijn thuisbatterij?",
      answer: "Drie niveaus: (1) Basis: AlphaCloud app timer functie - stel laad/ontlaad schema's in per tijdsblok. Eenvoudig maar beperkt. (2) Gemiddeld: Home Assistant met voorbeeldautomatiseringen uit community. Oneindig veel mogelijkheden maar technische kennis vereist. (3) Geavanceerd: Custom scripts via Node-RED of Python met Modbus API. Voor tech-experts. Wij adviseren beginners te starten met app timers, dan eventueel upgraden naar HA als u meer wilt."
    },
    {
      question: "Werkt de batterij lokaal of via internet cloud?",
      answer: "Beide! Batterij heeft dubbele besturing: (1) Lokaal: CT-sensor + interne controller regelen automatisch laad/ontlaad zonder internet. Werkt altijd, ook bij storing. (2) Cloud: AlphaCloud app communiceert via internet voor remote monitoring en configuratie. Is extra, niet essentieel. (3) Lokaal netwerk: Modbus TCP voor Home Assistant werkt puur lokaal, zonder internet afhankelijkheid. Beste van beide werelden: betrouwbaarheid lokaal + gemak cloud."
    },
    {
      question: "Kan ik mijn batterij met spraakbesturing (Google/Alexa) aansturen?",
      answer: "Beperkt mogelijk via Home Assistant als bridge. Google/Alexa ondersteunt geen directe AlphaESS integratie. Wel mogelijk: (1) HA integratie → Google Home/Alexa integratie → spraakcommando's, (2) Info opvragen: 'Hey Google, wat is batterij percentage?' werkt, (3) Aansturen: zeer beperkt vanwege veiligheidszones (batterij mag niet zomaar forceren), (4) Nuttig? Leuk extraatje maar niet essentieel - app is sneller en veiliger. Alleen voor echte smart home enthousiastelingen."
    },
    {
      question: "Hoe vaak wordt de data in de app geüpdatet?",
      answer: "Real-time monitoring met 5-10 seconden update interval via cloud. Bij lokale Modbus TCP (Home Assistant): 1-5 seconden mogelijk. Historische data: dagelijks aggregatie om 00:00. Notificaties: instant push bij foutmeldingen of waarschuwingen. Batterij zelf reageert elke seconde op CT-sensor data (interne controller), maar visualisatie in app/HA is wat trager vanwege netwerk latency. Voor meeste gebruikers is 5-10 seconden update ruim voldoende."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Smart Home Integratie | Home Assistant | AlphaCloud | StayCool Airco"
        description="Thuisbatterij smart home integratie ✓ Home Assistant Modbus ✓ AlphaCloud app ✓ Automatiseringen ✓ Dynamisch laden ✓ API toegang ✓ Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij Smart Home Integratie: Home Assistant, Apps en Automatisering",
          description: "Complete gids voor thuisbatterij smart home integratie met Home Assistant, AlphaCloud app, domotica en automatiseringen.",
          datePublished: "2025-01-15",
          dateModified: "2025-01-15",
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
            Thuisbatterij Smart Home Integratie: Home Assistant, Apps & Automatisering
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Maak uw thuisbatterij nog slimmer met Home Assistant, AlphaCloud app, automatiseringen en dynamische laadstrategieën. Van plug & play tot geavanceerde Modbus integratie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Vraag Advies
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk Systemen
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Smartphone className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">AlphaCloud App Inclusief</p>
                <p className="text-sm">
                  Elke AlphaESS batterij komt met gratis AlphaCloud app voor monitoring en configuratie. Home Assistant integratie optioneel voor advanced users.
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
              Slimme Controle & Automatisering
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van eenvoudige app tot geavanceerde home automation
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

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integratie Platforms: Wat Werkt met AlphaESS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volledige vergelijking van alle integratiemogelijkheden
            </p>
          </div>

          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{platform.logo}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{platform.name}</h3>
                      <p className="text-sm"><strong>Integratie:</strong> {platform.integration}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-1">Moeilijkheidsgraad:</p>
                        <p className="text-gray-700">{platform.difficulty}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-1">Setup:</p>
                        <p className="text-gray-700">{platform.setup}</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-1">Kosten:</p>
                        <p className="text-gray-700">{platform.cost}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">Mogelijkheden:</p>
                      <ul className="space-y-1">
                        {platform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Ons advies:</p>
                    <p className="text-sm text-gray-700">{platform.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Slimme Automatiseringen: Maximale Besparing & Comfort
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Voorbeelden van populaire automatiseringen met concrete voordelen
            </p>
          </div>

          <div className="space-y-6">
            {automations.map((auto, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{auto.title}</h3>
                  <span className={`px-3 py-1 rounded text-sm font-semibold whitespace-nowrap ml-4 ${
                    auto.complexity.includes('Eenvoudig') ? 'bg-green-100 text-green-700' :
                    auto.complexity.includes('Gemiddeld') ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {auto.complexity.split('-')[0].trim()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3"><strong>Platform:</strong> {auto.platform}</p>
                <p className="text-gray-700 mb-4">{auto.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-xs font-semibold text-blue-900 mb-1">Trigger:</p>
                    <p className="text-sm text-gray-700">{auto.trigger}</p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-xs font-semibold text-green-900 mb-1">Actie:</p>
                    <p className="text-sm text-gray-700">{auto.action}</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mb-3">
                  <p className="text-xs font-semibold text-yellow-900 mb-1">Voordeel:</p>
                  <p className="text-sm text-gray-700">{auto.benefit}</p>
                </div>
                <div className="bg-white rounded p-3 border border-gray-200">
                  <p className="text-xs font-semibold text-gray-900 mb-1">Voorbeeld scenario:</p>
                  <p className="text-sm text-gray-700 italic">{auto.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Guides Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Setup Handleidingen: Stap voor Stap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gedetailleerde instructies voor de twee populairste platformen
            </p>
          </div>

          {setupGuides.map((guide, guideIndex) => (
            <div key={guideIndex} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{guide.platform} Setup</h3>
              <div className="space-y-6">
                {guide.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-start">
                      <div className="bg-yellow-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-700 mb-2">{step.description}</p>
                        <p className="text-sm text-gray-600 bg-gray-50 rounded p-3">{step.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Mogelijkheden & Data Toegang
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wat kunt u uitlezen en configureren via API?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apiFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.feature}</h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {Object.entries(feature).filter(([key]) => !['feature', 'description'].includes(key)).map(([key, value], idx) => (
                    <div key={idx} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600"><strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</p>
                    </div>
                  ))}
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
            Wilt U Uw Batterij Slimmer Maken?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij helpen u met setup van AlphaCloud app, Home Assistant integratie en automatiseringen. Van basis tot geavanceerd - op maat voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Advies
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
            Veelgestelde Vragen over Smart Home Integratie
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
            Meer Technische Gidsen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-monitoring-app"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Smartphone className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AlphaCloud App</h3>
              <p className="text-sm text-gray-600">Monitoring, inzicht, configuratie</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-aansluiten-meterkast"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Zap className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aansluiten Meterkast</h3>
              <p className="text-sm text-gray-600">1-fase vs 3-fase, installatie</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AlphaESS Systemen</h3>
              <p className="text-sm text-gray-600">Bekijk alle batterij opties</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Slimme Controle Begint met de Juiste Setup
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Of u nu de eenvoudige AlphaCloud app wilt of geavanceerde Home Assistant automatiseringen - wij helpen u op weg. Gratis advies en setup ondersteuning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Adviesgesprek
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk Systemen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijSmartHomeIntegratiePage;
