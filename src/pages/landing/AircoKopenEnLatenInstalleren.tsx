import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Wrench, Calculator, CheckCircle, ArrowRight, Star, Shield, Zap, ThermometerSun, Wind, Phone, ChevronDown } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import FAQSchema from '../../components/SEO/FAQSchema';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: 'Wat kost een airco kopen en laten installeren?',
    answer: 'Een complete split airco inclusief installatie kost tussen €1.600 en €3.250 voor een enkele ruimte. Een multi-split systeem voor meerdere kamers kost €3.000 tot €5.550. Deze prijzen zijn inclusief apparatuur, standaard leidingwerk (tot 3 meter), montage, vacumeren, inbedrijfstelling en 5 jaar garantie.',
  },
  {
    question: 'Kan ik zelf een airco kopen en apart laten installeren?',
    answer: 'Technisch gezien kan dat, maar het is niet aan te raden. Als u een airco los koopt en apart laat installeren, vervalt vaak de fabrieksgarantie. Bovendien moet een F-gassen gecertificeerd installateur het systeem aansluiten — dat is wettelijk verplicht. Bij StayCool Airco krijgt u alles uit een hand: advies, levering en installatie met volledige garantie.',
  },
  {
    question: 'Welke airco is het beste voor een woonkamer?',
    answer: 'Voor een gemiddelde woonkamer van 30-40 m² raden wij een split airco aan met een vermogen van 3,5 kW. De Daikin Perfera en Mitsubishi Heavy SRK-ZSX zijn uitstekende keuzes voor woonkamers vanwege hun lage geluidsniveau (19-21 dB) en hoge energiezuinigheid (A+++). Voor een stijlvol design is de LG Artcool Gallery populair.',
  },
  {
    question: 'Is een airco ook geschikt om te verwarmen?',
    answer: 'Ja, alle moderne split airco\'s die wij leveren werken ook als warmtepomp. Ze zijn 3 tot 5 keer efficiënter dan elektrische verwarming. Met een SCOP-waarde van 4,5 tot 5,15 betaalt u slechts €0,20-€0,25 per kWh warmte. Ideaal als bijverwarming in voor- en najaar, en bij goed geïsoleerde woningen zelfs als hoofdverwarming.',
  },
  {
    question: 'Hoe snel kan een airco geïnstalleerd worden?',
    answer: 'Bij StayCool Airco plannen wij de installatie doorgaans binnen 5 werkdagen na akkoord op de offerte. De installatie zelf duurt gemiddeld 4 tot 6 uur voor een mono-split systeem. Na afloop kunt u de airco direct gebruiken. In het hoogseizoen (juni-augustus) kan de wachttijd oplopen, dus wij adviseren om tijdig te bestellen.',
  },
  {
    question: 'Wat is het verschil tussen een split en multi-split airco?',
    answer: 'Een split airco heeft één binnenunit en één buitenunit, geschikt voor het koelen/verwarmen van één ruimte. Een multi-split heeft één buitenunit met 2 tot 5 binnenunits, waarmee u meerdere kamers onafhankelijk kunt regelen. De multi-split is kostenefficiënter dan meerdere losse split systemen als u 2+ ruimtes wilt klimatiseren.',
  },
  {
    question: 'Welk merk airco heeft de beste prijs-kwaliteit verhouding?',
    answer: 'Tosot (onderdeel van Gree, \'s werelds grootste aircofabrikant) biedt de beste prijs-kwaliteitverhouding. Vanaf €1.600 inclusief installatie krijgt u een energiezuinig systeem met wifi-bediening en 5 jaar garantie. Voor wie het beste van het beste wil, raden wij Daikin of Mitsubishi Heavy aan — premium merken met SCOP-waarden tot 5,15.',
  },
  {
    question: 'Heb ik een vergunning nodig voor een airco?',
    answer: 'In de meeste gevallen is geen vergunning nodig voor een airco in Limburg. Wel gelden er regels voor de plaatsing van de buitenunit: in veel gemeenten mag deze niet aan de voorgevel. Bij monumentale panden of in beschermde stadsgezichten kunnen aanvullende regels gelden. Wij adviseren u hierover bij het vrijblijvende adviesgesprek.',
  },
];

const aircoTypes = [
  {
    type: 'Split airco',
    prijs: '€1.600 - €3.250',
    geschikt: '1 ruimte (tot 60 m²)',
    energielabel: 'A++ tot A+++',
    voordelen: ['Meest energiezuinig', 'Fluisterstil (19 dB)', 'Koelen en verwarmen', 'Wifi-bediening'],
    icon: Wind,
  },
  {
    type: 'Multi-split airco',
    prijs: '€3.000 - €5.550',
    geschikt: '2-5 ruimtes',
    energielabel: 'A++ tot A+++',
    voordelen: ['Eén buitenunit', 'Per ruimte regelbaar', 'Kostenefficiënt', 'Centrale bediening'],
    icon: ThermometerSun,
  },
  {
    type: 'Monoblock airco',
    prijs: '€1.300 - €2.150',
    geschikt: '1 ruimte (tot 35 m²)',
    energielabel: 'A+ tot A++',
    voordelen: ['Geen buitenunit', 'Eenvoudige installatie', 'Compact design', 'Geschikt voor huurwoningen'],
    icon: Zap,
  },
];

const merken = [
  { naam: 'Tosot', label: 'Beste prijs-kwaliteit', url: '/landing/tosot', kleur: 'bg-green-50 border-green-200', badge: 'bg-green-100 text-green-800', vanaf: '€1.600' },
  { naam: 'Daikin', label: 'Premium kwaliteit', url: '/landing/daikin', kleur: 'bg-blue-50 border-blue-200', badge: 'bg-blue-100 text-blue-800', vanaf: '€2.350' },
  { naam: 'LG', label: 'Stijlvol design', url: '/landing/lg', kleur: 'bg-red-50 border-red-200', badge: 'bg-red-100 text-red-800', vanaf: '€2.100' },
  { naam: 'Toshiba', label: 'Betrouwbaar & stil', url: '/landing/toshiba', kleur: 'bg-purple-50 border-purple-200', badge: 'bg-purple-100 text-purple-800', vanaf: '€1.850' },
  { naam: 'Mitsubishi Heavy', label: 'Krachtig vermogen', url: '/landing/mitsubishi-heavy', kleur: 'bg-orange-50 border-orange-200', badge: 'bg-orange-100 text-orange-800', vanaf: '€2.250' },
];

const stappen = [
  {
    nummer: 1,
    titel: 'Bepaal uw behoefte',
    icon: Calculator,
    beschrijving: 'Meet de ruimte op die u wilt koelen of verwarmen. Als vuistregel rekent u 100 watt per m² voor een standaard geïsoleerde ruimte. Een woonkamer van 35 m² heeft dus circa 3,5 kW nodig. Houd ook rekening met raamoppervlak, isolatie en de ligging (zuidgevel = meer warmtebelasting).',
    tip: 'Tip: Wij komen gratis bij u langs voor een exacte berekening.',
  },
  {
    nummer: 2,
    titel: 'Kies het type airco',
    icon: ShoppingCart,
    beschrijving: 'Voor één ruimte is een split airco de beste keuze: energiezuinig, stil en krachtig. Wilt u meerdere kamers koelen? Dan is een multi-split systeem voordeliger dan losse units. Overweeg ook of u de airco wilt gebruiken voor verwarming — alle split systemen kunnen dit.',
    tip: 'Lees meer over de verschillen op onze split airco pagina.',
  },
  {
    nummer: 3,
    titel: 'Selecteer het juiste merk',
    icon: Star,
    beschrijving: 'Elk merk heeft sterke punten. Tosot biedt uitstekende prijs-kwaliteit, Daikin scoort het best op energiebesparing (SCOP 5,15), en LG heeft het mooiste design. Let bij uw keuze op de SCOP-waarde (verwarmen, hoger = beter) en SEER-waarde (koelen).',
    tip: 'Onze installateurs adviseren u objectief op basis van uw situatie.',
  },
  {
    nummer: 4,
    titel: 'Laat een professional installeren',
    icon: Wrench,
    beschrijving: 'Een airco moet wettelijk geïnstalleerd worden door een F-gassen gecertificeerde monteur. Dit garandeert een veilige aansluiting, optimale werking en behoud van fabrieksgarantie. Bij StayCool Airco zijn alle monteurs gecertificeerd en verzekerd.',
    tip: 'Installatie duurt gemiddeld 4-6 uur. U kunt de airco direct gebruiken.',
  },
];

const checklistItems = [
  { label: 'Vermogen (kW)', uitleg: 'Reken 100W per m². Een ruimte van 25 m² heeft 2,5 kW nodig, 35 m² heeft 3,5 kW nodig.' },
  { label: 'Energielabel (SCOP/SEER)', uitleg: 'SCOP >4,6 en SEER >8,5 = A+++. Hogere waarden = lagere energiekosten.' },
  { label: 'Geluidsniveau', uitleg: 'Kies maximaal 25 dB voor slaapkamers. Woonkamers tot 35 dB is comfortabel.' },
  { label: 'Wifi-bediening', uitleg: 'Bedien de airco via uw smartphone. Handig om de woning voor te koelen voor thuiskomst.' },
  { label: 'Verwarmfunctie', uitleg: 'Alle split airco\'s verwarmen ook. Check de SCOP-waarde voor efficiëntie bij verwarmen.' },
  { label: 'F-gassen certificering installateur', uitleg: 'Wettelijk verplicht. Zonder certificering vervalt de garantie en riskeert u boetes.' },
];

export default function AircoKopenEnLatenInstalleren() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Airco Kopen en Laten Installeren', path: '/airco-kopen-en-laten-installeren' },
  ];

  return (
    <>
      <Helmet>
        <title>Airco Kopen en Laten Installeren | Prijzen 2026</title>
        <meta name="description" content="Airco kopen en laten installeren? Compleet vanaf €1.600. Vergelijk merken, prijzen en vind de beste airco voor uw situatie. Gratis advies!" />
        <link rel="canonical" href="https://staycoolairco.nl/airco-kopen-en-laten-installeren" />
        <meta property="og:title" content="Airco Kopen en Laten Installeren | Prijzen 2026" />
        <meta property="og:description" content="Airco kopen en laten installeren? Compleet vanaf €1.600. Vergelijk merken, prijzen en vind de beste airco voor uw situatie." />
        <meta property="og:url" content="https://staycoolairco.nl/airco-kopen-en-laten-installeren" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqItems} />

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Airco Kopen en Laten Installeren',
          description: 'Complete airconditioning service: advies, levering en vakkundige installatie door F-gassen gecertificeerde monteurs in Limburg.',
          url: 'https://staycoolairco.nl/airco-kopen-en-laten-installeren',
          serviceType: 'Airconditioning installatie',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '1600',
            highPrice: '5550',
            priceCurrency: 'EUR',
            offerCount: '5',
          },
        }}
        location={{ region: 'Limburg' }}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs items={breadcrumbItems} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mt-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Airco Kopen en Laten Installeren
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl">
                Alles-in-een: advies, levering en vakkundige installatie door gecertificeerde monteurs in Limburg.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-lg font-semibold">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Compleet vanaf €1.600
                </span>
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-lg font-semibold">
                  <Shield className="w-5 h-5 mr-2" />
                  5 jaar garantie
                </span>
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-lg font-semibold">
                  <Star className="w-5 h-5 mr-2" />
                  500+ installaties
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Gratis offerte aanvragen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  046 202 1430
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stap-voor-Stap Koopgids */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                In 4 Stappen de Juiste Airco Kopen
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Van behoeftebepaling tot installatie: onze stap-voor-stap koopgids helpt u de beste keuze te maken.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stappen.map((stap, index) => (
                <motion.div
                  key={stap.nummer}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                      {stap.nummer}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <stap.icon className="w-5 h-5 text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-900">{stap.titel}</h3>
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">{stap.beschrijving}</p>
                      <p className="text-sm text-blue-600 font-medium bg-blue-50 rounded-lg px-3 py-2">
                        {stap.tip}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vergelijking Typen Airco */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vergelijk Typen Airco met Prijzen
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Alle prijzen zijn inclusief apparatuur, standaard installatie en 5 jaar garantie.
                Op basis van onze ervaring met meer dan 500 installaties in Limburg.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aircoTypes.map((item, index) => (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${index === 0 ? 'border-blue-600 ring-2 ring-blue-100' : 'border-gray-100'} relative`}
                >
                  {index === 0 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Meest gekozen
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.type}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-1">{item.prijs}</p>
                    <p className="text-sm text-gray-500">incl. installatie</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                      <span className="text-gray-500">Geschikt voor</span>
                      <span className="font-medium text-gray-900">{item.geschikt}</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                      <span className="text-gray-500">Energielabel</span>
                      <span className="font-medium text-green-600">{item.energielabel}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.voordelen.map((voordeel) => (
                      <li key={voordeel} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {voordeel}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/kosten-airco-plaatsen"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                Bekijk uitgebreid kostenoverzicht
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Top Merken */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Airco Merken die Wij Installeren
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Wij werken uitsluitend met A-merken en zijn officieel dealer van alle onderstaande fabrikanten.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {merken.map((merk, index) => (
                <motion.div
                  key={merk.naam}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    to={merk.url}
                    className={`block rounded-2xl border-2 ${merk.kleur} p-6 hover:shadow-lg transition-all duration-300 h-full`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{merk.naam}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${merk.badge}`}>
                        {merk.label}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">Inclusief installatie vanaf</p>
                    <p className="text-2xl font-bold text-gray-900 mb-3">{merk.vanaf}</p>
                    <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                      Bekijk modellen
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Waar moet u op letten? */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Waar Moet U Op Letten bij het Kopen van een Airco?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Met meer dan 500 installaties in Limburg weten wij precies waar u op moet letten. Deze checklist helpt u de juiste keuze te maken.
                </p>
                <div className="space-y-4">
                  {checklistItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="bg-gray-50 rounded-xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-gray-900">{item.label}</h3>
                          <p className="text-sm text-gray-600 mt-1">{item.uitleg}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-600 rounded-2xl p-8 text-white sticky top-32"
              >
                <h3 className="text-2xl font-bold mb-4">Gratis Advies op Maat</h3>
                <p className="text-blue-100 mb-6">
                  Twijfelt u welke airco het beste bij uw situatie past? Onze specialisten komen gratis bij u langs voor een persoonlijk adviesgesprek met exacte berekening.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-blue-50">
                    <CheckCircle className="w-5 h-5 text-blue-200" />
                    Exacte vermogensberekening per ruimte
                  </li>
                  <li className="flex items-center gap-2 text-blue-50">
                    <CheckCircle className="w-5 h-5 text-blue-200" />
                    Objectief merkadvies zonder verkoopdruk
                  </li>
                  <li className="flex items-center gap-2 text-blue-50">
                    <CheckCircle className="w-5 h-5 text-blue-200" />
                    Vaste prijs zonder verborgen kosten
                  </li>
                  <li className="flex items-center gap-2 text-blue-50">
                    <CheckCircle className="w-5 h-5 text-blue-200" />
                    Offerte binnen 24 uur
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-white text-blue-700 font-bold py-4 px-6 rounded-xl text-lg hover:bg-blue-50 transition-colors"
                >
                  Gratis adviesgesprek plannen
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Waarom StayCool */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Kopen en Installeren bij StayCool?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Geen gedoe met losse leveranciers. Bij ons krijgt u advies, levering en installatie uit een hand.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ShoppingCart,
                  titel: 'Alles uit een hand',
                  beschrijving: 'Van advies tot en met installatie en nazorg. U heeft maar met een partij te maken.',
                },
                {
                  icon: Shield,
                  titel: 'Dubbele garantie',
                  beschrijving: 'Fabrieksgarantie op het apparaat plus 5 jaar StayCool installatiegarantie.',
                },
                {
                  icon: Calculator,
                  titel: 'Vaste all-in prijs',
                  beschrijving: 'De prijs die wij noemen is de prijs die u betaalt. Geen verborgen kosten achteraf.',
                },
                {
                  icon: Wrench,
                  titel: 'F-gassen gecertificeerd',
                  beschrijving: 'Al onze monteurs zijn F-gassen gecertificeerd. Wettelijk verplicht voor koudemiddel.',
                },
                {
                  icon: Zap,
                  titel: 'Installatie binnen 5 werkdagen',
                  beschrijving: 'Snel geregeld. Na akkoord op de offerte plannen wij de installatie binnen 5 werkdagen.',
                },
                {
                  icon: Star,
                  titel: '500+ tevreden klanten',
                  beschrijving: 'Met een gemiddelde beoordeling van 4,8 uit 5 sterren en meer dan 500 installaties in Limburg.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.titel}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.titel}</h3>
                  <p className="text-gray-600">{item.beschrijving}</p>
                </motion.div>
              ))}
            </div>

            {/* Internal links section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Meer informatie</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { label: 'Kosten airco plaatsen', url: '/kosten-airco-plaatsen' },
                  { label: 'Airco installatie', url: '/airco-installatie' },
                  { label: 'Airco onderhoud', url: '/airco-onderhoud' },
                  { label: 'Airco voor slaapkamer', url: '/airco-voor-slaapkamer' },
                  { label: 'Airco voor woonkamer', url: '/airco-voor-woonkamer' },
                  { label: 'Airco voor zolder', url: '/airco-voor-zolder' },
                  { label: 'Beste airco slaapkamer', url: '/advies/beste-airco-slaapkamer' },
                  { label: 'Split airco installatie', url: '/split-airco-installatie' },
                  { label: 'Multi-split airco', url: '/multi-split-airco-installatie' },
                ].map((link) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium py-2 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Veelgestelde Vragen over Airco Kopen
              </h2>
              <p className="text-lg text-gray-600">
                De meestgestelde vragen van onze klanten over het kopen en installeren van een airco.
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                        activeFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeFAQ === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Klaar om een Airco te Kopen?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Vraag vandaag nog een gratis offerte aan. Wij adviseren u over het beste merk en model voor uw situatie en zorgen voor een vakkundige installatie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-700 font-bold py-4 px-8 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Gratis offerte aanvragen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  046 202 1430
                </a>
              </div>
              <p className="mt-6 text-blue-200 text-sm">
                Gratis en vrijblijvend advies - Offerte binnen 24 uur - Installatie binnen 5 werkdagen
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
