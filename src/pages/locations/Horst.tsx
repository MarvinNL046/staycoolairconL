import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function HorstPage() {
  // Get real Google reviews localized for Horst
  const realReviews = getLocalizedReviews("Horst", 4);
  
  // City-specific data
  const cityData = {
    city: "Horst",
    region: "Noord-Limburg",
    postalCodes: "5961, 5966, 5871, 5872, 5971, 5973, 5975, 5976",
    populationCount: 42000,
    locationImage: "/images/locations/default-city-image.webp",
    installationCount: 125,
    
    // Climate-specific information for Horst
    climateFacts: [
      "Horst ligt strategisch tussen Venlo en Venray, waardoor het warme lucht vanuit het zuiden opvangt",
      "De agrarische omgeving van Horst zorgt voor weinig natuurlijke schaduw in nieuwe woonwijken", 
      "Noord-Limburg kent steeds meer tropische dagen, waardoor airconditioning steeds belangrijker wordt",
      "De moderne nieuwbouwwijken in Horst aan den Maas warmen snel op door grote raampartijen"
    ],
    
    // Special features for Horst installations
    specialFeatures: [
      "Ervaring met airco installaties in moderne nieuwbouwwijken van Horst aan den Maas",
      "Specialistische kennis van agrarische bedrijfsgebouwen en kassen in de regio",
      "Oplossingen voor zowel de historische dorpskernen als nieuwe woonwijken",
      "Installaties aangepast aan de open landschap van Noord-Limburg"
    ],
    
    // Use real Google reviews localized for Horst
    testimonials: realReviews,
    
    // FAQs specific to Horst
    faqs: [
      {
        question: "Wat kost een airco installatie in Horst gemiddeld?",
        answer: "De kosten voor een airco installatie in Horst liggen gemiddeld tussen €1.200 en €2.400, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor de nieuwbouwwijken in Horst aan den Maas hebben we vaak efficiënte standaardoplossingen. Voor agrarische bedrijven en kassen bieden we gespecialiseerde systemen. We maken graag een persoonlijke offerte op basis van uw specifieke situatie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Horst?",
        answer: "Een standaard airco installatie in Horst duurt meestal één werkdag. Voor nieuwbouwwoningen met voorzieningen voor airconditioning kan dit zelfs sneller gaan. Bij oudere woningen of speciale situaties kan dit uitlopen tot twee dagen. Als lokale installateur in Noord-Limburg zorgen we altijd voor een nette en snelle afwerking."
      },
      {
        question: "Hebben jullie ervaring met airco in agrarische bedrijven rond Horst?",
        answer: "Ja, absoluut! Horst ligt midden in het agrarische hart van Noord-Limburg en we hebben veel ervaring met klimaatbeheersing voor bedrijven, kantoren en woningen van ondernemers. We installeren zowel comfort-airco's voor woningen als professionele systemen voor kantoren en kleine bedrijfsruimtes. Voor grote agrarische toepassingen werken we samen met gespecialiseerde partners."
      },
      {
        question: "Welke airco is geschikt voor nieuwbouwwoningen in Horst aan den Maas?",
        answer: "Voor de moderne nieuwbouwwoningen in Horst aan den Maas adviseren we vaak energiezuinige wandmodellen van Daikin, Mitsubishi Electric of LG. Deze woningen hebben vaak al voorzieningen voor airconditioning, waardoor de installatie relatief eenvoudig is. We zorgen ervoor dat de airco goed integreert met het moderne interieur en de energiezuinige installaties."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Horst?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Horst en omgeving. Als lokale specialist in Noord-Limburg kunnen we snel ter plaatse zijn voor onderhoud en reparaties. We raden aan om minimaal één keer per jaar een onderhoudsbeurt te laten uitvoeren voor optimale prestaties."
      },
      {
        question: "Kan ik een airco laten installeren die ook verwarmt in Horst?",
        answer: "Absoluut! De moderne airco systemen die wij installeren in Horst zijn warmtepompen die zeer efficiënt kunnen verwarmen. Dit is een perfecte aanvulling op bestaande verwarmingssystemen, vooral in de voor- en najaar. Met de steeds lagere gasprijzen en hogere elektriciteitsprijzen is een airco warmtepomp een slimme keuze voor duurzame verwarming."
      },
      {
        question: "Welke subsidiemogelijkheden zijn er voor airco installatie in Horst?",
        answer: "In Horst kunt u mogelijk gebruik maken van de ISDE subsidie voor warmtepompen, aangezien moderne airco's ook als warmtepomp fungeren. Voor nieuwbouwwoningen zijn er soms extra subsidies beschikbaar voor duurzame installaties. We houden u graag op de hoogte van actuele subsidiemogelijkheden en helpen bij het aanvragen ervan."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Venray",
        url: "/airco-installatie/venray",
        distance: "15 km"
      },
      {
        name: "Venlo",
        url: "/airco-installatie/venlo",
        distance: "18 km"
      },
      {
        name: "Panningen",
        url: "/airco-installatie/panningen",
        distance: "12 km"
      },
      {
        name: "Gennep",
        url: "/airco-installatie/gennep",
        distance: "20 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}