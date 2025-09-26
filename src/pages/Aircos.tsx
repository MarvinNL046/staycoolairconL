import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Calculator, Shield, TrendingUp, Snowflake, Thermometer, Euro, Phone } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import LazyImage from '../components/LazyImage';

export default function Aircos() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco\'s' }
  ];

  const voordelen = [
    {
      icon: <Euro className="h-8 w-8 text-sky-500" />,
      titel: "Tot 60% energiebesparing",
      beschrijving: "Moderne warmtepompen zijn tot 5x efficiënter dan gasverwarming"
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      titel: "Tot 10 jaar garantie",
      beschrijving: "LG biedt 10 jaar compressorgarantie, Daikin en Mitsubishi 7 jaar"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-sky-500" />,
      titel: "Waardevermeerdering woning",
      beschrijving: "Een energiezuinige woning is meer waard en verkoopt sneller"
    },
    {
      icon: <Snowflake className="h-8 w-8 text-sky-500" />,
      titel: "Koelen én verwarmen",
      beschrijving: "Jaar rond comfort met één systeem voor alle seizoenen"
    }
  ];

  const topModellen = [
    {
      naam: "Daikin Stylish",
      type: "Design airco",
      capaciteit: "2,0 - 5,0 kW",
      ideaalVoor: "Woonkamers & slaapkamers",
      kenmerken: ["Fluisterstil: 19 dB(A)", "Energielabel A+++", "WiFi standaard"],
      afbeelding: "/images/products/daikin-stylish-wit.webp",
      link: "/products/daikin"
    },
    {
      naam: "Tosot Clivia",
      type: "Betaalbare kwaliteit",
      capaciteit: "2,5 - 7,0 kW",
      ideaalVoor: "Alle ruimtes",
      kenmerken: ["Fluisterstil: 20 dB(A)", "WiFi standaard", "Uitstekende prijs-kwaliteit"],
      afbeelding: "/images/products/723-clivia-wit-schuin.webp",
      link: "/products/tosot%20by%20gree"
    },
    {
      naam: "Daikin Perfera",
      type: "Topmodel",
      capaciteit: "2,0 - 7,1 kW",
      ideaalVoor: "Grote ruimtes",
      kenmerken: ["2-zone sensor", "Luchtzuivering", "Zelfdiagnose"],
      afbeelding: "/images/products/daikin-perfera-wit.webp",
      link: "/products/daikin"
    },
    {
      naam: "Mitsubishi Heavy SRK-ZSX",
      type: "Premium airco",
      capaciteit: "2,0 - 5,0 kW",
      ideaalVoor: "Slaapkamers & kantoren",
      kenmerken: ["Allergen filter", "3D luchtstroom", "Eco-modus"],
      afbeelding: "/images/products/Mitsubishi heavy indus/ZSX-T-510x512.webp",
      link: "/products/mitsubishi%20heavy%20industries"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Airco Systemen - Koelen & Verwarmen | StayCool Airco"
        description="Ontdek onze airco systemen van Daikin, Mitsubishi en meer. Tot 60% energiebesparing, 7 jaar garantie, professionele installatie. Vraag gratis advies aan!"
        keywords="airco, airconditioner, warmtepomp, koelen, verwarmen, Daikin, Mitsubishi, energie besparen"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="text-white/70 mb-4" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Airco Systemen
              </h1>
              <p className="text-xl mb-6 text-sky-50">
                Jaar rond comfort met energiezuinige warmtepompen. Koelen in de zomer, verwarmen in de winter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/capaciteit-calculator"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Bereken capaciteit
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors border border-sky-700"
                >
                  Gratis advies
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold">A+++</p>
                  <p className="text-sm">Energielabel</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold">10 jaar</p>
                  <p className="text-sm">Garantie (LG)</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <LazyImage
                src="/images/products/daikin-stylish-wit.webp"
                alt="Daikin Stylish airco"
                className="rounded-2xl shadow-2xl w-full"
                width="100%"
                height="100%"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 text-gray-900">
                <Wind className="h-12 w-12 text-sky-500 mb-2" />
                <p className="font-bold">Officieel dealer</p>
                <p className="text-sm text-gray-600">Daikin, Mitsubishi & Tosot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Waarom kiezen voor een moderne airco?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {voordelen.map((voordeel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {voordeel.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{voordeel.titel}</h3>
                <p className="text-gray-600">{voordeel.beschrijving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Modellen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Onze Top Airco's
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topModellen.map((model, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                  <img
                    src={model.afbeelding}
                    alt={model.naam}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-sky-600 font-medium mb-1">{model.type}</div>
                  <h3 className="text-2xl font-bold mb-2">{model.naam}</h3>
                  <p className="text-gray-600 mb-4">{model.capaciteit}</p>
                  
                  <div className="space-y-2 mb-4">
                    {model.kenmerken.map((kenmerk, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        <span>{kenmerk}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Ideaal voor:</span><br />
                    {model.ideaalVoor}
                  </p>
                  
                  <Link
                    to={model.link}
                    className="block w-full text-center py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    Meer informatie
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
            >
              Bekijk alle airco modellen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hoe werkt een airco warmtepomp?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Snowflake className="h-6 w-6 text-sky-500" />
                  Koelen in de zomer
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Warme lucht wordt uit de ruimte gezogen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Warmte wordt naar buiten afgevoerd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Koele, gefilterde lucht wordt teruggeblazen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Temperatuur en luchtvochtigheid perfect geregeld</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Thermometer className="h-6 w-6 text-orange-500" />
                  Verwarmen in de winter
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Warmte uit buitenlucht wordt gehaald (tot -25°C)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Warmtepomp verhoogt de temperatuur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Warme lucht wordt de ruimte ingeblazen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Tot 5x efficiënter dan elektrische verwarming</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merken Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Premium Merken</h2>
              <p className="text-gray-600 mb-6">
                Wij werken uitsluitend met A-merken die bekend staan om hun 
                betrouwbaarheid, innovatie en energiezuinigheid. Als officieel 
                dealer bieden wij uitgebreide garantie en service.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900">Daikin</p>
                  <p className="text-sm text-gray-600">Marktleider</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900">Mitsubishi</p>
                  <p className="text-sm text-gray-600">Heavy & Electric</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900">Tosot</p>
                  <p className="text-sm text-gray-600">Prijs-kwaliteit</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900">LG</p>
                  <p className="text-sm text-gray-600">Innovatie</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900">Toshiba</p>
                  <p className="text-sm text-gray-600">Betrouwbaar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klaar voor jaar rond comfort?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Onze experts helpen u graag bij het kiezen van de perfecte airco 
            voor uw situatie. Vraag vandaag nog gratis advies aan!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken capaciteit
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Bel direct: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Veelgestelde vragen
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-lg p-6">
                <summary className="font-bold cursor-pointer">
                  Hoeveel kost een airco met installatie?
                </summary>
                <p className="mt-4 text-gray-600">
                  Een complete airco installatie kost tussen de €1.500 en €4.000, 
                  afhankelijk van het type, capaciteit en installatiecomplexiteit. 
                  Wij maken graag een offerte op maat voor uw situatie.
                </p>
              </details>
              
              <details className="bg-white rounded-lg shadow-lg p-6">
                <summary className="font-bold cursor-pointer">
                  Kan een airco ook verwarmen?
                </summary>
                <p className="mt-4 text-gray-600">
                  Ja, moderne airco's zijn warmtepompen die zowel kunnen koelen als 
                  verwarmen. Ze zijn tot 5x efficiënter dan elektrische verwarming 
                  en werken zelfs bij -25°C buitentemperatuur.
                </p>
              </details>
              
              <details className="bg-white rounded-lg shadow-lg p-6">
                <summary className="font-bold cursor-pointer">
                  Hoeveel stroom verbruikt een airco?
                </summary>
                <p className="mt-4 text-gray-600">
                  Een moderne airco met energielabel A+++ verbruikt ongeveer 
                  0,5-1,5 kWh per uur, afhankelijk van de capaciteit en instellingen. 
                  Bij verwarmen levert elke kWh stroom 3-5 kWh aan warmte op.
                </p>
              </details>
              
              <details className="bg-white rounded-lg shadow-lg p-6">
                <summary className="font-bold cursor-pointer">
                  Heb ik een vergunning nodig voor een airco?
                </summary>
                <p className="mt-4 text-gray-600">
                  Voor het plaatsen van een airco heeft u meestal geen vergunning 
                  nodig. In sommige gevallen (monumenten, appartement) kan dit wel 
                  nodig zijn. Wij helpen u graag met het uitzoeken van de regels 
                  voor uw situatie.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}