import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle,
  Shield,
  Award,
  ChevronDown,
  ArrowRight,
  Zap,
  Euro,
  ThermometerSun,
  Wind,
  Leaf,
  Clock,
  Wrench,
  Star,
  BadgeCheck,
  Home,
  Building2,
  Smartphone,
  Snowflake,
  Sun,
  Heart,
  Volume2
} from 'lucide-react';
import { motion } from 'framer-motion';
import SchemaMarkup from '../../components/SchemaMarkup';
import FAQSchema from '../../components/SEO/FAQSchema';
import Breadcrumbs from '../../components/Breadcrumbs';

const faqItems = [
  {
    question: 'Wat kost een airconditioning inclusief installatie?',
    answer: 'Een complete airconditioning inclusief professionele installatie kost tussen €1.500 en €4.500, afhankelijk van het type systeem en merk. Een single-split airco begint vanaf €1.500 (budget) tot €3.000 (premium). Een multi-split systeem voor meerdere ruimtes kost €3.500 tot €7.000+. Bij StayCool Airco zijn alle kosten inbegrepen: het apparaat, leidingwerk, montage, inbedrijfstelling en garantie. Bekijk onze uitgebreide kostenpagina voor een gedetailleerd overzicht.'
  },
  {
    question: 'Kan een airconditioning ook verwarmen?',
    answer: 'Ja, vrijwel alle moderne airconditioningsystemen werken als warmtepomp en kunnen zowel koelen als verwarmen. In verwarmingsmodus is een airco 3 tot 5 keer efficiënter dan een elektrische kachel, omdat het warmte verplaatst in plaats van opwekt. Met een SCOP van 4,0 of hoger levert elke kilowatt stroom 4 kilowatt warmte op. Dit maakt een airconditioning een uitstekende en voordelige aanvulling op uw cv-ketel, vooral in de tussenseizoenen.'
  },
  {
    question: 'Hoe lang duurt de installatie van een airconditioning?',
    answer: 'Een standaard single-split airco installatie duurt 4 tot 6 uur. Dit omvat het plaatsen van de binnen- en buitenunit, het boren van een muurdoorvoer, het aanleggen van koelleidingen, vacumeren en inbedrijfstelling. Een multi-split systeem met 2 of 3 binnenunits neemt doorgaans een volledige werkdag (6-8 uur) in beslag. Na de installatie kunt u het systeem direct gebruiken.'
  },
  {
    question: 'Hoeveel stroom verbruikt een airconditioning?',
    answer: 'Een moderne inverter airconditioning met energielabel A+++ verbruikt gemiddeld 0,5 tot 1,5 kWh per uur, afhankelijk van de capaciteit en de gewenste temperatuur. Bij gemiddeld gebruik in de zomer (6 uur per dag, 90 dagen) komt dat neer op circa €100 tot €200 per seizoen aan stroomkosten. Ter vergelijking: een mobiele airco verbruikt 2 tot 3 keer zoveel energie voor hetzelfde koelresultaat.'
  },
  {
    question: 'Hoe vaak moet een airconditioning onderhouden worden?',
    answer: 'Een airconditioning moet minimaal één keer per jaar professioneel onderhouden worden, bij voorkeur in het voorjaar voordat het koelseizoen begint. Dit onderhoud omvat het reinigen van filters en lamellen, controle van het koudemiddel, inspectie van elektrische verbindingen en het testen van alle functies. Daarnaast is het verstandig om de filters elke 2 tot 4 weken zelf te reinigen. Regelmatig onderhoud verlengt de levensduur met jaren en houdt het energieverbruik laag.'
  },
  {
    question: 'Welk merk airconditioning is het beste?',
    answer: 'De beste airco merken die wij installeren zijn Daikin (beste energieprestaties, SCOP 5,15), Mitsubishi Heavy Industries (meest betrouwbaar, 15-20 jaar levensduur), LG (beste prijs-kwaliteitverhouding), Toshiba (innovatief design met de Haori-serie) en Tosot (beste budgetoptie). Elk merk heeft sterke punten: Daikin scoort het beste op energiezuinigheid, Mitsubishi Heavy op betrouwbaarheid en LG op prijs-kwaliteit. Wij adviseren u graag welk merk het beste past bij uw situatie en budget.'
  }
];

export default function AirconditioningPillar() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Airconditioning: Complete Gids Kopen & Installeren [2026]</title>
        <meta
          name="description"
          content="Alles over airconditioning: typen, kosten, installatie en onderhoud. Gecertificeerde installatie in Limburg met 5 jaar garantie. Vraag gratis offerte aan."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airconditioning" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <FAQSchema faqs={faqItems} />

      <SchemaMarkup
        type="Service"
        data={{
          name: 'Airconditioning Installatie Limburg',
          serviceType: 'Airconditioning Verkoop & Installatie',
          description: 'Complete airconditioning service: advies, verkoop, installatie en onderhoud door F-gassen gecertificeerde monteurs in Limburg. Merken: Daikin, Mitsubishi Heavy, LG, Toshiba, Tosot.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'StayCool Airco',
            telephone: '+31462021430',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'Limburg',
              addressCountry: 'NL'
            }
          },
          areaServed: {
            '@type': 'State',
            name: 'Limburg'
          },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            lowPrice: '1500',
            highPrice: '7000',
            offerCount: '5',
            availability: 'https://schema.org/InStock'
          }
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'Hoe wordt een airconditioning geïnstalleerd?',
            description: 'Stapsgewijs overzicht van het installatieproces van een airconditioning door StayCool Airco.',
            totalTime: 'PT6H',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'EUR',
              value: '1500-3000'
            },
            step: [
              { '@type': 'HowToStep', position: 1, name: 'Gratis Inspectie & Advies', text: 'Een monteur bezoekt uw woning voor een gratis inspectie. We bepalen de juiste capaciteit, de optimale plaatsing van binnen- en buitenunit en bespreken uw wensen.' },
              { '@type': 'HowToStep', position: 2, name: 'Offerte & Planning', text: 'U ontvangt een transparante offerte met alle kosten. Na akkoord plannen we de installatie in, meestal binnen 1 tot 2 weken.' },
              { '@type': 'HowToStep', position: 3, name: 'Buitenunit Monteren', text: 'De buitenunit wordt op een stevige beugel aan de gevel, in de tuin of op het balkon gemonteerd. Stabiel, veilig en met ruimte voor ventilatie.' },
              { '@type': 'HowToStep', position: 4, name: 'Leidingwerk & Muurdoorvoer', text: 'Een netjes afgewerkt gat wordt door de muur geboord voor koelleidingen, condensafvoer en elektrische bekabeling.' },
              { '@type': 'HowToStep', position: 5, name: 'Binnenunit Plaatsen', text: 'De binnenunit wordt op wandhoogte gemonteerd. Waterpas, stevig en op de optimale positie voor gelijkmatige luchtverspreiding.' },
              { '@type': 'HowToStep', position: 6, name: 'Vacumeren, Testen & Oplevering', text: 'Het systeem wordt gevacumeerd, op druk getest en in bedrijf gesteld. U krijgt uitleg over de bediening en onderhoudstips.' }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Airconditioning' }
            ]}
          />
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Airconditioning: Alles over Kopen, Installeren & Onderhoud
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              De complete gids over airconditioning in 2026. Ontdek welk type het beste bij uw situatie past, wat het kost, hoe de installatie werkt en waarom een professioneel geïnstalleerde airco de slimste investering is voor comfort in huis. Al meer dan 1.000 tevreden klanten in Limburg.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/airco-offerte"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-200 shadow-lg"
              >
                Gratis Offerte Aanvragen
              </Link>
              <a
                href="tel:0462021430"
                className="bg-white text-blue-800 font-bold py-4 px-8 rounded-xl text-center hover:bg-blue-50 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Bel Nu: 046 202 1430
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wat is Airconditioning? */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wat is Airconditioning?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-base md:text-lg text-gray-600 mb-4">
                  Airconditioning is een systeem dat de temperatuur, luchtvochtigheid en luchtkwaliteit in een ruimte regelt. Moderne airconditioningsystemen doen veel meer dan alleen koelen: ze <strong>verwarmen, ontvochten en zuiveren de lucht</strong>. Dit maakt een airconditioning het hele jaar door waardevol — van tropische zomerdagen tot koude winteravonden.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-4">
                  Het werkingsprincipe is gebaseerd op het <strong>koelmiddelcircuit</strong>: een compressor in de buitenunit comprimeert koudemiddel (tegenwoordig het milieuvriendelijke R-32), waardoor warmte wordt verplaatst van binnen naar buiten (koelen) of van buiten naar binnen (verwarmen). Dit proces is 3 tot 5 keer efficiënter dan elektrische verwarming.
                </p>
                <p className="text-base md:text-lg text-gray-600">
                  In Nederland is een airconditioning steeds populairder geworden. Volgens het <a href="https://www.milieucentraal.nl/energie-besparen/je-huis-koelen/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Milieu Centraal</a> overweegt een groeiend aantal huishoudens een airco vanwege de steeds warmere zomers. De <a href="https://www.rijksoverheid.nl/onderwerpen/duurzame-energie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Rijksoverheid</a> stimuleert bovendien het gebruik van warmtepompen — en een moderne airco is precies dat.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Typen Airconditioningsystemen</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Home className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Split Airco (Mono-split)</h4>
                        <p className="text-sm text-gray-600 mt-1">Eén binnenunit + één buitenunit. De meest gekozen oplossing voor één ruimte. Stil, efficiënt en betaalbaar vanaf €1.500 all-in.</p>
                        <Link to="/split-airco-installatie" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1 mt-2">
                          Meer over split airco <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Multi-split Airco</h4>
                        <p className="text-sm text-gray-600 mt-1">Eén buitenunit + 2 tot 5 binnenunits. Ideaal voor meerdere kamers of een heel huis. Elke ruimte apart regelbaar.</p>
                        <Link to="/multi-split-airco-installatie" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1 mt-2">
                          Meer over multi-split <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Snowflake className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Monoblock Airco</h4>
                        <p className="text-sm text-gray-600 mt-1">Alles in één unit, geen buitenunit nodig. Geschikt als een buitenunit niet mogelijk is, maar minder efficiënt en luider.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <Smartphone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Mobiele Airco</h4>
                        <p className="text-sm text-gray-600 mt-1">Verplaatsbaar op wielen met afvoerslang. Geen installatie nodig, maar aanzienlijk minder efficiënt en luidruchtig.</p>
                        <Link to="/mobiele-airco" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1 mt-2">
                          Mobiel vs. vast vergelijken <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voordelen van Airconditioning */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Voordelen van Airconditioning
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Een moderne airconditioning biedt veel meer dan alleen verkoeling. Ontdek de voordelen die een airco tot een slimme investering maken.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Snowflake,
                title: 'Efficiënt Koelen',
                description: 'Koel uw woning snel en gelijkmatig af. Een split airco bereikt de gewenste temperatuur in 10-15 minuten, ook bij extreme hitte van 35°C+.'
              },
              {
                icon: Sun,
                title: 'Verwarmen als Warmtepomp',
                description: 'Verwarm uw huis tot 3x voordeliger dan met gas. Moderne airco\'s werken als volwaardige warmtepomp en besparen honderden euro\'s per jaar.'
              },
              {
                icon: Wind,
                title: 'Betere Luchtkwaliteit',
                description: 'Ingebouwde filters verwijderen stof, pollen en allergenen. Sommige modellen hebben zelfs plasma- of UV-reiniging voor extra schone lucht.'
              },
              {
                icon: Leaf,
                title: 'Energiezuinig (A+++)',
                description: 'Met een SEER tot 9,5 en SCOP tot 5,15 zijn moderne airconditioningsystemen uiterst zuinig. Het milieuvriendelijke koudemiddel R-32 heeft een laag GWP.'
              },
              {
                icon: Volume2,
                title: 'Fluisterstil',
                description: 'Moderne binnenunits produceren slechts 19-25 dB(A) — stiller dan een fluistering. Ideaal voor slaapkamers en werkruimtes.'
              },
              {
                icon: Heart,
                title: 'Gezonder Wonen',
                description: 'Een stabiele temperatuur en lagere luchtvochtigheid verminderen de kans op slaapproblemen, hoofdpijn en concentratieverlies bij hitte.'
              },
              {
                icon: Zap,
                title: 'Waardevermeerdering Woning',
                description: 'Een professioneel geïnstalleerde airconditioning verhoogt de waarde van uw woning. Kopers waarderen klimaatcomfort steeds meer.'
              },
              {
                icon: Smartphone,
                title: 'Smart Bediening',
                description: 'Bedien uw airco via WiFi met uw smartphone, Google Home of Amazon Alexa. Stel schema\'s in en bespaar energie met slimme automatisering.'
              }
            ].map((voordeel, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <voordeel.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{voordeel.title}</h3>
                <p className="text-base text-gray-600">{voordeel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kosten Overzicht */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Wat Kost een Airconditioning?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Een overzicht van de kosten per type systeem, inclusief professionele installatie. Alle prijzen zijn inclusief BTW, materialen en inbedrijfstelling.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                type: 'Mobiele Airco',
                prijsrange: '€250 – €800',
                installatie: 'Geen',
                energielabel: 'A tot A+',
                levensduur: '3-5 jaar',
                geschikt: 'Tijdelijke oplossing',
                popular: false
              },
              {
                type: 'Split Airco',
                prijsrange: '€1.500 – €3.000',
                installatie: 'Inbegrepen',
                energielabel: 'A++ tot A+++',
                levensduur: '12-20 jaar',
                geschikt: 'Eén ruimte',
                popular: true
              },
              {
                type: 'Multi-split (2 units)',
                prijsrange: '€3.500 – €5.500',
                installatie: 'Inbegrepen',
                energielabel: 'A++ tot A+++',
                levensduur: '12-20 jaar',
                geschikt: '2 ruimtes',
                popular: false
              },
              {
                type: 'Multi-split (3-5 units)',
                prijsrange: '€5.000 – €9.000',
                installatie: 'Inbegrepen',
                energielabel: 'A++ tot A+++',
                levensduur: '12-20 jaar',
                geschikt: 'Heel huis',
                popular: false
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${item.popular ? 'border-blue-600 relative' : 'border-gray-100'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Meest Gekozen
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.type}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{item.prijsrange}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Installatie: {item.installatie}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Energielabel: {item.energielabel}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Levensduur: {item.levensduur}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    Geschikt voor: {item.geschikt}
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/kosten-airco-plaatsen"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              Bekijk uitgebreid kostenoverzicht <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Het Installatieproces */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Het Installatieproces: Van Advies tot Oplevering
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Bij StayCool Airco doorloopt u een helder en transparant traject. Zo weet u precies wat u kunt verwachten.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                icon: Phone,
                title: 'Gratis Inspectie & Advies',
                description: 'Een ervaren monteur bezoekt uw woning voor een vrijblijvende inspectie. We bepalen de juiste capaciteit (kW), de optimale plaatsing en bespreken uw wensen en budget.'
              },
              {
                step: 2,
                icon: Euro,
                title: 'Transparante Offerte',
                description: 'U ontvangt een complete offerte met alle kosten: apparaat, materialen, montage en garantie. Geen verborgen kosten of verrassingen achteraf. Altijd een vaste prijs.'
              },
              {
                step: 3,
                icon: Wrench,
                title: 'Professionele Installatie',
                description: 'Onze F-gassen gecertificeerde monteurs installeren uw airconditioning vakkundig. Standaard installatie duurt 4-6 uur voor een single-split systeem.'
              },
              {
                step: 4,
                icon: Shield,
                title: 'Vacumeren & Druktesten',
                description: 'Het leidingsysteem wordt gevacumeerd om vocht en lucht te verwijderen. Een druktest garandeert dat alle verbindingen 100% lekvrij zijn.'
              },
              {
                step: 5,
                icon: Zap,
                title: 'Inbedrijfstelling & Test',
                description: 'We starten uw airconditioning op en testen alle functies: koelen, verwarmen, ontvochten en automatische modus. Alles wordt gecontroleerd op correcte werking.'
              },
              {
                step: 6,
                icon: BadgeCheck,
                title: 'Uitleg & Garantie',
                description: 'U krijgt uitgebreide uitleg over de bediening, WiFi-koppeling en onderhoudstips. Uw 5 jaar garantie gaat direct in. Wij staan altijd voor u klaar.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -top-4 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <item.icon className="h-8 w-8 text-blue-600 mb-4 mt-2" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/airco-installatie"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              Meer over ons installatieproces <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom StayCool Airco - E-E-A-T Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Waarom StayCool Airco voor Uw Airconditioning?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Al sinds 2019 de vertrouwde airconditioning specialist in Limburg. Met meer dan 1.000 installaties, gecertificeerde monteurs en 5 jaar garantie bent u bij ons in goede handen.
            </p>
          </motion.div>

          {/* Onze Ervaring */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-12 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="h-7 w-7 text-blue-600" />
              Onze Ervaring
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-base text-gray-700 mb-4">
                  StayCool Airco is sinds <strong>2019 actief</strong> als airconditioning specialist in Limburg. In die jaren hebben wij <strong>meer dan 1.000 airconditioningsystemen</strong> geïnstalleerd bij particulieren, bedrijven en winkels in de regio. Van appartementen in Maastricht tot villa's in Valkenburg — wij kennen elke situatie.
                </p>
                <p className="text-base text-gray-700 mb-4">
                  Onze monteurs hebben samen meer dan <strong>15 jaar vakervaring</strong> in de HVAC-branche. Elk project wordt met dezelfde zorgvuldigheid en vakmanschap uitgevoerd, of het nu gaat om een enkele split airco voor een slaapkamer of een multi-split systeem voor een heel kantoorpand.
                </p>
                <p className="text-base text-gray-700">
                  Recent hebben wij onder andere een <strong>5-unit multi-split systeem geïnstalleerd in een tandartspraktijk in Heerlen</strong>, een <strong>complete klimaatoplossing voor een restaurant in Maastricht</strong> en tientallen woningen voorzien van energiezuinige A+++ airconditioning in het kader van verduurzaming.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1.000+', label: 'Installaties' },
                  { value: 'Sinds 2019', label: 'Actief in Limburg' },
                  { value: '4.8/5', label: 'Klantbeoordeling' },
                  { value: '15+ jaar', label: 'Vakervaring' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md">
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expertise & Certificeringen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <BadgeCheck className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">F-gassen Gecertificeerd</h3>
              <p className="text-base text-gray-600">
                Al onze monteurs zijn <strong>F-gassen gecertificeerd</strong> conform de Europese F-gassenverordening (EU 517/2014). Dit is wettelijk verplicht voor het werken met koudemiddelen en garandeert vakkundige en veilige installaties.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">5 Jaar Installatiegarantie</h3>
              <p className="text-base text-gray-600">
                Op elke installatie geven wij <strong>5 jaar volledige garantie</strong>. Dit dekt zowel het installatiewerk als de gebruikte materialen. Daarbovenop geldt de fabrieksgarantie van het gekozen merk (2 tot 10 jaar op de compressor).
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Award className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Officieel Merkpartner</h3>
              <p className="text-base text-gray-600">
                Wij zijn officieel partner van <strong>Daikin, Mitsubishi Heavy Industries, LG, Toshiba en Tosot (Gree)</strong>. Dit betekent directe toegang tot de nieuwste modellen, onderdelen en technische support.
              </p>
            </motion.div>
          </div>

          {/* Merken */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Merken die Wij Installeren</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: 'Daikin', path: '/daikin', badge: 'Premium' },
                { name: 'Mitsubishi Heavy', path: '/mitsubishi-heavy', badge: 'Betrouwbaar' },
                { name: 'LG', path: '/lg', badge: 'Prijs-kwaliteit' },
                { name: 'Toshiba', path: '/toshiba', badge: 'Design' },
                { name: 'Tosot', path: '/tosot', badge: 'Budget' }
              ].map((merk, index) => (
                <Link
                  key={index}
                  to={merk.path}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <p className="font-bold text-gray-900">{merk.name}</p>
                  <span className="text-xs text-blue-600 font-medium">{merk.badge}</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/beste-airco-merken"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Vergelijk alle merken <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 border border-green-100">
              <Star className="h-8 w-8 text-yellow-500 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900">4.8 / 5 Sterren</p>
                <p className="text-sm text-gray-600">Gemiddelde klantbeoordeling</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 border border-green-100">
              <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900">5 Jaar Garantie</p>
                <p className="text-sm text-gray-600">Op installatie & materialen</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 border border-green-100">
              <BadgeCheck className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900">KvK Geregistreerd</p>
                <p className="text-sm text-gray-600">Betrouwbaar & transparant</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-xl p-4 border border-green-100">
              <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900">Snelle Service</p>
                <p className="text-sm text-gray-600">Installatie binnen 1-2 weken</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airco per Ruimte */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Airconditioning per Ruimte
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Elke ruimte heeft andere eisen. Lees onze specifieke adviezen per kamertype.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Airco voor Slaapkamer', desc: 'Extra stil (19 dB), nachtmodus, gezonde nachtrust', path: '/airco-voor-slaapkamer' },
              { title: 'Airco voor Woonkamer', desc: 'Voldoende capaciteit, design modellen, WiFi bediening', path: '/airco-voor-woonkamer' },
              { title: 'Airco voor Zolder', desc: 'Hogere capaciteit nodig, isolatie-advies inbegrepen', path: '/airco-voor-zolder' },
              { title: 'Airco voor Kantoor', desc: 'Productief werken bij elke temperatuur, stil en efficiënt', path: '/airco-kantoor' },
              { title: 'Airco voor Winkel', desc: 'Krachtige systemen voor commerciële ruimtes', path: '/airco-winkel' },
              { title: 'Airco Kopen Limburg', desc: 'Vergelijk alle opties en prijzen in uw regio', path: '/airco-kopen-limburg' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className="block bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <span className="text-blue-600 font-medium text-sm inline-flex items-center gap-1">
                    Lees meer <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Veelgestelde Vragen */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Veelgestelde Vragen over Airconditioning
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              De meest gestelde vragen over het kopen, installeren en onderhouden van een airconditioning.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    {index === 0 && (
                      <Link to="/kosten-airco-plaatsen" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1 mt-3">
                        Bekijk gedetailleerd kostenoverzicht <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                    {index === 4 && (
                      <Link to="/airco-onderhoud" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1 mt-3">
                        Meer over onderhoud <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                    {index === 5 && (
                      <Link to="/beste-airco-merken" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1 mt-3">
                        Vergelijk alle merken <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/kennisbank"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
            >
              Meer antwoorden in onze kennisbank <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Klaar voor Uw Airconditioning?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Ontvang gratis en vrijblijvend advies op maat. Onze experts helpen u bij het kiezen van de perfecte airconditioning voor uw situatie. Bel ons direct of vraag een offerte aan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-200 shadow-lg"
              >
                Gratis Offerte Aanvragen
              </Link>
              <a
                href="tel:0462021430"
                className="bg-white text-blue-800 font-bold py-4 px-8 rounded-xl text-center hover:bg-blue-50 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                046 202 1430
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              Ma-Vr: 08:00 - 18:00 | Za: 09:00 - 15:00 | Reactie binnen 24 uur
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
