"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","e114db6220ad4984c59258b56cd2acbd"],["static/css/app.00c0717cc471416946501072b10e52c5.css","8de00bc3aab859ca5213fff9549e90ff"],["static/js/0.b2945518bb790d974cb1.js","f4e4328d5c7e726709d8ca2e031c6018"],["static/js/1.c59201aeea4fed2ceaa3.js","3a61c1b9b007a5fa4c96dcd51ef7880c"],["static/js/10.d38321bfad9eef8eb15b.js","c8a653ebb42b90328f3c03d90ae0b6f2"],["static/js/11.56ca91915142338e606f.js","16475cd4190c5ed9b71557a3b47ed433"],["static/js/12.0a36e05f1edcdd434f9f.js","b9c974dd21a52440bdaceb7821f86a9e"],["static/js/13.8ac415fa5fa59bc68998.js","fa88cb34553b2908f1ff7a8eb85c9dd5"],["static/js/14.1c440a6f3ab960a259fd.js","e8cc2534efaf36d5f468c7e1be4d59cf"],["static/js/15.088170c75053c9839646.js","7e7748bdcc960561f06707b9948af685"],["static/js/16.554c0907b0dc126165b3.js","a7d361dc68f80bb2bfc8d3a869b54660"],["static/js/17.d4d1f911c3d9aa3df8b3.js","30fe8a5383d75593a97f601836893592"],["static/js/18.5eb239d6be92b18cc610.js","200d81946cf88b3ee100f4e6c9eb6a92"],["static/js/19.722d31a647943ea36ef7.js","f0f5f379204e7d1ea0a96ba4a2073527"],["static/js/2.feeae2a8b7dc53a494e9.js","76911a2bddbd9ad4cd8d4f1d5a69eac0"],["static/js/20.23700e73e5acf1135717.js","0e9fef5f84874f04b548f14517427dd1"],["static/js/21.dbda917cae06f6896397.js","ea6f986c8298a15be87145fc6b66c080"],["static/js/22.40a323beb2e66596e8c6.js","0bd2b3f6e79db664f447637a5d8cfe7c"],["static/js/23.0de53c4ab81c7d9180b8.js","017cbab94dc35a1b3f39724f6009c223"],["static/js/24.4d5e06815d8afff21737.js","740f7aa9ecdeb183e83b37bfa4aab2a8"],["static/js/25.f6d19a799176209b4c85.js","88a5597d7369eb0fb2dda449e9f31a30"],["static/js/26.06142091fee43d7c4b10.js","e56fd21b0cbc9e35ce12487c78f62056"],["static/js/27.88c49adbe6493db26417.js","877f9b4e37570357ca88d0dbd0f095c0"],["static/js/28.11a6eaaa1b9eb5135171.js","cea992dec2264ac17783784dfe85c1a4"],["static/js/29.08abf76ecb2af7505635.js","81b63fdc57cfaed789e4dc6d54d3a08e"],["static/js/3.120f5c406559cce2fe7c.js","f6640ac6a3b8c4e28fc2955caf8f8907"],["static/js/30.0c523014207a7d954699.js","f9c3ce8d82e4d9fdeb7e114769fe229b"],["static/js/4.1c361b691f407f78922f.js","ef4985a9af667feebe06d65ea710d2da"],["static/js/5.11bddca67d70d6ec1189.js","acf322e2505708ad9230214c9c9b6986"],["static/js/6.97be4de35e338cec1a95.js","5d8cb210eb1c3171fb8b9b2a3d647862"],["static/js/7.49bd9f03cf9a241237e0.js","04be6661fadeb461dd73984acf4ea547"],["static/js/8.19e63e4feaa21b327aad.js","7fd8e50a92a96dd138fb19e82a1ccca3"],["static/js/9.3c2cb8aa7e4ae54cdceb.js","4016f1ecd251917c6b00cbd9bb4b3b8a"],["static/js/app.31e21025a4278e72ec97.js","49524fa39c1142f00733ea89dd839c0a"],["static/js/manifest.d807d8a00b384609c47f.js","098f7839ef2fdbd240665707f46a7311"],["static/js/vendor.a3e053ffbfe897fcb246.js","99b449e3c0ed45f3b501718a03e5b99d"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(c);a||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});