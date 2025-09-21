// Cache name and files to pre-cache (optional for JS, but you can add static assets)
const CACHE_NAME = 'ibap-cache';
const ASSETS_TO_CACHE = [
  '/',           // Cache root page
  '/ibappwa.html', // If hosted as file or server, adjust path accordingly
  // Add CSS, JS, images here if you want to cache statics for offline
];

// Install event - pre-cache static assets (optional)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches if necessary
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch event - respond from cache, fetch from network if not cached
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(response =>
        response || fetch(event.request)
      )
    )
  );
});
