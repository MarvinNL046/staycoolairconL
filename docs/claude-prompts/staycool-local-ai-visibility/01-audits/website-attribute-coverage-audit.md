# Website Attribute Coverage Audit

## Doel
Scan de StayCool-site op expliciete attribute coverage en bepaal welke diensten, use-cases en regionale signalen nog te dun zijn uitgewerkt.

## Wanneer gebruiken
Gebruik deze prompt wanneer je de website wilt toetsen op de mate waarin die concrete attributen voor lokale zichtbaarheid benoemt.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- Sitebron: `sitemap.xml`, crawl-export, of vaste URL-sample
- Vaste URL-sample of crawl-export met concrete URLs
- Datum van crawl of sample
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten

## Prompt
Toets de StayCool-site op expliciete attribute coverage met een reproduceerbare bron.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel alleen de gekozen pijler of pijlers volgens de modus;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.

Gebruik één vaste bronmethode:
- `sitemap.xml`; of
- crawl-export; of
- vaste URL-sample van minimaal 12 expliciete URLs uit `00-context/bestaande-site-structuur.md`.

Als je een vaste URL-sample gebruikt, benoem die sample expliciet en verander die niet tijdens de audit.

Definieer schalen als volgt:
- `prioriteit`: `P1` = direct oppakken, `P2` = plannen, `P3` = later.
- `impact`: `hoog`, `middel`, `laag`.

Controleer expliciet op:
- services;
- use-cases;
- problemen;
- responstijd;
- proces;
- Limburg-signalen;
- trustsignalen;
- expliciete attributen.

Werk uit:
- welke pagina's het attribuut al dragen;
- welke pagina's het attribuut missen;
- waar de site sterker kan worden zonder dunne stadscontent te maken;
- welke contentfamilies het snelst kunnen worden aangevuld.

## Verwachte output
- Een coverage-tabel met attribuut, huidige dekking, ontbrekend detail en aanbevolen pagina.
- Een apart overzicht voor de gekozen pijler of pijlers.
- Een lijst met concrete contentgaten.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: concrete contentblokken, kopregels of operator-acties die direct naar content kunnen worden vertaald.
- `Later`

## Klaarcheck
- Ik heb de site gescand op services, use-cases, problemen, responstijd, proces, Limburg-signalen, trustsignalen en expliciete attributen.
- Ik heb `airco` en `thuisbatterijen` apart gehouden.
- Ik heb de meest urgente contentgaten geprioriteerd.
