import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, UserCheck, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoInstallateurLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Installateur Limburg', path: '/kennisbank/airco-installateur-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Installateur Limburg | Erkende Airconditioning Monteurs</title>
        <meta 
          name="description" 
          content="Op zoek naar een erkende airco installateur in Limburg? Onze gecertificeerde monteurs staan voor u klaar. Profiteer van jarenlange ervaring en expertise."
        />
        <meta 
          name="keywords" 
          content="airco installateur limburg, airconditioning monteur, airco specialist, erkend installateur, f-gassen gecertificeerd"
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
              Airco Installateur Limburg: Erkende Experts in Klimaatbeheersing
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Waarom Kiezen voor StayCool Installateurs?</h2>
              <p>
                Bij StayCool werken we uitsluitend met erkende en gecertificeerde airco installateurs 
                in Limburg. Onze monteurs combineren jarenlange ervaring met continue bijscholing om u 
                de beste service te bieden. Van advies tot installatie en onderhoud - u bent verzekerd 
                van vakkundig werk door professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <UserCheck className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Onze Experts</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Gediplomeerde monteurs</li>
                  <li>✓ Ruime ervaring</li>
                  <li>✓ Continue bijscholing</li>
                  <li>✓ Klantvriendelijk</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Certificeringen</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ F-gassen certificaat</li>
                  <li>✓ STEK-erkend</li>
                  <li>✓ VCA gecertificeerd</li>
                  <li>✓ Erkend leerbedrijf</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Expertise</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Alle airco merken</li>
                  <li>✓ Particulier & zakelijk</li>
                  <li>✓ Complexe installaties</li>
                  <li>✓ Maatwerk oplossingen</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied van Onze Installateurs</h2>
              <p className="mb-4">
                Onze erkende airco installateurs zijn werkzaam in heel Limburg, waaronder:
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
              <h2 className="text-2xl font-semibold mb-4">Onze Werkwijze</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Persoonlijk Adviesgesprek</h3>
                    <p className="text-gray-600">Een ervaren installateur komt bij u langs voor een vrijblijvend advies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Gedetailleerde Offerte</h3>
                    <p className="text-gray-600">U ontvangt een transparante offerte met alle specificaties.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Vakkundige Installatie</h3>
                    <p className="text-gray-600">Onze gecertificeerde monteurs zorgen voor een perfecte installatie.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Uitgebreide Instructie</h3>
                    <p className="text-gray-600">We geven een complete uitleg over de werking van uw systeem.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact met Onze Installateurs</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Klaar om te Starten?</h2>
              <p className="mb-6">
                Maak kennis met onze erkende airco installateurs en ontdek het verschil in vakmanschap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Afspraak Maken
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
