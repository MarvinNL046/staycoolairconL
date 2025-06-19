/// <reference lib="webworker" />
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

declare let self: ServiceWorkerGlobalScope;

// Clean up old caches
cleanupOutdatedCaches();

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);

// Cache images with optimized strategy
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-v2',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days for images
        purgeOnQuotaError: true
      })
    ]
  })
);

// Cache CSS and JS files
registerRoute(
  ({ request }) => 
    request.destination === 'style' || 
    request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'static-resources-v2',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
      })
    ]
  })
);

// Cache Google Fonts with longer expiration
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' ||
               url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-v2',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 365 * 24 * 60 * 60 // 1 year for fonts
      })
    ]
  })
);

// Cache API responses with network-first strategy
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache-v2',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 24 * 60 * 60 // 1 day for API responses
      })
    ]
  })
);

// Cache external CDN resources
registerRoute(
  ({ url }) => 
    url.origin === 'https://cdn.jsdelivr.net' ||
    url.origin === 'https://unpkg.com' ||
    url.origin === 'https://cdnjs.cloudflare.com',
  new CacheFirst({
    cacheName: 'cdn-cache-v2',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
);

// Enhanced SPA handling with precaching
const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {
  allowlist: [new RegExp('^/(?!api|images|sw\.js|manifest\.json)')],
  denylist: [
    new RegExp('^/admin'),
    new RegExp('\\.xml$'),
    new RegExp('\\.txt$')
  ]
});
registerRoute(navigationRoute);

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions when back online
  const cache = await caches.open('offline-forms');
  const requests = await cache.keys();
  
  for (const request of requests) {
    try {
      const response = await fetch(request);
      if (response.ok) {
        await cache.delete(request);
      }
    } catch (error) {
      console.log('Failed to sync form submission:', error);
    }
  }
}

// Enhanced message handling
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open('runtime-cache').then(cache => 
        cache.addAll(event.data.urls)
      )
    );
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        )
      )
    );
  }
});

// Performance monitoring
self.addEventListener('fetch', (event) => {
  // Track cache hit rates for analytics
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.waitUntil(
      caches.match(event.request).then(response => {
        if (response) {
          // Cache hit - could send analytics event
          console.log('Cache hit for:', url.pathname);
        }
      })
    );
  }
});

// Install and activate event optimizations
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  // Force immediate activation in development
  if (self.location.hostname === 'localhost') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(
    // Clean up old caches
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => !cacheName.endsWith('-v2'))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Enhanced client claim
clientsClaim();