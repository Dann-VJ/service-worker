//Ciclo de vida del SW
//1.- Install
self.addEventListener('install', event => {
    console.log('SW: Instalado ')
    //Simular instalación de caches
    const instalación = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Instalación terminada ')
            self.skipWaiting()
            resolve();
        }, 1000);
    })
    event.waitUntil(instalación)
})
//2.- Activación
self.addEventListener('activate', event => {
    console.log('SW: Activado y controlado la app')
})
//3.- Fetch
self.addEventListener('fetch', function (event) {

    console.log('SW', event.request.url);
    //Aplicar estrategias del cache
    if (event.request.url.includes('https://fakestoreapi.com/products/')){
       const resp = new Response({"ok": false, "mensaje": "Interceptado por el SW"}); 
       event.respondWith(resp)
    }
});

self.addEventListener('sync', event => {
    console.log("Tenemos conexión!")
    console.log(event)
    console.log(event.tag)
})  