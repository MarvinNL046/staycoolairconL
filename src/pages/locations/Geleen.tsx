import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function GeleenPage() {
  // Get real Google reviews localized for Geleen
  const realReviews = getLocalizedReviews("Geleen", 4);

  // City-specific data
  const cityData = {
    city: "Geleen",
    region: "Zuid-Limburg",
    postalCodes: "6163, 6164, 6165, 6166",
    populationCount: 33200,
    locationImage: "/images/locations/geleen.webp", // You may need to add this image to your assets
    installationCount: 85,
    
    // Climate-specific information for Geleen
    climateFacts: [
      "Geleen heeft gemiddeld 20-25 tropische dagen (30°C+) per jaar",
      "Door de nabijheid van industriegebied Chemelot kan de luchtkwaliteit in Geleen tijdens warme dagen extra belastend zijn",
      "De heuvelachtige omgeving van Geleen zorgt voor warmteverschillen tussen de wijken"
    ],
    
    // Special features for Geleen installations
    specialFeatures: [
      "Aangepaste airco-installaties voor woningen in de buurt van het Chemelot-terrein met extra luchtfiltering",
      "Speciale aandacht voor geluidsisolatie bij installaties nabij industriële gebieden",
      "Energiezuinige oplossingen voor de typische jaren '60/'70 woningen in Geleen-Zuid"
    ],
    
    // Use real Google reviews
    testimonials: realReviews,
    
    // FAQs specific to Geleen
    faqs: [
      {
        question: "Wat kost een airco installatie in Geleen gemiddeld?",
        answer: "De gemiddelde kosten voor een airco installatie in Geleen liggen tussen €1.250 en €2.700, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor woningen in Geleen-Zuid, met typische jaren '60/'70 architectuur, bieden we vaak speciale oplossingen voor betere integratie. We maken graag een persoonlijke offerte op basis van uw specifieke wensen en situatie."
      },
      {
        question: "Hebben jullie ervaring met airco installaties in de buurt van het Chemelot-terrein?",
        answer: "Jazeker! We hebben ruime ervaring met het installeren van airconditioningsystemen in de wijken rondom Chemelot. Voor deze locaties adviseren we vaak systemen met verbeterde luchtfiltering om de luchtkwaliteit in huis te optimaliseren. Onze monteurs zijn bekend met de specifieke eisen en oplossingen voor deze omgeving."
      },
      {
        question: "Hoe snel kunnen jullie een airco installeren in Geleen?",
        answer: "Na uw aanvraag kunnen we doorgaans binnen 1-2 weken langskomen voor een vrijblijvend adviesgesprek. De installatie zelf kan, afhankelijk van het seizoen en onze planning, meestal binnen 2-3 weken worden uitgevoerd. We zorgen altijd voor een snelle maar zorgvuldige installatie door onze ervaren monteurs."
      },
      {
        question: "Zijn er speciale vergunningen nodig voor een airco in Geleen?",
        answer: "In de meeste woonwijken van Geleen is geen speciale vergunning nodig voor het plaatsen van een airco, zolang de buitenunit niet aan de voorgevel wordt geplaatst en voldoet aan de geluidsnormen. In bepaalde beschermde wijken kunnen aanvullende regels gelden. We informeren u tijdens het adviesgesprek over de specifieke situatie voor uw woning."
      },
      {
        question: "Welke airco is het meest geschikt voor de oudere woningen in Geleen?",
        answer: "Voor de typische oudere woningen in Geleen, met name in Geleen-Zuid en Kluis, raden we vaak split-unit systemen aan met een optimale balans tussen vermogen en energieverbruik. Merken als Daikin en Mitsubishi bieden modellen die zich goed laten integreren in deze woningen en voldoende vermogen hebben om de vaak grotere ruimtes te koelen. We kijken altijd naar de specifieke isolatiewaarden en indeling van uw woning voor een passend advies."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "4 km"
      },
      {
        name: "Beek",
        url: "/airco-installatie/beek",
        distance: "5 km"
      },
      {
        name: "Stein",
        url: "/airco-installatie/stein",
        distance: "6 km"
      },
      {
        name: "Maastricht",
        url: "/airco-installatie/maastricht",
        distance: "15 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
