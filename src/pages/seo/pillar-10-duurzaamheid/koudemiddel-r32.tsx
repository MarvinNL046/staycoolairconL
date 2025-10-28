import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, CheckCircle, Shield, TrendingDown, Wind, ThermometerSun, Phone, Calculator, Award, Zap } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const KoudemiddelR32Page = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Duurzaamheid', path: '/duurzaamheid' },
    { label: 'Koudemiddel R32' }
  ];

  const usps = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "75% Lagere GWP",
      description: "R32 heeft een Global Warming Potential van slechts 675, versus 2088 voor R410A - 68% milieuschonender"
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-blue-600" />,
      title: "CO2 Reductie",
      description: "Vermindert uw CO2-voetafdruk met gemiddeld 2,5 ton per jaar per airco-installatie"
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-600" />,
      title: "Energiezuiniger",
      description: "10-15% lager energieverbruik door efficiënter koudemiddel en moderne technologie"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-600" />,
      title: "Toekomstbestendig",
      description: "Voldoet aan EU F-gassen regelgeving en voorkomt kostbare retrofits in de toekomst"
    }
  ];

  const benefits = [
    "75% lagere impact op de opwarming van de aarde (GWP 675 vs 2088)",
    "Geen ozonlaagafbrekend vermogen (ODP = 0)",
    "Energiezuiniger compressor door lagere druk",
    "Minder koudemiddel nodig per installatie (-30%)",
    "Geen phase-out plannen zoals bij R410A en R22",
    "Betere performance bij extreme temperaturen",
    "Lagere operationele kosten door efficiëntie",
    "Eenvoudiger onderhoud en service"
  ];

  const comparison = [
    { aspect: "GWP Waarde", r32: "675", r410a: "2088", r22: "1810", winner: "r32" },
    { aspect: "ODP (Ozonlaag)", r32: "0", r410a: "0", r22: "0.055", winner: "r32" },
    { aspect: "EU Toegestaan", r32: "Ja", r410a: "Tot 2025", r22: "Verboden", winner: "r32" },
    { aspect: "Energie Efficiëntie", r32: "A+++", r410a: "A++", r22: "A+", winner: "r32" },
    { aspect: "Hoeveelheid Koudemiddel", r32: "2.0 kg", r410a: "2.9 kg", r22: "3.2 kg", winner: "r32" },
    { aspect: "Kosten per kg", r32: "€25", r410a: "€80", r22: "Niet verkrijgbaar", winner: "r32" }
  ];

  const faqs = [
    {
      question: "Wat is het verschil tussen R32 en R410A koudemiddel?",
      answer: "R32 is een nieuwere, milieuvriendelijkere koudemiddel met een Global Warming Potential (GWP) van 675, terwijl R410A een GWP van 2088 heeft. Dit betekent dat R32 68% minder impact heeft op de opwarming van de aarde. Daarnaast is R32 energiezuiniger, heeft het geen ozonlaagafbrekend vermogen, en voldoet het aan de strengste EU-regelgeving. R32 systemen verbruiken ook 10-15% minder energie en hebben 30% minder koudemiddel nodig per installatie."
    },
    {
      question: "Is R32 koudemiddel veilig voor huishoudelijk gebruik?",
      answer: "Ja, R32 is volledig veilig voor huishoudelijk en commercieel gebruik. Het is geclassificeerd als A2L refrigerant, wat betekent dat het een lage toxiciteit en lage ontvlambaarheid heeft. Moderne airconditioners met R32 zijn voorzien van extra veiligheidsmaatregelen zoals lekdetectie en automatische uitschakeling. Onze F-gassen gecertificeerde installateurs zorgen voor een vakkundige en veilige installatie volgens alle EU-normen en richtlijnen."
    },
    {
      question: "Kan ik mijn bestaande airco omzetten naar R32?",
      answer: "Nee, het is technisch en wettelijk niet toegestaan om bestaande systemen om te zetten naar R32. De systemen zijn specifiek ontworpen voor één type koudemiddel vanwege verschillende drukken, oliesoorten en componentspecificaties. Als uw huidige systeem R410A of R22 gebruikt, raden wij aan om bij vervanging te kiezen voor een modern R32 systeem. Dit levert direct lagere energiekosten, betere prestaties en een kleinere ecologische voetafdruk op, met gemiddeld 25% besparing op uw energierekening."
    },
    {
      question: "Hoeveel CO2 bespaar ik met R32 ten opzichte van R410A?",
      answer: "Een gemiddeld huishouden bespaart ongeveer 2,5 ton CO2-uitstoot per jaar door te kiezen voor R32 in plaats van R410A. Dit komt neer op het equivalent van 10.000 kilometer autorijden. Over de levensduur van 15 jaar betekent dit een totale besparing van 37,5 ton CO2. Daarnaast bespaart u door de 10-15% hogere energie-efficiëntie jaarlijks €150-250 op uw energierekening, wat over 15 jaar oploopt tot €2.250-3.750 aan kostenbesparingen."
    },
    {
      question: "Waarom kiest StayCool Airco voor R32 koudemiddel?",
      answer: "Wij kiezen bewust voor R32 omdat het de meest duurzame en toekomstbestendige oplossing is voor onze klanten in Limburg. R32 voldoet aan de strengste EU-regelgeving (F-gassen verordening), heeft de laagste milieu-impact, en levert de beste energie-efficiëntie. Als gecertificeerd F-gassen bedrijf installeren en onderhouden wij uitsluitend systemen die voldoen aan de hoogste kwaliteits- en duurzaamheidsnormen. Onze klanten profiteren van lagere energiekosten, een kleinere CO2-voetafdruk, en geen zorgen over toekomstige regelgeving of phase-outs."
    },
    {
      question: "Wat zijn de kosten voor een R32 airco-installatie?",
      answer: "Een complete R32 airco-installatie met vakkundige montage begint vanaf €1.795 voor een single-split systeem. De investering verdient zichzelf gemiddeld binnen 7-9 jaar terug door lagere energiekosten en de langere levensduur van moderne R32 systemen. U komt in aanmerking voor ISDE subsidie tot €750, waardoor de netto investering nog lager uitvalt. Wij bieden gratis advies aan huis om de optimale capaciteit en positie te bepalen, inclusief een kosten-batenanalyse op maat voor uw situatie."
    },
    {
      question: "Hoe lang gaat een R32 airco mee?",
      answer: "Een professioneel geïnstalleerde R32 airco gaat gemiddeld 15-20 jaar mee met regelmatig onderhoud. De nieuwere technologie en minder belasting op componenten zorgen vaak voor een langere levensduur dan oudere R410A of R22 systemen. Met ons onderhoudscontract zorgen wij voor jaarlijkse inspectie, reiniging en optimalisatie, waardoor uw systeem optimaal blijft presteren en u maximaal profiteert van de energie-efficiëntie. Premium merken zoals Daikin en Mitsubishi Heavy bieden zelfs 10 jaar fabrieksgarantie op R32 systemen."
    },
    {
      question: "Welke merken gebruiken R32 koudemiddel?",
      answer: "Alle premium merken die wij installeren gebruiken R32 als standaard koudemiddel: Daikin, Mitsubishi Heavy Industries, LG, Samsung en Tosot/Gree. Deze merken hebben zwaar geïnvesteerd in R32-technologie en bieden de meest efficiënte en milieuvriendelijke systemen op de markt. Elk merk heeft zijn eigen voordelen, maar allen voldoen aan de hoogste kwaliteits- en duurzaamheidsnormen. Tijdens ons gratis adviesgesprek bespreken we welk merk en model het beste past bij uw woning, budget en wensen."
    }
  ];

  return (
    <>
      <MetaTags
        title="Koudemiddel R32 Airco Limburg | 75% Milieuvriendelijker | StayCool Airco"
        description="Koudemiddel R32 airco ✓ 75% lagere CO2-impact ✓ 10-15% energiezuiniger ✓ Toekomstbestendig ✓ EU-conform. Gratis advies & offerte!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "R32 Koudemiddel Airconditioning",
          description: "Installatie en onderhoud van milieuvriendelijke R32 airconditioning systemen met 75% lagere CO2-impact en superieure energie-efficiëntie",
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
            priceRange: "€€"
          }
        }}
      />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                75% Minder CO2-Impact
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Koudemiddel R32: De Milieuvriendelijke Toekomst van Airconditioning
            </h1>
            <p className="text-xl md:text-2xl text-green-50 mb-8 leading-relaxed">
              Verminder uw CO2-voetafdruk met 2,5 ton per jaar en bespaar 10-15% op energiekosten met de nieuwste generatie R32 koudemiddel - 68% minder impact op klimaatverandering dan R410A
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Phone className="h-6 w-6 mr-2" />
                Gratis Duurzaam Advies
              </Link>
              <Link
                to="/capaciteit-calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                <Calculator className="h-6 w-6 mr-2" />
                Bereken Besparing
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span>GWP 675 (vs 2088)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span>EU-Conform tot 2050+</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span>10-15% Energiebesparing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-200" />
                <span>F-gassen Gecertificeerd</span>
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
              Waarom R32 de Duurzame Keuze Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              R32 koudemiddel vertegenwoordigt de toekomst van duurzame klimaatbeheersing met bewezen milieu- en kostenbesparing
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
                Wat is R32 Koudemiddel?
              </h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  R32 (difluormethaan) is een revolutionair koudemiddel dat de airconditioning-industrie transformeert naar een duurzamere toekomst. Met een Global Warming Potential (GWP) van slechts 675 - vergeleken met 2088 voor het oudere R410A - heeft R32 een 68% lagere impact op de opwarming van de aarde. Dit betekent dat één airco met R32 over zijn levensduur van 15 jaar gemiddeld 37,5 ton minder CO2-uitstoot veroorzaakt, equivalent aan het vermijden van 150.000 kilometer autorijden.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  De Europese Unie heeft via de F-gassen verordening strenge eisen gesteld aan het gebruik van koudemiddelen om klimaatverandering te bestrijden. R32 voldoet ruimschoots aan deze regelgeving en zal tot ver na 2050 toegestaan blijven, terwijl alternatieven zoals R410A worden uitgefaseerd. Voor consumenten betekent dit dat een investering in R32 niet alleen beter is voor het milieu, maar ook toekomstbestendig - u voorkomt kostbare retrofits of vervanging over enkele jaren.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Milieu-Impact: De Cijfers Spreken
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  De milieu-impact van koudemiddelen wordt gemeten aan de hand van twee belangrijke indicatoren: Global Warming Potential (GWP) en Ozone Depletion Potential (ODP). R32 scoort op beide fronten uitstekend met een GWP van 675 en een ODP van 0, wat betekent dat het geen schade toebrengt aan de ozonlaag. Ter vergelijking: R410A heeft een GWP van 2088, en het verboden R22 had een GWP van 1810 en een ODP van 0.055.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Voor een typisch Nederlands huishouden met een 3.5 kW airco betekent de overstap naar R32 een CO2-reductie van ongeveer 2,5 ton per jaar. Dit komt overeen met het planten van 115 bomen of het vermijden van 10.000 kilometer autorijden. Over de gemiddelde levensduur van 15 jaar accumuleert deze besparing tot een indrukwekkende 37,5 ton CO2 - een substantiële bijdrage aan de klimaatdoelstellingen van Nederland en de EU.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Energie-Efficiëntie en Kostenbesparing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Naast de milieubaten biedt R32 ook concrete financiële voordelen. Door de superieure thermodynamische eigenschappen van R32 verbruiken airconditioners gemiddeld 10-15% minder energie dan vergelijkbare R410A systemen. Voor een gemiddeld huishouden betekent dit een jaarlijkse besparing van €150-250 op de energierekening, afhankelijk van het gebruik en de elektriciteitsprijs.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Bovendien hebben R32 systemen ongeveer 30% minder koudemiddel nodig vanwege de hogere efficiëntie per kilogram. Dit reduceert niet alleen de milieu-impact bij eventuele lekkages, maar verlaagt ook de kosten voor onderhoud en bijvullen. Terwijl R410A tot €80 per kilogram kan kosten, is R32 met ongeveer €25 per kilogram significant goedkoper - een besparing die vooral bij grotere commerciële systemen substantieel kan oplopen.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Veiligheid en Certificering
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Een veelgestelde vraag betreft de veiligheid van R32. R32 is geclassificeerd als A2L koudemiddel, wat staat voor lage toxiciteit (A) en lichte ontvlambaarheid (2L). In de praktijk betekent dit dat R32 onder normale omstandigheden volledig veilig is, maar dat professionele installatie en onderhoud essentieel zijn. Alle moderne R32 airconditioners zijn uitgerust met geavanceerde veiligheidsmaatregelen, waaronder lekdetectie, automatische uitschakeling en ventilatie-instructies.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Bij StayCool Airco zijn al onze monteurs F-gassen gecertificeerd, wat betekent dat zij speciaal opgeleid zijn in het veilig hanteren van moderne koudemiddelen zoals R32. Deze certificering is wettelijk verplicht en garandeert dat uw installatie voldoet aan alle EU-richtlijnen en Nederlandse veiligheidsnormen. Daarnaast voeren wij bij elke installatie een grondig lektest uit en registreren we het systeem conform de F-gassen administratie.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Technische Voordelen van R32
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  De technische eigenschappen van R32 maken het superieur aan oudere koudemiddelen. R32 heeft een hogere volumetrische koelcapaciteit, wat betekent dat systemen compacter kunnen zijn en toch dezelfde prestaties leveren. Dit resulteert in kleinere buitenunits die eenvoudiger te plaatsen zijn en minder visuele impact hebben op uw woning of bedrijfspand.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Daarnaast presteert R32 uitstekend bij extreme temperaturen. In tegenstelling tot R410A, dat bij hoge buitentemperaturen (boven 40°C) aan efficiëntie verliest, blijft R32 stabiel presteren. Dit is vooral relevant in de context van klimaatverandering, waarbij hittegolven in Nederland steeds frequenter voorkomen. Ook bij koude temperaturen (tot -15°C) functioneert R32 betrouwbaar, wat het ideaal maakt voor gebruik als warmtepomp in de winter.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg sticky top-4 border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                  R32 Voordelen
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-green-200">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Vraag Gratis Advies
                  </Link>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Bel direct: <a href="tel:0462021430" className="font-semibold text-green-700 hover:text-green-800">046 202 1430</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            R32 vs R410A vs R22: De Vergelijking
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Ontdek waarom R32 het milieuvriendelijkste én meest economische koudemiddel is
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Aspect</th>
                  <th className="px-6 py-4 text-center font-bold">R32</th>
                  <th className="px-6 py-4 text-center font-bold">R410A</th>
                  <th className="px-6 py-4 text-center font-bold">R22</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.aspect}</td>
                    <td className={`px-6 py-4 text-center ${row.winner === 'r32' ? 'bg-green-100 font-bold text-green-800' : 'text-gray-700'}`}>
                      {row.r32}
                      {row.winner === 'r32' && <CheckCircle className="h-5 w-5 text-green-600 inline ml-2" />}
                    </td>
                    <td className={`px-6 py-4 text-center ${row.winner === 'r410a' ? 'bg-green-100 font-bold text-green-800' : 'text-gray-700'}`}>
                      {row.r410a}
                    </td>
                    <td className={`px-6 py-4 text-center ${row.winner === 'r22' ? 'bg-green-100 font-bold text-green-800' : 'text-gray-700'}`}>
                      {row.r22}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Leaf className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Waarom R32 de Winnaar Is</h4>
                <p className="text-gray-700 leading-relaxed">
                  R32 scoort op alle belangrijke criteria beter dan alternatieven: 68% lagere milieu-impact, 10-15% lagere energiekosten, EU-conform tot ver na 2050, en 30% minder koudemiddel nodig. De keuze voor R32 is niet alleen beter voor het milieu, maar ook voor uw portemonnee en toekomstzekerheid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            R32 en de Toekomst van Klimaatbeheersing
          </h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              EU F-gassen Verordening en R32
            </h3>
            <p className="text-gray-700 leading-relaxed">
              De Europese F-gassen verordening (EU 517/2014) heeft als doel de uitstoot van gefluoreerde broeikasgassen met 79% te verminderen tegen 2030. Dit gebeurt via een phase-down systeem waarbij koudemiddelen met een hoge GWP geleidelijk worden uitgefaseerd. R410A, met een GWP van 2088, wordt vanaf 2025 beperkt toegepast en zal tegen 2030 grotendeels vervangen zijn. R32, met een GWP van slechts 675, valt ruim binnen de toekomstige limieten en zal tot ver na 2050 beschikbaar blijven.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Voor consumenten en bedrijven betekent dit dat een investering in R32 technologie toekomstbestendig is. U voorkomt kostbare retrofits of vervroegde vervangingen die eigenaren van R410A systemen de komende jaren mogelijk wél tegemoet kunnen zien. Bovendien stijgen de prijzen van hoog-GWP koudemiddelen door de beperkte beschikbaarheid - R410A is de afgelopen jaren al meer dan verdubbeld in prijs, terwijl R32 stabiel blijft.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Merken en Beschikbaarheid
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Alle grote airconditioning-fabrikanten hebben R32 omarmd als standaard koudemiddel. Daikin was in 2012 de pionier met de introductie van R32 systemen in Europa, gevolgd door Mitsubishi Heavy Industries, LG, Samsung en Tosot/Gree. Deze merken bieden inmiddels volledig uitontwikkelde productlijnen aan, van compacte single-split units voor kleine ruimtes tot grote multi-split systemen en commerciële VRF-installaties.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Bij StayCool Airco installeren wij uitsluitend R32 systemen van deze premium A-merken. Elk merk heeft zijn specifieke sterke punten: Daikin staat bekend om betrouwbaarheid en innovatie, Mitsubishi Heavy om stille werking en bouwkwaliteit, LG om design en smart home integratie, Samsung om geavanceerde filters en luchtkwaliteit, en Tosot/Gree om prijs-kwaliteitverhouding. Tijdens ons gratis adviesgesprek bespreken we welk merk en model het beste aansluit bij uw wensen en budget.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Installatie en Onderhoud
            </h3>
            <p className="text-gray-700 leading-relaxed">
              De installatie van een R32 airco vereist specifieke kennis en F-gassen certificering. R32 heeft andere eigenschappen dan R410A, waaronder een lagere werkdruk en andere oliespecificaties. Dit betekent dat niet elk installatiebedrijf geschikt is voor R32 systemen. Bij StayCool Airco zijn al onze monteurs F-gassen gecertificeerd en getraind in de nieuwste R32 technologie.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Een correcte installatie is cruciaal voor de levensduur, efficiëntie en veiligheid van uw systeem. Wij hanteren een zorgvuldig installatieproces: plaatsbepaling en capaciteitsberekening, professionele montage van binnen- en buitenunit, vacuümtrekken van leidingen om vocht en lucht te verwijderen, zorgvuldig vullen met R32 koudemiddel, uitgebreide testen van alle functies, en registratie in de F-gassen administratie. Elke installatie wordt afgerond met een uitgebreide uitleg over gebruik en onderhoud.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Regelmatig onderhoud is essentieel om de optimale werking en efficiëntie van uw R32 airco te behouden. Wij adviseren jaarlijkse service waarbij filters worden gereinigd, het koudemiddelniveau wordt gecontroleerd, de condensafvoer wordt doorgespoeld, elektrische verbindingen worden geïnspecteerd, en de werking wordt geoptimaliseerd. Met ons onderhoudscontract is uw systeem altijd in topconditie, wat de levensduur verlengt en energiekosten laag houdt.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              ROI en Financiële Voordelen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              De terugverdientijd van een R32 airco is aantrekkelijk, vooral in vergelijking met oudere systemen. Een gemiddelde investering van €2.500 voor een complete installatie (na ISDE subsidie) verdient zichzelf terug binnen 7-9 jaar door lagere energiekosten. Indien u een bestaand R410A of R22 systeem vervangt, is de terugverdientijd zelfs korter door de hogere efficiëntiewinst.
            </p>

            <p className="text-gray-700 leading-relaxed">
              De financiële voordelen bestaan uit meerdere componenten: 10-15% lagere energiekosten (€150-250/jaar), lagere onderhoudskosten door betrouwbaardere technologie, vermijden van toekomstige retrofitkosten, ISDE subsidie tot €750, geen risico op prijsstijgingen van uitgefaseerde koudemiddelen, en potentiële waardestijging van uw woning door een energiezuinig systeem. Over een levensduur van 15 jaar resulteert dit in een totale besparing van €3.000-5.000 ten opzichte van oudere technologie.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Bijdrage aan Klimaatdoelstellingen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Nederland heeft zich gecommitteerd aan ambitieuze klimaatdoelstellingen: 49% CO2-reductie in 2030 en klimaatneutraal in 2050. De gebouwde omgeving speelt hierin een cruciale rol, verantwoordelijk voor ongeveer 30% van de nationale CO2-uitstoot. Door te kiezen voor R32 airconditioning draagt u direct bij aan deze doelstellingen.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Een huishouden dat overschakelt van een oude R410A airco naar een moderne R32 warmtepomp (met zowel koeling als verwarming) kan hun CO2-voetafdruk met 4-6 ton per jaar reduceren. Dit komt overeen met 20-25% van de totale huishoudelijke uitstoot. Voor Limburg, met ongeveer 565.000 huishoudens, zou een transitie naar R32 technologie een jaarlijkse CO2-reductie van 1,4 miljoen ton betekenen - equivalent aan het uit de lucht halen van 700.000 auto's.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Veelgestelde Vragen over R32 Koudemiddel
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Alle antwoorden op uw vragen over het milieuvriendelijke R32 koudemiddel
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors border border-gray-200">
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
      <section className="py-16 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Leaf className="h-16 w-16 text-green-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Duurzame Klimaatbeheersing met R32?
          </h2>
          <p className="text-xl mb-8 text-green-50 leading-relaxed">
            Verminder uw CO2-voetafdruk met 2,5 ton per jaar, bespaar 10-15% op energiekosten, en investeer in toekomstbestendige technologie. Vraag nu gratis advies aan en ontdek wat R32 voor u kan betekenen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Advies Aanvragen
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
            >
              Bel Direct: 046 202 1430
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>F-gassen Gecertificeerd</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Premium A-merken</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Tot €750 Subsidie</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              <span>75% Minder CO2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde Onderwerpen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/seo/pillar-10-duurzaamheid/co2-reductie-warmtepomp" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <TrendingDown className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">CO2 Reductie Warmtepomp</h4>
              <p className="text-sm text-gray-600">Haal klimaatdoelen met warmtepomptechnologie</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/duurzame-verwarming" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <ThermometerSun className="h-8 w-8 text-orange-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Duurzame Verwarming</h4>
              <p className="text-sm text-gray-600">Afscheid van gas met moderne alternatieven</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/energielabel-verbetering" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Award className="h-8 w-8 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Energielabel Verbetering</h4>
              <p className="text-sm text-gray-600">Verhoog woningwaarde met beter label</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/circulaire-airco" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Leaf className="h-8 w-8 text-emerald-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Circulaire Airco</h4>
              <p className="text-sm text-gray-600">Recycling en levensduurverlenging</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default KoudemiddelR32Page;
