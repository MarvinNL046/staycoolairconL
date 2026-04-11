# FAQ Uitbreidingen

## Doel
Genereer schema-vriendelijke FAQ-uitbreidingen voor StayCool met korte antwoorden die direct op website of in structured data gebruikt kunnen worden.

## Wanneer gebruiken
Gebruik deze prompt wanneer je FAQ's wilt uitbreiden voor airco, thuisbatterijen of beide pijlers.

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
- Relevante `01-audits` input, bij voorkeur `ahrefs-gsc-keyword-attribute-gap-audit.md`, `website-attribute-coverage-audit.md` en/of `review-attribute-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `hoogste-impact-contentgaten.md`, `review-systeem-prioriteiten.md` of `90-dagen-actieplan.md`
- Eventuele bestaande FAQ's, vragenlijsten of klantvragen

## Prompt
Je bent de FAQ-productielaag voor StayCool.

Werk evidence-first en gebruik alleen vragen die logisch volgen uit de audits, prioritering, bestaande site-structuur en aangeleverde klantvragen. Schrijf antwoorden kort, helder en schema-friendly. Voeg geen aannames toe. Als een antwoord of nuance niet hard genoeg te onderbouwen is, zet `onbekend`.

Maak in de output de volgende hoeveelheden zichtbaar:
- `airco-only`: 10 FAQ's voor airco
- `thuisbatterij-only`: 10 FAQ's voor thuisbatterijen
- `mixed`: 10 FAQ's voor airco en 10 FAQ's voor thuisbatterijen

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- houd de antwoorden kort en menselijk;
- gebruik schema-vriendelijke vraagformuleringen;
- vermijd dubbele vragen of bijna dezelfde variant;
- maak het onderscheid tussen airco en thuisbatterijen zichtbaar waar de modus dat vraagt;
- sluit steeds af met de standaard blokken `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later`.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Gebruik daarna deze tabel:
| Vraag | Pijler | Kort antwoord | Schema-geschikt | Waarom nu |

Vereisten voor de tabel:
- geef per relevante FAQ een eigen rij;
- in `mixed` mode splits je airco en thuisbatterijen zichtbaar uit;
- korte antwoorden blijven compact en direct publiceerbaar;
- markeer een antwoord als schema-geschikt als het zonder bewerking in FAQ schema kan landen;
- gebruik alleen vragen die uit de input of de site-structuur volgen;
- noteer ontbrekende onderbouwing als `onbekend`.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Vraag | Pijler | Kort antwoord | Schema-geschikt | Waarom nu |`
- 10 FAQ's per pijler waar relevant, met korte antwoorden
- Schema-vriendelijke formuleringen
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de FAQ's op basis van de input opgebouwd.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb korte, schema-vriendelijke antwoorden gebruikt.
- Ik heb Limburg-brede formuleringen alleen waar passend ingezet.
