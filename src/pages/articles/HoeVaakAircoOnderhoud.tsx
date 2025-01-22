import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { Calendar, Wrench, AlertTriangle, CheckCircle, ThermometerSun, Clock, PiggyBank, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const HoeVaakAircoOnderhoud = () => {
  const maintenanceSchedule = [
    {
      frequency: "Maandelijks",
      tasks: [
        "Filters controleren en schoonmaken",
        "Visuele inspectie op lekkages",
        "Controleren van ongewone geluiden"
      ]
    },
    {
      frequency: "Per Seizoen",
      tasks: [
        "Grondige filterreiniging",
        "Controle van de condensafvoer",
        "Inspectie van de binnen- en buitenunit"
      ]
    },
    {
      frequency: "Jaarlijks",
      tasks: [
        "Professionele onderhoudsbeurt",
        "Controle van het koudemiddel",
        "Reiniging van de warmtewisselaar"
      ]
    }
  ];

  const benefits = [
    {
      icon: PiggyBank,
      title: "Lagere Energiekosten",
      description: "Tot 30% besparing op energieverbruik door optimale werking"
    },
    {
      icon: Clock,
      title: "Langere Levensduur",
      description: "Verlenging van de levensduur met 3-5 jaar door regelmatig onderhoud"
    },
    {
      icon: ThermometerSun,
      title: "Betere Prestaties",
      description: "Constante en efficiënte koeling en verwarming"
    },
    {
      icon: Leaf,
      title: "Gezondere Lucht",
      description: "Schone filters zorgen voor betere luchtkwaliteit"
    }
  ];

  // Table of Contents items
  const tocItems = [
    { id: "inleiding", title: "Inleiding" },
    { id: "waarom-onderhoud", title: "Waarom Regelmatig Onderhoud?" },
    { id: "onderhoudsfrequentie", title: "Hoe Vaak Onderhoud?" },
    { id: "onderhoudstaken", title: "Onderhoudstaken per Interval" },
    { id: "professioneel-onderhoud", title: "Wanneer Professioneel Onderhoud?" },
    { id: "kosten-besparen", title: "Kosten Besparen met Onderhoud" },
    { id: "conclusie", title: "Conclusie" }
  ];

  return (
    <ArticleLayout
      title="Hoe Vaak Airco Onderhoud? Complete Onderhoudsgids"
      description="Ontdek hoe vaak je airco onderhoud nodig heeft en wat de beste intervallen zijn voor verschillende onderhoudstaken. Inclusief praktische tips en kostenbesparende adviezen."
      publishDate="2024-01-17"
      modifiedDate="2024-01-17"
      author="StayCool Airconditioning"
      tags={['Onderhoud', 'Airconditioning', 'Handleiding', 'Tips']}
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

        <h2 id="inleiding">Inleiding</h2>
        <p>
          <strong>Hoe vaak airco onderhoud</strong> nodig is, is een van de meest gestelde vragen 
          door airco-eigenaren. Het juiste onderhoudsinterval is cruciaal voor de levensduur en 
          efficiëntie van je systeem. In dit artikel bespreken we de optimale onderhoudsfrequentie 
          en wat je zelf kunt doen versus wanneer je een professional moet inschakelen.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-8">
          <h3 className="text-blue-900 mt-0">Snelle Feiten over Airco Onderhoud</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>Minimaal 1x per jaar professioneel onderhoud</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>Maandelijkse filtercontrole aanbevolen</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>2x per jaar seizoenscontrole</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
              <span>30% energiebesparing door goed onderhoud</span>
            </li>
          </ul>
        </div>

        <h2 id="waarom-onderhoud">Waarom Regelmatig Onderhoud?</h2>
        <p>
          Regelmatig onderhoud van je airconditioning is essentieel voor optimale prestaties en 
          een lange levensduur. Lees meer over het belang van onderhoud in ons artikel over 
          <Link to="/kennisbank/onderhoudstips" className="text-blue-600 hover:text-blue-800"> onderhoudstips</Link>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold ml-4 mt-0">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 m-0">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <h2 id="onderhoudsfrequentie">Hoe Vaak Onderhoud?</h2>
        <p>
          De frequentie van airco onderhoud hangt af van verschillende factoren. Voor een 
          uitgebreid overzicht, bekijk ons <Link to="/kennisbank/onderhoudsschema" className="text-blue-600 hover:text-blue-800">onderhoudsschema</Link>. 
          Hier zijn de belangrijkste richtlijnen:
        </p>

        <div className="space-y-6 my-8">
          {maintenanceSchedule.map((schedule) => (
            <div 
              key={schedule.frequency}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                {schedule.frequency}
              </h3>
              <ul className="space-y-2 m-0">
                {schedule.tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <Wrench className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-1" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 id="onderhoudstaken">Onderhoudstaken per Interval</h2>
        <p>
          Voor specifieke onderhoudstaken en hoe je deze zelf kunt uitvoeren, 
          bekijk onze <Link to="/kennisbank/onderhoudstips" className="text-blue-600 hover:text-blue-800">onderhoudstips</Link>. 
          Let op de volgende signalen die aangeven dat onderhoud nodig is:
        </p>

        <div className="bg-yellow-50 rounded-xl p-6 my-8">
          <h3 className="text-yellow-900 mt-0 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2" />
            Waarschuwingssignalen
          </h3>
          <ul className="space-y-2 mb-0">
            <li>Verminderde koeling of verwarming</li>
            <li>Hogere energierekening</li>
            <li>Ongewone geluiden</li>
            <li>Onaangename geuren</li>
            <li>Water lekkage</li>
          </ul>
        </div>

        <h2 id="professioneel-onderhoud">Wanneer Professioneel Onderhoud?</h2>
        <p>
          Hoewel je veel onderhoudstaken zelf kunt uitvoeren, is professioneel onderhoud 
          minstens één keer per jaar noodzakelijk. Bij <Link to="/" className="text-blue-600 hover:text-blue-800">StayCool Airconditioning</Link> bieden 
          we verschillende onderhoudsservices aan. Bekijk onze <Link to="/onderhoud" className="text-blue-600 hover:text-blue-800">onderhoudspagina</Link> voor 
          meer informatie.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 my-8">
          <h3 className="text-lg font-semibold mb-2">Expert Tip</h3>
          <p className="m-0">
            Plan je jaarlijkse onderhoudsbeurt in het voorjaar, voordat het koelseizoen 
            begint. Zo ben je verzekerd van optimale prestaties tijdens de warme zomermaanden.
          </p>
        </div>

        <h2 id="kosten-besparen">Kosten Besparen met Onderhoud</h2>
        <p>
          Regelmatig onderhoud lijkt misschien een kostenpost, maar levert op termijn juist 
          besparingen op. Lees meer over energiebesparing in ons artikel over 
          <Link to="/kennisbank/co2-reductie" className="text-blue-600 hover:text-blue-800"> CO2-reductie</Link>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-green-900 mt-0">Directe Besparingen</h3>
            <ul className="mb-0">
              <li>20-30% lager energieverbruik</li>
              <li>Minder reparatiekosten</li>
              <li>Langere levensduur apparatuur</li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-blue-900 mt-0">Indirecte Voordelen</h3>
            <ul className="mb-0">
              <li>Betere luchtkwaliteit</li>
              <li>Hoger comfort</li>
              <li>Minder uitval in piekseizoen</li>
            </ul>
          </div>
        </div>

        <h2 id="conclusie">Conclusie</h2>
        <p>
          De vraag "hoe vaak airco onderhoud" is niet met één antwoord te beantwoorden. 
          Het hangt af van je gebruik, maar als vuistregel geldt:
        </p>
        <ul>
          <li>Maandelijks: Basis filtercontrole</li>
          <li>Per seizoen: Grondige inspectie</li>
          <li>Jaarlijks: Professioneel onderhoud</li>
        </ul>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Onderhoud Inplannen?</h2>
          <p className="text-blue-100 mb-6">
            Wilt u zeker weten dat uw airco optimaal blijft presteren? Plan direct uw onderhoudsbeurt in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/onderhoud"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
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

export default HoeVaakAircoOnderhoud;
