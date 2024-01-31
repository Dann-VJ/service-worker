if(navigator.serviceWorker){
    console.log('Service Worker Supported');
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker Registered'))
        .catch((err) => console.log('Service Worker Not Registered', err));
} else {
    console.log('Service Worker Not Supported');
}