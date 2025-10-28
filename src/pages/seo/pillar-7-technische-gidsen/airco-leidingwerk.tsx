import React from 'react';
import { Link } from 'react-router-dom';
import { Pipette, CheckCircle, Shield, Droplets, Wrench, Award, AlertTriangle, Phone, Mail, ThermometerSnowflake, Zap } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const AircoLeidingwerk = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Technische Gidsen', path: '/seo/pillar-7-technische-gidsen' },
    { label: 'Airco Leidingwerk' }
  ];

  const usps = [
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "F-gassen Gecertificeerd",
      description: "Professionele leidinginstallatie volgens strikte normen en regelgeving"
    },
    {
      icon: <Shield className="h-12 w-12 text-sky-500" />,
      title: "Lekkagevrij Systeem",
      description: "Vakkundige las- en perswerkzaamheden met druktest garantie"
    },
    {
      icon: <ThermometerSnowflake className="h-12 w-12 text-sky-500" />,
      title: "Correcte Isolatie",
      description: "Professionele koude-isolatie voorkomt warmteverlies en condensvorming"
    },
    {
      icon: <Droplets className="h-12 w-12 text-sky-500" />,
      title: "Drainage Systeem",
      description: "Foutloze condensafvoer zonder risico op waterschade"
    }
  ];

  const pipingComponents = [
    {
      component: "Koudemiddelleidingen",
      description: "Koperen leidingen voor transport koudemiddel tussen binnen- en buitenunit",
      specifications: "Diameter 6,35mm (1/4\") en 9,52-15,88mm (3/8\" tot 5/8\") afhankelijk capaciteit",
      critical: "Absoluut lekkagevrij, correct gevacumeerd en beproefd"
    },
    {
      component: "Koude-isolatie",
      description: "Thermische isolatie rondom koudemiddelleidingen voorkomt warmteverlies en condens",
      specifications: "Minimum 9mm dikte, gesloten celstructuur, UV-bestendig indien buiten",
      critical: "Volledige afdichting zonder gaten of kieren essentieel"
    },
    {
      component: "Condensafvoer",
      description: "Afvoerleiding voor condenswater van binnenunit naar riool of afvoergoot",
      specifications: "Minimum 16mm diameter PVC, 1-2% afschot, sifon indien aangesloten op riool",
      critical: "Frostbeveiliging buiten en correct afschot voorkomen verstoppingen"
    },
    {
      component: "Elektrische Bekabeling",
      description: "Stroomkabel tussen binnen- en buitenunit plus voedingskabel naar meterkast",
      specifications: "3x1,5mm² tot 5x2,5mm² afhankelijk vermogen, aparte groep met aardlekschakelaar",
      critical: "Volgens NEN1010, correct gedimensioneerd en veilig geïnstalleerd"
    }
  ];

  const installationSteps = [
    {
      step: "1. Planning en Voorbereiding",
      details: "Route bepalen van binnen- naar buitenunit, wanddoorvoeren markeren, materialen voorbereiden",
      duration: "30-60 min",
      critical: "Kortste route met minimale bochten, vermijd hete of vochtige locaties"
    },
    {
      step: "2. Wanddoorvoer Boren",
      details: "Kernboren doorvoer (60-80mm) met afschot naar buiten (2-3°) voor drainage",
      duration: "15-30 min",
      critical: "Correct afschot essentieel, stofafzuiging gebruiken, constructie niet beschadigen"
    },
    {
      step: "3. Leidingen Monteren",
      details: "Koudemiddelleidingen afmeten, buigen zonder knikken, isolatie aanbrengen",
      duration: "60-90 min",
      critical: "Zuiverstof bij buigen, isolatie aansluitend zonder openingen"
    },
    {
      step: "4. Verbindingen Maken",
      details: "Flareleidingen aansluiten of harde koperen leidingen lassen, vakkundig uitvoeren",
      duration: "30-45 min",
      critical: "Schone sneden, correct moment en druk, geen vocht/vuil in systeem"
    },
    {
      step: "5. Vacuüm Trekken",
      details: "Systeem evacueren tot <-0,1 MPa (750 micron) gedurende 30 minuten",
      duration: "45-60 min",
      critical: "Elimineer lucht en vocht, test op lekkage, houd vacuüm stabiel"
    },
    {
      step: "6. Condensafvoer Installeren",
      details: "Afvoerleiding monteren met correct afschot, testen op doorstroming",
      duration: "30-45 min",
      critical: "Minimum 1% afschot, sifon waar nodig, frostbeveiliging buiten"
    },
    {
      step: "7. Elektrische Aansluitingen",
      details: "Bekabeling tussen units, aansluiting meterkast met aardlekschakelaar",
      duration: "45-60 min",
      critical: "NEN1010 normen, correct gedimensioneerd, veilig geïsoleerd"
    },
    {
      step: "8. Druktest en Inbedrijfstelling",
      details: "Systeem openen, drukken controleren, testrun uitvoeren",
      duration: "20-30 min",
      critical: "Controleer alle verbindingen, geen lekkages, correcte werking"
    }
  ];

  const commonIssues = [
    {
      issue: "Condensvorming op Leidingen",
      cause: "Onvolledige of beschadigde isolatie laat warme lucht bij koude leiding",
      consequence: "Waterdruppels, vochtschade plafond/muren, schimmelvorming, efficiëntieverlies",
      solution: "Volledige isolatie zonder openingen, alle naden afplakken, regelmatig inspecteren"
    },
    {
      issue: "Koudemiddellekkage",
      cause: "Slechte verbindingen, corrosie, vibratieschade, verkeerde montage",
      consequence: "Capaciteitsverlies, hogere energiekosten, milieuschade, dure reparatie",
      solution: "Professionele montage, regelmatige controle, elektronische lekdetectie"
    },
    {
      issue: "Verstopte Condensafvoer",
      consequence: "Water loopt over uit binnenunit, waterschade interieur, unit schakelt uit",
      solution: "Jaarlijks reinigen, correct afschot, sifon tegen insecten, frostbeveiliging"
    },
    {
      issue: "Bevroren Condensafvoer",
      cause: "Geen frostbeveiliging buiten, afvoer te koud bij winter-gebruik",
      consequence: "Blokkade afvoer, water loopt binnenunit over, schade interieur",
      solution: "Verwarmingskabel om afvoer, isolatie toepassen, drainage onder vorstvlak"
    },
    {
      issue: "Hoge Drukval door Leidinglengte",
      cause: "Te lange leidingen of te veel bochten reduceren efficiëntie",
      consequence: "15-30% capaciteitsverlies, hoger energieverbruik, verminderde werking",
      solution: "Kortste route plannen, maximaal 4-5 bochten, grotere diameter overwegen"
    }
  ];

  const insulationGuidelines = [
    {
      guideline: "Materiaal Selectie",
      requirements: ["Gesloten celstructuur (geen wateropname)", "UV-bestendig voor buiten gebruik", "Temperatuurbestendig -40°C tot +120°C", "Minimum 9mm wanddikte, ideaal 13mm"]
    },
    {
      guideline: "Installatie Kwaliteit",
      requirements: ["Volledige afdichting zonder openingen", "Alle naden afplakken met aluminium tape", "Extra isolatie bij doorvoeren en bochten", "Geen compressie (vermindert werking)"]
    },
    {
      guideline: "Externe Bescherming",
      requirements: ["UV-bestendige buitenlaag of beschermkoker", "Bescherming tegen mechanische schade", "Afwatering bij verticale leidingen", "Regelmatige inspectie op schade"]
    },
    {
      guideline: "Condensatie Preventie",
      requirements: ["Isolatie tot aan wanddoorvoer", "Dubbelwandige doorvoer met isolatie", "Dampscherm waar nodig", "Monitoring eerste weken na installatie"]
    }
  ];

  const faqs = [
    {
      question: "Waarom is correcte isolatie van koudemiddelleidingen zo belangrijk?",
      answer: "Koudemiddelleidingen vervoeren extreem koude vloeistof (-10°C tot -25°C) van de buitenunit naar de binnenunit. Zonder adequate isolatie heeft dit drie ernstige gevolgen. Ten eerste: condensvorming - wanneer warme, vochtige lucht in contact komt met de ijskoude leidingen, condenseert waterdamp onmiddellijk op het oppervlak. Dit creëert waterdruppels die op vloeren, plafonds en muren vallen, wat leidt tot vochtschade, schimmelvorming en aantasting van bouwconstructies. Enkele druppels per minuut resulteren in liters water per dag. Ten tweede: efficiëntieverlies - ongeïsoleerde leidingen absorberen warmte uit de omgeving (10-15W per meter leiding), waardoor het koudemiddel opwarmt voordat het de binnenunit bereikt. Dit vermindert de koelcapaciteit met 15-30% en verhoogt het energieverbruik evenredig. Ten derde: veiligheidsrisico - water op vloeren creëert valgevaar, en continue vocht belast elektrische installaties. Daarom is professionele isolatie met minimum 9mm dikte gesloten-cel schuim absoluut noodzakelijk, met alle naden hermetisch afgeplakt."
    },
    {
      question: "Wat gebeurt er tijdens het vacuüm trekken en waarom is dit noodzakelijk?",
      answer: "Vacuüm trekken is een kritieke stap waarbij alle lucht en vocht uit het koudemiddelcircuit verwijderd worden voordat het systeem gevuld wordt. Dit proces gebruikt een vacuümpomp die de druk in het systeem verlaagt tot minimaal -0,1 MPa (ongeveer 750 micron), wat ongeveer 1/1000e van normale luchtdruk is. Dit duurt 30-60 minuten afhankelijk van leidinglengte. Het is essentieel om drie redenen. Ten eerste: vocht verwijderen - zelfs minimale hoeveelheden water in het systeem (enkele druppels) bevriezen bij de lage temperaturen in de verdamper, wat leidt tot blokkades, verminderde werking en compressorschade. Vocht reageert ook met koudemiddel tot corrosieve zuren die metalen componenten aantasten. Ten tweede: lucht elimineren - lucht in het systeem bevat zuurstof die oxidatie veroorzaakt, en stikstof die niet condenseert en drukken verstoort. Dit reduceert efficiëntie met 20-40% en kan leiden tot compressor-oververhitting. Ten derde: lektest - als het vacuüm stabiel blijft gedurende 15-30 minuten, bevestigt dit dat het systeem lekkagevrij is. Een drukverlies wijst op een lek dat hersteld moet worden voor inbedrijfstelling. Professionele installateurs gebruiken digitale vacuümmeter om exact  minder dan 750 micron te bereiken en stabiliteit te verifiëren."
    },
    {
      question: "Hoe wordt condenswater afgevoerd en wat kan misgaan?",
      answer: "De binnenunit produceert condenswater wanneer warme, vochtige lucht over de koude verdamper stroomt - net als waterdruppels op een koud glas. Afhankelijk van luchtvochtigheid en capaciteit produceert een airco 1-3 liter water per uur, tot 20-40 liter per dag bij intensief gebruik. Dit water wordt opgevangen in een opvangbak onder de verdamper en afgevoerd via een PVC drain-leiding (minimaal 16mm diameter) met constant afschot van 1-2% naar een afvoerpunt: riool, buitengoot of drainage. Kritieke aspecten: het afschot moet consistent zijn over de hele lengte - zelfs korte horizontale secties creëren waterplassen waar bacteriën en algen groeien die de leiding verstoppen. Bij aansluiting op riool is een sifon verplicht om stankoverlast te voorkomen. Voor buitensecties van de afvoer is frostbeveiliging essentieel - bevroren water blokkeert de afvoer volledig. Veel problemen ontstaan: verstoppingen door algen/bacteriën (voorkom met jaarlijkse reiniging), bevriezing in winter (isolatie en verwarmingskabel), onvoldoende afschot (water loopt terug), geen sifon (stank), en mechanische schade. Bij blokkade loopt de opvangbak over en druppelt water uit de unit op vloeren/meubels. Moderne units hebben een vlotterschakelaar die bij vol lopen automatisch uitschakelt om waterschade te voorkomen."
    },
    {
      question: "Wat zijn flare-verbindingen en waarom worden ze gebruikt?",
      answer: "Flare-verbindingen zijn speciale schroefkoppelingen voor koudemiddelleidingen waarbij het uiteinde van de koperen buis 'uitgeflenst' wordt tot een kegelvorm van 45 graden. Deze kegel wordt met een flaremoer tegen een matching kegelvormig zitting in de unit aangedrukt, waardoor een metaal-op-metaal afdichting ontstaat zonder pakking. Flare-verbindingen worden gebruikt omdat ze: herbruikbaar zijn (los- en aanschroefbaar voor service), geen open vuur vereisen (veiliger dan lassen), fabrieksgetest zijn (units hebben voorgeïnstalleerde aansluitingen), en betrouwbaar dicht zijn bij correcte uitvoering (drukhoudend tot 40+ bar). Het maken van een flare vereist vakmanschap: de leiding moet haaks en zuiver afgesneden zijn zonder bramen, de flare tool moet correct gemonteerd worden (juiste uitsteek), en het moer moet handvast plus 1/4 tot 1/2 slag aangedraaid worden met momentsleutel (30-60 Nm afhankelijk diameter). Veelvoorkomende fouten: scheef geflaarde uiteindes lekken direct, te weinig aandraaien lekt, te veel aandraaien breekt de koperen flare, bramen of vervuiling blokkeren afdichting, en olie-resten trekken vuil aan. Professionele installateurs hebben geijkte flare-tools en momentsleutels voor perfecte verbindingen. Bij grotere installaties ( meer dan 5 kW) worden vaak harde koperen leidingen gelast voor nog betere betrouwbaarheid - dit vereist F-gassen certificering en specialistische lasvaardigheden."
    },
    {
      question: "Hoe lang mogen de leidingen maximaal zijn?",
      answer: "De maximale leidinglengte varieert per fabrikant en model: standaard systemen 15-20 meter, premium merken (Daikin, Mitsubishi) 20-30 meter, en speciale long-distance modellen tot 50-70 meter. Ook hoogteverschil speelt mee: standaard max 10m, sommige tot 20-30m. Deze limieten zijn technisch bepaald door: drukval - lange leidingen creëren weerstand waardoor koudemiddel onder druk komt en capaciteit daalt (1-2% per meter boven 10m), olieretour - compressorolie circuleert met koudemiddel en moet terug naar compressor; te lange leidingen bemoeilijken dit en veroorzaken oliegebrek in compressor met slijtage, en koudemiddelhoeveelheid - lange leidingen vereisen extra koudemiddelvulling (50-100 gram per meter) wat kosten verhoogt. Praktische gevolgen: bij 20m leiding verliest u 20-30% capaciteit vergeleken met 5m, energieverbruik stijgt 15-25%, installatiekosten zijn €300-500 hoger (materiaal + extra koudemiddel), en service wordt complexer. De optimale lengte is 5-10m waarbij efficiëntie minimaal beïnvloed wordt. Plan daarom de buitenunit zo dicht mogelijk bij de binnenunit. Bij multi-split systemen telt de lengte vanaf buitenunit tot verste binnenunit. Voor grote installaties met onvermijdelijk lange leidingen zijn speciale maatregelen mogelijk: gebruik grotere diameter leidingen (lagere drukval), plaats extra olie-afscheider, programmeer compressor voor langere cyclussen (betere olieretour), en overweeg twee systemen in plaats van één met lange leidingen."
    },
    {
      question: "Wat zijn de risicos van DIY leidingwerk?",
      answer: "Zelfinstallatie van airco leidingwerk is niet alleen illegaal maar ook gevaarlijk en kostbaar bij fouten. Wettelijk: sinds 2008 mag alleen F-gassen gecertificeerd personeel koudemiddelsystemen installeren, wijzigen of onderhouden. Overtreding leidt tot boetes €18.000+ voor particulieren, strafrechtelijke vervolging bij ernstige overtredingen, en volledige aansprakelijkheid voor schade (milieuschade, brand, waterschade). Verzekeringen dekken schade niet bij onbevoegde installatie. Technische risicos: lekkende verbindingen door gebrek aan vakkennis/gereedschap resulteren in koudemiddelverlies (milieu-impact, €500-1500 bijvulkosten), lucht/vocht in systeem door verkeerd vacuüm trekken veroorzaakt compressorschade (€1000-2000 reparatie), onvolledige isolatie leidt tot waterdruppels en vochtschade (schimmel, constructieschade), verkeerde condensafvoer zorgt voor waterschade interieur (vloeren, plafonds, meubels), en onjuiste elektrische aansluiting creëert brandgevaar en elektrische schade. Financiële gevolgen: materiaalkosten DIY €200-400, maar bij fouten: compressor vervangen €1000-2000, koudemiddel bijvullen €500-1500, waterschade herstel €2000-5000, verlies fabrieksgarantie (waarde €300-800), en professionele herstelkosten €1500-3000. Totaal risico: €5000-12000+ versus €600-1200 professionele installatie. Daarnaast: DIY duurt 2-3 dagen versus 1 dag professional, vacuümpomp kopen/huren €200-400, specifiek gereedschap €300-600, en geen garantie op werking. Conclusie: professionele installatie is goedkoper, veiliger, legaal en gegarandeerd."
    },
    {
      question: "Hoe voorkom ik vorstschade aan de condensafvoer in de winter?",
      answer: "Vorstschade aan condensafvoer is een veelvoorkomend probleem bij aircos die ook als warmtepomp gebruikt worden in de winter. Wanneer de unit in verwarmingsmodus draait, produceert de buitenunit condenswater (anders dan in koelmodus waar binnenunit dit doet). Bij temperaturen onder 0°C bevriest dit water in de afvoerleiding, wat leidt tot volledige blokkade. Water dat niet afgevoerd kan worden, vormt ijspegels bij de unit of stroomt terug met risico op bevriezing van componenten. Preventieve maatregelen: gebruik zelfregulerende verwarmingskabel (10-15W/m) langs hele externe afvoer, activeer automatisch bij  minder dan 5°C, kost €2-4/maand. Isoleer de condensafvoer met minimum 19mm gesloten-cel isolatie plus waterdichte buitenlaag - dit vertraagt bevriezing maar voorkomt niet bij langdurige vorst. Verlegd afvoer onder vorstvlak ( meer dan 80cm diep) indien mogelijk bij nieuwbouw - permanent vorstvrij maar duur (€400-800 extra). Drainage naar oppervlak in plaats van afvoer - simpel maar minder fraai, water bevriest op oppervlak. Voor Zuid-Limburg met gemiddeld 40-60 vorsdagen per jaar is verwarmingskabel de beste balans tussen kosten en effectiviteit. Let op: gewone verwarmingskabel (niet zelfr egulerend) is onveilig en kan oververhitten. Bij professionele installatie rekent u €150-250 extra voor complete frostbeveiliging inclusief kabel, thermostaat en installatie. Zonder preventie: herstelkosten bevriezingsschade €200-600 (ontdooien, reparatie, mogelijk nieuwe afvoer), en tijdens vorst geen werking als warmtepomp - precies wanneer u het nodig heeft."
    },
    {
      question: "Moeten de leidingen jaarlijks gecontroleerd worden?",
      answer: "Ja, jaarlijkse inspectie van leidingwerk is sterk aanbevolen voor betrouwbaarheid en efficiëntie, hoewel niet wettelijk verplicht voor residentiële systemen onder 3kg koudemiddelvulling. Voor systemen  meer dan 3kg is tweejaarlijkse controle wettelijk verplicht, en vanaf  meer dan 6kg jaarlijks. Wat te controleren: isolatie - zoek naar scheuren, gaten, beschadigde secties waar condens kan vormen. Zelfs kleine openingen (5-10mm) creëren waterdruppels. Vervang beschadigde isolatie direct. Condensafvoer - test doorstroming door water in opvangbak te gieten en te controleren of dit vlot wegstroomt. Reinig jaarlijks met azijnoplossing of speciale cleaner om algen/bacteriën te verwijderen. Controleer afschot en frostbeveiliging. Koudemiddeldruk - professional check met manometers of systeem correct gevuld is. Lekkages resultaten in geleidelijke drukdaling (5-10% per jaar is abnormaal). Elektrische aansluitingen - controleer op losse verbindingen, oxidatie, beschadigde isolatie. Foutieve elektriek is brandgevaar. Mechanische bevestiging - leidingen mogen niet trillen of wrijven tegen constructie - dit slijt isolatie en veroorzaakt geluidsoverlast. Professioneel onderhoudscontract (€120-180/jaar) omvat alle controles plus filter reiniging, algemene inspectie en preventief onderhoud. Kosten-baten: jaarlijks onderhoud €150 voorkomt defecten €800-2000, verlengt levensduur 5-10 jaar (waarde €3000-6000), houdt garantie geldig, en bespaart 10-15% energie door optimale werking. Voor aircos meer dan €3000 en intensief gebruik is onderhoudscontract sterk aanbevolen. Doe-het-zelf: visuele inspectie isolatie en condensafvoer test kan iedereen 2x per jaar uitvoeren. Professionele technische check 1x per 2 jaar door gecertificeerde installateur."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Leidingwerk Limburg | Koude-isolatie en Afvoer | StayCool Airco"
        description="Airco leidingwerk ✓ Professionele koude-isolatie ✓ Lekkagevrije condensafvoer ✓ F-gassen gecertificeerd ✓ Geen vochtschade ✓ 10 jaar garantie!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Leidingwerk Installatie",
          description: "Professionele installatie van koudemiddelleidingen, isolatie en condensafvoer volgens strikte kwaliteitsnormen",
          provider: {
            "@type": "LocalBusiness",
            name: "StayCool Airco"
          },
          areaServed: {
            "@type": "State",
            name: "Limburg"
          }
        }}
      />

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Airco Leidingwerk: Koude-isolatie en Condensafvoer Vakkundig Uitgevoerd
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8">
            Professionele installatie van koudemiddelleidingen en drainage - lekkagevrij, efficiënt en zonder risico op vochtschade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Wrench className="h-6 w-6 mr-2" />
              Professionele Installatie
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              046 202 1430
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sky-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>F-gassen gecertificeerd</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Lekkagevrij gegarandeerd</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>10 jaar garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
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

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Waarom Professioneel Leidingwerk Essentieel Is
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-6">
              Het leidingwerk is het zenuwstelsel van uw airconditioner - een netwerk van koudemiddelleidingen, isolatie, condensafvoer en elektrische bekabeling dat binnen- en buitenunit verbindt. Correcte installatie is absoluut kritiek: zelfs kleine fouten resulteren in lekkages (€500-1500 herstelkosten), vochtschade (schimmel, constructieschade), verminderde efficiëntie (20-30% hoger verbruik), en kortere levensduur (tot 50% minder). Bij StayCool Airco garanderen onze F-gassen gecertificeerde installateurs vakkundige uitvoering volgens strikte kwaliteitsnormen.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Koudemiddelleidingen: Het Hart van Het Systeem
            </h3>
            <p className="text-gray-600 mb-4">
              Koudemiddelleidingen transporteren de vloeistof die warmte van binnen naar buiten verplaatst. Deze koperen leidingen bestaan uit twee circuits: de vloeistofleiding (6,35mm diameter, hoge druk 20-30 bar) voert vloeibaar gekoeld koudemiddel van buitenunit naar binnenunit, en de gasleiding (9,52-15,88mm diameter, lage druk 5-10 bar) retourneert gasvormig opgewarmd koudemiddel terug naar compressor. Het diameter verschil is essentieel - de gasleiding moet groter zijn omdat gas meer volume heeft dan vloeistof bij dezelfde massa.
            </p>
            <p className="text-gray-600 mb-4">
              De leidingen moeten absoluut lekkagevrij zijn. Koudemiddel onder hoge druk vindt zelfs microscopische openingen en lekt geleidelijk weg. Een lekkage van 50 gram per jaar (10% vulling) vermindert de capaciteit met 30-40% en verhoogt energieverbruik evenredig. Bovendien zijn moderne koudemiddelen (R32, R410A) broeikasgassen met GWP (Global Warming Potential) 650-2000x CO2, waardoor lekkages ernstige milieu-impact hebben en sinds 2015 wettelijk gerapporteerd moeten worden bij systemen  meer dan 3kg vulling.
            </p>
            <p className="text-gray-600 mb-4">
              Professionele installatie omvat: schone snijdingen zonder bramen die filters verstoppen, voorzichtig buigen met minimum straal 10x diameter om knikken te vermijden, stikstof doorspoelen tijdens lassen om oxidatie binnen te voorkomen, vacuüm trekken tot  minder dan 750 micron (30-60 min) om lucht/vocht te elimineren, en druktest op 40 bar gedurende 24 uur om lekkages uit te sluiten voor inbedrijfstelling. Deze stappen vereisen specialistisch gereedschap (vacuümpomp, manometers, flaretool, buigveer) en vakkennis die alleen F-gassen gecertificeerde professionals hebben.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Koude-isolatie: Bescherming Tegen Condensatie
            </h3>
            <p className="text-gray-600 mb-4">
              De gasleiding vervoert koudemiddel van -10°C tot -25°C - extreem koud vergeleken met omgevingstemperatuur van 20-30°C. Zonder isolatie condenseert waterdamp uit de lucht onmiddellijk op de ijskoude leiding, precies zoals water condenseert op een koud glas op een warme dag. Een 10 meter ongeïsoleerde leiding produceert 1-2 liter condenswater per uur - dat is 10-20 liter per dag bij continu gebruik. Dit water druppelt op vloeren, plafonds en in muren, wat leidt tot vochtschade, schimmelvorming en aantasting van bouwconstructies.
            </p>
            <p className="text-gray-600 mb-4">
              Professionele koude-isolatie gebruikt gesloten-cel elastomeer schuim met minimum 9mm wanddikte (ideaal 13mm voor betere bescherming). De gesloten celstructuur voorkomt wateropname en behoudt isolatiewaarde ook bij vochtigheid. UV-bestendige buitenlaag beschermt tegen zonlicht dat het materiaal afbreekt. Kritiek is volledige afdichting zonder enige openingen - alle naden worden afgeplakt met aluminium tape, en bij doorvoeren en bochten wordt extra isolatie aangebracht om zwakke plekken te elimineren.
            </p>
            <p className="text-gray-600 mb-4">
              Onvolledige isolatie heeft drie gevolgen: condensvorming op blootgestelde delen (zelfs 2cm opening produceert continue waterdruppels), warmte-inval die koudemiddel opwarmt met 10-15W per meter ongeïsoleerde leiding (15-30% capaciteitsverlies), en energieverspilling doordat compressor harder werkt om extra warmte te compenseren. De investering in professionele isolatie (€8-15/meter) voorkomt waterschade-herstel van €2000-5000 en bespaart 10-20% jaarlijkse energiekosten.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Condensafvoer: Essentieel voor Betrouwbare Werking
            </h3>
            <p className="text-gray-600 mb-4">
              De binnenunit produceert condenswater doordat warme, vochtige lucht over de koude verdamper stroomt. Afhankelijk van luchtvochtigheid en gebruik verzamelt 1-3 liter per uur, tot 20-40 liter per dag. Dit moet betrouwbaar afgevoerd worden naar riool, buitengoot of drainage zonder risico op lekkage of blokkade. Een 16mm PVC drain-leiding met constant afschot van 1-2% voert het water af onder zwaartekracht.
            </p>
            <p className="text-gray-600 mb-4">
              Kritieke vereisten: het afschot moet consistent zijn over de hele lengte - horizontale secties creëren waterplassen waar bacteriën en algen groeien die de leiding binnen 3-6 maanden volledig verstoppen. Bij aansluiting op riool is een sifon verplicht om stankoverlast te voorkomen door rioolgas dat terug wil stromen. Buitensecties van de afvoer vereisen frostbeveiliging - bevroren water blokkeert volledig en het systeem schakelt uit of water loopt terug de unit in met waterschade tot gevolg.
            </p>
            <p className="text-gray-600 mb-4">
              Moderne units hebben een vlotterschakelaar in de opvangbak die bij hoog water automatisch uitschakelt om overloop te voorkomen. Dit beschermt tegen waterschade maar betekent ook dat een verstopte afvoer uw airco uitschakelt - precies wanneer u het het hardst nodig heeft op hete dagen. Preventief jaarlijks onderhoud (reinigen met azijnoplossing, controleren afschot, inspecteren op beschadigingen) kost €40-60 en voorkomt €500-2000 herstelkosten bij waterschade.
            </p>
          </div>
        </div>
      </section>

      {/* Piping Components */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Onderdelen van Het Leidingsysteem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pipingComponents.map((component, index) => (
              <div key={index} className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{component.component}</h3>
                <p className="text-gray-600 mb-3">{component.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Specificaties:</span> {component.specifications}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-red-700">Kritiek:</span> {component.critical}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Professionele Installatie Stap-voor-Stap
          </h2>
          <div className="space-y-4">
            {installationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{step.step}</h3>
                  <span className="text-sm font-semibold px-3 py-1 bg-orange-100 text-orange-800 rounded whitespace-nowrap ml-4">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{step.details}</p>
                <p className="text-sm text-red-700">
                  <span className="font-semibold">Kritiek:</span> {step.critical}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Veelvoorkomende Problemen en Oplossingen
          </h2>
          <div className="space-y-4">
            {commonIssues.map((item, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  {item.issue}
                </h3>
                {item.cause && (
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Oorzaak:</span> {item.cause}
                  </p>
                )}
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Gevolg:</span> {item.consequence}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-green-700">Oplossing:</span> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insulation Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Isolatie Richtlijnen en Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insulationGuidelines.map((guideline, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <ThermometerSnowflake className="h-6 w-6 text-sky-500 mr-2" />
                  {guideline.guideline}
                </h3>
                <ul className="space-y-2">
                  {guideline.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lekkagevrij en Efficiënt - Gegarandeerd
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Onze F-gassen gecertificeerde installateurs garanderen vakkundige installatie volgens strikte kwaliteitsnormen - geen lekkages, geen vochtschade, optimale prestaties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
              Gratis Offerte
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Veelgestelde Vragen over Airco Leidingwerk
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-400 to-sky-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professioneel Leidingwerk - Zonder Zorgen
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Neem contact op voor vakkundige installatie met 10 jaar garantie op materiaal en arbeid
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Gratis Offerte Aanvragen
            </Link>
            <a
              href="https://wa.me/31636481054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-sky-700 text-white font-bold rounded-lg hover:bg-sky-800 transition-colors text-lg"
            >
              WhatsApp: 06 36481054
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AircoLeidingwerk;
