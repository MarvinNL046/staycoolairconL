import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Clock, Award, Wrench, MapPin, Phone, Star, CheckCircle, Users, Thermometer, ChevronDown } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: 'Hoe vind ik een goede airco installateur?',
    answer: 'Let op F-gassen certificering (wettelijk verplicht), ervaring met uw type woning, reviews van eerdere klanten, en of de installateur garantie biedt op zowel het product als de installatie. Een erkende installateur zoals StayCool Airco biedt al deze zekerheden en werkt uitsluitend met gecertificeerde monteurs.',
  },
  {
    question: 'Wat kost een airco installateur?',
    answer: 'De installatiekosten variëren van €350 tot €950 afhankelijk van het type systeem, de complexiteit van de installatie en de leidinglengte. Bij StayCool Airco zijn de kosten transparant en ontvangt u vooraf een gedetailleerde offerte zonder verborgen kosten. Een complete single-split installatie inclusief airco begint vanaf €1.600.',
  },
  {
    question: 'Is F-gassen certificering verplicht?',
    answer: 'Ja, sinds 2015 is het wettelijk verplicht dat alleen F-gassen gecertificeerde installateurs mogen werken met koudemiddelen in aircosystemen. Niet-gecertificeerde installatie is illegaal, kan leiden tot boetes en maakt uw fabrieksgarantie ongeldig. StayCool Airco is volledig F-gassen gecertificeerd.',
  },
  {
    question: 'Hoe lang duurt een airco installatie?',
    answer: 'Een standaard single-split installatie duurt gemiddeld 4 tot 6 uur. Een multi-split systeem met meerdere binnenunits kan 1 tot 2 dagen in beslag nemen. Na de installatie wordt het systeem volledig getest en krijgt u uitleg over de bediening.',
  },
  {
    question: 'Kan ik mijn eigen airco laten monteren?',
    answer: 'U mag zelf een airco kopen, maar de installatie moet door een F-gassen gecertificeerde installateur worden uitgevoerd. Dit is wettelijk verplicht vanwege het werken met koudemiddelen. Zelf installeren is niet alleen verboden, maar ook risicovol: onjuiste installatie kan leiden tot koudemiddellekkage, waterschade en verlies van garantie.',
  },
  {
    question: 'Bieden jullie garantie op de installatie?',
    answer: 'Ja, StayCool Airco biedt 5 jaar garantie op alle installatiewerkzaamheden. Dit komt bovenop de fabrieksgarantie van de airconditioner zelf. Doordat wij een erkend installateur zijn, blijft de fabrieksgarantie volledig behouden — iets dat bij onbevoegde installatie vervalt.',
  },
];

const werkwijzeStappen = [
  {
    nummer: 1,
    titel: 'Gratis Adviesgesprek',
    beschrijving: 'U neemt contact op via telefoon of het formulier. Wij bespreken uw wensen, het type ruimte en geven een eerste inschatting.',
  },
  {
    nummer: 2,
    titel: 'Inspectie ter Plaatse',
    beschrijving: 'Onze specialist komt bij u langs om de situatie te beoordelen: plaatsingsmogelijkheden, leidinglengte en het benodigde vermogen.',
  },
  {
    nummer: 3,
    titel: 'Offerte op Maat',
    beschrijving: 'U ontvangt een gedetailleerde offerte met transparante prijzen. Geen verborgen kosten, geen verrassingen achteraf.',
  },
  {
    nummer: 4,
    titel: 'Professionele Installatie',
    beschrijving: 'Onze F-gassen gecertificeerde monteurs installeren uw airco vakkundig. Meestal binnen één werkdag afgerond.',
  },
  {
    nummer: 5,
    titel: 'Oplevering en Uitleg',
    beschrijving: 'Na installatie testen we het systeem grondig en geven u uitgebreide uitleg over de bediening en het onderhoud.',
  },
  {
    nummer: 6,
    titel: 'Nazorg en Onderhoud',
    beschrijving: 'Wij blijven beschikbaar voor vragen, onderhoud en service. Met onze onderhoudscontracten blijft uw airco optimaal presteren.',
  },
];

const merken = [
  { naam: 'Tosot', url: '/landing/tosot', beschrijving: 'Beste prijs-kwaliteitverhouding' },
  { naam: 'Daikin', url: '/landing/daikin', beschrijving: 'Marktleider in energiezuinigheid' },
  { naam: 'LG', url: '/landing/lg', beschrijving: 'Stijlvol design, fluisterstil' },
  { naam: 'Toshiba', url: '/landing/toshiba', beschrijving: 'Japanse betrouwbaarheid' },
  { naam: 'Mitsubishi Heavy', url: '/landing/mitsubishi-heavy', beschrijving: 'Extreme betrouwbaarheid' },
];

const steden = [
  { naam: 'Roermond', url: '/airco-installatie/roermond' },
  { naam: 'Maastricht', url: '/airco-installatie/maastricht' },
  { naam: 'Heerlen', url: '/airco-installatie/heerlen' },
  { naam: 'Venlo', url: '/airco-installatie/venlo' },
  { naam: 'Sittard', url: '/airco-installatie/sittard' },
  { naam: 'Weert', url: '/airco-installatie/weert' },
  { naam: 'Kerkrade', url: '/airco-installatie/kerkrade' },
  { naam: 'Brunssum', url: '/airco-installatie/brunssum' },
  { naam: 'Geleen', url: '/airco-installatie/geleen' },
  { naam: 'Landgraaf', url: '/airco-installatie/landgraaf' },
  { naam: 'Venray', url: '/airco-installatie/venray' },
  { naam: 'Stein', url: '/airco-installatie/stein' },
];

export default function AircoInstallateurLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Airco Installateur | F-Gassen Gecertificeerd | Sinds 2019</title>
        <meta
          name="description"
          content="Erkend airco installateur in Limburg. F-gassen gecertificeerd, 5 jaar garantie, 500+ installaties. Gratis offerte binnen 24 uur. ★ 4.8/5 reviews."
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-installateur" />
        <meta property="og:title" content="Airco Installateur | F-Gassen Gecertificeerd | Sinds 2019" />
        <meta property="og:description" content="Erkend airco installateur in Limburg. F-gassen gecertificeerd, 5 jaar garantie, 500+ installaties." />
        <meta property="og:url" content="https://staycoolairco.nl/airco-installateur" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://staycoolairco.nl"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Airco Installateur",
                "item": "https://staycoolairco.nl/airco-installateur"
              }
            ]
          })}
        </script>
      </Helmet>

      {/* LocalBusiness Schema */}
      <SchemaMarkup
        type="LocalBusiness"
        data={{
          name: 'StayCool Airco - Erkend Airco Installateur Limburg',
          description: 'Erkend airco installateur in Limburg. F-gassen gecertificeerd, 500+ installaties sinds 2019. Professionele airco installatie met 5 jaar garantie.',
          url: 'https://staycoolairco.nl/airco-installateur',
          telephone: '046 202 1430',
          foundingDate: '2019',
          knowsAbout: [
            'Airconditioning installatie',
            'F-gassen certificering',
            'Split airco systemen',
            'Multi-split airco systemen',
            'Airco onderhoud',
          ],
        }}
      />

      {/* Service Schema */}
      <SchemaMarkup
        type="Service"
        data={{
          name: 'Airco Installatie Service',
          serviceType: 'Airconditioning Installation',
          description: 'Professionele airconditioning installatie door F-gassen gecertificeerde installateurs in Limburg. Inclusief advies, montage en 5 jaar installatiegarantie.',
          areaServed: {
            '@type': 'State',
            name: 'Limburg',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Airco Installatie Diensten',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Single-split airco installatie',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Multi-split airco installatie',
                },
              },
            ],
          },
        }}
      />

      {/* FAQPage Schema */}
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: faqItems,
        }}
      />

      {/* HowTo Schema */}
      <SchemaMarkup
        type="HowTo"
        data={{
          name: 'Airco laten installeren door een erkend installateur',
          description: 'Het complete proces van airco installatie door StayCool Airco, van adviesgesprek tot nazorg.',
          totalTime: 'P1D',
          steps: werkwijzeStappen.map((stap) => ({
            name: stap.titel,
            text: stap.beschrijving,
          })),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Uw Erkende Airco Installateur in Limburg
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              F-gassen gecertificeerd, 500+ installaties sinds 2019. Van advies tot installatie en nazorg
              — StayCool Airco is uw betrouwbare partner voor professionele airconditioning in heel Limburg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheck className="h-4 w-4" /> F-Gassen Gecertificeerd
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="h-4 w-4" /> 5 Jaar Installatiegarantie
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Users className="h-4 w-4" /> 500+ Installaties
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4" /> 4.8/5 Sterren
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="h-4 w-4" /> Reactie binnen 24 uur
            </span>
          </motion.div>
        </div>
      </section>

      {/* E-E-A-T: Experience & Expertise */}
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
              Waarom een Erkende Airco Installateur?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Een airco installeren is vakwerk. De keuze voor een erkende installateur beschermt u juridisch,
              financieel en technisch. Dit is waarom certificering essentieel is.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600"
            >
              <ShieldCheck className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">F-Gassen Certificering</h3>
              <p className="text-gray-600">
                Sinds 2015 is het <strong>wettelijk verplicht</strong> dat installateurs F-gassen gecertificeerd zijn
                om te mogen werken met koudemiddelen. Deze EU-verordening (nr. 517/2014) beschermt het milieu
                en garandeert veilige installatie. Installatie door een niet-gecertificeerd bedrijf is illegaal
                en kan leiden tot boetes tot €50.000.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-500"
            >
              <Wrench className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risico's van Onbevoegde Installatie</h3>
              <p className="text-gray-600">
                Bij een niet-gecertificeerde installatie riskeert u <strong>lekkage van koudemiddelen</strong> (schadelijk
                broeikasgas), waterschade door onjuiste condensafvoer, elektrische problemen en geluidsoverlast
                door verkeerde plaatsing. Bovendien vervalt de fabrieksgarantie bij installatie door een
                niet-erkend bedrijf.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-500"
            >
              <Award className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garantie en Zekerheid</h3>
              <p className="text-gray-600">
                Een erkende installateur zorgt ervoor dat uw <strong>fabrieksgarantie behouden blijft</strong>. Bij
                StayCool Airco ontvangt u daarbovenop 5 jaar installatiegarantie. Wij werken volgens de richtlijnen
                van de fabrikant, gebruiken het juiste gereedschap en documenteren elke installatie volledig.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-E-A-T: Experience - Onze Ervaring */}
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
              Onze Ervaring als Airco Installateur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sinds 2019 hebben wij meer dan 500 aircosystemen geïnstalleerd in heel Limburg.
              Van compacte studio-appartementen tot grote villa's — wij kennen elke situatie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="h-8 w-8 text-blue-600" />, getal: '500+', label: 'Installaties voltooid' },
              { icon: <Clock className="h-8 w-8 text-blue-600" />, getal: 'Sinds 2019', label: 'Actief in Limburg' },
              { icon: <Star className="h-8 w-8 text-blue-600" />, getal: '4.8/5', label: 'Gemiddelde beoordeling' },
              { icon: <Thermometer className="h-8 w-8 text-blue-600" />, getal: '5 Merken', label: 'Erkend installateur' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <p className="text-3xl font-bold text-gray-900">{item.getal}</p>
                <p className="text-gray-600 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise per Ruimte</h3>
              <ul className="space-y-3">
                {[
                  'Woonkamers en open keukens (25-60 m²)',
                  'Slaapkamers met fluisterstille installatie',
                  'Zolderverdiepingen met dakisolatie-uitdagingen',
                  'Kantoren en bedrijfsruimtes',
                  'Winkels en horecagelegenheden',
                  'Serverruimtes met 24/7 koeling',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technische Kennis</h3>
              <ul className="space-y-3">
                {[
                  'Correct vermogen berekenen per ruimte (kW/m²)',
                  'Kennis van geluidsnormen voor buren (wet milieubeheer)',
                  'Optimale plaatsing binnen- en buitenunit',
                  'Leidingwerk door complexe bouwconstructies',
                  'Multi-split configuraties tot 5 binnenunits',
                  'Wifi-integratie en smart home koppelingen',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Werkwijze / HowTo */}
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
              Onze Werkwijze: Van Advies tot Installatie
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Een duidelijk en transparant proces, zodat u precies weet wat u kunt verwachten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {werkwijzeStappen.map((stap, index) => (
              <motion.div
                key={stap.nummer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 relative"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg mb-4">
                  {stap.nummer}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{stap.titel}</h3>
                <p className="text-gray-600">{stap.beschrijving}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Merken */}
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
              Merken Waarmee Wij Werken
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Als erkend installateur werken wij met de beste airco merken op de markt.
              Wij adviseren u graag welk merk het beste past bij uw situatie en budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {merken.map((merk, index) => (
              <motion.div
                key={merk.naam}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={merk.url}
                  className="block bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-200 h-full"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{merk.naam}</h3>
                  <p className="text-gray-600 text-sm">{merk.beschrijving}</p>
                  <span className="inline-block mt-3 text-blue-600 font-medium text-sm">
                    Bekijk modellen →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/beste-airco-merken"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Vergelijk alle merken →
            </Link>
          </div>
        </div>
      </section>

      {/* Werkgebied */}
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
              Werkgebied: Airco Installateur in heel Limburg
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wij zijn actief als airco installateur in alle grote steden en gemeenten in Limburg.
              Onze monteurs kennen de regio en zijn snel bij u ter plaatse.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {steden.map((stad, index) => (
              <motion.div
                key={stad.naam}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={stad.url}
                  className="flex items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-xl p-3 transition-colors duration-200"
                >
                  <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{stad.naam}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Staat uw plaats er niet bij?{' '}
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                Neem contact op
              </Link>
              {' '}— wij zijn in heel Limburg actief.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Veelgestelde Vragen over Airco Installateurs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Antwoorden op de meest gestelde vragen over het kiezen van een airco installateur.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Klaar voor een Professionele Airco Installatie?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Vraag vandaag nog een gratis en vrijblijvende offerte aan. Wij reageren binnen 24 uur
              met een persoonlijk advies op maat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                Bel: 046 202 1430
              </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-blue-100">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> F-gassen gecertificeerd
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> 5 jaar garantie
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> Geen voorrijkosten
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> Transparante prijzen
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer Informatie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/airco-installatie" className="text-blue-600 hover:text-blue-800 font-medium py-2">
              Airco Installatie Service →
            </Link>
            <Link to="/kosten-airco-plaatsen" className="text-blue-600 hover:text-blue-800 font-medium py-2">
              Kosten Airco Plaatsen →
            </Link>
            <Link to="/airco-onderhoud" className="text-blue-600 hover:text-blue-800 font-medium py-2">
              Airco Onderhoud →
            </Link>
            <Link to="/airco-offerte" className="text-blue-600 hover:text-blue-800 font-medium py-2">
              Gratis Offerte Aanvragen →
            </Link>
            <Link to="/beste-airco-merken" className="text-blue-600 hover:text-blue-800 font-medium py-2">
              Beste Airco Merken Vergelijken →
            </Link>
            <Link to="/airco-installatie-limburg" className="text-blue-600 hover:text-blue-800 font-medium py-2">
              Airco Installatie Limburg →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
