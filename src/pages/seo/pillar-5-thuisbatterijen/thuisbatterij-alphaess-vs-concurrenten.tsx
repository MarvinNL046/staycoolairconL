import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Euro, Phone, Battery, Shield, TrendingUp, ArrowRight, Star, AlertCircle } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijAlphaESSVsConcurrentenPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'AlphaESS vs Concurrenten' }
  ];

  const usps = [
    {
      icon: <Award className="h-12 w-12 text-yellow-500" />,
      title: "Beste EPEX Resultaten",
      description: "AlphaESS presteert consistent beter op dynamische energiemarkten dan concurrenten"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "10 Jaar Garantie",
      description: "Ruimere garantie dan Tesla (10 jaar vs 10 jaar/80% capaciteit) en BYD (10 jaar)"
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: "500.000+ Installaties",
      description: "Bewezen technologie wereldwijd - meer ervaring dan nieuwere merken"
    },
    {
      icon: <Phone className="h-12 w-12 text-yellow-500" />,
      title: "Nederlandse Support",
      description: "Lokale support en service - niet altijd vanzelfsprekend bij andere merken"
    }
  ];

  const brandComparison = [
    {
      brand: "AlphaESS",
      logo: "🔋",
      models: "SMILE-B3, SMILE5, SMILE-T10",
      capacity: "2,9 - 30 kWh",
      price: "€4.545 - €11.000",
      warranty: "10 jaar / 10.000 cycli",
      efficiency: "97%",
      monitoring: "AlphaCloud 24/7",
      support: "Nederlandse support team",
      epex: "Excellent - beste resultaten",
      installations: "500.000+ wereldwijd",
      pros: [
        "Beste EPEX handelsresultaten",
        "10 jaar volledige garantie",
        "Modulair uitbreidbaar systeem",
        "AlphaCloud monitoring inclusief",
        "Nederlandse support en service",
        "Bewezen technologie",
        "Competitieve prijs/prestatie"
      ],
      cons: [
        "Minder bekend merk dan Tesla",
        "Compacte modellen beperkt tot 2,9 kWh"
      ],
      verdict: "Beste keuze voor EPEX-handel en dagelijks gebruik. Uitstekende prijs/prestatie verhouding met bewezen technologie.",
      rating: 9.5
    },
    {
      brand: "Tesla Powerwall 3",
      logo: "⚡",
      models: "Powerwall 3",
      capacity: "13,5 kWh",
      price: "€10.000 - €12.500",
      warranty: "10 jaar / 80% capaciteit",
      efficiency: "97,5%",
      monitoring: "Tesla App",
      support: "Beperkte lokale support",
      epex: "Gemiddeld - beperkte integratie",
      installations: "100.000+ wereldwijd",
      pros: [
        "Sterke merknaam en design",
        "Hoge piekvermogens (11,5 kW)",
        "Geïntegreerde omvormer",
        "Goede app interface"
      ],
      cons: [
        "Hogere prijs dan AlphaESS",
        "Garantie alleen tot 80% capaciteit",
        "Beperkte EPEX integratie",
        "Lange levertijden mogelijk",
        "Niet modulair uitbreidbaar",
        "Support vaak niet in NL"
      ],
      verdict: "Premium merk met hoge prijs. Goed voor wie merkwaarde belangrijk vindt, maar minder geschikt voor EPEX-handel.",
      rating: 7.5
    },
    {
      brand: "Huawei LUNA2000",
      logo: "🌙",
      models: "LUNA2000-5/10/15-S0",
      capacity: "5 - 30 kWh",
      price: "€5.000 - €13.000",
      warranty: "10 jaar",
      efficiency: "96%",
      monitoring: "FusionSolar App",
      support: "Via installateurs",
      epex: "Goed - met juiste configuratie",
      installations: "200.000+ wereldwijd",
      pros: [
        "Modulair uitbreidbaar",
        "Goede systeemintegratie",
        "Competitieve prijs",
        "Breed productgamma"
      ],
      cons: [
        "Lagere efficiency dan AlphaESS",
        "EPEX prestaties wisselend",
        "Complexere configuratie",
        "Support niet altijd in Nederlands",
        "Politieke gevoeligheid merk"
      ],
      verdict: "Goede technische specificaties maar wisselende EPEX-prestaties. Geschikt voor standaard toepassingen.",
      rating: 7.8
    },
    {
      brand: "BYD Battery-Box Premium",
      logo: "🔌",
      models: "HVS 5.1 - 12.8",
      capacity: "5,1 - 12,8 kWh",
      price: "€6.000 - €10.000",
      warranty: "10 jaar",
      efficiency: "96%",
      monitoring: "BYD App",
      support: "Via distributeurs",
      epex: "Matig - beperkte mogelijkheden",
      installations: "150.000+ wereldwijd",
      pros: [
        "Grote batterijproducent",
        "Solide constructie",
        "Modulaire uitbreiding",
        "10 jaar garantie"
      ],
      cons: [
        "Beperkte EPEX functionaliteit",
        "Lagere efficiency",
        "Hogere prijs dan AlphaESS",
        "Minder gebruiksvriendelijke app",
        "Beperkte Nederlandse support"
      ],
      verdict: "Betrouwbare batterijen maar niet geoptimaliseerd voor dynamische tarieven. Meer geschikt voor basale opslag.",
      rating: 7.0
    },
    {
      brand: "LG Chem RESU",
      logo: "⚙️",
      models: "RESU 10H/16H",
      capacity: "9,8 - 16 kWh",
      price: "€7.000 - €11.000",
      warranty: "10 jaar",
      efficiency: "95%",
      monitoring: "Via omvormer",
      support: "Via installateurs",
      epex: "Niet ondersteund",
      installations: "250.000+ wereldwijd",
      pros: [
        "Gevestigd merk",
        "Compacte afmetingen",
        "Betrouwbare kwaliteit"
      ],
      cons: [
        "Geen EPEX mogelijkheden",
        "Laagste efficiency in vergelijking",
        "Geen eigen monitoring platform",
        "Minder flexibele configuraties",
        "Hogere prijs/kWh ratio",
        "Beperkte uitbreidmogelijkheden"
      ],
      verdict: "Kwalitatief merk maar technologisch achtergebleven. Geen goede keuze voor moderne energieoptimalisatie.",
      rating: 6.5
    }
  ];

  const epexComparison = [
    {
      aspect: "EPEX Integratie",
      alphaess: "Native integratie - direct in systeem",
      tesla: "Via derden - beperkte functionaliteit",
      huawei: "Mogelijk - vereist extra configuratie",
      byd: "Zeer beperkt - niet standaard",
      winner: "AlphaESS"
    },
    {
      aspect: "Handelsresultaten 2023",
      alphaess: "€150-400/jaar gemiddeld",
      tesla: "€50-150/jaar gemiddeld",
      huawei: "€80-200/jaar gemiddeld",
      byd: "Niet beschikbaar",
      winner: "AlphaESS"
    },
    {
      aspect: "Reactiesnelheid",
      alphaess: "<5 seconden bij prijswijziging",
      tesla: "10-30 seconden",
      huawei: "15-45 seconden",
      byd: "Niet van toepassing",
      winner: "AlphaESS"
    },
    {
      aspect: "Configuratie Gemak",
      alphaess: "Via app - gebruiksvriendelijk",
      tesla: "Beperkte instellingen",
      huawei: "Complex - vaak installateur nodig",
      byd: "Niet beschikbaar",
      winner: "AlphaESS"
    }
  ];

  const useCases = [
    {
      title: "EPEX Handel & Maximale Besparing",
      description: "Voor huishoudens die maximaal willen profiteren van dynamische energietarieven",
      recommendation: "AlphaESS SMILE5 of SMILE-T10",
      reason: "Beste EPEX resultaten, snelste reactietijd, hoogste besparingspotentieel (€150-400/jaar extra bovenop normale besparing)"
    },
    {
      title: "Premium Design & Merk",
      description: "Voor wie merkwaarde en design belangrijk vindt",
      recommendation: "Tesla Powerwall 3",
      reason: "Sterke merknaam, modern design, maar hogere prijs en beperkte EPEX mogelijkheden"
    },
    {
      title: "Basis Energie Opslag",
      description: "Voor standaard zelfverbruik optimalisatie zonder EPEX",
      recommendation: "Huawei LUNA2000 of AlphaESS SMILE5",
      reason: "Beide geschikt, AlphaESS biedt meer toekomstperspectief met EPEX mogelijkheid"
    },
    {
      title: "Budget Bewust",
      description: "Voor wie meeste waar voor zijn geld zoekt",
      recommendation: "AlphaESS SMILE-B3 of SMILE5",
      reason: "Beste prijs/prestatie, alle functies inclusief EPEX, lagere investering dan Tesla"
    },
    {
      title: "Zakelijk & Peak Shaving",
      description: "Voor bedrijven met piekverbruik optimalisatie",
      recommendation: "AlphaESS SMILE-T10 (3-fase)",
      reason: "Hoogste vermogens, beste EPEX integratie, ideaal voor zakelijke toepassingen"
    }
  ];

  const faqs = [
    {
      question: "Waarom presteert AlphaESS beter op EPEX dan Tesla en Huawei?",
      answer: "AlphaESS heeft EPEX-functionaliteit native in het systeem geïntegreerd, terwijl Tesla dit via derden moet oplossen en Huawei extra configuratie vereist. AlphaESS reageert binnen 5 seconden op prijswijzigingen vs 10-45 seconden bij concurrenten. Dit resulteert in €150-400/jaar EPEX opbrengst bij AlphaESS versus €50-200/jaar bij anderen. De AlphaCloud software is specifiek ontwikkeld voor dynamische energiemarkten."
    },
    {
      question: "Is Tesla Powerwall 3 de moeite waard ondanks hogere prijs?",
      answer: "Tesla Powerwall 3 heeft sterke merknaam en design, maar kent belangrijk nadelen: (1) Hogere prijs (€10.000-12.500 vs €5.785-10.744 AlphaESS), (2) Garantie alleen tot 80% capaciteit, (3) Beperkte EPEX integratie, (4) Niet modulair uitbreidbaar, (5) Vaak langere levertijden. Voor EPEX-handel en prijs/prestatie is AlphaESS superieur. Tesla is vooral geschikt voor wie merkwaarde belangrijker vindt dan functionaliteit."
    },
    {
      question: "Hoe vergelijkt de garantie van AlphaESS met andere merken?",
      answer: "AlphaESS biedt 10 jaar garantie op 10.000 cycli zonder capaciteitslimiet. Tesla geeft 10 jaar maar alleen tot 80% capaciteit. Huawei en BYD bieden ook 10 jaar maar met minder duidelijke voorwaarden. LG Chem 10 jaar standaard. AlphaESS garantie is dus ruimer omdat er geen capaciteitsdrempel is - het systeem moet gewoon werken. Plus: AlphaESS heeft Nederlandse support voor snelle afhandeling."
    },
    {
      question: "Waarom is Huawei LUNA2000 goedkoper maar toch niet beter?",
      answer: "Huawei lijkt goedkoper (€5.000 vs €5.785 AlphaESS) maar heeft nadelen: (1) Lagere efficiency (96% vs 97%), (2) Wisselende EPEX prestaties, (3) Complexere configuratie = hogere installatiekosten, (4) Support niet altijd Nederlands, (5) Politieke gevoeligheid merk. Over 15 jaar levert AlphaESS door betere efficiency en EPEX-handel €1.500-3.000 meer besparing op. De schijnbaar lagere aanschafprijs verdwijnt dus snel."
    },
    {
      question: "Welk merk is het meest modulair uitbreidbaar?",
      answer: "AlphaESS SMILE5 en Huawei LUNA2000 zijn beide zeer modulair. AlphaESS: 5 kWh basis uitbreidbaar tot 30 kWh in stappen van 5 kWh. Huawei: vergelijkbaar systeem. Tesla Powerwall is NIET modulair - je koopt 13,5 kWh en dat blijft het. BYD is beperkt modulair. LG Chem zeer beperkt. Voor toekomstige uitbreiding zijn AlphaESS en Huawei beste keuzes, waarbij AlphaESS voordeel heeft door betere EPEX functionaliteit."
    },
    {
      question: "Wat als ik geen EPEX-handel wil doen - welk merk dan?",
      answer: "Ook zonder EPEX is AlphaESS vaak beste keuze door: (1) Betere efficiency (97% vs 95-96%), (2) Lagere prijs dan Tesla, (3) Nederlandse support, (4) 10 jaar garantie zonder restricties, (5) Modulaire uitbreiding, (6) Optie EPEX later alsnog in te schakelen. Alternatieven: Huawei (goed maar lagere efficiency) of Tesla (als merk belangrijk is). BYD en LG Chem zijn minder aantrekkelijk door lagere efficiency en hogere prijs/kWh."
    },
    {
      question: "Hoe betrouwbaar is AlphaESS vergeleken met grote merken als Tesla?",
      answer: "AlphaESS heeft wereldwijd 500.000+ installaties (meer dan Tesla's 100.000+ Powerwall 3). Het merk bestaat sinds 2012 en is specialist in energieopslag. Tesla is nieuwer in thuisbatterijen (2015) en richt zich breed op auto's en energie. AlphaESS focus op batterijen resulteert in betere optimalisatie. Beide merken zijn betrouwbaar, maar AlphaESS heeft meer ervaring specifiek in thuisopslag en betere track record in EPEX-toepassingen."
    },
    {
      question: "Kan ik met BYD of LG ook geld verdienen met energiehandel?",
      answer: "Nee, BYD Battery-Box en LG Chem RESU ondersteunen geen EPEX-handel. Deze systemen zijn puur voor zelfverbruik optimalisatie. Je mist hierdoor €150-400/jaar extra inkomsten die AlphaESS wel genereert. Voor moderne energieoptimalisatie met dynamische tarieven zijn alleen AlphaESS (excellent), Huawei (goed), en Tesla (beperkt) geschikt. BYD en LG zijn technologisch achtergebleven op dit vlak."
    }
  ];

  return (
    <>
      <MetaTags
        title="AlphaESS vs Tesla, Huawei, BYD, LG | Beste Thuisbatterij 2024 | StayCool Airco"
        description="AlphaESS vs concurrenten ✓ Beste EPEX resultaten ✓ €150-400/jaar extra ✓ Tesla Powerwall 3 vergelijking ✓ Huawei LUNA2000 ✓ BYD & LG review ✓ Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "AlphaESS vs Concurrenten: Complete Thuisbatterij Vergelijking 2024",
          description: "Uitgebreide vergelijking van AlphaESS met Tesla Powerwall, Huawei LUNA2000, BYD Battery-Box en LG Chem RESU. Specificaties, prijzen, EPEX prestaties en advies.",
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
          <Breadcrumbs items={breadcrumbItems} />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AlphaESS vs Tesla, Huawei, BYD & LG: Welke Thuisbatterij is het Beste?
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Complete vergelijking van alle grote merken. AlphaESS scoort het beste op EPEX-handel (€150-400/jaar extra), heeft Nederlandse support en beste prijs/prestatie verhouding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              AlphaESS Modellen Bekijken
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Advies op Maat
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Award className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">AlphaESS Scoort Hoogste Rating</p>
                <p className="text-sm">
                  9,5/10 punten door beste EPEX resultaten, 10 jaar garantie, Nederlandse support en uitstekende prijs/prestatie.
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
              Waarom AlphaESS de Beste Keuze is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Concrete voordelen ten opzichte van Tesla, Huawei, BYD en LG
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

      {/* Detailed Brand Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Uitgebreide Merkenvergelijking: Alle Specificaties
          </h2>

          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            We vergelijken AlphaESS met Tesla Powerwall 3, Huawei LUNA2000, BYD Battery-Box en LG Chem RESU op alle belangrijke criteria.
          </p>

          <div className="space-y-8">
            {brandComparison.map((brand, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className={`px-6 py-4 ${
                  brand.brand === 'AlphaESS' ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-4xl mr-4">{brand.logo}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{brand.brand}</h3>
                        <p className="text-sm opacity-90">{brand.models}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <Star className="h-6 w-6 text-yellow-300 fill-current mr-2" />
                        <span className="text-2xl font-bold">{brand.rating}/10</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Specificaties:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Capaciteit:</strong> {brand.capacity}</li>
                        <li><strong>Prijs:</strong> {brand.price}</li>
                        <li><strong>Garantie:</strong> {brand.warranty}</li>
                        <li><strong>Efficiency:</strong> {brand.efficiency}</li>
                        <li><strong>Installaties:</strong> {brand.installations}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li><strong>Monitoring:</strong> {brand.monitoring}</li>
                        <li><strong>Support:</strong> {brand.support}</li>
                        <li><strong>EPEX:</strong> {brand.epex}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Voordelen:
                      </h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {brand.pros.slice(0, 4).map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Alle Voordelen:</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {brand.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                        Nadelen:
                      </h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {brand.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-500 mr-2">-</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`rounded-lg p-6 ${
                    brand.brand === 'AlphaESS' ? 'bg-yellow-50 border-2 border-yellow-500' : 'bg-gray-50'
                  }`}>
                    <p className="text-gray-900">
                      <strong>Conclusie:</strong> {brand.verdict}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPEX Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            EPEX Energiehandel Vergelijking: Waarom AlphaESS Wint
          </h2>

          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Voor maximale besparing is EPEX-functionaliteit cruciaal. Hier zien we het verschil tussen de merken.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Aspect</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">AlphaESS</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Tesla</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Huawei</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">BYD</th>
                  <th className="px-6 py-3 text-center text-sm font-bold text-gray-900">Winnaar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {epexComparison.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{item.aspect}</td>
                    <td className={`px-6 py-4 text-sm ${item.winner === 'AlphaESS' ? 'bg-yellow-50 font-bold text-gray-900' : 'text-gray-700'}`}>
                      {item.alphaess}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.tesla}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.huawei}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{item.byd}</td>
                    <td className="px-6 py-4 text-center">
                      {item.winner === 'AlphaESS' && (
                        <Award className="h-6 w-6 text-yellow-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-gray-900">
              <strong>EPEX Conclusie:</strong> AlphaESS levert €150-400/jaar extra opbrengst door superieure EPEX integratie. Tesla €50-150/jaar, Huawei €80-200/jaar. BYD en LG ondersteunen geen EPEX. Over 10 jaar betekent dit €1.500-4.000 verschil in totale opbrengst!
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Welk Merk voor Welke Situatie?
          </h2>

          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Ons advies op basis van uw specifieke situatie en prioriteiten
          </p>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-gray-900 mb-2">
                    <strong>Aanbeveling:</strong> <span className="text-yellow-600">{useCase.recommendation}</span>
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Waarom:</strong> {useCase.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wilt U Persoonlijk Advies over de Beste Thuisbatterij?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij helpen u de juiste keuze maken tussen AlphaESS, Tesla, Huawei en andere merken. Gratis adviesgesprek en offerte op maat.
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
            Veelgestelde Vragen: AlphaESS vs Concurrenten
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
              <p className="text-sm text-gray-600 mb-3">2,9 kWh compact</p>
              <p className="text-yellow-600 font-bold">€4.545</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE5</h3>
              <p className="text-sm text-gray-600 mb-3">5-30 kWh modulair</p>
              <p className="text-yellow-600 font-bold">vanaf €5.785</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-t10"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE-T10</h3>
              <p className="text-sm text-gray-600 mb-3">10 kWh 3-fase</p>
              <p className="text-yellow-600 font-bold">€10.744</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terugverdientijd</h3>
              <p className="text-sm text-gray-600 mb-3">ROI berekenen</p>
              <p className="text-yellow-600 font-bold">5-12 jaar ROI</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor de Beste Thuisbatterij? Kies AlphaESS!
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Bewezen technologie, beste EPEX resultaten, Nederlandse support en uitstekende prijs/prestatie. Vraag vandaag nog een offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Offerte Aanvragen
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Alle Modellen Bekijken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijAlphaESSVsConcurrentenPage;
