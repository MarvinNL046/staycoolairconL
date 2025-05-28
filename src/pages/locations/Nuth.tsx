import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';

export default function Nuth() {
  const nuthData = {
    city: "Nuth",
    region: "Zuid-Limburg",
    postalCodes: "6361, 6363, 6365",
    populationCount: 15300,
    climateFacts: [
      "Nuth ligt in de overgangszone tussen Heuvelland en Westelijke Mijnstreek",
      "De gemeente kent steeds meer dagen met temperaturen boven 25°C",
      "Dichtbebouwde wijken in Nuth centrum ervaren een sterk hitte-eiland effect",
      "Veel woningen uit de jaren '60-'80 hebben beperkte natuurlijke ventilatie"
    ],
    specialFeatures: [
      "Veel naoorlogse rijtjeswoningen die ideaal zijn voor split-unit airco's",
      "Groeiende vraag vanuit seniorenwoningen voor koeling én verwarming",
      "Moderne bedrijventerreinen met behoefte aan klimaatbeheersing",
      "Ervaring met installaties in voormalige mijnwerkerswoningen"
    ],
    testimonials: [
      {
        name: "J. Cremers - Nuth",
        rating: 5,
        comment: "Beste airco installateur bij ons in de buurt! Ze kennen de woningen hier perfect en hebben een top systeem geïnstalleerd.",
        date: "September 2024"
      },
      {
        name: "Familie Wijnands - Hulsberg",
        rating: 5,
        comment: "Eindelijk een airco specialist dichtbij die begrijpt wat oudere mensen nodig hebben. Zeer vriendelijk en kundig!",
        date: "Augustus 2024"
      },
      {
        name: "R. Beckers - Schimmert",
        rating: 4,
        comment: "Als lokale airco monteur in de buurt waren ze flexibel met de planning. Netjes gewerkt en goede uitleg over het gebruik.",
        date: "Juli 2024"
      }
    ],
    faqs: [
      {
        question: "Waarom een lokale airco installateur bij mij in de buurt in Nuth kiezen?",
        answer: "Een airco specialist uit de buurt kent de typische woningen in Nuth, van naoorlogse rijtjeshuizen tot moderne seniorencomplexen. Als airco monteur dichtbij zijn we snel ter plaatse voor service en onderhoud. We begrijpen ook de specifieke behoeften van onze lokale gemeenschap."
      },
      {
        question: "Is een airco ook geschikt voor verwarming in Nuth?",
        answer: "Absoluut! Moderne airco's zijn zeer efficiënte verwarmingssystemen. Als ervaren airco installateur in de buurt adviseren we veel klanten in Nuth over airco's die zowel koelen als verwarmen. Vooral voor senioren is dit een comfortabele oplossing het hele jaar door."
      },
      {
        question: "Wat kost een airco installatie in een rijtjeshuis in Nuth?",
        answer: "Voor een typisch rijtjeshuis in Nuth rekenen we €1.350 tot €2.800 voor een complete airco installatie. Als uw lokale airco specialist dichtbij kunnen we scherpe prijzen bieden door lage reiskosten. We maken graag een persoonlijke offerte op maat."
      },
      {
        question: "Hoe lang duurt het voordat jullie kunnen installeren in Nuth?",
        answer: "Als airco monteur bij u in de buurt kunnen we meestal binnen 5-7 werkdagen starten met de installatie. Voor spoedgevallen of in het hoogseizoen doen we ons best om nog sneller te zijn. Een standaard installatie in Nuth is binnen één dag afgerond."
      }
    ],
    nearbyLocations: [
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "9 km"
      },
      {
        name: "Beek",
        url: "/airco-installatie/beek",
        distance: "8 km"
      },
      {
        name: "Geleen",
        url: "/airco-installatie/geleen",
        distance: "10 km"
      },
      {
        name: "Heerlen",
        url: "/airco-installatie/heerlen",
        distance: "12 km"
      }
    ],
    installationCount: 110
  };

  return <LocationLandingPage {...nuthData} />;
}