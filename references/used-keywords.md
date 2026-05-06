# Used keywords

> Primary keywords die we al targeten op deze site.
> **Regel:** voor je een primary keyword kiest voor een nieuwe page, check dit bestand. Hergebruik nooit een primary — dat veroorzaakt keyword-cannibalisatie.

---

## Keyword-selectie-workflow

Bij het bouwen van een cluster voor een nieuwe page:

1. **Primary moet uit de keyword-research komen** — niet verzinnen. Bron: `keyword-analysis-detailed.md`, `KEYWORD-SEO-GUIDE.md`, of een actuele export.
2. **Check dit bestand eerst** — nooit hergebruiken.
3. **Secondary/cluster-keywords:** primair uit research, aanvullend bedacht op basis van People-Also-Ask. Markeer in de tabel met ✓ research of `(invented)`.
4. **Same-intent-test:** zou iemand die deze secondary zoekt op dezelfde page willen landen als iemand die de primary zoekt? Nee → andere cluster.

---

## Geboekte primaries (2026-05-05 baseline)

> Onderstaande is een **eerste inventarisatie** op basis van de bestaande site (zie `src/pages/`, `src/data/programmaticLocations.ts`, en de sitemap-XMLs in `public/`). Dit moet je verifiëren tegen de actieve research-export voor je een nieuwe pagina lanceert.

### Hoofd-primaries — generieke service-pages

| Primary keyword | Page | Bron |
|-----------------|------|------|
| `airco installateur limburg` | `/` (homepage) | ✓ research |
| `airco kopen` | `/airco` | ✓ research |
| `airco onderhoud` | `/onderhoud` | ✓ research |
| `airco kosten` | `/articles/wat-kost-een-airco-plaatsen` | ✓ research |
| `airco verwarming kosten besparing` | `/airco-verwarming-kosten-besparing` | ✓ research |
| `airco capaciteit calculator` | `/capacity-calculator` | `(invented)` |
| `airco veelvoorkomende problemen` | `/common-problems` | `(invented)` |
| `airco buitenunit plaatsing` | `/articles/airco-buitenunit-plaatsing` | ✓ research |
| `airco blaast geen warme lucht` | `/articles/airco-blaast-geen-warme-lucht` | ✓ research |
| `airco-omkasting` | `/airco-covers` | ✓ research |
| `thuisbatterij limburg` | `/thuisbatterijen` | ✓ research |

### Cluster 1 — Airco bijvullen & service (toegevoegd 2026-05-06)

| Primary keyword | Vol/mnd | Page | Bron | Cluster-rol |
|-----------------|--------:|------|------|-------------|
| `airco bijvullen` | 2.900 | `/airco-bijvullen` | ✓ research (SERP) | **Pillar** |
| `airco vullen` | 1.000 | `/airco-bijvullen` | ✓ research (SERP) | secondary op pillar |
| `airco vullen kosten` | ~600 | `/airco-vullen-kosten` | ✓ research (SERP) | Supporting |
| `airco bijvullen kosten` | ~500 | `/airco-vullen-kosten` | ✓ research | secondary |
| `goedkoop airco bijvullen` | ~150 | `/airco-vullen-kosten` (sectie "vergelijken op prijs") | ✓ research | secondary |
| `airco zelf bijvullen` | ~400 | `/kennisbank/airco-bijvullen-zelf-doen` | ✓ research (SERP) | Supporting (negatief intent) |
| `airco bijvullen verboden` | ~80 | `/kennisbank/airco-bijvullen-zelf-doen` | ✓ research | secondary |
| `boete airco zelf installeren` | ~110 | `/kennisbank/airco-bijvullen-zelf-doen` | ✓ research | secondary |

**Cluster-architectuur:**
- Pillar `/airco-bijvullen` = 3.418 woorden (skyscraper +20% boven top SERP airco-expres = 2.800w)
- Supporting `/airco-vullen-kosten` = 1.523 woorden (kosten-deep-dive)
- Supporting `/kennisbank/airco-bijvullen-zelf-doen` = 1.383 woorden (negatief-intent, traffic-vangnet)
- 301 redirect: `/seo/pillar-2-onderhoud-service/airco-koudemiddel-bijvullen` → `/airco-bijvullen`
- Cross-linking: pillar ↔ kosten ↔ zelf-doen + 4 bestaande supporting pages (storing, reparatie, jaarlijks onderhoud, filter)

**Anti-cannibalisation:**
- Bestaande `/airco-onderhoud` is nu narrowed naar **onderhoudscontract** (€11/mnd primary, title geüpdatet 2026-05-06)
- Bestaande `/airco-service-limburg` blijft commercieel met **regio-modifier** focus (nog niet narrowed)
- ✅ Toekomstige `/airco-service` is nu **gebouwd** als pillar voor service-cluster (Fase B compleet)

### Cluster 2 — Airco service (toegevoegd 2026-05-06, Fase B)

| Primary keyword | Vol/mnd | Page | Bron | Cluster-rol |
|-----------------|--------:|------|------|-------------|
| `airco service` | ~700 | `/airco-service` | ✓ research (SERP) | **Pillar (hub)** |
| `airco service limburg` | ~250 | `/airco-service-limburg` | ✓ research | regio-modifier (bestaand) |
| `airco onderhoudscontract` | ~600 | `/airco-onderhoud` | ✓ research | Supporting (€11/mnd) — title geüpdatet |
| `airco onderhoud abonnement` | ~150 | `/airco-onderhoud` | ✓ research | secondary |
| `jaarlijks airco onderhoud` | ~300 | `/seo/pillar-2-onderhoud-service/jaarlijks-airco-onderhoud` | bestaand | Supporting |
| `airco storing oplossen` | ~250 | `/seo/pillar-2-onderhoud-service/airco-storing-oplossen` | bestaand | Supporting |
| `airco reparatie` | ~400 | `/seo/pillar-2-onderhoud-service/airco-reparatie-service` | bestaand | Supporting |
| `airco filter reiniging` | ~120 | `/seo/pillar-2-onderhoud-service/airco-filter-reiniging` | bestaand | Supporting |

**Cluster-architectuur:**
- Pillar `/airco-service` = 2.566 woorden — hub-and-spoke met 5 service-typen
- Onderhoudscontract verwijst naar `/airco-onderhoud` (€11/mnd, bestaand) — geen aparte page (anti-cannibalisatie)
- Cross-linking: 4 SEO-supporting pages krijgen prominente "← Naar Service-overzicht" link bovenaan related-list (geüpdatet 2026-05-06)
- Oude links naar `/seo/.../airco-koudemiddel-bijvullen` zijn vervangen door directe links naar `/airco-bijvullen` (sneller, geen redirect)

**Differentiator vs. concurrenten:**
- Onze onderhoudsbeurt-stappen concreet beschreven (kapjes eraf, waterzak, verdamper uitspuiten, antibacteriële spray, buitenunit demonteren, ventilatormotor checken)
- "Gas/koudemiddel alleen checken bij verdenking" — eerlijk dat we niet onnodig aan F-gas zitten (besparing voor klant + matching met `/airco-bijvullen` voice)

### Cluster 3 — Subsidie / ISDE (toegevoegd 2026-05-06)

| Primary keyword | Vol/mnd | Page | Bron | Cluster-rol |
|-----------------|--------:|------|------|-------------|
| `airco subsidie` | ~1.300 | `/airco-subsidie` | ✓ research (SERP) | **Pillar** |
| `airco subsidie 2026` | ~600 | `/airco-subsidie` | ✓ research | secondary op pillar |
| `isde airco` | ~250 | `/airco-subsidie` | ✓ research | secondary |
| `subsidie airco warmtepomp` | ~150 | `/airco-subsidie` | ✓ research | secondary |
| `isde aanvragen` | ~800 | `/isde-aanvragen-airco` | ✓ research | Supporting (HowTo schema) |
| `isde aanvragen warmtepomp` | ~300 | `/isde-aanvragen-airco` | ✓ research | secondary |
| `isde subsidie aanvragen 2026` | ~200 | `/isde-aanvragen-airco` | ✓ research | secondary |

**Cluster 3 architectuur:**
- Pillar `/airco-subsidie` (2.011w) — eerlijke positie: split-airco GEEN ISDE; wel BTW-9% + soms gemeente
- Supporting `/isde-aanvragen-airco` (1.309w) — stappenplan voor wie wél lucht-water heeft
- Cross-link bestaand: `/blog/airco-subsidie-2026-limburg`, `/seo/pillar-9-kosten-prijzen/airco-subsidies-limburg`

**Cluster 3 differentiator:** RVO-bron als basis. Concurrent-sites zoals airco-purmerend.nl claimen ten onrechte ISDE voor split-airco. Onze eerlijke versie is trust-edge + ranking-edge — Google waardeert authoriteit-bronnen.

### Cluster 4 — Airco-warmtepomp (toegevoegd 2026-05-06)

| Primary keyword | Vol/mnd | Page | Bron | Cluster-rol |
|-----------------|--------:|------|------|-------------|
| `airco warmtepomp` | ~900 | `/airco-warmtepomp` | ✓ research (SERP) | **Pillar** |
| `lucht-lucht warmtepomp` | ~600 | `/airco-warmtepomp` | ✓ research | secondary op pillar |
| `airco als verwarming` | ~400 | `/airco-warmtepomp` | bestaand `/airco-verwarming-kosten-besparing` | concurrent — let op cannibalisatie |
| `scop waarde airco` | ~200 | `/airco-warmtepomp` | ✓ research | secondary |
| `hybride warmtepomp` | ~1.500 | `/hybride-warmtepomp-airco` | ✓ research (SERP) | Supporting |
| `hybride warmtepomp kosten` | ~600 | `/hybride-warmtepomp-airco` | ✓ research | secondary |

**Cluster 4 architectuur:**
- Pillar `/airco-warmtepomp` (2.112w) — techniek + SCOP/COP + 3 besparingsscenario's voor Limburgse woningen
- Supporting `/hybride-warmtepomp-airco` (1.335w) — twee betekenissen van "hybride" + reken-voorbeeld
- Cross-link: `/airco-subsidie` (cluster 3, want subsidie-vraag is veelgesteld bij warmtepomp-onderzoek)

**Cluster 4 differentiator:** drie concrete besparingsscenario's voor Limburgse woningprofielen (rijtjeshuis, geïsoleerde woning, vrijstaande pre-1980). Concurrenten geven generieke "60% besparing" zonder context. Onze versie geeft specifieke jaarkosten en terugverdientijd per huistype.

**Anti-cannibalisation alert:** `/airco-warmtepomp` heeft potentiële overlap met bestaande `/airco-verwarming-kosten-besparing`. Strategie: `/airco-warmtepomp` focust op **techniek + warmtepomp-systeem-vergelijking**; `/airco-verwarming-kosten-besparing` focust op **financieel besparen** als hoofdtitel. Beide kunnen co-bestaan met andere primary keywords.

### City-primaries — `/airco-installatie/[stad]`

Pattern: `airco installatie [stad]` als primary, plus 4–5 same-intent secondaries.

| Stad | Primary | Page |
|------|---------|------|
| Maastricht | `airco installatie maastricht` | `/airco-installatie/maastricht` |
| Heerlen | `airco installatie heerlen` | `/airco-installatie/heerlen` |
| Sittard | `airco installatie sittard` | `/airco-installatie/sittard` |
| Geleen | `airco installatie geleen` | `/airco-installatie/geleen` |
| Roermond | `airco installatie roermond` | `/airco-installatie/roermond` |
| Venlo | `airco installatie venlo` | `/airco-installatie/venlo` |
| Weert | `airco installatie weert` | `/airco-installatie/weert` |
| Kerkrade | `airco installatie kerkrade` | `/airco-installatie/kerkrade` |
| Brunssum | `airco installatie brunssum` | `/airco-installatie/brunssum` |
| Landgraaf | `airco installatie landgraaf` | `/airco-installatie/landgraaf` |
| Valkenburg | `airco installatie valkenburg` | `/airco-installatie/valkenburg` |
| Beek | `airco installatie beek` | `/airco-installatie/beek` |
| Stein | `airco installatie stein` | `/airco-installatie/stein` |
| Voerendaal | `airco installatie voerendaal` | `/airco-installatie/voerendaal` |
| Nuth | `airco installatie nuth` | `/airco-installatie/nuth` |
| Hoensbroek | `airco installatie hoensbroek` | `/airco-installatie/hoensbroek` |
| Simpelveld | `airco installatie simpelveld` | `/airco-installatie/simpelveld` |
| Vaals | `airco installatie vaals` | `/airco-installatie/vaals` |
| Eijsden-Margraten | `airco installatie eijsden-margraten` | `/airco-installatie/eijsden-margraten` |
| Gulpen-Wittem | `airco installatie gulpen-wittem` | `/airco-installatie/gulpen-wittem` |
| Meerssen | `airco installatie meerssen` | `/airco-installatie/meerssen` |
| Echt | `airco installatie echt` | `/airco-installatie/echt` |
| Maasbracht | `airco installatie maasbracht` | `/airco-installatie/maasbracht` |
| Nederweert | `airco installatie nederweert` | `/airco-installatie/nederweert` |
| Venray | `airco installatie venray` | `/airco-installatie/venray` |
| Horst | `airco installatie horst` | `/airco-installatie/horst` |
| Tegelen | `airco installatie tegelen` | `/airco-installatie/tegelen` |
| Panningen | `airco installatie panningen` | `/airco-installatie/panningen` |
| Gennep | `airco installatie gennep` | `/airco-installatie/gennep` |

> **Toevoegen aan deze tabel** elke keer wanneer een nieuwe locatie-page live gaat.

### Brand-primaries — `/products/[merk]`

| Merk | Primary | Page |
|------|---------|------|
| Daikin | `daikin airco` | `/products/daikin` |
| Mitsubishi Heavy | `mitsubishi heavy airco` | `/products/mitsubishi-heavy` |
| LG | `lg airco` | `/products/lg` |
| Samsung | `samsung airco` | `/products/samsung` |
| Toshiba | `toshiba airco` | `/products/toshiba` |
| Tosot | `tosot airco` | `/products/tosot` |

> Plus mobiele airco's: `lg mobiele airco`, `tosot mobiele airco`.

---

## Workflow voor de volgende post

1. Open de actieve keyword-export (`keyword-analysis-detailed.md` of nieuwere CSV).
2. Sorteer op zoekvolume × (1 / KD) of vergelijkbare metric.
3. Skip elke primary in de tabellen hierboven.
4. Kies een primary uit de research die nog niet gebruikt is.
5. Scan de research voor same-intent secondaries — gebruik die eerst (markeer ✓ research).
6. Vul resterende cluster-slots met bedachte secondaries (markeer `(invented)`).
7. **Voeg het nieuwe cluster toe aan dit bestand vóór je de post schrijft.**
8. Publiceer; update "Used on page".

## Cluster-template voor nieuwe entry

```markdown
### N. `[primary keyword]` → [page slug]

- **Primary source:** ✓ research / `(invented)`
- **Used on page:** `/[slug]/`
- **Cluster:**

| Secondary keyword | Source |
|-------------------|--------|
| ... | ... |
```

---

## Audit-TODO (uit te voeren door Marvin)

- [ ] Verifieer bovenstaande primaries tegen actieve keyword-export
- [ ] Voeg same-intent-secondaries toe per primary (nu nog onvolledig)
- [ ] Markeer welke pages echt live zijn vs. nog placeholder (route bestaat in code, page niet geschreven)
- [ ] Identificeer mogelijke cannibalisatie: bv. `/airco` vs. `/products/[merk]` — zelfde intent?
