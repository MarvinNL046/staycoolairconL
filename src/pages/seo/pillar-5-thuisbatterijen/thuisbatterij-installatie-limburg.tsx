import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, Euro, Phone, Battery, ArrowRight, Clock, Shield, Home, Wrench, Award } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijInstallatieLimburgPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Installatie Limburg' }
  ];

  const usps = [
    {
      icon: <MapPin className="h-12 w-12 text-yellow-500" />,
      title: "Lokale Installateur Limburg",
      description: "Snelle service, korte reistijd, lokale nazorg en persoonlijk contact"
    },
    {
      icon: <Award className="h-12 w-12 text-yellow-500" />,
      title: "AlphaESS Dealer & Partner",
      description: "Gecertificeerd voor installatie, garantie en service van AlphaESS systemen"
    },
    {
      icon: <Clock className="h-12 w-12 text-yellow-500" />,
      title: "Installatie in 1 Dag",
      description: "Complete installatie inclusief keuring en oplevering binnen één werkdag"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "10 Jaar Volledige Garantie",
      description: "AlphaESS fabrieksgarantie + onze installatiegarantie, lokaal afgehandeld"
    }
  ];

  const cities = [
    { name: "Maastricht", service: "Volledig", response: "< 1 dag" },
    { name: "Heerlen", service: "Volledig", response: "< 1 dag" },
    { name: "Sittard-Geleen", service: "Volledig", response: "< 1 dag" },
    { name: "Roermond", service: "Volledig", response: "< 1 dag" },
    { name: "Venlo", service: "Volledig", response: "< 1 dag" },
    { name: "Weert", service: "Volledig", response: "< 1 dag" },
    { name: "Kerkrade", service: "Volledig", response: "< 1 dag" },
    { name: "Brunssum", service: "Volledig", response: "< 1 dag" },
    { name: "Landgraaf", service: "Volledig", response: "< 1 dag" },
    { name: "Venray", service: "Volledig", response: "< 1 dag" },
    { name: "Stein", service: "Volledig", response: "< 1 dag" },
    { name: "Valkenburg", service: "Volledig", response: "< 1 dag" }
  ];

  const process = [
    {
      step: 1,
      title: "Gratis Intakegesprek",
      duration: "30-60 minuten",
      description: "Telefonisch of op locatie. We inventariseren uw situatie: energieverbruik, zonnepanelen, meterkast, beschikbare ruimte, wensen en budget.",
      deliverables: ["Verbruiksanalyse", "Locatie-inspectie (indien gewenst)", "Persoonlijk advies", "Vrijblijvende offerte"],
      cost: "Gratis"
    },
    {
      step: 2,
      title: "Offerte & Planning",
      duration: "24-48 uur",
      description: "U ontvangt binnen 2 werkdagen een gedetailleerde offerte met systeemkeuze, kosten, besparing, terugverdientijd en installatiedatum.",
      deliverables: ["Gedetailleerde offerte", "ROI-berekening", "Installatieplan", "Planningsdatum"],
      cost: "Gratis"
    },
    {
      step: 3,
      title: "Bestelling & Voorbereiding",
      duration: "1-2 weken",
      description: "Na akkoord bestellen we het systeem bij AlphaESS. We bereiden de installatie voor en houden u op de hoogte van de leveringsstatus.",
      deliverables: ["Orderbevestiging", "Voorbereidingschecklist", "Installatiedatum bevestiging", "Contact installatrice"],
      cost: "Aanbetaling (30%)"
    },
    {
      step: 4,
      title: "Installatie & Keuring",
      duration: "1 dag (4-8 uur)",
      description: "Onze gecertificeerde monteurs installeren het complete systeem: batterij, omvormer, bekabeling, monitoring. Inclusief keuring en certificering.",
      deliverables: ["Complete installatie", "Elektrische keuring", "NEN1010 certificaat", "Garantieregistratie"],
      cost: "Eindafrekening"
    },
    {
      step: 5,
      title: "Oplevering & Uitleg",
      duration: "30-45 minuten",
      description: "We nemen het systeem met u door: werking, bediening, app, monitoring, onderhoud. U krijgt alle documentatie en garantiebewijzen.",
      deliverables: ["Systeemuitleg", "App installatie", "Documentatiepakket", "Garantiebewijzen", "Nazorgcontact"],
      cost: "Inclusief"
    },
    {
      step: 6,
      title: "Nazorg & Service",
      duration: "10 jaar garantie",
      description: "We blijven beschikbaar voor vragen, updates, service en garantiezaken. Lokale nazorg door ons team in Limburg.",
      deliverables: ["10 jaar garantie", "Technische support", "Software updates", "Periodieke check (optioneel)"],
      cost: "Garantie inclusief"
    }
  ];

  const installation = {
    duration: "4-8 uur (gemiddeld 6 uur)",
    team: "2 gecertificeerde monteurs",
    steps: [
      {
        title: "Voorbereiding (30 min)",
        activities: ["Materiaal controleren", "Werkgebied beschermen", "Veiligheid checken", "Plan doorspreken"]
      },
      {
        title: "Batterij Plaatsen (1-2 uur)",
        activities: ["Batterij positioneren", "Bevestiging en leveling", "Ventilatie checken", "Ruimte optimaliseren"]
      },
      {
        title: "Elektrische Aansluiting (2-3 uur)",
        activities: ["Bekabeling aanleggen", "Meterkast aanpassen", "Omvormer aansluiten", "Aarding en beveiliging"]
      },
      {
        title: "Monitoring & Software (1 uur)",
        activities: ["Wifi configureren", "AlphaCloud koppelen", "App installeren", "Instellingen optimaliseren"]
      },
      {
        title: "Keuring & Test (1-2 uur)",
        activities: ["NEN1010 keuring", "Laad-/ontlaadtest", "Monitoring verificatie", "Veiligheidschecks"]
      },
      {
        title: "Oplevering & Uitleg (30-45 min)",
        activities: ["Systeem demonstratie", "App uitleg", "Documentatie overhandigen", "Vragen beantwoorden"]
      }
    ]
  };

  const requirements = [
    {
      category: "Ruimte & Locatie",
      must: ["Min. 50x60x20 cm vrije ruimte", "Drooge, vorstvrije omgeving", "Bereikbaar voor monteurs", "In de buurt van meterkast"],
      nice: ["Garage of bijkeuken", "Vlakke, stevige ondergrond", "Ventilatiemogelijkheid", "Verwijderd van slaapkamers"]
    },
    {
      category: "Elektrische Installatie",
      must: ["Moderne meterkast (groepenkast)", "Voldoende groepen vrij", "Aarding aanwezig", "P1 poort slimme meter"],
      nice: ["3-fase aansluiting (voor T10)", "Recente NEN1010 keuring", "Extra schakelaar mogelijk", "Kabelgoot aanwezig"]
    },
    {
      category: "Netwerk & Monitoring",
      must: ["Wifi netwerk", "Stabiele internetverbinding", "Router bereikbaar", "Smartphone voor app"],
      nice: ["Ethernet aansluiting mogelijk", "Mesh wifi systeem", "Dedicated netwerk voor batterij", "Smart home systeem"]
    },
    {
      category: "Toegankelijkheid",
      must: ["Vrije toegang tot locatie", "Parkeerplaats voor busje", "Toegang meterkast", "Werkgebied vrij te maken"],
      nice: ["Grote deuropening", "Geen trappen", "Ruime werkruimte", "Laadvoorzieningen nabij"]
    }
  ];

  const packages = [
    {
      name: "Basis Pakket",
      battery: "SMILE-B3 (2,9 kWh)",
      suitable: "Klein appartement, 1-2 personen",
      includes: ["AlphaESS SMILE-B3 batterij", "Complete installatie", "NEN1010 keuring", "10 jaar garantie", "AlphaCloud monitoring", "App installatie", "Instructie & documentatie"],
      price: "€4.545",
      vat: "0% BTW",
      installation: "4-5 uur",
      savings: "€350/jaar"
    },
    {
      name: "Comfort Pakket",
      battery: "SMILE5 (5 kWh)",
      suitable: "Gemiddeld huishouden, 2-4 personen",
      includes: ["AlphaESS SMILE5 batterij (5 kWh)", "Complete installatie", "NEN1010 keuring", "10 jaar garantie", "AlphaCloud monitoring", "App installatie", "Instructie & documentatie", "1x gratis servicebeurt"],
      price: "€5.785",
      vat: "0% BTW",
      installation: "5-6 uur",
      savings: "€600/jaar",
      popular: true
    },
    {
      name: "Premium Pakket",
      battery: "SMILE-G3-T10 (10 kWh, 3-fase)",
      suitable: "Groot huishouden of met elektrische auto",
      includes: ["AlphaESS SMILE-G3-T10 (10 kWh)", "3-fase aansluiting", "Complete installatie", "NEN1010 keuring", "10 jaar garantie", "AlphaCloud Premium (EPEX)", "App installatie", "Uitgebreide instructie", "2x gratis servicebeurt", "EPEX handel setup"],
      price: "€7.750",
      vat: "0% BTW",
      installation: "6-8 uur",
      savings: "€900-1.200/jaar"
    }
  ];

  const why = [
    {
      icon: <MapPin className="h-8 w-8 text-yellow-500" />,
      title: "Lokaal & Snel",
      description: "Als Limburgs bedrijf zijn we snel ter plaatse voor installatie, service en garantiezaken. Geen wachten op landelijke callcenters - direct persoonlijk contact."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: "AlphaESS Specialist",
      description: "We zijn gecertificeerd AlphaESS dealer en partner. Al onze monteurs zijn getraind door AlphaESS zelf en volgen jaarlijks bijscholing voor nieuwste technologieën."
    },
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      title: "Professionele Installatie",
      description: "Vakmanschap staat voorop. We werken volgens NEN1010, leveren alle certificaten en zorgen voor nette afwerking. Elke installatie wordt gekeurd en getest."
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Garantie & Nazorg",
      description: "10 jaar AlphaESS garantie + onze installatiegarantie. Bij problemen regelen we alles lokaal - snel, persoonlijk en zonder gedoe."
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Transparante Prijzen",
      description: "Vaste all-in prijzen zonder verrassingen. 0% BTW, geen verborgen kosten. Je weet vooraf exact waar je aan toe bent."
    },
    {
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      title: "Persoonlijke Service",
      description: "Bij ons ben je geen nummer. Van eerste contact tot jarenlang daarna - altijd dezelfde aanspreekpunten die je situatie kennen."
    }
  ];

  const faqs = [
    {
      question: "Hoe lang duurt de installatie van een thuisbatterij in Limburg?",
      answer: "Een complete thuisbatterij-installatie duurt gemiddeld 4-8 uur, afhankelijk van het systeem en de situatie ter plaatse. SMILE-B3: 4-5 uur, SMILE5: 5-6 uur, SMILE-G3-T10: 6-8 uur. We komen met 2 monteurs en installeren alles in één werkdag: batterij, bekabeling, omvormer, monitoring en keuring. Je hebt dezelfde avond nog een werkende thuisbatterij."
    },
    {
      question: "Wat zijn de kosten voor installatie in Limburg?",
      answer: "Onze installatieprijzen zijn all-in en transparant: SMILE-B3 (2,9 kWh): €4.545 incl. installatie en 0% BTW, SMILE5 (5 kWh): €5.785 incl. installatie en 0% BTW, SMILE-G3-T10 (10 kWh): €7.750 incl. installatie en 0% BTW. Dit is inclusief: batterij, omvormer, alle bekabeling, NEN1010 keuring, garantieregistratie, monitoring setup en instructie. Geen verborgen kosten. Binnen Limburg geen extra reiskosten."
    },
    {
      question: "In welke plaatsen in Limburg installeren jullie thuisbatterijen?",
      answer: "We installeren door heel Limburg: Maastricht, Heerlen, Sittard-Geleen, Roermond, Venlo, Weert, Kerkrade, Brunssum, Landgraaf, Venray, Stein, Valkenburg en alle omliggende dorpen. Maximale responstijd: 24 uur voor spoedgevallen, normaal binnen 1-2 weken voor geplande installatie. We komen altijd eerst langs voor gratis intake en offerte."
    },
    {
      question: "Zijn jullie een gecertificeerde AlphaESS installateur?",
      answer: "Ja, we zijn officieel gecertificeerd AlphaESS dealer en installatiepartner. Onze monteurs hebben de AlphaESS installatietraining gevolgd en zijn gecertificeerd voor installatie van alle SMILE systemen. We volgen jaarlijks bijscholingen en hebben directe lijnen met AlphaESS technische support. Dit garandeert professionele installatie, correcte garantieregistratie en lokale service."
    },
    {
      question: "Wat moet ik voorbereiden voor de installatie?",
      answer: "Minimale voorbereiding: (1) Vrije ruimte voor batterij (50x60x20 cm) in garage/bijkeuken/kelder, (2) Toegang tot meterkast, (3) Wifi wachtwoord beschikbaar, (4) Parkeerplek voor busje. Optioneel: werkgebied vrijmaken, huisdieren apart, vloerbescherming (nemen we zelf mee). We komen altijd eerst langs voor inspectie en bespreken dan alle details. Bij installatie zorgen we voor bescherming van vloeren en muren."
    },
    {
      question: "Krijg ik garantie op de installatie?",
      answer: "Dubbele garantie voor volledige zekerheid: (1) AlphaESS fabrieksgarantie: 10 jaar of 10.000 cycli op batterij, 10 jaar op omvormer en elektronica, (2) StayCool installatiegarantie: 5 jaar garantie op alle installatiewerk (bekabeling, aansluiting, keuring). Bij problemen binnen garantietermijn komen we gratis langs. Lokale afhandeling in Limburg - geen landelijke callcenters. Responstijd garantiezaken: 24-48 uur."
    },
    {
      question: "Moet mijn meterkast aangepast worden?",
      answer: "Meestal minimale aanpassing nodig: we plaatsen een extra groep in de meterkast voor de batterij en koppelen aan de P1 poort van je slimme meter. Bij moderne meterkasten (na 2010): 1-2 uur werk, geen grote aanpassingen. Bij oude meterkasten: mogelijk meterkast moderniseren (€300-600 extra). We beoordelen dit tijdens gratis intake en nemen dit mee in offerte. Alle werk volgens NEN1010 met keuring en certificaat."
    },
    {
      question: "Kan ik de thuisbatterij later uitbreiden?",
      answer: "Ja, met AlphaESS SMILE5 systeem eenvoudig uitbreiden: start met 5 kWh en breid modulair uit tot 30 kWh door extra batterijtorens te plaatsen. Kosten per 5 kWh module: ~€1.800 incl. installatie. SMILE-B3 en SMILE-G3-T10 zijn niet modulair uitbreidbaar. Advies: begin met voldoende capaciteit (zie onze ROI calculator) of kies SMILE5 voor toekomstige uitbreiding (bijv. bij aanschaf elektrische auto of extra zonnepanelen)."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Installatie Limburg | AlphaESS Dealer & Installateur | StayCool Airco"
        description="Thuisbatterij installatie in Limburg ✓ AlphaESS dealer ✓ Installatie in 1 dag ✓ 10 jaar garantie ✓ 0% BTW ✓ Maastricht, Heerlen, Sittard, Roermond ✓ Lokale service"
      />

      <SchemaMarkup
        type="LocalBusiness"
        data={{
          "@type": "LocalBusiness",
          name: "StayCool Airco - Thuisbatterij Installatie Limburg",
          description: "Professionele installatie van AlphaESS thuisbatterijen in heel Limburg. Gecertificeerd dealer met lokale service.",
          image: "https://staycoolairco.nl/logo.png",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Limburg",
            addressCountry: "NL"
          },
          telephone: "+31462021430",
          priceRange: "€4545-€7750",
          areaServed: "Limburg, Nederland"
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Installatie Limburg: AlphaESS Dealer met Lokale Service
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Professionele installatie van AlphaESS thuisbatterijen door gecertificeerde monteurs. Installatie in 1 dag, 10 jaar garantie, 0% BTW. Direct lokale service in heel Limburg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Intake Op Locatie
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
                <p className="font-bold mb-1">Lokale Installateur = Snelle Service</p>
                <p className="text-sm">
                  Binnen 24 uur ter plaatse voor intake, installatie binnen 1-2 weken, altijd persoonlijk contact, lokale garantieafhandeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom Kiezen Voor Onze Thuisbatterij Installatie in Limburg?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lokale service, gecertificeerde monteurs, transparante prijzen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Installeren Door Heel Limburg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Snelle service in alle Limburgse steden en dorpen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {cities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900">{city.name}</h3>
                    <p className="text-sm text-gray-600">{city.service}</p>
                    <p className="text-xs text-green-600 font-semibold">{city.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-4">
              <strong>Ook in de omliggende dorpen en gemeenten actief!</strong>
            </p>
            <p className="text-gray-600 text-sm">
              Staat jouw plaats er niet bij? Neem contact op - we komen door heel Limburg en grensgebieden België en Duitsland.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zo Verloopt de Installatie: Van Intake tot Nazorg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stap voor stap uitgelegd - transparant en overzichtelijk
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-yellow-500 text-gray-900 font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-bold text-gray-900 mb-2">Wat je krijgt:</p>
                        <ul className="space-y-1">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-center bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Kosten fase {step.step}</p>
                          <p className="text-2xl font-bold text-gray-900">{step.cost}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wat Gebeurt Er Tijdens de Installatiedag?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gedetailleerd overzicht van 6 uur professioneel installatiewerk
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Duur</p>
                <p className="text-xl font-bold text-gray-900">{installation.duration}</p>
              </div>
              <div className="text-center">
                <Wrench className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Team</p>
                <p className="text-xl font-bold text-gray-900">{installation.team}</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Resultaat</p>
                <p className="text-xl font-bold text-gray-900">Werkende batterij</p>
              </div>
            </div>

            <div className="space-y-6">
              {installation.steps.map((step, index) => (
                <div key={index} className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wat Moet Je Regelen Voor Installatie?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Checklist voor optimale voorbereiding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{req.category}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Vereist
                    </p>
                    <ul className="space-y-2 ml-7">
                      {req.must.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <span className="mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 mb-2 flex items-center">
                      <ArrowRight className="h-5 w-5 text-yellow-500 mr-2" />
                      Aanbevolen
                    </p>
                    <ul className="space-y-2 ml-7">
                      {req.nice.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="mr-2">○</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="font-bold text-gray-900 mb-2">💡 Niet Zeker of Alles Klopt?</p>
            <p className="text-gray-700">
              Geen zorgen! We komen altijd eerst langs voor gratis intake. Dan checken we alles ter plaatse en bespreken we eventuele aanpassingen. Pas daarna krijg je een definitieve offerte.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze Installatiepakketten: All-In & Transparant
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kies het pakket dat bij jouw situatie past - alles inclusief
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-lg ${pkg.popular ? 'border-4 border-yellow-500' : ''}`}>
                {pkg.popular && (
                  <div className="bg-yellow-500 text-gray-900 text-center font-bold py-2">
                    ⭐ Meest Gekozen
                  </div>
                )}
                <div className="bg-white p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-lg font-semibold text-yellow-600 mb-4">{pkg.battery}</p>
                  <p className="text-sm text-gray-600 mb-6">{pkg.suitable}</p>

                  <div className="mb-6 text-center">
                    <p className="text-4xl font-bold text-gray-900 mb-1">{pkg.price}</p>
                    <p className="text-sm text-green-600 font-semibold">{pkg.vat}</p>
                    <p className="text-xs text-gray-500">Besparing: {pkg.savings}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-900 mb-3">Inclusief:</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-100 rounded p-3 mb-6">
                    <p className="text-sm text-gray-600">Installatieduur</p>
                    <p className="text-lg font-bold text-gray-900">{pkg.installation}</p>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Gratis Offerte
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom Klanten in Limburg Voor Ons Kiezen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 redenen waarom we de voorkeur genieten in de regio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{reason.title}</h3>
                <p className="text-gray-600 text-center text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Nu Met Besparen - Gratis Intake Op Locatie
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            We komen vrijblijvend langs in heel Limburg. Beoordelen situatie, bespreken mogelijkheden en maken persoonlijk advies. Binnen 24 uur gedetailleerde offerte.
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
            Veelgestelde Vragen over Installatie in Limburg
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
            Professionele Thuisbatterij Installatie Door Heel Limburg
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS specialist | Installatie in 1 dag | 10 jaar garantie | 0% BTW | Lokale service | Transparante prijzen | Maastricht, Heerlen, Sittard, Roermond en omstreken
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

export default ThuisbatterijInstallatieLimburgPage;
