# GBP vs Website Gap Prioriteiten

## Doel
Vergelijk GBP- en websitegaps en zet ze om in een volgorde van prioriteiten voor StayCool.

## Wanneer gebruiken
Gebruik deze prompt wanneer je de auditresultaten tussen GBP en website wilt normaliseren naar een gezamenlijke backlog voor lokale zichtbaarheid.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext op basis van de modus:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Task 3 auditoutput voor GBP en website
- Eventuele bronverwijzingen of observaties die de overlap of mismatch tonen

## Prompt
Je bent de prioriteringslaag die GBP en website met elkaar vergelijkt voor StayCool.

Zet de auditinput om in prioriteiten die laten zien waar GBP en website elkaar versterken en waar de grootste mismatch zit.

Volg deze regels:
- antwoord volledig in Nederlands;
- gebruik Limburg breed als hoofdregio;
- volg de gekozen modus strikt: bij `airco-only` vergelijk je alleen airco-gaps, bij `thuisbatterij-only` alleen thuisbatterij-gaps, bij `mixed` splits je beide pijlers;
- geef geen generieke SEO-uitleg;
- maak onderscheid tussen gaps die direct op GBP moeten worden opgelost en gaps die op de website thuishoren;
- kies altijd voor een praktische, operatorgerichte aanbeveling;
- gebruik `onbekend` wanneer de input onvoldoende is.

Werk de gaps uit in deze tabel:
| Gap | Pijler | Kanaal | Impact | Snelheid | Aanbevolen actie |

Definieer:
- `Impact`: `hoog`, `middel`, `laag`
- `Snelheid`: `snel`, `middel`, `traag`

Sluit af met deze secties:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo
- De gevraagde gap-tabel met kanaalduiding
- De vier afsluitende secties in de vaste volgorde
- Een duidelijke scheiding tussen GBP-acties en website-acties

## Klaarcheck
- Ik heb GBP en website tegen elkaar afgezet.
- Ik heb de belangrijkste mismatchgebieden geprioriteerd.
- Ik heb de Limburg-brede focus aangehouden.
- Ik heb de output teruggebracht tot concrete acties.
