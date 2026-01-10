import React, { useState, useEffect } from 'react';
import { X, Clock, Zap, Calendar } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface UrgencyBannerProps {
  variant?: 'seasonal' | 'limited' | 'countdown';
  message?: string;
  ctaText?: string;
  ctaLink?: string;
  onVisibilityChange?: (isVisible: boolean) => void;
}

/**
 * Urgency Banner Component
 * A top announcement bar that creates urgency with seasonal offers, limited spots, or countdowns.
 */
export default function UrgencyBanner({
  variant = 'seasonal',
  message,
  ctaText = 'Plan Afspraak',
  ctaLink = 'https://afspraken.staycoolairco.nl'
}: UrgencyBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  // Check if banner was dismissed this session
  useEffect(() => {
    if (sessionStorage.getItem('urgencyBannerDismissed')) {
      setIsVisible(false);
    }
  }, []);

  // Countdown timer for 'countdown' variant
  useEffect(() => {
    if (variant !== 'countdown') return;

    // Set end date to end of current month
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endOfMonth.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [variant]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('urgencyBannerDismissed', 'true');
    trackEvent('urgency_banner', { action: 'dismissed', variant });
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('urgencyBannerDismissed'));
  };

  // Set CSS variable for banner height
  useEffect(() => {
    if (isVisible) {
      document.documentElement.style.setProperty('--urgency-banner-height', '40px');
    } else {
      document.documentElement.style.setProperty('--urgency-banner-height', '0px');
    }
  }, [isVisible]);

  const handleCTAClick = () => {
    trackEvent('urgency_banner', { action: 'cta_clicked', variant });
  };

  if (!isVisible) return null;

  // Determine current season for seasonal variant
  const month = new Date().getMonth();
  const isSummer = month >= 5 && month <= 8; // June - September
  const isWinter = month >= 10 || month <= 2; // November - March

  // Default messages based on variant and season
  const getDefaultMessage = () => {
    if (message) return message;

    switch (variant) {
      case 'seasonal':
        if (isSummer) {
          return '☀️ Zomeractie: Installatie binnen 48 uur mogelijk!';
        } else if (isWinter) {
          return '❄️ Winteractie: Bespaar op verwarming met een airco!';
        }
        return '🌟 Actie: Gratis adviesgesprek aan huis!';

      case 'limited':
        return '🔥 Nog 3 installatieplekken beschikbaar deze week!';

      case 'countdown':
        return '⏰ Maandactie: Gratis installatiepakket t.w.v. €150';

      default:
        return '🌟 Vraag nu gratis advies aan!';
    }
  };

  const getBgColor = () => {
    switch (variant) {
      case 'seasonal':
        return isSummer
          ? 'bg-gradient-to-r from-orange-500 to-red-500'
          : 'bg-gradient-to-r from-blue-600 to-blue-700';
      case 'limited':
        return 'bg-gradient-to-r from-red-600 to-pink-600';
      case 'countdown':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600';
      default:
        return 'bg-gradient-to-r from-blue-600 to-blue-700';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'seasonal':
        return isSummer ? <Zap className="h-4 w-4" /> : <Zap className="h-4 w-4" />;
      case 'limited':
        return <Clock className="h-4 w-4" />;
      case 'countdown':
        return <Calendar className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  return (
    <div className={`${getBgColor()} text-white py-2 px-4 relative fixed top-0 left-0 right-0 z-[60]`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm md:text-base">
        {/* Icon */}
        <span className="hidden sm:flex items-center">{getIcon()}</span>

        {/* Message */}
        <span className="font-medium text-center">
          {getDefaultMessage()}
          {variant === 'countdown' && (
            <span className="ml-2 font-bold">
              Nog {timeLeft.days}d {timeLeft.hours}u {timeLeft.minutes}m
            </span>
          )}
        </span>

        {/* CTA Button */}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCTAClick}
          className="hidden sm:inline-flex items-center px-3 py-1 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          {ctaText}
        </a>

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Sluiten"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
