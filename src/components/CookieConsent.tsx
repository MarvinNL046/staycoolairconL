import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      // Apply stored preferences
      const storedPreferences = JSON.parse(consent);
      setPreferences(storedPreferences);
      applyPreferences(storedPreferences);
    }
  }, []);

  const applyPreferences = (prefs: typeof preferences) => {
    // Disable GA and GTM if analytics is false
    if (!prefs.analytics) {
      window['ga-disable-G-8JJ3BRSW92'] = true;
      // Disable GTM
      window['dataLayer'] = window['dataLayer'] || [];
      window['dataLayer'].push({'gtm.blacklist': ['google']});
    }

    // Disable marketing cookies if marketing is false
    if (!prefs.marketing) {
      window['ga-disable-AW-10789737434'] = true;
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    savePreferences(newPreferences);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    applyPreferences(prefs);
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
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Cookie className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Cookie Voorkeuren</h3>
                </div>
                <p className="text-gray-600">
                  Wij gebruiken cookies om uw ervaring te verbeteren en onze diensten te optimaliseren. 
                  U kunt kiezen welke cookies u wilt accepteren.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Alles accepteren
                </button>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, necessary: true }))}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Alleen noodzakelijk
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Noodzakelijke cookies</span>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Analytische cookies</span>
                  <p className="text-xs text-gray-500">Voor het analyseren van websitegebruik</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-700">Marketing cookies</span>
                  <p className="text-xs text-gray-500">Voor gepersonaliseerde advertenties</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={handleSavePreferences}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Voorkeuren opslaan
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}