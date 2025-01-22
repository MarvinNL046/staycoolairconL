import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { MapPin, ThermometerSun, Euro, Wrench, CheckCircle, AlertTriangle, Clock, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AircoInHerkenbosch = () => {
  const serviceHighlights = [
    {
      icon: Clock,
      title: "Snelle Service",
      description: "Binnen 24-48 uur service in Herkenbosch",
      details: "Spoedservice beschikbaar bij storingen"
    },
    {
      icon: Euro,
      title: "Scherpe Prijzen",
      description: "Lokale tarieven voor Herkenbosch",
      details: "Transparante prijsopgave vooraf"
    },
    {
      icon: Wrench,
      title: "Expert Installatie",
      description: "Gecertificeerde monteurs uit de regio",
      details: "Specialisten in alle airco merken"
    },
    {
      icon: ThermometerSun,
      title: "Klimaatadvies",
      description: "Persoonlijk advies voor uw situatie",
      details: "Rekening houdend met lokale factoren"
    }
  ];

  const localConsiderations = [
    {
      title: "Lokale Regelgeving",
      points: [
        "Vergunningseisen gemeente Roerdalen",
        "Plaatsingsrichtlijnen voor monumentale panden",
        "Geluidsnormen voor woonwijken"
      ]
    },
    {
      title: "Klimaatfactoren",
      points: [
        "Beschutte ligging in bosrijk gebied",
        "Relatief hoge luchtvochtigheid",
        "Temperatuurschommelingen door bosomgeving"
      ]
    }
  ];

  // Table of Contents items
  const tocItems = [
    { id: "inleiding", title: "Inleiding" },
    { id: "service", title: "Onze Service in Herkenbosch" },
    { id: "lokaal", title: "Lokale Overwegingen" },
    { id: "installatie", title: "Installatie & Onderhoud" },
    { id: "prijzen", title: "Prijzen & Mogelijkheden" },
    { id: "contact", title: "Direct Contact" }
  ];

  return (
    <ArticleLayout
      title="Airco in Herkenbosch: Lokale Service & Expert Advies"
      description="Alles over airconditioning in Herkenbosch. Van installatie en onderhoud tot lokaal advies en service. Ontdek onze specialistische airco diensten voor Herkenbosch."
      publishDate="2025-01-22"
      modifiedDate="2025-01-22"
      author="StayCool Airconditioning"
      tags={['Herkenbosch', 'Service', 'Installatie', 'Lokaal']}
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
              <h3 className="text-blue-900 mt-0 mb-2">Lokale Airco Specialist</h3>
              <p className="m-0 text-blue-800">
                Als lokale airco specialist in Herkenbosch bieden wij persoonlijke service 
                en expertise, afgestemd op de specifieke behoeften van uw woning of bedrijf.
              </p>
            </div>
          </div>
        </div>

        <h2 id="inleiding">Inleiding</h2>
        <p>
          Herkenbosch, gelegen in de gemeente Roerdalen, kent zijn eigen unieke klimaat- en 
          woningkarakteristieken. Als lokale airco specialist begrijpen wij de specifieke 
          uitdagingen en mogelijkheden die dit met zich meebrengt voor airconditioning 
          installaties.
        </p>

        <h2 id="service">Onze Service in Herkenbosch</h2>
        <p>
          We bieden een complete airco service specifiek afgestemd op de behoeften van 
          Herkenbosch en omgeving:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {serviceHighlights.map((highlight) => (
            <div 
              key={highlight.title}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <highlight.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold ml-4 mt-0">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-gray-700 font-medium mb-2">
                {highlight.description}
              </p>
              <p className="text-gray-600 m-0">
                {highlight.details}
              </p>
            </div>
          ))}
        </div>

        <h2 id="lokaal">Lokale Overwegingen</h2>
        <p>
          Bij het installeren van een airco in Herkenbosch houden we rekening met 
          verschillende lokale factoren:
        </p>

        <div className="space-y-6 my-8">
          {localConsiderations.map((consideration) => (
            <div 
              key={consideration.title}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-4">
                {consideration.title}
              </h3>
              <ul className="space-y-2 m-0">
                {consideration.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    {point}
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
              <h3 className="text-yellow-900 mt-0 mb-2">Belangrijk voor Herkenbosch</h3>
              <p className="m-0 text-yellow-800">
                Door de bosrijke omgeving van Herkenbosch is een goede plaatsing van de 
                buitenunit essentieel. Lees meer over de juiste plaatsing in ons artikel 
                over <Link to="/kennisbank/airco-buitenunit-plaatsing" className="text-yellow-800 underline">airco buitenunit plaatsing</Link>.
              </p>
            </div>
          </div>
        </div>

        <h2 id="installatie">Installatie & Onderhoud</h2>
        <p>
          Voor optimale prestaties van uw airco in Herkenbosch is regelmatig onderhoud 
          essentieel. Bekijk onze <Link to="/kennisbank/hoe-vaak-airco-onderhoud" className="text-blue-600 hover:text-blue-800">onderhoudsgids</Link> voor 
          meer informatie.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 my-8 border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-4">Installatie Proces</h3>
          <ol className="space-y-4 m-0">
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">1</span>
              <div>
                <strong>Gratis Inspectie</strong>
                <p className="mt-1 mb-0">
                  We komen langs voor een gratis inspectie en adviesgesprek.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">2</span>
              <div>
                <strong>Offerte op Maat</strong>
                <p className="mt-1 mb-0">
                  U ontvangt een gedetailleerde offerte specifiek voor uw situatie.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">3</span>
              <div>
                <strong>Professionele Installatie</strong>
                <p className="mt-1 mb-0">
                  Vakkundige installatie door onze gecertificeerde monteurs.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0 mt-1">4</span>
              <div>
                <strong>Nazorg & Onderhoud</strong>
                <p className="mt-1 mb-0">
                  Complete uitleg en doorlopende ondersteuning.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <h2 id="prijzen">Prijzen & Mogelijkheden</h2>
        <p>
          De kosten voor een airco installatie in Herkenbosch zijn afhankelijk van 
          verschillende factoren. Bekijk onze <Link to="/kennisbank/wat-kost-een-airco-plaatsen" className="text-blue-600 hover:text-blue-800">prijzengids</Link> voor 
          een compleet overzicht.
        </p>

        <div className="bg-green-50 rounded-xl p-6 my-8">
          <h3 className="text-green-900 mt-0">Lokale Voordelen</h3>
          <ul className="space-y-2 mb-0">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>Gratis inspectie voor inwoners van Herkenbosch</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>Voorrang bij storingen voor lokale klanten</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>Speciale tarieven voor onderhoudspakketten</span>
            </li>
          </ul>
        </div>

        <h2 id="contact">Direct Contact</h2>
        <p>
          Bent u op zoek naar een betrouwbare airco specialist in Herkenbosch? 
          Neem direct contact met ons op voor een vrijblijvend gesprek.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
          <h2 className="text-white mt-0">Maak een Afspraak</h2>
          <p className="text-blue-100 mb-6">
            Wilt u meer weten over onze airco services in Herkenbosch? 
            Onze experts staan voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              Vraag advies aan
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

export default AircoInHerkenbosch;
