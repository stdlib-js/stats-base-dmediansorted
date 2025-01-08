// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";function r(e,s,r,n){var d,i;return e<=0?NaN:(d=e/2)===(i=t(d))?(s[n+i*r]+s[n+(i-1)*r])/2:s[n+i*r]}function n(e,t,n){return r(e,t,n,s(e,n))}e(n,"ndarray",r);export{n as default,r as ndarray};
//# sourceMappingURL=index.mjs.map
