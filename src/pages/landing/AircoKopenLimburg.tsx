import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Package,
  Euro,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  ThermometerSun,
  Zap,
  Shield,
  Calendar,
  Award,
  ChevronRight,
  Info,
  TrendingUp,
  Home,
  Building2,
  HeartHandshake,
  Clock,
  Truck,
  FileText,
  HelpCircle,
  Search,
  Filter,
  ArrowRight,
  BadgeCheck,
  Leaf
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';
import LazyImage from '../../components/LazyImage';

const AircoKopenLimburg: React.FC = () => {
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showAllFAQ, setShowAllFAQ] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Airco Kopen Limburg', path: '/airco-kopen-limburg' }
  ];

  const budgetCategories = [
    { value: 'all', label: 'Alle Prijzen', range: 'Bekijk alles' },
    { value: 'budget', label: 'Budget', range: '€1.200 - €1.800' },
    { value: 'mid', label: 'Mid-range', range: '€1.800 - €2.800' },
    { value: 'premium', label: 'Premium', range: '€2.800 - €4.500' }
  ];

  const aircoTypes = [
    { value: 'all', label: 'Alle Types', icon: Package },
    { value: 'split', label: 'Split Airco', icon: Home },
    { value: 'multi', label: 'Multi-split', icon: Building2 },
    { value: 'mobiel', label: 'Mobiele Airco', icon: Truck }
  ];

  const topProducts = [
    {
      id: 1,
      name: 'Daikin Perfera',
      brand: 'Daikin',
      type: 'split',
      budget: 'premium',
      capacity: '2.5 kW',
      price: '€2.498',
      priceNumeric: 2498,
      scop: '5.15',
      seer: '8.65',
      energyLabel: 'A+++',
      features: ['WiFi besturing', 'Ultra-stil', 'R-32 koudemiddel', 'Zelfdiagnose'],
      image: '/images/products/daikin-perfera-wit.webp',
      popular: true,
      savings: 'Tot €650/jaar besparen'
    },
    {
      id: 2,
      name: 'Mitsubishi Heavy Daiseikai 10',
      brand: 'Mitsubishi Heavy',
      type: 'split',
      budget: 'premium',
      capacity: '2.5 kW',
      price: '€2.698',
      priceNumeric: 2698,
      scop: '5.10',
      seer: '9.50',
      energyLabel: 'A+++',
      features: ['Premium design', '3D-luchtstroom', 'Allergie filter', 'Fluisterstil'],
      image: '/images/products/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp',
      popular: true,
      savings: 'Tot €680/jaar besparen'
    },
    {
      id: 3,
      name: 'LG Standard Plus',
      brand: 'LG',
      type: 'split',
      budget: 'mid',
      capacity: '2.5 kW',
      price: '€1.898',
      priceNumeric: 1898,
      scop: '4.60',
      seer: '6.50',
      energyLabel: 'A++',
      features: ['Smart ThinQ', 'Active Energy Control', 'Gold Fin coating', 'Auto Clean'],
      image: '/images/products/lg-artcool-mirror.webp',
      popular: true,
      savings: 'Tot €550/jaar besparen'
    },
    {
      id: 4,
      name: 'Tosot Inverter',
      brand: 'Tosot',
      type: 'split',
      budget: 'budget',
      capacity: '2.6 kW',
      price: '€1.498',
      priceNumeric: 1498,
      scop: '4.20',
      seer: '6.10',
      energyLabel: 'A++',
      features: ['Inverter technologie', 'WiFi module', 'Sleep mode', '5 jaar garantie'],
      image: '/images/products/568-Pular-indoor-vooraanzicht.webp',
      popular: false,
      savings: 'Tot €480/jaar besparen'
    },
    {
      id: 5,
      name: 'Daikin Emura',
      brand: 'Daikin',
      type: 'split',
      budget: 'premium',
      capacity: '2.5 kW',
      price: '€3.198',
      priceNumeric: 3198,
      scop: '5.15',
      seer: '8.73',
      energyLabel: 'A+++',
      features: ['Designer look', 'Coanda effect', 'Eye sensor', 'Flash Streamer'],
      image: '/images/products/daikin-emura-wit.webp',
      popular: false,
      savings: 'Tot €670/jaar besparen'
    },
    {
      id: 6,
      name: 'Toshiba Haori',
      brand: 'Toshiba',
      type: 'split',
      budget: 'premium',
      capacity: '2.5 kW',
      price: '€2.898',
      priceNumeric: 2898,
      scop: '5.10',
      seer: '9.00',
      energyLabel: 'A+++',
      features: ['Design textiel front', 'Smart adaptieve modus', 'Ultra Pure filter', 'Zelf-reiniging'],
      image: '/images/products/Haori-zwart-vooraanzicht_3_11zon.webp',
      popular: false,
      savings: 'Tot €660/jaar besparen'
    }
  ];

  const filteredProducts = topProducts.filter(product => {
    const budgetMatch = selectedBudget === 'all' || product.budget === selectedBudget;
    const typeMatch = selectedType === 'all' || product.type === selectedType;
    return budgetMatch && typeMatch;
  });

  const buyingProcess = [
    {
      step: 1,
      title: 'Gratis Advies',
      description: 'Bepaal samen welke airco past bij uw situatie',
      icon: HelpCircle,
      time: '30 min'
    },
    {
      step: 2,
      title: 'Offerte op Maat',
      description: 'Transparante prijsopgave inclusief installatie',
      icon: FileText,
      time: '24 uur'
    },
    {
      step: 3,
      title: 'Professionele Installatie',
      description: 'Gecertificeerde monteurs plaatsen uw airco',
      icon: Truck,
      time: '1 dag'
    },
    {
      step: 4,
      title: 'Zorgeloos Genieten',
      description: 'Met garantie en onderhoudscontract',
      icon: Shield,
      time: 'Jarenlang'
    }
  ];

  const whyBuyFromUs = [
    {
      icon: Award,
      title: 'Expert sinds 2021',
      description: 'Specialist in A+++ airco\'s voor Limburg'
    },
    {
      icon: Euro,
      title: 'Beste prijs/kwaliteit',
      description: 'Direct van importeur, zonder tussenpersoon'
    },
    {
      icon: BadgeCheck,
      title: 'All-in installatie',
      description: 'Geen verrassingen, transparante totaalprijs'
    },
    {
      icon: Shield,
      title: '2-5 jaar garantie',
      description: 'Fabrieksgarantie + extra servicegarantie'
    },
    {
      icon: Clock,
      title: 'Snelle levering',
      description: 'Vaak binnen 1-2 weken geïnstalleerd'
    },
    {
      icon: HeartHandshake,
      title: 'Nazorg & onderhoud',
      description: 'Voor, tijdens én na de aankoop'
    }
  ];

  const priceIncludes = [
    'A+++ Airconditioning systeem',
    'Professionele montage door F-gassen gecertificeerde monteurs',
    'Alle benodigde materialen (leidingen, beugels, afdeklijsten)',
    'Elektrische aansluiting en inbedrijfstelling',
    '2 jaar fabrieksgarantie',
    'Instructie & gebruiksaanwijzing',
    'WiFi module (indien van toepassing)',
    'Afvoer van verpakkingsmateriaal'
  ];

  const faqItems = [
    {
      question: 'Wat kost een airco kopen en laten installeren in Limburg?',
      answer: 'Een complete airco installatie in Limburg kost gemiddeld tussen €1.498 en €4.500 all-in. Dit is inclusief A+++ toestel, professionele montage, alle materialen en 2 jaar garantie. De exacte prijs hangt af van het merk (Daikin, Mitsubishi, LG, Tosot), het vermogen, en specifieke situatie ter plaatse. Wij bieden altijd een vrijblijvende offerte op maat aan.'
    },
    {
      question: 'Welke airco merken zijn het beste voor Limburg?',
      answer: 'Voor Limburg adviseren wij vooral Daikin, Mitsubishi Heavy Industries, LG en Toshiba. Deze merken presteren uitstekend in ons klimaat, zowel voor koeling in de zomer als verwarming in de winter. Let op een hoge SCOP-waarde (>4.6) voor winterprestaties. Daikin en Mitsubishi zijn premium merken met topkwaliteit, LG biedt uitstekende prijs/kwaliteit, en Tosot is een betrouwbaar instapmodel.'
    },
    {
      question: 'Kan ik subsidie krijgen bij aankoop van een airco in Limburg?',
      answer: 'Ja! Voor energiezuinige airco\'s (warmtepompen) kunt u in aanmerking komen voor ISDE subsidie. Dit kan oplopen tot €300-€500 per systeem. Ook zijn er gemeentelijke regelingen in enkele Limburgse gemeenten. Wij helpen u graag bij het aanvragen van subsidies en controleren of uw situatie in aanmerking komt. Let op: subsidies wijzigen regelmatig, vraag naar de actuele mogelijkheden.'
    },
    {
      question: 'Hoe lang duurt het van bestelling tot installatie?',
      answer: 'Gemiddeld 1-2 weken. Na uw bestelling plannen we een technisch vooronderzoek in (indien nodig). Zodra alle details bekend zijn, wordt de airco besteld en volgt de installatie meestal binnen 5-10 werkdagen. In de zomermaanden kan de levertijd iets langer zijn door drukte. Bij voorraadmodellen kunnen we soms al binnen 1 week installeren.'
    },
    {
      question: 'Welk vermogen airco heb ik nodig voor mijn ruimte?',
      answer: 'Als vuistregel rekenen we 100 watt koelvermogen per m². Voor een woonkamer van 25m² is dus 2.5 kW voldoende. Echter, dit hangt af van factoren zoals isolatie, oriëntatie, aantal ramen en hoogte van het plafond. Ons gratis adviesgesprek berekent exact welk vermogen u nodig heeft. Beter iets te zwaar dan te licht - een oversized airco draait efficiënter op lager toerental.'
    },
    {
      question: 'Wat is het verschil tussen single-split en multi-split?',
      answer: 'Single-split: 1 buitenunit + 1 binnenunit. Ideaal voor één ruimte, meest kosteneffectief. Multi-split: 1 buitenunit + meerdere binnenunits (2-5 stuks). Voor meerdere kamers, bespaart plaats buiten maar duurder in aanschaf. Voor hele woning raden we vaak meerdere single-splits aan - flexibeler en als één unit kapot gaat, werken de andere nog.'
    },
    {
      question: 'Kan ik een airco ook gebruiken om te verwarmen in de winter?',
      answer: 'Absoluut! Moderne airco\'s zijn warmtepompen die zeer efficiënt verwarmen. Met 1 kW stroom haal je 4-5 kW warmte uit de lucht (SCOP 4-5). Dit is 4-5x zuiniger dan elektrische verwarming! In Limburg zijn airco\'s perfect als aanvullende verwarming of hoofdverwarming. Let wel op een hoge SCOP-waarde voor goede winterprestaties. Onze A+++ modellen werken tot -25°C buiten.'
    },
    {
      question: 'Wat zijn de kosten van airco onderhoud?',
      answer: 'Een losse onderhoudsbeurt kost €179. Voordeliger is een onderhoudscontract: Standaard €11/maand (€132/jaar) of Premium €16/maand (€192/jaar). Dit omvat jaarlijkse beurt met reiniging filters, controle koelvloeistof, inspectie werking en prestatie-optimalisatie. Met een contract krijgt u ook voorrang bij storing en geen voorrijkosten.'
    },
    {
      question: 'Maken jullie ook offertes voor zakelijke klanten in Limburg?',
      answer: 'Jazeker! Wij verzorgen complete airco-oplossingen voor kantoren, winkels, restaurants, praktijkruimtes en andere bedrijven in heel Limburg. Voor zakelijke klanten bieden we speciale service level agreements, onderhoudscontracten, flexibele betalingsregelingen en mogelijk lease-opties. Neem contact op voor een vrijblijvende zakelijke offerte op maat.'
    },
    {
      question: 'Leveren jullie ook in mijn plaats in Limburg?',
      answer: 'Ja, wij leveren en installeren in heel Limburg! Van Maastricht tot Venlo, van Roermond tot Heerlen. Ook kleinere plaatsen zoals Meerssen, Valkenburg, Echt, Venray, Weert, Sittard-Geleen en alle andere gemeenten. Geen extra voorrijkosten voor reguliere installaties. Bel of mail voor een afspraak bij u in de buurt.'
    }
  ];

  const reviews = [
    {
      name: 'Peter Janssen',
      location: 'Maastricht',
      rating: 5,
      text: 'Super advies gekregen! Daikin Perfera gekocht en zeer tevreden. Installatie binnen 2 weken perfect geregeld.',
      date: '2 weken geleden',
      product: 'Daikin Perfera'
    },
    {
      name: 'Sandra Vermeulen',
      location: 'Roermond',
      rating: 5,
      text: 'Uitstekende prijs/kwaliteit. LG airco voor goede prijs en professioneel geïnstalleerd. Aanrader!',
      date: '1 maand geleden',
      product: 'LG Standard Plus'
    },
    {
      name: 'Restaurant Het Limburgse Hof',
      location: 'Venlo',
      rating: 5,
      text: 'Multi-split systeem voor ons restaurant. Vanaf advies tot installatie alles top geregeld.',
      date: '3 weken geleden',
      product: 'Multi-split 4x'
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "StayCool Airco - Airco Kopen Limburg",
    "description": "Airco kopen in Limburg? ✓ A+++ modellen vanaf €1.498 ✓ Gratis advies ✓ All-in installatie ✓ 2-5 jaar garantie. Specialist sinds 2021.",
    "url": "https://staycoolairco.nl/airco-kopen-limburg",
    "telephone": "046-202-1430",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Limburg",
      "addressCountry": "NL"
    },
    "areaServed": {
      "@type": "State",
      "name": "Limburg"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airconditioning Systemen",
      "itemListElement": topProducts.slice(0, 3).map(product => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": product.name,
          "brand": product.brand,
          "offers": {
            "@type": "Offer",
            "price": product.priceNumeric,
            "priceCurrency": "EUR"
          }
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Airco Kopen Limburg | A+++ vanaf €1.498 All-in | StayCool</title>
        <meta name="description" content="Airco kopen in Limburg? ✓ A+++ modellen vanaf €1.498 ✓ Daikin, Mitsubishi, LG ✓ Gratis advies ✓ All-in installatie ✓ 2-5 jaar garantie ✓ Specialist sinds 2021. Bel 046 202 1430." />
        <meta name="keywords" content="airco kopen limburg, airconditioning kopen limburg, airco aanschaf limburg, airco kopen maastricht, airco kopen roermond, airco kopen venlo" />
        <link rel="canonical" href="https://staycoolairco.nl/airco-kopen-limburg" />
      </Helmet>

      <SchemaMarkup type="Store" data={schemaData} />

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
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Specialist sinds 2021 • A+++ Expert • Heel Limburg</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Airco Kopen in Limburg
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                De beste airco's voor Limburg. Van €1.498 all-in met professionele installatie,
                gratis advies en jarenlange garantie.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">A+++</div>
                  <div className="text-sm opacity-90">Topkwaliteit</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">€1.498</div>
                  <div className="text-sm opacity-90">Vanaf all-in</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">2-5jr</div>
                  <div className="text-sm opacity-90">Garantie</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0462021430" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  046 202 1430
                </a>
                <a href="#advies" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Gratis Advies
                </a>
              </div>
            </div>

            <div className="relative">
              <LazyImage
                src="/images/hero-background.jpg"
                alt="Airco kopen in Limburg - StayCool specialist"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">2.500+ Klanten</p>
                    <p className="text-sm text-gray-600">Sinds 2008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter op:</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Budget Filter */}
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {budgetCategories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label} {cat.range && `(${cat.range})`}
                  </option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {aircoTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-600">
              <span className="font-semibold">{filteredProducts.length}</span> resultaten
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Airco's voor Limburg</h2>
            <p className="text-lg text-gray-600">Persoonlijk geselecteerd voor het Limburgse klimaat</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                {product.popular && (
                  <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 text-sm font-semibold text-center">
                    🔥 Populaire Keuze
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      {product.energyLabel}
                    </div>
                  </div>

                  <div className="mb-4">
                    <LazyImage
                      src={product.image}
                      alt={`${product.name} airco kopen Limburg`}
                      className="w-full h-48 object-contain group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
                    <div className="bg-gray-50 rounded p-2">
                      <ThermometerSun className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                      <p className="text-xs text-gray-600">Vermogen</p>
                      <p className="font-semibold">{product.capacity}</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <Zap className="w-4 h-4 mx-auto mb-1 text-green-600" />
                      <p className="text-xs text-gray-600">SCOP</p>
                      <p className="font-semibold">{product.scop}</p>
                    </div>
                    <div className="bg-gray-50 rounded p-2">
                      <Leaf className="w-4 h-4 mx-auto mb-1 text-green-600" />
                      <p className="text-xs text-gray-600">SEER</p>
                      <p className="font-semibold">{product.seer}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <p className="text-xs text-green-600 font-medium mb-2">
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      {product.savings}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">All-in vanaf</p>
                        <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                      </div>
                      <a
                        href="#advies"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
                      >
                        Advies
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Info className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Geen producten gevonden met deze filters.</p>
              <button
                onClick={() => {
                  setSelectedBudget('all');
                  setSelectedType('all');
                }}
                className="mt-4 text-blue-600 font-semibold hover:text-blue-700"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Price Includes Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All-in Prijs Inclusief</h2>
            <p className="text-lg text-gray-600">Transparant en zonder verrassingen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {priceIncludes.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Vrijblijvende offerte op maat</h3>
                <p className="text-gray-600">
                  Elke situatie is uniek. Wij berekenen exact wat uw totale investering is op basis van
                  uw specifieke wensen en locatie. Neem contact op voor een gratis, vrijblijvende offerte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waarom Airco Kopen bij StayCool?</h2>
            <p className="text-lg text-gray-600">De voordelen van een specialist in Limburg</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyBuyFromUs.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <reason.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Uw Airco in 4 Stappen</h2>
            <p className="text-lg text-gray-600">Van advies tot zorgeloos genieten</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {buyingProcess.map((step, idx) => (
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
                {idx < buyingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wat Klanten Zeggen</h2>
            <div className="flex items-center justify-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="text-gray-700 ml-2">4.8/5 op basis van 250+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {review.product}
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Veelgestelde Vragen over Airco Kopen</h2>
            <p className="text-lg text-gray-600">Alles wat u moet weten voor de aankoop</p>
          </div>

          <div className="space-y-4">
            {faqItems.slice(0, showAllFAQ ? faqItems.length : 6).map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                >
                  <h3 className="font-semibold pr-4">{item.question}</h3>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      activeFAQ === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {activeFAQ === idx && (
                  <div className="px-6 py-4 border-t bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!showAllFAQ && faqItems.length > 6 && (
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

      {/* Contact Section */}
      <section id="advies" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Gratis Advies & Offerte op Maat</h2>
            <p className="text-lg text-gray-600">
              Ontdek welke airco perfect past bij uw situatie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Direct Advies?</h3>
              <p className="text-gray-600 mb-4">Bel voor persoonlijk advies</p>
              <a href="tel:0462021430" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                046 202 1430
              </a>
              <p className="text-sm text-gray-500 mt-3">Ma-Za 08:00 - 20:00</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Online Aanvragen</h3>
              <p className="text-gray-600 mb-4">Vraag een offerte aan</p>
              <a href="#contactform" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Aanvraagformulier
              </a>
              <p className="text-sm text-gray-500 mt-3">Reactie binnen 24 uur</p>
            </div>
          </div>

          <div id="contactform" className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Offerte Aanvragen</h3>
            <ContactForm
              source="Airco Kopen Limburg Landing"
              showPrivacyPolicy={true}
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Klaar om uw Airco te Kopen?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            A+++ airco's vanaf €1.498 all-in - met garantie en professionele installatie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0462021430"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Bel Voor Advies
            </a>
            <a
              href="#advies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Vraag Offerte Aan
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Gratis Advies
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Heel Limburg
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              2-5 Jaar Garantie
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoKopenLimburg;
