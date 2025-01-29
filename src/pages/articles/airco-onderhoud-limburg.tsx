import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, Wrench, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoOnderhoudLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Airco Onderhoud Limburg', path: '/kennisbank/airco-onderhoud-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Onderhoud Limburg | Professioneel Onderhoud & Service</title>
        <meta 
          name="description" 
          content="Vakkundig airco onderhoud in heel Limburg. Profiteer van onze expertise voor het optimaal functioneren van uw airconditioning. Plan direct uw onderhoudsbeurt."
        />
        <meta 
          name="keywords" 
          content="airco onderhoud limburg, airconditioning onderhoud, airco service, airco preventief onderhoud, airco inspectie"
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
              Airco Onderhoud Limburg: Optimale Prestaties het Hele Jaar Door
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professioneel Airco Onderhoud</h2>
              <p>
                Als onderdeel van onze <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">airconditioning service in Limburg</Link>, 
                bieden wij professioneel onderhoud voor alle types airconditioningsystemen. Onze 
                <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700"> ervaren monteurs</Link> zorgen 
                ervoor dat uw systeem optimaal blijft presteren en energiezuinig functioneert.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Onderhoud</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Reiniging filters</li>
                  <li>✓ Controle werking</li>
                  <li>✓ Inspectie systeem</li>
                  <li>✓ Optimalisatie</li>
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
                  <li>✓ Onderhoudscontracten</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Garanties</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ F-gassen gecertificeerd</li>
                  <li>✓ Vakkundig personeel</li>
                  <li>✓ Kwaliteitsgarantie</li>
                  <li>✓ Vaste prijzen</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Waarom Regelmatig Onderhoud?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Energiebesparing</h3>
                  <p>
                    Een goed onderhouden airco met <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">optimale SCOP-waarden</Link> verbruikt 
                    minder energie en bespaart op uw energierekening.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2. Langere Levensduur</h3>
                  <p>
                    Regelmatig onderhoud verlengt de levensduur van uw systeem en voorkomt 
                    kostbare reparaties.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">3. Betere Luchtkwaliteit</h3>
                  <p>
                    Schone filters en een hygiënisch systeem zorgen voor gezondere lucht in uw 
                    ruimte.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Ons Onderhoudsproces</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Inspectie</h3>
                  <p>
                    We beginnen met een grondige inspectie van uw <Link to="/kennisbank/klimaatbeheersingssysteem" className="text-blue-600 hover:text-blue-700">klimaatbeheersingssysteem</Link>. 
                    Onze <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700">gecertificeerde monteurs</Link> controleren 
                    alle belangrijke onderdelen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Reiniging</h3>
                  <p>
                    Grondige reiniging van filters, warmtewisselaars en andere cruciale 
                    componenten.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Optimalisatie</h3>
                  <p>
                    We stellen uw systeem optimaal af voor maximale prestaties en minimaal 
                    energieverbruik.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Rapportage</h3>
                  <p>
                    Na het onderhoud ontvangt u een gedetailleerd rapport met onze bevindingen 
                    en aanbevelingen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Werkgebied in Limburg</h2>
              <p className="mb-4">
                We bieden onderhoud in heel Limburg, met focus op:
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
              <h2 className="text-2xl font-semibold mb-4">Contact voor Onderhoud</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Plan Uw Onderhoud</h2>
              <p className="mb-6">
                Voorkom problemen en zorg voor optimale prestaties met regelmatig onderhoud. 
                Onze experts staan voor u klaar van maandag t/m vrijdag tussen 9:00 en 17:00 uur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Plan Onderhoud
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
