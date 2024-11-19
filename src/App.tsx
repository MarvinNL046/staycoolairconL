import React from 'react';
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

// Knowledge Base Articles
import HowAircoWorks from './pages/articles/HowAircoWorks';
import AircoTypes from './pages/articles/AircoTypes';
import SplitVsMono from './pages/articles/SplitVsMono';
import ScopSeerArticle from './pages/articles/ScopSeerArticle';
import CoandaEffect from './pages/articles/CoandaEffect';
import HeatingWithAirco from './pages/articles/HeatingWithAirco';
import PreventFeedIn from './pages/articles/PreventFeedIn';
import EnergyLabels from './pages/articles/EnergyLabels';
import MaintenanceTips from './pages/articles/MaintenanceTips';
import CommonProblems from './pages/articles/CommonProblems';
import MaintenanceSchedule from './pages/articles/MaintenanceSchedule';
import Refrigerants from './pages/articles/Refrigerants';
import CO2Reduction from './pages/articles/CO2Reduction';

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
              <Route path="/voorwaarden" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/onderhoud" element={<MaintenanceProcedures />} />

              {/* Knowledge Base Articles */}
              <Route path="/kennisbank/how-airco-works" element={<HowAircoWorks />} />
              <Route path="/kennisbank/airco-types" element={<AircoTypes />} />
              <Route path="/kennisbank/split-vs-mono" element={<SplitVsMono />} />
              <Route path="/kennisbank/scop-seer" element={<ScopSeerArticle />} />
              <Route path="/kennisbank/coanda-effect" element={<CoandaEffect />} />
              <Route path="/kennisbank/heating-with-airco" element={<HeatingWithAirco />} />
              <Route path="/kennisbank/prevent-feed-in" element={<PreventFeedIn />} />
              <Route path="/kennisbank/energy-labels" element={<EnergyLabels />} />
              <Route path="/kennisbank/maintenance-tips" element={<MaintenanceTips />} />
              <Route path="/kennisbank/common-problems" element={<CommonProblems />} />
              <Route path="/kennisbank/maintenance-schedule" element={<MaintenanceSchedule />} />
              <Route path="/kennisbank/refrigerants" element={<Refrigerants />} />
              <Route path="/kennisbank/co2-reduction" element={<CO2Reduction />} />
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
