import React, { Suspense, lazy } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CookieConsent from './components/CookieConsent';
import ErrorFallback from './components/ErrorFallback';
import BackToTop from './components/BackToTop';
import SkipToContent from './components/SkipToContent';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const BrandDetail = lazy(() => import('./pages/BrandDetail'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceArea = lazy(() => import('./pages/ServiceArea'));
const KnowledgeBase = lazy(() => import('./pages/KnowledgeBase'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const MaintenanceProcedures = lazy(() => import('./pages/MaintenanceProcedures'));
const AircoCovers = lazy(() => import('./pages/AircoCovers'));

// Knowledge Base Articles
const HoeWerktAirco = lazy(() => import('./pages/articles/HoeWerktAirco'));
const SoortenAirco = lazy(() => import('./pages/articles/SoortenAirco'));
const SplitVsMonoSystemen = lazy(() => import('./pages/articles/SplitVsMonoSystemen'));
const ScopSeerWaarden = lazy(() => import('./pages/articles/ScopSeerWaarden'));
const CoandaEffect = lazy(() => import('./pages/articles/CoandaEffect'));
const VerwarmenMetAirco = lazy(() => import('./pages/articles/VerwarmenMetAirco'));
const TerugleverKostenVoorkomen = lazy(() => import('./pages/articles/TerugleverKostenVoorkomen'));
const Energielabels = lazy(() => import('./pages/articles/Energielabels'));
const Onderhoudstips = lazy(() => import('./pages/articles/Onderhoudstips'));
const VeelvoorkendeProblemen = lazy(() => import('./pages/articles/VeelvoorkendeProblemen'));
const Onderhoudsschema = lazy(() => import('./pages/articles/Onderhoudsschema'));
const Koudemiddelen = lazy(() => import('./pages/articles/Koudemiddelen'));
const CO2Reductie = lazy(() => import('./pages/articles/CO2Reductie'));
const StoringscodeGids = lazy(() => import('./pages/articles/StoringscodeGids'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <SkipToContent />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/airco-covers" element={<AircoCovers />} />
              <Route path="/products/:brand" element={<BrandDetail />} />
              <Route path="/products/:brand/:model" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/werkgebied" element={<ServiceArea />} />
              <Route path="/kennisbank" element={<KnowledgeBase />} />
              <Route path="/voorwaarden" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/onderhoud" element={<MaintenanceProcedures />} />

              {/* Knowledge Base Articles */}
              <Route path="/kennisbank/hoe-werkt-airco" element={<HoeWerktAirco />} />
              <Route path="/kennisbank/soorten-airco" element={<SoortenAirco />} />
              <Route path="/kennisbank/split-vs-mono-systemen" element={<SplitVsMonoSystemen />} />
              <Route path="/kennisbank/scop-seer-waarden" element={<ScopSeerWaarden />} />
              <Route path="/kennisbank/coanda-effect" element={<CoandaEffect />} />
              <Route path="/kennisbank/verwarmen-met-airco" element={<VerwarmenMetAirco />} />
              <Route path="/kennisbank/terugleverkosten-voorkomen" element={<TerugleverKostenVoorkomen />} />
              <Route path="/kennisbank/energielabels" element={<Energielabels />} />
              <Route path="/kennisbank/onderhoudstips" element={<Onderhoudstips />} />
              <Route path="/kennisbank/veelvoorkomende-problemen" element={<VeelvoorkendeProblemen />} />
              <Route path="/kennisbank/onderhoudsschema" element={<Onderhoudsschema />} />
              <Route path="/kennisbank/koudemiddelen" element={<Koudemiddelen />} />
              <Route path="/kennisbank/co2-reductie" element={<CO2Reductie />} />
              <Route path="/kennisbank/storingscodes" element={<StoringscodeGids />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <BackToTop />
        <AnnouncementBar />
        <Footer />
        <CookieConsent />
      </div>
    </ErrorBoundary>
  );
}
