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
- maak per modus alleen de verzoeken die daarbij passen en gebruik geen andere rijen;
- gebruik natuurlijke Limburg-verwijzing waar dat past;
- houd de toon vriendelijk, niet opdringerig en direct bruikbaar.
- gebruik alleen placeholders die expliciet in de input zijn meegegeven.
- houd service-moment rows op maximaal 220 tekens;
- houd short WhatsApp version op maximaal 160 tekens;
- houd short e-mail version op maximaal 240 tekens;
- gebruik de kanaalmapping exact zoals hieronder, zonder extra kanaalvarianten.

## Vereiste rijset per modus
### airco-only
- 3 service-moment rows:
  - `review request after airco installation`
  - `review request after airco maintenance`
  - `review request after repair`
- 2 korte standaardrijen:
  - `short WhatsApp version`
  - `short e-mail version`
- totaal: 5 rijen

### thuisbatterij-only
- 1 service-moment row:
  - `review request after thuisbatterij advice/installation`
- 2 korte standaardrijen:
  - `short WhatsApp version`
  - `short e-mail version`
- totaal: 3 rijen

### mixed
- alle 5 rijen uit `airco-only`
- alle 3 rijen uit `thuisbatterij-only`
- totaal: 8 rijen

## Canonieke row rule
- elke rij staat voor precies één trigger én één kanaal;
- service-moment rows zijn afzonderlijke rijen en worden niet samengevoegd met de korte standaardrijen;
- `short WhatsApp version` en `short e-mail version` zijn per pijler apart in `mixed`, niet gedeeld.

## Kanaal mapping
- service-moment rows: `Kanaal` komt uit de input; als dat ontbreekt, zet `Kanaal` op `onbekend` en maak geen extra kanaal-duplicaten
- `short WhatsApp version`: `WhatsApp`
- `short e-mail version`: `E-mail`
- in `mixed` zijn de korte WhatsApp- en e-mailrijen per pijler apart: 2 voor airco en 2 voor thuisbatterijen

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
### airco-only
- Korte metadata-echo met de vaste velden
- Exact 5 rijen: 3 service-moment rows + 2 korte standaardrijen
- Een tabel met alleen airco-rijen volgens de kanaalmapping hierboven
- De standaard afsluitende secties
- `Klaarcheck`

### thuisbatterij-only
- Korte metadata-echo met de vaste velden
- Exact 3 rijen: 1 service-moment row + 2 korte standaardrijen
- Een tabel met alleen thuisbatterij-rijen volgens de kanaalmapping hierboven
- De standaard afsluitende secties
- `Klaarcheck`

### mixed
- Korte metadata-echo met de vaste velden
- Exact 8 rijen: 5 airco-rijen + 3 thuisbatterij-rijen
- De 4 korte standaardrijen zijn per pijler uitgesplitst en dus niet gedeeld
- Een tabel met alle rijen volgens de kanaalmapping hierboven
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
### airco-only
- Ik heb alleen airco-reviewverzoeken gemaakt.
- Ik heb WhatsApp en e-mail expliciet kort gehouden.
- Ik heb reviewlink en merge fields als input verplicht gemaakt.
- Ik heb Limburg-brede verwijzingen alleen waar passend gebruikt.

### thuisbatterij-only
- Ik heb alleen thuisbatterij-reviewverzoeken gemaakt.
- Ik heb WhatsApp en e-mail expliciet kort gehouden.
- Ik heb reviewlink en merge fields als input verplicht gemaakt.
- Ik heb Limburg-brede verwijzingen alleen waar passend gebruikt.

### mixed
- Ik heb de volledige gecombineerde set voor beide pijlers gemaakt.
- Ik heb WhatsApp en e-mail expliciet kort gehouden.
- Ik heb reviewlink en merge fields als input verplicht gemaakt.
- Ik heb Limburg-brede verwijzingen alleen waar passend gebruikt.
