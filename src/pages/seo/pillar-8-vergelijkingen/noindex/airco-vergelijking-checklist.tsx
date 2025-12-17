import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function AircoVergelijkingChecklist() {
  return (
    <>
      <MetaTags
        title="Airco Vergelijking Checklist: Alle Belangrijke Punten | StayCool"
        description="Download onze complete checklist voor het vergelijken van airco's. Vergelijk prijzen, specificaties, energielabels en meer met deze praktische gids."
        noIndex={true}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Airco Vergelijkingen', path: '/kennisbank/airco-vergelijking' },
          { label: 'Vergelijking Checklist' }
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Airco Vergelijking Checklist
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Vergelijk airco's als een professional met deze uitgebreide checklist. Alle belangrijke specificaties, kosten en criteria op een rij voor een gefundeerde keuze.
            </p>
          </div>

          {/* Checklist Overview */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Checklist Categorieën
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-xl mb-2">✓ Basisspecificaties</h3>
                <p className="text-sm">Type, vermogen, oppervlakte</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-xl mb-2">✓ Energie-efficiëntie</h3>
                <p className="text-sm">Labels, verbruik, kosten</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-xl mb-2">✓ Prestaties</h3>
                <p className="text-sm">Koelvermogen, SEER, geluid</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-xl mb-2">✓ Kosten</h3>
                <p className="text-sm">Aanschaf, installatie, gebruik</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-xl mb-2">✓ Functies</h3>
                <p className="text-sm">WiFi, timer, filters, modi</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-xl mb-2">✓ Installatie</h3>
                <p className="text-sm">Complexiteit, tijd, vereisten</p>
              </div>
            </div>
          </div>

          {/* Checklist Section 1: Basisspecificaties */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Basisspecificaties Checklist
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Type Airconditioning</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Split unit (wandmodel)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Mobiele airco</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Multi-split systeem</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Floor/ceiling model</span>
                  </label>
                </div>
                <Link to="/kennisbank/split-unit-vs-mobiele-airco" className="text-blue-600 hover:underline mt-2 inline-block">
                  → Vergelijk types in detail
                </Link>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Koelvermogen (BTU/kW)</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2"><strong>Ruimte oppervlakte:</strong> _____ m²</p>
                  <p className="text-gray-700 mb-2"><strong>Benodigde BTU:</strong> _____ BTU (ca. 100 BTU per m²)</p>
                  <p className="text-gray-700"><strong>Benodigde kW:</strong> _____ kW (1 kW = 3.412 BTU)</p>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">7.000 BTU (2,0 kW) - tot 20m²</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">9.000 BTU (2,5 kW) - tot 25m²</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">12.000 BTU (3,5 kW) - tot 35m²</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">18.000 BTU (5,0 kW) - tot 50m²</span>
                  </label>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Verwarmingsfunctie</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Alleen koelen</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Koelen + verwarmen (warmtepomp)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Verwarmingsvermogen: _____ kW</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Section 2: Energie-efficiëntie */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Energie-efficiëntie Checklist
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Energielabel Koelen</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">A+++ (meest efficiënt)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">A++</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">A+</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">A of lager (niet aanbevolen)</span>
                  </label>
                </div>
                <Link to="/kennisbank/energielabel-airco" className="text-green-600 hover:underline mt-2 inline-block">
                  → Lees meer over energielabels
                </Link>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SEER Waarde (Seizoensgebonden Efficiëntie)</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2">Hoe hoger de SEER, hoe zuiniger de airco</p>
                  <p className="text-gray-700"><strong>SEER waarde:</strong> _____ (minimum 6.0 aanbevolen)</p>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">SEER 8.5+ (A+++) - Uitstekend</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">SEER 6.1-8.5 (A++) - Zeer goed</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">SEER 5.6-6.1 (A+) - Goed</span>
                  </label>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inverter Technologie</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Full Inverter (variabel toerental)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">On/Off systeem (minder efficiënt)</span>
                  </label>
                </div>
                <Link to="/kennisbank/inverter-vs-on-off-airco" className="text-orange-600 hover:underline mt-2 inline-block">
                  → Vergelijk inverter vs on/off
                </Link>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Geschatte Energiekosten</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Verbruik per uur:</strong> _____ kWh</p>
                  <p className="text-gray-700 mb-2"><strong>Gebruik per jaar:</strong> _____ uur</p>
                  <p className="text-gray-700 mb-2"><strong>Stroomprijs:</strong> €_____ per kWh (gem. €0.40)</p>
                  <p className="text-gray-700 font-semibold"><strong>Totale kosten per jaar:</strong> €_____</p>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Section 3: Prestaties & Comfort */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Prestaties & Comfort Checklist
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Geluidsniveau</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-3">
                  <p className="text-gray-700 mb-2"><strong>Binnenunit:</strong> _____ dB</p>
                  <p className="text-gray-700"><strong>Buitenunit:</strong> _____ dB</p>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">19-25 dB (fluisterstil - ideaal voor slaapkamer)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">25-35 dB (stil - geschikt voor woonkamer)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">35-50 dB (normaal - acceptabel voor kantoor)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">50+ dB (luidruchtig - vermijd voor woonruimtes)</span>
                  </label>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Luchtstroom & Verdeling</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Automatische luchtstroomregeling</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Verstelbare lamellen (horizontaal/verticaal)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">3D luchtstroom technologie</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Anti-directe luchtstroom (geen tocht)</span>
                  </label>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Filtersysteem</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Stoffilter (basis)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">PM2.5 filter (fijnstof)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">HEPA filter (allergie vriendelijk)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Actief koolfilter (geur)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Zelfreinigende functie</span>
                  </label>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Temperatuurcontrole</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Nauwkeurigheid: ±0.5°C (excellent)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Nauwkeurigheid: ±1°C (goed)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Nauwkeurigheid: ±2°C (basis)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Section 4: Kosten */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. Kosten Vergelijking Checklist
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Totale Eigendomskosten (TCO)</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Aanschafkosten</label>
                    <input type="text" placeholder="€_____" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Installatiekosten</label>
                    <input type="text" placeholder="€_____" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Energiekosten per jaar</label>
                    <input type="text" placeholder="€_____" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Onderhoudskosten per jaar</label>
                    <input type="text" placeholder="€_____" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Verwachte levensduur</label>
                    <input type="text" placeholder="_____ jaar" className="w-full p-3 border border-gray-300 rounded-lg" />
                  </div>

                  <div className="pt-4 border-t-2 border-gray-300">
                    <label className="block text-gray-900 font-bold text-lg mb-2">Totaal over 10 jaar</label>
                    <input type="text" placeholder="€_____" className="w-full p-3 border-2 border-blue-500 rounded-lg font-semibold" />
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Garantie & Service</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Fabrieksgarantie: _____ jaar</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Installatiegarantie: _____ jaar</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Gratis onderhoudsbeurt(en): _____</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">24/7 Storingsdienst beschikbaar</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Section 5: Smart Functies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Smart Functies & Bediening Checklist
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Connectiviteit</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">WiFi module ingebouwd</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Smartphone app (iOS/Android)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Google Home compatible</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Amazon Alexa compatible</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Apple HomeKit support</span>
                  </label>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Programmering & Automatisering</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">24-uurs timer</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Weekschema programmeerbaar</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Follow me functie (temperatuursensor in afstandsbediening)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Automatische aan/uit bij aanwezigheidsdetectie</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Slaapstand/stille modus</span>
                  </label>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Extra Functies</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Turbo/Powerful mode (snel koelen)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Eco-modus (energiebesparing)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Dry mode (ontvochtiging)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Ventilator modus (alleen luchtcirculatie)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Display uit-functie (nachtmodus)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Section 6: Installatie */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              6. Installatie & Montage Checklist
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Installatievereisten</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Professionele installatie vereist</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Geschatte installatietijd: _____ uur</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Boren door gevel nodig</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">VvE toestemming nodig (appartement)</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Elektrische voorzieningen voldoende</span>
                  </label>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Plaatsingsopties</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Wandmontage mogelijk</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Minimale hoogte vereist: _____ cm</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Afstand tot plafond minimaal: _____ cm</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Buitenunit plaatsing gecontroleerd</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Final Score/Summary */}
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Vergelijkingsscore
            </h2>
            <p className="text-xl mb-6">
              Tel de afgevinkte items per categorie om verschillende airco's te vergelijken:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Airco Model 1</h3>
                <p className="text-sm">Totaal punten: _____</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Airco Model 2</h3>
                <p className="text-sm">Totaal punten: _____</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Airco Model 3</h3>
                <p className="text-sm">Totaal punten: _____</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Hulp Nodig Bij Het Vergelijken?
            </h2>
            <p className="text-xl mb-6 leading-relaxed">
              Onze experts helpen u graag bij het invullen van deze checklist en het vergelijken van verschillende airco modellen op basis van uw specifieke wensen en budget.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Persoonlijk adviesgesprek met productspecialist</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Onafhankelijke vergelijking van meerdere merken</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Berekening totale eigendomskosten per model</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <span>Gratis offerte op maat binnen 24 uur</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Vraag Gratis Advies Aan
            </Link>
          </div>

          {/* Extra Resources */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nuttige Vergelijkingsgidsen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/kennisbank/split-unit-vs-mobiele-airco"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Split vs Mobiele Airco</h3>
                <p className="text-gray-700 text-sm">Complete vergelijking van beide systemen</p>
              </Link>
              <Link
                to="/kennisbank/mono-split-vs-multi-split"
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Mono vs Multi-Split</h3>
                <p className="text-gray-700 text-sm">Welk split systeem past bij u?</p>
              </Link>
              <Link
                to="/kennisbank/inverter-vs-on-off-airco"
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Inverter vs On/Off</h3>
                <p className="text-gray-700 text-sm">Technologie vergelijking</p>
              </Link>
              <Link
                to="/kennisbank/energielabel-airco"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Energielabels</h3>
                <p className="text-gray-700 text-sm">A+++ vs A++ uitgelegd</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
