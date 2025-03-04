const CACHE_NAME = "cache-v5"; // Increment for new updates
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/logo_512x512.png",
];

// Install event: Pre-cache HTML, JS, and CSS
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return fetch("/asset-manifest.json") // Fetch dynamically generated assets
        .then((response) => response.json())
        .then((assets) => {
          const urlsToCache = [
            ...STATIC_ASSETS,
            assets["main.js"], // Pre-cache main JS
            assets["main.css"], // Pre-cache main CSS
          ];
          return cache.addAll(urlsToCache);
        })
        .catch(() => cache.addAll(STATIC_ASSETS)); // Fallback to static assets
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate event: Clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event: Apply caching strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache-first for static assets (HTML, JS, CSS)
  if (
    request.destination === "document" || // HTML
    request.destination === "script" || // JS
    request.destination === "style" // CSS
  ) {
    event.respondWith(
      caches.match(request).then((cacheResponse) => {
        return cacheResponse || fetch(request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Stale-while-revalidate for dynamic API requests
  if (url.pathname.startsWith("/appointments") || url.pathname.startsWith("/api/doctors")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        fetch(request)
          .then((networkResponse) => {
            cache.put(request, networkResponse.clone()); // Update cache with fresh data
            return networkResponse;
          })
          .catch(() => caches.match(request)) // Fallback to cache if offline
      )
    );
    return;
  }

  // Network-first for authentication & user data (no cache fallback)
  if (url.pathname.startsWith("/login") || url.pathname.startsWith("/api/auth")) {
    event.respondWith(
      fetch(request).catch(() => caches.match(request)) // No cache fallback for security
    );
    return;
  }

  // Default: Cache-first strategy
  event.respondWith(
    caches.match(request).then((cacheResponse) => cacheResponse || fetch(request))
  );
});

// Handle new version notification (NO FORCED RELOAD)
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});