import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { ThermometerSun, Settings, Zap, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Klimaatbeheersingssysteem() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Klimaatbeheersingssysteem', path: '/kennisbank/klimaatbeheersingssysteem' }
  ];

  return (
    <>
      <Helmet>
        <title>Klimaatbeheersingssysteem | Optimale Temperatuurregeling</title>
        <meta 
          name="description" 
          content="Ontdek alles over moderne klimaatbeheersingssystemen. Van energiezuinige oplossingen tot geavanceerde temperatuurregeling voor optimaal comfort."
        />
        <meta 
          name="keywords" 
          content="klimaatbeheersingssysteem, klimaatbeheersing, temperatuurregeling, airconditioning, energiebesparing"
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
              Klimaatbeheersingssysteem: De Sleutel tot Perfect Binnenklimaat
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Wat is een Klimaatbeheersingssysteem?</h2>
              <p>
                Een klimaatbeheersingssysteem is een geavanceerde oplossing voor het reguleren van uw 
                binnenklimaat. Het gaat verder dan traditionele <Link to="/kennisbank/airconditioning-limburg" className="text-blue-600 hover:text-blue-700">airconditioning</Link>, 
                door niet alleen de temperatuur, maar ook luchtvochtigheid, luchtkwaliteit en ventilatie 
                te optimaliseren. Met onze <Link to="/kennisbank/klimaatbeheersing" className="text-blue-600 hover:text-blue-700">expertise in klimaatbeheersing</Link> zorgen 
                we voor de perfecte oplossing voor uw situatie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Temperatuur</h3>
                </div>
                <p className="text-gray-600">
                  Nauwkeurige temperatuurregeling met <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700">hoge SCOP-waarden</Link> voor 
                  maximale efficiëntie in zowel koeling als verwarming.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Settings className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Automatisering</h3>
                </div>
                <p className="text-gray-600">
                  Intelligente systemen die zich automatisch aanpassen aan uw voorkeuren en 
                  gebruikspatronen.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Energiebesparing</h3>
                </div>
                <p className="text-gray-600">
                  Energiezuinige oplossingen die bijdragen aan lagere kosten en een beter milieu.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Voordelen van een Modern Klimaatbeheersingssysteem</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Comfort</h3>
                  <ul className="space-y-2">
                    <li>✓ Constante temperatuur</li>
                    <li>✓ Optimale luchtvochtigheid</li>
                    <li>✓ Betere luchtkwaliteit</li>
                    <li>✓ Geruisloze werking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Efficiëntie</h3>
                  <ul className="space-y-2">
                    <li>✓ Lager energieverbruik</li>
                    <li>✓ Slimme temperatuurregeling</li>
                    <li>✓ Automatische aanpassingen</li>
                    <li>✓ Preventief onderhoud</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professionele Installatie</h2>
              <p className="mb-4">
                Voor optimale prestaties is professionele installatie essentieel. Onze 
                <Link to="/kennisbank/airco-installateur-limburg" className="text-blue-600 hover:text-blue-700"> gecertificeerde installateurs</Link> in 
                Limburg zorgen voor:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Installatie</h3>
                  <ul className="space-y-2">
                    <li>• Expert advies op locatie</li>
                    <li>• Vakkundige montage</li>
                    <li>• Systeemoptimalisatie</li>
                    <li>• Uitgebreide uitleg</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Service</h3>
                  <ul className="space-y-2">
                    <li>• <Link to="/kennisbank/airco-service-limburg" className="text-blue-600 hover:text-blue-700">Regelmatig onderhoud</Link></li>
                    <li>• Priority storingsdienst</li>
                    <li>• Preventieve controles</li>
                    <li>• Software updates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Toepassingen</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Woningen</h3>
                  <p className="text-gray-600">
                    Perfect klimaat in elk seizoen voor maximaal wooncomfort. Onze 
                    <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700"> ervaren monteurs</Link> adviseren 
                    u graag over de mogelijkheden.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bedrijven</h3>
                  <p className="text-gray-600">
                    Professionele oplossingen voor <Link to="/kennisbank/airco-bedrijven-limburg" className="text-blue-600 hover:text-blue-700">bedrijven in Limburg</Link>. 
                    Van kantoren tot winkels en serverruimtes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Speciale Ruimtes</h3>
                  <p className="text-gray-600">
                    Maatwerk klimaatbeheersing voor ruimtes met specifieke eisen zoals musea en 
                    zorginstellingen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Regionale Expertise</h2>
              <p className="mb-4">
                We zijn actief in heel Limburg met lokale experts in:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/kennisbank/airco-maastricht" className="text-blue-600 hover:text-blue-700">• Maastricht</Link>
                <Link to="/kennisbank/airco-heerlen" className="text-blue-600 hover:text-blue-700">• Heerlen</Link>
                <Link to="/kennisbank/airco-venlo" className="text-blue-600 hover:text-blue-700">• Venlo</Link>
                <Link to="/kennisbank/airco-roermond" className="text-blue-600 hover:text-blue-700">• Roermond</Link>
                <Link to="/kennisbank/airco-weert" className="text-blue-600 hover:text-blue-700">• Weert</Link>
                <Link to="/kennisbank/airco-installatie-venray" className="text-blue-600 hover:text-blue-700">• Venray</Link>
                <Link to="/kennisbank/airco-zuid-limburg" className="text-blue-600 hover:text-blue-700">• Zuid-Limburg</Link>
                <div>• En omstreken</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact voor Advies</h2>
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
                Ontdek hoe een modern klimaatbeheersingssysteem uw comfort kan verbeteren. 
                <Link to="/kennisbank/airco-plaatsen-limburg" className="text-white hover:text-gray-100 underline"> Laat u adviseren</Link> door 
                onze experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Advies Aanvragen
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
