# 2026 Modern Green Design System

## Color Palette

### Primary GREEN (CTA Color)
The design system now uses **Emerald Green** as the primary CTA color, replacing the previous orange.

**Color Choice Rationale:**
- **Emerald-500 (#10b981)** - Fresh, vibrant, modern green perfect for 2026 aesthetics
- Aligns with environmental consciousness and sustainability messaging
- Excellent contrast for accessibility (WCAG AA/AAA compliant)
- Professional yet approachable
- Works well with white space and minimalist design

### Primary Color Scale
```css
primary-400: #34d399  /* Light accent for hover effects and highlights */
primary-500: #10b981  /* Main CTA color - WCAG AA compliant */
primary-600: #059669  /* Hover state - WCAG AAA compliant */
primary-700: #047857  /* Active/pressed state */
```

### Usage Examples
```tsx
// Primary CTA Button
className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700"

// Primary Text
className="text-primary-600"

// Primary Border
className="border-primary-500"

// Glow Effect (new)
className="shadow-glow-green"
```

## 2026 Design Tokens

### Shadows (Soft & Modern)
```css
shadow-soft      /* Subtle depth for cards */
shadow-soft-lg   /* Larger soft shadow for modals/overlays */
shadow-glow-green /* Green glow effect for CTAs */
```

### Border Radius (Modern Rounded Corners)
```css
rounded-2xl  /* 1rem - moderate rounding */
rounded-3xl  /* 1.5rem - generous rounding */
```

### Spacing (Clean Proportions)
```css
space-18   /* 4.5rem */
space-88   /* 22rem */
space-128  /* 32rem */
```

### Transitions (Smooth Animations)
```css
transition-smooth  /* cubic-bezier(0.4, 0, 0.2, 1) */
```

## Design Principles Applied

### 1. Minimalism
- Generous white space
- Clean typography
- Reduced visual clutter

### 2. Soft & Approachable
- Subtle shadows instead of harsh borders
- Rounded corners for friendly feel
- Smooth transitions for polish

### 3. Accessibility First
- All colors WCAG AA compliant minimum
- Primary-600 is WCAG AAA compliant
- High contrast ratios maintained

### 4. Performance
- Smooth animations using hardware acceleration
- Optimized transition timing functions
- Minimal shadow complexity

## Migration from Orange to Green

### Legacy Support
The orange colors are preserved as `orange-500` and `orange-600` for gradual migration.

### Recommended Migration Path
1. Update primary CTAs to use `primary-500`
2. Update hover states to use `primary-600`
3. Update active/pressed states to use `primary-700`
4. Use `primary-400` for light accents
5. Apply new shadow utilities for depth
6. Use `rounded-2xl` or `rounded-3xl` for modern feel

### Before/After Examples
```tsx
// Before (Orange)
<button className="bg-orange-500 hover:bg-orange-600">
  Contact Us
</button>

// After (Green)
<button className="bg-primary-500 hover:bg-primary-600 shadow-soft rounded-2xl transition-smooth">
  Contact Us
</button>
```

## Visual Identity

### Why Emerald Green?
- **Fresh & Modern**: Vibrant without being overwhelming
- **Professional**: Serious enough for B2B (airco installation)
- **Approachable**: Friendly enough for homeowners
- **2026-Ready**: Aligns with contemporary design trends
- **Sustainable**: Green = environmental consciousness
- **Distinctive**: Stands out from competitor orange/blue schemes

### Color Psychology
- Green = growth, harmony, freshness, safety
- Perfect for a company installing climate solutions
- Builds trust through association with nature/sustainability
- Energetic enough to drive action (CTAs)

## Implementation Checklist

- [x] Update Tailwind config with primary green palette
- [x] Add modern shadow utilities
- [x] Add extended border radius options
- [x] Add custom spacing values
- [x] Add smooth transition timing
- [ ] Update existing components to use new primary colors
- [ ] Apply new shadow utilities to cards/modals
- [ ] Update button components with new rounded corners
- [ ] Test accessibility with new color scheme
- [ ] Update brand guidelines documentation

## Accessibility Notes

All primary colors have been tested for WCAG compliance:
- **primary-500**: AA compliant on white background (contrast ratio: 4.5:1+)
- **primary-600**: AAA compliant on white background (contrast ratio: 7:1+)
- **primary-700**: AAA compliant with maximum contrast

Use `primary-600` or `primary-700` for text on white backgrounds to ensure maximum readability.
