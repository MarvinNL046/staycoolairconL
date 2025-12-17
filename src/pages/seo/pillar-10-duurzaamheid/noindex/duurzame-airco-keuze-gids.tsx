import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';

export default function DuurzameAircoKeuzeGids() {
  return (
    <>
      <MetaTags
        title="Duurzame Airco Keuze Gids | StayCool Airco"
        description="Ontdek hoe u de meest duurzame airconditioning kiest. Complete gids over energielabels, R32 koudemiddel, inverter technologie en milieuvriendelijke koeling."
        noIndex={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-8 md:py-12">

          <article className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Duurzame Airco Keuze Gids
              </h1>
              <p className="text-xl text-gray-600">
                Maak de juiste keuze voor een milieuvriendelijke en energiezuinige airconditioning
              </p>
            </header>

            {/* Introduction */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor een Duurzame Airco?
              </h2>
              <p className="text-gray-700 mb-4">
                Een duurzame airconditioning bespaart niet alleen op energiekosten, maar draagt ook bij aan een beter milieu.
                Met de juiste keuze kunt u uw CO2-uitstoot aanzienlijk verlagen en toch genieten van optimaal comfort.
              </p>
              <p className="text-gray-700">
                In deze gids helpen we u bij het maken van een weloverwogen keuze voor een milieuvriendelijke aircosysteem.
              </p>
            </section>

            {/* Energy Labels Section */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                1. Let op het Energielabel
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Het energielabel is de belangrijkste indicator voor de efficiëntie van uw airconditioning.
                  Kies altijd voor minimaal een A++ label, of nog beter: A+++.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-semibold text-green-900 mb-2">Energielabel Voordelen:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>A+++ airco's gebruiken tot 50% minder energie dan A+ modellen</li>
                    <li>Gemiddeld €200-400 besparing per jaar op energiekosten</li>
                    <li>Lagere CO2-uitstoot en kleinere ecologische voetafdruk</li>
                    <li>Hogere investering terugverdiend in 3-5 jaar</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Lees meer over <Link to="/kennisbank/energielabel-verbetering" className="text-blue-600 hover:underline">
                    energielabel verbetering
                  </Link> en ontdek hoe u uw woning energiezuiniger maakt.
                </p>
              </div>
            </section>

            {/* R32 Refrigerant Section */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                2. Kies voor R32 Koudemiddel
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Het type koudemiddel heeft grote impact op de milieuvriendelijkheid van uw airco.
                  R32 is momenteel het meest duurzame koudemiddel op de markt.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">Voordelen R32:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>68% lagere GWP dan R410A</li>
                      <li>Betere energie-efficiëntie</li>
                      <li>Lagere vul- en onderhoudkosten</li>
                      <li>Toekomstbestendig systeem</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-3">Milieuvoordelen:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Aanzienlijk lagere CO2-impact</li>
                      <li>Minder koudemiddel nodig</li>
                      <li>Gemakkelijker te recyclen</li>
                      <li>Voldoet aan F-gassen verordening</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  Ontdek alles over <Link to="/kennisbank/koudemiddel-r32" className="text-blue-600 hover:underline">
                    R32 koudemiddel
                  </Link> en waarom dit de toekomst is van duurzame klimaatbeheersing.
                </p>
              </div>
            </section>

            {/* Inverter Technology Section */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                3. Inverter Technologie is Essentieel
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Inverter technologie is onmisbaar voor een duurzame airco. Het zorgt voor continue temperatuurregeling
                  zonder constante aan/uit-cycli die energie verspillen.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Hoe Werkt Inverter?</h3>
                  <p className="text-gray-700 mb-4">
                    In plaats van constant aan en uit te schakelen, past een inverter airco het vermogen geleidelijk aan.
                    Dit resulteert in:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Tot 60% minder energieverbruik</li>
                    <li>Stabielere temperatuur (±0.5°C nauwkeurig)</li>
                    <li>Stiller werken door lagere compressor snelheid</li>
                    <li>Langere levensduur door minder slijtage</li>
                    <li>Sneller op gewenste temperatuur</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sizing Section */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                4. Juiste Dimensionering
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Een te groot of te klein systeem verspilt energie. De juiste capaciteit is cruciaal voor optimale duurzaamheid.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h3 className="font-semibold text-yellow-900 mb-2">Let Op:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Te kleine airco: draait constant op max vermogen = hoog verbruik</li>
                    <li>Te grote airco: korte cycli = inefficiënt en oncomfortabel</li>
                    <li>Juiste maat: optimaal rendement en laagste energiekosten</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Laat altijd een professionele capaciteitsberekening maken door een erkend installateur.
                </p>
              </div>
            </section>

            {/* Heat Pump Section */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                5. Overweeg een Warmtepomp Functie
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Moderne airco's kunnen ook verwarmen via warmtepomp technologie. Dit maakt uw systeem het hele jaar door duurzaam.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Voordelen Warmtepomp:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>4-5x efficiënter dan elektrische verwarming</li>
                      <li>Tot 75% minder energiekosten voor verwarming</li>
                      <li>Eén systeem voor koelen én verwarmen</li>
                      <li>Perfect voor tussenseizoenen</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Duurzaamheidswinst:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Lagere CO2-uitstoot</li>
                      <li>Minder afhankelijk van gas</li>
                      <li>Beter voor energielabel woning</li>
                      <li>Hogere subsidiekansen</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700">
                  Meer informatie over <Link to="/kennisbank/duurzame-verwarming" className="text-blue-600 hover:underline">
                    duurzame verwarming met airco
                  </Link>.
                </p>
              </div>
            </section>

            {/* Smart Features Section */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                6. Slimme Functies voor Extra Besparing
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Moderne airco's bieden slimme functies die het energieverbruik verder verlagen:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">WiFi Bediening</h3>
                      <p className="text-gray-700">Bestuur op afstand, voorkom onnodig draaien wanneer niemand thuis is</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Bewegingssensoren</h3>
                      <p className="text-gray-700">Detecteert aanwezigheid en past vermogen automatisch aan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Programmeerbare Timers</h3>
                      <p className="text-gray-700">Stel dagschema's in voor optimaal verbruik</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 mt-1">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Eco Modus</h3>
                      <p className="text-gray-700">Geoptimaliseerde instellingen voor minimaal verbruik</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Maintenance Section */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                7. Onderhoud voor Duurzame Prestaties
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Een goed onderhouden airco blijft efficiënt werken en verbruikt minder energie:
                </p>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Essentieel Onderhoud:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Filters elke 2-4 weken schoonmaken</li>
                    <li>Jaarlijkse professionele onderhoudsbeurt</li>
                    <li>Buitenunit vrijhouden van bladeren en vuil</li>
                    <li>Controleer regelmatig op koelmiddelverlies</li>
                  </ul>
                </div>
                <p className="text-gray-700 font-semibold">
                  Impact van Onderhoud: Een vuile filter kan het verbruik met 15-30% verhogen!
                </p>
              </div>
            </section>

            {/* Brands Section */}
            <section className="mb-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                8. Kies een Kwalitatief Merk
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Topmerken investeren in duurzaamheid en efficiëntie. Kies voor gerenommeerde fabrikanten:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Daikin</h3>
                    <p className="text-sm text-gray-700">Marktleider in energiezuinige technologie</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Mitsubishi</h3>
                    <p className="text-sm text-gray-700">Uitstekende SEER waardes en R32 systemen</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">Panasonic</h3>
                    <p className="text-sm text-gray-700">Innovatieve Nanoe-X en ECO AI technologie</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Checklist Section */}
            <section className="mb-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Duurzame Airco Checklist
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                  <label className="ml-3 text-gray-700">Energielabel minimaal A++, liefst A+++</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                  <label className="ml-3 text-gray-700">R32 koudemiddel voor lagere milieu-impact</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                  <label className="ml-3 text-gray-700">Inverter technologie voor energie-efficiëntie</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                  <label className="ml-3 text-gray-700">Juiste capaciteit door professionele berekening</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                  <label className="ml-3 text-gray-700">Warmtepomp functie voor verwarming</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                  <label className="ml-3 text-gray-700">Slimme functies (WiFi, sensoren, timers)</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                  <label className="ml-3 text-gray-700">Gerenommeerd merk met goede garantie</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                  <label className="ml-3 text-gray-700">Onderhoudscontract voor optimale prestaties</label>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advies op Maat voor Uw Duurzame Airco
              </h2>
              <p className="text-xl mb-8 text-blue-50">
                Onze experts helpen u de perfecte energiezuinige airconditioning te kiezen voor uw situatie
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Gratis Adviesgesprek
                </Link>
                <Link
                  to="/diensten/airco-installatie"
                  className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-colors"
                >
                  Onze Installatie Service
                </Link>
              </div>
              <p className="mt-6 text-blue-100">
                ⭐⭐⭐⭐⭐ Meer dan 500 tevreden klanten in Limburg
              </p>
            </section>

            {/* Related Links */}
            <section className="mt-12 bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde Informatie</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/kennisbank/duurzame-verwarming" className="text-blue-600 hover:underline">
                  → Duurzame verwarming met airco
                </Link>
                <Link to="/kennisbank/koudemiddel-r32" className="text-blue-600 hover:underline">
                  → Alles over R32 koudemiddel
                </Link>
                <Link to="/kennisbank/energielabel-verbetering" className="text-blue-600 hover:underline">
                  → Energielabel verbeteren
                </Link>
                <Link to="/diensten/airco-installatie" className="text-blue-600 hover:underline">
                  → Professionele installatie
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
