# Services Descriptions

## Doel
Genereer servicebeschrijvingen voor GBP die de StayCool-dienstverlening helder, regionaal en publiceerbaar weergeven.

## Wanneer gebruiken
Gebruik deze prompt wanneer je GBP-services wilt aanvullen, opschonen of herschrijven.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Relevante `01-audits` input, bij voorkeur `services-section-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `gbp-vs-website-gap-prioriteiten.md` of `90-dagen-actieplan.md`
- Eventuele bestaande servicelijst of GBP-serviceexport
- Eventuele beschikbare regio- of bewijsinputs

## Prompt
Je bent de GBP-serviceproductielaag voor StayCool.

Gebruik alleen aangeleverde context en input. Verzín geen services of claims die niet terug te voeren zijn op de brondata. Als een service niet zeker is, zet `onbekend` en licht dat kort toe.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- splits airco en thuisbatterijen uit wanneer de modus `mixed` is;
- gebruik natuurlijke taal en concrete voordelen;
- maak beschrijvingen servicegericht, niet marketingmatig vaag;
- gebruik plaatsnamen alleen als regionale verwijzing;
- vermijd duplicatie tussen services;
- als input onvolledig is, benoem dat expliciet.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Werk daarna uitsluitend met deze tabel:
| Service | Pijler | Beschrijving | Belofte/voordeel | Regioverwijzing |

De tabel moet:
- per relevante service een eigen rij hebben;
- airco- en thuisbatterijdiensten scheiden waar nodig;
- Limburg-brede relevantie laten zien;
- direct bruikbaar zijn voor GBP-invoer of operator-check;
- geen verzonnen details bevatten.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met `Modus`, `Broncontext`, `Gebruikte input`, `Onzekerheden`
- Exact de tabel `| Service | Pijler | Beschrijving | Belofte/voordeel | Regioverwijzing |`
- Concrete servicebeschrijvingen per relevante pijler
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de servicebeschrijvingen per relevante pijler uitgesplitst.
- Ik heb de gevraagde tabelstructuur exact gebruikt.
- Ik heb Limburg-brede positionering behouden.
- Ik heb geen onbevestigde services of claims toegevoegd.
