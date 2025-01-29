import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, Building2, Award, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoBedrijvenLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Bedrijven Limburg', path: '/kennisbank/airco-bedrijven-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Bedrijven Limburg | Professionele Klimaatbeheersing voor Zakelijke Klanten</title>
        <meta 
          name="description" 
          content="Specialist in airconditioning voor bedrijven in Limburg. Van kantoren tot winkels, wij bieden professionele klimaatoplossingen voor elke zakelijke ruimte."
        />
        <meta 
          name="keywords" 
          content="airco bedrijven limburg, zakelijke airconditioning limburg, klimaatbeheersing bedrijven, commerciële airco, bedrijfsairco limburg"
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
              Airco Bedrijven Limburg: Professionele Klimaatoplossingen
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Airconditioning voor Bedrijven</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">Limburgse airconditioning service</Link>, 
                zijn we gespecialiseerd in klimaatbeheersing voor bedrijven. Met onze 
                <Link to="/kennisbank/klimaatbeheersingssysteem" className="text-blue-600 hover:text-blue-700"> geavanceerde klimaatbeheersingssystemen</Link> en 
                <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700"> ervaren monteurs</Link> zorgen 
                we voor het perfecte werkklimaat in uw bedrijfspand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Toepassingen</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Kantoorpanden</li>
                  <li>✓ Winkelruimtes</li>
                  <li>✓ Horeca</li>
                  <li>✓ Industrieel</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Kwaliteit</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ F-gassen gecertificeerd</li>
                  <li>✓ <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">Hoge SCOP waarden</Link></li>
                  <li>✓ Erkend installateur</li>
                  <li>✓ 5 jaar garantie</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Service</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ <Link to="/kennisbank/airco-installatie-limburg" className="text-blue-600 hover:text-blue-700">Professionele installatie</Link></li>
                  <li>✓ <Link to="/kennisbank/airco-service-limburg" className="text-blue-600 hover:text-blue-700">24/7 service</Link></li>
                  <li>✓ Onderhoudscontracten</li>
                  <li>✓ Snelle responstijd</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Onze Zakelijke Diensten</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Installatie & Onderhoud</h3>
                  <ul className="space-y-2">
                    <li>• Projectmatige installatie</li>
                    <li>• Preventief onderhoud</li>
                    <li>• Storingsdienst</li>
                    <li>• Systeemoptimalisatie</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Advies & Planning</h3>
                  <ul className="space-y-2">
                    <li>• Klimaatanalyse</li>
                    <li>• Energiebesparingsadvies</li>
                    <li>• Capaciteitsberekening</li>
                    <li>• Projectbegeleiding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied in Limburg</h2>
              <p className="mb-4">
                We bedienen zakelijke klanten in heel Limburg, met focus op:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Zuid-Limburg</h3>
                  <ul className="space-y-1">
                    <li>• <Link to="/kennisbank/airco-maastricht" className="text-blue-600 hover:text-blue-700">Maastricht</Link></li>
                    <li>• <Link to="/kennisbank/airco-heerlen" className="text-blue-600 hover:text-blue-700">Heerlen</Link></li>
                    <li>• Sittard-Geleen</li>
                    <li>• Kerkrade</li>
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
              <h2 className="text-2xl font-semibold mb-4">Voordelen voor Bedrijven</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Energiebesparing</h3>
                  <p>
                    Onze systemen zijn geoptimaliseerd voor maximale efficiëntie, wat resulteert in 
                    lagere energiekosten en een kleinere ecologische voetafdruk.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Productiviteit</h3>
                  <p>
                    Een optimaal werkklimaat verhoogt de productiviteit en het welzijn van uw 
                    medewerkers aanzienlijk.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Betrouwbaarheid</h3>
                  <p>
                    Met onze <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700">professionele installateurs</Link> en 
                    24/7 service kunt u rekenen op een betrouwbare klimaatbeheersing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact voor Zakelijke Service</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="tel:0462021430" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>046 202 1430</span>
                </a>
                <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Zakelijke offerte</span>
                </Link>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Heel Limburg</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Zakelijke Airconditioning Nodig?</h2>
              <p className="mb-6">
                Ontdek waarom steeds meer Limburgse bedrijven voor onze service kiezen. 
                <Link to="/kennisbank/airco-plaatsen-limburg" className="text-white hover:text-gray-100 underline"> Laat uw airco vakkundig installeren</Link> door 
                onze professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Zakelijke Offerte
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
