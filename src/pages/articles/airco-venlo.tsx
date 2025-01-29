import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoVenlo() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Venlo', path: '/kennisbank/airco-venlo' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Venlo | Professionele Airconditioning Service</title>
        <meta 
          name="description" 
          content="Zoekt u een betrouwbare airco specialist in Venlo? Ontdek onze professionele airconditioning services voor installatie, onderhoud en reparatie in Venlo en omgeving."
        />
        <meta 
          name="keywords" 
          content="airco venlo, airconditioning venlo, airco installatie venlo, airco onderhoud venlo, klimaatbeheersing venlo"
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
              Airco Venlo: Uw Specialist in Klimaatcomfort
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Airconditioning in Venlo</h2>
              <p>
                Op zoek naar een betrouwbare airco specialist in Venlo? Bij StayCool bieden we 
                complete airconditioning oplossingen voor zowel particulieren als bedrijven in 
                Venlo en omgeving. Met onze jarenlange ervaring en technische expertise zorgen 
                we voor het perfecte binnenklimaat in uw woning of bedrijfspand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Onze Diensten in Venlo</h3>
                <ul className="space-y-2">
                  <li>✓ Airco installatie op maat</li>
                  <li>✓ Periodiek onderhoud</li>
                  <li>✓ Storingen verhelpen</li>
                  <li>✓ Gratis advies aan huis</li>
                  <li>✓ Noodservice beschikbaar</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Voordelen StayCool</h3>
                <ul className="space-y-2">
                  <li>✓ Lokale specialist in Venlo</li>
                  <li>✓ Gecertificeerde monteurs</li>
                  <li>✓ Vakkundige installatie</li>
                  <li>✓ Concurrerende prijzen</li>
                  <li>✓ 100% klanttevredenheid</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied Venlo</h2>
              <p className="mb-4">
                Wij zijn actief in Venlo en omliggende gebieden, waaronder:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>• Venlo Centrum</div>
                <div>• Blerick</div>
                <div>• Tegelen</div>
                <div>• Belfeld</div>
                <div>• Velden</div>
                <div>• Arcen</div>
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
                  <span>Venlo en omgeving</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Klaar voor een Aangenaam Binnenklimaat?</h2>
              <p className="mb-6">
                Neem vandaag nog contact op voor een vrijblijvende offerte of deskundig advies over 
                airconditioning in Venlo.
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
