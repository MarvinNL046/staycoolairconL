import React from 'react';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { ThermometerSun, Wind, Droplets, Leaf, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Klimaatbeheersing() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Klimaatbeheersing', path: '/kennisbank/klimaatbeheersing' }
  ];

  return (
    <>
      <Helmet>
        <title>Klimaatbeheersing | Optimaal Binnenklimaat met StayCool</title>
        <meta 
          name="description" 
          content="Alles over professionele klimaatbeheersing voor uw woning of bedrijf. Ontdek hoe u het perfecte binnenklimaat creëert met onze expertise."
        />
        <meta 
          name="keywords" 
          content="klimaatbeheersing, binnenklimaat, airconditioning, luchtvochtigheid, temperatuurregeling, duurzame klimaatoplossingen"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Klimaatbeheersing: De Sleutel tot Comfort
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Wat is Klimaatbeheersing?</h2>
              <p>
                Klimaatbeheersing omvat meer dan alleen temperatuurregeling. Het gaat om het creëren 
                van een optimaal binnenklimaat door het reguleren van temperatuur, luchtvochtigheid 
                en luchtkwaliteit. Bij StayCool bieden we complete klimaatoplossingen die zorgen 
                voor het perfecte binnenklimaat, het hele jaar door.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <ThermometerSun className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Temperatuur</h3>
                </div>
                <p className="text-gray-600">
                  Precieze temperatuurregeling voor optimaal comfort in elk seizoen. 
                  Onze systemen bieden zowel koeling als verwarming.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Wind className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Luchtkwaliteit</h3>
                </div>
                <p className="text-gray-600">
                  Geavanceerde filtersystemen verwijderen stof, pollen en andere 
                  verontreinigingen uit de lucht.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Luchtvochtigheid</h3>
                </div>
                <p className="text-gray-600">
                  Optimale luchtvochtigheid voor gezondheid en comfort, voorkomt 
                  problemen met te droge of te vochtige lucht.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <Leaf className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Duurzaamheid</h3>
                </div>
                <p className="text-gray-600">
                  Energiezuinige oplossingen die bijdragen aan een beter milieu 
                  en lagere energiekosten.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Voordelen van Professionele Klimaatbeheersing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li>✓ Constant aangenaam binnenklimaat</li>
                  <li>✓ Verhoogde productiviteit</li>
                  <li>✓ Betere luchtkwaliteit</li>
                  <li>✓ Energiebesparing</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Gezondere leefomgeving</li>
                  <li>✓ Minder last van allergieën</li>
                  <li>✓ Bescherming van inventaris</li>
                  <li>✓ Lagere energiekosten</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Toepassingen</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Woningen</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Woonkamers</li>
                    <li>• Slaapkamers</li>
                    <li>• Thuiskantoren</li>
                    <li>• Zolderruimtes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Kantoren</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Werkplekken</li>
                    <li>• Vergaderruimtes</li>
                    <li>• Serverruimtes</li>
                    <li>• Recepties</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Overige</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Winkels</li>
                    <li>• Horeca</li>
                    <li>• Zorginstellingen</li>
                    <li>• Scholen</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact voor Advies</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="tel:0462021430" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>046 202 1430</span>
                </a>
                <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Stuur een bericht</span>
                </Link>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Heel Limburg</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Optimaliseer Uw Binnenklimaat</h2>
              <p className="mb-6">
                Ontdek hoe wij uw binnenklimaat kunnen optimaliseren. Vraag een vrijblijvend adviesgesprek aan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Advies Aanvragen
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
                >
                  Bel Direct: 046 202 1430
                </a>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}
