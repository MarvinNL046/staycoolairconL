import { Brand } from '../../types/products';

export const tosotData: Brand = {
  name: 'Tosot by Gree',
  description: 'Moderne technologie voor optimaal comfort tegen een scherpe prijs. Tosot is het premium merk van GREE, één van de grootste airco fabrikanten ter wereld.',
  imageUrl: '/images/products/724-clivia-wit-vooraanzicht.webp',
  features: [
    'G-Tech Inverter technologie',
    'Wifi-ready modellen beschikbaar',
    'Energiezuinige werking',
    'Uitstekende prijs-kwaliteitverhouding'
  ],
  models: [
    {
      name: 'Cosmo',
      slug: 'cosmo',
      description: 'De TOSOT COSMO 3,2 kW R32 Inverter Airco Set by GREE is een krachtige en efficiënte airconditioningoplossing, ontworpen om betrouwbare koeling en verwarming te bieden met een capaciteit van 3,2 kW. Deze set maakt gebruik van het moderne R32 koelmiddel en Inverter-technologie, wat zorgt voor uitstekende energieprestaties en lage operationele kosten. Met een energielabel van A++ biedt dit systeem niet alleen uitstekende prestaties, maar ook een geluidsniveau van slechts 24 dB(A) voor de binnenunit.',
      imageUrl: '/images/products/787-cosmo-indoor-vooraanzicht.webp',
      images: [
        {
          url: '/images/products/787-cosmo-indoor-vooraanzicht.webp',
          alt: 'Tosot Cosmo - Vooraanzicht'
        },
        {
          url: '/images/products/788-cosmo-indoor.webp',
          alt: 'Tosot Cosmo - Zijaanzicht'
        },
        {
          url: '/images/products/789-cosmo-indoor.webp',
          alt: 'Tosot Cosmo - Andere kant'
        }
      ],
      price: '€1395,- inclusief standaard installatie',
      energyLabel: 'A++',
      capacity: '2,5 kW - 6,1 kW',
      features: [
        'Laag geluidsniveau (slechts 24 dB(A) binnenunit)',
        'Plasma ionisatie filter voor schonere lucht',
        'Energieklasse A++ voor lage energiekosten',
        'Vorstvrij verwarmingsmodus tot lage buitentemperaturen',
        'G-Tech Inverter technologie voor efficiënte prestaties',
        'R32 koelmiddel voor verminderde impact op het milieu',
        'Stabiele temperatuurregeling dankzij inverter-technologie',
        'Auto-herstart functie na stroomuitval'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,5 kW, 3,2 kW, 4,6 kW, 6,1 kW' },
        { label: 'Koelcapaciteit', value: '3,2 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 kW' },
        { label: 'SEER (koeling)', value: '6,1' },
        { label: 'SCOP (verwarming)', value: '4,0' },
        { label: 'Geluidsdrukniveau binnenunit', value: '24 dB(A)' },
        { label: 'Geluidsdrukniveau buitenunit', value: '52 dB(A)' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Energielabel', value: 'A++' },
        { label: 'Type', value: 'Wandmodel' },
        { label: 'Garantie', value: '3 jaar' }
      ]
    },
    {
      name: 'Pular',
      slug: 'pular',
      description: 'De Tosot PULAR by GREE single split airco R32 2,2 kW set is een efficiënte en betrouwbare oplossing voor klimaatregeling, ontworpen voor zowel zakelijke als particuliere toepassingen. Met een koelcapaciteit van 2,2 kW en het milieuvriendelijke R32 koelmiddel, biedt deze airco uitstekende prestaties met een lage impact op het milieu. Deze airco combineert een laag energieverbruik met krachtige koeling en verwarming, wat ideaal is voor kleinere ruimtes zoals slaapkamers, kantoren of vergaderruimtes.',
      imageUrl: '/images/products/568-Pular-indoor-vooraanzicht.webp',
      images: [
        {
          url: '/images/products/568-Pular-indoor-vooraanzicht.webp',
          alt: 'Tosot Pular - Vooraanzicht'
        },
        {
          url: '/images/products/570-Pular-indoor-right.webp',
          alt: 'Tosot Pular - Rechts'
        }
      ],
      price: '€1495,- inclusief standaard installatie',
      energyLabel: 'A++',
      capacity: '2,2 kW - 6,1 kW',
      features: [
        'Ultra stil met slaapmodus (slechts 21 dB(A))',
        'Koelen en verwarmen met invertertechnologie',
        '4-way Swing en plasmafilter voor optimale luchtverdeling',
        'Energieklasse A++ voor lage energiekosten',
        'Milieuvriendelijk R32 koelmiddel met lage impact op broeikaseffect',
        'Smart control via Google Assistant en Amazon Alexa',
        'Ingebouwde wifi-besturing',
        'Uitgebreide timerfuncties en auto-reiniging'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,2 kW, 2,5 kW, 3,2 kW, 4,6 kW, 6,1 kW' },
        { label: 'Koelcapaciteit', value: '2,2 kW (min-max)' },
        { label: 'Verwarmingscapaciteit', value: '2,4 kW (min-max)' },
        { label: 'SEER (koeling)', value: '6,6 W/W' },
        { label: 'SCOP (verwarming)', value: '4,0 W/W' },
        { label: 'Jaarlijks energieverbruik koelen', value: '117 kWh' },
        { label: 'Koudemiddel', value: 'R32 (0,4 kg)' },
        { label: 'Global Warming Potential (GWP)', value: '270' },
        { label: 'Geluidsdrukniveau binnenunit koelen', value: '21-34 dB(A)' },
        { label: 'Geluidsdrukniveau binnenunit verwarmen', value: '21-34 dB(A)' },
        { label: 'Geluidsvermogenniveau binnenunit', value: '55 dB(A)' },
        { label: 'Geluidsdrukniveau buitenunit', value: '50 dB(A)' },
        { label: 'Geluidsvermogenniveau buitenunit', value: '60 dB(A)' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '260 x 704 x 185 mm' },
        { label: 'Gewicht binnenunit', value: '7,5 kg' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: '450 x 710 x 293 mm' },
        { label: 'Gewicht buitenunit', value: '21 kg' },
        { label: 'Luchtdebiet koelen', value: '250-470 m³/h' },
        { label: 'Luchtdebiet verwarmen', value: '250-470 m³/h' },
        { label: 'Aantal ventilatiesnelheden', value: '4' },
        { label: 'Energielabel', value: 'A++' },
        { label: 'Type', value: 'Wandmodel (hoog)' },
        { label: 'Leidingaansluitingen', value: '1/4" (vloeistof), 3/8" (zuigleiding)' },
        { label: 'Ontvochtigingscapaciteit', value: '0,6 l/h' },
        { label: 'Bedrijfstemperatuur koelen', value: '-15°C tot 43°C' },
        { label: 'Bedrijfstemperatuur verwarmen', value: '-15°C tot 24°C' },
        { label: 'Min. leidinglengte', value: '3 m' },
        { label: 'Max. leidinglengte', value: '15 m' },
        { label: 'Max. hoogteverschil', value: '10 m' },
        { label: 'Smart home compatibiliteit', value: 'Google Assistant, Amazon Alexa' }
      ]
    },
    {
      name: 'Clivia Design',
      slug: 'clivia',
      description: 'De Tosot CLIVIA by GREE inverter is een airco set van hoogwaardige kwaliteit. Met een koelvermogen van 2,7 kW en de mogelijkheid om te verwarmen biedt deze airco veelzijdige klimaatregeling voor elke ruimte. De Clivia gebruikt R32 koelmiddel dat beter is voor het milieu en beschikt over een indrukwekkende SEER van 8,5 W/W en SCOP van 4,6 W/W, wat hem tot een van de meest energie-efficiënte modellen in zijn klasse maakt. Verkrijgbaar in stijlvol wit of zwart design.',
      imageUrl: '/images/products/724-clivia-wit-vooraanzicht.webp',
      images: [
        // Wit model
        {
          url: '/images/products/724-clivia-wit-vooraanzicht.webp',
          alt: 'Tosot Clivia Wit - Vooraanzicht'
        },
        {
          url: '/images/products/723-clivia-wit-schuin.webp',
          alt: 'Tosot Clivia Wit - Schuin'
        },
        {
          url: '/images/products/727-clivia-wit-zijkant.webp',
          alt: 'Tosot Clivia Wit - Zijkant'
        },
        // Zwart model
        {
          url: '/images/products/712-clivia-zwart-vooraanzicht.webp',
          alt: 'Tosot Clivia Zwart - Vooraanzicht'
        },
        {
          url: '/images/products/711-clivia-zwart-schuin.webp',
          alt: 'Tosot Clivia Zwart - Schuin'
        },
        {
          url: '/images/products/710-clivia-zwart-zijkant.webp',
          alt: 'Tosot Clivia Zwart - Zijkant'
        }
      ],
      price: '€1595,- inclusief standaard installatie',
      energyLabel: 'A+++',
      capacity: '2,7 kW - 7,1 kW',
      features: [
        'Ultra stil met slaapmodus (slechts 22 dB(A))',
        'Koelen en verwarmen met invertertechnologie',
        'UV Nano- en plasmafilter voor superieure luchtkwaliteit',
        'Energieklasse A+++ voor ongekende efficiëntie',
        'Wifi-besturing via smartphone app',
        'Verkrijgbaar in stijlvol wit of zwart design',
        'Auto clean functie voor een schoner binnenklimaat',
        'Smart control via Google Assistant en Amazon Alexa'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,7 kW, 3,5 kW, 5,3 kW, 7,1 kW' },
        { label: 'Koelcapaciteit', value: '2,7 kW (min-max)' },
        { label: 'Verwarmingscapaciteit', value: '3,0 kW (min-max)' },
        { label: 'SEER (koeling)', value: '8,5 W/W' },
        { label: 'SCOP (verwarming)', value: '4,6 W/W' },
        { label: 'Jaarlijks energieverbruik koelen', value: '111 kWh' },
        { label: 'Koudemiddel', value: 'R32 (0,53 kg)' },
        { label: 'Global Warming Potential (GWP)', value: '358' },
        { label: 'Geluidsdrukniveau binnenunit koelen', value: '22-38 dB(A)' },
        { label: 'Geluidsdrukniveau binnenunit verwarmen', value: '22-38 dB(A)' },
        { label: 'Geluidsvermogenniveau binnenunit', value: '58 dB(A)' },
        { label: 'Geluidsdrukniveau buitenunit', value: '50 dB(A)' },
        { label: 'Geluidsvermogenniveau buitenunit', value: '61 dB(A)' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '293 x 837 x 200 mm' },
        { label: 'Gewicht binnenunit', value: '9,5 kg' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: '555 x 732 x 330 mm' },
        { label: 'Gewicht buitenunit', value: '25 kg' },
        { label: 'Luchtdebiet koelen', value: '390-610 m³/h' },
        { label: 'Luchtdebiet verwarmen', value: '390-610 m³/h' },
        { label: 'Aantal ventilatiesnelheden', value: '4' },
        { label: 'Energielabel', value: 'A+++' },
        { label: 'Type', value: 'Wandmodel (hoog)' },
        { label: 'Kleuren', value: 'Wit of zwart' },
        { label: 'Leidingaansluitingen', value: '1/4" (vloeistof), 3/8" (zuigleiding)' },
        { label: 'Ontvochtigingscapaciteit', value: '0,8 l/h' },
        { label: 'Bedrijfstemperatuur koelen', value: '-15°C tot 50°C' },
        { label: 'Bedrijfstemperatuur verwarmen', value: '-25°C tot 30°C' },
        { label: 'Min. leidinglengte', value: '3 m' },
        { label: 'Max. leidinglengte', value: '15 m' },
        { label: 'Max. hoogteverschil', value: '10 m' },
        { label: 'Smart home compatibiliteit', value: 'Google Assistant, Amazon Alexa' }
      ]
    },
    {
      name: 'Console WTS-12R',
      slug: 'console',
      description: 'De TOSOT CONSOLE WTS-12R 3,5 kW Inverter Set by GREE is een efficiënte en veelzijdige oplossing voor klimaatbeheersing in kleine tot middelgrote ruimtes. Met een koelvermogen van 3,5 kW en uitgerust met geavanceerde invertertechnologie, biedt deze console een betrouwbare en energiezuinige temperatuurregeling. De unit heeft een SEER van 7,2 en een SCOP van 4,1, wat zorgt voor uitstekende prestaties, zowel in de zomer als in de winter. Met energielabel A++ voor koelen en A+ voor verwarmen is dit systeem ontworpen om de energiekosten laag te houden en tegelijkertijd een hoog comfortniveau te handhaven.',
      imageUrl: '/images/products/374-WTS-indoor-console-vloernmodel-tosot.webp',
      images: [
        {
          url: '/images/products/374-WTS-indoor-console-vloernmodel-tosot.webp',
          alt: 'Tosot Console - Vooraanzicht'
        },
        {
          url: '/images/products/375-WTS-remote-console-tosot.webp',
          alt: 'Tosot Console - Afstandsbediening'
        }
      ],
      price: '€1.845,- inclusief standaard installatie',
      energyLabel: 'A++/A+',
      capacity: '3,5 kW - 3,8 kW',
      features: [
        'Fluisterstille werking van slechts 25 dB(A)',
        'Energielabel A++ voor koelen en A+ voor verwarmen',
        'Standaard WiFi-besturing voor bediening op afstand',
        'Invertertechnologie voor nauwkeurige temperatuurregeling',
        'Compact en stijlvol ontwerp, ideaal voor kleine ruimtes',
        'Milieuvriendelijk R32 koelmiddel',
        'Timer functie voor geprogrammeerd aan/uit schakelen',
        'Smart Control via Google Assistant en Amazon Alexa'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '3,5 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,8 kW' },
        { label: 'SEER (koeling)', value: '7,2' },
        { label: 'SCOP (verwarming)', value: '4,1' },
        { label: 'Jaarlijks energieverbruik koelen', value: '170 kWh' },
        { label: 'Koudemiddel', value: 'R32 (0,755 kg)' },
        { label: 'Global Warming Potential (GWP)', value: '510' },
        { label: 'Geluidsdrukniveau binnenunit', value: '25-44 dB(A)' },
        { label: 'Geluidsdrukniveau buitenunit', value: '53 dB(A)' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '600 x 700 x 215 mm' },
        { label: 'Gewicht binnenunit', value: '16 kg' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: '555 x 802 x 350 mm' },
        { label: 'Gewicht buitenunit', value: '27,5 kg' },
        { label: 'Aantal ventilatiesnelheden', value: '7' },
        { label: 'Luchtdebiet koelen', value: '280-600 m³/h' },
        { label: 'Luchtdebiet verwarmen', value: '280-600 m³/h' },
        { label: 'Ontvochtigingscapaciteit', value: '1,2 l/h' },
        { label: 'Bedrijfstemperatuur koelen', value: '-15°C tot 43°C' },
        { label: 'Bedrijfstemperatuur verwarmen', value: '-22°C tot 24°C' },
        { label: 'Min. leidinglengte', value: '3 m' },
        { label: 'Max. leidinglengte', value: '20 m' },
        { label: 'Max. hoogteverschil', value: '10 m' },
        { label: 'Energielabel koelen', value: 'A++' },
        { label: 'Energielabel verwarmen', value: 'A+' },
        { label: 'Type', value: 'Vloermodel/Console' },
        { label: 'Wifi', value: 'Standaard ingebouwd' },
        { label: 'Smart home compatibiliteit', value: 'Google Assistant, Amazon Alexa' }
      ]
    }
  ]
};
