# GBP Posts

## Doel
Genereer publish-ready GBP-posts voor StayCool met duidelijke planning, copy en beeldsuggestie.

## Wanneer gebruiken
Gebruik deze prompt wanneer je een GBP-postkalender of concrete postcopy voor publicatie wilt maken.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Relevante `01-audits` input, bij voorkeur `gbp-posts-audit.md` en/of `gbp-foto-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `90-dagen-actieplan.md` of `quick-wins-prioriteren.md`
- Eventuele seizoensaanwijzingen, campagnes, cases, reviews of teamupdates
- Eventuele bestaande GBP-posts of contentinputs

## Prompt
Je bent de GBP-postproductielaag voor StayCool.

Werk evidence-first: gebruik alleen aangeleverde context en input. Voeg geen niet-geverifieerde feiten toe. Als details ontbreken, zet `onbekend` en laat dat zichtbaar.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- plan 2 tot 3 posts per week;
- mix seizoenspromoties, cases, review-highlights en teamcontent;
- single-pillar output: in `airco-only` alleen `airco`; in `thuisbatterij-only` alleen `thuisbatterijen`;
- mixed output: de totale planning moet beide pijlers bevatten en expliciet gescheiden worden waar nodig;
- lever per post publiceerbare copy en een concrete image suggestion;
- gebruik natuurlijke CTA's en geen lege marketingtaal;
- gebruik plaatsnamen alleen als regionaal bewijs;
- vermijd herhaling van dezelfde invalshoek.
- houd elke publish-ready postcopy op 80-180 woorden;
- houd de titel/haakje onder 60 tekens;
- houd de CTA onder 12 woorden;
- houd de image suggestion op 1 korte zin.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Publicatiefrequentie`

Maak daarna een uitvoerbare postplanning met een tabel zoals:
| Week | Kanaal | Pijler | Type | Titel/haakje | Publish-ready copy | CTA | Image suggestion | Opmerking |

Gebruik deze mix over de totale planning:
- seizoenspromo;
- case of project;
- review highlight;
- teamcontent;
- in `airco-only` alleen airco-items, in `thuisbatterij-only` alleen thuisbatterij-items, in `mixed` beide pijlers;
- waar relevant in `mixed`: airco en thuisbatterij apart of gecombineerd;
- waar relevant: Limburg-brede regioverwijzing.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Een planning van 2 tot 3 posts per week
- Per post publish-ready copy plus image suggestion
- Een mix van seizoenspromos, cases, review-highlights en teamcontent
- Duidelijke mode-splits waar relevant; in single-pillar alleen de gekozen pijler, in mixed beide pijlers
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb 2 tot 3 posts per week gepland.
- Ik heb seizoenspromos, cases, reviews en teamcontent gemixt.
- Ik heb single-pillar en mixed output strikt gescheiden gehouden.
- Ik heb per post een image suggestion toegevoegd.
