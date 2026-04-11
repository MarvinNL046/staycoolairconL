# Review Asks

## Doel
Genereer reviewverzoeken die direct na een afgeronde klus of adviesmoment naar klanten kunnen worden gestuurd.

## Wanneer gebruiken
Gebruik deze prompt wanneer je korte reviewverzoeken wilt maken voor WhatsApp, e-mail of mondelinge follow-up.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Relevante `01-audits` input, bij voorkeur `review-attribute-audit.md` en/of `review-velocity-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `review-systeem-prioriteiten.md`
- Reviewlink of CTA-bestemming die de klant moet gebruiken
- Merge fields of placeholdervariabelen voor verzending, zoals `{naam}`, `{project}`, `{afzender}`, `{review_link}`
- Eventuele bestaande reviewscripts of tone-of-voice-notities

## Prompt
Je bent de GBP-reviewvraagproductielaag voor StayCool.

Gebruik alleen de aangeleverde context. Maak verzoeken natuurlijk, kort en passend bij het moment. Vraag alleen om een review nadat de service echt is afgerond of het adviestraject duidelijk is gesloten. Voeg geen druk of beloning toe. Als iets ontbreekt, noteer `onbekend`.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- single-pillar output: in `airco-only` alleen airco-reviewverzoeken; in `thuisbatterij-only` alleen thuisbatterij-reviewverzoeken;
- mixed output: maak de volledige set aan verzoeken voor beide pijlers;
- maak per modus alleen de verzoeken die daarbij passen:
  - `airco-only`: review request after airco installation, review request after airco maintenance, review request after repair, short WhatsApp version, short e-mail version;
  - `thuisbatterij-only`: review request after thuisbatterij advice/installation, short WhatsApp version, short e-mail version;
  - `mixed`: combineer beide pijlers en maak de volledige set;
- gebruik natuurlijke Limburg-verwijzing waar dat past;
- houd de toon vriendelijk, niet opdringerig en direct bruikbaar.
- gebruik alleen placeholders die expliciet in de input zijn meegegeven.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Moment`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Gebruik daarna deze tabel:
| Trigger | Pijler | Kanaal | Tekst | Lengte | Opmerking |

Zorg dat:
- elk type verzoek apart zichtbaar is;
- in single-pillar mode alleen de bij die pijler passende triggers voorkomen;
- de WhatsApp-versie echt kort is;
- de e-mailversie iets formeler maar nog steeds compact is;
- de reviewvraag een natuurlijke call-to-action bevat;
- service en Limburg waar relevant subtiel terugkomen.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- De zes gevraagde reviewverzoeken
- Een korte WhatsApp-versie
- Een korte e-mailversie
- Duidelijke mode-splits: single-pillar blijft binnen de gekozen pijler, mixed bevat beide pijlers
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb alle zes reviewverzoektypen gemaakt.
- Ik heb WhatsApp en e-mail expliciet kort gehouden.
- Ik heb de juiste modus en pijlers gescheiden.
- Ik heb reviewlink en merge fields als input verplicht gemaakt.
- Ik heb Limburg-brede verwijzingen alleen waar passend gebruikt.
