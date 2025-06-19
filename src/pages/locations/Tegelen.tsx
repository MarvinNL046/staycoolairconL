import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function TegelenPage() {
  // Get real Google reviews localized for Tegelen
  const realReviews = getLocalizedReviews("Tegelen", 4);
  
  // City-specific data
  const cityData = {
    city: "Tegelen",
    region: "Noord-Limburg",
    postalCodes: "5931, 5932",
    populationCount: 19000,
    locationImage: "/images/locations/default-city-image.webp",
    installationCount: 85,
    
    // Climate-specific information for Tegelen
    climateFacts: [
      "Tegelen ligt direct aan de Maas, waardoor vochtige warmte extra benauwd kan aanvoelen",
      "De historische bebouwing in het centrum van Tegelen warmt sterk op in de zomer",
      "Als onderdeel van Venlo ervaart Tegelen dezelfde warme stedelijke omstandigheden",
      "De keramische industrie geschiedenis van Tegelen heeft geleid tot veel bakstenen woningen die warmte vasthouden"
    ],
    
    // Special features for Tegelen installations
    specialFeatures: [
      "Ervaring met airco installaties in karakteristieke Tegelse woningen en villa's",
      "Specialistische kennis van installaties bij monumentale panden in het centrum",
      "Oplossingen voor woningen langs de Maas met hoge luchtvochtigheid",
      "Discrete installaties die passen bij de historische uitstraling van Tegelen"
    ],
    
    // Use real Google reviews localized for Tegelen
    testimonials: realReviews,
    
    // FAQs specific to Tegelen
    faqs: [
      {
        question: "Wat kost een airco installatie in Tegelen gemiddeld?",
        answer: "De kosten voor een airco installatie in Tegelen variëren van €1.200 tot €2.600, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor de karakteristieke oudere woningen in Tegelen zijn soms aangepaste oplossingen nodig, wat de prijs kan beïnvloeden. Voor moderne woningen hebben we efficiënte standaardoplossingen. We maken graag een persoonlijke offerte op basis van uw specifieke situatie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Tegelen?",
        answer: "Een standaard airco installatie in Tegelen duurt meestal één werkdag. Bij oudere woningen met dikke muren of monumentale panden kan dit uitlopen tot twee dagen vanwege de extra zorgvuldigheid die vereist is. Als lokale specialist zorgen we ervoor dat de installatie past bij het karakter van uw Tegelse woning."
      },
      {
        question: "Hebben jullie ervaring met monumentale panden in Tegelen?",
        answer: "Ja, Tegelen heeft een rijk historisch centrum met veel karakteristieke panden. We hebben ruime ervaring met het discreet installeren van airconditioning in oudere woningen, waarbij we de historische uitstraling respecteren. Onze monteurs zijn getraind in het werken met monumentale panden en zorgen voor installaties die vakkundig weggewerkt worden."
      },
      {
        question: "Kan een airco helpen tegen de vochtige warmte langs de Maas?",
        answer: "Absoluut! Airconditioning is zeer effectief tegen vochtige warmte. Tijdens het koelen onttrekken airco's automatisch vocht aan de lucht, wat het comfort aanzienlijk verhoogt. Voor woningen langs de Maas in Tegelen, waar de luchtvochtigheid vaak hoog is, kan een airco het verschil maken tussen een benauwde en een comfortabele woonruimte."
      },
      {
        question: "Welke airco is geschikt voor Tegelse villa's en karakteristieke woningen?",
        answer: "Voor de villa's en karakteristieke woningen in Tegelen adviseren we vaak premium wandmodellen die zowel effectief als stijlvol zijn. Merken zoals Daikin Emura, Mitsubishi Electric Premium of LG ARTCOOL combineren uitstekende prestaties met een design dat past bij hoogwaardige interieurs. We zorgen voor discrete installaties die de architectonische waarde behouden."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Tegelen?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Tegelen en omgeving. Regelmatig onderhoud is vooral belangrijk in vochtige omgevingen zoals langs de Maas. We raden aan om minimaal één keer per jaar een onderhoudsbeurt te laten uitvoeren, waarbij we ook extra aandacht besteden aan vochtgerelateerde aspecten."
      },
      {
        question: "Is airco verwarming efficiënt in Tegelen?",
        answer: "Ja, zeer efficiënt! De moderne airco warmtepompen die wij installeren in Tegelen kunnen tot 4-5 keer energiezuiniger zijn dan elektrische verwarming. Door de relatief milde winters in Noord-Limburg zijn warmtepomp-airco's zeer geschikt als aanvullende of zelfs primaire verwarming, vooral in combinatie met zonnepanelen."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Venlo",
        url: "/airco-installatie/venlo",
        distance: "3 km"
      },
      {
        name: "Belfeld",
        url: "/airco-installatie/belfeld",
        distance: "8 km"
      },
      {
        name: "Arcen",
        url: "/airco-installatie/arcen",
        distance: "12 km"
      },
      {
        name: "Horst",
        url: "/airco-installatie/horst",
        distance: "18 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}