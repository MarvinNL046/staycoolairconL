import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, XCircle, ArrowRight, ThermometerSun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SplitVsMono() {
  const comparison = {
    split: {
      title: 'Split-unit Airco',
      description: 'Een systeem bestaande uit een binnen- en buitenunit, verbonden door leidingen.',
      image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80',
      pros: [
        'Zeer energiezuinig (hoge SCOP/SEER waarden)',
        'Fluisterstille werking (vanaf 19dB)',
        'Geschikt voor koelen én verwarmen',
        'Groot koelvermogen mogelijk',
        'Lange levensduur',
        'Geen ruimte nodig in het raam of muur'
      ],
      cons: [
        'Vaste installatie nodig',
        'Buitenunit vereist',
        'Hogere aanschafkosten',
        'Installatie door F-gassen gecertificeerd bedrijf verplicht'
      ],
      price: 'Vanaf €1.299,-',
      bestFor: [
        'Permanente klimaatbeheersing',
        'Grotere ruimtes (tot 70m²)',
        'Energiezuinig gebruik',
        'Gebruik als hoofdverwarming'
      ]
    },
    mono: {
      title: 'Mono-block Airco',
      description: 'Een mobiel systeem waarbij alle componenten in één unit zijn geïntegreerd.',
      image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80',
      pros: [
        'Geen vaste installatie nodig',
        'Lagere aanschafkosten',
        'Verplaatsbaar tussen ruimtes',
        'Geen F-gassen certificaat nodig',
        'Direct te gebruiken'
      ],
      cons: [
        'Minder energiezuinig',
        'Beperkt koelvermogen',
        'Meer geluid (vanaf 50dB)',
        'Slang naar buiten nodig',
        'Neemt vloerruimte in beslag',
        'Alleen geschikt voor koeling'
      ],
      price: 'Vanaf €399,-',
      bestFor: [
        'Tijdelijke koeling',
        'Kleinere ruimtes (tot 30m²)',
        'Huurwoningen',
        'Incidenteel gebruik'
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Split-unit vs. Mono-block Airco | StayCool Airco</title>
        <meta 
          name="description" 
          content="Vergelijk split-unit en mono-block airconditioners. Ontdek de voor- en nadelen van beide systemen en welk type het beste bij uw situatie past."
        />
        <meta 
          name="keywords" 
          content="split unit airco, mono block airco, mobiele airco, vaste airco, airco vergelijking, airco voor- en nadelen"
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
              Split-unit vs. Mono-block Airco
            </h1>
            <p className="text-xl text-gray-600">
              Een uitgebreide vergelijking van de twee meest voorkomende aircosystemen
            </p>
          </m.div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {Object.values(comparison).map((system) => (
              <m.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative aspect-video">
                  <img
                    src={system.image}
                    alt={system.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {system.title}
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

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Richtprijs
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {system.price}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Meest geschikt voor
                      </h3>
                      <ul className="space-y-2">
                        {system.bestFor.map((use) => (
                          <li key={use} className="flex items-center text-gray-600">
                            <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Additional Considerations */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Waar moet u op letten bij uw keuze?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">Ruimtegebruik</h3>
                <p className="text-blue-800">
                  Een split-unit neemt geen vloerruimte in beslag, terwijl een mono-block 
                  unit wel ruimte op de vloer nodig heeft. Houd ook rekening met de 
                  plaatsing van de buitenunit bij een split-systeem.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">Energieverbruik</h3>
                <p className="text-blue-800">
                  Split-units zijn significant energiezuiniger en kunnen ook verwarmen. 
                  Dit maakt ze kosteneffectiever op de lange termijn, vooral bij 
                  regelmatig gebruik.
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
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts helpen u graag bij het selecteren van de meest geschikte 
              airco voor uw situatie
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <ThermometerSun className="h-5 w-5 mr-2" />
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