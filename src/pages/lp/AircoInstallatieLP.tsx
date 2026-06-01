import React from 'react';
import AircoInstallatieLPView, { LPVariant } from './AircoInstallatieLPView';

// Variant A — hoek: comfort / seizoen ("koel in de zomer, warm in de winter").
const variantA: LPVariant = {
  metaTitle: 'Airco laten installeren in Limburg | Gratis offerte | StayCool',
  metaDescription:
    'Airco laten installeren in Limburg? Gecertificeerde monteurs, vaak binnen enkele dagen geïnstalleerd, tot 5 jaar garantie. Vraag direct een vrijblijvende offerte aan.',
  canonicalUrl: 'https://staycoolairco.nl/lp/airco-installatie',
  h1: 'Airco laten installeren in Limburg',
  subhead:
    'Gecertificeerde monteurs, een strakke installatie en vaak binnen enkele dagen geregeld. Koel in de zomer, warm in de winter.',
  usps: [
    'Gratis advies & vaste offerte vooraf — geen verrassingen',
    'Gecertificeerde eigen monteurs (F-gas & STEK)',
    'Vaak binnen enkele dagen geïnstalleerd',
    'Koelen in de zomer én verwarmen in de winter',
    'Tot 5 jaar garantie op installatie',
  ],
};

export default function AircoInstallatieLP() {
  return <AircoInstallatieLPView variant={variantA} />;
}
