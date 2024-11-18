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
      imageUrl: '/images/products/rac-eu-standard-plus-.webp',
      images: [
        {
          url: '/images/products/rac-eu-standard-plus-.webp',
          alt: 'LG DualCool Standaard Plus'
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
      name: 'DualCool Premium',
      slug: 'dualcool-premium',
      description: 'Geavanceerde wandunit met superieure energiezuinigheid en uitgebreide functies voor optimaal comfort.',
      imageUrl: '/images/products/rac-eu-lg-premium.webp',
      images: [
        {
          url: '/images/products/rac-eu-lg-premium.webp',
          alt: 'LG DualCool Premium'
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
      name: 'ARTCOOL Mirror',
      slug: 'artcool-mirror',
      description: 'Stijlvolle wandunit met spiegelend glazen frontpaneel dat naadloos integreert in moderne interieurs.',
      imageUrl: '/images/products/lg-artcool-mirror.webp',
      images: [
        {
          url: '/images/products/lg-artcool-mirror.webp',
          alt: 'LG ARTCOOL Mirror'
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
      name: 'ARTCOOL Black',
      slug: 'artcool-black',
      description: 'Elegante wandunit in stijlvol zwart design, perfect voor moderne interieurs waar een statement piece gewenst is.',
      imageUrl: '/images/products/rac-eu-lg-artcool-black.webp',
      images: [
        {
          url: '/images/products/rac-eu-lg-artcool-black.webp',
          alt: 'LG ARTCOOL Black'
        }
      ],
      price: '€1.599,-',
      energyLabel: 'A++',
      capacity: '2,5 kW - 6,6 kW',
      features: [
        'Stijlvol zwart design',
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
    }
  ]
};
