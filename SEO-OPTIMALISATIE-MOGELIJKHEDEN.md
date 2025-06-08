# SEO Optimalisatie Mogelijkheden - StayCool Airco

**Datum:** 31 mei 2025  
**Huidige SEO Score:** 8.5/10

## 📊 Huidige Status

### ✅ Wat al goed is:
- **Meta Tags**: Uitgebreide implementatie met locatie-optimalisatie
- **Schema Markup**: Zeer uitgebreid (LocalBusiness, Product, Article, etc.)
- **Sitemaps**: Hoofdsitemap + aparte sitemaps voor blog, products, service areas
- **Performance**: Code splitting, lazy loading, WebVitals monitoring
- **Content Structuur**: Goede heading hiërarchie en semantische HTML

### ⚠️ Verbeterpunten:
- Alt-teksten kunnen beschrijvender
- Dubbele entries in sitemap
- Meer interne links nodig
- FAQ schema ontbreekt nog
- Product reviews zonder schema

## 🚀 Quick Wins (Snel te implementeren)

### 1. **Alt-teksten verbeteren**
- **Probleem**: Veel product afbeeldingen hebben generieke alt-teksten
- **Oplossing**: Beschrijvende teksten toevoegen
- **Voorbeeld**: 
  - ❌ "Daikin airco"
  - ✅ "Daikin Stylish airco zilver 3.5kW wandmodel voor woonkamer"

### 2. **Dubbele sitemap entries fixen**
- **Locatie**: `/sitemap.xml`
- **Probleem**: Enkele URLs komen dubbel voor (bijv. verwarmen-met-airco)
- **Impact**: Kan Google crawlers verwarren

### 3. **Breadcrumbs uitbreiden**
- **Huidige status**: Alleen op blog pagina's
- **Uitbreiden naar**: Product pagina's, service area pagina's
- **Voordeel**: Betere navigatie + breadcrumb schema in zoekresultaten

## 💪 Medium Impact Optimalisaties

### 1. **FAQ Schema implementeren**
```json
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Wat kost een airco installatie?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Een airco installatie kost tussen €1.399 en €3.899..."
    }
  }]
}
```
- **Pagina's**: Alle pagina's met FAQ secties
- **Voordeel**: Rich snippets met FAQ's in Google

### 2. **Product Reviews met Schema**
- **Huidige status**: Google Reviews widget
- **Toevoegen**: Product-specifieke reviews
- **Schema**: AggregateRating + Review
- **Resultaat**: Sterren in zoekresultaten bij producten

### 3. **Meer lokale landingspagina's**
Ontbrekende plaatsen in Limburg:
- Amstenrade
- Schinnen  
- Beekdaelen
- Onderbanken
- Beesel
- Bergen
- Peel en Maas

### 4. **Interne link strategie**
- **In artikelen**: Link naar relevante producten
- **In product pagina's**: Link naar gerelateerde artikelen
- **Footer uitbreiden**: Populaire zoektermen toevoegen

## 🎯 Geavanceerde Optimalisaties

### 1. **Voice Search Optimalisatie**
```json
{
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".faq-answer", ".product-description"]
  }
}
```

### 2. **Video Schema** (indien video content)
```json
{
  "@type": "VideoObject",
  "name": "Airco installatie uitleg",
  "description": "Hoe wij een airco installeren",
  "thumbnailUrl": "video-thumb.jpg",
  "duration": "PT5M"
}
```

### 3. **Opening Hours per Locatie**
- Uitbreiding LocalBusiness schema
- Verschillende openingstijden per service area
- Special hours voor feestdagen

### 4. **Structured Snippets Uitbreiden**
- **HowTo Schema**: Voor installatie/onderhoud artikelen
- **Event Schema**: Voor acties en aanbiedingen
- **Service Schema**: Meer detail per service type

## 📈 Prioriteiten Matrix

| Optimalisatie | Moeite | Impact | Prioriteit |
|--------------|--------|---------|------------|
| Alt-teksten | Laag | Medium | Hoog |
| FAQ Schema | Medium | Hoog | Hoog |
| Dubbele sitemap | Laag | Laag | Medium |
| Product Reviews | Hoog | Hoog | Medium |
| Voice Search | Medium | Laag | Laag |

## 🛠️ Implementatie Checklist

- [ ] Alt-teksten updaten voor alle product afbeeldingen
- [ ] Sitemap duplicaten verwijderen
- [ ] FAQ Schema toevoegen aan kennisbank artikelen
- [ ] Breadcrumbs implementeren op alle pagina's
- [ ] Review schema voor producten
- [ ] 10 nieuwe lokale landingspagina's
- [ ] Interne link audit en verbetering
- [ ] Voice search schema testen
- [ ] Opening hours toevoegen aan LocalBusiness

## 📊 Meetbare Doelen

1. **Organisch verkeer**: +20% in 3 maanden
2. **Rich snippets**: Minimaal 50% van pagina's
3. **Lokale zichtbaarheid**: Top 3 voor "airco [stad]" queries
4. **CTR verbetering**: +15% door rich snippets
5. **Core Web Vitals**: Alle metrics in "Good" range houden

---

**Notities voor maandag:**
- Begin met alt-teksten (quick win)
- FAQ schema heeft hoogste ROI
- Check Google Search Console voor nieuwe insights
- Weekend eerst! 🍻