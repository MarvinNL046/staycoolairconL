import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { MapPin, Ruler, Volume2, Wind, AlertTriangle, CheckCircle, Sun, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AircoBuitenunitPlaatsing = () => {
  const placementFactors = [
    {
      icon: MapPin,
      title: "Locatie",
      requirements: [
        "Minimaal 30cm vanaf de muur",
        "Vrije luchtcirculatie mogelijk",
        "Beschut tegen extreme weersomstandigheden",
        "Toegankelijk voor onderhoud"
      ]
    },
    {
      icon: Volume2,
      title: "Geluid",
      requirements: [
        "Niet direct naast slaapkamerraam",
        "Minimaal 3 meter van buren",
        "Gebruik trillingdempers",
        "Vermijd resonantie met muren"
      ]
    },
    {
      icon: Sun,
      title: "Omgeving",
      requirements: [
        "Beschermd tegen direct zonlicht",
        "Goede afwatering mogelijk",
        "Vrij van vallende bladeren",
        "Stabiele ondergrond"
      ]
    },
    {
      icon: Wind,
      title: "Luchtstroming",
      requirements: [
        "Geen obstakels voor uitblaas",
        "Minimaal 15cm vrije ruimte boven unit",
        "Voorkom recirculatie van lucht",
        "Bescherming tegen sterke wind"
      ]
    }
  ];

  const commonMistakes = [
    {
      title: "Te dicht op de muur",
      consequences: "Verminderde efficiëntie, meer geluid",
      solution: "Gebruik wandbeugels voor juiste afstand"
    },
    {
      title: "Slechte afwatering",
      consequences: "Wateroverlast, mogelijke schade",
      solution: "Installeer condensafvoer of verhoog unit"
    },
    {
      title: "Onvoldoende ventilatie",
      consequences: "Verminderde prestaties, hoger verbruik",
      solution: "Zorg voor voldoende vrije ruimte rondom"
    },
    {
      title: "Instabiele montage",
      consequences: "Extra trillingen en geluid",
      solution: "Gebruik professionele montagebeugels"
    }
  ];

  // Table of Contents items
  const tocItems = [
    { id: "inleiding", title: "Inleiding" },
    { id: "locatie", title: "Ideale Locatie" },
    { id: "eisen", title: "Plaatsingseisen" },
    { id: "fouten", title: "Veelgemaakte Fouten" },
    { id: "installatie", title: "Installatietips" },
    { id: "onderhoud", title: "Onderhoud & Verzorging" }
  ];

  return (
    <ArticleLayout
      title="Airco Buitenunit Plaatsing: Complete Gids 2025"
      description="Alles over de juiste plaatsing van je airco buitenunit. Van locatiekeuze tot installatietips - zorg voor optimale prestaties van je airconditioning."
      publishDate="2025-01-22"
      modifiedDate="2025-01-22"
      author="StayCool Airconditioning"
      tags={['Installatie', 'Buitenunit', 'Plaatsing', 'Tips']}
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
            <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="text-blue-900 mt-0 mb-2">Waarom Juiste Plaatsing?</h3>
              <p className="m-0 text-blue-800">
                De locatie van je buitenunit heeft directe invloed op de prestaties, 
                efficiëntie en levensduur van je airconditioning. Een juiste plaatsing 
                zorgt voor optimale werking en minimale overlast.
              </p>
            </div>
          </div>
        </div>

        <h2 id="inleiding">Inleiding</h2>
        <p>
          De buitenunit is een essentieel onderdeel van je split-unit airconditioning. 
          De juiste plaatsing is cruciaal voor optimale prestaties en een lange 
          levensduur. In deze gids bespreken we alle aspecten van een correcte installatie.
        </p>

        <h2 id="locatie">Ideale Locatie</h2>
        <p>
          Bij het kiezen van de ideale locatie moet je rekening houden met verschillende 
          factoren:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {placementFactors.map((factor) => (
            <div 
              key={factor.title}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <factor.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold ml-4 mt-0">
                  {factor.title}
                </h3>
              </div>
              <ul className="space-y-2 m-0">
                {factor.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    {req}
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
                Controleer altijd lokale regelgeving en VvE-voorschriften voordat je 
                een buitenunit plaatst. In sommige gemeenten gelden specifieke regels 
                voor plaatsing en geluidsproductie.
              </p>
            </div>
          </div>
        </div>

        <h2 id="eisen">Plaatsingseisen</h2>
        <p>
          Voor een optimale werking moet de buitenunit aan deze eisen voldoen:
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 border-l-4 border-blue-500">
          <ul className="space-y-4 m-0">
            <li className="flex items-start">
              <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <strong>Minimale Afstanden:</strong>
                <ul className="mt-2">
                  <li>30cm van de muur</li>
                  <li>15cm boven de unit</li>
                  <li>100cm voor de unit</li>
                  <li>50cm aan zijkanten</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <Volume2 className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <strong>Geluidsoverwegingen:</strong>
                <ul className="mt-2">
                  <li>Max. 40dB(A) bij de erfgrens</li>
                  <li>Gebruik trillingdempers</li>
                  <li>Vermijd holle ruimtes</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <h2 id="fouten">Veelgemaakte Fouten</h2>
        <p>
          Deze fouten komen vaak voor bij het plaatsen van buitenunits:
        </p>

        <div className="space-y-6 my-8">
          {commonMistakes.map((mistake) => (
            <div 
              key={mistake.title}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">
                {mistake.title}
              </h3>
              <div className="space-y-2">
                <p className="flex items-start m-0">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Gevolg:</strong> {mistake.consequences}</span>
                </p>
                <p className="flex items-start m-0">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Oplossing:</strong> {mistake.solution}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 id="installatie">Installatietips</h2>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-green-900 mt-0">Professionele Tips</h3>
            <ul className="space-y-2 mb-0">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Gebruik waterpas voor perfecte uitlijning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Installeer condensafvoer met lichte helling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span>Bescherm leidingen tegen UV-straling</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 id="onderhoud">Onderhoud & Verzorging</h2>
        <p>
          Regelmatig onderhoud verlengt de levensduur van je buitenunit:
        </p>
        <ul>
          <li>Controleer maandelijks op vervuiling</li>
          <li>Reinig de condensor jaarlijks</li>
          <li>Controleer bevestigingen op roest</li>
          <li>Houd omgeving vrij van begroeiing</li>
        </ul>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Professionele Installatie</h2>
          <p className="text-blue-100 mb-6">
            Wil je zeker weten dat je buitenunit correct wordt geplaatst? 
            Onze experts zorgen voor een perfecte installatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Vraag een offerte aan
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

export default AircoBuitenunitPlaatsing;
