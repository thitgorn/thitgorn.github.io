"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","2618e8d274620f7ea4d708d505d2e7fc"],["/static/css/main.e4cd4bb3.css","28a5d2814f1d93943272332fa37e1fe9"],["/static/js/main.3b71d1fd.js","9e01d489b2995b2a651986304dd78f25"],["/static/media/MazeCreater.76f42bba.png","76f42bba75cb83ea0a3414bd75868d0a"],["/static/media/MazeRunner.4133e0e8.png","4133e0e865e08501edaa0dcf4bdeca42"],["/static/media/TillingBlock.7774641f.png","7774641f97258027ebe3012f2faaffda"],["/static/media/XO_AI.4c1ea4b3.png","4c1ea4b3fb5e2906da14b720ce8c2b78"],["/static/media/barcamp.930a9fcf.png","930a9fcfa404cba2f5ba03577dce6594"],["/static/media/chayen.fd9f7e02.png","fd9f7e02ede9fd211f3a02b18e2c966f"],["/static/media/facebook.54476bca.ico","54476bcaf40b1d1aa7c13854b73ae8a2"],["/static/media/github.3eb2edd1.png","3eb2edd1e1079c1c7891543f3f50ce06"],["/static/media/localhackday.1edac9ca.png","1edac9ca3714932f7303704e6f6cd38b"],["/static/media/mail.952e3f04.ico","952e3f04cbe2099a99f90735a9f29f97"],["/static/media/remec.27e547c9.png","27e547c9314b927a433d7b19be2f55e2"],["/static/media/spinner.44271f65.gif","44271f65031b0ccb25f23bfff0d23ef2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});