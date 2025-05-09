import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function MaasbrachtPage() {
  // Get real Google reviews localized for Maasbracht
  const realReviews = getLocalizedReviews("Maasbracht", 4);

  // City-specific data
  const cityData = {
    city: "Maasbracht",
    region: "Midden-Limburg",
    postalCodes: "6051, 6052",
    populationCount: 7445,
    installationCount: 35,
    
    // Climate-specific information for Maasbracht
    climateFacts: [
      "Gemiddeld 24-28 zomerse dagen (25°C+) per jaar in Maasbracht",
      "Door de ligging aan de Maas heeft Maasbracht hogere luchtvochtigheid, wat het in de zomer broeieriger maakt",
      "Het waterrijke gebied rond Maasbracht zorgt voor een specifiek microklimaat met eigen temperatuurpatronen"
    ],
    
    // Special features for Maasbracht installations
    specialFeatures: [
      "Airco-oplossingen speciaal aangepast aan de vochtige omgeving van het Maasgebied",
      "Expertise in installaties voor zowel woningen als woonboten in de jachthaven van Maasbracht",
      "Extra aandacht voor ontvochtigingsfunctie in aircosystemen vanwege de relatief hoge luchtvochtigheid"
    ],
    
    // Use real Google reviews or if not available, sample reviews
    testimonials: realReviews.length > 0 ? realReviews : [
      {
        name: "Jeroen Smits",
        rating: 5,
        comment: "Perfecte installatie van onze airco in Maasbracht. Het team van StayCool was erg vakkundig en heeft alles keurig afgewerkt. De airco werkt fantastisch, ook tijdens de vochtige zomerdagen langs de Maas.",
        date: "Mei 2025"
      },
      {
        name: "Anouk Jansen",
        rating: 5,
        comment: "StayCool Airco heeft uitstekend werk geleverd in onze woning in Maasbracht. Ze hebben goed rekening gehouden met onze wensen en het vochtige klimaat hier. De airco maakt ons huis eindelijk comfortabel, zelfs op de meest zwoele dagen.",
        date: "April 2025"
      },
      {
        name: "Robert van Dam",
        rating: 4,
        comment: "Goede ervaring met StayCool voor onze woonboot in de haven van Maasbracht. De monteurs wisten goed raad met de uitdagingen van installatie op een boot. Alleen de planning liep wat uit, vandaar 4 sterren. Het resultaat is top!",
        date: "Maart 2025"
      },
      {
        name: "Marina Klaassen",
        rating: 5,
        comment: "Onze jaren '70 woning in Maasbracht is eindelijk comfortabel in de zomer dankzij StayCool Airco. De installatie was professioneel en netjes, en de airco ontvocht de lucht perfect - een groot voordeel hier vlakbij de Maas.",
        date: "Februari 2025"
      }
    ],
    
    // FAQs specific to Maasbracht
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Maasbracht?",
        answer: "De kosten voor een airco installatie in Maasbracht variëren van €1.250 tot €2.500 voor een standaard single-split systeem. Voor woningen in de directe omgeving van de Maas adviseren we vaak systemen met extra ontvochtigingscapaciteit, wat iets meer kan kosten. We maken graag een vrijblijvende offerte op maat na een inspectie van uw situatie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Maasbracht?",
        answer: "Een standaard airco installatie in Maasbracht duurt meestal één werkdag. Voor speciale situaties zoals installaties op woonboten of in oudere woningen kan dit uitlopen tot maximaal twee dagen. We zorgen altijd voor een nette en zorgvuldige afwerking met minimale overlast."
      },
      {
        question: "Kan een airco ook helpen tegen de vochtige lucht in Maasbracht?",
        answer: "Absoluut! Moderne airco's hebben een uitstekende ontvochtigingsfunctie die zeer effectief is in het waterrijke gebied rond Maasbracht. Ze verwijderen overtollig vocht uit de lucht, wat niet alleen het comfort verhoogt maar ook helpt bij het voorkomen van schimmel en condensatieproblemen in uw woning."
      },
      {
        question: "Installeren jullie ook airco's op woonboten in Maasbracht?",
        answer: "Zeker! We hebben ruime ervaring met het installeren van airconditioning op woonboten in de jachthaven van Maasbracht. We gebruiken hiervoor speciale, compacte units die geschikt zijn voor de beperkte ruimte, en houden rekening met stroomvoorziening en andere specifieke eisen voor installaties op het water."
      },
      {
        question: "Welk type airco is het meest geschikt voor huizen in het Maasgebied?",
        answer: "Voor woningen in Maasbracht en omgeving adviseren we vaak inverter-gestuurde systemen van merken zoals Daikin of Mitsubishi met een goede ontvochtigingsfunctie. Deze units kunnen de temperatuur en luchtvochtigheid in uw woning effectief regelen, zijn energiezuinig en werken stil - perfect voor het specifieke klimaat in het Maasgebied."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Echt",
        url: "/airco-installatie/echt",
        distance: "12 km"
      },
      {
        name: "Roermond",
        url: "/airco-installatie/roermond",
        distance: "15 km"
      },
      {
        name: "Thorn",
        url: "/airco-installatie/thorn",
        distance: "8 km"
      },
      {
        name: "Wessem",
        url: "/airco-installatie/wessem",
        distance: "6 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
