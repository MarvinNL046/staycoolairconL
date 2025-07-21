import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Settings, Thermometer, Wind, Snowflake } from 'lucide-react';
import ArticleLayout from '../../components/ArticleLayout';
import MetaTags from '../../components/MetaTags';

const TosotHandleiding: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Tosot Airco Handleiding | StayCool Airco"
        description="Complete handleiding voor Tosot airconditioners. Installatie, bediening, onderhoud en probleemoplossing. Professionele tips van StayCool Airco Limburg."
        keywords="tosot airco handleiding, tosot airconditioning manual, tosot airco bediening, tosot airco onderhoud, tosot airco storingen"
        ogImage="/images/products/cosmo-indoor-vooraanzicht.webp"
      />
      
      <ArticleLayout
        title="Tosot Airco Handleiding"
        description="Complete gebruikershandleiding voor Tosot airconditioners"
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
                <p className="text-xl">Uw specialist voor Tosot airconditioners in Limburg</p>
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

        {/* Introductie Tosot */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Over Tosot</h2>
          <p className="mb-3">
            Tosot is een premium merk van Gree Electric, 's werelds grootste fabrikant van airconditioners. 
            Met meer dan 30 jaar ervaring staat Tosot bekend om betrouwbare, energiezuinige klimaatsystemen 
            met uitstekende prijs-kwaliteitverhouding.
          </p>
          <p>
            Deze handleiding helpt u het maximale uit uw Tosot airconditioner te halen. Voor professionele 
            installatie en service kunt u altijd terecht bij StayCool Airco.
          </p>
        </div>

        {/* Inhoudsopgave */}
        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Inhoudsopgave</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li><a href="#veiligheid" className="text-blue-600 hover:underline">Veiligheidsinstructies</a></li>
            <li><a href="#installatie" className="text-blue-600 hover:underline">Installatie-eisen</a></li>
            <li><a href="#bediening" className="text-blue-600 hover:underline">Bediening en instellingen</a></li>
            <li><a href="#functies" className="text-blue-600 hover:underline">Speciale functies</a></li>
            <li><a href="#onderhoud" className="text-blue-600 hover:underline">Onderhoud en reiniging</a></li>
            <li><a href="#storingen" className="text-blue-600 hover:underline">Probleemoplossing</a></li>
            <li><a href="#energie" className="text-blue-600 hover:underline">Energiebesparing</a></li>
            <li><a href="#service" className="text-blue-600 hover:underline">Service en garantie</a></li>
          </ol>
        </div>

        {/* Veiligheidsinstructies */}
        <section id="veiligheid" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">1. Veiligheidsinstructies</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-700 mb-2">Waarschuwingen</h3>
                <ul className="list-disc list-inside space-y-2 text-red-700">
                  <li>Installatie alleen door F-gassen gecertificeerde monteur</li>
                  <li>Gebruik de juiste stroomvoorziening (220-240V, 50Hz)</li>
                  <li>Raak geen elektrische onderdelen aan met natte handen</li>
                  <li>Stop geen voorwerpen in de luchtinlaat of -uitlaat</li>
                  <li>Gebruik geen ontvlambare stoffen nabij de unit</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">R32 Koudemiddel</h3>
              <ul className="space-y-2 text-sm">
                <li>• Licht ontvlambaar - geen open vuur</li>
                <li>• Ruimte moet goed geventileerd zijn</li>
                <li>• Minimale ruimtegrootte vereist</li>
                <li>• Lekdetectie jaarlijks laten uitvoeren</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Elektrische aansluiting</h3>
              <ul className="space-y-2 text-sm">
                <li>• Aparte groep met juiste zekering</li>
                <li>• Aardlekschakelaar verplicht</li>
                <li>• Waterdichte verbindingen buiten</li>
                <li>• Geen verlengsnoeren gebruiken</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installatie-eisen */}
        <section id="installatie" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">2. Installatie-eisen</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <p className="font-semibold text-blue-800">
              StayCool Airco verzorgt de complete installatie volgens fabrieksvoorschriften. 
              Onze monteurs zijn volledig gecertificeerd en garanderen een perfecte installatie.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4">Binnenunit plaatsing</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Hoogte:</strong> 2.3 - 2.8 meter van de vloer voor optimale luchtverdeling
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Vrije ruimte:</strong> Minimaal 15cm boven, 12cm zijkanten, 250cm voor de unit
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Locatie:</strong> Niet boven bed, niet in direct zonlicht, weg van warmtebronnen
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-4">Buitenunit plaatsing</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Ondergrond:</strong> Stevige beugel of betonnen plaat, waterpas gemonteerd
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Afstanden:</strong> 30cm achter, 60cm voor, 30cm zijkanten vrij
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Bescherming:</strong> Uit de wind, beschermd tegen vallende voorwerpen
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Bediening */}
        <section id="bediening" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">3. Bediening en instellingen</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Snowflake className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-bold mb-1">Koelen</h4>
              <p className="text-sm">16°C - 30°C</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <Thermometer className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h4 className="font-bold mb-1">Verwarmen</h4>
              <p className="text-sm">16°C - 30°C</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Wind className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-bold mb-1">Ventilator</h4>
              <p className="text-sm">Alleen circulatie</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Afstandsbediening functies</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Basisfuncties</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>ON/OFF:</strong> In- en uitschakelen</li>
                  <li><strong>MODE:</strong> Kies tussen koelen/verwarmen/auto/dry/fan</li>
                  <li><strong>TEMP ▲▼:</strong> Temperatuur instellen</li>
                  <li><strong>FAN:</strong> Ventilatorsnelheid (auto/low/med/high)</li>
                  <li><strong>SWING:</strong> Lamellen beweging aan/uit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Extra functies</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>TURBO:</strong> Maximale capaciteit voor snel resultaat</li>
                  <li><strong>SLEEP:</strong> Energiezuinige nachtstand</li>
                  <li><strong>TIMER:</strong> Automatisch in/uitschakelen</li>
                  <li><strong>LIGHT:</strong> Display verlichting aan/uit</li>
                  <li><strong>QUIET:</strong> Ultra stille modus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Speciale functies */}
        <section id="functies" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">4. Speciale Tosot functies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">I-Feel functie</h3>
              <p className="text-sm mb-2">
                De temperatuursensor in de afstandsbediening meet de temperatuur waar u zich bevindt, 
                niet bij de unit. Dit zorgt voor optimaal comfort op uw locatie.
              </p>
              <p className="text-sm font-semibold">Activeren: Druk 2x op de TURBO knop</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">8°C verwarmingsstand</h3>
              <p className="text-sm mb-2">
                Houdt de ruimte vorstvrij op 8°C. Ideaal voor vakantiewoningen, 
                garages of ruimtes die niet constant verwarmd hoeven worden.
              </p>
              <p className="text-sm font-semibold">Activeren: Temp op 8°C in verwarmingsmodus</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Zelfreiniging</h3>
              <p className="text-sm mb-2">
                Na uitschakelen blijft de ventilator draaien om vocht uit de unit te verwijderen. 
                Dit voorkomt schimmelvorming en geurtjes.
              </p>
              <p className="text-sm font-semibold">Automatisch actief na gebruik</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">WiFi Ready</h3>
              <p className="text-sm mb-2">
                Veel Tosot modellen zijn voorbereid op WiFi bediening. 
                Met de optionele WiFi module bedient u de airco via smartphone app.
              </p>
              <p className="text-sm font-semibold">Vraag StayCool naar de mogelijkheden</p>
            </div>
          </div>
        </section>

        {/* Onderhoud */}
        <section id="onderhoud" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">5. Onderhoud en reiniging</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <p className="font-semibold text-green-800">
              Goed onderhoud verlengt de levensduur en houdt het energieverbruik laag. 
              StayCool Airco biedt complete onderhoudscontracten vanaf €95 per jaar.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Onderhoudsschema gebruiker
          </h3>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Wat</th>
                  <th className="border p-3 text-left">Hoe vaak</th>
                  <th className="border p-3 text-left">Actie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Stoffilter</td>
                  <td className="border p-3">2 weken (zomer)<br/>Maandelijks (winter)</td>
                  <td className="border p-3">Uitzuigen of wassen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Behuizing</td>
                  <td className="border p-3">Maandelijks</td>
                  <td className="border p-3">Afnemen met vochtige doek</td>
                </tr>
                <tr>
                  <td className="border p-3">Luchtuitlaat</td>
                  <td className="border p-3">Maandelijks</td>
                  <td className="border p-3">Controleren op blokkades</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3">Afvoerleiding</td>
                  <td className="border p-3">Voor zomerseizoen</td>
                  <td className="border p-3">Controleren op verstopping</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-4">Filterreiniging stap voor stap</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">1.</span>
                <span>Schakel de airco uit en wacht 3 minuten</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">2.</span>
                <span>Open het frontpaneel door deze aan beide zijden omhoog te tillen</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">3.</span>
                <span>Til de filters uit de houders (meestal 2 stuks)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">4.</span>
                <span>Stofzuig de filters of was ze met lauwwarm water</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">5.</span>
                <span>Laat volledig drogen in de schaduw (nooit in de zon!)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">6.</span>
                <span>Plaats terug en sluit het paneel</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Storingen */}
        <section id="storingen" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">6. Probleemoplossing</h2>
          
          <h3 className="text-xl font-bold mb-4">Veelvoorkomende problemen</h3>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Airco start niet</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Controleer of stekker in stopcontact zit</li>
                <li>✓ Check de zekering/aardlekschakelaar</li>
                <li>✓ Vervang batterijen afstandsbediening</li>
                <li>✓ Wacht 3 minuten na uitschakelen</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Onvoldoende koeling/verwarming</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Reinig de filters</li>
                <li>✓ Controleer of ramen/deuren gesloten zijn</li>
                <li>✓ Check de ingestelde temperatuur</li>
                <li>✓ Controleer de modusinstelling</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Vreemde geluiden</h4>
              <ul className="text-sm space-y-1">
                <li>✓ Tikken/kraken = normale uitzetting</li>
                <li>✓ Ruisen = normale luchtstroom</li>
                <li>✓ Ratelen = mogelijk losse onderdelen</li>
                <li>✓ Piepen = mogelijk filtermelding</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Display codes</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Code</th>
                  <th className="border p-2 text-left">Betekenis</th>
                  <th className="border p-2 text-left">Actie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-mono">E1</td>
                  <td className="border p-2">Kamertemperatuur sensor fout</td>
                  <td className="border p-2">Service nodig</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">E2</td>
                  <td className="border p-2">Verdamper sensor fout</td>
                  <td className="border p-2">Service nodig</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono">E6</td>
                  <td className="border p-2">Communicatiefout</td>
                  <td className="border p-2">Reset unit, anders service</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">F0</td>
                  <td className="border p-2">Koudemiddel tekort</td>
                  <td className="border p-2">Service nodig</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono">H3</td>
                  <td className="border p-2">Compressor overbelasting</td>
                  <td className="border p-2">Wacht 30 min, anders service</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm">
              <strong>Tip:</strong> Bij storingscodes direct contact opnemen met StayCool Airco. 
              Wij hebben alle onderdelen op voorraad voor snelle reparatie.
            </p>
          </div>
        </section>

        {/* Energiebesparing */}
        <section id="energie" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">7. Energiebesparing</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Optimale temperatuur</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Koelen zomer:</span>
                  <strong>24-26°C</strong>
                </div>
                <div className="flex justify-between">
                  <span>Verwarmen winter:</span>
                  <strong>20-22°C</strong>
                </div>
                <div className="flex justify-between">
                  <span>Slaapkamer nacht:</span>
                  <strong>18-20°C</strong>
                </div>
              </div>
              <p className="text-sm mt-3 text-green-700">
                Elke graad scheelt 6-10% energieverbruik!
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Slimme tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Gebruik de timer functie</li>
                <li>• Activeer de ECO/Sleep modus</li>
                <li>• Houd filters schoon</li>
                <li>• Sluit gordijnen bij zon</li>
                <li>• Combineer met plafondventilator</li>
                <li>• Zone alleen gebruikte ruimtes</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Seizoenstips</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Zomer</h4>
                <ul className="space-y-1">
                  <li>• 's Nachts buitenlucht gebruiken</li>
                  <li>• Overdag ramen/gordijnen dicht</li>
                  <li>• Dry-mode bij hoge luchtvochtigheid</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Winter</h4>
                <ul className="space-y-1">
                  <li>• Ontdooi regelmatig de buitenunit</li>
                  <li>• Gebruik de 8°C vorstbeveiliging</li>
                  <li>• Zorg voor goede isolatie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service en garantie */}
        <section id="service" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">8. Service en garantie</h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">StayCool Airco Service</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Onze diensten:</h4>
                <ul className="space-y-2">
                  <li>✓ Vakkundige installatie</li>
                  <li>✓ Jaarlijks onderhoud vanaf €95</li>
                  <li>✓ 24/7 storingsdienst</li>
                  <li>✓ Garantieafhandeling</li>
                  <li>✓ Gratis advies</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3">Tosot garantie:</h4>
                <ul className="space-y-2">
                  <li>✓ 3 jaar fabrieksgarantie</li>
                  <li>✓ 6 jaar op compressor</li>
                  <li>✓ Verlengde garantie mogelijk</li>
                  <li>✓ Snelle levering onderdelen</li>
                  <li>✓ Erkend servicedealer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-center">Direct contact met StayCool</h3>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <a href="tel:046-2020178" className="bg-white p-4 rounded-lg hover:shadow-lg transition">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold">Bel direct</div>
                <div className="text-blue-600">046 - 202 0178</div>
              </a>
              
              <a href="mailto:info@staycoolairco.nl" className="bg-white p-4 rounded-lg hover:shadow-lg transition">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold">Email</div>
                <div className="text-blue-600 text-sm">info@staycoolairco.nl</div>
              </a>
              
              <div className="bg-white p-4 rounded-lg">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold">Werkgebied</div>
                <div className="text-gray-600">Heel Limburg</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="font-semibold mb-2">Openingstijden</p>
              <p>Ma-Vr: 08:00 - 17:00 | Za: 09:00 - 14:00</p>
              <p className="text-sm text-gray-600 mt-2">Storingsdienst 24/7 bereikbaar</p>
            </div>
          </div>
        </section>

        {/* Footer disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p className="mb-2">
            <strong>Disclaimer:</strong> Deze handleiding is opgesteld door StayCool Airco als algemene 
            gebruikersinformatie voor Tosot airconditioners. Raadpleeg altijd de specifieke handleiding 
            van uw model voor gedetailleerde instructies.
          </p>
          <p>
            Voor professionele installatie, onderhoud en reparatie van uw Tosot airconditioner bent u 
            bij StayCool Airco aan het juiste adres. Wij zijn officieel dealer en servicepoint.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
};

export default TosotHandleiding;