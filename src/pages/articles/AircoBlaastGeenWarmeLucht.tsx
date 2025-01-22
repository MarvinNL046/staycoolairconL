import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { ThermometerSun, AlertTriangle, CheckCircle, Wrench, Settings, Battery, Snowflake, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AircoBlaastGeenWarmeLucht = () => {
  const commonCauses = [
    {
      icon: ThermometerSun,
      title: "Temperatuurinstelling",
      description: "Verkeerde temperatuurinstelling of modus",
      solution: "Controleer of de juiste verwarmingsmodus is geselecteerd en stel de gewenste temperatuur hoger in dan de kamertemperatuur."
    },
    {
      icon: Battery,
      title: "Koudemiddel",
      description: "Te weinig koudemiddel in het systeem",
      solution: "Laat een professional het koudemiddelniveau controleren en indien nodig bijvullen."
    },
    {
      icon: Settings,
      title: "Technisch Probleem",
      description: "Defecte onderdelen of sensoren",
      solution: "Schakel een erkend monteur in voor diagnose en reparatie van technische problemen."
    },
    {
      icon: Snowflake,
      title: "Bevroren Systeem",
      description: "IJsvorming op de warmtewisselaar",
      solution: "Laat het systeem ontdooien en controleer de ontdooiingsfunctie."
    }
  ];

  const quickChecks = [
    {
      title: "Controleer de Afstandsbediening",
      steps: [
        "Staat de juiste modus ingesteld? (HEAT)",
        "Is de temperatuur hoog genoeg ingesteld?",
        "Zijn de batterijen nog goed?"
      ]
    },
    {
      title: "Controleer de Binnenunit",
      steps: [
        "Zijn de filters schoon?",
        "Is de luchtuitlaat geblokkeerd?",
        "Draait de ventilator normaal?"
      ]
    },
    {
      title: "Controleer de Buitenunit",
      steps: [
        "Is de unit niet geblokkeerd?",
        "Draait de ventilator?",
        "Zijn er ongewone geluiden?"
      ]
    }
  ];

  // Table of Contents items
  const tocItems = [
    { id: "inleiding", title: "Inleiding" },
    { id: "oorzaken", title: "Mogelijke Oorzaken" },
    { id: "snelle-controles", title: "Snelle Controles" },
    { id: "stap-voor-stap", title: "Stap-voor-Stap Diagnose" },
    { id: "preventie", title: "Preventieve Maatregelen" },
    { id: "professionele-hulp", title: "Wanneer Professional Inschakelen?" }
  ];

  return (
    <ArticleLayout
      title="Airco Blaast Geen Warme Lucht? Oorzaken & Oplossingen"
      description="Ontdek waarom je airco geen warme lucht blaast en hoe je dit kunt oplossen. Van snelle checks tot professionele diagnose - alle oplossingen op een rij."
      publishDate="2025-01-22"
      modifiedDate="2025-01-22"
      author="StayCool Airconditioning"
      tags={['Problemen', 'Verwarming', 'Onderhoud', 'Troubleshooting']}
    >
      <section className="prose prose-lg max-w-none">
        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Inhoudsopgave</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className="text-blue-600 hover:text-blue-800 no-underline hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-yellow-800 mt-0 mb-2">Let op!</h3>
              <p className="m-0 text-yellow-700">
                Als je airco helemaal geen lucht blaast of andere problemen vertoont, 
                bekijk dan eerst onze <Link to="/kennisbank/veelvoorkomende-problemen" className="text-yellow-700 underline">veelvoorkomende problemen</Link> pagina.
              </p>
            </div>
          </div>
        </div>

        <h2 id="inleiding">Inleiding</h2>
        <p>
          Een airco die geen warme lucht blaast kan zeer vervelend zijn, vooral tijdens 
          koude dagen. Dit probleem kan verschillende oorzaken hebben, van eenvoudige 
          instellingen tot technische storingen. In dit artikel bespreken we alle mogelijke 
          oorzaken en oplossingen.
        </p>

        <h2 id="oorzaken">Mogelijke Oorzaken</h2>
        <p>
          Voordat je een monteur belt, zijn er verschillende zaken die je zelf kunt 
          controleren. Hier zijn de meest voorkomende oorzaken:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {commonCauses.map((cause) => (
            <div 
              key={cause.title}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <cause.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold ml-4 mt-0">
                  {cause.title}
                </h3>
              </div>
              <p className="text-gray-700 font-medium mb-2">
                {cause.description}
              </p>
              <p className="text-gray-600 m-0">
                <strong>Oplossing:</strong> {cause.solution}
              </p>
            </div>
          ))}
        </div>

        <h2 id="snelle-controles">Snelle Controles</h2>
        <p>
          Voordat je verdergaat met uitgebreide diagnose, voer eerst deze snelle controles uit:
        </p>

        <div className="space-y-6 my-8">
          {quickChecks.map((check) => (
            <div 
              key={check.title}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                {check.title}
              </h3>
              <ul className="space-y-2 m-0">
                {check.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <Wrench className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-1" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 id="stap-voor-stap">Stap-voor-Stap Diagnose</h2>
        <p>
          Als de snelle controles geen oplossing bieden, volg dan deze uitgebreide diagnose:
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 border-l-4 border-blue-500">
          <ol className="space-y-4 m-0">
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">1</span>
              <div>
                <strong>Controleer de Basisinstellingen</strong>
                <p className="mt-1 mb-0">
                  Zorg dat de temperatuur minimaal 2°C hoger staat dan de huidige 
                  kamertemperatuur. Meer over temperatuurinstellingen lees je in ons artikel 
                  over <Link to="/kennisbank/verwarmen-met-airco" className="text-blue-600 hover:text-blue-800">verwarmen met airco</Link>.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">2</span>
              <div>
                <strong>Inspecteer de Filters</strong>
                <p className="mt-1 mb-0">
                  Vuile filters kunnen de luchtstroom beperken. Bekijk onze 
                  <Link to="/kennisbank/onderhoudstips" className="text-blue-600 hover:text-blue-800"> onderhoudstips</Link> voor 
                  het juist reinigen van filters.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">3</span>
              <div>
                <strong>Check de Buitenunit</strong>
                <p className="mt-1 mb-0">
                  Controleer of de buitenunit niet bedekt is met sneeuw, ijs of vuil. 
                  De unit moet vrij kunnen ademen.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">4</span>
              <div>
                <strong>Luister naar Ongewone Geluiden</strong>
                <p className="mt-1 mb-0">
                  Vreemde geluiden kunnen wijzen op technische problemen. Raadpleeg onze 
                  <Link to="/kennisbank/veelvoorkomende-problemen" className="text-blue-600 hover:text-blue-800"> probleemoplossingsgids</Link> bij 
                  verdachte geluiden.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <h2 id="preventie">Preventieve Maatregelen</h2>
        <p>
          Voorkomen is beter dan genezen. Hier zijn enkele tips om problemen met verwarming te voorkomen:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-green-900 mt-0">Regelmatig Onderhoud</h3>
            <ul className="mb-0">
              <li>Plan jaarlijks professioneel onderhoud</li>
              <li>Reinig maandelijks de filters</li>
              <li>Controleer regelmatig de buitenunit</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-blue-900 mt-0">Optimaal Gebruik</h3>
            <ul className="mb-0">
              <li>Voorkom extreme temperatuurinstellingen</li>
              <li>Houd deuren en ramen gesloten</li>
              <li>Gebruik de timer-functie slim</li>
            </ul>
          </div>
        </div>

        <h2 id="professionele-hulp">Wanneer Professional Inschakelen?</h2>
        <p>
          Schakel direct een professional in bij:
        </p>
        <ul>
          <li>Vreemde geluiden of geuren</li>
          <li>Geen verbetering na bovenstaande checks</li>
          <li>Foutcodes op het display</li>
          <li>Lekkage of ijsvorming</li>
        </ul>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Hulp Nodig?</h2>
          <p className="text-blue-100 mb-6">
            Komt u er niet uit of wilt u zeker weten dat uw airco optimaal functioneert? 
            Onze experts staan voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Direct hulp aanvragen
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-blue-600"
            >
              Bel direct: 046 202 1430
            </a>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default AircoBlaastGeenWarmeLucht;
