# GBP Posts Audit

## Doel
Beoordeel GBP-postactiviteit van StayCool en concurrenten en vertaal de inhoud naar kansen voor meer zichtbaarheid en meer lokale relevantie.

## Wanneer gebruiken
Gebruik deze prompt wanneer je de recentheid, inhoud en regionale signalen van GBP-posts wilt vergelijken.

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
- Screenshots of gekopieerde GBP-postobservaties
- 90-dagen postbewijs of post-exports per profiel

## Prompt
Analyseer de GBP-posts van StayCool en relevante concurrenten in Limburg breed.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel `airco` en `thuisbatterijen` apart;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.

Definieer schalen als volgt:
- `activity score`: `0` = geen zichtbare activiteit, `1` = zeer laag, `2` = laag, `3` = gemiddeld, `4` = hoog, `5` = zeer hoog.
- `prioriteit`: `P1` = direct oppakken, `P2` = plannen, `P3` = later.
- `impact`: `hoog`, `middel`, `laag`.

Voor de laatste 90 dagen:
- noteer postfrequentie;
- noteer contenttype;
- noteer lokale of regionale signalen;
- geef een activity score per profiel;
- bepaal quick wins voor de komende 30 dagen.

Laat zien of de posts vooral promotioneel, informatief, bewijsgericht of regionaal zijn, en of ze voldoende aansluiten op de service- en attributentaal van StayCool.

## Verwachte output
- Een tabel per profiel met 90-dagenfrequentie, contenttype, regionale signalen en activity score.
- Een lijst met contenttypes die StayCool vaker moet posten.
- Quick wins voor de komende 30 dagen.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: concrete postideeën, postkoppen of operator-acties voor de komende 30 dagen.
- `Later`

## Klaarcheck
- Ik heb de laatste 90 dagen expliciet geanalyseerd.
- Ik heb contenttype, regionale signalen en activity score benoemd.
- Ik heb quick wins voor 30 dagen gegeven.
- Ik heb `airco` en `thuisbatterijen` apart gehouden.
