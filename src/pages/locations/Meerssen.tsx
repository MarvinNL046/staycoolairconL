import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function MeerssenPage() {
  // Get real Google reviews localized for Meerssen
  const realReviews = getLocalizedReviews("Meerssen", 4);
  
  // City-specific data
  const cityData = {
    city: "Meerssen",
    region: "Zuid-Limburg",
    postalCodes: "6231, 6235, 6237",
    populationCount: 19000,
    locationImage: "/images/locations/meerssen.webp",
    installationCount: 75,
    
    // Climate-specific information for Meerssen
    climateFacts: [
      "Meerssen ligt in het Maasdal, wat zorgt voor een specifiek microklimaat",
      "Door de ligging tussen heuvels kan het in de zomer extra warm worden in Meerssen",
      "De groene omgeving van Meerssen zorgt voor een hogere luchtvochtigheid",
      "Woningen in het oude centrum van Meerssen warmen snel op in de zomer"
    ],
    
    // Special features for Meerssen installations
    specialFeatures: [
      "Speciale oplossingen voor de monumentale panden in het centrum van Meerssen",
      "Airco-installaties voor herenhuizen en villa's in Meerssen",
      "Stille buitenunits voor de historische woonwijken in Meerssen",
      "Energiezuinige oplossingen voor de nieuwere woningen in buitenwijken"
    ],
    
    // Use real Google reviews localized for Meerssen
    testimonials: realReviews,
    
    // FAQs specific to Meerssen
    faqs: [
      {
        question: "Wat kost een airco installatie in Meerssen gemiddeld?",
        answer: "De gemiddelde kosten voor een airco installatie in Meerssen liggen tussen €1.300 en €2.500, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor monumentale panden in het centrum van Meerssen, waar vaak speciale oplossingen nodig zijn, kan dit oplopen tot €3.000. We maken graag een persoonlijke offerte op basis van uw specifieke wensen en situatie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Meerssen?",
        answer: "Een standaard airco installatie in Meerssen duurt meestal één werkdag. Bij complexere installaties, zoals in historische panden met dikke muren, kan dit uitlopen tot maximaal twee dagen. We zorgen altijd voor een nette afwerking met minimale overlast."
      },
      {
        question: "Hebben jullie ervaring met airco's in monumentale panden in Meerssen?",
        answer: "Zeker! We hebben ruime ervaring met het installeren van airconditioning in de monumentale panden van Meerssen. Onze monteurs zijn gespecialiseerd in het discreet wegwerken van leidingen en het plaatsen van units op een manier die het karakter van uw pand respecteert. We werken indien nodig samen met monumentenzorg om te zorgen dat alles volgens de regels verloopt."
      },
      {
        question: "Welke airco is het meest geschikt voor een woning in Meerssen?",
        answer: "Voor woningen in Meerssen adviseren we vaak energiezuinige split-units van merken als Daikin of Mitsubishi Electric. Deze zijn stil, efficiënt en kunnen zowel koelen als verwarmen. Voor grotere woningen in Meerssen kan een multi-split systeem voordelig zijn, waarbij meerdere binnenunits op één buitenunit worden aangesloten. We kijken naar uw specifieke situatie en adviseren wat het beste past bij uw woning en wensen."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Meerssen?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Meerssen en omgeving. Regelmatig onderhoud is essentieel voor optimale prestaties en een lange levensduur. We raden aan om minimaal één keer per jaar onderhoud te laten uitvoeren, bij voorkeur voor het begin van de zomer. We bieden ook onderhoudscontracten aan met geplande jaarlijkse service."
      },
      {
        question: "Hoe snel kunnen jullie een airco installeren in Meerssen?",
        answer: "In Meerssen kunnen we meestal binnen 2-3 weken een airco installeren na goedkeuring van de offerte. Tijdens het piekseizoen (mei-augustus) kan dit uitlopen tot 3-4 weken. Voor spoedgevallen doen we ons best om sneller te schakelen. De installatie zelf duurt meestal één werkdag."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Maastricht",
        url: "/airco-installatie/maastricht",
        distance: "8 km"
      },
      {
        name: "Valkenburg",
        url: "/airco-installatie/valkenburg",
        distance: "10 km"
      },
      {
        name: "Beek",
        url: "/airco-installatie/beek",
        distance: "12 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "18 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
