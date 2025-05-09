import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function GennepPage() {
  // Get real Google reviews localized for Gennep
  const realReviews = getLocalizedReviews("Gennep", 4);

  // City-specific data
  const cityData = {
    city: "Gennep",
    region: "Noord-Limburg",
    postalCodes: "6591, 6595, 6598, 6599",
    populationCount: 17535,
    installationCount: 75,
    
    // Climate-specific information for Gennep
    climateFacts: [
      "Gemiddeld 22-27 zomerse dagen (25°C+) per jaar in Gennep",
      "Door de ligging aan de Maas kan de luchtvochtigheid in Gennep in de zomer hoog oplopen",
      "Het microklimaat in Gennep wordt beïnvloed door de nabijheid van de Maasduinen"
    ],
    
    // Special features for Gennep installations
    specialFeatures: [
      "Specifieke airco-oplossingen voor de historische panden in het centrum van Gennep",
      "Aangepaste installaties voor de karakteristieke woningbouw in wijken als Milsbeek en Ottersum",
      "Stille systemen die passen binnen het rustige karakter van Gennep en omgeving"
    ],
    
    // Use real Google reviews or if not available, sample reviews
    testimonials: realReviews.length > 0 ? realReviews : [
      {
        name: "Joris van den Berg",
        rating: 5,
        comment: "Uitstekende service bij de installatie van onze airco in Gennep. Het team was zeer professioneel en heeft alle details zorgvuldig afgewerkt. De airco werkt fantastisch, zelfs tijdens de heetste dagen afgelopen zomer.",
        date: "April 2025"
      },
      {
        name: "Linda Versteegen",
        rating: 5,
        comment: "StayCool Airco heeft perfect werk geleverd in ons huis in Gennep. Het advies was deskundig, de installatie netjes en de prijs was zeer redelijk. Een echte aanrader voor iedereen in de regio.",
        date: "Maart 2025"
      },
      {
        name: "Pieter Wolters",
        rating: 4,
        comment: "Goede ervaring met de installatie van onze airco in Milsbeek. De monteurs waren vakkundig en hebben alles netjes achtergelaten. De planning liep iets uit, maar verder zeer tevreden met het resultaat.",
        date: "Februari 2025"
      },
      {
        name: "Margriet Janssen",
        rating: 5,
        comment: "Wij zijn erg blij met onze nieuwe airco in Gennep-centrum. Ondanks de uitdagingen van ons oude pand heeft StayCool een perfecte oplossing gevonden. De airco is stil, effectief en ziet er mooi uit.",
        date: "Januari 2025"
      }
    ],
    
    // FAQs specific to Gennep
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Gennep?",
        answer: "De kosten voor een airco installatie in Gennep variëren van €1.250 tot €2.500 voor een standaard single-split systeem. Voor historische panden in het centrum kan er een meerprijs gelden vanwege specifieke aanpassingen. We maken graag een persoonlijke afspraak voor een exacte prijsopgave."
      },
      {
        question: "Hoelang duurt een airco installatie in Gennep gemiddeld?",
        answer: "Een standaard airco installatie in Gennep duurt ongeveer één werkdag. Bij oudere of monumentale panden kan dit uitlopen tot twee dagen. We zorgen altijd voor een nette en zorgvuldige installatie met minimale overlast."
      },
      {
        question: "Zijn er speciale vergunningen nodig voor een airco in Gennep?",
        answer: "In de gemeente Gennep is voor de meeste standaard aircosystemen geen vergunning nodig, mits de buitenunit niet aan de voorgevel wordt geplaatst. Voor panden in het beschermde stadsgezicht of monumenten gelden aanvullende regels. We adviseren u hierover tijdens ons vrijblijvende adviesgesprek."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Gennep?",
        answer: "Ja, we bieden professioneel onderhoud voor alle aircosystemen in Gennep en omgeving. We raden aan om uw airco jaarlijks te laten onderhouden voor optimale prestaties en een langere levensduur. We hebben speciale onderhoudscontracten met aantrekkelijke voorwaarden."
      },
      {
        question: "Werken jullie met specifieke merken voor Gennep en omgeving?",
        answer: "We werken met verschillende hoogwaardige merken die zich hebben bewezen in het Nederlandse klimaat. Voor woningen in Gennep adviseren we vaak Daikin, Mitsubishi en Toshiba vanwege hun betrouwbaarheid en stille werking, wat goed past bij het rustige karakter van Gennep."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Heijen",
        url: "/airco-installatie/heijen",
        distance: "4 km"
      },
      {
        name: "Milsbeek",
        url: "/airco-installatie/milsbeek",
        distance: "5 km"
      },
      {
        name: "Ottersum",
        url: "/airco-installatie/ottersum",
        distance: "3 km"
      },
      {
        name: "Venray",
        url: "/airco-installatie/venray",
        distance: "22 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
