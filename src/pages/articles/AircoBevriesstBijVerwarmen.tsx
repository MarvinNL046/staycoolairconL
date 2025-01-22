import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Snowflake, ThermometerSun, AlertTriangle, CheckCircle, Droplets, Wind, Settings, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AircoBevriesstBijVerwarmen = () => {
  const commonCauses = [
    {
      icon: Droplets,
      title: "Vochtige Omgeving",
      description: "Te hoge luchtvochtigheid rond de unit",
      solution: "Zorg voor goede ventilatie en controleer de condensafvoer"
    },
    {
      icon: Wind,
      title: "Slechte Luchtcirculatie",
      description: "Geblokkeerde luchtstroming",
      solution: "Verwijder obstakels en reinig de filters"
    },
    {
      icon: Settings,
      title: "Technische Problemen",
      description: "Defecte sensoren of koudemiddeltekort",
      solution: "Laat een professional de installatie controleren"
    },
    {
      icon: ThermometerSun,
      title: "Temperatuurinstellingen",
      description: "Onjuiste instellingen voor de omstandigheden",
      solution: "Pas de temperatuur en ventilatorsnelheid aan"
    }
  ];

  const preventionTips = [
    {
      title: "Regelmatig Onderhoud",
      steps: [
        "Maandelijkse filtercontrole",
        "Seizoensgebonden inspectie",
        "Jaarlijkse professionele controle"
      ]
    },
    {
      title: "Optimale Instellingen",
      steps: [
        "Gebruik automatische ontdooiing",
        "Stel juiste temperatuur in",
        "Kies geschikte ventilatorsnelheid"
      ]
    },
    {
      title: "Omgevingsfactoren",
      steps: [
        "Zorg voor goede ventilatie",
        "Voorkom tocht rond buitenunit",
        "Controleer luchtvochtigheid"
      ]
    }
  ];

  // Table of Contents items
  const tocItems = [
    { id: "inleiding", title: "Inleiding" },
    { id: "oorzaken", title: "Oorzaken van Bevriezing" },
    { id: "herkennen", title: "Symptomen Herkennen" },
    { id: "preventie", title: "Preventieve Maatregelen" },
    { id: "oplossingen", title: "Directe Oplossingen" },
    { id: "professionele-hulp", title: "Wanneer Expert Inschakelen?" }
  ];

  return (
    <ArticleLayout
      title="Airco Bevriest bij Verwarmen? Oorzaken & Oplossingen"
      description="Ontdek waarom je airco bevriest tijdens het verwarmen en hoe je dit kunt voorkomen. Complete gids met praktische tips en oplossingen."
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

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <Snowflake className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-blue-900 mt-0 mb-2">Belangrijke Informatie</h3>
              <p className="m-0 text-blue-800">
                Een bevroren airco tijdens het verwarmen is een veelvoorkomend probleem, 
                maar kan meestal eenvoudig worden voorkomen. Lees hieronder wat je kunt 
                doen om dit te voorkomen en op te lossen.
              </p>
            </div>
          </div>
        </div>

        <h2 id="inleiding">Inleiding</h2>
        <p>
          Wanneer je airco bevriest tijdens het verwarmen, kan dit verschillende oorzaken 
          hebben. Dit probleem komt vooral voor tijdens koude en vochtige dagen. In dit 
          artikel bespreken we de oorzaken en oplossingen voor een bevroren airco in de 
          verwarmingsmodus.
        </p>

        <h2 id="oorzaken">Oorzaken van Bevriezing</h2>
        <p>
          Er zijn verschillende factoren die kunnen leiden tot bevriezing van je airco 
          tijdens het verwarmen:
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

        <h2 id="herkennen">Symptomen Herkennen</h2>
        <p>
          Het is belangrijk om de tekenen van bevriezing vroeg te herkennen om ernstige 
          problemen te voorkomen. Bekijk ook onze <Link to="/kennisbank/veelvoorkomende-problemen" className="text-blue-600 hover:text-blue-800">veelvoorkomende problemen</Link> pagina 
          voor meer informatie.
        </p>

        <div className="bg-yellow-50 rounded-xl p-6 my-8">
          <h3 className="text-yellow-900 mt-0 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2" />
            Waarschuwingssignalen
          </h3>
          <ul className="space-y-2 mb-0">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
              <span>IJsvorming op de buitenunit</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
              <span>Verminderde verwarmingscapaciteit</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
              <span>Ongewone geluiden tijdens werking</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
              <span>Water druppelen of lekkage</span>
            </li>
          </ul>
        </div>

        <h2 id="preventie">Preventieve Maatregelen</h2>
        <p>
          Voorkomen is beter dan genezen. Hier zijn enkele belangrijke preventieve 
          maatregelen die je kunt nemen:
        </p>

        <div className="space-y-6 my-8">
          {preventionTips.map((tip) => (
            <div 
              key={tip.title}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                {tip.title}
              </h3>
              <ul className="space-y-2 m-0">
                {tip.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <Settings className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-1" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 id="oplossingen">Directe Oplossingen</h2>
        <p>
          Als je airco toch bevroren is, volg dan deze stappen:
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 border-l-4 border-blue-500">
          <ol className="space-y-4 m-0">
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">1</span>
              <div>
                <strong>Zet de Airco Uit</strong>
                <p className="mt-1 mb-0">
                  Schakel het systeem uit en laat het natuurlijk ontdooien. Forceer 
                  het ontdooiingsproces niet met externe warmtebronnen.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">2</span>
              <div>
                <strong>Controleer de Filters</strong>
                <p className="mt-1 mb-0">
                  Reinig of vervang de filters volgens onze <Link to="/kennisbank/onderhoudstips" className="text-blue-600 hover:text-blue-800">onderhoudstips</Link>.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">3</span>
              <div>
                <strong>Controleer de Omgeving</strong>
                <p className="mt-1 mb-0">
                  Verwijder obstakels rond de units en zorg voor goede luchtcirculatie.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">4</span>
              <div>
                <strong>Pas Instellingen Aan</strong>
                <p className="mt-1 mb-0">
                  Gebruik de juiste temperatuurinstellingen en ventilatorsnelheid voor 
                  de omstandigheden.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-green-50 rounded-xl p-6 my-8">
          <h3 className="text-green-900 mt-0">Expert Tips</h3>
          <ul className="space-y-2 mb-0">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>Gebruik de automatische ontdooiingsfunctie indien beschikbaar</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>Houd de omgevingstemperatuur stabiel</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>Plan regelmatig onderhoud in</span>
            </li>
          </ul>
        </div>

        <h2 id="professionele-hulp">Wanneer Expert Inschakelen?</h2>
        <p>
          In sommige gevallen is het noodzakelijk om professionele hulp in te schakelen:
        </p>
        <ul>
          <li>Regelmatig terugkerende bevriezing</li>
          <li>Abnormale geluiden tijdens ontdooiing</li>
          <li>Zichtbare schade aan de unit</li>
          <li>Verminderde prestaties na ontdooiing</li>
        </ul>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Hulp Nodig?</h2>
          <p className="text-blue-100 mb-6">
            Blijft je airco bevriezen of wil je preventief onderhoud inplannen? 
            Onze experts staan voor je klaar.
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

export default AircoBevriesstBijVerwarmen;
