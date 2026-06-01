import React from 'react';
import AircoInstallatieLPView, { LPVariant } from './AircoInstallatieLPView';

// Variant B — hoek: snelheid & gemak ("binnen enkele dagen geïnstalleerd").
// A/B-test tegen variant A (comfort/seizoen). Body is identiek; alleen de hero
// verschilt zodat de test zuiver de boodschap meet.
const variantB: LPVariant = {
  metaTitle: 'Airco binnen enkele dagen geïnstalleerd | StayCool Limburg',
  metaDescription:
    'Airco laten plaatsen zonder weken wachten? StayCool installeert vaak binnen enkele dagen — gecertificeerde monteurs en een vaste prijs vooraf. Vraag je offerte aan.',
  canonicalUrl: 'https://staycoolairco.nl/lp/airco-installatie-b',
  h1: 'Airco binnen enkele dagen geïnstalleerd',
  subhead:
    'Geen wekenlange wachttijd. Onze gecertificeerde monteurs plannen vlot in en hangen je airco netjes op — vaak al binnen enkele dagen.',
  usps: [
    'Vaak binnen enkele dagen geïnstalleerd',
    'Snel ingepland — geen weken wachten',
    'Gecertificeerde eigen monteurs (F-gas & STEK)',
    'Vaste offerte vooraf — geen verrassingen',
    'Tot 5 jaar garantie op installatie',
  ],
};

export default function AircoInstallatieLPB() {
  return <AircoInstallatieLPView variant={variantB} />;
}
