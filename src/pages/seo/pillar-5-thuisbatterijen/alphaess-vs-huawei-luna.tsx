import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, CheckCircle, X, Euro, Zap, Shield, Phone, Calculator, Award, TrendingUp, Globe } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const AlphaESSvsHuaweiLunaPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'AlphaESS vs Huawei LUNA Vergelijking' }
  ];

  const comparisonFeatures = [
    {
      feature: "Capaciteit opties",
      alphaess: "2,9 - 30 kWh (modulair)",
      huawei: "5 - 30 kWh (modulair)",
      winner: "alphaess"
    },
    {
      feature: "Prijs per kWh",
      alphaess: "€900-1.100/kWh",
      huawei: "€1.000-1.200/kWh",
      winner: "alphaess"
    },
    {
      feature: "EPEX Handel resultaten",
      alphaess: "€200-400/jaar (beste)",
      huawei: "€150-250/jaar (goed)",
      winner: "alphaess"
    },
    {
      feature: "Garantie",
      alphaess: "10 jaar standaard",
      huawei: "10 jaar standaard",
      winner: "tie"
    },
    {
      feature: "Rendement",
      alphaess: "97%+ roundtrip",
      huawei: "95-97% roundtrip",
      winner: "alphaess"
    },
    {
      feature: "Software & App",
      alphaess: "Goed - Nederlandse vertaling",
      huawei: "Excellent - FusionSolar",
      winner: "huawei"
    },
    {
      feature: "Nederlandse Support",
      alphaess: "Uitstekend - lokale dealers",
      huawei: "Goed - via installateurs",
      winner: "alphaess"
    },
    {
      feature: "BTW Begeleiding",
      alphaess: "✓ Volledige hulp",
      huawei: "Zelf regelen",
      winner: "alphaess"
    },
    {
      feature: "Integratie zonnepanelen",
      alphaess: "Universeel (alle merken)",
      huawei: "Best met Huawei inverters",
      winner: "alphaess"
    },
    {
      feature: "Smart Home integratie",
      alphaess: "Basis - API beschikbaar",
      huawei: "Geavanceerd - Huawei ecosystem",
      winner: "huawei"
    },
    {
      feature: "Levertijd",
      alphaess: "2-4 weken",
      huawei: "3-6 weken",
      winner: "alphaess"
    }
  ];

  const scenarios = [
    {
      title: "Kies AlphaESS als...",
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      conditions: [
        "Beste prijs-kwaliteit verhouding prioriteit heeft (€900-1.100/kWh)",
        "Maximale EPEX handelsopbrengsten belangrijk zijn (€50-150/jaar meer)",
        "U kleine capaciteit wilt starten (vanaf 2,9 kWh)",
        "Nederlandse support en BTW-begeleiding gewaardeerd wordt",
        "U geen Huawei zonnepanelen/inverters heeft",
        "Kortere levertijd gewenst is (2-4 weken)",
        "Beste rendement (97%+) belangrijk is"
      ]
    },
    {
      title: "Kies Huawei LUNA als...",
      icon: <Globe className="h-8 w-8 text-red-500" />,
      conditions: [
        "U al Huawei zonnepanelen of inverters heeft",
        "Geavanceerde software en app belangrijk zijn",
        "Smart home integratie gewenst is (Huawei ecosystem)",
        "U vanaf 5 kWh capaciteit wilt starten",
        "Premium app-ervaring prioriteit heeft",
        "Huawei merkvoorkeur of bestaand systeem heeft",
        "Iets hogere prijs (€100-200/kWh meer) acceptabel is"
      ]
    }
  ];

  const faqs = [
    {
      question: "Wat is het grootste verschil tussen AlphaESS en Huawei LUNA?",
      answer: "De belangrijkste verschillen zijn: (1) Prijs - AlphaESS is €100-200/kWh goedkoper (€900-1.100 vs €1.000-1.200), (2) EPEX handel - AlphaESS behaalt €50-150/jaar meer opbrengst door beter algoritme, (3) Modulariteit - AlphaESS start vanaf 2,9 kWh, Huawei vanaf 5 kWh, (4) Software - Huawei heeft geavanceerdere app (FusionSolar) met betere smart home integratie, (5) Ecosysteem - Huawei werkt optimaal met andere Huawei producten. AlphaESS biedt beste waarde voor prijs, Huawei beste ervaring binnen eigen ecosysteem."
    },
    {
      question: "Welke batterij heeft betere EPEX handelsresultaten?",
      answer: "AlphaESS heeft aantoonbaar betere EPEX resultaten in de Nederlandse markt. AlphaESS gebruikers behaalden in 2024-2025 gemiddeld €200-400/jaar extra opbrengst, Huawei LUNA gebruikers €150-250/jaar. Het verschil (€50-150/jaar) komt door AlphaESS's gespecialiseerde EPEX algoritme en snellere reactietijden op prijspieken. Over 10 jaar levert dit €500-1.500 extra op, wat een deel van het aanschafprijsverschil compenseert."
    },
    {
      question: "Past Huawei LUNA bij mijn bestaande zonnepanelen?",
      answer: "Ja, Huawei LUNA werkt met alle zonnepanelen en inverters, maar presteert optimaal met Huawei inverters (SUN2000 serie). Als u al Huawei zonnepanelen heeft, krijgt u naadloze integratie via de FusionSolar app - één platform voor zonnepanelen én batterij. AlphaESS is 'universeler' en werkt net zo goed met elk merk zonnepanelen. Als u geen Huawei heeft, biedt AlphaESS betere waarde. Heeft u wel Huawei, dan is LUNA de logische keuze."
    },
    {
      question: "Welke batterij is beter voor kleine huishoudens?",
      answer: "Voor kleine huishoudens (2-3 personen, 3000-5000 kWh/jaar) is AlphaESS beter omdat u kunt starten met SMILE-B3 (2,9 kWh) voor slechts €3.500. Huawei LUNA start pas bij 5 kWh voor €5.500-6.000, wat voor kleine huishoudens overgedimensioneerd en te duur is. U betaalt dan voor capaciteit die u niet gebruikt. AlphaESS laat u klein starten en later uitbreiden indien nodig."
    },
    {
      question: "Hoe zit het met software en app kwaliteit?",
      answer: "Huawei LUNA heeft een voorsprong op software gebied. De FusionSolar app is gebruiksvriendelijker, heeft realtime grafieken, geavanceerde statistieken, en slimme automatiseringen. Als u Huawei smart home producten heeft, integreert alles naadloos. AlphaESS app is functioneel en Nederlands vertaald, maar minder gepolijst. Voor techneuten en optimaliseerders is Huawei app beter. Voor praktisch gebruik zijn beide apps voldoende."
    },
    {
      question: "Wat zijn de verschillen in garantie en support?",
      answer: "Beide merken bieden 10 jaar productgarantie met vergelijkbare voorwaarden (80% restcapaciteit na 6000 cycli). Het verschil zit in support: AlphaESS heeft Nederlands netwerk van gespecialiseerde dealers (zoals StayCool Airco) met lokale service, persoonlijke begeleiding, en hulp bij BTW-teruggave. Huawei support loopt via installateurs, vaak minder gespecialiseerd in batterijen. Voor hands-on support en begeleiding scoort AlphaESS beter."
    },
    {
      question: "Kan ik beide systemen later uitbreiden?",
      answer: "Ja, beide systemen zijn modulair uitbreidbaar tot 30 kWh. Verschil: AlphaESS SMILE5 gebruikt 5 kWh modules (5, 10, 15, 20, 25, 30 kWh), Huawei LUNA gebruikt ook 5 kWh modules met vergelijkbare flexibiliteit. AlphaESS heeft als extra optie de SMILE-B3 (2,9 kWh) voor hele kleine start. Praktisch gezien bieden beide merken excellente uitbreidingsmogelijkheden. Kies op basis van uw startsituatie en ecosysteem, niet op uitbreidbaarheid."
    },
    {
      question: "Welke batterij biedt betere ROI (terugverdientijd)?",
      answer: "AlphaESS biedt snellere ROI door lagere aanschafkosten (€900-1.100/kWh vs €1.000-1.200/kWh) en hogere EPEX opbrengsten (+€50-150/jaar). Voor 10 kWh systeem: AlphaESS €9.000-11.000 met terugverdientijd 7-9 jaar, Huawei €10.000-12.000 met terugverdientijd 8-10 jaar. Het verschil is beperkt (6-12 maanden) maar consistent in het voordeel van AlphaESS. Als u Huawei ecosysteem voordelen waardeert, compenseert dat het ROI-verschil."
    }
  ];

  return (
    <>
      <MetaTags
        title="AlphaESS vs Huawei LUNA 2026 | Welke Thuisbatterij Kopen? | Eerlijke Vergelijking"
        description="AlphaESS vs Huawei LUNA vergelijking ✓ Prijs ✓ EPEX handel ✓ Software ✓ Support ✓ Ecosysteem ✓ Eerlijke analyse | Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="ComparisonTable"
        data={{
          "@type": "ComparisonTable",
          name: "AlphaESS vs Huawei LUNA Thuisbatterij Vergelijking",
          description: "Vergelijking tussen AlphaESS SMILE en Huawei LUNA thuisbatterijen op basis van prijs, prestaties, software en support.",
          items: [
            {
              "@type": "Product",
              name: "AlphaESS SMILE Thuisbatterij",
              description: "Modulaire thuisbatterij met beste EPEX handelsresultaten en Nederlandse support",
              brand: { "@type": "Brand", name: "AlphaESS" }
            },
            {
              "@type": "Product",
              name: "Huawei LUNA Thuisbatterij",
              description: "Premium thuisbatterij met geavanceerde software en naadloze Huawei ecosysteem integratie",
              brand: { "@type": "Brand", name: "Huawei" }
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AlphaESS vs Huawei LUNA: Welke Thuisbatterij is Beter in 2026?
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Eerlijke vergelijking tussen AlphaESS SMILE en Huawei LUNA op prijs, EPEX handel, software, support en ecosysteem. Ontdek welke batterij het beste bij u past.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Uw ROI
            </Link>
          </div>

          <div className="flex items-center gap-4 text-yellow-900">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              <span>Onafhankelijk Advies</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Eerlijke Vergelijking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AlphaESS vs Huawei LUNA: Volledige Specificaties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle belangrijke kenmerken naast elkaar
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Kenmerk</th>
                    <th className="px-6 py-4 text-left">AlphaESS SMILE</th>
                    <th className="px-6 py-4 text-left">Huawei LUNA</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                      <td className={`px-6 py-4 ${item.winner === 'alphaess' ? 'bg-yellow-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'alphaess' && <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />}
                          {item.alphaess}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${item.winner === 'huawei' ? 'bg-red-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'huawei' && <CheckCircle className="h-5 w-5 text-red-500 mr-2" />}
                          {item.huawei}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-gray-700">
              <strong>Conclusie:</strong> AlphaESS wint op prijs-kwaliteit, EPEX handel, kleine capaciteiten en Nederlandse support. Huawei LUNA excelleert in software, smart home integratie en Huawei ecosysteem naadloosheid.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Welke Batterij Past Bij Uw Situatie?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  {scenario.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{scenario.title}</h3>
                </div>
                <ul className="space-y-3">
                  {scenario.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Diepgaande Analyse: AlphaESS vs Huawei LUNA
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Prijs-Kwaliteit Verhouding</h3>
            <p className="text-lg text-gray-600 mb-6">
              <strong>AlphaESS</strong> biedt systemen van €3.500 (SMILE-B3, 2,9 kWh) tot €11.000 (SMILE-T10, 10 kWh). Prijs per kWh: €900-1.100. <strong>Huawei LUNA</strong> start bij €5.500-6.000 (5 kWh) tot €12.000-13.000 (10 kWh). Prijs per kWh: €1.000-1.200.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Voor een vergelijkbaar 10 kWh systeem betaalt u bij AlphaESS €9.000-11.000, bij Huawei €10.000-12.000. Dit bespaart u <strong>€1.000-2.000</strong> bij aanschaf met AlphaESS.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. EPEX Energiehandel Prestaties</h3>
            <p className="text-lg text-gray-600 mb-6">
              Beide merken ondersteunen EPEX handel (dynamische energieprijzen), maar AlphaESS presteert beter. <strong>AlphaESS</strong> gebruikers behaalden in 2024-2025 gemiddeld <strong>€200-400 per jaar</strong> extra opbrengst door optimaal inspelen op prijspieken. <strong>Huawei LUNA</strong> behaalt €150-250/jaar - nog steeds goed, maar €50-150/jaar minder.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over een 10-jarige levensduur levert AlphaESS <strong>€500-1.500 meer op</strong>, wat een significant deel van het aanschafprijsverschil compenseert.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Software en Gebruikerservaring</h3>
            <p className="text-lg text-gray-600 mb-6">
              Hier heeft <strong>Huawei LUNA</strong> een duidelijke voorsprong. De FusionSolar app is gebruiksvriendelijker, met realtime grafieken, gedetailleerde statistieken, geavanceerde automatiseringen, en naadloze integratie met andere Huawei producten (zonnepanelen, inverters, smart home).
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <strong>AlphaESS</strong> app is functioneel, Nederlands vertaald, en biedt alle essentiële functies (monitoring, EPEX handel, instellingen). Maar de interface is minder gepolijst en de automatiseringen zijn basaler. Voor techneuten en data-liefhebbers is Huawei app superieur. Voor praktisch gebruik zijn beide voldoende.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Support en Service</h3>
            <p className="text-lg text-gray-600 mb-6">
              <strong>AlphaESS</strong> heeft een Nederlands netwerk van gespecialiseerde dealers zoals StayCool Airco. U krijgt persoonlijke begeleiding, lokale installatie, hulp bij BTW-teruggave (21% besparing), en snelle support in het Nederlands.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <strong>Huawei</strong> support loopt via installateurs en servicepartners. Support is goed, maar vaak minder gespecialiseerd in batterijen specifiek. Voor hands-on begeleiding en BTW-hulp scoort AlphaESS beter. Voor technische problemen zijn beide merken betrouwbaar.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Ecosysteem en Integratie</h3>
            <p className="text-lg text-gray-600 mb-6">
              Als u al <strong>Huawei zonnepanelen of inverters</strong> heeft, is Huawei LUNA de logische keuze. Alles integreert naadloos via één app, met optimale communicatie tussen componenten. U heeft één aanspreekpunt en één platform voor monitoring en optimalisatie.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <strong>AlphaESS</strong> is 'universeel' en werkt uitstekend met elk merk zonnepanelen, inverters en smart home systemen. Als u geen Huawei heeft (of mix van merken), biedt AlphaESS meer flexibiliteit en betere waarde.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Voor Wie Welke Batterij?</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Kies AlphaESS als:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Beste prijs-kwaliteit verhouding belangrijk is</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maximale EPEX opbrengsten prioriteit hebben</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Kleine capaciteit gewenst is (vanaf 2,9 kWh)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Nederlandse support en BTW-begeleiding gewaardeerd wordt</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Kies Huawei LUNA als:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>U al Huawei zonnepanelen of inverters heeft</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Premium app-ervaring belangrijk is</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Smart home integratie gewenst is (Huawei ecosystem)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Merkvoorkeur voor Huawei bestaat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Twijfelt U Nog? Wij Helpen U Kiezen
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Onafhankelijk advies over AlphaESS, Huawei of andere merken op basis van uw situatie, budget en ecosysteem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over AlphaESS vs Huawei LUNA
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maak de Slimme Keuze Voor Uw Situatie
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS: beste waarde en EPEX handel. Huawei LUNA: beste ecosysteem en software. Wij adviseren onafhankelijk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken ROI
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk AlphaESS Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlphaESSvsHuaweiLunaPage;
