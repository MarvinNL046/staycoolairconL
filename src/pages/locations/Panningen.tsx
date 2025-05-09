import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function PanningenPage() {
  // Get real Google reviews localized for Panningen
  const realReviews = getLocalizedReviews("Panningen", 4);

  // City-specific data
  const cityData = {
    city: "Panningen",
    region: "Noord-Limburg",
    postalCodes: "5981",
    populationCount: 7585,
    installationCount: 35,
    
    // Climate-specific information for Panningen
    climateFacts: [
      "Gemiddeld 23-27 zomerse dagen (25°C+) per jaar in Panningen",
      "Door de ligging in de 'Peel' ervaart Panningen een specifiek microklimaat met hogere temperaturen in de zomer",
      "De nabijheid van bosrijke gebieden zorgt voor een relatief hoge luchtvochtigheid in Panningen"
    ],
    
    // Special features for Panningen installations
    specialFeatures: [
      "Airco-oplossingen speciaal afgestemd op de verschillende woningtypen in Panningen",
      "Expertise in installaties voor zowel nieuwbouwwijken als oudere delen van het centrum",
      "Extra aandacht voor energiezuinige systemen die passen bij de duurzame ambitie van gemeente Peel en Maas"
    ],
    
    // Use real Google reviews or if not available, sample reviews
    testimonials: realReviews.length > 0 ? realReviews : [
      {
        name: "Mark Janssen",
        rating: 5,
        comment: "Zeer tevreden met onze nieuwe airco in Panningen. Het team van StayCool was professioneel, netjes en heeft alles perfect geïnstalleerd. De airco werkt uitstekend en we zijn goed voorbereid op de zomer.",
        date: "Mei 2025"
      },
      {
        name: "Linda van Dijk",
        rating: 5,
        comment: "StayCool Airco heeft ons uitstekend geholpen bij het kiezen en installeren van de juiste airco voor onze woning in Panningen. Het advies was duidelijk en de installatie is zeer netjes uitgevoerd. Een aanrader!",
        date: "April 2025"
      },
      {
        name: "Pieter Smits",
        rating: 4,
        comment: "Goede ervaring met StayCool Airco in onze nieuwbouwwoning in Panningen. De installatie verliep soepel en de airco werkt prima. Alleen de levertijd was iets langer dan verwacht, vandaar 4 sterren.",
        date: "Maart 2025"
      },
      {
        name: "Marieke Verstappen",
        rating: 5,
        comment: "Onze jaren '70 woning in Panningen is nu eindelijk aangenaam koel in de zomer dankzij StayCool Airco. De monteurs hebben alles zeer netjes weggewerkt en ook nog waardevolle tips gegeven voor het gebruik.",
        date: "Februari 2025"
      }
    ],
    
    // FAQs specific to Panningen
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Panningen?",
        answer: "De kosten voor een airco installatie in Panningen liggen gemiddeld tussen €1.250 en €2.400 voor een single-split systeem, afhankelijk van het gekozen model en de specifieke situatie van uw woning. Voor nieuwbouwwoningen kan er soms een voordeliger installatie mogelijk zijn vanwege de moderne infrastructuur. We maken graag een vrijblijvende offerte op maat na een inspectie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Panningen?",
        answer: "Een standaard airco installatie in Panningen duurt meestal één werkdag. Voor complexere situaties zoals oudere woningen in het centrum kan dit uitlopen tot maximaal anderhalve dag. We zorgen altijd voor een nette en efficiënte afwerking met minimale overlast."
      },
      {
        question: "Zijn er subsidies beschikbaar voor airco installatie in Panningen?",
        answer: "In de gemeente Peel en Maas, waar Panningen onder valt, zijn er momenteel ISDE-subsidies beschikbaar voor warmtepompen en airco's die ook kunnen verwarmen. We informeren u graag over de actuele subsidieregeling en helpen bij het aanvragen ervan. Dit kan het kostenplaatje aanzienlijk verlagen."
      },
      {
        question: "Welk type airco is het meest geschikt voor woningen in Panningen?",
        answer: "Voor woningen in Panningen adviseren we vaak inverter-gestuurde split-units van merken zoals Daikin, Mitsubishi of Toshiba. Deze zijn energiezuinig, stil en kunnen zowel koelen als verwarmen. Voor de nieuwere, goed geïsoleerde woningen in wijken zoals Ringovenpark kunnen compactere modellen volstaan, terwijl oudere woningen vaak krachtigere units nodig hebben."
      },
      {
        question: "Installeren jullie ook airco's in bedrijfspanden in Panningen?",
        answer: "Zeker! Naast installaties in woningen hebben we ruime ervaring met het installeren van airconditioning in winkels, kantoren en andere bedrijfspanden in Panningen en omgeving. We bieden op maat gemaakte oplossingen die passen bij de specifieke eisen van commerciële ruimtes, met aandacht voor energieverbruik en comfort van medewerkers en klanten."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Helden",
        url: "/airco-installatie/helden",
        distance: "3 km"
      },
      {
        name: "Meijel",
        url: "/airco-installatie/meijel",
        distance: "8 km"
      },
      {
        name: "Venlo",
        url: "/airco-installatie/venlo",
        distance: "18 km"
      },
      {
        name: "Roermond",
        url: "/airco-installatie/roermond",
        distance: "25 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
