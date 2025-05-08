import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function KerkradePage() {
  // Get real Google reviews localized for Kerkrade
  const realReviews = getLocalizedReviews("Kerkrade", 4);
  
  // City-specific data
  const cityData = {
    city: "Kerkrade",
    region: "Zuid-Limburg",
    postalCodes: "6461, 6462, 6463, 6464, 6465, 6466, 6467, 6468, 6469",
    populationCount: 45000,
    locationImage: "/images/locations/kerkrade.webp",
    installationCount: 90,
    
    // Climate-specific information for Kerkrade
    climateFacts: [
      "Kerkrade heeft door de hogere ligging vaak verkoelende winden in de zomer",
      "De stadsstructuur van voormalige mijnstad Kerkrade leidt tot lokale warmte-eilanden",
      "Het temperatuurverschil tussen dag en nacht kan in Kerkrade groter zijn dan elders",
      "De nabijheid van Duitse natuurgebieden zorgt voor redelijk goede luchtkwaliteit"
    ],
    
    // Special features for Kerkrade installations
    specialFeatures: [
      "Specifieke expertise met koeloplossingen voor de typische mijnwerkerswoningen",
      "Ervaring met installaties in naoorlogse wijken in Kerkrade",
      "Aangepaste systemen voor de hogere delen van Kerkrade met meer wind",
      "Stille buitenunits voor de dichtbebouwde wijken in het centrum"
    ],
    
    // Use real Google reviews localized for Kerkrade
    testimonials: realReviews,
    
    // FAQs specific to Kerkrade
    faqs: [
      {
        question: "Wat kost een airco installatie in Kerkrade gemiddeld?",
        answer: "Een airco installatie in Kerkrade kost gemiddeld tussen €1.200 en €2.700, afhankelijk van het type systeem, de grootte van de ruimte en de specifieke situatie van uw woning. Voor de karakteristieke mijnwerkerswoningen in Kerkrade, die vaak dikke muren hebben, zijn er speciale installatiemethoden die de kosten kunnen beïnvloeden. We maken graag een persoonlijke offerte op basis van uw specifieke wensen en situatie."
      },
      {
        question: "Welke airco is het meest geschikt voor een mijnwerkerswoning in Kerkrade?",
        answer: "Voor de typische mijnwerkerswoningen in Kerkrade, die vaak compacte ruimtes en dikke muren hebben, adviseren we meestal energiezuinige wandmodellen van merken als Daikin of Mitsubishi Electric. Deze kunnen efficiënt koelen en verwarmen en zijn relatief eenvoudig te installeren, zelfs in oudere woningen. De systemen zijn stil en compact, wat belangrijk is in de dichter bevolkte wijken van Kerkrade."
      },
      {
        question: "Hoe lang duurt een airco installatie in Kerkrade?",
        answer: "Een standaard airco installatie in Kerkrade duurt meestal één werkdag. Bij complexere installaties, zoals in oudere woningen met dikke muren of bij meerdere units, kan dit uitlopen tot maximaal twee dagen. Onze ervaren monteurs werken efficiënt en zorgen voor een nette installatie met minimale overlast."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Kerkrade?",
        answer: "Zeker! We bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Kerkrade en omgeving. Regelmatig onderhoud is essentieel voor optimale prestaties, een lange levensduur en een gezond binnenklimaat. We raden aan om minimaal één keer per jaar een onderhoudsbeurt te laten uitvoeren, bij voorkeur voor het begin van de zomer. We bieden ook onderhoudscontracten aan voor periodieke service."
      },
      {
        question: "Hoe energiezuinig zijn moderne airco's voor woningen in Kerkrade?",
        answer: "Moderne airco's die wij in Kerkrade installeren zijn zeer energiezuinig, met energielabels tot A+++. Ze verbruiken tot 50% minder stroom dan modellen van 10 jaar geleden. Bovendien kunnen ze in de winter ook zeer efficiënt verwarmen als warmtepomp, wat in Kerkrade met zijn heuvelachtige ligging en koudere winters een groot voordeel is. Voor een gemiddelde woonkamer in Kerkrade komt het stroomverbruik op ongeveer €0,25-€0,40 per uur tijdens koelen."
      },
      {
        question: "Is een vergunning nodig voor een airco in Kerkrade?",
        answer: "In de meeste gevallen is voor een airco installatie in Kerkrade geen vergunning nodig. Er zijn wel gemeentelijke richtlijnen over de plaatsing van buitenunits, vooral in beschermde stadsgezichten of bij monumentale panden. We zijn goed bekend met de lokale regelgeving in Kerkrade en zorgen ervoor dat uw installatie hieraan voldoet. Bij twijfel kunnen we u adviseren over eventuele vergunningsvereisten."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "7 km"
      },
      {
        name: "Brunssum",
        url: "/airco-installatie/brunssum",
        distance: "12 km"
      },
      {
        name: "Landgraaf",
        url: "/airco-installatie/landgraaf",
        distance: "9 km"
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
