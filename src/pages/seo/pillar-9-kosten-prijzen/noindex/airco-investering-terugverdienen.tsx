import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Calculator, Phone, Award, DollarSign, Zap, CheckCircle, Clock, PiggyBank, Home } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoInvesteringTerugverdienen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Laten Installeren', path: '/kennisbank/airco-laten-installeren' },
    { label: 'Investering Terugverdienen' }
  ];

  const roiScenarios = [
    {
      scenario: 'Budget Airco (A+)',
      aanschaf: 1650,
      jaarBesparing: 180,
      jaarKosten: 120,
      nettoJaar: 60,
      terugverdientijd: '27 jaar',
      advies: 'Loont alleen bij sporadisch gebruik',
      kleur: 'red'
    },
    {
      scenario: 'Midden Segment (A++)',
      aanschaf: 2100,
      jaarBesparing: 320,
      jaarKosten: 150,
      nettoJaar: 170,
      terugverdientijd: '12 jaar',
      advies: 'Goede investering bij normaal gebruik',
      kleur: 'yellow'
    },
    {
      scenario: 'Premium (A+++) - Alleen Koelen',
      aanschaf: 2600,
      jaarBesparing: 400,
      jaarKosten: 100,
      nettoJaar: 300,
      terugverdientijd: '9 jaar',
      advies: 'Beste keuze bij intensief gebruik',
      kleur: 'green'
    },
    {
      scenario: 'Premium (A+++) - Ook Verwarmen',
      aanschaf: 2800,
      jaarBesparing: 750,
      jaarKosten: 180,
      nettoJaar: 570,
      terugverdientijd: '5 jaar',
      advies: 'Uitstekende investering!',
      kleur: 'green'
    }
  ];

  const besparingBronnen = [
    {
      bron: 'Vervangt Ventilator',
      zomer: '€80 - €120',
      jaar: '€80 - €120',
      uitleg: 'Ventilator op hoogste stand gebruikt 75W. Bij 8 uur/dag in 3 maanden zomer = €90 per jaar (€0,40/kWh)'
    },
    {
      bron: 'Minder CV-Gebruik',
      zomer: '€0',
      jaar: '€150 - €300',
      uitleg: 'Airco verwarmen in voor/najaar is 3-4x efficiënter dan CV. Scheelt €250/jaar bij 2 maanden gebruik'
    },
    {
      bron: 'Betere Slaap = Productiviteit',
      zomer: '€100 - €200',
      jaar: '€100 - €200',
      uitleg: 'Studies tonen: betere slaap door optimale temperatuur verhoogt productiviteit met 5-10%'
    },
    {
      bron: 'Voorkomt Zonwering Kosten',
      zomer: '€0',
      jaar: '€50 - €100',
      uitleg: 'Bespaart aanschaf dure buitenzonwering (€800-1200). Airco effectiever en multi-inzetbaar'
    },
    {
      bron: 'Lagere Vochtigheid = Minder Schimmel',
      zomer: '€50 - €100',
      jaar: '€50 - €100',
      uitleg: 'Voorkomt vochtschade en schimmelbestrijding kosten. Ontvochtigt automatisch tijdens koelen'
    },
    {
      bron: 'Waardestijging Woning',
      zomer: '€0',
      jaar: '€500 - €1.000',
      uitleg: 'Airco verhoogt woningwaarde met €2.000-4.000. Bij verkoop extra rendement op investering'
    }
  ];

  const gebruiksprofielen = [
    {
      profiel: 'Sporadisch (30 dagen/jaar)',
      beschrijving: 'Alleen op heetste zomerdagen',
      verbruik: '60 kWh',
      kosten: '€24',
      besparing: '€80',
      netto: '€56',
      terugverdientijd: '30+ jaar',
      advies: 'Overweeg goedkoper alternatief'
    },
    {
      profiel: 'Normaal (60 dagen/jaar)',
      beschrijving: 'Warme periode mei-september',
      verbruik: '180 kWh',
      kosten: '€72',
      besparing: '€250',
      netto: '€178',
      terugverdientijd: '12-15 jaar',
      advies: 'A++ model voldoende'
    },
    {
      profiel: 'Intensief (120 dagen/jaar)',
      beschrijving: 'Hele zomer + hittegolven',
      verbruik: '400 kWh',
      kosten: '€160',
      besparing: '€450',
      netto: '€290',
      terugverdientijd: '7-9 jaar',
      advies: 'A+++ sterk aangeraden'
    },
    {
      profiel: 'Jaar-rond (200 dagen/jaar)',
      beschrijving: 'Zomer koelen + voor/najaar verwarmen',
      verbruik: '800 kWh',
      kosten: '€320',
      besparing: '€900',
      netto: '€580',
      terugverdientijd: '4-5 jaar',
      advies: 'Uitstekende investering!'
    }
  ];

  const waardetoevoegingWoning = [
    {
      aspect: 'Direct Verkoopvoordeel',
      waarde: '€2.000 - €4.000',
      uitleg: 'Airco maakt woning aantrekkelijker. Kopers waarderen comfort en zijn bereid meer te betalen.'
    },
    {
      aspect: 'Energielabel Verbetering',
      waarde: '€1.000 - €2.000',
      uitleg: 'Warmtepomp airco kan energielabel verbeteren. Hoger label = hogere woningwaarde.'
    },
    {
      aspect: 'Snellere Verkoop',
      waarde: '€500 - €1.500',
      uitleg: 'Woningen met airco verkopen 15-25% sneller. Tijd = geld in onroerendgoedmarkt.'
    },
    {
      aspect: 'Huurpremie',
      waarde: '€50 - €100/maand',
      uitleg: 'Bij verhuur kun je €50-100/maand meer vragen. €600-1200/jaar extra inkomsten.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Investering Terugverdienen - ROI Berekening 2024 | StayCool"
        description="Wanneer verdien je een airco terug? Complete ROI analyse met praktijkvoorbeelden. Bereken energiebesparing, comfortwinst en waardestijging woning."
        canonicalUrl="https://staycoolairco.nl/airco-kosten/noindex/airco-investering-terugverdienen"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Airco Investering Terugverdienen
            </h1>
          </div>
          <p className="text-xl text-blue-50 max-w-3xl">
            Ontdek wanneer je airco zichzelf terugverdient. Complete ROI analyse
            met energiebesparing, comfortwinst en waardestijging van je woning.
          </p>
        </div>
      </section>

      {/* Snelle ROI Overzicht */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Terugverdientijd Per Scenario
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg border-t-4 ${
                  scenario.kleur === 'green' ? 'border-green-500' :
                  scenario.kleur === 'yellow' ? 'border-yellow-500' :
                  'border-red-500'
                }`}
              >
                <h3 className="font-bold text-lg mb-3 text-gray-900">
                  {scenario.scenario}
                </h3>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Aanschafkosten</div>
                    <div className="text-xl font-bold text-gray-900">
                      €{scenario.aanschaf.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-600">Per jaar</div>
                    <div className="text-lg">
                      <span className="text-green-600 font-semibold">+€{scenario.jaarBesparing}</span>
                      <span className="text-gray-400 mx-1">-</span>
                      <span className="text-red-600 font-semibold">€{scenario.jaarKosten}</span>
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      = €{scenario.nettoJaar} netto
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <div className="text-sm text-gray-600">Terugverdientijd</div>
                    <div className={`text-2xl font-bold ${
                      scenario.kleur === 'green' ? 'text-green-600' :
                      scenario.kleur === 'yellow' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {scenario.terugverdientijd}
                    </div>
                  </div>
                </div>

                <div className={`text-sm px-3 py-2 rounded ${
                  scenario.kleur === 'green' ? 'bg-green-50 text-green-700' :
                  scenario.kleur === 'yellow' ? 'bg-yellow-50 text-yellow-700' :
                  'bg-red-50 text-red-700'
                }`}>
                  {scenario.advies}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="font-bold text-lg mb-2 text-blue-900">
              💡 De Beste ROI: Warmtepomp Functie
            </h3>
            <p className="text-blue-800">
              Gebruik je airco ook voor verwarmen in voor- en najaar? Dan is de terugverdientijd
              maar 4-5 jaar! Warmtepomp verwarmen is 3-4x efficiënter dan CV, wat je €250-500
              per jaar bespaart op je energierekening.
            </p>
          </div>
        </div>
      </section>

      {/* Besparingsbronnen */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Waar Verdien Je Het Terug?
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Een airco levert besparing uit meerdere bronnen. De totale waarde gaat
            verder dan alleen energiebesparing.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Besparingsbron</th>
                  <th className="px-6 py-4 text-left">Zomerperiode</th>
                  <th className="px-6 py-4 text-left">Per Jaar</th>
                  <th className="px-6 py-4 text-left">Toelichting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {besparingBronnen.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.bron}</td>
                    <td className="px-6 py-4 text-gray-700">{item.zomer}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">{item.jaar}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.uitleg}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50 font-bold">
                <tr>
                  <td className="px-6 py-4 text-gray-900">Totaal mogelijk per jaar</td>
                  <td className="px-6 py-4 text-gray-900">€230 - €420</td>
                  <td className="px-6 py-4 text-green-600 text-lg">€930 - €1.820</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Alle voordelen gecombineerd</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Gebruiksprofielen */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Terugverdientijd Per Gebruiksprofiel
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Hoe intensiever je de airco gebruikt, hoe sneller deze zich terugverdient.
            Bereken welk profiel bij jou past.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {gebruiksprofielen.map((profiel, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{profiel.profiel}</h3>
                    <p className="text-sm text-gray-600">{profiel.beschrijving}</p>
                  </div>
                  <Clock className="w-8 h-8 text-blue-500 flex-shrink-0" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-600">Jaarverbruik</div>
                    <div className="text-lg font-bold text-gray-900">{profiel.verbruik}</div>
                    <div className="text-xs text-red-600">€{profiel.kosten} kosten</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Besparing</div>
                    <div className="text-lg font-bold text-green-600">{profiel.besparing}</div>
                    <div className="text-xs text-gray-900">€{profiel.netto} netto</div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Terugverdientijd</span>
                    <span className="text-xl font-bold text-blue-600">
                      {profiel.terugverdientijd}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded">
                    💡 {profiel.advies}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="font-bold text-lg mb-2 text-green-900">
              ✓ Bereken Je Eigen Gebruik
            </h3>
            <p className="text-green-800 mb-3">
              Schat in hoeveel dagen per jaar je de airco gebruikt:
            </p>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• <strong>30 dagen:</strong> Alleen bij extreme hitte (30°C+)</li>
              <li>• <strong>60 dagen:</strong> Warme periode mei-september (25°C+)</li>
              <li>• <strong>120 dagen:</strong> Hele zomer comfortabel houden (23°C+)</li>
              <li>• <strong>200 dagen:</strong> Jaar-rond voor koelen én verwarmen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waardestijging Woning */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Waardestijging Van Je Woning
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Een airco verhoogt niet alleen je wooncomfort, maar ook de waarde van je
            woning. Dit wordt vaak vergeten in ROI berekeningen.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {waardetoevoegingWoning.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{item.aspect}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.waarde}</div>
                    <p className="text-sm text-gray-600">{item.uitleg}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto border-t-4 border-green-500">
            <h3 className="font-bold text-xl mb-4 text-center text-gray-900">
              Totale Waardestijging Woning
            </h3>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">
                €3.500 - €8.500
              </div>
              <p className="text-gray-600">
                Gemiddelde waardestijging bij verkoop of verhuur van je woning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete ROI Berekening */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Complete ROI Berekening - Voorbeeld
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-6 text-center text-gray-900">
              Premium Airco (A+++) - Intensief Gebruik
            </h3>

            <div className="space-y-6">
              {/* Investering */}
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Investering</h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Aanschaf + installatie</span>
                  <span className="font-bold text-red-600">-€2.600</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Subsidie (ISDE + gemeente)</span>
                  <span className="font-bold text-green-600">+€450</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t mt-2">
                  <span className="font-bold text-gray-900">Netto investering</span>
                  <span className="font-bold text-gray-900">€2.150</span>
                </div>
              </div>

              {/* Jaarlijkse Besparingen */}
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Jaarlijkse Opbrengsten</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">• Vervangt ventilator</span>
                    <span className="text-green-600">+€100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">• Minder CV-gebruik</span>
                    <span className="text-green-600">+€250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">• Betere slaap/productiviteit</span>
                    <span className="text-green-600">+€150</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">• Voorkomt vochtschade</span>
                    <span className="text-green-600">+€75</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold text-gray-900">Totaal opbrengsten</span>
                    <span className="font-bold text-green-600">+€575</span>
                  </div>
                </div>
              </div>

              {/* Jaarlijkse Kosten */}
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Jaarlijkse Kosten</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">• Energieverbruik (400 kWh)</span>
                    <span className="text-red-600">-€160</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">• Onderhoud (€11/maand)</span>
                    <span className="text-red-600">-€132</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold text-gray-900">Totaal kosten</span>
                    <span className="font-bold text-red-600">-€292</span>
                  </div>
                </div>
              </div>

              {/* Netto Resultaat */}
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-gray-900">Netto besparing per jaar</span>
                  <span className="text-2xl font-bold text-green-600">+€283</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-bold text-gray-900">Terugverdientijd</span>
                  <span className="text-2xl font-bold text-blue-600">7,6 jaar</span>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Na 10 jaar totaal voordeel</span>
                    <span className="font-bold text-green-700">+€680</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Na 15 jaar totaal voordeel</span>
                    <span className="font-bold text-green-700">+€2.095</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="font-bold text-gray-900">Plus waardestijging woning</span>
                    <span className="text-xl font-bold text-blue-600">+€5.000</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-6 text-center">
              * Berekening gebaseerd op intensief gebruik (120 dagen koelen + 60 dagen verwarmen).
              Energieprijs €0,40/kWh. Individuele resultaten kunnen variëren.
            </p>
          </div>
        </div>
      </section>

      {/* Praktische Tips */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tips Voor Snellere ROI</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-6 h-6 text-green-600 flex-shrink-0" />
                <h3 className="font-bold text-lg text-gray-900">Gebruik Warmtepomp Functie</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Gebruik je airco ook voor verwarmen in voor- en najaar? Dit halveert je
                terugverdientijd door vervanging van dure CV-kosten.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-start gap-3 mb-3">
                <PiggyBank className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h3 className="font-bold text-lg text-gray-900">Claim Alle Subsidies</h3>
              </div>
              <p className="text-gray-600 text-sm">
                ISDE subsidie + gemeentelijke regelingen + BTW-verlaging kunnen samen
                €450-950 opleveren. Direct van je investering af.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <h3 className="font-bold text-lg text-gray-900">Optimaal Gebruik</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Houd 23-25°C aan en gebruik timer functie. Slimmer gebruik bespaart
                €100-200 per jaar zonder comfort in te leveren.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <div className="flex items-start gap-3 mb-3">
                <Award className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <h3 className="font-bold text-lg text-gray-900">Preventief Onderhoud</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Onderhoudscontract vanaf €11/maand voorkomt dure reparaties en houdt
                je airco efficiënt. Bespaart tot €250/jaar aan extra kosten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar Pillar Page */}
      <section className="py-12">
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
                  Alles over airco installatie, van voorbereiding tot onderhoud. Met gedetailleerde
                  kostenoverzichten, subsidie-informatie en praktische bespaartips.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Installatie proces</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Alle kosten</span>
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
            Bereken Je Persoonlijke ROI
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Benieuwd naar de terugverdientijd voor jouw situatie? Vraag een
            vrijblijvende berekening aan met subsidie-advies.
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
              Gratis ROI Berekening
            </a>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            ✓ Persoonlijk advies  ✓ Subsidie check  ✓ Binnen 24 uur reactie
          </p>
        </div>
      </section>
    </div>
  );
};

export default AircoInvesteringTerugverdienen;
