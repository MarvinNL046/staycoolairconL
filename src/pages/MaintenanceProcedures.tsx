import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Wrench, Calendar, ThermometerSun, Shield, AlertTriangle, Filter, Wind, Clock, ArrowLeft, Check, Star, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MaintenanceProcedures() {
  const maintenancePackages = [
    {
      icon: Star,
      title: 'Premium Pakket',
      price: '11,-',
      features: [
        'Jaarlijks onderhoud',
        'Reiniging van binnen- en buitenunit',
        'Controle koudemiddel en druk',
        'Inspectie elektrische aansluitingen',
        'Controle condensafvoer',
        'Voorrang bij storingen'
      ]
    },
    {
      icon: Crown,
      title: 'All-Inclusive Pakket',
      price: '15,95',
      features: [
        'Alles uit het Premium Pakket',
        'Directe vervanging bij defecten',
        'Geen onverwachte kosten',
        'Priority storingsdienst',
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
          content="Bekijk onze onderhoudspakketten voor uw airconditioning. Kies uit Premium of All-Inclusive voor optimale zorg voor uw systeem."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-blue-800">
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
              <Wrench className="h-8 w-8 text-blue-800" />
              <h1 className="text-4xl font-bold text-gray-900">
                Onderhoudspakketten
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Kies het onderhoudspakket dat het beste bij u past
            </p>
          </motion.div>

          {/* Important Notice Section - Moved to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-orange-500 mt-1" />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Belangrijk: Onderhoudsbeleid StayCool Airco
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Bij StayCool Airco streven we naar de hoogste kwaliteit en service voor onze klanten. 
                      Om dit te kunnen garanderen, voeren wij <strong className="text-gray-900">uitsluitend onderhoud en reparaties</strong> uit 
                      aan airconditioningsystemen die door ons zijn geleverd en geïnstalleerd.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Dit beleid stelt ons in staat om:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>De volledige geschiedenis van uw systeem te kennen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Garantie te bieden op onderdelen en arbeid</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Optimale service te verlenen aan onze bestaande klanten</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>De kwaliteit van onze dienstverlening te waarborgen</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 mt-4">
                      <p className="font-semibold text-gray-900 mb-2">
                        Heeft u een airco die niet door StayCool is geïnstalleerd?
                      </p>
                      <p>
                        Wij adviseren u contact op te nemen met de oorspronkelijke installateur of een algemene 
                        onderhoudspartij voor airconditioningsystemen.
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 italic mt-4">
                      Wij begrijpen dat dit mogelijk ongemak veroorzaakt en bieden hiervoor onze excuses aan. 
                      Deze keuze is gemaakt om de beste service aan onze klanten te kunnen blijven bieden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Maintenance Packages */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 mb-4">
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h2>
                  <div className="text-3xl font-bold text-blue-800 mb-6">
                    €{pkg.price}
                    <span className="text-base font-normal text-gray-600"> p.m.</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-blue-800 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-300"
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
                    <div className="flex items-center gap-2 text-blue-800">
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
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3 flex-shrink-0 mt-0.5">
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
                              <span className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></span>
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
