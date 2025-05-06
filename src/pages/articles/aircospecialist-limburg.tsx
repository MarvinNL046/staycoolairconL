import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoSpecialistLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Specialist Limburg', path: '/kennisbank/aircospecialist-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Specialist Limburg | Professionele Airconditioning Service</title>
        <meta 
          name="description" 
          content="Op zoek naar een airco specialist in Limburg? Ontdek onze professionele airconditioning services, van installatie tot onderhoud. Erkend en gecertificeerd."
        />
        <meta 
          name="keywords" 
          content="airco specialist limburg, airconditioning limburg, airco installatie, airco onderhoud, klimaatbeheersing"
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
              Airco Specialist Limburg: Uw Expert in Klimaatbeheersing
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Waarom een Airco Specialist in Limburg?</h2>
              <p>
                Een airconditioning systeem is een belangrijke investering voor uw comfort. Bij StayCool 
                begrijpen we als airco specialist in Limburg het belang van professionele installatie 
                en onderhoud. Met onze jarenlange ervaring en technische expertise zorgen we voor de 
                perfecte klimaatoplossing voor uw situatie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Onze Services</h3>
                <ul className="space-y-2">
                  <li>✓ Professionele airco installatie</li>
                  <li>✓ Regelmatig onderhoud</li>
                  <li>✓ Storingsdiagnose en reparatie</li>
                  <li>✓ Advies op maat</li>
                  <li>✓ Priority storingsdienst</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Waarom StayCool?</h3>
                <ul className="space-y-2">
                  <li>✓ F-gassen gecertificeerd</li>
                  <li>✓ Ruime ervaring in Limburg</li>
                  <li>✓ Snelle service</li>
                  <li>✓ Scherpe prijzen</li>
                  <li>✓ Garantie op alle werkzaamheden</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied in Limburg</h2>
              <p className="mb-4">
                Als lokale airco specialist zijn we actief in heel Limburg, waaronder:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>• Maastricht</div>
                <div>• Roermond</div>
                <div>• Venlo</div>
                <div>• Sittard-Geleen</div>
                <div>• Heerlen</div>
                <div>• Weert</div>
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
                  <span>Heel Limburg</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Klaar voor de Beste Airco Service in Limburg?</h2>
              <p className="mb-6">
                Neem vandaag nog contact op voor een vrijblijvende offerte of expert advies over uw 
                airconditioning project.
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
