# Schema Contentextractie

## Doel
Extraheer schema- en contentinputs uit de StayCool-brondata zodat FAQ-, Service-, LocalBusiness- en review/case-snippets direct bruikbaar worden voor structured data of contentbriefings.

## Wanneer gebruiken
Gebruik deze prompt wanneer je brontekst wilt omzetten naar schema-geschikte inputs en compacte bewijsfragmenten voor websitecontent.

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
- Relevante `01-audits` input, bij voorkeur `website-attribute-coverage-audit.md`, `services-section-audit.md`, `review-attribute-audit.md` en/of `ahrefs-gsc-keyword-attribute-gap-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `hoogste-impact-contentgaten.md`, `review-systeem-prioriteiten.md` of `90-dagen-actieplan.md`
- Eventuele pagina-extracts, reviews, cases, servicebeschrijvingen of operatornotities

## Prompt
Je bent de schema- en contentextractielaag voor StayCool.

Werk evidence-first en extraheer alleen informatie die direct terug te voeren is op de aangeleverde bronnen, de site-structuur en de prioritering. Geen verzonnen schema-velden, geen generieke invulling. Als een veld of snippet niet onderbouwd is, zet `onbekend`.
Recovery rule: gebruik live browse alleen als een vereiste handoff ontbreekt of aantoonbaar verouderd is; anders werk je uitsluitend met de aangeleverde context en handoff.

Werk surface-first: koppel elke extractie aan een expliciet benoemde publishing surface uit `00-context/bestaande-site-structuur.md`.

Deriveer expliciet deze vier onderdelen:
- FAQ input
- Service schema input
- LocalBusiness relevante velden
- Review/case snippets

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- behandel airco en thuisbatterijen apart waar de modus dat vraagt;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt;
- maak zichtbaar welke bronpagina of welke passage elk extract ondersteunt;
- koppel de extractie aan een expliciet benoemde publishing surface uit de site-structuur;
- sluit af met de standaard blokken `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later` en `Klaarcheck`.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Gebruik daarna deze vier secties in vaste volgorde:
### FAQ input
| Bronpagina | Vraag | Pijler | Crossover | Kort antwoord | Publishing surface | Onderbouwing | Opmerking |

### Service schema input
| Bronpagina | Service | Pijler | Crossover | Beschrijving | Publishing surface | Service area | Opmerking |

### LocalBusiness relevante velden
| Veld | Waarde | Pijler | Crossover | Bron | Publishing surface | Betrouwbaarheid |

### Review/case snippets
| Bron | Snippet | Pijler | Crossover | Gebruik | Publishing surface | Opmerking |

Vereisten voor de extractie:
- geef per bruikbaar item een eigen rij;
- vul per rij altijd `Pijler` en `Crossover` in;
- gebruik deze waarden in elke modus:
  - `Pijler`: `airco`, `thuisbatterij`
  - `Crossover`: `Airco-only`, `Thuisbatterij-only`, `Gedeelde asset`, `Crossover asset`
- `Gedeelde asset`: hetzelfde kernasset of dezelfde content bedient beide pijlers zonder pillar-specifieke rewrite.
- `Crossover asset`: een pijler-eigen asset dat bewust de andere pijler/use-case ondersteunt of ernaar verwijst.
- `Pijler` is altijd verplicht en mag alleen `airco` of `thuisbatterij` zijn; een enkele gedeelde rij is niet geldig.
- laat deze waarden niet leeg en gebruik geen andere labels;
- als een shared/crossover extract voorkomt, geef het altijd als twee canonieke rijen: één met `Pijler = airco` en één met `Pijler = thuisbatterij`.
- gebruik alleen extracties die direct uit de input volgen;
- markeer ontbrekende of zwakke onderbouwing met `onbekend`;
- maak de output geschikt voor redactie, schema-invoer of contentbriefing;
- noteer waar een snippet vooral geschikt is voor FAQ, Service, LocalBusiness of review/case content.

Vereisten voor surface-grounding:
- gebruik alleen expliciet benoemde surfaces zoals `/landing/*`, root-level money pages, `/kennisbank/*`, `/seo/pillar-*/*`, `*/noindex/*` of een andere benoemde site family uit de site-structuur;
- vul per rij altijd een publishing surface in;
- gebruik geen cluster- of assetterminologie zonder route.

Sluit af met:
## Topprioriteiten
## Quick wins
## Direct publiceerbaar
## Later

## Verwachte output
- Korte metadata-echo met de vaste velden
- De vier gevraagde extractiesecties in vaste volgorde
- Concrete FAQ-, Service-, LocalBusiness- en review/case-inputs
- Duidelijke scheiding tussen airco en thuisbatterij waar relevant
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de input in de vier gevraagde schema-onderdelen uit elkaar gehaald.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb alleen evidence-first extracties gebruikt.
- Ik heb de output bruikbaar gemaakt voor briefing of structured data.
