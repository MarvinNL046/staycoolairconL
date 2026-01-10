import React, { useState, useEffect, useCallback } from 'react';
import { Phone, ArrowRight, Shield, Clock, Thermometer, Timer, Star, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { trackInteraction } from '../utils/analytics';
import MultiStepForm from './MultiStepForm';

// Hook to track urgency banner visibility
function useBannerVisibility() {
  const [isBannerVisible, setIsBannerVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('urgencyBannerDismissed');
    }
    return true;
  });

  useEffect(() => {
    const handleBannerDismiss = () => {
      setIsBannerVisible(false);
    };
    window.addEventListener('urgencyBannerDismissed', handleBannerDismiss);
    return () => window.removeEventListener('urgencyBannerDismissed', handleBannerDismiss);
  }, []);

  return isBannerVisible;
}

// Animated counter component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

// Live activity indicator
function LiveIndicator() {
  const [viewers, setViewers] = useState(Math.floor(Math.random() * 5) + 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(2, Math.min(12, prev + change));
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span>{viewers} mensen bekijken dit nu</span>
    </div>
  );
}

// Text carousel with typewriter effect
function TextCarousel() {
  const headlines = [
    { main: "Bespaar tot 60%", sub: "op uw verwarmingskosten" },
    { main: "Koel in de zomer", sub: "warm in de winter" },
    { main: "Installatie", sub: "binnen 48 uur mogelijk" },
    { main: "Gratis advies", sub: "vrijblijvend aan huis" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] relative">
      {headlines.map((headline, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ${
            index === currentIndex
              ? 'opacity-100 translate-y-0 relative'
              : 'opacity-0 -translate-y-8 absolute top-0 left-0 right-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            <span className="text-orange-400">{headline.main}</span>
            <br />
            <span className="text-white/90">{headline.sub}</span>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default function HeroRedesign() {
  const isBannerVisible = useBannerVisibility();

  return (
    <section className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden ${isBannerVisible ? 'pt-[140px] sm:pt-[160px]' : 'pt-[100px] sm:pt-[120px]'}`}>
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Live indicator + Trust badge */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <LiveIndicator />
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
                <Award className="h-4 w-4" />
                <span>F-gassen gecertificeerd</span>
              </div>
            </div>

            {/* Urgency element */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 text-orange-200 border border-orange-500/30">
              <Timer className="h-5 w-5 animate-pulse" />
              <span className="font-medium">Direct offerte ter plekke bij u thuis</span>
            </div>

            {/* Main headline carousel */}
            <TextCarousel />

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-200 max-w-lg">
              Voorkom hoge terugleverkosten van uw zonnepanelen door slim te verwarmen met een airco.
              <strong className="text-white"> Eén systeem voor verwarming én koeling.</strong>
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-400">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-400">
                  <AnimatedCounter end={48} suffix="u" />
                </div>
                <div className="text-sm text-gray-400">Snelle installatie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-400">
                  4.9
                </div>
                <div className="flex justify-center mt-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Google reviews compact */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white italic text-sm leading-relaxed">
                    "Fantastische service! Binnen 2 dagen geïnstalleerd en we besparen nu enorm op onze energiekosten."
                  </p>
                  <p className="text-gray-400 text-sm mt-2">— Peter V., Maastricht</p>
                </div>
              </div>
            </div>

            {/* CTA buttons - Desktop only */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://afspraken.staycoolairco.nl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInteraction('hero', 'click', 'appointment_button')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 transition-all hover:shadow-xl hover:scale-[1.02]"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
              >
                <Phone className="h-5 w-5" />
                <span>Plan Direct een Afspraak</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:0462021430"
                onClick={() => trackInteraction('hero', 'click', 'call_button')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white/50 hover:border-white text-white font-semibold rounded-xl transition-all hover:bg-white/20 bg-white/10 backdrop-blur-sm"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
              >
                <Phone className="h-5 w-5" />
                <span>Bel: 046 202 1430</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Gratis advies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Snelle service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Garantie</span>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
              {/* Corner ribbon */}
              <div className="absolute top-6 -right-12 w-44 bg-gradient-to-r from-green-500 to-green-600 text-white text-center transform rotate-45 py-1.5 z-10 shadow-lg">
                <span className="text-sm font-semibold">Binnen 24u reactie</span>
              </div>

              {/* Form header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ontvang <span className="text-orange-400">Gratis</span> Advies
                </h3>
                <p className="text-gray-300">
                  Persoonlijk besparingsadvies van onze experts
                </p>
              </div>

              {/* Trust badges above form */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-1.5 text-xs text-white bg-white/10 px-3 py-1.5 rounded-full">
                  <Shield className="h-3.5 w-3.5 text-green-400" />
                  <span>Veilig</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white bg-white/10 px-3 py-1.5 rounded-full">
                  <Zap className="h-3.5 w-3.5 text-yellow-400" />
                  <span>Snel</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white bg-white/10 px-3 py-1.5 rounded-full">
                  <Users className="h-3.5 w-3.5 text-blue-400" />
                  <span>2000+ klanten</span>
                </div>
              </div>

              {/* Multi-step form */}
              <MultiStepForm variant="hero" />

              {/* Form footer */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-gray-400">
                  Door te verzenden gaat u akkoord met ons{' '}
                  <a href="/privacy" className="text-blue-400 hover:text-blue-300">privacybeleid</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA - Below form on mobile */}
        <div className="lg:hidden mt-8 flex flex-col gap-3">
          <a
            href="https://afspraken.staycoolairco.nl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInteraction('hero', 'click', 'appointment_button_mobile')}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 transition-all"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            <Phone className="h-5 w-5" />
            <span>Plan Direct een Afspraak</span>
          </a>

          <a
            href="tel:0462021430"
            onClick={() => trackInteraction('hero', 'click', 'call_button_mobile')}
            className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-white/50 text-white font-semibold rounded-xl transition-all bg-white/10 backdrop-blur-sm"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            <Phone className="h-5 w-5" />
            <span>Bel: 046 202 1430</span>
          </a>
        </div>
      </div>

    </section>
  );
}
