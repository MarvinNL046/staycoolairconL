import React from 'react';
import {
  Phone,
  CheckCircle,
  Check,
  Clock,
  ShieldCheck,
  Award,
  ThermometerSun,
  Snowflake,
  Star,
  Wrench,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import Logo from '../../components/Logo';
import MultiStepLeadForm from '../../components/MultiStepLeadForm';
import CompactGoogleReviews from '../../components/CompactGoogleReviews';
import { featuredReviews } from '../../data/reviews';

/**
 * Gedeelde view voor de naked "deal" landingspagina's (paid traffic, /lp/).
 * Aanbod + body zijn IDENTIEK; alleen de hero-hook (headline + rode balk + meta)
 * verschilt per variant, zodat we schoon kunnen A/B-testen tussen ad-creatives.
 *
 * - Geen navbar/footer/chat/popups: chrome wordt in App.tsx uitgezet voor /lp/.
 * - noIndex: paid LP mag niet organisch concurreren met de echte pagina's.
 * - Eén conversiedoel: gratis-advies-formulier + bel-knop. Bewust GEEN uitgaande links.
 * - Oranje/zomer-thema dat de advertenties matcht (message-match). Let op:
 *   `orange-*` is in tailwind.config geremapt naar brand-blauw, daarom gebruiken we hier
 *   bewust echte oranje/rode/gele HEX-bracket-utilities zodat de ad-look behouden blijft.
 */

export interface DealVariant {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  /** Grote witte hero-kop. \n wordt een regelafbreking. */
  headline: string;
  /** Tekst in de rode highlight-balk onder de kop. */
  redBarText: string;
}

const TEL = '+31462021430';
const TEL_DISPLAY = '046 - 202 1430';
const PRICE = '€1.695';

// Ad-kleuren (los van de blauw-remap van orange-*)
const C = {
  heroFrom: '#FF8A1E',
  heroVia: '#F4651A',
  heroTo: '#E8431A',
  red: '#D81E05',
  yellow: '#FFD21E',
};

const HERO_IMAGE = '/images/airco-products/81002212_sk21290_81002214_main.webp';

const usps = [
  { icon: <Snowflake className="h-5 w-5" />, label: 'Koelen in de zomer' },
  { icon: <ThermometerSun className="h-5 w-5" />, label: 'Verwarmen in de winter' },
  { icon: <Wrench className="h-5 w-5" />, label: 'Inclusief montage' },
];

const reasons = [
  {
    icon: <Clock className="h-7 w-7" />,
    title: 'Snel geregeld',
    body: 'Geen wekenlange wachttijd. Na je aanvraag plannen we vlot in en hangt je airco vaak binnen enkele dagen netjes aan de muur.',
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: 'Gecertificeerd vakwerk',
    body: 'F-gas- en STEK-gecertificeerde eigen monteurs. Strakke afwerking, leidingen netjes weggewerkt — geen rommelige installatie.',
  },
  {
    icon: <ThermometerSun className="h-7 w-7" />,
    title: 'Koelen én verwarmen',
    body: 'Een moderne airco koelt in de zomer en verwarmt zuinig in de winter. Comfort het hele jaar door, lagere stookkosten.',
  },
  {
    icon: <Award className="h-7 w-7" />,
    title: 'Lokaal in Limburg',
    body: 'Honderden installaties in de regio en honderden Google-reviews. Een vast aanspreekpunt dat je gewoon kunt bellen.',
  },
];

const steps = [
  {
    icon: <FileCheck className="h-7 w-7" />,
    title: '1. Aanvraag',
    body: 'Vul het formulier in of bel ons. We bellen je snel terug om een moment te plannen.',
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: '2. Gratis advies aan huis',
    body: 'We komen langs, bekijken de situatie en adviseren het juiste model met een vaste prijs vooraf.',
  },
  {
    icon: <CheckCircle className="h-7 w-7" />,
    title: '3. Installatie',
    body: 'Onze monteurs installeren vakkundig en ruimen alles netjes op. Klaar om te koelen.',
  },
];

const faqs = [
  {
    q: 'Wat krijg ik voor de vanaf-prijs van €1.695?',
    a: 'Dat is de vanaf-prijs voor een complete single-split airco (één binnen- en één buitenunit) inclusief standaard montage door onze eigen gecertificeerde monteurs. De uiteindelijke prijs hangt af van je woning, het gekozen model en het vermogen — je krijgt vooraf altijd een vaste offerte zonder verrassingen.',
  },
  {
    q: 'Is het adviesgesprek echt gratis en vrijblijvend?',
    a: 'Ja. We komen kosteloos langs, bekijken de situatie en adviseren je welk type airco en vermogen het beste past. Je zit nergens aan vast — pas als je akkoord gaat op de offerte plannen we de installatie in.',
  },
  {
    q: 'Hoe snel kunnen jullie installeren?',
    a: 'In veel gevallen binnen enkele dagen na akkoord op de offerte. In het hoogseizoen (zomer) kan de wachttijd iets oplopen, maar we plannen altijd zo snel mogelijk in.',
  },
  {
    q: 'Krijg ik garantie op de installatie?',
    a: 'Ja. Je krijgt tot 5 jaar garantie op de installatie en daarnaast de fabrieksgarantie op het toestel zelf. We blijven ook na de montage je aanspreekpunt voor onderhoud.',
  },
  {
    q: 'Zijn jullie monteurs gecertificeerd?',
    a: 'Zeker. We werken met eigen, F-gas- en STEK-gecertificeerde monteurs. Dat is wettelijk verplicht voor het werken met koudemiddel en garandeert een veilige, correcte installatie.',
  },
  {
    q: 'Verwarmt een airco ook in de winter?',
    a: 'Ja. Een moderne inverter-airco koelt in de zomer én verwarmt zuinig in de winter — vaak goedkoper dan stoken op gas. Zo profiteer je het hele jaar door van je investering.',
  },
];

export default function DealLPView({ variant }: { variant: DealVariant }) {
  return (
    <div className="min-h-screen bg-white text-quatt-dark">
      <MetaTags
        title={variant.metaTitle}
        description={variant.metaDescription}
        canonicalUrl={variant.canonicalUrl}
        type="service"
        noIndex={true}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${C.heroFrom} 0%, ${C.heroVia} 55%, ${C.heroTo} 100%)`,
        }}
      >
        {/* Logo (geen nav) — wit badge voor contrast */}
        <div className="mx-auto max-w-6xl px-4 pt-6">
          <div className="inline-flex items-center rounded-xl bg-white px-4 py-2 shadow-md">
            <Logo className="h-8 w-auto" />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2 lg:py-14">
          {/* Copy */}
          <div className="text-white">
            <h1 className="whitespace-pre-line text-4xl font-black uppercase leading-[0.95] tracking-tight drop-shadow-sm sm:text-5xl lg:text-6xl">
              {variant.headline}
            </h1>

            <div className="mt-5 inline-block rounded-lg bg-[#D81E05] px-4 py-2 shadow-md">
              <p className="text-lg font-bold text-white sm:text-xl">{variant.redBarText}</p>
            </div>

            {/* Prijsbadge */}
            <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <span
                className="rounded-md px-3 py-1 text-sm font-black uppercase tracking-wide text-white"
                style={{ backgroundColor: C.red }}
              >
                Vanaf
              </span>
              <span className="text-4xl font-black leading-none sm:text-5xl" style={{ color: C.red }}>
                {PRICE}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-white/90">
              Complete set inclusief standaard montage
            </p>

            {/* USP-checks */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {usps.map((u) => (
                <li key={u.label} className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white" style={{ color: C.red }}>
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="font-semibold text-white">{u.label}</span>
                </li>
              ))}
            </ul>

            {/* Hero product image (mobiel, in de copy-flow) */}
            <img
              src={HERO_IMAGE}
              alt="LG airco set — binnenunit, buitenunit en afstandsbediening"
              className="mt-8 w-full max-w-md drop-shadow-2xl lg:hidden"
              loading="eager"
              width={448}
              height={448}
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#offerte"
                className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-black uppercase tracking-wide shadow-xl transition hover:brightness-95"
                style={{ backgroundColor: C.yellow, color: C.red }}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: C.red, color: 'white' }}>
                  <ArrowRight className="h-4 w-4" strokeWidth={3} />
                </span>
                Vraag gratis advies aan huis
              </a>
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-6 py-4 text-base font-semibold text-white ring-1 ring-inset ring-white/40 transition hover:bg-white/25"
              >
                <Phone className="h-5 w-5" />
                Bel {TEL_DISPLAY}
              </a>
            </div>

            <div className="mt-5 text-gray-900">
              <CompactGoogleReviews />
            </div>
          </div>

          {/* Form */}
          <div id="offerte" className="scroll-mt-6">
            <img
              src={HERO_IMAGE}
              alt="LG airco set — binnenunit, buitenunit en afstandsbediening"
              className="mx-auto mb-6 hidden w-full max-w-sm drop-shadow-2xl lg:block"
              loading="eager"
              width={384}
              height={384}
            />
            <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-quatt-dark sm:text-2xl">
                  Gratis advies aan huis aanvragen
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Vul je gegevens in — we bellen je snel terug om een vrijblijvend adviesgesprek bij je thuis in te plannen.
                </p>
              </div>
              <MultiStepLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="border-b border-gray-100" style={{ backgroundColor: '#FFF4EC' }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center md:grid-cols-4">
          {[
            { icon: <Clock className="h-6 w-6" />, label: 'Snel geïnstalleerd' },
            { icon: <ShieldCheck className="h-6 w-6" />, label: 'F-gas & STEK gecertificeerd' },
            { icon: <Award className="h-6 w-6" />, label: 'Tot 5 jaar garantie' },
            { icon: <Star className="h-6 w-6" />, label: 'Honderden 5★ reviews' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span style={{ color: C.heroTo }}>{item.icon}</span>
              <span className="text-sm font-medium text-quatt-dark">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WAAROM STAYCOOL ===== */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-quatt-dark sm:text-3xl">
            Waarom kiezen voor StayCool Airco?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-xl p-3" style={{ backgroundColor: '#FFE6D5', color: C.heroTo }}>
                  {r.icon}
                </div>
                <h3 className="text-lg font-semibold text-quatt-dark">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ZO WERKT HET ===== */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-quatt-dark sm:text-3xl">
            Zo werkt het — in 3 stappen
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-full p-4 text-white" style={{ backgroundColor: C.heroTo }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-quatt-dark">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#offerte"
              className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-black uppercase tracking-wide text-white shadow-lg transition hover:brightness-95"
              style={{ backgroundColor: C.heroTo }}
            >
              Vraag gratis advies aan huis
            </a>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-quatt-dark sm:text-3xl">
              Wat klanten in Limburg zeggen
            </h2>
            <div className="mt-4 flex justify-center">
              <CompactGoogleReviews />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredReviews.slice(0, 6).map((review) => (
              <div key={review.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-700">“{review.text}”</p>
                <p className="mt-4 text-sm font-semibold text-quatt-dark">
                  {review.name}
                  <span className="font-normal text-gray-500"> · {review.location}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-2xl font-bold text-quatt-dark sm:text-3xl">
            Veelgestelde vragen
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-gray-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-quatt-dark">
                  {faq.q}
                  <span className="transition group-open:rotate-45" style={{ color: C.heroTo }}>
                    ＋
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="py-14"
        style={{
          backgroundImage: `linear-gradient(135deg, ${C.heroVia} 0%, ${C.heroTo} 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="text-2xl font-black uppercase sm:text-3xl">
              Klaar voor een koel huis deze zomer?
            </h2>
            <p className="mt-3 max-w-md text-white/90">
              Laat deze zomer een airco plaatsen vanaf {PRICE} inclusief montage. Vraag vrijblijvend
              gratis advies aan huis aan, of bel ons direct — we helpen je graag verder.
            </p>
            <a
              href={`tel:${TEL}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold shadow-lg transition hover:bg-gray-50"
              style={{ color: C.heroTo }}
            >
              <Phone className="h-5 w-5" />
              Bel {TEL_DISPLAY}
            </a>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
            <h3 className="mb-4 text-xl font-bold text-quatt-dark">Gratis advies aan huis aanvragen</h3>
            <MultiStepLeadForm />
          </div>
        </div>
      </section>

      {/* ===== STICKY MOBILE CALL BAR ===== */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
        <a
          href={`tel:${TEL}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold"
          style={{ color: C.heroTo }}
        >
          <Phone className="h-4 w-4" />
          Bel direct
        </a>
        <a
          href="#offerte"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
          style={{ backgroundColor: C.heroTo }}
        >
          Gratis advies
        </a>
      </div>
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </div>
  );
}
