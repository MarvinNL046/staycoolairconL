import React from 'react';
import { m } from 'framer-motion';
import MetaTags from '../../components/MetaTags';
import Breadcrumbs from '../../components/Breadcrumbs';
import { ArrowLeft, Wrench, Calendar, ThermometerSun, Filter, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MaintenanceTips() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Onderhoudstips voor uw Airco' }
  ];

  const tips = [
    {
      title: 'Regelmatige Filterreiniging',
      interval: 'Elke 2-3 maanden',
      steps: [
        'Schakel de airco uit',
        'Open het voorpaneel',
        'Verwijder de filters voorzichtig',
        'Reinig met lauw water en milde zeep',
        'Laat volledig drogen',
        'Plaats terug en controleer vergrendeling'
      ],
      importance: 'Verbetert luchtkwaliteit en efficiëntie'
    },
    {
      title: 'Controle Condensafvoer',
      interval: 'Elke 6 maanden',
      steps: [
        'Controleer afvoerslang op knikken',
        'Reinig het afvoerpunt',
        'Test afvoer met schoon water',
        'Controleer op lekkages',
        'Verhelp eventuele verstoppingen'
      ],
      importance: 'Voorkomt waterlekkage en schimmelvorming'
    },
    {
      title: 'Buitenunit Onderhoud',
      interval: 'Elk seizoen',
      steps: [
        'Verwijder bladeren en vuil',
        'Controleer bevestiging',
        'Reinig de lamellen voorzichtig',
        'Check op beschadigingen',
        'Houd omgeving vrij van obstakels'
      ],
      importance: 'Garandeert optimale luchtstroming en efficiëntie'
    }
  ];

  const professionalMaintenance = [
    'Controle koudemiddel',
    'Inspectie elektrische aansluitingen',
    'Test van alle functies',
    'Reiniging warmtewisselaars',
    'Controle compressor',
    'Update firmware indien nodig'
  ];

  return (
    <>
      <MetaTags
        title="Onderhoudstips voor uw Airco | StayCool Airco"
        description="Praktische tips voor het onderhouden van uw airconditioner. Leer hoe u zelf eenvoudig onderhoud kunt uitvoeren voor optimale prestaties."
        keywords="airco onderhoud, airco schoonmaken, airco filters reinigen, airco tips, airco efficiency"
        canonicalUrl="https://staycoolairco.nl/kennisbank/onderhoudstips"
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": ["HowTo", "Article"],
          "name": "Onderhoudstips voor uw Airco",
          "description": "Praktische tips voor het onderhouden van uw airconditioner",
          "image": "https://staycoolairco.nl/images/blog/onderhoud-advies-staycoolairco.png",
          "totalTime": "PT30M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "EUR",
            "value": "0"
          },
          "supply": [
            "Mild detergent",
            "Schoon water",
            "Zachte borstel",
            "Droge doeken"
          ],
          "tool": [
            "Geen speciale gereedschappen nodig"
          ],
          "step": tips.map((tip, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": tip.title,
            "text": tip.steps.join('. ') + '.',
            "image": "https://staycoolairco.nl/images/blog/onderhoud-advies-staycoolairco.png"
          })),
          "author": {
            "@type": "Organization",
            "name": "StayCool Airco"
          },
          "publisher": {
            "@type": "Organization",
            "name": "StayCool Airco",
            "logo": {
              "@type": "ImageObject",
              "url": "https://staycoolairco.nl/images/logo.svg"
            }
          }
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Back to Knowledge Base Link */}
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
              Onderhoudstips voor uw Airco
            </h1>
            <p className="text-xl text-gray-600">
              Praktische tips voor optimale prestaties en lange levensduur
            </p>
          </m.div>

          {/* Maintenance Tips */}
          <div className="space-y-8 mb-16">
            {tips.map((tip, index) => (
              <m.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {tip.title}
                    </h2>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Calendar className="h-5 w-5" />
                      <span>{tip.interval}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Wrench className="h-5 w-5 mr-2" />
                        Stappen
                      </h3>
                      <ol className="space-y-2">
                        {tip.steps.map((step, stepIndex) => (
                          <li 
                            key={step}
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

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Belang
                      </h3>
                      <p className="text-gray-600">{tip.importance}</p>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* Professional Maintenance */}
          <div className="bg-blue-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Professioneel Onderhoud
            </h2>
            <p className="text-blue-800 mb-6">
              Sommige onderhoudswerkzaamheden mogen alleen door gecertificeerde 
              monteurs worden uitgevoerd:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionalMaintenance.map((task) => (
                <div 
                  key={task}
                  className="flex items-center text-blue-700"
                >
                  <ThermometerSun className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{task}</span>
                </div>
              ))}
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
              Plan professioneel onderhoud in
            </h2>
            <p className="text-blue-100 mb-8">
              Laat uw airco jaarlijks controleren door onze experts
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