import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';

export default function EijsdenMargraten() {
  const eijsdenMargratenData = {
    city: "Eijsden-Margraten",
    region: "Zuid-Limburg",
    postalCodes: "6245, 6247, 6255, 6261, 6262, 6265, 6266, 6267, 6268, 6269",
    populationCount: 11775,
    climateFacts: [
      "Eijsden-Margraten kent door zijn heuvelachtige ligging specifieke klimaatomstandigheden",
      "De Maasvallei zorgt voor hogere luchtvochtigheid in de zomer",
      "Gemiddeld 20+ zomerse dagen per jaar in de regio",
      "Temperaturen kunnen oplopen tot boven de 35°C in de dorpskernen"
    ],
    specialFeatures: [
      "Historische panden vragen om discrete airco-installatie",
      "Veel vrijstaande woningen met ideale installatieomstandigheden",
      "Groeiende vraag naar duurzame koeling in nieuwbouwwijken",
      "Populair bij Belgische grensarbeiders die gewend zijn aan airco"
    ],
    testimonials: [
      {
        name: "Familie Jacobs - Eijsden",
        rating: 5,
        comment: "Als airco installateur bij ons in de buurt waren ze snel ter plaatse. Perfect advies voor ons monumentale pand!",
        date: "Oktober 2024"
      },
      {
        name: "M. Peeters - Margraten",
        rating: 5,
        comment: "Eindelijk een airco specialist dichtbij! Binnen een week geïnstalleerd en uitstekende service.",
        date: "Augustus 2024"
      },
      {
        name: "R. van der Linden - Cadier en Keer",
        rating: 4,
        comment: "Professionele installatie en goede prijs. Blij dat er nu een lokale airco monteur in de buurt is.",
        date: "Juli 2024"
      }
    ],
    faqs: [
      {
        question: "Waarom een airco installateur bij mij in de buurt in Eijsden-Margraten kiezen?",
        answer: "Een lokale airco specialist kent de specifieke kenmerken van woningen in Eijsden-Margraten, van monumentale panden in de dorpskernen tot moderne nieuwbouw. Wij zijn binnen 20 minuten ter plaatse en kennen de lokale regelgeving perfect."
      },
      {
        question: "Hoeveel kost een airco installatie in Eijsden-Margraten?",
        answer: "De kosten voor een airco installatie in Eijsden-Margraten variëren van €1.500 tot €3.500, afhankelijk van het type woning en gewenste capaciteit. Als airco installateur dichtbij kunnen wij scherpe prijzen bieden door lagere reiskosten."
      },
      {
        question: "Hoe snel kan een airco geïnstalleerd worden in mijn woning?",
        answer: "Als uw lokale airco monteur in de buurt kunnen wij meestal binnen 5-7 werkdagen een airco installeren. Voor spoedinstallaties in het hoogseizoen hebben we vaak nog mogelijkheden door onze lokale aanwezigheid."
      },
      {
        question: "Zijn er speciale regels voor airco installatie in monumentale panden?",
        answer: "Ja, voor monumentale panden in dorpskernen zoals Eijsden en Margraten gelden soms aanvullende regels. Als ervaren airco specialist in de buurt kennen wij deze regelgeving en helpen wij met de benodigde vergunningen."
      }
    ],
    nearbyLocations: [
      {
        name: "Maastricht",
        url: "/airco-installatie/maastricht",
        distance: "12 km"
      },
      {
        name: "Valkenburg",
        url: "/airco-installatie/valkenburg",
        distance: "15 km"
      },
      {
        name: "Gulpen-Wittem",
        url: "/airco-installatie/gulpen-wittem",
        distance: "10 km"
      },
      {
        name: "Vaals",
        url: "/airco-installatie/vaals",
        distance: "20 km"
      }
    ],
    installationCount: 85
  };

  return <LocationLandingPage {...eijsdenMargratenData} />;
}