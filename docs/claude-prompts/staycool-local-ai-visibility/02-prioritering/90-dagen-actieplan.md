# 90 Dagen Actieplan

## Doel
Zet de Task 3-audits om in een uitvoerbaar 90-dagenplan voor StayCool, met een realistische maandvolgorde en duidelijke focus per kanaal.

## Wanneer gebruiken
Gebruik deze prompt wanneer je na de audits een kwartaalplan nodig hebt dat de operator direct kan uitvoeren en opvolgen.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- Relevante pijlercontext op basis van de modus:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Samengevoegde Task 3-auditoutput
- Eventuele bestaande backlog, capaciteit of seizoensdruk
- Als beschikbaar: huidige status van GBP, reviews, website en contentproductie

## Prompt
Je bent de prioriteringslaag voor een 90-dagenuitvoering bij StayCool.

Werk de aangeleverde auditinput uit naar een plan dat logisch oplopen in risico, afhankelijkheden en snelheid.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- volg de gekozen modus strikt: bij `airco-only` plan je alleen airco-acties, bij `thuisbatterij-only` alleen thuisbatterij-acties, bij `mixed` splits je per pijler;
- geef geen generieke SEO-uitleg;
- maak het plan operationeel, niet strategisch vaag;
- zet acties alleen in een maand als ze binnen die maand uitvoerbaar zijn;
- gebruik `onbekend` als input ontbreekt.
- map elke actie naar óf een bestaande StayCool pagina/cluster uit `00-context/bestaande-site-structuur.md`, óf een expliciet nieuw assettype;
- gebruik per actie de velden `source audit`, `exact target`, `owner`, `dependency` en `do-now/defer`.
- in `mixed` mode maak je per maand aparte blokken voor `Airco`, `Thuisbatterij` en optioneel `Gedeelde acties`; in single-pillar mode toon je alleen de relevante pijlerblokken.

Maak het plan onder deze structuur:
## Maand 1
- Airco
- Thuisbatterij
- Gedeelde acties

## Maand 2
- Airco
- Thuisbatterij
- Gedeelde acties

## Maand 3
- Airco
- Thuisbatterij
- Gedeelde acties

Per maand:
- gebruik per blok de subregels `GBP`, `Reviews`, `Website`, `Content`, `Meting` alleen als die voor de modus relevant zijn;
- vermeld per regel `source audit`, `exact target`, `owner`, `dependency` en `do-now/defer`;
- benoem wat direct moet gebeuren en wat kan wachten;
- koppel zo mogelijk een eigenaar of discipline;
- geef alleen acties die passen bij de auditinput.

## Verwachte output
- Korte metadata-echo
- `Maand 1`, `Maand 2` en `Maand 3` met per maand de relevante pijlerblokken en optioneel `Gedeelde acties`
- Een uitvoerbare actietabel per blok met `source audit`, `exact target`, `owner`, `dependency` en `do-now/defer`
- Een korte risico- of afhankelijkhedennoot als dat helpt
- `Klaarcheck`

## Topprioriteiten

## Quick wins

## Direct publiceerbaar

## Later

## Klaarcheck
- Ik heb een realistisch 90-dagenplan gemaakt op basis van de audits.
- Ik heb per maand de relevante pijlerblokken en, waar relevant, gedeelde acties meegenomen.
- Ik heb geen losse adviespraat toegevoegd die niet uitvoerbaar is.
- Ik heb de Limburg-brede focus en pijlerscheiding bewaakt.
- Ik heb elke actie gekoppeld aan een bestaande pagina/cluster of een nieuw assettype.
