import { programmaticLocations } from './programmaticLocations';

export interface RuimteData {
  slug: string;
  name: string;
  nameArticle: string;
  namePlural: string;
  typicalM2Range: string;
  typicalKwRange: string;
  keyBenefit: string;
  description: string;
  useCases: string[];
  installationTips: string[];
  recommendedFeatures: string[];
  relatedPagePath: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const ruimteData: RuimteData[] = [
  {
    slug: 'slaapkamer',
    name: 'Slaapkamer',
    nameArticle: 'een slaapkamer',
    namePlural: 'slaapkamers',
    typicalM2Range: '10–20 m²',
    typicalKwRange: '2.5 – 3.5 kW',
    keyBenefit: 'Betere nachtrust door ideale slaaptemperatuur (16–19°C)',
    description:
      'Een airco in de slaapkamer koelt \'s zomers snel af en verwarmt \'s winters efficiënt. Kies een stil model voor ongestoorde nachtrust.',
    useCases: [
      'Koelen voor optimale slaaptemperatuur',
      'Fluisterstille nachtmodus',
      'Bijverwarmen in vroeg voorjaar en najaar',
      'Luchtzuivering voor allergieën',
    ],
    installationTips: [
      'Plaats de binnenunit niet direct boven het bed',
      'Kies voor luchtrichting die langs het plafond stroomt',
      'Anti-drip cover voorkomt condenswater geluiden',
    ],
    recommendedFeatures: [
      'Nachtmodus (silent mode)',
      'Wifi-bediening voor preconditioning',
      'Bewegingssensor voor automatische temperatuurregeling',
      'Self-cleaning functie',
    ],
    relatedPagePath: '/airco-voor-slaapkamer',
    faqs: [
      {
        question: 'Hoe stil moet een airco in de slaapkamer zijn?',
        answer:
          'Voor een slaapkamer is een geluidsniveau van maximaal 20–25 dB(A) aan te raden. Moderne split-units met nachtmodus werken vaak op 19–22 dB(A), wat stiller is dan een gefluister. Vraag bij de offerte altijd naar het geluidsniveau in de stille stand van de binnenunit.',
      },
      {
        question: 'Welke temperatuur is ideaal voor de slaapkamer?',
        answer:
          'Slaapexperts adviseren een slaapkamertemperatuur tussen 16 en 19°C. Een airco met programmeerbare tijdklok kan de kamer al voor bedtijd op de gewenste temperatuur brengen, zodat u direct comfortabel kunt slapen.',
      },
      {
        question: 'Hoeveel vermogen heb ik nodig voor mijn slaapkamer?',
        answer:
          'Voor een gemiddelde slaapkamer van 10–20 m² is 2,5 tot 3,5 kW koelvermogen doorgaans voldoende. Op een bovenverdieping of bij veel bezonning adviseren wij het vermogen iets hoger in te schatten. Tijdens een gratis opmeetbezoek berekenen wij het exacte vermogen voor uw situatie.',
      },
      {
        question: 'Waar hang je de binnenunit in de slaapkamer het beste?',
        answer:
          'Hang de binnenunit bij voorkeur niet direct boven het hoofd- of voeteneinde van het bed. Een positie hoog aan een zijwand, waarbij de luchtstroom langs het plafond loopt, geeft de meest gelijkmatige temperatuurverdeling en minste tocht.',
      },
    ],
  },
  {
    slug: 'woonkamer',
    name: 'Woonkamer',
    nameArticle: 'een woonkamer',
    namePlural: 'woonkamers',
    typicalM2Range: '20–50 m²',
    typicalKwRange: '3.5 – 7.0 kW',
    keyBenefit: 'Optimaal comfort in de grootste leefruimte van uw woning',
    description:
      'De woonkamer vraagt het meeste vermogen. Een goed gedimensioneerde airco zorgt voor snel comfort en efficiënt verwarmen in de tussenseizoenen.',
    useCases: [
      'Koelen tijdens hittegolven',
      'Bijverwarmen als CV-ketel uitstaat',
      'Open keuken/woonkamer klimaat',
      'Smart home integratie via WiFi',
    ],
    installationTips: [
      'Hoog aan de wand voor optimale luchtcirculatie',
      'Vermijd plaatsing recht tegenover zitplaatsen',
      'Rekening houden met open keuken (hogere koellast)',
    ],
    recommendedFeatures: [
      'WiFi + app bediening',
      'Coanda effect voor zachte luchtverdeling',
      'Krachtige koelmodus bij snelle afkoeling',
      'Lage stand ventilatie voor rustige avonden',
    ],
    relatedPagePath: '/airco-voor-woonkamer',
    faqs: [
      {
        question: 'Hoeveel vermogen heeft een airco voor de woonkamer nodig?',
        answer:
          'Voor een woonkamer van 20–50 m² is doorgaans 3,5 tot 7,0 kW nodig. Bij een open keuken-woonkamercombinatie of grote raampartijen kan het benodigde vermogen hoger uitvallen. Wij berekenen het exacte vermogen op basis van uw specifieke situatie.',
      },
      {
        question: 'Kan een airco ook mijn woonkamer verwarmen?',
        answer:
          'Ja, moderne split-units zijn in feite lucht-lucht warmtepompen. Ze verwarmen uw woonkamer tot 3 à 4 keer efficiënter dan een elektrische kachel. Ideaal als aanvulling op de cv-ketel in voor- en najaar, wanneer de verwarming nog niet volledig aan hoeft.',
      },
      {
        question: 'Hoe voorkom ik tocht in de woonkamer door de airco?',
        answer:
          'Kies voor een model met Coanda-effect of automatische luchtrichting. Hierbij stroomt de koude lucht langs het plafond en daalt geleidelijk neer, zonder direct op personen te blazen. Positioneer de unit bovendien niet recht tegenover de favoriete zitplaatsen.',
      },
      {
        question: 'Wat kost een airco voor de woonkamer inclusief installatie?',
        answer:
          'Voor een woonkamer airco rekent u doorgaans op €1.800 tot €3.200 all-in, afhankelijk van het merk, vermogen en de complexiteit van het leidingwerk. U ontvangt van ons altijd een gespecificeerde offerte zonder verborgen kosten.',
      },
    ],
  },
  {
    slug: 'zolder',
    name: 'Zolder',
    nameArticle: 'een zolder',
    namePlural: 'zolders',
    typicalM2Range: '15–40 m²',
    typicalKwRange: '3.5 – 5.0 kW',
    keyBenefit: 'Zolders worden \'s zomers vaak onleefbaar warm — airco is de oplossing',
    description:
      'Zolders warmen het snelst op. Een krachtige airco is vaak de enige effectieve oplossing voor zomerse temperaturen tot 40°C op de zolderverdieping.',
    useCases: [
      'Koelen van slaap/werkkamer op zolder',
      'Snelle temperatuurdaling bij hitte',
      'Bijverwarmen in koudere periodes',
      'Ontvochtiging bij vochtproblemen',
    ],
    installationTips: [
      'Kies 20–30% meer vermogen dan de m²-berekening suggereert',
      'Buitenunit via dakleidingwerk of dakkapel',
      'Goede isolatie vermindert de koellast enorm',
    ],
    recommendedFeatures: [
      'Hogere koelcapaciteit (Turbo mode)',
      'Ontvochtingsfunctie',
      'Timer voor preconditioning',
      'Energielabel A++ minimaal vanwege hogere belasting',
    ],
    relatedPagePath: '/airco-voor-zolder',
    faqs: [
      {
        question: 'Waarom heeft een zolder meer koelvermogen nodig?',
        answer:
          'Een zolder heeft direct contact met het dak, dat in de zomer sterk opwarmt. De koellast is daardoor 20–30% hoger dan bij een gelijkwaardige ruimte op de begane grond. Wij adviseren altijd om op de zolder wat ruimer te dimensioneren voor snel en efficiënt koelen.',
      },
      {
        question: 'Hoe wordt het leidingwerk van de zolderunit naar buiten geleid?',
        answer:
          'De meest gebruikte routes zijn via een dakkapel, door een buitenmuur van de topgevel of via een dakdoorvoer. Welke route het meest geschikt is, hangt af van de bouwkundige situatie. Onze monteurs bekijken dit tijdens het opmeetbezoek en stellen de netteste en kortste route voor.',
      },
      {
        question: 'Welk vermogen heb ik nodig voor mijn zolderkamer?',
        answer:
          'Voor een zolder van 15–40 m² is doorgaans 3,5 tot 5,0 kW nodig. Bij slechte dakisolatie of een donker pannendak kan 5 kW of meer noodzakelijk zijn. Een gratis opmeting geeft zekerheid over het juiste vermogen voor uw specifieke situatie.',
      },
      {
        question: 'Kan een airco ook helpen bij vochtproblemen op de zolder?',
        answer:
          'Ja, de ontvochtingsfunctie van een airco verlaagt de relatieve luchtvochtigheid effectief. Dit is met name nuttig op zolders waar condensatie of vochtvorming optreedt. De airco haalt overtollig vocht uit de lucht via de condensafvoer, wat schimmelvorming kan helpen voorkomen.',
      },
    ],
  },
  {
    slug: 'kantoor',
    name: 'Kantoor',
    nameArticle: 'een kantoor',
    namePlural: 'kantoren',
    typicalM2Range: '10–30 m²',
    typicalKwRange: '2.5 – 3.5 kW',
    keyBenefit: 'Optimale kantoortemperatuur (21°C) verhoogt productiviteit met 12%',
    description:
      'Een thuiskantoor of zakelijk kantoor vraagt om constante temperatuurbeheersing. Een airco met WiFi-bediening zorgt voor automatisch comfort.',
    useCases: [
      'Thuiskantoor klimaatbeheersing',
      'Concentratie bij warme zomers',
      'Energiezuinig bijverwarmen buiten kantooruren',
      'Zakelijk: meerdere zones via multi-split',
    ],
    installationTips: [
      'WiFi-aansturing voor tijdstuurprogramma',
      'Stille stand bij videovergaderingen',
      'Plaatsing vermijden boven werkplek (directe luchtstroom)',
    ],
    recommendedFeatures: [
      'WiFi + app bediening',
      'Timer/planning functie',
      'CO2-sensor compatibiliteit',
      'Fluisterstil (≤23 dB binnenunit)',
    ],
    relatedPagePath: '/airco-kantoor',
    faqs: [
      {
        question: 'Hoe stil moet een airco op het kantoor zijn tijdens vergaderingen?',
        answer:
          'Voor videovergaderingen en geconcentreerd werk is een geluidsniveau van maximaal 23 dB(A) ideaal. De meeste moderne split-units halen in de stille stand 19–23 dB(A). Vraag bij de offerte specifiek naar het geluidsniveau in de laagste stand van de binnenunit.',
      },
      {
        question: 'Kan ik de kantoorairco op tijden instellen?',
        answer:
          'Ja, alle moderne airco\'s met WiFi-module beschikken over een uitgebreide timer- en planningsfunctie via de bijbehorende app. U kunt de airco automatisch laten starten voor aanvang van de werkdag, zodat u altijd een comfortabele werktemperatuur aantreft.',
      },
      {
        question: 'Is een airco voor mijn thuiskantoor zakelijk aftrekbaar?',
        answer:
          'Als u de airco uitsluitend zakelijk gebruikt en de ruimte voldoet aan de criteria voor een zelfstandige werkruimte, kan de airco (deels) aftrekbaar zijn als bedrijfskosten. Wij adviseren u hierover te overleggen met uw boekhouder of belastingadviseur.',
      },
      {
        question: 'Wat is het verschil tussen een airco voor thuiskantoor en zakelijk gebruik?',
        answer:
          'Voor een thuiskantoor volstaat doorgaans een enkele split-unit. Voor een groter zakelijk kantoor met meerdere ruimtes is een multi-split systeem of een VRF-systeem efficiënter. Wij adviseren beide toepassingen en bieden ook onderhoudscontracten voor zakelijke klanten.',
      },
    ],
  },
  {
    slug: 'winkel',
    name: 'Winkel',
    nameArticle: 'een winkel',
    namePlural: 'winkels',
    typicalM2Range: '30–150 m²',
    typicalKwRange: '5.0 – 14.0 kW',
    keyBenefit: 'Aangenaam winkelklimaat verhoogt klantenverblijftijd en omzet',
    description:
      'Winkels en horecagelegenheden hebben hogere koellasten door warmtebronnen (verlichting, mensen). Een multi-split systeem is vaak de beste oplossing.',
    useCases: [
      'Klantcomfort in winkel',
      'Medewerkers ARBO-klimaat',
      'Horecagelegenheid koeling',
      'Showroom temperatuurbeheersing',
    ],
    installationTips: [
      'Multi-split voor grote oppervlaktes',
      'Onderhoudscontract aanbevolen voor continuïteit',
      'Rekening houden met warmtebronnen (verlichting, klanten)',
    ],
    recommendedFeatures: [
      'Multi-split systeem',
      'Onderhoudscontract',
      'Krachtige koeling',
      'Energiezuinig (zakelijk: aftrekbaar)',
    ],
    relatedPagePath: '/airco-winkel',
    faqs: [
      {
        question: 'Welk type airco is het meest geschikt voor een winkel?',
        answer:
          'Voor de meeste winkels is een multi-split systeem de beste keuze: één buitenunit aanstuurt meerdere binnenunits in verschillende zones. Dit biedt flexibiliteit en is energiezuiniger dan meerdere losse systemen. Voor grotere winkelruimtes boven 100 m² kijken we ook naar cassette-units of een VRF-systeem.',
      },
      {
        question: 'Hoe bereken ik de koelcapaciteit voor mijn winkelruimte?',
        answer:
          'Naast de oppervlakte tellen ook warmtebronnen mee: LED-verlichting, koelvitrines, serverruimtes en de bezoekersdichtheid. Voor een winkel van 50 m² met veel verlichting kan de benodigde capaciteit al oplopen tot 7–9 kW. Onze specialisten voeren een volledige koelberekening uit als onderdeel van de offerte.',
      },
      {
        question: 'Is een onderhoudscontract voor een winkelairco verplicht?',
        answer:
          'Wettelijk gezien is periodiek onderhoud aan koelinstallaties met meer dan 3 kg koudemiddel verplicht conform de F-gassenverordening. Bovendien zorgt een onderhoudscontract voor optimale werking en langere levensduur van uw installatie. Wij bieden aantrekkelijke contracten voor zakelijke klanten in Limburg.',
      },
      {
        question: 'Hoe snel kan StayCool Airco een winkelinstallatie realiseren?',
        answer:
          'Na goedkeuring van de offerte plannen wij installaties voor zakelijke klanten doorgaans binnen 1–3 weken in. Bij grotere projecten of multi-split systemen stellen wij een gedetailleerde projectplanning op. We stemmen de werkzaamheden zo in dat de overlast voor uw bedrijfsvoering minimaal is.',
      },
    ],
  },
];

export function getRuimteBySlug(slug: string): RuimteData | undefined {
  return ruimteData.find((ruimte) => ruimte.slug === slug);
}

export function getAllRuimteSlugs(): string[] {
  return ruimteData.map((ruimte) => ruimte.slug);
}

export function getAllRuimteStadCombinations(): Array<{ ruimte: string; city: string }> {
  const combinations: Array<{ ruimte: string; city: string }> = [];
  for (const ruimte of ruimteData) {
    for (const location of programmaticLocations) {
      combinations.push({ ruimte: ruimte.slug, city: location.slug });
    }
  }
  return combinations;
}
