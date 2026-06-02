import React from 'react';
import DealLPView, { DealVariant } from './DealLPView';

// Variant: hitte / pijn-hoek ("32°C binnen? Niet deze zomer.").
const variant: DealVariant = {
  metaTitle: '32°C binnen? Laat een airco plaatsen vanaf €1.695 | StayCool',
  metaDescription:
    'Te warm binnen deze zomer? Laat een airco plaatsen vanaf €1.695 inclusief montage. Koelen in de zomer, verwarmen in de winter. Vraag gratis advies aan huis aan.',
  canonicalUrl: 'https://staycoolairco.nl/lp/koel-deze-zomer',
  headline: '32°C binnen?',
  redBarText: 'Niet deze zomer.',
};

export default function KoelDezeZomerLP() {
  return <DealLPView variant={variant} />;
}
