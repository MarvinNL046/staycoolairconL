# Ahrefs GSC Keyword Attribute Gap Audit

## Doel
Vergelijk zoekvragen uit Ahrefs en Google Search Console met de huidige copy van StayCool en vertaal de gevonden gaten naar prioriteiten per pagina.

## Wanneer gebruiken
Gebruik deze prompt wanneer je keyworddata wilt koppelen aan ontbrekende attributen en contentkansen.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/airco-pijler.md`
- `00-context/thuisbatterij-pijler.md`
- `00-context/bestaande-site-structuur.md`
- recente Ahrefs- en GSC-export of querylijst
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`

## Prompt
Vergelijk Ahrefs- en GSC-termen met de bestaande StayCool-copy.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel `airco` en `thuisbatterijen` apart;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.

Definieer schalen als volgt:
- `prioriteit`: `P1` = direct oppakken, `P2` = plannen, `P3` = later.
- `impact`: `hoog`, `middel`, `laag`.

Maak een prioriteitstabel met exact deze kolommen:
- `zoekvraag`
- `ontbrekend attribuut`
- `aanbevolen pagina`
- `impact`

Werk alleen met termen die echt in de input voorkomen of duidelijk uit de exports blijken.
Koppel elke zoekvraag aan de huidige content en benoem waar de copy nog te dun of te impliciet is.
Markeer expliciet per zoekvraag:
- `ontbrekende woorden`
- `semantische details`

Voeg daarnaast een korte begeleidende sectie toe met:
- `ontbrekende woorden` per zoekvraag;
- `semantische details` per zoekvraag.

## Verwachte output
- Een prioriteitstabel met de gevraagde kolommen.
- Een begeleidende sectie met `ontbrekende woorden` en `semantische details`.
- Een apart blok voor `airco` en `thuisbatterijen`.
- Een korte samenvatting van de grootste keyword-attribute gaps.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`: concrete copyregels, pagina-aanpassingen of operator-acties die direct kunnen worden uitgevoerd.
- `Later`

## Klaarcheck
- Ik heb GSC- en Ahrefs-termen tegen de bestaande copy gelegd.
- Ik heb de gevraagde prioriteitstabel gemaakt.
- Ik heb `airco` en `thuisbatterijen` apart gehouden.
- Ik heb impact per gap benoemd.
