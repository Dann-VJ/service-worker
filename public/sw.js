console.log('Service Worker Loaded...');

// Responder con lo que contenga la solicitud
self.addEventListener('fetch', e => {
    console.log('Fetching...');
    console.log(e);
});

// Interceptar solicitudes
self.addEventListener('fetch', e => {
    if(e.request.url.includes('boston1')){
        e.respondWith(
            fetch('logo512.png')
        );
    }
});
        