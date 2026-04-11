# Review Attribute Audit

## Doel
Analyseer reviews van StayCool en concurrenten op concrete attributen die lokale zichtbaarheid versterken, en bepaal welke reviewtaal nog ontbreekt.

## Wanneer gebruiken
Gebruik deze prompt wanneer je reviewinhoud wilt vertalen naar meetbare attribute match voor GBP en website.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/airco-pijler.md`
- `00-context/thuisbatterij-pijler.md`
- `00-context/bestaande-site-structuur.md`
- `00-context/concurrentenlijst.md` indien beschikbaar
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- Target GBP-URL(s) van StayCool
- Competitor GBP-URL(s)
- Target zoektermen
- Review snapshots of review-exports
- Laatste relevante reviewvenster per profiel of concurrent

## Prompt
Lees de laatste relevante reviews van StayCool en concurrenten.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel `airco` en `thuisbatterijen` apart;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.

Definieer schalen als volgt:
- `prioriteit`: `P1` = direct oppakken, `P2` = plannen, `P3` = later.
- `impact`: `hoog`, `middel`, `laag`.

Extra instructie:
- lees de reviews inhoudelijk, niet alleen op sterren;
- extraheer expliciet genoemde services;
- extraheer expliciet genoemde situaties;
- extraheer expliciet genoemde regio's of plaatsen;
- extraheer expliciet genoemde snelheid of responstijd;
- extraheer expliciet genoemde resultaten of uitkomsten;
- label alle bevindingen apart voor `airco` en voor `thuisbatterijen`.

Maak onderscheid tussen:
- klanttaal die al aanwezig is;
- klanttaal die StayCool nog nauwelijks oproept;
- taal die concurrenten wél laten terugkomen.

Eindig met de review-attributen die StayCool actief moet verzamelen via reviewverzoeken en follow-ups.

## Verwachte output
- Een review-attributentabel per pijler met voorbeelden uit reviews.
- Een lijst met herhaalde reviewpatronen en ontbrekende reviewtaal.
- Een slotblok met ontbrekende review-attributen die StayCool actief moet verzamelen.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: ready-to-publish reviewvragen, follow-upzinnen of operator-acties om meteen te gebruiken.
- `Later`

## Klaarcheck
- Ik heb reviews van StayCool en concurrenten gelezen.
- Ik heb services, situaties, regio's, snelheid en resultaten geëxtraheerd.
- Ik heb `airco` en `thuisbatterijen` apart gelabeld.
- Ik heb de ontbrekende review-attributen expliciet afgesloten.
