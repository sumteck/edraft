// eDraft Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] eDraft Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] eDraft Activated');
});

self.addEventListener('fetch', (e) => {
  // ആപ്പ് ഇൻസ്റ്റാൾ ആകാനുള്ള ബേസിക് റിക്വയർമെൻ്റ് പൂർത്തിയാക്കാൻ വേണ്ടിയുള്ള കോഡ്
  e.respondWith(fetch(e.request).catch(() => new Response('Network error')));
});