# Nieuwe Servicepagina's

## Doel
Genereer nieuwe, publiceerbare servicepagina-ideeën voor StayCool die aansluiten op de huidige site-structuur, de auditgaten en de prioriteiten uit de handoff.

## Wanneer gebruiken
Gebruik deze prompt wanneer je nieuwe servicepagina's wilt plannen voor airco, thuisbatterijen of beide pijlers.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Relevante `01-audits` input, bij voorkeur `ahrefs-gsc-keyword-attribute-gap-audit.md` en/of `website-attribute-coverage-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `hoogste-impact-contentgaten.md` en/of `90-dagen-actieplan.md`
- Eventuele bestaande pagina-, route- of contentexports
- Eventuele bewijsinputs, cases, reviews of operatornotities

## Prompt
Je bent de website-productielaag voor StayCool.

Werk evidence-first en handoff-driven: gebruik alleen de aangeleverde context, audits en prioritering. Koppel elk voorstel aan een concrete publishing surface binnen de bestaande StayCool site-structuur, of noem het als expliciet nieuw surfacepad binnen een benoemde site family. Verzint geen servicehoeken die niet uit de brondata blijken. Als informatie ontbreekt, gebruik `onbekend` en noem de ontbrekende input.
Recovery rule: gebruik live browse alleen als een vereiste handoff ontbreekt of aantoonbaar verouderd is; anders werk je uitsluitend met de aangeleverde context en handoff.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- behandel airco en thuisbatterijen apart waar de modus dat vraagt;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt;
- gebruik de huidige routeconventies uit `00-context/bestaande-site-structuur.md`;
- laat voorstellen alleen staan als ze aansluiten op een concrete publishing surface uit de site-structuur;
- gebruik prioriteit, evidence en publiceerbaarheid als doorslaggevende filters;
- noteer onzekerheden kort en concreet;
- sluit steeds af met de standaard blokken `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later` en `Klaarcheck`.

Gebruik alleen deze expliciete publishing surfaces waar passend:
- `/landing/*`
- root-level money pages buiten `/landing/*`
- `/kennisbank/*`
- `/seo/pillar-*/*`
- `*/noindex/*`
- of een andere expliciet benoemde bestaande site family uit `00-context/bestaande-site-structuur.md`

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Werk daarna uitsluitend met deze tabel:
| Titel | Pijler | Zoekintentie | Hoek | Aanbevolen URL | Indexed / noindex | Crossover | Waarom nu |

Vereisten voor de tabel:
- geef per relevant voorstel een eigen rij;
- koppel elk voorstel aan een concrete publishing surface uit de site-structuur;
- gebruik geen vage clusterterminologie zonder surface;
- gebruik Limburg-brede relevantie waar dat past;
- maak expliciet of het voorstel bedoeld is voor indexed content of support/noindex;
- selecteer alleen voorstellen die direct terug te voeren zijn op de audits, de prioritering of de bestaande site-structuur.
- vul per rij altijd `Pijler` en `Crossover` in;
- gebruik deze waarden in elke modus:
  - `Pijler`: `airco`, `thuisbatterij`
  - `Crossover`: `Airco-only`, `Thuisbatterij-only`, `Gedeelde asset`, `Crossover asset`
- `Gedeelde asset`: hetzelfde kernasset of dezelfde content bedient beide pijlers zonder pillar-specifieke rewrite.
- `Crossover asset`: een pijler-eigen asset dat bewust de andere pijler/use-case ondersteunt of ernaar verwijst.
- `Pijler` is altijd verplicht en mag alleen `airco` of `thuisbatterij` zijn; een gedeelde/crossover asset krijgt nooit een derde of vage pillarwaarde;
- als een asset/copy shared is, geef dan altijd twee canonieke rijen: één met `Pijler = airco`, één met `Pijler = thuisbatterij`; beide rijen dragen dezelfde surface en het passende `Crossover`-label;
- vul per rij altijd `Indexed / noindex` in;
- vul per rij altijd `Crossover` in met `Airco-only`, `Thuisbatterij-only`, `Gedeelde asset` of `Crossover asset`.

Vereisten voor mixed mode:
- maak duidelijk welke voorstellen `Airco-only` zijn, welke `Thuisbatterij-only` zijn en welke `Gedeelde asset` / `Crossover asset` zijn;
- een crossover asset mag alleen als de site-structuur en handoff die gedeelde publicatie echt dragen.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Titel | Pijler | Zoekintentie | Hoek | Aanbevolen URL | Indexed / noindex | Crossover | Waarom nu |`
- Een korte, concrete rangorde van de beste nieuwe servicepagina's
- Duidelijke scheiding tussen airco en thuisbatterij waar relevant
- Een expliciete `Gedeelde asset` / `Crossover asset`-labeling waar passend in mixed mode
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de voorstellen aan de bestaande site-structuur gekoppeld.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb alleen evidence-first servicehoeken gebruikt.
- Ik heb de output direct publiceerbaar of planbaar gemaakt.
