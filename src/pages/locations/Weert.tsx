import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function WeertPage() {
  // Get real Google reviews localized for Weert
  const realReviews = getLocalizedReviews("Weert", 4);
  
  // City-specific data
  const cityData = {
    city: "Weert",
    region: "Midden-Limburg",
    postalCodes: "6001, 6002, 6003, 6004, 6005, 6006",
    populationCount: 51000,
    locationImage: "/images/locations/weert.webp",
    installationCount: 200,
    
    // Climate-specific information for Weert
    climateFacts: [
      "Weert staat bekend als de 'warmste stad van Nederland' met gemiddeld de meeste zonuren",
      "Door de ligging op hogere zandgronden kan het in Weert snel opwarmen en afkoelen",
      "De gemiddelde zomertemperatuur in Weert ligt hoger dan in veel andere Nederlandse steden",
      "Het centrum van Weert heeft een sterk hitte-eiland effect tijdens warme periodes"
    ],
    
    // Special features for Weert installations
    specialFeatures: [
      "Speciale oplossingen voor de historische panden in het centrum van Weert",
      "Aangepaste installaties voor de karakteristieke jaren '30 wijken in Weert",
      "Ervaring met koelsystemen voor winkels en horeca in het centrum van Weert",
      "Innovatieve koeloplossingen voor modernere woningen in buitenwijken van Weert"
    ],
    
    // Use real Google reviews localized for Weert
    testimonials: realReviews,
    
    // FAQs specific to Weert
    faqs: [
      {
        question: "Wat kost een airco installatie in Weert gemiddeld?",
        answer: "De gemiddelde kosten voor een airco installatie in Weert liggen tussen €1.300 en €2.800, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor monumentale panden in het centrum van Weert, waar speciale installatietechnieken nodig zijn, kan dit oplopen tot €3.200. We maken graag een persoonlijke offerte op basis van uw specifieke wensen en situatie."
      },
      {
        question: "Hoe snel kan een airco geïnstalleerd worden in Weert?",
        answer: "In Weert kunnen we meestal binnen 2-3 weken een airco installeren na goedkeuring van de offerte. Tijdens het piekseizoen (mei-augustus) kan dit oplopen tot 3-4 weken. Voor spoedgevallen doen we ons best om sneller te schakelen. De installatie zelf duurt doorgaans één werkdag, voor complexere installaties maximaal twee dagen."
      },
      {
        question: "Welke airco is het meest geschikt voor woningen in Weert?",
        answer: "Voor woningen in Weert adviseren we vaak multi-split systemen met wandunits van merken als Daikin of Mitsubishi Electric. Deze zijn zeer geschikt voor het klimaat in Weert en kunnen meerdere ruimtes koelen met één buitenunit. Voor oudere woningen in het centrum raden we vaak modellen aan die goed passen bij de karakteristieke stijl en rekening houden met de constructie van deze panden."
      },
      {
        question: "Hebben jullie ervaring met airco's in monumentale panden in Weert?",
        answer: "Jazeker! We hebben ruime ervaring met het installeren van airconditioning in de monumentale panden in het centrum van Weert. Onze monteurs zijn gespecialiseerd in het plaatsen van systemen met minimale impact op de historische elementen. We zorgen voor discrete installaties waarbij leidingen en units nauwelijks zichtbaar zijn en werken indien nodig samen met monumentenzorg."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Weert?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Weert. Regelmatig onderhoud is essentieel voor optimale prestaties en een lange levensduur. We raden aan om minimaal één keer per jaar onderhoud te laten uitvoeren, bij voorkeur voor het begin van het warme seizoen. We bieden ook onderhoudscontracten aan met geplande jaarlijkse service."
      },
      {
        question: "Is een vergunning nodig voor een airco in Weert?",
        answer: "In de meeste gevallen is voor een airco installatie in Weert geen vergunning nodig, mits de buitenunit niet zichtbaar is vanaf de openbare weg en voldoet aan de geluidsnormen. Voor monumentale panden en panden in beschermde stadsgezichten gelden strengere regels. We adviseren u graag over de specifieke regelgeving voor uw situatie en helpen indien nodig bij het aanvragen van de benodigde vergunningen."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Nederweert",
        url: "/airco-installatie/nederweert",
        distance: "7 km"
      },
      {
        name: "Roermond",
        url: "/airco-installatie/roermond",
        distance: "22 km"
      },
      {
        name: "Venlo",
        url: "/airco-installatie/venlo",
        distance: "35 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "42 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
