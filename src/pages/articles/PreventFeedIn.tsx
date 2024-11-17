import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Sun, Zap, PiggyBank, LineChart, ThermometerSun, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PreventFeedIn() {
  const benefits = [
    {
      icon: PiggyBank,
      title: 'Voorkom Terugleverkosten',
      description: 'Gebruik uw eigen opgewekte energie en voorkom hoge terugleverkosten.'
    },
    {
      icon: ThermometerSun,
      title: 'Slim Verwarmen',
      description: 'Verwarm uw huis met zelf opgewekte zonne-energie via uw airco.'
    },
    {
      icon: Battery,
      title: 'Optimaal Gebruik',
      description: 'Maximaal rendement uit uw zonnepanelen door slim energiemanagement.'
    },
    {
      icon: LineChart,
      title: 'Hogere Besparing',
      description: 'Bespaar tot 60% op verwarmingskosten én voorkom terugleverkosten.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Voorkom Terugleverkosten | StayCool Airco</title>
        <meta 
          name="description" 
          content="Leer hoe u terugleverkosten van zonnepanelen kunt voorkomen door slim te verwarmen met uw airco. Maximaal rendement uit uw zonnepanelen."
        />
        <meta 
          name="keywords" 
          content="terugleverkosten, zonnepanelen airco, energiebesparing, slim verwarmen, duurzaam verwarmen"
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
              Voorkom Terugleverkosten
            </h1>
            <p className="text-xl text-gray-600">
              Maximaal rendement uit uw zonnepanelen door slim te verwarmen
            </p>
          </m.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <m.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <benefit.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </m.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Wat zijn terugleverkosten?</h2>
            <p>
              Terugleverkosten zijn de kosten die u betaalt voor het terugleveren van 
              overtollige zonne-energie aan het elektriciteitsnet. Deze kosten worden 
              steeds hoger, waardoor het belangrijker wordt om zelf opgewekte energie 
              direct te gebruiken.
            </p>

            <div className="bg-yellow-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-yellow-900 mt-0">
                <Sun className="h-6 w-6 mr-2" />
                Wist u dat?
              </h3>
              <p className="mb-0">
                Gemiddeld wordt slechts 30% van de zelf opgewekte zonne-energie direct 
                gebruikt. De overige 70% wordt teruggeleverd aan het net, waarover u 
                terugleverkosten betaalt.
              </p>
            </div>

            <h2>Slim verwarmen met airco</h2>
            <p>
              Een airco kan zeer efficiënt verwarmen met een rendement van 300-400%. 
              Dit betekent dat voor elk kWh elektriciteit die u verbruikt, u 3-4 kWh 
              aan warmte krijgt. Door te verwarmen met uw airco op momenten dat uw 
              zonnepanelen energie opwekken:
            </p>

            <ul>
              <li>Gebruikt u direct uw eigen opgewekte energie</li>
              <li>Voorkomt u terugleverkosten</li>
              <li>Verwarmt u zeer energiezuinig</li>
              <li>Bespaart u op verwarmingskosten</li>
            </ul>

            <div className="bg-green-50 rounded-xl p-6 my-8">
              <h3 className="text-green-900 mt-0">Rekenvoorbeeld</h3>
              <p className="mb-4">
                Stel: u wekt 4.000 kWh per jaar op met zonnepanelen
              </p>
              <ul className="mb-0">
                <li>Zonder slim verwarmen: 70% teruglevering = 2.800 kWh x €0,10 = €280 terugleverkosten</li>
                <li>Met slim verwarmen: 30% teruglevering = 1.200 kWh x €0,10 = €120 terugleverkosten</li>
                <li><strong>Besparing: €160 per jaar</strong></li>
              </ul>
            </div>

            <h2>Tips voor optimaal gebruik</h2>
            <ol>
              <li>
                <strong>Timing is belangrijk:</strong> Verwarm vooral overdag wanneer 
                de zon schijnt en uw panelen energie opwekken.
              </li>
              <li>
                <strong>Gebruik een slimme thermostaat:</strong> Programmeer uw airco 
                om automatisch aan te slaan tijdens zonne-uren.
              </li>
              <li>
                <strong>Monitor uw verbruik:</strong> Houd uw energieverbruik en 
                -opwekking in de gaten voor optimale afstemming.
              </li>
              <li>
                <strong>Combineer met buffering:</strong> Overweeg een warmtebuffer 
                of boiler om nog meer eigen energie te gebruiken.
              </li>
            </ol>
          </div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Benieuwd naar uw besparingspotentieel?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts berekenen graag hoeveel u kunt besparen door slim te verwarmen met een airco
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <LineChart className="h-5 w-5 mr-2" />
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