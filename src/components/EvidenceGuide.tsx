import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import MetaTags from './MetaTags';

export interface EvidenceGuideData {
  path: string; title: string; heading: string; description: string; intro: string;
  sections: [string, string][]; sources: [string, string][];
  related: [string, string][]; noindex?: boolean;
  cta?: [string, string];
}
export default function EvidenceGuide({ guide }: { guide: EvidenceGuideData }) {
  return <>
    <MetaTags title={guide.title} description={guide.description} canonicalUrl={`https://staycoolairco.nl${guide.path}`} noIndex={guide.noindex} />
    <article className="bg-slate-50 px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: guide.heading }]} />
        <h1 className="mt-8 text-3xl font-bold sm:text-5xl">{guide.heading}</h1>
        <p className="mt-6 text-xl leading-relaxed">{guide.intro}</p>
        <p className="mt-4 text-sm text-slate-600">Inhoud gecontroleerd op <time dateTime="2026-09-10">10 september 2026</time>.</p>
        <Link to={guide.cta?.[1] || '/contact'} className="mt-6 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white">{guide.cta?.[0] || 'Vraag advies voor mijn situatie'}</Link>
        {guide.sections.map(([heading, body]) => <section key={heading} className="mt-10"><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-4 text-lg leading-relaxed whitespace-pre-line">{body}</p></section>)}
        <section className="mt-10 rounded-xl bg-white p-6">
          <h2 className="text-2xl font-bold">Bronnen en verder lezen</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6">
            {guide.sources.map(([label, href]) => <li key={href}><a className="text-blue-700 underline" href={href}>{label}</a></li>)}
            {guide.related.map(([label, to]) => <li key={to}><Link className="text-blue-700 underline" to={to}>{label}</Link></li>)}
          </ul>
        </section>
        <section className="mt-10"><h2 className="text-2xl font-bold">Bespreek uw woning in Limburg</h2><p className="mt-4 leading-relaxed">Wilt u weten welke oplossing bij uw woning en gebruik past? Stuur uw vragen en de relevante offerte- of verbruiksgegevens mee bij uw <Link to="/contact" className="text-blue-700 underline">adviesaanvraag</Link>. U kunt ook bellen naar <a href="tel:+31462021430" className="text-blue-700 underline">046 202 1430</a>. We bespreken de uitvoering en kosten voor uw situatie voordat u een keuze maakt.</p></section>
      </div>
    </article>
  </>;
}
