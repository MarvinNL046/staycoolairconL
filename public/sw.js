// Service Worker voor StayCool Airco
const CACHE_VERSION = 'v1';
const CACHE_NAME = `staycool-${CACHE_VERSION}`;

// Assets om te cachen voor offline gebruik
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Critical CSS and JS files will be added dynamically
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('staycool-') && cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Strategy: Network First, falling back to cache
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip cross-origin requests
  if (!request.url.startsWith(self.location.origin)) return;
  
  event.respondWith(
    fetch(request)
      .then(response => {
        // Don't cache if not successful
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        caches.open(CACHE_NAME)
          .then(cache => {
            // Cache HTML, CSS, JS, and image files
            if (request.url.match(/\.(html|css|js|jpg|jpeg|png|gif|webp|svg|ico)$/)) {
              cache.put(request, responseToCache);
            }
          });

        return response;
      })
      .catch(() => {
        // Network request failed, try to get from cache
        return caches.match(request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // If requesting HTML and not in cache, return index.html for SPA routing
          if (request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'form-sync') {
    event.waitUntil(syncFormData());
  }
});

async function syncFormData() {
  // Get queued form data from IndexedDB and try to submit
  // Implementation depends on your form submission logic
  console.log('Syncing form data...');
}