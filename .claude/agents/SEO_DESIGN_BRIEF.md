# SEO Page Design Brief - StayCool Airco

## Project Overview
**Company:** StayCool Airco
**Website:** https://staycoolairco.nl
**Mission:** Generate 50 SEO-optimized landing pages for airco installation, maintenance, and home battery services in Limburg

## Business Profile
- **Core Services:** Airco installation, maintenance, repair, AlphaESS home batteries
- **Service Area:** Limburg, Netherlands (Maastricht, Roermond, Heerlen, Sittard, Venlo, etc.)
- **Target Audience:** Homeowners and businesses seeking energy-efficient climate control
- **Key Differentiators:**
  - F-gas certified installers
  - 60% energy savings via heat pump technology
  - Premium brands: Daikin, Mitsubishi Heavy, LG, Tosot/Gree, Samsung
  - 10-year warranties on premium models
  - Avoid solar panel return delivery costs through smart heating

## Design System Specifications

### Color Palette
```css
/* Primary Colors */
--blue-600: #2563eb;    /* Primary blue - WCAG AA */
--blue-700: #1d4ed8;    /* Darker blue - WCAG AAA */

/* CTA Colors */
--orange-500: #F97316;  /* Main CTA - WCAG AA */
--orange-600: #EA580C;  /* Hover state - WCAG AAA */

/* Neutrals */
--gray-600: #4b5563;    /* Body text - WCAG AA */
--gray-700: #374151;    /* Headings - WCAG AAA */
--gray-900: #111827;    /* Maximum contrast */

/* Backgrounds */
--sky-50: #f0f9ff;
--sky-400: #38bdf8;
--sky-500: #0ea5e9;

/* Secondary (for batteries) */
--yellow-400: #facc15;
--yellow-500: #eab308;
```

### Typography
- **Font Stack:** Default sans-serif (system fonts)
- **Headings:**
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold` (gray-900)
  - H2: `text-3xl md:text-4xl font-bold` (gray-900)
  - H3: `text-2xl md:text-3xl font-semibold` (gray-900)
  - H4: `text-xl font-semibold` (gray-700)
- **Body:** `text-base md:text-lg` (gray-600)
- **Lead Text:** `text-xl md:text-2xl` (gray-700 or blue-50 on colored backgrounds)

### Spacing & Layout
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding:** `py-12 md:py-16 lg:py-20`
- **Grid Layouts:** Tailwind grid system (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Responsive Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)

### Components

#### Hero Section Pattern
```tsx
<section className="bg-gradient-to-br from-sky-400 to-sky-500 text-white">
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      [Page Title with Keywords]
    </h1>
    <p className="text-xl md:text-2xl text-sky-50 mb-8">
      [Compelling value proposition]
    </p>
    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
        Gratis Offerte Aanvragen
      </Link>
      <Link to="/capaciteit-calculator" className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
        <Calculator className="h-5 w-5 mr-2" />
        Bereken Capaciteit
      </Link>
    </div>
  </div>
</section>
```

#### USP Cards Pattern
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {usps.map((usp) => (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        {usp.icon} {/* Lucide React icon */}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900">{usp.title}</h3>
      <p className="text-gray-600">{usp.description}</p>
    </div>
  ))}
</div>
```

#### Content Section Pattern
```tsx
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
      [Section Heading]
    </h2>
    <div className="prose prose-lg max-w-none">
      {/* Rich content here */}
    </div>
  </div>
</section>
```

#### CTA Sections Pattern
```tsx
<section className="py-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Klaar voor [Service/Product]?
    </h2>
    <p className="text-xl mb-8 text-orange-50">
      Vraag nu een gratis offerte aan en ontdek wat wij voor u kunnen betekenen
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg">
        <Phone className="h-6 w-6 mr-2" />
        Neem Contact Op
      </Link>
      <a href="tel:0462021430" className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-bold rounded-lg hover:bg-orange-800 transition-colors text-lg">
        046 202 1430
      </a>
    </div>
  </div>
</section>
```

### Icons (Lucide React)
Common icons to use:
- `CheckCircle` - Benefits, features
- `Shield` - Warranty, certification
- `Euro` - Pricing, savings
- `Zap` - Energy, efficiency
- `Wind` - Airco, cooling
- `ThermometerSun` - Heating
- `Phone` - Contact CTAs
- `Mail` - Email CTAs
- `Calculator` - Tools, calculators
- `TrendingUp` - Savings, growth
- `Star` - Reviews, quality
- `Award` - Certifications

## SEO Requirements

### Meta Tags Pattern
```tsx
import MetaTags from '../components/MetaTags';

<MetaTags
  title="[Primary Keyword] Limburg | [Secondary Keyword] | StayCool Airco"
  description="[Primary Keyword] ✓ [Benefit 1] ✓ [Benefit 2] ✓ [Benefit 3]. Gratis advies!"
/>
```

### Structured Data Pattern
```tsx
import SchemaMarkup from '../components/SchemaMarkup';

<SchemaMarkup
  type="Service"
  data={{
    "@type": "Service",
    name: "[Service Name]",
    description: "[Detailed service description]",
    provider: {
      "@type": "LocalBusiness",
      name: "StayCool Airco"
    },
    areaServed: {
      "@type": "State",
      name: "Limburg"
    }
  }}
/>
```

### Breadcrumbs Pattern
```tsx
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: '[Category]', path: '/[category]' },
  { label: '[Page]' }
];

<Breadcrumbs items={breadcrumbItems} className="mb-4" />
```

### Content Structure
1. **Hero Section** - Grab attention with H1, value prop, CTAs
2. **USPs Section** - 4 key benefits in cards
3. **Main Content** - 1500-2000 words, naturally incorporating keywords
4. **Features/Details** - Bullet points, comparison tables
5. **FAQ Section** - 5-8 common questions
6. **CTA Section** - Final conversion opportunity
7. **Related Content** - Internal linking to related pages

### Keyword Strategy
- **H1:** Primary keyword + location/context
- **H2s:** Secondary keywords, benefits, features
- **H3s:** Specific details, sub-topics
- **Body:** Natural language, LSI keywords, semantic variations
- **Alt Text:** Descriptive with primary keyword when relevant

## CTA Templates

### Primary CTAs
1. **"Gratis Offerte Aanvragen"** - Main conversion action
2. **"Neem Contact Op"** - General inquiry
3. **"Bel Nu: 046 202 1430"** - Phone conversion
4. **"WhatsApp: 06 36481054"** - Mobile-friendly
5. **"Bereken uw [Besparing/Capaciteit]"** - Calculator tools

### Secondary CTAs
1. **"Lees Meer"** - Content exploration
2. **"Bekijk Merken"** - Product pages
3. **"Download Brochure"** - Lead magnet
4. **"Plan Onderhoud"** - Service scheduling
5. **"Vraag Advies"** - Expert consultation

## Brand Voice & Tone

### Voice Characteristics
- **Professional yet Approachable:** Expert knowledge without jargon
- **Dutch Language:** Formal "u" form (beleefdheid) for main content
- **Helpful:** Focus on solving customer problems
- **Trustworthy:** Emphasize certifications, warranties, experience
- **Local:** Reference Limburg locations, Dutch market specifics

### Messaging Pillars
1. **Expertise:** "F-gassen gecertificeerd", "15+ jaar ervaring"
2. **Value:** "60% besparing", "10 jaar garantie"
3. **Service:** "Gratis advies", "Snelle service"
4. **Quality:** "A-merken", "Professionele installatie"
5. **Sustainability:** "Milieuvriendelijk", "CO2 reductie"

## Technical Requirements

### File Structure
```
src/pages/seo/
├── pillar-1/
│   ├── subpillar-1.tsx
│   ├── subpillar-2.tsx
│   ├── subpillar-3.tsx
│   ├── subpillar-4.tsx
│   └── subpillar-5.tsx
├── pillar-2/
│   └── ... (5 files)
... (10 pillars total)
```

### Component Imports
```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { [Icons] } from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import Breadcrumbs from '../../components/Breadcrumbs';
import SchemaMarkup from '../../components/SchemaMarkup';
import LazyImage from '../../components/LazyImage';
```

### Image Optimization
- Use `LazyImage` component for all images
- WebP format preferred
- Alt text with keywords
- Existing image paths: `/images/[category]/[filename].webp`

### Internal Linking
- Link to related services
- Link to product pages
- Link to contact page
- Link to calculators
- Use descriptive anchor text

## Content Guidelines

### Word Count
- **Minimum:** 1500 words per page
- **Optimal:** 1800-2200 words
- **Structure:** 40% above fold, 60% in-depth content

### Keyword Density
- **Primary Keyword:** 1-2% density
- **Secondary Keywords:** 0.5-1% each
- **LSI Keywords:** Natural placement
- **Avoid:** Keyword stuffing, forced repetition

### Readability
- **Paragraphs:** 2-4 sentences max
- **Sentences:** 15-20 words average
- **Lists:** Use bullet points for scanability
- **Bold:** Highlight key benefits
- **Headers:** Break content every 200-300 words

## Conversion Optimization

### CTA Placement
1. **Hero Section:** Primary CTA above fold
2. **After USPs:** Reinforce value proposition
3. **Mid-Content:** Contextual CTAs in natural breaks
4. **FAQ Section:** Address objections, then CTA
5. **Footer:** Final conversion opportunity

### Trust Signals
- **Certifications:** F-gassen, STEK erkend
- **Warranties:** "10 jaar garantie"
- **Experience:** "15+ jaar ervaring"
- **Service Area:** "Heel Limburg"
- **Response Time:** "Binnen 24 uur antwoord"

## Success Criteria

Each page must include:
- ✅ SEO-optimized title (50-60 chars)
- ✅ Meta description (150-160 chars)
- ✅ H1 with primary keyword
- ✅ Structured data (Schema.org)
- ✅ Breadcrumbs navigation
- ✅ 1500+ words of quality content
- ✅ 2-3 CTAs strategically placed
- ✅ Internal links to related pages
- ✅ Mobile-responsive design
- ✅ Accessibility compliant (WCAG AA)
- ✅ Fast loading (<3s on 3G)

---

**This brief ensures consistency across all 50 SEO pages while maintaining StayCool Airco's brand identity and conversion goals.**
