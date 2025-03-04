const CACHE_NAME = "cache-v1"
const urlsToCache = ["/", "index.html", "/icons/icon-512x512.png"]

self.addEventListener("install", (event) => {
    console.log("service worked installed")
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        }
    ))
})

self.addEventListener("activate", (event) => {
    console.log("service worker activated");
})

self.addEventListener("fetch", (event) => {
    console.log("interceptando la solicitud", event.request.url)
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    )
})