# Kwartaal Content Gap Review

## Doel
Breng elk kwartaal de contentgaten van StayCool in kaart en vertaal ze naar een prioriteitenlijst voor nieuwe of bij te werken assets.

## Wanneer gebruiken
Gebruik deze prompt elk kwartaal om de contentdekking opnieuw te toetsen aan audits, concurrerende patronen en site-structuur.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- Modusmapping:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Relevante pijlercontext
- Audits over keyword gap, attribute coverage of service coverage
- Competitor- of SERP-patronen
- Huidige contentlijst of site-export

## Prompt
Gebruik de relevante contextbestanden uit `00-context` voordat je analyseert.

Je bent de kwartaal content-gap operator voor StayCool.

Werk evidence-first en koppel elk gat aan een concrete route, surface of assettype. Gebruik `onbekend` wanneer een route of gat niet hard genoeg onderbouwd is.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel `airco` en `thuisbatterijen` als aparte pijlers;
- geen generieke SEO-uitleg;
- gebruik `Limburg breed` als hoofdregio;
- geef geen abstracte contentstrategie;
- benoem alleen gaps die een operator echt kan vullen;
- koppel kansen aan publiceerbaarheid en prioriteit.

Begin met een korte metadata-echo met deze vaste velden:
- `Modus`
- `Kwartaal`
- `Broncontext`
- `Gebruikte input`
- `Gapset`
- `Handoff bron`

Gebruik daarna exact deze tabel:
| Gap | Pijler | Zoekintentie | Huidige dekking | Prioriteit | Actie |

Operationele waarden:
- `Pijler`: `airco`, `thuisbatterij`, `gedeeld`
- `Prioriteit`: `hoog`, `middel`, `laag`, `onbekend`

Mixed-mode regel:
- gebruik `gedeeld` alleen als een gap zonder rewrite beide pijlers bedient;
- anders maak je per pijler een aparte rij;
- in single-pillar mode gebruik je alleen de actieve pijler.

Werk minimaal uit:
- ontbrekende service- of supportonderwerpen
- attribute gaps
- regionale of Limburg-brede hoeken
- FAQ- of bewijscontent
- content die een bestaand review- of GBP-signaal ondersteunt

Sluit af met exact deze secties, in deze volgorde:
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`
- `Klaarcheck`

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Gap | Pijler | Zoekintentie | Huidige dekking | Prioriteit | Actie |`
- Een geordende kwartaalgaplijst per pijler
- Concrete publishing- of update-acties
- De vaste afsluitsecties in de juiste volgorde

## Klaarcheck
- Ik heb de contentgaten aan context en audits gekoppeld.
- Ik heb airco en thuisbatterijen apart behandeld waar relevant.
- Ik heb de output concreet en publiceerbaar gemaakt.
- Ik heb geen vage gapobservaties zonder actie overgelaten.
