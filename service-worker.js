"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","4ea279ef3a7f1a42d8fc36739c96650f"],["/static/css/main.38e01df6.css","3f146ab74931c23e6eda5fec0b8063eb"],["/static/js/main.1f1982e2.js","c02c0821eb5300e5a7c75363333c16f8"],["/static/media/MazeCreater.76f42bba.png","76f42bba75cb83ea0a3414bd75868d0a"],["/static/media/MazeRunner.4133e0e8.png","4133e0e865e08501edaa0dcf4bdeca42"],["/static/media/TillingBlock.7774641f.png","7774641f97258027ebe3012f2faaffda"],["/static/media/XO_AI.4c1ea4b3.png","4c1ea4b3fb5e2906da14b720ce8c2b78"],["/static/media/barcamp.930a9fcf.png","930a9fcfa404cba2f5ba03577dce6594"],["/static/media/chayen.fd9f7e02.png","fd9f7e02ede9fd211f3a02b18e2c966f"],["/static/media/facebook.54476bca.ico","54476bcaf40b1d1aa7c13854b73ae8a2"],["/static/media/github.3eb2edd1.png","3eb2edd1e1079c1c7891543f3f50ce06"],["/static/media/localhackday.1edac9ca.png","1edac9ca3714932f7303704e6f6cd38b"],["/static/media/mail.952e3f04.ico","952e3f04cbe2099a99f90735a9f29f97"],["/static/media/remec.27e547c9.png","27e547c9314b927a433d7b19be2f55e2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});