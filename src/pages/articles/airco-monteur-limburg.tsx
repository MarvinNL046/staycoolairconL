import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, UserCheck, Wrench, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoMonteurLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Monteur Limburg', path: '/kennisbank/airco-monteur-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Monteur Limburg | Vakkundige Airconditioning Technici</title>
        <meta 
          name="description" 
          content="Op zoek naar een ervaren airco monteur in Limburg? Onze gecertificeerde technici staan voor u klaar. Profiteer van jarenlange ervaring en expertise."
        />
        <meta 
          name="keywords" 
          content="airco monteur limburg, airconditioning technicus, airco installateur, airco specialist, f-gassen gecertificeerd"
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
              Airco Monteur Limburg: Vakkundige Technische Service
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professionele Airco Monteurs in Limburg</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">airconditioning service in Limburg</Link>, 
                beschikken wij over een team van hoogopgeleide en ervaren airco monteurs. Onze technici 
                zijn gespecialiseerd in het installeren, onderhouden en repareren van alle soorten 
                airconditioningsystemen. Met uitgebreide kennis van moderne <Link to="/kennisbank/klimaatbeheersingssysteem" className="text-blue-600 hover:text-blue-700">klimaatbeheersingssystemen</Link> 
                staan we garant voor vakkundig werk.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <UserCheck className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Expertise</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ F-gassen gecertificeerd</li>
                  <li>✓ Continue bijscholing</li>
                  <li>✓ Ruime ervaring</li>
                  <li>✓ Alle merken</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Diensten</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ <Link to="/kennisbank/airco-installatie-limburg" className="text-blue-600 hover:text-blue-700">Vakkundige installatie</Link></li>
                  <li>✓ <Link to="/kennisbank/airco-service-limburg" className="text-blue-600 hover:text-blue-700">Periodiek onderhoud</Link></li>
                  <li>✓ Storingsoplossing</li>
                  <li>✓ Technisch advies</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Garanties</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ 5 jaar garantie</li>
                  <li>✓ Kwaliteitsgarantie</li>
                  <li>✓ Vaste prijsafspraken</li>
                  <li>✓ Snelle service</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Onze Monteurs in Heel Limburg</h2>
              <p className="mb-4">
                Met een team van lokale monteurs zijn we actief in heel Limburg:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Zuid-Limburg</h3>
                  <ul className="space-y-1">
                    <li>• <Link to="/kennisbank/airco-maastricht" className="text-blue-600 hover:text-blue-700">Maastricht</Link></li>
                    <li>• <Link to="/kennisbank/airco-heerlen" className="text-blue-600 hover:text-blue-700">Heerlen</Link></li>
                    <li>• Sittard-Geleen</li>
                    <li>• Valkenburg</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Midden-Limburg</h3>
                  <ul className="space-y-1">
                    <li>• <Link to="/kennisbank/airco-roermond" className="text-blue-600 hover:text-blue-700">Roermond</Link></li>
                    <li>• <Link to="/kennisbank/airco-weert" className="text-blue-600 hover:text-blue-700">Weert</Link></li>
                    <li>• Echt</li>
                    <li>• Nederweert</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Noord-Limburg</h3>
                  <ul className="space-y-1">
                    <li>• <Link to="/kennisbank/airco-venlo" className="text-blue-600 hover:text-blue-700">Venlo</Link></li>
                    <li>• <Link to="/kennisbank/airco-installatie-venray" className="text-blue-600 hover:text-blue-700">Venray</Link></li>
                    <li>• Horst</li>
                    <li>• Panningen</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Waarom Onze Monteurs?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Technische Expertise</h3>
                  <p>
                    Onze monteurs zijn gespecialiseerd in het werken met de nieuwste 
                    airconditioningsystemen en hebben kennis van alle belangrijke merken. Ze begrijpen 
                    de technische aspecten zoals <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">SCOP-waarden</Link> en 
                    kunnen u het beste advies geven.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lokale Kennis</h3>
                  <p>
                    Als <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700">lokale installateurs</Link> kennen 
                    onze monteurs de specifieke uitdagingen van klimaatbeheersing in Limburgse gebouwen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Klantvriendelijk</h3>
                  <p>
                    Naast technische expertise, staat klantvriendelijkheid hoog in het vaandel. Onze 
                    monteurs nemen de tijd om alles duidelijk uit te leggen en werken netjes en 
                    zorgvuldig.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Specialisaties</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Systemen</h3>
                  <ul className="space-y-2">
                    <li>• Single split-units</li>
                    <li>• Multi split-systemen</li>
                    <li>• VRF-systemen</li>
                    <li>• Warmtepompen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Toepassingen</h3>
                  <ul className="space-y-2">
                    <li>• Woningen</li>
                    <li>• <Link to="/kennisbank/airco-bedrijven-limburg" className="text-blue-600 hover:text-blue-700">Bedrijfspanden</Link></li>
                    <li>• Winkels</li>
                    <li>• Serverruimtes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact voor Service</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Vakkundige Airco Service Nodig?</h2>
              <p className="mb-6">
                Profiteer van de expertise van onze ervaren monteurs. 
                <Link to="/kennisbank/airco-plaatsen-limburg" className="text-white hover:text-gray-100 underline"> Laat uw airco vakkundig installeren</Link> door 
                onze professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Monteur Aanvragen
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
