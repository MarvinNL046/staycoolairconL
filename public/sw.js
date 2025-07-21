// Service Worker for StayCool Airco - v3
const CACHE_NAME = 'staycool-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - skip waiting to activate immediately
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('Cache open failed:', err))
  );
});

// Fetch event with better error handling
self.addEventListener('fetch', event => {
  // Skip caching for external resources that might cause CSP issues
  const url = new URL(event.request.url);
  const isExternal = !url.hostname.includes('staycoolairco.nl') && 
                     !url.hostname.includes('localhost');
  
  // For external requests, just fetch without caching
  if (isExternal) {
    event.respondWith(
      fetch(event.request)
        .catch(err => {
          console.error('External fetch failed:', err);
          // Return a fallback response for external resources
          return new Response('', { status: 200 });
        })
    );
    return;
  }

  // Skip caching for JavaScript chunks and other assets to avoid version conflicts
  const isAsset = url.pathname.includes('/assets/') || 
                  url.pathname.endsWith('.js') || 
                  url.pathname.endsWith('.css');
  
  if (isAsset) {
    // Network-first for assets to ensure latest version
    event.respondWith(
      fetch(event.request)
        .catch(err => {
          console.error('Asset fetch failed:', err);
          // Try cache as fallback for assets
          return caches.match(event.request)
            .then(response => response || new Response('', { status: 404 }));
        })
    );
    return;
  }

  // For other internal requests, use cache-first strategy
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        // Clone the request because it can only be used once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Don't cache HTML responses for non-root paths to avoid caching error pages
            const contentType = response.headers.get('content-type');
            const isHtml = contentType && contentType.includes('text/html');
            const isRootPath = url.pathname === '/' || url.pathname === '/index.html';
            
            if (isHtml && !isRootPath) {
              return response;
            }
            
            // Clone the response because it can only be used once
            const responseToCache = response.clone();
            
            // Cache the response for future use
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(err => console.error('Cache put failed:', err));
            
            return response;
          })
          .catch(err => {
            console.error('Fetch failed:', err);
            // Return offline page if available
            return caches.match('/index.html');
          });
      })
  );
});

// Activate event - claim clients immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim all clients immediately
      clients.claim()
    ])
  );
});