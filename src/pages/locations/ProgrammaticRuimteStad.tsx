import React, { useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin,
  Phone,
  CheckCircle,
  Star,
  ChevronDown,
  ArrowRight,
  Home,
  Thermometer,
  Wind,
  Shield,
  Zap,
  Clock,
} from 'lucide-react';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import Contact from '../../components/Contact';
import { getProgrammaticLocationBySlug, programmaticLocations } from '../../data/programmaticLocations';
import { getRuimteBySlug } from '../../data/programmaticRuimteStad';

export default function ProgrammaticRuimteStadPage() {
  const { ruimte: ruimteSlug, city: citySlug } = useParams<{ ruimte: string; city: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!ruimteSlug || !citySlug) {
    return <Navigate to="/werkgebied" replace />;
  }

  const ruimte = getRuimteBySlug(ruimteSlug);
  const city = getProgrammaticLocationBySlug(citySlug);

  if (!ruimte || !city) {
    return <Navigate to="/werkgebied" replace />;
  }

  // Build nearby cities: pick up to 3 cities in the same region, excluding current city
  const nearbyCities = programmaticLocations
    .filter((loc) => loc.region === city.region && loc.slug !== city.slug)
    .slice(0, 3);

  const genericCityFaqs = [
    {
      question: `Hoe snel kunt u in ${city.city} installeren?`,
      answer: `Voor ${city.city} plannen wij doorgaans binnen 1 tot 3 weken een installatieafspraak. Tijdens drukke hitteperiodes kan de wachttijd iets oplopen, maar we doen ons best om u zo snel mogelijk te helpen. Neem contact op voor de actuele beschikbaarheid.`,
    },
    {
      question: `Zijn er vergunningen nodig in ${city.city}?`,
      answer: `Voor de meeste standaard split-unit installaties in ${city.city} is geen bouwvergunning nodig, mits de buitenunit niet aan de straatzijde of op een monument geplaatst wordt. In geval van beschermd stadsgezicht of monumentale panden (wat in ${city.city} voorkomt bij ${city.localConstraint}) adviseren wij altijd vooraf de gemeente te raadplegen. Wij helpen u hierbij.`,
    },
  ];

  const allFaqs = [...ruimte.faqs, ...genericCityFaqs];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          Airco {ruimte.name} {city.city} | Installatie &amp; Advies | StayCool Airco
        </title>
        <meta
          name="description"
          content={`Op zoek naar airco voor uw ${ruimte.nameArticle} in ${city.city}? StayCool Airco installeert vakkundig. \u2713 F-gassen gecertificeerd \u2713 Binnen 1-3 weken \u2713 Gratis offerte`}
        />
        <link
          rel="canonical"
          href={`https://staycoolairco.nl/airco/${ruimte.slug}/${city.slug}`}
        />
      </Helmet>

      <SchemaMarkup
        type="Service"
        data={{
          name: `Airco ${ruimte.name} ${city.city}`,
          description: `Professionele airco installatie voor ${ruimte.nameArticle} in ${city.city}. F-gassen gecertificeerd, binnen 1-3 weken geïnstalleerd.`,
          areaServed: city.city,
        }}
        location={{
          city: city.city,
          region: city.region,
          postalCode: city.postalCodes,
        }}
      />

      <SchemaMarkup
        type="FAQPage"
        data={{
          questions: allFaqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          })),
        }}
        location={{ city: city.city, region: city.region }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-sky-700 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { label: city.city, path: `/${city.slug}` },
              { label: `Airco ${ruimte.name}`, path: `/airco/${ruimte.slug}/${city.slug}` },
            ]}
          />

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Airco voor uw {ruimte.name} in {city.city}
              </h1>
              <p className="text-xl text-sky-100 mb-8">{ruimte.keyBenefit}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all shadow-lg"
                >
                  Gratis Offerte
                </Link>
                <a
                  href="tel:+31462021430"
                  className="border-2 border-white text-white hover:bg-white hover:text-sky-900 font-bold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Bel 046 202 1430
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 text-sky-100 text-sm font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  F-gassen gecertificeerd
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {city.installationCount}+ installaties
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  5 jaar garantie
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Thermometer className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-sky-100 text-xs mb-1">Typisch vermogen</p>
                  <p className="text-white font-bold">{ruimte.typicalKwRange}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Home className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <p className="text-sky-100 text-xs mb-1">Oppervlakte</p>
                  <p className="text-white font-bold">{ruimte.typicalM2Range}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-sky-100 text-xs mb-1">Installatie</p>
                  <p className="text-white font-bold">1–3 weken</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-sky-100 text-xs mb-1">Beoordeling</p>
                  <p className="text-white font-bold">4.9 / 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Waarom airco */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Waarom airco in uw {ruimte.name}?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl">{ruimte.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ruimte.useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Vermogen & Capaciteit */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vermogen &amp; Capaciteit</h2>
          <p className="text-lg text-gray-600 mb-8">
            Voor {ruimte.namePlural} van <strong>{ruimte.typicalM2Range}</strong> adviseren wij
            doorgaans een koelvermogen van <strong>{ruimte.typicalKwRange}</strong>. Het exacte
            vermogen hangt af van isolatiewaarde, zonbelasting en het woningtype in {city.city}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ruimte.installationTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-800">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Lokale expertise */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lokale expertise in {city.city}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                In {city.city} ({city.region}) installeren wij al{' '}
                <strong>{city.installationCount}+</strong> airco systemen. Wij kennen de lokale
                woningtypen, bouwkundige uitdagingen en de beste installatieoplossingen voor uw
                buurt.
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-blue-800 mb-1">Woningprofiel</p>
                  <p className="text-gray-700">{city.housingMix}</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="text-sm font-semibold text-orange-800 mb-1">Lokaal aandachtspunt</p>
                  <p className="text-gray-700">{city.localConstraint}</p>
                </div>
              </div>
            </div>

            {nearbyCities.length > 0 && (
              <div>
                <p className="text-gray-700 font-semibold mb-4">
                  Ook actief in nabijgelegen plaatsen:
                </p>
                <div className="space-y-3">
                  {nearbyCities.map((nearbyCity) => (
                    <Link
                      key={nearbyCity.slug}
                      to={`/airco/${ruimte.slug}/${nearbyCity.slug}`}
                      className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-all group"
                    >
                      <span className="flex items-center gap-2 text-gray-800 font-medium">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        Airco {ruimte.name} {nearbyCity.city}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section: Aanbevolen features */}
      <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Aanbevolen features voor uw {ruimte.name}
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Bij de keuze van een airco voor {ruimte.nameArticle} letten wij op deze specifieke
            functionaliteiten:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ruimte.recommendedFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-6 h-6 text-sky-600" />
                </div>
                <p className="text-gray-800 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Kosten & Planning */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Kosten &amp; Planning</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Prijsindicatie</h3>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 mb-2">
                €1.500 – €3.000
              </p>
              <p className="text-gray-600 mb-4">
                All-in prijs inclusief materialen, installatie en inbedrijfstelling voor{' '}
                {ruimte.nameArticle} in {city.city}.
              </p>
              <Link
                to="/airco-installatie-prijs"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
              >
                Bekijk volledige prijsoverzicht
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Planning</h3>
              </div>
              <p className="text-3xl font-extrabold text-gray-900 mb-2">1–3 weken</p>
              <p className="text-gray-600 mb-4">
                Na akkoord op de offerte plannen wij de installatie in {city.city} doorgaans
                binnen 1 tot 3 weken. Wij werken op werkdagen en kunnen in overleg ook op
                zaterdag installeren.
              </p>
              <a
                href="tel:+31462021430"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
              >
                <Phone className="w-4 h-4" />
                Bel voor beschikbaarheid
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Veelgestelde vragen — Airco {ruimte.name} {city.city}
          </h2>

          <div className="space-y-4">
            {allFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-sky-900 to-blue-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Klaar voor een airco in uw {ruimte.name} in {city.city}?
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Vraag vandaag nog een gratis offerte aan. Onze specialisten bezoeken u gratis thuis
            in {city.city} voor advies op maat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              Gratis Offerte Aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/airco-installatie-limburg"
              className="border-2 border-white text-white hover:bg-white hover:text-sky-900 font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Meer over installatie in Limburg
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Direct contact — Airco {ruimte.name} {city.city}
          </h2>
          <p className="text-gray-600 mb-8">
            Vul het formulier in en wij nemen binnen 24 uur contact met u op voor een vrijblijvende
            offerte voor uw {ruimte.nameArticle} in {city.city}.
          </p>
          <Contact />
        </div>
      </section>
    </>
  );
}
