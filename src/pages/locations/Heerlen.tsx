import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function HeerlenPage() {
  // Get real Google reviews localized for Heerlen
  const realReviews = getLocalizedReviews("Heerlen", 4);
  
  // City-specific data
  const cityData = {
    city: "Heerlen",
    region: "Zuid-Limburg",
    postalCodes: "6411, 6412, 6413, 6414, 6415, 6416, 6417, 6418, 6419",
    populationCount: 86000,
    locationImage: "/images/locations/heerlen.webp",
    installationCount: 150,
    
    // Climate-specific information for Heerlen
    climateFacts: [
      "Heerlen heeft door de hoger gelegen ligging vaak iets mildere zomers",
      "Klimaatverandering zorgt echter voor steeds meer tropische dagen in Heerlen",
      "Door de verstedelijking ontstaat ook in Heerlen een duidelijk hitte-eiland effect",
      "De naoorlogse bebouwing in Heerlen warmt relatief snel op in de zomer"
    ],
    
    // Special features for Heerlen installations
    specialFeatures: [
      "Speciale aandacht voor de typische naoorlogse woningen in Heerlen",
      "Ervaring met het koelen van de karakteristieke mijnwerkerswoningen",
      "Oplossingen voor de hoogbouw in het centrum van Heerlen",
      "Innovatieve koeltechnologie die aansluit bij het mijnwater-energienetwerk"
    ],
    
    // Use real Google reviews localized for Heerlen
    testimonials: realReviews,
    
    // FAQs specific to Heerlen
    faqs: [
      {
        question: "Wat kost een airco installatie in Heerlen gemiddeld?",
        answer: "De kosten voor een airco installatie in Heerlen liggen gemiddeld tussen €1.200 en €2.600, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor de typische naoorlogse woningen in Heerlen hebben we vaak standaardoplossingen die kostenefficiënt kunnen worden geïnstalleerd. We maken graag een persoonlijke offerte op basis van uw specifieke situatie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Heerlen gemiddeld?",
        answer: "Een standaard airco installatie in Heerlen duurt meestal één werkdag. Bij complexere installaties, zoals in oudere mijnwerkerswoningen met dikke muren, kan dit uitlopen tot maximaal twee dagen. We zorgen altijd voor een nette en snelle afwerking met minimale overlast."
      },
      {
        question: "Is het mogelijk om aan te sluiten op het mijnwater-energienetwerk in Heerlen?",
        answer: "Het innovatieve mijnwater-energienetwerk in Heerlen is primair gericht op grotere gebouwen en woonblokken. Voor individuele woningen adviseren we moderne warmtepomp-airco's die zeer energiezuinig zijn en zowel kunnen koelen als verwarmen. We blijven de ontwikkelingen rond het mijnwater-energienetwerk volgen en kunnen adviseren over toekomstige aansluitmogelijkheden."
      },
      {
        question: "Welke airco is het meest geschikt voor de naoorlogse woningen in Heerlen?",
        answer: "Voor de typische naoorlogse woningen in Heerlen, die vaak een betonnen constructie hebben, adviseren we vaak wandmodellen met voldoende capaciteit om deze goed geïsoleerde woningen effectief te koelen. Merken als Mitsubishi Electric en Daikin hebben specifieke modellen die zeer geschikt zijn voor dit type woningen en een uitstekende prijs-kwaliteitverhouding bieden."
      },
      {
        question: "Bieden jullie ook onderhoud voor airco's in Heerlen?",
        answer: "Zeker! We bieden uitgebreide onderhoudsdiensten aan voor alle airco's in Heerlen en omgeving. Regelmatig onderhoud is essentieel voor optimale prestaties en een lange levensduur. We raden aan om minimaal één keer per jaar een onderhoudsbeurt te laten uitvoeren, bij voorkeur vóór het warme seizoen."
      },
      {
        question: "Kan een airco in Heerlen ook verwarmen in de winter?",
        answer: "Absoluut! De moderne aircosystemen die wij installeren in Heerlen zijn warmtepompen die zeer efficiënt kunnen verwarmen, zelfs bij lagere buitentemperaturen. Deze systemen kunnen tot 70% energiezuiniger zijn dan traditionele elektrische verwarming. Vooral in de voor- en najaar, wanneer het nog niet koud genoeg is om de centrale verwarming aan te zetten, kan een airco een zeer kosteneffectieve verwarmingsoplossing zijn."
      },
      {
        question: "Zijn er speciale overwegingen voor airco installatie in hoogbouw in Heerlen?",
        answer: "Ja, voor de hoogbouw in het centrum van Heerlen hebben we speciale expertise. We rekening houden met windbelasting op hogere verdiepingen, beperkte toegankelijkheid voor buitenunits, en eventuele VvE-regels. Vaak installeren we buitenunits op balkons of daken, en zorgen we voor discreet leidingwerk. Onze monteurs hebben ervaring met hoogwerkers en veiligheidsprotocollen voor installaties op hoogte."
      },
      {
        question: "Hoe verhouden de kosten van airco verwarming zich tot stadsverwarming in Heerlen?",
        answer: "In Heerlen, waar veel woningen aangesloten zijn op stadsverwarming, kan een airco een uitstekende aanvulling zijn. Voor tussenseizoenen (voorjaar/najaar) is airco verwarming vaak goedkoper dan stadsverwarming aanzetten. Ook voor extra koeling in specifieke ruimtes is een airco ideaal. We kunnen u helpen berekenen wanneer het voordeliger is om de airco of stadsverwarming te gebruiken, afhankelijk van de actuele tarieven."
      },
      {
        question: "Wat zijn de mogelijkheden voor airco in mijnwerkerswoningen in Heerlen?",
        answer: "De karakteristieke mijnwerkerswoningen in Heerlen hebben vaak stevige bakstenen muren en relatief kleine ruimtes, wat ze zeer geschikt maakt voor airco installatie. De dikke muren houden de koele lucht goed vast. We adviseren vaak compacte wandmodellen die goed passen bij de oorspronkelijke architectuur. Door de kleinere ruimtes zijn vaak units met lagere capaciteit voldoende, wat de installatiekosten beperkt houdt."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Kerkrade",
        url: "/airco-installatie/kerkrade",
        distance: "7 km"
      },
      {
        name: "Brunssum",
        url: "/airco-installatie/brunssum",
        distance: "10 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "18 km"
      },
      {
        name: "Maastricht",
        url: "/airco-installatie/maastricht",
        distance: "24 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
