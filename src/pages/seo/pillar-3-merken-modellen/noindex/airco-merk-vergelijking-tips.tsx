import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function AircoMerkVergelijkingTips() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Merken', path: '/airco/merken' },
    { label: 'Vergelijkingstips', path: '/airco-merken/noindex/vergelijking-tips' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Merk Vergelijking Tips - Maak de Juiste Keuze | StayCool</title>
        <meta name="description" content="Expert tips voor het vergelijken van airco merken. Leer waar je op moet letten bij Daikin, Mitsubishi, LG, Samsung en Tosot." />
      </Helmet>

      <MetaTags
        title="Airco Merk Vergelijking Tips - Maak de Juiste Keuze"
        description="Expert tips voor het vergelijken van airco merken. Leer waar je op moet letten bij Daikin, Mitsubishi, LG, Samsung en Tosot."
        noIndex={true}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Breadcrumbs items={breadcrumbItems} />

          <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-6">
            Airco Merk Vergelijking Tips
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-8">
              Het vergelijken van airco merken is meer dan alleen prijzen bekijken. Ontdek de belangrijkste vergelijkingscriteria en leer waar échte experts op letten.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 De 10 Belangrijkste Vergelijkingscriteria</h2>

            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-3">1. Energie-Efficiëntie (30%)</h3>
                <p className="text-gray-700 mb-3">
                  De belangrijkste factor voor je energiekosten. Let op:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>SCOP waarde</strong> (verwarmen): hoger = zuiniger in de winter</li>
                  <li><strong>SEER waarde</strong> (koelen): hoger = zuiniger in de zomer</li>
                  <li><strong>Energielabel</strong>: A+++ is het zuinigst, maar kijk vooral naar SCOP/SEER</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded mt-3">
                  <p className="font-semibold mb-2">💡 Expert Tip:</p>
                  <p className="text-sm">
                    <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link> en <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi</Link> hebben de hoogste SCOP waarden (tot 5.15).
                    Dit bespaart je €100-200 per jaar aan stookkosten vergeleken met minder efficiënte merken.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold mb-3">2. Geluidsniveau (25%)</h3>
                <p className="text-gray-700 mb-3">
                  Belangrijk voor wooncomfort, vooral in slaapkamers.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>19-21 dB</strong>: Fluisterstil (premium modellen)</li>
                  <li><strong>22-24 dB</strong>: Zeer stil (middenklasse)</li>
                  <li><strong>25+ dB</strong>: Hoorbaar (budget modellen)</li>
                </ul>
                <div className="bg-green-50 p-4 rounded mt-3">
                  <p className="font-semibold mb-2">💡 Expert Tip:</p>
                  <p className="text-sm">
                    De stilste modellen zijn <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin Emura</Link> (19 dB) en <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi MSZ-LN</Link> (19 dB).
                    Perfect voor lichte slapers.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold mb-3">3. Build Quality & Levensduur (20%)</h3>
                <p className="text-gray-700 mb-3">
                  Hoe lang gaat je airco mee? Let op:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Materialen</strong>: Metaal &gt; Plastic</li>
                  <li><strong>Compressor</strong>: Eigen productie vs. inkoop</li>
                  <li><strong>Garantie</strong>: Langere garantie = meer vertrouwen</li>
                </ul>
                <div className="bg-purple-50 p-4 rounded mt-3">
                  <p className="font-semibold mb-2">💡 Expert Tip:</p>
                  <p className="text-sm">
                    <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link> produceert eigen compressoren en gaat 20+ jaar mee.
                    <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline">Tosot</Link> is goedkoper maar gaat gemiddeld 12-15 jaar mee.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-xl font-bold mb-3">4. Smart Features (10%)</h3>
                <p className="text-gray-700 mb-3">
                  Moderne functies voor gebruiksgemak:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>WiFi & App</strong>: Bediening op afstand</li>
                  <li><strong>Spraakbesturing</strong>: Google Home / Alexa</li>
                  <li><strong>Slim schema's</strong>: Automatische aan/uit</li>
                </ul>
                <div className="bg-orange-50 p-4 rounded mt-3">
                  <p className="font-semibold mb-2">💡 Expert Tip:</p>
                  <p className="text-sm">
                    <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">LG</Link> en <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline">Samsung</Link> hebben de beste apps en smart home integratie.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold mb-3">5. Service & Garantie (10%)</h3>
                <p className="text-gray-700 mb-3">
                  Wat als er iets kapot gaat?
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Garantie</strong>: 3-5 jaar standaard, tot 7 jaar mogelijk</li>
                  <li><strong>Servicenetwerk</strong>: Landelijke dekking?</li>
                  <li><strong>Onderdelen</strong>: Beschikbaarheid en prijs</li>
                </ul>
                <div className="bg-red-50 p-4 rounded mt-3">
                  <p className="font-semibold mb-2">💡 Expert Tip:</p>
                  <p className="text-sm">
                    <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link> heeft het beste servicenetwerk in Nederland. Onderdelen zijn altijd beschikbaar, ook na 15+ jaar.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-yellow-600 pl-6">
                <h3 className="text-xl font-bold mb-3">6. Design (5%)</h3>
                <p className="text-gray-700 mb-3">
                  Airco moet ook mooi zijn:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Kleur</strong>: Wit, zwart, zilver</li>
                  <li><strong>Vorm</strong>: Modern, klassiek, minimalistisch</li>
                  <li><strong>Display</strong>: Zichtbaar of verborgen</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded mt-3">
                  <p className="font-semibold mb-2">💡 Expert Tip:</p>
                  <p className="text-sm">
                    Mooiste designs: <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin Emura</Link> (zilver),
                    <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">LG Artcool Gallery</Link> (kunst panelen),
                    <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi MSZ-LN</Link> (zwart glas).
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Vergelijkingsmethode</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-lg mb-4">Stap-voor-Stap Plan</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold">Bepaal je budget</p>
                    <p className="text-sm text-gray-600">Budget €1.000-1.500? Kijk naar <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline">Tosot</Link></p>
                    <p className="text-sm text-gray-600">Budget €1.500-2.500? <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">LG</Link> of <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline">Samsung</Link></p>
                    <p className="text-sm text-gray-600">Budget €2.500+? <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link> of <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi</Link></p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold">Vergelijk energie-efficiëntie</p>
                    <p className="text-sm text-gray-600">SCOP &gt;5.0? Dan is het een top model voor verwarmen</p>
                    <p className="text-sm text-gray-600">SEER &gt;8.0? Dan is het zuinig in de zomer</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold">Check geluidsniveau</p>
                    <p className="text-sm text-gray-600">Slaapkamer? Kies &lt;21 dB</p>
                    <p className="text-sm text-gray-600">Woonkamer? 22-24 dB is prima</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold">Lees reviews</p>
                    <p className="text-sm text-gray-600">Let op: lange termijn ervaringen (5+ jaar gebruik)</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                  <div>
                    <p className="font-semibold">Vraag offerte aan</p>
                    <p className="text-sm text-gray-600">Vergelijk 2-3 merken bij betrouwbare installateur</p>
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">🚫 Veelgemaakte Fouten</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <h3 className="font-semibold mb-2">❌ Alleen op prijs letten</h3>
                <p className="text-sm text-gray-700">
                  Een goedkope airco kan duurder zijn op de lange termijn door hogere energiekosten en kortere levensduur.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <h3 className="font-semibold mb-2">❌ Energielabel negeren</h3>
                <p className="text-sm text-gray-700">
                  Een A++ airco kost je €150-250 per jaar meer aan stroom dan een A+++ model. Over 15 jaar is dat €2.250-3.750!
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <h3 className="font-semibold mb-2">❌ Verkeerde capaciteit kiezen</h3>
                <p className="text-sm text-gray-700">
                  Te kleine airco = permanent overbelast. Te grote airco = inefficiënt en hogere kosten. Vraag altijd professioneel advies.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <h3 className="font-semibold mb-2">❌ Service negeren</h3>
                <p className="text-sm text-gray-700">
                  Goedkope merken kunnen moeilijk te repareren zijn door gebrek aan onderdelen en servicenetwerk.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">✅ Slimme Keuze Checklist</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Budget bepaald op basis van totale kosten (aanschaf + 15 jaar energie)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>SCOP en SEER waarden vergeleken (niet alleen energielabel)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Geluidsniveau geschikt voor gebruikssituatie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Reviews gelezen van gebruikers met 5+ jaar ervaring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Garantie en servicenetwerk gecheckt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Capaciteit berekend door professional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Offertes van minimaal 2 installateurs vergeleken</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏆 Samenvatting Per Merk</h2>
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link>
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Beste voor:</strong> Wie het beste wil en lange termijn denkt
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Zwakke punten:</strong> Hogere aanschafprijs
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">Mitsubishi</Link>
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Beste voor:</strong> Stilte, luchtkwaliteit en betrouwbaarheid
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Zwakke punten:</strong> Premium prijspeil
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">LG</Link>
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Beste voor:</strong> Smart home fans en design liefhebbers
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Zwakke punten:</strong> Iets minder energie-efficiënt dan Daikin/Mitsubishi
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline">Samsung</Link>
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Beste voor:</strong> Innovatie en tochtvrije koeling
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Zwakke punten:</strong> Kleiner servicenetwerk in Nederland
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">
                  <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline">Tosot</Link>
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Beste voor:</strong> Budget-bewuste kopers
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Zwakke punten:</strong> Kortere levensduur, minder features
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="font-semibold text-lg mb-3">🎯 Hulp Nodig?</h3>
              <p className="text-gray-700 mb-4">
                Nog steeds twijfels welk merk het beste bij jou past? Onze experts hebben 15+ jaar ervaring en helpen je graag met een objectief advies.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Gratis Expert Advies
                </Link>
                <Link
                  to="/airco-merken/noindex/keuzehulp"
                  className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  Gebruik Keuzehulp
                </Link>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-3">Lees Meer</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">→ Daikin Airco Overzicht</Link>
                <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">→ Mitsubishi Airco Overzicht</Link>
                <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">→ LG Airco Overzicht</Link>
                <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline">→ Samsung Airco Overzicht</Link>
                <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline">→ Tosot Airco Overzicht</Link>
                <Link to="/airco-merken/noindex/modellen-2025" className="text-blue-600 hover:underline">→ Modellen Overzicht 2025</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
