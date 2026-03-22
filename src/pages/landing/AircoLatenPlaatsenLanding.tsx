import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Home,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  ThermometerSun,
  Zap,
  MapPin,
  ChevronRight,
  Award,
  Euro,
  Droplets,
  TrendingUp,
  HelpCircle,
  FileText,
  Users
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import FAQSchema from '../../components/SEO/FAQSchema';
import Breadcrumbs from '../../components/Breadcrumbs';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Wat kost een airco laten plaatsen?',
    answer: 'Een split airco laten plaatsen kost gemiddeld tussen €1.600 en €3.250 inclusief apparaat, materialen en installatie. De exacte prijs hangt af van het type airco, het vermogen, de lengte van het leidingwerk en de complexiteit van de installatie. Een multi-split systeem voor meerdere kamers kost tussen €3.000 en €5.550. Bij StayCool Airco ontvangt u altijd een vrijblijvende offerte op maat.'
  },
  {
    question: 'Hoe lang duurt het plaatsen van een airco?',
    answer: 'De installatie van een single-split airco duurt gemiddeld 4 tot 6 uur. Bij een multi-split systeem met meerdere binnenunits kan de installatie 1 tot 2 dagen duren. Na uw akkoord op de offerte plannen wij de installatie doorgaans binnen 5 werkdagen in. In de zomerperiode kan dit iets langer zijn door de hogere vraag.'
  },
  {
    question: 'Moet ik een vergunning aanvragen voor een airco?',
    answer: 'In de meeste gevallen is geen vergunning nodig voor het plaatsen van een airco bij een woning. De buitenunit moet wel voldoen aan geluidsnormen (maximaal 40 dB op de erfgrens). Bij monumentale panden of in sommige VvE-situaties kan wel toestemming nodig zijn. Onze monteurs adviseren u hierover tijdens het adviesgesprek.'
  },
  {
    question: 'Kan een airco ook verwarmen?',
    answer: 'Ja, moderne split airco\'s zijn warmtepompen die zowel koelen als verwarmen. Ze halen warmte uit de buitenlucht en brengen deze naar binnen. Dit is tot 4x efficiënter dan een elektrische kachel. Veel van onze klanten in Limburg gebruiken hun airco als aanvulling op de cv-ketel, wat flinke gasbesparingen oplevert.'
  },
  {
    question: 'Hoe kies ik de juiste plek voor de buitenunit?',
    answer: 'De buitenunit moet op een stevige, vlakke ondergrond staan of aan een muur bevestigd worden. Ideaal is een schaduwrijke plek met voldoende luchtcirculatie (minimaal 30 cm rondom). Vermijd plekken direct naast slaapkamerramen van buren. Onze monteurs bepalen tijdens de inspectie de optimale locatie, rekening houdend met geluid, leidinglengte en esthetiek.'
  },
  {
    question: 'Waarom moet de installateur F-gassen gecertificeerd zijn?',
    answer: 'Airco\'s bevatten koudemiddelen (F-gassen) die schadelijk zijn voor het milieu. Volgens Europese wetgeving mag alleen een F-gassen gecertificeerd bedrijf deze gassen verwerken. Zonder certificering vervalt bovendien uw fabrieksgarantie. Alle monteurs van StayCool Airco zijn F-gassen gecertificeerd, wat betekent dat uw installatie vakkundig en volgens de wettelijke normen wordt uitgevoerd.'
  }
];

const howToSteps = [
  {
    name: 'Gratis adviesgesprek & inspectie',
    text: 'Wij komen bij u langs om de situatie te beoordelen. We meten de ruimte op, bespreken uw wensen en adviseren over het juiste type en vermogen airco.'
  },
  {
    name: 'Offerte op maat',
    text: 'U ontvangt een transparante offerte met een vaste prijs, inclusief apparaat, alle materialen, installatie en btw. Geen verborgen kosten.'
  },
  {
    name: 'Professionele installatie',
    text: 'Onze F-gassen gecertificeerde monteurs installeren uw airco, inclusief buitenunit, leidingwerk, condensafvoer en elektrische aansluiting. Gemiddelde installatietijd: 4-6 uur.'
  },
  {
    name: 'Oplevering, uitleg en nazorg',
    text: 'Na installatie testen we het systeem, geven we uitleg over de bediening en afstandsbediening, en overhandigen we de garantiedocumenten. U kunt direct genieten van uw nieuwe airco.'
  }
];

export default function AircoLatenPlaatsenLanding() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Airco Laten Plaatsen', path: '/airco-laten-plaatsen' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Laten Plaatsen? Vanaf €1.600 | Gratis Offerte</title>
        <meta
          name="description"
          content="Airco laten plaatsen door F-gassen gecertificeerde monteurs. Incl. materiaal en montage vanaf €1.600. 5 jaar garantie. Binnen 5 werkdagen geïnstalleerd!"
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-laten-plaatsen" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'name': 'Airco laten plaatsen - Het installatieproces',
            'description': 'Stap-voor-stap uitleg over hoe wij een airco plaatsen bij u thuis of op kantoor.',
            'totalTime': 'PT6H',
            'estimatedCost': {
              '@type': 'MonetaryAmount',
              'currency': 'EUR',
              'value': '1600'
            },
            'step': howToSteps.map((step, i) => ({
              '@type': 'HowToStep',
              'position': i + 1,
              'name': step.name,
              'text': step.text
            }))
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />

      <SchemaMarkup
        type="Service"
        data={{
          '@type': 'Service',
          'name': 'Airco Laten Plaatsen',
          'serviceType': 'Airconditioning Installatie',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'StayCool Airco',
            'telephone': '+31462021430',
            'address': {
              '@type': 'PostalAddress',
              'addressRegion': 'Limburg',
              'addressCountry': 'NL'
            }
          },
          'description': 'Professionele airco installatie door F-gassen gecertificeerde monteurs in Limburg. Inclusief materialen, montage en 5 jaar garantie.',
          'areaServed': {
            '@type': 'State',
            'name': 'Limburg'
          },
          'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'EUR',
            'lowPrice': '1600',
            'highPrice': '5550',
            'offerCount': '6'
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '127'
          }
        }}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Airco Laten Plaatsen door Erkende Monteurs
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Geniet van een perfect klimaat in huis met een professioneel geplaatste airco.
              Van advies tot installatie en nazorg — wij regelen het compleet.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-sm sm:text-base">
              <span className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-200" />
                F-Gassen Gecertificeerd
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5 text-blue-200" />
                5 Jaar Garantie
              </span>
              <span className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-blue-200" />
                Vanaf €1.600
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-lg"
              >
                Gratis Offerte Aanvragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Bel 046 202 1430
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waarom een Airco Laten Plaatsen? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Waarom een Airco Laten Plaatsen?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Een airco is meer dan alleen koeling. Moderne aircosystemen bieden jaarrond comfort
              en helpen u energie te besparen.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ThermometerSun,
                title: 'Koelen én Verwarmen',
                description: 'Een moderne airco werkt als warmtepomp: aangenaam koel in de zomer en efficiënt verwarmen in het tussenseizoen. Tot 4x zuiniger dan elektrisch verwarmen.'
              },
              {
                icon: Zap,
                title: 'Energiezuinig (A+++)',
                description: 'De nieuwste airco\'s hebben een A+++ energielabel. Met een SCOP tot 5.1 bespaart u flink op energiekosten vergeleken met traditionele verwarming.'
              },
              {
                icon: TrendingUp,
                title: 'Verhoogt Woningwaarde',
                description: 'Een vast geïnstalleerde airco verhoogt de waarde van uw woning. Kopers in Limburg waarderen klimaatbeheersing steeds meer, zeker na de warme zomers.'
              },
              {
                icon: Droplets,
                title: 'Gezondere Luchtkwaliteit',
                description: 'Airco\'s filteren pollen, stof en allergenen uit de lucht. Het vochtregulerende effect voorkomt schimmel en zorgt voor een gezonder binnenklimaat.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-xl mb-4">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat Kost een Airco Laten Plaatsen? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Wat Kost een Airco Laten Plaatsen?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparante prijzen inclusief apparaat, materialen en volledige installatie.
              Geen verborgen kosten — u weet altijd vooraf waar u aan toe bent.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left py-4 px-6 font-semibold">Type Airco</th>
                    <th className="text-left py-4 px-6 font-semibold">Prijsindicatie</th>
                    <th className="text-left py-4 px-6 font-semibold hidden sm:table-cell">Inclusief</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-semibold text-gray-900">Split airco</span>
                      <span className="block text-sm text-gray-500">Meest gekozen</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-blue-600">€1.600 - €3.250</td>
                    <td className="py-4 px-6 text-sm text-gray-600 hidden sm:table-cell">Apparaat + installatie + materiaal</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-semibold text-gray-900">Multi-split</span>
                      <span className="block text-sm text-gray-500">Meerdere kamers</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-blue-600">€3.000 - €5.550</td>
                    <td className="py-4 px-6 text-sm text-gray-600 hidden sm:table-cell">Apparaat + installatie + materiaal</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-semibold text-gray-900">Monoblock</span>
                      <span className="block text-sm text-gray-500">Zonder buitenunit</span>
                    </td>
                    <td className="py-4 px-6 font-bold text-blue-600">€1.300 - €2.150</td>
                    <td className="py-4 px-6 text-sm text-gray-600 hidden sm:table-cell">Apparaat + installatie + materiaal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Wilt u een gedetailleerd prijsoverzicht met alle kostenfactoren?
              </p>
              <Link
                to="/kosten-airco-plaatsen"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Bekijk onze uitgebreide kostenpagina
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ons Installatieproces */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Ons Installatieproces
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Van het eerste adviesgesprek tot de oplevering — bij StayCool Airco weet u precies wat u kunt verwachten.
              Onze monteurs hebben jarenlange ervaring met het vakkundig plaatsen van aircosystemen.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                </div>
                {index < howToSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 z-10">
                    <ChevronRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Wat houdt professionele plaatsing in?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Onze installatie omvat het bevestigen van de binnenunit, het plaatsen van de buitenunit op een
                  trillingsdempende beugel, het aanleggen van het koelleidingwerk (koper), de condensafvoer,
                  de elektrische aansluiting en de netjes afgewerkte wanddoorvoer. Alles wordt strak weggewerkt
                  met kabelgoten of ingebouwd waar mogelijk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waar Plaatsen Wij Airco's? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Waar Plaatsen Wij Airco's?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Elke ruimte stelt andere eisen aan de airco. Of het nu gaat om uw woonkamer, slaapkamer,
              zolder of kantoor — wij adviseren het juiste systeem voor optimaal comfort.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: 'Woonkamer',
                capacity: '2.5 - 5.0 kW',
                description: 'De centrale ruimte in huis. Wij adviseren een stille unit met voldoende vermogen voor optimaal comfort.',
                link: '/airco-voor-woonkamer'
              },
              {
                icon: Star,
                title: 'Slaapkamer',
                capacity: '2.0 - 3.5 kW',
                description: 'Beter slapen met een fluisterstille airco (vanaf 19 dB). Perfecte temperatuur de hele nacht.',
                link: '/airco-voor-slaapkamer'
              },
              {
                icon: ThermometerSun,
                title: 'Zolder',
                capacity: '3.5 - 5.0 kW',
                description: 'Zolders worden snel onaangenaam warm. Een airco maakt uw zolder het hele jaar bruikbaar.',
                link: '/airco-voor-zolder'
              },
              {
                icon: Users,
                title: 'Kantoor',
                capacity: '2.5 - 7.0 kW',
                description: 'Een aangenaam werkklimaat verhoogt de productiviteit. Stille units die niet storen tijdens vergaderingen.',
                link: '/airco-kantoor'
              }
            ].map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={room.link}
                  className="block bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow border border-gray-100 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <room.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{room.title}</h3>
                  <p className="text-sm text-blue-600 font-semibold mb-2">Aanbevolen: {room.capacity}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{room.description}</p>
                  <span className="inline-flex items-center mt-3 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Meer info <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied Limburg */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Werkgebied: Airco Laten Plaatsen in Limburg
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              StayCool Airco is al jarenlang actief in heel Limburg. Onze monteurs kennen de regio
              en staan snel bij u op de stoep voor advies of installatie.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { city: 'Roermond', slug: 'roermond' },
              { city: 'Maastricht', slug: 'maastricht' },
              { city: 'Heerlen', slug: 'heerlen' },
              { city: 'Venlo', slug: 'venlo' },
              { city: 'Sittard', slug: 'sittard' },
              { city: 'Weert', slug: 'weert' }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={`/airco-installatie/${location.slug}`}
                  className="flex items-center justify-center gap-2 bg-white rounded-xl shadow p-4 hover:shadow-lg hover:bg-blue-50 transition-all text-gray-900 font-semibold group"
                >
                  <MapPin className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
                  {location.city}
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-500 text-sm">
            Ook actief in Echt, Geleen, Kerkrade, Brunssum, Landgraaf, Stein en omstreken.{' '}
            <Link to="/contact" className="text-blue-600 hover:underline">
              Neem contact op
            </Link>{' '}
            voor beschikbaarheid in uw regio.
          </p>
        </div>
      </section>

      {/* Veelgestelde Vragen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Veelgestelde Vragen over Airco Laten Plaatsen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              De meestgestelde vragen van onze klanten over het plaatsen van een airco.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronRight
                    className={`h-5 w-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                      activeFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Klaar om Uw Airco te Laten Plaatsen?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Vraag vandaag nog een vrijblijvende offerte aan. Onze adviseurs helpen u graag
              met het kiezen van de juiste airco voor uw situatie. Installatie mogelijk binnen 5 werkdagen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-lg"
              >
                Vraag Gratis Offerte Aan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                046 202 1430
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Gratis adviesgesprek
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Vaste prijs, geen verrassingen
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Binnen 5 werkdagen geïnstalleerd
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Pages / Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Meer Informatie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/airco-installatie"
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow"
            >
              <Wrench className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-900 font-medium">Airco Installatie Service</span>
            </Link>
            <Link
              to="/airco-onderhoud"
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow"
            >
              <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-900 font-medium">Airco Onderhoud</span>
            </Link>
            <Link
              to="/kosten-airco-plaatsen"
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow"
            >
              <Euro className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-900 font-medium">Kosten Airco Plaatsen</span>
            </Link>
            <Link
              to="/kennisbank/airco-buitenunit-plaatsing"
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow hover:shadow-md transition-shadow"
            >
              <FileText className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-900 font-medium">Buitenunit Plaatsing Gids</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
