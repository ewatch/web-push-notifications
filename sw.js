self.addEventListener('push', function(event) {
    const promiseChain = self.registration.showNotification('Hello, World.');

    event.waitUntil(promiseChain);
});

self.addEventListener("install", (event) => {
    // The promise that skipWaiting() returns can be safely ignored.
    self.skipWaiting();
  
    // Perform any other actions required for your
    // service worker to install, potentially inside
    // of event.waitUntil();
  });