# Frank Energie — Styling DNA (referentie voor StayCool redesign)

Bron: https://www.frankenergie.nl/nl — onderzocht 2026-06-16 via computed styles + DOM.
Doel: Frank's strakke, "anno 2026" look vertalen naar StayCool's eigen merk-blauw, zonder SEO-verlies.

> **Let op:** dit is een *stijl-referentie*, geen 1-op-1 kopie. Kleuren mappen we naar StayCool's
> eigen blauw (#40B0E0 / #2080C0 / #304090). Frank's structuur/ritme/whitespace nemen we over.

---

## 1. Kleuren (Frank's tokens)

| Rol | Frank hex | StayCool-equivalent (voorstel) |
|---|---|---|
| Brand / hero-bg | `#00a6c9` (cyan-teal) | `#2080C0` / `#40B0E0` |
| Brand bold | `#007394` | `#2080C0` donkerder |
| Brand boldest | `#004e6b` | `#304090` (deep navy-blue) |
| Brand soft | `#d5f0f6` | licht-blauw tint |
| Brand softest | `#f2fafc` | bijna-wit blauw |
| Tekst (donker/koppen) | `#18354a` (navy) | navy `#1b2b3c`-achtig |
| Body-tekst | grijs-navy | idem |
| **Accent CTA (oranje)** | `#f06e2c` (crusta) | **beslissen:** StayCool mapte oranje→blauw. Frank's contrast-CTA = oranje. Optie: behoud 1 warm accent voor CTA's. |
| Accent geel | `#fdbb00` | reviews/sterren |
| Accent groen (checks) | `#47a92a` | check-bullets |
| Surface primary | `#ffffff` | wit |
| Surface secondary | `#f6f7f8` | licht-grijs card-bg |
| Footer-bg | `#18354a` (donkernavy) | deep navy |
| Border default | `#e8ebed` | idem |

## 2. Typografie

- **Font:** `Geomanist` (geometric sans, 700 voor koppen). StayCool-equivalent: een geometric/grotesk
  (bv. Geomanist-licentie, of gratis alternatief zoals *Satoshi*, *General Sans*, *Hanken Grotesk*).
- **H1:** 52px / weight 700 / color `#18354a` / line-height 1.25
- **Line-height body:** 1.56 · heading 1.25 · button 1.2

## 3. Radii (Frank's schaal)

`0.125 / 0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 rem` + `full: 7.5rem` (pill-buttons).
- Cards: **24px** (`1.5rem`)
- Buttons: **120px** (volledig pill)

## 4. Shadows (elevation)

- `small`: `0px 7px 10px #00000005, 0px 3px 4px #00000005`
- `medium`: `0px 4px 17px #00000005, 0px 11px 18px #0000000a`
- `large`: `0px 30px 60px #00000012, 0px 7px 10px #00000005, 0px 3px 4px #00000005`

Heel subtiel — lage opacity, grote blur. Geen harde drop-shadows.

## 5. Buttons

| Type | Stijl |
|---|---|
| Primair (CTA) | bg `#f06e2c` oranje · wit · pill (120px) · padding 16px · weight 600 · 16px |
| Inverse (op blauw) | bg wit · navy tekst · pill |
| Secundair/outline | transparant · navy tekst · navy 1px border · pill |

## 6. Layout-patronen (per pagina)

### Hero (homepage)
- Volle-breedte **blauw** vlak, golvende onderrand.
- **Witte card** (radius 24px, elevation) links-overlappend met: trust-badges boven, H1, body, **inline intake-form** (postcode + huisnr + toev. → oranje CTA), trust-rating-row eronder.
- Illustratie/visual rechts (Frank: 3D iso-illustratie — *hier komt three.js/WebGL in beeld*).
- Onder hero: rij met 3 groene-check USP's.

### Producten-overzicht
- H2 + filter-pills-rij (outline pills + chevron).
- Resultaat-count + sort-dropdown.
- **Product-card grid (3-koloms):** wit, radius, subtiele shadow, productfoto gecentreerd op wit,
  navy titel, **oranje prijs "Vanaf €X"**, spec-rows met mini-icons (score/beoordeling/resultaat).

### Product-detail
- Breadcrumb (klein, grijs) → grote navy H1 → grijze body → **2 CTA's (oranje filled + outline pill)**.
- Productfoto rechts op wit, veel whitespace.
- Rij met 3 groene-check features.
- Lichtgrijze (`#f6f7f8`) **rounded sectie** "Over [merk]": kop+body links, logo rechts.
- 3 witte feature-cards (rounded, shadow, ronde check-badge, bold navy titel).
- Vergelijk-grid onderaan.

### Footer
- Donkernavy `#18354a`, witte logo + witte links, 4 kolommen.

## 7. Wat we overnemen vs aanpassen

**Overnemen:** whitespace-ritme, 24px card-radius, pill-buttons, subtiele elevation, golvende hero-rand,
witte-card-op-blauw hero, check-bullet USP-rijen, card-grid voor producten, breadcrumb-detailpagina.

**Aanpassen:** kleuren → StayCool-blauw; font → eigen keuze; **CTA-kleur beslissen** (oranje contrast
vs StayCool all-blue); geen verzonnen reviews (echte Trustpilot/Google).
