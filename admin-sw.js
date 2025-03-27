self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('admin-cache').then(cache => {
            return cache.addAll(['admin.html']);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});
