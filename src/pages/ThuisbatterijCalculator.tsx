import React, { useState } from 'react';
import { Battery, Calculator, Euro, Sun, Zap, TrendingUp, AlertCircle, Info } from 'lucide-react';
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
  
  // Bereken zonnepanelen opbrengst (gemiddeld 900 kWh per kWp in Nederland)
  const jaarlijkseOpbrengstZonnepanelen = parseFloat(zonnepanelenVermogen) * 900;
  
  // Bereken eigenverbruik zonder batterij (gemiddeld 30% direct gebruik)
  const directEigenverbruik = jaarlijkseOpbrengstZonnepanelen * 0.3;
  const teruglevering = jaarlijkseOpbrengstZonnepanelen - directEigenverbruik;
  
  // Bereken optimale batterijcapaciteit
  const dagelijksVerbruik = parseFloat(jaarverbruik) / 365;
  const nachtVerbruik = dagelijksVerbruik * (1 - parseFloat(dagNachtVerhouding) / 100);
  
  // Aanbevolen capaciteit is ongeveer 1.5x het nachtverbruik (voor buffer)
  const aanbevolenCapaciteit = Math.round(nachtVerbruik * 1.5 * 10) / 10;
  
  // AlphaESS modellen
  const batterijModellen = [
    { naam: 'SMILE-B3', capaciteit: 3.85, prijs: 3500, vermogen: 3.0 },
    { naam: 'SMILE-S5', capaciteit: 5.78, prijs: 4500, vermogen: 5.0 },
    { naam: 'SMILE5', capaciteit: 7.7, prijs: 6000, vermogen: 5.0 },
    { naam: 'SMILE5 Duo', capaciteit: 15.4, prijs: 10000, vermogen: 5.0 },
    { naam: 'SMILE-T10', capaciteit: 23.1, prijs: 14000, vermogen: 10.0 },
    { naam: 'SMILE-T30', capaciteit: 30.8, prijs: 18000, vermogen: 30.0 }
  ];
  
  // Vind het beste model
  const aanbevolenModel = batterijModellen.reduce((prev, curr) => 
    Math.abs(curr.capaciteit - aanbevolenCapaciteit) < Math.abs(prev.capaciteit - aanbevolenCapaciteit) ? curr : prev
  );
  
  // Bereken besparingen
  const batterijEfficiency = 0.95; // 95% round-trip efficiency
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
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-500" />
              Uw Situatie
            </h2>

            <div className="space-y-6">
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
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Aanbevolen Model */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-lg p-6 text-gray-900">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Battery className="h-6 w-6" />
                Aanbevolen Thuisbatterij
              </h3>
              
              <div className="bg-white/90 rounded-lg p-4 mb-4">
                <div className="text-3xl font-bold mb-2">{aanbevolenModel.naam}</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Capaciteit</p>
                    <p className="text-xl font-semibold">{aanbevolenModel.capaciteit} kWh</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Vermogen</p>
                    <p className="text-xl font-semibold">{aanbevolenModel.vermogen} kW</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm mb-2">
                  <Info className="inline h-4 w-4 mr-1" />
                  Berekend op basis van uw nachtverbruik van {Math.round(nachtVerbruik * 10) / 10} kWh
                </p>
                <p className="text-xs">
                  Dit model biedt voldoende capaciteit voor uw dagelijkse energiebehoefte 
                  en maximaliseert uw zelfvoorzieningsgraad.
                </p>
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

        {/* Info Section */}
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