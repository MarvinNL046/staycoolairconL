import { Brand } from '../../types/products';

export const mitsubishiHeavyData: Brand = {
  name: 'Mitsubishi Heavy Industries',
  description: 'Hoogwaardige Japanse engineering met focus op duurzaamheid en betrouwbaarheid. Mitsubishi Heavy Industries staat bekend om hun robuuste en efficiënte airconditioners.',
  imageUrl: '/images/products/mitsubishi/brand.jpg',
  features: [
    'Allergeenfilter',
    'Silent Operation mode',
    'Extreme temperatuurbestendigheid',
    '3D Auto functie'
  ],
  models: [
    {
      name: 'ZS-W Serie',
      slug: 'zs-w',
      description: 'De ZS-W serie van Mitsubishi Heavy Industries biedt hoogwaardige wandunits die uitblinken in efficiëntie en betrouwbaarheid. Met geavanceerde features zoals de 3D Auto functie en allergeenfilter zorgen deze units voor optimaal comfort.',
      imageUrl: '/images/products/mitsubishi/zs-w/main.jpg',
      images: [
        {
          url: '/images/products/mitsubishi/zs-w/front.jpg',
          alt: 'Mitsubishi Heavy ZS-W - Vooraanzicht'
        },
        {
          url: '/images/products/mitsubishi/zs-w/side.jpg',
          alt: 'Mitsubishi Heavy ZS-W - Zijaanzicht'
        },
        {
          url: '/images/products/mitsubishi/zs-w/installed.jpg',
          alt: 'Mitsubishi Heavy ZS-W - Geïnstalleerd'
        }
      ],
      price: '€1.099,-',
      energyLabel: 'A+++',
      capacity: '2,0 kW - 5,0 kW',
      features: [
        'Allergeenfilter',
        'Silent Operation mode',
        'Extreme temperatuurbestendigheid',
        '3D Auto functie',
        'Weekly timer',
        'Jet Air technologie',
        'Self-cleaning functie'
      ],
      specifications: [
        { label: 'Beschikbare modellen', value: 'SRK20ZS-W, SRK25ZS-W, SRK35ZS-W, SRK50ZS-W' },
        { label: 'Koelcapaciteit', value: '2,0 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '2,5 - 6,0 kW' },
        { label: 'SEER', value: 'tot 8,7' },
        { label: 'SCOP', value: 'tot 5,2' },
        { label: 'Geluidsniveau binnen', value: 'vanaf 19 dB(A)' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Wifi', value: 'Optioneel' }
      ]
    },
    {
      name: 'SRK-ZSX-W Premium',
      slug: 'zsx-w',
      description: 'De premium wandunit van Mitsubishi Heavy met maximale energie-efficiëntie en geavanceerde luchtreiniging. Perfect voor wie het beste van het beste zoekt.',
      imageUrl: '/images/products/mitsubishi/zsx-w/main.jpg',
      images: [
        {
          url: '/images/products/mitsubishi/zsx-w/front.jpg',
          alt: 'Mitsubishi Heavy ZSX-W - Vooraanzicht'
        },
        {
          url: '/images/products/mitsubishi/zsx-w/side.jpg',
          alt: 'Mitsubishi Heavy ZSX-W - Zijaanzicht'
        },
        {
          url: '/images/products/mitsubishi/zsx-w/installed.jpg',
          alt: 'Mitsubishi Heavy ZSX-W - Geïnstalleerd'
        }
      ],
      price: '€1.399,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 6,0 kW',
      features: [
        'Premium allergeenfilter',
        'Ultra-silent operation',
        'Geavanceerde 3D Auto functie',
        'Wifi-besturing ingebouwd',
        'Plasma luchtreiniging',
        'Extra groot verwarmingsbereik',
        'Automatische filterreiniging'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 6,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,0 - 7,0 kW' },
        { label: 'SEER', value: 'tot 9,5' },
        { label: 'SCOP', value: 'tot 5,4' },
        { label: 'Geluidsniveau binnen', value: '18 dB(A)' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Wifi', value: 'Standaard ingebouwd' }
      ]
    },
    {
      name: 'SRF-ZMX-S Vloermodel',
      slug: 'srf-zmx-s',
      description: 'Stijlvol vloermodel met dubbele luchtuitblaas voor optimale warmteverdeling. Ideaal voor onder het raam of op zolder.',
      imageUrl: '/images/products/mitsubishi/srf-zmx-s/main.jpg',
      images: [
        {
          url: '/images/products/mitsubishi/srf-zmx-s/front.jpg',
          alt: 'Mitsubishi Heavy SRF-ZMX-S - Vooraanzicht'
        },
        {
          url: '/images/products/mitsubishi/srf-zmx-s/side.jpg',
          alt: 'Mitsubishi Heavy SRF-ZMX-S - Zijaanzicht'
        },
        {
          url: '/images/products/mitsubishi/srf-zmx-s/installed.jpg',
          alt: 'Mitsubishi Heavy SRF-ZMX-S - Geïnstalleerd'
        }
      ],
      price: '€1.599,-',
      energyLabel: 'A++',
      capacity: '2,5 kW - 5,0 kW',
      features: [
        'Dubbele luchtuitblaas',
        'Allergeenfilter',
        'Stille werking',
        'Wifi-besturing (optioneel)',
        'Weekprogramma',
        'Snelle opwarming',
        'Compact design'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,0 - 5,8 kW' },
        { label: 'SEER', value: '7,6' },
        { label: 'SCOP', value: '4,6' },
        { label: 'Geluidsniveau binnen', value: '22 dB(A)' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Afmetingen (HxBxD)', value: '600 x 860 x 238 mm' }
      ]
    },
    {
      name: 'FDTC-VH Cassette',
      slug: 'fdtc-vh',
      description: 'Compacte 4-zijdige cassette unit voor inbouw in systeemplafonds. Perfect voor kantoren en commerciële ruimtes.',
      imageUrl: '/images/products/mitsubishi/fdtc-vh/main.jpg',
      images: [
        {
          url: '/images/products/mitsubishi/fdtc-vh/front.jpg',
          alt: 'Mitsubishi Heavy FDTC-VH - Vooraanzicht'
        },
        {
          url: '/images/products/mitsubishi/fdtc-vh/side.jpg',
          alt: 'Mitsubishi Heavy FDTC-VH - Zijaanzicht'
        },
        {
          url: '/images/products/mitsubishi/fdtc-vh/installed.jpg',
          alt: 'Mitsubishi Heavy FDTC-VH - Geïnstalleerd'
        }
      ],
      price: '€1.899,-',
      energyLabel: 'A++',
      capacity: '3,5 kW - 7,1 kW',
      features: [
        '4-zijdige uitblaas',
        'Zeer compact design',
        'Motion sensor (optioneel)',
        'Individueel instelbare lamellen',
        'Verse lucht aansluiting mogelijk',
        'Condenspomp ingebouwd',
        'Multi-functioneel filter'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '3,5 - 7,1 kW' },
        { label: 'Verwarmingscapaciteit', value: '4,0 - 8,0 kW' },
        { label: 'SEER', value: '6,8' },
        { label: 'SCOP', value: '4,3' },
        { label: 'Geluidsniveau binnen', value: '28 dB(A)' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Afmetingen (HxBxD)', value: '248 x 570 x 570 mm' }
      ]
    }
  ]
};
