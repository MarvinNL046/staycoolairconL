import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, CheckCircle, Shield, Clock, Wrench } from 'lucide-react';
import { trackInteraction } from '../utils/analytics';

export default function OnderhoudLanding() {
  return (
    <>
      <Helmet>
        <title>Airco Onderhoud | StayCool Airco | Professioneel & Betrouwbaar</title>
        <meta
          name="description"
          content="Professioneel airco onderhoud in Limburg. Houd uw airconditioning in topconditie voor optimale prestaties en een langere levensduur."
        />
        <link rel="canonical" href="https://staycoolairco.nl/onderhoud-email" />
      </Helmet>

      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Professioneel Airco <span className="text-orange-400">Onderhoud</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto">
              Houd uw airconditioning in topconditie voor optimale prestaties en een langere levensduur
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/onderhoud/onderhoudairco1.webp"
                alt="Professioneel airco onderhoud door StayCool Airco"
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
                  alt="Airco onderhoud werkzaamheden"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco3.webp"
                  alt="Professionele airco service"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco4.webp"
                  alt="Airco reiniging en controle"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/images/onderhoud/onderhoudairco5.webp"
                  alt="StayCool Airco monteur aan het werk"
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
    </>
  );
}
