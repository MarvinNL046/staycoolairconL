import React from 'react';
import ProductModelTemplate from '../../templates/ProductModelTemplate';

export default function Daiseikai10Page() {
  return (
    <ProductModelTemplate
      brand="Mitsubishi"
      model="Daiseikai 10"
      description="De Mitsubishi Daiseikai 10 biedt superieure prestaties en comfort."
      images={[{"url":"/images/products/Daiseikai 10-Hout-links-open_5_11zon.webp","alt":"Daiseikai 10 - Links"},{"url":"/images/products/Daiseikai 10-Hout-vooraanzicht_2_11zon.webp","alt":"Daiseikai 10 - Voor"}]}
      price="€3.200,- inclusief standaard installatie"
      energyLabel="A+++"
      capacity="2,5 kW - 5,0 kW"
      features={["Plasma-technologie voor luchtzuivering","Ultra-stil (slechts 20 dB)","Ingebouwde wifi-module"]}
      specifications={[{"label":"Koelcapaciteit","value":"2,5 - 5,0 kW"},{"label":"SEER","value":"tot 8.90"}]}
      slug="daiseikai-10"
    />
  );
}