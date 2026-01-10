import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, ArrowRight, Phone, Sun, Home, Repeat, TrendingDown, Shield, Lightbulb, Cpu, AlertCircle } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const ThuisbatterijWerkingUitgelegd = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Werking uitgelegd' }
  ];

  const basisConcepten = [
    {
      icon: Battery,
      titel: "Energieopslag",
      uitleg: "Een thuisbatterij is in essentie een grote oplaadbare batterij die elektrische energie kan opslaan en weer afgeven wanneer nodig. Vergelijkbaar met de batterij in uw telefoon of laptop, maar dan veel groter en krachtiger."
    },
    {
      icon: Sun,
      titel: "Zonnestroomopslag",
      uitleg: "Overdag produceren zonnepanelen vaak meer stroom dan u direct verbruikt. Deze overschot wordt opgeslagen in de thuisbatterij in plaats van teruggeleverd aan het net tegen lage tarieven."
    },
    {
      icon: Home,
      titel: "Eigen verbruik",
      uitleg: "'s Avonds en 's nachts, wanneer de zonnepanelen geen stroom produceren, haalt u energie uit de batterij. U gebruikt dus uw eigen opgeslagen zonnestroon in plaats van dure stroom van het net."
    },
    {
      icon: TrendingDown,
      titel: "Kostenbesparing",
      uitleg: "Door slim gebruik van de batterij verbruikt u meer van uw eigen goedkope zonnestroom en koopt u minder dure stroom van het energiebedrijf. Dit resulteert in lagere energierekeningen."
    }
  ];

  const technischeWerking = [
    {
      fase: "Opladen (overdag)",
      beschrijving: "Wanneer uw zonnepanelen meer stroom produceren dan uw huis verbruikt, gaat het overschot naar de thuisbatterij.",
      details: [
        "Zonnepanelen produceren gelijkstroom (DC)",
        "Inverter/hybride omvormer regelt de stroomverdeling",
        "Overtollige energie laadt de batterijcellen op",
        "Batterijmanagementsysteem (BMS) bewaakt laadproces",
        "Bij volle batterij: overschot naar het net"
      ]
    },
    {
      fase: "Ontladen (avond/nacht)",
      beschrijving: "Als uw huis energie nodig heeft en de zonnepanelen leveren onvoldoende, komt de stroom uit de batterij.",
      details: [
        "Batterij levert gelijkstroom (DC)",
        "Omvormer zet DC om naar wisselstroom (AC)",
        "AC-stroom voedt uw huishoudelijke apparaten",
        "BMS controleert ontlaadsnelheid en diepte",
        "Bij lege batterij: stroom van het net"
      ]
    },
    {
      fase: "Netinteractie",
      beschrijving: "De thuisbatterij werkt naadloos samen met het elektriciteitsnet en uw zonnepanelen.",
      details: [
        "Slimme meter registreert in- en uitvoer",
        "Batterij balanceert vraag en aanbod",
        "Automatische omschakeling tussen bronnen",
        "Pieklast wordt afgevlakt",
        "Optionele noodstroomfunctie bij stroomuitval"
      ]
    }
  ];

  const belangrijkeComponenten = [
    {
      component: "Batterijcellen",
      icon: Battery,
      functie: "De batterijcellen vormen het hart van het systeem. Meestal lithium-ion technologie, soms lithium-ijzerfosfaat (LiFePO4).",
      kenmerken: [
        "Capaciteit van 5-20 kWh (standaard thuisgebruik)",
        "Laadcycli van 6.000-10.000 keer",
        "10-15 jaar levensduur",
        "Hoge energie-dichtheid",
        "Veilige chemische samenstelling"
      ]
    },
    {
      component: "Battery Management System (BMS)",
      icon: Cpu,
      functie: "De 'hersenen' van de batterij die alle processen bewaken en optimaliseren voor veiligheid en prestaties.",
      kenmerken: [
        "Bewaakt temperatuur per cel",
        "Balanceert lading tussen cellen",
        "Voorkomt over- en ontladen",
        "Detecteert afwijkingen en fouten",
        "Optimaliseert laad/ontlaadcycli"
      ]
    },
    {
      component: "Omvormer/Inverter",
      icon: Repeat,
      functie: "Zet gelijkstroom (DC) van batterij en zonnepanelen om naar wisselstroom (AC) voor uw huis.",
      kenmerken: [
        "Hybride omvormer combineert functies",
        "Efficiëntie van 95-98%",
        "Regelt stroomverdeling slim",
        "Communicatie met slimme meter",
        "Software-updates mogelijk"
      ]
    },
    {
      component: "Monitoring systeem",
      icon: Lightbulb,
      functie: "Software en app waarmee u real-time inzicht krijgt in energiestromen en batterijprestaties.",
      kenmerken: [
        "Visualisatie van energiestromen",
        "Historische data en grafieken",
        "Notificaties bij afwijkingen",
        "Afstandsbediening en instellingen",
        "Integratie met energietarieven"
      ]
    }
  ];

  const praktijkScenarios = [
    {
      scenario: "Zonnige dag met thuiswerken",
      tijdlijn: [
        { tijd: "07:00-09:00", actie: "Zonnepanelen starten productie, batterij vult aan voor ochtendverbruik" },
        { tijd: "09:00-12:00", actie: "Zonnepanelen op volle kracht, batterij laadt op, overschot naar net" },
        { tijd: "12:00-15:00", actie: "Hoog verbruik (koken, apparaten), direct van panelen + batterij ondersteunt" },
        { tijd: "15:00-18:00", actie: "Zonnepanelen nemen af, batterij neemt verbruik over" },
        { tijd: "18:00-23:00", actie: "Geen zon, piekverbruik volledig uit batterij" },
        { tijd: "23:00-07:00", actie: "Laag nachtverbruik uit batterij, evt. bijladen bij lage tarieven" }
      ],
      resultaat: "Zelfvoorzieningsgraad van 80-90%, minimale netafname"
    },
    {
      scenario: "Bewolkte dag met weinig zon",
      tijdlijn: [
        { tijd: "07:00-09:00", actie: "Batterij levert ochtendverbruik (geladen vorige dag of nachttarief)" },
        { tijd: "09:00-16:00", actie: "Beperkte zonproductie, batterij vult bij waar nodig" },
        { tijd: "16:00-23:00", actie: "Batterij levert avondverbruik tot leeg" },
        { tijd: "23:00-07:00", actie: "Batterij laadt op tegen lage nachttarief voor volgende dag" }
      ],
      resultaat: "Zelfvoorzieningsgraad van 40-60%, slim gebruik van tariefverschillen"
    },
    {
      scenario: "Weekend met hoog verbruik",
      tijdlijn: [
        { tijd: "Overdag", actie: "Zonnepanelen en batterij leveren samen voor hoog verbruik" },
        { tijd: "Avond", actie: "Batterij buffert piekverbruik (koken, entertainment)" },
        { tijd: "Nacht", actie: "Batterij laadt bij als nodig voor volgende dag" }
      ],
      resultaat: "Efficiënte piekvlakking voorkomt dure netpieken"
    }
  ];

  const slimmeFuncties = [
    {
      functie: "Dynamische tarieven",
      uitleg: "De batterij koppelt aan uw energiecontract en laadt op wanneer tarieven laag zijn en ontlaadt tijdens hoge tarieftijden. Dit maximaliseert uw besparing.",
      voordeel: "Extra €200-400 per jaar besparing bovenop zonnepanelen"
    },
    {
      functie: "Piekverbruik demping",
      uitleg: "Bij hoog plotseling verbruik (wasmachine, oven, EV-laden) springt de batterij bij. Dit voorkomt dat u tegen piektarieven van het net moet halen.",
      voordeel: "Vermijd piektarieven en transportkosten"
    },
    {
      functie: "Weersvoorspelling",
      uitleg: "Sommige systemen gebruiken weersvoorspellingen om te anticiperen op zonnige of bewolkte dagen en de batterijstrategie aan te passen.",
      voordeel: "Optimale benutting van beschikbare capaciteit"
    },
    {
      functie: "Noodstroomfunctie",
      uitleg: "Bij stroomuitval kan de batterij uw huis (of delen ervan) blijven voorzien van stroom. Dit vereist vaak extra hardware en installatie.",
      voordeel: "Continuïteit bij stroomstoringen (optioneel)"
    },
    {
      functie: "EV-integratie",
      uitleg: "Slimme afstemming met uw elektrische auto: laad de auto met overtollige zonnestroom of batterij-energie tegen lage tarieven.",
      voordeel: "Goedkoper en groener elektrisch rijden"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Hoe Werkt een Thuisbatterij? Complete Uitleg voor Beginners | StayCool Airco"
        description="Uitleg hoe een thuisbatterij werkt: van energieopslag tot slimme functies. Alles over de werking van thuisbatterijen."
        canonicalUrl="https://staycoolairco.nl/thuisbatterijen/noindex/thuisbatterij-werking-uitgelegd"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8" />
            <span className="text-green-100 font-semibold">Technische Uitleg</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hoe Werkt een Thuisbatterij?
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Simpele uitleg van de technologie achter thuisbatterijen - zonder ingewikkeld jargon
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Battery className="w-5 h-5" />
              <span>Energieopslag</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Slimme verdeling</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5" />
              <span>Kostenbesparing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Basisconcepten */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Het basisprincipe in 4 stappen</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Een thuisbatterij lijkt misschien complex, maar het basisprincipe is eenvoudig te begrijpen:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {basisConcepten.map((concept, index) => {
              const Icon = concept.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{concept.titel}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{concept.uitleg}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Simpel gezegd
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Een thuisbatterij werkt als een energiespaarpot: overdag stopt u er zonnestroom in, en 's avonds haalt u het er weer uit. Zo gebruikt u meer van uw eigen goedkope energie en minder dure stroom van het net. Het systeem doet dit volledig automatisch en optimaliseert continu voor maximale besparing.
            </p>
          </div>
        </div>
      </section>

      {/* Technische werking */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">De technische werking in detail</h2>
          <p className="text-gray-700 mb-8">
            Laten we dieper induiken in hoe een thuisbatterij technisch gezien werkt gedurende een dag:
          </p>

          <div className="space-y-6">
            {technischeWerking.map((fase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-5">
                  <h3 className="text-xl font-bold mb-1">{fase.fase}</h3>
                  <p className="text-green-100">{fase.beschrijving}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Wat er gebeurt:</h4>
                  <ul className="space-y-2">
                    {fase.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Componenten */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Belangrijke componenten</h2>
          <p className="text-gray-700 mb-8">
            Een thuisbatterij bestaat uit verschillende onderdelen die samenwerken:
          </p>

          <div className="space-y-6">
            {belangrijkeComponenten.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-5 border-b border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">{item.component}</h3>
                    </div>
                    <p className="text-gray-700">{item.functie}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Belangrijke kenmerken:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {item.kenmerken.map((kenmerk, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-gray-700">
                          <Zap className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-sm">{kenmerk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Praktijkscenarios */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Praktijkvoorbeelden: een dag met thuisbatterij</h2>
          <p className="text-gray-700 mb-8">
            Hoe werkt het in de praktijk? Bekijk deze typische scenario's:
          </p>

          <div className="space-y-8">
            {praktijkScenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5">
                  <h3 className="text-xl font-bold mb-2">{scenario.scenario}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {scenario.tijdlijn.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-32 font-bold text-blue-600">
                          {item.tijd}
                        </div>
                        <div className="flex-1 text-gray-700 border-l-2 border-blue-200 pl-4">
                          {item.actie}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 mb-1">Resultaat:</h4>
                    <p className="text-gray-700">{scenario.resultaat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slimme functies */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Slimme functies en optimalisaties</h2>
          <p className="text-gray-700 mb-8">
            Moderne thuisbatterijen zijn meer dan alleen een accu. Ze beschikken over slimme functies die uw besparing maximaliseren:
          </p>

          <div className="grid md:grid-cols-1 gap-6">
            {slimmeFuncties.map((item, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                    <Cpu className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.functie}</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed">{item.uitleg}</p>
                    <div className="bg-green-50 rounded-lg p-3">
                      <span className="font-semibold text-green-800">Voordeel: </span>
                      <span className="text-green-700">{item.voordeel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficiëntie */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Efficiëntie en energieverlies</h2>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Geen enkel energiesysteem is 100% efficiënt. Ook bij thuisbatterijen gaat er een klein beetje energie verloren:
            </p>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Typische efficiëntiecijfers:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-semibold text-gray-900">Laadefficiëntie</span>
                  <span className="text-green-600 font-bold">95-98%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-semibold text-gray-900">Ontlaadefficiëntie</span>
                  <span className="text-green-600 font-bold">95-98%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span className="font-semibold text-gray-900">Totale roundtrip efficiëntie</span>
                  <span className="text-blue-600 font-bold">90-96%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                  <span className="font-semibold text-gray-900">Standby-verbruik per dag</span>
                  <span className="text-yellow-600 font-bold">0.05-0.1 kWh</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Wat betekent dit in de praktijk?</strong> Als u 10 kWh in de batterij stopt, kunt u 9-9.6 kWh er weer uit halen. Het verlies van 4-10% wordt veroorzaakt door:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-gray-700">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Warmteontwikkeling tijdens laden en ontladen</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Conversie van DC naar AC en vice versa</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Zelfontlading van de batterijcellen</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Verbruik van de elektronica (BMS, monitoring)</span>
              </li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">Is dit erg?</h3>
              <p className="text-gray-700">
                Nee, deze efficiëntie is zeer goed. Het kleine verlies wordt ruimschoots goedgemaakt door de besparing die u behaalt door meer eigen zonnestroom te gebruiken en te profiteren van dynamische tarieven. Een thuisbatterij blijft zeer rendabel ondanks dit minimale verlies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Veiligheid */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Veiligheid en bescherming</h2>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Veiligheid staat voorop bij moderne thuisbatterijen. Meerdere systemen werken samen om risico's te voorkomen:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Thermische beveiliging</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Temperatuursensoren per batterijcel</li>
                  <li>• Automatische koeling bij te hoge temperatuur</li>
                  <li>• Nooduitschakeling bij oververhitting</li>
                  <li>• Brandwerende behuizing (vereist)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-gray-900">Elektrische beveiliging</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Bescherming tegen overladen</li>
                  <li>• Bescherming tegen te diep ontladen</li>
                  <li>• Kortsluitbeveiliging</li>
                  <li>• Aardlek en overspanningsbeveiliging</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-gray-900">Software monitoring</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Continue prestatiemonitoring</li>
                  <li>• Automatische foutdetectie</li>
                  <li>• Remote diagnostics door fabrikant</li>
                  <li>• Software-updates voor verbeteringen</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                  <h3 className="font-bold text-gray-900">Fysieke veiligheid</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Stevige metalen behuizing</li>
                  <li>• IP-rating voor stof en vocht</li>
                  <li>• Veilige wandmontage of statief</li>
                  <li>• Ventilatie voor warmteafvoer</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-2">Conclusie veiligheid</h3>
              <p className="text-gray-700">
                Moderne thuisbatterijen van gerenommeerde merken zijn zeer veilig door meerdere beveiligingslagen. Mits correct geïnstalleerd door een gecertificeerde installateur, is het risico op problemen extreem klein. De technologie is bewezen en wordt wereldwijd in miljoenen huishoudens veilig gebruikt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gerelateerde informatie */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde informatie</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/thuisbatterijen" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Battery className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Thuisbatterijen overzicht</span>
              </div>
              <p className="text-gray-600 text-sm">Alle informatie, merken en specificaties</p>
            </Link>

            <Link to="/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-installeren-stappen" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Home className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Installatie stappen</span>
              </div>
              <p className="text-gray-600 text-sm">Van locatie kiezen tot inbedrijfstelling</p>
            </Link>

            <Link to="/seo/pillar-5-thuisbatterijen/noindex/thuisbatterij-wanneer-rendabel" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Wanneer rendabel?</span>
              </div>
              <p className="text-gray-600 text-sm">Bereken of een thuisbatterij loont voor u</p>
            </Link>

            <Link to="/contact" className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-600">Advies op maat</span>
              </div>
              <p className="text-gray-600 text-sm">Gratis persoonlijk advies over thuisbatterijen</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Nu u weet hoe het werkt - klaar voor uw eigen thuisbatterij?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Onze specialisten helpen u graag met persoonlijk advies en een offerte op maat
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Gratis adviesgesprek
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+31612345678"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Direct bellen
            </a>
          </div>
          <p className="mt-6 text-green-200 text-sm">
            ✓ Onafhankelijk advies ✓ Scherpe prijzen ✓ Ervaren installateurs in Limburg
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThuisbatterijWerkingUitgelegd;
