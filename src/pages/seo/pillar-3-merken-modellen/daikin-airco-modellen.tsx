import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Calculator, TrendingUp, Star, Award, Snowflake } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const DaikinAircoModellen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Merken', path: '/aircos' },
    { label: 'Daikin Airco Modellen' }
  ];

  const usps = [
    {
      icon: <Star className="h-12 w-12 text-sky-500" />,
      title: "Premium Kwaliteit",
      description: "Daikin levert topkwaliteit met modellen zoals Stylish, Perfera en Ururu Sarara voor optimaal comfort"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "10 Jaar Garantie",
      description: "Geniet van maximaal 10 jaar fabrieksgarantie op geselecteerde Daikin premium modellen"
    },
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "60% Energiebesparing",
      description: "Daikin warmtepompen besparen tot 60% op uw energiekosten vergeleken met conventionele verwarming"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "Erkend Installateur",
      description: "StayCool Airco is erkend Daikin partner met F-gassen certificering voor vakkundige installatie"
    }
  ];

  const models = [
    {
      name: "Daikin Stylish",
      features: [
        "Modern design met strakke lijnen",
        "Energielabel A+++",
        "Extra stil: 19 dB(A) geluidsniveau",
        "WiFi-bediening standaard",
        "Coanda luchtstroom voor optimaal comfort"
      ],
      applications: "Ideaal voor woonkamers, slaapkamers en kantoren waar design belangrijk is"
    },
    {
      name: "Daikin Perfera",
      features: [
        "Verwarmt tot -20°C buitentemperatuur",
        "Energielabel A+++",
        "Flash Streamer technologie",
        "Intelligente eye sensor",
        "3D luchtstroom voor gelijkmatige verdeling"
      ],
      applications: "Perfect voor woningen die jaarrond comfort en maximale efficiency zoeken"
    },
    {
      name: "Daikin Ururu Sarara",
      features: [
        "Unieke vochtregeling (bevochtiging én ontvochtigen)",
        "Buitenlucht ventilatie zonder aparte unit",
        "Energielabel A+++",
        "Zeer stil: 19 dB(A)",
        "Intelligente ogen sensor"
      ],
      applications: "Topmodel voor wie het beste binnenklimaat en maximaal comfort wil"
    }
  ];

  const technicalBenefits = [
    {
      title: "Flash Streamer Technologie",
      description: "Daikin's unieke Flash Streamer technologie zuivert de lucht door schadelijke stoffen af te breken. Allergenen, virussen en bacteriën worden effectief verwijderd voor een gezonder binnenklimaat."
    },
    {
      title: "Inverter Technologie",
      description: "Alle Daikin modellen zijn uitgerust met geavanceerde inverter technologie die het energieverbruik met 60% reduceert. Het systeem past continu het vermogen aan voor optimale efficiency."
    },
    {
      title: "Stille Werking",
      description: "Met geluidsniveaus vanaf 19 dB(A) behoren Daikin airconditioners tot de stilste op de markt. Zelfs 's nachts in de slaapkamer merkt u nauwelijks dat het systeem actief is."
    },
    {
      title: "Warmtepomp Functie",
      description: "Daikin airco's functioneren als volwaardige warmtepomp tot -20°C buitentemperatuur. Verwarmen in de winter is 4x efficiënter dan elektrische verwarming."
    }
  ];

  const faqs = [
    {
      question: "Wat is het verschil tussen Daikin Stylish, Perfera en Ururu Sarara?",
      answer: "De Stylish is het design-model met focus op esthetiek en stil comfort, ideaal voor woonruimtes. De Perfera is het allround premium model met extra hoog verwarmend vermogen tot -20°C. De Ururu Sarara is het topmodel met unieke vochtregeling (bevochtiging én ontvochtigen) en buitenlucht ventilatie, voor het ultieme binnenklimaat."
    },
    {
      question: "Welke garantie krijg ik op een Daikin airco?",
      answer: "Daikin biedt standaard 3 jaar fabrieksgarantie op alle modellen. Bij registratie binnen 3 maanden na installatie door een erkende installateur (zoals StayCool Airco) wordt dit verlengd naar 5 jaar garantie. Op de Ururu Sarara en geselecteerde Perfera modellen is zelfs 10 jaar garantie mogelijk. Dit maakt Daikin een zeer betrouwbare keuze."
    },
    {
      question: "Hoeveel energie bespaart een Daikin airco vergeleken met conventionele verwarming?",
      answer: "Een Daikin warmtepomp bespaart tot 60% op energiekosten vergeleken met elektrische of gasverwarming. Met een SCOP (Seasonal Coefficient of Performance) van 4,0 of hoger produceert de warmtepomp 4 kW warmte voor elke 1 kW elektriciteit. Dit betekent 300% gratis energie uit de buitenlucht, wat resulteert in aanzienlijk lagere maandelijkse kosten."
    },
    {
      question: "Is een Daikin airco stil genoeg voor in de slaapkamer?",
      answer: "Absoluut! Daikin modellen zoals de Stylish en Ururu Sarara hebben een geluidsniveau vanaf slechts 19 dB(A), wat vergelijkbaar is met gefluister of bladeren die ritselen. Dit is stiller dan een moderne koelkast. De nachtmodus verlaagt het geluid nog verder en past de temperatuur automatisch aan voor optimaal slaapcomfort."
    },
    {
      question: "Kan ik mijn Daikin airco op afstand bedienen?",
      answer: "Ja, alle moderne Daikin modellen zijn standaard of optioneel uitgerust met WiFi-functionaliteit. Via de Daikin Onecta app (voorheen Daikin Online Controller) bedient u uw airco vanaf uw smartphone of tablet. U kunt temperatuur instellen, schema's programmeren, energieverbruik monitoren en het systeem zelfs activeren voordat u thuiskomt."
    },
    {
      question: "Hoe vaak moet een Daikin airco onderhouden worden?",
      answer: "Voor optimale prestaties en levensduur raden wij jaarlijks onderhoud aan. Dit omvat het reinigen van filters, controle van het koelmiddel, inspecteren van de elektrische verbindingen en testen van alle functies. Met een onderhoudscontract bij StayCool Airco zorgen wij dat uw Daikin systeem altijd optimaal presteert en u profiteert van de langste garantieperiode."
    },
    {
      question: "Wat kost een Daikin airco inclusief installatie in Limburg?",
      answer: "De prijs van een Daikin airco installatie varieert tussen €2.000 en €4.500 afhankelijk van het gekozen model en de complexiteit van de installatie. Een Stylish 2,5 kW start vanaf ongeveer €2.200 inclusief installatie, terwijl de Ururu Sarara als topmodel tussen €3.500 en €4.500 kost. StayCool Airco biedt een gratis adviesgesprek en offerte op maat voor uw situatie in Limburg."
    },
    {
      question: "Waarom is Daikin duurder dan andere merken?",
      answer: "Daikin investeert meer in R&D en kwaliteitscontrole dan budgetmerken. U betaalt voor Japanse precisie, bewezen betrouwbaarheid, langere levensduur (20+ jaar), betere energie-efficiency (lagere maandelijkse kosten), stillere werking, uitgebreidere garantie en geavanceerde technologieën zoals Flash Streamer luchtzuivering. Over de levensduur verdient u deze investering terug door lagere energie- en onderhoudskosten."
    }
  ];

  return (
    <>
      <MetaTags
        title="Daikin Airco Modellen Limburg | Stylish, Perfera, Ururu Sarara | StayCool Airco"
        description="Daikin airco modellen ✓ Stylish, Perfera & Ururu Sarara ✓ 10 jaar garantie ✓ 60% energiebesparing ✓ Erkend installateur. Gratis advies!"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Daikin Airco Modellen",
          description: "Premium Daikin airconditioners: Stylish, Perfera en Ururu Sarara met 10 jaar garantie en professionele installatie door erkend Daikin partner StayCool Airco",
          brand: {
            "@type": "Brand",
            name: "Daikin"
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: "2000",
            highPrice: "4500",
            availability: "https://schema.org/InStock",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "156"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Daikin Airco Modellen: Stylish, Perfera & Ururu Sarara
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Premium Japanse kwaliteit met 10 jaar garantie. Van stijlvol design tot de meest geavanceerde klimaatbeheersing. Ontdek welk Daikin model perfect bij uw wensen past.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              Gratis Offerte Aanvragen
            </Link>
            <Link to="/capaciteit-calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Capaciteit
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Erkend Daikin Partner</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>F-gassen Gecertificeerd</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Tot 10 Jaar Garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
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

      {/* Main Content - Daikin Models Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Daikin Airco Modellen: Welke Past Bij U?
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Daikin is wereldwijd marktleider in airconditioning en warmtepompen, bekend om innovatie, betrouwbaarheid en Japanse precisie. Bij StayCool Airco specialiseren we ons in drie premium modellenreeksen die elk unieke voordelen bieden: de <strong>Daikin Stylish</strong> voor design-bewuste klanten, de <strong>Daikin Perfera</strong> als allround topkeuze, en de <strong>Daikin Ururu Sarara</strong> als het ultieme model met revolutionaire vochtregeling.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Als erkend Daikin partner in Limburg installeren wij deze systemen volgens de hoogste kwaliteitsstandaarden. Onze F-gassen certificering en jarenlange ervaring garanderen dat u optimaal profiteert van alle technische mogelijkheden die Daikin biedt. Van de eerste advisering tot het jaarlijkse onderhoud, wij staan voor u klaar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Wat alle Daikin modellen gemeen hebben is de <strong>uitzonderlijke energie-efficiency</strong> met A+++ labels, stilte vanaf 19 dB(A), en de mogelijkheid om zowel te koelen als te verwarmen tot -20°C buitentemperatuur. Dit maakt ze ideaal voor het Nederlandse klimaat waar u jaarrond comfort wilt, met tot 60% lagere energiekosten dan conventionele verwarmingssystemen.
            </p>
          </div>

          {/* Model Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {models.map((model, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Snowflake className="h-6 w-6 mr-2 text-sky-500" />
                  {model.name}
                </h3>

                <ul className="space-y-3 mb-6">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-sky-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Toepassing:</strong> {model.applications}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
                >
                  Advies & Offerte
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Daikin Technologie: Waarom Het Verschil Maakt
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Zap className="h-6 w-6 mr-2 text-sky-500" />
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Savings Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bespaar Tot 60% Op Energiekosten
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Een Daikin warmtepomp verbruikt slechts 1 kW stroom om 4 kW warmte te produceren. Dit betekent 300% gratis energie uit de buitenlucht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">€1.200</div>
              <p className="text-gray-600">Gemiddelde jaarlijkse besparing op energiekosten</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">A+++</div>
              <p className="text-gray-600">Hoogste energie-efficiëntie label op alle modellen</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Euro className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">3-5 jaar</div>
              <p className="text-gray-600">Terugverdientijd door lagere energiekosten</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Rekenvoorbeeld Energiebesparing</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4">Verwarmingssysteem</th>
                    <th className="text-right py-3 px-4">Jaarverbruik</th>
                    <th className="text-right py-3 px-4">Jaarkosten</th>
                    <th className="text-right py-3 px-4">Besparing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">CV-ketel (gas)</td>
                    <td className="text-right py-3 px-4 text-gray-700">1.500 m³</td>
                    <td className="text-right py-3 px-4 text-gray-700">€2.400</td>
                    <td className="text-right py-3 px-4 text-gray-700">-</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Elektrische verwarming</td>
                    <td className="text-right py-3 px-4 text-gray-700">6.000 kWh</td>
                    <td className="text-right py-3 px-4 text-gray-700">€2.100</td>
                    <td className="text-right py-3 px-4 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-green-50 font-semibold">
                    <td className="py-3 px-4 text-gray-900">Daikin Warmtepomp</td>
                    <td className="text-right py-3 px-4 text-gray-900">2.400 kWh</td>
                    <td className="text-right py-3 px-4 text-gray-900">€840</td>
                    <td className="text-right py-3 px-4 text-green-600">€1.200-1.560</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              * Berekening gebaseerd op gemiddelde woning 120m², energieprijzen 2024 (gas €1,60/m³, elektriciteit €0,35/kWh), SCOP 4,0
            </p>
          </div>
        </div>
      </section>

      {/* Model Selection Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Welk Daikin Model Past Bij Uw Situatie?
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-sky-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kies de Daikin Stylish als u:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Een modern, stijlvol design belangrijk vindt dat past bij uw interieur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Maximale stilte wilt (vanaf 19 dB(A)) voor slaapkamer of werkruimte</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Een compact formaat nodig heeft met alle moderne functies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">WiFi-bediening standaard wilt hebben zonder extra kosten</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Een betrouwbaar systeem zoekt voor een aantrekkelijke prijs-kwaliteitverhouding</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-sky-600">Vanaf €2.200</span>
                <Link to="/contact" className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors">
                  Offerte Stylish
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kies de Daikin Perfera als u:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Jaarrond comfort wilt met uitstekende verwarmingscapaciteit tot -20°C</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">De beste prijs-prestatieverhouding zoekt in het premium segment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flash Streamer luchtzuivering belangrijk vindt voor gezonder binnenklimaat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Intelligente sensoren wilt die automatisch energiebesparing optimaliseren</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Een veelzijdige allrounder zoekt met bewezen betrouwbaarheid</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">Vanaf €2.600</span>
                <Link to="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Offerte Perfera
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kies de Daikin Ururu Sarara als u:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Het beste binnenklimaat wilt met unieke vochtregeling (bevochtiging én ontvochtigen)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Frisse buitenlucht ventilatie wilt zonder aparte ventilatiesysteem</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Maximaal comfort zoekt voor mensen met luchtwegproblemen of allergieën</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">De meest geavanceerde technologie wilt die Daikin te bieden heeft</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bereid bent te investeren in topkwaliteit met 10 jaar garantie</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">Vanaf €3.800</span>
                <Link to="/contact" className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                  Offerte Ururu Sarara
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Professionele Daikin Installatie in Limburg
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Waarom Kiezen Voor StayCool Airco?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Erkend Daikin Partner</strong>
                    <p className="text-gray-600 mt-1">Officieel gecertificeerd voor installatie en service van alle Daikin modellen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">F-gassen Certificering</strong>
                    <p className="text-gray-600 mt-1">Wettelijk verplichte certificering voor veilige en professionele installatie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">15+ Jaar Ervaring</strong>
                    <p className="text-gray-600 mt-1">Honderden tevreden klanten in heel Limburg</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Totaalservice</strong>
                    <p className="text-gray-600 mt-1">Van advies en installatie tot jaarlijks onderhoud en reparaties</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ons Installatieproces
              </h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gratis Adviesgesprek</h4>
                    <p className="text-gray-600">We bezoeken u thuis om uw situatie te beoordelen en het juiste model te adviseren</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Offerte op Maat</h4>
                    <p className="text-gray-600">Transparante prijsopgave inclusief installatie, afvoer en garantie</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professionele Installatie</h4>
                    <p className="text-gray-600">Vakkundige montage volgens Daikin richtlijnen, meestal binnen 1 dag</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Uitgebreide Instructie</h4>
                    <p className="text-gray-600">Volledige uitleg over bediening, onderhoud en alle functies</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Nazorg & Service</h4>
                    <p className="text-gray-600">Jaarlijks onderhoud en directe hulp bij vragen of storingen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Regio Limburg: Wij Installeren Overal
            </h3>
            <p className="text-gray-700 mb-6">
              StayCool Airco installeert Daikin airconditioners door heel Limburg. Onze technici kennen de regio en zijn snel ter plaatse voor installatie, onderhoud en service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-gray-700">✓ Maastricht</div>
              <div className="text-gray-700">✓ Roermond</div>
              <div className="text-gray-700">✓ Heerlen</div>
              <div className="text-gray-700">✓ Sittard</div>
              <div className="text-gray-700">✓ Venlo</div>
              <div className="text-gray-700">✓ Weert</div>
              <div className="text-gray-700">✓ Kerkrade</div>
              <div className="text-gray-700">✓ Venray</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen Over Daikin Airco's
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar Voor Uw Daikin Airco?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag nu een gratis adviesgesprek aan en ontdek welk Daikin model perfect bij uw situatie past. Geen verplichtingen, alleen eerlijk advies van de experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
          <p className="mt-6 text-orange-100 text-sm">
            Ook bereikbaar via WhatsApp: 06 36481054
          </p>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Gerelateerde Informatie
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/aircos" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <Wind className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Airco Installatie
              </h3>
              <p className="text-gray-600 mb-4">
                Ontdek onze complete airco installatie service voor particulieren en bedrijven
              </p>
              <span className="text-sky-600 font-semibold hover:text-sky-700">
                Lees meer →
              </span>
            </Link>

            <Link to="/capaciteit-calculator" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <Calculator className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Capaciteit Berekenen
              </h3>
              <p className="text-gray-600 mb-4">
                Bereken eenvoudig welke capaciteit u nodig heeft voor uw ruimte
              </p>
              <span className="text-sky-600 font-semibold hover:text-sky-700">
                Naar calculator →
              </span>
            </Link>

            <Link to="/onderhoud" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200">
              <Shield className="h-10 w-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Airco Onderhoud
              </h3>
              <p className="text-gray-600 mb-4">
                Jaarlijks onderhoud voor optimale prestaties en langere levensduur
              </p>
              <span className="text-sky-600 font-semibold hover:text-sky-700">
                Lees meer →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DaikinAircoModellen;
