!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var a,s,c=0,h=[];c<e.length;c++)s=e[c],o[s]&&h.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(n&&n(e,r,i);h.length;)h.shift()()};var r={},o={1:0};e.e=function(t){function n(){a.onerror=a.onload=null,clearTimeout(s);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}if(0===o[t])return Promise.resolve();if(o[t])return o[t][2];var r=new Promise(function(e,n){o[t]=[e,n]});o[t][2]=r;var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,e.nc&&a.setAttribute("nonce",e.nc),a.src=e.p+""+({0:"demo"}[t]||t)+"/"+t+".js";var s=setTimeout(n,12e4);return a.onerror=a.onload=n,i.appendChild(a),r},e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw console.error(t),t},e(e.s=5)}([function(t,e){t.exports=[{name:"Bubbling"}]},function(t,e,n){"use strict";function r(t){t="string"==typeof t?document.querySelector(t):t;var e=i.a.map(function(t){var e=t.name;return'<a href="/'+e.toLowerCase()+'">'+e+"</a>"}).join("");t.innerHTML=e}e.a=r;var o=n(0),i=n.n(o)},function(t,e,n){"use strict";e.a=function(t){return t="string"==typeof t?document.querySelector(t):t,{bubbling:function(){n.e(0).then(n.bind(null,7)).then(function(e){return e(t)})}}}},function(t,e){},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();return function(){function r(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e(this,r),this._hash="",this.from={path:"",fullPath:location.href},this.to={path:"",fullPath:location.href},this.historyMod="pushState"in window.history&&o,this.history=[],this.historyAnchor=-1,this.beforeEachFuncs=[],this.afterEachFuncs=[],this.origin=location.protocol+"//"+location.host+location.pathname,this.routes=n,this.defaultPath="/",this.page404=function(){},this.path2Ele={},this.curActive=null,this.isControlling=!1,this.redirectDelay=null,this.routes.forEach(function(e){e.default&&(t.defaultPath=e.path),"*"===e.path&&(t.page404=e.handler)})}return n(r,[{key:"start",value:function(){var t=this;this.historyMod?window.addEventListener("popstate",function(e){var n=e.state&&e.state.path;n&&(t.pathName=n)}):window.addEventListener("hashchange",function(){t.pathName=location.hash.replace("#!","")}),this._firstPage()}},{key:"parse",value:function(t){var e=this;if("string"==typeof t&&(t=document.querySelectorAll(t)),t instanceof NodeList||t instanceof HTMLCollection||t instanceof Node)return Array.from(t,function(t){if("A"===t.tagName){var n=t.getAttribute("href"),r=n.split("?")[0];e.historyMod?t.addEventListener("click",function(t){t.preventDefault(),e._pushState({path:n},n,n)}):t.setAttribute("href","#!"+n),e.path2Ele[r]?(e.path2Ele[r]=[e.path2Ele[r]],e.path2Ele[r].push(t)):e.path2Ele[r]=t}}),this}},{key:"_firstPage",value:function(){this.historyMod||(""!==location.hash?this.pathName=location.hash.replace("#!",""):location.hash="!"+this.defaultPath)}},{key:"_pushState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";window.history.pushState(t,e,n),this.pathName=n}},{key:"_pathChange",value:function(e){var n=this;if(this.routes.length){var r=e.from,o=e.to,i=this.beforeEachFuncs.length-1,a=this.routes.length-1,s={from:r,to:o,params:{},query:{}},c=o.fullPath;c.indexOf("?")>=0&&c.split("?")[1].split("&").forEach(function(t){var e=t.split("="),n=e[0],r=e[1];try{s.query[n]=window.decodeURIComponent(r)}catch(t){s.query[n]=r}});for(var h=0;h<=a;h++){var u=function(t){var e=n.routes[t],a=!1;if(n.pathName===e.path)a=!0;else if(/:\w+/.test(e.path)){var c=e.path.match(/:(\w+)/g),h=e.path.replace(/(:\w+)/g,"([^/?]+)"),u=new RegExp(h).exec(n.pathName);if(u&&u.length){a=!0;for(var f=0;f<c.length;f++){var l=c[f].replace(":","");try{s.params[l]=window.decodeURIComponent(u[f+1])}catch(t){s.params[l]=u[f+1]}}}}if(!a)return"continue";if(n.beforeEachFuncs.length){var p=0,d=function t(){p<i?n.beforeEachFuncs[++p](r,o,t):e.handler(s)};n.beforeEachFuncs[0](r,o,d)}else e.handler(s);if(n.afterEachFuncs.length)for(var v=0;v<n.afterEachFuncs.length;v++)n.afterEachFuncs[v](r,o);return n.redirectDelay&&clearTimeout(n.redirectDelay),e.redirect&&(n.redirectDelay=setTimeout(function(){n._updatePath(e.redirect),n.redirectDelay=null},200)),{v:void 0}}(h);switch(u){case"continue":continue;default:if("object"===(void 0===u?"undefined":t(u)))return u.v}}if(this.beforeEachFuncs.length){var f=0,l=function t(){f<i?n.beforeEachFuncs[++f](r,o,t,"404"):n.page404(s)};this.beforeEachFuncs[0](r,o,l,"404")}else this.page404(s)}}},{key:"_updatePath",value:function(t){this.historyMod?this._pushState({path:t},t,t):window.location.hash="!"+t}},{key:"beforeEach",value:function(t){return this.beforeEachFuncs.push(t),this}},{key:"afterEach",value:function(t){return this.afterEachFuncs.push(t),this}},{key:"back",value:function(){this.go(-1)}},{key:"forward",value:function(){this.go(1)}},{key:"go",value:function(t){if(this.isControlling=!0,!((t=~~t)<0&&0===this.historyAnchor||t>0&&this.historyAnchor===this.history.length-1)){var e=this.historyAnchor+t;t>0&&(e=e>this.history.length-1?this.history.length-1:e),t<0&&(e=e<0?0:e),this.historyAnchor=e;var n=this.history[e];this._updatePath(n)}}},{key:"push",value:function(t){this._updatePath(t)}},{key:"pathName",get:function(){return this._hash},set:function(t){this.from.path=this.pathName.split("?")[0],this.from.fullPath=this.origin+"#!"+this.pathName,this._hash=t,this.to.path=this.pathName.split("?")[0],this.to.fullPath=this.origin+"#!"+this.pathName,this.isControlling?this.isControlling=!1:(this.history.push(this.pathName),this.historyAnchor=this.history.length-1),this._pathChange({from:this.from,to:this.to}),this.curActive&&(Array.isArray(this.path2Ele[this.curActive])?this.path2Ele[this.curActive].forEach(function(t){t.classList.remove("active")}):this.path2Ele[this.curActive].classList.remove("active")),Array.isArray(this.path2Ele[this.to.path])?this.path2Ele[this.to.path].forEach(function(t){t.classList.add("active")}):this.path2Ele[this.to.path].classList.add("active"),this.curActive=this.to.path}}]),r}()})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=(n.n(r),n(1)),i=n(0),a=n.n(i),s=n(4),c=n.n(s),h=n(2),u=document.querySelector("nav.links");n.i(o.a)(u);var f=document.querySelector("label.switch"),l=document.querySelector("#switch");console.log(f,l),l.addEventListener("change",function(){this.checked&&f.classList.remove("hidden"),!this.checked&&f.classList.add("hidden"),console.log(this.checked)});var p=n.i(h.a)(".container"),d=a.a.map(function(t){return{path:"/"+t.name.toLowerCase(),handler:p[t.name.toLowerCase()]}}),v=new c.a(d).parse(u.querySelectorAll("a"));v.afterEach(function(){l.checked=!1,f.classList.add("hidden")}),v.start()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},,function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],e));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],h=i[3],u={css:s,media:c,sourceMap:h};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function i(t,e){var n=y(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",h(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",h(e,t.attrs),i(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var h=g++;n=m||(m=s(e)),r=f.bind(null,n,h,!1),o=f.bind(null,n,h,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=p.bind(null,n,e),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=l.bind(null,n),o=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=E(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function l(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var d={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),y=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),m=null,g=0,b=[],w=n(6);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},void 0===e.singleton&&(e.singleton=v()),void 0===e.insertInto&&(e.insertInto="head"),void 0===e.insertAt&&(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(t){r(o(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var h=0;h<c.parts.length;h++)c.parts[h]();delete d[c.id]}}}};var E=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}]);