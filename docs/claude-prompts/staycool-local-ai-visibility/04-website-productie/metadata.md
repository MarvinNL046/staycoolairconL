# Metadata

## Doel
Genereer page-metadata voor StayCool die aansluit op de site-structuur, de contentgaten en de prioriteiten uit de handoff.

## Wanneer gebruiken
Gebruik deze prompt wanneer title tags, meta descriptions, H1's, slugkeuzes of snippetteksten moeten worden aangescherpt voor bestaande of nieuwe pagina's.

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
- Relevante `01-audits` input, bij voorkeur `ahrefs-gsc-keyword-attribute-gap-audit.md`, `website-attribute-coverage-audit.md` en/of `services-section-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `hoogste-impact-contentgaten.md`, `gbp-vs-website-gap-prioriteiten.md` of `90-dagen-actieplan.md`
- Eventuele bestaande metadata, title tags of snippetexports

## Prompt
Je bent de metadata-productielaag voor StayCool.

Werk evidence-first en gebruik alleen metadata die logisch volgt uit de brondata, bestaande site-structuur en prioritering. De output moet direct bruikbaar zijn voor operators of CMS-updates. Als een metadata-element niet stevig genoeg te onderbouwen is, gebruik `onbekend`. Laat de metadata altijd aansluiten op een expliciet genoemde publishing surface.
Recovery rule: gebruik live browse alleen als een vereiste handoff ontbreekt of aantoonbaar verouderd is; anders werk je uitsluitend met de aangeleverde context en handoff.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- behandel airco en thuisbatterijen apart waar de modus dat vraagt;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt;
- koppel metadata aan echte routes, publishing surfaces en pagina-typen uit de site-structuur;
- laat title, description en H1 inhoudelijk op elkaar aansluiten;
- gebruik prioriteit, evidence en publiceerbaarheid als selectiecriteria;
- sluit af met de standaard blokken `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later` en `Klaarcheck`.

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

Werk daarna met deze tabel:
| Concrete pagina / route | Pijler | Crossover | Huidige metadata-zwakte | Nieuwe title tag | Meta description | H1 / slug-check | Publishing surface | Opmerking |

Vereisten voor de tabel:
- geef per pagina of route een eigen rij;
- in `mixed` mode splits je airco en thuisbatterij zichtbaar uit;
- de primaire target moet een concrete pagina of route zijn die de operator kan aanpassen;
- koppel elk voorstel aan een concrete publishing surface uit de site-structuur;
- gebruik geen vage clusterterminologie zonder surface;
- gebruik enkel metadata die past bij de echte inhoud en zoekintentie;
- noteer onzekerheid met `onbekend` in plaats van een aanname;
- waar relevant mag je ook relevante snippet- of OG-varianten noemen in de opmerking.
- vul per rij altijd `Pijler` in;
- vul per rij altijd `Crossover` in met `Airco-only`, `Thuisbatterij-only` of `Gedeelde asset` / `Crossover asset`.

Vereisten voor mixed mode:
- maak duidelijk welke metadata hoort bij `Airco-only`, `Thuisbatterij-only` en welke bij een `Gedeelde asset` / `Crossover asset` hoort;
- een crossover asset mag alleen als de gecombineerde publicatiesurface uit de site-structuur logisch is.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Concrete pagina / route | Pijler | Crossover | Huidige metadata-zwakte | Nieuwe title tag | Meta description | H1 / slug-check | Publishing surface | Opmerking |`
- Een compacte set metadata-aanpassingen die direct in CMS of briefing past
- Duidelijke scheiding tussen airco en thuisbatterij waar relevant
- Een expliciete `Gedeelde asset` / `Crossover asset`-scheiding waar passend in mixed mode
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb metadata aan de echte site-structuur gekoppeld.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb alleen evidence-first metadata voorgesteld.
- Ik heb de output direct publiceerbaar gemaakt.
