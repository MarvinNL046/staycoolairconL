import React, { Suspense, lazy, useEffect, useCallback } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route, useLocation } from 'react-router-dom';
import { trackPageView, trackError, trackPerformance } from './utils/analytics';
import UruruSararaPage from './pages/products/ururu-sarara';
import StylishPage from './pages/products/stylish';
import Daiseikai10Page from './pages/products/daiseikai-10';
import { AnimatePresence } from 'framer-motion';
import { throttle } from './utils/helpers';
import { ErrorBoundary } from 'react-error-boundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CookieConsentLite from './components/CookieConsentLite';
import ErrorFallback from './components/ErrorFallback';
import BackToTop from './components/BackToTop';
import SkipToContent from './components/SkipToContent';
import WebVitalsReporter from './components/WebVitalsReporter';
import PerformanceMonitor from './components/PerformanceMonitor';
import FeedbackRibbon from './components/FeedbackRibbon';
import LoadingSkeleton from './components/LoadingSkeleton';
import LoadingFallbackWithTimeout from './components/LoadingFallbackWithTimeout';
import { requestIdleCallbackPolyfill } from './utils/requestIdleCallback';
import PerformanceOptimizer from './utils/performanceOptimizations';
import { Chatbot } from './components/Chatbot';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const BrandDetail = lazy(() => import('./pages/BrandDetail'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const ContactWebhookTest = lazy(() => import('./pages/ContactWebhookTest'));
const ServiceArea = lazy(() => import('./pages/ServiceArea'));
const KnowledgeBase = lazy(() => import('./pages/KnowledgeBase'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const MaintenanceProcedures = lazy(() => import('./pages/MaintenanceProcedures'));
const AircoCovers = lazy(() => import('./pages/AircoCovers'));
const LGMobieleAircoPage = lazy(() => import('./pages/products/lg-mobiele-airco'));
const TosotMobieleAircoPage = lazy(() => import('./pages/products/tosot-mobiele-airco'));
const TotSnel = lazy(() => import('./pages/TotSnel'));

// Manual Pages
const LGHandleiding = lazy(() => import('./pages/manuals/LGHandleiding'));
const TosotHandleiding = lazy(() => import('./pages/manuals/TosotHandleiding'));

// Landing Pages
const DaikinLanding = lazy(() => import('./pages/landing/DaikinLanding'));
const LGLanding = lazy(() => import('./pages/landing/LGLanding'));
const MitsubishiHeavyLanding = lazy(() => import('./pages/landing/MitsubishiHeavyLanding'));
const ToshibaLanding = lazy(() => import('./pages/landing/ToshibaLanding'));
const TosotLanding = lazy(() => import('./pages/landing/TosotLanding'));
const MobieleAircoLanding = lazy(() => import('./pages/landing/MobieleAircoLanding'));
const AircoMetBuitenunitLanding = lazy(() => import('./pages/landing/AircoMetBuitenunitLanding'));
const AircoInstallatieLanding = lazy(() => import('./pages/landing/AircoInstallatieLanding'));
const AircoOnderhoudLanding = lazy(() => import('./pages/landing/AircoOnderhoudLanding'));
const AircoReparatieLanding = lazy(() => import('./pages/landing/AircoReparatieLanding'));
const KostenAircoPlaatsen = lazy(() => import('./pages/KostenAircoPlaatsen'));

// Location Landing Pages
const RoermondPage = lazy(() => import('./pages/locations/Roermond'));
const MaastrichtPage = lazy(() => import('./pages/locations/Maastricht'));
const HeerlenPage = lazy(() => import('./pages/locations/Heerlen'));
const VenloPage = lazy(() => import('./pages/locations/Venlo'));
const SittardPage = lazy(() => import('./pages/locations/Sittard'));
const WeertPage = lazy(() => import('./pages/locations/Weert'));
const MeerssenPage = lazy(() => import('./pages/locations/Meerssen'));
const ValkenburgPage = lazy(() => import('./pages/locations/Valkenburg'));
const KerkradePage = lazy(() => import('./pages/locations/Kerkrade'));
const BrunssumPage = lazy(() => import('./pages/locations/Brunssum'));
const GeleenPage = lazy(() => import('./pages/locations/Geleen'));
const SteinPage = lazy(() => import('./pages/locations/Stein'));
const BeekPage = lazy(() => import('./pages/locations/Beek'));
const LandgraafPage = lazy(() => import('./pages/locations/Landgraaf'));
const VenrayPage = lazy(() => import('./pages/locations/Venray'));
const HoensbroekPage = lazy(() => import('./pages/locations/Hoensbroek'));
const GennepPage = lazy(() => import('./pages/locations/Gennep'));
const EchtPage = lazy(() => import('./pages/locations/Echt'));
const NederweertPage = lazy(() => import('./pages/locations/Nederweert'));
const VaalsPage = lazy(() => import('./pages/locations/Vaals'));
const PanningenPage = lazy(() => import('./pages/locations/Panningen'));
const MaasbrachtPage = lazy(() => import('./pages/locations/Maasbracht'));
const EijsdenMargratenPage = lazy(() => import('./pages/locations/EijsdenMargraten'));
const GulpenWittemPage = lazy(() => import('./pages/locations/GulpenWittem'));
const VoerendaalPage = lazy(() => import('./pages/locations/Voerendaal'));
const SimpelveldPage = lazy(() => import('./pages/locations/Simpelveld'));
const NuthPage = lazy(() => import('./pages/locations/Nuth'));

// Blog
const BlogPage = lazy(() => import('./pages/Blog'));
const AircoOnderhoudLimburgBelangrijk = lazy(() => import('./pages/blog/AircoOnderhoudLimburgBelangrijk'));
const AircoInstallateurLimburgKiezen = lazy(() => import('./pages/blog/AircoInstallateurLimburgKiezen'));
const AircoOfferteLimburg = lazy(() => import('./pages/blog/AircoOfferteLimburg'));
const AircoSpecialistLimburgBlog = lazy(() => import('./pages/blog/AircoSpecialistLimburg'));
const AircoInstallatieZuidLimburg = lazy(() => import('./pages/blog/AircoInstallatieZuidLimburg'));

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
const AircoLatenInstalleren = lazy(() => import('./pages/articles/AircoLatenInstalleren'));
const MobieleVsSplitAirco = lazy(() => import('./pages/articles/MobieleVsSplitAirco'));
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
const AircoVerwarmingKostenBesparing = lazy(() => import('./pages/AircoVerwarmingKostenBesparing'));
const AircoVerwarmingVoordelen = lazy(() => import('./pages/articles/airco-verwarming-voordelen'));

// Loading fallback component with timeout and auto-reload
const LoadingFallback = React.memo(() => (
  <LoadingFallbackWithTimeout 
    timeout={5000}
    onTimeout={() => {
      console.warn('Page loading timeout - will auto-reload');
      // Track this event for monitoring
      if (typeof trackError === 'function') {
        trackError('loading_timeout', 'Page took too long to load');
      }
    }}
  />
));

// More efficient preloading with requestIdleCallback
const preloadCriticalRoutes = () => {
  const criticalRoutes = [
    () => import('./pages/Home'),
    () => import('./pages/Products'),
    () => import('./pages/Contact')
  ];
  
  // Use requestIdleCallback polyfill for better timing
  requestIdleCallbackPolyfill(() => {
    criticalRoutes.forEach(route => route());
  }, { timeout: 2000 });
};

const App = () => {
  const location = useLocation();

  // Initialize performance optimizations
  useEffect(() => {
    PerformanceOptimizer.initializeOptimizations();
  }, []);

  // Throttled tracking function to avoid blocking main thread
  const throttledTrackPageView = useCallback(
    throttle((path: string) => {
      trackPageView(path);
    }, 100),
    []
  );

  // Track page views with throttling
  useEffect(() => {
    // Delay tracking until after animation completes
    setTimeout(() => {
      throttledTrackPageView(location.pathname);
    }, 100);
  }, [location, throttledTrackPageView]);

  // Optimized performance metrics tracking with passive listeners
  useEffect(() => {
    const reportWebVitals = ({ name, value, rating }: { name: string; value: number; rating?: 'good' | 'needs-improvement' | 'poor' }) => {
      // Use requestIdleCallback polyfill to report metrics during idle time
      requestIdleCallbackPolyfill(() => {
        trackPerformance({ name, value, rating });
      });
    };

    // Listen for web vitals
    if ('web-vital' in window) {
      (window as any)['web-vital'].getCLS(reportWebVitals);
      (window as any)['web-vital'].getFID(reportWebVitals);
      (window as any)['web-vital'].getLCP(reportWebVitals);
      (window as any)['web-vital'].getFCP(reportWebVitals);
      (window as any)['web-vital'].getTTFB(reportWebVitals);
    }
  }, []);

  // Memoized error boundary handler
  const handleError = useCallback((error: Error) => {
    // Avoid blocking the main thread during error handling
    setTimeout(() => {
      trackError('react_error_boundary', error.message);
    }, 0);
  }, []);

  // Preload critical routes after initial render
  useEffect(() => {
    preloadCriticalRoutes();
  }, []);

  // Smart preloading with requestIdleCallback to avoid blocking the main thread
  useEffect(() => {
    const path = location.pathname;
    
    const preloadRoutes = () => {
      if (path === '/') {
        return [
          () => import('./pages/Products'),
          () => import('./pages/Contact')
        ];
      } else if (path.startsWith('/products')) {
        return [
          () => import('./pages/ProductDetail')
          // Removed dynamic import of ProductCarousel since it's statically imported elsewhere
        ];
      } else if (path.startsWith('/kennisbank')) {
        return [
          () => import('./pages/articles/HoeWerktAirco'),
          () => import('./pages/articles/SoortenAirco')
        ];
      }
      return [];
    };
    
    const routes = preloadRoutes();
    
    if (routes.length > 0) {
      requestIdleCallbackPolyfill(() => {
        routes.forEach(route => route());
      }, { timeout: 1500 });
    }
  }, [location]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <WebVitalsReporter />
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <SkipToContent />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {/* Removed "wait" mode to improve performance - no need to wait for exit animations */}
          <AnimatePresence mode="sync">
            <Suspense fallback={<LoadingSkeleton />}>
              <Routes>
          <Route path="/products/daikin/ururu-sarara" element={<UruruSararaPage />} />
          <Route path="/products/daikin/stylish" element={<StylishPage />} />
          <Route path="/products/mitsubishi/daiseikai-10" element={<Daiseikai10Page />} />
          <Route path="/products/lg-mobiele-airco" element={<LGMobieleAircoPage />} />
          <Route path="/products/tosot-mobiele-airco" element={<TosotMobieleAircoPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/airco-covers" element={<AircoCovers />} />
                <Route path="/products/:brand" element={<BrandDetail />} />
                <Route path="/products/:brand/:model" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact-webhook-test" element={<ContactWebhookTest />} />
                <Route path="/tot-snel" element={<TotSnel />} />
                <Route path="/werkgebied" element={<ServiceArea />} />
                <Route path="/kennisbank" element={<KnowledgeBase />} />
                <Route path="/voorwaarden" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/onderhoud" element={<MaintenanceProcedures />} />

                {/* Manual Pages */}
                <Route path="/handleidingen/lg" element={<LGHandleiding />} />
                <Route path="/handleidingen/tosot" element={<TosotHandleiding />} />

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
                <Route path="/kennisbank/airco-laten-installeren" element={<AircoLatenInstalleren />} />
                <Route path="/kennisbank/mobiele-vs-split-airco" element={<MobieleVsSplitAirco />} />
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
                <Route path="/airco-verwarming-kosten-besparing" element={<AircoVerwarmingKostenBesparing />} />
                <Route path="/kennisbank/airco-verwarming-voordelen" element={<AircoVerwarmingVoordelen />} />
                <Route path="/kosten-airco-plaatsen" element={<KostenAircoPlaatsen />} />
                
                {/* Landing Pages */}
                <Route path="/landing/daikin" element={<DaikinLanding />} />
                <Route path="/landing/lg" element={<LGLanding />} />
                <Route path="/landing/mitsubishi-heavy" element={<MitsubishiHeavyLanding />} />
                <Route path="/landing/toshiba" element={<ToshibaLanding />} />
                <Route path="/landing/tosot" element={<TosotLanding />} />
                <Route path="/mobiele-airco" element={<MobieleAircoLanding />} />
                <Route path="/airco-met-buitenunit" element={<AircoMetBuitenunitLanding />} />
                <Route path="/airco-installatie" element={<AircoInstallatieLanding />} />
                <Route path="/airco-onderhoud" element={<AircoOnderhoudLanding />} />
                <Route path="/airco-reparatie" element={<AircoReparatieLanding />} />
                
                {/* Location Pages */}
                <Route path="/airco-installatie/roermond" element={<RoermondPage />} />
                <Route path="/airco-installatie/maastricht" element={<MaastrichtPage />} />
                <Route path="/airco-installatie/heerlen" element={<HeerlenPage />} />
                <Route path="/airco-installatie/venlo" element={<VenloPage />} />
                <Route path="/airco-installatie/sittard" element={<SittardPage />} />
                <Route path="/airco-installatie/weert" element={<WeertPage />} />
                <Route path="/airco-installatie/meerssen" element={<MeerssenPage />} />
                <Route path="/airco-installatie/valkenburg" element={<ValkenburgPage />} />
                <Route path="/airco-installatie/kerkrade" element={<KerkradePage />} />
                <Route path="/airco-installatie/brunssum" element={<BrunssumPage />} />
                <Route path="/airco-installatie/geleen" element={<GeleenPage />} />
                <Route path="/airco-installatie/stein" element={<SteinPage />} />
                <Route path="/airco-installatie/beek" element={<BeekPage />} />
                <Route path="/airco-installatie/landgraaf" element={<LandgraafPage />} />
                <Route path="/airco-installatie/venray" element={<VenrayPage />} />
                <Route path="/airco-installatie/hoensbroek" element={<HoensbroekPage />} />
                <Route path="/airco-installatie/gennep" element={<GennepPage />} />
                <Route path="/airco-installatie/echt" element={<EchtPage />} />
                <Route path="/airco-installatie/nederweert" element={<NederweertPage />} />
                <Route path="/airco-installatie/vaals" element={<VaalsPage />} />
                <Route path="/airco-installatie/panningen" element={<PanningenPage />} />
                <Route path="/airco-installatie/maasbracht" element={<MaasbrachtPage />} />
                <Route path="/airco-installatie/eijsden-margraten" element={<EijsdenMargratenPage />} />
                <Route path="/airco-installatie/gulpen-wittem" element={<GulpenWittemPage />} />
                <Route path="/airco-installatie/voerendaal" element={<VoerendaalPage />} />
                <Route path="/airco-installatie/simpelveld" element={<SimpelveldPage />} />
                <Route path="/airco-installatie/nuth" element={<NuthPage />} />
                
                {/* Blog Pages */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/airco-onderhoud-limburg-belangrijk" element={<AircoOnderhoudLimburgBelangrijk />} />
                <Route path="/blog/airco-installateur-limburg-kiezen" element={<AircoInstallateurLimburgKiezen />} />
                <Route path="/blog/airco-offerte-limburg" element={<AircoOfferteLimburg />} />
                <Route path="/blog/airco-specialist-limburg" element={<AircoSpecialistLimburgBlog />} />
                <Route path="/blog/airco-installatie-zuid-limburg" element={<AircoInstallatieZuidLimburg />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <BackToTop />
        <Chatbot />
        <AnnouncementBar />
        <Footer />
        <CookieConsentLite />
        <FeedbackRibbon />
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(App);
