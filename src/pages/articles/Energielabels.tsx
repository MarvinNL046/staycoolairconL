import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Zap, LineChart, PiggyBank, ThermometerSun, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnergyLabels() {
  const labels = [
    {
      class: 'A+++',
      seer: '≥ 8.50',
      scop: '≥ 5.10',
      description: 'Hoogste efficiëntie, laagste energiekosten'
    },
    {
      class: 'A++',
      seer: '6.10 - 8.49',
      scop: '4.60 - 5.09',
      description: 'Zeer energiezuinig'
    },
    {
      class: 'A+',
      seer: '5.60 - 6.09',
      scop: '4.00 - 4.59',
      description: 'Energiezuinig'
    },
    {
      class: 'A',
      seer: '5.10 - 5.59',
      scop: '3.40 - 3.99',
      description: 'Gemiddeld energieverbruik'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Energielabels voor Airconditioners | StayCool Airco</title>
        <meta 
          name="description" 
          content="Leer alles over energielabels voor airconditioners. Begrijp SEER en SCOP waarden en kies de meest energiezuinige airco voor uw situatie."
        />
        <meta 
          name="keywords" 
          content="airco energielabel, SEER waarde, SCOP waarde, energiezuinige airco, A+++ airco, energiebesparing airco"
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
              Energielabels voor Airconditioners
            </h1>
            <p className="text-xl text-gray-600">
              Begrijp de energielabels en kies de meest efficiënte airco
            </p>
          </m.div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Wat zijn SEER en SCOP?</h2>
            <p>
              Bij airconditioners worden twee belangrijke waarden gebruikt om de 
              energie-efficiëntie aan te geven:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="flex items-center text-blue-900 font-semibold mb-3">
                  <ThermometerSun className="h-6 w-6 mr-2" />
                  SEER (Koelen)
                </h3>
                <p className="text-blue-800 mb-0">
                  Seasonal Energy Efficiency Ratio - geeft aan hoe efficiënt de airco 
                  koelt gedurende het hele seizoen.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="flex items-center text-red-900 font-semibold mb-3">
                  <Zap className="h-6 w-6 mr-2" />
                  SCOP (Verwarmen)
                </h3>
                <p className="text-red-800 mb-0">
                  Seasonal Coefficient of Performance - geeft aan hoe efficiënt de 
                  airco verwarmt gedurende het hele seizoen.
                </p>
              </div>
            </div>

            <h2>Energielabels Uitgelegd</h2>
            <div className="not-prose space-y-4 my-8">
              {labels.map((label) => (
                <m.div
                  key={label.class}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {label.class}
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">SEER</div>
                      <div className="font-semibold">{label.seer}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">SCOP</div>
                      <div className="font-semibold">{label.scop}</div>
                    </div>
                    <div className="text-gray-600">
                      {label.description}
                    </div>
                  </div>
                </m.div>
              ))}
            </div>

            <h2>Besparing Berekenen</h2>
            <p>
              Een airco met een hoog energielabel kan significant besparen op uw 
              energiekosten. Bijvoorbeeld:
            </p>

            <div className="bg-green-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-green-900 font-semibold mb-4 flex items-center">
                <PiggyBank className="h-6 w-6 mr-2" />
                Rekenvoorbeeld
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-green-800">A+++ airco (SEER 8.5)</div>
                  <div className="font-semibold">€100 energiekosten per seizoen</div>
                </div>
                <div>
                  <div className="text-sm text-green-800">A airco (SEER 5.1)</div>
                  <div className="font-semibold">€167 energiekosten per seizoen</div>
                </div>
                <div className="pt-4 border-t border-green-200">
                  <div className="text-sm text-green-800">Jaarlijkse besparing</div>
                  <div className="font-bold text-green-700">€67 per seizoen</div>
                </div>
              </div>
            </div>

            <h2>Tips voor de juiste keuze</h2>
            <ul>
              <li>Kies minimaal voor een A+ label voor optimale efficiëntie</li>
              <li>Let op zowel SEER als SCOP waarden</li>
              <li>Bereken de terugverdientijd van een energiezuiniger model</li>
              <li>Houd rekening met uw specifieke gebruik (koelen/verwarmen)</li>
            </ul>
          </div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts helpen u graag bij het selecteren van de meest energiezuinige 
              airco voor uw situatie
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <BarChart2 className="h-5 w-5 mr-2" />
                Bereken uw besparing
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