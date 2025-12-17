import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, Wrench, Phone, Clock, TrendingUp, CheckCircle, AlertCircle, Calculator } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoReparatieKostenLimburg = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Reparatie', path: '/kennisbank/airco-reparatie-service' },
    { label: 'Kosten' }
  ];

  const reparatieKosten = [
    {
      storing: "Koudemiddellek Bijvullen",
      beschrijving: "Koudemiddel bijvullen na lek of verlies",
      prijsVan: 150,
      prijsTot: 350,
      factoren: ["Type koudemiddel (R32/R410A)", "Hoeveelheid benodigd", "Lekdetectie en reparatie"]
    },
    {
      storing: "Filter Vervangen",
      beschrijving: "Vervangen van vuile of beschadigde filters",
      prijsVan: 45,
      prijsTot: 120,
      factoren: ["Aantal filters", "Type airco systeem", "Bereikbaarheid"]
    },
    {
      storing: "Ventilator Reparatie",
      beschrijving: "Reparatie of vervanging van ventilator",
      prijsVan: 180,
      prijsTot: 450,
      factoren: ["Type ventilator", "Binnen- of buitenunit", "Beschikbaarheid onderdelen"]
    },
    {
      storing: "Compressor Vervangen",
      beschrijving: "Volledige vervanging van compressor",
      prijsVan: 600,
      prijsTot: 1500,
      factoren: ["Capaciteit airco", "Type compressor", "Installatie complexiteit"]
    },
    {
      storing: "Elektronica Reparatie",
      beschrijving: "Printplaat of elektrische componenten",
      prijsVan: 200,
      prijsTot: 600,
      factoren: ["Type defect", "Beschikbaarheid onderdelen", "Merk en model"]
    },
    {
      storing: "Afvoer Ontstoppen",
      beschrijving: "Reinigen verstopte condensafvoer",
      prijsVan: 85,
      prijsTot: 180,
      factoren: ["Mate van verstopping", "Bereikbaarheid", "Preventief onderhoud"]
    },
    {
      storing: "Thermostaatprobleem",
      beschrijving: "Reparatie of vervanging thermostaat",
      prijsVan: 120,
      prijsTot: 280,
      factoren: ["Type thermostaat", "Bekabeling", "Smart/digitaal"]
    },
    {
      storing: "Sensor Vervangen",
      beschrijving: "Temperatuur- of druksensoren",
      prijsVan: 95,
      prijsTot: 250,
      factoren: ["Type sensor", "Toegankelijkheid", "Kalibratie"]
    }
  ];

  const reparerenOfVervangen = [
    {
      titel: "Repareren is Zinvol Bij:",
      items: [
        "Airco jonger dan 8 jaar",
        "Eenvoudige storing (filter, sensor)",
        "Reparatiekosten < 40% van nieuwprijs",
        "Energielabel B of beter",
        "Goede onderhoudshistorie"
      ],
      kleur: "green"
    },
    {
      titel: "Vervangen is Verstandig Bij:",
      items: [
        "Airco ouder dan 12 jaar",
        "Compressor defect in oude unit",
        "Reparatiekosten > 60% van nieuwprijs",
        "Energielabel D of slechter",
        "Regelmatige storingen"
      ],
      kleur: "red"
    },
    {
      titel: "Twijfelgeval:",
      items: [
        "Airco 8-12 jaar oud",
        "Middelgrote reparatie (ventilator)",
        "Reparatiekosten 40-60% van nieuwprijs",
        "Energielabel C",
        "Enkele eerdere storing"
      ],
      kleur: "orange"
    }
  ];

  const kostenFactoren = [
    {
      factor: "Type Storing",
      impact: "Hoog",
      uitleg: "Kleine reparaties zoals filters zijn goedkoop, grote reparaties zoals compressor vervangen zijn duur."
    },
    {
      factor: "Leeftijd Airco",
      impact: "Gemiddeld",
      uitleg: "Bij oudere units zijn onderdelen moeilijker verkrijgbaar en kan vervangen voordeliger zijn."
    },
    {
      factor: "Merk & Model",
      impact: "Gemiddeld",
      uitleg: "Premium merken hebben duurdere onderdelen maar vaak betere beschikbaarheid."
    },
    {
      factor: "Bereikbaarheid",
      impact: "Laag",
      uitleg: "Moeilijk bereikbare units vergen meer tijd en dus hogere arbeidskosten."
    },
    {
      factor: "Spoedservice",
      impact: "Laag",
      uitleg: "Spoedreparaties buiten kantooruren kunnen een toeslag hebben."
    }
  ];

  const bespaartips = [
    "Regelmatig onderhoud voorkomt dure reparaties",
    "Filters zelf reinigen bespaart servicekosten",
    "Vroege detectie van problemen voorkomt grotere schade",
    "Vergelijk altijd reparatie vs. vervangen",
    "Vraag naar garantie op reparatie",
    "Overweeg onderhoudscontract voor kortingen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Reparatie Kosten Limburg 2024 | Prijzen & Advies"
        description="Wat kost een airco reparatie in Limburg? Complete prijsoverzicht per storing, repareren vs vervangen advies. Voorrijkosten €0. ☎ 046-202-1430"
        canonicalUrl="https://staycoolairco.nl/airco-reparatie/noindex/kosten"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Euro className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Airco Reparatie Kosten Limburg
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transparant prijsoverzicht voor airco reparaties in Limburg.
              Weet wat u kunt verwachten en maak een weloverwogen keuze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                Offerte: 046-202-1430
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

      {/* Basiskosten */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Standaard Kosten</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Deze kosten gelden voor alle reparaties in Limburg.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Voorrijkosten</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">€0</p>
              <p className="text-sm text-gray-600">In heel Limburg</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Diagnose</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">€75</p>
              <p className="text-sm text-gray-600">Verrekend bij reparatie</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Uurtarief</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">€65</p>
              <p className="text-sm text-gray-600">Gecertificeerde monteur</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2">Let Op: Diagnose Verrekening</h3>
            <p className="text-blue-800">
              De diagnosekosten van €75 worden volledig verrekend wanneer u de reparatie
              bij ons laat uitvoeren. U betaalt alleen deze €75 als u besluit om de reparatie
              niet te laten doen of elders te laten uitvoeren.
            </p>
          </div>
        </div>
      </section>

      {/* Prijsoverzicht per Storing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Prijzen per Type Storing</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Indicatieve prijzen inclusief arbeid en materiaal. Exacte prijs na diagnose.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {reparatieKosten.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4">
                  <h3 className="text-xl font-bold">{item.storing}</h3>
                  <p className="text-sm opacity-90">{item.beschrijving}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-center mb-6 pb-6 border-b">
                    <span className="text-4xl font-bold text-red-600">€{item.prijsVan}</span>
                    <span className="text-2xl text-gray-400 mx-2">-</span>
                    <span className="text-4xl font-bold text-red-600">€{item.prijsTot}</span>
                  </div>
                  <h4 className="font-semibold mb-3 text-gray-700">Prijs afhankelijk van:</h4>
                  <ul className="space-y-2">
                    {item.factoren.map((factor, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <TrendingUp className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repareren vs Vervangen */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Repareren of Vervangen?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Niet altijd is reparatie de beste keuze. Hier leest u wanneer vervangen
            voordeliger kan zijn op de lange termijn.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reparerenOfVervangen.map((categorie, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-${categorie.kleur}-600`}>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-4 text-${categorie.kleur}-600`}>
                    {categorie.titel}
                  </h3>
                  <ul className="space-y-3">
                    {categorie.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 text-${categorie.kleur}-600 mr-2 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <AlertCircle className="w-8 h-8 text-orange-600 mr-3" />
              Advies op Maat
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Na diagnose adviseren wij u altijd eerlijk over repareren of vervangen.
              Wij rekenen de totale kosten voor u door en geven inzicht in:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span>Reparatiekosten vs nieuwe unit</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span>Energiebesparing nieuwe unit</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span>Resterende levensduur</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span>Garantie nieuwe vs oude</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kostenfactoren */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Wat Bepaalt de Kosten?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Deze factoren beïnvloeden de uiteindelijke reparatieprijs.
          </p>

          <div className="space-y-4">
            {kostenFactoren.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{item.factor}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    item.impact === 'Hoog' ? 'bg-red-100 text-red-800' :
                    item.impact === 'Gemiddeld' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    Impact: {item.impact}
                  </span>
                </div>
                <p className="text-gray-600">{item.uitleg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespaartips */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Bespaar op Reparatiekosten</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Met deze tips houdt u de reparatiekosten beperkt.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {bespaartips.map((tip, index) => (
              <div key={index} className="flex items-start bg-green-50 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Vrijblijvende Offerte</h3>
            <p className="text-lg mb-6">
              Vraag een vrijblijvende offerte aan voor uw airco reparatie.
              Wij komen gratis langs in heel Limburg voor diagnose.
            </p>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel Direct: 046-202-1430
            </a>
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
              in heel Limburg. Ook informatie over preventief onderhoud.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AircoReparatieKostenLimburg;
