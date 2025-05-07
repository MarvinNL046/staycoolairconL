import React from 'react';
import ProductModelTemplate from '../../templates/ProductModelTemplate';

export default function StylishPage() {
  return (
    <ProductModelTemplate
      brand="Daikin"
      model="Stylish FTXA + RXA"
      description="De Daikin Stylish combineert stijlvol design met geavanceerde technologie."
      images={[{"url":"/images/products/daikin-stylish-wit.webp","alt":"Daikin Stylish - Wit"},{"url":"/images/products/daikin-stylish-zwart.webp","alt":"Daikin Stylish - Zwart"}]}
      price="€2.710,- inclusief standaard installatie"
      energyLabel="A+++"
      capacity="2,0 kW - 5,0 kW"
      features={["Coanda-effect voor optimale luchtverdeling","Flash Streamer technologie","Ingebouwde wifi-adapter"]}
      specifications={[{"label":"Koelcapaciteit","value":"2,0 - 5,0 kW"},{"label":"SEER","value":"tot 8.74"}]}
      slug="stylish"
    />
  );
}
