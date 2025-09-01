import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Wrench,
  Clock,
  Shield,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Calendar,
  Users,
  Award,
  Zap,
  ThermometerSun,
  Settings,
  FileText,
  HelpCircle,
  ArrowRight,
  Package,
  Star,
  ChevronRight,
  Euro,
  Truck,
  HeartHandshake,
  Building2,
  Home,
  Timer,
  PhoneCall,
  Mail,
  Navigation,
  Check,
  X,
  Info,
  TrendingUp,
  BarChart3,
  ClipboardCheck
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';
import LazyImage from '../../components/LazyImage';

const AircoServiceLimburgLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('onderhoud');
  const [showAllFAQ, setShowAllFAQ] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [selectedServiceArea, setSelectedServiceArea] = useState('all');

  const breadcrumbItems = [
    { label: 'Airco Service Limburg', path: '/airco-service-limburg' }
  ];

  const serviceTypes = {
    onderhoud: {
      name: 'Preventief Onderhoud',
      icon: Settings,
      description: 'Regelmatig onderhoud voorkomt storingen',
      price: 'vanaf €119/jaar',
      features: [
        'Jaarlijkse inspectie',
        'Filter reiniging',
        'Koelvloeistof controle',
        'Prestatie optimalisatie'
      ]
    },
    reparatie: {
      name: 'Reparatie Service',
      icon: Wrench,
      description: '24/7 storingsdienst in heel Limburg',
      price: 'vanaf €89 voorrijkosten',
      features: [
        '24/7 bereikbaar',
        'Snelle response tijd',
        'Ervaren monteurs',
        'Garantie op reparaties'
      ]
    },
    installatie: {
      name: 'Nieuwe Installatie',
      icon: Package,
      description: 'Professionele airco installatie',
      price: 'vanaf €2.498 all-in',
      features: [
        'Gratis adviesgesprek',
        'A+++ toestellen',
        'Gecertificeerde montage',
        '2 jaar garantie'
      ]
    }
  };

  const serviceAreas = [
    { name: 'Zuid-Limburg', cities: ['Maastricht', 'Heerlen', 'Sittard-Geleen', 'Valkenburg', 'Kerkrade'] },
    { name: 'Midden-Limburg', cities: ['Roermond', 'Weert', 'Echt', 'Maasbracht', 'Nederweert'] },
    { name: 'Noord-Limburg', cities: ['Venlo', 'Venray', 'Panningen', 'Gennep', 'Horst'] }
  ];

  const serviceProcess = [
    {
      step: 1,
      title: 'Contact',
      description: 'Bel of mail ons voor service',
      icon: PhoneCall,
      time: '< 2 min'
    },
    {
      step: 2,
      title: 'Planning',
      description: 'Direct afspraak inplannen',
      icon: Calendar,
      time: '< 5 min'
    },
    {
      step: 3,
      title: 'Service',
      description: 'Monteur komt langs',
      icon: Truck,
      time: 'Binnen 24u'
    },
    {
      step: 4,
      title: 'Garantie',
      description: 'Service garantie & nazorg',
      icon: Shield,
      time: 'Altijd'
    }
  ];

  const pricingTable = [
    {
      service: 'Onderhoudsbeurt',
      residential: '€119',
      commercial: '€149',
      includes: 'Inspectie, reiniging, rapportage'
    },
    {
      service: 'Storing verhelpen',
      residential: '€89 + €79/uur',
      commercial: '€109 + €89/uur',
      includes: 'Voorrijkosten + arbeid'
    },
    {
      service: 'Spoedreparatie (24/7)',
      residential: '€149 + €119/uur',
      commercial: '€189 + €139/uur',
      includes: 'Weekend/avond tarief'
    },
    {
      service: 'Filter vervangen',
      residential: '€49',
      commercial: '€69',
      includes: 'Inclusief nieuwe filters'
    },
    {
      service: 'Koelvloeistof bijvullen',
      residential: 'vanaf €199',
      commercial: 'vanaf €249',
      includes: 'Incl. lekdetectie'
    }
  ];

  const reviews = [
    {
      name: 'Johan Bakker',
      location: 'Maastricht',
      rating: 5,
      text: 'Binnen 2 uur ter plaatse voor spoedservice. Top service!',
      date: '1 week geleden',
      service: 'Spoedreparatie'
    },
    {
      name: 'Maria de Vries',
      location: 'Roermond',
      rating: 5,
      text: 'Jaarlijks onderhoud perfect uitgevoerd. Zeer tevreden met het onderhoudscontract.',
      date: '2 weken geleden',
      service: 'Onderhoudscontract'
    },
    {
      name: 'Restaurant De Zwaan',
      location: 'Venlo',
      rating: 5,
      text: 'Uitstekende zakelijke service. Altijd snel ter plaatse bij problemen.',
      date: '1 maand geleden',
      service: 'Zakelijke service'
    }
  ];

  const faqItems = [
    {
      question: 'Wat kost airco service in Limburg?',
      answer: 'Een standaard onderhoudsbeurt kost €119 voor particulieren en €149 voor zakelijke klanten. Reparaties starten vanaf €89 voorrijkosten plus €79 per uur arbeid. Voor spoedreparaties buiten kantooruren gelden hogere tarieven. Wij hanteren transparante prijzen zonder verborgen kosten.'
    },
    {
      question: 'Hoe snel kunnen jullie ter plaatse zijn?',
      answer: 'Voor reguliere service streven we naar een afspraak binnen 24-48 uur. Bij spoedreparaties zijn we meestal binnen 2-4 uur ter plaatse in heel Limburg. In de zomermaanden kan de responstijd iets langer zijn vanwege drukte.'
    },
    {
      question: 'Servicen jullie alle merken airco\'s?',
      answer: 'Ja, wij servicen alle merken airco\'s waaronder Daikin, Mitsubishi, LG, Toshiba, Samsung, Panasonic en meer. Onze monteurs zijn breed opgeleid en hebben toegang tot onderdelen van alle grote merken.'
    },
    {
      question: 'Wat houdt een onderhoudsbeurt in?',
      answer: 'Een complete onderhoudsbeurt omvat: reiniging van filters en warmtewisselaars, controle koelvloeistofniveau, inspectie elektrische aansluitingen, test van alle functies, controle condensafvoer, desinfectie binnenunit en een uitgebreid servicerapport.'
    },
    {
      question: 'Bieden jullie onderhoudscontracten aan?',
      answer: 'Ja, wij bieden voordelige onderhoudscontracten vanaf €11 per maand. Dit includeert jaarlijks onderhoud, voorrang bij storingen, geen voorrijkosten en korting op reparaties. Voor zakelijke klanten hebben we speciale service level agreements.'
    },
    {
      question: 'Werken jullie in het weekend?',
      answer: 'Ja, onze storingsdienst is 24/7 bereikbaar, ook in weekenden en op feestdagen. Voor regulier onderhoud plannen we afspraken van maandag t/m zaterdag. Spoedservice is altijd beschikbaar tegen een meerprijs.'
    },
    {
      question: 'Servicen jullie ook bedrijfsairco\'s?',
      answer: 'Absoluut! Wij hebben speciale zakelijke servicecontracten voor kantoren, winkels, restaurants en andere bedrijven. We bieden flexibele service windows, preventief onderhoud en gegarandeerde responstijden.'
    },
    {
      question: 'Wat als mijn airco niet meer te repareren is?',
      answer: 'Als reparatie economisch niet verantwoord is, adviseren wij eerlijk over vervanging. We maken een kosten-baten analyse en kunnen direct een offerte maken voor een nieuwe installatie. Bij vervanging krijgt u korting op de demontage van de oude unit.'
    },
    {
      question: 'Geven jullie garantie op service?',
      answer: 'Ja, wij geven 6 maanden garantie op alle reparaties en 1 jaar garantie op vervangen onderdelen. Bij onderhoudscontracten verlenen we zelfs uitgebreide garantie op de gehele installatie.'
    },
    {
      question: 'Kan ik online een afspraak maken?',
      answer: 'Ja, via ons contactformulier kunt u 24/7 een serviceafspraak aanvragen. Voor spoedreparaties raden we aan te bellen op 046 202 1430 voor de snelste service.'
    }
  ];

  const tableOfContents = [
    { id: 'services', label: 'Onze Services', icon: Wrench },
    { id: 'werkgebied', label: 'Service Gebied', icon: MapPin },
    { id: 'proces', label: 'Service Process', icon: ClipboardCheck },
    { id: 'prijzen', label: 'Tarieven', icon: Euro },
    { id: 'waarom', label: 'Waarom StayCool', icon: Award },
    { id: 'contact', label: 'Direct Contact', icon: Phone },
    { id: 'reviews', label: 'Klantreviews', icon: Star },
    { id: 'faq', label: 'Veelgestelde Vragen', icon: HelpCircle }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Dag en nacht bereikbaar voor spoedreparaties'
    },
    {
      icon: MapPin,
      title: 'Heel Limburg',
      description: 'Servicedekking in alle gemeenten van Limburg'
    },
    {
      icon: Award,
      title: '15+ jaar ervaring',
      description: 'Gecertificeerde monteurs met ruime ervaring'
    },
    {
      icon: Shield,
      title: 'Garantie',
      description: '6 maanden garantie op alle reparaties'
    },
    {
      icon: Euro,
      title: 'Vaste tarieven',
      description: 'Transparante prijzen zonder verrassingen'
    },
    {
      icon: Users,
      title: '2.500+ klanten',
      description: 'Vertrouwd door particulieren en bedrijven'
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "StayCool Airco Service Limburg",
    "description": "24/7 Airco service in heel Limburg. Onderhoud vanaf €119, reparaties met snelle responstijd. Alle merken.",
    "url": "https://staycoolairco.nl/airco-service-limburg",
    "telephone": "046-202-1430",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Limburg",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8514",
      "longitude": "5.6910"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "State",
      "name": "Limburg"
    },
    "priceRange": "€€"
  };

  return (
    <>
      <Helmet>
        <title>Airco Service Limburg 24/7 | Onderhoud & Reparatie | StayCool</title>
        <meta name="description" content="Airco service in heel Limburg. ✓ 24/7 storingsdienst ✓ Onderhoud vanaf €119 ✓ Alle merken ✓ Binnen 24u ter plaatse. Bel 046 202 1430." />
        <meta name="keywords" content="airco service limburg, airconditioning service limburg, airco onderhoud limburg, airco reparatie limburg, airco storing limburg" />
        <link rel="canonical" href="https://staycoolairco.nl/airco-service-limburg" />
      </Helmet>

      <SchemaMarkup schema={schemaData} />

      {/* Breadcrumbs */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Gecertificeerd • 24/7 Bereikbaar • Heel Limburg</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Airco Service Limburg
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Professionele airco service in heel Limburg. Van preventief onderhoud 
                tot spoedreparaties. Alle merken, transparante prijzen.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Storingsdienst</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">&lt;2u</div>
                  <div className="text-sm opacity-90">Response tijd</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">€119</div>
                  <div className="text-sm opacity-90">Onderhoud</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0462021430" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  046 202 1430
                </a>
                <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Plan Service
                </a>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage
                src="/images/airco-service-hero.jpg"
                alt="Airco service monteur aan het werk"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Snel ter plaatse</p>
                    <p className="text-sm text-gray-600">In heel Limburg</p>
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Airco Service in Limburg</h2>
            <p className="text-lg text-gray-600">Van onderhoud tot reparatie - wij regelen het allemaal</p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-200 rounded-lg p-1">
              {Object.keys(serviceTypes).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type)}
                  className={`px-6 py-2 rounded-lg font-medium transition ${
                    activeTab === type
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {serviceTypes[type as keyof typeof serviceTypes].name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Detail */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(serviceTypes[activeTab as keyof typeof serviceTypes].icon, {
                    className: "w-8 h-8 text-blue-600"
                  })}
                  <h3 className="text-2xl font-bold">
                    {serviceTypes[activeTab as keyof typeof serviceTypes].name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  {serviceTypes[activeTab as keyof typeof serviceTypes].description}
                </p>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-2xl font-bold text-blue-600">
                    {serviceTypes[activeTab as keyof typeof serviceTypes].price}
                  </p>
                </div>
                <ul className="space-y-3">
                  {serviceTypes[activeTab as keyof typeof serviceTypes].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <LazyImage
                  src={`/images/service-${activeTab}.jpg`}
                  alt={`${serviceTypes[activeTab as keyof typeof serviceTypes].name} service`}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Quick Service Boxes */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spoed Service</h3>
              <p className="text-gray-600 mb-4">Airco storing? Wij komen direct!</p>
              <a href="tel:0462021430" className="text-red-500 font-semibold flex items-center gap-2 hover:text-red-600">
                Bel Direct <Phone className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
              <Calendar className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Onderhoudscontract</h3>
              <p className="text-gray-600 mb-4">Zorgeloos genieten vanaf €11/maand</p>
              <a href="#contact" className="text-green-500 font-semibold flex items-center gap-2 hover:text-green-600">
                Meer Info <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <Building2 className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zakelijke Service</h3>
              <p className="text-gray-600 mb-4">Maatwerk voor uw bedrijf</p>
              <a href="#contact" className="text-blue-500 font-semibold flex items-center gap-2 hover:text-blue-600">
                Offerte Aanvragen <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="werkgebied" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service in Heel Limburg</h2>
            <p className="text-lg text-gray-600">Snelle service in uw regio - altijd dichtbij</p>
          </div>

          {/* Region Selector */}
          <div className="flex justify-center mb-8">
            <select
              value={selectedServiceArea}
              onChange={(e) => setSelectedServiceArea(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Alle regio's</option>
              {serviceAreas.map((area) => (
                <option key={area.name} value={area.name}>{area.name}</option>
              ))}
            </select>
          </div>

          {/* Service Areas Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas
              .filter(area => selectedServiceArea === 'all' || area.name === selectedServiceArea)
              .map((area) => (
              <div key={area.name} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">{area.name}</h3>
                </div>
                <div className="space-y-2">
                  {area.cities.map((city) => (
                    <div key={city} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-500">
                    <Timer className="w-4 h-4 inline mr-1" />
                    Response tijd: &lt;2 uur
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Service Coverage Note */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6 text-center">
            <p className="text-blue-900 font-medium">
              <Info className="w-5 h-5 inline mr-2" />
              Ook service in kleinere plaatsen! Niet gevonden? Bel ons voor service in uw gemeente.
            </p>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section id="proces" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hoe Werkt Onze Service?</h2>
            <p className="text-lg text-gray-600">Van melding tot oplossing in 4 simpele stappen</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {serviceProcess.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium inline-block">
                    {step.time}
                  </div>
                </div>
                {index < serviceProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prijzen" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparante Service Tarieven</h2>
            <p className="text-lg text-gray-600">Geen verborgen kosten - u weet waar u aan toe bent</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 font-semibold">Service</th>
                  <th className="text-center p-4 font-semibold">
                    <Home className="w-5 h-5 inline mr-2" />
                    Particulier
                  </th>
                  <th className="text-center p-4 font-semibold">
                    <Building2 className="w-5 h-5 inline mr-2" />
                    Zakelijk
                  </th>
                  <th className="text-left p-4 font-semibold">Inclusief</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{item.service}</td>
                    <td className="text-center p-4 font-semibold text-blue-600">{item.residential}</td>
                    <td className="text-center p-4 font-semibold text-blue-600">{item.commercial}</td>
                    <td className="p-4 text-sm text-gray-600">{item.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Onderhoudscontract Voordelen
              </h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>✓ Tot 25% korting op reparaties</li>
                <li>✓ Geen voorrijkosten bij storing</li>
                <li>✓ Voorrang bij spoedreparaties</li>
                <li>✓ Jaarlijkse APK voor uw airco</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Goed om te weten
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Alle prijzen zijn inclusief BTW</li>
                <li>• Betaling contant, pin of factuur</li>
                <li>• Offerte vooraf bij grote reparaties</li>
                <li>• 6 maanden garantie op reparaties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="waarom" className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waarom StayCool Airco Service?</h2>
            <p className="text-lg opacity-90">De betrouwbare keuze voor airco service in Limburg</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="opacity-90">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="opacity-90">Jaar ervaring</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2.500+</div>
                <div className="opacity-90">Tevreden klanten</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Bereikbaar</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.8/5</div>
                <div className="opacity-90">Klantbeoordeling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Direct Service Aanvragen</h2>
            <p className="text-lg text-gray-600">
              Storing? Bel direct. Onderhoud? Plan online in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 rounded-xl p-6 text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Spoedeisende Storing?</h3>
              <p className="text-gray-600 mb-4">Direct contact voor snelle hulp</p>
              <a href="tel:0462021430" className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                046 202 1430
              </a>
              <p className="text-sm text-gray-500 mt-3">24/7 bereikbaar</p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <Calendar className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Onderhoud Plannen?</h3>
              <p className="text-gray-600 mb-4">Vraag online een afspraak aan</p>
              <a href="#contactform" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Online Aanvragen
              </a>
              <p className="text-sm text-gray-500 mt-3">Reactie binnen 24 uur</p>
            </div>
          </div>

          <div id="contactform" className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Service Aanvraagformulier</h3>
            <ContactForm 
              source="Airco Service Limburg Landing"
              showPrivacyPolicy={true}
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wat Klanten Zeggen Over Onze Service</h2>
            <div className="flex items-center justify-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="text-gray-700 ml-2">4.8/5 op basis van 250+ reviews</span>
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
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {review.service}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              Bekijk alle reviews
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Veelgestelde Vragen over Airco Service</h2>
            <p className="text-lg text-gray-600">Alles wat u wilt weten over onze service</p>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            24/7 Airco Service in Heel Limburg
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Van spoedreparatie tot onderhoudscontract - wij staan voor u klaar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0462021430"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Bel Voor Spoedservice
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Plan Onderhoud In
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              24/7 Bereikbaar
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Heel Limburg
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              6 Maanden Garantie
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoServiceLimburgLanding;