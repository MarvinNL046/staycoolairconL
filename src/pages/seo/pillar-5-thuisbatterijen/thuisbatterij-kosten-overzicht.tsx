import React from 'react';
import { Link } from 'react-router-dom';
import { Euro, CheckCircle, Calculator, Phone, TrendingDown, AlertCircle, Battery, Package, ArrowRight, Wrench } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijKostenOverzichtPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Kosten Overzicht' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "€3.200-10.000 Totaalprijs",
      description: "Complete thuisbatterij incl. installatie en BTW-voordeel (0%)"
    },
    {
      icon: <Package className="h-12 w-12 text-yellow-500" />,
      title: "Geen Verborgen Kosten",
      description: "All-in prijzen inclusief montage, garantie en monitoring app"
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-yellow-500" />,
      title: "0% BTW Voordeel",
      description: "21% korting = €600-2.000 besparing op aanschafprijs"
    },
    {
      icon: <Calculator className="h-12 w-12 text-yellow-500" />,
      title: "Gratis Prijsadvies",
      description: "Persoonlijk kostenadvies binnen 24 uur, inclusief besparingen"
    }
  ];

  const priceComparison = [
    {
      model: "SMILE-B3",
      capacity: "2,87 kWh",
      phase: "1-fase",
      basePrice: "€4.050",
      btw: "€850",
      installation: "€500-750",
      totalWithBTW: "€5.400-5.650",
      totalWithoutBTW: "€4.550-4.800",
      pricePerKWh: "€1.586/kWh",
      idealFor: "Kleine huishoudens (1-2 personen), appartement",
      yearlyConsumption: "2.000-3.000 kWh/jaar",
      verdict: "Goedkoopste instap. Geschikt voor lage verbruikers met beperkt budget."
    },
    {
      model: "SMILE5",
      capacity: "5,7 kWh",
      phase: "1-fase",
      basePrice: "€5.700",
      btw: "€1.200",
      installation: "€750-1.000",
      totalWithBTW: "€7.650-7.900",
      totalWithoutBTW: "€6.450-6.700",
      pricePerKWh: "€1.132/kWh",
      idealFor: "Gemiddeld huishouden (2-3 personen), tussenwoning",
      yearlyConsumption: "3.000-4.500 kWh/jaar",
      verdict: "Beste prijs-kwaliteit verhouding. Meest gekozen systeem door balans tussen prijs en capaciteit."
    },
    {
      model: "SMILE5 (10 kWh)",
      capacity: "10 kWh",
      phase: "1-fase",
      basePrice: "€9.400",
      btw: "€1.975",
      installation: "€1.000-1.250",
      totalWithBTW: "€12.375-12.625",
      totalWithoutBTW: "€10.400-10.650",
      pricePerKWh: "€1.040/kWh",
      idealFor: "Groot huishouden (4+ personen), vrijstaand huis",
      yearlyConsumption: "5.000-7.000 kWh/jaar",
      verdict: "Uitbreidbare SMILE5 tot 30 kWh. Laagste prijs per kWh. Perfect voor hoge verbruikers."
    },
    {
      model: "SMILE-G3-T10",
      capacity: "11,55 kWh",
      phase: "3-fase",
      basePrice: "€9.800",
      btw: "€2.060",
      installation: "€1.250-1.500",
      totalWithBTW: "€13.110-13.360",
      totalWithoutBTW: "€11.050-11.300",
      pricePerKWh: "€957/kWh",
      idealFor: "Grote huishoudens, elektrische auto, zakelijk gebruik",
      yearlyConsumption: "7.000+ kWh/jaar (incl. EV)",
      verdict: "Beste systeem voor 3-fase aansluiting en hoogste vermogen. Ideaal voor EV-laders en grote systemen."
    }
  ];

  const costBreakdown = [
    {
      category: "Aanschafkosten",
      items: [
        {
          name: "SMILE-B3 batterijsysteem",
          price: "€3.200-4.050",
          included: ["Batterij unit met 2,87 kWh", "Inverter (omvormer)", "BMS (Battery Management System)", "Monitoring kabels", "Montagebeugels", "10 jaar garantie"]
        },
        {
          name: "SMILE5 batterijsysteem",
          price: "€4.500-5.700",
          included: ["Batterij unit met 5,7 kWh", "Hybride inverter 5 kW", "Smart monitoring systeem", "Uitbreidbaar tot 30 kWh", "Wifi module", "10 jaar garantie"]
        },
        {
          name: "SMILE-G3-T10 batterijsysteem",
          price: "€7.750-9.800",
          included: ["Batterij unit met 11,55 kWh", "3-fase inverter 10 kW", "Geavanceerd BMS systeem", "Peak shaving functie", "Backup functie mogelijk", "10 jaar garantie"]
        }
      ]
    },
    {
      category: "Installatiekosten",
      items: [
        {
          name: "Standaard installatie",
          price: "€500-750",
          included: ["Montage batterij + inverter", "Aansluiting op meterkast", "Elektrische bedrading (5-10m)", "Configuratie & activering", "Gebruikersinstructie", "Garantie op installatie"]
        },
        {
          name: "Uitgebreide installatie",
          price: "€750-1.250",
          included: ["Extra bedrading (10-20m)", "Netwerk/WiFi installatie", "Koppeling met slimme meter", "Integratie met zonnepanelen", "EV-lader koppeling", "Smart home integratie"]
        },
        {
          name: "Complex installatie",
          price: "€1.250-2.000",
          included: ["Meterkast vernieuwing", "Extra groep aanleggen", "3-fase upgrade", "Buiten montage (beugels)", "Lange kabeltrajecten (&gt;0m)", "Backup functie installatie"]
        }
      ]
    },
    {
      category: "Eenmalige Kosten",
      items: [
        {
          name: "Keuring & certificering",
          price: "€0-150",
          included: ["Netbeheerder melding (vaak gratis)", "Installatiecertificaat", "Veiligheidsinspectie", "Garantieregistratie"]
        },
        {
          name: "Smart meter (optioneel)",
          price: "€0-100",
          included: ["Meestal al aanwezig", "Zoniet: netbeheerder plaatst gratis", "Eigen aankoop alleen bij specifieke wensen"]
        }
      ]
    },
    {
      category: "Jaarlijkse Kosten",
      items: [
        {
          name: "Onderhoud & service",
          price: "€0/jaar",
          included: ["Geen onderhoud nodig - onderhoudsvrij", "Software updates automatisch & gratis", "Monitoring via app gratis", "10 jaar garantie dekt alle defecten"]
        },
        {
          name: "Verzekering (optioneel)",
          price: "€0-75/jaar",
          included: ["Meestal gedekt door opstalverzekering", "Specifieke uitbreiding €30-75/jaar", "Check met uw verzekeraar"]
        }
      ]
    }
  ];

  const subsidyOptions = [
    {
      title: "0% BTW-tarief (Permanent)",
      amount: "21% korting",
      description: "Sinds januari 2023 geldt 0% BTW op thuisbatterijen. Dit bespaart direct 21% op de totale investering.",
      realSaving: "€600-2.000 afhankelijk van systeem",
      eligibility: "Automatisch bij aankoop door particulier",
      howTo: "Installateur verrekent automatisch in offerte"
    },
    {
      title: "ISDE Subsidie (Seizoensafhankelijk)",
      amount: "€300-800",
      description: "Investeringssubsidie Duurzame Energie voor thuisbatterijen boven 4 kWh. Budget vaak snel op.",
      realSaving: "€300-800 per aanvraag",
      eligibility: "Particulieren, minimaal 4 kWh capaciteit",
      howTo: "Aanvragen via RVO.nl na installatie"
    },
    {
      title: "Gemeentelijke Subsidies Limburg",
      amount: "€0-1.000",
      description: "Sommige Limburgse gemeenten bieden extra subsidie voor energieopslag. Verschilt per gemeente.",
      realSaving: "Gemeente-afhankelijk",
      eligibility: "Check uw gemeente via Verbeterjehuis.nl",
      howTo: "Aanvragen bij lokale overheid"
    },
    {
      title: "Zakelijke Afschrijving",
      amount: "25-50% aftrekbaar",
      description: "Zakelijke gebruikers kunnen thuisbatterij afschrijven als bedrijfsmiddel. BTW terugvorderbaar.",
      realSaving: "€2.000-5.000 over 5 jaar",
      eligibility: "Zakelijk gebruik (thuiskantoor, ZZP, bedrijf)",
      howTo: "Via boekhouder/accountant regelen"
    }
  ];

  const hiddenCosts = [
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      title: "Meterkast Upgrade",
      cost: "€200-500",
      description: "Soms nodig als meterkast te oud of vol is. Wij inspecteren dit vooraf gratis.",
      avoidance: "Vooraf laten checken bij offerte-aanvraag"
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      title: "Lange Kabeltrajecten",
      cost: "€50-150/meter",
      description: "Bij afstand &gt;5m tussen meterkast en batterij komen extra kabelkosten bij.",
      avoidance: "Batterij zo dicht mogelijk bij meterkast plaatsen"
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      title: "3-Fase Upgrade",
      cost: "€500-1.500",
      description: "Bij sommige systemen nodig voor optimale werking. Niet altijd vereist.",
      avoidance: "Kies 1-fase systeem als 3-fase niet nodig"
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-yellow-500" />,
      title: "Bouwkundige Aanpassingen",
      cost: "€0-500",
      description: "Alleen bij buitenmontage of specifieke locaties. Meestal niet nodig.",
      avoidance: "Binneninstallatie in meterkast/berging"
    }
  ];

  const priceEvolution = [
    {
      year: "2020",
      pricePerKWh: "€1.800/kWh",
      note: "Thuisbatterijen nog erg duur en weinig beschikbaar"
    },
    {
      year: "2021",
      pricePerKWh: "€1.500/kWh",
      note: "Eerste prijsdalingen door grotere productie"
    },
    {
      year: "2022",
      pricePerKWh: "€1.300/kWh",
      note: "Verdere daling maar nog steeds hoge prijzen"
    },
    {
      year: "2023",
      pricePerKWh: "€1.100/kWh",
      note: "0% BTW ingevoerd = effectief €880/kWh voor consument"
    },
    {
      year: "2024",
      pricePerKWh: "€900-1.100/kWh",
      note: "Prijsdaling afgevlakt, stabiele prijzen verwacht"
    },
    {
      year: "2025 (verwacht)",
      pricePerKWh: "€850-1.050/kWh",
      note: "Kleine daling mogelijk, maar geen grote sprong meer"
    }
  ];

  const comparisonTips = [
    {
      icon: <CheckCircle className="h-8 w-8 text-yellow-500" />,
      title: "Vraag All-in Offerte",
      description: "Zorg dat installatie, certificering, configuratie en garantie zijn inbegrepen. Geen verrassingen achteraf."
    },
    {
      icon: <Calculator className="h-8 w-8 text-yellow-500" />,
      title: "Bereken Prijs per kWh",
      description: "Niet alleen totaalprijs vergelijken. Prijs per kWh geeft eerlijke vergelijking tussen systemen."
    },
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Check Garantievoorwaarden",
      description: "10 jaar garantie is standaard. Let op: 6000+ cycli en 70% restcapaciteit na 10 jaar."
    },
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      title: "Vraag Referenties",
      description: "Check reviews en vraag referentieprojecten. Installatie-kwaliteit bepaalt levensduur."
    }
  ];

  const faqs = [
    {
      question: "Wat kost een thuisbatterij gemiddeld?",
      answer: "Voor een complete thuisbatterij betaal je tussen €3.200 (SMILE-B3, 2,87 kWh) en €11.000 (SMILE-T10, 11,55 kWh) inclusief installatie en BTW-voordeel (0%). De meest gekozen SMILE5 (5,7 kWh) kost €6.450-6.700 all-in. Dit is inclusief alle montage, garantie en configuratie - geen verborgen kosten."
    },
    {
      question: "Wat is inbegrepen in de installatiekosten?",
      answer: "Standaard installatie (€500-750) omvat: montage batterij + inverter, aansluiting op meterkast, bedrading tot 10m, configuratie & activering, gebruikersinstructie en garantie op installatie. Bij complexere installaties (€750-1.500) komen daar extra bedrading, netwerkinstallatie, koppeling met zonnepanelen/EV-lader en eventueel meterkast aanpassingen bij."
    },
    {
      question: "Hoeveel bespaar ik door de 0% BTW regeling?",
      answer: "De 0% BTW regeling bespaart je direct 21% op de totale investering. Dit betekent: SMILE-B3 bespaart €850, SMILE5 bespaart €1.200, SMILE-T10 bespaart €2.060. Dit verkort je terugverdientijd met 1-2 jaar. De regeling geldt sinds januari 2023 voor particulieren en wordt automatisch door de installateur verrekend in de offerte."
    },
    {
      question: "Zijn er verborgen kosten waar ik rekening mee moet houden?",
      answer: "Bij een standaardinstallatie zijn er geen verborgen kosten - alles zit in de offerte. Mogelijk extra kosten kunnen zijn: meterkast upgrade (€200-500) bij oude meterkast, extra bedrading bij afstand &gt;5m (€50-150/meter), of 3-fase upgrade (€500-1.500) als dat nodig is. Wij inspecteren vooraf gratis en vermelden alle kosten transparant in de offerte."
    },
    {
      question: "Welke subsidies kan ik krijgen en hoeveel scheelt dat?",
      answer: "De belangrijkste subsidie is de 0% BTW (21% korting = €600-2.000 besparing). Daarnaast is er mogelijk ISDE subsidie (€300-800) voor systemen boven 4 kWh, en sommige Limburgse gemeenten bieden lokale subsidies (€0-1.000). Zakelijke gebruikers kunnen BTW terugvorderen en de investering afschrijven. Totale subsidievoordeel: €900-4.000 afhankelijk van jouw situatie."
    },
    {
      question: "Wat zijn de jaarlijkse kosten na aanschaf?",
      answer: "Vrijwel geen! AlphaESS thuisbatterijen zijn volledig onderhoudsvrij. Software updates zijn gratis en automatisch. Monitoring via de app is gratis. De 10 jaar garantie dekt alle defecten. Enige optionele kosten: verzekering (€30-75/jaar, vaak al gedekt door opstalverzekering). Totale jaarlijkse kosten: €0-75, terwijl je €400-2.000/jaar bespaart."
    },
    {
      question: "Worden thuisbatterijen in de toekomst veel goedkoper?",
      answer: "Thuisbatterijprijzen zijn gedaald van €1.800/kWh (2020) naar €900-1.100/kWh (2024). Deze daling vlakt af - grote prijssprong wordt niet meer verwacht. Kleine daling mogelijk (5-10% komende jaren), maar: (1) 0% BTW mogelijk tijdelijk, (2) Elk jaar wachten = jaar besparing gemist, (3) Saldering wordt afgeschaft = batterij wordt waardevoller. Conclusie: nu investeren is financieel aantrekkelijk."
    },
    {
      question: "Hoe vergelijk ik prijzen van verschillende aanbieders?",
      answer: "Let op deze punten: (1) Vraag all-in offerte met installatie en BTW-voordeel, (2) Bereken prijs per kWh (totaal ÷ capaciteit), (3) Check garantievoorwaarden (10 jaar, 6000+ cycli, 70% restcapaciteit), (4) Vraag referenties en reviews, (5) Let op merkbekendheid (AlphaESS is wereldleider), (6) Check wat wel/niet inbegrepen is. Goedkoopste offerte is niet altijd beste - kwaliteit en service tellen mee."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Kosten Overzicht 2024 | Prijzen & Subsidies | StayCool Airco"
        description="Complete thuisbatterij kosten ✓ €3.200-11.000 all-in ✓ 0% BTW = 21% korting ✓ Geen verborgen kosten ✓ ISDE subsidie ✓ Gratis prijsadvies ✓ Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij Kosten: Complete Prijsgids 2024",
          description: "Uitgebreide gids over thuisbatterij kosten inclusief aanschafprijzen, installatiekosten, subsidies en totale investering per systeem.",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Kosten: Complete Prijsoverzicht & Vergelijking 2024
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Wat kost een thuisbatterij? Van €3.200 (SMILE-B3) tot €11.000 (SMILE-T10) all-in. Inclusief 0% BTW-voordeel, installatie, garantie en monitoring. Geen verborgen kosten!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Prijsadvies
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Uw Investering
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Euro className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">0% BTW = 21% Korting!</p>
                <p className="text-sm">
                  Bespaar €600-2.000 door BTW-vrijstelling. All-in prijzen inclusief installatie, certificering en garantie.
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
              Transparante Prijzen Zonder Verrassingen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eerlijke all-in prijzen met alle voordelen en garanties inbegrepen
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

      {/* Price Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prijsvergelijking AlphaESS Thuisbatterijen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete overzicht van alle systemen met transparante totaalprijzen
            </p>
          </div>

          <div className="space-y-6">
            {priceComparison.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{item.model}</h3>
                      <p className="text-sm mt-1">{item.capacity} • {item.phase}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-yellow-900">All-in prijs (0% BTW)</p>
                      <p className="text-3xl font-bold">{item.totalWithoutBTW}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Prijsopbouw:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Basisprijs systeem:</strong> {item.basePrice}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>BTW voordeel:</strong> <span className="text-green-600">-{item.btw}</span></span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Installatie:</strong> {item.installation}</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Prijs per kWh:</strong> {item.pricePerKWh}</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Ideaal voor:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item.idealFor}</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Verbruik:</strong> {item.yearlyConsumption}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <strong>Conclusie:</strong> {item.verdict}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gedetailleerde Kostenopbouw
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparant overzicht van alle kosten die komen kijken bij een thuisbatterij
            </p>
          </div>

          <div className="space-y-8">
            {costBreakdown.map((category, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                        <span className="text-xl font-bold text-yellow-600">{item.price}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p className="font-semibold mb-2">Inbegrepen:</p>
                        <ul className="space-y-1">
                          {item.included.map((inc, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Options Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subsidies & Financiële Voordelen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profiteer van beschikbare subsidies en verlaag je investering met €900-4.000
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidyOptions.map((subsidy, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{subsidy.title}</h3>
                  <span className="text-2xl font-bold text-green-600">{subsidy.amount}</span>
                </div>
                <p className="text-gray-700 mb-4">{subsidy.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <Euro className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Besparing:</strong> {subsidy.realSaving}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Geschikt voor:</strong> {subsidy.eligibility}</span>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Aanvragen:</strong> {subsidy.howTo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Costs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mogelijke Extra Kosten (Transparantie!)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bij standaardinstallatie geen extra kosten, maar dit kán soms voorkomen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hiddenCosts.map((cost, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start mb-4">
                  {cost.icon}
                  <div className="ml-3">
                    <h3 className="text-xl font-bold text-gray-900">{cost.title}</h3>
                    <p className="text-lg font-semibold text-red-600">{cost.cost}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{cost.description}</p>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-800">
                    <strong>Vermijden:</strong> {cost.avoidance}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-gray-800">
              <strong>Onze garantie:</strong> Wij inspecteren uw situatie vooraf gratis en vermelden álle kosten transparant in de offerte. Geen verrassingen achteraf!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vraag Uw Gratis Prijsadvies Aan
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Ontvang binnen 24 uur een persoonlijke offerte inclusief alle kosten, subsidies en besparingen. Geheel vrijblijvend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Offerte
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

      {/* Price Evolution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prijsontwikkeling Thuisbatterijen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thuisbatterijen zijn veel goedkoper geworden - maar daling vlakt af
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              {priceEvolution.map((year, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{year.year}</h3>
                    <span className="text-xl font-bold text-yellow-600">{year.pricePerKWh}</span>
                  </div>
                  <p className="text-sm text-gray-600">{year.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-800">
                <strong>Conclusie:</strong> Prijzen zijn 50% gedaald sinds 2020, maar daling vlakt af. Grote prijssprong wordt niet meer verwacht. Wachten op lagere prijzen betekent gemiste besparingen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips voor Prijsvergelijking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let op deze punten bij het vergelijken van aanbieders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  {tip.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Thuisbatterij Kosten
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
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

      {/* Related Pages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Meer Informatie over Thuisbatterijen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Calculator className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terugverdientijd</h3>
              <p className="text-sm text-gray-600 mb-3">ROI berekenen</p>
              <p className="text-yellow-600 font-bold">5-12 jaar</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-subsidie-limburg"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Subsidies Limburg</h3>
              <p className="text-sm text-gray-600 mb-3">Beschikbare regelingen</p>
              <p className="text-yellow-600 font-bold">€900-4.000</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alle Systemen</h3>
              <p className="text-sm text-gray-600 mb-3">AlphaESS overzicht</p>
              <p className="text-yellow-600 font-bold">Vergelijk nu</p>
            </Link>

            <Link
              to="/besparingcalculator"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Calculator className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bereken Besparing</h3>
              <p className="text-sm text-gray-600 mb-3">Online calculator</p>
              <p className="text-yellow-600 font-bold">Gratis tool</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Uw Thuisbatterij Investering?
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Ontvang binnen 24 uur een transparante offerte met alle kosten, subsidies en besparingen. All-in prijs, geen verrassingen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Offerte Aan
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Kosten
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijKostenOverzichtPage;
