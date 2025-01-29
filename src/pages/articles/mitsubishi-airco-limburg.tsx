import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MitsubishiAircoLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Mitsubishi Airco Limburg', path: '/kennisbank/mitsubishi-airco-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Mitsubishi Airco Limburg | Expert in Mitsubishi Airconditioning</title>
        <meta 
          name="description" 
          content="Specialist in Mitsubishi airconditioningsystemen in Limburg. Profiteer van onze expertise met het premium merk Mitsubishi Electric. Erkend installateur."
        />
        <meta 
          name="keywords" 
          content="mitsubishi airco limburg, mitsubishi electric airco, mitsubishi airconditioning, mitsubishi klimaatbeheersing, mitsubishi warmtepomp"
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
              Mitsubishi Airco Limburg: Premium Klimaatoplossingen
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Mitsubishi Electric Specialist</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">Limburgse airconditioning service</Link>, 
                zijn we gespecialiseerd in Mitsubishi Electric airconditioningsystemen. Onze 
                <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700"> gecertificeerde monteurs</Link> hebben 
                uitgebreide ervaring met het installeren en onderhouden van deze premium systemen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Systemen</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Single-split units</li>
                  <li>✓ Multi-split systemen</li>
                  <li>✓ VRF-systemen</li>
                  <li>✓ Warmtepompen</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Kwaliteit</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Officieel dealer</li>
                  <li>✓ <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">Hoge SCOP waarden</Link></li>
                  <li>✓ Premium kwaliteit</li>
                  <li>✓ 5 jaar garantie</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Service</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Ma-Vr: 9:00-17:00</li>
                  <li>✓ Vakkundige installatie</li>
                  <li>✓ Professioneel onderhoud</li>
                  <li>✓ Expert advies</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Mitsubishi Electric Voordelen</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Energiezuinig</h3>
                  <p>
                    Mitsubishi Electric staat bekend om hun zeer efficiënte systemen met 
                    uitstekende <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">SCOP-waarden</Link>, wat resulteert 
                    in lagere energiekosten.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Betrouwbaar</h3>
                  <p>
                    De systemen staan bekend om hun lange levensduur en betrouwbare prestaties 
                    in alle weersomstandigheden.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Stil</h3>
                  <p>
                    Dankzij geavanceerde technologie zijn Mitsubishi airconditioners bijzonder 
                    stil in gebruik.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Onze Mitsubishi Diensten</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Installatie</h3>
                  <p>
                    Onze <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700">ervaren installateurs</Link> zorgen 
                    voor een perfecte installatie van uw Mitsubishi systeem, met oog voor detail 
                    en volgens de hoogste standaarden.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Onderhoud</h3>
                  <p>
                    Met regelmatig <Link to="/kennisbank/airco-onderhoud-limburg" className="text-blue-600 hover:text-blue-700">professioneel onderhoud</Link> zorgen 
                    we ervoor dat uw systeem optimaal blijft presteren.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Advies</h3>
                  <p>
                    We adviseren u graag over het meest geschikte Mitsubishi systeem voor uw 
                    specifieke situatie.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Toepassingen</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Particulier</h3>
                  <ul className="space-y-2">
                    <li>• Woningen</li>
                    <li>• Appartementen</li>
                    <li>• Villa's</li>
                    <li>• Nieuwbouw</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Zakelijk</h3>
                  <ul className="space-y-2">
                    <li>• <Link to="/kennisbank/airco-bedrijven-limburg" className="text-blue-600 hover:text-blue-700">Bedrijfspanden</Link></li>
                    <li>• Kantoren</li>
                    <li>• Winkels</li>
                    <li>• Horeca</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact voor Mitsubishi Airco</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Mitsubishi Airco Nodig?</h2>
              <p className="mb-6">
                Profiteer van onze expertise met Mitsubishi Electric systemen. 
                <Link to="/kennisbank/airco-plaatsen-limburg" className="text-white hover:text-gray-100 underline"> Laat uw airco vakkundig installeren</Link> door 
                onze specialisten.
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
