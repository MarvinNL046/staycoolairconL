import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Calculator, TrendingUp, Star, Award, Snowflake, Wifi } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const LGAircoSystemen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Merken', path: '/aircos' },
    { label: 'LG Airco Systemen' }
  ];

  const usps = [
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "ThinQ Technologie",
      description: "Slimme AI-gestuurde klimaatbeheersing via smartphone met energiebesparing tot 40%"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "10 Jaar Compressor Garantie",
      description: "Industrieleidende garantie op het belangrijkste onderdeel toont vertrouwen in kwaliteit"
    },
    {
      icon: <Wind className="h-12 w-12 text-sky-500" />,
      title: "Dual Inverter Compressor",
      description: "Revolutionair compressordesign voor 70% energiebesparing en ultrastille werking"
    },
    {
      icon: <Star className="h-12 w-12 text-sky-500" />,
      title: "Artcool Design",
      description: "Bekroonde designs die airconditioning transformeren naar interieur kunst"
    }
  ];

  const productLines = [
    {
      name: "LG ARTCOOL Gallery",
      tagline: "De airco die lijkt op een kunstwerk",
      features: [
        "Verwisselbare fotolijst frontpaneel",
        "Dual Inverter Compressor™",
        "WiFi ThinQ bediening standaard",
        "UVnano™ zelfreinigende technologie",
        "Energielabel A+++"
      ],
      benefits: "Perfect voor design-bewuste klanten die geen compromis willen tussen esthetiek en functionaliteit",
      priceRange: "€2.800 - €3.800"
    },
    {
      name: "LG ARTCOOL Mirror",
      tagline: "Spiegelend design dat verdwijnt in uw interieur",
      features: [
        "Spiegelend front paneel",
        "Dual Inverter Compressor™",
        "Active Energy Control",
        "4-weg luchtstroom",
        "Zeer stil: 19 dB(A)"
      ],
      benefits: "Ideaal voor luxe interieurs waar de airco moet opgaan in het design",
      priceRange: "€2.600 - €3.400"
    },
    {
      name: "LG Standard Plus",
      tagline: "Betaalbare kwaliteit met alle essentiële functies",
      features: [
        "Dual Inverter Compressor™",
        "Gold Fin™ anticorrosie coating",
        "Smart ThinQ WiFi (optioneel)",
        "Auto Cleaning functie",
        "Energielabel A+++"
      ],
      benefits: "Uitstekende prijs-kwaliteitverhouding voor wie betrouwbare prestaties wil zonder te veel te betalen",
      priceRange: "€1.800 - €2.400"
    }
  ];

  const technicalInnovations = [
    {
      title: "Dual Inverter Compressor™",
      description: "De revolutionaire Dual Inverter Compressor™ van LG heeft twee rotors in plaats van één, wat resulteert in snellere koeling/verwarming, 70% energiebesparing, 25% stiller werking en een langere levensduur. Deze technologie is beschermd door 23 internationale patenten en heeft meerdere innovatie awards gewonnen."
    },
    {
      title: "ThinQ AI Technologie",
      description: "LG ThinQ is meer dan gewoon WiFi-bediening. Het systeem leert uw gedrag, past automatisch temperatuur en luchtstroom aan op basis van bezetting en weersverwachtingen, integreert met Google Assistant en Amazon Alexa, en geeft energiebesparingstips. De AI optimaliseert continu voor maximaal comfort bij minimaal energieverbruik."
    },
    {
      title: "UVnano™ Zelfreiniging",
      description: "UVnano™ technologie gebruikt UV-C LED's om 99.99% van bacteriën op de ventilatorbladen te elimineren. Het systeem reinigt zichzelf automatisch na elke gebruikssessie, voorkomt schimmelgroei en onaangename geuren, en zorgt voor continue gezonde luchtkwaliteit zonder handmatig onderhoud."
    },
    {
      title: "Active Energy Control",
      description: "Met Active Energy Control stelt u een maximaal energieverbruik in (bijvoorbeeld 50% of 80% van nominaal vermogen). Het systeem past automatisch koeling/verwarming aan om binnen deze limiet te blijven, wat resulteert in voorspelbare energiekosten en tot 40% extra besparing tijdens piekuren."
    }
  ];

  const faqs = [
    {
      question: "Wat maakt LG Dual Inverter Compressor anders dan normale inverters?",
      answer: "De LG Dual Inverter Compressor™ heeft twee rotors die in tegengestelde richting draaien, in plaats van één rotor bij standaard inverters. Dit unieke ontwerp heeft meerdere voordelen: 40% snellere koeling tot gewenste temperatuur, 70% lager energieverbruik vergeleken met niet-inverter modellen, 25% stiller door minder trillingen, en een langere levensduur door minder slijtage. Het systeem is beschermd door 23 patenten en heeft bewezen effectiever te zijn dan conventionele inverter technologie."
    },
    {
      question: "Hoe werkt LG ThinQ en welke smart functies zijn er?",
      answer: "LG ThinQ is het intelligente besturingssysteem dat uw airco verbindt met smartphone, tablet en slimme speakers. Via de ThinQ app bedient u de airco op afstand, stelt u schema's in, monitort u energieverbruik in real-time en ontvangt u onderhoudsmeldingen. De AI leert uw voorkeuren en past automatisch instellingen aan. Spraakbediening werkt met Google Assistant en Amazon Alexa - zeg bijvoorbeeld 'OK Google, zet de airco op 22 graden'. Het systeem kan ook weersverwachtingen gebruiken om proactief te koelen of verwarmen."
    },
    {
      question: "Wat is het verschil tussen ARTCOOL Gallery en ARTCOOL Mirror?",
      answer: "ARTCOOL Gallery heeft een verwisselbaar frontpaneel waar u een eigen foto, kunstwerk of geleverde designs kunt plaatsen. Het paneel is 450x450mm en transformeert de airco letterlijk in een fotolijst aan de muur. ARTCOOL Mirror heeft een vast spiegelend front paneel dat reflecteert als een echte spiegel en visueel 'verdwijnt' in uw interieur. Beide hebben dezelfde technische specificaties (Dual Inverter, ThinQ, energielabel A+++), dus de keuze is puur esthetisch. Gallery kost iets meer vanwege het verwisselbare paneel systeem."
    },
    {
      question: "Hoeveel energie bespaart een LG airco echt?",
      answer: "Een LG airco met Dual Inverter Compressor™ bespaart 70% energie vergeleken met oudere niet-inverter modellen. Ten opzichte van standaard inverter airconditioners bespaart het nog 30-40% extra. In euro's betekent dit: waar een oud systeem €100/maand kost, betaalt u met LG €30-40/maand. Over een jaar is dit €600-800 besparing. Met Active Energy Control kunt u verbruik verder beperken door een maximaal stroomverbruik in te stellen. De SCOP (verwarmingsefficiency) ligt tussen 4,7-5,0, wat betekent 370-400% gratis energie uit de buitenlucht."
    },
    {
      question: "Is LG betrouwbaar genoeg voor lange termijn?",
      answer: "Absoluut. LG is een van de grootste elektronica fabrikanten ter wereld met strikte kwaliteitscontrole. De 10 jaar garantie op de Dual Inverter Compressor (het belangrijkste en duurste onderdeel) toont het vertrouwen in betrouwbaarheid. LG investeert jaarlijks miljarden in R&D en heeft 23 patenten alleen al op de Dual Inverter technologie. Onze ervaring met LG installaties toont een zeer lage storingskans en uitstekende klanttevredenheid. De levensduur ligt gemiddeld op 15-20 jaar bij correct onderhoud."
    },
    {
      question: "Werkt een LG airco ook goed bij verwarmen in de winter?",
      answer: "Ja, LG warmtepompen presteren uitstekend tot -15°C buitentemperatuur, met volledige verwarmingscapaciteit tot -7°C. De Dual Inverter Compressor blijft efficiënt werken zelfs bij vrieskou. Met een SCOP van 4,7-5,0 produceert het systeem 4,7-5 kW warmte voor elke 1 kW elektriciteit. Dit is 4-5x efficiënter dan elektrische verwarming en 2-3x goedkoper dan gasverwarming bij huidige energieprijzen. De verwarmingsfunctie start snel en bereikt comfortabele temperaturen binnen 10-15 minuten."
    },
    {
      question: "Wat is UVnano technologie en waarom is dit belangrijk?",
      answer: "UVnano™ is LG's zelfreinigende technologie die UV-C LED's gebruikt om bacteriën en schimmels te elimineren. Na elke gebruikssessie draait de ventilator met UV-C verlichting actief om 99.99% van bacteriën op de bladen te doden. Dit voorkomt schimmelgroei, bacterieophoping en onaangename geuren die kunnen ontstaan in vochtige omstandigheden. Het resulteert in gezondere lucht, minder handmatig onderhoud en een langere levensduur van het systeem. Vooral belangrijk voor mensen met allergieen of luchtwegproblemen."
    },
    {
      question: "Wat kost een LG airco installatie in Limburg?",
      answer: "Een complete LG airco installatie door StayCool Airco varieert tussen €1.800 en €3.800 afhankelijk van het model en installatiecomplexiteit. De Standard Plus serie start vanaf €1.800, ARTCOOL Mirror vanaf €2.600 en ARTCOOL Gallery vanaf €2.800 inclusief installatie, afvoer oude apparatuur, certificering en garantieregistratie. De 10 jaar compressor garantie is altijd inbegrepen. Bij StayCool Airco krijgt u een transparante all-in offerte zonder verborgen kosten. Vraag een gratis adviesgesprek aan voor een exacte prijsopgave voor uw situatie."
    }
  ];

  return (
    <>
      <MetaTags
        title="LG Airco Systemen Limburg | ThinQ, Dual Inverter, ARTCOOL | StayCool"
        description="LG airco systemen ✓ Dual Inverter ✓ ThinQ smart control ✓ ARTCOOL design ✓ 10 jaar garantie ✓ Erkend installateur. Gratis advies!"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "LG Airco Systemen",
          description: "LG airconditioners met Dual Inverter Compressor, ThinQ smart control en ARTCOOL design. Professionele installatie door StayCool Airco in Limburg",
          brand: {
            "@type": "Brand",
            name: "LG"
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: "1800",
            highPrice: "3800",
            availability: "https://schema.org/InStock",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "143"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            LG Airco Systemen: Smart, Stil & Energiezuinig
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Ontdek LG's revolutionaire Dual Inverter technologie met ThinQ AI-besturing. Van het iconische ARTCOOL design tot betaalbare kwaliteit - LG combineert innovatie met betrouwbaarheid.
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
              <span>Erkend LG Partner</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>10 Jaar Compressor Garantie</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>ThinQ Smart Control</span>
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

      {/* Main Content - Why LG */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Waarom Kiezen Voor LG Airconditioning?
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              LG Electronics is een wereldwijd technologie innovator die bekend staat om <strong>cutting-edge R&D en gebruiksvriendelijk design</strong>. In de wereld van airconditioning heeft LG een reputatie opgebouwd met de revolutionaire Dual Inverter Compressor™ - een technologie beschermd door 23 internationale patenten die 70% energiebesparing realiseert ten opzichte van conventionele systemen.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Wat LG uniek maakt is de combinatie van <strong>geavanceerde technologie met intuïtief design</strong>. De ThinQ AI-besturing maakt uw airco niet alleen smart, maar echt intelligent - het systeem leert van uw gedrag en optimaliseert automatisch voor maximaal comfort bij minimaal energieverbruik. Via smartphone, spraakassistent of de stijlvolle afstandsbediening heeft u altijd volledige controle.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Bij StayCool Airco zijn we trots erkend LG partner te zijn. We installeren het complete LG portfolio: van de <strong>betaalbare Standard Plus serie</strong> tot de iconische <strong>ARTCOOL Gallery en Mirror designs</strong> die airconditioning transformeren naar interieur kunst. Elke installatie wordt uitgevoerd volgens LG specificaties en geregistreerd voor de volledige 10 jaar compressor garantie.
            </p>
          </div>

          {/* Product Lines */}
          <div className="space-y-8">
            {productLines.map((line, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <Star className="h-8 w-8 text-sky-500 mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{line.name}</h3>
                        <p className="text-gray-600 italic">{line.tagline}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {line.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-sky-50 rounded-lg p-4 mb-6">
                      <p className="text-gray-700">
                        <strong>Ideaal voor:</strong> {line.benefits}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-gradient-to-br from-sky-500 to-blue-600 p-8 flex flex-col justify-center items-center text-white">
                    <div className="text-center">
                      <p className="text-sm font-semibold mb-2 text-sky-100">Vanaf</p>
                      <p className="text-4xl font-bold mb-4">{line.priceRange.split(' - ')[0]}</p>
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

      {/* Technical Innovations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            LG Innovaties Die Het Verschil Maken
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalInnovations.map((innovation, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Zap className="h-6 w-6 mr-2 text-sky-500" />
                  {innovation.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Inverter Explained */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dual Inverter Compressor™: De Revolutie In Efficiency
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              23 internationale patenten beschermen deze doorbraak technologie die 70% energiebesparing realiseert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">70%</div>
              <p className="text-blue-100">Energiebesparing vs. niet-inverter</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">40%</div>
              <p className="text-blue-100">Sneller op temperatuur</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">25%</div>
              <p className="text-blue-100">Stiller dan standaard inverter</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">10</div>
              <p className="text-blue-100">Jaar fabrieksgarantie</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Hoe Werkt Het?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Traditionele Compressor
                </h4>
                <ul className="space-y-2 text-blue-100">
                  <li>✗ Eén rotor draait in één richting</li>
                  <li>✗ Meer trillingen en geluid</li>
                  <li>✗ Langzamer op temperatuur</li>
                  <li>✗ Hoger energieverbruik</li>
                  <li>✗ Kortere levensduur</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  LG Dual Inverter™
                </h4>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Twee rotors draaien in tegengestelde richting</li>
                  <li>✓ Minimale trillingen, ultrastil</li>
                  <li>✓ 40% sneller gewenste temperatuur</li>
                  <li>✓ 70% minder energieverbruik</li>
                  <li>✓ Langere levensduur door minder slijtage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ThinQ Smart Control */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ThinQ: Meer Dan Alleen Smart Control
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                LG ThinQ transformeert uw airco van een apparaat naar een intelligent klimaatsysteem dat leert, anticipeert en optimaliseert. Het is het verschil tussen een schakelaar en een slim systeem dat denkt voor u.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Wifi className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bediening Overal</h4>
                    <p className="text-gray-600">Bedien uw airco vanaf smartphone, tablet of via Google/Alexa spraakassistent</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">AI Leergedrag</h4>
                    <p className="text-gray-600">Systeem leert uw voorkeuren en past automatisch instellingen aan voor optimaal comfort</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Energiemonitoring</h4>
                    <p className="text-gray-600">Real-time inzicht in verbruik met tips om nog meer te besparen</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proactieve Meldingen</h4>
                    <p className="text-gray-600">Ontvang onderhoudsmeldingen en waarschuwingen voordat problemen ontstaan</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ThermometerSun className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Weersintegratie</h4>
                    <p className="text-gray-600">Gebruikt weersverwachtingen om proactief te koelen of verwarmen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ThinQ App Functies</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bediening op afstand vanaf overal ter wereld</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Wekelijkse en dagelijkse schema's programmeren</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Energieverbruik monitoring per dag/week/maand</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Spraakbediening via Google Assistant & Alexa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automatische firmware updates voor nieuwe functies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Onderhoudsmeldingen en filter vervangingswaarschuwingen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Temperatuurgeschiedenis en gebruiksstatistieken</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Energiebesparingsmodus met instelbaar verbruik limiet</span>
                </li>
              </ul>

              <div className="mt-6 bg-sky-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Compatibiliteit:</strong> iOS 12.0+ en Android 6.0+ | Gratis app zonder abonnement | Werkt wereldwijd via internet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Savings Calculator */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Hoeveel Bespaart Een LG Airco U?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Euro className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">€1.000</div>
              <p className="text-gray-600">Gemiddelde jaarlijkse besparing vs. oude systemen</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">SCOP 4,9</div>
              <p className="text-gray-600">390% gratis energie uit de buitenlucht</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">2-3 jaar</div>
              <p className="text-gray-600">Terugverdientijd door energiebesparing</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vergelijking Jaarlijkse Energiekosten</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4">Systeem Type</th>
                    <th className="text-right py-3 px-4">Jaarverbruik</th>
                    <th className="text-right py-3 px-4">Kosten (€0,35/kWh)</th>
                    <th className="text-right py-3 px-4">Verschil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Oude airco (zonder inverter)</td>
                    <td className="text-right py-3 px-4 text-gray-700">4.500 kWh</td>
                    <td className="text-right py-3 px-4 text-gray-700">€1.575</td>
                    <td className="text-right py-3 px-4 text-red-600">-</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Standaard inverter airco</td>
                    <td className="text-right py-3 px-4 text-gray-700">2.200 kWh</td>
                    <td className="text-right py-3 px-4 text-gray-700">€770</td>
                    <td className="text-right py-3 px-4 text-gray-700">€805 besparing</td>
                  </tr>
                  <tr className="bg-green-50 font-semibold">
                    <td className="py-3 px-4 text-gray-900">LG Dual Inverter</td>
                    <td className="text-right py-3 px-4 text-gray-900">1.600 kWh</td>
                    <td className="text-right py-3 px-4 text-gray-900">€560</td>
                    <td className="text-right py-3 px-4 text-green-600">€1.015 besparing</td>
                  </tr>
                  <tr className="bg-blue-50 font-semibold">
                    <td className="py-3 px-4 text-gray-900">LG + Active Energy Control</td>
                    <td className="text-right py-3 px-4 text-gray-900">1.200 kWh</td>
                    <td className="text-right py-3 px-4 text-gray-900">€420</td>
                    <td className="text-right py-3 px-4 text-blue-600">€1.155 besparing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              * Berekening voor gemiddelde woning 120m², verwarming + koeling, SCOP 4,9, elektriciteit €0,35/kWh (2024)
            </p>
          </div>
        </div>
      </section>

      {/* Installation & Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            LG Installatie Door Erkend Partner StayCool Airco
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Waarom StayCool Airco Voor Uw LG Systeem?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Erkend LG Partner</strong>
                    <p className="text-gray-600 mt-1">Officiële certificering voor installatie van alle LG modellen inclusief ARTCOOL</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Volledige Garantie Activatie</strong>
                    <p className="text-gray-600 mt-1">Registratie bij LG voor 10 jaar compressor garantie + 2 jaar volledige dekking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">ThinQ Setup Service</strong>
                    <p className="text-gray-600 mt-1">Volledige configuratie van WiFi en smart functies inclusief app installatie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">F-gassen Gecertificeerd</strong>
                    <p className="text-gray-600 mt-1">Wettelijk verplichte kwalificatie voor veilig en vakkundig werken</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                All-in Installatieservice
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gratis plaatsbezoek en capaciteitsberekening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transparante offerte zonder verborgen kosten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professionele montage volgens LG specificaties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Elektrische aansluiting en condensafvoer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">WiFi configuratie en ThinQ app setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Uitgebreide instructie alle functies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Garantieregistratie bij LG</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Afvoer oude apparatuur indien gewenst</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 jaar gratis nazorg en advies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Service Gebied: Heel Limburg
            </h3>
            <p className="text-gray-700 mb-6">
              StayCool Airco installeert LG airconditioners door heel Limburg. Onze monteurs kennen de regio en zijn snel ter plaatse voor installatie, onderhoud en service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-gray-700">✓ Maastricht</div>
              <div className="text-gray-700">✓ Roermond</div>
              <div className="text-gray-700">✓ Heerlen</div>
              <div className="text-gray-700">✓ Sittard-Geleen</div>
              <div className="text-gray-700">✓ Venlo</div>
              <div className="text-gray-700">✓ Weert</div>
              <div className="text-gray-700">✓ Kerkrade</div>
              <div className="text-gray-700">✓ Venray</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen Over LG Airco
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
            Klaar Voor Een Slimme LG Airco?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag nu een gratis adviesgesprek aan en ontdek welk LG model perfect bij uw wensen past. Van betaalbare kwaliteit tot iconisch ARTCOOL design.
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

export default LGAircoSystemen;
