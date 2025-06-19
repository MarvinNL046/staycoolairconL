import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function GeleenPage() {
  // Get real Google reviews localized for Geleen
  const realReviews = getLocalizedReviews("Geleen", 4);
  
  // City-specific data
  const cityData = {
    city: "Geleen",
    region: "Zuid-Limburg",
    postalCodes: "6161, 6162, 6163, 6164, 6165, 6166, 6167, 6168, 6169",
    populationCount: 33500,
    locationImage: "/images/locations/default-city-image.webp",
    installationCount: 110,
    
    // Climate-specific information for Geleen
    climateFacts: [
      "Geleen heeft door de industriële geschiedenis en stedelijke bebouwing een uitgesproken hitte-eiland effect",
      "De Chemelot-site en industrie zorgen voor extra warmte-ontwikkeling in de regio",
      "Zuid-Limburg kent de warmste zomers van Nederland, met Geleen als geen uitzondering",
      "De naoorlogse woonwijken in Geleen hebben vaak grote raampartijen die snel opwarmen"
    ],
    
    // Special features for Geleen installations
    specialFeatures: [
      "Ervaring met airco installaties in industriële woonomgeving van Geleen",
      "Specialistische kennis van verschillende woningtypes: van mijnwerkerswoningen tot moderne complexen",
      "Oplossingen voor zowel gezinswoningen als appartementen in hoogbouw",
      "Installaties die rekening houden met de industriële omgeving en luchtkwaliteit"
    ],
    
    // Use real Google reviews localized for Geleen
    testimonials: realReviews,
    
    // FAQs specific to Geleen
    faqs: [
      {
        question: "Wat kost een airco installatie in Geleen gemiddeld?",
        answer: "De kosten voor een airco installatie in Geleen liggen gemiddeld tussen €1.200 en €2.800, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor de diverse woningtypes in Geleen - van mijnwerkerswoningen tot moderne appartementen - hebben we verschillende oplossingen. We maken graag een persoonlijke offerte op basis van uw specifieke situatie in Geleen."
      },
      {
        question: "Hoe lang duurt een airco installatie in Geleen?",
        answer: "Een standaard airco installatie in Geleen duurt meestal één werkdag. Bij complexere installaties, zoals in appartementen of woningen met specifieke uitdagingen, kan dit uitlopen tot twee dagen. Als ervaren installateur in Zuid-Limburg zorgen we altijd voor een professionele en tijdige afwerking."
      },
      {
        question: "Is airconditioning extra belangrijk in de industriële omgeving van Geleen?",
        answer: "Ja, zeker! De industriële omgeving rond Chemelot en de stedelijke bebouwing van Geleen zorgen voor extra warmte-ontwikkeling. Airconditioning biedt niet alleen koeling, maar filtert ook de lucht, wat in een industriële omgeving extra comfort biedt. Moderne airco's hebben goede filters die de luchtkwaliteit in huis verbeteren."
      },
      {
        question: "Welke airco is geschikt voor appartementen in Geleen?",
        answer: "Voor appartementen in Geleen adviseren we compacte wandmodellen die weinig geluid produceren voor de buren. Merken als Daikin, Mitsubishi Electric en LG hebben speciale 'apartment-friendly' modellen met extra stille werking. We zorgen ook voor discrete plaatsing van buitenunits volgens VvE-regels en gemeentelijke voorschriften."
      },
      {
        question: "Hebben jullie ervaring met mijnwerkerswoningen in Geleen?",
        answer: "Absoluut! Geleen heeft veel karakteristieke mijnwerkerswoningen met dikke bakstenen muren. Deze woningen houden warmte goed vast, maar zijn ook goed te koelen met de juiste airco. De stevige constructie is ideaal voor airco installatie, en we hebben veel ervaring met het vakkundig wegwerken van leidingen in dit type woningen."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Geleen?",
        answer: "Ja, we bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Geleen en omgeving. In een industriële omgeving zoals Geleen is regelmatig onderhoud extra belangrijk vanwege mogelijke vervuiling. We raden aan om de filters vaker te controleren en minimaal één keer per jaar professioneel onderhoud te laten uitvoeren."
      },
      {
        question: "Kan een airco in Geleen ook efficient verwarmen?",
        answer: "Zeker! Moderne airco warmtepompen zijn zeer geschikt voor Geleen. Ze kunnen tot 70% energiezuiniger zijn dan elektrische verwarming. Voor werknemers in de chemische industrie die vaak wisselende diensten draaien, biedt een airco flexibele klimaatbeheersing op elk moment van de dag. Perfect als aanvulling op bestaande verwarming."
      },
      {
        question: "Welke garantie krijg ik op airco installatie in Geleen?",
        answer: "Wij bieden 5 jaar garantie op het airco systeem en 2 jaar garantie op de installatie. Onze F-gassen gecertificeerde monteurs zorgen voor vakkundige installatie volgens alle veiligheidsnormen. Als lokale specialist in Zuid-Limburg zijn we altijd snel bereikbaar voor service en ondersteuning in Geleen."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "8 km"
      },
      {
        name: "Stein",
        url: "/airco-installatie/stein",
        distance: "5 km"
      },
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "15 km"
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