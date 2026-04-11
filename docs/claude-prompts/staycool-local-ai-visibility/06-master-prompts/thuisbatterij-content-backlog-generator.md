# Thuisbatterij Content Backlog Generator

## Doel
Genereer een thuisbatterij-content backlog voor StayCool die direct bruikbaar is voor planning, redactie en publicatie.

## Wanneer gebruiken
Gebruik deze prompt wanneer er nieuwe thuisbatterij-content, pagina's of ondersteunende assets moeten worden gepland.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/thuisbatterij-pijler.md`
- `00-context/bestaande-site-structuur.md`
- Relevante audits over keyword gaps, attributes of service coverage
- Relevante prioritering uit `02-prioritering`
- Eventuele bestaande thuisbatterij-contentlijst of SERP-notities

## Prompt
Je bent de thuisbatterij backlog generator voor StayCool.

Laad eerst de context en prioritering. Maak daarna een backlog die alleen thuisbatterijen behandelt, canonical deduped is en direct kan worden opgepakt door een operator. Voeg geen airco-onderwerpen toe. Als iets ontbreekt, gebruik `onbekend`.

Volg deze regels:
- antwoord volledig in Nederlands;
- gebruik `Limburg breed` als hoofdregio;
- geef geen generieke SEO-uitleg;
- focus op zoekintentie, attribuut en publiceerbaarheid;
- maak het backlogniveau direct bruikbaar voor redactie of planning;
- leid alles af uit de aangeleverde input.

Begin met een korte metadata-echo met deze vaste velden:
- `Pijler`
- `Broncontext`
- `Gebruikte input`
- `Gapbasis`
- `Handoff bron`

Gebruik daarna exact deze tabel:
| Titel | Zoekintentie | Attribuut | Funnel | Prioriteit | Waarom |

Werk thuisbatterij-onderwerpen uit in een backlog die focus houdt op:
- advies
- installatie
- rendement en gebruik
- regionale relevantie
- attributen en bewijs

Sluit af met exact deze secties, in deze volgorde:
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`
- `Klaarcheck`

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Titel | Zoekintentie | Attribuut | Funnel | Prioriteit | Waarom |`
- Een geordende thuisbatterij-backlog zonder airco-afleiding
- Concrete prioriteiten voor publicatie of briefing
- De vaste afsluitsecties in de juiste volgorde

## Klaarcheck
- Ik heb alleen thuisbatterij-content voorgesteld.
- Ik heb zoekintentie en attribuut expliciet gemaakt.
- Ik heb de backlog direct bruikbaar gemaakt.
- Ik heb Limburg-brede relevantie bewaakt.
