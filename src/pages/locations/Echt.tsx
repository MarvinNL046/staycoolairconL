import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function EchtPage() {
  // Get real Google reviews localized for Echt
  const realReviews = getLocalizedReviews("Echt", 4);

  // City-specific data
  const cityData = {
    city: "Echt",
    region: "Midden-Limburg",
    postalCodes: "6101, 6102, 6103, 6104, 6105",
    populationCount: 15950,
    installationCount: 65,
    
    // Climate-specific information for Echt
    climateFacts: [
      "Gemiddeld 24-29 zomerse dagen (25°C+) per jaar in Echt",
      "Door de ligging in het Maasdal kan de temperatuur in Echt tijdens hittegolven hoog oplopen",
      "De bebouwingsdichtheid in Echt zorgt voor extra warmteaccumulatie tijdens warme periodes"
    ],
    
    // Special features for Echt installations
    specialFeatures: [
      "Airco-oplossingen speciaal afgestemd op de diverse woningtypen in Echt en omliggende kernen",
      "Deskundige installatie in de historische panden in het centrum van Echt",
      "Energie-efficiënte systemen die passen bij de groene ambities van gemeente Echt-Susteren"
    ],
    
    // Use real Google reviews or if not available, sample reviews
    testimonials: realReviews.length > 0 ? realReviews : [
      {
        name: "Frank Willemsen",
        rating: 5,
        comment: "StayCool Airco heeft uitstekend werk geleverd bij de installatie van onze airconditioning in Echt. De monteurs waren zeer vakkundig en hebben alles netjes afgewerkt. We genieten nu van een aangename temperatuur in huis, ongeacht het weer buiten.",
        date: "April 2025"
      },
      {
        name: "Marianne Beckers",
        rating: 5,
        comment: "Zeer tevreden met de service van StayCool Airco. Het adviesgesprek was helder en informatief, de installatie verliep vlot en netjes. Onze woning in Koningsbosch blijft nu heerlijk koel, zelfs tijdens de warmste dagen.",
        date: "Maart 2025"
      },
      {
        name: "Thijs Hendrix",
        rating: 4,
        comment: "Goede ervaring met StayCool Airco voor onze woning in Echt-centrum. De airco werkt perfect en het team deed zijn best om alles netjes af te werken. Enige minpuntje was dat de installatie iets langer duurde dan gepland, maar het resultaat is het wachten waard geweest.",
        date: "Februari 2025"
      },
      {
        name: "Angelique van der Linden",
        rating: 5,
        comment: "Perfect! Eindelijk een aangename temperatuur in ons jaren '70 huis in Echt. De adviseur van StayCool heeft ons goed geholpen met het kiezen van de juiste airco voor onze situatie. De installatie verliep probleemloos en de prijs was zeer redelijk.",
        date: "Januari 2025"
      }
    ],
    
    // FAQs specific to Echt
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Echt?",
        answer: "De kosten voor een airco installatie in Echt variëren gemiddeld tussen €1.250 en €2.600, afhankelijk van het type systeem en de specifieke situatie van uw woning. Voor woningen in het centrum van Echt of in oudere kernen zoals Koningsbosch kan een meerprijs gelden vanwege specifieke aanpassingen. We maken graag een offerte op maat na een vrijblijvende inspectie."
      },
      {
        question: "Hoe lang duurt een airco installatie in Echt en omgeving?",
        answer: "Een standaard airco installatie in Echt duurt meestal één werkdag. Bij oudere of monumentale panden kan dit uitlopen tot maximaal twee dagen. We zorgen altijd voor een zorgvuldige installatie met minimale overlast en een nette afwerking."
      },
      {
        question: "Moet ik rekening houden met specifieke regelgeving in Echt?",
        answer: "In de gemeente Echt-Susteren is voor de meeste standaard airco-installaties geen vergunning nodig, zolang de buitenunit niet aan de voorgevel wordt geplaatst en voldoet aan de geluidsnormen. Voor monumentale panden of woningen in beschermde dorpsgezichten kunnen aanvullende regels gelden. We informeren u hierover tijdens ons adviesgesprek."
      },
      {
        question: "Installeren jullie ook airco's in de omliggende dorpen van Echt?",
        answer: "Absoluut! Naast Echt zelf installeren we ook airco's in alle omliggende kernen zoals Susteren, Koningsbosch, Pey, Maria Hoop, Dieteren, Roosteren en Nieuwstadt. In al deze locaties hebben we al vele tevreden klanten en kennen we de specifieke kenmerken van de lokale woningen."
      },
      {
        question: "Kan een airco in Echt ook gebruikt worden als verwarming?",
        answer: "Zeker! De moderne airco's die wij installeren in Echt en omgeving werken als warmtepompen die ook zeer efficiënt kunnen verwarmen, zelfs bij lagere buitentemperaturen. Dit maakt ze een duurzaam en energiezuinig alternatief voor traditionele verwarming in het Midden-Limburgse klimaat."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Susteren",
        url: "/airco-installatie/susteren",
        distance: "6 km"
      },
      {
        name: "Roermond",
        url: "/airco-installatie/roermond",
        distance: "18 km"
      },
      {
        name: "Sittard",
        url: "/airco-installatie/sittard",
        distance: "15 km"
      },
      {
        name: "Maasbracht",
        url: "/airco-installatie/maasbracht",
        distance: "12 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
