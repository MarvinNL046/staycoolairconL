import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Shield, Leaf, TrendingUp, Home, Phone, Calculator, Zap, Euro, ThermometerSun } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const EnergielabelVerbeteringPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Duurzaamheid', path: '/duurzaamheid' },
    { label: 'Energielabel Verbetering' }
  ];

  const usps = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "3-8% Waardestijging",
      description: "Verhoog de waarde van uw woning met €10.000-28.000 door beter energielabel"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Sneller Verkopen",
      description: "Woningen met label A verkopen 30% sneller dan label D-G woningen"
    },
    {
      icon: <Euro className="h-12 w-12 text-orange-600" />,
      title: "Lagere Woonlasten",
      description: "Bespaar €600-1.500 per jaar op energie door efficiënter label"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-600" />,
      title: "Subsidie Beschikbaar",
      description: "Ontvang tot €3.000 subsidie voor energiebesparende maatregelen"
    }
  ];

  const labelImpact = [
    {
      fromLabel: "G → D",
      investment: "€3.000 - €6.000",
      valueIncrease: "€8.000 - €12.000",
      energySavings: "€400 - €700/jaar",
      measures: "Spouwmuurisolatie, dakisolatie basis, HR++ glas"
    },
    {
      fromLabel: "D → C",
      investment: "€4.000 - €8.000",
      valueIncrease: "€10.000 - €18.000",
      energySavings: "€600 - €900/jaar",
      measures: "Verbeterde isolatie, hybride warmtepomp, LED verlichting"
    },
    {
      fromLabel: "C → B",
      investment: "€6.000 - €12.000",
      valueIncrease: "€14.000 - €22.000",
      energySavings: "€800 - €1.200/jaar",
      measures: "Volledige warmtepomp, vloerisolatie, slimme thermostaat"
    },
    {
      fromLabel: "B → A",
      investment: "€8.000 - €15.000",
      valueIncrease: "€18.000 - €28.000",
      energySavings: "€1.000 - €1.500/jaar",
      measures: "Warmtepomp + zonnepanelen, complete isolatie, ventilatie-WTW"
    }
  ];

  const improvementMeasures = [
    {
      measure: "Lucht-Lucht Warmtepomp",
      labelImprovement: "+2 stappen",
      investment: "€4.500 - €8.000",
      annualSavings: "€900 - €1.500",
      paybackTime: "5-6 jaar",
      priority: "Hoog"
    },
    {
      measure: "Lucht-Water Warmtepomp",
      labelImprovement: "+3 stappen",
      investment: "€10.000 - €15.000",
      annualSavings: "€1.200 - €1.800",
      paybackTime: "8-10 jaar",
      priority: "Hoog"
    },
    {
      measure: "Zonnepanelen (10 stuks)",
      labelImprovement: "+1 stap",
      investment: "€4.000 - €6.000",
      annualSavings: "€600 - €900",
      paybackTime: "5-7 jaar",
      priority: "Hoog"
    },
    {
      measure: "Spouwmuurisolatie",
      labelImprovement: "+1 stap",
      investment: "€1.200 - €2.000",
      annualSavings: "€200 - €350",
      paybackTime: "4-6 jaar",
      priority: "Hoog"
    },
    {
      measure: "Dakisolatie",
      labelImprovement: "+1 stap",
      investment: "€2.000 - €3.500",
      annualSavings: "€300 - €500",
      paybackTime: "5-7 jaar",
      priority: "Hoog"
    },
    {
      measure: "HR++ Beglazing",
      labelImprovement: "+1 stap",
      investment: "€4.000 - €8.000",
      annualSavings: "€250 - €400",
      paybackTime: "12-15 jaar",
      priority: "Gemiddeld"
    }
  ];

  const benefits = [
    "3-8% hogere verkoopprijs (€10.000-28.000)",
    "30% sneller verkopen bij label A vs D-G",
    "€600-1.500 lagere energiekosten per jaar",
    "Tot €3.000 subsidie via ISDE en gemeenten",
    "Lagere hypotheekrente (groene hypotheek)",
    "Bijdrage aan CO2-reductiedoelen",
    "Comfortabeler binnenklimaat",
    "Bescherming tegen stijgende energieprijzen"
  ];

  const faqs = [
    {
      question: "Hoeveel waarde voegt een beter energielabel toe aan mijn woning?",
      answer: "Een beter energielabel verhoogt de woningwaarde substantieel. Uit onderzoek van de Universiteit Maastricht (2020) blijkt dat elke labelstap gemiddeld 2-3% waarde toevoegt. Voor een gemiddelde Limburgse woning van €350.000 betekent dit: label G→D: +€8.000-12.000, label D→C: +€10.000-18.000, label C→B: +€14.000-22.000, label B→A: +€18.000-28.000. Deze waardevermeerdering is cumulatief: van label G naar A kan uw woning €50.000-80.000 meer waard worden. Daarnaast verkopen A-label woningen 30% sneller dan D-G woningen, wat ook financieel voordelig is (minder dubbele woonlasten, sneller beschikbaar kapitaal)."
    },
    {
      question: "Welke maatregelen verbeteren mijn energielabel het meest?",
      answer: "De meest effectieve maatregelen voor labelverbetering zijn: (1) Warmtepomp installatie - verbetert label met 2-3 stappen door drastisch lagere primaire energiebehoefte, investering €4.500-15.000, terugverdientijd 5-10 jaar. (2) Zonnepanelen - voegt 1 labelstap toe, investering €4.000-6.000, terugverdientijd 5-7 jaar. (3) Isolatie pakket (spouwmuur + dak + vloer) - verbetert label met 2-3 stappen, investering €5.000-10.000, terugverdientijd 8-12 jaar. De optimale strategie: start met isolatie (vermindert energiebehoefte), installeer daarna warmtepomp (efficiënte verwarming), en voeg zonnepanelen toe (zelfopwekking). Totale investering €13.500-31.000, labelverbetering 4-6 stappen, terugverdientijd 7-10 jaar via besparingen en waardestijging."
    },
    {
      question: "Hoe wordt het energielabel berekend?",
      answer: "Het energielabel wordt berekend op basis van primaire energieverbruik per m² woonoppervlak per jaar. Dit omvat verwarming, warm tapwater, ventilatie, en verlichting. De methodiek (NTA 8800 sinds 2021) kijkt naar: (1) Isolatiekwaliteit van schil (muren, dak, vloer, glas), (2) Verwarmingssysteem en rendement, (3) Ventilatiesysteem en warmteterugwinning, (4) Zonnepanelen en andere hernieuwbare energie. Let op: het label is theoretisch en gebaseerd op standaard gebruik. Werkelijk verbruik kan afwijken door bewoongedrag. Een warmtepomp met COP 4 telt 4x efficiënter mee dan gasketel, waardoor warmtepompen enorme impact hebben op het label - vaak 2-3 stappen verbetering alleen al door deze maatregel."
    },
    {
      question: "Krijg ik subsidie voor energielabelverbetering?",
      answer: "Ja, er zijn meerdere subsidiemogelijkheden. ISDE regeling (Investeringssubsidie Duurzame Energie): €2.500 voor warmtepomp, €2.000 voor hybride warmtepomp. Gemeentelijke regelingen in Limburg: Maastricht €1.500 extra voor gasafsluiting, Heerlen €1.000 voor energetische renovatie, Venlo €750 voor sociale huurwoningen, Sittard-Geleen €500 voor isolatie pakket. Subsidieregeling Energiebesparing Eigen Huis (SEEH): tot €2.000 voor isolatiemaatregelen. Totale subsidies kunnen oplopen tot €3.000-5.000 voor een compleet renovatiepakket. Voorwaarden: erkend installatiebedrijf (F-gassen gecertificeerd), energielabel berekening, aanvraag binnen 6 maanden. Wij verzorgen de volledige subsidieaanvraag inclusief documentatie."
    },
    {
      question: "Wat is een groene hypotheek en hoe werkt deze?",
      answer: "Een groene hypotheek is een hypotheek met rentekorting voor energiezuinige woningen (label A of B). Banken bieden 0,1-0,3% rentevoordeel omdat deze woningen lager risico vormen (lagere woonlasten, hogere waarde). Voor een hypotheek van €300.000 betekent 0,2% korting een besparing van €600 per jaar of €18.000 over 30 jaar. Daarnaast kunt u via een energiehypotheek extra lenen (tot €25.000) voor energiebesparende maatregelen, zonder LTV-verhoging. Voorwaarde: aangetoonde labelverbetering naar minimaal A of B. Na renovatie moet nieuw energielabel worden aangeleverd. Sommige banken (Triodos, ASN) bieden aanvullende voordelen zoals lagere afsluitkosten of extra borgstelling. Wij werken samen met hypotheekadviseurs gespecialiseerd in groene financiering."
    },
    {
      question: "Hoe lang duurt het om mijn energielabel te verbeteren?",
      answer: "De tijdslijn hangt af van de gekozen maatregelen. Energielabel berekening: 2-3 weken (aanvraag, inspectie, rapportage). Isolatie spouwmuren: 1-2 dagen. Dakisolatie: 2-5 dagen afhankelijk van oppervlak. HR++ beglazing: 1-3 dagen afhankelijk van aantal ramen. Lucht-lucht warmtepomp: 1 dag installatie. Lucht-water warmtepomp: 2-3 dagen installatie, mogelijk langer bij CV-aanpassingen. Zonnepanelen: 1-2 dagen installatie. Totale projectduur voor compleet renovatiepakket (isolatie + warmtepomp + zonnepanelen): 4-8 weken van start tot oplevering, waarvan 6-10 dagen actieve werkzaamheden. Wij coördineren alle disciplines (isolatie, installatie, elektra) voor een gestroomlijd proces zonder vertraging of dubbel werk."
    },
    {
      question: "Moet ik verplicht mijn energielabel verbeteren?",
      answer: "Nee, er is geen algemene verplichting om het energielabel te verbeteren. Wel gelden specifieke regels: (1) Huurwoningen: verhuurders moeten minimaal label C hebben per 2028 (particuliere verhuur) of 2030 (sociale huur). (2) Kantoorgebouwen: minimaal label C verplicht sinds 2023. (3) Energielabel is wel verplicht bij verkoop of verhuur - het certificaat moet maximaal 10 jaar oud zijn. (4) Nieuwbouw: minimaal Bijna Energie Neutraal (BENG) vanaf 2021. Hoewel niet verplicht, is labelverbetering wel sterk aan te raden omdat: woningen met slechte labels (E-G) in waarde dalen (4-8% over 5 jaar), hypotheekverstrekking wordt moeilijker voor slecht label, woonlasten blijven stijgen door hoge energieprijzen. Het is verstandig om proactief te verbeteren voordat regelgeving wordt aangescherpt."
    },
    {
      question: "Welk energielabel heeft mijn woning nu?",
      answer: "U kunt uw huidige energielabel checken op EP-Online.nl door uw postcode en huisnummer in te voeren. Alle Nederlandse woningen hebben sinds 2008 een energielabel bij verkoop/verhuur, met 10 jaar geldigheid. Als uw label ouder is dan 10 jaar of u heeft nooit een label gehad, is een nieuwe berekening nodig. Zonder label: woningen uit  minder dan 1965 hebben vaak label E-G (geen isolatie), 1965-1975 label D-E (basis isolatie), 1975-1990 label C-D (betere isolatie), 1990-2010 label B-C (HR glas),  meer dan 2010 label A-B (moderne eisen). Wij bieden gratis indicatieve labelberekening aan op basis van bouwjaar, isolatie, verwarmingssysteem en glas. Voor officiële certificering werken wij samen met EPA-adviseurs (erkende energielabel adviseurs) die binnen 2 weken een geldig certificaat leveren."
    }
  ];

  return (
    <>
      <MetaTags
        title="Energielabel Verbetering Limburg | 3-8% Waardestijging | StayCool Airco"
        description="Energielabel verbetering ✓ 3-8% hogere woningwaarde ✓ €600-1.500 besparing/jaar ✓ 30% sneller verkopen ✓ Tot €3.000 subsidie!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Energielabel Verbetering met Warmtepomp",
          description: "Verhoog uw energielabel met 2-3 stappen door moderne warmtepomp - hogere woningwaarde en lagere energiekosten",
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
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold flex items-center gap-2">
                <Award className="h-4 w-4" />
                Van Label D naar A
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Energielabel Verbetering: Verhoog Uw Woningwaarde met 3-8%
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed">
              Investeer slim in energiebesparende maatregelen en verhoog uw woningwaarde met €10.000-28.000, bespaar €600-1.500 per jaar op energie, en verkoop 30% sneller
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Phone className="h-6 w-6 mr-2" />
                Gratis Label Analyse
              </Link>
              <Link
                to="/capaciteit-calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl"
              >
                <Calculator className="h-6 w-6 mr-2" />
                Waardestijging Berekenen
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>+2-3 Label Stappen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>€10.000-28.000 Waarde</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>€600-1.500 Besparing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span>Tot €3.000 Subsidie</span>
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
              Waarom Energielabel Verbetering Loont
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investeer in labelverbetering en profiteer van hogere woningwaarde, lagere kosten, en snellere verkoop
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
                De Waarde van een Beter Energielabel
              </h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Het energielabel van uw woning heeft directe impact op de marktwaarde, verkoopsnelheid, en woonlasten. Uit onderzoek van de Universiteit Maastricht (2020) blijkt dat elke labelstap gemiddeld 2-3% waarde toevoegt. Voor een gemiddelde Limburgse woning van €350.000 betekent een verbetering van label D naar A een waardestijging van €21.000-42.000. Dit overtreft vaak ruimschoots de investeringskosten van energiebesparende maatregelen, waardoor labelverbetering niet alleen duurzaam maar ook financieel zeer aantrekkelijk is.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Naast de hogere verkoopprijs verkopen A-label woningen 30% sneller dan D-G woningen. In een krappe woningmarkt lijkt dit misschien minder relevant, maar de cijfers tonen aan dat kopers bereid zijn significant meer te betalen voor energiezuinige woningen vanwege lagere woonlasten, beter comfort, en toekomstbestendigheid. Ook voor verhuurders is een beter label waardevol: vanaf 2028 geldt een minimumeis van label C voor particuliere verhuur, en huurders zijn bereid 5-10% meer huur te betalen voor energiezuinige woningen.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Impact per Labelstap
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  De impact van labelverbetering varieert per stap. Van label G (zeer slecht) naar D (matig) is relatief eenvoudig en goedkoop: spouwmuurisolatie, dakisolatie, en HR++ glas kosten €3.000-6.000 en leveren €8.000-12.000 waardestijging plus €400-700 jaarlijkse besparing. Van label D naar C vereist meer investering (€4.000-8.000) maar levert ook meer op: €10.000-18.000 waardestijging plus €600-900 besparing. Hier komen hybride warmtepompen en verbeterde isolatie in beeld.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Van label C naar B (goed) is de stap waar warmtepompen cruciaal worden. Een volledige lucht-lucht of lucht-water warmtepomp verbetert het label direct met 2-3 stappen door de drastisch lagere primaire energiebehoefte. Investering €6.000-12.000, waardestijging €14.000-22.000, besparing €800-1.200 per jaar. Van label B naar A (zeer goed) combineert u warmtepomp met zonnepanelen voor vrijwel zelfvoorzienende woning. Investering €8.000-15.000, waardestijging €18.000-28.000, besparing €1.000-1.500 per jaar. Dit is het toppunt van energiezuinigheid en levert maximale waardestijging en woongenot.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Hoe het Energielabel Wordt Berekend
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Het energielabel wordt berekend volgens de NTA 8800 methodiek (sinds 2021) op basis van primaire energieverbruik per m² woonoppervlak per jaar. Dit omvat verwarming (60-70% van totaal), warm tapwater (15-20%), ventilatie (5-10%), en verlichting (5-10%). De berekening kijkt naar: isolatiekwaliteit van de schil (Rc-waarden van muren, dak, vloer, en U-waarde van glas), verwarmingssysteem en rendement (gasketel 90%, warmtepomp 400%), ventilatiesysteem en warmteterugwinning, en hernieuwbare energie (zonnepanelen, zonneboiler).
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Belangrijk: het label is theoretisch en gebaseerd op standaard gebruik (gemiddeld gezin, 18°C verwarming, normaal gedrag). Werkelijk verbruik kan 20-40% afwijken door bewoongedrag. Een warmtepomp heeft enorme impact omdat deze 4-5 keer efficiënter telt dan een gasketel in primaire energie. Waar een gasketel 1 m³ gas verbruikt (1 eenheid primaire energie), verbruikt een warmtepomp 0,25 kWh elektriciteit die telt als 0,25 × 1,8 (Nederlandse elektriciteitsmix) = 0,45 eenheid primaire energie. Dit maakt warmtepompen 55% efficiënter in de labelberekening - vandaar het grote effect op het label.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Warmtepomp: Snelste Labelverbetering
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  De installatie van een warmtepomp is veruit de effectiefste maatregel voor snelle labelverbetering. Een lucht-lucht warmtepomp verbetert het label direct met 2 stappen door het hoge rendement (COP 4-5) en lage primaire energiebehoefte. Investering €4.500-8.000 na subsidie, terugverdientijd 5-6 jaar via besparingen en waardestijging. Een lucht-water warmtepomp die de complete CV-ketel vervangt verbetert het label met 3 stappen. Investering €10.000-15.000 na subsidie, terugverdientijd 8-10 jaar.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Het grote voordeel van warmtepompen ten opzichte van isolatie is de directe impact op de energieprestatie. Isolatie verlaagt de energiebehoefte (minder warmte nodig), maar een warmtepomp verlaagt de primaire energiebehoefte (efficiëntere warmteopwekking). In de labelberekening weegt dit zwaarder, waardoor warmtepompen meer labelstappen opleveren per geïnvesteerde euro. De optimale strategie: start met basis isolatie (spouwmuren, dak) om warmtebehoefte te verlagen, installeer daarna warmtepomp voor maximaal effect, en voeg eventueel zonnepanelen toe voor label A.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg sticky top-4 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  Label Voordelen
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
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Gratis Label Scan
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

      {/* Label Impact Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            ROI per Labelverbetering
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Investering, waardestijging, en energiebesparing per labelstap (basis €350.000 woning)
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Labelstap</th>
                  <th className="px-6 py-4 text-center font-bold">Investering</th>
                  <th className="px-6 py-4 text-center font-bold">Waardestijging</th>
                  <th className="px-6 py-4 text-center font-bold">Besparing/Jaar</th>
                  <th className="px-6 py-4 text-left font-bold">Maatregelen</th>
                </tr>
              </thead>
              <tbody>
                {labelImpact.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-bold text-gray-900">{row.fromLabel}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.investment}</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">{row.valueIncrease}</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700">{row.energySavings}</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{row.measures}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Positieve ROI Gegarandeerd</h4>
                <p className="text-gray-700 leading-relaxed">
                  Voor alle labelverbeteringen geldt: waardestijging overtreft investering. Van label G naar A levert €50.000-80.000 waardestijging op €21.000-37.000 investering = €29.000-43.000 netto winst. Plus €1.400-1.500 jaarlijkse energiebesparing gedurende 20+ jaar = €28.000-30.000 extra. Totaal voordeel: €57.000-73.000.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improvement Measures Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Vergelijk Energiebesparende Maatregelen
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Maatregel</th>
                  <th className="px-6 py-4 text-center font-bold">Label Impact</th>
                  <th className="px-6 py-4 text-center font-bold">Investering</th>
                  <th className="px-6 py-4 text-center font-bold">Besparing/Jaar</th>
                  <th className="px-6 py-4 text-center font-bold">Terugverdientijd</th>
                  <th className="px-6 py-4 text-center font-bold">Prioriteit</th>
                </tr>
              </thead>
              <tbody>
                {improvementMeasures.map((measure, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{measure.measure}</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700">{measure.labelImprovement}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{measure.investment}</td>
                    <td className="px-6 py-4 text-center font-bold text-green-700">{measure.annualSavings}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{measure.paybackTime}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        measure.priority === 'Hoog' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {measure.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Subsidies en Financiering
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              ISDE Subsidie
            </h3>
            <p className="text-gray-700 leading-relaxed">
              De belangrijkste subsidieregeling voor energielabelverbetering is ISDE (Investeringssubsidie Duurzame Energie). Voor warmtepompen ontvangt u €2.500 (volledige warmtepomp) of €2.000 (hybride). Voorwaarden: erkend installatiebedrijf met F-gassen certificering, minimaal energielabel A++ voor het systeem, aanvraag binnen 6 maanden na installatie. De subsidie wordt binnen 13 weken uitbetaald na goedkeuring. Budget is beperkt en geldt op = op basis, dus tijdig aanvragen is cruciaal.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Gemeentelijke Regelingen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Veel gemeenten in Limburg bieden aanvullende subsidies voor energiebesparende maatregelen. Maastricht verstrekt €1.500 extra bij volledige gasafsluiting plus warmtepomp. Heerlen biedt €1.000 voor pakket energetische renovatie (isolatie + warmtepomp). Venlo heeft specifieke regeling van €750 voor sociale huurwoningen. Sittard-Geleen subsidieert €500 voor isolatiepakket. Roermond biedt €300 korting op energielabel berekening bij renovatie. Totale cumulatieve subsidies kunnen oplopen tot €3.000-5.000 voor compleet renovatiepakket.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Groene Hypotheek
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Een groene hypotheek biedt 0,1-0,3% rentevoordeel voor energiezuinige woningen (label A of B). Voor hypotheek van €300.000 betekent 0,2% korting een besparing van €600 per jaar of €18.000 over 30 jaar. Daarnaast kunt u via energiehypotheek extra lenen voor energiebesparende maatregelen (tot €25.000) zonder LTV-verhoging. Banken zoals Triodos, ASN, Rabobank, en ING bieden groene hypotheken met aanvullende voordelen zoals lagere afsluitkosten, extra borgstelling, of gratis energieadvies.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Volledige Subsidie Service
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Bij StayCool Airco verzorgen wij de volledige subsidieaanvraag voor u: (1) Inventarisatie welke subsidies van toepassing zijn, (2) Berekening energielabel voor en na maatregelen, (3) Samenstellen aanvraagdossier met alle documentatie, (4) Indienen aanvragen bij RVO en gemeente, (5) Communicatie tijdens behandeling, (6) Controle op correcte uitbetaling. U hoeft zich geen zorgen te maken over administratieve rompslomp - wij regelen alles en garanderen maximale subsidie-uitkering conform regelgeving.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Veelgestelde Vragen over Energielabel Verbetering
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Alle antwoorden op uw vragen over energielabel en woningwaarde
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
      <section className="py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-blue-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Verhoog Uw Energielabel en Woningwaarde
          </h2>
          <p className="text-xl mb-8 text-blue-50 leading-relaxed">
            Investeer slim in energiebesparende maatregelen en verhoog uw woningwaarde met €10.000-28.000. Bespaar €600-1.500 per jaar, verkoop 30% sneller, en ontvang tot €3.000 subsidie. Vraag nu gratis label analyse aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Label Analyse
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
              <TrendingUp className="h-5 w-5" />
              <span>3-8% Waardestijging</span>
            </div>
            <div className="flex items-center gap-2">
              <Euro className="h-5 w-5" />
              <span>€600-1.500 Besparing</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>+2-3 Label Stappen</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Tot €3.000 Subsidie</span>
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
              <p className="text-sm text-gray-600">75% milieuvriendelijker</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/co2-reductie-warmtepomp" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">CO2 Reductie</h4>
              <p className="text-sm text-gray-600">4-6 ton besparing per jaar</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/duurzame-verwarming" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <ThermometerSun className="h-8 w-8 text-orange-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Duurzame Verwarming</h4>
              <p className="text-sm text-gray-600">Afscheid van gas</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/circulaire-airco" className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Zap className="h-8 w-8 text-cyan-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Circulaire Airco</h4>
              <p className="text-sm text-gray-600">Recycling en levensduur</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnergielabelVerbeteringPage;
