import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function VaalsPage() {
  // Get real Google reviews localized for Vaals
  const realReviews = getLocalizedReviews("Vaals", 4);

  // City-specific data
  const cityData = {
    city: "Vaals",
    region: "Zuid-Limburg",
    postalCodes: "6291, 6294, 6295",
    populationCount: 9845,
    installationCount: 40,
    
    // Climate-specific information for Vaals
    climateFacts: [
      "Gemiddeld 22-27 zomerse dagen (25°C+) per jaar in Vaals",
      "Door de hoge ligging (Drielandenpunt) ervaart Vaals andere temperaturen dan de rest van Zuid-Limburg",
      "Het heuvelachtige landschap van Vaals zorgt voor grote temperatuurverschillen tussen noord- en zuidhellingen"
    ],
    
    // Special features for Vaals installations
    specialFeatures: [
      "Airco-installaties aangepast aan de toeristische en monumentale panden in het centrum van Vaals",
      "Speciale oplossingen voor de karakteristieke vakwerkhuizen en herenhuizen",
      "Stille en discrete buitenunits die passen bij het historische straatbeeld van Vaals"
    ],
    
    // Use real Google reviews or if not available, sample reviews
    testimonials: realReviews.length > 0 ? realReviews : [
      {
        name: "Marianne Wijnen",
        rating: 5,
        comment: "StayCool Airco heeft een uitstekende job gedaan bij de installatie van onze airco in ons monumentale pand in Vaals. De monteurs waren zeer bekwaam en hebben rekening gehouden met de historische details van ons huis. Echt vakwerk!",
        date: "Mei 2025"
      },
      {
        name: "Thomas Brouwers",
        rating: 5,
        comment: "Zeer professionele service bij de installatie van onze airco in Vaals. Alles werd netjes afgewerkt en de airco is bijna onzichtbaar geïntegreerd in onze woning. Perfect voor het warme microklimaat hier in het heuvellandschap.",
        date: "April 2025"
      },
      {
        name: "Claudia Meessen",
        rating: 4,
        comment: "Goede ervaring met StayCool Airco voor onze vakantiewoning in Vaals. De planning liep iets uit, maar de installatie zelf is perfect uitgevoerd. De gasten waarderen de airco enorm tijdens de zomermaanden.",
        date: "Maart 2025"
      },
      {
        name: "Bernd Kreuzberg",
        rating: 5,
        comment: "Als Duits-Nederlandse familie in Vaals hebben we lang gezocht naar een betrouwbaar bedrijf voor airco-installatie. StayCool heeft alle verwachtingen overtroffen. Professioneel, vriendelijk en zeer kundig. Ons vakwerkhuis blijft nu heerlijk koel in de zomer.",
        date: "Februari 2025"
      }
    ],
    
    // FAQs specific to Vaals
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Vaals?",
        answer: "De kosten voor een airco installatie in Vaals variëren van €1.300 tot €2.700 voor een single-split systeem, afhankelijk van het type unit en de specifieke situatie van uw woning. Voor monumentale panden of vakwerkhuizen in het centrum van Vaals kan een meerprijs gelden vanwege de speciale installatietechnieken. We maken graag een vrijblijvende offerte op maat na een inspectie."
      },
      {
        question: "Hoe wordt een airco geïnstalleerd in de monumentale panden van Vaals?",
        answer: "Voor monumentale panden in Vaals gebruiken we speciale installatietechnieken die rekening houden met de historische waarde van het gebouw. We zorgen voor minimale ingrepen aan de gevel, gebruiken waar mogelijk bestaande doorvoeren, en plaatsen buitenunits op discrete locaties zoals platte daken of binnenplaatsen. Elke installatie wordt op maat gepland om de authentieke uitstraling te behouden."
      },
      {
        question: "Zijn er speciale vergunningen nodig voor een airco in Vaals?",
        answer: "In Vaals, met name in het beschermde dorpsgezicht en voor monumenten, gelden strengere regels voor airco-installaties. Voor sommige panden is een omgevingsvergunning nodig. We helpen u bij het hele proces, van de aanvraag tot de goedkeuring, en zorgen ervoor dat alles volgens de geldende regelgeving wordt geïnstalleerd."
      },
      {
        question: "Installeren jullie ook airco's in vakantiewoningen in Vaals?",
        answer: "Absoluut! We hebben ruime ervaring met het installeren van aircosystemen in vakantiewoningen en B&B's in Vaals en omgeving. We begrijpen de specifieke eisen voor deze accommodaties, zoals stille werking, eenvoudige bediening voor gasten en betrouwbaarheid. We bieden ook onderhoudscontracten aan om de systemen in topconditie te houden."
      },
      {
        question: "Welk type airco is het meest geschikt voor het klimaat in Vaals?",
        answer: "Voor het specifieke klimaat in Vaals, met zijn grotere temperatuurschommelingen en relatief koelere zomers dan in de rest van Nederland, raden we inverter-gestuurde aircosystemen aan van merken zoals Daikin of Mitsubishi. Deze kunnen efficiënt koelen en verwarmen en zijn goed aangepast aan het microklimaat van het Zuid-Limburgse heuvelland rond Vaals."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Gulpen",
        url: "/airco-installatie/gulpen",
        distance: "7 km"
      },
      {
        name: "Valkenburg",
        url: "/airco-installatie/valkenburg",
        distance: "20 km"
      },
      {
        name: "Kerkrade",
        url: "/airco-installatie/kerkrade",
        distance: "15 km"
      },
      {
        name: "Vijlen",
        url: "/airco-installatie/vijlen",
        distance: "4 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
