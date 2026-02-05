import React, { useState, useEffect, useCallback } from 'react';
import { X, Gift, Phone, Mail, ArrowRight, Loader2, Check } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { sendEmail } from '../utils/email';

interface ExitIntentPopupProps {
  onClose?: () => void;
}

export default function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Set cookie to not show again for 24 hours
    sessionStorage.setItem('exitPopupShown', 'true');
    onClose?.();
  }, [onClose]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to all webhooks (EmailJS, LeadConnector, Leadflow)
      await sendEmail({
        name: 'Exit Popup Lead',
        email: email,
        phone: '',
        city: '',
        message: 'Lead via exit-intent popup - alleen email opgegeven'
      });

      trackEvent('exit_intent_popup', {
        action: 'email_submitted',
        email_provided: !!email
      });

      handleClose();
      // Navigate to contact page with pre-filled email
      window.location.href = `/contact?email=${encodeURIComponent(email)}&source=exit-popup`;
    } catch (error) {
      console.error('Failed to submit exit popup email:', error);
      // Still redirect even if webhook fails
      handleClose();
      window.location.href = `/contact?email=${encodeURIComponent(email)}&source=exit-popup`;
    } finally {
      setIsSubmitting(false);
    }
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
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all z-10"
          aria-label="Sluiten"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="p-8 sm:p-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full mb-6">
            <Gift className="h-8 w-8 text-quatt-orange" />
          </div>

          <h2 className="text-3xl font-black text-quatt-dark mb-3 tracking-tight">
            Wacht! Vergeet uw gratis advies niet
          </h2>
          <p className="text-gray-500 font-medium mb-8 text-lg">
            Ontvang persoonlijk besparingsadvies van onze experts, <span className="text-quatt-orange font-bold">helemaal gratis.</span>
          </p>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
            <ul className="space-y-3">
              <li className="flex items-center text-quatt-dark font-bold">
                <span className="flex-shrink-0 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-quatt-orange" />
                </span>
                Gratis adviesgesprek aan huis
              </li>
              <li className="flex items-center text-quatt-dark font-bold">
                <span className="flex-shrink-0 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-quatt-orange" />
                </span>
                Persoonlijke bespaarberekening
              </li>
              <li className="flex items-center text-quatt-dark font-bold">
                <span className="flex-shrink-0 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3 shadow-sm">
                  <Check className="w-3.5 h-3.5 text-quatt-orange" />
                </span>
                Geen verplichtingen
              </li>
            </ul>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Uw e-mailadres"
                className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-100 bg-gray-50 font-bold text-quatt-dark placeholder:text-gray-400 focus:outline-none focus:border-quatt-orange focus:bg-white transition-all"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-quatt-orange hover:bg-orange-500 text-white rounded-xl font-black text-lg shadow-xl shadow-quatt-orange/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Verzenden...
                </>
              ) : (
                <>
                  Ontvang Gratis Advies
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
            100% Vrijblijvend • Privacy Gewaarborgd
          </p>
        </div>
      </div>
    </div>
  );
}
