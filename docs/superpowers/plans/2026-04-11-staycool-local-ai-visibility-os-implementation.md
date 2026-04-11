# StayCool Local AI Visibility OS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bouw een production-ready StayCool promptbibliotheek voor Claude in Chrome, inclusief contextbestanden, auditprompts, prioriteringsprompts, GBP-productieprompts, website-productieprompts en executieroutines.

**Architecture:** De implementatie levert een documentatiesysteem op onder `docs/claude-prompts/staycool-local-ai-visibility/` met vaste submappen per promptlaag. Elk promptbestand krijgt een uniforme structuur zodat Claude consequent in het Nederlands, Limburg-breed en met scheiding tussen `airco` en `thuisbatterijen` werkt. De bibliotheek wordt gekoppeld aan een centrale README en gevalideerd via eenvoudige documentatiechecks op bestandsstructuur, sectiekoppen en dekking.

**Tech Stack:** Markdown, repository docs-structuur, ripgrep/find/sed voor validatie, git voor kleine commits.

---

## File Structure

### New directories

- `docs/claude-prompts/staycool-local-ai-visibility/`
- `docs/claude-prompts/staycool-local-ai-visibility/00-context/`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/`
- `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/`
- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/`
- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/`
- `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/`
- `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/`

### New top-level docs

- `docs/claude-prompts/staycool-local-ai-visibility/README.md`
- `docs/claude-prompts/staycool-local-ai-visibility/prompt-rules.md`

### New context files

- `docs/claude-prompts/staycool-local-ai-visibility/00-context/bedrijf-profiel-staycool.md`
- `docs/claude-prompts/staycool-local-ai-visibility/00-context/usp-en-positionering.md`
- `docs/claude-prompts/staycool-local-ai-visibility/00-context/limburg-brede-focus.md`
- `docs/claude-prompts/staycool-local-ai-visibility/00-context/airco-pijler.md`
- `docs/claude-prompts/staycool-local-ai-visibility/00-context/thuisbatterij-pijler.md`
- `docs/claude-prompts/staycool-local-ai-visibility/00-context/concurrentenlijst.md`
- `docs/claude-prompts/staycool-local-ai-visibility/00-context/kernzoekwoorden.md`
- `docs/claude-prompts/staycool-local-ai-visibility/00-context/bestaande-site-structuur.md`

### New audit prompt files

- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/gbp-categorie-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/gbp-attributen-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/review-attribute-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/review-velocity-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/gbp-posts-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/gbp-foto-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/services-section-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/website-attribute-coverage-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/ahrefs-gsc-keyword-attribute-gap-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/01-audits/competitor-map-pack-pattern-audit.md`

### New prioritization prompt files

- `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/quick-wins-prioriteren.md`
- `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/90-dagen-actieplan.md`
- `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/hoogste-impact-contentgaten.md`
- `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/gbp-vs-website-gap-prioriteiten.md`
- `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/review-systeem-prioriteiten.md`

### New GBP production prompt files

- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/gbp-descriptions.md`
- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/services-descriptions.md`
- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/qa-antwoorden.md`
- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/gbp-posts.md`
- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/review-responses.md`
- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/review-asks.md`
- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/foto-uploadplanning.md`
- `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/maandelijkse-gbp-contentkalender.md`

### New website production prompt files

- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/nieuwe-servicepaginas.md`
- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/bestaande-paginas-refresh.md`
- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/attributepaginas.md`
- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/faq-uitbreidingen.md`
- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/metadata.md`
- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/interne-links.md`
- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/regionale-relevantieblokken.md`
- `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/schema-contentextractie.md`

### New execution routine files

- `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/wekelijkse-local-visibility-review.md`
- `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/maandelijkse-competitor-refresh.md`
- `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/maandelijkse-review-analyse.md`
- `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/kwartaal-content-gap-review.md`
- `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/nieuwe-pagina-qa.md`

### New master prompt files

- `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/full-local-ai-visibility-audit.md`
- `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/90-dagen-staycool-growth-plan.md`
- `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/airco-content-backlog-generator.md`
- `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/thuisbatterij-content-backlog-generator.md`
- `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/gbp-execution-operator.md`

## Shared Prompt Template

Every prompt file should follow this structure:

```md
# [Promptnaam]

## Doel
[Wat de prompt voor StayCool moet bereiken]

## Wanneer gebruiken
- [Concreet moment of trigger]

## Vereiste input
- [Browserbronnen, URLs, keywords, contextbestanden]

## Prompt
[De volledige prompttekst voor Claude in Chrome]

## Verwachte output
- [Tabellen, prioriteiten, publiceerbare copy, checklists]

## Klaarcheck
- [Controlepunten voor bruikbaarheid]
```

Every prompt body should explicitly require:

```md
- Antwoord volledig in helder Nederlands.
- Behandel `airco` en `thuisbatterijen` als aparte pijlers.
- Gebruik `Limburg breed` als hoofdregio.
- Geef geen vaag advies; werk met tabellen, prioriteiten en concrete acties.
- Sluit af met `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later`.
```

### Task 1: Scaffold de promptbibliotheek

**Files:**
- Create: `docs/claude-prompts/staycool-local-ai-visibility/README.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/prompt-rules.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/.gitkeep`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/.gitkeep`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/.gitkeep`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/.gitkeep`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/.gitkeep`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/.gitkeep`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/.gitkeep`

- [ ] **Step 1: Maak de directorystructuur**

Run:

```bash
mkdir -p docs/claude-prompts/staycool-local-ai-visibility/{00-context,01-audits,02-prioritering,03-gbp-productie,04-website-productie,05-executie-routines,06-master-prompts}
touch docs/claude-prompts/staycool-local-ai-visibility/{00-context,01-audits,02-prioritering,03-gbp-productie,04-website-productie,05-executie-routines,06-master-prompts}/.gitkeep
```

- [ ] **Step 2: Schrijf de centrale README**

Gebruik deze basis:

```md
# StayCool Local AI Visibility Prompt Library

Deze bibliotheek is gemaakt voor StayCool Airco en gebruik in Claude in Chrome.

## Doel
- klassieke local SEO versterken;
- AI attribute match versterken;
- GBP, reviews en websitecontent op elkaar afstemmen;
- direct bruikbare output genereren in het Nederlands.

## Structuur
- `00-context`: vaste StayCool context
- `01-audits`: analyseprompts
- `02-prioritering`: beslisprompts
- `03-gbp-productie`: GBP-copy en reviewprompts
- `04-website-productie`: site- en contentprompts
- `05-executie-routines`: terugkerende workflows
- `06-master-prompts`: samengestelde operatorprompts

## Gebruik
1. Laad eerst relevante contextbestanden.
2. Run daarna een auditprompt.
3. Zet de audit om naar prioriteiten.
4. Gebruik productieprompts om copy of backlog te maken.
5. Gebruik executieroutines voor onderhoud.
```

- [ ] **Step 3: Schrijf `prompt-rules.md`**

Gebruik deze basis:

```md
# Prompt Rules

Elke prompt in deze bibliotheek moet Claude instrueren om:

- volledig in Nederlands te antwoorden;
- `airco` en `thuisbatterijen` apart te behandelen;
- `Limburg breed` als hoofdregio te nemen;
- geen generieke SEO-uitleg te geven;
- tabellen te gebruiken waar nuttig;
- af te sluiten met:
  - `Topprioriteiten`
  - `Quick wins`
  - `Direct publiceerbaar`
  - `Later`
```

- [ ] **Step 4: Controleer de structuur**

Run:

```bash
find docs/claude-prompts/staycool-local-ai-visibility -maxdepth 2 -type d | sort
```

Expected: alle 7 submappen plus de rootmap worden getoond.

- [ ] **Step 5: Commit**

```bash
git add docs/claude-prompts/staycool-local-ai-visibility
git commit -m "docs: scaffold StayCool prompt library"
```

### Task 2: Maak de contextlaag

**Files:**
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/bedrijf-profiel-staycool.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/usp-en-positionering.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/limburg-brede-focus.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/airco-pijler.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/thuisbatterij-pijler.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/concurrentenlijst.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/kernzoekwoorden.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/00-context/bestaande-site-structuur.md`

- [ ] **Step 1: Schrijf het bedrijfsprofiel**

Zorg dat `bedrijf-profiel-staycool.md` minimaal deze secties bevat:

```md
# Bedrijf Profiel StayCool

## Kern
- Bedrijfsnaam: StayCool Airco
- Regio: Limburg breed
- Hoofdfocus: airco installatie, onderhoud, reparatie
- Tweede pijler: thuisbatterijen

## Doelgroep
- huiseigenaren
- huishoudens met zonnepanelen
- mensen met comfort- of energievraag

## Belangrijk
- Output moet altijd praktisch en publiceerbaar zijn.
```

- [ ] **Step 2: Schrijf de positionering en Limburg-focus**

Zorg dat `usp-en-positionering.md` en `limburg-brede-focus.md` minimaal deze elementen bevatten:

```md
## Positionering
- erkend specialist
- lokaal en transparant
- combinatie van comfort en energiebesparing
- sterke link tussen airco en slim verwarmen

## Limburg-brede focus
- hoofdregio is heel Limburg
- lokale plaatsnamen ondersteunen, maar versnipperen de strategie niet
- regionale relevantie is belangrijker dan dunne stadsduplicatie
```

- [ ] **Step 3: Schrijf de twee pijlerbestanden**

Gebruik deze headings in beide bestanden:

```md
# [Pijlernaam]

## Kernintenties
## Belangrijkste use-cases
## Matchbare attributen
## Typische vragen van zoekers
## Gewenste contentvormen
```

- [ ] **Step 4: Schrijf concurrenten, keywords en site-structuur**

Gebruik deze basis:

```md
## Concurrentenlijst
- ruimte voor GBP-URL
- ruimte voor website-URL
- type concurrent: airco, thuisbatterij of beide

## Kernzoekwoorden
- airco installatie limburg
- airco onderhoud limburg
- airco reparatie limburg
- airco verwarmen limburg
- thuisbatterij limburg
- thuisbatterij installatie limburg
- thuisbatterij rendement

## Bestaande site-structuur
- home
- product/merkpagina's
- locatiecontent
- kennisbank
- landingspagina's
- thuisbatterijcontent
```

- [ ] **Step 5: Controleer de contextlaag**

Run:

```bash
find docs/claude-prompts/staycool-local-ai-visibility/00-context -type f | sort
rg -n "^# |^## " docs/claude-prompts/staycool-local-ai-visibility/00-context
```

Expected: acht contextbestanden met consistente headingstructuur.

- [ ] **Step 6: Commit**

```bash
git add docs/claude-prompts/staycool-local-ai-visibility/00-context
git commit -m "docs: add StayCool context layer"
```

### Task 3: Maak de auditpromptlaag

**Files:**
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/gbp-categorie-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/gbp-attributen-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/review-attribute-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/review-velocity-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/gbp-posts-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/gbp-foto-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/services-section-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/website-attribute-coverage-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/ahrefs-gsc-keyword-attribute-gap-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/01-audits/competitor-map-pack-pattern-audit.md`

- [ ] **Step 1: Schrijf de twee foundation audits**

Elke file moet deze vaste sections hebben:

```md
# [Promptnaam]

## Doel
## Wanneer gebruiken
## Vereiste input
## Prompt
## Verwachte output
## Klaarcheck
```

De `Prompt`-sectie van `gbp-categorie-audit.md` moet Claude instrueren om:

```md
- Google Maps te openen
- meerdere zoekopdrachten voor airco en thuisbatterijen in Limburg te testen
- concurrenten per zoekopdracht te registreren
- primaire en secundaire categorieën te verzamelen
- StayCool te vergelijken met concurrenten
- een tabel per zoekterm te maken
- ontbrekende categorieën te highlighten
```

- [ ] **Step 2: Schrijf review- en posts/foto-audits**

De `review-attribute-audit.md` prompt moet expliciet vragen om:

```md
- de laatste relevante reviews van StayCool en concurrenten te lezen;
- genoemde diensten, situaties, regio's, snelheid en resultaten te extraheren;
- `airco` en `thuisbatterijen` apart te labelen;
- te eindigen met ontbrekende review-attributen die StayCool actief moet gaan verzamelen.
```

De `gbp-posts-audit.md` en `gbp-foto-audit.md` prompts moeten expliciet vragen om:

```md
- frequentie in de laatste 90 dagen;
- type content;
- lokale/regio-signalen;
- activiteitsscore;
- quick wins voor de komende 30 dagen.
```

- [ ] **Step 3: Schrijf website- en keyword-gap audits**

De `website-attribute-coverage-audit.md` prompt moet Claude instrueren om de StayCool-site te scannen op:

```md
- diensten
- use-cases
- problemen
- responstijd
- proces
- Limburg-signalen
- trustsignalen
- expliciete attributen
```

De `ahrefs-gsc-keyword-attribute-gap-audit.md` prompt moet Claude instrueren om:

```md
- GSC/Ahrefs termen naast bestaande sitecopy te leggen;
- ontbrekende woorden en semantische details te markeren;
- output te geven als prioriteitstabel met `zoekvraag`, `ontbrekend attribuut`, `aanbevolen pagina`, `impact`.
```

- [ ] **Step 4: Controleer auditdekking**

Run:

```bash
find docs/claude-prompts/staycool-local-ai-visibility/01-audits -type f | sort | wc -l
rg -n "## Prompt|## Verwachte output|Topprioriteiten|Quick wins" docs/claude-prompts/staycool-local-ai-visibility/01-audits
```

Expected: 10 auditfiles en in elk bestand de vaste outputstructuur.

- [ ] **Step 5: Commit**

```bash
git add docs/claude-prompts/staycool-local-ai-visibility/01-audits
git commit -m "docs: add StayCool audit prompts"
```

### Task 4: Maak de prioriteringspromptlaag

**Files:**
- Create: `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/quick-wins-prioriteren.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/90-dagen-actieplan.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/hoogste-impact-contentgaten.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/gbp-vs-website-gap-prioriteiten.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/02-prioritering/review-systeem-prioriteiten.md`

- [ ] **Step 1: Schrijf `quick-wins-prioriteren.md`**

De prompt moet Claude instrueren om auditoutput te herordenen in deze tabel:

```md
| Actie | Kanaal | Pijler | Impact | Moeite | Waarom nu | Eigenaar |
```

- [ ] **Step 2: Schrijf `90-dagen-actieplan.md`**

Gebruik deze outputstructuur:

```md
## Maand 1
## Maand 2
## Maand 3

Per maand:
- GBP
- Reviews
- Website
- Content
- Meting
```

- [ ] **Step 3: Schrijf de drie gap-prioriteit prompts**

Elke prompt moet eindigen met:

```md
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later
```

En deze tabellen opnemen:

```md
| Gap | Pijler | Kanaal | Impact | Snelheid | Aanbevolen actie |
|---|---|---|---|---|---|
```

- [ ] **Step 4: Controleer de prioriteringslaag**

Run:

```bash
find docs/claude-prompts/staycool-local-ai-visibility/02-prioritering -type f | sort
rg -n "Topprioriteiten|Quick wins|Direct publiceerbaar|Later" docs/claude-prompts/staycool-local-ai-visibility/02-prioritering
```

Expected: 5 bestanden met uniforme beslisoutput.

- [ ] **Step 5: Commit**

```bash
git add docs/claude-prompts/staycool-local-ai-visibility/02-prioritering
git commit -m "docs: add StayCool prioritization prompts"
```

### Task 5: Maak de GBP-productiepromptlaag

**Files:**
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/gbp-descriptions.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/services-descriptions.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/qa-antwoorden.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/gbp-posts.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/review-responses.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/review-asks.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/foto-uploadplanning.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie/maandelijkse-gbp-contentkalender.md`

- [ ] **Step 1: Schrijf description- en services-prompts**

De `gbp-descriptions.md` prompt moet expliciet vragen om:

```md
- 3 varianten;
- elk maximaal GBP-lengte;
- aparte nuance voor airco en thuisbatterijen;
- Limburg-brede positionering;
- natuurlijke keywordverwerking;
- duidelijke CTA.
```

De `services-descriptions.md` prompt moet output eisen in deze tabel:

```md
| Service | Pijler | Beschrijving | Belofte/voordeel | Regioverwijzing |
```

- [ ] **Step 2: Schrijf review prompts**

De `review-asks.md` prompt moet Claude laten maken:

```md
- reviewverzoek na airco-installatie;
- reviewverzoek na airco-onderhoud;
- reviewverzoek na reparatie;
- reviewverzoek na thuisbatterij-advies/installatie;
- korte WhatsApp-variant;
- korte e-mailvariant.
```

De `review-responses.md` prompt moet vragen om:

```md
- 3 varianten voor 5 sterren;
- 3 varianten voor 4 sterren;
- 3 varianten voor 3 sterren;
- 3 varianten voor 1-2 sterren;
- natuurlijke vermelding van dienst en Limburg waar passend.
```

- [ ] **Step 3: Schrijf posts-, Q&A- en foto-prompts**

`gbp-posts.md` en `maandelijkse-gbp-contentkalender.md` moeten Claude instrueren om:

```md
- 2-3 posts per week te plannen;
- mix van seizoensacties, cases, review highlights en teamcontent te gebruiken;
- `airco` en `thuisbatterijen` beide terug te laten komen;
- publiceerklare copy plus beeldsuggestie te geven.
```

`foto-uploadplanning.md` moet output geven als 8-weken schema:

```md
| Week | Aantal foto's | Type | Waar fotograferen | Waarom dit telt |
```

- [ ] **Step 4: Controleer de GBP-productielaag**

Run:

```bash
find docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie -type f | sort | wc -l
rg -n "publiceerbaar|CTA|Limburg|airco|thuisbatterij" docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie
```

Expected: 8 productiefiles met direct bruikbare outputeisen.

- [ ] **Step 5: Commit**

```bash
git add docs/claude-prompts/staycool-local-ai-visibility/03-gbp-productie
git commit -m "docs: add StayCool GBP production prompts"
```

### Task 6: Maak de website-productiepromptlaag

**Files:**
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/nieuwe-servicepaginas.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/bestaande-paginas-refresh.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/attributepaginas.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/faq-uitbreidingen.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/metadata.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/interne-links.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/regionale-relevantieblokken.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/04-website-productie/schema-contentextractie.md`

- [ ] **Step 1: Schrijf prompts voor nieuwe pagina's**

`nieuwe-servicepaginas.md` moet Claude instrueren om output te geven als:

```md
| Titel | Pijler | Zoekintentie | Hoek | Waarom nu | Aanbevolen URL |
```

`attributepaginas.md` moet Claude instrueren om vraag-naar-antwoord-pagina's voor attributen te maken, zoals:

```md
- snelle installatie
- stille slaapkameroplossing
- terugleverkosten verlagen
- slim energiegebruik met thuisbatterij
```

- [ ] **Step 2: Schrijf refresh-, FAQ- en metadata-prompts**

`bestaande-paginas-refresh.md` moet Claude laten outputten:

```md
| Pagina | Huidige tekortkoming | Ontbrekend attribuut | Nieuwe sectie | Interne linkkans |
```

`faq-uitbreidingen.md` moet vragen om:

```md
- 10 FAQ's voor airco;
- 10 FAQ's voor thuisbatterijen;
- korte antwoorden;
- schema-vriendelijke formulering.
```

- [ ] **Step 3: Schrijf interne link-, regionale relevantie- en schema-prompts**

`interne-links.md` moet output geven als:

```md
| Bronpagina | Doelpagina | Anchor | Waarom |
```

`regionale-relevantieblokken.md` moet Claude instrueren om korte copyblokken te schrijven die Limburg-breed zijn, zonder dunne stadsduplicatie.

`schema-contentextractie.md` moet Claude instrueren om bestaande copy terug te brengen naar:

```md
- FAQ input
- Service schema input
- LocalBusiness relevante velden
- Review/case snippets
```

- [ ] **Step 4: Controleer de website-productielaag**

Run:

```bash
find docs/claude-prompts/staycool-local-ai-visibility/04-website-productie -type f | sort
rg -n "Aanbevolen URL|Interne linkkans|schema|FAQ|Limburg" docs/claude-prompts/staycool-local-ai-visibility/04-website-productie
```

Expected: 8 files met duidelijke sitegerichte outputformaten.

- [ ] **Step 5: Commit**

```bash
git add docs/claude-prompts/staycool-local-ai-visibility/04-website-productie
git commit -m "docs: add StayCool website production prompts"
```

### Task 7: Maak executieroutines en master prompts

**Files:**
- Create: `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/wekelijkse-local-visibility-review.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/maandelijkse-competitor-refresh.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/maandelijkse-review-analyse.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/kwartaal-content-gap-review.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines/nieuwe-pagina-qa.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/full-local-ai-visibility-audit.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/90-dagen-staycool-growth-plan.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/airco-content-backlog-generator.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/thuisbatterij-content-backlog-generator.md`
- Create: `docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts/gbp-execution-operator.md`

- [ ] **Step 1: Schrijf de routinematige reviewprompts**

Elke routineprompt moet beginnen met:

```md
Gebruik de relevante contextbestanden uit `00-context` voordat je analyseert.
```

De `wekelijkse-local-visibility-review.md` output moet minimaal bevatten:

```md
| Onderdeel | Status | Verandering sinds vorige week | Actie |
```

- [ ] **Step 2: Schrijf de master prompts**

`full-local-ai-visibility-audit.md` moet Claude instrueren om:

```md
- context te laden;
- audits slim te combineren;
- dubbele bevindingen samen te voegen;
- eindigen met een top-10 actielijst.
```

De backlog generators moeten outputten als:

```md
| Titel | Zoekintentie | Attribuut | Funnel | Prioriteit | Waarom |
```

- [ ] **Step 3: Controleer ritme en samenhang**

Run:

```bash
find docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines -type f | sort | wc -l
find docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts -type f | sort | wc -l
rg -n "Topprioriteiten|Quick wins|Direct publiceerbaar|Later" docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts
```

Expected: 5 routinefiles en 5 master prompt files met dezelfde afsluitstructuur.

- [ ] **Step 4: Commit**

```bash
git add docs/claude-prompts/staycool-local-ai-visibility/05-executie-routines docs/claude-prompts/staycool-local-ai-visibility/06-master-prompts
git commit -m "docs: add StayCool execution and master prompts"
```

### Task 8: QA, kruislinks en oplevercheck

**Files:**
- Modify: `docs/claude-prompts/staycool-local-ai-visibility/README.md`
- Modify: `docs/claude-prompts/staycool-local-ai-visibility/prompt-rules.md`

- [ ] **Step 1: Voeg indexlinks toe in de README**

Voeg een sectie toe met directe links:

```md
## Snelle start
- Foundation audits
- GBP copy
- Website content
- Review engine
- Master prompts
```

- [ ] **Step 2: Maak een QA-checklist in `prompt-rules.md`**

Voeg deze checklist toe:

```md
## QA Checklist
- Is de output in Nederlands?
- Zijn `airco` en `thuisbatterijen` apart benoemd?
- Is `Limburg breed` correct meegenomen?
- Is de output beslisbaar?
- Staat er direct publiceerbare output in?
- Eindigt de prompt met de vier vaste afsluitblokken?
```

- [ ] **Step 3: Voer de volledige docs-check uit**

Run:

```bash
find docs/claude-prompts/staycool-local-ai-visibility -type f | sort | wc -l
rg -n "^## Doel|^## Prompt|^## Verwachte output|^## Klaarcheck" docs/claude-prompts/staycool-local-ai-visibility | wc -l
rg -n "Topprioriteiten|Quick wins|Direct publiceerbaar|Later" docs/claude-prompts/staycool-local-ai-visibility | wc -l
```

Expected:

- totaal aantal files is in lijn met het plan;
- alle promptfiles hebben de vaste secties;
- alle promptfiles bevatten de vaste afsluitstructuur.

- [ ] **Step 4: Final commit**

```bash
git add docs/claude-prompts/staycool-local-ai-visibility
git commit -m "docs: finalize StayCool local AI visibility prompt system"
```

## Self-Review

### Spec coverage

- Contextlaag: gedekt door Task 2.
- Auditlaag: gedekt door Task 3.
- Beslislaag: gedekt door Task 4.
- Productielaag GBP: gedekt door Task 5.
- Productielaag website: gedekt door Task 6.
- Executieroutines en master prompts: gedekt door Task 7.
- Gebruik en QA: gedekt door Task 1 en Task 8.

### Placeholder scan

- Geen `TBD`, `TODO` of open placeholders gebruikt.
- Alle bestandslocaties zijn expliciet benoemd.
- Alle validatiestappen bevatten concrete commands.

### Type consistency

- Dezelfde mapnamen en promptlagen worden consequent gebruikt:
  - `00-context`
  - `01-audits`
  - `02-prioritering`
  - `03-gbp-productie`
  - `04-website-productie`
  - `05-executie-routines`
  - `06-master-prompts`

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-11-staycool-local-ai-visibility-os-implementation.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
