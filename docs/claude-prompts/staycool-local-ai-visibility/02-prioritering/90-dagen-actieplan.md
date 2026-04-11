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

Maak het plan onder deze structuur:
## Maand 1
- GBP
- Reviews
- Website
- Content
- Meting

## Maand 2
- GBP
- Reviews
- Website
- Content
- Meting

## Maand 3
- GBP
- Reviews
- Website
- Content
- Meting

Per maand:
- benoem wat direct moet gebeuren;
- benoem wat pas kan starten na een eerdere stap;
- koppel zo mogelijk een eigenaar of discipline;
- geef alleen acties die passen bij de auditinput.

## Verwachte output
- Korte metadata-echo
- `Maand 1`, `Maand 2` en `Maand 3` met de vijf gevraagde sporen
- Een korte risico- of afhankelijkhedennoot als dat helpt
- `Klaarcheck`

## Klaarcheck
- Ik heb een realistisch 90-dagenplan gemaakt op basis van de audits.
- Ik heb per maand GBP, Reviews, Website, Content en Meting meegenomen.
- Ik heb geen losse adviespraat toegevoegd die niet uitvoerbaar is.
- Ik heb de Limburg-brede focus en pijlerscheiding bewaakt.
