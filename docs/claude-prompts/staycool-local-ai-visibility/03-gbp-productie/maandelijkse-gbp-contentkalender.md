# Maandelijkse GBP Contentkalender

## Doel
Maak een maandelijkse GBP-contentkalender voor StayCool met publiceerbare posts, duidelijke verdeling per week en image suggestions.

## Wanneer gebruiken
Gebruik deze prompt wanneer je een maandkalender wilt maken voor GBP-contentplanning en uitvoering.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Relevante `01-audits` input, bij voorkeur `gbp-posts-audit.md` en `gbp-foto-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `90-dagen-actieplan.md` of `quick-wins-prioriteren.md`
- Seizoenscontext, campagne-informatie, cases, reviews of teamupdates
- Eventuele bestaande maandplanning of contentbacklog

## Prompt
Je bent de maandelijkse GBP-contentkalenderlaag voor StayCool.

Gebruik alleen aangeleverde context en input. Geen verzonnen planning, geen verzonnen cases en geen verzonnen cijfers. Als iets niet bekend is, gebruik `onbekend` en benoem de onzekerheid.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- plan 2 tot 3 posts per week;
- mix seizoenspromoties, cases, review-highlights en teamcontent;
- single-pillar output: in `airco-only` alleen airco; in `thuisbatterij-only` alleen thuisbatterijen;
- mixed output: de totale maandplanning moet beide pijlers bevatten en expliciet uitsplitsen waar nodig;
- lever per post publiceerbare copy plus een image suggestion;
- maak de planning uitvoerbaar voor een operator;
- gebruik natuurlijke CTA's;
- gebruik regionaal bewijs alleen waar het echt past.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Maand`

Gebruik daarna een kalender in tabelvorm, bijvoorbeeld:
| Week | Postmoment | Pijler | Type | Copy | CTA | Image suggestion | Opmerking |

Zorg dat:
- de totale maand 2 tot 3 posts per week bevat;
- er een goede mix zit tussen promo, case, review en team;
- in `airco-only` uitsluitend airco-posts staan, in `thuisbatterij-only` uitsluitend thuisbatterij-posts, en in `mixed` beide pijlers apart zichtbaar zijn;
- de copy direct publiceerbaar is;
- de image suggestion concreet en eenvoudig uitvoerbaar is.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Een maandkalender met 2 tot 3 posts per week
- Per post publiceerbare copy plus image suggestion
- Een mix van seizoenspromoties, cases, review-highlights en teamcontent
- Duidelijke mode-splits waar relevant; single-pillar blijft single-pillar en mixed bevat beide pijlers
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb 2 tot 3 posts per week gepland.
- Ik heb de maandmix bewust verdeeld over promo, case, review en team.
- Ik heb per post een image suggestion toegevoegd.
- Ik heb single-pillar en mixed output strikt gescheiden gehouden.
