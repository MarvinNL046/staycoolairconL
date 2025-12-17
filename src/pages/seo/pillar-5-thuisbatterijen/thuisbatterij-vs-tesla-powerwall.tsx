import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, CheckCircle, X, Euro, Zap, Shield, Phone, Calculator, Award, TrendingUp } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijVsTeslaPowerwallPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'AlphaESS vs Tesla Powerwall Vergelijking' }
  ];

  const comparisonFeatures = [
    {
      feature: "Capaciteit",
      alphaess: "2,9 - 30 kWh (modulair)",
      tesla: "13,5 kWh (vast)",
      winner: "alphaess"
    },
    {
      feature: "Prijs per kWh",
      alphaess: "€900-1.100/kWh",
      tesla: "€1.100-1.300/kWh",
      winner: "alphaess"
    },
    {
      feature: "Garantie",
      alphaess: "10 jaar standaard",
      tesla: "10 jaar standaard",
      winner: "tie"
    },
    {
      feature: "EPEX Handel",
      alphaess: "✓ Beste prestaties",
      tesla: "✓ Beperkt",
      winner: "alphaess"
    },
    {
      feature: "Modulariteit",
      alphaess: "✓ Uitbreidbaar",
      tesla: "✗ Vaste capaciteit",
      winner: "alphaess"
    },
    {
      feature: "Nederlandse Support",
      alphaess: "✓ Lokale service",
      tesla: "Beperkt",
      winner: "alphaess"
    },
    {
      feature: "BTW Teruggave Hulp",
      alphaess: "✓ Volledige begeleiding",
      tesla: "Zelf regelen",
      winner: "alphaess"
    },
    {
      feature: "Levertijd",
      alphaess: "2-4 weken",
      tesla: "4-12 weken",
      winner: "alphaess"
    },
    {
      feature: "Design",
      alphaess: "Functioneel",
      tesla: "Premium/Minimalistisch",
      winner: "tesla"
    }
  ];

  const scenarios = [
    {
      title: "Kies AlphaESS als...",
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      conditions: [
        "U wilt starten met een kleiner systeem en later uitbreiden",
        "Beste EPEX handelsresultaten belangrijk zijn (€200-400/jaar extra)",
        "U waarde hecht aan Nederlandse support en begeleiding",
        "Prijs-kwaliteit verhouding prioriteit heeft",
        "U hulp wilt bij BTW teruggave (21% besparing)",
        "Kortere levertijd gewenst is (2-4 weken)"
      ]
    },
    {
      title: "Kies Tesla Powerwall als...",
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      conditions: [
        "U direct 13,5 kWh capaciteit nodig heeft",
        "Tesla-merkwaarde en design belangrijk zijn",
        "U al Tesla producten (auto, zonnepanelen) heeft",
        "Premium uitstraling prioriteit heeft",
        "U tevreden bent met beperktere uitbreidingsmogelijkheden",
        "Langere levertijd geen probleem is"
      ]
    }
  ];

  const faqs = [
    {
      question: "Wat is het grootste verschil tussen AlphaESS en Tesla Powerwall?",
      answer: "Het grootste verschil is modulariteit en prijs. AlphaESS biedt systemen van 2,9 tot 30 kWh die u kunt uitbreiden, met prijzen vanaf €900/kWh. Tesla Powerwall heeft een vaste capaciteit van 13,5 kWh voor €1.100-1.300/kWh. AlphaESS scoort bovendien beter op EPEX energiehandel (€200-400/jaar extra opbrengst) en heeft snellere levertijden met Nederlandse support."
    },
    {
      question: "Welke batterij heeft de beste EPEX handelsresultaten?",
      answer: "AlphaESS heeft aantoonbaar de beste EPEX handelsresultaten in Nederland. In 2024-2025 behaalden AlphaESS gebruikers gemiddeld €200-400 per jaar extra opbrengst door slim handelen op de EPEX spotmarkt. Tesla Powerwall ondersteunt EPEX handel ook, maar met beperkter algoritme en lagere opbrengsten (€100-200/jaar). Dit verschil komt door AlphaESS's gespecialiseerde software en snellere reactietijden."
    },
    {
      question: "Is Tesla Powerwall de investering waard ondanks hogere prijs?",
      answer: "Voor sommige gebruikers wel. Tesla Powerwall biedt premium design, merkwaarde, en naadloze integratie met andere Tesla-producten. De meerprijs (€2.000-4.000) ten opzichte van AlphaESS is vooral gerechtvaardigd als u waarde hecht aan design en het Tesla-ecosysteem. Voor puur financieel rendement en functionaliteit biedt AlphaESS echter betere waarde met kortere terugverdientijd."
    },
    {
      question: "Kan ik AlphaESS later uitbreiden naar meer capaciteit?",
      answer: "Ja, dat is juist een groot voordeel. U kunt starten met bijvoorbeeld SMILE-B3 (2,9 kWh) voor €3.500 en later uitbreiden naar SMILE5 (5-30 kWh) of SMILE-T10 (10 kWh 3-fase). Tesla Powerwall heeft vaste capaciteit van 13,5 kWh - voor meer capaciteit moet u een complete tweede Powerwall kopen (€15.000+). AlphaESS's modulariteit bespaart u duizenden euro's bij toekomstige uitbreiding."
    },
    {
      question: "Welke garantie krijg ik bij AlphaESS vs Tesla?",
      answer: "Beide merken bieden 10 jaar productgarantie. AlphaESS garandeert minimaal 80% restcapaciteit na 6000 cycli, Tesla garandeert 70% na 10 jaar. In de praktijk presteren beide systemen uitstekend. Het verschil zit in service: AlphaESS heeft Nederlandse dealers met lokale support en snelle responstijd, terwijl Tesla support centraal en soms trager is."
    },
    {
      question: "Hoe zit het met BTW teruggave bij beide merken?",
      answer: "Bij beide systemen heeft u recht op 0% BTW (€0 BTW) als u ze combineert met zonnepanelen sinds 2023. Het verschil: StayCool Airco (AlphaESS dealer) begeleidt u volledig bij de BTW-vrije aanschaf en administratie. Bij Tesla moet u dit vaak zelf regelen of via een installateur zonder gespecialiseerde begeleiding. Onze klanten waarderen deze hulp bij het besparen van 21% op de investering."
    },
    {
      question: "Wat zijn de levertijden voor AlphaESS en Tesla Powerwall?",
      answer: "AlphaESS systemen leveren wij binnen 2-4 weken na bestelling, inclusief installatie binnen 1 week daarna. Tesla Powerwall heeft momenteel 4-12 weken levertijd, afhankelijk van voorraad en vraag. Als u snel een thuisbatterij wilt (bijvoorbeeld voor subsidie deadline of nieuwbouw oplevering), dan is AlphaESS de snellere optie."
    },
    {
      question: "Welke batterij past het beste bij elektrisch rijden?",
      answer: "Voor elektrisch rijden zijn beide geschikt, maar AlphaESS biedt meer flexibiliteit. Met SMILE-T10 (10 kWh) laadt u dagelijks 40-50 km rijbereik. Als uw behoefte groeit (tweede EV), breidt u eenvoudig uit naar 20-30 kWh. Tesla Powerwall (13,5 kWh) biedt 50-60 km/dag, maar uitbreiden vereist een complete tweede unit voor €15.000+. AlphaESS groeit mee met uw mobiliteit."
    }
  ];

  return (
    <>
      <MetaTags
        title="AlphaESS vs Tesla Powerwall Vergelijking 2026 | Welke Thuisbatterij? | Limburg"
        description="AlphaESS vs Tesla Powerwall vergelijking ✓ Prijs ✓ Capaciteit ✓ EPEX handel ✓ Garantie ✓ Support ✓ Eerlijke analyse | Gratis advies Limburg!"
      />

      <SchemaMarkup
        type="ComparisonTable"
        data={{
          "@type": "ComparisonTable",
          name: "AlphaESS vs Tesla Powerwall Vergelijking",
          description: "Vergelijking tussen AlphaESS thuisbatterijen en Tesla Powerwall op basis van prijs, capaciteit, functionaliteit en support.",
          items: [
            {
              "@type": "Product",
              name: "AlphaESS SMILE Thuisbatterij",
              description: "Modulaire thuisbatterij met 2,9-30 kWh capaciteit en beste EPEX handelsresultaten",
              brand: { "@type": "Brand", name: "AlphaESS" }
            },
            {
              "@type": "Product",
              name: "Tesla Powerwall",
              description: "Premium thuisbatterij met vaste 13,5 kWh capaciteit en Tesla-integratie",
              brand: { "@type": "Brand", name: "Tesla" }
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AlphaESS vs Tesla Powerwall: Welke Thuisbatterij Kiest U in 2026?
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Eerlijke vergelijking tussen AlphaESS en Tesla Powerwall op prijs, capaciteit, EPEX handel, garantie en support. Ontdek welke thuisbatterij het beste bij uw situatie past.
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
              Bereken Uw Besparing
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

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AlphaESS vs Tesla Powerwall: Specificaties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Directe vergelijking van alle belangrijke kenmerken
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Kenmerk</th>
                    <th className="px-6 py-4 text-left">AlphaESS SMILE</th>
                    <th className="px-6 py-4 text-left">Tesla Powerwall</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                      <td className={`px-6 py-4 ${item.winner === 'alphaess' ? 'bg-yellow-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'alphaess' && <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />}
                          {item.alphaess}
                        </div>
                      </td>
                      <td className={`px-6 py-4 ${item.winner === 'tesla' ? 'bg-blue-50 font-semibold' : ''}`}>
                        <div className="flex items-center">
                          {item.winner === 'tesla' && <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />}
                          {item.tesla}
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
              <strong>Conclusie:</strong> AlphaESS wint op prijs-kwaliteit, modulariteit, EPEX handel, Nederlandse support en levertijd. Tesla Powerwall excelleert in design en merkwaarde.
            </p>
          </div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Welke Thuisbatterij Past Bij U?
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
              Diepgaande Analyse: AlphaESS vs Tesla Powerwall
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Prijs en Prijs-Kwaliteit Verhouding</h3>
            <p className="text-lg text-gray-600 mb-6">
              <strong>AlphaESS</strong> biedt systemen vanaf €3.500 (SMILE-B3, 2,9 kWh) tot €11.000 (SMILE-T10, 10 kWh). De prijs per kWh ligt tussen €900-1.100, afhankelijk van het model. <strong>Tesla Powerwall</strong> kost €15.000-17.000 voor 13,5 kWh, wat neerkomt op €1.100-1.300/kWh.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Voor een vergelijkbaar systeem van 13,5 kWh betaalt u bij AlphaESS (SMILE5 uitgebreid) ongeveer €12.000-13.000 versus €15.000-17.000 bij Tesla. Dit bespaart u <strong>€2.000-5.000</strong> bij aanschaf.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. EPEX Energiehandel: Het Grote Verschil</h3>
            <p className="text-lg text-gray-600 mb-6">
              Hier onderscheidt AlphaESS zich sterk. AlphaESS-systemen behaalden in 2024-2025 gemiddeld <strong>€200-400 per jaar extra opbrengst</strong> door optimaal handelen op de EPEX spotmarkt (dynamische energieprijzen). Tesla Powerwall ondersteunt EPEX ook, maar behaalt slechts €100-200/jaar door beperkter algoritme.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over een 10-jarige levensduur betekent dit <strong>€1.000-3.000 extra opbrengst</strong> voor AlphaESS. Dit compenseert een groot deel van het aanschafprijsverschil.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Modulariteit en Uitbreidbaarheid</h3>
            <p className="text-lg text-gray-600 mb-6">
              <strong>AlphaESS</strong> biedt unieke modulariteit. Start met SMILE-B3 (2,9 kWh) voor €3.500 en breid later uit naar 5, 10 of zelfs 30 kWh. Dit is ideaal als uw energiebehoefte groeit (elektrische auto, warmtepomp, gezinsuitbreiding).
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <strong>Tesla Powerwall</strong> heeft vaste capaciteit van 13,5 kWh. Meer capaciteit? Dan moet u een complete tweede Powerwall kopen voor €15.000+. Dit maakt uitbreiden 2-3x duurder dan bij AlphaESS.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Support en Service</h3>
            <p className="text-lg text-gray-600 mb-6">
              <strong>AlphaESS</strong> heeft een landelijk netwerk van erkende dealers zoals StayCool Airco in Limburg. U krijgt Nederlandse support, lokale installatie binnen 2-4 weken, en persoonlijke begeleiding bij BTW-teruggave (€700-3.500 besparing).
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <strong>Tesla</strong> heeft gecentraliseerde support, langere levertijden (4-12 weken), en beperkte persoonlijke begeleiding. Voor BTW-teruggave bent u vaak op zichzelf aangewezen.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Design en Merkwaarde</h3>
            <p className="text-lg text-gray-600 mb-6">
              Hier wint <strong>Tesla Powerwall</strong> duidelijk. Het minimalistische design, premium afwerking, en Tesla-merkwaarde zijn ongeëvenaard. Als u waarde hecht aan esthetiek en het Tesla-ecosysteem (auto, zonnepanelen), dan is Powerwall aantrekkelijk.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              <strong>AlphaESS</strong> heeft functioneel design zonder toeters en bellen. Niet lelijk, maar niet het premium uiterlijk van Tesla.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hulp Nodig Bij Uw Keuze?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Onze energiespecialisten adviseren u onafhankelijk over AlphaESS, Tesla of andere merken op basis van uw situatie
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
            Veelgestelde Vragen over AlphaESS vs Tesla Powerwall
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
            Maak De Juiste Keuze Voor Uw Situatie
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS of Tesla Powerwall? Wij helpen u met een persoonlijk advies, prijs-kwaliteit analyse en ROI-berekening
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/besparingcalculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Besparing
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              AlphaESS Modellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijVsTeslaPowerwallPage;
