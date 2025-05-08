import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function MaastrichtPage() {
  // Get real Google reviews localized for Maastricht
  const realReviews = getLocalizedReviews("Maastricht", 4);
  
  // City-specific data
  const cityData = {
    city: "Maastricht",
    region: "Zuid-Limburg",
    postalCodes: "6211, 6212, 6213, 6214, 6215, 6216, 6217, 6218, 6219, 6221, 6222, 6223, 6224, 6225, 6226, 6227, 6228, 6229",
    populationCount: 121000,
    locationImage: "/images/locations/maastricht.webp",
    installationCount: 180,
    
    // Climate-specific information for Maastricht
    climateFacts: [
      "Maastricht heeft gemiddeld de hoogste temperaturen van Nederland in de zomer",
      "Door de ligging in het Maasdal kan het in Maastricht zeer benauwd aanvoelen",
      "Het stadscentrum van Maastricht heeft een sterk hitte-eiland effect",
      "Maastricht heeft vaak als eerste in Nederland tropische dagen (30°C+)"
    ],
    
    // Special features for Maastricht installations
    specialFeatures: [
      "Specialistische ervaring met airco installaties in monumentale panden in Maastricht",
      "Oplossingen voor studentenwoningen en appartementen in het centrum",
      "Stille airco's voor de dichtbevolkte wijken van Maastricht",
      "Energiezuinige systemen voor moderne woningen in bijvoorbeeld Céramique"
    ],
    
    // Use real Google reviews localized for Maastricht
    testimonials: realReviews,
    
    // FAQs specific to Maastricht
    faqs: [
      {
        question: "Wat kost een airco installatie in Maastricht gemiddeld?",
        answer: "De kosten voor een airco installatie in Maastricht variëren van €1.250 tot €2.800, afhankelijk van het type systeem en de specifieke situatie van uw woning of bedrijfspand. Voor monumentale panden in het centrum van Maastricht, waar vaak speciale oplossingen nodig zijn, kan de prijs hoger uitvallen. We maken graag een persoonlijke offerte op basis van uw specifieke situatie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Maastricht?",
        answer: "Een standaard airco installatie in Maastricht duurt meestal één werkdag. Bij complexere installaties, zoals in monumentale panden in het centrum van Maastricht, kan dit uitlopen tot twee dagen. We zorgen altijd voor minimale overlast en laten alles netjes achter."
      },
      {
        question: "Hebben jullie ervaring met monumentale panden in Maastricht?",
        answer: "Absoluut! We hebben ruime ervaring met het installeren van airconditioning in de vele monumentale panden die Maastricht rijk is. Onze monteurs zijn gespecialiseerd in het discreet wegwerken van leidingen en units, waarbij we de historische kenmerken van het pand respecteren. We werken indien nodig samen met monumentenzorg om te zorgen dat alles volgens de regels verloopt."
      },
      {
        question: "Welke airco is het meest geschikt voor appartementen in Maastricht?",
        answer: "Voor appartementen in Maastricht adviseren we vaak wandmodellen van merken als Daikin, Mitsubishi Electric of Toshiba, die zowel stijlvol als stil zijn. Deze units zijn eenvoudig te installeren met minimale ingrepen aan de woning. Voor appartementen met beperkingen voor het plaatsen van buitenunits hebben we speciale oplossingen, zoals plaatsing op balkons of daken."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Maastricht?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Maastricht en omgeving. Regelmatig onderhoud is essentieel voor optimale prestaties en een lange levensduur. We raden aan om minimaal één keer per jaar een onderhoudsbeurt te laten uitvoeren, bij voorkeur vóór het warme seizoen."
      },
      {
        question: "Hoeveel energie verbruikt een airco in Maastricht?",
        answer: "Moderne airco's zijn veel energiezuiniger dan oudere modellen. Een gemiddeld A+++ model verbruikt ongeveer 0,25-0,5 kWh per uur, afhankelijk van de ingestelde temperatuur en de buitentemperatuur. In Maastricht, waar de zomers steeds warmer worden, is een energiezuinige airco een verstandige investering. We adviseren u graag over de meest efficiënte modellen voor uw specifieke situatie."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Meerssen",
        url: "/airco-installatie/meerssen",
        distance: "8 km"
      },
      {
        name: "Valkenburg",
        url: "/airco-installatie/valkenburg",
        distance: "12 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "20 km"
      },
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "24 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
