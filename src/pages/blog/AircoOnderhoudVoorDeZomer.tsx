import React from 'react';
import { m } from 'framer-motion';
import { ArrowLeft, CheckCircle, AlertTriangle, Filter, Wrench, Calendar, ThermometerSun } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';

export default function AircoOnderhoudVoorDeZomer() {
  const maintenanceSteps = [
    {
      title: "Filters controleren en reinigen",
      description: "Vervuilde filters verminderen de luchtstroom en efficiëntie drastisch",
      frequency: "Maandelijks",
      difficulty: "Eenvoudig",
      icon: Filter
    },
    {
      title: "Condensafvoer controleren", 
      description: "Een verstopte afvoer kan leiden tot waterlekkage en schimmelvorming",
      frequency: "Voor het seizoen",
      difficulty: "Eenvoudig",
      icon: CheckCircle
    },
    {
      title: "Buitenunit reinigen",
      description: "Verwijder bladeren, vuil en obstakels rond de buitenunit",
      frequency: "Voor elk seizoen",
      difficulty: "Eenvoudig", 
      icon: Wrench
    },
    {
      title: "Professionele service",
      description: "Jaarlijkse controle van koudemiddel, elektrische aansluitingen en prestaties",
      frequency: "Jaarlijks",
      difficulty: "Professional",
      icon: ThermometerSun
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Onderhoud voor de Zomer: Complete Checklist | StayCool Airco"
        description="Bereid uw airco optimaal voor op de zomer met onze complete onderhoudshandleiding. Voorkom defecten en zorg voor maximale koeling en efficiëntie in Limburg."
        keywords="airco onderhoud zomer, airco voorbereiden zomer, airco checklist, airco service limburg, airco filter vervangen"
        canonicalUrl="https://staycoolairco.nl/blog/airco-onderhoud-voor-de-zomer"
        type="article"
        speakableContent={[
          "Regelmatig airco onderhoud voorkomt defecten in de zomer",
          "Schone filters zorgen voor 15% betere efficiëntie",
          "StayCool Airco biedt professionele voorjaarsservice",
          "Eenvoudige onderhoudsstappen kunt u zelf uitvoeren",
          "Jaarlijkse professionele controle wordt sterk aanbevolen"
        ]}
        faqs={[
          {
            question: "Hoe vaak moet ik mijn airco laten onderhouden?",
            answer: "We adviseren minimaal één keer per jaar professioneel onderhoud, bij voorkeur in het voorjaar voor het warme seizoen. Filters kunt u zelf maandelijks controleren en reinigen."
          },
          {
            question: "Kan ik zelf onderhoud aan mijn airco uitvoeren?",
            answer: "Ja, basis onderhoud zoals filters reinigen en de buitenunit schoonmaken kunt u zelf doen. Voor technische controles van koudemiddel en elektrische componenten heeft u een gecertificeerde monteur nodig."
          },
          {
            question: "Wat kost professioneel airco onderhoud?",
            answer: "Professioneel onderhoud kost tussen €75-150, afhankelijk van het type systeem. Dit is een kleine investering vergeleken met de kosten van reparaties door verwaarlozing."
          },
          {
            question: "Waarom is onderhoud voor de zomer belangrijk?",
            answer: "Onderhoud voorkomt defecten tijdens hittegolven wanneer u uw airco het hardst nodig heeft. Het zorgt ook voor optimale efficiëntie en lagere energiekosten."
          }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": ["Article", "HowTo"],
          "headline": "Airco Onderhoud voor de Zomer: Complete Checklist",
          "description": "Bereid uw airco optimaal voor op de zomer met onze complete onderhoudshandleiding",
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
          "dateModified": "2025-01-18",
          "totalTime": "PT45M",
          "supply": ["Zachte borstel", "Mild detergent", "Schoon water", "Droge doeken"],
          "tool": ["Schroevendraaier", "Tuinslang"],
          "step": maintenanceSteps.map((step, index) => ({
            "@type": "HowToStep", 
            "position": index + 1,
            "name": step.title,
            "text": step.description
          }))
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24">
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
              Airco Onderhoud voor de Zomer: Uw Complete Checklist
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Bereid uw airconditioning optimaal voor op de warme maanden met deze essentiële onderhoudstips
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span>18 januari 2025</span>
              <span className="mx-2">•</span>
              <span>7 minuten leestijd</span>
            </div>
          </m.div>

          {/* Featured Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <img 
              src="/images/blog/airco-onderhoud-staycoolairco-limburg.png" 
              alt="Professioneel airco onderhoud voor de zomer"
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
                De eerste warme dagen kondigen zich aan en dat betekent dat het tijd is om uw airconditioning voor te bereiden op 
                het komende zomerseizoen. Goed onderhoud zorgt niet alleen voor optimale koeling, maar voorkomt ook dure reparaties 
                en verlengt de levensduur van uw systeem aanzienlijk.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-orange-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-orange-800 font-medium">Waarom voorjaarsonderhoud cruciaal is</p>
                    <p className="text-orange-700 text-sm">
                      80% van alle airco storingen in de zomer is te voorkomen met goed onderhoud. 
                      Bovendien verbetert regelmatig onderhoud de efficiëntie met wel 15%.
                    </p>
                  </div>
                </div>
              </div>
            </m.div>

            {/* Maintenance Steps */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Stap-voor-stap onderhoudsplan</h2>
              
              <div className="space-y-6">
                {maintenanceSteps.map((step, index) => (
                  <m.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <step.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{step.frequency}</div>
                          <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                            step.difficulty === 'Eenvoudig' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {step.difficulty}
                          </div>
                        </div>
                      </div>
                    </div>
                  </m.div>
                ))}
              </div>
            </m.section>

            {/* DIY vs Professional */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Zelf doen vs. Professional</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">✅ Zelf uitvoeren</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Filters controleren en reinigen</li>
                    <li>• Buitenunit van vuil ontdoen</li>
                    <li>• Condensafvoer controleren</li>
                    <li>• Omgeving van obstakels vrijhouden</li>
                    <li>• Binnenunit schoonmaken</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">🔧 Door professional</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Koudemiddel controleren en bijvullen</li>
                    <li>• Elektrische aansluitingen inspecteren</li>
                    <li>• Drukmetingen uitvoeren</li>
                    <li>• Warmtewisselaars reinigen</li>
                    <li>• Systeemprestaties optimaliseren</li>
                  </ul>
                </div>
              </div>
            </m.section>

            {/* Detailed Instructions */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gedetailleerde instructies</h2>

              <div className="space-y-8">
                {/* Filter Maintenance */}
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-blue-600" />
                    Filters reinigen
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Schakel de airco uit en haal de stekker uit het stopcontact</li>
                    <li>Open het voorpaneel van de binnenunit (meestal door clips of schroeven)</li>
                    <li>Verwijder de filters voorzichtig</li>
                    <li>Spoel de filters af met lauw water en mild detergent</li>
                    <li>Laat de filters volledig drogen (nooit terugplaatsen als ze vochtig zijn)</li>
                    <li>Plaats de filters terug en sluit het voorpaneel</li>
                  </ol>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Tip:</strong> Vervang filters elke 3 maanden bij intensief gebruik
                  </p>
                </div>

                {/* Outdoor Unit */}
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-blue-600" />
                    Buitenunit onderhoud
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Schakel de stroom naar de buitenunit uit</li>
                    <li>Verwijder bladeren, takken en vuil van rond de unit</li>
                    <li>Reinig de lamellen voorzichtig met een zachte borstel (niet buigen!)</li>
                    <li>Spoel de buitenkant af met een tuinslang (lage druk)</li>
                    <li>Controleer of er geen obstakels zijn binnen 60 cm van de unit</li>
                    <li>Controleer de bevestiging en trillingdempers</li>
                  </ol>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Let op:</strong> Gebruik nooit een hogedrukreiniger op de buitenunit
                  </p>
                </div>
              </div>
            </m.section>

            {/* Warning Signs */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Waarschuwingssignalen</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">🚨 Neem contact op met een professional bij:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-red-800">
                    <li>• Waterlekkage binnenin</li>
                    <li>• Vreemde geluiden of trillingen</li>
                    <li>• Slechte koeling ondanks schone filters</li>
                    <li>• IJsvorming op de buitenunit in de zomer</li>
                  </ul>
                  <ul className="space-y-2 text-red-800">
                    <li>• Ongewone geuren</li>
                    <li>• Elektrische problemen</li>
                    <li>• Veel hogere energierekening</li>
                    <li>• Systeem slaat vaak af</li>
                  </ul>
                </div>
              </div>
            </m.section>

            {/* Maintenance Schedule */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Onderhoudsschema</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Periode</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Onderhoudstaak</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wie</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maandelijks</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Filters controleren</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Eigenaar</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Voor zomerseizoen</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Complete reiniging + controle</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Eigenaar + Professional</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jaarlijks</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Professionele service</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Professional</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Na winterstop</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Testrun + basis controle</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Eigenaar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </m.section>

            {/* FAQ Section */}
            <m.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Veelgestelde vragen over airco onderhoud</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                    Hoe vaak moet ik mijn airco laten onderhouden?
                  </h3>
                  <div className="px-6 py-4 faq-answer speakable-content">
                    <p>We adviseren minimaal één keer per jaar professioneel onderhoud, bij voorkeur in het voorjaar voor het warme seizoen. Filters kunt u zelf maandelijks controleren en reinigen.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                    Kan ik zelf onderhoud aan mijn airco uitvoeren?
                  </h3>
                  <div className="px-6 py-4 faq-answer speakable-content">
                    <p>Ja, basis onderhoud zoals filters reinigen en de buitenunit schoonmaken kunt u zelf doen. Voor technische controles van koudemiddel en elektrische componenten heeft u een gecertificeerde monteur nodig.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                    Wat kost professioneel airco onderhoud?
                  </h3>
                  <div className="px-6 py-4 faq-answer speakable-content">
                    <p>Professioneel onderhoud kost tussen €75-150, afhankelijk van het type systeem. Dit is een kleine investering vergeleken met de kosten van reparaties door verwaarlozing.</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                  <h3 className="px-6 py-4 bg-gray-50 font-semibold text-gray-900">
                    Waarom is onderhoud voor de zomer belangrijk?
                  </h3>
                  <div className="px-6 py-4 faq-answer speakable-content">
                    <p>Onderhoud voorkomt defecten tijdens hittegolven wanneer u uw airco het hardst nodig heeft. Het zorgt ook voor optimale efficiëntie en lagere energiekosten.</p>
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
            className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">
              Uw airco klaar voor de zomer?
            </h2>
            <p className="text-green-100 mb-8">
              Laat onze gecertificeerde monteurs uw airco professioneel voorbereiden op het komende seizoen
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Plan onderhoud in
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-green-600"
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