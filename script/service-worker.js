var dataCacheName = 'IIUMCGPA';
var cacheName = 'IIUMCGPA';
var filesToCache = [
    "iiumcgpa.js",
    "iiumcgpa.php",
    "./",
    "./index.html",
    "./404.html",
    "./redirect.html",
    "./README.md",
    "./LICENSE.md",
    "./_config.yml",
    "./images/",
    "./images/banner_color.jpg",
    "./images/banner_white.png",
    "./images/icon.ico",
    "./images/logo.png",
    "./images/ribbon.png",
    "./style/",
    "./style/iiumcgpa.css"];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
