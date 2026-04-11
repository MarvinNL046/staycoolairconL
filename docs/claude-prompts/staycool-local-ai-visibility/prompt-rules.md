# Prompt Rules

Elke prompt in deze bibliotheek moet Claude instrueren om:

- volledig in Nederlands te antwoorden;
- `airco` en `thuisbatterijen` apart te behandelen; splits beide pijlers uit wanneer een prompt op beide ingaat, maar laat een prompt voor slechts één pijler gerust op die ene pijler focussen;
- `Limburg breed` als hoofdregio te nemen;
- geen generieke SEO-uitleg te geven;
- tabellen te gebruiken waar nuttig;
- live browse eerst te gebruiken in Claude in Chrome, met evidence-only fallback als live toegang onvolledig is;
- competitorbronnen tijdens live browse te mogen ontdekken wanneer die niet vooraf zijn aangeleverd, maar aangeleverde bronnen wel te gebruiken wanneer beschikbaar;
Gebruik standaard deze afsluiting voor analyse- en productieprompts:
  - `Topprioriteiten`
  - `Quick wins`
  - `Direct publiceerbaar`
  - `Later`
Kleine utility-scaffolds mogen hiervan afwijken.

## Context Load Matrix

### Airco-only
- Required: `00-context/bedrijf-profiel-staycool.md`, `00-context/usp-en-positionering.md`, `00-context/limburg-brede-focus.md`, `00-context/airco-pijler.md`, `00-context/bestaande-site-structuur.md`
- Optional: `00-context/concurrentenlijst.md`, `00-context/kernzoekwoorden.md`

### Thuisbatterij-only
- Required: `00-context/bedrijf-profiel-staycool.md`, `00-context/usp-en-positionering.md`, `00-context/limburg-brede-focus.md`, `00-context/thuisbatterij-pijler.md`, `00-context/bestaande-site-structuur.md`
- Optional: `00-context/concurrentenlijst.md`, `00-context/kernzoekwoorden.md`

### Mixed
- Required: `00-context/bedrijf-profiel-staycool.md`, `00-context/usp-en-positionering.md`, `00-context/limburg-brede-focus.md`, `00-context/airco-pijler.md`, `00-context/thuisbatterij-pijler.md`, `00-context/bestaande-site-structuur.md`
- Optional: `00-context/concurrentenlijst.md`, `00-context/kernzoekwoorden.md`

## Context-First Status
- Deze bibliotheek is context-first, met een werkende contextlaag en een live auditlaag in `01-audits`.
- De huidige documenten leveren basiscontext en de eerste set audits; latere promptlagen kunnen nog scaffolded of onvolledig zijn.
- Latere promptlagen voegen prioritering, productie en executieroutines verder toe.
- Kies per prompt altijd eerst de juiste contextset uit de matrix hierboven.
