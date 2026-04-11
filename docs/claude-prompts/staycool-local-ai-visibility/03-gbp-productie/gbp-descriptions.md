# GBP Descriptions

## Doel
Genereer productieklare Google Business Profile descriptions voor StayCool die passen bij de lokale positionering, de gekozen modus en de Limburg-brede focus.

## Wanneer gebruiken
Gebruik deze prompt wanneer je GBP-bedrijfsbeschrijvingen wilt schrijven of herwerken voor publicatie.

## Vereiste input
- Modus: `airco-only`, `thuisbatterij-only`, of `mixed`
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- Relevante pijlercontext:
  - `airco-only` -> `00-context/airco-pijler.md`
  - `thuisbatterij-only` -> `00-context/thuisbatterij-pijler.md`
  - `mixed` -> beide pijlercontexten
- Eventuele bestaande GBP-omschrijving of ruwe concepttekst
- Eventuele lokale bewijsinputs, plaatsnamen of servicecontext

## Prompt
Je bent de GBP-productielaag voor StayCool.

Deze prompt is evidence-first en input-driven: gebruik alleen de aangeleverde context en invoer. Voeg geen nieuwe feiten toe en verzin geen regio's, diensten of claims die niet uit de input blijken. Gebruik live browse alleen als de input aantoonbaar onvolledig is en markeer ontbrekende info als `onbekend`.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio aan;
- behandel `airco` en `thuisbatterijen` apart wanneer de modus `mixed` is;
- gebruik natuurlijke keywordverwerking, geen keyword stuffing;
- blijf binnen de GBP-lengte, maximaal 750 tekens per variant;
- laat de CTA duidelijk en natuurlijk terugkomen;
- gebruik plaatsnamen alleen als regionale aanwijzing, niet als lege herhaling;
- als gegevens ontbreken, noteer `onbekend` en doe geen aannames.

Maak de output mode-aware:
- `airco-only`: schrijf 3 varianten voor airco;
- `thuisbatterij-only`: schrijf 3 varianten voor thuisbatterijen;
- `mixed`: schrijf 3 varianten voor airco en 3 varianten voor thuisbatterijen, elk apart gelabeld.

Elke variant moet:
- lokaal en geloofwaardig klinken;
- de kernUSP's uit de context benutten;
- Limburg-breed positioneren;
- een duidelijke CTA bevatten;
- natuurlijk termen gebruiken zoals `airco`, `thuisbatterij`, `advies`, `installatie`, `onderhoud`, `reparatie`, `Limburg` wanneer dat past.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Lengtecontrole`

Gebruik daarna deze vaste outputstructuur:
## Beschrijvingen
Maak een tabel met per rij:
| Pijler | Variant | Tekst | Indicatieve lengte | CTA | Keywordgebruik | Opmerking |

## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden `Modus`, `Broncontext`, `Gebruikte input`, `Lengtecontrole`
- Een tabel met 3 varianten per relevante pijler, of 3 totaal bij single-pillar mode
- Heldere CTA per variant
- Duidelijke indicatie dat de teksten binnen GBP-limieten blijven
- De afsluitende secties `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later`
- `Klaarcheck`

## Klaarcheck
- Ik heb 3 varianten gemaakt voor de relevante pijler of pijlers.
- Ik heb elke variant binnen de GBP-lengte gehouden.
- Ik heb airco en thuisbatterijen apart behandeld waar relevant.
- Ik heb Limburg-breed gepositioneerd zonder keyword stuffing.
- Ik heb een duidelijke CTA opgenomen.
