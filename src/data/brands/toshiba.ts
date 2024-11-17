import { Brand } from '../../types/products';

export const toshibaData: Brand = {
  name: 'Toshiba',
  description: 'Premium Japanse technologie met focus op design, duurzaamheid en innovatie. Toshiba staat bekend om hun hoogwaardige airconditioners met unieke features.',
  imageUrl: '/images/products/toshiba/brand.jpg',
  features: [
    'Ultra Pure filtertechnologie',
    'Magic Coil coating',
    'Plasma Ionizer',
    'Smart Home integratie'
  ],
  models: [
    {
      name: 'Haori',
      slug: 'haori',
      description: 'De Toshiba Haori is een unieke designwandmodel met verwisselbare stoffen bekleding. Perfect voor wie een airconditioner zoekt die naadloos in het interieur past.',
      imageUrl: '/images/products/toshiba/haori/main.jpg',
      images: [
        {
          url: '/images/products/toshiba/haori/front.jpg',
          alt: 'Toshiba Haori - Vooraanzicht'
        },
        {
          url: '/images/products/toshiba/haori/side.jpg',
          alt: 'Toshiba Haori - Zijaanzicht'
        },
        {
          url: '/images/products/toshiba/haori/installed.jpg',
          alt: 'Toshiba Haori - Geïnstalleerd'
        },
        {
          url: '/images/products/toshiba/haori/detail.jpg',
          alt: 'Toshiba Haori - Stoffen bekleding detail'
        }
      ],
      price: '€1.599,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 4,6 kW',
      features: [
        'Verwisselbare stoffen hoes',
        'Ingebouwde wifi-module',
        'Ultra Pure filter (94% PM2.5)',
        'Magic Coil coating',
        'Plasma Ionizer',
        '3D-luchtstroom',
        'Fluisterstille werking vanaf 19 dB(A)'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,5 kW, 3,5 kW, 4,6 kW' },
        { label: 'SEER', value: 'tot 8,60' },
        { label: 'SCOP', value: 'tot 5,10' },
        { label: 'Geluidsniveau binnen', value: '19-23-41 dB(A)' },
        { label: 'Afmetingen (HxBxD)', value: '300 x 987 x 210 mm' },
        { label: 'Gewicht', value: '11,0 kg' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Standaard hoezen', value: 'Lichtgrijs en antraciet' }
      ]
    },
    {
      name: 'Shorai Edge',
      slug: 'shorai-edge',
      description: 'De Toshiba Shorai Edge combineert modern design met geavanceerde technologie. Een krachtige en efficiënte wandunit voor optimaal comfort.',
      imageUrl: '/images/products/toshiba/shorai-edge/main.jpg',
      images: [
        {
          url: '/images/products/toshiba/shorai-edge/front.jpg',
          alt: 'Toshiba Shorai Edge - Vooraanzicht'
        },
        {
          url: '/images/products/toshiba/shorai-edge/side.jpg',
          alt: 'Toshiba Shorai Edge - Zijaanzicht'
        },
        {
          url: '/images/products/toshiba/shorai-edge/installed.jpg',
          alt: 'Toshiba Shorai Edge - Geïnstalleerd'
        }
      ],
      price: '€1.299,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 7,0 kW',
      features: [
        'Ingebouwde wifi-module',
        'Ultra Pure filter',
        'Magic Coil coating',
        'Plasma Ionizer',
        'Power Selection',
        'Fireplace modus',
        'Silent modus'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,5 kW, 3,2 kW, 4,6 kW, 5,0 kW, 6,1 kW, 7,0 kW' },
        { label: 'SEER', value: 'tot 7,70' },
        { label: 'SCOP', value: 'tot 4,70' },
        { label: 'Geluidsniveau binnen', value: '19 dB(A)' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Wifi', value: 'Standaard ingebouwd' }
      ]
    },
    {
      name: 'Seiya',
      slug: 'seiya',
      description: 'De Toshiba Seiya biedt betrouwbare prestaties voor een aantrekkelijke prijs. Perfect voor wie op zoek is naar een kwalitatieve basis airco.',
      imageUrl: '/images/products/toshiba/seiya/main.jpg',
      images: [
        {
          url: '/images/products/toshiba/seiya/front.jpg',
          alt: 'Toshiba Seiya - Vooraanzicht'
        },
        {
          url: '/images/products/toshiba/seiya/side.jpg',
          alt: 'Toshiba Seiya - Zijaanzicht'
        },
        {
          url: '/images/products/toshiba/seiya/installed.jpg',
          alt: 'Toshiba Seiya - Geïnstalleerd'
        }
      ],
      price: '€999,-',
      energyLabel: 'A++',
      capacity: '2,0 kW - 6,5 kW',
      features: [
        'Wifi-module (optioneel)',
        'Magic Coil coating',
        'Eco modus',
        'Hi-power modus',
        'Quiet modus',
        'Preset modus',
        'Comfort Sleep'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,0 kW, 2,5 kW, 3,3 kW, 4,6 kW, 5,0 kW, 6,5 kW' },
        { label: 'SEER', value: 'tot 6,90' },
        { label: 'SCOP', value: 'tot 4,60' },
        { label: 'Geluidsniveau binnen', value: '21 dB(A)' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Wifi', value: 'Optioneel' }
      ]
    },
    {
      name: 'Console',
      slug: 'console',
      description: 'De Toshiba Console is een veelzijdig vloermodel met dubbele luchtuitblaas. Ideaal voor montage onder het raam of op zolder.',
      imageUrl: '/images/products/toshiba/console/main.jpg',
      images: [
        {
          url: '/images/products/toshiba/console/front.jpg',
          alt: 'Toshiba Console - Vooraanzicht'
        },
        {
          url: '/images/products/toshiba/console/side.jpg',
          alt: 'Toshiba Console - Zijaanzicht'
        },
        {
          url: '/images/products/toshiba/console/installed.jpg',
          alt: 'Toshiba Console - Geïnstalleerd'
        }
      ],
      price: '€1.499,-',
      energyLabel: 'A++',
      capacity: '2,5 kW - 5,0 kW',
      features: [
        'Dubbele luchtuitblaas',
        'Vloerverwarming effect',
        'Wifi-module (optioneel)',
        'Ultra Pure filter',
        'Magic Coil coating',
        'Quiet modus',
        'Compact design'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,5 kW, 3,5 kW, 5,0 kW' },
        { label: 'SEER', value: '7,00' },
        { label: 'SCOP', value: '4,60' },
        { label: 'Geluidsniveau binnen', value: '23 dB(A)' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Afmetingen (HxBxD)', value: '600 x 700 x 220 mm' }
      ]
    },
    {
      name: 'Daiseikai 10',
      slug: 'daiseikai-10',
      description: 'De Toshiba Daiseikai 10 is een high-end airconditioner met uitzonderlijke energie-efficiëntie en uniek design, verkrijgbaar in hout of wit.',
      imageUrl: '/images/products/toshiba/daiseikai-10/main.jpg',
      images: [
        {
          url: '/images/products/toshiba/daiseikai-10/front-white.jpg',
          alt: 'Toshiba Daiseikai 10 - Vooraanzicht wit'
        },
        {
          url: '/images/products/toshiba/daiseikai-10/front-wood.jpg',
          alt: 'Toshiba Daiseikai 10 - Vooraanzicht hout'
        },
        {
          url: '/images/products/toshiba/daiseikai-10/side.jpg',
          alt: 'Toshiba Daiseikai 10 - Zijaanzicht'
        },
        {
          url: '/images/products/toshiba/daiseikai-10/installed.jpg',
          alt: 'Toshiba Daiseikai 10 - Geïnstalleerd'
        }
      ],
      price: '€4.412,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 5,0 kW',
      features: [
        'PEFC gecertificeerd houten design (optioneel)',
        'Smart Sensing technologie',
        'Smart Defrost systeem',
        'Plasma Ionizer',
        'Ultra Pure filters',
        'HaDa-care voor indirecte luchtstroom',
        'Raisin coil coating',
        '43% gerecycled materiaal'
      ],
      specifications: [
        { label: 'Beschikbare capaciteiten', value: '2,5 kW, 3,5 kW, 5,0 kW' },
        { label: 'SEER', value: '10,7' },
        { label: 'SCOP', value: '5,3' },
        { label: 'Energielabel', value: 'A+++' },
        { label: 'Koudemiddel', value: 'R32' },
        { label: 'Uitvoeringen', value: 'Wit of houten design' },
        { label: 'Smart Home', value: 'Compatible met Alexa en Google Assistant' },
        { label: 'Fijnstof filtering', value: '94% PM2.5 absorptie' }
      ]
    }
  ]
};