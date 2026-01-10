import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

/**
 * Mobile Sticky CTA Component
 * A floating action button that appears on mobile after scrolling past the hero section.
 * Provides quick access to call, WhatsApp, or schedule an appointment.
 */
export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px (past hero section)
      const scrollThreshold = 500;
      // Hide when near footer (last 300px)
      const footerThreshold = document.documentElement.scrollHeight - window.innerHeight - 300;

      const currentScroll = window.scrollY;

      if (currentScroll > scrollThreshold && currentScroll < footerThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMainClick = () => {
    if (isExpanded) {
      // If expanded, clicking main button collapses
      setIsExpanded(false);
    } else {
      // Direct call on first click
      trackEvent('mobile_sticky_cta', { action: 'call_clicked' });
      window.location.href = 'tel:0462021430';
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
    trackEvent('mobile_sticky_cta', { action: isExpanded ? 'collapsed' : 'expanded' });
  };

  // Only show on mobile
  if (typeof window !== 'undefined' && window.innerWidth > 768) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-6 right-4 z-50 md:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      {/* Expanded menu */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-200 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/31636481054?text=Hallo,%20ik%20heb%20interesse%20in%20een%20airco."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('mobile_sticky_cta', { action: 'whatsapp_clicked' })}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Schedule */}
        <a
          href="https://afspraken.staycoolairco.nl"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('mobile_sticky_cta', { action: 'appointment_clicked' })}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Calendar className="h-5 w-5" />
          <span className="font-medium whitespace-nowrap">Afspraak</span>
        </a>
      </div>

      {/* Main button */}
      <div className="relative">
        {/* Expand button */}
        <button
          onClick={handleExpand}
          className="absolute -top-3 -left-3 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg text-sm font-bold"
          aria-label="Meer opties"
        >
          {isExpanded ? '×' : '+'}
        </button>

        {/* Call button */}
        <button
          onClick={handleMainClick}
          className="flex items-center gap-2 bg-orange-500 text-white px-5 py-4 rounded-full shadow-xl hover:bg-orange-600 transition-all duration-200 hover:scale-105"
          aria-label="Bel nu"
        >
          <Phone className="h-6 w-6 animate-pulse" />
          <span className="font-bold text-lg">Bel Nu</span>
        </button>
      </div>

      {/* Pulse ring animation */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-orange-500 animate-ping opacity-20" />
      </div>
    </div>
  );
}
