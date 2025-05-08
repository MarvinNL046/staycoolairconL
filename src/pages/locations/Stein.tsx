import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function SteinPage() {
  // Get real Google reviews localized for Stein
  const realReviews = getLocalizedReviews("Stein", 4);

  // City-specific data
  const cityData = {
    city: "Stein",
    region: "Zuid-Limburg",
    postalCodes: "6171, 6172, 6173",
    populationCount: 25000,
    locationImage: "/images/locations/stein.webp", // You may need to add this image to your assets
    installationCount: 65,
    
    // Climate-specific information for Stein
    climateFacts: [
      "Stein ligt in het Maasdal waardoor het in de zomer warmer kan aanvoelen door hogere luchtvochtigheid",
      "De nabijheid van de Maas zorgt voor specifieke klimaatomstandigheden met meer mist in voor- en najaar",
      "Door de ligging aan de westflank van het heuvelland kan Stein gevoelig zijn voor opwarming bij oostenwind"
    ],
    
    // Special features for Stein installations
    specialFeatures: [
      "Specifieke oplossingen voor de typische jaren '50 en '60 mijnwerkerswoningen in Stein",
      "Aangepaste montage voor de karakteristieke woningen in oudere wijken zoals Oud-Stein",
      "Waterbestendige installaties voor de lager gelegen gebieden nabij de Maas"
    ],
    
    // Use real Google reviews
    testimonials: realReviews,
    
    // FAQs specific to Stein
    faqs: [
      {
        question: "Wat kost een airco installatie in Stein gemiddeld?",
        answer: "De gemiddelde kosten voor een airco installatie in Stein liggen tussen €1.300 en €2.600, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor de karakteristieke oudere woningen in Oud-Stein kunnen speciale installatiemethoden nodig zijn, wat invloed kan hebben op de prijs. We maken graag een persoonlijke offerte op basis van uw specifieke wensen en situatie."
      },
      {
        question: "Hebben jullie ervaring met airco installaties in de oudere woningen van Stein?",
        answer: "Zeker! We hebben ruime ervaring met het installeren van airconditioning in de karakteristieke woningen van Oud-Stein en de mijnwerkerswoningen in de gemeente. Onze monteurs weten precies hoe ze moeten omgaan met de specifieke bouwstijl en materialen van deze woningen, waarbij we altijd streven naar een nette afwerking die past bij het karakter van uw woning."
      },
      {
        question: "Is een airco in Stein ook geschikt voor verwarming in de winter?",
        answer: "Absoluut! Moderne aircosystemen zijn uitstekende warmtepompen die zeer efficiënt kunnen verwarmen, zelfs bij lagere buitentemperaturen. Dit is bijzonder nuttig in Stein, waar de nabijheid van de Maas voor vochtige koude kan zorgen in de wintermaanden. Een airco kan tot 70% energiezuiniger zijn dan traditionele elektrische verwarming."
      },
      {
        question: "Hoe lang duurt een airco installatie in Stein?",
        answer: "Een standaard airco installatie in Stein duurt gemiddeld één werkdag. Bij complexere situaties, zoals in oudere panden in Oud-Stein of bij installaties waar extra leidingwerk nodig is, kan dit uitlopen tot maximaal twee dagen. We werken altijd zorgvuldig en nemen de tijd om alles netjes af te werken."
      },
      {
        question: "Bieden jullie speciale oplossingen voor woningen in het lager gelegen Maasgebied?",
        answer: "Jazeker, voor woningen in de lager gelegen gebieden nabij de Maas adviseren we vaak extra bescherming voor de buitenunit en gebruiken we waar nodig verhoogde montagebeugels. Dit zorgt voor betere bescherming tegen eventuele wateroverlast en verlengt de levensduur van uw systeem. Onze monteurs zijn bekend met de specifieke uitdagingen van deze locaties in Stein."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Elsloo",
        url: "/airco-installatie/elsloo",
        distance: "3 km"
      },
      {
        name: "Geleen",
        url: "/airco-installatie/geleen",
        distance: "6 km"
      },
      {
        name: "Beek",
        url: "/airco-installatie/beek",
        distance: "8 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "10 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
