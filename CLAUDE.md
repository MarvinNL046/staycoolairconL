# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Environment Overview

This is a React 18 TypeScript website for StayCool Airco, an air conditioning installation and maintenance specialist in Limburg, Netherlands. The site is SEO-optimized and built with performance as a priority.

## Common Development Commands

### Development
```bash
npm run dev          # Start development server on port 5173
npm run lint         # Run ESLint with TypeScript support
npm run preview      # Preview production build locally
```

### Building
```bash
npm run build        # Full production build (includes brands data, image optimization, sitemaps)
npm run build:prod   # Production build with NODE_ENV=production
```

### Performance Analysis
```bash
npm run analyze-bundle      # Analyze bundle sizes
npm run analyze-schema      # Audit schema markup
npm run performance-audit   # Run both analyses
```

### Individual Build Steps
```bash
npm run build:brands        # Compile brand data files
npm run optimize-images     # Optimize product images
npm run generate-sitemaps   # Generate all sitemaps
```

## High-Level Architecture

### Routing & Code Splitting
- All routes are lazy-loaded using React.lazy() for optimal performance
- Routes organized by type: main pages, product details, knowledge base, location landing pages, blog
- Smart route preloading based on current navigation context
- AnimatePresence used for page transitions

### Component Patterns
- **Optimized Components**: Performance-critical components have "Optimized" versions (e.g., HeroOptimized)
- **Layout Components**: ArticleLayout and KnowledgeBaseArticle provide consistent page structures
- **SEO Components**: MetaTags dynamically generates meta tags based on page context (location, product, service)
- **Performance Monitoring**: WebVitalsReporter and PerformanceMonitor track user experience metrics

### Data Flow
- No centralized state management - uses local component state and URL-based state
- Static data stored in `/src/data/` organized by type (brands, products, service areas)
- Forms use controlled components with local state
- Dual submission system for forms (EmailJS + webhook) for reliability

### API Integrations
- **EmailJS**: Primary form submission with webhook backup to LeadConnectorHQ
- **Google Analytics**: Dual tracking IDs with throttled event tracking
- **Google Maps**: Interactive service area maps
- **Stripe**: Payment processing (configured but limited usage)
- **Environment Variables**: All API keys stored in `.env` files

### Performance Optimizations
- Aggressive lazy loading of all route components
- Manual chunk splitting in Vite config for vendor separation
- Request idle callback for non-critical operations
- Skeleton loaders without animations for better perceived performance
- Image optimization pipeline in build process
- Inline assets under 4KB

### SEO Implementation
- Dynamic meta tags based on page context (location, product, service)
- Multiple schema types: Organization, FAQ, Product, Service, Review, Breadcrumbs
- SEO-friendly URL structure with keywords
- Automatic sitemap generation for all content types
- Voice search optimization with speakable content

### Build Pipeline
1. Compile TypeScript brand data to JavaScript
2. Bundle brand data for runtime import
3. Optimize product images (WebP format)
4. Generate sitemaps (products, service areas, blog, main)
5. TypeScript compilation and Vite bundling

### Security
- Comprehensive Content Security Policy headers
- Environment variables for sensitive data
- Input validation on all forms
- No hardcoded credentials in source

## Key Files & Directories

- `/src/App.tsx` - Main routing configuration
- `/src/utils/email.ts` - Form submission logic with dual system
- `/src/components/SEO/MetaTags.tsx` - Dynamic SEO meta tag generation
- `/src/data/` - Static data files (products, brands, service areas)
- `/scripts/` - Build and optimization scripts
- `/public/` - Static assets and sitemaps

## Development Patterns

### Adding New Pages
1. Create component in appropriate directory (`/src/pages/`)
2. Add lazy import in App.tsx
3. Add route in App.tsx
4. Update sitemap generation if needed
5. Ensure MetaTags component is used with appropriate data

### Working with Forms
- Use controlled components with useState
- Implement dual submission (EmailJS + webhook)
- Add toast notifications for user feedback
- Redirect to thank you page after submission
- Track conversions with analytics

### Performance Considerations
- Always lazy load route components
- Use LazyImage component for images
- Minimize bundle size by checking imports
- Monitor performance with built-in tools
- Test on slow connections and devices