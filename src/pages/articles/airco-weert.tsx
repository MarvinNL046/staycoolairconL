import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoWeert() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Weert', path: '/kennisbank/airco-weert' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Weert | Expert Airconditioning Service</title>
        <meta 
          name="description" 
          content="Zoekt u een betrouwbare airco specialist in Weert? Ontdek onze professionele airconditioning services voor installatie, onderhoud en reparatie in Weert en omgeving."
        />
        <meta 
          name="keywords" 
          content="airco weert, airconditioning weert, airco installatie weert, airco onderhoud weert, klimaatbeheersing weert"
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
              Airco Weert: Uw Partner voor het Perfecte Binnenklimaat
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Airconditioning in Weert</h2>
              <p>
                Bent u op zoek naar een professionele airco specialist in Weert? Bij StayCool 
                zijn we gespecialiseerd in het leveren en installeren van hoogwaardige 
                airconditioningsystemen. Of het nu gaat om uw woning of bedrijfspand, wij 
                zorgen voor de perfecte klimaatoplossing in Weert en omgeving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Onze Services in Weert</h3>
                <ul className="space-y-2">
                  <li>✓ Airco installatie</li>
                  <li>✓ Onderhoud en service</li>
                  <li>✓ Reparatie en storingen</li>
                  <li>✓ Advies op locatie</li>
                  <li>✓ Priority servicedienst</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Waarom StayCool in Weert?</h3>
                <ul className="space-y-2">
                  <li>✓ Lokale expertise</li>
                  <li>✓ Snelle service</li>
                  <li>✓ Erkend installateur</li>
                  <li>✓ Scherpe tarieven</li>
                  <li>✓ Uitgebreide garantie</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied Weert</h2>
              <p className="mb-4">
                Wij zijn actief in Weert en omliggende gebieden, waaronder:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>• Weert Centrum</div>
                <div>• Boshoven</div>
                <div>• Leuken</div>
                <div>• Graswinkel</div>
                <div>• Molenakker</div>
                <div>• Keent</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Direct Contact</h2>
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
                  <span>Weert en omgeving</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Klaar voor een Comfortabel Binnenklimaat?</h2>
              <p className="mb-6">
                Neem vandaag nog contact op voor een vrijblijvende offerte of expert advies over 
                airconditioning in Weert.
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
