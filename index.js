// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__,c=r,f=function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},_=t()?c:f,p=function(e,t,r){_(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=Math.floor;function b(e,t,r){var o,n,a;return e<=0?NaN:(o=r<0?(1-e)*r:0,(n=e/2)===(a=d(n))?(t[o+a*r]+t[o+(a-1)*r])/2:t[o+a*r])}return p(b,"ndarray",(function(e,t,r,o){var n,a;return e<=0?NaN:(n=e/2)===(a=d(n))?(t[o+a*r]+t[o+(a-1)*r])/2:t[o+a*r]})),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dmediansorted=t();
//# sourceMappingURL=index.js.map
