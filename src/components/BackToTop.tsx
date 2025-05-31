import React, { useState, useEffect, useCallback } from 'react';
import { throttle } from '../utils/helpers';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Throttled scroll handler to improve performance
  const toggleVisibility = useCallback(
    throttle(() => {
      // Use requestAnimationFrame for smooth updates
      requestAnimationFrame(() => {
        setIsVisible(window.pageYOffset > 300);
      });
    }, 100), // Throttle to max 10 times per second
    []
  );

  // Set the scroll event listener with passive flag
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          aria-label="Scroll naar boven"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
