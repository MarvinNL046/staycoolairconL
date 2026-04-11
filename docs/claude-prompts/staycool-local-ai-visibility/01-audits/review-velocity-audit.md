# Review Velocity Audit

## Doel
Meet de reviewfrequentie, recentheid en ontwikkelsnelheid van StayCool en concurrenten, zodat duidelijk wordt of het profiel actief en actueel oogt.

## Wanneer gebruiken
Gebruik deze prompt wanneer je reviewgroei en reviewcadans wilt vergelijken met de concurrentie.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- `00-context/concurrentenlijst.md` indien beschikbaar
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Target GBP-URL(s) van StayCool
- Competitor GBP-URL(s)
- Target zoektermen passend bij de gekozen modus
- Review snapshots of review-exports
- Laatste relevante reviewvenster per profiel of concurrent

## Prompt
Analyseer de review velocity van StayCool en relevante concurrenten in Limburg breed.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel alleen de gekozen pijler of pijlers volgens de modus;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.

Definieer schalen als volgt:
- `prioriteit`: `P1` = direct oppakken, `P2` = plannen, `P3` = later.
- `impact`: `hoog`, `middel`, `laag`.

Onderzoek minimaal:
- totale reviewaantallen;
- reviewfrequentie in de laatste 90 dagen;
- recency van nieuwe reviews;
- cadence of er pieken en stiltes zijn;
- zichtbare verschillen tussen de gekozen pijler of pijlers waar die bestaan.

Geef ook aan of StayCool minder actief oogt dan concurrenten, en wat dat betekent voor lokale prominentie en vertrouwen.

## Verwachte output
- Een tabel met reviewvolume, reviewgroei, 90-dagenfrequentie en observaties voor de gekozen pijler of pijlers.
- Een apart oordeel per gekozen pijler.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: review-signal acties, voorbeeldvragen of follow-upteksten die direct inzetbaar zijn.
- `Later`

## Klaarcheck
- Ik heb reviewvolume en reviewcadans vergeleken.
- Ik heb de laatste 90 dagen expliciet meegenomen.
- Ik heb `airco` en `thuisbatterijen` apart beoordeeld.
- Ik heb concrete acties voor reviewgroei geprioriteerd.
