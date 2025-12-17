import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sun, Snowflake, Leaf, Umbrella, Phone, CheckCircle, AlertTriangle, Wrench } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoOnderhoudsSeizoen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Onderhoud Limburg', path: '/kennisbank/airco-onderhoud-limburg' },
    { label: 'Seizoensonderhoud' }
  ];

  const voorjaarsonderhoud = [
    {
      title: 'Filters reinigen of vervangen',
      description: 'Verwijder stof en pollen die zich tijdens de winter hebben opgehoopt',
      priority: 'Hoog'
    },
    {
      title: 'Buitenunit vrijmaken',
      description: 'Verwijder bladeren, vuil en obstakels rondom de buitenunit',
      priority: 'Hoog'
    },
    {
      title: 'Condensafvoer controleren',
      description: 'Controleer en reinig de condensafvoer om verstoppingen te voorkomen',
      priority: 'Gemiddeld'
    },
    {
      title: 'Proefdraaien koelmodus',
      description: 'Test de koelfunctie voordat het warme weer aanbreekt',
      priority: 'Hoog'
    },
    {
      title: 'Thermostaat kalibreren',
      description: 'Check of de temperatuurinstellingen correct werken',
      priority: 'Gemiddeld'
    }
  ];

  const najaarsonderhoud = [
    {
      title: 'Grondige reiniging',
      description: 'Reinig binnen- en buitenunit na intensief zomergebruik',
      priority: 'Hoog'
    },
    {
      title: 'Filters vervangen',
      description: 'Vervang filters voor optimale luchtkwaliteit in de winter',
      priority: 'Hoog'
    },
    {
      title: 'Proefdraaien verwarmingsmodus',
      description: 'Test de verwarmingsfunctie voordat de koude periode begint',
      priority: 'Hoog'
    },
    {
      title: 'Isolatie controleren',
      description: 'Check leidingen en aansluitingen op beschadigde isolatie',
      priority: 'Gemiddeld'
    },
    {
      title: 'Winterbescherming installeren',
      description: 'Overweeg beschermhoes voor buitenunit indien niet gebruikt in winter',
      priority: 'Laag'
    }
  ];

  const wintervoorbereiding = [
    'Laatste grondige reiniging voor winterperiode',
    'Controleer op lekkages en vorstschade-risico',
    'Verwarmingsmodus testen indien van toepassing',
    'Filters vervangen voor goede luchtkwaliteit',
    'Drainage systeem controleren op vorst',
    'Overweeg beschermkap voor buitenunit'
  ];

  const zomervoorbereiding = [
    'Start seizoen met professionele onderhoudsbeurt',
    'Filters schoonmaken voor optimale luchtstroom',
    'Buitenunit vrijmaken en reinigen',
    'Koelmiddelniveau laten controleren',
    'Thermostaat optimaliseren voor zomergebruik',
    'Condensafvoer doorspuiten'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Onderhoud per Seizoen - Planning & Tips | StayCool Airco"
        description="Ontdek wanneer u uw airco moet onderhouden per seizoen. Voorjaars- en najaarsonderhoud, winterklaar maken en zomervoorbereiding tips."
        canonicalUrl="https://staycoolairco.nl/airco-onderhoud/noindex/seizoenen"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airco Onderhoud per Seizoen
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Optimaal airco onderhoud op het juiste moment. Plan uw onderhoud slim
            en voorkom problemen met onze seizoensgebonden onderhoudskalender.
          </p>
        </div>
      </section>

      {/* Waarom Seizoensonderhoud */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Waarom seizoensgebonden onderhoud?</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Uw airconditioner werkt het hele jaar door, maar heeft per seizoen andere
              onderhoudsbehoefen. Door onderhoud af te stemmen op de seizoenen, bereidt u uw
              airco optimaal voor op de komende periode en voorkomt u onverwachte storingen.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Voordelen van seizoensonderhoud
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Voorkom storingen tijdens piekperiodes</li>
                  <li>• Optimale prestaties het hele jaar door</li>
                  <li>• Lagere energiekosten door efficiënt gebruik</li>
                  <li>• Verlengde levensduur van uw systeem</li>
                  <li>• Betere luchtkwaliteit in alle seizoenen</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Risico's bij verwaarlozing
                </h3>
                <ul className="space-y-2 text-orange-800">
                  <li>• Storing tijdens hittegolf of vriesperiode</li>
                  <li>• Verhoogd energieverbruik en kosten</li>
                  <li>• Vervuilde filters beïnvloeden gezondheid</li>
                  <li>• Vorstschade aan leidingen in winter</li>
                  <li>• Dure reparaties door preventabel probleem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voorjaarsonderhoud */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="bg-green-600 p-3 rounded-full mr-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Voorjaarsonderhoud (Maart - Mei)</h2>
              <p className="text-green-700">Maak uw airco klaar voor het koelseizoen</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <p className="text-lg text-gray-600 mb-6">
              De lente is het ideale moment om uw airco voor te bereiden op intensief zomergebruik.
              Na de winterperiode heeft uw systeem een grondige opfrisbeurt nodig.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Voorjaars checklist:</h3>
            <div className="space-y-4">
              {voorjaarsonderhoud.map((taak, index) => (
                <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900">{taak.title}</h4>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        taak.priority === 'Hoog' ? 'bg-red-100 text-red-800' :
                        taak.priority === 'Gemiddeld' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {taak.priority}
                      </span>
                    </div>
                    <p className="text-gray-600">{taak.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-100 border-l-4 border-green-600 p-4 rounded-r-lg">
              <p className="text-green-900 font-semibold flex items-start">
                <Sun className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Timing tip:</strong> Plan uw voorjaarsonderhoud tussen half maart en
                  begin mei, vóór de eerste hittegolf. Zo voorkomt u wachttijden tijdens de drukke zomerperiode.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zomergebruik */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="bg-orange-600 p-3 rounded-full mr-4">
              <Sun className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Zomerperiode (Juni - Augustus)</h2>
              <p className="text-orange-700">Intensief gebruik en tussentijdse controles</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
              Tijdens de zomer draait uw airco op volle toeren. Regelmatige tussentijdse
              controles zijn essentieel om problemen vroegtijdig te signaleren.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                  Maandelijkse controles
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span>Filters elke 2-3 weken reinigen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span>Condensafvoer controleren op verstoppingen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span>Buitenunit vrijhouden van obstakels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 font-bold">•</span>
                    <span>Ongebruikelijke geluiden of geuren melden</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                  Let op deze signalen
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">⚠</span>
                    <span>Verminderde koelprestaties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">⚠</span>
                    <span>Waterlekkage bij binnenunit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">⚠</span>
                    <span>IJsvorming op leidingen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">⚠</span>
                    <span>Hoger stroomverbruik dan normaal</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded-r-lg">
              <p className="text-yellow-900 font-semibold">
                <strong>Zomertip:</strong> Stel de thermostaat niet te koud in (ideaal: 22-24°C).
                Dit bespaart energie en voorkomt overbelasting van uw systeem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Najaarsonderhoud */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="bg-orange-600 p-3 rounded-full mr-4">
              <Umbrella className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Najaarsonderhoud (September - November)</h2>
              <p className="text-orange-700">Afronding zomerseizoen en wintervoorbereiding</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <p className="text-lg text-gray-600 mb-6">
              Na intensief zomergebruik verdient uw airco een grondige onderhoudsbeurt.
              Het najaar is ook het moment om uw systeem voor te bereiden op de winterperiode.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Najaarschecklist:</h3>
            <div className="space-y-4">
              {najaarsonderhoud.map((taak, index) => (
                <div key={index} className="flex items-start p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900">{taak.title}</h4>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        taak.priority === 'Hoog' ? 'bg-red-100 text-red-800' :
                        taak.priority === 'Gemiddeld' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {taak.priority}
                      </span>
                    </div>
                    <p className="text-gray-600">{taak.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-orange-100 border-l-4 border-orange-600 p-4 rounded-r-lg">
              <p className="text-orange-900 font-semibold flex items-start">
                <Umbrella className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Timing tip:</strong> Plan najaarsonderhoud in september of oktober,
                  voordat de verwarmingsperiode begint. Dit is ook een rustige periode voor monteurs.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Winterperiode */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="bg-blue-600 p-3 rounded-full mr-4">
              <Snowflake className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Winterperiode (December - Februari)</h2>
              <p className="text-blue-700">Bescherming en verwarmingsmodus</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
              In de winter kan uw airco op twee manieren worden gebruikt: als verwarming (met
              warmtepomp functie) of stilgelegd tot het voorjaar. Beide scenario's vereisen specifieke aandacht.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center">
                  <Snowflake className="h-6 w-6 mr-2" />
                  Airco met verwarmingsfunctie
                </h3>
                <ul className="space-y-3 text-blue-800">
                  {zomervoorbereiding.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  Airco buiten gebruik (alleen koelen)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {wintervoorbereiding.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <p className="text-blue-900 font-semibold flex items-start">
                <Snowflake className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Vorstbescherming:</strong> Bij temperaturen onder 0°C is het risico
                  op bevriezing van leidingen aanwezig. Zorg voor goede isolatie of laat het
                  systeem maandelijks kort draaien om stilstand te voorkomen.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professioneel Onderhoudscontract */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Zorgeloos met een onderhoudscontract
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-lg p-8 border-2 border-green-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Wat is inbegrepen?
                </h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Jaarlijkse professionele onderhoudsbeurt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Seizoensgebonden checks (voor- en najaar)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Prioriteit bij storing of reparatie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Korting op eventuele reparaties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Automatische herinnering voor onderhoud</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-gray-900 mb-4">Tarieven onderhoudscontract</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-700">1 airco unit</span>
                      <span className="text-2xl font-bold text-green-600">€11</span>
                    </div>
                    <span className="text-sm text-gray-500">per maand</span>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-700">2+ airco units</span>
                      <span className="text-2xl font-bold text-green-600">€16</span>
                    </div>
                    <span className="text-sm text-gray-500">per maand</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-700">Losse beurt</span>
                      <span className="text-xl font-bold text-gray-600">€179</span>
                    </div>
                    <span className="text-sm text-gray-500">eenmalig</span>
                  </div>
                </div>
                <div className="mt-6 bg-green-100 p-3 rounded">
                  <p className="text-sm text-green-900 font-semibold">
                    💰 Bespaar tot €47 per jaar met een contract!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar Pillar Page */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Meer over airco onderhoud</h2>
          <Link
            to="/kennisbank/airco-onderhoud-limburg"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600 group"
          >
            <h3 className="font-bold text-blue-600 text-xl mb-2 group-hover:text-blue-700">
              → Airco Onderhoud Limburg - Complete Gids
            </h3>
            <p className="text-gray-600">
              Ontdek alles over professioneel airco onderhoud, waarom het belangrijk is,
              wat er bij een onderhoudsbeurt gebeurt en hoe u kunt besparen met een contract.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Wrench className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plan Uw Seizoensonderhoud
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Laat uw airco professioneel onderhouden op het juiste moment
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
              Meer informatie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AircoOnderhoudsSeizoen;
