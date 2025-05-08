import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function SittardPage() {
  // Get real Google reviews localized for Sittard
  const realReviews = getLocalizedReviews("Sittard", 4);
  
  // City-specific data
  const cityData = {
    city: "Sittard",
    region: "Zuid-Limburg",
    postalCodes: "6131, 6132, 6133, 6134, 6135, 6136, 6137",
    populationCount: 93000,
    locationImage: "/images/locations/sittard.webp",
    installationCount: 230,
    
    // Climate-specific information for Sittard
    climateFacts: [
      "Sittard ligt in een dal, wat zorgt voor warme zomers met weinig windverkoeling",
      "De regio Sittard-Geleen heeft een relatief hoge luchtvochtigheid in de zomer",
      "Door de nabijheid van industriegebieden kan Sittard extra warm worden",
      "Het centrum van Sittard kan tot 4°C warmer zijn dan omliggende gebieden"
    ],
    
    // Special features for Sittard installations
    specialFeatures: [
      "Speciale expertise voor de karakteristieke panden in de historische binnenstad van Sittard",
      "Aangepaste oplossingen voor de vooroorlogse wijken in Sittard",
      "Ervaring met airco-installaties in winkelpanden in het centrum van Sittard",
      "Stille systemen voor de dichtbebouwde wijken in Sittard-Geleen"
    ],
    
    // Use real Google reviews localized for Sittard
    testimonials: realReviews,
    
    // FAQs specific to Sittard
    faqs: [
      {
        question: "Wat kost een airco installatie in Sittard gemiddeld?",
        answer: "De gemiddelde kosten voor een airco installatie in Sittard liggen tussen €1.250 en €2.900, afhankelijk van het type systeem, het vermogen en de complexiteit van de installatie. Voor historische panden in het centrum van Sittard, waar vaak speciale installatiemethoden nodig zijn, kunnen de kosten iets hoger uitvallen. We maken graag een persoonlijke offerte op basis van uw specifieke situatie."
      },
      {
        question: "Hoelang duurt het installeren van een airco in Sittard?",
        answer: "De meeste airco-installaties in Sittard worden binnen één werkdag afgerond. Voor meer complexe situaties, zoals installaties in de historische binnenstad of bij meerdere units, kan dit uitlopen tot twee dagen. We werken efficiënt en zorgen ervoor dat alles netjes wordt opgeleverd met minimale overlast."
      },
      {
        question: "Hebben jullie ervaring met installaties in oude panden in Sittard?",
        answer: "Zeker! We hebben uitgebreide ervaring met het installeren van airconditioning in de historische panden van Sittard. Onze monteurs zijn gespecialiseerd in het discreet wegwerken van leidingen en units, waarbij we rekening houden met de unieke kenmerken van deze gebouwen. We werken indien nodig samen met lokale monumentenzorg om te zorgen dat alles volgens de regels verloopt."
      },
      {
        question: "Welke airco is het meest geschikt voor appartementen in Sittard?",
        answer: "Voor appartementen in Sittard adviseren we vaak wandmodellen van merken als Daikin of Mitsubishi Electric, die zowel stijlvol als stil zijn. Deze units zijn eenvoudig te installeren met minimale structurele aanpassingen, en veel modellen hebben speciale filters die de luchtkwaliteit verbeteren. Voor appartementen met beperkingen voor buitenunits hebben we ook alternatieve oplossingen, zoals mobiele airco's of speciale plaatsingstechnieken voor buitenunits."
      },
      {
        question: "Bieden jullie ook onderhoud aan voor airco's in Sittard?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Sittard en omgeving. Regelmatig onderhoud is essentieel voor een optimale werking en langere levensduur van uw systeem. We raden aan om minimaal één keer per jaar een onderhoudsbeurt te laten uitvoeren, bij voorkeur vóór het warmere seizoen. We bieden ook onderhoudscontracten aan met geplande jaarlijkse service."
      },
      {
        question: "Kan een airco in Sittard ook verwarmen in de winter?",
        answer: "Absoluut! De moderne aircosystemen die wij installeren in Sittard zijn warmtepompen die zeer efficiënt kunnen verwarmen, zelfs bij lagere buitentemperaturen. Deze systemen kunnen tot 70% energiezuiniger zijn dan traditionele elektrische verwarming. Vooral in de voor- en najaar, wanneer het nog niet koud genoeg is om de centrale verwarming aan te zetten, kan een airco een zeer kosteneffectieve verwarmingsoplossing zijn."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Geleen",
        url: "/airco-installatie/geleen",
        distance: "5 km"
      },
      {
        name: "Stein",
        url: "/airco-installatie/stein",
        distance: "8 km"
      },
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "15 km"
      },
      {
        name: "Maastricht",
        url: "/airco-installatie/maastricht",
        distance: "20 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
