import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Home,
  Sun,
  Thermometer,
  Shield,
  Phone,
  CheckCircle,
  AlertCircle,
  Calendar,
  Award,
  Zap,
  Settings,
  FileText,
  HelpCircle,
  ArrowRight,
  Star,
  ChevronRight,
  Euro,
  Clock,
  Wind,
  Volume2,
  Wifi,
  Timer,
  Package,
  Ruler,
  Check,
  X,
  CloudSnow,
  Droplets,
  CircleOff,
  Leaf,
  Gauge,
  TrendingUp,
  Lightbulb,
  Maximize2,
  Info,
  BarChart3,
  Triangle,
  Building,
  FlameKindling,
  Snowflake,
  ThermometerSun,
  ArrowUp,
  ArrowDown,
  Layers,
  Users,
  Baby,
  Gamepad2,
  Briefcase,
  Dumbbell
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';
import LazyImage from '../../components/LazyImage';

const AircoVoorZolderLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('uitdagingen');
  const [showAllFAQ, setShowAllFAQ] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [selectedAtticType, setSelectedAtticType] = useState('schuin-dak');

  const breadcrumbItems = [
    { label: 'Airco voor Zolder', path: '/airco-voor-zolder' }
  ];

  const atticChallenges = [
    {
      icon: ThermometerSun,
      title: 'Extreme Temperaturen',
      description: 'Tot 45°C in zomer, ijskoud in winter',
      solution: 'Krachtige airco met warmtepomp'
    },
    {
      icon: Triangle,
      title: 'Schuine Wanden',
      description: 'Beperkte plaatsingsmogelijkheden',
      solution: 'Speciale montage oplossingen'
    },
    {
      icon: Layers,
      title: 'Slechte Isolatie',
      description: 'Warmte stijgt op en blijft hangen',
      solution: 'Extra vermogen + isolatie advies'
    },
    {
      icon: ArrowUp,
      title: 'Warme Lucht Stijgt',
      description: 'Natuurlijke warmteophoping',
      solution: 'Strategische luchtcirculatie'
    }
  ];

  const atticUseCases = [
    {
      type: 'Slaapkamer',
      icon: Baby,
      challenges: 'Te warm om te slapen',
      solution: 'Fluisterstille nachtkoeling',
      recommended: 'Daikin Stylish 2.5kW'
    },
    {
      type: 'Kantoor',
      icon: Briefcase,
      challenges: 'Concentratie bij hitte',
      solution: 'Constante werktemperatuur',
      recommended: 'Mitsubishi MSZ-EF 3.5kW'
    },
    {
      type: 'Speelkamer',
      icon: Gamepad2,
      challenges: 'Oververhitting bij activiteit',
      solution: 'Krachtige koeling',
      recommended: 'LG Standard Plus 3.5kW'
    },
    {
      type: 'Fitness',
      icon: Dumbbell,
      challenges: 'Extra warmte bij sporten',
      solution: 'Heavy-duty koeling',
      recommended: 'Toshiba Seiya 5.0kW'
    }
  ];

  const atticTypes = {
    'schuin-dak': {
      name: 'Schuine Kap',
      description: 'Klassieke zolder met schuine wanden',
      placement: 'Kopse kant of dakraam unit',
      power: '+30% extra vermogen',
      considerations: ['Condensafvoer via dakgoot', 'Speciale beugels nodig', 'Let op kniehoogte']
    },
    'plat-dak': {
      name: 'Plat Dak',
      description: 'Moderne zolder met plat dak',
      placement: 'Wand of plafond montage',
      power: '+40% extra vermogen',
      considerations: ['Extreme hitte ophoping', 'Dakisolatie cruciaal', 'Condensafvoer planning']
    },
    'mansarde': {
      name: 'Mansarde Kap',
      description: 'Gebroken kap met rechte wanden',
      placement: 'Rechte wand ideaal',
      power: '+20% extra vermogen',
      considerations: ['Meerdere zones mogelijk', 'Goede verdeling mogelijk', 'Standaard montage']
    }
  };

  const insulationImpact = [
    {
      level: 'Geen isolatie',
      summer: '40-45°C',
      winter: '5-10°C',
      advice: 'Eerst isoleren, dan airco',
      savings: '€0'
    },
    {
      level: 'Basis isolatie',
      summer: '35-40°C',
      winter: '10-15°C',
      advice: '5.0kW+ airco nodig',
      savings: '€200/jaar'
    },
    {
      level: 'Goede isolatie',
      summer: '30-35°C',
      winter: '15-18°C',
      advice: '3.5kW airco voldoende',
      savings: '€400/jaar'
    },
    {
      level: 'Top isolatie',
      summer: '25-30°C',
      winter: '18-20°C',
      advice: '2.5kW airco perfect',
      savings: '€600/jaar'
    }
  ];

  const specialSolutions = [
    {
      solution: 'Vloermodel',
      description: 'Voor lage kniehoogte',
      pros: ['Past onder schuine wand', 'Krachtige koeling', 'Makkelijke installatie'],
      cons: ['Neemt vloerruimte in', 'Minder stil']
    },
    {
      solution: 'Cassette Unit',
      description: 'Inbouw in plafond',
      pros: ['Onzichtbaar weggewerkt', '360° luchtverdeling', 'Geen wandruimte'],
      cons: ['Verlaagd plafond nodig', 'Duurder']
    },
    {
      solution: 'Kanaalunit',
      description: 'Volledig weggewerkt',
      pros: ['Onzichtbaar', 'Meerdere uitblaaspunten', 'Stil'],
      cons: ['Complex installation', 'Hoogste kosten']
    },
    {
      solution: 'Multi-split',
      description: 'Meerdere kleine units',
      pros: ['Zone controle', 'Betere verdeling', 'Flexibel'],
      cons: ['Meerdere units zichtbaar', 'Hogere aanschaf']
    }
  ];

  const costBenefitAnalysis = {
    withoutAirco: {
      summer: { comfort: 1, productivity: 60, sleep: 3, energy: 50 },
      winter: { comfort: 2, productivity: 70, sleep: 5, energy: 200 }
    },
    withAirco: {
      summer: { comfort: 9, productivity: 95, sleep: 9, energy: 80 },
      winter: { comfort: 9, productivity: 95, sleep: 9, energy: 120 }
    }
  };

  const reviews = [
    {
      name: 'Mark van der Heijden',
      location: 'Maastricht',
      rating: 5,
      text: 'Eindelijk is onze zolder het hele jaar door bruikbaar. Van onleefbare sauna naar comfortabele ruimte!',
      situation: 'Zolderkantoor',
      result: '35°C → 22°C'
    },
    {
      name: 'Familie Willems',
      location: 'Venlo',
      rating: 5,
      text: 'Kinderen kunnen nu ook in zomer op zolder slapen. Fluisterstil en perfect koel.',
      situation: 'Kinderslaapkamers',
      result: 'Hele jaar comfort'
    },
    {
      name: 'Sophie Janssen',
      location: 'Roermond',
      rating: 5,
      text: 'Mijn thuiskantoor op zolder is nu productief het hele jaar. Beste investering!',
      situation: 'Thuiswerkplek',
      result: '+40% productiviteit'
    }
  ];

  const faqItems = [
    {
      question: 'Is een airco op zolder wel effectief?',
      answer: 'Ja, mits correct gedimensioneerd. Zolders vragen 30-50% meer vermogen dan normale kamers vanwege extreme temperaturen en vaak mindere isolatie. Een goed gedimensioneerde airco maakt van een onbruikbare zolder een comfortabele leefruimte, zowel in zomer als winter.'
    },
    {
      question: 'Welk vermogen airco heb ik nodig voor mijn zolder?',
      answer: 'Voor zolders rekenen we 150-180 Watt/m² (vs 100 Watt/m² normaal). Een 20m² zolder vraagt dus 3.0-3.5kW. Bij slechte isolatie, plat dak of veel glasoppervlak adviseren we 40-50% extra. Wij berekenen graag het exacte vermogen tijdens een gratis inmeting.'
    },
    {
      question: 'Waar kan ik de airco het beste plaatsen op zolder?',
      answer: 'Bij schuine daken idealiter aan de kopse kant (verticale wand) of een vloermodel onder de schuine wand. Vermijd plaatsing direct onder het dak (te heet). Bij voldoende hoogte kan een plafondcassette. De luchtstroom moet vrij door de ruimte kunnen circuleren.'
    },
    {
      question: 'Kan ik eerst een airco plaatsen en later isoleren?',
      answer: 'Technisch kan het, maar het is niet ideaal. Zonder isolatie moet u een veel zwaardere (duurdere) airco installeren die na isolatie overgedimensioneerd is. Wij adviseren eerst basis dakisolatie, dan de juiste airco. Dit bespaart aanschaf- en energiekosten.'
    },
    {
      question: 'Hoe zit het met condensafvoer op zolder?',
      answer: 'Iedere airco produceert condenswater dat afgevoerd moet worden. Op zolder gebruiken we: aansluiting op dakgoot, afvoer naar badkamer/toilet, of een condenspomp naar beneden. Onze monteurs bepalen de beste oplossing tijdens de inmeting.'
    },
    {
      question: 'Is een mobiele airco geen goedkoper alternatief voor zolder?',
      answer: 'Mobiele airco\'s zijn inefficiënt op zolders. Ze blazen warme lucht naar buiten waardoor onderdruk ontstaat en hete buitenlucht wordt aangezogen. Op een hete zolder werken ze nauwelijks. Een vaste airco is 70% efficiënter en veel stiller.'
    },
    {
      question: 'Kan ik mijn zolder in de winter ook verwarmen met airco?',
      answer: 'Absoluut! Moderne airco\'s zijn efficiënte warmtepompen. Ze verwarmen 4x goedkoper dan elektrische kachels. Perfect voor zolders die vaak geen CV hebben. De warmte wordt gelijkmatig verdeeld, ideaal voor schuine ruimtes.'
    },
    {
      question: 'Wat kost een airco installatie op zolder?',
      answer: 'Een complete zolder airco installatie kost €2.000-4.000, afhankelijk van vermogen en complexiteit. Dit includeert de unit, installatie, leidingwerk en condensafvoer. Complexe situaties (dakdoorvoer, lange leidingen) kunnen meerkosten geven.'
    },
    {
      question: 'Hoe stil is een zolder airco?',
      answer: 'Moderne units produceren 22-35dB - stiller dan regengeluid op het dak. Voor slaapzolders adviseren we ultra-stille modellen (19-25dB). Vloermodellen zijn iets luider (35-40dB) maar nog steeds stiller dan een ventilator.'
    },
    {
      question: 'Hoeveel bespaart een airco op zolder?',
      answer: 'Door de zolder bruikbaar te maken bespaart u een verhuizing of aanbouw (€20.000+). Qua energie: verwarmen met airco is 70% goedkoper dan elektrisch. In zomer maakt het thuiswerken mogelijk (geen airco op kantoor). De terugverdientijd is vaak 3-5 jaar.'
    }
  ];

  const tableOfContents = [
    { id: 'uitdagingen', label: 'Zolder Uitdagingen', icon: Triangle },
    { id: 'oplossingen', label: 'Speciale Oplossingen', icon: Lightbulb },
    { id: 'types', label: 'Type Zolder', icon: Home },
    { id: 'isolatie', label: 'Isolatie Impact', icon: Layers },
    { id: 'gebruik', label: 'Gebruiksdoelen', icon: Users },
    { id: 'kosten', label: 'Kosten & Baten', icon: Euro },
    { id: 'offerte', label: 'Gratis Advies', icon: FileText },
    { id: 'reviews', label: 'Ervaringen', icon: Star },
    { id: 'faq', label: 'Veelgestelde Vragen', icon: HelpCircle }
  ];

  const schemaData = {
    name: "Airco voor Zolder",
    description: "Speciale airco oplossingen voor zolder. Van hete zolder naar comfortabele ruimte. Professionele installatie vanaf €2.199.",
    brand: "StayCool Airco",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "2199",
      highPrice: "3999",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Airco voor Zolder | Van Sauna naar Comfort | StayCool Airco</title>
        <meta name="description" content="Airco voor zolder? Maak van uw hete zolder een comfortabele ruimte. ✓ Speciale oplossingen ✓ Schuine daken ✓ Extra vermogen. Gratis advies!" />
        <meta name="keywords" content="airco zolder, zolder airco, airconditioning zolder, airco schuine wand, zolder koeling" />
        <link rel="canonical" href="https://staycoolairco.nl/airco-voor-zolder" />
      </Helmet>

      <SchemaMarkup type="Product" data={schemaData} />

      {/* Breadcrumbs */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Triangle className="w-5 h-5" />
                <span className="text-sm font-medium">Speciale Oplossingen • Extra Vermogen • Slimme Plaatsing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Airco voor de Zolder
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Van onleefbare hitte naar comfortabele ruimte. 
                Ontdek speciale airco oplossingen voor iedere zolder.
              </p>
              
              {/* Temperature Contrast */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Zonder Airco</p>
                    <div className="text-3xl font-bold flex items-center justify-center gap-2">
                      <FlameKindling className="w-8 h-8" />
                      45°C
                    </div>
                  </div>
                  <div>
                    <p className="text-sm opacity-90 mb-1">Met Airco</p>
                    <div className="text-3xl font-bold flex items-center justify-center gap-2">
                      <Snowflake className="w-8 h-8" />
                      22°C
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#oplossingen" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Bekijk Oplossingen
                </a>
                <a href="tel:0462021430" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  046 202 1430
                </a>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage
                src="/images/attic-airco-hero.jpg"
                alt="Moderne zolder met airco installatie"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">+40% Extra Ruimte</p>
                    <p className="text-sm text-gray-600">Zolder hele jaar bruikbaar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Table of Contents */}
      <nav className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4 scrollbar-hide">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-orange-100 transition whitespace-nowrap text-sm font-medium"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Challenges Section */}
      <section id="uitdagingen" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waarom is Zolder een Uitdaging?</h2>
            <p className="text-lg text-gray-600">Specifieke problemen vragen om speciale oplossingen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {atticChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <challenge.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-green-600">Oplossing:</p>
                  <p className="text-sm text-gray-700">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Heat Map Visual */}
          <div className="mt-12 bg-gradient-to-b from-red-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Temperatuurverdeling in Huis</h3>
            <div className="max-w-md mx-auto">
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-red-500 text-white rounded-lg px-4 py-2">
                  <span className="flex items-center gap-2">
                    <Triangle className="w-5 h-5" />
                    Zolder
                  </span>
                  <span className="font-bold">40-45°C</span>
                </div>
                <div className="flex items-center justify-between bg-orange-400 text-white rounded-lg px-4 py-2">
                  <span>1e Verdieping</span>
                  <span className="font-bold">28-32°C</span>
                </div>
                <div className="flex items-center justify-between bg-blue-400 text-white rounded-lg px-4 py-2">
                  <span>Begane Grond</span>
                  <span className="font-bold">24-26°C</span>
                </div>
              </div>
              <p className="text-center mt-4 text-sm text-gray-600">
                Warme lucht stijgt natuurlijk naar boven
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="oplossingen" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Speciale Airco Oplossingen voor Zolder</h2>
            <p className="text-lg text-gray-600">Voor iedere zolder de perfecte oplossing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4">
                  <h3 className="text-xl font-bold">{solution.solution}</h3>
                  <p className="text-sm opacity-90">{solution.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">Voordelen</h4>
                      <ul className="space-y-2">
                        {solution.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-600 mb-3">Aandachtspunten</h4>
                      <ul className="space-y-2">
                        {solution.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Niet zeker welke oplossing het beste past?</p>
            <a href="#offerte" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition inline-flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Vraag Gratis Advies
            </a>
          </div>
        </div>
      </section>

      {/* Attic Types Section */}
      <section id="types" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welk Type Zolder Heeft U?</h2>
            <p className="text-lg text-gray-600">Ieder type vraagt om een specifieke aanpak</p>
          </div>

          {/* Type Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-200 rounded-lg p-1">
              {Object.keys(atticTypes).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedAtticType(type)}
                  className={`px-6 py-2 rounded-lg font-medium transition ${
                    selectedAtticType === type
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {atticTypes[type as keyof typeof atticTypes].name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Type Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {atticTypes[selectedAtticType as keyof typeof atticTypes].name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {atticTypes[selectedAtticType as keyof typeof atticTypes].description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Home className="w-5 h-5 text-orange-600" />
                      Ideale Plaatsing
                    </h4>
                    <p className="text-gray-700">
                      {atticTypes[selectedAtticType as keyof typeof atticTypes].placement}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-orange-600" />
                      Vermogen Advies
                    </h4>
                    <p className="text-gray-700">
                      {atticTypes[selectedAtticType as keyof typeof atticTypes].power}
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Specifieke Aandachtspunten:</h4>
                <ul className="space-y-3">
                  {atticTypes[selectedAtticType as keyof typeof atticTypes].considerations.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 bg-orange-50 rounded-lg p-4">
                  <p className="text-sm text-orange-800">
                    <strong>Tip:</strong> Onze experts hebben ervaring met alle types zolders 
                    en vinden altijd een passende oplossing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insulation Impact */}
      <section id="isolatie" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impact van Isolatie op Airco Keuze</h2>
            <p className="text-lg text-gray-600">Goede isolatie = kleinere airco = lagere kosten</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 font-semibold">Isolatie Niveau</th>
                  <th className="text-center p-4 font-semibold">
                    <Sun className="w-5 h-5 inline mr-1" />
                    Zomer
                  </th>
                  <th className="text-center p-4 font-semibold">
                    <Snowflake className="w-5 h-5 inline mr-1" />
                    Winter
                  </th>
                  <th className="text-left p-4 font-semibold">Ons Advies</th>
                  <th className="text-center p-4 font-semibold">Besparing</th>
                </tr>
              </thead>
              <tbody>
                {insulationImpact.map((level, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{level.level}</td>
                    <td className="text-center p-4 text-red-600 font-semibold">{level.summer}</td>
                    <td className="text-center p-4 text-blue-600 font-semibold">{level.winter}</td>
                    <td className="p-4 text-sm">{level.advice}</td>
                    <td className="text-center p-4 text-green-600 font-semibold">{level.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Slimme Tip
            </h3>
            <p className="text-blue-800">
              Combineer isolatie met airco installatie voor het beste resultaat. 
              Wij werken samen met isolatiebedrijven en kunnen een totaalpakket aanbieden. 
              Dit levert vaak 30-40% besparing op de totale investering.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="gebruik" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Maak Optimaal Gebruik van Uw Zolder</h2>
            <p className="text-lg text-gray-600">Voor ieder gebruik de juiste airco oplossing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {atticUseCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <useCase.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{useCase.type}</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-red-600">Probleem:</p>
                    <p className="text-gray-600">{useCase.challenges}</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-600">Oplossing:</p>
                    <p className="text-gray-600">{useCase.solution}</p>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="font-medium text-blue-600">Aanbevolen:</p>
                    <p className="text-gray-700">{useCase.recommended}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8 text-center">
            <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">+40% Extra Leefruimte</h3>
            <p className="text-gray-700 mb-6">
              Een gekoelde zolder voegt effectief een extra verdieping toe aan uw huis. 
              Goedkoper dan een aanbouw!
            </p>
            <a href="#offerte" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition inline-block">
              Bereken Uw Ruimtewinst
            </a>
          </div>
        </div>
      </section>

      {/* Cost Benefit Analysis */}
      <section id="kosten" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">De Investering die Zich Terugverdient</h2>
            <p className="text-lg text-gray-600">Meer dan alleen comfort - een slimme investering</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-red-900">Zonder Airco</h3>
              <div className="space-y-4">
                {Object.entries(costBenefitAnalysis.withoutAirco.summer).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="capitalize">{key}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-red-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full" 
                          style={{ width: `${value}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">{value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-green-900">Met Airco</h3>
              <div className="space-y-4">
                {Object.entries(costBenefitAnalysis.withAirco.summer).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="capitalize">{key}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-green-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${value}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">{value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Financiële Voordelen</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Euro className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Bespaar Verhuizing</h4>
                <p className="text-2xl font-bold text-green-600 mb-1">€20.000+</p>
                <p className="text-sm text-gray-600">Extra kamer zonder te verhuizen</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Waardestijging Huis</h4>
                <p className="text-2xl font-bold text-blue-600 mb-1">+5-10%</p>
                <p className="text-sm text-gray-600">Bruikbare zolder = meer waarde</p>
              </div>
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">ROI</h4>
                <p className="text-2xl font-bold text-purple-600 mb-1">3-5 jaar</p>
                <p className="text-sm text-gray-600">Volledige terugverdientijd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="offerte" className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gratis Zolder Airco Advies</h2>
            <p className="text-lg text-gray-600">
              Iedere zolder is anders - krijg persoonlijk advies van onze experts
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Wat we voor u doen:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Gratis zolder inspectie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Advies over type en plaatsing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Exacte vermogensberekening</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Isolatie advies indien nodig</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Transparante prijsopgave</span>
                  </li>
                </ul>
              </div>
              <div className="bg-orange-100 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Speciale Zolder Expertise:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Triangle className="w-4 h-4 text-orange-600" />
                    <span>Schuine daken specialist</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-orange-600" />
                    <span>Isolatie partners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-orange-600" />
                    <span>Creatieve condensafvoer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-orange-600" />
                    <span>Extra vermogen berekening</span>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm 
              source="Airco voor Zolder Landing"
              showPrivacyPolicy={true}
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Liever direct contact?</p>
            <a href="tel:0462021430" className="text-2xl font-bold text-orange-600 hover:text-orange-700 flex items-center justify-center gap-2">
              <Phone className="w-6 h-6" />
              046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Zolder Transformaties</h2>
            <div className="flex items-center justify-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="text-gray-700 ml-2">4.9/5 op basis van 100+ zolder projecten</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.situation}</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {review.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Veelgestelde Vragen over Zolder Airco's</h2>
            <p className="text-lg text-gray-600">Alles wat u wilt weten over airco op zolder</p>
          </div>

          <div className="space-y-4">
            {faqItems.slice(0, showAllFAQ ? faqItems.length : 5).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                >
                  <h3 className="font-semibold pr-4">{item.question}</h3>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      activeFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {activeFAQ === index && (
                  <div className="px-6 py-4 border-t bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!showAllFAQ && faqItems.length > 5 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllFAQ(true)}
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700"
              >
                Toon alle {faqItems.length} vragen
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Triangle className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">
            Van Hete Zolder naar Comfortabele Ruimte
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Maak uw zolder het hele jaar door bruikbaar met de juiste airco oplossing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#oplossingen"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Lightbulb className="w-5 h-5" />
              Ontdek Oplossingen
            </a>
            <a
              href="tel:0462021430"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Gratis Zolder Inspectie
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Triangle className="w-5 h-5" />
              Schuine daken specialist
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-5 h-5" />
              Extra vermogen
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              +40% leefruimte
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoVoorZolderLanding;