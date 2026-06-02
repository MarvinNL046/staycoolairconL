import React from 'react';
import DealLPView, { DealVariant } from './DealLPView';

// Variant: vakantiegeld / zomer-deal hoek.
const variant: DealVariant = {
  metaTitle: 'Vakantiegeld Deal — airco laten plaatsen vanaf €1.695 | StayCool',
  metaDescription:
    'Laat deze zomer een airco plaatsen vanaf €1.695 inclusief montage. Koelen in de zomer, verwarmen in de winter. Vraag gratis advies aan huis aan bij StayCool Airco.',
  canonicalUrl: 'https://staycoolairco.nl/lp/vakantiegeld-deal',
  headline: 'Vakantiegeld\nDeal ☀️',
  redBarText: 'Laat deze zomer een airco plaatsen',
};

export default function VakantiegeldDealLP() {
  return <DealLPView variant={variant} />;
}
