import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Calculator, TrendingUp, Star, Award, Snowflake } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const MitsubishiHeavyAirco = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Merken', path: '/aircos' },
    { label: 'Mitsubishi Heavy Airco' }
  ];

  const usps = [
    {
      icon: <Star className="h-12 w-12 text-sky-500" />,
      title: "Japanse Precisie",
      description: "Mitsubishi Heavy Industries levert industriële kwaliteit en duurzaamheid voor residentiële toepassingen"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "7 Jaar Garantie",
      description: "Uitgebreide fabrieksgarantie van 7 jaar als bewijs van uitzonderlijke betrouwbaarheid en kwaliteit"
    },
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "A+++ Efficiency",
      description: "Hoogste energie-efficiëntie met SCOP waarden tot 5,1 voor maximale besparing op energiekosten"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "Premium Kwaliteit",
      description: "Ontwikkeld volgens industriële normen voor langdurige en probleemloze werking"
    }
  ];

  const modelSeries = [
    {
      name: "Diamond Serie",
      description: "Het vlaggenschip met alle innovaties",
      features: [
        "3D i-See sensor voor automatische klimaatregeling",
        "Hyper Inverter voor stabiele temperatuur",
        "Plasma Quad filtratiesysteem",
        "WiFi bediening standaard",
        "Zeer stil: vanaf 19 dB(A)"
      ],
      applications: "Perfecte keuze voor wie het beste wil: woonkamers, slaapkamers, kantoren"
    },
    {
      name: "Premium Serie",
      strong: "Uitstekende prijs-kwaliteitverhouding",
      features: [
        "Inverter technologie voor efficiency",
        "Dual Barrier Coating voor zelfreiniging",
        "Nachtmodus voor optimaal slaapcomfort",
        "Intelligente ontvochtigen functie",
        "Energielabel A+++"
      ],
      applications: "Ideaal voor bewuste consumenten: complete woningen, kleine kantoren"
    },
    {
      name: "Compact Serie",
      description: "Ruimtebesparend zonder concessies",
      features: [
        "Ultraslanke binnenunit design",
        "Krachtige prestaties in compact formaat",
        "Stil en energiezuinig",
        "Perfect voor kleine ruimtes",
        "Eenvoudige installatie"
      ],
      applications: "Optimaal voor kleinere ruimtes: slaapkamers, studio's, kleine kantoren"
    }
  ];

  const technicalAdvantages = [
    {
      title: "Hyper Inverter Technologie",
      description: "De geavanceerde Hyper Inverter technologie van Mitsubishi Heavy past het vermogen extreem nauwkeurig aan. Dit zorgt voor een stabiele kamertemperatuur zonder temperatuurschommelingen, maximale energie-efficiency en een langere levensduur van het systeem. Het compressorsysteem werkt sneller en nauwkeuriger dan conventionele inverters."
    },
    {
      title: "3D i-See Sensor (Diamond Serie)",
      description: "De revolutionaire 3D i-See sensor scant de hele kamer in 3D en detecteert temperatuurverschillen per zone. Het systeem past de luchtstroom automatisch aan om overal dezelfde comfortabele temperatuur te bereiken. De sensor detecteert zelfs of er mensen in de kamer zijn en waar ze zich bevinden voor optimaal comfort."
    },
    {
      title: "Plasma Quad Filtratiesysteem",
      description: "Het unieke 4-traps filtratiesysteem combineert voorfilter, elektrostatisch filter, actieve koolstoffilter en Plasma Quad technologie. Dit systeem vangt 99% van alle stofdeeltjes, pollen, bacteriën en virussen. Geuren en schadelijke stoffen worden effectief verwijderd voor de gezondste luchtkwaliteit."
    },
    {
      title: "Dual Barrier Coating",
      description: "De binnen- en buitenunit zijn voorzien van een speciale Dual Barrier coating die vuil en schimmel afstoot. Dit zelfreinigende effect voorkomt bacteriegroei, verlengt de levensduur, reduceert onderhoudskosten en zorgt altijd voor optimale luchtkwaliteit zonder onaangename geuren."
    }
  ];

  const faqs = [
    {
      question: "Wat is het verschil tussen Mitsubishi Heavy en Mitsubishi Electric?",
      answer: "Mitsubishi Heavy Industries (MHI) en Mitsubishi Electric zijn twee aparte Japanse bedrijven die beide airconditioning produceren. MHI richt zich op industriële kwaliteit en duurzaamheid, met roots in zware industrie en scheepsbouw. Dit resulteert in robuustere systemen met vaak langere garanties. Mitsubishi Electric richt zich meer op consumentenelektronica en innovatie. Beide merken zijn excellent, maar MHI staat bekend om extreme betrouwbaarheid en langere levensduur."
    },
    {
      question: "Hoe stil is een Mitsubishi Heavy airco?",
      answer: "Mitsubishi Heavy airconditioners behoren tot de stilste op de markt. De Diamond en Premium series hebben een minimaal geluidsniveau vanaf 19 dB(A) in nachtmodus, wat stiller is dan fluisteren (30 dB). De Compact serie start vanaf 21 dB(A). Door de Hyper Inverter technologie werkt het systeem zeer stabiel zonder hinderlijke trillingen. Dit maakt ze uitermate geschikt voor slaapkamers en werkruimtes waar stilte essentieel is."
    },
    {
      question: "Welke garantie krijg ik op een Mitsubishi Heavy airco?",
      answer: "Mitsubishi Heavy biedt standaard 5 jaar fabrieksgarantie op alle componenten. Bij registratie binnen 3 maanden na installatie door een erkend installateur zoals StayCool Airco wordt dit automatisch verlengd naar 7 jaar garantie. Deze langere garantieperiode toont het vertrouwen in de uitzonderlijke kwaliteit en betrouwbaarheid. De garantie dekt alle onderdelen inclusief compressor, en geldt alleen bij correct uitgevoerd jaarlijks onderhoud."
    },
    {
      question: "Wat is de 3D i-See sensor en hoe werkt deze?",
      answer: "De 3D i-See sensor is een geavanceerd infrarood scansysteem dat exclusief beschikbaar is in de Diamond serie. De sensor scant de hele ruimte 752 keer per seconde en maakt een 3D temperatuurkaart van de kamer. Het systeem detecteert waar mensen zich bevinden en past de luchtstroom en temperatuur automatisch aan om overal hetzelfde comfort te bereiken. Als niemand aanwezig is, schakelt het systeem automatisch naar energiebesparingsmodus. Dit levert tot 20% extra energiebesparing op."
    },
    {
      question: "Hoe energiezuinig is een Mitsubishi Heavy airco?",
      answer: "Mitsubishi Heavy airconditioners scoren uitstekend op energie-efficiency met energielabels A+++ op de Premium en Diamond series. De SCOP (verwarmingsefficiency) ligt tussen 4,6 en 5,1, wat betekent dat u voor elke kWh stroom 4,6 tot 5,1 kWh warmte krijgt - dus 360-410% gratis energie uit de buitenlucht. Dit resulteert in 55-65% besparing op verwarmingskosten vergeleken met conventionele systemen. De Hyper Inverter technologie optimaliseert continu het energieverbruik."
    },
    {
      question: "Kan ik een Mitsubishi Heavy airco op afstand bedienen?",
      answer: "Ja, de Diamond en Premium series zijn standaard of optioneel uitgerust met WiFi-functionaliteit. Via de MH Remote app op uw smartphone of tablet bedient u het systeem van overal ter wereld. U kunt temperatuur aanpassen, schema's instellen, energieverbruik monitoren en zelfs foutsignalen ontvangen. De app werkt op iOS en Android en biedt volledige controle over alle functies van uw airco. Voor de Compact serie is WiFi als optie verkrijgbaar."
    },
    {
      question: "Hoe vaak moet een Mitsubishi Heavy airco onderhouden worden?",
      answer: "Voor optimale prestaties en om de fabrieksgarantie geldig te houden is jaarlijks professioneel onderhoud verplicht. Dit omvat reinigen van filters en warmtewisselaars, controle van het koudemiddel, inspectie van elektrische componenten en testen van alle functies. De filters moet u zelf elke 2 weken stofzuigen of spoelen onder de kraan. StayCool Airco biedt onderhoudscontracten waarmee u verzekerd bent van tijdig en vakkundig onderhoud volgens MHI specificaties."
    },
    {
      question: "Wat kost een Mitsubishi Heavy airco inclusief installatie?",
      answer: "Een complete Mitsubishi Heavy installatie varieert tussen €2.400 en €4.200 afhankelijk van het gekozen model en de complexiteit. De Compact serie start vanaf €2.400, de Premium serie vanaf €2.800 en de Diamond serie (topmodel met 3D i-See) vanaf €3.600. Deze prijzen zijn inclusief professionele installatie door StayCool Airco, 7 jaar garantie, afvoer oude apparatuur en volledige instructie. Vraag een gratis offerte aan voor een exacte prijsopgave voor uw situatie."
    }
  ];

  return (
    <>
      <MetaTags
        title="Mitsubishi Heavy Airco Limburg | Premium Japanse Kwaliteit | StayCool"
        description="Mitsubishi Heavy Industries airco ✓ Premium Japanse kwaliteit ✓ 7 jaar garantie ✓ A+++ efficiency ✓ Erkend installateur. Gratis advies!"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Mitsubishi Heavy Industries Airco",
          description: "Premium Mitsubishi Heavy airconditioners met 7 jaar garantie en professionele installatie door erkend installateur StayCool Airco in Limburg",
          brand: {
            "@type": "Brand",
            name: "Mitsubishi Heavy Industries"
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: "2400",
            highPrice: "4200",
            availability: "https://schema.org/InStock",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Mitsubishi Heavy Airco: Premium Japanse Kwaliteit
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Industriële betrouwbaarheid voor uw woning. Mitsubishi Heavy Industries combineert Japanse precisie met 7 jaar garantie en A+++ efficiency voor ongeëvenaard comfort.
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
              <span>Erkend MHI Installateur</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>F-gassen Gecertificeerd</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>7 Jaar Fabrieksgarantie</span>
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

      {/* Main Content - Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Waarom Kiezen Voor Mitsubishi Heavy Industries?
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Mitsubishi Heavy Industries (MHI) is een van de meest gerespecteerde namen in de internationale industrie. Dit Japanse concern bouwt alles van vliegtuigen en schepen tot energiecentrales en ruimtevaartcomponenten. Die industriële expertise vertaalt zich naar <strong>buitengewone betrouwbaarheid en duurzaamheid</strong> in hun airconditioners voor residentieel gebruik.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Waar sommige merken focussen op marketing en design, investeert MHI in engineering en langetermijn-prestaties. Het resultaat? Airconditioners die <strong>20+ jaar meegaan</strong> met minimaal onderhoud. De 7 jaar fabrieksgarantie is geen marketingstunt, maar een bewijs van vertrouwen in de kwaliteit van elk onderdeel.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Bij StayCool Airco zijn we erkend Mitsubishi Heavy partner omdat we geloven in dezelfde filosofie: <strong>kwaliteit boven kwantiteit</strong>, betrouwbaarheid boven franje, en klantentevredenheid boven kortetermijnwinst. Wij installeren MHI systemen volgens fabrieksspecificaties en bieden volledige nazorg voor optimale prestaties gedurende de hele levensduur.
            </p>
          </div>

          {/* Model Series Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {modelSeries.map((series, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Snowflake className="h-6 w-6 mr-2 text-sky-500" />
                  {series.name}
                </h3>

                <p className="text-gray-600 mb-6 font-medium italic">{series.description}</p>

                <ul className="space-y-3 mb-6">
                  {series.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-sky-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Perfect voor:</strong> {series.applications}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                >
                  Vraag Offerte Aan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Unieke Mitsubishi Heavy Technologieën
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Zap className="h-6 w-6 mr-2 text-sky-500" />
                  {advantage.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Mitsubishi Heavy vs. Andere Premium Merken
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    <th className="text-left py-4 px-6">Kenmerk</th>
                    <th className="text-center py-4 px-6">MHI</th>
                    <th className="text-center py-4 px-6">Daikin</th>
                    <th className="text-center py-4 px-6">LG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold">Garantie</td>
                    <td className="text-center py-4 px-6 text-green-600 font-bold">7 jaar</td>
                    <td className="text-center py-4 px-6">5-10 jaar</td>
                    <td className="text-center py-4 px-6">5 jaar</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-semibold">Energielabel</td>
                    <td className="text-center py-4 px-6">A+++</td>
                    <td className="text-center py-4 px-6">A+++</td>
                    <td className="text-center py-4 px-6">A++/A+++</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold">Geluidsniveau</td>
                    <td className="text-center py-4 px-6 text-green-600 font-bold">19 dB(A)</td>
                    <td className="text-center py-4 px-6">19 dB(A)</td>
                    <td className="text-center py-4 px-6">21 dB(A)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-semibold">Levensduur</td>
                    <td className="text-center py-4 px-6 text-green-600 font-bold">20+ jaar</td>
                    <td className="text-center py-4 px-6">15-20 jaar</td>
                    <td className="text-center py-4 px-6">12-18 jaar</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold">Verwarmingscapaciteit</td>
                    <td className="text-center py-4 px-6">Tot -20°C</td>
                    <td className="text-center py-4 px-6">Tot -20°C</td>
                    <td className="text-center py-4 px-6">Tot -15°C</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-semibold">Luchtzuivering</td>
                    <td className="text-center py-4 px-6 text-green-600 font-bold">Plasma Quad</td>
                    <td className="text-center py-4 px-6">Flash Streamer</td>
                    <td className="text-center py-4 px-6">Ionisator</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-6 font-semibold">Prijsklasse</td>
                    <td className="text-center py-4 px-6">Premium</td>
                    <td className="text-center py-4 px-6">Premium</td>
                    <td className="text-center py-4 px-6">Midden-Premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
            <p className="text-gray-700">
              <strong>Conclusie:</strong> Mitsubishi Heavy onderscheidt zich vooral door de <strong>langste garantie (7 jaar)</strong>, <strong>uitzonderlijke levensduur (20+ jaar)</strong> en <strong>industriële kwaliteitsstandaarden</strong>. Als u investeert in langetermijn-betrouwbaarheid en minimale onderhoudskosten, is MHI de beste keuze.
            </p>
          </div>
        </div>
      </section>

      {/* Energy Savings */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bespaar Tot 65% Op Energiekosten
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Door de Hyper Inverter technologie en SCOP waarden tot 5,1 behoort Mitsubishi Heavy tot de meest energiezuinige airconditioners op de markt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">SCOP 5,1</div>
              <p className="text-gray-600">410% gratis energie uit de buitenlucht voor verwarming</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">A+++</div>
              <p className="text-gray-600">Hoogste energie-efficiëntielabel op alle series</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Euro className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">€1.400</div>
              <p className="text-gray-600">Gemiddelde jaarlijkse besparing op energiekosten</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Waarom Is MHI Zo Energiezuinig?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Hyper Inverter Compressor
                </h4>
                <p className="text-gray-600 mb-4">
                  Past vermogen nauwkeuriger aan dan standaard inverters, vermindert energie-verspilling met 20%
                </p>

                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Intelligente Sensors
                </h4>
                <p className="text-gray-600 mb-4">
                  3D i-See sensor (Diamond) detecteert aanwezigheid en past automatisch energieverbruik aan
                </p>

                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Geoptimaliseerde Warmtewisselaars
                </h4>
                <p className="text-gray-600">
                  Grotere en efficiëntere warmtewisselaars voor maximale warmteoverdracht
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Dual Barrier Coating
                </h4>
                <p className="text-gray-600 mb-4">
                  Zelfreinigende coating houdt warmtewisselaars schoon voor constante efficiency
                </p>

                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Geavanceerde Besturing
                </h4>
                <p className="text-gray-600 mb-4">
                  Microprocessor besturing voor optimale werking onder alle omstandigheden
                </p>

                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  R32 Koudemiddel
                </h4>
                <p className="text-gray-600">
                  Milieuvriendelijk koudemiddel met betere thermische eigenschappen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Professionele MHI Installatie Door StayCool Airco
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Erkend Mitsubishi Heavy Partner
              </h3>
              <p className="text-gray-700 mb-6">
                Als erkend Mitsubishi Heavy installateur beschikken wij over de gespecialiseerde kennis en apparatuur die nodig is voor correcte installatie volgens MHI specificaties. Dit is essentieel voor optimale prestaties en om aanspraak te maken op de 7 jaar fabrieksgarantie.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">MHI Gecertificeerd</strong>
                    <p className="text-gray-600 mt-1">Officiële training en certificering voor alle MHI series</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">F-gassen Certificering</strong>
                    <p className="text-gray-600 mt-1">Wettelijk verplichte kwalificatie voor veilig werken met koudemiddelen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">15+ Jaar Ervaring</strong>
                    <p className="text-gray-600 mt-1">Honderden succesvolle MHI installaties in Limburg</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Volledige Garantie</strong>
                    <p className="text-gray-600 mt-1">Registratie bij MHI voor volledige 7 jaar fabrieksgarantie</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ons Installatieproces
              </h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gratis Plaatsbezoek</h4>
                    <p className="text-gray-600">Grondige inspectie en capaciteitsberekening voor perfecte match</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparante Offerte</h4>
                    <p className="text-gray-600">All-in prijsopgave inclusief installatie, certificaten en garantie</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Vakkundige Montage</h4>
                    <p className="text-gray-600">Installatie volgens MHI richtlijnen door F-gassen gecertificeerde monteurs</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ingebruikname & Instructie</h4>
                    <p className="text-gray-600">Volledige uitleg alle functies en bediening via app</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Garantieregistratie</h4>
                    <p className="text-gray-600">Registratie bij MHI voor activering 7 jaar fabrieksgarantie</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    6
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Nazorg & Onderhoud</h4>
                    <p className="text-gray-600">Jaarlijks onderhoud en 24/7 bereikbaar voor service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Service Gebied: Heel Limburg
            </h3>
            <p className="text-gray-700 mb-6">
              StayCool Airco installeert Mitsubishi Heavy airconditioners door heel Limburg. Van Maastricht tot Venlo, van Heerlen tot Weert - onze monteurs kennen de regio en zijn snel ter plaatse.
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
            Veelgestelde Vragen Over Mitsubishi Heavy
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
            Investeer In Premium Japanse Kwaliteit
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag nu een gratis adviesgesprek aan en ontdek waarom Mitsubishi Heavy de beste keuze is voor langdurig comfort en betrouwbaarheid. 7 jaar garantie inbegrepen.
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

export default MitsubishiHeavyAirco;
