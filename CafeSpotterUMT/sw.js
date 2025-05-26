const cacheName = "cafe-v1";
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./pages/map.html",
  "./pages/add.html",
  "./pages/gallery.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "https://unpkg.com/leaflet/dist/leaflet.css",
  "https://unpkg.com/leaflet/dist/leaflet.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
