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
      name: 'Sensira FTXF-A/B',
      slug: 'sensira-ftxf',
      description: 'De Daikin Sensira biedt betrouwbare klimaatbeheersing voor een aantrekkelijke prijs. Deze wandunit combineert een modern design met efficiënte technologie.',
      imageUrl: '/images/products/daikin/sensira/main.jpg',
      images: [
        {
          url: '/images/products/daikin/sensira/front.jpg',
          alt: 'Daikin Sensira - Vooraanzicht'
        },
        {
          url: '/images/products/daikin/sensira/side.jpg',
          alt: 'Daikin Sensira - Zijaanzicht'
        },
        {
          url: '/images/products/daikin/sensira/installed.jpg',
          alt: 'Daikin Sensira - Geïnstalleerd'
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
      name: 'Comfora FTXP-M9',
      slug: 'comfora-ftxp-m9',
      description: 'De Daikin Comfora biedt een efficiënte en comfortabele klimaatoplossing met standaard ingebouwde wifi-besturing. Perfect voor wie op zoek is naar een betrouwbare allrounder.',
      imageUrl: '/images/products/daikin/comfora/main.jpg',
      images: [
        {
          url: '/images/products/daikin/comfora/front.jpg',
          alt: 'Daikin Comfora - Vooraanzicht'
        },
        {
          url: '/images/products/daikin/comfora/side.jpg',
          alt: 'Daikin Comfora - Zijaanzicht'
        },
        {
          url: '/images/products/daikin/comfora/installed.jpg',
          alt: 'Daikin Comfora - Geïnstalleerd'
        }
      ],
      price: '€1.199,-',
      energyLabel: 'A++',
      capacity: '2,0 kW - 7,1 kW',
      features: [
        'Standaard ingebouwde WLAN-adapter',
        'Fluisterstille werking vanaf 20 dBA',
        'Zilverfilter voor allergeenbestrijding',
        '3D-luchtstroom voor optimale verdeling',
        'Ontvochtigingsfunctie',
        'Energiebesparende standby-modus',
        'Weekklok'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,0 - 7,1 kW' },
        { label: 'Verwarmingscapaciteit', value: '2,5 - 8,2 kW' },
        { label: 'SEER', value: '6,62' },
        { label: 'SCOP', value: '4,64' },
        { label: 'Geluidsniveau binnen', value: '20 dB(A)' },
        { label: 'Afmetingen (HxBxD)', value: '286 x 770 x 225 mm' },
        { label: 'Gewicht', value: '9 kg' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Perfera FTXM-R',
      slug: 'perfera-ftxm-r',
      description: 'De Daikin Perfera is een hoogwaardige wandunit die zorgt voor optimaal comfort in uw woning. Met geavanceerde technologieën zoals de Flash Streamer en 3D luchtstroom biedt deze unit een perfecte balans tussen prestaties en comfort.',
      imageUrl: '/images/products/daikin/perfera/main.jpg',
      images: [
        {
          url: '/images/products/daikin/perfera/front.jpg',
          alt: 'Daikin Perfera - Vooraanzicht'
        },
        {
          url: '/images/products/daikin/perfera/side.jpg',
          alt: 'Daikin Perfera - Zijaanzicht'
        },
        {
          url: '/images/products/daikin/perfera/installed.jpg',
          alt: 'Daikin Perfera - Geïnstalleerd'
        }
      ],
      price: '€1.299,-',
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
      imageUrl: '/images/products/daikin/stylish/main.jpg',
      images: [
        {
          url: '/images/products/daikin/stylish/front.jpg',
          alt: 'Daikin Stylish - Vooraanzicht'
        },
        {
          url: '/images/products/daikin/stylish/side.jpg',
          alt: 'Daikin Stylish - Zijaanzicht'
        },
        {
          url: '/images/products/daikin/stylish/installed.jpg',
          alt: 'Daikin Stylish - Geïnstalleerd'
        }
      ],
      price: '€1.499,-',
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
      name: 'Emura FTXJ-AW/BS/BB',
      slug: 'emura',
      description: 'De Daikin Emura is een premium wandmodel dat bekroond design combineert met geavanceerde technologie voor optimaal comfort.',
      imageUrl: '/images/products/daikin/emura/main.jpg',
      images: [
        {
          url: '/images/products/daikin/emura/front.jpg',
          alt: 'Daikin Emura - Vooraanzicht'
        },
        {
          url: '/images/products/daikin/emura/side.jpg',
          alt: 'Daikin Emura - Zijaanzicht'
        },
        {
          url: '/images/products/daikin/emura/installed.jpg',
          alt: 'Daikin Emura - Geïnstalleerd'
        }
      ],
      price: '€1.699,-',
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
    },
    {
      name: 'Ururu Sarara FTXZ-N',
      slug: 'ururu-sarara',
      description: 'De Daikin Ururu Sarara is de meest geavanceerde residentiële airconditioner met unieke bevochtigings- en ontvochtigingsfuncties voor het ultieme comfort.',
      imageUrl: '/images/products/daikin/ururu-sarara/main.jpg',
      images: [
        {
          url: '/images/products/daikin/ururu-sarara/front.jpg',
          alt: 'Daikin Ururu Sarara - Vooraanzicht'
        },
        {
          url: '/images/products/daikin/ururu-sarara/side.jpg',
          alt: 'Daikin Ururu Sarara - Zijaanzicht'
        },
        {
          url: '/images/products/daikin/ururu-sarara/installed.jpg',
          alt: 'Daikin Ururu Sarara - Geïnstalleerd'
        }
      ],
      price: '€2.499,-',
      energyLabel: 'A+++',
      capacity: '2,5 kW - 5,0 kW',
      features: [
        'Ururu bevochtiging',
        'Sarara ontvochtiging',
        'Ventilatie met verse lucht',
        'Flash Streamer luchtzuivering',
        '3-zone bewegingssensor',
        'Auto-reiniging',
        'Ingebouwde wifi-adapter'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,6 - 6,3 kW' },
        { label: 'SEER', value: 'tot 9.54' },
        { label: 'SCOP', value: 'tot 5.90' },
        { label: 'Geluidsniveau binnen', value: '19 dB(A)' },
        { label: 'Bevochtigingscapaciteit', value: 'tot 500 ml/h' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    },
    {
      name: 'Console FVXM-F',
      slug: 'console',
      description: 'De Daikin Console unit is een veelzijdig vloermodel dat zowel op als vlak boven de grond geplaatst kan worden. Perfect voor onder een raam of op zolder.',
      imageUrl: '/images/products/daikin/console/main.jpg',
      images: [
        {
          url: '/images/products/daikin/console/front.jpg',
          alt: 'Daikin Console - Vooraanzicht'
        },
        {
          url: '/images/products/daikin/console/side.jpg',
          alt: 'Daikin Console - Zijaanzicht'
        },
        {
          url: '/images/products/daikin/console/installed.jpg',
          alt: 'Daikin Console - Geïnstalleerd'
        }
      ],
      price: '€1.399,-',
      energyLabel: 'A++',
      capacity: '2,5 kW - 5,0 kW',
      features: [
        'Flexibele plaatsing',
        'Dubbele luchtstroom voor betere warmteverdeling',
        'Fluisterstille werking vanaf 23 dBA',
        'Ingebouwde wifi-adapter (optioneel)',
        'Heat boost functie voor snelle opwarming',
        'Weekklok',
        'Auto-reiniging'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,5 - 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,4 - 5,8 kW' },
        { label: 'SEER', value: 'tot 7.20' },
        { label: 'SCOP', value: 'tot 4.56' },
        { label: 'Geluidsniveau binnen', value: '23 dB(A)' },
        { label: 'Afmetingen (HxBxD)', value: '600 x 750 x 238 mm' },
        { label: 'Gewicht', value: '15 kg' },
        { label: 'Koudemiddel', value: 'R-32' }
      ]
    }
  ]
};