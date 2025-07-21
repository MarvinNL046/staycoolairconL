import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LazyMotion } from 'framer-motion';

// Import chunk error handler early
import './utils/chunkErrorHandler';
import { initFontOptimization } from './utils/fontLoader';

// Initialize font optimization
initFontOptimization();

// Polyfill for requestIdleCallback - moet als eerste voor alle browsers
if (!('requestIdleCallback' in window)) {
  (window as any).requestIdleCallback = function(callback: any, options?: any) {
    const timeout = options?.timeout || 1;
    const start = Date.now();
    return window.setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      });
    }, timeout);
  };
  
  (window as any).cancelIdleCallback = function(handle: number) {
    window.clearTimeout(handle);
  };
}

// Load only essential features for better performance
const loadFeatures = () =>
  import('./utils/motionFeatures').then(res => res.default);
import App from './App';
import { initAnalytics } from './utils/initAnalytics';
import './index.css';

// Initialize analytics
initAnalytics();

// Get root element
const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <LazyMotion features={loadFeatures} strict>
          <App />
        </LazyMotion>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
