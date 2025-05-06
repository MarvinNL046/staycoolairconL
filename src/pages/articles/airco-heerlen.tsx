import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoHeerlen() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Heerlen', path: '/kennisbank/airco-heerlen' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Heerlen | Expert Airconditioning Service & Installatie</title>
        <meta 
          name="description" 
          content="Op zoek naar een betrouwbare airco specialist in Heerlen? Wij bieden professionele airconditioning services, van installatie tot onderhoud. Erkend en gecertificeerd."
        />
        <meta 
          name="keywords" 
          content="airco heerlen, airconditioning heerlen, airco installatie heerlen, airco onderhoud heerlen, klimaatbeheersing heerlen"
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
              Airco Heerlen: Uw Specialist in Klimaatcomfort
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Airconditioning in Heerlen</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">Limburgse airconditioning service</Link>, 
                zijn we uw lokale expert in Heerlen en omgeving. Met jarenlange ervaring in het 
                installeren en onderhouden van airconditioningsystemen in de regio Parkstad, begrijpen 
                we de specifieke behoeften van woningen en bedrijfspanden in het gebied. Als 
                <Link to="/kennisbank/airco-zuid-limburg" className="text-blue-600 hover:text-blue-700"> specialist in Zuid-Limburg</Link> staan 
                we garant voor vakkundige service.
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
                  <li>✓ <Link to="/kennisbank/airco-service-limburg" className="text-blue-600 hover:text-blue-700">Onderhoud & service</Link></li>
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
                  <li>✓ Snelle responstijd</li>
                  <li>✓ Priority storingsdienst</li>
                  <li>✓ Flexibele planning</li>
                  <li>✓ Lokale service</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied Heerlen</h2>
              <p className="mb-4">
                We zijn actief in heel Heerlen en omgeving, waaronder:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Heerlen Centrum</h3>
                  <ul className="space-y-1">
                    <li>• Centrum</li>
                    <li>• Heerlerheide</li>
                    <li>• Heerlerbaan</li>
                    <li>• Welten</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Omliggende Wijken</h3>
                  <ul className="space-y-1">
                    <li>• Hoensbroek</li>
                    <li>• Molenberg</li>
                    <li>• Meezenbroek</li>
                    <li>• Zeswegen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Regio</h3>
                  <ul className="space-y-1">
                    <li>• Landgraaf</li>
                    <li>• Brunssum</li>
                    <li>• Kerkrade</li>
                    <li>• Voerendaal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Waarom Kiezen voor Onze Service in Heerlen?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Lokale Expertise</h3>
                  <p>
                    Als <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700">ervaren monteurs</Link> kennen 
                    we Heerlen als geen ander. We begrijpen de uitdagingen van klimaatbeheersing in 
                    verschillende type gebouwen, van karakteristieke panden tot moderne nieuwbouw.
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
              <h2 className="text-2xl font-semibold mb-4">Projecten in Heerlen</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Particulier</h3>
                  <ul className="space-y-2">
                    <li>• Woningen en appartementen</li>
                    <li>• Karakteristieke panden</li>
                    <li>• Dakwoningen</li>
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
              <h2 className="text-2xl font-semibold mb-4">Contact in Heerlen</h2>
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
                  <span>Heerlen en omgeving</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Airco Nodig in Heerlen?</h2>
              <p className="mb-6">
                Ontdek waarom steeds meer inwoners van Heerlen voor onze service kiezen. 
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
