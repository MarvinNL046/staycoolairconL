// Service Worker for StayCool Airco - Auto-versioned
const BUILD_VERSION = 'BUILD_VERSION_PLACEHOLDER'; // Will be replaced during build
const CACHE_NAME = `staycool-v${BUILD_VERSION}`;
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Network-first for HTML, cache-first for assets
const NETWORK_FIRST_ROUTES = [
  '/',
  '/index.html',
  /\/[^.]*$/, // All routes without file extension (SPA routes)
];

// Install event with cache manifest validation
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    Promise.all([
      // Pre-cache core assets
      caches.open(CACHE_NAME).then(cache => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      }),
      // Load and validate cache manifest
      fetch('/cache-manifest.json')
        .then(response => response.json())
        .then(manifest => {
          console.log('Cache manifest loaded:', manifest.buildVersion);
          self.cacheManifest = manifest;
        })
        .catch(err => console.warn('Cache manifest not found:', err))
    ])
  );
});

// Fetch event with better error handling
self.addEventListener('fetch', event => {
  // Skip service worker for external resources completely
  const url = new URL(event.request.url);
  const isExternal = !url.hostname.includes('staycoolairco.nl') && 
                     !url.hostname.includes('localhost');
  
  // Let browser handle external requests natively (don't intercept)
  if (isExternal) {
    return; // Don't call event.respondWith() - let browser handle it
  }

  // Skip caching for JavaScript chunks and other assets to avoid version conflicts
  const isAsset = url.pathname.includes('/assets/') || 
                  url.pathname.endsWith('.js') || 
                  url.pathname.endsWith('.css');
  
  if (isAsset) {
    // Network-only for assets to prevent cached stale versions
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Check if we got HTML instead of the expected asset
          const contentType = response.headers.get('content-type') || '';
          
          if (response.ok) {
            // For JS files, ensure we got JavaScript not HTML
            if (url.pathname.endsWith('.js') && contentType.includes('text/html')) {
              console.warn('Got HTML instead of JS for:', url.pathname);
              return new Response('/* Asset loading error - got HTML instead of JS */', {
                status: 200,
                headers: { 'Content-Type': 'application/javascript' }
              });
            }
            
            // For CSS files, ensure we got CSS not HTML  
            if (url.pathname.endsWith('.css') && contentType.includes('text/html')) {
              console.warn('Got HTML instead of CSS for:', url.pathname);
              return new Response('/* Asset loading error - got HTML instead of CSS */', {
                status: 200,
                headers: { 'Content-Type': 'text/css' }
              });
            }
            
            return response;
          }
          
          // If response not ok, return appropriate fallback
          if (url.pathname.endsWith('.js')) {
            return new Response('/* Asset not found */', { 
              status: 200,
              headers: { 'Content-Type': 'application/javascript' }
            });
          } else if (url.pathname.endsWith('.css')) {
            return new Response('/* Asset not found */', {
              status: 200, 
              headers: { 'Content-Type': 'text/css' }
            });
          }
          
          return response;
        })
        .catch(err => {
          console.error('Asset fetch failed:', err);
          // Return appropriate content type based on file extension
          if (url.pathname.endsWith('.js')) {
            return new Response('/* Network error loading asset */', { 
              status: 200,
              headers: { 'Content-Type': 'application/javascript' }
            });
          } else if (url.pathname.endsWith('.css')) {
            return new Response('/* Network error loading asset */', {
              status: 200,
              headers: { 'Content-Type': 'text/css' }
            });
          }
          
          return new Response('', { status: 404 });
        })
    );
    return;
  }

  // Check if this should be network-first
  const shouldUseNetworkFirst = NETWORK_FIRST_ROUTES.some(route => {
    if (route instanceof RegExp) {
      return route.test(url.pathname);
    }
    return url.pathname === route;
  });

  // Network-first for HTML, cache-first for other assets
  if (shouldUseNetworkFirst) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Only cache successful responses
          if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache))
              .catch(err => console.error('Cache put failed:', err));
          }
          return response;
        })
        .catch(() => {
          // Fall back to cache if network fails
          return caches.match(event.request);
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