import React, { Suspense, lazy, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route, useLocation } from 'react-router-dom';
import UruruSararaPage from './pages/products/ururu-sarara';
import StylishPage from './pages/products/stylish';
import Daiseikai10Page from './pages/products/daiseikai-10';
import UruruSararaPage from './pages/products/ururu-sarara';
import StylishPage from './pages/products/stylish';
import Daiseikai10Page from './pages/products/daiseikai-10';
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CookieConsent from './components/CookieConsent';
import ErrorFallback from './components/ErrorFallback';
import BackToTop from './components/BackToTop';
import SkipToContent from './components/SkipToContent';
import WebVitalsReporter from './components/WebVitalsReporter';

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
const LGStoringscode = lazy(() => import('./pages/articles/LGStoringscode'));
const ElektrischeVerwarming = lazy(() => import('./pages/articles/ElektrischeVerwarming'));
const VerwarmenMetAircoErvaring = lazy(() => import('./pages/articles/VerwarmenMetAircoErvaring'));
const HoeVaakAircoOnderhoud = lazy(() => import('./pages/articles/HoeVaakAircoOnderhoud'));
const AircoBlaastGeenWarmeLucht = lazy(() => import('./pages/articles/AircoBlaastGeenWarmeLucht'));
const WatKostEenAircoPlaatsen = lazy(() => import('./pages/articles/WatKostEenAircoPlaatsen'));
const AircoBevriesstBijVerwarmen = lazy(() => import('./pages/articles/AircoBevriesstBijVerwarmen'));
const AircoInHerkenbosch = lazy(() => import('./pages/articles/AircoInHerkenbosch'));
const MitsubishiVsLgAirco = lazy(() => import('./pages/articles/MitsubishiVsLgAirco'));
const ToshibaVsTosotAirco = lazy(() => import('./pages/articles/ToshibaVsTosotAirco'));
const AircoLuchtfilterOnderhoud = lazy(() => import('./pages/articles/AircoLuchtfilterOnderhoud'));
const AircoBuitenunitPlaatsing = lazy(() => import('./pages/articles/AircoBuitenunitPlaatsing'));
const CapacityCalculator = lazy(() => import('./pages/CapacityCalculator'));

// SEO Articles
const AircoSpecialistLimburg = lazy(() => import('./pages/articles/aircospecialist-limburg'));
const AircoVenlo = lazy(() => import('./pages/articles/airco-venlo'));
const AircoWeert = lazy(() => import('./pages/articles/airco-weert'));
const AircoServiceLimburg = lazy(() => import('./pages/articles/airco-service-limburg'));
const AircoInstallatieLimburg = lazy(() => import('./pages/articles/airco-installatie-limburg'));
const AircoInstallateurLimburg = lazy(() => import('./pages/articles/airco-installateur-limburg'));
const Klimaatbeheersing = lazy(() => import('./pages/articles/klimaatbeheersing'));
const Scop46 = lazy(() => import('./pages/articles/scop-4-6'));
const AircoOnderhoudLimburg = lazy(() => import('./pages/articles/airco-onderhoud-limburg'));
const AircoInstallerenLimburg = lazy(() => import('./pages/articles/airco-installeren-limburg'));
const AircoInstallateurRoermond = lazy(() => import('./pages/articles/airco-installateur-roermond'));
const AircoInstallateurMaastricht = lazy(() => import('./pages/articles/airco-installateur-maastricht'));
const AircoBrunssum = lazy(() => import('./pages/articles/airco-brunssum'));
const AircoSittard = lazy(() => import('./pages/articles/airco-sittard'));
const MitsubishiAircoLimburg = lazy(() => import('./pages/articles/mitsubishi-airco-limburg'));
const AirconditioningKerkrade = lazy(() => import('./pages/articles/airconditioning-kerkrade'));
const AircoPlaatsenLimburg = lazy(() => import('./pages/articles/airco-plaatsen-limburg'));
const EnergiezuinigeAircoLimburg = lazy(() => import('./pages/articles/energiezuinige-airco-limburg'));

// Loading fallback component with skeleton UI
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="space-y-8 w-full max-w-7xl mx-auto px-4">
      {/* Skeleton header */}
      <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
      {/* Skeleton content */}
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Preload critical routes
const preloadCriticalRoutes = () => {
  // Preload home page
  const preloadHome = () => import('./pages/Home');
  // Preload products page
  const preloadProducts = () => import('./pages/Products');
  
  // Start preloading after initial render
  setTimeout(() => {
    preloadHome();
    preloadProducts();
  }, 1000);
};

export default function App() {
  const location = useLocation();

  // Preload critical routes after initial render
  useEffect(() => {
    preloadCriticalRoutes();
  }, []);

  // Preload next likely routes based on current route
  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/') {
      // On home page, preload products and contact
      import('./pages/Products');
      import('./pages/Contact');
    } else if (path.startsWith('/products')) {
      // On products page, preload product detail
      import('./pages/ProductDetail');
    } else if (path.startsWith('/kennisbank')) {
      // On knowledge base, preload common articles
      import('./pages/articles/HoeWerktAirco');
      import('./pages/articles/SoortenAirco');
    }
  }, [location]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WebVitalsReporter />
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <SkipToContent />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/products/daikin/ururu-sarara" element={<UruruSararaPage />} />
          <Route path="/products/daikin/stylish" element={<StylishPage />} />
          <Route path="/products/mitsubishi/daiseikai-10" element={<Daiseikai10Page />} />
                <Route path="/products/daikin/ururu-sarara" element={<UruruSararaPage />} />
          <Route path="/products/daikin/stylish" element={<StylishPage />} />
          <Route path="/products/mitsubishi/daiseikai-10" element={<Daiseikai10Page />} />
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
                <Route path="/lg-airco-storingscodes" element={<LGStoringscode />} />
                <Route path="/kennisbank/elektrische-verwarming" element={<ElektrischeVerwarming />} />
                <Route path="/kennisbank/verwarmen-met-airco-ervaring" element={<VerwarmenMetAircoErvaring />} />
                <Route path="/kennisbank/hoe-vaak-airco-onderhoud" element={<HoeVaakAircoOnderhoud />} />
                <Route path="/kennisbank/airco-blaast-geen-warme-lucht" element={<AircoBlaastGeenWarmeLucht />} />
                <Route path="/kennisbank/wat-kost-een-airco-plaatsen" element={<WatKostEenAircoPlaatsen />} />
                <Route path="/kennisbank/airco-bevriest-bij-verwarmen" element={<AircoBevriesstBijVerwarmen />} />
                <Route path="/kennisbank/airco-in-herkenbosch" element={<AircoInHerkenbosch />} />
                <Route path="/kennisbank/mitsubishi-vs-lg-airco" element={<MitsubishiVsLgAirco />} />
                <Route path="/kennisbank/toshiba-vs-tosot-airco" element={<ToshibaVsTosotAirco />} />
                <Route path="/kennisbank/airco-luchtfilter-onderhoud" element={<AircoLuchtfilterOnderhoud />} />
                <Route path="/kennisbank/airco-buitenunit-plaatsing" element={<AircoBuitenunitPlaatsing />} />
                <Route path="/capaciteit-calculator" element={<CapacityCalculator />} />

                {/* SEO Articles */}
                <Route path="/kennisbank/aircospecialist-limburg" element={<AircoSpecialistLimburg />} />
                <Route path="/kennisbank/airco-venlo" element={<AircoVenlo />} />
                <Route path="/kennisbank/airco-weert" element={<AircoWeert />} />
                <Route path="/kennisbank/airco-service-limburg" element={<AircoServiceLimburg />} />
                <Route path="/kennisbank/airco-installatie-limburg" element={<AircoInstallatieLimburg />} />
                <Route path="/kennisbank/airco-installateur-limburg" element={<AircoInstallateurLimburg />} />
                <Route path="/kennisbank/klimaatbeheersing" element={<Klimaatbeheersing />} />
                <Route path="/kennisbank/scop-4-6" element={<Scop46 />} />
                <Route path="/kennisbank/airco-onderhoud-limburg" element={<AircoOnderhoudLimburg />} />
                <Route path="/kennisbank/airco-installeren-limburg" element={<AircoInstallerenLimburg />} />
                <Route path="/kennisbank/airco-installateur-roermond" element={<AircoInstallateurRoermond />} />
                <Route path="/kennisbank/airco-installateur-maastricht" element={<AircoInstallateurMaastricht />} />
                <Route path="/kennisbank/airco-brunssum" element={<AircoBrunssum />} />
                <Route path="/kennisbank/airco-sittard" element={<AircoSittard />} />
                <Route path="/kennisbank/mitsubishi-airco-limburg" element={<MitsubishiAircoLimburg />} />
                <Route path="/kennisbank/airconditioning-kerkrade" element={<AirconditioningKerkrade />} />
                <Route path="/kennisbank/airco-plaatsen-limburg" element={<AircoPlaatsenLimburg />} />
                <Route path="/kennisbank/energiezuinige-airco-limburg" element={<EnergiezuinigeAircoLimburg />} />
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
