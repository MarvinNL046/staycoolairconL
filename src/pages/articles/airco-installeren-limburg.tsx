import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, Wrench, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoInstallerenLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Installeren Limburg', path: '/kennisbank/airco-installeren-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Installeren Limburg | Vakkundige Airconditioning Installatie</title>
        <meta 
          name="description" 
          content="Laat uw airco vakkundig installeren in Limburg. Profiteer van onze expertise en ervaring voor een perfecte installatie. Vraag nu een offerte aan."
        />
        <meta 
          name="keywords" 
          content="airco installeren limburg, airconditioning installatie, airco montage limburg, airco plaatsen, klimaatbeheersing installatie"
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
              Airco Installeren Limburg: Professionele Installatie op Maat
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Vakkundige Airco Installatie</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">airconditioning service in Limburg</Link>, 
                zijn we gespecialiseerd in het vakkundig installeren van airconditioningsystemen. Onze 
                <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700"> ervaren monteurs</Link> zorgen 
                voor een perfecte installatie van uw <Link to="/kennisbank/klimaatbeheersingssysteem" className="text-blue-600 hover:text-blue-700">klimaatbeheersingssysteem</Link>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Installatie</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Gratis inspectie</li>
                  <li>✓ Advies op maat</li>
                  <li>✓ Nette afwerking</li>
                  <li>✓ Uitgebreide uitleg</li>
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
                  <li>✓ Vaste prijzen</li>
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
                  <li>✓ Vakkundig personeel</li>
                  <li>✓ Kwaliteitsgarantie</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Ons Installatieproces</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Inspectie & Advies</h3>
                  <p>
                    We beginnen met een grondige inspectie van uw ruimte. Onze 
                    <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700"> ervaren installateurs</Link> adviseren 
                    over de beste oplossing voor uw situatie.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Planning & Voorbereiding</h3>
                  <p>
                    We plannen de installatie op een moment dat u schikt en zorgen dat alle 
                    benodigde materialen aanwezig zijn.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Professionele Installatie</h3>
                  <p>
                    Onze monteurs voeren de installatie zorgvuldig uit, met aandacht voor nette 
                    afwerking en optimale prestaties.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">4. Uitleg & Oplevering</h3>
                  <p>
                    Na installatie krijgt u een uitgebreide uitleg over de bediening en het 
                    <Link to="/kennisbank/airco-onderhoud-limburg" className="text-blue-600 hover:text-blue-700"> onderhoud</Link> van 
                    uw nieuwe systeem.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Voordelen van Professionele Installatie</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Optimale Prestaties</h3>
                  <p>
                    Een vakkundig geïnstalleerd systeem met <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">optimale SCOP-waarden</Link> zorgt 
                    voor maximaal comfort en minimaal energieverbruik.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Nette Afwerking</h3>
                  <p>
                    We zorgen voor een strakke, professionele afwerking die past bij uw interieur.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Garantie & Service</h3>
                  <p>
                    Met onze installatiegarantie en uitgebreide servicecontracten bent u verzekerd 
                    van jarenlang zorgeloos comfort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied in Limburg</h2>
              <p className="mb-4">
                We installeren airco's in heel Limburg, met focus op:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Zuid-Limburg</h3>
                  <ul className="space-y-1">
                    <li>• <Link to="/kennisbank/airco-maastricht" className="text-blue-600 hover:text-blue-700">Maastricht</Link></li>
                    <li>• <Link to="/kennisbank/airco-heerlen" className="text-blue-600 hover:text-blue-700">Heerlen</Link></li>
                    <li>• <Link to="/kennisbank/airco-sittard" className="text-blue-600 hover:text-blue-700">Sittard</Link></li>
                    <li>• <Link to="/kennisbank/airco-brunssum" className="text-blue-600 hover:text-blue-700">Brunssum</Link></li>
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
                  <span>Heel Limburg</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Laat Uw Airco Installeren</h2>
              <p className="mb-6">
                Profiteer van onze jarenlange ervaring in het installeren van airconditioning. 
                We zijn beschikbaar van maandag t/m vrijdag tussen 9:00 en 17:00 uur.
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
