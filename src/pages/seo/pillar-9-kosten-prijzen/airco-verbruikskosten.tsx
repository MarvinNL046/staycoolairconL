import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, Euro, Phone, Mail, Zap, TrendingDown, ThermometerSun, Wind, Sun, Snowflake } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const AircoVerbruikskosten: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Kosten & Prijzen', path: '/seo/pillar-9-kosten-prijzen' },
    { label: 'Airco Verbruikskosten' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "€180-400 per Jaar",
      description: "Gemiddelde elektriciteitskosten voor koelen én verwarmen met moderne airco."
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-sky-500" />,
      title: "60% Besparing Verwarmen",
      description: "Warmtepomp-airco verbruikt 60% minder dan elektrische verwarming."
    },
    {
      icon: <Zap className="h-12 w-12 text-sky-500" />,
      title: "A+++ Energie-efficiency",
      description: "Premium merken halen 4kW warmte uit 1kW stroom (SCOP 4.0)."
    },
    {
      icon: <Calculator className="h-12 w-12 text-sky-500" />,
      title: "Bereken Uw Verbruik",
      description: "Gratis online calculator voor exacte kosten op basis van uw situatie."
    }
  ];

  const verbruikPerCapaciteit = [
    {
      capaciteit: "2.0 - 2.5 kW",
      koelen: "0.6 - 0.7 kW",
      verwarmen: "0.5 - 0.6 kW",
      kamerGrootte: "15-25m²",
      jaarKosten: "€180 - €240",
      energieLabel: "A++/A+++"
    },
    {
      capaciteit: "2.5 - 3.5 kW",
      koelen: "0.7 - 0.9 kW",
      verwarmen: "0.6 - 0.8 kW",
      kamerGrootte: "25-40m²",
      jaarKosten: "€240 - €320",
      energieLabel: "A++/A+++"
    },
    {
      capaciteit: "3.5 - 5.0 kW",
      koelen: "0.9 - 1.2 kW",
      verwarmen: "0.8 - 1.0 kW",
      kamerGrootte: "40-60m²",
      jaarKosten: "€320 - €400",
      energieLabel: "A++/A+++"
    },
    {
      capaciteit: "5.0 - 7.0 kW",
      koelen: "1.2 - 1.6 kW",
      verwarmen: "1.0 - 1.4 kW",
      kamerGrootte: "60-80m²",
      jaarKosten: "€400 - €520",
      energieLabel: "A+/A++"
    }
  ];

  const vergelijkingVerwarmingsmethoden = [
    {
      methode: "Warmtepomp Airco (A+++)",
      vermogen: "1 kW elektriciteit → 4 kW warmte",
      efficiency: "SCOP 4.0 (400%)",
      kostenPerUur: "€0.46/uur",
      jaarKosten: "€240",
      co2Uitstoot: "Laag (indirect)"
    },
    {
      methode: "Elektrische Verwarming",
      vermogen: "1 kW elektriciteit → 1 kW warmte",
      efficiency: "100%",
      kostenPerUur: "€0.46/uur",
      jaarKosten: "€650",
      co2Uitstoot: "Gemiddeld (indirect)"
    },
    {
      methode: "HR-Gasketel",
      vermogen: "Aardgas (0,95 m³ = 1 kW warmte)",
      efficiency: "90-95%",
      kostenPerUur: "€0.14/uur",
      jaarKosten: "€420",
      co2Uitstoot: "Hoog (direct)"
    },
    {
      methode: "Infrarood Panelen",
      vermogen: "1 kW elektriciteit → 1 kW warmte",
      efficiency: "100%",
      kostenPerUur: "€0.46/uur",
      jaarKosten: "€550",
      co2Uitstoot: "Gemiddeld (indirect)"
    }
  ];

  const seizoensVerbruik = [
    {
      seizoen: "Zomer (Juni-Augustus)",
      gebruikUren: "300-500 uur koelen",
      gemiddeldVermogen: "0.8 kW",
      kosten: "€110-€230",
      tips: "Gebruik overdag, 's nachts ramen open"
    },
    {
      seizoen: "Lente/Herfst (Apr-Mei, Sep-Okt)",
      gebruikUren: "200-350 uur koelen + verwarmen",
      gemiddeldVermogen: "0.6 kW",
      kosten: "€55-€95",
      tips: "Optimaal voor warmtepomp efficiency"
    },
    {
      seizoen: "Winter (November-Maart)",
      gebruikUren: "400-700 uur verwarmen",
      gemiddeldVermogen: "0.7 kW",
      kosten: "€130-€290",
      tips: "Hybride met CV voor optimale besparing"
    },
    {
      seizoen: "Jaarrond Totaal",
      gebruikUren: "900-1550 uur totaal",
      gemiddeldVermogen: "0.7 kW gemiddeld",
      kosten: "€295-€615",
      tips: "Afhankelijk van isolatie en gedrag"
    }
  ];

  const besparingsTips = [
    {
      tip: "Temperatuur 1°C lager verwarmen",
      besparing: "€40-60/jaar",
      percentage: "15-18%",
      inspanning: "Laag"
    },
    {
      tip: "Temperatuur 1°C hoger koelen",
      besparing: "€20-30/jaar",
      percentage: "12-15%",
      inspanning: "Laag"
    },
    {
      tip: "Filters maandelijks reinigen",
      besparing: "€35-50/jaar",
      percentage: "12-15%",
      inspanning: "Laag"
    },
    {
      tip: "Jaarlijks professioneel onderhoud",
      besparing: "€40-70/jaar",
      percentage: "15-20%",
      inspanning: "Laag"
    },
    {
      tip: "Nachtstand/timer gebruiken",
      besparing: "€50-80/jaar",
      percentage: "18-25%",
      inspanning: "Laag"
    },
    {
      tip: "Zonwering tijdens hete dagen",
      besparing: "€30-45/jaar",
      percentage: "10-15%",
      inspanning: "Gemiddeld"
    },
    {
      tip: "Deuren/ramen sluiten tijdens gebruik",
      besparing: "€45-70/jaar",
      percentage: "15-22%",
      inspanning: "Laag"
    },
    {
      tip: "Eco-modus gebruiken waar mogelijk",
      besparing: "€25-40/jaar",
      percentage: "8-12%",
      inspanning: "Laag"
    }
  ];

  const rekenvoorbeeld = {
    capaciteit: "3.5 kW airco",
    ruimte: "35m² woonkamer",
    koelverbruik: {
      uren: 400,
      vermogen: 0.9,
      kosten: 165
    },
    verwarmVerbruik: {
      uren: 600,
      vermogen: 0.7,
      kosten: 193
    },
    jaarTotaal: 358,
    besparingVerwarmen: 407,
    nettoVoordeel: 49
  };

  const faqItems = [
    {
      question: "Hoeveel stroom verbruikt een airco per uur?",
      answer: "Het stroomverbruik hangt af van de capaciteit en modus. Een moderne 3.5 kW airco verbruikt tijdens koelen ongeveer 0.9 kW per uur (€0.41/uur bij €0.46/kWh), en tijdens verwarmen slechts 0.7 kW per uur (€0.32/uur) dankzij warmtepomptechnologie. Kleinere 2.5 kW units verbruiken 0.6-0.7 kW (€0.28-€0.32/uur). Premium A+++-merken zoals Daikin en Mitsubishi verbruiken 20-30% minder dan budget-merken dankzij betere inverter-technologie en isolatie."
    },
    {
      question: "Wat kosten airco's aan elektriciteit per jaar?",
      answer: "Bij gemiddeld gebruik (900-1200 uur per jaar voor koelen en verwarmen) kost een airco €180-400 per jaar aan elektriciteit, afhankelijk van capaciteit, gebruik en tarief. Een 2.5 kW unit kost circa €200-280/jaar, een 3.5 kW unit €280-380/jaar, en een 5.0 kW unit €380-520/jaar. Dit is inclusief zowel koelen in de zomer als verwarmen in voor-/naseizoen. Belangrijk: wanneer u de airco gebruikt ter vervanging van elektrische verwarming, bespaart u 60% op verwarmingskosten, waardoor netto kosten vaak lager zijn."
    },
    {
      question: "Is een airco goedkoper of duurder dan verwarmen met gas?",
      answer: "Voor verwarmen is een moderne warmtepomp-airco goedkoper dan elektrische verwarming maar iets duurder dan gasverwarming bij normale gasprijzen. Een airco verwarmt voor €0.32/uur (bij SCOP 4.0), gasverwarming kost €0.14/uur. ECHTER: bij hoge gasprijzen (2022-2024) of wanneer u geen gasaansluiting heeft, is een airco vaak de goedkoopste optie. Bovendien: een airco biedt óók koeling in de zomer (geen extra investering) en vermijdt terugleververgoeding zonnepanelen door eigen stroom slim te benutten voor verwarming."
    },
    {
      question: "Hoeveel bespaar ik door airco als verwarming te gebruiken?",
      answer: "Vergeleken met elektrische verwarming bespaart u 60% op verwarmingskosten. Een elektrische kachel kost €650/jaar voor dezelfde warmte die een airco levert voor €240/jaar - een besparing van €410 per jaar. Vergeleken met infraroodpanelen bespaart u €310/jaar. Alleen gasverwarming is goedkoper in directe kosten (€180 verschil/jaar), maar u heeft dan ook geen koeling in de zomer en mist u de mogelijkheid eigen zonnestroom slim te benutten. Over 10 jaar bespaart u €4.100 ten opzichte van elektrische verwarming."
    },
    {
      question: "Kan ik mijn elektriciteitskosten voor airco verlagen?",
      answer: "Ja, aanzienlijk! Volg deze tips: 1) Filters maandelijks reinigen (15% besparing), 2) Jaarlijks professioneel onderhoud (15-20%), 3) Temperatuur optimaal instellen: 22-24°C verwarmen, 24-26°C koelen (15-18% per graad), 4) Timer/nachtstand gebruiken (18-25%), 5) Deuren en ramen dicht tijdens gebruik (15-22%), 6) Zonwering tijdens hitte (10-15%), 7) Eco-modus waar mogelijk (8-12%). Door alle tips te combineren kunt u 40-60% besparen op de basis verbruikskosten, wat €120-200/jaar oplevert."
    },
    {
      question: "Verbruikt een inverter airco minder dan een gewone airco?",
      answer: "Ja, aanzienlijk minder! Inverter-airco's passen hun vermogen continu aan de werkelijke koelbehoefte aan, terwijl gewone on/off-airco's steeds volledig aan- en uitschakelen. Dit leidt tot 30-50% lager stroomverbruik, minder piekvermogen, stabielere temperatuur en minder slijtage. Een inverter-airco kost €240/jaar, een gewone airco €380/jaar bij hetzelfde gebruik - een besparing van €140/jaar. Alle moderne merken (Daikin, Mitsubishi, LG, Samsung) gebruiken inverter-technologie standaard. On/off-airco's zijn verouderd en niet meer verkrijgbaar bij professionele installateurs."
    },
    {
      question: "Wat is SEER en SCOP en hoe beïnvloedt dit mijn kosten?",
      answer: "SEER (Seasonal Energy Efficiency Ratio) meet koelefficiency, SCOP (Seasonal Coefficient of Performance) meet verwarmingsefficiency. Hoe hoger, hoe efficiënter en goedkoper. SEER 6.0 betekent 6 kW koeling uit 1 kW stroom, SCOP 4.0 betekent 4 kW warmte uit 1 kW stroom. Verschil tussen A+ (SCOP 3.0) en A+++ (SCOP 4.5): bij A+ kost verwarmen €0.43/uur, bij A+++ €0.29/uur - een besparing van 33% (€100/jaar). Premium merken zoals Daikin Perfera en Mitsubishi Heavy scoren SCOP 4.5-5.0, wat de hoogste efficiency en laagste kosten oplevert."
    },
    {
      question: "Hoe kan ik mijn exacte verbruikskosten berekenen?",
      answer: "Gebruik onze gratis online verbruikscalculator of bereken zelf: 1) Bepaal vermogen airco tijdens koelen/verwarmen (staat op specificatieblad), 2) Schat gebruiksuren per jaar (koelen: 300-500u, verwarmen: 400-700u), 3) Vermenigvuldig uren × vermogen × elektriciteitstarief (€0.46/kWh gemiddeld). Voorbeeld: 3.5kW airco, 400u koelen (0.9kW) + 600u verwarmen (0.7kW) = (400×0.9 + 600×0.7) × €0.46 = €358/jaar. Voor exacte metingen: gebruik een slimme stekker met energiemeter. Wij helpen graag met berekeningen specifiek voor uw situatie tijdens een gratis adviesgesprek."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Verbruikskosten 2024 | €180-400/jaar | 60% Besparing | StayCool"
        description="Airco verbruikskosten €180-400 per jaar ✓ 60% goedkoper verwarmen ✓ A+++ efficiency ✓ Bereken uw verbruik ✓ Gratis advies stroomkosten!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Verbruikskosten Advies",
          description: "Professioneel advies over airco elektriciteitskosten, energiebesparing en optimaal gebruik in Limburg. Inclusief gratis verbruiksberekening.",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-2021430",
            email: "info@staycoolairco.nl"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-sky-50" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Verbruikskosten: €180-400 per Jaar, 60% Goedkoper Verwarmen
          </h1>

          <p className="text-xl md:text-2xl text-sky-50 mb-8 leading-relaxed">
            Moderne airco's verbruiken €0.28-0.41 per uur en besparen 60% op verwarmingskosten. Bereken uw exacte kosten en ontdek hoe u maximaal kunt besparen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Advies Verbruik
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken uw Verbruik
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              €180-400 per jaar
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              60% goedkoper verwarmen
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              A+++ efficiency
            </span>
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
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Hoeveel Kost een Airco aan Elektriciteit?
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              De elektriciteitskosten van een airco zijn een belangrijke overweging bij aanschaf. Gelukkig zijn moderne airco's veel efficiënter dan vaak gedacht. Dankzij geavanceerde inverter-technologie en warmtepompfunctie verbruiken airco's relatief weinig stroom, zeker in verhouding tot de geleverde koeling of verwarming. Gemiddeld kost een airco €180-400 per jaar aan elektriciteit bij normaal gebruik.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Het werkelijke verbruik hangt af van capaciteit, gebruiksintensiteit, isolatie van uw woning, gewenste temperatuur en het energielabel van de airco. Een A+++-airco verbruikt 30-40% minder dan een A+-model. Belangrijk om te weten: bij gebruik als verwarming bespaart u 60% vergeleken met elektrische verwarming, waardoor de netto kosten vaak lager zijn dan u denkt.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Verbruik en Kosten per Capaciteit
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Hoe groter de capaciteit, hoe meer vermogen de airco gebruikt. Hieronder vindt u een compleet overzicht van verbruik en jaarkosten per capaciteitsklasse:
            </p>
          </div>

          {/* Verbruik per Capaciteit Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Capaciteit</th>
                    <th className="px-6 py-4 text-left">Verbruik Koelen</th>
                    <th className="px-6 py-4 text-left">Verbruik Verwarmen</th>
                    <th className="px-6 py-4 text-left">Kamer Grootte</th>
                    <th className="px-6 py-4 text-left">Jaarkosten</th>
                    <th className="px-6 py-4 text-left">Label</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {verbruikPerCapaciteit.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.capaciteit}</td>
                      <td className="px-6 py-4 text-gray-700">{item.koelen}</td>
                      <td className="px-6 py-4 text-gray-700">{item.verwarmen}</td>
                      <td className="px-6 py-4 text-gray-600">{item.kamerGrootte}</td>
                      <td className="px-6 py-4 text-sky-600 font-bold text-lg">{item.jaarKosten}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{item.energieLabel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 italic mb-12">
              * Jaarkosten gebaseerd op gemiddeld gebruik (400u koelen + 600u verwarmen) bij €0.46/kWh. Werkelijke kosten variëren per situatie.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Rekenvoorbeeld: 35m² Woonkamer
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Om het concreet te maken, een gedetailleerd rekenvoorbeeld voor een typische situatie: een 3.5 kW airco in een 35m² woonkamer met gemiddeld gebruik:
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-lg border border-blue-200 mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Volledig Rekenvoorbeeld: {rekenvoorbeeld.capaciteit} in {rekenvoorbeeld.ruimte}
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h5 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Snowflake className="h-6 w-6 text-blue-500 mr-2" />
                    Koelen (Zomer)
                  </h5>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gebruiksuren per jaar:</span>
                      <span className="font-semibold">{rekenvoorbeeld.koelverbruik.uren} uur</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gemiddeld vermogen:</span>
                      <span className="font-semibold">{rekenvoorbeeld.koelverbruik.vermogen} kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Kosten per uur:</span>
                      <span className="font-semibold">€{(rekenvoorbeeld.koelverbruik.vermogen * 0.46).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gray-200">
                      <span className="text-gray-900 font-bold">Totaal koelen:</span>
                      <span className="text-blue-600 font-bold text-xl">€{rekenvoorbeeld.koelverbruik.kosten}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h5 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <ThermometerSun className="h-6 w-6 text-orange-500 mr-2" />
                    Verwarmen (Voor-/Naseizoen)
                  </h5>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gebruiksuren per jaar:</span>
                      <span className="font-semibold">{rekenvoorbeeld.verwarmVerbruik.uren} uur</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gemiddeld vermogen:</span>
                      <span className="font-semibold">{rekenvoorbeeld.verwarmVerbruik.vermogen} kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Kosten per uur:</span>
                      <span className="font-semibold">€{(rekenvoorbeeld.verwarmVerbruik.vermogen * 0.46).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gray-200">
                      <span className="text-gray-900 font-bold">Totaal verwarmen:</span>
                      <span className="text-orange-600 font-bold text-xl">€{rekenvoorbeeld.verwarmVerbruik.kosten}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sky-600 text-white p-6 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">Totale Jaarkosten Airco:</span>
                  <span className="text-3xl font-bold">€{rekenvoorbeeld.jaarTotaal}</span>
                </div>
                <p className="text-sky-100 text-sm">
                  ({rekenvoorbeeld.koelverbruik.uren + rekenvoorbeeld.verwarmVerbruik.uren} uur totaal gebruik per jaar bij €0.46/kWh)
                </p>
              </div>

              <div className="bg-green-100 p-6 rounded-lg">
                <h5 className="font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingDown className="h-6 w-6 text-green-600 mr-2" />
                  Besparing vs. Elektrische Verwarming:
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Elektrische kachel (zelfde warmte):</span>
                    <span className="font-semibold">€{rekenvoorbeeld.besparingVerwarmen + rekenvoorbeeld.verwarmVerbruik.kosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Met warmtepomp-airco:</span>
                    <span className="font-semibold">€{rekenvoorbeeld.verwarmVerbruik.kosten}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t-2 border-green-300">
                    <span className="text-lg font-bold text-gray-900">Jaarlijkse besparing:</span>
                    <span className="text-2xl font-bold text-green-700">€{rekenvoorbeeld.besparingVerwarmen}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Over 10 jaar bespaart u €{rekenvoorbeeld.besparingVerwarmen * 10} op verwarmingskosten! Plus u heeft gratis koeling in de zomer.
                </p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Vergelijking Verwarmingsmethoden: Wat is Goedkoper?
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Voor een eerlijke vergelijking zetten we de kosten van verschillende verwarmingsmethoden op een rij. Let op efficiency en kosten per uur én per jaar:
            </p>
          </div>

          {/* Vergelijking Verwarmingsmethoden Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Verwarmingsmethode</th>
                    <th className="px-6 py-4 text-left">Vermogen/Output</th>
                    <th className="px-6 py-4 text-left">Efficiency</th>
                    <th className="px-6 py-4 text-left">Kosten/uur</th>
                    <th className="px-6 py-4 text-left">Jaarkosten</th>
                    <th className="px-6 py-4 text-left">CO₂</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {vergelijkingVerwarmingsmethoden.map((item, index) => (
                    <tr key={index} className={`hover:bg-gray-50 transition-colors ${index === 0 ? 'bg-green-50 font-semibold' : ''}`}>
                      <td className="px-6 py-4 text-gray-900 font-semibold">{item.methode}</td>
                      <td className="px-6 py-4 text-gray-700 text-sm">{item.vermogen}</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">{item.efficiency}</td>
                      <td className="px-6 py-4 text-gray-900">{item.kostenPerUur}</td>
                      <td className="px-6 py-4 text-lg font-bold" style={{color: index === 0 ? '#059669' : index === 1 ? '#dc2626' : '#f59e0b'}}>{item.jaarKosten}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.co2Uitstoot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-12">
            <div className="flex items-start">
              <TrendingDown className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Conclusie: Airco Verwarmen is Goedkoopst (zonder gas)</h4>
                <p className="text-gray-700 mb-3">
                  Bij elektrische verwarming is een warmtepomp-airco veruit het goedkoopst: €240/jaar vs €650/jaar voor elektrische kachel - een besparing van €410 per jaar. Alleen gasverwarming is goedkoper in directe kosten (€180 verschil), maar dan heeft u geen koeling in de zomer en betaalt u vaak hoge vastrecht kosten.
                </p>
                <p className="text-gray-700">
                  Bij hoge gasprijzen (zoals 2022-2024) of zonder gasaansluiting is de airco de absolute winnaar. Plus: met zonnepanelen gebruikt u uw eigen stroom voor verwarming, wat besparing verder verhoogt.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Seizoensgebonden Verbruik en Kosten
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Uw airco verbruik varieert sterk per seizoen. In de zomer gebruikt u de airco vooral voor koeling, in voor- en naseizoen voor verwarming, en in de winter mogelijk hybride met uw CV. Hieronder een overzicht:
            </p>
          </div>

          {/* Seizoensverbruik Tabel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-500 to-sky-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Seizoen</th>
                    <th className="px-6 py-4 text-left">Gebruik</th>
                    <th className="px-6 py-4 text-left">Gem. Vermogen</th>
                    <th className="px-6 py-4 text-left">Kosten</th>
                    <th className="px-6 py-4 text-left">Besparingstips</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {seizoensVerbruik.map((item, index) => (
                    <tr key={index} className={`hover:bg-gray-50 transition-colors ${index === 3 ? 'bg-sky-50 font-semibold' : ''}`}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.seizoen}</td>
                      <td className="px-6 py-4 text-gray-700">{item.gebruikUren}</td>
                      <td className="px-6 py-4 text-gray-700">{item.gemiddeldVermogen}</td>
                      <td className="px-6 py-4 text-sky-600 font-bold">{item.kosten}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.tips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              8 Praktische Tips om 40-60% te Besparen
            </h3>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Met slimme aanpassingen in gebruik en onderhoud kunt u uw verbruikskosten aanzienlijk verlagen. Deze tips zijn eenvoudig toe te passen en leveren direct resultaat:
            </p>
          </div>

          {/* Besparingstips */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {besparingsTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 flex-grow">{tip.tip}</h4>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full ml-2 flex-shrink-0">
                    {tip.inspanning}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Besparing per jaar:</p>
                    <p className="text-xl font-bold text-green-600">{tip.besparing}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Percentage:</p>
                    <p className="text-xl font-bold text-green-600">{tip.percentage}</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{width: tip.percentage.split('-')[1] || tip.percentage}}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200 mb-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Totale Potentiële Besparing
            </h4>
            <p className="text-center text-gray-700 mb-6">
              Door alle tips te combineren kunt u <strong>40-60%</strong> besparen op uw basis verbruikskosten. Bij een gemiddelde airco met €350/jaar betekent dit:
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Zonder optimalisatie:</p>
                <p className="text-3xl font-bold text-gray-900">€350/jaar</p>
              </div>
              <div className="text-4xl text-green-600">→</div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Met optimalisatie:</p>
                <p className="text-3xl font-bold text-green-600">€140-210/jaar</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm italic">
              Een besparing van €140-210 per jaar, oftewel €1.400-2.100 over 10 jaar!
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              Waarom A+++ Airco's Meer Besparen
            </h3>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Het energielabel maakt enorm verschil in uw jaarkosten. Een A+++-airco verbruikt 30-40% minder dan een A+-model dankzij betere inverter-technologie, efficiëntere compressoren en betere isolatie. Over de levensduur (15 jaar) scheelt dit €1.500-2.500 in stroomkosten.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">A+ Label</h4>
                <p className="text-gray-700 mb-2">SCOP: 3.0-3.5</p>
                <p className="text-gray-700 mb-2">Verbruik: 1.0 kW</p>
                <p className="text-2xl font-bold text-orange-600">€430/jaar</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">A++ Label</h4>
                <p className="text-gray-700 mb-2">SCOP: 3.5-4.0</p>
                <p className="text-gray-700 mb-2">Verbruik: 0.8 kW</p>
                <p className="text-2xl font-bold text-yellow-600">€340/jaar</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">A+++ Label</h4>
                <p className="text-gray-700 mb-2">SCOP: 4.0-5.0</p>
                <p className="text-gray-700 mb-2">Verbruik: 0.7 kW</p>
                <p className="text-2xl font-bold text-green-600">€280/jaar</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Een A+++-airco kost €200-400 meer in aanschaf, maar bespaart €90-150 per jaar op energie. De meerprijs is binnen 2-3 jaar terugverdiend, waarna u 10+ jaar blijft profiteren. Merken als Daikin Perfera, Mitsubishi Heavy en Samsung Wind-Free scoren A+++ en zijn de beste investering op lange termijn.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereken Uw Exacte Verbruikskosten
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Ontvang een persoonlijke berekening op basis van uw woning, gebruik en gekozen model. Inclusief besparingstips op maat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Advies Verbruik
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
            Veelgestelde Vragen over Airco Verbruikskosten
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-start">
                  <span className="text-sky-500 mr-3 flex-shrink-0">Q:</span>
                  <span>{faq.question}</span>
                </h3>
                <div className="ml-8 text-gray-700 leading-relaxed">
                  <span className="font-semibold text-sky-600">A:</span> {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start met Besparen op Energiekosten
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Moderne airco's besparen tot 60% op verwarmingskosten. Ontdek hoeveel u kunt besparen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
              Offerte Aanvragen
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Besparing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoVerbruikskosten;
