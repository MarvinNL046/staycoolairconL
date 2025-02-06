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
      description: 'De Tosot Cosmo biedt betrouwbare klimaatbeheersing voor een zeer aantrekkelijke prijs. Perfect voor wie op zoek is naar een goede basis airco.',
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
        'G-Tech Inverter technologie',
        'Energiezuinige werking',
        'Stil in gebruik',
        'Auto-herstart functie',
        'Timer functie',
        'Eenvoudige installatie'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,5 kW, 3,2 kW, 4,6 kW, 6,1 kW' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Energielabel', value: 'A++' },
        { label: 'Type', value: 'Wandmodel' }
      ]
    },
    {
      name: 'Pular',
      slug: 'pular',
      description: 'De Tosot Pular combineert moderne technologie met ingebouwde wifi-besturing. Een slimme keuze voor wie op zoek is naar extra functionaliteit.',
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
        'Ingebouwde wifi-besturing',
        'G-Tech Inverter technologie',
        'Smart Control via app',
        'Energiezuinige werking',
        'Uitgebreide timerfuncties',
        'Auto-reiniging'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,2 kW, 2,5 kW, 3,2 kW, 4,6 kW, 6,1 kW' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Energielabel', value: 'A++' },
        { label: 'Type', value: 'Wandmodel' }
      ]
    },
    {
      name: 'Clivia Design',
      slug: 'clivia',
      description: 'De Tosot Clivia is verkrijgbaar in stijlvol wit of zwart design. Perfect voor wie waarde hecht aan zowel prestaties als uitstraling.',
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
      energyLabel: 'A++',
      capacity: '2,5 kW - 7,1 kW',
      features: [
        'Verkrijgbaar in wit of zwart design',
        'G-Tech Inverter technologie',
        'Premium uitstraling',
        'Energiezuinige werking',
        'Uitgebreide functies',
        'Stil in gebruik'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,5 kW, 3,5 kW, 5,3 kW, 7,1 kW' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Energielabel', value: 'A++' },
        { label: 'Type', value: 'Wandmodel' },
        { label: 'Kleuren', value: 'Wit of zwart' }
      ]
    },
    {
      name: 'Console',
      slug: 'console',
      description: 'Het Tosot Console model is ideaal voor montage op of nabij de vloer. Standaard voorzien van wifi-besturing voor optimaal gebruiksgemak.',
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
      energyLabel: 'A++',
      capacity: '3,5 kW - 5,2 kW',
      features: [
        'Standaard wifi-besturing',
        'Flexibele plaatsing',
        'G-Tech Inverter technologie',
        'Dubbele luchtuitblaas',
        'Smart Control via app',
        'Energiezuinige werking'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '3,5 kW, 5,2 kW' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Energielabel', value: 'A++' },
        { label: 'Type', value: 'Vloermodel' },
        { label: 'Wifi', value: 'Standaard ingebouwd' }
      ]
    }
  ]
};
