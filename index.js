// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/gvss/sw.js')              
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop
