import React, { useState } from 'react';
import { Calculator, Home, Sun, Users, Thermometer, Wind, AlertCircle, Info, ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CapacityCalculator() {
  // Input states
  const [kamerLengte, setKamerLengte] = useState<string>('5');
  const [kamerBreedte, setKamerBreedte] = useState<string>('4');
  const [kamerHoogte, setKamerHoogte] = useState<string>('2.6');
  const [aantalPersonen, setAantalPersonen] = useState<string>('2');
  const [zonlicht, setZonlicht] = useState<'weinig' | 'gemiddeld' | 'veel'>('gemiddeld');
  const [isolatie, setIsolatie] = useState<'slecht' | 'gemiddeld' | 'goed'>('gemiddeld');
  
  // Advanced inputs
  const [ruimteType, setRuimteType] = useState<string>('woonkamer');
  const [warmtebronnen, setWarmtebronnen] = useState<boolean>(false);
  const [aantalComputers, setAantalComputers] = useState<string>('1');
  const [keukenApparatuur, setKeukenApparatuur] = useState<boolean>(false);
  const [glasoppervlak, setGlasoppervlak] = useState<string>('30');
  const [gewensteFunctie, setGewensteFunctie] = useState<'koelen' | 'beiden'>('beiden');
  
  // Accordion states
  const [openSections, setOpenSections] = useState<string[]>(['basis']);
  
  // Toggle accordion sections
  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };
  
  // Bereken kamergrootte
  const kamerGrootte = parseFloat(kamerLengte || '0') * parseFloat(kamerBreedte || '0');
  const kamerVolume = kamerGrootte * parseFloat(kamerHoogte || '2.6');
  
  // Basis capaciteit berekening (100W per m² als uitgangspunt)
  let basisCapaciteit = kamerGrootte * 100;
  
  // Aanpassingen voor zonlicht
  const zonlichtFactor = {
    weinig: 0.9,
    gemiddeld: 1.0,
    veel: 1.2
  };
  basisCapaciteit *= zonlichtFactor[zonlicht];
  
  // Aanpassingen voor isolatie
  const isolatieFactor = {
    slecht: 1.3,
    gemiddeld: 1.0,
    goed: 0.85
  };
  basisCapaciteit *= isolatieFactor[isolatie];
  
  // Extra capaciteit voor personen (100W per persoon na de eerste)
  const extraPersonen = Math.max(0, parseInt(aantalPersonen || '0') - 1);
  basisCapaciteit += extraPersonen * 100;
  
  // Extra capaciteit voor warmtebronnen
  if (warmtebronnen) {
    const computers = parseInt(aantalComputers || '0') * 150;
    basisCapaciteit += computers;
    if (keukenApparatuur) {
      basisCapaciteit += 500; // Keukenapparatuur
    }
  }
  
  // Aanpassing voor glasoppervlak
  const glasPercentage = parseFloat(glasoppervlak || '30') / 100;
  if (glasPercentage > 0.3) {
    basisCapaciteit *= (1 + (glasPercentage - 0.3) * 0.5);
  }
  
  // Aanpassing voor plafondhoogte
  if (parseFloat(kamerHoogte || '2.6') > 3) {
    basisCapaciteit *= 1.1;
  }
  
  // Verwarmingscapaciteit (meestal 10-20% hoger dan koelcapaciteit)
  const verwarmingsCapaciteit = basisCapaciteit * 1.15;
  
  // Converteer naar kW en rond af
  const koelCapaciteitKW = Math.round(basisCapaciteit / 100) / 10;
  const verwarmCapaciteitKW = Math.round(verwarmingsCapaciteit / 100) / 10;
  
  // Aanbevolen modellen op basis van capaciteit
  const getAanbevolenModellen = () => {
    const capaciteit = koelCapaciteitKW;
    const modellen = [];
    
    if (capaciteit <= 2.5) {
      modellen.push({
        naam: 'Daikin Perfera 25',
        koelvermogen: '2.5 kW',
        verwarmvermogen: '3.2 kW',
        energielabel: 'A+++',
        prijs: '€1.795',
        kenmerken: ['Fluisterstil: 19 dB(A)', '2-zone sensor', 'Luchtzuivering']
      });
      modellen.push({
        naam: 'Tosot Clivia 25',
        koelvermogen: '2.5 kW',
        verwarmvermogen: '2.8 kW',
        energielabel: 'A++',
        prijs: '€895',
        kenmerken: ['Stil: 22 dB(A)', 'WiFi standaard', 'Goede prijs-kwaliteit']
      });
    } else if (capaciteit <= 3.5) {
      modellen.push({
        naam: 'Daikin Stylish 35',
        koelvermogen: '3.5 kW',
        verwarmvermogen: '4.0 kW',
        energielabel: 'A+++',
        prijs: '€1.995',
        kenmerken: ['Design model', 'Coanda effect', 'WiFi standaard']
      });
      modellen.push({
        naam: 'Mitsubishi SRK35ZS-W',
        koelvermogen: '3.5 kW',
        verwarmvermogen: '4.0 kW',
        energielabel: 'A+++',
        prijs: '€1.595',
        kenmerken: ['Plasma filter', '3D luchtstroom', 'Weekprogramma']
      });
    } else if (capaciteit <= 5.0) {
      modellen.push({
        naam: 'Daikin Perfera 50',
        koelvermogen: '5.0 kW',
        verwarmvermogen: '5.8 kW',
        energielabel: 'A+++',
        prijs: '€2.495',
        kenmerken: ['Krachtig model', '3D luchtstroom', 'Zelfreinigend']
      });
      modellen.push({
        naam: 'LG Deluxe 50',
        koelvermogen: '5.0 kW',
        verwarmvermogen: '5.8 kW',
        energielabel: 'A++',
        prijs: '€1.795',
        kenmerken: ['10 jaar garantie', 'Dual inverter', 'ThinQ app']
      });
    } else {
      modellen.push({
        naam: 'Daikin Perfera 71',
        koelvermogen: '7.1 kW',
        verwarmvermogen: '8.2 kW',
        energielabel: 'A++',
        prijs: '€3.295',
        kenmerken: ['Voor grote ruimtes', 'Flash Streamer', '2 zone regeling']
      });
      modellen.push({
        naam: 'Tosot Clivia 70',
        koelvermogen: '7.0 kW',
        verwarmvermogen: '8.0 kW',
        energielabel: 'A++',
        prijs: '€1.895',
        kenmerken: ['Krachtig & betaalbaar', 'I Feel functie', 'Turbo modus']
      });
    }
    
    return modellen;
  };
  
  const aanbevolenModellen = getAanbevolenModellen();

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Airco Capaciteit Calculator - Bereken de Juiste Capaciteit | StayCool Airco"
        description="Bereken gratis welke airco capaciteit u nodig heeft. Ontvang direct advies en geschikte modellen voor uw ruimte. Professioneel advies van StayCool Airco."
        keywords="airco capaciteit calculator, airco vermogen berekenen, welke airco heb ik nodig, airco calculator"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Capaciteit Calculator' }
          ]} className="text-white/70 mb-4" />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Airco Capaciteit Calculator
            </h1>
            <p className="text-xl text-sky-50 mb-8">
              Bereken in 2 minuten welke airco capaciteit u nodig heeft voor optimaal comfort
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calculator className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Nauwkeurige berekening</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Wind className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Directe modelaanbeveling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Info className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Professioneel advies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Input Section */}
              <div className="flex-1">
                <div className="space-y-6">
                  {/* Basis gegevens */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => toggleSection('basis')}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="flex items-center gap-2 font-semibold">
                        <Home className="h-5 w-5 text-sky-500" /> 
                        Basis gegevens
                      </span>
                      {openSections.includes('basis') ? (
                        <ChevronUp className="h-5 w-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600" />
                      )}
                    </button>
                    
                    {openSections.includes('basis') && (
                      <div className="p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="lengte" className="block text-sm font-medium text-gray-700 mb-2">
                              Lengte (meter)
                            </label>
                            <input
                              type="number"
                              id="lengte"
                              value={kamerLengte}
                              onChange={(e) => setKamerLengte(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                              min="1"
                              max="20"
                              step="0.5"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="breedte" className="block text-sm font-medium text-gray-700 mb-2">
                              Breedte (meter)
                            </label>
                            <input
                              type="number"
                              id="breedte"
                              value={kamerBreedte}
                              onChange={(e) => setKamerBreedte(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                              min="1"
                              max="20"
                              step="0.5"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="hoogte" className="block text-sm font-medium text-gray-700 mb-2">
                              Hoogte (meter)
                            </label>
                            <input
                              type="number"
                              id="hoogte"
                              value={kamerHoogte}
                              onChange={(e) => setKamerHoogte(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                              min="2"
                              max="6"
                              step="0.1"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="personen" className="block text-sm font-medium text-gray-700 mb-2">
                            Aantal personen (gemiddeld aanwezig)
                          </label>
                          <input
                            type="number"
                            id="personen"
                            value={aantalPersonen}
                            onChange={(e) => setAantalPersonen(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            min="1"
                            max="20"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type ruimte
                          </label>
                          <select
                            value={ruimteType}
                            onChange={(e) => setRuimteType(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          >
                            <option value="woonkamer">Woonkamer</option>
                            <option value="slaapkamer">Slaapkamer</option>
                            <option value="kantoor">Kantoor</option>
                            <option value="winkel">Winkel</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="sportruimte">Sportruimte</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Omgevingsfactoren */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => toggleSection('omgeving')}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="flex items-center gap-2 font-semibold">
                        <Sun className="h-5 w-5 text-yellow-500" /> 
                        Omgevingsfactoren
                      </span>
                      {openSections.includes('omgeving') ? (
                        <ChevronUp className="h-5 w-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600" />
                      )}
                    </button>
                    
                    {openSections.includes('omgeving') && (
                      <div className="p-6 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Hoeveelheid zonlicht
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {(['weinig', 'gemiddeld', 'veel'] as const).map((optie) => (
                              <button
                                key={optie}
                                onClick={() => setZonlicht(optie)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                  zonlicht === optie 
                                    ? 'border-sky-500 bg-sky-50 text-sky-700' 
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                {optie.charAt(0).toUpperCase() + optie.slice(1)}
                              </button>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Weinig = noord, Veel = zuid</p>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Kwaliteit isolatie
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {(['slecht', 'gemiddeld', 'goed'] as const).map((optie) => (
                              <button
                                key={optie}
                                onClick={() => setIsolatie(optie)}
                                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                                  isolatie === optie 
                                    ? 'border-sky-500 bg-sky-50 text-sky-700' 
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                {optie.charAt(0).toUpperCase() + optie.slice(1)}
                              </button>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Slecht = enkel glas, Goed = HR++ glas</p>
                        </div>
                        
                        <div>
                          <label htmlFor="glas" className="block text-sm font-medium text-gray-700 mb-2">
                            Glasoppervlak (% van muur)
                          </label>
                          <input
                            type="number"
                            id="glas"
                            value={glasoppervlak}
                            onChange={(e) => setGlasoppervlak(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            min="10"
                            max="100"
                            step="10"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Warmtebronnen */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => toggleSection('warmte')}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="flex items-center gap-2 font-semibold">
                        <Thermometer className="h-5 w-5 text-orange-500" /> 
                        Warmtebronnen
                      </span>
                      {openSections.includes('warmte') ? (
                        <ChevronUp className="h-5 w-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600" />
                      )}
                    </button>
                    
                    {openSections.includes('warmte') && (
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <label htmlFor="warmtebronnen" className="font-medium text-gray-700">
                            Extra warmtebronnen aanwezig?
                          </label>
                          <input
                            type="checkbox"
                            id="warmtebronnen"
                            checked={warmtebronnen}
                            onChange={(e) => setWarmtebronnen(e.target.checked)}
                            className="h-5 w-5 text-sky-600 rounded focus:ring-sky-500"
                          />
                        </div>
                        
                        {warmtebronnen && (
                          <>
                            <div>
                              <label htmlFor="computers" className="block text-sm font-medium text-gray-700 mb-2">
                                Aantal computers/TV's
                              </label>
                              <input
                                type="number"
                                id="computers"
                                value={aantalComputers}
                                onChange={(e) => setAantalComputers(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                min="0"
                                max="10"
                              />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <label htmlFor="keuken" className="font-medium text-gray-700">
                                Keukenapparatuur (oven, fornuis)
                              </label>
                              <input
                                type="checkbox"
                                id="keuken"
                                checked={keukenApparatuur}
                                onChange={(e) => setKeukenApparatuur(e.target.checked)}
                                className="h-5 w-5 text-sky-600 rounded focus:ring-sky-500"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Gewenste functie */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <div className="p-6 space-y-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gewenste functie
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['koelen', 'beiden'] as const).map((optie) => (
                          <button
                            key={optie}
                            onClick={() => setGewensteFunctie(optie)}
                            className={`px-4 py-2 rounded-lg border-2 transition-all ${
                              gewensteFunctie === optie 
                                ? 'border-sky-500 bg-sky-50 text-sky-700' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {optie === 'koelen' ? 'Alleen koelen' : 'Koelen & verwarmen'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="lg:w-96">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* Berekening resultaat */}
                  <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl shadow-lg p-6 text-white">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Calculator className="h-6 w-6" />
                      Berekend vermogen
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm opacity-90">Kamergrootte</span>
                          <span className="font-semibold">{kamerGrootte.toFixed(1)} m²</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm opacity-90">Volume</span>
                          <span className="font-semibold">{kamerVolume.toFixed(1)} m³</span>
                        </div>
                      </div>
                      
                      <div className="bg-white/90 text-gray-900 rounded-lg p-4">
                        <div className="text-center mb-3">
                          <p className="text-sm text-gray-600">Aanbevolen koelvermogen</p>
                          <p className="text-3xl font-bold text-sky-600">{koelCapaciteitKW} kW</p>
                        </div>
                        {gewensteFunctie === 'beiden' && (
                          <div className="text-center border-t pt-3">
                            <p className="text-sm text-gray-600">Aanbevolen verwarmvermogen</p>
                            <p className="text-2xl font-bold text-orange-500">{verwarmCapaciteitKW} kW</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-sm space-y-1">
                        <p className="flex items-center gap-1">
                          <Info className="h-4 w-4" />
                          Berekening is gebaseerd op:
                        </p>
                        <ul className="ml-5 space-y-1 text-sky-50">
                          <li>• {kamerGrootte.toFixed(1)} m² × 100W basisvermogen</li>
                          <li>• Zonlicht: {zonlicht} ({Math.round((zonlichtFactor[zonlicht] - 1) * 100)}%)</li>
                          <li>• Isolatie: {isolatie} ({Math.round((isolatieFactor[isolatie] - 1) * 100)}%)</li>
                          <li>• {aantalPersonen} personen (+{extraPersonen * 100}W)</li>
                          {warmtebronnen && <li>• Extra warmtebronnen (+{parseInt(aantalComputers) * 150 + (keukenApparatuur ? 500 : 0)}W)</li>}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h4 className="font-bold text-lg mb-3">Hulp nodig?</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Onze experts helpen u graag bij het kiezen van de perfecte airco voor uw situatie.
                    </p>
                    <div className="space-y-2">
                      <Link
                        to="/contact"
                        className="block w-full text-center py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                      >
                        Gratis adviesgesprek
                      </Link>
                      <a
                        href="tel:0462021430"
                        className="block w-full text-center py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
                      >
                        Bel: 046 202 1430
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aanbevolen modellen */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Aanbevolen airco's voor uw situatie
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aanbevolenModellen.map((model, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{model.naam}</h3>
                      <span className="text-2xl font-bold text-sky-600">{model.prijs}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Koelvermogen</p>
                        <p className="font-semibold">{model.koelvermogen}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Verwarmvermogen</p>
                        <p className="font-semibold">{model.verwarmvermogen}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {model.energielabel}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {model.kenmerken.map((kenmerk, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-green-500">✓</span>
                          {kenmerk}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="block w-full text-center py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      Offerte aanvragen
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/products"
                className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium"
              >
                Bekijk alle modellen
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Info className="h-6 w-6 text-sky-500" />
                Waarom de juiste capaciteit belangrijk is
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-red-600 mb-2">❌ Te lage capaciteit</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ruimte wordt niet voldoende gekoeld/verwarmd</li>
                    <li>• Airco draait continu op vol vermogen</li>
                    <li>• Hoger energieverbruik</li>
                    <li>• Snellere slijtage van componenten</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-red-600 mb-2">❌ Te hoge capaciteit</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Onnodige aanschafkosten</li>
                    <li>• Kort-cyclisch draaien (aan/uit)</li>
                    <li>• Oncomfortabele temperatuurschommelingen</li>
                    <li>• Slechte ontvochtiging</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold text-green-800 mb-2">✅ Juiste capaciteit</h3>
                <ul className="space-y-1 text-green-700">
                  <li>• Optimaal comfort in alle seizoenen</li>
                  <li>• Laagst mogelijke energiekosten</li>
                  <li>• Langere levensduur van de airco</li>
                  <li>• Stabiele temperatuur en luchtvochtigheid</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Professioneel advies op locatie</h2>
              <p className="text-gray-700 mb-4">
                Deze calculator geeft een goede indicatie van de benodigde capaciteit. Voor een exacte 
                berekening komen onze experts graag bij u langs. Tijdens een gratis adviesgesprek:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Meten we uw ruimte nauwkeurig op</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Bekijken we de beste plaats voor binnen- en buitenunit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Adviseren we over de meest geschikte modellen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Berekenen we uw besparing bij koelen én verwarmen</span>
                </li>
              </ul>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Plan gratis adviesgesprek
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}