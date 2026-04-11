# StayCool Local AI Visibility Prompt Library

Deze bibliotheek is gemaakt voor StayCool Airco en gebruik in Claude in Chrome.

Primaire operating mode voor de auditlaag: live browse eerst in Claude in Chrome, met evidence-only fallback als live toegang onvolledig is.
`03-gbp-productie` is live en direct bruikbaar.
De contextlaag bestaat nu en `01-audits` is live en bruikbaar.
Latere promptlagen kunnen nog gedeeltelijk scaffolded of onvolledig zijn.
Raadpleeg eerst `prompt-rules.md` voordat je prompts maakt of gebruikt.

## Snelle start
- [Foundation audits](./01-audits/)
- [GBP copy](./03-gbp-productie/)
- [Website content](./04-website-productie/)
- [Review engine](./05-executie-routines/)
- [Master prompts](./06-master-prompts/)

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

De flow hieronder is de beoogde toekomstige workflow zodra de promptbestanden bestaan en zijn ingevuld.

## Gebruik
1. Laad eerst relevante contextbestanden.
2. Run daarna een auditprompt.
3. Zet de audit om naar prioriteiten.
4. Gebruik `02-prioritering` als handoff naar `03-gbp-productie`.
5. Gebruik productieprompts om copy of backlog te maken.
5. Gebruik executieroutines voor onderhoud.

## Production Path
Supported run path voor `03-gbp-productie`:
1. Kies modus: `airco-only`, `thuisbatterij-only`, of `mixed`.
2. Laad de relevante context uit `00-context`.
3. Laad de relevante handoff uit `01-audits`.
4. Laad de prioritering uit `02-prioritering`.
5. Vul de preflight in.
6. Run de gekozen productieprompt.

## Production Preflight
Gebruik dit blok vóór een Task 5 productieprompt:

```text
modus:
geladen context:
- bedrijf-profiel:
- usp-en-positionering:
- limburg-brede-focus:
- pijlercontext:
- bestaand-structuur:
handoff audit/prioritering:
- 01-audits:
- 02-prioritering:
source inputs:
- auditfiles:
- prioriteringsfiles:
- bewijsinputs:
required placeholders/links:
- review_link:
- cta_destination:
- merge_fields:
- bron_review_id:
```

Vul alleen in wat de gekozen prompt nodig heeft. Laat irrelevante regels leeg of verwijder ze niet; de prompt bepaalt wat verplicht is.

## Task 3 Run Order
1. Foundation audits: GBP-categorie, GBP-attributen, services section.
2. Review audits: review-attribute en review-velocity.
3. Activity audits: GBP-posts en GBP-foto.
4. Content audits: website-attribute-coverage en Ahrefs/GSC keyword gap.
5. Pattern audits: competitor Map Pack pattern als extra vergelijking of check.

## Audit Preflight
Plak dit vóór een auditprompt in Claude in Chrome:

```text
modus: 
auditdatum: 
GBP-URL(s): 
lookback window: 
target zoektermen: 
broncontext: 
```

Gebruik dit als startblok voor elke auditrun. Vul alleen de velden die voor de gekozen audit relevant zijn; laat irrelevante velden leeg als de prompt ze niet gebruikt.

## Context Load Matrix

### Airco-only
- Required: `00-context/bedrijf-profiel-staycool.md`, `00-context/usp-en-positionering.md`, `00-context/limburg-brede-focus.md`, `00-context/airco-pijler.md`, `00-context/bestaande-site-structuur.md`
- Optional: `00-context/concurrentenlijst.md`, `00-context/kernzoekwoorden.md`

### Thuisbatterij-only
- Required: `00-context/bedrijf-profiel-staycool.md`, `00-context/usp-en-positionering.md`, `00-context/limburg-brede-focus.md`, `00-context/thuisbatterij-pijler.md`, `00-context/bestaande-site-structuur.md`
- Optional: `00-context/concurrentenlijst.md`, `00-context/kernzoekwoorden.md`

### Mixed
- Required: `00-context/bedrijf-profiel-staycool.md`, `00-context/usp-en-positionering.md`, `00-context/limburg-brede-focus.md`, `00-context/airco-pijler.md`, `00-context/thuisbatterij-pijler.md`, `00-context/bestaande-site-structuur.md`
- Optional: `00-context/concurrentenlijst.md`, `00-context/kernzoekwoorden.md`

## Status
- De contextlaag en auditlaag zijn aanwezig en bruikbaar.
- Latere promptlagen kunnen nog scaffolded of gedeeltelijk ingevuld zijn.
- De contextlaag blijft bedoeld om latere promptlagen te voeden zodra die verder zijn uitgewerkt.
- Gebruik de matrix hierboven om te bepalen welke context minimaal geladen moet worden per prompttype.
- Bij live browse mogen competitorbronnen tijdens de audit worden ontdekt; bij incomplete live toegang val je terug op aangeleverde evidence-only inputs.
