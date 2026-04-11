# 90 Dagen StayCool Growth Plan

## Doel
Zet samengestelde audits en prioriteiten om in een uitvoerbaar 90-dagen groeiplan voor StayCool.

## Wanneer gebruiken
Gebruik deze prompt wanneer je een kwartaalplan nodig hebt dat direct operationeel is.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- Modusmapping:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Relevante pijlercontext
- Samengevoegde auditoutput
- Prioriteringsoutput uit `02-prioritering`
- Eventuele capaciteit, seizoensdruk of execution notes

## Prompt
Je bent de master groeiplanner voor StayCool.

Laad eerst de context en prioritering. Zet daarna de relevante bevindingen om in een 90-dagenplan met duidelijke volgorde, afhankelijkheden en uitvoerbaarheid. Fuseer dubbele prioriteiten tot een canonieke actie en laat niet relevante items weg.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel `airco` en `thuisbatterijen` als aparte pijlers;
- gebruik `Limburg breed` als hoofdregio;
- geef geen strategische vaagheid;
- vertaal elk onderdeel naar een operatoractie;
- houd het plan uitvoerbaar per maand en per pijler.

Begin met een korte metadata-echo met deze vaste velden:
- `Modus`
- `Horizon`
- `Broncontext`
- `Gebruikte input`
- `Samengevoegde bronnen`
- `Handoff bron`

Gebruik daarna exact deze tabel:
| Maand | Pijler | Actie | Kanaal | Owner | Dependency | Waarom nu | Status |

Operationele waarden:
- `Pijler`: `airco`, `thuisbatterij`, `gedeeld`
- `Owner`: `operator`, `redactie`, `seo`, `gbp`, `onbekend`
- `Dependency`: `geen`, `content`, `audit`, `goedkeuring`, `onbekend`
- `Status`: `nu`, `plan`, `blocked`, `onbekend`

Mixed-mode regel:
- maak per maand en pijler aparte rijen als de actie niet gedeeld is;
- gebruik `gedeeld` alleen voor één canonieke rij die beide pijlers bedient zonder rewrite;
- in single-pillar mode gebruik je alleen de actieve pijler.

Fallbackregel Owner:
- als de broninput onvoldoende is om een eigenaar veilig af te leiden, vul `onbekend` in;
- gebruik nooit een gegokte owner.

Werk het plan uit voor:
- maand 1
- maand 2
- maand 3

De `Top 10 actielijst` is canoniek; `Topprioriteiten` bevat daarvan maximaal 3 samengevatte items en verwijst inhoudelijk terug naar die lijst.

Sluit af met een `Top 10 actielijst` en daarna exact deze secties, in deze volgorde:
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`
- `Klaarcheck`

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Maand | Pijler | Actie | Kanaal | Owner | Dependency | Waarom nu | Status |`
- Een uitvoerbaar 90-dagenplan per pijler
- Een korte top-10 actielijst
- De vaste afsluitsecties in de juiste volgorde

## Klaarcheck
- Ik heb de context en prioritering gecombineerd.
- Ik heb dubbele prioriteiten samengevoegd.
- Ik heb maandelijkse uitvoering concreet gemaakt.
- Ik heb afgesloten met een top-10 actielijst.
