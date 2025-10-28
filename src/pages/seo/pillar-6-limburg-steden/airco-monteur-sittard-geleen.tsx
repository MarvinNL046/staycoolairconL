import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Mail, Calculator, TrendingUp, Star, Award, Users, Factory } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const AircoMonteurSittardGeleen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Limburg Steden', path: '/seo/pillar-6-limburg-steden' },
    { label: 'Airco Monteur Sittard-Geleen' }
  ];

  const usps = [
    {
      icon: <Users className="h-12 w-12 text-sky-500" />,
      title: "Ervaren Monteurs",
      description: "15+ jaar ervaring met residentiële en industriële installaties"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gassen Gecertificeerd",
      description: "Alle monteurs volledig gecertificeerd en getraind"
    },
    {
      icon: <Factory className="h-12 w-12 text-sky-500" />,
      title: "Industrie Specialist",
      description: "Expert in chemische en industriële toepassingen"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Veiligheid Voorop",
      description: "VCA en ATEX gecertificeerd voor veilig werken"
    }
  ];

  const districts = [
    "Sittard-Centrum", "Geleen-Centrum", "Munstergeleen", "Limbricht", "Born",
    "Grevenbicht", "Obbicht", "Windraak", "Broeksittard", "Holtum",
    "Einighausen", "Buchten", "Guttecoven", "Holtum-Noord", "De Kollekes",
    "Hoogveld", "Stadbroek", "Wieselerhof", "Lindenheuvel", "Schipperskerk"
  ];

  const expertise = [
    {
      title: "Residentiële Installaties",
      description: "Van eengezinswoningen tot appartementen",
      items: [
        "Single-split en multi-split systemen",
        "Verborgen plafondunits",
        "Moderne smart home integratie",
        "Energiezuinige warmtepompen"
      ]
    },
    {
      title: "Zakelijke Projecten",
      description: "Kantoren, retail en bedrijfspanden",
      items: [
        "VRV/VRF systemen",
        "Cassette en kanaal units",
        "Building management systems",
        "Onderhoud en service contracten"
      ]
    },
    {
      title: "Industriële Toepassingen",
      description: "Chemische industrie en productie",
      items: [
        "ATEX gecertificeerde installaties",
        "Proceskoeling en klimaatbeheersing",
        "Cleanroom klimaatsystemen",
        "Explosieveilige uitvoeringen"
      ]
    }
  ];

  const faqs = [
    {
      question: "Wat maakt een goede airco monteur in Sittard-Geleen?",
      answer: "Een professionele airco monteur in Sittard-Geleen beschikt over F-gassen certificering (wettelijk verplicht), heeft minimaal 5 jaar praktijkervaring, kent lokale bouwvoorschriften en vergunningseisen, werkt volgens veiligheidsnormen (VCA), en biedt garantie op installatie en materiaal. Bij StayCool Airco hebben al onze monteurs 15+ jaar ervaring en zijn ze getraind voor zowel residentiële als industriële projecten."
    },
    {
      question: "Werken jullie monteurs ook in de chemische industrie?",
      answer: "Ja, onze monteurs hebben specifieke ervaring met klimaatbeheersing in de chemische industrie. We zijn ATEX gecertificeerd voor werk in explosiegevaarlijke omgevingen en hebben projecten uitgevoerd voor diverse bedrijven in het Chemelot cluster. We begrijpen de strikte veiligheidseisen en werken volgens alle relevante normen en protocollen. Ook voor cleanrooms en gecontroleerde productieomgevingen leveren we specialistische oplossingen."
    },
    {
      question: "Hoe lang duurt een professionele airco installatie?",
      answer: "De installatieduur varieert per project. Een standaard single-split systeem installeren onze monteurs in 4-6 uur. Voor multi-split systemen met 2-4 binnenunits plannen we 1-2 werkdagen. Grotere projecten zoals VRV-systemen in kantoorpanden kunnen 3-10 werkdagen duren. We maken vooraf een gedetailleerde planning en houden ons aan afgesproken deadlines. Tijdens de installatie werken we netjes en stellen we uw woning/bedrijf schoon achter."
    },
    {
      question: "Kunnen jullie monteurs ook complexe multi-zone systemen installeren?",
      answer: "Absoluut! Onze monteurs zijn gespecialiseerd in complexe multi-zone systemen. We installeren regelmatig VRV/VRF systemen met 10+ binnenunits, geïntegreerde besturingssystemen en building management. Voor nieuwbouwprojecten, renovaties en industriële toepassingen leveren we turn-key oplossingen. Onze technische expertise omvat systeemontwerp, dimensionering, installatie en inbedrijfstelling met volledige documentatie."
    },
    {
      question: "Welke gebieden bedienen jullie monteurs?",
      answer: "Onze monteurs zijn dagelijks actief in heel Sittard-Geleen en omliggende gemeenten: Beek, Stein, Elsloo, Urmond, Susteren, Nieuwstadt en Schinnen. We kennen de lokale bouwstijlen en zijn vertrouwd met zowel karakteristieke stadswoningen als moderne nieuwbouw. Voor grote projecten werken we in heel Limburg en aangrenzende regio's in Duitsland en België."
    },
    {
      question: "Bieden jullie ook nazorg en onderhoud?",
      answer: "Ja, onze service stopt niet na installatie. We bieden uitgebreide nazorg met uitleg over optimaal gebruik, onderhoudsadviezen en een 24/7 bereikbare storingsdienst. Voor regulier onderhoud bieden we onderhoudscontracten met jaarlijkse controle en reiniging. Bij storingen komen we binnen 24 uur (klanten met onderhoudscontract hebben 4-uur responstijd). Alle reparaties worden uitgevoerd door dezelfde ervaren monteurs."
    },
    {
      question: "Zijn jullie monteurs VCA gecertificeerd?",
      answer: "Ja, alle monteurs van StayCool Airco zijn VCA-VOL (Veiligheid, Gezondheid en Milieu Checklist Aannemers) gecertificeerd. Dit is essentieel voor werk op industrieterreinen en chemische complexen zoals Chemelot. Daarnaast beschikken we over ATEX certificering voor explosiegevaarlijke omgevingen, zijn we getraind in werken op hoogte, en voldoen we aan alle arbo- en veiligheidseisen. Veiligheid staat bij ons voorop."
    },
    {
      question: "Wat kost een professionele airco installatie in Sittard-Geleen?",
      answer: "De kosten variëren sterk per project: €1.500-2.500 voor single-split residentieel, €3.000-6.000 voor multi-split woning (3-4 units), €8.000-20.000 voor VRV kantooroplossing, en op maat voor industriële projecten. Prijzen zijn inclusief materiaal, arbeid, inbedrijfstelling en garantie. We maken altijd eerst een vrijblijvende offerte na locatiebezoek, waarbij we adviseren over het meest geschikte systeem voor uw situatie en budget."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Monteur Sittard-Geleen | Chemiestad Specialist | StayCool Airco"
        description="Airco monteur Sittard-Geleen ✓ F-gassen & VCA gecertificeerd ✓ Industrie specialist ✓ 15+ jaar ervaring ✓ Residentieel & zakelijk. Gratis offerte!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          "name": "Airco Monteur Sittard-Geleen",
          "description": "Professionele airco monteurs voor residentiële, zakelijke en industriële installaties in Sittard-Geleen. F-gassen en VCA gecertificeerd.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "StayCool Airco",
            "telephone": "046-202-1430",
            "email": "info@staycoolairco.nl",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sittard-Geleen",
              "addressRegion": "Limburg",
              "addressCountry": "NL"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Sittard-Geleen",
            "containedInPlace": {
              "@type": "State",
              "name": "Limburg"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Airco Montage Diensten",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residentiële airco installatie"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Zakelijke klimaatsystemen"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Industriële klimaatbeheersing"
                }
              }
            ]
          }
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="container mx-auto px-4 py-16">
            <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Airco Monteur Sittard-Geleen
            </h1>

            <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
              Professionele airco monteurs voor woningen, bedrijven en industrie in de chemiestad. F-gassen én VCA gecertificeerd met 15+ jaar ervaring in residentiële en industriële projecten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Gratis Offerte Aanvragen
              </Link>
              <Link
                to="/capaciteit-calculator"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Bereken Capaciteit
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800 transition-colors"
              >
                046 202 1430
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                F-gassen Gecertificeerd
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                VCA & ATEX
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                15+ Jaar Ervaring
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Industrie Specialist
              </div>
            </div>
          </div>
        </section>

        {/* USPs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Waarom Kiezen voor Onze Monteurs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {usp.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                  <p className="text-gray-600 text-center">{usp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professionele Airco Monteurs in Sittard-Geleen
              </h2>

              <p className="text-gray-600 mb-6">
                Sittard-Geleen, met haar unieke mix van woonwijken, historische centra en het grote industriecomplex Chemelot, vraagt om airco monteurs die even veelzijdig zijn als de stad zelf. StayCool Airco levert professionele monteurs voor elke situatie: van eengezinswoningen en appartementen tot kantoren, winkels en industriële toepassingen in de chemische sector.
              </p>

              <p className="text-gray-600 mb-6">
                Onze monteurs beschikken niet alleen over de verplichte F-gassen certificering, maar ook over VCA-VOL en ATEX certificering voor veilig werken in industriële omgevingen. Met meer dan 15 jaar ervaring in de regio kennen we de lokale bouwstijlen, vergunningseisen en de specifieke uitdagingen van installaties in zowel historische stadscentra als moderne bedrijventerreinen.
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Onze Expertise
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {expertise.map((area, index) => (
                  <div key={index} className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <Factory className="h-8 w-8 inline-block mr-2 text-sky-500" />
                Specialist in Industriële Klimaatbeheersing
              </h3>

              <p className="text-gray-600 mb-6">
                Sittard-Geleen is de thuisbasis van Chemelot, een van Europa's grootste geïntegreerde chemiecomplexen. Onze monteurs hebben uitgebreide ervaring met klimaatinstallaties in industriële omgevingen waar strikte veiligheidsnormen gelden. We zijn ATEX gecertificeerd voor werk in explosiegevaarlijke zones (ATEX 95 en ATEX 137 richtlijnen) en hebben projecten uitgevoerd voor diverse bedrijven in productie, research en ontwikkeling.
              </p>

              <p className="text-gray-600 mb-6">
                Voor cleanrooms, gecontroleerde productieomgevingen en laboratoriumruimtes leveren we specialistische klimaatoplossingen die voldoen aan de hoogste eisen qua temperatuur, luchtvochtigheid en luchtfiltering. Onze monteurs werken volgens strikte protocollen en documenteren alle werkzaamheden volgens ISO en GMP normen.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-orange-600" />
                  Veiligheid en Certificering
                </h4>
                <p className="text-gray-600 mb-4">
                  Al onze monteurs beschikken over de volgende certificeringen:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>F-gassen certificering</strong> (wettelijk verplicht voor koudemiddelen)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>VCA-VOL</strong> (Veiligheid Checklist Aannemers - volledig)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>ATEX certificering</strong> (explosiegevaarlijke omgevingen)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>NEN-3140</strong> (elektrische installaties)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Werken op hoogte</strong> (gecertificeerde training)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Werkgebied in Sittard-Geleen
              </h2>

              <p className="text-gray-600 mb-6">
                Onze monteurs zijn actief in alle wijken en kernen van de gemeente Sittard-Geleen:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {districts.map((district, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-sky-500 flex-shrink-0" />
                    <span>{district}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Premium A-Merken Installatie
              </h2>

              <p className="text-gray-600 mb-6">
                Als gecertificeerde monteurs installeren we alle premium airco merken volgens fabrieksspecificaties:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-500" />
                    Daikin Premium
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>VRV/VRF systemen voor grote projecten</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Sky Air serie voor middelgrote toepassingen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>10 jaar garantie met juiste installatie</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-500" />
                    Mitsubishi Heavy Industries
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Hyper Inverter voor maximale efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Plasma Quad filter technologie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Ideaal voor cleanroom toepassingen</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-500" />
                    LG & Samsung
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Smart home integratie</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>WiFi-bediening standaard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Uitstekende prijs-kwaliteit</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-sky-500" />
                    Industriële Merken
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Carrier commerciële systemen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>Trane proceskoeling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>ATEX gecertificeerde units</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
                Het Installatieproces
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Locatiebezoek & Advies</h4>
                    <p className="text-gray-600">
                      Een van onze monteurs bezoekt uw locatie voor een grondige analyse. We bespreken uw wensen, bekijken de technische mogelijkheden, meten de ruimtes en adviseren over het meest geschikte systeem.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Technisch Ontwerp</h4>
                    <p className="text-gray-600">
                      Voor grotere projecten maken we een technisch ontwerp met leidingroutes, plaatsing units, elektrische aansluitingen en capaciteitsberekeningen. U ontvangt een gedetailleerde offerte met alle specificaties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Professionele Montage</h4>
                    <p className="text-gray-600">
                      Onze gecertificeerde monteurs installeren het systeem volgens fabrieksspecificaties en geldende normen. We werken netjes, veilig en efficiënt. Bij zakelijke en industriële projecten volgen we uw huisregels en veiligheidsprotocollen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Inbedrijfstelling & Documentatie</h4>
                    <p className="text-gray-600">
                      Na installatie voeren we een volledige functietest uit, stellen het systeem optimaal in en geven uitgebreide uitleg over bediening en onderhoud. U ontvangt alle documentatie, certificaten en garantiebewijzen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section 1 */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Neem Contact Op met Onze Monteurs
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Vraag nu een gratis offerte aan voor uw project in Sittard-Geleen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone className="h-6 w-6 mr-2" />
                Offerte Aanvragen
              </Link>
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
              >
                046 202 1430
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Veelgestelde Vragen over Airco Montage
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-sky-500 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-sky-400 to-sky-500 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Direct Contact met Onze Monteurs
            </h2>
            <p className="text-xl mb-8 text-sky-50">
              Bel, mail of WhatsApp voor advies over uw project in Sittard-Geleen
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="tel:0462021430"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="h-8 w-8 mb-2" />
                <span className="font-semibold">Bel Direct</span>
                <span className="text-sky-100">046 202 1430</span>
              </a>
              <a
                href="mailto:info@staycoolairco.nl"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="h-8 w-8 mb-2" />
                <span className="font-semibold">Mail Ons</span>
                <span className="text-sky-100">info@staycoolairco.nl</span>
              </a>
              <a
                href="https://wa.me/31636481054"
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="h-8 w-8 mb-2" />
                <span className="font-semibold">WhatsApp</span>
                <span className="text-sky-100">06 36481054</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AircoMonteurSittardGeleen;
