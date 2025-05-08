import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function BrunssumPage() {
  // Get real Google reviews localized for Brunssum
  const realReviews = getLocalizedReviews("Brunssum", 4);
  
  // City-specific data
  const cityData = {
    city: "Brunssum",
    region: "Zuid-Limburg",
    postalCodes: "6441, 6442, 6443, 6444, 6445",
    populationCount: 28000,
    locationImage: "/images/locations/brunssum.webp",
    installationCount: 85,
    
    // Climate-specific information for Brunssum
    climateFacts: [
      "Brunssum heeft door zijn ligging op de heuvels een aangenaam microklimaat",
      "De omliggende natuurgebieden zorgen voor relatief koele nachten",
      "Het centrum van Brunssum kan in de zomer duidelijk warmer zijn dan buitenwijken",
      "De vroegere mijnbouwactiviteiten hebben invloed op het lokale klimaat"
    ],
    
    // Special features for Brunssum installations
    specialFeatures: [
      "Specifieke expertise met koeloplossingen voor mijnwerkerswoningen in Brunssum",
      "Aangepaste installaties voor de naoorlogse woningen in Brunssum",
      "Stille aircosystemen voor de rustige woonwijken",
      "Ervaring met grote woningen in buitenwijken en landelijke delen van Brunssum"
    ],
    
    // Use real Google reviews localized for Brunssum
    testimonials: realReviews,
    
    // FAQs specific to Brunssum
    faqs: [
      {
        question: "Wat kost een airco installatie in Brunssum gemiddeld?",
        answer: "Een airco installatie in Brunssum kost gemiddeld tussen €1.250 en €2.600, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor oudere woningen of mijnwerkerswoningen met dikke muren kunnen specifieke oplossingen nodig zijn, wat de prijs kan beïnvloeden. We maken graag een persoonlijke offerte op basis van uw specifieke wensen en situatie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Brunssum?",
        answer: "Een standaard airco installatie in Brunssum duurt meestal één werkdag. Bij complexere installaties, zoals in oudere woningen met dikke muren of bij systemen met meerdere units, kan dit uitlopen tot twee dagen. Onze ervaren monteurs werken efficiënt en zorgen voor een nette installatie met minimale overlast."
      },
      {
        question: "Welke airco is het meest geschikt voor een woning in Brunssum?",
        answer: "Voor woningen in Brunssum adviseren we vaak split-units van A-merken zoals Daikin of Mitsubishi Electric. Deze systemen zijn energiezuinig, stil en bieden zowel koeling als verwarming. Voor de karakteristieke woningen in Brunssum hebben we speciale installatiemethoden ontwikkeld die rekening houden met de bouwstijl en materialen. We kijken naar uw specifieke situatie en wensen om het meest geschikte systeem te adviseren."
      },
      {
        question: "Kan een airco in Brunssum ook verwarmen in de winter?",
        answer: "Absoluut! De moderne airco's die wij installeren in Brunssum zijn eigenlijk warmtepompen die zeer efficiënt kunnen koelen én verwarmen. Ze werken zelfs bij lage buitentemperaturen tot -15°C nog effectief. Veel van onze klanten in Brunssum gebruiken hun airco het hele jaar door - in de zomer voor verkoeling en in de voor- en najaar als hoofdverwarming of aanvulling op de centrale verwarming."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Brunssum?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Brunssum en omgeving. Regelmatig onderhoud is essentieel voor optimale prestaties en een lange levensduur van uw airconditioning. We raden aan om minimaal één keer per jaar onderhoud te laten uitvoeren, bij voorkeur voor het begin van het warmere seizoen. We bieden ook onderhoudscontracten aan met geplande jaarlijkse service."
      },
      {
        question: "Hebben jullie ervaring met airco installaties in Brunssumse mijnwerkerswoningen?",
        answer: "Zeker! We hebben ruime ervaring met het installeren van airconditioning in de karakteristieke mijnwerkerswoningen van Brunssum. Deze woningen hebben specifieke kenmerken zoals dikke muren en vaak een compacte bouw, wat om een speciale aanpak vraagt. Onze monteurs kennen de uitdagingen en hebben verschillende oplossingen ontwikkeld om airco's netjes en effectief in deze woningen te installeren, met respect voor de authentieke elementen."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "10 km"
      },
      {
        name: "Kerkrade",
        url: "/airco-installatie/kerkrade",
        distance: "12 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "15 km"
      },
      {
        name: "Maastricht",
        url: "/airco-installatie/maastricht",
        distance: "30 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
