import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';

export default function MilieuvriendelijkeKoelingTips() {
  return (
    <>
      <MetaTags
        title="15 Tips voor Milieuvriendelijke Koeling | StayCool Airco"
        description="Praktische tips om uw airconditioning milieuvriendelijker te gebruiken. Bespaar energie, verlaag kosten en verklein uw ecologische voetafdruk met slimme koeltechnieken."
        noIndex={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-8 md:py-12">

          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                15 Tips voor Milieuvriendelijke Koeling
              </h1>
              <p className="text-xl text-gray-600">
                Geniet van comfort met respect voor het milieu en uw portemonnee
              </p>
            </header>

            {/* Introduction */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Koelen Kan Ook Duurzaam
              </h2>
              <p className="text-gray-700 mb-4">
                Airconditioning hoeft niet slecht te zijn voor het milieu. Met de juiste technologie en slim gebruik
                kunt u genieten van verkoeling terwijl u uw energieverbruik en CO2-uitstoot minimaal houdt.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-gray-700 font-semibold">
                  💡 Wist u dat? Met deze tips kunt u tot 50% besparen op uw energiekosten en de milieu-impact
                  van uw airco drastisch verlagen.
                </p>
              </div>
            </section>

            {/* Tip 1-3: Temperature */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Temperatuurinstellingen
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Zet de Thermostaat op 24-25°C
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Elke graad lager betekent 7-10% meer energieverbruik. Een temperatuur van 24-25°C is comfortabel
                    én energiezuinig.
                  </p>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Besparing:</strong> €150-250 per jaar bij 1°C hoger instellen
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. Houd Maximaal 7°C Verschil met Buiten
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Te groot temperatuurverschil is ongezond, inefficiënt en verspilt energie. Bij 30°C buiten
                    is 23-24°C binnen ideaal.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. Gebruik de Timer Functie
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Programmeer uw airco om 30 minuten voor thuiskomst te starten. De ruimte is koel wanneer
                    u aankomt, zonder uren onnodig te draaien.
                  </p>
                  <div className="bg-purple-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Tip:</strong> Moderne airco's hebben WiFi-bediening voor nog meer controle onderweg
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tip 4-6: Maintenance */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Onderhoud & Efficiency
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    4. Reinig Filters Regelmatig
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Vuile filters blokkeren de luchtstroom en verhogen het energieverbruik met 15-30%.
                    Reinig filters elke 2-4 weken tijdens intensief gebruik.
                  </p>
                  <div className="bg-red-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Zo doet u het:</strong> Verwijder filter, stofzuig of spoel af met lauw water,
                      laat drogen, plaats terug
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    5. Jaarlijkse Professionele Onderhoudsbeurt
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Laat uw airco jaarlijks controleren door een monteur. Dit voorkomt storingen, verlengt
                    de levensduur en houdt het systeem efficiënt draaien.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                    <li>Controle koudemiddeldruk</li>
                    <li>Reiniging binnen- en buitenunit</li>
                    <li>Inspectie elektrische verbindingen</li>
                    <li>Condensafvoer controle</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    6. Houd Buitenunit Schoon en Vrij
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Verwijder bladeren, vuil en obstakels rondom de buitenunit. Zorg voor minimaal 50cm vrije ruimte
                    voor optimale luchtstroom en warmteafvoer.
                  </p>
                </div>
              </div>
            </section>

            {/* Tip 7-9: Smart Usage */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Slim en Bewust Gebruiken
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    7. Gebruik Eco of Economy Modus
                  </h3>
                  <p className="text-gray-700 mb-3">
                    De eco-modus optimaliseert het energieverbruik door temperatuur en ventilatorsnelheid
                    automatisch aan te passen. Dit bespaart 20-30% energie met minimaal comfort verlies.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    8. Schakel Uit Wanneer Niet Thuis
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Laat de airco niet de hele dag draaien als niemand thuis is. Een moderne inverter airco
                    koelt een ruimte snel als u terugkomt.
                  </p>
                  <div className="bg-teal-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Smartphone app:</strong> Schakel op afstand in 30 minuten voor thuiskomst
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    9. Gebruik Alleen in Bezette Ruimtes
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Sluit deuren van kamers met airco en koelt alleen ruimtes die gebruikt worden.
                    Geen zin om de hele woning te koelen als u alleen in de woonkamer zit.
                  </p>
                </div>
              </div>
            </section>

            {/* Tip 10-12: Passive Cooling */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Passieve Koeling & Isolatie
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    10. Sluit Gordijnen en Zonwering Overdag
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Houd zonlicht buiten tijdens hete dagen. Dit voorkomt opwarming en vermindert de werklast
                    van uw airco met 30-40%. Buitenzonwering werkt het beste.
                  </p>
                  <div className="bg-pink-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Extra tip:</strong> Lichte, reflecterende gordijnen werken beter dan donkere
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-rose-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    11. Ventileer 's Nachts Natuurlijk
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Open ramen en deuren 's nachts en vroeg in de ochtend om koele lucht binnen te laten.
                    Sluit alles af zodra het buiten warmer wordt dan binnen.
                  </p>
                </div>

                <div className="border-l-4 border-fuchsia-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    12. Verbeter Isolatie van Uw Woning
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Goede isolatie houdt warmte buiten in de zomer en binnen in de winter. Dit verlaagt
                    de koellast van uw airco aanzienlijk.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                    <li>Dakisolatie: tot 30% minder warmte-instroom</li>
                    <li>HR++ glas: betere warmtewering</li>
                    <li>Spouwmuurisolatie: stabielere binnentemperatuur</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Meer over <Link to="/kennisbank/energielabel-verbetering" className="text-blue-600 hover:underline">
                      energielabel verbetering
                    </Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Tip 13-15: Technology */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Technologie & Innovatie
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    13. Upgrade naar Inverter Technologie
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Oude aan/uit airco's verspillen energie. Inverter technologie past het vermogen geleidelijk aan
                    en bespaart tot 60% energie. De investering verdient zich in 3-5 jaar terug.
                  </p>
                  <div className="bg-emerald-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Kenmerken inverter:</strong> Stiller, stabieler, efficiënter, langere levensduur
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-lime-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    14. Kies voor R32 Koudemiddel
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Bij vervanging of nieuw systeem, kies voor R32 koudemiddel. Dit heeft 68% lagere Global Warming
                    Potential (GWP) dan het oudere R410A.
                  </p>
                  <p className="text-gray-700">
                    Lees meer over <Link to="/kennisbank/koudemiddel-r32" className="text-blue-600 hover:underline">
                      R32 koudemiddel en duurzaamheid
                    </Link>.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    15. Overweeg Zonnepanelen Combinatie
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Combineer uw airco met zonnepanelen. De zon schijnt het meest wanneer u koeling nodig heeft.
                    Uw airco draait op groene stroom die u zelf opwekt!
                  </p>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Ideale match:</strong> Hoogste zonne-opbrengst = hoogste koelbehoefte = optimaal gebruik eigen stroom
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Savings Calculator */}
            <section className="mb-12 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Potentiële Besparing
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Zonder Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Jaarverbruik:</span>
                      <span className="font-semibold">1200 kWh</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Energiekosten (€0.40/kWh):</span>
                      <span className="font-semibold">€480</span>
                    </li>
                    <li className="flex justify-between">
                      <span>CO2-uitstoot:</span>
                      <span className="font-semibold">480 kg</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-600 text-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">Met Deze Tips</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Jaarverbruik:</span>
                      <span className="font-semibold">600 kWh</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Energiekosten (€0.40/kWh):</span>
                      <span className="font-semibold">€240</span>
                    </li>
                    <li className="flex justify-between">
                      <span>CO2-uitstoot:</span>
                      <span className="font-semibold">240 kg</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-green-600">
                  💰 Besparing: €240 per jaar | 🌱 240 kg minder CO2
                </p>
              </div>
            </section>

            {/* Quick Reference */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Snelle Referentie
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Dagelijks</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Temperatuur op 24-25°C</li>
                    <li>✓ Gebruik eco modus</li>
                    <li>✓ Sluit gordijnen overdag</li>
                    <li>✓ Uit bij afwezigheid</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Wekelijks</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Check en reinig filters</li>
                    <li>✓ Controleer buitenunit</li>
                    <li>✓ Ventileer 's nachts</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Jaarlijks</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Professioneel onderhoud</li>
                    <li>✓ Koudemiddelcontrole</li>
                    <li>✓ Algehele inspectie</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Maak Uw Airco Nóg Duurzamer
              </h2>
              <p className="text-xl mb-8 text-green-50">
                Onze experts adviseren u over de meest energie-efficiënte airconditioning voor uw situatie
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg"
                >
                  Gratis Duurzaamheidsadvies
                </Link>
                <Link
                  to="/kennisbank/duurzame-verwarming"
                  className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition-colors"
                >
                  Lees Meer over Duurzaamheid
                </Link>
              </div>
              <p className="mt-6 text-green-100">
                🌱 Samen maken we Limburg groener
              </p>
            </section>

            {/* Related Links */}
            <section className="mt-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meer Duurzaamheidsinformatie</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/kennisbank/duurzame-verwarming" className="text-blue-600 hover:underline">
                  → Duurzame verwarming met warmtepomp
                </Link>
                <Link to="/kennisbank/koudemiddel-r32" className="text-blue-600 hover:underline">
                  → R32: het groene koudemiddel
                </Link>
                <Link to="/kennisbank/energielabel-verbetering" className="text-blue-600 hover:underline">
                  → Verbeter uw energielabel
                </Link>
                <Link to="/diensten/airco-onderhoud" className="text-blue-600 hover:underline">
                  → Onderhoud voor optimale efficiency
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
