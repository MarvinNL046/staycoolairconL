import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { ArrowRight, Home, Zap, Euro } from 'lucide-react';

export default function ComparisonsIndex() {
  const comparisons = [
    {
      title: 'Daikin vs Mitsubishi Heavy',
      description: 'Vergelijk twee Japanse topmerken op prijs, kwaliteit en energieverbruik',
      link: '/vergelijkingen/daikin-vs-mitsubishi-heavy',
      icon: '🇯🇵'
    },
    {
      title: 'Split vs Monoblock Systemen',
      description: 'Ontdek welk type aircosysteem het beste bij uw situatie past',
      link: '/vergelijkingen/split-vs-monoblock',
      icon: '🏠'
    },
    {
      title: 'Tosot vs LG',
      description: 'Betaalbare kwaliteit versus premium innovatie - wat is de beste keuze?',
      link: '/vergelijkingen/tosot-vs-lg',
      icon: '💰'
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Vergelijkingen 2024 | Merken & Systemen | StayCool"
        description="Vergelijk airco merken en systemen. Daikin vs Mitsubishi, Split vs Monoblock, Tosot vs LG. Ontdek welke airco het beste bij u past!"
        canonicalUrl="https://staycoolairco.nl/vergelijkingen"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Airco Vergelijkingen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maak de juiste keuze met onze uitgebreide vergelijkingen van airco merken en systemen. 
              Gebaseerd op werkelijke specificaties en ervaringen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {comparisons.map((comparison, index) => (
              <Link
                key={index}
                to={comparison.link}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="text-4xl mb-4">{comparison.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {comparison.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {comparison.description}
                </p>
                <span className="text-blue-600 font-medium inline-flex items-center">
                  Bekijk vergelijking <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>

          {/* Why Compare Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Waarom Vergelijken Belangrijk Is
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Euro className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Bespaar Geld</h3>
                <p className="text-gray-600">
                  Voorkom een te dure aankoop of juist een airco die niet aan uw wensen voldoet.
                </p>
              </div>
              <div className="text-center">
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Energieverbruik</h3>
                <p className="text-gray-600">
                  Ontdek welke airco het laagste verbruik heeft en bespaar op lange termijn.
                </p>
              </div>
              <div className="text-center">
                <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Perfect Match</h3>
                <p className="text-gray-600">
                  Vind de airco die perfect past bij uw woning en specifieke behoeften.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Hulp nodig bij het kiezen?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Onze experts helpen u graag persoonlijk bij het maken van de juiste keuze. 
              Vraag een gratis adviesgesprek aan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://afspraken.staycoolairco.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center font-semibold"
              >
                Plan Adviesgesprek
              </a>
              <a
                href="tel:0462021430"
                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center font-semibold"
              >
                Bel: 046 202 1430
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}