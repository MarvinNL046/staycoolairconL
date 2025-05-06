import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AirconditioningLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airconditioning Limburg', path: '/kennisbank/airconditioning-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airconditioning Limburg | Expert Klimaatbeheersing in Heel Limburg</title>
        <meta 
          name="description" 
          content="Ontdek professionele airconditioning oplossingen in heel Limburg. Van Maastricht tot Venray, wij bieden expert advies, installatie en service voor optimaal klimaatcomfort."
        />
        <meta 
          name="keywords" 
          content="airconditioning limburg, klimaatbeheersing, airco installatie, airco onderhoud, airconditioning specialist"
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
              Airconditioning Limburg: Complete Klimaatoplossingen
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professionele Airconditioning in Heel Limburg</h2>
              <p>
                Als toonaangevende specialist in airconditioning bedienen wij heel Limburg met 
                hoogwaardige klimaatoplossingen. Van <Link to="/kennisbank/airco-maastricht" className="text-blue-600 hover:text-blue-700">Maastricht</Link> tot <Link to="/kennisbank/airco-venlo" className="text-blue-600 hover:text-blue-700">Venlo</Link>, 
                en van <Link to="/kennisbank/airco-weert" className="text-blue-600 hover:text-blue-700">Weert</Link> tot <Link to="/kennisbank/airco-roermond" className="text-blue-600 hover:text-blue-700">Roermond</Link> - 
                onze <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700">gecertificeerde installateurs</Link> staan 
                voor u klaar met expert advies en vakkundige service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Onze Diensten</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ <Link to="/kennisbank/airco-installatie-limburg" className="text-blue-600 hover:text-blue-700">Professionele installatie</Link></li>
                  <li>✓ <Link to="/kennisbank/airco-service-limburg" className="text-blue-600 hover:text-blue-700">Regelmatig onderhoud</Link></li>
                  <li>✓ Expert advies</li>
                  <li>✓ Priority storingsdienst</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Expertise</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ F-gassen gecertificeerd</li>
                  <li>✓ <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">Hoge SCOP waarden</Link></li>
                  <li>✓ Alle topmerken</li>
                  <li>✓ Vakkundig personeel</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Voor Iedereen</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Particulieren</li>
                  <li>✓ <Link to="/kennisbank/airco-bedrijven-limburg" className="text-blue-600 hover:text-blue-700">Bedrijven</Link></li>
                  <li>✓ Winkels</li>
                  <li>✓ Kantoren</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Onze Vestigingen in Limburg</h2>
              <p className="mb-4">
                Met strategisch geplaatste vestigingen door heel Limburg zijn we altijd dichtbij:
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
              <h2 className="text-2xl font-semibold mb-4">Waarom Kiezen voor Onze Airconditioning?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Expertise & Kwaliteit</h3>
                  <p>
                    Met onze <Link to="/kennisbank/klimaatbeheersing" className="text-blue-600 hover:text-blue-700">uitgebreide kennis van klimaatbeheersing</Link> en 
                    jarenlange ervaring in Limburg, bieden wij oplossingen die perfect aansluiten bij het lokale klimaat 
                    en uw specifieke wensen. Onze <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700">ervaren monteurs</Link> werken 
                    uitsluitend met hoogwaardige systemen en materialen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lokale Service</h3>
                  <p>
                    Als Limburgse onderneming kennen we de regio als geen ander. Of u nu in 
                    <Link to="/kennisbank/airco-zuid-limburg" className="text-blue-600 hover:text-blue-700"> Zuid-Limburg</Link> of 
                    Noord-Limburg woont, wij zijn altijd dichtbij voor snelle service en onderhoud.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Duurzame Oplossingen</h3>
                  <p>
                    We focussen op energiezuinige systemen met hoge <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">SCOP-waarden</Link>, 
                    zodat u niet alleen geniet van optimaal comfort, maar ook bespaart op uw energiekosten.
                  </p>
                </div>
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
              <h2 className="text-2xl font-semibold mb-4">Klaar voor het Perfecte Binnenklimaat?</h2>
              <p className="mb-6">
                Ontdek waarom steeds meer Limburgers kiezen voor onze airconditioningoplossingen. 
                <Link to="/kennisbank/airco-plaatsen-limburg" className="text-white hover:text-gray-100 underline"> Laat uw airco vakkundig plaatsen</Link> door 
                onze experts.
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
