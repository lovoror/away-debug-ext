parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zIYI":[function(require,module,exports) {
"use strict";function e(){window.__AWAY__PAGE__API=!0;let e=void 0;function n(e){e.from="_AWAY_API_event",window.postMessage(e,"*")}window.addEventListener("message",function({data:n}){"_AWAY_PAGE_event"===n.from&&e&&e.postMessage(n)}),window.addEventListener("beforeunload",()=>{e&&(console.debug("Page reloaded"),e.postMessage({type:"unload"}))}),chrome.runtime.onConnect.addListener(function(o){e=o,o.onMessage.addListener(n),o.onDisconnect.addListener(()=>{console.log("DEVTOOL DISCONNECTED"),o.onMessage.removeListener(n)})});const o=document.createElement("script");o.src=chrome.extension.getURL("js/page-api.js"),(document.head||document.documentElement).appendChild(o),o.onload=function(){}}Object.defineProperty(exports,"__esModule",{value:!0}),window.__AWAY__PAGE__API||(console.log("Init content script"),e());
},{}]},{},["zIYI"], null)
//# sourceMappingURL=/js/content.js.map