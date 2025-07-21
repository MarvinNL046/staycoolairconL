import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Settings, Thermometer, Wind, Droplets } from 'lucide-react';
import ArticleLayout from '../../components/ArticleLayout';
import MetaTags from '../../components/MetaTags';

const LGHandleiding: React.FC = () => {
  return (
    <>
      <MetaTags
        title="LG Airco Handleiding | StayCool Airco"
        description="Complete handleiding voor LG airconditioners. Installatie, bediening, onderhoud en probleemoplossing. Professionele tips van StayCool Airco Limburg."
        keywords="lg airco handleiding, lg airconditioning manual, lg airco bediening, lg airco onderhoud, lg airco storingen"
        ogImage="/images/products/lg-dualcool-indoor-premium.webp"
      />
      
      <ArticleLayout
        title="LG Airco Handleiding"
        description="Complete gebruikershandleiding voor LG airconditioners"
        author="StayCool Airco Team"
        publishDate="2025-01-11"
        modifiedDate="2025-01-11"
      >
        {/* StayCool Branding Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">StayCool Airco</h2>
                <p className="text-xl">Uw specialist voor LG airconditioners in Limburg</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5" />
                  <a href="tel:046-2020178" className="font-bold text-lg hover:underline">046 - 202 0178</a>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@staycoolairco.nl" className="hover:underline">info@staycoolairco.nl</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Heel Limburg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inhoudsopgave */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Inhoudsopgave</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><a href="#veiligheid" className="text-blue-600 hover:underline">Veiligheidsinstructies</a></li>
            <li><a href="#installatie" className="text-blue-600 hover:underline">Installatie-overzicht</a></li>
            <li><a href="#bediening" className="text-blue-600 hover:underline">Bediening en functies</a></li>
            <li><a href="#onderhoud" className="text-blue-600 hover:underline">Onderhoud en reiniging</a></li>
            <li><a href="#storingen" className="text-blue-600 hover:underline">Storingscodes en oplossingen</a></li>
            <li><a href="#energiebesparing" className="text-blue-600 hover:underline">Energiebesparende tips</a></li>
            <li><a href="#contact" className="text-blue-600 hover:underline">Service en contact</a></li>
          </ol>
        </div>

        {/* Veiligheidsinstructies */}
        <section id="veiligheid" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">1. Veiligheidsinstructies</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-700 mb-2">Belangrijke veiligheidswaarschuwingen</h3>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>Installatie moet door een erkende installateur worden uitgevoerd</li>
                  <li>Schakel altijd de stroom uit voordat u onderhoud uitvoert</li>
                  <li>Gebruik geen beschadigde stekkers of stopcontacten</li>
                  <li>Blokkeer nooit de luchtinlaat of -uitlaat</li>
                  <li>Plaats geen voorwerpen op de units</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                Elektrische veiligheid
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Gebruik een aparte groep met aardlekschakelaar</li>
                <li>• Controleer spanning: 220-240V / 50Hz</li>
                <li>• Minimale kabeldikte volgens installatievoorschriften</li>
                <li>• Waterdichte verbindingen bij buitenunit</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Koudemiddel veiligheid
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• R32 koudemiddel - licht ontvlambaar</li>
                <li>• Goede ventilatie vereist</li>
                <li>• Geen open vuur bij installatie/service</li>
                <li>• Alleen gecertificeerde monteurs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installatie-overzicht */}
        <section id="installatie" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">2. Installatie-overzicht</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="font-semibold text-yellow-800">
              Let op: Installatie moet altijd door een F-gassen gecertificeerde monteur worden uitgevoerd. 
              StayCool Airco is volledig gecertificeerd voor installatie van LG airconditioners.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Plaatsing binnenunit</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Minimaal 15 cm vrije ruimte boven de unit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Minimaal 12 cm aan beide zijkanten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Op ooghoogte voor optimale luchtverdeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Niet boven warmtebronnen of in direct zonlicht</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Plaatsing buitenunit</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Stevige, waterpasse ondergrond</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Minimaal 30 cm vrije ruimte rondom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Beschermd tegen extreme weersomstandigheden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Trillingdempers gebruiken</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bediening en functies */}
        <section id="bediening" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">3. Bediening en functies</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-orange-600" />
                Bedieningsmodi
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>Koelen:</strong> 16-30°C instelbaar
                </li>
                <li>
                  <strong>Verwarmen:</strong> 16-30°C instelbaar
                </li>
                <li>
                  <strong>Drogen:</strong> Ontvochtigen zonder koelen
                </li>
                <li>
                  <strong>Ventilator:</strong> Alleen luchtcirculatie
                </li>
                <li>
                  <strong>Auto:</strong> Automatische modus selectie
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-600" />
                Ventilatorsnelheden
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>Laag:</strong> Stil en energiezuinig
                </li>
                <li>
                  <strong>Midden:</strong> Balans comfort/geluid
                </li>
                <li>
                  <strong>Hoog:</strong> Maximale capaciteit
                </li>
                <li>
                  <strong>Auto:</strong> Past zich aan aan behoefte
                </li>
                <li>
                  <strong>Turbo:</strong> Snel koelen/verwarmen
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Speciale LG functies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Plasmaster Ionizer Plus</h4>
                <p className="text-sm">Verwijdert tot 99% van bacteriën en virussen uit de lucht</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Dual Inverter Compressor</h4>
                <p className="text-sm">Tot 70% energiebesparing en fluisterstil</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">ThinQ WiFi</h4>
                <p className="text-sm">Bedien uw airco vanaf elke locatie via smartphone</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">10 Year Warranty</h4>
                <p className="text-sm">LG biedt 10 jaar garantie op de compressor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">4. Onderhoud en reiniging</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <p className="font-semibold text-green-800">
              Regelmatig onderhoud verlengt de levensduur en houdt uw airco efficiënt. 
              StayCool Airco biedt onderhoudscontracten voor zorgeloos gebruik.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Onderhoudsschema
              </h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Onderdeel</th>
                    <th className="border p-3 text-left">Frequentie</th>
                    <th className="border p-3 text-left">Actie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Luchtfilters</td>
                    <td className="border p-3">Elke 2 weken</td>
                    <td className="border p-3">Reinigen of vervangen</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Binnenunit</td>
                    <td className="border p-3">Maandelijks</td>
                    <td className="border p-3">Afnemen met vochtige doek</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Buitenunit</td>
                    <td className="border p-3">Per kwartaal</td>
                    <td className="border p-3">Controleren op vuil/blokkades</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3">Professionele service</td>
                    <td className="border p-3">Jaarlijks</td>
                    <td className="border p-3">Door StayCool technicus</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Filter reinigen</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Schakel de airco uit en wacht tot de ventilator stopt</li>
                <li>Open het frontpaneel voorzichtig</li>
                <li>Verwijder de filters door ze omhoog te tillen</li>
                <li>Reinig met lauwwarm water en mild reinigingsmiddel</li>
                <li>Laat volledig drogen in de schaduw</li>
                <li>Plaats terug en sluit het paneel</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Storingscodes */}
        <section id="storingen" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">5. Storingscodes en oplossingen</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Code</th>
                  <th className="border p-3 text-left">Betekenis</th>
                  <th className="border p-3 text-left">Mogelijke oorzaak</th>
                  <th className="border p-3 text-left">Oplossing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-mono">CH01</td>
                  <td className="border p-3">Binnentemperatuur sensor fout</td>
                  <td className="border p-3">Sensor defect of los</td>
                  <td className="border p-3">Technicus inschakelen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-mono">CH02</td>
                  <td className="border p-3">Verdamper sensor fout</td>
                  <td className="border p-3">Sensor probleem</td>
                  <td className="border p-3">Technicus inschakelen</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">CH05</td>
                  <td className="border p-3">Communicatiefout</td>
                  <td className="border p-3">Verbinding binnen/buiten</td>
                  <td className="border p-3">Bekabeling controleren</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-mono">CH10</td>
                  <td className="border p-3">Ventilatormotor fout</td>
                  <td className="border p-3">Motor geblokkeerd</td>
                  <td className="border p-3">Blokkade verwijderen</td>
                </tr>
                <tr>
                  <td className="border p-3 font-mono">CL</td>
                  <td className="border p-3">Filter indicator</td>
                  <td className="border p-3">Filter moet gereinigd</td>
                  <td className="border p-3">Filter reinigen/vervangen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm">
              <strong>Tip:</strong> Bij storingscodes die niet in de lijst staan of terugkerende problemen, 
              neem contact op met StayCool Airco voor professionele diagnose en reparatie.
            </p>
          </div>
        </section>

        {/* Energiebesparing */}
        <section id="energiebesparing" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">6. Energiebesparende tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Optimale instellingen
              </h3>
              <ul className="space-y-2">
                <li>• Koelen: 24-26°C (elke graad lager = 10% meer verbruik)</li>
                <li>• Verwarmen: 20-22°C</li>
                <li>• Gebruik de ECO-modus waar mogelijk</li>
                <li>• Activeer de slaapstand 's nachts</li>
                <li>• Gebruik de timer-functie effectief</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-green-600" />
                Algemene tips
              </h3>
              <ul className="space-y-2">
                <li>• Houd deuren en ramen gesloten</li>
                <li>• Gebruik gordijnen tegen direct zonlicht</li>
                <li>• Reinig filters regelmatig</li>
                <li>• Zorg voor goede isolatie</li>
                <li>• Combineer met ventilatoren voor betere verdeling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">7. Service en contact</h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">StayCool Airco - Uw LG specialist</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-3">Onze services:</h4>
                <ul className="space-y-2">
                  <li>✓ Professionele installatie</li>
                  <li>✓ Jaarlijks onderhoud</li>
                  <li>✓ 24/7 storingsdienst</li>
                  <li>✓ Garantieafhandeling</li>
                  <li>✓ Advies op maat</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">Direct contact:</h4>
                <div className="space-y-3">
                  <a href="tel:046-2020178" className="flex items-center gap-2 hover:underline">
                    <Phone className="w-5 h-5" />
                    <span>046 - 202 0178</span>
                  </a>
                  <a href="mailto:info@staycoolairco.nl" className="flex items-center gap-2 hover:underline">
                    <Mail className="w-5 h-5" />
                    <span>info@staycoolairco.nl</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Werkzaam in heel Limburg</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-center">
                <strong>Spoed?</strong> Bel direct voor snelle service. 
                Wij staan 7 dagen per week voor u klaar!
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p>
            Deze handleiding is samengesteld door StayCool Airco en dient als algemene richtlijn voor LG airconditioners. 
            Raadpleeg altijd de specifieke handleiding van uw model voor gedetailleerde instructies. 
            Voor professionele installatie en service kunt u vertrouwen op StayCool Airco.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
};

export default LGHandleiding;