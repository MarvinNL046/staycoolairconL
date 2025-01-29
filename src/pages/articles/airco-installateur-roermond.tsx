import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, Wrench, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoInstallateurRoermond() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Installateur Roermond', path: '/kennisbank/airco-installateur-roermond' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Installateur Roermond | Vakkundige Airconditioning Montage</title>
        <meta 
          name="description" 
          content="Zoekt u een betrouwbare airco installateur in Roermond? Onze ervaren monteurs zorgen voor een perfecte installatie van uw airconditioning. Vraag een offerte aan."
        />
        <meta 
          name="keywords" 
          content="airco installateur roermond, airconditioning monteur roermond, airco montage roermond, airco specialist roermond"
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
              Airco Installateur Roermond: Uw Specialist voor Vakkundige Montage
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professionele Airco Installatie in Roermond</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">Limburgse airconditioning service</Link>, 
                zijn we uw lokale expert in Roermond. Onze <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700">ervaren monteurs</Link> hebben 
                specifieke kennis van de lokale architectuur, van historische panden in de binnenstad 
                tot moderne nieuwbouw in de buitenwijken.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Expertise</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Gratis inspectie</li>
                  <li>✓ Maatwerk advies</li>
                  <li>✓ Vakkundige montage</li>
                  <li>✓ Nette afwerking</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Service</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Ma-Vr: 9:00-17:00</li>
                  <li>✓ Flexibele planning</li>
                  <li>✓ Snelle service</li>
                  <li>✓ Lokale expertise</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Garanties</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ F-gassen gecertificeerd</li>
                  <li>✓ 5 jaar garantie</li>
                  <li>✓ Erkend installateur</li>
                  <li>✓ Vaste prijzen</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied Roermond</h2>
              <p className="mb-4">
                We zijn actief in heel Roermond en omgeving, met specifieke expertise in:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Binnenstad</h3>
                  <ul className="space-y-1">
                    <li>• Historisch centrum</li>
                    <li>• Voorstad</li>
                    <li>• Roerzicht</li>
                    <li>• Roerdelta</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wijken</h3>
                  <ul className="space-y-1">
                    <li>• Donderberg</li>
                    <li>• Maasniel</li>
                    <li>• Herten</li>
                    <li>• Swalmen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Regio</h3>
                  <ul className="space-y-1">
                    <li>• <Link to="/kennisbank/airco-weert" className="text-blue-600 hover:text-blue-700">Weert</Link></li>
                    <li>• Echt</li>
                    <li>• Melick</li>
                    <li>• Sint Odiliënberg</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Onze Aanpak in Roermond</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Lokale Expertise</h3>
                  <p>
                    Met jarenlange ervaring in Roermond kennen we de specifieke uitdagingen van 
                    verschillende type gebouwen in de regio. Van monumentale panden tot moderne 
                    appartementen - we hebben voor elke situatie een passende oplossing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Maatwerk Installatie</h3>
                  <p>
                    We zorgen voor een <Link to="/kennisbank/klimaatbeheersingssysteem" className="text-blue-600 hover:text-blue-700">klimaatbeheersingssysteem</Link> dat 
                    perfect past bij uw ruimte en wensen, met optimale <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">energieprestaties</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Nette Afwerking</h3>
                  <p>
                    We hebben oog voor detail en zorgen voor een installatie die naadloos opgaat 
                    in uw interieur.
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
                    <li>• Monumentale panden</li>
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
              <h2 className="text-2xl font-semibold mb-4">Contact in Roermond</h2>
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
                  <span>Roermond en omgeving</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Airco Laten Installeren in Roermond?</h2>
              <p className="mb-6">
                Profiteer van onze lokale expertise en jarenlange ervaring. We zijn beschikbaar 
                van maandag t/m vrijdag tussen 9:00 en 17:00 uur voor een vrijblijvend gesprek.
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
