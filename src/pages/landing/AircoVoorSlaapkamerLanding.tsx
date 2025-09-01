import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Moon,
  Volume2,
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
  Bed,
  Heart,
  Brain,
  Baby,
  Filter,
  Wifi,
  Timer,
  VolumeX,
  Users,
  Info,
  TrendingUp,
  Package,
  Ruler,
  Check,
  X,
  Sun,
  CloudSnow,
  Droplets,
  CircleOff,
  Leaf
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';
import LazyImage from '../../components/LazyImage';

const AircoVoorSlaapkamerLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('voordelen');
  const [showAllFAQ, setShowAllFAQ] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [selectedRoomSize, setSelectedRoomSize] = useState('15-20');

  const breadcrumbItems = [
    { label: 'Airco voor Slaapkamer', path: '/airco-voor-slaapkamer' }
  ];

  const sleepBenefits = [
    {
      icon: Moon,
      title: 'Betere Nachtrust',
      description: 'Ideale temperatuur (16-19°C) voor diepe slaap',
      benefit: '23% betere slaapkwaliteit'
    },
    {
      icon: VolumeX,
      title: 'Fluisterstil',
      description: 'Vanaf 19dB - stiller dan gefluister',
      benefit: 'Ongestoorde nachtrust'
    },
    {
      icon: Brain,
      title: 'Beter Concentratie',
      description: 'Uitgerust wakker = productievere dag',
      benefit: '15% hogere productiviteit'
    },
    {
      icon: Heart,
      title: 'Gezonder Slapen',
      description: 'Optimale luchtvochtigheid en temperatuur',
      benefit: 'Minder allergieën'
    }
  ];

  const recommendedModels = [
    {
      brand: 'Daikin',
      model: 'Stylish FTXA-AW',
      price: '€1.899',
      noise: '19dB',
      features: ['Fluisterstil', 'Coanda-effect', 'WiFi', 'Bewegingssensor'],
      ideal: 'Perfecte slaapkamer airco'
    },
    {
      brand: 'Mitsubishi',
      model: 'MSZ-EF VE',
      price: '€1.799',
      noise: '21dB',
      features: ['3D i-see sensor', 'Plasma filter', 'Nachtstand', 'Timer'],
      ideal: 'Beste prijs-kwaliteit'
    },
    {
      brand: 'LG',
      model: 'Artcool Gallery',
      price: '€2.199',
      noise: '19dB',
      features: ['Customizable design', 'Dual inverter', 'Allergie filter', 'Sleep mode'],
      ideal: 'Design & prestatie'
    }
  ];

  const roomSizeCalculator = {
    '10-15': { power: '2.5kW', units: ['Daikin 25', 'Mitsubishi 25', 'LG 25'] },
    '15-20': { power: '3.5kW', units: ['Daikin 35', 'Mitsubishi 35', 'LG 35'] },
    '20-25': { power: '4.2kW', units: ['Daikin 42', 'Mitsubishi 42', 'LG 42'] },
    '25-30': { power: '5.0kW', units: ['Daikin 50', 'Mitsubishi 50', 'LG 50'] }
  };

  const placementTips = [
    {
      title: 'Niet boven het bed',
      description: 'Voorkom directe luchtstroom op slapende personen',
      icon: Bed,
      good: false
    },
    {
      title: 'Tegenover het bed',
      description: 'Ideaal voor gelijkmatige temperatuurverdeling',
      icon: Check,
      good: true
    },
    {
      title: 'Minimaal 2m hoogte',
      description: 'Voor optimale luchtcirculatie',
      icon: Ruler,
      good: true
    },
    {
      title: 'Weg van warmtebronnen',
      description: 'Niet naast ramen met directe zon',
      icon: Sun,
      good: false
    }
  ];

  const healthAspects = [
    {
      aspect: 'Temperatuur',
      recommendation: '16-19°C',
      reason: 'Optimaal voor REM-slaap',
      icon: Thermometer
    },
    {
      aspect: 'Luchtvochtigheid',
      recommendation: '40-60%',
      reason: 'Voorkomt droge luchtwegen',
      icon: Droplets
    },
    {
      aspect: 'Geluidsniveau',
      recommendation: '<25dB',
      reason: 'Ongestoorde slaap',
      icon: Volume2
    },
    {
      aspect: 'Luchtkwaliteit',
      recommendation: 'HEPA filter',
      reason: 'Verwijdert allergenen',
      icon: Filter
    }
  ];

  const costComparison = [
    {
      option: 'Ventilator',
      initial: '€50-150',
      monthly: '€5',
      comfort: 2,
      noise: 'Luid (40-50dB)',
      features: 'Alleen verkoeling'
    },
    {
      option: 'Mobiele Airco',
      initial: '€300-600',
      monthly: '€30',
      comfort: 3,
      noise: 'Matig (50-60dB)',
      features: 'Koelen, ontvochtigen'
    },
    {
      option: 'Split Airco',
      initial: '€1.500-2.500',
      monthly: '€15',
      comfort: 5,
      noise: 'Stil (19-25dB)',
      features: 'Koelen, verwarmen, filteren, smart'
    }
  ];

  const reviews = [
    {
      name: 'Sandra Vermeulen',
      location: 'Maastricht',
      rating: 5,
      text: 'Eindelijk goed slapen in de zomer! De airco is echt fluisterstil, je hoort hem niet.',
      product: 'Daikin Stylish',
      benefit: 'Veel beter slapen'
    },
    {
      name: 'Erik de Jong',
      location: 'Heerlen',
      rating: 5,
      text: 'Beste investering ooit. Geen last meer van hooikoorts dankzij de filters.',
      product: 'Mitsubishi MSZ-EF',
      benefit: 'Geen allergie klachten'
    },
    {
      name: 'Familie Peters',
      location: 'Roermond',
      rating: 5,
      text: 'Baby slaapt nu door, zelfs op warme nachten. Super stil apparaat!',
      product: 'LG Artcool',
      benefit: 'Baby slaapt beter'
    }
  ];

  const faqItems = [
    {
      question: 'Wat is de beste airco voor de slaapkamer?',
      answer: 'Voor de slaapkamer raden wij fluisterstille modellen aan zoals de Daikin Stylish (19dB), Mitsubishi MSZ-EF (21dB) of LG Artcool (19dB). Deze zijn speciaal ontworpen voor slaapkamers met features zoals nachtstand, timer functie en bewegingssensoren die de luchtstroom aanpassen wanneer u slaapt.'
    },
    {
      question: 'Hoe stil is een slaapkamer airco?',
      answer: 'Moderne slaapkamer airco\'s produceren slechts 19-25dB in de laagste stand - dat is stiller dan gefluister (30dB) of een bibliotheek (40dB). Ter vergelijking: een ventilator produceert 40-50dB. U hoort de airco praktisch niet tijdens het slapen.'
    },
    {
      question: 'Is een airco in de slaapkamer gezond?',
      answer: 'Ja, mits correct gebruikt. Een airco verbetert de slaapkwaliteit door de ideale temperatuur (16-19°C) te handhaven. De ingebouwde filters zuiveren de lucht van stof, pollen en allergenen. Belangrijk is wel om de filters regelmatig schoon te maken en niet te koud in te stellen.'
    },
    {
      question: 'Wat kost een airco voor de slaapkamer per maand?',
      answer: 'Bij gemiddeld gebruik (8 uur per nacht, 4 maanden per jaar) kost een moderne A+++ slaapkamer airco ongeveer €10-15 per maand aan stroom. Dat is minder dan veel mensen denken en vergelijkbaar met een waterkoker die dagelijks gebruikt wordt.'
    },
    {
      question: 'Kan ik ziek worden van airco in de slaapkamer?',
      answer: 'Nee, niet als de airco correct gebruikt wordt. Stel de temperatuur niet lager in dan 5-7 graden onder de buitentemperatuur, richt de luchtstroom niet direct op uzelf, en onderhoud de filters regelmatig. Modern airco\'s hebben speciale nachtprogramma\'s die de temperatuur geleidelijk aanpassen.'
    },
    {
      question: 'Welk vermogen airco voor mijn slaapkamer?',
      answer: 'Voor een slaapkamer van 15-20m² is 2.5-3.5kW voldoende. Voor 20-25m² adviseren wij 3.5-4.2kW. Wij berekenen graag het exacte vermogen op basis van isolatie, raamoppervlak en ligging. Een te zware airco is onnodig duur, te licht betekent onvoldoende comfort.'
    },
    {
      question: 'Waar moet de airco in de slaapkamer hangen?',
      answer: 'Ideaal is tegenover het bed op minimaal 2 meter hoogte, zodat de koude lucht niet direct op u blaast. Vermijd plaatsing boven het hoofdeinde. De luchtstroom moet vrij door de kamer kunnen circuleren voor optimaal comfort.'
    },
    {
      question: 'Droogt airco de lucht uit in de slaapkamer?',
      answer: 'Een airco ontvochtigt inderdaad, maar moderne modellen houden de luchtvochtigheid op een gezond niveau (40-60%). Sommige modellen hebben zelfs een bevochtigingsfunctie. Bij een te droge lucht kunt u een bakje water neerzetten of kiezen voor een model met vochtigheidsregeling.'
    },
    {
      question: 'Kan ik de airco de hele nacht aan laten?',
      answer: 'Ja, moderne slaapkamer airco\'s zijn ontworpen voor continu gebruik. Ze hebben speciale nachtprogramma\'s die de temperatuur automatisch aanpassen aan uw slaapritme. Met de timer functie kunt u instellen dat hij automatisch uitschakelt na enkele uren.'
    },
    {
      question: 'Is een airco beter dan een ventilator voor de slaapkamer?',
      answer: 'Ja, een airco biedt veel meer voordelen: het koelt daadwerkelijk (geen warm rondgeblazen lucht), is stiller (19dB vs 40-50dB), filtert de lucht, ontvochtigt, en kan ook verwarmen in de winter. De investering verdient zich terug in comfort en gezondheid.'
    }
  ];

  const tableOfContents = [
    { id: 'voordelen', label: 'Waarom Airco in Slaapkamer', icon: Heart },
    { id: 'modellen', label: 'Beste Modellen', icon: Package },
    { id: 'calculator', label: 'Welk Vermogen', icon: Ruler },
    { id: 'plaatsing', label: 'Ideale Plaatsing', icon: Home },
    { id: 'gezondheid', label: 'Gezondheid & Comfort', icon: Heart },
    { id: 'kosten', label: 'Kosten Vergelijking', icon: Euro },
    { id: 'offerte', label: 'Gratis Advies', icon: FileText },
    { id: 'reviews', label: 'Ervaringen', icon: Star },
    { id: 'faq', label: 'Veelgestelde Vragen', icon: HelpCircle }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Airco voor Slaapkamer",
    "description": "Fluisterstille airco voor de slaapkamer. Verbeter uw nachtrust met de juiste temperatuur en gezonde lucht. Vanaf €1.799 inclusief installatie.",
    "brand": {
      "@type": "Brand",
      "name": "StayCool Airco"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "1799",
      "highPrice": "2499",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "StayCool Airco",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Limburg",
          "addressCountry": "NL"
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Airco voor Slaapkamer | Fluisterstil vanaf 19dB | StayCool</title>
        <meta name="description" content="Airco voor de slaapkamer? Ontdek fluisterstille modellen vanaf 19dB. ✓ Betere nachtrust ✓ Gezonde lucht ✓ Vanaf €1.799 incl. installatie. Vraag gratis advies!" />
        <meta name="keywords" content="airco slaapkamer, stille airco, slaapkamer airco, airconditioning slaapkamer, fluisterstille airco, airco nachtrust" />
        <link rel="canonical" href="https://staycoolairco.nl/airco-voor-slaapkamer" />
      </Helmet>

      <SchemaMarkup schema={schemaData} />

      {/* Breadcrumbs */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-5 h-5" />
                <span className="text-sm font-medium">Fluisterstil • Gezonde Lucht • Beter Slapen</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Airco voor de Slaapkamer
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Geniet van perfecte nachtrust met een fluisterstille airco. 
                Ideale temperatuur, gefilterde lucht en maximaal comfort.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <VolumeX className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Fluisterstil</div>
                  <div className="text-sm opacity-90">Vanaf 19dB</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Thermometer className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Ideale Temp</div>
                  <div className="text-sm opacity-90">16-19°C</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Filter className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Schone Lucht</div>
                  <div className="text-sm opacity-90">HEPA filters</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Heart className="w-8 h-8 mb-2" />
                  <div className="font-semibold">Gezond</div>
                  <div className="text-sm opacity-90">Beter slapen</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#offerte" className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <Bed className="w-5 h-5" />
                  Gratis Slaapkamer Advies
                </a>
                <a href="tel:0462021430" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  046 202 1430
                </a>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage
                src="/images/bedroom-airco-hero.jpg"
                alt="Moderne slaapkamer met stille airco"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                    <Moon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">23% Beter Slapen</p>
                    <p className="text-sm text-gray-600">Met ideale temperatuur</p>
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
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-indigo-100 transition whitespace-nowrap text-sm font-medium"
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
            <h2 className="text-3xl font-bold mb-4">Waarom een Airco in de Slaapkamer?</h2>
            <p className="text-lg text-gray-600">Wetenschappelijk bewezen voordelen voor uw nachtrust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sleepBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {benefit.benefit}
                </div>
              </div>
            ))}
          </div>

          {/* Sleep Quality Stats */}
          <div className="mt-12 bg-indigo-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Impact op Slaapkwaliteit</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">87%</div>
                <p className="text-gray-700">Beter doorslapen</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">23%</div>
                <p className="text-gray-700">Diepere slaap</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">45min</div>
                <p className="text-gray-700">Sneller inslapen</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">92%</div>
                <p className="text-gray-700">Minder zweten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Models */}
      <section id="modellen" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beste Airco's voor de Slaapkamer</h2>
            <p className="text-lg text-gray-600">Fluisterstille modellen speciaal geselecteerd voor optimale nachtrust</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recommendedModels.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">{model.brand}</h3>
                  <p className="text-sm opacity-90">{model.model}</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-indigo-600">{model.price}</p>
                    <p className="text-sm text-gray-500">Inclusief installatie</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <VolumeX className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Slechts {model.noise}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 italic mb-4">{model.ideal}</p>
                    <a href="#offerte" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition inline-block">
                      Vraag Offerte Aan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Size Calculator */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welk Vermogen voor Uw Slaapkamer?</h2>
            <p className="text-lg text-gray-600">Bereken het ideale vermogen voor optimaal comfort</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Grootte van uw slaapkamer (m²)
              </label>
              <select
                value={selectedRoomSize}
                onChange={(e) => setSelectedRoomSize(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="10-15">10-15 m² (kleine slaapkamer)</option>
                <option value="15-20">15-20 m² (gemiddelde slaapkamer)</option>
                <option value="20-25">20-25 m² (grote slaapkamer)</option>
                <option value="25-30">25-30 m² (master bedroom)</option>
              </select>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Aanbevolen vermogen:</h3>
                  <p className="text-3xl font-bold text-indigo-600">
                    {roomSizeCalculator[selectedRoomSize as keyof typeof roomSizeCalculator].power}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Geschikte modellen:</h3>
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

            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <p className="text-sm text-amber-800">
                <Info className="w-4 h-4 inline mr-1" />
                Dit is een indicatie. Voor exact advies bekijken we ook isolatie, raamgrootte en zonligging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Tips */}
      <section id="plaatsing" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ideale Plaatsing in de Slaapkamer</h2>
            <p className="text-lg text-gray-600">Waar hang je de airco voor optimaal comfort?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-600">✓ Wel Doen</h3>
              <div className="space-y-4">
                {placementTips.filter(tip => tip.good).map((tip, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <tip.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900">{tip.title}</h4>
                      <p className="text-sm text-green-700">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-red-600">✗ Niet Doen</h3>
              <div className="space-y-4">
                {placementTips.filter(tip => !tip.good).map((tip, index) => (
                  <div key={index} className="bg-red-50 rounded-lg p-4 flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <tip.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-900">{tip.title}</h4>
                      <p className="text-sm text-red-700">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <Ruler className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Gratis Inmeetservice</h3>
            <p className="text-gray-700 mb-4">
              Onze experts komen gratis langs om de ideale plaats te bepalen voor uw slaapkamer airco
            </p>
            <a href="#offerte" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block">
              Plan Gratis Inmeting
            </a>
          </div>
        </div>
      </section>

      {/* Health & Comfort */}
      <section id="gezondheid" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gezondheid & Slaapcomfort</h2>
            <p className="text-lg text-gray-600">De juiste instellingen voor een gezonde nachtrust</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthAspects.map((aspect, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <aspect.icon className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="font-semibold mb-2">{aspect.aspect}</h3>
                <p className="text-2xl font-bold text-indigo-600 mb-2">{aspect.recommendation}</p>
                <p className="text-sm text-gray-600">{aspect.reason}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Baby className="w-6 h-6 text-blue-600" />
                Voor Baby's & Kinderen
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="font-medium">Temperatuur:</span> 18-20°C voor baby's
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="font-medium">Geen directe luchtstroom:</span> Gebruik swing functie
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="font-medium">Timer:</span> Automatisch uit na inslapen
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Voor Volwassenen
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="font-medium">Nachtstand:</span> Geleidelijke temperatuuraanpassing
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="font-medium">Bewegingssensor:</span> Past luchtstroom aan bij beweging
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <span className="font-medium">Stille modus:</span> Maximaal 25dB voor ongestoorde slaap
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section id="kosten" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kosten Vergelijking Slaapkamer Koeling</h2>
            <p className="text-lg text-gray-600">Waarom een airco de slimste investering is</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 font-semibold">Optie</th>
                  <th className="text-center p-4 font-semibold">Aanschaf</th>
                  <th className="text-center p-4 font-semibold">Per Maand</th>
                  <th className="text-center p-4 font-semibold">Comfort</th>
                  <th className="text-center p-4 font-semibold">Geluid</th>
                  <th className="text-left p-4 font-semibold">Features</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((option, index) => (
                  <tr key={index} className={`border-b ${option.option === 'Split Airco' ? 'bg-green-50' : ''}`}>
                    <td className="p-4 font-medium">{option.option}</td>
                    <td className="text-center p-4">{option.initial}</td>
                    <td className="text-center p-4">{option.monthly}</td>
                    <td className="text-center p-4">
                      <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < option.comfort ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </td>
                    <td className="text-center p-4 text-sm">{option.noise}</td>
                    <td className="p-4 text-sm">{option.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-green-50 rounded-xl p-6">
            <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Return on Investment
            </h3>
            <p className="text-green-800">
              Een split airco is duurder in aanschaf maar goedkoper in gebruik. 
              Met €15/maand vs €30/maand voor een mobiele airco, verdient u de investering in 3-4 jaar terug. 
              Daarnaast geniet u van veel meer comfort, stilte en gezondheid.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="offerte" className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gratis Slaapkamer Airco Advies</h2>
            <p className="text-lg text-gray-600">
              Ontdek welke airco perfect is voor uw slaapkamer
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Wat we voor u doen:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Gratis inmeting van uw slaapkamer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Advies over ideale plaatsing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Uitleg stille modellen (19-25dB)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Berekening juiste vermogen</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Direct contact:</h3>
                <div className="space-y-4">
                  <a href="tel:0462021430" className="flex items-center gap-3 text-lg font-medium text-indigo-600 hover:text-indigo-700">
                    <Phone className="w-5 h-5" />
                    046 202 1430
                  </a>
                  <p className="text-gray-600">
                    Of vul het formulier in voor advies op maat
                  </p>
                </div>
              </div>
            </div>

            <ContactForm 
              source="Airco voor Slaapkamer Landing"
              showPrivacyPolicy={true}
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              <Shield className="w-4 h-4 inline mr-1" />
              100% vrijblijvend advies • Geen verplichtingen • Privacy gegarandeerd
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ervaringen met Slaapkamer Airco's</h2>
            <div className="flex items-center justify-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="text-gray-700 ml-2">4.9/5 op basis van 150+ reviews</span>
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
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Veelgestelde Vragen over Slaapkamer Airco's</h2>
            <p className="text-lg text-gray-600">Alles wat u wilt weten over airco in de slaapkamer</p>
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
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700"
              >
                Toon alle {faqItems.length} vragen
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Moon className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">
            Klaar voor Betere Nachtrust?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Ontdek de perfecte fluisterstille airco voor uw slaapkamer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#offerte"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Bed className="w-5 h-5" />
              Gratis Slaapkamer Advies
            </a>
            <a
              href="tel:0462021430"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Direct Bellen
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <VolumeX className="w-5 h-5" />
              Fluisterstil vanaf 19dB
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              2 jaar garantie
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Gezonde nachtrust
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoVoorSlaapkamerLanding;