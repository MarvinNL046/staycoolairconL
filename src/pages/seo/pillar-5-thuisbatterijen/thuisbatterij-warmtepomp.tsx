import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Battery, CheckCircle, Euro, TrendingUp, Phone, Zap, Sun, Thermometer, Shield } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import FAQSchema from '../../../components/SEO/FAQSchema';

const ThuisbatterijWarmtepompPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Thuisbatterij + Warmtepomp' }
  ];

  const usps = [
    {
      icon: <Wind className="h-12 w-12 text-yellow-500" />,
      title: "Verwarm/Koel Met Zonnestroom",
      description: "Warmtepomp draait op opgeslagen zonne-energie - geen dure netstroom nodig"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "€800-1.400/Jaar Besparing",
      description: "Warmtepomp (3.000 kWh) uit batterij vs. netinkoop = €1.200 voordeel"
    },
    {
      icon: <Thermometer className="h-12 w-12 text-yellow-500" />,
      title: "Optimaal Comfort 24/7",
      description: "Batterij buffert stroompieken warmtepomp voor stabiel comfort"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "De Ultieme Energietrio",
      description: "Zonnepanelen + thuisbatterij + warmtepomp = 100% elektrisch wonen"
    }
  ];

  const benefits = [
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Warmtepomp Draaien Op Zonnestroom",
      before: "Zonder batterij: warmtepomp 's avonds op net (€0,40/kWh) = €1.200/jaar",
      after: "Met batterij: warmtepomp op opgeslagen zonnestroom (€0/kWh) = €200/jaar restinkoop",
      saving: "€1.000/jaar besparing",
      explanation: "Warmtepompen verbruiken 2.500-3.500 kWh/jaar voor verwarming/koeling. Zonder batterij draait deze 's avonds/winters op dure netstroom (€0,40/kWh). Met batterij sla je overdag zonnestroom op en gebruik deze voor warmtepomp = €1.000 besparing."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Buffering Van Stroompieken",
      before: "Zonder batterij: warmtepomp start → netpiek 3-6 kW → risico netcongestie/kosten",
      after: "Met batterij: batterij levert piekstroom → warmtepomp start soepel → geen netbelasting",
      saving: "Stabiel netwerk + toekomstbestendig",
      explanation: "Warmtepompen hebben hoge inschakelpiek (3-6 kW). Zonder batterij komt dit direct van net = belasting, mogelijk congestie-kosten (2026+). Met batterij levert thuisbatterij deze piek = stabiel, geen netbelasting, klaar voor toekomst met capaciteitstarieven."
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Zomer: Koelen Met Zonnestroom",
      before: "Zonder batterij: airco overdag direct zonnestroom, 's avonds netinkoop",
      after: "Met batterij: overtollige zonnestroom opslaan, 's avonds koelen met batterij",
      saving: "100% gratis koeling in zomer",
      explanation: "In zomer produceren zonnepanelen overdag veel stroom terwijl airco/koeling nodig is. Batterij slaat overtollige productie op voor avonduren wanneer het nog warm is. Resultaat: volledige zomer koelen zonder cent netinkoop. Pure zonnestroom!"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Winter: Verwarmen Met Opgeslagen Stroom",
      before: "Zonder batterij: winter weinig zon, warmtepomp volledig op net (€0,40/kWh)",
      after: "Met batterij: elke kWh opgeslagen zonenergie = €0,40 besparing op verwarming",
      saving: "30-50% eigen stroom ook in winter",
      explanation: "Winters produceren zonnepanelen minder (40% van zomer), maar elke kWh telt extra omdat warmtepomp juist dan veel draait. Batterij maximaliseert gebruik van elke zonnestraal. Bij 1.500 kWh winteropbrengst × €0,40 = €600 besparing wintermaanden."
    }
  ];

  const configurations = [
    {
      heatpump: "Klein (2-4 kW)",
      usage: "1.800 kWh/jaar",
      house: "Appartement, 60-80 m²",
      solar: "8 panelen (3 kWp)",
      battery: "SMILE-B3 (2,9 kWh)",
      investment: "€9.500 (panelen + batterij + warmtepomp)",
      selfSufficiency: "50-60%",
      saving: "€600/jaar (€300 verwarming + €300 zonnestroom)",
      payback: "16 jaar",
      verdict: "Basis voor klein appartement, beperkte besparing"
    },
    {
      heatpump: "Middel (4-6 kW)",
      usage: "2.800 kWh/jaar",
      house: "Tussenwoning, 100-120 m²",
      solar: "12 panelen (5 kWp)",
      battery: "SMILE5 (5-10 kWh)",
      investment: "€16.000 (panelen + batterij + warmtepomp)",
      selfSufficiency: "65-75%",
      saving: "€1.000/jaar (€600 verwarming + €400 zonnestroom)",
      payback: "16 jaar",
      verdict: "Populairste configuratie, goede balans"
    },
    {
      heatpump: "Groot (6-10 kW)",
      usage: "3.800 kWh/jaar",
      house: "Vrijstaand, 150-200 m²",
      solar: "16 panelen (6,5 kWp)",
      battery: "SMILE5 (10-15 kWh)",
      investment: "€21.000 (panelen + batterij + warmtepomp)",
      selfSufficiency: "70-80%",
      saving: "€1.400/jaar (€900 verwarming + €500 zonnestroom)",
      payback: "15 jaar",
      verdict: "Optimaal voor grote woning, hoogste comfort"
    },
    {
      heatpump: "XL 3-fase (10-15 kW)",
      usage: "5.000 kWh/jaar",
      house: "Villa/slecht geïsoleerd, 200+ m²",
      solar: "20 panelen (8 kWp)",
      battery: "SMILE-G3-T10 (15 kWh 3-fase)",
      investment: "€26.000 (panelen + batterij + warmtepomp)",
      selfSufficiency: "75-85%",
      saving: "€1.800/jaar (€1.200 verwarming + €600 zonnestroom)",
      payback: "14-15 jaar",
      verdict: "Premium oplossing grote woning, maximale onafhankelijkheid"
    }
  ];

  const seasonalStrategies = [
    {
      season: "Lente (maart-mei)",
      solar: "Hoge productie (800 kWh/maand)",
      heatpump: "Matige vraag (200 kWh/maand)",
      strategy: "Batterij maximaal benutten voor restverbruik, overtollige productie terugleveren",
      savings: "€250/maand (€160 eigen verbruik + €90 warmtepomp gratis)",
      selfSufficiency: "95%+"
    },
    {
      season: "Zomer (juni-augustus)",
      solar: "Piekproductie (1.000 kWh/maand)",
      heatpump: "Koeling (150 kWh/maand)",
      strategy: "Koeling volledig uit zonnestroom + batterij, overtollige productie opslaan/terugleveren",
      savings: "€300/maand (€200 eigen + €100 koeling gratis)",
      selfSufficiency: "100%"
    },
    {
      season: "Herfst (september-november)",
      solar: "Dalende productie (400 kWh/maand)",
      heatpump: "Stijgende vraag (300 kWh/maand)",
      strategy: "Batterij voor verwarming piekuren (ochtend/avond), overdag direct gebruik",
      savings: "€200/maand (€80 eigen + €120 verwarming)",
      selfSufficiency: "60-70%"
    },
    {
      season: "Winter (december-februari)",
      solar: "Lage productie (200 kWh/maand)",
      heatpump: "Hoge vraag (500 kWh/maand)",
      strategy: "Elke kWh opgeslagen zonenergie direct naar warmtepomp, rest netinkoop daluren",
      savings: "€100/maand (€80 eigen gebruik, €120 restinkoop)",
      selfSufficiency: "40-50%"
    }
  ];

  const tips = [
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Kies Batterij 1,5× Dagelijks Warmtepomp-Gebruik",
      description: "Vuistregel: warmtepomp 8-10 kWh/dag → batterij 10-15 kWh. Dit dekt ochtendsessie + avondsessie warmtepomp volledig uit opgeslagen zonnestroom. Te klein = onvoldoende, te groot = winteronderbenutte capaciteit.",
      saving: "70-80% warmtepomp uit batterij mogelijk"
    },
    {
      icon: <Wind className="h-8 w-8 text-yellow-500" />,
      title: "Installeer Airco + Batterij Tegelijk",
      description: "StayCool installeert zowel airco/warmtepomp ALS thuisbatterijen. Voordeel: één installateur = optimale systeemintegratie + lagere installatiekosten (€600-1.000 bespaard). Elektrische installatie, bekabeling én monitoring in één keer geregeld.",
      saving: "€600-1.000 besparing gecombineerde installatie"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Oversized Zonnepanelen Voor Winterdekking",
      description: "Warmtepompen draaien vooral in winter wanneer zonproductie laag is. Oversized zonnepanelen (8-10 kWp) zorgen dat je ook in winter voldoende opbrengst hebt voor batterij + warmtepomp. Zomers leveraged je overtollige stroom terug of gebruikt voor andere doeleinden.",
      saving: "50%+ winterzelfvoorziening mogelijk"
    },
    {
      icon: <Thermometer className="h-8 w-8 text-yellow-500" />,
      title: "Gebruik Slimme Warmtepomp-Sturing",
      description: "Moderne warmtepompen (Daikin, Mitsubishi) hebben smart grid functies: warmtepomp start automatisch wanneer batterij vol/zonnestroom beschikbaar. Optimalisatie-apps (AlphaCloud, Daikin Onecta) maximaliseren zelfverbruik en minimaliseren netinkoop.",
      saving: "10-20% extra besparing door optimalisatie"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Overweeg 3-Fase Batterij Voor Grote Warmtepomp",
      description: "Warmtepompen &gt; kW zijn vaak 3-fase. Bij 3-fase batterij (SMILE-G3-T10) balanceer je netbelasting over 3 fasen = efficiënter, snellere reactie, geen fase-onbalans. Extra investering €1.500-2.500, maar toekomstbestendig en betere prestaties.",
      saving: "Stabielere werking + lagere netkosten"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Profiteer Van ISDE Subsidie Warmtepomp",
      description: "ISDE 2026: tot €3.000 subsidie op all-electric warmtepomp. Combineer met 0% BTW op thuisbatterij + zonnepanelen = maximale korting. Aanvragen via RVO.nl. Bespaart €3.000-5.000 op totale investering. Check voorwaarden: nieuw systeem, erkende installateur (StayCool!).",
      saving: "€3.000-5.000 subsidie + BTW voordeel"
    }
  ];

  const faqs = [
    {
      question: "Waarom zou ik een thuisbatterij nemen bij een warmtepomp?",
      answer: "Warmtepompen verbruiken 2.500-3.500 kWh/jaar elektriciteit, vooral 's avonds/winters wanneer zonnepanelen weinig produceren. Zonder batterij koop je deze stroom in tegen €0,40/kWh = €1.000-1.400/jaar. Met batterij sla je overdag zonne-energie op en gebruik deze 's avonds voor warmtepomp = €1.000+ besparing. Daarnaast buffert batterij stroompieken (warmtepomp start = 3-6 kW piek), voorkomt netcongestie en maakt je toekomstbestendig voor capaciteitstarieven (2026+). De perfecte match!"
    },
    {
      question: "Hoe groot moet mijn thuisbatterij zijn bij een warmtepomp?",
      answer: "Afhankelijk van warmtepomp-vermogen en dagelijks gebruik: (1) Kleine warmtepomp 2-4 kW (1.800 kWh/jaar): SMILE-B3 2,9 kWh voldoet, dekking 50-60%. (2) Middelgrote 4-6 kW (2.800 kWh/jaar): SMILE5 5-10 kWh, dekking 65-75%. (3) Grote 6-10 kW (3.800 kWh/jaar): SMILE5 10-15 kWh, dekking 70-80%. (4) XL 3-fase 10-15 kW (5.000 kWh/jaar): SMILE-G3-T10 15 kWh, dekking 75-85%. Vuistregel: batterijcapaciteit = 1,5× dagelijks warmtepomp-verbruik (8-10 kWh/dag → 10-15 kWh batterij)."
    },
    {
      question: "Kan mijn warmtepomp volledig draaien op zonnestroom via een batterij?",
      answer: "Deels: zomermaanden 80-100%, wintermaanden 30-50%, jaargemiddeld 60-80%. Uitleg: (1) Zomer: zonnepanelen produceren overdag veel (30 kWh/dag), warmtepomp gebruikt weinig (koeling 5 kWh/dag), batterij vult makkelijk = 100% zelfvoorziening. (2) Winter: zonnepanelen produceren weinig (5-8 kWh/dag), warmtepomp gebruikt veel (verwarming 15-20 kWh/dag), batterij helpt maar niet voldoende = 30-50% zelfvoorziening, rest netinkoop. (3) Jaargemiddeld: 60-80% warmtepomp uit zonnestroom + batterij mogelijk bij goed gedimensioneerd systeem (8-10 kWp panelen + 10-15 kWh batterij)."
    },
    {
      question: "Is het voordeliger om warmtepomp + batterij tegelijk te installeren?",
      answer: "Ja, meerdere voordelen: (1) Lagere installatiekosten: gecombineerde installatie bespaart €600-1.000 (één keer installateur, bekabeling, elektrische aansluitingen). (2) Optimale systeemintegratie: warmtepomp en batterij communiceren direct, smart grid functies werken meteen. (3) Subsidie en BTW: ISDE subsidie warmtepomp (€3.000) + 0% BTW batterij/panelen = maximaal voordeel. (4) Direct optimaal rendement: batterij optimaliseert warmtepomp vanaf dag 1. (5) Één aanspreekpunt: StayCool installeert beide = duidelijkheid, garantie, service. Later toevoegen kan, maar kost €600-1.000 extra + gemiste besparing tijdens wachtperiode."
    },
    {
      question: "Wat zijn de kosten van verwarmen met warmtepomp met en zonder batterij?",
      answer: "Enorm verschil: (1) Warmtepomp zonder batterij: 3.000 kWh × €0,40/kWh netinkoop = €1.200/jaar. (2) Warmtepomp met batterij + zonnepanelen: 60% uit batterij gratis (1.800 kWh × €0) + 40% netinkoop (1.200 kWh × €0,40) = €480/jaar. Besparing: €720/jaar. (3) Vergelijk gasketel: 15 m³ gas × €1,50/m³ = €1.500/jaar (oude situatie). Verschil warmtepomp met batterij vs. gas: €1.500 - €480 = €1.020/jaar goedkoper! Terugverdientijd warmtepomp + batterij: 15-18 jaar, maar dan volledig gasvrij + comfort airco in zomer."
    },
    {
      question: "Helpt een thuisbatterij ook bij koelen met airco in de zomer?",
      answer: "Absoluut - zomer is het beste seizoen voor batterij + airco: (1) Zonnepanelen produceren piekwaarden (1.000 kWh/maand), airco gebruikt matig (150-200 kWh/maand koeling). (2) Overdag: zonnepanelen voeden direct airco + vullen batterij met overtollige stroom. (3) 's Avonds: batterij voorziet airco wanneer het nog warm is maar zon al onder. (4) Resultaat: 100% gratis koeling hele zomer! Bij 500 kWh koeling/zomer × €0,40/kWh = €200 bespaard vs. netinkoop. Bonus: overtollige zomerstroom kun je terugleveren (€0,08/kWh) of opslaan in batterij voor avondverbruik."
    },
    {
      question: "Kan StayCool Airco zowel warmtepomp als thuisbatterij installeren?",
      answer: "Ja! StayCool is specialist in zowel airco/warmtepompen ALS thuisbatterijen (AlphaESS dealer). Voordelen: (1) Totaaloplossing: één bedrijf voor complete installatie = duidelijkheid en gemak. (2) Optimale integratie: wij zorgen dat warmtepomp en batterij perfect samenwerken. (3) Lagere kosten: gecombineerde installatie = €600-1.000 korting vs. aparte installateurs. (4) Expertise: kennis van beide systemen zorgt voor beste configuratie. (5) Garantie en service: één aanspreekpunt voor onderhoud, garantie, vragen. (6) Limburg: lokale service, snelle respons, persoonlijk advies. Plan gratis intakegesprek voor jouw situatie!"
    },
    {
      question: "Hoeveel zonnepanelen heb ik nodig voor warmtepomp + thuisbatterij?",
      answer: "Afhankelijk van woning en warmtepomp, maar algemene richtlijn: (1) Klein (60-80 m²): 8-10 panelen (3-4 kWp), 2.500 kWh/jaar, dekt huis + kleine warmtepomp. (2) Middel (100-120 m²): 12-14 panelen (5-5,5 kWp), 4.000 kWh/jaar, dekt huis + middelgrote warmtepomp. (3) Groot (150-200 m²): 16-18 panelen (6,5-7 kWp), 5.500 kWh/jaar, dekt huis + grote warmtepomp. (4) Villa (200+ m²): 20-25 panelen (8-10 kWp), 7.000-8.500 kWh/jaar, dekt huis + XL warmtepomp. Vuistregel: totaalverbruik (huis + warmtepomp) × 1,2 (oversizing winter) = minimale kWp. Voorbeeld: 5.000 kWh × 1,2 = 6 kWp = 15 panelen."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij + Warmtepomp/Airco | €800-1.400/Jaar Besparing | StayCool Totaaloplossing"
        description="Warmtepomp + thuisbatterij = perfecte match ✓ Verwarm/koel met zonnestroom ✓ €1.000/jaar besparing ✓ Bufferpieken ✓ AlphaESS batterij ✓ StayCool installeert beide ✓ Limburg"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          serviceType: "Thuisbatterij Warmtepomp Installatie",
          description: "Complete installatie van thuisbatterij en warmtepomp/airco voor maximale energie-efficiëntie. Verwarm en koel uw woning met opgeslagen zonnestroom en bespaar €800-1.400 per jaar.",
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
            Thuisbatterij + Warmtepomp: Verwarm & Koel Met Zonnestroom voor €480/Jaar
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            De ultieme energietrio: zonnepanelen produceren, batterij slaat op, warmtepomp verwarmt/koelt met eigen stroom. Bespaar €800-1.400/jaar vs. netinkoop!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Totaaladvies
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk AlphaESS Batterijen
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Wind className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">StayCool = Specialist in Airco + Thuisbatterijen</p>
                <p className="text-sm">
                  Wij installeren zowel warmtepompen/airco's ALS thuisbatterijen. Totaaloplossing uit één hand met optimale systeemintegratie!
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
              Waarom Warmtepomp + Thuisbatterij de Perfecte Combinatie Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All-electric wonen met maximale zelfvoorziening en minimale kosten
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
              Waarom Warmtepomp-Bezitters Thuisbatterij Nodig Hebben
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              <strong>Warmtepompen</strong> zijn de toekomst van verwarmen en koelen: 3-5× efficiënter dan gas, comfort airco in zomer, elektrisch = duurzaam. Maar: ze verbruiken 2.500-3.500 kWh elektriciteit per jaar, vooral 's avonds (verwarming) en winters (weinig zonproductie). Zonder thuisbatterij = dure netinkoop (€0,40/kWh) = €1.000-1.400/jaar elektriciteitskosten.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Een <strong>thuisbatterij</strong> lost dit op: sla overdag zonne-energie op en gebruik deze 's avonds/winters voor warmtepomp. Bij 60-80% warmtepomp-gebruik uit batterij = €800-1.200 besparing per jaar vs. netinkoop. Daarnaast: batterij buffert stroompieken (warmtepomp start = 3-6 kW piek), voorkomt netcongestie en maakt je toekomstbestendig voor capaciteitstarieven (2026+). De perfecte match voor all-electric wonen!
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              4 Concrete Voordelen van Batterij + Warmtepomp
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
                      <span className="font-bold text-gray-900">Voordeel: </span>
                      <span className="text-xl font-bold text-green-600">{benefit.saving}</span>
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.explanation}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Welke Configuratie Past Bij Jouw Warmtepomp?
            </h2>

            <div className="space-y-8 mb-8">
              {configurations.map((config, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{config.heatpump}</h3>
                        <p className="text-sm">{config.house}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Zelfvoorziening</p>
                        <p className="text-2xl font-bold">{config.selfSufficiency}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Warmtepomp Verbruik</p>
                        <p className="text-lg font-bold text-gray-900">{config.usage}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Zonnepanelen</p>
                        <p className="text-lg font-bold text-gray-900">{config.solar}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Batterij</p>
                        <p className="text-lg font-bold text-gray-900">{config.battery}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Investering</p>
                        <p className="text-lg font-bold text-gray-900">{config.investment}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Jaarlijkse Besparing</p>
                          <p className="text-2xl font-bold text-green-600">{config.saving}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Terugverdientijd</p>
                          <p className="text-2xl font-bold text-yellow-600">{config.payback}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-center">
                      <strong>Advies:</strong> {config.verdict}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Seizoensstrategie: Optimaliseer Batterij + Warmtepomp Per Seizoen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {seasonalStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{strategy.season}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-yellow-50 rounded p-3">
                      <p className="font-bold text-gray-900">Zonne-productie:</p>
                      <p className="text-gray-700">{strategy.solar}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="font-bold text-gray-900">Warmtepomp vraag:</p>
                      <p className="text-gray-700">{strategy.heatpump}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="font-bold text-gray-900">Strategie:</p>
                      <p className="text-gray-700">{strategy.strategy}</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-bold text-gray-900">Besparing:</p>
                      <p className="text-green-600 font-bold">{strategy.savings}</p>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-bold text-gray-900">Zelfvoorziening:</p>
                      <p className="text-2xl font-bold text-yellow-600">{strategy.selfSufficiency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="font-bold text-gray-900 mb-2">❄️ Winter-Tip:</p>
              <p className="text-gray-700">
                Winters is warmtepomp-verbruik hoog (500 kWh/maand) terwijl zonproductie laag is (200 kWh/maand). Elke kWh opgeslagen zonenergie telt dubbel! Oversized zonnepanelen (8-10 kWp) zorgen dat je ook in winter voldoende productie hebt voor 40-50% zelfvoorziening. Bij dynamisch contract: laad batterij 's nachts goedkoop bij (€0,10/kWh) voor extra warmtepomp-ondersteuning.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              6 Tips Voor Optimale Warmtepomp + Batterij Combinatie
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
            Klaar Voor All-Electric Wonen Met Totaaloplossing?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            StayCool installeert zowel warmtepompen/airco's als thuisbatterijen. Totaaloplossing uit één hand met optimale systeemintegratie. Bespaar €800-1.400/jaar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Totaaladvies
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
            Veelgestelde Vragen over Thuisbatterij + Warmtepomp
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
              <p className="text-sm text-gray-600 mb-3">Basis voor alle configuraties</p>
              <p className="text-yellow-600 font-bold">70-90% zelfvoorziening</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE5 Batterij</h3>
              <p className="text-sm text-gray-600 mb-3">Populairste keuze warmtepomp</p>
              <p className="text-yellow-600 font-bold">5-30 kWh modulair</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alle Batterijen</h3>
              <p className="text-sm text-gray-600 mb-3">Compleet AlphaESS assortiment</p>
              <p className="text-yellow-600 font-bold">Vind jouw perfecte match</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Verwarm & Koel All-Electric Met Zonnestroom
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            €800-1.400/jaar besparing, 60-80% zelfvoorziening, 0% BTW, 10 jaar garantie. StayCool installeert warmtepomp + batterij: totaaloplossing uit één hand in Limburg.
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
              Bekijk AlphaESS Systemen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijWarmtepompPage;
