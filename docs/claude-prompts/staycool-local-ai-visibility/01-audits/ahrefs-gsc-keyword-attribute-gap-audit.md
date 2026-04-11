# Ahrefs GSC Keyword Attribute Gap Audit

## Doel
Vergelijk zoekvragen uit Ahrefs en Google Search Console met de huidige copy van StayCool en vertaal de gevonden gaten naar prioriteiten per pagina.

## Wanneer gebruiken
Gebruik deze prompt wanneer je keyworddata wilt koppelen aan ontbrekende attributen en contentkansen.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- recente Ahrefs- en GSC-export of querylijst
- Exportdatum
- Lookback window
- Source/account
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Target zoektermen passend bij de gekozen modus
- Ahrefs- en GSC-export of querylijst passend bij de gekozen modus

## Prompt
Vergelijk Ahrefs- en GSC-termen met de bestaande StayCool-copy.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel alleen de gekozen pijler of pijlers volgens de modus;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.
- gebruik alleen de gekozen modus en laat de niet-relevante pijler weg.
- als exports of copy-observaties onvolledig zijn, markeer het item als `onbekend`, noteer welke input ontbreekt en doe geen aannames.

Maak de output conditoneel:
- `airco-only` -> alleen airco-context, alleen airco-zoekvragen, alleen airco-outputblok.
- `thuisbatterij-only` -> alleen thuisbatterij-context, alleen thuisbatterij-zoekvragen, alleen thuisbatterij-outputblok.
- `mixed` -> beide contexten, beide zoektermsets, beide outputblokken.

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
- Echo van de exportmetadata: `Exportdatum`, `Lookback window`, `Source/account`
- Een prioriteitstabel met de gevraagde kolommen voor de gekozen modus.
- Een begeleidende sectie met `ontbrekende woorden` en `semantische details` voor de gekozen modus.
- Een apart blok voor de gekozen pijler of pijlers.
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
