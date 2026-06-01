import React from 'react';
import {
  Phone,
  CheckCircle,
  Clock,
  ShieldCheck,
  Award,
  ThermometerSun,
  Star,
  Wrench,
  FileCheck,
} from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import Logo from '../../components/Logo';
import MultiStepLeadForm from '../../components/MultiStepLeadForm';
import CompactGoogleReviews from '../../components/CompactGoogleReviews';
import { featuredReviews } from '../../data/reviews';

/**
 * Gedeelde view voor de naked airco-installatie landingspagina's (paid traffic).
 * Hero (H1/subhead/USP's + meta) komt per variant binnen via props, zodat A/B-
 * varianten een IDENTIEKE body delen — alleen de hero verschilt (schone test).
 *
 * - Geen navbar/footer/chat/popups: chrome wordt in App.tsx uitgezet voor /lp/.
 * - noIndex: paid LP mag niet organisch concurreren met de echte
 *   installatie-pagina's (anti-cannibalisatie).
 * - Eén conversiedoel: offerte-formulier + bel-knop. Bewust GEEN uitgaande links.
 */

export interface LPVariant {
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  h1: string;
  subhead: string;
  usps: string[];
}

const TEL = '+31462021430';
const TEL_DISPLAY = '046 - 202 1430';

// Merken die we installeren — als logo of (waar geen logo) als tekst.
// Bewust GEEN links (geen extra-click leak op paid traffic).
const brandLogos = [
  { name: 'Daikin', src: '/images/brands/DAIKIN_logo.svg' },
  { name: 'LG', src: '/images/brands/LG_logo_(2014).svg' },
  { name: 'Samsung', src: '/images/brands/Samsung_Logo.svg' },
  { name: 'Toshiba', src: '/images/brands/Toshiba_logo.svg' },
];
const brandTextOnly = ['Mitsubishi Heavy', 'Tosot'];

const reasons = [
  {
    icon: <Clock className="h-7 w-7" />,
    title: 'Snel geregeld',
    body: 'Geen wekenlange wachttijd. Na je aanvraag plannen we vlot in en hangt je airco vaak binnen enkele dagen netjes aan de muur.',
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: 'Gecertificeerd vakwerk',
    body: 'F-gas- en STEK-gecertificeerde monteurs. Strakke afwerking, leidingen netjes weggewerkt — geen rommelige installatie.',
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
    body: 'Vul het formulier in of bel ons. We bellen je snel terug voor de details.',
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: '2. Advies & offerte',
    body: 'Persoonlijk advies over het juiste model en vermogen, met een heldere vaste prijs.',
  },
  {
    icon: <CheckCircle className="h-7 w-7" />,
    title: '3. Installatie',
    body: 'Onze monteurs installeren vakkundig en ruimen alles netjes op. Klaar om te koelen.',
  },
];

const faqs = [
  {
    q: 'Wat kost het laten installeren van een airco?',
    a: 'Dat hangt af van het type woning, het aantal ruimtes en het gekozen model. Je krijgt vooraf altijd een vaste offerte met een duidelijke totaalprijs — inclusief installatie en zonder verrassingen achteraf.',
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
    q: 'Welke airco past het beste bij mijn woning?',
    a: 'Dat bepalen we samen op basis van de ruimte(s), isolatie en je wensen. We installeren onder meer Daikin, Mitsubishi, LG, Samsung en Toshiba en adviseren onafhankelijk welk vermogen en model het beste past.',
  },
  {
    q: 'Geeft de installatie veel overlast of rommel?',
    a: 'Nee. Een gemiddelde installatie is in een dagdeel klaar. We werken netjes, beschermen je vloer en meubels en ruimen aan het eind alles op. De koelleidingen werken we strak weg.',
  },
];

export default function AircoInstallatieLPView({ variant }: { variant: LPVariant }) {
  return (
    <div className="min-h-screen bg-white text-quatt-dark">
      <MetaTags
        title={variant.metaTitle}
        description={variant.metaDescription}
        canonicalUrl={variant.canonicalUrl}
        type="service"
        noIndex={true}
      />

      {/* ===== HERO (per variant) ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-orange-700 to-orange-600">
        {/* Echt StayCool-logo (geen nav) — op wit badge voor contrast op de blauwe hero */}
        <div className="mx-auto max-w-6xl px-4 pt-6">
          <div className="inline-flex items-center rounded-xl bg-white px-4 py-2 shadow-md">
            <Logo className="h-8 w-auto" />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2 lg:py-16">
          {/* Copy */}
          <div className="text-white">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {variant.h1}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">{variant.subhead}</p>

            <ul className="mt-6 space-y-3">
              {variant.usps.map((usp) => (
                <li key={usp} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                  <span className="text-white/95">{usp}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-orange-700 shadow-lg transition hover:bg-gray-50"
              >
                <Phone className="h-5 w-5" />
                Bel {TEL_DISPLAY}
              </a>
              {/* wrapper forceert donkere tekst — widget erft anders hero's text-white */}
              <div className="text-gray-900">
                <CompactGoogleReviews />
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="offerte" className="scroll-mt-6">
            <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-quatt-dark sm:text-2xl">
                  Vraag je gratis offerte aan
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Vul je gegevens in — we bellen je snel terug. Vrijblijvend.
                </p>
              </div>
              <MultiStepLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="border-b border-gray-100 bg-orange-50/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-center md:grid-cols-4">
          {[
            { icon: <Clock className="h-6 w-6" />, label: 'Snel geïnstalleerd' },
            { icon: <ShieldCheck className="h-6 w-6" />, label: 'F-gas & STEK gecertificeerd' },
            { icon: <Award className="h-6 w-6" />, label: 'Tot 5 jaar garantie' },
            { icon: <Star className="h-6 w-6" />, label: 'Honderden 5★ reviews' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-orange-600">{item.icon}</span>
              <span className="text-sm font-medium text-quatt-dark">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BRAND LOGOS (inline, geen links) ===== */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-4">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wide text-gray-500">
            Officiële dealer van topmerken
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {brandLogos.map((brand) => (
              <img
                key={brand.name}
                src={brand.src}
                alt={brand.name}
                className="h-7 w-auto object-contain opacity-70 sm:h-8"
                loading="lazy"
              />
            ))}
            {brandTextOnly.map((name) => (
              <span key={name} className="text-lg font-bold text-gray-400">
                {name}
              </span>
            ))}
          </div>
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
                <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3 text-orange-600">
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
                <div className="mx-auto mb-4 inline-flex rounded-full bg-orange-600 p-4 text-white">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-orange-700"
            >
              Vraag vrijblijvend je offerte aan
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
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
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
                  <span className="text-orange-600 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gradient-to-br from-orange-700 to-orange-600 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Klaar voor een koel huis deze zomer?
            </h2>
            <p className="mt-3 max-w-md text-white/90">
              Vraag vandaag nog een vrijblijvende offerte aan, of bel ons direct.
              We helpen je graag verder.
            </p>
            <a
              href={`tel:${TEL}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-orange-700 shadow-lg transition hover:bg-gray-50"
            >
              <Phone className="h-5 w-5" />
              Bel {TEL_DISPLAY}
            </a>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
            <h3 className="mb-4 text-xl font-bold text-quatt-dark">
              Gratis offerte aanvragen
            </h3>
            <MultiStepLeadForm />
          </div>
        </div>
      </section>

      {/* ===== STICKY MOBILE CALL BAR ===== */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
        <a
          href={`tel:${TEL}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-orange-700"
        >
          <Phone className="h-4 w-4" />
          Bel direct
        </a>
        <a
          href="#offerte"
          className="flex items-center justify-center gap-2 bg-orange-600 py-3.5 text-sm font-semibold text-white"
        >
          Offerte aanvragen
        </a>
      </div>
      {/* spacer zodat sticky bar niets afdekt op mobiel */}
      <div className="h-14 lg:hidden" aria-hidden="true" />
    </div>
  );
}
