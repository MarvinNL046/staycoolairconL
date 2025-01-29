import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle, ThermometerSun, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoInstallatieLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Installatie Limburg', path: '/kennisbank/airco-installatie-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Installatie Limburg | Professionele Airconditioning Montage</title>
        <meta 
          name="description" 
          content="Zoekt u een vakkundige airco installatie in Limburg? Onze gecertificeerde monteurs zorgen voor een perfecte installatie van uw airconditioning. Vraag een offerte aan."
        />
        <meta 
          name="keywords" 
          content="airco installatie limburg, airconditioning montage, airco plaatsing, airco monteur limburg, klimaatbeheersing installatie"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Airco Installatie Limburg: Vakkundige Montage door Experts
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professionele Airco Installatie in Limburg</h2>
              <p>
                Bij StayCool bent u verzekerd van een vakkundige airco installatie in heel Limburg. 
                Onze gecertificeerde monteurs hebben ruime ervaring met het installeren van alle 
                soorten airconditioningsystemen. We zorgen voor een perfecte montage, zodat u 
                jarenlang kunt genieten van een aangenaam binnenklimaat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Installatie</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Gratis inspectie</li>
                  <li>✓ Advies op maat</li>
                  <li>✓ Nette montage</li>
                  <li>✓ Snelle service</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Systemen</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Single split-units</li>
                  <li>✓ Multi split-systemen</li>
                  <li>✓ Commerciële systemen</li>
                  <li>✓ Alle topmerken</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Garanties</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ F-gassen gecertificeerd</li>
                  <li>✓ 5 jaar garantie</li>
                  <li>✓ Vaste prijsafspraak</li>
                  <li>✓ 100% tevredenheid</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Installatie in heel Limburg</h2>
              <p className="mb-4">
                Onze installatieteams zijn actief in heel Limburg, waaronder:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>• Maastricht</div>
                <div>• Roermond</div>
                <div>• Venlo</div>
                <div>• Sittard-Geleen</div>
                <div>• Heerlen</div>
                <div>• Weert</div>
                <div>• Kerkrade</div>
                <div>• Venray</div>
                <div>• Landgraaf</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Installatie Proces</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Gratis Inspectie & Advies</h3>
                    <p className="text-gray-600">We bekijken uw situatie en adviseren het beste systeem voor uw ruimte.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Offerte op Maat</h3>
                    <p className="text-gray-600">U ontvangt een heldere offerte met vaste prijsafspraak.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Professionele Installatie</h3>
                    <p className="text-gray-600">Onze experts zorgen voor een nette en vakkundige montage.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Uitleg & Nazorg</h3>
                    <p className="text-gray-600">We leggen de werking uit en blijven beschikbaar voor service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Direct Contact voor Installatie</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="tel:0462021430" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>046 202 1430</span>
                </a>
                <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Stuur een bericht</span>
                </Link>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Heel Limburg</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Klaar voor een Nieuwe Airco?</h2>
              <p className="mb-6">
                Vraag vandaag nog een vrijblijvende offerte aan voor uw airco installatie in Limburg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Offerte Aanvragen
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
                >
                  Bel Direct: 046 202 1430
                </a>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}
