import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Wrench, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MaintenanceSchedule() {
  const schedules = [
    {
      type: 'Regulier Onderhoud',
      interval: '1x per jaar',
      tasks: [
        'Reiniging filters',
        'Controle koudemiddel',
        'Inspectie elektrische aansluitingen',
        'Controle condensafvoer',
        'Test alle functies'
      ],
      duration: '1-2 uur',
      importance: 'Essentieel voor optimale werking en levensduur'
    },
    {
      type: 'Grote Onderhoudsbeurt',
      interval: 'Elke 3-4 jaar',
      tasks: [
        'Complete reiniging warmtewisselaars',
        'Uitgebreide lektest',
        'Controle compressor',
        'Update firmware indien beschikbaar',
        'Volledige systeemtest'
      ],
      duration: '2-3 uur',
      importance: 'Voorkomt grote problemen en verlengt levensduur'
    },
    {
      type: 'Filterreiniging',
      interval: 'Elke 2-3 maanden',
      tasks: [
        'Uitnemen filters',
        'Reinigen met water',
        'Drogen',
        'Terugplaatsen',
        'Controle werking'
      ],
      duration: '15-30 minuten',
      importance: 'Verbetert luchtkwaliteit en efficiëntie'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Onderhoudsplanning Airco | StayCool Airco</title>
        <meta 
          name="description" 
          content="Leer wanneer en hoe vaak uw airco onderhoud nodig heeft. Complete onderhoudsplanning voor optimale prestaties en lange levensduur."
        />
        <meta 
          name="keywords" 
          content="airco onderhoud, onderhoudsplanning, airco service, airco filterreiniging, airco levensduur"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/kennisbank"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar Kennisbank
            </Link>
          </nav>

          {/* Article Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Onderhoudsplanning voor uw Airco
            </h1>
            <p className="text-xl text-gray-600">
              De complete gids voor het onderhouden van uw airconditioner
            </p>
          </m.div>

          {/* Maintenance Schedules */}
          <div className="space-y-8 mb-16">
            {schedules.map((schedule, index) => (
              <m.div
                key={schedule.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {schedule.type}
                    </h2>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Calendar className="h-5 w-5" />
                      <span>{schedule.interval}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Wrench className="h-5 w-5 mr-2" />
                        Werkzaamheden
                      </h3>
                      <ul className="space-y-2">
                        {schedule.tasks.map((task) => (
                          <li 
                            key={task}
                            className="flex items-center text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          Duur
                        </h3>
                        <p className="text-gray-600">{schedule.duration}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Belang
                        </h3>
                        <p className="text-gray-600">{schedule.importance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-16">
            <h2 className="flex items-center text-xl font-bold text-yellow-800 mb-6">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Belangrijke Aandachtspunten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-yellow-900 mb-3">Garantie</h3>
                <p className="text-yellow-800">
                  Regelmatig onderhoud is vaak een voorwaarde voor het behoud van uw garantie. 
                  Bewaar alle onderhoudsrapporten zorgvuldig.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-900 mb-3">F-gassen</h3>
                <p className="text-yellow-800">
                  Werkzaamheden aan het koudemiddelcircuit mogen alleen worden uitgevoerd 
                  door F-gassen gecertificeerde monteurs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Plan direct uw onderhoud in
            </h2>
            <p className="text-blue-100 mb-8">
              Voorkom storingen en zorg voor een optimaal functionerende airco
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Plan onderhoud
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-600"
              >
                Bel direct: 046 202 1430
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}