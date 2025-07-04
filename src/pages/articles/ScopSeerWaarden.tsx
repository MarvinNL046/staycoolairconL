import React from 'react';
import { m } from 'framer-motion';
import MetaTags from '../../components/MetaTags';
import { BarChart, ThermometerSun, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ScopSeerArticle() {
  const values = [
    {
      type: 'SEER',
      description: 'Seasonal Energy Efficiency Ratio',
      ranges: [
        { label: 'Uitstekend', value: '≥ 8.5', class: 'A+++' },
        { label: 'Zeer goed', value: '6.1 - 8.4', class: 'A++' },
        { label: 'Goed', value: '5.6 - 6.0', class: 'A+' },
        { label: 'Gemiddeld', value: '5.1 - 5.5', class: 'A' }
      ],
      explanation: 'Meet de koelefficiëntie over een heel seizoen'
    },
    {
      type: 'SCOP',
      description: 'Seasonal Coefficient of Performance',
      ranges: [
        { label: 'Uitstekend', value: '≥ 5.1', class: 'A+++' },
        { label: 'Zeer goed', value: '4.6 - 5.0', class: 'A++' },
        { label: 'Goed', value: '4.0 - 4.5', class: 'A+' },
        { label: 'Gemiddeld', value: '3.4 - 3.9', class: 'A' }
      ],
      explanation: 'Meet de verwarmingsefficiëntie over een heel seizoen'
    }
  ];

  return (
    <>
      <MetaTags
        title="SCOP en SEER Waarden Uitgelegd | StayCool Airco"
        description="Begrijp SCOP en SEER waarden van airconditioners. Leer hoe deze waarden de efficiëntie bepalen en help u de beste keuze te maken."
        keywords="SCOP waarde, SEER waarde, airco efficiëntie, energielabel airco, COP airco, EER airco"
        canonicalUrl="https://staycoolairco.nl/kennisbank/scop-seer-waarden"
        type="article"
        faqs={[
          {
            question: "Wat is een goede SCOP waarde voor Nederland?",
            answer: "Voor Nederland is een SCOP van minimaal 4.0 aanbevolen voor A+ label. Voor optimale efficiëntie kies voor SCOP ≥ 4.6 (A++) of hoger. Dit zorgt voor lage verwarmingskosten in ons klimaat."
          },
          {
            question: "Waarom zijn SCOP en SEER belangrijker dan COP en EER?",
            answer: "SCOP en SEER meten prestaties over een heel seizoen met verschillende temperaturen, terwijl COP en EER slechts één testpunt gebruiken. Dit geeft een realistischer beeld van jaarlijkse energiekosten."
          },
          {
            question: "Hoeveel bespaar ik met een hoge SCOP waarde?",
            answer: "Een airco met SCOP 5.0 bespaart ongeveer 25% vergeleken met SCOP 4.0. Bij jaarlijkse verwarmingskosten van €800 bespaart u dus ongeveer €200 per jaar."
          },
          {
            question: "Wat betekent het energielabel bij deze waarden?",
            answer: "Het energielabel (A+++ tot G) wordt bepaald door SCOP en SEER waarden. A+++ betekent zeer hoge efficiëntie en laagste energiekosten. A+ is het minimum voor moderne airconditioners."
          }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "SCOP en SEER Waarden Uitgelegd",
          "description": "Begrijp SCOP en SEER waarden van airconditioners. Leer hoe deze waarden de efficiëntie bepalen en help u de beste keuze te maken.",
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
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://staycoolairco.nl/kennisbank/scop-seer-waarden"
          },
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString().split('T')[0]
        }}
      />

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
              SCOP en SEER Waarden Uitgelegd
            </h1>
            <p className="text-xl text-gray-600">
              Begrijp de efficiëntiewaarden van airconditioners
            </p>
          </m.div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Wat betekenen SCOP en SEER?</h2>
            <p>
              SCOP en SEER zijn belangrijke maatstaven voor de efficiëntie van een 
              airconditioner. Deze waarden geven aan hoeveel energie het systeem 
              produceert (koeling of verwarming) in verhouding tot de gebruikte 
              elektriciteit.
            </p>

            {values.map((value, index) => (
              <m.div
                key={value.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 my-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  {value.type === 'SEER' ? (
                    <ThermometerSun className="h-8 w-8 text-blue-600" />
                  ) : (
                    <Zap className="h-8 w-8 text-red-600" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 m-0">
                      {value.type}
                    </h3>
                    <p className="text-gray-600 text-sm m-0">
                      {value.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {value.ranges.map((range) => (
                    <div 
                      key={range.class}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <div className="text-sm text-gray-600">{range.label}</div>
                      <div className="font-semibold">{range.value}</div>
                      <div className="text-sm text-blue-600">{range.class}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 m-0">
                  {value.explanation}
                </p>
              </m.div>
            ))}

            <h2>Hoe worden deze waarden berekend?</h2>
            <p>
              SCOP en SEER worden berekend door de totale koel- of verwarmingscapaciteit 
              te delen door het totale energieverbruik over een heel seizoen. Hierbij 
              wordt rekening gehouden met:
            </p>

            <ul>
              <li>Verschillende buitentemperaturen</li>
              <li>Deellastgebruik</li>
              <li>Stand-by verbruik</li>
              <li>Hulpverwarming (bij SCOP)</li>
            </ul>

            <div className="bg-blue-50 rounded-xl p-6 my-8">
              <h3 className="flex items-center text-blue-900 mt-0">
                <BarChart className="h-6 w-6 mr-2" />
                Rekenvoorbeeld
              </h3>
              <p className="mb-0">
                Een SCOP van 4.0 betekent dat voor elke kWh elektriciteit die de airco 
                verbruikt, er 4 kWh aan warmte wordt geproduceerd. Dit komt neer op 
                een rendement van 400%.
              </p>
            </div>

            <h2>Waarom zijn deze waarden belangrijk?</h2>
            <ol>
              <li>
                <strong>Energieverbruik:</strong> Hogere waarden betekenen lager 
                energieverbruik en lagere kosten.
              </li>
              <li>
                <strong>Milieu-impact:</strong> Efficiëntere systemen hebben een 
                lagere CO2-uitstoot.
              </li>
              <li>
                <strong>Subsidies:</strong> Minimumwaarden kunnen vereist zijn voor 
                bepaalde subsidies.
              </li>
              <li>
                <strong>Vergelijking:</strong> Maakt het mogelijk om verschillende 
                systemen objectief te vergelijken.
              </li>
            </ol>
          </div>

          {/* FAQ Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde vragen over SCOP en SEER</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                  Wat is een goede SCOP waarde voor Nederland?
                </h3>
                <div className="px-6 py-4">
                  <p>Voor Nederland is een SCOP van minimaal 4.0 aanbevolen voor A+ label. Voor optimale efficiëntie kies voor SCOP ≥ 4.6 (A++) of hoger. Dit zorgt voor lage verwarmingskosten in ons klimaat.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                  Waarom zijn SCOP en SEER belangrijker dan COP en EER?
                </h3>
                <div className="px-6 py-4">
                  <p>SCOP en SEER meten prestaties over een heel seizoen met verschillende temperaturen, terwijl COP en EER slechts één testpunt gebruiken. Dit geeft een realistischer beeld van jaarlijkse energiekosten.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                  Hoeveel bespaar ik met een hoge SCOP waarde?
                </h3>
                <div className="px-6 py-4">
                  <p>Een airco met SCOP 5.0 bespaart ongeveer 25% vergeleken met SCOP 4.0. Bij jaarlijkse verwarmingskosten van €800 bespaart u dus ongeveer €200 per jaar.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                  Wat betekent het energielabel bij deze waarden?
                </h3>
                <div className="px-6 py-4">
                  <p>Het energielabel (A+++ tot G) wordt bepaald door SCOP en SEER waarden. A+++ betekent zeer hoge efficiëntie en laagste energiekosten. A+ is het minimum voor moderne airconditioners.</p>
                </div>
              </div>
            </div>
          </m.div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">
              Hulp nodig bij het kiezen?
            </h2>
            <p className="text-blue-100 mb-8">
              Onze experts helpen u graag bij het selecteren van de meest efficiënte 
              airco voor uw situatie
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                <BarChart className="h-5 w-5 mr-2" />
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
