import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Leaf, AlertTriangle, ThermometerSun, Scale, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Refrigerants() {
  const refrigerants = [
    {
      name: 'R32',
      gwp: 675,
      benefits: [
        'Laag GWP (Global Warming Potential)',
        'Hoge energie-efficiëntie',
        'Kleine vulhoeveelheid nodig',
        'Eenvoudig te recyclen'
      ],
      usage: 'Meest gebruikte koudemiddel in moderne airconditioners'
    },
    {
      name: 'R410A',
      gwp: 2088,
      benefits: [
        'Betrouwbaar en bewezen',
        'Goede thermische eigenschappen',
        'Breed beschikbaar',
        'Non-ozone depleting'
      ],
      usage: 'Wordt uitgefaseerd vanwege hoog GWP'
    },
    {
      name: 'R290 (Propaan)',
      gwp: 3,
      benefits: [
        'Zeer laag GWP',
        'Uitstekende thermische eigenschappen',
        'Natuurlijk koudemiddel',
        'Toekomstbestendig'
      ],
      usage: 'Opkomend in kleine systemen, beperkt door veiligheidsvoorschriften'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Koudemiddelen in Airconditioners | StayCool Airco</title>
        <meta 
          name="description" 
          content="Leer alles over koudemiddelen in airconditioners. Van R32 tot natuurlijke koudemiddelen, ontdek de impact op het milieu en de efficiëntie."
        />
        <meta 
          name="keywords" 
          content="koudemiddel airco, R32, R410A, R290, natuurlijke koudemiddelen, F-gassen, GWP"
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
              Koudemiddelen in Airconditioners
            </h1>
            <p className="text-xl text-gray-600">
              De impact van verschillende koudemiddelen op prestaties en milieu
            </p>
          </m.div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Wat zijn koudemiddelen?</h2>
            <p>
              Koudemiddelen zijn stoffen die in airconditioners worden gebruikt om 
              warmte te transporteren. Ze ondergaan een cyclus van verdamping en 
              condensatie, waardoor ze warmte kunnen opnemen en afgeven.
            </p>

            <div className="bg-yellow-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-yellow-900 mt-0">
                <AlertTriangle className="h-6 w-6 mr-2" />
                F-gassen Regelgeving
              </h3>
              <p className="mb-0">
                Vanwege de impact op het klimaat worden koudemiddelen met een hoog 
                GWP (Global Warming Potential) geleidelijk uitgefaseerd. Dit heeft 
                geleid tot de ontwikkeling van nieuwe, milieuvriendelijkere alternatieven.
              </p>
            </div>

            {/* Refrigerants Overview */}
            <h2>Veelgebruikte Koudemiddelen</h2>
            <div className="not-prose space-y-6">
              {refrigerants.map((refrigerant) => (
                <m.div
                  key={refrigerant.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {refrigerant.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Scale className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        GWP: {refrigerant.gwp}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Voordelen</h4>
                      <ul className="space-y-2">
                        {refrigerant.benefits.map((benefit) => (
                          <li 
                            key={benefit}
                            className="flex items-center text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Toepassing</h4>
                      <p className="text-gray-600">{refrigerant.usage}</p>
                    </div>
                  </div>
                </m.div>
              ))}
            </div>

            <h2>De Toekomst van Koudemiddelen</h2>
            <p>
              De ontwikkeling van koudemiddelen richt zich steeds meer op natuurlijke 
              alternatieven en synthetische middelen met een zeer laag GWP. Belangrijke 
              trends zijn:
            </p>

            <ul>
              <li>Toenemend gebruik van natuurlijke koudemiddelen</li>
              <li>Ontwikkeling van nieuwe synthetische alternatieven</li>
              <li>Strengere regelgeving voor hoog-GWP koudemiddelen</li>
              <li>Verbeterde veiligheidssystemen voor brandbare koudemiddelen</li>
            </ul>

            <div className="bg-green-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-green-900 mt-0">
                <Leaf className="h-6 w-6 mr-2" />
                Duurzame Keuze
              </h3>
              <p className="mb-0">
                Bij de aanschaf van een nieuwe airco is het verstandig te kiezen voor 
                een systeem met een modern, milieuvriendelijk koudemiddel zoals R32. 
                Dit zorgt voor een lagere milieu-impact en toekomstbestendigheid.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Advies over duurzame airco's?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts helpen u graag bij het kiezen van een milieuvriendelijke airco
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <Leaf className="h-5 w-5 mr-2" />
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