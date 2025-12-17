import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Battery, CheckCircle, Euro, TrendingUp, Phone, Zap, Sun, Building, Shield } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const ThuisbatterijNieuwbouwPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Thuisbatterijen', path: '/thuisbatterijen' },
    { label: 'Thuisbatterij Nieuwbouw' }
  ];

  const usps = [
    {
      icon: <Home className="h-12 w-12 text-yellow-500" />,
      title: "Direct Meenemen = Lagere Kosten",
      description: "€1.000-2.000 bespaard vs. later installeren - geen dubbele installatiekosten"
    },
    {
      icon: <Building className="h-12 w-12 text-yellow-500" />,
      title: "BENG-Eisen Makkelijk Halen",
      description: "Thuisbatterij verbetert BENG score met 15-25% - essentieel voor vergunning"
    },
    {
      icon: <Euro className="h-12 w-12 text-yellow-500" />,
      title: "0% BTW + ISDE Subsidie",
      description: "Nieuwe woningen: maximaal profiteren van fiscale voordelen en subsidies"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "Toekomstbestendig From Day 1",
      description: "Klaar voor energietransitie, capaciteitstarieven en energieopslag-regelgeving"
    }
  ];

  const benefits = [
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Lagere Installatiekosten Door Integratie",
      before: "Later installeren: €600-1.200 extra (aparte installatie, bedrading, meterkast aanpassing)",
      after: "Direct in nieuwbouw: installatiekosten geïntegreerd in bouwproces = €400-800 goedkoper",
      saving: "€600-1.200 besparing",
      explanation: "Bij nieuwbouw is elektrische infrastructuur nog open en toegankelijk. Thuisbatterij direct meenemen = bedrading, meterkast, aardlekschakelaar in één keer correct dimensioneren = lagere arbeidskosten, geen braakwerk, geen herstelkosten. Aannemer kan alles optimaal inplannen."
    },
    {
      icon: <Building className="h-8 w-8 text-yellow-500" />,
      title: "BENG-Eisen Eenvoudiger Halen",
      before: "Zonder batterij: BENG lastig halen, mogelijk duurdere isolatie/installaties nodig",
      after: "Met batterij: BENG-score 15-25% beter, flexibiliteit in andere bouwkeuzes",
      saving: "BENG3 verbetering + vergunning",
      explanation: "BENG (Bijna Energie Neutrale Gebouwen) heeft 3 eisen: BENG1 (energiebehoefte), BENG2 (primair fossiel verbruik), BENG3 (hernieuwbaar aandeel). Thuisbatterij helpt vooral BENG2 en BENG3: verhoogt hernieuwbaar aandeel (zonne-energie opslaan) en verlaagt fossiel verbruik (minder netinkoop). Verschil: 15-25% betere score = makkelijker vergunning + eventueel goedkopere bouwmethode elders."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Optimale Systeemintegratie Vanaf Begin",
      before: "Later installeren: aanpassen bestaande systemen, mogelijk incompatibiliteiten",
      after: "Direct in nieuwbouw: alle systemen (PV, batterij, warmtepomp) perfect afgestemd",
      saving: "Maximale efficiëntie + prestatie",
      explanation: "Nieuwbouw-kans: architect/installateur ontwerpen complete energiesysteem als geheel. Thuisbatterij communicatie met zonnepanelen, warmtepomp, laadpaal vanaf dag 1. Smart home integratie, monitoring, energiemanagement direct geïnstalleerd. Resultaat: 10-20% hogere efficiëntie vs. later toegevoegd systeem."
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Toekomstbestendig en Regelgeving-Proof",
      before: "Zonder batterij: mogelijk toekomstige kosten voor netcongestie/capaciteitstarieven",
      after: "Met batterij: bufferpieken, onafhankelijk van netwerkbelasting, klaar voor 2025+ regelgeving",
      saving: "Toekomst-proof investering",
      explanation: "2026+: capaciteitstarieven (betaal per kW piek, niet alleen kWh). 2027+: mogelijk netcongestie-boetes bij piekbelasting. Thuisbatterij in nieuwbouw = vooruitziende blik: bufferpieken warmtepomp/laadpaal, voorkomt toekomstige netwerkkosten, voldoet aan aankomende regelgeving energieopslag. Investeer nu, bespaar later!"
    }
  ];

  const scenarios = [
    {
      type: "Starterswoning (80-100 m²)",
      house: "Tussenwoning, 2 personen",
      solar: "8 panelen (3,2 kWp)",
      battery: "SMILE-B3 (2,9 kWh)",
      heatpump: "Klein (3 kW)",
      consumption: "2.200 kWh/jaar",
      investment: "€9.000 (panelen + batterij + warmtepomp integratie)",
      selfSufficiency: "60-70%",
      saving: "€550/jaar",
      payback: "16 jaar",
      beng: "BENG score: 0,35 (grens 0,40) ✅",
      verdict: "Minimale setup voor BENG, startersbudget"
    },
    {
      type: "Gezinswoning (120-150 m²)",
      house: "Hoekwoning, 3-4 personen",
      solar: "14 panelen (5,6 kWp)",
      battery: "SMILE5 (10 kWh)",
      heatpump: "Middel (5 kW)",
      consumption: "4.200 kWh/jaar",
      investment: "€16.500 (panelen + batterij + warmtepomp integratie)",
      selfSufficiency: "75-85%",
      saving: "€1.100/jaar",
      payback: "15 jaar",
      beng: "BENG score: 0,28 (ruim onder grens) ✅✅",
      verdict: "Populairste nieuwbouw-configuratie, ideale balans"
    },
    {
      type: "Vrijstaande Woning (180-220 m²)",
      house: "Vrijstaand, 4-5 personen + EV",
      solar: "20 panelen (8 kWp)",
      battery: "SMILE5 (15 kWh uitgebreid)",
      heatpump: "Groot (8 kW)",
      consumption: "6.500 kWh/jaar (incl. 2.000 kWh EV)",
      investment: "€23.000 (panelen + batterij + warmtepomp integratie + laadpaal)",
      selfSufficiency: "80-90%",
      saving: "€1.750/jaar",
      payback: "13 jaar",
      beng: "BENG score: 0,22 (excellent!) ✅✅✅",
      verdict: "Premium nieuwbouw, maximale zelfvoorziening, toekomst-proof"
    },
    {
      type: "Energieneutrale Woning (200+ m²)",
      house: "Villa, 5+ personen, all-electric",
      solar: "28 panelen (11,2 kWp)",
      battery: "SMILE-G3-T10 (20 kWh 3-fase)",
      heatpump: "XL 3-fase (12 kW)",
      consumption: "8.000 kWh/jaar (incl. EV, zwembad/sauna)",
      investment: "€32.000 (complete all-electric installatie)",
      selfSufficiency: "90-95%",
      saving: "€2.400/jaar",
      payback: "13 jaar",
      beng: "BENG score: 0,15 (energieneutraal!) ✅✅✅",
      verdict: "High-end nieuwbouw, bijna energieneutraal, luxe comfort"
    }
  ];

  const bengCalculation = [
    {
      item: "Basiswoning (goed geïsoleerd)",
      beng1: "30 kWh/m²/jaar",
      beng2: "0,50",
      beng3: "0,25",
      note: "Voldoet niet aan BENG3 (max 0,40)"
    },
    {
      item: "+ Zonnepanelen (6 kWp)",
      beng1: "25 kWh/m²/jaar",
      beng2: "0,40",
      beng3: "0,50",
      note: "BENG2 grens, BENG3 beter maar nog niet optimaal"
    },
    {
      item: "+ Thuisbatterij (10 kWh)",
      beng1: "22 kWh/m²/jaar",
      beng2: "0,30",
      beng3: "0,70",
      note: "Alle BENG eisen ruim gehaald! ✅✅✅"
    },
    {
      item: "Effect batterij",
      beng1: "↓ 3 kWh/m²",
      beng2: "↓ 0,10",
      beng3: "↑ 0,20",
      note: "15-25% verbetering op BENG scores"
    }
  ];

  const tips = [
    {
      icon: <Building className="h-8 w-8 text-yellow-500" />,
      title: "Bespreek Met Architect/Aannemer in Ontwerpfase",
      description: "Vroeg in ontwerpfase thuisbatterij meenemen = architect kan optimale locatie, bekabeling, meterkast-configuratie plannen. Ideaal: technische ruimte met directe toegang buiten (batterij optimaal op 15-25°C). Elektrische schema's direct correct dimensioneren (63A hoofdaansluiting, aparte groepen).",
      saving: "Optimale plaatsing + lagere installatiekosten"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Verhoog Hoofdaansluiting Naar 3×25A (63A)",
      description: "Nieuwbouw met warmtepomp + laadpaal + thuisbatterij = minimaal 3×25A (17 kW) aansluiting nodig. Standaard 1-fase 40A (9 kW) is onvoldoende. Upgrade tijdens bouw kost €200-500, achteraf €1.500-2.500. Direct regelen met netbeheerder/aannemer!",
      saving: "€1.000-2.000 bespaard vs. achteraf upgraden"
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Oversized Zonnepanelen Voor Toekomst",
      description: "Nieuwbouw = perfecte kans voor maximum zonnepanelen (rekening dak-oriëntatie, draagkracht). Installeer meer dan huidig verbruik: toekomstige EV, uitbreiding gezin, zwembad, sauna = extra stroombehoeften. Bij 4.000 kWh huidig verbruik: installeer 8-10 kWp (20-25 panelen) = ruimte groei zonder later dakwerk.",
      saving: "Toekomst-proof voor groeiende energiebehoefte"
    },
    {
      icon: <Battery className="h-8 w-8 text-yellow-500" />,
      title: "Kies Modulaire Batterij Met Uitbreidingsmogelijkheid",
      description: "SMILE5 batterij: start met 5 kWh, later uitbreiden naar 30 kWh zonder nieuwe inverter. Perfect voor nieuwbouw: begin met basisbehoeften (€6.000), bij groeiende gezin/EV eenvoudig extra modules bijplaatsen (€1.500-2.000 per 5 kWh). Flexibel en kostenefficiënt!",
      saving: "Gespreide investering + toekomstbestendig"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-500" />,
      title: "Installeer Smart Home Integratie Direct",
      description: "Nieuwbouw = ideaal moment smart home bekabeling (KNX, Fibaro, Home Assistant). Integreer thuisbatterij met verlichting, verwarming, laadpaal = intelligent energiemanagement. Voorbeeld: batterij vol → start wasmachine automatisch. Investering: €1.000-3.000, besparing: 10-15% extra efficiëntie.",
      saving: "€200-400/jaar extra door automatisering"
    },
    {
      icon: <Euro className="h-8 w-8 text-yellow-500" />,
      title: "Financier Via Hypotheek Met Energielabel-Korting",
      description: "Thuisbatterij + zonnepanelen = betere energielabel (A++++) = lagere hypotheekrente (0,1-0,3% korting mogelijk). Bij €300.000 hypotheek: 0,2% korting = €600/jaar = €18.000 over 30 jaar! Meefinancieren in hypotheek = lagere maandlasten dan achteraf lening. Bespreek met hypotheekadviseur!",
      saving: "€15.000-20.000 over hypotheekduur"
    }
  ];

  const faqs = [
    {
      question: "Waarom zou ik een thuisbatterij direct meenemen in nieuwbouw?",
      answer: "Vijf redenen: (1) Lagere installatiekosten: €600-1.200 bespaard vs. later installeren (geen dubbele arbeidskosten, geen braakwerk). (2) BENG-eisen makkelijker halen: batterij verbetert BENG2 en BENG3 score met 15-25% = vergunning eenvoudiger + mogelijk goedkopere bouwmethode elders. (3) Optimale systeemintegratie: architect ontwerpt complete energiesysteem (PV, batterij, warmtepomp, laadpaal) als geheel = 10-20% hogere efficiëntie. (4) 0% BTW: nieuwbouw woningen = maximaal profiteren fiscale voordelen. (5) Toekomst-proof: klaar voor capaciteitstarieven (2026+), netcongestie-regelgeving, energieopslag-verplichting. Nu investeren = later geen problemen/kosten."
    },
    {
      question: "Helpt een thuisbatterij om de BENG-eisen te halen?",
      answer: "Ja, significant! BENG heeft 3 eisen: (1) BENG1 (energiebehoefte gebouw): batterij helpt beperkt (indirect via optimalisatie). (2) BENG2 (primair fossiel energieverbruik): batterij verlaagt netinkoop (fossiele energie) met 40-60% = score 0,10-0,15 verbetering. Grens: 0,40, met batterij vaak 0,25-0,35 haalbaar. (3) BENG3 (aandeel hernieuwbare energie): batterij verhoogt zelfverbruik zonnestroom = hernieuwbaar aandeel stijgt 15-25%. Grens: 0,40, met batterij 0,50-0,70 haalbaar. Praktijk: batterij maakt verschil tussen wel/niet voldoen aan BENG. Architect rekent dit door in energieberekening (EPG software)."
    },
    {
      question: "Wat zijn de installatiekosten van thuisbatterij in nieuwbouw?",
      answer: "Installatiekosten nieuwbouw lager dan bestaande bouw: (1) Arbeidskosten: €400-800 (nieuwbouw) vs. €1.000-1.500 (bestaand) - integratie in bouwproces = efficiënter. (2) Materiaalkosten batterij: SMILE-B3 2,9 kWh €3.500, SMILE5 5 kWh €5.785, SMILE5 10 kWh €7.500, SMILE-T10 15 kWh €9.500 (zelfde als bestaand). (3) Extra infrastructuur: meterkast upgrade €200-400, bekabeling €150-300, aardlekschakelaar €100-200 = totaal €450-900 extra (nieuwbouw goedkoper door directe integratie). Totaalinvestering nieuwbouw: €4.000-10.500 afhankelijk van capaciteit. BTW: 0% op batterij + PV, 21% op installatie (tenzij nieuwbouw pakket)."
    },
    {
      question: "Kan ik thuisbatterij meefinancieren in mijn hypotheek?",
      answer: "Ja, sterk aanbevolen! Voordelen: (1) Lagere rente: hypotheekrente (3-4%) vs. consumptieve lening (6-10%) = €500-1.500 bespaard over looptijd. (2) Langere looptijd: 30 jaar hypotheek = lagere maandlasten (€15 i.p.v. €75/maand voor €10.000 batterij). (3) Energielabel-korting: thuisbatterij + PV = A++++ label = 0,1-0,3% hypotheekrente-korting mogelijk = €15.000-20.000 voordeel over 30 jaar! (4) Aflossingsvrij mogelijk: flexibelere financiering. (5) Fiscaal voordeel: hypotheekrenteaftrek (tot 36,5% aftrekbaar). Voorwaarde: bespreek VAN TEVOREN met hypotheekadviseur, maximaliseer energielabel, laat taxateur A++++ label waarderen. Investering: €10.000 batterij = €30/maand hypotheeklasten, besparing €75/maand energie = netto €45 voordeel!"
    },
    {
      question: "Welke batterij is het beste voor nieuwbouw?",
      answer: "Afhankelijk van woning en gezinsgrootte - 4 scenario's: (1) Starterswoning (80-100 m², 2 personen): SMILE-B3 (2,9 kWh) €3.500, basis zelfvoorziening 60%, BENG-compliant. (2) Gezinswoning (120-150 m², 3-4 personen): SMILE5 (5-10 kWh) €5.785-7.500, populairste keuze, 75% zelfvoorziening, modulair uitbreidbaar. (3) Vrijstaand (180-220 m², 4-5 personen + EV): SMILE5 uitgebreid (15 kWh) of SMILE-T10 €9.500-11.000, 80% zelfvoorziening, EV-ondersteuning. (4) Villa (200+ m², all-electric, zwembad): SMILE-G3-T10 3-fase (20 kWh) €13.500, 90% zelfvoorziening, energieneutraal. Tip nieuwbouw: kies modulaire SMILE5 (start 5 kWh, uitbreiden tot 30 kWh) = flexibel voor groeiende gezin/behoeften zonder nieuwe inverter!"
    },
    {
      question: "Hoe zorg ik dat de aannemer/architect rekening houdt met thuisbatterij?",
      answer: "Proactief communiceren in ontwerpfase (7 stappen): (1) Voorontwerp-fase: geef aan dat thuisbatterij gewenst is, architect neemt mee in energieconcept en technische ruimte. (2) Technisch ontwerp: bespreek locatie batterij (technische ruimte 15-25°C, geen vocht, veilig), bekabeling (directe verbinding meterkast), ventilatie. (3) Elektrisch schema: elektricien dimensioneert meterkast, groepen, hoofdaansluiting (3×25A minimaal) correct. (4) BENG-berekening: architect rekent batterij mee in EPG-software, toont verbetering BENG-scores. (5) Installatie-plan: aannemer plant installatie thuisbatterij in bouwschema (na elektrische infrastructuur, voor oplevering). (6) Installateur: regel erkende batterij-installateur (StayCool!) voor installatie en inbedrijfstelling. (7) Oplevering: controleer werking, monitoring, garantie-registratie. Document alles schriftelijk!"
    },
    {
      question: "Wat zijn typische fouten bij thuisbatterij in nieuwbouw?",
      answer: "Zes veelvoorkomende fouten (en hoe te voorkomen): (1) Te laat communiceren: na elektrische installatie is aanpassing duur/complex. Oplossing: voor bouwstart bespreken. (2) Onderdimensionering hoofdaansluiting: 1-fase 40A onvoldoende voor warmtepomp + laadpaal + batterij. Oplossing: 3×25A (63A) direct regelen. (3) Verkeerde locatie: vochtige kelder of zolder &gt;0°C = korte levensduur batterij. Oplossing: droge technische ruimte 15-25°C. (4) Geen uitbreidingsruimte: te kleine meterkast of geen ruimte extra batterijmodules. Oplossing: plan 50% extra ruimte meterkast + technische ruimte. (5) Onvoldoende bekabeling: 6mm² kabel onvoldoend voor toekomstige uitbreiding. Oplossing: 10mm² direct aanleggen (€50 extra). (6) Geen smart home bekabeling: achteraf aanleggen = duur. Oplossing: plan KNX/netwerkkabels direct (€300-500)."
    },
    {
      question: "Hoeveel bespaar ik met thuisbatterij in nieuwbouw vs. later installeren?",
      answer: "Directe besparingen nieuwbouw: (1) Installatiekosten: €600-1.200 goedkoper (geïntegreerd in bouwproces vs. aparte installatie). (2) Infrastructuur: €200-500 bespaard (meterkast, bekabeling direct correct vs. achteraf aanpassen). (3) BENG-optimalisatie: €500-2.000 bespaard (batterij = betere BENG score = mogelijk goedkopere isolatie/installaties elders haalbaar). (4) Hypotheekfinanciering: €1.000-2.000 bespaard (lagere rente hypotheek vs. consumptieve lening + energielabel-korting). (5) Direct rendement: €500-1.500/jaar energiebesparing vanaf dag 1 (geen gemiste jaren). Totaal voordeel nieuwbouw vs. 5 jaar later installeren: €3.000-8.000 + €2.500-7.500 gemiste energiebesparing = €5.500-15.500 verschil! Plus: minder gedoe, optimale integratie, betere prestaties."
    }
  ];

  return (
    <>
      <MetaTags
        title="Thuisbatterij Nieuwbouw | BENG-Eisen Halen | €1.000-2.000 Goedkoper Direct Meenemen | StayCool"
        description="Thuisbatterij direct in nieuwbouw = €1.000-2.000 goedkoper ✓ BENG-score +15-25% ✓ Optimale integratie ✓ 0% BTW ✓ Hypotheek meefinancieren ✓ Toekomst-proof ✓ Limburg"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          serviceType: "Thuisbatterij Nieuwbouw Installatie",
          description: "Thuisbatterij installatie in nieuwbouw woningen. Optimale systeemintegratie, lagere installatiekosten, BENG-eisen makkelijk halen. Compleet advies en installatie door StayCool in Limburg.",
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
            Thuisbatterij in Nieuwbouw: Direct Meenemen = €1.000-2.000 Goedkoper + BENG-Eisen Halen
          </h1>

          <p className="text-xl md:text-2xl text-yellow-900 mb-8 max-w-3xl">
            Perfect moment voor thuisbatterij: lagere installatiekosten, optimale systeemintegratie, BENG-scores verbeteren, 0% BTW, hypotheek meefinancieren. Start energieonafhankelijk!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Gratis Nieuwbouw-Advies
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
              <Building className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold mb-1">Nieuwbouw = Perfecte Moment voor Thuisbatterij</p>
                <p className="text-sm">
                  Lagere kosten, betere integratie, BENG-eisen halen, hypotheek meefinancieren. Later installeren = €1.000-2.000 duurder + gemiste besparing!
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
              Waarom Thuisbatterij Direct in Nieuwbouw Slim Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unieke kans voor optimale energiesysteem vanaf dag 1
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
              Waarom Nieuwbouw het Perfecte Moment Is Voor Thuisbatterij
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              <strong>Nieuwbouw woningen</strong> bieden unieke kans voor thuisbatterij: elektrische infrastructuur nog open, architect/aannemer kunnen optimale locatie plannen, alle systemen (zonnepanelen, warmtepomp, laadpaal, batterij) als één geheel ontwerpen. Dit resulteert in lagere installatiekosten (€600-1.200 bespaard), betere systeemintegratie (10-20% hogere efficiëntie) en toekomstbestendig design.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Daarnaast: <strong>BENG-eisen</strong> (Bijna Energie Neutrale Gebouwen) worden vanaf 2026 jaarlijks strenger. Thuisbatterij verbetert BENG2 (fossiel verbruik) en BENG3 (hernieuwbaar aandeel) met 15-25% = makkelijker vergunning + mogelijk goedkopere bouwmethode elders. Combineer met 0% BTW, ISDE subsidie warmtepomp en hypotheekfinanciering voor maximaal voordeel. Later installeren = €1.000-2.000 duurder + gemiste energiebesparing + aanpassingswerk. Nu investeren = slimste keuze!
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              4 Concrete Voordelen Thuisbatterij in Nieuwbouw
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
                      <p className="text-sm font-bold text-red-700 mb-2">❌ Later Installeren:</p>
                      <p className="text-sm text-gray-700">{benefit.before}</p>
                    </div>
                    <div className="bg-green-50 rounded p-4">
                      <p className="text-sm font-bold text-green-700 mb-2">✅ Direct in Nieuwbouw:</p>
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
              Nieuwbouw Configuraties: Van Starter Tot Villa
            </h2>

            <div className="space-y-8 mb-8">
              {scenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-yellow-500 text-gray-900 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{scenario.type}</h3>
                        <p className="text-sm">{scenario.house}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Zelfvoorziening</p>
                        <p className="text-2xl font-bold">{scenario.selfSufficiency}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Zonnepanelen</p>
                        <p className="text-sm font-bold text-gray-900">{scenario.solar}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Batterij</p>
                        <p className="text-sm font-bold text-gray-900">{scenario.battery}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Warmtepomp</p>
                        <p className="text-sm font-bold text-gray-900">{scenario.heatpump}</p>
                      </div>
                      <div className="bg-gray-50 rounded p-4">
                        <p className="text-sm text-gray-600 mb-1">Investering</p>
                        <p className="text-sm font-bold text-gray-900">{scenario.investment}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Jaarlijkse Besparing</p>
                          <p className="text-xl font-bold text-green-600">{scenario.saving}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Terugverdientijd</p>
                          <p className="text-xl font-bold text-yellow-600">{scenario.payback}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded p-3 mb-3">
                      <p className="text-sm font-bold text-blue-700">{scenario.beng}</p>
                    </div>
                    <p className="text-gray-700 text-center text-sm">
                      <strong>Advies:</strong> {scenario.verdict}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              Hoe Thuisbatterij BENG-Scores Verbetert
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              BENG (Bijna Energie Neutrale Gebouwen) heeft 3 eisen die nieuwbouw moet halen voor vergunning. Thuisbatterij helpt significant bij BENG2 en BENG3:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Situatie</th>
                    <th className="px-4 py-3 text-left">BENG1 (kWh/m²)</th>
                    <th className="px-4 py-3 text-left">BENG2 (fossiel)</th>
                    <th className="px-4 py-3 text-left">BENG3 (hernieuwbaar)</th>
                    <th className="px-4 py-3 text-left">Opmerking</th>
                  </tr>
                </thead>
                <tbody>
                  {bengCalculation.map((calc, index) => (
                    <tr key={index} className={index === 2 ? 'bg-green-50 font-bold' : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-3">{calc.item}</td>
                      <td className="px-4 py-3">{calc.beng1}</td>
                      <td className="px-4 py-3">{calc.beng2}</td>
                      <td className="px-4 py-3">{calc.beng3}</td>
                      <td className="px-4 py-3 text-sm">{calc.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="font-bold text-gray-900 mb-2">✅ BENG Advies:</p>
              <p className="text-gray-700 mb-2">
                Thuisbatterij maakt verschil tussen <strong>wel/niet voldoen aan BENG-eisen</strong>. BENG2 verbetering 0,10-0,15 punten (grens 0,40), BENG3 verbetering 0,15-0,25 punten (grens 0,40). Dit kan €2.000-5.000 besparen op andere bouwmaatregelen (isolatie, triple glas, ventilatie).
              </p>
              <p className="text-gray-700">
                Architect/adviseur berekent dit in EPG-software (energie-prestatie gebouw). Vraag simulatie met/zonder batterij!
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12">
              6 Tips Voor Thuisbatterij in Nieuwbouw
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
            Klaar Voor Energieonafhankelijke Nieuwbouw?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Plan thuisbatterij direct in nieuwbouw: €1.000-2.000 goedkoper, BENG-eisen halen, optimale integratie. Gratis advies voor jouw nieuwbouwproject!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Nieuwbouw-Advies
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
            Veelgestelde Vragen over Thuisbatterij in Nieuwbouw
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
              <p className="text-sm text-gray-600 mb-3">Basis nieuwbouw energiesysteem</p>
              <p className="text-yellow-600 font-bold">70-90% zelfvoorziening</p>
            </Link>

            <Link
              to="/seo/pillar-5-thuisbatterijen/thuisbatterij-smile5"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Battery className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SMILE5 Batterij</h3>
              <p className="text-sm text-gray-600 mb-3">Modulair uitbreidbaar perfect nieuwbouw</p>
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
            Start Energieonafhankelijk in Je Nieuwbouw Woning
          </h2>
          <p className="text-xl mb-8 text-yellow-900">
            €1.000-2.000 goedkoper, BENG-eisen halen, 0% BTW, hypotheek meefinancieren. Complete installatie door gecertificeerde monteurs in Limburg.
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

export default ThuisbatterijNieuwbouwPage;
