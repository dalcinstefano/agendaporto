// agenda Portomansuè: service worker minimo (16/10/2026)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(function () {
    return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<p style="font-family:system-ui;padding:24px">Nessuna connessione. Riprova quando torna la rete.</p>',
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }));
});
