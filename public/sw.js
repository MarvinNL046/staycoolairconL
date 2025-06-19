// Service Worker for StayCool Airco - v2
const CACHE_NAME = 'staycool-v2';
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

  // For internal requests, use cache-first strategy
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