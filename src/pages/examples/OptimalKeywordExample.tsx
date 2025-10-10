import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Shield, Star, CheckCircle, ArrowRight } from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import SchemaMarkup from '../../components/SchemaMarkup';
import Contact from '../../components/Contact';

/**
 * ✨ VOORBEELD PAGINA: OPTIMALE KEYWORD IMPLEMENTATIE
 *
 * Deze pagina demonstreert best practices voor SEO keyword targeting:
 *
 * ✅ DO's:
 * - Keywords in H1, H2, H3 headings (niet alleen meta tags)
 * - Natuurlijke integratie in content (geen keyword stuffing)
 * - Long-tail keywords: "airco installateur bij mij in de buurt roermond"
 * - Semantic variations: airco, airconditioning, klimaatbeheersing, koelsysteem
 * - Location-specific content met postcodes en wijken
 * - FAQ's met vraag-gebaseerde keywords
 * - Internal linking met keyword anchor tekst
 *
 * ❌ DON'Ts:
 * - Geen meta keywords tag (Google gebruikt het niet sinds 2009)
 * - Geen keyword repetitie zonder natuurlijke context
 * - Geen hidden text of keyword stuffing
 *
 * 📊 TARGET KEYWORDS voor deze pagina:
 * Primary: airco installateur roermond, airco installatie roermond
 * Secondary: klimaatbeheersing roermond, airconditioning monteur roermond
 * Long-tail: airco installateur bij mij in de buurt roermond, kosten airco installeren roermond 2025
 */

export default function OptimalKeywordExample() {
  // SEO data
  const city = "Roermond";
  const region = "Limburg";
  const postalCodes = "6041, 6042, 6043, 6044, 6045";
  const neighborhoods = ["Roermond Centrum", "Herten", "Donderberg", "Binnenstad"];

  const testimonials = [
    {
      name: "Marcel van Dijk",
      rating: 5,
      comment: "Fantastische service! De airco was binnen één dag geïnstalleerd en werkt perfect. Aanrader!",
      date: "2025-01-15",
      neighborhood: "Roermond Centrum"
    },
    {
      name: "Linda Smeets",
      rating: 5,
      comment: "Professionele installatie en duidelijke uitleg. Bespaar nu al 40% op mijn energierekening.",
      date: "2025-02-20",
      neighborhood: "Herten"
    }
  ];

  const faqs = [
    {
      question: "Wat kost airco installatie in Roermond?",
      answer: "De kosten voor airco installatie in Roermond variëren tussen €1.650 en €3.500, afhankelijk van het type airco, merk en complexiteit van de installatie. Bij StayCool krijgt u altijd eerst een gratis offerte aan huis zonder verplichtingen."
    },
    {
      question: "Hoe snel kan een airco geïnstalleerd worden in Roermond?",
      answer: "In de meeste gevallen kunnen wij uw airco binnen 48 uur na offerte installeren in Roermond en omgeving. Voor spoedinstallaties bieden wij een 24-uurs service."
    },
    {
      question: "Welke postcodes in Roermond bedienen jullie?",
      answer: "Wij bedienen alle postcodes in Roermond: 6041, 6042, 6043, 6044, 6045. Ook wijken zoals Roermond Centrum, Herten, Donderberg en de Binnenstad vallen binnen ons werkgebied."
    },
    {
      question: "Is StayCool een erkende airco installateur in Roermond?",
      answer: "Ja, StayCool Airco is F-gassen gecertificeerd en een officiële dealer van A-merken zoals Daikin en Mitsubishi. Wij hebben meer dan 500+ tevreden klanten in Limburg en werken volgens STEK-normen."
    }
  ];

  // Page title and description with long-tail keywords
  const pageTitle = `Airco Installateur Roermond | Bij u in de Buurt | StayCool Airco`;
  const pageDescription = `Zoekt u een airco installateur bij u in de buurt in Roermond? ✓ Erkend & F-gassen gecertificeerd ✓ Gratis advies ✓ Installatie binnen 48 uur. Meer dan 500+ tevreden klanten in ${region}. Vraag direct een offerte aan!`;

  return (
    <>
      <MetaTags
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`https://staycoolairco.nl/airco-installatie/${city.toLowerCase()}`}
        ogImage="https://staycoolairco.nl/images/airco-roermond.jpg"
        type="service"
        serviceType="Airco Installatie"
        locationInfo={{
          city,
          region,
          postalCode: postalCodes
        }}
        faqs={faqs}
        reviews={testimonials.map(t => ({
          author: t.name,
          rating: t.rating,
          reviewBody: t.comment,
          datePublished: t.date
        }))}
        speakableContent={[
          `StayCool Airco is uw lokale airco installateur in ${city}`,
          `Wij installeren airconditioners in ${region} met meer dan 500+ tevreden klanten`,
          `F-gassen gecertificeerd en erkend door STEK`,
          `Gratis advies en offerte aan huis in ${city}`,
          `Installatie binnen 48 uur mogelijk in heel ${city}`
        ]}
      />

      <SchemaMarkup
        type="Service"
        data={{
          name: `Airco Installatie ${city}`,
          description: pageDescription,
        }}
        location={{
          city,
          region,
          postalCode: postalCodes,
          latitude: 51.1942,
          longitude: 5.9877
        }}
      />

      {/* Hero Section - H1 met primary keyword */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* 🎯 H1 - Primary Keyword + Location */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Airco Installateur Roermond
              <span className="block text-blue-300 mt-2">Bij u in de Buurt</span>
            </h1>

            {/* Supporting text with semantic keywords */}
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Professionele airconditioning installatie, onderhoud en reparatie door erkende
              klimaatbeheersing specialist in heel Roermond
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-300" />
                <span>F-gassen Gecertificeerd</span>
              </div>
              <div className="flex items-center">
                <Star className="h-6 w-6 mr-2 text-yellow-400" />
                <span>500+ Tevreden Klanten</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-blue-300" />
                <span>Binnen 48 uur</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:046-202-1430"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                046-202-1430
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-bold text-lg transition-colors"
              >
                Gratis Offerte Aanvragen
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - H2 met secondary keywords */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* 🎯 H2 - Long-tail keyword */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Erkende Airco Installateur bij u in de Buurt in Roermond
            </h2>

            {/* Natural keyword integration in body text */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Bent u op zoek naar een <strong>betrouwbare airco installateur in Roermond</strong>?
                StayCool Airco is uw lokale specialist voor professionele klimaatbeheersing in
                heel Roermond en omstreken. Als F-gassen gecertificeerd <strong>airco bedrijf</strong> met
                meer dan 500+ tevreden klanten staan wij garant voor vakkundige installatie en
                uitstekende service.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                Of u nu woont in Roermond Centrum, Herten, Donderberg of een andere wijk - onze ervaren
                <strong> airco monteurs</strong> staan voor u klaar met snelle en professionele installatie
                van alle A-merk airconditioners zoals Daikin, Mitsubishi Electric en Samsung.
              </p>
            </div>

            {/* 🎯 H3 - Service-specific keywords */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                  Airco Installatie Roermond
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>Split-unit airco</strong> installatie vanaf €1.650</li>
                  <li>• <strong>Multi-split systemen</strong> voor meerdere kamers</li>
                  <li>• Vloer en plafond airconditioning</li>
                  <li>• Inclusief afvoer condenswater en elektrische aansluiting</li>
                  <li>• Gratis vooronderzoek en advies aan huis</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                  Airco Onderhoud & Reparatie
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Jaarlijks <strong>preventief onderhoud</strong> airco</li>
                  <li>• Spoedservice voor storingen (24/7)</li>
                  <li>• Filter reiniging en koudemiddel bijvullen</li>
                  <li>• Reparatie van alle merken airconditioners</li>
                  <li>• Onderhoudscontract met korting</li>
                </ul>
              </div>
            </div>

            {/* Location-specific content - Postcodes */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                Airco Service in Alle Wijken van Roermond
              </h3>
              <p className="text-gray-700 mb-4">
                Als lokale <strong>airco specialist dichtbij</strong> bedienen wij alle postcodes en wijken in Roermond:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Postcodes Roermond:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Airco installatie 6041</strong> - Roermond Centrum</li>
                    <li>• <strong>Klimaatbeheersing 6042</strong> - Herten</li>
                    <li>• <strong>Airconditioning 6043</strong> - Donderberg</li>
                    <li>• <strong>Airco montage 6044</strong> - Binnenstad</li>
                    <li>• <strong>Airco plaatsen 6045</strong> - Roermond Noord</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ook in wijken:</h4>
                  <ul className="text-gray-700 space-y-1">
                    {neighborhoods.map((neighborhood, idx) => (
                      <li key={idx}>• {neighborhood}</li>
                    ))}
                    <li>• Maasniel</li>
                    <li>• St. Jacob</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Long-tail keyword section - Question-based */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wat Kost Airco Installatie in Roermond?
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  De <strong>kosten voor airco installatie in Roermond</strong> zijn afhankelijk van verschillende factoren:
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• <strong>Type airco:</strong> Split-unit (€1.650-€2.500) of Multi-split (€3.000-€5.000)</li>
                  <li>• <strong>Merk:</strong> A-merken zoals Daikin, Mitsubishi (kwaliteit & garantie)</li>
                  <li>• <strong>Capaciteit:</strong> BTU waarde bepaalt vermogen (2.5kW - 7kW)</li>
                  <li>• <strong>Installatie complexiteit:</strong> Leidinglengte, doorvoeren, elektrische aanpassingen</li>
                  <li>• <strong>Extra's:</strong> Wifi module, Design binnenunit, Geluidsarme buitenunit</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-900 mb-2">💡 Gratis Offerte op Maat</p>
                  <p className="text-gray-700">
                    Bij StayCool krijgt u altijd eerst een gratis adviesgesprek en offerte aan huis.
                    Wij maken de offerte direct ter plekke, zodat u meteen duidelijkheid heeft over de
                    exacte <strong>prijs airco installeren Roermond</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Social proof - Reviews with location */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ervaringen van Klanten in Roermond
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{testimonial.rating}/5</span>
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                    <div className="text-sm text-gray-600">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>{testimonial.neighborhood}, Roermond</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section - Question-based keywords */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Veelgestelde Vragen over Airco Installatie Roermond
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal linking with keyword anchor text */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-bold mb-4">
                Meer Informatie over Airco Installatie
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/products" className="flex items-center text-blue-100 hover:text-white">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Bekijk onze <strong className="mx-1">Airco merken en modellen</strong>
                </Link>
                <Link to="/kennisbank/hoe-werkt-airco" className="flex items-center text-blue-100 hover:text-white">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Lees hoe een <strong className="mx-1">airco precies werkt</strong>
                </Link>
                <Link to="/kennisbank/verwarmen-met-airco" className="flex items-center text-blue-100 hover:text-white">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Ontdek <strong className="mx-1">verwarmen met airco</strong> voordelen
                </Link>
                <Link to="/airco-service-limburg" className="flex items-center text-blue-100 hover:text-white">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Bekijk ons <strong className="mx-1">onderhoud en service</strong> aanbod
                </Link>
              </div>
            </div>

            {/* Nearby locations - Local SEO */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ook Airco Installatie in Omliggende Plaatsen
              </h2>
              <p className="text-gray-700 mb-6">
                Naast Roermond bedienen wij ook de volgende steden in Limburg met professionele
                airconditioning diensten:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { name: 'Weert', distance: '15 km' },
                  { name: 'Venlo', distance: '25 km' },
                  { name: 'Sittard', distance: '30 km' },
                  { name: 'Maastricht', distance: '45 km' },
                  { name: 'Heerlen', distance: '50 km' },
                  { name: 'Echt', distance: '20 km' },
                  { name: 'Venray', distance: '30 km' },
                  { name: 'Geleen', distance: '35 km' }
                ].map((location, idx) => (
                  <Link
                    key={idx}
                    to={`/airco-installatie/${location.name.toLowerCase()}`}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition-colors"
                  >
                    <p className="font-semibold text-gray-900">{location.name}</p>
                    <p className="text-sm text-gray-600">{location.distance}</p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Klaar voor Professionele Airco Installatie in Roermond?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Ontvang binnen 24 uur een gratis offerte aan huis. Geen verplichtingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:046-202-1430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 hover:bg-orange-50 rounded-lg font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel Direct: 046-202-1430
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 hover:bg-orange-800 rounded-lg font-bold text-lg transition-colors"
            >
              Aanvragen Offerte
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
