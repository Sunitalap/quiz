self.addEventListener('install', (event) => {
	console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', (eevent) => {
	console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', (event) => {
	console.log(`event:${event}`);
});
