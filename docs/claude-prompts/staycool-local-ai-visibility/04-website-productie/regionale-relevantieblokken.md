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

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- behandel airco en thuisbatterijen apart waar de modus dat vraagt;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt;
- maak regionale relevantie concreet via werkgebied, servicebereik, installatietraject of bewijs;
- koppel elk blok aan een bestaande pagina/cluster of een nieuw assettype;
- vermijd opgeblazen claims;
- sluit af met de standaard blokken `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later`.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Gebruik daarna deze tabel:
| Pagina of cluster | Bloktype | Tekstblok | Regionale invalshoek | Opmerking |

Vereisten voor de tabel:
- geef per blok een eigen rij;
- in `mixed` mode splits je airco en thuisbatterij zichtbaar uit;
- laat de tekstblokken Limburg-breed voelen zonder generieke fluff;
- gebruik alleen regio-invalshoeken die uit de input of site-structuur volgen;
- noteer onzekerheid met `onbekend` wanneer bewijs of context ontbreekt.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Pagina of cluster | Bloktype | Tekstblok | Regionale invalshoek | Opmerking |`
- Concrete regionale blokken die direct in content kunnen landen
- Duidelijke scheiding tussen airco en thuisbatterij waar relevant
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de blokken aan de echte site-structuur gekoppeld.
- Ik heb Limburg-brede relevantie expliciet gemaakt.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb alleen evidence-first regionale blokken gebruikt.
