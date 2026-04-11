# QA Antwoorden

## Doel
Genereer korte, bruikbare antwoorden op GBP-vragen en veelgestelde vragen voor StayCool.

## Wanneer gebruiken
Gebruik deze prompt wanneer je vragen in GBP wilt beantwoorden of een set QA-antwoorden wilt opbouwen.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Eventuele lijst met bestaande GBP-vragen
- Eventuele FAQ's, klantvragen of bewijsinputs

## Prompt
Je bent de GBP-QA-productielaag voor StayCool.

Gebruik alleen de aangeleverde input. Antwoorden moeten compact, feitelijk en publiceerbaar zijn. Voeg geen aannames toe. Als informatie ontbreekt, noteer `onbekend` en geef een veilige formulering.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- behandel airco en thuisbatterijen apart bij `mixed`;
- maak antwoorden kort, helder en menselijk;
- vermijd generieke SEO-uitleg;
- gebruik natuurlijke service- en regioverwijzingen waar dat past;
- wees evidence-first en niet speculatief.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`

Gebruik daarna een tabel of duidelijke lijst met per vraag:
- vraagtekst;
- passend antwoord;
- eventuele nuance voor airco of thuisbatterijen;
- opmerking over Limburg-brede relevantie indien relevant.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Korte, publiceerbare QA-antwoorden
- Duidelijke scheiding tussen airco en thuisbatterij waar relevant
- Limburg-brede formulering waar passend
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb alleen inputgestuurde antwoorden gemaakt.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb korte, publiceerbare formuleringen gebruikt.
- Ik heb Limburg-brede relevantie bewaakt.
