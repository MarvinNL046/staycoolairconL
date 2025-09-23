import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import Breadcrumbs from '../../components/SEO/Breadcrumbs';
import { Check, X, ArrowRight, Info, Phone, Download, Calendar, Home } from 'lucide-react';

export default function SplitVsMonoblock() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Split vs Monoblock Airco: Complete Vergelijking & Advies",
    "description": "Ontdek de verschillen tussen split en monoblock aircosystemen. Leer welk type airco het beste past bij uw situatie met onze uitgebreide vergelijking.",
    "author": {
      "@type": "Organization",
      "name": "StayCool Airco"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <MetaTags
        title="Split vs Monoblock Airco Vergelijking 2024 | Welke Kies Je?"
        description="Split of monoblock airco? Ontdek de voor- en nadelen, prijsverschillen en welk systeem het beste bij jouw situatie past. Inclusief kostenberekening!"
        canonicalUrl="https://staycoolairco.nl/vergelijkingen/split-vs-monoblock"
        type="article"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Breadcrumbs 
        items={[
          { name: "Vergelijkingen", path: "/vergelijkingen" },
          { name: "Split vs Monoblock", path: "/vergelijkingen/split-vs-monoblock" }
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Split vs Monoblock Airco Systemen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een complete vergelijking tussen split units en monoblock systemen. 
              Ontdek welk type airconditioning het beste past bij uw situatie.
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Split System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h2 className="text-2xl font-bold text-center">Split Systeem</h2>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 font-medium">
                      Binnenunit + Buitenunit verbonden met koelleidingen
                    </p>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-3 text-green-600">Voordelen</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Zeer stil binnen (vanaf 19 dB)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hoogste energiezuinigheid (A+++)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Geschikt voor verwarmen tot -25°C</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lange levensduur (15-20 jaar)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multi-split mogelijkheden</span>
                  </li>
                </ul>
                
                <h3 className="font-bold text-lg mb-3 text-red-600">Nadelen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Professionele installatie vereist</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hogere initiële kosten</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Doorvoer door muur nodig</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>F-gassen certificaat vereist</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Monoblock System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <h2 className="text-2xl font-bold text-center">Monoblock Systeem</h2>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-700 font-medium">
                      Eén unit met slang(en) door raam of muur
                    </p>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-3 text-green-600">Voordelen</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lagere aanschafprijs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Zelf te installeren</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Verplaatsbaar tussen ruimtes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Geen F-gassen certificaat nodig</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Direct gebruiksklaar</span>
                  </li>
                </ul>
                
                <h3 className="font-bold text-lg mb-3 text-red-600">Nadelen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Meer geluid (45-65 dB)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Minder energiezuinig</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Beperkte verwarmingscapaciteit</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Neemt ruimte in beslag</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-2xl font-bold text-gray-900 p-6 border-b">Gedetailleerde Vergelijking</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left px-6 py-4 font-semibold text-gray-900">Aspect</th>
                    <th className="text-center px-6 py-4 font-semibold text-blue-600">Split Systeem</th>
                    <th className="text-center px-6 py-4 font-semibold text-green-600">Monoblock</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Aanschafprijs</td>
                    <td className="px-6 py-4 text-center">€1.200 - €4.000</td>
                    <td className="px-6 py-4 text-center">€300 - €800</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Installatiekosten</td>
                    <td className="px-6 py-4 text-center">€500 - €1.000</td>
                    <td className="px-6 py-4 text-center">€0 (zelf te doen)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Energieverbruik per jaar*</td>
                    <td className="px-6 py-4 text-center bg-green-50">€150 - €250</td>
                    <td className="px-6 py-4 text-center">€400 - €600</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Geluidsniveau</td>
                    <td className="px-6 py-4 text-center bg-green-50">19 - 45 dB</td>
                    <td className="px-6 py-4 text-center">45 - 65 dB</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Koelvermogen</td>
                    <td className="px-6 py-4 text-center bg-green-50">1.5 - 8.0 kW</td>
                    <td className="px-6 py-4 text-center">2.0 - 4.0 kW</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Verwarmingsfunctie</td>
                    <td className="px-6 py-4 text-center bg-green-50">Tot -25°C effectief</td>
                    <td className="px-6 py-4 text-center">Tot -5°C beperkt</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Levensduur</td>
                    <td className="px-6 py-4 text-center bg-green-50">15-20 jaar</td>
                    <td className="px-6 py-4 text-center">5-10 jaar</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Geschikt voor</td>
                    <td className="px-6 py-4 text-center">Permanente installatie</td>
                    <td className="px-6 py-4 text-center">Tijdelijk/huurwoning</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-gray-50 text-sm text-gray-600">
              * Gebaseerd op 1000 draaiuren per jaar bij gemiddeld gebruik
            </div>
          </div>

          {/* When to Choose */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kies een Split Systeem als...
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>U een eigen woning heeft</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Energiebesparing belangrijk is</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>U het hele jaar door comfort wilt</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Stille werking essentieel is</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>U meerdere ruimtes wilt koelen</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kies een Monoblock als...
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>U een huurwoning heeft</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Budget beperkt is</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>U alleen in zomer koelt</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Flexibiliteit belangrijk is</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Snel een oplossing nodig heeft</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cost Calculator CTA */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bereken Uw Besparing
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Ontdek hoeveel u kunt besparen met een split systeem versus een monoblock. 
                Onze calculator houdt rekening met aanschaf, installatie en energieverbruik.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Na 3 jaar</p>
                  <p className="text-2xl font-bold text-gray-900">€450 voordeliger</p>
                  <p className="text-sm text-gray-600">met split systeem</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Na 5 jaar</p>
                  <p className="text-2xl font-bold text-green-600">€1.250 voordeliger</p>
                  <p className="text-sm text-gray-600">met split systeem</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Na 10 jaar</p>
                  <p className="text-2xl font-bold text-green-600">€3.500 voordeliger</p>
                  <p className="text-sm text-gray-600">met split systeem</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact?request=kostencalculatie"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Vraag Persoonlijke Berekening Aan
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Expert Advice CTA */}
          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Twijfelt u nog? Vraag gratis advies!
                </h3>
                <p className="text-gray-700 mb-6">
                  Onze specialisten helpen u graag bij het maken van de juiste keuze. 
                  We kijken naar uw specifieke situatie, wensen en budget.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Analyse van uw woonsituatie</li>
                  <li>✓ Berekening terugverdientijd</li>
                  <li>✓ Vrijblijvende offerte op maat</li>
                  <li>✓ Demonstratie verschillende systemen</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Direct een expert spreken?
                </p>
                <a
                  href="tel:0462021430"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center text-lg font-semibold mb-4"
                >
                  <Phone className="h-6 w-6 mr-2" />
                  046 202 1430
                </a>
                <p className="text-sm text-gray-600 mb-4">
                  Ma-Za: 8:00 - 20:00 uur
                </p>
                <div className="border-t pt-4">
                  <Link
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Of plan een adviesgesprek
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Download Guide */}
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Download Onze Gratis Keuzehulp
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Een uitgebreide gids met alle informatie over split en monoblock systemen, 
              inclusief checklist voor uw situatie.
            </p>
            <Link
              to="/contact?request=keuzehulp-split-monoblock"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center font-semibold"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Keuzehulp (PDF)
            </Link>
          </div>

          {/* Appointment CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mt-8">
            <div className="text-center">
              <Home className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Gratis Thuisadvies voor de Juiste Keuze
              </h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Twijfelt u tussen een split of monoblock systeem? Onze expert komt graag bij u thuis 
                om uw situatie te bekijken en het beste advies te geven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://afspraken.staycoolairco.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors inline-flex items-center justify-center font-semibold"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Plan Thuisbezoek In
                </a>
                <a
                  href="tel:0462021430"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-400 transition-colors inline-flex items-center justify-center font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Bel: 046 202 1430
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}