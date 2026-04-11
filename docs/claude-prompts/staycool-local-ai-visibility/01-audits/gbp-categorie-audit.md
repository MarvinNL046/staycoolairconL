# GBP Categorie Audit

## Doel
Breng in kaart welke GBP-categorieen StayCool en relevante concurrenten gebruiken, en waar StayCool categorie-ruimte mist voor `airco` en `thuisbatterijen` in Limburg breed.

## Wanneer gebruiken
Gebruik deze prompt wanneer je de categoriepositie in Google Maps wilt vergelijken met zichtbare concurrenten op lokale zoekopdrachten.

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
- Screenshots of gekopieerde Google Maps- en GBP-observaties
- Vastgelegde zoekdatum en gebruikte locatie-instelling

## Prompt
Open Google Maps en onderzoek StayCool plus zichtbare concurrenten in Limburg breed.

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

Voer meerdere zoekopdrachten uit voor de gekozen modus:
- `airco-only`: `airco Limburg`, `airco installatie Limburg`
- `thuisbatterij-only`: `thuisbatterij Limburg`, `thuisbatterij installatie Limburg`
- `mixed`: alle vier zoektermen

Voor elke zoekopdracht:
- log welke concurrenten telkens terugkomen;
- noteer de primaire categorie van StayCool en de concurrenten;
- noteer alle zichtbare secundaire categorieen of categorievarianten;
- vergelijk StayCool met de concurrenten;
- maak een tabel per zoekterm;
- highlight welke categorieen StayCool mist of te zwak benut.

Check expliciet of de categorieen beter passen bij installatie, onderhoud, advies, energieopslag of bredere klimaatoplossingen.

## Verwachte output
- Een tabel per relevante zoekterm met zoekterm, zichtbare concurrenten, primaire categorieen, secundaire categorieen en observaties.
- Een apart overzicht voor de gekozen pijler of pijlers.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: concrete categorie-aanpassingen, copyregels of operator-acties die direct kunnen worden uitgevoerd.
- `Later`

## Klaarcheck
- Ik heb meerdere relevante zoekopdrachten in Google Maps getest.
- Ik heb per zoekterm de concurrenten gelogd.
- Ik heb primaire en secundaire categorieen verzameld.
- Ik heb StayCool tegen de concurrenten vergeleken.
- Ik heb ontbrekende categorieen expliciet gemarkeerd.
