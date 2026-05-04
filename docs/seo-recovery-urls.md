# SEO Recovery — Search Console submission list

Generated: 2026-05-04

## Context

Three site-wide bugs were fixed in this recovery batch:

1. **Canonical bug**: 127 pages had `<link rel="canonical" href="https://staycoolairco.nl">` (the homepage) because of a default in `MetaTags` and a static fallback in `index.html`. Google consolidated all ranking signals to "/", causing the mass-Lost ranking event seen in Ahrefs from Jan–Mar 2026.
2. **5 broken pages**: a previous commit added `<FAQSchema faqs={faqs} />` to 100+ pages, but on 5 of them the `faqs` variable was never defined (the others use `faqItems` or page-specific names that exist). Those 5 crashed at render-time and showed "Er is iets misgegaan" to users and Googlebot. All 5 are in the high-volume kosten-prijzen cluster:
   - `/seo/pillar-9-kosten-prijzen/kosten-airco-plaatsen`
   - `/seo/pillar-9-kosten-prijzen/airco-verbruikskosten`
   - `/seo/pillar-9-kosten-prijzen/airco-onderhoud-kosten`
   - `/seo/pillar-9-kosten-prijzen/airco-financiering`
   - `/seo/pillar-9-kosten-prijzen/airco-subsidies-limburg`
3. **44 broken internal links**: separate fix in earlier commit (`/about`, `/vacatures`, `/cookies`, 21 werkgebied/:city links, 9 kennisbank typos, 4 SEO pillar parents, etc.).

After deploy, give Google ~24h to refresh, then submit these URLs via Search Console → URL Inspection → Request Indexing.

## Priority 1 — Pages that were render-broken AND high-volume Lost

These need re-indexing first because they were literally returning JavaScript errors instead of content. All are in the kosten-prijzen pillar.

| URL | Lost keyword(s) | Volume |
|---|---|---|
| https://staycoolairco.nl/seo/pillar-9-kosten-prijzen/kosten-airco-plaatsen | airco plaatsen, kosten airco | 1.6K + 300 |
| https://staycoolairco.nl/seo/pillar-9-kosten-prijzen/airco-verbruikskosten | wat kost een airco aan stroom per dag, kosten airco verwarmen, airco als verwarming kosten, wat kost een airco per uur | 70+50+40+100 |
| https://staycoolairco.nl/seo/pillar-9-kosten-prijzen/airco-onderhoud-kosten | onderhoudscontract airco, airco filter vervangen kosten | 150+20 |
| https://staycoolairco.nl/seo/pillar-9-kosten-prijzen/airco-financiering | airco financiering | — |
| https://staycoolairco.nl/seo/pillar-9-kosten-prijzen/airco-subsidies-limburg | airco subsidies | — |

## Priority 2 — High-volume Lost pages (canonical bug only, were rendering)

Submit after Priority 1 is processed (~3-5 days later).

| URL | Lost keyword(s) | Volume |
|---|---|---|
| https://staycoolairco.nl/kennisbank/hoe-vaak-airco-onderhoud | airco onderhoud, levensduur airco, kosten onderhoud airco, hoe lang gaat een airco mee | 1.9K + 200 + 70 + 150 |
| https://staycoolairco.nl/kennisbank/airco-laten-installeren | airco plaatsen, airco installatie, airco in huis installeren, airco installeren in bestaande woning | 1.6K + 200 + 200 + 150 |
| https://staycoolairco.nl/kosten-airco-plaatsen | wat kost een airco met buitenunit, kosten airco installeren, kosten plaatsen airco, multi split airco prijzen, kosten installatie airco, hoeveel kost een airco | 200 + 300 + 100 + 10 + 80 + 150 |
| https://staycoolairco.nl/seo/pillar-4-energie-besparen/stroomverbruik-airco | hoeveel stroom verbruikt een airco, verbruik airco, stroomverbruik airco, verbruik airco verwarmen, wat verbruikt een airco | 400 + 250 + 150 + 150 + 200 |
| https://staycoolairco.nl/kennisbank/wat-kost-een-airco-plaatsen | wat kost een airco laten plaatsen, wat kost een airco installeren | 150 + 150 |
| https://staycoolairco.nl/seo/pillar-8-vergelijkingen/daikin-vs-mitsubishi | mitsubishi heavy industries, daikin of mitsubishi airco, mitsubishi airco 3 5 kw review | 800 + 150 + 20 |
| https://staycoolairco.nl/kennisbank/hoe-werkt-airco | hoe werkt een airco | 500 |
| https://staycoolairco.nl/seo/pillar-5-thuisbatterijen/thuisbatterij-terugverdientijd | terugverdientijd thuisbatterij berekenen | 450 |
| https://staycoolairco.nl/thuisbatterij-calculator | thuisbatterij berekenen | 350 |
| https://staycoolairco.nl/kennisbank/airco-buitenunit-plaatsing | buitenunit airco, plaatsing airco buitenunit, airco buitenunit plaatsen regels | 450 + 100 + 200 |
| https://staycoolairco.nl/seo/pillar-3-merken-modellen/daikin-airco-modellen | daikin airco modellen | 250 |
| https://staycoolairco.nl/seo/pillar-10-duurzaamheid/koudemiddel-r32 | werkdruk airco r32 | 150 |
| https://staycoolairco.nl/airco-installatie/brunssum | airco brunssum | 50 |
| https://staycoolairco.nl/airco-installatie/roermond | airco roermond | 100 |
| https://staycoolairco.nl/products/samsung/wind-free-avant-black | samsung wind free airco, samsung windfree airco | 20 + 100 |
| https://staycoolairco.nl/seo/pillar-1-installatie-services/multi-split-airco-installatie | 2 airco's op 1 groep | 40 |
| https://staycoolairco.nl/seo/pillar-2-onderhoud-service/airco-filter-reiniging | filter airco schoonmaken | 150 |

## How to submit

1. Open https://search.google.com/search-console
2. Pick the staycoolairco.nl property
3. URL Inspection (top search bar) → paste URL → Enter
4. Click **Request Indexing**
5. Repeat for each URL above

**Limit**: Search Console allows ~10–12 reindex requests per day. Spread across 3 days for the full Priority 1+2 list.

## Expected timeline

- **Day 0 (today)**: deploy fixes
- **Day 1–3**: submit Priority 1 (broken pages now rendering)
- **Day 4–7**: submit Priority 2 (canonical-bug-only pages)
- **Week 2–4**: rankings should start recovering as Google recrawls and reassesses canonical signals
- **Week 4–8**: full recovery if content quality holds

Track progress in Ahrefs by re-running the same export every 2 weeks.
