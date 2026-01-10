import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Euro, Phone, Battery, ArrowRight, Clock, Shield, Home, Wrench, Award, ShoppingBag } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijRoermondPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Roermond' }
  ];

  const neighborhoods = [
    { name: "Roermond Centrum", type: "Historische kern, gemengd" },
    { name: "Herten", type: "Woonwijken, gezinswoningen" },
    { name: "Donderberg", type: "Nieuwbouw, moderne woningen" },
    { name: "Maasniel", type: "Dorps karakter, rijtjeshuizen" },
    { name: "Binnenstad", type: "Appartementen, stadswoningen" },
    { name: "Kraaybeek", type: "Eengezinswoningen, jaren '80" },
    { name: "Deken van Oppensingel", type: "Vrijstaande woningen" },
    { name: "Designer Outlet omgeving", type: "Nieuwbouw, expats" }
  ];

  const localStats = [
    { label: "Zonnepanelen in Roermond", value: "~5.200 daken", trend: "+30% sinds 2023" },
    { label: "Gemiddelde jaaropbrengst", value: "3.700 kWh", trend: "Midden-Limburg top 5" },
    { label: "Saldering vervalt", value: "2027", trend: "Nog 2 jaar voordeel" },
    { label: "Terugverdientijd batterij", value: "7-9 jaar", trend: "Met 0% BTW" }
  ];

  const useCases = [
    {
      icon: <ShoppingBag className="h-8 w-8 text-yellow-500" />,
      title: "Outlet Economie = Veel Expats",
      description: "Designer Outlet trekt internationale bedrijven en expats. Moderne nieuwbouw met hoogwaardig energiemanagement. Thuisbatterijen standaard in premium woningen."
    },
    {
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      title: "Nieuwbouwwijken Klaar Voor Batterijen",
      description: "Veel nieuwbouw in Donderberg, Herten en Kraaybeek. Moderne meterkasten, 3-fase aansluitingen, ruime garages = ideaal voor thuisbatterijen zonder aanpassingen."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Duurzaamheidsambities Gemeente",
      description: "Roermond ambitie: CO2-neutrale gemeente in 2040. Stimuleringsregelingen voor bewoners (check gemeente-website). Thuisbatterijen passen perfect in deze strategie."
    }
  ];

  const faqs = [
    {
      question: "Hoeveel woningen in Roermond hebben al een thuisbatterij?",
      answer: "Geschat ~200-300 thuisbatterijen in Roermond (2025). Vooral in nieuwbouwwijken zoals Donderberg en bij expat-woningen rond Designer Outlet. Verwachte groei: 1.000+ in 2027 door einde saldering en toenemend bewustzijn."
    },
    {
      question: "Wat zijn de installatiekosten in Roermond?",
      answer: "All-in prijzen voor Roermond: SMILE-B3 (2,9 kWh): €4.545 incl. installatie en 0% BTW, SMILE5 (5 kWh): €5.785 incl. installatie en 0% BTW, SMILE-G3-T10 (11.55 kWh): €7.750 incl. installatie en 0% BTW. Geen extra reiskosten binnen Roermond en directe omgeving (Maasniel, Swalmen, Herkenbosch). Inclusief: volledige installatie, NEN1010 keuring, 10 jaar garantie, monitoring, instructie."
    },
    {
      question: "Welke capaciteit heb ik nodig in Roermond?",
      answer: "Hangt af van woningtype en verbruik: Klein gezin Maasniel/Binnenstad (2-3 pers.): SMILE-B3 (2,9 kWh) - €4.545 - besparing €350/jaar, Gemiddeld gezin Herten/Kraaybeek (3-4 pers.): SMILE5 (5 kWh) - €5.785 - besparing €600/jaar, Grote woning Donderberg/Designer Outlet + elektrische auto: SMILE-G3-T10 (11.55 kWh) - €7.750 - besparing €900-1.200/jaar. We maken persoonlijke berekening tijdens intake op basis van jouw jaarverbruik en zonnepanelen."
    },
    {
      question: "Hoe snel kan installatie in Roermond?",
      answer: "Standaard planning: Stap 1: Gratis intake op locatie (binnen 48 uur na aanvraag), Stap 2: Offerte binnen 24 uur na intake, Stap 3: Bij akkoord: levering binnen 1-2 weken, Stap 4: Installatie in 1 dag (4-8 uur afhankelijk systeem). Totaal: 2-3 weken van eerste contact tot werkende batterij. Spoed mogelijk bij voorraad. In drukke perioden (einde saldering): 3-4 weken."
    },
    {
      question: "Moet mijn meterkast worden aangepast in een Roermondse woning?",
      answer: "Hangt af van leeftijd meterkast en woningtype: Nieuwbouw (na 2010): meestal geen aanpassing, 1-2 groepen toevoegen (€0 extra). Perfect voor Donderberg, nieuwe wijken Herten. Oudere meterkast (2000-2010): soms kleine aanpassing (€0-200 extra). Typisch voor Kraaybeek, Maasniel. Oude meterkast (voor 2000): mogelijk moderniseren nodig (€400-700 extra). We beoordelen dit altijd tijdens intake. Bij nieuwbouw rond Outlet: meestal ideale situatie zonder aanpassingen."
    },
    {
      question: "Zijn er lokale subsidies in Roermond voor thuisbatterijen?",
      answer: "Stand 2025: Landelijk: 0% BTW op thuisbatterijen (loopt door t/m 2027), Provincie Limburg: geen aparte thuisbatterij-subsidie momenteel, Gemeente Roermond: check actuele Duurzaamheidsregelingen op roermond.nl (gemeente heeft ambities, regelingen kunnen komen). Let op: regelingen veranderen regelmatig. Wij helpen je zoeken tijdens intake. Ook: energiecoöperaties in Midden-Limburg hebben soms collectieve acties. Tip: SEEH (Stimuleringsregeling Energieprestatie Eigen Huis) geeft belastingvoordeel bij energetische verbeteringen (inclusief batterijen)."
    },
    {
      question: "Wat bij nieuwbouwwoningen in Donderberg of Herten?",
      answer: "Nieuwbouwwoningen zijn ideaal voor thuisbatterijen: meestal al voorbereiding voor zonnepanelen + batterij, moderne meterkast met 3-fase aansluiting, ruime garages/bijkeukens, nette kabelgoten aanwezig. Advies: installeer batterij direct bij oplevering = optimale integratie, geen nabewerking. We werken veel samen met projectontwikkelaars en aannemers in Roermond. Ook mogelijk: collectieve inkoop voor hele nieuwbouwwijk (lagere prijzen). Neem contact op als jouw wijk interesse heeft."
    },
    {
      question: "Kan ik als expat bij Designer Outlet een thuisbatterij installeren?",
      answer: "Ja, absoluut! We hebben ervaring met internationale klanten: Engels/Duits/Frans mogelijk tijdens intake en installatie, alle documentatie in jouw taal beschikbaar, uitleg app en monitoring in jouw taal, internationale garantie (AlphaESS wereldwijd actief). Veel expat-woningen rond Outlet zijn nieuwbouw met uitstekende voorzieningen voor batterijen. Tip: overleg met verhuurder/eigenaar als je huurt (vaak positief, want waardeverhoging woning). Bij verkoop woning: batterij verhoogt woningwaarde met ~70% van aanschafprijs."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Roermond | AlphaESS Installatie & Service | 0% BTW | StayCool Airco"
        description="Thuisbatterij Roermond ✓ AlphaESS dealer ✓ 0% BTW ✓ 10 jaar garantie ✓ Installatie in 1 dag ✓ Lokale service Limburg"
      />

      <SchemaMarkup
        type="LocalBusiness"
        data={{
          "@type": "LocalBusiness",
          name: "StayCool Airco - Thuisbatterij Installatie Roermond",
          description: "Professionele installatie van AlphaESS thuisbatterijen in Roermond. Gecertificeerd dealer met lokale service.",
          image: "https://staycoolairco.nl/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Roermond",
            addressRegion: "Limburg",
            addressCountry: "NL"
          },
          telephone: "+31462021430",
          priceRange: "€4545-€7750",
          areaServed: {
            "@type": "City",
            name: "Roermond"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Roermond: AlphaESS Installatie met Lokale Service
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Professionele installatie van AlphaESS thuisbatterijen in Roermond en omstreken. Specialist in nieuwbouw Donderberg en moderne woningen. Installatie in 1 dag, 10 jaar garantie, 0% BTW.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Intake in Roermond
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              046 202 1430
            </a>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Lokaal in Roermond = Snelle Service</p>
                <p className="text-sm">
                  Binnen 24 uur intake op locatie, installatie binnen 1-2 weken, persoonlijk contact, lokale garantieafhandeling. Specialist in nieuwbouw en moderne woningen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Installeren in Alle Roermondse Wijken
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van historische binnenstad tot moderne nieuwbouw
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">{neighborhood.name}</h3>
                    <p className="text-xs text-gray-600">{neighborhood.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <p className="font-bold text-gray-900 mb-2">Ook in omliggende dorpen:</p>
            <p className="text-gray-700 text-sm">
              Swalmen, Herkenbosch, Asselt, Boukoul, Swalmen, Herten-Merum. Binnen 20 min rijden van Roermond = geen extra reiskosten.
            </p>
          </div>
        </div>
      </section>

      {/* Local Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Energie-situatie in Roermond (2025)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Waarom een thuisbatterij nu interessant is
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm text-green-600 font-semibold">{stat.trend}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wat betekent dit voor jou?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Snelle groei zonnepanelen:</strong> +30% sinds 2023. Thuisbatterijen volgende logische stap voor maximaal rendement.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Saldering eindigt 2027:</strong> Nog 2 jaar om batterij aan te schaffen vóór volledig einde terugleververgoeding.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>0% BTW loopt door t/m 2027:</strong> Nu kopen = €1.300 besparing op BTW (bij SMILE-G3-T10). Daarna 21% BTW.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thuisbatterijen in Roermond: Specifieke Voordelen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Waarom Roermondse woningeigenaren kiezen voor batterijen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{useCase.title}</h3>
                <p className="text-gray-600 text-center">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AlphaESS Thuisbatterijen voor Roermond: All-In Prijzen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparante pakketten inclusief installatie, keuring en garantie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basis Pakket */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basis Pakket</h3>
                <p className="text-lg font-semibold text-yellow-600 mb-4">SMILE-B3 (2,9 kWh)</p>
                <p className="text-sm text-gray-600 mb-6">Klein gezin Maasniel/Binnenstad (2-3 pers.)</p>

                <div className="mb-6 text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-1">€4.545</p>
                  <p className="text-sm text-green-600 font-semibold">0% BTW</p>
                  <p className="text-xs text-gray-500">Besparing: €350/jaar</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-gray-900 mb-3">Inclusief:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      AlphaESS SMILE-B3 batterij
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      Complete installatie Roermond
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      NEN1010 keuring + certificaat
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      10 jaar garantie
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      AlphaCloud monitoring + app
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-100 rounded p-3 mb-6">
                  <p className="text-sm text-gray-600">Installatieduur</p>
                  <p className="text-lg font-bold text-gray-900">4-5 uur</p>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Gratis Offerte
                </Link>
              </div>
            </div>

            {/* Comfort Pakket - POPULAR */}
            <div className="rounded-lg overflow-hidden shadow-lg border-4 border-yellow-500">
              <div className="bg-yellow-500 text-gray-900 text-center font-bold py-2">
                ⭐ Meest Gekozen in Roermond
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Comfort Pakket</h3>
                <p className="text-lg font-semibold text-yellow-600 mb-4">SMILE5 (5 kWh)</p>
                <p className="text-sm text-gray-600 mb-6">Gemiddeld gezin Herten/Kraaybeek (3-4 pers.)</p>

                <div className="mb-6 text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-1">€5.785</p>
                  <p className="text-sm text-green-600 font-semibold">0% BTW</p>
                  <p className="text-xs text-gray-500">Besparing: €600/jaar</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-gray-900 mb-3">Inclusief:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      AlphaESS SMILE5 batterij (5 kWh)
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      Complete installatie Roermond
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      NEN1010 keuring + certificaat
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      10 jaar garantie
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      AlphaCloud monitoring + app
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      1x gratis servicebeurt
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-100 rounded p-3 mb-6">
                  <p className="text-sm text-gray-600">Installatieduur</p>
                  <p className="text-lg font-bold text-gray-900">5-6 uur</p>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Gratis Offerte
                </Link>
              </div>
            </div>

            {/* Premium Pakket */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Pakket</h3>
                <p className="text-lg font-semibold text-yellow-600 mb-4">SMILE-G3-T10 (11.55 kWh)</p>
                <p className="text-sm text-gray-600 mb-6">Grote woning Donderberg/Outlet + elektrische auto</p>

                <div className="mb-6 text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-1">€7.750</p>
                  <p className="text-sm text-green-600 font-semibold">0% BTW</p>
                  <p className="text-xs text-gray-500">Besparing: €900-1.200/jaar</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-gray-900 mb-3">Inclusief:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      AlphaESS SMILE-G3-T10 (11.55 kWh)
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      3-fase aansluiting
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      Complete installatie Roermond
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      NEN1010 keuring + certificaat
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      10 jaar garantie
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      AlphaCloud Premium (EPEX handel)
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      2x gratis servicebeurt
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-100 rounded p-3 mb-6">
                  <p className="text-sm text-gray-600">Installatieduur</p>
                  <p className="text-lg font-bold text-gray-900">6-8 uur</p>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Gratis Offerte
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Alle prijzen zijn all-in voor Roermond:</strong> geen reiskosten, geen verborgen kosten.
            </p>
            <p className="text-sm text-gray-500">
              Bij nieuwbouwwoningen vaak nog sneller/goedkoper door optimale situatie (moderne meterkast, ruime garages).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Nu Met Besparen - Gratis Intake in Roermond
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            We komen vrijblijvend langs in heel Roermond en omstreken. Beoordelen situatie, bespreken mogelijkheden en maken persoonlijk advies. Binnen 24 uur gedetailleerde offerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Gratis Intake
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Thuisbatterijen in Roermond
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Thuisbatterij Installatie in Heel Roermond
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS specialist | Nieuwbouw specialist | Installatie in 1 dag | 10 jaar garantie | 0% BTW | Lokale service | Herten, Donderberg, Maasniel en alle wijken
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Intake Aanvragen
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk AlphaESS Systemen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijRoermondPage;
