import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  HelpCircle,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import Contact from '../components/Contact';
import Breadcrumbs from '../components/Breadcrumbs';
import { getServicePageBySlug, servicePagesBySlug, type ServicePage } from '../data/servicePages';

interface ServiceLandingPageProps {
  slug: string;
}

const ctaLabels = {
  offerte: 'Ontvang vrijblijvend een offerte',
  advies: 'Ontvang vrijblijvend advies',
  spoed: 'Vraag snelle beschikbaarheid aan',
  onderhoud: 'Vraag service vrijblijvend aan',
};

export default function ServiceLandingPage({ slug }: ServiceLandingPageProps) {
  const page = getServicePageBySlug(slug);
  const canonicalUrl = page ? `https://staycoolairco.nl/${page.canonicalSlug}` : 'https://staycoolairco.nl';

  useEffect(() => {
    if (!page) return;

    document
      .querySelectorAll<HTMLMetaElement>('meta[name="description"]')
      .forEach((meta) => meta.setAttribute('content', page.metaDescription));

    document
      .querySelectorAll<HTMLLinkElement>('link[rel="canonical"]')
      .forEach((link) => link.setAttribute('href', canonicalUrl));
  }, [canonicalUrl, page]);

  if (!page) {
    return (
      <main className="min-h-screen bg-white px-4 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-quatt-dark">Pagina niet gevonden</h1>
          <p className="mb-8 text-lg text-gray-600">Deze servicepagina bestaat niet of is verplaatst.</p>
          <Link className="font-bold text-quatt-orange hover:underline" to="/">
            Terug naar de homepage
          </Link>
        </div>
      </main>
    );
  }

  const relatedPages = page.relatedSlugs
    .map((relatedSlug) => servicePagesBySlug[relatedSlug])
    .filter((relatedPage): relatedPage is ServicePage => Boolean(relatedPage));
  const ctaLabel = ctaLabels[page.ctaVariant];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.primaryKeyword,
    serviceType: page.title,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Limburg',
    },
    provider: {
      '@type': 'Organization',
      name: 'StayCool Airco',
      url: 'https://staycoolairco.nl',
    },
    description: page.metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="robots" content={page.indexable ? 'index, follow' : 'noindex, follow'} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-white">
        <section className="relative overflow-hidden bg-[#f7f3ec] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-quatt-orange/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <Breadcrumbs items={[{ label: page.title }]} />

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-wide text-quatt-orange shadow-sm">
                  {page.primaryKeyword}
                </p>
                <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight text-quatt-dark sm:text-5xl lg:text-6xl">
                  {page.h1}
                </h1>
                <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-700">
                  {page.intro}
                </p>

                <div className="mb-8 grid gap-3 sm:grid-cols-3">
                  {page.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm">
                      <CheckCircle className="h-5 w-5 shrink-0 text-quatt-orange" />
                      <span className="text-sm font-bold text-quatt-dark">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#offerte"
                    className="shiny-btn relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-quatt-orange px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-quatt-orange/20 transition-all hover:bg-[#D95528]"
                  >
                    Ontvang vrijblijvend een offerte
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="https://afspraken.staycoolairco.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-3xl border-2 border-quatt-dark px-8 py-4 text-base font-extrabold text-quatt-dark transition-all hover:bg-quatt-dark hover:text-white"
                  >
                    Plan gratis adviesgesprek
                  </a>
                </div>
              </div>

              <aside className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-quatt-dark/10 ring-1 ring-black/5">
                <div className="mb-6 rounded-3xl bg-quatt-dark p-6 text-white">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-quatt-orange">
                    Direct aanvragen
                  </p>
                  <h2 className="mb-3 text-2xl font-black">{ctaLabel}</h2>
                  <p className="text-white/80">
                    Beschrijf kort je woning en wens. Je ontvangt snel duidelijkheid over de best passende vervolgstap.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-quatt-orange" />
                    <div>
                      <strong className="block text-quatt-dark">Binnen 24 uur reactie</strong>
                      <span className="text-sm text-gray-600">Snel helderheid over mogelijkheden en planning.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileText className="mt-1 h-5 w-5 shrink-0 text-quatt-orange" />
                    <div>
                      <strong className="block text-quatt-dark">Vrijblijvende aanvraag</strong>
                      <span className="text-sm text-gray-600">Je beslist zelf of je met het voorstel verder wilt.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-quatt-orange" />
                    <div>
                      <strong className="block text-quatt-dark">Lokale dekking in Limburg</strong>
                      <span className="text-sm text-gray-600">Gericht op woningen in heel Limburg.</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-quatt-orange">Waarom</p>
              <h2 className="mb-5 text-3xl font-black text-quatt-dark">{page.whyTitle}</h2>
              <p className="text-lg leading-8 text-gray-700">{page.whyBody}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {page.benefits.map((benefit) => (
                <div key={benefit} className="rounded-3xl bg-[#f7f3ec] p-6">
                  <ShieldCheck className="mb-4 h-7 w-7 text-quatt-orange" />
                  <h3 className="text-lg font-black text-quatt-dark">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-quatt-dark px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-quatt-orange">Kosten</p>
              <h2 className="mb-5 text-3xl font-black">{page.costTitle}</h2>
              <p className="text-lg leading-8 text-white/80">{page.costBody}</p>
            </div>
            <div id="offerte" className="rounded-[2rem] bg-white p-6 text-quatt-dark shadow-2xl">
              <h2 className="mb-3 text-2xl font-black">Ontvang vrijblijvend een offerte</h2>
              <p className="mb-5 text-gray-600">
                Binnen 24 uur reactie. Geen lange zoektocht, wel snel duidelijkheid over prijs en planning.
              </p>
              <a
                href="#contact"
                className="shiny-btn relative inline-flex w-full items-center justify-center overflow-hidden rounded-3xl bg-quatt-orange px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-quatt-orange/20 transition-all hover:bg-[#D95528]"
              >
                Start je aanvraag
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-quatt-orange">Werkwijze</p>
              <h2 className="mb-8 text-3xl font-black text-quatt-dark">{page.processTitle}</h2>
              <ol className="space-y-5">
                {[
                  'Je vult kort je woning, ruimte en wensen in.',
                  'De aanvraag wordt beoordeeld op intentie, locatie en servicevraag.',
                  'Je ontvangt snel reactie met advies, offerte of vervolgstap.',
                  'Je beslist zelf of je de afspraak of offerte wilt doorzetten.',
                ].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-quatt-orange text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-lg text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-quatt-orange">Aandachtspunten</p>
              <h2 className="mb-8 text-3xl font-black text-quatt-dark">{page.attentionTitle}</h2>
              <ul className="space-y-4">
                {page.attentionPoints.map((point) => (
                  <li key={point} className="flex gap-3 rounded-2xl bg-[#f7f3ec] p-4">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-quatt-orange" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ec] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <HelpCircle className="mx-auto mb-4 h-10 w-10 text-quatt-orange" />
              <h2 className="text-3xl font-black text-quatt-dark">Veelgestelde vragen</h2>
            </div>
            <div className="space-y-4">
              {page.faq.map((item) => (
                <details key={item.question} className="group rounded-3xl bg-white p-6 shadow-sm">
                  <summary className="cursor-pointer text-lg font-black text-quatt-dark">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-7 text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-quatt-orange">Verder kijken</p>
                <h2 className="text-3xl font-black text-quatt-dark">Gerelateerde airco services in Limburg</h2>
              </div>
              <Link to="/airco-offerte-aanvragen-limburg" className="font-bold text-quatt-orange hover:underline">
                Offerte aanvragen
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  to={`/${relatedPage.slug}`}
                  className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="mb-4 inline-flex rounded-full bg-quatt-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-quatt-orange">
                    {relatedPage.category}
                  </span>
                  <h3 className="mb-3 text-xl font-black text-quatt-dark group-hover:text-quatt-orange">
                    {relatedPage.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">{relatedPage.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-quatt-orange px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="mb-2 text-3xl font-black">Binnen 24 uur reactie</h2>
              <p className="text-white/90">Vraag vandaag nog vrijblijvend duidelijkheid aan voor {page.primaryKeyword}.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-3xl bg-white px-8 py-4 text-base font-extrabold text-quatt-orange shadow-xl transition-all hover:bg-orange-50"
            >
              Ontvang vrijblijvend een offerte
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
