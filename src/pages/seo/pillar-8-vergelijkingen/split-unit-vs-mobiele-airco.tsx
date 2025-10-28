import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Euro, Zap, Wind, Home, Phone, Calculator, ThermometerSun, Volume2 } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const SplitVsMobieleAirco = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Vergelijkingen', path: '/seo/pillar-8-vergelijkingen' },
    { label: 'Split-unit vs Mobiele Airco' }
  ];

  const usps = [
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "Energiebesparing",
      description: "Split-units tot 60% zuiniger dan mobiele airconditioners"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Lagere Kosten",
      description: "Verdien investering terug door lagere energiekosten"
    },
    {
      icon: <Volume2 className="h-12 w-12 text-sky-500" />,
      title: "Stiller Werken",
      description: "Split-units tot 70% stiller dan mobiele modellen"
    },
    {
      icon: <ThermometerSun className="h-12 w-12 text-sky-500" />,
      title: "Betere Koeling",
      description: "Effectievere koeling en verwarmingsfunctie"
    }
  ];

  const splitVoordelen = [
    "60% energiezuiniger dan mobiele airco's",
    "Tot 10 jaar fabrieksgarantie op premium merken",
    "Geen afvoerslang nodig - professionele installatie",
    "Stil binnenunit (vanaf 19 dB) - ideaal voor slaapkamers",
    "Kan ook verwarmen met warmtepompfunctie",
    "Koelt meerdere ruimtes met multi-split systemen",
    "Verhoogt woningwaarde met vaste installatie",
    "Geen condenswater legen - automatische afvoer"
  ];

  const splitNadelen = [
    "Hogere aanschafprijs (vanaf €1.200 geïnstalleerd)",
    "Professionele installatie vereist door F-gas gecertificeerd bedrijf",
    "Gat in de muur nodig voor koelmiddelleiding",
    "Buitenunit nodig - ruimte buiten vereist"
  ];

  const mobieleVoordelen = [
    "Lagere aanschafprijs (€300-€800)",
    "Direct te gebruiken - geen installatie nodig",
    "Verplaatsbaar naar verschillende ruimtes",
    "Geschikt voor huurwoningen zonder permanente aanpassingen"
  ];

  const mobieleNadelen = [
    "3x hogere energiekosten dan split-units",
    "Afvoerslang door raam of deur - warmteverlies",
    "Veel lawaai (50-65 dB) - verstorend geluid",
    "Beperkte koelcapaciteit - alleen kleine ruimtes",
    "Condenswater handmatig legen",
    "Alleen koelen - geen verwarmingsfunctie",
    "Korte levensduur (5-7 jaar)",
    "Hogere onderhoudskosten"
  ];

  const faqs = [
    {
      question: "Wanneer kies ik voor een split-unit airco?",
      answer: "Kies voor een split-unit als u permanent goede koeling wilt in uw woning, lagere energiekosten belangrijk vindt, en bereid bent te investeren in een professionele installatie. Split-units zijn ideaal voor eigenwoningbezitters die comfort en efficiëntie voorop stellen."
    },
    {
      question: "Wanneer kies ik voor een mobiele airco?",
      answer: "Een mobiele airco is geschikt als u huurt en geen permanente aanpassingen mag maken, een zeer beperkt budget heeft (onder €500), of de airco maar een paar weken per jaar nodig heeft. Houd rekening met hogere energiekosten en beperkte prestaties."
    },
    {
      question: "Wat is het verschil in energiekosten?",
      answer: "Een split-unit verbruikt gemiddeld 0,8 kW per uur voor een ruimte van 25m², wat €0,20 per uur kost bij €0,25/kWh. Een mobiele airco verbruikt 2,5 kW voor dezelfde ruimte (€0,62/uur). Bij 500 gebruiksuren per jaar scheelt dat €210 per jaar - waarmee de split-unit zichzelf in 5-7 jaar terugverdient."
    },
    {
      question: "Hoe luid zijn split-units vergeleken met mobiele airco's?",
      answer: "Moderne split-units produceren 19-35 dB geluid (binnenunit), vergelijkbaar met gefluister. Mobiele airco's produceren 50-65 dB, vergelijkbaar met een gewoon gesprek of stofzuiger. Dit verschil van 30-40 dB wordt als 70% stiller ervaren en maakt split-units veel geschikter voor slaapkamers."
    },
    {
      question: "Kan ik zelf een split-unit installeren om kosten te besparen?",
      answer: "Nee, split-unit installatie vereist F-gas certificering volgens Nederlandse wet- en regelgeving. Zelfinstallatie is illegaal, gevaarlijk (koudemiddel onder hoge druk), en leidt tot garantieverlies. Professionele installatie door StayCool Airco kost €400-€800 en zorgt voor veilige, efficiënte werking met volledige garantie."
    },
    {
      question: "Welk systeem is beter voor meerdere kamers?",
      answer: "Voor meerdere kamers is een multi-split systeem verreweg de beste keuze. Eén buitenunit bedient 2-5 binnenunits in verschillende ruimtes, met onafhankelijke temperatuurregeling per kamer. Mobiele airco's zijn onpraktisch voor meerdere ruimtes omdat ze maar één ruimte tegelijk kunnen koelen en verplaatst moeten worden."
    },
    {
      question: "Hoe lang gaat een split-unit vs mobiele airco mee?",
      answer: "Split-units van kwaliteitsmerken (Daikin, Mitsubishi) gaan 15-20 jaar mee met goed onderhoud. Mobiele airco's hebben een levensduur van 5-7 jaar. Over 15 jaar gebruikt u dus 2-3 mobiele airco's (€900-€2.400) terwijl één split-unit blijft werken."
    },
    {
      question: "Wat zijn de totale kosten over 10 jaar?",
      answer: "Split-unit: €1.800 aanschaf + €1.000 energie + €200 onderhoud = €3.000 totaal. Mobiele airco: €500 aanschaf x2 (vervanging) + €3.100 energie = €4.100 totaal. De split-unit bespaart €1.100 over 10 jaar, plus comfort en stiller gebruik."
    }
  ];

  return (
    <>
      <MetaTags
        title="Split-unit vs Mobiele Airco Vergelijking | Voor- en Nadelen | StayCool"
        description="Split-unit vs mobiele airco ✓ 60% zuiniger ✓ 70% stiller ✓ Voor- en nadelen vergelijking ✓ Energiekosten ✓ Totale kosten ✓ Expert advies Limburg"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Split-unit vs Mobiele Airco: Complete Vergelijking",
          description: "Uitgebreide vergelijking tussen split-unit en mobiele airco systemen, inclusief voor- en nadelen, kosten, en advies voor uw situatie.",
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
            Split-unit vs Mobiele Airco: Complete Vergelijking
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Ontdek welk systeem het beste bij uw situatie past. Split-units zijn 60% zuiniger en 70% stiller, maar kosten meer in aanschaf. Wij helpen u de juiste keuze maken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken uw Capaciteit
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

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Split-unit vs Mobiele Airco: Directe Vergelijking
          </h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-sky-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Eigenschap</th>
                  <th className="px-6 py-4 text-left font-semibold">Split-unit</th>
                  <th className="px-6 py-4 text-left font-semibold">Mobiele Airco</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Aanschafprijs</td>
                  <td className="px-6 py-4 text-gray-700">€1.200 - €2.500 (geïnstalleerd)</td>
                  <td className="px-6 py-4 text-gray-700">€300 - €800</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Energieverbruik</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">0,8 kW/uur (€0,20/uur)</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">2,5 kW/uur (€0,62/uur)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Geluidsniveau</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">19-35 dB (gefluister)</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">50-65 dB (gesprek)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Koelcapaciteit</td>
                  <td className="px-6 py-4 text-green-600">Hoog - tot 7 kW (60m²)</td>
                  <td className="px-6 py-4 text-orange-600">Laag - max 3 kW (25m²)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Installatie</td>
                  <td className="px-6 py-4 text-gray-700">Professioneel (F-gas vereist)</td>
                  <td className="px-6 py-4 text-gray-700">Plug & play - zelf doen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Verwarmingsfunctie</td>
                  <td className="px-6 py-4 text-green-600">✓ Warmtepomp (60% besparing)</td>
                  <td className="px-6 py-4 text-red-600">✗ Alleen koelen</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Levensduur</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">15-20 jaar</td>
                  <td className="px-6 py-4 text-orange-600 font-semibold">5-7 jaar</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Garantie</td>
                  <td className="px-6 py-4 text-gray-700">5-10 jaar fabrieksgarantie</td>
                  <td className="px-6 py-4 text-gray-700">1-2 jaar garantie</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Onderhoud</td>
                  <td className="px-6 py-4 text-gray-700">1x per jaar - €95</td>
                  <td className="px-6 py-4 text-gray-700">Filters zelf reinigen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Woningwaarde</td>
                  <td className="px-6 py-4 text-green-600">✓ Verhoogt waarde</td>
                  <td className="px-6 py-4 text-gray-700">Geen effect</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Voor- en Nadelen Split-unit */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Voor- en Nadelen per Systeem
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Split-unit */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Wind className="h-8 w-8 text-sky-500 mr-3" />
                Split-unit Airco
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {splitVoordelen.map((voordeel, index) => (
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
                  {splitNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobiele Airco */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="h-8 w-8 text-orange-500 mr-3" />
                Mobiele Airco
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {mobieleVoordelen.map((voordeel, index) => (
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
                  {mobieleNadelen.map((nadeel, index) => (
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

      {/* Kostenanalyse */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Totale Kosten over 10 Jaar
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-6">
              Veel mensen kijken alleen naar de aanschafprijs, maar de totale kosten over de levensduur vertellen een heel ander verhaal. Hier is een realistische berekening voor een woonkamer van 25m²:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Split-unit (10 jaar)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Aanschaf + installatie:</strong> €1.800</li>
                  <li><strong>Energiekosten:</strong> €100/jaar × 10 = €1.000</li>
                  <li><strong>Onderhoud:</strong> €95/jaar × 2 = €190</li>
                  <li className="text-xl font-bold text-green-600 pt-2 border-t-2 border-green-300">Totaal: €2.990</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobiele Airco (10 jaar)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Aanschaf:</strong> €500 × 2 (vervanging) = €1.000</li>
                  <li><strong>Energiekosten:</strong> €310/jaar × 10 = €3.100</li>
                  <li><strong>Onderhoud:</strong> €0 (zelf doen)</li>
                  <li className="text-xl font-bold text-red-600 pt-2 border-t-2 border-red-300">Totaal: €4.100</li>
                </ul>
              </div>
            </div>

            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-lg my-8">
              <p className="text-xl font-bold text-sky-900 mb-2">
                <Euro className="inline h-6 w-6 mr-2" />
                Totale besparing split-unit: €1.110 over 10 jaar
              </p>
              <p className="text-gray-700">
                Plus stiller, effectiever, én verwarmingsfunctie voor nog meer besparing in de winter!
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Terugverdientijd Split-unit</h3>
            <p className="text-gray-700 text-lg mb-4">
              Het prijsverschil van €1.300 (split-unit €1.800 vs mobiele airco €500) wordt terugverdiend door:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Energiebesparing:</strong> €210 per jaar (€0,62 - €0,20 = €0,42/uur × 500 uur)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Terugverdientijd:</strong> 6,2 jaar (€1.300 / €210 per jaar)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Na 10 jaar:</strong> €1.110 netto besparing + 10 jaar extra levensduur</span>
              </li>
            </ul>

            <p className="text-gray-700 text-lg">
              Na de terugverdientijd bespaart u elk jaar €210 op energiekosten. Over de 15-20 jaar levensduur van een split-unit loopt dit op tot €2.000-€3.000 totale besparing, terwijl u intussen 2-3 mobiele airco's had moeten vervangen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wilt u weten wat het beste past bij uw situatie?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Onze experts helpen u gratis bij het maken van de juiste keuze voor uw woning
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

      {/* Wanneer kiezen voor welk systeem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Wanneer Kiest u voor Welk Systeem?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                Kies voor een Split-unit als:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U eigenaar bent van uw woning</strong>
                    <p className="text-gray-700">En permanente aanpassingen mag maken</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Lagere energiekosten belangrijk zijn</strong>
                    <p className="text-gray-700">60% besparing op energieverbruik</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U vaak airco gebruikt ( meer dan 200 uur/jaar)</strong>
                    <p className="text-gray-700">Investering verdient zich snel terug</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Stil gebruik essentieel is</strong>
                    <p className="text-gray-700">Vooral voor slaapkamers en kantoren</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U ook wilt kunnen verwarmen</strong>
                    <p className="text-gray-700">Warmtepompfunctie bespaart 60% op CV</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Meerdere ruimtes koelen</strong>
                    <p className="text-gray-700">Multi-split systeem voor 2-5 kamers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Lange termijn investering</strong>
                    <p className="text-gray-700">15-20 jaar betrouwbare werking</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                <Home className="h-8 w-8 text-orange-600 mr-3" />
                Kies voor een Mobiele Airco als:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">U in een huurwoning woont</strong>
                    <p className="text-gray-700">Geen permanente aanpassingen toegestaan</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Budget zeer beperkt is (onder €500)</strong>
                    <p className="text-gray-700">Lagere aanschafprijs, hogere gebruikskosten</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Zeer beperkt gebruik ( minder dan 50 uur/jaar)</strong>
                    <p className="text-gray-700">Alleen een paar hete dagen per jaar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Tijdelijke oplossing nodig</strong>
                    <p className="text-gray-700">Binnenkort verhuizing gepland</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Flexibiliteit vereist</strong>
                    <p className="text-gray-700">Airco verplaatsen tussen ruimtes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Kleine ruimte (onder 15m²)</strong>
                    <p className="text-gray-700">Kleine kamer, kantoortje of studentenkamer</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 bg-orange-200 border-l-4 border-orange-600 p-4 rounded">
                <p className="text-orange-900 font-semibold">
                  <strong>Let op:</strong> Overweeg toch een split-unit als u de airco meer dan 100 uur per jaar gebruikt - de energiebesparing is substantieel!
                </p>
              </div>
            </div>
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
            Klaar voor Professionele Airco Installatie?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            StayCool Airco helpt u bij het kiezen en installeren van het perfecte systeem voor uw situatie. F-gas gecertificeerd, 10 jaar garantie op premium merken.
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

export default SplitVsMobieleAirco;
