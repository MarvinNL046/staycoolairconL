import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle, Phone, Wrench, XCircle, TrendingDown, Clock, Euro } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoProblemenVoorkomen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Onderhoud Limburg', path: '/kennisbank/airco-onderhoud-limburg' },
    { label: 'Problemen Voorkomen' }
  ];

  const veelvoorkomendeProblemen = [
    {
      icon: TrendingDown,
      probleem: 'Verminderde koelprestaties',
      oorzaak: 'Vuile filters, laag koudemiddel, verstopte condensor',
      gevolg: 'Tot 30% hoger energieverbruik, oncomfortabele temperaturen',
      preventie: 'Maandelijks filters reinigen, jaarlijks koudemiddel laten controleren',
      severity: 'high'
    },
    {
      icon: AlertTriangle,
      probleem: 'Waterlekkage binnenunit',
      oorzaak: 'Verstopte condensafvoer, vuile drainage pan',
      gevolg: 'Waterschade aan muren en vloeren, schimmelvorming',
      preventie: 'Maandelijks condensafvoer controleren en reinigen',
      severity: 'high'
    },
    {
      icon: XCircle,
      probleem: 'Ongebruikelijke geluiden',
      oorzaak: 'Losse onderdelen, slijtage aan ventilator of motor',
      gevolg: 'Verdere schade aan mechanische componenten, storing',
      preventie: 'Direct laten inspecteren bij afwijkende geluiden',
      severity: 'medium'
    },
    {
      icon: Clock,
      probleem: 'Airco start niet of valt uit',
      oorzaak: 'Elektrische problemen, defect onderdeel, verkeerde thermostaat',
      gevolg: 'Complete uitval systeem, geen koeling of verwarming',
      preventie: 'Jaarlijks elektrische verbindingen laten controleren',
      severity: 'high'
    },
    {
      icon: Euro,
      probleem: 'Hoog energieverbruik',
      oorzaak: 'Slecht onderhoud, verouderde componenten, lekkages',
      gevolg: '20-40% hogere energiekosten dan noodzakelijk',
      preventie: 'Regelmatig onderhoud en optimale instellingen',
      severity: 'medium'
    },
    {
      icon: Shield,
      probleem: 'IJsvorming op leidingen',
      oorzaak: 'Te laag koudemiddel, beperkte luchtstroom',
      gevolg: 'Schade aan compressor, complete systeemuitval',
      preventie: 'Filters schoonhouden, koudemiddelniveau controleren',
      severity: 'high'
    }
  ];

  const preventieMaatregelen = [
    {
      categorie: 'Dagelijks/Wekelijks',
      items: [
        'Visuele inspectie op lekkages of schade',
        'Luister naar ongebruikelijke geluiden',
        'Check of airco normale temperatuur bereikt',
        'Houd omgeving van units schoon en vrij'
      ]
    },
    {
      categorie: 'Maandelijks',
      items: [
        'Filters reinigen of vervangen',
        'Condensafvoer controleren op verstoppingen',
        'Buitenunit vrijmaken van obstakels en vuil',
        'Thermostaat instellingen optimaliseren'
      ]
    },
    {
      categorie: 'Per Seizoen',
      items: [
        'Voorjaar: systeem voorbereiden op koelseizoen',
        'Najaar: grondige reiniging na intensief gebruik',
        'Winter: vorstbescherming en verwarmingsmodus testen',
        'Professionele inspectie voor- en najaar'
      ]
    },
    {
      categorie: 'Jaarlijks (Professional)',
      items: [
        'Complete systeeminspectie door erkend monteur',
        'Koudemiddelniveau meten en bijvullen',
        'Elektrische verbindingen controleren',
        'Mechanische onderdelen smeren en testen'
      ]
    }
  ];

  const waarschuwingssignalen = [
    {
      signaal: 'Verminderde luchtstroom',
      actie: 'Direct filters controleren, mogelijk professionele reiniging nodig',
      urgent: true
    },
    {
      signaal: 'Vreemde geuren (muf, brandlucht)',
      actie: 'Onmiddellijk uitschakelen en monteur bellen',
      urgent: true
    },
    {
      signaal: 'Frequente aan/uit schakeling',
      actie: 'Thermostaat en elektrische systeem laten controleren',
      urgent: false
    },
    {
      signaal: 'Hoger energieverbruik',
      actie: 'Onderhoud plannen, systeem evaluatie adviseren',
      urgent: false
    },
    {
      signaal: 'Water bij binnen- of buitenunit',
      actie: 'Binnen 24 uur laten inspecteren, voorkomen waterschade',
      urgent: true
    },
    {
      signaal: 'Bevriezing op units of leidingen',
      actie: 'Systeem uitschakelen, direct professionele hulp',
      urgent: true
    }
  ];

  const kostenBesparing = [
    {
      scenario: 'Preventief onderhoud',
      kosten: '€11-16/maand',
      besparing: 'Voorkom reparaties van €300-800',
      roi: '600-2000%'
    },
    {
      scenario: 'Energie-efficiëntie',
      kosten: '€179/jaar onderhoud',
      besparing: '€150-300/jaar energiebesparing',
      roi: '84-168%'
    },
    {
      scenario: 'Levensduur verlenging',
      kosten: '€179/jaar onderhoud',
      besparing: '3-5 jaar extra levensduur (€1500-3000)',
      roi: '838-1677%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Problemen Voorkomen - Preventie & Tips | StayCool Airco"
        description="Voorkom veelvoorkomende airco problemen door slecht onderhoud. Ontdek preventieve maatregelen, waarschuwingssignalen en wanneer u een expert moet inschakelen."
        canonicalUrl="https://staycoolairco.nl/airco-onderhoud/noindex/problemen-voorkomen"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airco Problemen Voorkomen
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Voorkom dure reparaties en storingen met preventief onderhoud.
            Ontdek veelvoorkomende problemen en hoe u deze vroegtijdig kunt signaleren.
          </p>
        </div>
      </section>

      {/* Waarom Preventie */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Waarom preventief onderhoud?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 text-center">
              <Euro className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-green-900 mb-2">Kostenbesparing</h3>
              <p className="text-green-800">Voorkom reparaties van €300-800 met onderhoud van €11/maand</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 text-center">
              <TrendingDown className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-900 mb-2">Energie-efficiëntie</h3>
              <p className="text-blue-800">Bespaar 20-40% op energiekosten met optimaal onderhoud</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600 text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-purple-900 mb-2">Langere Levensduur</h3>
              <p className="text-purple-800">Verleng levensduur met 3-5 jaar door regelmatig onderhoud</p>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Slecht onderhoud is de hoofdoorzaak van 80% van alle airco storingen. De meeste
              problemen zijn te voorkomen met regelmatige controles en tijdig ingrijpen.
              Preventief onderhoud bespaart niet alleen geld, maar zorgt ook voor comfort en
              gemoedsrust.
            </p>
          </div>
        </div>
      </section>

      {/* Veelvoorkomende Problemen */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Veelvoorkomende problemen door slecht onderhoud</h2>
          <div className="space-y-6">
            {veelvoorkomendeProblemen.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                  item.severity === 'high' ? 'border-red-600' : 'border-yellow-600'
                }`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-3 rounded-full ${
                    item.severity === 'high' ? 'bg-red-100' : 'bg-yellow-100'
                  }`}>
                    <item.icon className={`h-8 w-8 ${
                      item.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{item.probleem}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        item.severity === 'high'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.severity === 'high' ? 'Hoge impact' : 'Gemiddelde impact'}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Oorzaak:</p>
                        <p className="text-gray-600">{item.oorzaak}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">Gevolg:</p>
                        <p className="text-gray-600">{item.gevolg}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-600">
                      <p className="text-sm font-semibold text-green-900 mb-1">
                        <CheckCircle className="h-4 w-4 inline mr-1" />
                        Preventie:
                      </p>
                      <p className="text-green-800">{item.preventie}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preventie Maatregelen */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Preventieve maatregelen per periode</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {preventieMaatregelen.map((categorie, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{categorie.categorie}</h3>
                <ul className="space-y-3">
                  {categorie.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarschuwingssignalen */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Waarschuwingssignalen: Wanneer expert inschakelen?</h2>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Let op deze signalen die wijzen op problemen. Bij urgente signalen onmiddellijk handelen:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {waarschuwingssignalen.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                  item.urgent ? 'border-red-600' : 'border-yellow-600'
                }`}
              >
                <div className="flex items-start mb-3">
                  <AlertTriangle className={`h-6 w-6 mr-3 flex-shrink-0 mt-0.5 ${
                    item.urgent ? 'text-red-600' : 'text-yellow-600'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{item.signaal}</h3>
                      {item.urgent && (
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          URGENT
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{item.actie}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-2 border-red-600">
            <h3 className="font-bold text-red-900 mb-4 flex items-center text-xl">
              <Phone className="h-6 w-6 mr-2" />
              Wanneer direct bellen?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Waterlekkage bij binnenunit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Vreemde geuren (brandlucht, chemisch)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>IJsvorming op leidingen of unit</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Complete uitval of niet meer opstarten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Ongebruikelijke harde geluiden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>Elektrische problemen (kortssluiting)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kosten vs Besparing */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Investering vs Besparing: De rekensom
          </h2>
          <div className="space-y-6">
            {kostenBesparing.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border-l-4 border-green-600">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                    <p className="text-sm text-gray-600">Investering</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{item.kosten}</p>
                    <p className="text-sm text-gray-600">Onderhoud kosten</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{item.besparing}</p>
                    <p className="text-sm text-gray-600">Besparing/voorkoming</p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-3xl font-bold text-green-700">{item.roi}</p>
                    <p className="text-sm text-gray-600">Return on Investment</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-blue-900 font-semibold">
              💡 <strong>Conclusie:</strong> Elke euro geïnvesteerd in preventief onderhoud levert
              6-20 euro op in besparingen op reparaties, energie en vervanging. Preventief onderhoud
              is niet een kostenpost, maar een investering die zichzelf ruimschoots terugbetaalt.
            </p>
          </div>
        </div>
      </section>

      {/* Professioneel vs DIY */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Wat kunt u zelf, wat niet?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200 shadow-md">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Zelf Uitvoeren (Veilig)
              </h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Filters maandelijks reinigen/vervangen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Buitenkant units schoonvegen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Visuele inspectie op schade/lekkages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Omgeving vrijhouden van obstakels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Thermostaat instellingen optimaliseren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Condensafvoer visueel controleren</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200 shadow-md">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <XCircle className="h-6 w-6 mr-2" />
                Nooit Zelf Doen (Gevaarlijk)
              </h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Koudemiddel bijvullen of controleren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Elektrische aansluitingen repareren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Interne componenten demonteren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Compressor of motor repareren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Leidingen lassen of aanpassen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Elektronica diagnostiek of reparatie</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
            <p className="text-yellow-900 font-semibold flex items-start">
              <AlertTriangle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Waarschuwing:</strong> Werken aan koudemiddel, elektrische systemen of
                interne componenten zonder certificering is illegaal en gevaarlijk. Dit kan leiden
                tot verwondingen, systeemschade en verlies van garantie. Laat dit altijd aan erkende
                professionals over.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Link naar Pillar Page */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Meer over airco onderhoud</h2>
          <Link
            to="/kennisbank/airco-onderhoud-limburg"
            className="block p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600 group"
          >
            <h3 className="font-bold text-blue-600 text-xl mb-2 group-hover:text-blue-700">
              → Airco Onderhoud Limburg - Complete Gids
            </h3>
            <p className="text-gray-700">
              Ontdek alles over professioneel airco onderhoud: waarom het essentieel is,
              wat er bij een onderhoudsbeurt gebeurt, prijzen en hoe u kunt besparen met een contract.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voorkom Problemen met Professioneel Onderhoud
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Investeer €11/maand en bespaar honderden euro's aan reparaties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:046-202-1430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              046 - 202 1430
            </a>
            <Link
              to="/kennisbank/airco-onderhoud-limburg"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-400 transition-colors border-2 border-white"
            >
              <Wrench className="h-5 w-5 mr-2" />
              Meer informatie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AircoProblemenVoorkomen;
