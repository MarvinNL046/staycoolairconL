import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Calculator, TrendingUp, Star, Award, Snowflake, Wifi, Smartphone } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const SamsungAirco = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Merken', path: '/aircos' },
    { label: 'Samsung Airco' }
  ];

  const usps = [
    {
      icon: <Wind className="h-12 w-12 text-sky-500" />,
      title: "Wind-Free™ Technologie",
      description: "Revolutionaire windvrije koeling via 23.000 micro-gaatjes voor ultiem comfort zonder tocht"
    },
    {
      icon: <Wifi className="h-12 w-12 text-sky-500" />,
      title: "SmartThings Integratie",
      description: "Naadloze verbinding met uw Samsung smart home ecosysteem en slimme bediening via AI"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "10 Jaar Garantie",
      description: "Uitgebreide garantie op de Digital Inverter compressor toont vertrouwen in kwaliteit"
    },
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "A+++ Efficiency",
      description: "Digital Inverter 8-Pole technologie voor 73% energiebesparing en uitzonderlijke stilte"
    }
  ];

  const productSeries = [
    {
      name: "Samsung Wind-Free™ Elite",
      tagline: "Het ultieme in comfort zonder tocht",
      features: [
        "Wind-Free™ koeling via 23.000 micro-gaatjes",
        "Digital Inverter 8-Pole compressor",
        "SmartThings WiFi-integratie",
        "AI Auto Comfort modus",
        "Energielabel A+++"
      ],
      benefits: "Voor wie het beste wil: revolutionaire windvrije koeling combineert ultiem comfort met stijlvol design",
      priceRange: "€2.600 - €3.400",
      highlight: true
    },
    {
      name: "Samsung Wind-Free™ Comfort",
      tagline: "Windvrij comfort voor iedereen bereikbaar",
      features: [
        "Wind-Free™ technologie",
        "Digital Inverter Compressor",
        "SmartThings ready",
        "Fast Cooling modus",
        "Energielabel A++"
      ],
      benefits: "Betaalbare toegang tot Samsung's innovatieve Wind-Free™ technologie zonder concessies aan kwaliteit",
      priceRange: "€2.000 - €2.600",
      highlight: false
    },
    {
      name: "Samsung AR9500T",
      tagline: "Premium functies, moderne vormgeving",
      features: [
        "Digital Inverter technologie",
        "SmartThings WiFi bediening",
        "Fast Cooling & Heating",
        "Easy Filter Plus zelfreiniging",
        "Energielabel A++"
      ],
      benefits: "Perfecte keuze voor wie Samsung kwaliteit wil met alle moderne functies tegen een aantrekkelijke prijs",
      priceRange: "€1.800 - €2.400",
      highlight: false
    }
  ];

  const windfreeExplained = [
    {
      title: "Wat Is Wind-Free™?",
      description: "Wind-Free™ is Samsung's gepatenteerde technologie die koeling levert zonder directe luchtstroom. In plaats van één grote opening heeft het frontpaneel 23.000 micro-gaatjes die koude lucht zachtjes verspreiden. U voelt geen tocht, maar de temperatuur daalt wel effectief. Dit is het verschil tussen een koude windvlaag en een subtiele, aangename koelte."
    },
    {
      title: "Hoe Werkt Het Systeem?",
      description: "Het systeem kent twee modi: Fast Cooling voor snelle afkoeling via de traditionele uitblaasopening, en Wind-Free™ modus als de gewenste temperatuur bereikt is. In Wind-Free™ modus verspreiden 23.000 micro-gaatjes koude lucht geleidelijk door de ruimte zonder directe luchtstroom. Een speciale demper absorbeert geluiden voor ultrastille werking (23 dB(A))."
    },
    {
      title: "Waarom Windvrij Beter Is",
      description: "Directe luchtstroom van conventionele airco's veroorzaakt tocht, droge huid, verhoogde kans op verkoudheid en ongelijkmatige koeling. Wind-Free™ elimineert deze problemen door gelijkmatige temperatuurverdeling zonder tocht. Gebruikers rapporteren significant beter comfort, vooral 's nachts en in kantooromgevingen waar tocht productiviteit beïnvloedt."
    },
    {
      title: "Wetenschappelijk Bewezen Comfort",
      description: "Onafhankelijk onderzoek door TÜV bevestigt dat Wind-Free™ comfort 2,3x hoger scoort dan conventionele koeling. 92% van testpersonen ervaart de Wind-Free™ modus als comfortabeler. De technologie is beschermd door meerdere internationale patenten en heeft meerdere design en innovatie awards gewonnen."
    }
  ];

  const smartFeatures = [
    {
      icon: <Smartphone className="h-8 w-8 text-sky-500" />,
      title: "SmartThings Ecosysteem",
      description: "Volledige integratie met Samsung's SmartThings platform. Bedien uw airco via de app, stem deze af op andere smart home apparaten en creëer automatische scenario's. Bijvoorbeeld: airco start automatisch als u thuiskomt (via GPS) of schakelt uit als ramen openstaan (via sensoren)."
    },
    {
      icon: <Zap className="h-8 w-8 text-sky-500" />,
      title: "AI Auto Comfort",
      description: "De AI-engine leert uw voorkeuren en gedragspatronen. Het systeem past automatisch temperatuur, luchtstroom en modus aan op basis van tijdstip, bezetting, weer en uw eerdere instellingen. Na enkele weken kent de airco uw voorkeuren beter dan uzelf."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-sky-500" />,
      title: "Energiemonitoring & Analyse",
      description: "Real-time inzicht in energieverbruik via de SmartThings app. Zie exact hoeveel uw airco kost per dag, week of maand. Ontvang AI-gedreven tips om tot 30% extra te besparen. Vergelijk uw verbruik met optimale waarden en identificeer verspilling."
    },
    {
      icon: <Wind className="h-8 w-8 text-sky-500" />,
      title: "Bixby Spraakbediening",
      description: "Bedien uw Samsung airco met uw stem via Bixby, Samsung's AI-assistent. Zeg bijvoorbeeld 'Bixby, zet de slaapkamer op 22 graden in Wind-Free modus' of 'Bixby, activeer de nachtstand'. Ook compatibel met Google Assistant en Amazon Alexa."
    }
  ];

  const faqs = [
    {
      question: "Hoe werkt Samsung Wind-Free™ technologie precies?",
      answer: "Wind-Free™ is een revolutionair tweefasen-systeem. Fase 1: Fast Cooling - de airco koelt snel via een traditionele uitblaasopening tot de gewenste temperatuur bereikt is. Fase 2: Wind-Free™ modus - 23.000 micro-gaatjes in het frontpaneel verspreiden koude lucht geleidelijk en gelijkmatig door de ruimte zonder directe luchtstroom. U voelt geen tocht, maar de temperatuur blijft stabiel. Dit is gepatenteerde technologie uniek voor Samsung, wetenschappelijk bewezen 2,3x comfortabeler dan conventionele koeling volgens TÜV onderzoek."
    },
    {
      question: "Wat zijn de voordelen van Wind-Free™ vergeleken met normale airco?",
      answer: "Wind-Free™ elimineert alle nadelen van directe luchtstroom: geen tocht of koude windvlagen, geen droge huid of ogen, verminderde kans op verkoudheid, geen geconcentreerde koude zones, en significant stiller (23 dB(A) vs. 26-30 dB bij conventionele systemen). De gelijkmatige koeling zorgt voor stabiele temperatuur door de hele ruimte zonder 'koude' en 'warme' plekken. Gebruikers ervaren dit als natuurlijk comfort, alsof de kamer vanzelf perfect getempereerd is zonder mechanische luchtstroom."
    },
    {
      question: "Hoe integreert Samsung airco met SmartThings?",
      answer: "Als onderdeel van het Samsung SmartThings ecosysteem integreert de airco naadloos met alle andere compatible apparaten. Via de SmartThings app bedient u de airco op afstand, creëert u automatische scenario's (bijvoorbeeld: als thuistemperatuur  meer dan 25°C → start airco automatisch), ontvangt u onderhoudsmeldingen en energiealerts, monitort u real-time verbruik, en bedient u via spraak (Bixby, Google, Alexa). De AI leert uw gedrag en past automatisch aan. Als u Samsung TV, koelkast of andere devices heeft, werken deze samen voor optimaal comfort."
    },
    {
      question: "Wat is de Digital Inverter 8-Pole compressor?",
      answer: "De Digital Inverter 8-Pole compressor is Samsung's meest geavanceerde compressor met 8 magnetische polen (conventionele inverters hebben 4-6). Dit resulteert in 73% lagere energiekosten vergeleken met niet-inverter modellen, 43% stiller werking door minder trillingen, snellere koeling en verwarming, en langere levensduur door verminderde slijtage. Samsung biedt 10 jaar garantie op deze compressor als bewijs van betrouwbaarheid. De technologie past vermogen 128 keer per seconde aan voor extreem nauwkeurige temperatuurcontrole."
    },
    {
      question: "Is een Samsung airco geschikt voor gebruik in de slaapkamer?",
      answer: "Absoluut, zelfs uitstekend geschikt! Wind-Free™ modellen zijn ideaal voor slaapkamers omdat: geen tocht betekent geen droge keel of verkoeling 's nachts, ultrastil vanaf 23 dB(A) (stiller dan een koelkast), gelijkmatige koeling voorkomt te koud worden onder de uitblaas, Good Sleep modus optimaliseert temperatuur automatisch voor optimale slaap, en de nachtmodus dimmt alle LED's volledig. Gebruikers rapporteren significant betere slaapkwaliteit vergeleken met conventionele airco's. De Wind-Free™ technologie werd specifiek ontwikkeld voor comfortzones zoals slaapkamers."
    },
    {
      question: "Hoeveel energie bespaart een Samsung airco?",
      answer: "Samsung airco's met Digital Inverter 8-Pole compressor scoren energielabel A+++ met SCOP waarden tot 5,1 voor verwarming. Dit betekent 410% gratis energie uit de buitenlucht. Vergeleken met oude niet-inverter systemen bespaart u 73% op energiekosten. Praktisch: waar een oud systeem €1.500/jaar kost, betaalt u met Samsung €400-600/jaar - een besparing van €900-1.100. Over 5 jaar bespaart u €4.500-5.500. De AI Auto Comfort functie optimaliseert verder voor 20-30% extra besparing door slim energieverbruik te sturen."
    },
    {
      question: "Wat is de garantie op een Samsung airco?",
      answer: "Samsung biedt standaard 2 jaar volledige fabrieksgarantie op alle componenten, uitgebreid tot 10 jaar op de Digital Inverter compressor (het belangrijkste en duurste onderdeel). Bij registratie binnen 90 dagen na installatie door erkend installateur zoals StayCool Airco activeert u automatisch deze garantie. De lange compressor garantie toont vertrouwen in betrouwbaarheid en kwaliteit. Onze ervaring toont zeer lage storingskansen bij correct onderhoud - Samsung investeert zwaar in kwaliteitscontrole en duurzaamheid."
    },
    {
      question: "Wat kost een Samsung airco installatie in Limburg?",
      answer: "Een complete Samsung airco installatie door StayCool Airco varieert tussen €1.800 en €3.400 afhankelijk van het gekozen model. De AR9500T serie start vanaf €1.800, Wind-Free™ Comfort vanaf €2.000 en de Wind-Free™ Elite (topmodel) vanaf €2.600 inclusief professionele installatie, SmartThings configuratie, garantieregistratie en afvoer oude apparatuur. Deze all-in prijzen zijn transparant zonder verborgen kosten. Voor een exacte offerte op maat bieden we een gratis plaatsbezoek en adviesgesprek aan. Als erkend Samsung partner garanderen we correcte installatie volgens fabrieksspecificaties."
    }
  ];

  return (
    <>
      <MetaTags
        title="Samsung Airco Limburg | Wind-Free™ SmartThings A+++ | StayCool Airco"
        description="Samsung airco systemen ✓ Wind-Free™ windvrije koeling ✓ SmartThings ✓ 10 jaar garantie ✓ A+++ efficiency ✓ Erkend installateur. Gratis advies!"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Samsung Airco Systemen",
          description: "Samsung airconditioners met Wind-Free™ technologie, SmartThings integratie en Digital Inverter compressor. Professionele installatie door StayCool Airco",
          brand: {
            "@type": "Brand",
            name: "Samsung"
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: "1800",
            highPrice: "3400",
            availability: "https://schema.org/InStock",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "134"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Samsung Airco: Revolutionaire Wind-Free™ Technologie
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Ervaar comfort zonder tocht met Samsung's innovatieve Wind-Free™ koeling. Naadloze SmartThings integratie, AI-besturing en 10 jaar garantie op de Digital Inverter compressor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              Gratis Offerte Aanvragen
            </Link>
            <Link to="/capaciteit-calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Capaciteit
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Erkend Samsung Partner</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Wind-Free™ Specialist</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>SmartThings Configuratie</span>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
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

      {/* Wind-Free Explanation */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Wind-Free™: De Toekomst Van Airconditioning
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              23.000 micro-gaatjes verspreiden koude lucht zonder tocht - wetenschappelijk bewezen 2,3x comfortabeler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {windfreeExplained.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur rounded-lg p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">23.000</div>
                <p className="text-blue-100">Micro-gaatjes voor gelijkmatige koeling</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">2,3x</div>
                <p className="text-blue-100">Hoger comfort volgens TÜV onderzoek</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">23 dB(A)</div>
                <p className="text-blue-100">Ultrastille werking in Wind-Free™ modus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Samsung Airco Modellen
          </h2>

          <div className="space-y-8">
            {productSeries.map((series, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  series.highlight ? 'ring-4 ring-sky-500' : ''
                }`}
              >
                {series.highlight && (
                  <div className="bg-sky-500 text-white text-center py-2 font-semibold">
                    MEEST POPULAIR - WIND-FREE™ TECHNOLOGIE
                  </div>
                )}
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <Wind className="h-8 w-8 text-sky-500 mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{series.name}</h3>
                        <p className="text-gray-600 italic">{series.tagline}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {series.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-sky-50 rounded-lg p-4">
                      <p className="text-gray-700">
                        <strong>Perfect voor:</strong> {series.benefits}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-gradient-to-br from-sky-500 to-blue-600 p-8 flex flex-col justify-center items-center text-white">
                    <div className="text-center">
                      <p className="text-sm font-semibold mb-2 text-sky-100">Vanaf</p>
                      <p className="text-4xl font-bold mb-4">{series.priceRange.split(' - ')[0]}</p>
                      <p className="text-sm mb-6 text-sky-100">Inclusief installatie</p>
                      <Link
                        to="/contact"
                        className="inline-block px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors"
                      >
                        Vraag Offerte Aan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            SmartThings: Uw Airco Wordt Intelligent
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {smartFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              SmartThings App Mogelijkheden
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bediening op afstand wereldwijd</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dagelijkse en wekelijkse schema's</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Energieverbruik real-time monitoring</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automatische scenario's en routines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Spraakbediening (Bixby, Google, Alexa)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Onderhoudsmeldingen en diagnostiek</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Integratie met andere Samsung apparaten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">AI-besparingstips en optimalisatie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Firmware updates via WiFi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Savings */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            73% Energiebesparing Met Digital Inverter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">€1.100</div>
              <p className="text-gray-600">Gemiddelde jaarlijkse besparing vs. oude systemen</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">SCOP 5,1</div>
              <p className="text-gray-600">410% gratis energie uit de buitenlucht</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Euro className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">2-3 jaar</div>
              <p className="text-gray-600">Terugverdientijd door energiebesparing</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Digital Inverter 8-Pole Voordelen
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Traditionele Compressor</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ Aan/uit schakelend → energie-verspilling</li>
                  <li>✗ Temperatuurschommelingen van 2-3°C</li>
                  <li>✗ Hoger geluidsniveau (30-35 dB)</li>
                  <li>✗ Kortere levensduur (10-12 jaar)</li>
                  <li>✗ Hoger stroomverbruik bij opstarten</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Samsung Digital Inverter 8-Pole</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Continu variabel vermogen → 73% besparing</li>
                  <li>✓ Stabiele temperatuur binnen 0,5°C</li>
                  <li>✓ Ultrastil (19-23 dB)</li>
                  <li>✓ Lange levensduur (20+ jaar) met 10 jaar garantie</li>
                  <li>✓ Zachte start → geen stroompieken</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
              <p className="text-gray-900 font-semibold mb-2">Praktisch Rekenvoorbeeld:</p>
              <p className="text-gray-700">
                Oude airco: €1.500/jaar → Samsung Digital Inverter: €400/jaar = <strong className="text-green-600">€1.100 jaarlijkse besparing</strong>.
                Over 5 jaar bespaart u €5.500 en verdient de investering zichzelf terug in 2-3 jaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Samsung Installatie Door Erkend Partner
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                StayCool Airco: Erkend Samsung Specialist
              </h3>
              <p className="text-gray-700 mb-6">
                Als erkend Samsung installatiepartner zijn wij gespecialiseerd in Wind-Free™ technologie en SmartThings integratie. Onze technici zijn volledig getraind op alle Samsung modellen en configureren uw complete smart home ecosysteem voor naadloze werking.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Erkend Samsung Partner</strong>
                    <p className="text-gray-600 mt-1">Officiële certificering voor alle Samsung airco series</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Wifi className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">SmartThings Expert Setup</strong>
                    <p className="text-gray-600 mt-1">Volledige configuratie WiFi, app en smart home integratie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">10 Jaar Garantie Activatie</strong>
                    <p className="text-gray-600 mt-1">Registratie bij Samsung voor maximale garantiedekking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">F-gassen Gecertificeerd</strong>
                    <p className="text-gray-600 mt-1">Wettelijk verplichte kwalificatie voor professionele installatie</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Complete Installatieservice
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gratis plaatsbezoek en capaciteitsadvies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transparante all-in offerte</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professionele montage volgens Samsung richtlijnen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">WiFi configuratie en SmartThings setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">App installatie en instructie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Spraakassistent configuratie (Bixby/Google/Alexa)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scenario's en automatiseringen instellen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Volledige instructie Wind-Free™ functies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Garantieregistratie bij Samsung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Afvoer oude apparatuur</span>
                </li>
              </ul>

              <div className="mt-6 bg-white rounded-lg p-4">
                <p className="text-gray-900 font-semibold mb-2">Service Gebied: Heel Limburg</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>✓ Maastricht</div>
                  <div>✓ Roermond</div>
                  <div>✓ Heerlen</div>
                  <div>✓ Sittard</div>
                  <div>✓ Venlo</div>
                  <div>✓ Weert</div>
                  <div>✓ Kerkrade</div>
                  <div>✓ Venray</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen Over Samsung Airco
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ervaar Wind-Free™ Comfort
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag nu een gratis adviesgesprek aan en ontdek waarom Samsung's Wind-Free™ technologie de toekomst is van airconditioning. Windvrij comfort met SmartThings AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
          <p className="mt-6 text-orange-100 text-sm">
            Ook bereikbaar via WhatsApp: 06 36481054
          </p>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Gerelateerde Informatie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/aircos" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <Wind className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Airco Installatie
              </h3>
              <p className="text-gray-600 mb-4">
                Complete informatie over airco installatie in Limburg
              </p>
              <span className="text-sky-600 font-semibold hover:text-sky-700">
                Lees meer →
              </span>
            </Link>

            <Link to="/capaciteit-calculator" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <Calculator className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Capaciteit Berekenen
              </h3>
              <p className="text-gray-600 mb-4">
                Bereken de juiste capaciteit voor uw ruimte
              </p>
              <span className="text-sky-600 font-semibold hover:text-sky-700">
                Naar calculator →
              </span>
            </Link>

            <Link to="/onderhoud" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <Shield className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Airco Onderhoud
              </h3>
              <p className="text-gray-600 mb-4">
                Jaarlijks onderhoud voor optimale prestaties
              </p>
              <span className="text-sky-600 font-semibold hover:text-sky-700">
                Lees meer →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SamsungAirco;
