import React from 'react';
import { Link } from 'react-router-dom';
import { ThermometerSun, CheckCircle, Shield, Leaf, TrendingDown, Wind, Phone, Calculator, Award, Zap, Euro, Home } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';

const DuurzameVerwarmingPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Duurzaamheid', path: '/duurzaamheid' },
    { label: 'Duurzame Verwarming' }
  ];

  const usps = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Gas-Onafhankelijk",
      description: "Volledig elektrisch verwarmen zonder aardgasaansluiting - klaar voor de toekomst"
    },
    {
      icon: <Euro className="h-12 w-12 text-orange-600" />,
      title: "60% Kostenbesparing",
      description: "Bespaar tot €1.500 per jaar op stookkosten met moderne warmtepomp technologie"
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-blue-600" />,
      title: "80% Minder CO2",
      description: "Reduceer uw CO2-uitstoot met 2,8 ton per jaar - beter voor klimaat én portemonnee"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-600" />,
      title: "Waardestijging 3-8%",
      description: "Verhoog de waarde van uw woning met energiezuinige verwarming"
    }
  ];

  const alternatives = [
    {
      title: "Lucht-Lucht Warmtepomp",
      description: "Meest toegepaste oplossing voor bestaande bouw",
      investment: "€4.500 - €8.000",
      savings: "€900 - €1.500/jaar",
      co2Reduction: "2,8 ton/jaar",
      pros: ["Lage aanschafkosten", "Snelle installatie (1 dag)", "Ook koeling in zomer", "Minimale verbouwing"],
      cons: ["Geen tapwater verwarming", "Aparte oplossing tapwater nodig"]
    },
    {
      title: "Lucht-Water Warmtepomp",
      description: "Volledige CV-vervanging inclusief tapwater",
      investment: "€10.000 - €15.000",
      savings: "€1.200 - €1.800/jaar",
      co2Reduction: "3,2 ton/jaar",
      pros: ["Verwarmt én tapwater", "Werkt met radiatoren", "Complete oplossing", "Subsidie tot €2.500"],
      cons: ["Hogere investering", "Werkt best met vloerverwarming"]
    },
    {
      title: "Hybride Warmtepomp",
      description: "Combinatie warmtepomp + HR-ketel",
      investment: "€6.500 - €11.000",
      savings: "€600 - €900/jaar",
      co2Reduction: "1,8 ton/jaar",
      pros: ["Geleidelijke transitie", "Gas-backup bij extreme kou", "Subsidie tot €2.000", "Laag risico"],
      cons: ["Blijft gas gebruiken", "Lagere besparing", "Minder duurzaam"]
    },
    {
      title: "Warmtepomp + Zonnepanelen",
      description: "Volledig zelfvoorzienend systeem",
      investment: "€10.000 - €16.000",
      savings: "€1.500 - €2.200/jaar",
      co2Reduction: "3,4 ton/jaar",
      pros: ["95% CO2-neutraal", "Minimale energiekosten", "Maximale waardestijging", "Toekomstbestendig"],
      cons: ["Hogere initiële investering", "Dakoppervlak nodig"]
    }
  ];

  const transitionSteps = [
    {
      step: 1,
      title: "Isolatie Optimaliseren",
      description: "Begin met verbeteren isolatie voor maximale efficiëntie",
      duration: "1-4 weken",
      investment: "€2.000 - €8.000",
      return: "5-10 jaar"
    },
    {
      step: 2,
      title: "Energiescan Aanvragen",
      description: "Laat uw woning doorlichten voor optimale warmtepomp sizing",
      duration: "2-3 uur",
      investment: "Gratis",
      return: "Direct"
    },
    {
      step: 3,
      title: "Subsidie Aanvragen",
      description: "Vraag ISDE subsidie aan (€2.000-€2.500) via installateur",
      duration: "2-4 weken",
      investment: "€0",
      return: "Direct"
    },
    {
      step: 4,
      title: "Warmtepomp Installeren",
      description: "Professionele installatie door F-gassen gecertificeerd bedrijf",
      duration: "1-3 dagen",
      investment: "€4.500 - €15.000",
      return: "6-10 jaar"
    },
    {
      step: 5,
      title: "Gasaansluiting Opzeggen",
      description: "Bespaar €250/jaar vaste gaskosten na volledige elektrificatie",
      duration: "1-2 maanden",
      investment: "€0",
      return: "Direct"
    }
  ];

  const benefits = [
    "Geen afhankelijkheid meer van gasprijs stijgingen",
    "Voorbereiding op gasloze wijken vanaf 2025",
    "60% lagere maandelijkse energiekosten",
    "2,8-3,4 ton CO2-reductie per jaar",
    "3-8% waardestijging van uw woning",
    "Energielabel verbetering (minimaal 2 stappen)",
    "Subsidie tot €2.500 via ISDE regeling",
    "Koeling in de zomer (lucht-lucht systemen)"
  ];

  const faqs = [
    {
      question: "Waarom zou ik afscheid nemen van gas?",
      answer: "Er zijn meerdere redenen om van het aardgas af te stappen. Ten eerste stijgen gasprijzen structureel en zijn ze volatiel - de afgelopen 3 jaar varieerden prijzen tussen €0,70 en €2,50 per m³. Elektriciteitsprijzen zijn stabieler en dalen door toenemend aandeel hernieuwbare energie. Ten tweede gaat Nederland gefaseerd van het aardgas af: nieuwbouw mag vanaf 2026 niet meer op gas worden aangesloten, en veel gemeenten werken aan wijkgerichte aanpak waarbij hele buurten tussen 2025-2050 van het gas afgaan. Ten derde is gasverwarming verantwoordelijk voor 30% van huishoudelijke CO2-uitstoot. Door nu over te stappen naar duurzame verwarming, loopt u vooruit op regelgeving en profiteert u van huidige subsidies, terwijl u uw CO2-voetafdruk met 80% reduceert en jaarlijks €900-1.500 bespaart."
    },
    {
      question: "Wat zijn de beste alternatieven voor gasverwarming?",
      answer: "De beste alternatieven zijn warmtepompen, die warmte uit de buitenlucht halen en deze met hoog rendement (400-500%) gebruiken voor verwarming. Voor bestaande woningen zijn er drie hoofdopties: (1) Lucht-lucht warmtepomp (€4.500-8.000) verwarmt direct via binnen-units en is ideaal voor goed geïsoleerde woningen, met ook koeling in de zomer. (2) Lucht-water warmtepomp (€10.000-15.000) verwarmt via radiatoren/vloerverwarming én tapwater, vervangt complete CV-ketel. (3) Hybride warmtepomp (€6.500-11.000) combineert warmtepomp met HR-ketel als backup, geschikt voor slecht geïsoleerde woningen of als overgangsstap. Voor optimale duurzaamheid en besparing adviseren wij een lucht-lucht warmtepomp met zonnepanelen (totaal €10.000-16.000), wat resulteert in 95% CO2-neutrale verwarming en €1.500-2.200 jaarlijkse besparing."
    },
    {
      question: "Hoeveel bespaar ik op mijn energierekening?",
      answer: "De besparingen hangen af van uw huidige situatie en de gekozen warmtepomp. Een gemiddelde woning met gasverwarming (1.200 m³/jaar à €1,50) betaalt €1.800 voor verwarming plus €250 vaste aansluitkosten = €2.050 totaal. Een lucht-lucht warmtepomp verbruikt 3.000 kWh elektriciteit (à €0,30) = €900, een besparing van €1.150 (56%). Een lucht-water warmtepomp inclusief tapwater verbruikt 4.500 kWh = €1.350, besparing €700 (34%). Met zonnepanelen die 60% van elektriciteit leveren, dalen kosten naar €360-540, totale besparing €1.510-1.690 (82%). Over 20 jaar levensduur accumuleert dit tot €23.000-33.000 aan kostenbesparingen, exclusief de bespaarde €5.000 aan vaste gaskosten."
    },
    {
      question: "Is mijn woning geschikt voor duurzame verwarming?",
      answer: "Bijna elke woning is geschikt voor duurzame verwarming, maar de optimale oplossing verschilt per situatie. Goed geïsoleerde woningen (energielabel A-C) zijn ideaal voor lucht-lucht warmtepompen die direct verwarmen zonder CV-systeem. Redelijk geïsoleerde woningen (label D-E) kunnen hybride systemen overwegen of eerst isoleren (spouwmuren, dak, glas) voordat een volledige warmtepomp wordt geïnstalleerd. Slecht geïsoleerde woningen (label F-G) moeten eerst investeren in isolatie, wat sowieso rendabel is met terugverdientijden van 5-10 jaar. Woningen met vloer- of wandverwarming zijn perfect voor lucht-water warmtepompen. Wij voeren gratis een energiescan uit om de optimale strategie en ROI voor uw specifieke situatie te bepalen, inclusief stappenplan en subsidie-advies."
    },
    {
      question: "Wat gebeurt er met mijn gasaansluiting?",
      answer: "Na installatie van een volledige elektrische verwarmingsoplossing (lucht-water warmtepomp of lucht-lucht + elektrisch tapwater) kunt u uw gasaansluiting opzeggen. Dit bespaart €250 per jaar aan vaste aansluitkosten. De fysieke afsluiting kost eenmalig €350-500 via uw netbeheerder. Let op: zorg dat u géén gasleidende apparaten meer heeft (fornuis, geiser, droger) voordat u opzegt. Alternatief is de aansluiting 'inactief' laten staan (geen vaste kosten meer sinds 2022) voor eventuele toekomstige gebruik. Wij adviseren om de aansluiting pas op te zeggen als uw warmtepomp minimaal 1 winter heeft gedraaid en u zeker bent van de prestaties. Bij hybride systemen blijft gasaansluiting noodzakelijk, maar verbruik daalt met 70-80%, wat €600-900 jaarlijks bespaart."
    },
    {
      question: "Krijg ik subsidie voor duurzame verwarming?",
      answer: "Ja, via de ISDE regeling (Investeringssubsidie Duurzame Energie) krijgt u substantiële subsidie: €2.500 voor een volledige warmtepomp (lucht-water of lucht-lucht), €2.000 voor een hybride warmtepomp. Voorwaarden: installatie door erkend bedrijf (F-gassen gecertificeerd), minimaal energielabel A++ voor het systeem, aanvraag binnen 6 maanden na installatie. Gemeenten in Limburg bieden vaak aanvullende regelingen: Maastricht geeft €1.500 extra bij gasafsluiting, Heerlen €1.000 voor energetische renovatie, Venlo €750 voor sociale huurwoningen. Totale subsidies kunnen oplopen tot €4.000-4.500. Wij verzorgen de volledige subsidieaanvraag inclusief documentatie, energielabel berekening, en communicatie met RVO, zodat u gegarandeerd de maximale subsidie ontvangt zonder administratieve rompslomp."
    },
    {
      question: "Hoe lang duurt de installatie?",
      answer: "De installatieduur hangt af van het type systeem. Een lucht-lucht warmtepomp (1-3 binnenunits) wordt binnen 1 dag geïnstalleerd: plaatsing buitenunit, doorboren muren, montage binnenunits, leidingen trekken, vacuümtrekken, vullen met koudemiddel, testen. Een lucht-water warmtepomp voor CV-vervanging duurt 2-3 dagen: verwijderen oude CV-ketel, plaatsen buitenunit, aansluiten op CV-systeem, installeren buffervat, elektrische aansluitingen, vullen en ontluchten, uitgebreid testen. Extra tijd is nodig als radiatoren vervangen moeten worden (2-5 dagen extra) of vloerverwarming wordt aangelegd (1-3 weken). Wij plannen altijd een voorinspectie om de exacte scope en tijdsduur te bepalen. De woning blijft tijdens installatie bewoonbaar, alleen op het moment van ombouw (3-4 uur) heeft u geen verwarming."
    },
    {
      question: "Wat als het heel koud wordt?",
      answer: "Moderne warmtepompen functioneren uitstekend tot -20°C buitentemperatuur, wat in Nederland slechts enkele dagen per decennium voorkomt. In Limburg komt de temperatuur gemiddeld 2-3 dagen per jaar onder -10°C. Bij extreme kou daalt de COP (rendement) van 4,5 naar 2,5, maar de warmtepomp blijft efficiënter dan elektrische verwarming of gasketel. Premium merken zoals Daikin Altherma en Mitsubishi Heavy Hyper Heating hebben speciale 'winterprestatie' technologie die volledige capaciteit garandeert tot -25°C. Voor extra zekerheid kunt u kiezen voor een hybride systeem met gas-backup (schakelt automatisch bij <-5°C) of een elektrische bijverwarming (infraroodpanelen of elektrische radiator) voor de koudste nachten. In de praktijk zijn deze backups zelden nodig - onze klanten rapporteren 99% uptime en comfortabele temperaturen tijdens alle Nederlandse winters."
    }
  ];

  return (
    <>
      <MetaTags
        title="Duurzame Verwarming Limburg | Afscheid van Gas | StayCool Airco"
        description="Duurzame verwarming zonder gas ✓ 60% kostenbesparing ✓ 80% minder CO2 ✓ 3-8% waardestijging ✓ Tot €2.500 subsidie. Gratis advies!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Duurzame Verwarming zonder Aardgas",
          description: "Volledige transitie naar elektrische verwarming met warmtepompen - 60% kostenbesparing en 80% CO2-reductie",
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

      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4 py-4" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                Gas-Onafhankelijk Verwarmen
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Duurzame Verwarming: Afscheid van Aardgas met Moderne Warmtepompen
            </h1>
            <p className="text-xl md:text-2xl text-orange-50 mb-8 leading-relaxed">
              Bespaar 60% op stookkosten, reduceer CO2-uitstoot met 2,8 ton per jaar, en bereid uw woning voor op de gasloze toekomst - met tot €2.500 subsidie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <Phone className="h-6 w-6 mr-2" />
                Gratis Transitieplan
              </Link>
              <Link
                to="/capaciteit-calculator"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg shadow-xl"
              >
                <Calculator className="h-6 w-6 mr-2" />
                Bereken Besparing
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-200" />
                <span>60% Lagere Kosten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-200" />
                <span>2,8 Ton CO2 Reductie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-200" />
                <span>3-8% Waardestijging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-200" />
                <span>Toekomstbestendig</span>
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
              Waarom Nu Overstappen naar Duurzame Verwarming?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bespaar op kosten, verhoog woningwaarde, en draag bij aan een duurzame toekomst
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
                Nederland Gaat van het Gas Af
              </h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Nederland neemt afscheid van aardgas. Het Klimaatakkoord stelt dat alle nieuwbouwwoningen vanaf 2026 niet meer op het gasnet worden aangesloten, en bestaande woningen worden gefaseerd tussen 2025-2050 gasloos gemaakt via wijkgerichte aanpak. Deze transitie is noodzakelijk om klimaatdoelen te halen: de gebouwde omgeving is verantwoordelijk voor 30% van de nationale CO2-uitstoot, voornamelijk door gasverwarming. Maar er zijn ook financiële redenen: gasprijzen zijn volatiel en stijgen structureel, terwijl elektriciteitsprijzen dalen door toenemend aandeel hernieuwbare energie.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Voor huiseigenaren betekent dit een belangrijke keuze: wacht u tot uw wijk aan de beurt is (risico op haastwerk en hoge kosten), of neemt u nu het initiatief en profiteert u van huidige subsidies, technologische vooruitgang, en waardestijging van uw woning? De cijfers spreken voor zich: vroege adopters van warmtepompen besparen gemiddeld €1.200 per jaar op energiekosten, ontvangen tot €4.000 subsidie, en zien hun woningwaarde stijgen met 3-8% (€10.000-28.000 voor een gemiddelde woning van €350.000).
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  De Vier Alternatieven voor Gasverwarming
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Er zijn vier hoofdalternatieven voor gasverwarming, elk met specifieke voor- en nadelen. De keuze hangt af van uw woningsituatie, budget, en duurzaamheidsambitie. Lucht-lucht warmtepompen zijn de meest toegepaste oplossing voor bestaande woningen: ze zijn betaalbaar (€4.500-8.000 na subsidie), snel te installeren (1 dag), en bieden ook koeling in de zomer. Nadeel is dat ze geen tapwater verwarmen, waarvoor een aparte oplossing nodig is (elektrische boiler of zonneboiler).
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Lucht-water warmtepompen vervangen de complete CV-ketel en verwarmen zowel woning als tapwater. Ze zijn duurder (€10.000-15.000 na subsidie) maar bieden een complete oplossing. Ze werken het beste in combinatie met vloer- of wandverwarming, hoewel moderne systemen ook met radiatoren kunnen werken. Hybride warmtepompen combineren een warmtepomp met een HR-ketel als backup, geschikt voor slecht geïsoleerde woningen of als overgangsstap. De meest duurzame optie is een warmtepomp gecombineerd met zonnepanelen, wat resulteert in 95% CO2-neutrale verwarming en maximale kostenbesparingen.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Financiële Analyse: Wat Bespaart U Echt?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Laten we de financiële kant realistisch doorrekenen voor een gemiddelde woning. Gasverwarming kost momenteel ongeveer €1.800 per jaar (1.200 m³ à €1,50), plus €250 vaste aansluitkosten = €2.050 totaal. Een lucht-lucht warmtepomp met COP 4,5 verbruikt 2.700 kWh elektriciteit (à €0,30) = €810 per jaar. Plus €150 voor elektrisch tapwater = €960 totaal. Besparing: €1.090 per jaar (53%). Over 20 jaar levensduur: €21.800 besparing, minus €5.000 investering (na subsidie) = €16.800 netto voordeel.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Met zonnepanelen wordt het plaatje nog beter. 10 zonnepanelen (€4.000) produceren 3.000 kWh per jaar, waarmee u 60-70% van uw warmtepomp-elektriciteit kunt dekken. Kosten dalen naar €360 (40% zelfgebruik) + €150 tapwater = €510 per jaar. Besparing ten opzichte van gas: €1.540 per jaar (75%). Over 20 jaar: €30.800 besparing, minus €9.000 totale investering (warmtepomp + zonnepanelen na subsidies) = €21.800 netto voordeel. En dit is conservatief gerekend - bij stijgende gasprijzen en dalende elektriciteitsprijzen worden besparingen alleen maar groter.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Is Uw Woning Geschikt?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  De geschiktheid van uw woning voor duurzame verwarming hangt af van isolatie, verwarmingssysteem, en beschikbare ruimte. Goed geïsoleerde woningen (energielabel A-C) zijn ideaal: lucht-lucht warmtepompen werken direct efficiënt, zonder aanpassingen. Redelijk geïsoleerde woningen (label D-E) kunnen vaak ook direct een warmtepomp installeren, maar besparen extra door eerst te isoleren. Slecht geïsoleerde woningen (label F-G) moeten eerst investeren in isolatie (spouwmuren €1.500, dak €2.500, glas €5.000), wat sowieso rendabel is met terugverdientijden van 5-10 jaar.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Qua verwarmingssysteem: woningen met vloer- of wandverwarming zijn perfect voor lucht-water warmtepompen (lage aanvoertemperatuur = hoge efficiëntie). Woningen met radiatoren kunnen ook, mits radiatoren groot genoeg zijn of vervangen worden. Woningen zonder CV-systeem zijn ideaal voor lucht-lucht systemen. Qua ruimte: een buitenunit heeft 80x80 cm nodig op gevel, plat dak, of in tuin (minimaal 3 meter van slaapkamers voor geluid). Binnenunits worden hoog aan de muur gemonteerd. Wij voeren gratis een energiescan uit om de optimale oplossing voor uw situatie te bepalen.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg sticky top-4 border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <ThermometerSun className="h-6 w-6 text-orange-600" />
                  Voordelen Gas-Vrij
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-orange-200">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Gratis Adviesgesprek
                  </Link>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Bel direct: <a href="tel:0462021430" className="font-semibold text-orange-700 hover:text-orange-800">046 202 1430</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Vier Alternatieven voor Gasverwarming
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Vergelijk investeringen, besparingen, en duurzaamheid van moderne verwarmingsoplossingen
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {alternatives.map((alt, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{alt.title}</h3>
                <p className="text-gray-600 mb-6">{alt.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
                  <div>
                    <div className="text-sm text-gray-600">Investering</div>
                    <div className="font-bold text-gray-900">{alt.investment}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Besparing</div>
                    <div className="font-bold text-green-700">{alt.savings}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">CO2 Reductie</div>
                    <div className="font-bold text-blue-700">{alt.co2Reduction}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Voordelen
                    </h4>
                    <ul className="space-y-1 ml-7">
                      {alt.pros.map((pro, i) => (
                        <li key={i} className="text-gray-700 text-sm">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="h-5 w-5 text-orange-600 flex items-center justify-center">⚠</span>
                      Nadelen
                    </h4>
                    <ul className="space-y-1 ml-7">
                      {alt.cons.map((con, i) => (
                        <li key={i} className="text-gray-700 text-sm">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            5 Stappen naar Gas-Vrije Verwarming
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Uw route naar duurzame verwarming met maximale besparing en minimale zorgen
          </p>
          <div className="space-y-6">
            {transitionSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Duur:</span>
                        <div className="font-semibold text-gray-900">{step.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Investering:</span>
                        <div className="font-semibold text-gray-900">{step.investment}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Terugverdientijd:</span>
                        <div className="font-semibold text-gray-900">{step.return}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Veelgestelde Vragen over Duurzame Verwarming
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Alle antwoorden op uw vragen over de overstap naar gas-vrije verwarming
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
      <section className="py-16 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ThermometerSun className="h-16 w-16 text-orange-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor Duurzame Verwarming?
          </h2>
          <p className="text-xl mb-8 text-orange-50 leading-relaxed">
            Neem afscheid van aardgas en bespaar €1.200 per jaar, reduceer CO2 met 2,8 ton, en verhoog uw woningwaarde met 3-8%. Vraag nu gratis advies en ontvang een persoonlijk transitieplan met ROI-berekening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Phone className="h-6 w-6 mr-2" />
              Gratis Transitieplan
            </Link>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg shadow-xl"
            >
              Bel Direct: 046 202 1430
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-orange-100">
            <div className="flex items-center gap-2">
              <Euro className="h-5 w-5" />
              <span>60% Kostenbesparing</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              <span>2,8 Ton CO2 Reductie</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Tot €2.500 Subsidie</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              <span>3-8% Waardestijging</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Gerelateerde Onderwerpen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/seo/pillar-10-duurzaamheid/koudemiddel-r32" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Leaf className="h-8 w-8 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Koudemiddel R32</h4>
              <p className="text-sm text-gray-600">75% milieuvriendelijker</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/co2-reductie-warmtepomp" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <TrendingDown className="h-8 w-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">CO2 Reductie</h4>
              <p className="text-sm text-gray-600">4-6 ton besparing per jaar</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/energielabel-verbetering" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
              <Award className="h-8 w-8 text-sky-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Energielabel Verbetering</h4>
              <p className="text-sm text-gray-600">Verhoog woningwaarde</p>
            </Link>
            <Link to="/seo/pillar-10-duurzaamheid/circulaire-airco" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200">
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

export default DuurzameVerwarmingPage;
