import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LazyMotion, domAnimation } from 'framer-motion';
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
        <LazyMotion features={domAnimation}>
          <App />
        </LazyMotion>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
