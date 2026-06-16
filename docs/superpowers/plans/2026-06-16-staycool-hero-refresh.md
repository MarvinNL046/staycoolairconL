# StayCool Hero Refresh (Frank-DNA) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the StayCool homepage hero to Frank Energie's calm/clean look in StayCool blue, on a new design-token layer + reusable UI primitives, with a lazy WebGL airco accent — zero SEO/CWV regression, no framework migration.

**Architecture:** Extend (never replace) `tailwind.config.js` with new semantic tokens alongside the existing brand remap. Add small focused UI primitives in `src/components/ui/`. Restyle `HeroRedesign.tsx` in place using those primitives. three.js loads code-split and only after LCP, behind a static poster fallback.

**Tech Stack:** Vite 5 + React 18 (SPA), Tailwind 3.4, react-helmet-async, framer-motion, three.js (new), @fontsource/plus-jakarta-sans (new).

**Spec:** [docs/superpowers/specs/2026-06-16-staycool-visual-refresh-design.md](../specs/2026-06-16-staycool-visual-refresh-design.md)

**Note on testing:** This repo has no unit-test runner (no vitest/jest). Verification is pragmatic and matches the project's real toolchain: `npm run lint`, `npm run build` (includes `tsc`), `npm run validate:build`, `npm run check-links:rendered:local`, a Lighthouse run, and a visual screenshot. Do not introduce a new test framework.

---

## File Structure

- `tailwind.config.js` — MODIFY: add `ink`, `accent`, `surface` colors; `pill` radius; `elevation-{sm,md,lg}` shadows; `display` fontFamily.
- `src/main.tsx` — MODIFY: import self-hosted Plus Jakarta Sans weights.
- `index.html` — MODIFY: preload the 800-weight woff2 for LCP headline.
- `src/components/ui/Button.tsx` — MODIFY: add `accent` + `inverse` variants and a `shape` prop (`rounded` default | `pill`). Backward compatible.
- `src/components/ui/Card.tsx` — CREATE: white/soft card, 24px radius, elevation.
- `src/components/ui/Section.tsx` — CREATE: vertical-rhythm wrapper.
- `src/components/ui/FeatureCard.tsx` — CREATE: round check-badge + navy title + body.
- `src/components/ui/WaveDivider.tsx` — CREATE: SVG wavy bottom edge.
- `src/components/ui/WebglAccent.tsx` — CREATE: lazy three.js airco accent with poster fallback.
- `src/components/three/AircoScene.ts` — CREATE: procedural three.js scene (code-split target).
- `src/components/HeroRedesign.tsx` — MODIFY: restyle using the new tokens + primitives.
- `src/components/Navbar.tsx` — MODIFY: slim to 3 items (Airco's, Thuisbatterijen, Plan-adviesgesprek button) + keep tel: CTA; restyle to tokens; drop mega-dropdowns.

---

## Task 1: Install dependencies

**Files:** `package.json` (modified by npm)

- [ ] **Step 1: Install three.js + font + types**

Run:
```bash
npm i three @fontsource/plus-jakarta-sans
npm i -D @types/three
```
Expected: packages added, no peer-dependency errors.

- [ ] **Step 2: Verify they resolve**

Run: `node -e "require.resolve('three'); require.resolve('@fontsource/plus-jakarta-sans/package.json'); console.log('ok')"`
Expected: prints `ok`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore(deps): add three.js + Plus Jakarta Sans for hero refresh"
```

---

## Task 2: Design tokens in tailwind.config.js

**Files:** Modify `tailwind.config.js:29-70` (the `colors` + `borderRadius` blocks inside `theme.extend`).

- [ ] **Step 1: Add semantic colors**

Inside `theme.extend.colors`, ADD these keys (do NOT remove or change `quatt`, `orange`, `blue`, `gray` — they stay for backward compat):

```js
        // --- Frank-DNA refresh tokens (added 2026-06; additive, non-breaking) ---
        ink: {
          DEFAULT: '#1b2b3c', // headings / primary text on light
          soft: '#5b6b78',    // body / secondary text
        },
        navy: '#304090',      // deep brand blue — primary button on blue hero
        accent: {
          DEFAULT: '#f06e2c', // warm CTA — ONLY for primary conversion on white sections
          hover: '#d85e1f',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f6f7f8',    // soft card / "Over" section background
        },
        success: '#47a92a',   // green check bullets
```

- [ ] **Step 2: Add pill radius + elevation shadows + display font**

Inside `theme.extend`, set `borderRadius` to ALSO include `pill`, and ADD `boxShadow` and `fontFamily` blocks:

```js
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        'pill': '7.5rem', // Frank-DNA pill buttons
      },
      boxShadow: {
        'elevation-sm': '0px 7px 10px 0px #00000005, 0px 3px 4px 0px #00000005',
        'elevation-md': '0px 4px 17px 0px #00000005, 0px 11px 18px 0px #0000000a',
        'elevation-lg': '0px 30px 60px 0px #00000012, 0px 7px 10px 0px #00000005, 0px 3px 4px 0px #00000005',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
```

- [ ] **Step 3: Verify config parses**

Run: `node -e "import('./tailwind.config.js').then(m=>console.log(Object.keys(m.default.theme.extend.colors).includes('ink') && !!m.default.theme.extend.boxShadow))"`
Expected: prints `true`.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.js
git commit -m "feat(design): add Frank-DNA tokens (ink/navy/accent/surface, pill, elevation, display font)"
```

---

## Task 3: Self-host Plus Jakarta Sans

**Files:** Modify `src/main.tsx` (app entry that renders `<App/>`); modify `index.html`.

- [ ] **Step 1: Import font weights in the app entry**

At the TOP of `src/main.tsx` (with the other imports), add:

```ts
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/800.css';
```

- [ ] **Step 2: Make the font the default**

In `src/index.css` (the global stylesheet imported by the app — if the import path differs, use the one `main.tsx` already imports), ensure the body uses the display font. Add at the end:

```css
body { font-family: '"Plus Jakarta Sans"', ui-sans-serif, system-ui, sans-serif; }
```

If `body` font is already set elsewhere, change that rule instead of adding a duplicate.

- [ ] **Step 3: Preload the headline weight in index.html**

In `index.html` `<head>`, add a preload. First find the resolved 800 woff2 path:

```bash
ls node_modules/@fontsource/plus-jakarta-sans/files/ | grep -E 'latin-800-normal.woff2'
```
Then add (Vite will fingerprint at build; this preload is a progressive enhancement, safe if the hash differs):

```html
<link rel="preload" as="font" type="font/woff2"
  href="/node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-800-normal.woff2"
  crossorigin>
```
Note: if the executor prefers not to hardcode the dev path, skip the preload — `font-display: swap` (fontsource default) already prevents render-blocking. The preload is optional polish.

- [ ] **Step 4: Verify build picks up the font**

Run: `npm run build:client`
Expected: build succeeds; `dist/assets/` contains a `plus-jakarta-sans-*.woff2`.

- [ ] **Step 5: Commit**

```bash
git add src/main.tsx src/index.css index.html
git commit -m "feat(design): self-host Plus Jakarta Sans as display font"
```

---

## Task 4: Extend Button with accent/inverse variants + pill shape

**Files:** Modify `src/components/ui/Button.tsx`.

- [ ] **Step 1: Add variants, shape prop, and pill radius (backward compatible)**

Replace the `interface ButtonProps`, `variants`, and `combinedClasses` sections so the file reads:

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'inverse';
    size?: 'sm' | 'md' | 'lg';
    shape?: 'rounded' | 'pill';
    href?: string;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    shape = 'rounded',
    href,
    className,
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-extrabold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
        primary: "bg-quatt-orange text-white hover:bg-[#2070B0] focus:ring-quatt-orange shadow-lg shadow-quatt-orange/10",
        secondary: "bg-quatt-dark text-white hover:bg-[#1a1b1c] focus:ring-quatt-dark",
        outline: "border-2 border-gray-200 text-quatt-dark hover:border-quatt-dark focus:ring-quatt-dark bg-transparent",
        ghost: "text-quatt-dark hover:bg-gray-100",
        // Frank-DNA additions:
        accent: "bg-accent text-white hover:bg-accent-hover focus:ring-accent shadow-elevation-md", // warm CTA, white sections only
        inverse: "bg-white text-ink hover:bg-surface-soft focus:ring-white shadow-elevation-sm",   // on the blue hero
    };

    const shapes = {
        rounded: "rounded-3xl",
        pill: "rounded-pill",
    };

    const sizes = {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-base",
        lg: "h-16 px-10 text-lg",
    };

    const combinedClasses = cn(
        baseStyles,
        variants[variant],
        shapes[shape],
        sizes[size],
        variant === 'primary' && shape === 'rounded' && 'shiny-btn',
        className
    );
```

Leave the `href`/`Link`/`button` render logic below unchanged.

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit -p tsconfig.app.json`
Expected: no errors related to `Button.tsx`.

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: 0 warnings/errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/Button.tsx
git commit -m "feat(ui): add accent/inverse Button variants + pill shape (backward compatible)"
```

---

## Task 5: Card primitive

**Files:** Create `src/components/ui/Card.tsx`.

- [ ] **Step 1: Create the component**

```tsx
import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'soft';
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ variant = 'white', className, children, ...props }) => {
  const variants = {
    white: 'bg-surface shadow-elevation-lg',
    soft: 'bg-surface-soft',
  };
  return (
    <div className={cn('rounded-2xl p-6 sm:p-8', variants[variant], className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
```

- [ ] **Step 2: Type-check + lint**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Card.tsx
git commit -m "feat(ui): add Card primitive (white/soft, 24px radius, elevation)"
```

---

## Task 6: Section primitive

**Files:** Create `src/components/ui/Section.tsx`.

- [ ] **Step 1: Create the component**

```tsx
import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bg?: 'white' | 'soft' | 'none';
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ bg = 'none', className, children, ...props }) => {
  const bgs = { white: 'bg-surface', soft: 'bg-surface-soft', none: '' };
  return (
    <section className={cn('py-16 sm:py-24', bgs[bg], className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default Section;
```

- [ ] **Step 2: Type-check + lint**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Section.tsx
git commit -m "feat(ui): add Section primitive (vertical rhythm wrapper)"
```

---

## Task 7: FeatureCard primitive

**Files:** Create `src/components/ui/FeatureCard.tsx`.

- [ ] **Step 1: Create the component**

```tsx
import React from 'react';
import { Check } from 'lucide-react';
import Card from './Card';

interface FeatureCardProps {
  title: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, children }) => (
  <Card variant="white" className="shadow-elevation-md">
    <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center mb-4">
      <Check className="w-5 h-5 text-ink" aria-hidden="true" />
    </div>
    <h3 className="font-display font-extrabold text-ink text-lg mb-2">{title}</h3>
    {children && <p className="text-ink-soft text-sm leading-relaxed">{children}</p>}
  </Card>
);

export default FeatureCard;
```

- [ ] **Step 2: Type-check + lint**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/FeatureCard.tsx
git commit -m "feat(ui): add FeatureCard primitive (round check-badge + navy title)"
```

---

## Task 8: WaveDivider primitive

**Files:** Create `src/components/ui/WaveDivider.tsx`.

- [ ] **Step 1: Create the component**

```tsx
import React from 'react';

interface WaveDividerProps {
  fill?: string;     // CSS color of the area BELOW the wave (the next section)
  className?: string;
}

// Renders a wavy bottom edge. Place at the bottom of a colored section so the
// next (usually white) section flows up into it.
const WaveDivider: React.FC<WaveDividerProps> = ({ fill = '#ffffff', className }) => (
  <svg
    className={className}
    viewBox="0 0 1200 54"
    preserveAspectRatio="none"
    aria-hidden="true"
    style={{ display: 'block', width: '100%', height: '54px' }}
  >
    <path d="M0,54 L0,20 C200,48 400,4 600,18 C800,32 1000,52 1200,16 L1200,54 Z" fill={fill} />
  </svg>
);

export default WaveDivider;
```

- [ ] **Step 2: Type-check + lint**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run lint`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/WaveDivider.tsx
git commit -m "feat(ui): add WaveDivider primitive (SVG wavy section edge)"
```

---

## Task 9: WebGL airco accent (lazy, poster fallback)

**Files:** Create `src/components/three/AircoScene.ts` and `src/components/ui/WebglAccent.tsx`.

- [ ] **Step 1: Create the three.js scene (code-split target)**

`src/components/three/AircoScene.ts` — a procedural, stylized indoor airco unit (rounded box with louver lines) in StayCool blue, transparent background, slow Y rotation. Returns a cleanup fn.

```ts
import * as THREE from 'three';

// Mounts a slowly-rotating stylized airco unit into `container`.
// Transparent background so the blue hero shows through. Returns cleanup().
export function mountAircoScene(container: HTMLElement): () => void {
  const width = container.clientWidth || 480;
  const height = container.clientHeight || 320;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
  camera.position.set(0, 0.4, 6);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Body: rounded indoor unit
  const bodyGeo = new THREE.BoxGeometry(4, 1.1, 1, 4, 1, 1);
  const bodyMat = new THREE.MeshStandardMaterial({ color: '#f4fafe', roughness: 0.45, metalness: 0.1 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);

  // Front face accent strip (StayCool blue)
  const stripGeo = new THREE.BoxGeometry(4.02, 0.18, 1.02);
  const stripMat = new THREE.MeshStandardMaterial({ color: '#2080C0', roughness: 0.3, metalness: 0.2 });
  const strip = new THREE.Mesh(stripGeo, stripMat);
  strip.position.y = -0.42;

  // Louver lines
  const louvers = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const lGeo = new THREE.BoxGeometry(3.7, 0.04, 1.04);
    const lMat = new THREE.MeshStandardMaterial({ color: '#cfe7f5', roughness: 0.6 });
    const l = new THREE.Mesh(lGeo, lMat);
    l.position.y = -0.1 - i * 0.12;
    louvers.add(l);
  }

  const unit = new THREE.Group();
  unit.add(body, strip, louvers);
  unit.rotation.x = 0.15;
  scene.add(unit);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(3, 4, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x40b0e0, 0.6);
  rim.position.set(-4, 1, 2);
  scene.add(rim);

  let raf = 0;
  let running = true;
  const animate = () => {
    if (!running) return;
    unit.rotation.y += 0.0035; // slow
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  const onResize = () => {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
  };
  window.addEventListener('resize', onResize);

  return () => {
    running = false;
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
    bodyGeo.dispose(); bodyMat.dispose(); stripGeo.dispose(); stripMat.dispose();
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
  };
}
```

- [ ] **Step 2: Create the lazy wrapper with poster fallback**

`src/components/ui/WebglAccent.tsx` — shows a static poster `<img>` immediately (LCP-safe), then dynamically imports + mounts the scene after the browser is idle. Honors `prefers-reduced-motion` (stays on poster). three.js ends up in its own chunk because of the dynamic `import()`.

```tsx
import React, { useEffect, useRef, useState } from 'react';

interface WebglAccentProps {
  poster: string;     // path to a static .webp shown first / as fallback
  alt: string;
  className?: string;
}

const WebglAccent: React.FC<WebglAccentProps> = ({ poster, alt, className }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return; // keep poster only

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const start = async () => {
      if (cancelled || !hostRef.current) return;
      const { mountAircoScene } = await import('../three/AircoScene');
      if (cancelled || !hostRef.current) return;
      cleanup = mountAircoScene(hostRef.current);
      setShowCanvas(true);
    };

    // Defer until idle/after LCP
    const idle = (window as any).requestIdleCallback as undefined | ((cb: () => void, o?: any) => number);
    const handle = idle ? idle(start, { timeout: 2500 }) : window.setTimeout(start, 1800);

    return () => {
      cancelled = true;
      if (idle && (window as any).cancelIdleCallback) (window as any).cancelIdleCallback(handle);
      else clearTimeout(handle as number);
      cleanup?.();
    };
  }, []);

  return (
    <div className={className} style={{ position: 'relative' }}>
      <img
        src={poster}
        alt={alt}
        loading="eager"
        className="w-full h-full object-contain"
        style={{ opacity: showCanvas ? 0 : 1, transition: 'opacity .5s' }}
      />
      <div
        ref={hostRef}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, opacity: showCanvas ? 1 : 0, transition: 'opacity .5s' }}
      />
    </div>
  );
};

export default WebglAccent;
```

- [ ] **Step 3: Type-check + lint**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run lint`
Expected: no errors.

- [ ] **Step 4: Verify three.js is code-split (not in main chunk)**

Run: `npm run build:client && ls -la dist/assets/ | grep -iE 'three|AircoScene'`
Expected: a separate chunk containing three.js exists (lazy `import()` produces its own JS chunk), not bundled into the main entry.

- [ ] **Step 5: Commit**

```bash
git add src/components/three/AircoScene.ts src/components/ui/WebglAccent.tsx
git commit -m "feat(ui): lazy WebGL airco accent with poster fallback (code-split three.js)"
```

---

## Task 10: Restyle HeroRedesign.tsx

**Files:** Modify `src/components/HeroRedesign.tsx` (full restyle, structure preserved).

- [ ] **Step 1: Pick a real poster image**

Run: `ls public/images/products/ | grep -i vooraanzicht | head`
Expected: at least one `*vooraanzicht*.webp` (e.g. `Daiseikai 10-Hout-vooraanzicht_2_11zon.webp`). Use that path as the WebGL poster. If none, use any product `.webp` from `public/images/products/`.

- [ ] **Step 2: Replace the component body**

Keep ALL behavior: founder-video lightbox, `MultiStepLeadForm`, deferred `TrustooWidget`, no framer-motion on LCP path. Only restyle + add the WebGL accent. Replace the file with:

```tsx
import React, { useState, useEffect } from 'react';
import { Play, Check, X } from 'lucide-react';
import MultiStepLeadForm from './MultiStepLeadForm';
import TrustooWidget from './TrustooWidget';
import WebglAccent from './ui/WebglAccent';
import WaveDivider from './ui/WaveDivider';

const POSTER = '/images/products/Daiseikai 10-Hout-vooraanzicht_2_11zon.webp'; // set in Step 1

export default function HeroRedesign() {
  const [showVideo, setShowVideo] = useState(false);
  const [showTrustoo, setShowTrustoo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowTrustoo(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2080C0] to-[#40B0E0] pt-28 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pb-10">

          {/* Left: content */}
          <div className="max-w-xl text-center lg:text-left">
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              aria-label="Bekijk de StayCool bedrijfsfilm"
              className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-pill shadow-elevation-sm mb-8 mx-auto lg:mx-0 cursor-pointer hover:shadow-elevation-md transition-shadow group"
            >
              <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                <Play className="w-3 h-3 text-accent group-hover:text-white fill-current translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-ink">Bekijk onze bedrijfsfilm</span>
            </button>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              De toekomst is <span className="text-[#eaf6fc]">elektrisch verwarmen.</span>
            </h2>

            <p className="font-display text-lg sm:text-xl text-[#eaf6fc] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Schakel over op de meest efficiënte airco-systemen en <span className="text-white font-bold">bespaar direct 60%</span> op je gasrekening.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-white font-bold text-sm mb-8">
              <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Erkend installateur</span>
              <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Binnen 2 weken</span>
            </div>

            <WebglAccent
              poster={POSTER}
              alt="StayCool airco binnenunit"
              className="hidden lg:block w-full h-44"
            />
          </div>

          {/* Right: lead form */}
          <div className="relative">
            <div className="bg-surface rounded-2xl shadow-elevation-lg p-6 sm:p-8">
              <MultiStepLeadForm />
            </div>
            <div className="mt-6 flex justify-center min-h-[40px]">
              {showTrustoo && <TrustooWidget size="small" />}
            </div>
          </div>

        </div>
      </div>

      {/* wavy bottom into the next (white) section */}
      <WaveDivider fill="#ffffff" className="relative z-0 -mb-px" />

      {/* Video Lightbox (unchanged behavior) */}
      {showVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bedrijfsvideo"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4 sm:p-10"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube-nocookie.com/embed/9m-jkGgfLog?autoplay=1"
              title="StayCool Airco bedrijfsfilm"
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
            <button
              type="button"
              aria-label="Video sluiten"
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setShowVideo(false); }}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
```

Note: the mobile "Plan gratis adviesgesprek" button and `Calendar`/`Button` imports were removed because the form is now the single mobile CTA. If analytics show the mobile quick-link matters, re-add a `<Button variant="inverse" shape="pill">` above the form.

- [ ] **Step 3: Type-check + lint**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run lint`
Expected: no errors. (If `Button` import is now unused elsewhere, remove the dangling import.)

- [ ] **Step 4: Visual check in dev**

Run: `npm run dev` and open the homepage. Confirm: blue gradient hero, navy/white headline in Plus Jakarta Sans, founder-video pill, form card on the right, poster image left that swaps to a slowly-rotating 3D unit after ~2s, wavy white bottom edge.

- [ ] **Step 5: Commit**

```bash
git add src/components/HeroRedesign.tsx
git commit -m "feat(hero): restyle homepage hero to Frank-DNA (blue gradient, pill, WebGL accent, wave)"
```

---

## Task 11: Simplify + restyle the navbar

**Files:** Modify `src/components/Navbar.tsx`. First `Read` the whole file — edits target the desktop link group (~lines 64-118) and the mobile menu (~lines 148-161).

**Goal:** Desktop nav shows exactly: `Airco's` → `/products`, `Thuisbatterijen` → `/thuisbatterijen`, and the `Plan adviesgesprek` pill button. Keep the `tel:` contact CTA. Remove the mega-dropdowns and the Installatie/Onderhoud text links from the nav (they remain in the Footer — orphan-safe).

- [ ] **Step 1: Replace the desktop link group**

In the desktop nav (the `<div>` holding `<Link to="/products">`, `<Link to="/airco-installatie-limburg">`, `<Link to="/airco-onderhoud-limburg">` and the dropdown `<li>` blocks), replace that entire group with just two links + keep the existing right-side actions (tel + Button):

```tsx
<Link to="/products" className={linkClasses}>Airco's</Link>
<Link to="/thuisbatterijen" className={linkClasses}>Thuisbatterijen</Link>
```

Delete the dropdown markup that referenced `primaryMoneyPageLinks`, `/kennisbank`, calculators, and buitenunit pages. If `primaryMoneyPageLinks` import (`../data/moneyPageLinks`) is now unused, remove that import line.

- [ ] **Step 2: Restyle the CTA button to tokens**

Change the desktop CTA `Button` to the navy pill:

```tsx
<Button href="https://afspraken.staycoolairco.nl" variant="primary" size="md" shape="pill"
  className="px-6 py-2.5 shadow-elevation-md hover:-translate-y-0.5 transition-all">
  Plan adviesgesprek
</Button>
```

Keep the existing `<a href="tel:0462021430" ...>` contact link as-is (CRO: phone CTA stays).

- [ ] **Step 3: Slim the mobile menu to match**

In the mobile menu `<div id="mobile-menu" ...>`, replace the 8 `<Link>` items with the same two primary links, then keep the two CTA buttons (book + call) below:

```tsx
<Link to="/products" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Airco's</Link>
<Link to="/thuisbatterijen" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Thuisbatterijen</Link>
<Link to="/contact" onClick={() => setIsOpen(false)} className="border-b border-gray-100 pb-4">Contact</Link>
```

(Keep the existing book + tel `Button`s that follow.)

- [ ] **Step 4: Type-check + lint**

Run: `npx tsc --noEmit -p tsconfig.app.json && npm run lint`
Expected: no errors; no unused-import warnings (remove any now-dangling imports).

- [ ] **Step 5: Guard against orphaned pages (SEO)**

Run: `npm run validate:money-links`
Expected: PASS — money-pages still satisfy their required-link rules via Footer/content. If it FAILS, the removed nav links were the only path to a money-page → add that link to the Footer before continuing (do NOT merge with a failing money-link validator).

- [ ] **Step 6: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(navbar): slim to 3 items (Airco's, Thuisbatterijen, Plan-adviesgesprek) + token restyle"
```

---

## Task 12: Full verification (no SEO/CWV regression)

**Files:** none (verification only).

- [ ] **Step 1: Production build + project validators**

Run: `npm run build`
Expected: completes; `validate:build` (build/service-pages/money-links validators) passes.

- [ ] **Step 2: Rendered link check**

Run: `npm run preview` (in one shell) then `npm run check-links:rendered:local` (in another).
Expected: no 404s / broken internal links.

- [ ] **Step 3: Confirm SEO surface unchanged**

Run: `git diff main -- src/pages/Home.tsx`
Expected: EMPTY — `Home.tsx` (Helmet title/description/canonical + page H1/schema) was not touched. The hero change is purely presentational inside `HeroRedesign.tsx`.

- [ ] **Step 4: Lighthouse on the built site**

With `npm run preview` running, run: `npx lighthouse http://localhost:4173 --only-categories=performance,seo --form-factor=mobile --quiet --chrome-flags="--headless"`
Expected: Performance ≥ baseline (target 100), SEO 100, CLS 0, LCP < 1.8s. If LCP regressed, confirm the WebGL canvas is NOT mounting before load and the poster `<img>` is not oversized.

- [ ] **Step 5: Screenshot for the record**

Capture a homepage screenshot (Chrome/Playwright) and eyeball against the approved mockup (`.superpowers/brainstorm/.../hero-mockup.html`).

- [ ] **Step 6: Final commit (if any cleanup)**

```bash
git add -A && git commit -m "chore(hero): verification cleanup" || echo "nothing to commit"
```

---

## Self-Review notes (author)

- **Spec coverage:** tokens (§3.1 → Task 2/3), primitives (§3.2 → Tasks 4-9), hero restyle (§3.3 → Task 10), navbar (§3.4 → Task 11, incl. orphan-guard Step 5), SEO-behoud (§4 → Task 12 Step 3), perf-guardrails (§5 → Task 9 lazy + Task 12 Step 4), verification (§6 → Task 12). Product-template + rest of rollout (§7 steps 3-4) are intentionally OUT of this plan — they get their own plans.
- **Backward compat:** Button/tailwind changes are additive; existing `quatt-*`/`orange-*` usages untouched.
- **No new test framework:** verification uses the repo's existing scripts + Lighthouse, per the testing note.
