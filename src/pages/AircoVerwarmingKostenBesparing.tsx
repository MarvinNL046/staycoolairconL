import React from 'react';
import { Helmet } from 'react-helmet-async';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, PiggyBank, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import SchemaMarkup from '../components/SchemaMarkup';
import LazyImage from '../components/LazyImage';
import CompactGoogleReviews from '../components/CompactGoogleReviews';

export default function AircoVerwarmingKostenBesparing() {
  return (
    <>
      <SchemaMarkup 
        type="Article"
        data={{
          headline: "Bespaar tot 60% op Verwarmingskosten met een Airco | StayCool",
          description: "Ontdek hoe u tot 60% kunt besparen op uw verwarmingskosten met een moderne airco. Inclusief ISDE subsidie tot €2.000. ✓ Energiezuinig ✓ Werkt tot -15°C ✓ Professionele installatie",
          image: "https://staycoolairco.nl/images/logo.svg",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://staycoolairco.nl/airco-verwarming-kosten-besparing"
          },
          articleBody: `
            Verwarmen met een airco is de slimme manier om te besparen op uw energiekosten.
            Met moderne warmtepomptechnologie bespaart u tot 60% op uw verwarmingskosten.
            Werkt efficiënt tot -15°C en is een duurzame oplossing voor uw woning.
          `,
          keywords: "verwarmen met airco, airco verwarming, warmtepomp airco, energiezuinig verwarmen, duurzame verwarming",
          articleSection: "Verwarming",
          wordCount: 1500,
          inLanguage: "nl-NL"
        }}
      />
      <Helmet>
        <title>Bespaar tot 60% op Verwarmingskosten met een Airco | StayCool</title>
        <meta 
          name="description" 
          content="Ontdek hoe u tot 60% kunt besparen op uw verwarmingskosten met een moderne airco. Inclusief ISDE subsidie tot €2.000. ✓ Energiezuinig ✓ Werkt tot -15°C ✓ Professionele installatie"
        />
        <meta 
          name="keywords" 
          content="verwarmen met airco, airco verwarming, warmtepomp airco, energiezuinig verwarmen, duurzame verwarming"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-2 inline-block mb-4"
              >
                <span className="text-blue-100 font-medium">✨ Inclusief ISDE subsidie tot €2.000</span>
              </m.div>
              <m.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Bespaar tot 60% op Uw Verwarmingskosten
              </m.h1>
              <m.p 
                className="text-xl md:text-2xl mb-12 text-blue-100 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Verwarm uw huis slim en efficiënt met een moderne airco
              </m.p>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-center gap-6"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Bereken Uw Besparing
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all"
                >
                  Bel Direct: 046 202 1430
                </a>
              </m.div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="relative bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <ThermometerSun className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">60% Energiebesparing</h3>
                <p className="text-gray-600">Bespaar direct op uw energierekening met efficiënte warmtepomptechnologie</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <PiggyBank className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">€2.000 Subsidie</h3>
                <p className="text-gray-600">Profiteer van ISDE subsidie en maak uw investering nog aantrekkelijker</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">5 Jaar Garantie</h3>
                <p className="text-gray-600">Zekerheid met professionele installatie en uitgebreide garantie</p>
              </m.div>
            </div>
          </div>
        </div>

        {/* Main Benefits */}
        <div className="relative bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Waarom Verwarmen met een Airco?
              </h2>
              <p className="text-gray-600 text-lg">
                Ontdek de voordelen van een moderne airco als verwarmingssysteem
              </p>
            </m.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="bg-blue-50 rounded-xl p-4 inline-flex mb-6">
                  <PiggyBank className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Directe Kostenbesparing
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </span>
                    <span className="text-gray-600 text-lg">Tot 60% lagere verwarmingskosten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </span>
                    <span className="text-gray-600 text-lg">ISDE subsidie tot €2.000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </span>
                    <span className="text-gray-600 text-lg">Terugverdientijd 3-5 jaar</span>
                  </li>
                </ul>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="bg-blue-50 rounded-xl p-4 inline-flex mb-6">
                  <ThermometerSun className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Superieure Prestaties
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </span>
                    <span className="text-gray-600 text-lg">Effectief tot -15°C buiten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </span>
                    <span className="text-gray-600 text-lg">Snelle opwarming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-sm">✓</span>
                    </span>
                    <span className="text-gray-600 text-lg">Ook koeling in de zomer</span>
                  </li>
                </ul>
              </m.div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.h2 
              className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Hoe Werkt Het?
            </m.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Gratis Advies</h3>
                <p className="text-blue-100">Onze experts berekenen uw besparingspotentieel</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Snelle Installatie</h3>
                <p className="text-blue-100">Professionele montage binnen één dag</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Direct Besparen</h3>
                <p className="text-blue-100">Geniet van lagere energiekosten</p>
              </m.div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Veelgestelde Vragen
              </h2>
              <p className="text-gray-600 text-lg">
                Alles wat u moet weten over verwarmen met een airco
              </p>
            </m.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Werkt een Airco Ook bij Lage Temperaturen?</h3>
                <p className="text-gray-600 text-lg">
                  Ja, moderne aircosystemen werken efficiënt tot -15°C buitentemperatuur. Ze zijn specifiek ontworpen voor het Nederlandse klimaat en leveren betrouwbare warmte, zelfs tijdens koude winterdagen.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Hoe Hoog is de Energiebesparing?</h3>
                <p className="text-gray-600 text-lg">
                  Met een moderne airco bespaart u tot 60% op verwarmingskosten. Voor elke kWh elektriciteit produceert het systeem 3-4 kWh aan warmte, wat resulteert in significante besparingen.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Is de Installatie Complex?</h3>
                <p className="text-gray-600 text-lg">
                  Nee, onze professionele monteurs installeren uw airco meestal binnen één dag. We zorgen voor een nette installatie zonder grote verbouwingen of overlast.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Welke Subsidies Zijn Beschikbaar?</h3>
                <p className="text-gray-600 text-lg">
                  Via de ISDE-regeling kunt u tot €2.000 subsidie ontvangen. Onze adviseurs helpen u graag bij het aanvragen van alle beschikbare subsidies.
                </p>
              </m.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Begin Vandaag Nog met Besparen
              </h2>
              <p className="text-xl mb-12 text-blue-100 font-light">
                Elke dag dat u wacht, betaalt u teveel voor uw verwarming. <br />
                <span className="font-medium">Ontdek hoeveel u kunt besparen</span> met een gratis adviesgesprek.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Bereken Uw Besparing
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all"
                >
                  Bel Direct: 046 202 1430
                </a>
              </div>
            </m.div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="relative bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <m.a
                href="tel:0462021430"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-blue-50 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">046 202 1430</span>
                <span className="text-sm text-gray-500">Direct contact</span>
              </m.a>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/contact" className="flex flex-col items-center">
                  <div className="bg-blue-50 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Stuur een bericht</span>
                  <span className="text-sm text-gray-500">Wij reageren binnen 24 uur</span>
                </Link>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-blue-50 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-lg font-semibold text-gray-900">Heel Limburg</span>
                <span className="text-sm text-gray-500">Ons werkgebied</span>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
