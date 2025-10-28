import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, CheckCircle, ThermometerSun, Maximize2, Users, Droplets, Award, Phone, Mail, Home, AlertCircle } from 'lucide-react';
import MetaTags from '../../../components/MetaTags';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SchemaMarkup from '../../../components/SchemaMarkup';
import LazyImage from '../../../components/LazyImage';

const AircoBinnenunitPositie = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Technische Gidsen', path: '/seo/pillar-7-technische-gidsen' },
    { label: 'Airco Binnenunit Positie' }
  ];

  const usps = [
    {
      icon: <Wind className="h-12 w-12 text-sky-500" />,
      title: "Optimale Luchtstroom",
      description: "Perfecte positie voor gelijkmatige temperatuurverdeling in hele ruimte"
    },
    {
      icon: <Award className="h-12 w-12 text-sky-500" />,
      title: "Expert Advies",
      description: "Professionele plaatsingsanalyse voor maximaal comfort"
    },
    {
      icon: <ThermometerSun className="h-12 w-12 text-sky-500" />,
      title: "Geen Tocht",
      description: "Correcte plaatsing voorkomt koude luchtstroom op personen"
    },
    {
      icon: <Droplets className="h-12 w-12 text-sky-500" />,
      title: "Efficiënt Koelen",
      description: "Juiste hoogte en positie = 15-25% lagere energiekosten"
    }
  ];

  const placementPrinciples = [
    {
      principle: "Hoogte Plaatsing",
      details: "2,0-2,5m vanaf vloer voor optimale luchtstroom en geen tocht",
      icon: <Maximize2 className="h-8 w-8 text-orange-500" />,
      importance: "Kritiek"
    },
    {
      principle: "Afstand tot Plafond",
      details: "Minimaal 10-15cm ruimte boven unit voor luchtaanzuiging",
      icon: <Wind className="h-8 w-8 text-orange-500" />,
      importance: "Belangrijk"
    },
    {
      principle: "Centrale Positie",
      details: "Midden buitenmuur geeft beste verdeling, vermijd hoeken",
      icon: <Home className="h-8 w-8 text-orange-500" />,
      importance: "Aanbevolen"
    },
    {
      principle: "Obstructies Vermijden",
      details: "Geen gordijnen, kasten of obstakels binnen 1,5m voor unit",
      icon: <AlertCircle className="h-8 w-8 text-orange-500" />,
      importance: "Kritiek"
    }
  ];

  const roomTypes = [
    {
      room: "Woonkamer",
      idealPosition: "Centrale positie buitenmuur, 2,2m hoog, gericht van bank/zithoek af",
      height: "2,0-2,5m",
      considerations: ["Geen directe luchtstroom op zitplaatsen", "Vrij zicht voor afstandsbediening", "Niet boven TV (condensdruppels)"],
      airflowPattern: "Horizontaal langs plafond, spreiden over ruimte"
    },
    {
      room: "Slaapkamer",
      idealPosition: "Boven hoofdeinde bed, richting voeteneinde, 2,3m hoog",
      height: "2,2-2,5m",
      considerations: ["Nooit recht boven slaappositie", "Nachtmodus voor stil bedrijf", "Geen direct licht-LED op slapers"],
      airflowPattern: "Zacht langs plafond, vermijd directe luchtstroom bed"
    },
    {
      room: "Kantoor",
      idealPosition: "Achter werkplek, niet boven bureau, centrale muur",
      height: "2,0-2,3m",
      considerations: ["Geen luchtstroom op werkplekken", "Papieren blijven liggen", "Gelijkmatige temperatuur hele ruimte"],
      airflowPattern: "Breed spreidingspatroon, gelijkmatige verdeling"
    },
    {
      room: "Open Keuken/Woonkamer",
      idealPosition: "Tussen keuken en woonruimte, centrale scheidingsmuur",
      height: "2,2-2,5m",
      considerations: ["Compenseer warmte kookapparatuur", "Geen vet/damp direct in unit", "Voldoende capaciteit beide zones"],
      airflowPattern: "Tweezijdige verdeling indien mogelijk"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Te Laag Gemonteerd",
      consequence: "Directe koude luchtstroom op personen, oncomfortabele tocht, ongelijkmatige koeling",
      correctApproach: "Minimaal 2,0m hoog, ideaal 2,2-2,3m voor optimale verdeling zonder tocht"
    },
    {
      mistake: "In Hoek Geplaatst",
      consequence: "Beperkte luchtverdeling, 40-50% van ruimte blijft te warm, energieverspilling",
      correctApproach: "Centrale positie op lange muur voor gelijkmatige verdeling hele ruimte"
    },
    {
      mistake: "Boven Bed/Bank",
      consequence: "Directe koude luchtstroom tijdens gebruik, verkoudheidsklachten, stijve nek",
      correctApproach: "Plaats aan hoofdeinde of zijkant, richt luchtstroom weg van gebruikers"
    },
    {
      mistake: "Achter Gordijnen",
      consequence: "Geblokkeerde luchtstroom, 30% verminderde efficiëntie, sensor meet verkeerde temp",
      correctApproach: "Vrije ruimte 1,5m voor unit, gordijnen mogen nooit unit bedekken"
    },
    {
      mistake: "Direct Zonlicht",
      consequence: "Temperatuursensor meet te hoog, systeem blijft onnodig koelen, 15% hoger verbruik",
      correctApproach: "Vermijd zonlicht op unit, of plaats zonwering indien onvermijdelijk"
    },
    {
      mistake: "Te Dicht bij Plafond",
      consequence: "Beperkte luchtaanzuiging, oververhitting, verhoogd geluidsniveau, storing",
      correctApproach: "Minimaal 10cm ruimte boven unit, ideaal 15cm voor optimale werking"
    }
  ];

  const airflowPrinciples = [
    {
      title: "Warme Lucht Stijgt Op",
      explanation: "Plafondmontage nuttig omdat warme lucht zich ophoopt bij plafond. Unit zuigt deze aan en koelt af naar beneden."
    },
    {
      title: "Koude Lucht Daalt",
      explanation: "Gekoelde lucht is zwaarder en daalt naar vloer. Correcte richting zorgt voor geleidelijke afkoeling zonder tocht."
    },
    {
      title: "Coanda-effect",
      explanation: "Luchtstroom blijft tegen plafond plakken als goed gericht. Dit zorgt voor gelijkmatige verdeling zonder tocht."
    },
    {
      title: "Obstructies Blokkeren",
      explanation: "Gordijnen, kasten of obstakels blokkeren luchtstroom en reduceren effectief bereik met 40-60%."
    }
  ];

  const faqs = [
    {
      question: "Op welke hoogte moet ik de airco binnenunit monteren?",
      answer: "De ideale montagehoogte voor een airco binnenunit is 2,0 tot 2,5 meter vanaf de vloer, gemeten tot de onderkant van de unit. Deze hoogte combineert optimale luchtverdeling met tochtvrij comfort. Bij 2,2-2,3 meter bereikt u het beste compromis: de koude lucht heeft voldoende afstand om geleidelijk af te dalen zonder directe tocht te veroorzaken, terwijl de unit hoog genoeg zit om warme lucht bij het plafond efficiënt aan te zuigen. Te laag monteren ( minder dan 2,0m) veroorzaakt koude luchtstroom direct op personen, wat oncomfortabel is en verkoudheidsklachten kan veroorzaken. Te hoog ( meer dan 2,6m) maakt onderhoud moeilijker en kan leiden tot ongelijkmatige verdeling waarbij de vloer koud blijft. Voor kantoren met veel personen is 2,0-2,2m vaak beter voor snellere afkoeling."
    },
    {
      question: "Waar in de ruimte plaats ik de binnenunit voor beste resultaat?",
      answer: "De optimale positie is centraal op de langste buitenmuur van de ruimte, waarbij de unit zowel visueel als functioneel het beste werkt. Een centrale positie zorgt voor gelijkmatige luchtverdeling naar alle hoeken, waardoor de hele ruimte comfortabel wordt zonder hotspots. Vermijd plaatsing in hoeken - dit beperkt de luchtverdeling tot ongeveer 50-60% van de ruimte en vereist een grotere capaciteit om dezelfde koeling te bereiken. Voor rechthoekige kamers plaatst u de unit op de korte muur in het midden, zodat de lucht de lengte in kan stromen. Let op obstakels: geen kasten, gordijnen of meubels binnen 1,5m voor de unit die de luchtstroom blokkeren. In open ruimtes (woonkamer + keuken) kiest u de scheidingsmuur of positie die beide zones bereikt. Oriëntatie is ook belangrijk - monteer bij voorkeur op een binnenmuur of noordgevel om direct zonlicht op de temperatuursensor te vermijden."
    },
    {
      question: "Kan ik de airco boven mijn bed of bank plaatsen?",
      answer: "Dit wordt sterk afgeraden vanwege gezondheids- en comfortredenen. Directe koude luchtstroom op het lichaam tijdens rust of slaap kan leiden tot verkoudheidsklachten, stijve nek, hoofdpijn en algemeen ongemak. De koude lucht die direct op uw lichaam blaast, koelt lokaal te snel af terwijl de rest van de ruimte te warm blijft. Voor slaapkamers is de beste positie boven het hoofdeinde van het bed, gericht naar het voeteneinde of richting deur. De lucht stroomt dan langs het plafond en daalt geleidelijk af zonder direct op slapers te blazen. Voor woonkamers plaatst u de unit niet boven de zithoek maar aan de zijkant of tegenovergestelde muur. Moderne units hebben instelbare lamellen waarmee u de richting kunt aanpassen - stel deze in op horizontaal of licht naar boven om het Coanda-effect te gebruiken waarbij lucht langs het plafond stroomt. Bij twijfel: plaats de unit waar u niet langdurig zit of ligt."
    },
    {
      question: "Hoeveel ruimte moet er zijn rondom de binnenunit?",
      answer: "Voor optimale werking en onderhoud zijn specifieke ruimtes noodzakelijk. Boven de unit: minimaal 10cm, ideaal 15cm ruimte tot het plafond. Dit is cruciaal voor luchtaanzuiging - te weinig ruimte beperkt de luchtstroom, veroorzaakt turbulentie en kan leiden tot oververhitting. Onder de unit: minimaal 180cm vrije hoogte zonder obstakels voor onderhoud en luchtverdeling. Voor de unit: 150cm volledig vrije ruimte zonder gordijnen, planten, meubels of andere obstakels. Dit is de belangrijkste zone omdat hier de gekoelde lucht uitgeblazen wordt. Opzij: 30cm aan beide zijden is voldoende, maar meer ruimte verbetert de luchtverdeling. Filters moeten toegankelijk blijven - vaak zitten deze aan de voorzijde of onderzijde, dus houd rekening met onderhoudsruimte. Gordijnen zijn een veelgemaakte fout: deze mogen nooit de unit bedekken, ook niet gedeeltelijk. Als gordijnen onvermijdelijk zijn, zorg dan dat ze minimaal 50cm voor de unit hangen en nooit tot het plafond reiken waar de unit hangt."
    },
    {
      question: "Hoe voorkom ik tocht van de airco?",
      answer: "Tocht voorkomen is een combinatie van correcte plaatsing, juiste instellingen en slimme bediening. Plaatsing: monteer de unit 2,2-2,5m hoog en richt de lamellen horizontaal of licht naar boven, nooit naar beneden. Dit activeert het Coanda-effect waarbij koele lucht langs het plafond stroomt en geleidelijk afkoelt. Vermijd plaatsing recht boven zit- of slaapplaatsen. Instellingen: gebruik de swing-functie voor bewegende lamellen die lucht verspreiden in plaats van één richting. Stel de ventilatorsnelheid op 'low' of 'auto' in plaats van 'high' - lagere snelheid geeft minder directe luchtstroom. Kies een temperatuur niet te laag - 24-25°C is comfortabel zonder tocht, 20-21°C veroorzaakt koude luchtstroom. Moderne inverter-units hebben een 'comfort' modus die tocht voorkomt door geleidelijke afkoeling. Voor slaapkamers: gebruik de nachtmodus die na 2 uur de temperatuur verhoogt met 1-2 graden en ventilatorsnelheid verlaagt. Als tocht onvermijdelijk is, overweeg een plafondventilator die lucht mengt voor gelijkmatige temperatuur zonder directe stroom."
    },
    {
      question: "Kan één binnenunit meerdere kamers koelen?",
      answer: "Eén binnenunit kan effectief meerdere verbonden ruimtes koelen als deze open met elkaar in verbinding staan en de totale oppervlakte binnen de capaciteit van de unit valt. Voor optimaal resultaat: de ruimtes moeten breed open zijn ( meer dan 1,5m doorgang zonder deuren), de totale oppervlakte mag niet groter zijn dan de unit aankan (check capaciteitsberekening), en de unit moet centraal geplaatst worden ten opzichte van alle ruimtes. Een woonkamer open verbonden met keuken (totaal 40m²) kan prima met één 5 kW unit als de doorgang breed is. Echter, aparte kamers met deuren ertussen koelen niet effectief met één unit - de koude lucht bereikt afgesloten kamers niet. Voor zulke situaties zijn drie opties: multi-split systeem met meerdere binnenunits op één buitenunit (ideaal voor 2-5 kamers), losse units per kamer (hogere kosten maar flexibel), of ducted systeem met kanalen (duur maar onzichtbaar). Als u één unit wilt voor meerdere open ruimtes, plaats deze dan op de scheidingsmuur gericht naar de grootste ruimte, en zorg voor voldoende capaciteit - reken +20% extra voor open verbindingen door luchtverliezen."
    },
    {
      question: "Moet ik rekening houden met zonlicht bij plaatsing?",
      answer: "Ja, zonlichtinval op de binnenunit heeft significant effect op prestaties en comfort. De temperatuursensor in de unit meet de omgevingstemperatuur om te bepalen wanneer het gewenste niveau bereikt is. Als direct zonlicht op de unit schijnt, meet de sensor aanzienlijk hogere temperaturen (vaak 3-7°C te hoog) dan de werkelijke kamertemperatuur. Dit leidt tot overmatig koelen: het systeem blijft draaien omdat de sensor denkt dat het te warm is, terwijl de rest van de kamer al 20°C is. Resultaat: onnodige energiekosten (+15-25%), oncomfortabele lage temperaturen in schaduwgedeeltes, en verhoogde slijtage. Oplossingen: plaats de unit op een noordgevel zonder direct zonlicht, kies een muur waar geen zon komt (check zonsposities 's ochtends, middag en avond), gebruik zonwering (gordijnen, screens, luifels) om direct licht te weren, of herpositioneer als herplaatsing nodig is. Als zonlicht onvermijdelijk is: sommige units hebben een 'intelligent eye' sensor die meerdere punten meet, of u kunt een externe sensor plaatsen op een schaduwrijke plek. Voor zuidgerichte kamers met veel glas is een iets grotere capaciteit en schaduwplaatsing essentieel."
    },
    {
      question: "Hoe beïnvloedt plaatsing de geluidservaring?",
      answer: "De plaatsing van de binnenunit heeft aanzienlijke impact op de geluidsbeleving, ondanks dat moderne units zeer stil zijn (19-35 dB(A)). Afstand tot luisterposities: hoe verder de unit van uw gebruikelijke posities (bed, bank, werkplek), hoe zachter het geluid. 3-4 meter afstand halveert de waargenomen geluidsintensiteit. Hoogte-effect: plaatsing op 2,2-2,5m in plaats van 1,8m vergroot de afstand tot oren en reduceert geluid met 3-5 dB(A) - merkbaar verschil. Reflecties: plaatsing in een hoek versterkt geluid door reflectie van twee muren; centrale plaatsing op vlakke muur geeft minste resonantie. Obstructies: gordijnen en meubels dempen geluid effectief - een gordijn tussen unit en slaapplaats reduceert ervaren geluid met 30-40%. Ventilatorsnelheid: units direct boven rustplaatsen zijn storender omdat zelfs zacht geluid opvalt; plaats verder weg voor minder overlast. Voor slaapkamers: gebruik nachtmodus met lagere snelheid, plaats unit bij deur i.p.v. bed, en kies units met extra stil design ( minder dan 22 dB(A)). Premium merken hebben 'whisper-quiet' modi met 19 dB(A) - vergelijkbaar met bladeren ritselen. Test altijd plaatsingsopties met geluidsbeleving in gedachten tijdens locatie-inspectie."
    }
  ];

  return (
    <>
      <MetaTags
        title="Airco Binnenunit Positie Limburg | Luchtstroom Optimaliseren | StayCool Airco"
        description="Airco binnenunit positie ✓ Optimale luchtstroom ✓ Geen tocht ✓ Maximaal comfort ✓ Professioneel advies ✓ Correcte hoogte en plaatsing. Gratis advies!"
      />

      <SchemaMarkup
        type="Service"
        data={{
          "@type": "Service",
          name: "Airco Binnenunit Plaatsing",
          description: "Professioneel advies voor optimale binnenunit positie - perfecte luchtstroom, maximaal comfort en efficiënte werking",
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
            Airco Binnenunit Positie: Luchtstroom Perfect Optimaliseren
          </h1>
          <p className="text-xl md:text-2xl text-sky-50 mb-8">
            Correcte plaatsing voor optimale luchtverdeling, tochtvrij comfort en 15-25% lagere energiekosten - laat ons u begeleiden naar de perfecte positie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
            >
              <Wind className="h-6 w-6 mr-2" />
              Gratis Plaatsingsadvies
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
              <span>Expert installateurs</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Geen tocht</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Optimaal comfort</span>
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

      {/* Main Content - Why Position Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Waarom Binnenunit Positie Cruciaal Is
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-6">
              De positie van de binnenunit bepaalt direct het comfort, de efficiëntie en de effectiviteit van uw airconditioner. Een verkeerd geplaatste unit kan resulteren in tocht, ongelijkmatige temperatuurverdeling, 20-30% hoger energieverbruik en onnodig comfort-verlies. Bij StayCool Airco analyseren onze professionele installateurs elke ruimte grondig om de optimale plaatsingslocatie te bepalen voor perfect klimaatcomfort.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Luchtstroom en Temperatuurverdeling
            </h3>
            <p className="text-gray-600 mb-4">
              De binnenunit werkt volgens natuurkundige principes van warme en koude lucht. Warme lucht stijgt op en verzamelt zich bij het plafond, terwijl gekoelde lucht zwaarder is en naar beneden daalt. Een correct geplaatste unit op 2,2-2,5 meter hoogte zuigt efficiënt de warme lucht bij het plafond aan en blaast gekoelde lucht horizontaal langs het plafond uit. Door het Coanda-effect blijft deze koele luchtstroom tegen het plafond 'plakken' en verspreidt zich geleidelijk over de hele ruimte voordat hij afkoelt naar de vloer.
            </p>
            <p className="text-gray-600 mb-4">
              Te lage plaatsing verstoort dit patroon. Een unit op 1,5-1,8 meter hoogte blaast koude lucht direct op personen, wat oncomfortabele tocht veroorzaakt. Bovendien bereikt de unit niet de warme lucht bij het plafond, waardoor de bovenste helft van de ruimte warm blijft terwijl de onderkant overcooled wordt. Dit fenomeen, stratificatie genoemd, leidt tot 25-40% energie-verspilling omdat het systeem blijft koelen terwijl de sensor (meestal op 1,5m hoogte) al een lage temperatuur meet.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Centrale Positie versus Hoekplaatsing
            </h3>
            <p className="text-gray-600 mb-4">
              De horizontale positie in de ruimte is evenzeer kritiek. Een centrale plaatsing op de langste buitenmuur zorgt voor gelijkmatige luchtverdeling naar alle hoeken van de ruimte. De luchtstroom kan zich in alle richtingen verspreiden zonder obstakels, wat resulteert in een homogene temperatuurverdeling met maximaal 2-3°C verschil tussen de warmste en koudste plek.
            </p>
            <p className="text-gray-600 mb-4">
              Hoekplaatsing daarentegen beperkt de luchtverdeling dramatisch. De koude lucht kan slechts in twee richtingen stromen in plaats van vier, wat het effectieve bereik reduceert tot ongeveer 50-60% van de ruimtecapaciteit. Voor een 30m² kamer betekent dit dat slechts 15-18m² effectief gekoeld wordt, terwijl de tegenoverliggende hoek te warm blijft. Dit dwingt u om een grotere capaciteit te kiezen of de temperatuur lager in te stellen, beide resulterend in 30-50% hoger energieverbruik voor hetzelfde comfortniveau.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Obstructies en Luchtstroomblokkades
            </h3>
            <p className="text-gray-600 mb-4">
              Een vaak onderschatte factor zijn obstakels die de luchtstroom blokkeren. Gordijnen die tot het plafond reiken en de unit (gedeeltelijk) bedekken, reduceren de effectieve luchtstroom met 30-50%. De gekoelde lucht wordt gevangen achter het gordijn en kan niet de ruimte in stromen. Bovendien meet de temperatuursensor verkeerde waarden, wat leidt tot overmatig koelen.
            </p>
            <p className="text-gray-600 mb-4">
              Hoge kasten, plantenstandaards of andere meubels binnen 1,5 meter voor de unit hebben een vergelijkbaar effect. Ze blokkeren de horizontale luchtstroom en forceren de koude lucht naar beneden, precies wat u wilt vermijden. De vuistregel is: voor de unit moet minimaal 1,5 meter volledig vrije ruimte zijn, zonder enige obstakels vanaf vloer tot plafond. Dit geldt ook voor de zijden - hoewel hier 30-50cm ruimte volstaat, belemmeren gordijnstangen of decoratie-elementen alsnog de luchtverspreiding.
            </p>
          </div>
        </div>
      </section>

      {/* Placement Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Fundamentele Plaatsingsprincipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placementPrinciples.map((item, index) => (
              <div key={index} className="bg-sky-50 rounded-lg p-6 border-l-4 border-sky-500">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.principle}</h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        item.importance === 'Kritiek' ? 'bg-red-500 text-white' :
                        item.importance === 'Belangrijk' ? 'bg-orange-500 text-white' :
                        'bg-blue-500 text-white'
                      }`}>
                        {item.importance}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Optimale Plaatsing per Ruimtetype
          </h2>
          <div className="space-y-6">
            {roomTypes.map((room, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{room.room}</h3>
                  <span className="text-sm font-semibold px-3 py-1 bg-sky-100 text-sky-800 rounded">
                    {room.height}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ideale Positie:</h4>
                    <p className="text-gray-600 mb-4">{room.idealPosition}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">Luchtstroompatroon:</h4>
                    <p className="text-gray-600">{room.airflowPattern}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Belangrijke Overwegingen:</h4>
                    <ul className="space-y-2">
                      {room.considerations.map((consideration, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Veelgemaakte Plaatsingsfouten
          </h2>
          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
                  {item.mistake}
                </h3>
                <p className="text-gray-700 mb-3 ml-8">
                  <span className="font-semibold">Gevolg:</span> {item.consequence}
                </p>
                <p className="text-gray-700 ml-8">
                  <span className="font-semibold text-green-700">Correcte aanpak:</span> {item.correctApproach}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airflow Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Luchtstroomprincipes Begrijpen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {airflowPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Wind className="h-6 w-6 text-sky-500 mr-2" />
                  {principle.title}
                </h3>
                <p className="text-gray-600">{principle.explanation}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Het Coanda-Effect Optimaal Benutten</h3>
            <p className="text-gray-700 mb-4">
              Het Coanda-effect is een natuurkundig principe waarbij een luchtstroom de neiging heeft om een nabij oppervlak te 'volgen'. Bij airconditioners betekent dit dat als de koele lucht horizontaal of licht naar boven gericht langs het plafond wordt geblazen, de luchtstroom tegen het plafond blijft stromen in plaats van direct naar beneden te vallen.
            </p>
            <p className="text-gray-700">
              Dit effect is essentieel voor tochtvrij comfort: de koude lucht verspreidt zich over het hele plafond voordat hij geleidelijk afkoelt naar de bewoonbare zone. Correcte plaatsing op 2,2-2,5m hoogte met horizontale lamellen maximaliseert dit effect voor optimale verdeling zonder tocht.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Wind className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Optimaal Comfort Begint bij Correcte Plaatsing
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Laat onze experts de perfecte positie bepalen voor uw binnenunit - tochtvrij comfort, gelijkmatige temperatuur en maximale efficiëntie gegarandeerd
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
              Gratis Plaatsingsadvies
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
            Veelgestelde Vragen over Binnenunit Positie
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
            Klaar voor Professionele Plaatsing?
          </h2>
          <p className="text-xl mb-8 text-sky-50">
            Onze gecertificeerde installateurs bepalen de optimale positie voor perfecte luchtstroom en maximaal comfort
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

export default AircoBinnenunitPositie;
