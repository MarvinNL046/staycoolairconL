import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Mail, Calculator, TrendingUp, Star, Award, Home, MapPin } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const AircoPlaatsenVenlo = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Limburg Steden', path: '/seo/pillar-6-limburg-steden' },
    { label: 'Airco Plaatsen Venlo' }
  ];

  const usps = [
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gassen Gecertificeerd",
      description: "Erkende installateurs voor professionele airco plaatsing"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Scherpe Prijzen",
      description: "Transparante offertes zonder verborgen kosten"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Garantie & Service",
      description: "10 jaar fabrieksgarantie plus uitstekende nazorg"
    },
    {
      icon: <Star className="h-12 w-12 text-sky-500" />,
      title: "Grensstreek Expert",
      description: "Ook service in Duitsland (NRW) beschikbaar"
    }
  ];

  const districts = [
    "Centrum", "Blerick", "Tegelen", "Belfeld", "Velden", "Steyl",
    "Arcen", "Lomm", "Castenray", "Nieuw-Bergen", "Oostrum",
    "Geijsteren", "Ysselsteyn", "Merselo", "Horst", "Grubbenvorst",
    "America", "Maasbree", "Hout-Blerick", "Boekend", "Tienray"
  ];

  const placementOptions = [
    {
      title: "Woonkamer & Living",
      description: "Optimaal comfort in uw hoofdruimte",
      items: [
        "Wandmodel: discrete plaatsing hoog aan de muur",
        "Vloermodel: ideaal bij grote ramen",
        "Plafondmodel: verborgen installatie voor strakke look",
        "Geïntegreerd met interieur en lichtplan"
      ]
    },
    {
      title: "Slaapkamers",
      description: "Fluisterstille oplossingen voor rustige nachtrust",
      items: [
        "Extra stille modellen (19 dB)",
        "Nachtmodus functie",
        "Optimale plaatsing voor luchtcirculatie",
        "Geen direct blazen richting bed"
      ]
    },
    {
      title: "Kantoor & Werkruimte",
      description: "Productief werken bij perfecte temperatuur",
      items: [
        "Multi-zone oplossingen",
        "Stille units voor concentratie",
        "WiFi-bediening per ruimte",
        "Energie-efficiënt voor kostenbesparing"
      ]
    }
  ];

  const faqs = [
    {
      question: "Wat kost airco plaatsen in Venlo?",
      answer: "De kosten voor airco plaatsen in Venlo variëren tussen €1.200 en €3.500 afhankelijk van het type systeem, aantal units en plaatsingslocatie. Een single-split systeem inclusief plaatsing kost gemiddeld €1.800-2.200. Voor multi-split systemen met 2-4 binnenunits rekent u op €3.000-6.000. De prijs is altijd inclusief: gratis adviesgesprek en locatiebezoek, materialen en onderdelen, professionele plaatsing door F-gassen gecertificeerde monteurs, inbedrijfstelling en uitleg, en volledige garantie."
    },
    {
      question: "Hoe lang duurt het plaatsen van een airco?",
      answer: "Een standaard single-split airco plaatsen duurt 4-6 uur. Dit omvat het bevestigen van binnen- en buitenunit, trekken van leidingen, elektrische aansluiting, vacuüm trekken en inbedrijfstelling. Voor multi-split systemen met meerdere binnenunits plannen we 1-2 werkdagen. We werken netjes en efficiënt, ruimen alles op en laten uw woning schoon achter. Grote projecten met VRV-systemen of complete huisinstallaties kunnen 3-5 werkdagen duren."
    },
    {
      question: "Waar kan de buitenunit geplaatst worden?",
      answer: "De buitenunit kan op verschillende locaties geplaatst worden: op de grond (op kunststof sokkel of betonplaat), aan de gevel (met beugels op stevig metselwerk), op plat dak (met trillingdempers), op balkon (met goedkeuring VvE). Bij plaatsing houden we rekening met: geluidsoverlast voor buren (geluidsarme modellen), toegankelijkheid voor onderhoud, afstand tot binnenunit (max. 15-25m), en bouwvoorschriften gemeente Venlo."
    },
    {
      question: "Kunnen jullie ook airco's plaatsen in Duitsland?",
      answer: "Ja, StayCool Airco biedt ook service in het Duitse grensgebied rondom Venlo, inclusief Straelen, Nettetal, Kaldenkirchen en Niederkrüchten. Onze monteurs kennen de Duitse bouwvoorschriften (DIN normen) en kunnen u adviseren over eventuele vergunningen. We werken met Duitse fabrieksgaranties en bieden ook nazorg en onderhoud in Duitsland. De installatieprocedure is identiek aan Nederland, en we communiceren in Nederlands of Duits."
    },
    {
      question: "Zijn vergunningen nodig in Venlo?",
      answer: "Voor airco plaatsen in Venlo zijn meestal geen vergunningen nodig bij: gevelplaatsing buitenunit binnen welstandsvrije zone, plaatsing op eigen terrein binnen 2,5m van erfgrens, standaard woningen zonder bijzondere status. Wel vergunning nodig bij: monumentale panden in Centrum, Tegelen of Arcen, beschermde stadsgezichten, plaatsing zichtbaar vanaf openbare weg (afhankelijk van locatie), appartementen (VvE goedkeuring vereist). We adviseren altijd over vergunningen."
    },
    {
      question: "Welk type airco is geschikt voor een woning in Venlo?",
      answer: "Voor eengezinswoningen in Venlo adviseren we vaak een multi-split systeem: 1 buitenunit voor 2-5 binnenunits, elke kamer afzonderlijk te regelen, energiezuinig door Inverter technologie, geschikt voor verwarmen én koelen. Voor appartementen is een single-split vaak voldoende: compact en efficiënt, eenvoudige installatie, fluisterstil (19 dB), ideaal voor woonkamer + slaapkamer. Bij nieuwbouw adviseren we: geïntegreerde systemen met plafondunits, volledige klimaatbeheersing hele woning, smart home integratie mogelijk."
    },
    {
      question: "Plaatsen jullie ook airco's in bedrijfspanden?",
      answer: "Ja, StayCool Airco is specialist in zakelijke klimaatoplossingen voor Venlo en omgeving. We plaatsen systemen in kantoren, winkels, horeca, bedrijfshallen en showrooms. Voor grotere projecten bieden we VRV/VRF systemen met centrale regeling, mogelijkheid voor zoneregeling, energiemonitoring en rapportage, en service- en onderhoudscontracten. We werken volgens vaste procedures en deadlines, en bieden offertes inclusief btw-specificatie."
    },
    {
      question: "Wat zijn de voordelen van airco plaatsen in Venlo?",
      answer: "Venlo kent warme zomers en relatief milde winters - ideaal voor airco met warmtepomp: koeling in de zomer (comfort tot 35°C buiten), efficiënte verwarming in voor-/najaar (60% goedkoper dan cv), energiebesparing bij zonnepanelen (vermijd lage teruglevering), betere luchtkwaliteit door filtering, verhoogde woningwaarde (5-8%), en lager energielabel door efficiënte warmtepomp. Met een rendement van 400-500% bespaart u aanzienlijk op energiekosten."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Plaatsen Venlo | Grensstreek Specialist | StayCool Airco"
        description="Airco plaatsen Venlo ✓ F-gassen gecertificeerd ✓ Vanaf €1.800 ✓ 10 jaar garantie ✓ Centrum, Blerick, Tegelen ✓ Gratis offerte!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          "name": "Airco Plaatsen Venlo",
          "description": "Professionele airco installatie en plaatsing in Venlo en omgeving. F-gassen gecertificeerd met 10 jaar garantie op premium merken.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "StayCool Airco",
            "telephone": "046-202-1430",
            "email": "info@staycoolairco.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Venlo",
              "addressRegion": "Limburg",
              "addressCountry": "NL"
            }
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Venlo",
              "containedInPlace": {
                "@type": "State",
                "name": "Limburg"
              }
            },
            {
              "@type": "Place",
              "name": "Duitse grensstreek"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Airco Plaatsing Diensten",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Single-split airco plaatsing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Multi-split airco installatie"
                }
              }
            ]
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Airco Plaatsen Venlo
            </h1>

            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Professionele airco plaatsing in de grensstreek. F-gassen gecertificeerd met scherpe prijzen, 10 jaar garantie en ook service beschikbaar in Duitsland (NRW).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Gratis Offerte Aanvragen
              </Link>
              <Link
                to="/capaciteit-calculator"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Bereken Capaciteit
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 transition-colors"
              >
                046 202 1430
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                F-gassen Gecertificeerd
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Vanaf €1.800
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                10 Jaar Garantie
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Ook in Duitsland
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Waarom Airco Plaatsen door StayCool Airco?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {usp.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                  <p className="text-gray-600 text-center">{usp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professioneel Airco Plaatsen in Venlo en Omgeving
              </h2>

              <p className="text-gray-600 mb-6">
                Venlo, de dynamische grensstad aan de Maas met haar mix van historische binnensteden, moderne woonwijken en internationale uitstraling, vraagt om klimaatoplossingen die even veelzijdig zijn als de stad zelf. Of u nu woont in een karakteristiek pand in Tegelen, een modern appartement in Blerick, of een vrijstaande woning in een van de omliggende dorpen - StayCool Airco plaatst de perfecte airco voor uw situatie.
              </p>

              <p className="text-gray-600 mb-6">
                Met meer dan 15 jaar ervaring in airco plaatsing in Venlo en de grensstreek kennen we de lokale bouwstijlen, vergunningseisen en klimatologische omstandigheden. Onze F-gassen gecertificeerde monteurs werken volgens de hoogste kwaliteitsnormen en leveren maatwerk voor elke woning of bedrijfspand. Als specialist in de grensregio bieden we ook volledige service in het Duitse grensgebied (NRW).
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Plaatsingsmogelijkheden
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {placementOptions.map((option, index) => (
                  <div key={index} className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <ul className="space-y-2">
                      {option.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Optimale Plaatsing voor Maximaal Comfort
              </h3>

              <p className="text-gray-600 mb-6">
                De plaatsing van uw airco bepaalt voor een groot deel het comfort en de efficiency. Onze ervaren monteurs houden rekening met talloze factoren: luchtcirculatie en vermijden van tocht, afstand tot buitenunit (max. 15-25m), elektrische voorziening en stopcontacten, esthetische integratie met interieur, geluidsoverlast minimaliseren, en toegankelijkheid voor onderhoud.
              </p>

              <p className="text-gray-600 mb-6">
                Voor de buitenunit zoeken we altijd de beste locatie die voldoet aan technische eisen én esthetisch verantwoord is. We bespreken verschillende opties en adviseren over de voor- en nadelen van elke plaatsing. Bij plaatsing op de gevel gebruiken we stevige beugels die aangepast zijn aan het type muur (baksteen, beton, isolatie). Voor grondplaatsing leveren we kunststof sokkels of storten we een betonplaat.
              </p>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-sky-600" />
                  Service in de Grensstreek
                </h4>
                <p className="text-gray-600 mb-4">
                  Als specialist in de Venlose grensregio bieden we volledige service aan beide zijden van de grens:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Nederlandse zijde:</strong> Venlo, Blerick, Tegelen, Arcen, Velden, Steyl en alle omliggende dorpen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Duitse zijde:</strong> Straelen, Nettetal, Kaldenkirchen, Niederkrüchten, Brüggen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Duitse normen:</strong> Ervaring met DIN voorschriften en Duitse bouwvergunningen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Tweetalig:</strong> Communicatie in Nederlands en Duits mogelijk</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Werkgebied Venlo en Omstreken
              </h2>

              <p className="text-gray-600 mb-6">
                StayCool Airco plaatst airco's in heel Venlo en alle omliggende kernen:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {districts.map((district, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-sky-500 flex-shrink-0" />
                    <span>{district}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Premium A-Merken die We Plaatsen
              </h2>

              <p className="text-gray-600 mb-6">
                We plaatsen uitsluitend airco systemen van premium merken met bewezen kwaliteit:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-500" />
                    Daikin Premium
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Wereldmarktleider airconditioning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Fluisterstil vanaf 19 dB</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>10 jaar garantie bij correcte plaatsing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Energielabel A+++</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-500" />
                    Mitsubishi Heavy Industries
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Japanse precisie en duurzaamheid</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Geavanceerde luchtfiltering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Hyper Inverter technologie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Energiezuinig A+++</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-500" />
                    LG Premium
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Modern design en technologie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>WiFi-bediening standaard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>ThinQ app integratie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>10 jaar garantie compressor</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-500" />
                    Samsung & Gree
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Uitstekende prijs-kwaliteit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Betrouwbare technologie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Smart home compatible</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>5 jaar fabrieksgarantie</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-orange-600" />
                  Maximale Besparing met Zonnepanelen
                </h4>
                <p className="text-gray-600">
                  Heeft u zonnepanelen op uw woning in Venlo? Dan is een airco warmtepomp de slimste investering. U vermijdt de lage terugleververgoeding (slechts €0,09 per kWh) door uw eigen opgewekte stroom te gebruiken voor verwarming én koeling. Met een rendement van 400-500% bespaart u tot 60% op energiekosten vergeleken met traditionele cv. Bovendien verhoogt u uw energieonafhankelijkheid aanzienlijk.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Het Plaatsingsproces
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Gratis Adviesgesprek</h4>
                    <p className="text-gray-600">
                      We bezoeken uw woning in Venlo (of Duitse grensstreek) voor een persoonlijk adviesgesprek. We bekijken de beste plaatsingslocaties, bespreken uw wensen en adviseren over het meest geschikte systeem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Offerte op Maat</h4>
                    <p className="text-gray-600">
                      U ontvangt binnen 24 uur een gedetailleerde offerte met alle specificaties, plaatsingsplan en totaalprijs. Geen verborgen kosten, alles transparant en duidelijk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Professionele Plaatsing</h4>
                    <p className="text-gray-600">
                      Onze F-gassen gecertificeerde monteurs plaatsen uw airco volgens fabrieksspecificaties. We werken netjes, efficiënt en laten uw woning schoon achter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Uitleg en Nazorg</h4>
                    <p className="text-gray-600">
                      Na plaatsing krijgt u uitgebreide uitleg over optimaal gebruik, onderhoud en bediening. We bieden uitstekende nazorg en zijn altijd bereikbaar voor vragen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section 1 */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om Uw Airco te Laten Plaatsen?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Vraag nu een gratis offerte aan voor airco plaatsing in Venlo of de grensstreek
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone className="h-6 w-6 mr-2" />
                Gratis Offerte
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
              >
                046 202 1430
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde Vragen over Airco Plaatsen
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-sky-500 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Direct Contact voor Airco Plaatsing
            </h2>
            <p className="text-xl mb-8 text-sky-50">
              Bel, mail of WhatsApp voor advies over airco plaatsing in Venlo en de grensstreek
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="tel:0462021430"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="h-8 w-8 mb-2" />
                <span className="font-semibold">Bel Direct</span>
                <span className="text-sky-100">046 202 1430</span>
              </a>
              <a
                href="mailto:info@staycoolairco.nl"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="h-8 w-8 mb-2" />
                <span className="font-semibold">Mail Ons</span>
                <span className="text-sky-100">info@staycoolairco.nl</span>
              </a>
              <a
                href="https://wa.me/31636481054"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="h-8 w-8 mb-2" />
                <span className="font-semibold">WhatsApp</span>
                <span className="text-sky-100">06 36481054</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AircoPlaatsenVenlo;
