# StayCool Airco — Leadgen site

**Type:** leadgen
**Niche:** airco-installatie + onderhoud (regio: NL, focus Limburg)
**Stack:** Next.js (App Router) + Tailwind + SSG (`output: 'export'`)
**Sub-domains:** aanmelden.staycoolairco.nl, afspraken.staycoolairco.nl, crm.staycoolairco.nl

> **Note:** Er is ook `.claude/CLAUDE.md` met een SEO-orchestrator setup — dat is een aparte agent-config voor batch-content-generatie. Deze file (project-root CLAUDE.md) bepaalt het algemene gedrag voor élke Claude-sessie in dit project.

---

## VERPLICHT — laad deze skills bij élke taak

Activeer automatisch — niet wachten op expliciete instructie:

**Universele basis:**
- `leadgen-playbook` — site-type entry point (CRO-checklist, component-volgorde, anti-patterns, founder video script, speed-to-lead)
- `stack-foundation` — Next.js 15 + Tailwind 3.4 + design tokens + Typography plugin voor blue inline links
- `content-voice-system` — voor élke content-edit, lees `references/` eerst
- `internal-linking` + `anchor-text-rules` — élke nieuwe content krijgt 4-5 inline links automatisch
- `meta-title-rules` + `meta-description-rules` + `h1-rules` — bij élke page-metadata
- `schema-markup` — LocalBusinessJsonLd op elke service-page, BlogJsonLd op elke blogpost
- `on-page-seo-checklist` — pre-ship audit, blokkeer merge bij SEO < 100
- `integration-posthog` — phone-click tracking + conversie-events

**Voor cluster-werk:**
- `cluster-sprint` — als taak "cluster bouwen" of "blogpost-batch" inhoudt — SerpAPI → PAA → 19 pages overnight pattern

**Quick-reference:** `~/.claude/skills/stack-marvin/quick-reference-numbers.md`

---

## VERPLICHT — lees deze project-files voor élke page

1. `references/voice.md` + humour/stats/stories/opinions/used-keywords — de stem (al ingevuld voor StayCool)
2. `references/used-keywords.md` — voorkomt cannibalisatie
3. `cluster-tracker.md` — internal-linking patroon + 6 actieve clusters

Geen content schrijven zonder deze drie eerst gelezen te hebben.

## VERPLICHT — SERP-research vóór elke page (WebSearch + PAA)

Geen content schrijven zonder eerst SERP-data te hebben. Dit is geen optie:

1. **`WebSearch`** primary keyword → bekijk top-10 organic
2. **`WebFetch`** top-3 organic resultaten → extract H2-structuur, woordaantal, FAQ-format, schema-types
3. **People Also Ask (PAA)** — noteer alle PAA-vragen uit de WebSearch — deze worden de FAQ van de page (target 8 stuks)
4. **Related searches** uit WebSearch — gebruik als secundaire keywords voor H2/H3 headings
5. **Output: SERP-brief** voor Marvin reviewt → toon top-3 URLs, woordaantal-target, 8 PAA-vragen, 3-5 related searches, welke H2's top-3 wel/niet dekt

Pas na review en 'go' begin je met de outline. SerpAPI is alternatief als Marvin dat zelf start; WebSearch + WebFetch is default.

**FAQ-regel:** alle FAQ-vragen op de page komen uit PAA + Related Searches. Geen verzinsels. Als er minder dan 8 PAA's zijn, vul aan met related-search variaties — niet met eigen invulling.

## Bestaande project-documentatie (raadpleeg waar relevant)

Naast de stack-marvin skills heeft StayCool eigen SEO/CRO documentatie in project-root. Lees deze als achtergrond bij specifieke taken — ze bevatten project-specifieke deep dives, niet de generieke regels (die staan in de skills).

**SEO-audits & plannen:**
- `HOMEPAGE-SEO-AUDIT.md` (885 regels) — homepage-specifieke audit
- `SEO-VERBETERPLAN-2025.md` (185 regels) — strategisch plan
- `SEO-OPTIMALISATIE-MOGELIJKHEDEN.md` — backlog van mogelijkheden
- `SEO-OPTIMIZATION-SUMMARY-2025-10-10.md` — laatste optimalisatie-snapshot

**Keyword research:**
- `keyword-analysis-detailed.md` (472 regels)
- `KEYWORD-SEO-GUIDE.md` (503 regels)
- `data/keyword-research/` — recente keyword-data per intent

**Page-templates & blueprints:**
- `LOCATION-PAGES-OPTIMIZED.md` — patroon voor city-pages
- `PRODUCTS-PAGE-SEO-OPTIMIZED.md` — patroon voor product-pages
- `docs/LOCAL-SEO-BLUEPRINT-STAYCOOL.md` — lokaal SEO blueprint
- `docs/programmatic-seo-locations.md` — programmatic SEO patroon
- `docs/CITY-PAGES-REFACTOR-PLAN.md` — refactor-plan voor city-pages
- `docs/seo-service-pages-overlap-audit.md` — overlap-audit

**Knowledge base / CRO:**
- `knowledge-base-cro-seo-analysis.md`
- `knowledge-base-improvement-recommendations.md`
- `knowledge-base-performance-metrics.md`

**Conversie-infra:**
- `FACEBOOK_CONVERSIONS_API_SETUP.md`
- `GHL_WEBHOOK_IMPLEMENTATION.md`
- `test-conversions-api.md`

**Werkrelatie tussen project-docs en stack-marvin skills:**
- Skills geven **generieke geverifieerde regels** (meta-title-rules, h1-rules, leadgen-CRO-checklist, on-page-seo-checklist 80+ items, etc.) → altijd toepassen
- Project-docs geven **StayCool-specifieke beslissingen** (welke locations al gebouwd, welke keywords al gebruikt, welke landing-page-patronen werken voor airco) → raadplegen voor context
- Bij conflict: stack-marvin skills (geverifieerd patroon) hebben voorrang, tenzij project-doc een specifiekere reden geeft. Vraag bij twijfel.

---

## Workflow voor nieuwe content

### Cluster bouwen (waar je nu mee bezig bent)

1. **Activeer cluster-sprint skill**
2. SERP-research: SerpAPI calls voor top-3 organic + PAA + related searches per keyword
3. Brief eerst per pillar+spokes (zie format in cluster-sprint skill)
4. Pillar = hoogste commercial-intent keyword. Spokes = audience/use-case/feature varianten.
5. Bouw eerst pillar, dan spokes 1-voor-1
6. Update `cluster-tracker.md` met elke nieuwe URL → andere pages linken er automatisch naar

### Blog-post (single)

1. SerpAPI top-3 + PAA voor keyword
2. Outline tonen → wacht op 'go'
3. Schrijf in voice uit `references/`
4. 3-5 interne links volgens `internal-linking` (lees cluster-tracker eerst!)
5. FAQ uit PAA-vragen (8 stuks)
6. BlogJsonLd schema + meta title/description volgens regels
7. Update `references/used-keywords.md`
8. `on-page-seo-checklist` — alleen merge bij SEO 100

### Service-/city-page

1. Leadgen CRO-checklist toepassen (form on landing, click-to-call, founder video, FAQ, CTA 3+)
2. Component-volgorde: Hero → Trust → Founder video → Brand logos → Why → Services → Video testimonials → Written → Cases → FAQ → Form
3. LocalBusinessJsonLd (NAP, openingstijden, priceRange, aggregateRating)
4. PostHog phone-click actief
5. ANTI-PATTERNS: GEEN prijzen op LP, GEEN chat widget, GEEN nav op paid traffic, GEEN rating 5.0

---

## CRO-getallen voor StayCool

Geverifieerd uit 10 jaar split-testing — gebruik in elk CRO-besluit:

| Wat | Cijfer |
|---|---|
| Speed-to-lead (bel <1 min) | **+391% conversie** |
| Form on landing (geen extra click) | win vs +1 click |
| Founder video goed gedaan | **+5pp** (10% → 15%) |
| Sterke FAQ tegen 6 echte bezwaren | **+12% CR / +20% rev/user** |
| Phone calls vs forms close-rate | **3-10× hoger** |
| Trust rating optimaal | **4.7-4.9** (NIET 5.0) |
| Concrete cijfers vs vage claims | +15-32% CR |
| Lighthouse fleet-baseline | Perf 100, SEO 100, CLS 0, LCP <1.8s |

---

## Niet doen op StayCool

- Geen AI-slop content — élke page door de voice-files
- Geen interne links zonder cluster-tracker check
- Geen meta tags die meta-title-rules niet halen (keyword front, <60 chars, click-modifier)
- Geen page mergen onder Lighthouse SEO 100 of met CLS > 0
- Geen "klik hier" anchors
- Geen rating 5.0 / verzonnen testimonials / generieke "geweldige service!"
- Geen prijzen op leadgen-landing pages (-14.2pp conversie)
- Geen chat widget (-8.4pp, kannibaliseert form-fills)

---

## Project-specifieke context

**StayCool propositie:** [vul aan — bv. specialist airco-installatie Limburg, X jaar ervaring, Y geïnstalleerd, Z reviews]
**USP:** [bv. binnen 3 dagen geïnstalleerd, geen call-out fee, gecertificeerde monteurs]
**Doelgroep:** [bv. huiseigenaren Limburg, 35-65, eigen woning]
**Partners:** [Daikin, Mitsubishi, Toshiba — heb je aparte landing-pages voor brand]
**Conversie-pad:** form `/aanmelden` of `tel:` link → `crm.staycoolairco.nl` → `afspraken.staycoolairco.nl`
