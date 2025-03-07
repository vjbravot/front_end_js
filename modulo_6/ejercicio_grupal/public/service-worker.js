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
          
          // Parallel cache addition
          return Promise.all(
            urlsToCache.map((url) => cache.add(url).catch(() => {})) // Fallback gracefully
          );
        })
        .catch(() => {
          // In case of failure, fall back to static assets
          return Promise.all(
            STATIC_ASSETS.map((url) => cache.add(url).catch(() => {}))
          );
        });
    })
  );
  self.skipWaiting(); // Activate immediately
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
            // Cache the network response asynchronously
            cache.put(request, networkResponse.clone()).catch(() => {});
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // API data caching with stale-while-revalidate strategy
  if (url.pathname.startsWith("/api/appointments") || url.pathname.startsWith("/api/doctors")) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Serve cached response immediately (stale-while-revalidate)
        if (cachedResponse) {
          fetch(event.request).then((networkResponse) => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone()).catch(() => {});
            });
          });
          return cachedResponse;
        }

        // Fallback to network fetch and cache it for the next time
        return fetch(event.request)
          .then((response) => {
            const clonedResponse = response.clone();
            clonedResponse.json().then((data) => {
              // Save data to IndexedDB asynchronously
              saveToIndexedDB("appointments", { id: url.pathname, data }).catch(() => {});
            });
            return response;
          })
          .catch(async () => {
            const cachedData = await getFromIndexedDB("appointments", url.pathname);
            return cachedData ? new Response(JSON.stringify(cachedData.data)) : new Response(null, { status: 404 });
          });
      })
    );
  }
});

// Handle new version notification (NO FORCED RELOAD)
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
