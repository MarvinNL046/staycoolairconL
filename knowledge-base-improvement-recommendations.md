# Knowledge Base CRO-SEO Improvement Recommendations

This document provides specific implementation recommendations to address the issues identified in the CRO-SEO KPI analysis.

## Main Knowledge Base Page (KnowledgeBase.tsx)

### Meta Description Improvement
**Current (121 characters):**
```
Airco kennis: lees over energiebesparing, onderhoud & slimme verwarmingstips. Nu vrijblijvend advies voor uw situatie.
```

**Recommended (159 characters):**
```
Airco kennisbank: uitgebreide gids over energiebesparing, onderhoud, storingscodes & slimme verwarmingstips voor alle aircosystemen. Expert advies & troubleshooting voor uw situatie.
```

### H1 Tag Enhancement
**Current:**
```jsx
<h1 className="text-4xl font-bold text-gray-900 mb-4">
  Kennisbank
</h1>
```

**Recommended:**
```jsx
<h1 className="text-4xl font-bold text-gray-900 mb-4">
  StayCool Airco Kennisbank: Complete Airconditioner Gids
</h1>
```

### H2 Tags Implementation
**Current (category titles not as H2s):**
```jsx
<div className="flex items-center mb-4">
  <div className="bg-blue-100 rounded-lg p-3">
    <category.icon className="h-6 w-6 text-blue-600" />
  </div>
  <h2 className="text-xl font-bold text-gray-900 ml-4">
    {category.title}
  </h2>
</div>
```

**Recommended:**
```jsx
<div className="flex items-center mb-4">
  <div className="bg-blue-100 rounded-lg p-3">
    <category.icon className="h-6 w-6 text-blue-600" />
  </div>
  <h2 className="text-xl font-bold text-gray-900 ml-4">
    {category.title}
  </h2>
</div>
```
*Note: The code looks the same but check that these are rendered as actual `<h2>` HTML elements in the DOM. If not, ensure they are proper heading elements for SEO.*

## MobieleVsSplitAirco.tsx

### Meta Title Adjustment
**Current (62 characters):**
```
Mobiele Airco vs. Split Airco: Welke Is Beter? | StayCool Airco
```

**Recommended (60 characters):**
```
Mobiele vs. Split Airco: Welke Past Bij U? | StayCool Airco
```

## StoringscodeGids.tsx

### Meta Title Adjustment
**Current (65 characters):**
```
Airco Storingscodes: Complete Gids voor Probleemoplossing
```

**Recommended (60 characters):**
```
Airco Storingscodes Gids: Snel Problemen Oplossen | StayCool
```

### Meta Description Trimming
**Current (177 characters):**
```
Leer alles over airco storingscodes, wat ze betekenen en hoe je veel voorkomende problemen zelf kunt oplossen. Een complete gids voor LG, Toshiba, en Mitsubishi Heavy airconditioners.
```

**Recommended (159 characters):**
```
Leer airco storingscodes begrijpen en los problemen zelf op. Complete gids voor LG, Toshiba en Mitsubishi airconditioners met troubleshooting tips.
```

## Technical Implementation Recommendations

### Image Alt Text Template
For all images on knowledge base pages, implement descriptive alt text:

```jsx
<img 
  src="/path/to/image.webp" 
  alt="Descriptive text about what the image shows - include keywords if relevant to the image" 
  width="[width]" 
  height="[height]"
  loading="lazy"
/>
```

### Add More Structured Data for Article Pages
For all knowledge base article pages, implement this enhanced Article schema:

```jsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Organization",
    "name": author
  },
  "datePublished": publishDate,
  "dateModified": modifiedDate,
  "publisher": {
    "@type": "Organization",
    "name": "StayCool Airco",
    "logo": {
      "@type": "ImageObject",
      "url": "https://staycoolairco.nl/images/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": window.location.href
  },
  "keywords": tags.join(", ")
};
```

Add this to the MetaTags component call:

```jsx
<MetaTags
  title={title}
  description={description}
  schema={articleSchema}
  // other existing props...
/>
```

### Add CTA to All Knowledge Base Articles
For consistent conversion opportunity, add this CTA section to the end of all knowledge base articles:

```jsx
<div className="bg-blue-50 p-6 rounded-lg my-8 shadow-sm">
  <h3 className="text-xl font-bold text-blue-800 mb-3">Heeft u vragen over dit onderwerp?</h3>
  <p className="text-blue-700 mb-4">
    Onze airco-experts staan klaar om u te helpen met persoonlijk advies voor uw situatie.
  </p>
  <div className="flex flex-wrap gap-3">
    <a
      href="/contact"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
    >
      Vraag vrijblijvend advies
    </a>
    <a
      href="tel:0462021430"
      className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-md text-base font-medium text-blue-600 bg-white hover:bg-blue-50"
    >
      Bel direct: 046 202 1430
    </a>
  </div>
</div>
```

## Performance Optimization Recommendations

### Implement Image Optimization
Ensure all images are:
1. Compressed (< 200KB)
2. In WebP format
3. Properly sized for their display dimensions
4. Lazy loaded

### Component-level Code Splitting
Consider breaking down larger article pages (like MobieleVsSplitAirco.tsx) into smaller components:

```jsx
// In MobieleVsSplitAirco.tsx
import ComparisonTable from '../../components/articles/ComparisonTable';
import SummaryBox from '../../components/articles/SummaryBox';
import CaseStudyBox from '../../components/articles/CaseStudyBox';
import FAQSection from '../../components/articles/FAQSection';

// Then use them in the render section:
<SummaryBox 
  points={[
    {title: "Mobiele airco:", content: "Voordelig, verplaatsbaar, geen vaste installatie nodig, maar hoger energieverbruik en beperkte koelcapaciteit"},
    // etc.
  ]}
/>

<ComparisonTable 
  headers={["Criteria", "Mobiele Airco", "Split Airco"]}
  rows={[
    ["Aanschafkosten", "€399 - €899", "€1295 - €3999"],
    // etc.
  ]}
/>
```

This will improve code maintainability and potentially load performance.
