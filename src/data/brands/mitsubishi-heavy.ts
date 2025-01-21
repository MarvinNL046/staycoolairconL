import { Brand } from '../../types/products';

export const mitsubishiHeavyData: Brand = {
  name: 'Mitsubishi Heavy Industries',
  description: 'Hoogwaardige Japanse engineering met focus op duurzaamheid en betrouwbaarheid. Mitsubishi Heavy Industries staat bekend om hun robuuste en efficiënte airconditioners.',
  imageUrl: '/images/products/placeholder.txt',
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
      imageUrl: '/images/products/placeholder.txt',
      images: [
        {
          url: '/images/products/placeholder.txt',
          alt: 'Mitsubishi Heavy ZS-W - Foto binnenkort beschikbaar'
        }
      ],
      price: '€1.099,- inclusief standaard installatie',
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
      imageUrl: '/images/products/placeholder.txt',
      images: [
        {
          url: '/images/products/placeholder.txt',
          alt: 'Mitsubishi Heavy ZSX-W - Foto binnenkort beschikbaar'
        }
      ],
      price: '€1.399,- inclusief standaard installatie',
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
      imageUrl: '/images/products/placeholder.txt',
      images: [
        {
          url: '/images/products/placeholder.txt',
          alt: 'Mitsubishi Heavy SRF-ZMX-S - Foto binnenkort beschikbaar'
        }
      ],
      price: '€1.599,- inclusief standaard installatie',
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
    }
  ]
};
