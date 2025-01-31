import React from 'react';
import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ThermometerSun, Zap, Leaf, Settings, HelpCircle, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function KnowledgeBase() {
  const breadcrumbItems = [
    { label: 'Kennisbank', path: '/kennisbank' }
  ];

  const categories = [
    {
      title: 'Airco in Limburg',
      icon: MapPin,
      description: 'Alles over airconditioning services in Limburg',
      articles: [
        {
          title: 'Airco Specialist Limburg',
          description: 'Professionele airconditioning services in heel Limburg.',
          slug: 'aircospecialist-limburg'
        },
        {
          title: 'Airco Venlo',
          description: 'Specialistische airco services in Venlo en omgeving.',
          slug: 'airco-venlo'
        },
        {
          title: 'Airco Weert',
          description: 'Expert airconditioning diensten in Weert.',
          slug: 'airco-weert'
        },
        {
          title: 'Airco Service Limburg',
          description: 'Professionele airco service en onderhoud in Limburg.',
          slug: 'airco-service-limburg'
        },
        {
          title: 'Airco Installatie Limburg',
          description: 'Vakkundige airco installatie in heel Limburg.',
          slug: 'airco-installatie-limburg'
        },
        {
          title: 'Airco Installateur Limburg',
          description: 'Uw betrouwbare airco installateur in Limburg.',
          slug: 'airco-installateur-limburg'
        },
        {
          title: 'Airco Onderhoud Limburg',
          description: 'Professioneel onderhoud voor uw airconditioning in Limburg.',
          slug: 'airco-onderhoud-limburg'
        },
        {
          title: 'Airco Installeren Limburg',
          description: 'Vakkundige airco installatie door ervaren monteurs in Limburg.',
          slug: 'airco-installeren-limburg'
        },
        {
          title: 'Airco Installateur Roermond',
          description: 'Specialist in airco installatie in Roermond en omgeving.',
          slug: 'airco-installateur-roermond'
        },
        {
          title: 'Airco Installateur Maastricht',
          description: 'Expert in airco installatie voor monumentale en moderne panden in Maastricht.',
          slug: 'airco-installateur-maastricht'
        },
        {
          title: 'Airco Brunssum',
          description: 'Professionele airconditioning services in Brunssum.',
          slug: 'airco-brunssum'
        },
        {
          title: 'Airco Sittard',
          description: 'Specialist in airconditioning voor Sittard-Geleen.',
          slug: 'airco-sittard'
        },
        {
          title: 'Mitsubishi Airco Limburg',
          description: 'Expert in Mitsubishi airconditioningsystemen in Limburg.',
          slug: 'mitsubishi-airco-limburg'
        },
        {
          title: 'Airconditioning Kerkrade',
          description: 'Professionele airco services in Kerkrade en omgeving.',
          slug: 'airconditioning-kerkrade'
        },
        {
          title: 'Energiezuinige Airco Limburg',
          description: 'Specialist in energiezuinige airconditioningsystemen in Limburg.',
          slug: 'energiezuinige-airco-limburg'
        }
      ]
    },
    {
      title: 'Airconditioning Basics',
      icon: ThermometerSun,
      description: 'Leer de basisprincipes van airconditioning',
      articles: [
        {
          title: 'Hoe werkt een airco?',
          description: 'Leer de basisprincipes van airconditioning en klimaatbeheersing.',
          slug: 'hoe-werkt-airco'
        },
        {
          title: 'Verschillende soorten aircosystemen',
          description: 'Ontdek welk type airconditioning het beste bij uw situatie past.',
          slug: 'soorten-airco'
        },
        {
          title: 'Split-unit vs. Mono-block',
          description: 'De voor- en nadelen van verschillende aircosystemen.',
          slug: 'split-vs-mono-systemen'
        },
        {
          title: 'SCOP en SEER Waarden Uitgelegd',
          description: 'Begrijp de efficiëntie-indicatoren van airconditioners.',
          slug: 'scop-seer-waarden'
        },
        {
          title: 'Het Coanda Effect',
          description: 'Hoe het Coanda effect zorgt voor optimale luchtverdeling.',
          slug: 'coanda-effect'
        },
        {
          title: 'Wat Kost een Airco Plaatsen?',
          description: 'Complete prijsgids met kosten en besparingstips voor airco installatie.',
          slug: 'wat-kost-een-airco-plaatsen'
        },
        {
          title: 'Airco in Herkenbosch',
          description: 'Lokale airco service en installatie in Herkenbosch.',
          slug: 'airco-in-herkenbosch'
        },
        {
          title: 'Mitsubishi vs LG Airco',
          description: 'Vergelijking tussen Mitsubishi en LG airconditioners.',
          slug: 'mitsubishi-vs-lg-airco'
        },
        {
          title: 'Toshiba vs Tosot Airco',
          description: 'Vergelijking tussen Toshiba en Tosot airconditioners.',
          slug: 'toshiba-vs-tosot-airco'
        }
      ]
    },
    {
      title: 'Energiebesparing',
      icon: Zap,
      description: 'Optimaliseer uw energieverbruik',
      articles: [
        {
          title: 'Verwarmen met airco',
          description: 'Bespaar op verwarmingskosten door slim gebruik van uw airco.',
          slug: 'verwarmen-met-airco'
        },
        {
          title: 'Verwarmen met Airco Ervaringen',
          description: 'Ontdek echte ervaringen met het verwarmen met airco en wat je kunt verwachten.',
          slug: 'verwarmen-met-airco-ervaring'
        },
        {
          title: 'Terugleverkosten voorkomen',
          description: 'Optimaal gebruik van zonnepanelen in combinatie met airco.',
          slug: 'terugleverkosten-voorkomen'
        },
        {
          title: 'Energielabels en verbruik',
          description: 'Alles over energielabels en het verbruik van aircosystemen.',
          slug: 'energielabels'
        },
        {
          title: 'Elektrische Verwarming',
          description: 'Ontdek de voordelen van elektrische verwarming en hoe je het kunt combineren met een airco warmtepomp.',
          slug: 'elektrische-verwarming'
        },
        {
          title: 'Voordelen van Airco Verwarming',
          description: 'Ontdek alle voordelen en besparingen van verwarmen met een airco systeem.',
          slug: 'airco-verwarming-voordelen'
        },
        {
          title: 'Bespaar op Verwarmingskosten',
          description: 'Ontdek hoe u tot 60% kunt besparen op uw verwarmingskosten met een moderne airco.',
          slug: 'airco-verwarming-kosten-besparing',
          fullPath: true
        }
      ]
    },
    {
      title: 'Onderhoud & Service',
      icon: Settings,
      description: 'Houd uw systeem in topconditie',
      articles: [
        {
          title: 'Onderhoudstips',
          description: 'Praktische tips voor het onderhouden van uw airconditioning.',
          slug: 'onderhoudstips'
        },
        {
          title: 'Veel voorkomende problemen',
          description: 'Oplossingen voor veelvoorkomende airconditioningproblemen.',
          slug: 'veelvoorkomende-problemen'
        },
        {
          title: 'Wanneer onderhoud nodig?',
          description: 'Richtlijnen voor regelmatig onderhoud van uw systeem.',
          slug: 'onderhoudsschema'
        },
        {
          title: 'Hoe Vaak Airco Onderhoud?',
          description: 'Complete gids over onderhoudsfrequentie en wat er bij komt kijken.',
          slug: 'hoe-vaak-airco-onderhoud'
        },
        {
          title: 'Airco Storingscodes',
          description: 'Complete gids voor het begrijpen en oplossen van storingscodes.',
          slug: 'storingscodes'
        },
        {
          title: 'LG Storingscode CH 24',
          description: 'Wat betekent LG storingscode CH 24 en hoe los je het op?',
          slug: 'lg-airco-storingscodes'
        },
        {
          title: 'Airco Blaast Geen Warme Lucht',
          description: 'Ontdek waarom je airco geen warme lucht blaast en hoe je dit kunt oplossen.',
          slug: 'airco-blaast-geen-warme-lucht'
        },
        {
          title: 'Airco Bevriest bij Verwarmen',
          description: 'Leer waarom je airco bevriest tijdens het verwarmen en hoe je dit voorkomt.',
          slug: 'airco-bevriest-bij-verwarmen'
        },
        {
          title: 'Airco Luchtfilter Onderhoud',
          description: 'Complete gids voor het onderhouden van je airco luchtfilters.',
          slug: 'airco-luchtfilter-onderhoud'
        },
        {
          title: 'Airco Buitenunit Plaatsing',
          description: 'Alles over de juiste plaatsing van je airco buitenunit.',
          slug: 'airco-buitenunit-plaatsing'
        }
      ]
    },
    {
      title: 'Duurzaamheid',
      icon: Leaf,
      description: 'Milieuvriendelijk koelen en verwarmen',
      articles: [
        {
          title: 'Koudemiddelen en milieu',
          description: 'Impact van verschillende koudemiddelen op het milieu.',
          slug: 'koudemiddelen'
        },
        {
          title: 'CO2-reductie',
          description: 'Hoe airconditioning kan bijdragen aan CO2-reductie.',
          slug: 'co2-reductie'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kennisbank | StayCool Airco</title>
        <meta 
          name="description" 
          content="Ontdek alles over airconditioning in onze uitgebreide kennisbank. Van basisprincipes tot energiebesparing en onderhoudstips."
        />
        <meta 
          name="keywords" 
          content="airco kennisbank, airconditioning informatie, SCOP SEER uitleg, airco onderhoud, energiebesparing airco"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kennisbank
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek alles over airconditioning, van basisprincipes tot geavanceerde tips voor optimaal gebruik
            </p>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => (
              <m.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <category.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 ml-4">
                      {category.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>

                  <div className="space-y-4">
                    {category.articles.map((article) => (
                      <Link
                        key={article.slug}
                        to={article.fullPath ? `/${article.slug}` : article.slug.startsWith('lg-') ? `/${article.slug}` : `/kennisbank/${article.slug}`}
                        className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {article.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {article.description}
                            </p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          {/* CTA Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Nog vragen?
            </h2>
            <p className="text-blue-700 mb-8">
              Onze experts helpen u graag met al uw vragen over airconditioning
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <HelpCircle className="h-5 w-5 mr-2" />
                Stel uw vraag
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
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
