import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Shield, Zap, AlertTriangle, CheckCircle, Calculator, ArrowRight, Info, Lightbulb, Settings } from 'lucide-react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

export default function KnowledgeBaseThuisbatterijen() {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Kennisbank', path: '/kennisbank' },
    { label: 'Thuisbatterijen' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Kennisbank Thuisbatterijen - Eilandbedrijf & Back-up Systemen | StayCool Airco"
        description="Alles over thuisbatterijen, eilandbedrijf, anti-islanding beveiliging en EPS/back-up systemen. Leer hoe je je huis kunt voeden tijdens stroomuitval."
        keywords="thuisbatterij, eilandbedrijf, anti-islanding, EPS back-up, hybride omvormer, stroomuitval, microgrid"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="text-white/70 mb-4" />
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kennisbank Thuisbatterijen
            </h1>
            <p className="text-xl text-yellow-50 mb-8">
              Alles wat je moet weten over eilandbedrijf, anti-islanding beveiliging en back-up systemen
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Battery className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Back-up Systemen</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Veiligheidsbeveiliging</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">Eilandbedrijf</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk Thuisbatterijen
            </Link>
            <Link
              to="/thuisbatterij-calculator"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken je Systeem
            </Link>
          </div>
        </div>
      </section>

      {/* Belangrijke Begrippen */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Belangrijke Begrippen Uitgelegd
            </h2>
            
            <div className="space-y-8">
              {/* Eilandbeveiliging */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-12 w-12 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-red-600">
                      Eilandbeveiliging / Anti-islanding
                    </h3>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                      Dit is een <strong>verplichte beveiliging</strong> in netgekoppelde omvormers die direct ontkoppelt zodra het openbare net wegvalt. 
                      Deze beveiliging is essentieel voor de veiligheid van monteurs en netstabiliteit.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                      <p className="text-red-800 font-medium">
                        <AlertTriangle className="h-5 w-5 inline mr-2" />
                        Zonder deze beveiliging mag je niet parallel aan het net werken!
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      Test- en connectie-eisen liggen vast in <strong>IEC 62116</strong> (anti-islanding test) en <strong>EN 50549-1</strong> (EU netaansluiteisen).
                    </p>
                  </div>
                </div>
              </div>

              {/* Eilandbedrijf */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Zap className="h-12 w-12 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">
                      Eilandbedrijf (Island Mode)
                    </h3>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                      Je installatie vormt tijdelijk een eigen <strong>"microgrid"</strong> en blijft (een deel van) de woning voeden zonder het openbare net. 
                      Dit gebeurt via de EPS/back-up uitgang van een hybride omvormer en een nette scheiding van het net.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <p className="text-blue-800 font-medium">
                        <Info className="h-5 w-5 inline mr-2" />
                        Perfect voor het voeden van kritieke apparaten tijdens stroomuitval
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* EPS vs UPS */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Settings className="h-12 w-12 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-green-600">
                      EPS/Back-up vs UPS
                    </h3>
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                      EPS schakelt in milliseconden om (typisch <strong>10–250 ms</strong>). Dat is snel genoeg voor verlichting, koelkast en router, 
                      maar niet altijd "0 ms" zoals een professionele UPS.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-bold text-green-800 mb-2">✅ Geschikt voor:</h4>
                        <ul className="text-green-700 space-y-1">
                          <li>• Verlichting</li>
                          <li>• Koelkast</li>
                          <li>• Router/modem</li>
                          <li>• Basis elektronica</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <h4 className="font-bold text-yellow-800 mb-2">⚠️ Mogelijk problemen:</h4>
                        <ul className="text-yellow-700 space-y-1">
                          <li>• Gevoelige IT-apparatuur</li>
                          <li>• Servers</li>
                          <li>• Medische apparatuur</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Sommige fabrikanten claimen omschakeltijden van &lt;10 ms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt de beveiliging */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hoe Werkt de Beveiliging Technisch?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-bold">Net Weggevallen</h3>
                </div>
                <p className="text-gray-700">
                  Omvormer stopt met terugleveren (anti-islanding). Dit is <strong>standaard voor alle grid-tied omvormers</strong> en wettelijk verplicht.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h3 className="text-xl font-bold">Hybride Omvormers met Back-up</h3>
                </div>
                <p className="text-gray-700">
                  Vormen zelf een net op de EPS-uitgang (grid-forming) en kunnen zo kritieke groepen blijven voeden. 
                  Conformiteit wordt in de EU gecertificeerd volgens <strong>EN 50549-1</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat heb je nodig */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Wat Heb Je Nodig voor Eilandbedrijf?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Battery className="h-8 w-8 text-yellow-500" />
                    <h3 className="text-xl font-bold">1. Hybride Omvormer</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Met EPS/back-up-poort, liefst met <strong>"black-start"</strong>: na lege accu opnieuw opstarten en laden via PV zonder netreferentie.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-bold">2. Automatische Omschakeling</h3>
                  </div>
                  <p className="text-gray-700">
                    Schakelaar/ATS zodat de back-up-groep fysiek los van het net staat. Voor PV-micro-omvormers is vaak een MID/smart switch vereist.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-green-500" />
                    <h3 className="text-xl font-bold">3. Kritieke-groepen Verdeler</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Aparte groep(en) voor koelkast, modem, verlichting, werkplek, etc.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-red-500" />
                    <h3 className="text-xl font-bold">4. Correcte Installatie</h3>
                  </div>
                  <p className="text-gray-700">
                    Aarding/RCD's en bekabeling volgens <strong>NEN 1010</strong> (Nederlandse installatie-eisen).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-blue-800 mb-3">1-fase vs 3-fase Back-up</h4>
              <p className="text-blue-700">
                Veel systemen leveren back-up op <strong>1 fase</strong> (bijv. 3,6–5 kW continu). 
                Volledige 3-fase back-up kan, maar is duurder en vraagt specifiekere hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PV tijdens stroomuitval */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              PV Zonnepanelen tijdens Stroomuitval
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  ✅ DC-gekoppeld (Hybride omvormer)
                </h3>
                <p className="text-green-700">
                  PV kan doorgaans <strong>doorladen in eilandbedrijf</strong>. De hybride omvormer regelt zowel de batterij als de PV-panelen.
                </p>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">
                  ⚠️ AC-gekoppeld (Losse omvormers)
                </h3>
                <p className="text-yellow-700">
                  String/micro-omvormers stoppen normaal zonder netreferentie (anti-islanding). 
                  Alleen met grid-forming + MID of specifieke microgrid-oplossing kunnen ze meedraaien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensionering */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Snelle Dimensioneerregel voor Back-up
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Formule:</h3>
                <div className="text-lg font-mono bg-white rounded p-4 border-2 border-blue-200">
                  Benodigde accucapaciteit (kWh) = <br />
                  <span className="text-blue-600">(Kritiek vermogen kW × Gewenste uren)</span> ÷ <br />
                  <span className="text-green-600">(DoD × rond-trip efficiëntie)</span>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="font-bold text-yellow-800 mb-3">💡 Voorbeeld:</h4>
                <div className="space-y-2 text-gray-700">
                  <p>• Kritieke last: <strong>1 kW</strong></p>
                  <p>• Gewenste tijd: <strong>6 uur</strong></p>
                  <p>• DoD (Depth of Discharge): <strong>90%</strong></p>
                  <p>• Rond-trip efficiëntie: <strong>90%</strong></p>
                </div>
                <div className="mt-4 p-4 bg-white rounded border-2 border-yellow-300">
                  <p className="text-lg">
                    <strong>Berekening:</strong> 6 ÷ (0,90 × 0,90) = 6 ÷ 0,81 ≈ <span className="text-yellow-600 font-bold">7,4 kWh bruto</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/thuisbatterij-calculator"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white font-bold text-lg rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Calculator className="h-6 w-6 mr-3" />
                Bereken je Systeem Automatisch
                <ArrowRight className="h-6 w-6 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Veelgemaakte fouten */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-red-600">
              Veelgemaakte Fouten Checklist
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-600 mb-2">Heel het huis op back-up zetten</h3>
                    <p className="text-gray-700">
                      De omvormer kan maar 3–5 kW leveren. Plan alleen kritieke apparaten in.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-600 mb-2">Geen galvanische scheiding van het net</h3>
                    <p className="text-gray-700">
                      Dit is <strong>gevaarlijk en niet toegestaan</strong> volgens NEN 1010.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-600 mb-2">AC-gekoppelde PV verwachting</h3>
                    <p className="text-gray-700">
                      Denken dat AC-gekoppelde PV "vanzelf" blijft meedraaien zonder net. 
                      Dit is meestal <strong>niet</strong> het geval zonder speciale voorzieningen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klaar om je Eigen Thuisbatterij Systeem te Plannen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Gebruik onze calculator om de juiste batterijcapaciteit te berekenen of bekijk onze selectie van premium systemen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/thuisbatterij-calculator"
              className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-6 w-6 mr-3" />
              Start Calculator
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center px-8 py-4 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-700 transition-colors border-2 border-yellow-600"
            >
              <Battery className="h-6 w-6 mr-3" />
              Bekijk Systemen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}