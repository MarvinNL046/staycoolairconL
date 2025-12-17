import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Battery, CheckCircle, Euro, TrendingUp, Phone, Zap, Sun, AlertTriangle, Clock } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijNoodstroomPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Thuisbatterij Noodstroom' }
  ];

  const usps = [
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "2-7 Dagen Noodstroom",
      description: "10-30 kWh batterij = 2-7 dagen overbrugging stroomuitval afhankelijk van verbruik"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Automatische Schakelaar &lt;20ms",
      description: "UPS-functie schakelt instant bij stroomuitval - geen onderbreking gevoelige apparaten"
    },
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: "Oneindig Met Zonnepanelen",
      description: "Batterij + zonnepanelen = blijvende stroomvoorziening zolang zon schijnt"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "Voorkom €500-5.000 Schade",
      description: "Voedsel-bederf, data-verlies, apparaat-schade, comfort-verlies voorkomen"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Essentiële Apparaten Blijven Draaien",
      before: "Zonder noodstroom: volledige black-out = koeling uit, verwarming uit, verlichting uit, wifi/internet uit",
      after: "Met batterij: essentiële circuits blijven werken = koeling, verlichting, internet, alarm 2-7 dagen actief",
      saving: "Comfort + veiligheid behouden",
      explanation: "Bij stroomuitval schakelt thuisbatterij automatisch over op noodstroom-modus. Configureer essentiële circuits (koelkast/vriezer, verwarming/warmtepomp, verlichting, wifi, alarm, medische apparatuur) die prioriteit krijgen. 10 kWh batterij bij 1-2 kW essentieel verbruik = 5-10 uur overbrugging. Met zonnepanelen: onbeperkt overbrugging overdag!"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
      title: "Voorkom Voedsel-Bederf & Schade",
      before: "Zonder noodstroom: 4-8 uur uitval = €200-500 voedsel-bederf, vriezer ontdooien, mogelijk apparaat-schade",
      after: "Met batterij: koeling blijft werken = voedsel behouden, geen bederf, geen schade",
      saving: "€200-500 per uitval",
      explanation: "Koelkast/vriezer vol voedsel = €200-500 waarde. Stroomuitval &gt; uur = voedsel onveilig, &gt; uur = vriezer ontdooien. Thuisbatterij voorkomt dit: koeling blijft draaien 12-24 uur (10 kWh batterij = 15-20 uur koeling bij 500W verbruik). Bij 1-2 uitvallen/jaar = batterij terugverdient alleen al door voedsel-behoud!"
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      title: "Overbruggen Tot Netbeheerder Herstelt",
      before: "Zonder noodstroom: wachten duister zonder stroom tot herstel = 2-24 uur gemiddeld",
      after: "Met batterij: comfortabel wachten met licht, verwarming, internet = alsof niets aan de hand",
      saving: "Comfort + normaliteit behouden",
      explanation: "Nederlandse stroomuitvallen duren gemiddeld 30 min - 4 uur (lokale storing) tot 12-48 uur (grote black-out). Thuisbatterij 10 kWh = 8-12 uur bij normaal verbruik, 24+ uur bij zuinig gebruik (alleen essentieel). Met zonnepanelen overdag: onbeperkte overbrugging mogelijk. Familie blijft comfortabel, kinderen kunnen leren/spelen, thuiswerken mogelijk."
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Zonnepanelen = Onbeperkte Noodstroom Overdag",
      before: "Zonder batterij: zonnepanelen werken niet bij black-out (EU veiligheidsregel anti-eilandwerking)",
      after: "Met batterij: zonnepanelen laden batterij overdag = blijvende stroomvoorziening zolang zon schijnt",
      saving: "Onbeperkte overbrugging overdag",
      explanation: "Zonnepanelen zonder batterij: veiligheidsregel = direct uitschakelen bij netuitval (anti-islanding). Met batterij: zonnepanelen blijven laden batterij in island-mode = overdag blijvende stroomvoorziening. Voorbeeld: 10 kWh batterij + 5 kWp panelen = elke zonnige dag 15-20 kWh productie = onbeperkte noodstroom! Zelfs meerdere dagen black-out = geen probleem."
    }
  ];

  const scenarios = [
    {
      duration: "Korte Uitval (1-4 uur)",
      frequency: "2-4× per jaar",
      causes: "Lokale storing, weersomstandigheden, netonderhoud",
      batterySize: "5-10 kWh voldoende",
      essentialLoad: "Normaal verbruik 1-2 kW",
      bridging: "Volledige overbrugging mogelijk",
      cost: "SMILE5 (5 kWh) €5.785, SMILE5 (10 kWh) €7.500",
      verdict: "Meeste uitvallen probleemloos overbrugd"
    },
    {
      duration: "Middellange Uitval (4-12 uur)",
      frequency: "1-2× per jaar",
      causes: "Regionale storing, extreme weersomstandigheden, transformator-problemen",
      batterySize: "10-15 kWh aanbevolen",
      essentialLoad: "Essentieel 1-1,5 kW (koeling, verlichting, verwarming)",
      bridging: "8-15 uur overbrugging bij zuinig gebruik",
      cost: "SMILE5 (10-15 kWh) €7.500-9.000 of SMILE-T10 €9.500",
      verdict: "Comfortabele overbrugging met planning"
    },
    {
      duration: "Lange Uitval (12-48 uur)",
      frequency: "Zeldzaam (eens per 2-5 jaar)",
      causes: "Grote black-out, nationale storing, cyber-aanval, extreme weerscrisis",
      batterySize: "15-30 kWh + zonnepanelen essentieel",
      essentialLoad: "Strikt minimaal 0,5-1 kW (koeling, verlichting, communicatie)",
      bridging: "15-60 uur alleen batterij, onbeperkt met zonnepanelen",
      cost: "SMILE-T10 (15-20 kWh) €9.500-11.500 + zonnepanelen €6.000-10.000",
      verdict: "Zelfredzaamheid bij grote crisis"
    },
    {
      duration: "Extreme Uitval (48+ uur / Black Sky Event)",
      frequency: "Zeer zeldzaam (<1× per 10-20 jaar)",
      causes: "Nationale crisis, cyberoorlog, zonnestorm, energie-infrastructuur aanval",
      batterySize: "20-30 kWh + zonnepanelen verplicht",
      essentialLoad: "Survival-modus 0,3-0,5 kW (koeling, LED-verlichting, communicatie)",
      bridging: "Meerdere dagen tot weken met zonnepanelen",
      cost: "SMILE-G3-T10 (20-30 kWh) €13.500-17.000 + uitgebreide zonnepanelen €8.000-12.000",
      verdict: "Volledige energie-autonomie en zelfredzaamheid"
    }
  ];

  const essentialCircuits = [
    {
      priority: "Hoog (Essentieel)",
      appliances: "Koelkast/vriezer, medische apparatuur, verlichting basis, alarm/beveiliging",
      power: "300-800W",
      hours10kWh: "12-33 uur",
      notes: "Kritisch voor veiligheid en voedsel-behoud"
    },
    {
      priority: "Middel (Belangrijk)",
      appliances: "Verwarming/warmtepomp, wifi/internet, telefoonopladers, laptop",
      power: "800-1.500W",
      hours10kWh: "7-12 uur",
      notes: "Comfort en communicatie, kan beperkt worden"
    },
    {
      priority: "Laag (Comfor t)",
      appliances: "TV, wasmachine, droger, vaatwasser, waterkoker",
      power: "1.500-3.000W",
      hours10kWh: "3-7 uur",
      notes: "Uitstellen tot stroom hersteld, niet essentieel"
    }
  ];

  const tips = [
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Installeer UPS-Schakelaar Voor &lt;20ms Overschakeling",
      description: "Standaard batterij schakelt in 1-3 seconden (kort black-out gevoelige apparaten). Upgrade met UPS-schakelaar €800-1.500 = schakelt in &lt;20ms = geen onderbreking computers, servers, medische apparatuur, alarm. Essentieel voor thuiswerkplek, medische afhankelijkheid, beveiliging.",
      saving: "Geen onderbreking gevoelige apparatuur"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Configureer Essentiële Circuits Aparte Groep",
      description: "Laat elektricien essentiële apparaten (koeling, verlichting, verwarming, alarm) op aparte noodstroom-groep aansluiten. Bij uitval: alleen deze groep vanaf batterij = langere overbrugging. Niet-essentieel (TV, wasmachine) blijft uit = bespaar stroom. Kosten: €300-800 installatie, maar 2-3× langere noodstroom mogelijk!",
      saving: "2-3× langere overbrugging mogelijk"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Combineer Altijd Met Zonnepanelen",
      description: "Batterij alleen = beperkte overbrugging (2-48 uur). Batterij + zonnepanelen = onbeperkte noodstroom overdag. Bij grote black-out (3+ dagen): zonnepanelen laden batterij elke dag = blijvende stroomvoorziening. Investering: €6.000-12.000 extra, maar essentieel voor lange uitvallen. Zelfredzaamheid!",
      saving: "Onbeperkte overbrugging bij zon"
    },
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Kies Grotere Batterij Voor Zekere Overbrugging",
      description: "Dimensionering noodstroom: gemiddeld verbruik 3 kW × gewenste uren overbrugging. 12 uur overbrugging = 36 kWh? Nee - noodstroom-modus = alleen essentieel (1-1,5 kW) = 12-18 kWh voldoende. Advies: 10 kWh minimaal (1-2 dagen), 15 kWh comfortabel (2-4 dagen), 20+ kWh zeker (4-7 dagen). Modulaire SMILE5 = start 10 kWh, later uitbreiden.",
      saving: "Zekerheid langdurige uitval"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
      title: "Test Noodstroom-Functie 2× Per Jaar",
      description: "Controleer noodstroom werkt correct: (1) Schakel hoofdzekering uit (simuleer uitval), (2) Check of batterij overneemt binnen 1-3 sec (UPS &lt;20ms), (3) Controleer essentiële apparaten blijven werken, (4) Test duur overbrugging (hoelang bij normaal verbruik?). Plan test 2× jaar (voorjaar + herfst). Zorg onderhoud = zekerheid tijdens echte uitval!",
      saving: "Zekerheid bij daadwerkelijke uitval"
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      title: "Houd Batterij Altijd 80-100% Geladen",
      description: "Noodstroom-readiness = batterij minimaal 80% geladen houden. Configureer AlphaCloud: (1) Reserve-modus: batterij laadt niet onder 80% behalve noodstroom. (2) Automatisch laden daluren (goedkoop). (3) Alarm bij <60% lading. Kost: €50-100/jaar extra elektriciteit, maar essentieel voor noodstroom-gereedheid. Altijd klaar voor uitval!",
      saving: "Altijd noodstroom-ready"
    }
  ];

  const faqs = [
    {
      question: "Hoelang kan een thuisbatterij noodstroom leveren?",
      answer: "Afhankelijk van batterijcapaciteit en verbruik: (1) Normaal verbruik (3 kW gemiddeld): 10 kWh batterij = 3-4 uur, 15 kWh = 5-6 uur, 20 kWh = 6-8 uur. (2) Essentieel verbruik (1-1,5 kW: koeling, verlichting, verwarming): 10 kWh = 8-12 uur, 15 kWh = 12-18 uur, 20 kWh = 16-24 uur. (3) Survival-modus (0,5 kW: koeling + LED-verlichting): 10 kWh = 20+ uur, 15 kWh = 30+ uur, 20 kWh = 40+ uur. Met zonnepanelen overdag: batterij herlaadt = onbeperkte overbrugging mogelijk! Nederlandse uitvallen: meestal 1-4 uur (95% gevallen), 10 kWh batterij voldoet ruim. Lange uitval (12+ uur): 15-20 kWh + zonnepanelen aanbevolen."
    },
    {
      question: "Werken zonnepanelen bij stroomuitval zonder batterij?",
      answer: "Nee - veiligheidsregel (anti-islanding): zonnepanelen schakelen automatisch uit bij netuitval. Reden: voorkomen dat monteurs elektrocutie krijgen tijdens herstelwerkzaamheden aan 'dode' lijnen. Dit is EU-wijd verplicht. Zonder batterij: zonnepanelen produceren niet tijdens black-out = geen stroom. Met thuisbatterij: systeem schakelt naar island-mode = zonnepanelen blijven batterij laden, huis draait op batterij, volledig geïsoleerd van net. Resultaat: zonnepanelen + batterij = onbeperkte noodstroom overdag! Dit is groot voordeel thuisbatterij: transformeert zonnepanelen van 'nutteloos bij uitval' naar 'onbeperkte noodstroom-generator'."
    },
    {
      question: "Hoe snel schakelt thuisbatterij over bij stroomuitval?",
      answer: "2 configuraties mogelijk: (1) Standaard noodstroom-modus: 1-3 seconden overschakeling. Gevolg: korte onderbreking = verlichting knipper, computers kunnen rebooten, wifi reset. Voldoende voor meeste toepassingen (koeling, verwarming blijven werken). (2) UPS-modus (Uninterruptible Power Supply): &lt;20ms overschakeling met upgrade schakelaar (€800-1.500 extra). Gevolg: geen merkbare onderbreking, computers blijven draaien, wifi blijft online, alarm werkt door. Essentieel voor: thuiswerkplek (servers, NAS), medische apparatuur (zuurstof, CPAP), beveiliging (alarm), thuiszorg. Investering UPS-schakelaar: €800-1.500, maar voorkomt dataverlies, onderbreking medische voorzieningen."
    },
    {
      question: "Welke apparaten kan ik draaien op noodstroom?",
      answer: "Prioritering essentieel voor langere overbrugging: (1) Hoge prioriteit (altijd aan): koelkast/vriezer 100-300W, medische apparatuur 50-500W, LED-verlichting basis 20-100W, alarm/beveiliging 10-50W, wifi/modem 10-30W. Totaal: 300-800W = 12-33 uur bij 10 kWh batterij. (2) Middel prioriteit (beperkt gebruik): verwarming/warmtepomp 500-2.000W (alleen bij vrieskou), laptop/telefoon opladen 50-100W, gas-CV circulatiepomp 50-100W. (3) Lage prioriteit (uitstellen): TV 100-200W, wasmachine 2.000W, droger 3.000W, vaatwasser 1.500W, waterkoker 2.000W, oven 3.000W. Tip: laat elektricien essentiële apparaten op aparte noodstroom-groep aansluiten = automatische prioritering."
    },
    {
      question: "Hoe vaak zijn stroomuitvallen in Nederland?",
      answer: "Nederlandse statistieken (netbeheerders 2023-2024): (1) Gemiddeld Nederlandse huishouden: 0,5-2 uitvallen per jaar (gemiddeld 1 keer). (2) Duur: 95% korter dan 4 uur, 80% korter dan 2 uur, gemiddeld 45 minuten. (3) Oorzaken: weersomstandigheden 40% (storm, bliksem), netonderhoud 30%, kabelbeschadiging graafwerkzaamheden 20%, overbelasting/storing 10%. (4) Regionale verschillen: landelijk/boerderijen 2-4× jaar, steden 0,5-1× jaar (dubbele voorziening). (5) Grote black-outs (&gt;2 uur): zeldzaam, eens per 5-10 jaar regionaal. Toekomst: meer risico door klimaatverandering (extreme weer), netcongestie (elektrificatie), cyber-aanvallen. Thuisbatterij = verzekering tegen toenemende uitval-risico's."
    },
    {
      question: "Wat kost noodstroom-functie bij thuisbatterij?",
      answer: "Noodstroom is standaard inbegrepen in thuisbatterij-systeem: (1) Basis noodstroom (1-3 sec overschakeling): €0 extra, automatisch geïncludeerd in SMILE systemen. (2) UPS-upgrade (&lt;20ms instant overschakeling): €800-1.500 extra voor snelle schakelaar. (3) Aparte noodstroom-groep: €300-800 elektricien essentiële circuits aparte groep. (4) Totaal investering 10 kWh systeem met noodstroom: SMILE5 10 kWh €7.500 + UPS €1.000 + aparte groep €500 = €9.000 totaal. Vergelijk generatoren: diesel-generator 5 kW €2.000-4.000 + onderhoud €200/jaar + brandstof €50/gebruik + lawaai + uitstoot. Thuisbatterij: stiller, groener, automatisch, dubbele functie (dagelijks energiebesparing + noodstroom). ROI alleen energiebesparing: 12-15 jaar, noodstroom-functie = gratis extra zekerheid!"
    },
    {
      question: "Heb ik subsidie of belastingvoordeel voor noodstroom?",
      answer: "Thuisbatterij algemeen: 0% BTW (geldt sinds 2023 voor thuisbatterijen + zonnepanelen). Dit scheelt 21% = €1.200-2.000 voordeel op €6.000-10.000 investering. Specifiek noodstroom-subsidie: nee, geen aparte subsidie voor noodstroom-functie. Wel zakelijk: KIA 28% + EIA 45% investeringsaftrek voor bedrijven (zie zakelijke pagina). Indirect voordeel: (1) Energielabel-verbetering (A+++) = mogelijk lagere hypotheekrente nieuwbouw. (2) Waardevermeerdering woning: energie-autonome woning = €5.000-15.000 hogere verkoopwaarde. (3) Verzekering-korting mogelijk: sommige verzekeraars geven korting bij noodstroom-voorziening (check met verzekeraar). Let op: 0% BTW alleen bij installatie door erkende installateur (StayCool!)."
    },
    {
      question: "Wat gebeurt er bij stroomuitval als batterij leeg is?",
      answer: "Worst-case scenario maar zeldzaam: (1) Kans: zeer klein - batterijen zijn meestal 60-100% geladen (dagelijkse cyclus zonnepanelen). (2) Situatie: uitval 's nachts na donkere winterdag zonder zon én hoog verbruik = batterij <20%. (3) Gevolg: geen noodstroom mogelijk, huis volledig zonder stroom tot netbeheerder herstelt. (4) Preventie: configureer AlphaCloud 'reserve-modus' = batterij minimaal 80% aanhouden specifiek voor noodstroom (cost: €50-100/jaar extra elektriciteit daluren). (5) Automatisch laden: batterij laadt 's nachts bij goedkoop daluren (€0,15-0,20/kWh) om altijd noodstroom-ready te zijn. (6) Alerting: app waarschuwt bij <60% lading = tijd om bij te laden voor noodstroom-readiness. Realiteit: met zonnepanelen en reserve-modus = praktisch altijd voldoende lading voor noodstroom."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Noodstroom | 2-7 Dagen Overbrugging Stroomuitval | Backup Power | StayCool"
        description="Thuisbatterij als noodstroom ✓ 2-7 dagen overbrugging black-out ✓ &lt;20ms automatisch schakelen ✓ Onbeperkt met zonnepanelen ✓ Voorkom €500-5.000 schade ✓ Limburg"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          serviceType: "Thuisbatterij Noodstroom Installatie",
          description: "Thuisbatterij installatie met noodstroom-functie voor ononderbroken stroomvoorziening. Automatische overschakeling bij stroomuitval, 2-7 dagen overbrugging mogelijk, combinatie met zonnepanelen voor onbeperkte backup power.",
          provider: {
            "@type": "Organization",
            name: "StayCool Airco"
          },
          areaServed: "Limburg, Nederland"
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={breadcrumbItems} className="mb-4 text-yellow-900" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Thuisbatterij Als Noodstroom: 2-7 Dagen Overbrugging Stroomuitval + Onbeperkt Met Zon
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Automatische overschakeling &lt;20ms bij black-out. Essentiële apparaten blijven werken, voorkom voedsel-bederf, comfort behouden. Met zonnepanelen: onbeperkte noodstroom overdag!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Noodstroom-Advies
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
              <Shield className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">95% Stroomuitvallen &lt;4 Uur - 10 kWh Batterij Voldoet Ruim</p>
                <p className="text-sm">
                  Met 15-20 kWh + zonnepanelen: zelfs meerdere dagen black-out probleemloos overbruggen. Volledige zelfredzaamheid!
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
              Waarom Thuisbatterij de Beste Noodstroom-Oplossing Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatisch, stil, groen, dubbele functie: dagelijks energiebesparing + noodstroom
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
              Waarom Thuisbatterij de Ultieme Noodstroom-Oplossing Is
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              <strong>Stroomuitvallen</strong> gebeuren vaker dan je denkt: gemiddeld 0,5-2× per jaar per huishouden in Nederland (2023 statistieken). Duur: meestal 1-4 uur, soms 12-48 uur bij grote black-out. Gevolgen: geen verlichting, verwarming uit, voedsel-bederf koelkast/vriezer (€200-500 schade), geen internet/communicatie, alarm uit, medische apparatuur werkt niet. Voor gezinnen met thuiswerkers, jonge kinderen, medische afhankelijkheid of dure voorraad koeling = groot probleem.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              <strong>Thuisbatterij</strong> lost dit op: automatische overschakeling binnen 1-3 sec (of &lt;20ms met UPS-upgrade), essentiële apparaten blijven werken, 2-7 dagen overbrugging mogelijk afhankelijk van batterijgrootte en verbruik. Met zonnepanelen: batterij herlaadt overdag = onbeperkte noodstroom mogelijk bij meerdere dagen black-out! Vergelijk generatoren: diesel-generator €2.000-4.000 + lawaai + uitstoot + brandstof-behoefte + handmatig starten. Thuisbatterij: stil, automatisch, groen, dubbele functie (dagelijks €500-1.500/jaar energiebesparing + noodstroom). ROI alleen energiebesparing: 12-15 jaar, noodstroom = gratis extra zekerheid!
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              4 Concrete Voordelen Thuisbatterij Als Noodstroom
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
                      <p className="text-sm font-bold text-red-700 mb-2">❌ Zonder Noodstroom:</p>
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
              Overbrugging Per Type Stroomuitval
            </h2>

            <div className="space-y-6 mb-8">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{scenario.duration}</h3>
                        <p className="text-sm">Frequentie: {scenario.frequency}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Aanbevolen</p>
                        <p className="text-lg font-bold">{scenario.batterySize}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Oorzaken</p>
                        <p className="text-sm text-gray-900">{scenario.causes}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Essentieel Verbruik</p>
                        <p className="text-sm text-gray-900">{scenario.essentialLoad}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Overbrugging</p>
                        <p className="text-sm text-gray-900">{scenario.bridging}</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded p-3 mb-3">
                      <p className="text-sm">
                        <strong>Investering:</strong> {scenario.cost}
                      </p>
                    </div>
                    <p className="text-gray-700 text-center text-sm">
                      <strong>Advies:</strong> {scenario.verdict}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Prioritering Essentiële Circuits
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Voor langere overbrugging: configureer welke apparaten prioriteit krijgen. Aparte noodstroom-groep (€300-800 installatie) = automatische prioritering.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Prioriteit</th>
                    <th className="px-4 py-3 text-left">Apparaten</th>
                    <th className="px-4 py-3 text-left">Vermogen</th>
                    <th className="px-4 py-3 text-left">Uren (10 kWh)</th>
                    <th className="px-4 py-3 text-left">Opmerkingen</th>
                  </tr>
                </thead>
                <tbody>
                  {essentialCircuits.map((circuit, index) => (
                    <tr key={index} className={index === 0 ? 'bg-green-50 font-semibold' : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3">{circuit.priority}</td>
                      <td className="px-4 py-3 text-sm">{circuit.appliances}</td>
                      <td className="px-4 py-3">{circuit.power}</td>
                      <td className="px-4 py-3 font-bold">{circuit.hours10kWh}</td>
                      <td className="px-4 py-3 text-sm">{circuit.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="font-bold text-gray-900 mb-2">💡 Berekeningsvoorbeeld:</p>
              <p className="text-gray-700 mb-2">
                10 kWh batterij + alleen essentiële circuits (800W): 10.000 Wh / 800W = <strong>12,5 uur overbrugging</strong>. Genoeg voor 95% Nederlandse stroomuitvallen (&lt;4 uur).
              </p>
              <p className="text-gray-700">
                Met 15 kWh batterij: 18+ uur. Met 20 kWh: 24+ uur = volledige dag/nacht black-out overbrugd. Met zonnepanelen: onbeperkt overdag!
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              6 Tips Voor Optimale Noodstroom-Configuratie
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
            Klaar Voor Volledige Zelfredzaamheid Bij Stroomuitval?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            2-7 dagen overbrugging, automatische overschakeling, essentiële apparaten blijven werken. Gratis noodstroom-configuratie advies!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Noodstroom-Advies
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
            Veelgestelde Vragen over Thuisbatterij Als Noodstroom
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
              <p className="text-sm text-gray-600 mb-3">Onbeperkte noodstroom overdag</p>
              <p className="text-yellow-600 font-bold">Blijvende stroomvoorziening</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE5 Batterij</h3>
              <p className="text-sm text-gray-600 mb-3">Modulair uitbreidbaar voor meer backup</p>
              <p className="text-yellow-600 font-bold">5-30 kWh flexibel</p>
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
            Nooit Meer Zonder Stroom Bij Black-Out
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            2-7 dagen overbrugging, &lt;20ms automatisch schakelen, essentiële apparaten blijven werken. 0% BTW, 10 jaar garantie. Complete installatie door StayCool in Limburg.
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

export default ThuisbatterijNoodstroomPage;
