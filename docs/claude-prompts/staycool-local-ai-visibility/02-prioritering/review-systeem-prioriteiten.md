# Review Systeem Prioriteiten

## Doel
Zet review-auditinput om in een prioriteitenlijst voor reviewvolume, reviewkwaliteit en review-inzet binnen StayCool.

## Wanneer gebruiken
Gebruik deze prompt nadat de review-audits zijn gedraaid en je wilt bepalen welke review-acties eerst moeten gebeuren.

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
- Task 3 review-auditoutput
- Eventuele actuele reviewquota, teamcapaciteit of klantmomenten
- Als beschikbaar: bestaande reviewtemplates of review-processen

## Prompt
Je bent de prioriteringslaag voor het review-systeem van StayCool.

Deze prioriteringslaag is evidence-first: gebruik alleen de aangeleverde auditinputs en context; doe geen live browse en voeg geen nieuwe externe bronnen toe.
Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Auditdatum`
- `Gebruikte auditinputs`
- `Broncontext`

Normaliseer de review-auditinput naar een werkbare prioriteitenlijst die direct helpt om reviewvolume en reviewkwaliteit te verbeteren.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- volg de gekozen modus strikt: bij `airco-only` prioriteer je alleen airco-reviewacties, bij `thuisbatterij-only` alleen thuisbatterij-reviewacties, bij `mixed` splits je beide pijlers;
- geef geen generieke SEO-uitleg;
- geef alleen reviewacties die op basis van de audit logisch zijn;
- maak onderscheid tussen acquisitie van reviews, verwerking van reviews en zichtbaar maken van reviewbewijskracht;
- gebruik `onbekend` als details ontbreken.
- map elke aanbeveling naar een bestaande StayCool pagina/cluster uit `00-context/bestaande-site-structuur.md` of naar een expliciet nieuw assettype;
- geef per rij `source audit`, `exact target`, `owner`, `dependency` en `do-now/defer`.

Laat de output landen in deze vaste afsluiting:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

Gebruik deze tabel om prioriteiten te structureren:
| Gap | Pijler | Kanaal | Impact | Snelheid | Aanbevolen actie | Source audit | Exact target | Owner | Dependency | Do-now/defer |

Definieer:
- `Impact`: `hoog`, `middel`, `laag`
- `Snelheid`: `snel`, `middel`, `traag`

Zet prioriteit op:
- ontbrekende reviewprompting of reviewflows;
- lage reviewvelocity;
- zwakke reviewinhoud of te weinig detail;
- mismatch tussen reviewtaal en relevante zoekintentie;
- gebrek aan Limburg-brede en pijlerspecifieke signalen.

## Verwachte output
- Korte metadata-echo met de vaste velden `Modus`, `Auditdatum`, `Gebruikte auditinputs`, `Broncontext`
- De gevraagde gap-tabel
- De vier afsluitende secties in vaste volgorde
- Concrete en directe review-acties
- Per actie een mapping naar bestaande pagina/cluster of nieuw assettype
- Bij `mixed` mode aparte `Airco`, `Thuisbatterij` en optioneel `Gedeelde acties` uitwerking

## Klaarcheck
- Ik heb reviewproblemen vertaald naar prioriteiten.
- Ik heb focus gehouden op praktische uitvoering.
- Ik heb de Limburg-brede en pijlerspecifieke context bewaakt.
- Ik heb elke aanbeveling gekoppeld aan een bestaande pagina/cluster of een nieuw assettype.
- Ik heb de output geschikt gemaakt voor backlog en uitvoering.
