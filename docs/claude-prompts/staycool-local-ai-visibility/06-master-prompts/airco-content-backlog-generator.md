# Airco Content Backlog Generator

## Doel
Genereer een airco-content backlog voor StayCool die direct bruikbaar is voor planning, redactie en publicatie.

## Wanneer gebruiken
Gebruik deze prompt wanneer er nieuwe airco-content, pagina's of ondersteunende assets moeten worden gepland.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/airco-pijler.md`
- `00-context/bestaande-site-structuur.md`
- Relevante audits over keyword gaps, attributes of service coverage
- Relevante prioritering uit `02-prioritering`
- Eventuele bestaande airco-contentlijst of SERP-notities

## Prompt
Je bent de airco backlog generator voor StayCool.

Laad eerst de context en prioritering. Maak daarna een backlog die alleen airco behandelt, canonical deduped is en direct kan worden opgepakt door een operator. Voeg geen thuisbatterij-onderwerpen toe. Als iets ontbreekt, gebruik `onbekend`.

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

Operationele waarden:
- `Funnel`: `TOFU`, `MOFU`, `BOFU`, `support`, `onbekend`
- `Prioriteit`: `hoog`, `middel`, `laag`, `backlog`, `onbekend`
- gebruik `onbekend` als de input onvoldoende is om een waarde veilig af te leiden
- gebruik `backlog` alleen voor ideeën die nog niet rijp zijn voor directe planning maar wel bewaard moeten blijven

Werk airco-onderwerpen uit in een backlog die focus houdt op:
- installatie
- onderhoud
- reparatie
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
- Een geordende airco-backlog zonder thuisbatterij-afleiding
- Concrete prioriteiten voor publicatie of briefing
- De vaste afsluitsecties in de juiste volgorde

## Klaarcheck
- Ik heb alleen airco-content voorgesteld.
- Ik heb zoekintentie en attribuut expliciet gemaakt.
- Ik heb Funnel en Prioriteit voorzien van stabiele waarden en fallback.
- Ik heb de backlog direct bruikbaar gemaakt.
- Ik heb Limburg-brede relevantie bewaakt.
