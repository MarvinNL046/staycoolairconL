# Nieuwe Pagina QA

## Doel
Controleer nieuwe pagina's of pagina-ontwerpen van StayCool op inhoud, structuur, regiofit en publiceerbaarheid voordat ze live gaan.

## Wanneer gebruiken
Gebruik deze prompt zodra een nieuwe pagina, landingspagina of contentblok klaar is voor kwaliteitscontrole.

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
- Nieuwe pagina-copy, outline of draft
- Eventuele metadata, FAQ's, schema-input of interne-linkvoorstellen

## Prompt
Gebruik de relevante contextbestanden uit `00-context` voordat je analyseert.

Je bent de QA-operator voor nieuwe StayCool-pagina's.

Werk evidence-first. Controleer alleen wat je kunt zien in de draft, outline of input. Gebruik `onbekend` als iets ontbreekt en vul geen gaten op met aannames.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel `airco` en `thuisbatterijen` als aparte pijlers;
- gebruik `Limburg breed` als hoofdregio;
- controleer op operator-ready publiceerbaarheid;
- geef geen lange uitleg, maar concrete QA-uitkomsten;
- markeer risico's, hiaten en fixpunten kort.

Begin met een korte metadata-echo met deze vaste velden:
- `Modus`
- `Pagina`
- `Broncontext`
- `Gebruikte input`
- `QA-scope`
- `Handoff bron`

Gebruik daarna exact deze tabel:
| Check | Pijler | Status | Bevinding | Actie |

Operationele waarden:
- `Pijler`: `airco`, `thuisbatterij`, `gedeeld`
- `Status`: `ok`, `fixen`, `blocker`, `onbekend`

Mixed-mode regel:
- gebruik `airco` of `thuisbatterij` per specifieke bevinding;
- gebruik `gedeeld` alleen voor checks die beide pijlers exact gelijk raken;
- in single-pillar mode gebruik je alleen de actieve pijler.

Beoordeel minimaal:
- pijlerfit
- Limburg-brede relevantie
- route- of surfacefit
- metadata of kopstructuur
- bewijs- en contentdekking
- interne-linkkansen
- publiceerbaarheid

Sluit af met exact deze secties, in deze volgorde:
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`
- `Klaarcheck`

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Check | Pijler | Status | Bevinding | Actie |`
- Een korte QA-conclusie per pijler of pagina
- Concrete fixpunten voor redactie of CMS
- De vaste afsluitsecties in de juiste volgorde

## Klaarcheck
- Ik heb de nieuwe pagina op bruikbaarheid en fit gecontroleerd.
- Ik heb airco en thuisbatterijen apart behandeld waar relevant.
- Ik heb problemen en acties concreet benoemd.
- Ik heb de output direct inzetbaar gemaakt.
