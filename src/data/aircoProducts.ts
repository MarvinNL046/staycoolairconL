// Auto-gegenereerd product data bestand
// Gegenereerd op: 2026-01-26T18:27:06.468Z

export interface ProductImage {
  path: string;
  type: 'main' | 'dimensions' | 'energy' | 'other';
  filename: string;
}

export interface ProductDocument {
  url: string;
  name: string;
}

export interface AircoProduct {
  id: string;
  sku: string | null;
  name: string;
  brand: 'LG' | 'Tosot' | 'MaxiCool' | 'Overig';
  type: 'single-split' | 'multi-split' | 'commercieel' | 'overig';
  category: string;
  capacity: string | null;
  coolingCapacity: string | null;
  heatingCapacity: string | null;
  description: string;
  dimensions: {
    binnenunit: string | null;
    buitenunit: string | null;
  };
  energyLabel: string | null;
  seer: string | null;
  scop: string | null;
  soundLevel: string | null;
  specifications: Record<string, string>;
  image: string | null;
  images: ProductImage[];
  url: string;
  documents: ProductDocument[];
}

export const aircoProducts: AircoProduct[] = [
  {
    "id": "81002212",
    "sku": "LG-AA09SP-SET",
    "name": "LG ARTCOOL AI AIR Mirror airco R32 2,5 kW Dual Inverter Set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": "3.7",
    "heatingCapacity": "4.1",
    "description": "De LG ARTCOOL AI AIR Mirror airco R32 2,5 kW Set combineert geavanceerde technologie met een stijlvol ontwerp. Deze set bestaat uit een binnenunit en een bijpassende buitenunit, die samen zorgen voor efficiënte klimaatbeheersing in kleinere tot middelgrote ruimtes. Met een koelcapaciteit van 2,5 kW en een verwarmingscapaciteit van 3,3 kW biedt deze airconditioner krachtige prestaties. Het gebruik van het milieuvriendelijke R32-koelmiddel en de energiezuinige DUAL Inverter Compressor™ zorgen voor optimale efficiëntie en duurzaamheid. Het elegante spiegelglasdesign voegt een moderne touch toe aan elk interieur.\n\nDe LG ARTCOOL AI AIR Mirror airco R32 2,5 kW Set is ideaal voor het koelen en verwarmen van kleinere tot middelgrote ruimtes zoals woonkamers, slaapkamers en kantoorruimtes. Dankzij de geavanceerde sensortechnologie en slimme functies past de airconditioner zich automatisch aan uw leefpatroon aan, wat zorgt voor consistent comfort en energie-efficiëntie.\n\nDe installatie van deze Single Split airco is eenvoudig en snel, met duidelijke instructies in de meegeleverde handleiding. De binnenunit heeft afmetingen van 837 x 308 x 192 mm (BxHxD) en de buitenunit meet 717 x 495 x 230 mm (BxHxD). Beide units zijn compact ontworpen om ruimte te besparen en esthetisch te integreren in uw interieur en exterieur.\n\nDe LG ARTCOOL AI AIR Mirror airco R32 2,5 kW Set biedt een perfecte balans tussen design, comfort en energie-efficiëntie. Met innovatieve functies zoals UVnano™-technologie, AI Air, en slimme bediening via de LG ThinQ™-app, is dit de ideale keuze voor wie op zoek is naar een moderne en duurzame klimaatoplossing voor hun leef- of werkruimte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "308 x 837 x 192 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A+++",
    "seer": "7",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.7 kg",
      "Global warming potential (GWP)": "675",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "3.7 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "4.1 kW",
      "SEER (koeling)": "7",
      "Energie-efficiëntieklasse koelen": "A+++",
      "SCOP bij gemiddelde omstandigheden": "4",
      "Hoogte binnenunit": "308 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "192 mm",
      "Gewicht binnenunit": "13.7 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "29.9 kg",
      "Kleur binnenunit": "Zwart",
      "Geluidsvermogenniveau binnenunit (min)": "27 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "44 dB(A)",
      "Met luchtzuiveringsfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002212_sk21290_81002214_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002212_sk21290_81002214_main.webp",
        "type": "main",
        "filename": "81002212_sk21290_81002214_main.webp"
      },
      {
        "path": "/images/airco-products/81002212_sk21282_82002260_dimensions.webp",
        "type": "dimensions",
        "filename": "81002212_sk21282_82002260_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002212_sk21311_81002214_dimensions.jpg",
        "type": "dimensions",
        "filename": "81002212_sk21311_81002214_dimensions.jpg"
      },
      {
        "path": "/images/airco-products/81002212_sk21283_82002260_other1.webp",
        "type": "other",
        "filename": "81002212_sk21283_82002260_other1.webp"
      },
      {
        "path": "/images/airco-products/81002212_sk21284_82002260_other2.webp",
        "type": "other",
        "filename": "81002212_sk21284_82002260_other2.webp"
      },
      {
        "path": "/images/airco-products/81002212_sk21285_82002260_other3.webp",
        "type": "other",
        "filename": "81002212_sk21285_82002260_other3.webp"
      },
      {
        "path": "/images/airco-products/81002212_sk21286_82002260_other4.webp",
        "type": "other",
        "filename": "81002212_sk21286_82002260_other4.webp"
      },
      {
        "path": "/images/airco-products/81002212_sk21291_81002214_other1-1.webp",
        "type": "other",
        "filename": "81002212_sk21291_81002214_other1-1.webp"
      },
      {
        "path": "/images/airco-products/81002212_sk21315_82002260_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002212_sk21315_82002260_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-artcool-ai-air-mirror-airco-r32-25-kw-dual-inverter-set/37335/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21287_82002260_manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21288_82002260_Product_sheet_EN.pdf",
        "name": "Product Sheet EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21289_82002260_Technical_Document_EN.pdf",
        "name": "Technical Document EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21312_82002260_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21313_82002260_EU_DECLARATION_OF_CONFORMITY.pdf",
        "name": "EU DECLARATION OF CONFORMITY"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21314_82002260_DECLARATION_OF_CONFORMITY.pdf",
        "name": "DECLARATION OF CONFORMITY"
      }
    ]
  },
  {
    "id": "81002213",
    "sku": "LG-AA12SP-SET",
    "name": "LG ARTCOOL AI AIR Mirror airco R32 3,5 kW Dual Inverter Set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "3.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG ARTCOOL AI AIR Mirror airco R32 3,5 kW Set combineert geavanceerde technologie met een stijlvol ontwerp. Deze set bestaat uit een binnenunit en een bijpassende buitenunit, die samen zorgen voor efficiënte klimaatbeheersing in middelgrote ruimtes. Met een koelcapaciteit van 3,5 kW en een verwarmingscapaciteit van 4,0 kW biedt deze airconditioner krachtige prestaties. Het gebruik van het milieuvriendelijke R32-koelmiddel en de energiezuinige DUAL Inverter Compressor™ zorgen voor optimale efficiëntie en duurzaamheid. Het elegante spiegelglasdesign voegt een moderne touch toe aan elk interieur.\n\nDe LG ARTCOOL AI AIR Mirror airco R32 3,5 kW Set is ideaal voor het koelen en verwarmen van middelgrote ruimtes zoals woonkamers, slaapkamers en kantoorruimtes. Dankzij de geavanceerde sensortechnologie en slimme functies past de airconditioner zich automatisch aan uw leefpatroon aan, wat zorgt voor consistent comfort en energie-efficiëntie.\n\nDe installatie van deze Single Split airco is eenvoudig en snel, met duidelijke instructies in de meegeleverde handleiding. De binnenunit heeft afmetingen van 935 x 235 x 307 mm (BxHxD) en de buitenunit meet 770 x 288 x 545 mm (BxHxD). Beide units zijn compact ontworpen om ruimte te besparen en esthetisch te integreren in uw interieur en exterieur.\n\nDe LG ARTCOOL AI AIR Mirror airco R32 3,5 kW Set biedt een perfecte balans tussen design, comfort en energie-efficiëntie. Met innovatieve functies zoals UVnano™-technologie, AI Air, en slimme bediening via de LG ThinQ™-app, is dit de ideale keuze voor wie op zoek is naar een moderne en duurzame klimaatoplossing voor hun leef- of werkruimte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "235 x 935 x 307 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A+++",
    "seer": "9.5",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.7 kg",
      "Global warming potential (GWP)": "675",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "SEER (koeling)": "9.5",
      "Energie-efficiëntieklasse koelen": "A+++",
      "SCOP bij warmere omstandigheden": "6.1",
      "Hoogte binnenunit": "235 mm",
      "Breedte binnenunit": "935 mm",
      "Diepte binnenunit": "307 mm",
      "Gewicht binnenunit": "13.7 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "65.9 kg",
      "Kleur binnenunit": "Zwart",
      "Met luchtzuiveringsfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002213_sk21290_81002214_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002213_sk21290_81002214_main.webp",
        "type": "main",
        "filename": "81002213_sk21290_81002214_main.webp"
      },
      {
        "path": "/images/airco-products/81002213_sk21282_82002260_dimensions.webp",
        "type": "dimensions",
        "filename": "81002213_sk21282_82002260_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002213_sk21311_81002214_dimensions.jpg",
        "type": "dimensions",
        "filename": "81002213_sk21311_81002214_dimensions.jpg"
      },
      {
        "path": "/images/airco-products/81002213_sk21283_82002260_other1.webp",
        "type": "other",
        "filename": "81002213_sk21283_82002260_other1.webp"
      },
      {
        "path": "/images/airco-products/81002213_sk21284_82002260_other2.webp",
        "type": "other",
        "filename": "81002213_sk21284_82002260_other2.webp"
      },
      {
        "path": "/images/airco-products/81002213_sk21285_82002260_other3.webp",
        "type": "other",
        "filename": "81002213_sk21285_82002260_other3.webp"
      },
      {
        "path": "/images/airco-products/81002213_sk21286_82002260_other4.webp",
        "type": "other",
        "filename": "81002213_sk21286_82002260_other4.webp"
      },
      {
        "path": "/images/airco-products/81002213_sk21291_81002214_other1-1.webp",
        "type": "other",
        "filename": "81002213_sk21291_81002214_other1-1.webp"
      },
      {
        "path": "/images/airco-products/81002213_sk21320_82002262_EU_Energy_Label+Energy.jpg",
        "type": "energy",
        "filename": "81002213_sk21320_82002262_EU_Energy_Label+Energy.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-artcool-ai-air-mirror-airco-r32-35-kw-dual-inverter-set/37336/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21316_82002262_EU_Energy_Label+Energy.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21317_82002262_EU_DECLARATION_OF_CONFORMITY.pdf",
        "name": "EU DECLARATION OF CONFORMITY"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21318_82002262_DECLARATION_OF_CONFORMITY.pdf",
        "name": "DECLARATION OF CONFORMITY"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21319_82002262_Technical_Document_EN.pdf",
        "name": "Technical Document EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21287_82002260_manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21288_82002260_Product_sheet_EN.pdf",
        "name": "Product Sheet EN"
      }
    ]
  },
  {
    "id": "81002214",
    "sku": "LG-AA18SP-SET",
    "name": "LG ARTCOOL AI AIR Mirror airco R32 5,0 kW Dual Inverter Set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "5.0",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG ARTCOOL AI AIR Mirror airco R32 5,0 kW Set combineert geavanceerde technologie met een stijlvol ontwerp. Deze set bestaat uit een binnenunit en een bijpassende buitenunit, die samen zorgen voor efficiënte klimaatbeheersing in grotere ruimtes. Met een koelcapaciteit van 5,0 kW en een verwarmingscapaciteit van 5,8 kW biedt deze airconditioner krachtige prestaties. Het gebruik van het milieuvriendelijke R32-koelmiddel en de energiezuinige DUAL Inverter Compressor™ zorgen voor optimale efficiëntie en duurzaamheid. Het elegante spiegelglasdesign voegt een moderne touch toe aan elk interieur.\n\nDe LG ARTCOOL AI AIR Mirror airco R32 5,0 kW Set is ideaal voor het koelen en verwarmen van grotere ruimtes zoals woonkamers, slaapkamers en kantoorruimtes. Dankzij de geavanceerde sensortechnologie en slimme functies past de airconditioner zich automatisch aan uw leefpatroon aan, wat zorgt voor consistent comfort en energie-efficiëntie.\n\nDe installatie van deze Single Split airco is eenvoudig en snel, met duidelijke instructies in de meegeleverde handleiding. De binnenunit heeft afmetingen van 935 x 235 x 307 mm (BxHxD) en de buitenunit meet 770 x 288 x 545 mm (BxHxD). Beide units zijn compact ontworpen om ruimte te besparen en esthetisch te integreren in uw interieur en exterieur.\n\nDe LG ARTCOOL AI AIR Mirror airco R32 5,0 kW Set biedt een perfecte balans tussen design, comfort en energie-efficiëntie. Met innovatieve functies zoals UVnano™-technologie, AI Air, en slimme bediening via de LG ThinQ™-app, is dit de ideale keuze voor wie op zoek is naar een moderne en duurzame klimaatoplossing voor hun leef- of werkruimte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "235 x 935 x 307 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.13 kg",
      "Global warming potential (GWP)": "675",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "SEER (koeling)": "7",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "235 mm",
      "Breedte binnenunit": "935 mm",
      "Diepte binnenunit": "307 mm",
      "Gewicht binnenunit": "13.7 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "29.9 kg",
      "Kleur binnenunit": "Zwart",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002214_sk21290_81002214_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002214_sk21290_81002214_main.webp",
        "type": "main",
        "filename": "81002214_sk21290_81002214_main.webp"
      },
      {
        "path": "/images/airco-products/81002214_sk21282_82002260_dimensions.webp",
        "type": "dimensions",
        "filename": "81002214_sk21282_82002260_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002214_sk21311_81002214_dimensions.jpg",
        "type": "dimensions",
        "filename": "81002214_sk21311_81002214_dimensions.jpg"
      },
      {
        "path": "/images/airco-products/81002214_sk21283_82002260_other1.webp",
        "type": "other",
        "filename": "81002214_sk21283_82002260_other1.webp"
      },
      {
        "path": "/images/airco-products/81002214_sk21284_82002260_other2.webp",
        "type": "other",
        "filename": "81002214_sk21284_82002260_other2.webp"
      },
      {
        "path": "/images/airco-products/81002214_sk21285_82002260_other3.webp",
        "type": "other",
        "filename": "81002214_sk21285_82002260_other3.webp"
      },
      {
        "path": "/images/airco-products/81002214_sk21286_82002260_other4.webp",
        "type": "other",
        "filename": "81002214_sk21286_82002260_other4.webp"
      },
      {
        "path": "/images/airco-products/81002214_sk21291_81002214_other1-1.webp",
        "type": "other",
        "filename": "81002214_sk21291_81002214_other1-1.webp"
      },
      {
        "path": "/images/airco-products/81002214_sk21326_82002264_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002214_sk21326_82002264_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-artcool-ai-air-mirror-airco-r32-50-kw-dual-inverter-set/37339/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21323_82002264_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21321_82002264_DECLARATION_OF_CONFORMITY.pdf",
        "name": "DECLARATION OF CONFORMITY"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21322_82002264_EU_DECLARATION_OF_CONFORMITY.pdf",
        "name": "EU DECLARATION OF CONFORMITY"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21324_82002264_product_sheet_EN.pdf",
        "name": "Product Sheet EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21325_82002264_Technical_Document_EN.pdf",
        "name": "Technical Document EN"
      }
    ]
  },
  {
    "id": "81002172",
    "sku": "AKTIE-P09SND-SET",
    "name": "LG DUALCOOL AI AIR Special Smart Inverter airco 2,5 kW Set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": "3.6",
    "heatingCapacity": "4.6",
    "description": "Deze DUALCOOL AI AIR Special Smart Inverter 2,5 kW Set van LG, bestaande uit de LG P09SND binnen- en buitenunit, is gemaakt om kleinere ruimtes, efficiënt te verkoelen of te verwarmen. De airco is erg slim en gebruiksvriendelijk doordat het verbonden is met je Wi-Fi-netwerk en kan daardoor op afstand bestuurd worden. Zo kan het een goede oplossing bieden voor het binnenklimaat van jouw woonruimte of kantoor. Ervaar de topkwaliteit van deze innovatieve en duurzame LG DUALCOOL airconditioning!\n\nDoor zijn compacte formaat en zijn geruisloze werking is deze airco unit uitermate geschikt voor kleine kamers waar stilte belangrijk is. Met zijn SEER van 7,6 en SCOP van 4,6 wordt heel het jaar door een aangenaam binnenklimaat op efficiënte wijze gecreëerd.\n\nDeze DUALCOOL AI AIR Special Smart Inverter 2.5kW Set wordt geleverd met een binnen en buitenset. LG biedt op de producten 5 jaar garantie, waardoor zekerheid op een duurzaam en betrouwbaar gebruiksleven van de airco gegarandeerd is.\n\nDeze airco set gebruikt het nieuwe R32 koelmiddel, dat is zowel efficiënter als milieuvriendelijker dan andere koelmiddelen op de markt. Zijn ontwerp maken het tot een strakke oplossing voor uw binnenklimaat die ook nog eens makkelijk in gebruik is. Heb je vragen over het gebruik of toepassing van deze LG airco set? Neem dan contact met ons op!\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "307 x 799 x 235 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A++",
    "seer": "8.3",
    "scop": null,
    "soundLevel": "48 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Aansluitspanning": "276 V",
      "Frequentie": "50 Hz",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "3.6 kW",
      "Verwarmingscapaciteit (min)": "0.65 kW",
      "Verwarmingscapaciteit (max)": "4.6 kW",
      "EER (koeling)": "14.47",
      "COP (verwarming)": "14.77",
      "SEER (koeling)": "8.3",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "105 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "SCOP bij gemiddelde omstandigheden": "4.6",
      "Energie-efficiëntieklasse ruimteverwarming bij gemiddelde omstandigheden": "A++",
      "Hoogte binnenunit": "307 mm",
      "Breedte binnenunit": "799 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "10 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "25 kg",
      "Kleur binnenunit": "Wit",
      "Luchtdebiet koelen (min)": "4.8 m³/h",
      "Luchtdebiet koelen (max)": "12.7 m³/h",
      "Luchtdebiet verwarmen (min)": "4.8 m³/h",
      "Luchtdebiet verwarmen (max)": "13 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "51 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "51 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Uitwendige buisdiameter vloeistofleiding": "7.5 mm",
      "Ontvochtigingscapaciteit": "1.15 l/h",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Nee",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002172_sk17202_81002172_dimensions_2.webp",
    "images": [
      {
        "path": "/images/airco-products/81002172_sk17202_81002172_dimensions_2.webp",
        "type": "dimensions",
        "filename": "81002172_sk17202_81002172_dimensions_2.webp"
      },
      {
        "path": "/images/airco-products/81002172_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002172_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002172_sk16869_81002172_other2.webp",
        "type": "other",
        "filename": "81002172_sk16869_81002172_other2.webp"
      },
      {
        "path": "/images/airco-products/81002172_sk17144_81002172_other1.webp",
        "type": "other",
        "filename": "81002172_sk17144_81002172_other1.webp"
      },
      {
        "path": "/images/airco-products/81002172_sk17145_81002172_other2.webp",
        "type": "other",
        "filename": "81002172_sk17145_81002172_other2.webp"
      },
      {
        "path": "/images/airco-products/81002172_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002172_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002172_sk16873_81002172_EnergyLabel.webp",
        "type": "energy",
        "filename": "81002172_sk16873_81002172_EnergyLabel.webp"
      },
      {
        "path": "/images/airco-products/81002172_sk17143_81002172_Main.jpg",
        "type": "other",
        "filename": "81002172_sk17143_81002172_Main.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-dualcool-ai-air-special-smart-inverter-airco-25-kw-set/35350/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21389_81002172_dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17200_81002172_Energy-Label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21512_81002173-manual-NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17201_Technical_Document_EN.pdf",
        "name": "Specifications Sheet EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21511_81001932-manual-EN.pdf",
        "name": "Manual EN"
      }
    ]
  },
  {
    "id": "81002173",
    "sku": "AKTIE-P12SND-SET",
    "name": "LG DUALCOOL AI AIR Special Smart Inverter airco 3,5 kW Set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "3.5",
    "coolingCapacity": "3.6",
    "heatingCapacity": "4.6",
    "description": "Deze DUALCOOL AI AIR Special Smart Inverter 3,5kW Set van LG, bestaande uit de LG P12SND binnen- en buitenunit, is gemaakt om kleinere ruimtes, efficiënt te verkoelen of te verwarmen. De airco is erg slim en gebruiksvriendelijk doordat het verbonden is met je Wi-Fi-netwerk en kan daardoor op afstand bestuurd worden. Zo kan het een goede oplossing bieden voor het binnenklimaat van jouw woonruimte of kantoor. Ervaar de topkwaliteit van deze innovatieve en duurzame LG DUALCOOL airconditioning!\n\nDoor zijn compacte formaat en zijn geruisloze werking is deze airco unit uitermate geschikt voor kleine kamers waar stilte belangrijk is. Met zijn SEER van 7,6 en SCOP van 4,6 wordt heel het jaar door een aangenaam binnenklimaat op efficiënte wijze gecreëerd.\n\nDeze DUALCOOL AI AIR Special Smart Inverter 3.5kW Set wordt geleverd met een binnen en buitenset. LG biedt op de producten 5 jaar garantie, waardoor zekerheid op een duurzaam en betrouwbaar gebruiksleven van de airco gegarandeerd is.\n\nDeze airco set gebruikt het nieuwe R32 koelmiddel, dat is zowel efficiënter als milieuvriendelijker dan andere koelmiddelen op de markt. Zijn ontwerp maken het tot een strakke oplossing voor uw binnenklimaat die ook nog eens makkelijk in gebruik is. Heb je vragen over het gebruik of toepassing van deze LG airco set? Neem dan contact met ons op!\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "307 x 799 x 235 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A++",
    "seer": "8.3",
    "scop": null,
    "soundLevel": "48 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Aansluitspanning": "276 V",
      "Frequentie": "50 Hz",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "3.6 kW",
      "Verwarmingscapaciteit (min)": "0.65 kW",
      "Verwarmingscapaciteit (max)": "4.6 kW",
      "EER (koeling)": "14.47",
      "COP (verwarming)": "14.77",
      "SEER (koeling)": "8.3",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "105 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "SCOP bij gemiddelde omstandigheden": "4.6",
      "Energie-efficiëntieklasse ruimteverwarming bij gemiddelde omstandigheden": "A++",
      "Hoogte binnenunit": "307 mm",
      "Breedte binnenunit": "799 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "10 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "25 kg",
      "Kleur binnenunit": "Wit",
      "Luchtdebiet koelen (min)": "4.8 m³/h",
      "Luchtdebiet koelen (max)": "12.7 m³/h",
      "Luchtdebiet verwarmen (min)": "4.8 m³/h",
      "Luchtdebiet verwarmen (max)": "13 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "51 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "51 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Uitwendige buisdiameter vloeistofleiding": "7.5 mm",
      "Ontvochtigingscapaciteit": "1.15 l/h",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Nee",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002173_sk17202_81002172_dimensions_2.webp",
    "images": [
      {
        "path": "/images/airco-products/81002173_sk17202_81002172_dimensions_2.webp",
        "type": "dimensions",
        "filename": "81002173_sk17202_81002172_dimensions_2.webp"
      },
      {
        "path": "/images/airco-products/81002173_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002173_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002173_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002173_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002173_sk17144_81002172_other1.webp",
        "type": "other",
        "filename": "81002173_sk17144_81002172_other1.webp"
      },
      {
        "path": "/images/airco-products/81002173_sk17145_81002172_other2.webp",
        "type": "other",
        "filename": "81002173_sk17145_81002172_other2.webp"
      },
      {
        "path": "/images/airco-products/81002173_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002173_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002173_sk16879_81002173_EneryLabel.webp",
        "type": "other",
        "filename": "81002173_sk16879_81002173_EneryLabel.webp"
      },
      {
        "path": "/images/airco-products/81002173_sk17143_81002172_Main.jpg",
        "type": "other",
        "filename": "81002173_sk17143_81002172_Main.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-dualcool-ai-air-special-smart-inverter-airco-35-kw-set/35349/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21394_81002173-dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17205_81002173 _Energy_Label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21395_81002173-manual-NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21396_81001932-manual-EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17201_Technical_Document_EN.pdf",
        "name": "Specifications Sheet EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81001933",
    "sku": "LG-AP09RK-SET",
    "name": "LG Air Purifying Inverter airco R32 2,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": "3.7",
    "heatingCapacity": "4.1",
    "description": "De LG AP09RK STD+ Air Purifying R32 2,5 kW Inverter set is een veelzijdige airconditioner, ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 2,5 kW en voorzien van de geavanceerde invertertechnologie, biedt deze airco uitstekende prestaties met een efficiënt energieverbruik. Dankzij de ingebouwde luchtzuiveringsfunctie zorgt de LG AP09RK niet alleen voor een comfortabel binnenklimaat, maar ook voor schone en gezonde lucht. De airco heeft een SEER van 6,6 W/W en een SCOP van 4,0/5,0 W/W, wat zorgt voor betrouwbare prestaties in zowel zomer- als winterseizoenen. Het geluidsniveau van de binnenunit is slechts 21 dB(A), terwijl de buitenunit een geluidsniveau van 48 dB(A) heeft.\n\nDe LG AP09RK STD+ 2,5 kW is perfect geschikt voor kleinere ruimtes tot 40 m², zoals slaapkamers, kantoren en woonkamers. De unit biedt betrouwbare koeling en verwarming, evenals luchtzuivering, waardoor het ideaal is voor zowel warme zomers als koude winters.\n\nDeze airco is ontworpen voor eenvoudige installatie en onderhoud. De set wordt geleverd met een complete installatiekit en een gebruiksvriendelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De LG AP09RK STD+ wordt geleverd met een garantie van 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG AP09RK STD+ Air Purifying 2,5 kW onderscheidt zich door zijn combinatie van energie-efficiëntie, stille werking en luchtzuiveringscapaciteit. Met een SEER van 6,6 en een SCOP van 4,0/5,0 biedt deze airco betrouwbare prestaties het hele jaar door. De slimme functies zoals de luchtzuivering, het gebruik van het milieuvriendelijke R32 koelmiddel en het compacte ontwerp maken het een uitstekende keuze voor zowel particuliere als zakelijke gebruikers. De lange levensduur, het lage geluidsniveau van 21 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken dit apparaat tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "348 x 857 x 189 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A++",
    "seer": "6.6",
    "scop": null,
    "soundLevel": "42 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.7 kg",
      "Global warming potential (GWP)": "473",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "0.71 kW",
      "Opgenomen vermogen bij koelen (max)": "0.71 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "3.7 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.85 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.85 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "4.1 kW",
      "EER (koeling)": "3.52",
      "COP (verwarming)": "3.88",
      "SEER (koeling)": "6.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "133 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "348 mm",
      "Breedte binnenunit": "857 mm",
      "Diepte binnenunit": "189 mm",
      "Gewicht binnenunit": "9.5 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "26 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "180 m³/h",
      "Luchtdebiet koelen (max)": "660 m³/h",
      "Luchtdebiet verwarmen (min)": "252 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "21 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "42 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.1 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "7 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "2,5 kW"
    },
    "image": "/images/airco-products/81001933_81001932_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001933_81001932_main.webp",
        "type": "main",
        "filename": "81001933_81001932_main.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001932_dimensions.webp",
        "type": "dimensions",
        "filename": "81001933_81001932_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001932_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001933_81001932_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001933_energy.webp",
        "type": "energy",
        "filename": "81001933_81001933_energy.webp"
      },
      {
        "path": "/images/airco-products/81001933_energy.webp",
        "type": "energy",
        "filename": "81001933_energy.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001932_other1.webp",
        "type": "other",
        "filename": "81001933_81001932_other1.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001932_other2.webp",
        "type": "other",
        "filename": "81001933_81001932_other2.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001932_other3.webp",
        "type": "other",
        "filename": "81001933_81001932_other3.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001932_other4.webp",
        "type": "other",
        "filename": "81001933_81001932_other4.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001932_other5.webp",
        "type": "other",
        "filename": "81001933_81001932_other5.webp"
      },
      {
        "path": "/images/airco-products/81001933_81001932_other6.webp",
        "type": "other",
        "filename": "81001933_81001932_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-air-purifying-inverter-airco-r32-25-kw-set/29397/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001933_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001933_Energy_label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001933_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21396_81001932-manual-EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001933_Technical_document_EN.pdf",
        "name": "Specification Sheet EN"
      }
    ]
  },
  {
    "id": "81001932",
    "sku": "LG-AP12RK-SET",
    "name": "LG Air Purifying Inverter airco R32 3,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "3.5",
    "coolingCapacity": "4",
    "heatingCapacity": "4.7",
    "description": "De LG AP12RK STD+ Air Purifying R32 3,5 kW Inverter set is een veelzijdige airconditioner, ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 3,5 kW en voorzien van de geavanceerde invertertechnologie, biedt deze airco uitstekende prestaties met een efficiënt energieverbruik. Dankzij de ingebouwde luchtzuiveringsfunctie zorgt de LG AP12RK niet alleen voor een comfortabel binnenklimaat, maar ook voor schone en gezonde lucht. De airco heeft een SEER van 6,2 W/W en een SCOP van 4,0/5,0 W/W, wat zorgt voor betrouwbare prestaties in zowel zomer- als winterseizoenen. Het geluidsniveau van de binnenunit is slechts 21 dB(A), terwijl de buitenunit een geluidsniveau van 48 dB(A) heeft.\n\nDe LG AP12RK STD+ 3,5 kW is perfect geschikt voor middelgrote ruimtes tot 60 m², zoals woonkamers, kantoren en slaapkamers. De unit biedt betrouwbare koeling en verwarming, evenals luchtzuivering, waardoor het ideaal is voor zowel warme zomers als koude winters.\n\nDeze airco is ontworpen voor eenvoudige installatie en onderhoud. De set wordt geleverd met een complete installatiekit en een gebruiksvriendelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De LG AP12RK STD+ wordt geleverd met een garantie van 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG AP12RK STD+ Air Purifying 3,5 kW onderscheidt zich door zijn combinatie van energie-efficiëntie, stille werking en luchtzuiveringscapaciteit. Met een SEER van 6,2 en een SCOP van 4,0/5,0 biedt deze airco betrouwbare prestaties het hele jaar door. De slimme functies zoals de luchtzuivering, het gebruik van het milieuvriendelijke R32 koelmiddel en het compacte ontwerp maken het een uitstekende keuze voor zowel particuliere als zakelijke gebruikers. De lange levensduur, het lage geluidsniveau van 21 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken dit apparaat tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "348 x 857 x 189 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A++",
    "seer": "6.2",
    "scop": null,
    "soundLevel": "42 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.7 kg",
      "Global warming potential (GWP)": "473",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "1.16 kW",
      "Opgenomen vermogen bij koelen (max)": "1.16 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "4 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.13 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.13 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "4.7 kW",
      "EER (koeling)": "3.02",
      "COP (verwarming)": "3.54",
      "SEER (koeling)": "6.2",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "198 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "348 mm",
      "Breedte binnenunit": "857 mm",
      "Diepte binnenunit": "189 mm",
      "Gewicht binnenunit": "9.5 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "26 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "180 m³/h",
      "Luchtdebiet koelen (max)": "680 m³/h",
      "Luchtdebiet verwarmen (min)": "252 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "21 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "42 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.3 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "7 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+",
      "Capaciteit": "3,5 kW"
    },
    "image": "/images/airco-products/81001932_81001932_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001932_81001932_main.webp",
        "type": "main",
        "filename": "81001932_81001932_main.webp"
      },
      {
        "path": "/images/airco-products/81001932_main.webp",
        "type": "main",
        "filename": "81001932_main.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_dimensions.webp",
        "type": "dimensions",
        "filename": "81001932_81001932_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001932_81001932_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001932_dimensions.webp",
        "type": "dimensions",
        "filename": "81001932_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001932_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001932_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_energy.webp",
        "type": "energy",
        "filename": "81001932_81001932_energy.webp"
      },
      {
        "path": "/images/airco-products/81001932_energy.webp",
        "type": "energy",
        "filename": "81001932_energy.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_other1.webp",
        "type": "other",
        "filename": "81001932_81001932_other1.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_other2.webp",
        "type": "other",
        "filename": "81001932_81001932_other2.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_other3.webp",
        "type": "other",
        "filename": "81001932_81001932_other3.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_other4.webp",
        "type": "other",
        "filename": "81001932_81001932_other4.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_other5.webp",
        "type": "other",
        "filename": "81001932_81001932_other5.webp"
      },
      {
        "path": "/images/airco-products/81001932_81001932_other6.webp",
        "type": "other",
        "filename": "81001932_81001932_other6.webp"
      },
      {
        "path": "/images/airco-products/81001932_other1.webp",
        "type": "other",
        "filename": "81001932_other1.webp"
      },
      {
        "path": "/images/airco-products/81001932_other2.webp",
        "type": "other",
        "filename": "81001932_other2.webp"
      },
      {
        "path": "/images/airco-products/81001932_other3.webp",
        "type": "other",
        "filename": "81001932_other3.webp"
      },
      {
        "path": "/images/airco-products/81001932_other4.webp",
        "type": "other",
        "filename": "81001932_other4.webp"
      },
      {
        "path": "/images/airco-products/81001932_other5.webp",
        "type": "other",
        "filename": "81001932_other5.webp"
      },
      {
        "path": "/images/airco-products/81001932_other6.webp",
        "type": "other",
        "filename": "81001932_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-air-purifying-inverter-airco-r32-35-kw-set/29398/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001932_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001932_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001932_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21511_81001932-manual-EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001932_Technical_document_EN.pdf",
        "name": "Specification Sheet EN"
      }
    ]
  },
  {
    "id": "81001886",
    "sku": "AKTIE-PC09ST-SET",
    "name": "LG Standard Plus Smart Inverter airco R32 2,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": "3.7",
    "heatingCapacity": "4.1",
    "description": "Deze inverter van LG, bestaande uit de LG PC09ST binnen- en buitenunit, is gemaakt om kleinere ruimtes, efficiënt te verkoelen of te verwarmen. De airco is erg slim en gebruiksvriendelijk doordat het verbonden is met je wifi-netwerk en kan daardoor op afstand bestuurd worden. Zo kan het een goede oplossing bieden voor het binnenklimaat van jouw woonruimte of kantoor.\n\nDoor zijn compacte formaat en zijn geruisloze werking is deze airco unit uitermate geschikt voor kleine kamers waar stilte belangrijk is. Met zijn SEER van 7,0 en SCOP van 4,1 wordt heel het jaar door een aangenaam binnenklimaat op efficiënte wijze gecreëerd.\n\nDe LG Standard Plus Smart Inverter set wordt geleverd met een binnen en buitenset. LG biedt op de producten 5 jaar garantie, waardoor zekerheid op een duurzaam en betrouwbaar gebruiksleven van de airco gegarandeerd is.\n\nDeze airco set gebruikt het nieuwe R32 koelmiddel, dat is zowel efficiënter als milieuvriendelijker dan andere koelmiddelen op de markt. Zijn ontwerp maken het tot een strakke oplossing voor uw binnenklimaat die ook nog eens makkelijk in gebruik is.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "308 x 837 x 189 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.7 kg",
      "Global warming potential (GWP)": "473",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "0.66 kW",
      "Opgenomen vermogen bij koelen (max)": "0.66 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "3.7 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.8 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.8 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "4.1 kW",
      "EER (koeling)": "3.81",
      "COP (verwarming)": "4.13",
      "SEER (koeling)": "7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "125 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "308 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "189 mm",
      "Gewicht binnenunit": "8.7 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "25.1 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "180 m³/h",
      "Luchtdebiet koelen (max)": "750 m³/h",
      "Luchtdebiet verwarmen (min)": "336 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.1 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "7 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001886_81001886_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001886_81001886_main.webp",
        "type": "main",
        "filename": "81001886_81001886_main.webp"
      },
      {
        "path": "/images/airco-products/81001886_main.webp",
        "type": "main",
        "filename": "81001886_main.webp"
      },
      {
        "path": "/images/airco-products/81001886_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001886_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001886_81001886_dimensions.webp",
        "type": "dimensions",
        "filename": "81001886_81001886_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001886_dimensions.webp",
        "type": "dimensions",
        "filename": "81001886_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001886_81001886_energy.webp",
        "type": "energy",
        "filename": "81001886_81001886_energy.webp"
      },
      {
        "path": "/images/airco-products/81001886_energy.webp",
        "type": "energy",
        "filename": "81001886_energy.webp"
      },
      {
        "path": "/images/airco-products/81001886_81001410_other3.webp",
        "type": "other",
        "filename": "81001886_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001886_81001627_other2.webp",
        "type": "other",
        "filename": "81001886_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001886_81001627_other3.webp",
        "type": "other",
        "filename": "81001886_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001886_81001627_other4.webp",
        "type": "other",
        "filename": "81001886_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001886_81001886_other1.webp",
        "type": "other",
        "filename": "81001886_81001886_other1.webp"
      },
      {
        "path": "/images/airco-products/81001886_other1.webp",
        "type": "other",
        "filename": "81001886_other1.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-standard-plus-smart-inverter-airco-r32-25-kw-set/29404/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001886_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001886_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001886_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21522_81001889_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001886_Specification_Sheet_NL_1.pdf",
        "name": "Specification Sheet NL 1"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001886_Specification_Sheet_NL_2.pdf",
        "name": "Specification Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21518_81001886_Environmental_Performance_Report_EN.PDF.pdf",
        "name": "Environmental Performance Report EN"
      }
    ]
  },
  {
    "id": "81001889",
    "sku": "AKTIE-PC12ST-SET",
    "name": "LG Standard Plus Smart Inverter airco R32 3,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "3.5",
    "coolingCapacity": "4.04",
    "heatingCapacity": "5.1",
    "description": "Deze inverter van LG, bestaande uit de LG PC12ST binnen- en buitenunit, is gemaakt om kleinere ruimtes, efficiënt te verkoelen of te verwarmen. De airco is erg slim en gebruiksvriendelijk doordat het verbonden is met je wifi-netwerk en kan daardoor op afstand bestuurd worden. Zo kan het een goede oplossing bieden voor het binnenklimaat van jouw woonruimte of kantoor.\n\nDoor zijn compacte formaat en zijn geruisloze werking is deze airco unit uitermate geschikt voor kleine kamers waar stilte belangrijk is. Met zijn SEER van 6,6 en SCOP van 3,8 wordt heel het jaar door een aangenaam binnenklimaat op efficiënte wijze gecreëerd.\n\nDe LG Standard Plus Smart Inverter set wordt geleverd met een binnen en buitenset. LG biedt op de producten 5 jaar garantie, waardoor zekerheid op een duurzaam en betrouwbaar gebruiksleven van de airco gegarandeerd is.\n\nDeze airco set gebruikt het nieuwe R32 koelmiddel, dat is zowel efficiënter als milieuvriendelijker dan andere koelmiddelen op de markt. Zijn ontwerp maken het tot een strakke oplossing voor uw binnenklimaat die ook nog eens makkelijk in gebruik is.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "308 x 837 x 189 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A++",
    "seer": "6.6",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.7 kg",
      "Global warming potential (GWP)": "473",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "1.08 kW",
      "Opgenomen vermogen bij koelen (max)": "1.08 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "4.04 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.05 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.05 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "5.1 kW",
      "EER (koeling)": "3.24",
      "COP (verwarming)": "3.81",
      "SEER (koeling)": "6.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "186 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "308 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "189 mm",
      "Gewicht binnenunit": "8.7 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "25.1 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "180 m³/h",
      "Luchtdebiet koelen (max)": "750 m³/h",
      "Luchtdebiet verwarmen (min)": "336 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.3 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "7 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001889_81001886_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001889_81001886_main.webp",
        "type": "main",
        "filename": "81001889_81001886_main.webp"
      },
      {
        "path": "/images/airco-products/81001889_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001889_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001889_81001886_dimensions.webp",
        "type": "dimensions",
        "filename": "81001889_81001886_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001889_81001889_energy.webp",
        "type": "energy",
        "filename": "81001889_81001889_energy.webp"
      },
      {
        "path": "/images/airco-products/81001889_energy.webp",
        "type": "energy",
        "filename": "81001889_energy.webp"
      },
      {
        "path": "/images/airco-products/81001889_81001410_other3.webp",
        "type": "other",
        "filename": "81001889_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001889_81001627_other2.webp",
        "type": "other",
        "filename": "81001889_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001889_81001627_other3.webp",
        "type": "other",
        "filename": "81001889_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001889_81001627_other4.webp",
        "type": "other",
        "filename": "81001889_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001889_81001886_other1.webp",
        "type": "other",
        "filename": "81001889_81001886_other1.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-standard-plus-smart-inverter-airco-r32-35-kw-set/29403/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001889_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001889_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001889_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001889_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001889_Specification_Sheet_NL-1.pdf",
        "name": "Specification Sheet NL 1"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001889_Specification_Sheet_NL-2.pdf",
        "name": "Specification Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21519_81001889_Environmental_Perfomance_Report_EN.PDF.pdf",
        "name": "Environmental Performance Report EN"
      }
    ]
  },
  {
    "id": "81001892",
    "sku": "AKTIE-PC18ST-SET",
    "name": "LG Standard Plus Smart Inverter airco R32 5,0 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "5.0",
    "coolingCapacity": "5.5",
    "heatingCapacity": "6.4",
    "description": "Deze inverter van LG, bestaande uit de LG PC18ST binnen- en buitenunit, is gemaakt om kleinere ruimtes, efficiënt te verkoelen of te verwarmen. De airco is erg slim en gebruiksvriendelijk doordat het verbonden is met je wifi-netwerk en kan daardoor op afstand bestuurd worden. Zo kan het een goede oplossing bieden voor het binnenklimaat van jouw woonruimte of kantoor.\n\nDoor zijn compacte formaat en zijn geruisloze werking is deze airco unit uitermate geschikt voor kleine en middelgrote kamers waar stilte belangrijk is. Met zijn SEER van 7,0 en SCOP van 3,6 wordt heel het jaar door een aangenaam binnenklimaat op efficiënte wijze gecreëerd.\n\nDe LG Standard Plus Smart Inverter set wordt geleverd met een binnen en buitenset. LG biedt op de producten 5 jaar garantie, waardoor zekerheid op een duurzaam en betrouwbaar gebruiksleven van de airco gegarandeerd is.\n\nDeze airco set gebruikt het nieuwe R32 koelmiddel, dat is zowel efficiënter als milieuvriendelijker dan andere koelmiddelen op de markt. Zijn ontwerp maken het tot een strakke oplossing voor uw binnenklimaat die ook nog eens makkelijk in gebruik is.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "345 x 998 x 210 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": "44 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1 kg",
      "Global warming potential (GWP)": "675",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "1.56 kW",
      "Opgenomen vermogen bij koelen (max)": "1.56 kW",
      "Koelcapaciteit (min)": "0.9 kW",
      "Koelcapaciteit (max)": "5.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.61 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.61 kW",
      "Verwarmingscapaciteit (min)": "0.9 kW",
      "Verwarmingscapaciteit (max)": "6.4 kW",
      "EER (koeling)": "3.2",
      "COP (verwarming)": "3.6",
      "SEER (koeling)": "7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "250 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "345 mm",
      "Breedte binnenunit": "998 mm",
      "Diepte binnenunit": "210 mm",
      "Gewicht binnenunit": "11.9 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "34.4 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "480 m³/h",
      "Luchtdebiet koelen (max)": "930 m³/h",
      "Luchtdebiet verwarmen (min)": "660 m³/h",
      "Luchtdebiet verwarmen (max)": "960 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "31 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "44 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "44 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "55 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "5,0 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001892_81001886_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001892_81001886_main.webp",
        "type": "main",
        "filename": "81001892_81001886_main.webp"
      },
      {
        "path": "/images/airco-products/81001892_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001892_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001892_81001886_dimensions.webp",
        "type": "dimensions",
        "filename": "81001892_81001886_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001892_81001892_energy.webp",
        "type": "energy",
        "filename": "81001892_81001892_energy.webp"
      },
      {
        "path": "/images/airco-products/81001892_energy.webp",
        "type": "energy",
        "filename": "81001892_energy.webp"
      },
      {
        "path": "/images/airco-products/81001892_81001410_other3.webp",
        "type": "other",
        "filename": "81001892_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001892_81001627_other2.webp",
        "type": "other",
        "filename": "81001892_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001892_81001627_other3.webp",
        "type": "other",
        "filename": "81001892_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001892_81001627_other4.webp",
        "type": "other",
        "filename": "81001892_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001892_81001886_other1.webp",
        "type": "other",
        "filename": "81001892_81001886_other1.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-standard-plus-smart-inverter-airco-r32-50-kw-set/29402/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001892_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001892_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001892_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001892_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001892_Specification_Sheet_NL-1.pdf",
        "name": "Specification Sheet NL 1"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001892_Specification_Sheet_NL-2.pdf",
        "name": "Specification Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21520_81001892_Environmental_Performance_Report_EN.PDF.pdf",
        "name": "Environmental Performance Report EN"
      }
    ]
  },
  {
    "id": "81001895",
    "sku": "AKTIE-PC24ST-SET",
    "name": "LG Standard Plus Smart Inverter airco R32 7,0 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "7.0",
    "coolingCapacity": "7.42",
    "heatingCapacity": "8.64",
    "description": "Deze inverter van LG, bestaande uit de LG PC24ST binnen- en buitenunit, is gemaakt om kleinere ruimtes, efficiënt te verkoelen of te verwarmen. De airco is erg slim en gebruiksvriendelijk doordat het verbonden is met je wifi-netwerk en kan daardoor op afstand bestuurd worden. Zo kan het een goede oplossing bieden voor het binnenklimaat van jouw woonruimte of kantoor.\n\nDoor zijn compacte formaat en zijn geruisloze werking is deze airco unit uitermate geschikt voor kleine en middelgrote kamers waar stilte belangrijk is. Met zijn SEER van 6,9 en SCOP van 3,4 wordt heel het jaar door een aangenaam binnenklimaat op efficiënte wijze gecreëerd.\n\nDe LG Standard Plus Smart Inverter set wordt geleverd met een binnen en buitenset. LG biedt op de producten 5 jaar garantie, waardoor zekerheid op een duurzaam en betrouwbaar gebruiksleven van de airco gegarandeerd is.\n\nDeze airco set gebruikt het nieuwe R32 koelmiddel, dat is zowel efficiënter als milieuvriendelijker dan andere koelmiddelen op de markt. Zijn ontwerp maken het tot een strakke oplossing voor uw binnenklimaat die ook nog eens makkelijk in gebruik is.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "345 x 998 x 210 mm",
      "buitenunit": "650 x 870 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.9",
    "scop": null,
    "soundLevel": "47 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.1 kg",
      "Global warming potential (GWP)": "743",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "25 A",
      "Opgenomen vermogen bij koelen (min)": "2.16 kW",
      "Opgenomen vermogen bij koelen (max)": "2.16 kW",
      "Koelcapaciteit (min)": "0.9 kW",
      "Koelcapaciteit (max)": "7.42 kW",
      "Opgenomen vermogen bij verwarmen (min)": "2.24 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.24 kW",
      "Verwarmingscapaciteit (min)": "0.9 kW",
      "Verwarmingscapaciteit (max)": "8.64 kW",
      "EER (koeling)": "3.05",
      "COP (verwarming)": "3.35",
      "SEER (koeling)": "6.9",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "335 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "345 mm",
      "Breedte binnenunit": "998 mm",
      "Diepte binnenunit": "210 mm",
      "Gewicht binnenunit": "12.7 kg",
      "Hoogte buitenunit": "650 mm",
      "Breedte buitenunit": "870 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "46 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "480 m³/h",
      "Luchtdebiet koelen (max)": "1098 m³/h",
      "Luchtdebiet verwarmen (min)": "660 m³/h",
      "Luchtdebiet verwarmen (max)": "1056 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "31 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "47 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "65 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "57 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "57 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "70 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "70 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.5 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "15 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "7,0 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001895_81001886_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001895_81001886_main.webp",
        "type": "main",
        "filename": "81001895_81001886_main.webp"
      },
      {
        "path": "/images/airco-products/81001895_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001895_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001895_81001886_dimensions.webp",
        "type": "dimensions",
        "filename": "81001895_81001886_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001895_81001895_energy.webp",
        "type": "energy",
        "filename": "81001895_81001895_energy.webp"
      },
      {
        "path": "/images/airco-products/81001895_energy.webp",
        "type": "energy",
        "filename": "81001895_energy.webp"
      },
      {
        "path": "/images/airco-products/81001895_81001410_other3.webp",
        "type": "other",
        "filename": "81001895_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001895_81001627_other2.webp",
        "type": "other",
        "filename": "81001895_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001895_81001627_other3.webp",
        "type": "other",
        "filename": "81001895_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001895_81001627_other4.webp",
        "type": "other",
        "filename": "81001895_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001895_81001886_other1.webp",
        "type": "other",
        "filename": "81001895_81001886_other1.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-standard-plus-smart-inverter-airco-r32-70-kw-set/29401/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001895_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001895_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001895_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001895_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001895_Specification_Sheet_NL-1.pdf",
        "name": "Specification Sheet NL 1"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001895_Specification_Sheet_NL-2.pdf",
        "name": "Specification Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21521_81001895_Environmental_Performance_Report_EN.PDF.pdf",
        "name": "Environmental Performance Report EN"
      }
    ]
  },
  {
    "id": "81001948",
    "sku": "LG-AB09BK-SET",
    "name": "LG Artcool Beige Inverter airco R32 2,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": "3.7",
    "heatingCapacity": "4.1",
    "description": "De LG AB09BK R32 2,5 kW Artcool Beige Inverter set combineert verfijnde esthetiek met hoogwaardige prestaties, ideaal voor zowel thuisgebruik als commerciële toepassingen. Met een koelcapaciteit van 2,5 kW en voorzien van geavanceerde invertertechnologie, biedt deze airconditioner efficiënte en betrouwbare prestaties met een laag energieverbruik. Het unieke Artcool Beige design zorgt voor een stijlvolle en moderne uitstraling die perfect in elk interieur past. Met een SEER van 7,00 W/W en een SCOP van 4,00/4,90 W/W, levert deze airco uitstekende energie-efficiëntie, ongeacht het seizoen.\n\nDe LG AB09BK 2,5kW Artcool Beige is perfect geschikt voor kleinere ruimtes tot 40 m², zoals slaapkamers, kantoren en kleine woonkamers. Het systeem biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. De set wordt compleet geleverd met een installatiekit en een duidelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. LG biedt een garantie van 5 jaar op deze airconditioner, wat extra zekerheid biedt voor de lange levensduur en betrouwbaarheid van het apparaat.\n\nDe LG AB09BK Artcool Beige 2,5 kW onderscheidt zich door zijn stijlvolle design, energie-efficiëntie en betrouwbare prestaties. Met een SEER van 7,00 en een SCOP van 4,00/4,90 biedt deze airconditioner uitstekende prestaties het hele jaar door. Het moderne Artcool Beige ontwerp, gecombineerd met het milieuvriendelijke R32 koelmiddel en de stille werking, maken dit apparaat tot een ideale keuze voor zowel residentiële als commerciële omgevingen. De lange levensduur en onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en elegante oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "308 x 837 x 192 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.7 kg",
      "Global warming potential (GWP)": "473",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "0.656 kW",
      "Opgenomen vermogen bij koelen (max)": "0.656 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "3.7 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.8 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.8 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "4.1 kW",
      "EER (koeling)": "3.81",
      "COP (verwarming)": "4.13",
      "SEER (koeling)": "7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "125 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "308 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "192 mm",
      "Gewicht binnenunit": "9.9 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "25.1 kg",
      "Kleur binnenunit": "Overig",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "180 m³/h",
      "Luchtdebiet koelen (max)": "750 m³/h",
      "Luchtdebiet verwarmen (min)": "336 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.1 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "7 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001948_81001948_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001948_81001948_main.webp",
        "type": "main",
        "filename": "81001948_81001948_main.webp"
      },
      {
        "path": "/images/airco-products/81001948_main.webp",
        "type": "main",
        "filename": "81001948_main.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_dimensions.webp",
        "type": "dimensions",
        "filename": "81001948_81001948_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001948_81001948_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001948_dimensions.webp",
        "type": "dimensions",
        "filename": "81001948_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001948_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001948_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_energy.webp",
        "type": "energy",
        "filename": "81001948_81001948_energy.webp"
      },
      {
        "path": "/images/airco-products/81001948_energy.webp",
        "type": "energy",
        "filename": "81001948_energy.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_other1.webp",
        "type": "other",
        "filename": "81001948_81001948_other1.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_other2.webp",
        "type": "other",
        "filename": "81001948_81001948_other2.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_other3.webp",
        "type": "other",
        "filename": "81001948_81001948_other3.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_other4.webp",
        "type": "other",
        "filename": "81001948_81001948_other4.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_other5.webp",
        "type": "other",
        "filename": "81001948_81001948_other5.webp"
      },
      {
        "path": "/images/airco-products/81001948_81001948_other6.webp",
        "type": "other",
        "filename": "81001948_81001948_other6.webp"
      },
      {
        "path": "/images/airco-products/81001948_other1.webp",
        "type": "other",
        "filename": "81001948_other1.webp"
      },
      {
        "path": "/images/airco-products/81001948_other2.webp",
        "type": "other",
        "filename": "81001948_other2.webp"
      },
      {
        "path": "/images/airco-products/81001948_other3.webp",
        "type": "other",
        "filename": "81001948_other3.webp"
      },
      {
        "path": "/images/airco-products/81001948_other4.webp",
        "type": "other",
        "filename": "81001948_other4.webp"
      },
      {
        "path": "/images/airco-products/81001948_other5.webp",
        "type": "other",
        "filename": "81001948_other5.webp"
      },
      {
        "path": "/images/airco-products/81001948_other6.webp",
        "type": "other",
        "filename": "81001948_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-artcool-beige-inverter-airco-r32-25-kw-set/29392/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001948_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001948_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001948_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001948_Technical_document_EN.pdf",
        "name": "Technical Document EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001948_Dimensions.pdf",
        "name": "Dimensions"
      }
    ]
  },
  {
    "id": "81001951",
    "sku": "LG-AB12BK-SET",
    "name": "LG Artcool Beige Inverter airco R32 3,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "3.5",
    "coolingCapacity": "4.04",
    "heatingCapacity": "5.1",
    "description": "De LG AB12BK R32 3,5 kW Artcool Beige Inverter set combineert een verfijnd design met geavanceerde prestaties, perfect voor zowel thuisgebruik als zakelijke toepassingen. Met een koelcapaciteit van 3,5 kW en voorzien van geavanceerde invertertechnologie, levert deze airconditioner efficiënte en betrouwbare prestaties met een laag energieverbruik. Het unieke Artcool Beige design biedt een stijlvolle en moderne uitstraling die naadloos in elk interieur past. Met een SEER van 6,60 W/W en een SCOP van 4,0 W/W, biedt deze airco degelijke energie-efficiëntie, ongeacht het seizoen. Het apparaat heeft een energielabel van A++, wat bijdraagt aan lagere energiekosten en milieubewust gebruik.\n\nDe LG AB12BK 3,5 kW Artcool Beige is ideaal voor middelgrote ruimtes tot 60 m², zoals woonkamers, slaapkamers en kantoren. Het systeem biedt betrouwbare koeling en verwarming, waardoor het geschikt is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. De set wordt compleet geleverd met een installatiekit en een duidelijke handleiding, waardoor de installatie snel en probleemloos kan worden uitgevoerd. De LG AB12BK wordt geleverd met een garantie van 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van het apparaat.\n\nDe LG AB12BK Artcool Beige 3,5 kW onderscheidt zich door zijn combinatie van stijlvol design, energie-efficiëntie en betrouwbare prestaties. Met een SEER van 6,60 en een SCOP van 3,81 biedt deze airconditioner solide prestaties het hele jaar door. Het moderne Artcool Beige ontwerp, het gebruik van het milieuvriendelijke R32 koelmiddel en de stille werking maken dit apparaat tot een uitstekende keuze voor zowel residentiële als commerciële omgevingen. De lange levensduur en onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en esthetische oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "308 x 837 x 192 mm",
      "buitenunit": "494 x 717 x 230 mm"
    },
    "energyLabel": "A++",
    "seer": "6.6",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.7 kg",
      "Global warming potential (GWP)": "473",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "1.08 kW",
      "Opgenomen vermogen bij koelen (max)": "1.08 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "4.04 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.05 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.05 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "5.1 kW",
      "EER (koeling)": "3.24",
      "COP (verwarming)": "2.81",
      "SEER (koeling)": "6.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "186 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "308 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "192 mm",
      "Gewicht binnenunit": "9.9 kg",
      "Hoogte buitenunit": "494 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "25.1 kg",
      "Kleur binnenunit": "Overig",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "180 m³/h",
      "Luchtdebiet koelen (max)": "750 m³/h",
      "Luchtdebiet verwarmen (min)": "336 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.3 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "7 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001951_81001948_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001951_81001948_main.webp",
        "type": "main",
        "filename": "81001951_81001948_main.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001948_dimensions.webp",
        "type": "dimensions",
        "filename": "81001951_81001948_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001948_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001951_81001948_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001951_energy.webp",
        "type": "energy",
        "filename": "81001951_81001951_energy.webp"
      },
      {
        "path": "/images/airco-products/81001951_energy.webp",
        "type": "energy",
        "filename": "81001951_energy.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001948_other1.webp",
        "type": "other",
        "filename": "81001951_81001948_other1.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001948_other2.webp",
        "type": "other",
        "filename": "81001951_81001948_other2.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001948_other3.webp",
        "type": "other",
        "filename": "81001951_81001948_other3.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001948_other4.webp",
        "type": "other",
        "filename": "81001951_81001948_other4.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001948_other5.webp",
        "type": "other",
        "filename": "81001951_81001948_other5.webp"
      },
      {
        "path": "/images/airco-products/81001951_81001948_other6.webp",
        "type": "other",
        "filename": "81001951_81001948_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-artcool-beige-inverter-airco-r32-35-kw-set/29391/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001951_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001951_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001951_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001951_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001951_Technical_document_EN.pdf",
        "name": "Technical Document EN"
      }
    ]
  },
  {
    "id": "81001954",
    "sku": "LG-AB18BK-SET",
    "name": "LG Artcool Beige Inverter airco R32 5,0 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "5.0",
    "coolingCapacity": "5.5",
    "heatingCapacity": "6.4",
    "description": "De LG AB18BK R32 5,0 kW Artcool Beige Inverter set biedt een perfecte balans tussen elegant design en krachtige prestaties, ideaal voor zowel residentiële als commerciële toepassingen. Met een koelcapaciteit van 5,0 kW en voorzien van geavanceerde invertertechnologie, levert deze airconditioner uitzonderlijke efficiëntie met een laag energieverbruik. Het Artcool Beige design zorgt voor een moderne en verfijnde uitstraling die moeiteloos in elk interieur past. Met een SEER van 7,00 W/W en een SCOP van 4,30/5,30 W/W, garandeert deze airco uitstekende energie-efficiëntie gedurende het hele jaar. Het apparaat heeft een energielabel van A++, wat bijdraagt aan lagere energiekosten en een milieuvriendelijke werking.\n\nDe LG AB18BK 5,0 kW Artcool Beige is uitstekend geschikt voor grotere ruimtes tot 80 m², zoals ruime woonkamers, grote slaapkamers en kantoren. Het systeem biedt betrouwbare koeling en verwarming, wat het ideaal maakt voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. De set wordt geleverd met een complete installatiekit en een duidelijke handleiding, waardoor de installatie snel en efficiënt kan worden uitgevoerd. LG biedt een garantie van 5 jaar op deze airconditioner, wat extra zekerheid biedt voor de lange levensduur en betrouwbaarheid van het apparaat.\n\nDe LG AB18BK Artcool Beige 5,0 kW onderscheidt zich door zijn combinatie van geavanceerde technologie, energie-efficiëntie en elegant design. Met een SEER van 7,00 en een SCOP van 4,30/5,30 biedt deze airconditioner uitstekende prestaties, ongeacht het seizoen. Het moderne Artcool Beige ontwerp, gecombineerd met het milieuvriendelijke R32 koelmiddel en de stille werking, maken dit apparaat tot een uitstekende keuze voor zowel woonhuizen als commerciële omgevingen. De lange levensduur en onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en stijlvolle oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "345 x 998 x 212 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": "44 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1 kg",
      "Global warming potential (GWP)": "675",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "1.56 kW",
      "Opgenomen vermogen bij koelen (max)": "1.56 kW",
      "Koelcapaciteit (min)": "0.9 kW",
      "Koelcapaciteit (max)": "5.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.61 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.61 kW",
      "Verwarmingscapaciteit (min)": "0.9 kW",
      "Verwarmingscapaciteit (max)": "6.4 kW",
      "EER (koeling)": "3.2",
      "COP (verwarming)": "3.6",
      "SEER (koeling)": "7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "250 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "345 mm",
      "Breedte binnenunit": "998 mm",
      "Diepte binnenunit": "212 mm",
      "Gewicht binnenunit": "12.8 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "34.4 kg",
      "Kleur binnenunit": "Overig",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "450 m³/h",
      "Luchtdebiet koelen (max)": "930 m³/h",
      "Luchtdebiet verwarmen (min)": "660 m³/h",
      "Luchtdebiet verwarmen (max)": "960 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "31 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "44 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "44 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "55 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "5,0 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001954_81001948_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001954_81001948_main.webp",
        "type": "main",
        "filename": "81001954_81001948_main.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001948_dimensions.webp",
        "type": "dimensions",
        "filename": "81001954_81001948_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001948_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001954_81001948_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001954_energy.webp",
        "type": "energy",
        "filename": "81001954_81001954_energy.webp"
      },
      {
        "path": "/images/airco-products/81001954_energy.webp",
        "type": "energy",
        "filename": "81001954_energy.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001948_other1.webp",
        "type": "other",
        "filename": "81001954_81001948_other1.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001948_other2.webp",
        "type": "other",
        "filename": "81001954_81001948_other2.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001948_other3.webp",
        "type": "other",
        "filename": "81001954_81001948_other3.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001948_other4.webp",
        "type": "other",
        "filename": "81001954_81001948_other4.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001948_other5.webp",
        "type": "other",
        "filename": "81001954_81001948_other5.webp"
      },
      {
        "path": "/images/airco-products/81001954_81001948_other6.webp",
        "type": "other",
        "filename": "81001954_81001948_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-artcool-beige-inverter-airco-r32-50-kw-set/29390/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001954_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001954_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001954_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001954_Product_Sheet_EN.pdf",
        "name": "Product Sheet EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001954_Technical_document_EN.pdf",
        "name": "Technical Document EN"
      }
    ]
  },
  {
    "id": "81001957",
    "sku": "LG-AB24BK-SET",
    "name": "LG Artcool Beige Inverter airco R32 7,0 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "7.0",
    "coolingCapacity": "7.42",
    "heatingCapacity": "8.64",
    "description": "De LG AB24BK R32 7,0 kW Artcool Beige Inverter set combineert krachtig vermogen met elegant design, waardoor het de ideale keuze is voor zowel residentiële als commerciële toepassingen. Met een koelcapaciteit van 7,0 kW en uitgerust met geavanceerde invertertechnologie, levert deze airconditioner betrouwbare en efficiënte prestaties met een laag energieverbruik. Het stijlvolle Artcool Beige ontwerp voegt een moderne en verfijnde esthetiek toe aan elk interieur. Met een SEER van 6,90 W/W en een SCOP van 4,30/5,30 W/W, biedt deze airco uitstekende energie-efficiëntie gedurende het hele jaar. Het apparaat heeft een energielabel van A++, wat bijdraagt aan lagere energiekosten en een milieuvriendelijke werking.\n\nDe LG AB24BK 7,0 kW Artcool Beige is perfect geschikt voor grotere ruimtes tot 100 m², zoals ruime woonkamers, grote slaapkamers en kantoren. Het systeem biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. De set wordt geleverd met een complete installatiekit en een duidelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. LG biedt een garantie van 5 jaar op deze airconditioner, wat extra zekerheid biedt voor de lange levensduur en betrouwbaarheid van het apparaat.\n\nDe LG AB24BK Artcool Beige 7,0 kW onderscheidt zich door zijn combinatie van geavanceerde technologie, energie-efficiëntie en een stijlvol design. Met een SEER van 6,90 en een SCOP van 4,30/5,30 biedt deze airconditioner betrouwbare prestaties, ongeacht het seizoen. Het elegante Artcool Beige ontwerp, gecombineerd met het milieuvriendelijke R32 koelmiddel en de stille werking, maken dit apparaat tot een uitstekende keuze voor zowel woonhuizen als commerciële ruimtes. De lange levensduur en onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en aantrekkelijke oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "345 x 998 x 212 mm",
      "buitenunit": "650 x 870 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.9",
    "scop": null,
    "soundLevel": "47 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.1 kg",
      "Global warming potential (GWP)": "743",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "25 A",
      "Opgenomen vermogen bij koelen (min)": "2.16 kW",
      "Opgenomen vermogen bij koelen (max)": "2.16 kW",
      "Koelcapaciteit (min)": "0.9 kW",
      "Koelcapaciteit (max)": "7.42 kW",
      "Opgenomen vermogen bij verwarmen (min)": "2.24 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.24 kW",
      "Verwarmingscapaciteit (min)": "0.9 kW",
      "Verwarmingscapaciteit (max)": "8.64 kW",
      "EER (koeling)": "3.05",
      "COP (verwarming)": "3.35",
      "SEER (koeling)": "6.9",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "335 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "345 mm",
      "Breedte binnenunit": "998 mm",
      "Diepte binnenunit": "212 mm",
      "Gewicht binnenunit": "13.5 kg",
      "Hoogte buitenunit": "650 mm",
      "Breedte buitenunit": "870 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "46 kg",
      "Kleur binnenunit": "Overig",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "480 m³/h",
      "Luchtdebiet koelen (max)": "1098 m³/h",
      "Luchtdebiet verwarmen (min)": "660 m³/h",
      "Luchtdebiet verwarmen (max)": "1056 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "31 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "47 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "65 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "57 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "57 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "70 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "70 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.5 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "15 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "7,0 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001957_81001948_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001957_81001948_main.webp",
        "type": "main",
        "filename": "81001957_81001948_main.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001948_dimensions.webp",
        "type": "dimensions",
        "filename": "81001957_81001948_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001948_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001957_81001948_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001957_energy.webp",
        "type": "energy",
        "filename": "81001957_81001957_energy.webp"
      },
      {
        "path": "/images/airco-products/81001957_energy.webp",
        "type": "energy",
        "filename": "81001957_energy.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001948_other1.webp",
        "type": "other",
        "filename": "81001957_81001948_other1.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001948_other2.webp",
        "type": "other",
        "filename": "81001957_81001948_other2.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001948_other3.webp",
        "type": "other",
        "filename": "81001957_81001948_other3.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001948_other4.webp",
        "type": "other",
        "filename": "81001957_81001948_other4.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001948_other5.webp",
        "type": "other",
        "filename": "81001957_81001948_other5.webp"
      },
      {
        "path": "/images/airco-products/81001957_81001948_other6.webp",
        "type": "other",
        "filename": "81001957_81001948_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-artcool-beige-inverter-airco-r32-70-kw-set/29389/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001957_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001957_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001957_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001957_Product_Sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001957_Technical_document_EN.pdf",
        "name": "Technical Document EN"
      }
    ]
  },
  {
    "id": "81001916",
    "sku": "H09S1D-SET",
    "name": "LG Dualcool Deluxe Dual Inverter airco R32 2,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": "3.8",
    "heatingCapacity": "4.9",
    "description": "De LG Dualcool Deluxe 2,5 kW Dual Inverter set, met artikelnummer H09S1D-SET, is een hoogwaardige airconditioner, speciaal ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 2,5 kW en voorzien van de innovatieve Dual Inverter technologie, biedt deze airco uitstekende prestaties met een laag energieverbruik. Dankzij de ingebouwde wifi-functie kunt u het apparaat eenvoudig op afstand bedienen via uw smartphone, waardoor u altijd verzekerd bent van een optimaal binnenklimaat. De airco beschikt over een SEER van 8,70 W/W en een SCOP van 4,60/5,70 W/W, wat zorgt voor hoge energie-efficiëntie gedurende het hele jaar. Het geluidsniveau van de binnenunit is slechts 19 dB(A), terwijl de buitenunit een geluidsniveau van 49 dB(A) heeft.\n\nDe LG Dualcool Deluxe 2,5 kW is perfect geschikt voor gebruik in kleine tot middelgrote ruimtes tot 50 m² zoals slaapkamers, kantoren en woonkamers. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomerdagen als koude wintermaanden.\n\nDeze airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De airco wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De garantieperiode op de LG Dualcool Deluxe bedraagt 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG Dualcool Deluxe 2,5 kW onderscheidt zich door zijn Dual Inverter technologie, energie-efficiëntie en stille werking. Met een SEER van 8,70 en een SCOP van 4,60/5,70 biedt deze airco betrouwbare prestaties en efficiëntie het hele jaar door. De slimme functies zoals wifi-connectiviteit, het A+++ energielabel en het stille ontwerp maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 19 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "307 x 895 x 235 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A+++",
    "seer": "8.7",
    "scop": null,
    "soundLevel": "40 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.8 kg",
      "Global warming potential (GWP)": "540",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "0.56 kW",
      "Opgenomen vermogen bij koelen (max)": "0.56 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "3.8 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.7 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.7 kW",
      "Verwarmingscapaciteit (min)": "0.65 kW",
      "Verwarmingscapaciteit (max)": "4.9 kW",
      "EER (koeling)": "4.5",
      "COP (verwarming)": "4.57",
      "SEER (koeling)": "8.7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "103 kWh",
      "Energie-efficiëntieklasse koelen": "A+++",
      "Hoogte binnenunit": "307 mm",
      "Breedte binnenunit": "895 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "11 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "25.1 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "120 m³/h",
      "Luchtdebiet koelen (max)": "816 m³/h",
      "Luchtdebiet verwarmen (min)": "342 m³/h",
      "Luchtdebiet verwarmen (max)": "630 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "40 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "40 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "51 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.15 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "7 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001916_81001910_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001916_81001910_main.webp",
        "type": "main",
        "filename": "81001916_81001910_main.webp"
      },
      {
        "path": "/images/airco-products/81001916_81001916_dimensions.webp",
        "type": "dimensions",
        "filename": "81001916_81001916_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001916_dimensions.webp",
        "type": "dimensions",
        "filename": "81001916_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001916_81001914_energy.webp",
        "type": "energy",
        "filename": "81001916_81001914_energy.webp"
      },
      {
        "path": "/images/airco-products/81001916_81001910_other1.webp",
        "type": "other",
        "filename": "81001916_81001910_other1.webp"
      },
      {
        "path": "/images/airco-products/81001916_81001910_other2.webp",
        "type": "other",
        "filename": "81001916_81001910_other2.webp"
      },
      {
        "path": "/images/airco-products/81001916_81001910_other3.webp",
        "type": "other",
        "filename": "81001916_81001910_other3.webp"
      },
      {
        "path": "/images/airco-products/81001916_81001910_other4.webp",
        "type": "other",
        "filename": "81001916_81001910_other4.webp"
      },
      {
        "path": "/images/airco-products/81001916_81001910_other5.webp",
        "type": "other",
        "filename": "81001916_81001910_other5.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-dualcool-deluxe-dual-inverter-airco-r32-25-kw-set/29632/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001916_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001916_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001916_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001916_Technical_Document_NL_EN.pdf",
        "name": "Technical Document NL EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      }
    ]
  },
  {
    "id": "81001919",
    "sku": "H12S1D-SET",
    "name": "LG Dualcool Deluxe Dual Inverter airco R32 3,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "3.5",
    "coolingCapacity": "4.2",
    "heatingCapacity": "5.4",
    "description": "De LG Dualcool Premium 3,5 kW Dual Inverter set is een hoogwaardige airconditioner, speciaal ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 3,5 kW en voorzien van de geavanceerde Dual Inverter technologie, biedt deze airco uitstekende prestaties met een zeer laag energieverbruik. Dankzij de ingebouwde wifi-functie kunt u het apparaat eenvoudig op afstand bedienen via uw smartphone, waardoor u altijd verzekerd bent van een optimaal binnenklimaat. De airco beschikt over een SEER van 9,5 W/W en een SCOP van 5,10/6,10 W/W, wat zorgt voor uitzonderlijke energie-efficiëntie gedurende het hele jaar. Het geluidsniveau van de binnenunit is slechts 19 dB(A), terwijl de buitenunit een geluidsniveau van 49 dB(A) heeft.\n\nDe LG Dualcool Deluxe 3,5 kW is perfect geschikt voor gebruik in middelgrote tot grote ruimtes tot 70 m² zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomerdagen als koude wintermaanden.\n\nDeze airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De airco wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De garantieperiode op de LG Dualcool Deluxe bedraagt 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG Dualcool Premium 3,5 kW onderscheidt zich door zijn Dual Inverter technologie, energie-efficiëntie en stille werking. Met een SEER van 9,5 en een SCOP van 5,10/6,10 biedt deze airco superieure prestaties en efficiëntie het hele jaar door. De slimme functies zoals wifi-connectiviteit, het A+++ energielabel en het stijlvolle ontwerp maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het extreem lage geluidsniveau van 19 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "307 x 895 x 235 mm",
      "buitenunit": "495 x 717 x 230 mm"
    },
    "energyLabel": "A+++",
    "seer": "8.5",
    "scop": null,
    "soundLevel": "40 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.8 kg",
      "Global warming potential (GWP)": "540",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "0.89 kW",
      "Opgenomen vermogen bij koelen (max)": "0.89 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "4.2 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.92 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.92 kW",
      "Verwarmingscapaciteit (min)": "0.65 kW",
      "Verwarmingscapaciteit (max)": "5.4 kW",
      "EER (koeling)": "3.93",
      "COP (verwarming)": "4.35",
      "SEER (koeling)": "8.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "144 kWh",
      "Energie-efficiëntieklasse koelen": "A+++",
      "Hoogte binnenunit": "307 mm",
      "Breedte binnenunit": "895 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "11 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "717 mm",
      "Diepte buitenunit": "230 mm",
      "Gewicht buitenunit": "25.1 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "120 m³/h",
      "Luchtdebiet koelen (max)": "816 m³/h",
      "Luchtdebiet verwarmen (min)": "342 m³/h",
      "Luchtdebiet verwarmen (max)": "630 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "40 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "40 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "51 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.3 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "7 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001919_81001910_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001919_81001910_main.webp",
        "type": "main",
        "filename": "81001919_81001910_main.webp"
      },
      {
        "path": "/images/airco-products/81001919_81001910_dimensions.webp",
        "type": "dimensions",
        "filename": "81001919_81001910_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001919_81001910_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001919_81001910_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001919_81001917_energy.webp",
        "type": "energy",
        "filename": "81001919_81001917_energy.webp"
      },
      {
        "path": "/images/airco-products/81001919_81001910_other1.webp",
        "type": "other",
        "filename": "81001919_81001910_other1.webp"
      },
      {
        "path": "/images/airco-products/81001919_81001910_other2.webp",
        "type": "other",
        "filename": "81001919_81001910_other2.webp"
      },
      {
        "path": "/images/airco-products/81001919_81001910_other3.webp",
        "type": "other",
        "filename": "81001919_81001910_other3.webp"
      },
      {
        "path": "/images/airco-products/81001919_81001910_other4.webp",
        "type": "other",
        "filename": "81001919_81001910_other4.webp"
      },
      {
        "path": "/images/airco-products/81001919_81001910_other5.webp",
        "type": "other",
        "filename": "81001919_81001910_other5.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-dualcool-deluxe-dual-inverter-airco-r32-35-kw-set/29634/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001919_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001919_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001919_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001919_Technical_Document_NL_EN.pdf",
        "name": "Technical Document NL EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      }
    ]
  },
  {
    "id": "81001922",
    "sku": "H18S1DA-SET",
    "name": "LG Dualcool Deluxe Dual Inverter airco R32 5,0 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "5.0",
    "coolingCapacity": "5.5",
    "heatingCapacity": "6.4",
    "description": "De LG Dualcool Deluxe 5,0 kW Dual Inverter set is een krachtige en efficiënte airconditioner, ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 5,0 kW en uitgerust met de geavanceerde Dual Inverter technologie, biedt deze airco uitstekende prestaties met een laag energieverbruik. De ingebouwde wifi-functie maakt het mogelijk om de airco eenvoudig op afstand te bedienen via een smartphone, zodat u altijd verzekerd bent van een optimaal binnenklimaat. Met een SEER van 7,00 W/W en een SCOP van 4,30/5,60 W/W zorgt deze airco voor betrouwbare energie-efficiëntie, ongeacht het seizoen. Het geluidsniveau van de binnenunit is slechts 29 dB(A), terwijl de buitenunit een geluidsniveau van 53 dB(A) heeft.\n\nDe LG Dualcool Deluxe 5,0 kW is ideaal voor gebruik in grotere ruimtes tot 90 m², zoals woonkamers, grote slaapkamers, kantoren en vergaderruimtes. Deze airco biedt betrouwbare koeling en verwarming, waardoor hij perfect is voor zowel warme zomers als koude winters.\n\nDeze airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. Het apparaat wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De LG Dualcool Deluxe wordt geleverd met een garantie van 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG Dualcool Deluxe 5,0 kW onderscheidt zich door zijn combinatie van geavanceerde technologie, energie-efficiëntie en stille werking. Met een SEER van 7,00 en een SCOP van 4,30/5,60 biedt deze airco uitstekende prestaties het hele jaar door. De wifi-connectiviteit, het A++ energielabel en het doordachte ontwerp maken dit apparaat tot een ideale keuze voor zowel zakelijke als particuliere gebruikers. Bovendien zorgen de lange levensduur, het lage geluidsniveau van 29 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen ervoor dat deze airco een kosteneffectieve en betrouwbare oplossing is voor elk binne\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "307 x 895 x 235 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": "47 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.05 kg",
      "Global warming potential (GWP)": "710",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "1.55 kW",
      "Opgenomen vermogen bij koelen (max)": "1.55 kW",
      "Koelcapaciteit (min)": "0.9 kW",
      "Koelcapaciteit (max)": "5.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.57 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.57 kW",
      "Verwarmingscapaciteit (min)": "0.9 kW",
      "Verwarmingscapaciteit (max)": "6.4 kW",
      "EER (koeling)": "3.24",
      "COP (verwarming)": "3.72",
      "SEER (koeling)": "7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "250 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "307 mm",
      "Breedte binnenunit": "895 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "12.5 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "34.4 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "486 m³/h",
      "Luchtdebiet koelen (max)": "816 m³/h",
      "Luchtdebiet verwarmen (min)": "486 m³/h",
      "Luchtdebiet verwarmen (max)": "702 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "29 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "47 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "65 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "55 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "5,0 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001922_81001910_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001922_81001910_main.webp",
        "type": "main",
        "filename": "81001922_81001910_main.webp"
      },
      {
        "path": "/images/airco-products/81001922_81001922_dimensions.webp",
        "type": "dimensions",
        "filename": "81001922_81001922_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001922_81001922_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001922_81001922_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001922_dimensions.webp",
        "type": "dimensions",
        "filename": "81001922_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001922_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001922_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001922_81001922_energy.webp",
        "type": "energy",
        "filename": "81001922_81001922_energy.webp"
      },
      {
        "path": "/images/airco-products/81001922_energy.webp",
        "type": "energy",
        "filename": "81001922_energy.webp"
      },
      {
        "path": "/images/airco-products/81001922_81001910_other1.webp",
        "type": "other",
        "filename": "81001922_81001910_other1.webp"
      },
      {
        "path": "/images/airco-products/81001922_81001910_other2.webp",
        "type": "other",
        "filename": "81001922_81001910_other2.webp"
      },
      {
        "path": "/images/airco-products/81001922_81001910_other3.webp",
        "type": "other",
        "filename": "81001922_81001910_other3.webp"
      },
      {
        "path": "/images/airco-products/81001922_81001910_other4.webp",
        "type": "other",
        "filename": "81001922_81001910_other4.webp"
      },
      {
        "path": "/images/airco-products/81001922_81001910_other5.webp",
        "type": "other",
        "filename": "81001922_81001910_other5.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-dualcool-deluxe-dual-inverter-airco-r32-50-kw-set/29631/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001922_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001922_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001922_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001922_Technical_Document_NL_EN.pdf",
        "name": "Technical Document NL EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      }
    ]
  },
  {
    "id": "81001925",
    "sku": "H24S1DA-SET",
    "name": "LG Dualcool Deluxe Dual Inverter airco R32 7,0 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "7.0",
    "coolingCapacity": "7.42",
    "heatingCapacity": "8.64",
    "description": "De LG Dualcool Deluxe 7,0 kW Dual Inverter set is een krachtige airconditioner, ideaal voor zowel particuliere als zakelijke toepassingen. Met een indrukwekkende koelcapaciteit van 7,0 kW en uitgerust met de geavanceerde Dual Inverter technologie, levert deze airco betrouwbare prestaties met een laag energieverbruik. Dankzij de ingebouwde wifi-functie kunt u de airco eenvoudig op afstand bedienen via een smartphone, zodat u altijd verzekerd bent van een comfortabel binnenklimaat. De airco heeft een SEER van 6,90 W/W en een SCOP van 4,30/5,60 W/W, wat zorgt voor efficiënte prestaties het hele jaar door. Het geluidsniveau van de binnenunit is 29 dB(A), terwijl de buitenunit een geluidsniveau van 54 dB(A) produceert.\n\nDe LG Dualcool Deluxe 7,0 kW is perfect geschikt voor grotere ruimtes tot 110 m², zoals woonkamers, grote slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het een ideale keuze is voor zowel warme zomers als koude winters.\n\nDeze airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De set wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, waardoor de installatie snel en probleemloos kan worden uitgevoerd. De LG Dualcool Deluxe wordt geleverd met een garantie van 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG Dualcool Deluxe 7,0 kW onderscheidt zich door zijn krachtige prestaties, energie-efficiëntie en stille werking. Met een SEER van 6,90 en een SCOP van 4,30/5,60 biedt deze airco betrouwbare prestaties het hele jaar door. De combinatie van wifi-connectiviteit, het A++ energielabel en het robuuste ontwerp maakt deze airco tot een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 29 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken dit apparaat tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "307 x 895 x 235 mm",
      "buitenunit": "650 x 870 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.9",
    "scop": null,
    "soundLevel": "47 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.15 kg",
      "Global warming potential (GWP)": "780",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "2.16 kW",
      "Opgenomen vermogen bij koelen (max)": "2.16 kW",
      "Koelcapaciteit (min)": "0.9 kW",
      "Koelcapaciteit (max)": "7.42 kW",
      "Opgenomen vermogen bij verwarmen (min)": "2.24 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.24 kW",
      "Verwarmingscapaciteit (min)": "0.9 kW",
      "Verwarmingscapaciteit (max)": "8.64 kW",
      "EER (koeling)": "3.05",
      "COP (verwarming)": "3.35",
      "SEER (koeling)": "6.9",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "335 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "307 mm",
      "Breedte binnenunit": "895 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "12.5 kg",
      "Hoogte buitenunit": "650 mm",
      "Breedte buitenunit": "870 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "46 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "486 m³/h",
      "Luchtdebiet koelen (max)": "888 m³/h",
      "Luchtdebiet verwarmen (min)": "486 m³/h",
      "Luchtdebiet verwarmen (max)": "816 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "29 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "47 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "65 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "57 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "57 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "70 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "70 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.5 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "15 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "7,0 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001925_81001910_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001925_81001910_main.webp",
        "type": "main",
        "filename": "81001925_81001910_main.webp"
      },
      {
        "path": "/images/airco-products/81001925_81001922_dimensions.webp",
        "type": "dimensions",
        "filename": "81001925_81001922_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001925_81001922_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001925_81001922_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001925_81001923_energy.webp",
        "type": "energy",
        "filename": "81001925_81001923_energy.webp"
      },
      {
        "path": "/images/airco-products/81001925_81001910_other1.webp",
        "type": "other",
        "filename": "81001925_81001910_other1.webp"
      },
      {
        "path": "/images/airco-products/81001925_81001910_other2.webp",
        "type": "other",
        "filename": "81001925_81001910_other2.webp"
      },
      {
        "path": "/images/airco-products/81001925_81001910_other3.webp",
        "type": "other",
        "filename": "81001925_81001910_other3.webp"
      },
      {
        "path": "/images/airco-products/81001925_81001910_other4.webp",
        "type": "other",
        "filename": "81001925_81001910_other4.webp"
      },
      {
        "path": "/images/airco-products/81001925_81001910_other5.webp",
        "type": "other",
        "filename": "81001925_81001910_other5.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-dualcool-deluxe-dual-inverter-airco-r32-70-kw-set/29633/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001925_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001925_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001925_Technical_Document_NL_EN.pdf",
        "name": "Technical Document NL EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001925_Manual_EN.pdf",
        "name": "Manual EN"
      }
    ]
  },
  {
    "id": "81001865",
    "sku": "F09MT-SET",
    "name": "LG F09MT Prestige Dual Inverter airco 2,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG Prestige Dual Inverter set bestaat uit twee hoogwaardige binnenunits, de LG-F09MT-NSM en LG-F09MT-U24 , gecombineerd met een krachtige buitenunit, de LG F12MT Prestige Smart Inverter . Deze complete set is perfect geschikt voor het creëren van een comfortabele en energiezuinige leefomgeving, zowel in woon- als slaapkamers.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "550",
      "Capaciteit": "2,5 kW"
    },
    "image": "/images/airco-products/81001865_81001864_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001865_81001864_main.webp",
        "type": "main",
        "filename": "81001865_81001864_main.webp"
      },
      {
        "path": "/images/airco-products/81001865_81001864_dimensions.webp",
        "type": "dimensions",
        "filename": "81001865_81001864_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001865_81001864_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001865_81001864_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001865_81001865_energy.webp",
        "type": "energy",
        "filename": "81001865_81001865_energy.webp"
      },
      {
        "path": "/images/airco-products/81001865_energy.webp",
        "type": "energy",
        "filename": "81001865_energy.webp"
      },
      {
        "path": "/images/airco-products/81001865_81001864_other3.webp",
        "type": "other",
        "filename": "81001865_81001864_other3.webp"
      },
      {
        "path": "/images/airco-products/81001865_81001864_other4.webp",
        "type": "other",
        "filename": "81001865_81001864_other4.webp"
      },
      {
        "path": "/images/airco-products/81001865_81001864_other5.webp",
        "type": "other",
        "filename": "81001865_81001864_other5.webp"
      },
      {
        "path": "/images/airco-products/81001865_81001864_other7.webp",
        "type": "other",
        "filename": "81001865_81001864_other7.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-f09mt-prestige-dual-inverter-airco-25-kw-set/29411/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001865_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_Product_Information_NL.pdf",
        "name": "Product Information NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_Manual_NL.pdf",
        "name": "Manual NL"
      }
    ]
  },
  {
    "id": "81001864",
    "sku": "F12MT-SET",
    "name": "LG F12MT  Prestige Dual Inverter airco 3,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "3.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG DUALCOOL Prestige set bestaat uit twee hoogwaardige binnenunits, de LG-F12MT-NSM en LG-F12MT-U24 . Met een koelcapaciteit van 3,5 kW per unit levert deze set energieprestaties van wereldklasse. Deze binnenunits bieden niet alleen krachtige koeling, maar hebben ook een zeer laag geluidsniveau, waardoor ze perfect zijn voor zowel woon- als slaapkamers. Met de ingebouwde wifi-functionaliteit kan de airconditioner eenvoudig op afstand worden bediend via de LG Smart Thinq app, wat extra comfort en gebruiksgemak biedt.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "550",
      "Capaciteit": "3,5 kW"
    },
    "image": "/images/airco-products/81001864_81001864_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001864_81001864_main.webp",
        "type": "main",
        "filename": "81001864_81001864_main.webp"
      },
      {
        "path": "/images/airco-products/81001864_main.webp",
        "type": "main",
        "filename": "81001864_main.webp"
      },
      {
        "path": "/images/airco-products/81001864_81001864_dimensions.webp",
        "type": "dimensions",
        "filename": "81001864_81001864_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001864_81001864_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001864_81001864_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001864_dimensions.webp",
        "type": "dimensions",
        "filename": "81001864_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001864_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001864_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001864_81001864_other3.webp",
        "type": "other",
        "filename": "81001864_81001864_other3.webp"
      },
      {
        "path": "/images/airco-products/81001864_81001864_other4.webp",
        "type": "other",
        "filename": "81001864_81001864_other4.webp"
      },
      {
        "path": "/images/airco-products/81001864_81001864_other5.webp",
        "type": "other",
        "filename": "81001864_81001864_other5.webp"
      },
      {
        "path": "/images/airco-products/81001864_81001864_other6.webp",
        "type": "other",
        "filename": "81001864_81001864_other6.webp"
      },
      {
        "path": "/images/airco-products/81001864_81001864_other7.webp",
        "type": "other",
        "filename": "81001864_81001864_other7.webp"
      },
      {
        "path": "/images/airco-products/81001864_other3.webp",
        "type": "other",
        "filename": "81001864_other3.webp"
      },
      {
        "path": "/images/airco-products/81001864_other4.webp",
        "type": "other",
        "filename": "81001864_other4.webp"
      },
      {
        "path": "/images/airco-products/81001864_other5.webp",
        "type": "other",
        "filename": "81001864_other5.webp"
      },
      {
        "path": "/images/airco-products/81001864_other6.webp",
        "type": "other",
        "filename": "81001864_other6.webp"
      },
      {
        "path": "/images/airco-products/81001864_other7.webp",
        "type": "other",
        "filename": "81001864_other7.webp"
      },
      {
        "path": "/images/airco-products/81001864_81001864_Energy_label.webp",
        "type": "energy",
        "filename": "81001864_81001864_Energy_label.webp"
      },
      {
        "path": "/images/airco-products/81001864_Energy_label.webp",
        "type": "energy",
        "filename": "81001864_Energy_label.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-f12mt-prestige-dual-inverter-airco-35-kw-set/29412/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_Product_Information_NL.pdf",
        "name": "Product Information NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001864_product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      }
    ]
  },
  {
    "id": "81001910",
    "sku": "H09S1P-SET",
    "name": "LG Dualcool Premium Dual Inverter airco R32 2,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": "4",
    "heatingCapacity": "5.5",
    "description": "De LG H09S1P 2,5 kW Dual Inverter airco is een hoogwaardige airconditioner, speciaal ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 2,5 kW en voorzien van de geavanceerde Dual Inverter technologie, biedt deze airco uitstekende prestaties met een zeer laag energieverbruik. Dankzij de ingebouwde SmartThinQ™-wifi-functie kunt u het apparaat eenvoudig op afstand bedienen via uw smartphone, waardoor u altijd verzekerd bent van een optimaal binnenklimaat. De airco beschikt over een SEER van 9,7 W/W en een SCOP van 5,1 W/W, wat zorgt voor hoge energie-efficiëntie gedurende het hele jaar. Het geluidsniveau van de binnenunit is slechts 19 dB(A), terwijl de buitenunit een geluidsniveau van 49 dB(A) heeft.\n\nDe LG H09S1P is perfect geschikt voor gebruik in middelgrote ruimtes tot 60 m² zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomerdagen als koude wintermaanden.\n\nDeze airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De airco wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De garantieperiode op de LG H09S1P bedraagt 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG H09S1P onderscheidt zich door zijn Dual Inverter technologie, energie-efficiëntie en stille werking. Met een SEER van 6,9 en een SCOP van 5,1 biedt deze airco superieure prestaties en efficiëntie het hele jaar door. De slimme functies zoals SmartThinQ™-connectiviteit, het A+++ energielabel en het stijlvolle ontwerp maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het extreem lage geluidsniveau van 19 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "307 x 895 x 235 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A+++",
    "seer": "9.7",
    "scop": null,
    "soundLevel": "40 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.9 kg",
      "Global warming potential (GWP)": "608",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "0.51 kW",
      "Opgenomen vermogen bij koelen (max)": "0.51 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "4 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.64 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.64 kW",
      "Verwarmingscapaciteit (min)": "0.65 kW",
      "Verwarmingscapaciteit (max)": "5.5 kW",
      "EER (koeling)": "4.9",
      "COP (verwarming)": "5",
      "SEER (koeling)": "9.7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "90 kWh",
      "Energie-efficiëntieklasse koelen": "A+++",
      "Hoogte binnenunit": "307 mm",
      "Breedte binnenunit": "895 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "12.5 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "29.9 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "120 m³/h",
      "Luchtdebiet koelen (max)": "816 m³/h",
      "Luchtdebiet verwarmen (min)": "342 m³/h",
      "Luchtdebiet verwarmen (max)": "630 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "40 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "40 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "51 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.15 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001910_81001910_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001910_81001910_main.webp",
        "type": "main",
        "filename": "81001910_81001910_main.webp"
      },
      {
        "path": "/images/airco-products/81001910_main.webp",
        "type": "main",
        "filename": "81001910_main.webp"
      },
      {
        "path": "/images/airco-products/81001910_81001910_dimensions.webp",
        "type": "dimensions",
        "filename": "81001910_81001910_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001910_81001910_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001910_81001910_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001910_dimensions.webp",
        "type": "dimensions",
        "filename": "81001910_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001910_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001910_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001910_81001910_energy.webp",
        "type": "energy",
        "filename": "81001910_81001910_energy.webp"
      },
      {
        "path": "/images/airco-products/81001910_energy.webp",
        "type": "energy",
        "filename": "81001910_energy.webp"
      },
      {
        "path": "/images/airco-products/81001910_81001910_other1.webp",
        "type": "other",
        "filename": "81001910_81001910_other1.webp"
      },
      {
        "path": "/images/airco-products/81001910_81001910_other2.webp",
        "type": "other",
        "filename": "81001910_81001910_other2.webp"
      },
      {
        "path": "/images/airco-products/81001910_81001910_other3.webp",
        "type": "other",
        "filename": "81001910_81001910_other3.webp"
      },
      {
        "path": "/images/airco-products/81001910_81001910_other4.webp",
        "type": "other",
        "filename": "81001910_81001910_other4.webp"
      },
      {
        "path": "/images/airco-products/81001910_81001910_other5.webp",
        "type": "other",
        "filename": "81001910_81001910_other5.webp"
      },
      {
        "path": "/images/airco-products/81001910_other1.webp",
        "type": "other",
        "filename": "81001910_other1.webp"
      },
      {
        "path": "/images/airco-products/81001910_other2.webp",
        "type": "other",
        "filename": "81001910_other2.webp"
      },
      {
        "path": "/images/airco-products/81001910_other3.webp",
        "type": "other",
        "filename": "81001910_other3.webp"
      },
      {
        "path": "/images/airco-products/81001910_other4.webp",
        "type": "other",
        "filename": "81001910_other4.webp"
      },
      {
        "path": "/images/airco-products/81001910_other5.webp",
        "type": "other",
        "filename": "81001910_other5.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-dualcool-premium-dual-inverter-airco-r32-25-kw-set/29399/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001910_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001910_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001910_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001910_Technical_Document_NL_EN.pdf",
        "name": "Technical Document NL EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      }
    ]
  },
  {
    "id": "81001913",
    "sku": "H12S1P-SET",
    "name": "LG Dualcool Premium Dual Inverter airco R32 3,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "3.5",
    "coolingCapacity": "4.35",
    "heatingCapacity": "4.35",
    "description": "De LG Dualcool Premium 3,5 kW Dual Inverter set is een hoogwaardige airconditioner, speciaal ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 3,5 kW en voorzien van de geavanceerde Dual Inverter technologie, biedt deze airco uitstekende prestaties met een zeer laag energieverbruik. Dankzij de ingebouwde wifi-functie kunt u het apparaat eenvoudig op afstand bedienen via uw smartphone, waardoor u altijd verzekerd bent van een optimaal binnenklimaat. De airco beschikt over een SEER van 9,5 W/W en een SCOP van 5,10/6,10 W/W, wat zorgt voor uitzonderlijke energie-efficiëntie gedurende het hele jaar. Het geluidsniveau van de binnenunit is slechts 21 dB(A), terwijl de buitenunit een geluidsniveau van 51 dB(A) heeft.\n\nDe LG Dualcool Premium 3,5 kW is perfect geschikt voor gebruik in middelgrote tot grote ruimtes tot 70 m² zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomerdagen als koude wintermaanden.\n\nDeze airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De airco wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De garantieperiode op de LG Dualcool Premium bedraagt 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG Dualcool Premium 3,5 kW onderscheidt zich door zijn Dual Inverter technologie, energie-efficiëntie en stille werking. Met een SEER van 9,5 en een SCOP van 5,10/6,10 biedt deze airco superieure prestaties en efficiëntie het hele jaar door. De slimme functies zoals wifi-connectiviteit, het A+++ energielabel en het stijlvolle ontwerp maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het extreem lage geluidsniveau van 21 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "307 x 895 x 235 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A+++",
    "seer": "9.5",
    "scop": null,
    "soundLevel": "40 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.9 kg",
      "Global warming potential (GWP)": "608",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "0.82 kW",
      "Opgenomen vermogen bij koelen (max)": "0.82 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "4.35 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.85 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.85 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "4.35 kW",
      "EER (koeling)": "4.29",
      "COP (verwarming)": "4.71",
      "SEER (koeling)": "9.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "129 kWh",
      "Energie-efficiëntieklasse koelen": "A+++",
      "Hoogte binnenunit": "307 mm",
      "Breedte binnenunit": "895 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "12.5 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "29.9 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "120 m³/h",
      "Luchtdebiet koelen (max)": "630 m³/h",
      "Luchtdebiet verwarmen (min)": "342 m³/h",
      "Luchtdebiet verwarmen (max)": "630 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "19 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "40 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "40 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "51 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.3 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-10 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001913_81001910_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001913_81001910_main.webp",
        "type": "main",
        "filename": "81001913_81001910_main.webp"
      },
      {
        "path": "/images/airco-products/81001913_81001910_dimensions.webp",
        "type": "dimensions",
        "filename": "81001913_81001910_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001913_81001910_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001913_81001910_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001913_81001911_energy.webp",
        "type": "energy",
        "filename": "81001913_81001911_energy.webp"
      },
      {
        "path": "/images/airco-products/81001913_81001910_other1.webp",
        "type": "other",
        "filename": "81001913_81001910_other1.webp"
      },
      {
        "path": "/images/airco-products/81001913_81001910_other2.webp",
        "type": "other",
        "filename": "81001913_81001910_other2.webp"
      },
      {
        "path": "/images/airco-products/81001913_81001910_other3.webp",
        "type": "other",
        "filename": "81001913_81001910_other3.webp"
      },
      {
        "path": "/images/airco-products/81001913_81001910_other4.webp",
        "type": "other",
        "filename": "81001913_81001910_other4.webp"
      },
      {
        "path": "/images/airco-products/81001913_81001910_other5.webp",
        "type": "other",
        "filename": "81001913_81001910_other5.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-dualcool-premium-dual-inverter-airco-r32-35-kw-set/29635/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001913_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001913_Energy.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001913_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001913_Technical_Document_NL_EN.pdf",
        "name": "Technical Document NL EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      }
    ]
  },
  {
    "id": "81001898",
    "sku": "A09GA1-SET",
    "name": "LG Gallery Special Dual Inverter airco R32 2,5 kW set",
    "brand": "LG",
    "type": "single-split",
    "category": "LG Single-split",
    "capacity": "2.5",
    "coolingCapacity": "3.7",
    "heatingCapacity": "4.1",
    "description": "De LG Gallery Special Dual Inverter 2,5 kW set is een hoogwaardige airconditioner die perfect is voor zowel residentieel als commercieel gebruik. Met een koelcapaciteit van 2,5 kW en uitgerust met de geavanceerde Dual Inverter technologie, biedt deze airco efficiënte en krachtige prestaties, terwijl hij een minimale impact op het milieu heeft dankzij het gebruik van het milieuvriendelijke R32 koelmiddel. De LG Gallery onderscheidt zich door zijn stijlvolle ontwerp en geïntegreerde slimme functies, waaronder wifi-connectiviteit, waardoor u het apparaat eenvoudig via uw smartphone kunt bedienen voor ultiem comfort en gemak. De airco heeft een SEER van 7,2 W/W en een SCOP van 4,3 W/W, wat garant staat voor uitstekende energie-efficiëntie het hele jaar door. Bovendien is het geluidsniveau van de binnenunit slechts 20 dB(A), waardoor hij ideaal is voor stille ruimtes.\n\nDe LG Gallery Special Dual Inverter 2,5 kW set is ideaal voor middelgrote ruimtes tot 35 m², zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het perfect is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De LG Gallery Special Dual Inverter wordt geleverd met een garantie van 5 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe LG Gallery Special Dual Inverter 2,5 kW set onderscheidt zich door zijn energiezuinigheid, geavanceerde technologie en stijlvolle ontwerp. Met een SEER van 7,2 en een SCOP van 4,3 biedt deze airco het hele jaar door uitzonderlijke prestaties en efficiëntie. De milieuvriendelijke eigenschappen van het R32 koelmiddel, het A++ energielabel, en de mogelijkheid om het apparaat op afstand te bedienen via wifi maken het een ideale keuze voor zowel particuliere als zakelijke gebruikers. De stille werking, het lage geluidsniveau van 20 dB(A) voor de binnenunit en de onderhoudsvriendelijke kenmerken maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "652 x 652 x 158 mm",
      "buitenunit": "770 x 545 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "7.2",
    "scop": null,
    "soundLevel": "42 dB(A)",
    "specifications": {
      "Categoriecode": "550",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.8 kg",
      "Global warming potential (GWP)": "540",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "0.6 kW",
      "Opgenomen vermogen bij koelen (max)": "0.6 kW",
      "Koelcapaciteit (min)": "0.89 kW",
      "Koelcapaciteit (max)": "3.7 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.81 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.81 kW",
      "Verwarmingscapaciteit (min)": "0.89 kW",
      "Verwarmingscapaciteit (max)": "4.1 kW",
      "EER (koeling)": "4.17",
      "COP (verwarming)": "4.08",
      "SEER (koeling)": "7.2",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "121 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "652 mm",
      "Breedte binnenunit": "652 mm",
      "Diepte binnenunit": "158 mm",
      "Gewicht binnenunit": "20 kg",
      "Hoogte buitenunit": "770 mm",
      "Breedte buitenunit": "545 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "33.4 kg",
      "Kleur binnenunit": "Overig",
      "Aantal ventilatiesnelheden": "5",
      "Luchtdebiet koelen (min)": "180 m³/h",
      "Luchtdebiet koelen (max)": "720 m³/h",
      "Luchtdebiet verwarmen (min)": "360 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "20 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "42 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "28 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "42 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "53 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.1 l/h",
      "Uitwendige buisdiameter condensafvoer": "21.5 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001898_81001898_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001898_81001898_main.webp",
        "type": "main",
        "filename": "81001898_81001898_main.webp"
      },
      {
        "path": "/images/airco-products/81001898_main.webp",
        "type": "main",
        "filename": "81001898_main.webp"
      },
      {
        "path": "/images/airco-products/81001898_81001898_dimensions.webp",
        "type": "dimensions",
        "filename": "81001898_81001898_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001898_81001898_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001898_81001898_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001898_dimensions.webp",
        "type": "dimensions",
        "filename": "81001898_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001898_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001898_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001898_81001898_energy.webp",
        "type": "energy",
        "filename": "81001898_81001898_energy.webp"
      },
      {
        "path": "/images/airco-products/81001898_energy.webp",
        "type": "energy",
        "filename": "81001898_energy.webp"
      },
      {
        "path": "/images/airco-products/81001898_81001898_other1.webp",
        "type": "other",
        "filename": "81001898_81001898_other1.webp"
      },
      {
        "path": "/images/airco-products/81001898_81001898_other2.webp",
        "type": "other",
        "filename": "81001898_81001898_other2.webp"
      },
      {
        "path": "/images/airco-products/81001898_81001898_other3.webp",
        "type": "other",
        "filename": "81001898_81001898_other3.webp"
      },
      {
        "path": "/images/airco-products/81001898_81001898_other4.webp",
        "type": "other",
        "filename": "81001898_81001898_other4.webp"
      },
      {
        "path": "/images/airco-products/81001898_other1.webp",
        "type": "other",
        "filename": "81001898_other1.webp"
      },
      {
        "path": "/images/airco-products/81001898_other2.webp",
        "type": "other",
        "filename": "81001898_other2.webp"
      },
      {
        "path": "/images/airco-products/81001898_other3.webp",
        "type": "other",
        "filename": "81001898_other3.webp"
      },
      {
        "path": "/images/airco-products/81001898_other4.webp",
        "type": "other",
        "filename": "81001898_other4.webp"
      },
      {
        "path": "/images/airco-products/81001898_sk17555_81001898-other8.webp",
        "type": "other",
        "filename": "81001898_sk17555_81001898-other8.webp"
      },
      {
        "path": "/images/airco-products/81001898_sk17556_81001898-other9.webp",
        "type": "other",
        "filename": "81001898_sk17556_81001898-other9.webp"
      },
      {
        "path": "/images/airco-products/81001898_sk17560_81001898-other10.webp",
        "type": "other",
        "filename": "81001898_sk17560_81001898-other10.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-gallery-special-dual-inverter-airco-r32-25-kw-set/29638/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001898_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001898_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001898_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001898_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001898_Technical_Document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      }
    ]
  },
  {
    "id": "81002011",
    "sku": "AKTIE-PULAR-07-SET",
    "name": "Tosot PULAR by GREE single split airco R32 2,2 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "2.2",
    "coolingCapacity": "2.2",
    "heatingCapacity": "2.4",
    "description": "De Tosot PULAR by GREE single split airco R32 2,2 kW set is een efficiënte en betrouwbare oplossing voor klimaatregeling, ontworpen voor zowel zakelijke als particuliere toepassingen. Met een koelcapaciteit van 2,2 kW en het milieuvriendelijke R32 koelmiddel, biedt deze airco uitstekende prestaties met een lage impact op het milieu. Deze airco combineert een laag energieverbruik met krachtige koeling en verwarming, wat ideaal is voor kleinere ruimtes zoals slaapkamers, kantoren of vergaderruimtes.\n\nDe Tosot PULAR 2,2 kW airco is perfect voor kleine tot middelgrote ruimtes zoals slaapkamers, thuiskantoren en vergaderruimtes. Door de stille werking en de hoge efficiëntie kan dit systeem een aangenaam binnenklimaat creëren zonder de omgeving te verstoren.\n\nDe installatie van deze single split airco is eenvoudig dankzij de meegeleverde installatiekit en duidelijke handleiding. De airco wordt geleverd met 3 jaar garantie, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van uw investering. Tosot biedt bovendien uitgebreide technische ondersteuning voor installatie en onderhoud.\n\nDe Tosot PULAR by GREE single split airco onderscheidt zich door zijn energiezuinigheid, stille werking en gebruik van het milieuvriendelijke R32 koelmiddel. Met de invertertechnologie en een energielabel van A++ biedt deze airco een betrouwbare en kosteneffectieve oplossing voor zowel zakelijke klanten als consumenten. De combinatie van efficiëntie, lage onderhoudsbehoefte en een lange levensduur maakt dit een uitstekende keuze voor elke ruimte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "260 x 704 x 185 mm",
      "buitenunit": "450 x 710 x 293 mm"
    },
    "energyLabel": "A++",
    "seer": "6.6",
    "scop": null,
    "soundLevel": "34 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.4 kg",
      "Global warming potential (GWP)": "270",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.15 kW",
      "Opgenomen vermogen bij koelen (max)": "1.25 kW",
      "Koelcapaciteit (min)": "2.2 kW",
      "Koelcapaciteit (max)": "2.2 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.14 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.45 kW",
      "Verwarmingscapaciteit (min)": "2.4 kW",
      "Verwarmingscapaciteit (max)": "2.4 kW",
      "SEER (koeling)": "6.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "117 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "260 mm",
      "Breedte binnenunit": "704 mm",
      "Diepte binnenunit": "185 mm",
      "Gewicht binnenunit": "7.5 kg",
      "Hoogte buitenunit": "450 mm",
      "Breedte buitenunit": "710 mm",
      "Diepte buitenunit": "293 mm",
      "Gewicht buitenunit": "21 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "250 m³/h",
      "Luchtdebiet koelen (max)": "470 m³/h",
      "Luchtdebiet verwarmen (min)": "250 m³/h",
      "Luchtdebiet verwarmen (max)": "470 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "21 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "21 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "34 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "55 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "60 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.6 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "43 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "2,2 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002011_81002011_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002011_81002011_main.webp",
        "type": "main",
        "filename": "81002011_81002011_main.webp"
      },
      {
        "path": "/images/airco-products/81002011_main.webp",
        "type": "main",
        "filename": "81002011_main.webp"
      },
      {
        "path": "/images/airco-products/81002011_81002011_dimensions.webp",
        "type": "dimensions",
        "filename": "81002011_81002011_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002011_81002011_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002011_81002011_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002011_dimensions.webp",
        "type": "dimensions",
        "filename": "81002011_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002011_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002011_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002011_81002011_energy.webp",
        "type": "energy",
        "filename": "81002011_81002011_energy.webp"
      },
      {
        "path": "/images/airco-products/81002011_energy.webp",
        "type": "energy",
        "filename": "81002011_energy.webp"
      },
      {
        "path": "/images/airco-products/81002011_81001460_other3.webp",
        "type": "other",
        "filename": "81002011_81001460_other3.webp"
      },
      {
        "path": "/images/airco-products/81002011_81001690_other2.webp",
        "type": "other",
        "filename": "81002011_81001690_other2.webp"
      },
      {
        "path": "/images/airco-products/81002011_81002011_other1.webp",
        "type": "other",
        "filename": "81002011_81002011_other1.webp"
      },
      {
        "path": "/images/airco-products/81002011_81002011_other3.webp",
        "type": "other",
        "filename": "81002011_81002011_other3.webp"
      },
      {
        "path": "/images/airco-products/81002011_81002011_other5.webp",
        "type": "other",
        "filename": "81002011_81002011_other5.webp"
      },
      {
        "path": "/images/airco-products/81002011_81002011_other6.webp",
        "type": "other",
        "filename": "81002011_81002011_other6.webp"
      },
      {
        "path": "/images/airco-products/81002011_other1.webp",
        "type": "other",
        "filename": "81002011_other1.webp"
      },
      {
        "path": "/images/airco-products/81002011_other3.webp",
        "type": "other",
        "filename": "81002011_other3.webp"
      },
      {
        "path": "/images/airco-products/81002011_other5.webp",
        "type": "other",
        "filename": "81002011_other5.webp"
      },
      {
        "path": "/images/airco-products/81002011_other6.webp",
        "type": "other",
        "filename": "81002011_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-by-gree-single-split-airco-r32-22-kw-set/29375/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002011_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002011_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002011_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002011_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002011_Technical Document NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002012",
    "sku": "AKTIE-PULAR-09-SET",
    "name": "Tosot PULAR by GREE single split airco R32 2,5 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "2.5",
    "coolingCapacity": "2.5",
    "heatingCapacity": "2.8",
    "description": "De Tosot PULAR by GREE single split airco 2,5 kW R32 (wifi) is een hoogwaardige airconditioner, speciaal ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 2,5 kW en voorzien van het milieuvriendelijke R32 koelmiddel, biedt deze airco uitstekende prestaties met een zeer lage impact op het milieu. Dankzij de ingebouwde wifi-functie kunt u het apparaat eenvoudig op afstand bedienen via uw smartphone, waardoor u altijd verzekerd bent van een optimaal binnenklimaat. De airco beschikt over een SEER van 6,5 W/W en een SCOP van 4,0 W/W, wat zorgt voor hoge energie-efficiëntie gedurende het hele jaar. Het geluidsniveau van de binnenunit is slechts 24 dB(A), terwijl de buitenunit een geluidsniveau van 51 dB(A) heeft.\n\nDe Tosot PULAR is perfect geschikt voor gebruik in middelgrote ruimtes tot 58 m2 zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomerdagen als koude wintermaanden.\n\nDeze single split airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De airco wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De garantieperiode op de Tosot Pular bedraagt 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot PULAR by GREE onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en geavanceerde technologie. Met een SEER van 6,5 en een SCOP van 4,0 biedt deze airco superieure prestaties en efficiëntie het hele jaar door. De milieuvriendelijke R32 koelmiddel, het A++ energielabel en de mogelijkheid om het apparaat op afstand te bedienen via wifi maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 24 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "260 x 704 x 185 mm",
      "buitenunit": "550 x 732 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.5",
    "scop": null,
    "soundLevel": "36 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.5 kg",
      "Global warming potential (GWP)": "337.5",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.72 kW",
      "Opgenomen vermogen bij koelen (max)": "0.72 kW",
      "Koelcapaciteit (min)": "2.5 kW",
      "Koelcapaciteit (max)": "2.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.75 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.75 kW",
      "Verwarmingscapaciteit (min)": "2.8 kW",
      "Verwarmingscapaciteit (max)": "2.8 kW",
      "EER (koeling)": "3.47",
      "COP (verwarming)": "3.73",
      "SEER (koeling)": "6.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "135 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "260 mm",
      "Breedte binnenunit": "704 mm",
      "Diepte binnenunit": "185 mm",
      "Gewicht binnenunit": "7.5 kg",
      "Hoogte buitenunit": "550 mm",
      "Breedte buitenunit": "732 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "25 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "470 m³/h",
      "Luchtdebiet koelen (max)": "470 m³/h",
      "Luchtdebiet verwarmen (min)": "470 m³/h",
      "Luchtdebiet verwarmen (max)": "470 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "36 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "55 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "51 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "62 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "62 dB(A)",
      "Geluidsniveau buitenunit (bij nachtverlaging op 1m)": "51 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Uitwendige buisdiameter vloeistofleiding": "6.35 mm",
      "Nom. diameter zuigleiding": "3/8\"",
      "Uitwendige buisdiameter zuigleiding": "9.52 mm",
      "Ontvochtigingscapaciteit": "0.6 l/h",
      "Uitwendige buisdiameter condensafvoer": "15 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-58 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "-58 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-39 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "-39 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002012_81002011_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002012_81002011_main.webp",
        "type": "main",
        "filename": "81002012_81002011_main.webp"
      },
      {
        "path": "/images/airco-products/81002012_81002012_dimensions.webp",
        "type": "dimensions",
        "filename": "81002012_81002012_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002012_dimensions.webp",
        "type": "dimensions",
        "filename": "81002012_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002012_81002012_energy.webp",
        "type": "energy",
        "filename": "81002012_81002012_energy.webp"
      },
      {
        "path": "/images/airco-products/81002012_energy.webp",
        "type": "energy",
        "filename": "81002012_energy.webp"
      },
      {
        "path": "/images/airco-products/81002012_81002003_other1.webp",
        "type": "other",
        "filename": "81002012_81002003_other1.webp"
      },
      {
        "path": "/images/airco-products/81002012_81002003_other2.webp",
        "type": "other",
        "filename": "81002012_81002003_other2.webp"
      },
      {
        "path": "/images/airco-products/81002012_81002003_other3.webp",
        "type": "other",
        "filename": "81002012_81002003_other3.webp"
      },
      {
        "path": "/images/airco-products/81002012_81002012_other4.webp",
        "type": "other",
        "filename": "81002012_81002012_other4.webp"
      },
      {
        "path": "/images/airco-products/81002012_81002012_other5.webp",
        "type": "other",
        "filename": "81002012_81002012_other5.webp"
      },
      {
        "path": "/images/airco-products/81002012_81002012_other7.webp",
        "type": "other",
        "filename": "81002012_81002012_other7.webp"
      },
      {
        "path": "/images/airco-products/81002012_other4.webp",
        "type": "other",
        "filename": "81002012_other4.webp"
      },
      {
        "path": "/images/airco-products/81002012_other5.webp",
        "type": "other",
        "filename": "81002012_other5.webp"
      },
      {
        "path": "/images/airco-products/81002012_other7.webp",
        "type": "other",
        "filename": "81002012_other7.webp"
      },
      {
        "path": "/images/airco-products/81002012_PULAR-GWH24AGD2-I-R32-1.webp",
        "type": "other",
        "filename": "81002012_PULAR-GWH24AGD2-I-R32-1.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-by-gree-single-split-airco-r32-25-kw-set/28588/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual_EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Service_Manual_EN.pdf",
        "name": "Service Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Manual_Remote_control_NL.pdf",
        "name": "Manual Remote control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Declaration_Of_Conformity.pdf",
        "name": "Declaration Of Conformity"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Product_sheet_EN.pdf",
        "name": "Product Sheet EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Technical_Document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Test_Verification_Of_Conformity.pdf",
        "name": "Test Verification of Conformity"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002012_Technical_Maintenance_Manual.pdf",
        "name": "Technical Maintenance Manual NL"
      }
    ]
  },
  {
    "id": "81002013",
    "sku": "AKTIE-PULAR-12-SET",
    "name": "Tosot PULAR by GREE single split airco R32 3,5 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "3.5",
    "coolingCapacity": "3.2",
    "heatingCapacity": "3.4",
    "description": "De Tosot PULAR by GREE single split airco 3,2kW R32 (wifi) is een hoogwaardige airconditioner, speciaal ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 3,2 kW en voorzien van het milieuvriendelijke R32 koelmiddel, biedt deze airco uitstekende prestaties met een zeer lage impact op het milieu. Dankzij de ingebouwde wifi-functie kunt u het apparaat eenvoudig op afstand bedienen via uw smartphone, waardoor u altijd verzekerd bent van een optimaal binnenklimaat. De airco beschikt over een SEER van 6,1 W/W en een SCOP van 4,0 W/W, wat zorgt voor hoge energie-efficiëntie gedurende het hele jaar. Het geluidsniveau van de binnenunit is slechts 24 dB(A), terwijl de buitenunit een geluidsniveau van 51 dB(A) heeft.\n\nDe Tosot PULAR is perfect geschikt voor gebruik in middelgrote ruimtes tot 58 m2 zoals woonkamers, aapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomerdagen als koude wintermaanden.\n\nDeze single split airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De airco wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De garantieperiode op de Tosot Pular bedraagt 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot PULAR by GREE onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en geavanceerde technologie. Met een SEER van 6,1 en een SCOP van 4,0 biedt deze airco superieure prestaties en efficiëntie het hele jaar door. De milieuvriendelijke R32 koelmiddel, het A++ energielabel en de mogelijkheid om het apparaat op afstand te bedienen via wifi maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 24 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "260 x 779 x 185 mm",
      "buitenunit": "550 x 732 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.1",
    "scop": null,
    "soundLevel": "37 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.55 kg",
      "Global warming potential (GWP)": "371.25",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.991 kW",
      "Opgenomen vermogen bij koelen (max)": "0.991 kW",
      "Koelcapaciteit (min)": "3.2 kW",
      "Koelcapaciteit (max)": "3.2 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.916 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.916 kW",
      "Verwarmingscapaciteit (min)": "3.4 kW",
      "Verwarmingscapaciteit (max)": "3.4 kW",
      "EER (koeling)": "3.23",
      "COP (verwarming)": "3.71",
      "SEER (koeling)": "6.1",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "184 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "260 mm",
      "Breedte binnenunit": "779 mm",
      "Diepte binnenunit": "185 mm",
      "Gewicht binnenunit": "8 kg",
      "Hoogte buitenunit": "550 mm",
      "Breedte buitenunit": "732 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "25 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "520 m³/h",
      "Luchtdebiet koelen (max)": "520 m³/h",
      "Luchtdebiet verwarmen (min)": "520 m³/h",
      "Luchtdebiet verwarmen (max)": "520 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "37 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "37 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "37 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "37 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "51 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "64 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "64 dB(A)",
      "Geluidsniveau buitenunit (bij nachtverlaging op 1m)": "51 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Uitwendige buisdiameter vloeistofleiding": "6.35 mm",
      "Nom. diameter zuigleiding": "3/8\"",
      "Uitwendige buisdiameter zuigleiding": "9.52 mm",
      "Ontvochtigingscapaciteit": "1.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "15 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-58 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "-58 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-39 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "-39 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "3,2 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002013_81002011_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002013_81002011_main.webp",
        "type": "main",
        "filename": "81002013_81002011_main.webp"
      },
      {
        "path": "/images/airco-products/81002013_81002013_dimensions.webp",
        "type": "dimensions",
        "filename": "81002013_81002013_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002013_dimensions.webp",
        "type": "dimensions",
        "filename": "81002013_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002013_81002013_energy.webp",
        "type": "energy",
        "filename": "81002013_81002013_energy.webp"
      },
      {
        "path": "/images/airco-products/81002013_energy.webp",
        "type": "energy",
        "filename": "81002013_energy.webp"
      },
      {
        "path": "/images/airco-products/81002013_81002003_other1.webp",
        "type": "other",
        "filename": "81002013_81002003_other1.webp"
      },
      {
        "path": "/images/airco-products/81002013_81002003_other2.webp",
        "type": "other",
        "filename": "81002013_81002003_other2.webp"
      },
      {
        "path": "/images/airco-products/81002013_81002003_other3.webp",
        "type": "other",
        "filename": "81002013_81002003_other3.webp"
      },
      {
        "path": "/images/airco-products/81002013_81002012_other5.webp",
        "type": "other",
        "filename": "81002013_81002012_other5.webp"
      },
      {
        "path": "/images/airco-products/81002013_81002012_other7.webp",
        "type": "other",
        "filename": "81002013_81002012_other7.webp"
      },
      {
        "path": "/images/airco-products/81002013_81002013_other4.webp",
        "type": "other",
        "filename": "81002013_81002013_other4.webp"
      },
      {
        "path": "/images/airco-products/81002013_other4.webp",
        "type": "other",
        "filename": "81002013_other4.webp"
      },
      {
        "path": "/images/airco-products/81002013_PULAR-GWH24AGD2-I-R32-1.webp",
        "type": "other",
        "filename": "81002013_PULAR-GWH24AGD2-I-R32-1.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-by-gree-single-split-airco-r32-35-kw-set/28585/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Service_Manual_EN.pdf",
        "name": "Service Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Declaration_Of_Conformity.pdf",
        "name": "Declaration Of Conformity"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Test_Verification_of_Conformity.pdf",
        "name": "Test Verification of Conformity"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Manual_Remote_Control_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Manual_Maintenance_Settings_NL.pdf",
        "name": "Manual Maintenance Settings NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002013_Technical_document_NL.pdf",
        "name": "Specification Sheet NL"
      }
    ]
  },
  {
    "id": "81002014",
    "sku": "AKTIE-PULAR-18-SET",
    "name": "Tosot PULAR by GREE single split airco R32 5,0 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "5.0",
    "coolingCapacity": "4.6",
    "heatingCapacity": "5.2",
    "description": "De Tosot PULAR by GREE single split airco 4,6kW R32 (wifi) is een hoogwaardige airconditioner, speciaal ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 4,6 kW en voorzien van het milieuvriendelijke R32 koelmiddel, biedt deze airco uitstekende prestaties met een zeer lage impact op het milieu. Dankzij de ingebouwde wifi-functie kunt u het apparaat eenvoudig op afstand bedienen via uw smartphone, waardoor u altijd verzekerd bent van een optimaal binnenklimaat. De airco beschikt over een SEER van 6,4 W/W en een SCOP van 4,0 W/W, wat zorgt voor hoge energie-efficiëntie gedurende het hele jaar. Het geluidsniveau van de binnenunit is slechts 29 dB(A), terwijl de buitenunit een geluidsniveau van 55 dB(A) heeft.\n\nDe Tosot PULAR is perfect geschikt voor gebruik in middelgrote ruimtes tot 58 m2 zoals woonkamers, aapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomerdagen als koude wintermaanden.\n\nDeze single split airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De airco wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De garantieperiode op de Tosot Pular bedraagt 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot PULAR by GREE onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en geavanceerde technologie. Met een SEER van 6,4 en een SCOP van 4,0 biedt deze airco superieure prestaties en efficiëntie het hele jaar door. De milieuvriendelijke R32 koelmiddel, het A++ energielabel en de mogelijkheid om het apparaat op afstand te bedienen via wifi maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 29 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "311 x 982 x 221 mm",
      "buitenunit": "550 x 732 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.4",
    "scop": null,
    "soundLevel": "43 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.75 kg",
      "Global warming potential (GWP)": "506.25",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "1355 kW",
      "Opgenomen vermogen bij koelen (max)": "1355 kW",
      "Koelcapaciteit (min)": "4.6 kW",
      "Koelcapaciteit (max)": "4.6 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.34 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.34 kW",
      "Verwarmingscapaciteit (min)": "5.2 kW",
      "Verwarmingscapaciteit (max)": "5.2 kW",
      "EER (koeling)": "3.39",
      "COP (verwarming)": "3.88",
      "SEER (koeling)": "6.4",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "244 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "311 mm",
      "Breedte binnenunit": "982 mm",
      "Diepte binnenunit": "221 mm",
      "Gewicht binnenunit": "13.5 kg",
      "Hoogte buitenunit": "550 mm",
      "Breedte buitenunit": "732 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "26.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "910 m³/h",
      "Luchtdebiet koelen (max)": "910 m³/h",
      "Luchtdebiet verwarmen (min)": "910 m³/h",
      "Luchtdebiet verwarmen (max)": "910 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "43 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "43 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "43 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "43 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "55 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Geluidsniveau buitenunit (bij nachtverlaging op 1m)": "55 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Uitwendige buisdiameter vloeistofleiding": "6.35 mm",
      "Nom. diameter zuigleiding": "3/8\"",
      "Uitwendige buisdiameter zuigleiding": "9.52 mm",
      "Ontvochtigingscapaciteit": "1.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "15 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-58 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "-58 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-39 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "-39 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "4,6 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002014_81002011_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002014_81002011_main.webp",
        "type": "main",
        "filename": "81002014_81002011_main.webp"
      },
      {
        "path": "/images/airco-products/81002014_81002014_dimensions.webp",
        "type": "dimensions",
        "filename": "81002014_81002014_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002014_dimensions.webp",
        "type": "dimensions",
        "filename": "81002014_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002014_81002014_energy.webp",
        "type": "energy",
        "filename": "81002014_81002014_energy.webp"
      },
      {
        "path": "/images/airco-products/81002014_energy.webp",
        "type": "energy",
        "filename": "81002014_energy.webp"
      },
      {
        "path": "/images/airco-products/81002014_81002003_other1.webp",
        "type": "other",
        "filename": "81002014_81002003_other1.webp"
      },
      {
        "path": "/images/airco-products/81002014_81002003_other2.webp",
        "type": "other",
        "filename": "81002014_81002003_other2.webp"
      },
      {
        "path": "/images/airco-products/81002014_81002003_other3.webp",
        "type": "other",
        "filename": "81002014_81002003_other3.webp"
      },
      {
        "path": "/images/airco-products/81002014_81002012_other5.webp",
        "type": "other",
        "filename": "81002014_81002012_other5.webp"
      },
      {
        "path": "/images/airco-products/81002014_81002012_other7.webp",
        "type": "other",
        "filename": "81002014_81002012_other7.webp"
      },
      {
        "path": "/images/airco-products/81002014_81002014_other3.webp",
        "type": "other",
        "filename": "81002014_81002014_other3.webp"
      },
      {
        "path": "/images/airco-products/81002014_other3.webp",
        "type": "other",
        "filename": "81002014_other3.webp"
      },
      {
        "path": "/images/airco-products/81002014_PULAR-GWH24AGD2-I-R32-1.webp",
        "type": "other",
        "filename": "81002014_PULAR-GWH24AGD2-I-R32-1.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-by-gree-single-split-airco-r32-50-kw-set/28586/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Technical_Maintenance_Manual_NL.pdf",
        "name": "Technical Maintenance Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Declaration_Of_Conformity.pdf",
        "name": "Declaration Of Conformity"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Service_Manual_EN.pdf",
        "name": "Service Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Test_Verification_of_Conformity.pdf",
        "name": "Test Verification of Conformity"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002014_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002015",
    "sku": "AKTIE-PULAR-24-SET",
    "name": "Tosot PULAR by GREE single split airco R32 7,0 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "7.0",
    "coolingCapacity": "6.2",
    "heatingCapacity": "6.5",
    "description": "De Tosot PULAR by GREE single split airco 6,1kW R32 (wifi) is een hoogwaardige airconditioner, speciaal ontworpen voor zowel particuliere als zakelijke toepassingen. Met een koelcapaciteit van 6,1 kW en voorzien van het milieuvriendelijke R32 koelmiddel, biedt deze airco uitstekende prestaties met een zeer lage impact op het milieu. Dankzij de ingebouwde wifi-functie kunt u het apparaat eenvoudig op afstand bedienen via uw smartphone, waardoor u altijd verzekerd bent van een optimaal binnenklimaat. De airco beschikt over een SEER van 6,8 W/W en een SCOP van 4,0 W/W, wat zorgt voor hoge energie-efficiëntie gedurende het hele jaar. Het geluidsniveau van de binnenunit is slechts 30 dB(A), terwijl de buitenunit een geluidsniveau van 57 dB(A) heeft.\n\nDe Tosot PULAR is perfect geschikt voor gebruik in middelgrote ruimtes tot 58 m2 zoals woonkamers, aapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomerdagen als koude wintermaanden.\n\nDeze single split airco is ontworpen voor eenvoudige installatie, wat tijd en kosten bespaart. De airco wordt geleverd met een complete installatiekit en een gedetailleerde handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De garantieperiode op de Tosot Pular bedraagt 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot PULAR by GREE onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en geavanceerde technologie. Met een SEER van 6,8 en een SCOP van 4,0 biedt deze airco superieure prestaties en efficiëntie het hele jaar door. De milieuvriendelijke R32 koelmiddel, het A++ energielabel en de mogelijkheid om het apparaat op afstand te bedienen via wifi maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 30 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "311 x 982 x 221 mm",
      "buitenunit": "555 x 873 x 376 mm"
    },
    "energyLabel": "A++",
    "seer": "6.8",
    "scop": null,
    "soundLevel": "46 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1180 kg",
      "Global warming potential (GWP)": "796",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "1786 kW",
      "Opgenomen vermogen bij koelen (max)": "1786 kW",
      "Koelcapaciteit (min)": "6.2 kW",
      "Koelcapaciteit (max)": "6.2 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1645 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1645 kW",
      "Verwarmingscapaciteit (min)": "6.5 kW",
      "Verwarmingscapaciteit (max)": "6.5 kW",
      "EER (koeling)": "3.8",
      "COP (verwarming)": "3.95",
      "SEER (koeling)": "6.8",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "1530 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "311 mm",
      "Breedte binnenunit": "982 mm",
      "Diepte binnenunit": "221 mm",
      "Gewicht binnenunit": "14 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "873 mm",
      "Diepte buitenunit": "376 mm",
      "Gewicht buitenunit": "36.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "1050 m³/h",
      "Luchtdebiet koelen (max)": "1050 m³/h",
      "Luchtdebiet verwarmen (min)": "1050 m³/h",
      "Luchtdebiet verwarmen (max)": "1050 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "46 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "46 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "46 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "46 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "63 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "57 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "57 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "57 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "57 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Geluidsniveau buitenunit (bij nachtverlaging op 1m)": "51 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Uitwendige buisdiameter vloeistofleiding": "6.35 mm",
      "Nom. diameter zuigleiding": "1/2\"",
      "Uitwendige buisdiameter zuigleiding": "12.7 mm",
      "Ontvochtigingscapaciteit": "1.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "15 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-58 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "-58 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-39 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "-39 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "6,1 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002015_81002011_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002015_81002011_main.webp",
        "type": "main",
        "filename": "81002015_81002011_main.webp"
      },
      {
        "path": "/images/airco-products/81002015_81002015_dimensions.webp",
        "type": "dimensions",
        "filename": "81002015_81002015_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002015_dimensions.webp",
        "type": "dimensions",
        "filename": "81002015_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002015_81002015_energy.webp",
        "type": "energy",
        "filename": "81002015_81002015_energy.webp"
      },
      {
        "path": "/images/airco-products/81002015_energy.webp",
        "type": "energy",
        "filename": "81002015_energy.webp"
      },
      {
        "path": "/images/airco-products/81002015_81002003_other1.webp",
        "type": "other",
        "filename": "81002015_81002003_other1.webp"
      },
      {
        "path": "/images/airco-products/81002015_81002003_other2.webp",
        "type": "other",
        "filename": "81002015_81002003_other2.webp"
      },
      {
        "path": "/images/airco-products/81002015_81002003_other3.webp",
        "type": "other",
        "filename": "81002015_81002003_other3.webp"
      },
      {
        "path": "/images/airco-products/81002015_81002012_other5.webp",
        "type": "other",
        "filename": "81002015_81002012_other5.webp"
      },
      {
        "path": "/images/airco-products/81002015_81002012_other7.webp",
        "type": "other",
        "filename": "81002015_81002012_other7.webp"
      },
      {
        "path": "/images/airco-products/81002015_81002015_other3.webp",
        "type": "other",
        "filename": "81002015_81002015_other3.webp"
      },
      {
        "path": "/images/airco-products/81002015_other3.webp",
        "type": "other",
        "filename": "81002015_other3.webp"
      },
      {
        "path": "/images/airco-products/81002015_PULAR-GWH24AGD2-I-R32-1.webp",
        "type": "other",
        "filename": "81002015_PULAR-GWH24AGD2-I-R32-1.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-by-gree-single-split-airco-r32-70-kw-set/28587/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Test_Verification_of_Conformity.pdf",
        "name": "Test Verification of Conformity"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_App_Operation_Manual.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Remote_control_manual_NL.pdf",
        "name": "Remote control manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Technical_Maintenance_Manual_NL.pdf",
        "name": "Technical Maintenance Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Declaration_of_Conformity.pdf",
        "name": "Declaration of Conformity"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Service_Manual_EN.pdf",
        "name": "Service Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002015_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002032",
    "sku": "AKTIE-CLIVIA-B-09-SET",
    "name": "Tosot CLIVIA by GREE Inverter airco Black R32 2,5 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "2.5",
    "coolingCapacity": "2.7",
    "heatingCapacity": "3",
    "description": "De Tosot Clivia Inverter set is een airco set van hoogwaardige kwaliteit. Hij heeft een koelvermogen van 2,5 kW maar kan ook verwarmen. Ook gebruikt deze airco unit R32 koelmiddel, dat beter is voor het milieu. Bovendien heeft deze airco een SEER van 8,5 W/W en een SCOP van 4,6 W/W wat hem zeer efficiënt en zuinig maakt. De Tosot Clivia Inverter beschikt over geavanceerde functies om het gebruik makkelijk te maken. Zo kan hij verbinden met het wifi netwerk zodat je hem, naast de afstandsbediening, ook met een app kan besturen. Daarnaast hoef je ook niet bang te zijn voor geluidsoverlast in de slaapkamer, de binnenunit produceert slechts 22 dB.\n\nDe Tosot Clivia Inverter 2,5 kW Set is ideaal voor kleine ruimtes tot 35 m² zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het goed uit de verf komt in zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De Tosot Clivia Inverter 2,5 kW Set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot Clivia Inverter set springt erboven uit door zijn zeer hoge efficiëntie, gebruiksgemak en moderne functies. Door zijn hoge SEER- en SCOP-waardes, behoudt deze airco door heel het jaar een goede efficiëntie. Het A+++ efficiëntie label en het gebruik van R32 koelmiddel dragen bij aan een beter klimaat en door zijn hoge gebruiksgemak is hij geschikt voor particulier en zakelijk gebruik. Waarbij je je niet hoeft te storen aan het geluid door zijn stille werking van 22 dB. Al deze kenmerken maken de airco tot een efficiënte en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "293 x 837 x 200 mm",
      "buitenunit": "555 x 732 x 330 mm"
    },
    "energyLabel": "A+++",
    "seer": "8.5",
    "scop": null,
    "soundLevel": "38 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.53 kg",
      "Global warming potential (GWP)": "358",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.1 kW",
      "Opgenomen vermogen bij koelen (max)": "1.3 kW",
      "Koelcapaciteit (min)": "2.7 kW",
      "Koelcapaciteit (max)": "2.7 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.15 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.4 kW",
      "Verwarmingscapaciteit (min)": "3 kW",
      "Verwarmingscapaciteit (max)": "3 kW",
      "SEER (koeling)": "8.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "111 kWh",
      "Energie-efficiëntieklasse koelen": "A+++",
      "Hoogte binnenunit": "293 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "200 mm",
      "Gewicht binnenunit": "9.5 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "732 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "25 kg",
      "Kleur binnenunit": "Zwart",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "390 m³/h",
      "Luchtdebiet koelen (max)": "610 m³/h",
      "Luchtdebiet verwarmen (min)": "390 m³/h",
      "Luchtdebiet verwarmen (max)": "610 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "22 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "38 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "22 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "38 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "58 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "58 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "61 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "61 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-25 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "30 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002032_81002032_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002032_81002032_main.webp",
        "type": "main",
        "filename": "81002032_81002032_main.webp"
      },
      {
        "path": "/images/airco-products/81002032_main.webp",
        "type": "main",
        "filename": "81002032_main.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_dimensions.webp",
        "type": "dimensions",
        "filename": "81002032_81002032_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002032_81002032_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002032_dimensions.webp",
        "type": "dimensions",
        "filename": "81002032_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002032_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002032_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_energy.webp",
        "type": "energy",
        "filename": "81002032_81002032_energy.webp"
      },
      {
        "path": "/images/airco-products/81002032_energy.webp",
        "type": "energy",
        "filename": "81002032_energy.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_other1.webp",
        "type": "other",
        "filename": "81002032_81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_other2.webp",
        "type": "other",
        "filename": "81002032_81002032_other2.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_other3.webp",
        "type": "other",
        "filename": "81002032_81002032_other3.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_other4.webp",
        "type": "other",
        "filename": "81002032_81002032_other4.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_other5.webp",
        "type": "other",
        "filename": "81002032_81002032_other5.webp"
      },
      {
        "path": "/images/airco-products/81002032_81002032_other6.webp",
        "type": "other",
        "filename": "81002032_81002032_other6.webp"
      },
      {
        "path": "/images/airco-products/81002032_other1.webp",
        "type": "other",
        "filename": "81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002032_other2.webp",
        "type": "other",
        "filename": "81002032_other2.webp"
      },
      {
        "path": "/images/airco-products/81002032_other3.webp",
        "type": "other",
        "filename": "81002032_other3.webp"
      },
      {
        "path": "/images/airco-products/81002032_other4.webp",
        "type": "other",
        "filename": "81002032_other4.webp"
      },
      {
        "path": "/images/airco-products/81002032_other5.webp",
        "type": "other",
        "filename": "81002032_other5.webp"
      },
      {
        "path": "/images/airco-products/81002032_other6.webp",
        "type": "other",
        "filename": "81002032_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-clivia-by-gree-inverter-airco-black-r32-25-kw-set/29374/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002032_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002032_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002032_Manual.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002032_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002032_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002032_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002032_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002033",
    "sku": "AKTIE-CLIVIA-B-12-SET",
    "name": "Tosot CLIVIA by GREE Inverter airco Black R32 3,5 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "3.5",
    "coolingCapacity": "3.51",
    "heatingCapacity": "3.81",
    "description": "De Tosot Clivia Inverter set is een airco set van hoogwaardige kwaliteit. Hij heeft een koelvermogen van 3,5 kW maar kan ook verwarmen. Ook gebruikt deze airco unit R32 koelmiddel, dat beter is voor het milieu. Bovendien heeft deze airco een SEER van 7,2 W/W en een SCOP van 4,1 W/W wat hem zeer efficiënt en zuinig maakt. De Tosot Clivia Inverter beschikt over geavanceerde functies om het gebruik makkelijk te maken. Zo kan hij verbinden met het wifi netwerk zodat je hem, naast de afstandsbediening, ook met een app kan besturen. Daarnaast hoef je ook niet bang te zijn voor geluidsoverlast in de slaapkamer, de binnenunit produceert slechts 25 dB.\n\nDe Tosot Clivia Inverter 3,5 kW Set is ideaal voor middelgrote ruimtes tot 60 m² zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het goed uit de verf komt in zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De Tosot Clivia Inverter 3,5 kW Set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot Clivia Inverter set springt erboven uit door zijn zeer hoge efficiëntie, gebruiksgemak en moderne functies. Door zijn hoge SEER- en SCOP-waardes, behoudt deze airco door heel het jaar een goede efficiëntie. Het A+++ efficiëntie label en het gebruik van R32 koelmiddel dragen bij aan een beter klimaat en door zijn hoge gebruiksgemak is hij geschikt voor particulier en zakelijk gebruik. Waarbij je je niet hoeft te storen aan het geluid door zijn stille werking van 25 dB. Al deze kenmerken maken de airco tot een efficiënte en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "293 x 837 x 200 mm",
      "buitenunit": "555 x 732 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "7.2",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.57 kg",
      "Global warming potential (GWP)": "385",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.22 kW",
      "Opgenomen vermogen bij koelen (max)": "1.4 kW",
      "Koelcapaciteit (min)": "3.51 kW",
      "Koelcapaciteit (max)": "3.51 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.22 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.65 kW",
      "Verwarmingscapaciteit (min)": "3.81 kW",
      "Verwarmingscapaciteit (max)": "3.81 kW",
      "SEER (koeling)": "7.2",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "170 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "293 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "200 mm",
      "Gewicht binnenunit": "9.5 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "732 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "25.5 kg",
      "Kleur binnenunit": "Zwart",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "390 m³/h",
      "Luchtdebiet koelen (max)": "680 m³/h",
      "Luchtdebiet verwarmen (min)": "390 m³/h",
      "Luchtdebiet verwarmen (max)": "680 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "25 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "25 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "63 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-25 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "30 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002033_81002032_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002033_81002032_main.webp",
        "type": "main",
        "filename": "81002033_81002032_main.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002032_dimensions.webp",
        "type": "dimensions",
        "filename": "81002033_81002032_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002032_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002033_81002032_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002033_energy.webp",
        "type": "energy",
        "filename": "81002033_81002033_energy.webp"
      },
      {
        "path": "/images/airco-products/81002033_energy.webp",
        "type": "energy",
        "filename": "81002033_energy.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002032_other1.webp",
        "type": "other",
        "filename": "81002033_81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002032_other2.webp",
        "type": "other",
        "filename": "81002033_81002032_other2.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002032_other3.webp",
        "type": "other",
        "filename": "81002033_81002032_other3.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002032_other4.webp",
        "type": "other",
        "filename": "81002033_81002032_other4.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002032_other5.webp",
        "type": "other",
        "filename": "81002033_81002032_other5.webp"
      },
      {
        "path": "/images/airco-products/81002033_81002032_other6.webp",
        "type": "other",
        "filename": "81002033_81002032_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-clivia-by-gree-inverter-airco-black-r32-35-kw-set/29373/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002033_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002033_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002033_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002033_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002033_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002033_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002033_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002034",
    "sku": "AKTIE-CLIVIA-B-18-SET",
    "name": "Tosot CLIVIA by GREE Inverter airco Black R32 5,3 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "5.3",
    "coolingCapacity": "5.3",
    "heatingCapacity": "5.35",
    "description": "De Tosot Clivia Inverter set is een airco set van hoogwaardige kwaliteit. Hij heeft een koelvermogen van 7,1 kW maar kan ook verwarmen. Ook gebruikt deze airco unit R32 koelmiddel, dat beter is voor het milieu. Bovendien heeft deze airco een SEER van 7,0 W/W en een SCOP van 4,3 W/W wat hem zeer efficiënt en zuinig maakt. De Tosot Clivia Inverter beschikt over geavanceerde functies om het gebruik makkelijk te maken. Zo kan hij verbinden met het wifi netwerk zodat je hem, naast de afstandsbediening, ook met een app kan besturen. Daarnaast hoef je ook niet bang te zijn voor geluidsoverlast in de slaapkamer, de binnenunit produceert slechts 33 dB.\n\nDe Tosot Clivia Inverter 7,1 kW Set is ideaal voor middelgrote ruimtes zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het goed uit de verf komt in zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De Tosot Clivia Inverter 7,1 kW Set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot Clivia Inverter set springt erboven uit door zijn zeer hoge efficiëntie, gebruiksgemak en moderne functies. Door zijn hoge SEER- en SCOP-waardes, behoudt deze airco door heel het jaar een goede efficiëntie. Het A++ efficiëntie label en het gebruik van R32 koelmiddel dragen bij aan een beter klimaat en door zijn hoge gebruiksgemak is hij geschikt voor particulier en zakelijk gebruik. Waarbij je je niet hoeft te storen aan het geluid door zijn stille werking van 26 dB. Al deze kenmerken maken de airco tot een efficiënte en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "311 x 993 x 222 mm",
      "buitenunit": "555 x 802 x 350 mm"
    },
    "energyLabel": "A++",
    "seer": "7.3",
    "scop": null,
    "soundLevel": "45 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.85 kg",
      "Global warming potential (GWP)": "574",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.1 kW",
      "Opgenomen vermogen bij koelen (max)": "2.3 kW",
      "Koelcapaciteit (min)": "5.3 kW",
      "Koelcapaciteit (max)": "5.3 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.24 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.35 kW",
      "Verwarmingscapaciteit (min)": "5.35 kW",
      "Verwarmingscapaciteit (max)": "5.35 kW",
      "SEER (koeling)": "7.3",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "254 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "311 mm",
      "Breedte binnenunit": "993 mm",
      "Diepte binnenunit": "222 mm",
      "Gewicht binnenunit": "12.5 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "802 mm",
      "Diepte buitenunit": "350 mm",
      "Gewicht buitenunit": "31.5 kg",
      "Kleur binnenunit": "Zwart",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "450 m³/h",
      "Luchtdebiet koelen (max)": "1000 m³/h",
      "Luchtdebiet verwarmen (min)": "450 m³/h",
      "Luchtdebiet verwarmen (max)": "1000 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "26 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "45 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "26 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "45 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "56 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.9 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-25 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "30 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "5,3 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002034_81002032_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002034_81002032_main.webp",
        "type": "main",
        "filename": "81002034_81002032_main.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002032_dimensions.webp",
        "type": "dimensions",
        "filename": "81002034_81002032_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002032_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002034_81002032_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002034_energy.webp",
        "type": "energy",
        "filename": "81002034_81002034_energy.webp"
      },
      {
        "path": "/images/airco-products/81002034_energy.webp",
        "type": "energy",
        "filename": "81002034_energy.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002032_other1.webp",
        "type": "other",
        "filename": "81002034_81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002032_other2.webp",
        "type": "other",
        "filename": "81002034_81002032_other2.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002032_other3.webp",
        "type": "other",
        "filename": "81002034_81002032_other3.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002032_other4.webp",
        "type": "other",
        "filename": "81002034_81002032_other4.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002032_other5.webp",
        "type": "other",
        "filename": "81002034_81002032_other5.webp"
      },
      {
        "path": "/images/airco-products/81002034_81002032_other6.webp",
        "type": "other",
        "filename": "81002034_81002032_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-clivia-by-gree-inverter-airco-black-r32-53-kw-set/29372/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002034_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002034_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002034_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002034_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002034_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002034_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002034_Technical_Document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002035",
    "sku": "AKTIE-CLIVIA-B-24-SET",
    "name": "Tosot CLIVIA by GREE Inverter airco Black R32 7,7 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "7.7",
    "coolingCapacity": "7.1",
    "heatingCapacity": "7.3",
    "description": "De Tosot Clivia Inverter set is een airco set van hoogwaardige kwaliteit. Hij heeft een koelvermogen van 7,7 kW maar kan met door de Inverter technologie ook verwarmen. Ook gebruikt deze airco unit R32 koelmiddel, dat beter is voor het milieu. Bovendien heeft deze airco een SEER van 7,0 W/W en een SCOP van 4,3 W/W wat hem zeer efficiënt en zuinig maakt. De Tosot Clivia Inverter beschikt over geavanceerde functies om het gebruik makkelijk te maken. Zo kan hij verbinden met het wifi netwerk zodat je hem, naast de afstandsbediening, ook met een app kan besturen. Daarnaast hoef je ook niet bang te zijn voor geluidsoverlast in de slaapkamer, de binnenunit produceert slechts 33 dB.\n\nDe Tosot Clivia Inverter 7,7 kW set is ideaal voor middelgrote ruimtes zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het goed uit de verf komt in zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De Tosot Clivia Inverter 7,7 kW set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot Clivia Inverter set springt erboven uit door zijn zeer hoge efficiëntie, gebruiksgemak en moderne functies. Door zijn hoge SEER- en SCOP-waardes, behoudt deze airco door heel het jaar een goede efficiëntie. Het A++ efficiëntie label en het gebruik van R32 koelmiddel dragen bij aan een beter klimaat en door zijn hoge gebruiksgemak is hij geschikt voor particulier en zakelijk gebruik. Waarbij je je niet hoeft te storen aan het geluid door zijn stille werking van 33 dB. Al deze kenmerken maken de airco tot een efficiënte en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "311 x 993 x 222 mm",
      "buitenunit": "660 x 958 x 402 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": "48 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.4 kg",
      "Global warming potential (GWP)": "945",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.45 kW",
      "Opgenomen vermogen bij koelen (max)": "2.9 kW",
      "Koelcapaciteit (min)": "7.1 kW",
      "Koelcapaciteit (max)": "7.1 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.35 kW",
      "Opgenomen vermogen bij verwarmen (max)": "3.5 kW",
      "Verwarmingscapaciteit (min)": "7.3 kW",
      "Verwarmingscapaciteit (max)": "7.3 kW",
      "SEER (koeling)": "7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "355 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "311 mm",
      "Breedte binnenunit": "993 mm",
      "Diepte binnenunit": "222 mm",
      "Gewicht binnenunit": "13 kg",
      "Hoogte buitenunit": "660 mm",
      "Breedte buitenunit": "958 mm",
      "Diepte buitenunit": "402 mm",
      "Gewicht buitenunit": "45 kg",
      "Kleur binnenunit": "Zwart",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "400 m³/h",
      "Luchtdebiet koelen (max)": "1000 m³/h",
      "Luchtdebiet verwarmen (min)": "400 m³/h",
      "Luchtdebiet verwarmen (max)": "1000 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "33 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "33 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "48 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "65 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "59 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "70 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "70 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-25 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "30 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "7,7 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002035_81002032_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002035_81002032_main.webp",
        "type": "main",
        "filename": "81002035_81002032_main.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002032_dimensions.webp",
        "type": "dimensions",
        "filename": "81002035_81002032_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002032_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002035_81002032_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002035_energy.webp",
        "type": "energy",
        "filename": "81002035_81002035_energy.webp"
      },
      {
        "path": "/images/airco-products/81002035_energy.webp",
        "type": "energy",
        "filename": "81002035_energy.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002032_other1.webp",
        "type": "other",
        "filename": "81002035_81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002032_other2.webp",
        "type": "other",
        "filename": "81002035_81002032_other2.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002032_other3.webp",
        "type": "other",
        "filename": "81002035_81002032_other3.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002032_other4.webp",
        "type": "other",
        "filename": "81002035_81002032_other4.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002032_other5.webp",
        "type": "other",
        "filename": "81002035_81002032_other5.webp"
      },
      {
        "path": "/images/airco-products/81002035_81002032_other6.webp",
        "type": "other",
        "filename": "81002035_81002032_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-clivia-by-gree-inverter-airco-black-r32-77-kw-set/29371/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002035_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002035_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002035_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002035_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002035_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002035_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002035_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002036",
    "sku": "AKTIE-CLIVIA-W-09-SET",
    "name": "Tosot CLIVIA by GREE Inverter airco White R32 2,5 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "2.5",
    "coolingCapacity": "2.7",
    "heatingCapacity": "3",
    "description": "De Tosot Clivia Inverter set is een airco set van hoogwaardige kwaliteit. Hij heeft een koelvermogen van 2,7 kW maar kan ook verwarmen. Ook gebruikt deze airco unit R32 koelmiddel, dat beter is voor het milieu. Bovendien heeft deze airco een SEER van 8,5 W/W en een SCOP van 4,6 W/W wat hem zeer efficiënt en zuinig maakt. De Tosot Clivia Inverter beschikt over geavanceerde functies om het gebruik makkelijk te maken. Zo kan hij verbinden met het wifi netwerk zodat je hem, naast de afstandsbediening, ook met een app kan besturen. Daarnaast hoef je ook niet bang te zijn voor geluidsoverlast in de slaapkamer, de binnenunit produceert slechts 22 dB.\n\nDe Tosot Clivia Inverter 2,7 kW Set is ideaal voor middelgrote ruimtes zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het goed uit de verf komt in zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De Tosot Clivia Inverter 2,7 kW Set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot Clivia Inverter set springt erboven uit door zijn zeer hoge efficiëntie, gebruiksgemak en moderne functies. Door zijn hoge SEER- en SCOP-waardes, behoudt deze airco door heel het jaar een goede efficiëntie. Het A+++ efficiëntie label en het gebruik van R32 koelmiddel dragen bij aan een beter klimaat en door zijn hoge gebruiksgemak is hij geschikt voor particulier en zakelijk gebruik. Waarbij je je niet hoeft te storen aan het geluid door zijn stille werking van 22 dB. Al deze kenmerken maken de airco tot een efficiënte en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "293 x 837 x 200 mm",
      "buitenunit": "555 x 732 x 330 mm"
    },
    "energyLabel": "A+++",
    "seer": "8.5",
    "scop": null,
    "soundLevel": "38 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.53 kg",
      "Global warming potential (GWP)": "358",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.1 kW",
      "Opgenomen vermogen bij koelen (max)": "1.3 kW",
      "Koelcapaciteit (min)": "2.7 kW",
      "Koelcapaciteit (max)": "2.7 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.15 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.4 kW",
      "Verwarmingscapaciteit (min)": "3 kW",
      "Verwarmingscapaciteit (max)": "3 kW",
      "SEER (koeling)": "8.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "111 kWh",
      "Energie-efficiëntieklasse koelen": "A+++",
      "Hoogte binnenunit": "293 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "200 mm",
      "Gewicht binnenunit": "9.5 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "732 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "25 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "390 m³/h",
      "Luchtdebiet koelen (max)": "610 m³/h",
      "Luchtdebiet verwarmen (min)": "390 m³/h",
      "Luchtdebiet verwarmen (max)": "610 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "22 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "38 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "22 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "38 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "58 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "58 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "61 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "61 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-25 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "30 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002036_81002036_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002036_81002036_main.webp",
        "type": "main",
        "filename": "81002036_81002036_main.webp"
      },
      {
        "path": "/images/airco-products/81002036_main.webp",
        "type": "main",
        "filename": "81002036_main.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002036_dimensions.webp",
        "type": "dimensions",
        "filename": "81002036_81002036_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002036_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002036_81002036_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002036_dimensions.webp",
        "type": "dimensions",
        "filename": "81002036_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002036_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002036_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002036_energy.webp",
        "type": "energy",
        "filename": "81002036_81002036_energy.webp"
      },
      {
        "path": "/images/airco-products/81002036_energy.webp",
        "type": "energy",
        "filename": "81002036_energy.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002032_other1.webp",
        "type": "other",
        "filename": "81002036_81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002036_other2.webp",
        "type": "other",
        "filename": "81002036_81002036_other2.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002036_other3.webp",
        "type": "other",
        "filename": "81002036_81002036_other3.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002036_other4.webp",
        "type": "other",
        "filename": "81002036_81002036_other4.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002036_other5.webp",
        "type": "other",
        "filename": "81002036_81002036_other5.webp"
      },
      {
        "path": "/images/airco-products/81002036_81002036_other6.webp",
        "type": "other",
        "filename": "81002036_81002036_other6.webp"
      },
      {
        "path": "/images/airco-products/81002036_other2.webp",
        "type": "other",
        "filename": "81002036_other2.webp"
      },
      {
        "path": "/images/airco-products/81002036_other3.webp",
        "type": "other",
        "filename": "81002036_other3.webp"
      },
      {
        "path": "/images/airco-products/81002036_other4.webp",
        "type": "other",
        "filename": "81002036_other4.webp"
      },
      {
        "path": "/images/airco-products/81002036_other5.webp",
        "type": "other",
        "filename": "81002036_other5.webp"
      },
      {
        "path": "/images/airco-products/81002036_other6.webp",
        "type": "other",
        "filename": "81002036_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-clivia-by-gree-inverter-airco-white-r32-25-kw-set/29370/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002036_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002036_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002036_manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002036_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002036_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002036_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002037",
    "sku": "AKTIE-CLIVIA-W-12-SET",
    "name": "Tosot CLIVIA by GREE Inverter airco White R32 3,5 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "3.5",
    "coolingCapacity": "3.51",
    "heatingCapacity": "3.81",
    "description": "De Tosot Clivia Inverter set is een airco set van hoogwaardige kwaliteit. Hij heeft een koelvermogen van 3,5 kW maar kan ook verwarmen. Ook gebruikt deze airco unit R32 koelmiddel, dat beter is voor het milieu. Bovendien heeft deze airco een SEER van 8,5 W/W en een SCOP van 4,6 W/W wat hem zeer efficiënt en zuinig maakt. De Tosot Clivia Inverter beschikt over geavanceerde functies om het gebruik makkelijk te maken. Zo kan hij verbinden met het wifi netwerk zodat je hem, naast de afstandsbediening, ook met een app kan besturen. Daarnaast hoef je ook niet bang te zijn voor geluidsoverlast in de slaapkamer, de binnenunit produceert slechts 25 dB.\n\nDe Tosot Clivia Inverter 3,5 kW Set is ideaal voor middelgrote ruimtes zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het goed uit de verf komt in zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De Tosot Clivia Inverter 3,5 kW Set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot Clivia Inverter set springt erboven uit door zijn zeer hoge efficiëntie, gebruiksgemak en moderne functies. Door zijn hoge SEER- en SCOP-waardes, behoudt deze airco door heel het jaar een goede efficiëntie. Het A+++ efficiëntie label en het gebruik van R32 koelmiddel dragen bij aan een beter klimaat en door zijn hoge gebruiksgemak is hij geschikt voor particulier en zakelijk gebruik. Waarbij je je niet hoeft te storen aan het geluid door zijn stille werking van 25 dB. Al deze kenmerken maken de airco tot een efficiënte en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "293 x 837 x 200 mm",
      "buitenunit": "555 x 802 x 350 mm"
    },
    "energyLabel": "A+++",
    "seer": "8.5",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.8 kg",
      "Global warming potential (GWP)": "540",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.04 kW",
      "Opgenomen vermogen bij koelen (max)": "1.4 kW",
      "Koelcapaciteit (min)": "3.51 kW",
      "Koelcapaciteit (max)": "3.51 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.15 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.8 kW",
      "Verwarmingscapaciteit (min)": "3.81 kW",
      "Verwarmingscapaciteit (max)": "3.81 kW",
      "SEER (koeling)": "8.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "144 kWh",
      "Energie-efficiëntieklasse koelen": "A+++",
      "Hoogte binnenunit": "293 mm",
      "Breedte binnenunit": "837 mm",
      "Diepte binnenunit": "200 mm",
      "Gewicht binnenunit": "9.5 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "802 mm",
      "Diepte buitenunit": "350 mm",
      "Gewicht buitenunit": "30 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "390 m³/h",
      "Luchtdebiet koelen (max)": "680 m³/h",
      "Luchtdebiet verwarmen (min)": "390 m³/h",
      "Luchtdebiet verwarmen (max)": "680 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "25 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "25 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "63 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-25 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "30 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "15 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002037_81002036_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002037_81002036_main.webp",
        "type": "main",
        "filename": "81002037_81002036_main.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002036_dimensions.webp",
        "type": "dimensions",
        "filename": "81002037_81002036_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002036_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002037_81002036_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002037_energy.webp",
        "type": "energy",
        "filename": "81002037_81002037_energy.webp"
      },
      {
        "path": "/images/airco-products/81002037_energy.webp",
        "type": "energy",
        "filename": "81002037_energy.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002032_other1.webp",
        "type": "other",
        "filename": "81002037_81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002036_other2.webp",
        "type": "other",
        "filename": "81002037_81002036_other2.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002036_other3.webp",
        "type": "other",
        "filename": "81002037_81002036_other3.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002036_other4.webp",
        "type": "other",
        "filename": "81002037_81002036_other4.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002036_other5.webp",
        "type": "other",
        "filename": "81002037_81002036_other5.webp"
      },
      {
        "path": "/images/airco-products/81002037_81002036_other6.webp",
        "type": "other",
        "filename": "81002037_81002036_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-clivia-by-gree-inverter-airco-white-r32-35-kw-set/29369/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002037_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002037_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002037_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002037_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002037_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002037_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002037_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002038",
    "sku": "AKTIE-CLIVIA-W-18-SET",
    "name": "Tosot CLIVIA by GREE Inverter airco White R32 5,3 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "5.3",
    "coolingCapacity": "5.3",
    "heatingCapacity": "5.6",
    "description": "De Tosot Clivia Inverter set is een airco set van hoogwaardige kwaliteit. Hij heeft een koelvermogen van 5,3 kW maar kan ook verwarmen. Ook gebruikt deze airco unit R32 koelmiddel, dat beter is voor het milieu. Bovendien heeft deze airco een SEER van 8,0 W/W en een SCOP van 4,6 W/W wat hem zeer efficiënt en zuinig maakt. De Tosot Clivia Inverter beschikt over geavanceerde functies om het gebruik makkelijk te maken. Zo kan hij verbinden met het wifi netwerk zodat je hem, naast de afstandsbediening, ook met een app kan besturen. Daarnaast hoef je ook niet bang te zijn voor geluidsoverlast in de slaapkamer, de binnenunit produceert slechts 26 dB.\n\nDe Tosot Clivia Inverter 5,3 kW Set is ideaal voor middelgrote ruimtes zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het goed uit de verf komt in zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De Tosot Clivia Inverter 5,3 kW Set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot Clivia Inverter set springt erboven uit door zijn zeer hoge efficiëntie, gebruiksgemak en moderne functies. Door zijn hoge SEER- en SCOP-waardes, behoudt deze airco door heel het jaar een goede efficiëntie. Het A++ efficiëntie label en het gebruik van R32 koelmiddel dragen bij aan een beter klimaat en door zijn hoge gebruiksgemak is hij geschikt voor particulier en zakelijk gebruik. Waarbij je je niet hoeft te storen aan het geluid door zijn stille werking van 26 dB. Al deze kenmerken maken de airco tot een efficiënte en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "311 x 993 x 222 mm",
      "buitenunit": "555 x 873 x 376 mm"
    },
    "energyLabel": "A+++",
    "seer": "8",
    "scop": null,
    "soundLevel": "45 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.95 kg",
      "Global warming potential (GWP)": "641",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.08 kW",
      "Opgenomen vermogen bij koelen (max)": "2.3 kW",
      "Koelcapaciteit (min)": "5.3 kW",
      "Koelcapaciteit (max)": "5.3 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.18 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.3 kW",
      "Verwarmingscapaciteit (min)": "5.6 kW",
      "Verwarmingscapaciteit (max)": "5.6 kW",
      "SEER (koeling)": "8",
      "Energie-efficiëntieklasse koelen": "A+++",
      "Hoogte binnenunit": "311 mm",
      "Breedte binnenunit": "993 mm",
      "Diepte binnenunit": "222 mm",
      "Gewicht binnenunit": "12.5 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "873 mm",
      "Diepte buitenunit": "376 mm",
      "Gewicht buitenunit": "37 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "450 m³/h",
      "Luchtdebiet koelen (max)": "1000 m³/h",
      "Luchtdebiet verwarmen (min)": "450 m³/h",
      "Luchtdebiet verwarmen (max)": "1000 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "26 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "45 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "26 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "45 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "56 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.9 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-25 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "30 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "5,3 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002038_81002036_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002038_81002036_main.webp",
        "type": "main",
        "filename": "81002038_81002036_main.webp"
      },
      {
        "path": "/images/airco-products/81002038_sk22564_81002038_dimensions.webp",
        "type": "dimensions",
        "filename": "81002038_sk22564_81002038_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002038_sk22563_81002038_energy.webp",
        "type": "energy",
        "filename": "81002038_sk22563_81002038_energy.webp"
      },
      {
        "path": "/images/airco-products/81002038_81002032_other1.webp",
        "type": "other",
        "filename": "81002038_81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002038_81002036_other2.webp",
        "type": "other",
        "filename": "81002038_81002036_other2.webp"
      },
      {
        "path": "/images/airco-products/81002038_81002036_other3.webp",
        "type": "other",
        "filename": "81002038_81002036_other3.webp"
      },
      {
        "path": "/images/airco-products/81002038_81002036_other4.webp",
        "type": "other",
        "filename": "81002038_81002036_other4.webp"
      },
      {
        "path": "/images/airco-products/81002038_81002036_other5.webp",
        "type": "other",
        "filename": "81002038_81002036_other5.webp"
      },
      {
        "path": "/images/airco-products/81002038_81002036_other6.webp",
        "type": "other",
        "filename": "81002038_81002036_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-clivia-by-gree-inverter-airco-white-r32-53-kw-set/29368/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk22614_81002032_dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk22568_81002038_energy.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk22569_81002038_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk22570_81002038_Manual_2_EN.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk22571_81002038_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002038_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002038_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002039",
    "sku": "AKTIE-CLIVIA-W-24-SET",
    "name": "Tosot CLIVIA by GREE Inverter airco White R32 7,7 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "7.7",
    "coolingCapacity": "7.1",
    "heatingCapacity": "7.3",
    "description": "De Tosot Clivia Inverter set is een airco set van hoogwaardige kwaliteit. Hij heeft een koelvermogen van 7,1 kW maar kan met door de Inverter technologie ook verwarmen. Ook gebruikt deze airco unit R32 koelmiddel, dat beter is voor het milieu. Bovendien heeft deze airco een SEER van 7,0 W/W en een SCOP van 4,3 W/W wat hem zeer efficiënt en zuinig maakt. De Tosot Clivia Inverter beschikt over geavanceerde functies om het gebruik makkelijk te maken. Zo kan hij verbinden met het wifi netwerk zodat je hem, naast de afstandsbediening, ook met een app kan besturen. Daarnaast hoef je ook niet bang te zijn voor geluidsoverlast in de slaapkamer, de binnenunit produceert slechts 33 dB.\n\nDe Tosot Clivia Inverter 7,1 kW set is ideaal voor middelgrote ruimtes zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het goed uit de verf komt in zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De Tosot Clivia Inverter 7,1 kW set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe Tosot Clivia Inverter set springt erboven uit door zijn zeer hoge efficiëntie, gebruiksgemak en moderne functies. Door zijn hoge SEER- en SCOP-waardes, behoudt deze airco door heel het jaar een goede efficiëntie. Het A++ efficiëntie label en het gebruik van R32 koelmiddel dragen bij aan een beter klimaat en door zijn hoge gebruiksgemak is hij geschikt voor particulier en zakelijk gebruik. Waarbij je je niet hoeft te storen aan het geluid door zijn stille werking van 33 dB. Al deze kenmerken maken de airco tot een efficiënte en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "311 x 993 x 222 mm",
      "buitenunit": "660 x 958 x 402 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": "48 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.4 kg",
      "Global warming potential (GWP)": "945",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.45 kW",
      "Opgenomen vermogen bij koelen (max)": "2.9 kW",
      "Koelcapaciteit (min)": "7.1 kW",
      "Koelcapaciteit (max)": "7.1 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.35 kW",
      "Opgenomen vermogen bij verwarmen (max)": "3.5 kW",
      "Verwarmingscapaciteit (min)": "7.3 kW",
      "Verwarmingscapaciteit (max)": "7.3 kW",
      "SEER (koeling)": "7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "355 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "311 mm",
      "Breedte binnenunit": "993 mm",
      "Diepte binnenunit": "222 mm",
      "Gewicht binnenunit": "13 kg",
      "Hoogte buitenunit": "660 mm",
      "Breedte buitenunit": "958 mm",
      "Diepte buitenunit": "402 mm",
      "Gewicht buitenunit": "45 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "400 m³/h",
      "Luchtdebiet koelen (max)": "1000 m³/h",
      "Luchtdebiet verwarmen (min)": "400 m³/h",
      "Luchtdebiet verwarmen (max)": "1000 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "33 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "33 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "48 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "65 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "59 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "70 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "70 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-25 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "30 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "7,7 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002039_81002036_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002039_81002036_main.webp",
        "type": "main",
        "filename": "81002039_81002036_main.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002036_dimensions.webp",
        "type": "dimensions",
        "filename": "81002039_81002036_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002036_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002039_81002036_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002039_energy.webp",
        "type": "energy",
        "filename": "81002039_81002039_energy.webp"
      },
      {
        "path": "/images/airco-products/81002039_energy.webp",
        "type": "energy",
        "filename": "81002039_energy.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002032_other1.webp",
        "type": "other",
        "filename": "81002039_81002032_other1.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002036_other2.webp",
        "type": "other",
        "filename": "81002039_81002036_other2.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002036_other3.webp",
        "type": "other",
        "filename": "81002039_81002036_other3.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002036_other4.webp",
        "type": "other",
        "filename": "81002039_81002036_other4.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002036_other5.webp",
        "type": "other",
        "filename": "81002039_81002036_other5.webp"
      },
      {
        "path": "/images/airco-products/81002039_81002036_other6.webp",
        "type": "other",
        "filename": "81002039_81002036_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-clivia-by-gree-inverter-airco-white-r32-77-kw-set/29366/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002039_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002039_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002039_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002039_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002039_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002039_App_Operation_Manual_EN.pdf",
        "name": "App Operation Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002039_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002042",
    "sku": "AKTIE-WTS-12R-SET",
    "name": "Tosot CONSOLE by GREE Inverter airco R32 3,5 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "3.5",
    "coolingCapacity": "3.5",
    "heatingCapacity": "3.8",
    "description": "De TOSOT CONSOLE WTS-12R 3,5 kW Inverter Set by GREE is een efficiënte en veelzijdige oplossing voor klimaatbeheersing in kleine tot middelgrote ruimtes. Met een koelvermogen van 3,5 kW en uitgerust met geavanceerde invertertechnologie, biedt deze console een betrouwbare en energiezuinige temperatuurregeling. De unit heeft een SEER van 7,2 en een SCOP van 4,1, wat zorgt voor uitstekende prestaties, zowel in de zomer als in de winter. Met energielabel A++ voor koelen en A+ voor verwarmen is dit systeem ontworpen om de energiekosten laag te houden en tegelijkertijd een hoog comfortniveau te handhaven. Bovendien werkt de unit bijzonder stil, met een geluidsniveau van slechts 25 dB, waardoor het ideaal is voor ruimtes waar stilte gewenst is. De ingebouwde Wifi-functionaliteit maakt bediening op afstand mogelijk, wat zorgt voor extra gemak en flexibiliteit.\n\nDe TOSOT CONSOLE WTS-12R is ideaal voor het beheersen van het klimaat in kleinere ruimtes zoals slaapkamers, thuiskantoren, en compacte woonkamers. Het compacte en stijlvolle ontwerp past gemakkelijk in verschillende omgevingen, terwijl de stille werking en Wifi-functionaliteit zorgen voor extra comfort en gebruiksgemak.\n\nDeze console unit is ontworpen voor eenvoudige installatie en wordt geleverd met alle benodigde onderdelen en een duidelijke handleiding om het installatieproces soepel te laten verlopen. De ingebouwde Wifi-functionaliteit zorgt ervoor dat de temperatuur eenvoudig op afstand kan worden geregeld, wat ideaal is voor moderne huishoudens en kantoren.\n\nDe TOSOT CONSOLE WTS-12R 3,5 kW Inverter Set by GREE biedt een ideale combinatie van efficiëntie, comfort en gebruiksgemak. Met zijn SEER van 7,2 en SCOP van 4,1 levert deze unit uitstekende prestaties in zowel koeling als verwarming, terwijl het lage geluidsniveau van 25 dB zorgt voor een stille en serene omgeving. De ingebouwde Wifi-functionaliteit maakt bediening op afstand mogelijk, wat extra flexibiliteit biedt in het beheer van het binnenklimaat. Het gebruik van het milieuvriendelijke R32 koelmiddel en de hoge energieclassificaties maken dit systeem tot een slimme keuze voor wie op zoek is naar duurzame en kosteneffectieve klimaatbeheersing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "600 x 700 x 215 mm",
      "buitenunit": "555 x 802 x 350 mm"
    },
    "energyLabel": "A++",
    "seer": "7.2",
    "scop": null,
    "soundLevel": "44 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (laag)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.755 kg",
      "Global warming potential (GWP)": "510",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.23 kW",
      "Opgenomen vermogen bij koelen (max)": "1.55 kW",
      "Koelcapaciteit (min)": "3.5 kW",
      "Koelcapaciteit (max)": "3.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.18 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.7 kW",
      "Verwarmingscapaciteit (min)": "3.8 kW",
      "Verwarmingscapaciteit (max)": "3.8 kW",
      "SEER (koeling)": "7.2",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "170 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "600 mm",
      "Breedte binnenunit": "700 mm",
      "Diepte binnenunit": "215 mm",
      "Gewicht binnenunit": "16 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "802 mm",
      "Diepte buitenunit": "350 mm",
      "Gewicht buitenunit": "27.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "7",
      "Luchtdebiet koelen (min)": "280 m³/h",
      "Luchtdebiet koelen (max)": "600 m³/h",
      "Luchtdebiet verwarmen (min)": "280 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "25 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "44 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "25 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "44 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "55 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "53 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "63 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.2 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "43 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-22 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "20 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002042_81002042_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002042_81002042_main.webp",
        "type": "main",
        "filename": "81002042_81002042_main.webp"
      },
      {
        "path": "/images/airco-products/81002042_main.webp",
        "type": "main",
        "filename": "81002042_main.webp"
      },
      {
        "path": "/images/airco-products/81002042_81002042_dimensions.webp",
        "type": "dimensions",
        "filename": "81002042_81002042_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002042_81002042_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002042_81002042_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002042_dimensions.webp",
        "type": "dimensions",
        "filename": "81002042_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002042_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002042_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002042_81002042_energy.webp",
        "type": "energy",
        "filename": "81002042_81002042_energy.webp"
      },
      {
        "path": "/images/airco-products/81002042_energy.webp",
        "type": "energy",
        "filename": "81002042_energy.webp"
      },
      {
        "path": "/images/airco-products/81002042_81002042_other1.webp",
        "type": "other",
        "filename": "81002042_81002042_other1.webp"
      },
      {
        "path": "/images/airco-products/81002042_81002042_other2.webp",
        "type": "other",
        "filename": "81002042_81002042_other2.webp"
      },
      {
        "path": "/images/airco-products/81002042_81002042_other3.webp",
        "type": "other",
        "filename": "81002042_81002042_other3.webp"
      },
      {
        "path": "/images/airco-products/81002042_other1.webp",
        "type": "other",
        "filename": "81002042_other1.webp"
      },
      {
        "path": "/images/airco-products/81002042_other2.webp",
        "type": "other",
        "filename": "81002042_other2.webp"
      },
      {
        "path": "/images/airco-products/81002042_other3.webp",
        "type": "other",
        "filename": "81002042_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-console-by-gree-inverter-airco-r32-35-kw-set/29367/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002042_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002042_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002042_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002042_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002042_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002043",
    "sku": "AKTIE-WTS-18R-SET",
    "name": "Tosot CONSOLE by GREE Inverter airco R32 5,2 kW set",
    "brand": "Tosot",
    "type": "single-split",
    "category": "Tosot Single-split",
    "capacity": "5.2",
    "coolingCapacity": "5.2",
    "heatingCapacity": "5.3",
    "description": "De TOSOT CONSOLE WTS-18R 5,2 kW Inverter Set by GREE is een krachtige en veelzijdige oplossing voor het beheren van het binnenklimaat in middelgrote ruimtes. Deze console unit, met een vermogen van 5,2 kW, biedt zowel efficiënte koeling als verwarming, ondersteund door geavanceerde invertertechnologie die zorgt voor stabiele prestaties en nauwkeurige temperatuurregeling. De unit heeft een SEER van 7,2 W/W en een SCOP van 4,0 W/W, wat een hoge energie-efficiëntie garandeert, zowel tijdens het koelen in de zomer als bij het verwarmen in de winter. Met energielabel A++ voor koelen en A+ voor verwarmen, is dit systeem ontworpen om energiekosten laag te houden en tegelijkertijd optimaal comfort te bieden. Bovendien werkt de unit vrijwel geruisloos met een geluidsniveau van slechts 32 dB, wat zorgt voor een stille en comfortabele omgeving.\n\nDe TOSOT CONSOLE WTS-18R is geschikt voor middelgrote ruimtes zoals woonkamers, slaapkamers, en kantoren waar een betrouwbare en stille klimaatoplossing vereist is. Dankzij het compacte ontwerp kan de console eenvoudig in diverse omgevingen worden geplaatst, zonder afbreuk te doen aan het interieur.\n\nDeze console unit is eenvoudig te installeren en wordt geleverd met alle benodigde onderdelen en een duidelijke handleiding om het proces soepel te laten verlopen. Het compacte ontwerp zorgt ervoor dat de unit gemakkelijk in elke ruimte kan worden geplaatst, terwijl de installatie snel en zonder complicaties kan worden uitgevoerd.\n\nDe TOSOT CONSOLE WTS-18R 5,2 kW Inverter Set by GREE combineert kracht, efficiëntie en stille werking in een veelzijdige en compacte console unit. Met een SEER van 7,2 W/W en een SCOP van 4,0 W/W biedt dit systeem betrouwbare prestaties gedurende het hele jaar, terwijl het lage geluidsniveau van 32 dB ervoor zorgt dat het vrijwel onopgemerkt functioneert. Het gebruik van het milieuvriendelijke R32 koelmiddel en de hoge energieclassificaties maken deze unit tot een duurzame en kosteneffectieve keuze voor wie op zoek is naar hoogwaardige klimaatregeling zonder concessies te doen aan comfort of stijl.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "600 x 700 x 215 mm",
      "buitenunit": "660 x 958 x 402 mm"
    },
    "energyLabel": "A++",
    "seer": "7.2",
    "scop": null,
    "soundLevel": "47 dB(A)",
    "specifications": {
      "Categoriecode": "552",
      "Model (binnenunit)": "Wand (laag)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1007 kg",
      "Global warming potential (GWP)": "680",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.1 kW",
      "Opgenomen vermogen bij koelen (max)": "2.25 kW",
      "Koelcapaciteit (min)": "5.2 kW",
      "Koelcapaciteit (max)": "5.2 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.2 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.4 kW",
      "Verwarmingscapaciteit (min)": "5.3 kW",
      "Verwarmingscapaciteit (max)": "5.3 kW",
      "SEER (koeling)": "7.2",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "253 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "600 mm",
      "Breedte binnenunit": "700 mm",
      "Diepte binnenunit": "215 mm",
      "Gewicht binnenunit": "16 kg",
      "Hoogte buitenunit": "660 mm",
      "Breedte buitenunit": "958 mm",
      "Diepte buitenunit": "402 mm",
      "Gewicht buitenunit": "41 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "7",
      "Luchtdebiet koelen (min)": "320 m³/h",
      "Luchtdebiet koelen (max)": "700 m³/h",
      "Luchtdebiet verwarmen (min)": "320 m³/h",
      "Luchtdebiet verwarmen (max)": "700 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "32 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "32 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "47 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "59 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "43 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-22 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "5,2 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81002043_81002043_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002043_81002043_main.webp",
        "type": "main",
        "filename": "81002043_81002043_main.webp"
      },
      {
        "path": "/images/airco-products/81002043_main.webp",
        "type": "main",
        "filename": "81002043_main.webp"
      },
      {
        "path": "/images/airco-products/81002043_81002043_dimensions.webp",
        "type": "dimensions",
        "filename": "81002043_81002043_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002043_81002043_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002043_81002043_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002043_dimensions.webp",
        "type": "dimensions",
        "filename": "81002043_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002043_dimensions2.webp",
        "type": "dimensions",
        "filename": "81002043_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81002043_81002043_energy.webp",
        "type": "energy",
        "filename": "81002043_81002043_energy.webp"
      },
      {
        "path": "/images/airco-products/81002043_energy.webp",
        "type": "energy",
        "filename": "81002043_energy.webp"
      },
      {
        "path": "/images/airco-products/81002043_81002042_other1.webp",
        "type": "other",
        "filename": "81002043_81002042_other1.webp"
      },
      {
        "path": "/images/airco-products/81002043_81002042_other3.webp",
        "type": "other",
        "filename": "81002043_81002042_other3.webp"
      },
      {
        "path": "/images/airco-products/81002043_81002043_other3.webp",
        "type": "other",
        "filename": "81002043_81002043_other3.webp"
      },
      {
        "path": "/images/airco-products/81002043_other3.webp",
        "type": "other",
        "filename": "81002043_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-console-by-gree-inverter-airco-r32-52-kw-set/30113/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002043_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002043_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002043_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002043_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002043_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002062",
    "sku": "AKTIE-IMD-INF-09-SET",
    "name": "MaxiCool INFINI 2,5 kW R32 Invertor airco 09HDI met WIFI set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De IMD-INF-09HDI INFINI 2,5 kW R32 Inverter Airco Set met WIFI is een geavanceerde airconditioner die zowel koelen als verwarmen biedt met een koelcapaciteit van 2,5 kW. Uitgerust met de nieuwste Inverter-technologie en het energiezuinige R32 koelmiddel, levert deze airco een uitzonderlijke prestaties en energie-efficiëntie. Met een geluidsniveau van slechts 20 dB(A) voor de binnenunit en 55 dB(A) voor de buitenunit, biedt het een stille werking die ideaal is voor diverse toepassingen.\n\nDe IMD-INF-09HDI is ideaal voor gebruik in kleine tot middelgrote ruimtes zoals woonkamers, kantoorruimtes en vergaderruimtes. Het biedt flexibele en efficiënte klimaatregeling, waardoor het perfect is voor zowel commerciële als particuliere toepassingen.\n\nDeze airco set is ontworpen voor eenvoudige installatie, met een complete installatiekit en een gedetailleerde handleiding inbegrepen. Dit bespaart tijd en kosten bij de installatie. IMD biedt een garantie van 3 jaar op de INFINI 2,5kW, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van IMD.\n\nDe IMD-INF-09HDI INFINI onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en geavanceerde technologie. Het gebruik van milieuvriendelijk R32 koelmiddel, het A++ energielabel en de wifi-connectiviteit maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 20 dB(A) voor de binnenunit, en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "551",
      "Energielabel": "A++",
      "Capaciteit": "2,5 kW"
    },
    "image": "/images/airco-products/81002062_sk21947_MaxiCool_infini_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002062_sk21947_MaxiCool_infini_main.webp",
        "type": "main",
        "filename": "81002062_sk21947_MaxiCool_infini_main.webp"
      },
      {
        "path": "/images/airco-products/81002062_sk17398_81002062_dimensions.webp",
        "type": "dimensions",
        "filename": "81002062_sk17398_81002062_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002062_sk17399_81002062_dimensions_2.webp",
        "type": "dimensions",
        "filename": "81002062_sk17399_81002062_dimensions_2.webp"
      },
      {
        "path": "/images/airco-products/81002062_sk21948_MaxiCool_infini_other1.webp",
        "type": "other",
        "filename": "81002062_sk21948_MaxiCool_infini_other1.webp"
      },
      {
        "path": "/images/airco-products/81002062_sk21949_MaxiCool_infini_other2.webp",
        "type": "other",
        "filename": "81002062_sk21949_MaxiCool_infini_other2.webp"
      },
      {
        "path": "/images/airco-products/81002062_sk21950_MaxiCool_infini_other3.webp",
        "type": "other",
        "filename": "81002062_sk21950_MaxiCool_infini_other3.webp"
      },
      {
        "path": "/images/airco-products/81002062_sk21951_MaxiCool_infini_other4.webp",
        "type": "other",
        "filename": "81002062_sk21951_MaxiCool_infini_other4.webp"
      },
      {
        "path": "/images/airco-products/81002062_sk21952_MaxiCool_infini_other5.webp",
        "type": "other",
        "filename": "81002062_sk21952_MaxiCool_infini_other5.webp"
      },
      {
        "path": "/images/airco-products/81002062_sk21953_MaxiCool_infini_other6.webp",
        "type": "other",
        "filename": "81002062_sk21953_MaxiCool_infini_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-25-kw-r32-invertor-airco-09hdi-met-wifi-set/30173/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Remote_control_manual.pdf",
        "name": "Remote Control Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_Safety_EN.pdf",
        "name": "Safety manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_Service_EN.pdf",
        "name": "Service manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Technical_Document_EN.pdf",
        "name": "Technical Document EN"
      }
    ]
  },
  {
    "id": "81002063",
    "sku": "AKTIE-IMD-INF-12-SET",
    "name": "MaxiCool INFINI 3,5 kW R32 Inverter airco 12HDI met WIFI set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "3.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De IMD-INF-12HDI INFINI 3,5 kW R32 Inverter Airco Set met WIFI is een krachtige en energiezuinige airconditioner die zowel koelen als verwarmen mogelijk maakt met een capaciteit van 3,5 kW. Voorzien van de nieuwste Inverter-technologie en het milieuvriendelijke R32 koelmiddel, biedt deze airco uitstekende prestaties met een energie-efficiëntie die uw energiekosten verlaagt. Het geluidsniveau van de binnenunit is slechts 21 dB(A), terwijl de buitenunit 56 dB(A) produceert, wat zorgt voor een rustige werking.\n\nDe IMD-INF-12HDI is ideaal voor gebruik in middelgrote tot grote ruimtes, zoals woonkamers, commerciële kantoren en vergaderruimtes. Het biedt flexibele en efficiënte klimaatregeling, wat het perfect maakt voor zowel commerciële als particuliere toepassingen.\n\nDeze binnenunit is ontworpen voor eenvoudige installatie, met een bijgeleverde handleiding. Infini biedt een garantie van 3 jaar, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van uw investering. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van Infini.\n\nDe IMD-INF-12HDI INFINI onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en geavanceerde technologie. Het milieuvriendelijke R32 koelmiddel, het A++ energielabel en de wifi-connectiviteit maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 21 dB(A) voor de binnenunit en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "551",
      "Energielabel": "A++",
      "Capaciteit": "3,5 kW"
    },
    "image": "/images/airco-products/81002063_sk21947_MaxiCool_infini_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002063_sk21947_MaxiCool_infini_main.webp",
        "type": "main",
        "filename": "81002063_sk21947_MaxiCool_infini_main.webp"
      },
      {
        "path": "/images/airco-products/81002063_sk17398_81002062_dimensions.webp",
        "type": "dimensions",
        "filename": "81002063_sk17398_81002062_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002063_sk17399_81002062_dimensions_2.webp",
        "type": "dimensions",
        "filename": "81002063_sk17399_81002062_dimensions_2.webp"
      },
      {
        "path": "/images/airco-products/81002063_sk21948_MaxiCool_infini_other1.webp",
        "type": "other",
        "filename": "81002063_sk21948_MaxiCool_infini_other1.webp"
      },
      {
        "path": "/images/airco-products/81002063_sk21949_MaxiCool_infini_other2.webp",
        "type": "other",
        "filename": "81002063_sk21949_MaxiCool_infini_other2.webp"
      },
      {
        "path": "/images/airco-products/81002063_sk21950_MaxiCool_infini_other3.webp",
        "type": "other",
        "filename": "81002063_sk21950_MaxiCool_infini_other3.webp"
      },
      {
        "path": "/images/airco-products/81002063_sk21951_MaxiCool_infini_other4.webp",
        "type": "other",
        "filename": "81002063_sk21951_MaxiCool_infini_other4.webp"
      },
      {
        "path": "/images/airco-products/81002063_sk21952_MaxiCool_infini_other5.webp",
        "type": "other",
        "filename": "81002063_sk21952_MaxiCool_infini_other5.webp"
      },
      {
        "path": "/images/airco-products/81002063_sk21953_MaxiCool_infini_other6.webp",
        "type": "other",
        "filename": "81002063_sk21953_MaxiCool_infini_other6.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-35-kw-r32-inverter-airco-12hdi-met-wifi-set/30172/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_Safety_EN.pdf",
        "name": "Safety manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Remote_control_manual.pdf",
        "name": "Remote Control Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_Service_EN.pdf",
        "name": "Service manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Technical_Document_EN.pdf",
        "name": "Technical Document EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002063_Energy_label.pdf",
        "name": "Energy label"
      }
    ]
  },
  {
    "id": "81002064",
    "sku": "AKTIE-IMD-INF-18-SET",
    "name": "MaxiCool INFINI 5 kW R32 Inverter airco 18HDI met WIFI set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De IMD-INF-18HDI INFINI 5 kW R32 Inverter Airco Set met WIFI is een krachtige en efficiënte airconditioner, ontworpen voor zowel koelen als verwarmen met een indrukwekkende capaciteit van 5 kW. Voorzien van geavanceerde Inverter-technologie en het milieuvriendelijke R32 koelmiddel, biedt deze airco uitstekende prestaties met een laag energieverbruik. De binnenunit werkt op een geluidsniveau van slechts 20 dB(A), terwijl de buitenunit 57 dB(A) produceert, wat bijdraagt aan een stille werking.\n\nDe IMD-INF-18HDI is uitstekend geschikt voor grote ruimtes zoals open kantoren, vergaderruimtes, en woonkamers. Het biedt flexibele en efficiënte klimaatregeling, wat het ideaal maakt voor zowel commerciële als particuliere toepassingen.\n\nDeze airco set is ontworpen voor eenvoudige installatie, met een complete installatiekit en een gedetailleerde handleiding inbegrepen. Dit bespaart tijd en kosten tijdens de installatie. IMD biedt een garantie van 3 jaar op de INFINI 5 kW, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van IMD.\n\nDe IMD-INF-18HDI INFINI onderscheidt zich door zijn hoge energie-efficiëntie, stille werking, en geavanceerde technologie. Het milieuvriendelijke R32 koelmiddel, het A++ energielabel, en de wifi-connectiviteit maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 20 dB(A) voor de binnenunit, en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A+++",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "551",
      "Energielabel": "A+++",
      "Capaciteit": "5,0 kW"
    },
    "image": "/images/airco-products/81002064_sk21947_MaxiCool_infini_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002064_sk21947_MaxiCool_infini_main.webp",
        "type": "main",
        "filename": "81002064_sk21947_MaxiCool_infini_main.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk17398_81002062_dimensions.webp",
        "type": "dimensions",
        "filename": "81002064_sk17398_81002062_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk17399_81002062_dimensions_2.webp",
        "type": "dimensions",
        "filename": "81002064_sk17399_81002062_dimensions_2.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk21948_MaxiCool_infini_other1.webp",
        "type": "other",
        "filename": "81002064_sk21948_MaxiCool_infini_other1.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk21949_MaxiCool_infini_other2.webp",
        "type": "other",
        "filename": "81002064_sk21949_MaxiCool_infini_other2.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk21950_MaxiCool_infini_other3.webp",
        "type": "other",
        "filename": "81002064_sk21950_MaxiCool_infini_other3.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk21951_MaxiCool_infini_other4.webp",
        "type": "other",
        "filename": "81002064_sk21951_MaxiCool_infini_other4.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk21952_MaxiCool_infini_other5.webp",
        "type": "other",
        "filename": "81002064_sk21952_MaxiCool_infini_other5.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk21953_MaxiCool_infini_other6.webp",
        "type": "other",
        "filename": "81002064_sk21953_MaxiCool_infini_other6.webp"
      },
      {
        "path": "/images/airco-products/81002064_sk17396_81002064_Energielabel.webp",
        "type": "other",
        "filename": "81002064_sk17396_81002064_Energielabel.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-5-kw-r32-inverter-airco-18hdi-met-wifi-set/30174/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002064_Energy_label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_Safety_EN.pdf",
        "name": "Safety manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Remote_control_manual.pdf",
        "name": "Remote Control Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_Service_EN.pdf",
        "name": "Service manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Technical_Document_EN.pdf",
        "name": "Technical Document EN"
      }
    ]
  },
  {
    "id": "81002065",
    "sku": "AKTIE-IMD-INF-24-SET",
    "name": "MaxiCool INFINI 7 kW R32 Inverter airco 24HDI met WIFI set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "7",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De IMD-INF-24HDI INFINI 7 kW R32 Inverter Airco Set met WIFI biedt krachtige en efficiënte klimaatregeling met een koelcapaciteit van 7 kW. Dit systeem maakt gebruik van de nieuwste Inverter-technologie en het milieuvriendelijke R32 koelmiddel, wat zorgt voor hoge energie-efficiëntie en lage operationele kosten. De binnenunit heeft een geluidsniveau van slechts 21 dB(A), terwijl de buitenunit 60 dB(A) produceert, wat bijdraagt aan een stille werking.\n\nDe IMD-INF-24HDI is perfect voor gebruik in grote ruimtes zoals bedrijfsruimtes, grote kantoren, en open woonruimtes. Het biedt flexibele en efficiënte klimaatregeling, wat het ideaal maakt voor zowel commerciële als particuliere toepassingen.\n\nDeze airco set is ontworpen voor eenvoudige installatie met een complete installatiekit en een gedetailleerde handleiding inbegrepen. Dit bespaart tijd en kosten tijdens de installatie. IMD biedt een garantie van 3 jaar op de INFINI 7 kW, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van IMD.\n\nDe IMD-INF-24HDI INFINI onderscheidt zich door zijn hoge energie-efficiëntie, stille werking, en geavanceerde technologie. Het milieuvriendelijke R32 koelmiddel, het A++ energielabel, en de wifi-connectiviteit maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 21 dB(A) voor de binnenunit, en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "551",
      "Energielabel": "A++",
      "Capaciteit": "7,0 kW"
    },
    "image": "/images/airco-products/81002065_sk21947_MaxiCool_infini_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002065_sk21947_MaxiCool_infini_main.webp",
        "type": "main",
        "filename": "81002065_sk21947_MaxiCool_infini_main.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk17398_81002062_dimensions.webp",
        "type": "dimensions",
        "filename": "81002065_sk17398_81002062_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk17399_81002062_dimensions_2.webp",
        "type": "dimensions",
        "filename": "81002065_sk17399_81002062_dimensions_2.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk21948_MaxiCool_infini_other1.webp",
        "type": "other",
        "filename": "81002065_sk21948_MaxiCool_infini_other1.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk21949_MaxiCool_infini_other2.webp",
        "type": "other",
        "filename": "81002065_sk21949_MaxiCool_infini_other2.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk21950_MaxiCool_infini_other3.webp",
        "type": "other",
        "filename": "81002065_sk21950_MaxiCool_infini_other3.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk21951_MaxiCool_infini_other4.webp",
        "type": "other",
        "filename": "81002065_sk21951_MaxiCool_infini_other4.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk21952_MaxiCool_infini_other5.webp",
        "type": "other",
        "filename": "81002065_sk21952_MaxiCool_infini_other5.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk21953_MaxiCool_infini_other6.webp",
        "type": "other",
        "filename": "81002065_sk21953_MaxiCool_infini_other6.webp"
      },
      {
        "path": "/images/airco-products/81002065_sk17397_81002065_Energielabel.webp",
        "type": "other",
        "filename": "81002065_sk17397_81002065_Energielabel.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-7-kw-r32-inverter-airco-24hdi-met-wifi-set/30175/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002065_Energy_label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_Safety_EN.pdf",
        "name": "Safety manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Remote_control_manual.pdf",
        "name": "Remote Control Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Manual_Service_EN.pdf",
        "name": "Service manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002062_Technical_Document_EN.pdf",
        "name": "Technical Document EN"
      }
    ]
  },
  {
    "id": "81001987",
    "sku": "AKTIE-WMD-12R-SET",
    "name": "Maxicool Inverter Console airco R32 3,5 kW set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "3.5",
    "coolingCapacity": "3.5",
    "heatingCapacity": "3.8",
    "description": "De Maxicool WMD-12R R32 3,5 kW Inverter Console is een efficiënte en moderne oplossing voor klimaatbeheersing in zowel residentiële als commerciële ruimtes. Met een koelvermogen van 3,5 kW en voorzien van geavanceerde invertertechnologie, levert deze unit betrouwbare prestaties met een laag energieverbruik. De ingebouwde WiFi-functionaliteit maakt het eenvoudig om de temperatuur in uw ruimte te regelen via een smartphone-app, waar u ook bent. Deze airconditioner heeft een SEER van 7,3 en een SCOP van 4,0, wat uitstekende energie-efficiëntie garandeert, zowel bij koelen als verwarmen. De unit is voorzien van een energielabel A++ voor koeling en A+ voor verwarming, wat bijdraagt aan lagere energiekosten. Bovendien werkt de airconditioner stil, met een maximaal geluidsniveau van 27 dB, wat ideaal is voor elke leef- of werkomgeving.\n\nDe Maxicool WMD-12R is ideaal voor het koelen en verwarmen van middelgrote ruimtes zoals woonkamers, slaapkamers en kantoren. Deze unit biedt betrouwbare prestaties voor zowel verwarming in de winter als verkoeling in de zomer, waardoor het een veelzijdige oplossing is voor elk seizoen.\n\nDe installatie van de Maxicool WMD-12R is eenvoudig en gebruiksvriendelijk. De unit wordt geleverd met een complete installatiekit en een duidelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. De WiFi-functionaliteit zorgt ervoor dat u de airconditioner vanaf elke locatie kunt bedienen, wat extra comfort en gemak biedt.\n\nDe Maxicool WMD-12R R32 3,5 kW Inverter Console combineert efficiënte prestaties met moderne technologie en stille werking. Met een SEER van 7,3 en een SCOP van 4,0 biedt deze unit betrouwbare prestaties het hele jaar door. De console is ontworpen om stil te werken, met een maximaal geluidsniveau van 27 dB, en kan eenvoudig op afstand worden bediend via WiFi, waardoor het een praktische en comfortabele keuze is voor verschillende omgevingen. Het gebruik van het milieuvriendelijke R32 koelmiddel maakt deze airconditioner niet alleen voordelig voor uw ruimte, maar ook voor het milieu.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "621 x 794 x 206 mm",
      "buitenunit": "555 x 765 x 303 mm"
    },
    "energyLabel": "A++",
    "seer": "7.3",
    "scop": null,
    "soundLevel": "37 dB(A)",
    "specifications": {
      "Categoriecode": "551",
      "Model (binnenunit)": "Wand (laag)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.71 kg",
      "Global warming potential (GWP)": "479",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.17 kW",
      "Opgenomen vermogen bij koelen (max)": "1.35 kW",
      "Koelcapaciteit (min)": "3.5 kW",
      "Koelcapaciteit (max)": "3.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.15 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.3 kW",
      "Verwarmingscapaciteit (min)": "3.8 kW",
      "Verwarmingscapaciteit (max)": "3.8 kW",
      "SEER (koeling)": "7.3",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "175 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "621 mm",
      "Breedte binnenunit": "794 mm",
      "Diepte binnenunit": "206 mm",
      "Gewicht binnenunit": "14.9 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "765 mm",
      "Diepte buitenunit": "303 mm",
      "Gewicht buitenunit": "26.6 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "490 m³/h",
      "Luchtdebiet koelen (max)": "650 m³/h",
      "Luchtdebiet verwarmen (min)": "490 m³/h",
      "Luchtdebiet verwarmen (max)": "650 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "37 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "37 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "54 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "54 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "62 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "62 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.2 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "34 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001987_81001987_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001987_81001987_main.webp",
        "type": "main",
        "filename": "81001987_81001987_main.webp"
      },
      {
        "path": "/images/airco-products/81001987_main.webp",
        "type": "main",
        "filename": "81001987_main.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_dimensions.webp",
        "type": "dimensions",
        "filename": "81001987_81001987_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001987_81001987_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001987_81001987_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001987_dimensions.webp",
        "type": "dimensions",
        "filename": "81001987_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001987_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001987_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001987_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001987_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_energy.webp",
        "type": "energy",
        "filename": "81001987_81001987_energy.webp"
      },
      {
        "path": "/images/airco-products/81001987_energy.webp",
        "type": "energy",
        "filename": "81001987_energy.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_other1.webp",
        "type": "other",
        "filename": "81001987_81001987_other1.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_other2.webp",
        "type": "other",
        "filename": "81001987_81001987_other2.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_other3.webp",
        "type": "other",
        "filename": "81001987_81001987_other3.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_other4.webp",
        "type": "other",
        "filename": "81001987_81001987_other4.webp"
      },
      {
        "path": "/images/airco-products/81001987_81001987_other5.webp",
        "type": "other",
        "filename": "81001987_81001987_other5.webp"
      },
      {
        "path": "/images/airco-products/81001987_other1.webp",
        "type": "other",
        "filename": "81001987_other1.webp"
      },
      {
        "path": "/images/airco-products/81001987_other2.webp",
        "type": "other",
        "filename": "81001987_other2.webp"
      },
      {
        "path": "/images/airco-products/81001987_other3.webp",
        "type": "other",
        "filename": "81001987_other3.webp"
      },
      {
        "path": "/images/airco-products/81001987_other4.webp",
        "type": "other",
        "filename": "81001987_other4.webp"
      },
      {
        "path": "/images/airco-products/81001987_other5.webp",
        "type": "other",
        "filename": "81001987_other5.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-inverter-console-airco-r32-35-kw-set/29381/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001987_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001987_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001987_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001987_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001987_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001988",
    "sku": "AKTIE-WMD-18R-SET",
    "name": "Maxicool Inverter Console airco R32 5,0 kW set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "5.0",
    "coolingCapacity": "5",
    "heatingCapacity": "5.3",
    "description": "De Maxicool WMD-18R R32 5,0 kW Inverter Console is een krachtige en veelzijdige airconditioner, ontworpen om te voldoen aan de behoeften van zowel residentiële als commerciële omgevingen. Met een koelvermogen van 5,0 kW en voorzien van geavanceerde invertertechnologie, biedt deze unit efficiënte prestaties met een laag energieverbruik. De console is uitgerust met ingebouwde WiFi-functionaliteit, waardoor u de temperatuur eenvoudig kunt regelen via een smartphone-app, ongeacht waar u zich bevindt. Deze airconditioner heeft een SEER van 6,7 en een SCOP van 4,0, wat zorgt voor uitstekende energie-efficiëntie tijdens het koelen en verwarmen. Voor koelen heeft het systeem een energielabel van A++, terwijl het voor verwarmen een A+ label draagt. Zelfs op maximaal vermogen blijft het geluidsniveau van de unit beperkt tot 32 dB, wat zorgt voor een comfortabele omgeving.\n\nDe Maxicool WMD-18R is ideaal voor middelgrote tot grote ruimtes waar een betrouwbare en efficiënte klimaatbeheersing nodig is. Deze unit is geschikt voor zowel woonkamers, kantoren als commerciële ruimtes en biedt zowel koeling als verwarming, afhankelijk van de seizoensgebonden behoeften.\n\nDe Maxicool WMD-18R is ontworpen voor eenvoudige installatie en gebruiksvriendelijke bediening. De unit wordt geleverd met een complete installatiekit en een duidelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. Met de geïntegreerde WiFi-functionaliteit heeft u de mogelijkheid om de airconditioner vanaf elke locatie te bedienen, waardoor u altijd verzekerd bent van een comfortabel binnenklimaat.\n\nDe Maxicool WMD-18R R32 5,0 kW Inverter Console combineert krachtige prestaties met energie-efficiëntie en gebruiksgemak. Dankzij de SEER- en SCOP-waarden biedt deze unit betrouwbare prestaties in zowel warme zomers als koude winters. De stille werking, met een maximaal geluidsniveau van 32 dB, en de WiFi-functionaliteit maken dit apparaat tot een praktische keuze voor diverse omgevingen. Bovendien zorgt het gebruik van het milieuvriendelijke R32 koelmiddel ervoor dat deze airconditioner niet alleen uw ruimte, maar ook het milieu ten goede komt.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "621 x 794 x 206 mm",
      "buitenunit": "554 x 805 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.7",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "551",
      "Model (binnenunit)": "Wand (laag)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.15 kg",
      "Global warming potential (GWP)": "776",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.65 kW",
      "Opgenomen vermogen bij koelen (max)": "1.95 kW",
      "Koelcapaciteit (min)": "5 kW",
      "Koelcapaciteit (max)": "5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.6 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.9 kW",
      "Verwarmingscapaciteit (min)": "5.3 kW",
      "Verwarmingscapaciteit (max)": "5.3 kW",
      "SEER (koeling)": "6.7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "290 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "621 mm",
      "Breedte binnenunit": "794 mm",
      "Diepte binnenunit": "206 mm",
      "Gewicht binnenunit": "14.9 kg",
      "Hoogte buitenunit": "554 mm",
      "Breedte buitenunit": "805 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "32.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "600 m³/h",
      "Luchtdebiet koelen (max)": "780 m³/h",
      "Luchtdebiet verwarmen (min)": "600 m³/h",
      "Luchtdebiet verwarmen (max)": "780 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "32 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "32 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "55 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "55 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "63 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "34 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "20 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "5,0 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001988_81001987_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001988_81001987_main.webp",
        "type": "main",
        "filename": "81001988_81001987_main.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001987_dimensions.webp",
        "type": "dimensions",
        "filename": "81001988_81001987_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001987_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001988_81001987_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001987_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001988_81001987_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001988_energy.webp",
        "type": "energy",
        "filename": "81001988_81001988_energy.webp"
      },
      {
        "path": "/images/airco-products/81001988_energy.webp",
        "type": "energy",
        "filename": "81001988_energy.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001987_other1.webp",
        "type": "other",
        "filename": "81001988_81001987_other1.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001987_other2.webp",
        "type": "other",
        "filename": "81001988_81001987_other2.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001987_other3.webp",
        "type": "other",
        "filename": "81001988_81001987_other3.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001987_other4.webp",
        "type": "other",
        "filename": "81001988_81001987_other4.webp"
      },
      {
        "path": "/images/airco-products/81001988_81001987_other5.webp",
        "type": "other",
        "filename": "81001988_81001987_other5.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-inverter-console-airco-r32-50-kw-set/29380/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001988_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001988_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001988_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001988_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001988_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001970",
    "sku": "AKTIE-AMD-AUR-09-SET",
    "name": "MaxiCool AURORA Inverter airco R32 2,5 kW set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "2.5",
    "coolingCapacity": "2.6",
    "heatingCapacity": "2.9",
    "description": "De MaxiCool AURORA Dual Inverter is een airco van hoge kwaliteit. Met een koelcapaciteit van 2,5 kW en uitgerust met de geavanceerde Dual Inverter technologie, biedt deze airco efficiënte en krachtige prestaties en door het gebruik van R32 koelmiddel, wordt de impact op het klimaat verminderd. De MaxiCool AURORA onderscheidt zich door zijn strakke design en geïntegreerde slimme functies, waaronder wifi-connectiviteit, waardoor u het apparaat eenvoudig via uw smartphone kunt bedienen voor extra comfort en gemak. De airco heeft een SEER van 6,9 W/W en een SCOP van 4,0 W/W, wat een uitstekende energie-efficiëntie biedt, het hele jaar door. Bovendien is het geluidsniveau van de binnenunit slechts 20 dB(A), waardoor hij ideaal is voor stille ruimtes.\n\nDe MaxiCool AURORA Dual Inverter 2,5 kW Set is ideaal voor kleine ruimtes tot 35 m², zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het perfect is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De MaxiCool AURORA Dual Inverter Set wordt geleverd met een garantie van 2 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe MaxiCool AURORA Dual Inverter Set onderscheidt zich door zijn energiezuinigheid, geavanceerde technologie en strakke design. Met een SEER van 6,9 en een SCOP van 4,0 biedt deze airco het hele jaar door uitzonderlijke prestaties en efficiëntie. De milieuvriendelijke eigenschappen van het R32 koelmiddel, het A++ energielabel, en de mogelijkheid om het apparaat op afstand te bedienen via wifi maken het een ideale keuze voor zowel particuliere als zakelijke gebruikers. De stille werking, het lage geluidsniveau van 20 dB(A) voor de binnenunit en de onderhoudsvriendelijke kenmerken maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "290 x 722 x 187 mm",
      "buitenunit": "495 x 720 x 270 mm"
    },
    "energyLabel": "A++",
    "seer": "6.9",
    "scop": null,
    "soundLevel": "39 dB(A)",
    "specifications": {
      "Categoriecode": "551",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.55 kg",
      "Global warming potential (GWP)": "371",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.07 kW",
      "Opgenomen vermogen bij koelen (max)": "1.23 kW",
      "Koelcapaciteit (min)": "2.6 kW",
      "Koelcapaciteit (max)": "2.6 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.14 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.32 kW",
      "Verwarmingscapaciteit (min)": "2.9 kW",
      "Verwarmingscapaciteit (max)": "2.9 kW",
      "SEER (koeling)": "6.9",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "135 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "290 mm",
      "Breedte binnenunit": "722 mm",
      "Diepte binnenunit": "187 mm",
      "Gewicht binnenunit": "7.3 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "720 mm",
      "Diepte buitenunit": "270 mm",
      "Gewicht buitenunit": "23.2 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "230 m³/h",
      "Luchtdebiet koelen (max)": "416 m³/h",
      "Luchtdebiet verwarmen (min)": "230 m³/h",
      "Luchtdebiet verwarmen (max)": "416 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "20 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "20 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "39 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "56 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "64 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "64 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "2,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001970_81001970_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001970_81001970_main.webp",
        "type": "main",
        "filename": "81001970_81001970_main.webp"
      },
      {
        "path": "/images/airco-products/81001970_main.webp",
        "type": "main",
        "filename": "81001970_main.webp"
      },
      {
        "path": "/images/airco-products/81001970_81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001970_81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001970_81001970_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001970_81001970_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001970_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001970_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001970_81001970_energy.webp",
        "type": "energy",
        "filename": "81001970_81001970_energy.webp"
      },
      {
        "path": "/images/airco-products/81001970_energy.webp",
        "type": "energy",
        "filename": "81001970_energy.webp"
      },
      {
        "path": "/images/airco-products/81001970_81001666_other2.webp",
        "type": "other",
        "filename": "81001970_81001666_other2.webp"
      },
      {
        "path": "/images/airco-products/81001970_81001666_other3.webp",
        "type": "other",
        "filename": "81001970_81001666_other3.webp"
      },
      {
        "path": "/images/airco-products/81001970_81001666_other4.webp",
        "type": "other",
        "filename": "81001970_81001666_other4.webp"
      },
      {
        "path": "/images/airco-products/81001970_81001970_other3.webp",
        "type": "other",
        "filename": "81001970_81001970_other3.webp"
      },
      {
        "path": "/images/airco-products/81001970_other3.webp",
        "type": "other",
        "filename": "81001970_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-inverter-airco-r32-25-kw-set/29388/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001970_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001970_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001970_Manual_NL.pdf",
        "name": "Remote Control Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001970_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001970_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001971",
    "sku": "AKTIE-AMD-AUR-12-SET",
    "name": "MaxiCool AURORA Inverter airco R32 3,5 kW set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "3.5",
    "coolingCapacity": "3.5",
    "heatingCapacity": "3.8",
    "description": "De MaxiCool AURORA Dual Inverter is een airco van hoge kwaliteit. Met een koelcapaciteit van 3,5 kW en uitgerust met de geavanceerde Dual Inverter technologie, biedt deze airco efficiënte en krachtige prestaties en door het gebruik van R32 koelmiddel, wordt de impact op het klimaat verminderd. De MaxiCool AURORA onderscheidt zich door zijn strakke design en geïntegreerde slimme functies, waaronder wifi-connectiviteit, waardoor u het apparaat eenvoudig via uw smartphone kunt bedienen voor extra comfort en gemak. De airco heeft een SEER van 7,0 W/W en een SCOP van 4,1 W/W, wat een uitstekende energie-efficiëntie biedt, het hele jaar door. Bovendien is het geluidsniveau van de binnenunit slechts 20 dB(A), waardoor hij ideaal is voor stille ruimtes.\n\nDe MaxiCool AURORA Dual Inverter 3,5 kW Set is ideaal voor middelgrote ruimtes tot 60 m², zoals woonkamers, slaapkamers, kantoren en vergaderruimtes. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het perfect is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De MaxiCool AURORA Dual Inverter Set wordt geleverd met een garantie van 2 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe MaxiCool AURORA Dual Inverter Set onderscheidt zich door zijn energiezuinigheid, geavanceerde technologie en strakke design. Met een SEER van 7,0 en een SCOP van 4,1 biedt deze airco het hele jaar door uitzonderlijke prestaties en efficiëntie. De milieuvriendelijke eigenschappen van het R32 koelmiddel, het A++ energielabel, en de mogelijkheid om het apparaat op afstand te bedienen via wifi maken het een ideale keuze voor zowel particuliere als zakelijke gebruikers. De stille werking, het lage geluidsniveau van 20 dB(A) voor de binnenunit en de onderhoudsvriendelijke kenmerken maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "297 x 802 x 189 mm",
      "buitenunit": "495 x 720 x 270 mm"
    },
    "energyLabel": "A++",
    "seer": "7",
    "scop": null,
    "soundLevel": "39 dB(A)",
    "specifications": {
      "Categoriecode": "551",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.55 kg",
      "Global warming potential (GWP)": "371",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.05 kW",
      "Opgenomen vermogen bij koelen (max)": "1.6 kW",
      "Koelcapaciteit (min)": "3.5 kW",
      "Koelcapaciteit (max)": "3.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.13 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.71 kW",
      "Verwarmingscapaciteit (min)": "3.8 kW",
      "Verwarmingscapaciteit (max)": "3.8 kW",
      "SEER (koeling)": "7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "180 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "297 mm",
      "Breedte binnenunit": "802 mm",
      "Diepte binnenunit": "189 mm",
      "Gewicht binnenunit": "8.6 kg",
      "Hoogte buitenunit": "495 mm",
      "Breedte buitenunit": "720 mm",
      "Diepte buitenunit": "270 mm",
      "Gewicht buitenunit": "23.2 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "395 m³/h",
      "Luchtdebiet koelen (max)": "584 m³/h",
      "Luchtdebiet verwarmen (min)": "395 m³/h",
      "Luchtdebiet verwarmen (max)": "584 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "20 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "20 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "39 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "55 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "56 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.2 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "25 m",
      "Max. hoogteverschil": "10 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "3,5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001971_81001970_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001971_81001970_main.webp",
        "type": "main",
        "filename": "81001971_81001970_main.webp"
      },
      {
        "path": "/images/airco-products/81001971_81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001971_81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001971_81001970_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001971_81001970_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001971_81001971_energy.webp",
        "type": "energy",
        "filename": "81001971_81001971_energy.webp"
      },
      {
        "path": "/images/airco-products/81001971_energy.webp",
        "type": "energy",
        "filename": "81001971_energy.webp"
      },
      {
        "path": "/images/airco-products/81001971_81001666_other2.webp",
        "type": "other",
        "filename": "81001971_81001666_other2.webp"
      },
      {
        "path": "/images/airco-products/81001971_81001666_other3.webp",
        "type": "other",
        "filename": "81001971_81001666_other3.webp"
      },
      {
        "path": "/images/airco-products/81001971_81001666_other4.webp",
        "type": "other",
        "filename": "81001971_81001666_other4.webp"
      },
      {
        "path": "/images/airco-products/81001971_81001970_other3.webp",
        "type": "other",
        "filename": "81001971_81001970_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-inverter-airco-r32-35-kw-set/29387/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001971_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001971_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001971_Remote_Control_Manual_NL.pdf",
        "name": "Remote Control Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001971_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001971_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001973",
    "sku": "AKTIE-AMD-AUR-24-SET",
    "name": "MaxiCool AURORA Inverter airco R32 7,0 kW set",
    "brand": "MaxiCool",
    "type": "single-split",
    "category": "MaxiCool Single-split",
    "capacity": "7.0",
    "coolingCapacity": "7.33",
    "heatingCapacity": "7.62",
    "description": "De MaxiCool AURORA Dual Inverter is een airco van hoge kwaliteit. Met een koelcapaciteit van 7,0 kW en uitgerust met de geavanceerde Dual Inverter technologie, biedt deze airco efficiënte en krachtige prestaties en door het gebruik van R32 koelmiddel, wordt de impact op het klimaat verminderd. De MaxiCool AURORA onderscheidt zich door zijn strakke design en geïntegreerde slimme functies, waaronder wifi-connectiviteit, waardoor u het apparaat eenvoudig via uw smartphone kunt bedienen voor extra comfort en gemak. De airco heeft een SEER van 6,5 W/W en een SCOP van 4,0 W/W, wat een uitstekende energie-efficiëntie biedt, het hele jaar door. Bovendien is het geluidsniveau van de binnenunit slechts 26 dB(A), waardoor hij ideaal is voor stille ruimtes.\n\nDe MaxiCool AURORA Dual Inverter 7,0 kW Set is ideaal voor grote ruimtes tot 110 m², zoals kantoren en verdiepingen. Het apparaat biedt betrouwbare en energie-efficiënte koeling en verwarming, waardoor het perfect is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige en snelle installatie, wat tijd en kosten bespaart. De set wordt geleverd met een volledige installatiekit en een duidelijke handleiding, waardoor de installatie zonder problemen kan worden uitgevoerd. De MaxiCool AURORA Dual Inverter Set wordt geleverd met een garantie van 2 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering.\n\nDe MaxiCool AURORA Dual Inverter Set onderscheidt zich door zijn energiezuinigheid, geavanceerde technologie en strakke design. Met een SEER van 6,5 en een SCOP van 4,0 biedt deze airco het hele jaar door uitzonderlijke prestaties en efficiëntie. De milieuvriendelijke eigenschappen van het R32 koelmiddel, het A++ energielabel, en de mogelijkheid om het apparaat op afstand te bedienen via wifi maken het een ideale keuze voor zowel particuliere als zakelijke gebruikers. De stille werking, het lage geluidsniveau van 26 dB(A) voor de binnenunit en de onderhoudsvriendelijke kenmerken maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "335 x 1080 x 226 mm",
      "buitenunit": "673 x 890 x 342 mm"
    },
    "energyLabel": "A++",
    "seer": "6.5",
    "scop": null,
    "soundLevel": "47 dB(A)",
    "specifications": {
      "Categoriecode": "551",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.45 kg",
      "Global warming potential (GWP)": "979",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.42 kW",
      "Opgenomen vermogen bij koelen (max)": "3.2 kW",
      "Koelcapaciteit (min)": "7.33 kW",
      "Koelcapaciteit (max)": "7.33 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.3 kW",
      "Opgenomen vermogen bij verwarmen (max)": "3.1 kW",
      "Verwarmingscapaciteit (min)": "7.62 kW",
      "Verwarmingscapaciteit (max)": "7.62 kW",
      "SEER (koeling)": "6.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "377 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "335 mm",
      "Breedte binnenunit": "1080 mm",
      "Diepte binnenunit": "226 mm",
      "Gewicht binnenunit": "13.7 kg",
      "Hoogte buitenunit": "673 mm",
      "Breedte buitenunit": "890 mm",
      "Diepte buitenunit": "342 mm",
      "Gewicht buitenunit": "43.9 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "4",
      "Luchtdebiet koelen (min)": "640 m³/h",
      "Luchtdebiet koelen (max)": "1020 m³/h",
      "Luchtdebiet verwarmen (min)": "640 m³/h",
      "Luchtdebiet verwarmen (max)": "1020 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "26 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "26 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "47 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "63 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "60.5 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "60.5 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "60.5 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "60.5 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "67 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "67 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.7 l/h",
      "Uitwendige buisdiameter condensafvoer": "16 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Min. leidinglengte": "3 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "20 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "7,0 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001973_81001970_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001973_81001970_main.webp",
        "type": "main",
        "filename": "81001973_81001970_main.webp"
      },
      {
        "path": "/images/airco-products/81001973_81001973_dimensions.webp",
        "type": "dimensions",
        "filename": "81001973_81001973_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001973_81001973_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001973_81001973_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001973_dimensions.webp",
        "type": "dimensions",
        "filename": "81001973_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001973_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001973_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001973_81001973_energy.webp",
        "type": "energy",
        "filename": "81001973_81001973_energy.webp"
      },
      {
        "path": "/images/airco-products/81001973_energy.webp",
        "type": "energy",
        "filename": "81001973_energy.webp"
      },
      {
        "path": "/images/airco-products/81001973_81001666_other2.webp",
        "type": "other",
        "filename": "81001973_81001666_other2.webp"
      },
      {
        "path": "/images/airco-products/81001973_81001666_other3.webp",
        "type": "other",
        "filename": "81001973_81001666_other3.webp"
      },
      {
        "path": "/images/airco-products/81001973_81001666_other4.webp",
        "type": "other",
        "filename": "81001973_81001666_other4.webp"
      },
      {
        "path": "/images/airco-products/81001973_81001970_other3.webp",
        "type": "other",
        "filename": "81001973_81001970_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-inverter-airco-r32-70-kw-set/29385/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001973_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001973_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001973_Remote_control_manual_NL.pdf",
        "name": "Remote control manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001973_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001973_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001627",
    "sku": "AKTIE-MU2R15-0909_R32",
    "name": "LG Multi split airco MU2R15-0909 R32 2x2,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU2R15-0909 R32 DUO Complete Multisplit Set is de ideale keuze voor het efficiënt en flexibel beheren van het klimaat in twee verschillende ruimtes. Deze set maakt het mogelijk om twee kamers te koelen of te verwarmen, wat zorgt voor optimaal comfort en aanpasbaarheid in uw woning of werkruimte. Met een uitstekende SEER van 8,60 en een SCOP van 4,61, biedt dit systeem indrukwekkende energie-efficiëntie, waardoor uw energierekeningen lager blijven en uw ecologische voetafdruk vermindert. De set heeft een energielabel van A++ voor koelen en A+ voor verwarmen, wat garant staat voor een zuinige en duurzame werking.\n\nDe LG MU2R15-0909 is bijzonder geschikt voor gebruik in woningen en kantoren waar twee ruimtes apart beheerd moeten worden. Of het nu gaat om het tegelijkertijd koelen van een woonkamer en het verwarmen van een slaapkamer, deze set biedt de flexibiliteit om elk vertrek op de gewenste temperatuur te houden.\n\nDeze set is eenvoudig te installeren, waarbij twee binnenunits aan één enkele buitenunit kunnen worden gekoppeld. Dit ruimtebesparende ontwerp maakt de installatie eenvoudiger en zorgt ervoor dat u snel kunt genieten van een optimaal binnenklimaat in beide ruimtes.\n\nDe LG MU2R15-0909 R32 DUO Complete Multisplit Set combineert efficiëntie, flexibiliteit en betrouwbaarheid in één systeem. Met zijn SEER van 8,60 en SCOP van 4,61 levert deze set consistente en zuinige prestaties, waardoor u zowel op korte als lange termijn bespaart op energiekosten. Het energielabel A++ voor koelen en A+ voor verwarmen maakt deze set tot een verantwoorde keuze voor wie een milieuvriendelijke en kostenbesparende oplossing zoekt. Daarnaast biedt de mogelijkheid om twee ruimtes te beheren, het comfort dat u nodig heeft in uw dagelijkse omgeving.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW"
    },
    "image": "/images/airco-products/81001627_81001627_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001627_81001627_main.webp",
        "type": "main",
        "filename": "81001627_81001627_main.webp"
      },
      {
        "path": "/images/airco-products/81001627_main.webp",
        "type": "main",
        "filename": "81001627_main.webp"
      },
      {
        "path": "/images/airco-products/81001627_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81001627_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001627_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001627_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001627_81001410_other3.webp",
        "type": "other",
        "filename": "81001627_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001627_81001627_other1.webp",
        "type": "other",
        "filename": "81001627_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81001627_81001627_other2.webp",
        "type": "other",
        "filename": "81001627_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001627_81001627_other3.webp",
        "type": "other",
        "filename": "81001627_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001627_81001627_other4.webp",
        "type": "other",
        "filename": "81001627_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001627_other1.webp",
        "type": "other",
        "filename": "81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81001627_other2.webp",
        "type": "other",
        "filename": "81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001627_other3.webp",
        "type": "other",
        "filename": "81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001627_other4.webp",
        "type": "other",
        "filename": "81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001627_sk21229_81001627_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001627_sk21229_81001627_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-multi-split-airco-mu2r15-0909-r32-2x25-kw-set/29872/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001627_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21228_81001627_EU_Energy_Label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001627_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001627_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001627_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001628",
    "sku": "AKTIE-MU2R15-0912_R32",
    "name": "LG DUO Complete Multisplit airco MU2R15-0912 R32 1x2,5 kW + 1x3,5 kW",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU2R15-0912 R32 DUO Complete Multisplit Set biedt een geavanceerde oplossing voor het regelen van het klimaat in twee verschillende ruimtes. Met de mogelijkheid om elke kamer te koelen of te verwarmen, levert dit systeem flexibiliteit en optimaal comfort in uw woning of kantoor. Deze set is uitgerust met een indrukwekkende SEER van 8,60 en een SCOP van 4,61, wat resulteert in uitstekende energieprestaties. Het energielabel A++ voor koelen en A+ voor verwarmen benadrukt de efficiëntie van dit systeem, waardoor het niet alleen uw energiekosten verlaagt, maar ook milieuvriendelijk is.\n\nDe LG MU2R15-0912 is ideaal voor woningen of kantoren waar twee verschillende ruimtes afzonderlijk beheerd moeten worden. Of het nu gaat om het koelen van een slaapkamer en het verwarmen van een thuiskantoor, deze set biedt de flexibiliteit om elke ruimte op de gewenste temperatuur te houden.\n\nDeze multisplit set is eenvoudig te installeren en biedt de mogelijkheid om twee binnenunits op één buitenunit aan te sluiten. Dit zorgt voor een efficiënter gebruik van de beschikbare ruimte en vereenvoudigt het installatieproces, zodat u snel kunt profiteren van een optimaal binnenklimaat.\n\nDe LG MU2R15-0912 R32 DUO Complete Multisplit Set combineert hoge energie-efficiëntie met gebruiksgemak en flexibiliteit. Met een SEER van 8,60 en een SCOP van 4,61 biedt dit systeem betrouwbare prestaties het hele jaar door, terwijl het energieverbruik tot een minimum wordt beperkt. Het A++ energielabel voor koelen en A+ voor verwarmen maakt dit systeem tot een uitstekende keuze voor wie op zoek is naar een duurzame en kostenbesparende oplossing voor klimaatbeheersing. Daarnaast biedt de DUO-functionaliteit u de mogelijkheid om twee ruimtes effectief en efficiënt te beheren, wat zorgt voor maximaal comfort in uw woning of kantoor.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81001628_81001627_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001628_81001627_main.webp",
        "type": "main",
        "filename": "81001628_81001627_main.webp"
      },
      {
        "path": "/images/airco-products/81001628_81001628_dimensions.webp",
        "type": "dimensions",
        "filename": "81001628_81001628_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001628_81001628_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001628_81001628_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001628_dimensions.webp",
        "type": "dimensions",
        "filename": "81001628_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001628_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001628_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001628_81001410_other3.webp",
        "type": "other",
        "filename": "81001628_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001628_81001627_other1.webp",
        "type": "other",
        "filename": "81001628_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81001628_81001627_other2.webp",
        "type": "other",
        "filename": "81001628_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001628_81001627_other3.webp",
        "type": "other",
        "filename": "81001628_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001628_81001627_other4.webp",
        "type": "other",
        "filename": "81001628_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001628_sk21231_81001628_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001628_sk21231_81001628_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-duo-complete-multisplit-airco-mu2r15-0912-r32-1x25-kw-1x35-kw/29871/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21230_81001628_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001628_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001628_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001628_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001628_Dimensions.pdf",
        "name": "Dimensions"
      }
    ]
  },
  {
    "id": "81001629",
    "sku": "AKTIE-MU2R17-0909_R32",
    "name": "LG Multi split airco MU2R17-0909 R32 2x2,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU2R17-0909 R32 DUO Complete Multisplit Set biedt een slimme en efficiënte oplossing voor het beheersen van het binnenklimaat in twee afzonderlijke ruimtes. Deze set is ontworpen om u de flexibiliteit te geven om elke kamer individueel te koelen of te verwarmen, waardoor u altijd verzekerd bent van optimaal comfort. Met een SEER van 7,80 en een SCOP van 4,20 levert dit systeem uitstekende energieprestaties, wat resulteert in een lager energieverbruik en lagere kosten. Het energielabel A++ voor koelen en A+ voor verwarmen benadrukt de energiezuinigheid van deze set, waardoor het een duurzame keuze is voor zowel huishoudelijk als zakelijk gebruik.\n\nDe LG MU2R17-0909 is ideaal voor woningen of kantoren waar twee ruimtes individueel moeten worden beheerd. Dit systeem biedt de flexibiliteit om elke ruimte apart te koelen of te verwarmen, waardoor u altijd verzekerd bent van een comfortabele temperatuur, ongeacht de seizoenen.\n\nDeze set is eenvoudig te installeren en biedt de mogelijkheid om twee binnenunits aan één buitenunit te koppelen, wat ruimte bespaart en de installatie vereenvoudigt. Dankzij het slimme ontwerp kunt u snel profiteren van een optimaal binnenklimaat in beide ruimtes.\n\nDe LG MU2R17-0909 R32 DUO Complete Multisplit Set combineert energie-efficiëntie, flexibiliteit en betrouwbaarheid in één pakket. Met een SEER van 7,80 en een SCOP van 4,20 biedt deze set betrouwbare prestaties voor zowel koeling als verwarming, terwijl het energieverbruik tot een minimum wordt beperkt. Het A++ energielabel voor koelen en A+ voor verwarmen maakt dit systeem tot een duurzame en kosteneffectieve keuze. De mogelijkheid om twee ruimtes onafhankelijk te beheren, zorgt ervoor dat u altijd kunt genieten van een comfortabel binnenklimaat, precies zoals u dat wilt.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW"
    },
    "image": "/images/airco-products/81001629_81001627_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001629_81001627_main.webp",
        "type": "main",
        "filename": "81001629_81001627_main.webp"
      },
      {
        "path": "/images/airco-products/81001629_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81001629_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001629_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001629_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001629_81001410_other3.webp",
        "type": "other",
        "filename": "81001629_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001629_81001627_other1.webp",
        "type": "other",
        "filename": "81001629_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81001629_81001627_other2.webp",
        "type": "other",
        "filename": "81001629_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001629_81001627_other3.webp",
        "type": "other",
        "filename": "81001629_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001629_81001627_other4.webp",
        "type": "other",
        "filename": "81001629_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001629_sk21233_81001629_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001629_sk21233_81001629_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-multi-split-airco-mu2r17-0909-r32-2x25-kw-set/29465/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001629_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21232_81001629_EU_Energy_Label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001629_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001629_Product_sheet.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001629_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001630",
    "sku": "AKTIE-MU2R17-0912_R32",
    "name": "LG Multi split airco MU2R17-0912 R32 1x2,5 kW + 1x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU2R17-0912 R32 DUO Complete Multisplit Set is een ideale keuze voor het effectief beheren van het binnenklimaat in twee afzonderlijke ruimtes. Deze set biedt de mogelijkheid om twee kamers onafhankelijk van elkaar te koelen of te verwarmen, wat zorgt voor een flexibele en comfortabele oplossing in uw huis of kantoor. Uitgerust met een SEER van 7,80 en een SCOP van 4,20, levert dit systeem uitstekende energieprestaties, waardoor het energieverbruik wordt geminimaliseerd en uw energiekosten laag blijven. Met een energielabel van A++ voor koelen en A+ voor verwarmen, kunt u rekenen op een efficiënte en duurzame werking.\n\nDe LG MU2R17-0912 is perfect voor woningen of kantoren waar twee afzonderlijke ruimtes beheerd moeten worden. Dit systeem biedt de mogelijkheid om elke kamer apart te koelen of te verwarmen, waardoor u altijd verzekerd bent van de ideale temperatuur, ongeacht de seizoenen.\n\nDeze set is ontworpen voor eenvoudige installatie en efficiënt ruimtegebruik, waarbij twee binnenunits aan één buitenunit kunnen worden gekoppeld. Dit maakt het niet alleen gemakkelijker om te installeren, maar bespaart ook ruimte, waardoor u een overzichtelijke en functionele oplossing krijgt voor uw binnenklimaatbeheer.\n\nDe LG MU2R17-0912 R32 DUO Complete Multisplit Set combineert flexibiliteit, energie-efficiëntie en betrouwbaarheid in één pakket. Met een SEER van 7,80 en een SCOP van 4,20 biedt deze set hoge prestaties voor zowel koeling als verwarming, terwijl het energieverbruik tot een minimum wordt beperkt. Het energielabel A++ voor koelen en A+ voor verwarmen maakt dit systeem een duurzame en kostenbesparende keuze. Daarnaast biedt de DUO-functionaliteit de mogelijkheid om twee ruimtes effectief te beheren, wat zorgt voor maximaal comfort en efficiëntie.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81001630_81001627_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001630_81001627_main.webp",
        "type": "main",
        "filename": "81001630_81001627_main.webp"
      },
      {
        "path": "/images/airco-products/81001630_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81001630_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001630_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001630_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001630_81001410_other3.webp",
        "type": "other",
        "filename": "81001630_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001630_81001627_other1.webp",
        "type": "other",
        "filename": "81001630_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81001630_81001627_other2.webp",
        "type": "other",
        "filename": "81001630_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001630_81001627_other3.webp",
        "type": "other",
        "filename": "81001630_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001630_81001627_other4.webp",
        "type": "other",
        "filename": "81001630_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001630_sk21235_81001630_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001630_sk21235_81001630_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-multi-split-airco-mu2r17-0912-r32-1x25-kw-1x35-kw-set/29464/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21234_81001630_EU_Energy_Label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Product_sheet.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001631",
    "sku": "AKTIE-MU2R17-1212_R32",
    "name": "LG Multi split airco MU2R17-1212 R32 2x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "3.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De AKTIE 2022 LG MU2R17-1212 R32 DUO Complete Multisplit Set biedt een efficiënte en veelzijdige oplossing voor het regelen van het binnenklimaat in twee verschillende ruimtes. Met deze set kunt u gemakkelijk twee kamers afzonderlijk koelen of verwarmen, wat zorgt voor optimaal comfort en flexibiliteit in uw woning of kantoor. De set is uitgerust met een SEER van 7,80 en een SCOP van 4,20, wat staat voor uitstekende energie-efficiëntie. Met energielabels A++ voor koeling en A+ voor verwarming, is deze multisplit set ontworpen om uw energiekosten laag te houden terwijl het comfortniveau hoog blijft.\n\nDe LG MU2R17-1212 is ideaal voor gebruik in woningen of kantoren waar twee ruimtes individueel moeten worden gekoeld of verwarmd. Deze set biedt de flexibiliteit om elk van de twee kamers op de gewenste temperatuur te houden, wat zorgt voor een comfortabel en consistent binnenklimaat.\n\nDeze DUO multisplit set is eenvoudig te installeren, met de mogelijkheid om twee binnenunits aan één buitenunit te koppelen. Dit ontwerp bespaart ruimte en maakt de installatie efficiënt en overzichtelijk, zodat u snel kunt genieten van een optimaal binnenklimaat in beide ruimtes.\n\nDe AKTIE 2022 LG MU2R17-1212 R32 DUO Complete Multisplit Set combineert hoge prestaties met energiezuinigheid, waardoor het een uitstekende keuze is voor wie op zoek is naar een betrouwbare en efficiënte oplossing voor het beheren van het binnenklimaat in twee verschillende ruimtes. Met een SEER van 7,80 en een SCOP van 4,20, biedt deze set krachtige en consistente prestaties. De energieclassificaties A++ voor koelen en A+ voor verwarmen maken het systeem niet alleen effectief, maar ook duurzaam. Daarnaast biedt de DUO-functionaliteit de flexibiliteit om twee ruimtes afzonderlijk te beheren, wat zorgt voor maximaal comfort en efficiëntie.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x3.5 kW"
    },
    "image": "/images/airco-products/81001631_81001627_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001631_81001627_main.webp",
        "type": "main",
        "filename": "81001631_81001627_main.webp"
      },
      {
        "path": "/images/airco-products/81001631_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81001631_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001631_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001631_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001631_81001410_other3.webp",
        "type": "other",
        "filename": "81001631_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001631_81001627_other1.webp",
        "type": "other",
        "filename": "81001631_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81001631_81001627_other2.webp",
        "type": "other",
        "filename": "81001631_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001631_81001627_other3.webp",
        "type": "other",
        "filename": "81001631_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001631_81001627_other4.webp",
        "type": "other",
        "filename": "81001631_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001631_sk21237_81001631_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001631_sk21237_81001631_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-multi-split-airco-mu2r17-1212-r32-2x35-kw-set/29463/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001631_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21236_81001631_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001631_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001631_Product_sheet.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001631_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001636",
    "sku": "AKTIE-MU3R19-090909_R32",
    "name": "LG Triple split airco MU3R19-090909 R32 3x2,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R19-090909 R32 Triple Complete Multisplit Set is ontworpen om efficiënt en flexibel comfort te bieden in drie verschillende ruimtes tegelijk. Dit systeem maakt het mogelijk om het klimaat in meerdere kamers onafhankelijk van elkaar te regelen, wat zorgt voor optimaal gemak en aanpasbaarheid. Dankzij de indrukwekkende SEER van 8,60 en SCOP van 4,65 levert deze set uitzonderlijke energieprestaties, waardoor u kunt genieten van zowel kostenbesparing als een comfortabel binnenklimaat. Met een energielabel van A++ voor koelen en A+ voor verwarmen, voldoet dit systeem aan de hoogste normen op het gebied van energiezuinigheid.\n\nDe LG MU3R19-090909 is ideaal voor het beheren van het klimaat in zowel residentiële als commerciële ruimtes, waarbij u drie kamers met één systeem kunt bedienen. Dit systeem biedt de flexibiliteit om elke ruimte apart te koelen of te verwarmen, wat zorgt voor een consistent en comfortabel binnenklimaat.\n\nDeze multisplit set is eenvoudig te installeren en biedt een ruimtebesparende oplossing doordat drie binnenunits op één enkele buitenunit worden aangesloten. Dit ontwerp vereenvoudigt de installatie en biedt tegelijkertijd meer controle over het klimaat in elke kamer.\n\nDe LG MU3R19-090909 R32 Triple Complete Multisplit Set biedt een slimme en efficiënte oplossing voor het beheren van het binnenklimaat in meerdere ruimtes. Met zijn SEER van 8,60 en SCOP van 4,65 levert deze set hoge prestaties terwijl het energieverbruik tot een minimum wordt beperkt. De energieclassificaties A++ voor koelen en A+ voor verwarmen maken dit systeem niet alleen krachtig, maar ook duurzaam. Bovendien biedt het multisplitontwerp u de flexibiliteit om het comfort in drie verschillende ruimtes tegelijkertijd te optimaliseren, wat resulteert in een praktische en kostenbesparende klimaatoplossing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3x2.5 kW"
    },
    "image": "/images/airco-products/81001636_81001636_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001636_81001636_main.webp",
        "type": "main",
        "filename": "81001636_81001636_main.webp"
      },
      {
        "path": "/images/airco-products/81001636_main.webp",
        "type": "main",
        "filename": "81001636_main.webp"
      },
      {
        "path": "/images/airco-products/81001636_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001636_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001636_81001636_dimensions.webp",
        "type": "dimensions",
        "filename": "81001636_81001636_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001636_dimensions.webp",
        "type": "dimensions",
        "filename": "81001636_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001636_81001410_other3.webp",
        "type": "other",
        "filename": "81001636_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001636_81001627_other2.webp",
        "type": "other",
        "filename": "81001636_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001636_81001627_other3.webp",
        "type": "other",
        "filename": "81001636_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001636_81001627_other4.webp",
        "type": "other",
        "filename": "81001636_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001636_81001636_other1.webp",
        "type": "other",
        "filename": "81001636_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81001636_other1.webp",
        "type": "other",
        "filename": "81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81001636_sk21241_81001636_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001636_sk21241_81001636_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r19-090909-r32-3x25-kw-set/29870/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001636_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21240_81001636_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001636_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001636_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001636_Product_sheet_NL-2.pdf",
        "name": "Product Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001636_Technical_Document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001636_Technical_document_NL-2.pdf",
        "name": "Technical Document NL 2"
      }
    ]
  },
  {
    "id": "81001637",
    "sku": "AKTIE-MU3R19-090912_R32",
    "name": "LG Triple split airco MU3R19-090912 R32 2x2,5 kW + 1x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R19-090912 R32 Triple Complete Multisplit Set biedt een uitstekende oplossing voor het efficiënt en flexibel beheren van het binnenklimaat in meerdere kamers tegelijk. Dit systeem is ontworpen om drie verschillende ruimtes te koelen of te verwarmen, met de kracht en efficiëntie die u van LG verwacht. Met een SEER van 8,60 en een SCOP van 4,65, levert deze set een hoog rendement, wat bijdraagt aan lagere energiekosten en een comfortabeler binnenklimaat. Het energielabel A++ voor koelen en A+ voor verwarmen onderstreept de energiezuinigheid van dit systeem, waardoor het een duurzame keuze is voor zowel woningen als kantoren.\n\nDe LG MU3R19-090912 is ideaal voor gebruik in woningen of kantoren waar meerdere kamers individueel beheerd moeten worden. Deze set biedt de mogelijkheid om elk van de drie aangesloten binnenunits op een eigen temperatuur in te stellen, waardoor u de controle hebt over het comfort in elke ruimte.\n\nDeze set is eenvoudig te installeren en biedt de mogelijkheid om drie binnenunits aan één buitenunit te koppelen. Dit slimme ontwerp bespaart ruimte en maakt de installatie efficiënter, waardoor u sneller kunt genieten van een optimaal binnenklimaat.\n\nDe LG MU3R19-090912 R32 Triple Complete Multisplit Set combineert geavanceerde technologie met uitzonderlijke energie-efficiëntie. Met een SEER van 8,60 en een SCOP van 4,65 levert deze set betrouwbare prestaties en energiezuinige werking, ideaal voor het beheren van het binnenklimaat in meerdere ruimtes. Het A++ energielabel voor koeling en A+ voor verwarming maakt deze set tot een duurzame en kosteneffectieve keuze. Bovendien biedt het multisplitontwerp maximale flexibiliteit, waardoor u het klimaat in drie verschillende ruimtes kunt optimaliseren met één enkele oplossing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81001637_81001636_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001637_81001636_main.webp",
        "type": "main",
        "filename": "81001637_81001636_main.webp"
      },
      {
        "path": "/images/airco-products/81001637_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81001637_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001637_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001637_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001637_81001410_other3.webp",
        "type": "other",
        "filename": "81001637_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001637_81001627_other2.webp",
        "type": "other",
        "filename": "81001637_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001637_81001627_other3.webp",
        "type": "other",
        "filename": "81001637_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001637_81001627_other4.webp",
        "type": "other",
        "filename": "81001637_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001637_81001636_other1.webp",
        "type": "other",
        "filename": "81001637_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81001637_sk21243_81001637_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001637_sk21243_81001637_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r19-090912-r32-2x25-kw-1x35-kw-set/29869/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001637_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21242_81001637_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001637_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001637_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001637_Product_sheet_NL-2.pdf",
        "name": "Product Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001637_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001637_Technical_Document_NL-2.pdf",
        "name": "Technical Document NL 2"
      }
    ]
  },
  {
    "id": "81001638",
    "sku": "AKTIE-MU3R21-090909_R32",
    "name": "LG Triple split airco MU3R21-090909 R32 3x2,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R21-090909 R32 Triple Complete Multisplit Set biedt een slimme en efficiënte oplossing voor het beheren van het binnenklimaat in drie afzonderlijke ruimtes. Deze set is speciaal ontworpen om zowel flexibiliteit als energiebesparing te bieden, door het gelijktijdig koelen en verwarmen van verschillende kamers in uw huis of kantoor. Met een uitstekende SEER van 8,60 en een SCOP van 4,65, levert dit systeem hoogwaardige prestaties, waardoor uw energieverbruik aanzienlijk wordt verminderd. De set beschikt over een energielabel A++ voor koeling en A+ voor verwarming, wat benadrukt dat deze multisplit set niet alleen krachtig, maar ook bijzonder energiezuinig is.\n\nDe LG MU3R21-090909 is perfect voor woningen of kantoren waar meerdere kamers afzonderlijk gekoeld of verwarmd moeten worden. Dit systeem biedt u de mogelijkheid om elke ruimte op de gewenste temperatuur te houden, zonder concessies te doen aan comfort of efficiëntie.\n\nDeze multisplit set is ontworpen om eenvoudig te installeren en biedt de mogelijkheid om drie binnenunits aan één buitenunit te koppelen. Dit ontwerp bespaart ruimte en vereenvoudigt de installatie, waardoor u snel kunt genieten van een optimaal binnenklimaat.\n\nDe LG MU3R21-090909 R32 Triple Complete Multisplit Set combineert geavanceerde technologie met uitzonderlijke energie-efficiëntie. De SEER van 8,60 en de SCOP van 4,65 zorgen ervoor dat dit systeem betrouwbare prestaties levert met een minimaal energieverbruik. Het A++ energielabel voor koeling en A+ voor verwarming maakt deze set tot een ideale keuze voor wie op zoek is naar een krachtige en tegelijkertijd zuinige oplossing voor het beheer van het binnenklimaat. Bovendien biedt de flexibiliteit van het multisplitsysteem de mogelijkheid om drie verschillende ruimtes met één systeem comfortabel te verwarmen of te koelen.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3x2.5 kW"
    },
    "image": "/images/airco-products/81001638_81001636_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001638_81001636_main.webp",
        "type": "main",
        "filename": "81001638_81001636_main.webp"
      },
      {
        "path": "/images/airco-products/81001638_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001638_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001638_81001636_dimensions.webp",
        "type": "dimensions",
        "filename": "81001638_81001636_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001638_81001410_other3.webp",
        "type": "other",
        "filename": "81001638_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001638_81001627_other2.webp",
        "type": "other",
        "filename": "81001638_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001638_81001627_other3.webp",
        "type": "other",
        "filename": "81001638_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001638_81001627_other4.webp",
        "type": "other",
        "filename": "81001638_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001638_81001636_other1.webp",
        "type": "other",
        "filename": "81001638_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81001638_sk21245_81001638_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001638_sk21245_81001638_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r21-090909-r32-3x25-kw-set/29458/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001638_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21244_81001638_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001638_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001638_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001638_Product_Sheet_NL-2.pdf",
        "name": "Product Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001638_Technical_Document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001638_Technical_Document_NL-2.pdf",
        "name": "Technical Document NL 2"
      }
    ]
  },
  {
    "id": "81001639",
    "sku": "AKTIE-MU3R21-090912_R32",
    "name": "LG Triple split airco MU3R21-090912 R32 2x2,5 kW + 1x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R21-090912 R32 TRIPLE Complete Multisplit Set biedt een efficiënte en veelzijdige oplossing voor het beheren van het binnenklimaat in meerdere ruimtes. Deze set is ontworpen om drie afzonderlijke ruimtes tegelijkertijd te koelen of te verwarmen, wat zorgt voor flexibiliteit en comfort in uw woning of kantoor. Met een indrukwekkende SEER van 8,60 en een SCOP van 4,65 levert deze set uitstekende energieprestaties, wat resulteert in een lager energieverbruik en lagere energiekosten. De set heeft een energielabel van A++ voor koeling en A+ voor verwarming, wat aangeeft dat het systeem bijzonder efficiënt werkt en bijdraagt aan een duurzamer energieverbruik.\n\nDe LG MU3R21-090912 is ideaal voor woningen en kantoren waar meerdere ruimtes gelijktijdig beheerd moeten worden. De flexibiliteit van deze multisplit set maakt het mogelijk om verschillende kamers op maat te koelen of te verwarmen, waardoor iedereen in huis of op kantoor van een optimaal comfort kan genieten.\n\nDeze set is ontworpen voor eenvoudige installatie en wordt compleet geleverd met alle benodigde componenten. Dankzij de multisplit-functionaliteit kunt u meerdere binnenunits aansluiten op één buitenunit, wat ruimte bespaart en de installatie vereenvoudigt.\n\nDe LG MU3R21-090912 R32 TRIPLE Complete Multisplit Set combineert hoge prestaties met uitzonderlijke energie-efficiëntie. Met een SEER van 8,60 en een SCOP van 4,65 biedt deze set betrouwbare en energiezuinige prestaties voor het koelen en verwarmen van meerdere ruimtes. Het A++ energielabel voor koeling en A+ voor verwarming maakt deze set een milieubewuste keuze die uw energiekosten laag houdt. Bovendien biedt de flexibiliteit van het multisplitsysteem een comfortabele oplossing voor verschillende ruimtes in uw huis of kantoor.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81001639_81001636_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001639_81001636_main.webp",
        "type": "main",
        "filename": "81001639_81001636_main.webp"
      },
      {
        "path": "/images/airco-products/81001639_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001639_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001639_81001636_dimensions.webp",
        "type": "dimensions",
        "filename": "81001639_81001636_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001639_81001410_other3.webp",
        "type": "other",
        "filename": "81001639_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001639_81001627_other2.webp",
        "type": "other",
        "filename": "81001639_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001639_81001627_other3.webp",
        "type": "other",
        "filename": "81001639_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001639_81001627_other4.webp",
        "type": "other",
        "filename": "81001639_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001639_81001636_other1.webp",
        "type": "other",
        "filename": "81001639_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81001639_sk21247_81001639_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001639_sk21247_81001639_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r21-090912-r32-2x25-kw-1x35-kw-set/29457/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001639_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21246_81001639_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001639_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001639_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001639_Product_sheet_NL-2.pdf",
        "name": "Product Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001639_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001639_Technical_Document_NL-2.pdf",
        "name": "Technical Document NL 2"
      }
    ]
  },
  {
    "id": "81001640",
    "sku": "AKTIE-MU3R21-091212_R32",
    "name": "LG Triple split airco MU3R21-091212 R32 1x2,5 kW + 2x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R21-091212 R32 Complete Multisplit Set is een geavanceerde oplossing voor het efficiënt koelen en verwarmen van meerdere ruimtes binnen uw woning of kantoor. Deze set combineert kracht en energiezuinigheid, waardoor u verzekerd bent van een comfortabele temperatuur, ongeacht het seizoen. Met een indrukwekkende SEER van 8,60 en een SCOP van 4,65, biedt dit systeem uitstekende prestaties en zorgt het voor aanzienlijke energiebesparingen. De unit heeft een energielabel van A++ voor koelen en A+ voor verwarmen, wat bijdraagt aan lagere energiekosten en een milieuvriendelijke werking.\n\nDe LG MU3R21-091212 is ideaal voor woningen en kantoren waar meerdere ruimtes gelijktijdig moeten worden gekoeld of verwarmd. Dankzij de multisplit configuratie kunnen verschillende ruimtes individueel worden beheerd, wat zorgt voor flexibiliteit en optimaal comfort in elke kamer.\n\nDeze multisplit set is eenvoudig te installeren en wordt geleverd met alle benodigde onderdelen en een duidelijke handleiding, zodat het installatieproces soepel en snel verloopt. Het systeem is ontworpen om efficiënt te werken en past naadloos in verschillende interieurstijlen.\n\nDe LG MU3R21-091212 R32 Complete Multisplit Set biedt een combinatie van energiezuinigheid, krachtige prestaties en gebruiksgemak. Met zijn hoge SEER en SCOP waarden levert deze set betrouwbare prestaties in zowel koeling als verwarming, terwijl het gebruik van het milieuvriendelijke R32 koelmiddel zorgt voor een lagere ecologische impact. De energielabels A++ voor koelen en A+ voor verwarmen maken dit systeem tot een slimme en duurzame keuze voor iedereen die op zoek is naar een hoogwaardige klimaatoplossing voor meerdere ruimtes.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 2x3.5 kW"
    },
    "image": "/images/airco-products/81001640_81001636_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001640_81001636_main.webp",
        "type": "main",
        "filename": "81001640_81001636_main.webp"
      },
      {
        "path": "/images/airco-products/81001640_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81001640_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001640_81001627_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001640_81001627_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001640_81001410_other3.webp",
        "type": "other",
        "filename": "81001640_81001410_other3.webp"
      },
      {
        "path": "/images/airco-products/81001640_81001627_other2.webp",
        "type": "other",
        "filename": "81001640_81001627_other2.webp"
      },
      {
        "path": "/images/airco-products/81001640_81001627_other3.webp",
        "type": "other",
        "filename": "81001640_81001627_other3.webp"
      },
      {
        "path": "/images/airco-products/81001640_81001627_other4.webp",
        "type": "other",
        "filename": "81001640_81001627_other4.webp"
      },
      {
        "path": "/images/airco-products/81001640_81001636_other1.webp",
        "type": "other",
        "filename": "81001640_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81001640_sk21249_81001640_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81001640_sk21249_81001640_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r21-091212-r32-1x25-kw-2x35-kw-set/29455/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001640_dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21248_81001640_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001640_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001640_Product_sheet_NL.pdf",
        "name": "Product Sheet NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001640_Product_sheet_NL-2.pdf",
        "name": "Product Sheet NL 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001640_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001640_Technical_Document_NL-2.pdf",
        "name": "Technical Document NL 2"
      }
    ]
  },
  {
    "id": "81002196",
    "sku": "AKTIE-MU2R15-0909P",
    "name": "LG Multi split airco MU2R15-0909P R32 2x2,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU2R15-0909P R32 DUO Complete Multisplit Set is de ideale keuze voor het efficiënt en flexibel beheren van het klimaat in twee verschillende ruimtes. Deze set maakt het mogelijk om twee kamers te koelen of te verwarmen, wat zorgt voor optimaal comfort en aanpasbaarheid in uw woning of werkruimte. Met een uitstekende SEER van 8,60 en een SCOP van 4,61, biedt dit systeem indrukwekkende energie-efficiëntie, waardoor uw energierekeningen lager blijven en uw ecologische voetafdruk vermindert. De set heeft een energielabel van A++ voor koelen en A+ voor verwarmen, wat garant staat voor een zuinige en duurzame werking.\n\nDe LG MU2R15-0909P is bijzonder geschikt voor gebruik in woningen en kantoren waar twee ruimtes apart beheerd moeten worden. Of het nu gaat om het tegelijkertijd koelen van een woonkamer en het verwarmen van een slaapkamer, deze set biedt de flexibiliteit om elk vertrek op de gewenste temperatuur te houden.\n\nDeze set is eenvoudig te installeren, waarbij twee binnenunits aan één enkele buitenunit kunnen worden gekoppeld. Dit ruimtebesparende ontwerp maakt de installatie eenvoudiger en zorgt ervoor dat u snel kunt genieten van een optimaal binnenklimaat in beide ruimtes.\n\nDe LG MU2R15-0909P R32 DUO Complete Multisplit Set combineert efficiëntie, flexibiliteit en betrouwbaarheid in één systeem. Met zijn SEER van 8,60 en SCOP van 4,61 levert deze set consistente en zuinige prestaties, waardoor u zowel op korte als lange termijn bespaart op energiekosten. Het energielabel A++ voor koelen en A+ voor verwarmen maakt deze set tot een verantwoorde keuze voor wie een milieuvriendelijke en kostenbesparende oplossing zoekt. Daarnaast biedt de mogelijkheid om twee ruimtes te beheren, het comfort dat u nodig heeft in uw dagelijkse omgeving.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW"
    },
    "image": "/images/airco-products/81002196_sk21143_81002196_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002196_sk21143_81002196_main.webp",
        "type": "main",
        "filename": "81002196_sk21143_81002196_main.webp"
      },
      {
        "path": "/images/airco-products/81002196_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81002196_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002196_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002196_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002196_81001627_other1.webp",
        "type": "other",
        "filename": "81002196_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81002196_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002196_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002196_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002196_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002196_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002196_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002196_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002196_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002196_sk21251_81002196_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002196_sk21251_81002196_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-multi-split-airco-mu2r15-0909p-r32-2x25-kw-set/36556/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21250_81002196_EU_Energy_Label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002199",
    "sku": "AKTIE-MU2R17-0912P",
    "name": "LG Multi split airco MU2R17-0912P R32 1x2,5 kW + 1x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU2R17-0912P R32 DUO Complete Multisplit Set is een ideale keuze voor het effectief beheren van het binnenklimaat in twee afzonderlijke ruimtes. Deze set biedt de mogelijkheid om twee kamers onafhankelijk van elkaar te koelen of te verwarmen, wat zorgt voor een flexibele en comfortabele oplossing in uw huis of kantoor. Uitgerust met een SEER van 7,80 en een SCOP van 4,20, levert dit systeem uitstekende energieprestaties, waardoor het energieverbruik wordt geminimaliseerd en uw energiekosten laag blijven. Met een energielabel van A++ voor koelen en A+ voor verwarmen, kunt u rekenen op een efficiënte en duurzame werking.\n\nDe LG MU2R17-0912P is perfect voor woningen of kantoren waar twee afzonderlijke ruimtes beheerd moeten worden. Dit systeem biedt de mogelijkheid om elke kamer apart te koelen of te verwarmen, waardoor u altijd verzekerd bent van de ideale temperatuur, ongeacht de seizoenen.\n\nDeze set is ontworpen voor eenvoudige installatie en efficiënt ruimtegebruik, waarbij twee binnenunits aan één buitenunit kunnen worden gekoppeld. Dit maakt het niet alleen gemakkelijker om te installeren, maar bespaart ook ruimte, waardoor u een overzichtelijke en functionele oplossing krijgt voor uw binnenklimaatbeheer.\n\nDe LG MU2R17-0912P R32 DUO Complete Multisplit Set combineert flexibiliteit, energie-efficiëntie en betrouwbaarheid in één pakket. Met een SEER van 7,80 en een SCOP van 4,20 biedt deze set hoge prestaties voor zowel koeling als verwarming, terwijl het energieverbruik tot een minimum wordt beperkt. Het energielabel A++ voor koelen en A+ voor verwarmen maakt dit systeem een duurzame en kostenbesparende keuze. Daarnaast biedt de DUO-functionaliteit de mogelijkheid om twee ruimtes effectief te beheren, wat zorgt voor maximaal comfort en efficiëntie.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81002199_sk21143_81002196_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002199_sk21143_81002196_main.webp",
        "type": "main",
        "filename": "81002199_sk21143_81002196_main.webp"
      },
      {
        "path": "/images/airco-products/81002199_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81002199_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002199_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002199_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002199_81001627_other1.webp",
        "type": "other",
        "filename": "81002199_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81002199_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002199_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002199_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002199_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002199_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002199_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002199_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002199_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002199_sk21259_81002199_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002199_sk21259_81002199_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-multi-split-airco-mu2r17-0912p-r32-1x25-kw-1x35-kw-set/36560/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21258_81002199_EU_Energy_Label.pdf",
        "name": "Energy label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002200",
    "sku": "AKTIE-MU2R17-1212P",
    "name": "LG Multi split airco MU2R17-1212P R32 2x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "3.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De AKTIE 2022 LG MU2R17-1212P R32 DUO Complete Multisplit Set biedt een efficiënte en veelzijdige oplossing voor het regelen van het binnenklimaat in twee verschillende ruimtes. Met deze set kunt u gemakkelijk twee kamers afzonderlijk koelen of verwarmen, wat zorgt voor optimaal comfort en flexibiliteit in uw woning of kantoor. De set is uitgerust met een SEER van 7,80 en een SCOP van 4,20, wat staat voor uitstekende energie-efficiëntie. Met energielabels A++ voor koeling en A+ voor verwarming, is deze multisplit set ontworpen om uw energiekosten laag te houden terwijl het comfortniveau hoog blijft.\n\nDe LG MU2R17-1212P is ideaal voor gebruik in woningen of kantoren waar twee ruimtes individueel moeten worden gekoeld of verwarmd. Deze set biedt de flexibiliteit om elk van de twee kamers op de gewenste temperatuur te houden, wat zorgt voor een comfortabel en consistent binnenklimaat.\n\nDeze DUO multisplit set is eenvoudig te installeren, met de mogelijkheid om twee binnenunits aan één buitenunit te koppelen. Dit ontwerp bespaart ruimte en maakt de installatie efficiënt en overzichtelijk, zodat u snel kunt genieten van een optimaal binnenklimaat in beide ruimtes.\n\nDe AKTIE 2022 LG MU2R17-1212P R32 DUO Complete Multisplit Set combineert hoge prestaties met energiezuinigheid, waardoor het een uitstekende keuze is voor wie op zoek is naar een betrouwbare en efficiënte oplossing voor het beheren van het binnenklimaat in twee verschillende ruimtes. Met een SEER van 7,80 en een SCOP van 4,20, biedt deze set krachtige en consistente prestaties. De energieclassificaties A++ voor koelen en A+ voor verwarmen maken het systeem niet alleen effectief, maar ook duurzaam. Daarnaast biedt de DUO-functionaliteit de flexibiliteit om twee ruimtes afzonderlijk te beheren, wat zorgt voor maximaal comfort en efficiëntie.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x3.5 kW"
    },
    "image": "/images/airco-products/81002200_sk21143_81002196_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002200_sk21143_81002196_main.webp",
        "type": "main",
        "filename": "81002200_sk21143_81002196_main.webp"
      },
      {
        "path": "/images/airco-products/81002200_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81002200_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002200_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002200_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002200_81001627_other1.webp",
        "type": "other",
        "filename": "81002200_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81002200_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002200_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002200_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002200_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002200_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002200_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002200_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002200_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002200_sk21257_81002200_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002200_sk21257_81002200_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-multi-split-airco-mu2r17-1212p-r32-2x35-kw-set/36559/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21256_81002200_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002197",
    "sku": "AKTIE-MU2R15-0912P",
    "name": "LG DUO Complete Multisplit airco MU2R15-0912P R32 1x2,5 kW + 1x3,5 kW",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU2R15-0912P R32 DUO Complete Multisplit Set biedt een geavanceerde oplossing voor het regelen van het klimaat in twee verschillende ruimtes. Met de mogelijkheid om elke kamer te koelen of te verwarmen, levert dit systeem flexibiliteit en optimaal comfort in uw woning of kantoor. Deze set is uitgerust met een indrukwekkende SEER van 8,60 en een SCOP van 4,61, wat resulteert in uitstekende energieprestaties. Het energielabel A++ voor koelen en A+ voor verwarmen benadrukt de efficiëntie van dit systeem, waardoor het niet alleen uw energiekosten verlaagt, maar ook milieuvriendelijk is.\n\nDe LG MU2R15-0912P is ideaal voor woningen of kantoren waar twee verschillende ruimtes afzonderlijk beheerd moeten worden. Of het nu gaat om het koelen van een slaapkamer en het verwarmen van een thuiskantoor, deze set biedt de flexibiliteit om elke ruimte op de gewenste temperatuur te houden.\n\nDeze multisplit set is eenvoudig te installeren en biedt de mogelijkheid om twee binnenunits op één buitenunit aan te sluiten. Dit zorgt voor een efficiënter gebruik van de beschikbare ruimte en vereenvoudigt het installatieproces, zodat u snel kunt profiteren van een optimaal binnenklimaat.\n\nDe LG MU2R15-0912P R32 DUO Complete Multisplit Set combineert hoge energie-efficiëntie met gebruiksgemak en flexibiliteit. Met een SEER van 8,60 en een SCOP van 4,61 biedt dit systeem betrouwbare prestaties het hele jaar door, terwijl het energieverbruik tot een minimum wordt beperkt. Het A++ energielabel voor koelen en A+ voor verwarmen maakt dit systeem tot een uitstekende keuze voor wie op zoek is naar een duurzame en kostenbesparende oplossing voor klimaatbeheersing. Daarnaast biedt de DUO-functionaliteit u de mogelijkheid om twee ruimtes effectief en efficiënt te beheren, wat zorgt voor maximaal comfort in uw woning of kantoor.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81002197_sk21143_81002196_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002197_sk21143_81002196_main.webp",
        "type": "main",
        "filename": "81002197_sk21143_81002196_main.webp"
      },
      {
        "path": "/images/airco-products/81002197_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81002197_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002197_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002197_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002197_81001627_other1.webp",
        "type": "other",
        "filename": "81002197_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81002197_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002197_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002197_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002197_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002197_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002197_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002197_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002197_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002197_sk21253_81002197_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002197_sk21253_81002197_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-duo-complete-multisplit-airco-mu2r15-0912p-r32-1x25-kw-1x35-kw/36557/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21252_81002197_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002201",
    "sku": "AKTIE-MU3R19-090909P",
    "name": "LG Triple split airco MU3R19-090909P R32 3x2,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R19-090909P R32 Triple Complete Multisplit Set is ontworpen om efficiënt en flexibel comfort te bieden in drie verschillende ruimtes tegelijk. Dit systeem maakt het mogelijk om het klimaat in meerdere kamers onafhankelijk van elkaar te regelen, wat zorgt voor optimaal gemak en aanpasbaarheid. Dankzij de indrukwekkende SEER van 8,60 en SCOP van 4,65 levert deze set uitzonderlijke energieprestaties, waardoor u kunt genieten van zowel kostenbesparing als een comfortabel binnenklimaat. Met een energielabel van A++ voor koelen en A+ voor verwarmen, voldoet dit systeem aan de hoogste normen op het gebied van energiezuinigheid.\n\nDe LG MU3R19-090909P is ideaal voor het beheren van het klimaat in zowel residentiële als commerciële ruimtes, waarbij u drie kamers met één systeem kunt bedienen. Dit systeem biedt de flexibiliteit om elke ruimte apart te koelen of te verwarmen, wat zorgt voor een consistent en comfortabel binnenklimaat.\n\nDeze multisplit set is eenvoudig te installeren en biedt een ruimtebesparende oplossing doordat drie binnenunits op één enkele buitenunit worden aangesloten. Dit ontwerp vereenvoudigt de installatie en biedt tegelijkertijd meer controle over het klimaat in elke kamer.\n\nDe LG MU3R19-090909P R32 Triple Complete Multisplit Set biedt een slimme en efficiënte oplossing voor het beheren van het binnenklimaat in meerdere ruimtes. Met zijn SEER van 8,60 en SCOP van 4,65 levert deze set hoge prestaties terwijl het energieverbruik tot een minimum wordt beperkt. De energieclassificaties A++ voor koelen en A+ voor verwarmen maken dit systeem niet alleen krachtig, maar ook duurzaam. Bovendien biedt het multisplitontwerp u de flexibiliteit om het comfort in drie verschillende ruimtes tegelijkertijd te optimaliseren, wat resulteert in een praktische en kostenbesparende klimaatoplossing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3x2.5 kW"
    },
    "image": "/images/airco-products/81002201_sk21151_81002201_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002201_sk21151_81002201_main.webp",
        "type": "main",
        "filename": "81002201_sk21151_81002201_main.webp"
      },
      {
        "path": "/images/airco-products/81002201_81001636_dimensions.webp",
        "type": "dimensions",
        "filename": "81002201_81001636_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002201_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002201_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002201_81001636_other1.webp",
        "type": "other",
        "filename": "81002201_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81002201_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002201_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002201_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002201_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002201_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002201_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002201_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002201_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002201_sk21261_81002201_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002201_sk21261_81002201_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r19-090909p-r32-3x25-kw-set/36561/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21260_81002201_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002203",
    "sku": "AKTIE-MU3R21-090909PAKTIE-MU3R21-090909P",
    "name": "LG Triple split airco MU3R21-090909P R32 3x2,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R21-09090P R32 Triple Complete Multisplit Set biedt een slimme en efficiënte oplossing voor het beheren van het binnenklimaat in drie afzonderlijke ruimtes. Deze set is speciaal ontworpen om zowel flexibiliteit als energiebesparing te bieden, door het gelijktijdig koelen en verwarmen van verschillende kamers in uw huis of kantoor. Met een uitstekende SEER van 8,60 en een SCOP van 4,65, levert dit systeem hoogwaardige prestaties, waardoor uw energieverbruik aanzienlijk wordt verminderd. De set beschikt over een energielabel A++ voor koeling en A+ voor verwarming, wat benadrukt dat deze multisplit set niet alleen krachtig, maar ook bijzonder energiezuinig is.\n\nDe LG MU3R21-090909P is perfect voor woningen of kantoren waar meerdere kamers afzonderlijk gekoeld of verwarmd moeten worden. Dit systeem biedt u de mogelijkheid om elke ruimte op de gewenste temperatuur te houden, zonder concessies te doen aan comfort of efficiëntie.\n\nDeze multisplit set is ontworpen om eenvoudig te installeren en biedt de mogelijkheid om drie binnenunits aan één buitenunit te koppelen. Dit ontwerp bespaart ruimte en vereenvoudigt de installatie, waardoor u snel kunt genieten van een optimaal binnenklimaat.\n\nDe LG MU3R21-090909P R32 Triple Complete Multisplit Set combineert geavanceerde technologie met uitzonderlijke energie-efficiëntie. De SEER van 8,60 en de SCOP van 4,65 zorgen ervoor dat dit systeem betrouwbare prestaties levert met een minimaal energieverbruik. Het A++ energielabel voor koeling en A+ voor verwarming maakt deze set tot een ideale keuze voor wie op zoek is naar een krachtige en tegelijkertijd zuinige oplossing voor het beheer van het binnenklimaat. Bovendien biedt de flexibiliteit van het multisplitsysteem de mogelijkheid om drie verschillende ruimtes met één systeem comfortabel te verwarmen of te koelen.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3x2.5 kW"
    },
    "image": "/images/airco-products/81002203_sk21151_81002201_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002203_sk21151_81002201_main.webp",
        "type": "main",
        "filename": "81002203_sk21151_81002201_main.webp"
      },
      {
        "path": "/images/airco-products/81002203_81001636_dimensions.webp",
        "type": "dimensions",
        "filename": "81002203_81001636_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002203_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002203_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002203_81001636_other1.webp",
        "type": "other",
        "filename": "81002203_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81002203_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002203_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002203_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002203_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002203_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002203_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002203_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002203_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002203_sk21265_81002203_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002203_sk21265_81002203_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r21-090909p-r32-3x25-kw-set/36563/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21264_81002203_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002204",
    "sku": "AKTIE-MU3R21-090912P",
    "name": "LG Triple split airco MU3R21-090912P R32 2x2,5 kW + 1x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R21-090912P R32 TRIPLE Complete Multisplit Set biedt een efficiënte en veelzijdige oplossing voor het beheren van het binnenklimaat in meerdere ruimtes. Deze set is ontworpen om drie afzonderlijke ruimtes tegelijkertijd te koelen of te verwarmen, wat zorgt voor flexibiliteit en comfort in uw woning of kantoor. Met een indrukwekkende SEER van 8,60 en een SCOP van 4,65 levert deze set uitstekende energieprestaties, wat resulteert in een lager energieverbruik en lagere energiekosten. De set heeft een energielabel van A++ voor koeling en A+ voor verwarming, wat aangeeft dat het systeem bijzonder efficiënt werkt en bijdraagt aan een duurzamer energieverbruik.\n\nDe LG MU3R21-090912P is ideaal voor woningen en kantoren waar meerdere ruimtes gelijktijdig beheerd moeten worden. De flexibiliteit van deze multisplit set maakt het mogelijk om verschillende kamers op maat te koelen of te verwarmen, waardoor iedereen in huis of op kantoor van een optimaal comfort kan genieten.\n\nDeze set is ontworpen voor eenvoudige installatie en wordt compleet geleverd met alle benodigde componenten. Dankzij de multisplit-functionaliteit kunt u meerdere binnenunits aansluiten op één buitenunit, wat ruimte bespaart en de installatie vereenvoudigt.\n\nDe LG MU3R21-090912P R32 TRIPLE Complete Multisplit Set combineert hoge prestaties met uitzonderlijke energie-efficiëntie. Met een SEER van 8,60 en een SCOP van 4,65 biedt deze set betrouwbare en energiezuinige prestaties voor het koelen en verwarmen van meerdere ruimtes. Het A++ energielabel voor koeling en A+ voor verwarming maakt deze set een milieubewuste keuze die uw energiekosten laag houdt. Bovendien biedt de flexibiliteit van het multisplitsysteem een comfortabele oplossing voor verschillende ruimtes in uw huis of kantoor.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81002204_sk21151_81002201_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002204_sk21151_81002201_main.webp",
        "type": "main",
        "filename": "81002204_sk21151_81002201_main.webp"
      },
      {
        "path": "/images/airco-products/81002204_81001636_dimensions.webp",
        "type": "dimensions",
        "filename": "81002204_81001636_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002204_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002204_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002204_81001636_other1.webp",
        "type": "other",
        "filename": "81002204_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81002204_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002204_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002204_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002204_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002204_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002204_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002204_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002204_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002204_sk21267_81002204_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002204_sk21267_81002204_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r21-090912p-r32-2x25-kw-1x35-kw-set/36564/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21266_81002204_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002205",
    "sku": "AKTIE-MU3R21-091212P",
    "name": "LG Triple split airco MU3R21-091212P R32 1x2,5 kW + 2x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R21-091212P R32 Complete Multisplit Set is een geavanceerde oplossing voor het efficiënt koelen en verwarmen van meerdere ruimtes binnen uw woning of kantoor. Deze set combineert kracht en energiezuinigheid, waardoor u verzekerd bent van een comfortabele temperatuur, ongeacht het seizoen. Met een indrukwekkende SEER van 8,60 en een SCOP van 4,65, biedt dit systeem uitstekende prestaties en zorgt het voor aanzienlijke energiebesparingen. De unit heeft een energielabel van A++ voor koelen en A+ voor verwarmen, wat bijdraagt aan lagere energiekosten en een milieuvriendelijke werking.\n\nDe LG MU3R21-091212P is ideaal voor woningen en kantoren waar meerdere ruimtes gelijktijdig moeten worden gekoeld of verwarmd. Dankzij de multisplit configuratie kunnen verschillende ruimtes individueel worden beheerd, wat zorgt voor flexibiliteit en optimaal comfort in elke kamer.\n\nDeze multisplit set is eenvoudig te installeren en wordt geleverd met alle benodigde onderdelen en een duidelijke handleiding, zodat het installatieproces soepel en snel verloopt. Het systeem is ontworpen om efficiënt te werken en past naadloos in verschillende interieurstijlen.\n\nDe LG MU3R21-091212P R32 Complete Multisplit Set biedt een combinatie van energiezuinigheid, krachtige prestaties en gebruiksgemak. Met zijn hoge SEER en SCOP waarden levert deze set betrouwbare prestaties in zowel koeling als verwarming, terwijl het gebruik van het milieuvriendelijke R32 koelmiddel zorgt voor een lagere ecologische impact. De energielabels A++ voor koelen en A+ voor verwarmen maken dit systeem tot een slimme en duurzame keuze voor iedereen die op zoek is naar een hoogwaardige klimaatoplossing voor meerdere ruimtes.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 2x3.5 kW"
    },
    "image": "/images/airco-products/81002205_sk21151_81002201_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002205_sk21151_81002201_main.webp",
        "type": "main",
        "filename": "81002205_sk21151_81002201_main.webp"
      },
      {
        "path": "/images/airco-products/81002205_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81002205_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002205_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002205_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002205_81001636_other1.webp",
        "type": "other",
        "filename": "81002205_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81002205_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002205_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002205_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002205_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002205_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002205_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002205_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002205_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002205_sk21269_81002205_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002205_sk21269_81002205_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r21-091212p-r32-1x25-kw-2x35-kw-set/36565/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21268_81002205_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002202",
    "sku": "AKTIE-MU3R19-090912P",
    "name": "LG Triple split airco MU3R19-090912P R32 2x2,5 kW + 1x3,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU3R19-090912P R32 Triple Complete Multisplit Set biedt een uitstekende oplossing voor het efficiënt en flexibel beheren van het binnenklimaat in meerdere kamers tegelijk. Dit systeem is ontworpen om drie verschillende ruimtes te koelen of te verwarmen, met de kracht en efficiëntie die u van LG verwacht. Met een SEER van 8,60 en een SCOP van 4,65, levert deze set een hoog rendement, wat bijdraagt aan lagere energiekosten en een comfortabeler binnenklimaat. Het energielabel A++ voor koelen en A+ voor verwarmen onderstreept de energiezuinigheid van dit systeem, waardoor het een duurzame keuze is voor zowel woningen als kantoren.\n\nDe LG MU3R19-090912P is ideaal voor gebruik in woningen of kantoren waar meerdere kamers individueel beheerd moeten worden. Deze set biedt de mogelijkheid om elk van de drie aangesloten binnenunits op een eigen temperatuur in te stellen, waardoor u de controle hebt over het comfort in elke ruimte.\n\nDeze set is eenvoudig te installeren en biedt de mogelijkheid om drie binnenunits aan één buitenunit te koppelen. Dit slimme ontwerp bespaart ruimte en maakt de installatie efficiënter, waardoor u sneller kunt genieten van een optimaal binnenklimaat.\n\nDe LG MU3R19-090912P R32 Triple Complete Multisplit Set combineert geavanceerde technologie met uitzonderlijke energie-efficiëntie. Met een SEER van 8,60 en een SCOP van 4,65 levert deze set betrouwbare prestaties en energiezuinige werking, ideaal voor het beheren van het binnenklimaat in meerdere ruimtes. Het A++ energielabel voor koeling en A+ voor verwarming maakt deze set tot een duurzame en kosteneffectieve keuze. Bovendien biedt het multisplitontwerp maximale flexibiliteit, waardoor u het klimaat in drie verschillende ruimtes kunt optimaliseren met één enkele oplossing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81002202_sk21151_81002201_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002202_sk21151_81002201_main.webp",
        "type": "main",
        "filename": "81002202_sk21151_81002201_main.webp"
      },
      {
        "path": "/images/airco-products/81002202_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81002202_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002202_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002202_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002202_81001636_other1.webp",
        "type": "other",
        "filename": "81002202_81001636_other1.webp"
      },
      {
        "path": "/images/airco-products/81002202_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002202_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002202_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002202_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002202_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002202_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002202_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002202_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002202_sk21263_81002202_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002202_sk21263_81002202_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-triple-split-airco-mu3r19-090912p-r32-2x25-kw-1x35-kw-set/36562/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21262_81002202_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81002198",
    "sku": "AKTIE-MU2R17-0909P",
    "name": "LG Multi split airco MU2R17-0909P R32 2x2,5 kW set",
    "brand": "LG",
    "type": "multi-split",
    "category": "LG Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG MU2R17-0909P R32 DUO Complete Multisplit Set biedt een slimme en efficiënte oplossing voor het beheersen van het binnenklimaat in twee afzonderlijke ruimtes. Deze set is ontworpen om u de flexibiliteit te geven om elke kamer individueel te koelen of te verwarmen, waardoor u altijd verzekerd bent van optimaal comfort. Met een SEER van 7,80 en een SCOP van 4,20 levert dit systeem uitstekende energieprestaties, wat resulteert in een lager energieverbruik en lagere kosten. Het energielabel A++ voor koelen en A+ voor verwarmen benadrukt de energiezuinigheid van deze set, waardoor het een duurzame keuze is voor zowel huishoudelijk als zakelijk gebruik.\n\nDe LG MU2R17-0909P is ideaal voor woningen of kantoren waar twee ruimtes individueel moeten worden beheerd. Dit systeem biedt de flexibiliteit om elke ruimte apart te koelen of te verwarmen, waardoor u altijd verzekerd bent van een comfortabele temperatuur, ongeacht de seizoenen.\n\nDeze set is eenvoudig te installeren en biedt de mogelijkheid om twee binnenunits aan één buitenunit te koppelen, wat ruimte bespaart en de installatie vereenvoudigt. Dankzij het slimme ontwerp kunt u snel profiteren van een optimaal binnenklimaat in beide ruimtes.\n\nDe LG MU2R17-0909P R32 DUO Complete Multisplit Set combineert energie-efficiëntie, flexibiliteit en betrouwbaarheid in één pakket. Met een SEER van 7,80 en een SCOP van 4,20 biedt deze set betrouwbare prestaties voor zowel koeling als verwarming, terwijl het energieverbruik tot een minimum wordt beperkt. Het A++ energielabel voor koelen en A+ voor verwarmen maakt dit systeem tot een duurzame en kosteneffectieve keuze. De mogelijkheid om twee ruimtes onafhankelijk te beheren, zorgt ervoor dat u altijd kunt genieten van een comfortabel binnenklimaat, precies zoals u dat wilt.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "533",
      "Model (binnenunit)": "Wand (hoog)",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Global warming potential (GWP)": "675",
      "Inverter gestuurd": "Ja",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW"
    },
    "image": "/images/airco-products/81002198_sk21143_81002196_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002198_sk21143_81002196_main.webp",
        "type": "main",
        "filename": "81002198_sk21143_81002196_main.webp"
      },
      {
        "path": "/images/airco-products/81002198_81001627_dimensions.webp",
        "type": "dimensions",
        "filename": "81002198_81001627_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002198_sk17203_81002172_dimensions_1.webp",
        "type": "dimensions",
        "filename": "81002198_sk17203_81002172_dimensions_1.webp"
      },
      {
        "path": "/images/airco-products/81002198_81001627_other1.webp",
        "type": "other",
        "filename": "81002198_81001627_other1.webp"
      },
      {
        "path": "/images/airco-products/81002198_sk16882_81002173_other2.webp",
        "type": "other",
        "filename": "81002198_sk16882_81002173_other2.webp"
      },
      {
        "path": "/images/airco-products/81002198_sk17147_81002172_other4.webp",
        "type": "other",
        "filename": "81002198_sk17147_81002172_other4.webp"
      },
      {
        "path": "/images/airco-products/81002198_sk17152_82002244_other3.webp",
        "type": "other",
        "filename": "81002198_sk17152_82002244_other3.webp"
      },
      {
        "path": "/images/airco-products/81002198_sk17233_82002244_other1.webp",
        "type": "other",
        "filename": "81002198_sk17233_82002244_other1.webp"
      },
      {
        "path": "/images/airco-products/81002198_sk21255_81002198_EU_Energy_Label.jpg",
        "type": "energy",
        "filename": "81002198_sk21255_81002198_EU_Energy_Label.jpg"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-multi-split-airco-mu2r17-0909p-r32-2x25-kw-set/36558/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21254_81002198_EU_Energy_Label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk17595_Lg_wantunits_flyer_NL.pdf",
        "name": "Flyer NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001630_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk16877_81002172_DECLARATION_OF_CONFORMITY.pdf",
        "name": "Declaration of Conformity EN"
      }
    ]
  },
  {
    "id": "81001690",
    "sku": "AKTIE-MTS2R-0909P-SET",
    "name": "Tosot PULAR Multi split airco Inverter 0909P R32 2x2,5 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De Tosot PULAR Duo inverter set geeft u de mogelijkheid om het klimaat van twee kamers efficiënt te beheren. Je kunt de kamers naar wens verkoelen of verwarmen, zo zijn de kamers altijd comfortabel om in te wonen, werken of te slapen. Met een SEER 6,3 en een SCOP van 4,0 ben je verzekerd van een laag energieverbruik door heel het jaar.\n\nDe Tosot PULAR Duo inverter set is bijzonder geschikt voor gebruik in woningen en kantoren waar twee ruimtes apart beheerd moeten worden. Of het nu gaat om het tegelijkertijd koelen van een woonkamer en het verwarmen van een slaapkamer, deze set biedt de flexibiliteit om elk vertrek op de gewenste temperatuur te houden.\n\nDeze set is eenvoudig te installeren, waarbij twee binnenunits aan één enkele buitenunit kunnen worden gekoppeld. Dit ruimtebesparende ontwerp maakt de installatie eenvoudiger en zorgt ervoor dat u snel kunt genieten van een optimaal binnenklimaat in beide ruimtes.\n\nDe Tosot PULAR Duo inverter set biedt de oplossing voor het efficiënt en gemakkelijk onderhouden van een aangenaam binnenklimaat. Met een energieklasse van A++ wordt het hele jaar een zuinige werking gegarandeerd. Ook maak je, door het gebruik van het R32 koelmiddel, een milieubewuste keuze.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001690_81001690_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001690_81001690_main.webp",
        "type": "main",
        "filename": "81001690_81001690_main.webp"
      },
      {
        "path": "/images/airco-products/81001690_main.webp",
        "type": "main",
        "filename": "81001690_main.webp"
      },
      {
        "path": "/images/airco-products/81001690_81001690_dimensions.webp",
        "type": "dimensions",
        "filename": "81001690_81001690_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001690_81001690_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001690_81001690_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001690_dimensions.webp",
        "type": "dimensions",
        "filename": "81001690_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001690_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001690_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001690_81001690_energy.webp",
        "type": "energy",
        "filename": "81001690_81001690_energy.webp"
      },
      {
        "path": "/images/airco-products/81001690_energy.webp",
        "type": "energy",
        "filename": "81001690_energy.webp"
      },
      {
        "path": "/images/airco-products/81001690_81001460_other3.webp",
        "type": "other",
        "filename": "81001690_81001460_other3.webp"
      },
      {
        "path": "/images/airco-products/81001690_81001690_other1.webp",
        "type": "other",
        "filename": "81001690_81001690_other1.webp"
      },
      {
        "path": "/images/airco-products/81001690_81001690_other2.webp",
        "type": "other",
        "filename": "81001690_81001690_other2.webp"
      },
      {
        "path": "/images/airco-products/81001690_other1.webp",
        "type": "other",
        "filename": "81001690_other1.webp"
      },
      {
        "path": "/images/airco-products/81001690_other2.webp",
        "type": "other",
        "filename": "81001690_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-multi-split-airco-inverter-0909p-r32-2x25-kw-set/29630/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001690_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001690_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001690_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001690_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001691",
    "sku": "AKTIE-MTS2R-0912P-SET",
    "name": "Tosot PULAR Multi split airco Inverter 0912P R32 1x2,5 kW en 1x3,5 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MTS2R-0912P-SET is een efficiënte en veelzijdige oplossing voor het regelen van het binnenklimaat in twee verschillende ruimtes. Deze set wordt aangedreven door de TOSOT BY GREE MTS2R-18HDI 2-Split R32 Buitenunit, die speciaal is ontworpen om twee binnenunits tegelijkertijd te bedienen. Met een SEER van 6,3 en een SCOP van 4,0, biedt deze buitenunit solide energieprestaties, wat resulteert in een betrouwbaar en kosteneffectief systeem voor zowel koeling als verwarming. De buitenunit draagt een energielabel van A++ voor koelen en A+ voor verwarmen, wat de efficiëntie en duurzaamheid van het systeem onderstreept.\n\nDe TOSOT MTS2R-18HDI buitenunit is perfect voor woningen of kantoren waar klimaatbeheersing in twee ruimtes nodig is. Dankzij de mogelijkheid om twee binnenunits tegelijkertijd aan te sturen, kunt u eenvoudig verschillende temperaturen in elke kamer instellen voor maximaal comfort.\n\nDe MTS2R-0912P-SET met de TOSOT BY GREE MTS2R-18HDI 2-Split R32 Buitenunit combineert efficiënte prestaties met flexibiliteit en gebruiksgemak. Met een SEER van 6,3 en een SCOP van 4,0, levert deze set betrouwbare en energiezuinige prestaties, wat zorgt voor lagere energiekosten en een comfortabel binnenklimaat. De mogelijkheid om twee binnenunits aan te sluiten, maakt deze set ideaal voor wie op zoek is naar een oplossing voor klimaatbeheersing in twee verschillende ruimtes. De PULAR binnenunits met wifi-bediening bieden extra gemak, zodat u de controle over uw binnenklimaat altijd binnen handbereik heeft.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 1x3.5 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001691_81001690_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001691_81001690_main.webp",
        "type": "main",
        "filename": "81001691_81001690_main.webp"
      },
      {
        "path": "/images/airco-products/81001691_81001690_dimensions.webp",
        "type": "dimensions",
        "filename": "81001691_81001690_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001691_81001690_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001691_81001690_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001691_81001690_energy.webp",
        "type": "energy",
        "filename": "81001691_81001690_energy.webp"
      },
      {
        "path": "/images/airco-products/81001691_81001460_other3.webp",
        "type": "other",
        "filename": "81001691_81001460_other3.webp"
      },
      {
        "path": "/images/airco-products/81001691_81001690_other1.webp",
        "type": "other",
        "filename": "81001691_81001690_other1.webp"
      },
      {
        "path": "/images/airco-products/81001691_81001690_other2.webp",
        "type": "other",
        "filename": "81001691_81001690_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-multi-split-airco-inverter-0912p-r32-1x25-kw-en-1x35-kw-set/29441/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/Service_Manual_EN.pdf",
        "name": "Service Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001691_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001691_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001691_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001691_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001684",
    "sku": "AKTIE-MTS2R-0909-SET",
    "name": "Tosot COSMO Multi split airco Inverter 0909 R32 2x2,5 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De Tosot COSMO Multi Split Airco Inverter 0909 R32 biedt een krachtige en efficiënte oplossing voor zowel zakelijke als particuliere omgevingen. Met twee binnenunits van elk 2,5 kW en het milieuvriendelijke R32 koelmiddel, zorgt dit systeem voor een perfect binnenklimaat, ongeacht de omstandigheden. Deze airco is ontworpen voor flexibiliteit en optimale prestaties, terwijl het energieverbruik laag blijft. Dankzij de invertertechnologie geniet u van een constante, efficiënte werking en een geluidsarme omgeving, ideaal voor kantoren, werkruimtes en woningen.\n\nDe Tosot COSMO Multi Split is ideaal voor het koelen en verwarmen van middelgrote tot grote ruimtes, zoals kantoren, vergaderzalen en werkplaatsen. Door de mogelijkheid om twee verschillende ruimtes afzonderlijk te bedienen, biedt dit systeem flexibiliteit en comfort in elke situatie.\n\nDe installatie van deze multi split airco is eenvoudig en snel dankzij de meegeleverde installatiekit. Voor extra gemak en ondersteuning biedt Tosot uitgebreide technische ondersteuning en een garantie van 3 jaar, waardoor u verzekerd bent van een duurzame en betrouwbare oplossing.\n\nDit systeem onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en milieuvriendelijke eigenschappen. De combinatie van invertertechnologie, het A++ energielabel en het gebruik van R32 koelmiddel maakt de Tosot COSMO Multi Split Airco een topkeuze voor zakelijke klanten die op zoek zijn naar kostenbesparing en duurzaamheid.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001684_Tosot_Pular_Airco_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001684_Tosot_Pular_Airco_main.webp",
        "type": "main",
        "filename": "81001684_Tosot_Pular_Airco_main.webp"
      },
      {
        "path": "/images/airco-products/81001684_81001689_energy.webp",
        "type": "energy",
        "filename": "81001684_81001689_energy.webp"
      },
      {
        "path": "/images/airco-products/81001684_Tosot_Pular_Airco_other2-2.webp",
        "type": "other",
        "filename": "81001684_Tosot_Pular_Airco_other2-2.webp"
      },
      {
        "path": "/images/airco-products/81001684_Tosot_Pular_Airco_other3.webp",
        "type": "other",
        "filename": "81001684_Tosot_Pular_Airco_other3.webp"
      },
      {
        "path": "/images/airco-products/81001684_Tosot_Pular_Airco_other4.webp",
        "type": "other",
        "filename": "81001684_Tosot_Pular_Airco_other4.webp"
      },
      {
        "path": "/images/airco-products/81001684_Tosot_Pular_Airco_other5.webp",
        "type": "other",
        "filename": "81001684_Tosot_Pular_Airco_other5.webp"
      },
      {
        "path": "/images/airco-products/81001684_Dimensions_v2.webp",
        "type": "other",
        "filename": "81001684_Dimensions_v2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-cosmo-multi-split-airco-inverter-0909-r32-2x25-kw-set/29449/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001684_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001684_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21944_Cosmo Handleiding.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001684_Remote_control_manual_NL.pdf",
        "name": "Remote control manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001684_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001685",
    "sku": "AKTIE-MTS2R-0912-SET",
    "name": "Tosot COSMO Multi split airco Inverter 0912 R32 1x2,5 kW en 1x3,5 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De Tosot COSMO Multi Split Airco Inverter 0912 R32 met 2 binnenunits van 1x 2,5 kW en 1x 3,5 kW is een krachtige en efficiënte oplossing voor klimaatregeling in zakelijke en particuliere ruimtes. Dit systeem maakt gebruik van het milieuvriendelijke R32 koelmiddel en biedt zowel koeling als verwarming, perfect voor verschillende seizoenen. Met de geavanceerde invertertechnologie en stille werking is deze airco ideaal voor kantoren, werkruimtes en woonomgevingen, waarbij energiezuinigheid centraal staat.\n\nDe Tosot COSMO Multi Split Airco is geschikt voor middelgrote tot grote ruimtes zoals kantoren, winkels en vergaderzalen. Dankzij de mogelijkheid om twee ruimtes onafhankelijk van elkaar te bedienen, biedt dit systeem maximale flexibiliteit en comfort in uiteenlopende toepassingen.\n\nDe installatie van deze multi split airco is eenvoudig dankzij de meegeleverde installatiekit. De set komt met uitgebreide technische ondersteuning en een garantie van 3 jaar, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van het product.\n\nDit systeem blinkt uit door zijn combinatie van energie-efficiëntie, stille werking en het gebruik van het milieuvriendelijke R32 koelmiddel. Met de invertertechnologie, het energielabel A++, en de lage onderhoudsbehoefte, is de Tosot COSMO Multi Split Airco een betrouwbare en kosteneffectieve keuze voor zowel zakelijke als particuliere gebruikers die op zoek zijn naar duurzame klimaatsystemen.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 1x3.5 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001685_Tosot_Pular_Airco_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001685_Tosot_Pular_Airco_main.webp",
        "type": "main",
        "filename": "81001685_Tosot_Pular_Airco_main.webp"
      },
      {
        "path": "/images/airco-products/81001685_81001685_energy.webp",
        "type": "energy",
        "filename": "81001685_81001685_energy.webp"
      },
      {
        "path": "/images/airco-products/81001685_energy.webp",
        "type": "energy",
        "filename": "81001685_energy.webp"
      },
      {
        "path": "/images/airco-products/81001685_Tosot_Pular_Airco_other2-2.webp",
        "type": "other",
        "filename": "81001685_Tosot_Pular_Airco_other2-2.webp"
      },
      {
        "path": "/images/airco-products/81001685_Tosot_Pular_Airco_other3.webp",
        "type": "other",
        "filename": "81001685_Tosot_Pular_Airco_other3.webp"
      },
      {
        "path": "/images/airco-products/81001685_Tosot_Pular_Airco_other4.webp",
        "type": "other",
        "filename": "81001685_Tosot_Pular_Airco_other4.webp"
      },
      {
        "path": "/images/airco-products/81001685_Tosot_Pular_Airco_other5.webp",
        "type": "other",
        "filename": "81001685_Tosot_Pular_Airco_other5.webp"
      },
      {
        "path": "/images/airco-products/81001685_Dimensions_v2.webp",
        "type": "other",
        "filename": "81001685_Dimensions_v2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-cosmo-multi-split-airco-inverter-0912-r32-1x25-kw-en-1x35-kw-set/29448/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001685_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001685_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001685_Manual_NL.pdf",
        "name": "Manual remote control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001685_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21944_Cosmo Handleiding.pdf",
        "name": "Manual NL"
      }
    ]
  },
  {
    "id": "81001692",
    "sku": "AKTIE-MTS4R-090909P-SET",
    "name": "Tosot PULAR Triple split airco Inverter 090909P R32 3x2,5 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De TOSOT MTS4R-090909 Pular Triple Inverter Set is een ideale oplossing voor wie op zoek is naar een efficiënte en flexibele manier om het binnenklimaat in drie verschillende ruimtes te beheersen. Deze set wordt aangedreven door de krachtige TOSOT BY GREE MTS4R-28HDI 4-Split R32 Buitenunit, die bekend staat om zijn hoge energie-efficiëntie en betrouwbare prestaties. Met een SEER van 7,2 en een SCOP van 4,2 biedt deze buitenunit een zuinige werking die zowel kostenbesparend als milieuvriendelijk is. De unit is geclassificeerd met energielabel A++ voor koeling en A+ voor verwarming, wat een teken is van de geavanceerde technologie die zorgt voor een comfortabele en duurzame omgeving.\n\nDe TOSOT MTS4R-28HDI buitenunit is ideaal voor zowel residentiële als commerciële toepassingen waar het beheer van meerdere kamers vereist is. Deze unit kan maximaal vier binnenunits bedienen, wat flexibiliteit biedt in het verwarmen en koelen van verschillende ruimtes.\n\nDe TOSOT MTS4R-090909 Pular Triple Inverter Set met de MTS4R-28HDI 4-Split R32 Buitenunit combineert veelzijdigheid, energie-efficiëntie en krachtige prestaties in één pakket. De SEER van 7,2 en SCOP van 4,2 garanderen een zuinige werking die uw energiekosten verlaagt en bijdraagt aan een milieuvriendelijke keuze. De mogelijkheid om vier binnenunits aan te sluiten maakt deze set ideaal voor grotere woningen of kantoren, waarbij elke ruimte individueel beheerd kan worden voor maximaal comfort. De PULAR binnenunits bieden daarnaast moderne wifi-bediening, waardoor u altijd en overal controle heeft over het binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3x2.5 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001692_sk17401_81001692_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001692_sk17401_81001692_main.webp",
        "type": "main",
        "filename": "81001692_sk17401_81001692_main.webp"
      },
      {
        "path": "/images/airco-products/81001692_81001690_dimensions.webp",
        "type": "dimensions",
        "filename": "81001692_81001690_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001692_81001690_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001692_81001690_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001692_81001692_energy.webp",
        "type": "energy",
        "filename": "81001692_81001692_energy.webp"
      },
      {
        "path": "/images/airco-products/81001692_energy.webp",
        "type": "energy",
        "filename": "81001692_energy.webp"
      },
      {
        "path": "/images/airco-products/81001692_81001692_other1.webp",
        "type": "other",
        "filename": "81001692_81001692_other1.webp"
      },
      {
        "path": "/images/airco-products/81001692_81001692_other2.webp",
        "type": "other",
        "filename": "81001692_81001692_other2.webp"
      },
      {
        "path": "/images/airco-products/81001692_81001692_other3.webp",
        "type": "other",
        "filename": "81001692_81001692_other3.webp"
      },
      {
        "path": "/images/airco-products/81001692_other1.webp",
        "type": "other",
        "filename": "81001692_other1.webp"
      },
      {
        "path": "/images/airco-products/81001692_other2.webp",
        "type": "other",
        "filename": "81001692_other2.webp"
      },
      {
        "path": "/images/airco-products/81001692_other3.webp",
        "type": "other",
        "filename": "81001692_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-triple-split-airco-inverter-090909p-r32-3x25-kw-set/29440/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001692_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001692_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001692_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001692_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001693",
    "sku": "AKTIE-MTS4R-090912P-SET",
    "name": "Tosot PULAR Triple split airco Inverter 090912P R32 2x2,5 + 1x3,2 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "3.2",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De TOSOT MTS4R-090912 Pular Triple Inverter Set biedt een efficiënte en flexibele oplossing voor het koelen en verwarmen van meerdere ruimtes tegelijkertijd. De set wordt aangestuurd door de krachtige TOSOT BY GREE MTS4R-28HDI 4-Split R32 Buitenunit, een unit die bekend staat om zijn hoge prestaties en energiezuinigheid. Met een SEER van 7,2 en een SCOP van 4,2, levert deze buitenunit indru kWekkende energieprestaties die resulteren in lagere energiekosten en een comfortabel binnenklimaat. De unit heeft een energielabel A++ voor koeling en A+ voor verwarming, wat de efficiëntie en duurzaamheid van het systeem onderstreept.\n\nDe TOSOT MTS4R-28HDI buitenunit is ideaal voor huishoudens en kantoren waar meerdere kamers tegelijkertijd beheerd moeten worden. Dankzij de mogelijkheid om maximaal vier binnenunits aan te sluiten, biedt deze set flexibiliteit in het beheren van het binnenklimaat van verschillende ruimtes.\n\nDe TOSOT MTS4R-090912 Pular Triple Inverter Set met de MTS4R-28HDI 4-Split R32 Buitenunit biedt een combinatie van flexibiliteit, energiezuinigheid en krachtige prestaties. De SEER van 7,2 en SCOP van 4,2 zorgen voor betrouwbare prestaties en laag energieverbruik, wat resulteert in een efficiënter en duurzamer gebruik van het systeem. Met de mogelijkheid om vier binnenunits aan te sluiten, is deze set bijzonder geschikt voor grotere woningen of kantoren waar verschillende kamers tegelijkertijd moeten worden beheerd. De meegeleverde PULAR binnenunits zorgen voor een efficiënte en stille werking, ondersteund door moderne wifi-bediening voor maximale flexibiliteit en gebruiksgemak.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW + 1x3.2 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001693_81001693_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001693_81001693_main.webp",
        "type": "main",
        "filename": "81001693_81001693_main.webp"
      },
      {
        "path": "/images/airco-products/81001693_main.webp",
        "type": "main",
        "filename": "81001693_main.webp"
      },
      {
        "path": "/images/airco-products/81001693_81001690_dimensions.webp",
        "type": "dimensions",
        "filename": "81001693_81001690_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001693_81001690_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001693_81001690_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001693_81001692_energy.webp",
        "type": "energy",
        "filename": "81001693_81001692_energy.webp"
      },
      {
        "path": "/images/airco-products/81001693_81001692_other1.webp",
        "type": "other",
        "filename": "81001693_81001692_other1.webp"
      },
      {
        "path": "/images/airco-products/81001693_81001692_other2.webp",
        "type": "other",
        "filename": "81001693_81001692_other2.webp"
      },
      {
        "path": "/images/airco-products/81001693_81001692_other3.webp",
        "type": "other",
        "filename": "81001693_81001692_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-triple-split-airco-inverter-090912p-r32-2x25-1x32-kw-set/29439/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001693_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001693_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001693_Manual.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001693_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001693_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001694",
    "sku": "AKTIE-MTS4R-091212P-SET",
    "name": "Tosot PULAR Triple split airco Inverter 091212P R32 1x2,5 + 2x 3,2 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "3.2",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De TOSOT MTS4R-091212 Pular Triple Inverter Set is een krachtige en efficiënte oplossing voor het regelen van het binnenklimaat in meerdere ruimtes. Het hart van deze set is de TOSOT BY GREE MTS4R-28HDI 4-Split R32 Buitenunit, een veelzijdige en energiezuinige buitenunit die in staat is om tot vier binnenunits tegelijkertijd te bedienen. Met een indru kWekkende SEER van 7,2 en een SCOP van 4,2, biedt deze buitenunit uitstekende energie-efficiëntie, wat resulteert in lagere energiekosten en een comfortabel binnenklimaat. De buitenunit draagt energielabel A++ voor koelen en A+ voor verwarmen, wat aangeeft dat het systeem is ontworpen om zuinig en milieuvriendelijk te werken.\n\nDe TOSOT MTS4R-28HDI buitenunit is perfect voor woningen en kantoren waar meerdere ruimtes tegelijk moeten worden gekoeld of verwarmd. Dankzij de 4-Split functionaliteit kunt u maximaal vier binnenunits aansluiten, wat flexibiliteit biedt in het beheer van het binnenklimaat.\n\nDe TOSOT MTS4R-091212 Pular Triple Inverter Set met de MTS4R-28HDI 4-Split R32 Buitenunit biedt een uitstekende combinatie van flexibiliteit, energiezuinigheid en krachtige prestaties. Met een SEER van 7,2 en een SCOP van 4,2 kunt u vertrouwen op een efficiënt energiebeheer dat zowel kostenbesparend als milieuvriendelijk is. De mogelijkheid om vier binnenunits aan te sluiten maakt dit systeem bijzonder geschikt voor grotere woningen of kantoren waar verschillende kamers tegelijkertijd moeten worden beheerd. Daarnaast zorgen de meegeleverde PULAR binnenunits voor stille en efficiënte temperatuurregeling met moderne wifi-bediening.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 2x3.2 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001694_81001693_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001694_81001693_main.webp",
        "type": "main",
        "filename": "81001694_81001693_main.webp"
      },
      {
        "path": "/images/airco-products/81001694_81001690_dimensions.webp",
        "type": "dimensions",
        "filename": "81001694_81001690_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001694_81001690_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001694_81001690_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001694_81001692_energy.webp",
        "type": "energy",
        "filename": "81001694_81001692_energy.webp"
      },
      {
        "path": "/images/airco-products/81001694_81001692_other1.webp",
        "type": "other",
        "filename": "81001694_81001692_other1.webp"
      },
      {
        "path": "/images/airco-products/81001694_81001692_other2.webp",
        "type": "other",
        "filename": "81001694_81001692_other2.webp"
      },
      {
        "path": "/images/airco-products/81001694_81001692_other3.webp",
        "type": "other",
        "filename": "81001694_81001692_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-triple-split-airco-inverter-091212p-r32-1x25-2x-32-kw-set/29438/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001694_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001694_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001694_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001694_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001694_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001695",
    "sku": "AKTIE-MTS4R-121212P-SET",
    "name": "Tosot PULAR Triple split airco Inverter 121212P R32 3x3,2 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "3.2",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MTS4R-121212 Multisplit Set biedt een robuuste en efficiënte oplossing voor het gelijktijdig koelen en verwarmen van drie afzonderlijke ruimtes. Deze set, die bestaat uit de krachtige buitenunit MTS4R-28HDI-V2 en drie PULAR-GWH12AGB-I-R32 binnenunits, levert uitstekende prestaties voor zowel residentiële als commerciële toepassingen. Met een SEER van 7,2 en een SCOP van 4,2, staat dit systeem garant voor hoge energie-efficiëntie, waardoor het energieverbruik aanzienlijk wordt verlaagd. Deze set is ideaal voor wie een flexibele, betrouwbare en kostenbesparende klimaatoplossing zoekt.\n\nDe MTS4R-121212 Multisplit Set is ideaal voor woningen en commerciële ruimtes waar klimaatbeheersing in meerdere kamers vereist is. Deze set biedt de flexibiliteit om drie afzonderlijke ruimtes onafhankelijk van elkaar te verwarmen of te koelen, wat zorgt voor optimaal comfort in elke ruimte.\n\nDeze multisplit set is eenvoudig te installeren, waarbij drie binnenunits aan één enkele buitenunit worden gekoppeld. Dit ruimtebesparende ontwerp maakt de installatie efficiënter en zorgt ervoor dat het systeem snel operationeel is, waardoor u snel kunt genieten van een comfortabel binnenklimaat.\n\nDe MTS4R-121212 Multisplit Set met de MTS4R-28HDI-V2 buitenunit en drie PULAR-GWH12AGB-I-R32 binnenunits combineert krachtige prestaties met energie-efficiëntie en flexibiliteit. Met een SEER van 7,2 en een SCOP van 4,2 levert dit systeem betrouwbare prestaties voor zowel koeling als verwarming, terwijl het energieverbruik tot een minimum wordt beperkt. Het gebruik van het R32 koelmiddel in de binnenunits onderstreept de focus op duurzaamheid en milieuvriendelijkheid. Deze set is een uitstekende keuze voor iedereen die op zoek is naar een veelzijdige en kostenbesparende oplossing voor het beheer van het binnenklimaat in meerdere ruimtes.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3x3.2 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001695_81001693_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001695_81001693_main.webp",
        "type": "main",
        "filename": "81001695_81001693_main.webp"
      },
      {
        "path": "/images/airco-products/81001695_81001690_dimensions.webp",
        "type": "dimensions",
        "filename": "81001695_81001690_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001695_81001690_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001695_81001690_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001695_81001692_energy.webp",
        "type": "energy",
        "filename": "81001695_81001692_energy.webp"
      },
      {
        "path": "/images/airco-products/81001695_81001692_other1.webp",
        "type": "other",
        "filename": "81001695_81001692_other1.webp"
      },
      {
        "path": "/images/airco-products/81001695_81001692_other2.webp",
        "type": "other",
        "filename": "81001695_81001692_other2.webp"
      },
      {
        "path": "/images/airco-products/81001695_81001692_other3.webp",
        "type": "other",
        "filename": "81001695_81001692_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-pular-triple-split-airco-inverter-121212p-r32-3x32-kw-set/29437/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001695_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001695_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001695_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001695_Manual_EN-2.pdf",
        "name": "Manual EN 2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001695_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001686",
    "sku": "AKTIE-MTS4R-090909-SET",
    "name": "Tosot COSMO Triple split airco Inverter 090909 R32 3x2,5 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De Tosot COSMO Triple Split Airco Inverter 090909 R32 met 3 binnenunits van elk 2,5 kW biedt een flexibele en krachtige oplossing voor klimaatbeheersing in zowel zakelijke als particuliere omgevingen. Dit systeem maakt gebruik van het milieuvriendelijke R32 koelmiddel en biedt uitstekende energie-efficiëntie dankzij de invertertechnologie. Geschikt voor koelen en verwarmen, is deze set perfect voor kantoren, werkruimtes en woonomgevingen. Het systeem zorgt voor stille, efficiënte prestaties, ideaal voor elke ruimte waar comfort en energiebesparing belangrijk zijn.\n\nDe Tosot COSMO Triple Split Airco is perfect geschikt voor middelgrote tot grote ruimtes zoals kantoren, winkels en woonruimtes waar meerdere kamers tegelijk geklimatiseerd moeten worden. Dankzij de drie onafhankelijke binnenunits kunnen verschillende ruimtes individueel worden geregeld, wat zorgt voor maximaal comfort en flexibiliteit.\n\nDe installatie van deze triple split airco is eenvoudig dankzij de meegeleverde installatiekit en gedetailleerde handleiding. Het systeem wordt geleverd met 3 jaar garantie, wat extra zekerheid biedt voor de betrouwbaarheid en duurzaamheid van uw investering. Voor technische ondersteuning en advies kunt u rekenen op de uitstekende klantenservice van Tosot.\n\nDit systeem onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en het gebruik van het milieuvriendelijke R32 koelmiddel. Met de invertertechnologie, een energielabel van A++, en het onderhoudsvriendelijke ontwerp, is de Tosot COSMO Triple Split Airco een kosteneffectieve en betrouwbare keuze voor zakelijke klanten en consumenten die op zoek zijn naar duurzaamheid en efficiëntie. Ideaal voor het beheersen van het binnenklimaat in meerdere ruimtes tegelijk.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3x2.5 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001686_Tosot_Pular_Airco_main2.webp",
    "images": [
      {
        "path": "/images/airco-products/81001686_Tosot_Pular_Airco_main2.webp",
        "type": "main",
        "filename": "81001686_Tosot_Pular_Airco_main2.webp"
      },
      {
        "path": "/images/airco-products/81001686_81001686_energy.webp",
        "type": "energy",
        "filename": "81001686_81001686_energy.webp"
      },
      {
        "path": "/images/airco-products/81001686_energy.webp",
        "type": "energy",
        "filename": "81001686_energy.webp"
      },
      {
        "path": "/images/airco-products/81001686_Tosot_Pular_Airco_other2-2.webp",
        "type": "other",
        "filename": "81001686_Tosot_Pular_Airco_other2-2.webp"
      },
      {
        "path": "/images/airco-products/81001686_Tosot_Pular_Airco_other3.webp",
        "type": "other",
        "filename": "81001686_Tosot_Pular_Airco_other3.webp"
      },
      {
        "path": "/images/airco-products/81001686_Tosot_Pular_Airco_other4.webp",
        "type": "other",
        "filename": "81001686_Tosot_Pular_Airco_other4.webp"
      },
      {
        "path": "/images/airco-products/81001686_Tosot_Pular_Airco_other5.webp",
        "type": "other",
        "filename": "81001686_Tosot_Pular_Airco_other5.webp"
      },
      {
        "path": "/images/airco-products/81001686_Dimensions_v2.webp",
        "type": "other",
        "filename": "81001686_Dimensions_v2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-cosmo-triple-split-airco-inverter-090909-r32-3x25-kw-set/29445/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001686_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001686_Manual2.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21944_Cosmo Handleiding.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001686_Manual_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001686_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001687",
    "sku": "AKTIE-MTS4R-090912-SET",
    "name": "Tosot COSMO Triple split airco Inverter 090912 R32 2x2,5 + 1x3,2 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "3.2",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De Tosot COSMO Triple Split Airco Inverter 090912 R32 is de ideale oplossing voor bedrijven en particulieren die op zoek zijn naar flexibiliteit en efficiëntie in klimaatbeheersing. Dit systeem bestaat uit twee binnenunits van 2,5 kW en één van 3,2 kW, perfect om verschillende ruimtes tegelijk te koelen of te verwarmen. Met het milieuvriendelijke R32 koelmiddel en geavanceerde invertertechnologie biedt deze set een energiezuinige en stille werking, waardoor het perfect is voor kantoren, woonruimtes en andere zakelijke omgevingen.\n\nDe Tosot COSMO Triple Split Airco is geschikt voor uiteenlopende toepassingen, waaronder middelgrote tot grote ruimtes zoals kantoren, winkels, en woonruimtes. Dankzij de verschillende binnenunits kunnen meerdere kamers onafhankelijk van elkaar worden geklimatiseerd, wat zorgt voor maximaal comfort en efficiëntie in elk type ruimte.\n\nDe installatie van dit triple split systeem is eenvoudig en snel dankzij de meegeleverde installatiekit en gedetailleerde handleiding. Met 3 jaar garantie biedt dit systeem zekerheid over de duurzaamheid en betrouwbaarheid van uw investering. Tosot biedt daarnaast uitgebreide technische ondersteuning om ervoor te zorgen dat u altijd kunt rekenen op optimale prestaties van uw airco-installatie.\n\nDe Tosot COSMO Triple Split Airco onderscheidt zich door zijn uitstekende energie-efficiëntie, stille werking en gebruik van het milieuvriendelijke R32 koelmiddel. De combinatie van invertertechnologie, een hoog energielabel en de flexibiliteit om meerdere ruimtes afzonderlijk te koelen of te verwarmen maakt deze airco een topkeuze voor zowel zakelijke klanten als consumenten die op zoek zijn naar een duurzame, betrouwbare oplossing voor klimaatbeheersing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "2x2.5 kW + 1x3.2 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001687_Tosot_Pular_Airco_main2.webp",
    "images": [
      {
        "path": "/images/airco-products/81001687_Tosot_Pular_Airco_main2.webp",
        "type": "main",
        "filename": "81001687_Tosot_Pular_Airco_main2.webp"
      },
      {
        "path": "/images/airco-products/81001687_81001687_energy.webp",
        "type": "energy",
        "filename": "81001687_81001687_energy.webp"
      },
      {
        "path": "/images/airco-products/81001687_energy.webp",
        "type": "energy",
        "filename": "81001687_energy.webp"
      },
      {
        "path": "/images/airco-products/81001687_Tosot_Pular_Airco_other2-2.webp",
        "type": "other",
        "filename": "81001687_Tosot_Pular_Airco_other2-2.webp"
      },
      {
        "path": "/images/airco-products/81001687_Tosot_Pular_Airco_other3.webp",
        "type": "other",
        "filename": "81001687_Tosot_Pular_Airco_other3.webp"
      },
      {
        "path": "/images/airco-products/81001687_Tosot_Pular_Airco_other4.webp",
        "type": "other",
        "filename": "81001687_Tosot_Pular_Airco_other4.webp"
      },
      {
        "path": "/images/airco-products/81001687_Tosot_Pular_Airco_other5.webp",
        "type": "other",
        "filename": "81001687_Tosot_Pular_Airco_other5.webp"
      },
      {
        "path": "/images/airco-products/81001687_Dimensions_v2.webp",
        "type": "other",
        "filename": "81001687_Dimensions_v2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-cosmo-triple-split-airco-inverter-090912-r32-2x25-1x32-kw-set/29443/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001687_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001687_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21944_Cosmo Handleiding.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001687_Manual_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001687_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001688",
    "sku": "AKTIE-MTS4R-091212-SET",
    "name": "Tosot COSMO Triple split airco Inverter 091212 R32 1x2,5 + 2x 3,2 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "3.2",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De Tosot COSMO Triple Split Airco Inverter 091212 R32 biedt een flexibele en krachtige oplossing voor klimaatbeheersing in zowel zakelijke als particuliere omgevingen. Dit systeem bestaat uit één binnenunit van 2,5 kW en twee binnenunits van 3,2 kW, ideaal voor het afzonderlijk koelen en verwarmen van verschillende ruimtes. Dankzij de invertertechnologie en het milieuvriendelijke R32 koelmiddel biedt deze airco set maximale efficiëntie met minimale impact op het milieu, perfect voor kantoren, winkels of woonruimtes.\n\nDe Tosot COSMO Triple Split Airco is perfect geschikt voor middelgrote tot grote ruimtes zoals kantoren, winkels en woonhuizen. Met drie afzonderlijke binnenunits biedt dit systeem flexibiliteit door verschillende ruimtes onafhankelijk van elkaar te koelen of te verwarmen, wat zorgt voor optimaal comfort en energiebeheer in elke ruimte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "1x2.5 kW + 2x3.2 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001688_Tosot_Pular_Airco_main2.webp",
    "images": [
      {
        "path": "/images/airco-products/81001688_Tosot_Pular_Airco_main2.webp",
        "type": "main",
        "filename": "81001688_Tosot_Pular_Airco_main2.webp"
      },
      {
        "path": "/images/airco-products/81001688_81001688_energy.webp",
        "type": "energy",
        "filename": "81001688_81001688_energy.webp"
      },
      {
        "path": "/images/airco-products/81001688_energy.webp",
        "type": "energy",
        "filename": "81001688_energy.webp"
      },
      {
        "path": "/images/airco-products/81001688_Tosot_Pular_Airco_other2-2.webp",
        "type": "other",
        "filename": "81001688_Tosot_Pular_Airco_other2-2.webp"
      },
      {
        "path": "/images/airco-products/81001688_Tosot_Pular_Airco_other3.webp",
        "type": "other",
        "filename": "81001688_Tosot_Pular_Airco_other3.webp"
      },
      {
        "path": "/images/airco-products/81001688_Tosot_Pular_Airco_other4.webp",
        "type": "other",
        "filename": "81001688_Tosot_Pular_Airco_other4.webp"
      },
      {
        "path": "/images/airco-products/81001688_Tosot_Pular_Airco_other5.webp",
        "type": "other",
        "filename": "81001688_Tosot_Pular_Airco_other5.webp"
      },
      {
        "path": "/images/airco-products/81001688_Dimensions_v2.webp",
        "type": "other",
        "filename": "81001688_Dimensions_v2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-cosmo-triple-split-airco-inverter-091212-r32-1x25-2x-32-kw-set/29444/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001688_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001688_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21944_Cosmo Handleiding.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001688_Remote_Control_Manual_NL.pdf",
        "name": "Remote Control Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001688_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001689",
    "sku": "AKTIE-MTS4R-121212-SET",
    "name": "Tosot COSMO Triple split airco Inverter 121212 R32 3x3,2 kW set",
    "brand": "Tosot",
    "type": "multi-split",
    "category": "Tosot Multi-split",
    "capacity": "3.2",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De Tosot COSMO Triple Split Airco Inverter 121212 R32 is een krachtige en flexibele oplossing voor klimaatregeling in zowel zakelijke als particuliere omgevingen. Met drie binnenunits van elk 3,2 kW biedt dit systeem optimale koeling en verwarming voor verschillende ruimtes tegelijk. Dankzij de invertertechnologie en het gebruik van het milieuvriendelijke R32 koelmiddel combineert dit systeem energiezuinigheid met uitstekende prestaties, ideaal voor kantoren, winkels en woonruimtes.\n\nDe Tosot COSMO Triple Split Airco is ideaal voor middelgrote tot grote ruimtes, zoals kantoren, winkels en woonruimtes, waar meerdere kamers tegelijkertijd gekoeld of verwarmd moeten worden. De drie binnenunits kunnen onafhankelijk worden bediend, wat maximale flexibiliteit en comfort biedt voor uiteenlopende toepassingen.\n\nDe installatie van dit systeem is eenvoudig en wordt ondersteund door een volledige installatiekit en handleiding. De set wordt geleverd met een garantie van 3 jaar, wat zorgt voor extra zekerheid en duurzaamheid. Voor technische ondersteuning en advies staat de uitstekende klantenservice van Tosot altijd klaar.\n\nDit systeem onderscheidt zich door zijn uitstekende energie-efficiëntie, stille werking en het gebruik van het milieuvriendelijke R32 koelmiddel. De invertertechnologie en het hoge energielabel A++ maken deze airco set een betrouwbare, kosteneffectieve en duurzame oplossing voor zakelijke en particuliere gebruikers. Met drie krachtige binnenunits biedt het systeem flexibiliteit om verschillende ruimtes individueel te koelen of te verwarmen.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "535",
      "Werkingsprincipe": "Koelen en verwarmen",
      "Type koudemiddel": "R32",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Type expansie": "Buiten",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Capaciteit": "3x3.2 kW",
      "Model (binnenunit)": "Wand (hoog)"
    },
    "image": "/images/airco-products/81001689_Tosot_Pular_Airco_main2.webp",
    "images": [
      {
        "path": "/images/airco-products/81001689_Tosot_Pular_Airco_main2.webp",
        "type": "main",
        "filename": "81001689_Tosot_Pular_Airco_main2.webp"
      },
      {
        "path": "/images/airco-products/81001689_81001689_energy.webp",
        "type": "energy",
        "filename": "81001689_81001689_energy.webp"
      },
      {
        "path": "/images/airco-products/81001689_energy.webp",
        "type": "energy",
        "filename": "81001689_energy.webp"
      },
      {
        "path": "/images/airco-products/81001689_Tosot_Pular_Airco_other2-2.webp",
        "type": "other",
        "filename": "81001689_Tosot_Pular_Airco_other2-2.webp"
      },
      {
        "path": "/images/airco-products/81001689_Tosot_Pular_Airco_other3.webp",
        "type": "other",
        "filename": "81001689_Tosot_Pular_Airco_other3.webp"
      },
      {
        "path": "/images/airco-products/81001689_Tosot_Pular_Airco_other4.webp",
        "type": "other",
        "filename": "81001689_Tosot_Pular_Airco_other4.webp"
      },
      {
        "path": "/images/airco-products/81001689_Tosot_Pular_Airco_other5.webp",
        "type": "other",
        "filename": "81001689_Tosot_Pular_Airco_other5.webp"
      },
      {
        "path": "/images/airco-products/81001689_Dimensions_v2.webp",
        "type": "other",
        "filename": "81001689_Dimensions_v2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-cosmo-triple-split-airco-inverter-121212-r32-3x32-kw-set/29442/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001689_Manual_EN.pdf",
        "name": "Manual EN"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/sk21944_Cosmo Handleiding.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001689_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001689_Manual_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001689_Technical_document.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002081",
    "sku": "MMD2R-0909I",
    "name": "MaxiCool INFINI Duo split airco R32 2x2,5 kW (wifi) set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MaxiCool INFINI Duo Split Airco R32 2x2,5 kW (wifi) Set biedt een krachtige en efficiënte klimaatoplossing met een gecombineerde koelcapaciteit van 5 kW, verdeeld over twee binnenunits van elk 2,5 kW. Deze airco-set maakt gebruik van het milieuvriendelijke R32 koelmiddel en beschikt over geavanceerde Inverter-technologie voor maximale energie-efficiëntie en lage operationele kosten. Met een geluidsniveau van slechts 20 dB(A) voor de binnenunits en 54 dB(A) voor de buitenunit, biedt deze set een stille werking zonder in te boeten op prestaties.\n\nDe MaxiCool INFINI Duo Split Airco is bijzonder geschikt voor toepassingen in middelgrote tot grote ruimtes, zoals kantoorruimtes, commerciële gebouwen en grote woonruimtes. De set biedt flexibele en efficiënte koeling en verwarming, waardoor het ideaal is voor het creëren van een comfortabel binnenklimaat in verschillende omgevingen.\n\nDeze Duo split airco set is ontworpen voor eenvoudige installatie, met een complete installatiekit en een gedetailleerde handleiding inbegrepen. Dit bespaart tijd en kosten bij de installatie. MaxiCool biedt een garantie van 3 jaar op de INFINI, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van MaxiCool.\n\nDe MaxiCool INFINI Duo Split Airco onderscheidt zich door zijn hoge energie-efficiëntie, stille werking, en geavanceerde technologie. Het milieuvriendelijke R32 koelmiddel, het A++ energielabel, en de wifi-connectiviteit maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 20 dB(A) voor de binnenunits, en de onderhoudsvriendelijke eigenschappen maken deze airco tot een kosteneffectieve en betrouwbare oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Capaciteit": "2x2.5 kW"
    },
    "image": "/images/airco-products/81002081_81002081_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002081_81002081_main.webp",
        "type": "main",
        "filename": "81002081_81002081_main.webp"
      },
      {
        "path": "/images/airco-products/81002081_main.webp",
        "type": "main",
        "filename": "81002081_main.webp"
      },
      {
        "path": "/images/airco-products/81002081_81002081_dimensions.webp",
        "type": "dimensions",
        "filename": "81002081_81002081_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002081_dimensions.webp",
        "type": "dimensions",
        "filename": "81002081_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81002081_81002081_other1.webp",
        "type": "other",
        "filename": "81002081_81002081_other1.webp"
      },
      {
        "path": "/images/airco-products/81002081_81002081_other2.webp",
        "type": "other",
        "filename": "81002081_81002081_other2.webp"
      },
      {
        "path": "/images/airco-products/81002081_81002081_other3.webp",
        "type": "other",
        "filename": "81002081_81002081_other3.webp"
      },
      {
        "path": "/images/airco-products/81002081_other1.webp",
        "type": "other",
        "filename": "81002081_other1.webp"
      },
      {
        "path": "/images/airco-products/81002081_other2.webp",
        "type": "other",
        "filename": "81002081_other2.webp"
      },
      {
        "path": "/images/airco-products/81002081_other3.webp",
        "type": "other",
        "filename": "81002081_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-duo-split-airco-r32-2x25-kw-wifi-set/30177/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002081_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81002081_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81002082",
    "sku": "MMD2R-0912I",
    "name": "MaxiCool INFINI Duo split airco R32 1x2,5 kW + 1x3,5 kW (wifi) set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MaxiCool INFINI Duo Split Airco R32 1x2,5 kW + 1x3,5 kW (wifi) Set biedt een flexibele en efficiënte klimaatoplossing voor diverse toepassingen. Deze set bestaat uit een binnenunit van 2,5 kW en een binnenunit van 3,5 kW, beide uitgerust met wifi-functionaliteit voor gemakkelijke bediening op afstand. Met een energie-efficiëntie van A++ en een stille werking met een geluidsniveau van slechts 20 dB(A) voor de binnenunits en 54 dB(A) voor de buitenunit, biedt deze set betrouwbare prestaties en een laag energieverbruik.\n\nDe MaxiCool INFINI Duo Split Airco is ideaal voor gebruik in middelgrote tot grote ruimtes, zoals commerciële kantoren, grotere woonruimtes en vergaderruimtes. De combinatie van een 2,5 kW en een 3,5 kW binnenunit biedt flexibele en efficiënte klimaatregeling, waardoor het een uitstekende keuze is voor het creëren van een aangenaam binnenklimaat in diverse toepassingen.\n\nDeze Duo split airco set is ontworpen voor eenvoudige installatie met een complete installatiekit en een gedetailleerde handleiding inbegrepen. Dit zorgt voor een snelle en probleemloze installatie. MaxiCool biedt een garantie van 3 jaar op de INFINI, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van MaxiCool.\n\nDe MaxiCool INFINI Duo Split Airco biedt hoge energie-efficiëntie, stille werking en geavanceerde technologie. Het gebruik van het milieuvriendelijke R32 koelmiddel, het A++ energielabel, en de wifi-connectiviteit maken deze set een topkeuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 20 dB(A) voor de binnenunits, en de onderhoudsvriendelijke eigenschappen maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Capaciteit": "1x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81002082_81002081_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002082_81002081_main.webp",
        "type": "main",
        "filename": "81002082_81002081_main.webp"
      },
      {
        "path": "/images/airco-products/81002082_81002082_other1.webp",
        "type": "other",
        "filename": "81002082_81002082_other1.webp"
      },
      {
        "path": "/images/airco-products/81002082_81002082_other2.webp",
        "type": "other",
        "filename": "81002082_81002082_other2.webp"
      },
      {
        "path": "/images/airco-products/81002082_81002082_other3.webp",
        "type": "other",
        "filename": "81002082_81002082_other3.webp"
      },
      {
        "path": "/images/airco-products/81002082_81002082_other4.webp",
        "type": "other",
        "filename": "81002082_81002082_other4.webp"
      },
      {
        "path": "/images/airco-products/81002082_other1.webp",
        "type": "other",
        "filename": "81002082_other1.webp"
      },
      {
        "path": "/images/airco-products/81002082_other2.webp",
        "type": "other",
        "filename": "81002082_other2.webp"
      },
      {
        "path": "/images/airco-products/81002082_other3.webp",
        "type": "other",
        "filename": "81002082_other3.webp"
      },
      {
        "path": "/images/airco-products/81002082_other4.webp",
        "type": "other",
        "filename": "81002082_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-duo-split-airco-r32-1x25-kw-1x35-kw-wifi-set/30178/",
    "documents": []
  },
  {
    "id": "81002083",
    "sku": "MMD3R-090909I",
    "name": "MaxiCool INFINI Triple split airco R32 3x2,5 kW (wifi) set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MaxiCool INFINI Triple Split Airco R32 3x2,5 kW (wifi) Set is een geavanceerde airconditioningsoplossing ontworpen voor het efficiënt koelen en verwarmen van meerdere ruimtes. Deze set bestaat uit drie binnenunits van elk 2,5 kW, gekoppeld aan één buitendeel, en biedt uitstekende prestaties met een laag energieverbruik. Het gebruik van het milieuvriendelijke R32 koelmiddel, gecombineerd met een energie-efficiëntie van A++, zorgt voor een duurzame en kostenbesparende werking. Het geluidsniveau van de binnenunits is slechts 20 dB(A), terwijl de buitenunit 58 dB(A) produceert.\n\nDe MaxiCool INFINI Triple Split Airco is ideaal voor middelgrote tot grote commerciële ruimtes of woningen met meerdere kamers. Het biedt flexibele koeling en verwarming voor drie aparte zones, waardoor het perfect is voor kantoren, grotere woonruimtes, en andere toepassingen waar gelijktijdige klimaatregeling in meerdere ruimtes gewenst is.\n\nDeze triple split airco set is ontworpen voor eenvoudige installatie. De set wordt geleverd met een complete installatiekit en een gedetailleerde handleiding voor een snelle en probleemloze installatie. MaxiCool biedt een garantie van 3 jaar op de INFINI set, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van uw investering. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van MaxiCool.\n\nDe MaxiCool INFINI Triple Split Airco biedt superieure energie-efficiëntie, stille werking en geavanceerde technologie. De combinatie van het milieuvriendelijke R32 koelmiddel, het A++ energielabel, en de wifi-connectiviteit maken deze set een uitstekende keuze voor zowel zakelijke als particuliere toepassingen. De lange levensduur, het lage geluidsniveau van 20 dB(A) voor de binnenunits, en de onderhoudsvriendelijke eigenschappen maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elke klimaatbehoefte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Capaciteit": "3x2.5 kW"
    },
    "image": "/images/airco-products/81002083_81002083_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002083_81002083_main.webp",
        "type": "main",
        "filename": "81002083_81002083_main.webp"
      },
      {
        "path": "/images/airco-products/81002083_main.webp",
        "type": "main",
        "filename": "81002083_main.webp"
      },
      {
        "path": "/images/airco-products/81002083_81002082_other2.webp",
        "type": "other",
        "filename": "81002083_81002082_other2.webp"
      },
      {
        "path": "/images/airco-products/81002083_81002082_other4.webp",
        "type": "other",
        "filename": "81002083_81002082_other4.webp"
      },
      {
        "path": "/images/airco-products/81002083_81002083_other1.webp",
        "type": "other",
        "filename": "81002083_81002083_other1.webp"
      },
      {
        "path": "/images/airco-products/81002083_81002083_other3.webp",
        "type": "other",
        "filename": "81002083_81002083_other3.webp"
      },
      {
        "path": "/images/airco-products/81002083_other1.webp",
        "type": "other",
        "filename": "81002083_other1.webp"
      },
      {
        "path": "/images/airco-products/81002083_other3.webp",
        "type": "other",
        "filename": "81002083_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-triple-split-airco-r32-3x25-kw-wifi-set/30179/",
    "documents": []
  },
  {
    "id": "81002084",
    "sku": "MMD3R-090912I",
    "name": "MaxiCool INFINI Triple split airco R32 2x2,5 kW + 1x3,5 kW (wifi) set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MaxiCool INFINI Triple Split Airco R32 2x2,5 kW + 1x3,5 kW (wifi) Set biedt een flexibele en krachtige oplossing voor het koelen en verwarmen van meerdere ruimtes. Deze set bestaat uit twee binnenunits van 2,5 kW en één unit van 3,5 kW, allemaal verbonden met één buitendeel. Dankzij het energiezuinige R32 koelmiddel en het energielabel A++ levert deze airco uitstekende prestaties met een lager energieverbruik. De binnenunits opereren stil met een geluidsniveau van slechts 20 dB(A), terwijl de buitenunit een geluidsniveau van 58 dB(A) heeft.\n\nDe MaxiCool INFINI Triple Split Airco is ideaal voor commerciële en residentiële toepassingen waar meerdere ruimtes gelijktijdig gekoeld of verwarmd moeten worden. Perfect voor middelgrote tot grote kantoren, woonruimtes en andere instellingen waar een flexibele klimaatregeling vereist is.\n\nDeze triple split airco set is ontworpen voor eenvoudige installatie. De set wordt geleverd met een uitgebreide installatiekit en een gedetailleerde handleiding voor een probleemloze installatie. MaxiCool biedt een garantie van 3 jaar op de INFINI set, wat zorgt voor extra zekerheid en betrouwbaarheid. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van MaxiCool.\n\nDe MaxiCool INFINI Triple Split Airco onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en geavanceerde technologie. Het gebruik van het milieuvriendelijke R32 koelmiddel, het A++ energielabel, en de wifi-connectiviteit maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 20 dB(A) voor de binnenunits, en de onderhoudsvriendelijke eigenschappen maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elke klimaatbehoefte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Capaciteit": "2x2.5 kW + 1x3.5 kW"
    },
    "image": "/images/airco-products/81002084_81002083_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002084_81002083_main.webp",
        "type": "main",
        "filename": "81002084_81002083_main.webp"
      },
      {
        "path": "/images/airco-products/81002084_81002082_other2.webp",
        "type": "other",
        "filename": "81002084_81002082_other2.webp"
      },
      {
        "path": "/images/airco-products/81002084_81002084_other1.webp",
        "type": "other",
        "filename": "81002084_81002084_other1.webp"
      },
      {
        "path": "/images/airco-products/81002084_81002084_other2.webp",
        "type": "other",
        "filename": "81002084_81002084_other2.webp"
      },
      {
        "path": "/images/airco-products/81002084_81002084_other4.webp",
        "type": "other",
        "filename": "81002084_81002084_other4.webp"
      },
      {
        "path": "/images/airco-products/81002084_other1.webp",
        "type": "other",
        "filename": "81002084_other1.webp"
      },
      {
        "path": "/images/airco-products/81002084_other2.webp",
        "type": "other",
        "filename": "81002084_other2.webp"
      },
      {
        "path": "/images/airco-products/81002084_other4.webp",
        "type": "other",
        "filename": "81002084_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-triple-split-airco-r32-2x25-kw-1x35-kw-wifi-set/30180/",
    "documents": []
  },
  {
    "id": "81002085",
    "sku": "MMD3R-091212I",
    "name": "MaxiCool INFINI Triple split airco R32 1x2,5 kW + 2x3,5 kW (wifi) set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MaxiCool INFINI Triple Split Airco R32 1x2,5 kW + 2x3,5 kW (wifi) Set is een krachtige en veelzijdige oplossing voor klimaatbeheersing in meerdere ruimtes. Deze set bestaat uit één binnenunit van 2,5 kW en twee binnenunits van 3,5 kW, allemaal aangesloten op één buitendeel. Voorzien van het energiezuinige R32 koelmiddel en met een energielabel van A++, biedt deze airco uitstekende prestaties en lage operationele kosten. De binnenunits opereren stil met een geluidsniveau van slechts 20 dB(A), terwijl de buitenunit 58 dB(A) produceert.\n\nDe MaxiCool INFINI Triple Split Airco is perfect voor commerciële en residentiële toepassingen waar meerdere ruimtes gelijktijdig gekoeld of verwarmd moeten worden. Deze set is ideaal voor middelgrote tot grote kantoren, woonruimtes en andere instellingen waar een flexibele en efficiënte klimaatregeling nodig is.\n\nDeze triple split airco set is ontworpen voor eenvoudige installatie. De set wordt geleverd met een uitgebreide installatiekit en een gedetailleerde handleiding voor een probleemloze installatie. MaxiCool biedt een garantie van 3 jaar op de INFINI set, wat zorgt voor extra zekerheid en betrouwbaarheid. Voor technische ondersteuning en advies kunt u rekenen op de uitgebreide klantenservice van MaxiCool.\n\nDe MaxiCool INFINI Triple Split Airco biedt uitzonderlijke energie-efficiëntie, stille werking en geavanceerde technologie. De keuze voor het milieuvriendelijke R32 koelmiddel, het A++ energielabel, en de wifi-connectiviteit maken het een uitstekende keuze voor zowel zakelijke als particuliere gebruikers. De lange levensduur, het lage geluidsniveau van 20 dB(A) voor de binnenunits, en de onderhoudsvriendelijke eigenschappen maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elke klimaatbehoefte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Capaciteit": "1x2.5 kW + 2x3.5 kW"
    },
    "image": "/images/airco-products/81002085_81002083_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002085_81002083_main.webp",
        "type": "main",
        "filename": "81002085_81002083_main.webp"
      },
      {
        "path": "/images/airco-products/81002085_81002082_other2.webp",
        "type": "other",
        "filename": "81002085_81002082_other2.webp"
      },
      {
        "path": "/images/airco-products/81002085_81002085_other1.webp",
        "type": "other",
        "filename": "81002085_81002085_other1.webp"
      },
      {
        "path": "/images/airco-products/81002085_81002085_other3.webp",
        "type": "other",
        "filename": "81002085_81002085_other3.webp"
      },
      {
        "path": "/images/airco-products/81002085_81002085_other4.webp",
        "type": "other",
        "filename": "81002085_81002085_other4.webp"
      },
      {
        "path": "/images/airco-products/81002085_other1.webp",
        "type": "other",
        "filename": "81002085_other1.webp"
      },
      {
        "path": "/images/airco-products/81002085_other3.webp",
        "type": "other",
        "filename": "81002085_other3.webp"
      },
      {
        "path": "/images/airco-products/81002085_other4.webp",
        "type": "other",
        "filename": "81002085_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-triple-split-airco-r32-1x25-kw-2x35-kw-wifi-set/30181/",
    "documents": []
  },
  {
    "id": "81002086",
    "sku": "MMD3R-121212I",
    "name": "MaxiCool INFINI Triple split airco R32 3x3,5 kW (wifi) set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "3.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MaxiCool INFINI Triple Split Airco R32 3x3,5 kW (wifi) Set biedt een krachtige en flexibele klimaatoplossing voor middelgrote tot grote ruimtes. Deze set omvat drie binnenunits van 3,5 kW, gekoppeld aan één buitendeel. Dankzij het gebruik van het energiezuinige R32 koelmiddel en een energielabel van A++, levert deze airco uitstekende prestaties met minimale impact op het milieu. De binnenunits opereren stil, met een geluidsniveau van slechts 21 dB(A), terwijl de buiteneenheid een geluidsniveau van 58 dB(A) produceert.\n\nDe MaxiCool INFINI Triple Split Airco is ideaal voor commerciële en grotere residentiële toepassingen waar gelijktijdige klimaatbeheersing in meerdere ruimtes noodzakelijk is. Deze set is perfect voor kantoren, winkelruimtes, grote woonruimtes en andere instellingen waar een betrouwbare en efficiënte klimaatregeling gewenst is.\n\nDe installatie van deze triple split airco set is eenvoudig en wordt ondersteund door een complete installatiekit en een gedetailleerde handleiding. MaxiCool biedt een garantie van 3 jaar op de INFINI set, wat garant staat voor een duurzame en betrouwbare werking. Voor technische ondersteuning en advies kunt u rekenen op de professionele klantenservice van MaxiCool.\n\nDe MaxiCool INFINI Triple Split Airco onderscheidt zich door zijn hoge energie-efficiëntie, stille werking en moderne technologie. De keuze voor R32 koelmiddel, het A++ energielabel, en de wifi-connectiviteit maken het een superieure keuze voor zowel zakelijke als particuliere klanten. De lange levensduur, het lage geluidsniveau van 21 dB(A) voor de binnenunits, en de onderhoudsvriendelijke kenmerken maken deze airco tot een betrouwbare en kosteneffectieve oplossing voor elk klimaatbeheersingsbehoefte.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Capaciteit": "3x3.5 kW"
    },
    "image": "/images/airco-products/81002086_81002083_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81002086_81002083_main.webp",
        "type": "main",
        "filename": "81002086_81002083_main.webp"
      },
      {
        "path": "/images/airco-products/81002086_81002082_other4.webp",
        "type": "other",
        "filename": "81002086_81002082_other4.webp"
      },
      {
        "path": "/images/airco-products/81002086_81002086_other1.webp",
        "type": "other",
        "filename": "81002086_81002086_other1.webp"
      },
      {
        "path": "/images/airco-products/81002086_81002086_other2.webp",
        "type": "other",
        "filename": "81002086_81002086_other2.webp"
      },
      {
        "path": "/images/airco-products/81002086_81002086_other3.webp",
        "type": "other",
        "filename": "81002086_81002086_other3.webp"
      },
      {
        "path": "/images/airco-products/81002086_other1.webp",
        "type": "other",
        "filename": "81002086_other1.webp"
      },
      {
        "path": "/images/airco-products/81002086_other2.webp",
        "type": "other",
        "filename": "81002086_other2.webp"
      },
      {
        "path": "/images/airco-products/81002086_other3.webp",
        "type": "other",
        "filename": "81002086_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-infini-triple-split-airco-r32-3x35-kw-wifi-set/30182/",
    "documents": []
  },
  {
    "id": "81001666",
    "sku": "MMD2R-0909A",
    "name": "MaxiCool AURORA Multi split airco R32 2x2,5 kW set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MMD2R-0909 R32 Aurora Duo voordeelset biedt een slimme en efficiënte oplossing voor het beheren van het klimaat in twee verschillende ruimtes. Deze set bevat twee binnenunits van elk 2,5 kW, waardoor hij perfect is voor het onafhankelijk koelen of verwarmen van twee kamers binnen uw woning of kantoor. Dankzij de geavanceerde invertertechnologie en ingebouwde WiFi-functionaliteit kunt u de temperatuur in elke ruimte gemakkelijk bedienen via een smartphone-app, waardoor u altijd het gewenste comfortniveau kunt bereiken. Met een SEER van 6,3 W/W en een SCOP van 5,1 W/W levert deze set uitstekende prestaties, ongeacht het seizoen. Het energielabel A++ onderstreept de efficiëntie van dit systeem, terwijl het minimale geluidsniveau van 20 dB zorgt voor een stille werking die geschikt is voor elke omgeving.\n\nDe MMD2R-0909 Aurora Duo voordeelset is ideaal voor het effectief koelen en verwarmen van twee afzonderlijke ruimtes. Deze set is geschikt voor kamers met een gezamenlijke oppervlakte van ongeveer 50 m², waardoor het een flexibele oplossing biedt voor verschillende woon- of werkomgevingen.\n\nDe installatie van deze set is eenvoudig en probleemloos, met alle benodigde onderdelen en een duidelijke handleiding inbegrepen. Dit systeem is ontworpen om snel in gebruik te nemen, zodat u direct kunt genieten van een comfortabel binnenklimaat. Bovendien wordt de set geleverd met een garantie van 3 jaar, wat extra gemoedsrust biedt met betrekking tot de duurzaamheid en betrouwbaarheid.\n\nDe MMD2R-0909 Aurora Duo voordeelset combineert energie-efficiëntie, gebruiksgemak en stille werking in een compleet pakket. Met de WiFi-functionaliteit kunt u de temperatuur in twee kamers gemakkelijk regelen, terwijl de SEER- en SCOP-waarden zorgen voor consistente prestaties, ongeacht het seizoen. Het systeem werkt stil genoeg voor gebruik in zowel woon- als werkruimtes en maakt gebruik van het milieuvriendelijke R32 koelmiddel. Deze set biedt een flexibele en kosteneffectieve oplossing voor een optimaal binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": "6.3",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.2 kg",
      "Global warming potential (GWP)": "844",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "304 kWh",
      "Opgenomen vermogen bij koelen (min)": "0.69 kW",
      "Opgenomen vermogen bij koelen (max)": "2 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.6 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.78 kW",
      "Verwarmingscapaciteit totaal (min)": "2.4 kW",
      "Verwarmingscapaciteit totaal (max)": "5.74 kW",
      "Koelcapaciteit totaal (min)": "2.28 kW",
      "Koelcapaciteit totaal (max)": "5.72 kW",
      "Aantal koelcircuits (compressoren)": "2",
      "Afzekering apparaat": "16 A",
      "SEER (koeling)": "6.3",
      "Energie-efficiëntieklasse koelen": "A++",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Type expansie": "Buiten",
      "Min. leidinglengte per circuit": "3 m",
      "Max. leidinglengte per circuit": "25 m",
      "Max. leidinglengte totaal": "40 m",
      "Max. hoogteverschil": "15 m",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "2x2.5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001666_81001666_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001666_81001666_main.webp",
        "type": "main",
        "filename": "81001666_81001666_main.webp"
      },
      {
        "path": "/images/airco-products/81001666_main.webp",
        "type": "main",
        "filename": "81001666_main.webp"
      },
      {
        "path": "/images/airco-products/81001666_81001666_dimensions.webp",
        "type": "dimensions",
        "filename": "81001666_81001666_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001666_81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001666_81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001666_dimensions.webp",
        "type": "dimensions",
        "filename": "81001666_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001666_81001666_energy.webp",
        "type": "energy",
        "filename": "81001666_81001666_energy.webp"
      },
      {
        "path": "/images/airco-products/81001666_energy.webp",
        "type": "energy",
        "filename": "81001666_energy.webp"
      },
      {
        "path": "/images/airco-products/81001666_81001666_other1.webp",
        "type": "other",
        "filename": "81001666_81001666_other1.webp"
      },
      {
        "path": "/images/airco-products/81001666_81001666_other2.webp",
        "type": "other",
        "filename": "81001666_81001666_other2.webp"
      },
      {
        "path": "/images/airco-products/81001666_81001666_other3.webp",
        "type": "other",
        "filename": "81001666_81001666_other3.webp"
      },
      {
        "path": "/images/airco-products/81001666_81001666_other4.webp",
        "type": "other",
        "filename": "81001666_81001666_other4.webp"
      },
      {
        "path": "/images/airco-products/81001666_other1.webp",
        "type": "other",
        "filename": "81001666_other1.webp"
      },
      {
        "path": "/images/airco-products/81001666_other2.webp",
        "type": "other",
        "filename": "81001666_other2.webp"
      },
      {
        "path": "/images/airco-products/81001666_other3.webp",
        "type": "other",
        "filename": "81001666_other3.webp"
      },
      {
        "path": "/images/airco-products/81001666_other4.webp",
        "type": "other",
        "filename": "81001666_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-multi-split-airco-r32-2x25-kw-set/29456/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001666_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001666_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001666_Manual_Remote_Control_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001666_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001666_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001667",
    "sku": "MMD2R-0912A",
    "name": "MaxiCool AURORA Multi split airco R32 1x2,5 kW + 1x3,5 kW set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MMD2R-0912 R32 Aurora Duo voordeelset biedt een efficiënte en flexibele oplossing voor het beheersen van het klimaat in twee verschillende ruimtes. Deze set bevat twee binnenunits: één met een capaciteit van 2,5 kW en één van 3,5 kW, ideaal voor het afzonderlijk koelen of verwarmen van twee kamers. Met behulp van geavanceerde invertertechnologie en ingebouwde WiFi-connectiviteit kunt u de temperatuur in elke ruimte eenvoudig regelen via een smartphone-app, wat zorgt voor maximaal comfort. De set biedt een SEER van 6,3 W/W en een SCOP van 5,1 W/W, wat garant staat voor betrouwbare en energiezuinige prestaties gedurende het hele jaar. Het energielabel A++ benadrukt de zuinige werking, terwijl het minimale geluidsniveau van 20dB(A) ervoor zorgt dat de units stil genoeg zijn voor gebruik in zowel woon- als werkruimtes.\n\nDe MMD2R-0912 Aurora Duo voordeelset is perfect voor woningen en kantoren waar twee aparte ruimtes effectief beheerd moeten worden. Deze set is geschikt voor het gelijktijdig koelen en verwarmen van twee kamers met een gezamenlijke oppervlakte van ongeveer 60 m², waardoor het een flexibele en efficiënte oplossing biedt voor verschillende omgevingen.\n\nDe installatie van deze set is eenvoudig en wordt geleverd met alle benodigde onderdelen en een duidelijke handleiding, zodat de installatie soepel en zonder complicaties kan worden uitgevoerd. Het systeem komt met een garantie van 3 jaar, wat zorgt voor extra zekerheid over de betrouwbaarheid en duurzaamheid.\n\nDe MMD2R-0912 Aurora Duo voordeelset combineert energiezuinige prestaties met gebruiksgemak en stille werking. Dankzij de WiFi-bediening kunt u de temperatuur in beide kamers eenvoudig aanpassen, terwijl de hoge SEER- en SCOP-waarden zorgen voor betrouwbare prestaties het hele jaar door. Bovendien werkt het systeem stil, wat het ideaal maakt voor zowel woon- als werkruimtes. Het gebruik van het milieuvriendelijke R32 koelmiddel en de flexibiliteit van de twee units maken deze set tot een slimme en praktische keuze voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": "6.3",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.2 kg",
      "Global warming potential (GWP)": "844",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "304 kWh",
      "Opgenomen vermogen bij koelen (min)": "0.69 kW",
      "Opgenomen vermogen bij koelen (max)": "2 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.6 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.78 kW",
      "Verwarmingscapaciteit totaal (min)": "2.4 kW",
      "Verwarmingscapaciteit totaal (max)": "5.74 kW",
      "Koelcapaciteit totaal (min)": "2.28 kW",
      "Koelcapaciteit totaal (max)": "5.72 kW",
      "Aantal koelcircuits (compressoren)": "2",
      "Afzekering apparaat": "16 A",
      "SEER (koeling)": "6.3",
      "Energie-efficiëntieklasse koelen": "A++",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Type expansie": "Buiten",
      "Min. leidinglengte per circuit": "3 m",
      "Max. leidinglengte per circuit": "25 m",
      "Max. leidinglengte totaal": "40 m",
      "Max. hoogteverschil": "15 m",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "1x2.5 kW + 1x3.5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001667_81001666_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001667_81001666_main.webp",
        "type": "main",
        "filename": "81001667_81001666_main.webp"
      },
      {
        "path": "/images/airco-products/81001667_81001666_dimensions.webp",
        "type": "dimensions",
        "filename": "81001667_81001666_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001667_81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001667_81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001667_81001666_energy.webp",
        "type": "energy",
        "filename": "81001667_81001666_energy.webp"
      },
      {
        "path": "/images/airco-products/81001667_81001666_other1.webp",
        "type": "other",
        "filename": "81001667_81001666_other1.webp"
      },
      {
        "path": "/images/airco-products/81001667_81001666_other2.webp",
        "type": "other",
        "filename": "81001667_81001666_other2.webp"
      },
      {
        "path": "/images/airco-products/81001667_81001666_other3.webp",
        "type": "other",
        "filename": "81001667_81001666_other3.webp"
      },
      {
        "path": "/images/airco-products/81001667_81001666_other4.webp",
        "type": "other",
        "filename": "81001667_81001666_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-multi-split-airco-r32-1x25-kw-1x35-kw-set/29454/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001667_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001667_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001667_Manual_ Remote_Control_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001667_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001667_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001668",
    "sku": "MMD3R-090909A",
    "name": "MaxiCool AURORA Triple split airco R32 3x2,5 kW set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MMD3R-090909 R32 Aurora Triple voordeelset is een uitstekende oplossing voor het efficiënt beheren van het binnenklimaat in meerdere ruimtes. Deze set bestaat uit drie binnenunits van elk 2,5 kW, waardoor het ideaal is voor het koelen of verwarmen van verschillende kamers binnen een woning of kantoor. Met de geavanceerde invertertechnologie en ingebouwde WiFi-connectiviteit kunt u de temperatuur in elke ruimte eenvoudig en nauwkeurig regelen via een smartphone-app. Dit systeem biedt een SEER van 6,3 W/W en een SCOP van 5,1 W/W, wat zorgt voor betrouwbare prestaties in elk seizoen. Het energielabel A++ benadrukt de zuinige werking van deze set, terwijl het geluidsniveau van minimaal 20 dB(A) ervoor zorgt dat de units stil genoeg zijn voor gebruik in woon- en werkomgevingen.\n\nDe MMD3R-090909 Aurora Triple voordeelset is ideaal voor woningen en kantoren waar meerdere ruimtes afzonderlijk beheerd moeten worden. Deze set is geschikt voor het gelijktijdig koelen en verwarmen van ruimtes met een gezamenlijke oppervlakte van ongeveer 75 m², waardoor het een flexibele oplossing biedt voor verschillende omgevingen.\n\nDe installatie van deze set is eenvoudig en wordt geleverd met alle benodigde onderdelen en een duidelijke handleiding, zodat de installatie soepel en zonder complicaties kan worden uitgevoerd. Het systeem wordt geleverd met een garantie van 3 jaar, wat zorgt voor extra zekerheid over de betrouwbaarheid en duurzaamheid.\n\nDe MMD3R-090909 Aurora Triple voordeelset combineert efficiëntie, gebruiksgemak en stille werking in een complete oplossing. Dankzij de WiFi-bediening kunt u de temperatuur in verschillende kamers gemakkelijk aanpassen, terwijl de hoge SEER- en SCOP-waarden zorgen voor betrouwbare prestaties het hele jaar door. Bovendien werkt het systeem stil, wat het ideaal maakt voor gebruik in zowel woon- als werkruimtes. Het gebruik van het milieuvriendelijke R32 koelmiddel en de flexibiliteit van de drie units maken deze set tot een slimme en praktische keuze voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": "6.3",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.85 kg",
      "Global warming potential (GWP)": "1249",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "453 kWh",
      "Opgenomen vermogen bij koelen (min)": "0.22 kW",
      "Opgenomen vermogen bij koelen (max)": "2.45 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.32 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.9 kW",
      "Verwarmingscapaciteit totaal (min)": "2.4 kW",
      "Verwarmingscapaciteit totaal (max)": "8.21 kW",
      "Koelcapaciteit totaal (min)": "3.58 kW",
      "Koelcapaciteit totaal (max)": "8.21 kW",
      "Aantal koelcircuits (compressoren)": "2",
      "Afzekering apparaat": "20 A",
      "SEER (koeling)": "6.3",
      "Energie-efficiëntieklasse koelen": "A++",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Type expansie": "Buiten",
      "Min. leidinglengte per circuit": "3 m",
      "Max. leidinglengte per circuit": "30 m",
      "Max. leidinglengte totaal": "60 m",
      "Max. hoogteverschil": "15 m",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Capaciteit": "3x2.5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001668_81001668_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001668_81001668_main.webp",
        "type": "main",
        "filename": "81001668_81001668_main.webp"
      },
      {
        "path": "/images/airco-products/81001668_main.webp",
        "type": "main",
        "filename": "81001668_main.webp"
      },
      {
        "path": "/images/airco-products/81001668_81001666_dimensions.webp",
        "type": "dimensions",
        "filename": "81001668_81001666_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001668_81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001668_81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001668_81001668_energy.webp",
        "type": "energy",
        "filename": "81001668_81001668_energy.webp"
      },
      {
        "path": "/images/airco-products/81001668_energy.webp",
        "type": "energy",
        "filename": "81001668_energy.webp"
      },
      {
        "path": "/images/airco-products/81001668_81001668_other1.webp",
        "type": "other",
        "filename": "81001668_81001668_other1.webp"
      },
      {
        "path": "/images/airco-products/81001668_81001668_other2.webp",
        "type": "other",
        "filename": "81001668_81001668_other2.webp"
      },
      {
        "path": "/images/airco-products/81001668_81001668_other3.webp",
        "type": "other",
        "filename": "81001668_81001668_other3.webp"
      },
      {
        "path": "/images/airco-products/81001668_81001668_other4.webp",
        "type": "other",
        "filename": "81001668_81001668_other4.webp"
      },
      {
        "path": "/images/airco-products/81001668_other1.webp",
        "type": "other",
        "filename": "81001668_other1.webp"
      },
      {
        "path": "/images/airco-products/81001668_other2.webp",
        "type": "other",
        "filename": "81001668_other2.webp"
      },
      {
        "path": "/images/airco-products/81001668_other3.webp",
        "type": "other",
        "filename": "81001668_other3.webp"
      },
      {
        "path": "/images/airco-products/81001668_other4.webp",
        "type": "other",
        "filename": "81001668_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-triple-split-airco-r32-3x25-kw-set/29453/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001668_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001668_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001668_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001668_Manual_Manual_Remote_Control_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001668_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001669",
    "sku": "MMD3R-090912A",
    "name": "MaxiCool AURORA Triple split airco R32 2x2,5 + 1x3,5 kW set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "3.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MMD3R-090912 R32 Aurora Triple voordeelset is een veelzijdige airconditioningoplossing die speciaal is samengesteld voor het efficiënte beheer van het klimaat in meerdere ruimtes. Deze set bestaat uit twee binnenunits van 2,5 kW en één van 3,5 kW, wat het ideaal maakt voor het creëren van een aangename temperatuur in verschillende kamers. Dankzij de ingebouwde invertertechnologie en WiFi-bediening kunt u de temperatuur in elke ruimte eenvoudig aanpassen via een smartphone-app. Met een SEER van 6,3 W/W en een SCOP van 5,1 W/W biedt dit systeem betrouwbare prestaties het hele jaar door. Het energielabel A++ benadrukt de energiezuinigheid van de set, terwijl het geluidsniveau van maximaal 20 dB(A) zorgt voor een rustige omgeving.\n\nDe MMD3R-090912 Aurora Triple voordeelset is ideaal voor gebruik in woningen en kantoren, waar meerdere ruimtes gelijktijdig beheerd moeten worden. Deze set is geschikt voor een gezamenlijke oppervlakte van ongeveer 90 m², waardoor u verschillende kamers comfortabel kunt verwarmen of koelen.\n\nDe installatie van deze set is eenvoudig en intuïtief, met alle benodigde onderdelen en een duidelijke handleiding inbegrepen. Dankzij de overzichtelijke installatieprocedure kan het systeem snel in gebruik worden genomen. De set wordt geleverd met een garantie van 3 jaar, wat extra gemoedsrust biedt over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe MMD3R-090912 Aurora Triple voordeelset biedt een combinatie van efficiëntie, gebruiksgemak en flexibiliteit. Met de WiFi-bediening kunt u de temperatuur in verschillende kamers naar wens instellen, terwijl de SEER- en SCOP-waarden zorgen voor consistente prestaties gedurende het hele jaar. Bovendien werkt het systeem stil, wat het geschikt maakt voor zowel woon- als werkruimtes. Het gebruik van het milieuvriendelijke R32 koelmiddel en de veelzijdigheid van de drie units maken deze set tot een praktische en milieubewuste keuze.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": "6.3",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.85 kg",
      "Global warming potential (GWP)": "1249",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "453 kWh",
      "Opgenomen vermogen bij koelen (min)": "0.22 kW",
      "Opgenomen vermogen bij koelen (max)": "2.45 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.32 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.9 kW",
      "Verwarmingscapaciteit totaal (min)": "2.4 kW",
      "Verwarmingscapaciteit totaal (max)": "8.21 kW",
      "Koelcapaciteit totaal (min)": "3.58 kW",
      "Koelcapaciteit totaal (max)": "8.21 kW",
      "Aantal koelcircuits (compressoren)": "2",
      "Afzekering apparaat": "20 A",
      "SEER (koeling)": "6.3",
      "Energie-efficiëntieklasse koelen": "A++",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Type expansie": "Buiten",
      "Min. leidinglengte per circuit": "3 m",
      "Max. leidinglengte per circuit": "30 m",
      "Max. leidinglengte totaal": "60 m",
      "Max. hoogteverschil": "15 m",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "2x2.5 kW + 1x3.5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001669_81001668_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001669_81001668_main.webp",
        "type": "main",
        "filename": "81001669_81001668_main.webp"
      },
      {
        "path": "/images/airco-products/81001669_81001666_dimensions.webp",
        "type": "dimensions",
        "filename": "81001669_81001666_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001669_81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001669_81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001669_81001668_energy.webp",
        "type": "energy",
        "filename": "81001669_81001668_energy.webp"
      },
      {
        "path": "/images/airco-products/81001669_81001668_other1.webp",
        "type": "other",
        "filename": "81001669_81001668_other1.webp"
      },
      {
        "path": "/images/airco-products/81001669_81001668_other2.webp",
        "type": "other",
        "filename": "81001669_81001668_other2.webp"
      },
      {
        "path": "/images/airco-products/81001669_81001668_other3.webp",
        "type": "other",
        "filename": "81001669_81001668_other3.webp"
      },
      {
        "path": "/images/airco-products/81001669_81001668_other4.webp",
        "type": "other",
        "filename": "81001669_81001668_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-triple-split-airco-r32-2x25-1x35-kw-set/29452/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001669_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001669_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001669_Remote_Control_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001669_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001669_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001670",
    "sku": "MMD3R-091212A",
    "name": "MaxiCool AURORA Triple split airco R32 1x2,5 kW + 2x3,5 kW set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "2.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MMD3R-091212 R32 Aurora Triple voordeelset is een complete oplossing voor het effectief koelen en verwarmen van meerdere ruimtes. Deze set bevat drie binnenunits: één van 2,5 kW en twee van 3,5 kW, waardoor verschillende kamers op maat kunnen worden bediend. Dankzij de geïntegreerde invertertechnologie en WiFi-functionaliteit kan de temperatuur eenvoudig worden aangepast via een smartphone-app, wat zorgt voor optimaal comfort en gebruiksgemak. Met een SEER van 6,3 W/W en een SCOP van 5,1 W/W, biedt dit systeem betrouwbare prestaties gedurende het hele jaar. Het energielabel A++ staat garant voor energiezuinigheid, en met een geluidsniveau van 20 dB(A) werken de units stil genoeg voor gebruik in zowel woon- als werkomgevingen.\n\nDeze voordeelset is ideaal voor woningen en kantoren waar meerdere ruimtes efficiënt beheerd moeten worden. De set is geschikt voor een gezamenlijke oppervlakte van ongeveer 100 m², waardoor het mogelijk is om verschillende kamers op een aangename temperatuur te houden.\n\nDe installatie van deze set is eenvoudig en het onderhoud is minimaal. De complete set wordt geleverd met de benodigde onderdelen en een duidelijke handleiding, waardoor het installatieproces soepel verloopt. Met een garantie van 3 jaar bent u verzekerd van een betrouwbaar en duurzaam systeem.\n\nDe MMD3R-091212 Aurora Triple voordeelset combineert efficiëntie, gebruiksgemak en energiezuinigheid in één pakket. De WiFi-functionaliteit maakt het mogelijk om de temperatuur in verschillende ruimtes naar wens aan te passen, terwijl de SEER- en SCOP-waarden zorgen voor consistente prestaties gedurende het jaar. Bovendien is het systeem ontworpen om stil te werken, wat het ideaal maakt voor zowel woon- als werkruimtes. Het gebruik van het R32 koelmiddel en de flexibiliteit van de drie units maken dit systeem tot een praktische en milieuvriendelijke keuze.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": "6.3",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.85 kg",
      "Global warming potential (GWP)": "1249",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "453 kWh",
      "Opgenomen vermogen bij koelen (min)": "0.22 kW",
      "Opgenomen vermogen bij koelen (max)": "2.45 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.32 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.9 kW",
      "Verwarmingscapaciteit totaal (min)": "2.4 kW",
      "Verwarmingscapaciteit totaal (max)": "8.21 kW",
      "Koelcapaciteit totaal (min)": "3.58 kW",
      "Koelcapaciteit totaal (max)": "8.21 kW",
      "Aantal koelcircuits (compressoren)": "2",
      "Afzekering apparaat": "20 A",
      "SEER (koeling)": "6.3",
      "Energie-efficiëntieklasse koelen": "A++",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Type expansie": "Buiten",
      "Min. leidinglengte per circuit": "3 m",
      "Max. leidinglengte per circuit": "30 m",
      "Max. leidinglengte totaal": "60 m",
      "Max. hoogteverschil": "15 m",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "1x2.5 kW + 2x3.5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001670_81001668_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001670_81001668_main.webp",
        "type": "main",
        "filename": "81001670_81001668_main.webp"
      },
      {
        "path": "/images/airco-products/81001670_81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001670_81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001670_81001670_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001670_81001670_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001670_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001670_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001670_81001668_energy.webp",
        "type": "energy",
        "filename": "81001670_81001668_energy.webp"
      },
      {
        "path": "/images/airco-products/81001670_81001668_other1.webp",
        "type": "other",
        "filename": "81001670_81001668_other1.webp"
      },
      {
        "path": "/images/airco-products/81001670_81001668_other2.webp",
        "type": "other",
        "filename": "81001670_81001668_other2.webp"
      },
      {
        "path": "/images/airco-products/81001670_81001668_other3.webp",
        "type": "other",
        "filename": "81001670_81001668_other3.webp"
      },
      {
        "path": "/images/airco-products/81001670_81001668_other4.webp",
        "type": "other",
        "filename": "81001670_81001668_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-triple-split-airco-r32-1x25-kw-2x35-kw-set/29451/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001670_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001670_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001670_Manual_Remote_Control_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001670_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001670_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      }
    ]
  },
  {
    "id": "81001671",
    "sku": "MMD3R-121212A",
    "name": "MaxiCool AURORA Triple split airco R32 3x3,5 kW set",
    "brand": "MaxiCool",
    "type": "multi-split",
    "category": "MaxiCool Multi-split",
    "capacity": "3.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De MMD3R-121212 R32 Aurora Triple voordeelset biedt een complete en efficiënte oplossing voor klimaatbeheersing in middelgrote tot grote ruimtes. Deze set bestaat uit drie binnenunits van elk 3,5 kW, waardoor hij ideaal is voor het koelen of verwarmen van meerdere ruimtes tegelijk. Met geavanceerde invertertechnologie en een geïntegreerde WiFi-functionaliteit, kunt u de temperatuur eenvoudig en flexibel regelen via een smartphone-app. De set heeft een SEER van 6,3 W/W en een SCOP van 5,1 W/W, wat zorgt voor hoge energie-efficiëntie en betrouwbare prestaties gedurende het hele jaar. Het energielabel A++ bevestigt de zuinigheid van deze set, terwijl het maximale geluidsniveau van 20 dB(A) ervoor zorgt dat de units stil genoeg zijn voor zowel woon- als werkomgevingen.\n\nDe MMD3R-121212 Aurora Triple voordeelset is perfect geschikt voor het koelen en verwarmen van meerdere ruimtes tot een gezamenlijke oppervlakte van ongeveer 100 m², zoals woonkamers, kantoren en vergaderruimtes. Het systeem biedt betrouwbare prestaties, wat het ideaal maakt voor gebruik het hele jaar door.\n\nDeze set is ontworpen voor eenvoudige installatie en probleemloos onderhoud. De complete set wordt geleverd met alle benodigde onderdelen, inclusief de binnen- en buitenunits en installatiekit. Dankzij de meegeleverde handleiding kan de installatie snel en efficiënt worden uitgevoerd. De set wordt geleverd met een garantie van 3 jaar, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe MMD3R-121212 Aurora Triple voordeelset onderscheidt zich door zijn combinatie van efficiëntie, geavanceerde technologie en flexibiliteit. Met een SEER van 6,3 en een SCOP van 5,1 biedt deze set uitstekende prestaties, ongeacht het seizoen. De WiFi-functionaliteit, het energielabel A++, en het gebruik van het milieuvriendelijke R32 koelmiddel maken dit systeem tot een uitstekende keuze voor zowel residentiële als commerciële toepassingen. Het lage geluidsniveau van maximaal 20 dB(A) en de veelzijdigheid van drie units maken deze set tot een kosteneffectieve en praktische oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": "6.3",
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "534",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.85 kg",
      "Global warming potential (GWP)": "1249",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Inverter gestuurd": "Ja",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "453 kWh",
      "Opgenomen vermogen bij koelen (min)": "0.22 kW",
      "Opgenomen vermogen bij koelen (max)": "2.45 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.32 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.9 kW",
      "Verwarmingscapaciteit totaal (min)": "2.4 kW",
      "Verwarmingscapaciteit totaal (max)": "8.21 kW",
      "Koelcapaciteit totaal (min)": "3.58 kW",
      "Koelcapaciteit totaal (max)": "8.21 kW",
      "Aantal koelcircuits (compressoren)": "2",
      "Afzekering apparaat": "20 A",
      "SEER (koeling)": "6.3",
      "Energie-efficiëntieklasse koelen": "A++",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "24 °C",
      "Type expansie": "Buiten",
      "Min. leidinglengte per circuit": "3 m",
      "Max. leidinglengte per circuit": "30 m",
      "Max. leidinglengte totaal": "60 m",
      "Max. hoogteverschil": "15 m",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Capaciteit": "3x3.5 kW",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001671_81001668_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001671_81001668_main.webp",
        "type": "main",
        "filename": "81001671_81001668_main.webp"
      },
      {
        "path": "/images/airco-products/81001671_81001666_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001671_81001666_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001671_81001670_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001671_81001670_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001671_81001668_energy.webp",
        "type": "energy",
        "filename": "81001671_81001668_energy.webp"
      },
      {
        "path": "/images/airco-products/81001671_81001668_other1.webp",
        "type": "other",
        "filename": "81001671_81001668_other1.webp"
      },
      {
        "path": "/images/airco-products/81001671_81001668_other2.webp",
        "type": "other",
        "filename": "81001671_81001668_other2.webp"
      },
      {
        "path": "/images/airco-products/81001671_81001668_other3.webp",
        "type": "other",
        "filename": "81001671_81001668_other3.webp"
      },
      {
        "path": "/images/airco-products/81001671_81001668_other4.webp",
        "type": "other",
        "filename": "81001671_81001668_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/maxicool-aurora-triple-split-airco-r32-3x35-kw-set/29450/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001671_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001671_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001671_Manual_Remote_Control_NL.pdf",
        "name": "Manual Remote Control NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001671_Technical_document_NL.pdf",
        "name": "Technical Document NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001671_Manual_NL.pdf",
        "name": "Manual NL"
      }
    ]
  },
  {
    "id": "81001391",
    "sku": "LG-CL09F_Standaard_SET",
    "name": "LG Low static Inverter kanaal airco CL09F-S R32 2,5 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "2.5",
    "coolingCapacity": "3.2",
    "heatingCapacity": "4",
    "description": "De LG Low Static Inverter Binnen- & Buitenunit R32 2,5 kW is een compacte en efficiënte oplossing voor klimaatbeheersing in kleinere residentiële en commerciële ruimtes. Deze unit combineert geavanceerde invertertechnologie met een koelcapaciteit van 2,5 kW, wat resulteert in optimale prestaties met een minimaal energieverbruik. Dankzij het low static ontwerp is deze unit ideaal voor installatie in verlaagde plafonds, waarbij een discrete en strakke afwerking in de ruimte kan worden bewerkstelligd.\n\nDe LG Low Static Inverter 2,5 kW is uitermate geschikt voor kleinere ruimtes tot 30 m², zoals kantoren, slaapkamers, of kleine winkels. De unit zorgt voor betrouwbare koeling in de zomer en effectieve verwarming in de winter, waardoor het een veelzijdige keuze is voor elk seizoen.\n\nOntworpen met gebruiksgemak in gedachten, wordt deze unit geleverd met een complete installatiekit en een gedetailleerde handleiding, wat een snelle en eenvoudige installatie mogelijk maakt. Bovendien biedt LG een garantie van 5 jaar op de unit, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Low Static Inverter 2,5 kW onderscheidt zich door zijn combinatie van efficiëntie, stil gebruik, en compact ontwerp. Met zijn energiezuinige prestaties en milieuvriendelijk R32 koelmiddel is deze unit een uitstekende keuze voor zowel residentiële als lichte commerciële toepassingen. Het ontwerp, gericht op eenvoud in installatie en onderhoud, maakt dit product tot een praktische en kosteneffectieve oplossing voor het creëren van een comfortabel binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "190 x 900 x 460 mm",
      "buitenunit": "770 x 545 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "6.1",
    "scop": null,
    "soundLevel": "35 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1 kg",
      "Global warming potential (GWP)": "675",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Koelcapaciteit (min)": "1.5 kW",
      "Koelcapaciteit (max)": "3.2 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.38 kW",
      "Opgenomen vermogen bij verwarmen (max)": "0.38 kW",
      "Verwarmingscapaciteit (min)": "1.8 kW",
      "Verwarmingscapaciteit (max)": "4 kW",
      "EER (koeling)": "3.8",
      "COP (verwarming)": "4.3",
      "SEER (koeling)": "6.1",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "143 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "190 mm",
      "Breedte binnenunit": "900 mm",
      "Diepte binnenunit": "460 mm",
      "Gewicht binnenunit": "18 kg",
      "Hoogte buitenunit": "770 mm",
      "Breedte buitenunit": "545 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "33.3 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "480 m³/h",
      "Luchtdebiet koelen (max)": "690 m³/h",
      "Luchtdebiet verwarmen (min)": "480 m³/h",
      "Luchtdebiet verwarmen (max)": "690 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "35 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "35 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "55 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.2 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001391_81001385_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001391_81001385_main.webp",
        "type": "main",
        "filename": "81001391_81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001391_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001391_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001391_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001391_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001391_81001391_energy.webp",
        "type": "energy",
        "filename": "81001391_81001391_energy.webp"
      },
      {
        "path": "/images/airco-products/81001391_energy.webp",
        "type": "energy",
        "filename": "81001391_energy.webp"
      },
      {
        "path": "/images/airco-products/81001391_81001363_other2.webp",
        "type": "other",
        "filename": "81001391_81001363_other2.webp"
      },
      {
        "path": "/images/airco-products/81001391_81001363_other3.webp",
        "type": "other",
        "filename": "81001391_81001363_other3.webp"
      },
      {
        "path": "/images/airco-products/81001391_81001385_other2.webp",
        "type": "other",
        "filename": "81001391_81001385_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-low-static-inverter-kanaal-airco-cl09f-s-r32-25-kw-set/29582/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001391_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001391_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001391_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001391_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001391_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001392",
    "sku": "LG-CL12F_Standaard_SET",
    "name": "LG Low static Inverter kanaal airco CL12F-S R32 3,5 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "3.5",
    "coolingCapacity": "4.7",
    "heatingCapacity": "4.9",
    "description": "De LG Low Static Inverter Binnen- & Buitenunit R32 3,5 kW is een compacte en efficiënte oplossing voor klimaatbeheersing in kleinere residentiële en commerciële ruimtes. Deze unit combineert geavanceerde invertertechnologie met een koelcapaciteit van 3,5 kW, wat resulteert in optimale prestaties met een minimaal energieverbruik. Dankzij het low static ontwerp is deze unit ideaal voor installatie in verlaagde plafonds, waarbij een discrete en strakke afwerking in de ruimte kan worden bewerkstelligd.\n\nDe LG Low Static Inverter 3,5 kW is uitermate geschikt voor kleinere ruimtes tot 30 m², zoals kantoren, slaapkamers, of kleine winkels. De unit zorgt voor betrouwbare koeling in de zomer en effectieve verwarming in de winter, waardoor het een veelzijdige keuze is voor elk seizoen.\n\nOntworpen met gebruiksgemak in gedachten, wordt deze unit geleverd met een complete installatiekit en een gedetailleerde handleiding, wat een snelle en eenvoudige installatie mogelijk maakt. Bovendien biedt LG een garantie van 5 jaar op de unit, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Low Static Inverter 3,5 kW onderscheidt zich door zijn combinatie van efficiëntie, stil gebruik, en compact ontwerp. Met zijn energiezuinige prestaties en milieuvriendelijk R32 koelmiddel is deze unit een uitstekende keuze voor zowel residentiële als lichte commerciële toepassingen. Het ontwerp, gericht op eenvoud in installatie en onderhoud, maakt dit product tot een praktische en kosteneffectieve oplossing voor het creëren van een comfortabel binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "190 x 900 x 460 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A+",
    "seer": "5.6",
    "scop": null,
    "soundLevel": "690 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1 kg",
      "Global warming potential (GWP)": "675",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "0.33 kW",
      "Opgenomen vermogen bij koelen (max)": "1.84 kW",
      "Koelcapaciteit (min)": "1.5 kW",
      "Koelcapaciteit (max)": "4.7 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.33 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.63 kW",
      "Verwarmingscapaciteit (min)": "1.8 kW",
      "Verwarmingscapaciteit (max)": "4.9 kW",
      "EER (koeling)": "2.23",
      "COP (verwarming)": "3.71",
      "SEER (koeling)": "5.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "213 kWh",
      "Energie-efficiëntieklasse koelen": "A+",
      "Hoogte binnenunit": "190 mm",
      "Breedte binnenunit": "900 mm",
      "Diepte binnenunit": "460 mm",
      "Gewicht binnenunit": "18 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "33.3 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "3 m³/h",
      "Luchtdebiet koelen (max)": "3 m³/h",
      "Luchtdebiet verwarmen (min)": "480 m³/h",
      "Luchtdebiet verwarmen (max)": "690 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "480 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "690 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "35 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "27 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "35 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "49 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "52 dB(A)",
      "Geluidsniveau buitenunit (bij nachtverlaging op 1m)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001392_81001385_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001392_81001385_main.webp",
        "type": "main",
        "filename": "81001392_81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001392_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001392_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001392_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001392_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001392_81001392_energy.webp",
        "type": "energy",
        "filename": "81001392_81001392_energy.webp"
      },
      {
        "path": "/images/airco-products/81001392_energy.webp",
        "type": "energy",
        "filename": "81001392_energy.webp"
      },
      {
        "path": "/images/airco-products/81001392_81001367_other3.webp",
        "type": "other",
        "filename": "81001392_81001367_other3.webp"
      },
      {
        "path": "/images/airco-products/81001392_81001392_other2.webp",
        "type": "other",
        "filename": "81001392_81001392_other2.webp"
      },
      {
        "path": "/images/airco-products/81001392_81001392_other3.webp",
        "type": "other",
        "filename": "81001392_81001392_other3.webp"
      },
      {
        "path": "/images/airco-products/81001392_other2.webp",
        "type": "other",
        "filename": "81001392_other2.webp"
      },
      {
        "path": "/images/airco-products/81001392_other3.webp",
        "type": "other",
        "filename": "81001392_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-low-static-inverter-kanaal-airco-cl12f-s-r32-35-kw-set/29581/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001392_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001392_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001392_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001392_Technical_document.pdf",
        "name": "Technical Document"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001392_Energy_label.pdf",
        "name": "Energy Label"
      }
    ]
  },
  {
    "id": "81001385",
    "sku": "LG-CL18F_Compact_SET",
    "name": "LG Inverter CL18F-Compact Kanaal airco R32 5,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "5.0",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG CL18F-C R32 5,0 kW Low Static Kanaal Inverter biedt een complete oplossing voor klimaatbeheersing met zowel een binnen- als buitenunit. Dit systeem combineert kracht en energie-efficiëntie met een stille werking, ideaal voor zowel commerciële als residentiële omgevingen. Met een koelcapaciteit van 5,0 kW en een geavanceerde invertertechnologie, levert dit systeem betrouwbare prestaties met minimale energieverliezen. Het low static ontwerp zorgt ervoor dat de ventilatoren stiller werken en minder snel slijten, terwijl het R32-koelmiddel zorgt voor een verbeterde koelcapaciteit en een lagere impact op de ozonlaag. De set wordt compleet geleverd met een bekabelde bediening voor eenvoudige bediening.\n\nDe LG CL18F-C R32 Low Static Kanaal Inverter Binnen- & Buitenunit is geschikt voor middelgrote tot grote ruimtes zoals kantoren, vergaderruimtes en commerciële toepassingen. Met een koelcapaciteit van 5,0 kW biedt dit systeem betrouwbare prestaties, zowel in de zomer als in de winter, en is het geschikt voor het hele jaar door gebruik.\n\nDit systeem heeft een compact ontwerp dat eenvoudig te installeren en te onderhouden is. De buitenunit heeft een gewicht van 44,5 kg en de binnenunit weegt 20,9 kg. Dankzij de meegeleverde bekabelde bediening kan de temperatuur eenvoudig worden geregeld. Met een SEER van 6,1 en een SCOP van 3,9 biedt dit systeem solide energieprestaties, en de garantie van 5 jaar zorgt voor extra zekerheid over de betrouwbaarheid en duurzaamheid.\n\nDe LG CL18F-C R32 Low Static Kanaal Inverter Binnen- & Buitenunit onderscheidt zich door zijn energie-efficiëntie, stille werking en duurzaamheid. Het low static ontwerp vermindert de belasting van de ventilatoren, wat zorgt voor een langere levensduur en minder geluid. Het gebruik van het R32-koelmiddel biedt een hogere koelcapaciteit en een lagere impact op de ozonlaag, terwijl het energielabel A de energiezuinigheid benadrukt. Dit maakt de unit een betrouwbare en efficiënte keuze voor zowel commerciële als residentiële toepassingen.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "525",
      "Energielabel": "A++"
    },
    "image": "/images/airco-products/81001385_81001385_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001385_81001385_main.webp",
        "type": "main",
        "filename": "81001385_81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001385_main.webp",
        "type": "main",
        "filename": "81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001385_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001385_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001385_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001385_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001385_81001385_energy.webp",
        "type": "energy",
        "filename": "81001385_81001385_energy.webp"
      },
      {
        "path": "/images/airco-products/81001385_energy.webp",
        "type": "energy",
        "filename": "81001385_energy.webp"
      },
      {
        "path": "/images/airco-products/81001385_81001363_other2.webp",
        "type": "other",
        "filename": "81001385_81001363_other2.webp"
      },
      {
        "path": "/images/airco-products/81001385_81001363_other3.webp",
        "type": "other",
        "filename": "81001385_81001363_other3.webp"
      },
      {
        "path": "/images/airco-products/81001385_81001385_other2.webp",
        "type": "other",
        "filename": "81001385_81001385_other2.webp"
      },
      {
        "path": "/images/airco-products/81001385_other2.webp",
        "type": "other",
        "filename": "81001385_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-inverter-cl18f-compact-kanaal-airco-r32-50-kw-set/29588/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001385_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001385_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001385_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001385_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001385_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001393",
    "sku": "LG-CL18F_Standaard_SET",
    "name": "LG Low static Inverter kanaal airco CL18F-S R32 5,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "5.0",
    "coolingCapacity": "5.8",
    "heatingCapacity": "6.7",
    "description": "De LG Low Static Inverter Binnen- & Buitenunit R32 5,0 kW is een compacte en efficiënte oplossing voor klimaatbeheersing in kleinere residentiële en commerciële ruimtes. Deze unit combineert geavanceerde invertertechnologie met een koelcapaciteit van 5,0 kW, wat resulteert in optimale prestaties met een minimaal energieverbruik. Dankzij het ontwerp is deze unit ideaal voor installatie in verlaagde plafonds, waarbij een discrete en strakke afwerking in de ruimte kan worden bewerkstelligd.\n\nDe LG Low Static Inverter 5,0 kW is uitermate geschikt voor kleinere ruimtes tot 30 m², zoals kantoren, slaapkamers, of kleine winkels. De unit zorgt voor betrouwbare koeling in de zomer en effectieve verwarming in de winter, waardoor het een veelzijdige keuze is voor elk seizoen.\n\nOntworpen met gebruiksgemak in gedachten, wordt deze unit geleverd met een complete installatiekit en een gedetailleerde handleiding, wat een snelle en eenvoudige installatie mogelijk maakt. Bovendien biedt LG een garantie van 5 jaar op de unit, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Low Static Inverter 5,0 kW onderscheidt zich door zijn combinatie van efficiëntie, stil gebruik, en compact ontwerp. Met zijn energiezuinige prestaties en milieuvriendelijk R32 koelmiddel is deze unit een uitstekende keuze voor zowel residentiële als lichte commerciële toepassingen. Het ontwerp, gericht op eenvoud in installatie en onderhoud, maakt dit product tot een praktische en kosteneffectieve oplossing voor het creëren van een comfortabel binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "190 x 1100 x 460 mm",
      "buitenunit": "650 x 870 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.1",
    "scop": null,
    "soundLevel": "35 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.2 kg",
      "Global warming potential (GWP)": "810",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "0.3 kW",
      "Opgenomen vermogen bij koelen (max)": "1.89 kW",
      "Koelcapaciteit (min)": "2 kW",
      "Koelcapaciteit (max)": "5.8 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.4 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.48 kW",
      "Verwarmingscapaciteit (min)": "2.3 kW",
      "Verwarmingscapaciteit (max)": "6.7 kW",
      "EER (koeling)": "3.71",
      "COP (verwarming)": "3.28",
      "SEER (koeling)": "6.1",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "287 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "190 mm",
      "Breedte binnenunit": "1100 mm",
      "Diepte binnenunit": "460 mm",
      "Gewicht binnenunit": "20.9 kg",
      "Hoogte buitenunit": "650 mm",
      "Breedte buitenunit": "870 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "44.5 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "600 m³/h",
      "Luchtdebiet koelen (max)": "900 m³/h",
      "Luchtdebiet verwarmen (min)": "600 m³/h",
      "Luchtdebiet verwarmen (max)": "900 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "35 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "35 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "47 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "63 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.6 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001393_81001385_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001393_81001385_main.webp",
        "type": "main",
        "filename": "81001393_81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001393_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001393_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001393_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001393_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001393_81001385_energy.webp",
        "type": "energy",
        "filename": "81001393_81001385_energy.webp"
      },
      {
        "path": "/images/airco-products/81001393_81001363_other3.webp",
        "type": "other",
        "filename": "81001393_81001363_other3.webp"
      },
      {
        "path": "/images/airco-products/81001393_81001386_other1.webp",
        "type": "other",
        "filename": "81001393_81001386_other1.webp"
      },
      {
        "path": "/images/airco-products/81001393_81001386_other2.webp",
        "type": "other",
        "filename": "81001393_81001386_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-low-static-inverter-kanaal-airco-cl18f-s-r32-50-kw-set/29580/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001393_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001393_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001393_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001393_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001393_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001386",
    "sku": "LG-CL24F_Compact_SET",
    "name": "LG Low static Inverter kanaal airco CL24F-Compact R32 6,8 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "6.8",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG CL24F-C R32 6,8 kW Low Static Kanaal Inverter biedt een krachtige en stille oplossing voor klimaatbeheersing in zowel commerciële als residentiële omgevingen. Met een koelcapaciteit van 6,8 kW en de geavanceerde invertertechnologie levert dit systeem betrouwbare prestaties met een efficiënte energiebalans. Het low static ontwerp zorgt ervoor dat de ventilatoren stiller werken en minder slijten, wat bijdraagt aan een langere levensduur van de unit. De set bevat zowel een binnen- als een buitenunit en wordt geleverd met een afstandsbediening voor gemakkelijke bediening.\n\nDe LG CL24F-C R32 Low Static Kanaal Inverter Binnen- & Buitenunit is ideaal voor grotere ruimtes zoals kantoren, vergaderruimtes en commerciële toepassingen. Met een koelcapaciteit van 6,8 kW biedt dit systeem betrouwbare prestaties, zowel in de zomer als in de winter, waardoor het het hele jaar door een ideale oplossing is.\n\nDit systeem heeft een compact ontwerp dat eenvoudig te installeren en te onderhouden is. De buitenunit heeft een gewicht van 44,5 kg en de binnenunit weegt 26 kg. Dankzij de afstandsbediening kan de temperatuur eenvoudig worden aangepast. Met een SEER van 6,0 en een SCOP van 4,1 biedt dit systeem uitstekende energieprestaties, en het energielabel A+ benadrukt de energie-efficiëntie van het systeem. Bovendien biedt LG een garantie van 5 jaar op zowel de binnen- als buitenunit, wat extra zekerheid geeft over de duurzaamheid.\n\nDe LG CL24F-C R32 Low Static Kanaal Inverter Binnen- & Buitenunit onderscheidt zich door zijn stille werking, energie-efficiëntie en duurzaamheid. Het low static ontwerp vermindert de belasting van de ventilatoren, wat zorgt voor een langere levensduur en minder geluid. Het gebruik van het R32-koelmiddel biedt een hogere koelcapaciteit en een lagere impact op de ozonlaag. Met een SEER van 6,0 en een SCOP van 4,1 is dit systeem een betrouwbare en efficiënte keuze voor zowel commerciële als residentiële toepassingen.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A+",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "525",
      "Energielabel": "A+"
    },
    "image": "/images/airco-products/81001386_81001385_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001386_81001385_main.webp",
        "type": "main",
        "filename": "81001386_81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001386_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001386_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001386_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001386_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001386_81001386_energy.webp",
        "type": "energy",
        "filename": "81001386_81001386_energy.webp"
      },
      {
        "path": "/images/airco-products/81001386_energy.webp",
        "type": "energy",
        "filename": "81001386_energy.webp"
      },
      {
        "path": "/images/airco-products/81001386_81001363_other3.webp",
        "type": "other",
        "filename": "81001386_81001363_other3.webp"
      },
      {
        "path": "/images/airco-products/81001386_81001386_other1.webp",
        "type": "other",
        "filename": "81001386_81001386_other1.webp"
      },
      {
        "path": "/images/airco-products/81001386_81001386_other2.webp",
        "type": "other",
        "filename": "81001386_81001386_other2.webp"
      },
      {
        "path": "/images/airco-products/81001386_other1.webp",
        "type": "other",
        "filename": "81001386_other1.webp"
      },
      {
        "path": "/images/airco-products/81001386_other2.webp",
        "type": "other",
        "filename": "81001386_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-low-static-inverter-kanaal-airco-cl24f-compact-r32-68-kw-set/29587/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001386_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001386_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001386_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001386_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001386_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001394",
    "sku": "LG-CL24F_Standaard_SET",
    "name": "LG Low static Inverter kanaal airco CL24F-S R32 6,8 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "6.8",
    "coolingCapacity": "7.8",
    "heatingCapacity": "9",
    "description": "De LG Low Static Inverter Binnen- & Buitenunit R32 6,8 kW is een compacte en efficiënte oplossing voor klimaatbeheersing in kleinere residentiële en commerciële ruimtes. Deze unit combineert geavanceerde invertertechnologie met een koelcapaciteit van 6,8 kW, wat resulteert in optimale prestaties met een minimaal energieverbruik. Dankzij het low static ontwerp is deze unit ideaal voor installatie in verlaagde plafonds, waarbij een discrete en strakke afwerking in de ruimte kan worden bewerkstelligd.\n\nDe LG Low Static Inverter 6,8 kW is uitermate geschikt voor kleinere ruimtes tot 70 m², zoals kantoren, slaapkamers, of kleine winkels. De unit zorgt voor betrouwbare koeling in de zomer en effectieve verwarming in de winter, waardoor het een veelzijdige keuze is voor elk seizoen.\n\nOntworpen met gebruiksgemak in gedachten, wordt deze unit geleverd met een complete installatiekit en een gedetailleerde handleiding, wat een snelle en eenvoudige installatie mogelijk maakt. Bovendien biedt LG een garantie van 5 jaar op de unit, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Low Static Inverter 6,8 kW onderscheidt zich door zijn combinatie van efficiëntie, stil gebruik, en compact ontwerp. Met zijn energiezuinige prestaties en milieuvriendelijk R32 koelmiddel is deze unit een uitstekende keuze voor zowel residentiële als lichte commerciële toepassingen. Het ontwerp, gericht op eenvoud in installatie en onderhoud, maakt dit product tot een praktische en kosteneffectieve oplossing voor het creëren van een comfortabel binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "190 x 1100 x 700 mm",
      "buitenunit": "834 x 950 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.1",
    "scop": null,
    "soundLevel": "39 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.9 kg",
      "Global warming potential (GWP)": "1283",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "25 A",
      "Opgenomen vermogen bij koelen (min)": "0.4 kW",
      "Opgenomen vermogen bij koelen (max)": "2.84 kW",
      "Koelcapaciteit (min)": "2.7 kW",
      "Koelcapaciteit (max)": "7.8 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.4 kW",
      "Opgenomen vermogen bij verwarmen (max)": "3.3 kW",
      "Verwarmingscapaciteit (min)": "3 kW",
      "Verwarmingscapaciteit (max)": "9 kW",
      "EER (koeling)": "3.35",
      "COP (verwarming)": "3.52",
      "SEER (koeling)": "6.1",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "284 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "190 mm",
      "Breedte binnenunit": "1100 mm",
      "Diepte binnenunit": "700 mm",
      "Gewicht binnenunit": "26 kg",
      "Hoogte buitenunit": "834 mm",
      "Breedte buitenunit": "950 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "57.7 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "720 m³/h",
      "Luchtdebiet koelen (max)": "1200 m³/h",
      "Luchtdebiet verwarmen (min)": "720 m³/h",
      "Luchtdebiet verwarmen (max)": "1200 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "32 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "32 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "39 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "58 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "58 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.5 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "50 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001394_81001385_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001394_81001385_main.webp",
        "type": "main",
        "filename": "81001394_81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001394_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001394_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001394_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001394_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001394_81001386_energy.webp",
        "type": "energy",
        "filename": "81001394_81001386_energy.webp"
      },
      {
        "path": "/images/airco-products/81001394_81001363_other2.webp",
        "type": "other",
        "filename": "81001394_81001363_other2.webp"
      },
      {
        "path": "/images/airco-products/81001394_81001363_other3.webp",
        "type": "other",
        "filename": "81001394_81001363_other3.webp"
      },
      {
        "path": "/images/airco-products/81001394_81001385_other2.webp",
        "type": "other",
        "filename": "81001394_81001385_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-low-static-inverter-kanaal-airco-cl24f-s-r32-68-kw-set/29579/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001394_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001394_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001394_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001394_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001394_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001387",
    "sku": "LG-CM18F_Compact_SET",
    "name": "LG Mid static Inverter kanaal airco CM18F-Compact R32 5,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "5.0",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG CM18F-C R32 5,0 kW Mid Static Kanaal Inverter biedt een krachtige en efficiënte oplossing voor klimaatbeheersing in zowel commerciële als residentiële omgevingen. Met een koelcapaciteit van 5,0 kW en de invertertechnologie levert dit systeem consistente prestaties en energiebesparing. Het mid static ontwerp biedt meer flexibiliteit in de installatie, terwijl de ventilatoren zorgen voor efficiënte luchtstroming en minder slijtage. De set bevat zowel een binnen- als een buitenunit en wordt geleverd met een afstandsbediening voor gemakkelijke bediening.\n\nDe LG CM18F-C R32 Mid Static Kanaal Inverter Binnen- & Buitenunit is ideaal voor middelgrote ruimtes zoals kantoren, vergaderruimtes en commerciële toepassingen. Met een koelcapaciteit van 5,0 kW biedt dit systeem betrouwbare prestaties, zowel in de zomer als in de winter, waardoor het het hele jaar door een ideale oplossing is.\n\nDit systeem heeft een compact ontwerp dat eenvoudig te installeren en te onderhouden is. De binnenunit weegt 24,6 kg en de buitenunit weegt 44,5 kg, wat het eenvoudig maakt om ze te plaatsen. Met een SEER van 6,1 en een SCOP van 4,1 biedt dit systeem uitstekende energieprestaties en lagere energiekosten. De geluidsdruk van de binnenunit is 30 dB(A) op de laagste stand en de buitenunit heeft een geluidsniveau van 65 dB(A). Bovendien biedt LG een garantie van 5 jaar op zowel de binnen- als buitenunit, wat extra zekerheid biedt over de duurzaamheid.\n\nDe LG CM18F-C R32 Mid Static Kanaal Inverter Binnen- & Buitenunit biedt een uitstekende balans tussen energie-efficiëntie, stille werking en duurzaamheid. Dankzij het mid static ontwerp kunnen de ventilatoren efficiënter werken, wat zorgt voor een langere levensduur en minder geluid. Het gebruik van het R32-koelmiddel biedt een verbeterde koelcapaciteit en een lagere impact op de ozonlaag. Met een SEER van 6,1 en een SCOP van 4,1 is dit systeem een betrouwbare en efficiënte keuze voor zowel commerciële als residentiële toepassingen.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "525",
      "Energielabel": "A++"
    },
    "image": "/images/airco-products/81001387_81001385_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001387_81001385_main.webp",
        "type": "main",
        "filename": "81001387_81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001387_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001387_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001387_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001387_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001387_81001387_energy.webp",
        "type": "energy",
        "filename": "81001387_81001387_energy.webp"
      },
      {
        "path": "/images/airco-products/81001387_energy.webp",
        "type": "energy",
        "filename": "81001387_energy.webp"
      },
      {
        "path": "/images/airco-products/81001387_81001363_other2.webp",
        "type": "other",
        "filename": "81001387_81001363_other2.webp"
      },
      {
        "path": "/images/airco-products/81001387_81001363_other3.webp",
        "type": "other",
        "filename": "81001387_81001363_other3.webp"
      },
      {
        "path": "/images/airco-products/81001387_81001387_other2.webp",
        "type": "other",
        "filename": "81001387_81001387_other2.webp"
      },
      {
        "path": "/images/airco-products/81001387_other2.webp",
        "type": "other",
        "filename": "81001387_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-cm18f-compact-r32-50-kw-set/29586/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001387_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001387_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001387_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001387_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001387_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001395",
    "sku": "LG-CM18F_Standaard_SET",
    "name": "LG Mid static Inverter kanaal airco CM18F-S R32 5,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "5.0",
    "coolingCapacity": "5.8",
    "heatingCapacity": "6.7",
    "description": "De LG Mid Static Inverter Binnen- & Buitenunit R32 5,0 kW is een geavanceerde oplossing voor klimaatbeheersing in zowel residentiële als commerciële omgevingen. Met een koelvermogen van 5,0 kW en uitgerust met moderne invertertechnologie, biedt deze unit betrouwbare en efficiënte prestaties terwijl het energieverbruik laag blijft. Het mid static ontwerp maakt het mogelijk om de unit in verschillende installatieconfiguraties te gebruiken, wat zorgt voor een flexibele en naadloze integratie in diverse interieurs.\n\nDe LG Mid Static Inverter 5,0 kW is ideaal voor middelgrote ruimtes tot 80 m², zoals woonkamers en vergaderruimtes. Deze unit zorgt voor een consistent aangenaam klimaat, zowel in de hete zomermaanden als tijdens de koude winterperiode, en is daarmee een betrouwbare keuze voor elke tijd van het jaar.\n\nDe airconditioner is ontworpen voor eenvoudige installatie en onderhoudsvriendelijkheid. De unit wordt geleverd met een volledige installatiekit en een gebruiksvriendelijke handleiding, wat zorgt voor een probleemloze en snelle plaatsing. LG biedt tevens een garantie van 5 jaar op dit product, wat vertrouwen geeft in de duurzaamheid en betrouwbaarheid van de unit.\n\nDe LG Mid Static Inverter 5,0 kW onderscheidt zich door zijn combinatie van efficiënte prestaties, energiezuinigheid en flexibele installatieopties. Dankzij het stijlvolle en functionele ontwerp, samen met het gebruik van het milieuvriendelijke R32 koelmiddel, is deze unit een uitstekende keuze voor zowel particuliere als zakelijke toepassingen. De lange levensduur en het lage onderhoud vereiste maken deze airconditioner tot een duurzame en kosteneffectieve oplossing voor het beheersen van het binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "270 x 900 x 700 mm",
      "buitenunit": "650 x 870 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.4",
    "scop": null,
    "soundLevel": "34 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.2 kg",
      "Global warming potential (GWP)": "810",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "0.3 kW",
      "Opgenomen vermogen bij koelen (max)": "1.86 kW",
      "Koelcapaciteit (min)": "2 kW",
      "Koelcapaciteit (max)": "5.8 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.4 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.46 kW",
      "Verwarmingscapaciteit (min)": "2.3 kW",
      "Verwarmingscapaciteit (max)": "6.7 kW",
      "EER (koeling)": "3.75",
      "COP (verwarming)": "3.3",
      "SEER (koeling)": "6.4",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "270 mm",
      "Breedte binnenunit": "900 mm",
      "Diepte binnenunit": "700 mm",
      "Gewicht binnenunit": "24.6 kg",
      "Hoogte buitenunit": "650 mm",
      "Breedte buitenunit": "870 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "44.5 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "780 m³/h",
      "Luchtdebiet koelen (max)": "990 m³/h",
      "Luchtdebiet verwarmen (min)": "780 m³/h",
      "Luchtdebiet verwarmen (max)": "990 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "34 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "47 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "63 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.2 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001395_81001385_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001395_81001385_main.webp",
        "type": "main",
        "filename": "81001395_81001385_main.webp"
      },
      {
        "path": "/images/airco-products/81001395_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001395_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001395_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001395_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001395_81001395_energy.webp",
        "type": "energy",
        "filename": "81001395_81001395_energy.webp"
      },
      {
        "path": "/images/airco-products/81001395_energy.webp",
        "type": "energy",
        "filename": "81001395_energy.webp"
      },
      {
        "path": "/images/airco-products/81001395_81001386_other1.webp",
        "type": "other",
        "filename": "81001395_81001386_other1.webp"
      },
      {
        "path": "/images/airco-products/81001395_81001387_other2.webp",
        "type": "other",
        "filename": "81001395_81001387_other2.webp"
      },
      {
        "path": "/images/airco-products/81001395_81001388_other3.webp",
        "type": "other",
        "filename": "81001395_81001388_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-cm18f-s-r32-50-kw-set/29578/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001395_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001395_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001395_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001395_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001395_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001388",
    "sku": "LG-CM24F_Compact_SET",
    "name": "LG Mid static Inverter kanaal airco CM24F-Compact R32 6,8 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "6.8",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG CM24F-C R32 6,8 kW Mid Static Kanaal Inverter biedt een efficiënte en krachtige oplossing voor klimaatbeheersing in commerciële en residentiële omgevingen. Met een koelcapaciteit van 6,8 kW en invertertechnologie zorgt dit systeem voor optimale prestaties met een laag energieverbruik. Het mid static ontwerp biedt flexibiliteit in de installatie, terwijl de ventilatoren zorgen voor een gelijkmatige luchtverdeling en verminderde slijtage. De set wordt compleet geleverd met een binnen- en buitenunit en een afstandsbediening voor eenvoudige bediening.\n\nDe LG CM24F-C R32 Mid Static Kanaal Inverter Binnen- & Buitenunit is ontworpen voor middelgrote tot grote ruimtes zoals kantoren, vergaderruimtes en commerciële toepassingen. Met een koelcapaciteit van 6,8 kW biedt dit systeem betrouwbare prestaties, het hele jaar door, in zowel warme zomers als koude winters.\n\nDit systeem heeft een compact ontwerp dat eenvoudig te installeren en te onderhouden is. De binnenunit weegt 24,6 kg en de buitenunit weegt 44,5 kg. Dankzij de afstandsbediening kan de temperatuur eenvoudig worden geregeld. Met een SEER van 5,8 en een SCOP van 4,1 biedt dit systeem uitstekende energieprestaties en lage energiekosten. De geluidsdruk van de binnenunit is 32 dB(A) op de laagste stand, wat zorgt voor een stille werking. Bovendien biedt LG een garantie van 5 jaar op zowel de binnen- als buitenunit, wat extra zekerheid biedt over de duurzaamheid.\n\nDe LG CM24F-C R32 Mid Static Kanaal Inverter Binnen- & Buitenunit onderscheidt zich door zijn energie-efficiëntie, stille werking en duurzaamheid. Dankzij het mid static ontwerp werken de ventilatoren efficiënter, wat zorgt voor minder geluid en een langere levensduur. Het gebruik van het R32-koelmiddel biedt een hogere koelcapaciteit en een lagere milieu impact.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A+",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "525",
      "Energielabel": "A+"
    },
    "image": "/images/airco-products/81001388_81001388_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001388_81001388_main.webp",
        "type": "main",
        "filename": "81001388_81001388_main.webp"
      },
      {
        "path": "/images/airco-products/81001388_main.webp",
        "type": "main",
        "filename": "81001388_main.webp"
      },
      {
        "path": "/images/airco-products/81001388_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001388_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001388_81001388_dimensions.webp",
        "type": "dimensions",
        "filename": "81001388_81001388_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001388_dimensions.webp",
        "type": "dimensions",
        "filename": "81001388_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001388_81001388_energy.webp",
        "type": "energy",
        "filename": "81001388_81001388_energy.webp"
      },
      {
        "path": "/images/airco-products/81001388_energy.webp",
        "type": "energy",
        "filename": "81001388_energy.webp"
      },
      {
        "path": "/images/airco-products/81001388_81001386_other1.webp",
        "type": "other",
        "filename": "81001388_81001386_other1.webp"
      },
      {
        "path": "/images/airco-products/81001388_81001387_other2.webp",
        "type": "other",
        "filename": "81001388_81001387_other2.webp"
      },
      {
        "path": "/images/airco-products/81001388_81001388_other3.webp",
        "type": "other",
        "filename": "81001388_81001388_other3.webp"
      },
      {
        "path": "/images/airco-products/81001388_other3.webp",
        "type": "other",
        "filename": "81001388_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-cm24f-compact-r32-68-kw-set/29585/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001388_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001388_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001388_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001388_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001388_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001396",
    "sku": "LG-CM24F_Standaard_SET",
    "name": "LG Mid static Inverter kanaal airco CM24F-S R32 6,8 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "6.8",
    "coolingCapacity": "8",
    "heatingCapacity": "9",
    "description": "De LG Mid Static Inverter Binnen- & Buitenunit R32 6,8 kW is een geavanceerde oplossing voor klimaatbeheersing in zowel residentiële als commerciële omgevingen. Met een koelvermogen van 6,8 kW en uitgerust met moderne invertertechnologie, biedt deze unit betrouwbare en efficiënte prestaties terwijl het energieverbruik laag blijft. Het mid static ontwerp maakt het mogelijk om de unit in verschillende installatieconfiguraties te gebruiken, wat zorgt voor een flexibele en naadloze integratie in diverse interieurs.\n\nDe LG Mid Static Inverter 5,0 kW is ideaal voor grote ruimtes tot 110 m², zoals woonkamers en vergaderruimtes. Deze unit zorgt voor een consistent aangenaam klimaat, zowel in de hete zomermaanden als tijdens de koude winterperiode, en is daarmee een betrouwbare keuze voor elke tijd van het jaar.\n\nDe airconditioner is ontworpen voor eenvoudige installatie en onderhoudsvriendelijkheid. De unit wordt geleverd met een volledige installatiekit en een gebruiksvriendelijke handleiding, wat zorgt voor een probleemloze en snelle plaatsing. LG biedt tevens een garantie van 5 jaar op dit product, wat vertrouwen geeft in de duurzaamheid en betrouwbaarheid van de unit.\n\nDe LG Mid Static Inverter 6,8 kW onderscheidt zich door zijn combinatie van efficiënte prestaties, energiezuinigheid en flexibele installatieopties. Dankzij het stijlvolle en functionele ontwerp, samen met het gebruik van het milieuvriendelijke R32 koelmiddel, is deze unit een uitstekende keuze voor zowel particuliere als zakelijke toepassingen. De lange levensduur en het lage onderhoud vereiste maken deze airconditioner tot een duurzame en kosteneffectieve oplossing voor het beheersen van het binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "270 x 900 x 700 mm",
      "buitenunit": "834 x 950 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.6",
    "scop": null,
    "soundLevel": "34 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.9 kg",
      "Global warming potential (GWP)": "1283",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "25 A",
      "Opgenomen vermogen bij koelen (min)": "0.4 kW",
      "Opgenomen vermogen bij koelen (max)": "2.69 kW",
      "Koelcapaciteit (min)": "2.7 kW",
      "Koelcapaciteit (max)": "8 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.5 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.39 kW",
      "Verwarmingscapaciteit (min)": "3 kW",
      "Verwarmingscapaciteit (max)": "9 kW",
      "EER (koeling)": "3.49",
      "COP (verwarming)": "3.31",
      "SEER (koeling)": "6.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "361 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "270 mm",
      "Breedte binnenunit": "900 mm",
      "Diepte binnenunit": "700 mm",
      "Gewicht binnenunit": "24.6 kg",
      "Hoogte buitenunit": "834 mm",
      "Breedte buitenunit": "950 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "57.7 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "780 m³/h",
      "Luchtdebiet koelen (max)": "990 m³/h",
      "Luchtdebiet verwarmen (min)": "780 m³/h",
      "Luchtdebiet verwarmen (max)": "990 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "34 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "47 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "47 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "63 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.6 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "50 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001396_81001388_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001396_81001388_main.webp",
        "type": "main",
        "filename": "81001396_81001388_main.webp"
      },
      {
        "path": "/images/airco-products/81001396_81001385_dimensions.webp",
        "type": "dimensions",
        "filename": "81001396_81001385_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001396_81001385_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001396_81001385_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001396_81001396_energy.webp",
        "type": "energy",
        "filename": "81001396_81001396_energy.webp"
      },
      {
        "path": "/images/airco-products/81001396_energy.webp",
        "type": "energy",
        "filename": "81001396_energy.webp"
      },
      {
        "path": "/images/airco-products/81001396_81001386_other1.webp",
        "type": "other",
        "filename": "81001396_81001386_other1.webp"
      },
      {
        "path": "/images/airco-products/81001396_81001387_other2.webp",
        "type": "other",
        "filename": "81001396_81001387_other2.webp"
      },
      {
        "path": "/images/airco-products/81001396_81001388_other3.webp",
        "type": "other",
        "filename": "81001396_81001388_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-cm24f-s-r32-68-kw-set/29577/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001396_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001396_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001396_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001396_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001396_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001367",
    "sku": "LG-CT09F_Standaard_SET",
    "name": "LG Cassette airco met afdekplaat CT09F-S R32 2,5 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "2.5",
    "coolingCapacity": "3.2",
    "heatingCapacity": "3.7",
    "description": "De LG CT09F-S R32 2,5kW Cassette Standard Inverter set biedt een efficiënte en discrete oplossing voor klimaatbeheersing, ideaal voor zowel residentiële als commerciële toepassingen. Met een koelcapaciteit van 2,5 kW en uitgerust met geavanceerde invertertechnologie, levert deze cassette airconditioner betrouwbare prestaties met een laag energieverbruik. Dankzij het ruimtebesparende cassetteontwerp wordt de unit netjes geïntegreerd in het plafond, wat zorgt voor een strak en modern interieur. Met een SEER van 6,7 W/W en een SCOP van 4,0 W/W, biedt deze airco uitstekende energie-efficiëntie, ongeacht het seizoen. De set wordt compleet geleverd met zowel de binnen- en buitenunit als een stijlvolle afdekplaat.\n\nDe LG CT09F-S 2,5 kW Cassette Standard is ideaal voor kleinere ruimtes tot 40 m², zoals kantoren, vergaderruimtes en kleinere winkels. Het systeem biedt betrouwbare koeling en verwarming, waardoor het geschikt is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. De set wordt geleverd met een volledige installatiekit, inclusief de afdekplaat, en een gebruiksvriendelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. LG biedt een garantie van 5 jaar op deze airconditioner, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van het apparaat.\n\nDe LG CT09F-S Cassette Standard 2,5 kW onderscheidt zich door zijn combinatie van efficiëntie, discrete installatie en betrouwbare prestaties. Met een SEER van 6,7 en een SCOP van 4,0 biedt deze cassette airconditioner solide prestaties het hele jaar door. Het ruimtebesparende ontwerp, gecombineerd met het milieuvriendelijke R32 koelmiddel en de stille werking, maakt dit apparaat tot een uitstekende keuze voor zowel commerciële als residentiële toepassingen. De lange levensduur en het onderhoudsvriendelijke karakter maken deze airco tot een kosteneffectieve en praktische oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "34 x 620 x 620 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "6.7",
    "scop": null,
    "soundLevel": "36 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Cassette (4-zijdig)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1 kg",
      "Global warming potential (GWP)": "675",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Koelcapaciteit (min)": "1.5 kW",
      "Koelcapaciteit (max)": "3.2 kW",
      "Verwarmingscapaciteit (min)": "1.8 kW",
      "Verwarmingscapaciteit (max)": "3.7 kW",
      "EER (koeling)": "4.1",
      "COP (verwarming)": "4.3",
      "SEER (koeling)": "6.7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "131 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "34 mm",
      "Breedte binnenunit": "620 mm",
      "Diepte binnenunit": "620 mm",
      "Gewicht binnenunit": "3 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "33.3 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "360 m³/h",
      "Luchtdebiet koelen (max)": "510 m³/h",
      "Luchtdebiet verwarmen (min)": "360 m³/h",
      "Luchtdebiet verwarmen (max)": "510 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "36 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "52 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.63 l/h",
      "Uitwendige buisdiameter condensafvoer": "25 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001367_81001367_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001367_81001367_main.webp",
        "type": "main",
        "filename": "81001367_81001367_main.webp"
      },
      {
        "path": "/images/airco-products/81001367_main.webp",
        "type": "main",
        "filename": "81001367_main.webp"
      },
      {
        "path": "/images/airco-products/81001367_81001367_dimensions.webp",
        "type": "dimensions",
        "filename": "81001367_81001367_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001367_81001367_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001367_81001367_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001367_81001367_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001367_81001367_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001367_dimensions.webp",
        "type": "dimensions",
        "filename": "81001367_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001367_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001367_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001367_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001367_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001367_81001367_energy.webp",
        "type": "energy",
        "filename": "81001367_81001367_energy.webp"
      },
      {
        "path": "/images/airco-products/81001367_energy.webp",
        "type": "energy",
        "filename": "81001367_energy.webp"
      },
      {
        "path": "/images/airco-products/81001367_81001367_other1.webp",
        "type": "other",
        "filename": "81001367_81001367_other1.webp"
      },
      {
        "path": "/images/airco-products/81001367_81001367_other2.webp",
        "type": "other",
        "filename": "81001367_81001367_other2.webp"
      },
      {
        "path": "/images/airco-products/81001367_81001367_other3.webp",
        "type": "other",
        "filename": "81001367_81001367_other3.webp"
      },
      {
        "path": "/images/airco-products/81001367_other1.webp",
        "type": "other",
        "filename": "81001367_other1.webp"
      },
      {
        "path": "/images/airco-products/81001367_other2.webp",
        "type": "other",
        "filename": "81001367_other2.webp"
      },
      {
        "path": "/images/airco-products/81001367_other3.webp",
        "type": "other",
        "filename": "81001367_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-cassette-airco-met-afdekplaat-ct09f-s-r32-25-kw-set/29606/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001367_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001367_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001367_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001367_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001367_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001368",
    "sku": "LG-CT12F_Standaard_SET",
    "name": "LG Cassette airco met afdekplaat CT12F-S R32 3,5 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "3.5",
    "coolingCapacity": "4.5",
    "heatingCapacity": "5",
    "description": "De LG CT12F-S R32 3,5 kW Cassette Standard Inverter set is de ideale keuze voor zowel residentiële als commerciële toepassingen waar zowel prestaties als esthetiek belangrijk zijn. Met een koelcapaciteit van 3,5 kW en geavanceerde invertertechnologie, biedt deze cassette airconditioner efficiënte en betrouwbare prestaties met een laag energieverbruik. Het cassetteontwerp zorgt ervoor dat de unit discreet in het plafond wordt geïntegreerd, wat bijdraagt aan een strak en modern interieur. Met een SEER van 6,7 W/W en een SCOP van 4,0 W/W, garandeert deze airco uitstekende energie-efficiëntie gedurende het hele jaar. De set wordt compleet geleverd met een binnen- en buitenunit, evenals een stijlvolle afdekplaat.\n\nDe LG CT12F-S 3,5 kW Cassette Standard is ideaal voor middelgrote ruimtes tot 60 m², zoals kantoren, vergaderruimtes en winkels. Het systeem biedt betrouwbare koeling en verwarming, wat het perfect maakt voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. De set wordt geleverd met een volledige installatiekit, inclusief de afdekplaat, en een gebruiksvriendelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. LG biedt een garantie van 5 jaar op deze airconditioner, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van het apparaat.\n\nDe LG CT12F-S Cassette Standard 3,5 kW onderscheidt zich door zijn combinatie van efficiëntie, discrete installatie en betrouwbare prestaties. Met een SEER van 6,7 en een SCOP van 4,0 biedt deze cassette airconditioner solide prestaties het hele jaar door. Het ruimtebesparende ontwerp, gecombineerd met het milieuvriendelijke R32 koelmiddel en de stille werking, maakt dit apparaat tot een uitstekende keuze voor zowel commerciële als residentiële toepassingen. De lange levensduur en het onderhoudsvriendelijke karakter maken deze airco tot een kosteneffectieve en praktische oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "34 x 620 x 620 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "6.7",
    "scop": null,
    "soundLevel": "38 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Cassette (4-zijdig)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1 kg",
      "Global warming potential (GWP)": "675",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Opgenomen vermogen bij koelen (min)": "0.3 kW",
      "Opgenomen vermogen bij koelen (max)": "1.62 kW",
      "Koelcapaciteit (min)": "1.5 kW",
      "Koelcapaciteit (max)": "4.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.3 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.57 kW",
      "Verwarmingscapaciteit (min)": "1.8 kW",
      "Verwarmingscapaciteit (max)": "5 kW",
      "EER (koeling)": "3.5",
      "COP (verwarming)": "3.71",
      "SEER (koeling)": "6.7",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "178 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "34 mm",
      "Breedte binnenunit": "620 mm",
      "Diepte binnenunit": "620 mm",
      "Gewicht binnenunit": "3 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "33.3 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "420 m³/h",
      "Luchtdebiet koelen (max)": "570 m³/h",
      "Luchtdebiet verwarmen (min)": "420 m³/h",
      "Luchtdebiet verwarmen (max)": "570 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "32 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "38 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "32 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "38 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "52 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "1.26 l/h",
      "Uitwendige buisdiameter condensafvoer": "25 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001368_81001367_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001368_81001367_main.webp",
        "type": "main",
        "filename": "81001368_81001367_main.webp"
      },
      {
        "path": "/images/airco-products/81001368_81001367_dimensions.webp",
        "type": "dimensions",
        "filename": "81001368_81001367_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001368_81001367_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001368_81001367_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001368_81001367_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001368_81001367_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001368_81001368_energy.webp",
        "type": "energy",
        "filename": "81001368_81001368_energy.webp"
      },
      {
        "path": "/images/airco-products/81001368_energy.webp",
        "type": "energy",
        "filename": "81001368_energy.webp"
      },
      {
        "path": "/images/airco-products/81001368_81001367_other1.webp",
        "type": "other",
        "filename": "81001368_81001367_other1.webp"
      },
      {
        "path": "/images/airco-products/81001368_81001367_other2.webp",
        "type": "other",
        "filename": "81001368_81001367_other2.webp"
      },
      {
        "path": "/images/airco-products/81001368_81001367_other3.webp",
        "type": "other",
        "filename": "81001368_81001367_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-cassette-airco-met-afdekplaat-ct12f-s-r32-35-kw-set/29605/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001368_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001368_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001368_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001368_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001368_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001363",
    "sku": "LG-CT18F_Compact_SET",
    "name": "LG Cassette airco met afdekplaat CT18F-Compact R32 5,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "5.0",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG CT18F-C R32 5,0 kW Cassette Compact Inverter Set biedt een efficiënte en stijlvolle oplossing voor klimaatbeheersing in commerciële en residentiële ruimtes. Met een koelcapaciteit van 5,0 kW en de geavanceerde invertertechnologie, levert dit systeem betrouwbare prestaties met minimaal energieverbruik. Het compacte cassetteontwerp zorgt ervoor dat de unit naadloos in het plafond wordt geïntegreerd, wat zorgt voor een modern en strak interieur. Deze set bevat zowel de binnen- als buitenunit, evenals een afdekplaat voor een perfecte afwerking.\n\nDe LG CT18F-C R32 Cassette Compact Inverter Set is geschikt voor middelgrote ruimtes zoals kantoren, vergaderruimtes en commerciële toepassingen. Met een koelcapaciteit van 5,0 kW levert dit systeem betrouwbare prestaties, het hele jaar door, ongeacht de weersomstandigheden.\n\nHet systeem is ontworpen met gebruiksvriendelijkheid en installatiegemak in gedachten. De binnenunit weegt 13,9 kg, waardoor hij eenvoudig te monteren is in het plafond. De buitenunit weegt 33,3 kg, wat zorgt voor een robuuste, betrouwbare werking. Met een SEER van 6,3 en een SCOP van 3,9 biedt het systeem uitstekende energieprestaties. Bovendien biedt LG een garantie van 5 jaar op zowel de binnen- als buitenunit, wat extra zekerheid biedt over de duurzaamheid.\n\nDe LG CT18F-C R32 Cassette Compact Inverter Set onderscheidt zich door zijn energie-efficiëntie, stille werking en moderne, ruimtebesparende ontwerp. Dankzij de compacte cassetteconstructie wordt de unit netjes weggewerkt in het plafond, terwijl het systeem betrouwbaar blijft presteren. Met een SEER van 6,3 en een SCOP van 3,9 is het een efficiënte keuze voor klimaatbeheersing in zowel commerciële als residentiële toepassingen. De milieuvriendelijke eigenschappen van het R32-koelmiddel maken dit systeem bovendien een duurzame oplossing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "525",
      "Energielabel": "A++"
    },
    "image": "/images/airco-products/81001363_81001363_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001363_81001363_main.webp",
        "type": "main",
        "filename": "81001363_81001363_main.webp"
      },
      {
        "path": "/images/airco-products/81001363_main.webp",
        "type": "main",
        "filename": "81001363_main.webp"
      },
      {
        "path": "/images/airco-products/81001363_81001363_dimensions.webp",
        "type": "dimensions",
        "filename": "81001363_81001363_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001363_81001363_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001363_81001363_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001363_dimensions.webp",
        "type": "dimensions",
        "filename": "81001363_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001363_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001363_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001363_81001363_energy.webp",
        "type": "energy",
        "filename": "81001363_81001363_energy.webp"
      },
      {
        "path": "/images/airco-products/81001363_energy.webp",
        "type": "energy",
        "filename": "81001363_energy.webp"
      },
      {
        "path": "/images/airco-products/81001363_81001363_other1.webp",
        "type": "other",
        "filename": "81001363_81001363_other1.webp"
      },
      {
        "path": "/images/airco-products/81001363_81001363_other2.webp",
        "type": "other",
        "filename": "81001363_81001363_other2.webp"
      },
      {
        "path": "/images/airco-products/81001363_81001363_other3.webp",
        "type": "other",
        "filename": "81001363_81001363_other3.webp"
      },
      {
        "path": "/images/airco-products/81001363_other1.webp",
        "type": "other",
        "filename": "81001363_other1.webp"
      },
      {
        "path": "/images/airco-products/81001363_other2.webp",
        "type": "other",
        "filename": "81001363_other2.webp"
      },
      {
        "path": "/images/airco-products/81001363_other3.webp",
        "type": "other",
        "filename": "81001363_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-cassette-airco-met-afdekplaat-ct18f-compact-r32-50-kw-set/29610/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001363_dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001363_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001363_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001363_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001363_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001369",
    "sku": "LG-CT18F_Standaard_SET",
    "name": "LG Cassette airco met afdekplaat CT18F-S R32 5,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "5.0",
    "coolingCapacity": "5.8",
    "heatingCapacity": "6.6",
    "description": "De LG CT18F-S R32 5,0 kW Cassette Standard Inverter set is een krachtige en efficiënte oplossing voor klimaatbeheersing, ideaal voor zowel residentiële als commerciële toepassingen. Met een koelcapaciteit van 5,0 kW en voorzien van geavanceerde invertertechnologie, levert deze cassette airconditioner betrouwbare prestaties met een laag energieverbruik. Het cassetteontwerp integreert de unit naadloos in het plafond, waardoor een strak en modern interieur behouden blijft. Met een SEER van 6,4 W/W en een SCOP van 4,3 W/W, biedt deze airco uitstekende energie-efficiëntie, ongeacht het seizoen. De set wordt compleet geleverd met een binnen- en buitenunit, evenals een stijlvolle afdekplaat.\n\nDe LG CT18F-S 5,0 kW Cassette Standard is uitstekend geschikt voor grotere ruimtes tot 80 m², zoals kantoren, vergaderruimtes en commerciële ruimtes. Het systeem biedt betrouwbare koeling en verwarming, waardoor het ideaal is voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. De set wordt geleverd met een volledige installatiekit, inclusief de afdekplaat, en een gebruiksvriendelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. LG biedt een garantie van 5 jaar op deze airconditioner, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van het apparaat.\n\nDe LG CT18F-S Cassette Standard 5,0 kW onderscheidt zich door zijn combinatie van kracht, efficiëntie en discreet ontwerp. Met een SEER van 6,4 en een SCOP van 4,3 biedt deze cassette airconditioner betrouwbare prestaties het hele jaar door. Het ruimtebesparende ontwerp, gecombineerd met het milieuvriendelijke R32 koelmiddel en de stille werking, maakt dit apparaat tot een uitstekende keuze voor zowel commerciële als residentiële toepassingen. De lange levensduur en het onderhoudsvriendelijke karakter maken deze airco tot een kosteneffectieve en praktische oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "34 x 620 x 620 mm",
      "buitenunit": "650 x 870 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "6.4",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Cassette (4-zijdig)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.2 kg",
      "Global warming potential (GWP)": "810",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "0.3 kW",
      "Opgenomen vermogen bij koelen (max)": "2.2 kW",
      "Koelcapaciteit (min)": "2 kW",
      "Koelcapaciteit (max)": "5.8 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.3 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.13 kW",
      "Verwarmingscapaciteit (min)": "2.3 kW",
      "Verwarmingscapaciteit (max)": "6.6 kW",
      "EER (koeling)": "3.19",
      "COP (verwarming)": "3.74",
      "SEER (koeling)": "6.4",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "34 mm",
      "Breedte binnenunit": "620 mm",
      "Diepte binnenunit": "620 mm",
      "Gewicht binnenunit": "3 kg",
      "Hoogte buitenunit": "650 mm",
      "Breedte buitenunit": "870 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "44.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "660 m³/h",
      "Luchtdebiet koelen (max)": "780 m³/h",
      "Luchtdebiet verwarmen (min)": "660 m³/h",
      "Luchtdebiet verwarmen (max)": "780 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "37 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "37 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "57 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "57 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "63 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "63 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.89 l/h",
      "Uitwendige buisdiameter condensafvoer": "25 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001369_81001367_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001369_81001367_main.webp",
        "type": "main",
        "filename": "81001369_81001367_main.webp"
      },
      {
        "path": "/images/airco-products/81001369_81001367_dimensions.webp",
        "type": "dimensions",
        "filename": "81001369_81001367_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001369_81001367_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001369_81001367_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001369_81001367_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001369_81001367_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001369_81001369_energy.webp",
        "type": "energy",
        "filename": "81001369_81001369_energy.webp"
      },
      {
        "path": "/images/airco-products/81001369_energy.webp",
        "type": "energy",
        "filename": "81001369_energy.webp"
      },
      {
        "path": "/images/airco-products/81001369_81001367_other1.webp",
        "type": "other",
        "filename": "81001369_81001367_other1.webp"
      },
      {
        "path": "/images/airco-products/81001369_81001367_other2.webp",
        "type": "other",
        "filename": "81001369_81001367_other2.webp"
      },
      {
        "path": "/images/airco-products/81001369_81001367_other3.webp",
        "type": "other",
        "filename": "81001369_81001367_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-cassette-airco-met-afdekplaat-ct18f-s-r32-50-kw-set/29603/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001369_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001369_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001369_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001369_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001369_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001364",
    "sku": "LG-CT24F_Compact_SET",
    "name": "LG Cassette airco met afdekplaat CT24F-Compact R32 6,8 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "6.8",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG CT24F-C R32 6,8 kW Cassette Compact Inverter Set biedt een krachtige en energiezuinige oplossing voor klimaatbeheersing in commerciële en residentiële ruimtes. Met een koelcapaciteit van 6,8 kW en de geavanceerde invertertechnologie levert dit systeem betrouwbare prestaties met een minimaal energieverbruik. Het compacte cassetteontwerp zorgt ervoor dat de unit naadloos in het plafond wordt geïntegreerd, wat zorgt voor een strak en modern interieur. Deze set bevat zowel de binnen- als buitenunit, evenals een afdekplaat voor een stijlvolle afwerking.\n\nDe LG CT24F-C R32 Cassette Compact Inverter Set is geschikt voor grotere ruimtes zoals kantoren, vergaderruimtes en commerciële toepassingen. Met een koelcapaciteit van 6,8 kW biedt dit systeem betrouwbare prestaties, het hele jaar door, in zowel de zomer als de winter.\n\nHet systeem is ontworpen voor eenvoudige installatie en onderhoud. De binnenunit weegt 21,1 kg, wat de installatie in het plafond vergemakkelijkt. De buitenunit weegt 44,5 kg, wat zorgt voor een robuuste werking. Met een SEER van 7,0 en een SCOP van 4,2 biedt het systeem uitstekende energieprestaties. Daarnaast biedt LG een garantie van 5 jaar op zowel de binnen- als buitenunit, wat extra zekerheid geeft over de betrouwbaarheid en duurzaamheid.\n\nDe LG CT24F-C R32 Cassette Compact Inverter Set onderscheidt zich door zijn krachtige prestaties, energie-efficiëntie en stille werking. Dankzij de compacte cassetteconstructie wordt de unit netjes in het plafond weggewerkt, zonder in te boeten aan prestaties. Met een SEER van 7,0 en een SCOP van 4,2 is dit systeem een efficiënte en betrouwbare keuze voor klimaatbeheersing in zowel commerciële als residentiële toepassingen. Het gebruik van het milieuvriendelijke R32-koelmiddel maakt dit systeem bovendien een duurzame oplossing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A++",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "525",
      "Energielabel": "A++"
    },
    "image": "/images/airco-products/81001364_81001363_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001364_81001363_main.webp",
        "type": "main",
        "filename": "81001364_81001363_main.webp"
      },
      {
        "path": "/images/airco-products/81001364_81001364_dimensions.webp",
        "type": "dimensions",
        "filename": "81001364_81001364_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001364_81001364_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001364_81001364_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001364_dimensions.webp",
        "type": "dimensions",
        "filename": "81001364_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001364_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001364_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001364_81001364_energy.webp",
        "type": "energy",
        "filename": "81001364_81001364_energy.webp"
      },
      {
        "path": "/images/airco-products/81001364_energy.webp",
        "type": "energy",
        "filename": "81001364_energy.webp"
      },
      {
        "path": "/images/airco-products/81001364_81001364_other1.webp",
        "type": "other",
        "filename": "81001364_81001364_other1.webp"
      },
      {
        "path": "/images/airco-products/81001364_81001364_other2.webp",
        "type": "other",
        "filename": "81001364_81001364_other2.webp"
      },
      {
        "path": "/images/airco-products/81001364_81001364_other3.webp",
        "type": "other",
        "filename": "81001364_81001364_other3.webp"
      },
      {
        "path": "/images/airco-products/81001364_other1.webp",
        "type": "other",
        "filename": "81001364_other1.webp"
      },
      {
        "path": "/images/airco-products/81001364_other2.webp",
        "type": "other",
        "filename": "81001364_other2.webp"
      },
      {
        "path": "/images/airco-products/81001364_other3.webp",
        "type": "other",
        "filename": "81001364_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-cassette-airco-met-afdekplaat-ct24f-compact-r32-68-kw-set/29609/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001364_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001364_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001364_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001364_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001364_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001370",
    "sku": "LG-CT24F_Standaard_SET",
    "name": "LG Cassette airco met afdekplaat CT24F-S R32 7,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "7.0",
    "coolingCapacity": "8",
    "heatingCapacity": "9",
    "description": "De LG CT24F-S R32 7,0 kW Cassette Standard Inverter set biedt een krachtige en efficiënte oplossing voor klimaatbeheersing, geschikt voor zowel residentiële als commerciële toepassingen. Met een koelcapaciteit van 7,0 kW en geavanceerde invertertechnologie, levert deze cassette airconditioner betrouwbare prestaties met een laag energieverbruik. Het cassetteontwerp integreert de unit naadloos in het plafond, waardoor een strak en modern interieur behouden blijft. Met een SEER van 7,4 W/W en een SCOP van 4,3 W/W, biedt deze airco uitstekende energie-efficiëntie, ongeacht het seizoen. De set wordt compleet geleverd met een binnen- en buitenunit, evenals een stijlvolle afdekplaat.\n\nDe LG CT24F-S 7,0 kW Cassette Standard is ideaal voor grotere ruimtes tot 100 m², zoals ruime kantoren, vergaderruimtes en commerciële omgevingen. Het systeem biedt betrouwbare koeling en verwarming, wat het perfect maakt voor zowel warme zomers als koude winters.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. De set wordt geleverd met een volledige installatiekit, inclusief de afdekplaat, en een duidelijke handleiding, zodat de installatie snel en zonder complicaties kan worden uitgevoerd. LG biedt een garantie van 5 jaar op deze airconditioner, wat extra zekerheid biedt voor de duurzaamheid en betrouwbaarheid van het apparaat.\n\nDe LG CT24F-S Cassette Standard 7,0 kW onderscheidt zich door zijn combinatie van kracht, efficiëntie en een strak, onopvallend ontwerp. Met een SEER van 7,4 en een SCOP van 4,3 biedt deze cassette airconditioner betrouwbare prestaties het hele jaar door. Het ruimtebesparende ontwerp, gecombineerd met het milieuvriendelijke R32 koelmiddel en de stille werking, maakt dit apparaat tot een uitstekende keuze voor zowel commerciële als residentiële toepassingen. De lange levensduur en het onderhoudsvriendelijke karakter maken deze airco tot een kosteneffectieve en praktische oplossing voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "35 x 950 x 950 mm",
      "buitenunit": "834 x 950 x 330 mm"
    },
    "energyLabel": "A++",
    "seer": "7.4",
    "scop": null,
    "soundLevel": "38 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Cassette (4-zijdig)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.9 kg",
      "Global warming potential (GWP)": "1283",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "25 A",
      "Opgenomen vermogen bij koelen (min)": "0.4 kW",
      "Opgenomen vermogen bij koelen (max)": "2.66 kW",
      "Koelcapaciteit (min)": "2.7 kW",
      "Koelcapaciteit (max)": "8 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.4 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2.84 kW",
      "Verwarmingscapaciteit (min)": "3 kW",
      "Verwarmingscapaciteit (max)": "9 kW",
      "EER (koeling)": "3.52",
      "COP (verwarming)": "3.83",
      "SEER (koeling)": "7.4",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "322 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "35 mm",
      "Breedte binnenunit": "950 mm",
      "Diepte binnenunit": "950 mm",
      "Gewicht binnenunit": "7.1 kg",
      "Hoogte buitenunit": "834 mm",
      "Breedte buitenunit": "950 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "57.7 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "840 m³/h",
      "Luchtdebiet koelen (max)": "1080 m³/h",
      "Luchtdebiet verwarmen (min)": "840 m³/h",
      "Luchtdebiet verwarmen (max)": "1080 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "38 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "38 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "53 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "25 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "50 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001370_81001367_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001370_81001367_main.webp",
        "type": "main",
        "filename": "81001370_81001367_main.webp"
      },
      {
        "path": "/images/airco-products/81001370_81001370_dimensions.webp",
        "type": "dimensions",
        "filename": "81001370_81001370_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001370_81001370_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001370_81001370_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001370_81001370_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001370_81001370_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001370_dimensions.webp",
        "type": "dimensions",
        "filename": "81001370_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001370_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001370_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001370_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001370_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001370_81001370_energy.webp",
        "type": "energy",
        "filename": "81001370_81001370_energy.webp"
      },
      {
        "path": "/images/airco-products/81001370_energy.webp",
        "type": "energy",
        "filename": "81001370_energy.webp"
      },
      {
        "path": "/images/airco-products/81001370_81001367_other1.webp",
        "type": "other",
        "filename": "81001370_81001367_other1.webp"
      },
      {
        "path": "/images/airco-products/81001370_81001367_other2.webp",
        "type": "other",
        "filename": "81001370_81001367_other2.webp"
      },
      {
        "path": "/images/airco-products/81001370_81001367_other3.webp",
        "type": "other",
        "filename": "81001370_81001367_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-cassette-airco-met-afdekplaat-ct24f-s-r32-70-kw-set/29604/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001370_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001370_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001370_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001370_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001370_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001389",
    "sku": "LG-UM30F_Compact_SET",
    "name": "LG Mid static Inverter kanaal airco UM30F-Compact R32 8,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "8.0",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG UM30F-C R32 8,0 kW Mid Static Kanaal Inverter biedt een krachtige en stille oplossing voor klimaatbeheersing in zowel commerciële als residentiële ruimtes. Met een koelcapaciteit van 8,0 kW en de efficiënte mid static technologie, levert dit systeem betrouwbare prestaties terwijl het energieverbruik laag blijft. De set bevat zowel een binnen- als buitenunit en biedt flexibele installatieopties dankzij het mid static ontwerp. Dit maakt het ideaal voor verschillende omgevingen.\n\nDe LG UM30F-C R32 Mid Static Kanaal Inverter is ontworpen voor grotere ruimtes zoals kantoren, vergaderruimtes en commerciële toepassingen. Met een koelcapaciteit van 8,0 kW levert dit systeem betrouwbare prestaties in zowel de zomer als de winter, waardoor het het hele jaar door voor een aangenaam binnenklimaat zorgt.\n\nDe binnenunit weegt 26,2 kg en is eenvoudig te installeren, terwijl de buitenunit met een gewicht van 44,5 kg zorgt voor robuuste en betrouwbare prestaties. Met een SEER van 5,6 en een SCOP van 3,9 biedt het systeem uitstekende energieprestaties. De geluidsdruk van de binnenunit is slechts 34 dB(A), wat zorgt voor een stille werking die ideaal is voor rustige omgevingen. Bovendien biedt LG een garantie van 5 jaar, wat extra zekerheid biedt over de duurzaamheid van het systeem.\n\nDe LG UM30F-C R32 Mid Static Kanaal Inverter Binnen- & Buitenunit biedt een uitstekende balans tussen energie-efficiëntie, stille werking en krachtige prestaties. Met een geluidsdruk van slechts 34 dB(A) en een lichtgewicht ontwerp van 26,2 kg voor de binnenunit, is het systeem eenvoudig te installeren en ideaal voor grotere ruimtes. Het gebruik van het milieuvriendelijke R32-koelmiddel maakt dit systeem ook een duurzame keuze voor de toekomst.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": "A+",
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "525",
      "Energielabel": "A+"
    },
    "image": "/images/airco-products/81001389_81001388_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001389_81001388_main.webp",
        "type": "main",
        "filename": "81001389_81001388_main.webp"
      },
      {
        "path": "/images/airco-products/81001389_81001389_dimensions.webp",
        "type": "dimensions",
        "filename": "81001389_81001389_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001389_dimensions.webp",
        "type": "dimensions",
        "filename": "81001389_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001389_81001389_energy.webp",
        "type": "energy",
        "filename": "81001389_81001389_energy.webp"
      },
      {
        "path": "/images/airco-products/81001389_energy.webp",
        "type": "energy",
        "filename": "81001389_energy.webp"
      },
      {
        "path": "/images/airco-products/81001389_81001386_other1.webp",
        "type": "other",
        "filename": "81001389_81001386_other1.webp"
      },
      {
        "path": "/images/airco-products/81001389_81001387_other2.webp",
        "type": "other",
        "filename": "81001389_81001387_other2.webp"
      },
      {
        "path": "/images/airco-products/81001389_81001388_other3.webp",
        "type": "other",
        "filename": "81001389_81001388_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-um30f-compact-r32-80-kw-set/29584/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001389_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001389_Technical_document.pdf",
        "name": "Technical Document"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001389_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001389_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001389_Manual2.pdf",
        "name": "Manual2"
      }
    ]
  },
  {
    "id": "81001397",
    "sku": "LG-UM30F_Standaard_SET",
    "name": "LG Mid static Inverter kanaal airco UM30F-S R32 8,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "8.0",
    "coolingCapacity": "9",
    "heatingCapacity": "10.1",
    "description": "De LG Mid Static Inverter Binnen- & Buitenunit R32 7,8 kW biedt een krachtige en veelzijdige oplossing voor klimaatbeheersing in middelgrote tot grote residentiële en commerciële ruimtes. Met een koelcapaciteit van 7,8 kW en voorzien van geavanceerde invertertechnologie, levert deze unit uitstekende prestaties terwijl het energieverbruik tot een minimum wordt beperkt. Het mid static ontwerp maakt flexibele installatie en optimale integratie mogelijk, zelfs in complexere ruimtes.\n\nDe LG Mid Static Inverter 7,8 kW is ideaal voor grote ruimtes zoals kantoren, vergaderzalen, winkels, en grotere woonkamers. Deze unit biedt betrouwbare koeling tijdens warme zomers en efficiënte verwarming in de winter, waardoor het een veelzijdige keuze is voor gebruik het hele jaar door.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. Dankzij de flexibele installatieopties en het gebruiksvriendelijke ontwerp, kan de unit snel en probleemloos worden geplaatst. LG biedt bovendien een garantie van 5 jaar op de unit, wat extra zekerheid geeft over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Mid Static Inverter 7,8 kW onderscheidt zich door zijn krachtige prestaties, energie-efficiëntie en geavanceerde technologieën. Met functies zoals Auto ESP Control, slimme sensoren, en de optionele UVnano Filter Box, is deze unit een uitstekende keuze voor zowel residentiële als commerciële toepassingen. De lange levensduur, flexibele installatieopties, en het gemak van onderhoud maken deze airconditioner tot een duurzame en kosteneffectieve oplossing voor het beheersen van het binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "270 x 900 x 700 mm",
      "buitenunit": "834 x 950 x 700 mm"
    },
    "energyLabel": "A++",
    "seer": "6.1",
    "scop": null,
    "soundLevel": "37 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.9 kg",
      "Global warming potential (GWP)": "1283",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "25 A",
      "Opgenomen vermogen bij koelen (min)": "0.4 kW",
      "Opgenomen vermogen bij koelen (max)": "3.03 kW",
      "Koelcapaciteit (min)": "3.1 kW",
      "Koelcapaciteit (max)": "9 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.5 kW",
      "Opgenomen vermogen bij verwarmen (max)": "3.33 kW",
      "Verwarmingscapaciteit (min)": "3.6 kW",
      "Verwarmingscapaciteit (max)": "10.1 kW",
      "EER (koeling)": "3.5",
      "COP (verwarming)": "3.41",
      "SEER (koeling)": "6.1",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "448 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "270 mm",
      "Breedte binnenunit": "900 mm",
      "Diepte binnenunit": "700 mm",
      "Gewicht binnenunit": "26.2 kg",
      "Hoogte buitenunit": "834 mm",
      "Breedte buitenunit": "950 mm",
      "Diepte buitenunit": "700 mm",
      "Gewicht buitenunit": "57.7 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "1080 m³/h",
      "Luchtdebiet koelen (max)": "1320 m³/h",
      "Luchtdebiet verwarmen (min)": "1080 m³/h",
      "Luchtdebiet verwarmen (max)": "1320 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "37 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "37 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "62 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "62 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "68 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "68 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "50 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A+++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001397_81001390_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001397_81001390_main.webp",
        "type": "main",
        "filename": "81001397_81001390_main.webp"
      },
      {
        "path": "/images/airco-products/81001397_81001389_dimensions.webp",
        "type": "dimensions",
        "filename": "81001397_81001389_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001397_81001397_energy.webp",
        "type": "energy",
        "filename": "81001397_81001397_energy.webp"
      },
      {
        "path": "/images/airco-products/81001397_energy.webp",
        "type": "energy",
        "filename": "81001397_energy.webp"
      },
      {
        "path": "/images/airco-products/81001397_81001397_other1.webp",
        "type": "other",
        "filename": "81001397_81001397_other1.webp"
      },
      {
        "path": "/images/airco-products/81001397_81001397_other2.webp",
        "type": "other",
        "filename": "81001397_81001397_other2.webp"
      },
      {
        "path": "/images/airco-products/81001397_81001397_other3.webp",
        "type": "other",
        "filename": "81001397_81001397_other3.webp"
      },
      {
        "path": "/images/airco-products/81001397_81001397_other4.webp",
        "type": "other",
        "filename": "81001397_81001397_other4.webp"
      },
      {
        "path": "/images/airco-products/81001397_other1.webp",
        "type": "other",
        "filename": "81001397_other1.webp"
      },
      {
        "path": "/images/airco-products/81001397_other2.webp",
        "type": "other",
        "filename": "81001397_other2.webp"
      },
      {
        "path": "/images/airco-products/81001397_other3.webp",
        "type": "other",
        "filename": "81001397_other3.webp"
      },
      {
        "path": "/images/airco-products/81001397_other4.webp",
        "type": "other",
        "filename": "81001397_other4.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-um30f-s-r32-80-kw-set/29576/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001397_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001397_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001397_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001397_Technical_document.pdf",
        "name": "Technical Document"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001397_Energy_label.pdf",
        "name": "Energy Label"
      }
    ]
  },
  {
    "id": "81001390",
    "sku": "LG-UM36F_Compact_SET",
    "name": "LG Mid static Inverter kanaal airco UM36F-Compact R32 9,5 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "9.5",
    "coolingCapacity": null,
    "heatingCapacity": null,
    "description": "De LG UM36F-C R32 9,5 kW Mid Static Kanaal Inverter biedt een krachtige en efficiënte oplossing voor klimaatbeheersing in zowel commerciële als residentiële ruimtes. Met een koelcapaciteit van 9,5 kW en de geavanceerde mid static technologie, zorgt dit systeem voor betrouwbare prestaties met een laag energieverbruik. De set bevat zowel een binnen- als buitenunit, wat zorgt voor een compleet en efficiënt systeem dat geschikt is voor verschillende installatieopties dankzij het mid static ontwerp.\n\nDe LG UM36F-C R32 Mid Static Kanaal Inverter is ontworpen voor grotere ruimtes zoals kantoren, vergaderruimtes en commerciële toepassingen. Met een koelcapaciteit van 9,5 kW biedt dit systeem betrouwbare prestaties het hele jaar door, waardoor het perfect is voor zowel de zomer als de winter.\n\nDe binnenunit weegt 38,5 kg en is eenvoudig te installeren, terwijl de buitenunit met een gewicht van 57,7 kg robuuste prestaties levert. Met een SEER van 5,9 en een SCOP van 4,0 biedt het systeem uitstekende energieprestaties, waardoor energiekosten laag blijven. De geluidsdruk van de binnenunit is slechts 33 dB(A), wat het ideaal maakt voor stille omgevingen. Daarnaast biedt LG een garantie van 5 jaar, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG UM36F-C R32 Mid Static Kanaal Inverter Binnen- & Buitenunit biedt een krachtige combinatie van energie-efficiëntie, stille werking en betrouwbare prestaties. Met een geluidsdruk van slechts 33 dB(A) en een lichtgewicht binnenunit van 38,5 kg, is dit systeem eenvoudig te installeren en perfect voor grotere ruimtes. Het gebruik van het R32-koelmiddel maakt het bovendien een milieuvriendelijke en toekomstbestendige keuze.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": null,
      "buitenunit": null
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": null,
    "specifications": {
      "Categoriecode": "525"
    },
    "image": "/images/airco-products/81001390_81001390_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001390_81001390_main.webp",
        "type": "main",
        "filename": "81001390_81001390_main.webp"
      },
      {
        "path": "/images/airco-products/81001390_main.webp",
        "type": "main",
        "filename": "81001390_main.webp"
      },
      {
        "path": "/images/airco-products/81001390_81001390_dimensions.webp",
        "type": "dimensions",
        "filename": "81001390_81001390_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001390_dimensions.webp",
        "type": "dimensions",
        "filename": "81001390_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001390_81001390_other1.webp",
        "type": "other",
        "filename": "81001390_81001390_other1.webp"
      },
      {
        "path": "/images/airco-products/81001390_81001390_other2.webp",
        "type": "other",
        "filename": "81001390_81001390_other2.webp"
      },
      {
        "path": "/images/airco-products/81001390_81001390_other3.webp",
        "type": "other",
        "filename": "81001390_81001390_other3.webp"
      },
      {
        "path": "/images/airco-products/81001390_other1.webp",
        "type": "other",
        "filename": "81001390_other1.webp"
      },
      {
        "path": "/images/airco-products/81001390_other2.webp",
        "type": "other",
        "filename": "81001390_other2.webp"
      },
      {
        "path": "/images/airco-products/81001390_other3.webp",
        "type": "other",
        "filename": "81001390_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-um36f-compact-r32-95-kw-set/29583/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001390_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001390_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001390_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001390_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001398",
    "sku": "LG-UM36F_Standaard_SET",
    "name": "LG Mid static Inverter kanaal airco UM36F-S R32 9,5 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "9.5",
    "coolingCapacity": "12.5",
    "heatingCapacity": "13.4",
    "description": "De LG Mid Static Inverter Binnen- & Buitenunit R32 9,5 kW biedt een krachtige en veelzijdige oplossing voor klimaatbeheersing in middelgrote tot grote residentiële en commerciële ruimtes. Met een koelcapaciteit van 9,5 kW en voorzien van geavanceerde invertertechnologie, levert deze unit uitstekende prestaties terwijl het energieverbruik tot een minimum wordt beperkt. Het mid static ontwerp maakt flexibele installatie en optimale integratie mogelijk, zelfs in complexere ruimtes.\n\nDe LG Mid Static Inverter 9,5 kW is ideaal voor grote ruimtes zoals kantoren, vergaderzalen, winkels, en grotere woonkamers. Deze unit biedt betrouwbare koeling tijdens warme zomers en efficiënte verwarming in de winter, waardoor het een veelzijdige keuze is voor gebruik het hele jaar door.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. Dankzij de flexibele installatieopties en het gebruiksvriendelijke ontwerp, kan de unit snel en probleemloos worden geplaatst. LG biedt bovendien een garantie van 5 jaar op de unit, wat extra zekerheid geeft over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Mid Static Inverter 9,5 kW onderscheidt zich door zijn krachtige prestaties, energie-efficiëntie en geavanceerde technologieën. Met functies zoals Auto ESP Control, slimme sensoren, en de optionele UVnano Filter Box, is deze unit een uitstekende keuze voor zowel residentiële als commerciële toepassingen. De lange levensduur, flexibele installatieopties, en het gemak van onderhoud maken deze airconditioner tot een duurzame en kosteneffectieve oplossing voor het beheersen van het binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "270 x 1250 x 700 mm",
      "buitenunit": "1380 x 950 x 330 mm"
    },
    "energyLabel": "A+",
    "seer": "5.8",
    "scop": null,
    "soundLevel": "36 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "3 kg",
      "Global warming potential (GWP)": "2025",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "400 V",
      "Aantal fasen": "3",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "0.5 kW",
      "Opgenomen vermogen bij koelen (max)": "3.8 kW",
      "Koelcapaciteit (min)": "3.8 kW",
      "Koelcapaciteit (max)": "12.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.6 kW",
      "Opgenomen vermogen bij verwarmen (max)": "3.77 kW",
      "Verwarmingscapaciteit (min)": "4.3 kW",
      "Verwarmingscapaciteit (max)": "13.4 kW",
      "EER (koeling)": "3.8",
      "COP (verwarming)": "3.9",
      "SEER (koeling)": "5.8",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "573 kWh",
      "Energie-efficiëntieklasse koelen": "A+",
      "Hoogte binnenunit": "270 mm",
      "Breedte binnenunit": "1250 mm",
      "Diepte binnenunit": "700 mm",
      "Gewicht binnenunit": "38.5 kg",
      "Hoogte buitenunit": "1380 mm",
      "Breedte buitenunit": "950 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "85 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "1440 m³/h",
      "Luchtdebiet koelen (max)": "1920 m³/h",
      "Luchtdebiet verwarmen (min)": "1440 m³/h",
      "Luchtdebiet verwarmen (max)": "1920 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "33 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "33 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "36 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "50 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "50 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "66 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "66 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.9 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "52 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "25 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "85 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001398_81001398_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001398_81001398_main.webp",
        "type": "main",
        "filename": "81001398_81001398_main.webp"
      },
      {
        "path": "/images/airco-products/81001398_main.webp",
        "type": "main",
        "filename": "81001398_main.webp"
      },
      {
        "path": "/images/airco-products/81001398_81001398_dimensions.webp",
        "type": "dimensions",
        "filename": "81001398_81001398_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001398_dimensions.webp",
        "type": "dimensions",
        "filename": "81001398_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001398_81001372_other2.webp",
        "type": "other",
        "filename": "81001398_81001372_other2.webp"
      },
      {
        "path": "/images/airco-products/81001398_81001397_other2.webp",
        "type": "other",
        "filename": "81001398_81001397_other2.webp"
      },
      {
        "path": "/images/airco-products/81001398_81001397_other3.webp",
        "type": "other",
        "filename": "81001398_81001397_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-um36f-s-r32-95-kw-set/29575/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001398_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001398_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001398_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001398_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001399",
    "sku": "LG-UM42F_Standaard_SET",
    "name": "LG Mid static Inverter kanaal airco UM42F-S R32 12,0 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "12.0",
    "coolingCapacity": "14",
    "heatingCapacity": "15.8",
    "description": "De LG Mid Static Inverter Binnen- & Buitenunit R32 12,0 kW biedt een krachtige en veelzijdige oplossing voor klimaatbeheersing in middelgrote tot grote residentiële en commerciële ruimtes. Met een koelcapaciteit van 9,5 kW en voorzien van geavanceerde invertertechnologie, levert deze unit uitstekende prestaties terwijl het energieverbruik tot een minimum wordt beperkt. Het mid static ontwerp maakt flexibele installatie en optimale integratie mogelijk, zelfs in complexere ruimtes.\n\nDe LG Mid Static Inverter 12,0 kW is ideaal voor grote ruimtes zoals kantoren, vergaderzalen, winkels, en grotere woonkamers. Deze unit biedt betrouwbare koeling tijdens warme zomers en efficiënte verwarming in de winter, waardoor het een veelzijdige keuze is voor gebruik het hele jaar door.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. Dankzij de flexibele installatieopties en het gebruiksvriendelijke ontwerp, kan de unit snel en probleemloos worden geplaatst. LG biedt bovendien een garantie van 5 jaar op de unit, wat extra zekerheid geeft over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Mid Static Inverter 12,0 kW onderscheidt zich door zijn krachtige prestaties, energie-efficiëntie en geavanceerde technologieën. Met functies zoals Auto ESP Control, slimme sensoren, en de optionele UVnano Filter Box, is deze unit een uitstekende keuze voor zowel residentiële als commerciële toepassingen. De lange levensduur, flexibele installatieopties, en het gemak van onderhoud maken deze airconditioner tot een duurzame en kosteneffectieve oplossing voor het beheersen van het binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "270 x 1250 x 700 mm",
      "buitenunit": "1280 x 950 x 330 mm"
    },
    "energyLabel": "A+",
    "seer": "5.6",
    "scop": null,
    "soundLevel": "38 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "3 kg",
      "Global warming potential (GWP)": "2025",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "0.7 kW",
      "Opgenomen vermogen bij koelen (max)": "4.52 kW",
      "Koelcapaciteit (min)": "4.8 kW",
      "Koelcapaciteit (max)": "14 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.8 kW",
      "Opgenomen vermogen bij verwarmen (max)": "4.86 kW",
      "Verwarmingscapaciteit (min)": "5.4 kW",
      "Verwarmingscapaciteit (max)": "15.8 kW",
      "EER (koeling)": "3.45",
      "COP (verwarming)": "3.61",
      "SEER (koeling)": "5.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "750 kWh",
      "Energie-efficiëntieklasse koelen": "A+",
      "Hoogte binnenunit": "270 mm",
      "Breedte binnenunit": "1250 mm",
      "Diepte binnenunit": "700 mm",
      "Gewicht binnenunit": "38.5 kg",
      "Hoogte buitenunit": "1280 mm",
      "Breedte buitenunit": "950 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "85 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "1680 m³/h",
      "Luchtdebiet koelen (max)": "2280 m³/h",
      "Luchtdebiet verwarmen (min)": "1680 m³/h",
      "Luchtdebiet verwarmen (max)": "2280 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "38 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "38 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "62 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "62 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "69 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "69 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "4.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "52 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "25 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "85 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001399_81001398_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001399_81001398_main.webp",
        "type": "main",
        "filename": "81001399_81001398_main.webp"
      },
      {
        "path": "/images/airco-products/81001399_81001372_other2.webp",
        "type": "other",
        "filename": "81001399_81001372_other2.webp"
      },
      {
        "path": "/images/airco-products/81001399_81001397_other2.webp",
        "type": "other",
        "filename": "81001399_81001397_other2.webp"
      },
      {
        "path": "/images/airco-products/81001399_81001397_other3.webp",
        "type": "other",
        "filename": "81001399_81001397_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-um42f-s-r32-120-kw-set/29574/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001399_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001399_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001399_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001400",
    "sku": "LG-UM48F_Standaard_SET",
    "name": "LG Mid static Inverter kanaal airco UM48F-S R32 13,4 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "13.4",
    "coolingCapacity": "15.7",
    "heatingCapacity": "17.5",
    "description": "De LG Mid Static Inverter Binnen- & Buitenunit R32 13,4 kW biedt een krachtige en veelzijdige oplossing voor klimaatbeheersing in middelgrote tot grote residentiële en commerciële ruimtes. Met een koelcapaciteit van 13,4 kW en voorzien van geavanceerde invertertechnologie, levert deze unit uitstekende prestaties terwijl het energieverbruik tot een minimum wordt beperkt. Het mid static ontwerp maakt flexibele installatie en optimale integratie mogelijk, zelfs in complexere ruimtes.\n\nDe LG Mid Static Inverter 13,4 kW is ideaal voor grote ruimtes zoals kantoren, vergaderzalen, winkels, en grotere woonkamers. Deze unit biedt betrouwbare koeling tijdens warme zomers en efficiënte verwarming in de winter, waardoor het een veelzijdige keuze is voor gebruik het hele jaar door.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. Dankzij de flexibele installatieopties en het gebruiksvriendelijke ontwerp, kan de unit snel en probleemloos worden geplaatst. LG biedt bovendien een garantie van 5 jaar op de unit, wat extra zekerheid geeft over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Mid Static Inverter 13,4 kW onderscheidt zich door zijn krachtige prestaties, energie-efficiëntie en geavanceerde technologieën. Met functies zoals Auto ESP Control, slimme sensoren, en de optionele UVnano Filter Box, is deze unit een uitstekende keuze voor zowel residentiële als commerciële toepassingen. De lange levensduur, flexibele installatieopties, en het gemak van onderhoud maken deze airconditioner tot een duurzame en kosteneffectieve oplossing voor het beheersen van het binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "360 x 1250 x 700 mm",
      "buitenunit": "1380 x 950 x 330 mm"
    },
    "energyLabel": null,
    "seer": "5.8",
    "scop": null,
    "soundLevel": "39 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "3 kg",
      "Global warming potential (GWP)": "2025",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "0.9 kW",
      "Opgenomen vermogen bij koelen (max)": "5.62 kW",
      "Koelcapaciteit (min)": "5.4 kW",
      "Koelcapaciteit (max)": "15.7 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.9 kW",
      "Opgenomen vermogen bij verwarmen (max)": "5.26 kW",
      "Verwarmingscapaciteit (min)": "6.2 kW",
      "Verwarmingscapaciteit (max)": "17.5 kW",
      "EER (koeling)": "3.1",
      "COP (verwarming)": "3.6",
      "SEER (koeling)": "5.8",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "1386 kWh",
      "Hoogte binnenunit": "360 mm",
      "Breedte binnenunit": "1250 mm",
      "Diepte binnenunit": "700 mm",
      "Gewicht binnenunit": "43.5 kg",
      "Hoogte buitenunit": "1380 mm",
      "Breedte buitenunit": "950 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "85 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "1680 m³/h",
      "Luchtdebiet koelen (max)": "2400 m³/h",
      "Luchtdebiet verwarmen (min)": "1680 m³/h",
      "Luchtdebiet verwarmen (max)": "2400 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "39 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "65 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "53 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "53 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "69 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "69 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "4.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "52 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "25 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "85 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001400_81001398_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001400_81001398_main.webp",
        "type": "main",
        "filename": "81001400_81001398_main.webp"
      },
      {
        "path": "/images/airco-products/81001400_81001372_other2.webp",
        "type": "other",
        "filename": "81001400_81001372_other2.webp"
      },
      {
        "path": "/images/airco-products/81001400_81001397_other2.webp",
        "type": "other",
        "filename": "81001400_81001397_other2.webp"
      },
      {
        "path": "/images/airco-products/81001400_81001397_other3.webp",
        "type": "other",
        "filename": "81001400_81001397_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-um48f-s-r32-134-kw-set/29573/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001400_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001400_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001400_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001401",
    "sku": "LG-UM60F_Standaard_SET",
    "name": "LG Mid static Inverter kanaal airco UM60F-S R32 14,6 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "14.6",
    "coolingCapacity": "15.8",
    "heatingCapacity": "18.1",
    "description": "De LG Mid Static Inverter Binnen- & Buitenunit R32 14,6 kW biedt een krachtige en veelzijdige oplossing voor klimaatbeheersing in middelgrote tot grote residentiële en commerciële ruimtes. Met een koelcapaciteit van 14,6 kW en voorzien van geavanceerde invertertechnologie, levert deze unit uitstekende prestaties terwijl het energieverbruik tot een minimum wordt beperkt. Het mid static ontwerp maakt flexibele installatie en optimale integratie mogelijk, zelfs in complexere ruimtes.\n\nDe LG Mid Static Inverter 14,6 kW is ideaal voor grote ruimtes zoals kantoren, vergaderzalen, winkels, en grotere woonkamers. Deze unit biedt betrouwbare koeling tijdens warme zomers en efficiënte verwarming in de winter, waardoor het een veelzijdige keuze is voor gebruik het hele jaar door.\n\nDeze airconditioner is ontworpen voor eenvoudige installatie en onderhoud. Dankzij de flexibele installatieopties en het gebruiksvriendelijke ontwerp, kan de unit snel en probleemloos worden geplaatst. LG biedt bovendien een garantie van 5 jaar op de unit, wat extra zekerheid geeft over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe LG Mid Static Inverter 14,6 kW onderscheidt zich door zijn krachtige prestaties, energie-efficiëntie en geavanceerde technologieën. Met functies zoals Auto ESP Control, slimme sensoren, en de optionele UVnano Filter Box, is deze unit een uitstekende keuze voor zowel residentiële als commerciële toepassingen. De lange levensduur, flexibele installatieopties, en het gemak van onderhoud maken deze airconditioner tot een duurzame en kosteneffectieve oplossing voor het beheersen van het binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "360 x 1250 x 700 mm",
      "buitenunit": "1380 x 950 x 330 mm"
    },
    "energyLabel": null,
    "seer": "5.6",
    "scop": null,
    "soundLevel": "42 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "3 kg",
      "Global warming potential (GWP)": "2025",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "1 kW",
      "Opgenomen vermogen bij koelen (max)": "5.54 kW",
      "Koelcapaciteit (min)": "5.8 kW",
      "Koelcapaciteit (max)": "15.8 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.9 kW",
      "Opgenomen vermogen bij verwarmen (max)": "5.29 kW",
      "Verwarmingscapaciteit (min)": "6.7 kW",
      "Verwarmingscapaciteit (max)": "18.1 kW",
      "EER (koeling)": "2.95",
      "COP (verwarming)": "3.65",
      "SEER (koeling)": "5.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "1564 kWh",
      "Hoogte binnenunit": "360 mm",
      "Breedte binnenunit": "1250 mm",
      "Diepte binnenunit": "700 mm",
      "Gewicht binnenunit": "43.5 kg",
      "Hoogte buitenunit": "1380 mm",
      "Breedte buitenunit": "950 mm",
      "Diepte buitenunit": "330 mm",
      "Gewicht buitenunit": "85 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "2400 m³/h",
      "Luchtdebiet koelen (max)": "3000 m³/h",
      "Luchtdebiet verwarmen (min)": "2400 m³/h",
      "Luchtdebiet verwarmen (max)": "3000 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "42 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "42 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "66 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "66 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "54 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "71 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "71 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "4.7 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "52 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "25 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "85 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Plafondinbouw (kanaal)"
    },
    "image": "/images/airco-products/81001401_81001398_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001401_81001398_main.webp",
        "type": "main",
        "filename": "81001401_81001398_main.webp"
      },
      {
        "path": "/images/airco-products/81001401_81001372_other2.webp",
        "type": "other",
        "filename": "81001401_81001372_other2.webp"
      },
      {
        "path": "/images/airco-products/81001401_81001397_other2.webp",
        "type": "other",
        "filename": "81001401_81001397_other2.webp"
      },
      {
        "path": "/images/airco-products/81001401_81001397_other3.webp",
        "type": "other",
        "filename": "81001401_81001397_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-mid-static-inverter-kanaal-airco-um60f-s-r32-146-kw-set/29572/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001401_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001401_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001401_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001402",
    "sku": "LG-UQ09_Standaard_SET",
    "name": "LG Console Inverter wand airco UQ09-S R32 2,5 kW set",
    "brand": "LG",
    "type": "commercieel",
    "category": "LG Commercieel",
    "capacity": "2.5",
    "coolingCapacity": "3.4",
    "heatingCapacity": "3.9",
    "description": "De LG Console Inverter Binnen- & Buitenunit R32 2,6 kW is een compacte en efficiënte oplossing voor klimaatbeheersing in kleinere residentiële en commerciële ruimtes. Deze unit combineert geavanceerde invertertechnologie met een koelcapaciteit van 2,6 kW, wat resulteert in optimale prestaties met een minimaal energieverbruik. Dankzij het slanke console-ontwerp is deze unit ideaal voor plaatsing tegen de muur of laag op de vloer, wat zorgt voor een discrete en stijlvolle integratie in elke ruimte.\n\nDe LG Console Inverter 2,6 kW is uitermate geschikt voor kleinere ruimtes tot 30 m², zoals kantoren, slaapkamers, of kleine winkels. De unit zorgt voor betrouwbare koeling in de zomer en effectieve verwarming in de winter, waardoor het een veelzijdige keuze is voor elk seizoen.\n\nOntworpen met gebruiksgemak in gedachten, wordt deze unit geleverd met een complete installatiekit en een gedetailleerde handleiding, wat een snelle en eenvoudige installatie mogelijk maakt. Bovendien biedt LG een garantie van 5 jaar op de unit, wat extra zekerheid biedt over de duurzaamheid en betrouwbaarheid van het systeem.\n\nDe De LG Console Inverter 2,6 kW is een compacte en efficiënte oplossing voor klimaatbeheersing in kleinere residentiële en commerciële ruimtes. Deze unit combineert geavanceerde invertertechnologie met een koelcapaciteit van 2,6 kW, wat resulteert in optimale prestaties met een minimaal energieverbruik. Dankzij het slanke console-ontwerp is deze unit ideaal voor plaatsing tegen de muur of laag op de vloer, wat zorgt voor een discrete en stijlvolle integratie in elke ruimte. Met zijn energiezuinige prestaties en milieuvriendelijk R32 koelmiddel is deze unit een uitstekende keuze voor zowel residentiële als lichte commerciële toepassingen. Het ontwerp, gericht op eenvoud in installatie en onderhoud, maakt dit product tot een praktische en kosteneffectieve oplossing voor het creëren van een comfortabel binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "600 x 700 x 210 mm",
      "buitenunit": "545 x 770 x 288 mm"
    },
    "energyLabel": "A++",
    "seer": "6.5",
    "scop": null,
    "soundLevel": "38 dB(A)",
    "specifications": {
      "Categoriecode": "525",
      "Model (binnenunit)": "Wand (laag)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1 kg",
      "Global warming potential (GWP)": "675",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "15 A",
      "Koelcapaciteit (min)": "1.5 kW",
      "Koelcapaciteit (max)": "3.4 kW",
      "Opgenomen vermogen bij verwarmen (min)": "0.3 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.08 kW",
      "Verwarmingscapaciteit (min)": "1.6 kW",
      "Verwarmingscapaciteit (max)": "3.9 kW",
      "EER (koeling)": "4",
      "COP (verwarming)": "4.2",
      "SEER (koeling)": "6.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "140 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "600 mm",
      "Breedte binnenunit": "700 mm",
      "Diepte binnenunit": "210 mm",
      "Gewicht binnenunit": "16.3 kg",
      "Hoogte buitenunit": "545 mm",
      "Breedte buitenunit": "770 mm",
      "Diepte buitenunit": "288 mm",
      "Gewicht buitenunit": "33.3 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "300 m³/h",
      "Luchtdebiet koelen (max)": "510 m³/h",
      "Luchtdebiet verwarmen (min)": "300 m³/h",
      "Luchtdebiet verwarmen (max)": "510 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "38 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "27 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "38 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.7 l/h",
      "Uitwendige buisdiameter condensafvoer": "12.2 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-15 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "50 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-18 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "20 °C",
      "Min. leidinglengte": "5 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Energielabel": "A++",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001402_81001402_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001402_81001402_main.webp",
        "type": "main",
        "filename": "81001402_81001402_main.webp"
      },
      {
        "path": "/images/airco-products/81001402_main.webp",
        "type": "main",
        "filename": "81001402_main.webp"
      },
      {
        "path": "/images/airco-products/81001402_81001367_dimensions.webp",
        "type": "dimensions",
        "filename": "81001402_81001367_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001402_81001367_dimensions3.webp",
        "type": "dimensions",
        "filename": "81001402_81001367_dimensions3.webp"
      },
      {
        "path": "/images/airco-products/81001402_81001402_dimensions.webp",
        "type": "dimensions",
        "filename": "81001402_81001402_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001402_dimensions.webp",
        "type": "dimensions",
        "filename": "81001402_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001402_81001402_energy.webp",
        "type": "energy",
        "filename": "81001402_81001402_energy.webp"
      },
      {
        "path": "/images/airco-products/81001402_energy.webp",
        "type": "energy",
        "filename": "81001402_energy.webp"
      },
      {
        "path": "/images/airco-products/81001402_81001367_other3.webp",
        "type": "other",
        "filename": "81001402_81001367_other3.webp"
      },
      {
        "path": "/images/airco-products/81001402_81001402_other1.webp",
        "type": "other",
        "filename": "81001402_81001402_other1.webp"
      },
      {
        "path": "/images/airco-products/81001402_81001402_other3.webp",
        "type": "other",
        "filename": "81001402_81001402_other3.webp"
      },
      {
        "path": "/images/airco-products/81001402_other1.webp",
        "type": "other",
        "filename": "81001402_other1.webp"
      },
      {
        "path": "/images/airco-products/81001402_other3.webp",
        "type": "other",
        "filename": "81001402_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/lg-console-inverter-wand-airco-uq09-s-r32-25-kw-set/29571/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001402_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001402_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001402_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001402_Product_sheet.pdf",
        "name": "Product Sheet"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001402_Product_sheet2.pdf",
        "name": "Product Sheet2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001402_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001460",
    "sku": "AKTIE-CTS-12R-SET",
    "name": "Tosot by GREE Inverter Cassette airco CTS-12R R32 3,5 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "3.5",
    "coolingCapacity": "3.5",
    "heatingCapacity": "4",
    "description": "De TOSOT CTS-12R 3,5 kW R32 Inverter Cassette Set by GREE biedt een compacte en efficiënte oplossing voor klimaatbeheersing in kleinere tot middelgrote ruimtes. Met een koelvermogen van 3,5 kW is deze cassette set perfect geschikt voor ruimtes zoals kantoren, slaapkamers, en kleinere commerciële omgevingen. De unit maakt gebruik van geavanceerde invertertechnologie om een nauwkeurige en energiezuinige temperatuurregeling te bieden. Met een SEER van 6,5 en een SCOP van 4,0 garandeert deze unit uitstekende prestaties, zowel tijdens het koelen in de zomer als bij verwarming in de winter. De cassette heeft een energielabel van A++ voor koelen en A+ voor verwarmen, wat bijdraagt aan lagere energiekosten. Bovendien werkt de unit uiterst stil met een geluidsniveau van slechts 29 dB, wat ideaal is voor stille omgevingen.\n\nDe TOSOT CTS-12R is ideaal voor kleinere tot middelgrote ruimtes waar een efficiënte en stille klimaatoplossing vereist is. Of het nu gaat om het koelen van een thuiskantoor of het verwarmen van een slaapkamer, deze unit zorgt voor een comfortabele en gelijkmatige temperatuur zonder inbreuk te maken op de rust van de omgeving.\n\nDe installatie van deze cassette unit is eenvoudig en snel, met alle benodigde onderdelen en een duidelijke handleiding inbegrepen. De unit kan naadloos in het plafond worden geïntegreerd, waardoor de ruimte een strakke en opgeruimde uitstraling behoudt.\n\nDe TOSOT CTS-12R 3,5 kW R32 Inverter Cassette Set by GREE combineert compactheid, energie-efficiëntie en stille werking in een hoogwaardig ontwerp. Met een SEER van 6,5 en een SCOP van 4,0 levert deze unit betrouwbare prestaties, het hele jaar door. Het lage geluidsniveau van 29 dB maakt het systeem ideaal voor gebruik in omgevingen waar stilte en comfort essentieel zijn. Daarnaast zorgt het gebruik van het milieuvriendelijke R32 koelmiddel ervoor dat deze unit niet alleen effectief, maar ook duurzaam is. Dit maakt het tot een uitstekende keuze voor wie op zoek is naar een subtiele en efficiënte klimaatoplossing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "570 x 570 x 260 mm",
      "buitenunit": "553 x 675 x 285 mm"
    },
    "energyLabel": "A++",
    "seer": "6.5",
    "scop": null,
    "soundLevel": "35 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Cassette (4-zijdig)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.57 kg",
      "Global warming potential (GWP)": "385",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "1 kW",
      "Opgenomen vermogen bij koelen (max)": "1 kW",
      "Koelcapaciteit (min)": "3.5 kW",
      "Koelcapaciteit (max)": "3.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.03 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.03 kW",
      "Verwarmingscapaciteit (min)": "4 kW",
      "Verwarmingscapaciteit (max)": "4 kW",
      "SEER (koeling)": "6.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "189 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "570 mm",
      "Breedte binnenunit": "570 mm",
      "Diepte binnenunit": "260 mm",
      "Gewicht binnenunit": "16.5 kg",
      "Hoogte buitenunit": "553 mm",
      "Breedte buitenunit": "675 mm",
      "Diepte buitenunit": "285 mm",
      "Gewicht buitenunit": "24.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "600 m³/h",
      "Luchtdebiet koelen (max)": "600 m³/h",
      "Luchtdebiet verwarmen (min)": "600 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "29 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "35 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "29 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "35 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "47 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "47 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "48 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "56 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.95 l/h",
      "Uitwendige buisdiameter condensafvoer": "25 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "15 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001460_81001460_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001460_81001460_main.webp",
        "type": "main",
        "filename": "81001460_81001460_main.webp"
      },
      {
        "path": "/images/airco-products/81001460_main.webp",
        "type": "main",
        "filename": "81001460_main.webp"
      },
      {
        "path": "/images/airco-products/81001460_81001460_dimensions.webp",
        "type": "dimensions",
        "filename": "81001460_81001460_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001460_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001460_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001460_dimensions.webp",
        "type": "dimensions",
        "filename": "81001460_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001460_81001460_energy.webp",
        "type": "energy",
        "filename": "81001460_81001460_energy.webp"
      },
      {
        "path": "/images/airco-products/81001460_energy.webp",
        "type": "energy",
        "filename": "81001460_energy.webp"
      },
      {
        "path": "/images/airco-products/81001460_81001460_other1.webp",
        "type": "other",
        "filename": "81001460_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001460_81001460_other2.webp",
        "type": "other",
        "filename": "81001460_81001460_other2.webp"
      },
      {
        "path": "/images/airco-products/81001460_81001460_other3.webp",
        "type": "other",
        "filename": "81001460_81001460_other3.webp"
      },
      {
        "path": "/images/airco-products/81001460_other1.webp",
        "type": "other",
        "filename": "81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001460_other2.webp",
        "type": "other",
        "filename": "81001460_other2.webp"
      },
      {
        "path": "/images/airco-products/81001460_other3.webp",
        "type": "other",
        "filename": "81001460_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-cassette-airco-cts-12r-r32-35-kw-set/29626/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001460_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001460_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001460_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001460_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001460_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001460_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001461",
    "sku": "AKTIE-CTS-18R-SET",
    "name": "Tosot by GREE Inverter Cassette airco CTS-18R R32 5,0 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "5.0",
    "coolingCapacity": "5.3",
    "heatingCapacity": "5",
    "description": "De TOSOT CTS-18R 5,0 kW R32 Inverter Cassette Set by GREE is een ideale oplossing voor effectieve klimaatbeheersing in middelgrote ruimtes. Deze unit, met een koelvermogen van 5,0 kW, combineert kracht en efficiëntie, waardoor het een betrouwbare keuze is voor zowel residentiële als commerciële omgevingen. Dankzij de geavanceerde invertertechnologie biedt de cassette nauwkeurige temperatuurregeling en consistente prestaties, met een SEER van 6,3 en een SCOP van 4,0. Dit maakt de unit zeer energiezuinig, ondersteund door een A++ energielabel voor koeling en een A+ label voor verwarming. Bovendien is de unit ontworpen om stil te werken, met een geluidsniveau van slechts 35 dB, wat zorgt voor een comfortabele en rustige omgeving.\n\nDe TOSOT CTS-18R is perfect voor het koelen en verwarmen van middelgrote ruimtes zoals kantoren, winkels, en woonkamers. Het cassetteontwerp zorgt voor een efficiënte luchtverdeling, wat leidt tot een gelijkmatige temperatuur in de hele ruimte, zonder opvallende en storende apparatuur.\n\nDeze cassette unit is ontworpen om eenvoudig te installeren, met alle benodigde onderdelen en een duidelijke handleiding inbegrepen. De mogelijkheid om de unit discreet in het plafond te integreren, maakt het een aantrekkelijke keuze voor ruimtes waar esthetiek en functionaliteit samenkomen.\n\nDe TOSOT CTS-18R 5,0 kW R32 Inverter Cassette Set by GREE biedt een optimale combinatie van prestaties, energie-efficiëntie en stille werking. Met een SEER van 6,3 en een SCOP van 4,0, levert deze unit consistente en betrouwbare prestaties gedurende het hele jaar. Het lage geluidsniveau van 35 dB zorgt ervoor dat de unit vrijwel onhoorbaar functioneert, waardoor hij geschikt is voor uiteenlopende toepassingen, van commerciële omgevingen tot privéwoningen. Daarnaast maakt het gebruik van het milieuvriendelijke R32 koelmiddel deze unit tot een verantwoorde en kostenefficiënte keuze voor iedereen die op zoek is naar hoogwaardige klimaatbeheersing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "570 x 570 x 360 mm",
      "buitenunit": "555 x 745 x 300 mm"
    },
    "energyLabel": "A++",
    "seer": "6.3",
    "scop": null,
    "soundLevel": "41 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Cassette (4-zijdig)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.85 kg",
      "Global warming potential (GWP)": "574",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "1.54 kW",
      "Opgenomen vermogen bij koelen (max)": "1.54 kW",
      "Koelcapaciteit (min)": "5.3 kW",
      "Koelcapaciteit (max)": "5.3 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.47 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.47 kW",
      "Verwarmingscapaciteit (min)": "5 kW",
      "Verwarmingscapaciteit (max)": "5 kW",
      "SEER (koeling)": "6.3",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "294 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "570 mm",
      "Breedte binnenunit": "570 mm",
      "Diepte binnenunit": "360 mm",
      "Gewicht binnenunit": "16.5 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "745 mm",
      "Diepte buitenunit": "300 mm",
      "Gewicht buitenunit": "30.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "720 m³/h",
      "Luchtdebiet koelen (max)": "720 m³/h",
      "Luchtdebiet verwarmen (min)": "720 m³/h",
      "Luchtdebiet verwarmen (max)": "720 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "35 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "41 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "35 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "41 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.8 l/h",
      "Uitwendige buisdiameter condensafvoer": "25 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "20 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001461_81001460_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001461_81001460_main.webp",
        "type": "main",
        "filename": "81001461_81001460_main.webp"
      },
      {
        "path": "/images/airco-products/81001461_81001460_dimensions.webp",
        "type": "dimensions",
        "filename": "81001461_81001460_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001461_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001461_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001461_81001461_energy.webp",
        "type": "energy",
        "filename": "81001461_81001461_energy.webp"
      },
      {
        "path": "/images/airco-products/81001461_energy.webp",
        "type": "energy",
        "filename": "81001461_energy.webp"
      },
      {
        "path": "/images/airco-products/81001461_81001460_other1.webp",
        "type": "other",
        "filename": "81001461_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001461_81001460_other2.webp",
        "type": "other",
        "filename": "81001461_81001460_other2.webp"
      },
      {
        "path": "/images/airco-products/81001461_81001460_other3.webp",
        "type": "other",
        "filename": "81001461_81001460_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-cassette-airco-cts-18r-r32-50-kw-set/29553/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001461_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001461_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001461_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001461_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001461_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001461_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001462",
    "sku": "AKTIE-CTS-24R-SET",
    "name": "Tosot by GREE Inverter Cassette airco CTS-24R R32 7,0 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "7.0",
    "coolingCapacity": "7.1",
    "heatingCapacity": "7.1",
    "description": "De TOSOT CTS-24R 7,0 kW R32 Inverter Cassette Set by GREE is ontworpen voor effectieve en energiezuinige klimaatbeheersing in middelgrote tot grote ruimtes. Met een koelvermogen van 7,0 kW en geavanceerde invertertechnologie, biedt deze unit betrouwbare prestaties met minimale energiekosten. De cassette is ideaal voor een onopvallende plafondinstallatie, wat bijdraagt aan een nette en moderne uitstraling van de ruimte. De unit heeft een SEER van 6,6 en een SCOP van 4,1, wat zorgt voor uitstekende energie-efficiëntie gedurende het hele jaar. Met een energielabel van A++ voor koelen en A+ voor verwarmen, is deze unit niet alleen krachtig, maar ook kostenbesparend. Bovendien werkt de unit fluisterstil met een geluidsniveau van slechts 34 dB, wat zorgt voor een comfortabele en serene omgeving.\n\nDe TOSOT CTS-24R is perfect voor het beheersen van het klimaat in kantoren, winkels, en grotere woonruimtes. Het ontwerp van de cassette zorgt voor een gelijkmatige luchtverdeling, waardoor de temperatuur in de hele ruimte comfortabel blijft zonder koude plekken.\n\nDeze unit is ontworpen voor eenvoudige installatie en probleemloos gebruik. De cassette kan discreet in het plafond worden geïntegreerd, wat bijdraagt aan de esthetiek van de ruimte. De set wordt compleet geleverd met installatiebenodigdheden en een handleiding voor een snelle en efficiënte installatie.\n\nDe TOSOT CTS-24R 7,0 kW R32 Inverter Cassette Set by GREE combineert kracht, efficiëntie en stille werking in een stijlvol en functioneel ontwerp. Met zijn SEER van 6,6 en SCOP van 4,1 biedt deze unit betrouwbare prestaties, terwijl de energielabels A++ voor koelen en A+ voor verwarmen zorgen voor kostenefficiëntie. Het lage geluidsniveau van 34 dB maakt het systeem ideaal voor uiteenlopende toepassingen, van commerciële ruimtes tot privéwoningen. Daarnaast biedt het gebruik van het milieuvriendelijke R32 koelmiddel een extra voordeel voor bewuste consumenten die zowel prestatie als duurzaamheid waarderen.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "840 x 840 x 200 mm",
      "buitenunit": "660 x 889 x 340 mm"
    },
    "energyLabel": "A++",
    "seer": "6.6",
    "scop": null,
    "soundLevel": "38 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Cassette (4-zijdig)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.5 kg",
      "Global warming potential (GWP)": "1013",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "2.03 kW",
      "Opgenomen vermogen bij koelen (max)": "2.03 kW",
      "Koelcapaciteit (min)": "7.1 kW",
      "Koelcapaciteit (max)": "7.1 kW",
      "Opgenomen vermogen bij verwarmen (min)": "2 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2 kW",
      "Verwarmingscapaciteit (min)": "7.1 kW",
      "Verwarmingscapaciteit (max)": "7.1 kW",
      "SEER (koeling)": "6.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "377 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "840 mm",
      "Breedte binnenunit": "840 mm",
      "Diepte binnenunit": "200 mm",
      "Gewicht binnenunit": "21 kg",
      "Hoogte buitenunit": "660 mm",
      "Breedte buitenunit": "889 mm",
      "Diepte buitenunit": "340 mm",
      "Gewicht buitenunit": "41.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "1100 m³/h",
      "Luchtdebiet koelen (max)": "1100 m³/h",
      "Luchtdebiet verwarmen (min)": "1100 m³/h",
      "Luchtdebiet verwarmen (max)": "1100 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "38 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "38 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "51 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "51 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "55 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "69 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "69 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "25 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "20 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001462_81001460_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001462_81001460_main.webp",
        "type": "main",
        "filename": "81001462_81001460_main.webp"
      },
      {
        "path": "/images/airco-products/81001462_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001462_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001462_81001462_dimensions1.webp",
        "type": "dimensions",
        "filename": "81001462_81001462_dimensions1.webp"
      },
      {
        "path": "/images/airco-products/81001462_dimensions1.webp",
        "type": "dimensions",
        "filename": "81001462_dimensions1.webp"
      },
      {
        "path": "/images/airco-products/81001462_81001462_energy.webp",
        "type": "energy",
        "filename": "81001462_81001462_energy.webp"
      },
      {
        "path": "/images/airco-products/81001462_energy.webp",
        "type": "energy",
        "filename": "81001462_energy.webp"
      },
      {
        "path": "/images/airco-products/81001462_81001460_other1.webp",
        "type": "other",
        "filename": "81001462_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001462_81001460_other2.webp",
        "type": "other",
        "filename": "81001462_81001460_other2.webp"
      },
      {
        "path": "/images/airco-products/81001462_81001460_other3.webp",
        "type": "other",
        "filename": "81001462_81001460_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-cassette-airco-cts-24r-r32-70-kw-set/29552/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001462_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001462_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001462_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001462_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001462_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001462_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001463",
    "sku": "AKTIE-CTS-42R-SET",
    "name": "Tosot by GREE Inverter Cassette airco CTS-42R R32 12,1 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "12.1",
    "coolingCapacity": "12.1",
    "heatingCapacity": "13.5",
    "description": "De TOSOT CTS-42R 12,1 kW R32 Inverter Cassette Set by GREE is een krachtige en flexibele oplossing voor het regelen van het binnenklimaat in grote ruimtes. Met een indrukwekkend koelvermogen van 12,1 kW is deze cassette set ideaal voor commerciële toepassingen zoals kantoren, winkels en grotere woonruimtes. De cassette is ontworpen om naadloos in het plafond te worden geïnstalleerd, wat zorgt voor een discreet en modern uiterlijk dat niet ten koste gaat van de functionaliteit. Dankzij de geavanceerde invertertechnologie biedt de unit betrouwbare prestaties met een stabiele temperatuurregeling, terwijl het geluidsniveau van slechts 39 dB bijdraagt aan een rustige omgeving.\n\nDe TOSOT CTS-42R is ideaal voor grote commerciële ruimtes, zoals kantoren, winkels, en horeca, waar een krachtige en betrouwbare klimaatregeling vereist is. Dankzij het cassetteontwerp kan de luchtstroom efficiënt door de ruimte worden verdeeld, wat zorgt voor een gelijkmatige koeling of verwarming, zonder storende geluiden of opvallende apparaten.\n\nDeze unit is ontworpen voor eenvoudige installatie in het plafond, waardoor het systeem niet alleen functioneel is, maar ook bijdraagt aan een nette en professionele uitstraling van de ruimte. De set wordt geleverd met alle benodigde onderdelen en duidelijke installatie-instructies, zodat het systeem snel operationeel kan zijn.\n\nDe TOSOT CTS-42R 12,1 kW R32 Inverter Cassette Set by GREE biedt een krachtige en stille oplossing voor grote ruimtes waar efficiënte klimaatregeling essentieel is. Het discrete ontwerp maakt het mogelijk om het systeem onopvallend te integreren in het interieur, terwijl de geavanceerde invertertechnologie zorgt voor betrouwbare prestaties. Met een geluidsniveau van slechts 39 dB blijft de omgeving rustig, zelfs wanneer het systeem op volle kracht werkt. Het gebruik van R32 koelmiddel onderstreept bovendien de inzet voor milieuvriendelijkheid en energie-efficiëntie.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "840 x 840 x 200 mm",
      "buitenunit": "820 x 940 x 370 mm"
    },
    "energyLabel": null,
    "seer": null,
    "scop": null,
    "soundLevel": "46 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Cassette (4-zijdig)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "2.25 kg",
      "Global warming potential (GWP)": "1519",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "400 V",
      "Aantal fasen": "3",
      "Frequentie": "50 Hz",
      "Opgenomen vermogen bij koelen (min)": "3.9 kW",
      "Opgenomen vermogen bij koelen (max)": "3.9 kW",
      "Koelcapaciteit (min)": "12.1 kW",
      "Koelcapaciteit (max)": "12.1 kW",
      "Opgenomen vermogen bij verwarmen (min)": "3.97 kW",
      "Opgenomen vermogen bij verwarmen (max)": "3.97 kW",
      "Verwarmingscapaciteit (min)": "13.5 kW",
      "Verwarmingscapaciteit (max)": "13.5 kW",
      "Hoogte binnenunit": "840 mm",
      "Breedte binnenunit": "840 mm",
      "Diepte binnenunit": "200 mm",
      "Gewicht binnenunit": "21 kg",
      "Hoogte buitenunit": "820 mm",
      "Breedte buitenunit": "940 mm",
      "Diepte buitenunit": "370 mm",
      "Gewicht buitenunit": "76 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "1700 m³/h",
      "Luchtdebiet koelen (max)": "1700 m³/h",
      "Luchtdebiet verwarmen (min)": "1700 m³/h",
      "Luchtdebiet verwarmen (max)": "1700 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "46 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "46 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "60 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "60 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "58 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "58 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "58 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "58 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "73 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "73 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "4 l/h",
      "Uitwendige buisdiameter condensafvoer": "25 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "75 m",
      "Max. hoogteverschil": "30 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001463_81001460_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001463_81001460_main.webp",
        "type": "main",
        "filename": "81001463_81001460_main.webp"
      },
      {
        "path": "/images/airco-products/81001463_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001463_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001463_81001462_dimensions1.webp",
        "type": "dimensions",
        "filename": "81001463_81001462_dimensions1.webp"
      },
      {
        "path": "/images/airco-products/81001463_81001460_other1.webp",
        "type": "other",
        "filename": "81001463_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001463_81001460_other2.webp",
        "type": "other",
        "filename": "81001463_81001460_other2.webp"
      },
      {
        "path": "/images/airco-products/81001463_81001460_other3.webp",
        "type": "other",
        "filename": "81001463_81001460_other3.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-cassette-airco-cts-42r-r32-121-kw-set/29551/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001463_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001463_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001463_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001463_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001463_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001467",
    "sku": "AKTIE-FTS-12R-SET",
    "name": "Tosot by GREE Inverter Vloer/Plafond airco FTS-12R R32 3,5 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "3.5",
    "coolingCapacity": "3.5",
    "heatingCapacity": "4",
    "description": "De TOSOT FTS-12R 3,5 kW R32 Inverter Vloer/Plafond Set by GREE biedt een compacte en flexibele oplossing voor het beheersen van het binnenklimaat in zowel woningen als commerciële ruimtes. Met een koelvermogen van 3,5 kW en geavanceerde invertertechnologie zorgt deze unit voor efficiënte en betrouwbare temperatuurregeling, ongeacht de seizoen. Deze set biedt flexibiliteit in de installatie, doordat de unit zowel aan het plafond als op de vloer kan worden geplaatst, afhankelijk van de indeling en wensen van de ruimte. Met een SEER van 7,2 en een SCOP van 4,1, levert de unit uitstekende energie-efficiëntie, wat resulteert in lagere energiekosten. De energieprestaties worden verder benadrukt door het A++ label voor koelen en het A+ label voor verwarmen. Bovendien werkt de unit fluisterstil met een geluidsniveau van slechts 28 dB, wat zorgt voor een comfortabele en rustige omgeving.\n\nDe TOSOT FTS-12R is ideaal voor gebruik in kleinere tot middelgrote ruimtes zoals slaapkamers, thuiskantoren, en kleine winkels. Dankzij de flexibele installatieopties kan de unit worden aangepast aan de specifieke behoeften van de ruimte, zonder in te boeten aan functionaliteit of esthetiek.\n\nDeze unit is ontworpen voor eenvoudige en probleemloze installatie, ongeacht of u kiest voor montage aan het plafond of op de vloer. De set wordt compleet geleverd met alle benodigde onderdelen en een duidelijke handleiding, zodat de installatie soepel verloopt en het systeem snel in gebruik kan worden genomen.\n\nDe TOSOT FTS-12R 3,5 kW R32 Inverter Vloer/Plafond Set by GREE combineert flexibiliteit, energiezuinigheid en stille werking in één compact pakket. Met zijn SEER van 7,2 en SCOP van 4,1, biedt deze unit uitstekende prestaties het hele jaar door. Het fluisterstille geluidsniveau van 28 dB zorgt voor een serene omgeving, terwijl de flexibele installatieopties het systeem geschikt maken voor diverse toepassingen. Het gebruik van het milieuvriendelijke R32 koelmiddel en de hoge energieclassificaties maken deze unit tot een slimme en duurzame keuze voor elk binnenklimaat.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "665 x 870 x 235 mm",
      "buitenunit": "553 x 675 x 285 mm"
    },
    "energyLabel": "A++",
    "seer": "7.2",
    "scop": null,
    "soundLevel": "34 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.57 kg",
      "Global warming potential (GWP)": "385",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "1 kW",
      "Opgenomen vermogen bij koelen (max)": "1 kW",
      "Koelcapaciteit (min)": "3.5 kW",
      "Koelcapaciteit (max)": "3.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.03 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.03 kW",
      "Verwarmingscapaciteit (min)": "4 kW",
      "Verwarmingscapaciteit (max)": "4 kW",
      "SEER (koeling)": "7.2",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "170 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "665 mm",
      "Breedte binnenunit": "870 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "24 kg",
      "Hoogte buitenunit": "553 mm",
      "Breedte buitenunit": "675 mm",
      "Diepte buitenunit": "285 mm",
      "Gewicht buitenunit": "24.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "650 m³/h",
      "Luchtdebiet koelen (max)": "650 m³/h",
      "Luchtdebiet verwarmen (min)": "650 m³/h",
      "Luchtdebiet verwarmen (max)": "650 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "28 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "34 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "28 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "34 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "49 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "49 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "48 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "56 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.5 l/h",
      "Uitwendige buisdiameter condensafvoer": "17 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "15 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001467_81001467_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001467_81001467_main.webp",
        "type": "main",
        "filename": "81001467_81001467_main.webp"
      },
      {
        "path": "/images/airco-products/81001467_main.webp",
        "type": "main",
        "filename": "81001467_main.webp"
      },
      {
        "path": "/images/airco-products/81001467_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001467_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001467_81001467_dimensions.webp",
        "type": "dimensions",
        "filename": "81001467_81001467_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001467_dimensions.webp",
        "type": "dimensions",
        "filename": "81001467_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001467_81001467_energy.webp",
        "type": "energy",
        "filename": "81001467_81001467_energy.webp"
      },
      {
        "path": "/images/airco-products/81001467_energy.webp",
        "type": "energy",
        "filename": "81001467_energy.webp"
      },
      {
        "path": "/images/airco-products/81001467_81001460_other1.webp",
        "type": "other",
        "filename": "81001467_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001467_81001460_other3.webp",
        "type": "other",
        "filename": "81001467_81001460_other3.webp"
      },
      {
        "path": "/images/airco-products/81001467_81001467_other1.webp",
        "type": "other",
        "filename": "81001467_81001467_other1.webp"
      },
      {
        "path": "/images/airco-products/81001467_81001467_other2.webp",
        "type": "other",
        "filename": "81001467_81001467_other2.webp"
      },
      {
        "path": "/images/airco-products/81001467_other1.webp",
        "type": "other",
        "filename": "81001467_other1.webp"
      },
      {
        "path": "/images/airco-products/81001467_other2.webp",
        "type": "other",
        "filename": "81001467_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-vloer-plafond-airco-fts-12r-r32-35-kw-set/29550/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001467_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001467_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001467_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001467_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001467_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001467_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001468",
    "sku": "AKTIE-FTS-18R-SET",
    "name": "Tosot by GREE Inverter Vloer/Plafond airco FTS-18R R32 5,0 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "5.0",
    "coolingCapacity": "5.3",
    "heatingCapacity": "5.6",
    "description": "De TOSOT FTS-18R 5,0 kW R32 Inverter Vloer/Plafond Set by GREE is een veelzijdige en energie-efficiënte oplossing voor klimaatregeling in diverse ruimtes, zowel thuis als in commerciële omgevingen. Met een koelvermogen van 5,0 kW en de mogelijkheid om de unit zowel aan het plafond als op de vloer te installeren, biedt deze set flexibiliteit en efficiëntie in één pakket. Uitgerust met geavanceerde invertertechnologie, levert de unit betrouwbare prestaties en een consistente temperatuurregeling, met een SEER van 6,5 en een SCOP van 4,2. Deze prestaties worden ondersteund door een energielabel A++ voor koelen en A+ voor verwarmen, wat resulteert in lagere energiekosten en een duurzamer energieverbruik. De unit werkt stil, met een geluidsniveau van slechts 36 dB, wat ideaal is voor ruimtes waar stilte en comfort gewenst zijn.\n\nDe TOSOT FTS-18R is ideaal voor het koelen en verwarmen van middelgrote ruimtes, zoals woonkamers, vergaderruimtes en kantoren. De flexibiliteit in installatieopties maakt deze unit bijzonder geschikt voor omgevingen waar zowel functionaliteit als esthetiek van belang zijn.\n\nDeze unit is eenvoudig te installeren, ongeacht of u kiest voor plafond- of vloerplaatsing. De set wordt geleverd met alle benodigde installatieonderdelen en een duidelijke handleiding, waardoor het proces snel en eenvoudig verloopt. Dankzij het discrete ontwerp blijft het interieur strak en opgeruimd, ongeacht de installatielocatie.\n\nDe TOSOT FTS-18R 5,0 kW R32 Inverter Vloer/Plafond Set by GREE combineert flexibiliteit, stille werking en energie-efficiëntie in één complete oplossing. Met een SEER van 6,5 en een SCOP van 4,2 levert deze unit betrouwbare prestaties, het hele jaar door. Het geluidsniveau van slechts 36 dB zorgt ervoor dat het systeem nauwelijks merkbaar is, waardoor het ideaal is voor gebruik in verschillende omgevingen. Bovendien maakt het gebruik van het milieuvriendelijke R32 koelmiddel deze unit tot een verstandige keuze voor wie op zoek is naar een duurzame en kosteneffectieve oplossing voor klimaatbeheersing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "665 x 870 x 235 mm",
      "buitenunit": "555 x 745 x 300 mm"
    },
    "energyLabel": "A++",
    "seer": "6.5",
    "scop": null,
    "soundLevel": "40 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.85 kg",
      "Global warming potential (GWP)": "574",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "1.54 kW",
      "Opgenomen vermogen bij koelen (max)": "1.54 kW",
      "Koelcapaciteit (min)": "5.3 kW",
      "Koelcapaciteit (max)": "5.3 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.47 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.47 kW",
      "Verwarmingscapaciteit (min)": "5.6 kW",
      "Verwarmingscapaciteit (max)": "5.6 kW",
      "SEER (koeling)": "6.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "285 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "665 mm",
      "Breedte binnenunit": "870 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "25 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "745 mm",
      "Diepte buitenunit": "300 mm",
      "Gewicht buitenunit": "30.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "900 m³/h",
      "Luchtdebiet koelen (max)": "900 m³/h",
      "Luchtdebiet verwarmen (min)": "900 m³/h",
      "Luchtdebiet verwarmen (max)": "900 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "40 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "40 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.4 l/h",
      "Uitwendige buisdiameter condensafvoer": "17 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "20 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001468_81001467_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001468_81001467_main.webp",
        "type": "main",
        "filename": "81001468_81001467_main.webp"
      },
      {
        "path": "/images/airco-products/81001468_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001468_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001468_81001467_dimensions.webp",
        "type": "dimensions",
        "filename": "81001468_81001467_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001468_81001468_energy.webp",
        "type": "energy",
        "filename": "81001468_81001468_energy.webp"
      },
      {
        "path": "/images/airco-products/81001468_energy.webp",
        "type": "energy",
        "filename": "81001468_energy.webp"
      },
      {
        "path": "/images/airco-products/81001468_81001460_other1.webp",
        "type": "other",
        "filename": "81001468_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001468_81001460_other3.webp",
        "type": "other",
        "filename": "81001468_81001460_other3.webp"
      },
      {
        "path": "/images/airco-products/81001468_81001467_other1.webp",
        "type": "other",
        "filename": "81001468_81001467_other1.webp"
      },
      {
        "path": "/images/airco-products/81001468_81001467_other2.webp",
        "type": "other",
        "filename": "81001468_81001467_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-vloer-plafond-airco-fts-18r-r32-50-kw-set/29549/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001468_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001468_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001468_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001468_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001468_Technical_document.pdf",
        "name": "Technical Document"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001468_Tosot_owners_manual.pdf",
        "name": "Tosot Owners Manual"
      }
    ]
  },
  {
    "id": "81001469",
    "sku": "AKTIE-FTS-24R-SET",
    "name": "Tosot by GREE Inverter Vloer/Plafond airco FTS-24R R32 7,0 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "7.0",
    "coolingCapacity": "7.1",
    "heatingCapacity": "8",
    "description": "De TOSOT FTS-24R 7,0 kW R32 Inverter Vloer/Plafond Set by GREE biedt een flexibele en krachtige oplossing voor klimaatbeheersing in zowel woon- als commerciële ruimtes. Deze unit, met een koelcapaciteit van 7,0 kW, kan zowel aan het plafond als op de vloer worden geïnstalleerd, afhankelijk van de ruimtevereisten. Uitgerust met geavanceerde invertertechnologie, levert deze set uitstekende prestaties met een SEER van 7,2 en een SCOP van 4,3, wat resulteert in energiezuinige werking, zowel tijdens koelen als verwarmen. Het systeem draagt een energielabel A++ voor koelen en A+ voor verwarmen, wat betekent dat het bijdraagt aan lagere energiekosten en een milieuvriendelijker gebruik. Met een geluidsniveau van slechts 35 dB functioneert de unit stil genoeg om het comfort van elke ruimte niet te verstoren.\n\nDe TOSOT FTS-24R is ideaal voor grotere ruimtes zoals ruime woonkamers, kantoren en commerciële locaties. De flexibiliteit in installatieopties maakt het systeem bijzonder geschikt voor omgevingen waar zowel esthetiek als functionaliteit belangrijk zijn.\n\nDeze vloer/plafond unit is ontworpen voor eenvoudige installatie, met alle benodigde onderdelen en een duidelijke handleiding inbegrepen. Het systeem biedt de keuze om de unit aan het plafond te monteren voor een discrete uitstraling, of op de vloer voor een meer directe luchtstroom.\n\nDe TOSOT FTS-24R 7,0 kW R32 Inverter Vloer/Plafond Set by GREE combineert krachtige prestaties met veelzijdige installatieopties en energiezuinige werking. Met een SEER van 7,2 en een SCOP van 4,3 biedt deze unit consistente en efficiënte prestaties, ongeacht het seizoen. De stille werking, met een geluidsniveau van slechts 35 dB, zorgt ervoor dat het systeem vrijwel onopgemerkt functioneert in elke ruimte. Het gebruik van het milieuvriendelijke R32 koelmiddel en de hoge energieclassificaties maken deze unit tot een verstandige keuze voor wie op zoek is naar een duurzame en kosteneffectieve oplossing voor klimaatbeheersing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "665 x 1200 x 235 mm",
      "buitenunit": "660 x 889 x 340 mm"
    },
    "energyLabel": "A++",
    "seer": "7.2",
    "scop": null,
    "soundLevel": "39 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Wand (hoog)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.5 kg",
      "Global warming potential (GWP)": "1013",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "2.03 kW",
      "Opgenomen vermogen bij koelen (max)": "2.03 kW",
      "Koelcapaciteit (min)": "7.1 kW",
      "Koelcapaciteit (max)": "7.1 kW",
      "Opgenomen vermogen bij verwarmen (min)": "2 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2 kW",
      "Verwarmingscapaciteit (min)": "8 kW",
      "Verwarmingscapaciteit (max)": "8 kW",
      "SEER (koeling)": "7.2",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "345 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "665 mm",
      "Breedte binnenunit": "1200 mm",
      "Diepte binnenunit": "235 mm",
      "Gewicht binnenunit": "31 kg",
      "Hoogte buitenunit": "660 mm",
      "Breedte buitenunit": "889 mm",
      "Diepte buitenunit": "340 mm",
      "Gewicht buitenunit": "41.5 kg",
      "Kleur binnenunit": "Wit",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "1250 m³/h",
      "Luchtdebiet koelen (max)": "1250 m³/h",
      "Luchtdebiet verwarmen (min)": "1250 m³/h",
      "Luchtdebiet verwarmen (max)": "1250 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "35 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "39 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "35 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "39 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "54 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "54 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "55 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "69 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "69 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "1.6 l/h",
      "Uitwendige buisdiameter condensafvoer": "17 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "20 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001469_81001467_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001469_81001467_main.webp",
        "type": "main",
        "filename": "81001469_81001467_main.webp"
      },
      {
        "path": "/images/airco-products/81001469_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001469_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001469_81001467_dimensions.webp",
        "type": "dimensions",
        "filename": "81001469_81001467_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001469_81001469_energy.webp",
        "type": "energy",
        "filename": "81001469_81001469_energy.webp"
      },
      {
        "path": "/images/airco-products/81001469_energy.webp",
        "type": "energy",
        "filename": "81001469_energy.webp"
      },
      {
        "path": "/images/airco-products/81001469_81001460_other1.webp",
        "type": "other",
        "filename": "81001469_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001469_81001460_other3.webp",
        "type": "other",
        "filename": "81001469_81001460_other3.webp"
      },
      {
        "path": "/images/airco-products/81001469_81001467_other1.webp",
        "type": "other",
        "filename": "81001469_81001467_other1.webp"
      },
      {
        "path": "/images/airco-products/81001469_81001467_other2.webp",
        "type": "other",
        "filename": "81001469_81001467_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-vloer-plafond-airco-fts-24r-r32-70-kw-set/29548/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001469_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001469_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001469_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001469_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001469_Manual_NL.pdf",
        "name": "Manual NL"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001469_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001473",
    "sku": "AKTIE-DTS-12R-SET",
    "name": "Tosot by GREE Inverter Kanaal airco DTS-12R R32 3,5 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "3.5",
    "coolingCapacity": "3.5",
    "heatingCapacity": "4",
    "description": "De TOSOT DTS-12R 3,5 kW R32 Inverter Kanaal Set by GREE is een efficiënte en stille oplossing voor het beheersen van het klimaat in kleinere tot middelgrote ruimtes. Met een koelvermogen van 3,5 kW is deze unit uitstekend geschikt voor het leveren van betrouwbare prestaties, terwijl de geavanceerde invertertechnologie zorgt voor een stabiele temperatuurregeling met minimaal energieverbruik. Deze kanaalset heeft een SEER van 6,5 en een SCOP van 4,0, wat betekent dat het systeem zeer efficiënt werkt, zowel tijdens het koelen als verwarmen. Voor koeling draagt de unit het energielabel A++, en voor verwarming een A+ label, wat garant staat voor lage operationele kosten. Bovendien functioneert de unit met een geluidsniveau van slechts 30 dB, waardoor hij vrijwel onopgemerkt blijft in uw ruimte.\n\nDe TOSOT DTS-12R is ideaal voor het koelen en verwarmen van ruimtes zoals slaapkamers, thuiskantoren en kleine commerciële ruimtes. Het kanaalsysteem zorgt voor een gelijkmatige verspreiding van lucht, waardoor de temperatuur in elke hoek van de kamer consistent blijft.\n\nDeze unit is eenvoudig te installeren en wordt geleverd met alle benodigde onderdelen en een duidelijke handleiding om het proces te vergemakkelijken. De unit kan discreet worden ingebouwd in het plafond, waardoor het interieur netjes en onaangetast blijft. Dit maakt het systeem ideaal voor ruimtes waar een strakke en opgeruimde uitstraling gewenst is.\n\nDe TOSOT DTS-12R 3,5 kW R32 Inverter Kanaal Set by GREE biedt een uitstekende combinatie van prestaties, energie-efficiëntie en stille werking. Met een SEER van 6,5 en een SCOP van 4,0 garandeert deze unit consistente en betrouwbare prestaties, ongeacht het seizoen. Het systeem werkt fluisterstil met een geluidsniveau van slechts 30 dB, waardoor het ideaal is voor gebruik in stille omgevingen. Bovendien zorgt het gebruik van het milieuvriendelijke R32 koelmiddel en de hoge energieclassificaties ervoor dat dit een duurzame en kosteneffectieve oplossing is voor uw klimaatbehoeften.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "200 x 700 x 450 mm",
      "buitenunit": "553 x 675 x 285 mm"
    },
    "energyLabel": "A++",
    "seer": "6.5",
    "scop": null,
    "soundLevel": "35 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.57 kg",
      "Global warming potential (GWP)": "385",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "1 kW",
      "Opgenomen vermogen bij koelen (max)": "1 kW",
      "Koelcapaciteit (min)": "3.5 kW",
      "Koelcapaciteit (max)": "3.5 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.03 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.03 kW",
      "Verwarmingscapaciteit (min)": "4 kW",
      "Verwarmingscapaciteit (max)": "4 kW",
      "SEER (koeling)": "6.5",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "189 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "200 mm",
      "Breedte binnenunit": "700 mm",
      "Diepte binnenunit": "450 mm",
      "Gewicht binnenunit": "18 kg",
      "Hoogte buitenunit": "553 mm",
      "Breedte buitenunit": "675 mm",
      "Diepte buitenunit": "285 mm",
      "Gewicht buitenunit": "24.5 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "600 m³/h",
      "Luchtdebiet koelen (max)": "600 m³/h",
      "Luchtdebiet verwarmen (min)": "600 m³/h",
      "Luchtdebiet verwarmen (max)": "600 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "35 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "30 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "35 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "56 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "48 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "48 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "56 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "56 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "3/8\"",
      "Ontvochtigingscapaciteit": "0.9 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "15 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001473_81001473_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001473_81001473_main.webp",
        "type": "main",
        "filename": "81001473_81001473_main.webp"
      },
      {
        "path": "/images/airco-products/81001473_main.webp",
        "type": "main",
        "filename": "81001473_main.webp"
      },
      {
        "path": "/images/airco-products/81001473_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001473_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001473_81001473_dimensions.webp",
        "type": "dimensions",
        "filename": "81001473_81001473_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001473_dimensions.webp",
        "type": "dimensions",
        "filename": "81001473_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001473_81001473_energy.webp",
        "type": "energy",
        "filename": "81001473_81001473_energy.webp"
      },
      {
        "path": "/images/airco-products/81001473_energy.webp",
        "type": "energy",
        "filename": "81001473_energy.webp"
      },
      {
        "path": "/images/airco-products/81001473_81001460_other1.webp",
        "type": "other",
        "filename": "81001473_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001473_81001473_other1.webp",
        "type": "other",
        "filename": "81001473_81001473_other1.webp"
      },
      {
        "path": "/images/airco-products/81001473_81001473_other2.webp",
        "type": "other",
        "filename": "81001473_81001473_other2.webp"
      },
      {
        "path": "/images/airco-products/81001473_other1.webp",
        "type": "other",
        "filename": "81001473_other1.webp"
      },
      {
        "path": "/images/airco-products/81001473_other2.webp",
        "type": "other",
        "filename": "81001473_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-kanaal-airco-dts-12r-r32-35-kw-set/29547/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001473_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001473_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001473_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001473_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001474_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001474",
    "sku": "AKTIE-DTS-18R-SET",
    "name": "Tosot by GREE Inverter Kanaal airco DTS-18R R32 5,0 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "5.0",
    "coolingCapacity": "5.3",
    "heatingCapacity": "5.6",
    "description": "De TOSOT DTS-18R 5,0 kW R32 Inverter Kanaal Set by GREE biedt een doeltreffende en efficiënte oplossing voor klimaatbeheersing in zowel residentiële als commerciële ruimtes. Met een koelcapaciteit van 5,0 kW en uitgerust met geavanceerde invertertechnologie, levert dit systeem betrouwbare prestaties met een laag energieverbruik. De set heeft een SEER van 6,3 en een SCOP van 4,0, wat zorgt voor uitstekende energie-efficiëntie, zowel tijdens het koelen als het verwarmen. Voor koeling draagt de unit het energielabel A++, en voor verwarming A+, wat bijdraagt aan lagere energiekosten. Bovendien is deze kanaalset ontworpen voor stille werking, met een geluidsniveau van slechts 31 dB, waardoor hij nauwelijks opvalt in elke omgeving.\n\nDe TOSOT DTS-18R is ideaal voor het koelen en verwarmen van middelgrote ruimtes zoals woonkamers, kantoren en commerciële ruimtes. Het kanaalsysteem zorgt ervoor dat de lucht gelijkmatig door de ruimte wordt verspreid, wat zorgt voor een consistent comfortniveau.\n\nDeze kanaalset is ontworpen om eenvoudig te installeren, met alle benodigde onderdelen en een duidelijke handleiding inbegrepen. De unit kan discreet in het plafond worden ingebouwd, wat zorgt voor een strak en onopvallend uiterlijk. Dit maakt het systeem ideaal voor ruimtes waar esthetiek en functionaliteit hand in hand gaan.\n\nDe TOSOT DTS-18R 5,0 kW R32 Inverter Kanaal Set by GREE combineert effectieve prestaties met energiezuinigheid en stille werking. Met SEER- en SCOP-waarden die betrouwbare prestaties het hele jaar door garanderen, en een stil ontwerp dat nauwelijks opvalt met een geluidsniveau van slechts 31 dB, is dit systeem ideaal voor uiteenlopende toepassingen. Het gebruik van het milieuvriendelijke R32 koelmiddel, samen met de hoge energieclassificaties, maakt deze unit tot een slimme en duurzame keuze voor iedereen die op zoek is naar betrouwbare en efficiënte klimaatregeling.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "200 x 1000 x 450 mm",
      "buitenunit": "555 x 745 x 300 mm"
    },
    "energyLabel": "A++",
    "seer": "6.3",
    "scop": null,
    "soundLevel": "36 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "0.85 kg",
      "Global warming potential (GWP)": "574",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "16 A",
      "Opgenomen vermogen bij koelen (min)": "1.54 kW",
      "Opgenomen vermogen bij koelen (max)": "1.54 kW",
      "Koelcapaciteit (min)": "5.3 kW",
      "Koelcapaciteit (max)": "5.3 kW",
      "Opgenomen vermogen bij verwarmen (min)": "1.47 kW",
      "Opgenomen vermogen bij verwarmen (max)": "1.47 kW",
      "Verwarmingscapaciteit (min)": "5.6 kW",
      "Verwarmingscapaciteit (max)": "5.6 kW",
      "SEER (koeling)": "6.3",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "294 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "200 mm",
      "Breedte binnenunit": "1000 mm",
      "Diepte binnenunit": "450 mm",
      "Gewicht binnenunit": "24 kg",
      "Hoogte buitenunit": "555 mm",
      "Breedte buitenunit": "745 mm",
      "Diepte buitenunit": "300 mm",
      "Gewicht buitenunit": "30.5 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "900 m³/h",
      "Luchtdebiet koelen (max)": "900 m³/h",
      "Luchtdebiet verwarmen (min)": "900 m³/h",
      "Luchtdebiet verwarmen (max)": "900 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "31 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "36 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "31 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "36 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "59 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "59 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "52 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "52 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "65 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "65 dB(A)",
      "Nom. diameter vloeistofleiding": "1/4\"",
      "Nom. diameter zuigleiding": "1/2\"",
      "Ontvochtigingscapaciteit": "1.5 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "20 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001474_81001473_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001474_81001473_main.webp",
        "type": "main",
        "filename": "81001474_81001473_main.webp"
      },
      {
        "path": "/images/airco-products/81001474_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001474_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001474_81001473_dimensions.webp",
        "type": "dimensions",
        "filename": "81001474_81001473_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001474_81001474_energy.webp",
        "type": "energy",
        "filename": "81001474_81001474_energy.webp"
      },
      {
        "path": "/images/airco-products/81001474_energy.webp",
        "type": "energy",
        "filename": "81001474_energy.webp"
      },
      {
        "path": "/images/airco-products/81001474_81001460_other1.webp",
        "type": "other",
        "filename": "81001474_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001474_81001473_other1.webp",
        "type": "other",
        "filename": "81001474_81001473_other1.webp"
      },
      {
        "path": "/images/airco-products/81001474_81001473_other2.webp",
        "type": "other",
        "filename": "81001474_81001473_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-kanaal-airco-dts-18r-r32-50-kw-set/29546/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001474_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001474_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001474_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001474_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001474_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  },
  {
    "id": "81001475",
    "sku": "AKTIE-DTS-24R-SET",
    "name": "Tosot by GREE Inverter Kanaal airco DTS-24R R32 7,0 kW set",
    "brand": "Tosot",
    "type": "commercieel",
    "category": "Tosot Commercieel",
    "capacity": "7.0",
    "coolingCapacity": "7.1",
    "heatingCapacity": "8",
    "description": "De TOSOT DTS-24R 7,0 kW R32 Inverter Kanaal Set by GREE biedt een krachtige en energie-efficiënte oplossing voor klimaatbeheersing in grotere ruimtes, zowel voor woon- als commerciële toepassingen. Met een koelcapaciteit van 7,0 kW en een geavanceerd inverter-systeem, garandeert deze kanaalset betrouwbare prestaties met een laag energieverbruik. Het systeem heeft een SEER van 6,6 en een SCOP van 4,1, wat zorgt voor uitstekende efficiëntie bij zowel koelen als verwarmen. De set is voorzien van energielabel A++ voor koeling en A+ voor verwarming, wat resulteert in lagere energiekosten. Bovendien is de unit ontworpen om stil te werken, met een geluidsniveau van slechts 31 dB, wat zorgt voor een comfortabele en ongestoorde omgeving.\n\nDe TOSOT DTS-24R is perfect geschikt voor het koelen en verwarmen van grotere ruimtes, zoals grote woonkamers, kantoren en commerciële ruimtes. Dankzij het kanaalontwerp kan de lucht gelijkmatig worden verspreid door meerdere ruimtes, wat zorgt voor een consistent en comfortabel binnenklimaat.\n\nDe installatie van deze kanaalset is ontworpen om eenvoudig en snel te zijn, met alle benodigde onderdelen en een duidelijke handleiding inbegrepen. Het systeem kan discreet worden ingebouwd, waardoor het interieur strak en ononderbroken blijft. Dit maakt de unit ideaal voor gebruik in ruimtes waar esthetiek belangrijk is, zonder in te boeten aan functionaliteit.\n\nDe TOSOT DTS-24R 7,0 kW R32 Inverter Kanaal Set by GREE combineert krachtige prestaties met energiezuinigheid en stille werking. Met zijn hoge SEER- en SCOP-waarden biedt deze set het hele jaar door betrouwbare en efficiënte klimaatregeling. Het systeem is ontworpen om stil te werken, met een maximaal geluidsniveau van slechts 31 dB, waardoor het perfect is voor zowel residentiële als commerciële toepassingen. Het gebruik van R32 koelmiddel en de energielabels A++ en A+ maken dit apparaat tot een milieuvriendelijke en kosteneffectieve keuze voor wie op zoek is naar hoogwaardige klimaatbeheersing.\n\nBij MaxiCool vinden we het belangrijk dat we altijd goed bereikbaar zijn en al jouw vragen zo snel mogelijk kunnen beantwoorden. Daarom kun je ons op meerdere manieren bereiken, waaronder via telefoon of e-mail. We staan graag voor je klaar!",
    "dimensions": {
      "binnenunit": "260 x 900 x 655 mm",
      "buitenunit": "660 x 889 x 340 mm"
    },
    "energyLabel": "A++",
    "seer": "6.6",
    "scop": null,
    "soundLevel": "37 dB(A)",
    "specifications": {
      "Categoriecode": "526",
      "Model (binnenunit)": "Plafondinbouw (kanaal)",
      "Condensorunit, watergekoeld": "Nee",
      "Inverter gestuurd": "Ja",
      "Type koudemiddel": "R32",
      "Koudemiddelinhoud": "1.5 kg",
      "Global warming potential (GWP)": "1013",
      "PED categorie in overeenstemming met 2014/68/EU": "1",
      "Aansluitspanning": "230 V",
      "Aantal fasen": "1",
      "Frequentie": "50 Hz",
      "Afzekering apparaat": "20 A",
      "Opgenomen vermogen bij koelen (min)": "2.03 kW",
      "Opgenomen vermogen bij koelen (max)": "2.03 kW",
      "Koelcapaciteit (min)": "7.1 kW",
      "Koelcapaciteit (max)": "7.1 kW",
      "Opgenomen vermogen bij verwarmen (min)": "2 kW",
      "Opgenomen vermogen bij verwarmen (max)": "2 kW",
      "Verwarmingscapaciteit (min)": "8 kW",
      "Verwarmingscapaciteit (max)": "8 kW",
      "SEER (koeling)": "6.6",
      "Jaarlijks energieverbruik koelen (Hce=350 uur - vollast)": "377 kWh",
      "Energie-efficiëntieklasse koelen": "A++",
      "Hoogte binnenunit": "260 mm",
      "Breedte binnenunit": "900 mm",
      "Diepte binnenunit": "655 mm",
      "Gewicht binnenunit": "29.5 kg",
      "Hoogte buitenunit": "660 mm",
      "Breedte buitenunit": "889 mm",
      "Diepte buitenunit": "340 mm",
      "Gewicht buitenunit": "41.5 kg",
      "Kleur binnenunit": "Aluminium",
      "Aantal ventilatiesnelheden": "3",
      "Luchtdebiet koelen (min)": "1100 m³/h",
      "Luchtdebiet koelen (max)": "1100 m³/h",
      "Luchtdebiet verwarmen (min)": "1100 m³/h",
      "Luchtdebiet verwarmen (max)": "1100 m³/h",
      "Geluidsdrukniveau binnenunit koelen (min)": "31 dB(A)",
      "Geluidsdrukniveau binnenunit koelen (max)": "37 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (min)": "31 dB(A)",
      "Geluidsdrukniveau binnenunit verwarmen (max)": "37 dB(A)",
      "Geluidsvermogenniveau binnenunit (min)": "58 dB(A)",
      "Geluidsvermogenniveau binnenunit (max)": "58 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit koelen (max)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (min)": "55 dB(A)",
      "Geluidsdrukniveau buitenunit verwarmen (max)": "55 dB(A)",
      "Geluidsvermogenniveau buitenunit (min)": "69 dB(A)",
      "Geluidsvermogenniveau buitenunit (max)": "69 dB(A)",
      "Nom. diameter vloeistofleiding": "3/8\"",
      "Nom. diameter zuigleiding": "5/8\"",
      "Ontvochtigingscapaciteit": "2.3 l/h",
      "Uitwendige buisdiameter condensafvoer": "26 mm",
      "Bedrijfstemperatuur koelen (Dry Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur koelen (Dry Bulb) (max)": "48 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (min)": "-20 °C",
      "Bedrijfstemperatuur verwarmen (Wet Bulb) (max)": "48 °C",
      "Min. leidinglengte": "4 m",
      "Max. leidinglengte": "30 m",
      "Max. hoogteverschil": "20 m",
      "Met luchtzuiveringsfilter": "Ja",
      "Met geurfilter": "Ja",
      "Met afstandsbediening": "Ja",
      "Met draadloze afstandsbediening": "Ja",
      "Met klokprogramma/timer": "Ja",
      "Type expansie": "Buiten",
      "Leidingset meegeleverd": "Nee",
      "Leidingset met snelkoppelingen": "Nee",
      "Binnenunit met buitenluchtaansluiting": "Nee",
      "Compatible met Apple HomeKit": "Nee",
      "Compatible met Google Assistant": "Ja",
      "Compatible met Amazon Alexa": "Ja",
      "Met IFTTT ondersteuning": "Nee",
      "Werkingsprincipe": "Koelen en verwarmen"
    },
    "image": "/images/airco-products/81001475_81001473_main.webp",
    "images": [
      {
        "path": "/images/airco-products/81001475_81001473_main.webp",
        "type": "main",
        "filename": "81001475_81001473_main.webp"
      },
      {
        "path": "/images/airco-products/81001475_81001460_dimensions2.webp",
        "type": "dimensions",
        "filename": "81001475_81001460_dimensions2.webp"
      },
      {
        "path": "/images/airco-products/81001475_81001473_dimensions.webp",
        "type": "dimensions",
        "filename": "81001475_81001473_dimensions.webp"
      },
      {
        "path": "/images/airco-products/81001475_81001475_energy.webp",
        "type": "energy",
        "filename": "81001475_81001475_energy.webp"
      },
      {
        "path": "/images/airco-products/81001475_energy.webp",
        "type": "energy",
        "filename": "81001475_energy.webp"
      },
      {
        "path": "/images/airco-products/81001475_81001460_other1.webp",
        "type": "other",
        "filename": "81001475_81001460_other1.webp"
      },
      {
        "path": "/images/airco-products/81001475_81001473_other1.webp",
        "type": "other",
        "filename": "81001475_81001473_other1.webp"
      },
      {
        "path": "/images/airco-products/81001475_81001473_other2.webp",
        "type": "other",
        "filename": "81001475_81001473_other2.webp"
      }
    ],
    "url": "https://www.maxicool.nl/nl_NL/p/tosot-by-gree-inverter-kanaal-airco-dts-24r-r32-70-kw-set/29545/",
    "documents": [
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001475_Dimensions.pdf",
        "name": "Dimensions"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001475_Energy_label.pdf",
        "name": "Energy Label"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001475_Manual.pdf",
        "name": "Manual"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001475_Manual2.pdf",
        "name": "Manual2"
      },
      {
        "url": "https://www.maxicool.nl/static/uploads/pictures/original/other/81001475_Technical_document.pdf",
        "name": "Technical Document"
      }
    ]
  }
];

export const productsByBrand = {
  LG: aircoProducts.filter(p => p.brand === 'LG'),
  Tosot: aircoProducts.filter(p => p.brand === 'Tosot'),
  MaxiCool: aircoProducts.filter(p => p.brand === 'MaxiCool'),
};

export const productsByType = {
  'single-split': aircoProducts.filter(p => p.type === 'single-split'),
  'multi-split': aircoProducts.filter(p => p.type === 'multi-split'),
  'commercieel': aircoProducts.filter(p => p.type === 'commercieel'),
};
