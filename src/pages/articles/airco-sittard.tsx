import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoSittard() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Sittard', path: '/kennisbank/airco-sittard' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Sittard | Expert Airconditioning Service & Installatie</title>
        <meta 
          name="description" 
          content="Op zoek naar een betrouwbare airco specialist in Sittard? Wij bieden professionele airconditioning services, van installatie tot onderhoud. Erkend en gecertificeerd."
        />
        <meta 
          name="keywords" 
          content="airco sittard, airconditioning sittard, airco installatie sittard, airco onderhoud sittard, klimaatbeheersing sittard"
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
              Airco Sittard: Uw Specialist in Klimaatcomfort
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Airconditioning in Sittard</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">Limburgse airconditioning service</Link>, 
                zijn we uw lokale expert in Sittard. Met jarenlange ervaring in het installeren en 
                onderhouden van airconditioningsystemen, begrijpen we de specifieke behoeften van 
                woningen en bedrijfspanden in de regio. Onze <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700">ervaren monteurs</Link> staan 
                voor u klaar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Diensten</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ <Link to="/kennisbank/airco-installatie-limburg" className="text-blue-600 hover:text-blue-700">Airco installatie</Link></li>
                  <li>✓ <Link to="/kennisbank/airco-onderhoud-limburg" className="text-blue-600 hover:text-blue-700">Onderhoud & service</Link></li>
                  <li>✓ Reparatie</li>
                  <li>✓ Advies op maat</li>
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
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Service</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Ma-Vr: 9:00-17:00</li>
                  <li>✓ Flexibele planning</li>
                  <li>✓ Snelle service</li>
                  <li>✓ Lokale expertise</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied Sittard</h2>
              <p className="mb-4">
                We zijn actief in heel Sittard-Geleen en omgeving, waaronder:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Sittard</h3>
                  <ul className="space-y-1">
                    <li>• Centrum</li>
                    <li>• Ophoven</li>
                    <li>• Sanderbout</li>
                    <li>• Limbrichterveld</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Geleen</h3>
                  <ul className="space-y-1">
                    <li>• Centrum</li>
                    <li>• Lindenheuvel</li>
                    <li>• Krawinkel</li>
                    <li>• Oud-Geleen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Regio</h3>
                  <ul className="space-y-1">
                    <li>• Born</li>
                    <li>• Beek</li>
                    <li>• Stein</li>
                    <li>• Susteren</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Waarom Kiezen voor Onze Service in Sittard?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Lokale Expertise</h3>
                  <p>
                    Als <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700">lokale installateur</Link> kennen 
                    we Sittard als geen ander. We begrijpen de uitdagingen van klimaatbeheersing in 
                    verschillende type gebouwen, van historische panden tot moderne nieuwbouw.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Moderne Oplossingen</h3>
                  <p>
                    We werken met geavanceerde <Link to="/kennisbank/klimaatbeheersingssysteem" className="text-blue-600 hover:text-blue-700">klimaatbeheersingssystemen</Link> die 
                    perfect aansluiten bij de eisen van moderne klimaatbeheersing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Persoonlijke Aanpak</h3>
                  <p>
                    Elke klant krijgt een op maat gemaakt advies, waarbij we rekening houden met 
                    specifieke wensen en de karakteristieken van uw pand.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Projecten in Sittard</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Particulier</h3>
                  <ul className="space-y-2">
                    <li>• Woningen en appartementen</li>
                    <li>• Historische panden</li>
                    <li>• Jaren '30 woningen</li>
                    <li>• Nieuwbouw</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Zakelijk</h3>
                  <ul className="space-y-2">
                    <li>• <Link to="/kennisbank/airco-bedrijven-limburg" className="text-blue-600 hover:text-blue-700">Bedrijfspanden</Link></li>
                    <li>• Winkels</li>
                    <li>• Horeca</li>
                    <li>• Kantoren</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact in Sittard</h2>
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
                  <span>Sittard en omgeving</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Airco Nodig in Sittard?</h2>
              <p className="mb-6">
                Ontdek waarom steeds meer inwoners van Sittard voor onze service kiezen. 
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
