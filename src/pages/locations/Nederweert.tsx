import React from 'react';
import LocationLandingPage from '../../templates/LocationLandingPage';
import { getLocalizedReviews } from '../../utils/googleReviews';

export default function NederweertPage() {
  // Get real Google reviews localized for Nederweert
  const realReviews = getLocalizedReviews("Nederweert", 4);

  // City-specific data
  const cityData = {
    city: "Nederweert",
    region: "Midden-Limburg",
    postalCodes: "6031, 6034, 6035",
    populationCount: 10275,
    installationCount: 45,
    
    // Climate-specific information for Nederweert
    climateFacts: [
      "Gemiddeld 22-27 zomerse dagen (25°C+) per jaar in Nederweert",
      "Door de ligging nabij natuurgebieden zoals de Groote Peel heeft Nederweert een specifiek microklimaat",
      "De landelijke omgeving van Nederweert zorgt voor hogere temperatuurverschillen tussen dag en nacht"
    ],
    
    // Special features for Nederweert installations
    specialFeatures: [
      "Airco-oplossingen speciaal afgestemd op de landelijke woningbouw in Nederweert",
      "Aangepaste installatiemethoden voor karakteristieke boerderijen en vrijstaande woningen",
      "Extra aandacht voor stille buitenunits vanwege de rustige woonomgeving in Nederweert"
    ],
    
    // Use real Google reviews or if not available, sample reviews
    testimonials: realReviews.length > 0 ? realReviews : [
      {
        name: "John Hermans",
        rating: 5,
        comment: "Zeer tevreden met de airco installatie in onze woning in Nederweert. De monteurs waren professioneel en hebben alles netjes afgewerkt. De airco zelf werkt perfect en is veel stiller dan we hadden verwacht.",
        date: "Mei 2025"
      },
      {
        name: "Anja Verheijen",
        rating: 5,
        comment: "StayCool Airco heeft een uitstekende service geleverd bij de installatie van onze airco in Nederweert-Eind. De prijs-kwaliteitverhouding is top en we zijn blij dat we voor dit bedrijf hebben gekozen.",
        date: "April 2025"
      },
      {
        name: "Bart Seuren",
        rating: 4,
        comment: "Goede ervaring met StayCool Airco. Ze hebben rekening gehouden met de specifieke kenmerken van onze oude boerderij in Ospel. De installatie duurde iets langer dan gepland, maar het resultaat is prima.",
        date: "Maart 2025"
      },
      {
        name: "Lisa Maas",
        rating: 5,
        comment: "Wij hebben StayCool Airco gekozen na een goede offerte en duidelijk advies. De installatie in onze woning in Nederweert is zeer netjes uitgevoerd en de airco werkt perfect. Aanrader voor iedereen in de regio!",
        date: "Februari 2025"
      }
    ],
    
    // FAQs specific to Nederweert
    faqs: [
      {
        question: "Wat zijn de kosten van airco installatie in Nederweert?",
        answer: "De kosten voor een airco installatie in Nederweert variëren van €1.200 tot €2.500 voor een single-split systeem, afhankelijk van het type unit en de specifieke situatie van uw woning. Voor vrijstaande woningen of boerderijen kan er een meerprijs gelden vanwege de specifieke installatiebehoeften. We maken graag een vrijblijvende offerte op maat."
      },
      {
        question: "Hoe lang duurt een airco installatie in Nederweert?",
        answer: "Een standaard airco installatie in Nederweert duurt meestal één werkdag. Voor complexere installaties in bijvoorbeeld oudere panden of bij specifieke wensen kan dit uitlopen tot maximaal twee dagen. We zorgen altijd voor een nette en zorgvuldige afwerking."
      },
      {
        question: "Gelden er specifieke regels voor airco installatie in Nederweert?",
        answer: "In de gemeente Nederweert is voor de meeste standaard airco installaties geen vergunning nodig, zolang de buitenunit niet aan de voorgevel wordt geplaatst en voldoet aan de geluidsnormen. Voor monumentale panden of in beschermde dorpsgezichten kunnen aanvullende regels gelden. We adviseren u hierover tijdens ons vrijblijvende adviesgesprek."
      },
      {
        question: "Installeren jullie ook airco's in de omliggende kernen van Nederweert?",
        answer: "Zeker! We installeren niet alleen in Nederweert zelf, maar ook in alle omliggende kernen zoals Nederweert-Eind, Ospel, Budschop en Leveroy. We kennen de specifieke kenmerken van de woningen in deze gebieden goed en stemmen onze installatieaanpak hierop af."
      },
      {
        question: "Welk type airco is het meest geschikt voor woningen in het buitengebied van Nederweert?",
        answer: "Voor woningen in het buitengebied van Nederweert, waar vaak sprake is van meer ruimte en minder geluidsbeperkingen, adviseren we vaak split-units van merken zoals Daikin en Mitsubishi vanwege hun betrouwbaarheid en energiezuinigheid. Deze units zijn zeer geschikt voor de grotere vrijstaande woningen die in het buitengebied van Nederweert veel voorkomen."
      }
    ],
    
    // Nearby locations
    nearbyLocations: [
      {
        name: "Weert",
        url: "/airco-installatie/weert",
        distance: "8 km"
      },
      {
        name: "Roermond",
        url: "/airco-installatie/roermond",
        distance: "20 km"
      },
      {
        name: "Echt",
        url: "/airco-installatie/echt",
        distance: "25 km"
      },
      {
        name: "Ospel",
        url: "/airco-installatie/ospel",
        distance: "5 km"
      }
    ]
  };

  return <LocationLandingPage {...cityData} />;
}
