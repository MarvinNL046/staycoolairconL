import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, CheckCircle, Shield, Euro, Zap, TrendingUp, Phone, Calculator, Award, Building2 } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';
import LazyImage from '../../../components/LazyImage';

const ThuisbatterijSmileT10Page = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'AlphaESS SMILE-T10' }
  ];

  const usps = [
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "10 kWh Capaciteit",
      description: "Grootschalige energieopslag voor maximale zelfvoorziening en onafhankelijkheid"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "3-Fase Ondersteuning",
      description: "10 kW 3-fase omvormer voor gelijkmatige verdeling over alle fasen"
    },
    {
      icon: <Building2 className="h-12 w-12 text-yellow-500" />,
      title: "Zakelijk & Particulier",
      description: "Geschikt voor grote huishoudens, kantoren, winkels en bedrijfspanden"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "10 Jaar Garantie",
      description: "Premium garantie met 24/7 monitoring en support voor zakelijk gebruik"
    }
  ];

  const specifications = [
    { label: "Batterijcapaciteit", value: "10,1 kWh" },
    { label: "Bruikbare capaciteit", value: "9,6 kWh (95% DoD)" },
    { label: "Omvormer vermogen", value: "10 kW (3-fase)" },
    { label: "Type batterij", value: "LiFePO4 (lithium ijzer fosfaat)" },
    { label: "Ontlaaddiepte (DoD)", value: "95%" },
    { label: "Rendement", value: " meer dan 97%" },
    { label: "Garantie", value: "10 jaar" },
    { label: "Afmetingen", value: "865 x 568 x 237 mm" },
    { label: "Gewicht", value: "105 kg" },
    { label: "Geluidsproductie", value: " minder dan 35 dB" },
    { label: "Levensduur", value: "6000+ cycli" },
    { label: "Fasen", value: "3-fase (400V)" },
    { label: "Max PV vermogen", value: "15 kWp" },
    { label: "Parallel koppelbaar", value: "Ja, tot 3 systemen" }
  ];

  const applications = [
    {
      title: "Grote Huishoudens",
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      description: "Gezinnen met hoog energieverbruik ( meer dan 6000 kWh/jaar)",
      benefits: ["Volledige dag/nacht cyclus", "EV laden + huishouden", "Warmtepomp integratie"]
    },
    {
      title: "Elektrisch Rijden",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      description: "Huishoudens met één of meerdere elektrische auto's",
      benefits: ["40-50 km rijbereik per dag", "Volledige laadcyclus", "Intelligente laadsturing"]
    },
    {
      title: "Zakelijk Gebruik",
      icon: <Building2 className="h-8 w-8 text-yellow-500" />,
      description: "Kantoren, winkels, bedrijfspanden met 3-fase aansluiting",
      benefits: ["Peak shaving", "Energiekostenbesparing", "Backup tijdens storing"]
    }
  ];

  const faqs = [
    {
      question: "Voor wie is de AlphaESS SMILE-T10 geschikt?",
      answer: "De SMILE-T10 is ontworpen voor grote huishoudens (4+ personen) met een jaarverbruik vanaf 6000 kWh, gezinnen met elektrische auto's, huizen met 3-fase aansluiting, en zakelijke toepassingen zoals kantoren, winkels en bedrijfspanden. Ook ideaal voor wie maximale energieonafhankelijkheid en backup-capaciteit wil."
    },
    {
      question: "Wat is het verschil tussen 1-fase en 3-fase?",
      answer: "Bij een 1-fase aansluiting gaat alle stroom door één fase, wat kan leiden tot onevenwichtige belasting. De SMILE-T10 heeft een 3-fase omvormer die het vermogen gelijkmatig verdeelt over drie fasen. Dit voorkomt overbelasting, biedt meer totaalvermogen (10 kW vs 5-8 kW), en is verplicht bij veel zakelijke installaties en moderne huizen met hoog verbruik."
    },
    {
      question: "Hoeveel kan ik besparen met de SMILE-T10?",
      answer: "Met 10 kWh capaciteit bespaart een gemiddeld groot huishouden €800-1.200 per jaar. Bij zakelijk gebruik met peak shaving kunnen besparingen oplopen tot €1.500-2.500 per jaar. Met elektrisch rijden (15.000 km/jaar) komt daar nog eens €600-900 besparing bij. De terugverdientijd ligt tussen 6-8 jaar voor particulieren en 5-7 jaar voor zakelijk gebruik."
    },
    {
      question: "Kan ik de SMILE-T10 uitbreiden?",
      answer: "Ja, u kunt tot 3 SMILE-T10 systemen parallel koppelen voor een totale capaciteit van 30 kWh. Dit is vooral interessant voor zeer grote huishoudens, meerdere elektrische auto's, of zakelijke toepassingen met hoge energiebehoefte. De systemen werken gecoördineerd als één groot batterijsysteem."
    },
    {
      question: "Wat is peak shaving en hoe werkt het?",
      answer: "Peak shaving is het verminderen van piekvermogen tijdens drukke momenten. Bedrijven betalen vaak op basis van hun hoogste verbruikspiek. De SMILE-T10 levert automatisch extra vermogen tijdens piekmomenten, waardoor uw netafname lager blijft. Dit kan jaarlijks honderden tot duizenden euro's besparen op capaciteitstarieven."
    },
    {
      question: "Hoelang heb ik backup-stroom bij storing?",
      answer: "Met 10 kWh kunt u bij gemiddeld huishoudelijk verbruik (2 kW) ongeveer 5 uur overbruggen. Als u alleen essentiële apparaten gebruikt (koelkast, verlichting, internet: ~500W), gaat de batterij ongeveer 20 uur mee. Bij zakelijk gebruik hangt dit af van uw apparatuur en kritische processen."
    },
    {
      question: "Is de SMILE-T10 geschikt voor mijn bedrijf?",
      answer: "De SMILE-T10 is ideaal voor kleine tot middelgrote bedrijven met 3-fase aansluiting en een dagverbruik van 20-50 kWh. Perfect voor kantoren, winkels, restaurants, praktijkruimtes en kleine productiebedrijven. De batterij helpt bij peak shaving, backup tijdens storingen, en maximaliseren van zonne-energie gebruik."
    },
    {
      question: "Welke subsidies en BTW-regelingen zijn er?",
      answer: "Particulieren profiteren van de 0% BTW regeling voor thuisbatterijen gecombineerd met zonnepanelen (21% besparing). Bedrijven kunnen de batterij als investering afschrijven en mogelijk ISDE subsidie aanvragen. Ook zijn er regionale regelingen en EIA/MIA fiscale voordelen voor zakelijk gebruik. Wij adviseren u over alle mogelijkheden."
    }
  ];

  return (
    <>
      <MetaTags
        title="AlphaESS SMILE-T10 Thuisbatterij Limburg | 10 kWh 3-Fase Systeem | StayCool Airco"
        description="AlphaESS SMILE-T10 thuisbatterij ✓ 10 kWh capaciteit ✓ 10 kW 3-fase omvormer ✓ Zakelijk & particulier ✓ 10 jaar garantie ✓ Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@type": "Product",
          name: "AlphaESS SMILE-T10 Thuisbatterij",
          description: "Grootschalig 10 kWh energieopslagsysteem met 10 kW 3-fase hybride omvormer. Ideaal voor grote huishoudens en zakelijk gebruik.",
          brand: {
            "@type": "Brand",
            name: "AlphaESS"
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "EUR",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "89"
          }
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AlphaESS SMILE-T10: 10 kWh 3-Fase Thuisbatterij voor Grote Huishoudens & Zakelijk
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Grootschalige energieopslag met 10 kWh capaciteit en krachtige 10 kW 3-fase omvormer. Perfect voor grote huishoudens, elektrisch rijden en zakelijke toepassingen met maximale energieonafhankelijkheid.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Zakelijk Advies
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Peak Shaving
            </Link>
          </div>

          <div className="flex items-center gap-4 text-yellow-900">
            <div className="flex items-center">
              <Battery className="h-5 w-5 mr-2" />
              <span>10 kWh Capaciteit</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              <span>3-Fase 10 kW</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>10 Jaar Garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom Kiezen voor de SMILE-T10?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Het meest krachtige AlphaESS systeem voor maximale prestaties
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
              Wat is de AlphaESS SMILE-T10 Thuisbatterij?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              De <strong>AlphaESS SMILE-T10</strong> is een hoogwaardige grootschalige energieopslagoplossing met een capaciteit van <strong>10,1 kWh</strong> (9,6 kWh bruikbaar) en een krachtige <strong>10 kW 3-fase hybride omvormer</strong>. Dit systeem is speciaal ontworpen voor toepassingen waar grote energiebehoefte, 3-fase aansluiting, en maximale betrouwbaarheid cruciaal zijn.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              De SMILE-T10 onderscheidt zich door zijn <strong>3-fase ondersteuning</strong>, wat betekent dat het vermogen gelijkmatig wordt verdeeld over drie fasen. Dit voorkomt overbelasting van individuele fasen en maakt het systeem geschikt voor moderne huizen met 3-fase aansluiting, grote huishoudens met hoog verbruik, en <strong>zakelijke toepassingen</strong> zoals kantoren, winkels en bedrijfspanden.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Technische Specificaties SMILE-T10
            </h2>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="font-semibold text-gray-900">{spec.label}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Waarom 3-Fase? Het Verschil Uitgelegd
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Bij een <strong>1-fase aansluiting</strong> gaat alle stroom door één fase met een maximaal vermogen van meestal 25-35 ampère (5-8 kW). Dit kan leiden tot problemen bij hoog gelijktijdig verbruik (bijvoorbeeld airco + wasmachine + koken + EV laden).
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Een <strong>3-fase aansluiting</strong> verdeelt het vermogen over drie aparte fasen, elk met eigen capaciteit. De SMILE-T10's 3-fase omvormer biedt:
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Voordelen 3-Fase Omvormer:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Gelijkmatige verdeling:</strong> Voorkomt overbelasting van individuele fasen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Hoger totaalvermogen:</strong> 10 kW totaal versus 5-8 kW bij 1-fase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Betere benutting:</strong> Elk fase kan onafhankelijk laden/ontladen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Zakelijk vereist:</strong> Verplicht bij veel zakelijke installaties</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Toekomstbestendig:</strong> Moderne huizen krijgen standaard 3-fase</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Toepassingen SMILE-T10
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    {app.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{app.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Peak Shaving voor Zakelijk Gebruik
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Een van de belangrijkste voordelen voor zakelijke gebruikers is <strong>peak shaving</strong> - het verlagen van piekvermogen. Veel bedrijven betalen niet alleen voor verbruikte kWh, maar ook voor hun hoogste verbruikspiek in een maand of jaar (capaciteitstarief).
            </p>

            <div className="bg-white rounded-lg p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hoe Peak Shaving Werkt:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <span className="text-2xl font-bold text-yellow-600">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Normale Situatie</h4>
                    <p className="text-gray-600">
                      Kantoor met gemiddeld 3 kW verbruik, maar tijdens lunchpiek 15 kW (koffieautomaten, magnetrons, verwarming). Capaciteitstarief berekend op 15 kW piek.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <span className="text-2xl font-bold text-yellow-600">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Met SMILE-T10</h4>
                    <p className="text-gray-600">
                      Batterij levert automatisch 8 kW bij tijdens piek. Netafname blijft onder 7 kW. Capaciteitstarief berekend op 7 kW in plaats van 15 kW.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <span className="text-2xl font-bold text-yellow-600">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Resultaat</h4>
                    <p className="text-gray-600">
                      Besparing van €40-60 per kW per maand op capaciteitstarief. Bij 8 kW reductie: €320-480/maand = €3.840-5.760/jaar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Voordelen SMILE-T10
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Maximale Capaciteit voor Volledige Zelfvoorziening</h3>
            <p className="text-lg text-gray-600 mb-6">
              Met <strong>10 kWh bruikbare capaciteit</strong> (95% DoD) kunt u een volledig dag/nacht cyclus overbruggen. Voor een groot huishouden met 20-30 kWh dagverbruik betekent dit dat u 's nachts volledig op batterijstroom kunt draaien, waardoor uw netafname drastisch daalt. Gecombineerd met voldoende zonnepanelen (10-15 kWp) bereikt u <strong>70-85% energieonafhankelijkheid</strong>.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Krachtige 10 kW Omvormer</h3>
            <p className="text-lg text-gray-600 mb-6">
              De 10 kW omvormer is de krachtigste in het AlphaESS assortiment. Dit betekent:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>Hoge gelijktijdige belasting:</strong> Meerdere zware apparaten tegelijk (EV laden + inductie koken + airco)</li>
              <li><strong>Snel laden:</strong> Batterij volladen in 1-2 uur bij voldoende zonlicht</li>
              <li><strong>Snel ontladen:</strong> 10 kW continu leveren voor zware belasting</li>
              <li><strong>Groot PV-systeem:</strong> Tot 15 kWp zonnepanelen aansluiten</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Ideaal voor Elektrisch Rijden</h3>
            <p className="text-lg text-gray-600 mb-6">
              Met 10 kWh kunt u dagelijks <strong>40-50 kilometer</strong> rijbereik laden met zonne-energie. Voor een gemiddelde Nederlandse automobilist (15.000 km/jaar ≈ 40 km/dag) betekent dit dat u het hele jaar door <strong>volledig op zonne-energie</strong> kunt rijden. Dit bespaart u:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li>3000 kWh/jaar aan EV laadstroom</li>
              <li>€900-1.200/jaar aan laadkosten (vs. publieke laadpaal)</li>
              <li>Onafhankelijkheid van dure laadpalen en tanken</li>
              <li>Volledig CO2-neutrale mobiliteit</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Parallel Koppelbaar tot 30 kWh</h3>
            <p className="text-lg text-gray-600 mb-6">
              Voor extreem grote huishoudens of zakelijke toepassingen met zeer hoge energiebehoefte kunt u tot <strong>3 SMILE-T10 systemen parallel koppelen</strong>. Dit geeft u 30 kWh totale capaciteit en 30 kW vermogen. Ideaal voor:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li>Grote villa's met zwembad, sauna, wellness</li>
              <li>Meerdere elektrische auto's (bedrijfswagenpark)</li>
              <li>Grote bedrijfspanden met hoog verbruik</li>
              <li>Volledige energieonafhankelijkheid (off-grid)</li>
            </ul>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Besparingen en Return on Investment
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Rekenvoorbeelden Besparing:</h4>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Particulier - Groot Huishouden</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Jaarverbruik: 6000 kWh</li>
                    <li>Extra eigen verbruik door batterij: 2500 kWh/jaar</li>
                    <li>Besparing elektriciteitskosten: €1.000/jaar</li>
                    <li>Investering: €11.000 (na BTW teruggave)</li>
                    <li>Terugverdientijd: 11 jaar</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Particulier - Met Elektrische Auto</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Jaarverbruik: 9000 kWh (incl. 3000 kWh EV)</li>
                    <li>Extra eigen verbruik: 3500 kWh/jaar</li>
                    <li>Besparing elektriciteit + EV: €1.600/jaar</li>
                    <li>Investering: €11.000 (na BTW teruggave)</li>
                    <li>Terugverdientijd: 7 jaar</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Zakelijk - Kantoor met Peak Shaving</h5>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Dagverbruik: 40 kWh (10.000 kWh/jaar)</li>
                    <li>Peak shaving besparing capaciteitstarief: €4.000/jaar</li>
                    <li>Extra eigen verbruik zonne-energie: €1.500/jaar</li>
                    <li>Totale besparing: €5.500/jaar</li>
                    <li>Investering: €11.000 (zakelijk afschrijfbaar)</li>
                    <li>Terugverdientijd: 2 jaar</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Subsidies en Fiscale Voordelen
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Voor Particulieren</h3>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>0% BTW:</strong> Sinds januari 2023 betaalt u 0% BTW op thuisbatterijen gecombineerd met zonnepanelen (21% besparing)</li>
              <li><strong>Geen vermogensheffing:</strong> Investering in energieopslag wordt niet meegeteld voor box 3</li>
              <li><strong>Waardestijging woning:</strong> Energieopslagsysteem verhoogt WOZ-waarde beperkt</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Voor Bedrijven</h3>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>Investeringsaftrek:</strong> EIA (Energie-investeringsaftrek) of MIA/Vamil regeling mogelijk</li>
              <li><strong>Afschrijving:</strong> Zakelijke investering over 5-10 jaar afschrijven</li>
              <li><strong>ISDE subsidie:</strong> Investeringssubsidie Duurzame Energie voor bedrijven</li>
              <li><strong>BTW terugvragen:</strong> Volledige BTW terugvorderen als zakelijke investering</li>
              <li><strong>Operationele lease:</strong> Maandelijkse kosten direct aftrekbaar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ontdek de Mogelijkheden van de SMILE-T10
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Plan een gratis adviesgesprek met onze energiespecialisten en ontvang een op maat gemaakt voorstel inclusief ROI-berekening
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg"
            >
              046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen over de SMILE-T10
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

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Vergelijk AlphaESS Modellen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <Battery className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE-B3</h3>
              <p className="text-gray-600 mb-4">
                Compact 2,9 kWh systeem voor kleine huishoudens. Meest betaalbare optie.
              </p>
              <Link
                to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-b3"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                Meer over SMILE-B3 →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <Battery className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE5</h3>
              <p className="text-gray-600 mb-4">
                Modulair uitbreidbaar van 5-30 kWh. Groeit mee met uw energiebehoefte.
              </p>
              <Link
                to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
                className="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center"
              >
                Meer over SMILE5 →
              </Link>
            </div>

            <div className="bg-yellow-50 rounded-lg p-8 shadow-lg border-2 border-yellow-400">
              <div className="flex items-center justify-between mb-4">
                <Battery className="h-12 w-12 text-yellow-500" />
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  ZAKELIJK
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">SMILE-T10</h3>
              <p className="text-gray-600 mb-4">
                10 kWh met 3-fase ondersteuning. Voor grote huishoudens en zakelijk gebruik.
              </p>
              <span className="text-yellow-600 font-semibold">
                U bekijkt deze pagina
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Maximale Energieonafhankelijkheid met de SMILE-T10
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Profiteer van subsidies, BTW-voordelen en peak shaving besparingen. Onze specialisten berekenen uw zakelijke of particuliere ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Peak Shaving
            </Link>
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <TrendingUp className="h-6 w-6 mr-2" />
              ROI Berekenen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijSmileT10Page;
