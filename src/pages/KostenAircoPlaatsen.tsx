import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { ChevronRight, DollarSign, BarChart2, Zap, Award, Tool, ThumbsUp } from 'react-feather';

// Types
type PriceRange = {
  type: string;
  price: string;
  install: string;
  description: string;
};

const KostenAircoPlaatsen: React.FC = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Kosten Airco Plaatsen', path: '/kosten-airco-plaatsen' }
  ];

  // Price ranges for different types of airco
  const priceRanges: PriceRange[] = [
    {
      type: 'Split airco',
      price: '€1.600 tot €3.250',
      install: '€400 tot €1.000',
      description: 'Binnen- en buitenunit, zeer energiezuinig, kan ook verwarmen'
    },
    {
      type: 'Multi-split airco',
      price: '€3.000 tot €5.550',
      install: '€800 tot €1.200',
      description: 'Één buitenunit met meerdere binnenunits, ideaal voor meerdere ruimtes'
    },
    {
      type: 'Monoblock airco',
      price: '€1.300 tot €2.150',
      install: '€250 tot €400',
      description: 'Eén unit met afvoer naar buiten, eenvoudigere installatie'
    },
    {
      type: 'Mobiele airco',
      price: '€300 tot €650',
      install: '€75 tot €125*',
      description: 'Verplaatsbaar, geen vaste installatie, alleen raamunit mogelijk'
    }
  ];

  // Factors affecting price
  const priceFactors = [
    {
      title: 'Grootte van de ruimte',
      description: 'De grootte van de ruimte bepaalt het benodigde vermogen van de airco. Voor een woonkamer van 30m² is ongeveer 3,5kW nodig, terwijl een slaapkamer van 15m² met 1,8kW kan volstaan.'
    },
    {
      title: 'Merk en kwaliteit',
      description: 'Premium merken zoals Daikin, Mitsubishi Electric en Toshiba kosten meer (€1.100 - €2.450) dan budgetmerken zoals Gree of Maxicool (€950 - €1.800).'
    },
    {
      title: 'Installatieomstandigheden',
      description: 'De afstand tussen binnen- en buitenunit, de complexiteit van leidingwerkzaamheden, en eventuele obstakels kunnen de installatiekosten verhogen.'
    },
    {
      title: 'Extra opties',
      description: 'Moderne airconditioners bieden extra opties zoals WiFi-bediening (€90 - €190), luchtzuivering, of geavanceerde filters.'
    }
  ];

  // Features comparison between types
  const comparisonSplit = {
    pros: [
      'Energiezuinig (A+++ mogelijk)',
      'Fluisterstil (vanaf 19dB)',
      'Krachtige koeling én verwarming',
      'Vast geïnstalleerd (geen opslag nodig)',
      'Langere levensduur (10-15 jaar)'
    ],
    cons: [
      'Hogere aanschafkosten',
      'Professionele installatie vereist',
      'Buitenunit nodig',
      'Niet verplaatsbaar'
    ]
  };

  const comparisonMobile = {
    pros: [
      'Lage aanschafkosten',
      'Geen vaste installatie nodig',
      'Verplaatsbaar tussen ruimtes',
      'Zelf te installeren'
    ],
    cons: [
      'Hoger energieverbruik',
      'Luidruchtiger (60-65dB)',
      'Minder koelcapaciteit',
      'Kortere levensduur (5-8 jaar)',
      'Neemt vloerruimte in beslag'
    ]
  };

  return (
    <>
      <Helmet>
        <title>Kosten Airco Plaatsen 2025 | Complete Prijsgids | StayCool Airco</title>
        <meta 
          name="description" 
          content="De gemiddelde kosten voor het kopen en installeren van een split airco zijn €1.600 tot €3.250. Bekijk onze complete prijsgids met alle kosten, prijsbepalende factoren en bespaartips."
        />
        <link rel="canonical" href="https://staycoolairco.nl/kosten-airco-plaatsen" />
        
        {/* Structured data for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Wat kost een airco inclusief installatie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "De kosten voor een split airco inclusief installatie liggen tussen €1.600 en €3.250. Voor een multi-split airco met meerdere binnenunits betaal je €3.000 tot €5.550."
                }
              },
              {
                "@type": "Question",
                "name": "Wat zijn de kosten voor alleen de installatie van een airco?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "De installatiekosten voor een split airco liggen tussen €400 en €1.000. Voor een multi-split airco betaal je €800 tot €1.200 voor installatie."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Kosten Airco Plaatsen 2025
              </h1>
              <p className="text-xl opacity-90">
                Complete prijsgids voor aanschaf en installatie van airconditioning
              </p>
              <p className="mt-6 text-lg font-medium">
                Bijgewerkt op: {new Date().toLocaleDateString('nl-NL', {day: '2-digit', month: '2-digit', year: 'numeric'})}
              </p>
            </div>
            
            {/* Introduction */}
            <div className="p-8">
              <p className="text-xl leading-relaxed mb-8">
                De gemiddelde kosten voor het kopen en installeren zijn bij een Split Airco <strong>€1.600 tot €3.250</strong>. Deze kosten zijn inclusief montage. 
                Voor een Multi-split airco betaal je <strong>€3.000 tot €5.550</strong> voor de installatie en aanschaf.
              </p>
              
              {/* Table of Contents */}
              <div className="bg-gray-50 rounded-lg p-6 mb-10">
                <h2 className="text-xl font-semibold mb-4">Inhoudsopgave</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#kosten-overzicht" className="flex items-center text-blue-700 hover:text-blue-900">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      <span>Airco kosten plus installatie</span>
                    </a>
                  </li>
                  <li>
                    <a href="#prijsfactoren" className="flex items-center text-blue-700 hover:text-blue-900">
                      <ChevronRight className="h-4 w-4 mr-1" />
                      <span>Belangrijke prijsbepalende factoren</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Call to Action */}
              <div className="bg-blue-50 rounded-lg p-6 mb-10 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Offerte aanvragen</h3>
                <p className="mb-4">
                  Ontvang een persoonlijke prijsopgave voor jouw situatie, inclusief advies over het juiste vermogen en de beste plaatsing.
                </p>
                <Link to="/contact" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Gratis offerte aanvragen
                </Link>
              </div>
              
              {/* Pricing Section */}
              <section id="kosten-overzicht" className="mt-14 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center mb-6">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                  Airco kosten plus installatie
                </h2>
                <p className="mb-6">
                  Airco kopen en laten installeren gebeurt uiteraard niet gratis. Daar zijn bepaalde kosten aan verbonden. 
                  Hoeveel airco plaatsen je gaat kosten, hangt af van een aantal factoren.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Kostenoverzicht van de verschillende airco's</h3>
                <p className="mb-4">
                  Als je airco gaat laten plaatsen door een professional, betaal je niet alleen de kostprijs van de airco zelf, 
                  maar ook de airco installatie kosten.
                </p>
                
                {/* First Table - Total Costs */}
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-700 text-white">
                        <th className="py-3 px-4 text-left">Airco kosten per type</th>
                        <th className="py-3 px-4 text-left">Prijzen (incl. installatie)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceRanges.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-3 px-4 border-b border-gray-200 font-medium">{item.type}</td>
                          <td className="py-3 px-4 border-b border-gray-200">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Second Table - Installation Costs */}
                <h3 className="text-xl font-semibold mb-4">Airco plaatsen kosten</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="py-3 px-4 text-left">Type airco</th>
                        <th className="py-3 px-4 text-left">Installatiekosten</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceRanges.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-3 px-4 border-b border-gray-200 font-medium">{item.type}</td>
                          <td className="py-3 px-4 border-b border-gray-200">{item.install}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
              
              {/* Price Factors Section */}
              <section id="prijsfactoren" className="mt-16 scroll-mt-32">
                <h2 className="text-2xl font-bold flex items-center mb-6">
                  <BarChart2 className="h-6 w-6 text-blue-600 mr-2" />
                  Belangrijke prijsbepalende factoren
                </h2>
                <p className="mb-6">
                  Er zijn verschillende factoren die de prijs van airco laten plaatsen beïnvloeden. 
                  Bovenstaande prijzen kunnen dus nog sterk schommelen.
                </p>
                
                {/* Price Factors Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {priceFactors.map((factor, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                      <h3 className="text-lg font-semibold mb-3">
                        {index + 1}. {factor.title}
                      </h3>
                      <p className="text-gray-700">
                        {factor.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default KostenAircoPlaatsen;
