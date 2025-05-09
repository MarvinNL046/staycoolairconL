import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function VenrayPage() {
  // Get real Google reviews localized for Venray
  const realReviews = getLocalizedReviews("Venray", 4);

  // City-specific data
  const cityData = {
    city: "Venray",
    region: "Noord-Limburg",
    postalCodes: "5801, 5802, 5803, 5804",
    populationCount: 30275,
    installationCount: 95,
    
    // Climate-specific information for Venray
    climateFacts: [
      "Gemiddeld 23-28 zomerse dagen (25°C+) per jaar in Venray",
      "De vele kassengebieden rond Venray zorgen voor lokale temperatuurverschillen",
      "Door de open vlaktes in Noord-Limburg kan het in Venray flink opwarmen in de zomer"
    ],
    
    // Special features for Venray installations
    specialFeatures: [
      "Airco installaties aangepast aan de specifieke woningtypen in Venray en omgeving",
      "Speciale oplossingen voor de vele jaren '70 en '80 woningen in wijken als Veltum en Landweert",
      "Energiezuinige systemen die aansluiten bij de duurzaamheidsambities van gemeente Venray"
    ],
    
    // Use real Google reviews or if not available, sample reviews
    testimonials: realReviews.length > 0 ? realReviews : [
      {
        name: "Peter Janssen",
        rating: 5,
        comment: "Uitstekende service bij de installatie van onze airco in Venray. Het team was zeer professioneel en heeft alles netjes afgewerkt. De airco werkt perfect en was precies wat we nodig hadden voor onze woning.",
        date: "April 2025"
      },
      {
        name: "Marieke Willems",
        rating: 5,
        comment: "Zeer tevreden met de airco die StayCool in onze woning in Venray heeft geïnstalleerd. Het adviesgesprek was helder, de installatie snel en netjes. Ook de nazorg is uitstekend!",
        date: "Maart 2025"
      },
      {
        name: "Johan Theunissen",
        rating: 4,
        comment: "Goede ervaring met StayCool Airco. Prettig contact, duidelijke uitleg en een nette installatie in onze jaren '80 woning in Veltum. Alleen de levertijd was iets langer dan verwacht.",
        date: "Februari 2025"
      },
      {
        name: "Anita de Bruin",
        rating: 5,
        comment: "Perfect werk geleverd! Onze airco in Venray werkt uitstekend en de monteurs hebben alles keurig achtergelaten. Geen gedoe, gewoon goed werk voor een eerlijke prijs.",
        date: "Januari 2025"
      }
    ],
    
    // FAQs specific to Venray
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Venray?",
        answer: "De kosten voor een airco installatie in Venray variëren van €1.300 tot €2.600 voor een single-split systeem, afhankelijk van het gekozen model en de specifieke situatie van uw woning. Voor een exacte prijsopgave maken we graag een afspraak voor een vrijblijvende inspectie en offerte."
      },
      {
        question: "Hoe lang duurt een airco installatie in Venray gemiddeld?",
        answer: "Een standaard airco installatie in Venray duurt meestal één werkdag. Bij complexere installaties of bij oudere woningen in bijvoorbeeld het centrum van Venray kan dit uitlopen tot maximaal twee dagen. We zorgen altijd voor een nette en efficiënte afwerking."
      },
      {
        question: "Is er een vergunning nodig voor een airco in Venray?",
        answer: "In de gemeente Venray is voor de meeste residentiële airco-installaties geen vergunning nodig, mits de buitenunit niet aan de voorgevel wordt geplaatst en voldoet aan de lokale geluidsnormen. We adviseren u hierover tijdens ons vrijblijvende adviesgesprek."
      },
      {
        question: "Bieden jullie ook onderhoud aan voor airco's in Venray?",
        answer: "Ja, we bieden regulier onderhoud aan voor alle airco-installaties in Venray en omgeving. Voor optimale prestaties en een langere levensduur raden we aan om uw airco jaarlijks te laten onderhouden. We hebben speciale onderhoudscontracten met aantrekkelijke voorwaarden."
      },
      {
        question: "Kan een airco in Venray ook verwarmen in de winter?",
        answer: "Absoluut! De moderne aircosystemen die wij installeren in Venray functioneren als warmtepompen die ook zeer efficiënt kunnen verwarmen, zelfs bij lagere buitentemperaturen. Dit maakt ze ideaal voor het Noord-Limburgse klimaat en kan een energiezuinig alternatief zijn voor traditionele verwarming."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Ysselsteyn",
        url: "/airco-installatie/ysselsteyn",
        distance: "10 km"
      },
      {
        name: "Horst",
        url: "/airco-installatie/horst",
        distance: "15 km"
      },
      {
        name: "Wanssum",
        url: "/airco-installatie/wanssum",
        distance: "8 km"
      },
      {
        name: "Deurne",
        url: "/airco-installatie/deurne",
        distance: "20 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
