(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),c=new A(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var i=k(c,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,c),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",v={};function g(){}function m(){}function y(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(q([])));L&&L!==n&&r.call(L,a)&&(w=L);var _=y.prototype=g.prototype=Object.create(w);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,c,i){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(p).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,i)}))}i(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function q(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:O}}function O(){return{value:e,done:!0}}return m.prototype=y,s(_,"constructor",y),s(y,"constructor",m),m.displayName=s(y,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,i,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(S.prototype),s(S.prototype,c,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var c=new S(u(e,n,r,o),a);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(_),s(_,i,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=q,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:q(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,o,a,c){try{var i=t[a](c),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var c=e.apply(n,r);function i(e){t(c,o,a,i,s,"next",e)}function s(e){t(c,o,a,i,s,"throw",e)}i(void 0)}))}}var r=n(757),o=n.n(r),a="https://restcountries.eu/rest/v2/all/";const c=function(){var t=e(o().mark((function t(e){var n,r,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e?"".concat(a.replace("all/",e)):a,t.prev=1,t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,t.abrupt("return",c);case 11:t.prev=11,t.t0=t.catch(1),console.error("Fetch Error: ",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();const i=function(){var t=e(o().mark((function t(e){var n,r,a,i,s,u,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.querySelector("#input-text"),r=n.value.length>=3?n.value:inputError(),t.prev=2,t.next=5,c("name/".concat(r));case 5:a=t.sent,i=a[0],s=i.alpha3Code,u=window.location.pathname?window.location.origin+window.location.pathname:window.location.origin,l="".concat(u,"#/").concat(s),window.location.assign(l),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.error("New error",t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}();const s=function(){var t=e(o().mark((function t(e){var n,r,a,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=document.querySelector("#input-select"),r=0!=n.value?n.value:console.error("Error"),a=window.location.pathname?window.location.origin+window.location.pathname:window.location.origin,c="".concat(a,"#/").concat(r),window.location.href=c;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();const u=function(){if(0===window.location.hash.length){var t=document.getElementById("input-text"),e=document.getElementById("input-select");t.addEventListener("change",i),e.addEventListener("change",s)}};const l=function(){return'\n        <div class="header__container">\n            <div class="header__logo">\n                <a class="toogle-text" href="#">\n                    Where in the world?\n                </a>\n            </div>\n\n            <div id="toogle" class="toogle-mode">\n                <p class="toogle-element toogle-text"><i class="far fa-moon"></i> Dark Mode</p>\n            </div>\n        </div>\n    '};const p=function(){return'\n        <div class="input-group">\n            <span class="toogle-text input-group__image"><i class="fas fa-search"></i></span>\n            <input class="toogle-element toogle-text" placeholder="Search for a country..." type="text" id="input-text">\n        </div>\n\n        <select class="toogle-element toogle-text select-toogle" id="input-select">\n            <option value="" select>Filter by Region</option>\n            <option value="africa">Africa</option>\n            <option value="americas">America</option>\n            <option value="asia">Asia</option>\n            <option value="europe">Europe</option>\n            <option value="oceania">Oceania</option>\n        </select>'};const f=function(t){var e=Array.from(document.querySelectorAll(".toogle-element")),n=Array.from(document.querySelectorAll(".toogle-text")),r=document.querySelector(".toogle-background");r.classList.contains("dark-background")?(e.map((function(t){t.classList.remove("dark-elements"),t.classList.remove("dark-text")})),n.map((function(t){t.classList.remove("dark-text")})),r.classList.remove("dark-background"),localStorage.length&&localStorage.clear()):(localStorage.setItem("background","dark-background"),localStorage.setItem("elements","dark-elements"),localStorage.setItem("text","dark-text"),e.map((function(t){t.classList.add("dark-elements"),t.classList.add("dark-text")})),n.map((function(t){t.classList.add("dark-text")})),r.classList.add("dark-background"))};const d=function(){return'\n        <a class="input-back toogle-element toogle-text" href="#"><i class="fas fa-long-arrow-alt-left"></i>Back</a>\n    '};const h=function(){return window.location.hash.slice(1).split("/")[1]||"/"};function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const m=function(t){if(t.length<=3)return"/"===t?t:"/:id";var e,n=v(["asia","europe","africa","americas","oceania"]);try{for(n.s();!(e=n.n()).done;){if(t==e.value)return"/:region"}}catch(t){n.e(t)}finally{n.f()}};const y=function(){var t=document.querySelector(".toogle-background"),e=Array.from(document.querySelectorAll(".toogle-element")),n=Array.from(document.querySelectorAll(".toogle-text")),r=localStorage.getItem("text"),o=localStorage.getItem("elements"),a=localStorage.getItem("background");localStorage.length&&(e.map((function(t){return t.classList.add(o)})),n.map((function(t){return t.classList.add(r)})),t.classList.add(a))};var w={"/":function(){var t=e(o().mark((function t(){var e,n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector("#inputs"),t.next=3,p();case 3:return e.innerHTML=t.sent,document.querySelector("#toogle").addEventListener("click",f),t.next=8,c();case 8:return n=t.sent,r='\n        <section class="content__countries animar">\n            '.concat(n.map((function(t){return'\n                <a href="#/'.concat(t.alpha3Code,'">\n                    <div class="toogle-element toogle-text countrie">\n                        <div class="countrie__image">\n                            <img src="').concat(t.flag,'" alt="').concat(t.name,'">\n                        </div>\n                        <div class="countrie__description">\n                            <h2 class="countrie__name">').concat(t.name,'</h2>\n                            <div class="countrie__info">\n                                <p>Population: <span>').concat(t.population.toLocaleString(),"</span></p>\n                                <p>Region: <span>").concat(t.region,"</span></p>\n                                <p>Capital: <span>").concat(t.capital,"</span></p>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </a>\n            ")})).join(""),"\n        </section>\n    "),t.abrupt("return",r);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/:id":function(){var t=e(o().mark((function t(){var e,n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=h(),t.next=3,c("alpha/".concat(e));case 3:return n=t.sent,r=document.querySelector("#inputs"),document.querySelector("#toogle").addEventListener("click",f),t.next=9,d();case 9:return r.innerHTML=t.sent,a='\n        <div class="animar countrie-spec__container">\n            <div class="countrie-spec__image">\n                <img src="'.concat(n.flag,'">\n            </div>\n\n            <div class="countrie-spec__container--two">\n\n                <div class="countrie-spec__details">\n                    <div class="countrie-spec__details--one toogle-text">\n                        <h2 class="toogle-text">').concat(n.name,'</h2>\n                        <p class="toogle-text">Native Name: <span>').concat(n.nativeName,'</span> </p>\n                        <p class="toogle-text">Population: <span>').concat(n.population.toLocaleString(),'</span> </p>\n                        <p class="toogle-text">Region: <span>').concat(n.region,'</span> </p>\n                        <p class="toogle-text">Sub Region: <span>').concat(n.subregion,'</span> </p>\n                        <p class="toogle-text">Capital: <span>').concat(n.capital,'</span> </p>\n                    </div>\n\n                    <div class="countrie-spec__details--two">\n                    <p class="toogle-text">Top Level Domain: ').concat(n.topLevelDomain.map((function(t){return"<span>".concat(t,"</span>")})).join(""),'</p>\n                    <p class="toogle-text">Currencies: <span>').concat(n.currencies[0].name,'</span> </p>\n                    <p class="toogle-text">Languages: ').concat(n.languages.map((function(t){return"<span>".concat(t.name,"</span>")})).join(", "),'</p>\n                    </div>\n                </div>\n\n                <div class="countrie-spec__borders">\n                    <h2 class="toogle-text">Border Countries:</h2>\n                    <div class="countrie-spec__item">\n                        ').concat(n.borders.map((function(t){return'<a href="#/'.concat(t,'" class="toogle-element toogle-text countrie-spec__borde">').concat(t,"</a>")})).join(""),"\n                    </div>\n                </div>\n            </div>\n        </div>\n    "),t.abrupt("return",a);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/:region":function(){var t=e(o().mark((function t(){var e,n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector("#inputs"),t.next=3,p();case 3:return e.innerHTML=t.sent,document.querySelector("#toogle").addEventListener("click",f),document.querySelector("#input-select").addEventListener("change",s),document.querySelector("#input-text").addEventListener("change",i),t.next=10,h();case 10:return n=t.sent,t.next=13,c("region/".concat(n));case 13:return r=t.sent,a='\n        <section class="content__countries animar">\n            '.concat(r.map((function(t){return'\n                <a href="#/'.concat(t.alpha3Code,'">\n                    <div class="toogle-element toogle-text countrie">\n                        <div class="countrie__image">\n                            <img src="').concat(t.flag,'" alt="').concat(t.name,'">\n                        </div>\n                        <div class="countrie__description">\n                            <h2 class="countrie__name">').concat(t.name,'</h2>\n                            <div class="countrie__info">\n                                <p>Population: <span>').concat(t.population.toLocaleString(),"</span></p>\n                                <p>Region: <span>").concat(t.region,"</span></p>\n                                <p>Capital: <span>").concat(t.capital,"</span></p>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </a>\n            ")})).join(""),"\n        </section>\n    "),t.abrupt("return",a);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()};const x=function(){var t=e(o().mark((function t(){var e,n,r,a,c;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector("#header"),n=document.querySelector("#main"),t.next=4,l();case 4:return e.innerHTML=t.sent,t.next=7,h();case 7:return r=t.sent,t.next=10,m(r);case 10:return a=t.sent,c=w[a]?w[a]:console.error("error"),t.next=14,c();case 14:n.innerHTML=t.sent,y();case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.addEventListener("load",x),window.addEventListener("hashchange",x),window.addEventListener("load",u),window.addEventListener("hashchange",u)})()})();
//# sourceMappingURL=bundle.js.map