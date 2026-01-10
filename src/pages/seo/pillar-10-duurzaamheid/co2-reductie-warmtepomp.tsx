import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, CheckCircle, Shield, Leaf, ThermometerSun, Wind, Phone, Calculator, Award, Zap, Euro } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const CO2ReductieWarmtepompPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Duurzaamheid', path: '/duurzaamheid' },
    { label: 'CO2 Reductie Warmtepomp' }
  ];

  const usps = [
    {
      icon: <TrendingDown className="h-12 w-12 text-green-600" />,
      title: "4-6 Ton CO2 Besparing",
      description: "Reduceer jaarlijks 4-6 ton CO2-uitstoot - equivalent aan 25.000 km autorijden"
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "400% Rendement",
      description: "Voor elke kWh elektriciteit levert een warmtepomp 4-5 kWh warmte of koeling"
    },
    {
      icon: <Euro className="h-12 w-12 text-orange-600" />,
      title: "60% Lagere Kosten",
      description: "Bespaar tot 60% op stookkosten vergeleken met gasverwarming"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-600" />,
      title: "Klimaatdoelen 2030",
      description: "Draag direct bij aan Nederland's 49% CO2-reductiedoelstelling"
    }
  ];

  const benefits = [
    "4-6 ton CO2-reductie per jaar per huishouden",
    "75-85% lagere CO2-uitstoot dan gasketel",
    "Bijdrage aan klimaatakkoord en Parijs-doelen",
    "60% lagere stookkosten bij juist gebruik",
    "Onafhankelijk van fossiele brandstoffen",
    "Energielabel verbetering (minimaal 2 stappen)",
    "Subsidie tot €2.500 via ISDE regeling",
    "Waardestijging woning (3-8%)"
  ];

  const co2Comparison = [
    { method: "Gasketel HR", co2PerYear: "3.500 kg", cost: "€1.800", efficiency: "90%" },
    { method: "Elektrische Verwarming", co2PerYear: "2.800 kg", cost: "€2.400", efficiency: "100%" },
    { method: "Warmtepomp (COP 4)", co2PerYear: "700 kg", cost: "€720", efficiency: "400%" },
    { method: "Warmtepomp + Zonnepanelen", co2PerYear: "100 kg", cost: "€200", efficiency: "400%+" }
  ];

  const climateGoals = [
    {
      title: "Parijs Akkoord (2015)",
      target: "Opwarming beperken tot  minder dan 2°C",
      contribution: "Warmtepompen essentieel voor gebouwde omgeving"
    },
    {
      title: "Nederlands Klimaatakkoord (2019)",
      target: "49% CO2-reductie in 2030",
      contribution: "1,5 miljoen warmtepompen nodig in 2030"
    },
    {
      title: "EU Green Deal (2020)",
      target: "Klimaatneutraal in 2050",
      contribution: "Afbouwen gasinfrastructuur, elektrificeren verwarming"
    },
    {
      title: "Limburg Energie Akkoord",
      target: "CO2-neutraal in 2050",
      contribution: "Stimuleren warmtepompen via subsidies en voorlichting"
    }
  ];

  const faqs = [
    {
      question: "Hoeveel CO2 bespaar ik met een warmtepomp?",
      answer: "Een gemiddeld Nederlands huishouden bespaart 4-6 ton CO2 per jaar door over te stappen van een HR gasketel naar een warmtepomp. Dit komt neer op 75-85% minder CO2-uitstoot. Over de levensduur van 20 jaar betekent dit een totale besparing van 80-120 ton CO2 - equivalent aan het vermijden van 500.000 kilometer autorijden. Als u de warmtepomp combineert met zonnepanelen, stijgt de besparing naar 95-98%, waardoor u vrijwel CO2-neutraal verwarmt en koelt."
    },
    {
      question: "Hoe draagt een warmtepomp bij aan klimaatdoelen?",
      answer: "Warmtepompen zijn cruciaal voor het behalen van klimaatdoelen. Nederland moet tegen 2030 49% minder CO2 uitstoten, waarbij de gebouwde omgeving (verantwoordelijk voor 30% van uitstoot) een sleutelrol speelt. Het Klimaatakkoord stelt 1,5 miljoen warmtepompen als doelstelling voor 2030. Elke warmtepomp vermijdt jaarlijks 2,8 ton CO2 vergeleken met gasverwarming. Voor heel Limburg (565.000 huishoudens) zou volledige transitie een jaarlijkse CO2-reductie van 1,6 miljoen ton betekenen - 12% van de provinciale doelstelling."
    },
    {
      question: "Is een warmtepomp echt duurzamer als de stroom van kolencentrales komt?",
      answer: "Ja, zelfs met grijze stroom is een warmtepomp aanzienlijk duurzamer dan gasverwarming. De Nederlandse elektriciteitsmix bestaat inmiddels voor 40% uit hernieuwbare bronnen (wind, zon, biomassa), en dit percentage stijgt jaarlijks. Door het hoge rendement (COP 4-5) gebruikt een warmtepomp 4-5 keer minder primaire energie dan directe verbranding van gas. Zelfs als 100% van de stroom uit kolencentrales kwam (wat niet het geval is), zou een warmtepomp nog steeds 60-70% minder CO2 uitstoten. Combineert u de warmtepomp met zonnepanelen, dan bent u vrijwel volledig CO2-neutraal."
    },
    {
      question: "Wat kost de overstap naar een warmtepomp?",
      answer: "Een complete warmtepomp-installatie kost tussen €4.500 (lucht-lucht) en €15.000 (lucht-water met vloerverwarming). De ISDE subsidie bedraagt tot €2.500, waardoor netto investeringen beginnen vanaf €2.000. Door 60% lagere stookkosten verdient de investering zich gemiddeld binnen 8-12 jaar terug. Bij stijgende gasprijzen en dalende elektriciteitsprijzen (door zonnepanelen) wordt dit 6-10 jaar. Over de levensduur van 20 jaar bespaart u €12.000-24.000 aan stookkosten, naast de CO2-reductie. Extra voordelen: €4.000-12.000 waardestijging van uw woning en energielabel verbetering."
    },
    {
      question: "Werkt een warmtepomp ook in de winter?",
      answer: "Ja, moderne warmtepompen functioneren uitstekend tot -20°C buitentemperatuur. In Limburg komt het slechts enkele dagen per jaar onder -10°C, waardoor warmtepompen 99% van de tijd op volle capaciteit draaien. Bij extreme kou heeft een warmtepomp wel iets meer elektriciteit nodig (COP daalt van 4,5 naar 2,5), maar blijft ze efficiënter dan elektrische verwarming of gasketel. Premium merken zoals Daikin en Mitsubishi Heavy Industries hebben speciale 'winterprestatie' technologie die optimale werking garandeert tot -25°C. Voor extra zekerheid kan een hybride warmtepomp worden geïnstalleerd met gas-backup voor de koudste dagen."
    },
    {
      question: "Kan ik subsidie krijgen voor een warmtepomp?",
      answer: "Ja, via de ISDE regeling (Investeringssubsidie Duurzame Energie) ontvangt u €2.500 subsidie voor een volledige warmtepomp of €2.000 voor een hybride warmtepomp. Voorwaarde is dat de installatie wordt uitgevoerd door een erkend installatiebedrijf (zoals StayCool Airco) en de warmtepomp minimaal energielabel A++ heeft. Daarnaast kunnen gemeenten in Limburg aanvullende subsidies bieden, variërend van €500-1.500. Check altijd eerst de beschikbaarheid, want ISDE-budget is beperkt en op = op. Wij regelen de volledige subsidieaanvraag voor u, inclusief alle benodigde documentatie en certificaten."
    },
    {
      question: "Hoe verhoudt een warmtepomp zich tot de geplande gasverboden?",
      answer: "Vanaf 2026 mogen nieuwbouwwoningen niet meer worden aangesloten op het gasnet. Bestaande woningen worden niet verplicht over te stappen, maar veel gemeenten werken aan 'wijkgerichte aanpak' waarbij hele buurten gefaseerd van het gas afgaan tussen 2025-2050. Een warmtepomp installeert u nu betekent vooruitlopen op deze ontwikkelingen en profiteer van huidige subsidies. Als straks gasaansluitingen worden stopgezet, kunnen prijzen voor haastwerk en beperkte installatiecapaciteit stijgen. Bovendien voorkomt u dat uw woning waardeloos wordt door een verouderde verwarmingsinstallatie - huizen zonder aardgas zijn inmiddels 3-8% meer waard."
    },
    {
      question: "Wat is het verschil tussen lucht-lucht en lucht-water warmtepomp?",
      answer: "Een lucht-lucht warmtepomp (€4.500-8.000) verwarmt/koelt direct via binnenunits en is ideaal voor goede isolatie. Voordelen: lage aanschafkosten, snelle installatie, geen verbouwing, zeer efficiënt (COP 4-5), ook koeling in zomer. Nadeel: geen tapwater verwarming. Een lucht-water warmtepomp (€10.000-15.000) verwarmt via radiatoren/vloerverwarming en tapwater. Voordelen: vervangt complete CV, verwarmt ook tapwater, geschikt voor bestaande bouw. Nadeel: hogere investering, vereist vaak aanpassingen. Voor optimale CO2-reductie raden wij een lucht-lucht systeem aan met elektrische boiler of zonneboiler voor tapwater - totale investering €5.500-9.000 met beste rendement."
    }
  ];

  return (
    <>
      <MetaTags
        title="CO2 Reductie Warmtepomp Limburg | 4-6 Ton Besparing | StayCool Airco"
        description="CO2 reductie warmtepomp ✓ 4-6 ton besparing per jaar ✓ 75% minder uitstoot ✓ Klimaatdoelen halen ✓ Tot €2.500 subsidie. Gratis advies!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "CO2 Reductie met Warmtepomp",
          description: "Reduceer uw CO2-uitstoot met 4-6 ton per jaar door over te stappen op een duurzame warmtepomp met 400% rendement",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco",
            telephone: "046-202-1430"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          },
          offers: {
            "@type": "Offer",
            availability: "InStock",
            priceRange: "€€€"
          }
        }}
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                75-85% Minder CO2-Uitstoot
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CO2 Reductie met Warmtepomp: Haal Nederland's Klimaatdoelen in Uw Eigen Woning
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed">
              Reduceer uw CO2-voetafdruk met 4-6 ton per jaar, bespaar 60% op stookkosten, en draag actief bij aan de klimaatdoelstelling van 49% CO2-reductie in 2030
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Phone className="h-6 w-6 mr-2" />
                Bereken Uw CO2-Reductie
              </Link>
              <Link
                to="/capaciteit-calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                <Calculator className="h-6 w-6 mr-2" />
                Besparing Calculator
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>4-6 Ton CO2 Besparing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>60% Lagere Kosten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>Tot €2.500 Subsidie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>400% Rendement</span>
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
              Waarom Warmtepompen Essentieel Zijn voor Klimaatdoelen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De meest effectieve maatregel voor CO2-reductie in de gebouwde omgeving
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 text-center">{usp.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                De Klimaatimpact van Warmtepompen
              </h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Nederland staat voor een enorme klimaatuitdaging. Het Klimaatakkoord vereist 49% CO2-reductie in 2030 ten opzichte van 1990, en klimaatneutraliteit in 2050. De gebouwde omgeving - verantwoordelijk voor 30% van de nationale CO2-uitstoot - speelt hierin een cruciale rol. Warmtepompen zijn de meest effectieve technologie om deze sector te verduurzamen, met een bewezen CO2-reductie van 75-85% vergeleken met gasverwarming.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Een gemiddeld Nederlands huishouden met gasverwarming stoot jaarlijks ongeveer 3,5 ton CO2 uit voor verwarming en warm tapwater. Door over te stappen op een warmtepomp daalt dit naar 0,7 ton - een reductie van 2,8 ton ofwel 80%. Deze besparing is equivalent aan het vermijden van 14.000 kilometer autorijden, het planten van 130 bomen, of het niet vliegen naar Thailand en terug. Over de levensduur van 20 jaar accumuleert deze besparing tot 56 ton CO2, wat neerkomt op 700.000 kilometer autorijden.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Nederland's Klimaatdoelstellingen
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Het Nederlandse Klimaatakkoord (2019) heeft ambitieuze doelstellingen gesteld voor de gebouwde omgeving. Tegen 2030 moeten 1,5 miljoen woningen van het aardgas af, voornamelijk via warmtepompen. Dit betekent een jaarlijkse installatie van 150.000 warmtepompen - een vervijfvoudiging van het huidige tempo. Voor Limburg, met 565.000 huishoudens, betekent dit een doelstelling van ongeveer 140.000 warmtepompen in 2030.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  De urgentie is groot. Elk jaar uitstel betekent gemiddeld 2,8 ton extra CO2-uitstoot per huishouden dat nog op gas zit. Voor Limburg zou volledige transitie naar warmtepompen een jaarlijkse CO2-reductie van 1,6 miljoen ton betekenen - equivalent aan het uit de lucht halen van 800.000 auto's. Dit vertegenwoordigt 12% van de provinciale CO2-reductiedoelstelling en is cruciaal voor het behalen van de nationale klimaatambities.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Hoe Werkt een Warmtepomp?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Een warmtepomp functioneert als een omgekeerde koelkast: het onttrekt warmte aan de buitenlucht (zelfs bij vrieskou tot -20°C) en pompt deze op naar een bruikbaar temperatuurniveau voor verwarming. Het bijzondere aan deze technologie is het rendement: voor elke kWh elektriciteit die de warmtepomp gebruikt, levert het 4-5 kWh warmte. Dit wordt uitgedrukt in de Coefficient of Performance (COP) van 4-5.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Dit hoge rendement is de reden waarom warmtepompen zo effectief zijn in CO2-reductie. Een gasketel heeft een rendement van maximaal 90%, wat betekent dat 10% van de energie verloren gaat. Een warmtepomp heeft een effectief rendement van 400-500%, omdat het niet zelf warmte produceert maar bestaande warmte verplaatst en concentreert. Dit fundamentele verschil maakt warmtepompen 4-5 keer efficiënter dan gas, zelfs als de elektriciteit gedeeltelijk uit fossiele bronnen komt.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Elektriciteit vs Gas: De CO2-Vergelijking
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Een veelgehoord argument tegen warmtepompen is dat Nederlandse elektriciteit nog deels uit fossiele bronnen komt. Dit klopt, maar is geen valide tegenargument. De Nederlandse elektriciteitsmix bestaat voor 40% uit hernieuwbare bronnen (wind, zon, biomassa), en dit percentage stijgt jaarlijks met 3-5%. Daarnaast produceert elektriciteit uit moderne gascentrales (met 60% rendement) minder CO2 per kWh dan directe gasverbranding in een ketel.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Laten we rekenen: aardgas produceert 1,88 kg CO2 per m³. Een gemiddelde woning verbruikt 1.200 m³ gas per jaar, wat resulteert in 2.256 kg CO2. Met een HR-ketel (90% rendement) komt dit neer op 2.506 kg CO2 voor warmte-output. Een warmtepomp met COP 4 verbruikt 4 keer minder primaire energie. De Nederlandse elektriciteitsmix produceert gemiddeld 0,39 kg CO2 per kWh. Voor dezelfde warmte-output produceert een warmtepomp slechts 700 kg CO2 - een reductie van 72%.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  En dit wordt alleen maar beter. Naarmate het elektriciteitsnet verder vergroent, daalt de CO2-intensiteit van elektriciteit jaarlijks. Tegen 2030 verwacht het PBL dat elektriciteit 80% schoner is dan nu, waardoor warmtepompen dan 95% minder CO2 uitstoten dan gasverwarming. Als u uw warmtepomp combineert met zonnepanelen, bent u nu al 95-98% CO2-neutraal - iets wat met gas nooit mogelijk is.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg sticky top-4 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingDown className="h-6 w-6 text-blue-600" />
                  CO2 Voordelen
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-blue-200">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Bereken CO2-Reductie
                  </Link>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Bel direct: <a href="tel:0462021430" className="font-semibold text-blue-700 hover:text-blue-800">046 202 1430</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CO2 Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            CO2-Uitstoot per Verwarmingsmethode
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Vergelijk de klimaatimpact van verschillende verwarmingsopties (gemiddelde woning, 1.200 m³ gasequivalent)
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Verwarmingsmethode</th>
                  <th className="px-6 py-4 text-center font-bold">CO2 per Jaar</th>
                  <th className="px-6 py-4 text-center font-bold">Jaarkosten</th>
                  <th className="px-6 py-4 text-center font-bold">Efficiëntie</th>
                </tr>
              </thead>
              <tbody>
                {co2Comparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.method}</td>
                    <td className={`px-6 py-4 text-center ${index === 2 || index === 3 ? 'bg-green-100 font-bold text-green-800' : 'text-gray-700'}`}>
                      {row.co2PerYear}
                      {(index === 2 || index === 3) && <TrendingDown className="h-5 w-5 text-green-600 inline ml-2" />}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.cost}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.efficiency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <TrendingDown className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Dramatische CO2-Reductie</h4>
                <p className="text-gray-700 leading-relaxed">
                  Een warmtepomp reduceert CO2-uitstoot met 80% (2,8 ton per jaar) vergeleken met gasverwarming. In combinatie met zonnepanelen zelfs 97% (3,4 ton). Over 20 jaar levensduur bespaart u 56-68 ton CO2 - equivalent aan 700.000 kilometer autorijden of het planten van 2.600 bomen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Goals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Klimaatdoelstellingen en Warmtepompen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {climateGoals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-blue-600 uppercase">Doelstelling</span>
                    <p className="text-gray-700 mt-1">{goal.target}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-green-600 uppercase">Bijdrage Warmtepompen</span>
                    <p className="text-gray-700 mt-1">{goal.contribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Financiële Voordelen Naast CO2-Reductie
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Lagere Energiekosten
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Naast de klimaatbaten biedt een warmtepomp substantiële financiële voordelen. Met de huidige energieprijzen (€1,50/m³ gas en €0,30/kWh elektriciteit) kost gasverwarming gemiddeld €1.800 per jaar. Een warmtepomp met COP 4 verbruikt 3.000 kWh elektriciteit voor dezelfde warmte-output, wat neerkomt op €900 per jaar - een besparing van €900 ofwel 50%. Bij optimaal gebruik (lage temperatuur verwarming, goede isolatie) kan de besparing oplopen tot 60-70%.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Als u uw warmtepomp combineert met zonnepanelen, worden de besparingen nog groter. Zonnepanelen produceren voornamelijk overdag elektriciteit, precies wanneer veel warmtepompen draaien (vooral in tussenseizoen). Door 50-70% van uw warmtepomp-elektriciteit zelf op te wekken, dalen uw kosten tot €300-450 per jaar - een besparing van €1.350-1.500 vergeleken met gas. Over 20 jaar accumuleert dit tot €27.000-30.000 aan kostenbesparing.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Subsidies en Financiële Ondersteuning
            </h3>
            <p className="text-gray-700 leading-relaxed">
              De overheid stimuleert de overstap naar warmtepompen via de ISDE regeling (Investeringssubsidie Duurzame Energie). Voor een volledige warmtepomp ontvangt u €2.500 subsidie, voor een hybride warmtepomp €2.000. Dit reduceert de netto investering aanzienlijk: een lucht-lucht warmtepomp van €6.500 kost na subsidie €4.000, een lucht-water systeem van €12.500 kost €10.000.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Daarnaast bieden verschillende gemeenten in Limburg aanvullende subsidies. Maastricht bijvoorbeeld verstrekt tot €1.500 extra voor afkoppeling van aardgas, Heerlen biedt €1.000 voor energetische renovatie inclusief warmtepomp, en Sittard-Geleen heeft een specifieke regeling van €750 voor warmtepompen in sociale huurwoningen. Cumulatief kunnen subsidies oplopen tot €4.000-4.500, waardoor de terugverdientijd wordt verkort tot 5-7 jaar.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Waardestijging Woning
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Woningen met een warmtepomp zijn gemiddeld 3-8% meer waard dan vergelijkbare woningen met gasverwarming. Dit komt door het betere energielabel (minimaal 2 stappen verbetering), lagere woonlasten, en toekomstbestendigheid. Voor een gemiddelde Limburgse woning van €350.000 betekent dit een waardestijging van €10.500-28.000. Deze waardevermeerdering overtreft vaak de netto investering in de warmtepomp.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Bovendien wordt verwacht dat woningen met aardgasaansluiting over 10-15 jaar minder aantrekkelijk worden, naarmate meer wijken van het gas afgaan. Woningen met verouderde verwarmingssystemen zullen waardeverlies ondervinden, terwijl woningen met duurzame verwarming in waarde stijgen. Door nu te investeren in een warmtepomp, positioneert u uw woning optimaal voor de toekomstige woningmarkt.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Praktische Overwegingen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Een veelgestelde vraag is of warmtepompen geschikt zijn voor bestaande woningen. Het antwoord is genuanceerd: lucht-lucht warmtepompen werken uitstekend in alle woningen met redelijke isolatie (energielabel D of beter). Ze vereisen geen verbouwing en kunnen vaak binnen één dag geïnstalleerd worden. Lucht-water warmtepompen (voor radiatorverwarming) werken het beste in goed geïsoleerde woningen met lage temperatuur verwarming (vloer- of wandverwarming).
            </p>

            <p className="text-gray-700 leading-relaxed">
              Voor slecht geïsoleerde woningen (energielabel E-G) raden wij aan om eerst te isoleren. Dit verbetert niet alleen de prestaties van de warmtepomp, maar verlaagt ook de benodigde capaciteit en investering. Goede isolatie (spouwmuurisolatie, dakisolatie, HR++ glas) is sowieso rendabel met terugverdientijden van 5-10 jaar. In combinatie met een warmtepomp creëert u een optimaal duurzaam systeem met minimale CO2-uitstoot en woonlasten.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Veelgestelde Vragen over CO2-Reductie
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Alle antwoorden op uw vragen over warmtepompen en klimaatdoelen
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-sky-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <TrendingDown className="h-16 w-16 text-blue-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Vandaag met CO2-Reductie
          </h2>
          <p className="text-xl mb-8 text-blue-50 leading-relaxed">
            Reduceer uw CO2-voetafdruk met 4-6 ton per jaar, bespaar 60% op stookkosten, en draag bij aan Nederland's klimaatdoelen. Vraag nu gratis advies en bereken uw persoonlijke CO2-reductie en kostenbesparing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis CO2-Scan Aanvragen
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
            >
              Bel Direct: 046 202 1430
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              <span>4-6 Ton CO2 Reductie</span>
            </div>
            <div className="flex items-center gap-2">
              <Euro className="h-5 w-5" />
              <span>60% Lagere Kosten</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Tot €2.500 Subsidie</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>400% Rendement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde Onderwerpen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/seo/pillar-10-duurzaamheid/koudemiddel-r32" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Leaf className="h-8 w-8 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Koudemiddel R32</h4>
              <p className="text-sm text-gray-600">75% milieuvriendelijker alternatief</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/duurzame-verwarming" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <ThermometerSun className="h-8 w-8 text-orange-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Duurzame Verwarming</h4>
              <p className="text-sm text-gray-600">Afscheid van gas</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/energielabel-verbetering" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Award className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Energielabel Verbetering</h4>
              <p className="text-sm text-gray-600">Verhoog woningwaarde</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/circulaire-airco" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Wind className="h-8 w-8 text-cyan-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Circulaire Airco</h4>
              <p className="text-sm text-gray-600">Recycling en levensduur</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CO2ReductieWarmtepompPage;
