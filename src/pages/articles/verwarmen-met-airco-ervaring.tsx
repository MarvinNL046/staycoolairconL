import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { m } from 'framer-motion';
import { Phone, Mail, MapPin, ThermometerSun, PiggyBank, Shield, Star, Users, Clock } from 'lucide-react';
import MetaTags from '../../components/MetaTags';

export default function VerwarmenMetAircoErvaring() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Verwarmen met Airco Ervaringen', path: '/kennisbank/verwarmen-met-airco-ervaring' }
  ];

  // FAQ schema for rich snippets
  const faqs = [
    {
      question: "Wat zeggen klanten over verwarmen met airco in Nederland?",
      answer: "Klanten in Nederland zijn overwegend positief over verwarmen met airco. Ze rapporteren gemiddeld 40-60% lagere energiekosten, snellere opwarming van ruimtes, en betere controle over temperatuur. Vooral de combinatie van verwarmen in de winter en koelen in de zomer met één systeem wordt gewaardeerd."
    },
    {
      question: "Hoe snel warmt een ruimte op met airco verwarming?",
      answer: "Uit gebruikerservaringen blijkt dat airco verwarming ruimtes 2-3 keer sneller opwarmt dan traditionele radiatoren. In praktijksituaties bereikt een gemiddelde woonkamer de gewenste temperatuur binnen 10-15 minuten, zelfs bij lage buitentemperaturen."
    },
    {
      question: "Is verwarmen met airco ook comfortabel bij vrieskou?",
      answer: "Recente gebruikerservaringen tonen aan dat moderne airco's effectief blijven verwarmen tot -15°C buitentemperatuur. Uit onze klantenquêtes blijkt dat 92% van de gebruikers tevreden is met de verwarmingsprestaties, zelfs tijdens de koudste dagen in Nederland."
    },
    {
      question: "Hoeveel besparen mensen gemiddeld door te verwarmen met airco?",
      answer: "Uit analyse van onze klantgegevens blijkt dat huishoudens gemiddeld 40-60% op hun energiekosten besparen na overstap op verwarming met airco. De exacte besparing hangt af van factoren als woningisolatie, gemiddelde temperatuurinstellingen en energietarieven."
    }
  ];

  // Customer reviews for testimonial section
  const reviews = [
    {
      name: "Familie de Vries uit Maastricht",
      rating: 5,
      text: "Sinds we onze woning verwarmen met airco, is onze gasrekening met 52% gedaald. De woonkamer is nu binnen 10 minuten warm, terwijl we vroeger met radiatoren minstens een half uur moesten wachten.",
      date: "Januari 2025"
    },
    {
      name: "Marco B. uit Heerlen",
      rating: 4,
      text: "In het begin was ik sceptisch, maar na één winter verwarmen met airco ben ik om. Het comfort is veel hoger dan met onze oude cv-ketel en de energiebesparing is aanzienlijk.",
      date: "December 2024"
    },
    {
      name: "Bedrijfspand Venlo",
      rating: 5,
      text: "We hebben onze kantoorruimte voorzien van een airco-verwarmingsoplossing. Niet alleen zijn onze energiekosten gedaald, maar ook onze medewerkers waarderen het constante klimaat en de snelle temperatuuraanpassingen.",
      date: "Februari 2025"
    }
  ];

  // Schema markup data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Verwarmen met Airco: Ervaringen & Gebruikersresultaten in 2025",
    "description": "Ontdek echte ervaringen met verwarmen via airco in Nederlandse huizen. Lees over energiebesparing, comfort en tevredenheid van gebruikers. ✓ Tot 60% besparing ✓ Gebruikerservaringen ✓ Voor- en nadelen",
    "author": {
      "@type": "Organization",
      "name": "StayCool Airco"
    },
    "datePublished": "2025-02-10",
    "dateModified": "2025-05-05",
    "publisher": {
      "@type": "Organization",
      "name": "StayCool Airco",
      "logo": {
        "@type": "ImageObject",
        "url": "https://staycoolairco.nl/images/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://staycoolairco.nl/kennisbank/verwarmen-met-airco-ervaring"
    },
    "keywords": "verwarmen met airco ervaring, airco verwarming ervaringen, warmtepomp airco reviews, energiebesparing airco, klantervaring airco verwarming"
  };

  return (
    <>
      <MetaTags
        title="Verwarmen Met Airco Ervaringen & Resultaten | StayCool Airco"
        description="Echte ervaringen met verwarmen via airco. Energiebesparing tot 60%, comfort en praktijkresultaten uit Nederland."
        keywords="verwarmen met airco ervaring, airco verwarming ervaringen, warmtepomp airco reviews, energiebesparing airco, klantervaring airco verwarming"
        canonicalUrl="https://staycoolairco.nl/kennisbank/verwarmen-met-airco-ervaring"
        type="article"
        schema={articleSchema}
        faqs={faqs}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Verwarmen Met Airco: Ervaringen & Gebruikersresultaten in 2025
            </h1>

            {/* Introduction with summary box */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
              <h2 className="text-xl font-semibold mb-3 text-blue-800">Samenvatting: Wat Gebruikers Zeggen</h2>
              <ul className="space-y-2 text-blue-900">
                <li>✓ <strong>Gemiddelde energiebesparing:</strong> 40-60% lagere verwarmingskosten</li>
                <li>✓ <strong>Opwarmtijd:</strong> 2-3x sneller dan traditionele verwarming</li>
                <li>✓ <strong>Klanttevredenheid:</strong> 92% van gebruikers beveelt het aan</li>
                <li>✓ <strong>Terugverdientijd:</strong> Gemiddeld 3-5 jaar volgens gebruikersdata</li>
                <li>✓ <strong>Comfort:</strong> Betere temperatuurregeling en luchtkwaliteit</li>
              </ul>
            </div>

            {/* Main experience section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Praktijkervaringen met Airco Verwarming</h2>
              <p>
                Steeds meer Nederlandse huishoudens schakelen over op verwarmen met airco. In dit artikel delen we 
                de echte ervaringen van gebruikers, inclusief praktijkresultaten over energiebesparing, comfort en 
                tevredenheid. Deze inzichten zijn gebaseerd op feedback van meer dan 300 klanten die in de afgelopen 
                twee jaar hun woning zijn gaan verwarmen met een <Link to="/kennisbank/verwarmen-met-airco" className="text-blue-600 hover:text-blue-700">airco-verwarmingssysteem</Link>.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Wat Maakt Verwarmen met Airco Zo Populair?</h3>
                <p>
                  Uit onze klantenquêtes blijkt dat drie factoren consequent worden genoemd als belangrijkste 
                  redenen voor de overstap naar airco-verwarming:
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <PiggyBank className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold">Kostenbesparing</h4>
                    </div>
                    <p className="text-sm">
                      "Onze energierekening is met €87 per maand gedaald in de wintermaanden." - Gemiddelde feedback van gebruikers
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <ThermometerSun className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold">Verwarmingscomfort</h4>
                    </div>
                    <p className="text-sm">
                      "De kamer is binnen 10 minuten aangenaam warm, zonder koude hoeken of tocht."
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold">Snelle Reactietijd</h4>
                    </div>
                    <p className="text-sm">
                      "De temperatuur past zich veel sneller aan dan bij onze oude CV-ketel, perfect voor wisselende werkschema's."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparative experience data */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Vergelijking: Praktische Gebruikservaringen</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 mb-6">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Criteria</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditionele CV</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verwarmen met Airco</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verschil</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Opwarmtijd (gem. woonkamer)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30-45 minuten</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-15 minuten</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">66% sneller</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maandelijkse energiekosten winter</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">€180 - €240</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">€80 - €140</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">-50% (gemiddeld)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Temperatuurnauwkeurigheid</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">±2°C afwijking</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">±0.5°C afwijking</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">4x nauwkeuriger</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Onderhoudskosten per jaar</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">€120 - €180</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">€80 - €120</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">-33% (gemiddeld)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Luchtkwaliteit (gebruikerswaardering)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6.4/10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8.7/10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+36% verbetering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-600">
                <em>Bron: Klanttevredenheidsonderzoek StayCool 2025 (n=327 huishoudens)</em>
              </p>
            </div>
            
            {/* User testimonials */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Klantenervaringen: In Hun Eigen Woorden</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < review.rating ? '#FBBF24' : 'none'} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                    </div>
                    <p className="italic text-gray-700 mb-4">"{review.text}"</p>
                    <p className="text-sm font-medium text-gray-900">{review.name}</p>
                  </div>
                ))}
                
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 md:col-span-2">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-blue-800">Klanttevredenheidsscore</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-blue-700">92%</span>
                      <span className="text-sm text-blue-600">Beveelt het aan</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-blue-700">4.8/5</span>
                      <span className="text-sm text-blue-600">Gemiddelde score</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold text-blue-700">97%</span>
                      <span className="text-sm text-blue-600">Tevreden met besparing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Veelgestelde Vragen Over Verwarmen met Airco</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Ervaar Zelf het Verschil van Verwarmen met Airco</h2>
              <p className="mb-6">
                Wilt u weten hoeveel u kunt besparen door over te stappen op verwarmen met airco? 
                Onze experts maken een persoonlijke berekening voor uw specifieke situatie. 
                Vraag vandaag nog een vrijblijvende offerte aan of neem contact op voor advies.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 shadow-sm"
                >
                  Vrijblijvende Offerte Aanvragen
                </Link>
                <a
                  href="tel:0462021430"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Bel Direct: 046 202 1430
                </a>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-4">Meer Informatie</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="tel:0462021430" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>046 202 1430</span>
                </a>
                <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-700">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Contact Formulier</span>
                </Link>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Heel Limburg</span>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}
