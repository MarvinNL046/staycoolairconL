import { Brand } from '../../types/products';

export const lgData: Brand = {
  name: 'LG',
  description: 'Vooruitstrevende technologie met focus op design, gebruiksgemak en luchtkwaliteit.',
  imageUrl: '/images/products/lg/brand.jpg',
  features: [
    'ThinQ Smart Diagnosis',
    'Dual Inverter Compressor',
    'UVnano technologie',
    '10 jaar garantie op compressor'
  ],
  models: [
    {
      name: 'DualCool Standaard Plus',
      slug: 'dualcool-standaard-plus',
      description: 'Betrouwbare wandunit voor woonkamer of slaapkamer met uitstekende prijs-kwaliteitverhouding. Voorzien van comfort air, fast cooling en ingebouwde wifi.',
      imageUrl: '/images/products/lg/dualcool-standaard/main.jpg',
      images: [
        {
          url: '/images/products/lg/dualcool-standaard/front.jpg',
          alt: 'LG DualCool Standaard Plus - Vooraanzicht'
        },
        {
          url: '/images/products/lg/dualcool-standaard/side.jpg',
          alt: 'LG DualCool Standaard Plus - Zijaanzicht'
        },
        {
          url: '/images/products/lg/dualcool-standaard/installed.jpg',
          alt: 'LG DualCool Standaard Plus - Geïnstalleerd'
        }
      ],
      price: '€999,-',
      energyLabel: 'A++',
      capacity: '2,5 kW - 6,6 kW',
      features: [
        'Comfort Air functie',
        'Fast Cooling',
        'Ingebouwde wifi',
        'Active Energy Control',
        'Auto Clean',
        'ThinQ app besturing',
        'Dual Inverter Compressor'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 6,6 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 7,5 kW' },
        { label: 'SEER', value: '7,0' },
        { label: 'SCOP', value: '4,1' },
        { label: 'Geluidsniveau binnen', value: '21 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'DualCool Deluxe',
      slug: 'dualcool-deluxe',
      description: 'Geavanceerde wandunit met superieure energiezuinigheid en uitgebreide functies voor optimaal comfort.',
      imageUrl: '/images/products/lg/dualcool-deluxe/main.jpg',
      images: [
        {
          url: '/images/products/lg/dualcool-deluxe/front.jpg',
          alt: 'LG DualCool Deluxe - Vooraanzicht'
        },
        {
          url: '/images/products/lg/dualcool-deluxe/side.jpg',
          alt: 'LG DualCool Deluxe - Zijaanzicht'
        },
        {
          url: '/images/products/lg/dualcool-deluxe/installed.jpg',
          alt: 'LG DualCool Deluxe - Geïnstalleerd'
        }
      ],
      price: '€1.299,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 6,6 kW',
      features: [
        'UVnano technologie',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'Ionizer',
        'Auto Clean',
        '4-weg luchtstroom'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 6,6 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 7,5 kW' },
        { label: 'SEER', value: '8,5' },
        { label: 'SCOP', value: '4,6' },
        { label: 'Geluidsniveau binnen', value: '20 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'DualCool Prestige',
      slug: 'dualcool-prestige',
      description: 'Door de Consumentenbond als beste getest. Deze zeer stille wandunit biedt maximale energie-efficiëntie en superieur comfort.',
      imageUrl: '/images/products/lg/dualcool-prestige/main.jpg',
      images: [
        {
          url: '/images/products/lg/dualcool-prestige/front.jpg',
          alt: 'LG DualCool Prestige - Vooraanzicht'
        },
        {
          url: '/images/products/lg/dualcool-prestige/side.jpg',
          alt: 'LG DualCool Prestige - Zijaanzicht'
        },
        {
          url: '/images/products/lg/dualcool-prestige/installed.jpg',
          alt: 'LG DualCool Prestige - Geïnstalleerd'
        }
      ],
      price: '€1.599,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 3,5 kW',
      features: [
        'Zeer stille werking vanaf 19 dB',
        'UVnano technologie',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'Ionizer Plus',
        'Auto Clean+'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 3,5 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 4,0 kW' },
        { label: 'SEER', value: '9,0' },
        { label: 'SCOP', value: '5,1' },
        { label: 'Geluidsniveau binnen', value: '19 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'ARTCOOL Gallery',
      slug: 'artcool-gallery',
      description: 'De LG ARTCOOL Gallery combineert kunst met klimaatbeheersing. Het unieke design met verwisselbaar frontpaneel maakt van uw airconditioner een kunstwerk aan de wand.',
      imageUrl: '/images/products/lg/artcool-gallery/main.jpg',
      images: [
        {
          url: '/images/products/lg/artcool-gallery/front.jpg',
          alt: 'LG ARTCOOL Gallery - Vooraanzicht'
        },
        {
          url: '/images/products/lg/artcool-gallery/side.jpg',
          alt: 'LG ARTCOOL Gallery - Zijaanzicht'
        },
        {
          url: '/images/products/lg/artcool-gallery/installed.jpg',
          alt: 'LG ARTCOOL Gallery - Geïnstalleerd'
        }
      ],
      price: '€1.899,-',
      energyLabel: 'A++',
      capacity: '2,5 kW - 3,5 kW',
      features: [
        'Verwisselbaar frontpaneel voor eigen artwork',
        'UVnano technologie',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'Ionizer',
        'Auto Clean'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 3,5 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 4,0 kW' },
        { label: 'SEER', value: '7,6' },
        { label: 'SCOP', value: '4,3' },
        { label: 'Geluidsniveau binnen', value: '21 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'ARTCOOL Mirror',
      slug: 'artcool-mirror',
      description: 'Stijlvolle wandunit met spiegelend glazen frontpaneel dat naadloos integreert in moderne interieurs.',
      imageUrl: '/images/products/lg/artcool-mirror/main.jpg',
      images: [
        {
          url: '/images/products/lg/artcool-mirror/front.jpg',
          alt: 'LG ARTCOOL Mirror - Vooraanzicht'
        },
        {
          url: '/images/products/lg/artcool-mirror/side.jpg',
          alt: 'LG ARTCOOL Mirror - Zijaanzicht'
        },
        {
          url: '/images/products/lg/artcool-mirror/installed.jpg',
          alt: 'LG ARTCOOL Mirror - Geïnstalleerd'
        }
      ],
      price: '€1.699,-',
      energyLabel: 'A++',
      capacity: '2,5 kW - 6,6 kW',
      features: [
        'Spiegelend glazen frontpaneel',
        'UVnano technologie',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'Ionizer',
        'Auto Clean'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 6,6 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 7,5 kW' },
        { label: 'SEER', value: '7,6' },
        { label: 'SCOP', value: '4,3' },
        { label: 'Geluidsniveau binnen', value: '21 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'ARTCOOL Beige',
      slug: 'artcool-beige',
      description: 'Elegante wandunit in tijdloos beige design, perfect voor interieurs waar een subtiele uitstraling gewenst is.',
      imageUrl: '/images/products/lg/artcool-beige/main.jpg',
      images: [
        {
          url: '/images/products/lg/artcool-beige/front.jpg',
          alt: 'LG ARTCOOL Beige - Vooraanzicht'
        },
        {
          url: '/images/products/lg/artcool-beige/side.jpg',
          alt: 'LG ARTCOOL Beige - Zijaanzicht'
        },
        {
          url: '/images/products/lg/artcool-beige/installed.jpg',
          alt: 'LG ARTCOOL Beige - Geïnstalleerd'
        }
      ],
      price: '€1.599,-',
      energyLabel: 'A++',
      capacity: '2,5 kW - 6,6 kW',
      features: [
        'Elegant beige design',
        'UVnano technologie',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'Ionizer',
        'Auto Clean'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 6,6 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 7,5 kW' },
        { label: 'SEER', value: '7,6' },
        { label: 'SCOP', value: '4,3' },
        { label: 'Geluidsniveau binnen', value: '21 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Console',
      slug: 'console',
      description: 'Veelzijdig vloermodel dat op of vlak boven de grond geplaatst kan worden. Ideaal voor ruimtes waar wandmontage niet mogelijk of gewenst is.',
      imageUrl: '/images/products/lg/console/main.jpg',
      images: [
        {
          url: '/images/products/lg/console/front.jpg',
          alt: 'LG Console - Vooraanzicht'
        },
        {
          url: '/images/products/lg/console/side.jpg',
          alt: 'LG Console - Zijaanzicht'
        },
        {
          url: '/images/products/lg/console/installed.jpg',
          alt: 'LG Console - Geïnstalleerd'
        }
      ],
      price: '€1.299,-',
      energyLabel: 'A+',
      capacity: '2,5 kW - 5,0 kW',
      features: [
        'Flexibele plaatsing',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'Auto Clean',
        'Dubbele luchtstroom (boven/onder)',
        'Snelle verwarming'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 5,8 kW' },
        { label: 'SEER', value: '6,6' },
        { label: 'SCOP', value: '4,0' },
        { label: 'Geluidsniveau binnen', value: '23 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    }
  ]
};