# GBP Foto Audit

## Doel
Analyseer GBP-fotoactiviteit en fotocontent van StayCool en concurrenten, en bepaal welke beelden meer lokale en trust-signalen kunnen leveren.

## Wanneer gebruiken
Gebruik deze prompt wanneer je GBP-foto's wilt vergelijken op activiteit, inhoud en regionale relevantie.

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
- Competitor GBP-URL(s) indien aangeleverd, of de top 3 zichtbare concurrenten uit een eerder Map Pack/category-auditresultaat op dezelfde `Target zoektermen`
- Target zoektermen passend bij de gekozen modus
- Auditdatum
- Observatievenster / lookback window voor de fotoanalyse
- Locatie- en broncontext:
  - platform/source
  - profiel/business
  - bekeken locatie / markt
  - auditdatum
  - observatievenster
- Screenshots of gekopieerde GBP-fotoobservaties
- 90-dagen foto-bewijs of foto-exports per profiel

## Prompt
Analyseer de GBP-foto's van StayCool en relevante concurrenten in Limburg breed.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel alleen de gekozen pijler of pijlers volgens de modus;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.
- leg per observatie vast wat de auditdatum, het lookback window en de broncontext zijn, zodat een herhaalrun vergelijkbaar blijft.
- als screenshots, exports of observaties onvolledig zijn, markeer het item als `onbekend`, noteer welke input ontbreekt en doe geen aannames.

Definieer schalen als volgt:
- `activity score`: `0` = geen zichtbare activiteit, `1` = zeer laag, `2` = laag, `3` = gemiddeld, `4` = hoog, `5` = zeer hoog.
- `prioriteit`: `P1` = direct oppakken, `P2` = plannen, `P3` = later.
- `impact`: `hoog`, `middel`, `laag`.

Voor de laatste 90 dagen:
- noteer fotofrequentie;
- noteer contenttype;
- noteer lokale of regionale signalen;
- geef een activity score per relevante pijler of profiel;
- bepaal quick wins voor de komende 30 dagen.

Let specifiek op:
- werkbus of teambeelden;
- montage- of projectbeelden;
- voor/na-beelden;
- locatie- of regioverwijzingen;
- trustsignalen zoals certificering, merk, team of afwerking;
- verschillen tussen `airco` en `thuisbatterijen`.

## Verwachte output
- Metadata-echo:
  - `Auditdatum`
  - locatie/source context
  - exact observatievenster
  - `Target zoektermen`
  - gebruikte competitor-cohort bron
- Een tabel per relevant profiel met 90-dagenfrequentie, contenttype, regionale signalen en activity score.
- Een lijst met fototypes die StayCool vaker moet publiceren.
- Quick wins
- `Topprioriteiten`
- `Direct publiceerbaar`: concrete foto-opdrachten, caption-ideeën of operator-acties die direct uitvoerbaar zijn.
- `Later`

## Klaarcheck
- Ik heb de laatste 90 dagen expliciet geanalyseerd.
- Ik heb contenttype, regionale signalen en activity score benoemd.
- Ik heb quick wins voor 30 dagen gegeven.
- Ik heb `airco` en `thuisbatterijen` apart gehouden.
