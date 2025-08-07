// Chunk loading error handler utility
// This helps recover from chunk loading failures due to deployment mismatches

import React from 'react';

export class ChunkLoadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ChunkLoadError';
  }
}

// Track failed chunks to avoid infinite loops
const failedChunks = new Set<string>();

// Handle chunk loading errors
export function handleChunkError(error: Error): void {
  const chunkFailedMessage = /Loading chunk [\d]+ failed/;
  const syntaxErrorMessage = /Unexpected token '<'/;
  const isChunkError = error.name === 'ChunkLoadError' || 
                       chunkFailedMessage.test(error.message) ||
                       syntaxErrorMessage.test(error.message);

  if (isChunkError) {
    const chunkId = error.message.match(/chunk (\d+)/)?.[1] || 
                    (syntaxErrorMessage.test(error.message) ? 'syntax-error' : 'unknown');
    
    // Check if we've already tried to recover from this chunk
    if (failedChunks.has(chunkId)) {
      console.error('Chunk loading failed after retry:', chunkId);
      return;
    }

    failedChunks.add(chunkId);

    // Clear service worker cache and reload
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister();
        });
      });
    }

    // Clear all caches
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }

    // Show user-friendly error message
    const message = 'Er is een nieuwe versie beschikbaar. De pagina wordt vernieuwd...';
    
    // Show notification if possible
    if (typeof window !== 'undefined' && window.alert) {
      window.alert(message);
    }

    // Force reload to get latest chunks
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}

// Note: lazyWithRetry function removed as it requires JSX which is not supported in .ts files
// Use standard React.lazy() with error boundaries instead

// Global error handler for unhandled chunk errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (event.error) {
      handleChunkError(event.error);
    }
  });

  // Handle unhandled promise rejections (common with dynamic imports)
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason instanceof Error) {
      handleChunkError(event.reason);
    }
  });
}