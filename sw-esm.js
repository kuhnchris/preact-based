!function(e){function t(n){if(s[n])return s[n].exports;var r=s[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var s={};t.m=e,t.c=s,t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)t.d(n,r,function(t){return e[t]}.bind(null,r));return n},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="9/Ks")}({"2Gk3":function(){"use strict";try{self["workbox:cacheable-response:6.4.1"]&&_()}catch(e){}},"9/Ks":function(e,t,s){"use strict";function n(e,t,s){let n;if("string"==typeof e){const r=new URL(e,location.href);0;n=new m((({url:e})=>e.href===r.href),t,s)}else if(e instanceof RegExp)n=new _(e,t,s);else if("function"==typeof e)n=new m(e,t,s);else{if(!(e instanceof m))throw new g("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return C().registerRoute(n),n}function r(e,t){const s=t();return e.waitUntil(s),s}function a(e){if(!e)throw new g("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new g("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(s,location.href),r=new URL(s,location.href);return n.searchParams.set("__WB_REVISION__",t),{cacheKey:n.href,url:r.href}}async function i(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new g("cross-origin-copy-response",{origin:s});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},a=t?t(r):r,i=function(){if(void 0===N){const e=new Response("");if("body"in e)try{new Response(e.body),N=!0}catch(e){N=!1}N=!1}return N}()?n.body:await n.blob();return new Response(i,a)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},c.apply(this,arguments)}function o(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}function h(e){return new Promise((t=>setTimeout(t,e)))}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},l.apply(this,arguments)}function u(e){return"string"==typeof e?new Request(e):e}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},f.apply(this,arguments)}function d(e){return F().getCacheKeyForURL(e)}function p(e,t){!function(e){F().precache(e)}(e),function(e){const t=F();n(new H(t,e))}(t)}s.r(t);s("xgXd");const y=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class g extends Error{constructor(e,t){super(y(e,t)),this.name=e,this.details=t}}s("I3Xu");const w=e=>e&&"object"==typeof e?e:{handle:e};class m{constructor(e,t,s="GET"){this.handler=w(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=w(e)}}class _ extends m{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}const v=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"");class R{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;const n=s.origin===location.origin,{params:r,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=a&&a.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return void 0;let o;try{o=i.handle({url:s,request:e,event:t,params:r})}catch(e){o=Promise.reject(e)}const h=a&&a.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async n=>{if(h){0;try{return await h.handle({url:s,request:e,event:t,params:r})}catch(e){e instanceof Error&&(n=e)}}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const r=this._routes.get(s.method)||[];for(const a of r){let r;const i=a.match({url:e,sameOrigin:t,request:s,event:n});if(i)return r=i,(Array.isArray(r)&&0===r.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(r=void 0),{route:a,params:r}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,w(e))}setCatchHandler(e){this._catchHandler=w(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new g("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new g("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let b;const C=()=>(b||(b=new R,b.addFetchListener(),b.addCacheListener()),b),U={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},q=e=>[U.prefix,e,U.suffix].filter((e=>e&&e.length>0)).join("-"),k=e=>e||q(U.googleAnalytics),L=e=>e||q(U.precache),T=()=>U.prefix,P=e=>e||q(U.runtime),x=()=>U.suffix;s("Gpc1");class K{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class O{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let N;class M{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const E=new Set;s("myed");class S{constructor(e,t){this._cacheKeys={},l(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new M,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=u(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new g("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=u(e);let s;const{cacheName:n,matchOptions:r}=this._strategy,a=await this.getCacheKey(t,"read"),i=l(l({},r),{cacheName:n});s=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:r,cachedResponse:s,request:a,event:this.event})||void 0;return s}async cachePut(e,t){const s=u(e);await h(0);const n=await this.getCacheKey(s,"write");if(!t)throw new g("cache-put-with-no-response",{url:v(n.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:a,matchOptions:i}=this._strategy,l=await self.caches.open(a),f=this.hasCallback("cacheDidUpdate"),d=f?await async function(e,t,s,n){const r=o(t.url,s);if(t.url===r)return e.match(t,n);const a=c(c({},n),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(r===o(t.url,s))return e.match(t,n)}(l,n.clone(),["__WB_REVISION__"],i):null;try{await l.put(n,f?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of E)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:a,oldResponse:d,newResponse:r.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=u(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const r=l(l({},n),{state:s});return t[e](r)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class W{constructor(e={}){this.cacheName=P(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n=new S(this,{event:t,request:s,params:"params"in e?e.params:void 0}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let n;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(n=await this._handle(t,e),!n||"error"===n.type)throw new g("no-response",{url:t.url})}catch(r){if(r instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(n=await a({error:r,event:s,request:t}),n)break;if(!n)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))n=await r({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let r,a;try{r=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:a}),t.destroy(),a)throw a}}class I extends W{constructor(e={}){e.cacheName=L(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(I.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(!this._fallbackToNetwork)throw new g("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const r=n.integrity,a=e.integrity,i=!a||a===r;if(s=await t.fetch(new Request(e,{integrity:a||r})),r&&i){this._useDefaultCacheabilityPluginIfNeeded();await t.cachePut(e,s.clone());0}}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new g("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==I.copyRedirectedCacheableResponsesPlugin&&(n===I.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(I.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}I.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},I.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await i(e):e};class j{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new I({cacheName:L(e),plugins:[...t,new O({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:n}=a(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new g("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new g("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return r(e,(async()=>{const t=new K;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:a,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return r(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const r of t)s.has(r.url)||(await e.delete(r),n.push(r.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new g("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=f({cacheKey:t},s.params),this.strategy.handle(s))}}let A;const F=()=>(A||(A=new j),A);class H extends m{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:r}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(r){const e=r({url:a});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(r);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}const D=e=>"navigate"===e.request.mode;const B={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};const G={get googleAnalytics(){return k()},get precache(){return L()},get prefix(){return T()},get runtime(){return P()},get suffix(){return x()}};s("2Gk3");class ${constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}const X={},V=new class extends W{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(B),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[];const n=[];let r;if(this._networkTimeoutSeconds){const{id:a,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});r=a,n.push(i)}const a=this._getNetworkPromise({timeoutId:r,request:e,logs:s,handler:t});n.push(a);const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(n))||await a)());if(!i)throw new g("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,handler:t}){let s;return{promise:new Promise((n=>{s=setTimeout((async()=>{n(await t.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:s}}async _getNetworkPromise({timeoutId:e,request:t,handler:s}){let n,r;try{r=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}return e&&clearTimeout(e),!n&&r||(r=await s.cacheMatch(t)),r}}({cacheName:G.precache,networkTimeoutSeconds:5,plugins:[new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new $(e)}}({statuses:[200]})]});var J,Q;n((({event:e})=>D(e)),V),J=({event:e})=>D(e)?caches.match(d("/200.html")||d("/index.html")):Response.error(),C().setCatchHandler(J),p([{'revision':'25d4d7fcba5bce91407c64ea490300bf','url':'/200.html'},{'revision':'59e221032ab061cad83b6ce2bcddbde8','url':'/assets/icons/android-chrome-192x192.png'},{'revision':'cf3fdf7af60a294d6d3f48cb7ad82488','url':'/assets/icons/android-chrome-512x512.png'},{'revision':'a0e46feb3cc577478b127936e739dd08','url':'/assets/icons/apple-touch-icon.png'},{'revision':'d712b605ed58419c7e6d4ab885d147b7','url':'/assets/icons/favicon-16x16.png'},{'revision':'2f7ce797cf8f198dedb9a9f38b7ef13b','url':'/assets/icons/favicon-32x32.png'},{'revision':'ba817517b2c4e1ba1ce802c4d4fafdb4','url':'/assets/icons/mstile-150x150.png'},{'revision':null,'url':'/bundle.ee26a.css'},{'revision':null,'url':'/bundle.fab5c.esm.js'},{'revision':null,'url':'/polyfills.f9b90.esm.js'},{'revision':null,'url':'/route-home.chunk.f41a0.esm.js'}],Q||X)},Gpc1:function(){"use strict";try{self["workbox:precaching:6.4.1"]&&_()}catch(e){}},I3Xu:function(){"use strict";try{self["workbox:routing:6.4.1"]&&_()}catch(e){}},myed:function(){"use strict";try{self["workbox:strategies:6.4.1"]&&_()}catch(e){}},xgXd:function(){"use strict";try{self["workbox:core:6.4.1"]&&_()}catch(e){}}});
//# sourceMappingURL=sw-esm.js.map