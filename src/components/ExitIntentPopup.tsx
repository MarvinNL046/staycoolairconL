import React, { useState, useEffect, useCallback } from 'react';
import { X, Gift, Phone, Mail, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ExitIntentPopupProps {
  onClose?: () => void;
}

export default function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Set cookie to not show again for 24 hours
    sessionStorage.setItem('exitPopupShown', 'true');
    onClose?.();
  }, [onClose]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('exit_intent_popup', {
      action: 'email_submitted',
      email_provided: !!email
    });
    handleClose();
    // Navigate to contact or show success message
    window.location.href = `/contact?email=${encodeURIComponent(email)}&source=exit-popup`;
  }, [email, handleClose]);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem('exitPopupShown')) {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        trackEvent('exit_intent_popup', {
          action: 'shown'
        });
      }
    };

    // Delay adding listener to avoid immediate triggers
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before enabling

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Sluiten"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Wacht! Vergeet uw gratis advies niet
          </h2>
          <p className="text-blue-100">
            Ontvang persoonlijk besparingsadvies van onze experts
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Benefits */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-700">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Gratis adviesgesprek aan huis
            </li>
            <li className="flex items-center text-gray-700">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Persoonlijke bespaarberekening
            </li>
            <li className="flex items-center text-gray-700">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              Geen verplichtingen
            </li>
          </ul>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Uw e-mailadres"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Ontvang Gratis Advies
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          {/* Alternative actions */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center mb-3">Of neem direct contact op:</p>
            <div className="flex justify-center gap-4">
              <a
                href="tel:0462021430"
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                onClick={() => trackEvent('exit_intent_popup', { action: 'phone_clicked' })}
              >
                <Phone className="h-4 w-4 mr-1" />
                Bel ons
              </a>
              <a
                href="mailto:info@staycoolairco.nl"
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                onClick={() => trackEvent('exit_intent_popup', { action: 'email_clicked' })}
              >
                <Mail className="h-4 w-4 mr-1" />
                E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
