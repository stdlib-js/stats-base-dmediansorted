"use strict";var i=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var v=i(function(g,o){
var q=require('@stdlib/math-base-special-floor/dist');function l(u,r,a){var n,t,e;return u<=0?NaN:(a<0?n=(1-u)*a:n=0,t=u/2,e=q(t),t===e?(r[n+e*a]+r[n+(e-1)*a])/2:r[n+e*a])}o.exports=l
});var f=i(function(h,s){
var p=require('@stdlib/math-base-special-floor/dist');function y(u,r,a,n){var t,e;return u<=0?NaN:(t=u/2,e=p(t),t===e?(r[n+e*a]+r[n+(e-1)*a])/2:r[n+e*a])}s.exports=y
});var m=i(function(j,d){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),O=f();N(c,"ndarray",O);d.exports=c
});var R=m();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
