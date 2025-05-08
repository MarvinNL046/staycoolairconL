import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function LandgraafPage() {
  // Get real Google reviews localized for Landgraaf
  const realReviews = getLocalizedReviews("Landgraaf", 4);

  // City-specific data
  const cityData = {
    city: "Landgraaf",
    region: "Zuid-Limburg",
    postalCodes: "6371, 6372, 6373, 6374",
    populationCount: 37500,
    locationImage: "/images/locations/landgraaf.webp", // You may need to add this image to your assets
    installationCount: 72,
    
    // Climate-specific information for Landgraaf
    climateFacts: [
      "Landgraaf ligt op een van de hoogste punten van Nederland, wat zorgt voor een koeler microklimaat",
      "Door de hoogteverschillen binnen Landgraaf kunnen temperaturen per wijk sterk verschillen",
      "Landgraaf kent meer zonuren dan gemiddeld in Nederland, met een relatief sterke zonnestraling"
    ],
    
    // Special features for Landgraaf installations
    specialFeatures: [
      "Speciaal ontwikkelde installatiemethoden voor voormalige mijnwerkerswoningen in Landgraaf",
      "Aangepaste airco's voor woningen op de heuvels met extra koelcapaciteit voor zonnige dagen",
      "Energiezuinige oplossingen specifiek voor de jaren '60/'70/'80 woningen in wijken als Schaesberg en Nieuwenhagen"
    ],
    
    // Use real Google reviews
    testimonials: realReviews,
    
    // FAQs specific to Landgraaf
    faqs: [
      {
        question: "Wat kost een airco installatie in Landgraaf gemiddeld?",
        answer: "De gemiddelde kosten voor een airco installatie in Landgraaf liggen tussen €1.300 en €2.800, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor de karakteristieke mijnwerkerswoningen met hun specifieke constructie en isolatie kunnen de kosten iets hoger uitvallen. We maken graag een persoonlijke offerte op basis van uw specifieke wensen en situatie."
      },
      {
        question: "Hebben jullie ervaring met airco installaties in de typische woningen van Landgraaf?",
        answer: "Absoluut! We hebben veel ervaring met het installeren van airconditioning in Landgraaf, inclusief de karakteristieke mijnwerkerswoningen en jaren '60/'70 huizen. Onze monteurs kennen de specifieke uitdagingen van deze woningen goed, zoals de compacte bouwstijl en de vaak dikke muren. We zorgen altijd voor een installatie die zowel technisch perfect is als esthetisch past bij uw woning."
      },
      {
        question: "Zijn er airco systemen die beter presteren op de hoger gelegen delen van Landgraaf?",
        answer: "Voor de hoger gelegen delen van Landgraaf, zoals op de Brunssummerheide, adviseren we systemen met een iets hogere capaciteit vanwege de sterkere zonnestraling. Merken als Mitsubishi Heavy en Daikin hebben specifieke modellen die uitzonderlijk goed presteren in deze omstandigheden. Tijdens ons adviesgesprek kijken we naar de exacte ligging van uw woning en adviseren we het meest geschikte systeem."
      },
      {
        question: "Hoe snel kunnen jullie een airco in Landgraaf installeren?",
        answer: "Na uw aanvraag kunnen we doorgaans binnen 1-2 weken langskomen voor een vrijblijvend adviesgesprek. De installatie zelf kan, afhankelijk van het seizoen en onze planning, meestal binnen 2-3 weken worden uitgevoerd. Voor inwoners van Landgraaf proberen we altijd zo flexibel mogelijk te zijn in onze planning."
      },
      {
        question: "Is een airco systeem in Landgraaf geschikt voor zowel koelen als verwarmen?",
        answer: "Zeker! De moderne aircosystemen die wij installeren in Landgraaf zijn warmtepompen die ook zeer efficiënt kunnen verwarmen, zelfs bij lagere buitentemperaturen. Dit is bijzonder nuttig in Landgraaf, waar het op de hogere delen in de winter kouder kan zijn dan in het dal. Een airco kan tot 70% energiezuiniger zijn dan traditionele elektrische verwarming, wat een aanzienlijke besparing oplevert op uw energierekening."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Kerkrade",
        url: "/airco-installatie/kerkrade",
        distance: "5 km"
      },
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "7 km"
      },
      {
        name: "Brunssum",
        url: "/airco-installatie/brunssum",
        distance: "8 km"
      },
      {
        name: "Simpelveld",
        url: "/airco-installatie/simpelveld",
        distance: "10 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
