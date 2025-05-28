import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';

export default function Simpelveld() {
  const simpelveldData = {
    city: "Simpelveld",
    region: "Zuid-Limburg",
    postalCodes: "6369, 6370",
    populationCount: 10800,
    climateFacts: [
      "Simpelveld ligt in het glooiende Heuvelland met specifieke microklimaten",
      "De gemeente kent door haar ligging steeds vaker tropische nachten",
      "Historische bebouwing in het centrum houdt warmte langer vast",
      "Nieuwbouwwijken zijn goed geïsoleerd maar missen natuurlijke koeling"
    ],
    specialFeatures: [
      "Ervaring met installaties in karakteristieke Limburgse vakwerkhuizen",
      "Specialistische kennis voor monumentale panden rond de Markt",
      "Discrete oplossingen voor appartementen boven winkels",
      "Populair bij Duitse grensarbeiders die gewend zijn aan airco"
    ],
    testimonials: [
      {
        name: "H. Schneider - Simpelveld",
        rating: 5,
        comment: "Perfecte airco installateur bij ons in de buurt! Ze kennen de oude huizen hier goed en hebben een mooie discrete installatie gemaakt.",
        date: "Oktober 2024"
      },
      {
        name: "Familie Van den Berg - Bocholtz",
        rating: 5,
        comment: "Eindelijk een airco specialist dichtbij! Geen lange wachttijden en zeer professioneel. Aanrader voor heel Simpelveld.",
        date: "Augustus 2024"
      },
      {
        name: "M. Habets - Simpelveld",
        rating: 4,
        comment: "Als lokale airco monteur in de buurt waren ze snel ter plaatse. Goede prijs-kwaliteit verhouding en nette afwerking.",
        date: "Juli 2024"
      }
    ],
    faqs: [
      {
        question: "Waarom kiezen voor een airco installateur bij mij in de buurt in Simpelveld?",
        answer: "Een lokale airco specialist in Simpelveld kent de unieke architectuur van onze gemeente, van vakwerkhuizen tot moderne woningen. Als airco monteur dichtbij zijn we snel ter plaatse voor advies, installatie en service. We kennen ook de lokale regelgeving voor monumentale panden in het centrum."
      },
      {
        question: "Wat kost een airco installatie in een oud huis in Simpelveld?",
        answer: "Voor oudere woningen in Simpelveld rekenen we €1.600 tot €3.500 voor een complete airco installatie. Als ervaren airco installateur in de buurt weten we hoe we leidingen discreet kunnen wegwerken. We komen graag eerst kijken om een exacte offerte te maken."
      },
      {
        question: "Kunnen jullie ook Duitse merken installeren?",
        answer: "Natuurlijk! Als airco specialist dichtbij de Duitse grens installeren we alle topmerken, inclusief Duitse kwaliteitsmerken. Veel inwoners van Simpelveld werken in Duitsland en waarderen Duitse precisie. We adviseren u graag over de beste keuze."
      },
      {
        question: "Hoe snel kunnen jullie een airco plaatsen in Simpelveld?",
        answer: "Als uw lokale airco monteur bij u in de buurt kunnen we meestal binnen een week starten. In het hoogseizoen kan dit iets langer duren, maar door onze lokale aanwezigheid hebben we vaak nog mogelijkheden. Een standaard installatie is binnen één dag klaar."
      }
    ],
    nearbyLocations: [
      {
        name: "Kerkrade",
        url: "/airco-installatie/kerkrade",
        distance: "6 km"
      },
      {
        name: "Voerendaal",
        url: "/airco-installatie/voerendaal",
        distance: "5 km"
      },
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "10 km"
      },
      {
        name: "Gulpen-Wittem",
        url: "/airco-installatie/gulpen-wittem",
        distance: "8 km"
      }
    ],
    installationCount: 75
  };

  return <LocationLandingPage {...simpelveldData} />;
}