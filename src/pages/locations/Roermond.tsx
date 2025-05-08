import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function RoermondPage() {
  // Get real Google reviews localized for Roermond
  const realReviews = getLocalizedReviews("Roermond", 4);

  // City-specific data
  const cityData = {
    city: "Roermond",
    region: "Midden-Limburg",
    postalCodes: "6041, 6042, 6043, 6044",
    populationCount: 58000,
    locationImage: "/images/locations/roermond.webp", // You may need to add this image to your assets
    installationCount: 120,
    
    // Climate-specific information for Roermond
    climateFacts: [
      "Gemiddeld 25-30 zomerse dagen (25°C+) per jaar in Roermond",
      "De Maasplassen in Roermond zorgen voor hogere luchtvochtigheid in de zomer",
      "Door de ligging langs de Maas kan Roermond erg benauwd aanvoelen tijdens warme dagen"
    ],
    
    // Special features for Roermond installations
    specialFeatures: [
      "Speciale aandacht voor installaties in historische panden in het centrum van Roermond",
      "Aangepaste oplossingen voor woningen in de buurt van de Maasplassen",
      "Mogelijkheden voor energiezuinige koeling in Roermondse nieuwbouwwijken"
    ],
    
    // Use real Google reviews
    testimonials: realReviews,
    
    // FAQs specific to Roermond
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Roermond?",
        answer: "De kosten voor een airco installatie in Roermond variëren van €1.200 tot €2.500 voor een single-split systeem, afhankelijk van het type unit en de specifieke situatie van uw woning. Voor een exacte prijsopgave maken we graag een afspraak voor een vrijblijvende inspectie en offerte."
      },
      {
        question: "Hoe lang duurt een airco installatie in Roermond gemiddeld?",
        answer: "Een standaard airco installatie in Roermond duurt meestal één werkdag. Bij complexere installaties, zoals in oudere panden in het historische centrum, kan dit uitlopen tot maximaal twee dagen. We zorgen altijd voor een nette en snelle afwerking."
      },
      {
        question: "Is er een vergunning nodig voor een airco in Roermond?",
        answer: "In de gemeente Roermond is voor de meeste airco-installaties geen vergunning nodig, mits de buitenunit niet aan de voorgevel wordt geplaatst en voldoet aan de geluidsnormen. In het beschermde stadsgezicht van het centrum gelden strengere regels. We adviseren u hierover tijdens ons vrijblijvende adviesgesprek."
      },
      {
        question: "Werken jullie samen met lokale partners in Roermond?",
        answer: "Ja, we werken nauw samen met lokale partners in Roermond, waaronder elektriciens en bouwbedrijven. Dit zorgt voor een soepel installatieproces en goede afstemming bij complexere projecten."
      },
      {
        question: "Kan een airco in Roermond ook verwarmen in de winter?",
        answer: "Zeker! De moderne aircosystemen die wij installeren in Roermond zijn warmtepompen die ook zeer efficiënt kunnen verwarmen, zelfs bij lagere buitentemperaturen. Dit maakt ze ideaal voor het Limburgse klimaat en kan een energiezuinig alternatief zijn voor traditionele verwarming."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Swalmen",
        url: "/airco-installatie/swalmen",
        distance: "7 km"
      },
      {
        name: "Weert",
        url: "/airco-installatie/weert",
        distance: "15 km"
      },
      {
        name: "Echt",
        url: "/airco-installatie/echt",
        distance: "18 km"
      },
      {
        name: "Venlo",
        url: "/airco-installatie/venlo",
        distance: "30 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
