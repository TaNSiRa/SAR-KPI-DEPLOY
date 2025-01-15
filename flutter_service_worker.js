'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "e7fa1ea045ab6746c4f22a7059c71825",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7225f10d651cbbd356e1a4368081113b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2c1c51d2d8f6791633f14dceadc9034",
".git/logs/refs/heads/master": "d2c1c51d2d8f6791633f14dceadc9034",
".git/logs/refs/remotes/origin/master": "98de446cd4320b16f8f86251ffcbf0d6",
".git/objects/07/384a59fa6db45379adaf2d602217f9ac97811e": "14919b676110140664c8efe60c8d2cff",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/50814a4c13b8eb152e46e5a8912c22dabbf0d4": "aa5b43c5c7c35ee8458846ddaba5c3c9",
".git/objects/0c/79dfd7be212f491e0ecdbc4b8cd7765ff4ada6": "c239e3c26e18c0c8d5526b30126798fd",
".git/objects/11/38d3804d4a8176fe4c4487f1f78d2367c60e38": "6c4bf187559115ca9a70dca89db43bae",
".git/objects/17/99990fd55569eeedd2091bf585f85232704780": "b06abe961fe449d72841c1bd9b07ba0f",
".git/objects/19/51408ec63ce32b5b1e03d242430d3655f4a4a4": "1a10cc07a2f52125110b9d9bf5274a1c",
".git/objects/1c/16dd89b9d70a01b3a281f91e9fc20bfcbfdcf6": "9541759cab3b9dc4e2be8477d06f9250",
".git/objects/1c/19efc1343e969f7b0d4dc51282fff0e8345d2b": "7debc69fcc3f9294d48e07c4c09e675b",
".git/objects/1d/892a4fb796a4ca4de7feb7c8143b10c9cd022e": "2290b9ce5f4da11fb0a3f4a40f1aac09",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/d6b7ce6761f60e3f2f67584fce40099acd7d7b": "4e6290094996d8b1ccdd5263cae160ab",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/c38b73c4a35e3edc7ab63cb95bc624401e617a": "48e08d2917cc9afcbccc85fce9ccdc42",
".git/objects/2c/630501f9c2d8cde58bd86124f5fc0d60826cb5": "31dc2c7762fa32c9d365d34cf5f03207",
".git/objects/2f/a63177820701351e8567bc8e5709581a3c6f1d": "c1e645e679267dcdbca9fe160bdd1e99",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/122a88eae5fc696a6185b020919a1db548aae4": "c6e5e82546b384af5110373403552ba8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/35d3a2680855d068ce19c3d15f8b7f020f9191": "ef0811e3c9fca12050153030da729684",
".git/objects/3f/db41e825dc5e8d582940d3b7a4536bea6ec1fc": "fff9aed092ef07a58985dd61f4da5d11",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/c7a4294add34e7e3095fd3074a2abb4e3476dd": "8c6ff3567b6926384b4a3373742b8bff",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/3d3c896b0591351ed0ddcd016187d278e11681": "682d409c8ce6e40b931404af59711981",
".git/objects/4a/4edfbeb81b6dca5b78223d0217bc640bcd5b0a": "db9caa46f6baf463e03403ca827e38bb",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4c/cd98d3c8413609b7b1babef6baa71a5436852b": "2165a42b4cbd68d33b7202d49ef76a0b",
".git/objects/50/21df744c7bf71cc145b325ddfc310819568ffa": "af7371075d751e85b5e2450ff1e5d70f",
".git/objects/54/693304b3c1c72baa60294d11a83b771de9cf3d": "a16e2e03f3d004c970f507b56d909b1c",
".git/objects/55/fa696415e6ebefdac3146da6e8b4550e2e1fdc": "8f055af65abed0f8ee2a736d8d8a1c8a",
".git/objects/59/3b68ee9194ebfb5ae40c9bf5b9edf3fb62235e": "c7f1f982af475940ee48b651405e582b",
".git/objects/59/b46953f65cbcf07d0a488eafa6d1da009fc8f1": "9bbe82adc44a7a42e213a1705eebbdef",
".git/objects/59/e456fdab493a5c6234d094cc45bee6b559a85c": "a478e875b95ce123b654ac4b6125b1c9",
".git/objects/5d/9148a3e10354eacaae6de4223325c35124ab59": "271039d53fc1c05c7358433f2c68b3ff",
".git/objects/60/37722d850fb3ba81bb0219fae7af0cf3e7d992": "2665f4fb7682392e304622c51f8b760b",
".git/objects/62/8c166f83b204f6f9b4bea640b6d964f837b780": "0197019afb7b717939d7e325647b44ef",
".git/objects/6b/52a45868c4578dccbe07c139cbbf3445a0f9da": "2e08a953ec387b905ee3a147b0777664",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/76/2bd2a225b011c94dbff7b0eb51feef09e683cb": "8a65bc5ef08474d5ab2b88d5dcedb23e",
".git/objects/7c/7674efe946422effb7afffc8eac09eeeab02a4": "546cc2068af70a216347ad1d42b68d9d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/ba96129bb9dbcf30a5ddae11ac5268246ca68e": "b56b96406014bda3ac2690b55e6f5462",
".git/objects/8e/3d8bb978e3f0443115a555764f2a99b3afc7f3": "555d12567e84f2fe9880998751f65351",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/d61a6db4a76032abdf5eca8688f35528124008": "345b3760b1d875fe50f12c36b28fbbc3",
".git/objects/a0/095303798dc609626a6ac77dfde8d203cda212": "136f818cc759f77aaa90dd3c0d89f83e",
".git/objects/a3/5fe9d1cbdd7c1171f60944356474c724c2e73e": "a819eb95b05c99285243b14065d3c25d",
".git/objects/a3/bf4a01635b9444cf0c7eb5d873dbc2e267566d": "09f45f5b6bc635ddc49538fd1091844d",
".git/objects/a7/5e1fc78dc4e319b587aa0edc58ed3293aa9d5b": "e50cca3bc18f36df7f4a93cbbd66cb0d",
".git/objects/ab/897a656dda26996df2624b6bf1722d833f897c": "46e594c37595c08fd027819794e35150",
".git/objects/af/16b9e9ca8d755510f8e9d171f2bd11d9e40a27": "aacdffddef6cba74325b5b3df3bfda17",
".git/objects/b0/daed7b6fbb1e6c6fad3db9d1f893491a58128a": "20095a01f6e0848c1a1ddd0f90a68ff5",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/b5459fcc393e5cff3c80db6f27e5a18c8f1bde": "1934075bb8df57f7bb2253079ab7263f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c3d4c54292693b789664680276e96d97962379": "11fe39a32e265dbe887924896207c37d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/3ef44275105720e73d36ddea664a4654cfe1d9": "0c61308a3ad9672014331bb83a2a1880",
".git/objects/bb/944115e96593349ad47c0b29faca3c0ad7d349": "4554e32416c9d46bcc3801f41419c5fe",
".git/objects/bd/5ec378b4b314efbd752fe295c2ffa3084d3e12": "55e885d89aaac876e2a0cf3dce62ade6",
".git/objects/c0/3869c2b1e3be7a712b6680f6aeaa79b2004e26": "914bd9815773421c01100c325f877486",
".git/objects/c6/58cd5a88f08898cee884149005dbad9be3616b": "c09790921e375fcc5e44344339a90c1a",
".git/objects/cd/49f836340df0e3af8726f597aac2556edecc20": "de57bce3ad1a86df920942a60c38230b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/d5bda1c2ba1805c1995e5d9c25f5f58969ae3c": "7f7bc46414c71ababf18e06b5748e3c7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/067e97d270b4d096a0aec09a5b369287318650": "90f23b0086a6f5910ae0bd8013e3a5f9",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/824797163992ac31361fdabda816323f7435fc": "8e46b4a8131dd69a3e9a281fac1480dc",
".git/objects/e2/77db8bf4d85573fae9746abb5056cf1a88ca50": "83bd6ec9839b58776c8e571e413c5419",
".git/objects/e6/1ab60122feac058c869a72c4193230224aeb48": "6c2a8161ed0d7a362a3c95a8ac3926bd",
".git/objects/e9/d39e6981a51c1bf2fb2faea0f391cdcb34c41b": "2f0c4d1685b7ac753cf3ef974fe7252e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b05aae2e13b9a68f46d4fb58a50d951c606199": "ca5ddf96e88a5e128e47bab8deb1517d",
".git/objects/ec/6287a5a5876cd0107e9c0679329ff83702154d": "22fc91df49567e5062b50cfca2188128",
".git/objects/ee/ba378ca8c66e533a4aba490edf145196420965": "b4ad83691b0799399d49571fcf9f910d",
".git/objects/f0/c1816726dd9bb671ae128206d2ad1879f81f3c": "da54d65bf05c96ef3d80bb5f8bb827c9",
".git/objects/f1/c029597b7c7fcd9db31b6be05f2ad518385b6f": "aebd301098536efa9e280771181434a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/db7f8404421c4b39ee40aad0fc9c2c6dd4d58f": "7f106c378ac3d3d3a3e2c87952e98ff0",
".git/objects/fc/df957e9c23d0cd02fccfc378e85f033ed9ddcd": "d5027cefbd404c11fe28b7ad7631d93d",
".git/refs/heads/master": "9a245752867afcf510fe98e57aa72ba3",
".git/refs/remotes/origin/master": "9a245752867afcf510fe98e57aa72ba3",
".vscode/settings.json": "c7e8f9382c3580702639d9cfffd2fa5c",
"assets/AssetManifest.bin": "08e5e5477708a5b18b62ce23993991be",
"assets/AssetManifest.bin.json": "b10ae5b5b996a90fb1dbf328f9d05606",
"assets/AssetManifest.json": "30e6beb78bbc085c0fcf516078d70a4c",
"assets/assets/icons/icon-caution@3x.png": "8f984d63371c3c065a6600c8a3ce4610",
"assets/assets/icons/icon-close@3x.png": "acd36d73c212b0340765271095d4ab7a",
"assets/assets/icons/icon-correct@2x-green.png": "70325b6ace4a1fb08f6cdae73f72bb74",
"assets/assets/icons/icon-down_4@3x.png": "f7bd2048bda76031dc2c9f1c1851e39c",
"assets/assets/icons/icon-error@3x.png": "e5b60c16a6694859a9a342e66dc09609",
"assets/assets/icons/icon-info@3x.png": "f14fc07d89153a98cc979979c02757d8",
"assets/assets/icons/icon-notifications.png": "01e90e91bd50b2eb166784bac884b7e3",
"assets/assets/images/logo_tpk.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/thaiparker.jpg": "3f2e724345e044c0f280da7aef74182c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "37927897185a699ef891790df1403669",
"assets/NOTICES": "53007b64c95c0cc7b9df9626a280644b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "52fb5740e89b318c6ed2a0f00779cfea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d6f5f34e6f2e38feb8463b54abe54d5",
"/": "7d6f5f34e6f2e38feb8463b54abe54d5",
"main.dart.js": "6ec46f7e3a5bff5860d4cdfdaa50e37e",
"manifest.json": "996d5316c75feb4ef42ebb1e31a6fd1e",
"version.json": "7f86edf6c13624ed15391b7ecd82e7d0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
