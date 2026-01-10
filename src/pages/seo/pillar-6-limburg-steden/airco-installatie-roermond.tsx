import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Mail, Calculator, TrendingUp, Star, Award, ShoppingBag } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const AircoInstallatieRoermond = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Limburg Steden', path: '/seo/pillar-6-limburg-steden' },
    { label: 'Airco Installatie Roermond' }
  ];

  const usps = [
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gassen Gecertificeerd",
      description: "Erkende installateurs voor professionele airco installatie in Roermond"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "60% Energiebesparing",
      description: "Bespaar tot 60% op energiekosten met warmtepomptechnologie"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "10 Jaar Garantie",
      description: "Premium merken met uitgebreide fabrieksgarantie"
    },
    {
      icon: <Star className="h-12 w-12 text-sky-500" />,
      title: "A-Merken Specialist",
      description: "Daikin, Mitsubishi, LG en Samsung Premium dealer"
    }
  ];

  const districts = [
    "Binnenstad", "Donderberg", "Kraaybeek", "Herten", "Kattenbroek",
    "Kerensheide", "Deken van Oppensingel", "Roerdalen", "Leeuwerik",
    "Merum", "Maasniel", "Asenray", "Designer Outlet", "Station",
    "Herten-Oost", "Merum-West", "Lindenheuvel", "Bruggehofwijk"
  ];

  const faqs = [
    {
      question: "Wat kost een airco installatie in Roermond?",
      answer: "De kosten voor airco installatie in Roermond variëren tussen €1.200 en €3.500 afhankelijk van het type systeem en de grootte van de ruimte. Een single-split systeem voor één ruimte kost gemiddeld €1.800, terwijl een multi-split systeem voor meerdere kamers tussen €2.500 en €5.000 ligt. Bij StayCool Airco krijgt u altijd een gratis offerte op maat voor uw woning in Roermond."
    },
    {
      question: "Leveren jullie ook airco's bij Designer Outlet Roermond?",
      answer: "Ja, StayCool Airco is specialist in zakelijke klimaatoplossingen en levert ook aan commerciële panden en bedrijven in de omgeving van Designer Outlet Roermond. We hebben ervaring met retail, horeca en kantoorruimtes. Onze systemen zijn geschikt voor zowel kleine winkels als grote commerciële ruimtes. Voor zakelijke offertes nemen we graag persoonlijk contact op."
    },
    {
      question: "Hoe lang duurt een airco installatie in Roermond?",
      answer: "Een standaard airco installatie in Roermond duurt gemiddeld 4 tot 6 uur voor een single-split systeem. Voor multi-split systemen of complexere installaties plannen we 1 tot 2 werkdagen. Onze ervaren monteurs werken efficiënt en netjes, waarbij we rekening houden met zowel moderne nieuwbouw als karakteristieke woningen in Roermond en de omliggende kernen."
    },
    {
      question: "Welk type airco is geschikt voor een Roermondse woning?",
      answer: "Voor moderne woningen in nieuwe wijken zoals Donderberg en Kraaybeek adviseren wij vaak multi-split systemen die meerdere ruimtes kunnen bedienen. Voor appartementen in de binnenstad zijn compacte single-split systemen ideaal. In nieuwbouwwijken met open plattegronden bieden we ook efficiënte vloer- of plafondmodellen aan. We adviseren u graag persoonlijk over de beste oplossing voor uw specifieke situatie."
    },
    {
      question: "Werken jullie ook in de kernen rondom Roermond?",
      answer: "Absoluut! StayCool Airco is actief in heel Roermond en de omliggende kernen zoals Swalmen, Maasniel, Herten en Leeuwerik. We kennen de lokale bouwstijlen en zijn vertrouwd met zowel stadswoningen als landelijke panden. Of u nu in een nieuwbouwwijk of een karakteristieke woning woont, we bieden altijd maatwerk."
    },
    {
      question: "Bieden jullie ook onderhoud voor airco's in Roermond?",
      answer: "Ja, StayCool Airco biedt uitgebreid onderhoudsservice voor alle airco systemen in Roermond en omgeving. Regelmatig onderhoud voorkomt storingen, verlengt de levensduur en garandeert optimale efficiency. We bieden onderhoudscontracten met jaarlijkse controle en reiniging. Voor noodgevallen hebben we een snelle service binnen 24 uur beschikbaar voor klanten in Roermond."
    },
    {
      question: "Kunnen airco's ook verwarmen in de winter?",
      answer: "Ja, moderne airco systemen met warmtepomptechnologie zijn uiterst geschikt voor verwarming. Met een rendement van 400-500% zijn ze veel efficiënter dan traditionele verwarming. In Roermond, met relatief milde winters, is een airco warmtepomp ideaal als hoofdverwarming of aanvulling op cv. U bespaart tot 60% op energiekosten en vermijdt hoge teruglevering aan het energienet bij zonnepanelen."
    },
    {
      question: "Wat zijn de voordelen van airco voor Roermondse woningen?",
      answer: "Airco biedt Roermondse bewoners comfort het hele jaar door: koeling tijdens warme zomers, efficiënte verwarming in de winter, en luchtfiltering voor betere luchtkwaliteit. Met 60% energiebesparing ten opzichte van traditionele verwarming en het vermijden van dure terugleververgoedingen bij zonnepanelen, is airco een slimme investering. Bovendien verhoogt het de waarde van uw woning aanzienlijk."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Installatie Roermond | Designer Outlet & Woningen | StayCool Airco"
        description="Airco installatie Roermond ✓ F-gassen gecertificeerd ✓ 60% besparing ✓ 10 jaar garantie ✓ Binnenstad, Donderberg, Designer Outlet. Gratis offerte!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          "name": "Airco Installatie Roermond",
          "description": "Professionele airco installatie en onderhoud in Roermond en omgeving. F-gassen gecertificeerd met 10 jaar garantie op premium A-merken.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "StayCool Airco",
            "telephone": "046-202-1430",
            "email": "info@staycoolairco.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Roermond",
              "addressRegion": "Limburg",
              "addressCountry": "NL"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Roermond",
            "containedInPlace": {
              "@type": "State",
              "name": "Limburg"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Airco Diensten Roermond",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residentiële airco installatie"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commerciële klimaatoplossingen"
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
              Airco Installatie Roermond
            </h1>

            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Professionele klimaatbeheersing voor woningen en bedrijven in Roermond. Van Designer Outlet tot woonwijken - F-gassen gecertificeerde installatie met 60% energiebesparing.
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
                60% Energiebesparing
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                10 Jaar Garantie
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Heel Roermond
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Waarom Kiezen voor StayCool Airco in Roermond?
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
                Airco Installatie in Roermond en Omgeving
              </h2>

              <p className="text-gray-600 mb-6">
                Roermond, de moderne handelsstad aan de Maas met het wereldberoemde Designer Outlet en groeiende woonwijken, vraagt om klimaatoplossingen die even dynamisch zijn als de stad zelf. Of u nu woont in een moderne nieuwbouwwoning in Donderberg, een appartement in de historische binnenstad, of een karakteristiek huis in Herten - StayCool Airco biedt de perfecte klimaatbeheersing voor uw situatie.
              </p>

              <p className="text-gray-600 mb-6">
                Met meer dan 15 jaar ervaring in airconditioning installatie in Roermond kennen we de unieke kenmerken van deze stad. Van compacte stadswoningen tot ruime nieuwbouwhuizen, en van winkelruimtes nabij Designer Outlet tot kantoorpanden in het centrum - wij leveren maatwerk voor elke locatie.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Onze Diensten in Roermond
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <ShoppingBag className="h-8 w-8 inline-block mr-2 text-sky-500" />
                Commerciële Klimaatoplossingen
              </h3>

              <p className="text-gray-600 mb-6">
                Roermond staat bekend om haar bruisende retailsector met Designer Outlet als absolute trekker. StayCool Airco is specialist in commerciële klimaatbeheersing voor winkels, horeca, kantoren en bedrijfspanden. We leveren systemen die zorgen voor optimaal comfort voor uw klanten en medewerkers, ongeacht de drukte of het seizoen.
              </p>

              <p className="text-gray-600 mb-6">
                Voor retailers in het centrum en bij Designer Outlet bieden we discrete, krachtige systemen die perfect integreren met uw winkelinterieur. Voor horecagelegenheden langs de Maasoevers en in de binnenstad leveren we oplossingen die ook tijdens piekuren voor aangenaam klimaat zorgen. Alle installaties worden uitgevoerd door F-gassen gecertificeerde monteurs volgens de hoogste kwaliteitsnormen.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Moderne Woonwijken
              </h3>

              <p className="text-gray-600 mb-6">
                Roermond groeit snel met moderne nieuwbouwwijken zoals Donderberg, Kraaybeek en Herten-Oost. Voor deze eigentijdse woningen bieden we geavanceerde multi-split systemen die perfect aansluiten bij de hedendaagse woningbouw. Deze systemen zijn energiezuinig, stil en bieden optimaal comfort voor het hele gezin. Met WiFi-bediening bedient u uw klimaatsysteem eenvoudig via uw smartphone.
              </p>

              <p className="text-gray-600 mb-6">
                Voor appartementencomplexen in de binnenstad en nabij het station bieden we compacte single-split systemen die perfect passen bij het stedelijk wonen. Deze systemen zijn geluidsarm en energiezuinig, ideaal voor moderne stadsappartementen.
              </p>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-sky-600" />
                  Maximale Besparing met Zonnepanelen
                </h4>
                <p className="text-gray-600">
                  Heeft u zonnepanelen op uw Roermondse woning? Dan is een airco warmtepomp de slimste investering. U vermijdt de lage terugleververgoeding (slechts €0,09 per kWh) door uw eigen opgewekte stroom te gebruiken voor verwarming. Met een rendement van 400-500% bespaart u tot 60% op energiekosten en maximaliseert u het rendement van uw zonnepanelen.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Wijken in Roermond waar We Werken
              </h2>

              <p className="text-gray-600 mb-6">
                StayCool Airco is actief in alle wijken en buurten van Roermond:
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
                Premium A-Merken voor Roermond
              </h2>

              <p className="text-gray-600 mb-6">
                Als erkend dealer van de meest betrouwbare airco merken bieden we alleen systemen van topkwaliteit:
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
                      <span>Marktleider in klimaattechnologie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Fluisterstil (19 dB) voor slaapkamers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>10 jaar volledige garantie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Perfect voor commerciële toepassingen</span>
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
                      <span>Japanse precisie en betrouwbaarheid</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Geavanceerde luchtfiltering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>A+++ energielabel</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Ideaal voor nieuwbouw</span>
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
                      <span>Innovatief design en technologie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>WiFi en app-bediening standaard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>10 jaar garantie op compressor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Perfect voor appartementen</span>
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
                      <span>Uitstekende prijs-kwaliteit verhouding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Betrouwbare technologie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>5 jaar fabrieksgarantie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Betaalbaar voor starters</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Het Installatieproces
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Gratis Adviesgesprek</h4>
                    <p className="text-gray-600">
                      We bezoeken uw locatie in Roermond voor een persoonlijk adviesgesprek. We bespreken uw wensen, bekijken de technische mogelijkheden en adviseren over het meest geschikte systeem voor uw situatie.
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
                      U ontvangt binnen 24 uur een gedetailleerde offerte met specificaties, installatieplanning en totaalprijs. Geen verborgen kosten, alles transparant en duidelijk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Professionele Installatie</h4>
                    <p className="text-gray-600">
                      Onze F-gassen gecertificeerde monteurs installeren uw airco systeem vakkundig en netjes. We werken volgens de hoogste kwaliteitsnormen en laten uw woning schoon achter.
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
                      Na installatie krijgt u uitgebreide uitleg over de bediening en functies. We bieden uitstekende nazorg en zijn altijd bereikbaar voor vragen of onderhoud.
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
              Klaar voor Perfecte Klimaatbeheersing in Roermond?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Vraag nu een gratis offerte aan en ontdek wat StayCool Airco voor u kan betekenen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone className="h-6 w-6 mr-2" />
                Neem Contact Op
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
              Veelgestelde Vragen over Airco in Roermond
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
              Direct Contact met Onze Specialisten
            </h2>
            <p className="text-xl mb-8 text-sky-50">
              Bel, mail of WhatsApp ons voor direct advies over airco installatie in Roermond
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

export default AircoInstallatieRoermond;
