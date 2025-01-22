import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Wind, Droplets, AlertTriangle, CheckCircle, Clock, Calendar, HelpCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AircoLuchtfilterOnderhoud = () => {
  const filterTypes = [
    {
      name: "Voorfilter",
      description: "Vangt grote stofdeeltjes en pluizen",
      cleaningInterval: "Maandelijks",
      replacementInterval: "1-2 jaar",
      importance: "Beschermt andere filters en systeem"
    },
    {
      name: "HEPA Filter",
      description: "Filtert microscopische deeltjes en allergenen",
      cleaningInterval: "Niet reinigbaar",
      replacementInterval: "1-2 jaar",
      importance: "Verbetert luchtkwaliteit significant"
    },
    {
      name: "Koolstoffilter",
      description: "Absorbeert geuren en schadelijke gassen",
      cleaningInterval: "Niet reinigbaar",
      replacementInterval: "6-12 maanden",
      importance: "Elimineert ongewenste geuren"
    },
    {
      name: "Plasma Filter",
      description: "Ioniseert lucht en vangt fijnstof",
      cleaningInterval: "3-6 maanden",
      replacementInterval: "2-3 jaar",
      importance: "Verwijdert microscopische deeltjes"
    }
  ];

  const maintenanceSteps = [
    {
      title: "Voorbereiding",
      steps: [
        "Schakel de airco uit",
        "Open het voorpaneel voorzichtig",
        "Verwijder de filters volgens handleiding",
        "Leg een handdoek klaar voor eventueel stof"
      ]
    },
    {
      title: "Reiniging",
      steps: [
        "Stofzuig de filters voorzichtig",
        "Was met lauw water (max. 40°C)",
        "Gebruik geen agressieve schoonmaakmiddelen",
        "Spoel grondig na"
      ]
    },
    {
      title: "Droging",
      steps: [
        "Laat natuurlijk drogen in de schaduw",
        "Vermijd direct zonlicht",
        "Zorg voor volledige droging",
        "Gebruik geen föhn of verwarming"
      ]
    },
    {
      title: "Terugplaatsing",
      steps: [
        "Controleer op beschadigingen",
        "Plaats terug in juiste richting",
        "Sluit voorpaneel zorgvuldig",
        "Test de airco werking"
      ]
    }
  ];

  // Table of Contents items
  const tocItems = [
    { id: "inleiding", title: "Inleiding" },
    { id: "soorten", title: "Soorten Filters" },
    { id: "onderhoud", title: "Onderhoudsstappen" },
    { id: "frequentie", title: "Onderhoudsfrequentie" },
    { id: "tips", title: "Tips & Adviezen" },
    { id: "vervanging", title: "Wanneer Vervangen?" }
  ];

  return (
    <ArticleLayout
      title="Airco Luchtfilter Onderhoud: Complete Gids 2025"
      description="Alles over het onderhoud van airco luchtfilters. Van reinigingstips tot vervangingsadvies - zorg optimaal voor je airconditioning filters."
      publishDate="2025-01-22"
      modifiedDate="2025-01-22"
      author="StayCool Airconditioning"
      tags={['Onderhoud', 'Filters', 'Luchtkwaliteit', 'Tips']}
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
            <Wind className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-blue-900 mt-0 mb-2">Waarom Filteronderhoud?</h3>
              <p className="m-0 text-blue-800">
                Goed onderhouden luchtfilters zijn essentieel voor optimale prestaties 
                en gezonde lucht. Ze verbeteren de efficiëntie en verlengen de levensduur 
                van je airco.
              </p>
            </div>
          </div>
        </div>

        <h2 id="inleiding">Inleiding</h2>
        <p>
          Luchtfilters zijn een cruciaal onderdeel van je airconditioning. Ze zorgen 
          niet alleen voor schone lucht, maar beschermen ook het systeem tegen vuil en 
          stof. Regelmatig onderhoud is daarom essentieel.
        </p>

        <h2 id="soorten">Soorten Filters</h2>
        <p>
          Moderne airconditioners gebruiken verschillende types filters, elk met hun 
          eigen functie:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {filterTypes.map((filter) => (
            <div 
              key={filter.name}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4 mt-0">
                {filter.name}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 m-0">
                  {filter.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Reiniging: {filter.cleaningInterval}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Vervanging: {filter.replacementInterval}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{filter.importance}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 id="onderhoud">Onderhoudsstappen</h2>
        <p>
          Volg deze stappen voor het juiste onderhoud van je luchtfilters:
        </p>

        <div className="space-y-6 my-8">
          {maintenanceSteps.map((section, index) => (
            <div 
              key={section.title}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3">
                  {index + 1}
                </span>
                {section.title}
              </h3>
              <ul className="space-y-2 m-0">
                {section.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 my-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="text-yellow-900 mt-0 mb-2">Belangrijke Waarschuwing</h3>
              <p className="m-0 text-yellow-800">
                Gebruik nooit heet water of agressieve schoonmaakmiddelen. Dit kan de 
                filters beschadigen en de filtratiecapaciteit verminderen. Lees ook onze 
                <Link to="/kennisbank/onderhoudstips" className="text-yellow-800 underline"> onderhoudstips</Link> voor 
                meer informatie.
              </p>
            </div>
          </div>
        </div>

        <h2 id="frequentie">Onderhoudsfrequentie</h2>
        <p>
          De juiste onderhoudsfrequentie hangt af van verschillende factoren:
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 border-l-4 border-blue-500">
          <ul className="space-y-4 m-0">
            <li className="flex items-start">
              <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <strong>Gebruiksintensiteit:</strong> Dagelijks gebruik vereist 
                maandelijkse controle
              </div>
            </li>
            <li className="flex items-start">
              <Droplets className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <strong>Omgevingsfactoren:</strong> Stoffige omgeving vraagt 
                frequenter onderhoud
              </div>
            </li>
            <li className="flex items-start">
              <Zap className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <strong>Seizoensgebruik:</strong> Extra controle bij start van 
                nieuwe seizoen
              </div>
            </li>
          </ul>
        </div>

        <h2 id="tips">Tips & Adviezen</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-green-900 mt-0">Preventieve Tips</h3>
            <ul className="space-y-2 mb-0">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Houd deuren en ramen gesloten tijdens gebruik</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Stofzuig regelmatig de ruimte</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Voorkom roken in de ruimte</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 id="vervanging">Wanneer Vervangen?</h2>
        <p>
          Vervang je filters als je een van deze signalen opmerkt:
        </p>
        <ul>
          <li>Verminderde luchtstroom</li>
          <li>Onaangename geuren</li>
          <li>Zichtbare beschadigingen</li>
          <li>Hardnekkige vervuiling</li>
          <li>Na de aanbevolen gebruiksduur</li>
        </ul>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Professionele Hulp Nodig?</h2>
          <p className="text-blue-100 mb-6">
            Wil je je filters laten controleren of vervangen door een expert? 
            Onze monteurs staan voor je klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Plan onderhoud in
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

export default AircoLuchtfilterOnderhoud;
