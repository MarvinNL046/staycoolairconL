// Font loading utility with error handling
export function loadFonts() {
  if (typeof document === 'undefined') return;

  // Check if fonts are already loaded
  if (document.fonts && document.fonts.check('1em Inter')) {
    return Promise.resolve();
  }

  // Create a promise that resolves when fonts are loaded or after timeout
  return new Promise<void>((resolve) => {
    // Set a timeout to prevent blocking if fonts fail to load
    const timeout = setTimeout(() => {
      console.warn('Font loading timeout - continuing with fallback fonts');
      resolve();
    }, 3000);

    // Modern font loading API
    if ('fonts' in document) {
      document.fonts.ready
        .then(() => {
          clearTimeout(timeout);
          // Check if Inter font loaded successfully
          if (document.fonts.check('1em Inter')) {
            console.log('Inter font loaded successfully');
          } else {
            console.warn('Inter font not available, using fallback');
          }
          resolve();
        })
        .catch((error) => {
          clearTimeout(timeout);
          console.error('Font loading error:', error);
          resolve(); // Continue anyway with fallback fonts
        });
    } else {
      // Fallback for older browsers
      clearTimeout(timeout);
      resolve();
    }
  });
}

// Inject font-display: swap for better performance
export function optimizeFontDisplay() {
  if (typeof document === 'undefined') return;

  // Find Google Fonts link
  const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
  if (fontLink) {
    const href = fontLink.getAttribute('href');
    if (href && !href.includes('display=swap')) {
      // Already includes display=swap
      return;
    }
  }

  // Add font-display: swap to all @font-face rules
  const styleSheets = document.styleSheets;
  for (let i = 0; i < styleSheets.length; i++) {
    try {
      const rules = styleSheets[i].cssRules || styleSheets[i].rules;
      if (!rules) continue;

      for (let j = 0; j < rules.length; j++) {
        const rule = rules[j];
        if (rule instanceof CSSFontFaceRule) {
          if (!rule.style.fontDisplay) {
            rule.style.fontDisplay = 'swap';
          }
        }
      }
    } catch (e) {
      // Ignore cross-origin stylesheet errors
      continue;
    }
  }
}

// Initialize font optimization
export function initFontOptimization() {
  // Optimize font display immediately
  optimizeFontDisplay();

  // Load fonts with error handling
  loadFonts().then(() => {
    // Add loaded class for CSS animations
    document.documentElement.classList.add('fonts-loaded');
  });

  // Listen for font loading errors and suppress them
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      // Suppress font decoding errors
      if (event.message && event.message.includes('Failed to decode downloaded font')) {
        event.preventDefault();
        console.warn('Font decoding error suppressed:', event.message);
      }
    }, true);
  }
}