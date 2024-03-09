(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var r=t(601),o=t.n(r),a=t(314),c=t.n(a),i=t(417),s=t.n(i),u=new URL(t(622),t.b),d=c()(o()),l=s()(u);d.push([n.id,`:root {\n    --background-light: rgba(0, 0, 0, 0.6);\n    --font-color: #f1f5f9;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n    background-image: url(${l});\n    background-attachment: fixed;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    font-size: 1.6rem;\n}\n\nheader {\n    font-size: 2.4rem;\n    color: var(--font-color);\n}\n\nbutton, input {\n    padding: 0.5rem;\n    border: none;\n    border-radius: 8px;\n    outline: none;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.header {\n    padding: 2rem;\n    background-color: var(--background-light);\n}\n\n.page-title {\n    text-align: center;\n}\n\n.main {\n    padding: 2rem;\n    margin-top: 2rem;\n}\n\n.form {\n    padding: 1rem;\n    text-align: center;\n}\n\n.input {\n    margin-right: 0.5rem;\n    background-color: var(--background-light);\n    color: var(--font-color);\n    border: 2px solid transparent;\n}\n\n.btn {\n    background-color: var(--background-light);\n    color: var(--font-color);\n    transition: border 0.2s ease-in-out;\n    border: 2px solid transparent;\n}\n\n.btn:hover {\n    border: 2px solid var(--background-light);\n}\n\n.btn:active {\n    color: #999;\n}\n\n.search-results {\n    display: none;\n    max-width: 300px;\n    padding: 2rem;\n    border-radius: 8px;\n    margin: 4rem auto;\n    background-color: var(--background-light);\n    color: var(--font-color);\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.search-results.active {\n    display: block;\n}\n\n.search-results * {\n    padding: 0.5rem;\n    text-align: center;\n}\n\n.search-results h3 {\n    border-radius: 8px;\n    color: var(--font-color);\n    font-size: 3rem;\n}\n\n.search-results p {\n    font-size: 1.5rem;\n}\n\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n::-webkit-scrollbar-track {\n    background-color: #000;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: #222;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background-color: #444;\n}\n\n`,""]);const p=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},622:(n,e,t)=>{n.exports=t.p+"6a7b58bfbbd6792f627b.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=async function(n){const e=`https://api.openweathermap.org/data/2.5/weather?q=${n}&units=metric&appid=16a50d27801abc5eeadd8407d3badd1a`;try{const t=await fetch(e,{mode:"cors"});if(!t.ok)throw new Error(`City ${n} not found!`);return function(n){const{name:e,main:{temp:t,feels_like:r,humidity:o},wind:{speed:a}}=n;return{cityName:e,temperature:t,feelsLike:r,humidity:o,windSpeed:a}}(await t.json())}catch(n){return alert(n),null}},e=function(n){if(!n)return;document.querySelector("[data-search-results]").classList.add("active");const e=document.querySelector("[data-city-name]"),t=document.querySelector("[data-temperature]"),r=document.querySelector("[data-feels-like]"),o=document.querySelector("[data-humidity]"),a=document.querySelector("[data-wind]");e.textContent=`${n.cityName}`,t.textContent=`${n.temperature} °C`,r.textContent=`Feels like: ${n.feelsLike} °C`,o.textContent=`Humidity: ${n.humidity} %`,a.textContent=`Wind: ${n.windSpeed} km/h`};var r=t(72),o=t.n(r),a=t(825),c=t.n(a),i=t(659),s=t.n(i),u=t(56),d=t.n(u),l=t(540),p=t.n(l),f=t(113),m=t.n(f),h=t(208),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=p(),o()(h.A,b),h.A&&h.A.locals&&h.A.locals,t(622);const g=document.getElementById("searchForm"),v=document.getElementById("searchInput"),y=document.querySelector("[data-search-btn]");g.addEventListener("submit",(n=>{n.preventDefault()})),y.addEventListener("click",(async()=>{if(""===v.value)return;const t=await n(v.value);e(t)}))})()})();