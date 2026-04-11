# Interne Links

## Doel
Genereer een interne-linkplanning die de nieuwe en bestaande StayCool-content logisch verbindt op basis van site-structuur, audits en prioriteiten.

## Wanneer gebruiken
Gebruik deze prompt wanneer je interne links wilt plannen tussen bestaande pagina's, nieuwe servicepagina's, attributepagina's, FAQ's of regionale content.

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
- Relevante `01-audits` input, bij voorkeur `ahrefs-gsc-keyword-attribute-gap-audit.md`, `website-attribute-coverage-audit.md` en/of `services-section-audit.md`
- Relevante `02-prioritering` input, bij voorkeur `hoogste-impact-contentgaten.md`, `gbp-vs-website-gap-prioriteiten.md` en/of `90-dagen-actieplan.md`
- Eventuele lijst met bronpagina's, doelpagina's of bestaande interne links

## Prompt
Je bent de interne-linkproductielaag voor StayCool.

Werk evidence-first en gebruik alleen pagina's, surfaces en doelen die logisch volgen uit de site-structuur, de audits en de prioritering. De output moet operatorgericht zijn: direct bruikbaar voor contentredactie of CMS-updates. Voeg geen algemene linktheorie toe. Als een bron- of doelpagina niet hard genoeg te bepalen is, zet `onbekend`.
Recovery rule: gebruik live browse alleen als een vereiste handoff ontbreekt of aantoonbaar verouderd is; anders werk je uitsluitend met de aangeleverde context en handoff.

Werk surface-first: koppel bron- en doelpagina's altijd aan expliciet benoemde publishing surfaces uit `00-context/bestaande-site-structuur.md`.

Volg deze regels:
- antwoord volledig in Nederlands;
- houd Limburg breed als hoofdregio;
- behandel airco en thuisbatterijen apart waar de modus dat vraagt;
- geef geen generieke SEO-uitleg;
- gebruik tabellen waar dat helpt;
- laat anchors natuurlijk, inhoudelijk en attribuutgedreven zijn;
- koppel links aan bestaande routes of benoemde site families;
- voorkom dubbele of zwakke anchorteksten;
- sluit af met de standaard blokken `Topprioriteiten`, `Quick wins`, `Direct publiceerbaar`, `Later` en `Klaarcheck`.

Begin altijd met een `Korte metadata-echo` met deze vaste velden:
- `Modus`
- `Broncontext`
- `Gebruikte input`
- `Onzekerheden`
- `Handoff bron` met verwijzing naar de gebruikte `01-audits` en/of `02-prioritering` output

Gebruik daarna exact deze tabel:
| Bronpagina | Bron pijler | Doelpagina | Doel pijler | Linkrelatie | Anchor | Publishing surface bron | Publishing surface doel | Waarom |

Vereisten voor de tabel:
- geef per relevante link een eigen rij;
- vul per rij altijd `Bron pijler`, `Doel pijler` en `Linkrelatie` in;
- gebruik deze waarden in elke modus:
  - `Bron pijler`: `airco`, `thuisbatterij`
  - `Doel pijler`: `airco`, `thuisbatterij`
  - `Linkrelatie`: `same-pillar`, `cross-pillar`, `shared-support`
- `same-pillar`: bron en doel horen bij dezelfde pijler;
- `cross-pillar`: bron en doel horen bij verschillende pijlers;
- `shared-support`: de link ondersteunt een gedeelde of pijler-overstijgende context, maar blijft één canonieke linkplaatsing;
- laat deze waarden niet leeg en gebruik geen andere labels;
- houd het bij shared of crossover context op één canonieke rij per unieke combinatie van bronpagina, doelpagina en anchor; gebruik `Bron pijler`, `Doel pijler` en `Linkrelatie` om de relatie eenduidig te maken.
- gebruik alleen bron- en doelpagina's die passen bij een expliciet benoemde publishing surface uit de site-structuur;
- maak het waarom concreet: attribuut, intentie of regionale match;
- noteer onzekerheden met `onbekend` als de broninput tekortschiet.

Vereisten voor surface-grounding:
- gebruik alleen expliciet benoemde surfaces zoals `/landing/*`, root-level money pages, `/kennisbank/*`, `/seo/pillar-*/*`, `*/noindex/*` of een andere benoemde site family uit de site-structuur;
- noem bron en doel per rij expliciet in de surface-kolommen;
- gebruik geen cluster- of assetterminologie zonder route.

Sluit af met deze secties:
- `Topprioriteiten`
- `Quick wins`
- `Direct publiceerbaar`
- `Later`
- `Klaarcheck`

## Verwachte output
- Korte metadata-echo met de vaste velden
- Exact de tabel `| Bronpagina | Bron pijler | Doelpagina | Doel pijler | Linkrelatie | Anchor | Publishing surface bron | Publishing surface doel | Waarom |`
- Een praktische interne-linkmap voor redactie of CMS
- Duidelijke scheiding tussen airco en thuisbatterij waar relevant
- De standaard afsluitende secties
- `Klaarcheck`

## Klaarcheck
- Ik heb de interne links aan echte pagina's of surfaces gekoppeld.
- Ik heb anchors inhoudelijk en natuurlijk gehouden.
- Ik heb airco en thuisbatterijen gescheiden waar nodig.
- Ik heb alleen evidence-first linkkansen opgenomen.
