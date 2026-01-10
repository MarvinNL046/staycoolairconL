import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Euro, Phone, Battery, ArrowRight, Clock, Shield, Home, Wrench, Award, TrendingUp } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijMaastrichtPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Maastricht' }
  ];

  const neighborhoods = [
    { name: "Wyck", type: "Monumentale panden, smalle straten" },
    { name: "Jekerkwartier", type: "Stadsvilla's, studentenwoningen" },
    { name: "Randwyck", type: "Moderne nieuwbouw, gezinswoningen" },
    { name: "Daalhof", type: "Eengezinswoningen, jaren '60-'70" },
    { name: "Wittevrouwenveld", type: "Appartementen, complexen" },
    { name: "Biesland", type: "Vrijstaande woningen, rijtjeshuizen" },
    { name: "Vroendaal", type: "Gezinswoningen, nieuwbouw" },
    { name: "Malberg", type: "Jonge gezinnen, moderne woningen" }
  ];

  const localStats = [
    { label: "Zonnepanelen in Maastricht", value: "~8.500 daken", trend: "+25% sinds 2023" },
    { label: "Gemiddelde jaaropbrengst", value: "3.800 kWh", trend: "Zuid-Limburg top 3 NL" },
    { label: "Saldering vervalt", value: "2027", trend: "Nog 2 jaar voordeel" },
    { label: "Terugverdientijd batterij", value: "7-9 jaar", trend: "Met 0% BTW" }
  ];

  const useCases = [
    {
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      title: "Studentenstad Voordeel",
      description: "Veel verhuurders investeren nu in thuisbatterijen. Lagere energiekosten = aantrekkelijker voor huurders. ROI binnen 8 jaar bij meerdere units."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "Monumentale Panden",
      description: "Ook voor monumentale panden in Wyck en binnenstad perfect mogelijk. Batterij binnen, zonnepanelen niet altijd nodig (laden nachtstroom). Welstandscommissie geen probleem."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      title: "Energietransitie Maastricht",
      description: "Gemeente Maastricht ambitie: 49% CO2-reductie in 2030. Thuisbatterijen dragen bij. Mogelijk lokale subsidies (check gemeente)."
    }
  ];

  const faqs = [
    {
      question: "Hoeveel woningen in Maastricht hebben al een thuisbatterij?",
      answer: "Geschat ~350-500 thuisbatterijen in Maastricht (2025). Met name in nieuwbouwwijken zoals Malberg, Vroendaal en Biesland zie je snelle groei. In monumentale binnenstad langzamer, maar wel toenemend door betere systemen en lagere prijzen. Verwachting: 2.000+ in 2027 door einde saldering."
    },
    {
      question: "Kan ik een thuisbatterij installeren in een monumentaal pand in Wyck of binnenstad?",
      answer: "Ja, absoluut! Batterij wordt binnen geplaatst (kelder, bijkeuken, garage) - geen welstandsvergunning nodig. Zonnepanelen zijn niet verplicht: je kunt nachtstroom inkopen en overdag gebruiken. Voor monumenten: moderne batterijen zijn compact (50x60x20cm) en stil. We hebben ervaring met historische panden. Wel: soms beperkte toegang voor monteurs (smalle trappen, geen lift). Dit checken we bij intake."
    },
    {
      question: "Wat zijn de installatiekosten in Maastricht?",
      answer: "All-in prijzen voor Maastricht: SMILE-B3 (2,9 kWh): €4.545 incl. installatie en 0% BTW, SMILE5 (5 kWh): €5.785 incl. installatie en 0% BTW, SMILE-G3-T10 (11.55 kWh): €7.750 incl. installatie en 0% BTW. Geen extra reiskosten binnen Maastricht. Inclusief: volledige installatie, NEN1010 keuring, 10 jaar garantie, monitoring, instructie. Bij smalle toegang of historische panden: mogelijk meerprijs voor extra tijd/voorzichtigheid (bespreken we vooraf)."
    },
    {
      question: "Welke capaciteit heb ik nodig in Maastricht?",
      answer: "Hangt af van woningtype en verbruik: Studenten/klein appartement (1-2 pers.): SMILE-B3 (2,9 kWh) - €4.545 - besparing €350/jaar, Gemiddeld gezin Randwyck/Daalhof (3-4 pers.): SMILE5 (5 kWh) - €5.785 - besparing €600/jaar, Grote woning Biesland/Vroendaal + elektrische auto: SMILE-G3-T10 (11.55 kWh) - €7.750 - besparing €900-1.200/jaar. We maken persoonlijke berekening tijdens intake op basis van jouw jaarverbruik en zonnepanelen."
    },
    {
      question: "Hoe snel kan installatie in Maastricht?",
      answer: "Standaard planning: Stap 1: Gratis intake op locatie (binnen 48 uur na aanvraag), Stap 2: Offerte binnen 24 uur na intake, Stap 3: Bij akkoord: levering binnen 1-2 weken, Stap 4: Installatie in 1 dag (4-8 uur afhankelijk systeem). Totaal: 2-3 weken van eerste contact tot werkende batterij. Spoed mogelijk bij voorraad: soms binnen 1 week. In drukke perioden (voor/na belastingaangifte, einde saldering): 3-4 weken."
    },
    {
      question: "Moet mijn meterkast worden aangepast in een oud Maastrichts pand?",
      answer: "Hangt af van leeftijd meterkast: Moderne meterkast (na 2010): meestal geen aanpassing, 1-2 groepen toevoegen (€0 extra), Oude meterkast (voor 2000): vaak moderniseren nodig (€400-700 extra), Zeer oude meterkast (voor 1980): verplichte upgrade (€800-1.200 extra). We beoordelen dit altijd tijdens intake. Bij monumenten: soms historische meterkasten die met zorg gemoderniseerd worden. Alle werk NEN1010 gekeurd, garantie op installatie."
    },
    {
      question: "Zijn er lokale subsidies in Maastricht voor thuisbatterijen?",
      answer: "Stand 2025: Landelijk: 0% BTW op thuisbatterijen (loopt door t/m 2027), Provincie Limburg: geen aparte thuisbatterij-subsidie momenteel, Gemeente Maastricht: check actuele Duurzaamheidslening (rentevoordeel) op maastricht.nl. Let op: regelingen veranderen regelmatig. Wij helpen je zoeken tijdens intake. Ook: energiecoöperaties in Maastricht (bijv. Energie-U) hebben soms collectieve acties. Tip: SEEH (Stimuleringsregeling Energieprestatie Eigen Huis) geeft belastingvoordeel bij energetische verbeteringen (inclusief batterijen)."
    },
    {
      question: "Wat bij parkeerproblemen in Maastricht binnenstad?",
      answer: "Wij regelen parkeervergunning voor monteurs (busje, max 1 dag). Bij zeer smalle straten in Wyck/binnenstad: soms lopen vanaf nabijgelegen parkeerplaats. Materiaal dragen we zelf (batterij ~30kg, draagbaar). Tip: waarschuw ons bij intake over parkeersituatie, dan plannen we extra tijd. Alternatief: weekend-installatie (minder parkeerdruk). We hebben veel ervaring met binnenstadsituaties."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Maastricht | AlphaESS Installatie & Service | 0% BTW | StayCool Airco"
        description="Thuisbatterij Maastricht ✓ AlphaESS dealer ✓ 0% BTW ✓ 10 jaar garantie ✓ Installatie in 1 dag ✓ Lokale service Limburg"
      />

      <SchemaMarkup
        type="LocalBusiness"
        data={{
          "@type": "LocalBusiness",
          name: "StayCool Airco - Thuisbatterij Installatie Maastricht",
          description: "Professionele installatie van AlphaESS thuisbatterijen in Maastricht. Gecertificeerd dealer met lokale service.",
          image: "https://staycoolairco.nl/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Maastricht",
            addressRegion: "Limburg",
            addressCountry: "NL"
          },
          telephone: "+31462021430",
          priceRange: "€4545-€7750",
          areaServed: {
            "@type": "City",
            name: "Maastricht"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Maastricht: AlphaESS Installatie met Lokale Service
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Professionele installatie van AlphaESS thuisbatterijen in Maastricht en omstreken. Ook voor monumentale panden in Wyck en binnenstad. Installatie in 1 dag, 10 jaar garantie, 0% BTW.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Intake in Maastricht
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
                <p className="font-bold mb-1">Lokaal in Maastricht = Snelle Service</p>
                <p className="text-sm">
                  Binnen 24 uur intake op locatie, installatie binnen 1-2 weken, persoonlijk contact, lokale garantieafhandeling. We kennen Maastrichtse bouwstijlen en situaties.
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
              We Installeren in Alle Maastrichtse Wijken
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van monumentale binnenstad tot moderne nieuwbouw
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
              Meerssen, Valkenburg, Margraten, Eijsden, Gulpen, Cadier en Keer, Berg en Terblijt, Sint Geertruid. Binnen 30 min rijden van Maastricht = geen extra reiskosten.
            </p>
          </div>
        </div>
      </section>

      {/* Local Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Energie-situatie in Maastricht (2025)
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
                  <strong>Veel zonnepanelen, weinig batterijen:</strong> Je concurrent heeft ze nog niet. Vroege adoptie = maximaal voordeel.
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
              Thuisbatterijen in Maastricht: Specifieke Voordelen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Waarom Maastrichtse woningeigenaren kiezen voor batterijen
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
              AlphaESS Thuisbatterijen voor Maastricht: All-In Prijzen
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
                <p className="text-sm text-gray-600 mb-6">Student/klein appartement Wyck of binnenstad</p>

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
                      Complete installatie Maastricht
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
                ⭐ Meest Gekozen in Maastricht
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Comfort Pakket</h3>
                <p className="text-lg font-semibold text-yellow-600 mb-4">SMILE5 (5 kWh)</p>
                <p className="text-sm text-gray-600 mb-6">Gemiddeld gezin Randwyck/Daalhof (2-4 pers.)</p>

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
                      Complete installatie Maastricht
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
                <p className="text-sm text-gray-600 mb-6">Grote woning Biesland/Vroendaal + elektrische auto</p>

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
                      Complete installatie Maastricht
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
              <strong>Alle prijzen zijn all-in voor Maastricht:</strong> geen reiskosten, geen verborgen kosten.
            </p>
            <p className="text-sm text-gray-500">
              Bij monumentale panden of zeer smalle toegang: mogelijk meerprijs voor extra voorzichtigheid/tijd. Bespreken we vooraf tijdens intake.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Nu Met Besparen - Gratis Intake in Maastricht
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            We komen vrijblijvend langs in heel Maastricht en omstreken. Beoordelen situatie, bespreken mogelijkheden en maken persoonlijk advies. Binnen 24 uur gedetailleerde offerte.
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
            Veelgestelde Vragen over Thuisbatterijen in Maastricht
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
            Thuisbatterij Installatie in Heel Maastricht
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS specialist | Ook monumentale panden | Installatie in 1 dag | 10 jaar garantie | 0% BTW | Lokale service | Wyck, Randwyck, Daalhof, Malberg en alle wijken
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

export default ThuisbatterijMaastrichtPage;
