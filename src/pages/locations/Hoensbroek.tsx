import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function HoensbroekPage() {
  // Get real Google reviews localized for Hoensbroek
  const realReviews = getLocalizedReviews("Hoensbroek", 4);

  // City-specific data
  const cityData = {
    city: "Hoensbroek",
    region: "Zuid-Limburg",
    postalCodes: "6431, 6432, 6433",
    populationCount: 19601,
    installationCount: 85,
    
    // Climate-specific information for Hoensbroek
    climateFacts: [
      "Gemiddeld 25-30 zomerse dagen (25°C+) per jaar in Hoensbroek",
      "Door de ligging in het heuvelachtige Zuid-Limburg kan de temperatuur in Hoensbroek sterk variëren",
      "De bebouwingsdichtheid in Hoensbroek zorgt voor hogere temperaturen tijdens hittegolven"
    ],
    
    // Special features for Hoensbroek installations
    specialFeatures: [
      "Airco-oplossingen op maat voor de karakteristieke woningen in Hoensbroek-centrum",
      "Speciale installaties voor de verschillende woningtypen in wijken zoals Maria-Gewanden en De Dem",
      "Stille buitenunits speciaal geselecteerd voor dichtbebouwde buurten in Hoensbroek"
    ],
    
    // Use real Google reviews or if not available, sample reviews
    testimonials: realReviews.length > 0 ? realReviews : [
      {
        name: "Mark Theunissen",
        rating: 5,
        comment: "StayCool Airco heeft perfect werk geleverd in onze woning in Hoensbroek. De monteurs wisten precies hoe ze moesten omgaan met de specifieke bouwstijl van ons jaren '30 huis. De airco werkt fantastisch en maakt nauwelijks geluid.",
        date: "Mei 2025"
      },
      {
        name: "Eline Smeets",
        rating: 5,
        comment: "Zeer professionele installatie van onze airco in Hoensbroek. Het hele proces vanaf advies tot installatie verliep vlekkeloos. Zelfs de buren zijn onder de indruk van hoe stil de buitenunit is!",
        date: "April 2025"
      },
      {
        name: "Bart Jansen",
        rating: 4,
        comment: "Goede ervaring met StayCool voor onze airco in de wijk De Dem. Het team was vakkundig en heeft netjes gewerkt. Alleen de planning liep iets uit, vandaar 4 sterren. De airco zelf werkt uitstekend.",
        date: "Maart 2025"
      },
      {
        name: "Annemieke Klaassen",
        rating: 5,
        comment: "Uitstekende service! Van advies tot installatie alles verliep perfect. De monteurs waren op tijd, werken netjes en hebben zelfs extra moeite gedaan om de leidingen zo onzichtbaar mogelijk weg te werken in onze oude woning in Hoensbroek.",
        date: "Februari 2025"
      }
    ],
    
    // FAQs specific to Hoensbroek
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Hoensbroek?",
        answer: "De kosten voor een airco installatie in Hoensbroek liggen gemiddeld tussen €1.250 en €2.700, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor woningen in oudere wijken zoals het centrum kan er een meerprijs gelden vanwege extra aanpassingen. We maken graag een vrijblijvende offerte op maat."
      },
      {
        question: "Hoe lang duurt een airco installatie in Hoensbroek?",
        answer: "Een standaard installatie in Hoensbroek duurt ongeveer één werkdag. Voor oudere woningen of bij complexere installaties kan dit uitlopen tot twee dagen. We nemen altijd de tijd om alles netjes af te werken en uitgebreide uitleg te geven over het gebruik."
      },
      {
        question: "Gelden er specifieke regels voor airco installatie in Hoensbroek?",
        answer: "In Hoensbroek, als onderdeel van gemeente Heerlen, gelden de reguliere regels voor airco installaties. Voor de meeste installaties is geen vergunning nodig, tenzij het pand een monumentale status heeft of in een beschermd stadsgezicht ligt. We houden altijd rekening met geluidsnormen en afstandsregels tot buren."
      },
      {
        question: "Kan ik subsidie krijgen voor een airco in Hoensbroek?",
        answer: "Voor warmtepompen met een koelfunctie (airco's die ook kunnen verwarmen) zijn er mogelijk subsidies beschikbaar in Hoensbroek. We informeren u graag over de actuele ISDE-subsidieregeling en eventuele lokale subsidiemogelijkheden van de gemeente Heerlen tijdens ons adviesgesprek."
      },
      {
        question: "Zijn jullie bekend met de oudere woningen in Hoensbroek?",
        answer: "Zeker! We hebben ruime ervaring met airco-installaties in oudere woningen in Hoensbroek, waaronder de karakteristieke huizen in het centrum en de verschillende bouwstijlen in wijken als Maria-Gewanden en Mariarade. We weten precies hoe we moeten omgaan met de specifieke uitdagingen die deze woningen bieden."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "5 km"
      },
      {
        name: "Brunssum",
        url: "/airco-installatie/brunssum",
        distance: "7 km"
      },
      {
        name: "Nuth",
        url: "/airco-installatie/nuth",
        distance: "8 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "15 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
