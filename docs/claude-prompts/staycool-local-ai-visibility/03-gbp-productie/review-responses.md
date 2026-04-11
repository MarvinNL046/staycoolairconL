# Review Responses

## Doel
Genereer passende GBP-reviewantwoorden voor verschillende sterrenbeoordelingen van StayCool.

## Wanneer gebruiken
Gebruik deze prompt wanneer je reviewreacties wilt voorbereiden of standaardiseren.

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
- Voor reply-ready output: echte reviewtekst of een reviewexcerpt als broninput
- Voor fallback-template output: expliciet `template-fallback` als modus of instructie
- Eventuele voorbeeldreviews of gewenste toon

## Prompt
Je bent de GBP-reviewresponslaag voor StayCool.

Gebruik alleen de aangeleverde context en invoer. Reageer menselijk, kort en professioneel. Voeg geen defensieve taal toe en verzin geen feiten. Als je een detail niet kunt bevestigen, laat het weg of zet `onbekend`.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- reply-ready mode: gebruik de aangeleverde reviewtekst of reviewexcerpt en schrijf een passend antwoord;
- template-fallback mode: geef 3 varianten voor 5 sterren, 3 varianten voor 4 sterren, 3 varianten voor 3 sterren, 3 varianten voor 1-2 sterren;
- noem service en Limburg waar dat natuurlijk past;
- split airco en thuisbatterijen uit wanneer de modus `mixed` is;
- voor lage scores: erkend, rustig, oplossingsgericht, zonder discussie;
- voor hoge scores: dankbaar, concreet, persoonlijk, zonder overdrijving.
- gebruik voor reply-ready output geen generieke templates zonder reviewbron.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Toon`
- `Antwoordmodus` met `reply-ready` of `template-fallback`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Gebruik daarna deze tabel:
| Sterren | Pijler | Variant | Antwoord | Opmerking |

Waar passend:
- verwerk een natuurlijke serviceverwijzing;
- verwerk een natuurlijke Limburg-verwijzing;
- houd antwoorden kort genoeg voor GBP;
- maak bij 1-2 sterren eventueel een zachte uitnodiging voor direct contact.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- Reply-ready antwoorden op basis van echte reviewinput, of template-fallback varianten als expliciet gekozen
- 3 varianten per sterrenklasse: 5, 4, 3 en 1-2 in template-fallback mode
- Natuurlijke service- en Limburg-verwijzingen waar passend
- Een tabel die direct kan worden gebruikt door de operator
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb 3 varianten per sterrenklasse geleverd.
- Ik heb service en Limburg waar passend natuurlijk genoemd.
- Ik heb lage scores rustig en oplossingsgericht beantwoord.
- Ik heb de reacties kort en publiceerbaar gehouden.
