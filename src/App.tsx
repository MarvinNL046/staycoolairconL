import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CookieConsent from './components/CookieConsent';
import ErrorFallback from './components/ErrorFallback';
import Home from './pages/Home';
import Products from './pages/Products';
import BrandDetail from './pages/BrandDetail';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import ServiceArea from './pages/ServiceArea';
import KnowledgeBase from './pages/KnowledgeBase';
import ScopSeerArticle from './pages/articles/ScopSeerArticle';
import HowAircoWorks from './pages/articles/HowAircoWorks';
import AircoTypes from './pages/articles/AircoTypes';
import SplitVsMono from './pages/articles/SplitVsMono';
import HeatingWithAirco from './pages/articles/HeatingWithAirco';
import PreventFeedIn from './pages/articles/PreventFeedIn';
import EnergyLabels from './pages/articles/EnergyLabels';
import MaintenanceTips from './pages/articles/MaintenanceTips';
import CommonProblems from './pages/articles/CommonProblems';
import MaintenanceSchedule from './pages/articles/MaintenanceSchedule';
import Refrigerants from './pages/articles/Refrigerants';
import CO2Reduction from './pages/articles/CO2Reduction';
import CoandaEffect from './pages/articles/CoandaEffect';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import MaintenanceProcedures from './pages/MaintenanceProcedures';
import SkipToContent from './components/SkipToContent';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-white">
        <SkipToContent />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:brand" element={<BrandDetail />} />
              <Route path="/products/:brand/:model" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/werkgebied" element={<ServiceArea />} />
              <Route path="/kennisbank" element={<KnowledgeBase />} />
              <Route path="/kennisbank/scop-seer-uitleg" element={<ScopSeerArticle />} />
              <Route path="/kennisbank/hoe-werkt-airco" element={<HowAircoWorks />} />
              <Route path="/kennisbank/soorten-airco" element={<AircoTypes />} />
              <Route path="/kennisbank/split-vs-mono" element={<SplitVsMono />} />
              <Route path="/kennisbank/verwarmen-met-airco" element={<HeatingWithAirco />} />
              <Route path="/kennisbank/terugleverkosten" element={<PreventFeedIn />} />
              <Route path="/kennisbank/energielabels" element={<EnergyLabels />} />
              <Route path="/kennisbank/onderhoudstips" element={<MaintenanceTips />} />
              <Route path="/kennisbank/problemen" element={<CommonProblems />} />
              <Route path="/kennisbank/onderhoud-planning" element={<MaintenanceSchedule />} />
              <Route path="/kennisbank/koudemiddelen" element={<Refrigerants />} />
              <Route path="/kennisbank/co2-reductie" element={<CO2Reduction />} />
              <Route path="/kennisbank/coanda-effect" element={<CoandaEffect />} />
              <Route path="/voorwaarden" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/onderhoud-procedures" element={<MaintenanceProcedures />} />
            </Routes>
          </AnimatePresence>
        </main>
        <AnnouncementBar />
        <Footer />
        <CookieConsent />
      </div>
    </ErrorBoundary>
  );
}