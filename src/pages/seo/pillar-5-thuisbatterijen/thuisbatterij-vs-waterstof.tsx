import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Droplet, CheckCircle, X, Euro, Zap, Shield, Phone, Calculator, Award, TrendingUp, Home } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijVsWaterstofPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Batterij vs Waterstof Vergelijking' }
  ];

  const comparisonFeatures = [
    {
      feature: "Rendement (roundtrip)",
      battery: "90-95%",
      hydrogen: "25-40%",
      winner: "battery"
    },
    {
      feature: "Aanschafkosten (10 kWh equiv.)",
      battery: "€9.000-11.000",
      hydrogen: "€30.000-50.000+",
      winner: "battery"
    },
    {
      feature: "Opslagduur",
      battery: "Dagen-weken (zelfontlading ~3%/maand)",
      hydrogen: "Maanden-jaren (minimale verliezen)",
      winner: "hydrogen"
    },
    {
      feature: "Levensduur",
      battery: "10-15 jaar (6000+ cycli)",
      hydrogen: "20-30 jaar",
      winner: "hydrogen"
    },
    {
      feature: "Ruimtebeslag",
      battery: "Compact (0,5-1 m²)",
      hydrogen: "Groot (5-20 m²)",
      winner: "battery"
    },
    {
      feature: "Veiligheid",
      battery: "Zeer veilig (LiFePO4)",
      hydrogen: "Veilig met juiste installatie",
      winner: "battery"
    },
    {
      feature: "Geluid",
      battery: "<35 dB (bijna stil)",
      hydrogen: "45-60 dB (compressor/brandstofcel)",
      winner: "battery"
    },
    {
      feature: "Onderhoud",
      battery: "Geen (onderhoudsvrij)",
      hydrogen: "Regelmatig (jaarlijks)",
      winner: "battery"
    },
    {
      feature: "Beschikbaarheid 2026",
      battery: "✓ Volwassen markt",
      hydrogen: "Beperkt (pilots, R&D)",
      winner: "battery"
    },
    {
      feature: "Subsidies",
      battery: "✓ 0% BTW, diverse regelingen",
      hydrogen: "Beperkte pilot-subsidies",
      winner: "battery"
    },
    {
      feature: "Terugverdientijd",
      battery: "6-10 jaar",
      hydrogen: "Onrendabel (huidige prijzen)",
      winner: "battery"
    }
  ];

  const scenarios = [
    {
      title: "Kies Lithium Batterij (AlphaESS) als...",
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      conditions: [
        "U dagelijkse tot wekelijkse energieopslag nodig heeft",
        "Maximaal rendement (90-95%) belangrijk is",
        "Betaalbare investering gewenst is (€9.000-11.000 voor 10 kWh)",
        "Compacte oplossing nodig is (normaal huis)",
        "Vandaag al beschikbaar moet zijn (geen wachtlijst)",
        "Onderhoudsvrije systeem prioriteit heeft",
        "BTW-voordeel (0%) wilt benutten",
        "Terugverdientijd van 6-10 jaar acceptabel is"
      ]
    },
    {
      title: "Overweeg Waterstof als... (theoretisch)",
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      conditions: [
        "Lange termijn opslag (maanden) noodzakelijk is",
        "Grote ruimte beschikbaar is (garage, schuur)",
        "Budget voor €30.000-50.000+ aanwezig is",
        "Bereid bent te wachten op marktrijpheid (5-10 jaar)",
        "Experimenteren en innovatie belangrijk vindt",
        "Lagere rendement (25-40%) accepteert",
        "Regelmatig onderhoud geen probleem is",
        "Off-grid wonen of extreme onafhankelijkheid nastreeft"
      ]
    }
  ];

  const faqs = [
    {
      question: "Waarom is waterstof voor thuisopslag nog niet beschikbaar in 2026?",
      answer: "Waterstofopslag voor woningen bevindt zich nog in de ontwikkelingsfase. De belangrijkste obstakels zijn: (1) Hoge kosten - €30.000-50.000+ voor een basisconfiguratie versus €9.000-11.000 voor vergelijkbare batterij, (2) Laag rendement - slechts 25-40% van de elektriciteit komt terug versus 90-95% bij batterijen, (3) Complexiteit - waterstof vereist elektrolyzer, compressor, opslag, en brandstofcel met regelmatig onderhoud, (4) Veiligheid en regelgeving - waterstof is brandbaar en vereist strenge bouwvoorschriften. Verwachting is dat waterstof pas na 2030 betaalbaar en praktisch wordt voor woningen."
    },
    {
      question: "Wat is het verschil in rendement tussen batterij en waterstof?",
      answer: "Het rendementverschil is enorm. Bij een lithium batterij (AlphaESS) komt 90-95% van de opgeslagen elektriciteit terug - slechts 5-10% verlies. Bij waterstof gaat het proces via elektrolyse (70% efficiënt), compressie/opslag (90% efficiënt), en brandstofcel (50-60% efficiënt). Totaal rendement: 25-40%. Dit betekent dat u 2,5-4x zoveel zonnepanelen nodig heeft voor dezelfde netto opbrengst. Voor dagelijks gebruik is dit financieel onhaalbaar."
    },
    {
      question: "Wanneer is waterstofopslag wel zinvol?",
      answer: "Waterstof kan zinvol zijn voor seizoensopslag - energie van zomer bewaren voor winter. Als u in zomer enorm overschot heeft (groot PV-systeem, laag zomerverbruik) en in winter tekort (hoog verbruik, weinig zon), dan kan waterstof theoretisch helpen. Maar ook dan blijft het duur: voor seizoensopslag heeft u 500-1000 kWh nodig, wat €100.000-200.000+ kost. Pas na 2030-2035 worden de kosten mogelijk acceptabel (€20.000-40.000). Voor nu is netaansluiting met saldering of groot batterijsysteem (30 kWh) praktischer."
    },
    {
      question: "Hoeveel ruimte neemt een waterstofoplossing in beslag?",
      answer: "Een compleet waterstof home-systeem vereist 5-20 m² ruimte voor: elektrolyzer (1-2 m²), waterstof compressor (1-2 m²), hogedruk opslagtank(s) (2-5 m²), brandstofcel (1-2 m²), en veiligheidsclearance/ventilatie. Daarnaast moeten tanks buiten of in goed geventileerde ruimte staan (veiligheidsvoorschriften). Ter vergelijking: AlphaESS SMILE-T10 (10 kWh) is 0,87 x 0,57 m = 0,5 m², 21x kleiner. Voor gemiddelde Nederlandse woning is waterstof dus ruimtelijk onpraktisch."
    },
    {
      question: "Is waterstofopslag veilig voor thuisgebruik?",
      answer: "Waterstof is brandbaar (zoals aardgas) en vereist strikte veiligheidsmaatregelen. Moderne systemen hebben meerdere veiligheidslagen: drukbeveiliging, lekdetectie, automatische afsluiters, en ventilatie. Bij correcte installatie en onderhoud is het risico beheerst. Maar: waterstof stelt hogere eisen dan batterijen. LiFePO4 batterijen (AlphaESS) zijn inherent veiliger - niet brandbaar, geen explosiegevaar, geen speciale ventilatie nodig. Voor woningen zijn batterijen daarom de veiligere en gemakkelijkere keuze."
    },
    {
      question: "Wat zijn de onderhoudskosten van waterstof versus batterij?",
      answer: "AlphaESS batterijen zijn onderhoudsvrij - 10 jaar garantie zonder jaarlijks onderhoud (€0/jaar). Waterstof systemen vereisen jaarlijks onderhoud: elektrolyzer spoelen (€200-400/jaar), brandstofcel inspectie (€300-500/jaar), compressor service (€200-300/jaar), en lekdetectie check (€100-200/jaar). Totaal: €800-1.400/jaar ofwel €8.000-14.000 over 10 jaar. Dit maakt waterstof nóg duurder bovenop de aanschaf."
    },
    {
      question: "Kan ik nu al een waterstof home-systeem kopen?",
      answer: "In Nederland zijn in 2026 geen waterstof home-systemen commercieel beschikbaar voor particulieren. Er lopen enkele pilots (Rozenburg, Stad aan 't Haringvliet) maar die zijn niet voor verkoop. Enkele Europese bedrijven (HPS, Lavo, Enapter) bieden pilot-systemen voor €40.000-80.000+, maar zonder garantie, support of subsidies. Onze aanbeveling: wacht tot na 2030 wanneer waterstof betaalbaarder en bewezen is. Investeer nu in AlphaESS batterij en upgrade later indien zinvol."
    },
    {
      question: "Wat is de toekomst van waterstof voor thuisopslag?",
      answer: "Waterstof heeft potentie voor seizoensopslag (zomer→winter) maar pas na 2030-2035 tegen betaalbare prijzen (verwachting: €15.000-25.000 voor basisoplossing). Technologie moet nog 10-15 jaar rijpen. Voor dagelijkse opslag blijven batterijen superieur (hoger rendement, lager kosten). Meest waarschijnlijke toekomst: batterij voor dagelijks/wekelijks + klein waterstof systeem voor seizoen, of hybride oplossingen. Advies: begin met bewezen batterij technologie (AlphaESS), evalueer waterstof na 2030."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij vs Waterstofopslag 2026 | Wat is Beter? | Eerlijke Vergelijking | Limburg"
        description="Batterij vs waterstofopslag voor thuis ✓ Rendement ✓ Kosten ✓ Praktijk ✓ Toekomst ✓ Eerlijke analyse | Wat werkt nu? | StayCool Airco Limburg"
      />

      <SchemaMarkup
        type="ComparisonTable"
        data={{
          "@type": "ComparisonTable",
          name: "Lithium Batterij vs Waterstofopslag voor Woningen",
          description: "Vergelijking tussen lithium batterijen en waterstofopslag voor thuisgebruik op basis van rendement, kosten, praktijk en beschikbaarheid.",
          items: [
            {
              "@type": "Product",
              name: "Lithium Thuisbatterij (AlphaESS)",
              description: "Volwassen batterij technologie met 90-95% rendement en bewezen ROI voor dagelijkse energieopslag"
            },
            {
              "@type": "Product",
              name: "Waterstof Home Opslag",
              description: "Experimentele technologie voor lange termijn energieopslag met hoge kosten en laag rendement"
            }
          ]
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij of Waterstofopslag: Wat Werkt in 2026?
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Eerlijke vergelijking tussen lithium batterijen en waterstofopslag voor woningen. Rendement, kosten, praktijk en toekomst objectief vergeleken.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Adviesgesprek
            </Link>
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Bereken Batterij ROI
            </Link>
          </div>

          <div className="flex items-center gap-4 text-yellow-900">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              <span>Onafhankelijk Advies</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Eerlijke Vergelijking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-12 bg-orange-50 border-b-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            🎯 Direct Antwoord voor 2026
          </h2>
          <p className="text-lg text-gray-700 text-center mb-4">
            <strong>Lithium batterijen (AlphaESS)</strong> zijn de praktische keuze voor 99% van huishoudens. Waterstof is experimenteel, onbetaalbaar (€30.000-50.000+), inefficiënt (25-40% rendement), en niet commercieel beschikbaar. Wacht tot na 2030 voor waterstof of kies nu bewezen batterij technologie.
          </p>
          <div className="text-center">
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk Batterij Opties
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Batterij vs Waterstof: Alle Kenmerken
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Objectieve vergelijking zonder marketing praatjes
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Kenmerk</th>
                    <th className="px-6 py-4 text-left">Lithium Batterij</th>
                    <th className="px-6 py-4 text-left">Waterstof Opslag</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                      <td className={`px-6 py-4 ${item.winner === 'battery' ? 'bg-yellow-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'battery' && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                          {item.battery}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${item.winner === 'hydrogen' ? 'bg-blue-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'hydrogen' && <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />}
                          {item.hydrogen}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="text-gray-700">
              <strong>Conclusie 2026:</strong> Batterijen winnen op alle praktische criteria (rendement, kosten, beschikbaarheid, gebruiksgemak). Waterstof wint alleen op langdurige opslag en levensduur, maar is nog niet betaalbaar of praktisch voor woningen.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Welke Oplossing Past Bij U?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  {scenario.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{scenario.title}</h3>
                </div>
                <ul className="space-y-3">
                  {scenario.conditions.map((condition, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Diepgaande Analyse: Waarom Batterijen Nu, Waterstof Later
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Het Rendementsprobleem van Waterstof</h3>
            <p className="text-lg text-gray-600 mb-6">
              Het grootste nadeel van waterstof is het lage <strong>roundtrip rendement</strong> - hoeveel energie u terugkrijgt van wat u erin stopt. Bij een lithium batterij is dit 90-95%: van elke 100 kWh zonne-energie krijgt u 90-95 kWh terug.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Waterstof proces (25-40% totaal rendement):</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>100 kWh zonne-energie → Elektrolyzer (70% efficiënt) → 70 kWh waterstof</li>
                <li>70 kWh waterstof → Compressie/opslag (90% efficiënt) → 63 kWh waterstof</li>
                <li>63 kWh waterstof → Brandstofcel (50-60% efficiënt) → 32-38 kWh elektriciteit terug</li>
                <li><strong>Verlies: 62-68% van uw zonne-energie verdwijnt!</strong></li>
              </ul>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Dit betekent dat u 2,5-4x zoveel zonnepanelen nodig heeft om dezelfde netto opslag te bereiken. Financieel is dit catastrofaal voor dagelijkse opslag.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. De Kostenvergelijking</h3>
            <p className="text-lg text-gray-600 mb-6">
              Voor 10 kWh bruikbare opslag betaalt u:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>AlphaESS SMILE-T10:</strong> €11.000 (na BTW-teruggave €9.000)</li>
              <li><strong>Waterstof home systeem:</strong> €35.000-55.000+ (geen subsidies, geen BTW-voordeel)</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6">
              Waterstof is dus 4-6x duurder. En door het lage rendement heeft u ook 2,5-4x meer zonnepanelen nodig, wat nog eens €5.000-15.000 kost. Totale meerkosten: €30.000-60.000.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Wanneer Heeft Waterstof Wel Zin?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Waterstof kan zinvol zijn voor <strong>seizoensopslag</strong> - energie van zomermaanden bewaren voor wintermaanden. Als u:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li>Enorm groot PV-systeem heeft (20-30 kWp+)</li>
              <li>In zomer veel meer produceert dan u verbruikt</li>
              <li>In winter veel meer verbruikt dan u produceert</li>
              <li>Off-grid wilt leven (geen netaansluiting)</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6">
              Dan kan waterstof uw zomeroverschot opslaan voor wintergebruik. Maar zelfs dan is het duur: voor seizoensopslag heeft u 500-1.000 kWh capaciteit nodig, wat €100.000-200.000+ kost bij huidige prijzen.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. De Praktische Hindernissen</h3>
            <p className="text-lg text-gray-600 mb-6">
              Naast kosten en rendement zijn er praktische bezwaren:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li><strong>Ruimte:</strong> Waterstof systeem vereist 5-20 m² (elektrolyzer, compressor, tanks, brandstofcel) versus 0,5 m² voor batterij</li>
              <li><strong>Geluid:</strong> Compressor en brandstofcel maken 45-60 dB (wasmachine-niveau) versus stil batterijsysteem</li>
              <li><strong>Onderhoud:</strong> Jaarlijks onderhoud €800-1.400/jaar versus onderhoudsvrije batterij</li>
              <li><strong>Veiligheid:</strong> Waterstof is brandbaar, vereist veiligheidsvoorzieningen, bouwvergunning vaak nodig</li>
              <li><strong>Regelgeving:</strong> Waterstof opslag valt onder strengere voorschriften (PGS35 richtlijnen)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. De Toekomst: Hybride Oplossingen?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Verwachting is dat na 2030-2035 waterstof betaalbaarder wordt (€15.000-25.000 voor basisoplossing) en efficiënter (40-50% rendement). Dan kunnen <strong>hybride oplossingen</strong> interessant worden:
            </p>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-600 space-y-2">
              <li>Batterij (10-15 kWh) voor dagelijkse opslag (hoog rendement, lage kosten)</li>
              <li>Waterstof (50-100 kWh equivalent) voor seizoensopslag (zomer→winter)</li>
            </ul>
            <p className="text-lg text-gray-600 mb-6">
              Maar zelfs dan blijft batterij de primaire oplossing voor 90% van uw energieopslag. Advies: begin nu met batterij, evalueer waterstof na 2030.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Nu met Bewezen Batterij Technologie
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            AlphaESS batterijen: vandaag beschikbaar, bewezen ROI, 10 jaar garantie, onderhoudsvrij
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
            Veelgestelde Vragen over Batterij vs Waterstof
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

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kies de Slimme Oplossing voor 2026
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS batterijen: bewezen technologie met 6-10 jaar terugverdientijd. Waterstof: wacht tot na 2030.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Batterij ROI
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk AlphaESS Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijVsWaterstofPage;
