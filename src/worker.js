// https://github.com/GoogleChrome/airhorn/blob/master/app/sw.js
// https://jakearchibald.com/2014/offline-cookbook/
// https://hashedin.com/2017/06/05/building-progressive-web-applications/
// https://h3manth.com/new/blog/2016/url-navigation-from-service-worker/
// https://github.com/GoogleChrome/ioweb2015/blob/master/app/scripts/shed/offline-analytics.js
// https://github.com/GoogleChrome/ioweb2015/blob/9fbdda51cb9bb8c69912277144e3c6910e419893/app/scripts/helper/simple-db.js


// var CACHE_NAME = 'c37-account-cache-v';
// let version = '0.0.1';

// CACHE_NAME += version;

// self.addEventListener('install', e => {
// 	let timeStamp = Date.now();
// 	e.waitUntil(
// 		caches.open(CACHE_NAME).then(cache => {
// 			return cache.addAll([
// 					`/`,
// 					`/assets/css/style.css?timestamp=${timeStamp}`,
// 					`/index.html?timestamp=${timeStamp}`,
// 					`/app.js?timestamp=${timeStamp}`,
// 					`/app.js.gz?timestamp=${timeStamp}`,
// 					`/vendor.js?timestamp=${timeStamp}`,
// 					`/vendor.js.gz?timestamp=${timeStamp}`,
// 					`/manifest.js?timestamp=${timeStamp}`,
// 					`/manifest.json?timestamp=${timeStamp}`,
// 					`/worker.js?timestamp=${timeStamp}`
// 				])
// 				.then(() => self.skipWaiting());
// 		})
// 	)
// });

// self.addEventListener('activate', event => {
// 	event.waitUntil(self.clients.claim());
// });

// self.addEventListener('fetch', event => {
// 	event.respondWith(
// 		caches.match(event.request, {
// 			ignoreSearch: true
// 		}).then(response => {
// 			return response || fetch(event.request);
// 		})
// 	);
// });