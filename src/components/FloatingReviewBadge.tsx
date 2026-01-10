import React, { useState, useEffect } from 'react';
import { Star, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

/**
 * Floating Review Badge Component
 * Shows a small badge with Google reviews that can be expanded to show recent reviews.
 * Floats on the left side of the screen after scrolling.
 */
export default function FloatingReviewBadge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('reviewBadgeDismissed')) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrollThreshold = 800;
      const footerThreshold = document.documentElement.scrollHeight - window.innerHeight - 400;
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
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem('reviewBadgeDismissed', 'true');
    trackEvent('floating_review_badge', { action: 'dismissed' });
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    trackEvent('floating_review_badge', { action: isExpanded ? 'collapsed' : 'expanded' });
  };

  const reviews = [
    {
      name: 'Peter V.',
      location: 'Maastricht',
      text: 'Fantastische service! Binnen 2 dagen geïnstalleerd.',
      rating: 5
    },
    {
      name: 'Maria B.',
      location: 'Roermond',
      text: 'Heel tevreden, prima advies en snelle installatie.',
      rating: 5
    },
    {
      name: 'Jan K.',
      location: 'Heerlen',
      text: 'Professioneel team, eerlijke prijzen.',
      rating: 5
    }
  ];

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className={`fixed left-4 bottom-24 z-40 hidden md:block transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      {/* Main badge */}
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-700 transition-colors z-10"
          aria-label="Verbergen"
        >
          <X className="h-3 w-3" />
        </button>

        {/* Badge button */}
        <button
          onClick={handleClick}
          className="flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 hover:shadow-xl transition-shadow border border-gray-100"
        >
          {/* Google G logo */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>

          {/* Rating */}
          <div className="flex items-center">
            <span className="font-bold text-gray-900">4.9</span>
            <div className="flex ml-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <span className="text-gray-500 text-sm">231 reviews</span>
        </button>
      </div>

      {/* Expanded reviews panel */}
      <div
        className={`absolute left-0 bottom-full mb-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">4.9</span>
            <div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-blue-100">231 Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {reviews.map((review, index) => (
            <div key={index} className="p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-900">{review.name}</span>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">{review.text}</p>
              <p className="text-xs text-gray-400 mt-1">{review.location}</p>
            </div>
          ))}
        </div>

        <a
          href="https://www.google.com/search?q=staycool+airco+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 bg-gray-50 text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
          onClick={() => trackEvent('floating_review_badge', { action: 'view_all_clicked' })}
        >
          Bekijk alle reviews →
        </a>
      </div>
    </div>
  );
}
