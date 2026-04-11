# Competitor Map Pack Pattern Audit

## Doel
Ontdek welke terugkerende patronen in de Google Maps Map Pack zichtbaar zijn bij concurrenten, zodat StayCool weet welke presentatie-elementen lokaal vertrouwen en relevantie sturen.

## Wanneer gebruiken
Gebruik deze prompt wanneer je patronen wilt herkennen in concurrenten die steeds terugkomen in lokale zoekresultaten.

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
- Gebruik de aangeleverde `Target zoektermen` passend bij de gekozen modus
- Screenshots of gekopieerde Google Maps-observaties
- Vastgelegde zoekdatum en gebruikte locatie-instelling

## Prompt
Analyseer de Map Pack-patronen van concurrenten in Google Maps voor Limburg breed.

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

Onderzoek meerdere zoekopdrachten rond de gekozen modus:
- `airco-only`: `airco Limburg`, `airco installatie Limburg`
- `thuisbatterij-only`: `thuisbatterij Limburg`, `thuisbatterij installatie Limburg`
- `mixed`: alle vier zoektermen

Breng per zoekopdracht in kaart:
- welke bedrijven herhaald zichtbaar zijn;
- welke categorieen terugkomen;
- welke review- en trustpatronen terugkomen;
- welke content- of presentatiepatronen zichtbaar zijn;
- welke regionale signalen of serviceclaims opvallen;
- wat StayCool hiervan kan leren.

Maak expliciet onderscheid tussen de gekozen pijler of pijlers.

## Verwachte output
- Metadata-echo:
  - `Auditdatum`
  - locatie/source context
  - exact zoekvenster
- Een tabel per relevante zoekterm met terugkerende bedrijven en patronen.
- Een apart analyseblok voor de gekozen pijler of pijlers.
- Een lijst met Map Pack-patronen die StayCool nu moet spiegelen of overtreffen.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: concrete patroon-acties, observatie-samenvattingen of operator-stappen die direct inzetbaar zijn.
- `Later`

## Klaarcheck
- Ik heb meerdere Map Pack-zoekopdrachten getest.
- Ik heb terugkerende concurrenten en patronen gelogd.
- Ik heb `airco` en `thuisbatterijen` apart gehouden.
- Ik heb bruikbare patrooninzichten geprioriteerd.
