import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Split, Box, Building2, Home, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AircoTypes() {
  const systems = [
    {
      name: 'Split-unit Airco',
      description: 'De meest populaire keuze voor woningen en kleine kantoren',
      image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80',
      pros: [
        'Zeer efficiënt',
        'Fluisterstil',
        'Geschikt voor koelen én verwarmen',
        'Eenvoudige installatie'
      ],
      cons: [
        'Buitenunit nodig',
        'Vaste installatie',
        'Iets hogere aanschafkosten'
      ]
    },
    {
      name: 'Multi-split Airco',
      description: 'Ideaal voor grotere woningen of kantoren met meerdere ruimtes',
      image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80',
      pros: [
        'Één buitenunit voor meerdere binnenunits',
        'Individuele temperatuurregeling per ruimte',
        'Energiezuinig',
        'Minder ruimte nodig aan buitenzijde'
      ],
      cons: [
        'Hogere aanschafkosten',
        'Complexere installatie',
        'Bij storing mogelijk meerdere ruimtes getroffen'
      ]
    },
    {
      name: 'Mono-block Airco',
      description: 'Mobiele oplossing zonder vaste installatie',
      image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80',
      pros: [
        'Geen vaste installatie nodig',
        'Verplaatsbaar',
        'Lagere aanschafkosten',
        'Geen F-gassen certificaat nodig voor installatie'
      ],
      cons: [
        'Minder efficiënt',
        'Meer geluid',
        'Beperkt bereik',
        'Slang naar buiten nodig'
      ]
    },
    {
      name: 'VRF/VRV Systeem',
      description: 'Professionele oplossing voor grote gebouwen',
      image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80',
      pros: [
        'Zeer hoge efficiëntie',
        'Geschikt voor grote gebouwen',
        'Centrale besturing',
        'Uitgebreide mogelijkheden'
      ],
      cons: [
        'Hoge installatiekosten',
        'Complex systeem',
        'Alleen geschikt voor grote projecten'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Verschillende Soorten Aircosystemen | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek welk type airconditioning het beste bij uw situatie past. Van split-units tot VRF systemen, wij leggen de verschillen uit."
        />
        <meta 
          name="keywords" 
          content="airco systemen, split unit airco, multi split airco, mono block airco, VRF systeem, VRV systeem, airconditioner types"
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
              Verschillende Soorten Aircosystemen
            </h1>
            <p className="text-xl text-gray-600">
              Ontdek welk type airconditioning het beste bij uw situatie past
            </p>
          </m.div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              Bij het kiezen van een airconditioner is het belangrijk om te weten welk 
              type het beste aansluit bij uw behoeften. Elke soort heeft zijn eigen 
              voor- en nadelen, en is geschikt voor verschillende situaties.
            </p>
          </div>

          {/* Systems Overview */}
          <div className="space-y-12 mb-16">
            {systems.map((system, index) => (
              <m.div
                key={system.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto">
                    <img
                      src={system.image}
                      alt={system.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {system.name}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {system.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-green-700 flex items-center mb-3">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Voordelen
                        </h3>
                        <ul className="space-y-2">
                          {system.pros.map((pro) => (
                            <li key={pro} className="flex items-center text-gray-600">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-red-700 flex items-center mb-3">
                          <XCircle className="h-5 w-5 mr-2" />
                          Nadelen
                        </h3>
                        <ul className="space-y-2">
                          {system.cons.map((con) => (
                            <li key={con} className="flex items-center text-gray-600">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Selection Guide */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Welk systeem past bij u?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Home className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Woning</h3>
                  <p className="text-blue-800">
                    Voor een woning is een split-unit of multi-split systeem meestal 
                    de beste keuze. Efficiënt, stil en geschikt voor zowel koelen 
                    als verwarmen.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Kantoor</h3>
                  <p className="text-blue-800">
                    Voor kantoren adviseren we een multi-split of VRF systeem, 
                    afhankelijk van de grootte en het aantal ruimtes.
                  </p>
                </div>
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
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts helpen u graag bij het selecteren van het meest geschikte 
              aircosysteem voor uw situatie
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Vraag advies aan
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