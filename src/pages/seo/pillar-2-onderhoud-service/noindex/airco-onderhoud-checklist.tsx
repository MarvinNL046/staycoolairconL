import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, CheckCircle, Calendar, Phone, AlertTriangle, ClipboardCheck, Filter, Droplet, Zap, ThermometerSun } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoOnderhoudsChecklist = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Onderhoud Limburg', path: '/kennisbank/airco-onderhoud-limburg' },
    { label: 'Onderhoudschecklist' }
  ];

  const maandelijkseTaken = [
    {
      icon: Filter,
      title: 'Filters controleren en reinigen',
      description: 'Verwijder stof en vuil van de filters. Vervang indien beschadigd.',
      frequentie: 'Elke 2-4 weken'
    },
    {
      icon: ThermometerSun,
      title: 'Binnen- en buitenunit schoonmaken',
      description: 'Veeg buitenkant schoon en controleer op obstakels.',
      frequentie: 'Maandelijks'
    },
    {
      icon: Droplet,
      title: 'Condensafvoer controleren',
      description: 'Check op verstoppingen en waterlekkage.',
      frequentie: 'Maandelijks'
    }
  ];

  const jaarlijkseTaken = [
    {
      icon: Zap,
      title: 'Elektrische verbindingen',
      description: 'Controleer alle aansluitingen en bedrading op slijtage',
      professional: true
    },
    {
      icon: Droplet,
      title: 'Koudemiddelniveau',
      description: 'Meet koudemiddeldruk en vul indien nodig bij',
      professional: true
    },
    {
      icon: Wrench,
      title: 'Mechanische onderdelen',
      description: 'Inspecteer ventilator, motor en andere bewegende delen',
      professional: true
    },
    {
      icon: ClipboardCheck,
      title: 'Algehele systeemtest',
      description: 'Uitgebreide prestatie- en veiligheidstest',
      professional: true
    }
  ];

  const waarschuwingssignalen = [
    'Verminderde koelprestaties',
    'Ongebruikelijke geluiden (piepen, ratelen, bonken)',
    'Onaangename geuren bij inschakeling',
    'Water lekkage rondom de units',
    'Hoger energieverbruik dan normaal',
    'IJsvorming op de binnenunit',
    'Airco die niet meer start of frequent uitvalt'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Onderhoudschecklist - Wat te Controleren | StayCool Airco"
        description="Complete onderhoudschecklist voor uw airco. Ontdek wat u zelf kunt doen en wanneer professioneel onderhoud nodig is. DIY tips en onderhoudsschema."
        canonicalUrl="https://staycoolairco.nl/airco-onderhoud/noindex/checklist"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ClipboardCheck className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Airco Onderhoudschecklist
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Complete checklist voor optimaal onderhoud van uw airconditioner.
            Wat kunt u zelf doen en wanneer is professionele hulp nodig?
          </p>
        </div>
      </section>

      {/* Waarom Onderhoudschecklist */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Waarom een onderhoudschecklist?</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Regelmatig onderhoud van uw airconditioner is essentieel voor optimale prestaties,
              energiebesparing en een lange levensduur. Met een gestructureerde checklist zorgt u
              ervoor dat geen enkel onderdeel wordt vergeten.
            </p>
            <p className="mb-4">
              Deze checklist helpt u bij:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Voorkomen van dure reparaties door tijdige detectie van problemen</li>
              <li>Verlengen van de levensduur van uw airco systeem</li>
              <li>Behouden van optimale energie-efficiëntie en lagere energiekosten</li>
              <li>Verbeteren van de luchtkwaliteit in uw woning</li>
              <li>Waarborgen van constante koelprestaties</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maandelijkse Taken */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Maandelijkse Onderhoudstaken</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Deze taken kunt u zelf uitvoeren om uw airco in optimale staat te houden:
          </p>
          <div className="grid gap-6">
            {maandelijkseTaken.map((taak, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <taak.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{taak.title}</h3>
                    <p className="text-gray-600 mb-3">{taak.description}</p>
                    <div className="flex items-center text-sm text-green-600 font-semibold">
                      <Calendar className="h-4 w-4 mr-2" />
                      {taak.frequentie}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-bold text-blue-900 mb-2">Belangrijke tip bij filters reinigen</h3>
                <p className="text-blue-800">
                  Schakel altijd eerst de airco uit voordat u filters verwijdert. Reinig filters met
                  lauw water en een mild schoonmaakmiddel. Laat ze volledig drogen voordat u ze
                  terugplaatst. Vervang beschadigde filters direct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jaarlijkse Professionele Taken */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Wrench className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Jaarlijks Professioneel Onderhoud</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Deze taken vereisen specialistische kennis en apparatuur. Laat deze minimaal 1x per jaar
            door een erkend installateur uitvoeren:
          </p>
          <div className="grid gap-6">
            {jaarlijkseTaken.map((taak, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <taak.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{taak.title}</h3>
                      <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Professional
                      </span>
                    </div>
                    <p className="text-gray-600">{taak.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              StayCool Onderhoudsbeurt - Complete Controle
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-green-800 mb-4">
                  Onze professionele onderhoudsbeurt omvat alle jaarlijkse controles:
                </p>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    Filters reinigen en vervangen indien nodig
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    Koudemiddel controle en bijvullen
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    Elektrische verbindingen inspecteren
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                    Condensafvoer doorspuiten
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3">Tarieven</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Losse onderhoudsbeurt</span>
                    <span className="font-bold text-gray-900">€179</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Contract 1 unit</span>
                    <span className="font-bold text-green-600">€11/maand</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Contract 2+ units</span>
                    <span className="font-bold text-green-600">€16/maand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarschuwingssignalen */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Waarschuwingssignalen</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Let op deze signalen die wijzen op onderhoudsbehoeften of problemen:
          </p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {waarschuwingssignalen.map((signaal, index) => (
                <div key={index} className="flex items-start p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{signaal}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-semibold">
                ⚠️ Herkent u één of meer van deze signalen? Neem dan direct contact op voor een
                inspectie om verdere schade te voorkomen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Zelf doen of professional?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Zelf uitvoeren (DIY)
              </h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Filters reinigen en vervangen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Buitenkant schoonvegen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Condensafvoer visueel controleren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Omgeving vrijhouden van obstakels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Temperatuurinstellingen optimaliseren</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Wrench className="h-6 w-6 mr-2" />
                Professional nodig
              </h3>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙</span>
                  <span>Koudemiddel controleren/bijvullen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙</span>
                  <span>Elektrische aansluitingen inspecteren</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙</span>
                  <span>Interne componenten reinigen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙</span>
                  <span>Prestatiemetingen en diagnostiek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">⚙</span>
                  <span>Reparaties en onderdelen vervangen</span>
                </li>
              </ul>
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
              Ontdek alles over professioneel airco onderhoud, prijzen, onderhoudscontracten
              en waarom regelmatig onderhoud essentieel is voor uw airconditioner.
            </p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Wrench className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professioneel Onderhoud Nodig?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Laat uw airco vakkundig onderhouden vanaf €11 per maand
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

export default AircoOnderhoudsChecklist;
