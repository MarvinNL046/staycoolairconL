import type {
  LocationCaseStudy,
  LocationExpertiseSignals,
  ProgrammaticLocationProfile,
} from '../types/programmatic-locations';

const REGION_CLIMATE_CONTEXT: Record<ProgrammaticLocationProfile['region'], string[]> = {
  'Noord-Limburg': [
    'Warme zomerdagen en veel vrijstaande woningen vragen om voldoende koelvermogen.',
    'In woonkernen met veel gezinswoningen is stille nachtmodus vaak doorslaggevend.',
    'Door open bebouwing is zonbelasting per gevel per woning sterk verschillend.',
  ],
  'Midden-Limburg': [
    'In en rond het Maasgebied zorgen vochtige periodes voor extra benauwdheid binnenshuis.',
    'Veel woningen combineren renovatie met verduurzaming, waardoor hybride gebruik belangrijk is.',
    'Snelle omslag tussen koelen en verwarmen is relevant in voor- en najaar.',
  ],
  'Zuid-Limburg': [
    'In dichtbebouwde kernen ontstaat sneller opwarming in slaapkamers en bovenverdiepingen.',
    'Monumentale en oudere panden vragen vaker om maatwerk in leidingroutes en unitpositie.',
    'Hoogteverschillen en compacte straten vragen om strakke logistieke planning bij montage.',
  ],
};

export const programmaticLocations: ProgrammaticLocationProfile[] = [
  { slug: 'roermond', city: 'Roermond', region: 'Midden-Limburg', postalCodes: '6041-6049', populationCount: 58254, installationCount: 140, neighborhoods: ['Binnenstad', 'Herten'], landmarks: ['Designer Outlet', 'Maasplassen'], housingMix: 'mix van stadswoningen en vrijstaande woningen in de rand', localConstraint: 'beperkte buitenruimte bij centrumwoningen' },
  { slug: 'maastricht', city: 'Maastricht', region: 'Zuid-Limburg', postalCodes: '6211-6229', populationCount: 120227, installationCount: 180, neighborhoods: ['Wyck', 'Daalhof'], landmarks: ['Vrijthof', 'Cannerberg'], housingMix: 'combinatie van monumentale panden en moderne appartementen', localConstraint: 'discrete installatie in historische bouw' },
  { slug: 'heerlen', city: 'Heerlen', region: 'Zuid-Limburg', postalCodes: '6411-6419', populationCount: 86832, installationCount: 135, neighborhoods: ['Heerlerheide', 'Molenberg'], landmarks: ['Maankwartier', 'Schunck'], housingMix: 'veel jaren 60/70 woningen met renovatiepotentieel', localConstraint: 'geluidsbeheersing in aaneengesloten woonblokken' },
  { slug: 'venlo', city: 'Venlo', region: 'Noord-Limburg', postalCodes: '5911-5928', populationCount: 101603, installationCount: 150, neighborhoods: ['Blerick', 'Tegelen'], landmarks: ['Julianapark', 'Maasboulevard'], housingMix: 'rijwoningen en vrijstaande woningen in uitbreidingswijken', localConstraint: 'capaciteit afstemmen op grotere woonoppervlaktes' },
  { slug: 'sittard', city: 'Sittard', region: 'Zuid-Limburg', postalCodes: '6131-6139', populationCount: 93055, installationCount: 125, neighborhoods: ['Limbrichterveld', 'Overhoven'], landmarks: ['Markt Sittard', 'Fort Sanderbout'], housingMix: 'stedelijke kern met omliggende woonwijken', localConstraint: 'leidingwerk netjes wegwerken in bestaande bouw' },
  { slug: 'weert', city: 'Weert', region: 'Midden-Limburg', postalCodes: '6001-6006', populationCount: 50105, installationCount: 120, neighborhoods: ['Leuken', 'Boshoven'], landmarks: ['IJzeren Man', 'Centrum Weert'], housingMix: 'veel gezinswoningen en tweekappers', localConstraint: 'koellast op zolderkamers in zomerpieken' },
  { slug: 'meerssen', city: 'Meerssen', region: 'Zuid-Limburg', postalCodes: '6231-6235', populationCount: 19760, installationCount: 70, neighborhoods: ['Rothem', 'Bunde'], landmarks: ['Proosdijpark', 'Geuldal'], housingMix: 'dorpskernen met veel grondgebonden woningen', localConstraint: 'beperkte plaatsingsruimte bij smalle gevels' },
  { slug: 'valkenburg', city: 'Valkenburg', region: 'Zuid-Limburg', postalCodes: '6301-6307', populationCount: 16400, installationCount: 68, neighborhoods: ['Broekhem', 'Sibbe'], landmarks: ['Cauberg', 'Kasteelruine'], housingMix: 'mix van woningen en recreatief vastgoed', localConstraint: 'maatwerk voor panden met toeristische functie' },
  { slug: 'kerkrade', city: 'Kerkrade', region: 'Zuid-Limburg', postalCodes: '6461-6469', populationCount: 45744, installationCount: 92, neighborhoods: ['Chevremont', 'Bleijerheide'], landmarks: ['GaiaZOO', 'Abdij Rolduc'], housingMix: 'veel rijwoningen en appartementen', localConstraint: 'compacte plaatsing bij tussenwoningen' },
  { slug: 'brunssum', city: 'Brunssum', region: 'Zuid-Limburg', postalCodes: '6441-6446', populationCount: 27821, installationCount: 80, neighborhoods: ['Treebeek', 'Rumpen'], landmarks: ['Brunssummerheide', 'Vijverpark'], housingMix: 'jaren 70-90 woningen met isolatie-upgrades', localConstraint: 'optimale luchtverdeling op meerdere etages' },
  { slug: 'geleen', city: 'Geleen', region: 'Zuid-Limburg', postalCodes: '6161-6167', populationCount: 31900, installationCount: 85, neighborhoods: ['Lutterade', 'Zuidhof'], landmarks: ['Danikerbos', 'Markt Geleen'], housingMix: 'stedelijke wijken met gezinswoningen', localConstraint: 'laag geluidsniveau voor dichtbebouwde straten' },
  { slug: 'stein', city: 'Stein', region: 'Zuid-Limburg', postalCodes: '6171-6181', populationCount: 25100, installationCount: 72, neighborhoods: ['Elsloo', 'Urmond'], landmarks: ['Steinerbos', 'Maasvallei'], housingMix: 'mix van dorpskernen en nieuwbouwwijken', localConstraint: 'buitenunitpositie rond erfgrenzen' },
  { slug: 'beek', city: 'Beek', region: 'Zuid-Limburg', postalCodes: '6191-6193', populationCount: 15795, installationCount: 64, neighborhoods: ['Neerbeek', 'Spaubeek'], landmarks: ['Kelmonderbos', 'Markt Beek'], housingMix: 'veel eengezinswoningen in dorpsbebouwing', localConstraint: 'trillingsarm monteren bij geschakelde woningen' },
  { slug: 'landgraaf', city: 'Landgraaf', region: 'Zuid-Limburg', postalCodes: '6371-6374', populationCount: 37457, installationCount: 88, neighborhoods: ['Ubach over Worms', 'Schaesberg'], landmarks: ['SnowWorld', 'Strijthagen'], housingMix: 'ruim opgezette wijken met veel gezinswoningen', localConstraint: 'juist dimensioneren voor grotere leefruimtes' },
  { slug: 'venray', city: 'Venray', region: 'Noord-Limburg', postalCodes: '5801-5817', populationCount: 43900, installationCount: 90, neighborhoods: ['Brukske', 'Leunen'], landmarks: ['Odapark', 'Schouwburgplein'], housingMix: 'mix van vrijstaande woningen en rijwoningen', localConstraint: 'afstemming op zonnepanelen en eigen verbruik' },
  { slug: 'hoensbroek', city: 'Hoensbroek', region: 'Zuid-Limburg', postalCodes: '6431-6433', populationCount: 19601, installationCount: 66, neighborhoods: ['Mariarade', 'Nieuw Lotbroek'], landmarks: ['Kasteel Hoensbroek', 'Aambos'], housingMix: 'veel bestaande bouw met renovatiebehoefte', localConstraint: 'routing van koelleidingen door bestaande constructies' },
  { slug: 'gennep', city: 'Gennep', region: 'Noord-Limburg', postalCodes: '6591-6599', populationCount: 17535, installationCount: 62, neighborhoods: ['Ottersum', 'Heijen'], landmarks: ['Niersdal', 'Genneperhuis'], housingMix: 'dorps en kleinstedelijk woningbestand', localConstraint: 'snelle servicelogistiek verspreid over kernen' },
  { slug: 'echt', city: 'Echt', region: 'Midden-Limburg', postalCodes: '6101-6105', populationCount: 15950, installationCount: 58, neighborhoods: ['Pey', 'Nieuwstadt'], landmarks: ['Centrum Echt', 'Land van Echt'], housingMix: 'gezinswoningen en vrijstaande woningen', localConstraint: 'combinatie van koelen en efficiënt verwarmen' },
  { slug: 'nederweert', city: 'Nederweert', region: 'Midden-Limburg', postalCodes: '6031-6035', populationCount: 10275, installationCount: 50, neighborhoods: ['Ospel', 'Nederweert-Eind'], landmarks: ['Weerterbos', 'Peelrand'], housingMix: 'ruimere woningen met grotere woonkamers', localConstraint: 'vermogen afstemmen op open leefruimtes' },
  { slug: 'vaals', city: 'Vaals', region: 'Zuid-Limburg', postalCodes: '6291-6295', populationCount: 10100, installationCount: 42, neighborhoods: ['Lemiers', 'Holset'], landmarks: ['Drielandenpunt', 'Vijlenerbos'], housingMix: 'heuvelachtig gebied met verspreide bebouwing', localConstraint: 'logistieke planning in hoogteprofiel en smalle straten' },
  { slug: 'panningen', city: 'Panningen', region: 'Noord-Limburg', postalCodes: '5981', populationCount: 7000, installationCount: 45, neighborhoods: ['Egchel', 'Helden'], landmarks: ['Ringovenpark', 'Centrum Panningen'], housingMix: 'dorpskernen met gezinswoningen', localConstraint: 'compacte en stille systemen voor dichte bebouwing' },
  { slug: 'maasbracht', city: 'Maasbracht', region: 'Midden-Limburg', postalCodes: '6051-6052', populationCount: 7445, installationCount: 40, neighborhoods: ['Brachterbeek', 'Wessem'], landmarks: ['Maashaven', 'Stevensweert'], housingMix: 'dorpswoningen en vrijstaande huizen', localConstraint: 'vochtbeheersing door ligging nabij water' },
  { slug: 'eijsden-margraten', city: 'Eijsden-Margraten', region: 'Zuid-Limburg', postalCodes: '6245-6269', populationCount: 25900, installationCount: 52, neighborhoods: ['Eijsden', 'Margraten'], landmarks: ['Mergelland', 'Kasteel Eijsden'], housingMix: 'dorpskernen en buitengebied', localConstraint: 'maatwerk voor uiteenlopende woningtypes per kern' },
  { slug: 'gulpen-wittem', city: 'Gulpen-Wittem', region: 'Zuid-Limburg', postalCodes: '6271-6287', populationCount: 14100, installationCount: 46, neighborhoods: ['Gulpen', 'Wittem'], landmarks: ['Gulpdal', 'Heuvelland'], housingMix: 'karakteristieke woningen in heuvellandschap', localConstraint: 'zichtwerk en buitenunitpositionering in dorpsbeeld' },
  { slug: 'voerendaal', city: 'Voerendaal', region: 'Zuid-Limburg', postalCodes: '6367-6369', populationCount: 12700, installationCount: 44, neighborhoods: ['Kunrade', 'Klimmen'], landmarks: ['Kunderberg', 'Retersbeek'], housingMix: 'ruime woningen en dorpslinten', localConstraint: 'leidingtraces over meerdere bouwlagen' },
  { slug: 'simpelveld', city: 'Simpelveld', region: 'Zuid-Limburg', postalCodes: '6369', populationCount: 10600, installationCount: 38, neighborhoods: ['Bocholtz', 'Simpelveld Centrum'], landmarks: ['Miljoenenlijn', 'Kalklandschap'], housingMix: 'dorps en kleinschalige bebouwing', localConstraint: 'stille buitenunits in compacte woonstraten' },
  { slug: 'nuth', city: 'Nuth', region: 'Zuid-Limburg', postalCodes: '6361-6363', populationCount: 15400, installationCount: 48, neighborhoods: ['Wijnandsrade', 'Nuth Centrum'], landmarks: ['Kasteel Wijnandsrade', 'Natuurgebied Kakkert'], housingMix: 'mix van dorpswoningen en nieuwbouw', localConstraint: 'optimaliseren voor zowel koelen als voorjaarsverwarming' },
];

export function getProgrammaticLocationBySlug(slug: string): ProgrammaticLocationProfile | undefined {
  return programmaticLocations.find((location) => location.slug === slug);
}

function formatPostalCodes(postalCodes: string): string {
  return postalCodes.replace(/-/g, ' t/m ');
}

function buildFaqs(profile: ProgrammaticLocationProfile) {
  return [
    {
      question: `Wat is de beste airco voor een woning in ${profile.city}?`,
      answer: `Voor ${profile.city} adviseren we meestal een stille split-unit met minimaal energielabel A++ en wifi-sturing, afgestemd op ${profile.housingMix}. Tijdens een opname op locatie bepalen we het exacte vermogen per ruimte, zodat u voorkomt dat het systeem te zwaar of juist te licht is gedimensioneerd.`,
    },
    {
      question: `Wat kost een airco specialist in ${profile.city} gemiddeld?`,
      answer: `In ${profile.city} ligt een complete installatie meestal tussen EUR 1.500 en EUR 3.400, afhankelijk van leidinglengte, wandopbouw, bereikbaarheid en het gekozen merk. U ontvangt bij ons altijd een gespecificeerde offerte met montage, inbedrijfstelling en uitleg inbegrepen.`,
    },
    {
      question: `Hoe snel kunnen jullie installeren in ${profile.city}?`,
      answer: `Voor ${profile.city} plannen we doorgaans binnen 1 tot 3 weken, met snellere opties bij acute hitteperiodes. Omdat wij in heel ${profile.region} werken, kunnen we service en installatie combineren in logische routes, wat de doorlooptijd verkort.`,
    },
    {
      question: `Is een airco in ${profile.city} ook geschikt om mee te verwarmen?`,
      answer: `Ja. Moderne systemen zijn lucht-lucht warmtepompen en werken efficiënt in voor- en najaar. Vooral in ${profile.city}, waar energiekosten een belangrijk thema zijn, kiezen veel huishoudens voor koelen in de zomer en bijverwarmen in de tussenseizoenen.`,
    },
    {
      question: `Hoe voorkomen jullie geluidoverlast bij airco plaatsing in ${profile.city}?`,
      answer: `Wij kiezen in ${profile.city} voor geluidsarme units, trillingsdempers en slimme positionering met aandacht voor erfgrenzen en ramen. Ook testen we na montage de stille stand, zodat het systeem in de avond en nacht comfortabel blijft.`,
    },
    {
      question: `Voor welke postcodes in ${profile.city} leveren jullie service?`,
      answer: `Wij bedienen alle relevante postcodes in ${profile.city}: ${formatPostalCodes(profile.postalCodes)}. Dit geldt voor installatie, onderhoud en storingsservice door dezelfde gecertificeerde monteurs.`,
    },
  ];
}

function buildCaseStudies(profile: ProgrammaticLocationProfile): LocationCaseStudy[] {
  const [firstNeighborhood, secondNeighborhood] = profile.neighborhoods;
  return [
    {
      title: `Woningupgrade in ${firstNeighborhood} (${profile.city})`,
      neighborhood: firstNeighborhood,
      summary: `Gezinswoning met oververhitte bovenverdieping en beperkte buitenruimte. We kozen voor een stille wandunit met geoptimaliseerde luchtworp en een compacte buitenunitpositie.`,
      outcome: `Temperatuur in slaapkamers stabiel op comfortniveau en aantoonbaar lager piekverbruik tijdens hittegolven.`,
    },
    {
      title: `Renovatieproject in ${secondNeighborhood} (${profile.city})`,
      neighborhood: secondNeighborhood,
      summary: `Bij deze woning in ${profile.city} was ${profile.localConstraint}. We hebben leidingwerk esthetisch weggewerkt en de regeling gekoppeld aan weekprogramma's.`,
      outcome: `Snelle opwarming in de ochtend, efficiënter koelen in de avond en merkbaar hoger dagelijks comfort.`,
    },
  ];
}

function buildExpertiseSignals(profile: ProgrammaticLocationProfile): LocationExpertiseSignals {
  return {
    reviewedBy: 'Ralph - F-gassen gecertificeerd airco specialist',
    lastReviewed: '2026-03-02',
    certifications: ['F-gassen gecertificeerd', 'Ervaren in residentiele en lichte utiliteitsprojecten'],
    yearsActive: 8,
    localProjects: profile.installationCount,
    responseTime: 'Binnen 24 uur reactie op aanvragen in Limburg',
  };
}

export function buildProgrammaticLandingProps(profile: ProgrammaticLocationProfile) {
  const climateFacts = [
    ...REGION_CLIMATE_CONTEXT[profile.region],
    `In ${profile.city} zien we in de praktijk extra warmtelast rondom ${profile.landmarks[0]} en ${profile.landmarks[1]}.`,
  ];

  const specialFeatures = [
    `Woningprofiel in ${profile.city}: ${profile.housingMix}.`,
    `Lokale uitdaging: ${profile.localConstraint}.`,
    `Advies op maat per wijk, met extra focus op ${profile.neighborhoods[0]} en ${profile.neighborhoods[1]}.`,
    `Afstemming op ventilatie, isolatie en verbruiksprofiel voor woningen in ${profile.region}.`,
  ];

  return {
    city: profile.city,
    region: profile.region,
    postalCodes: profile.postalCodes,
    populationCount: profile.populationCount,
    installationCount: profile.installationCount,
    climateFacts,
    specialFeatures,
    faqs: buildFaqs(profile),
    caseStudies: buildCaseStudies(profile),
    expertiseSignals: buildExpertiseSignals(profile),
  };
}
