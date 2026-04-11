# GBP Attributen Audit

## Doel
Controleer welke GBP-attributen StayCool en concurrenten zichtbaar hebben, en welke attributen nog ontbreken om sterker op lokale attribute match te scoren.

## Wanneer gebruiken
Gebruik deze prompt wanneer je de zichtbare profielattributen in Google Maps wilt vergelijken en wilt vertalen naar concrete profielverbeteringen.

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
- Competitor GBP-URL(s) indien aangeleverd, of top 3 zichtbare concurrenten uit een eerder Map Pack/category-auditresultaat op dezelfde `Target zoektermen`
- Target zoektermen passend bij de gekozen modus
- Screenshots of gekopieerde Google Maps- en GBP-observaties
- Vastgelegde zoekdatum en gebruikte locatie-instelling

## Prompt
Onderzoek de GBP-attributen van StayCool en relevante concurrenten in Limburg breed.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel alleen de gekozen pijler of pijlers volgens de modus;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.
- als screenshots, exports of observaties onvolledig zijn, markeer het item als `onbekend`, noteer welke input ontbreekt en doe geen aannames.

Definieer schalen als volgt:
- `prioriteit`: `P1` = direct oppakken, `P2` = plannen, `P3` = later.
- `impact`: `hoog`, `middel`, `laag`.

Breng in kaart:
- welke attributen zichtbaar zijn bij StayCool;
- welke attributen concurrenten zichtbaar hebben;
- welke attributen per pijler relevant zijn, maar ontbreken;
- welke attributen vermoedelijk meer impact hebben op lokale relevantie en klikintentie.

Vergelijk expliciet:
- services/aanbod;
- toegankelijkheid;
- planning of beschikbaarheid;
- advies- of offerte-attributen;
- trust- en certificeringssignalen;
- regionale signalen.

Sluit af met een prioriteitenlijst voor attribute gaps.

## Verwachte output
- Metadata-echo:
  - `Auditdatum`
  - locatie/source context
  - profiel/snapshot context
  - `Target zoektermen`
  - gebruikte competitor-cohort bron
- Een attributentabel per pijler met StayCool versus concurrenten.
- Een gap-overzicht met ontbrekende of zwakke attributen.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: concrete attribuut-aanpassingen, copyregels of operator-acties die direct kunnen worden uitgevoerd.
- `Later`

## Klaarcheck
- Ik heb de zichtbare attributen van StayCool en concurrenten verzameld.
- Ik heb `airco` en `thuisbatterijen` apart gehouden.
- Ik heb duidelijke attribuutgaps benoemd.
- Ik heb concrete opvolgacties geprioriteerd.
