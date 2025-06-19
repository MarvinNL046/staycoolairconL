import { Brand } from '../../types/products';

export const lgData: Brand = {
  name: 'LG',
  description: 'Vooruitstrevende technologie met focus op design, gebruiksgemak en luchtkwaliteit.',
  imageUrl: '/images/products/LG-dualcool-indoor-premium.webp',
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
          alt: 'LG DualCool Standaard Plus wandmodel airco wit 2.5-6.6kW - A++ ThinQ wifi besturing'
        }
      ],
      price: '€1.695,- inclusief standaard installatie',
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
        { label: 'Model reference', value: 'S3-W12JA2AA (3.5kW model)' },
        { label: 'Koelcapaciteit', value: '2,5 - 6,6 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 7,5 kW' },
        { label: 'SEER', value: '7,0' },
        { label: 'SCOP', value: '4,1' },
        { label: 'Geluidsniveau binnen', value: '21 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' },
        { label: 'Afmetingen binnendeel (3,5kW)', value: '837 x 308 x 189mm (BxHxD)' },
        { label: 'Gewicht binnenunit (3,5kW)', value: '8,7 kg' },
        { label: 'Afmetingen buitendeel (3,5kW)', value: '717 x 495 x 230mm (BxHxD)' },
        { label: 'Gewicht buitenunit (3,5kW)', value: '25,1 kg' },
        { label: 'Afmetingen binnendeel (5kW & 7kW)', value: '998 x 345 x 210mm (BxHxD)' },
        { label: 'Afmetingen buitendeel (5kW & 7kW)', value: '770 x 545 x 288mm (BxHxD)' }
      ]
    },
    {
      name: 'DualCool Premium',
      slug: 'dualcool-premium',
      description: 'Geavanceerde wandunit met superieure energiezuinigheid en uitgebreide functies voor optimaal comfort. Voorzien van AI air mode, allergiefilter en fluisterstille werking vanaf 19 dB. Bedien de unit eenvoudig via wifi of spraakbesturing met Google Assistant of Alexa.',
      imageUrl: '/images/products/rac-eu-lg-premium.webp',
      images: [
        {
          url: '/images/products/rac-eu-lg-premium.webp',
          alt: 'LG DualCool Premium wandmodel airco wit 2.5-6.6kW - A++ UVnano AI technologie spraakbesturing'
        }
      ],
      price: '€2.060,- inclusief standaard installatie',
      energyLabel: 'A++',
      capacity: '2,5 kW - 6,6 kW',
      features: [
        'AI air mode',
        'Window open detecting',
        'Allergie filter',
        'Comfort humidity control',
        'Voice-control (Google Assistant/Alexa)',
        'Slaapfunctie (19 dB)',
        'UVnano technologie',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'Ionizer',
        'Auto Clean',
        '4-weg luchtstroom',
        'Wifi-besturing op afstand'
      ],
      specifications: [
        { label: 'Model reference', value: 'PC12SK.NSK' },
        { label: 'Koelcapaciteit', value: '2,5 - 6,6 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 7,5 kW' },
        { label: 'SEER', value: '8,3' },
        { label: 'SCOP', value: '4,6' },
        { label: 'Geluidsniveau binnen (min)', value: '19 dB(A)' },
        { label: 'Geluidsniveau binnen (max)', value: '48 dB(A)' },
        { label: 'Geluidsniveau buiten', value: '52 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' },
        { label: 'Afmetingen binnendeel', value: '799 x 307 x 235mm (BxHxD)' },
        { label: 'Afmetingen buitendeel', value: '717 x 495 x 230mm (BxHxD)' },
        { label: 'Gewicht binnenunit', value: '10 kg' },
        { label: 'Gewicht buitenunit', value: '25 kg' },
        { label: 'Min. leidinglengte', value: '3 m' },
        { label: 'Max. leidinglengte', value: '20 m' },
        { label: 'Max. hoogteverschil', value: '10 m' },
        { label: 'Werktemperatuur koelen', value: '-10°C ~ +48°C' },
        { label: 'Werktemperatuur verwarmen', value: '-15°C ~ +24°C' },
        { label: 'Luchtstroom binnen', value: '270 - 900 m³/h' },
        { label: 'Garantie', value: '5 jaar' }
      ]
    },
    {
      name: 'ARTCOOL Mirror',
      slug: 'artcool-mirror',
      description: 'Stijlvolle wandunit met spiegelend glazen frontpaneel dat naadloos integreert in moderne interieurs. Voorzien van Dual Inverter technologie voor snelle en efficiënte koeling en verwarming. Bedien de unit eenvoudig via wifi of spraakbesturing met Google Assistant of Alexa.',
      imageUrl: '/images/products/lg-artcool-mirror.webp',
      images: [
        {
          url: '/images/products/lg-artcool-mirror.webp',
          alt: 'LG ARTCOOL Mirror wandmodel airco spiegelglas design 2.5-6.6kW - premium glasfront UVnano'
        }
      ],
      price: '€2.289,- inclusief standaard installatie',
      energyLabel: 'A++',
      capacity: '2,5 kW - 6,6 kW',
      features: [
        'Spiegelend glazen frontpaneel',
        'Extra stil (20 dB(A))',
        'Snel koelen en verwarmen',
        'Luchtreiniging met ionisatie',
        'Slimme diagnoses',
        'Wifi-besturing op afstand',
        'Compatibel met Google Assistant en Amazon Alexa',
        'Automatische reiniging',
        'UVnano technologie',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'Ionizer',
        'Auto Clean'
      ],
      specifications: [
        { label: 'Koelcapaciteit (2,5kW)', value: '0,89 - 3,7 kW' },
        { label: 'Koelcapaciteit (3,5kW)', value: '0,89 - 4,04 kW' },
        { label: 'Verwarmingscapaciteit (2,5kW)', value: '0,89 - 4,1 kW' },
        { label: 'Verwarmingscapaciteit (3,5kW)', value: '0,89 - 4,7 kW' },
        { label: 'SEER (2,5kW)', value: '7,2' },
        { label: 'SEER (3,5kW)', value: '6,9' },
        { label: 'SCOP', value: '4,3' },
        { label: 'Geluidsniveau binnen (min)', value: '20 dB(A)' },
        { label: 'Geluidsniveau binnen (max)', value: '42 dB(A)' },
        { label: 'Geluidsniveau buiten', value: '50 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' },
        { label: 'Afmetingen binnendeel', value: '652 x 652 x 158mm (BxHxD)' },
        { label: 'Afmetingen buitendeel (2,5kW)', value: '770 x 545 x 288mm (BxHxD)' },
        { label: 'Afmetingen buitendeel (3,5kW)', value: '770 x 545 x 288mm (BxHxD)' },
        { label: 'Gewicht binnenunit', value: '20 kg' },
        { label: 'Gewicht buitenunit', value: '33,4 kg' },
        { label: 'Min. leidinglengte', value: '3 m' },
        { label: 'Max. leidinglengte', value: '20 m' },
        { label: 'Max. hoogteverschil', value: '10 m' },
        { label: 'Garantie', value: '5 jaar' }
      ]
    },
    {
      name: 'ARTCOOL Black',
      slug: 'artcool-black',
      description: 'Elegante wandunit in stijlvol zwart design, perfect voor moderne interieurs waar een statement piece gewenst is. Premium afwerking met geavanceerde technologie voor optimale prestaties en stijl.',
      imageUrl: '/images/products/rac-eu-lg-artcool-black.webp',
      images: [
        {
          url: '/images/products/rac-eu-lg-artcool-black.webp',
          alt: 'LG ARTCOOL Black wandmodel airco mat zwart design 2.5-6.6kW - premium afwerking UVnano'
        }
      ],
      price: '€2.530,- inclusief standaard installatie',
      energyLabel: 'A++',
      capacity: '2,5 kW - 6,6 kW',
      features: [
        'Premium mat zwart design',
        'Verborgen LED display',
        'UVnano technologie voor schone lucht',
        'Dual Inverter Compressor',
        'ThinQ Smart Diagnosis',
        'Active Energy Control',
        'PM 1.0 sensor en filter',
        'Ionizer voor luchtzuivering',
        'Auto Clean functie',
        'Wifi-besturing via ThinQ app',
        'Compatibel met Google Assistant en Amazon Alexa',
        'Fluisterstille werking',
        '3D luchtstroom voor optimale verdeling'
      ],
      specifications: [
        { label: 'Beschikbare modellen', value: '2,5kW (09SK), 3,5kW (12SK), 5,0kW (18SK), 6,6kW (24SK)' },
        { label: 'Koelcapaciteit', value: '2,5 - 6,6 kW' },
        { label: 'Verwarmingscapaciteit', value: '3,2 - 7,5 kW' },
        { label: 'SEER', value: '7,6' },
        { label: 'SCOP', value: '4,3' },
        { label: 'Geluidsniveau binnen (min)', value: '21 dB(A)' },
        { label: 'Geluidsniveau binnen (max)', value: '45 dB(A)' },
        { label: 'Geluidsniveau buiten', value: '50 dB(A)' },
        { label: 'Koudemiddel', value: 'R-32' },
        { label: 'Afmetingen binnendeel', value: '950 x 335 x 185mm (BxHxD)' },
        { label: 'Afmetingen buitendeel (2,5-3,5kW)', value: '717 x 495 x 230mm (BxHxD)' },
        { label: 'Afmetingen buitendeel (5,0-6,6kW)', value: '770 x 545 x 288mm (BxHxD)' },
        { label: 'Gewicht binnenunit', value: '12-14 kg (afhankelijk van model)' },
        { label: 'Werktemperatuur koelen', value: '-10°C ~ +48°C' },
        { label: 'Werktemperatuur verwarmen', value: '-15°C ~ +24°C' },
        { label: 'Luchtstroom binnen', value: '240 - 960 m³/h' },
        { label: 'Max. leidinglengte', value: '20 m' },
        { label: 'Max. hoogteverschil', value: '10 m' },
        { label: 'Garantie', value: '5 jaar op unit, 10 jaar op compressor' }
      ]
    }
  ]
};
