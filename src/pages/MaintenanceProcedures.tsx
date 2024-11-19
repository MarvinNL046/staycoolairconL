import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Wrench, Calendar, ThermometerSun, Shield, AlertTriangle, Filter, Wind, Clock, ArrowLeft, Check, Star, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MaintenanceProcedures() {
  const maintenancePackages = [
    {
      icon: Check,
      title: 'Basis Pakket',
      price: '9,-',
      features: [
        'Jaarlijks onderhoud',
        'Reiniging van binnen- en buitenunit',
        'Controle koudemiddel en druk',
        'Inspectie elektrische aansluitingen',
        'Controle condensafvoer'
      ]
    },
    {
      icon: Star,
      title: 'Premium Pakket',
      price: '11,-',
      features: [
        'Alles uit het Basis Pakket',
        'Voorrang bij storingen',
        'Uitgebreide systeemcheck',
        'Gratis filters vervangen',
        'Telefonische support'
      ]
    },
    {
      icon: Crown,
      title: 'All-Inclusive Pakket',
      price: '15,-',
      features: [
        'Alles uit het Premium Pakket',
        'Directe vervanging bij defecten',
        'Geen onverwachte kosten',
        '24/7 storingsdienst',
        'Garantie op onderdelen'
      ]
    }
  ];

  const procedures = [
    {
      title: 'Regulier Onderhoud',
      interval: 'Jaarlijks',
      steps: [
        'Reiniging van binnen- en buitenunit',
        'Controle koudemiddel en druk',
        'Inspectie van alle elektrische aansluitingen',
        'Controle condensafvoer',
        'Test van alle functies en standen',
        'Reiniging of vervanging filters',
        'Controle luchtstroom en temperatuur'
      ],
      tools: [
        'Manometerset',
        'Reinigingsmiddelen',
        'Multimeter',
        'Filtermateriaal',
        'Perslucht'
      ],
      duration: '1-2 uur'
    },
    {
      title: 'Groot Onderhoud',
      interval: 'Elke 3-4 jaar',
      steps: [
        'Complete reiniging warmtewisselaars',
        'Controle en eventueel bijvullen koudemiddel',
        'Uitgebreide lektest',
        'Controle compressor en ventilatoren',
        'Reiniging condensafvoer en -pomp',
        'Update firmware indien beschikbaar',
        'Volledige systeemtest'
      ],
      tools: [
        'Manometerset',
        'Lektester',
        'Hogedrukreiniger',
        'Koudemiddel',
        'Laptop voor firmware updates'
      ],
      duration: '2-3 uur'
    }
  ];

  const safetyGuidelines = [
    'Altijd spanning uitschakelen voor werkzaamheden',
    'Gebruik persoonlijke beschermingsmiddelen',
    'Werk volgens F-gassen regelgeving',
    'Zorg voor goede ventilatie',
    'Gebruik gekeurde klimmateriaal',
    'Houd werkplek schoon en veilig'
  ];

  return (
    <>
      <Helmet>
        <title>Onderhoudspakketten | StayCool Airco</title>
        <meta 
          name="description" 
          content="Bekijk onze onderhoudspakketten voor uw airconditioning. Kies uit Basis, Premium of All-Inclusive voor optimale zorg voor uw systeem."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900">Onderhoudspakketten</span>
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <Wrench className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Onderhoudspakketten
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Kies het onderhoudspakket dat het beste bij u past
            </p>
          </motion.div>

          {/* Maintenance Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {maintenancePackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h2>
                  <div className="text-3xl font-bold text-blue-600 mb-6">
                    €{pkg.price}
                    <span className="text-base font-normal text-gray-600"> p.m.</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                    >
                      Kies {pkg.title}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Safety Guidelines */}
          <div className="bg-yellow-50 rounded-xl p-6 mb-12">
            <h2 className="flex items-center text-xl font-bold text-yellow-800 mb-4">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Veiligheidsrichtlijnen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyGuidelines.map((guideline, index) => (
                <div 
                  key={index}
                  className="flex items-center text-yellow-700"
                >
                  <Shield className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{guideline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Procedures */}
          <div className="space-y-12">
            {procedures.map((procedure, index) => (
              <motion.div
                key={procedure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {procedure.title}
                    </h2>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Calendar className="h-5 w-5" />
                      <span>{procedure.interval}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <ThermometerSun className="h-5 w-5 mr-2" />
                        Werkzaamheden
                      </h3>
                      <ol className="space-y-2">
                        {procedure.steps.map((step, stepIndex) => (
                          <li 
                            key={stepIndex}
                            className="flex items-start"
                          >
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mr-3 flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-600">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Wrench className="h-5 w-5 mr-2" />
                          Benodigde Gereedschap
                        </h3>
                        <ul className="space-y-2">
                          {procedure.tools.map((tool) => (
                            <li 
                              key={tool}
                              className="flex items-center text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          Geschatte Duur
                        </h3>
                        <p className="text-gray-600">{procedure.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
