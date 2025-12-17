import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Euro, Phone, Battery, ArrowRight, Clock, Shield, Home, Wrench, Award, Zap } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijHeerlenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Heerlen' }
  ];

  const neighborhoods = [
    { name: "Heerlen Centrum", type: "Stadskern, gemengde bebouwing" },
    { name: "Heerlerbaan", type: "Rijtjeshuizen, mijnwerkerswijk" },
    { name: "Schaesbergerveld", type: "Eengezinswoningen, jaren '70" },
    { name: "Molenberg", type: "Sociale woningbouw, flats" },
    { name: "Palemig", type: "Rijtjeshuizen, woonwijken" },
    { name: "Hoensbroek", type: "Dorpskern, diverse woningtypen" },
    { name: "Heerlerbaan-Noord", type: "Vrijstaande woningen" },
    { name: "Nieuwenhagerheide", type: "Sociale woningbouw, gemengd" }
  ];

  const localStats = [
    { label: "Zonnepanelen in Parkstad", value: "~12.000 daken", trend: "+35% sinds 2023" },
    { label: "Gemiddelde jaaropbrengst", value: "3.650 kWh", trend: "Zuid-Limburg" },
    { label: "Energiearmoede regio", value: "15-20%", trend: "Batterijen helpen" },
    { label: "Terugverdientijd batterij", value: "6-8 jaar", trend: "Snelst in Limburg" }
  ];

  const useCases = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Energietransitie Mijnstreek",
      description: "Van mijnbouw naar duurzame energie. Parkstad koploper in energietransitie. Thuisbatterijen onderdeel van regionale strategie. Mogelijk lokale stimuleringsregelingen."
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Lagere Energierekening = Belangrijk",
      description: "In Parkstad relatief hoog energieverbruik (oudere woningen). Thuisbatterij bespaart €600-1.200/jaar. Bij energiearmoede kan dit verschil maken. Investering met hoge ROI."
    },
    {
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      title: "Oudere Woningen Moderniseren",
      description: "Veel woningen uit mijnbouwperiode (jaren '50-'70). Modernisering meterkast vaak nodig, maar mogelijkheden groot. Thuisbatterij onderdeel van totale verduurzaming."
    }
  ];

  const faqs = [
    {
      question: "Hoeveel woningen in Heerlen hebben al een thuisbatterij?",
      answer: "Geschat ~250-400 thuisbatterijen in Heerlen/Parkstad (2025). Vooral in modernere wijken en nieuwbouw. Groei +40% per jaar. Verwachting: 1.500+ in 2027 door einde saldering en lokale energietransitie-programma's."
    },
    {
      question: "Wat zijn de installatiekosten in Heerlen?",
      answer: "All-in prijzen voor Heerlen/Parkstad: SMILE-B3 (2,9 kWh): €4.545 incl. installatie en 0% BTW, SMILE5 (5 kWh): €5.785 incl. installatie en 0% BTW, SMILE-G3-T10 (11.55 kWh): €7.750 incl. installatie en 0% BTW. Geen extra reiskosten binnen Parkstad (Heerlen, Kerkrade, Landgraaf, Brunssum, Hoensbroek). Let op: bij zeer oude meterkasten (voor 1980, veel in mijnwerkerswoning): mogelijk modernisering nodig (€400-800 extra). Checken we tijdens gratis intake."
    },
    {
      question: "Moet mijn oude meterkast worden aangepast in een mijnwerkerswoning?",
      answer: "Vaak wel, maar dat is geen probleem: Woningen voor 1980 (veel mijnwerkerswoningen): meestal meterkast moderniseren (€400-800 extra), veiligheidseisen NEN1010, oude groepen vervangen. Woningen 1980-2000: soms kleine aanpassing (€200-400 extra). Woningen na 2000: meestal geen aanpassing (€0 extra). We beoordelen dit altijd tijdens gratis intake. Alle werk volgens NEN1010, inclusief keuring en certificaat. Investering meterkast = eenmalig, daarna 25+ jaar veilig."
    },
    {
      question: "Welke capaciteit heb ik nodig in Parkstad?",
      answer: "Hangt af van woningtype en verbruik (Parkstad relatief hoog verbruik door oudere woningen): Klein huishouden (1-2 pers., appartement): SMILE-B3 (2,9 kWh) - €4.545 - besparing €350/jaar, Gemiddeld gezin (3-4 pers., rijtjeshuis): SMILE5 (5 kWh) - €5.785 - besparing €650/jaar, Groot huishouden (4+ pers., vrijstaand): SMILE-G3-T10 (11.55 kWh) - €7.750 - besparing €950-1.300/jaar. Bij hoog verbruik (oude isolatie): overweeg eerst isolatie + batterij voor maximale besparing."
    },
    {
      question: "Zijn er lokale subsidies in Heerlen of Parkstad voor thuisbatterijen?",
      answer: "Stand 2025: Landelijk: 0% BTW op thuisbatterijen (loopt door t/m 2027), Provincie Limburg: geen aparte thuisbatterij-subsidie momenteel, Gemeente Heerlen: check actuele Verduurzamingsprogramma op heerlen.nl, Parkstad Limburg: soms regionale duurzaamheidsacties (check parkstadlimburg.nl). Specifiek: Parkstad Energie Transitie (PET) programma kan stimuleringsregelingen hebben. Ook: SEEH (Stimuleringsregeling Energieprestatie Eigen Huis) geeft belastingvoordeel. Wij helpen je zoeken tijdens intake. Let op: energiecoöperaties in Parkstad (bijv. Energie Samen) hebben regelmatig collectieve acties."
    },
    {
      question: "Hoe snel kan installatie in Parkstad?",
      answer: "Standaard planning: Stap 1: Gratis intake op locatie (binnen 48 uur na aanvraag), Stap 2: Offerte binnen 24 uur na intake (inclusief evt. meterkast-aanpassing), Stap 3: Bij akkoord: levering binnen 1-2 weken, Stap 4: Installatie in 1-2 dagen (dag 1: meterkast indien nodig, dag 2: batterij). Totaal: 2-4 weken van eerste contact tot werkende batterij. Bij meterkast-modernisering: +1 dag extra. Spoed mogelijk bij voorraad."
    },
    {
      question: "Wat bij energiearmoede of lage inkomens?",
      answer: "Thuisbatterij kan helpen, maar overweeg: Hoge initiële investering (€4.545-€7.750), maar bespaart structureel €350-1.300/jaar. Terugverdientijd 6-8 jaar, daarna winst. Financieringsmogelijkheden: (1) SEEH belastingvoordeel, (2) Duurzaamheidslening (rentevoordeel), (3) Energiecoöperatie collectieve actie (lagere prijzen). Advies: start met isolatie (subsidies beschikbaar) + kleine batterij SMILE-B3. Of wacht op lokale stimuleringsregelingen (mogelijk komend jaar). Neem contact op voor persoonlijk advies."
    },
    {
      question: "Werken jullie samen met woningcorporaties in Parkstad?",
      answer: "Ja, we hebben ervaring met woningcorporaties (Weller, Wonen Limburg, etc.): Huurwoningen: overleg met corporatie nodig (vaak positief, want lagere energiekosten huurders), installatie mogelijk met toestemming eigenaar, corporatie betaalt soms mee (verduurzamingsprogramma). Koopwoningen: geen toestemming nodig, volledige vrijheid. Bij meerdere woningen in complex: collectieve inkoop mogelijk (10-20% korting). Neem contact op als jouw corporatie/VVE interesse heeft."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Heerlen & Parkstad | AlphaESS Installatie | 0% BTW | StayCool Airco"
        description="Thuisbatterij installatie Heerlen & Parkstad ✓ AlphaESS dealer ✓ Energietransitie mijnstreek ✓ Ook oude meterkasten ✓ 0% BTW ✓ 10 jaar garantie ✓ Lokale service"
      />

      <SchemaMarkup
        type="LocalBusiness"
        data={{
          "@type": "LocalBusiness",
          name: "StayCool Airco - Thuisbatterij Installatie Heerlen",
          description: "Professionele installatie van AlphaESS thuisbatterijen in Heerlen en Parkstad. Gecertificeerd dealer met lokale service.",
          image: "https://staycoolairco.nl/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Heerlen",
            addressRegion: "Limburg",
            addressCountry: "NL"
          },
          telephone: "+31462021430",
          priceRange: "€4545-€7750",
          areaServed: {
            "@type": "City",
            name: "Heerlen"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Heerlen & Parkstad: Energietransitie Mijnstreek
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Professionele installatie van AlphaESS thuisbatterijen in Heerlen en heel Parkstad. Ook voor oudere woningen met meterkast-modernisering. Installatie in 1-2 dagen, 10 jaar garantie, 0% BTW.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Intake in Parkstad
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
                <p className="font-bold mb-1">Lokaal in Parkstad = Snelle Service</p>
                <p className="text-sm">
                  Binnen 24 uur intake op locatie, installatie binnen 2-3 weken (incl. meterkast-modernisering indien nodig), persoonlijk contact, lokale garantieafhandeling.
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
              We Installeren in Heel Parkstad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van mijnwerkerswijk tot moderne nieuwbouw
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
            <p className="font-bold text-gray-900 mb-2">Ook in omliggende Parkstad gemeenten:</p>
            <p className="text-gray-700 text-sm">
              Kerkrade, Landgraaf, Brunssum, Hoensbroek, Nuth, Simpelveld, Voerendaal. Hele Parkstad regio = geen extra reiskosten.
            </p>
          </div>
        </div>
      </section>

      {/* Local Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Energie-situatie in Parkstad (2025)
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
                  <strong>Snelste terugverdientijd:</strong> Door relatief hoog energieverbruik in Parkstad (oudere woningen) = hogere besparing = snellere terugverdientijd (6-8 jaar).
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Energietransitie-koploper:</strong> Parkstad ambitieus programma voor energietransitie. Mogelijk lokale stimuleringsregelingen binnenkort.
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
              Thuisbatterijen in Parkstad: Specifieke Voordelen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Waarom Parkstad bewoners kiezen voor batterijen
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
              AlphaESS Thuisbatterijen voor Parkstad: All-In Prijzen
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
                <p className="text-sm text-gray-600 mb-6">Klein huishouden (1-2 pers., appartement)</p>

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
                      Complete installatie Parkstad
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
                ⭐ Meest Gekozen in Parkstad
              </div>
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Comfort Pakket</h3>
                <p className="text-lg font-semibold text-yellow-600 mb-4">SMILE5 (5 kWh)</p>
                <p className="text-sm text-gray-600 mb-6">Gemiddeld gezin (3-4 pers., rijtjeshuis)</p>

                <div className="mb-6 text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-1">€5.785</p>
                  <p className="text-sm text-green-600 font-semibold">0% BTW</p>
                  <p className="text-xs text-gray-500">Besparing: €650/jaar</p>
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
                      Complete installatie Parkstad
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
                <p className="text-sm text-gray-600 mb-6">Groot huishouden (4+ pers., vrijstaand)</p>

                <div className="mb-6 text-center">
                  <p className="text-4xl font-bold text-gray-900 mb-1">€7.750</p>
                  <p className="text-sm text-green-600 font-semibold">0% BTW</p>
                  <p className="text-xs text-gray-500">Besparing: €950-1.300/jaar</p>
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
                      Complete installatie Parkstad
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
              <strong>Alle prijzen zijn all-in voor Parkstad:</strong> geen reiskosten, geen verborgen kosten.
            </p>
            <p className="text-sm text-gray-500">
              Bij oude meterkasten (voor 1980): meerprijs €400-800 voor modernisering. Bespreken we vooraf tijdens gratis intake.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Nu Met Besparen - Gratis Intake in Parkstad
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            We komen vrijblijvend langs in heel Parkstad. Beoordelen situatie (incl. meterkast), bespreken mogelijkheden en maken persoonlijk advies. Binnen 24 uur gedetailleerde offerte.
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
            Veelgestelde Vragen over Thuisbatterijen in Parkstad
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
            Thuisbatterij Installatie in Heel Parkstad
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS specialist | Energietransitie mijnstreek | Ook oude meterkasten | 10 jaar garantie | 0% BTW | Lokale service | Heerlen, Kerkrade, Landgraaf, Brunssum en alle Parkstad gemeenten
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

export default ThuisbatterijHeerlenPage;
