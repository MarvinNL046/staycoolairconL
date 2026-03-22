import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, AlertTriangle, CheckCircle, Clock, Shield, Zap, ThermometerSun, BookOpen, ArrowRight, Phone } from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const installationSteps = [
  {
    name: 'Locatiebepaling binnenunit',
    text: 'De monteur bepaalt de optimale plek voor de binnenunit. Dit hangt af van de luchtstroom in de ruimte, de hoogte (minimaal 2,10 meter), de afstand tot de muur (minimaal 5 cm aan de bovenkant en zijkanten) en de positie ten opzichte van meubels en bedden. Een verkeerde plaatsing leidt tot ongelijkmatige koeling of onnodig geluid.',
  },
  {
    name: 'Plaatsing buitenunit',
    text: 'De buitenunit wordt op een stevige beugel aan de gevel gemonteerd, op een betonplaat in de tuin geplaatst of op het balkon gezet. Belangrijke factoren zijn draagkracht van de ondergrond, voldoende ventilatie rondom de unit (minimaal 30 cm), geluidsoverlast voor buren en bescherming tegen direct zonlicht. De buitenunit moet bereikbaar blijven voor onderhoud.',
  },
  {
    name: 'Boren doorvoer door de muur',
    text: 'Met een kernboor wordt een gat van circa 70 mm diameter door de buitenmuur geboord. Dit gat dient als doorvoer voor de koelleiding, condensafvoer en elektrische bekabeling. Het gat wordt schuin naar buiten geboord zodat regenwater niet naar binnen kan lopen. Na het doorboren wordt een doorvoerhuls geplaatst.',
  },
  {
    name: 'Leidingwerk aansluiten',
    text: 'De koelleiding (koperen leiding voor koudemiddel), de condensafvoer (voor het afgevoerde condenswater) en de elektrische bekabeling worden door de doorvoer geleid en aangesloten op zowel de binnen- als buitenunit. De koperen leidingen worden met speciale fittingen (flare-verbindingen) lekvrij aangesloten. Standaard is tot 3 meter leidingwerk inbegrepen.',
  },
  {
    name: 'Vacuüm trekken',
    text: 'Met een vacuümpomp wordt alle lucht en vocht uit het leidingsysteem verwijderd. Dit is een cruciale stap: achtergebleven lucht of vocht kan het koudemiddel verontreinigen, de compressor beschadigen en de levensduur van het systeem drastisch verkorten. Het vacuüm wordt minimaal 15 tot 20 minuten aangehouden en gecontroleerd met een manometer.',
  },
  {
    name: 'Koudemiddel controleren en bijvullen',
    text: 'De meeste split-airco\'s worden geleverd met een voorvulling koudemiddel (R32) die voldoende is voor maximaal 5 meter leiding. Bij langere leidingen wordt het exacte gewicht bijgevuld volgens de specificaties van de fabrikant. Het koudemiddel mag uitsluitend worden gehanteerd door een F-gassen gecertificeerd monteur — dit is wettelijk verplicht.',
  },
  {
    name: 'Testen, afwerken en oplevering',
    text: 'De installateur test alle functies: koelen, verwarmen (indien van toepassing), ontvochtigen en de ventilatorsnelheden. De leidingen worden netjes weggewerkt in een kabelgoot of ingefreesde muur. Het doorvoergat wordt afgedicht met kit. Tot slot ontvangt u uitleg over de bediening, de afstandsbediening en het instellen van timers en programma\'s.',
  },
];

const faqItems = [
  {
    question: 'Hoe lang duurt het installeren van een airco?',
    answer: 'Een standaard single split-airco installatie duurt 4 tot 6 uur. Bij een multi-split systeem met 2 binnenunits moet u rekenen op 6 tot 8 uur. Systemen met 3 of meer binnenunits kunnen 1 tot 2 werkdagen in beslag nemen. De exacte duur hangt af van de complexiteit van het leidingwerk en de bereikbaarheid van de montagelocaties.',
  },
  {
    question: 'Mag ik zelf een airco installeren?',
    answer: 'Een mobiele airco mag u zelf plaatsen — daar is geen installatie voor nodig. Een monoblock (zonder buitenunit) kunt u deels zelf installeren, maar er moet wel een gat door de muur geboord worden. Een split- of multi-split airco mag u wettelijk NIET zelf installeren. Volgens de EU Verordening 517/2014 (F-gassenverordening) is het verplicht dat een gecertificeerd bedrijf het koudemiddel behandelt. Overtredingen kunnen leiden tot boetes.',
  },
  {
    question: 'Wat kost alleen de installatie van een airco?',
    answer: 'De installatiekosten voor een single split-airco liggen tussen €400 en €1.000, afhankelijk van de situatie ter plaatse. Factoren die de prijs beïnvloeden zijn de lengte van het leidingwerk, de dikte van de muur, de bereikbaarheid van de buitenunit en of er extra elektra aangelegd moet worden. Bij StayCool Airco zijn de installatiekosten altijd transparant opgenomen in de offerte.',
  },
  {
    question: 'Moet ik een vergunning hebben voor een airco?',
    answer: 'In de meeste gemeenten in Limburg heeft u geen vergunning nodig voor een airco. Er gelden wel regels: de buitenunit mag in veel gemeenten niet aan de voorgevel geplaatst worden en bij monumentale panden kan een omgevingsvergunning vereist zijn. Daarnaast gelden er geluidsregels voor de buitenunit. Wij adviseren u bij de offerte over de specifieke regels in uw gemeente.',
  },
  {
    question: 'Wat gebeurt er als de installatie niet goed is uitgevoerd?',
    answer: 'Een slechte installatie kan leiden tot koudemiddellekkage (schadelijk voor het milieu en duur om bij te vullen), waterlekkage door een verkeerd aangesloten condensafvoer, verminderde koelprestaties, hogere energiekosten en vroegtijdige slijtage van de compressor. In het ergste geval kan de fabrieksgarantie vervallen als de installatie niet door een gecertificeerd bedrijf is uitgevoerd.',
  },
  {
    question: 'Hoe vind ik een goede airco installateur?',
    answer: 'Let op de volgende punten: het bedrijf moet F-gassen gecertificeerd zijn (wettelijk verplicht), vraag naar referenties of reviews, controleer of er garantie op de installatie wordt gegeven, en vraag een gedetailleerde offerte aan zodat u weet wat er inbegrepen is. Een goede installateur komt altijd eerst ter plaatse kijken voordat er een definitieve offerte wordt uitgebracht.',
  },
];

const materialenList = [
  'Kernboormachine (voor 70mm doorvoer)',
  'Vacuümpomp en manometer',
  'Flaregereedschap voor koperen leidingen',
  'Koperen koelleidingen (geïsoleerd)',
  'Condensafvoerslang',
  'Elektrische bekabeling (3x 2,5mm²)',
  'Muurbeugel of grondconsole voor buitenunit',
  'Montagebeugel voor binnenunit',
  'Doorvoerhuls en afdichtingskit',
  'Kabelgoot voor leidingafwerking',
  'Torque-sleutel voor flare-verbindingen',
  'Lekdetector voor koudemiddel',
];

const commonMistakes = [
  {
    title: 'Te klein vermogen gekozen',
    description: 'Een airco die te weinig vermogen heeft voor de ruimte draait constant op vol vermogen, verbruikt meer energie en slijt sneller. Laat altijd een capaciteitsberekening maken op basis van m², isolatie en glasoppervlak.',
  },
  {
    title: 'Buitenunit op verkeerde plek',
    description: 'De buitenunit in direct zonlicht, te dicht bij de buren of zonder voldoende ventilatie plaatsen leidt tot verminderde prestaties en mogelijke geluidsklachten. Houd minimaal 30 cm vrije ruimte rondom de unit aan.',
  },
  {
    title: 'Niet vacuüm getrokken',
    description: 'Als het systeem niet goed wordt gevacumeerd, blijven er lucht en vocht achter in de leidingen. Dit veroorzaakt corrosie, verminderde koeling en kan de compressor onherstelbaar beschadigen.',
  },
  {
    title: 'Condensafvoer niet correct aangesloten',
    description: 'Een verkeerd aangesloten of verstopte condensafvoer leidt tot waterlekkage uit de binnenunit. Het water kan muren, plafonds en vloeren beschadigen. De afvoer moet altijd onder een licht afschot lopen.',
  },
  {
    title: 'Niet-gecertificeerde installateur',
    description: 'Laat u nooit een split-airco installeren door iemand zonder F-gassen certificering. Het is niet alleen wettelijk verboden, maar de fabrieksgarantie vervalt en u bent zelf aansprakelijk bij koudemiddellekkage.',
  },
];

const sectionIds = [
  { id: 'zelf-installeren', label: 'Zelf installeren?' },
  { id: 'stappenplan', label: '7 stappen' },
  { id: 'materialen', label: 'Materialen' },
  { id: 'tijdsduur-kosten', label: 'Kosten' },
  { id: 'fouten', label: 'Veelgemaakte fouten' },
  { id: 'faq', label: 'FAQ' },
];

export default function AircoInstallerenGids() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Airco Installeren: Wat Komt Erbij Kijken? [Gids 2026]</title>
        <meta
          name="description"
          content="Hoe wordt een airco geïnstalleerd? Lees over het volledige proces, kosten, tijdsduur en waarom F-gassen certificering verplicht is. Met stappenplan!"
        />
        <link rel="canonical" href="https://staycoolairco.nl/airco-installeren" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Article Schema */}
      <SchemaMarkup
        type="Article"
        data={{
          headline: 'Airco Installeren: Het Complete Stappenplan [2026]',
          description: 'Hoe wordt een airco geïnstalleerd? Lees over het volledige installatieproces in 7 stappen, kosten, tijdsduur en waarom F-gassen certificering verplicht is.',
          url: 'https://staycoolairco.nl/airco-installeren',
          image: 'https://staycoolairco.nl/images/airco-installatie-proces.webp',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://staycoolairco.nl/airco-installeren',
          },
        }}
      />

      {/* HowTo Schema */}
      <SchemaMarkup
        type="HowTo"
        data={{
          name: 'Airco installeren: het volledige proces in 7 stappen',
          description: 'Stap-voor-stap uitleg over hoe een professionele airco-installatie wordt uitgevoerd, van locatiebepaling tot oplevering.',
          totalTime: 'PT5H',
          tools: [
            'Kernboormachine',
            'Vacuümpomp',
            'Manometer',
            'Flaregereedschap',
            'Torque-sleutel',
            'Lekdetector',
          ],
          supplies: [
            'Koperen koelleidingen',
            'Condensafvoerslang',
            'Elektrische bekabeling',
            'Muurbeugel',
            'Montagebeugel',
            'Doorvoerhuls',
            'Afdichtingskit',
            'Kabelgoot',
          ],
          steps: installationSteps,
        }}
      />

      {/* FAQ Schema */}
      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: faqItems,
        }}
      />

      {/* BreadcrumbList Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://staycoolairco.nl',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Airco Installeren',
                item: 'https://staycoolairco.nl/airco-installeren',
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="h-4 w-4" />
                Informatieve gids
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Airco Installeren: Het Complete Stappenplan
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Van voorbereiding tot oplevering — alles wat u moet weten over het installatieproces van een airco.
                Inclusief wat u zelf kunt doen, wat wettelijk verplicht door een professional moet en welke kosten u kunt verwachten.
              </p>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {sectionIds.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-1 bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Kan ik zelf een airco installeren? */}
      <section id="zelf-installeren" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kan ik zelf een airco installeren?
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Het korte antwoord: dat hangt af van het type airco. Hieronder een eerlijk overzicht van wat u wel en niet zelf kunt doen.
              </p>

              <div className="space-y-6">
                {/* Mobiele airco */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobiele airco — Ja, zelf te doen</h3>
                      <p className="text-gray-700">
                        Een mobiele airco is plug-and-play: uit de doos halen, afvoerslang door het raam hangen en de stekker in het stopcontact.
                        Er is geen technische kennis voor nodig. Het nadeel is dat mobiele airco's aanzienlijk minder efficiënt zijn dan split-systemen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Monoblock */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Monoblock (zonder buitenunit) — Deels zelf te doen</h3>
                      <p className="text-gray-700">
                        Een monoblock-airco heeft geen buitenunit, maar er moet wel een gat van circa 16 cm door de buitenmuur geboord worden voor de luchtafvoer.
                        De montage van de unit zelf is relatief eenvoudig, maar het boren door een (mogelijk dragende) muur vereist de juiste apparatuur en kennis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Split / Multi-split */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Split of multi-split airco — Nee, wettelijk verboden</h3>
                      <p className="text-gray-700 mb-4">
                        Een split-airco of multi-split systeem mag u <strong>niet</strong> zelf installeren. Het systeem bevat koudemiddel (meestal R32) dat
                        onder de <strong>Europese F-gassenverordening (EU 517/2014)</strong> valt. Alleen bedrijven met een geldig F-gassen certificaat mogen
                        dit koudemiddel behandelen — vullen, aftappen of controleren.
                      </p>
                      <p className="text-gray-700">
                        Dit is niet zomaar een regel: fluorhoudende koudemiddelen (F-gassen) zijn krachtige broeikasgassen. R32 heeft een Global Warming Potential (GWP)
                        van 675 — dat betekent dat 1 kg R32 in de atmosfeer evenveel opwarming veroorzaakt als 675 kg CO2. Lekkage door ondeskundige installatie is
                        schadelijk voor het milieu en kan leiden tot boetes van de Inspectie Leefomgeving en Transport (ILT).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-8">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>Waarom StayCool?</strong> Al onze monteurs zijn F-gassen gecertificeerd en werken volgens de
                      geldende STEK-normen. Na installatie ontvangt u een bewijs van vakkundige installatie, waarmee de
                      fabrieksgarantie volledig behouden blijft. Meer weten over gecertificeerde installatie?{' '}
                      <Link to="/airco-installateur" className="text-blue-600 hover:text-blue-800 underline">
                        Lees waarom een gecertificeerde installateur belangrijk is
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Het Installatieproces in 7 Stappen */}
      <section id="stappenplan" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Het installatieproces in 7 stappen
              </h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                Hieronder beschrijven we stap voor stap hoe een professionele airco-installatie in de praktijk verloopt.
                Dit is gebaseerd op hoe onze monteurs bij StayCool Airco dagelijks split-airco's installeren in Limburg.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

              <div className="space-y-8">
                {installationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative flex gap-6"
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Stap {index + 1}: {step.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-12"
            >
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Vanuit onze ervaring:</strong> de meest kritische stap is het vacuüm trekken (stap 5).
                  We zien regelmatig systemen die door onervaren installateurs zijn geplaatst zonder goed te vacumeren.
                  Het gevolg: vochtproblemen in het systeem, verminderde koelprestaties en vroegtijdige compressorschade.
                  Bij StayCool trekken we altijd minimaal 20 minuten vacuüm en controleren we het met een digitale manometer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Benodigde Materialen en Gereedschap */}
      <section id="materialen" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benodigde materialen en gereedschap
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Een professionele installateur brengt het volgende mee. Dit geeft u een beeld van waarom een airco-installatie
                specialistisch werk is — dit gereedschap is niet standaard in de gemiddelde gereedschapskist te vinden.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {materialenList.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
                  >
                    <Wrench className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Tijdsduur en Kosten */}
      <section id="tijdsduur-kosten" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tijdsduur en kosten van airco installatie
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                De kosten en doorlooptijd variëren per type systeem en de complexiteit van de installatie.
                Hieronder een realistisch overzicht op basis van onze dagelijkse praktijk.
              </p>

              <div className="space-y-6">
                {/* Single Split */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Single split-airco</h3>
                      <p className="text-gray-500">1 binnenunit + 1 buitenunit</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-blue-600 mb-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">Tijdsduur</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">4-6 uur</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-blue-600 mb-1">
                          <Zap className="h-4 w-4" />
                          <span className="text-sm font-medium">Installatie</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">&euro;400 - &euro;1.000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multi Split 2 */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Multi-split (2 units)</h3>
                      <p className="text-gray-500">2 binnenunits + 1 buitenunit</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-blue-600 mb-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">Tijdsduur</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">6-8 uur</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-blue-600 mb-1">
                          <Zap className="h-4 w-4" />
                          <span className="text-sm font-medium">Installatie</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">&euro;800 - &euro;1.500</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multi Split 3+ */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Multi-split (3+ units)</h3>
                      <p className="text-gray-500">3-5 binnenunits + 1 buitenunit</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-blue-600 mb-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">Tijdsduur</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">1-2 dagen</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-blue-600 mb-1">
                          <Zap className="h-4 w-4" />
                          <span className="text-sm font-medium">Installatie</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">&euro;1.500 - &euro;3.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mt-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      <strong>Let op:</strong> bovenstaande bedragen zijn alleen de installatiekosten, exclusief de airco-unit zelf.
                      De totale kosten inclusief apparatuur liggen hoger. Factoren die de installatieprijs beïnvloeden zijn onder meer
                      de lengte van het leidingwerk (boven 3 meter), de muurdikte, de bereikbaarheid en of er extra elektra nodig is.
                    </p>
                    <p className="text-gray-700 mt-3">
                      Meer weten over de totale kosten?{' '}
                      <Link to="/kosten-airco-plaatsen" className="text-blue-600 hover:text-blue-800 underline">
                        Bekijk ons complete kostenoverzicht
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Veelgemaakte Fouten */}
      <section id="fouten" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Veelgemaakte fouten bij airco installatie
              </h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                In onze jarenlange ervaring als airco-installateur in Limburg zien we deze fouten regelmatig —
                vooral bij installaties die door niet-gecertificeerde partijen zijn uitgevoerd.
              </p>

              <div className="space-y-6">
                {commonMistakes.map((mistake, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{mistake.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{mistake.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-10">
                <div className="flex items-start gap-3">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Buitenunit goed plaatsen?</strong> De plaatsing van de buitenunit is een veelvoorkomend discussiepunt.
                    Lees onze uitgebreide gids over{' '}
                    <Link to="/kennisbank/airco-buitenunit-plaatsing" className="text-blue-600 hover:text-blue-800 underline">
                      buitenunit plaatsing
                    </Link>{' '}
                    en de{' '}
                    <Link to="/kennisbank/airco-geluid-buren-regels" className="text-blue-600 hover:text-blue-800 underline">
                      geluidsregels voor buren
                    </Link>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-10">
                Veelgestelde vragen over airco installeren
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={activeFAQ === index}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">{item.question}</span>
                    <ArrowRight
                      className={`h-5 w-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                        activeFAQ === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {activeFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Laat uw airco vakkundig installeren
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Liever het installatieproces aan een professional overlaten? Onze F-gassen gecertificeerde monteurs
                zorgen voor een vlekkeloze installatie met 5 jaar garantie op het installatiewerk.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  046 202 1430
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
                >
                  Gratis offerte aanvragen
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>F-gassen gecertificeerd</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>5 jaar installatiegarantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Installatie binnen 5 werkdagen</span>
                </div>
              </div>

              <p className="text-blue-200 text-sm mt-8">
                Bekijk ook:{' '}
                <Link to="/airco-installatie" className="text-white underline hover:text-blue-100">
                  Onze installatieservice
                </Link>{' '}
                |{' '}
                <Link to="/airco-laten-plaatsen" className="text-white underline hover:text-blue-100">
                  Airco laten plaatsen
                </Link>{' '}
                |{' '}
                <Link to="/airco-onderhoud" className="text-white underline hover:text-blue-100">
                  Airco onderhoud
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
