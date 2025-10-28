import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Shield, Zap, Star, Phone, Calculator, Euro } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const DaikinVsMitsubishi = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Vergelijkingen', path: '/seo/pillar-8-vergelijkingen' },
    { label: 'Daikin vs Mitsubishi' }
  ];

  const usps = [
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "Premium Merken",
      description: "Beide wereldtop met Japanse kwaliteit en betrouwbaarheid"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "10 Jaar Garantie",
      description: "Uitgebreide garantie op beide merken beschikbaar"
    },
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "A+++ Energie",
      description: "Hoogste energie-efficiëntie voor maximale besparing"
    },
    {
      icon: <Star className="h-12 w-12 text-sky-500" />,
      title: "Expert Advies",
      description: "Wij adviseren objectief welk merk past bij uw situatie"
    }
  ];

  const daikinVoordelen = [
    "Marktleider wereldwijd - 90+ jaar ervaring sinds 1924",
    "Beste energie-efficiëntie - SCOP tot 5,15 (A+++)",
    "Innovatieve luchtzuivering met Streamer technologie",
    "Meest uitgebreide productlijn - voor elke situatie een oplossing",
    "Zeer stil - vanaf 19 dB binnenunit (Emura serie)",
    "Betere wifi-app met meer functies (Onecta app)",
    "Langere garantie beschikbaar - tot 10 jaar op premiumlijnen",
    "Uitstekende dealer-netwerk in Nederland"
  ];

  const daikinNadelen = [
    "5-10% hogere aanschafprijs dan Mitsubishi",
    "Sommige modellen complexer in bediening",
    "Premium functies alleen op duurdere modellen",
    "Onderdelen kunnen duurder zijn"
  ];

  const mitsubishiVoordelen = [
    "Beste betrouwbaarheid - laagste storingskans in de sector",
    "Eenvoudige, intuïtieve bediening - ook voor ouderen",
    "Hyper Heating tot -25°C - beste voor verwarmen",
    "Zeer robuuste constructie - gebouwd voor lange levensduur",
    "Snellere koeling bij opstarten",
    "Uitstekende prijs/kwaliteit verhouding",
    "Minimaal onderhoud nodig - betrouwbaar systeem",
    "Stille werking - 19-21 dB op premium modellen"
  ];

  const mitsubishiNadelen = [
    "Minder uitgebreide productlijn dan Daikin",
    "Wifi-functies wat beperkter",
    "Geen geavanceerde luchtzuivering",
    "Iets lager SCOP (4,8 vs 5,15) - minimaal verschil"
  ];

  const faqs = [
    {
      question: "Welk merk is beter: Daikin of Mitsubishi?",
      answer: "Beide merken zijn wereldtop in kwaliteit en betrouwbaarheid. Daikin is de innovatieleider met meeste functies en hoogste efficiëntie (SCOP 5,15). Mitsubishi staat bekend om betrouwbaarheid, eenvoud en beste verwarmingsprestaties tot -25°C. De keuze hangt af van uw prioriteiten: innovatie & functies (Daikin) of eenvoud & betrouwbaarheid (Mitsubishi)."
    },
    {
      question: "Wat is het prijsverschil tussen Daikin en Mitsubishi?",
      answer: "Daikin is gemiddeld 5-10% duurder dan Mitsubishi. Een vergelijkbaar systeem kost: Daikin €1.800-€2.200 vs Mitsubishi €1.600-€2.000. Dit verschil komt door extra innovaties zoals Streamer luchtzuivering en geavanceerdere besturing. Over 10 jaar zijn de totale kosten vergelijkbaar door Daikin's hogere energie-efficiëntie."
    },
    {
      question: "Welk merk is zuiniger in energieverbruik?",
      answer: "Daikin heeft een licht voordeel in energie-efficiëntie. Top Daikin modellen halen SCOP 5,15 (A+++) vs Mitsubishi 4,8 (A+++). In praktijk scheelt dit €10-€15 per jaar bij normaal gebruik. Beide merken zijn zeer zuinig - het verschil is minimaal maar Daikin heeft de hoogste cijfers."
    },
    {
      question: "Welk merk is het stilste?",
      answer: "Beide merken zijn extreem stil. Daikin Emura: vanaf 19 dB. Mitsubishi Design Inverter: vanaf 21 dB. Dit verschil van 2 dB is niet hoorbaar voor mensen. Beide zijn stiller dan gefluister (30 dB) en geschikt voor slaapkamers. In praktijk zijn beide even stil."
    },
    {
      question: "Welk merk gaat het langst mee?",
      answer: "Mitsubishi staat bekend om langste levensduur - gemiddeld 18-20 jaar door robuuste constructie en minimale slijtage. Daikin gaat 15-18 jaar mee, wat ook uitstekend is. Beide merken overtreffen goedkopere alternatieven ruimschoots (die 10-12 jaar meegaan). Het verschil is marginaal - beide zijn topmerken."
    },
    {
      question: "Welk merk is beter voor verwarmen?",
      answer: "Mitsubishi Hyper Heating wint voor verwarmen. Deze werkt effectief tot -25°C buitentemperatuur vs Daikin tot -20°C. Voor Nederlandse winters (zelden onder -10°C) werken beide uitstekend. Als u in een koud gebied woont of de airco als hoofdverwarming gebruikt, is Mitsubishi Hyper Heating de veiligste keuze."
    },
    {
      question: "Zijn onderdelen en reparaties duurder bij Daikin of Mitsubishi?",
      answer: "Daikin onderdelen zijn gemiddeld 10-15% duurder dan Mitsubishi. Echter: beide merken hebben zeer lage storingskans ( minder dan 2%) en 5-10 jaar garantie. Reparaties zijn zeldzaam bij beide merken. Over de levensduur zijn de onderhoudskosten vergelijkbaar: €95-€125 per jaar jaarlijks onderhoud, ongeacht het merk."
    },
    {
      question: "Welk merk adviseren jullie?",
      answer: "Wij adviseren beide merken afhankelijk van uw situatie. Daikin voor: innovatie, luchtkwaliteit, hoogste efficiëntie, uitgebreide functies. Mitsubishi voor: eenvoud, betrouwbaarheid, verwarmen tot -25°C, robuustheid. Beide zijn uitstekende keuzes - wij helpen u de juiste match te vinden op basis van uw prioriteiten en budget."
    }
  ];

  return (
    <>
      <MetaTags
        title="Daikin vs Mitsubishi Airco | Kwaliteitsvergelijking | StayCool Limburg"
        description="Daikin vs Mitsubishi airco ✓ Kwaliteit & betrouwbaarheid ✓ Prijsverschil ✓ Energie-efficiëntie ✓ Voor- en nadelen ✓ Expert advies ✓ 10 jaar garantie"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Daikin vs Mitsubishi: Welk Premium Merk Kiest u?",
          description: "Objectieve vergelijking tussen Daikin en Mitsubishi airconditioners - kwaliteit, prijzen, efficiëntie en betrouwbaarheid.",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          },
          publisher: {
            "@type": "Organization",
            name: "StayCool Airco",
            logo: {
              "@type": "ImageObject",
              url: "https://staycoolairco.nl/logo.png"
            }
          }
        }}
      />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Daikin vs Mitsubishi: Premium Kwaliteit Vergeleken
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Beide Japanse topmerken met 90+ jaar ervaring. Daikin leidt in innovatie en efficiëntie, Mitsubishi staat voor betrouwbaarheid en eenvoud. Welke past bij u?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Expert Merkadvies
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Star className="h-5 w-5 mr-2" />
              Bekijk Alle Modellen
            </Link>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{usp.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merkgeschiedenis */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Twee Japanse Topmerken met Rijke Geschiedenis
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Daikin - De Innovatieleider
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Opgericht:</strong> 1924 in Osaka, Japan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Marktpositie:</strong> #1 wereldwijd in airconditioning (24% marktaandeel)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Specialisatie:</strong> Koudemiddelen, inverter technologie, luchtzuivering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Innovaties:</strong> Eerste R-32 koudemiddel, Streamer technologie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Productlijn:</strong> Breedste assortiment - 500+ modellen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Focus:</strong> Innovatie, efficiëntie, design, functionaliteit</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Mitsubishi Heavy Industries - De Betrouwbare
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Opgericht:</strong> 1870 in Nagasaki, Japan (airco sinds 1954)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Marktpositie:</strong> Top 3 wereldwijd in premium segment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Specialisatie:</strong> Robuuste systemen, Hyper Heating, industriële toepassingen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Innovaties:</strong> Hyper Heating tot -25°C, dubbele zuiger compressor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Productlijn:</strong> Gericht assortiment - kwaliteit boven kwantiteit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Focus:</strong> Betrouwbaarheid, duurzaamheid, eenvoud, robuustheid</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-6 rounded-lg">
            <p className="text-lg text-gray-900">
              <strong>Beide merken</strong> zijn Japanse premium fabrikanten met decennia aan ervaring en bewezen kwaliteit. Daikin focust op innovatie en brede keuze, Mitsubishi op ultieme betrouwbaarheid en eenvoud. U kunt niet verkeerd kiezen - het gaat om persoonlijke voorkeur en specifieke behoeften.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Directe Specificatie Vergelijking
          </h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-sky-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Specificatie</th>
                  <th className="px-6 py-4 text-left font-semibold">Daikin</th>
                  <th className="px-6 py-4 text-left font-semibold">Mitsubishi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Prijsklasse</td>
                  <td className="px-6 py-4 text-gray-700">€1.800-€2.200</td>
                  <td className="px-6 py-4 text-green-600">€1.600-€2.000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">SCOP (efficiëntie)</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">5,15 (A+++)</td>
                  <td className="px-6 py-4 text-gray-700">4,8 (A+++)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Geluidsniveau</td>
                  <td className="px-6 py-4 text-gray-700">19-33 dB (Emura 19 dB)</td>
                  <td className="px-6 py-4 text-gray-700">21-35 dB (Design 21 dB)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Verwarmen tot</td>
                  <td className="px-6 py-4 text-gray-700">-20°C effectief</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">-25°C (Hyper Heating)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Luchtzuivering</td>
                  <td className="px-6 py-4 text-green-600">✓ Streamer technologie</td>
                  <td className="px-6 py-4 text-gray-700">Basisfilter</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Wifi-functionaliteit</td>
                  <td className="px-6 py-4 text-green-600">Uitgebreid (Onecta app)</td>
                  <td className="px-6 py-4 text-gray-700">Standaard (MELCloud)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Garantie standaard</td>
                  <td className="px-6 py-4 text-gray-700">5 jaar (10 jaar optie)</td>
                  <td className="px-6 py-4 text-gray-700">5 jaar (10 jaar optie)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Levensduur verwacht</td>
                  <td className="px-6 py-4 text-gray-700">15-18 jaar</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">18-20 jaar</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Storingskans</td>
                  <td className="px-6 py-4 text-gray-700"> minder dan 2% per jaar</td>
                  <td className="px-6 py-4 text-green-600 font-semibold"> minder dan 1,5% per jaar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Modellenkeuze</td>
                  <td className="px-6 py-4 text-green-600">Zeer breed (500+ modellen)</td>
                  <td className="px-6 py-4 text-gray-700">Gericht (200+ modellen)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Bedieningsgemak</td>
                  <td className="px-6 py-4 text-gray-700">Uitgebreid (veel opties)</td>
                  <td className="px-6 py-4 text-green-600">Eenvoudig (intuïtief)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Onderhoud</td>
                  <td className="px-6 py-4 text-gray-700">€95/jaar</td>
                  <td className="px-6 py-4 text-gray-700">€95/jaar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Twijfelt u tussen Daikin en Mitsubishi?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Onze gecertificeerde experts helpen u de perfecte match te vinden op basis van uw wensen, budget en situatie. Geheel gratis en vrijblijvend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Merkadvies
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              Bel: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* Voor- en Nadelen */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Voor- en Nadelen per Merk
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Daikin */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Daikin
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {daikinVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Aandachtspunten
                </h4>
                <ul className="space-y-3">
                  {daikinNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mitsubishi */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">
                Mitsubishi Heavy Industries
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {mitsubishiVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Aandachtspunten
                </h4>
                <ul className="space-y-3">
                  {mitsubishiNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keuzehulp */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Welk Merk Past bij Uw Situatie?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Star className="h-8 w-8 text-blue-600 mr-3" />
                Kies Daikin als:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Hoogste energie-efficiëntie belangrijk is</strong>
                    <p className="text-gray-700">SCOP 5,15 - laagste energiekosten</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U waarde hecht aan luchtkwaliteit</strong>
                    <p className="text-gray-700">Streamer technologie zuivert lucht actief</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Uitgebreide smart home integratie gewenst</strong>
                    <p className="text-gray-700">Beste wifi-app met meeste functies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Design en esthetiek belangrijk zijn</strong>
                    <p className="text-gray-700">Emura serie - design prijzen gewonnen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U de nieuwste innovaties wilt</strong>
                    <p className="text-gray-700">Marktleider in technologie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Specifieke modelwensen heeft</strong>
                    <p className="text-gray-700">Breedste assortiment keuze</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-red-600 mr-3" />
                Kies Mitsubishi als:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Maximale betrouwbaarheid prioriteit is</strong>
                    <p className="text-gray-700">Laagste storingskans in de sector</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U airco hoofdzakelijk voor verwarmen gebruikt</strong>
                    <p className="text-gray-700">Hyper Heating tot -25°C - beste op markt</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Eenvoudige bediening belangrijk is</strong>
                    <p className="text-gray-700">Intuïtief - ook voor ouderen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Beste prijs/kwaliteit verhouding zoekt</strong>
                    <p className="text-gray-700">Premium kwaliteit voor lagere prijs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Langste levensduur verwacht</strong>
                    <p className="text-gray-700">18-20 jaar gemiddeld</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Robuust systeem wilt zonder poespas</strong>
                    <p className="text-gray-700">Focus op kerntaken - betrouwbaar</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-sky-50 border-2 border-sky-400 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-sky-900 mb-4">StayCool Airco Expert Advies</h3>
            <p className="text-gray-700 text-lg mb-4">
              Wij werken met beide topmerken en adviseren objectief. <strong>Daikin</strong> is perfect voor klanten die maximale efficiëntie, innovatie en uitgebreide functies willen. <strong>Mitsubishi</strong> is ideaal voor wie betrouwbaarheid, eenvoud en verwarmingsprestaties voorop stelt.
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Praktijkervaring:</strong> Beide merken presteren uitstekend in Limburg. Daikin zie je vaker in moderne nieuwbouwwoningen met smart home integratie. Mitsubishi wordt gekozen door klanten die zekerheid boven snufjes stellen. U kunt echt niet verkeerd kiezen - het gaat om persoonlijke voorkeur.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Premium Japanse Kwaliteit?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Of u nu kiest voor Daikin of Mitsubishi - bij StayCool Airco krijgt u expertinstallatie, 10 jaar garantie en jarenlang professioneel onderhoud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Gratis Offerte Aanvragen
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-700 text-white font-bold rounded-lg hover:bg-sky-800 transition-colors text-lg"
            >
              Bekijk Alle Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DaikinVsMitsubishi;
