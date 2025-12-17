import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function AircoModellenOverzicht2025() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Merken', path: '/airco/merken' },
    { label: 'Modellen Overzicht 2025', path: '/airco-merken/noindex/modellen-2025' }
  ];

  return (
    <>
      <Helmet>
        <title>Airco Modellen Overzicht 2025 - Nieuwste Modellen | StayCool</title>
        <meta name="description" content="Compleet overzicht van alle airco modellen 2025. Vergelijk specs, prijzen en features van Daikin, Mitsubishi, LG, Samsung en Tosot." />
      </Helmet>

      <MetaTags
        title="Airco Modellen Overzicht 2025 - Nieuwste Modellen"
        description="Compleet overzicht van alle airco modellen 2025. Vergelijk specs, prijzen en features van Daikin, Mitsubishi, LG, Samsung en Tosot."
        noIndex={true}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Breadcrumbs items={breadcrumbItems} />

          <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-6">
            Airco Modellen Overzicht 2025
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-8">
              Ontdek de nieuwste airco modellen van 2025. We hebben alle topmodellen voor je op een rij gezet met specs, prijzen en unieke features.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏆 Daikin Modellen 2025</h2>
            <div className="space-y-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Daikin Emura FTXJ-MW</h3>
                    <p className="text-gray-600">Premium design met zilverkleurig front</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">€2.495</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Energie-efficiëntie</p>
                    <p className="font-semibold">A+++ / A+++</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geluidsniveau</p>
                    <p className="font-semibold">19 dB (stilste mode)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SCOP / SEER</p>
                    <p className="font-semibold">5.15 / 8.74</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="font-semibold">2.5 kW - 7.1 kW</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Het vlaggenschip van Daikin. Topefficiëntie, fluisterstil en prachtig design. Inclusief WiFi, app-besturing en intelligente luchtverdeling.
                </p>
                <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline font-semibold">
                  Meer over Daikin →
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Daikin Perfera FTXM-R</h3>
                    <p className="text-gray-600">Betaalbare all-round airco</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">€1.795</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Energie-efficiëntie</p>
                    <p className="font-semibold">A+++ / A++</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geluidsniveau</p>
                    <p className="font-semibold">20 dB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SCOP / SEER</p>
                    <p className="font-semibold">5.10 / 8.65</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="font-semibold">2.0 kW - 5.0 kW</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Uitstekende prijs-kwaliteitverhouding. Alle essentiële features zoals WiFi, Coanda-effect en Flash Streamer luchtzuivering.
                </p>
                <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline font-semibold">
                  Meer over Daikin →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">🌟 Mitsubishi Modellen 2025</h2>
            <div className="space-y-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Mitsubishi MSZ-LN</h3>
                    <p className="text-gray-600">Premium model met luchtzuivering</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">€2.695</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Energie-efficiëntie</p>
                    <p className="font-semibold">A+++ / A+++</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geluidsniveau</p>
                    <p className="font-semibold">19 dB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SCOP / SEER</p>
                    <p className="font-semibold">5.00 / 9.50</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="font-semibold">2.5 kW - 6.0 kW</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Topmodel met Plasma Quad Plus luchtzuivering. Verwijdert virussen, bacteriën en fijnstof. Perfect voor mensen met allergieën.
                </p>
                <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline font-semibold">
                  Meer over Mitsubishi →
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Mitsubishi MSZ-AP</h3>
                    <p className="text-gray-600">Betrouwbare middenklasser</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">€1.895</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Energie-efficiëntie</p>
                    <p className="font-semibold">A++ / A++</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geluidsniveau</p>
                    <p className="font-semibold">21 dB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SCOP / SEER</p>
                    <p className="font-semibold">4.60 / 8.10</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="font-semibold">2.5 kW - 6.8 kW</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Solide keuze met goede specs. Inclusief 3D i-See sensor voor intelligente temperatuurregeling en WiFi-besturing.
                </p>
                <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline font-semibold">
                  Meer over Mitsubishi →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">📱 LG Modellen 2025</h2>
            <div className="space-y-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">LG Artcool Gallery</h3>
                    <p className="text-gray-600">Design airco met verwisselbare panelen</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">€2.195</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Energie-efficiëntie</p>
                    <p className="font-semibold">A++ / A++</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geluidsniveau</p>
                    <p className="font-semibold">20 dB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SCOP / SEER</p>
                    <p className="font-semibold">4.70 / 8.20</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="font-semibold">2.5 kW - 5.0 kW</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Unieke airco met kunst panelen. ThinQ app voor volledige controle, spraakbesturing en integratie met Google Home en Alexa.
                </p>
                <Link to="/airco/merken/lg" className="text-blue-600 hover:underline font-semibold">
                  Meer over LG →
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">LG Standard Plus</h3>
                    <p className="text-gray-600">Betaalbaar en betrouwbaar</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">€1.595</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Energie-efficiëntie</p>
                    <p className="font-semibold">A++ / A++</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geluidsniveau</p>
                    <p className="font-semibold">22 dB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SCOP / SEER</p>
                    <p className="font-semibold">4.60 / 7.90</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="font-semibold">2.5 kW - 7.0 kW</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Uitstekende prijs-kwaliteitverhouding. Alle moderne features zoals WiFi, Dual Inverter en Active Energy Control.
                </p>
                <Link to="/airco/merken/lg" className="text-blue-600 hover:underline font-semibold">
                  Meer over LG →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">💨 Samsung Modellen 2025</h2>
            <div className="space-y-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Samsung Wind-Free Elite</h3>
                    <p className="text-gray-600">Innovatieve tochtvrije koeling</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">€2.395</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Energie-efficiëntie</p>
                    <p className="font-semibold">A+++ / A++</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geluidsniveau</p>
                    <p className="font-semibold">21 dB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SCOP / SEER</p>
                    <p className="font-semibold">5.10 / 8.00</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="font-semibold">2.5 kW - 6.5 kW</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Unieke Wind-Free technologie voor koeling zonder tochtgevoel. SmartThings app, AI Auto Cooling en luchtzuivering.
                </p>
                <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline font-semibold">
                  Meer over Samsung →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 Tosot Modellen 2025</h2>
            <div className="space-y-6 mb-12">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Tosot Hansol Premium</h3>
                    <p className="text-gray-600">Beste prijs-kwaliteitverhouding</p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">€1.295</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Energie-efficiëntie</p>
                    <p className="font-semibold">A++ / A++</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Geluidsniveau</p>
                    <p className="font-semibold">24 dB</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SCOP / SEER</p>
                    <p className="font-semibold">4.50 / 7.50</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="font-semibold">2.6 kW - 5.3 kW</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Betaalbare airco met verrassend goede specs. WiFi, app-besturing en I-Feel functie voor optimaal comfort.
                </p>
                <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline font-semibold">
                  Meer over Tosot →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Hulp Nodig Bij Je Keuze?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700 mb-4">
                Overweldigd door alle keuzes? Onze experts helpen je graag het perfecte model te kiezen voor jouw situatie en budget.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Gratis Advies Aanvragen
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
              <h3 className="font-semibold text-lg mb-3">Ontdek Meer</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/airco/merken/daikin" className="text-blue-600 hover:underline">→ Alle Daikin Modellen</Link>
                <Link to="/airco/merken/mitsubishi" className="text-blue-600 hover:underline">→ Alle Mitsubishi Modellen</Link>
                <Link to="/airco/merken/lg" className="text-blue-600 hover:underline">→ Alle LG Modellen</Link>
                <Link to="/airco/merken/samsung" className="text-blue-600 hover:underline">→ Alle Samsung Modellen</Link>
                <Link to="/airco/merken/tosot" className="text-blue-600 hover:underline">→ Alle Tosot Modellen</Link>
                <Link to="/airco/merken" className="text-blue-600 hover:underline">→ Merken Overzicht</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
