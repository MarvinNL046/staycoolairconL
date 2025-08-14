// Performance optimization utilities for Core Web Vitals improvement

export class PerformanceOptimizer {
  
  // Lazy loading implementation for images
  static enableImageLazyLoading(): void {
    if (typeof window === 'undefined') return;

    // Native lazy loading support check
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        (img as HTMLImageElement).src = (img as HTMLImageElement).dataset.src!;
        img.removeAttribute('data-src');
      });
    } else {
      // Fallback for older browsers
      this.implementIntersectionObserverLazyLoading();
    }
  }

  private static implementIntersectionObserverLazyLoading(): void {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.removeAttribute('data-src');
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // Preload critical resources
  static preloadCriticalResources(): void {
    if (typeof document === 'undefined') return;

    // Only preload resources that actually exist and are used
    const criticalResources = [
      // Logo is used in navbar
      { href: '/images/staycoolairco_logo.png', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
  }

  // Unregister any existing service workers
  static unregisterServiceWorker(): void {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => {
        registration.unregister();
        console.log('Service Worker unregistered');
      });
    });
  }

  // Resource hints for better loading
  static addResourceHints(): void {
    if (typeof document === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://api.staycoolairco.nl' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
      document.head.appendChild(link);
    });
  }

  // Optimize web fonts loading
  static optimizeFontLoading(): void {
    if (typeof document === 'undefined') return;

    // Add font-display: swap to existing fonts
    const fontFaces = document.querySelectorAll('style, link[rel="stylesheet"]');
    fontFaces.forEach(element => {
      if (element.textContent?.includes('@font-face')) {
        element.textContent = element.textContent.replace(
          /@font-face\s*{([^}]*)}/g,
          '@font-face { $1 font-display: swap; }'
        );
      }
    });
  }

  // Defer non-critical JavaScript
  static deferNonCriticalJS(): void {
    if (typeof document === 'undefined') return;

    const nonCriticalScripts = [
      'google-analytics',
      'facebook-pixel',
      'chatbot',
      'social-widgets'
    ];

    nonCriticalScripts.forEach(scriptType => {
      const scripts = document.querySelectorAll(`script[data-type="${scriptType}"]`);
      scripts.forEach(script => {
        script.setAttribute('defer', 'true');
      });
    });
  }

  // Implement critical CSS inlining
  static inlineCriticalCSS(): string {
    return `
      /* Critical CSS for above-the-fold content */
      .hero { min-height: 100vh; }
      .navbar { position: fixed; top: 0; width: 100%; z-index: 50; }
      .loading-skeleton { 
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .lazy { opacity: 0; transition: opacity 0.3s; }
      .lazy.loaded { opacity: 1; }
    `;
  }

  // Bundle optimization recommendations
  static analyzeBundleSize(): {
    recommendations: string[];
    potentialSavings: string[];
  } {
    return {
      recommendations: [
        'Implement code splitting for route-based chunks',
        'Use dynamic imports for heavy components',
        'Tree-shake unused dependencies',
        'Optimize image formats (WebP, AVIF)',
        'Minify and compress CSS/JS',
        'Use a CDN for static assets'
      ],
      potentialSavings: [
        'Route splitting: ~30-50% bundle size reduction',
        'Image optimization: ~60-80% size reduction',
        'Tree shaking: ~10-20% bundle size reduction',
        'Gzip compression: ~70% text file reduction',
        'CDN usage: ~40-60% loading time improvement'
      ]
    };
  }

  // Core Web Vitals optimization
  static optimizeCoreWebVitals(): {
    lcp: string[];
    fid: string[];
    cls: string[];
  } {
    return {
      lcp: [ // Largest Contentful Paint
        'Optimize server response times',
        'Remove render-blocking resources',
        'Optimize images and use modern formats',
        'Preload key requests',
        'Use a CDN'
      ],
      fid: [ // First Input Delay
        'Reduce JavaScript execution time',
        'Remove non-critical third-party scripts',
        'Use web workers for heavy computations',
        'Break up long tasks',
        'Optimize for interaction readiness'
      ],
      cls: [ // Cumulative Layout Shift
        'Include size attributes on images and videos',
        'Never insert content above existing content',
        'Prefer transform animations to layout animations',
        'Reserve space for ads and embeds',
        'Use font-display: swap for web fonts'
      ]
    };
  }

  // Measure performance metrics
  static measureWebVitals(): Promise<{
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  }> {
    return new Promise((resolve) => {
      const metrics: any = {};

      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        metrics.lcp = entries[entries.length - 1].startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        metrics.fid = entries[0].processingStart - entries[0].startTime;
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        metrics.cls = clsValue;
      }).observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        metrics.fcp = entries[0].startTime;
      }).observe({ entryTypes: ['paint'] });

      // Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      metrics.ttfb = navigation.responseStart - navigation.requestStart;

      // Resolve after a delay to collect metrics
      setTimeout(() => resolve(metrics), 3000);
    });
  }

  // Initialize all optimizations
  static initializeOptimizations(): void {
    this.preloadCriticalResources();
    this.addResourceHints();
    this.optimizeFontLoading();
    this.deferNonCriticalJS();
    this.enableImageLazyLoading();
    this.unregisterServiceWorker(); // Unregister instead of register
  }
}

export default PerformanceOptimizer;