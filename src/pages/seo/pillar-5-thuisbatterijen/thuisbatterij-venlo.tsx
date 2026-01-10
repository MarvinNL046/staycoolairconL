import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Euro, Phone, Battery, ArrowRight, Clock, Shield, Home, Wrench, Award, Truck } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijVenloPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Venlo' }
  ];

  const neighborhoods = [
    { name: "Venlo Centrum", type: "Historisch, binnenstad" },
    { name: "Blerick", type: "Dorpskern, gemengde bebouwing" },
    { name: "Tegelen", type: "Woonwijken, eengezinswoningen" },
    { name: "Steyl", type: "Dorps karakter, rijtjeshuizen" },
    { name: "Hagerhof", type: "Nieuwbouw, moderne woningen" },
    { name: "Lomm", type: "Landelijk, vrijstaande woningen" },
    { name: "Velden", type: "Woonwijken, jaren '80-'90" },
    { name: "Trade Port Noord", type: "Logistieke bedrijven, loodsen" }
  ];

  const localStats = [
    { label: "Zonnepanelen in Venlo", value: "~6.500 daken", trend: "+28% sinds 2023" },
    { label: "Gemiddelde jaaropbrengst", value: "3.750 kWh", trend: "Noord-Limburg top 3" },
    { label: "Grensregio voordeel", value: "Duitsland", trend: "Duitse kennis beschikbaar" },
    { label: "Terugverdientijd batterij", value: "7-9 jaar", trend: "Met 0% BTW" }
  ];

  const useCases = [
    {
      icon: <Truck className="h-8 w-8 text-yellow-500" />,
      title: "Logistieke Sector = Veel Bedrijven",
      description: "Trade Port en Greenport grootste logistieke centrum NL. Bedrijven investeren in zonne-energie + thuisbatterijen (magazijnen, kantoren). Ook voor medewonerkers interessant (lagere energiekosten)."
    },
    {
      icon: <MapPin className="h-8 w-8 text-yellow-500" />,
      title: "Grensregio Duitsland",
      description: "Veel Duitsers wonen in Venlo of hebben tweede woning. Duitse kennis beschikbaar tijdens intake/installatie. AlphaESS ook populair in Duitsland = internationale ervaring."
    },
    {
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      title: "Nieuwbouw Hagerhof & Velden",
      description: "Veel nieuwbouwprojecten in Venlo. Moderne meterkasten, 3-fase aansluitingen, ruime garages = ideaal voor thuisbatterijen zonder aanpassingen. Collectieve inkoop mogelijk."
    }
  ];

  const faqs = [
    {
      question: "Hoeveel woningen in Venlo hebben al een thuisbatterij?",
      answer: "Geschat ~250-350 thuisbatterijen in Venlo (2025). Met name in nieuwbouwwijken zoals Hagerhof en bij bedrijven in Trade Port. Verwachte groei: 1.200+ in 2027 door einde saldering en toenemende interesse vanuit logistieke sector."
    },
    {
      question: "Wat zijn de installatiekosten in Venlo?",
      answer: "All-in prijzen voor Venlo: SMILE-B3 (2,9 kWh): €4.545 incl. installatie en 0% BTW, SMILE5 (5 kWh): €5.785 incl. installatie en 0% BTW, SMILE-G3-T10 (11.55 kWh): €7.750 incl. installatie en 0% BTW. Geen extra reiskosten binnen Venlo en directe omgeving (Blerick, Tegelen, Steyl, Lomm, Belfeld, Grubbenvorst). Inclusief: volledige installatie, NEN1010 keuring, 10 jaar garantie, monitoring, instructie."
    },
    {
      question: "Kan ik als Duitse inwoner een thuisbatterij installeren in Venlo?",
      answer: "Ja, absoluut! We hebben ervaring met Duitse klanten: Deutsch/Engels mogelijk tijdens intake en installatie, alle documentatie in jouw taal beschikbaar, uitleg app en monitoring in Deutsch, internationale garantie (AlphaESS wereldwijd actief, ook in Duitsland). Technisch: Nederlands 230V netwerk = compatibel met AlphaESS systemen (ook gebruikt in Duitsland). Let op: bij Duitse energiecontracten soms andere voorwaarden (saldering). Neem contact op voor advies."
    },
    {
      question: "Welke capaciteit heb ik nodig in Venlo?",
      answer: "Hangt af van woningtype en verbruik: Klein gezin Blerick/Steyl (2-3 pers.): SMILE-B3 (2,9 kWh) - €4.545 - besparing €350/jaar, Gemiddeld gezin Tegelen/Velden (3-4 pers.): SMILE5 (5 kWh) - €5.785 - besparing €600/jaar, Grote woning Hagerhof/Lomm + elektrische auto: SMILE-G3-T10 (11.55 kWh) - €7.750 - besparing €900-1.200/jaar. We maken persoonlijke berekening tijdens intake op basis van jouw jaarverbruik en zonnepanelen."
    },
    {
      question: "Zijn thuisbatterijen geschikt voor bedrijven in Trade Port?",
      answer: "Ja, zeer geschikt voor kantoren, showrooms en kleine productie: voordelen: lagere energiekosten (bedrijven betalen vaak hogere kWh-prijs), piekvermogen opvangen (voorkom dure piekbelasting), groene imago (duurzaamheid steeds belangrijker), mogelijk subsidies zakelijk (ISDE regeling). Capaciteit zakelijk: vaak SMILE-G3-T10 (11.55 kWh) of meerdere units parallel. Bij grote bedrijfspanden: commerciële AlphaESS systemen tot 50+ kWh mogelijk. Neem contact op voor zakelijk advies en offerte op maat."
    },
    {
      question: "Hoe snel kan installatie in Venlo?",
      answer: "Standaard planning: Stap 1: Gratis intake op locatie (binnen 48 uur na aanvraag), Stap 2: Offerte binnen 24 uur na intake, Stap 3: Bij akkoord: levering binnen 1-2 weken, Stap 4: Installatie in 1 dag (4-8 uur afhankelijk systeem). Totaal: 2-3 weken van eerste contact tot werkende batterij. Spoed mogelijk bij voorraad. In drukke perioden (einde saldering): 3-4 weken."
    },
    {
      question: "Moet mijn meterkast worden aangepast in Venlo?",
      answer: "Hangt af van leeftijd meterkast en woningtype: Nieuwbouw Hagerhof (na 2010): meestal geen aanpassing, 1-2 groepen toevoegen (€0 extra), Oudere wijken Tegelen/Velden (1980-2010): soms kleine aanpassing (€0-300 extra), Oude meterkast Blerick/Steyl (voor 1980): mogelijk moderniseren nodig (€400-700 extra). We beoordelen dit altijd tijdens gratis intake. Alle werk volgens NEN1010, inclusief keuring en certificaat."
    },
    {
      question: "Zijn er lokale subsidies in Venlo voor thuisbatterijen?",
      answer: "Stand 2025: Landelijk: 0% BTW op thuisbatterijen (loopt door t/m 2027), Provincie Limburg: geen aparte thuisbatterij-subsidie momenteel, Gemeente Venlo: check actuele Duurzaamheidsregelingen op venlo.nl (gemeente heeft ambities). Zakelijk: ISDE regeling (Investeringssubsidie Duurzame Energie) voor bedrijven in Trade Port. Let op: regelingen veranderen regelmatig. Wij helpen je zoeken tijdens intake. Ook: energiecoöperaties in Noord-Limburg hebben soms collectieve acties. Tip: SEEH (Stimuleringsregeling Energieprestatie Eigen Huis) geeft belastingvoordeel bij energetische verbeteringen (inclusief batterijen)."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Venlo | AlphaESS Installatie & Service | 0% BTW | StayCool Airco"
        description="Thuisbatterij installatie Venlo ✓ AlphaESS dealer ✓ Blerick, Tegelen, Hagerhof ✓ Ook Deutsch möglich ✓ 0% BTW ✓ 10 jaar garantie ✓ Installatie in 1 dag ✓ Lokale service"
      />

      <SchemaMarkup
        type="LocalBusiness"
        data={{
          "@type": "LocalBusiness",
          name: "StayCool Airco - Thuisbatterij Installatie Venlo",
          description: "Professionele installatie van AlphaESS thuisbatterijen in Venlo. Gecertificeerd dealer met lokale service.",
          image: "https://staycoolairco.nl/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Venlo",
            addressRegion: "Limburg",
            addressCountry: "NL"
          },
          telephone: "+31462021430",
          priceRange: "€4545-€7750",
          areaServed: {
            "@type": "City",
            name: "Venlo"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Venlo: AlphaESS Installatie - Auch Deutsch Möglich
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Professionele installatie van AlphaESS thuisbatterijen in Venlo en omstreken. Grensregio-specialist, ook voor Duitse klanten. Installatie in 1 dag, 10 jaar garantie, 0% BTW.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Intake in Venlo
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
                <p className="font-bold mb-1">Lokaal in Venlo = Snelle Service | Auch auf Deutsch</p>
                <p className="text-sm">
                  Binnen 24 uur intake op locatie, installatie binnen 1-2 weken, persoonlijk contact, lokale garantieafhandeling. Deutsche Beratung möglich.
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
              We Installeren in Heel Venlo en Omstreken
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van historisch centrum tot moderne nieuwbouw en zakelijke locaties
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
              Belfeld, Grubbenvorst, Horst, Sevenum, Arcen, Meerlo, Bergen. Binnen 25 min rijden van Venlo = geen extra reiskosten.
            </p>
          </div>
        </div>
      </section>

      {/* Local Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Energie-situatie in Venlo (2025)
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
                  <strong>Snelle groei zonnepanelen:</strong> +28% sinds 2023. Thuisbatterijen volgende logische stap voor maximaal rendement.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Grensregio voordeel:</strong> Kennis van Duitse situaties en regelgeving. Auch auf Deutsch möglich.
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
              Thuisbatterijen in Venlo: Specifieke Voordelen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Waarom Venlose woningeigenaren en bedrijven kiezen voor batterijen
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
              AlphaESS Thuisbatterijen voor Venlo: All-In Prijzen
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
                <p className="text-sm text-gray-600 mb-6">Klein gezin Blerick/Steyl (2-3 pers.)</p>

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
                      Complete installatie Venlo
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
                ⭐ Meest Gekozen in Venlo
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Comfort Pakket</h3>
                <p className="text-lg font-semibold text-yellow-600 mb-4">SMILE5 (5 kWh)</p>
                <p className="text-sm text-gray-600 mb-6">Gemiddeld gezin Tegelen/Velden (3-4 pers.)</p>

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
                      Complete installatie Venlo
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
                <p className="text-sm text-gray-600 mb-6">Grote woning Hagerhof/Lomm + elektrische auto</p>

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
                      Complete installatie Venlo
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
              <strong>Alle prijzen zijn all-in voor Venlo:</strong> geen reiskosten, geen verborgen kosten.
            </p>
            <p className="text-sm text-gray-500">
              Zakelijke installaties (Trade Port, kantoren): neem contact op voor offerte op maat.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Nu Met Besparen - Gratis Intake in Venlo
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            We komen vrijblijvend langs in heel Venlo en omstreken. Beoordelen situatie, bespreken mogelijkheden en maken persoonlijk advies. Binnen 24 uur gedetailleerde offerte. Auch auf Deutsch möglich.
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
            Veelgestelde Vragen over Thuisbatterijen in Venlo
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
            Thuisbatterij Installatie in Heel Venlo
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS specialist | Grensregio Duitsland | Zakelijke installaties | 10 jaar garantie | 0% BTW | Lokale service | Blerick, Tegelen, Hagerhof en alle wijken | Auch auf Deutsch
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

export default ThuisbatterijVenloPage;
