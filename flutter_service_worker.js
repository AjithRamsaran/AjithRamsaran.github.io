'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1230904695d6980c44fa62754bf0abbe",
"index.html": "225269408debeafe849e6c08cdf53bdf",
"/": "225269408debeafe849e6c08cdf53bdf",
"main.dart.js": "57d19eb2e78dcc178d1df08a23398774",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "12182a8e746bb98185b8e24e993f95da",
"icons/Icon-192.png": "12182a8e746bb98185b8e24e993f95da",
"icons/Icon-maskable-192.png": "12182a8e746bb98185b8e24e993f95da",
"icons/Icon-maskable-512.png": "12182a8e746bb98185b8e24e993f95da",
"icons/Icon-512.png": "12182a8e746bb98185b8e24e993f95da",
"manifest.json": "50b099af9fa1d2a4b6f7abc02c715f90",
".git/config": "fb6da5b9bed9d1b44e7070aa7ff72105",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/68/938e3265cc00391baab7b0929afa291ae03b51": "42d336a0a919b1fd48eef9180064268c",
".git/objects/57/6ea7df1328c26ac7b802e5f0db6b30369928cc": "fb804e7651a9dbd3f3be8c05e4827ccd",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6a/701d8e951571d26c3dc76206309f1a69881922": "fbc03b173878d5b379cb2275b598dcb3",
".git/objects/67/53d7a879672591be30436bed31e97a4dd133bb": "b00ad4b52fa469af736c110d10dec15a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a3/4a93731d3fbdbf82a9691035d2dfdde3e404f5": "e950c50c0df3c99779331547e1a4168b",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/c143b0ef1c3c63a879173afc2c3d25df0b0de6": "62a9280d802473a634e75d6adf3fcca3",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/be/6ad35ac43c101e0d40354f5397cc8255d0328f": "966262aaab5defa84da704f0e3c24a06",
".git/objects/da/65b85e07761b9c438a9bb27e36872f03673ef6": "7f3362c7d3230fbce8de5e77f614bf5f",
".git/objects/e5/7a69790d047ab48339cb225b90b7b3153ec7fa": "3c71a0de84208bb82a531d7659cde0e5",
".git/objects/e5/f5ce1648d609df606664a7ff5394890ec2739a": "176e91c584d73d24241ea49e5ad17d29",
".git/objects/e2/b81fd1075a911666e606fa544bac737151c618": "dfe020ab0b154a8b9f7fa0f1c6f47a6a",
".git/objects/f3/8185efdd723769f6175163bd9ab54cd313bb8e": "8231be042dce3f3b6425c914a3f60d71",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6ac1d1b34b65ebb7a8fd9e8b69530baf241aa2": "d595e7e5a23ef77ea694f25fb8848a8b",
".git/objects/e3/34e45220fa79c697dc345e460618fff9c3a6af": "9b12c72662d132feae43cd892d0d6f80",
".git/objects/cf/e4bee17c1b31cf0c339f3978d02ac913bff569": "a018edb71c42a08bc480610cc34ffcc5",
".git/objects/e4/4b034d70e3bd163d578277b6c2a565b41429d7": "45efd0c401704bdaaeb4f537cd231d04",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/ae81174afb13dc9361b4bf59978b293c8fb23e": "31c503042d1764cbc9f729d0866d8178",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/45/bebbc25cb8cb63cc7a3cc6e611c6879024d8ab": "f959f578bbcfe73f03b3d51ad243bd8c",
".git/objects/73/41f5cb72373d143f5f788dbf7d7e3b6a6ac440": "f0aa1d63cf92b3398bce8b5a63970984",
".git/objects/73/23677cf18ccc6d543fc616b78250cbc39bd15e": "847076150fb9ba3e9114596d1d8f05f1",
".git/objects/28/a7985234d04e83f263157cd263fe1a5384560b": "0934b757a7811eacac078b925eb02d12",
".git/objects/2a/0075b3730e4b7dd0e6fe3e11423511e285f677": "e53c3c58aeb90adc06f6f36cd88216c8",
".git/objects/43/d89d245945917902cf06b6c5d09835eff0382c": "86cdd59333cda81129b3e87f08e6ac9f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/cae56e30624679c027d98203eb697338c0d47c": "5acc23fa961ec65b1133b4ca3df143b1",
".git/objects/9a/218e48c3fa9c586cc683d5404e8c0912219655": "94e798e48fddec4074359e89d49b7973",
".git/objects/65/d768bfd5bcd62629d32ef42b99417f31a52fea": "8d59468f25200687c8f638faf5eb7c9b",
".git/objects/3f/068628d04b72b40b06a27d1628f71c507bf9a7": "d6afd4ad5a943846b45735175ffa31f9",
".git/objects/08/0efae84d01a0722d0991d8d44c17f99699e221": "35fadbd4d33b5bbc3d1f39d34b7e2aa4",
".git/objects/08/f4bcec3e64bdffd361a82af1dcba8dc431fe98": "6dfd2dce1fe4402b8929361195c93295",
".git/objects/6c/e090d7d23b68323f972030aabfa0061277b1f0": "7db5a21c2aa04f8be08f23aade749be8",
".git/objects/39/f971cb1cb353d7d3415e759e58532383074446": "e60063b3e1ac024d2b881fbb46f8e553",
".git/objects/39/bb9202e25d8697d244cd827819f2c9a3bea374": "9ee3c14609d1aad98a085c83225767a9",
".git/objects/bf/b122062926e05efd556fec04b95c7c97df562c": "9f2f3887d7f12d267689978d1d5acea0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/08117113b19b46fdef625060da41b93440156f": "958fd1607c2da3a6c91dd26fb5b66a53",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/192741db9272f0f1215dc00197515cb167180d": "66f1bc90eb9792b036efd7de59a353a2",
".git/objects/c3/80199a02bb43c42eadc10b88b94a03a70d1ad9": "d75232012d1d736bd541d376129f165d",
".git/objects/ea/231b65b3b1ff885d2981e9f0d068a71c044751": "d7bc86adf80a3a9b7c3769eab82f2121",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e1/2b5531f3d4b5872f67919732d05e84d8febe15": "a8f281aff5c4caee74f354c540c8e2a9",
".git/objects/e1/c8b68c5d5e1f8beaec0f5a4faeea7f254f8a4c": "72545b612749a88e50b3f1cb6e3a1b6a",
".git/objects/cd/6a3afebf810a1872ef14dec2b2581bb8cc18f1": "68f887468dcfdd2ed479aaa0fa5558be",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ff/ec6d64873a5769561fe8b6b6bd0c0a51078501": "fd9f6f6da2940f6b2f9344ec6d344011",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e7/7449195bb195dc897706b532b84bd1f0624b35": "57428f6eeccf5effed6576f92c9e52ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/26121799742581637eff3ed7a43e995023e756": "9ee8544800f60542bdcaa2bbf390d5da",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/ad7c10875abdda04ef8a59f4761ec2d6cc344c": "f3520fed05361c4869b1dcd0f31b9015",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1d/4234e0bfc1be6a168744f243599f7c733b18cd": "fbfe07956995981a84c6862c3f999284",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/ab8ed3235b1e724c927969497bdde99320742f": "ecb16df5da1886ed3a4f0d32cc6864d1",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/47/3d270c8f5450f2a2011bf5ccc6463a665a47de": "b9b3c4af02d81284588f0bc8d97edc65",
".git/objects/7f/4a01548efe46f9b7b75649aae99c32e6fc6f42": "3dddbb089e43b3ac3568be354c5daea9",
".git/objects/22/1b692b67231eab98a4329481e5a0a69aca0e25": "cf5a0d0e7b3b8b257a1d589175dfabd5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5063ab0640233b71f71b782674fc3311",
".git/logs/refs/heads/main": "220edf62d565af44f9eae72e9dd36b70",
".git/logs/refs/remotes/port/main": "3d08b073a1fa35c7a07acc3cb32e985f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "dc009637f7ed250cec1c60b8adf4ed6c",
".git/refs/remotes/port/main": "dc009637f7ed250cec1c60b8adf4ed6c",
".git/index": "ae7f9cf96b05a87e6ac0a2de70a53d6a",
".git/COMMIT_EDITMSG": "510a37f0cf5b3ad7330166b7c2b29443",
"assets/AssetManifest.json": "c1328b4caf2802deac5a364de8800397",
"assets/NOTICES": "81fdcfa535e638e81cb18b784b952f1f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0705e8494addfb92c7efdd02247f6c6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "292b52a62a20533c7f483ac82d4354bf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/thiruvallur.jpeg": "0c5cdbeaf7cb98315bd7503044698b04",
"assets/assets/images/methodical.png": "32c5074df428b75168176b7a3def7b75",
"assets/assets/images/kilofarms.png": "4b8aa94c730ee3ac539520a3ee27d1b5",
"assets/assets/images/naalangadi.png": "9e7d992b6955218c89e211d4270411e3",
"assets/assets/images/bg-pattern.webp": "7d47bf754a227bd8b46f137af8790714",
"assets/assets/images/profile.jpeg": "2bcb03ba91390974d5ac42b9adb73aea",
"assets/assets/images/helpdesk_final.png": "399ba496b2e999fe0f76bfef5a25fdc7",
"assets/assets/images/image_1.webp": "13d2629ff330f5acf5014cf4eddc9e78",
"assets/assets/images/ar1.png": "12182a8e746bb98185b8e24e993f95da",
"assets/assets/icons/github.svg": "d0764cb89f306afa0d2c55937e23cc4d",
"assets/assets/icons/email.svg": "5837d3c40f8f786fe50f08af0ca0937a",
"assets/assets/icons/linkedin.svg": "e6add312cdbb5b132099a07bdbdd0dd4",
"assets/assets/icons/twitter.svg": "057a8f3e92c4aba18c5951ad7fe51131",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
