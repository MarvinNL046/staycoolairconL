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
Recovery rule: gebruik live browse alleen als een vereiste handoff ontbreekt of aantoonbaar verouderd is; anders werk je uitsluitend met de aangeleverde context en handoff.

Maak in de output de volgende hoeveelheden zichtbaar:
- `airco-only`: 10 FAQ's voor airco
- `thuisbatterij-only`: 10 FAQ's voor thuisbatterijen
- `mixed`: exact 20 FAQ-rijen totaal in de hoofdtafel, bestaande uit 10 `airco`-rijen en 10 `thuisbatterij`-rijen; elke rij krijgt precies één `Pijler`-waarde (`airco` of `thuisbatterij`), en als een FAQ shared/crossover is, wordt die in de hoofdtafel als twee canonieke rijen opgenomen: één `airco`, één `thuisbatterij`; die twee rijen tellen samen als 2 van de 20 en nooit als 1 plus extra

Lever de output als een publiceerbaar FAQ-blok op de website, niet als losse lijst zonder implementatiehouvast. Elke FAQ moet kunnen landen op een concrete target page / route, met een expliciete publishing surface en indexability-keuze.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- geef geen generieke SEO-uitleg;
- houd de antwoorden kort en menselijk;
- gebruik schema-vriendelijke vraagformuleringen;
- vermijd dubbele vragen of bijna dezelfde variant;
- maak het onderscheid tussen airco en thuisbatterijen zichtbaar waar de modus dat vraagt;
- sluit steeds af met de standaard blokken `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later` en `Klaarcheck`.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Gebruik daarna deze tabel:
| FAQ-Rij-ID | FAQ-Groep-ID | Vraag | Pijler | Crossover | Kort antwoord | Concrete target page / route | Publishing surface | Indexed / noindex | Schema-geschikt | Waarom nu |

Vereisten voor de tabel:
- geef per relevante FAQ een eigen rij met een uniek `FAQ-Rij-ID`;
- geef per onderliggend FAQ-asset of gedeelde set een stabiel `FAQ-Groep-ID`;
- canonical rows hebben altijd een unieke `FAQ-Rij-ID`; rijen die bij dezelfde shared/crossover FAQ-set horen delen hetzelfde `FAQ-Groep-ID`;
- vul per rij altijd `Pijler` en `Crossover` in;
- gebruik deze waarden in elke modus:
  - `Pijler`: `airco`, `thuisbatterij`
  - `Crossover`: `Airco-only`, `Thuisbatterij-only`, `Gedeelde asset`, `Crossover asset`
- `Gedeelde asset`: hetzelfde kernasset of dezelfde FAQ-set bedient beide pijlers zonder pillar-specifieke rewrite.
- `Crossover asset`: een pijler-eigen FAQ-set die bewust de andere pijler/use-case ondersteunt of ernaar verwijst.
- `Pijler` is altijd verplicht en mag alleen `airco` of `thuisbatterij` zijn; een FAQ/shared asset krijgt nooit een derde of vage pillarwaarde.
- laat deze waarden niet leeg en gebruik geen andere labels;
- als een FAQ shared/crossover is, geef dan altijd twee canonieke rijen: één met `Pijler = airco`, één met `Pijler = thuisbatterij`; beide rijen dragen dezelfde publicatiesurface en het passende `Crossover`-label;
- als een FAQ shared/crossover is, gebruiken die twee canonieke rijen hetzelfde `FAQ-Groep-ID` en twee verschillende `FAQ-Rij-ID`s;
- korte antwoorden blijven compact en direct publiceerbaar;
- markeer een antwoord als schema-geschikt als het zonder bewerking in FAQ schema kan landen;
- gebruik voor `Indexed / noindex` alleen `indexed` of `noindex`;
- gebruik voor `Schema-geschikt` alleen `ja` of `nee`;
- wijs elke FAQ toe aan een concrete target page of route;
- wijs elke FAQ toe aan een publishing surface;
- geef expliciet aan of de plaatsing indexed of noindex is;
- gebruik alleen vragen die uit de input of de site-structuur volgen;
- noteer ontbrekende onderbouwing als `onbekend`.

Vereisten voor publiceerbaarheid:
- maak per pijler een publishable FAQ-blok dat direct in CMS of content kan worden ingezet;
- gebruik in mixed mode waar passend een `Gedeelde asset` / `Crossover asset`-blok als de FAQ-set inhoudelijk voor beide pijlers werkt;
- maak duidelijk welke vragen airco-only, thuisbatterij-only of crossover zijn.
- als een FAQ-set shared/crossover is in mixed mode, representeer het publiceerbare blok als precies twee rijen in `### Publiceerbaar FAQ-blok`: één met `Pijler = airco`, één met `Pijler = thuisbatterij`; beide rijen hergebruiken dezelfde `FAQ-Groep-ID`, dezelfde concrete target page/route, dezelfde surface en dezelfde FAQ-set referentie.
- de hoofdtafel blijft de canonieke bron; het publiceerbare blok is een handoff-laag en voegt nooit nieuwe of afwijkende FAQ-rijen toe.

Vast publiceerbaar FAQ-blok:
### Publiceerbaar FAQ-blok
| FAQ-set | FAQ-Groep-ID | FAQ-Rij-ID's | Pijler | Crossover | Concrete target page / route | Publicatiesurface | Indexed / noindex | CMS-ready opmerking |

- vul deze sectie altijd in, ook als de tabel al compleet is;
- groepeer hier de FAQ's per publicatiesurface zodat de set direct in CMS kan worden overgenomen;
- verwijs per set expliciet naar de canonieke `FAQ-Groep-ID` en bijbehorende `FAQ-Rij-ID`s uit de hoofdtafel;
- neem per block-rij altijd dezelfde concrete target page / route over als in de bijbehorende canonieke FAQ-rijen;
- als een FAQ-set voor beide pijlers werkt, label die hier als `Gedeelde asset` / `Crossover asset`.
- in mixed mode blijft het publiceerbare blok per gedeelde set beperkt tot die twee rijen; gebruik nooit een derde variant of een paginafamilie als vervanging voor de concrete target.

Sluit af met deze secties:
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`
- `Klaarcheck`

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| FAQ-Rij-ID | FAQ-Groep-ID | Vraag | Pijler | Crossover | Kort antwoord | Concrete target page / route | Publishing surface | Indexed / noindex | Schema-geschikt | Waarom nu |`
- 10 FAQ's per pijler waar relevant, met korte antwoorden
- Schema-vriendelijke formuleringen
- Een publiceerbaar FAQ-blok per pijler met verwijzing naar de canonieke `FAQ-Groep-ID` en `FAQ-Rij-ID`s
- De vaste sectie `### Publiceerbaar FAQ-blok` met `| FAQ-set | FAQ-Groep-ID | FAQ-Rij-ID's | Pijler | Crossover | Concrete target page / route | Publicatiesurface | Indexed / noindex | CMS-ready opmerking |`
- In mixed mode: de publiceerbare set wordt altijd als twee block-rijen uitgewerkt, met dezelfde `FAQ-Groep-ID`, dezelfde `FAQ-Rij-ID`-set en dezelfde surface per gedeelde set
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de FAQ's op basis van de input opgebouwd.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb korte, schema-vriendelijke antwoorden gebruikt.
- Ik heb Limburg-brede formuleringen alleen waar passend ingezet.
