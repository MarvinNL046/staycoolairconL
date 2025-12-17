import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, AlertTriangle, Phone, Clock, Thermometer, Wind, Droplets, Volume2, Settings, CheckCircle } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoReparatieStoringen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Reparatie', path: '/kennisbank/airco-reparatie-service' },
    { label: 'Storingen' }
  ];

  const storingen = [
    {
      icon: Thermometer,
      titel: "Airco Koelt Niet",
      symptomen: [
        "Geen koude lucht",
        "Lauw blazend",
        "Temperatuur stijgt niet"
      ],
      oorzaken: [
        "Koudemiddellek",
        "Defecte compressor",
        "Vuile filters",
        "Thermostaatprobleem"
      ],
      urgentie: "Hoog"
    },
    {
      icon: Droplets,
      titel: "Waterlekkage",
      symptomen: [
        "Water drupt uit unit",
        "Vochtvlekken op muur",
        "Condenswater binnen"
      ],
      oorzaken: [
        "Verstopte afvoer",
        "Condensbak vol",
        "Installatiefout",
        "Kapotte pomp"
      ],
      urgentie: "Zeer Hoog"
    },
    {
      icon: Volume2,
      titel: "Ongewone Geluiden",
      symptomen: [
        "Bonkend geluid",
        "Piepend of fluitend",
        "Rammelend geluid"
      ],
      oorzaken: [
        "Losse onderdelen",
        "Ventilatorprobleem",
        "Compressorschade",
        "Trillingen door montage"
      ],
      urgentie: "Gemiddeld"
    },
    {
      icon: Wind,
      titel: "Geen Luchtstroom",
      symptomen: [
        "Unit draait maar blaast niet",
        "Zwakke luchtstroom",
        "Geen ventilatie"
      ],
      oorzaken: [
        "Defecte ventilator",
        "Verstopte filters",
        "Elektronicaprobleem",
        "Motordefect"
      ],
      urgentie: "Hoog"
    },
    {
      icon: Settings,
      titel: "Start Niet Op",
      symptomen: [
        "Geen reactie op afstandsbediening",
        "Display is uit",
        "Geen geluid of beweging"
      ],
      oorzaken: [
        "Stroomprobleem",
        "Zekeringdefect",
        "Elektronicaschade",
        "Kapotte afstandsbediening"
      ],
      urgentie: "Zeer Hoog"
    },
    {
      icon: AlertTriangle,
      titel: "Foutmeldingen",
      symptomen: [
        "Knipperend lampje",
        "Error code op display",
        "Automatisch uitschakelen"
      ],
      oorzaken: [
        "Systeemfout",
        "Sensorprobleem",
        "Koudemiddeldruk",
        "Thermische beveiliging"
      ],
      urgentie: "Hoog"
    }
  ];

  const diagnoseStappen = [
    "Visuele inspectie van binnen- en buitenunit",
    "Controle van filters en luchtkanalen",
    "Meting van koudemiddeldruk",
    "Test van elektrische componenten",
    "Controle van afvoersysteem",
    "Analyse van thermostaat en sensoren"
  ];

  const wanneerReparatie = [
    {
      titel: "Direct Contact Opnemen",
      situaties: [
        "Waterlekkage binnen",
        "Brandlucht of vreemde geuren",
        "Vonken of elektrische problemen",
        "Complete uitval in zomer"
      ]
    },
    {
      titel: "Binnenkort Inplannen",
      situaties: [
        "Verminderde koelprestaties",
        "Toenemende geluidsoverlast",
        "Stijgend energieverbruik",
        "Regelmatige foutmeldingen"
      ]
    },
    {
      titel: "Bij Onderhoud Meenemen",
      situaties: [
        "Kleine oneffenheden in werking",
        "Afstandsbediening reageert traag",
        "Lichte geurtjes bij opstarten",
        "Cosmetische beschadigingen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Storingen Herkennen & Oplossen | StayCool Limburg"
        description="Veelvoorkomende airco storingen in Limburg. Leer symptomen herkennen en wanneer professionele reparatie nodig is. Spoedservice beschikbaar. ☎ 046-202-1430"
        canonicalUrl="https://staycoolairco.nl/airco-reparatie/noindex/storingen"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="w-20 h-20 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Airco Storingen Herkennen
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Veelvoorkomende airco problemen in Limburg en wat u kunt doen.
              Herken symptomen tijdig en voorkom grotere schade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                046-202-1430
              </a>
              <Link
                to="/kennisbank/airco-reparatie-service"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Reparatie Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Veelvoorkomende Storingen */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Veelvoorkomende Airco Storingen</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Deze problemen komen het meest voor bij airconditioners in Limburg.
            Herken de symptomen en weet wanneer u een specialist moet inschakelen.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storingen.map((storing, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <storing.icon className="w-12 h-12 text-red-600" />
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      storing.urgentie === 'Zeer Hoog' ? 'bg-red-100 text-red-800' :
                      storing.urgentie === 'Hoog' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {storing.urgentie}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{storing.titel}</h3>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Symptomen:</h4>
                    <ul className="space-y-1">
                      {storing.symptomen.map((symptoom, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {symptoom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Mogelijke Oorzaken:</h4>
                    <ul className="space-y-1">
                      {storing.oorzaken.map((oorzaak, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-red-600 mr-2">→</span>
                          {oorzaak}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnoseproces */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Professionele Diagnose</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Onze gecertificeerde monteurs voeren een grondige analyse uit om
            de exacte oorzaak van uw airco storing vast te stellen.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  Diagnose Inclusief:
                </h3>
                <ul className="space-y-3">
                  {diagnoseStappen.map((stap, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{stap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Diagnosekosten</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-red-200">
                    <span className="text-gray-700">Voorrijkosten Limburg:</span>
                    <span className="font-bold text-green-600">€0</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-red-200">
                    <span className="text-gray-700">Diagnose:</span>
                    <span className="font-bold">€75</span>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Let op:</strong> Diagnosekosten worden volledig verrekend
                      bij opdracht tot reparatie. U betaalt alleen €75 als u de reparatie
                      niet laat uitvoeren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer Reparatie Nodig */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Wanneer is Reparatie Nodig?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Niet elke storing vereist directe actie. Leer inschatten wanneer u
            contact moet opnemen met een specialist.
          </p>

          <div className="space-y-6">
            {wanneerReparatie.map((categorie, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-red-600 mr-2" />
                  {categorie.titel}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {categorie.situaties.map((situatie, idx) => (
                    <div key={idx} className="flex items-start bg-gray-50 rounded-lg p-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{situatie}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Spoedservice Info */}
          <div className="mt-8 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Phone className="w-8 h-8 mr-3" />
              Spoedreparatie Nodig?
            </h3>
            <p className="text-lg mb-6">
              Bij urgente storingen bieden wij spoedservice in heel Limburg.
              Vaak kunnen wij nog dezelfde dag langskomen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                Direct Bellen: 046-202-1430
              </a>
              <Link
                to="/kennisbank/airco-reparatie-service"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition"
              >
                Meer over Reparatie →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Link naar Pillar Page */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Meer over Airco Reparatie</h2>
          <Link
            to="/kennisbank/airco-reparatie-service"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg border-l-4 border-red-600 block transition group"
          >
            <h3 className="font-bold text-red-600 text-xl mb-2 group-hover:text-red-700">
              → Airco Reparatie Service in Limburg
            </h3>
            <p className="text-gray-600">
              Complete informatie over airco reparaties, storingen, kosten en onze service
              in heel Limburg. Lees meer over wat u kunt verwachten.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AircoReparatieStoringen;
