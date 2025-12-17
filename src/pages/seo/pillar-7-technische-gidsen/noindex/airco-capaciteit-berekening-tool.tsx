import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

export default function AircoCapaciteitBerekeningTool() {
  const [ruimteType, setRuimteType] = useState('woonkamer');
  const [oppervlakte, setOppervlakte] = useState(25);
  const [plafondhoogte, setPlafondhoogte] = useState(2.5);
  const [isolatie, setIsolatie] = useState('gemiddeld');
  const [zonnestraling, setZonnestraling] = useState('matig');
  const [aantalPersonen, setAantalPersonen] = useState(2);
  const [apparatuur, setApparatuur] = useState('normaal');

  const berekenCapaciteit = () => {
    // Basis berekening: oppervlakte * plafondhoogte * basis factor
    let basisFactor = 100; // W per m³

    // Ruimte type correctie
    const ruimteFactoren: { [key: string]: number } = {
      'woonkamer': 1.0,
      'slaapkamer': 0.9,
      'keuken': 1.2,
      'kantoor': 1.1,
      'zolder': 1.3,
      'serverruimte': 1.5
    };

    // Isolatie correctie
    const isolatieFactoren: { [key: string]: number } = {
      'slecht': 1.3,
      'gemiddeld': 1.0,
      'goed': 0.85,
      'uitstekend': 0.75
    };

    // Zonnestraling correctie
    const zonFactoren: { [key: string]: number } = {
      'weinig': 0.9,
      'matig': 1.0,
      'veel': 1.2,
      'zeer_veel': 1.4
    };

    // Apparatuur warmteproductie
    const apparatuurFactoren: { [key: string]: number } = {
      'weinig': 0,
      'normaal': 300,
      'veel': 600,
      'zeer_veel': 1000
    };

    const volume = oppervlakte * plafondhoogte;
    const basisVermogen = volume * basisFactor;
    const ruimteCorrectie = basisVermogen * ruimteFactoren[ruimteType];
    const isolatieCorrectie = ruimteCorrectie * isolatieFactoren[isolatie];
    const zonCorrectie = isolatieCorrectie * zonFactoren[zonnestraling];
    const personenWarmte = aantalPersonen * 100; // 100W per persoon
    const apparatuurWarmte = apparatuurFactoren[apparatuur];

    const totaalVermogenW = Math.round(zonCorrectie + personenWarmte + apparatuurWarmte);
    const totaalVermogenKW = (totaalVermogenW / 1000).toFixed(1);
    const totaalVermogenBTU = Math.round(totaalVermogenW * 3.412);

    return {
      watt: totaalVermogenW,
      kw: totaalVermogenKW,
      btu: totaalVermogenBTU
    };
  };

  const capaciteit = berekenCapaciteit();

  const getAanbeveling = () => {
    const kw = parseFloat(capaciteit.kw);
    if (kw < 2.5) return { model: '2.5 kW (9.000 BTU)', type: 'Kleine split unit' };
    if (kw < 3.5) return { model: '3.5 kW (12.000 BTU)', type: 'Standaard split unit' };
    if (kw < 5.0) return { model: '5.0 kW (18.000 BTU)', type: 'Grote split unit' };
    if (kw < 7.0) return { model: '7.0 kW (24.000 BTU)', type: 'Extra grote split unit' };
    return { model: 'Multi-split systeem', type: 'Meerdere units of VRV systeem' };
  };

  const aanbeveling = getAanbeveling();

  return (
    <>
      <MetaTags
        title="Airco Capaciteit Berekening Tool | Gratis BTU Calculator"
        description="Bereken eenvoudig het benodigde koelvermogen voor uw ruimte. Gratis BTU calculator met persoonlijke aanbevelingen voor de juiste airco capaciteit."
        noIndex={true}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumbs />

          <article className="max-w-6xl mx-auto">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Airco Capaciteit Berekening Tool
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Bereken in enkele stappen het exacte koelvermogen dat u nodig heeft voor optimaal comfort.
                Onze calculator houdt rekening met alle belangrijke factoren.
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Calculator Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Vul uw gegevens in
                </h2>

                {/* Ruimte Type */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type ruimte
                  </label>
                  <select
                    value={ruimteType}
                    onChange={(e) => setRuimteType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="woonkamer">Woonkamer</option>
                    <option value="slaapkamer">Slaapkamer</option>
                    <option value="keuken">Keuken</option>
                    <option value="kantoor">Kantoor</option>
                    <option value="zolder">Zolder</option>
                    <option value="serverruimte">Serverruimte</option>
                  </select>
                </div>

                {/* Oppervlakte */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Oppervlakte (m²): {oppervlakte} m²
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={oppervlakte}
                    onChange={(e) => setOppervlakte(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10 m²</span>
                    <span>100 m²</span>
                  </div>
                </div>

                {/* Plafondhoogte */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Plafondhoogte (m): {plafondhoogte} m
                  </label>
                  <input
                    type="range"
                    min="2.0"
                    max="4.0"
                    step="0.1"
                    value={plafondhoogte}
                    onChange={(e) => setPlafondhoogte(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>2.0 m</span>
                    <span>4.0 m</span>
                  </div>
                </div>

                {/* Isolatie */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Isolatie kwaliteit
                  </label>
                  <select
                    value={isolatie}
                    onChange={(e) => setIsolatie(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="slecht">Slecht (oud gebouw, geen isolatie)</option>
                    <option value="gemiddeld">Gemiddeld (standaard isolatie)</option>
                    <option value="goed">Goed (moderne isolatie)</option>
                    <option value="uitstekend">Uitstekend (passiefhuis)</option>
                  </select>
                </div>

                {/* Zonnestraling */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Zonnestraling
                  </label>
                  <select
                    value={zonnestraling}
                    onChange={(e) => setZonnestraling(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="weinig">Weinig (noordzijde, schaduw)</option>
                    <option value="matig">Matig (oost/westzijde)</option>
                    <option value="veel">Veel (zuidzijde)</option>
                    <option value="zeer_veel">Zeer veel (plat dak, serre)</option>
                  </select>
                </div>

                {/* Aantal Personen */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Aantal personen: {aantalPersonen}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={aantalPersonen}
                    onChange={(e) => setAantalPersonen(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>

                {/* Apparatuur */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Warmteproductie apparatuur
                  </label>
                  <select
                    value={apparatuur}
                    onChange={(e) => setApparatuur(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="weinig">Weinig (slaapkamer, geen apparaten)</option>
                    <option value="normaal">Normaal (TV, laptop)</option>
                    <option value="veel">Veel (meerdere computers, keukenapparatuur)</option>
                    <option value="zeer_veel">Zeer veel (serverruimte, professionele keuken)</option>
                  </select>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                {/* Benodigde Capaciteit */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6">
                    Benodigde Capaciteit
                  </h2>

                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="text-sm text-blue-100 mb-1">Kilowatt (kW)</div>
                      <div className="text-4xl font-bold">{capaciteit.kw} kW</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="text-sm text-blue-100 mb-1">British Thermal Unit (BTU)</div>
                      <div className="text-4xl font-bold">{capaciteit.btu.toLocaleString()} BTU</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="text-sm text-blue-100 mb-1">Watt</div>
                      <div className="text-3xl font-bold">{capaciteit.watt.toLocaleString()} W</div>
                    </div>
                  </div>
                </div>

                {/* Aanbeveling */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Onze Aanbeveling
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <div>
                        <div className="font-semibold text-gray-900">{aanbeveling.model}</div>
                        <div className="text-gray-600 text-sm">{aanbeveling.type}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Belangrijke Notitie */}
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
                  <div className="flex">
                    <span className="text-2xl mr-3">⚠️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Belangrijk</h4>
                      <p className="text-gray-700 text-sm">
                        Deze berekening is een indicatie. Voor een exacte bepaling adviseren wij
                        een gratis plaatsbezoek door onze gecertificeerde installateurs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/offerte"
                    className="block w-full bg-blue-600 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Vraag Gratis Offerte Aan
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full bg-white text-blue-600 text-center px-6 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Persoonlijk Advies
                  </Link>
                </div>
              </div>
            </div>

            {/* Uitgebreide Uitleg */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hoe Werkt de Berekening?
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Onze calculator gebruikt een geavanceerd algoritme dat rekening houdt met alle
                  belangrijke factoren die de koelbehoefte beïnvloeden.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Basiscapaciteit
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Volume × 100 W/m³ = Basisvermogen
                    </p>
                    <p className="text-gray-600 text-sm">
                      Het volume van de ruimte (oppervlakte × hoogte) vermenigvuldigd met
                      100 watt per kubieke meter als uitgangspunt.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Isolatie Correctie
                    </h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Slecht: +30% vermogen</li>
                      <li>• Gemiddeld: Standaard</li>
                      <li>• Goed: -15% vermogen</li>
                      <li>• Uitstekend: -25% vermogen</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Zonnestraling
                    </h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Weinig: -10% vermogen</li>
                      <li>• Matig: Standaard</li>
                      <li>• Veel: +20% vermogen</li>
                      <li>• Zeer veel: +40% vermogen</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Extra Warmtelast
                    </h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• 100W per persoon</li>
                      <li>• 300-1000W voor apparatuur</li>
                      <li>• Ruimte type correctie</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Vuistregel voor Snelle Schatting
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Voor een ruwe schatting: <strong>100-125 W per m²</strong> vloeroppervlak
                  </p>
                  <p className="text-gray-600 text-sm">
                    Voorbeeld: 30 m² woonkamer = 3.000-3.750 W = circa 3.5 kW (12.000 BTU)
                  </p>
                </div>
              </div>
            </section>

            {/* Praktische Tips */}
            <section className="mb-12 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Praktische Tips voor Capaciteitskeuze
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Liever Iets Groter
                  </h3>
                  <p className="text-gray-700">
                    Een airco die iets te groot is, werkt efficiënter dan een te kleine.
                    Dankzij inverter technologie past een grotere airco automatisch zijn
                    vermogen aan zonder extra energieverbruik.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Niet Te Klein
                  </h3>
                  <p className="text-gray-700">
                    Een te kleine airco moet constant op vol vermogen draaien, wat leidt tot
                    hoger energieverbruik, meer slijtage, en geen optimaal comfort.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Denk aan de Toekomst
                  </h3>
                  <p className="text-gray-700">
                    Met klimaatverandering worden zomers steeds warmer. Een iets grotere
                    capaciteit zorgt ervoor dat uw systeem ook over 5-10 jaar nog voldoende is.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Multi-Split voor Meerdere Ruimtes
                  </h3>
                  <p className="text-gray-700">
                    Voor koeling van meerdere ruimtes is een multi-split systeem vaak
                    efficiënter en kostenbesparend vergeleken met losse units.
                  </p>
                </div>
              </div>
            </section>

            {/* Kennisbank Links */}
            <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meer Informatie
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  to="/kennisbank/airco-capaciteit-berekenen"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Complete Capaciteit Gids
                  </h3>
                  <p className="text-gray-700">
                    Uitgebreide uitleg over capaciteitsberekening en BTU-waarden
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-installatie"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Installatie Proces
                  </h3>
                  <p className="text-gray-700">
                    Wat komt er kijken bij de installatie van een airco systeem
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-energieverbruik"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Energieverbruik
                  </h3>
                  <p className="text-gray-700">
                    Bereken de energiekosten van uw airconditioning
                  </p>
                </Link>

                <Link
                  to="/kennisbank/airco-merken-vergelijken"
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    Merken Vergelijken
                  </h3>
                  <p className="text-gray-700">
                    Ontdek welk airconditioner merk het beste bij u past
                  </p>
                </Link>
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Persoonlijk Advies Nodig?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Onze experts komen gratis bij u langs voor een nauwkeurige meting en advies op maat
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  Gratis Plaatsbezoek
                </Link>
                <Link
                  to="/offerte"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-block border-2 border-white"
                >
                  Offerte Aanvragen
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
