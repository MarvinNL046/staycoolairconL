import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, TrendingUp, Phone, BarChart, Battery, Euro, Zap, ArrowRight, Cloud, Wifi } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijMonitoringAppPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'AlphaCloud App' }
  ];

  const usps = [
    {
      icon: <Smartphone className="h-12 w-12 text-yellow-500" />,
      title: "Real-time Monitoring",
      description: "Live inzicht in batterij, PV-opbrengst, verbruik en netinteractie elke 5 seconden"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "Historische Data",
      description: "5 jaar historie met grafieken per dag, week, maand en jaar"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "Besparingen Inzicht",
      description: "Automatische berekening van euro's bespaard per dag en maand"
    },
    {
      icon: <Cloud className="h-12 w-12 text-yellow-500" />,
      title: "Gratis & Altijd Beschikbaar",
      description: "Geen abonnementskosten, inclusief bij alle AlphaESS systemen"
    }
  ];

  const appFeatures = [
    {
      category: "Real-time Monitoring",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      features: [
        {
          name: "Batterij Status",
          description: "SOC% (State of Charge), laad/ontlaad vermogen (kW), spanning (V), temperatuur (°C)",
          update: "Elke 5-10 seconden",
          visual: "Circulaire SOC meter + vermogen grafiek"
        },
        {
          name: "PV Opbrengst",
          description: "Huidig PV-vermogen (kW), dagelijkse opbrengst (kWh), maandelijkse opbrengst",
          update: "Elke 5-10 seconden",
          visual: "Zonnetje icoon + real-time grafiek"
        },
        {
          name: "Verbruik",
          description: "Huidig verbruik (kW), dagelijks totaal (kWh), piekverbruik vandaag",
          update: "Elke 5-10 seconden",
          visual: "Huis icoon + verbruik grafiek"
        },
        {
          name: "Netinteractie",
          description: "Inkoop/teruglevering (kW), dagelijkse netinkoop en teruglevering (kWh)",
          update: "Elke 5-10 seconden",
          visual: "Grid icoon + pijlen voor richting"
        }
      ]
    },
    {
      category: "Energie Flow Visualisatie",
      icon: <ArrowRight className="h-8 w-8 text-yellow-500" />,
      features: [
        {
          name: "Sankey Diagram",
          description: "Visuele weergave energie flow: PV → Batterij/Verbruik/Net met dikke van stromen",
          update: "Real-time animatie",
          visual: "Pijlen met percentages en vermogen"
        },
        {
          name: "Zelfvoorzieningsgraad",
          description: "Percentage energie uit eigen systeem (PV + batterij) vs. netinkoop",
          calculation: "(PV + Batterij ontladen) / Totaal verbruik × 100%",
          visual: "Percentage ring met kleurcode groen-geel-rood"
        },
        {
          name: "Zelfverbruik Percentage",
          description: "Percentage PV-opbrengst die direct verbruikt wordt (niet teruggeleverd)",
          calculation: "(PV verbruik + batterij laden) / Totaal PV × 100%",
          visual: "Percentage balk met target indicator"
        }
      ]
    },
    {
      category: "Historische Data & Grafieken",
      icon: <BarChart className="h-8 w-8 text-yellow-500" />,
      features: [
        {
          name: "Dag Overzicht",
          description: "Uurlijkse grafieken (24 uur): PV, verbruik, batterij, net - zie precieze patronen",
          timeRange: "Vandaag of selecteer datum",
          visual: "Multi-lijnen grafiek met legenda"
        },
        {
          name: "Week Overzicht",
          description: "Dagelijkse totalen per week: kWh PV, verbruik, batterij cycli, zelfvoorzieningsgraad",
          timeRange: "Huidige week of scroll door historie",
          visual: "Staafdiagram met 7 dagen"
        },
        {
          name: "Maand Overzicht",
          description: "Dagelijkse totalen per maand: totale kWh, besparingen, zelfvoorziening trend",
          timeRange: "Huidige maand of selecteer maand/jaar",
          visual: "Lijndiagram met 30-31 dagen"
        },
        {
          name: "Jaar Overzicht",
          description: "Maandelijkse totalen: seizoenstrends, jaarlijkse opbrengst, totale besparingen",
          timeRange: "Huidig jaar of vergelijk jaren",
          visual: "Staafdiagram met 12 maanden + trendlijn"
        }
      ]
    },
    {
      category: "Financiële Inzichten",
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      features: [
        {
          name: "Dagelijkse Besparing",
          description: "Euro's bespaard vandaag: (eigen verbruik × elektriciteitsprijs) - kosten",
          calculation: "Eigen verbruik kWh × €0,40/kWh gemiddeld",
          visual: "Euro bedrag + vergelijk met gisteren"
        },
        {
          name: "Maandelijkse Besparing",
          description: "Totale besparing deze maand: opgeteld uit dagelijkse besparingen",
          comparison: "Vergelijk met vorige maand en vorig jaar",
          visual: "Groot euro bedrag + trend grafiek"
        },
        {
          name: "Cumulatieve Besparing",
          description: "Totale besparing sinds installatie: optellen alle maanden",
          milestone: "Progress naar ROI (terugverdientijd)",
          visual: "Progress bar naar investeringsbedrag"
        },
        {
          name: "CO₂ Reductie",
          description: "Kilogram CO₂ bespaard: (eigen verbruik kWh × 0,4 kg CO₂/kWh)",
          comparison: "Vergelijk met bomen geplant of auto kilometers",
          visual: "Groen blad icoon + equivalent"
        }
      ]
    },
    {
      category: "Configuratie & Instellingen",
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      features: [
        {
          name: "Werkingsmodus",
          description: "Kies tussen: Zelfverbruik (standaard), Back-up, Time of Use, Peak Shaving",
          options: "4 modi met uitleg per modus",
          impact: "Directe invloed op laad/ontlaadstrategie"
        },
        {
          name: "Laad/Ontlaad Limieten",
          description: "Stel min/max SOC% in, max laad/ontlaad vermogen (kW), back-up reserve%",
          range: "SOC: 10-100%, Vermogen: 0-max systeem capaciteit",
          safety: "Systeem respecteert altijd veilige zones"
        },
        {
          name: "Tijd Schema's",
          description: "Programmeer tijdschema's: laden tijdens goedkope uren, ontladen tijdens dure uren",
          slots: "Meerdere tijdslots per dag mogelijk",
          useCase: "Perfect voor dynamische elektriciteitstarieven"
        },
        {
          name: "Notificaties",
          description: "Push meldingen bij: lage SOC, foutmeldingen, waarschuwingen, updates beschikbaar",
          custom: "Kies zelf welke meldingen u wilt",
          delivery: "Instant push naar smartphone"
        }
      ]
    },
    {
      category: "Diagnostics & Onderhoud",
      icon: <CheckCircle className="h-8 w-8 text-yellow-500" />,
      features: [
        {
          name: "Systeemstatus",
          description: "Real-time status: Online/Offline, Laden/Ontladen/Idle, foutcodes indien aanwezig",
          indicators: "Kleurcodes: groen=ok, geel=waarschuwing, rood=fout",
          details: "Tap voor uitgebreide diagnose info"
        },
        {
          name: "Firmware Versie",
          description: "Huidige firmware versie batterij, inverter, BMS - check updates beschikbaar",
          updates: "OTA updates via app (automatisch of manueel)",
          changelog: "Release notes bij elke update"
        },
        {
          name: "Batterij Gezondheid",
          description: "State of Health (SOH%): huidige capaciteit vs. originele capaciteit",
          degradation: "Verwachte degradatie: <10% over 10 jaar bij LFP",
          monitoring: "Track degradatie over tijd"
        },
        {
          name: "Cycli Teller",
          description: "Totaal aantal laad/ontlaad cycli sinds installatie",
          warranty: "AlphaESS: 6.000+ cycli garantie (90% DoD)",
          estimate: "Resterende levensduur indicator"
        }
      ]
    }
  ];

  const dashboardScreens = [
    {
      screen: "Home Dashboard",
      description: "Hoofdscherm met real-time energie flow visualisatie",
      elements: [
        "Centrale Sankey diagram met PV → Batterij → Verbruik → Net",
        "Grote SOC% ring (batterij lading)",
        "Huidige vermogen per component (PV, batterij, verbruik, net)",
        "Vandaag totalen: kWh PV, verbruik, besparing in €",
        "Zelfvoorzieningsgraad percentage vandaag",
        "Quick-actions: wijzig werkingsmodus, bekijk alerts"
      ],
      updateFrequency: "Elke 5-10 seconden",
      usability: "Meest gebruikte scherm - alles in één oogopslag"
    },
    {
      screen: "Analyse & Grafieken",
      description: "Historische data met interactieve grafieken",
      elements: [
        "Tabbladen: Dag / Week / Maand / Jaar",
        "Multi-lijnen grafiek met PV (geel), Verbruik (rood), Batterij (groen), Net (blauw)",
        "Zoom functie: tap grafiek voor detail view",
        "Export functie: download data als CSV",
        "Vergelijk functie: overlay vorige periode"
      ],
      updateFrequency: "Data opgeslagen elk uur, grafiek on-demand",
      usability: "Perfect voor trend analyse en optimalisatie"
    },
    {
      screen: "Instellingen",
      description: "Configuratie en optimalisatie opties",
      elements: [
        "Werkingsmodus kiezer met uitleg per optie",
        "Laad/ontlaad limieten sliders (10-100% SOC)",
        "Tijdschema editor voor Time of Use modus",
        "Notificatie voorkeuren checkboxes",
        "Systeeminformatie (serienummer, firmware, garantie)",
        "Taal en eenheid instellingen (kW vs kWh, EUR vs USD)"
      ],
      updateFrequency: "Wijzigingen direct naar batterij",
      usability: "Alleen bezoeken bij eerste setup of optimalisatie"
    },
    {
      screen: "Diagnostics & Support",
      description: "Technische informatie en probleemoplossing",
      elements: [
        "Systeemstatus indicator met kleurcode",
        "Foutcode lijst met betekenis en oplossing",
        "Batterij gezondheid (SOH%) en cycli teller",
        "Firmware versie + update knop indien beschikbaar",
        "Netwerk info: WiFi/4G signal, IP-adres, connectiviteit",
        "Support contact: chat, telefoon, e-mail"
      ],
      updateFrequency: "Real-time status monitoring",
      usability: "Voor troubleshooting en onderhoud"
    }
  ];

  const tipsTricks = [
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      tip: "Check Dagelijkse Patronen",
      description: "Bekijk uur-grafieken om te zien wanneer u het meest verbruikt. Verschuif verbruik naar momenten met PV-overschot of batterij.",
      impact: "10-20% extra besparing mogelijk door slim verbruiken",
      howTo: "Analyse scherm → Dag tab → Identificeer pieken → Plan grote verbruikers (wasmachine, EV) tijdens PV-uren"
    },
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      tip: "Monitor Zelfvoorzieningsgraad",
      description: "Target: 60-80% zelfvoorzieningsgraad is excellent. <50% betekent mogelijkheid voor verbetering (gedrag of capaciteit).",
      impact: "Indicator of systeem optimaal benut wordt",
      howTo: "Home dashboard → Check zelfvoorzieningsgraad percentage → Bij <50%: analyseer oorzaak (te klein systeem? Veel avond/nacht verbruik?)"
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      tip: "Track Maandelijkse Besparingen",
      description: "Vergelijk besparingen per maand om seizoensinvloeden te zien. Winter: lagere besparingen (minder PV). Zomer: hogere besparingen.",
      impact: "Realistische ROI berekening en verwachtingen",
      howTo: "Analyse → Maand tab → Vergelijk besparingen zomer vs. winter → Reken met jaargemiddelde voor ROI"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      tip: "Stel Notificaties in",
      description: "Push notificatie bij SOC <20% helpt bewustwording. U weet wanneer zuinig doen verstandig is.",
      impact: "Voorkom volledig lege batterij en optimaliseer verbruik",
      howTo: "Instellingen → Notificaties → Enable 'Lage SOC waarschuwing' bij 20%"
    },
    {
      icon: <Cloud className="h-8 w-8 text-yellow-500" />,
      tip: "Check Firmware Updates",
      description: "AlphaESS brengt regelmatig updates uit met verbeteringen en nieuwe functies. Check maandelijks.",
      impact: "Betere prestaties, nieuwe functies, bugfixes",
      howTo: "Diagnostics → Firmware → Check for updates → Install indien beschikbaar (duurt 5-10 min)"
    },
    {
      icon: <BarChart className="h-8 w-8 text-yellow-500" />,
      tip: "Export Data voor Diepere Analyse",
      description: "Download CSV export voor analyse in Excel/Google Sheets. Perfect voor tech-savvy gebruikers.",
      impact: "Ultieme controle en custom analyses mogelijk",
      howTo: "Analyse → Selecteer periode → Export knop → Download CSV → Open in Excel"
    }
  ];

  const faqs = [
    {
      question: "Kost de AlphaCloud app geld of is er een abonnement?",
      answer: "De AlphaCloud app is 100% gratis en inclusief bij alle AlphaESS batterij systemen. Geen abonnementskosten, geen in-app purchases, geen verborgen kosten. Alle functies zijn volledig toegankelijk: real-time monitoring, historische data, configuratie, notificaties. Dit blijft voor altijd gratis - geen risico dat AlphaESS later betaalde tiers introduceert."
    },
    {
      question: "Werkt de app ook zonder internet?",
      answer: "De batterij zelf werkt volledig autonoom zonder internet (CT-sensor regelt alles lokaal). De app vereist wél internet voor remote monitoring. Zonder internet: batterij werkt normaal, maar u kunt niet op afstand monitoren/configureren. Lokale toegang mogelijk via WiFi (zelfde netwerk als batterij): basis monitoring werkt, maar beperkt. Voor volledige app ervaring: WiFi/4G nodig."
    },
    {
      question: "Hoe vaak wordt de data in de app bijgewerkt?",
      answer: "Real-time monitoring: elke 5-10 seconden update (afhankelijk van internetsnelheid). Historische data: elk uur wordt data opgeslagen in cloud. Grafieken: on-demand refresh (pull to refresh). Notificaties: instant push bij foutmeldingen. 5-10 seconden is ruim voldoende voor normaal gebruik - batterij reageert lokaal elke seconde op CT-sensor."
    },
    {
      question: "Kan ik meerdere batterijen monitoren in één app?",
      answer: "Ja! AlphaCloud app ondersteunt meerdere systemen: onbeperkt aantal batterijen per account. Handig voor: (1) Meerdere locaties (vakantiewoning, ouders helpen, etc.), (2) Installateur die klanten monitort, (3) Twee batterijen op verschillende locaties. Wissel tussen systemen via dropdown menu. Elk systeem heeft eigen dashboard en instellingen."
    },
    {
      question: "Welke data wordt opgeslagen en hoe lang?",
      answer: "AlphaESS slaat op in cloud: (1) Real-time data: huidige vermogen, SOC, status (5 jaar), (2) Historische data: dagelijkse/maandelijkse totalen (5 jaar), (3) Configuratie: instellingen, werkingsmodus (permanent), (4) Events: foutmeldingen, waarschuwingen (5 jaar). Data wordt gehost in AlphaESS cloud servers (Europa). Privacy: alleen u heeft toegang, AlphaESS gebruikt geanonimiseerde aggregatie voor product verbetering."
    },
    {
      question: "Kan ik de app gebruiken voor meerdere gebruikers (gezin)?",
      answer: "Ja, via account sharing. Opties: (1) Gedeeld account: meerdere apparaten kunnen met zelfde login inloggen (onbeperkt), (2) Guest access: share read-only toegang met gezinsleden (geen configuratie wijzigen mogelijk), (3) Installateur access: professionele accounts met extra functies. Meeste gezinnen gebruiken optie 1: zelfde login op meerdere smartphones. Werkt prima, geen limitaties."
    },
    {
      question: "Wat gebeurt er bij een app update of nieuwe functies?",
      answer: "AlphaESS brengt regelmatig app updates uit via App Store/Google Play: (1) App updates: gratis, automatisch download indien ingeschakeld, (2) Firmware updates: via app naar batterij (OTA = Over The Air), (3) Nieuwe functies: gratis toegevoegd aan alle gebruikers, geen upgrade kosten. Voorbeelden recente updates: verbeterde grafieken, dynamic pricing support, extra notificaties. Update aanbeveling: check maandelijks voor nieuwe versies."
    },
    {
      question: "Kan ik de elektriciteitsprijs instellen voor berekening besparingen?",
      answer: "Ja, in app instellingen: (1) Electriciteitsprijs: stel uw tarief in (€/kWh) voor inkoop, (2) Terugleververgoeding: stel uw vergoeding in (€/kWh) voor teruglevering, (3) Dynamic pricing: indien u dynamisch contract heeft, kan app prijzen automatisch ophalen (EPEX, Tibber). App gebruikt deze tarieven om dagelijkse/maandelijkse besparingen te berekenen. Update prijzen indien uw contract wijzigt voor accurate berekeningen."
    }
  ];

  return (
    <>
      <MetaTags
        title="AlphaCloud App: Thuisbatterij Monitoring & Inzicht | StayCool Airco"
        description="AlphaCloud app monitoring ✓ Real-time inzicht ✓ Historische grafieken ✓ Besparingen tracking ✓ Gratis ✓ iOS & Android ✓ Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "AlphaCloud App: Complete Monitoring en Inzicht Gids",
          description: "Uitgebreide handleiding voor AlphaCloud app met alle functies, grafieken, instellingen en tips voor optimale thuisbatterij monitoring.",
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
            AlphaCloud App: Complete Monitoring & Inzicht in Uw Thuisbatterij
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Real-time monitoring, historische grafieken, financiële inzichten en volledige configuratie - allemaal gratis in de AlphaCloud app. Maximaal inzicht, maximale controle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Vraag Demo
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
                <p className="font-bold mb-1">100% Gratis & Inclusief</p>
                <p className="text-sm">
                  AlphaCloud app is volledig gratis bij alle AlphaESS systemen. Geen abonnementen, geen kosten, alle functies direct beschikbaar. Voor altijd.
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
              Alles in Één App - Gratis & Krachtig
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time inzicht in uw energie, besparingen en systeem prestaties
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

      {/* App Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alle Functies Overzicht
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete breakdown van wat u kunt zien en doen in de AlphaCloud app
            </p>
          </div>

          <div className="space-y-12">
            {appFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h4>
                      <p className="text-gray-700 mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {Object.entries(feature)
                          .filter(([key]) => !['name', 'description'].includes(key))
                          .map(([key, value], idx) => (
                            <div key={idx} className="flex items-start text-sm">
                              <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> {value}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Screens Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              App Schermen: Wat Ziet U Waar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigatie door de vier hoofdschermen van de AlphaCloud app
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dashboardScreens.map((screen, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                  <h3 className="text-2xl font-bold">{screen.screen}</h3>
                  <p className="text-sm mt-1">{screen.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Elementen op dit scherm:</p>
                    <ul className="space-y-2">
                      {screen.elements.map((element, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {element}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-900 mb-1">Update frequentie:</p>
                      <p className="text-sm text-gray-700">{screen.updateFrequency}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-900 mb-1">Gebruikstip:</p>
                      <p className="text-sm text-gray-700">{screen.usability}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Tricks Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips & Tricks: Maximaal Halen uit de App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zo gebruikt u de AlphaCloud app optimaal voor meer besparingen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tipsTricks.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{item.tip}</h3>
                </div>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="bg-green-50 rounded p-3 mb-3">
                  <p className="text-sm font-semibold text-green-700 mb-1">Impact:</p>
                  <p className="text-sm text-gray-700">{item.impact}</p>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="text-sm font-semibold text-blue-700 mb-1">Hoe te doen:</p>
                  <p className="text-sm text-gray-700">{item.howTo}</p>
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
            Wilt U de AlphaCloud App in Actie Zien?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag een gratis demo bij ons aan. Wij laten u zien hoe de app werkt, alle functies en hoe u maximaal profiteert van uw thuisbatterij.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Demo
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
            Veelgestelde Vragen over AlphaCloud App
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
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smart-home-integratie"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Home className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Home Integratie</h3>
              <p className="text-sm text-gray-600">Home Assistant, automatisering</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-capaciteit-kiezen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Capaciteit Kiezen</h3>
              <p className="text-sm text-gray-600">Hoeveel kWh heeft u nodig?</p>
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
            Inzicht = Besparing - Start Vandaag met Monitoren
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Met de AlphaCloud app heeft u volledige controle en inzicht in uw energie. Gratis, krachtig en eenvoudig te gebruiken. Elke AlphaESS batterij inclusief app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Offerte
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

export default ThuisbatterijMonitoringAppPage;
