if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const f=e=>s(e,n),r={module:{uri:n},exports:t,require:f};a[n]=Promise.all(c.map((e=>r[e]||f(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9jGydo8w8ZzqUDi7d5EXM/_buildManifest.js",revision:"09630f3817b36cdbbca5a9009437cfc0"},{url:"/_next/static/9jGydo8w8ZzqUDi7d5EXM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/629-7cd7c71381dfadab.js",revision:"7cd7c71381dfadab"},{url:"/_next/static/chunks/675-94783329a13d0d54.js",revision:"94783329a13d0d54"},{url:"/_next/static/chunks/78e521c3-8ccffc14f42564b4.js",revision:"8ccffc14f42564b4"},{url:"/_next/static/chunks/d0c16330-4c9a1bf275ef4f7a.js",revision:"4c9a1bf275ef4f7a"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-dd31b56dec2277fb.js",revision:"dd31b56dec2277fb"},{url:"/_next/static/chunks/pages/_app-d667547360d66e99.js",revision:"d667547360d66e99"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-4f3bb433e815d399.js",revision:"4f3bb433e815d399"},{url:"/_next/static/chunks/pages/legal/cookies-c060c11f7ae63c3d.js",revision:"c060c11f7ae63c3d"},{url:"/_next/static/chunks/pages/legal/privacy-22f673974a83dcda.js",revision:"22f673974a83dcda"},{url:"/_next/static/chunks/pages/legal/terms-7ed957b09f21d680.js",revision:"7ed957b09f21d680"},{url:"/_next/static/chunks/pages/protags-e74a3198fbe84fe3.js",revision:"e74a3198fbe84fe3"},{url:"/_next/static/chunks/pages/protags/youtube-3cb6cf49e375e2b9.js",revision:"3cb6cf49e375e2b9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-0b5d8249fb15f5f3.js",revision:"0b5d8249fb15f5f3"},{url:"/_next/static/css/17f0d613640b4042.css",revision:"17f0d613640b4042"},{url:"/_next/static/css/acec780b2f33cf9e.css",revision:"acec780b2f33cf9e"},{url:"/_next/static/media/2aaf0723e720e8b9.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/beams.e681cc47.jpg",revision:"f9e67d55d78618a3a6717e71dd0c86f7"},{url:"/_next/static/media/c0f5ec5bbf5913b7.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/youtube_preview.69393624.png",revision:"44718f290ba8c3676d0cef1c80dc63fd"},{url:"/fav/about.txt",revision:"cc6f9a17d666fe83bd622c5fac352352"},{url:"/fav/android-chrome-192x192.png",revision:"7344071715ac5a0edf942298bc7c9d15"},{url:"/fav/android-chrome-512x512.png",revision:"bd8bd9ae2f27d2e26fa396dd474129cc"},{url:"/fav/apple-touch-icon.png",revision:"8947b215cfb71bc6011cc380c5a509d2"},{url:"/fav/favicon-16x16.png",revision:"9217393a3759776ac6cd406e2bf333f8"},{url:"/fav/favicon-32x32.png",revision:"b38136f92da9cba30a67a722a58f5a3a"},{url:"/fav/favicon.ico",revision:"efb40962155b9b58512ac0f8238398d0"},{url:"/fav/maskable_icon_x512.png",revision:"1ec349f0a698380d592e3feee45e8044"},{url:"/fav/maskable_icon_x72.png",revision:"5beb932d144d16355f3431d048fd1fd6"},{url:"/img/beams.jpg",revision:"f9e67d55d78618a3a6717e71dd0c86f7"},{url:"/img/straight_beam.png",revision:"60461da55176a21cdd957841706f8a30"},{url:"/img/youtube_preview.png",revision:"44718f290ba8c3676d0cef1c80dc63fd"},{url:"/manifest.json",revision:"f91a93fd5b0e86ca269aa6f204870371"},{url:"/route/map.xml",revision:"26218f98aaba4a16eac7e5e1ad542751"},{url:"/route/robots.txt",revision:"d1db04065a03f3e0c6ade5c4d70d66f5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
