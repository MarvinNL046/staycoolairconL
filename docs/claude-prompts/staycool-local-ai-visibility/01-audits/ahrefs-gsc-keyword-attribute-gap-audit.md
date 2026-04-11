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

## Prompt
Vergelijk Ahrefs- en GSC-termen met de bestaande StayCool-copy.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel `airco` en `thuisbatterijen` apart;
- gebruik Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt.

Maak een prioriteitstabel met exact deze kolommen:
- `zoekvraag`
- `ontbrekend attribuut`
- `aanbevolen pagina`
- `impact`

Werk alleen met termen die echt in de input voorkomen of duidelijk uit de exports blijken.
Koppel elke zoekvraag aan de huidige content en benoem waar de copy nog te dun of te impliciet is.

## Verwachte output
- Een prioriteitstabel met de gevraagde kolommen.
- Een apart blok voor `airco` en `thuisbatterijen`.
- Een korte samenvatting van de grootste keyword-attribute gaps.
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`

## Klaarcheck
- Ik heb GSC- en Ahrefs-termen tegen de bestaande copy gelegd.
- Ik heb de gevraagde prioriteitstabel gemaakt.
- Ik heb `airco` en `thuisbatterijen` apart gehouden.
- Ik heb impact per gap benoemd.
