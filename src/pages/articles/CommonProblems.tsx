import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle, ThermometerSun, Droplets, Wind, Wrench, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CommonProblems() {
  const problems = [
    {
      title: 'Airco koelt/verwarmt niet goed',
      symptoms: [
        'Verminderde luchtstroom',
        'Onvoldoende koeling/verwarming',
        'Ongelijkmatige temperatuur'
      ],
      causes: [
        'Vervuilde filters',
        'Verstopte condensor/verdamper',
        'Koudemiddel tekort',
        'Verkeerde temperatuurinstelling'
      ],
      solutions: [
        'Reinig of vervang de filters',
        'Laat de units professioneel reinigen',
        'Laat koudemiddel bijvullen door een specialist',
        'Controleer de temperatuurinstellingen'
      ]
    },
    {
      title: 'Vreemde geluiden',
      symptoms: [
        'Ratelende geluiden',
        'Piepende geluiden',
        'Zoemend geluid'
      ],
      causes: [
        'Losse onderdelen',
        'Versleten lagers',
        'Vuil in ventilator',
        'Trillingen door onjuiste montage'
      ],
      solutions: [
        'Controleer en zet onderdelen vast',
        'Laat lagers vervangen',
        'Reinig de ventilator',
        'Controleer de montagebeugels'
      ]
    },
    {
      title: 'Water/condenslekkage',
      symptoms: [
        'Waterdruppels onder de unit',
        'Vochtplekken op de muur',
        'Water loopt niet goed weg'
      ],
      causes: [
        'Verstopte condensafvoer',
        'Niet-horizontale montage',
        'Beschadigde condensbak',
        'Hoge luchtvochtigheid'
      ],
      solutions: [
        'Reinig de condensafvoer',
        'Controleer en corrigeer de montage',
        'Vervang beschadigde onderdelen',
        'Gebruik ontvochtigingsstand'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Veel Voorkomende Airco Problemen | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek oplossingen voor veelvoorkomende airconditioningproblemen. Van verminderde koeling tot vreemde geluiden, wij helpen u de oorzaak te vinden."
        />
        <meta 
          name="keywords" 
          content="airco problemen, airco storing, airco onderhoud, airco reparatie, airco lekkage, airco geluid"
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
              Veel Voorkomende Problemen
            </h1>
            <p className="text-xl text-gray-600">
              Herken en los veelvoorkomende airconditioningproblemen op
            </p>
          </m.div>

          {/* Problems Grid */}
          <div className="space-y-12 mb-16">
            {problems.map((problem, index) => (
              <m.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                    {problem.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Symptomen</h3>
                      <ul className="space-y-2">
                        {problem.symptoms.map((symptom) => (
                          <li key={symptom} className="flex items-center text-gray-600">
                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Oorzaken</h3>
                      <ul className="space-y-2">
                        {problem.causes.map((cause) => (
                          <li key={cause} className="flex items-center text-gray-600">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Oplossingen</h3>
                      <ul className="space-y-2">
                        {problem.solutions.map((solution) => (
                          <li key={solution} className="flex items-center text-gray-600">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Prevention Tips */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Preventietips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">Regelmatig Onderhoud</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-blue-800">
                    <Wrench className="h-5 w-5 text-blue-600 mr-2" />
                    Laat jaarlijks onderhoud uitvoeren
                  </li>
                  <li className="flex items-center text-blue-800">
                    <Filter className="h-5 w-5 text-blue-600 mr-2" />
                    Reinig maandelijks de filters
                  </li>
                  <li className="flex items-center text-blue-800">
                    <ThermometerSun className="h-5 w-5 text-blue-600 mr-2" />
                    Controleer regelmatig de temperatuur
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">Juist Gebruik</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-blue-800">
                    <Wind className="h-5 w-5 text-blue-600 mr-2" />
                    Voorkom extreme temperatuurverschillen
                  </li>
                  <li className="flex items-center text-blue-800">
                    <Droplets className="h-5 w-5 text-blue-600 mr-2" />
                    Let op de luchtvochtigheid
                  </li>
                </ul>
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
              Heeft u een probleem met uw airco?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts staan klaar om u te helpen met alle aircoproblemen
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <Wrench className="h-5 w-5 mr-2" />
                Plan service in
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