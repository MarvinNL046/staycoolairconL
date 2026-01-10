import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Battery, CheckCircle, Euro, TrendingUp, Phone, Zap, Sun, Building2, Shield } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijZakelijkMKBPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Thuisbatterij Zakelijk MKB' }
  ];

  const usps = [
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "€2.000-8.000/Jaar Besparing",
      description: "Peak shaving, daluren laden, EPEX-handel - zakelijk rendement veel hoger"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Peak Shaving = Lagere Netkosten",
      description: "Voorkom piekbelasting → tot 40% lagere capaciteitskosten vanaf 2026"
    },
    {
      icon: <Building2 className="h-12 w-12 text-yellow-500" />,
      title: "Fiscaal Aantrekkelijk",
      description: "KIA, EIA, MIA/Vamil aftrek + investeringsaftrek = tot 55% voordeel"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "Continuïteit Bedrijfsvoering",
      description: "Noodstroomfunctie bij stroomuitval - productie/systemen blijven draaien"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Peak Shaving: Piekbelasting Bufferen",
      before: "Zonder batterij: machines starten samen = 50 kW piek × €15/kW/maand = €750/maand capaciteitskosten",
      after: "Met batterij: batterij levert piek = 25 kW max net × €15/kW/maand = €375/maand",
      saving: "€375/maand = €4.500/jaar besparing",
      explanation: "Bedrijven betalen capaciteitstarieven (€10-20/kW/maand) vanaf 2026. Peak shaving = batterij buffert stroompieken (machines opstarten, compressoren, koeling) zodat netinkoop lager blijft. Bij 25 kW piek reduceren = €3.000-6.000/jaar besparing. ROI zakelijke batterij vaak 5-8 jaar!"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Zelfvoorziening Tijdens Bedrijfsuren",
      before: "Zonder batterij: kantoor sluit 18:00, zonne-overproductie terugleveren @ €0,08/kWh",
      after: "Met batterij: overproductie opslaan, gebruiken tijdens ochtend/avondspits = €0,40/kWh waarde",
      saving: "€2.000-4.000/jaar extra",
      explanation: "Zakelijke zonnepanelen produceren overdag (10:00-16:00), maar piekverbruik is ochtend (8-10:00) en avond (16-18:00). Batterij slaat middagproductie op voor ochtend/avondspits = 60-80% zelfvoorziening mogelijk. Bij 8.000 kWh extra eigen gebruik = €3.200/jaar vs. teruglevering €640/jaar = €2.560 verschil!"
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Dynamisch Tarieven & EPEX-Handel",
      before: "Zonder batterij: vast zakelijk tarief €0,35-0,40/kWh, geen flexibiliteit",
      after: "Met batterij: laden daluren (€0,05-0,15/kWh), gebruiken piekuren, verkopen EPEX (€0,50+/kWh)",
      saving: "€1.500-3.000/jaar arbitrage",
      explanation: "Zakelijke dynamische contracten (EPEX, Day-ahead) hebben uurtarieven €0,05-0,80/kWh. Batterij = automatische arbitrage: 's nachts laden goedkoop (€0,10/kWh), overdag gebruiken (bespaar €0,40/kWh), piekuren verkopen (€0,50-0,80/kWh). Software (AlphaCloud AI) optimaliseert automatisch. Extra inkomsten: €1.000-2.500/jaar!"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Noodstroom & Continuïteit",
      before: "Zonder batterij: stroomuitval = productie stop, datacenters/servers uit, klanten niet helpen",
      after: "Met batterij: UPS-functie 2-8 uur overbrugging, essentiële systemen blijven draaien",
      saving: "Voorkom €5.000-50.000 omzetverlies",
      explanation: "Stroomuitval kost MKB gemiddeld €5.000-50.000 per incident (productiestop, klantenverlies, data-herstel). Thuisbatterij 15-30 kWh = 2-8 uur noodstroom voor essentiële systemen (servers, koeling, alarm, kassa's). Bij 1-2 uitvallen/jaar = ROI alleen al door uitval-preventie. Productie continuïteit = bedrijfszekere investering!"
    }
  ];

  const businessCases = [
    {
      type: "Kantoor/Dienstverlening",
      size: "200-500 m², 10-25 medewerkers",
      consumption: "15.000 kWh/jaar",
      peak: "30 kW",
      solar: "20 panelen (8 kWp)",
      battery: "SMILE-G3-T10 (15 kWh 3-fase)",
      investment: "€18.500 (panelen + batterij)",
      savingsBreakdown: "Peak shaving €3.600 + zelfvoorziening €2.400 + arbitrage €1.200",
      totalSaving: "€7.200/jaar",
      payback: "2,6 jaar (na fiscaal voordeel)",
      tax: "KIA 28% + investeringsaftrek = €5.180 terug",
      verdict: "Snelste ROI, ideaal kantoren met ochtend/avondspits"
    },
    {
      type: "Winkel/Horeca",
      size: "100-300 m², koeling/verlichting",
      consumption: "25.000 kWh/jaar",
      peak: "45 kW (koeling + keuken)",
      solar: "30 panelen (12 kWp)",
      battery: "SMILE-G3-T10 (20 kWh 3-fase)",
      investment: "€24.000 (panelen + batterij)",
      savingsBreakdown: "Peak shaving €5.400 + zelfvoorziening €3.200 + noodstroom-voordeel €1.000",
      totalSaving: "€9.600/jaar",
      payback: "2,5 jaar (na fiscaal voordeel)",
      tax: "KIA 28% + EIA 45% = €8.640 terug",
      verdict: "Hoog verbruik + pieken = excellent rendement"
    },
    {
      type: "Productie/Werkplaats",
      size: "500-1.000 m², machines/gereedschap",
      consumption: "40.000 kWh/jaar",
      peak: "75 kW (machines opstarten)",
      solar: "50 panelen (20 kWp)",
      battery: "2× SMILE-G3-T10 (40 kWh 3-fase)",
      investment: "€42.000 (panelen + batterijen)",
      savingsBreakdown: "Peak shaving €9.000 + zelfvoorziening €5.000 + arbitrage €2.500",
      totalSaving: "€16.500/jaar",
      payback: "2,5 jaar (na fiscaal voordeel)",
      tax: "MIA/Vamil 45% + KIA = €15.000 terug",
      verdict: "Hoogste absolute besparing, essentieel grote pieken"
    },
    {
      type: "Datacentrum/ICT",
      size: "200-400 m², 24/7 operatie",
      consumption: "60.000 kWh/jaar",
      peak: "50 kW constant",
      solar: "40 panelen (16 kWp)",
      battery: "SMILE-G3-T10 (30 kWh 3-fase) + UPS integratie",
      investment: "€38.000 (panelen + batterij + UPS)",
      savingsBreakdown: "Arbitrage dynamisch €8.000 + zelfvoorziening €4.500 + noodstroom-waarde €3.000",
      totalSaving: "€15.500/jaar",
      payback: "2,5 jaar (na fiscaal voordeel)",
      tax: "EIA 45% + KIA 28% = €13.300 terug",
      verdict: "EPEX-handel + continuïteit = dubbele waarde"
    }
  ];

  const fiscalBenefits = [
    {
      regeling: "KIA (Kleinschaligheidsinvesteringsaftrek)",
      percentage: "28%",
      max: "€314.673 investering",
      example: "€20.000 batterij → €5.600 aftrek",
      conditions: "MKB < 250 werknemers, jaarlijkse investeringen",
      saving: "€5.600 belastingvoordeel"
    },
    {
      regeling: "EIA (Energie-investeringsaftrek)",
      percentage: "45,5%",
      max: "€138 miljoen investering",
      example: "€20.000 batterij → €9.100 aftrek",
      conditions: "Energie-efficiënte investering op Energielijst",
      saving: "€9.100 belastingvoordeel"
    },
    {
      regeling: "MIA/Vamil (Milieu-investeringsaftrek)",
      percentage: "MIA 36% + Vamil 75%",
      max: "€37,5 miljoen",
      example: "€40.000 batterij → MIA €5.760 + Vamil vrijstelling",
      conditions: "Milieuvriendelijke investering op Milieulijst",
      saving: "€5.760 + vrije afschrijving"
    }
  ];

  const tips = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Dimensioneer Op Piekbelasting, Niet Gemiddeld",
      description: "Zakelijke batterij-sizing: analyseer jouw hoogste kwartier-piek (kW) afgelopen jaar (zie energierekening). Batterij moet deze piek kunnen leveren + bufferen. Voorbeeld: 60 kW piek, batterij 30 kW output → reduceer naar 30 kW netpiek = €3.600-7.200/jaar capaciteitskosten-besparing.",
      saving: "40-60% lagere netkosten vanaf 2026"
    },
    {
      icon: <Building2 className="h-8 w-8 text-yellow-500" />,
      title: "3-Fase Systeem is Must Voor Bedrijven",
      description: "Zakelijke aansluitingen zijn altijd 3-fase. Kies SMILE-G3-T10 3-fase batterij: (1) Hogere output (11 kW vs. 5 kW 1-fase), (2) Balanceert fase-belasting, (3) Voorkomt fase-overbelasting boetes. Investering €2.000-3.000 extra, maar essentieel voor bedrijfs-toepassing.",
      saving: "Stabiele werking + voorkom boetes"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Combineer Met Dynamisch Zakelijk Contract",
      description: "Standaard zakelijke contracten = vast tarief €0,35-0,40/kWh. Dynamisch (EPEX, Tibber Business) = uurtarieven €0,05-0,80/kWh. Batterij + dynamisch contract = arbitrage €1.500-3.000/jaar extra. Software (AlphaCloud AI) automatiseert: laden goedkoop, gebruiken duur, verkopen piektarief. Must-have combinatie!",
      saving: "€1.500-3.000/jaar extra inkomsten"
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Maximaliseer Fiscaal Voordeel Met Juiste Tijdstip",
      description: "Timing = belangrijk fiscaal: (1) Investeer voor 31 december (jaar-overgang), (2) KIA + EIA combineerbaar (tot 73% aftrek!), (3) MIA/Vamil voor grote investeringen (>€40.000), (4) Investeringsaftrek 2026 laag-BTW. Plan investering met accountant voor maximaal fiscaal voordeel. Verschil: €5.000-15.000 extra terug!",
      saving: "€5.000-15.000 fiscaal voordeel optimalisatie"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Installeer UPS-Functie Voor Kritische Systemen",
      description: "Upgrade batterij met UPS-schakelaar (€800-1.500): schakelt in <20ms bij stroomuitval. Essentieel voor: datacenters (servers), productie (CNC-machines), retail (kassa/alarm), horeca (koeling). Voorkomt: dataverlies, productiestop, voedsel-bederf. Bij €10.000 schade per uitval = ROI binnen 1-2 uitvallen!",
      saving: "Voorkom €5.000-50.000 schade per uitval"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      title: "Monitor & Optimaliseer Met Zakelijke Software",
      description: "AlphaCloud Pro (zakelijk): real-time monitoring, energiemanagement, automatische optimalisatie, rapportage (ISO 50001). Features: load forecasting, automatische EPEX-handel, peak shaving controle, multi-locatie beheer. Investering: €500-1.500/jaar, besparing: €1.000-3.000/jaar extra door optimalisatie.",
      saving: "€500-1.500/jaar extra door AI-optimalisatie"
    }
  ];

  const faqs = [
    {
      question: "Waarom is thuisbatterij zakelijk aantrekkelijker dan particulier?",
      answer: "Zakelijk heeft 4× voordelen: (1) Hoger verbruik = grotere absolute besparing (€7.000-16.000/jaar vs. €800-1.500 particulier). (2) Peak shaving besparing: bedrijven betalen capaciteitstarieven (€10-20/kW/maand), batterij reduceert pieken = €3.000-9.000/jaar extra. (3) Fiscaal voordeel: KIA 28% + EIA 45% + investeringsaftrek = 50-75% terug vs. 0% particulier. (4) Continuïteit-waarde: stroomuitval kost MKB €5.000-50.000, noodstroom voorkomt dit. ROI zakelijk: 2-4 jaar na fiscaal voordeel, ROI particulier: 10-15 jaar. Zakelijk = veel aantrekkelijker!"
    },
    {
      question: "Wat is peak shaving en hoeveel bespaar ik daarmee?",
      answer: "Peak shaving = batterij buffert stroompieken zodat netinkoop laag blijft. Uitleg: (1) Bedrijven betalen capaciteitstarieven €10-20/kW/maand vanaf 2026 (Europese regelgeving). (2) Capaciteit = hoogste kwartier-piek (kW) per maand. (3) Zonder batterij: machines opstarten = 60 kW piek × €15/kW = €900/maand = €10.800/jaar. (4) Met batterij: batterij levert 30 kW piek, net 30 kW = €450/maand = €5.400/jaar. Besparing: €5.400/jaar! Bij €20.000 batterij-investering = terugverdientijd 3,7 jaar. Groter piek-verschil = hogere besparing. Check jouw energierekening (kW piek) voor jouw besparing."
    },
    {
      question: "Welke fiscale regelingen zijn er voor zakelijke thuisbatterijen?",
      answer: "3 grote regelingen (cumuleerbaar!): (1) KIA (Kleinschaligheidsinvesteringsaftrek): 28% aftrek op investeringen tot €314.673. Voorwaarde: MKB <250 werknemers. Bij €20.000 batterij: €5.600 terug. (2) EIA (Energie-investeringsaftrek): 45,5% aftrek op energie-efficiënte investeringen (Energielijst). Bij €20.000: €9.100 terug. (3) MIA/Vamil: MIA 36% aftrek + Vamil 75% vrije afschrijving (Milieulijst). Bij €40.000: €5.760 MIA + versnelde afschrijving. Maximaal combineren: KIA + EIA = tot 73% terug! Voorbeeld: €20.000 investering → €14.700 terug = netto €5.300 kosten. Terugverdientijd: 0,7 jaar! Check met accountant/adviseur welke regelingen toepasbaar."
    },
    {
      question: "Hoe groot moet mijn zakelijke thuisbatterij zijn?",
      answer: "Zakelijke sizing: 3 factoren bepalen grootte: (1) Piekbelasting (kW): analyse hoogste kwartier-piek energierekening. Batterij moet deze kunnen bufferen. Voorbeeld: 60 kW piek → 30 kWh batterij (2 uur buffering). (2) Jaarverbruik (kWh): bij 40.000 kWh/jaar → minimaal 20-30 kWh voor optimale zelfvoorziening. (3) Noodstroom-eis: hoeveel uur overbrugging essentiële systemen? 4 uur × 15 kW = 60 kWh nodig. Configuraties: (1) Klein kantoor 15.000 kWh: SMILE-T10 15 kWh. (2) Winkel/horeca 25.000 kWh: SMILE-T10 20 kWh. (3) Productie 40.000 kWh: 2× SMILE-T10 40 kWh. (4) Datacentrum 60.000 kWh: 3× SMILE-T10 60 kWh. StayCool adviseert gratis op basis jouw energierekening!"
    },
    {
      question: "Wat kost zakelijke thuisbatterij installatie?",
      answer: "Investering afhankelijk van capaciteit en complexiteit: (1) Systeem 15 kWh (SMILE-G3-T10): €12.500-15.000 (apparatuur €9.500 + installatie €3.000-5.500). (2) Systeem 20 kWh: €15.000-18.000. (3) Systeem 40 kWh (2× units): €28.000-35.000. (4) Systeem 60 kWh (3× units): €40.000-50.000. Extra kosten: 3-fase installatie €1.500-3.000, UPS-schakelaar €800-1.500, monitoring software €500-1.500/jaar, netwerk-upgrade €1.000-3.000. Fiscaal voordeel: KIA 28% + EIA 45% = tot 73% terug! Netto investering na fiscaal: €5.400-13.500 (15 kWh) tot €10.800-27.000 (60 kWh). ROI: 2-4 jaar. Check offerte met fiscaal adviseur!"
    },
    {
      question: "Kan thuisbatterij zakelijk noodstroom leveren?",
      answer: "Ja, met juiste configuratie: (1) Standaard: batterij levert 2-8 uur noodstroom afhankelijk van verbruik. 15 kWh batterij bij 5 kW verbruik = 3 uur. (2) UPS-functie: upgrade met schakelaar €800-1.500 = schakelt <20ms (geen onderbreking gevoelige apparatuur). (3) Essentiële circuits: installeer aparte noodstroom-groep (verlichting, servers, alarm, koeling). (4) Capaciteit: bepaal welke systemen essentieel + hoeveel uur overbrugging. Voorbeeld restaurant: koeling 8 kW + verlichting 2 kW = 10 kW × 4 uur = 40 kWh batterij nodig. Voordelen: voorkom productiestop (€5.000-50.000/uitval), voedsel-bederf (€2.000-10.000), dataverlies (€10.000-100.000). ROI alleen noodstroom-functie: 1-5 uitvallen. Extra zekerheid bedrijfscontinuïteit!"
    },
    {
      question: "Wat is EPEX-handel en hoe verdien ik daaraan?",
      answer: "EPEX = European Power Exchange, dagelijkse stroommarkt met uurtarieven: (1) Tarieven: €0,05-0,80/kWh afhankelijk van vraag/aanbod. Daluren (nachts/weekend) goedkoop, piekuren (ochtend/avond werkdagen) duur. (2) Arbitrage: batterij laadt goedkoop, gebruikt/verkoopt duur. Voorbeeld dag: laden 6 uur × 15 kWh @ €0,10/kWh = €9 kosten. Verkopen piek 3 uur × 15 kWh @ €0,60/kWh = €27 opbrengst. Winst: €18/dag = €540/maand = €6.480/jaar! (3) Automatisering: AlphaCloud AI + dynamisch contract (Tibber Business, Ostrom, ANWB) = volledig automatisch. (4) Realistische verwachting: €1.500-3.000/jaar extra inkomsten bij 20 kWh batterij. Voorwaarden: dynamisch zakelijk contract, batterij &gt;5 kWh, software-abonnement (€500/jaar). ROI: 5-8 jaar alleen op arbitrage!"
    },
    {
      question: "Is thuisbatterij geschikt voor mijn bedrijf?",
      answer: "Checklist geschiktheid zakelijke thuisbatterij (5 criteria): (1) ✅ Hoog verbruik &gt;5.000 kWh/jaar: hogere besparing, snellere ROI. (2) ✅ Piekbelasting &gt;0 kW: peak shaving = €3.000-9.000/jaar extra. (3) ✅ Bedrijfsuren overdag: maximaliseer zonnestroom-gebruik, zelfvoorziening 70-85%. (4) ✅ Continuïteit essentieel: noodstroom voorkomt dure uitval (horeca, productie, retail, ICT). (5) ✅ MKB &lt;250 werknemers: fiscaal voordeel KIA + EIA = 50-75% terug. Ideale branches: kantoren (hoge pieken ochtend/avond), retail/horeca (koeling + verlichting), productie (machines opstarten), datacenters (24/7 + EPEX), zorg (continuïteit essentieel). Minder geschikt: laag verbruik <10.000 kWh, geen pieken, incidentele bedrijfsvoering. StayCool analyseert jouw energierekening gratis!"
    }
  ];

  return (
    <>
      <MetaTags
        title="Zakelijke Thuisbatterij MKB | €7.000-16.000/Jaar Besparing | Peak Shaving | KIA/EIA 73% Aftrek"
        description="Thuisbatterij zakelijk = €7.000-16.000/jaar besparing ✓ Peak shaving 40% lagere netkosten ✓ KIA/EIA 73% fiscaal aftrek ✓ ROI 2-4 jaar ✓ Noodstroom ✓ StayCool Limburg"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          serviceType: "Zakelijke Thuisbatterij MKB Installatie",
          description: "Professionele thuisbatterij installatie voor bedrijven en MKB. Peak shaving, EPEX-handel, noodstroom, fiscale voordelen. Bespaar €7.000-16.000 per jaar op energiekosten.",
          provider: {
            "@type": "Organization",
            name: "StayCool Airco"
          },
          areaServed: "Limburg, Nederland"
        }}
      />

      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Zakelijke Thuisbatterij MKB: €7.000-16.000/Jaar Besparing + 73% Fiscaal Voordeel
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Peak shaving bespaart 40% netkosten, zelfvoorziening €2.000-5.000/jaar, EPEX-handel €1.500-3.000/jaar, noodstroom voorkomt dure uitval. ROI: 2-4 jaar na KIA/EIA aftrek!
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
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk Zakelijke Systemen
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Briefcase className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Zakelijk = 4× Snellere ROI vs. Particulier</p>
                <p className="text-sm">
                  Peak shaving + fiscaal voordeel + hoger verbruik = terugverdientijd 2-4 jaar (zakelijk) vs. 10-15 jaar (particulier)!
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
              Waarom Thuisbatterij Zakelijk Zo Aantrekkelijk Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veel hogere besparing en fiscale voordelen dan particulier
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
              Waarom Thuisbatterij Voor MKB Veel Aantrekkelijker Is
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              <strong>Zakelijke thuisbatterijen</strong> hebben 4× voordelen vs. particulier: (1) <strong>Peak shaving</strong>: bedrijven betalen capaciteitstarieven €10-20/kW/maand vanaf 2026, batterij buffert pieken = €3.000-9.000/jaar besparing. (2) <strong>Hoger verbruik</strong>: zakelijk 15.000-60.000 kWh/jaar vs. particulier 3.500 kWh = grotere absolute besparing (€7.000-16.000 vs. €800). (3) <strong>Fiscaal voordeel</strong>: KIA 28% + EIA 45% = tot 73% aftrek, netto investering vaak slechts €5.000-15.000.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              (4) <strong>Continuïteit-waarde</strong>: stroomuitval kost MKB €5.000-50.000 per incident (productiestop, klantenverlies), noodstroom voorkomt dit. Resultaat: ROI zakelijk 2-4 jaar vs. particulier 10-15 jaar. Bij 20 kWh batterij: €18.000 investering - €13.000 fiscaal voordeel = €5.000 netto. Besparing €7.200/jaar = terugverdientijd 0,7 jaar! Zakelijke thuisbatterij = zeer aantrekkelijke investering voor MKB.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              4 Concrete Besparingen Zakelijke Thuisbatterij
            </h2>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{benefit.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 rounded p-4">
                      <p className="text-sm font-bold text-red-700 mb-2">❌ Zonder Batterij:</p>
                      <p className="text-sm text-gray-700">{benefit.before}</p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm font-bold text-green-700 mb-2">✅ Met Batterij:</p>
                      <p className="text-sm text-gray-700">{benefit.after}</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 mb-3">
                    <p className="text-center">
                      <span className="font-bold text-gray-900">Besparing: </span>
                      <span className="text-xl font-bold text-green-600">{benefit.saving}</span>
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.explanation}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Business Cases: Van Kantoor Tot Datacentrum
            </h2>

            <div className="space-y-8 mb-8">
              {businessCases.map((businessCase, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{businessCase.type}</h3>
                        <p className="text-sm">{businessCase.size}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">ROI na fiscaal</p>
                        <p className="text-2xl font-bold">{businessCase.payback}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Jaarverbruik</p>
                        <p className="text-sm font-bold text-gray-900">{businessCase.consumption}</p>
                        <p className="text-xs text-gray-500">Piek: {businessCase.peak}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Zonnepanelen</p>
                        <p className="text-sm font-bold text-gray-900">{businessCase.solar}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Batterij</p>
                        <p className="text-sm font-bold text-gray-900">{businessCase.battery}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Investering</p>
                        <p className="text-sm font-bold text-gray-900">{businessCase.investment}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <p className="text-sm text-gray-600 mb-2">Besparing breakdown:</p>
                      <p className="text-sm text-gray-700 mb-2">{businessCase.savingsBreakdown}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Totale Besparing</p>
                          <p className="text-2xl font-bold text-green-600">{businessCase.totalSaving}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Fiscaal Voordeel</p>
                          <p className="text-xl font-bold text-blue-600">{businessCase.tax}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-center text-sm">
                      <strong>Advies:</strong> {businessCase.verdict}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Fiscale Voordelen: Tot 73% Terug!
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              MKB kan profiteren van meerdere fiscale regelingen die cumuleerbaar zijn. Dit maakt zakelijke thuisbatterij veel aantrekkelijker:
            </p>

            <div className="space-y-6 mb-8">
              {fiscalBenefits.map((fiscal, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{fiscal.regeling}</h3>
                      <p className="text-sm text-gray-600">{fiscal.conditions}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-green-600">{fiscal.percentage}</p>
                      <p className="text-sm text-gray-600">aftrek</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-gray-50 rounded p-4">
                      <p className="text-sm text-gray-600 mb-1">Maximum investering</p>
                      <p className="text-sm font-bold text-gray-900">{fiscal.max}</p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm text-gray-600 mb-1">Belastingvoordeel</p>
                      <p className="text-sm font-bold text-green-600">{fiscal.saving}</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm">
                      <strong>Voorbeeld:</strong> {fiscal.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="font-bold text-gray-900 mb-2">💰 Maximaal Fiscaal Voordeel:</p>
              <p className="text-gray-700 mb-2">
                KIA (28%) + EIA (45,5%) zijn <strong>cumuleerbaar</strong>! Bij €20.000 investering: €5.600 KIA + €9.100 EIA = <strong>€14.700 terug (73%)</strong>. Netto investering: slechts €5.300. Bij €7.200/jaar besparing = ROI 0,7 jaar!
              </p>
              <p className="text-gray-700">
                Bespreek met accountant welke regelingen toepasbaar zijn voor jouw bedrijf. Timing belangrijk: investeer voor 31 december voor maximaal fiscaal voordeel dit jaar.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              6 Tips Voor Zakelijke Thuisbatterij
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    {tip.icon}
                    <h3 className="text-lg font-bold text-gray-900 ml-3">{tip.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tip.description}</p>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-bold text-green-700">{tip.saving}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar Voor €7.000-16.000/Jaar Energiebesparing?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Gratis zakelijke analyse energierekening + ROI-berekening inclusief fiscale voordelen. Ontdek jouw besparing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Zakelijke Analyse
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
            Veelgestelde Vragen over Zakelijke Thuisbatterij
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
            Meer Over Thuisbatterijen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-zonnepanelen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Sun className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Batterij + Zonnepanelen</h3>
              <p className="text-sm text-gray-600 mb-3">Zakelijk maximale zelfvoorziening</p>
              <p className="text-yellow-600 font-bold">70-85% eigen stroom</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile-g3-t10"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE-G3-T10</h3>
              <p className="text-sm text-gray-600 mb-3">3-fase batterij perfect zakelijk</p>
              <p className="text-yellow-600 font-bold">10-30 kWh capaciteit</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alle Batterijen</h3>
              <p className="text-sm text-gray-600 mb-3">Zakelijke configuraties</p>
              <p className="text-yellow-600 font-bold">15-60 kWh systemen</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bespaar €7.000-16.000/Jaar Op Energiekosten
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            Peak shaving, EPEX-handel, noodstroom, 73% fiscaal voordeel. ROI 2-4 jaar. Complete installatie door StayCool in Limburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Plan Gratis Intake
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk Zakelijke Systemen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijZakelijkMKBPage;
