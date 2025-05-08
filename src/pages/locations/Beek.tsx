import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function BeekPage() {
  // Get real Google reviews localized for Beek
  const realReviews = getLocalizedReviews("Beek", 4);

  // City-specific data
  const cityData = {
    city: "Beek",
    region: "Zuid-Limburg",
    postalCodes: "6191, 6199",
    populationCount: 16000,
    locationImage: "/images/locations/beek.webp", // You may need to add this image to your assets
    installationCount: 48,
    
    // Climate-specific information for Beek
    climateFacts: [
      "Beek ligt op de overgang van het Maasdal naar het heuvelland, wat voor specifieke klimaatkenmerken zorgt",
      "Door de nabijheid van Maastricht Airport kan het in sommige delen van Beek warmer zijn door het grote verharde oppervlak",
      "Beek heeft een relatief hoge zonnestand voor Nederlandse begrippen, wat in de zomer zorgt voor meer directe zonnestraling"
    ],
    
    // Special features for Beek installations
    specialFeatures: [
      "Specialistische installaties voor de waterrijke delen van Beek met extra bescherming tegen vocht",
      "Geluidsgereduceerde installaties voor woningen in de buurt van Maastricht Airport",
      "Aangepaste montage voor de historische gebouwen in het centrum van Beek"
    ],
    
    // Use real Google reviews
    testimonials: realReviews,
    
    // FAQs specific to Beek
    faqs: [
      {
        question: "Wat kost een airco installatie in Beek gemiddeld?",
        answer: "De gemiddelde kosten voor een airco installatie in Beek liggen tussen €1.300 en €2.500, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor woningen in de buurt van Maastricht Airport adviseren we soms systemen met extra geluidsisolatie, wat invloed kan hebben op de prijs. We maken graag een persoonlijke offerte op basis van uw specifieke wensen en situatie."
      },
      {
        question: "Hebben jullie ervaring met geluidsreducerende installaties voor de omgeving van Maastricht Airport?",
        answer: "Jazeker! We hebben specifieke expertise met het installeren van airconditioningsystemen in de buurt van Maastricht Airport. We gebruiken speciale trillingdempers en geluidsisolatie om ervoor te zorgen dat uw airco zo stil mogelijk werkt, zelfs wanneer er vliegtuigen overvliegen. Onze installateurs zijn bekend met de specifieke eisen voor deze locaties in Beek."
      },
      {
        question: "Hoe snel kunnen jullie een airco in Beek installeren?",
        answer: "Na uw aanvraag kunnen we doorgaans binnen 1-2 weken langskomen voor een vrijblijvend adviesgesprek. De installatie zelf kan, afhankelijk van het seizoen en onze planning, meestal binnen 2-3 weken worden uitgevoerd. Voor inwoners van Beek proberen we altijd flexibel te zijn in onze planning en waar mogelijk voorrang te geven."
      },
      {
        question: "Welke airco is het meest geschikt voor de historische gebouwen in Beek?",
        answer: "Voor de karakteristieke historische gebouwen in het centrum van Beek adviseren we vaak de compactere wandmodellen van Daikin of Mitsubishi Electric, die discreet geplaatst kunnen worden met minimale impact op het historische karakter. Voor monumentale panden werken we samen met lokale experts om de beste en meest respectvolle installatiemethode te bepalen, altijd met oog voor de authentieke details."
      },
      {
        question: "Bieden jullie ook onderhoud aan voor airco's in Beek?",
        answer: "Absoluut! We bieden verschillende onderhoudsabonnementen aan voor al onze klanten in Beek. Regelmatig onderhoud verlengt niet alleen de levensduur van uw airco, maar zorgt ook voor optimale prestaties en energieverbruik. Onze servicemonteurs komen op afspraak langs voor een grondige reiniging en controle van uw systeem, meestal één keer per jaar, met voorrang in het hoogseizoen."
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
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "9 km"
      },
      {
        name: "Maastricht",
        url: "/airco-installatie/maastricht",
        distance: "12 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
