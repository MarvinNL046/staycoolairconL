import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';

export default function Voerendaal() {
  const voerendaalData = {
    city: "Voerendaal",
    region: "Zuid-Limburg",
    postalCodes: "6367, 6368",
    populationCount: 12500,
    climateFacts: [
      "Voerendaal ligt op de overgang tussen het Heuvelland en de Mijnstreek",
      "De gemeente kent steeds vaker hittegolven met temperaturen boven 30°C",
      "Door de beschutte ligging tussen heuvels kan warmte lang blijven hangen",
      "Moderne nieuwbouwwijken in Voerendaal zijn gebouwd met goede isolatie maar beperkte natuurlijke ventilatie"
    ],
    specialFeatures: [
      "Veel woningen met warmtepompen die perfect combineren met airco systemen",
      "Groeiende vraag vanuit jonge gezinnen in nieuwbouwwijken",
      "Karakteristieke oude dorpskernen met specifieke installatiebehoeften",
      "Energiezuinige oplossingen voor moderne woningen in Kunrade en Ubachsberg"
    ],
    testimonials: [
      {
        name: "Familie Smeets - Voerendaal",
        rating: 5,
        comment: "Fantastische airco installateur bij ons in de buurt! Ze waren binnen 20 minuten ter plaatse voor de offerte. Perfect systeem voor onze nieuwbouwwoning.",
        date: "September 2024"
      },
      {
        name: "K. Janssen - Kunrade",
        rating: 5,
        comment: "Eindelijk een airco specialist dichtbij die weet hoe je in oude huizen moet werken. Zeer tevreden met het resultaat!",
        date: "Augustus 2024"
      },
      {
        name: "R. Peters - Ubachsberg",
        rating: 4,
        comment: "Als lokale airco monteur in de buurt kennen ze de omgeving goed. Snelle installatie en goede nazorg.",
        date: "Juli 2024"
      }
    ],
    faqs: [
      {
        question: "Waarom een airco installateur bij mij in de buurt in Voerendaal kiezen?",
        answer: "Een lokale airco specialist in Voerendaal kent de specifieke woningtypes in de gemeente, van karakteristieke dorpshuizen tot moderne nieuwbouw. Wij zijn snel ter plaatse vanuit ons werkgebied en begrijpen de lokale situatie. Als airco monteur dichtbij kunnen we snelle service bieden en zijn de reiskosten laag."
      },
      {
        question: "Kan een airco goed samenwerken met mijn warmtepomp in Voerendaal?",
        answer: "Jazeker! Veel woningen in Voerendaal hebben al een warmtepomp. Een moderne airco is een perfecte aanvulling voor koeling in de zomer. Als ervaren airco installateur in de buurt adviseren we u graag over de beste combinatie. Sommige systemen kunnen zelfs geïntegreerd worden voor optimale efficiëntie."
      },
      {
        question: "Wat zijn de kosten voor airco installatie in Voerendaal?",
        answer: "Voor een standaard airco installatie in Voerendaal rekenen we tussen €1.400 en €3.200. Als uw lokale airco specialist dichtbij kunnen we scherpe prijzen bieden. De exacte prijs hangt af van het type woning, gewenste capaciteit en complexiteit van de installatie. We komen graag langs voor een vrijblijvende offerte."
      },
      {
        question: "Hoe snel kan een airco geïnstalleerd worden in mijn woning in Voerendaal?",
        answer: "Als airco monteur bij u in de buurt kunnen we meestal binnen 5-7 werkdagen installeren. In de zomermaanden kan dit oplopen, maar door onze lokale aanwezigheid hebben we vaak nog mogelijkheden. Een standaard installatie duurt één werkdag."
      }
    ],
    nearbyLocations: [
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "7 km"
      },
      {
        name: "Landgraaf",
        url: "/airco-installatie/landgraaf",
        distance: "9 km"
      },
      {
        name: "Kerkrade",
        url: "/airco-installatie/kerkrade",
        distance: "12 km"
      },
      {
        name: "Simpelveld",
        url: "/airco-installatie/simpelveld",
        distance: "5 km"
      }
    ],
    installationCount: 95
  };

  return <LocationLandingPage {...voerendaalData} />;
}