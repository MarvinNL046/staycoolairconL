import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SplitComparisonContent from '../../../components/SplitComparisonContent';
import Contact from '../../../components/Contact';
import { comparisonSeo,comparisonSchema,type ComparisonChoice } from '../../../data/splitComparison';

const defaultContext = 'Single-split of multi-split — graag advies en een offerte voor mijn woning in Limburg.';
export default function MonoSplitVsMultiSplit() {
  const [selection, setSelection] = useState(defaultContext);
  const select = (choice: ComparisonChoice | null) => {
    setSelection(choice?.context ?? defaultContext);
    requestAnimationFrame(() => document.getElementById('contact-aanvraag')?.scrollIntoView({ behavior: 'smooth' }));
  };
  return <>
    <Helmet>
      <title>{comparisonSeo.title}</title>
      <meta name="title" content={comparisonSeo.title} />
      <meta name="description" content={comparisonSeo.description} />
      <link rel="canonical" href={comparisonSeo.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={comparisonSeo.title} />
      <meta property="og:description" content={comparisonSeo.description} />
      <meta property="og:url" content={comparisonSeo.canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={comparisonSeo.title} />
      <meta name="twitter:description" content={comparisonSeo.description} />
      <script type="application/ld+json">{JSON.stringify(comparisonSchema)}</script>
    </Helmet>
    <SplitComparisonContent onSelect={select} />
    <Contact inquiryContext={selection} inquiryLabel="Uw adviesvraag:" formTitle="Advies en offerte voor uw opstelling" formIntro="Vertel ons welke ruimtes u wilt koelen of verwarmen, waar u woont en wat uw plannen zijn. U hoeft nog geen model te kiezen." />
  </>;
}
