import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, CheckCircle, Shield, Phone, Battery, Calendar, TrendingDown, ArrowRight, AlertTriangle, Award } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijOnderhoudPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Onderhoud & Garantie' }
  ];

  const usps = [
    {
      icon: <Wrench className="h-12 w-12 text-yellow-500" />,
      title: "Onderhoudsvrij",
      description: "LFP-technologie: geen periodiek onderhoud, geen vervangingen, geen kosten"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "10 Jaar Garantie",
      description: "Volledige garantie op batterij, inverter en installatie - zorgeloos"
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-yellow-500" />,
      title: "&lt;10% Degradatie/10 Jaar",
      description: "LFP batterijen behouden &gt;90% capaciteit na 6.000+ cycli (15-20 jaar)"
    },
    {
      icon: <Calendar className="h-12 w-12 text-yellow-500" />,
      title: "15-20 Jaar Levensduur",
      description: "Verwachte levensduur: minimaal 15 jaar, vaak 20+ jaar bij normaal gebruik"
    }
  ];

  const maintenanceTasks = [
    {
      frequency: "Nooit Nodig",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      tasks: [
        {
          task: "Batterij Cellen Vervangen",
          why: "LFP-cellen degraderen &lt;1% per jaar, 15-20 jaar levensduur zonder vervanging",
          cost: "€0",
          note: "In tegenstelling tot lead-acid batterijen die 3-5 jaar meegaan"
        },
        {
          task: "Elektrolyt Bijvullen",
          why: "LFP is sealed system, geen vloeistoffen die bijgevuld moeten worden",
          cost: "€0",
          note: "Lead-acid batterijen vereisen jaarlijks elektrolyt check"
        },
        {
          task: "Periodieke Kalibratie",
          why: "BMS (Battery Management System) kaliberen automatisch continu",
          cost: "€0",
          note: "Geen handmatige kalibratie nodig"
        },
        {
          task: "Koelsysteem Onderhoud",
          why: "Passieve koeling (natuurlijke convectie), geen bewegende delen of filters",
          cost: "€0",
          note: "Actieve koeling (ventilator) alleen bij zeer hoge temperaturen, zelfreinigend"
        }
      ]
    },
    {
      frequency: "1x per Jaar (Optioneel)",
      icon: <Calendar className="h-8 w-8 text-yellow-500" />,
      tasks: [
        {
          task: "Visuele Inspectie",
          why: "Check op beschadigingen, vocht, vreemde geluiden - puur preventief",
          cost: "Zelf doen: €0, Professional check: €75-150 (indien gewenst)",
          howTo: "Kijk naar batterij behuizing, check LED-status, luister naar ongebruikelijke geluiden, voel temperatuur (mag handwarm zijn)"
        },
        {
          task: "Ruimte Schoonmaken",
          why: "Stofophoping op ventilatieopeningen kan koeling belemmeren",
          cost: "Zelf doen: €0",
          howTo: "Stof ventilatieopeningen af met droge doek, houd 10cm vrije ruimte rondom batterij"
        },
        {
          task: "Firmware Update Checken",
          why: "AlphaESS brengt updates uit met verbeteringen en nieuwe functies",
          cost: "Gratis (OTA via app)",
          howTo: "AlphaCloud app → Diagnostics → Check for Updates → Install indien beschikbaar (duurt 5-10 min)"
        }
      ]
    },
    {
      frequency: "1x per 5 Jaar (Aanbevolen)",
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      tasks: [
        {
          task: "Professionele Inspectie",
          why: "Complete systeemcheck door installateur: bekabeling, aansluitingen, veiligheid",
          cost: "€150-250 (niet verplicht, wel aanbevolen)",
          includes: "Elektrische metingen, isolatieweerstand, aardlekschakelaar test, software check, rapportage"
        },
        {
          task: "CT-Sensor Kalibratie",
          why: "Check of CT-sensor nog correct meet (kan na jaren licht afwijken)",
          cost: "Inclusief bij professionele inspectie",
          impact: "Verbeterde nauwkeurigheid monitoring en laad/ontlaad optimalisatie"
        }
      ]
    }
  ];

  const warrantyDetails = [
    {
      component: "Batterij Cellen (LFP)",
      coverage: "10 jaar garantie op capaciteit &gt;70% na 6.000 cycli",
      details: "AlphaESS garandeert minimaal 70% restcapaciteit na 6.000 volledige cycli (90% DoD) binnen 10 jaar. Bij 1 cyclus/dag = 16+ jaar gebruik. Degradatie typisch &lt;10% over 10 jaar.",
      claim: "Via AlphaESS support: foto's, serienenummer, cyclus data. Vervanging binnen 2 weken indien onder 70%.",
      exclusions: "Fysieke schade, waterschade, verkeerd gebruik (overbelasting), ongeautoriseerde modificaties"
    },
    {
      component: "Inverter & BMS",
      coverage: "10 jaar volledige garantie op defecten",
      details: "Alle inverter componenten, BMS (Battery Management System), elektronica gedekt. Vervanging bij defect zonder kosten.",
      claim: "Via AlphaESS support of installateur. Remote diagnostics vaak mogelijk. Vervanging binnen 1 week.",
      exclusions: "Blikseminslag schade (verzekering), overspanning door netproblemen (verzekering), eigen schuld"
    },
    {
      component: "Installatie & Bekabeling",
      coverage: "10 jaar garantie op vakmanschap",
      details: "Wij garanderen correcte installatie volgens NEN1010. Bij gebreken door installatiefout: gratis herstel of correctie.",
      claim: "Direct bij StayCool Airco. Wij komen binnen 48 uur kijken en herstellen indien nodig.",
      exclusions: "Wijzigingen door derden, natuurrampen, normale slijtage externe bekabeling"
    },
    {
      component: "AC-Koppelkast & Componenten",
      coverage: "10 jaar garantie op materiaal",
      details: "Aardlekschakelaar, automaten, CT-sensor, bekabeling - alles gedekt bij fabricagefout of defect.",
      claim: "Via StayCool Airco. Vervanging defect component binnen 1 week.",
      exclusions: "Normale slijtage contactpunten (na 15-20 jaar), externe beschadiging"
    }
  ];

  const lifespanFactors = [
    {
      factor: "Cycli Aantal",
      impact: "Zeer Hoog",
      description: "AlphaESS LFP: 6.000+ cycli bij 90% DoD. Bij 1 cyclus/dag = 16+ jaar. Bij 0,7 cycli/dag = 23 jaar.",
      optimization: "Optimaal: 0,7-1,2 cycli/dag. Vermijd dagelijks volledig leeg (maar LFP kan dit wel aan beter dan NMC).",
      calculation: "1 cyclus = volledig vol → volledig leeg → volledig vol. Halve cyclus = 50% → 0% → 50%."
    },
    {
      factor: "Diepte van Ontlading (DoD)",
      impact: "Gemiddeld (LFP = Laag)",
      description: "LFP is ongevoelig voor diepe ontlading. 90% DoD standaard is geen probleem. NMC batterijen degraderen sneller bij &gt;80% DoD.",
      optimization: "LFP: gebruik volle range (10-100%), geen zorgen. Systeem blokkeert onder 10% SOC (veiligheid).",
      advantage: "LFP groot voordeel: geen baby-ing nodig zoals bij NMC. Maximale capaciteit benutten zonder levensduur verlies."
    },
    {
      factor: "Temperatuur",
      impact: "Hoog",
      description: "Optimaal: 15-25°C. Acceptabel: 0-40°C. &gt;40°C versnelt degradatie. &lt;0°C vermindert performance (maar geen schade).",
      optimization: "Plaats binnen indien mogelijk (garage, schuur, kelder). Buiten: in schaduw, niet direct zonlicht. AlphaESS heeft ingebouwde temperatuur management.",
      protection: "BMS vermindert laad/ontlaad vermogen bij extreme temperaturen (bescherming). Verwarming optioneel bij <-10°C."
    },
    {
      factor: "Laad/Ontlaad Snelheid (C-rate)",
      impact: "Laag (bij normaal gebruik)",
      description: "C-rate = vermogen / capaciteit. 1C = 5kW voor 5kWh batterij. AlphaESS: max 1-2C, optimaal voor levensduur.",
      optimization: "Normale huishoudelijke gebruik = 0,5-1C. Geen zorgen. Alleen extreme snelladen (&gt;C) versnelt degradatie.",
      reality: "Thuisbatterijen gebruiken conservatieve C-rates. Dit is geen issue in praktijk."
    },
    {
      factor: "Tijd op Hoge SOC (&gt;5%)",
      impact: "Zeer Laag (LFP = Verwaarloosbaar)",
      description: "NMC batterijen degraderen sneller bij lange tijd op 100%. LFP is hier ongevoelig voor. Geen probleem batterij dagenlang vol te laten staan.",
      optimization: "LFP: geen actie nodig. Batterij mag vol blijven staan zonder nadelen. Ideaal voor zomerperiode met veel zon.",
      advantage: "Ander groot LFP voordeel: storage mode (lang vol) geen probleem. NMC vereist 50-80% storage SOC."
    },
    {
      factor: "Firmware & BMS Kwaliteit",
      impact: "Hoog",
      description: "Goed BMS beschermt tegen overbelasting, oververhitting, te diepe ontlading. AlphaESS heeft premium BMS met 20+ jaar ervaring.",
      optimization: "Houd firmware up-to-date (gratis updates via app). Verbeteringen in BMS algoritmes verlengen levensduur.",
      quality: "AlphaESS: tier-1 producent met eigen R&D. BMS is kritische component - niet besparen op merk."
    }
  ];

  const degradationData = [
    {
      year: "Jaar 1-3",
      expectedCapacity: "98-100%",
      cyclesUsed: "0-1.000 cycli",
      description: "Vrijwel geen degradatie. Batterij presteert als nieuw. Initiële 'break-in' periode.",
      performance: "Optimaal, geen merkbaar verlies"
    },
    {
      year: "Jaar 4-7",
      expectedCapacity: "95-98%",
      cyclesUsed: "1.000-2.500 cycli",
      description: "Minimale degradatie: 0,5-1% per jaar. Nauwelijks merkbaar in dagelijks gebruik.",
      performance: "Excellent, <5% capaciteitsverlies"
    },
    {
      year: "Jaar 8-10",
      expectedCapacity: "90-95%",
      cyclesUsed: "2.500-3.500 cycli",
      description: "Geleidelijke degradatie. Nog altijd &gt;90% capaciteit, ruim binnen garantie (&gt;70%).",
      performance: "Zeer goed, systeem volledig functioneel"
    },
    {
      year: "Jaar 11-15",
      expectedCapacity: "85-90%",
      cyclesUsed: "3.500-5.500 cycli",
      description: "Merkbare maar beperkte capaciteitsverlies. Nog 85-90% beschikbaar. Besparingen blijven significant.",
      performance: "Goed, eventueel verbruik aanpassen"
    },
    {
      year: "Jaar 16-20",
      expectedCapacity: "75-85%",
      cyclesUsed: "5.500-7.000 cycli",
      description: "Na garantieperiode. Batterij nog steeds bruikbaar maar met gereduceerde capaciteit. Overweeg vervanging bij <75%.",
      performance: "Acceptabel, consider replacement planning"
    },
    {
      year: "Jaar 20+",
      expectedCapacity: "65-75%",
      cyclesUsed: ">7.000 cycli",
      description: "End-of-life bereikt. Batterij kan nog werken maar capaciteit flink verminderd. Tijd voor upgrade/vervanging.",
      performance: "Beperkt, vervanging aanbevolen"
    }
  ];

  const commonIssues = [
    {
      issue: "Batterij laadt niet op",
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      possibleCauses: [
        "Geen PV-overschot (verwachting vs. realiteit)",
        "CT-sensor verkeerd gepolariseerd (meet omgekeerde richting)",
        "Werkingsmodus verkeerd ingesteld (bijv. back-up only)",
        "BMS bescherming actief (temperatuur, overspanning)",
        "Software bug (firmware update nodig)"
      ],
      solutions: [
        "Check PV-opbrengst in app: is er overschot?",
        "Check CT-sensor: klem juiste kant op? (pijl richting net)",
        "Check werkingsmodus in app: moet op 'Self-consumption' staan",
        "Check foutcodes in app: BMS bescherming actief?",
        "Update firmware via app (vaak oplost software issues)"
      ],
      whenToCall: "Als geen PV-overschot is en batterij nog steeds niet laadt: bel installateur"
    },
    {
      issue: "Batterij ontlaadt niet",
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      possibleCauses: [
        "Geen tekort (u verbruikt minder dan PV levert)",
        "SOC onder ingestelde minimum (bijv. 20% back-up reserve)",
        "Ontlaad limiet bereikt (te laag vermogen ingesteld)",
        "BMS bescherming: temperatuur te laag (&lt;0°C)",
        "Verkeerde werkingsmodus (bijv. laden only)"
      ],
      solutions: [
        "Check verbruik vs PV in app: is er tekort?",
        "Check SOC% en minimum instellingen in app",
        "Check ontlaad limiet in app: verhoog indien te laag",
        "Check temperatuur: batterij warmt zichzelf op indien nodig",
        "Check werkingsmodus: moet 'Self-consumption' zijn"
      ],
      whenToCall: "Als tekort aanwezig is maar batterij niet ontlaadt: bel installateur"
    },
    {
      issue: "App toont offline / geen verbinding",
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      possibleCauses: [
        "WiFi verbinding verbroken (router reset, wachtwoord gewijzigd)",
        "Internetstoring bij u thuis",
        "AlphaESS cloud servers tijdelijk offline (zeldzaam)",
        "4G module defect (indien 4G versie)",
        "Firmware crash (zeldzaam)"
      ],
      solutions: [
        "Check WiFi: staat batterij nog in router device lijst?",
        "Herstart router en batterij (power cycle)",
        "Check AlphaESS status page: cloud beschikbaar?",
        "Probeer lokaal netwerk toegang (zelfde WiFi als batterij)",
        "Factory reset WiFi via display menu (laatste optie)"
      ],
      whenToCall: "Als na 24 uur nog offline: bel installateur of AlphaESS support"
    },
    {
      issue: "Foutmelding op display/app",
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      possibleCauses: [
        "BMS bescherming actief (oververhitting, onderspanning, etc.)",
        "Communicatie fout tussen componenten",
        "Grid voltage out of range (netspanning te hoog/laag)",
        "Batterij cel balancering (automatisch proces)",
        "Hardware defect (zeldzaam)"
      ],
      solutions: [
        "Noteer foutcode (bijv. BMS-003, INV-012) en zoek in AlphaESS faq",
        "Check app voor extra details en aanbevolen actie",
        "Veel foutcodes: tijdelijke warnings, lossen zichzelf op",
        "Persistent error &gt;4u: contacteer support met foutcode",
        "Nooit zelf openen of modificeren (garantie vervalt)"
      ],
      whenToCall: "Bij persistente foutcode &gt;4 uur of rode LED: bel direct"
    },
    {
      issue: "Onverwacht hoog verbruik van net",
      icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
      possibleCauses: [
        "Batterij capaciteit overschat (te klein voor verbruik)",
        "Verbruik hoger dan gedacht (nieuwe apparaten?)",
        "Seizoen effect (winter = minder PV, meer verbruik)",
        "Batterij degradatie (na 10+ jaar, capaciteitsverlies)",
        "CT-sensor meet niet correct (kalibratie nodig)"
      ],
      solutions: [
        "Check dagelijkse grafieken: wanneer netinkoop? 's Avonds laat = batterij leeg = normaal",
        "Check verbruik vs. capaciteit: 10 kWh avond verbruik met 5 kWh batterij = 5 kWh netinkoop onvermijdelijk",
        "Check seizoen: winter = 50-70% minder PV dan zomer",
        "Check SOH in app: &gt;90% = batterij nog goed",
        "Overweeg gedragsaanpassing of capaciteit uitbreiden (SMILE5 modulair)"
      ],
      whenToCall: "Als verbruik plots verhoogd zonder reden: check CT-sensor kalibratie"
    }
  ];

  const faqs = [
    {
      question: "Hoeveel onderhoud heeft mijn thuisbatterij nodig?",
      answer: "Praktisch nul! AlphaESS LFP-batterijen zijn onderhoudsvrij. Geen periodieke vervangingen, geen elektrolyt bijvullen, geen professionele service nodig. Aanbevolen: 1x per jaar visuele inspectie (zelf doen) en stofafvegen. Optioneel: 1x per 5 jaar professionele check (€150-250) voor complete systeemdiagnose. Firmware updates via app (gratis, 2x per jaar gemiddeld). Totale onderhoudskosten over 15 jaar: €0-750 (vrijwel verwaarloosbaar)."
    },
    {
      question: "Hoe lang gaat mijn batterij mee en wat is de degradatie?",
      answer: "AlphaESS LFP-batterijen: 15-20 jaar levensduur, 6.000+ cycli gegarandeerd. Degradatie: &lt;1% per jaar, na 10 jaar nog &gt;90% capaciteit. Na 15 jaar: 85-90% capaciteit - nog steeds excellent bruikbaar. Garantie: &gt;70% na 10 jaar. Ter vergelijking: lead-acid 3-5 jaar, NMC 10-12 jaar. LFP is meest duurzame technologie. Bij 1 cyclus/dag: 16+ jaar, bij 0,7 cyclus/dag: 23+ jaar gebruik mogelijk."
    },
    {
      question: "Wat dekt de 10 jaar garantie precies?",
      answer: "Volledige dekking: (1) Batterij cellen: &gt;70% capaciteit na 6.000 cycli binnen 10 jaar, (2) Inverter & BMS: alle elektronica en componenten, (3) Installatie: vakmanschap en bekabeling, (4) AC-kast: aardlekschakelaar, automaten, CT-sensor. Niet gedekt: fysieke schade, waterschade, bliksem (verzekering), wijzigingen door derden, normale slijtage externe bekabeling na 15+ jaar. Claim: via AlphaESS support of StayCool Airco, vervanging binnen 1-2 weken."
    },
    {
      question: "Wat zijn de kosten na aanschaf?",
      answer: "Vrijwel geen! Jaarlijkse kosten: €0-50 optioneel (verzekeringspremie, niet verplicht). Onderhoudskosten: €0 (onderhoudsvrij). Firmware updates: gratis. Optionele professional check 1x/5 jaar: €150-250. Totaal over 15 jaar: €0-750 onderhoud + eventueel €750 verzekering = <€1.500 totaal. Ter vergelijking: lead-acid batterijen €3.000-5.000 vervangingskosten over 15 jaar. Besparing op energie overtreft kosten 20-30x."
    },
    {
      question: "Hoe weet ik of mijn batterij nog gezond is?",
      answer: "Check in AlphaCloud app: (1) SOH% (State of Health): &gt;90% = excellent, 80-90% = goed, &lt;80% = degradatie zichtbaar, (2) Cycli teller: <3.000 cycli na 10 jaar = laag gebruik, &gt;.000 = intensief gebruik, (3) Capaciteitstest: laad volledig, ontlaad volledig, meet kWh - vergelijk met origineel, (4) Besparingen trend: dalen besparingen onverklaarbaar? Mogelijk capaciteitsverlies. Normale degradatie: 0,5-1% per jaar, onzichtbaar in dagelijks gebruik tot jaar 10+."
    },
    {
      question: "Wat als mijn batterij kapot gaat na de garantieperiode?",
      answer: "Na 10 jaar garantie: (1) Batterij degradatie 85-90% = nog jaren bruikbaar, geen vervanging nodig, (2) Defect batterij: vervanging €3.000-6.000 (prijzen dalen, LFP steeds goedkoper), (3) Defect inverter: vervanging €1.500-2.500, (4) Reparatie mogelijk: AlphaESS service center kan veel repareren. Realiteit: meeste batterijen halen 15-20 jaar zonder defecten. Na 15 jaar: upgrade naar nieuwere technologie vaak aantrekkelijker dan reparatie (betere specs, lagere prijzen)."
    },
    {
      question: "Kan ik de batterij zelf onderhouden of moet ik een professional inhuren?",
      answer: "Zelf doen: (1) Visuele inspectie jaarlijks: check behuizing, LED-status, vreemde geluiden (5 min), (2) Stof afvegen ventilatieopeningen (5 min), (3) Firmware updates via app installeren (10 min), (4) App monitoring: check grafieken en alerts regelmatig. Professional: (1) 1x per 5 jaar: complete inspectie aanbevolen maar niet verplicht (€150-250), (2) Bij problemen: altijd professional, NOOIT zelf openen (gevaarlijk + garantie vervalt). Conclusie: 95% zelf doen, 5% professional bij problemen of gewenste zekerheid."
    },
    {
      question: "Hoe voorkom ik degradatie en verleng ik de levensduur?",
      answer: "LFP batterijen zijn zeer robuust, maar deze tips helpen: (1) Temperatuur: plaats binnen indien mogelijk, vermijd directe zon (ideaal 15-25°C), (2) Cycli: 0,7-1,2 cycli/dag optimaal - niet dagenlang ongebruikt laten maar ook niet overbelasten, (3) Firmware: houd up-to-date voor BMS optimalisaties, (4) Ventilatie: houd 10cm vrije ruimte, ruim stof op, (5) Monitoring: check app regelmatig voor afwijkingen. Grootste invloed: temperatuur en cycli aantal. Goede keus locatie (garage binnen, kelder) kan 2-3 jaar levensduur schelen."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Onderhoud, Levensduur & Garantie | AlphaESS | StayCool Airco"
        description="Thuisbatterij onderhoud ✓ Onderhoudsvrij LFP ✓ 15-20 jaar levensduur ✓ 10 jaar garantie ✓ &lt;10% degradatie ✓ 6.000+ cycli ✓ Limburg!"
      />

      <SchemaMarkup
        type="Article"
        data={{
          "@type": "Article",
          headline: "Thuisbatterij Onderhoud, Levensduur en Garantie Complete Gids",
          description: "Uitgebreide handleiding over onderhoud, levensduur, degradatie en garantie van AlphaESS LFP thuisbatterijen.",
          datePublished: "2025-01-15",
          dateModified: "2025-01-15",
          author: {
            "@type": "Organization",
            name: "StayCool Airco"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Onderhoud, Levensduur & Garantie: Zorgeloos 15-20 Jaar
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            AlphaESS LFP-batterijen zijn onderhoudsvrij met 10 jaar garantie en 15-20 jaar levensduur. Minimale degradatie (&lt;10% over 10 jaar) en 6.000+ cycli gegarandeerd. Zorgeloos energie opslaan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Vraag Garantie Info
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Battery className="h-5 w-5 mr-2" />
              Bekijk Systemen
            </Link>
          </div>

          <div className="bg-yellow-600 text-white rounded-lg p-4 max-w-2xl">
            <div className="flex items-start">
              <Shield className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Onderhoudsvrij = Kostenvrij</p>
                <p className="text-sm">
                  LFP-technologie vereist geen onderhoud. Geen vervangingen, geen professionele service, geen kosten. 15-20 jaar zorgeloos gebruik met 10 jaar volledige garantie.
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
              Waarom AlphaESS LFP Batterijen Zo Duurzaam Zijn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium technologie voor maximale levensduur en minimaal onderhoud
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

      {/* Maintenance Tasks Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onderhoudsschema: Wat is Wanneer Nodig?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Overzichtelijke planning van alle onderhoudstaken (spoiler: bijna niets!)
            </p>
          </div>

          <div className="space-y-8">
            {maintenanceTasks.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                  <div className="flex items-center">
                    {category.icon}
                    <h3 className="text-2xl font-bold ml-3">{category.frequency}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {category.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{task.task}</h4>
                        <div className="space-y-2">
                          <p className="text-gray-700"><strong>Waarom:</strong> {task.why}</p>
                          <p className="text-gray-700"><strong>Kosten:</strong> <span className="text-green-600 font-bold">{task.cost}</span></p>
                          {task.note && (
                            <p className="text-sm text-gray-600 bg-gray-50 rounded p-2">
                              <strong>Let op:</strong> {task.note}
                            </p>
                          )}
                          {task.howTo && (
                            <p className="text-sm text-blue-700 bg-blue-50 rounded p-2">
                              <strong>Hoe te doen:</strong> {task.howTo}
                            </p>
                          )}
                          {task.includes && (
                            <p className="text-sm text-green-700 bg-green-50 rounded p-2">
                              <strong>Inclusief:</strong> {task.includes}
                            </p>
                          )}
                          {task.impact && (
                            <p className="text-sm text-purple-700 bg-purple-50 rounded p-2">
                              <strong>Impact:</strong> {task.impact}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6">
            <p className="font-bold text-green-900 mb-2">Totale Onderhoudskosten over 15 Jaar</p>
            <p className="text-green-800">
              <strong>Minimaal scenario (alles zelf):</strong> €0 (alleen tijd: ~2 uur per jaar)<br />
              <strong>Maximaal scenario (professional checks):</strong> €750 (3x professional inspectie à €250)<br />
              <strong>Gemiddeld:</strong> €200-400 over 15 jaar = €13-27 per jaar = vrijwel verwaarloosbaar
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              10 Jaar Garantie: Wat Wordt Gedekt?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volledige transparantie over garantievoorwaarden en claims
            </p>
          </div>

          <div className="space-y-6">
            {warrantyDetails.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{item.component}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Dekking:</p>
                    <p className="text-gray-700 mb-4">{item.coverage}</p>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Details:</p>
                    <p className="text-gray-700">{item.details}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Claim procedure:</p>
                    <p className="text-gray-700 mb-4">{item.claim}</p>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-sm font-semibold text-red-700 mb-1">Niet gedekt:</p>
                      <p className="text-sm text-red-600">{item.exclusions}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <p className="font-bold text-yellow-900 mb-2">Belangrijk: Registreer Uw Garantie</p>
            <p className="text-yellow-800">
              Registreer uw systeem binnen 30 dagen na installatie via AlphaESS website met serienummer en installatiedatum. Wij doen dit automatisch bij oplevering. Check altijd of registratie gelukt is - dit is essentieel voor garantieclaims.
            </p>
          </div>
        </div>
      </section>

      {/* Lifespan Factors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Levensduur Factoren: Wat Beïnvloedt Hoe Lang Uw Batterij Meegaat?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diepgaande analyse van alle factoren die levensduur bepalen
            </p>
          </div>

          <div className="space-y-6">
            {lifespanFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{factor.factor}</h3>
                  <span className={`px-3 py-1 rounded text-sm font-semibold ${
                    factor.impact === 'Zeer Hoog' ? 'bg-red-100 text-red-700' :
                    factor.impact === 'Hoog' ? 'bg-orange-100 text-orange-700' :
                    factor.impact === 'Gemiddeld (LFP = Laag)' ? 'bg-green-100 text-green-700' :
                    factor.impact.includes('Laag') ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    Impact: {factor.impact}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{factor.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Optimalisatie:</p>
                    <p className="text-sm text-gray-700">{factor.optimization}</p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-sm font-semibold text-green-900 mb-1">
                      {factor.advantage ? 'LFP Voordeel:' : factor.calculation ? 'Berekening:' : factor.reality ? 'Realiteit:' : 'Extra Info:'}
                    </p>
                    <p className="text-sm text-gray-700">{factor.advantage || factor.calculation || factor.reality || factor.protection || factor.quality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Degradation Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Degradatie Timeline: Wat Kunt U Verwachten?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Realistische capaciteit over de jaren heen
            </p>
          </div>

          <div className="space-y-4">
            {degradationData.map((period, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{period.year}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{period.expectedCapacity}</p>
                    <p className="text-sm text-gray-600">{period.cyclesUsed}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{period.description}</p>
                <div className="bg-yellow-50 rounded p-3">
                  <p className="text-sm font-semibold text-yellow-900 mb-1">Performance:</p>
                  <p className="text-sm text-gray-700">{period.performance}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="font-bold text-blue-900 mb-2">Realistische Verwachting</p>
            <p className="text-blue-800">
              AlphaESS LFP batterijen zijn conservatief gespecificeerd. In praktijk halen ze vaak betere prestaties dan gegarandeerd. Degradatie is &lt;1% per jaar in eerste 10 jaar. Voornaamste vijand: hoge temperaturen (&gt;40°C continu). Bij goede plaatsing (binnen, temperatuur gecontroleerd): 20+ jaar levensduur zeer realistisch.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelvoorkomende Problemen & Oplossingen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Troubleshooting gids voor de meest voorkomende situaties
            </p>
          </div>

          <div className="space-y-8">
            {commonIssues.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-start mb-4">
                  {problem.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-3">{problem.issue}</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Mogelijke oorzaken:</p>
                    <ul className="space-y-1 mb-4">
                      {problem.possibleCauses.map((cause, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <ArrowRight className="h-4 w-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Oplossingen (probeer in volgorde):</p>
                    <ul className="space-y-1 mb-4">
                      {problem.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-3 mt-4">
                  <p className="text-sm font-semibold text-orange-900 mb-1">Wanneer bellen:</p>
                  <p className="text-sm text-orange-700">{problem.whenToCall}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6">
            <p className="font-bold text-red-900 mb-2">⚠️ Nooit Zelf Doen</p>
            <p className="text-red-800">
              Open NOOIT de batterij behuizing zelf. Dit is levensgevaarlijk (hoogspanning) en uw garantie vervalt onmiddellijk. Alle interne reparaties door AlphaESS service center of gecertificeerde technici. Externe checks (visueel, app, bekabeling) zijn veilig.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vragen over Onderhoud of Garantie?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Wij helpen u graag met alle vragen over onderhoud, levensduur en garantie. Direct contact met onze service afdeling voor snelle ondersteuning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Contact Service
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
            Veelgestelde Vragen over Onderhoud & Levensduur
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
            Meer Technische Gidsen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-capaciteit-kiezen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Capaciteit Kiezen</h3>
              <p className="text-sm text-gray-600">Hoeveel kWh heeft u nodig?</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-monitoring-app"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <TrendingUp className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AlphaCloud App</h3>
              <p className="text-sm text-gray-600">Monitoring & inzicht</p>
            </Link>

            <Link
              to="/thuisbatterijen"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AlphaESS Systemen</h3>
              <p className="text-sm text-gray-600">Bekijk alle batterij opties</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investeer in Kwaliteit - 15-20 Jaar Zorgeloos Genieten
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            AlphaESS LFP batterijen zijn onderhoudsvrij, duurzaam en betrouwbaar. 10 jaar garantie, minimale degradatie, en decennia levensduur. Dat is pas slim investeren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Vraag Offerte
            </Link>
            <Link
              to="/thuisbatterijen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Battery className="h-6 w-6 mr-2" />
              Bekijk Systemen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThuisbatterijOnderhoudPage;
