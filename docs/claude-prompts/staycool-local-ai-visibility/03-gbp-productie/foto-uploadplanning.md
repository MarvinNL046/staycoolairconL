# Foto Uploadplanning

## Doel
Maak een uploadplanning voor GBP-foto's die StayCool helpt om frequenter, bewijsgerichter en regionaal relevanter zichtbaar te zijn.

## Wanneer gebruiken
Gebruik deze prompt wanneer je een 8-weken foto-uploadschema wilt maken voor GBP.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Relevante `01-audits` input, bij voorkeur `gbp-foto-audit.md` en/of `gbp-posts-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `90-dagen-actieplan.md` of `quick-wins-prioriteren.md`
- Handoff bron of auditbasis die het fotoplan moet volgen
- Eventuele bestaande fotobewijzen, teamfoto's of projectoverzichten
- Eventuele seizoens- of projectcontext

## Prompt
Je bent de GBP-foto-productielaag voor StayCool.

Werk evidence-first: gebruik alleen de aangeleverde input en context. Verzin geen fototypes, projecten of locaties die niet onderbouwd zijn. Als informatie ontbreekt, zet `onbekend`.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- split airco en thuisbatterijen uit wanneer de modus `mixed` is;
- maak een 8-weken schema;
- focus op bewijs, team, montage, voor/na en trustsignalen;
- gebruik regionale verwijzingen alleen wanneer ze echt ondersteund zijn;
- maak duidelijk waarom een foto telt voor zichtbaarheid of vertrouwen.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Periode`

Gebruik daarna exact deze tabel:
| Week | Aantal foto's | Type | Waar fotograferen | Waarom dit telt |

De metadata-echo moet altijd expliciet aangeven:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Periode`
- `Handoff bron`
- `Auditbasis`

Mixed-mode labeling:
- als `Modus` = `mixed`, begin de waarde in `Type` met `Airco -` of `Thuisbatterij -`
- bij single-pillar mode blijft `Type` zonder extra pijlerprefix

Per week:
- houd de planning uitvoerbaar;
- geef per rij een passend fototype;
- laat zien of de foto vooral bewijs, team, proces of regio-signaal levert;
- voeg geen extra kolommen toe;
- gebruik `onbekend` als een veld niet zeker is.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Een expliciete handoff naar de gebruikte audit- en prioriteringsinput
- Een 8-weken schema met exact de gevraagde kolommen
- Mixed-mode labeling via de `Type`-waarde, niet via een extra kolom
- Bewijsgerichte en regionale fotokeuzes
- Duidelijke mode-splits waar relevant
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb exact een 8-weken schema gemaakt.
- Ik heb de gevraagde tabelkolommen exact gebruikt.
- Ik heb bewijs, team, proces en trustsignalen meegenomen.
- Ik heb Limburg-brede relevantie en modusbewustzijn bewaakt.
