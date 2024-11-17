import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { initGA, initGTM } from './config/analytics';
import App from './App';
import './index.css';

// Initialize analytics in production
if (process.env.NODE_ENV === 'production') {
  initGA();
  initGTM();
}

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LazyMotion features={domAnimation}>
          <App />
        </LazyMotion>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);