import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, CheckCircle, Shield, Clock, Wrench } from 'lucide-react';
import { trackInteraction } from '../utils/analytics';

export default function OnderhoudLanding() {
  return (
    <>
      <Helmet>
        <title>Airco Onderhoud Limburg | Professioneel & Betrouwbaar | StayCool</title>
        <meta
          name="description"
          content="Airco onderhoud Limburg ✓ F-gassen gecertificeerd ✓ Snelle service ✓ Voorkom storingen ✓ Langere levensduur. Nu inplannen!"
        />
        <link rel="canonical" href="https://staycoolairco.nl/onderhoud-email" />
      </Helmet>

      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-[64px] sm:pt-[80px]">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Professioneel Airco <span className="text-orange-400">Onderhoud</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto">
              Houd uw airconditioning in topconditie voor optimale prestaties en een langere levensduur
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/onderhoud/onderhoudairco1.webp"
                alt="Professioneel airco onderhoud Limburg - F-gassen gecertificeerd monteur StayCool Airco"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* USPs */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-10 w-10 mb-3 text-orange-400" />
              <span className="font-medium">F-gassen Gecertificeerd</span>
            </div>
            <div className="flex flex-col items-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Clock className="h-10 w-10 mb-3 text-orange-400" />
              <span className="font-medium">Snelle Service</span>
            </div>
            <div className="flex flex-col items-center text-white bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Wrench className="h-10 w-10 mb-3 text-orange-400" />
              <span className="font-medium">Vakkundig Onderhoud</span>
            </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Waarom Onderhoud Belangrijk Is</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start text-white">
                <CheckCircle className="h-6 w-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                <span>Optimale prestaties en energie-efficiëntie</span>
              </div>
              <div className="flex items-start text-white">
                <CheckCircle className="h-6 w-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                <span>Langere levensduur van uw airconditioning</span>
              </div>
              <div className="flex items-start text-white">
                <CheckCircle className="h-6 w-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                <span>Voorkom dure reparaties en storingen</span>
              </div>
              <div className="flex items-start text-white">
                <CheckCircle className="h-6 w-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                <span>Gezonde luchtkwaliteit in uw ruimte</span>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Ons Vakwerk in Beeld</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco2.webp"
                  alt="Airco onderhoud werkzaamheden Limburg - Filter reiniging preventief onderhoud"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco3.webp"
                  alt="Professionele airco service Limburg - Vakkundig onderhoud StayCool monteur"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco4.webp"
                  alt="Airco reiniging en controle Limburg - Preventief onderhoud F-gassen specialist"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco5.webp"
                  alt="StayCool Airco monteur aan het werk - Professioneel onderhoud Limburg"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Plan Nu Uw <span className="text-orange-400">Onderhoudsbeurt</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              {/* Call CTA */}
              <a
                href="tel:0462021430"
                onClick={() => trackInteraction('onderhoud_landing', 'click', 'call_button')}
                className="group flex-1 inline-flex flex-col items-center justify-center px-8 py-6 border border-transparent text-lg font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <Phone className="h-8 w-8 mb-2" />
                  <span className="text-xl font-bold">Bel Direct</span>
                  <span className="text-base mt-1">046 202 1430</span>
                </div>
              </a>

              {/* Email CTA */}
              <a
                href="mailto:info@staycoolairco.nl?subject=Aanvraag%20Airco%20Onderhoud"
                onClick={() => trackInteraction('onderhoud_landing', 'click', 'email_button')}
                className="group flex-1 inline-flex flex-col items-center justify-center px-8 py-6 border-2 border-blue-400 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <Mail className="h-8 w-8 mb-2" />
                  <span className="text-xl font-bold">Stuur Email</span>
                  <span className="text-base mt-1">info@staycoolairco.nl</span>
                </div>
              </a>
            </div>
          </div>

          {/* Trust message */}
          <div className="text-gray-300 text-sm max-w-2xl mx-auto text-center">
            <p className="mb-2">✓ Snelle reactie binnen 24 uur</p>
            <p>✓ Professioneel advies en service in heel Limburg</p>
          </div>
        </div>
      </section>

      {/* Static H1 Section - Critical for SEO with beautiful sky gradient! ☁️ */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Airco Onderhoud Limburg
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mt-2">
              Professioneel & Betrouwbaar Service
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
            StayCool Airco is uw <strong className="text-blue-600">F-gassen gecertificeerde specialist</strong> voor professioneel airco onderhoud.
            Voorkom storingen en verleng de levensduur van uw airconditioning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">F-gassen gecertificeerd</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Snelle service (24-48 uur)</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Voorkom storingen</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
