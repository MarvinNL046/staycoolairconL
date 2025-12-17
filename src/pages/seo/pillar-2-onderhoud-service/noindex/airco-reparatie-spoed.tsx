import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, AlertTriangle, Wrench, CheckCircle, Zap, MapPin, Thermometer } from 'lucide-react';
import MetaTags from '../../../../components/MetaTags';
import Breadcrumbs from '../../../../components/Breadcrumbs';

const AircoReparatieSpoed = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Reparatie', path: '/kennisbank/airco-reparatie-service' },
    { label: 'Spoedservice' }
  ];

  const spoedSituaties = [
    {
      icon: Thermometer,
      titel: "Hittegolf & Airco Uitval",
      urgentie: "Zeer Hoog",
      beschrijving: "Bij extreme temperaturen is een werkende airco essentieel",
      voorbeelden: [
        "Geen koeling tijdens hittegolf",
        "Gezondheidsrisico's ouderen/kinderen",
        "Onbewoonbare situatie"
      ]
    },
    {
      icon: AlertTriangle,
      titel: "Waterlekkage",
      urgentie: "Zeer Hoog",
      beschrijving: "Water kan schade aan muren, plafonds en vloeren veroorzaken",
      voorbeelden: [
        "Druppelend of stromend water",
        "Vochtvlekken op muur/plafond",
        "Waterschade aan meubels"
      ]
    },
    {
      icon: Zap,
      titel: "Elektrische Problemen",
      urgentie: "Zeer Hoog",
      beschrijving: "Vonken, brandlucht of doorgeslagen zekeringen",
      voorbeelden: [
        "Brandlucht uit unit",
        "Vonken of rookontwikkeling",
        "Constant doorslaan zekering"
      ]
    },
    {
      icon: AlertTriangle,
      titel: "Vreemde Geluiden",
      urgentie: "Hoog",
      beschrijving: "Ongewone geluiden kunnen op ernstige defecten wijzen",
      voorbeelden: [
        "Luid bonkend of rammelend geluid",
        "Schrapende of schurende geluiden",
        "Plotseling nieuwe geluidsoverlast"
      ]
    }
  ];

  const spoedserviceStappen = [
    {
      stap: "1. Bel Direct",
      beschrijving: "Bel 046-202-1430 en geef uw situatie door",
      tijd: "Direct"
    },
    {
      stap: "2. Snelle Planning",
      beschrijving: "Wij plannen zo snel mogelijk een monteur in",
      tijd: "< 1 uur"
    },
    {
      stap: "3. Onderweg",
      beschrijving: "Monteur onderweg met gereedschap en onderdelen",
      tijd: "1-4 uur"
    },
    {
      stap: "4. Diagnose",
      beschrijving: "Snelle analyse van het probleem ter plaatse",
      tijd: "15-30 min"
    },
    {
      stap: "5. Reparatie",
      beschrijving: "Direct repareren indien mogelijk",
      tijd: "30 min - 3 uur"
    }
  ];

  const eerstehulp = [
    {
      situatie: "Bij Waterlekkage",
      acties: [
        "Zet de airco direct uit",
        "Verwijder elektrische apparaten uit natte zone",
        "Plaats bakken/handdoeken onder lek",
        "Schakel hoofdschakelaar uit bij veel water",
        "Bel spoedservice: 046-202-1430"
      ]
    },
    {
      situatie: "Bij Brandlucht/Vonken",
      acties: [
        "Schakel airco direct uit",
        "Haal stekker uit stopcontact of schakel zekering uit",
        "Ventileer de ruimte goed",
        "Gebruik unit NIET meer tot inspectie",
        "Bel direct: 046-202-1430"
      ]
    },
    {
      situatie: "Bij Geen Koeling",
      acties: [
        "Controleer of unit aanstaat en stroom heeft",
        "Check of filters schoon zijn",
        "Kijk of buitenunit draait",
        "Probeer airco te resetten",
        "Bel voor spoedservice: 046-202-1430"
      ]
    }
  ];

  const serviceGebied = [
    { stad: "Maastricht", responstijd: "30-60 min" },
    { stad: "Heerlen", responstijd: "30-60 min" },
    { stad: "Sittard-Geleen", responstijd: "30-60 min" },
    { stad: "Roermond", responstijd: "45-90 min" },
    { stad: "Venlo", responstijd: "60-90 min" },
    { stad: "Weert", responstijd: "45-90 min" },
    { stad: "Kerkrade", responstijd: "30-60 min" },
    { stad: "Brunssum", responstijd: "30-60 min" }
  ];

  const waarom = [
    {
      icon: Clock,
      titel: "Snelle Response",
      beschrijving: "Vaak dezelfde dag nog ter plaatse in heel Limburg"
    },
    {
      icon: Wrench,
      titel: "Ervaren Monteurs",
      beschrijving: "F-gassen gecertificeerde specialisten met jarenlange ervaring"
    },
    {
      icon: CheckCircle,
      titel: "Goed Uitgerust",
      beschrijving: "Monteurs hebben veel voorkomende onderdelen op voorraad"
    },
    {
      icon: MapPin,
      titel: "Heel Limburg",
      beschrijving: "Spoedservice beschikbaar in alle Limburgse gemeenten"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MetaTags
        title="Airco Spoedreparatie Limburg - Dezelfde Dag Service | StayCool"
        description="Airco storing? Spoedservice in heel Limburg, vaak nog dezelfde dag. Waterlekkage, uitval, elektrische problemen. Direct bellen: 046-202-1430"
        canonicalUrl="https://staycoolairco.nl/airco-reparatie/noindex/spoed"
        noIndex={true}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Zap className="w-20 h-20 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Airco Spoedreparatie Limburg
            </h1>
            <p className="text-xl mb-4 max-w-3xl mx-auto">
              Acute airco storing? Wij helpen u snel. Spoedservice beschikbaar
              in heel Limburg, vaak nog dezelfde dag ter plaatse.
            </p>
            <p className="text-2xl font-bold mb-8">
              Direct beschikbaar voor spoedgevallen
            </p>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-12 py-5 bg-white text-red-600 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-xl"
            >
              <Phone className="w-7 h-7 mr-3 animate-pulse" />
              Bel Nu: 046-202-1430
            </a>
          </div>
        </div>
      </section>

      {/* Wanneer Spoedservice */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Wanneer Spoedservice Nodig?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Deze situaties vereisen directe actie en spoedreparatie.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {spoedSituaties.map((situatie, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`p-6 ${
                  situatie.urgentie === 'Zeer Hoog'
                    ? 'bg-gradient-to-r from-red-600 to-red-700'
                    : 'bg-gradient-to-r from-orange-600 to-orange-700'
                } text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <situatie.icon className="w-12 h-12" />
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                      {situatie.urgentie}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{situatie.titel}</h3>
                  <p className="opacity-90">{situatie.beschrijving}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-3 text-gray-700">Voorbeelden:</h4>
                  <ul className="space-y-2">
                    {situatie.voorbeelden.map((voorbeeld, idx) => (
                      <li key={idx} className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{voorbeeld}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Twijfelt u of het spoed is?</h3>
            <p className="text-lg mb-6">
              Bel ons gerust. Wij beoordelen samen met u de urgentie en
              plannen de snelst mogelijke service in.
            </p>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              <Phone className="w-6 h-6 mr-2" />
              046-202-1430
            </a>
          </div>
        </div>
      </section>

      {/* Hoe Werkt Spoedservice */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Hoe Werkt Onze Spoedservice?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Van telefoontje tot oplossing in 5 stappen.
          </p>

          <div className="space-y-6">
            {spoedserviceStappen.map((stap, index) => (
              <div key={index} className="flex items-start bg-white rounded-xl shadow-md p-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{stap.stap}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {stap.tijd}
                    </span>
                  </div>
                  <p className="text-gray-600">{stap.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2">Let Op: Spoedtoeslag</h3>
            <p className="text-blue-800">
              Voor spoedservice buiten kantooruren (avond/weekend) kan een toeslag
              van toepassing zijn. Dit bespreken wij altijd vooraf met u.
            </p>
          </div>
        </div>
      </section>

      {/* Eerste Hulp */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Wat Te Doen Tot Hulp Komt?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Eerste hulp bij acute airco storingen.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {eerstehulp.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
                  <h3 className="text-lg font-bold">{item.situatie}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {item.acties.map((actie, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 text-sm">{actie}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-50 border-2 border-red-600 rounded-xl p-6 text-center">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-red-900 mb-2">Veiligheid Eerst!</h3>
            <p className="text-red-800 text-lg">
              Bij gevaarlijke situaties (brand, elektrische problemen): schakel de unit direct
              uit en bel zo nodig 112. Daarna kunt u ons bellen voor reparatie.
            </p>
          </div>
        </div>
      </section>

      {/* Servicegebied & Responstijden */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Spoedservice in Heel Limburg</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Indicatieve responstijden voor spoedgevallen per regio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {serviceGebied.map((locatie, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h3 className="font-bold mb-1">{locatie.stad}</h3>
                <p className="text-sm text-gray-600 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {locatie.responstijd}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Waarom StayCool Spoedservice?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {waarom.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-100 rounded-lg p-3 mr-4">
                    <item.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.titel}</h4>
                    <p className="text-gray-600 text-sm">{item.beschrijving}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Zap className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Airco Storing? Direct Hulp!
          </h2>
          <p className="text-xl mb-8">
            Bel nu voor spoedservice in Limburg. Wij staan voor u klaar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-red-600 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-xl"
            >
              <Phone className="w-7 h-7 mr-3" />
              046-202-1430
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <CheckCircle className="w-8 h-8 mb-2" />
              <p className="font-semibold">Voorrijkosten: €0</p>
              <p className="text-sm opacity-90">In heel Limburg</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <Clock className="w-8 h-8 mb-2" />
              <p className="font-semibold">Vaak Dezelfde Dag</p>
              <p className="text-sm opacity-90">Snelle response</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <Wrench className="w-8 h-8 mb-2" />
              <p className="font-semibold">F-gassen Gecertificeerd</p>
              <p className="text-sm opacity-90">Ervaren monteurs</p>
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
              Complete informatie over airco reparaties, veelvoorkomende storingen,
              kosten en preventief onderhoud in Limburg.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AircoReparatieSpoed;
