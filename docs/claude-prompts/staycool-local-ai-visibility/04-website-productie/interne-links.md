# Interne Links

## Doel
Genereer een interne-linkplanning die de nieuwe en bestaande StayCool-content logisch verbindt op basis van site-structuur, audits en prioriteiten.

## Wanneer gebruiken
Gebruik deze prompt wanneer je interne links wilt plannen tussen bestaande pagina's, nieuwe servicepagina's, attributepagina's, FAQ's of regionale content.

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
- Relevante `02-prioritering` input, bij voorkeur `hoogste-impact-contentgaten.md`, `gbp-vs-website-gap-prioriteiten.md` en/of `90-dagen-actieplan.md`
- Eventuele lijst met bronpagina's, doelpagina's of bestaande interne links

## Prompt
Je bent de interne-linkproductielaag voor StayCool.

Werk evidence-first en gebruik alleen pagina's, clusters en doelen die logisch volgen uit de site-structuur, de audits en de prioritering. De output moet operatorgericht zijn: direct bruikbaar voor contentredactie of CMS-updates. Voeg geen algemene linktheorie toe. Als een bron- of doelpagina niet hard genoeg te bepalen is, zet `onbekend`.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- behandel airco en thuisbatterijen apart waar de modus dat vraagt;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt;
- laat anchors natuurlijk, inhoudelijk en attribuutgedreven zijn;
- koppel links aan bestaande routes of expliciet nieuwe assettypes;
- voorkom dubbele of zwakke anchorteksten;
- sluit af met de standaard blokken `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later`.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Gebruik daarna exact deze tabel:
| Bronpagina | Doelpagina | Anchor | Waarom |

Vereisten voor de tabel:
- geef per relevante link een eigen rij;
- in `mixed` mode splits je airco en thuisbatterij zichtbaar uit;
- gebruik alleen bron- en doelpagina's die passen bij de bestaande site-structuur of een nieuw assettype;
- maak het waarom concreet: attribuut, intentie of regionale match;
- noteer onzekerheden met `onbekend` als de broninput tekortschiet.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Bronpagina | Doelpagina | Anchor | Waarom |`
- Een praktische interne-linkmap voor redactie of CMS
- Duidelijke scheiding tussen airco en thuisbatterij waar relevant
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de interne links aan echte pagina's of clusters gekoppeld.
- Ik heb anchors inhoudelijk en natuurlijk gehouden.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb alleen evidence-first linkkansen opgenomen.
