"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(h,d){
var p=require('@stdlib/math-base-special-floor/dist');function y(e,r,a,i){var n,t;return e<=0?NaN:(n=e/2,t=p(n),n===t?(r[i+t*a]+r[i+(t-1)*a])/2:r[i+t*a])}d.exports=y
});var v=u(function(j,o){
var f=require('@stdlib/strided-base-stride2offset/dist'),l=s();function x(e,r,a){return l(e,r,a,f(e,a))}o.exports=x
});var m=u(function(k,c){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=s();O(q,"ndarray",R);c.exports=q
});var b=m();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
