import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ThermometerSun, Zap, Sun, PiggyBank, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeatingWithAirco() {
  const benefits = [
    {
      icon: PiggyBank,
      title: 'Voorkom Terugleverkosten',
      description: 'Gebruik uw eigen opgewekte energie en voorkom hoge terugleverkosten.'
    },
    {
      icon: ThermometerSun,
      title: 'Efficiënt Verwarmen',
      description: 'Tot 4x meer warmte dan de gebruikte elektriciteit.'
    },
    {
      icon: Sun,
      title: 'Zonnepanelen Optimaal Benutten',
      description: 'Gebruik zelf opgewekte energie direct voor verwarming.'
    },
    {
      icon: LineChart,
      title: 'Bespaar op Stookkosten',
      description: 'Tot 60% lagere verwarmingskosten dan gas.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Verwarmen met Airco | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek hoe u efficiënt kunt verwarmen met uw airco. Bespaar op verwarmingskosten en benut uw zonnepanelen optimaal."
        />
        <meta 
          name="keywords" 
          content="verwarmen met airco, warmtepomp airco, energiebesparing, zonnepanelen airco, terugleverkosten voorkomen"
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
              Verwarmen met Airco
            </h1>
            <p className="text-xl text-gray-600">
              Efficiënt verwarmen en besparen op energiekosten
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
            <h2>Hoe werkt verwarmen met een airco?</h2>
            <p>
              Een moderne airco werkt als een warmtepomp en kan zowel koelen als 
              verwarmen. Bij verwarmen haalt de airco warmte uit de buitenlucht en 
              brengt deze naar binnen. Dit proces is zeer efficiënt: voor elke kWh 
              elektriciteit die u verbruikt, krijgt u 3 tot 4 kWh aan warmte terug.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-blue-900 mt-0">
                <Zap className="h-6 w-6 mr-2" />
                Besparing met Zonnepanelen
              </h3>
              <p className="mb-0">
                Heeft u zonnepanelen? Door te verwarmen met uw airco gebruikt u de 
                zelf opgewekte energie direct, waardoor u terugleverkosten voorkomt 
                en maximaal profiteert van uw zonnepanelen.
              </p>
            </div>

            <h2>Voordelen van verwarmen met airco</h2>
            <ul>
              <li>Zeer energiezuinig (300-400% rendement)</li>
              <li>Lagere CO2-uitstoot dan gas</li>
              <li>Snel op temperatuur</li>
              <li>Geen radiatoren nodig</li>
              <li>Ook te gebruiken voor koeling</li>
              <li>Onderhoudsarm</li>
            </ul>

            <div className="bg-green-50 rounded-xl p-6 my-8">
              <h3 className="text-green-900 mt-0">Rekenvoorbeeld Besparing</h3>
              <p className="mb-4">
                Bij verwarming met gas (HR-ketel):
                <br />
                1 m³ gas = 8,8 kWh warmte = €1,50
              </p>
              <p className="mb-0">
                Bij verwarming met airco:
                <br />
                2,2 kWh stroom = 8,8 kWh warmte = €0,60
                <br />
                <strong>Besparing: 60%</strong>
              </p>
            </div>

            <h2>Tips voor optimaal gebruik</h2>
            <ol>
              <li>
                <strong>Constante temperatuur:</strong> Laat de airco op een constante 
                temperatuur draaien voor het beste rendement.
              </li>
              <li>
                <strong>Onderhoud:</strong> Zorg voor regelmatig onderhoud om het 
                rendement optimaal te houden.
              </li>
              <li>
                <strong>Isolatie:</strong> Zorg voor goede isolatie van uw woning 
                voor het beste resultaat.
              </li>
              <li>
                <strong>Timing:</strong> Verwarm bij zonnepanelen vooral overdag 
                wanneer de zon schijnt.
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
              Onze experts berekenen graag hoeveel u kunt besparen door te verwarmen met een airco
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <PiggyBank className="h-5 w-5 mr-2" />
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