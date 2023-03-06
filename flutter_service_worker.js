'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6384afbab102093509d036251833221a",
"assets/assets/images/2010/first_pic.jpg": "ac3704a8321e9a477c7b95dda7c5df9c",
"assets/assets/images/2010/masjed.jpg": "925ee658400f341dd7e1645136cadad0",
"assets/assets/images/2014/btateen2014.jpg": "5e0e7de5f9a98c456d4b198221c9e55b",
"assets/assets/images/2014/qafla2014.jpg": "da4e0e34e3c7a401ccf30d8201578df8",
"assets/assets/images/2014/ramadan2014.jpg": "9fab1d171ca7c89bd3b0711bbb93d892",
"assets/assets/images/2016/keswa2016(1).jpg": "68f72adce104424e763f7cdf3c4ac41c",
"assets/assets/images/2016/keswa2016(2).jpg": "9c981438c9c3bc5fc4cd210011abdc15",
"assets/assets/images/2016/keswa2016.jpg": "736a03522ca8583af835f076ab6340cb",
"assets/assets/images/2017/pyramids(1).jpg": "97078c40e8f85f6cbfd220f3ddcbaf6f",
"assets/assets/images/2017/pyramids.jpg": "7db2479a0c580b68072ff0bd149ca709",
"assets/assets/images/2017/ramadan2017.jpg": "18de3669d4d622292cacf7ac20f7c6f9",
"assets/assets/images/2019/kiss.jpg": "2747776ec7abcd5e1f8cbf9834cb9564",
"assets/assets/images/2019/packing.jpg": "01924f4a62ecfbf3e1cbf19465b8e43f",
"assets/assets/images/2019/qafla.jpg": "a4cc9af3b792ba6446bdd0173580b5b8",
"assets/assets/images/ayb_logo.png": "aaeb7383741142a4d65cb85b8c3e4755",
"assets/assets/images/charity.jpg": "ae72a70ddbef0235c10437c2759a88ad",
"assets/assets/images/donation/cash.png": "399a47013678c6da36398e83630e3b04",
"assets/assets/images/donation/telda.png": "88e8643b5488c1627bc4ff87659f82b7",
"assets/assets/images/donation/vodafone.png": "6a567ae5c239e972a1f0f4dc4903a7aa",
"assets/assets/images/donation.jpg": "d15a62271dae882880dddd11cb169341",
"assets/assets/images/events_pics/AYB_Group_Photo.jpg": "d97a9b9f2e0a1f37745c26a69e8ad9bf",
"assets/assets/images/events_pics/KNOCK_ON_DOOR.jpg": "c196985a8e5f4218fa7587d55d24d4bd",
"assets/assets/images/events_pics/R&D.jpg": "a6185f71616f739d248e422c049f76ac",
"assets/assets/images/google_logo.png": "3a9d51aedbe7af80b573509dd0e30256",
"assets/assets/images/groupPhoto.jpg": "22a025f5c524f1709aa920350ea65178",
"assets/assets/images/hr.png": "33081b91cc091060d28f7a5e22cbd521",
"assets/assets/images/MM.jpg": "cdba0517867173eaaaa3f4e5818c2079",
"assets/assets/images/PR.png": "56b735e6edbe300e6fcf6fede6e143b8",
"assets/assets/images/shapes/shape1.png": "f613c3880c2c346a2d6c23921cc59979",
"assets/assets/images/shapes/shape2.png": "b350cc3a445cccb701c4cb182f523d33",
"assets/assets/images/shapes/shape3.png": "5cfd28d631260ae0d006f1b2956a59d1",
"assets/assets/images/shapes/shape4.png": "6a9950b907e666233f75c4a8a2bd76f9",
"assets/assets/images/shapes/shape5.png": "c825266247e474823ef78564c014c2ed",
"assets/assets/images/shapes/shape6.png": "a41f02af66f94260f392cf10b5bb72a8",
"assets/assets/images/social_media/facebook.png": "e00bd27fdd22f8aba5a50fd6ffda422f",
"assets/assets/images/social_media/instagram.png": "a00f61ebb90568031b7489592ff4c33f",
"assets/assets/images/street.jpg": "e29dcb09987c323d81f28bc5d02561ba",
"assets/assets/images/YDP.jpg": "f1fea5ad69539c07e7de18dfa10b525d",
"assets/assets/images/YDP2.png": "57a08214dcd8afb758a752da2cc2874b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "03f101e4404aee1f3c5dd1068632057b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "d04a1afc99167336b20c8a496a9ac27d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bad1c1a7c7cb92a6ff91eb2c5d061b50",
"/": "bad1c1a7c7cb92a6ff91eb2c5d061b50",
"main.dart.js": "900ed349c9a7453f9a22864975c78cb6",
"manifest.json": "29200e30ddaac00667eb96ceec1b84ff",
"version.json": "95566e85ec61c6a49fe37f24be065e95"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
