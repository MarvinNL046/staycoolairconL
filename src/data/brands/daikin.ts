import { Brand } from '../../types/products';

export const daikinData: Brand = {
  name: 'Daikin',
  description: 'Japanse kwaliteit en innovatie, bekend om hun betrouwbaarheid en energiezuinigheid.',
  imageUrl: '/images/products/daikin-stylish-wit.webp',
  features: [
    'Zeer energiezuinig (tot A+++)',
    'Fluisterstille werking vanaf 19dB',
    'Smart Home integratie',
    'Flash Streamer luchtzuivering'
  ],
  models: [
    {
      name: 'Ururu Sarara FTXZ + RXZ',
      slug: 'ururu-sarara',
      description: 'De Daikin Ururu Sarara is het enige klimaatregelingssysteem op de markt dat verwarming, koeling, bevochtiging, ontvochtiging en ventilatie combineert met innovatieve, geavanceerde technologie. Dit topmodel biedt totale klimaatbeheersing met de hoogste energiezuinigheid.',
      imageUrl: '/images/products/Ururu-Sarara-left.webp',
      images: [
        {
          url: '/images/products/Ururu-Sarara-left.webp',
          alt: 'Daikin Ururu Sarara wandmodel airco 5.0kW wit - premium klimaatbeheersing met bevochtiging'
        },
        {
          url: '/images/products/Ururu-Sarara-right.webp',
          alt: 'Daikin Ururu Sarara wandmodel airco zijaanzicht - A+++ energielabel 5-in-1 functionaliteit'
        }
      ],
      price: '€4.500,- inclusief standaard installatie',
      energyLabel: 'A+++',
      capacity: '5,0 kW koelen / 6,3 kW verwarmen',
      features: [
        'Uitmuntende technologie: 5 functies gecombineerd in 1 systeem',
        'Totale klimaatbeheersing: verwarming, koeling, bevochtiging, ontvochtiging en luchtverversing',
        'Unieke bevochtigingsfunctie (Ururu) en ontvochtigingsfunctie zonder temperatuurdaling (Sarara)',
        'Flash Streamer technologie voor superieure luchtzuivering',
        'Tijdbesparend, zelfreinigend filter',
        'Bewegingssensor voor energiebesparing',
        'Volledige bediening via smartphone, waar je ook bent',
        'Fluisterstille werking vanaf slechts 19 dB(A)',
        'Seizoensrendementswaarden: volledig bereik A+++ in koeling en verwarming'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: 'tot 5,0 kW' },
        { label: 'Verwarmingscapaciteit', value: 'tot 6,3 kW' },
        { label: 'SEER', value: 'tot 9.54' },
        { label: 'SCOP', value: 'tot 5.90' },
        { label: 'Geluidsniveau binnen', value: 'vanaf 19 dB(A)' },
        { label: 'Energielabel koelen', value: 'A+++ (A+++ tot G)' },
        { label: 'Energielabel verwarmen', value: 'A+++ (A+++ tot G)' },
        { label: 'Afmetingen binnendeel (hxbxd)', value: '295x798x372 mm' },
        { label: 'Koudemiddel', value: 'R-32' },
        { label: 'Aantal binnendelen per buitendeel', value: '1' }
      ]
    },
    {
      name: 'Sensira FTXF-A/B',
      slug: 'sensira-ftxf',
      description: 'De Daikin Sensira biedt betrouwbare klimaatbeheersing voor een aantrekkelijke prijs. Deze wandunit combineert een modern design met efficiënte technologie en is in verschillende capaciteiten beschikbaar voor elke ruimte.',
      imageUrl: '/images/products/daikin-sensira-wit.webp',
      images: [
        {
          url: '/images/products/daikin-sensira-wit.webp',
          alt: 'Daikin Sensira - Wit'
        }
      ],
      price: 'Vanaf €1.599,- inclusief standaard installatie',
      energyLabel: 'A++',
      capacity: '2,0 kW - 7,1 kW',
      features: [
        'Energielabel tot A++ voor koelen en A+ voor verwarmen',
        'Fluisterstille werking vanaf 21 dBA',
        'Econo-modus voor verminderd energieverbruik',
        'Comfortmodus om koude tocht te minimaliseren',
        'Automatisch schakelen tussen koelen en verwarmen',
        'Verticale auto-swing voor gelijkmatige luchtverdeling',
        'Infrarood afstandsbediening inbegrepen',
        'Uitwasbaar luchtfilter voor optimale luchtkwaliteit',
        'Compact en stijlvol ontwerp'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,0 - 7,1 kW' },
        { label: 'Verwarmingscapaciteit', value: '2,5 - 8,2 kW' },
        { label: 'SEER', value: '6,4 - 6,9' },
        { label: 'SCOP', value: '4,1 - 4,4' },
        { label: 'Geluidsniveau binnen', value: '21 - 63 dB(A), afhankelijk van capaciteit' },
        { label: 'Geluidsniveau buiten', value: '45 - 69 dB(A), afhankelijk van capaciteit' },
        { label: 'Koudemiddel', value: 'R-32 (GWP: 675.0)' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '288 x 770 x 234 mm (kleinere modellen) / 297 x 990 x 273 mm (grotere modellen)' },
        { label: 'Gewicht binnenunit', value: '9,0 - 12,0 kg, afhankelijk van model' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: 'Variërend van 550 x 658 x 273 mm tot 695 x 930 x 350 mm' },
        { label: 'Werkingsbereik koeling', value: '-10°C tot +46°C buitentemperatuur' },
        { label: 'Werkingsbereik verwarming', value: '-15°C tot +18°C buitentemperatuur' },
        { label: 'Stroomvoorziening', value: '1~/50/220-240V' },
        { label: 'Energieverbruik koeling', value: '106 - 460 kWh/a' },
        { label: 'Energieverbruik verwarming', value: '595 - 2.332 kWh/a' },
        { label: 'Prijzen (incl. montage)', value: 'Vanaf €1.599,- (2,0kW), 5,0kW: €2.495,-, 6,0kW: €2.895,-' }
      ]
    },
    {
      name: 'Comfora FTXP',
      slug: 'comfora',
      description: 'De Daikin Comfora biedt een perfecte balans tussen comfort en efficiëntie. Met zijn stijlvolle design en geavanceerde functies zorgt deze wandunit voor een aangenaam binnenklimaat het hele jaar door, met optimale prestaties in elk seizoen.',
      imageUrl: '/images/products/daikin-comfora-left.webp',
      images: [
        {
          url: '/images/products/daikin-comfora-left.webp',
          alt: 'Daikin Comfora FTXP wandmodel airco wit 2.0-7.1kW - A++ energielabel fluisterstil'
        },
        {
          url: '/images/products/daikin-comfora-right.webp',
          alt: 'Daikin Comfora wandunit zijaanzicht - smart home integratie met Onecta app'
        },
        {
          url: '/images/products/daikin comfora-onectaApp.webp',
          alt: 'Daikin Comfora Onecta smartphone app interface - remote airco bediening en planning'
        }
      ],
      price: 'Vanaf €2.155,- inclusief standaard installatie',
      energyLabel: 'A++',
      capacity: '2,0 kW - 7,1 kW',
      features: [
        'Onecta App voor smartphone bediening (BRC073A1)',
        'Fluisterstille werking vanaf 19 dBA',
        'Verwijderbaar en wasbaar luchtfilter voor optimale luchtkwaliteit',
        'Infrarood afstandsbediening inbegrepen',
        'Geoptimaliseerde luchtstroom voor maximaal comfort',
        'Weekklok programmering',
        'Energiebesparende Econo-mode',
        'Uitgebreid werkingsbereik in koeling (-10°C tot +48°C) en verwarming (-15°C tot +18°C)',
        'Stijlvol design dat in elk interieur past'
      ],
      specifications: [
        { label: 'Koelcapaciteit', value: '2,0 - 7,1 kW' },
        { label: 'Verwarmingscapaciteit', value: '2,5 - 8,2 kW' },
        { label: 'SEER', value: '6,62 - 7,30' },
        { label: 'SCOP', value: '4,01 - 4,65' },
        { label: 'Energielabel koeling', value: 'A++' },
        { label: 'Energielabel verwarming', value: 'A+' },
        { label: 'Geluidsniveau binnen (koeling)', value: '19 - 46 dB(A), afhankelijk van capaciteit' },
        { label: 'Geluidsniveau binnen (verwarming)', value: '21 - 46 dB(A), afhankelijk van capaciteit' },
        { label: 'Geluidsniveau buiten (koeling)', value: '46 - 52 dB(A), afhankelijk van capaciteit' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '286 x 770 x 225 mm (kleinere modellen) / 295 x 990 x 263 mm (grotere modellen)' },
        { label: 'Gewicht binnenunit', value: '8,5 - 13,5 kg, afhankelijk van model' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: 'Variërend van 550 x 740 x 343 mm tot 734 x 954 x 401 mm' },
        { label: 'Koudemiddel', value: 'R-32 (GWP: 675.0)' },
        { label: 'Werkingsbereik koeling', value: '-10°C tot +48°C buitentemperatuur' },
        { label: 'Werkingsbereik verwarming', value: '-15°C tot +18°C buitentemperatuur' },
        { label: 'Stroomvoorziening', value: '1~/50/220-240V' },
        { label: 'Maximale zekeringwaarde', value: '16-20A, afhankelijk van capaciteit' },
        { label: 'Jaarlijks energieverbruik koeling', value: '97 - 401 kWh/a' },
        { label: 'Jaarlijks energieverbruik verwarming', value: '663 - 2.166 kWh/a' },
        { label: 'Prijzen (incl. montage)', value: 'Vanaf €2.155,- (2,5kW), 5,0kW: €2.775,-, 7,1kW: €3.625,-' }
      ]
    },
    {
      name: 'Perfera FTXM-A + RXM-A',
      slug: 'perfera-ftxm-a',
      description: 'De Daikin Perfera FTXM-A is een hoogwaardige wandunit die zorgt voor optimaal comfort in uw woning. Met zijn uitstekende energiezuinigheid (tot A+++) en uitgebreide functionaliteiten biedt deze unit een perfecte balans tussen prestaties en comfort, beschikbaar in vijf verschillende capaciteiten.',
      imageUrl: '/images/products/daikin-perfera-wit.webp',
      images: [
        {
          url: '/images/products/daikin-perfera-wit.webp',
          alt: 'Daikin Perfera FTXM-A wandmodel airco wit 2.0-5.0kW - A+++ energielabel 3D luchtstroom'
        }
      ],
      price: 'Vanaf €2.420,- inclusief standaard installatie',
      energyLabel: 'A+++',
      capacity: '2,0 kW - 5,0 kW koelen / 2,5 kW - 6,0 kW verwarmen',
      features: [
        'Fluisterstille werking vanaf 19 dB(A)',
        '3D luchtstroming voor optimale luchtverdeling',
        'Heat boost functie - bereikt gewenste temperatuur 14% sneller',
        'Smart twin-flap design voor optimale luchtstroom',
        '2-area bewegingsdetectie sensor voor energiebesparing',
        'Daikin Onecta app voor volledige controle op afstand',
        'Compatibel met Google Assistant en Amazon Alexa',
        'Night operation mode voor comfortabel slapen',
        'Verwijderbaar en wasbaar luchtfilter',
        'Infrarood of bedrade afstandsbediening mogelijk',
        'Uitgebreid werkingsbereik: koelen -10°C tot +50°C, verwarmen -21°C tot +18°C',
        'Energiezuinige prestaties met SEER tot 9,47 en SCOP tot 5,20',
        'Geschikt voor verschillende ruimtes met capaciteiten van 2,0 kW tot 5,0 kW koeling'
      ],
      specifications: [
        { label: 'Beschikbare modellen', value: 'FTXM20A, FTXM25A, FTXM35A, FTXM42A, FTXM50A' },
        { label: 'SEER', value: 'tot 9,47' },
        { label: 'SCOP', value: 'tot 5,20' },
        { label: 'Geluidsniveau binnen', value: 'vanaf 19 dB(A) in silent mode' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '298 x 804 x 252 mm' },
        { label: 'Gewicht binnenunit', value: '11,5 kg' },
        { label: 'Note', value: '2024 model: capaciteiten 20-42 verhoogd met 20% koeling en 30% verwarming' },
        { label: 'Luchtfilter', value: 'Verwijderbaar / wasbaar' },
        { label: 'Luchtstroom koelen (Silent/Low/Medium/High)', value: 'Van 4,9/6,3/8,9/11,9 m³/min (FTXM20A) tot 9,9/12,7/16,7/22,4 m³/min (FTXM50A)' },
        { label: 'Luchtstroom verwarmen (Silent/Low/Medium/High)', value: 'Van 4,9/6,9/9,2/11,4 m³/min (FTXM20A) tot 6,9/8,6/11,5/14,5 m³/min (FTXM50A)' },
        { label: 'Geluidsniveau binnen koelen', value: 'Van 19/25/41 dB(A) (FTXM20A) tot 27/33/46 dB(A) (FTXM50A)' },
        { label: 'Geluidsniveau binnen verwarmen', value: 'Van 20/26/39 dB(A) (FTXM20A) tot 31/34/46 dB(A) (FTXM50A)' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: '550 x 658 x 273 mm (RXM20-35A), 734 x 954 x 401 mm (RXM50A)' },
        { label: 'Geluidsniveau buiten koelen', value: '46-48 dB(A)' },
        { label: 'Werkingsbereik koelen', value: '-10 tot +50°C' },
        { label: 'Werkingsbereik verwarmen', value: '-21 tot +18°C' },
        { label: 'Koudemiddel', value: 'R-32 (GWP 675)' },
        { label: 'Koelcapaciteit nominaal', value: '2,0 kW (20A), 2,5 kW (25A), 3,5 kW (35A), 4,2 kW (42A), 5,0 kW (50A)' },
        { label: 'Verwarmingscapaciteit nominaal', value: '2,5 kW (20A), 3,0 kW (25A), 4,0 kW (35A), 5,4 kW (42A), 5,8 kW (50A)' },
        { label: 'SEER', value: '9,47 (20A), 9,25 (25A), 9,25 (35A), 8,11 (42A), 7,80 (50A)' },
        { label: 'SCOP', value: '5,20 (20A), 5,20 (25A), 4,63 (35A), 4,20 (42A), 4,80 (50A)' },
        { label: 'Energielabel koelen', value: 'A+++ (20A-35A), A++ (42A-50A)' },
        { label: 'Energielabel verwarmen', value: 'A+++ (20A-25A), A+ (35A-50A)' },
        { label: 'Jaarlijks energieverbruik koelen', value: '74 kWh/a (20A), 92 kWh/a (25A), 132 kWh/a (35A), 181 kWh/a (42A), 224 kWh/a (50A)' },
        { label: 'Jaarlijks energieverbruik verwarmen', value: '619 kWh/a (20A), 647 kWh/a (25A), 673 kWh/a (35A), 1120 kWh/a (42A), 1312 kWh/a (50A)' },
        { label: 'Maximale leidinglengte', value: '20 m (20A-35A), 30 m (50A)' },
        { label: 'Stroomvoorziening', value: '1~/50/220-240V' }
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
          alt: 'Daikin Perfera FTXM-R wandmodel airco wit 3.5kW - A+++ energielabel Flash Streamer'
        }
      ],
      price: '€2.420,- inclusief standaard installatie',
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
      name: 'Stylish FTXA + RXA',
      slug: 'stylish',
      description: 'De Daikin Stylish combineert een uniek design met innovatieve technologie en superieure prestaties. De ultradunne wandunit (slechts 189 mm diep) is verkrijgbaar in verschillende uitvoeringen en past in elk modern interieur, terwijl het revolutionaire Coanda-effect zorgt voor een optimale verdeling van verwarmde en gekoelde lucht.',
      imageUrl: '/images/products/daikin-stylish-wit.webp',
      images: [
        {
          url: '/images/products/daikin-stylish-wit.webp',
          alt: 'Daikin Stylish FTXA wandmodel airco wit 1.3-5.3kW - ultradun design Coanda-effect'
        },
        {
          url: '/images/products/daikin-stylish-silver.webp',
          alt: 'Daikin Stylish wandmodel airco zilver uitvoering - A+++ energielabel 189mm dun'
        },
        {
          url: '/images/products/daikin-stylish-zwart.webp',
          alt: 'Daikin Stylish wandmodel airco zwart modern design - Flash Streamer luchtzuivering'
        }
      ],
      price: '€2.710,- inclusief standaard installatie',
      energyLabel: 'A+++',
      capacity: '1,3 kW - 5,3 kW koelen / 1,3 kW - 6,5 kW verwarmen',
      features: [
        'Coanda-effect voor optimale luchtverdeling zonder tocht',
        'Verkrijgbaar in vier elegante kleuren (wit, zilver, zwart, blackwood)',
        'Flash Streamer technologie voor superieure luchtzuivering',
        'Intelligente thermische sensor voor nauwkeurige temperatuurregeling',
        'Ultradun design - slechts 189 mm diep',
        'Fluisterstille werking vanaf 19 dBA',
        '3D luchtstroom voor maximaal comfort in elke hoek van de ruimte',
        'Bedieningsopties inclusief infrarood afstandsbediening (standaard) en bedrade afstandsbediening (BRC073)',
        'Uitstekende energiezuinigheid met SEER tot 8,75'
      ],
      specifications: [
        { label: 'Beschikbare modellen', value: 'FTXA20A/25A/35A/42A/50A (in verschillende kleuren: wit, zilver, zwart, blackwood)' },
        { label: 'Koelcapaciteit (Min./Nom./Max.)', value: '1,3/2,0/2,6 kW (20A), 1,3/2,5/3,2 kW (25A), 1,4/3,4/4,0 kW (35A), 1,7/4,2/5,0 kW (42A), 1,7/5,0/5,3 kW (50A)' },
        { label: 'Verwarmingscapaciteit (Min./Nom./Max.)', value: '1,30/2,50/3,50 kW (20A), 1,30/2,80/4,70 kW (25A), 1,40/4,00/5,20 kW (35A), 1,70/5,40/6,00 kW (42A), 1,70/5,80/6,50 kW (50A)' },
        { label: 'Opgenomen vermogen koelen (Min./Nom./Max.)', value: '0,27/0,43/0,63 kW (20A), 0,27/0,56/0,78 kW (25A), 0,31/0,78/1,04 kW (35A), -/1,05/- kW (42A), -/1,36/- kW (50A)' },
        { label: 'Opgenomen vermogen verwarmen (Min./Nom./Max.)', value: '0,25/0,50/0,91 kW (20A), 0,25/0,56/1,22 kW (25A), 0,26/0,99/1,67 kW (35A), 0,46/1,31/- kW (42A), 0,49/1,45/- kW (50A)' },
        { label: 'SEER', value: '8,75 (20A), 8,74 (25A), 8,73 (35A), 7,50 (42A), 7,33 (50A)' },
        { label: 'SCOP', value: '5,15 (20A/25A), 4,60 (42A)' },
        { label: 'Energielabel koelen', value: 'A+++ (20A t/m 35A), A++ (42A en 50A)' },
        { label: 'Energielabel verwarmen', value: 'A+++ (20A t/m 35A), A++ (42A en 50A)' },
        { label: 'Jaarlijks energieverbruik koelen', value: '80 kWh (20A), 101 kWh (25A), 137 kWh (35A), 196 kWh (42A), 239 kWh (50A)' },
        { label: 'Jaarlijks energieverbruik verwarmen', value: '653 kWh (20A), 666 kWh (25A), 680 kWh (35A), 1.150 kWh (42A), 1.217 kWh (50A)' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '295 x 798 x 189 mm' },
        { label: 'Gewicht binnenunit', value: '12 kg' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: '550 x 765 x 285 mm (20A t/m 35A), 734 x 870 x 373 mm (42A en 50A)' },
        { label: 'Gewicht buitenunit', value: '32 kg (20A t/m 35A), 50 kg (42A en 50A)' },
        { label: 'Luchtfilter', value: 'Verwijderbaar / afwasbaar' },
        { label: 'Luchtstroom koelen (Fluisterstil/Laag/Midden/Hoog)', value: '4,6/6,1/8,2/11,0 m³/min (20A), 4,6/6,1/8,7/11,0 m³/min (25A), 4,6/6,1/9,1/11,5 m³/min (35A), 4,6/6,1/9,1/11,9 m³/min (42A), 5,2/7,6/10,1/13,5 m³/min (50A)' },
        { label: 'Luchtstroom verwarmen (Fluisterstil/Laag/Midden/Hoog)', value: '4,5/6,4/8,7/10,9 m³/min (20A), 4,5/6,4/9,0/11,1 m³/min (25A), 4,5/6,4/9,0/11,5 m³/min (35A), 5,2/7,7/10,5/14,6 m³/min (42A), 5,7/8,2/11,1/15,1 m³/min (50A)' },
        { label: 'Geluidsvermogenniveau koelen', value: '57 dB(A) (20A t/m 35A), 60 dB(A) (42A en 50A)' },
        { label: 'Geluidsdrukniveau koelen (Fluisterstil/Laag/Hoog)', value: '19/25/39 dB(A) (20A), 19/25/40 dB(A) (25A), 19/25/41 dB(A) (35A), 21/29/45 dB(A) (42A), 24/31/46 dB(A) (50A)' },
        { label: 'Geluidsdrukniveau verwarmen (Fluisterstil/Laag/Hoog)', value: '19/25/39 dB(A) (20A), 19/25/40 dB(A) (25A), 19/25/41 dB(A) (35A), 21/29/45 dB(A) (42A), 24/33/46 dB(A) (50A)' },
        { label: 'Besturingssystemen', value: 'IR-afstandsbediening (standaard meegeleverd), Bedrade afstandsbediening BRC073 (optioneel)' },
        { label: 'Geluidsvermogenniveau buitenunit koelen', value: '59 dB(A) (20A), 61 dB(A) (35A), 62 dB(A) (50A)' },
        { label: 'Geluidsdrukniveau buitenunit koelen', value: '46 dB(A) (20A), 49 dB(A) (35A), 48 dB(A) (50A)' },
        { label: 'Geluidsdrukniveau buitenunit verwarmen', value: '47 dB(A) (20A), 49 dB(A) (35A), 48 dB(A) (50A)' },
        { label: 'Werkingsbereik koelen', value: '-10 tot +46°C' },
        { label: 'Werkingsbereik verwarmen', value: '-15 tot +18°C' },
        { label: 'Koudemiddel', value: 'R-32 (GWP: 675)' },
        { label: 'Koudemiddelvulling', value: '0,76/0,52 kg (20A-35A), 1,10/0,75 kg (42A-50A)' },
        { label: 'Leidingaansluitingen vloeistof', value: '6,35 mm (1/4")' },
        { label: 'Leidingaansluitingen gas', value: '9,5 mm (3/8") voor 20A-35A, 12,7 mm (1/2") voor 42A-50A' },
        { label: 'Maximale leidinglengte', value: '20 m (20A-35A), 30 m (42A-50A)' },
        { label: 'Maximaal hoogteverschil', value: '15 m (20A-35A), 20 m (42A-50A)' },
        { label: 'Bijkomende koelmiddelvulling', value: '0,02 kg/m (voor leidinglengte boven 10 m)' },
        { label: 'Stroomvoorziening', value: '1~/50/220-240V' },
        { label: 'Max. zekeringamp. (MFA)', value: '10A (20A-35A), 16A (42A-50A)' }
      ]
    },
    {
      name: 'Perfera Vloermodel FVXM-A',
      slug: 'perfera-vloermodel',
      description: 'Het Daikin Perfera vloermodel biedt optimaal comfort vanaf grondniveau. Deze stijlvolle vloerunit combineert krachtige prestaties met energiezuinige technologie voor een aangename temperatuur in elke ruimte, in drie capaciteitsklassen voor elke woning.',
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
      price: 'Vanaf €2.725,- inclusief standaard installatie',
      energyLabel: 'A++',
      capacity: '2,4 kW - 5,0 kW koelen / 3,4 kW - 5,8 kW verwarmen',
      features: [
        'Dubbele luchtuitblaas voor betere luchtverdeling',
        'Fluisterstille werking vanaf 19 dBA',
        'Flash Streamer technologie voor luchtzuivering',
        'Heat Boost voor snelle opwarming',
        'Verwijderbaar en wasbaar luchtfilter',
        'Flexibele installatie: plaatsing op de vloer of halfhoge wandmontage',
        'Compact design met slechts 600mm hoogte en 238mm diepte',
        'Ingebouwde wifi-adapter voor smartphone bediening',
        'Breed toepassingsbereik: werkt bij buitentemperaturen van -10°C tot +46°C (koelen) en -15°C tot +18°C (verwarmen)'
      ],
      specifications: [
        { label: 'Beschikbare modellen', value: 'FVXM25A+RXM25R, FVXM35A+RXM35R, FVXM50A+RXM50R' },
        { label: 'Koelcapaciteit (nom.)', value: '2,4 kW (FVXM25A), 3,4 kW (FVXM35A), 5,0 kW (FVXM50A)' },
        { label: 'Koelcapaciteit (max.)', value: '3,5 kW (FVXM25A), 4,0 kW (FVXM35A), 5,8 kW (FVXM50A)' },
        { label: 'Verwarmingscapaciteit (nom.)', value: '3,4 kW (FVXM25A), 4,5 kW (FVXM35A), 5,8 kW (FVXM50A)' },
        { label: 'Verwarmingscapaciteit (max.)', value: '4,7 kW (FVXM25A), 5,8 kW (FVXM35A), 8,1 kW (FVXM50A)' },
        { label: 'SEER', value: '8,55 (FVXM25A), 8,11 (FVXM35A), 7,30 (FVXM50A)' },
        { label: 'SCOP', value: '4,65 (FVXM25A), 4,63 (FVXM35A), 4,31 (FVXM50A)' },
        { label: 'Energielabel koelen', value: 'A+++ (FVXM25A/35A), A++ (FVXM50A)' },
        { label: 'Energielabel verwarmen', value: 'A++ (FVXM25A/35A/50A)' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '600 x 750 x 238 mm' },
        { label: 'Gewicht binnenunit', value: '17 kg' },
        { label: 'Geluidsniveau binnen koelen (min/nom/max)', value: '20/25/38 dB(A) (FVXM25A), 20/25/39 dB(A) (FVXM35A), 27/31/44 dB(A) (FVXM50A)' },
        { label: 'Geluidsniveau binnen verwarmen (min/nom/max)', value: '19/25/38 dB(A) (FVXM25A), 19/25/39 dB(A) (FVXM35A), 29/35/46 dB(A) (FVXM50A)' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: '550 x 765 x 285 mm (RXM25/35R), 734 x 870 x 373 mm (RXM50R)' },
        { label: 'Gewicht buitenunit', value: '32 kg (RXM25/35R), 50 kg (RXM50R)' },
        { label: 'Geluidsniveau buiten koelen', value: '46 dB(A) (RXM25R), 49 dB(A) (RXM35R), 48 dB(A) (RXM50R)' },
        { label: 'Koudemiddel', value: 'R-32 (GWP: 675)' },
        { label: 'Leidingaansluitingen vloeistof/gas', value: '6,4/9,5 mm (FVXM25/35A), 6,4/12,7 mm (FVXM50A)' },
        { label: 'Maximale leidinglengte', value: '20 m' },
        { label: 'Stroomvoorziening', value: '1~/50/220-240V' }
      ]
    },
    {
      name: 'Emura FTXJ + RXJ',
      slug: 'emura',
      description: 'De Daikin Emura is een premium wandmodel dat bekroond design combineert met geavanceerde technologie voor optimaal comfort. Met zijn elegante vormgeving en superieure energieprestaties zorgt deze unit voor een compromisloze combinatie van stijl en functionaliteit in vijf verschillende capaciteiten.',
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
      price: '€2.850,- inclusief standaard installatie',
      energyLabel: 'A+++',
      capacity: '1,3 kW - 5,3 kW koelen / 1,3 kW - 6,5 kW verwarmen',
      features: [
        'Bekroond design beschikbaar in wit, zilver en zwart',
        'Fluisterstille werking vanaf 19 dB(A)',
        'Uitstekende energieprestaties met SEER tot 8,75 en SCOP tot 5,15',
        'Uitgebreid werkingsbereik: koelen -10°C tot +50°C, verwarmen -20°C tot +18°C',
        'Flexibele luchtverplaatsing met fluisterstil/laag/midden/hoog ventilatorstanden',
        'Compact en stijlvol ontwerp met slanke lijn (305 mm hoogte, 900 mm breedte)',
        'Compatibel met single- en multi-splitcombinaties',
        'Bedieningsopties inclusief infrarood afstandsbediening',
        'Beschikbaar in vijf verschillende capaciteiten voor optimale ruimteafstemming'
      ],
      specifications: [
        { label: 'Beschikbare modellen', value: '20AW/S/B, 25AW/S/B, 35AW/S/B, 42AW/S/B, 50AW/S/B' },
        { label: 'Koelcapaciteit (Min./Nom./Max.)', value: '1,3/2,0/2,6 kW (20AW/S/B), 1,3/2,5/3,2 kW (25AW/S/B), 1,4/3,4/4,0 kW (35AW/S/B), 1,7/4,2/5,0 kW (42AW/S/B), 1,7/5,0/5,3 kW (50AW/S/B)' },
        { label: 'Verwarmingscapaciteit (Min./Nom./Max.)', value: '1,3/2,5/3,5 kW (20AW/S/B), 1,3/2,8/4,7 kW (25AW/S/B), 1,4/4,0/5,2 kW (35AW/S/B), 1,7/5,4/6,0 kW (42AW/S/B), 1,7/5,8/6,5 kW (50AW/S/B)' },
        { label: 'Opgenomen vermogen koelen (Nom.)', value: '0,43 kW (20AW/S/B), 0,56 kW (25AW/S/B), 0,78 kW (35AW/S/B), 1,05 kW (42AW/S/B), 1,36 kW (50AW/S/B)' },
        { label: 'Opgenomen vermogen verwarmen (Nom.)', value: '0,50 kW (20AW/S/B), 0,56 kW (25AW/S/B), 0,99 kW (35AW/S/B), 1,31 kW (42AW/S/B), 1,45 kW (50AW/S/B)' },
        { label: 'SEER', value: '8,75 (20AW/S/B), 8,74 (25AW/S/B), 8,73 (35AW/S/B), 7,50 (42AW/S/B), 7,33 (50AW/S/B)' },
        { label: 'SCOP', value: '5,15 (20AW/S/B), 4,60 (42AW/S/B)' },
        { label: 'Energielabel koelen', value: 'A+++ (20AW/S/B t/m 35AW/S/B), A++ (42AW/S/B en 50AW/S/B)' },
        { label: 'Energielabel verwarmen', value: 'A+++ (20AW/S/B t/m 35AW/S/B), A++ (42AW/S/B en 50AW/S/B)' },
        { label: 'Jaarlijks energieverbruik koelen', value: '80 kWh (20AW/S/B), 100 kWh (25AW/S/B), 136 kWh (35AW/S/B), 196 kWh (42AW/S/B), 239 kWh (50AW/S/B)' },
        { label: 'Jaarlijks energieverbruik verwarmen', value: '652 kWh (20AW/S/B), 666 kWh (25AW/S/B), 680 kWh (35AW/S/B), 1.156 kWh (42AW/S/B), 1.218 kWh (50AW/S/B)' },
        { label: 'Afmetingen binnenunit (HxBxD)', value: '305 x 900 x 212 mm' },
        { label: 'Gewicht binnenunit', value: '12 kg' },
        { label: 'Afmetingen buitenunit (HxBxD)', value: '552 x 840 x 350 mm (20A t/m 35A), 734 x 954 x 408 mm (42A en 50A)' },
        { label: 'Gewicht buitenunit', value: '33 kg (20A t/m 35A), 49 kg (42A en 50A)' },
        { label: 'Luchtstroom koelen (Fluisterstil/Laag/Midden/Hoog)', value: '2,6/3,6/5,0/6,0 m³/min (20AW/S/B) tot 3,2/4,6/6,2/8,1 m³/min (50AW/S/B)' },
        { label: 'Luchtstroom verwarmen (Fluisterstil/Laag/Midden/Hoog)', value: '2,6/3,8/5,2/6,6 m³/min (20AW/S/B) tot 3,4/4,9/6,6/9,0 m³/min (50AW/S/B)' },
        { label: 'Geluidsvermogenniveau koelen', value: '54 dB(A) (20AW/S/B t/m 25AW/S/B), 57 dB(A) (35AW/S/B), 60 dB(A) (42AW/S/B en 50AW/S/B)' },
        { label: 'Geluidsdrukniveau koelen/verwarmen', value: '19/25/33/39 dB(A) (20AW/S/B), 19/25/33/40 dB(A) (25AW/S/B), 19/25/33/41 dB(A) (35AW/S/B), 21/29/37/45 dB(A) (42AW/S/B), 24/31/42/46 dB(A) (50AW/S/B)' },
        { label: 'Geluidsvermogenniveau buitenunit', value: '59 dB(A) (20A), 61 dB(A) (35A), 62 dB(A) (50A)' },
        { label: 'Werkingsbereik koelen', value: '-10 tot +50°C' },
        { label: 'Werkingsbereik verwarmen', value: '-20 tot +18°C' },
        { label: 'Koudemiddel', value: 'R-32 (GWP: 675)' },
        { label: 'Leidingaansluitingen vloeistof/gas', value: '1/4" / 3/8" (20A t/m 35A), 1/4" / 1/2" (42A en 50A)' },
        { label: 'Maximale leidinglengte', value: '20 m (20A t/m 35A), 30 m (42A en 50A)' },
        { label: 'Maximaal hoogteverschil', value: '15 m (20A t/m 35A), 20 m (42A en 50A)' },
        { label: 'Additionele vulling (handmatig)', value: '0,020 kg/m (voor leidinglengte van meer dan 10 m)' },
        { label: 'Stroomvoorziening', value: '1~/50/220-240V' }
      ]
    }
  ]
};
