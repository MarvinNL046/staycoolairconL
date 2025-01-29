import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, Leaf, Award, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnergiezuinigeAircoLimburg() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Energiezuinige Airco Limburg', path: '/kennisbank/energiezuinige-airco-limburg' }
  ];

  return (
    <>
      <Helmet>
        <title>Energiezuinige Airco Limburg | Expert in Duurzame Klimaatbeheersing</title>
        <meta 
          name="description" 
          content="Op zoek naar een energiezuinige airco in Limburg? Ontdek alles over SCOP/SEER-waarden en bespaar op uw energiekosten. Erkend specialist in duurzame klimaatoplossingen."
        />
        <meta 
          name="keywords" 
          content="energiezuinige airco limburg, zuinige airconditioning, duurzame airco, scop seer waarden, energiebesparing airco"
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
              Energiezuinige Airco Limburg: Bespaar op Uw Energiekosten
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Duurzame Klimaatbeheersing</h2>
              <p>
                Als specialist in <Link to="/kennisbank/klimaatbeheersing" className="text-blue-600 hover:text-blue-700">klimaatbeheersing</Link> begrijpen 
                we het belang van energiezuinige oplossingen. Een moderne airco met hoge 
                <Link to="/kennisbank/scop-4-6" className="text-blue-600 hover:text-blue-700"> SCOP-waarden</Link> kan 
                significant bijdragen aan lagere energiekosten. Voor meer gedetailleerde informatie 
                over SCOP en SEER-waarden kunt u ook onze uitgebreide gids raadplegen op{' '}
                <a href="https://aircooffertelimburg.nl/kennisbank/scop-seer-waarden" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  aircooffertelimburg.nl
                </a>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Duurzaamheid</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Hoge SCOP waarden</li>
                  <li>✓ Lager energieverbruik</li>
                  <li>✓ Milieuvriendelijk</li>
                  <li>✓ Toekomstbestendig</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Kwaliteit</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ A+++ classificatie</li>
                  <li>✓ Premium merken</li>
                  <li>✓ Erkend installateur</li>
                  <li>✓ 5 jaar garantie</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Calculator className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Besparing</h3>
                </div>
                <ul className="space-y-2">
                  <li>✓ Lagere energiekosten</li>
                  <li>✓ Subsidie mogelijk</li>
                  <li>✓ Snelle terugverdientijd</li>
                  <li>✓ Waardevermeerdering</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Waarom Kiezen voor een Energiezuinige Airco?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Lagere Energiekosten</h3>
                  <p>
                    Een energiezuinige airco met hoge SCOP-waarde kan tot wel 60% energie besparen 
                    vergeleken met traditionele systemen. Meer informatie over energiebesparing vindt 
                    u op{' '}
                    <a href="https://aircooffertelimburg.nl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      aircooffertelimburg.nl
                    </a>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Duurzame Keuze</h3>
                  <p>
                    Moderne <Link to="/kennisbank/klimaatbeheersingssysteem" className="text-blue-600 hover:text-blue-700">klimaatbeheersingssystemen</Link> zijn 
                    niet alleen energiezuinig, maar ook beter voor het milieu door gebruik van 
                    milieuvriendelijke koudemiddelen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Comfort & Prestaties</h3>
                  <p>
                    Energiezuinige aircosystemen bieden niet alleen lagere kosten, maar ook 
                    superieur comfort door geavanceerde technologie en betere temperatuurregeling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Onze Aanpak</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Expert Advies</h3>
                  <p>
                    Onze <Link to="/kennisbank/airco-monteur-limburg" className="text-blue-600 hover:text-blue-700">ervaren monteurs</Link> adviseren 
                    u over de meest energiezuinige oplossing voor uw situatie. Voor specifieke 
                    locaties zoals{' '}
                    <a href="https://aircooffertelimburg.nl/steden/strucht" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      Strucht
                    </a> of{' '}
                    <a href="https://aircooffertelimburg.nl/steden/heythuysen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      Heythuysen
                    </a>, 
                    bieden we lokaal maatwerk.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Professionele Installatie</h3>
                  <p>
                    Vakkundige <Link to="/kennisbank/airco-installatie-limburg" className="text-blue-600 hover:text-blue-700">installatie</Link> door 
                    gecertificeerde monteurs garandeert optimale prestaties van uw energiezuinige systeem.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Onderhoud & Service</h3>
                  <p>
                    Regelmatig <Link to="/kennisbank/airco-onderhoud-limburg" className="text-blue-600 hover:text-blue-700">onderhoud</Link> zorgt 
                    ervoor dat uw airco optimaal blijft presteren en energiezuinig blijft functioneren.
                  </p>
                </div>
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
              <h2 className="text-2xl font-semibold mb-4">Energiezuinige Airco Nodig?</h2>
              <p className="mb-6">
                Ontdek hoe u kunt besparen op uw energiekosten met een moderne, energiezuinige airco. 
                We zijn beschikbaar van maandag t/m vrijdag tussen 9:00 en 17:00 uur voor een vrijblijvend advies.
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
