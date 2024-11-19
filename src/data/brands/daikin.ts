import { Brand } from '../../types/products';

export const daikinData: Brand = {
  name: 'Daikin',
  description: 'Japanse kwaliteit en innovatie, bekend om hun betrouwbaarheid en energiezuinigheid.',
  imageUrl: '/images/products/daikin/brand.jpg',
  features: [
    'Zeer energiezuinig (tot A+++)',
    'Fluisterstille werking vanaf 19dB',
    'Smart Home integratie',
    'Flash Streamer luchtzuivering'
  ],
  models: [
    {
      name: 'Ururu Sarara',
      slug: 'ururu-sarara',
      description: 'De Daikin Ururu Sarara is het meest geavanceerde model met unieke bevochtigings- en ontvochtigingsfuncties. Dit topmodel biedt optimale klimaatbeheersing met de hoogste energiezuinigheid.',
      imageUrl: '/images/products/Ururu-Sarara-left.webp',
      images: [
        {
          url: '/images/products/Ururu-Sarara-left.webp',
          alt: 'Daikin Ururu Sarara - Links'
        },
        {
          url: '/images/products/Ururu-Sarara-right.webp',
          alt: 'Daikin Ururu Sarara - Rechts'
        }
      ],
      price: '€4.500,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 5,0 kW',
      features: [
        'Unieke bevochtigingsfunctie (Ururu)',
        'Ontvochtigingsfunctie zonder temperatuurdaling (Sarara)',
        'Flash Streamer technologie voor superieure luchtzuivering',
        'Zelfreinigend filter',
        'Ingebouwde wifi-adapter voor smartphone bediening',
        'Fluisterstille werking vanaf 19 dBA',
        '3D luchtstroom voor optimale verdeling'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,6 - 6,3 kW' },
        { label: 'SEER', value: 'tot 9.54' },
        { label: 'SCOP', value: 'tot 5.90' },
        { label: 'Geluidsniveau binnen', value: '19-38 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Sensira FTXF-A/B',
      slug: 'sensira-ftxf',
      description: 'De Daikin Sensira biedt betrouwbare klimaatbeheersing voor een aantrekkelijke prijs. Deze wandunit combineert een modern design met efficiënte technologie.',
      imageUrl: '/images/products/daikin-sensira-wit.webp',
      images: [
        {
          url: '/images/products/daikin-sensira-wit.webp',
          alt: 'Daikin Sensira - Wit'
        }
      ],
      price: '€1.599,-',
      energyLabel: 'A++',
      capacity: '2,0 kW - 7,1 kW',
      features: [
        'Energielabel tot A++ voor koelen en A+ voor verwarmen',
        'Fluisterstille werking vanaf 20 dBA',
        'Econo-modus voor verminderd energieverbruik',
        'Comfortmodus om koude tocht te minimaliseren',
        'Automatisch schakelen tussen koelen en verwarmen',
        'Verticale auto-swing voor gelijkmatige luchtverdeling',
        '24-uurs timer'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,0 - 7,1 kW' },
        { label: 'Verwarmingscapaciteit', value: '2,5 - 8,2 kW' },
        { label: 'SEER', value: '6,21 - 6,87' },
        { label: 'SCOP', value: '4,06 - 4,28' },
        { label: 'Geluidsniveau binnen', value: '20-43 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Comfora FTXP-M',
      slug: 'comfora',
      description: 'De Daikin Comfora biedt een perfecte balans tussen comfort en efficiëntie. Met zijn stijlvolle design en geavanceerde functies zorgt deze wandunit voor een aangenaam binnenklimaat het hele jaar door.',
      imageUrl: '/images/products/daikin-comfora-left.webp',
      images: [
        {
          url: '/images/products/daikin-comfora-left.webp',
          alt: 'Daikin Comfora - Links'
        },
        {
          url: '/images/products/daikin-comfora-right.webp',
          alt: 'Daikin Comfora - Rechts'
        },
        {
          url: '/images/products/daikin comfora-onectaApp.webp',
          alt: 'Daikin Comfora - Onecta App'
        }
      ],
      price: '€2.155,-',
      energyLabel: 'A++',
      capacity: '2,0 kW - 7,1 kW',
      features: [
        'Onecta App voor smartphone bediening',
        'Fluisterstille werking vanaf 20 dBA',
        'Flash Streamer technologie voor luchtzuivering',
        '3D luchtstroom voor optimale verdeling',
        'Intelligente thermische sensor',
        'Weekklok programmering',
        'Energiebesparende stand'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,0 - 7,1 kW' },
        { label: 'Verwarmingscapaciteit', value: '2,5 - 8,2 kW' },
        { label: 'SEER', value: 'tot 7.1' },
        { label: 'SCOP', value: 'tot 4.6' },
        { label: 'Geluidsniveau binnen', value: '20-43 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Perfera FTXM-R',
      slug: 'perfera-ftxm-r',
      description: 'De Daikin Perfera is een hoogwaardige wandunit die zorgt voor optimaal comfort in uw woning. Met geavanceerde technologieën zoals de Flash Streamer en 3D luchtstroom biedt deze unit een perfecte balans tussen prestaties en comfort.',
      imageUrl: '/images/products/daikin-perfera-wit.webp',
      images: [
        {
          url: '/images/products/daikin-perfera-wit.webp',
          alt: 'Daikin Perfera - Wit'
        }
      ],
      price: '€2.420,-',
      energyLabel: 'A+++',
      capacity: '3,5 kW',
      features: [
        'Fluisterstil vanaf 19 dB(A)',
        '3D luchtstroming',
        'Flash Streamer technologie',
        'Wifi-besturing (optioneel)',
        'Verwarmingscapaciteit tot -20°C'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '3,5 kW' },
        { label: 'Verwarmingscapaciteit', value: '4,2 kW' },
        { label: 'SEER', value: '8,65' },
        { label: 'SCOP', value: '5,10' },
        { label: 'Geluidsniveau binnen', value: '19 dB(A)' },
        { label: 'Afmetingen (HxBxD)', value: '295 x 778 x 272 mm' },
        { label: 'Gewicht', value: '10 kg' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Stylish FTXA-AW/BS/BB/BT',
      slug: 'stylish',
      description: 'De Daikin Stylish combineert een uniek design met innovatieve technologie. Het Coanda-effect zorgt voor een optimale verdeling van verwarmde en gekoelde lucht.',
      imageUrl: '/images/products/daikin-stylish-wit.webp',
      images: [
        {
          url: '/images/products/daikin-stylish-wit.webp',
          alt: 'Daikin Stylish - Wit'
        },
        {
          url: '/images/products/daikin-stylish-silver.webp',
          alt: 'Daikin Stylish - Zilver'
        },
        {
          url: '/images/products/daikin-stylish-zwart.webp',
          alt: 'Daikin Stylish - Zwart'
        }
      ],
      price: '€2.710,-',
      energyLabel: 'A+++',
      capacity: '2,0 kW - 5,0 kW',
      features: [
        'Coanda-effect voor optimale luchtverdeling',
        'Verkrijgbaar in vier kleuren',
        'Flash Streamer technologie',
        'Intelligente thermische sensor',
        'Ingebouwde wifi-adapter',
        'Fluisterstille werking vanaf 19 dBA',
        '3D luchtstroom'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,0 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '2,5 - 5,8 kW' },
        { label: 'SEER', value: 'tot 8.74' },
        { label: 'SCOP', value: 'tot 5.15' },
        { label: 'Geluidsniveau binnen', value: '19 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Perfera Vloermodel FVXM-A',
      slug: 'perfera-vloermodel',
      description: 'Het Daikin Perfera vloermodel biedt optimaal comfort vanaf grondniveau. Deze stijlvolle vloerunit combineert krachtige prestaties met energiezuinige technologie voor een aangename temperatuur in elke ruimte.',
      imageUrl: '/images/products/Perfera-vloermodel-left.webp',
      images: [
        {
          url: '/images/products/Perfera-vloermodel-left.webp',
          alt: 'Daikin Perfera Vloermodel - Links'
        },
        {
          url: '/images/products/Perfera vloermodel-right.webp',
          alt: 'Daikin Perfera Vloermodel - Rechts'
        }
      ],
      price: '€2.725,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 5,0 kW',
      features: [
        'Dubbele luchtuitblaas voor betere luchtverdeling',
        'Fluisterstille werking vanaf 20 dBA',
        'Flash Streamer technologie voor luchtzuivering',
        'Heat Boost voor snelle opwarming',
        'Ingebouwde wifi-adapter voor smartphone bediening',
        'Weekklok programmering',
        'Geschikt voor vloermontage of halfhoge wandmontage'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 5,7 kW' },
        { label: 'SEER', value: 'tot 8.55' },
        { label: 'SCOP', value: 'tot 4.70' },
        { label: 'Geluidsniveau binnen', value: '20-39 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Emura FTXJ-AW/BS/BB',
      slug: 'emura',
      description: 'De Daikin Emura is een premium wandmodel dat bekroond design combineert met geavanceerde technologie voor optimaal comfort.',
      imageUrl: '/images/products/daikin-emura-wit.webp',
      images: [
        {
          url: '/images/products/daikin-emura-wit.webp',
          alt: 'Daikin Emura - Wit'
        },
        {
          url: '/images/products/daikin-emura-zilver.webp',
          alt: 'Daikin Emura - Zilver'
        },
        {
          url: '/images/products/daikin-emura-zwart.webp',
          alt: 'Daikin Emura - Zwart'
        }
      ],
      price: '€2.850,-',
      energyLabel: 'A+++',
      capacity: '2,0 kW - 5,0 kW',
      features: [
        'Bekroond design',
        '2-zone bewegingssensor',
        '3D luchtstroom',
        'Flash Streamer technologie',
        'Ingebouwde wifi-adapter',
        'Weekklok',
        'Verkrijgbaar in drie kleuren'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,0 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '2,5 - 5,8 kW' },
        { label: 'SEER', value: 'tot 8.73' },
        { label: 'SCOP', value: 'tot 5.12' },
        { label: 'Geluidsniveau binnen', value: '19 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    }
  ]
};
