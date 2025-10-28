import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, ThermometerSun, Home, Wind, Zap, TrendingUp, Phone, Mail, Euro, Award } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const AircoCapaciteitBerekenen = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Technische Gidsen', path: '/seo/pillar-7-technische-gidsen' },
    { label: 'Airco Capaciteit Berekenen' }
  ];

  const usps = [
    {
      icon: <Calculator className="h-12 w-12 text-sky-500" />,
      title: "Gratis Calculator",
      description: "Bereken direct de juiste kW-waarde voor uw ruimte met onze online tool"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "Professioneel Advies",
      description: "F-gassen gecertificeerde installateurs helpen u met expert advies"
    },
    {
      icon: <Euro className="h-12 w-12 text-sky-500" />,
      title: "Voorkom Verspilling",
      description: "Juiste capaciteit = optimaal comfort én lagere energiekosten"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-sky-500" />,
      title: "Gratis Offerte",
      description: "Na berekening direct een vrijblijvende offerte op maat"
    }
  ];

  const capacityFactors = [
    {
      factor: "Oppervlakte Ruimte",
      description: "Basisberekening: 100 W/m² voor goed geïsoleerde ruimtes, 120-150 W/m² voor matig geïsoleerd",
      icon: <Home className="h-8 w-8 text-orange-500" />
    },
    {
      factor: "Isolatiewaarde",
      description: "A-label: -20% capaciteit, C-label: standaard, E/F-label: +30% capaciteit nodig",
      icon: <ThermometerSun className="h-8 w-8 text-orange-500" />
    },
    {
      factor: "Zonlichttoetreding",
      description: "Zuidgevel met grote ramen: +15-25% capaciteit, noordgevel: standaard",
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />
    },
    {
      factor: "Plafondhoogte",
      description: "Standaard 2,5m: basis,  meer dan 3m: +10% per extra halve meter",
      icon: <Wind className="h-8 w-8 text-orange-500" />
    }
  ];

  const roomExamples = [
    {
      room: "Woonkamer 25m²",
      calculation: "25m² × 100 W/m² = 2.500 W",
      recommended: "2,5 - 3,5 kW airco",
      notes: "Goed geïsoleerd, normaal zonlicht"
    },
    {
      room: "Slaapkamer 15m²",
      calculation: "15m² × 100 W/m² = 1.500 W",
      recommended: "2,0 - 2,5 kW airco",
      notes: "Stille werking prioriteit, lager vermogen"
    },
    {
      room: "Kantoor 40m²",
      calculation: "40m² × 120 W/m² = 4.800 W",
      recommended: "5,0 - 6,0 kW airco",
      notes: "Veel apparatuur, zuidgevel met ramen"
    },
    {
      room: "Zolderruimte 30m²",
      calculation: "30m² × 150 W/m² = 4.500 W",
      recommended: "5,0 - 5,5 kW airco",
      notes: "Matige isolatie, veel warmte-invloed dak"
    }
  ];

  const faqs = [
    {
      question: "Hoe bereken ik de juiste airco capaciteit voor mijn ruimte?",
      answer: "De basisformule is: oppervlakte (m²) × 100-150 W/m². Voor een goed geïsoleerde ruimte van 20m² rekent u 20 × 100 = 2.000 W (2 kW). Voor matig geïsoleerd gebruikt u 120-150 W/m². Daarnaast moet u corrigeren voor factoren zoals zonlicht (+15-25%), plafondhoogte ( meer dan 3m: +10%), en aantal personen (+100W per persoon). Gebruik onze online calculator voor een nauwkeurige berekening inclusief alle correctiefactoren."
    },
    {
      question: "Wat gebeurt er als ik een te kleine airco kies?",
      answer: "Een te kleine airco moet continu op vol vermogen draaien om de gewenste temperatuur te bereiken. Dit leidt tot hoger energieverbruik, meer slijtage, kortere levensduur en onvoldoende koeling op warme dagen. De ruimte wordt nooit optimaal gekoeld en het systeem werkt inefficiënt. Een onderdimensionering van 20-30% kan resulteren in 40-60% hoger energieverbruik en een 50% kortere levensduur van het systeem."
    },
    {
      question: "Is een grotere airco altijd beter?",
      answer: "Nee, een te grote airco is ook niet ideaal. Een overdimensionering leidt tot 'short cycling' waarbij de airco te snel aan en uit schakelt. Dit veroorzaakt: oncomfortabele temperatuurschommelingen, onvoldoende ontvochtiging, hoger energieverbruik door frequent opstarten, meer slijtage aan componenten, en korte looptijden waardoor de inverter-technologie niet optimaal werkt. Het ideaal is een systeem dat 20-40 minuten draait per cyclus."
    },
    {
      question: "Welke rol speelt isolatie bij de capaciteitsberekening?",
      answer: "Isolatie is de belangrijkste factor na oppervlakte. Een A-label woning heeft -20% lagere capaciteit nodig, een C-label is standaard, en een E/F-label +30% extra. Dit komt omdat slecht geïsoleerde woningen meer warmte naar binnen laten in de zomer en meer warmte verliezen in de winter (bij gebruik als warmtepomp). Voor een 25m² ruimte betekent dit verschil tussen 2,0 kW (A-label) en 3,25 kW (E-label). Investeren in isolatie bespaart dus ook op airco-capaciteit."
    },
    {
      question: "Moet ik rekening houden met toekomstige uitbreiding?",
      answer: "Dat hangt af van uw plannen. Als u binnen 2-3 jaar een verbouwing plant of ruimtes samenvoegt, overweeg dan een iets grotere capaciteit (max. 20% extra). Voor verre toekomst: kies nu passend en upgrade later indien nodig. Multi-split systemen zijn ideaal voor gefaseerde uitbreiding - u installeert een krachtige buitenunit en voegt later extra binnenunits toe zonder de buitenunit te vervangen. Dit is kostenefficiënter dan direct overdimensioneren."
    },
    {
      question: "Hoe beïnvloedt zonlicht de benodigde capaciteit?",
      answer: "Zonlicht heeft een groot effect op de warmtelast. Een zuidgevel met grote ramen (+25%), west-oriëntatie (+15%), oost (+10%), noord (standaard). Zolderkamers met dakramen (+30%) door direct zonlicht én dakisolatie-effecten. Oplossingen: buitenzonwering reduceert warmtelast met 60-80%, HR++ glas vermindert warmte-inval met 50%, of u compenseert met +20-30% extra airco-capaciteit. Voor een 20m² zuidkamer betekent dit 3,0 kW i.p.v. 2,0 kW zonder correctie."
    },
    {
      question: "Kan ik één grote airco gebruiken voor meerdere ruimtes?",
      answer: "Eén grote single-split voor open ruimtes (woonkamer + keuken) werkt goed als de ruimtes open met elkaar verbonden zijn en de totale oppervlakte  minder dan 60m² is. Voor gescheiden ruimtes is een multi-split systeem beter: één buitenunit met meerdere binnenunits die elke ruimte individueel regelen. Dit geeft optimaal comfort, lagere energiekosten (alleen koelen waar nodig), en betere temperatuurverdeling. Voor drie kamers van 15-25m² is multi-split 30-40% efficiënter dan drie losse systemen."
    },
    {
      question: "Hoe gebruik ik de online capaciteit calculator?",
      answer: "Onze calculator vraagt: oppervlakte ruimte (m²), isolatielabel (A tot G), oriëntatie (noord/oost/zuid/west), plafondhoogte, aantal personen normaal aanwezig, apparatuur in ruimte (computers, keuken), en type ruimte (woonkamer/slaapkamer/kantoor). De calculator past automatisch alle correctiefactoren toe en geeft een aanbevolen kW-bereik. Bijvoorbeeld: 20m² slaapkamer, B-label, oost, 2,5m hoog, 2 personen = 2,0-2,5 kW. Direct daarna kunt u een gratis adviesgesprek inplannen."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Capaciteit Berekenen Limburg | Juiste kW-waarde bepalen | StayCool Airco"
        description="Airco capaciteit berekenen ✓ Gratis online calculator ✓ Professioneel advies ✓ Voorkom te klein of te groot systeem ✓ Optimaal comfort & besparing. Bereken nu!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Capaciteit Berekening",
          description: "Professionele berekening van de juiste airco capaciteit voor optimaal comfort en energie-efficiëntie",
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
            Airco Capaciteit Berekenen: De Juiste kW-waarde Bepalen
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8">
            Voorkom verspilling en oncomfort - bereken direct de optimale airco capaciteit voor uw ruimte met onze gratis calculator en professioneel advies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Bereken Capaciteit
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Gratis Advies Aanvragen
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sky-50">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Gratis online tool</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Direct resultaat</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Expert verificatie</span>
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

      {/* Main Content - Waarom Juiste Capaciteit Belangrijk Is */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Waarom de Juiste Airco Capaciteit Cruciaal Is
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-6">
              Het bepalen van de juiste airco capaciteit is een van de belangrijkste beslissingen bij de aanschaf van een klimaatsysteem. Een verkeerde keuze leidt tot onnodig hoge kosten, oncomfortabele leefomstandigheden en verminderde levensduur van het systeem. Bij StayCool Airco begeleiden we u door het berekeningsproces om tot de optimale capaciteit te komen voor uw specifieke situatie.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              De Gevolgen van Een Te Kleine Airco
            </h3>
            <p className="text-gray-600 mb-4">
              Een onderdimensioneerde airco is een veelvoorkomende fout die ernstige gevolgen heeft. Wanneer de capaciteit te laag is voor de ruimte, moet het systeem continu op maximaal vermogen draaien om de gewenste temperatuur te bereiken. Dit betekent dat de compressor vrijwel nooit rust neemt, wat leidt tot extreem hoog energieverbruik - vaak 40-60% meer dan een correct gedimensioneerd systeem.
            </p>
            <p className="text-gray-600 mb-4">
              Daarnaast zorgt continue belasting voor versnelde slijtage van cruciale componenten zoals de compressor, ventilator en elektronische regelingen. De levensverwachting van het systeem kan hierdoor met 50% of meer afnemen, van bijvoorbeeld 15 jaar naar slechts 7-8 jaar. Op warme zomerdagen zult u bovendien merken dat de ruimte nooit de gewenste temperatuur bereikt, wat het primaire doel van de airco - comfort - volledig ondergraaft.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Waarom een Te Grote Airco Ook Problematisch Is
            </h3>
            <p className="text-gray-600 mb-4">
              Hoewel het intuïtief lijkt om "voor de zekerheid" een grotere airco te kiezen, brengt overdimensionering eigen problemen met zich mee. Een te krachtig systeem koelt de ruimte te snel af, waardoor het apparaat kortcyclisch gaat werken - continu aan en uit schakelen in korte intervallen van slechts enkele minuten.
            </p>
            <p className="text-gray-600 mb-4">
              Dit short cycling is bijzonder problematisch omdat de airco bij elke start een piekbelasting trekt die 5-7 keer hoger is dan het normale werkverbruik. Frequent opstarten betekent dus hoge energiekosten zonder effectieve koeling. Bovendien heeft het systeem onvoldoende tijd om vocht uit de lucht te halen, wat resulteert in een klamme, oncomfortabele omgeving ondanks de lage temperatuur.
            </p>
            <p className="text-gray-600 mb-4">
              De inverter-technologie in moderne airconditioners werkt optimaal bij langere looptijden van 20-40 minuten. Bij kortcyclisch gebruik kan deze technologie zijn efficiëntievoordelen niet benutten, waardoor u de meerprijs voor een inverter-systeem niet terugverdient in lagere energiekosten.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Het Optimale Capaciteitsbereik
            </h3>
            <p className="text-gray-600 mb-4">
              De ideale airco capaciteit ligt binnen een bereik waarbij het systeem op warme dagen ongeveer 60-80% van zijn maximale capaciteit gebruikt om de gewenste temperatuur te handhaven. Dit geeft de inverter ruimte om op te schalen bij extreme temperaturen, terwijl het systeem op normale zomerdagen efficiënt kan opereren in het optimale middengebied van zijn vermogenscurve.
            </p>
            <p className="text-gray-600 mb-4">
              Voor de meeste toepassingen betekent dit dat u een airco kiest die 10-20% boven de berekende minimale capaciteit ligt. Deze marge compenseert voor extreme weersomstandigheden en zorgt ervoor dat het systeem voldoende reserve heeft zonder in overdimensionering te schieten. Een professionele berekening houdt rekening met alle factoren die de warmtelast beïnvloeden om tot dit optimale bereik te komen.
            </p>
          </div>
        </div>
      </section>

      {/* Capacity Factors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Belangrijkste Factoren bij Capaciteitsberekening
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capacityFactors.map((item, index) => (
              <div key={index} className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.factor}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation Method Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Stap-voor-Stap Berekeningsproces
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Stap 1: Basiscapaciteit Bepalen
            </h3>
            <p className="text-gray-600 mb-4">
              Begin met het meten van de oppervlakte van de ruimte in vierkante meters. Voor rechthoekige kamers vermenigvuldigt u lengte × breedte. Voor L-vormige of complexe ruimtes, verdeel de ruimte in rechthoeken en tel de oppervlaktes op. Meet altijd langs de binnenzijde van de muren voor nauwkeurige resultaten.
            </p>
            <p className="text-gray-600 mb-4">
              Vermenigvuldig vervolgens de oppervlakte met de basis warmtelast per vierkante meter. Voor goed geïsoleerde woningen (energielabel A of B) gebruikt u 100 W/m². Voor gemiddelde isolatie (label C) rekent u met 120 W/m², en voor slecht geïsoleerde ruimtes (label D tot G) hanteert u 150 W/m² of meer. Dit geeft de basis benodigde koelcapaciteit.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Stap 2: Correctie voor Zonlichtinval
            </h3>
            <p className="text-gray-600 mb-4">
              De oriëntatie van de ruimte heeft grote impact op de warmtelast. Een zuidgevel met grote ramen ontvangt in de zomer aanzienlijk meer zonwarmte dan een noordgevel. Tel 25% bij de basiscapaciteit op voor zuidgerichte ruimtes met veel glas, 15% voor westgerichte, 10% voor oostgerichte, en houd de basiscapaciteit aan voor noordgerichte ruimtes.
            </p>
            <p className="text-gray-600 mb-4">
              Zolderkamers met dakramen vereisen speciale aandacht. De combinatie van direct zonlicht door dakvensters en de warmte die via het dak naar binnen komt, verhoogt de warmtelast met gemiddeld 30%. Goede dakisolatie kan dit reduceren, maar meestal blijft een correctie van 20-25% noodzakelijk voor zolderruimtes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Stap 3: Plafondhoogte en Volume
            </h3>
            <p className="text-gray-600 mb-4">
              De standaard berekening gaat uit van een plafondhoogte van 2,4 tot 2,6 meter. Bij hogere plafonds moet u extra capaciteit toevoegen omdat er meer luchtvolume gekoeld moet worden. Voor elke halve meter boven de 2,5 meter voegt u 10% toe aan de berekende capaciteit. Een ruimte van 30m² met 3,5 meter plafondhoogte heeft dus 20% meer capaciteit nodig dan met standaard plafondhoogte.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Stap 4: Personen en Apparatuur
            </h3>
            <p className="text-gray-600 mb-4">
              Elke persoon in de ruimte produceert ongeveer 100 watt aan lichaamswarmte. Voor een woonkamer waar normaal 4 personen verblijven, voegt u dus 400 watt (0,4 kW) toe. Voor kantoren met veel personen wordt dit een significante factor in de berekening.
            </p>
            <p className="text-gray-600 mb-4">
              Apparatuur draagt ook bij aan de warmtelast. Een computer produceert 100-200 watt, een koelkast 150-300 watt, en kookapparatuur in een open keuken 500-1000 watt tijdens gebruik. Voor een thuiskantoor met computer, printer en twee schermen rekent u met een extra 300-400 watt. Voor keukens die open staan met de woonkamer voegt u 500-700 watt toe, afhankelijk van hoe vaak er gekookt wordt.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Stap 5: Finale Berekening en Keuze
            </h3>
            <p className="text-gray-600 mb-4">
              Tel alle factoren bij elkaar op om tot de totale benodigde koelcapaciteit te komen. Het resultaat is in watt - deel dit door 1000 om kilowatt (kW) te krijgen. Dit is de minimale capaciteit die het systeem moet hebben. Voor optimale werking en levensduur kiest u een systeem dat 10-20% boven dit minimum ligt, zodat de airco niet continu op maximaal vermogen hoeft te draaien.
            </p>
            <p className="text-gray-600 mb-4">
              Commerciële airconditioners worden aangeboden in standaard capaciteiten: 2,0 kW, 2,5 kW, 3,5 kW, 5,0 kW, 6,0 kW, etc. Kies de standaardcapaciteit die het dichtst bij uw berekende optimale capaciteit ligt. Bij twijfel tussen twee capaciteiten kiest u de kleinste als uw berekening minder dan 10% onder het hogere vermogen ligt, anders de grotere capaciteit.
            </p>
          </div>
        </div>
      </section>

      {/* Room Examples Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Praktische Rekenvoorbeelden per Ruimtetype
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roomExamples.map((example, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{example.room}</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Berekening:</span> {example.calculation}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Aanbevolen:</span> {example.recommended}
                  </p>
                  <p className="text-gray-600 text-sm mt-2 italic">
                    {example.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Geavanceerde Overwegingen bij Capaciteitskeuze
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Inverter-technologie en Capaciteitsbereik
            </h3>
            <p className="text-gray-600 mb-4">
              Moderne airconditioners met inverter-technologie kunnen hun capaciteit moduleren tussen ongeveer 30% en 120% van hun nominale vermogen. Een 3,5 kW inverter-airco kan dus effectief werken tussen 1,0 kW en 4,2 kW. Deze flexibiliteit maakt de systemen veel veelzijdiger dan oudere on/off-modellen en vergroot de marge voor capaciteitskeuze.
            </p>
            <p className="text-gray-600 mb-4">
              Het is echter belangrijk dat de airco voldoende tijd heeft om in het efficiënte middengebied van 40-70% capaciteit te opereren. Als het systeem voortdurend boven 80% moet draaien, is het te klein gedimensioneerd ondanks de inverter-technologie. Omgekeerd, als het systeem zelden boven 40% komt, werkt het niet optimaal en had een kleinere capaciteit volstaan.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Multi-Split Systemen en Capaciteitsverdeling
            </h3>
            <p className="text-gray-600 mb-4">
              Bij multi-split systemen, waarbij één buitenunit meerdere binnenunits aandrijft, is de capaciteitsberekening complexer. De totale capaciteit van alle binnenunits mag 100-130% van de buitenunit capaciteit zijn, omdat niet alle ruimtes tegelijkertijd maximale koeling nodig hebben. Een 10 kW buitenunit kan bijvoorbeeld drie binnenunits van 3,5 kW, 3,5 kW en 2,5 kW (totaal 9,5 kW) aansturen.
            </p>
            <p className="text-gray-600 mb-4">
              De diversiteitsfactor - het feit dat verschillende ruimtes verschillende koelbehoeftes hebben op verschillende momenten - maakt dit mogelijk. Een slaapkamer heeft bijvoorbeeld overdag minder koeling nodig, terwijl de woonkamer juist 's avonds meer gebruikt wordt. Professionele berekening houdt rekening met gebruikspatronen om de optimale configuratie te bepalen.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Regionale Klimaatfactoren in Limburg
            </h3>
            <p className="text-gray-600 mb-4">
              Het klimaat in Limburg heeft specifieke karakteristieken die de capaciteitsberekening beïnvloeden. Zomers zijn warmer dan in kustgebieden, met temperaturen die regelmatig boven 30°C komen. Toch zijn de extreme hittegolven minder frequent dan in zuidelijker landen, wat betekent dat dimensionering op basis van een 32-35°C buitentemperatuur meestal voldoende is.
            </p>
            <p className="text-gray-600 mb-4">
              Voor woningen die de airco ook als warmtepomp gebruiken in de winter, is de verwarmingscapaciteit vaak de beperkende factor. Airconditioners hebben bij koude buitentemperaturen (onder -5°C) minder verwarmingscapaciteit. Als u het systeem primair voor verwarming wilt gebruiken, kan een grotere capaciteit noodzakelijk zijn dan de koelberekening aangeeft.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Toekomstbestendigheid en Klimaatverandering
            </h3>
            <p className="text-gray-600 mb-4">
              Met klimaatverandering worden zomers warmer en hittegolven frequenter. Het is verstandig om hier rekening mee te houden in uw capaciteitskeuze. Een marge van 15-20% boven de huidige berekening helpt ervoor te zorgen dat het systeem over 10-15 jaar nog steeds adequaat comfort biedt, zelfs als de gemiddelde zomertemperaturen 2-3 graden hoger liggen.
            </p>
            <p className="text-gray-600 mb-4">
              Aan de andere kant verbetert isolatie van woningen gemiddeld. Als u binnen enkele jaren isolatie-upgrades plant (spouwmuurisolatie, dakisolatie, HR++ glas), zal de warmtelast afnemen. In dit scenario is het beter om nu correct te dimensioneren en te vertrouwen op de inverter-technologie om efficiënt om te gaan met de lagere warmtelast na isolatie.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereken Nu de Optimale Airco Capaciteit voor Uw Ruimte
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Gebruik onze gratis online calculator voor een nauwkeurige berekening inclusief alle correctiefactoren, of vraag direct professioneel advies aan van onze F-gassen gecertificeerde specialisten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/capaciteit-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Calculator className="h-6 w-6 mr-2" />
              Start Calculator
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
            Veelgestelde Vragen over Airco Capaciteit
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
            Klaar voor Professioneel Advies?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Onze F-gassen gecertificeerde installateurs helpen u graag met een nauwkeurige capaciteitsberekening en gratis offerte op maat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
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

export default AircoCapaciteitBerekenen;
