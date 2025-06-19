import React from 'react';
import { m } from 'framer-motion';
import { ArrowLeft, Thermometer, Euro, Zap, Snowflake, Sun, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';

export default function AircoInDeWinter() {
  return (
    <>
      <MetaTags
        title="Airco in de Winter: Verwarmen met Warmtepomp | StayCool Airco"
        description="Ontdek hoe u uw airco optimaal kunt gebruiken voor verwarming in de winter. Bespaar tot 70% op verwarmingskosten met moderne warmtepomp technologie in Limburg."
        keywords="airco winter, warmtepomp verwarming, airco verwarmen, energiebesparing winter, warmtepomp limburg, airco winterstand"
        canonicalUrl="https://staycoolairco.nl/blog/airco-in-de-winter"
        type="article"
        speakableContent={[
          "Moderne airco's kunnen zeer efficiënt verwarmen in de winter",
          "Een warmtepomp airco is tot 70% zuiniger dan elektrische verwarming",
          "StayCool Airco helpt u optimaal besparen op verwarmingskosten",
          "Zelfs bij vrieskou kan een airco warmtepomp nog effectief verwarmen",
          "Ideaal voor tussenseizoenen en als aanvullende verwarming"
        ]}
        faqs={[
          {
            question: "Kan een airco ook verwarmen in de winter?",
            answer: "Ja, moderne airco's zijn warmtepompen die zeer efficiënt kunnen verwarmen. Ze halen warmte uit de buitenlucht en kunnen tot -15°C effectief werken. Dit maakt ze perfect voor Nederlandse winters."
          },
          {
            question: "Hoeveel kan ik besparen door te verwarmen met een airco?",
            answer: "Een warmtepomp airco kan tot 70% zuiniger zijn dan elektrische verwarming. Voor een gemiddelde woning betekent dit een besparing van €300-500 per jaar op verwarmingskosten."
          },
          {
            question: "Werkt een airco nog bij vrieskou?",
            answer: "Ja, kwalitatieve airco's werken tot -15°C of zelfs -20°C. Bij zeer lage temperaturen neemt de efficiëntie wel af, maar moderne systemen blijven effectief verwarmen."
          },
          {
            question: "Is het voordeliger dan gas of stadsverwarming?",
            answer: "In veel gevallen wel, vooral als u zonnepanelen heeft. De exacte besparing hangt af van energieprijzen en uw specifieke situatie. We berekenen graag uw potentiële besparing."
          }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Airco in de Winter: Verwarmen met Warmtepomp",
          "description": "Ontdek hoe u uw airco optimaal kunt gebruiken voor verwarming in de winter",
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
          "datePublished": "2025-01-18",
          "dateModified": "2025-01-18"
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar Blog
            </Link>
          </nav>

          {/* Article Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Airco in de Winter: Slim Verwarmen met Warmtepomp Technologie
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Ontdek hoe uw airco een efficiënte verwarmingsoplossing kan zijn tijdens de koude maanden
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span>18 januari 2025</span>
              <span className="mx-2">•</span>
              <span>5 minuten leestijd</span>
            </div>
          </m.div>

          {/* Featured Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <img 
              src="/images/blog/airco-winter-verwarming.webp" 
              alt="Airco verwarming in de winter - warmtepomp technologie"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </m.div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="lead">
                Wist u dat uw airco niet alleen kan koelen, maar ook een van de meest energiezuinige manieren is om uw huis te verwarmen? 
                Moderne airconditioners zijn eigenlijk warmtepompen die jaar rond comfort bieden. In dit artikel leggen we uit hoe u uw airco 
                optimaal kunt inzetten tijdens de wintermaanden.
              </p>
            </m.div>

            {/* How it Works */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Thermometer className="h-6 w-6 mr-2 text-blue-600" />
                Hoe werkt verwarmen met een airco?
              </h2>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Het warmtepomp principe</h3>
                <p>
                  Een airco werkt als een warmtepomp door warmte uit de buitenlucht te halen en deze naar binnen te transporteren. 
                  Zelfs bij temperaturen tot -15°C is er nog voldoende warmte in de lucht aanwezig om uw huis comfortabel te verwarmen.
                </p>
              </div>

              <p>
                Het proces is het omgekeerde van koelen: in plaats van warmte naar buiten te transporteren, haalt de airco warmte van buiten 
                naar binnen. Dit gebeurt via het koudemiddel dat circuleert tussen de binnen- en buitenunit.
              </p>

              <h3>Voordelen van airco verwarming:</h3>
              <ul>
                <li><strong>Hoge efficiëntie:</strong> Tot 70% zuiniger dan elektrische verwarming</li>
                <li><strong>Snelle opwarming:</strong> Warme lucht wordt direct de ruimte ingeblazen</li>
                <li><strong>Gerichte verwarming:</strong> Verwarm alleen de ruimtes die u gebruikt</li>
                <li><strong>Geen installatie nodig:</strong> Uw bestaande airco kan direct verwarmen</li>
              </ul>
            </m.section>

            {/* Cost Savings */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Euro className="h-6 w-6 mr-2 text-green-600" />
                Hoeveel kunt u besparen?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Elektrische verwarming</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">€0.30</p>
                  <p className="text-sm text-green-700">per kWh warmte</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Airco warmtepomp</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">€0.08</p>
                  <p className="text-sm text-blue-700">per kWh warmte (SCOP 4.0)</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <TrendingDown className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-medium">Rekenvoorbeeld</p>
                    <p className="text-yellow-700 text-sm">
                      Voor een gemiddelde woning betekent dit een besparing van €300-500 per jaar 
                      ten opzichte van elektrische verwarming.
                    </p>
                  </div>
                </div>
              </div>
            </m.section>

            {/* Seasonal Usage */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Snowflake className="h-6 w-6 mr-2 text-blue-600" />
                Optimaal gebruik per seizoen
              </h2>

              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="flex items-center text-lg font-semibold mb-3">
                    <Sun className="h-5 w-5 mr-2 text-orange-500" />
                    Tussenseizoenen (Maart-Mei, September-November)
                  </h3>
                  <p>
                    <strong>Meest efficiënt:</strong> Bij temperaturen tussen 5-15°C werkt uw airco optimaal. 
                    Perfect voor die koude ochtenden en avonden wanneer de centrale verwarming nog niet aan hoeft.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="flex items-center text-lg font-semibold mb-3">
                    <Snowflake className="h-5 w-5 mr-2 text-blue-500" />
                    Winter (December-Februari)
                  </h3>
                  <p>
                    <strong>Aanvullende verwarming:</strong> Zelfs bij vorst blijft uw airco effectief, 
                    al neemt de efficiëntie af. Ideaal als extra verwarming voor specifieke ruimtes 
                    of als hoofdverwarming in goed geïsoleerde huizen.
                  </p>
                </div>
              </div>
            </m.section>

            {/* Tips for Winter Use */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Zap className="h-6 w-6 mr-2 text-blue-600" />
                Tips voor optimaal wintergebruik
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">1. Juiste temperatuur instellen</h4>
                    <p className="text-gray-600 text-sm">
                      Stel de gewenste temperatuur in op 20-21°C. Elke graad hoger verhoogt het verbruik met 6%.
                    </p>
                  </div>

                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">2. Gebruik de timer functie</h4>
                    <p className="text-gray-600 text-sm">
                      Programmeer de airco om 30 minuten voor u thuiskomt op te warmen.
                    </p>
                  </div>

                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">3. Onderhoud is belangrijk</h4>
                    <p className="text-gray-600 text-sm">
                      Vervang filters regelmatig en laat jaarlijks onderhoud uitvoeren voor optimale prestaties.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">4. Combineer met isolatie</h4>
                    <p className="text-gray-600 text-sm">
                      Zorg voor goede isolatie om de warmte binnen te houden en efficiëntie te maximaliseren.
                    </p>
                  </div>

                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">5. Ontdooi functie</h4>
                    <p className="text-gray-600 text-sm">
                      Moderne airco's hebben een automatische ontdooi functie voor optimale werking bij vorst.
                    </p>
                  </div>

                  <div className="bg-white border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">6. Zonering toepassen</h4>
                    <p className="text-gray-600 text-sm">
                      Verwarm alleen de ruimtes die u gebruikt voor maximale efficiëntie.
                    </p>
                  </div>
                </div>
              </div>
            </m.section>

            {/* FAQ Section */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde vragen over airco verwarming</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                    Kan een airco ook verwarmen in de winter?
                  </h3>
                  <div className="px-6 py-4 faq-answer speakable-content">
                    <p>Ja, moderne airco's zijn warmtepompen die zeer efficiënt kunnen verwarmen. Ze halen warmte uit de buitenlucht en kunnen tot -15°C effectief werken. Dit maakt ze perfect voor Nederlandse winters.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                    Hoeveel kan ik besparen door te verwarmen met een airco?
                  </h3>
                  <div className="px-6 py-4 faq-answer speakable-content">
                    <p>Een warmtepomp airco kan tot 70% zuiniger zijn dan elektrische verwarming. Voor een gemiddelde woning betekent dit een besparing van €300-500 per jaar op verwarmingskosten.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                    Werkt een airco nog bij vrieskou?
                  </h3>
                  <div className="px-6 py-4 faq-answer speakable-content">
                    <p>Ja, kwalitatieve airco's werken tot -15°C of zelfs -20°C. Bij zeer lage temperaturen neemt de efficiëntie wel af, maar moderne systemen blijven effectief verwarmen.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                    Is het voordeliger dan gas of stadsverwarming?
                  </h3>
                  <div className="px-6 py-4 faq-answer speakable-content">
                    <p>In veel gevallen wel, vooral als u zonnepanelen heeft. De exacte besparing hangt af van energieprijzen en uw specifieke situatie. We berekenen graag uw potentiële besparing.</p>
                  </div>
                </div>
              </div>
            </m.section>
          </div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">
              Wilt u ook besparen op verwarmingskosten?
            </h2>
            <p className="text-blue-100 mb-8">
              Laat onze experts u adviseren over de mogelijkheden van warmtepomp verwarming in uw situatie
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Gratis adviesgesprek
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