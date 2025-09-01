import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Sofa,
  Users,
  Tv,
  Wind,
  Thermometer,
  Shield,
  Phone,
  CheckCircle,
  AlertCircle,
  Calendar,
  Award,
  Zap,
  Home,
  Settings,
  FileText,
  HelpCircle,
  ArrowRight,
  Star,
  ChevronRight,
  Euro,
  Clock,
  Heart,
  Volume2,
  Wifi,
  Timer,
  Package,
  Ruler,
  Check,
  X,
  Sun,
  CloudSnow,
  Droplets,
  CircleOff,
  Leaf,
  Eye,
  Gauge,
  TrendingUp,
  Lightbulb,
  Maximize2,
  Info,
  BarChart3,
  Palette
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';
import LazyImage from '../../components/LazyImage';

const AircoVoorWoonkamerLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('comfort');
  const [showAllFAQ, setShowAllFAQ] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [selectedRoomSize, setSelectedRoomSize] = useState('25-35');

  const breadcrumbItems = [
    { label: 'Airco voor Woonkamer', path: '/airco-voor-woonkamer' }
  ];

  const livingRoomBenefits = [
    {
      icon: Users,
      title: 'Gezinscomfort',
      description: 'Perfecte temperatuur voor het hele gezin',
      benefit: 'Altijd aangenaam'
    },
    {
      icon: Eye,
      title: 'Stijlvol Design',
      description: 'Moderne units die passen bij elk interieur',
      benefit: 'Esthetisch verantwoord'
    },
    {
      icon: Volume2,
      title: 'TV-vriendelijk',
      description: 'Stil genoeg om TV te kijken',
      benefit: '< 35dB in eco-modus'
    },
    {
      icon: Gauge,
      title: 'Krachtig & Efficiënt',
      description: 'Grote ruimtes snel op temperatuur',
      benefit: 'Tot 40% energiebesparing'
    }
  ];

  const recommendedModels = [
    {
      brand: 'Daikin',
      model: 'Emura FTXJ-MW',
      price: '€2.299',
      power: '3.5kW',
      area: '25-35m²',
      features: ['Design bekroond', 'Fluisterstil 22dB', '3D luchtstroom', 'WiFi controle'],
      ideal: 'Premium design & comfort'
    },
    {
      brand: 'Mitsubishi',
      model: 'Kirigamine Zen EF',
      price: '€2.199',
      power: '3.5kW',
      area: '25-35m²',
      features: ['Minimalistisch design', 'i-see sensor', 'Dual Barrier Coating', 'Week timer'],
      ideal: 'Beste allrounder'
    },
    {
      brand: 'LG',
      model: 'ARTCOOL Gallery',
      price: '€2.499',
      power: '3.5kW',
      area: '25-35m²',
      features: ['Aanpasbaar frame', 'ThinQ WiFi', 'Active Energy Control', 'Dual Inverter'],
      ideal: 'Uniek kunstwerk'
    },
    {
      brand: 'Samsung',
      model: 'Wind-Free Elite',
      price: '€2.099',
      power: '3.5kW',
      area: '25-35m²',
      features: ['Wind-Free koeling', 'AI Auto Comfort', 'PM 1.0 Filter', 'SmartThings'],
      ideal: 'Innovatieve technologie'
    }
  ];

  const roomLayoutTips = [
    {
      layout: 'Open woonkamer',
      recommendation: 'Centraal aan lange wand',
      power: '5.0-7.0kW',
      units: '1 krachtige unit'
    },
    {
      layout: 'L-vormige woonkamer',
      recommendation: 'In de hoek voor optimale verdeling',
      power: '3.5-5.0kW',
      units: '1 unit of 2 kleinere'
    },
    {
      layout: 'Woon-eetkamer',
      recommendation: 'Tussen beide zones',
      power: '5.0-7.0kW',
      units: '1 grote of multi-split'
    },
    {
      layout: 'Woonkamer met vide',
      recommendation: 'Hoog gemonteerd, naar beneden gericht',
      power: '7.0-9.0kW',
      units: 'Extra vermogen nodig'
    }
  ];

  const designOptions = [
    {
      style: 'Modern Minimalistisch',
      brands: ['Daikin Emura', 'Mitsubishi Zen'],
      colors: 'Wit, zwart, zilver',
      price: '€€€'
    },
    {
      style: 'Scandinavisch',
      brands: ['LG ARTCOOL', 'Daikin Stylish'],
      colors: 'Wit, houtlook',
      price: '€€€'
    },
    {
      style: 'Industrieel',
      brands: ['Mitsubishi Heavy', 'Toshiba'],
      colors: 'Zwart, grijs',
      price: '€€'
    },
    {
      style: 'Klassiek',
      brands: ['Samsung', 'Panasonic'],
      colors: 'Wit, crème',
      price: '€€'
    }
  ];

  const smartFeatures = [
    {
      feature: 'WiFi Controle',
      description: 'Bedien vanaf bank of onderweg',
      icon: Wifi,
      brands: 'Alle premium merken'
    },
    {
      feature: 'Bewegingssensor',
      description: 'Past luchtstroom aan op aanwezigheid',
      icon: Eye,
      brands: 'Daikin, Mitsubishi'
    },
    {
      feature: 'Week Programmering',
      description: 'Automatisch aan/uit per dag',
      icon: Calendar,
      brands: 'Alle merken'
    },
    {
      feature: 'Voice Control',
      description: 'Werkt met Alexa/Google Home',
      icon: Volume2,
      brands: 'LG, Samsung, Daikin'
    }
  ];

  const costAnalysis = {
    purchase: { min: 1799, max: 2999, avg: 2399 },
    installation: { min: 699, max: 999, avg: 849 },
    yearly: { cooling: 120, heating: 280, total: 400 },
    savings: { vs_gas: 350, vs_electric: 600 }
  };

  const reviews = [
    {
      name: 'Familie Janssen',
      location: 'Venlo',
      rating: 5,
      text: 'Perfecte temperatuur in onze grote woonkamer. Design past mooi bij interieur!',
      product: 'Daikin Emura',
      benefit: 'Stijlvol & effectief'
    },
    {
      name: 'Robert van Dam',
      location: 'Maastricht',
      rating: 5,
      text: 'Eindelijk geen ruzie meer over de temperatuur. Iedereen tevreden!',
      product: 'Mitsubishi Zen',
      benefit: 'Gezinsharmonie'
    },
    {
      name: 'Lisa Hendricks',
      location: 'Roermond',
      rating: 5,
      text: 'Zo stil dat je vergeet dat hij aanstaat. En wat een besparing op gas!',
      product: 'LG ARTCOOL',
      benefit: '€400/jaar bespaard'
    }
  ];

  const faqItems = [
    {
      question: 'Welke airco is het beste voor een woonkamer?',
      answer: 'Voor de woonkamer adviseren wij een krachtige maar stille unit (max 35dB) met een mooi design. Populaire keuzes zijn de Daikin Emura (designprijs winnaar), Mitsubishi Zen (minimalistisch) of LG ARTCOOL Gallery (aanpasbaar frame). Het vermogen hangt af van de grootte: 3.5kW voor 25-35m², 5.0kW voor 35-50m².'
    },
    {
      question: 'Hoeveel kW airco heb ik nodig voor mijn woonkamer?',
      answer: 'Als vuistregel: 100-120 Watt per m². Voor een woonkamer van 30m² is dat 3.0-3.5kW. Bij veel glas, een vide of slechte isolatie adviseren wij 20-30% extra vermogen. Wij berekenen graag het exacte vermogen tijdens een gratis adviesgesprek.'
    },
    {
      question: 'Waar plaats ik de airco in de woonkamer?',
      answer: 'Ideaal is centraal aan de langste wand, op 2-2.5m hoogte. Vermijd plaatsing recht boven de bank of eettafel (directe luchtstroom), tegenover de TV (reflectie) of naast warmtebronnen. Bij L-vormige ruimtes adviseren wij de hoek voor optimale luchtverdeling.'
    },
    {
      question: 'Is een airco in de woonkamer niet te opvallend?',
      answer: 'Moderne airco\'s zijn juist ontworpen als stijlvolle interieur elementen. Merken zoals Daikin Emura en LG ARTCOOL wonnen designprijzen. Er zijn modellen in verschillende kleuren en sommige kunt u zelfs personaliseren met eigen foto\'s of kunstwerken.'
    },
    {
      question: 'Hoeveel geluid maakt een woonkamer airco?',
      answer: 'In de laagste stand produceren moderne units 22-28dB - stiller dan gefluister. In normale gebruik 30-35dB - vergelijkbaar met een rustige bibliotheek. Dit stoort niet bij TV kijken of gesprekken. Vermijd goedkope modellen die 40-50dB produceren.'
    },
    {
      question: 'Kan ik met airco mijn woonkamer ook verwarmen?',
      answer: 'Absoluut! Moderne airco\'s zijn super efficiënte verwarmingen. Met een COP van 4-5 leveren ze 4-5kW warmte per 1kW stroom. Dat is 70% goedkoper dan gasverwarming. Perfect als hoofdverwarming of aanvulling op vloerverwarming.'
    },
    {
      question: 'Wat kost een airco voor de woonkamer?',
      answer: 'Een complete installatie kost €2.500-3.500 inclusief montage. Dit omvat een A+++ unit (€1.800-2.500), installatie (€700-1.000) en materialen. De terugverdientijd is 4-6 jaar door lagere energiekosten. Financiering mogelijk vanaf €59/maand.'
    },
    {
      question: 'Droogt een airco de lucht in de woonkamer niet uit?',
      answer: 'Een airco ontvochtigt tot een gezond niveau van 40-60%. In de winter kan de lucht inderdaad te droog worden. Oplossingen: kies een model met bevochtigingsfunctie, plaats kamerplanten of een waterbakje, of gebruik een losse luchtbevochtiger.'
    },
    {
      question: 'Kan ik meerdere kamers koelen met één woonkamer airco?',
      answer: 'Een woonkamer unit kan aangrenzende ruimtes mee koelen als deuren open staan, maar het effect is beperkt. Voor meerdere kamers adviseren wij een multi-split systeem: één buitenunit met meerdere binnenunits. Dit is efficiënter en stiller.'
    },
    {
      question: 'Zijn er subsidies voor een woonkamer airco?',
      answer: 'Ja, warmtepomp-airco\'s komen in aanmerking voor ISDE subsidie (€500-1.000). Daarnaast bieden veel gemeenten duurzaamheidsleningen tegen 1-2% rente. Ook is de BTW op arbeidskosten verlaagd naar 9% voor energiebesparende maatregelen.'
    }
  ];

  const tableOfContents = [
    { id: 'voordelen', label: 'Voordelen Woonkamer', icon: Sofa },
    { id: 'modellen', label: 'Aanbevolen Modellen', icon: Package },
    { id: 'vermogen', label: 'Vermogen Berekenen', icon: Gauge },
    { id: 'plaatsing', label: 'Plaatsing Tips', icon: Home },
    { id: 'design', label: 'Design Opties', icon: Palette },
    { id: 'smart', label: 'Slimme Features', icon: Wifi },
    { id: 'kosten', label: 'Kosten & Besparing', icon: Euro },
    { id: 'reviews', label: 'Klant Ervaringen', icon: Star },
    { id: 'faq', label: 'Veelgestelde Vragen', icon: HelpCircle }
  ];

  const roomSizeCalculator = {
    '15-25': { power: '2.5-3.5kW', units: ['Compacte units', 'Geschikt voor kleine woonkamers'] },
    '25-35': { power: '3.5-5.0kW', units: ['Standaard vermogen', 'Meest verkocht'] },
    '35-50': { power: '5.0-7.0kW', units: ['Krachtige units', 'Voor grote ruimtes'] },
    '50+': { power: '7.0kW+', units: ['Extra krachtig', 'Of multi-split systeem'] }
  };

  const schemaData = {
    name: "Airco voor Woonkamer",
    description: "Stijlvolle en krachtige airco voor de woonkamer. Design modellen die passen bij elk interieur. Vanaf €2.499 inclusief installatie.",
    brand: "StayCool Airco",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "2499",
      highPrice: "3499",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Airco voor Woonkamer | Stijlvol & Krachtig | StayCool Airco</title>
        <meta name="description" content="Airco voor de woonkamer? Ontdek stijlvolle modellen die passen bij uw interieur. ✓ Fluisterstil ✓ Energiezuinig ✓ Design airco's vanaf €2.499. Gratis advies!" />
        <meta name="keywords" content="airco woonkamer, woonkamer airco, airconditioning woonkamer, design airco, stille airco woonkamer" />
        <link rel="canonical" href="https://staycoolairco.nl/airco-voor-woonkamer" />
      </Helmet>

      <SchemaMarkup type="Product" data={schemaData} />

      {/* Breadcrumbs */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sofa className="w-5 h-5" />
                <span className="text-sm font-medium">Stijlvol • Krachtig • Fluisterstil</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Airco voor de Woonkamer
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Het hart van uw huis verdient perfect klimaatcomfort. 
                Ontdek design airco's die naadloos passen bij uw interieur.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Eye className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Design Modellen</div>
                  <div className="text-sm opacity-90">Bekroonde ontwerpen</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Volume2 className="w-8 h-8 mb-2" />
                  <div className="font-semibold">TV-Vriendelijk</div>
                  <div className="text-sm opacity-90">Max 35dB</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Gauge className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Krachtig</div>
                  <div className="text-sm opacity-90">Tot 50m²</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <TrendingUp className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Bespaar</div>
                  <div className="text-sm opacity-90">€400+/jaar</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#modellen" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <Palette className="w-5 h-5" />
                  Bekijk Design Modellen
                </a>
                <a href="tel:0462021430" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  046 202 1430
                </a>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage
                src="/images/living-room-airco-hero.jpg"
                alt="Moderne woonkamer met design airco"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Design Award Winners</p>
                    <p className="text-sm text-gray-600">Premium merken</p>
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
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition whitespace-nowrap text-sm font-medium"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Benefits Section */}
      <section id="voordelen" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waarom een Airco in de Woonkamer?</h2>
            <p className="text-lg text-gray-600">Transform uw woonkamer in een comfortzone voor het hele gezin</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {livingRoomBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {benefit.benefit}
                </div>
              </div>
            ))}
          </div>

          {/* Family Comfort Zone */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">De Perfecte Gezinstemperatuur</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Sun className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Zomer</h4>
                <p className="text-2xl font-bold text-blue-600 mb-1">22-24°C</p>
                <p className="text-sm text-gray-600">Verkoeling zonder kou</p>
              </div>
              <div className="text-center">
                <CloudSnow className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Winter</h4>
                <p className="text-2xl font-bold text-blue-600 mb-1">20-22°C</p>
                <p className="text-sm text-gray-600">Behaaglijke warmte</p>
              </div>
              <div className="text-center">
                <Droplets className="w-12 h-12 text-teal-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Vochtigheid</h4>
                <p className="text-2xl font-bold text-blue-600 mb-1">40-60%</p>
                <p className="text-sm text-gray-600">Gezond binnenklimaat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Models */}
      <section id="modellen" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Airco's voor de Woonkamer</h2>
            <p className="text-lg text-gray-600">Premium modellen die uw interieur versterken</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recommendedModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center">
                    <LazyImage
                      src={`/images/airco-${model.brand.toLowerCase()}-${index}.jpg`}
                      alt={`${model.brand} ${model.model}`}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{model.brand}</h3>
                        <p className="text-gray-600">{model.model}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{model.price}</p>
                        <p className="text-xs text-gray-500">incl. installatie</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mb-4 text-sm">
                      <div className="bg-gray-100 px-3 py-1 rounded-full">
                        <Gauge className="w-4 h-4 inline mr-1" />
                        {model.power}
                      </div>
                      <div className="bg-gray-100 px-3 py-1 rounded-full">
                        <Maximize2 className="w-4 h-4 inline mr-1" />
                        {model.area}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600 italic">{model.ideal}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#offerte" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Vraag Persoonlijk Advies Aan
            </a>
          </div>
        </div>
      </section>

      {/* Power Calculator */}
      <section id="vermogen" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welk Vermogen voor Uw Woonkamer?</h2>
            <p className="text-lg text-gray-600">Bereken het ideale vermogen voor optimaal comfort</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grootte van uw woonkamer (m²)
              </label>
              <select
                value={selectedRoomSize}
                onChange={(e) => setSelectedRoomSize(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="15-25">15-25 m² (compacte woonkamer)</option>
                <option value="25-35">25-35 m² (gemiddelde woonkamer)</option>
                <option value="35-50">35-50 m² (grote woonkamer)</option>
                <option value="50+">50+ m² (extra grote/open ruimte)</option>
              </select>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Aanbevolen vermogen:</h3>
                  <p className="text-3xl font-bold text-blue-600">
                    {roomSizeCalculator[selectedRoomSize as keyof typeof roomSizeCalculator].power}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Advies:</h3>
                  <ul className="space-y-1">
                    {roomSizeCalculator[selectedRoomSize as keyof typeof roomSizeCalculator].units.map((unit, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        {unit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Extra factors */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-semibold text-amber-900 mb-2">Extra vermogen nodig bij:</h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Veel glasoppervlak (+20%)</li>
                  <li>• Plat dak/zolder erboven (+15%)</li>
                  <li>• Open keuken (+10-20%)</li>
                  <li>• Vide of hoog plafond (+30%)</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Minder vermogen bij:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Goede isolatie (-10%)</li>
                  <li>• Weinig ramen (-10%)</li>
                  <li>• Noordelijke ligging (-5%)</li>
                  <li>• Alleen avondgebruik (-10%)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Tips */}
      <section id="plaatsing" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Optimale Plaatsing in de Woonkamer</h2>
            <p className="text-lg text-gray-600">Tips voor verschillende woonkamer indelingen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roomLayoutTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">{tip.layout}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Plaatsing:</p>
                      <p className="text-sm text-gray-600">{tip.recommendation}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Vermogen:</p>
                      <p className="text-sm text-gray-600">{tip.power}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Configuratie:</p>
                      <p className="text-sm text-gray-600">{tip.units}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Do's and Don'ts */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">✓ Beste Praktijken</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-green-800">Centraal aan lange wand voor optimale verdeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-green-800">Minimaal 15cm van plafond voor goede circulatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-green-800">Swing functie gebruiken voor gelijkmatige verdeling</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">✗ Te Vermijden</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 mt-0.5" />
                  <span className="text-red-800">Direct boven zitplaatsen (tocht)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 mt-0.5" />
                  <span className="text-red-800">Tegenover TV (reflectie en afleiding)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 mt-0.5" />
                  <span className="text-red-800">In hoeken (slechte luchtverdeling)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section id="design" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Opties voor Elk Interieur</h2>
            <p className="text-lg text-gray-600">Van minimalistisch tot statement piece</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designOptions.map((style, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <Palette className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">{style.style}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Merken:</span>
                    <p className="text-gray-600">{style.brands.join(', ')}</p>
                  </div>
                  <div>
                    <span className="font-medium">Kleuren:</span>
                    <p className="text-gray-600">{style.colors}</p>
                  </div>
                  <div>
                    <span className="font-medium">Prijsklasse:</span>
                    <p className="text-gray-600">{style.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
            <Eye className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">LG ARTCOOL Gallery - Uw Eigen Kunstwerk</h3>
            <p className="mb-6 opacity-90">Upload uw favoriete foto of kunstwerk en maak van uw airco een uniek design element</p>
            <a href="#offerte" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
              Ontdek de Mogelijkheden
            </a>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section id="smart" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Slimme Features voor Modern Wonen</h2>
            <p className="text-lg text-gray-600">Bedien uw airco zoals u wilt - altijd en overal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smartFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">{feature.feature}</h3>
                <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                <p className="text-xs text-blue-600 font-medium">{feature.brands}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Smart Home Integratie</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-medium mb-2">Google Home</h4>
                <p className="text-sm text-gray-600">"Hey Google, zet de airco op 22 graden"</p>
              </div>
              <div>
                <Volume2 className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-medium mb-2">Amazon Alexa</h4>
                <p className="text-sm text-gray-600">"Alexa, zet de woonkamer airco aan"</p>
              </div>
              <div>
                <Home className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-medium mb-2">Apple HomeKit</h4>
                <p className="text-sm text-gray-600">"Siri, wat is de temperatuur in de woonkamer?"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section id="kosten" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investering & Besparing</h2>
            <p className="text-lg text-gray-600">Een slimme investering die zichzelf terugverdient</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Eenmalige Investering</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Premium Airco Unit</span>
                  <span className="font-semibold">€{costAnalysis.purchase.min} - €{costAnalysis.purchase.max}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Professionele Installatie</span>
                  <span className="font-semibold">€{costAnalysis.installation.min} - €{costAnalysis.installation.max}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Totale Investering</span>
                  <span className="text-2xl font-bold text-blue-600">
                    €{costAnalysis.purchase.avg + costAnalysis.installation.avg}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <Info className="w-4 h-4 inline mr-1" />
                  Financiering mogelijk vanaf €59/maand
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Jaarlijkse Besparing</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Koelen (4 maanden)</span>
                    <span className="font-medium">€{costAnalysis.yearly.cooling}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Verwarmen (6 maanden)</span>
                    <span className="font-medium">€{costAnalysis.yearly.heating}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-3">Besparing t.o.v. traditioneel:</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">vs. Gasverwarming</span>
                      <span className="font-semibold text-green-600">-€{costAnalysis.savings.vs_gas}/jaar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">vs. Elektrisch</span>
                      <span className="font-semibold text-green-600">-€{costAnalysis.savings.vs_electric}/jaar</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-blue-900">Terugverdientijd: 4-6 jaar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 rounded-xl p-6">
            <h4 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Extra Voordelen
            </h4>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-amber-800">
              <li>✓ ISDE subsidie mogelijk (€500-1.000)</li>
              <li>✓ 15% hogere woningwaarde</li>
              <li>✓ Geen gasaansluiting meer nodig</li>
              <li>✓ Lagere onderhoudskosten</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="offerte" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gratis Woonkamer Airco Advies</h2>
            <p className="text-lg text-gray-600">
              Ontdek welke design airco perfect past bij uw woonkamer en interieur
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Ons gratis advies omvat:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>3D visualisatie in uw woonkamer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Advies over design & plaatsing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Exacte vermogensberekening</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Demonstratie smart features</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Direct contact:</h3>
                <a href="tel:0462021430" className="flex items-center gap-3 text-xl font-bold text-blue-600 hover:text-blue-700 mb-4">
                  <Phone className="w-6 h-6" />
                  046 202 1430
                </a>
                <p className="text-sm text-gray-600">
                  Ma-Za: 08:00 - 20:00<br />
                  Zo: 10:00 - 18:00
                </p>
              </div>
            </div>

            <ContactForm 
              source="Airco voor Woonkamer Landing"
              showPrivacyPolicy={true}
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wat Klanten Zeggen</h2>
            <div className="flex items-center justify-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="text-gray-700 ml-2">4.9/5 op basis van 200+ woonkamer installaties</span>
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
                  <span className="text-sm text-gray-500">{review.product}</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {review.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Veelgestelde Vragen over Woonkamer Airco's</h2>
            <p className="text-lg text-gray-600">Alles wat u wilt weten over airco in de woonkamer</p>
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
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
              >
                Toon alle {faqItems.length} vragen
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sofa className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">
            Transform Uw Woonkamer in een Comfortzone
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Ontdek de perfecte design airco die past bij uw interieur en lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#modellen"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Palette className="w-5 h-5" />
              Bekijk Design Modellen
            </a>
            <a
              href="tel:0462021430"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Vraag Gratis Advies
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Design Awards
            </div>
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              Fluisterstil
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              €400+/jaar besparing
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoVoorWoonkamerLanding;