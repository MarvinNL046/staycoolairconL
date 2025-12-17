import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, Wrench, Phone, AlertTriangle, ArrowRight, Battery, Home, Settings } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijAansluitenMeterkaastPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Aansluiten Meterkast' }
  ];

  const usps = [
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "1-Fase of 3-Fase",
      description: "Bepaal welke aansluiting u heeft en welke batterij daarbij past"
    },
    {
      icon: <Wrench className="h-12 w-12 text-yellow-500" />,
      title: "Professionele Installatie",
      description: "Gecertificeerde installateurs met &gt;00 batterijen geïnstalleerd"
    },
    {
      icon: <Settings className="h-12 w-12 text-yellow-500" />,
      title: "4-6 Uur Installatietijd",
      description: "Efficiënte installatie, direct operationeel, inclusief meterkast aanpassing"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-yellow-500" />,
      title: "10 Jaar Garantie",
      description: "Volledige garantie op installatie, systeem en componenten"
    }
  ];

  const phaseComparison = [
    {
      title: "1-Fase Aansluiting",
      current: "40A (9,2 kW) standaard",
      suitability: "90% Nederlandse woningen, appartementen, rijtjeshuizen",
      batteries: [
        "SMILE-B3 (2,9 kWh) - perfect voor 1-fase",
        "SMILE5 (5-30 kWh) - ideaal voor 1-fase",
        "SMILE-T10 niet geschikt - vereist 3-fase"
      ],
      chargingPower: "Max 4,6 kW laden/ontladen",
      advantages: [
        "Eenvoudigere installatie, lagere kosten",
        "Minder complexe bekabeling",
        "Ruim voldoende voor normaal verbruik",
        "Geschikt voor de meeste huishoudens"
      ],
      limitations: [
        "Max 4,6 kW = beperkt voor snelladen EV",
        "Niet geschikt voor grote vermogens (&gt;0kW pieken)",
        "Peak shaving minder effectief bij zeer hoog verbruik"
      ],
      price: "Standaard installatieprijs",
      recommendation: "Aanbevolen voor huishoudens zonder EV of met lage laadsnelheden (7kW)"
    },
    {
      title: "3-Fase Aansluiting",
      current: "3x25A (17,3 kW) standaard",
      suitability: "Grote woningen, vrijstaand, zakelijk, met elektrische auto",
      batteries: [
        "SMILE-T10 (10 kWh) - vereist 3-fase",
        "SMILE-B3 niet optimaal - onderbenut vermogen",
        "SMILE5 mogelijk maar onderbenut capaciteit"
      ],
      chargingPower: "Max 10 kW laden/ontladen (3x3,3 kW)",
      advantages: [
        "Snelladen elektrische auto (22 kW mogelijk)",
        "Hogere gelijktijdige vermogens (koken + EV + verwarming)",
        "Betere benutting grote PV-installaties",
        "Effectief peak shaving bij zakelijk gebruik"
      ],
      limitations: [
        "Complexere installatie, hogere kosten (+€500-800)",
        "Vereist speciale batterij (SMILE-T10)",
        "Niet altijd nodig - check eerst verbruik"
      ],
      price: "+€500-800 meerprijs",
      recommendation: "Aanbevolen voor EV-bezitters, grote huishoudens (&gt;.000 kWh/jaar), zakelijk"
    }
  ];

  const connectionSteps = [
    {
      step: "1",
      title: "Inventarisatie Meterkast",
      description: "Technicus controleert bestaande aansluiting, faseconfiguratie, beschikbare ruimte en hoofdzekering.",
      duration: "30 minuten",
      tools: "Multimeter, fasemeter, camera",
      checks: [
        "1-fase of 3-fase aansluiting vaststellen",
        "Hoofdzekeringswaarde checken (25A, 35A, 40A?)",
        "Beschikbare ruimte in/nabij meterkast",
        "Kabelroutes naar batterij locatie",
        "Aardlekschakelaar capaciteit en type"
      ]
    },
    {
      step: "2",
      title: "Materiaal & Bekabeling Voorbereiden",
      description: "Benodigde componenten klaarzetten: AC-koppelkast, bekabeling, zekeringen, aardlekschakelaars.",
      duration: "30 minuten",
      materials: [
        "AC-koppelkast met CT-meetsensor",
        "3-aderige kabel (3x6mm² of 3x10mm²)",
        "Automaten (B16 of B20)",
        "Aardlekschakelaar Type A (30mA)",
        "Montagemateriaal en kabelbescherming"
      ],
      tools: "Boormachine, kabelgoten, tang, schroevendraaiers"
    },
    {
      step: "3",
      title: "Batterij Plaatsen & Voorbereiden",
      description: "Batterij op voorbereidde locatie installeren, waterpas zetten, voorbereiden voor aansluiting.",
      duration: "30 minuten",
      details: [
        "Batterij op vooraf bepaalde locatie (garage, schuur, kelder, buiten)",
        "Waterpas uitlijnen voor optimale werking",
        "Ventilatie controleren (ruimte moet geventileerd zijn)",
        "Afstand tot meterkast opmeten voor bekabeling"
      ]
    },
    {
      step: "4",
      title: "AC-Koppelkast Installeren in Meterkast",
      description: "AC-koppelkast monteren in of naast meterkast, aansluiten op hoofdverdeling en CT-sensor plaatsen.",
      duration: "60 minuten",
      critical: "Meest technische stap - vereist ervaring en certificering",
      actions: [
        "AC-koppelkast monteren naast bestaande groepenkast",
        "CT-meetsensor plaatsen op hoofdkabel (meet stroomrichting)",
        "Aansluiting op hoofdverdeling (vóór aardlekschakelaar)",
        "Aparte aardlekschakelaar en automaat voor batterij",
        "Bekabeling trekken van meterkast naar batterij locatie"
      ]
    },
    {
      step: "5",
      title: "Batterij Aansluiten & Stroom Inschakelen",
      description: "AC-kabel verbinden met batterij inverter, alle aansluitingen controleren, spanning inschakelen.",
      duration: "45 minuten",
      safety: "Hoofdzekering uit tijdens aansluiting, daarna stap voor stap inschakelen",
      actions: [
        "AC-kabel aansluiten op batterij inverter",
        "Aarding controleren en aansluiten",
        "Alle verbindingen controleren op stevigheid",
        "Isolatieweerstand meten (veiligheidsmeting)",
        "Spanning inschakelen en systeem opstarten"
      ]
    },
    {
      step: "6",
      title: "Configuratie & Inbedrijfstelling",
      description: "Software configureren, CT-sensor kalibreren, systeemtest uitvoeren, app koppelen.",
      duration: "45 minuten",
      actions: [
        "AlphaESS app koppelen via WiFi/4G",
        "CT-sensor kalibreren (stroomrichting detectie)",
        "Werkingsmodus instellen (zelfverbruik/back-up/dynamisch tarief)",
        "Laad/ontlaad limieten configureren",
        "Testcyclus: laden, ontladen, netinteractie",
        "Klant instructie app gebruik"
      ]
    }
  ];

  const technicalRequirements = [
    {
      category: "Elektrische Vereisten",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      items: [
        "Minimaal 25A hoofdzekering (35A of 40A aanbevolen)",
        "Aardlekschakelaar Type A (30mA) - Type B beter maar niet verplicht",
        "2-3 vrije moduleplaatsen in meterkast (of AC-kast naast meterkast)",
        "Goede aardeverbinding (<30 Ohm weerstand)",
        "Aparte groep voor batterij met B16 of B20 automaat"
      ]
    },
    {
      category: "Bekabeling Specificaties",
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      items: [
        "3-aderige kabel: 3x6mm² voor afstanden <20m (1-fase)",
        "3-aderige kabel: 3x10mm² voor afstanden 20-40m (1-fase)",
        "5-aderige kabel: 5x6mm² voor 3-fase installaties",
        "CT-meetsensor kabel: minimaal 5m lengte, meegeleverd",
        "Kabelbescherming verplicht indien zichtbaar (kabelgoot of buis)"
      ]
    },
    {
      category: "Ruimte & Plaatsing",
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      items: [
        "Minimaal 10cm vrije ruimte rondom batterij (ventilatie)",
        "Droge locatie, vorstvrij indien binnen (buiten is ook mogelijk)",
        "Max 40m afstand tussen meterkast en batterij (bekabeling)",
        "Toegankelijk voor onderhoud en inspectie",
        "Bij buitenplaatsing: IP55 behuizing (standaard bij AlphaESS buiten modellen)"
      ]
    },
    {
      category: "Netwerk & Monitoring",
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      items: [
        "WiFi-bereik bij batterij locatie (of gebruik 4G via app)",
        "Stabiele internetverbinding voor monitoring (niet verplicht voor werking)",
        "Toegang tot router indien WiFi gebruikt wordt",
        "AlphaCloud app (iOS/Android) voor monitoring",
        "Optioneel: Ethernet verbinding voor meest stabiele verbinding"
      ]
    }
  ];

  const costs = [
    {
      item: "1-Fase Installatie (Standaard)",
      description: "SMILE-B3 of SMILE5 op 1-fase aansluiting",
      price: "Inclusief",
      details: "Standaard installatie inbegrepen in systeemprijs. Bevat AC-koppelkast, bekabeling tot 20m, installatie, configuratie."
    },
    {
      item: "3-Fase Installatie (SMILE-T10)",
      description: "3-fase batterij met complexere bekabeling",
      price: "Inclusief",
      details: "3-fase installatie inbegrepen in SMILE-T10 prijs. 5-aderige bekabeling, 3-fase AC-kast, configuratie."
    },
    {
      item: "Extra Kabellengte (&gt;0m)",
      description: "Verlengen bekabeling bij grote afstand",
      price: "€8-12/meter",
      details: "Standaard: 20m inclusief. Elke extra meter: €8 (1-fase) of €12 (3-fase) voor materiaal + arbeid."
    },
    {
      item: "Meterkast Uitbreiden/Vervangen",
      description: "Indien onvoldoende ruimte in bestaande meterkast",
      price: "€350-650",
      details: "Aparte AC-koppelkast naast meterkast (€350) of volledige meterkast vervangen indien verouderd (€650)."
    },
    {
      item: "Aardlekschakelaar Vervangen",
      description: "Indien huidige aardlek incompatibel (oud model)",
      price: "€150-250",
      details: "Type A aardlek installeren. Bij voorkeur Type B voor optimale veiligheid (€250)."
    },
    {
      item: "Hoofdzekering Verzwaren",
      description: "Indien huidige zekering te laag (<25A)",
      price: "€150-350",
      details: "Netbeheerder moet hoofdzekering aanpassen van 25A naar 35A/40A. Wij regelen aanvraag en coördinatie."
    }
  ];

  const safetyChecks = [
    "Hoofdzekering UIT tijdens alle werkzaamheden aan meterkast",
    "Isolatieweerstand meten vóór inschakeling (&gt; MΩ vereist)",
    "Aardeverbinding controleren met aardingsmeter (<30 Ohm)",
    "Alle verbindingen vastdraaien volgens fabrikantspecificatie",
    "CT-sensor correct geplaatst (stroomrichting klopt)",
    "Aardlekschakelaar testen na installatie (testknop)",
    "Geen kabelschade of blootliggende draden",
    "Kabelgoot correct bevestigd en gesloten",
    "Waarschuwingsstickers aangebracht waar vereist",
    "Opleverdocumentatie compleet (schakelschema, garantie, handleiding)"
  ];

  const faqs = [
    {
      question: "Heb ik 1-fase of 3-fase aansluiting en hoe check ik dit?",
      answer: "Check uw meterkast: 1-fase heeft 1 dikke zwarte kabel naar hoofdzekering. 3-fase heeft 3 zwarte kabels (of 1 dikke kabel met 3 aders). U kunt ook uw elektriciteitsmeter checken: 1-fase meter toont 230V, 3-fase meter toont 400V of heeft 3 tellerstanden. Bij twijfel: wij checken dit gratis bij offerte-bezoek."
    },
    {
      question: "Kan ik een 3-fase batterij installeren als ik 1-fase heb?",
      answer: "Nee, SMILE-T10 vereist 3-fase aansluiting. Omgekeerd kan wel: 1-fase batterijen (SMILE-B3, SMILE5) werken ook op 3-fase, maar benutten slechts 1 fase. Voor 3-fase huishoudens adviseren we SMILE-T10 vanwege hogere vermogens en betere balancering."
    },
    {
      question: "Hoeveel ruimte moet er zijn in mijn meterkast?",
      answer: "Voor AC-koppelkast: 2-3 vrije moduleplaatsen (DIN-rail) van 18mm breed. Vaak is dit beschikbaar. Indien niet: we plaatsen aparte AC-kast direct naast uw meterkast (extra €350). Moderne meterkasten hebben meestal voldoende ruimte. Bij verouderde meterkasten (<1990) adviseren we vaak complete vervanging (€650) voor veiligheid en toekomstbestendigheid."
    },
    {
      question: "Wat doet de CT-meetsensor en waarom is deze belangrijk?",
      answer: "De CT-sensor (Current Transformer) meet in real-time hoeveel stroom u van/naar het net haalt. Hierdoor 'weet' de batterij wanneer hij moet laden (overschot) of ontladen (tekort). Zonder CT-sensor kan batterij niet intelligent reageren en werkt systeem niet optimaal. CT wordt geplaatst op hoofdkabel in meterkast, zonder deze te onderbreken (niet-invasief)."
    },
    {
      question: "Moet mijn hoofdzekering verzwaard worden?",
      answer: "Meestal niet. 25A hoofdzekering is voldoende voor 1-fase batterij tot 5 kWh. Bij grotere systemen of 3-fase adviseren we 35A of 40A voor comfort (geen zekering die afslaat bij pieken). Verzwaring kost €150-350 en wordt door netbeheerder uitgevoerd. Wij checken dit bij offerte en regelen aanvraag indien nodig."
    },
    {
      question: "Hoe lang duurt de volledige installatie?",
      answer: "Gemiddeld 4-6 uur voor complete installatie: 1 uur voorbereiding, 2 uur meterkast werk, 1 uur batterij aansluiten, 1-2 uur configuratie en testen. Bij complexe situaties (meterkast uitbreiding, lange bekabeling, 3-fase) kan dit oplopen tot 8 uur. Planning: meestal 1 werkdag, u hoeft niet thuis te blijven na uitleg en oplevering."
    },
    {
      question: "Is de installatie bij de systeemprijs inbegrepen?",
      answer: "Ja, standaard installatie is inclusief: AC-koppelkast, bekabeling tot 20m, aansluiting op meterkast, configuratie, oplevering en instructie. Extra kosten alleen bij: extra kabellengte (&gt;0m), meterkast uitbreiding, hoofdzekering verzwaren, speciale situaties. Dit communiceren we altijd vooraf in offerte - geen verrassingen achteraf."
    },
    {
      question: "Moet mijn meterkast aangepast worden en wat mag dit kosten?",
      answer: "Bij 80% installaties: geen aanpassingen nodig, AC-koppelkast past in bestaande meterkast. Bij 15%: aparte AC-kast naast meterkast (€350 extra). Bij 5%: meterkast verouderd/te klein, complete vervanging aanbevolen (€650). Wij adviseren altijd wat veiligst en meest toekomstbestendig is. Moderne meterkast gaat 20-30 jaar mee."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Aansluiten op Meterkast | 1-Fase vs 3-Fase | StayCool Airco"
        description="Thuisbatterij aansluiten meterkast ✓ 1-fase vs 3-fase uitleg ✓ Installatiestappen ✓ CT-sensor ✓ Certificering ✓ 4-6 uur ✓ Limburg!"
      />

      <SchemaMarkup
        type="HowTo"
        data={{
          "@type": "HowTo",
          name: "Hoe sluit je een thuisbatterij aan op de meterkast",
          description: "Stapsgewijze handleiding voor het professioneel aansluiten van een thuisbatterij op de meterkast, inclusief 1-fase en 3-fase configuraties.",
          step: connectionSteps.map(step => ({
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
            Thuisbatterij Aansluiten op Meterkast: 1-Fase vs 3-Fase Uitgelegd
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Professionele aansluiting van uw thuisbatterij op de meterkast. Van inventarisatie tot inbedrijfstelling - met CT-meetsensor, certificering en 10 jaar garantie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Plan Installatie
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
              <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Let op: Professionele Installatie Verplicht</p>
                <p className="text-sm">
                  Aansluiting op meterkast mag alleen door gecertificeerd installateur. Zelf doen is levensgevaarlijk en illegaal. Wij zijn NEN1010 gecertificeerd.
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
              Professionele Installatie, Direct Operationeel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gecertificeerde monteurs, 10 jaar garantie, volgens NEN1010 norm
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

      {/* Phase Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              1-Fase vs 3-Fase: Wat Heeft U en Wat Heeft U Nodig?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uitgebreide vergelijking om de juiste keuze te maken
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {phaseComparison.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                  <p className="text-sm mt-1"><strong>Vermogen:</strong> {phase.current}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Geschikt voor:</p>
                      <p className="text-gray-700">{phase.suitability}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">Compatible batterijen:</p>
                      <ul className="space-y-1">
                        {phase.batteries.map((battery, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {battery}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Laad/ontlaad vermogen:</p>
                      <p className="text-gray-700 font-bold text-lg text-yellow-600">{phase.chargingPower}</p>
                    </div>

                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm font-semibold text-green-700 mb-2">Voordelen:</p>
                      <ul className="space-y-1">
                        {phase.advantages.map((adv, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded p-4">
                      <p className="text-sm font-semibold text-red-700 mb-2">Beperkingen:</p>
                      <ul className="space-y-1">
                        {phase.limitations.map((lim, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            {lim}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Advies:</p>
                      <p className="text-sm text-gray-700">{phase.recommendation}</p>
                    </div>

                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-gray-600">Installatieprijs:</p>
                      <p className="text-2xl font-bold text-gray-900">{phase.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Installatiestappen: Van Meterkast tot Werkende Batterij
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparant installatieproces in 6 stappen (4-6 uur totaal)
            </p>
          </div>

          <div className="space-y-8">
            {connectionSteps.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="flex items-start">
                  <div className="bg-yellow-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                      <span className="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{item.description}</p>

                    {item.critical && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <p className="text-sm text-red-700">
                          <strong>Let op:</strong> {item.critical}
                        </p>
                      </div>
                    )}

                    {item.safety && (
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
                        <p className="text-sm text-orange-700">
                          <strong>Veiligheid:</strong> {item.safety}
                        </p>
                      </div>
                    )}

                    {item.checks && (
                      <div className="bg-white rounded p-4 mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Controles:</p>
                        <ul className="space-y-1">
                          {item.checks.map((check, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              {check}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.materials && (
                      <div className="bg-white rounded p-4 mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Benodigde materialen:</p>
                        <ul className="space-y-1">
                          {item.materials.map((material, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                              {material}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.details && (
                      <div className="bg-white rounded p-4 mb-4">
                        <ul className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.actions && (
                      <div className="bg-white rounded p-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Acties:</p>
                        <ul className="space-y-1">
                          {item.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technische Vereisten voor Aansluiting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Checklist wat er nodig is voor succesvolle installatie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalRequirements.map((req, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {req.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{req.category}</h3>
                </div>
                <ul className="space-y-2">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Installatiekosten: Wat is Inclusief, Wat Kost Extra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparante prijzen zonder verrassingen achteraf
            </p>
          </div>

          <div className="space-y-4">
            {costs.map((cost, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{cost.item}</h3>
                  <span className={`text-lg font-bold px-4 py-2 rounded ${
                    cost.price === 'Inclusief'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {cost.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{cost.description}</p>
                <p className="text-sm text-gray-700">{cost.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="font-bold text-gray-900 mb-2">Belangrijk: Geen Verrassingen</p>
            <p className="text-gray-700">
              Alle extra kosten communiceren we vooraf in de offerte na inspectie. U weet exact wat het gaat kosten voordat we beginnen. Standaard installatie (80% gevallen) heeft geen extra kosten.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Checklist Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veiligheidscontroles bij Installatie (NEN1010)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              10-punten checklist voor veilige en conforme installatie
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <ul className="space-y-3">
              {safetyChecks.map((check, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-red-100 border-l-4 border-red-500 p-4">
              <p className="font-bold text-red-900 mb-1">Certificering Verplicht</p>
              <p className="text-sm text-red-800">
                Alleen gecertificeerde installateurs (NEN1010) mogen werkzaamheden aan meterkast uitvoeren. StayCool Airco beschikt over alle vereiste certificeringen en verzekeringen. Zelf doen is illegaal en levensgevaarlijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plan Uw Professionele Installatie
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Gratis inspectie meterkast, transparante offerte, planning binnen 2 weken. Gecertificeerde monteurs met &gt;00 installaties ervaring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Gratis Inspectie
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
            Veelgestelde Vragen over Aansluiting
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
            Meer Weten Over Thuisbatterijen?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-capaciteit-kiezen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Capaciteit Kiezen</h3>
              <p className="text-sm text-gray-600">Hoeveel kWh heeft u nodig?</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-installatie-limburg"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Wrench className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Installatie Limburg</h3>
              <p className="text-sm text-gray-600">Lokale installateur met ervaring</p>
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
            Veilig, Vakkundig, Volledig Gecertificeerd
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Met &gt;00 succesvolle installaties weten we precies hoe het moet. NEN1010 gecertificeerd, 10 jaar garantie op installatie en systeem. Plan vandaag uw gratis inspectie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Inspectie
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

export default ThuisbatterijAansluitenMeterkaastPage;
