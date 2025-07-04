import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleDecline = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    // Disable GA and GTM
    window['ga-disable-G-8JJ3BRSW92'] = true;
    window['ga-disable-AW-10789737434'] = true;
    window['dataLayer'] = window['dataLayer'] || [];
    window['dataLayer'].push({'gtm.blacklist': ['google']});
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-blue-800" />
                <p className="text-gray-600 text-sm">
                  Wij gebruiken cookies om uw ervaring te verbeteren.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded-md hover:bg-blue-900"
                >
                  Accepteren
                </button>
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Weigeren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}