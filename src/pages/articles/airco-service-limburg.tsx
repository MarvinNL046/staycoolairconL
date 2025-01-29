import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, Wrench, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoServiceLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Service Limburg', path: '/kennisbank/airco-service-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Service Limburg | Professioneel Onderhoud & Reparatie</title>
        <meta 
          name="description" 
          content="Betrouwbare airco service in Limburg nodig? Onze experts staan klaar voor onderhoud, reparatie en storingen. 24/7 service beschikbaar in heel Limburg."
        />
        <meta 
          name="keywords" 
          content="airco service limburg, airconditioning onderhoud, airco reparatie, airco storing, klimaatbeheersing service"
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
              Airco Service Limburg: Professioneel Onderhoud & Reparatie
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professionele Airco Service in Limburg</h2>
              <p>
                Bij StayCool bieden we complete airco service in heel Limburg. Van regulier 
                onderhoud tot spoedservice bij storingen - onze gecertificeerde monteurs staan 
                24/7 voor u klaar. Met onze jarenlange ervaring en technische expertise zorgen 
                we ervoor dat uw airconditioning optimaal blijft functioneren.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Onderhoud</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Preventief onderhoud</li>
                  <li>✓ Filter reiniging</li>
                  <li>✓ Systeem inspectie</li>
                  <li>✓ Prestatie controle</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">24/7 Service</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Snelle responstijd</li>
                  <li>✓ Storing verhelpen</li>
                  <li>✓ Noodservice</li>
                  <li>✓ Direct beschikbaar</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Garanties</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Vakkundig personeel</li>
                  <li>✓ Originele onderdelen</li>
                  <li>✓ Service garantie</li>
                  <li>✓ Eerlijke prijzen</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Service in heel Limburg</h2>
              <p className="mb-4">
                Onze servicemonteurs zijn actief in heel Limburg, waaronder:
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
              <h2 className="text-2xl font-semibold mb-4">Direct Contact voor Service</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Airco Service Nodig?</h2>
              <p className="mb-6">
                Neem direct contact op voor snelle en professionele airco service in Limburg. 
                Onze experts staan 24/7 voor u klaar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Service Aanvragen
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
