# StayCool Cluster Tracker

> **Doel:** dit bestand is single source of truth voor alle keyword-clusters op StayCool.
> Claude leest dit voor élke nieuwe page en plaatst interne links automatisch volgens patroon.
> **Werk dit bij na elke gepubliceerde page.**

**Aangemaakt:** 2026-05-06
**Strategie:** KD 20-40 focus, 6 clusters, fasering over 6+ maanden

## Linking-pattern (Claude past dit automatisch toe)

| Page-type | Aantal interne links |
|---|---|
| Pillar (hub) | 1× naar elke spoke binnen cluster (5-12 links) |
| Spoke | 2× naar pillar + 2-3× naar gerelateerde spokes = **4-5 links** |
| City-page | 2× naar service-pillar + 2-3 naburige city-pages = **4-5 links** |
| Cross-cluster link | 1-2× per page wanneer thematisch relevant (bv. service ↔ subsidie) |

---

## 📊 Prioriteit & Roadmap

| Maand | Focus clusters | Reden |
|---|---|---|
| **1-2** | Cluster 1 (Service/Bijvullen) + Cluster 4 (Limburg uitbreiding) | Snelste ROI — hoog volume + warme leads + lokale autoriteit al sterk |
| **3-4** | Cluster 2 (Subsidie) + verder Cluster 4 | Hot in 2026, lage concurrentie, hoge intent |
| **5+** | Cluster 5 (Airco kopen) of 3 (Thuis) of 6 (B2B) | Volume of nieuw segment |

---

## 🥇 Cluster 1: Service & Bijvullen

**Status:** 🔥 Hoogste prioriteit — Fase A+B+C LIVE (2026-05-06)
**Type:** service-cluster
**Totaal volume:** ~5.000+/mnd

### Pillars (twee sub-pillars in dit cluster)

| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-bijvullen` | airco bijvullen | 2900 | 28 | ✅ **LIVE** 2026-05-06 — 3.418w, BreadcrumbList+Service+FAQPage+LocalBusiness, 8 FAQs, F-gas vermeld |
| `/airco-service` | airco service | 700 | 22 | ✅ **LIVE** 2026-05-06 — 2.566w, hub voor service-typen |

### Spokes onder `/airco-bijvullen` (Fase A)
- `/airco-vullen-kosten` — ✅ **LIVE** 2026-05-06 (1.523w, 7 FAQs, kosten-deep-dive met variabelen)
- `/kennisbank/airco-bijvullen-zelf-doen` — ✅ **LIVE** 2026-05-06 (1.383w, 6 FAQs, €1.500 boete-shock-opener)
- `/goedkoop-airco-bijvullen` — keyword "goedkoop airco bijvullen" (200) — **Nog te bouwen**
- ↪ Redirect: `/seo/pillar-2-onderhoud-service/airco-koudemiddel-bijvullen` → `/airco-bijvullen` (⚠️ client-side only — zie Infrastructure backlog)

### Spokes onder `/airco-service` (Fase B)
- 4 bestaande SEO supporting pages — ✅ **cross-linked** naar service-pillar 2026-05-06
- `/airco-service-contract` — recurring revenue focus — **Nieuw, te bouwen**
- `/airco-onderhoudscontract` (150) — **Bestaand**, te versterken
- `/seo/pillar-2-onderhoud-service/airco-filter-reiniging` — "airco filter schoonmaken" (150) — **Bestaand pos 4**
- `/kennisbank/airco-bevriest-bij-verwarmen` — **Bestaand pos 4**

### Narrowing (Fase C — done)
- `/airco-service-limburg` — ✅ **narrowed naar regio-modifier** 2026-05-06 (title geo-driven, H1 "Airco service in heel Limburg", hero noemt 10 concrete steden, cross-link naar /airco-service hub)
- `/airco-onderhoud` (landing) — ✅ **narrowed naar preventief / onderhoudscontract** 2026-05-06

### Anti-cannibalisatie matrix Cluster 1 (na Fase A+B+C)

| URL | Rol | Wat het NIET is |
|---|---|---|
| `/airco-bijvullen` | F-gas hervulling pillar | ≠ algemene service |
| `/airco-service` | Service-typen hub | ≠ regio-specifiek |
| `/airco-service-limburg` | Geografische coverage Limburg | ≠ service-typen |
| `/airco-onderhoud` (landing) | Preventief onderhoudscontract | ≠ ad-hoc reparatie |

### Spoke-naar-spoke verbindingen
- bijvullen-pillar ↔ bijvullen-kosten (logische upsell-flow)
- bijvullen-pillar ↔ service-pillar (service kiest mogelijk bijvullen)
- service-contract ↔ onderhoudscontract (verwante recurring offer)
- airco-bevriest ↔ bijvullen (technisch probleem dat bijvullen-trigger is)
- filter-reiniging ↔ service-pillar (onderdeel van service)

### Cross-cluster
- → Cluster 4 (Limburg): vanuit service-pillar link naar `/kennisbank/airco-service-limburg`
- → Cluster 2 (Subsidie): vanuit service-pillar link naar `/airco-financiering` voor klanten met budget-vraag

---

## 🥈 Cluster 2: Subsidie & financiering airco/warmtepomp

**Status:** 🔥 Hoog — fase 3-4
**Type:** topic/intent-cluster
**Totaal volume:** ~500+/mnd | KD 25-34
**Reden:** Hot in 2026 (subsidie-trends), lage concurrentie, hoge commerciële waarde

### Pillar

| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-subsidie` | subsidie airco | 300 | 25 | **Nieuw** — alle subsidies overzichtelijk in 2026 |

### Spokes
| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/isde-subsidie-airco` | isde subsidie airco | - | - | **Nieuw** — ISDE-specifiek |
| `/warmtepomp-airco-subsidie` | warmtepomp airco subsidie | 60 | 28 | **Nieuw** |
| `/warmtepomp-airco-subsidie` | airco warmtepomp subsidie | 60 | 34 | (zelfde URL, beide varianten) |
| `/airco-financiering` | airco financiering | - | - | **Nieuw** — lease/termijn |
| `/btw-airco-aftrekbaar` | btw airco aftrekbaar | - | - | **Nieuw** — zakelijk crossover |
| `/subsidie-aanvragen-stappenplan` | (info-spoke) | - | - | **Nieuw** — stappenplan-guide |

### Spoke-naar-spoke verbindingen
- subsidie-pillar ↔ isde (specifieke regeling)
- subsidie-pillar ↔ warmtepomp-airco-subsidie (technologische overlap)
- subsidie-pillar ↔ financiering (alternatief voor wie geen subsidie)
- btw-aftrekbaar ↔ Cluster 6 B2B (zakelijke trigger)
- aanvragen-stappenplan ↔ alle andere subsidie-spokes (procedureel)

### Cross-cluster
- → Cluster 6 (B2B): `/btw-airco-aftrekbaar` zit op grenslijn zakelijk
- → Cluster 1 (Service): `/airco-financiering` past bij hoge service-prijzen
- → Cluster 5 (Airco kopen): subsidie versterkt koopintentie

---

## 🥉 Cluster 3: Airco voor thuis / Residentieel

**Status:** Middel — fase 5+
**Type:** intent-cluster
**Totaal volume:** ~700+/mnd | KD 21-36
**Reden:** zeer hoge koopintentie voor woning-installatie

### Pillar

| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-voor-thuis` | airco voor thuis | 200 | 34 | **Nieuw** — definitieve gids |
| `/airco-voor-thuis` | airco huis | 200 | 22 | (zelfde URL, beide) |
| `/airco-voor-thuis` | airco systemen voor thuis | 100 | 21 | (zelfde URL) |
| `/airco-voor-thuis` | thuis airco | 100 | 36 | (zelfde URL) |
| `/airco-voor-thuis` | airco kopen voor in huis | 50 | 21 | (zelfde URL) |

### Spokes
| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-huis-installeren` | (residentieel install) | - | - | **Nieuw** |
| `/slaapkamer-airco` | slaapkamer airco zonder slang | 50 | 24 | **Nieuw** — focus stilte + kleine ruimte |
| `/woonkamer-airco` | woonkamer airco | - | - | **Nieuw** |
| `/zolder-airco` | zolder airco | - | - | **Nieuw** |
| `/kleine-airco-voor-thuis` | kleine airco voor thuis | - | - | **Nieuw** |
| `/nieuwe-airco-kiezen` | nieuwe airco | 150 | 23 | **Nieuw** — vervangmarkt |
| `/airco-met-verwarming` | airco verwarming kopen | 100 | 26 | **Nieuw** — heat pump combo |

### Spoke-naar-spoke verbindingen
- thuis-pillar ↔ slaapkamer (kamer-specifiek)
- thuis-pillar ↔ woonkamer (kamer-specifiek)
- slaapkamer ↔ stille-aircos (top-10 lijst — bestaand?)
- nieuwe-airco-kiezen ↔ thuis-pillar (advies-flow)
- airco-met-verwarming ↔ Cluster 2 (warmtepomp-subsidie)

### Cross-cluster
- → Cluster 5 (Airco kopen): residentieel-pillar linkt naar transactionele page
- → Cluster 1 (Service): "wat als hij stuk gaat?" — service-link
- → Cluster 4 (Limburg): "in jouw stad" — geo-link

---

## 🏅 Cluster 4: Lokale uitbreiding Limburg

**Status:** 🔥 Hoog — start direct
**Type:** geo-cluster
**Totaal volume:** ~600+/mnd | KD 17-25
**Reden:** StayCool-sterkte, makkelijke wins, veel ruimte naast bestaande pillar-6 stadspagina's

### Pillar (versterken)

| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-kopen-limburg` | airco kopen limburg | - | - | **Bestaand** — push naar 1 |
| `/` (homepage) | airco limburg | 250 | 17 | **Bestaand pos 2** — belangrijk |

### Bestaande pages (versterken / push omhoog)

| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/blog/airco-installatie-zuid-limburg` | airco zuid limburg | 150 | 24 | **Bestaand pos 2** — push naar 1 |
| `/blog/airco-installatie-zuid-limburg` | airco installateur maastricht | 150 | 8 | **Bestaand pos 7** — eigen pagina maken |
| `/airco-specialist-limburg` | airco onderhoud limburg | 150 | 12 | **Bestaand pos 5** — push omhoog |
| `/kennisbank/airco-service-limburg` | airco service limburg | 100 | 2 | **Bestaand pos 2** — push naar 1 |
| `/werkgebied/nederweert` | airco nederweert | 150 | 5 | **Bestaand pos 3** — push naar 1 |
| `/werkgebied/hoensbroek` | airco hoensbroek | 150 | 7 | **Bestaand pos 4** — versterk |
| `/kennisbank/airconditioning-kerkrade` | airco kerkrade | 100 | 5 | **Bestaand pos 8** |

### Nieuwe pages

| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-plaatsen-limburg` | airco plaatsen limburg | 100 | 23 | ✅ **LIVE** 2026-05-06 — ~2.200w pillar, BreadcrumbList+Service+FAQPage+LocalBusiness, 8 FAQs, Bbl 4.107 geluidsnorm uitgelegd, Maastricht beschermd stadsgezicht-edge, €1.600 startprijs uit stats.md. ↪ Redirect: `/kennisbank/airco-plaatsen-limburg` → `/airco-plaatsen-limburg` (✅ HTTP 301 via vercel.json + `<Navigate>` fallback). |
| `/werkgebied/maastricht` | airco installateur maastricht | 150 | 8 | **Nieuw** — eigen geo-page |
| `/kennisbank/airconditioning-kerkrade` | airco eygelshoven | 150 | 0 | **Bestaand** — eigen page nodig (`/werkgebied/eygelshoven`?) |

### Programmatic SEO matrix (5 services × 10 steden = 50 long-tail pages)

Per stad: airco onderhoud + [stad], airco bijvullen + [stad], airco service + [stad], airco plaatsen + [stad], airco installatie + [stad].

Steden: Heerlen, Kerkrade, Landgraaf, Maastricht, Roermond, Sittard, Weert, Brunssum, Geleen, Echt-Susteren.

→ Gebruik `fleet-scaffold` skill + `domains.config.ts` matrix-pattern.

### Spoke-naar-spoke verbindingen
- airco-limburg-pillar ↔ elke werkgebied-page
- elke werkgebied ↔ 2-3 naburige werkgebieden (geo-clustering)
- airco-service-limburg ↔ Cluster 1 service-pillar
- airco-onderhoud-limburg ↔ Cluster 1 service-pillar

### Cross-cluster
- → Cluster 1 (Service): elke geo-page linkt naar `/airco-service` en `/airco-bijvullen`
- → Cluster 5 (Airco kopen): geo-pages linken naar `/airco-kopen` voor commerciële intent
- → Cluster 3 (Residentieel): vanuit geo-page link naar `/airco-voor-thuis` voor doelgroep

---

## 🎖️ Cluster 5: Airco kopen e-commerce / Vergelijken

**Status:** Middel-Hoog — fase 4-5
**Type:** transactioneel-cluster
**Totaal volume:** ~12.000+/mnd | KD 22-30
**Reden:** mega-volume, maar competitiever — lange termijn focus

### Pillar (sterk optimaliseren)

| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-kopen` | airco kopen | **11.000** | 28 | **Optimaliseer** — mega-volume hoofdtransactie |
| `/airco-kopen` | airco bestellen | 200 | - | (zelfde URL) |
| `/airco-kopen` | airco kopen online | 70 | 25 | (zelfde URL) |
| `/airco-kopen` | airco online kopen | 50 | - | (zelfde URL) |
| `/airco-kopen` | airco online | 50 | 30 | (zelfde URL) |
| `/airco-kopen` | airco webshop | 100 | 27 | (zelfde URL) |
| `/airco-kopen` | airco winkel | 250 | 30 | (zelfde URL) |

### Spokes
| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-kopen-met-installatie` | airco kopen met installatie | - | - | **Nieuw** — hoge intent |
| `/airco-vergelijken` | airco vergelijken | - | - | **Nieuw** — vergelijkingstool |
| `/goedkoopste-airco` | goedkoopste airco | 100 | 22 | **Nieuw** — prijsfocus |
| `/goedkoopste-airco` | goedkoop airco | 100 | 24 | (zelfde URL) |
| `/welke-airco-heb-ik-nodig` | (advies-quiz) | - | - | **Bestaand?** parent topic |
| `/beste-airco-2026` | beste airco 2026 | - | - | **Update bestaand** — refresh van "beste airco 2024" |
| `/airco-kopen-zwolle` | airco kopen zwolle | 200 | 22 | **Nieuw** — buiten Limburg testbed |

### Head-term
- `/` (homepage) | "airco" | **31.000** | KD 23 | **Bestaand** — hoofdterm, zeer lange termijn

### Spoke-naar-spoke verbindingen
- kopen-pillar ↔ vergelijken (research-fase)
- kopen-pillar ↔ goedkoopste (prijs-segment)
- kopen-pillar ↔ kopen-met-installatie (full-service)
- welke-airco-heb-ik-nodig ↔ kopen-pillar (advies → koop)
- beste-airco-2026 ↔ vergelijken (jaarlijkse refresh)

### Cross-cluster
- → Cluster 3 (Residentieel): kopen-pillar linkt naar `/airco-voor-thuis` voor woning-doelgroep
- → Cluster 1 (Service): kopen-pillar linkt naar `/airco-service` ("ook na koop")
- → Cluster 4 (Limburg): kopen-pillar linkt naar `/airco-kopen-limburg`
- → Cluster 6 (B2B): vanuit kopen-pillar link naar `/zakelijke-airco`

---

## 🏆 Cluster 6: Airco zakelijk / B2B

**Status:** Laag-Middel — fase 5-6 (nieuw segment)
**Type:** segment-cluster
**Totaal volume:** ~600+/mnd | KD 24-28
**Reden:** volledig nieuw segment, hogere ticket-size, terugkerende klanten

### Pillar

| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/zakelijke-airco` | airco bedrijf | 300 | 24 | **Nieuw** |
| `/zakelijke-airco` | airco leverancier | 250 | 25 | (zelfde URL) |
| `/zakelijke-airco` | airco specialist | 160 | - | **Bestaand?** versterken |
| `/zakelijke-airco` | airco groothandel | 390 | - | (zelfde URL) |

### Spokes
| URL | Keyword | Vol | KD | Status |
|---|---|---|---|---|
| `/airco-bedrijfspand` | airco bedrijfspand | - | - | **Nieuw** |
| `/airco-kantoor` | airco kantoor | - | - | **Nieuw** |
| `/airco-winkel-horeca` | airco horeca | - | - | **Nieuw** |
| `/airco-leasen` | airco leasen | - | - | **Nieuw** — financiering B2B |
| `/btw-airco-aftrekbaar` | btw airco aftrekbaar | - | - | **Nieuw** (gedeeld met Cluster 2) |
| `/airco-onderhoudscontract-zakelijk` | (B2B service) | - | - | **Nieuw** |
| `/zakelijke-airco` | koeltechniek airco | 50 | 20 | (zelfde URL) — technisch |

### Spoke-naar-spoke verbindingen
- B2B-pillar ↔ elke segment-spoke (kantoor/horeca/bedrijfspand)
- B2B-pillar ↔ leasen (financiering)
- onderhoudscontract-zakelijk ↔ leasen (totale B2B-relatie)
- btw-aftrekbaar ↔ leasen (financiële beslissing)

### Cross-cluster
- → Cluster 2 (Subsidie): `/btw-airco-aftrekbaar` is gedeeld
- → Cluster 1 (Service): B2B onderhoud-contract is variant op recurring service
- → Cluster 5 (Airco kopen): `/zakelijke-airco` linkt naar `/airco-kopen-met-installatie`

---

## 🌐 Out-of-scope (buiten kerngebied — lage prioriteit)

| URL | Keyword | Vol | KD | Notitie |
|---|---|---|---|---|
| `/werkgebied/zwolle` | airco zwolle | 200 | - | Buiten Limburg — alleen als testbed |
| - | airco noord holland | 100 | 21 | Buiten kerngebied — skip tenzij landelijke expansie |

---

## 📋 Workflow per nieuwe page

Wanneer een spoke uit dit tracker wordt gebouwd:

1. **Activeer skills:** `leadgen-playbook` + `cluster-sprint` + `on-page-seo-checklist` + `internal-linking` + `anchor-text-rules` + `meta-title-rules` + `h1-rules` + `meta-description-rules` + `schema-markup` + `content-voice-system`

2. **Lees:** `references/voice.md` + de andere 5 voice-files + dit cluster-tracker

3. **VERPLICHT — SERP-research (WebSearch + PAA-check):**
   - **WebSearch** primary keyword → bekijk top-10 organic resultaten
   - **WebFetch** de top-3 organic resultaten → extract: H2-structuur, woordaantal, FAQ aanwezig?, schema-types, USP-angles
   - **People Also Ask (PAA)** — uit de WebSearch-resultaten: noteer alle PAA-vragen, deze worden de FAQ van jouw page (target: 8 stuks)
   - **Related searches** uit WebSearch — gebruik als secundaire keywords voor H2/H3 headings
   - **Output:** een korte SERP-brief die Claude mij toont voor 'go' (top-3 URLs + woordaantal-target + 8 PAA-vragen + 3-5 related searches + welke H2's de top-3 wel/niet dekt)
   - SerpAPI is alternatief als ik dat zelf wil starten — WebSearch + WebFetch is default

4. **Outline na SERP-brief** — wacht op 'go' voor body schrijven

5. **Build:**
   - 3 kings (title <60 chars met click-modifier, H1 keyword-front, meta description CTR-phrasing)
   - Body: target = top-3 SERP gemiddelde woordaantal ± 20%
   - H2-structuur: combineer top-3 H2's + 1-2 die zij missen (stealing ground)
   - 4-5 inline links volgens patroon (2× pillar + 2-3 spokes uit cluster)
   - Anchor-text variërend (zie `anchor-text-rules`)
   - Schema-markup volgens type (LocalBusinessJsonLd op service, BlogJsonLd op info-post, FAQPage op FAQ)
   - **FAQ = 8 vragen, geen verzinsels — uit PAA + Related Searches**

6. **Pre-ship:** `on-page-seo-checklist` + Lighthouse SEO 100 verplicht

7. **Update dit cluster-tracker:** zet status op "live" + datum

8. **Update `references/used-keywords.md`** met primary keyword

---

## 🔧 Infrastructure backlog

Project-wide infra-issues die niet in een content-cluster passen maar wel SEO/architectuur raken.

- **301-migratie sweep** — 33 client-side `<Navigate>` redirects in `src/App.tsx` migreren naar `vercel.json` `redirects[]` array met `permanent: true`. Client-side `<Navigate>` transfeert geen link-equity en Googlebot ziet 200 OK op de oude URL i.p.v. een echte 301. Prioriteit:
  - **High:** 10× `/seo/pillar-X` shortcuts (link-equity-kritisch)
  - **High:** `/seo/pillar-2-onderhoud-service/airco-koudemiddel-bijvullen` → `/airco-bijvullen` (Cluster 1)
  - **Medium:** airco-merk/locatie consolidaties
  - **Low:** `/about` → `/over`, `/cookies` → `/privacy`, `/vacatures` → `/contact` (interne nav, weinig backlinks)
  - Schat: 1-2u + audit per redirect of er werkelijk link-equity stroomt.
  - Pattern (al toegepast op `/kennisbank/airco-plaatsen-limburg` → `/airco-plaatsen-limburg`): voeg redirect toe aan `vercel.json` voor edge-niveau 301; behoud bestaande `<Navigate>` als client-side fallback voor SPA-routing.

- **Reciprocal-links sweep `/airco-plaatsen-limburg`** — 14 city/article-pages verwijzen nog naar legacy `/kennisbank/airco-plaatsen-limburg` via `<Link to>`. De 301 in `vercel.json` vangt dat op, maar directe interne links naar de canonieke pillar-URL is sterker signaal. Plus 3 nieuwe inbound links toevoegen vanaf `/seo/pillar-9-kosten-prijzen/kosten-airco-plaatsen`, `/seo/pillar-7-technische-gidsen/airco-buitenunit-plaatsing`, en `/airco-service-limburg`. Aparte commit. Schat: 15 min.
