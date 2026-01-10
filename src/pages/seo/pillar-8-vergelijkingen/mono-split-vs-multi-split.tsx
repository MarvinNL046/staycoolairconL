import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Euro, Home, Users, Zap, Phone, Calculator, Settings } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const MonoSplitVsMultiSplit = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Vergelijkingen', path: '/seo/pillar-8-vergelijkingen' },
    { label: 'Mono-split vs Multi-split' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Kostenefficiënt",
      description: "Multi-split bespaart 30-40% op installatie voor meerdere kamers"
    },
    {
      icon: <Home className="h-12 w-12 text-sky-500" />,
      title: "Ruimtebesparing",
      description: "Eén buitenunit voor maximaal 5 binnenunits"
    },
    {
      icon: <Users className="h-12 w-12 text-sky-500" />,
      title: "Per Kamer Regelen",
      description: "Onafhankelijke temperatuurregeling per ruimte"
    },
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "Energiezuinig",
      description: "Geavanceerde inverter technologie voor optimaal verbruik"
    }
  ];

  const monoVoordelen = [
    "Lagere aanschafprijs per unit (€1.200-€1.800)",
    "Eenvoudigere installatie - minder complex",
    "Eén kamer defect = andere kamers blijven werken",
    "Makkelijker uit te breiden met extra units later",
    "Grotere flexibiliteit in capaciteitskeuze per kamer",
    "Lagere reparatiekosten bij storing",
    "Geschikt voor gefaseerde installatie (nu 1 kamer, later meer)",
    "Geen afhankelijkheid tussen verschillende ruimtes"
  ];

  const monoNadelen = [
    "Meerdere buitenunits nodig - meer ruimte buiten",
    "Totale kosten hoger bij 3+ kamers (€4.500+)",
    "Meer gaten in de muur voor koelmiddelleidingen",
    "Visueel minder netjes met meerdere buitenunits",
    "Hogere totale installatie arbeidskosten",
    "Meer onderhoudsbeurten nodig (per unit €95/jaar)"
  ];

  const multiVoordelen = [
    "30-40% kostenbesparing bij 3+ kamers vs meerdere mono-splits",
    "Slechts één buitenunit - ruimtebesparing buiten",
    "Eén onderhoudsbeurt voor alle binnenunits (€125/jaar)",
    "Visueel netter - één compact systeem",
    "Minder gaten in de gevel nodig",
    "Centraal beheer mogelijk voor alle ruimtes",
    "Efficiëntere energieverdeling tussen kamers",
    "Geschikt voor nieuwbouw en renovatieprojecten"
  ];

  const multiNadelen = [
    "Hogere initiële investering (€3.500-€6.000)",
    "Complexere installatie - meer vakmanschap vereist",
    "Storing in buitenunit = alle kamers zonder airco",
    "Capaciteit per kamer minder flexibel - vooraf plannen",
    "Lastig later uit te breiden - maximaal 5 binnenunits",
    "Hogere reparatiekosten bij storing buitenunit",
    "Moet vooraf perfect plannen - minder flexibel"
  ];

  const faqs = [
    {
      question: "Wanneer kies ik voor een mono-split systeem?",
      answer: "Kies voor mono-split als u nu slechts 1-2 kamers wilt voorzien van airco, later mogelijk wilt uitbreiden, maximale onafhankelijkheid per kamer wilt, of gefaseerd wilt investeren. Ook ideaal als u twijfelt over toekomstige behoeften of verschillende merken/modellen wilt combineren per ruimte."
    },
    {
      question: "Wanneer kies ik voor een multi-split systeem?",
      answer: "Multi-split is ideaal als u 3-5 kamers tegelijk wilt voorzien, een volledig klimaatplan heeft, beperkte buitenruimte heeft voor meerdere units, een nette uitstraling belangrijk vindt, of nieuwbouw/renovatie plant waarbij alles in één keer geïnstalleerd kan worden."
    },
    {
      question: "Wat zijn de kosten voor 3 kamers?",
      answer: "Mono-split (3 kamers): 3 × €1.600 = €4.800 totaal. Multi-split (3 kamers): €4.200 totaal. Besparing: €600 op aanschaf + lagere onderhoudskosten (€125/jaar vs €285/jaar). Over 10 jaar bespaart u €2.200 met multi-split voor 3 kamers."
    },
    {
      question: "Kan ik later een mono-split naar multi-split upgraden?",
      answer: "Nee, dat is technisch niet mogelijk. Mono-split en multi-split zijn fundamenteel verschillende systemen met andere buitenunits en besturingssystemen. Als u later meer kamers wilt, kunt u óf extra mono-splits installeren, óf het volledige systeem vervangen door multi-split."
    },
    {
      question: "Wat gebeurt er als de buitenunit van multi-split kapot gaat?",
      answer: "Bij storing van de multi-split buitenunit werken alle binnenunits niet meer. Daarom adviseren wij premium merken (Daikin, Mitsubishi) met 10 jaar garantie en betrouwbaarheid van 99%+. Bij mono-split blijven andere kamers wel werken als één buitenunit defect is - maar de kans op meerdere storingen is groter."
    },
    {
      question: "Hoe groot mag het verschil in capaciteit zijn tussen binnenunits?",
      answer: "Bij multi-split moet de som van alle binnenunits tussen 50-130% liggen van de buitenunit capaciteit. Voorbeeld: 5 kW buitenunit kan 2,5 tot 6,5 kW aan binnenunits bedienen. Te veel verschil (bijv. 2 kW + 2 kW + 5 kW op 5 kW unit) werkt inefficiënt."
    },
    {
      question: "Kan ik verschillende type binnenunits combineren in multi-split?",
      answer: "Ja! U kunt wandunits, cassette units en vloermodellen combineren binnen één multi-split systeem, zolang ze van hetzelfde merk zijn. Zo kunt u per ruimte het meest geschikte type kiezen: wandunit woonkamer, cassette kantoor, vloermodel slaapkamer."
    },
    {
      question: "Wat zijn de onderhoudsverschillen tussen mono en multi-split?",
      answer: "Mono-split: €95 per unit per jaar. Voor 3 kamers = €285/jaar. Multi-split: €125 voor hele systeem per jaar. Over 10 jaar scheelt dit €1.600 in onderhoudskosten voor 3 kamers. Multi-split onderhoud duurt langer (3-4 uur) maar is goedkoper per kamer."
    }
  ];

  return (
    <>
      <MetaTags
        title="Mono-split vs Multi-split Airco | Wanneer Welk Systeem? | StayCool"
        description="Mono-split vs multi-split airco vergelijking ✓ Kosten per scenario ✓ Voor- en nadelen ✓ Expert advies ✓ 30-40% besparing mogelijk ✓ Gratis offerte Limburg"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Mono-split vs Multi-split: Wanneer Welk Systeem Kiezen?",
          description: "Complete vergelijking tussen mono-split en multi-split aircosystemen inclusief kosten, voor- en nadelen per scenario.",
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
      <FAQSchema faqs={faqs} />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Mono-split vs Multi-split: Wanneer Welk Systeem?
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Multi-split bespaart 30-40% op kosten bij 3+ kamers, maar mono-split biedt meer flexibiliteit. Ontdek welk systeem perfect past bij uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Systeemadvies
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Capaciteit
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

      {/* Wat zijn Mono en Multi-split */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Wat is het Verschil?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-sky-50 border-2 border-sky-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-sky-900 mb-4">
                Mono-split Systeem
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Een mono-split systeem bestaat uit <strong>één buitenunit gekoppeld aan één binnenunit</strong>. Voor elke kamer die u wilt voorzien van airco, installeert u een compleet afzonderlijk systeem met eigen buitenunit.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-1" />
                  <span>1 kamer = 1 buitenunit + 1 binnenunit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-1" />
                  <span>3 kamers = 3 buitenunits + 3 binnenunits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Elke kamer functioneert volledig onafhankelijk</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">
                Multi-split Systeem
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Een multi-split systeem heeft <strong>één krachtige buitenunit die 2-5 binnenunits bedient</strong>. Alle kamers delen één buitenunit, maar elke kamer kan individueel geregeld worden.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                  <span>2-5 kamers = 1 buitenunit + 2-5 binnenunits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Elke binnenunit heeft eigen bediening en thermostaat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Buitenunit verdeelt koelvermogen intelligent</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg">
              <strong>Voorbeeld:</strong> Voor een gezinswoning met woonkamer, master bedroom en 2 kinderkamers heeft u bij mono-split 4 buitenunits nodig (mogelijk niet haalbaar qua ruimte). Bij multi-split volstaat 1 buitenunit die alle 4 binnenunits bedient - een enorme ruimte- en kostenbesparing.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Directe Vergelijking
          </h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-sky-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                  <th className="px-6 py-4 text-left font-semibold">Mono-split</th>
                  <th className="px-6 py-4 text-left font-semibold">Multi-split</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Kosten 1 kamer</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">€1.200-€1.800</td>
                  <td className="px-6 py-4 text-gray-700">n.v.t. (min. 2 kamers)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Kosten 2 kamers</td>
                  <td className="px-6 py-4 text-gray-700">€2.400-€3.600</td>
                  <td className="px-6 py-4 text-gray-700">€2.800-€4.000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Kosten 3 kamers</td>
                  <td className="px-6 py-4 text-gray-700">€3.600-€5.400</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">€3.500-€5.000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Kosten 4-5 kamers</td>
                  <td className="px-6 py-4 text-red-600">€4.800-€9.000</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">€4.500-€6.500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Buitenruimte</td>
                  <td className="px-6 py-4 text-red-600">Veel (per kamer 1 unit)</td>
                  <td className="px-6 py-4 text-green-600">Minimaal (1 unit totaal)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Onderhoud/jaar</td>
                  <td className="px-6 py-4 text-red-600">€95 per unit (€285 bij 3)</td>
                  <td className="px-6 py-4 text-green-600">€125 totaal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Uitbreidbaarheid</td>
                  <td className="px-6 py-4 text-green-600">Makkelijk - altijd toevoegen</td>
                  <td className="px-6 py-4 text-orange-600">Beperkt - max 5 units</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Betrouwbaarheid</td>
                  <td className="px-6 py-4 text-green-600">1 storing = 1 kamer uit</td>
                  <td className="px-6 py-4 text-orange-600">1 storing = alle kamers uit</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Installatie tijd</td>
                  <td className="px-6 py-4 text-green-600">6-8 uur (3 kamers)</td>
                  <td className="px-6 py-4 text-orange-600">8-12 uur (3 kamers)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Visuele impact</td>
                  <td className="px-6 py-4 text-orange-600">Meerdere buitenunits zichtbaar</td>
                  <td className="px-6 py-4 text-green-600">1 compacte unit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Voor- en Nadelen */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Voor- en Nadelen per Systeem
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mono-split */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mono-split Systeem
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {monoVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />
                  Nadelen
                </h4>
                <ul className="space-y-3">
                  {monoNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Multi-split */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Multi-split Systeem
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {multiVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />
                  Nadelen
                </h4>
                <ul className="space-y-3">
                  {multiNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Twijfelt u tussen Mono en Multi-split?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Onze airco-experts analyseren uw situatie en adviseren het meest geschikte systeem - geheel gratis en vrijblijvend.
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
              Bel: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* Kosten Scenarios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Kosten per Scenario (10 jaar)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 2 Kamers */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">2 Kamers</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-sky-700 mb-3">Mono-split (2×)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Aanschaf: €3.000</li>
                  <li>Onderhoud: €1.900</li>
                  <li className="font-bold text-lg border-t pt-2">Totaal: €4.900</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded p-4">
                <h4 className="font-semibold text-orange-700 mb-3">Multi-split</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Aanschaf: €3.400</li>
                  <li>Onderhoud: €1.250</li>
                  <li className="font-bold text-lg border-t pt-2">Totaal: €4.650</li>
                </ul>
              </div>

              <p className="mt-4 text-center font-semibold text-green-600">
                Besparing: €250
              </p>
            </div>

            {/* 3 Kamers */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-green-400">
              <div className="bg-green-500 text-white text-center py-2 rounded-lg mb-4 font-bold">
                MEEST GEKOZEN
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">3 Kamers</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-sky-700 mb-3">Mono-split (3×)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Aanschaf: €4.500</li>
                  <li>Onderhoud: €2.850</li>
                  <li className="font-bold text-lg border-t pt-2">Totaal: €7.350</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded p-4">
                <h4 className="font-semibold text-orange-700 mb-3">Multi-split</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Aanschaf: €4.200</li>
                  <li>Onderhoud: €1.250</li>
                  <li className="font-bold text-lg border-t pt-2">Totaal: €5.450</li>
                </ul>
              </div>

              <p className="mt-4 text-center text-xl font-bold text-green-600">
                Besparing: €1.900
              </p>
            </div>

            {/* 4-5 Kamers */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">4-5 Kamers</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-sky-700 mb-3">Mono-split (4×)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Aanschaf: €6.000</li>
                  <li>Onderhoud: €3.800</li>
                  <li className="font-bold text-lg border-t pt-2">Totaal: €9.800</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded p-4">
                <h4 className="font-semibold text-orange-700 mb-3">Multi-split</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Aanschaf: €5.500</li>
                  <li>Onderhoud: €1.250</li>
                  <li className="font-bold text-lg border-t pt-2">Totaal: €6.750</li>
                </ul>
              </div>

              <p className="mt-4 text-center text-xl font-bold text-green-600">
                Besparing: €3.050
              </p>
            </div>
          </div>

          <div className="mt-8 bg-sky-50 border-l-4 border-sky-500 p-6 rounded-lg">
            <p className="text-lg text-gray-900">
              <strong>Conclusie:</strong> Bij 3+ kamers bespaart multi-split substantiële bedragen. Vanaf 3 kamers is multi-split bijna altijd voordeliger, zowel in aanschaf als onderhoud. Alleen bij 1-2 kamers of gefaseerde uitbreiding is mono-split interessanter.
            </p>
          </div>
        </div>
      </section>

      {/* Keuzehulp */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Welk Systeem Past bij Uw Situatie?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-sky-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-sky-600 mr-3" />
                Kies Mono-split als:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U 1-2 kamers wilt voorzien</strong>
                    <p className="text-gray-700">Bij weinig kamers is mono-split goedkoper</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Gefaseerde uitbreiding gewenst</strong>
                    <p className="text-gray-700">Nu 1 kamer, later mogelijk meer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Maximale betrouwbaarheid</strong>
                    <p className="text-gray-700">Eén storing = alleen die kamer uit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Verschillende capaciteiten per kamer</strong>
                    <p className="text-gray-700">Grote woonkamer + kleine slaapkamer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U twijfelt over toekomstige behoeften</strong>
                    <p className="text-gray-700">Flexibiliteit voor later</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                <Settings className="h-8 w-8 text-orange-600 mr-3" />
                Kies Multi-split als:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U 3-5 kamers tegelijk wilt voorzien</strong>
                    <p className="text-gray-700">€1.900+ besparing bij 3 kamers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Beperkte buitenruimte</strong>
                    <p className="text-gray-700">Geen plaats voor meerdere buitenunits</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Nieuwbouw of renovatie</strong>
                    <p className="text-gray-700">Alles in één keer installeren</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Nette uitstraling belangrijk</strong>
                    <p className="text-gray-700">Eén compacte unit buiten</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Lagere onderhoudskosten</strong>
                    <p className="text-gray-700">€125/jaar vs €285/jaar (3 kamers)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
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
            Klaar voor het Perfecte Aircosysteem?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            StayCool Airco adviseert u gratis over het beste systeem voor uw situatie. Of het nu mono of multi-split wordt - wij zorgen voor perfecte installatie.
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
              Bekijk Onze Merken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MonoSplitVsMultiSplit;
