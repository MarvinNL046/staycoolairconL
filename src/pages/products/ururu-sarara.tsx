import React from 'react';
import ProductModelTemplate from '../../templates/ProductModelTemplate';

export default function UruruSararaPage() {
  return (
    <ProductModelTemplate
      brand="Daikin"
      model="Ururu Sarara"
      description="De Daikin Ururu Sarara is het meest geavanceerde model met unieke bevochtigings- en ontvochtigingsfuncties."
      images={[{"url":"/images/products/Ururu-Sarara-left.webp","alt":"Daikin Ururu Sarara - Links"},{"url":"/images/products/Ururu-Sarara-right.webp","alt":"Daikin Ururu Sarara - Rechts"}]}
      price="€4.500,- inclusief standaard installatie"
      energyLabel="A+++"
      capacity="2,5 kW - 5,0 kW"
      features={["Unieke bevochtigingsfunctie (Ururu)","Ontvochtigingsfunctie zonder temperatuurdaling (Sarara)","Flash Streamer technologie"]}
      specifications={[{"label":"Koelcapaciteit","value":"2,5 - 5,0 kW"},{"label":"SEER","value":"tot 9.54"}]}
      slug="ururu-sarara"
    />
  );
}