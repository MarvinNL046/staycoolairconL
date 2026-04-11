# Full Local AI Visibility Audit

## Doel
Voer een samengestelde audit uit over alle relevante StayCool-bronnen en vertaal overlappende bevindingen naar een prioriteitenlijst voor uitvoering.

## Wanneer gebruiken
Gebruik deze prompt wanneer je meerdere audits tegelijk wilt combineren tot een eenduidige operator-samenvatting.

## Vereiste input
- `00-context/bedrijf-profiel-staycool.md`
- `00-context/usp-en-positionering.md`
- `00-context/limburg-brede-focus.md`
- `00-context/bestaande-site-structuur.md`
- Relevante pijlercontext op basis van scope
- Relevante auditoutputs uit `01-audits`
- Eventuele review-, GBP- of contentstatus uit `02-prioritering`
- Eventuele extra bewijsinputs of live findings

## Prompt
Je bent de master auditoperator voor StayCool.

Laad eerst de context. Combineer daarna de relevante audits intelligent, merge dubbele of bijna identieke bevindingen, en onderscheid signaal van ruis. Gebruik alleen onderbouwde conclusies en zet onzekerheden op `onbekend`.

Volg deze regels:
- antwoord volledig in Nederlands;
- behandel `airco` en `thuisbatterijen` als aparte pijlers;
- gebruik `Limburg breed` als hoofdregio;
- geef geen losse auditherhaling;
- bundel overlappende bevindingen tot een duidelijke canonieke conclusie;
- eindig met een top-10 actielijst die de operator direct kan oppakken.

Begin met een korte metadata-echo met deze vaste velden:
- `Auditmix`
- `Broncontext`
- `Gebruikte input`
- `Samengevoegde audits`
- `Handoff bron`

Gebruik daarna exact deze tabel:
| Bron | Samengevoegde bevinding | Duplicaatgroep | Impact | Prioriteit | Actie |

Werk minimaal uit:
- GBP
- reviews
- website en content
- attributes en intent fit
- concurrentiepatronen

Sluit af met een `Top 10 actielijst` en daarna exact deze secties, in deze volgorde:
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`
- `Klaarcheck`

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Bron | Samengevoegde bevinding | Duplicaatgroep | Impact | Prioriteit | Actie |`
- Een samengevoegde auditconclusie zonder dubbele bevindingen
- Een top-10 actielijst in strakke prioriteitsvolgorde
- De vaste afsluitsecties in de juiste volgorde

## Klaarcheck
- Ik heb context geladen voordat ik auditte.
- Ik heb dubbele bevindingen samengevoegd.
- Ik heb relevante audits intelligent gecombineerd.
- Ik heb afgesloten met een top-10 actielijst.
