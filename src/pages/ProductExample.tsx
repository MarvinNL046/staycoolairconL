import React from 'react';
import ProductDetail from '../components/ProductDetail';
import { ThermometerSun, Wind, Zap, Timer, Ruler } from 'lucide-react';

// Voorbeeld gebruik van de ProductDetail component
export default function ProductExample() {
  const productData = {
    brand: 'Daikin',
    model: 'Perfera FTXM-R',
    description: 'De Daikin Perfera is een hoogwaardige wandunit die zorgt voor optimaal comfort in uw woning. Met geavanceerde technologieën voor zowel koeling als verwarming.',
    imageUrl: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80',
    price: '€1.299,-',
    energyLabel: 'A+++',
    capacity: '3,5 kW',
    specifications: [
      { label: 'Koelcapaciteit', value: '3,5 kW' },
      { label: 'Verwarmingscapaciteit', value: '4,2 kW' },
      { label: 'SEER', value: '8,65' },
      { label: 'SCOP', value: '5,10' },
      { label: 'Geluidsniveau binnen', value: '19 dB(A)' },
      { label: 'Afmetingen (HxBxD)', value: '295 x 778 x 272 mm' },
      { label: 'Gewicht', value: '10 kg' },
      { label: 'Koudemiddel', value: 'R-32' }
    ],
    features: [
      {
        icon: ThermometerSun,
        title: '2-in-1 Systeem',
        description: 'Zowel koelen als verwarmen met één systeem'
      },
      {
        icon: Wind,
        title: '3-D Luchtstroming',
        description: 'Optimale verdeling van de lucht in uw ruimte'
      },
      {
        icon: Zap,
        title: 'Energiezuinig',
        description: 'A+++ label voor zowel koelen als verwarmen'
      },
      {
        icon: Timer,
        title: 'Flash Streamer',
        description: 'Zuivert de lucht van allergenen en geurtjes'
      },
      {
        icon: Ruler,
        title: 'Compact Design',
        description: 'Past in elk interieur door het slanke ontwerp'
      }
    ],
    documents: [
      {
        label: 'Technische specificaties',
        url: '#'
      },
      {
        label: 'Gebruikershandleiding',
        url: '#'
      },
      {
        label: 'Energielabel',
        url: '#'
      }
    ]
  };

  return <ProductDetail {...productData} />;
}</content>