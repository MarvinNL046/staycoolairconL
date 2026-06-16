# StayCool — Visuele + technische refresh (Frank-DNA), zonder SEO-verlies

**Datum:** 2026-06-16
**Type:** visual refresh + performance (géén framework-migratie)
**Stijl-referentie:** [docs/design/frank-energie-dna.md](../../design/frank-energie-dna.md) — Frank Energie styling-DNA
**Status:** goedgekeurd (hero-richting akkoord) → klaar voor implementatieplan

---

## 1. Doel

De StayCool-site een strakke, kalme "anno 2026/27"-look geven in de geest van Frank Energie,
vertaald naar StayCool's eigen merk-blauw, met lichte WebGL-accenten — **zonder enig SEO-verlies
en zonder framework-migratie**. De stack (Vite + React 18 SPA, react-router-dom, react-helmet-async)
blijft ongewijzigd; we vervangen uitsluitend de **presentatie-laag**.

## 2. Vastgestelde beslissingen

| Onderwerp | Keuze |
|---|---|
| Scope | Visuele refresh + performance/CWV. Geen Next.js-migratie. |
| Stijl-bron | Frank Energie DNA (kleuren-ritme, whitespace, card-radius, pill-buttons, elevation, golvende hero-rand) |
| Palet | StayCool-blauw: `#40B0E0` (licht) · `#2080C0` (brand) · `#304090` (deep-navy) · `#1b2b3c` (tekst) · `#f6f7f8` (card-bg) |
| Warm accent | `#f06e2c` — **uitsluitend** voor primaire conversie-knop op witte secties (hybride CTA) |
| CTA-strategie | **Hybride (C):** navy/deep-blue knoppen op de blauwe hero; warm accent gereserveerd voor witte vlakken |
| Font | **Plus Jakarta Sans** (gratis, Google; dichtst bij Frank's Geomanist) |
| Radii | Cards 24px (`1.5rem`); buttons pill (120px) |
| Shadows | Subtiele elevation (lage opacity, grote blur) — small/medium/large schaal |
| 3D / WebGL | **Niveau B:** lichte WebGL-accenten. Eén blikvanger (traag-draaiende 3D airco-unit in hero). **Lazy-loaded ná LCP**, met statische `.webp` poster als fallback. Niet over het formulier. |
| Uitrol-aanpak | **Aanpak 1:** design-token-laag + herbruikbare UI-primitives, dan page-by-page (homepage-hero eerst → product-template → rest) |
| Startpagina | Homepage-hero |
| Navbar | **Slanke top-nav:** 3 items — `Airco's` (/products), `Thuisbatterijen` (/thuisbatterijen), + `Plan adviesgesprek`-knop. `tel:`-CTA blijft als contact-knop (CRO: phone 3-10× close-rate). Mega-dropdowns eruit. |

## 3. Architectuur

### 3.1 Design-token-laag (`tailwind.config.js`)
Eén bron van waarheid. Uitbreiden met:
- Kleur-tokens: `brand` (40B0E0/2080C0/304090), `ink` (#1b2b3c), `surface` (#fff/#f6f7f8), `accent` (#f06e2c), `success` (#47a92a).
- Radii-schaal incl. `card: 1.5rem`, `pill: 7.5rem`.
- Elevation/boxShadow: `sm`/`md`/`lg` volgens Frank's elevation-waarden.
- Font-family: Plus Jakarta Sans als `display`/`sans`, geladen via self-hosted woff2 (geen render-blocking; `font-display: swap`, preload van de hero-weight).
- **Brand-kleur-remap behouden:** bestaande `quatt-*`/`orange-*` tokens blijven gemapt (memory: brand colors) zodat oude classes niet breken — we voegen nieuwe semantische tokens toe naast de oude.

### 3.2 Herbruikbare UI-primitives (`src/components/ui/`)
Kleine, geïsoleerde, los testbare componenten — elk één doel:
- `Button` — varianten `primary` (navy), `accent` (warm, witte secties), `inverse` (wit op blauw), `outline`. Altijd pill.
- `Card` — wit, radius 24px, elevation; variant `soft` (#f6f7f8).
- `Section` — verticale ritme/whitespace-wrapper (consistente padding-schaal).
- `FeatureCard` — ronde check-badge + bold navy titel + body (Frank's 3-card-patroon).
- `Hero` — layout-shell (blauwe gradient + golvende SVG-onderrand).
- `WebglAccent` — **lazy** wrapper: rendert poster-`.webp` first, mount three.js pas na LCP/`requestIdleCallback`, respecteert `prefers-reduced-motion` (dan alleen poster).

### 3.3 Homepage-hero (`src/components/HeroRedesign.tsx` — restyle in place)
Herstijlen, structuur/SEO behouden:
- Blauwe gradient-hero + golvende witte onderrand.
- Links: founder-video pill (blijft) → navy headline (Plus Jakarta 800) → subhead → 2 USP-checks → `WebglAccent` (3D airco).
- Rechts: bestaande `MultiStepLeadForm` in een witte `Card` (24px, elevation) — **form blijft prominent**.
- `TrustooWidget` blijft 5s-deferred (bestaande LCP-optimalisatie).
- Onder hero: witte USP-strip (eigen monteurs · F-gas/STEK · garantie).

> **Intake-form zelf:** out of scope voor nu — Marvin kopieert later een formulier van een andere site.
> We restylen de *container/card*, niet de form-logica.

### 3.4 Navbar (`src/components/Navbar.tsx` — vereenvoudigen + restyle)
Terug naar een **slanke top-nav** (3 zichtbare keuzes):
- `Airco's` → `/products` · `Thuisbatterijen` → `/thuisbatterijen` · `Plan adviesgesprek`-knop (navy pill).
- `tel:0462021430` blijft als contact-CTA (CRO, geen "nav-link").
- Mega-dropdowns (money-pages, kennisbank, calculators) **eruit** uit de nav.
- Restyle naar tokens: Plus Jakarta Sans, pill-knop, navy/accent.

> **SEO-vangnet (orphan-preventie):** alle uit de nav verwijderde links blijven bestaan in de
> **Footer** (dekt al installatie/onderhoud/kennisbank/calculators/werkgebied/over/contact) en
> worden bewaakt door `npm run validate:money-links`. Geen page mag orphan worden.

## 4. SEO-behoud (harde eis)

Onaangeroerd bij élke page-restyle:
- `<Helmet>` title/description/canonical — exacte strings blijven.
- `SchemaMarkup` / JSON-LD (Product, LocalBusiness, etc.) — incl. `aggregateRating 4.8` (geen 5.0).
- URL's, routes (react-router), breadcrumbs, interne links.
- Eén `<h1>` per page met dezelfde keyword-front tekst.
- **Regressie-check per page-type** vóór merge (zie §6).

## 5. Performance-guardrails

- Lighthouse: **Perf 100 · SEO 100**, **CLS 0**, **LCP < 1,8s** (fleet-baseline).
- WebGL: lazy ná LCP, poster-fallback, `prefers-reduced-motion`, bundle-split (three.js niet in main chunk).
- Fonts: self-hosted woff2, preload hero-weight, `swap`.
- Geen nieuwe render-blocking resources op het LCP-pad.

## 6. Verificatie / testing

Per page-type, vóór merge:
- `npm run build` + `npm run validate:build` (bestaande validators: build/service-pages/money-links).
- `npm run check-links:rendered:local` — geen 404's / kapotte interne links.
- Lighthouse-run (Perf/SEO/CLS/LCP) — blokkeer merge onder de baseline.
- Visuele diff vs huidige hero (screenshot).
- `on-page-seo-checklist` skill als pre-ship audit.

## 7. Uitrol-volgorde

1. **Token-laag + UI-primitives** (geen visuele breaking change; alleen toevoegen).
2. **Homepage-hero** (deze spec, eerste zichtbare resultaat).
3. **Product-detail-template** (`ProductModelTemplate.tsx`) — direct herbruikbaar voor alle 5 producten.
4. Daarna: service-pages → city/location-pages → blog → comparisons. (Elk eigen mini-cyclus + verificatie.)

## 8. Out of scope (nu)

- Framework-migratie (Next.js) — bewust niet.
- De intake-form-logica zelf (wordt later van andere site gekopieerd).
- Content-/copy-herschrijving (SEO-tekst blijft; alleen presentatie).
- Niveau-C interactief 3D-product (eventueel later op één losse showcase-route).
