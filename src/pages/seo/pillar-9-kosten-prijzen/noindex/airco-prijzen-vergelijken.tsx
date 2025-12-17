import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, Calculator, TrendingUp, Phone, Award, CheckCircle, XCircle } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoPrijzenVergelijken = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Laten Installeren', path: '/kennisbank/airco-laten-installeren' },
    { label: 'Airco Prijzen Vergelijken' }
  ];

  const merkVergelijking = [
    {
      merk: 'Daikin (Premium)',
      singlesplit: '€2.400 - €3.200',
      multisplit2: '€4.500 - €5.800',
      energielabel: 'A+++',
      garantie: '5 jaar',
      sterktePunten: ['Zeer zuinig', 'Lange levensduur', 'Fluisterstil'],
      zwaktePunten: ['Hogere aanschafprijs']
    },
    {
      merk: 'Mitsubishi (Premium)',
      singlesplit: '€2.200 - €3.000',
      multisplit2: '€4.200 - €5.500',
      energielabel: 'A+++',
      garantie: '5 jaar',
      sterktePunten: ['Betrouwbaar', 'Energiezuinig', 'Stilletjes'],
      zwaktePunten: ['Prijzig in aanschaf']
    },
    {
      merk: 'Panasonic (Midden)',
      singlesplit: '€1.900 - €2.600',
      multisplit2: '€3.800 - €4.800',
      energielabel: 'A++',
      garantie: '3 jaar',
      sterktePunten: ['Goede prijs/kwaliteit', 'Zuinig', 'Degelijk'],
      zwaktePunten: ['Geen top features']
    },
    {
      merk: 'LG (Midden)',
      singlesplit: '€1.800 - €2.400',
      multisplit2: '€3.600 - €4.600',
      energielabel: 'A++',
      garantie: '3 jaar',
      sterktePunten: ['Betaalbaar', 'Moderne functies', 'App bediening'],
      zwaktePunten: ['Iets luidruchtiger']
    },
    {
      merk: 'StayCool Budget (Instap)',
      singlesplit: '€1.650 - €2.000',
      multisplit2: '€3.200 - €4.000',
      energielabel: 'A+',
      garantie: '2 jaar',
      sterktePunten: ['Laagste prijs', 'Degelijk', 'Geschikt voor budget'],
      zwaktePunten: ['Basis functies', 'Hoger verbruik']
    }
  ];

  const kostencomponenten = [
    {
      component: 'Binnenunit',
      budget: '€400 - €600',
      midden: '€600 - €1.000',
      premium: '€1.000 - €1.500',
      verschil: 'Design, geluidsniveau, functies'
    },
    {
      component: 'Buitenunit',
      budget: '€500 - €700',
      midden: '€700 - €1.200',
      premium: '€1.200 - €1.800',
      verschil: 'Energie-efficiëntie, geluid, capaciteit'
    },
    {
      component: 'Installatie',
      budget: '€450 - €600',
      midden: '€600 - €800',
      premium: '€800 - €1.200',
      verschil: 'Complexiteit, leidingwerk, afwerking'
    },
    {
      component: 'Materialen',
      budget: '€150 - €200',
      midden: '€200 - €300',
      premium: '€300 - €500',
      verschil: 'Kwaliteit leidingen, afwerkplaten, beugels'
    },
    {
      component: 'Extra\'s',
      budget: '€50 - €100',
      midden: '€100 - €200',
      premium: '€200 - €400',
      verschil: 'WiFi module, smart features, design opties'
    }
  ];

  const prijsverschilFactoren = [
    {
      factor: 'Energie-efficiëntie',
      impact: 'Hoog',
      verschil: '€300 - €800',
      uitleg: 'A+++ modellen zijn duurder maar besparen €150-300/jaar op energiekosten'
    },
    {
      factor: 'Geluidsproductie',
      impact: 'Gemiddeld',
      verschil: '€200 - €500',
      uitleg: 'Ultra-stille modellen (18-22 dB) kosten meer dan standaard (28-35 dB)'
    },
    {
      factor: 'Smart functionaliteit',
      impact: 'Laag',
      verschil: '€100 - €300',
      uitleg: 'WiFi, app bediening, spraakbesturing verhogen de prijs'
    },
    {
      factor: 'Design en afwerking',
      impact: 'Laag',
      verschil: '€150 - €400',
      uitleg: 'Designer units met speciale afwerking zijn duurder'
    },
    {
      factor: 'Capaciteit (kW)',
      impact: 'Hoog',
      verschil: '€200 - €600',
      uitleg: 'Hogere capaciteit voor grotere ruimtes kost meer'
    },
    {
      factor: 'Merk reputatie',
      impact: 'Hoog',
      verschil: '€400 - €1.000',
      uitleg: 'Premium merken rekenen marge voor kwaliteit en service'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Prijzen Vergelijken 2024 - Budget vs Premium | StayCool Airco"
        description="Vergelijk airco prijzen van verschillende merken en segmenten. Ontdek waar je voor betaalt en welke airco het beste bij jouw budget past. Incl. totaaloverzicht."
        canonicalUrl="https://staycoolairco.nl/airco-kosten/noindex/airco-prijzen-vergelijken"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Airco Prijzen Vergelijken
            </h1>
          </div>
          <p className="text-xl text-blue-50 max-w-3xl">
            Budget, midden of premium? Ontdek de prijsverschillen tussen airco's
            en waar je precies voor betaalt. Maak een weloverwogen keuze.
          </p>
        </div>
      </section>

      {/* Snelle Prijs Indicatie */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Snelle Prijs Indicatie</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Budget Segment</h3>
              <div className="text-4xl font-bold mb-4 text-gray-800">€1.650 - €2.000</div>
              <p className="text-gray-600 mb-6">Single-split incl. installatie</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basis functionaliteit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">A+ energielabel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">2 jaar garantie</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-500">Geen smart features</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-500">Hoger geluidsniveau</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Meest gekozen
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-600">Midden Segment</h3>
              <div className="text-4xl font-bold mb-4 text-gray-800">€1.900 - €2.600</div>
              <p className="text-gray-600 mb-6">Single-split incl. installatie</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Goede prijs/kwaliteit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">A++ energielabel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">3 jaar garantie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">WiFi module beschikbaar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Stiller dan budget</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-purple-600">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Premium Segment</h3>
              <div className="text-4xl font-bold mb-4 text-gray-800">€2.400 - €3.200</div>
              <p className="text-gray-600 mb-6">Single-split incl. installatie</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Top kwaliteit & design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">A+++ energielabel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 jaar garantie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Volledige smart functionaliteit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fluisterstil (18-22 dB)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Uitgebreide Merkvergelijking */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Uitgebreide Merkvergelijking</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Merk</th>
                  <th className="px-6 py-4 text-left">Single-split</th>
                  <th className="px-6 py-4 text-left">Multi-split (2x)</th>
                  <th className="px-6 py-4 text-left">Energielabel</th>
                  <th className="px-6 py-4 text-left">Garantie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {merkVergelijking.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{item.merk}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{item.singlesplit}</td>
                    <td className="px-6 py-4 text-gray-700">{item.multisplit2}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        {item.energielabel}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{item.garantie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sterkte/Zwakte punten per merk */}
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {merkVergelijking.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 text-gray-900">{item.merk}</h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Sterke punten
                  </h4>
                  <ul className="space-y-1">
                    {item.sterktePunten.map((punt, i) => (
                      <li key={i} className="text-sm text-gray-700">• {punt}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-600 mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Let op
                  </h4>
                  <ul className="space-y-1">
                    {item.zwaktePunten.map((punt, i) => (
                      <li key={i} className="text-sm text-gray-700">• {punt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kostencomponenten Vergelijking */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Waar Betaal Je Voor?</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Een airco bestaat uit meerdere componenten. Hier zie je de prijsverschillen
            per onderdeel tussen budget, midden en premium segmenten.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-700">Component</th>
                  <th className="px-6 py-4 text-left text-gray-700">Budget</th>
                  <th className="px-6 py-4 text-left text-gray-700">Midden</th>
                  <th className="px-6 py-4 text-left text-gray-700">Premium</th>
                  <th className="px-6 py-4 text-left text-gray-700">Verschil door</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {kostencomponenten.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.component}</td>
                    <td className="px-6 py-4 text-gray-700">{item.budget}</td>
                    <td className="px-6 py-4 text-gray-700">{item.midden}</td>
                    <td className="px-6 py-4 text-gray-700">{item.premium}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.verschil}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50 font-bold">
                <tr>
                  <td className="px-6 py-4 text-gray-900">Totaal indicatie</td>
                  <td className="px-6 py-4 text-gray-900">€1.650 - €2.000</td>
                  <td className="px-6 py-4 text-gray-900">€1.900 - €2.600</td>
                  <td className="px-6 py-4 text-gray-900">€2.400 - €3.200</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Single-split compleet</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Prijsverschil Factoren */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Wat Bepaalt Het Prijsverschil?</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Verschillende factoren bepalen de prijs van een airco. Sommige hebben grote
            impact op de kosten, andere minder.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prijsverschilFactoren.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900">{item.factor}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.impact === 'Hoog' ? 'bg-red-100 text-red-700' :
                    item.impact === 'Gemiddeld' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {item.impact}
                  </span>
                </div>

                <div className="text-2xl font-bold text-green-600 mb-3">
                  {item.verschil}
                </div>

                <p className="text-sm text-gray-600">
                  {item.uitleg}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praktische Tips */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Praktische Tips Bij Vergelijken</h2>

          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-900">Kijk Verder Dan De Aanschafprijs</h3>
              <p className="text-blue-800">
                Een goedkope airco kan duurder zijn op lange termijn door hoger energieverbruik.
                Een A+++ model bespaart €150-300 per jaar vergeleken met A+. Na 5 jaar verdien je het verschil terug.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-900">Vraag Altijd Meerdere Offertes</h3>
              <p className="text-green-800">
                Prijzen kunnen sterk verschillen per installateur. Vraag minimaal 3 offertes aan
                en vergelijk niet alleen de prijs maar ook de garantievoorwaarden en service.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-900">Let Op "Actie Prijzen"</h3>
              <p className="text-purple-800">
                Extreem lage prijzen kunnen betekenen dat installatie- of materiaalkosten niet
                volledig zijn inbegrepen. Vraag altijd naar de totaalprijs incl. alles.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-orange-900">Denk Aan Onderhoudskosten</h3>
              <p className="text-orange-800">
                Premium merken hebben vaak lagere onderhoudskosten door betere kwaliteit.
                Budget modellen kunnen vaker onderhoud of reparaties nodig hebben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar Pillar Page */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Meer Informatie Over Airco Installatie</h2>
          <Link
            to="/kennisbank/airco-laten-installeren"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg border-l-4 border-green-600 block transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-green-600 mb-2">
                  → Complete Gids: Airco Laten Installeren
                </h3>
                <p className="text-gray-600 mb-3">
                  Alles wat je moet weten over airco installatie, van voorbereiding tot
                  onderhoud. Inclusief gedetailleerde kostenoverzichten en bespaartips.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Installatie proces</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Kostenoverzicht</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Subsidies</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Onderhoud</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hulp Nodig Bij Het Kiezen?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Onze adviseurs helpen je graag bij het vinden van de beste airco
            voor jouw situatie en budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31850606311"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors text-lg"
            >
              <Phone className="w-6 h-6" />
              085 - 060 63 11
            </a>
            <a
              href="/offerte"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors text-lg border-2 border-white"
            >
              <Calculator className="w-6 h-6" />
              Gratis Offerte
            </a>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            ✓ Vrijblijvend advies op maat  ✓ Scherpe prijzen  ✓ Binnen 24 uur reactie
          </p>
        </div>
      </section>
    </div>
  );
};

export default AircoPrijzenVergelijken;
