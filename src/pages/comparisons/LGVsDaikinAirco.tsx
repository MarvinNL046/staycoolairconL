import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Phone, ArrowRight, Star, Shield, Award,
  ChevronDown, ChevronUp, Zap, Wifi, Wind
} from 'lucide-react';
import ComparisonTable from '../../components/ComparisonTable';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/Contact';

const LGVsDaikinAirco: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Vergelijkingen', path: '/vergelijkingen' },
    { label: 'LG vs Daikin Airco' },
  ];

  const schemaData = {
    name: 'LG vs Daikin Airco Vergelijking 2025',
    description:
      'LG Artcool of Daikin Stylish? Uitgebreide vergelijking op prijs, energie, geluid & garantie. Onafhankelijk advies van airco-specialist StayCool Limburg.',
    url: 'https://staycoolairco.nl/lg-vs-daikin-airco',
  };

  const comparisonData = {
    product1: {
      name: 'Daikin Stylish',
      image: '/images/products/daikin-stylish-wit.webp',
      price: 'Vraag offerte aan',
      link: '/products/daikin/stylish',
      pros: [
        'Beste energiezuinigheid (SCOP 5,15)',
        'Flash Streamer luchtzuivering',
        'Bewegingssensor (aanwezigheidsdetectie)',
        'Coanda-effect voor optimale luchtverdeling',
        'Stijlvol design (3 kleuren: wit, zilver, zwart)',
        'Excellente smart home integratie',
      ],
      cons: [
        'Hogere aanschafprijs',
        'App soms instabiel bij updates',
        'Beperktere capaciteitsrange',
      ],
    },
    product2: {
      name: 'LG Artcool Mirror',
      image: '/images/products/lg-artcool.webp',
      price: 'Vraag offerte aan',
      link: '/products/lg/artcool',
      pros: [
        'Strak spiegelontwerp past in elk interieur',
        'ThinQ smart home (Google/Alexa)',
        'Dual Ionizer luchtzuivering',
        'Goede prijs/kwaliteit verhouding',
        'Breed capaciteitsbereik beschikbaar',
        'LG ThinQ app gebruiksvriendelijk',
      ],
      cons: [
        'Iets lagere SCOP dan Daikin (4,6 vs 5,15)',
        'Geen bewegingssensor standaard',
        'Minder kleuren beschikbaar',
      ],
    },
  };

  const comparisonItems = [
    { feature: 'Energielabel koelen', product1: 'A+++', product2: 'A+++', highlight: 'both' as const },
    { feature: 'Energielabel verwarmen', product1: 'A+++', product2: 'A++', highlight: 'product1' as const },
    { feature: 'SEER waarde', product1: '8.75', product2: '8.5', highlight: 'product1' as const },
    { feature: 'SCOP waarde', product1: '5.15', product2: '4.6', highlight: 'product1' as const },
    { feature: 'Geluidsniveau (min)', product1: '19', product2: '19', unit: 'dB', highlight: 'both' as const },
    { feature: 'WiFi ingebouwd', product1: true, product2: true, highlight: 'both' as const },
    { feature: 'Luchtzuivering', product1: 'Flash Streamer', product2: 'Dual Ionizer', highlight: 'both' as const },
    { feature: 'Bewegingssensor', product1: true, product2: false, highlight: 'product1' as const },
    { feature: 'Zelfreinigend', product1: true, product2: true, highlight: 'both' as const },
    { feature: 'Garantie compressor', product1: '10 jaar', product2: '10 jaar', highlight: 'both' as const },
    { feature: 'Apple HomeKit', product1: true, product2: false, highlight: 'product1' as const },
    { feature: 'Google Home', product1: true, product2: true, highlight: 'both' as const },
    { feature: 'Amazon Alexa', product1: true, product2: true, highlight: 'both' as const },
    { feature: 'Prijs niveau', product1: 'Hoog', product2: 'Midden', highlight: 'product2' as const },
  ];

  const faqItems = [
    {
      question: 'Is Daikin altijd beter dan LG?',
      answer:
        'Niet altijd. Daikin wint op energieprestatie (SCOP 5,15 vs 4,6) en heeft extra features zoals een bewegingssensor. LG biedt uitstekende kwaliteit voor een lagere prijs en heeft een strak spiegelontwerp. Uw keuze hangt af van prioriteiten: energie besparen of budget.',
    },
    {
      question: 'Hoeveel bespaar ik met Daikin vs LG op mijn energierekening?',
      answer:
        'Met Daikin (SCOP 5,15) betaalt u circa €0,045/kWh warmte. Met LG (SCOP 4,6) is dat €0,050/kWh. Bij 5.000 kWh warmte per jaar scheelt dat circa €25-30 per jaar. Daikin verdient zijn hogere prijs terug in 8-10 jaar door energiebesparing.',
    },
    {
      question: 'Welke airco is stiller, LG of Daikin?',
      answer:
        'Beide modellen presteren uitstekend op geluid: zowel de Daikin Stylish als de LG Artcool Mirror halen 19 dB in de stilste stand. Dat is vergelijkbaar met een fluistering. Beide zijn daardoor uitstekend geschikt voor slaapkamers.',
    },
    {
      question: 'Werkt LG Artcool met Apple HomeKit?',
      answer:
        'Nee, LG ThinQ ondersteunt Google Home en Amazon Alexa, maar niet Apple HomeKit. Daikin biedt via de Online Controller wel Apple HomeKit ondersteuning. Heeft u een Apple-ecosysteem, dan is Daikin de betere keuze.',
    },
    {
      question: 'Welke garantie geeft StayCool op LG en Daikin?',
      answer:
        'StayCool geeft op alle installaties 5 jaar installatiegarantie. Daikin en LG geven beide 10 jaar compressorgarantie en 5 jaar onderdelengarantie op de binnenenbuiten unit. U bent dus uitstekend gedekt bij beide merken.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>LG vs Daikin Airco Vergelijking 2025 | Welke is Beter? | StayCool</title>
        <meta
          name="description"
          content="LG Artcool of Daikin Stylish? Uitgebreide vergelijking op prijs, energie, geluid & garantie. Onafhankelijk advies van airco-specialist StayCool Limburg."
        />
        <link rel="canonical" href="https://staycoolairco.nl/lg-vs-daikin-airco" />
      </Helmet>

      <SchemaMarkup type="Service" data={schemaData} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Onafhankelijke vergelijking</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              LG vs Daikin Airco Vergelijking 2025
            </h1>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Beide zijn A-merken met uitstekende kwaliteit. Uw keuze hangt af van prioriteiten: maximale energiebesparing,
              budget, design of smart home integratie. Wij leggen alles eerlijk uit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0462021430"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-all"
              >
                <Phone className="h-5 w-5" />
                Gratis advies: 046 202 1430
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Trust bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <Star className="h-5 w-5 text-yellow-500" />, text: '4.9 ster (127 reviews)' },
            { icon: <Shield className="h-5 w-5 text-blue-600" />, text: 'F-gassen gecertificeerd' },
            { icon: <Award className="h-5 w-5 text-blue-600" />, text: 'STEK erkend' },
            { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: '5 jaar garantie' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100 flex items-center gap-3">
              {item.icon}
              <span className="text-sm font-semibold text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Quick choice kaders */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Snelle keuzehulp</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-700">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-blue-700" />
                <h3 className="text-xl font-bold text-gray-900">Kies Daikin Stylish als...</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Maximale energiebesparing uw prioriteit is (SCOP 5,15)',
                  'U allergieën heeft (Flash Streamer filtert allergenen)',
                  'U een Apple HomeKit ecosysteem heeft',
                  'Bewegingssensor voor comfort en besparing gewenst is',
                  'U het allerstilste model wilt',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-red-500">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-bold text-gray-900">Kies LG Artcool als...</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Budget bewustheid belangrijk is (lagere aanschafprijs)',
                  'U een strak, modern spiegeldesign wilt',
                  'Google Home of Alexa uw smart home platform is',
                  'Een goede prijs/kwaliteit verhouding voorop staat',
                  'U tevreden bent met SCOP 4,6 (nog steeds A++)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section className="mb-16">
          <ComparisonTable
            product1={comparisonData.product1}
            product2={comparisonData.product2}
            items={comparisonItems}
            title="Gedetailleerde vergelijking: LG vs Daikin"
          />
        </section>

        {/* Energie analyse */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Energieanalyse: wat betaalt u werkelijk?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Jaarlijkse verwarmingskosten (100m² woning)</h3>
                <div className="space-y-4">
                  {[
                    { model: 'Daikin Stylish (SCOP 5,15)', cost: '€ 224', color: 'bg-green-500' },
                    { model: 'LG Artcool (SCOP 4,6)', cost: '€ 250', color: 'bg-blue-500' },
                    { model: 'HR-ketel gas', cost: '€ 625', color: 'bg-red-400' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{item.model}</span>
                        <span className="font-bold text-gray-900">{item.cost}/jr</span>
                      </div>
                      <div className="bg-gray-100 rounded-full h-3">
                        <div
                          className={`${item.color} h-3 rounded-full`}
                          style={{ width: i === 0 ? '36%' : i === 1 ? '40%' : '100%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Geschat bij 5.000 kWh warmtevraag, stroom €0,23/kWh, gas €1,10/m³
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Conclusie van onze experts</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Daikin wint op energie-efficiëntie.</strong> Het verschil in SCOP (5,15 vs 4,6) betekent
                  circa €25-30 besparing per jaar op verwarmingskosten. Over de levensduur van 15 jaar is dat
                  €375-450 extra besparing met Daikin.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>LG wint op prijs en design.</strong> De lagere aanschafprijs compenseert het
                  efficiëntieverschil in de eerste jaren. Het spiegeldesign past in moderne interieurs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Beide merken installeren wij met volledige garantie. Twijfelt u? Bel ons — wij adviseren
                  u eerlijk op basis van uw situatie en woning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WiFi & Smart home */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart home en WiFi vergelijking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Wifi className="h-6 w-6 text-blue-700" />
                <h3 className="text-xl font-bold text-gray-900">Daikin Online Controller</h3>
              </div>
              <p className="text-gray-600 mb-4">
                De Daikin app biedt uitgebreide bediening, energiemonitoring en integratie met Google Home,
                Amazon Alexa en Apple HomeKit. Geofencing zorgt dat uw airco automatisch start als u thuis nadert.
              </p>
              <ul className="space-y-2">
                {['Google Home', 'Amazon Alexa', 'Apple HomeKit', 'Geofencing', 'Energiemonitoring'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Wifi className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-bold text-gray-900">LG ThinQ</h3>
              </div>
              <p className="text-gray-600 mb-4">
                LG ThinQ is een gebruiksvriendelijke app met volledige bediening, planning en integratie
                met populaire smart home platformen. Werkt goed samen met andere LG apparaten.
              </p>
              <ul className="space-y-2">
                {['Google Home', 'Amazon Alexa', 'LG ecosysteem', 'Energiemonitoring', 'Wekelijkse planning'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Interne links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer vergelijkingen en informatie</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { to: '/beste-airco-voor-verwarmen', title: 'Beste Airco voor Verwarmen', desc: 'SCOP vergelijking alle merken' },
              { to: '/beste-airco-merken', title: 'Beste Airco Merken 2025', desc: 'Alle 5 merken vergeleken' },
              { to: '/airco-installatie-limburg', title: 'Installatie Limburg', desc: 'Professionele montage in uw regio' },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-sky-300 hover:shadow-xl transition-all group"
              >
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-sky-700">{link.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{link.desc}</p>
                <span className="text-sky-600 font-medium text-sm inline-flex items-center gap-1">
                  Lees meer <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {activeFAQ === i ? (
                    <ChevronUp className="h-5 w-5 text-sky-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <SchemaMarkup
          type="FAQPage"
          data={{ questions: faqItems.map((f) => ({ question: f.question, answer: f.answer })) }}
        />
      </div>

      <ContactForm />
    </>
  );
};

export default LGVsDaikinAirco;
