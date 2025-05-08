import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function VenloPage() {
  // Get real Google reviews localized for Venlo
  const realReviews = getLocalizedReviews("Venlo", 4);
  
  // City-specific data
  const cityData = {
    city: "Venlo",
    region: "Noord-Limburg",
    postalCodes: "5911, 5912, 5913, 5914, 5915, 5916, 5921, 5922, 5923, 5924, 5925, 5926, 5927, 5928",
    populationCount: 102000,
    locationImage: "/images/locations/venlo.webp",
    installationCount: 210,
    
    // Climate-specific information for Venlo
    climateFacts: [
      "Venlo heeft door de ligging aan de Maas een bijzonder microklimaat",
      "Zomers in Venlo kunnen zeer warm worden met temperaturen tot 35°C+",
      "De binnenstad van Venlo heeft last van het hitte-eiland effect",
      "Door de valleistructuur kan Venlo bij hitte zeer benauwd aanvoelen"
    ],
    
    // Special features for Venlo installations
    specialFeatures: [
      "Speciale oplossingen voor de historische panden in de binnenstad van Venlo",
      "Ervaring met klimaatbeheersing voor winkels in het centrum van Venlo",
      "Efficiënte airco-oplossingen voor de nieuwbouwwijken in Venlo",
      "Stille buitenunits voor de dicht bebouwde gebieden van Venlo"
    ],
    
    // Use real Google reviews localized for Venlo
    testimonials: realReviews,
    
    // FAQs specific to Venlo
    faqs: [
      {
        question: "Wat zijn de gemiddelde kosten voor een airco installatie in Venlo?",
        answer: "De kosten voor airco installatie in Venlo liggen gemiddeld tussen €1.300 en €2.800, afhankelijk van het type systeem en de complexiteit van de installatie. Voor appartementen in het centrum van Venlo, waar vaak creatieve oplossingen nodig zijn voor het plaatsen van de buitenunit, kunnen de kosten iets hoger liggen. We maken graag een persoonlijke offerte op basis van uw specifieke situatie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Venlo?",
        answer: "De meeste airco installaties in Venlo worden binnen één werkdag afgerond. Voor complexere projecten, zoals installaties in historische panden in het centrum van Venlo of bij meerdere units, kan dit uitlopen tot twee dagen. We werken efficiënt en zorgen voor minimale overlast tijdens de installatie."
      },
      {
        question: "Bieden jullie ook onderhoud aan voor airco's in Venlo?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor airco's in heel Venlo. Regelmatig onderhoud is essentieel voor optimale prestaties en een lange levensduur van uw airconditioning. We raden aan om minimaal eenmaal per jaar een onderhoudsbeurt te laten uitvoeren, idealiter vóór het begin van het warme seizoen."
      },
      {
        question: "Welke merken airco's installeren jullie in Venlo?",
        answer: "In Venlo installeren we hoogwaardige airconditioners van gerenommeerde merken zoals Daikin, Mitsubishi Electric, Toshiba, LG en Panasonic. Deze merken bieden uitstekende prestaties, hoge energie-efficiëntie en betrouwbaarheid. We adviseren u graag welk merk en model het beste past bij uw specifieke situatie."
      },
      {
        question: "Hebben jullie ervaring met airco installaties in historische panden in Venlo?",
        answer: "Zeker! We hebben ruime ervaring met het installeren van airconditioning in historische panden in het centrum van Venlo. We werken nauw samen met monumentenzorg en zorgen ervoor dat de installatie voldoet aan alle regelgeving. Onze monteurs zijn gespecialiseerd in het discreet wegwerken van leidingen en het plaatsen van buitenunits op een manier die het historische karakter van het pand respecteert."
      },
      {
        question: "Hoe snel kunnen jullie een airco installeren in Venlo?",
        answer: "Voor standaard installaties in Venlo kunnen we vaak binnen 1-2 weken een afspraak inplannen. In de piekperiode (mei-augustus) kan de wachttijd oplopen tot 3-4 weken. Voor spoedgevallen, zoals bij uitval van uw huidige systeem, doen we ons best om u zo snel mogelijk te helpen. We raden aan om tijdig te boeken, zodat u verzekerd bent van koeling wanneer u die nodig heeft."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Tegelen",
        url: "/airco-installatie/tegelen",
        distance: "5 km"
      },
      {
        name: "Blerick",
        url: "/airco-installatie/blerick",
        distance: "3 km"
      },
      {
        name: "Roermond",
        url: "/airco-installatie/roermond",
        distance: "30 km"
      },
      {
        name: "Weert",
        url: "/airco-installatie/weert",
        distance: "35 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
