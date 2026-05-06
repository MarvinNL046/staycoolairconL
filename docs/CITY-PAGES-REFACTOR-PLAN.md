# City-Pages Refactor Plan

**Datum:** 2026-05-06
**Branch:** `main` (start hier; werk uit te voeren in feature-branch `refactor/city-pages-programmatic`)
**Stack:** React 18 + Vite + React Router v6 (geen Next.js)

---

## TL;DR

28 hand-written city-pages (3.240 regels) → 1 programmatic systeem met djb2-hash variant-rotatie + tier-tekstvarianten + behoud unieke content uit Top-5 steden. Plus CRO-fixes (sticky mobile tel, founder video) en `@graph`-schema voor rich results. Estimate: **2,5 – 3 uur** uitvoer, hoofdmoot is het schrijven van tekstvarianten in Marvin's voice.

---

## Doelen

| Doel | Waarom |
|---|---|
| **Anti-duplicate via djb2 + tier-varianten** | Google ziet nu near-identical sjabloon-FAQs over 28 steden. Variantrotatie → echte content-differentiatie → ranking-effect |
| **`@graph` JSON-LD per page** | BreadcrumbList + Service + FAQPage = kans op rich snippets (sterren, breadcrumb, FAQ-accordeon in SERP) |
| **CRO-fixes site-breed** | Sticky mobile tel-button + founder video = leadgen-playbook compliance, hogere call-conversie |
| **Onderhoudbaarheid** | 1 datafile + 1 template ipv 28 hand-written files met copy-paste-rot |
| **Reviewer-fix (E-E-A-T)** | `'Ralph'` → `'Marvin Smit'` (matcht echte review-ondertekening) |

---

## Architectuur na refactor

```
src/
├── utils/
│   ├── djb2.ts                       NEW – stabiele hash voor variant-keuze
│   └── googleReviews.ts              (bestaand, ongewijzigd)
├── data/
│   ├── programmaticLocations.ts      uitgebreid met tier + cityOverrides
│   └── cityCopyVariants.ts           NEW – tekstvarianten × 3 tiers × N types
├── templates/
│   └── LocationLandingPage.tsx       uitgebreid met @graph + sticky tel + founder video block
├── pages/locations/
│   ├── ProgrammaticLocation.tsx      blijft (catch-all)
│   ├── ProgrammaticRuimteStad.tsx    blijft (andere flow)
│   └── (28 hand-written files)       VERWIJDERD
└── App.tsx                           lines 693-719 verwijderd; alleen line 720 catch-all blijft
```

---

## Fase 1: Architectuur-foundation (geen breaking changes)

**Doel:** infra opzetten zonder bestaand gedrag te raken.

1. **Maak `src/utils/djb2.ts`**
   ```ts
   export function djb2Hash(str: string): number {
     let hash = 5381;
     for (let i = 0; i < str.length; i++) {
       hash = ((hash << 5) + hash) + str.charCodeAt(i);
     }
     return hash >>> 0; // unsigned 32-bit
   }
   ```

2. **Voeg `tier` toe aan `programmaticLocations.ts`**
   Per stad classificatie op `populationCount`:

   | Tier | Range | Steden |
   |---|---|---|
   | `groot` | > 100.000 | Maastricht, Venlo |
   | `middel` | 30.000 – 100.000 | Heerlen, Sittard, Roermond, Weert, Venray, Landgraaf, Kerkrade, Geleen |
   | `klein` | < 30.000 | Beek, Brunssum, Echt, Eijsden-Margraten, Gennep, Gulpen-Wittem, Hoensbroek, Maasbracht, Meerssen, Nederweert, Nuth, Panningen, Simpelveld, Stein, Vaals, Valkenburg, Voerendaal + Horst, Tegelen |

3. **Voeg Horst en Tegelen toe aan `programmaticLocations.ts`**
   Beide hebben hand-written files (orphan, niet ge-route) → moeten in dataset.

4. **Maak `src/data/cityCopyVariants.ts`**
   ```ts
   export const CITY_INTRO_VARIANTS: Record<CityTier, string[]> = {
     groot: [variantA, variantB, variantC],
     middel: [variantA, variantB, variantC],
     klein: [variantA, variantB, variantC],
   };
   export const CITY_SERVICES_VARIANTS: Record<CityTier, string[]> = { ... };
   export const CITY_PRACTICAL_VARIANTS: Record<CityTier, string[]> = { ... };
   export const FAQ_QUESTION_VARIANTS: Record<CityTier, FaqVariant[]> = { ... };
   ```
   Elke variant is een template-string met tokens: `{{city}}`, `{{region}}`, `{{postcodeRange}}`, `{{population}}`, `{{neighborhood1}}`, `{{neighborhood2}}`, `{{landmark1}}`, `{{housingMix}}`, `{{localConstraint}}`.

   **Tekstvarianten worden geschreven in Marvin's voice** (ref: `references/voice.md`, `references/humour.md`). Geen marketing-jargon, geen uitroeptekens, korte zinnen, prijzen all-in.

---

## Fase 2: Behoud unieke content (cityOverrides)

**Doel:** de écht stadsspecifieke content uit Top-5 niet kwijtraken.

5. **Breid het `ProgrammaticLocationProfile` interface uit:**
   ```ts
   interface ProgrammaticLocationProfile {
     // bestaand: slug, city, region, postalCodes, populationCount, ...
     tier: CityTier;                       // NEW
     overrides?: {
       extraFaqs?: Faq[];                  // pre-pend voor sjabloon-FAQs
       extraSpecialFeatures?: string[];    // append op tier-features
       localImage?: string;                // path naar /images/locations/X.webp
       extraClimateFacts?: string[];       // append op tier-climate
     };
   }
   ```

6. **Migreer unieke content per Top-5 stad:**

   | Stad | Wat redden |
   |---|---|
   | **Maastricht** | 7 unieke FAQs over monumentale panden, studentenhuizen, ISDE-subsidie + monumenten-feature |
   | **Heerlen** | Mijnwater-netwerk-context (uniek voor Heerlen), 7 stadsspecifieke FAQs, mijnwerkerswoningen |
   | **Geleen** | Chemelot industriële context, luchtkwaliteit-filters, appartementen-specialisatie |
   | **Vaals** | Vakwerkhuizen, Drielandenpunt-microklimaat, vergunnings-context beschermd dorpsgezicht |
   | **Sittard** | Dal-effect klimatologie, vooroorlogse wijken, historische binnenstad |

7. **Beek, Nuth, Voerendaal, Brunssum**: 1–2 unieke FAQs per stad migreren (Maastricht Airport-geluid voor Beek, etc.)

---

## Fase 3: Buildlogic uitbreiden

**Doel:** djb2 + overrides activeren in `buildProgrammaticLandingProps()`.

8. **Update `buildProgrammaticLandingProps` in `programmaticLocations.ts`:**
   ```ts
   const seed = djb2Hash(profile.slug);
   const intro     = renderTemplate(CITY_INTRO_VARIANTS[profile.tier][seed % 3], profile);
   const services  = renderTemplate(CITY_SERVICES_VARIANTS[profile.tier][(seed + 1) % 3], profile);
   const practical = renderTemplate(CITY_PRACTICAL_VARIANTS[profile.tier][(seed + 2) % 3], profile);
   ```

9. **FAQ-merge logica:**
   ```ts
   const baseFaqs = buildBaseFaqs(profile, seed);  // 4 sjabloon-FAQs uit pool, gekozen via seed
   const finalFaqs = [...(profile.overrides?.extraFaqs ?? []), ...baseFaqs];
   ```

10. **Schrijf de 27 base-tekstvarianten in voice** (3 × 3 × 3 content-types). Hoofdwerk hier — verwijst naar `references/voice.md`, `references/humour.md`, `references/stats.md`.

---

## Fase 4: Schema-upgrade

**Doel:** rich-result eligibility via `@graph`-pattern.

11. **In `LocationLandingPage.tsx`:**
    Vervang individuele schema's door één `@graph`-blok:
    ```tsx
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        breadcrumbListSchema(profile),
        serviceSchema(profile),
        faqPageSchema(profile.faqs),
      ]
    })}</script>
    ```

12. **Reviewer-fix:**
    ```ts
    // programmaticLocations.ts:112
    reviewedBy: 'Marvin Smit – F-gassen gecertificeerd airco specialist',
    ```

---

## Fase 5: CRO-fixes in template

**Doel:** leadgen-playbook compliance op alle 30 city-pages.

13. ~~**Sticky mobile tel-button**~~ — **al opgelost.** `src/components/MobileStickyCTA.tsx` is site-breed actief vanuit `App.tsx:984`. Mobile-only, scroll-trigger op 420px, dismissable, respecteert cookie-banner, tracked via `trackEvent`. CTA wijst naar `afspraken.staycoolairco.nl` (agenda) — past bij planning-intent van city-pages. **Geen wijziging nodig.**

14. **Founder/bedrijfs-video integreren** — **bestaat al, hergebruiken.**
    - YouTube video-ID: `9m-jkGgfLog` (zie `HeroRedesign.tsx:16` voor bestaande embed)
    - Component klaar: `src/components/VideoPlayer.tsx` (handelt YouTube-detection + `VideoObject` schema-injectie automatisch)
    - In `LocationLandingPage` template een sectie toevoegen tussen testimonials en FAQ:
      ```tsx
      <VideoPlayer
        videoUrl="https://www.youtube.com/watch?v=9m-jkGgfLog"
        title={`Maak kennis met StayCool Airco — uw lokale specialist in ${city}`}
        description={`Bekijk wie we zijn en hoe we werken. Marvin Smit en het team installeren elke maand airco's in heel Limburg, ook in ${city}.`}
        thumbnailUrl={`https://img.youtube.com/vi/9m-jkGgfLog/maxresdefault.jpg`}
      />
      ```
    - **Bonus SEO-effect:** `VideoPlayer` injecteert automatisch `VideoObject` JSON-LD per page → 30 extra video-rich-result eligible pages.

15. **Review template tegen leadgen-checklist:**
    - [ ] Form on landing (al in template – verifiëren)
    - [x] Click-to-call zichtbaar (al hero + footer)
    - [x] **Sticky mobile CTA** (al via `MobileStickyCTA` site-breed)
    - [x] Testimonials per stad (via `getLocalizedReviews`)
    - [x] FAQ tegen objecties (na djb2-rotatie)
    - [x] 3+ CTAs (al aanwezig)
    - [x] Trust signals binnen 3 sec (F-gas, reviews, jaren – al in hero)
    - [x] Schema-graph (Fase 4)

---

## Fase 6: Routing cleanup (DESTRUCTIVE — laatste stap)

**Doel:** dode hand-written code weg.

16. **Verwijder lines 693-719 in `App.tsx`** (28 expliciete `/airco-installatie/[stad]` routes)

17. **Verwijder de 28 `const XPage = lazy(...)` imports** (regio's ~120-150 in App.tsx)

18. **Test build vóór delete:**
    ```bash
    npm run build && npm run preview
    # klik door /airco-installatie/maastricht ... /voerendaal
    # check: alle renderen, alle hebben verschillende intro/services/practical
    ```

19. **Verwijder de 28 hand-written tsx-files** in `src/pages/locations/`

20. **Verifieer sitemap-generators** verwijzen naar `programmaticLocations.ts` ipv hardcoded city-list

---

## Verificatie-checklist na refactor

- [ ] Alle 30 cities (28 + Horst + Tegelen) renderen via `/airco-installatie/[stad]`
- [ ] Open `/airco-installatie/maastricht` en `/airco-installatie/vaals` naast elkaar — visueel verschillende intro/services/practical zinnen
- [ ] Run `@graph` schema door [Google Rich Results Test](https://search.google.com/test/rich-results) — geen errors
- [ ] Sticky tel-button werkt op mobile (375px breedte test)
- [ ] FAQ-accordeon expandeert + heeft FAQPage-schema in `<head>`
- [ ] `sitemap.xml` bevat alle 30 cities
- [ ] `npm run build` zonder TypeScript errors
- [ ] `npm run lint` schoon
- [ ] Geen 404s in console bij doorklikken
- [ ] Lighthouse: SEO 100, Accessibility 95+, Performance ≥ baseline
- [ ] Reviewer-naam in expertiseSignals = "Marvin Smit"

---

## Risico's & mitigaties

| Risico | Mitigatie |
|---|---|
| Build kapot tijdens fase 6 | Werken op feature-branch, fase 1-5 mergebaar zonder fase 6 te draaien |
| Sitemap-generators verwijzen naar specifieke files | Audit sitemap-script vóór delete; aanpassen om dataset te lezen |
| Google indexeert tijdelijk lege pages tijdens deploy | Deploy in één keer; nieuwe content bestaat al voor URL bestaat |
| 27 tekstvarianten schrijven kost meer tijd dan gepland | Splitsen: eerst 3×3 templates + tokens, daarna écht in voice — kan iteratief |
| `.tsx` files weg = git-history weg voor die files | History blijft via `git log --follow`; geen verlies |

---

## Niet in scope (later)

- **Founder video opnemen** — productietaak, geen code (template krijgt placeholder)
- **`locationImage` verzamelen voor 12 missende cities** — design/foto-taak
- **Provincie-niveau routing** (`/[provincie]/[stad]`) — vereist URL-architectuur-wijziging + redirects, separate epic
- **`/airco-installatie/` vs `/airco-onderhoud/[stad]` tweede cluster** — verbreding scope, eerst dit refactor stabiel hebben

---

## Werkvolgorde-aanbeveling

| Stap | Wat | Schatting |
|---|---|---|
| 1 | Branch maken: `git checkout -b refactor/city-pages-programmatic` | 1 min |
| 2 | Fase 1 (djb2.ts, tier-veld, Horst+Tegelen toevoegen, lege variants-file) | 30 min |
| 3 | Fase 2 (overrides interface + Top-5 + 4 secondaire steden) | 45 min |
| 4 | Fase 3 (buildlogic + 27 tekstvarianten in voice schrijven) | 60-90 min |
| 5 | Fase 4 (@graph schema + reviewer-fix) | 20 min |
| 6 | Fase 5 (sticky tel + founder block) | 20 min |
| 7 | Lokaal testen: 30 cities doorklikken | 15 min |
| 8 | Fase 6 (delete + App.tsx cleanup + sitemap-check) | 30 min |
| 9 | Final verify, commit, PR | 15 min |

**Totaal:** 3,5 – 4,5 uur (ruimer dan eerste schatting omdat tekstvarianten in voice schrijven serieus werk is).

---

## Open beslissingen voor jou

1. **Founder video** — heb je er al een, of plaatsen we placeholder?
2. **Top-5 keuze** — akkoord met Maastricht, Heerlen, Geleen, Vaals, Sittard? Of wil je ook Roermond/Venlo erbij?
3. **Werkvolgorde** — wil je dat ik fase voor fase laat reviewen, of in één PR alles?
4. **`Horst` en `Tegelen`** — toevoegen aan dataset met realistische default-data, of eerst handmatig vullen?
