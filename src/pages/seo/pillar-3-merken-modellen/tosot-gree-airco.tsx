import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Euro, Zap, Wind, ThermometerSun, Phone, Calculator, TrendingUp, Star, Award, Snowflake } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const TosotGreeAirco = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Merken', path: '/aircos' },
    { label: 'Tosot/Gree Airco' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Beste Prijs-Kwaliteit",
      description: "Premium features tegen een betaalbare prijs - tot 40% voordeliger dan topmerken"
    },
    {
      icon: <Star className="h-12 w-12 text-sky-500" />,
      title: "Wereldmarktleider",
      description: "Gree/Tosot is 's werelds grootste airco fabrikant met 200 miljoen verkochte units"
    },
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "A++ Energielabel",
      description: "Hoge efficiency met SCOP tot 4,6 voor lagere energiekosten en duurzame werking"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "5 Jaar Garantie",
      description: "Uitgebreide fabrieksgarantie als bewijs van kwaliteit en betrouwbaarheid"
    }
  ];

  const modelRange = [
    {
      name: "Tosot Premium Serie",
      tagline: "De perfecte balans tussen kwaliteit en prijs",
      features: [
        "Inverter technologie voor efficiency",
        "WiFi bediening via smartphone app",
        "Zelfreinigende functie",
        "4-weg luchtstroom voor optimale verdeling",
        "Energielabel A++"
      ],
      applications: "Ideaal voor bewuste consumenten die niet te veel willen betalen maar wel kwaliteit eisen",
      priceRange: "€1.400 - €1.900"
    },
    {
      name: "Tosot Standard Serie",
      tagline: "Betrouwbare basis voor een aantrekkelijke prijs",
      features: [
        "Inverter compressor",
        "Stille werking: 22 dB(A)",
        "Koelen en verwarmen tot -15°C",
        "Turbo modus voor snelle koeling",
        "Energielabel A++"
      ],
      applications: "Perfect voor wie een betaalbare oplossing zoekt zonder in te leveren op essentiële functies",
      priceRange: "€1.200 - €1.600"
    },
    {
      name: "Gree Commercial Serie",
      tagline: "Robuuste kwaliteit voor intensief gebruik",
      features: [
        "Versterkte constructie",
        "Hogere capaciteiten beschikbaar",
        "Gold Fin anticorrosie coating",
        "Geschikt voor 24/7 gebruik",
        "Verlengde garantie opties"
      ],
      applications: "Uitstekend voor kantoren, horeca en winkels met hoge gebruiksintensiteit",
      priceRange: "€1.600 - €2.400"
    }
  ];

  const benefits = [
    {
      title: "Werelds Grootste Airco Fabrikant",
      description: "Gree Group is sinds 2005 's werelds grootste fabrikant van airconditioners met een marktaandeel van 20%. Met meer dan 200 miljoen verkochte units wereldwijd en 90.000 medewerkers heeft Gree een ongeëvenaarde productie-expertise. Tosot is het premium consumentenmerk van Gree, speciaal ontwikkeld voor de Europese markt met focus op design en gebruiksvriendelijkheid."
    },
    {
      title: "Uitstekende Prijs-Kwaliteitverhouding",
      description: "Tosot/Gree biedt 30-40% lagere prijzen dan Daikin of Mitsubishi, terwijl de technische specificaties vergelijkbaar zijn. U krijgt inverter technologie, A++ energielabels, WiFi-bediening en 5 jaar garantie - zonder de premium prijzen. Dit maakt Tosot perfect voor wie slimme keuzes maakt en niet wil betalen voor merknaam maar voor functionaliteit."
    },
    {
      title: "Bewezen Betrouwbaarheid",
      description: "Met 30 jaar ervaring en strenge ISO 9001 kwaliteitscertificering produceert Gree airconditioners die makkelijk 15-20 jaar meegaan. Alle modellen worden getest op extreme omstandigheden van -30°C tot +50°C. De 5 jaar fabrieksgarantie via StayCool Airco geeft u gemoedsrust. Duizenden tevreden klanten in Nederland bevestigen de betrouwbaarheid."
    },
    {
      title: "Complete Functionaliteit",
      description: "Ook betaalbare modellen hebben premium functies: WiFi-bediening via smartphone, zelfreiniging, turbo modus, nachtmodus, timer functies en intelligente ontvochtigen. U hoeft niet in te leveren op comfort of gemak omdat u kiest voor een betaalbaar merk. Alle essentiële functies zijn standaard aanwezig."
    }
  ];

  const comparison = {
    headers: ["Kenmerk", "Tosot/Gree", "Daikin", "Mitsubishi"],
    rows: [
      {
        feature: "Prijs (incl. installatie)",
        tosot: "€1.400 - €2.400",
        daikin: "€2.200 - €4.500",
        mitsubishi: "€2.400 - €4.200"
      },
      {
        feature: "Energielabel",
        tosot: "A++",
        daikin: "A+++",
        mitsubishi: "A+++"
      },
      {
        feature: "SCOP (verwarming)",
        tosot: "4,6",
        daikin: "4,8-5,1",
        mitsubishi: "4,7-5,1"
      },
      {
        feature: "Garantie",
        tosot: "5 jaar",
        daikin: "5-10 jaar",
        mitsubishi: "7 jaar"
      },
      {
        feature: "Geluidsniveau",
        tosot: "22 dB(A)",
        daikin: "19 dB(A)",
        mitsubishi: "19 dB(A)"
      },
      {
        feature: "WiFi bediening",
        tosot: "Standaard/optioneel",
        daikin: "Standaard",
        mitsubishi: "Standaard"
      },
      {
        feature: "Verwarmingscapaciteit",
        tosot: "Tot -15°C",
        daikin: "Tot -20°C",
        mitsubishi: "Tot -20°C"
      }
    ]
  };

  const faqs = [
    {
      question: "Is Tosot/Gree betrouwbaar genoeg vergeleken met Daikin of Mitsubishi?",
      answer: "Absoluut. Gree is 's werelds grootste airco fabrikant sinds 2005 met 200+ miljoen verkochte units wereldwijd. Het merk heeft 30 jaar ervaring, ISO 9001 certificering en strikte kwaliteitscontroles. Hoewel Tosot/Gree voordeliger is dan Daikin of Mitsubishi, zijn de technische specificaties vergelijkbaar: inverter technologie, A++ labels, 5 jaar garantie en verwarmingscapaciteit tot -15°C. Het verschil zit vooral in merk-prestige en enkele premium features (zoals nog stiller werking of -20°C verwarming). Voor de meeste toepassingen is Tosot/Gree een uitstekende keuze met bewezen betrouwbaarheid."
    },
    {
      question: "Wat is het verschil tussen Tosot en Gree?",
      answer: "Tosot is het premium consumentenmerk van Gree Group, speciaal ontwikkeld voor de Europese markt. Tosot modellen hebben moderner design, gebruiksvriendelijkere bediening en extra features zoals WiFi en app control. Gree is het hoofdmerk met focus op functionele betrouwbaarheid, ook gebruikt voor commerciële toepassingen. Technisch zijn beide identiek - ze komen uit dezelfde fabrieken met dezelfde kwaliteitscontrole. Bij StayCool Airco adviseren we meestal Tosot voor particulieren vanwege het betere design en gebruiksgemak."
    },
    {
      question: "Waarom is Tosot/Gree zoveel goedkoper dan topmerken?",
      answer: "Tosot/Gree is 30-40% goedkoper door efficiënte productie op enorme schaal (werelds grootste fabrikant), lagere marketing kosten (minder reclame dan Daikin/Mitsubishi), en lagere distributiekosten via efficiënte supply chains. U betaalt niet voor premium merknaam of uitgebreide reclamecampagnes, maar voor een solide product met alle essentiële functies. Het verschil zit niet in kwaliteit of levensduur, maar in branding en enkele premium features die de meeste mensen niet nodig hebben. Dit maakt Tosot perfect voor bewuste consumenten."
    },
    {
      question: "Welke garantie krijg ik op een Tosot/Gree airco?",
      answer: "Bij installatie door StayCool Airco krijgt u 5 jaar volledige fabrieksgarantie op alle componenten inclusief compressor. Dit geldt bij correcte installatie en jaarlijks onderhoud. De garantie dekt materiaal- en fabricagefouten, onderdelen én arbeidsloon. StayCool Airco is erkend Tosot/Gree partner, wat betekent dat we garantieclaims direct kunnen afhandelen zonder gedoe. De 5 jaar garantie toont het vertrouwen in kwaliteit - dit is standaard bij premium merken, maar opmerkelijk bij deze prijsklasse."
    },
    {
      question: "Hoe energiezuinig is een Tosot/Gree airco?",
      answer: "Tosot/Gree airconditioners hebben energielabel A++ met SCOP waarden tot 4,6 voor verwarming. Dit betekent 360% gratis energie uit de buitenlucht - voor elke kWh stroom produceert het systeem 4,6 kWh warmte. Vergeleken met elektrische verwarming bespaart u 75% op energiekosten. De inverter technologie past continu het vermogen aan voor optimale efficiency. Jaarlijkse kosten liggen tussen €600-900 voor een gemiddelde woning, wat 50-60% lager is dan conventionele verwarming. Het verschil met A+++ topmerken is minimaal (5-10% extra besparing)."
    },
    {
      question: "Kan ik een Tosot/Gree airco op afstand bedienen?",
      answer: "Ja, Tosot Premium modellen hebben standaard of optioneel WiFi-functionaliteit. Via de smartphone app bedient u de airco op afstand, programmeert u schema's, monitort u energieverbruik en past u alle instellingen aan. De app werkt op iOS en Android en is gratis zonder abonnement. Ook zonder WiFi krijgt u een uitgebreide afstandsbediening met alle functies. Voor de Standard serie is WiFi als upgrade beschikbaar tegen meerprijs. Bij installatie helpen we met de setup zodat alles direct werkt."
    },
    {
      question: "Hoe stil is een Tosot/Gree airco?",
      answer: "Tosot/Gree modellen hebben een geluidsniveau vanaf 22 dB(A) in nachtmodus, wat zeer stil is (vergelijkbaar met een moderne koelkast of gefluister). Dit is iets hoger dan de stilste topmerken (19 dB), maar in de praktijk nauwelijks waarneembaar verschil. De meeste gebruikers merken het geluid niet op in slaapkamers. De binnenunit heeft speciale trillingdempers en de inverter technologie zorgt voor stabiele werking zonder pieken. Voor wie extreme stilte essentieel vindt (zeer lichte slapers) raden we premium merken aan, voor normale toepassingen is Tosot ruim stil genoeg."
    },
    {
      question: "Wat kost een Tosot/Gree airco installatie in Limburg?",
      answer: "Een complete Tosot/Gree installatie door StayCool Airco varieert tussen €1.200 en €2.400 inclusief alles. De Standard serie start vanaf €1.200, de Premium serie vanaf €1.400 en de Commercial serie vanaf €1.600. Deze all-in prijzen omvatten het apparaat, professionele installatie volgens fabrieksspecificaties, elektrische aansluiting, condensafvoer, garantieregistratie, instructie en afvoer oude apparatuur indien gewenst. Voor een exacte prijsopgave voor uw situatie bieden we een gratis plaatsbezoek en offerte aan zonder verplichtingen."
    }
  ];

  return (
    <>
      <MetaTags
        title="Tosot/Gree Airco Limburg | Betaalbare Kwaliteit A++ | StayCool Airco"
        description="Tosot/Gree airco ✓ Beste prijs-kwaliteit ✓ A++ efficiency ✓ 5 jaar garantie ✓ WiFi bediening ✓ Erkend installateur. Gratis advies!"
      />

      <SchemaMarkup
        type="Product"
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Tosot/Gree Airco",
          description: "Betaalbare Tosot en Gree airconditioners met inverter technologie en 5 jaar garantie. Professionele installatie door StayCool Airco in Limburg",
          brand: {
            "@type": "Brand",
            name: "Tosot/Gree"
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "EUR",
            lowPrice: "1200",
            highPrice: "2400",
            availability: "https://schema.org/InStock",
            areaServed: {
              "@type": "State",
              name: "Limburg"
            }
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "98"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tosot/Gree Airco: Betaalbare Kwaliteit A++
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            De slimme keuze voor wie niet te veel wil betalen maar wel degelijke kwaliteit eist. Tosot/Gree is 's werelds grootste airco fabrikant met bewezen betrouwbaarheid en 5 jaar garantie.
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
              <span>Erkend Tosot/Gree Partner</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>5 Jaar Fabrieksgarantie</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Vanaf €1.200 All-in</span>
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

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Waarom Kiezen Voor Tosot/Gree?
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              In de wereld van airconditioning betaalt u vaak voor merknaam in plaats van voor kwaliteit. <strong>Tosot/Gree doorbreekt dit patroon</strong>. Als 's werelds grootste airco fabrikant sinds 2005, met meer dan 200 miljoen verkochte units wereldwijd, levert Gree betrouwbare systemen zonder de premium prijzen van Japanse topmerken.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Tosot is het premium consumentenmerk van Gree</strong>, speciaal ontwikkeld voor de Europese markt met focus op modern design en gebruiksvriendelijkheid. U krijgt inverter technologie, A++ energielabels, WiFi-bediening en 5 jaar garantie - voor 30-40% minder dan vergelijkbare Daikin of Mitsubishi modellen. Dit maakt Tosot perfect voor bewuste consumenten die slimme keuzes maken.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Bij StayCool Airco zijn we erkend Tosot/Gree partner omdat we geloven in <strong>eerlijke kwaliteit tegen eerlijke prijzen</strong>. We installeren honderden Tosot/Gree systemen per jaar in Limburg en de klanttevredenheid is uitstekend. Onze ervaring toont dat deze systemen 15-20 jaar meegaan met correct onderhoud - net zo lang als duurdere merken.
            </p>
          </div>

          {/* Model Range */}
          <div className="space-y-8">
            {modelRange.map((model, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <Snowflake className="h-8 w-8 text-sky-500 mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{model.name}</h3>
                        <p className="text-gray-600 italic">{model.tagline}</p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-sky-50 rounded-lg p-4">
                      <p className="text-gray-700">
                        <strong>Perfect voor:</strong> {model.applications}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-emerald-600 p-8 flex flex-col justify-center items-center text-white">
                    <div className="text-center">
                      <p className="text-sm font-semibold mb-2 text-green-100">Vanaf</p>
                      <p className="text-4xl font-bold mb-4">{model.priceRange.split(' - ')[0]}</p>
                      <p className="text-sm mb-6 text-green-100">Inclusief installatie</p>
                      <Link
                        to="/contact"
                        className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                      >
                        Vraag Offerte Aan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            De Voordelen Van Tosot/Gree
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Star className="h-6 w-6 mr-2 text-sky-500" />
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

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Tosot/Gree vs. Premium Merken
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sky-500 text-white">
                  <tr>
                    {comparison.headers.map((header, index) => (
                      <th key={index} className={`py-4 px-6 ${index === 0 ? 'text-left' : 'text-center'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-4 px-6 font-semibold text-gray-900">{row.feature}</td>
                      <td className="text-center py-4 px-6 text-green-600 font-bold">{row.tosot}</td>
                      <td className="text-center py-4 px-6 text-gray-700">{row.daikin}</td>
                      <td className="text-center py-4 px-6 text-gray-700">{row.mitsubishi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Euro className="h-6 w-6 mr-2 text-green-600" />
                Prijsvoordeel
              </h3>
              <p className="text-gray-700">
                Bespaar €800-2.000 vergeleken met Daikin/Mitsubishi zonder concessies aan essentiële functionaliteit
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Zap className="h-6 w-6 mr-2 text-blue-600" />
                Vergelijkbare Efficiency
              </h3>
              <p className="text-gray-700">
                A++ label met SCOP 4,6 levert slechts 5-10% minder besparing dan A+++ topmodellen
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-purple-600" />
                Alle Essentials
              </h3>
              <p className="text-gray-700">
                WiFi, zelfreiniging, turbo-modus en 5 jaar garantie - niets mist voor dagelijks gebruik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Savings */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Bespaar Tot 60% Op Energiekosten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">€900</div>
              <p className="text-gray-600">Gemiddelde jaarlijkse besparing vs. conventionele verwarming</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">SCOP 4,6</div>
              <p className="text-gray-600">360% gratis energie uit de buitenlucht</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Euro className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">2-3 jaar</div>
              <p className="text-gray-600">Terugverdientijd door lagere energiekosten</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Rekenvoorbeeld: Tosot vs. Conventioneel</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4">Verwarmingssysteem</th>
                    <th className="text-right py-3 px-4">Aanschafprijs</th>
                    <th className="text-right py-3 px-4">Jaarkosten Energie</th>
                    <th className="text-right py-3 px-4">5-Jaar Totaal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Elektrische verwarming</td>
                    <td className="text-right py-3 px-4 text-gray-700">€500</td>
                    <td className="text-right py-3 px-4 text-gray-700">€2.100</td>
                    <td className="text-right py-3 px-4 text-gray-700">€11.000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">CV-ketel (gas)</td>
                    <td className="text-right py-3 px-4 text-gray-700">€3.500</td>
                    <td className="text-right py-3 px-4 text-gray-700">€1.800</td>
                    <td className="text-right py-3 px-4 text-gray-700">€12.500</td>
                  </tr>
                  <tr className="bg-green-50 font-semibold">
                    <td className="py-3 px-4 text-gray-900">Tosot/Gree Warmtepomp</td>
                    <td className="text-right py-3 px-4 text-gray-900">€1.600</td>
                    <td className="text-right py-3 px-4 text-gray-900">€800</td>
                    <td className="text-right py-3 px-4 text-green-600">€5.600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-green-50 rounded-lg p-6 border border-green-200">
              <p className="text-gray-900 font-semibold mb-2">Besparing over 5 jaar:</p>
              <ul className="space-y-1 text-gray-700">
                <li>✓ €5.400 besparing vs. elektrische verwarming</li>
                <li>✓ €6.900 besparing vs. CV-ketel (gas)</li>
                <li>✓ €800-1.200 extra besparing vs. premium merken bij aanschaf</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              * Berekening voor gemiddelde woning 120m², energieprijzen 2024
            </p>
          </div>
        </div>
      </section>

      {/* Installation & Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Professionele Tosot/Gree Installatie
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Erkend Tosot/Gree Partner
              </h3>
              <p className="text-gray-700 mb-6">
                StayCool Airco is erkend Tosot/Gree installatiepartner met jarenlange ervaring. Wij installeren volgens fabrieksspecificaties en activeren de volledige 5 jaar fabrieksgarantie. Onze monteurs zijn F-gassen gecertificeerd en volledig getraind op alle Tosot/Gree modellen.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Erkend Partner Status</strong>
                    <p className="text-gray-600 mt-1">Officiële certificering voor alle Tosot en Gree series</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">5 Jaar Garantie Activatie</strong>
                    <p className="text-gray-600 mt-1">Registratie bij Gree voor volledige garantiedekking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">F-gassen Gecertificeerd</strong>
                    <p className="text-gray-600 mt-1">Wettelijk verplichte kwalificatie voor veilig werken</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Honderden Tevreden Klanten</strong>
                    <p className="text-gray-600 mt-1">Uitstekende reviews en klanttevredenheid in Limburg</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-8 border border-sky-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                All-in Installatieservice
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gratis plaatsbezoek en advies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Capaciteitsberekening voor optimale match</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transparante all-in offerte</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professionele montage volgens richtlijnen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Elektrische aansluiting en condensafvoer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">WiFi configuratie indien van toepassing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Uitgebreide instructie alle functies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Garantieregistratie bij fabrikant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Afvoer oude apparatuur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 jaar gratis nazorg</span>
                </li>
              </ul>

              <div className="mt-6 bg-white rounded-lg p-4">
                <p className="text-gray-900 font-semibold mb-2">Gemiddelde installatietijd:</p>
                <p className="text-gray-700">4-6 uur voor standaard installatie. Meestal dezelfde dag klaar.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Service Gebied: Heel Limburg
            </h3>
            <p className="text-gray-700 mb-6">
              StayCool Airco installeert Tosot/Gree airconditioners door heel Limburg. Onze monteurs kennen de regio en zijn snel ter plaatse voor installatie, onderhoud en service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-gray-700">✓ Maastricht</div>
              <div className="text-gray-700">✓ Roermond</div>
              <div className="text-gray-700">✓ Heerlen</div>
              <div className="text-gray-700">✓ Sittard-Geleen</div>
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
            Veelgestelde Vragen Over Tosot/Gree
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
            Klaar Voor Betaalbare Kwaliteit?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Vraag nu een gratis adviesgesprek aan en ontdek hoe u €800-2.000 bespaart zonder in te leveren op kwaliteit. Transparante offerte zonder verplichtingen.
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
                Complete informatie over airco installatie in Limburg
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
                Bereken de juiste capaciteit voor uw ruimte
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
                Jaarlijks onderhoud voor optimale prestaties
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

export default TosotGreeAirco;
