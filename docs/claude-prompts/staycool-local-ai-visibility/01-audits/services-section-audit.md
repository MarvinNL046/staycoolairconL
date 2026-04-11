# Services Section Audit

## Doel
Controleer of de GBP-servicesectie van StayCool volledig genoeg is opgebouwd voor de actuele dienstverlening en het lokale zoeklandschap.

## Wanneer gebruiken
Gebruik deze prompt wanneer je de servicesectie op GBP wilt vergelijken met de daadwerkelijke positionering en concurrentie.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Target GBP-URL(s) van StayCool
- Competitor GBP-URL(s)
- Target zoektermen passend bij de gekozen modus
- Auditdatum
- Observatievenster / lookback window voor de servicesectieanalyse
- Locatie- en broncontext voor de observatie
- Screenshots of gekopieerde GBP-servicesobservaties
- Laatste zichtbare servicesectie of profielsnapshot

## Prompt
Analyseer de GBP-servicesectie van StayCool en vergelijk die met de kernservices en relevante concurrenten in Limburg breed.

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
- `prioriteit`: `P1` = direct oppakken, `P2` = plannen, `P3` = later.
- `impact`: `hoog`, `middel`, `laag`.

Controleer of de servicesectie voldoende dekking geeft voor:
- installatie;
- onderhoud;
- reparatie;
- advies;
- use-cases;
- regionale servicecontext;
- expliciete attributen.

Markeer:
- ontbrekende services;
- services die te vaag zijn benoemd;
- services die beter als aparte entry of beschrijvingsvariant kunnen terugkomen;
- services die de site al goed ondersteunt en dus logisch zijn om in GBP te versterken.

## Verwachte output
- Een servicematrix met StayCool, ontbrekende services en prioriteit voor de gekozen pijler of pijlers.
- Een apart blok voor de gekozen pijler of pijlers.
- Een lijst met aanbevolen servicebeschrijvingen of toevoegingen.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: directe servicecopy, service-entries of operator-acties die meteen kunnen worden gepubliceerd.
- `Later`

## Klaarcheck
- Ik heb de huidige GBP-servicesectie beoordeeld.
- Ik heb services tegen de site-structuur en positionering gelegd.
- Ik heb `airco` en `thuisbatterijen` apart gehouden.
- Ik heb ontbrekende services en prioriteiten benoemd.
