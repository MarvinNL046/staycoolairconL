import React from 'react';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:shadow-lg focus:rounded-md"
    >
      Skip to main content
    </a>
  );
}