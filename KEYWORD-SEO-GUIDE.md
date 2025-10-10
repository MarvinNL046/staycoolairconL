# 🎯 KEYWORD SEO OPTIMIZATION GUIDE

**Datum:** 2025-10-10
**Gemaakt voor:** StayCool Airco

---

## 📋 INHOUDSOPGAVE

1. [Wat is er gemaakt?](#wat-is-er-gemaakt)
2. [Homepage Updates](#homepage-updates)
3. [Voorbeeldpagina](#voorbeeldpagina)
4. [Keyword Generator Tool](#keyword-generator-tool)
5. [Hoe te gebruiken](#hoe-te-gebruiken)
6. [Best Practices](#best-practices)

---

## 🎨 WAT IS ER GEMAAKT?

### 1️⃣ **Homepage Geoptimaliseerd** ✅
- ✅ Nieuwe SEO-content sectie met keyword-rijke H2/H3 headings
- ✅ Meta beschrijving verbeterd met long-tail keywords
- ✅ Keywords verplaatst van meta tag naar daadwerkelijke content
- ✅ "Bij mij in de buurt" targeting toegevoegd
- ✅ Lokale steden prominent genoemd (Roermond, Maastricht, Heerlen, etc.)

**Locatie:** `src/pages/Home.tsx`

### 2️⃣ **Voorbeeldpagina met Optimale Keywords** ✅
Complete voorbeeld implementatie met:
- ✅ H1/H2/H3 structuur met natural keyword targeting
- ✅ Long-tail keywords in content
- ✅ Postcode-specifieke content
- ✅ FAQ's met vraag-gebaseerde keywords
- ✅ Internal linking met keyword anchor tekst
- ✅ Lokale reviews en social proof
- ✅ Semantic keyword variations

**Locatie:** `src/pages/examples/OptimalKeywordExample.tsx`

### 3️⃣ **Long-tail Keyword Generator** ✅
Automatische tool die genereert:
- ✅ 500+ keywords per locatie
- ✅ Transactional, informational, local, seasonal keywords
- ✅ Keyword difficulty scoring (0-100)
- ✅ Commercial intent analyse (high/medium/low)
- ✅ Priority keywords (beste kansen)
- ✅ Quick wins (makkelijk te ranken)
- ✅ Content suggesties (H1, H2, FAQ's)

**Locatie:** `scripts/generate-longtail-keywords.js`

---

## 🏠 HOMEPAGE UPDATES

### Voor vs. Na

#### ❌ VOOR (Suboptimaal)
```tsx
<Helmet>
  <title>Airco Installatie Limburg | StayCool Airco | Specialist in Heerlen, Weert</title>
  <meta name="keywords" content="airco installateur limburg, ..." />
</Helmet>

<Hero />
<Services />
```

**Problemen:**
- Keywords alleen in meta tag (Google gebruikt dit niet!)
- Geen keyword-rijke content op pagina zelf
- Title niet geoptimaliseerd voor long-tail

#### ✅ NA (Geoptimaliseerd)
```tsx
<Helmet>
  <title>Airco Installateur Limburg | Professionele Installatie & Onderhoud | StayCool</title>
  <meta name="description" content="Erkend airco installateur in Limburg voor airconditioning installatie, onderhoud en reparatie. Bespaar tot 60% op verwarmingskosten. F-gassen gecertificeerd. Gratis advies aan huis in Roermond, Maastricht, Heerlen & heel Limburg." />
</Helmet>

<Hero />

{/* SEO Content Sectie */}
<section className="py-16 bg-white">
  <h2>Airco Installateur bij u in de Buurt in Limburg</h2>
  <p>Zoekt u een betrouwbare <strong>airco installateur in Limburg</strong>?...</p>

  <h3>Airco Installatie in Limburg</h3>
  <p>Als F-gassen gecertificeerd airco bedrijf verzorgen wij vakkundige installatie...</p>

  <h3>Airco Service in Roermond, Maastricht, Heerlen, Venlo, Weert & omgeving</h3>
  <p>Wij zijn uw lokale <strong>airco specialist dichtbij</strong>...</p>
</section>
```

**Verbeteringen:**
- ✅ Keywords in H2/H3 headings (belangrijkst voor Google!)
- ✅ Natural keyword integration in body text
- ✅ Long-tail keywords: "airco installateur bij u in de buurt"
- ✅ Alle grote steden genoemd voor local SEO
- ✅ Meta description met call-to-action en USP's

---

## 📄 VOORBEELDPAGINA

De voorbeeldpagina (`OptimalKeywordExample.tsx`) toont alle best practices:

### 🎯 Keyword Targeting Strategie

```tsx
// H1 - Primary Keyword
<h1>Airco Installateur Roermond - Bij u in de Buurt</h1>

// H2 - Secondary Keywords
<h2>Erkende Airco Installateur bij u in de Buurt in Roermond</h2>

// H3 - Service-specific Keywords
<h3>Airco Installatie Roermond</h3>
<h3>Airco Onderhoud & Reparatie</h3>

// Long-tail Question Keywords
<h2>Wat Kost Airco Installatie in Roermond?</h2>

// Local SEO - Postcodes
<h3>Airco Service in Alle Wijken van Roermond</h3>
<li>Airco installatie 6041 - Roermond Centrum</li>
<li>Klimaatbeheersing 6042 - Herten</li>
```

### ✅ Best Practices Gedemonstreerd

1. **Natural Keyword Integration**
   ```tsx
   <p>
     Bent u op zoek naar een <strong>betrouwbare airco installateur in Roermond</strong>?
     StayCool Airco is uw lokale specialist voor professionele klimaatbeheersing...
   </p>
   ```

2. **Semantic Variations**
   - airco → airconditioning → klimaatbeheersing → koelsysteem
   - installatie → plaatsen → montage → installeren

3. **Location Targeting**
   - Postcodes: 6041, 6042, 6043
   - Wijken: Roermond Centrum, Herten, Donderberg
   - Nabije steden: Weert (15 km), Venlo (25 km)

4. **FAQ's met Vraag Keywords**
   - "Wat kost airco installatie in Roermond?"
   - "Hoe snel kan een airco geïnstalleerd worden in Roermond?"
   - "Welke postcodes in Roermond bedienen jullie?"

---

## 🛠️ KEYWORD GENERATOR TOOL

### Basis Gebruik

```bash
# Genereer keywords voor alle steden
node scripts/generate-longtail-keywords.js

# Genereer voor specifieke stad
node scripts/generate-longtail-keywords.js --city roermond

# Exporteer naar JSON
node scripts/generate-longtail-keywords.js --city maastricht --export keywords.json
```

### Output Voorbeeld

```
📊 Statistics:
   Total Keywords: 557
   High Intent: 82
   Easy to Rank (<30 difficulty): 478
   Long-tail (5+ words): 245

🎯 TOP 20 PRIORITY KEYWORDS (High Intent + Low Difficulty):
────────────────────────────────────────────────────────────
 1. "airco installateur bij mij in de buurt Roermond"
    Difficulty: 10 | Intent: high | Volume: low

 2. "split airco installatie Roermond prijs"
    Difficulty: 15 | Intent: high | Volume: low

⚡ QUICK WINS (Easy to Rank, Long-tail):
────────────────────────────────────────
 1. "wat kost airco installatie Roermond" (Difficulty: 10)
 2. "airco specialist bij mij in de buurt Roermond" (Difficulty: 10)

💡 CONTENT SUGGESTIONS:
──────────────────────
📝 H1: "Airco Installateur Bij Mij In De Buurt Roermond"
📝 H2: "Split Airco Installatie Roermond Prijs"
📝 FAQ: "Wat kost airco installatie in Roermond?"
```

### Keyword Categories

De tool genereert 5 categorieën keywords:

1. **Transactional** (Hoog commercieel intent)
   - "airco installatie {stad}"
   - "{specialist} bij mij in de buurt {stad}"
   - "kosten {service} {stad}"

2. **Informational** (Hoog zoekvolume)
   - "wat kost {service} {stad}"
   - "beste {product} voor {stad}"
   - "{product} {stad} ervaringen"

3. **Local** (Lokale SEO)
   - "{service} {postcode}"
   - "{specialist} regio {stad}"
   - "lokale {specialist} {stad}"

4. **Questions** (Voice search)
   - "waar kan ik {service} in {stad}"
   - "hoeveel kost {service} in {stad}"
   - "wie doet {service} in {stad}"

5. **Seasonal** (Tijdelijk)
   - "{service} {stad} zomer"
   - "{service} {stad} 2025"
   - "{service} {stad} aanbieding"

### Difficulty Scoring

De tool berekent automatisch keyword difficulty (0-100):

- **0-20:** Zeer makkelijk te ranken (long-tail, lokaal)
- **21-40:** Makkelijk te ranken (niche keywords)
- **41-60:** Matig moeilijk (algemene keywords)
- **61-80:** Moeilijk (competitieve keywords)
- **81-100:** Zeer moeilijk (generieke keywords)

**Strategie:** Focus op keywords <30 difficulty voor snelle resultaten!

---

## 📚 HOE TE GEBRUIKEN

### Stap 1: Analyseer Huidige Keywords

```bash
# Run keyword audit
node keyword-audit.js
```

Dit toont:
- Hoeveel keywords per pagina
- Meest gebruikte keywords
- Keyword overlap
- Problemen en kansen

### Stap 2: Genereer Long-tail Keywords

```bash
# Voor één stad
node scripts/generate-longtail-keywords.js --city roermond

# Exporteer voor gebruik
node scripts/generate-longtail-keywords.js --city roermond --export roermond-keywords.json
```

### Stap 3: Integreer in Content

**Gebruik de content suggesties uit de tool:**

```tsx
// Voorbeeld: Roermond pagina updaten

// H1 (Primary Keyword)
<h1>Airco Installateur Bij Mij In De Buurt Roermond</h1>

// H2 (Secondary Keywords)
<h2>Wat Kost Airco Installatie in Roermond?</h2>
<h2>Airco Service in Alle Wijken van Roermond</h2>

// H3 (Specific Keywords)
<h3>Split Airco Installatie Roermond Prijs</h3>
<h3>Airco Installatie 6041 - Roermond Centrum</h3>

// FAQ's
<h3>Hoe Snel Kan Een Airco Geïnstalleerd Worden in Roermond?</h3>
<h3>Welke Postcodes in Roermond Bedienen Jullie?</h3>
```

### Stap 4: Valideer en Monitor

1. **Google Search Console**
   - Monitor impressions en clicks
   - Check ranking positions voor target keywords
   - Analyseer CTR (click-through rate)

2. **Google Analytics**
   - Track organic traffic per pagina
   - Monitor bounce rate en engagement
   - Check conversions per keyword

---

## 🎯 BEST PRACTICES

### ✅ DO's

1. **Keywords in Content** (NIET alleen meta tags!)
   ```tsx
   ✅ <h1>Airco Installateur Roermond</h1>
   ✅ <p>Als <strong>erkend airco installateur</strong>...</p>
   ❌ <meta name="keywords" content="airco installateur" />
   ```

2. **Natural Integration**
   ```tsx
   ✅ "Zoekt u een airco installateur bij u in de buurt in Roermond?"
   ❌ "airco installateur roermond airco installatie roermond klimaatbeheersing"
   ```

3. **Long-tail Focus**
   ```tsx
   ✅ "wat kost airco installatie in roermond 2025"
   ❌ "airco installatie"
   ```

4. **Semantic Variations**
   ```tsx
   ✅ Gebruik: airco, airconditioning, klimaatbeheersing, koelsysteem
   ❌ Herhaal alleen: airco, airco, airco, airco
   ```

5. **Location Specificity**
   ```tsx
   ✅ Postcodes: "airco installatie 6041"
   ✅ Wijken: "klimaatbeheersing Roermond Centrum"
   ✅ Omstreken: "airco service Roermond en omgeving"
   ```

### ❌ DON'Ts

1. **Geen Meta Keywords Tag**
   ```tsx
   ❌ <meta name="keywords" content="..." />
   // Google gebruikt dit sinds 2009 niet meer!
   ```

2. **Geen Keyword Stuffing**
   ```tsx
   ❌ "airco installateur airco installatie airco monteur airco specialist"
   ✅ "Als erkend airco installateur bieden wij professionele installatie..."
   ```

3. **Geen Hidden Text**
   ```tsx
   ❌ <p style="display: none">airco installateur roermond...</p>
   ❌ <p style="color: white; background: white">keywords...</p>
   ```

4. **Geen Over-Optimization**
   ```tsx
   ❌ <h1>Airco Installateur Roermond | Airco Installatie Roermond</h1>
   ✅ <h1>Airco Installateur Roermond - Bij u in de Buurt</h1>
   ```

### 🎨 Content Structuur Template

```tsx
// Optimale pagina structuur voor lokale SEO

<Helmet>
  <title>Primary Keyword | Secondary Keyword | Brand</title>
  <meta name="description" content="Long-tail keyword + USP's + call-to-action + location" />
</Helmet>

{/* Hero */}
<h1>Primary Long-tail Keyword</h1>
<p>Supporting text met semantic variations</p>

{/* Main Content */}
<h2>Secondary Keyword (vaak als vraag)</h2>
<p>Natural keyword integration in body text met <strong>emphasis</strong></p>

{/* Service Details */}
<h3>Specific Service + Location</h3>
<ul>
  <li>Benefit met keyword</li>
  <li>USP met keyword variation</li>
</ul>

{/* Local Content */}
<h3>Location-Specific (Postcodes/Wijken)</h3>
<ul>
  <li>Keyword + postcode 6041</li>
  <li>Keyword + wijk naam</li>
</ul>

{/* FAQ's */}
<h2>Veelgestelde Vragen</h2>
<h3>Vraag met long-tail keyword?</h3>
<p>Antwoord met keywords naturlijk geïntegreerd</p>

{/* Social Proof */}
<h2>Reviews/Ervaringen uit {stad}</h2>

{/* Internal Linking */}
<Link to="/other-page">
  Anchor tekst met keyword
</Link>

{/* CTA */}
<h2>Call-to-Action met urgentie + keyword</h2>
```

---

## 📊 VERWACHTE RESULTATEN

### 🚀 Korte Termijn (1-2 maanden)

- ✅ Long-tail keywords beginnen te ranken (difficulty <30)
- ✅ Verbeterde CTR door betere titles/descriptions
- ✅ Lagere bounce rate door relevantere content
- ✅ Meer "bij mij in de buurt" zoekresultaten

### 📈 Middellange Termijn (3-6 maanden)

- ✅ Top 10 rankings voor 15+ target keywords
- ✅ 30-50% toename organisch verkeer
- ✅ Local Pack appearances (Top 3 in Google Maps)
- ✅ Betere conversie door specifiekere traffic

### 🎯 Lange Termijn (6-12 maanden)

- ✅ Dominantie in lokale zoekresultaten per stad
- ✅ Brand awareness in "airco limburg" niche
- ✅ Featured snippets voor vraag-keywords
- ✅ Sustainabel organisch verkeer zonder Ads

---

## 🔧 TROUBLESHOOTING

### "Keywords ranken niet na 2 maanden"

**Checklist:**
1. ✅ Staan keywords in H1/H2/H3? (Niet alleen meta tag!)
2. ✅ Is content natural en leesbaar? (Geen keyword stuffing)
3. ✅ Zijn er backlinks naar de pagina?
4. ✅ Is de pagina geïndexeerd? (Check Search Console)
5. ✅ Is er te veel concurrentie? (Check keyword difficulty)

**Oplossing:** Focus op **long-tail keywords** (difficulty <30) voor quick wins!

### "Bounce rate is hoog"

**Oorzaak:** Keywords matchen niet met user intent of pagina content

**Oplossing:**
1. Analyseer Google Search Console → Queries
2. Check welke keywords traffic geven
3. Update content om beter aan te sluiten bij die keywords

### "Te veel keywords, welke kiezen?"

**Strategie:**
1. Start met **Quick Wins** (difficulty <30, long-tail)
2. Focus op **1 primary keyword** per pagina
3. Voeg **3-5 secondary keywords** toe natuurlijk in content
4. Test en monitor resultaten
5. Expand langzaam naar moeilijkere keywords

---

## 📞 SUPPORT

**Vragen of hulp nodig?**

1. Check `keyword-analysis-detailed.md` voor volledig rapport
2. Run `node keyword-audit.js` voor huidige status
3. Gebruik `OptimalKeywordExample.tsx` als template

**Handige Commands:**
```bash
# Keyword analyse
node keyword-audit.js

# Genereer keywords
node scripts/generate-longtail-keywords.js --city [stad]

# Export keywords
node scripts/generate-longtail-keywords.js --export keywords.json
```

---

**Laatste update:** 2025-10-10
**Versie:** 1.0
**Gemaakt door:** Claude Code 🤖
