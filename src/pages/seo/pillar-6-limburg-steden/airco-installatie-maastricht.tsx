import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Mail, Calculator, TrendingUp, Star, Award } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const AircoInstallatieMaastricht = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Limburg Steden', path: '/seo/pillar-6-limburg-steden' },
    { label: 'Airco Installatie Maastricht' }
  ];

  const usps = [
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gassen Gecertificeerd",
      description: "Erkende installateurs voor professionele airco installatie in Maastricht"
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
    "Centrum", "Wyck", "Jekerkwartier", "Statenkwartier", "Villapark",
    "Daalhof", "Wolder", "Sint Pieter", "Mariaberg", "Heugemerveld",
    "Biesland", "Malberg", "Malpertuis", "Oud-Caberg", "Campagne",
    "Wyckerpoort", "Kommelkwartier", "Boschstraatkwartier", "Wittevrouwenveld", "Limmel"
  ];

  const faqs = [
    {
      question: "Wat kost een airco installatie in Maastricht?",
      answer: "De kosten voor airco installatie in Maastricht variëren tussen €1.200 en €3.500 afhankelijk van het type systeem en de grootte van de ruimte. Een single-split systeem voor één ruimte kost gemiddeld €1.800, terwijl een multi-split systeem voor meerdere kamers tussen €2.500 en €5.000 ligt. Bij StayCool Airco krijgt u altijd een gratis offerte op maat voor uw woning in Maastricht."
    },
    {
      question: "Hoe lang duurt een airco installatie in Maastricht?",
      answer: "Een standaard airco installatie in Maastricht duurt gemiddeld 4 tot 6 uur voor een single-split systeem. Voor multi-split systemen of complexere installaties plannen we 1 tot 2 werkdagen. Onze ervaren monteurs werken efficiënt en netjes, waarbij we rekening houden met monumentale panden in het Maastrichtse centrum en karakteristieke stadhuizen in wijken als Wyck en het Jekerkwartier."
    },
    {
      question: "Welke vergunningen zijn nodig voor airco in Maastricht?",
      answer: "Voor airco installatie in Maastricht gelden specifieke regels. In beschermde stadsgezichten zoals het centrum en Wyck kan een omgevingsvergunning nodig zijn voor de buitenunit. Voor monumentale panden is altijd overleg met de gemeente vereist. StayCool Airco adviseert u graag over de benodigde vergunningen en helpt bij het aanvraagproces bij de gemeente Maastricht."
    },
    {
      question: "Leveren jullie airco's in heel Maastricht?",
      answer: "Ja, StayCool Airco levert en installeert airconditioning in heel Maastricht en omliggende kernen. Van het historische centrum tot moderne wijken als Biesland, Malberg en Heugemerveld, en van stadsdorpen als Wolder tot het glooiende heuvelland rond Sint Pieter. Onze monteurs kennen de lokale bouwvoorschriften en zijn vertrouwd met zowel moderne nieuwbouw als karakteristieke Maastrichtse panden."
    },
    {
      question: "Welk type airco is geschikt voor een Maastrichts stadshuis?",
      answer: "Voor karakteristieke Maastrichtse stadshuizen in het centrum, Wyck of het Jekerkwartier adviseren wij vaak een multi-split systeem. Dit systeem kan meerdere binnenunits op verschillende verdiepingen voorzien van koeling en verwarming, met slechts één buitenunit. Voor monumentale panden kiezen we discreet geplaatste units die het karakter van het gebouw respecteren. In moderne nieuwbouwwijken als Biesland bieden we ook efficiënte single-split oplossingen."
    },
    {
      question: "Bieden jullie ook onderhoud voor airco's in Maastricht?",
      answer: "Absoluut! StayCool Airco biedt uitgebreid onderhoudsservice voor alle airco systemen in Maastricht. Regelmatig onderhoud voorkomt storingen, verlengt de levensduur en garandeert optimale efficiency. We bieden onderhoudscontracten met jaarlijkse controle en reiniging. Voor noodgevallen hebben we een snelle service binnen 24 uur beschikbaar voor klanten in Maastricht en omgeving."
    },
    {
      question: "Kunnen airco's ook verwarmen in de winter?",
      answer: "Ja, moderne airco systemen met warmtepomptechnologie zijn uiterst geschikt voor verwarming. Met een rendement van 400-500% zijn ze veel efficiënter dan traditionele verwarming. In Maastricht, met relatief milde winters, is een airco warmtepomp ideaal als hoofdverwarming of aanvulling op cv. U bespaart tot 60% op energiekosten en vermijdt hoge teruglevering aan het energienet bij zonnepanelen."
    },
    {
      question: "Wat zijn de voordelen van airco voor Maastrichtse woningen?",
      answer: "Airco biedt Maastrichtse bewoners comfort het hele jaar door: koeling tijdens warme zomers, efficiënte verwarming in de winter, en luchtfiltering voor betere luchtkwaliteit. Met 60% energiebesparing ten opzichte van traditionele verwarming en het vermijden van dure terugleververgoedingen bij zonnepanelen, is airco een slimme investering voor Maastrichtse huishoudens. Bovendien verhoogt het de waarde van uw woning aanzienlijk."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Installatie Maastricht | Klimaatbeheersing Hoofdstad Limburg | StayCool"
        description="Airco installatie Maastricht ✓ F-gassen gecertificeerd ✓ 60% besparing ✓ 10 jaar garantie ✓ Centrum, Wyck ✓ Gratis offerte!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          "name": "Airco Installatie Maastricht",
          "description": "Professionele airco installatie en onderhoud in Maastricht en omgeving. F-gassen gecertificeerd met 10 jaar garantie op premium A-merken.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "StayCool Airco",
            "telephone": "046-202-1430",
            "email": "info@staycoolairco.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Maastricht",
              "addressRegion": "Limburg",
              "addressCountry": "NL"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Maastricht",
            "containedInPlace": {
              "@type": "State",
              "name": "Limburg"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Airco Diensten Maastricht",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Single-split airco installatie"
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
              Airco Installatie Maastricht
            </h1>

            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Professionele klimaatbeheersing voor de hoofdstad van Limburg. F-gassen gecertificeerde installatie met 60% energiebesparing en 10 jaar garantie op premium A-merken.
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
                Heel Maastricht
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Waarom Kiezen voor StayCool Airco in Maastricht?
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
                Airco Installatie in het Hart van Limburg
              </h2>

              <p className="text-gray-600 mb-6">
                Maastricht, de bruisende hoofdstad van Limburg met haar karakteristieke architectuur, historische binnenstad en moderne wijken, vraagt om klimaatoplossingen die even veelzijdig zijn als de stad zelf. Of u nu woont in een monumentaal pand in het centrum, een stijlvol stadshuis in Wyck, of een moderne nieuwbouwwoning in Biesland - StayCool Airco biedt de perfecte klimaatbeheersing voor uw situatie.
              </p>

              <p className="text-gray-600 mb-6">
                Met meer dan 15 jaar ervaring in airconditioning installatie in Maastricht kennen we de unieke uitdagingen van deze prachtige stad. Van de smalle straatjes in het Jekerkwartier tot de ruime villa's in het Villapark, en van studentenwoningen nabij de Universiteit Maastricht tot zakelijke panden in de winkelstraten - wij leveren maatwerk voor elke locatie.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Onze Diensten in Maastricht
              </h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Installatie in Historische Panden
              </h3>

              <p className="text-gray-600 mb-6">
                Het Maastrichtse centrum staat bekend om zijn monumentale panden en beschermde stadsgezichten. Voor deze bijzondere locaties bieden wij discrete airconditioningsystemen die perfect integreren met de historische architectuur. Onze F-gassen gecertificeerde monteurs hebben uitgebreide ervaring met installaties in monumentale panden waarbij we het karakter en de uitstraling van het gebouw behouden.
              </p>

              <p className="text-gray-600 mb-6">
                We werken nauw samen met de gemeente Maastricht voor het verkrijgen van de juiste vergunningen en zorgen ervoor dat alle installaties voldoen aan de strenge eisen die gelden voor beschermde stadsgezichten. Of het nu gaat om een grachtenpand aan de Maas, een karakteristieke woning in de Stokstraatkwartier, of een gerenoveerd pand in Wyck - we vinden altijd een passende oplossing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Moderne Nieuwbouwwijken
              </h3>

              <p className="text-gray-600 mb-6">
                Voor moderne nieuwbouwwijken in Maastricht zoals Biesland, Malberg en Heugemerveld bieden we geavanceerde multi-split systemen die perfect aansluiten bij de hedendaagse woningbouw. Deze systemen zijn energiezuinig, stil en bieden optimaal comfort voor het hele gezin. Met WiFi-bediening bedient u uw klimaatsysteem eenvoudig via uw smartphone, waar u ook bent.
              </p>

              <div className="bg-sky-50 border-l-4 border-sky-500 p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-sky-600" />
                  Energiebesparing met Zonnepanelen
                </h4>
                <p className="text-gray-600">
                  Heeft u zonnepanelen op uw Maastrichtse woning? Dan is een airco warmtepomp de slimste investering. U vermijdt de lage terugleververgoeding (slechts €0,09 per kWh) door uw eigen opgewekte stroom te gebruiken voor verwarming. Met een rendement van 400-500% bespaart u tot 60% op energiekosten en vergroot u uw onafhankelijkheid van het energienet.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Wijken in Maastricht waar We Werken
              </h2>

              <p className="text-gray-600 mb-6">
                StayCool Airco is actief in alle wijken en buurten van Maastricht:
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
                Premium A-Merken voor Maastricht
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
                      We bezoeken uw locatie in Maastricht voor een persoonlijk adviesgesprek. We bespreken uw wensen, bekijken de technische mogelijkheden en adviseren over het meest geschikte systeem voor uw situatie.
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
              Klaar voor Perfecte Klimaatbeheersing in Maastricht?
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
              Veelgestelde Vragen over Airco in Maastricht
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
              Bel, mail of WhatsApp ons voor direct advies over airco installatie in Maastricht
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

export default AircoInstallatieMaastricht;
