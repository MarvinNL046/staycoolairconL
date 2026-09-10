import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CostGuideContent from '../components/CostGuideContent';
import Contact from '../components/Contact';
import { costInquiry,costSchema,costSeo,type CostExample } from '../data/costGuide';

export default function KostenAircoPlaatsen() {
  const [selection, setSelection] = useState('Airco inclusief installatie in Limburg — advies voor mijn woning');
  const select = (example: CostExample | null) => {
    setSelection(example ? costInquiry(example) : 'Airco inclusief installatie in Limburg — advies voor mijn woning');
    requestAnimationFrame(() => document.getElementById('contact-aanvraag')?.scrollIntoView({ behavior: 'smooth' }));
  };
  return <>
    <Helmet>
      <title>{costSeo.title}</title>
      <meta name="title" content={costSeo.title} />
      <meta name="description" content={costSeo.description} />
      <link rel="canonical" href={costSeo.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={costSeo.title} />
      <meta property="og:description" content={costSeo.description} />
      <meta property="og:url" content={costSeo.canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={costSeo.title} />
      <meta name="twitter:description" content={costSeo.description} />
      <script type="application/ld+json">{JSON.stringify(costSchema)}</script>
    </Helmet>
    <CostGuideContent onSelect={select} />
    <Contact inquiryContext={selection} formTitle="Vraag uw airco-offerte aan" formIntro="Vertel ons uw woonplaats, welke ruimtes u wilt koelen of verwarmen en uw wensen. Wij helpen u met een passende opstelling en prijs." />
  </>;
}
