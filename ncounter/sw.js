var serviceWorkerOption = {
  "assets": [
    "./oss-licenses.json",
    "./add1026fb07009c6879400cbcf145301.png",
    "./index.js",
    "./index.html"
  ]
};
        
        !function(e){var t={};function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=5)}([function(e,t,s){"use strict";try{self["workbox:core:5.0.0"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:5.0.0"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:5.0.0"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:expiration:5.0.0"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:cacheable-response:5.0.0"]&&_()}catch(e){}},function(e,t,s){"use strict";s.r(t);s(0);const n=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class i extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}s(1);const r=e=>e&&"object"==typeof e?e:{handle:e};class a{constructor(e,t,s="GET"){this.handler=r(t),this.match=e,this.method=s}}class o extends a{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const c=e=>{const t=new URL(String(e),location.href);return t.origin===location.origin?t.pathname:t.href};class h{constructor(){this._routes=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return void 0;let n,{params:i,route:r}=this.findMatchingRoute({url:s,request:e,event:t}),a=r&&r.handler;if(!a&&this._defaultHandler&&(a=this._defaultHandler),a){try{n=a.handle({url:s,request:e,event:t,params:i})}catch(e){n=Promise.reject(e)}return n instanceof Promise&&this._catchHandler&&(n=n.catch(n=>this._catchHandler.handle({url:s,request:e,event:t}))),n}}findMatchingRoute({url:e,request:t,event:s}){const n=this._routes.get(t.method)||[];for(const i of n){let n,r=i.match({url:e,request:t,event:s});if(r)return n=r,Array.isArray(r)&&0===r.length?n=void 0:r.constructor===Object&&0===Object.keys(r).length?n=void 0:"boolean"==typeof r&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this._defaultHandler=r(e)}setCatchHandler(e){this._catchHandler=r(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new i("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new i("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let u;const l=()=>(u||(u=new h,u.addFetchListener(),u.addCacheListener()),u);function p(e,t,s){let n;if("string"==typeof e){const i=new URL(e,location.href);0,n=new a(({url:e})=>e.href===i.href,t,s)}else if(e instanceof RegExp)n=new o(e,t,s);else if("function"==typeof e)n=new a(e,t,s);else{if(!(e instanceof a))throw new i("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return l().registerRoute(n),n}const d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},m=e=>[d.prefix,e,d.suffix].filter(e=>e&&e.length>0).join("-"),f=e=>e||m(d.runtime),g=new Set;const _=(e,t)=>e.filter(e=>t in e),w=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const r=await self.caches.open(e),a=await q({plugins:i,request:t,mode:"read"});let o=await r.match(a,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;o=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:o,request:a})}return o},y=async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,r=!1;for(let t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return r||(i=i&&200===i.status?i:void 0),i||null},q=async({request:e,mode:t,plugins:s=[]})=>{const n=_(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},v={put:async({cacheName:e,request:t,response:s,event:n,plugins:r=[],matchOptions:a})=>{const o=await q({plugins:r,request:t,mode:"write"});if(!s)throw new i("cache-put-with-no-response",{url:c(o.url)});let h=await y({event:n,plugins:r,response:s,request:o});if(!h)return void 0;const u=await self.caches.open(e),l=_(r,"cacheDidUpdate");let p=l.length>0?await w({cacheName:e,matchOptions:a,request:o}):null;try{await u.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(let t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:n,oldResponse:p,newResponse:h,request:o})},match:w},x=async({request:e,fetchOptions:t,event:s,plugins:n=[]})=>{if("string"==typeof e&&(e=new Request(e)),s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const r=_(n,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(let t of n)if("requestWillFetch"in t){const n=t.requestWillFetch,i=e.clone();e=await n.call(t,{request:i,event:s})}}catch(e){throw new i("plugin-error-request-will-fetch",{thrownError:e})}let o=e.clone();try{let i;i="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of n)"fetchDidSucceed"in e&&(i=await e.fetchDidSucceed.call(e,{event:s,request:o,response:i}));return i}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:s,originalRequest:a.clone(),request:o.clone()});throw e}};s(2);const b={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class N{constructor(e={}){if(this._cacheName=f(e.cacheName),this._plugins=e.plugins||[],e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[b,...e.plugins]}else this._plugins=[b];this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const s=this._getFromNetwork({request:t,event:e});let n,r=await v.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(r){if(e)try{e.waitUntil(s)}catch(n){0}}else{0;try{r=await s}catch(e){n=e}}if(!r)throw new i("no-response",{url:t.url,error:n});return r}async _getFromNetwork({request:e,event:t}){const s=await x({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=v.put({cacheName:this._cacheName,request:e,response:s.clone(),event:t,plugins:this._plugins});if(t)try{t.waitUntil(n)}catch(e){0}return s}}s(4);class O{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(t=>e.headers.get(t)===this._headers[t])),t}}function R(e){e.then(()=>{})}class E{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=s,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(a,o)=>{const c=a.objectStore(e),h=t?c.index(t):c,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(r?e:e.value),i&&u.length>=i?o(u):e.continue()):o(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const r=this._db.transaction(e,t);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async _call(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const r=s.objectStore(t),a=r[e].apply(r,n);a.onsuccess=()=>i(a.result)})}close(){this._db&&(this._db.close(),this._db=null)}}E.prototype.OPEN_TIMEOUT=2e3;const S={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(S))for(const s of t)s in IDBObjectStore.prototype&&(E.prototype[s]=async function(t,...n){return await this._call(s,t,e,...n)});s(3);const U=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class T{constructor(e){this._cacheName=e,this._db=new E("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this._cacheName)}async setTimestamp(e,t){const s={url:e=U(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put("cache-entries",s)}async getTimestamp(e){return(await this._db.get("cache-entries",this._getId(e))).timestamp}async expireEntries(e,t){const s=await this._db.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this._cacheName&&(e&&n.timestamp<e||t&&a>=t?r.push(s.value):a++),s.continue()}else n(r)}}),n=[];for(const e of s)await this._db.delete("cache-entries",e.id),n.push(e.url);return n}_getId(e){return this._cacheName+"|"+U(e)}}class k{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._cacheName=e,this._timestampModel=new T(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,R(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}var A;p(/^https:\/\/fonts\.googleapis\.com/,new N({cacheName:"google-fonts-stylesheets"})),p(/^https:\/\/fonts\.gstatic\.com/,new class{constructor(e={}){this._cacheName=f(e.cacheName),this._plugins=e.plugins||[],this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let s,n=await v.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins});if(n)0;else{0;try{n=await this._getFromNetwork(t,e)}catch(e){s=e}0}if(!n)throw new i("no-response",{url:t.url,error:s});return n}async _getFromNetwork(e,t){const s=await x({request:e,event:t,fetchOptions:this._fetchOptions,plugins:this._plugins}),n=s.clone(),i=v.put({cacheName:this._cacheName,request:e,response:n,event:t,plugins:this._plugins});if(t)try{t.waitUntil(i)}catch(e){0}return s}}({cacheName:"google-fonts-webfonts",plugins:[new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new O(e)}}({statuses:[0,200]}),new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;let i=this._isResponseDateFresh(n);const r=this._getCacheExpiration(s);R(r.expireEntries());const a=r.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){0}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),g.add(t))}_getCacheExpiration(e){if(e===f())throw new i("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new k(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}({maxAgeSeconds:31536e3,maxEntries:30})]})),p(/\.(?:js|css|png)$/,new N({cacheName:"static-resources"})),A=new class{constructor(e={}){if(this._cacheName=f(e.cacheName),e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this._plugins=t?e.plugins:[b,...e.plugins]}else this._plugins=[b];this._networkTimeoutSeconds=e.networkTimeoutSeconds||0,this._fetchOptions=e.fetchOptions,this._matchOptions=e.matchOptions}async handle({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let r;if(this._networkTimeoutSeconds){const{id:i,promise:a}=this._getTimeoutPromise({request:t,event:e,logs:s});r=i,n.push(a)}const a=this._getNetworkPromise({timeoutId:r,request:t,event:e,logs:s});n.push(a);let o=await Promise.race(n);if(o||(o=await a),!o)throw new i("no-response",{url:t.url});return o}_getTimeoutPromise({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this._respondFromCache({request:e,event:s}))},1e3*this._networkTimeoutSeconds)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,event:n}){let i,r;try{r=await x({request:t,event:n,fetchOptions:this._fetchOptions,plugins:this._plugins})}catch(e){i=e}if(e&&clearTimeout(e),i||!r)r=await this._respondFromCache({request:t,event:n});else{const e=r.clone(),s=v.put({cacheName:this._cacheName,request:t,response:e,event:n,plugins:this._plugins});if(n)try{n.waitUntil(s)}catch(e){}}return r}_respondFromCache({event:e,request:t}){return v.match({cacheName:this._cacheName,request:t,event:e,matchOptions:this._matchOptions,plugins:this._plugins})}},l().setDefaultHandler(A)}]);