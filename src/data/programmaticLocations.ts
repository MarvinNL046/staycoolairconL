import type {
  CityTier,
  FaqItem,
  LocationCaseStudy,
  LocationExpertiseSignals,
  ProgrammaticLocationProfile,
} from '../types/programmatic-locations';
import { djb2Hash } from '../utils/djb2';
import {
  CITY_INTRO_VARIANTS,
  CITY_SERVICES_VARIANTS,
  CITY_PRACTICAL_VARIANTS,
  FAQ_QUESTION_VARIANTS,
  renderTemplate,
} from './cityCopyVariants';

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
  // ─── Groot (> 100.000 inwoners) ─────────────────────────────────────────────
  {
    slug: 'maastricht',
    city: 'Maastricht',
    region: 'Zuid-Limburg',
    postalCodes: '6211-6229',
    populationCount: 120227,
    installationCount: 180,
    neighborhoods: ['Wyck', 'Daalhof'],
    landmarks: ['Vrijthof', 'Cannerberg'],
    housingMix: 'combinatie van monumentale panden en moderne appartementen',
    localConstraint: 'discrete installatie in historische bouw',
    tier: 'groot',
    overrides: {
      localImage: '/images/locations/maastricht.webp',
      extraSpecialFeatures: [
        'Specialistische ervaring met airco-installaties in monumentale panden in het centrum',
        'Discrete leidingroutes voor studentenwoningen en appartementen rond Vrijthof en Céramique',
      ],
      extraFaqs: [
        {
          question: 'Hebben jullie ervaring met monumentale panden in Maastricht?',
          answer: 'Ja, dat is bij ons standaardwerk in Maastricht. Onze monteurs zijn gespecialiseerd in het discreet wegwerken van leidingen en buitenunits, met respect voor historische details. Waar nodig stemmen we af met monumentenzorg om volgens de regels te installeren — bij beschermde gevels kiezen we vrijwel altijd voor binnenplaats- of dakopstelling van de buitenunit.',
        },
        {
          question: 'Welke airco is het meest geschikt voor appartementen in Maastricht?',
          answer: 'Voor appartementen in Maastricht adviseren we vaak wandmodellen van Daikin, Mitsubishi Heavy of Toshiba — stijlvol én stil. Bij beperkingen voor buitenunits hebben we alternatieven zoals plaatsing op balkons of platte daken. Voor VvE\'s leveren we vooraf een installatieplan dat we ter goedkeuring kunnen indienen.',
        },
        {
          question: 'Welke subsidies zijn beschikbaar voor airco-installatie in Maastricht?',
          answer: 'Bij een airco-warmtepomp kunt u meestal in aanmerking komen voor de ISDE-subsidie (tot €2.000 in 2026, verifieer actuele bedragen op rvo.nl). Daarnaast geldt 9% verlaagd BTW-tarief op installatie als uw woning ouder is dan 2 jaar. We helpen bij de aanvraag en verrekenen de subsidie waar mogelijk direct in de offerte — geen "u kunt het later claimen".',
        },
        {
          question: 'Kan ik een airco laten installeren in een studentenwoning in Maastricht?',
          answer: 'Ja, mits u toestemming heeft van de verhuurder — daar helpen we u bij door een schriftelijk installatieplan op te stellen dat u kunt voorleggen. Voor kleinere studentenkamers werken we vaak met compacte wandmodellen die weinig plek innemen. Houd er rekening mee dat verwijderen achteraf ook kosten met zich meebrengt; we adviseren een vaste installatie alleen bij langer verblijf.',
        },
      ],
    },
  },
  {
    slug: 'venlo',
    city: 'Venlo',
    region: 'Noord-Limburg',
    postalCodes: '5911-5928',
    populationCount: 101603,
    installationCount: 150,
    neighborhoods: ['Blerick', 'Tegelen'],
    landmarks: ['Julianapark', 'Maasboulevard'],
    housingMix: 'rijwoningen en vrijstaande woningen in uitbreidingswijken',
    localConstraint: 'capaciteit afstemmen op grotere woonoppervlaktes',
    tier: 'groot',
    overrides: {
      localImage: '/images/locations/venlo.webp',
    },
  },

  // ─── Middel (30.000 – 100.000 inwoners) ─────────────────────────────────────
  {
    slug: 'sittard',
    city: 'Sittard',
    region: 'Zuid-Limburg',
    postalCodes: '6131-6139',
    populationCount: 93055,
    installationCount: 230,
    neighborhoods: ['Limbrichterveld', 'Overhoven'],
    landmarks: ['Markt Sittard', 'Fort Sanderbout'],
    housingMix: 'stedelijke kern met omliggende woonwijken',
    localConstraint: 'leidingwerk netjes wegwerken in bestaande bouw',
    tier: 'middel',
    overrides: {
      localImage: '/images/locations/sittard.webp',
      extraClimateFacts: [
        'Sittard ligt in een dal — minder windverkoeling, dus warmere zomeravonden dan elders in Zuid-Limburg.',
      ],
      extraSpecialFeatures: [
        'Aangepaste oplossingen voor de vooroorlogse wijken en winkelpanden in het centrum',
      ],
      extraFaqs: [
        {
          question: 'Hebben jullie ervaring met installaties in oude panden in de historische binnenstad van Sittard?',
          answer: 'Ja, regelmatig. De binnenstad heeft veel panden met dikke muren en monumentale gevels. We werken samen met de eigenaar (en bij beschermd stadsgezicht ook met de gemeente) om leidingwerk discreet weg te werken en de buitenunit op een plek te zetten waar hij niet zichtbaar is vanaf de straat. Bij twijfel doen we een vooropname zodat u weet wat het wordt voordat u akkoord geeft.',
        },
        {
          question: 'Wat is bijzonder aan airco-installatie in vooroorlogse wijken zoals Limbrichterveld?',
          answer: 'Vooroorlogse woningen hebben vaak smalle leidingschachten en beperkte ruimte op zolder voor doorvoer. We meten dat tijdens de opname op en kiezen meestal voor een kortste-route over de gevel met een nette afdekplaat. In 9 van de 10 gevallen passen single-splits zonder problemen — bij multi-split helpen we vooraf inschatten of het haalbaar is.',
        },
      ],
    },
  },
  {
    slug: 'heerlen',
    city: 'Heerlen',
    region: 'Zuid-Limburg',
    postalCodes: '6411-6419',
    populationCount: 86832,
    installationCount: 150,
    neighborhoods: ['Heerlerheide', 'Molenberg'],
    landmarks: ['Maankwartier', 'Schunck'],
    housingMix: 'veel jaren 60/70 woningen met renovatiepotentieel',
    localConstraint: 'geluidsbeheersing in aaneengesloten woonblokken',
    tier: 'middel',
    overrides: {
      localImage: '/images/locations/heerlen.webp',
      extraClimateFacts: [
        'Heerlen ligt iets hoger dan de rest van Zuid-Limburg — zomers zijn vaak een fractie milder, maar tropische dagen nemen ook hier toe.',
      ],
      extraSpecialFeatures: [
        'Ervaring met de karakteristieke mijnwerkerswoningen in Heerlerheide en omgeving',
        'Oplossingen voor hoogbouw in het centrum, inclusief plaatsing op balkons of platte daken',
      ],
      extraFaqs: [
        {
          question: 'Is het mogelijk om aan te sluiten op het mijnwater-energienetwerk in Heerlen?',
          answer: 'Het mijnwater-energienetwerk is primair gericht op grotere gebouwen en woonblokken. Voor individuele woningen is een moderne airco-warmtepomp meestal de praktischere route — vergelijkbare efficiëntie, geen wachten op netaansluiting. We blijven de uitbreiding van het netwerk volgen en kunnen u adviseren als uw blok in de planning komt.',
        },
        {
          question: 'Welke airco past het best bij mijnwerkerswoningen in Heerlen?',
          answer: 'De karakteristieke mijnwerkerswoningen hebben dikke bakstenen muren en relatief kleine ruimtes — ze houden koele lucht goed vast en vragen meestal minder vermogen dan u zou denken. Een compacte wandunit van 2,5 of 3,5 kW is in 8 van de 10 gevallen voldoende. Dat houdt de prijs onder de €1.800 all-in voor een typische slaapkamer of woonkamer.',
        },
        {
          question: 'Hoe verhouden de kosten van airco-verwarming zich tot stadsverwarming in Heerlen?',
          answer: 'Voor de tussenseizoenen (voorjaar/najaar) is airco-verwarming vrijwel altijd goedkoper dan stadsverwarming aanzetten — een SCOP van 4,5 betekent ~€0,07/kWh warmte tegenover ~€0,12 bij stadsverwarming. In de echte winter draait u stadsverwarming gewoon weer aan. We rekenen dat per maand voor u door bij de opname zodat u ziet wanneer welk systeem voordeliger is.',
        },
        {
          question: 'Zijn er speciale overwegingen voor airco in hoogbouw in het centrum?',
          answer: 'Ja. Op hogere verdiepingen heeft de buitenunit te maken met meer windbelasting, dus stevige beugels zijn belangrijker dan op de begane grond. We werken met hoogwerker waar nodig en stemmen de planning af op VvE-regels (vaak: schriftelijke goedkeuring vooraf, geen leidingen op de gevel). Buitenunits gaan meestal op balkon of plat dak — discreet en netjes.',
        },
      ],
    },
  },
  {
    slug: 'roermond',
    city: 'Roermond',
    region: 'Midden-Limburg',
    postalCodes: '6041-6049',
    populationCount: 58254,
    installationCount: 140,
    neighborhoods: ['Binnenstad', 'Herten'],
    landmarks: ['Designer Outlet', 'Maasplassen'],
    housingMix: 'mix van stadswoningen en vrijstaande woningen in de rand',
    localConstraint: 'beperkte buitenruimte bij centrumwoningen',
    tier: 'middel',
    overrides: {
      localImage: '/images/locations/roermond.webp',
    },
  },
  {
    slug: 'weert',
    city: 'Weert',
    region: 'Midden-Limburg',
    postalCodes: '6001-6006',
    populationCount: 50105,
    installationCount: 120,
    neighborhoods: ['Leuken', 'Boshoven'],
    landmarks: ['IJzeren Man', 'Centrum Weert'],
    housingMix: 'veel gezinswoningen en tweekappers',
    localConstraint: 'koellast op zolderkamers in zomerpieken',
    tier: 'middel',
  },
  {
    slug: 'kerkrade',
    city: 'Kerkrade',
    region: 'Zuid-Limburg',
    postalCodes: '6461-6469',
    populationCount: 45744,
    installationCount: 92,
    neighborhoods: ['Chevremont', 'Bleijerheide'],
    landmarks: ['GaiaZOO', 'Abdij Rolduc'],
    housingMix: 'veel rijwoningen en appartementen',
    localConstraint: 'compacte plaatsing bij tussenwoningen',
    tier: 'middel',
    overrides: {
      localImage: '/images/locations/kerkrade.webp',
    },
  },
  {
    slug: 'venray',
    city: 'Venray',
    region: 'Noord-Limburg',
    postalCodes: '5801-5817',
    populationCount: 43900,
    installationCount: 90,
    neighborhoods: ['Brukske', 'Leunen'],
    landmarks: ['Odapark', 'Schouwburgplein'],
    housingMix: 'mix van vrijstaande woningen en rijwoningen',
    localConstraint: 'afstemming op zonnepanelen en eigen verbruik',
    tier: 'middel',
  },
  {
    slug: 'horst',
    city: 'Horst aan de Maas',
    region: 'Noord-Limburg',
    postalCodes: '5961-5973',
    populationCount: 42250,
    installationCount: 78,
    neighborhoods: ['Horst-Centrum', 'Sevenum'],
    landmarks: ['Kasteelse Bossen', 'Centrum Horst'],
    housingMix: 'mix van dorpskernen en agrarische bebouwing in het buitengebied',
    localConstraint: 'logistieke planning over verspreide kernen',
    tier: 'middel',
  },
  {
    slug: 'landgraaf',
    city: 'Landgraaf',
    region: 'Zuid-Limburg',
    postalCodes: '6371-6374',
    populationCount: 37457,
    installationCount: 88,
    neighborhoods: ['Ubach over Worms', 'Schaesberg'],
    landmarks: ['SnowWorld', 'Strijthagen'],
    housingMix: 'ruim opgezette wijken met veel gezinswoningen',
    localConstraint: 'juist dimensioneren voor grotere leefruimtes',
    tier: 'middel',
    overrides: {
      localImage: '/images/locations/landgraaf.webp',
    },
  },
  {
    slug: 'geleen',
    city: 'Geleen',
    region: 'Zuid-Limburg',
    postalCodes: '6161-6167',
    populationCount: 31900,
    installationCount: 110,
    neighborhoods: ['Lutterade', 'Zuidhof'],
    landmarks: ['Danikerbos', 'Markt Geleen'],
    housingMix: 'stedelijke wijken met gezinswoningen',
    localConstraint: 'laag geluidsniveau voor dichtbebouwde straten',
    tier: 'middel',
    overrides: {
      localImage: '/images/locations/geleen.webp',
      extraClimateFacts: [
        'De Chemelot-site en industriële bedrijvigheid zorgen voor extra warmte-ontwikkeling rondom Geleen.',
      ],
      extraSpecialFeatures: [
        'Specialistische kennis van mijnwerkerswoningen tot moderne appartementencomplexen',
        'Aandacht voor luchtkwaliteit-filters in installaties dicht bij industrieel gebied',
      ],
      extraFaqs: [
        {
          question: 'Is airconditioning extra belangrijk in de industriële omgeving rond Chemelot?',
          answer: 'Ja, niet alleen voor koeling — moderne airco\'s filteren ook de lucht via fijnstoffilters (vaak HEPA-niveau). Voor woningen dichter bij Chemelot of richting de Westelijke Mijnstreek is dat een merkbaar comfortverschil. We adviseren modellen met goed filter-systeem en een verhoogde reinigingsfrequentie (één keer per half jaar in plaats van jaarlijks).',
        },
        {
          question: 'Hebben jullie ervaring met mijnwerkerswoningen in Geleen?',
          answer: 'Veel ervaring. Mijnwerkerswoningen hebben dikke bakstenen muren — perfect voor airco-installatie omdat de constructie stevig is en koele lucht goed vasthoudt. Vaak volstaat een 2,5 kW unit voor een ruimte waar in een nieuwbouwwoning 3,5 kW nodig zou zijn. Dat scheelt direct in de aanschafprijs én in het verbruik.',
        },
        {
          question: 'Welke airco is geschikt voor appartementen in Geleen?',
          answer: 'Voor appartementen kiezen we vrijwel altijd extra-stille modellen — Daikin, Mitsubishi Heavy en LG hebben specifieke "apartment-friendly" series met geluidsniveaus rond de 19 dB(A) op de laagste stand. Dat is fluisterstil, geen klacht van de buren. We stemmen vooraf af met de VvE als dat aan de orde is.',
        },
      ],
    },
  },

  // ─── Klein (< 30.000 inwoners) ──────────────────────────────────────────────
  {
    slug: 'brunssum',
    city: 'Brunssum',
    region: 'Zuid-Limburg',
    postalCodes: '6441-6446',
    populationCount: 27821,
    installationCount: 80,
    neighborhoods: ['Treebeek', 'Rumpen'],
    landmarks: ['Brunssummerheide', 'Vijverpark'],
    housingMix: 'jaren 70-90 woningen met isolatie-upgrades',
    localConstraint: 'optimale luchtverdeling op meerdere etages',
    tier: 'klein',
    overrides: {
      localImage: '/images/locations/brunssum.webp',
      extraSpecialFeatures: [
        'Multi-zone setups voor woningen met meerdere etages, vaak na isolatie-upgrade',
      ],
    },
  },
  {
    slug: 'eijsden-margraten',
    city: 'Eijsden-Margraten',
    region: 'Zuid-Limburg',
    postalCodes: '6245-6269',
    populationCount: 25900,
    installationCount: 52,
    neighborhoods: ['Eijsden', 'Margraten'],
    landmarks: ['Mergelland', 'Kasteel Eijsden'],
    housingMix: 'dorpskernen en buitengebied',
    localConstraint: 'maatwerk voor uiteenlopende woningtypes per kern',
    tier: 'klein',
  },
  {
    slug: 'stein',
    city: 'Stein',
    region: 'Zuid-Limburg',
    postalCodes: '6171-6181',
    populationCount: 25100,
    installationCount: 72,
    neighborhoods: ['Elsloo', 'Urmond'],
    landmarks: ['Steinerbos', 'Maasvallei'],
    housingMix: 'mix van dorpskernen en nieuwbouwwijken',
    localConstraint: 'buitenunitpositie rond erfgrenzen',
    tier: 'klein',
  },
  {
    slug: 'meerssen',
    city: 'Meerssen',
    region: 'Zuid-Limburg',
    postalCodes: '6231-6235',
    populationCount: 19760,
    installationCount: 70,
    neighborhoods: ['Rothem', 'Bunde'],
    landmarks: ['Proosdijpark', 'Geuldal'],
    housingMix: 'dorpskernen met veel grondgebonden woningen',
    localConstraint: 'beperkte plaatsingsruimte bij smalle gevels',
    tier: 'klein',
    overrides: {
      localImage: '/images/locations/meerssen.webp',
    },
  },
  {
    slug: 'hoensbroek',
    city: 'Hoensbroek',
    region: 'Zuid-Limburg',
    postalCodes: '6431-6433',
    populationCount: 19601,
    installationCount: 66,
    neighborhoods: ['Mariarade', 'Nieuw Lotbroek'],
    landmarks: ['Kasteel Hoensbroek', 'Aambos'],
    housingMix: 'veel bestaande bouw met renovatiebehoefte',
    localConstraint: 'routing van koelleidingen door bestaande constructies',
    tier: 'klein',
  },
  {
    slug: 'tegelen',
    city: 'Tegelen',
    region: 'Noord-Limburg',
    postalCodes: '5931-5935',
    populationCount: 19100,
    installationCount: 55,
    neighborhoods: ['Centrum Tegelen', 'Belfeld'],
    landmarks: ['Doolhof', 'Maaspark'],
    housingMix: 'dorpswoningen en historische bebouwing in oude kern',
    localConstraint: 'zorgvuldig wegwerken van leidingen in oudere panden',
    tier: 'klein',
  },
  {
    slug: 'gennep',
    city: 'Gennep',
    region: 'Noord-Limburg',
    postalCodes: '6591-6599',
    populationCount: 17535,
    installationCount: 62,
    neighborhoods: ['Ottersum', 'Heijen'],
    landmarks: ['Niersdal', 'Genneperhuis'],
    housingMix: 'dorps en kleinstedelijk woningbestand',
    localConstraint: 'snelle servicelogistiek verspreid over kernen',
    tier: 'klein',
  },
  {
    slug: 'valkenburg',
    city: 'Valkenburg',
    region: 'Zuid-Limburg',
    postalCodes: '6301-6307',
    populationCount: 16400,
    installationCount: 68,
    neighborhoods: ['Broekhem', 'Sibbe'],
    landmarks: ['Cauberg', 'Kasteelruine'],
    housingMix: 'mix van woningen en recreatief vastgoed',
    localConstraint: 'maatwerk voor panden met toeristische functie',
    tier: 'klein',
    overrides: {
      localImage: '/images/locations/valkenburg.webp',
    },
  },
  {
    slug: 'echt',
    city: 'Echt',
    region: 'Midden-Limburg',
    postalCodes: '6101-6105',
    populationCount: 15950,
    installationCount: 58,
    neighborhoods: ['Pey', 'Nieuwstadt'],
    landmarks: ['Centrum Echt', 'Land van Echt'],
    housingMix: 'gezinswoningen en vrijstaande woningen',
    localConstraint: 'combinatie van koelen en efficiënt verwarmen',
    tier: 'klein',
  },
  {
    slug: 'beek',
    city: 'Beek',
    region: 'Zuid-Limburg',
    postalCodes: '6191-6193',
    populationCount: 15795,
    installationCount: 64,
    neighborhoods: ['Neerbeek', 'Spaubeek'],
    landmarks: ['Kelmonderbos', 'Markt Beek'],
    housingMix: 'veel eengezinswoningen in dorpsbebouwing',
    localConstraint: 'trillingsarm monteren bij geschakelde woningen',
    tier: 'klein',
    overrides: {
      localImage: '/images/locations/beek.webp',
      extraSpecialFeatures: [
        'Geluidsgereduceerde installaties voor woningen rondom Maastricht Airport',
      ],
      extraFaqs: [
        {
          question: 'Hebben jullie ervaring met geluidsgereduceerde installaties rondom Maastricht Airport?',
          answer: 'Ja, dat is bij Beek vrijwel standaardwerk in een paar straten. We werken met extra trillingsdempers en kiezen voor units met de laagst beschikbare dB-waardes (rond de 19-20 dB(A) op stille stand). De binnenunit is fluisterstil, ook wanneer er een vliegtuig overkomt — geen extra ergernis bovenop wat de Airport al brengt.',
        },
      ],
    },
  },
  {
    slug: 'nuth',
    city: 'Nuth',
    region: 'Zuid-Limburg',
    postalCodes: '6361-6363',
    populationCount: 15400,
    installationCount: 48,
    neighborhoods: ['Wijnandsrade', 'Nuth Centrum'],
    landmarks: ['Kasteel Wijnandsrade', 'Natuurgebied Kakkert'],
    housingMix: 'mix van dorpswoningen en nieuwbouw',
    localConstraint: 'optimaliseren voor zowel koelen als voorjaarsverwarming',
    tier: 'klein',
    overrides: {
      extraSpecialFeatures: [
        'Aandacht voor seniorenwoningen — bedieningsgemak en eenvoudige afstandsbediening',
      ],
    },
  },
  {
    slug: 'gulpen-wittem',
    city: 'Gulpen-Wittem',
    region: 'Zuid-Limburg',
    postalCodes: '6271-6287',
    populationCount: 14100,
    installationCount: 46,
    neighborhoods: ['Gulpen', 'Wittem'],
    landmarks: ['Gulpdal', 'Heuvelland'],
    housingMix: 'karakteristieke woningen in heuvellandschap',
    localConstraint: 'zichtwerk en buitenunitpositionering in dorpsbeeld',
    tier: 'klein',
  },
  {
    slug: 'voerendaal',
    city: 'Voerendaal',
    region: 'Zuid-Limburg',
    postalCodes: '6367-6369',
    populationCount: 12700,
    installationCount: 44,
    neighborhoods: ['Kunrade', 'Klimmen'],
    landmarks: ['Kunderberg', 'Retersbeek'],
    housingMix: 'ruime woningen en dorpslinten',
    localConstraint: 'leidingtraces over meerdere bouwlagen',
    tier: 'klein',
    overrides: {
      extraSpecialFeatures: [
        'Combinatie airco + bestaande warmtepomp/zonnepanelen voor maximaal eigen verbruik',
      ],
    },
  },
  {
    slug: 'simpelveld',
    city: 'Simpelveld',
    region: 'Zuid-Limburg',
    postalCodes: '6369',
    populationCount: 10600,
    installationCount: 38,
    neighborhoods: ['Bocholtz', 'Simpelveld Centrum'],
    landmarks: ['Miljoenenlijn', 'Kalklandschap'],
    housingMix: 'dorps en kleinschalige bebouwing',
    localConstraint: 'stille buitenunits in compacte woonstraten',
    tier: 'klein',
  },
  {
    slug: 'vaals',
    city: 'Vaals',
    region: 'Zuid-Limburg',
    postalCodes: '6291-6295',
    populationCount: 10100,
    installationCount: 42,
    neighborhoods: ['Lemiers', 'Holset'],
    landmarks: ['Drielandenpunt', 'Vijlenerbos'],
    housingMix: 'heuvelachtig gebied met verspreide bebouwing',
    localConstraint: 'logistieke planning in hoogteprofiel en smalle straten',
    tier: 'klein',
    overrides: {
      extraClimateFacts: [
        'Door de hoge ligging (richting Drielandenpunt) ervaart Vaals andere temperaturen dan de rest van Zuid-Limburg.',
      ],
      extraSpecialFeatures: [
        'Speciale oplossingen voor karakteristieke vakwerkhuizen en herenhuizen',
        'Discrete buitenunits die passen bij het beschermde dorpsgezicht',
      ],
      extraFaqs: [
        {
          question: 'Hoe worden airco\'s geïnstalleerd in monumentale panden of vakwerkhuizen in Vaals?',
          answer: 'Met respect voor de historische details. We gebruiken bestaande doorvoeren waar mogelijk, plaatsen buitenunits op binnenplaatsen of platte daken, en kiezen kleurstellingen die opgaan in de gevel. Bij vakwerk werken we niet door balken — leidingen lopen langs of via aangrenzende ruimtes. Vooraf doen we altijd een opname zodat u precies weet hoe het wordt vóór akkoord.',
        },
        {
          question: 'Zijn er speciale vergunningen nodig voor een airco in Vaals?',
          answer: 'In het beschermde dorpsgezicht en bij rijksmonumenten geldt vaak een omgevingsvergunning voor zichtbare gevelelementen. We helpen u door het traject — van aanvraag tot goedkeuring — en passen onze plaatsing aan op de eisen van de gemeente. Voor reguliere woningen buiten beschermd gebied is doorgaans geen vergunning nodig.',
        },
        {
          question: 'Installeren jullie ook airco\'s in vakantiewoningen in Vaals?',
          answer: 'Veel — Vaals heeft een duidelijke verhuurmarkt. Voor vakantiewoningen kiezen we systemen met simpele bediening (thermostaat met max-stand, geen complete app-setup voor de gast), stille werking, en een onderhoudscontract zodat de eigenaar er zelf niet jaarlijks naartoe hoeft. Voor B&B\'s adviseren we per slaapkamer een eigen unit voor maximale gastvrijheid.',
        },
      ],
    },
  },
  {
    slug: 'nederweert',
    city: 'Nederweert',
    region: 'Midden-Limburg',
    postalCodes: '6031-6035',
    populationCount: 10275,
    installationCount: 50,
    neighborhoods: ['Ospel', 'Nederweert-Eind'],
    landmarks: ['Weerterbos', 'Peelrand'],
    housingMix: 'ruimere woningen met grotere woonkamers',
    localConstraint: 'vermogen afstemmen op open leefruimtes',
    tier: 'klein',
  },
  {
    slug: 'maasbracht',
    city: 'Maasbracht',
    region: 'Midden-Limburg',
    postalCodes: '6051-6052',
    populationCount: 7445,
    installationCount: 40,
    neighborhoods: ['Brachterbeek', 'Wessem'],
    landmarks: ['Maashaven', 'Stevensweert'],
    housingMix: 'dorpswoningen en vrijstaande huizen',
    localConstraint: 'vochtbeheersing door ligging nabij water',
    tier: 'klein',
  },
  {
    slug: 'panningen',
    city: 'Panningen',
    region: 'Noord-Limburg',
    postalCodes: '5981',
    populationCount: 7000,
    installationCount: 45,
    neighborhoods: ['Egchel', 'Helden'],
    landmarks: ['Ringovenpark', 'Centrum Panningen'],
    housingMix: 'dorpskernen met gezinswoningen',
    localConstraint: 'compacte en stille systemen voor dichte bebouwing',
    tier: 'klein',
  },
];

export function getProgrammaticLocationBySlug(slug: string): ProgrammaticLocationProfile | undefined {
  return programmaticLocations.find((location) => location.slug === slug);
}

function formatPostalCodes(postalCodes: string): string {
  return postalCodes.replace(/-/g, ' t/m ');
}

/**
 * Build the base FAQ-set for a city, picking 4 questions from the tier-pool
 * via djb2-hash. Each city gets the same 4 questions every time (stable),
 * but different cities pick different combinations from the same pool.
 */
function buildBaseFaqs(profile: ProgrammaticLocationProfile, seed: number): FaqItem[] {
  const pool = FAQ_QUESTION_VARIANTS[profile.tier];
  const tokens = profileTokens(profile);
  const picked: FaqItem[] = [];
  const used = new Set<number>();
  // Pick 4 distinct questions from the pool, walking forward from seed.
  for (let offset = 0; picked.length < 4 && offset < pool.length; offset++) {
    const idx = (seed + offset) % pool.length;
    if (used.has(idx)) continue;
    used.add(idx);
    const variant = pool[idx];
    picked.push({
      question: renderTemplate(variant.question, tokens),
      answer: renderTemplate(variant.answer, tokens),
    });
  }
  return picked;
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
    reviewedBy: 'Marvin Smit – F-gassen gecertificeerd airco-specialist en eigenaar StayCool Airco',
    lastReviewed: '2026-05-06',
    certifications: ['F-gassen gecertificeerd', 'Ervaren in residentiële en lichte utiliteitsprojecten'],
    yearsActive: 5,
    localProjects: profile.installationCount,
    responseTime: 'Binnen 24 uur reactie op aanvragen in heel Limburg',
  };
}

/**
 * Token map used by `renderTemplate()` to interpolate city-specific values
 * into variant strings.
 */
function profileTokens(profile: ProgrammaticLocationProfile): Record<string, string> {
  return {
    city: profile.city,
    region: profile.region,
    postcodeRange: profile.postalCodes,
    postcodeRangeReadable: formatPostalCodes(profile.postalCodes),
    population: profile.populationCount.toLocaleString('nl-NL'),
    neighborhood1: profile.neighborhoods[0],
    neighborhood2: profile.neighborhoods[1],
    landmark1: profile.landmarks[0],
    landmark2: profile.landmarks[1],
    housingMix: profile.housingMix,
    localConstraint: profile.localConstraint,
    installationCount: profile.installationCount.toString(),
  };
}

export function buildProgrammaticLandingProps(profile: ProgrammaticLocationProfile) {
  const seed = djb2Hash(profile.slug);
  const tokens = profileTokens(profile);

  // Variant rotation — same city always picks same variant (stable for caching).
  const introPool = CITY_INTRO_VARIANTS[profile.tier];
  const servicesPool = CITY_SERVICES_VARIANTS[profile.tier];
  const practicalPool = CITY_PRACTICAL_VARIANTS[profile.tier];

  const introParagraph = renderTemplate(introPool[seed % introPool.length], tokens);
  const servicesParagraph = renderTemplate(servicesPool[(seed + 1) % servicesPool.length], tokens);
  const practicalParagraph = renderTemplate(practicalPool[(seed + 2) % practicalPool.length], tokens);

  // Climate facts: region-base + tier-specific + per-city extras.
  const climateFacts = [
    ...REGION_CLIMATE_CONTEXT[profile.region],
    `In ${profile.city} zien we in de praktijk extra warmtelast rondom ${profile.landmarks[0]} en ${profile.landmarks[1]}.`,
    ...(profile.overrides?.extraClimateFacts ?? []),
  ];

  // Special features: tier-base + per-city extras.
  const specialFeatures = [
    `Woningprofiel in ${profile.city}: ${profile.housingMix}.`,
    `Lokale uitdaging: ${profile.localConstraint}.`,
    `Advies op maat per wijk, met extra focus op ${profile.neighborhoods[0]} en ${profile.neighborhoods[1]}.`,
    `Afstemming op ventilatie, isolatie en verbruiksprofiel voor woningen in ${profile.region}.`,
    ...(profile.overrides?.extraSpecialFeatures ?? []),
  ];

  // FAQs: per-city extras first (genuine local content), then generated base set.
  const baseFaqs = buildBaseFaqs(profile, seed);
  const faqs = [...(profile.overrides?.extraFaqs ?? []), ...baseFaqs];

  return {
    city: profile.city,
    region: profile.region,
    postalCodes: profile.postalCodes,
    populationCount: profile.populationCount,
    installationCount: profile.installationCount,
    locationImage: profile.overrides?.localImage,
    introParagraph,
    servicesParagraph,
    practicalParagraph,
    climateFacts,
    specialFeatures,
    faqs,
    caseStudies: buildCaseStudies(profile),
    expertiseSignals: buildExpertiseSignals(profile),
  };
}
