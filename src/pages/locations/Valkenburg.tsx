import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function ValkenburgPage() {
  // Get real Google reviews localized for Valkenburg
  const realReviews = getLocalizedReviews("Valkenburg", 4);
  
  // City-specific data
  const cityData = {
    city: "Valkenburg",
    region: "Zuid-Limburg",
    postalCodes: "6301, 6325",
    populationCount: 16800,
    locationImage: "/images/locations/valkenburg.webp",
    installationCount: 65,
    
    // Climate-specific information for Valkenburg
    climateFacts: [
      "Valkenburg ligt in een dal, wat zorgt voor warme zomerdagen met weinig wind",
      "Door de beschutte ligging tussen de heuvels kan het in Valkenburg extra warm aanvoelen",
      "Het toeristische centrum van Valkenburg heeft een duidelijk hitte-eiland effect",
      "De mergel in de ondergrond en gebouwen absorbeert overdag warmte die 's nachts vrijkomt"
    ],
    
    // Special features for Valkenburg installations
    specialFeatures: [
      "Speciale expertise voor airco's in de mergelstenen panden in Valkenburg",
      "Oplossingen voor hotels en B&B's in het toeristische centrum",
      "Discrete installatie voor monumentale panden in historisch Valkenburg",
      "Energiezuinige koelsystemen voor zowel oude als nieuwe woningen"
    ],
    
    // Use real Google reviews localized for Valkenburg
    testimonials: realReviews,
    
    // FAQs specific to Valkenburg
    faqs: [
      {
        question: "Wat kost een airco installatie in Valkenburg gemiddeld?",
        answer: "Een airco installatie in Valkenburg kost gemiddeld tussen €1.350 en €2.700, afhankelijk van het type systeem en de specifieke kenmerken van uw woning. Voor karakteristieke mergelstenen panden, waar vaak speciale installatiemethoden nodig zijn, kan de prijs iets hoger uitvallen. We maken graag een persoonlijke offerte op basis van uw specifieke situatie."
      },
      {
        question: "Hoe lang duurt een airco-installatie in Valkenburg?",
        answer: "Een standaard airco installatie in Valkenburg duurt meestal één werkdag. Voor complexere installaties, zoals in monumentale panden of hotels, kan dit uitlopen tot twee dagen. We zorgen altijd voor een nette en snelle installatie met minimale overlast voor u en uw eventuele gasten."
      },
      {
        question: "Hebben jullie ervaring met airco's in mergelstenen panden?",
        answer: "Absoluut! We hebben ruime ervaring met het installeren van airconditioning in de typische mergelstenen panden van Valkenburg. Deze gebouwen vragen om een specifieke aanpak vanwege hun unieke eigenschappen. Onze monteurs zijn gespecialiseerd in het discreet wegwerken van leidingen en units, waarbij we de authentieke kenmerken van uw pand respecteren."
      },
      {
        question: "Welke airco is het meest geschikt voor B&B's en hotels in Valkenburg?",
        answer: "Voor B&B's en kleinere hotels in Valkenburg adviseren we vaak multi-split systemen, waarbij meerdere kamers kunnen worden gekoeld met één buitenunit. Deze oplossing is zowel kostenefficiënt als esthetisch, omdat er minder buitenunits nodig zijn. Voor grotere hotels kunnen VRF-systemen de beste oplossing zijn. We hebben veel ervaring met de toeristische sector in Valkenburg en denken graag met u mee over de beste oplossing voor uw accommodatie."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Valkenburg?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Valkenburg en omgeving. Regelmatig onderhoud is essentieel voor optimale prestaties, hygiëne en een lange levensduur van uw systeem. Dit is vooral belangrijk voor accommodaties die gasten ontvangen. We raden aan om minimaal één keer per jaar een onderhoudsbeurt te laten uitvoeren, bij voorkeur voor het begin van het warme seizoen."
      },
      {
        question: "Hoe stil zijn de airco's die jullie installeren in Valkenburg?",
        answer: "We installeren in Valkenburg uitsluitend moderne, stille airco's met geluidsniveaus vanaf 19 dB(A) voor de binnenunits. Dit is vergelijkbaar met gefluister en nauwelijks hoorbaar. Voor de buitenunits, die buiten worden geplaatst, selecteren we modellen die voldoen aan de strenge geluidsnormen. Dit is vooral belangrijk in een toeristische plaats als Valkenburg, waar rust en comfort voor bewoners en gasten essentieel zijn."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Maastricht",
        url: "/airco-installatie/maastricht",
        distance: "12 km"
      },
      {
        name: "Meerssen",
        url: "/airco-installatie/meerssen",
        distance: "10 km"
      },
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "16 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "25 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
