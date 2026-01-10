import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Euro, ThermometerSun, Wind, Droplets, Phone, Calculator, TrendingDown } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const AircoVsVentilator = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Airco Vergelijkingen', path: '/seo/pillar-8-vergelijkingen' },
    { label: 'Airco vs Ventilator' }
  ];

  const usps = [
    {
      icon: <ThermometerSun className="h-12 w-12 text-sky-500" />,
      title: "Effectieve Koeling",
      description: "Airco verlaagt temperatuur 10-15°C, ventilator 0°C"
    },
    {
      icon: <Droplets className="h-12 w-12 text-sky-500" />,
      title: "Vochtigheidsregeling",
      description: "Airco verwijdert vocht, ventilator verspreidt het"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Energiekosten",
      description: "Vergelijk verbruik en totale kosten per oplossing"
    },
    {
      icon: <Wind className="h-12 w-12 text-sky-500" />,
      title: "Comfort",
      description: "Constante koeling vs tijdelijk gevoeld effect"
    }
  ];

  const aircoVoordelen = [
    "Verlaagt temperatuur echt (10-15°C koeling)",
    "Verwijdert vocht - voorkomt benauwdheid",
    "Effectief bij hoge buitentemperaturen ( meer dan 30°C)",
    "Kan ook verwarmen in winter (warmtepomp)",
    "Filtert en zuivert lucht",
    "Stil modern inverter systeem (19-35 dB)",
    "Constante comfortabele temperatuur",
    "Verhoogt woningwaarde",
    "Effectief voor grote ruimtes (tot 60m²)"
  ];

  const aircoNadelen = [
    "Hogere aanschafprijs (€1.200-€2.000 geïnstalleerd)",
    "Professionele installatie nodig",
    "Gat in muur vereist voor leidingen",
    "Jaarlijks onderhoud €95",
    "Hoger energieverbruik dan ventilator (0,6-1,5 kW)"
  ];

  const ventilatorVoordelen = [
    "Lage aanschafprijs (€30-€200)",
    "Direct te gebruiken - geen installatie",
    "Verplaatsbaar tussen ruimtes",
    "Laag energieverbruik (0,02-0,07 kW)",
    "Geschikt voor huurwoningen",
    "Geen onderhoud nodig"
  ];

  const ventilatorNadelen = [
    "Verlaagt temperatuur NIET - alleen luchtcirculatie",
    "Ineffectief bij hoge vochtigheid",
    "Werkt niet boven 35°C buitentemperatuur",
    "Veel lawaai op hoge stand (40-60 dB)",
    "Droogt huid en ogen uit bij langdurig gebruik",
    "Verspreidt stof en allergenen",
    "Verhoogt elektriciteitsrisico bij water",
    "Alleen gevoelstemperatuur - geen echte koeling",
    "Beperkt bereik - slechts 3-5m effectief"
  ];

  const faqs = [
    {
      question: "Waarom koelt een ventilator niet echt?",
      answer: "Een ventilator verlaagt de temperatuur helemaal niet - het meet instrument toont dezelfde graden. Het gevoelseffect komt door luchtbeweging die zweet van uw huid verdramt (verdampingskoeling). Dit werkt alleen als u zweet, dus bij hoge luchtvochtigheid ( meer dan 70%) of zeer hoge temperaturen ( meer dan 35°C) voelt een ventilator niet verkoelend maar juist als een heteluchtventilator."
    },
    {
      question: "Wanneer werkt een ventilator goed genoeg?",
      answer: "Een ventilator werkt acceptabel bij: temperaturen onder 28°C, lage luchtvochtigheid ( minder dan 60%), kleine ruimtes ( minder dan 20m²), korte periodes overdag, en als u tolerant bent voor warmte. Voor Nederlandse zomers met 25-30°C kan een ventilator vaak volstaan. Boven 30°C of bij hoge vochtigheid (benauwd weer) is een ventilator onvoldoende."
    },
    {
      question: "Wat zijn de totale kosten over 10 jaar?",
      answer: "Ventilator: €100 aanschaf + €30 energie + €100 vervanging (2x) = €230 totaal. Airco: €1.800 aanschaf + €600 energie + €200 onderhoud = €2.600 totaal. Verschil: €2.370. Let op: dit vergelijkt appels met peren - de ventilator koelt niet echt en werkt niet boven 30°C."
    },
    {
      question: "Kan ik een ventilator en airco combineren?",
      answer: "Ja, dit is slim! Gebruik de airco om de kamer te koelen tot 24-25°C, en een ventilator voor extra luchtcirculatie. Dit verlaagt uw energiekosten met 20-30% omdat u de airco op hogere temperatuur kunt instellen. De ventilator verbruikt slechts 0,03 kW vs 0,8 kW voor de airco."
    },
    {
      question: "Welke oplossing is gezonder?",
      answer: "Airco is gezonder bij correct gebruik. Moderne airco's filteren lucht, verwijderen vocht (schimmels tegengaan), en handhaven constante temperatuur. Ventilatoren wervelen stof en allergenen op, drogen slijmvliezen uit, en geven geen echte verlichting bij hitte. Wel: te koud instellen ( minder dan 22°C) is ongezond bij beide systemen."
    },
    {
      question: "Hoeveel energie verbruikt een ventilator vs airco?",
      answer: "Ventilator: 0,02-0,07 kW (€0,005-€0,017/uur). Airco: 0,6-1,5 kW (€0,15-€0,37/uur). Een airco verbruikt 20-50x meer, maar koelt ook echt. Echter: een ventilator die 24/7 draait bij 35°C weer (geen echte koeling) verbruikt €0,41/dag = €12/maand, terwijl een airco effectief koelt voor €0,15/uur × 8 uur = €1,20/dag = €36/maand."
    },
    {
      question: "Waarom is een airco beter bij hoge luchtvochtigheid?",
      answer: "Bij hoge vochtigheid ( meer dan 70%) kan zweet niet verdampen, waardoor ventilatoren geen verkoelend effect hebben. Een airco verwijdert actief vocht uit de lucht (tot 1,5 liter/uur), waardoor zweet weer kan verdampen en u koeler voelt. In benauwde Nederlandse zomers (hoge vochtigheid) is een airco veel effectiever dan een ventilator."
    },
    {
      question: "Is een dure ventilator (€200) beter dan een goedkope airco?",
      answer: "Nee, ook de duurste ventilator (Dyson €500) verlaagt de temperatuur niet. Het verschil tussen €30 en €200 ventilatoren zit in design, geluid en luchtstroom - niet in koelvermogen. Zelfs een goedkope airco (€1.200 geïnstalleerd) koelt effectief 10-15°C, wat geen enkele ventilator kan."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco vs Ventilator | Effectiviteit Koeling Vergelijking | StayCool"
        description="Airco vs ventilator vergelijking ✓ Koeleffectiviteit ✓ Energiekosten ✓ Wanneer werkt wat? ✓ Voor- en nadelen ✓ Expert advies ✓ Totale kosten Limburg"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Airco vs Ventilator: Wat is Effectiever?",
          description: "Complete vergelijking tussen airconditioning en ventilatoren - effectiviteit, kosten, wanneer welke oplossing werkt.",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          },
          publisher: {
            "@type": "Organization",
            name: "StayCool Airco",
            logo: {
              "@type": "ImageObject",
              url: "https://staycoolairco.nl/logo.png"
            }
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco vs Ventilator: Effectiviteit Koeling Vergeleken
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8 max-w-3xl">
            Een ventilator verlaagt de temperatuur helemaal niet - alleen luchtcirculatie. Een airco koelt echt 10-15°C en verwijdert vocht. Ontdek welke oplossing past bij uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Koelbehoefte
            </Link>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{usp.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Het Fundamentele Verschil */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Het Fundamentele Verschil: Echte vs Gevoelde Koeling
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                <Wind className="h-8 w-8 text-red-600 mr-3" />
                Ventilator = Geen Echte Koeling
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Een ventilator <strong>verlaagt de temperatuur niet</strong>. Als het 32°C is, blijft het 32°C - zelfs met de krachtigste ventilator. Het enige effect is luchtcirculatie die zweet doet verdampen.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Kamertemperatuur:</strong> Blijft exact 32°C</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Gevoelstemperatuur:</strong> Voelt 1-3°C koeler (alleen als u zweet)</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Bij hoge vochtigheid:</strong> Geen verkoelend effect</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Boven 35°C:</strong> Voelt als heteluchtventilator</span>
                </li>
              </ul>

              <div className="mt-6 bg-red-100 border-l-4 border-red-600 p-4 rounded">
                <p className="text-red-900 font-semibold">
                  Een ventilator beweegt alleen warme lucht - het koelt niet. Bij benauwde zomers (hoge vochtigheid) werkt het nauwelijks.
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                <ThermometerSun className="h-8 w-8 text-green-600 mr-3" />
                Airco = Echte Temperatuurverlaging
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Een airco <strong>verlaagt de temperatuur echt</strong> met 10-15°C. Als het buiten 32°C is, maakt de airco het binnen 22°C - meetbaar en aantoonbaar koeler.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Kamertemperatuur:</strong> Daalt naar 22-24°C</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Gevoelstemperatuur:</strong> Overeenkomt met echte temperatuur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Werkt altijd:</strong> Ongeacht vochtigheid of buitentemperatuur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Bonus:</strong> Verwijdert vocht (tot 1,5 L/uur)</span>
                </li>
              </ul>

              <div className="mt-6 bg-green-100 border-l-4 border-green-600 p-4 rounded">
                <p className="text-green-900 font-semibold">
                  Een airco koelt door warmte naar buiten te transporteren. Echte temperatuurverlaging die altijd werkt.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg">
              <strong>Praktijkvoorbeeld:</strong> Bij 32°C buiten en 70% luchtvochtigheid (benauwd weer): Een ventilator op volle kracht voelt nauwelijks verkoelend omdat zweet niet kan verdampen. Een airco maakt het binnen comfortabele 22°C én verwijdert vocht - daadwerkelijk koeler en minder benauwd.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Directe Vergelijking
          </h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-sky-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                  <th className="px-6 py-4 text-left font-semibold">Airco</th>
                  <th className="px-6 py-4 text-left font-semibold">Ventilator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Echte temperatuurverlaging</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">✓ 10-15°C koeling</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">✗ 0°C (geen koeling)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Gevoelstemperatuur</td>
                  <td className="px-6 py-4 text-green-600">10-15°C koeler</td>
                  <td className="px-6 py-4 text-orange-600">1-3°C koeler (als u zweet)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Effectiviteit boven 30°C</td>
                  <td className="px-6 py-4 text-green-600">Uitstekend</td>
                  <td className="px-6 py-4 text-red-600">Minimaal tot geen effect</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Werking bij hoge vochtigheid</td>
                  <td className="px-6 py-4 text-green-600">✓ Verwijdert vocht actief</td>
                  <td className="px-6 py-4 text-red-600">✗ Geen effect</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Aanschafprijs</td>
                  <td className="px-6 py-4 text-gray-700">€1.200-€2.000</td>
                  <td className="px-6 py-4 text-green-600">€30-€200</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Energieverbruik</td>
                  <td className="px-6 py-4 text-gray-700">0,6-1,5 kW (€0,15-€0,37/uur)</td>
                  <td className="px-6 py-4 text-green-600">0,02-0,07 kW (€0,005-€0,017/uur)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Geluidsniveau</td>
                  <td className="px-6 py-4 text-green-600">19-35 dB (modern inverter)</td>
                  <td className="px-6 py-4 text-orange-600">40-60 dB (op hoge stand)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Groot bereik ( meer dan 30m²)</td>
                  <td className="px-6 py-4 text-green-600">✓ Tot 60m²</td>
                  <td className="px-6 py-4 text-red-600">✗ Max 10-15m² effectief</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Verwarmingsfunctie</td>
                  <td className="px-6 py-4 text-green-600">✓ Warmtepomp (60% besparing)</td>
                  <td className="px-6 py-4 text-red-600">✗ Alleen koeling (gevoeld)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Luchtkwaliteit</td>
                  <td className="px-6 py-4 text-green-600">✓ Filtert en zuivert</td>
                  <td className="px-6 py-4 text-red-600">✗ Verspreidt stof/allergenen</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Woningwaarde</td>
                  <td className="px-6 py-4 text-green-600">✓ Verhoogt waarde</td>
                  <td className="px-6 py-4 text-gray-700">Geen effect</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Installatie</td>
                  <td className="px-6 py-4 text-gray-700">Professioneel vereist</td>
                  <td className="px-6 py-4 text-green-600">Plug & play</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Echte Koeling?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Stop met warme lucht rondpompen. Investeer in een airco die echt koelt en jaren meegaat. Wij adviseren u gratis over de beste oplossing.
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
              Bel: 046 202 1430
            </a>
          </div>
        </div>
      </section>

      {/* Voor- en Nadelen */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Voor- en Nadelen per Oplossing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Airco */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ThermometerSun className="h-8 w-8 text-sky-500 mr-3" />
                Airconditioning
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {aircoVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                  <TrendingDown className="h-6 w-6 mr-2" />
                  Aandachtspunten
                </h4>
                <ul className="space-y-3">
                  {aircoNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <TrendingDown className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ventilator */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Wind className="h-8 w-8 text-orange-500 mr-3" />
                Ventilator
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Voordelen
                </h4>
                <ul className="space-y-3">
                  {ventilatorVoordelen.map((voordeel, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{voordeel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-red-600 mb-4 flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />
                  Nadelen
                </h4>
                <ul className="space-y-3">
                  {ventilatorNadelen.map((nadeel, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{nadeel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer kiezen */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Wanneer Kiest u voor Welke Oplossing?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                Kies Airco (aanbevolen)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Bij regelmatige hittegolven ( meer dan 28°C)</strong>
                    <p className="text-gray-700">Echte koeling nodig boven 28°C</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Voor slaapkamers</strong>
                    <p className="text-gray-700">Constante koele temperatuur voor goede nachtrust</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Bij benauwde zomers (hoge vochtigheid)</strong>
                    <p className="text-gray-700">Ventilator werkt niet - airco verwijdert vocht</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Voor grote ruimtes ( meer dan 25m²)</strong>
                    <p className="text-gray-700">Ventilator bereikt niet hele ruimte</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Als u ook wilt verwarmen</strong>
                    <p className="text-gray-700">Warmtepomp bespaart 60% op CV</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Voor thuiswerken</strong>
                    <p className="text-gray-700">Productiviteit daalt 20% boven 26°C</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Bij gezondheidsproblemen</strong>
                    <p className="text-gray-700">Hart/long aandoeningen gevoelig voor hitte</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center">
                <Wind className="h-8 w-8 text-orange-600 mr-3" />
                Kies Ventilator (beperkt)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Bij milde zomers ( minder dan 28°C)</strong>
                    <p className="text-gray-700">Gevoelstemperatuur kan volstaan</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Voor kleine ruimtes ( minder dan 15m²)</strong>
                    <p className="text-gray-700">Kantoor, studentenkamer, kleine slaapkamer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Tijdelijke oplossing ( minder dan 1 jaar)</strong>
                    <p className="text-gray-700">Binnenkort verhuizing of renovatie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Huurwoning zonder toestemming</strong>
                    <p className="text-gray-700">Geen permanente aanpassingen mogelijk</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Zeer beperkt budget (minder dan €100)</strong>
                    <p className="text-gray-700">Let op: werkt niet bij echte hitte</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-gray-900">Als aanvulling op airco</strong>
                    <p className="text-gray-700">Extra luchtcirculatie - 20% energiebesparing</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 bg-orange-200 border-l-4 border-orange-600 p-4 rounded">
                <p className="text-orange-900 font-semibold">
                  ⚠️ Ventilator is goed voor  minder dan 28°C en  minder dan 60% vochtigheid. Boven 30°C werkt het nauwelijks tot niet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde Vragen
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Echte Verkoeling?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Stop met rondjes warme lucht. Investeer in een airco die echt koelt, vocht verwijdert en ook kan verwarmen. StayCool Airco adviseert u gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Gratis Offerte Aanvragen
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-700 text-white font-bold rounded-lg hover:bg-sky-800 transition-colors text-lg"
            >
              Bekijk Airco Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoVsVentilator;
