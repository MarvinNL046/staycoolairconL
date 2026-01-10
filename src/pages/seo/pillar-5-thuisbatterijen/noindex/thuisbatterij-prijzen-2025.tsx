import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Euro, ArrowRight, Phone, CheckCircle, TrendingUp, Calculator, Award } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijPrijzen2025 = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Prijzen 2025' }
  ];

  const prijzenAlphaESS = [
    {
      model: 'SMILE-B3',
      capaciteit: '5,7 kWh',
      prijs: 4545,
      prijsPerKwh: 797,
      geschiktVoor: 'Kleine huishoudens (1-2 personen)',
      inclusief: ['Batterij systeem', 'Monitoring app', '10 jaar garantie', 'Nederlandse handleiding'],
      besparing: '€650 per jaar',
      terugverdientijd: '7 jaar',
      populariteit: 'Basis'
    },
    {
      model: 'SMILE5',
      capaciteit: '11,4 kWh',
      prijs: 5785,
      prijsPerKwh: 507,
      geschiktVoor: 'Gemiddelde huishoudens (2-4 personen)',
      inclusief: ['Batterij systeem', 'Monitoring app', '10 jaar garantie', 'Nederlandse handleiding', 'Smart dispatch'],
      besparing: '€1.250 per jaar',
      terugverdientijd: '5 jaar',
      populariteit: 'Meest gekozen',
      highlight: true
    },
    {
      model: 'SMILE-T10',
      capaciteit: '19,5 - 39 kWh',
      prijs: 7750,
      prijsPerKwh: 397,
      geschiktVoor: 'Grote huishoudens + warmtepomp',
      inclusief: ['Batterij systeem', 'Monitoring app', '10 jaar garantie', 'Nederlandse handleiding', 'Smart dispatch', 'EPS noodstroom'],
      besparing: '€2.100+ per jaar',
      terugverdientijd: '4 jaar',
      populariteit: 'Premium'
    }
  ];

  const prijzenConcurrentie = [
    {
      merk: 'Tesla Powerwall 2',
      capaciteit: '13,5 kWh',
      prijs: 9500,
      prijsPerKwh: 704,
      installatie: 1500,
      totaal: 11000,
      verschil: '+€5.215 vs SMILE5'
    },
    {
      merk: 'LG Chem RESU 10H',
      capaciteit: '9,8 kWh',
      prijs: 7200,
      prijsPerKwh: 735,
      installatie: 1200,
      totaal: 8400,
      verschil: '+€2.615 vs SMILE5'
    },
    {
      merk: 'Huawei LUNA2000-10',
      capaciteit: '10 kWh',
      prijs: 6800,
      prijsPerKwh: 680,
      installatie: 1000,
      totaal: 7800,
      verschil: '+€2.015 vs SMILE5'
    },
    {
      merk: 'BYD Battery-Box Premium',
      capaciteit: '10,2 kWh',
      prijs: 6500,
      prijsPerKwh: 637,
      installatie: 1200,
      totaal: 7700,
      verschil: '+€1.915 vs SMILE5'
    },
    {
      merk: 'Sonnen Batterie 10',
      capaciteit: '11 kWh',
      prijs: 10500,
      prijsPerKwh: 955,
      installatie: 1800,
      totaal: 12300,
      verschil: '+€6.515 vs SMILE5'
    }
  ];

  const kostenOpbouw = [
    {
      categorie: 'Aanschaf',
      items: [
        { item: 'Batterij systeem (SMILE5)', kosten: 5785, eenmalig: true },
        { item: 'Installatie & montage', kosten: 800, eenmalig: true },
        { item: 'Elektrisch aansluitwerk', kosten: 350, eenmalig: true },
        { item: 'Keuringen & certificering', kosten: 150, eenmalig: true }
      ],
      totaal: 7085
    },
    {
      categorie: 'Subsidies & kortingen (2025)',
      items: [
        { item: 'ISDE subsidie thuisbatterij', kosten: -1100, eenmalig: true },
        { item: 'BTW teruggave (21%)', kosten: -1488, eenmalig: true },
        { item: 'Energieleverancier bonus', kosten: -200, eenmalig: true }
      ],
      totaal: -2788
    },
    {
      categorie: 'Jaarlijkse kosten',
      items: [
        { item: 'Onderhoud (minimaal)', kosten: 50, jaarlijks: true },
        { item: 'Verzekering (optioneel)', kosten: 75, jaarlijks: true },
        { item: 'Software updates', kosten: 0, jaarlijks: true }
      ],
      totaal: 125
    },
    {
      categorie: 'Baten per jaar',
      items: [
        { item: 'Besparing energiekosten', kosten: 1250, jaarlijks: true, positief: true },
        { item: 'Terugleverkorting vermeden', kosten: 350, jaarlijks: true, positief: true },
        { item: 'Extra zonnepanelen rendement', kosten: 180, jaarlijks: true, positief: true }
      ],
      totaal: 1780
    }
  ];

  const subsidieMogelijkheden2025 = [
    {
      naam: 'ISDE Thuisbatterij subsidie',
      bedrag: '€1.100',
      voorwaarden: ['Capaciteit 5-20 kWh', 'Professionele installatie', 'Gekoppeld aan zonnepanelen'],
      status: 'Beschikbaar tot medio 2025',
      aanvragen: 'Via RVO.nl na installatie'
    },
    {
      naam: 'BTW teruggave',
      bedrag: '21% van totale investering',
      voorwaarden: ['Woning ouder dan 2 jaar', 'Aanvraag binnen 3 maanden', 'Factuur op naam eigenaar'],
      status: 'Standaard regeling',
      aanvragen: 'Via Belastingdienst'
    },
    {
      naam: 'Energieleverancier acties',
      bedrag: '€100 - €500',
      voorwaarden: ['Afhankelijk van leverancier', 'Check actuele acties'],
      status: 'Wisselend per aanbieder',
      aanvragen: 'Direct bij leverancier'
    },
    {
      naam: 'Gemeentelijke regelingen',
      bedrag: 'Varieert per gemeente',
      voorwaarden: ['Amsterdam: tot €2.000', 'Rotterdam: tot €1.500', 'Utrecht: tot €1.000'],
      status: 'Check lokale website',
      aanvragen: 'Via gemeente'
    }
  ];

  const prijsontwikkeling = [
    { jaar: 2020, prijs: 12500, index: 100 },
    { jaar: 2021, prijs: 10800, index: 86 },
    { jaar: 2022, prijs: 9200, index: 74 },
    { jaar: 2023, prijs: 7500, index: 60 },
    { jaar: 2024, prijs: 6300, index: 50 },
    { jaar: 2025, prijs: 5785, index: 46 },
    { jaar: 2026, prijs: 5200, verwachting: true, index: 42 }
  ];

  const besparingScenarios = [
    {
      scenario: 'Klein huishouden (2.500 kWh/jaar)',
      systeem: 'SMILE-B3 (5,7 kWh)',
      investering: 4297,
      besparing: 650,
      terugverdientijd: 6.6,
      besparing10jaar: 6500,
      nettoRendement: 2203
    },
    {
      scenario: 'Gemiddeld huishouden (4.000 kWh/jaar)',
      systeem: 'SMILE5 (11,4 kWh)',
      investering: 4297,
      besparing: 1250,
      terugverdientijd: 3.4,
      besparing10jaar: 12500,
      nettoRendement: 8203,
      aanbevolen: true
    },
    {
      scenario: 'Groot huishouden + warmtepomp (8.000 kWh/jaar)',
      systeem: 'SMILE-T10 (19,5 kWh)',
      investering: 4962,
      besparing: 2100,
      terugverdientijd: 2.4,
      besparing10jaar: 21000,
      nettoRendement: 16038
    },
    {
      scenario: 'Zakelijk gebruik (15.000 kWh/jaar)',
      systeem: 'SMILE-T10 (39 kWh)',
      investering: 6200,
      besparing: 3800,
      terugverdientijd: 1.6,
      besparing10jaar: 38000,
      nettoRendement: 31800
    }
  ];

  const verstopteKosten = [
    {
      aspect: 'Installatie',
      verborgen: 'Vaak niet in basisprijs',
      alphaess: '€800 (transparant vermeld)',
      concurrentie: '€1.000 - €2.000 (vaak apart)',
      voordeel: '€200 - €1.200'
    },
    {
      aspect: 'Monitoring',
      verborgen: 'Abonnementskosten',
      alphaess: 'Gratis via AlphaCloud app',
      concurrentie: '€0 - €180/jaar',
      voordeel: '€0 - €1.800 in 10 jaar'
    },
    {
      aspect: 'Software updates',
      verborgen: 'Update kosten',
      alphaess: 'Altijd gratis OTA updates',
      concurrentie: 'Soms betaald (€100+)',
      voordeel: '€0 - €500 in 10 jaar'
    },
    {
      aspect: 'Garantie verlenging',
      verborgen: 'Extra kosten na 5 jaar',
      alphaess: '10 jaar standaard',
      concurrentie: '5 jaar + €500 voor extra 5 jaar',
      voordeel: '€500'
    },
    {
      aspect: 'Extra hardware',
      verborgen: 'Benodigde toevoegingen',
      alphaess: 'Complete pakket',
      concurrentie: 'Gateway, meters, etc. extra',
      voordeel: '€200 - €600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Thuisbatterij Prijzen 2025 | Actueel Overzicht & Vergelijking | StayCool"
        description="Prijsoverzicht thuisbatterijen 2025: AlphaESS vanaf €4.545. Subsidies, terugverdientijd en kosten-batenanalyse."
        canonicalUrl="https://staycoolairco.nl/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-prijzen-2025"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Euro className="w-5 h-5" />
              <span className="text-sm font-medium">Actueel prijsoverzicht 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thuisbatterij Prijzen 2025: Complete Kostencalculatie
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Transparant overzicht van alle kosten, subsidies en besparingen. Inclusief terugverdientijd en ROI berekeningen.
            </p>
          </div>
        </div>
      </section>

      {/* AlphaESS Prijzen */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AlphaESS prijzen 2025</h2>
          <p className="text-xl text-gray-600 mb-8">
            Transparante prijzen inclusief garantie en monitoring. Geen verborgen kosten.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {prijzenAlphaESS.map((product) => (
              <div
                key={product.model}
                className={`rounded-xl p-6 ${
                  product.highlight
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-4 border-blue-400'
                    : 'bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {product.highlight && (
                  <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                    MEEST GEKOZEN
                  </div>
                )}
                {!product.highlight && (
                  <div className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {product.populariteit}
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${product.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {product.model}
                </h3>
                <p className={`text-sm mb-4 ${product.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                  {product.capaciteit} capaciteit
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-4xl font-bold ${product.highlight ? 'text-white' : 'text-blue-600'}`}>
                      €{product.prijs.toLocaleString()}
                    </span>
                  </div>
                  <p className={`text-sm ${product.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                    €{product.prijsPerKwh} per kWh
                  </p>
                </div>

                <div className={`p-4 rounded-lg mb-4 ${product.highlight ? 'bg-blue-800/50' : 'bg-white'}`}>
                  <p className={`text-sm font-semibold mb-1 ${product.highlight ? 'text-white' : 'text-gray-900'}`}>
                    Geschikt voor:
                  </p>
                  <p className={`text-sm ${product.highlight ? 'text-blue-100' : 'text-gray-700'}`}>
                    {product.geschiktVoor}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {product.inclusief.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${product.highlight ? 'text-green-300' : 'text-green-600'}`} />
                      <span className={`text-sm ${product.highlight ? 'text-white' : 'text-gray-700'}`}>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={`p-4 rounded-lg mb-6 ${product.highlight ? 'bg-white/10' : 'bg-blue-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold ${product.highlight ? 'text-white' : 'text-gray-900'}`}>
                      Jaarlijkse besparing:
                    </span>
                    <span className={`text-lg font-bold ${product.highlight ? 'text-green-300' : 'text-green-600'}`}>
                      {product.besparing}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold ${product.highlight ? 'text-white' : 'text-gray-900'}`}>
                      Terugverdientijd:
                    </span>
                    <span className={`text-lg font-bold ${product.highlight ? 'text-blue-200' : 'text-blue-600'}`}>
                      {product.terugverdientijd}
                    </span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    product.highlight
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Offerte aanvragen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prijsvergelijking concurrentie */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prijsvergelijking met concurrentie</h2>
          <p className="text-xl text-gray-600 mb-8">
            AlphaESS SMILE5 (11,4 kWh) vergeleken met vergelijkbare systemen. Prijzen inclusief installatie.
          </p>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900">Merk & Model</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Capaciteit</th>
                    <th className="text-right p-4 font-semibold text-gray-900">Batterij</th>
                    <th className="text-right p-4 font-semibold text-gray-900">Installatie</th>
                    <th className="text-right p-4 font-semibold text-gray-900">Totaal</th>
                    <th className="text-right p-4 font-semibold text-gray-900">€/kWh</th>
                    <th className="text-right p-4 font-semibold text-gray-900">Verschil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-50 border-t-2 border-blue-500">
                    <td className="p-4 font-bold text-blue-900">AlphaESS SMILE5</td>
                    <td className="p-4 text-gray-900">11,4 kWh</td>
                    <td className="text-right p-4 font-semibold text-gray-900">€5.785</td>
                    <td className="text-right p-4 font-semibold text-gray-900">€800</td>
                    <td className="text-right p-4 font-bold text-blue-600">€6.585</td>
                    <td className="text-right p-4 font-semibold text-green-600">€577</td>
                    <td className="text-right p-4 font-bold text-green-600">Referentie</td>
                  </tr>
                  {prijzenConcurrentie.map((product, idx) => (
                    <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-900">{product.merk}</td>
                      <td className="p-4 text-gray-600">{product.capaciteit}</td>
                      <td className="text-right p-4 text-gray-600">€{product.prijs.toLocaleString()}</td>
                      <td className="text-right p-4 text-gray-600">€{product.installatie.toLocaleString()}</td>
                      <td className="text-right p-4 font-semibold text-gray-900">€{product.totaal.toLocaleString()}</td>
                      <td className="text-right p-4 text-gray-600">€{product.prijsPerKwh}</td>
                      <td className="text-right p-4 font-semibold text-red-600">{product.verschil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">AlphaESS: Beste prijs-kwaliteit verhouding</h3>
                <p className="text-gray-700">
                  Met €577 per kWh biedt AlphaESS SMILE5 de beste prijs-prestatie verhouding in Nederland.
                  Concurrenten zijn gemiddeld €2.800 duurder voor vergelijkbare capaciteit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete kostenopbouw */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete kostenopbouw (AlphaESS SMILE5)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {kostenOpbouw.map((categorie, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{categorie.categorie}</h3>
                <div className="space-y-3">
                  {categorie.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center justify-between">
                      <span className="text-gray-700">{item.item}</span>
                      <span className={`font-semibold ${item.positief ? 'text-green-600' : item.kosten < 0 ? 'text-green-600' : 'text-gray-900'}`}>
                        {item.kosten < 0 ? '' : item.positief ? '+' : ''}€{Math.abs(item.kosten).toLocaleString()}
                        {item.jaarlijks && <span className="text-sm text-gray-500">/jr</span>}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t-2 border-gray-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Totaal:</span>
                    <span className={`text-xl font-bold ${categorie.totaal < 0 ? 'text-green-600' : categorie.totaal > 1000 ? 'text-blue-600' : 'text-gray-900'}`}>
                      {categorie.totaal < 0 ? '-' : categorie.totaal > 1000 ? '' : ''}€{Math.abs(categorie.totaal).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Totale investering na subsidies:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Totale aanschafkosten:</p>
                <p className="text-3xl font-bold text-gray-900">€7.085</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Totale subsidies & kortingen:</p>
                <p className="text-3xl font-bold text-green-600">-€2.788</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Netto investering:</p>
                <p className="text-3xl font-bold text-blue-600">€4.297</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-gray-900">Jaarlijkse netto besparing:</span>
                <span className="text-2xl font-bold text-green-600">€1.655/jaar</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">Terugverdientijd:</span>
                <span className="text-2xl font-bold text-blue-600">2,6 jaar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidies 2025 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subsidies & kortingen 2025</h2>
          <p className="text-xl text-gray-600 mb-8">
            Maak optimaal gebruik van beschikbare regelingen en bespaar tot €2.800 op je investering.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {subsidieMogelijkheden2025.map((subsidie, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{subsidie.naam}</h3>
                  <span className="text-2xl font-bold text-green-600">{subsidie.bedrag}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Voorwaarden:</p>
                  <ul className="space-y-1">
                    {subsidie.voorwaarden.map((voorwaarde, vIdx) => (
                      <li key={vIdx} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {voorwaarde}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">{subsidie.status}</span>
                  <span className="text-sm font-semibold text-blue-600">{subsidie.aanvragen}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Besparingscenarios */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Besparingscenario's: wat levert het op?</h2>

          <div className="space-y-4">
            {besparingScenarios.map((scenario, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 ${
                  scenario.aanbevolen
                    ? 'bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-500'
                    : 'bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {scenario.aanbevolen && (
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                    AANBEVOLEN
                  </div>
                )}
                <div className="grid md:grid-cols-6 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{scenario.scenario}</h3>
                    <p className="text-sm text-gray-600">{scenario.systeem}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Investering</p>
                    <p className="text-lg font-bold text-gray-900">€{scenario.investering.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Per jaar</p>
                    <p className="text-lg font-bold text-green-600">€{scenario.besparing.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Terugverdientijd</p>
                    <p className="text-lg font-bold text-blue-600">{scenario.terugverdientijd} jaar</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Rendement 10 jaar</p>
                    <p className="text-lg font-bold text-green-600">+€{scenario.nettoRendement.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Rekenvoorbeeld op basis van:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Energietarief 2025: €0,35 per kWh (gemiddeld)</li>
                  <li>• Teruglevertarief: €0,06 per kWh (salderen vervalt)</li>
                  <li>• 70% zelfconsumptie met thuisbatterij (vs 30% zonder)</li>
                  <li>• Inclusief ISDE subsidie (€1.100) en BTW teruggave (21%)</li>
                  <li>• Energieprijzen stijgen gemiddeld 3% per jaar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verborgen kosten */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let op verborgen kosten bij concurrenten</h2>
          <p className="text-xl text-gray-600 mb-8">
            Bij AlphaESS krijg je alles transparant vooraf. Veel concurrenten rekenen extra kosten achteraf.
          </p>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900">Kostenpost</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Vaak verborgen</th>
                    <th className="text-left p-4 font-semibold text-blue-900 bg-blue-50">AlphaESS</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Concurrentie</th>
                    <th className="text-right p-4 font-semibold text-gray-900">Jouw voordeel</th>
                  </tr>
                </thead>
                <tbody>
                  {verstopteKosten.map((item, idx) => (
                    <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-900">{item.aspect}</td>
                      <td className="p-4 text-gray-600">{item.verborgen}</td>
                      <td className="p-4 text-blue-900 bg-blue-50 font-medium">{item.alphaess}</td>
                      <td className="p-4 text-gray-600">{item.concurrentie}</td>
                      <td className="text-right p-4 font-semibold text-green-600">{item.voordeel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900 mb-2">Totaal besparingspotentieel: €2.900 - €4.600</h3>
                <p className="text-gray-700">
                  Door transparante prijzen en geen verborgen kosten bespaar je met AlphaESS tot €4.600
                  vergeleken met sommige concurrenten over een periode van 10 jaar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prijsontwikkeling */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Prijsontwikkeling thuisbatterijen</h2>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200">
            <div className="grid md:grid-cols-7 gap-4 mb-6">
              {prijsontwikkeling.map((jaar, idx) => (
                <div key={idx} className={`text-center ${jaar.verwachting ? 'opacity-60' : ''}`}>
                  <div className="relative h-48 flex items-end justify-center mb-2">
                    <div
                      className={`w-full rounded-t-lg ${jaar.verwachting ? 'bg-gray-300' : 'bg-blue-600'}`}
                      style={{ height: `${jaar.index}%` }}
                    ></div>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{jaar.jaar}</p>
                  <p className="text-xs text-gray-600">€{jaar.prijs.toLocaleString()}</p>
                  {jaar.verwachting && <p className="text-xs text-gray-500 italic">Verwacht</p>}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span>Prijsdaling van 54% sinds 2020. Verwachting: nog 10% daling in 2026.</span>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-2">Is nu het juiste moment om te investeren?</h3>
              <p className="text-gray-700">
                <strong>Ja!</strong> Prijzen dalen nog licht, maar door de afbouw van salderingsregeling en stijgende energieprijzen
                is het rendement nú het hoogst. Elke maand wachten kost je €100+ aan gemiste besparingen.
                De terugverdientijd is nog nooit zo kort geweest: 2-5 jaar voor AlphaESS systemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links naar geïndexeerde pagina's */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer informatie over thuisbatterijen</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-kosten-overzicht"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-500"
            >
              <span className="font-semibold text-blue-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Complete kostengids
              </span>
              <p className="text-sm text-gray-600 mt-2">Alle kosten en besparingen</p>
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-alphaess-vs-concurrenten"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-500"
            >
              <span className="font-semibold text-blue-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                AlphaESS vergelijking
              </span>
              <p className="text-sm text-gray-600 mt-2">Waarom AlphaESS de beste keuze is</p>
            </Link>
            <Link
              to="/thuisbatterijen"
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-500"
            >
              <span className="font-semibold text-blue-600 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Alle producten
              </span>
              <p className="text-sm text-gray-600 mt-2">Bekijk ons complete assortiment</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ontvang een vrijblijvende prijsopgave op maat
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Inclusief berekening van subsidies, besparingen en terugverdientijd voor jouw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0858081555"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              085 808 1555
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors"
            >
              Offerte aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijPrijzen2025;
