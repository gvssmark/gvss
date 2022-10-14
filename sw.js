self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/gvss/',
      '/gvss/index.js',
       '/gvss//index.html',
      '/gvss/images/ibap192.png',
      '/gvss/images/ibap512.png',
            ])),
  );
});


self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});



