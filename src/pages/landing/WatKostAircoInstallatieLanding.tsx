import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Euro, 
  Calculator, 
  Home, 
  CheckCircle, 
  Clock, 
  Award,
  TrendingUp,
  Shield,
  Phone,
  ChevronRight,
  Star,
  Users,
  Zap,
  ThermometerSun,
  Settings,
  FileText,
  HelpCircle,
  ArrowRight,
  Package,
  Wrench,
  Calendar,
  MapPin,
  AlertCircle,
  Check
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import CallToAction from '../../components/CallToAction';
import ContactForm from '../../components/Contact';
import LazyImage from '../../components/LazyImage';

const WatKostAircoInstallatieLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('split');
  const [showAllFAQ, setShowAllFAQ] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Airco Installatie Kosten', path: '/wat-kost-airco-installatie' }
  ];

  const pricingData = {
    split: {
      name: 'Split-unit Airco',
      description: 'Meest gekozen voor woningen',
      basePrice: '€1.799',
      installPrice: '€699',
      totalPrice: '€2.498',
      features: [
        'Koelen & verwarmen',
        'Energiezuinig (A+++)',
        'Stil in gebruik',
        'App bediening mogelijk'
      ]
    },
    multi: {
      name: 'Multi-split Airco',
      description: 'Voor meerdere kamers',
      basePrice: '€3.299',
      installPrice: '€1.299',
      totalPrice: '€4.598',
      features: [
        '2-5 binnenunits mogelijk',
        'Één buitenunit',
        'Zone controle',
        'Centrale bediening'
      ]
    },
    mobiel: {
      name: 'Mobiele Airco',
      description: 'Flexibele oplossing',
      basePrice: '€399',
      installPrice: '€0',
      totalPrice: '€399',
      features: [
        'Geen installatie nodig',
        'Direct te gebruiken',
        'Verplaatsbaar',
        'Plug & play'
      ]
    }
  };

  const costFactors = [
    {
      icon: Home,
      title: 'Type woning',
      description: 'Appartement, tussenwoning of vrijstaand',
      impact: '€200 - €500'
    },
    {
      icon: TrendingUp,
      title: 'Aantal kamers',
      description: 'Meer units = scherpere prijs per unit',
      impact: '€500 - €1.500 per unit'
    },
    {
      icon: Wrench,
      title: 'Installatie complexiteit',
      description: 'Leidinglengte, bereikbaarheid, dakwerk',
      impact: '€300 - €800'
    },
    {
      icon: Package,
      title: 'Merk & model',
      description: 'Budget tot premium merken',
      impact: '€500 - €2.000'
    }
  ];

  const reviews = [
    {
      name: 'Peter van der Berg',
      location: 'Maastricht',
      rating: 5,
      text: 'Transparante prijzen, geen verrassingen achteraf. Installatie binnen één dag klaar!',
      date: '2 weken geleden'
    },
    {
      name: 'Linda Jacobs',
      location: 'Heerlen',
      rating: 5,
      text: 'Beste prijs-kwaliteit verhouding. Ze legden precies uit wat de kosten waren.',
      date: '1 maand geleden'
    },
    {
      name: 'Mark Hendriks',
      location: 'Sittard',
      rating: 5,
      text: 'Eerlijke prijzen en uitstekende service. Aanrader!',
      date: '3 weken geleden'
    }
  ];

  const faqItems = [
    {
      question: 'Wat kost een airco inclusief installatie?',
      answer: 'Een complete airco installatie kost gemiddeld tussen €2.000 - €3.500 voor een single-split systeem. Dit is inclusief het toestel, installatie, leidingwerk en inbedrijfstelling. De exacte prijs hangt af van het vermogen, merk en de complexiteit van de installatie.'
    },
    {
      question: 'Hoeveel kost een airco installatie zonder toestel?',
      answer: 'De installatiekosten zonder toestel bedragen meestal €699 - €1.299. Dit omvat het plaatsen van de binnen- en buitenunit, aanleggen van koelleidingen (tot 5 meter), elektrische aansluiting, condensafvoer en het vacuüm zuigen en afpersen van het systeem.'
    },
    {
      question: 'Zijn er extra kosten bij airco installatie?',
      answer: 'Mogelijke extra kosten zijn: extra leidingwerk (€75/meter), dakdoorvoer (€350), muurbeugel (€150), elektra aanpassing (€250-500) en het plaatsen op moeilijk bereikbare locaties. Wij bespreken alle kosten vooraf transparant met u.'
    },
    {
      question: 'Wat bepaalt de prijs van een airco installatie?',
      answer: 'De belangrijkste factoren zijn: type en vermogen van de airco, aantal te koelen ruimtes, afstand tussen binnen- en buitenunit, complexiteit van de installatie, bereikbaarheid van de installatieplek en eventuele aanpassingen aan elektra of bouwkundige voorzieningen.'
    },
    {
      question: 'Is BTW inbegrepen in de airco installatie prijs?',
      answer: 'Ja, al onze prijzen zijn inclusief 21% BTW. Voor particulieren is het BTW-tarief altijd 21%. Zakelijke klanten kunnen onder voorwaarden BTW terugvorderen. Wij verstrekken altijd een gespecificeerde factuur.'
    },
    {
      question: 'Kan ik subsidie krijgen voor airco installatie?',
      answer: 'Er is geen directe subsidie voor airco\'s, maar een warmtepomp-airco kan wel in aanmerking komen voor de ISDE-subsidie (€500-1.000). Ook zijn er gemeentelijke duurzaamheidsleningen beschikbaar tegen lage rente.'
    },
    {
      question: 'Hoeveel kost het onderhoud van een airco?',
      answer: 'Jaarlijks onderhoud kost €119 - €169 per unit. Dit omvat reiniging filters, controle koelvloeistof, desinfectie en algemene inspectie. Een onderhoudscontract is vaak voordeliger en garandeert optimale werking.'
    },
    {
      question: 'Wat kost een multi-split airco installatie?',
      answer: 'Een multi-split systeem (2 binnenunits) kost inclusief installatie €4.000 - €6.000. Voor elke extra binnenunit rekent u €1.200 - €1.800 extra. Dit is voordeliger dan meerdere losse systemen.'
    }
  ];

  const tableOfContents = [
    { id: 'prijsoverzicht', label: 'Directe Prijzen', icon: Euro },
    { id: 'kostenfactoren', label: 'Wat Bepaalt de Prijs?', icon: Calculator },
    { id: 'vergelijking', label: 'Systemen Vergelijken', icon: Settings },
    { id: 'besparen', label: 'Bespaar op Kosten', icon: TrendingUp },
    { id: 'offerte', label: 'Gratis Offerte', icon: FileText },
    { id: 'reviews', label: 'Klantbeoordelingen', icon: Star },
    { id: 'faq', label: 'Veelgestelde Vragen', icon: HelpCircle }
  ];

  const comparisonData = [
    {
      feature: 'Aanschafprijs',
      split: '€1.500 - €2.500',
      multi: '€3.000 - €5.000',
      mobiel: '€300 - €800'
    },
    {
      feature: 'Installatiekosten',
      split: '€699 - €999',
      multi: '€1.299 - €1.999',
      mobiel: '€0'
    },
    {
      feature: 'Energieverbruik/jaar',
      split: '€150 - €250',
      multi: '€300 - €500',
      mobiel: '€400 - €600'
    },
    {
      feature: 'Onderhoudskosten/jaar',
      split: '€119',
      multi: '€169 - €249',
      mobiel: '€49'
    },
    {
      feature: 'Levensduur',
      split: '15-20 jaar',
      multi: '15-20 jaar',
      mobiel: '5-10 jaar'
    },
    {
      feature: 'Geschikt voor',
      split: '1-2 kamers',
      multi: '3-5 kamers',
      mobiel: '1 kamer'
    }
  ];

  const savingTips = [
    {
      tip: 'Kies het juiste vermogen',
      description: 'Te zwaar = onnodig duur, te licht = inefficiënt',
      saving: 'Bespaar €300-500'
    },
    {
      tip: 'Installeer in laagseizoen',
      description: 'Oktober - maart vaak lagere prijzen',
      saving: 'Bespaar 10-15%'
    },
    {
      tip: 'Combineer meerdere units',
      description: 'Multi-split is voordeliger dan losse units',
      saving: 'Bespaar €500-1000'
    },
    {
      tip: 'Vraag meerdere offertes',
      description: 'Vergelijk prijzen en voorwaarden',
      saving: 'Bespaar tot 20%'
    }
  ];


  return (
    <>
      <Helmet>
        <title>Wat Kost een Airco Installatie? | Prijzen 2024 | StayCool Airco</title>
        <meta name="description" content="Wat kost een airco inclusief installatie? Complete prijsoverzicht 2024. Split-airco vanaf €2.498 all-in. Vraag direct een gratis offerte aan!" />
        <meta name="keywords" content="wat kost een airco installatie, hoeveel kost airco installatie, airco installatie kosten, airco inclusief installatie prijs" />
        <link rel="canonical" href="https://staycoolairco.nl/wat-kost-airco-installatie" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          name: "Airco Installatie",
          description: "Professionele airco installatie in Limburg. Complete installatie vanaf €2.498 inclusief montage. Vraag direct een offerte aan.",
          provider: {
            "@type": "LocalBusiness",
            "name": "StayCool Airco",
            "image": "https://staycoolairco.nl/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Limburg",
              "addressCountry": "NL"
            }
          },
          areaServed: {
            "@type": "State",
            "name": "Limburg"
          },
          priceRange: "€€",
          offers: {
            "@type": "Offer",
            "price": "2498",
            "priceCurrency": "EUR",
            "name": "Complete airco installatie"
          }
        }} 
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section met Direct Antwoord */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Transparante Prijzen • Geen Verborgen Kosten</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wat Kost een Airco Installatie in 2024?
              </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-2xl font-semibold mb-2">
                  Complete installatie vanaf €2.498,-
                </p>
                <p className="text-lg opacity-90">
                  Inclusief A+++ airco, professionele montage & garantie
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#offerte" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Bereken Uw Prijs
                </a>
                <a href="tel:0462021430" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  046 202 1430
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Jaar Ervaring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2.500+</div>
                  <div className="text-sm opacity-90">Installaties</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.8/5</div>
                  <div className="text-sm opacity-90">Klantscore</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <LazyImage
                src="/images/airco-installation-hero.jpg"
                alt="Professionele airco installatie"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-lg shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Direct Inzicht</p>
                    <p className="text-sm text-gray-600">Alle kosten vooraf bekend</p>
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

      {/* Direct Prijsoverzicht */}
      <section id="prijsoverzicht" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Directe Prijzen Airco Installatie</h2>
            <p className="text-lg text-gray-600">Transparant overzicht van alle kosten</p>
          </div>

          {/* Prijstabellen */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {Object.entries(pricingData).map(([key, data]) => (
              <div
                key={key}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  key === 'split' ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {key === 'split' && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                    MEEST GEKOZEN
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{data.name}</h3>
                  <p className="text-gray-600 mb-6">{data.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span>Airco unit:</span>
                      <span className="font-semibold">{data.basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Installatie:</span>
                      <span className="font-semibold">{data.installPrice}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Totaal:</span>
                        <span className="font-bold text-blue-600">{data.totalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {data.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#offerte"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Offerte Aanvragen
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Inbegrepen in de prijs */}
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Wat zit er in de installatieprijs?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Wrench, title: 'Montage units', desc: 'Binnen- en buitenunit' },
                { icon: Settings, title: 'Leidingwerk', desc: 'Tot 5 meter koelleiding' },
                { icon: Zap, title: 'Elektra', desc: 'Aansluiting op groepenkast' },
                { icon: Shield, title: 'Garantie', desc: '2 jaar installatiegarantie' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-lg">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kostenfactoren */}
      <section id="kostenfactoren" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wat Bepaalt de Prijs van Airco Installatie?</h2>
            <p className="text-lg text-gray-600">Factoren die de kosten beïnvloeden</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {costFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <factor.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{factor.title}</h3>
                    <p className="text-gray-600 mb-3">{factor.description}</p>
                    <div className="bg-gray-50 rounded-lg px-4 py-2 inline-block">
                      <span className="text-sm font-medium text-gray-700">Impact: </span>
                      <span className="text-sm font-bold text-blue-600">{factor.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extra kosten waarschuwing */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Mogelijke Extra Kosten</h3>
                <ul className="space-y-1 text-sm text-amber-800">
                  <li>• Extra leidingwerk (&gt;5m): €75 per meter</li>
                  <li>• Dakdoorvoer: €350</li>
                  <li>• Muurbeugel voor buitenunit: €150</li>
                  <li>• Aanpassing elektra: €250-€500</li>
                </ul>
                <p className="mt-3 text-sm font-medium">
                  Wij bespreken alle kosten transparant vooraf - geen verrassingen achteraf!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vergelijkingstabel */}
      <section id="vergelijking" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vergelijk Airco Systemen</h2>
            <p className="text-lg text-gray-600">Welk systeem past het beste bij uw situatie?</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 font-semibold">Kenmerk</th>
                  <th className="text-center p-4 font-semibold">Split-unit</th>
                  <th className="text-center p-4 font-semibold">Multi-split</th>
                  <th className="text-center p-4 font-semibold">Mobiele Airco</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="text-center p-4">{row.split}</td>
                    <td className="text-center p-4">{row.multi}</td>
                    <td className="text-center p-4">{row.mobiel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Niet zeker welk systeem u nodig heeft?</p>
            <a href="#offerte" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              <HelpCircle className="w-5 h-5" />
              Vraag Gratis Advies
            </a>
          </div>
        </div>
      </section>

      {/* Bespaar tips */}
      <section id="besparen" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bespaar op Airco Installatie Kosten</h2>
            <p className="text-lg text-gray-600">Slimme tips om kosten te verlagen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {savingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{tip.tip}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {tip.saving}
                  </span>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Offerte Sectie */}
      <section id="offerte" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vraag Direct een Gratis Offerte Aan</h2>
            <p className="text-lg opacity-90">
              Binnen 24 uur een persoonlijke offerte op maat
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-gray-900">
            <ContactForm 
              source="Wat Kost Airco Installatie Landing"
              showPrivacyPolicy={true}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div>
              <Clock className="w-12 h-12 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-2">Snelle Response</h3>
              <p className="text-sm opacity-80">Binnen 24 uur reactie</p>
            </div>
            <div>
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-2">Gedetailleerde Offerte</h3>
              <p className="text-sm opacity-80">Alle kosten transparant</p>
            </div>
            <div>
              <Shield className="w-12 h-12 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-2">Vrijblijvend</h3>
              <p className="text-sm opacity-80">Geen verplichtingen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wat Klanten Zeggen Over Onze Prijzen</h2>
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
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
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

      {/* FAQ Sectie */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Veelgestelde Vragen over Kosten</h2>
            <p className="text-lg text-gray-600">Alles wat u wilt weten over airco installatie prijzen</p>
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
            Klaar om te Starten met Uw Airco Installatie?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Ontvang vandaag nog een persoonlijke offerte met exacte prijzen voor uw situatie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#offerte"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Bereken Mijn Prijs
            </a>
            <a
              href="tel:0462021430"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Direct Contact
            </a>
          </div>
          <p className="mt-6 text-sm opacity-80">
            ✓ Gratis offerte ✓ Binnen 24 uur ✓ Vrijblijvend
          </p>
        </div>
      </section>
    </>
  );
};

export default WatKostAircoInstallatieLanding;