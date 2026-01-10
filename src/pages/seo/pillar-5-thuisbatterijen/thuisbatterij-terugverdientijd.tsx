import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle, Euro, Calculator, Phone, Zap, Battery, ArrowRight, AlertCircle } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijTerugverdientijdPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Terugverdientijd' }
  ];

  const usps = [
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "5-12 Jaar Terugverdientijd",
      description: "Afhankelijk van uw verbruik, elektriciteitsprijs en systeemkeuze"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "€400-2.000/Jaar Besparing",
      description: "Directe besparing op energierekening door eigen verbruik maximaliseren"
    },
    {
      icon: <Calculator className="h-12 w-12 text-yellow-500" />,
      title: "Gratis ROI Berekening",
      description: "Wij berekenen uw persoonlijke terugverdientijd op basis van uw situatie"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "15-20 Jaar Levensduur",
      description: "Na terugverdientijd jaren gratis energie en maximale besparing"
    }
  ];

  const factors = [
    {
      title: "Aanschafprijs Batterijsysteem",
      impact: "Hoog",
      description: "SMILE-B3 (€4.500) verdient sneller terug dan SMILE-T10 (€11.000), maar absoluut besparingspotentieel verschilt.",
      optimization: "Kies systeem passend bij uw verbruik - niet te klein (gemiste besparing) en niet te groot (overcapaciteit)"
    },
    {
      title: "Jaarlijks Energieverbruik",
      impact: "Zeer Hoog",
      description: "Hoe hoger uw verbruik, hoe meer energie u kunt opslaan en hergebruiken, en hoe sneller terugverdientijd.",
      optimization: "Huishoudens met  meer dan 4000 kWh/jaar hebben kortste terugverdientijd. Met EV nog korter."
    },
    {
      title: "Elektriciteitsprijs",
      impact: "Zeer Hoog",
      description: "Bij huidige prijzen (€0,35-0,45/kWh) verdient batterij 2-3x sneller terug dan bij lage prijzen (€0,20/kWh).",
      optimization: "Hogere prijzen = snellere terugverdientijd. Prijsverwachting: blijft hoog door energietransitie."
    },
    {
      title: "Zonnepanelen Opbrengst",
      impact: "Hoog",
      description: "Meer zonnepanelen = meer overtollige energie om op te slaan = hogere besparing.",
      optimization: "Ideaal: 4-6 kWp voor kleine batterij, 6-10 kWp voor middel, 10-15 kWp voor groot systeem"
    },
    {
      title: "Eigen Verbruikspatroon",
      impact: "Hoog",
      description: "Verbruik overdag (bij zon) of 's avonds/nachts maakt groot verschil in besparingspotentieel.",
      optimization: "Verbruik vooral 's avonds? Batterij essentieel. Verbruik overdag? Minder urgent maar nog steeds voordelig."
    },
    {
      title: "Salderingsregeling Afbouw",
      impact: "Stijgend",
      description: "Saldering wordt afgebouwd: 2024 (70%), 2025 (50%), 2026 (30%), 2027 (0%). Terugleververgoeding daalt.",
      optimization: "Batterij wordt belangrijker naarmate saldering afneemt. Vroeg investeren = langer profiteren."
    },
    {
      title: "BTW-Vrijstelling (0%)",
      impact: "Hoog",
      description: "Sinds 2023: 0% BTW = 21% korting = 1-2 jaar kortere terugverdientijd.",
      optimization: "Profiteer van huidige regeling - onduidelijk of dit permanent blijft."
    },
    {
      title: "Subsidies en Fiscale Voordelen",
      impact: "Gemiddeld",
      description: "Regionale subsidies, geen vermogensheffing, waardestijging woning, zakelijke aftrek.",
      optimization: "Check lokale regelingen - kunnen terugverdientijd met 0,5-1 jaar verkorten."
    }
  ];

  const scenarios = [
    {
      title: "Klein Huishouden - SMILE-B3",
      household: "1-2 personen, appartement",
      consumption: "2.000 kWh/jaar",
      solar: "6 zonnepanelen (2,4 kWp)",
      battery: "SMILE-B3 (2,9 kWh)",
      investment: "€4.545 (na 0% BTW)",
      yearlyElectricity: "€800",
      batteryUsage: "800 kWh/jaar eigen verbruik extra",
      yearlySavings: "€350/jaar",
      paybackPeriod: "13 jaar",
      lifetimeSavings: "€5.250 (over 15 jaar)",
      verdict: "Geschikt voor starters met beperkt verbruik. Langere terugverdientijd maar wel degelijke besparing."
    },
    {
      title: "Gemiddeld Huishouden - SMILE5 (5 kWh)",
      household: "2-3 personen, tussenwoning",
      consumption: "3.500 kWh/jaar",
      solar: "10 zonnepanelen (4 kWp)",
      battery: "SMILE5 (5 kWh)",
      investment: "€5.785 (na 0% BTW)",
      yearlyElectricity: "€1.400",
      batteryUsage: "1.400 kWh/jaar eigen verbruik extra",
      yearlySavings: "€600/jaar",
      paybackPeriod: "10 jaar",
      lifetimeSavings: "€9.000 (over 15 jaar)",
      verdict: "Ideale balans tussen investering en besparing. Meest gekozen configuratie."
    },
    {
      title: "Groot Huishouden - SMILE5 (10 kWh)",
      household: "4+ personen, vrijstaand huis",
      consumption: "5.500 kWh/jaar",
      solar: "15 zonnepanelen (6 kWp)",
      battery: "SMILE5 (10 kWh uitgebreid)",
      investment: "€7.438 (na 0% BTW)",
      yearlyElectricity: "€2.200",
      batteryUsage: "2.000 kWh/jaar eigen verbruik extra",
      yearlySavings: "€900/jaar",
      paybackPeriod: "8 jaar",
      lifetimeSavings: "€13.500 (over 15 jaar)",
      verdict: "Snelle terugverdientijd door hoog verbruik. Excellent rendement op investering."
    },
    {
      title: "Met Elektrische Auto - SMILE-T10",
      household: "Gezin met 1 elektrische auto",
      consumption: "9.000 kWh/jaar (incl. 3.000 kWh EV)",
      solar: "20 zonnepanelen (8 kWp)",
      battery: "SMILE-T10 (10 kWh 3-fase)",
      investment: "€10.744 (na 0% BTW)",
      yearlyElectricity: "€3.600",
      batteryUsage: "3.500 kWh/jaar eigen verbruik extra",
      yearlySavings: "€1.600/jaar",
      paybackPeriod: "7 jaar",
      lifetimeSavings: "€24.000 (over 15 jaar)",
      verdict: "Kortste terugverdientijd. Hoogste absolute besparing. Perfect voor EV-bezitters."
    },
    {
      title: "Zakelijk - SMILE-T10 met Peak Shaving",
      household: "Klein kantoor/bedrijfspand",
      consumption: "10.000 kWh/jaar",
      solar: "25 zonnepanelen (10 kWp)",
      battery: "SMILE-T10 (10 kWh 3-fase)",
      investment: "€11.000 (zakelijk, BTW terug te vorderen)",
      yearlyElectricity: "€4.000",
      batteryUsage: "2.500 kWh/jaar + peak shaving",
      yearlySavings: "€2.200/jaar (€1.200 eigen verbruik + €1.000 peak shaving)",
      paybackPeriod: "5 jaar",
      lifetimeSavings: "€33.000 (over 15 jaar)",
      verdict: "Snelste terugverdientijd door combinatie eigen verbruik en peak shaving. Zakelijk zeer aantrekkelijk."
    }
  ];

  const tips = [
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Juiste Systeemgrootte",
      description: "Kies capaciteit passend bij uw dagelijks verbruik. Vuistregel: 30-50% van uw dagverbruik in kWh. Te klein = gemiste besparing. Te groot = overcapaciteit en langere terugverdientijd."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Optimaliseer Verbruikspatroon",
      description: "Verschuif waar mogelijk verbruik naar 's avonds (batterij gebruikt) of overdag (direct zonlicht). Gebruik timers voor wasmachine, droger, vaatwasser. Elk kWh uit batterij = €0,40 besparing."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      title: "Monitor en Bijstuur",
      description: "Gebruik de AlphaESS app om verbruik en opslag te monitoren. Identificeer verspilling en optimaliseer instellingen. Sommige gebruikers verhogen besparing met 15-20% door slimme monitoring."
    },
    {
      icon: <Calculator className="h-8 w-8 text-yellow-500" />,
      title: "Combineer met Andere Maatregelen",
      description: "Combineer batterij met isolatie, LED-verlichting, zuinige apparaten. Lager totaalverbruik = hogere zelfvoorzieningsgraad = kortere terugverdientijd. Totaalbesparingen kunnen oplopen tot 60-80%."
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Check Regelingen Jaarlijks",
      description: "Subsidies, BTW-regels en tarieven veranderen. Check jaarlijks voor nieuwe voordelen. Meld wijzigingen aan verzekering en gemeente. Update energielabel voor hogere WOZ-waarde."
    }
  ];

  const faqs = [
    {
      question: "Wat is een realistische terugverdientijd voor een thuisbatterij?",
      answer: "Voor particulieren ligt de terugverdientijd tussen 7-12 jaar, afhankelijk van systeemgrootte, verbruik en elektriciteitsprijs. Met elektrisch rijden kan dit dalen tot 5-8 jaar. Voor zakelijk gebruik met peak shaving: 4-7 jaar. De BTW-vrijstelling (0%) verkort de terugverdientijd met 1-2 jaar vergeleken met vroeger."
    },
    {
      question: "Hoe bereken ik mijn eigen terugverdientijd?",
      answer: "Formule: Terugverdientijd = Investering / Jaarlijkse besparing. Investering = aanschafprijs na BTW (0%). Jaarlijkse besparing = (extra eigen verbruik in kWh × elektriciteitsprijs) - (jaarlijkse kosten). Extra eigen verbruik hangt af van batterijgrootte en uw verbruikspatroon. Wij berekenen dit gratis voor uw specifieke situatie."
    },
    {
      question: "Wat gebeurt er na de terugverdientijd?",
      answer: "Na terugverdientijd is elke kWh die u uit de batterij haalt pure winst - u betaalt immers niets meer af. Met een levensduur van 15-20 jaar heeft u na 10 jaar terugverdientijd nog 5-10 jaar 'gratis' energie. Bij €800/jaar besparing levert dit €4.000-8.000 extra op. Dit maakt de totale Return on Investment zeer aantrekkelijk."
    },
    {
      question: "Welke kosten komen er na aanschaf nog bij?",
      answer: "Vrijwel geen! AlphaESS batterijen zijn onderhoudsvrij. Elektriciteitskostenbesparing compenseert eventuele kleine kosten ruimschoots. Kosten die wel kunnen voorkomen: verzekeringspremie (~€50/jaar, vaak optioneel), monitoring/app (gratis voor AlphaESS), eventuele software updates (gratis). 10 jaar garantie dekt alle defecten."
    },
    {
      question: "Hoe beïnvloedt de afbouw van saldering mijn terugverdientijd?",
      answer: "De salderingsregeling wordt afgebouwd: 2024 (70%), 2025 (50%), 2026 (30%), 2027 (0%). Dit maakt een thuisbatterij belangrijker én waardevoller. Zonder saldering krijgt u nog maar €0,08-0,12/kWh voor teruglevering vs. €0,35-0,45/kWh voor inkoop. Een batterij voorkomt deze mismatch en wordt dus relatief steeds waardevoller. Dit verkort de effectieve terugverdientijd met 2-3 jaar."
    },
    {
      question: "Is het verstandig om nu al te investeren of te wachten tot batterijen goedkoper worden?",
      answer: "Investeren nu is verstandig om meerdere redenen: (1) 0% BTW-regeling mogelijk tijdelijk, (2) Hoge elektriciteitsprijzen maken besparing groter, (3) Saldering verdwijnt - hoe eerder batterij, hoe langer u profiteert, (4) Prijsdaling batterijen laatste jaren al afgevlakt, (5) Elk jaar wachten = jaar besparing gemist. Conclusie: bij huidige voorwaarden is nu het ideale moment."
    },
    {
      question: "Hoe zit het met de restwaarde van mijn batterij?",
      answer: "Na 10 jaar heeft de batterij nog ~70% capaciteit door 6000+ cycli levensduur. De restwaarde bij verkoop woning is substantieel - vergelijkbaar met zonnepanelen. Kopers waarderen energieopslag hoog. Geschatte restwaarde na 10 jaar: 30-40% van aanschafprijs. Dit kan u meenemen in ROI-berekening voor nog aantrekkelijkere business case."
    },
    {
      question: "Kan ik mijn terugverdientijd verkorten door gedragsverandering?",
      answer: "Ja, aanzienlijk! Door slim gebruik kunt u besparingen verhogen met 15-25%: (1) Verschuif verbruik naar momenten met batterij/zon, (2) Gebruik timers voor grote apparaten, (3) Laad EV vooral met batterij/zon, (4) Vermijd piekverbruik op dure momenten, (5) Monitor via app en optimaliseer. Dit kan terugverdientijd verkorten met 1-2 jaar."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Terugverdientijd Berekenen | ROI & Besparing 2024 | StayCool Airco"
        description="Thuisbatterij terugverdientijd ✓ 5-12 jaar ROI ✓ €400-2.000/jaar besparing ✓ Gratis persoonlijke berekening ✓ Alle factoren uitgelegd ✓ Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij Terugverdientijd: Complete ROI Gids 2024",
          description: "Uitgebreide gids over terugverdientijd van thuisbatterijen. Factoren, berekeningen, scenario's en tips voor optimale Return on Investment.",
          datePublished: "2024-01-15",
          dateModified: "2024-01-15",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Terugverdientijd: Complete ROI Gids & Besparing Berekenen
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Ontdek hoe snel uw thuisbatterij zich terugverdient. Van 5 jaar (zakelijk met peak shaving) tot 12 jaar (klein systeem) - met €400-2.000 jaarlijkse besparing en 15-20 jaar levensduur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Uw Terugverdientijd
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis ROI Analyse
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <TrendingUp className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Realistische Verwachting</p>
                <p className="text-sm">
                  Gemiddelde terugverdientijd: 7-10 jaar particulier, 5-7 jaar zakelijk. Na terugverdientijd: 5-10 jaar extra besparing!
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
              Waarom Investeren in een Thuisbatterij Loont
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete besparingen en aantrekkelijke terugverdientijd
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

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wat is Terugverdientijd en Hoe Werkt Het?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De <strong>terugverdientijd</strong> (ook wel Return on Investment of ROI-periode genoemd) is de tijd die het kost voordat de <strong>besparingen op uw energierekening</strong> gelijk zijn aan de investering die u deed in de thuisbatterij. Vanaf dat moment is elke euro besparing pure winst.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basis Formule Terugverdientijd:</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <p className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Terugverdientijd (jaren) = Netto Investering / Jaarlijkse Besparing
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Netto Investering:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>+ Aanschafprijs batterij</li>
                      <li>+ Installatiekosten</li>
                      <li>- BTW-voordeel (0% tarief = -21%)</li>
                      <li>- Eventuele subsidies</li>
                      <li>= <strong>Totale investering</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Jaarlijkse Besparing:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>+ Vermeden netinkoop (€0,40/kWh)</li>
                      <li>+ Vermeden terugleververlies</li>
                      <li>+ Peak shaving (zakelijk)</li>
                      <li>- Jaarlijkse kosten (vrijwel €0)</li>
                      <li>= <strong>Netto besparing</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Factoren die Terugverdientijd Beïnvloeden
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De terugverdientijd van een thuisbatterij wordt beïnvloed door verschillende factoren. Hoe meer van deze factoren in uw voordeel werken, hoe korter de terugverdientijd:
            </p>

            <div className="space-y-6 mb-8">
              {factors.map((factor, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{factor.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      factor.impact === 'Zeer Hoog' ? 'bg-red-100 text-red-800' :
                      factor.impact === 'Hoog' ? 'bg-orange-100 text-orange-800' :
                      factor.impact === 'Gemiddeld' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      Impact: {factor.impact}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{factor.description}</p>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Optimalisatie tip:</strong> {factor.optimization}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Realistische Scenario's: Wat Kunt U Verwachten?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Hieronder vindt u vijf realistische scenario's met concrete cijfers voor verschillende situaties:
            </p>

            <div className="space-y-8 mb-8">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <h3 className="text-2xl font-bold">{scenario.title}</h3>
                    <p className="text-sm mt-1">{scenario.household}</p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Situatie:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Jaarverbruik:</strong> {scenario.consumption}</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Zonnepanelen:</strong> {scenario.solar}</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Batterij:</strong> {scenario.battery}</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Investering:</strong> {scenario.investment}</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Financiën:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Energierekening nu:</strong> {scenario.yearlyElectricity}</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Batterij gebruik:</strong> {scenario.batteryUsage}</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Jaarlijkse besparing:</strong> <span className="text-green-600 font-bold">{scenario.yearlySavings}</span></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Terugverdientijd</p>
                          <p className="text-3xl font-bold text-yellow-600">{scenario.paybackPeriod}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600 mb-1">Totale Besparing (levensduur)</p>
                          <p className="text-3xl font-bold text-green-600">{scenario.lifetimeSavings}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-center">
                        <strong>Conclusie:</strong> {scenario.verdict}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Tips voor Kortere Terugverdientijd
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Met deze tips kunt u uw terugverdientijd aanzienlijk verkorten en uw besparingen maximaliseren:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {tips.map((tip, index) => (
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
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wilt U Uw Persoonlijke Terugverdientijd Weten?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij berekenen gratis uw exacte ROI op basis van uw verbruik, zonnepanelen en situatie. Inclusief alle subsidies en voordelen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Mijn ROI
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over Terugverdientijd
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
            Ontdek Onze AlphaESS Thuisbatterijen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-b3"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE-B3</h3>
              <p className="text-sm text-gray-600 mb-3">2,9 kWh compact systeem</p>
              <p className="text-yellow-600 font-bold">Terugverdientijd: 12 jaar</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE5</h3>
              <p className="text-sm text-gray-600 mb-3">5-30 kWh modulair</p>
              <p className="text-yellow-600 font-bold">Terugverdientijd: 8-10 jaar</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-t10"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE-T10</h3>
              <p className="text-sm text-gray-600 mb-3">10 kWh 3-fase</p>
              <p className="text-yellow-600 font-bold">Terugverdientijd: 5-7 jaar</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-btw-teruggave"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Euro className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">BTW Voordeel</h3>
              <p className="text-sm text-gray-600 mb-3">0% BTW tarief</p>
              <p className="text-yellow-600 font-bold">21% korting = snellere ROI</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Vandaag met Besparen op Uw Energierekening
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Elke maand uitstel is gemiste besparing. Profiteer van 0% BTW en begin direct met terugverdienen. Gratis ROI-analyse binnen 24 uur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis ROI Analyse
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Online Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijTerugverdientijdPage;
