import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, Award, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoInstallatieVenray() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Installatie Venray', path: '/kennisbank/airco-installatie-venray' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Installatie Venray | Professionele Airconditioning Montage</title>
        <meta 
          name="description" 
          content="Zoekt u een vakkundige airco installatie in Venray? Onze gecertificeerde monteurs zorgen voor een perfecte installatie van uw airconditioning. Vraag een offerte aan."
        />
        <meta 
          name="keywords" 
          content="airco installatie venray, airconditioning montage venray, airco plaatsing venray, airco monteur venray, klimaatbeheersing venray"
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
              Airco Installatie Venray: Vakkundige Montage door Experts
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professionele Airco Installatie in Venray</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">Limburgse airconditioning service</Link>, 
                zijn we uw specialist voor airco installatie in Venray. Onze 
                <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700"> ervaren monteurs</Link> zorgen 
                voor een perfecte installatie van uw airconditioningsysteem. Met onze expertise in 
                <Link to="/kennisbank/klimaatbeheersingssysteem" className="text-blue-600 hover:text-blue-700"> moderne klimaatbeheersing</Link> garanderen 
                we een optimaal resultaat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Installatie</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Gratis inspectie</li>
                  <li>✓ Advies op maat</li>
                  <li>✓ Nette montage</li>
                  <li>✓ Snelle service</li>
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
                  <li>✓ <Link to="/kennisbank/airco-service-limburg" className="text-blue-600 hover:text-blue-700">Onderhoud & service</Link></li>
                  <li>✓ 24/7 storingsdienst</li>
                  <li>✓ Flexibele planning</li>
                  <li>✓ Lokale service</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied Venray</h2>
              <p className="mb-4">
                We zijn actief in heel Venray en omgeving, waaronder:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Venray Centrum</h3>
                  <ul className="space-y-1">
                    <li>• Centrum</li>
                    <li>• Veltum</li>
                    <li>• Landweert</li>
                    <li>• Brukske</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Omliggende Dorpen</h3>
                  <ul className="space-y-1">
                    <li>• Oostrum</li>
                    <li>• Leunen</li>
                    <li>• Merselo</li>
                    <li>• Ysselsteyn</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Regio</h3>
                  <ul className="space-y-1">
                    <li>• <Link to="/kennisbank/airco-venlo" className="text-blue-600 hover:text-blue-700">Venlo</Link></li>
                    <li>• Horst</li>
                    <li>• Deurne</li>
                    <li>• Boxmeer</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Ons Installatieproces</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Inspectie & Advies</h3>
                  <p>
                    We beginnen met een grondige inspectie van uw ruimte en bespreken uw wensen. 
                    Op basis hiervan geven onze <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700">ervaren installateurs</Link> een 
                    passend advies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Installatievoorbereiding</h3>
                  <p>
                    We plannen de installatie op een moment dat u schikt en zorgen dat alle 
                    benodigde materialen aanwezig zijn.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Professionele Montage</h3>
                  <p>
                    Onze monteurs voeren de installatie zorgvuldig uit, met aandacht voor nette 
                    afwerking en optimale prestaties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Type Installaties</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Particulier</h3>
                  <ul className="space-y-2">
                    <li>• Woningen</li>
                    <li>• Appartementen</li>
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
              <h2 className="text-2xl font-semibold mb-4">Contact voor Installatie</h2>
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
                  <span>Venray en omgeving</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Airco Installatie Nodig in Venray?</h2>
              <p className="mb-6">
                Profiteer van onze expertise in airco installatie. 
                <Link to="/kennisbank/airco-plaatsen-limburg" className="text-white hover:text-gray-100 underline"> Laat uw airco vakkundig installeren</Link> door 
                onze professionals.
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
