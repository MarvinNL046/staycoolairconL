# Regionale Relevantieblokken

## Doel
Genereer regionale relevantieblokken die StayCool-content sterker laten landen op Limburg-brede intentie, lokale bewijsvoering en echte servicefit.

## Wanneer gebruiken
Gebruik deze prompt wanneer je tekstblokken wilt maken voor home, servicepagina's, locatiepagina's, adviespagina's of ondersteunende content waar regionale relevantie expliciet moet terugkomen.

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
- Relevante `01-audits` input, bij voorkeur `website-attribute-coverage-audit.md`, `competitor-map-pack-pattern-audit.md` en/of `services-section-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `gbp-vs-website-gap-prioriteiten.md`, `hoogste-impact-contentgaten.md` of `90-dagen-actieplan.md`
- Eventuele regionale bewijsinputs, cases, werkgebiednotities of plaatsverwijzingen

## Prompt
Je bent de regionale contentproductielaag voor StayCool.

Werk evidence-first en schrijf blokken die passen bij de bestaande site-structuur en de regionale positionering van StayCool. De output moet bruikbaar zijn als insertblok, sectietekst of briefingtekst. Gebruik alleen plaatsnamen of regio's die in de input of context voorkomen. Als regionale onderbouwing ontbreekt, gebruik `onbekend` en trek geen conclusies.
Recovery rule: gebruik live browse alleen als een vereiste handoff ontbreekt of aantoonbaar verouderd is; anders werk je uitsluitend met de aangeleverde context en handoff.

Belangrijk: schrijf Limburg-brede copy zonder dunne stadsduplicatie. Gebruik geen city-by-city varianten als outputaanpak en maak geen losse, herhaalde stadscontent die alleen de plaatsnaam wisselt. Als een stad of plaats niet aantoonbaar uit de input volgt, voeg die niet toe.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- schrijf Limburg-breed zonder dunne stadsduplicatie;
- maak geen city-by-city thin variants of duplicate stadscontent;
- behandel airco en thuisbatterijen apart waar de modus dat vraagt;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt;
- maak regionale relevantie concreet via werkgebied, servicebereik, installatietraject of bewijs;
- koppel elk blok aan een concrete publishing surface uit de site-structuur;
- vermijd opgeblazen claims;
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

Gebruik daarna deze tabel:
| Asset-ID | Concrete pagina / route | Publishing surface | Pijler | Crossover | Bloktype | Tekstblok | Regionale invalshoek | Opmerking |

Vereisten voor de tabel:
- geef per blok een eigen rij;
- geef elk deliverable een stabiel `Asset-ID`;
- maak `Asset-ID` deterministisch en route-gebaseerd: gebruik een lowercase kebab-id afgeleid van de concrete pagina/route; hergebruik exact dezelfde `Asset-ID` als hetzelfde blok in een latere run of tweede canonieke rij terugkomt; gebruik nooit datums, random suffixes of vrijblijvende labels;
- vul per rij altijd `Pijler` en `Crossover` in;
- gebruik deze waarden in elke modus:
  - `Pijler`: `airco`, `thuisbatterij`
  - `Crossover`: `Airco-only`, `Thuisbatterij-only`, `Gedeelde asset`, `Crossover asset`
- `Gedeelde asset`: hetzelfde kernasset of dezelfde content bedient beide pijlers zonder pillar-specifieke rewrite.
- `Crossover asset`: een pijler-eigen asset dat bewust de andere pijler/use-case ondersteunt of ernaar verwijst.
- `Pijler` is altijd verplicht en mag alleen `airco` of `thuisbatterij` zijn; een regionaal shared/crossover blok krijgt nooit een derde of vage pillarwaarde.
- laat deze waarden niet leeg en gebruik geen andere labels;
- als een regionaal blok shared/crossover is, geef twee canonieke rijen met hetzelfde `Asset-ID`: één `airco`, één `thuisbatterij`; beide delen dezelfde concrete pagina/route, dezelfde publishing surface en dezelfde target.
- schrijf `Tekstblok` als 1-2 zinnen of maximaal 40 woorden;
- maak het blok direct inzetbaar, zonder open einde of extra uitwerking;
- houd de toon compact, regionaal en briefingsklaar.
- laat de tekstblokken Limburg-breed voelen zonder generieke fluff of dunne stadsduplicatie;
- gebruik alleen regio-invalshoeken die uit de input of site-structuur volgen;
- noteer onzekerheid met `onbekend` wanneer bewijs of context ontbreekt.

Vereisten voor de outputaanpak:
- gebruik geen stad-voor-stad herhaling met minimale variatie;
- geef geen duplicate stadscontent als regionale strategie;
- maak elk blok breed genoeg voor Limburg, maar nog steeds concreet en servicegericht.

Vereisten voor mixed mode:
- toon waar relevant een `Gedeelde asset` / `Crossover asset`-blok als een blok echt voor beide pijlers werkt;
- maak expliciet wanneer een blok airco-only, thuisbatterij-only of crossover is;
- een crossover blok mag alleen als de site-structuur dat logisch draagt.

Sluit af met deze secties:
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`
- `Klaarcheck`

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Asset-ID | Concrete pagina / route | Publishing surface | Pijler | Crossover | Bloktype | Tekstblok | Regionale invalshoek | Opmerking |`
- Concrete regionale blokken die direct in content kunnen landen
- Tekstblokken van 1-2 zinnen of maximaal 40 woorden
- Duidelijke scheiding tussen airco en thuisbatterij waar relevant
- Een expliciete `Gedeelde asset` / `Crossover asset`-scheiding waar passend in mixed mode
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de blokken aan de echte site-structuur gekoppeld.
- Ik heb Limburg-brede relevantie expliciet gemaakt.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb alleen evidence-first regionale blokken gebruikt.
