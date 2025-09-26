import React, { useState } from 'react';
import { Battery, Calculator, Euro, Sun, Zap, TrendingUp, AlertCircle, Info, ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ThuisbatterijCalculator() {
  // Input states
  const [jaarverbruik, setJaarverbruik] = useState<string>('4500');
  const [zonnepanelenVermogen, setZonnepanelenVermogen] = useState<string>('0');
  const [dagNachtVerhouding, setDagNachtVerhouding] = useState<string>('70');
  const [elektriciteitstarief, setElektriciteitstarief] = useState<string>('0.40');
  const [terugleververgoeding, setTerugleververgoeding] = useState<string>('0.07');
  const [dynamischContract, setDynamischContract] = useState<boolean>(false);
  
  // Advanced inputs
  const [aansluiting, setAansluiting] = useState<'1-fase' | '3-fase'>('3-fase');
  const [hoofdzekering, setHoofdzekering] = useState<string>('25');
  const [piekvermogen, setPiekvermogen] = useState<string>('4');
  const [heeftWarmtepomp, setHeeftWarmtepomp] = useState<boolean>(false);
  const [warmtepompVermogen, setWarmtepompVermogen] = useState<string>('3.5');
  const [heeftEV, setHeeftEV] = useState<boolean>(false);
  const [heeftAirco, setHeeftAirco] = useState<boolean>(false);
  const [wilBackup, setWilBackup] = useState<boolean>(false);
  
  // Accordion states
  const [openSections, setOpenSections] = useState<string[]>(['basis']);
  
  // Advanced parameters
  const [dod, setDod] = useState<string>('90'); // Depth of Discharge
  const [cyclusEfficiency, setCyclusEfficiency] = useState<string>('90'); // Round-trip efficiency
  
  // Toggle accordion sections
  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };
  
  // Bereken zonnepanelen opbrengst (gemiddeld 900 kWh per kWp in Nederland)
  const jaarlijkseOpbrengstZonnepanelen = parseFloat(zonnepanelenVermogen) * 900;
  
  // Bereken eigenverbruik zonder batterij (gemiddeld 30% direct gebruik)
  const directEigenverbruik = jaarlijkseOpbrengstZonnepanelen * 0.3;
  const teruglevering = jaarlijkseOpbrengstZonnepanelen - directEigenverbruik;
  
  // Bereken optimale batterijcapaciteit
  const dagelijksVerbruik = parseFloat(jaarverbruik) / 365;
  const nachtVerbruik = dagelijksVerbruik * (1 - parseFloat(dagNachtVerhouding) / 100);
  
  // Basis capaciteit is 1.5x het nachtverbruik (voor buffer)
  let basisCapaciteit = nachtVerbruik * 1.5;
  
  // Extra capaciteit voor grote verbruikers
  if (heeftWarmtepomp) basisCapaciteit += 2; // +2 kWh voor warmtepomp
  if (heeftEV) basisCapaciteit += 3; // +3 kWh voor elektrische auto
  if (heeftAirco) basisCapaciteit += 1; // +1 kWh voor airco
  
  // Extra capaciteit voor backup
  if (wilBackup) basisCapaciteit *= 1.2; // +20% voor backup
  
  const aanbevolenCapaciteit = Math.round(basisCapaciteit * 10) / 10;
  
  // Bereken minimaal benodigd ontlaadvermogen
  let minOntlaadVermogen = Math.max(3, parseFloat(piekvermogen)); // Minimaal 3 kW
  if (heeftWarmtepomp) {
    minOntlaadVermogen = Math.max(minOntlaadVermogen, parseFloat(warmtepompVermogen));
  }
  
  // AlphaESS modellen met actuele prijzen (excl. BTW)
  const batterijModellen = [
    { naam: 'SMILE G3 3,85 kWh', capaciteit: 3.85, prijs: 3395, vermogen: 3.6, fase: '1-fase' },
    { naam: 'SMILE G3 7,7 kWh (5 kW)', capaciteit: 7.7, prijs: 4395, vermogen: 5.0, fase: '1-fase' },
    { naam: 'SMILE G3-T10 7,7 kWh', capaciteit: 7.7, prijs: 4945, vermogen: 10.0, fase: '3-fase' },
    { naam: 'SMILE G3-S5 10,1 kWh', capaciteit: 10.1, prijs: 5495, vermogen: 5.0, fase: '1-fase' },
    { naam: 'SMILE G3-T10 11,55 kWh', capaciteit: 11.55, prijs: 5895, vermogen: 10.0, fase: '3-fase' },
    { naam: 'SMILE G3-T10 15,4 kWh', capaciteit: 15.4, prijs: 6895, vermogen: 10.0, fase: '3-fase' },
    { naam: 'SMILE G3-T10 19,25 kWh', capaciteit: 19.25, prijs: 7895, vermogen: 10.0, fase: '3-fase' },
    { naam: 'SMILE G3-S5 20,2 kWh', capaciteit: 20.2, prijs: 8395, vermogen: 5.0, fase: '1-fase' },
    { naam: 'SMILE G3-T10 23,1 kWh', capaciteit: 23.1, prijs: 8995, vermogen: 10.0, fase: '3-fase' },
    { naam: 'SMILE G3-T10 30,8 kWh', capaciteit: 30.8, prijs: 10895, vermogen: 10.0, fase: '3-fase' },
    { naam: 'SMILE G3-T10 38,5 kWh', capaciteit: 38.5, prijs: 12895, vermogen: 10.0, fase: '3-fase' },
    { naam: 'SMILE G3-T10 46,2 kWh', capaciteit: 46.2, prijs: 14895, vermogen: 10.0, fase: '3-fase' }
  ];
  
  // Vind het beste model (ook rekening houden met vermogen en fase)
  const geschikteModellen = batterijModellen.filter(model => {
    // Check vermogen
    if (model.vermogen < minOntlaadVermogen) return false;
    
    // Check fase compatibiliteit
    if (aansluiting === '1-fase' && model.fase === '3-fase') {
      // 3-fase batterij werkt niet op 1-fase aansluiting
      return false;
    }
    
    return true;
  });
  
  const aanbevolenModel = geschikteModellen.length > 0
    ? geschikteModellen.reduce((prev, curr) => 
        Math.abs(curr.capaciteit - aanbevolenCapaciteit) < Math.abs(prev.capaciteit - aanbevolenCapaciteit) ? curr : prev
      )
    : batterijModellen.reduce((prev, curr) => 
        Math.abs(curr.capaciteit - aanbevolenCapaciteit) < Math.abs(prev.capaciteit - aanbevolenCapaciteit) ? curr : prev
      );
  
  // Fase advies
  const faseAdvies = 
    aansluiting === '3-fase' 
      ? '3-fase systeem geschikt voor hogere vermogens'
      : minOntlaadVermogen > 5 
        ? 'Overweeg 3-fase bij >5 kW vermogen'
        : '1-fase voldoende voor uw situatie';
  
  // Backup tijd schatting (bij 3 kW kritiek vermogen)
  const backupUren = wilBackup && aanbevolenModel.capaciteit > 0 
    ? (aanbevolenModel.capaciteit * batterijEfficiency) / 3 
    : 0;
  
  // Bereken besparingen
  const batterijEfficiency = parseFloat(cyclusEfficiency) / 100;
  const bruikbareCapaciteit = aanbevolenModel.capaciteit * (parseFloat(dod) / 100);
  const maxJaarlijkseBatterijOpslag = Math.min(
    aanbevolenModel.capaciteit * 365 * batterijEfficiency,
    teruglevering * 0.9 // Maximaal 90% van teruglevering kan opgeslagen worden
  );
  
  // Besparing zonder dynamisch contract
  const besparingStatisch = maxJaarlijkseBatterijOpslag * (parseFloat(elektriciteitstarief) - parseFloat(terugleververgoeding));
  
  // Extra besparing met dynamisch contract (gemiddeld 15% extra)
  const besparingDynamisch = dynamischContract ? besparingStatisch * 1.15 : besparingStatisch;
  
  // Totale jaarlijkse besparing
  const jaarlijkseBesparing = Math.round(besparingDynamisch);
  
  // Bereken terugverdientijd
  const totaleInvestering = aanbevolenModel.prijs;
  const terugverdientijd = totaleInvestering / jaarlijkseBesparing;
  
  // Bereken ROI over 10 jaar
  const totaalRendement10Jaar = (jaarlijkseBesparing * 10) - totaleInvestering;
  const roi10Jaar = (totaalRendement10Jaar / totaleInvestering) * 100;

  const breadcrumbItems = [
    { label: 'Calculators', path: '/calculators' },
    { label: 'Thuisbatterij Calculator' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Thuisbatterij Calculator - Bereken uw Besparing | StayCool Airco"
        description="Bereken hoeveel u kunt besparen met een AlphaESS thuisbatterij. Ontdek de ideale batterijcapaciteit en terugverdientijd voor uw situatie."
        keywords="thuisbatterij calculator, batterij capaciteit berekenen, AlphaESS calculator, energieopslag besparing, thuisbatterij terugverdientijd"
      />

      <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} className="text-gray-900/70 mb-4" />
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Battery className="h-12 w-12" />
              <Calculator className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Thuisbatterij Calculator
            </h1>
            <p className="text-xl mb-6">
              Bereken uw besparing met een AlphaESS thuisbatterij
            </p>
            <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm">
                Ontdek hoeveel u kunt besparen door uw eigen opgewekte energie op te slaan. 
                Onze calculator helpt u de ideale batterijcapaciteit te bepalen en berekent uw terugverdientijd.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto lg:items-start">
          {/* Input Section */}
          <div className="flex-1 lg:max-w-xl">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-yellow-500" />
                Configureer uw situatie
              </h2>

              {/* Accordion sections */}
              <div className="space-y-4">
                {/* Basis informatie */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection('basis')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      <span className="text-xl">⚡</span> Basis verbruiksgegevens
                    </span>
                    {openSections.includes('basis') ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                  
                  {openSections.includes('basis') && (
                    <div className="p-4 space-y-6">
                      {/* Jaarverbruik */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Jaarlijks elektriciteitsverbruik (kWh)
                </label>
                <input
                  type="number"
                  value={jaarverbruik}
                  onChange={(e) => setJaarverbruik(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  min="0"
                  max="50000"
                />
                <p className="text-xs text-gray-500 mt-1">Gemiddeld huishouden: 3.500 - 4.500 kWh</p>
              </div>

              {/* Zonnepanelen */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vermogen zonnepanelen (kWp)
                </label>
                <input
                  type="number"
                  value={zonnepanelenVermogen}
                  onChange={(e) => setZonnepanelenVermogen(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  min="0"
                  max="50"
                  step="0.1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {parseFloat(zonnepanelenVermogen) > 0 
                    ? `Geschatte jaaropbrengst: ${Math.round(jaarlijkseOpbrengstZonnepanelen).toLocaleString('nl-NL')} kWh`
                    : 'Vul 0 in als u (nog) geen zonnepanelen heeft'}
                </p>
              </div>

              {/* Dag/nacht verhouding */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Percentage verbruik overdag (%)
                </label>
                <input
                  type="range"
                  value={dagNachtVerhouding}
                  onChange={(e) => setDagNachtVerhouding(e.target.value)}
                  className="w-full"
                  min="50"
                  max="90"
                  step="5"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Dag: {dagNachtVerhouding}%</span>
                  <span>Nacht: {100 - parseInt(dagNachtVerhouding)}%</span>
                </div>
              </div>

              {/* Elektriciteitstarief */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Elektriciteitstarief (€/kWh)
                </label>
                <input
                  type="number"
                  value={elektriciteitstarief}
                  onChange={(e) => setElektriciteitstarief(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  min="0.10"
                  max="1.00"
                  step="0.01"
                />
                <p className="text-xs text-gray-500 mt-1">Huidige gemiddelde: €0,35 - €0,45 per kWh</p>
              </div>

              {/* Terugleververgoeding */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Terugleververgoeding (€/kWh)
                </label>
                <input
                  type="number"
                  value={terugleververgoeding}
                  onChange={(e) => setTerugleververgoeding(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  min="0.00"
                  max="0.50"
                  step="0.01"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Vanaf 2025 gemiddeld: €0,05 - €0,08 per kWh
                </p>
              </div>

              {/* Dynamisch contract */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="dynamisch"
                  checked={dynamischContract}
                  onChange={(e) => setDynamischContract(e.target.checked)}
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label htmlFor="dynamisch" className="text-sm font-medium text-gray-700">
                  Dynamisch energiecontract (voor extra besparing)
                </label>
              </div>
                    </div>
                  )}
                </div>

                {/* Zonnepanelen sectie */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection('zonnepanelen')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      <span className="text-xl">☀️</span> Zonnepanelen
                    </span>
                    {openSections.includes('zonnepanelen') ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                  
                  {openSections.includes('zonnepanelen') && (
                    <div className="p-4 space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vermogen zonnepanelen (kWp)
                        </label>
                        <input
                          type="number"
                          value={zonnepanelenVermogen}
                          onChange={(e) => setZonnepanelenVermogen(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          min="0"
                          max="50"
                          step="0.1"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {parseFloat(zonnepanelenVermogen) > 0 
                            ? `Geschatte jaaropbrengst: ${Math.round(jaarlijkseOpbrengstZonnepanelen).toLocaleString('nl-NL')} kWh`
                            : 'Vul 0 in als u (nog) geen zonnepanelen heeft'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Woning & Aansluiting */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection('woning')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      <span className="text-xl">🏠</span> Woning & Aansluiting
                    </span>
                    {openSections.includes('woning') ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                  
                  {openSections.includes('woning') && (
                    <div className="p-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type aansluiting
                    </label>
                    <select
                      value={aansluiting}
                      onChange={(e) => setAansluiting(e.target.value as '1-fase' | '3-fase')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="1-fase">1-fase</option>
                      <option value="3-fase">3-fase</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hoofdzekering (Ampère)
                    </label>
                    <input
                      type="number"
                      value={hoofdzekering}
                      onChange={(e) => setHoofdzekering(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      min="16"
                      max="80"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Piekvermogen verbruikers (kW)
                  </label>
                  <input
                    type="number"
                    value={piekvermogen}
                    onChange={(e) => setPiekvermogen(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    min="1"
                    max="20"
                    step="0.5"
                  />
                  <p className="text-xs text-gray-500 mt-1">Maximaal vermogen dat gelijktijdig gebruikt wordt</p>
                </div>
              </div>
                    </div>
                  )}
                </div>

                {/* Grote verbruikers */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection('verbruikers')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      <span className="text-xl">🔌</span> Grote verbruikers
                    </span>
                    {openSections.includes('verbruikers') ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                  
                  {openSections.includes('verbruikers') && (
                    <div className="p-4">
                      <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <label htmlFor="warmtepomp" className="font-medium text-gray-700">
                      Warmtepomp aanwezig
                    </label>
                    <input
                      type="checkbox"
                      id="warmtepomp"
                      checked={heeftWarmtepomp}
                      onChange={(e) => setHeeftWarmtepomp(e.target.checked)}
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                  </div>
                  {heeftWarmtepomp && (
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Vermogen warmtepomp (kW)
                      </label>
                      <input
                        type="number"
                        value={warmtepompVermogen}
                        onChange={(e) => setWarmtepompVermogen(e.target.value)}
                        className="w-full px-3 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        min="1"
                        max="10"
                        step="0.5"
                      />
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="ev" className="font-medium text-gray-700">
                      Elektrische auto (EV) aanwezig
                    </label>
                    <input
                      type="checkbox"
                      id="ev"
                      checked={heeftEV}
                      onChange={(e) => setHeeftEV(e.target.checked)}
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="airco" className="font-medium text-gray-700">
                      Airco vooral in de avond gebruikt
                    </label>
                    <input
                      type="checkbox"
                      id="airco"
                      checked={heeftAirco}
                      onChange={(e) => setHeeftAirco(e.target.checked)}
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="backup" className="font-medium text-gray-700">
                      Back-up bij stroomuitval gewenst
                    </label>
                    <input
                      type="checkbox"
                      id="backup"
                      checked={wilBackup}
                      onChange={(e) => setWilBackup(e.target.checked)}
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                  </div>
                </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Geavanceerde parameters */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleSection('geavanceerd')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      <Settings className="h-5 w-5" /> Geavanceerde instellingen
                    </span>
                    {openSections.includes('geavanceerd') ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                  
                  {openSections.includes('geavanceerd') && (
                    <div className="p-4 space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Diepte van ontlading (DoD) - {dod}%
                        </label>
                        <input
                          type="range"
                          value={dod}
                          onChange={(e) => setDod(e.target.value)}
                          className="w-full"
                          min="50"
                          max="100"
                          step="5"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Hoeveel procent van de batterijcapaciteit mag gebruikt worden
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cyclusefficiëntie - {cyclusEfficiency}%
                        </label>
                        <input
                          type="range"
                          value={cyclusEfficiency}
                          onChange={(e) => setCyclusEfficiency(e.target.value)}
                          className="w-full"
                          min="80"
                          max="98"
                          step="1"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Round-trip efficiency van laden en ontladen
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex-1 lg:max-w-xl lg:sticky lg:top-24 space-y-6">
            {/* Aanbevolen Model */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-lg p-6 text-gray-900">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Battery className="h-6 w-6" />
                Aanbevolen Thuisbatterij
              </h3>
              
              <div className="bg-white/90 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold mb-2">{aanbevolenModel.naam}</div>
                <div className="inline-block px-2 py-1 bg-yellow-600 text-white text-sm rounded mb-3">
                  {aanbevolenModel.fase}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <p className="text-sm text-gray-600">Nominale capaciteit</p>
                    <p className="text-xl font-semibold">{aanbevolenModel.capaciteit} kWh</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Omvormer vermogen</p>
                    <p className="text-xl font-semibold">{aanbevolenModel.vermogen} kW</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Bruikbare capaciteit</p>
                    <p className="text-lg font-semibold">{bruikbareCapaciteit.toFixed(1)} kWh</p>
                    <p className="text-xs text-gray-500">bij {dod}% DoD</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Prijs excl. BTW</p>
                    <p className="text-lg font-semibold">€{aanbevolenModel.prijs.toLocaleString('nl-NL')}</p>
                    <p className="text-xs text-gray-500">vanaf prijs</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4 space-y-3">
                <p className="text-sm">
                  <Info className="inline h-4 w-4 mr-1" />
                  Berekend op basis van uw nachtverbruik van {Math.round(nachtVerbruik * 10) / 10} kWh
                  {heeftWarmtepomp && ', warmtepomp'}
                  {heeftEV && ', elektrische auto'}
                  {heeftAirco && ', airco gebruik'}
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-xs text-gray-700">Min. ontlaadvermogen</p>
                    <p className="font-semibold">{minOntlaadVermogen.toFixed(1)} kW</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-700">Fase advies</p>
                    <p className="font-semibold text-xs">{faseAdvies}</p>
                  </div>
                </div>
                
                {wilBackup && (
                  <div>
                    <p className="text-xs text-gray-700">Geschatte backup tijd</p>
                    <p className="font-semibold">{backupUren.toFixed(1)} uur bij stroomuitval</p>
                  </div>
                )}
              </div>
            </div>

            {/* Financieel Overzicht */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Euro className="h-6 w-6 text-green-600" />
                Financieel Overzicht
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Investering (incl. BTW)</span>
                  <span className="font-semibold">€{totaleInvestering.toLocaleString('nl-NL')}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Jaarlijkse besparing</span>
                  <span className="font-semibold text-green-600">
                    €{jaarlijkseBesparing.toLocaleString('nl-NL')}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Terugverdientijd</span>
                  <span className="font-semibold">
                    {terugverdientijd.toFixed(1)} jaar
                  </span>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">10-jaars rendement</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    €{totaalRendement10Jaar.toLocaleString('nl-NL')}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    ROI: {roi10Jaar.toFixed(0)}% over 10 jaar
                  </p>
                </div>

                {/* BTW Terugvraag Info */}
                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <AlertCircle className="h-5 w-5 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-700">
                    <strong>21% BTW terugvragen mogelijk!</strong><br />
                    AlphaESS helpt u met de BTW-teruggave procedure. 
                    Dit verlaagt uw investering met ongeveer €{Math.round(totaleInvestering * 0.174).toLocaleString('nl-NL')}.
                  </p>
                </div>
              </div>
            </div>

            {/* Extra Voordelen */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Extra voordelen AlphaESS</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>10 jaar garantie of 10.000 cycli</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Slimme energie management app</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Geschikt voor alle energieleveranciers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>Werkt ook zonder zonnepanelen</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-orange-500 rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">
                Klaar om te besparen?
              </h3>
              <p className="mb-4">
                Vraag een gratis adviesgesprek aan voor een offerte op maat
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Gratis advies aanvragen
              </Link>
            </div>
          </div>
        </div>

        {/* Uitgebreide Info Section */}
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {/* Capaciteit Advies */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Battery className="h-6 w-6 text-yellow-500" />
              Capaciteit Advisering - Hoe bepalen we de juiste batterij?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-bold mb-2">🔑 Kernprincipe</h3>
                <p className="text-gray-700">
                  De ideale batterijcapaciteit = <strong>avond/nachtverbruik</strong> + <strong>buffer voor zonnepanelen overschot</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 text-lg">Praktische richtlijnen per huishouden</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <div>
                        <strong>1-2 personen (2500-3500 kWh/jaar)</strong><br />
                        → 4-5 kWh batterij
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <div>
                        <strong>Gemiddeld gezin (3500-5000 kWh/jaar)</strong><br />
                        → 6-8 kWh batterij
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <div>
                        <strong>Groot gezin met warmtepomp/EV (5000-7000 kWh/jaar)</strong><br />
                        → 10-15 kWh batterij
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <div>
                        <strong>Villa met alle elektrisch (7000+ kWh/jaar)</strong><br />
                        → 15-20 kWh batterij
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 text-lg">Belangrijke overwegingen</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Avond/nachtverbruik:</strong> Dit is meestal 40-60% van uw totale dagverbruik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Zonnepanelen overschot:</strong> Sla 40-60% van uw piekdag overschot op</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Grote verbruikers:</strong> +2-3 kWh voor warmtepomp, +3-5 kWh voor EV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Back-up functie:</strong> +20% extra capaciteit voor noodstroom</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>💡 Tip:</strong> Een te kleine batterij wordt te vaak vol/leeg (weinig rendement). 
                  Een te grote batterij wordt zelden volledig benut (onnodig duur). 
                  Streef naar een batterij die 30-70% van uw dagverbruik kan opslaan.
                </p>
              </div>
            </div>
          </div>

          {/* Technische Begrippen */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">📚 Technische Begrippen Uitgelegd</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Battery className="h-5 w-5 text-yellow-500" />
                  Diepte van Ontlading (DoD)
                </h3>
                <p className="text-gray-600 mb-3">
                  DoD bepaalt hoeveel procent van de totale batterijcapaciteit veilig gebruikt kan worden.
                </p>
                <div className="bg-gray-50 rounded p-3 text-sm">
                  <p><strong>Voorbeeld:</strong> Bij een 10 kWh batterij met 90% DoD:</p>
                  <ul className="mt-2 ml-4">
                    <li>• Bruikbare capaciteit = 9 kWh</li>
                    <li>• Reserve = 1 kWh (voor batterijgezondheid)</li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-500">
                    Hogere DoD = meer bruikbare energie, maar kan de levensduur verkorten
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Cyclusefficiëntie (Round-trip)
                </h3>
                <p className="text-gray-600 mb-3">
                  Het percentage energie dat je terugkrijgt na laden en ontladen.
                </p>
                <div className="bg-gray-50 rounded p-3 text-sm">
                  <p><strong>Voorbeeld:</strong> Bij 90% efficiëntie:</p>
                  <ul className="mt-2 ml-4">
                    <li>• 10 kWh laden → 9 kWh bruikbaar</li>
                    <li>• 1 kWh verlies door warmte/conversie</li>
                  </ul>
                  <p className="mt-2 text-xs text-gray-500">
                    Moderne batterijen: 85-95% efficiënt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Intake Checklist */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">📋 Complete Intake Checklist</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-yellow-600">1. Basisinformatie</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Jaarlijks elektriciteitsverbruik (kWh)</li>
                    <li>✓ Zonnepanelen vermogen (kWp) en opbrengst</li>
                    <li>✓ Type energiecontract (vast/dynamisch)</li>
                    <li>✓ Huidige energiekosten per maand/jaar</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-yellow-600">2. Verbruikspatroon</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Dag vs. avond/nacht verbruik</li>
                    <li>✓ Grote verbruikers (warmtepomp, EV, airco)</li>
                    <li>✓ Laadtijden elektrische auto</li>
                    <li>✓ Wens voor noodstroom/back-up</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-yellow-600">3. Technische situatie</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Aansluiting (1-fase of 3-fase)</li>
                    <li>✓ Hoofdzekering (bijv. 1x35A, 3x25A)</li>
                    <li>✓ Plaatsingsmogelijkheden batterij</li>
                    <li>✓ Ventilatie en veiligheid locatie</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-yellow-600">4. Toekomstplannen</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Uitbreiding zonnepanelen gepland?</li>
                    <li>✓ Warmtepomp in de planning?</li>
                    <li>✓ Elektrische auto aanschaf?</li>
                    <li>✓ Doel: besparen of energieneutraal?</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-yellow-700">⚡ Quick Formula</h3>
                  <p className="text-sm font-mono bg-white rounded p-2">
                    Batterij (kWh) = Nachtverbruik + (40% × Zonnepanelen overschot)
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Gebruik deze formule als snelle richtlijn tijdens intake gesprekken
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-green-700">💰 ROI Factoren</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Verschil inkoop/teruglevering tarief</li>
                    <li>• Dynamisch contract voordelen</li>
                    <li>• Afbouw salderingsregeling</li>
                    <li>• BTW teruggave mogelijkheid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Tips */}
          <div className="bg-gray-100 rounded-xl p-6">
            <h3 className="font-bold mb-4">🎯 Extra Adviespunten voor de Professional</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">kWh vs kW</h4>
                <p className="text-gray-600">
                  kWh = hoeveel energie opslag<br />
                  kW = hoe snel laden/ontladen<br />
                  <span className="text-xs">Belangrijk bij warmtepomp/EV!</span>
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Terugverdientijd</h4>
                <p className="text-gray-600">
                  Dynamisch contract: 5-7 jaar<br />
                  Vast contract: 7-10 jaar<br />
                  <span className="text-xs">Afhankelijk van energieprijzen</span>
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Noodstroom</h4>
                <p className="text-gray-600">
                  Niet elke batterij kan dit!<br />
                  Check: eilandbedrijf functie<br />
                  <span className="text-xs">AlphaESS ondersteunt dit</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Original Info Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Zo werkt de calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Battery className="h-5 w-5 text-yellow-500" />
                Capaciteitsbepaling
              </h3>
              <p className="text-gray-600 text-sm">
                De ideale batterijcapaciteit wordt bepaald op basis van uw nachtverbruik. 
                's Nachts gebruikt u energie terwijl uw zonnepanelen niet produceren. 
                Een thuisbatterij slaat overdag de overtollige energie op voor gebruik 's nachts.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Euro className="h-5 w-5 text-green-600" />
                Besparingsberekening
              </h3>
              <p className="text-gray-600 text-sm">
                Uw besparing komt voort uit het verschil tussen de inkoopprijs en 
                terugleververgoeding. Met een dynamisch contract kunt u extra profiteren 
                door slim in te kopen bij lage prijzen en te verkopen bij hoge prijzen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Sun className="h-5 w-5 text-yellow-500" />
                Zonder zonnepanelen
              </h3>
              <p className="text-gray-600 text-sm">
                Ook zonder zonnepanelen is een thuisbatterij interessant! 
                Met een dynamisch energiecontract koopt u energie in tijdens 
                daluren (vaak 's nachts) en gebruikt u deze overdag wanneer 
                de prijzen hoger zijn.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Toekomstbestendig
              </h3>
              <p className="text-gray-600 text-sm">
                De energiemarkt verandert snel. Salderingsregelingen verdwijnen 
                en energieprijzen worden volatieler. Een thuisbatterij maakt u 
                onafhankelijker van deze ontwikkelingen en zorgt voor een 
                stabiele energievoorziening.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Disclaimer:</strong> Deze berekening is een indicatie op basis van gemiddelden. 
              Werkelijke besparingen kunnen afwijken door individuele omstandigheden, 
              weersomstandigheden en energieprijsontwikkelingen. Vraag altijd een 
              persoonlijk advies aan voor een exacte berekening.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}