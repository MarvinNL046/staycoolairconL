import React from 'react';
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
import Home from './pages/Home';
import Products from './pages/Products';
import BrandDetail from './pages/BrandDetail';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import ServiceArea from './pages/ServiceArea';
import KnowledgeBase from './pages/KnowledgeBase';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import MaintenanceProcedures from './pages/MaintenanceProcedures';
import SkipToContent from './components/SkipToContent';
import AircoCovers from './pages/AircoCovers';

// Knowledge Base Articles
import HoeWerktAirco from './pages/articles/HoeWerktAirco';
import SoortenAirco from './pages/articles/SoortenAirco';
import SplitVsMonoSystemen from './pages/articles/SplitVsMonoSystemen';
import ScopSeerWaarden from './pages/articles/ScopSeerWaarden';
import CoandaEffect from './pages/articles/CoandaEffect';
import VerwarmenMetAirco from './pages/articles/VerwarmenMetAirco';
import TerugleverKostenVoorkomen from './pages/articles/TerugleverKostenVoorkomen';
import Energielabels from './pages/articles/Energielabels';
import Onderhoudstips from './pages/articles/Onderhoudstips';
import VeelvoorkendeProblemen from './pages/articles/VeelvoorkendeProblemen';
import Onderhoudsschema from './pages/articles/Onderhoudsschema';
import Koudemiddelen from './pages/articles/Koudemiddelen';
import CO2Reductie from './pages/articles/CO2Reductie';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <SkipToContent />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait">
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
            </Routes>
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
