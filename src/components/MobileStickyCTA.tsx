import React, { useEffect, useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

/**
 * Mobile-only appointment banner. It replaces competing floating buttons with
 * one clear conversion action after the visitor has engaged with the page.
 */
export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [delayElapsed, setDelayElapsed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('mobileAppointmentCtaDismissed')) {
      setIsDismissed(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setDelayElapsed(true);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const footerThreshold = document.documentElement.scrollHeight - window.innerHeight - 420;
      const cookieBannerVisible = !localStorage.getItem('cookie-consent');

      setIsVisible(
        delayElapsed &&
          !isDismissed &&
          !cookieBannerVisible &&
          currentScroll > 420 &&
          currentScroll < footerThreshold
      );
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [delayElapsed, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem('mobileAppointmentCtaDismissed', 'true');
    trackEvent('mobile_sticky_cta', { action: 'dismissed' });
  };

  return (
    <div
      className={`fixed left-4 right-4 bottom-4 z-40 md:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative rounded-3xl bg-white/95 p-2 shadow-2xl shadow-quatt-dark/20 ring-1 ring-black/5 backdrop-blur-xl">
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-quatt-dark text-white shadow-lg"
          aria-label="Afspraakknop verbergen"
        >
          <X className="h-4 w-4" />
        </button>

        <a
          href="https://afspraken.staycoolairco.nl"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('mobile_sticky_cta', { action: 'appointment_clicked' })}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-quatt-orange px-5 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-quatt-orange/25"
        >
          <Calendar className="h-5 w-5" />
          <span>Plan gratis adviesgesprek</span>
        </a>
      </div>
    </div>
  );
}
