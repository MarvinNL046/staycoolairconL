import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoadingFallbackWithTimeoutProps {
  timeout?: number;
  onTimeout?: () => void;
}

export default function LoadingFallbackWithTimeout({ 
  timeout = 5000, 
  onTimeout 
}: LoadingFallbackWithTimeoutProps) {
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const [showReloadButton, setShowReloadButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // First timeout: show reload button after specified time
    const timeoutId = setTimeout(() => {
      setHasTimedOut(true);
      setShowReloadButton(true);
      
      if (onTimeout) {
        onTimeout();
      }

      // Second timeout: auto-reload after additional 3 seconds
      setTimeout(() => {
        // Try to clear any problematic caches first
        if ('caches' in window) {
          caches.keys().then(names => {
            names.forEach(name => caches.delete(name));
          }).finally(() => {
            // Force a hard reload
            window.location.reload();
          });
        } else {
          window.location.reload();
        }
      }, 3000);
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [timeout, onTimeout]);

  const handleReload = () => {
    // Clear caches and force reload
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => caches.delete(name));
      }).finally(() => {
        window.location.reload();
      });
    } else {
      window.location.reload();
    }
  };

  const handleNavigateHome = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        {!hasTimedOut ? (
          <>
            {/* Loading spinner */}
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            </div>
            <p className="text-gray-600">Laden...</p>
          </>
        ) : (
          <>
            {/* Timeout message */}
            <div className="space-y-4">
              <div className="text-yellow-600">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-800">
                De pagina laadt langzamer dan verwacht
              </h2>
              
              <p className="text-gray-600 text-sm">
                Dit kan gebeuren bij de eerste keer laden. De pagina wordt automatisch vernieuwd...
              </p>

              {showReloadButton && (
                <div className="space-y-3">
                  <button
                    onClick={handleReload}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Nu vernieuwen
                  </button>
                  
                  <button
                    onClick={handleNavigateHome}
                    className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Naar homepagina
                  </button>
                </div>
              )}

              <div className="mt-4">
                <div className="animate-pulse flex space-x-1 justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}