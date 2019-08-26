
// Listen for fetch event and add fetched items to the cache
self.addEventListener('fetch', (event) => {
    event.waitUntil(
        caches.open('restaurant-static-v1').then((cache) => {
            return cache.addAll([
                '/',
                'restaurant.html',
                'js/main.js',
                'js/restaurant_info.js',
                'js/dbhelper.js',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'css/styles.css'
            ]);
        })
    );

    // Check the cache first for any cached items before forwarding request to the network
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) return response;
            return fetch(event.request);
        })
    );
});


