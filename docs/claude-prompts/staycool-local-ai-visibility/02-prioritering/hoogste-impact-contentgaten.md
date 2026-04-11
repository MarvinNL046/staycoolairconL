# Hoogste Impact Contentgaten

## Doel
Prioriteer de contentgaten uit de audits op basis van impact, snelheid en publiceerbaarheid voor StayCool.

## Wanneer gebruiken
Gebruik deze prompt wanneer je wilt weten welke contentgaten eerst moeten worden gevuld om lokale zichtbaarheid en AI attribute match te versterken.

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
- Task 3 content- en website-auditoutput
- Eventuele site- of servicebeperkingen
- Indien beschikbaar: huidige contentkalender of productiecapaciteit

## Prompt
Je bent de prioriteringslaag voor contentgaten bij StayCool.

Deze prioriteringslaag is evidence-first: gebruik alleen de aangeleverde auditinputs en context; doe geen live browse en voeg geen nieuwe externe bronnen toe.
Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Auditdatum`
- `Gebruikte auditinputs`
- `Broncontext`

Zet de aangeleverde auditinput om in een beslisbare rangorde van contentgaten die direct relevant zijn voor Limburg breed.

Volg deze regels:
- antwoord volledig in Nederlands;
- volg de gekozen modus strikt: bij `airco-only` rangschik je alleen airco-contentgaten, bij `thuisbatterij-only` alleen thuisbatterij-contentgaten, bij `mixed` splits je beide pijlers;
- geef geen generieke SEO-uitleg;
- focus op concrete contentgaten die echt een verschil maken voor lokale zichtbaarheid;
- maak onderscheid tussen content die snel live kan en content die later pas logisch is;
- zet `onbekend` waar de auditinput niet genoeg detail geeft.
- map elk gap naar een bestaande StayCool pagina/cluster uit `00-context/bestaande-site-structuur.md` of naar een expliciet nieuw assettype;
- geef per rij `source audit`, `exact target`, `owner`, `dependency` en `do-now/defer`.

Werk de gaten uit langs deze tabel:
| Gap | Pijler | Kanaal | Impact | Snelheid | Aanbevolen actie | Source audit | Exact target | Owner | Dependency | Do-now/defer |

Definieer:
- `Impact`: `hoog`, `middel`, `laag`
- `Snelheid`: `snel`, `middel`, `traag`

Rangschik eerst de gaten die het meeste effect hebben op zichtbaarheid, relevantie of klikintentie.

Sluit af met deze secties:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden `Modus`, `Auditdatum`, `Gebruikte auditinputs`, `Broncontext`
- De gevraagde gap-tabel
- De vier afsluitende secties in bovenstaande volgorde
- Alleen aanbevelingen die uit de audits volgen
- Per aanbeveling een mapping naar bestaande pagina/cluster of nieuw assettype
- Bij `mixed` mode aparte `Airco`, `Thuisbatterij` en optioneel `Gedeelde acties` uitwerking

## Klaarcheck
- Ik heb de contentgaten geordend op impact en snelheid.
- Ik heb de Limburg-brede context gebruikt.
- Ik heb `airco` en `thuisbatterijen` gescheiden gehouden waar nodig.
- Ik heb elke gap gekoppeld aan een bestaande pagina/cluster of een nieuw assettype.
- Ik heb de output direct publiceerbaar of planbaar gemaakt.
