const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EmojiPicker-WZ8rM8R5.js","assets/EmojiPicker-CnMA3mcn.css"])))=>i.map(i=>d[i]);
var he=Object.defineProperty;var pe=(t,e,n)=>e in t?he(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var P1=(t,e,n)=>pe(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Jt(t,e){const n=new Set(t.split(","));return c=>n.has(c)}const Q={},_0=[],w1=()=>{},ge=()=>!1,pt=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qt=t=>t.startsWith("onUpdate:"),a1=Object.assign,t2=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ce=Object.prototype.hasOwnProperty,D=(t,e)=>Ce.call(t,e),O=Array.isArray,M0=t=>D0(t)==="[object Map]",S0=t=>D0(t)==="[object Set]",w2=t=>D0(t)==="[object Date]",R=t=>typeof t=="function",r1=t=>typeof t=="string",V1=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",o3=t=>(J(t)||R(t))&&R(t.then)&&R(t.catch),l3=Object.prototype.toString,D0=t=>l3.call(t),me=t=>D0(t).slice(8,-1),a3=t=>D0(t)==="[object Object]",e2=t=>r1(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,O0=Jt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gt=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fe=/-(\w)/g,u0=gt(t=>t.replace(Fe,(e,n)=>n?n.toUpperCase():"")),ve=/\B([A-Z])/g,p0=gt(t=>t.replace(ve,"-$1").toLowerCase()),f3=gt(t=>t.charAt(0).toUpperCase()+t.slice(1)),bt=gt(t=>t?`on${f3(t)}`:""),n0=(t,e)=>!Object.is(t,e),ct=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},u3=(t,e,n,c=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:c,value:n})},ft=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let b2;const d3=()=>b2||(b2=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function n2(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const c=t[n],r=r1(c)?we(c):n2(c);if(r)for(const s in r)e[s]=r[s]}return e}else if(r1(t)||J(t))return t}const _e=/;(?![^(]*\))/g,Me=/:([^]+)/,ye=/\/\*[^]*?\*\//g;function we(t){const e={};return t.replace(ye,"").split(_e).forEach(n=>{if(n){const c=n.split(Me);c.length>1&&(e[c[0].trim()]=c[1].trim())}}),e}function c2(t){let e="";if(r1(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const c=c2(t[n]);c&&(e+=c+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const be="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xe=Jt(be);function h3(t){return!!t||t===""}function ze(t,e){if(t.length!==e.length)return!1;let n=!0;for(let c=0;n&&c<t.length;c++)n=B0(t[c],e[c]);return n}function B0(t,e){if(t===e)return!0;let n=w2(t),c=w2(e);if(n||c)return n&&c?t.getTime()===e.getTime():!1;if(n=V1(t),c=V1(e),n||c)return t===e;if(n=O(t),c=O(e),n||c)return n&&c?ze(t,e):!1;if(n=J(t),c=J(e),n||c){if(!n||!c)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const i in t){const o=t.hasOwnProperty(i),a=e.hasOwnProperty(i);if(o&&!a||!o&&a||!B0(t[i],e[i]))return!1}}return String(t)===String(e)}function r2(t,e){return t.findIndex(n=>B0(n,e))}const p3=t=>!!(t&&t.__v_isRef===!0),$0=t=>r1(t)?t:t==null?"":O(t)||J(t)&&(t.toString===l3||!R(t.toString))?p3(t)?$0(t.value):JSON.stringify(t,g3,2):String(t),g3=(t,e)=>p3(e)?g3(t,e.value):M0(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[c,r],s)=>(n[xt(c,s)+" =>"]=r,n),{})}:S0(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xt(n))}:V1(e)?xt(e):J(e)&&!O(e)&&!a3(e)?String(e):e,xt=(t,e="")=>{var n;return V1(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let z1;class Se{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=z1,!e&&z1&&(this.index=(z1.scopes||(z1.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=z1;try{return z1=this,e()}finally{z1=n}}}on(){z1=this}off(){z1=this.parent}stop(e){if(this._active){let n,c;for(n=0,c=this.effects.length;n<c;n++)this.effects[n].stop();for(n=0,c=this.cleanups.length;n<c;n++)this.cleanups[n]();if(this.scopes)for(n=0,c=this.scopes.length;n<c;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ee(t,e=z1){e&&e.active&&e.effects.push(t)}function Ae(){return z1}let a0;class s2{constructor(e,n,c,r){this.fn=e,this.trigger=n,this.scheduler=c,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ee(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,c0();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(ke(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),r0()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=t0,n=a0;try{return t0=!0,a0=this,this._runnings++,x2(this),this.fn()}finally{z2(this),this._runnings--,a0=n,t0=e}}stop(){this.active&&(x2(this),z2(this),this.onStop&&this.onStop(),this.active=!1)}}function ke(t){return t.value}function x2(t){t._trackId++,t._depsLength=0}function z2(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)C3(t.deps[e],t);t.deps.length=t._depsLength}}function C3(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let t0=!0,Nt=0;const m3=[];function c0(){m3.push(t0),t0=!1}function r0(){const t=m3.pop();t0=t===void 0?!0:t}function i2(){Nt++}function o2(){for(Nt--;!Nt&&Ut.length;)Ut.shift()()}function F3(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const c=t.deps[t._depsLength];c!==e?(c&&C3(c,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ut=[];function v3(t,e,n){i2();for(const c of t.keys()){let r;c._dirtyLevel<e&&(r??(r=t.get(c)===c._trackId))&&(c._shouldSchedule||(c._shouldSchedule=c._dirtyLevel===0),c._dirtyLevel=e),c._shouldSchedule&&(r??(r=t.get(c)===c._trackId))&&(c.trigger(),(!c._runnings||c.allowRecurse)&&c._dirtyLevel!==2&&(c._shouldSchedule=!1,c.scheduler&&Ut.push(c.scheduler)))}o2()}const _3=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},jt=new WeakMap,f0=Symbol(""),Dt=Symbol("");function F1(t,e,n){if(t0&&a0){let c=jt.get(t);c||jt.set(t,c=new Map);let r=c.get(n);r||c.set(n,r=_3(()=>c.delete(n))),F3(a0,r)}}function D1(t,e,n,c,r,s){const i=jt.get(t);if(!i)return;let o=[];if(e==="clear")o=[...i.values()];else if(n==="length"&&O(t)){const a=Number(c);i.forEach((u,d)=>{(d==="length"||!V1(d)&&d>=a)&&o.push(u)})}else switch(n!==void 0&&o.push(i.get(n)),e){case"add":O(t)?e2(n)&&o.push(i.get("length")):(o.push(i.get(f0)),M0(t)&&o.push(i.get(Dt)));break;case"delete":O(t)||(o.push(i.get(f0)),M0(t)&&o.push(i.get(Dt)));break;case"set":M0(t)&&o.push(i.get(f0));break}i2();for(const a of o)a&&v3(a,4);o2()}const Oe=Jt("__proto__,__v_isRef,__isVue"),M3=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(V1)),S2=Te();function Te(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const c=K(this);for(let s=0,i=this.length;s<i;s++)F1(c,"get",s+"");const r=c[e](...n);return r===-1||r===!1?c[e](...n.map(K)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){c0(),i2();const c=K(this)[e].apply(this,n);return o2(),r0(),c}}),t}function Pe(t){V1(t)||(t=String(t));const e=K(this);return F1(e,"has",t),e.hasOwnProperty(t)}class y3{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,c){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return c===(r?s?Ge:z3:s?x3:b3).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(c)?e:void 0;const i=O(e);if(!r){if(i&&D(S2,n))return Reflect.get(S2,n,c);if(n==="hasOwnProperty")return Pe}const o=Reflect.get(e,n,c);return(V1(n)?M3.has(n):Oe(n))||(r||F1(e,"get",n),s)?o:v1(o)?i&&e2(n)?o:o.value:J(o)?r?S3(o):f2(o):o}}class w3 extends y3{constructor(e=!1){super(!1,e)}set(e,n,c,r){let s=e[n];if(!this._isShallow){const a=d0(s);if(!b0(c)&&!d0(c)&&(s=K(s),c=K(c)),!O(e)&&v1(s)&&!v1(c))return a?!1:(s.value=c,!0)}const i=O(e)&&e2(n)?Number(n)<e.length:D(e,n),o=Reflect.set(e,n,c,r);return e===K(r)&&(i?n0(c,s)&&D1(e,"set",n,c):D1(e,"add",n,c)),o}deleteProperty(e,n){const c=D(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&c&&D1(e,"delete",n,void 0),r}has(e,n){const c=Reflect.has(e,n);return(!V1(n)||!M3.has(n))&&F1(e,"has",n),c}ownKeys(e){return F1(e,"iterate",O(e)?"length":f0),Reflect.ownKeys(e)}}class Le extends y3{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $e=new w3,Re=new Le,Ie=new w3(!0);const l2=t=>t,Ct=t=>Reflect.getPrototypeOf(t);function Y0(t,e,n=!1,c=!1){t=t.__v_raw;const r=K(t),s=K(e);n||(n0(e,s)&&F1(r,"get",e),F1(r,"get",s));const{has:i}=Ct(r),o=c?l2:n?d2:R0;if(i.call(r,e))return o(t.get(e));if(i.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function X0(t,e=!1){const n=this.__v_raw,c=K(n),r=K(t);return e||(n0(t,r)&&F1(c,"has",t),F1(c,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function q0(t,e=!1){return t=t.__v_raw,!e&&F1(K(t),"iterate",f0),Reflect.get(t,"size",t)}function E2(t,e=!1){!e&&!b0(t)&&!d0(t)&&(t=K(t));const n=K(this);return Ct(n).has.call(n,t)||(n.add(t),D1(n,"add",t,t)),this}function A2(t,e,n=!1){!n&&!b0(e)&&!d0(e)&&(e=K(e));const c=K(this),{has:r,get:s}=Ct(c);let i=r.call(c,t);i||(t=K(t),i=r.call(c,t));const o=s.call(c,t);return c.set(t,e),i?n0(e,o)&&D1(c,"set",t,e):D1(c,"add",t,e),this}function k2(t){const e=K(this),{has:n,get:c}=Ct(e);let r=n.call(e,t);r||(t=K(t),r=n.call(e,t)),c&&c.call(e,t);const s=e.delete(t);return r&&D1(e,"delete",t,void 0),s}function O2(){const t=K(this),e=t.size!==0,n=t.clear();return e&&D1(t,"clear",void 0,void 0),n}function Z0(t,e){return function(c,r){const s=this,i=s.__v_raw,o=K(i),a=e?l2:t?d2:R0;return!t&&F1(o,"iterate",f0),i.forEach((u,d)=>c.call(r,a(u),a(d),s))}}function J0(t,e,n){return function(...c){const r=this.__v_raw,s=K(r),i=M0(s),o=t==="entries"||t===Symbol.iterator&&i,a=t==="keys"&&i,u=r[t](...c),d=n?l2:e?d2:R0;return!e&&F1(s,"iterate",a?Dt:f0),{next(){const{value:F,done:v}=u.next();return v?{value:F,done:v}:{value:o?[d(F[0]),d(F[1])]:d(F),done:v}},[Symbol.iterator](){return this}}}}function X1(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ve(){const t={get(s){return Y0(this,s)},get size(){return q0(this)},has:X0,add:E2,set:A2,delete:k2,clear:O2,forEach:Z0(!1,!1)},e={get(s){return Y0(this,s,!1,!0)},get size(){return q0(this)},has:X0,add(s){return E2.call(this,s,!0)},set(s,i){return A2.call(this,s,i,!0)},delete:k2,clear:O2,forEach:Z0(!1,!0)},n={get(s){return Y0(this,s,!0)},get size(){return q0(this,!0)},has(s){return X0.call(this,s,!0)},add:X1("add"),set:X1("set"),delete:X1("delete"),clear:X1("clear"),forEach:Z0(!0,!1)},c={get(s){return Y0(this,s,!0,!0)},get size(){return q0(this,!0)},has(s){return X0.call(this,s,!0)},add:X1("add"),set:X1("set"),delete:X1("delete"),clear:X1("clear"),forEach:Z0(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=J0(s,!1,!1),n[s]=J0(s,!0,!1),e[s]=J0(s,!1,!0),c[s]=J0(s,!0,!0)}),[t,n,e,c]}const[Ne,Ue,je,De]=Ve();function a2(t,e){const n=e?t?De:je:t?Ue:Ne;return(c,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?c:Reflect.get(D(n,r)&&r in c?n:c,r,s)}const Be={get:a2(!1,!1)},He={get:a2(!1,!0)},Ke={get:a2(!0,!1)};const b3=new WeakMap,x3=new WeakMap,z3=new WeakMap,Ge=new WeakMap;function We(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ye(t){return t.__v_skip||!Object.isExtensible(t)?0:We(me(t))}function f2(t){return d0(t)?t:u2(t,!1,$e,Be,b3)}function Xe(t){return u2(t,!1,Ie,He,x3)}function S3(t){return u2(t,!0,Re,Ke,z3)}function u2(t,e,n,c,r){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const i=Ye(t);if(i===0)return t;const o=new Proxy(t,i===2?c:n);return r.set(t,o),o}function T0(t){return d0(t)?T0(t.__v_raw):!!(t&&t.__v_isReactive)}function d0(t){return!!(t&&t.__v_isReadonly)}function b0(t){return!!(t&&t.__v_isShallow)}function E3(t){return t?!!t.__v_raw:!1}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function qe(t){return Object.isExtensible(t)&&u3(t,"__v_skip",!0),t}const R0=t=>J(t)?f2(t):t,d2=t=>J(t)?S3(t):t;class A3{constructor(e,n,c,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new s2(()=>e(this._value),()=>rt(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=c}get value(){const e=K(this);return(!e._cacheable||e.effect.dirty)&&n0(e._value,e._value=e.effect.run())&&rt(e,4),k3(e),e.effect._dirtyLevel>=2&&rt(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ze(t,e,n=!1){let c,r;const s=R(t);return s?(c=t,r=w1):(c=t.get,r=t.set),new A3(c,r,s||!r,n)}function k3(t){var e;t0&&a0&&(t=K(t),F3(a0,(e=t.dep)!=null?e:t.dep=_3(()=>t.dep=void 0,t instanceof A3?t:void 0)))}function rt(t,e=4,n,c){t=K(t);const r=t.dep;r&&v3(r,e)}function v1(t){return!!(t&&t.__v_isRef===!0)}function B1(t){return Je(t,!1)}function Je(t,e){return v1(t)?t:new Qe(t,e)}class Qe{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:R0(e)}get value(){return k3(this),this._value}set value(e){const n=this.__v_isShallow||b0(e)||d0(e);e=n?e:K(e),n0(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:R0(e),rt(this,4))}}function F0(t){return v1(t)?t.value:t}const t4={get:(t,e,n)=>F0(Reflect.get(t,e,n)),set:(t,e,n,c)=>{const r=t[e];return v1(r)&&!v1(n)?(r.value=n,!0):Reflect.set(t,e,n,c)}};function O3(t){return T0(t)?t:new Proxy(t,t4)}/**
* @vue/runtime-core v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function e0(t,e,n,c){try{return c?t(...c):t()}catch(r){H0(r,e,n)}}function E1(t,e,n,c){if(R(t)){const r=e0(t,e,n,c);return r&&o3(r)&&r.catch(s=>{H0(s,e,n)}),r}if(O(t)){const r=[];for(let s=0;s<t.length;s++)r.push(E1(t[s],e,n,c));return r}}function H0(t,e,n,c=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const i=e.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,i,o)===!1)return}s=s.parent}const a=e.appContext.config.errorHandler;if(a){c0(),e0(a,null,10,[t,i,o]),r0();return}}e4(t,n,r,c)}function e4(t,e,n,c=!0){console.error(t)}let I0=!1,Bt=!1;const o1=[];let I1=0;const y0=[];let q1=null,l0=0;const T3=Promise.resolve();let h2=null;function P3(t){const e=h2||T3;return t?e.then(this?t.bind(this):t):e}function n4(t){let e=I1+1,n=o1.length;for(;e<n;){const c=e+n>>>1,r=o1[c],s=V0(r);s<t||s===t&&r.pre?e=c+1:n=c}return e}function mt(t){(!o1.length||!o1.includes(t,I0&&t.allowRecurse?I1+1:I1))&&(t.id==null?o1.push(t):o1.splice(n4(t.id),0,t),L3())}function L3(){!I0&&!Bt&&(Bt=!0,h2=T3.then(R3))}function c4(t){const e=o1.indexOf(t);e>I1&&o1.splice(e,1)}function r4(t){O(t)?y0.push(...t):(!q1||!q1.includes(t,t.allowRecurse?l0+1:l0))&&y0.push(t),L3()}function T2(t,e,n=I0?I1+1:0){for(;n<o1.length;n++){const c=o1[n];if(c&&c.pre){if(t&&c.id!==t.uid)continue;o1.splice(n,1),n--,c()}}}function $3(t){if(y0.length){const e=[...new Set(y0)].sort((n,c)=>V0(n)-V0(c));if(y0.length=0,q1){q1.push(...e);return}for(q1=e,l0=0;l0<q1.length;l0++){const n=q1[l0];n.active!==!1&&n()}q1=null,l0=0}}const V0=t=>t.id==null?1/0:t.id,s4=(t,e)=>{const n=V0(t)-V0(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function R3(t){Bt=!1,I0=!0,o1.sort(s4);try{for(I1=0;I1<o1.length;I1++){const e=o1[I1];e&&e.active!==!1&&e0(e,e.i,e.i?15:14)}}finally{I1=0,o1.length=0,$3(),I0=!1,h2=null,(o1.length||y0.length)&&R3()}}let b1=null,Ft=null;function ut(t){const e=b1;return b1=t,Ft=t&&t.type.__scopeId||null,e}function i4(t){Ft=t}function o4(){Ft=null}function l4(t,e=b1,n){if(!e||t._n)return t;const c=(...r)=>{c._d&&j2(-1);const s=ut(e);let i;try{i=t(...r)}finally{ut(s),c._d&&j2(1)}return i};return c._n=!0,c._c=!0,c._d=!0,c}function zt(t,e){if(b1===null)return t;const n=yt(b1),c=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,i,o,a=Q]=e[r];s&&(R(s)&&(s={mounted:s,updated:s}),s.deep&&J1(i),c.push({dir:s,instance:n,value:i,oldValue:void 0,arg:o,modifiers:a}))}return t}function i0(t,e,n,c){const r=t.dirs,s=e&&e.dirs;for(let i=0;i<r.length;i++){const o=r[i];s&&(o.oldValue=s[i].value);let a=o.dir[c];a&&(c0(),E1(a,n,8,[t.el,o,t,e]),r0())}}function I3(t,e){t.shapeFlag&6&&t.component?I3(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function K0(t,e){return R(t)?a1({name:t.name},e,{setup:t}):t}const st=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function a4(t){R(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:c,delay:r=200,timeout:s,suspensible:i=!0,onError:o}=t;let a=null,u,d=0;const F=()=>(d++,a=null,v()),v=()=>{let S;return a||(S=a=e().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),o)return new Promise((T,G)=>{o(x,()=>T(F()),()=>G(x),d+1)});throw x}).then(x=>S!==a&&a?a:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),u=x,x)))};return K0({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return u},setup(){const S=l1;if(u)return()=>St(u,S);const x=U=>{a=null,H0(U,S,13,!c)};if(i&&S.suspense||W0)return v().then(U=>()=>St(U,S)).catch(U=>(x(U),()=>c?i1(c,{error:U}):null));const T=B1(!1),G=B1(),W=B1(!!r);return r&&setTimeout(()=>{W.value=!1},r),s!=null&&setTimeout(()=>{if(!T.value&&!G.value){const U=new Error(`Async component timed out after ${s}ms.`);x(U),G.value=U}},s),v().then(()=>{T.value=!0,S.parent&&p2(S.parent.vnode)&&(S.parent.effect.dirty=!0,mt(S.parent.update))}).catch(U=>{x(U),G.value=U}),()=>{if(T.value&&u)return St(u,S);if(G.value&&c)return i1(c,{error:G.value});if(n&&!W.value)return i1(n)}}})}function St(t,e){const{ref:n,props:c,children:r,ce:s}=e.vnode,i=i1(t,c,r);return i.ref=n,i.ce=s,delete e.vnode.ce,i}const p2=t=>t.type.__isKeepAlive;function f4(t,e){V3(t,"a",e)}function u4(t,e){V3(t,"da",e)}function V3(t,e,n=l1){const c=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vt(e,c,n),n){let r=n.parent;for(;r&&r.parent;)p2(r.parent.vnode)&&d4(c,e,n,r),r=r.parent}}function d4(t,e,n,c){const r=vt(e,t,c,!0);U3(()=>{t2(c[e],r)},n)}function vt(t,e,n=l1,c=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...i)=>{c0();const o=G0(n),a=E1(e,n,t,i);return o(),r0(),a});return c?r.unshift(s):r.push(s),s}}const K1=t=>(e,n=l1)=>{(!W0||t==="sp")&&vt(t,(...c)=>e(...c),n)},h4=K1("bm"),N3=K1("m"),p4=K1("bu"),g4=K1("u"),C4=K1("bum"),U3=K1("um"),m4=K1("sp"),F4=K1("rtg"),v4=K1("rtc");function _4(t,e=l1){vt("ec",t,e)}const M4=Symbol.for("v-ndc");function P2(t,e,n,c){let r;const s=n;if(O(t)||r1(t)){r=new Array(t.length);for(let i=0,o=t.length;i<o;i++)r[i]=e(t[i],i,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let i=0;i<t;i++)r[i]=e(i+1,i,void 0,s)}else if(J(t))if(t[Symbol.iterator])r=Array.from(t,(i,o)=>e(i,o,void 0,s));else{const i=Object.keys(t);r=new Array(i.length);for(let o=0,a=i.length;o<a;o++){const u=i[o];r[o]=e(t[u],u,o,s)}}else r=[];return r}const Ht=t=>t?oe(t)?yt(t):Ht(t.parent):null,P0=a1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ht(t.parent),$root:t=>Ht(t.root),$emit:t=>t.emit,$options:t=>g2(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,mt(t.update)}),$nextTick:t=>t.n||(t.n=P3.bind(t.proxy)),$watch:t=>K4.bind(t)}),Et=(t,e)=>t!==Q&&!t.__isScriptSetup&&D(t,e),y4={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:c,data:r,props:s,accessCache:i,type:o,appContext:a}=t;let u;if(e[0]!=="$"){const S=i[e];if(S!==void 0)switch(S){case 1:return c[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Et(c,e))return i[e]=1,c[e];if(r!==Q&&D(r,e))return i[e]=2,r[e];if((u=t.propsOptions[0])&&D(u,e))return i[e]=3,s[e];if(n!==Q&&D(n,e))return i[e]=4,n[e];Kt&&(i[e]=0)}}const d=P0[e];let F,v;if(d)return e==="$attrs"&&F1(t.attrs,"get",""),d(t);if((F=o.__cssModules)&&(F=F[e]))return F;if(n!==Q&&D(n,e))return i[e]=4,n[e];if(v=a.config.globalProperties,D(v,e))return v[e]},set({_:t},e,n){const{data:c,setupState:r,ctx:s}=t;return Et(r,e)?(r[e]=n,!0):c!==Q&&D(c,e)?(c[e]=n,!0):D(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:c,appContext:r,propsOptions:s}},i){let o;return!!n[i]||t!==Q&&D(t,i)||Et(e,i)||(o=s[0])&&D(o,i)||D(c,i)||D(P0,i)||D(r.config.globalProperties,i)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:D(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function L2(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kt=!0;function w4(t){const e=g2(t),n=t.proxy,c=t.ctx;Kt=!1,e.beforeCreate&&$2(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:i,watch:o,provide:a,inject:u,created:d,beforeMount:F,mounted:v,beforeUpdate:S,updated:x,activated:T,deactivated:G,beforeDestroy:W,beforeUnmount:U,destroyed:j,unmounted:t1,render:g1,renderTracked:N,renderTriggered:C1,errorCaptured:f1,serverPrefetch:G1,expose:A1,inheritAttrs:k1,components:u1,directives:W1,filters:s0}=e;if(u&&b4(u,c,null),i)for(const X in i){const Y=i[X];R(Y)&&(c[X]=Y.bind(n))}if(r){const X=r.call(n,n);J(X)&&(t.data=f2(X))}if(Kt=!0,s)for(const X in s){const Y=s[X],M=R(Y)?Y.bind(n,n):R(Y.get)?Y.get.bind(n,n):w1,k=!R(Y)&&R(Y.set)?Y.set.bind(n):w1,P=qt({get:M,set:k});Object.defineProperty(c,X,{enumerable:!0,configurable:!0,get:()=>P.value,set:I=>P.value=I})}if(o)for(const X in o)j3(o[X],c,n,X);if(a){const X=R(a)?a.call(n):a;Reflect.ownKeys(X).forEach(Y=>{k4(Y,X[Y])})}d&&$2(d,t,"c");function e1(X,Y){O(Y)?Y.forEach(M=>X(M.bind(n))):Y&&X(Y.bind(n))}if(e1(h4,F),e1(N3,v),e1(p4,S),e1(g4,x),e1(f4,T),e1(u4,G),e1(_4,f1),e1(v4,N),e1(F4,C1),e1(C4,U),e1(U3,t1),e1(m4,G1),O(A1))if(A1.length){const X=t.exposed||(t.exposed={});A1.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>n[Y],set:M=>n[Y]=M})})}else t.exposed||(t.exposed={});g1&&t.render===w1&&(t.render=g1),k1!=null&&(t.inheritAttrs=k1),u1&&(t.components=u1),W1&&(t.directives=W1)}function b4(t,e,n=w1){O(t)&&(t=Gt(t));for(const c in t){const r=t[c];let s;J(r)?"default"in r?s=it(r.from||c,r.default,!0):s=it(r.from||c):s=it(r),v1(s)?Object.defineProperty(e,c,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):e[c]=s}}function $2(t,e,n){E1(O(t)?t.map(c=>c.bind(e.proxy)):t.bind(e.proxy),e,n)}function j3(t,e,n,c){const r=c.includes(".")?ee(n,c):()=>n[c];if(r1(t)){const s=e[t];R(s)&&ot(r,s)}else if(R(t))ot(r,t.bind(n));else if(J(t))if(O(t))t.forEach(s=>j3(s,e,n,c));else{const s=R(t.handler)?t.handler.bind(n):e[t.handler];R(s)&&ot(r,s,t)}}function g2(t){const e=t.type,{mixins:n,extends:c}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=t.appContext,o=s.get(e);let a;return o?a=o:!r.length&&!n&&!c?a=e:(a={},r.length&&r.forEach(u=>dt(a,u,i,!0)),dt(a,e,i)),J(e)&&s.set(e,a),a}function dt(t,e,n,c=!1){const{mixins:r,extends:s}=e;s&&dt(t,s,n,!0),r&&r.forEach(i=>dt(t,i,n,!0));for(const i in e)if(!(c&&i==="expose")){const o=x4[i]||n&&n[i];t[i]=o?o(t[i],e[i]):e[i]}return t}const x4={data:R2,props:I2,emits:I2,methods:k0,computed:k0,beforeCreate:h1,created:h1,beforeMount:h1,mounted:h1,beforeUpdate:h1,updated:h1,beforeDestroy:h1,beforeUnmount:h1,destroyed:h1,unmounted:h1,activated:h1,deactivated:h1,errorCaptured:h1,serverPrefetch:h1,components:k0,directives:k0,watch:S4,provide:R2,inject:z4};function R2(t,e){return e?t?function(){return a1(R(t)?t.call(this,this):t,R(e)?e.call(this,this):e)}:e:t}function z4(t,e){return k0(Gt(t),Gt(e))}function Gt(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function h1(t,e){return t?[...new Set([].concat(t,e))]:e}function k0(t,e){return t?a1(Object.create(null),t,e):e}function I2(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:a1(Object.create(null),L2(t),L2(e??{})):e}function S4(t,e){if(!t)return e;if(!e)return t;const n=a1(Object.create(null),t);for(const c in e)n[c]=h1(t[c],e[c]);return n}function D3(){return{app:null,config:{isNativeTag:ge,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let E4=0;function A4(t,e){return function(c,r=null){R(c)||(c=a1({},c)),r!=null&&!J(r)&&(r=null);const s=D3(),i=new WeakSet;let o=!1;const a=s.app={_uid:E4++,_component:c,_props:r,_container:null,_context:s,_instance:null,version:p5,get config(){return s.config},set config(u){},use(u,...d){return i.has(u)||(u&&R(u.install)?(i.add(u),u.install(a,...d)):R(u)&&(i.add(u),u(a,...d))),a},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),a},component(u,d){return d?(s.components[u]=d,a):s.components[u]},directive(u,d){return d?(s.directives[u]=d,a):s.directives[u]},mount(u,d,F){if(!o){const v=i1(c,r);return v.appContext=s,F===!0?F="svg":F===!1&&(F=void 0),d&&e?e(v,u):t(v,u,F),o=!0,a._container=u,u.__vue_app__=a,yt(v.component)}},unmount(){o&&(t(null,a._container),delete a._container.__vue_app__)},provide(u,d){return s.provides[u]=d,a},runWithContext(u){const d=w0;w0=a;try{return u()}finally{w0=d}}};return a}}let w0=null;function k4(t,e){if(l1){let n=l1.provides;const c=l1.parent&&l1.parent.provides;c===n&&(n=l1.provides=Object.create(c)),n[t]=e}}function it(t,e,n=!1){const c=l1||b1;if(c||w0){const r=w0?w0._context.provides:c?c.parent==null?c.vnode.appContext&&c.vnode.appContext.provides:c.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&R(e)?e.call(c&&c.proxy):e}}const B3={},H3=()=>Object.create(B3),K3=t=>Object.getPrototypeOf(t)===B3;function O4(t,e,n,c=!1){const r={},s=H3();t.propsDefaults=Object.create(null),G3(t,e,r,s);for(const i in t.propsOptions[0])i in r||(r[i]=void 0);n?t.props=c?r:Xe(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function T4(t,e,n,c){const{props:r,attrs:s,vnode:{patchFlag:i}}=t,o=K(r),[a]=t.propsOptions;let u=!1;if((c||i>0)&&!(i&16)){if(i&8){const d=t.vnode.dynamicProps;for(let F=0;F<d.length;F++){let v=d[F];if(_t(t.emitsOptions,v))continue;const S=e[v];if(a)if(D(s,v))S!==s[v]&&(s[v]=S,u=!0);else{const x=u0(v);r[x]=Wt(a,o,x,S,t,!1)}else S!==s[v]&&(s[v]=S,u=!0)}}}else{G3(t,e,r,s)&&(u=!0);let d;for(const F in o)(!e||!D(e,F)&&((d=p0(F))===F||!D(e,d)))&&(a?n&&(n[F]!==void 0||n[d]!==void 0)&&(r[F]=Wt(a,o,F,void 0,t,!0)):delete r[F]);if(s!==o)for(const F in s)(!e||!D(e,F))&&(delete s[F],u=!0)}u&&D1(t.attrs,"set","")}function G3(t,e,n,c){const[r,s]=t.propsOptions;let i=!1,o;if(e)for(let a in e){if(O0(a))continue;const u=e[a];let d;r&&D(r,d=u0(a))?!s||!s.includes(d)?n[d]=u:(o||(o={}))[d]=u:_t(t.emitsOptions,a)||(!(a in c)||u!==c[a])&&(c[a]=u,i=!0)}if(s){const a=K(n),u=o||Q;for(let d=0;d<s.length;d++){const F=s[d];n[F]=Wt(r,a,F,u[F],t,!D(u,F))}}return i}function Wt(t,e,n,c,r,s){const i=t[n];if(i!=null){const o=D(i,"default");if(o&&c===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&R(a)){const{propsDefaults:u}=r;if(n in u)c=u[n];else{const d=G0(r);c=u[n]=a.call(null,e),d()}}else c=a}i[0]&&(s&&!o?c=!1:i[1]&&(c===""||c===p0(n))&&(c=!0))}return c}const P4=new WeakMap;function W3(t,e,n=!1){const c=n?P4:e.propsCache,r=c.get(t);if(r)return r;const s=t.props,i={},o=[];let a=!1;if(!R(t)){const d=F=>{a=!0;const[v,S]=W3(F,e,!0);a1(i,v),S&&o.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!a)return J(t)&&c.set(t,_0),_0;if(O(s))for(let d=0;d<s.length;d++){const F=u0(s[d]);V2(F)&&(i[F]=Q)}else if(s)for(const d in s){const F=u0(d);if(V2(F)){const v=s[d],S=i[F]=O(v)||R(v)?{type:v}:a1({},v),x=S.type;let T=!1,G=!0;if(O(x))for(let W=0;W<x.length;++W){const U=x[W],j=R(U)&&U.name;if(j==="Boolean"){T=!0;break}else j==="String"&&(G=!1)}else T=R(x)&&x.name==="Boolean";S[0]=T,S[1]=G,(T||D(S,"default"))&&o.push(F)}}const u=[i,o];return J(t)&&c.set(t,u),u}function V2(t){return t[0]!=="$"&&!O0(t)}const Y3=t=>t[0]==="_"||t==="$stable",C2=t=>O(t)?t.map(R1):[R1(t)],L4=(t,e,n)=>{if(e._n)return e;const c=l4((...r)=>C2(e(...r)),n);return c._c=!1,c},X3=(t,e,n)=>{const c=t._ctx;for(const r in t){if(Y3(r))continue;const s=t[r];if(R(s))e[r]=L4(r,s,c);else if(s!=null){const i=C2(s);e[r]=()=>i}}},q3=(t,e)=>{const n=C2(e);t.slots.default=()=>n},Z3=(t,e,n)=>{for(const c in e)(n||c!=="_")&&(t[c]=e[c])},$4=(t,e,n)=>{const c=t.slots=H3();if(t.vnode.shapeFlag&32){const r=e._;r?(Z3(c,e,n),n&&u3(c,"_",r,!0)):X3(e,c)}else e&&q3(t,e)},R4=(t,e,n)=>{const{vnode:c,slots:r}=t;let s=!0,i=Q;if(c.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:Z3(r,e,n):(s=!e.$stable,X3(e,r)),i=e}else e&&(q3(t,e),i={default:1});if(s)for(const o in r)!Y3(o)&&i[o]==null&&delete r[o]};function Yt(t,e,n,c,r=!1){if(O(t)){t.forEach((v,S)=>Yt(v,e&&(O(e)?e[S]:e),n,c,r));return}if(st(c)&&!r)return;const s=c.shapeFlag&4?yt(c.component):c.el,i=r?null:s,{i:o,r:a}=t,u=e&&e.r,d=o.refs===Q?o.refs={}:o.refs,F=o.setupState;if(u!=null&&u!==a&&(r1(u)?(d[u]=null,D(F,u)&&(F[u]=null)):v1(u)&&(u.value=null)),R(a))e0(a,o,12,[i,d]);else{const v=r1(a),S=v1(a);if(v||S){const x=()=>{if(t.f){const T=v?D(F,a)?F[a]:d[a]:a.value;r?O(T)&&t2(T,s):O(T)?T.includes(s)||T.push(s):v?(d[a]=[s],D(F,a)&&(F[a]=d[a])):(a.value=[s],t.k&&(d[t.k]=a.value))}else v?(d[a]=i,D(F,a)&&(F[a]=i)):S&&(a.value=i,t.k&&(d[t.k]=i))};i?(x.id=-1,m1(x,n)):x()}}}const I4=Symbol("_vte"),V4=t=>t.__isTeleport,m1=Q4;function N4(t){return U4(t)}function U4(t,e){const n=d3();n.__VUE__=!0;const{insert:c,remove:r,patchProp:s,createElement:i,createText:o,createComment:a,setText:u,setElementText:d,parentNode:F,nextSibling:v,setScopeId:S=w1,insertStaticContent:x}=t,T=(l,f,h,C=null,p=null,m=null,w=void 0,_=null,y=!!f.dynamicChildren)=>{if(l===f)return;l&&!A0(l,f)&&(C=d1(l),I(l,p,m,!0),l=null),f.patchFlag===-2&&(y=!1,f.dynamicChildren=null);const{type:g,ref:b,shapeFlag:A}=f;switch(g){case Mt:G(l,f,h,C);break;case h0:W(l,f,h,C);break;case Ot:l==null&&U(f,h,C,w);break;case S1:u1(l,f,h,C,p,m,w,_,y);break;default:A&1?g1(l,f,h,C,p,m,w,_,y):A&6?W1(l,f,h,C,p,m,w,_,y):(A&64||A&128)&&g.process(l,f,h,C,p,m,w,_,y,_1)}b!=null&&p&&Yt(b,l&&l.ref,m,f||l,!f)},G=(l,f,h,C)=>{if(l==null)c(f.el=o(f.children),h,C);else{const p=f.el=l.el;f.children!==l.children&&u(p,f.children)}},W=(l,f,h,C)=>{l==null?c(f.el=a(f.children||""),h,C):f.el=l.el},U=(l,f,h,C)=>{[l.el,l.anchor]=x(l.children,f,h,C,l.el,l.anchor)},j=({el:l,anchor:f},h,C)=>{let p;for(;l&&l!==f;)p=v(l),c(l,h,C),l=p;c(f,h,C)},t1=({el:l,anchor:f})=>{let h;for(;l&&l!==f;)h=v(l),r(l),l=h;r(f)},g1=(l,f,h,C,p,m,w,_,y)=>{f.type==="svg"?w="svg":f.type==="math"&&(w="mathml"),l==null?N(f,h,C,p,m,w,_,y):G1(l,f,p,m,w,_,y)},N=(l,f,h,C,p,m,w,_)=>{let y,g;const{props:b,shapeFlag:A,transition:E,dirs:$}=l;if(y=l.el=i(l.type,m,b&&b.is,b),A&8?d(y,l.children):A&16&&f1(l.children,y,null,C,p,At(l,m),w,_),$&&i0(l,null,C,"created"),C1(y,l,l.scopeId,w,C),b){for(const Z in b)Z!=="value"&&!O0(Z)&&s(y,Z,null,b[Z],m,C);"value"in b&&s(y,"value",null,b.value,m),(g=b.onVnodeBeforeMount)&&L1(g,C,l)}$&&i0(l,null,C,"beforeMount");const V=j4(p,E);V&&E.beforeEnter(y),c(y,f,h),((g=b&&b.onVnodeMounted)||V||$)&&m1(()=>{g&&L1(g,C,l),V&&E.enter(y),$&&i0(l,null,C,"mounted")},p)},C1=(l,f,h,C,p)=>{if(h&&S(l,h),C)for(let m=0;m<C.length;m++)S(l,C[m]);if(p){let m=p.subTree;if(f===m){const w=p.vnode;C1(l,w,w.scopeId,w.slotScopeIds,p.parent)}}},f1=(l,f,h,C,p,m,w,_,y=0)=>{for(let g=y;g<l.length;g++){const b=l[g]=_?Z1(l[g]):R1(l[g]);T(null,b,f,h,C,p,m,w,_)}},G1=(l,f,h,C,p,m,w)=>{const _=f.el=l.el;let{patchFlag:y,dynamicChildren:g,dirs:b}=f;y|=l.patchFlag&16;const A=l.props||Q,E=f.props||Q;let $;if(h&&o0(h,!1),($=E.onVnodeBeforeUpdate)&&L1($,h,f,l),b&&i0(f,l,h,"beforeUpdate"),h&&o0(h,!0),(A.innerHTML&&E.innerHTML==null||A.textContent&&E.textContent==null)&&d(_,""),g?A1(l.dynamicChildren,g,_,h,C,At(f,p),m):w||Y(l,f,_,null,h,C,At(f,p),m,!1),y>0){if(y&16)k1(_,A,E,h,p);else if(y&2&&A.class!==E.class&&s(_,"class",null,E.class,p),y&4&&s(_,"style",A.style,E.style,p),y&8){const V=f.dynamicProps;for(let Z=0;Z<V.length;Z++){const H=V[Z],s1=A[H],x1=E[H];(x1!==s1||H==="value")&&s(_,H,s1,x1,p,h)}}y&1&&l.children!==f.children&&d(_,f.children)}else!w&&g==null&&k1(_,A,E,h,p);(($=E.onVnodeUpdated)||b)&&m1(()=>{$&&L1($,h,f,l),b&&i0(f,l,h,"updated")},C)},A1=(l,f,h,C,p,m,w)=>{for(let _=0;_<f.length;_++){const y=l[_],g=f[_],b=y.el&&(y.type===S1||!A0(y,g)||y.shapeFlag&70)?F(y.el):h;T(y,g,b,null,C,p,m,w,!0)}},k1=(l,f,h,C,p)=>{if(f!==h){if(f!==Q)for(const m in f)!O0(m)&&!(m in h)&&s(l,m,f[m],null,p,C);for(const m in h){if(O0(m))continue;const w=h[m],_=f[m];w!==_&&m!=="value"&&s(l,m,_,w,p,C)}"value"in h&&s(l,"value",f.value,h.value,p)}},u1=(l,f,h,C,p,m,w,_,y)=>{const g=f.el=l?l.el:o(""),b=f.anchor=l?l.anchor:o("");let{patchFlag:A,dynamicChildren:E,slotScopeIds:$}=f;$&&(_=_?_.concat($):$),l==null?(c(g,h,C),c(b,h,C),f1(f.children||[],h,b,p,m,w,_,y)):A>0&&A&64&&E&&l.dynamicChildren?(A1(l.dynamicChildren,E,h,p,m,w,_),(f.key!=null||p&&f===p.subTree)&&J3(l,f,!0)):Y(l,f,h,b,p,m,w,_,y)},W1=(l,f,h,C,p,m,w,_,y)=>{f.slotScopeIds=_,l==null?f.shapeFlag&512?p.ctx.activate(f,h,C,w,y):s0(f,h,C,p,m,w,y):g0(l,f,y)},s0=(l,f,h,C,p,m,w)=>{const _=l.component=l5(l,C,p);if(p2(l)&&(_.ctx.renderer=_1),a5(_,!1,w),_.asyncDep){if(p&&p.registerDep(_,e1,w),!l.el){const y=_.subTree=i1(h0);W(null,y,f,h)}}else e1(_,l,f,h,p,m,w)},g0=(l,f,h)=>{const C=f.component=l.component;if(q4(l,f,h))if(C.asyncDep&&!C.asyncResolved){X(C,f,h);return}else C.next=f,c4(C.update),C.effect.dirty=!0,C.update();else f.el=l.el,C.vnode=f},e1=(l,f,h,C,p,m,w)=>{const _=()=>{if(l.isMounted){let{next:b,bu:A,u:E,parent:$,vnode:V}=l;{const m0=Q3(l);if(m0){b&&(b.el=V.el,X(l,b,w)),m0.asyncDep.then(()=>{l.isUnmounted||_()});return}}let Z=b,H;o0(l,!1),b?(b.el=V.el,X(l,b,w)):b=V,A&&ct(A),(H=b.props&&b.props.onVnodeBeforeUpdate)&&L1(H,$,b,V),o0(l,!0);const s1=kt(l),x1=l.subTree;l.subTree=s1,T(x1,s1,F(x1.el),d1(x1),l,p,m),b.el=s1.el,Z===null&&Z4(l,s1.el),E&&m1(E,p),(H=b.props&&b.props.onVnodeUpdated)&&m1(()=>L1(H,$,b,V),p)}else{let b;const{el:A,props:E}=f,{bm:$,m:V,parent:Z}=l,H=st(f);if(o0(l,!1),$&&ct($),!H&&(b=E&&E.onVnodeBeforeMount)&&L1(b,Z,f),o0(l,!0),A&&C0){const s1=()=>{l.subTree=kt(l),C0(A,l.subTree,l,p,null)};H?f.type.__asyncLoader().then(()=>!l.isUnmounted&&s1()):s1()}else{const s1=l.subTree=kt(l);T(null,s1,h,C,l,p,m),f.el=s1.el}if(V&&m1(V,p),!H&&(b=E&&E.onVnodeMounted)){const s1=f;m1(()=>L1(b,Z,s1),p)}(f.shapeFlag&256||Z&&st(Z.vnode)&&Z.vnode.shapeFlag&256)&&l.a&&m1(l.a,p),l.isMounted=!0,f=h=C=null}},y=l.effect=new s2(_,w1,()=>mt(g),l.scope),g=l.update=()=>{y.dirty&&y.run()};g.i=l,g.id=l.uid,o0(l,!0),g()},X=(l,f,h)=>{f.component=l;const C=l.vnode.props;l.vnode=f,l.next=null,T4(l,f.props,C,h),R4(l,f.children,h),c0(),T2(l),r0()},Y=(l,f,h,C,p,m,w,_,y=!1)=>{const g=l&&l.children,b=l?l.shapeFlag:0,A=f.children,{patchFlag:E,shapeFlag:$}=f;if(E>0){if(E&128){k(g,A,h,C,p,m,w,_,y);return}else if(E&256){M(g,A,h,C,p,m,w,_,y);return}}$&8?(b&16&&n1(g,p,m),A!==g&&d(h,A)):b&16?$&16?k(g,A,h,C,p,m,w,_,y):n1(g,p,m,!0):(b&8&&d(h,""),$&16&&f1(A,h,C,p,m,w,_,y))},M=(l,f,h,C,p,m,w,_,y)=>{l=l||_0,f=f||_0;const g=l.length,b=f.length,A=Math.min(g,b);let E;for(E=0;E<A;E++){const $=f[E]=y?Z1(f[E]):R1(f[E]);T(l[E],$,h,null,p,m,w,_,y)}g>b?n1(l,p,m,!0,!1,A):f1(f,h,C,p,m,w,_,y,A)},k=(l,f,h,C,p,m,w,_,y)=>{let g=0;const b=f.length;let A=l.length-1,E=b-1;for(;g<=A&&g<=E;){const $=l[g],V=f[g]=y?Z1(f[g]):R1(f[g]);if(A0($,V))T($,V,h,null,p,m,w,_,y);else break;g++}for(;g<=A&&g<=E;){const $=l[A],V=f[E]=y?Z1(f[E]):R1(f[E]);if(A0($,V))T($,V,h,null,p,m,w,_,y);else break;A--,E--}if(g>A){if(g<=E){const $=E+1,V=$<b?f[$].el:C;for(;g<=E;)T(null,f[g]=y?Z1(f[g]):R1(f[g]),h,V,p,m,w,_,y),g++}}else if(g>E)for(;g<=A;)I(l[g],p,m,!0),g++;else{const $=g,V=g,Z=new Map;for(g=V;g<=E;g++){const M1=f[g]=y?Z1(f[g]):R1(f[g]);M1.key!=null&&Z.set(M1.key,g)}let H,s1=0;const x1=E-V+1;let m0=!1,_2=0;const E0=new Array(x1);for(g=0;g<x1;g++)E0[g]=0;for(g=$;g<=A;g++){const M1=l[g];if(s1>=x1){I(M1,p,m,!0);continue}let T1;if(M1.key!=null)T1=Z.get(M1.key);else for(H=V;H<=E;H++)if(E0[H-V]===0&&A0(M1,f[H])){T1=H;break}T1===void 0?I(M1,p,m,!0):(E0[T1-V]=g+1,T1>=_2?_2=T1:m0=!0,T(M1,f[T1],h,null,p,m,w,_,y),s1++)}const M2=m0?D4(E0):_0;for(H=M2.length-1,g=x1-1;g>=0;g--){const M1=V+g,T1=f[M1],y2=M1+1<b?f[M1+1].el:C;E0[g]===0?T(null,T1,h,y2,p,m,w,_,y):m0&&(H<0||g!==M2[H]?P(T1,h,y2,2):H--)}}},P=(l,f,h,C,p=null)=>{const{el:m,type:w,transition:_,children:y,shapeFlag:g}=l;if(g&6){P(l.component.subTree,f,h,C);return}if(g&128){l.suspense.move(f,h,C);return}if(g&64){w.move(l,f,h,_1);return}if(w===S1){c(m,f,h);for(let A=0;A<y.length;A++)P(y[A],f,h,C);c(l.anchor,f,h);return}if(w===Ot){j(l,f,h);return}if(C!==2&&g&1&&_)if(C===0)_.beforeEnter(m),c(m,f,h),m1(()=>_.enter(m),p);else{const{leave:A,delayLeave:E,afterLeave:$}=_,V=()=>c(m,f,h),Z=()=>{A(m,()=>{V(),$&&$()})};E?E(m,V,Z):Z()}else c(m,f,h)},I=(l,f,h,C=!1,p=!1)=>{const{type:m,props:w,ref:_,children:y,dynamicChildren:g,shapeFlag:b,patchFlag:A,dirs:E,cacheIndex:$}=l;if(A===-2&&(p=!1),_!=null&&Yt(_,null,h,l,!0),$!=null&&(f.renderCache[$]=void 0),b&256){f.ctx.deactivate(l);return}const V=b&1&&E,Z=!st(l);let H;if(Z&&(H=w&&w.onVnodeBeforeUnmount)&&L1(H,f,l),b&6)L(l.component,h,C);else{if(b&128){l.suspense.unmount(h,C);return}V&&i0(l,null,f,"beforeUnmount"),b&64?l.type.remove(l,f,h,_1,C):g&&!g.hasOnce&&(m!==S1||A>0&&A&64)?n1(g,f,h,!1,!0):(m===S1&&A&384||!p&&b&16)&&n1(y,f,h),C&&z(l)}(Z&&(H=w&&w.onVnodeUnmounted)||V)&&m1(()=>{H&&L1(H,f,l),V&&i0(l,null,f,"unmounted")},h)},z=l=>{const{type:f,el:h,anchor:C,transition:p}=l;if(f===S1){B(h,C);return}if(f===Ot){t1(l);return}const m=()=>{r(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:w,delayLeave:_}=p,y=()=>w(h,m);_?_(l.el,m,y):y()}else m()},B=(l,f)=>{let h;for(;l!==f;)h=v(l),r(l),l=h;r(f)},L=(l,f,h)=>{const{bum:C,scope:p,update:m,subTree:w,um:_,m:y,a:g}=l;N2(y),N2(g),C&&ct(C),p.stop(),m&&(m.active=!1,I(w,l,f,h)),_&&m1(_,f),m1(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},n1=(l,f,h,C=!1,p=!1,m=0)=>{for(let w=m;w<l.length;w++)I(l[w],f,h,C,p)},d1=l=>{if(l.shapeFlag&6)return d1(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const f=v(l.anchor||l.el),h=f&&f[I4];return h?v(h):f};let N1=!1;const Y1=(l,f,h)=>{l==null?f._vnode&&I(f._vnode,null,null,!0):T(f._vnode||null,l,f,null,null,null,h),f._vnode=l,N1||(N1=!0,T2(),$3(),N1=!1)},_1={p:T,um:I,m:P,r:z,mt:s0,mc:f1,pc:Y,pbc:A1,n:d1,o:t};let O1,C0;return{render:Y1,hydrate:O1,createApp:A4(Y1,O1)}}function At({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function o0({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function j4(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function J3(t,e,n=!1){const c=t.children,r=e.children;if(O(c)&&O(r))for(let s=0;s<c.length;s++){const i=c[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Z1(r[s]),o.el=i.el),!n&&o.patchFlag!==-2&&J3(i,o)),o.type===Mt&&(o.el=i.el)}}function D4(t){const e=t.slice(),n=[0];let c,r,s,i,o;const a=t.length;for(c=0;c<a;c++){const u=t[c];if(u!==0){if(r=n[n.length-1],t[r]<u){e[c]=r,n.push(c);continue}for(s=0,i=n.length-1;s<i;)o=s+i>>1,t[n[o]]<u?s=o+1:i=o;u<t[n[s]]&&(s>0&&(e[c]=n[s-1]),n[s]=c)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=e[i];return n}function Q3(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Q3(e)}function N2(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const B4=Symbol.for("v-scx"),H4=()=>it(B4),Q0={};function ot(t,e,n){return te(t,e,n)}function te(t,e,{immediate:n,deep:c,flush:r,once:s,onTrack:i,onTrigger:o}=Q){if(e&&s){const N=e;e=(...C1)=>{N(...C1),g1()}}const a=l1,u=N=>c===!0?N:J1(N,c===!1?1:void 0);let d,F=!1,v=!1;if(v1(t)?(d=()=>t.value,F=b0(t)):T0(t)?(d=()=>u(t),F=!0):O(t)?(v=!0,F=t.some(N=>T0(N)||b0(N)),d=()=>t.map(N=>{if(v1(N))return N.value;if(T0(N))return u(N);if(R(N))return e0(N,a,2)})):R(t)?e?d=()=>e0(t,a,2):d=()=>(S&&S(),E1(t,a,3,[x])):d=w1,e&&c){const N=d;d=()=>J1(N())}let S,x=N=>{S=j.onStop=()=>{e0(N,a,4),S=j.onStop=void 0}},T;if(W0)if(x=w1,e?n&&E1(e,a,3,[d(),v?[]:void 0,x]):d(),r==="sync"){const N=H4();T=N.__watcherHandles||(N.__watcherHandles=[])}else return w1;let G=v?new Array(t.length).fill(Q0):Q0;const W=()=>{if(!(!j.active||!j.dirty))if(e){const N=j.run();(c||F||(v?N.some((C1,f1)=>n0(C1,G[f1])):n0(N,G)))&&(S&&S(),E1(e,a,3,[N,G===Q0?void 0:v&&G[0]===Q0?[]:G,x]),G=N)}else j.run()};W.allowRecurse=!!e;let U;r==="sync"?U=W:r==="post"?U=()=>m1(W,a&&a.suspense):(W.pre=!0,a&&(W.id=a.uid),U=()=>mt(W));const j=new s2(d,w1,U),t1=Ae(),g1=()=>{j.stop(),t1&&t2(t1.effects,j)};return e?n?W():G=j.run():r==="post"?m1(j.run.bind(j),a&&a.suspense):j.run(),T&&T.push(g1),g1}function K4(t,e,n){const c=this.proxy,r=r1(t)?t.includes(".")?ee(c,t):()=>c[t]:t.bind(c,c);let s;R(e)?s=e:(s=e.handler,n=e);const i=G0(this),o=te(r,s.bind(c),n);return i(),o}function ee(t,e){const n=e.split(".");return()=>{let c=t;for(let r=0;r<n.length&&c;r++)c=c[n[r]];return c}}function J1(t,e=1/0,n){if(e<=0||!J(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,v1(t))J1(t.value,e,n);else if(O(t))for(let c=0;c<t.length;c++)J1(t[c],e,n);else if(S0(t)||M0(t))t.forEach(c=>{J1(c,e,n)});else if(a3(t)){for(const c in t)J1(t[c],e,n);for(const c of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,c)&&J1(t[c],e,n)}return t}const G4=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${u0(e)}Modifiers`]||t[`${p0(e)}Modifiers`];function W4(t,e,...n){if(t.isUnmounted)return;const c=t.vnode.props||Q;let r=n;const s=e.startsWith("update:"),i=s&&G4(c,e.slice(7));i&&(i.trim&&(r=n.map(d=>r1(d)?d.trim():d)),i.number&&(r=n.map(ft)));let o,a=c[o=bt(e)]||c[o=bt(u0(e))];!a&&s&&(a=c[o=bt(p0(e))]),a&&E1(a,t,6,r);const u=c[o+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,E1(u,t,6,r)}}function ne(t,e,n=!1){const c=e.emitsCache,r=c.get(t);if(r!==void 0)return r;const s=t.emits;let i={},o=!1;if(!R(t)){const a=u=>{const d=ne(u,e,!0);d&&(o=!0,a1(i,d))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!s&&!o?(J(t)&&c.set(t,null),null):(O(s)?s.forEach(a=>i[a]=null):a1(i,s),J(t)&&c.set(t,i),i)}function _t(t,e){return!t||!pt(e)?!1:(e=e.slice(2).replace(/Once$/,""),D(t,e[0].toLowerCase()+e.slice(1))||D(t,p0(e))||D(t,e))}function kt(t){const{type:e,vnode:n,proxy:c,withProxy:r,propsOptions:[s],slots:i,attrs:o,emit:a,render:u,renderCache:d,props:F,data:v,setupState:S,ctx:x,inheritAttrs:T}=t,G=ut(t);let W,U;try{if(n.shapeFlag&4){const t1=r||c,g1=t1;W=R1(u.call(g1,t1,d,F,S,v,x)),U=o}else{const t1=e;W=R1(t1.length>1?t1(F,{attrs:o,slots:i,emit:a}):t1(F,null)),U=e.props?o:Y4(o)}}catch(t1){L0.length=0,H0(t1,t,1),W=i1(h0)}let j=W;if(U&&T!==!1){const t1=Object.keys(U),{shapeFlag:g1}=j;t1.length&&g1&7&&(s&&t1.some(Qt)&&(U=X4(U,s)),j=x0(j,U,!1,!0))}return n.dirs&&(j=x0(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),W=j,ut(G),W}const Y4=t=>{let e;for(const n in t)(n==="class"||n==="style"||pt(n))&&((e||(e={}))[n]=t[n]);return e},X4=(t,e)=>{const n={};for(const c in t)(!Qt(c)||!(c.slice(9)in e))&&(n[c]=t[c]);return n};function q4(t,e,n){const{props:c,children:r,component:s}=t,{props:i,children:o,patchFlag:a}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return c?U2(c,i,u):!!i;if(a&8){const d=e.dynamicProps;for(let F=0;F<d.length;F++){const v=d[F];if(i[v]!==c[v]&&!_t(u,v))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:c===i?!1:c?i?U2(c,i,u):!0:!!i;return!1}function U2(t,e,n){const c=Object.keys(e);if(c.length!==Object.keys(t).length)return!0;for(let r=0;r<c.length;r++){const s=c[r];if(e[s]!==t[s]&&!_t(n,s))return!0}return!1}function Z4({vnode:t,parent:e},n){for(;e;){const c=e.subTree;if(c.suspense&&c.suspense.activeBranch===t&&(c.el=t.el),c===t)(t=e.vnode).el=n,e=e.parent;else break}}const J4=t=>t.__isSuspense;function Q4(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):r4(t)}const S1=Symbol.for("v-fgt"),Mt=Symbol.for("v-txt"),h0=Symbol.for("v-cmt"),Ot=Symbol.for("v-stc"),L0=[];let y1=null;function $1(t=!1){L0.push(y1=t?null:[])}function t5(){L0.pop(),y1=L0[L0.length-1]||null}let N0=1;function j2(t){N0+=t,t<0&&y1&&(y1.hasOnce=!0)}function ce(t){return t.dynamicChildren=N0>0?y1||_0:null,t5(),N0>0&&y1&&y1.push(t),t}function j1(t,e,n,c,r,s){return ce(q(t,e,n,c,r,s,!0))}function e5(t,e,n,c,r){return ce(i1(t,e,n,c,r,!0))}function n5(t){return t?t.__v_isVNode===!0:!1}function A0(t,e){return t.type===e.type&&t.key===e.key}const re=({key:t})=>t??null,lt=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?r1(t)||v1(t)||R(t)?{i:b1,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,c=0,r=null,s=t===S1?0:1,i=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&re(e),ref:e&&lt(e),scopeId:Ft,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:c,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:b1};return o?(m2(a,n),s&128&&t.normalize(a)):n&&(a.shapeFlag|=r1(n)?8:16),N0>0&&!i&&y1&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&y1.push(a),a}const i1=c5;function c5(t,e=null,n=null,c=0,r=null,s=!1){if((!t||t===M4)&&(t=h0),n5(t)){const o=x0(t,e,!0);return n&&m2(o,n),N0>0&&!s&&y1&&(o.shapeFlag&6?y1[y1.indexOf(t)]=o:y1.push(o)),o.patchFlag=-2,o}if(h5(t)&&(t=t.__vccOpts),e){e=r5(e);let{class:o,style:a}=e;o&&!r1(o)&&(e.class=c2(o)),J(a)&&(E3(a)&&!O(a)&&(a=a1({},a)),e.style=n2(a))}const i=r1(t)?1:J4(t)?128:V4(t)?64:J(t)?4:R(t)?2:0;return q(t,e,n,c,r,i,s,!0)}function r5(t){return t?E3(t)||K3(t)?a1({},t):t:null}function x0(t,e,n=!1,c=!1){const{props:r,ref:s,patchFlag:i,children:o,transition:a}=t,u=e?ie(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&re(u),ref:e&&e.ref?n&&s?O(s)?s.concat(lt(e)):[s,lt(e)]:lt(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==S1?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&x0(t.ssContent),ssFallback:t.ssFallback&&x0(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&c&&I3(d,a.clone(d)),d}function se(t=" ",e=0){return i1(Mt,null,t,e)}function s5(t="",e=!1){return e?($1(),e5(h0,null,t)):i1(h0,null,t)}function R1(t){return t==null||typeof t=="boolean"?i1(h0):O(t)?i1(S1,null,t.slice()):typeof t=="object"?Z1(t):i1(Mt,null,String(t))}function Z1(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:x0(t)}function m2(t,e){let n=0;const{shapeFlag:c}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(c&65){const r=e.default;r&&(r._c&&(r._d=!1),m2(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!K3(e)?e._ctx=b1:r===3&&b1&&(b1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else R(e)?(e={default:e,_ctx:b1},n=32):(e=String(e),c&64?(n=16,e=[se(e)]):n=8);t.children=e,t.shapeFlag|=n}function ie(...t){const e={};for(let n=0;n<t.length;n++){const c=t[n];for(const r in c)if(r==="class")e.class!==c.class&&(e.class=c2([e.class,c.class]));else if(r==="style")e.style=n2([e.style,c.style]);else if(pt(r)){const s=e[r],i=c[r];i&&s!==i&&!(O(s)&&s.includes(i))&&(e[r]=s?[].concat(s,i):i)}else r!==""&&(e[r]=c[r])}return e}function L1(t,e,n,c=null){E1(t,e,7,[n,c])}const i5=D3();let o5=0;function l5(t,e,n){const c=t.type,r=(e?e.appContext:t.appContext)||i5,s={uid:o5++,vnode:t,type:c,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Se(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:W3(c,r),emitsOptions:ne(c,r),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:c.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=W4.bind(null,s),t.ce&&t.ce(s),s}let l1=null,ht,Xt;{const t=d3(),e=(n,c)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(c),s=>{r.length>1?r.forEach(i=>i(s)):r[0](s)}};ht=e("__VUE_INSTANCE_SETTERS__",n=>l1=n),Xt=e("__VUE_SSR_SETTERS__",n=>W0=n)}const G0=t=>{const e=l1;return ht(t),t.scope.on(),()=>{t.scope.off(),ht(e)}},D2=()=>{l1&&l1.scope.off(),ht(null)};function oe(t){return t.vnode.shapeFlag&4}let W0=!1;function a5(t,e=!1,n=!1){e&&Xt(e);const{props:c,children:r}=t.vnode,s=oe(t);O4(t,c,s,e),$4(t,r,n);const i=s?f5(t,e):void 0;return e&&Xt(!1),i}function f5(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,y4);const{setup:c}=n;if(c){const r=t.setupContext=c.length>1?d5(t):null,s=G0(t);c0();const i=e0(c,t,0,[t.props,r]);if(r0(),s(),o3(i)){if(i.then(D2,D2),e)return i.then(o=>{B2(t,o,e)}).catch(o=>{H0(o,t,0)});t.asyncDep=i}else B2(t,i,e)}else le(t,e)}function B2(t,e,n){R(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=O3(e)),le(t,n)}let H2;function le(t,e,n){const c=t.type;if(!t.render){if(!e&&H2&&!c.render){const r=c.template||g2(t).template;if(r){const{isCustomElement:s,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=c,u=a1(a1({isCustomElement:s,delimiters:o},i),a);c.render=H2(r,u)}}t.render=c.render||w1}{const r=G0(t);c0();try{w4(t)}finally{r0(),r()}}}const u5={get(t,e){return F1(t,"get",""),t[e]}};function d5(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,u5),slots:t.slots,emit:t.emit,expose:e}}function yt(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(O3(qe(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in P0)return P0[n](t)},has(e,n){return n in e||n in P0}})):t.proxy}function h5(t){return R(t)&&"__vccOpts"in t}const qt=(t,e)=>Ze(t,e,W0),p5="3.4.37";/**
* @vue/runtime-dom v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const g5="http://www.w3.org/2000/svg",C5="http://www.w3.org/1998/Math/MathML",U1=typeof document<"u"?document:null,K2=U1&&U1.createElement("template"),m5={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,c)=>{const r=e==="svg"?U1.createElementNS(g5,t):e==="mathml"?U1.createElementNS(C5,t):n?U1.createElement(t,{is:n}):U1.createElement(t);return t==="select"&&c&&c.multiple!=null&&r.setAttribute("multiple",c.multiple),r},createText:t=>U1.createTextNode(t),createComment:t=>U1.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>U1.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,c,r,s){const i=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{K2.innerHTML=c==="svg"?`<svg>${t}</svg>`:c==="mathml"?`<math>${t}</math>`:t;const o=K2.content;if(c==="svg"||c==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}e.insertBefore(o,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},F5=Symbol("_vtc");function v5(t,e,n){const c=t[F5];c&&(e=(e?[e,...c]:[...c]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const G2=Symbol("_vod"),_5=Symbol("_vsh"),M5=Symbol(""),y5=/(^|;)\s*display\s*:/;function w5(t,e,n){const c=t.style,r=r1(n);let s=!1;if(n&&!r){if(e)if(r1(e))for(const i of e.split(";")){const o=i.slice(0,i.indexOf(":")).trim();n[o]==null&&at(c,o,"")}else for(const i in e)n[i]==null&&at(c,i,"");for(const i in n)i==="display"&&(s=!0),at(c,i,n[i])}else if(r){if(e!==n){const i=c[M5];i&&(n+=";"+i),c.cssText=n,s=y5.test(n)}}else e&&t.removeAttribute("style");G2 in t&&(t[G2]=s?c.display:"",t[_5]&&(c.display="none"))}const W2=/\s*!important$/;function at(t,e,n){if(O(n))n.forEach(c=>at(t,e,c));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const c=b5(t,e);W2.test(n)?t.setProperty(p0(c),n.replace(W2,""),"important"):t[c]=n}}const Y2=["Webkit","Moz","ms"],Tt={};function b5(t,e){const n=Tt[e];if(n)return n;let c=u0(e);if(c!=="filter"&&c in t)return Tt[e]=c;c=f3(c);for(let r=0;r<Y2.length;r++){const s=Y2[r]+c;if(s in t)return Tt[e]=s}return e}const X2="http://www.w3.org/1999/xlink";function q2(t,e,n,c,r,s=xe(e)){c&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(X2,e.slice(6,e.length)):t.setAttributeNS(X2,e,n):n==null||s&&!h3(n)?t.removeAttribute(e):t.setAttribute(e,s?"":V1(n)?String(n):n)}function x5(t,e,n,c){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?t.getAttribute("value")||"":t.value,o=n==null?"":String(n);(i!==o||!("_value"in t))&&(t.value=o),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const i=typeof t[e];i==="boolean"?n=h3(n):n==null&&i==="string"?(n="",s=!0):i==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function Q1(t,e,n,c){t.addEventListener(e,n,c)}function z5(t,e,n,c){t.removeEventListener(e,n,c)}const Z2=Symbol("_vei");function S5(t,e,n,c,r=null){const s=t[Z2]||(t[Z2]={}),i=s[e];if(c&&i)i.value=c;else{const[o,a]=E5(e);if(c){const u=s[e]=O5(c,r);Q1(t,o,u,a)}else i&&(z5(t,o,i,a),s[e]=void 0)}}const J2=/(?:Once|Passive|Capture)$/;function E5(t){let e;if(J2.test(t)){e={};let c;for(;c=t.match(J2);)t=t.slice(0,t.length-c[0].length),e[c[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):p0(t.slice(2)),e]}let Pt=0;const A5=Promise.resolve(),k5=()=>Pt||(A5.then(()=>Pt=0),Pt=Date.now());function O5(t,e){const n=c=>{if(!c._vts)c._vts=Date.now();else if(c._vts<=n.attached)return;E1(T5(c,n.value),e,5,[c])};return n.value=t,n.attached=k5(),n}function T5(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(c=>r=>!r._stopped&&c&&c(r))}else return e}const Q2=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,P5=(t,e,n,c,r,s)=>{const i=r==="svg";e==="class"?v5(t,c,i):e==="style"?w5(t,n,c):pt(e)?Qt(e)||S5(t,e,n,c,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):L5(t,e,c,i))?(x5(t,e,c),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&q2(t,e,c,i,s,e!=="value")):(e==="true-value"?t._trueValue=c:e==="false-value"&&(t._falseValue=c),q2(t,e,c,i))};function L5(t,e,n,c){if(c)return!!(e==="innerHTML"||e==="textContent"||e in t&&Q2(e)&&R(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Q2(e)&&r1(n)?!1:e in t}const z0=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>ct(e,n):e};function $5(t){t.target.composing=!0}function t3(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const H1=Symbol("_assign"),R5={created(t,{modifiers:{lazy:e,trim:n,number:c}},r){t[H1]=z0(r);const s=c||r.props&&r.props.type==="number";Q1(t,e?"change":"input",i=>{if(i.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=ft(o)),t[H1](o)}),n&&Q1(t,"change",()=>{t.value=t.value.trim()}),e||(Q1(t,"compositionstart",$5),Q1(t,"compositionend",t3),Q1(t,"change",t3))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:c,trim:r,number:s}},i){if(t[H1]=z0(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?ft(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(c&&e===n||r&&t.value.trim()===a)||(t.value=a))}},I5={deep:!0,created(t,e,n){t[H1]=z0(n),Q1(t,"change",()=>{const c=t._modelValue,r=U0(t),s=t.checked,i=t[H1];if(O(c)){const o=r2(c,r),a=o!==-1;if(s&&!a)i(c.concat(r));else if(!s&&a){const u=[...c];u.splice(o,1),i(u)}}else if(S0(c)){const o=new Set(c);s?o.add(r):o.delete(r),i(o)}else i(ae(t,s))})},mounted:e3,beforeUpdate(t,e,n){t[H1]=z0(n),e3(t,e,n)}};function e3(t,{value:e,oldValue:n},c){t._modelValue=e,O(e)?t.checked=r2(e,c.props.value)>-1:S0(e)?t.checked=e.has(c.props.value):e!==n&&(t.checked=B0(e,ae(t,!0)))}const V5={deep:!0,created(t,{value:e,modifiers:{number:n}},c){const r=S0(e);Q1(t,"change",()=>{const s=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?ft(U0(i)):U0(i));t[H1](t.multiple?r?new Set(s):s:s[0]),t._assigning=!0,P3(()=>{t._assigning=!1})}),t[H1]=z0(c)},mounted(t,{value:e,modifiers:{number:n}}){n3(t,e)},beforeUpdate(t,e,n){t[H1]=z0(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||n3(t,e)}};function n3(t,e,n){const c=t.multiple,r=O(e);if(!(c&&!r&&!S0(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=U0(o);if(c)if(r){const u=typeof a;u==="string"||u==="number"?o.selected=e.some(d=>String(d)===String(a)):o.selected=r2(e,a)>-1}else o.selected=e.has(a);else if(B0(U0(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!c&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function U0(t){return"_value"in t?t._value:t.value}function ae(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const N5=a1({patchProp:P5},m5);let c3;function U5(){return c3||(c3=N4(N5))}const j5=(...t)=>{const e=U5().createApp(...t),{mount:n}=e;return e.mount=c=>{const r=B5(c);if(!r)return;const s=e._component;!R(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,D5(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},e};function D5(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function B5(t){return r1(t)?document.querySelector(t):t}const H5="modulepreload",K5=function(t){return"/"+t},r3={},G5=function(e,n,c){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=K5(o),o in r3)return;r3[o]=!0;const a=o.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":H5,a||(d.as="script",d.crossOrigin=""),d.href=o,i&&d.setAttribute("nonce",i),document.head.appendChild(d),a)return new Promise((F,v)=>{d.addEventListener("load",F),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},W5=async()=>new Promise((t,e)=>{const n=document.createElement("input");n.type="file",n.accept=".svg",n.onchange=c=>{var s;const r=(s=c.target.files)==null?void 0:s[0];if(r){const i=new FileReader;i.onload=o=>{var u;const a=(u=o.target)==null?void 0:u.result;t(a)},i.onerror=o=>{e(o)},i.readAsText(r)}else e("No file selected")},n.click()}),Y5=`<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 13.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 14948)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Basic//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-basic.dtd">
<svg version="1.1" baseProfile="basic" id="svg2" xmlns:svg="http://www.w3.org/2000/svg"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="900px" height="900px"
	 viewBox="0 0 900 900" xml:space="preserve">
<path id="path482" fill="none" d="M184.013,144.428"/>
<path id="path6" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M108.956,403.826c0,0,0.178,3.344-1.276,3.311
	c-1.455-0.033-30.507-84.917-66.752-80.957C40.928,326.18,72.326,313.197,108.956,403.826z"/>
<path id="path10" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M115.189,398.488c0,0-0.97,3.207-2.327,2.679
	c-1.356-0.526,0.203-90.231-35.227-98.837C77.635,302.33,111.576,300.804,115.189,398.488z"/>
<path id="path14" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M163.727,473.225c0,0,2.888,1.695,2.059,2.892
	c-0.832,1.194-87.655-21.408-104.35,11.003C61.436,487.118,67.931,453.771,163.727,473.225z"/>
<path id="path18" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M158.767,491.254c0,0,3.277,0.699,2.864,2.096
	c-0.411,1.396-89.935,7.298-95.567,43.318C66.063,536.668,61.723,502.971,158.767,491.254z"/>
<path id="path22" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M151.332,481.498c0,0,3.139,1.171,2.528,2.492
	c-0.611,1.319-90.037-5.899-100.864,28.915C52.996,512.905,53.617,478.938,151.332,481.498z"/>
<path id="path26" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M132.43,449.356c0,0,2.31,2.427,1.181,3.347
	c-1.128,0.919-78.363-44.729-103.341-18.171C30.27,434.532,45.704,404.264,132.43,449.356z"/>
<path id="path30" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M119.108,456.757c0,0,2.571,2.148,1.554,3.192
	c-1.017,1.041-82.921-35.576-104.734-6.36C15.928,453.589,27.837,421.769,119.108,456.757z"/>
<path id="path34" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M114.518,463.946c0,0,2.839,1.778,1.974,2.95
	c-0.865,1.171-86.997-23.942-104.623,7.974C11.869,474.87,19.329,441.724,114.518,463.946z"/>
<path id="path38" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M133.47,465.03c0,0,1.981,2.703,0.743,3.472
	c-1.237,0.768-71.985-54.405-100.161-31.267C34.052,437.235,53.236,409.195,133.47,465.03z"/>
<path id="path42" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M98.546,413.917c0,0,1.06,3.178-0.353,3.531
	c-1.413,0.353-51.91-73.804-85.812-60.385C12.381,357.063,39.22,336.229,98.546,413.917z"/>
<path id="path46" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M99.773,426.239c0,0,1.722,2.876,0.417,3.523
	c-1.303,0.649-66.605-60.873-96.813-40.458C3.376,389.306,25.088,363.174,99.773,426.239z"/>
<path id="path50" fill="#FFFFFF" stroke="#000000" stroke-width="0.172" d="M99.57,433.955c0,0,1.981,2.703,0.744,3.472
	c-1.238,0.767-71.985-54.405-100.162-31.267C0.152,406.16,19.335,378.12,99.57,433.955z"/>
<path id="path54" fill="#FFFFFF" stroke="#000000" d="M95.668,436.985c0.888,10.678,2.632,22.275,5.703,27.783
	c0,0-6.356,21.895,9.181,45.2c0,0-0.707,12.712,2.119,18.362c0,0,7.063,14.832,15.538,16.244c6.858,1.143,22.26,6.561,39.67,9.04
	c0,0,30.249,24.859,24.599,47.461c0,0-0.706,28.956-7.063,31.781c0,0,20.481-19.775,3.531,9.888l-7.769,33.192
	c0,0,45.201-38.138,17.657-5.648l-17.657,45.906c0,0,34.607-32.487,21.894-17.656l-5.65,15.538c0,0,76.276-48.025,21.894,4.237
	c0,0,14.125-6.356,21.894-1.412c0,0,12.006-2.119,10.594,0.706c0,0-36.726,18.361-43.082,50.851c0,0,14.831-17.657,9.181,1.412
	l0.706,20.48c0,0,7.063-38.138,6.356,28.25c0,0,33.9-31.78,13.419,4.944v29.662c0,0,26.838-28.956,15.538-6.354
	c0,0,17.656-15.538,10.594,11.3c0,0-1.413,18.361,6.356-1.412c0,0,28.25-54.029,17.656-7.771c0,0-1.412,33.9,7.063,7.771
	c0,0,0.706,18.362,16.95,31.075c0,0-2.119-89.695,20.48-26.133l7.063,28.957c0,0,4.943-16.244,4.237-25.426
	c0,0,26.132-28.957,14.125,14.125c0,0,26.838-40.257,21.188-16.95c0,0-13.419,28.251-10.594,36.727c0,0,29.663-61.444,31.782-64.271
	c0,0-3.531,74.865,15.537,11.3c0,0,9.888,21.188,4.943,28.957c0,0,14.125-14.125,12.712-19.774c0,0,8.122-14.479,13.066,9.534
	c0,0,3.178,16.598,6.003,10.946c0,0,7.063,42.377,9.182,2.119c0,0,2.825-24.013-9.888-44.494c0,0,1.412-5.649-3.531-12.713
	c0,0,24.014,38.139,11.3-12.713c0,0,19.777,14.125,21.896,14.125c0,0-24.015-40.963-8.477-32.487c0,0-9.183-18.362,22.602,2.825
	c0,0-28.252-28.251,2.825-11.301c0,0,14.125,11.301,0.706-6.356c0,0-25.428-28.25,13.419,3.532c0,0,20.48,28.956,21.895,33.9
	c0,0-17.655-51.559-25.426-56.501c0,0,14.832-64.271,87.576-36.727c0,0,12.007,30.369,19.774-2.118c0,0,22.602-11.301,42.375,37.432
	c0,0,7.063-24.013,5.65-28.956c0,0,12.007,2.119,10.594,0c0,0,23.308,7.769,25.427,6.356c0,0,12.006,12.006,12.712,5.648
	c0,0,16.244,4.944,12.713-1.412c0,0,15.538,27.544,16.244,33.9l4.236-24.719l3.531,4.942c0,0,2.825-13.419,1.413-15.537
	c-1.413-2.119,35.313,12.006,43.787,48.731l3.531,14.831c0,0,10.594-26.131,7.77-33.193c0,0,9.181,1.412,9.888,9.181
	c0,0,7.063-40.963-1.412-51.557c0,0,7.769-1.412,9.888,4.944V714.78c0,0,12.713,1.411,12.713-2.825c0,0,7.769-7.063,11.3,1.412
	c0,0-21.894-62.15,10.594-28.25c0,0,12.714,19.068,6.356-14.125c-6.357-33.194-13.419-36.021-4.943-36.727
	c0,0,1.412-6.355-2.118-9.181c-3.531-2.825,2.118,0,2.118,0s8.476,7.063-0.707-31.782c0,0,11.302,2.825-9.888-48.73
	c0,0,4.944-4.237-2.118-19.069c0,0,14.125,7.77,19.069,4.944c0,0-0.707-2.825-6.356-9.889c0,0-38.139-96.759-2.118-57.913
	c0,0,20.923,23.925,9.623-16.332c0,0-16.088-42.394-14.716-49.979L95.668,436.985z"/>
<path id="path58" fill="#CC7226" stroke="#000000" d="M854.095,396.693c1.108,0.32,5.004,2.304,7.211,5.217
	c0,0,12.006,19.068,2.825-13.418c0,0-16.244-50.851-0.707-31.076c0,0,10.594,12.713,4.944-11.3
	c-6.824-29.004-11.301-40.257-11.301-40.257s20.48,8.475-26.837-61.444l15.536,6.356c0,0-34.605-69.919-72.743-79.101
	l-14.125-10.594c0,0,67.8-67.094,45.199-132.07c0,0-12.007-9.182-28.957,7.063c0,0-11.3,8.475-21.894,5.65
	c0,0-54.382,2.119-57.913,2.119S630.359-21.844,514.533,9.231c0,0-9.183,3.531-16.95,1.413c0,0-32.489-28.25-118.653,12.006
	c0,0-17.655,3.531-20.48,3.531s-7.77,0-21.895,11.3c-14.125,11.3-14.832,12.712-18.362,15.538c0,0-28.957,19.775-37.432,21.188
	c0,0-20.481,11.3-28.25,28.957l-6.356,2.119c0,0-2.825,12.713-3.532,14.832c0,0-8.475,6.356-9.887,16.244
	c0,0-15.538,10.594-14.832,18.362c0,0-2.825,9.182-4.238,17.657c0,0-12.712,8.475-11.3,13.419c0,0-13.419,24.719-11.3,36.725
	c0,0-11.3-0.706-16.244,3.531c0,0-1.413,8.475-4.238,9.182c0,0-4.944,2.119-0.706,9.181c0,0-2.825,4.944-3.531,7.769
	c0,0,1.412,4.944-6.356,14.831c0,0-11.3,33.194-7.769,42.375c0,0,0.707,8.475-4.237,11.3c0,0-6.356-0.707,8.475,20.481
	c0,0,1.413,2.119-4.238,6.356c0,0-30.369,6.356-34.606,35.313c0,0-24.013,26.131-24.013,35.313c0,4.069,0.479,9.626,1.713,17.771
	c0,0-1.007,14.718,47.725,16.131C191.772,453.469,854.095,396.693,854.095,396.693z"/>
<path id="path62" fill="#CC7226" d="M120.793,436.164c-44.141-69.566-18.716,30.018-18.716,30.018
	c15.538,60.738,244.365-5.649,244.365-5.649s298.042-53.677,317.816-60.739c19.775-7.063,187.864,4.237,187.864,4.237l-9.888-29.663
	c-114.414-81.926-148.314-40.963-172.327-48.025c-24.013-7.062-19.774,9.888-25.425,11.3c-5.651,1.412-74.863-42.375-86.163-40.963
	c-11.301,1.413-56.045-40.523-29.663,15.538c28.25,60.032-103.115,69.213-132.778,49.438
	c-29.663-19.775,12.713,32.488,12.713,32.488c32.487,35.313-28.25,5.65-28.25,5.65c-60.737-22.601-103.114,22.6-108.764,24.013
	c-5.65,1.412-14.125,7.063-15.538-4.237c-1.412-11.301-14.672-40.789-70.625,5.649c-35.313,29.313-59.679-9.534-59.679-9.534
	L120.793,436.164z"/>
<path id="path66" fill="#E87F3A" d="M560.632,299.761c-11.3,1.413-56.089-40.502-29.662,15.538
	c29.311,62.151-103.113,69.213-132.775,49.438c-29.665-19.775,12.712,32.488,12.712,32.488c32.488,35.313-28.252,5.649-28.252,5.649
	c-60.737-22.6-103.113,22.601-108.763,24.013c-5.65,1.413-14.125,7.063-15.538-4.236c-1.413-11.301-14.441-40.494-70.626,5.649
	c-37.495,30.627-61.315-7.255-61.315-7.255l-5.65,17.849c-44.141-70.271-17.529,32.682-17.529,32.682
	c15.54,60.739,245.521-7.962,245.521-7.962s298.043-53.676,317.817-60.738c19.774-7.062,186.325,4.109,186.325,4.109l-9.762-30.563
	c-114.413-81.926-146.9-39.935-170.914-46.998c-24.013-7.063-19.774,9.888-25.425,11.3
	C641.146,342.136,571.933,298.349,560.632,299.761z"/>
<path id="path70" fill="#EA8C4D" d="M562.943,302.842c-11.301,1.413-54.973-41.014-29.663,15.538
	c28.604,63.918-103.113,69.215-132.776,49.44c-29.662-19.775,12.713,32.488,12.713,32.488c32.488,35.313-28.25,5.649-28.25,5.649
	c-60.738-22.6-103.115,22.601-108.766,24.013c-5.65,1.413-14.125,7.063-15.538-4.236c-1.413-11.301-14.21-40.198-70.625,5.649
	c-39.68,31.942-62.952-4.976-62.952-4.976l-6.356,15.216c-42.022-68.86-16.341,35.345-16.341,35.345
	c15.538,60.738,246.678-10.271,246.678-10.271s298.04-53.677,317.814-60.738c19.775-7.063,184.783,3.979,184.783,3.979l-9.63-31.46
	c-114.415-81.926-145.49-38.909-169.503-45.972c-24.014-7.063-19.775,9.888-25.427,11.302
	C643.457,345.219,574.243,301.429,562.943,302.842z"/>
<path id="path74" fill="#EC9961" d="M565.255,305.925c-11.301,1.413-54.963-41.02-29.663,15.538
	c29.663,66.311-104.057,68.586-132.775,49.438c-29.663-19.775,12.713,32.488,12.713,32.488c32.486,35.313-28.25,5.649-28.25,5.649
	c-60.738-22.6-103.114,22.601-108.764,24.013c-5.65,1.413-14.125,7.063-15.538-4.236c-1.413-11.301-13.979-39.9-70.627,5.649
	c-41.862,33.259-64.591-2.696-64.591-2.696l-7.063,12.584c-38.491-64.976-15.151,38.012-15.151,38.012
	c15.538,60.736,247.833-12.586,247.833-12.586s298.04-53.677,317.817-60.738c19.773-7.063,183.24,3.853,183.24,3.853l-9.502-32.358
	c-114.414-81.928-144.076-37.882-168.09-44.945c-24.015-7.063-19.775,9.888-25.427,11.3
	C645.766,348.301,576.555,304.512,565.255,305.925z"/>
<path id="path78" fill="#EEA575" d="M567.567,309.008c-11.303,1.412-54.07-41.412-29.664,15.538
	c29.664,69.213-103.114,69.213-132.776,49.438c-29.663-19.775,12.713,32.487,12.713,32.487c32.487,35.313-28.251,5.65-28.251,5.65
	c-60.738-22.6-103.113,22.601-108.763,24.013c-5.65,1.412-14.125,7.063-15.538-4.237s-13.746-39.604-70.626,5.649
	c-44.046,34.575-66.229-0.418-66.229-0.418l-7.769,9.953c-34.96-61.446-13.964,40.673-13.964,40.673
	c15.538,60.74,248.989-14.895,248.989-14.895s298.043-53.677,317.816-60.738c19.775-7.063,181.701,3.724,181.701,3.724
	l-9.374-33.259c-114.414-81.926-142.664-36.853-166.677-43.915c-24.014-7.062-19.775,9.888-25.426,11.3
	C648.081,351.383,578.868,307.595,567.567,309.008z"/>
<path id="path82" fill="#F1B288" d="M569.879,312.089c-11.3,1.412-57.144-39.994-29.663,15.538
	c33.9,68.507-103.115,69.213-132.778,49.438c-29.661-19.775,12.714,32.487,12.714,32.487c32.487,35.313-28.25,5.65-28.25,5.65
	c-60.738-22.6-103.114,22.601-108.764,24.013c-5.65,1.412-14.125,7.063-15.538-4.237c-1.413-11.3-13.514-39.309-70.626,5.649
	c-46.228,35.893-67.866,1.863-67.866,1.863l-8.475,7.317c-31.782-58.619-12.776,43.341-12.776,43.341
	C123.394,553.887,358,475.94,358,475.94s298.042-53.677,317.817-60.738c19.774-7.063,180.158,3.595,180.158,3.595l-9.244-34.156
	c-114.413-81.926-141.251-35.827-165.265-42.889c-24.013-7.062-19.774,9.888-25.426,11.3
	C650.393,354.464,581.179,310.676,569.879,312.089z"/>
<path id="path86" fill="#F3BF9C" d="M572.19,315.169c-11.303,1.413-57.813-39.656-29.665,15.538
	c36.021,70.627-103.113,69.214-132.776,49.439s12.713,32.488,12.713,32.488c32.487,35.313-28.25,5.65-28.25,5.65
	c-60.738-22.601-103.114,22.6-108.764,24.013c-5.65,1.412-14.125,7.063-15.538-4.237c-1.412-11.301-13.283-39.014-70.625,5.649
	c-48.412,37.208-69.503,4.141-69.503,4.141l-9.181,4.688c-28.25-53.322-11.59,46.004-11.59,46.004
	c15.538,60.738,251.301-19.519,251.301-19.519s298.041-53.677,317.816-60.738c19.775-7.063,178.619,3.466,178.619,3.466
	l-9.117-35.055c-114.414-81.926-139.84-34.799-163.853-41.862c-24.014-7.064-19.774,9.888-25.425,11.3
	C652.702,357.546,583.49,313.757,572.19,315.169z"/>
<path id="path90" fill="#F5CCB0" d="M574.501,318.252c-11.3,1.413-59.753-38.624-29.662,15.538
	c38.844,69.92-103.115,69.213-132.778,49.438c-29.662-19.775,12.714,32.488,12.714,32.488c32.486,35.313-28.251,5.65-28.251,5.65
	c-60.737-22.602-103.113,22.6-108.764,24.013c-5.65,1.412-14.125,7.063-15.538-4.237c-1.413-11.301-13.05-38.716-70.626,5.649
	c-50.594,38.524-71.14,6.422-71.14,6.422l-9.887,2.054c-25.427-50.145-10.401,48.668-10.401,48.668
	c15.538,60.74,252.455-21.829,252.455-21.829s298.043-53.677,317.816-60.738c19.775-7.063,177.078,3.339,177.078,3.339
	l-8.987-35.956c-114.414-81.926-138.428-33.771-162.439-40.834c-24.013-7.063-19.774,9.888-25.425,11.3
	C655.015,360.628,585.802,316.84,574.501,318.252z"/>
<path id="path94" fill="#F8D8C4" d="M576.813,321.335c-11.3,1.413-59.753-38.625-29.662,15.538
	c38.845,69.919-103.113,69.213-132.776,49.438c-29.662-19.775,12.713,32.488,12.713,32.488c32.488,35.313-28.25,5.65-28.25,5.65
	c-60.74-22.602-103.115,22.6-108.766,24.013c-5.65,1.412-14.125,7.063-15.538-4.238c-1.413-11.3-12.817-38.42-70.625,5.65
	c-52.777,39.84-72.776,8.701-72.776,8.701l-10.594-0.579c-24.015-46.615-9.213,51.332-9.213,51.332
	c15.538,60.738,253.609-24.143,253.609-24.143s298.042-53.675,317.817-60.736c19.775-7.063,175.538,3.21,175.538,3.21l-8.859-36.854
	c-114.416-81.926-137.016-32.744-161.027-39.807c-24.013-7.063-19.775,9.888-25.427,11.3
	C657.326,363.711,588.112,319.923,576.813,321.335z"/>
<path id="path98" fill="#FAE5D7" d="M579.124,324.417c-11.301,1.413-59.068-38.998-29.663,15.538
	c38.844,72.038-103.113,69.213-132.776,49.438c-29.662-19.775,12.714,32.488,12.714,32.488c32.486,35.313-28.251,5.65-28.251,5.65
	c-60.737-22.602-103.113,22.6-108.764,24.013c-5.652,1.412-14.127,7.063-15.54-4.238c-1.412-11.3-12.585-38.123-70.625,5.65
	c-54.959,41.157-74.413,10.979-74.413,10.979l-11.302-3.212c-22.954-42.375-8.025,53.999-8.025,53.999
	c15.538,60.738,254.769-26.455,254.769-26.455s298.04-53.675,317.814-60.736c19.775-7.063,173.997,3.082,173.997,3.082
	l-8.732-37.752c-114.413-81.928-135.602-31.718-159.613-38.781c-24.014-7.063-19.774,9.888-25.426,11.3
	S590.424,323.004,579.124,324.417z"/>
<path id="path102" fill="#FCF2EB" d="M581.435,327.498c-11.3,1.412-57.161-39.981-29.661,15.538
	c37.432,75.571-103.114,69.215-132.776,49.439c-29.663-19.775,12.713,32.488,12.713,32.488c32.487,35.313-28.251,5.649-28.251,5.649
	c-60.738-22.601-103.113,22.601-108.763,24.013c-5.65,1.413-14.125,7.063-15.538-4.237c-1.413-11.3-12.354-37.827-70.626,5.65
	c-57.145,42.473-76.053,13.258-76.053,13.258l-12.006-5.842c-22.6-40.964-6.836,56.661-6.836,56.661
	c15.538,60.736,255.921-28.766,255.921-28.766s298.043-53.676,317.817-60.737c19.775-7.063,172.454,2.951,172.454,2.951
	l-8.604-38.65c-114.415-81.926-134.188-30.688-158.2-37.751c-24.014-7.064-19.775,9.887-25.426,11.3
	C661.948,369.875,592.735,326.085,581.435,327.498z"/>
<path id="path106" fill="#FFFFFF" d="M120.44,466.182c-22.601-38.846-5.65,59.325-5.65,59.325
	c15.538,60.738,257.078-31.075,257.078-31.075s298.042-53.677,317.816-60.738c19.775-7.063,170.914,2.823,170.914,2.823
	l-8.475-39.55c-114.414-81.926-132.776-29.663-156.789-36.726c-24.013-7.063-19.775,9.888-25.426,11.3
	c-5.649,1.413-74.862-42.375-86.163-40.963c-11.3,1.412-55.829-40.623-29.663,15.538c39.245,84.232-107.28,66.436-132.777,49.438
	c-29.663-19.775,12.712,32.488,12.712,32.488c32.488,35.313-28.25,5.65-28.25,5.65c-60.737-22.602-103.113,22.602-108.764,24.014
	c-5.65,1.413-14.125,7.063-15.538-4.237c-1.413-11.302-12.121-37.532-70.625,5.65c-59.326,43.788-77.688,15.537-77.688,15.537
	L120.44,466.182z"/>
<path id="path110" d="M193.891,519.15c0,0-12.713,20.48,24.013,43.788c0,0,2.472,2.473-29.31-4.943c0,0-10.947-3.531-13.771-21.896
	c0,0-8.475-7.769-16.95-17.655C149.397,508.557,193.891,519.15,193.891,519.15z"/>
<path id="path114" fill="#CCCCCC" d="M441.08,435.104c0,0,31.249,47.356,30.193,55.797c-2.297,18.362-2.648,35.313,3.001,42.376
	c5.651,7.063,21.188,65.682,21.188,65.682s-0.706,2.119,21.188-64.976c0,0,20.48-28.25-14.831-60.738
	C501.82,473.244,439.668,422.392,441.08,435.104z"/>
<path id="path118" d="M229.204,566.47c0,0,19.775,12.713-5.65,67.802l11.3-4.237c0,0-1.413,19.774-7.063,24.013l12.712-5.65
	c0,0,8.475,14.127,1.413,22.602c0,0,29.663,14.125,28.25,25.425c0,0,11.3-14.125,4.237-25.425s-19.775-4.237-18.363-36.727
	l-15.538,5.65c0,0,9.888-15.538,9.888-26.838l-14.125,4.237c0,0,27.313-46.928,8.475-49.438
	C234.147,566.47,229.204,566.47,229.204,566.47z"/>
<path id="path122" fill="#CCCCCC" d="M286.41,596.133c0,0,4.944-7.769,0-6.355c-4.944,1.413-60.032,27.544-70.625,44.494
	C215.785,634.271,276.522,591.189,286.41,596.133z"/>
<path id="path126" fill="#CCCCCC" d="M304.773,610.258c0,0,4.944-7.769,0-6.355s-60.032,27.544-70.625,44.494
	C234.147,648.396,294.885,605.314,304.773,610.258z"/>
<path id="path130" fill="#CCCCCC" d="M328.079,583.42c0,0,4.944-7.769,0-6.355c-4.943,1.412-60.032,27.545-70.625,44.494
	C257.454,621.559,318.191,578.477,328.079,583.42z"/>
<path id="path134" fill="#CCCCCC" d="M287.117,660.402c0,0,0-10.595-4.944-9.183c-4.944,1.413-68.507,32.488-79.101,49.438
	C203.072,700.659,277.229,655.458,287.117,660.402z"/>
<path id="path138" fill="#CCCCCC" d="M289.235,641.333c0,0,2.119-8.475-2.825-7.063c-3.531,0-50.144,20.481-60.738,37.433
	C225.672,671.702,277.935,633.564,289.235,641.333z"/>
<path id="path142" fill="#CCCCCC" d="M263.81,725.378l-17.656,13.419c0,0,18.362-13.419,24.719-11.3
	c0,0-12.006,19.774-13.419,28.956c0,0,18.363-22.602,28.25-21.895c0,0,13.419,0.706,13.419,19.774c0,0,9.888-18.362,15.537-17.656
	c0,0,2.119,11.302,0,23.308c0,0,7.063-13.419,14.125-10.595c0,0,11.301-3.53,9.888,16.95c0,0,0,18.362-1.412,23.308
	c0,0,9.889-46.613,14.125-47.319c0,0,14.125-2.119,22.602,13.419c0,0-7.063-13.419,1.412-9.888c0,0,19.068,2.824,24.719,14.831
	c0,0-12.006-21.188-2.118-15.537c0,0,12.006,0,14.125,11.3c0,0,14.831,37.432,18.362,40.257c0,0-13.419-38.138-10.595-38.138
	c0,0-3.53-21.188,5.65,4.942c0,0-5.65-24.719,4.237-23.307c9.888,1.413,17.655,19.069,32.487,14.832
	c0,0,16.952,9.888,20.483-112.295L263.81,725.378z"/>
<path id="path146" d="M272.285,561.526c0,0,26.131-10.595,96.757,0c0,0,12.713,0.706,24.72-14.831
	c12.006-15.538,59.325-28.251,70.625-24.721l16.952,11.302l1.413,2.118c0,0,21.895,18.362,22.6,31.781
	c0.706,13.418-25.425,98.169-42.377,126.42c-16.949,28.25-33.899,50.145-67.801,45.906c0,0-36.726-7.063-81.926,0
	c0,0-51.557-2.825-56.5-16.95s19.775-40.963,19.775-40.963s7.769-14.831,5.65-40.257C280.054,615.908,280.76,566.47,272.285,561.526
	z"/>
<path id="path150" fill="#E5668C" d="M311.129,565.058c14.832,32.487-37.431,147.607-37.431,147.607
	c-3.531,2.825,22.353,13.499,40.256,9.182c19.327-4.657,90.401,2.825,90.401,2.825c41.669-27.544,64.27-105.938,64.27-105.938
	s18.364-42.376-12.713-48.025C424.837,565.058,311.129,565.058,311.129,565.058z"/>
<path id="path154" fill="#B23259" d="M307.543,619.608c5.873-22.582,8.67-43.419,3.586-54.552c0,0,110.177,11.301,129.951-25.426
	c7.488-13.904,33.55,40.257,32.842,57.207c0,0-111.236,25.426-137.367,5.65L307.543,619.608z"/>
<path id="path158" fill="#A5264C" d="M315.367,648.396c0,0,3.531,12.713-0.707,19.774c0,0-2.824,1.413-4.943,2.119
	c0,0,2.119,6.356,12.713,9.182c0,0,3.531,7.77,7.77,8.476s12.713,10.594,19.774,8.475c7.063-2.118,26.839-9.181,26.839-9.181
	s9.888-5.65,25.425,0.706c0,0,4.192-1.416,4.942-8.476c0.884-8.299,6.356-14.832,9.889-18.362
	c3.531-3.531,20.48-26.133,18.362-26.838C433.313,633.564,315.367,648.396,315.367,648.396z"/>
<path id="path162" fill="#FF727F" stroke="#000000" d="M307.598,562.938c0,0-4.943,39.552,0.707,54.383
	c5.649,14.832,4.237,18.362,2.824,25.426c-1.412,7.063,6.356,24.719,16.244,35.313l21.188,2.825c0,0,26.839-6.355,43.082-1.412
	c0,0,15.881,2.371,21.895-24.014c0,0,8.476-11.3,21.188-16.243c12.713-4.943,25.426-78.395,18.362-92.52
	c-7.063-14.126-32.488-21.896-60.738,5.648S360.567,550.227,307.598,562.938z"/>
<path id="path166" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M310.423,695.009c0,0-1.412-3.531-9.181-4.237
	c0,0-39.55-6.355-54.382-28.25c0,0-12.006-9.888-4.238,10.595c0,0,18.363,36.019,30.369,40.963
	C272.991,714.078,301.948,721.141,310.423,695.009z"/>
<path id="path170" fill="#CC3F4C" d="M451.572,582.058c1.163-13.96,4.61-29.169,1.515-35.361
	c-11.382-22.768-41.35-13.253-60.738,5.648c-28.25,27.544-31.78-2.118-84.751,10.595c0,0-3.081,24.653-1.598,42.332
	c0,0,65.867-20.438,67.28-10.551c0,0,2.823-5.649,19.067-5.649S448.747,587.001,451.572,582.058z"/>
<path id="path174" stroke="#A51926" stroke-width="2" d="M375.398,564.352c0,0,8.476,8.476,2.118,25.426
	c0,0-25.426,28.25-21.895,52.97"/>
<path id="path178" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M290.648,714.078c0,0-7.769-22.602,7.769-10.594
	c0,0,8.475,3.53,6.356,6.354C302.654,712.665,292.767,719.729,290.648,714.078z"/>
<path id="path182" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M299.547,716.196c0,0-6.215-18.08,6.215-8.476
	c0,0,7.806,4.322,5.084,5.085C302.795,715.066,310.847,719.587,299.547,716.196z"/>
<path id="path186" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M308.021,716.196c0,0-6.215-18.08,6.215-8.476
	c0,0,7.725,4.078,5.086,5.085C313.39,715.066,319.322,719.587,308.021,716.196z"/>
<path id="path190" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M319.675,716.55c0,0-6.215-18.08,6.215-8.476
	c0,0,7.739,4.118,5.087,5.085C325.749,715.066,330.977,719.939,319.675,716.55z"/>
<path id="path194" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M331.116,716.408c0,0-6.215-18.08,6.217-8.476
	c0,0,6.78,2.825,5.085,5.085C340.723,715.278,342.418,719.799,331.116,716.408z"/>
<path id="path198" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M342.911,717.609c0,0-8.477-21.896,7.769-10.595
	c0,0,8.476,3.531,6.356,6.355C354.917,716.196,357.036,721.847,342.911,717.609z"/>
<path id="path202" stroke="#A5264C" stroke-width="2" d="M292.767,687.24c0,0,23.307-4.944,33.9,0.706
	c0,0,10.594,2.119,12.713,1.412c2.118-0.706,7.77-1.412,7.77-1.412"/>
<path id="path206" stroke="#A5264C" stroke-width="2" d="M352.799,702.777c0,0,21.188-24.014,42.375-16.243
	c12.389,4.543,10.594-1.413,12.006-6.356c1.413-4.943,1.768-12.358,10.596-17.656"/>
<path id="path210" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M383.168,674.527c0,0-7.063-19.069-12.007,3.53
	c-4.944,22.602-10.594,28.957-13.419,33.9c0,0,0,9.182,14.831,8.476c0,0,19.068-0.707,19.774-5.649
	C393.055,709.84,390.23,689.358,383.168,674.527z"/>
<path id="path214" stroke="#A5264C" stroke-width="2" d="M407.887,687.24c0,0,6.356-4.237,10.594-2.119"/>
<path id="path218" stroke="#A5264C" stroke-width="2" d="M419.363,658.283c0,0,5.12-8.651,13.596-10.063"/>
<path id="path222" fill="#B2B2B2" d="M279.348,723.259c0,0,31.781,5.65,39.551,2.825c0,0,15.536,0,0.706,3.531
	c0,0-22.602,0-36.727-2.118C282.879,727.497,262.397,717.609,279.348,723.259z"/>
<path id="path226" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M304.066,558.701c0,0,31.075,0,34.606,1.412
	c0,0,12.713,54.382,6.356,67.801c0,0-2.118,4.944-7.063-4.943c0,0-32.488-57.913-38.138-61.443
	C294.177,557.996,301.948,558.701,304.066,558.701z"/>
<path id="path230" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M167.936,553.934c0,0,15.714,3.002,37.961,7.594
	c0,0,8.475,39.551,14.125,48.024c5.65,8.475-0.706,8.476-7.063,3.531s-32.488-29.663-36.019-37.432
	C173.409,567.882,167.936,553.934,167.936,553.934z"/>
<path id="path234" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M206.534,561.909c0,0,10.241,2.732,12.022,6.645
	c1.78,3.909-2.123,9.73-2.123,9.73s-1.766,5.835-3.888,2.018C210.424,576.483,205.353,562.958,206.534,561.909z"/>
<path id="path238" d="M206.603,561.526c0,0,6.356,9.182,12.713,9.182c6.356,0,7.031-0.729,12.006,0.353
	c8.122,1.767,7.416-1.766,19.069,0.354c4.661,0.848,9.181-0.706,14.125,1.412c4.944,2.119,10.594,0.706,12.713-2.825
	s10.594-10.946,10.594-10.946s-22.6,3.179-27.544,4.591C260.279,563.645,220.729,565.764,206.603,561.526z"/>
<path id="path242" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M285.351,561.879c0,0-11.389,6.182-12.095,10.418
	c-0.707,4.237,9.27,10.771,9.27,10.771s4.855,8.122,5.915,3.884C289.5,582.714,286.763,562.586,285.351,561.879z"/>
<path id="path246" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M219.166,571.527c0,0,12.372,19.754,12.755-0.041
	c0,0,0.983-2.223-2.124-2.261C219.07,569.092,221.756,561.85,219.166,571.527z"/>
<path id="path250" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M231.839,571.967c0,0,13.986,19.752,12.863-0.164
	c0,0,0.012-0.587-3.083-0.855C233.238,570.215,233.847,562.238,231.839,571.967z"/>
<path id="path254" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M244.575,571.98c0,0,14.054,18.766,12.873,1.697
	c0,0,0.21-2.177-2.71-2.708C247.866,569.725,247.494,563.987,244.575,571.98z"/>
<path id="path258" fill="#FFFFCC" stroke="#000000" stroke-width="0.5" d="M256.716,572.122c0,0,13.948,20.412,14.563,3.143
	c0,0,2.903-2.433-0.18-2.824C260.826,571.133,262.235,563.269,256.716,572.122z"/>
<path id="path262" fill="#E5E5B2" d="M192.845,578.354l-13.521-2.702c-4.591-8.828-8.299-19.688-8.299-19.688
	s11.212,1.767,33.282,6.709c0,0,1.547,5.858,4.146,16.091L192.845,578.354z"/>
<path id="path266" fill="#E5E5B2" d="M307.732,570.123c-2.942-4.425-5.268-7.528-6.416-8.245c-5.32-3.325,1.995-2.659,3.989-2.659
	c0,0,29.258,0,32.583,1.329c0,0,0.926,3.959,2.134,9.946C340.022,570.494,322.21,566.945,307.732,570.123z"/>
<path id="path270" fill="#CC7226" d="M402.378,326.201c48.945,6.992,94.004-55.936,97.112-73.028
	c3.106-17.092-14.762-38.067-14.762-38.067c2.33-5.438-6.216-30.298-15.537-46.613c-9.322-16.314-37.398-14.595-68.367-16.314
	c-27.968-1.554-60.599,39.621-62.928,42.729c-2.331,3.108,8.546,70.698,10.876,80.798s-2.33,56.712-2.33,56.712
	C406.897,316.349,353.434,319.209,402.378,326.201z"/>
<path id="path274" fill="#EA8E51" d="M339.182,196.051c-2.288,3.051,8.392,69.413,10.68,79.328
	c2.288,9.916-2.288,55.682-2.288,55.682c57.687-15.679,6.864-12.967,54.918-6.102c48.056,6.865,92.296-54.918,95.347-71.701
	c3.051-16.781-14.492-37.375-14.492-37.375c2.288-5.339-6.103-29.748-15.255-45.766c-9.153-16.018-36.717-14.328-67.125-16.018
	C373.506,152.573,341.47,193,339.182,196.051z"/>
<path id="path278" fill="#EFAA7C" d="M340.467,197.195c-2.245,2.995,8.235,68.127,10.481,77.859s-2.246,54.65-2.246,54.65
	c55.448-16.173,6.737-12.727,53.9-5.989c47.166,6.738,90.587-53.901,93.581-70.373c2.994-16.47-14.224-36.683-14.224-36.683
	c2.245-5.24-5.989-29.197-14.973-44.918c-8.984-15.721-36.037-14.063-65.882-15.721C374.155,154.522,342.713,194.2,340.467,197.195z
	"/>
<path id="path282" fill="#F4C6A8" d="M341.753,198.339c-2.204,2.938,8.079,66.842,10.282,76.391
	c2.204,9.548-2.203,53.619-2.203,53.619c51.974-15.961,6.61-12.487,52.885-5.876c46.275,6.611,88.877-52.884,91.815-69.043
	c2.938-16.161-13.956-35.993-13.956-35.993c2.203-5.142-5.876-28.646-14.69-44.07c-8.813-15.425-35.355-13.799-64.638-15.425
	C374.806,156.472,343.956,195.401,341.753,198.339z"/>
<path id="path286" fill="#F9E2D3" d="M343.038,199.483c-2.161,2.881,7.924,65.557,10.085,74.921
	c2.161,9.365-2.161,52.588-2.161,52.588c49.205-15.75,6.483-12.246,51.868-5.763c45.386,6.483,87.168-51.868,90.049-67.718
	c2.882-15.849-13.687-35.299-13.687-35.299c2.161-5.042-5.765-28.095-14.408-43.223c-8.646-15.128-34.677-13.534-63.396-15.128
	C375.455,158.421,345.199,196.602,343.038,199.483z"/>
<path id="path290" fill="#FFFFFF" d="M402.942,319.984c44.493,6.356,85.459-50.85,88.283-66.388
	c2.825-15.538-13.419-34.606-13.419-34.606c2.119-4.944-5.65-27.544-14.127-42.375c-8.475-14.831-33.995-13.267-62.149-14.831
	c-25.427-1.413-55.088,36.019-57.207,38.844c-2.119,2.825,7.769,64.27,9.888,73.451c2.119,9.182-2.119,51.557-2.119,51.557
	C397.116,310.45,358.448,313.628,402.942,319.984z"/>
<path id="path294" fill="#CCCCCC" d="M484.87,259.953c0,0-49.087,13.419-69.568,10.594c0,0-27.896-11.653-43.435,26.838
	c0,0-6.356,12.713-9.889,16.244C358.447,317.16,484.87,259.953,484.87,259.953z"/>
<path id="path298" d="M491.58,256.068c0,0-51.206,21.541-68.862,20.834c0,0-28.956-8.122-43.788,17.656
	c0,0-14.831,16.244-20.48,19.069c0,0-0.706,2.825,10.594-4.238l18.363,9.182c0,0,26.131,16.95,43.081-11.3
	c0,0,7.063-19.775,7.063-23.307c0-3.532,37.433-13.419,40.259-14.125C480.633,269.134,492.286,261.718,491.58,256.068z"/>
<path id="path302" fill="#99CC32" d="M407.887,319.479c-12.134,0-26.918-6.824-26.918-17.857c0-11.032,14.784-22.094,26.918-22.094
	c12.138,0,21.976,8.943,21.976,19.975C429.861,310.537,420.023,319.479,407.887,319.479z"/>
<path id="path306" fill="#659900" d="M401.489,290.021c-8.557,1.275-17.541,3.929-17.414,3.547
	c2.719-8.156,13.95-14.041,23.812-14.041c7.585,0,14.273,3.493,18.222,8.807C426.107,288.335,416.722,287.753,401.489,290.021z"/>
<path id="path310" fill="#FFFFFF" d="M422.718,289.616c0,0-7.769-5.65-7.769-1.766C414.949,287.85,421.306,295.619,422.718,289.616z
	"/>
<path id="path314" d="M405.063,303.963c-4.412,0-7.989-3.577-7.989-7.991c0-4.412,3.577-7.989,7.989-7.989
	c4.413,0,7.99,3.577,7.99,7.989C413.053,300.386,409.476,303.963,405.063,303.963z"/>
<path id="path318" fill="#CC7226" d="M221.435,280.434c0,0-5.65-37.432-1.413-45.2c0,0,19.069-17.657,18.363-24.013
	c0,0-0.706-31.782-2.825-33.194c-2.119-1.413-15.538-12.006-26.131-0.706c0,0-18.363,31.781-16.95,43.082v3.531
	c0,0-13.419-0.706-16.244,2.825c0,0-2.119,9.181-4.238,9.888c0,0-4.944,4.237-1.413,9.181c0,0-3.531,4.237-2.825,11.3l13.419,7.063
	c0,0,3.531,25.425,22.601,34.606C212.317,302.909,217.903,291.028,221.435,280.434z"/>
<path id="path322" fill="#FFFFFF" d="M219.669,277.186c0,0-5.085-33.688-1.271-40.681c0,0,17.162-15.891,16.527-21.611
	c0,0-0.636-28.604-2.543-29.875c-1.907-1.271-13.984-10.806-23.518-0.636c0,0-16.526,28.604-15.255,38.773v3.178
	c0,0-12.077-0.636-14.62,2.542c0,0-1.907,8.263-3.813,8.899c0,0-4.45,3.813-1.271,8.263c0,0-3.178,3.813-2.542,10.17l12.077,6.356
	c0,0,3.178,22.883,20.34,31.146C211.462,297.411,216.491,286.72,219.669,277.186z"/>
<path id="path326" fill="#EB955C" d="M234.765,179.775c-1.924-1.519-15.149-11.706-25.478-0.688c0,0-17.904,30.987-16.526,42.004
	v3.443c0,0-13.083-0.688-15.838,2.754c0,0-2.066,8.952-4.132,9.641c0,0-4.82,4.132-1.377,8.952c0,0-3.443,4.132-2.754,11.018
	l13.083,6.886c0,0,3.443,24.79,22.035,33.741c8.323,4.008,13.772-7.574,17.215-17.903c0,0-5.509-36.496-1.377-44.07
	c0,0,18.592-17.215,17.903-23.413C237.52,212.139,236.831,181.152,234.765,179.775z"/>
<path id="path330" fill="#F2B892" d="M233.971,181.523c-1.73-1.625-14.761-11.406-24.825-0.671c0,0-17.444,30.192-16.103,40.927
	v3.355c0,0-12.748-0.671-15.432,2.684c0,0-2.013,8.722-4.026,9.394c0,0-4.696,4.025-1.342,8.722c0,0-3.354,4.025-2.684,10.735
	l12.748,6.709c0,0,3.354,24.154,21.47,32.876c8.111,3.906,13.419-7.38,16.773-17.445c0,0-5.368-35.56-1.342-42.94
	c0,0,18.115-16.773,17.444-22.812C236.654,213.057,235.983,182.865,233.971,181.523z"/>
<path id="path334" fill="#F8DCC8" d="M233.176,183.271c-1.536-1.73-14.373-11.106-24.172-0.653c0,0-16.985,29.398-15.679,39.851
	v3.266c0,0-12.413-0.653-15.026,2.613c0,0-1.96,8.493-3.919,9.146c0,0-4.573,3.92-1.307,8.493c0,0-3.267,3.92-2.613,10.453
	l12.413,6.533c0,0,3.266,23.518,20.905,32.011c7.897,3.803,13.065-7.186,16.332-16.985c0,0-5.227-34.624-1.307-41.811
	c0,0,17.639-16.332,16.985-22.211C235.789,213.976,235.136,184.578,233.176,183.271z"/>
<path id="path338" fill="#FFFFFF" d="M219.669,277.009c0,0-5.085-33.512-1.271-40.504c0,0,17.162-15.891,16.527-21.611
	c0,0-0.636-28.604-2.543-29.875c-1.342-1.836-13.984-10.806-23.518-0.636c0,0-16.526,28.604-15.255,38.773v3.178
	c0,0-12.077-0.636-14.62,2.542c0,0-1.907,8.263-3.813,8.899c0,0-4.45,3.813-1.271,8.263c0,0-3.178,3.813-2.542,10.17l12.077,6.356
	c0,0,3.178,22.883,20.34,31.146C211.462,297.411,216.491,286.543,219.669,277.009z"/>
<path id="path342" fill="#CCCCCC" d="M214.195,265.956c0,0-38.138-18.01-39.727-19.422c0,0,16.067,14.479,17.48,14.479
	C193.361,261.013,214.195,265.956,214.195,265.956z"/>
<path id="path346" d="M184.003,255.009c0,0,32.488,6.356,32.488,14.125c0,5.141-0.429,28.834-9.888,26.131
	C191.772,291.028,198.128,265.603,184.003,255.009z"/>
<path id="path350" fill="#99CC32" d="M198.834,261.718c0,0,15.852,2.603,17.656,7.416c1.06,2.825,2.23,17.494-7.416,19.422
	C201.038,290.165,197.101,272.118,198.834,261.718z"/>
<path id="path354" d="M350.671,336.845c-0.878-3.076,1.438-2.845,4.601-3.794c3.53-1.06,25.071-7.769,26.483-12.359
	c1.413-4.591,24.719,3.178,24.719,3.178c3.18,1.412,10.947,6.003,10.947,6.003c8.476,2.119,20.128,2.825,20.128,2.825
	c4.238,1.766,10.241,6.709,10.241,6.709c25.778,18.009,47.674,5.297,47.674,5.297c35.313-11.653,24.72-42.022,24.72-42.022
	c-5.298-15.891,0.354-21.894,0.354-21.894c0.354-6.709,13.064,4.591,13.064,4.591c4.592,7.416,6.005,16.244,6.005,16.244
	c14.125,19.775,8.122-11.653,8.122-11.653c0.353-1.766-4.592-8.122-4.592-10.241s-3.179-8.122-3.179-8.122
	c-5.297-6.003-1.06-18.363-1.06-18.363c3.179-24.366-0.706-21.188-0.706-21.188c-2.118-3.178-18.362,14.478-18.362,14.478
	c-3.885,6.003-14.479,8.828-14.479,8.828c-4.942,3.178-10.946,0.707-10.946,0.707c-4.59-0.707-14.479,11.653-14.479,11.653
	c4.943-0.354,9.182,7.416,13.419,7.769c4.237,0.354,7.415-4.237,10.24-5.297c2.825-1.059,7.769,9.182,7.769,9.182
	c0.707,4.59-9.181,13.065-9.181,13.065c-0.707,8.122-3.531,5.297-3.531,5.297c-5.297-1.059-7.415,5.65-9.182,13.772
	c-1.766,8.122-9.182,8.829-9.182,8.829c-2.825,13.065-4.945,7.769-4.945,7.769c-0.354-9.888-10.947,0.353-10.947,0.353
	c-2.118,3.531-10.239-0.353-10.239-0.353c-12.008-3.531-7.77-7.063-7.77-7.063c3.178-3.884,22.953,0,22.953,0
	c3.884-2.825-10.241-9.888-10.241-9.888c-1.06-3.178,0.706-10.947,0.706-10.947c2.119-5.65,14.126-15.538,14.126-15.538
	c16.599-2.119,11.654-4.944,11.654-4.944c-10.946-9.182-21.189,4.237-21.189,4.237c-3.884,10.947-34.605,37.432-34.605,37.432
	c-8.476,6.003-3.884-6.003-10.947,0c-7.063,6.003-43.435-9.888-43.435-9.888c-20.414-2.106-25.238,25.688-31.47,20.18
	C343.93,331.689,353.496,346.732,350.671,336.845z"/>
<path id="path358" d="M694.629,43.132c0,0-45.201,14.125-50.145,47.319c0,0-4.237,40.256,31.78,71.332c0,0,0.707,11.3,4.238,16.95
	c0,0-2.825,8.475,30.368-4.944l48.025-14.832c0,0,11.301-4.238,20.481-19.775c9.181-15.538,36.019-48.731,29.662-93.226
	c0,0,2.119-19.775-8.475-20.481c0,0-14.832-2.825-27.544,10.594c0,0-12.008,5.65-16.244,4.944L694.629,43.132z"/>
<path id="path362" d="M791.069,41.384c0,0,3.708-15.767-4.837-7.222c0,0-12.432,10.1-25.641,10.1c0,0-25.637,3.884-33.404,27.191
	c0,0-6.992,47.39,6.99,57.489c0,0,8.546,13.207,20.978,1.554C767.587,118.843,794.954,65.467,791.069,41.384z"/>
<path id="path366" fill="#323232" d="M790.409,42.016c0,0,3.689-15.438-4.7-7.048c0,0-12.204,9.916-25.173,9.916
	c0,0-25.171,3.814-32.798,26.697c0,0-6.865,46.528,6.863,56.444c0,0,8.392,12.967,20.596,1.525
	C767.403,118.108,794.224,65.661,790.409,42.016z"/>
<path id="path370" fill="#666666" d="M789.749,42.648c0,0,3.673-15.11-4.563-6.875c0,0-11.978,9.732-24.705,9.732
	c0,0-24.705,3.743-32.191,26.202c0,0-6.738,45.667,6.737,55.399c0,0,8.234,12.727,20.213,1.497
	C767.22,117.374,793.492,65.855,789.749,42.648z"/>
<path id="path374" fill="#999999" d="M789.089,43.28c0,0,3.654-14.782-4.425-6.703c0,0-11.752,9.549-24.24,9.549
	c0,0-24.239,3.672-31.584,25.708c0,0-6.609,44.805,6.61,54.354c0,0,8.08,12.487,19.832,1.469
	C767.036,116.639,792.762,66.05,789.089,43.28z"/>
<path id="path378" fill="#CCCCCC" d="M788.429,43.912c0,0,3.638-14.454-4.287-6.529c0,0-11.527,9.365-23.773,9.365
	c0,0-23.772,3.602-30.978,25.213c0,0-6.482,43.943,6.483,53.309c0,0,7.924,12.247,19.45,1.441
	C766.851,115.904,792.03,66.244,788.429,43.912z"/>
<path id="path382" fill="#FFFFFF" d="M787.767,44.544c0,0,3.619-14.125-4.148-6.356c0,0-11.301,9.181-23.308,9.181
	c0,0-23.307,3.531-30.368,24.719c0,0-6.356,43.082,6.355,52.263c0,0,7.77,12.006,19.069,1.412
	C766.667,115.17,791.298,66.438,787.767,44.544z"/>
<path id="path386" fill="#992600" d="M414.243,403.323c0,0-36.021-33.901-50.146-35.313c0,0-60.738-7.063-86.87,24.719
	c0,0,31.076-36.019,79.807-26.131c0,0-38.138-7.769-60.032-2.119c0,0-29.663,0-46.613,24.719l-4.944,8.475
	c0,0,7.063-26.131,39.55-36.726c0,0,40.256-8.475,59.326,0c0,0-38.138-12.006-55.794-8.475c0,0-53.675-4.237-76.275,42.375
	c0,0,7.063-25.425,33.194-38.138c0,0,24.013-15.538,60.032-10.594c0,0,25.425,5.65,34.607,9.888
	c9.182,4.237,7.063-0.707-7.769-9.182c0,0-9.889-17.656-34.607-16.95c0,0-75.57,6.356-93.932,27.544
	c0,0,24.013-19.775,42.375-24.719c0,0,39.55-14.125,54.381-12.713c0,0,43.788,1.766,57.207-5.297c0,0-19.775,8.828-14.125,14.479
	c5.649,5.65,17.656,19.069,17.656,21.188s42.729,41.14,49.085,48.908L414.243,403.323z"/>
<path id="path390" fill="#CCCCCC" d="M658.607,745.857c0,0-27.367-64.445-49.438-81.221c0,0,45.906,28.251,52.086,60.032
	C661.256,724.67,661.256,742.326,658.607,745.857z"/>
<path id="path394" fill="#CCCCCC" d="M741.593,759.1c0,0-46.789-97.109-79.454-139.484c0,0,76.807,66.212,85.635,113.001
	l0.883,9.711l-5.297-4.414C743.358,737.912,742.476,753.803,741.593,759.1z"/>
<path id="path398" fill="#CCCCCC" d="M841.352,673.466c0,0-110.353-105.056-113.001-109.47c0,0,106.821,116.533,112.118,129.775
	C840.469,693.771,836.938,677.88,841.352,673.466z"/>
<path id="path402" fill="#CCCCCC" d="M508.528,750.271c0,0,34.43-91.813,67.977-52.087c0,0,26.485,17.656,25.604,22.953
	c0,0-7.063-11.477-38.846-10.594C563.263,710.545,529.716,705.248,508.528,750.271z"/>
<path id="path406" fill="#CCCCCC" d="M844.883,525.152c0,0-79.454-50.321-92.695-52.971c-20.848-4.168,87.398,51.204,96.228,69.743
	C848.414,541.926,851.945,537.512,844.883,525.152z"/>
<path id="path410" d="M578.803,713.371c0,0,36.02-3.531,48.025-15.537l7.769,6.356l31.075-67.802l6.356,9.183
	c0,0,25.426-26.132,24.013-40.257c-1.412-14.125,22.601,10.594,22.601,10.594s-1.413-20.481,11.301-8.477
	c0,0-4.237-27.544,10.594-13.419c0,0-18.604-53.246,21.188-7.769c9.889,11.3,2.119-0.706,2.119-0.706s-45.905-84.751-7.769-59.325
	c0,0,3.531-40.257,1.412-48.026c-2.118-7.769-5.649-47.319-14.125-56.502c-8.477-9.182,0.706-12.006,10.594-2.824
	c0,0-19.775-42.375,3.531-21.188c0,0-6.356-26.838-14.125-31.782c0,0-9.889-30.369,16.949-11.3c0,0-7.769-21.894-13.419-27.544
	c0,0-20.48-48.732-7.769-40.257l7.769,6.356c0,0-12.007-24.719-0.706-16.95s11.301,7.063,11.301,7.063s-37.433-58.62-1.412-27.544
	c0,0-14.406-24.574-20.481-36.726c0,0-33.193-36.019-7.77-24.719l8.476,2.825c0,0-15.538-17.656-29.663-20.481
	c-14.125-2.825,4.237-14.125,15.538-10.594c11.3,3.531,38.844,16.95,38.844,16.95s22.602,33.194,29.663,33.9
	c0,0-35.313-13.419-24.719,0.706c0,0,25.425,24.719,12.712,24.013c0,0-10.594,12.713-2.118,28.25c0,0-32.592-32.472-6.355,12.712
	l12.006,28.957c0,0-43.081-43.788-23.306-4.944c0,0,30.369,41.669,33.899,42.375c3.531,0.707,11.3,16.244,11.3,16.244l-7.769-3.531
	l9.181,15.538c0,0-19.774-21.188-9.181,2.119l9.887,25.425c0,0-36.019-38.844-12.006,13.42c0,0-28.957-9.183-13.419,21.188
	c0,0-2.825,28.252-2.119,37.434c0.707,9.183,2.825,59.325-4.942,73.451c-7.77,14.125,10.594,48.025,14.125,55.088
	c3.53,7.063,9.888,26.131-5.65,9.889c-15.537-16.244-7.769-6.356-4.237,9.181c3.531,15.538,14.125,43.082,12.713,52.97
	c0,0-2.118,2.119-7.769-4.236c0,0-26.132-40.258-23.307-14.832c0,0-2.119,14.125-7.77,29.663c0,0-5.649,19.068-5.649,3.53
	c0,0-5.65-29.663-10.595-16.244c-4.943,13.42-11.301,24.014-16.244,28.251c-4.942,4.237-14.125-36.02-16.243-17.656
	c0,0-21.188-21.895-29.662,7.063l-20.482,28.957c0,0-0.706-21.894-2.824-11.3C650.135,710.547,597.165,721.141,578.803,713.371z"/>
<path id="path414" d="M518.064,83.389c0,0-20.481-14.125-27.545-13.419c-7.063,0.706,48.731-15.538,121.477,33.194
	c0,0,8.476,4.944,14.832,4.238c0,0,5.648,4.237,0.706,10.594c0,0-15.538,16.95,4.237,36.725c0,0,32.487,12.006,22.601-3.531
	c0,0,19.069,7.063,23.307,14.125c4.238,7.062,2.118,0,2.118,0s-11.3-12.713-21.894-21.894c0,0-9.183-3.531-14.125-18.363
	c-4.944-14.832-9.183-32.488-1.413-38.138c0,0-7.063,7.769-5.649,0.706c1.412-7.063,7.77-13.419,10.594-14.125
	c2.825-0.707,31.781-28.604,43.788-29.31c0,0-16.244,2.472-21.541,0.706S617.293,23.003,606.7,20.884c0,0-29.662-11.653-8.476-8.122
	c0,0,63.211,6.709,95.346,30.016c0,0-12.713-14.832-45.2-27.191c0,0-39.197-22.247-101.349-13.419c0,0-31.429,5.65-45.2,8.828
	c0,0-4.591-1.06-5.65-1.766c-1.059-0.706-21.896-16.597-70.627-4.237c0,0-30.016,8.122-45.2,16.597c0,0-26.838,2.119-33.193,7.769
	c0,0-32.842,25.778-36.372,27.191c-3.531,1.413-23.66,14.831-25.072,15.538c0,0,43.435-11.653,47.672-15.891
	c4.238-4.237,34.96-8.828,39.197-6.356c4.238,2.472,19.069,1.413,2.119,2.472c0,0,133.483,26.132,134.896,29.663
	C511.002,85.507,518.064,83.389,518.064,83.389z"/>
<path id="path418" fill="#CC7226" d="M644.131,67.145c0,0-18.009-13.066-21.54-13.066c-3.532,0-25.426-18.009-32.842-17.303
	c-7.415,0.707-28.956-16.95-77.335-2.472c0,0-1.061-3.531,5.297-4.944c0,0,11.301-3.884,12.007-4.944c0,0,35.666-7.416,48.378-1.06
	c0,0,16.244,4.591,27.191,15.538c0,0,19.775,5.65,25.425,3.885c0,0,15.538,3.884,16.244,7.063c0,0,10.241,5.297,7.063,9.888
	C654.019,59.729,654.725,62.554,644.131,67.145z"/>
<path id="path422" fill="#CC7226" d="M622.112,63.421c1.425,1.116,3.224,1.289,4.292,2.717c0.413,0.554-0.099,1.13-0.653,1.301
	c-1.842,0.56-3.706-0.447-5.723,0.591c-0.71,0.366-1.844,0.044-2.819-0.219c-2.882-0.779-6.111-0.823-9.097,0.392
	c-3.505-1.994-7.672-0.962-11.348-2.73c-0.102-0.047-0.493,0.563-0.625,0.516c-5.378-2.021-11.985-1.522-16.278-5.555
	c-4.286-0.728-8.448-1.543-12.735-2.744c-3.21-0.899-5.697-2.645-8.558-4.114c-2.433-1.25-5.004-2.171-7.713-2.828
	c-3.289-0.798-6.521-0.601-9.864-1.519c-0.164-0.044-0.503,0.563-0.648,0.516c-0.57-0.191-1.084-1.22-1.386-1.127
	c-2.968,0.922-5.595-0.794-8.533-0.19c-2.08-2.161-5.131-1.729-7.859-2.509c-5.233-1.498-10.804,0.745-16.152-1.022
	c7.262-3.252,15.538-1.077,22.71-4.73c4.11-2.094,8.811-0.148,13.348-1.49c0.86-0.254,2.08-0.611,2.786,0.57
	c0.237-0.239,0.56-0.661,0.661-0.611c4.325,2.042,8.413,4.292,12.795,6.174c0.604,0.258,1.542-0.152,1.986,0.205
	c2.684,2.147,6.114,1.965,8.569,4.119c2.998-0.886,6.164-0.215,9.218-1.317c0.137-0.048,0.55,0.554,0.606,0.516
	c1.995-1.321,4.035-0.842,5.609-0.306c0.597,0.203,1.768,0.639,2.307,0.77c1.987,0.487,3.499,1.335,5.581,1.658
	c0.201,0.032,0.527-0.568,0.655-0.519c1.982,0.773,3.822,0.674,4.979,2.729c0.238-0.238,0.529-0.658,0.676-0.611
	c1.813,0.597,2.959,1.93,4.901,2.355c0.856,0.187,1.938,1.292,2.954,1.603c4.224,1.291,7.479,3.991,11.353,5.571
	C619.447,62.132,620.994,62.545,622.112,63.421z"/>
<path id="path426" fill="#CC7226" d="M486.804,38.296c-4.445-3.046-8.627-4.999-12.938-8.152c-0.32-0.235-0.955,0.065-1.313-0.15
	c-1.776-1.075-3.346-2.101-5.079-3.33c-0.952-0.674-2.4-0.655-3.299-1.11c-4.491-2.281-9.134-3.267-13.56-5.375
	c1.204-1.126,3.185-0.695,4.236-2.119c0.346,0.495,0.766,0.996,1.389,0.659c2.963-1.596,6.229-1.866,9.188-1.708
	c3.01,0.163,6.046,0.701,9.181,1.181c0.542,0.083,0.894,1.006,1.464,1.178c3.934,1.171,8.15,0.244,11.894,1.723
	c2.81,1.111,5.581,2.564,7.77,4.815c0.444,0.459-0.13,0.991-0.623,1.333c0.685-0.193,1.167,0.171,1.361,0.724
	c0.148,0.422,0.148,0.955,0,1.377c-0.196,0.551-0.689,0.729-1.351,0.819c-2.484,0.336,0.645-2.101-0.591-1.31
	c-2.248,1.438-0.932,3.92-2.246,6.159c-0.494-0.342-0.9-0.728-0.706-1.413c0.413,0.922-0.65,1.434-0.947,1.992
	C489.953,36.869,488.366,39.367,486.804,38.296z"/>
<path id="path430" fill="#CC7226" d="M429.424,51.27c-5.568-1.402-10.954-1.199-16.279-3.452c-0.117-0.049-0.512,0.563-0.625,0.516
	c-2.411-1.049-4.032-2.754-5.933-4.602c-1.612-1.568-4.539-0.884-6.789-1.744c-0.572-0.219-0.931-1.123-1.462-1.192
	c-2.152-0.277-3.789-1.953-5.634-2.961c4.124-1.404,8.381-1.349,12.729-2.027c0.199-0.031,0.455,0.535,0.69,0.535
	c0.24,0,0.47-0.39,0.706-0.627c0.345,0.495,0.878,1.07,1.331,0.622c0.968-0.953,1.949-0.618,2.902-0.547
	c0.255,0.018,0.476,0.553,0.709,0.553c0.24,0,0.473-0.549,0.707-0.549c0.239,0.001,0.472,0.549,0.706,0.549
	c0.24,0,0.471-0.39,0.706-0.627c1.223,1.381,2.784,0.403,4.235,0.719c1.833,0.401,2.305,2.428,4.201,2.954
	c8.324,2.302,15.629,6.09,23.333,9.774c0.542,0.26,0.912,0.698,0.719,1.384c0.471,0,1.023-0.155,1.359,0.078
	c1.867,1.292,3.706,2.26,4.937,4.199c0.381,0.599-0.199,1.317-0.61,1.226C444.243,54.292,437.17,53.219,429.424,51.27z"/>
<path id="path434" fill="#CC7226" d="M404.952,129.332c-2.813-2.152-3.842-5.738-5.834-8.902c-0.378-0.6,0.105-1.154,0.666-1.312
	c0.987-0.281,1.946,0.563,2.669,0.92c3.081,1.522,5.792,3.715,9.316,3.96c3.515,3.945,11.036,4.625,11.049,10.594
	c0.002,1.517-2.521-0.104-3.278,1.412c-4.328-1.771-8.546-1.589-12.748-4.179C405.702,131.152,406.285,130.353,404.952,129.332z"/>
<path id="path438" fill="#CC7226" d="M356.33,36.5c0.238,0.002,12.652,0.413,12.622,0.614c-0.079,0.546-13.729,2.398-14.37,2.098
	c-0.29-0.134-13.554,4.156-13.79,3.92C341.266,42.894,355.86,36.5,356.33,36.5z"/>
<path id="path442" d="M383.521,53.726c0,0-26.133,3.178-33.9,5.297c-7.77,2.119-40.609,15.538-45.907,19.069
	c0,0-23.66,9.535-53.675,44.848c0,0,13.419-6.003,17.303-10.947c0,0,24.013-22.247,23.66-17.656c0,0,21.541-15.185,20.481-11.3
	c0,0,43.082-19.775,39.551-14.125c0,0,38.138-8.122,36.372-4.591c0,0,33.192,7.769,28.25,8.122c0,0-10.241,2.119,1.06,8.475
	c0,0-6.003,7.769-15.538,0.707c-9.534-7.063-4.236-3.178-13.064-1.413c0,0-4.592,1.413-12.713-5.65c0,0-9.889-8.122-25.426-1.766
	c0,0-54.029,22.247-57.56,23.307c0,0-6.356,4.944-10.594,11.3c0,0-10.241,7.769-15.538,10.241c0,0-22.6,20.481-24.719,22.953
	c0,0-6.003,9.181-7.416,9.888c0,0,11.3-6.709,14.831-10.241c0,0,24.719-17.656,34.253-19.069c0,0,7.769-5.297,9.182-7.769
	c0,0,25.425-16.244,32.84-16.244c0,0,16.244,9.181,20.482-3.178c0,0,10.239-3.178,20.128-1.06c0,0,5.649-4.591,4.236-8.475
	c0,0,2.825-3.178,4.592,3.531c0,0,6.003,6.356,14.479,2.825c0,0,7.063-0.353,3.531,3.884c0,0-7.77,6.709-28.604,7.063
	c0,0-21.895,1.06-50.851,14.479c0,0-52.616,18.363-68.86,36.725c0,0-11.3,15.538-20.834,17.657c0,0-10.241,1.412-20.834,14.478
	c0,0,17.303-10.241,33.194-10.241c0,0,7.063-4.237,0.353,2.119c0,0-6.356,13.418-3.531,22.953c0,0-1.06,9.181-2.472,12.006
	c0,0-13.772,22.6-13.772,26.838c0,4.237,2.119,21.541,2.825,22.6c0.706,1.06-1.766-2.825,4.944,1.413
	c6.709,4.237,11.653,7.063,13.065,12.006c1.413,4.944-3.531-9.535-3.884-12.713c-0.353-3.178-7.769-15.891-6.356-20.128
	c0,0,1.766,1.766,3.178,4.237c0,0-1.059-1.06,0-7.416c0,0,1.413-9.182,3.885-14.832s6.003-12.359,6.709-13.772
	c0.707-1.413,0.707-11.653,3.178-7.063l6.003,4.59c0,0-4.944-4.59-1.06-8.475c0,0-1.766-9.888,1.413-14.479
	c0,0,12.359-14.832,15.185-16.597c2.826-1.765,0.353-1.059,0.353-1.059s10.594-7.416,0.353-4.591c0,0-7.063,2.825-12.359,2.825
	c0,0-13.419,3.531-6.356-3.885s24.719-16.95,31.429-16.597l1.413,2.825l19.775-4.237l-2.119,1.413c0,0-0.353-0.354,7.063-1.06
	s17.656,1.766,20.128-1.413c2.473-3.178,8.477-4.944,7.771-2.472c-0.706,2.472-1.061,6.003-1.061,6.003s8.828-10.241,7.77-6.356
	c-1.061,3.884-15.537,13.065-18.011,24.013l18.363-14.479l6.356-5.297c0,0,6.355,3.884,6.709,1.06
	c0.354-2.825,8.476-13.066,10.594-12.713c2.119,0.353,5.649-4.591,5.297,0c-0.353,4.591,13.066,14.125,13.066,14.125
	s5.648-3.178,8.122-0.706c2.472,2.472,9.887-34.96,9.887-34.96l44.142-18.716l76.983-6.003l-30.017-12.006L383.521,53.726z"/>
<path id="path446" stroke="#4C0000" stroke-width="2" d="M415.655,405.089c0,0-26.484-29.663-41.316-34.254
	c0,0-23.659-12.006-67.094,1.766"/>
<path id="path450" stroke="#4C0000" stroke-width="2" d="M368.689,368.363c0,0-44.494-14.125-71.687-6.709
	c0,0-32.488,3.531-47.319,27.897"/>
<path id="path454" stroke="#4C0000" stroke-width="2" d="M362.333,366.245c0,0-30.016-12.713-56.147-16.597
	c0,0-29.31-4.591-58.62,8.122c0,0-21.541,10.594-31.075,28.603"/>
<path id="path458" stroke="#4C0000" stroke-width="2" d="M364.099,366.951c0,0-27.19-19.422-28.957-21.894
	c0,0-12.358-19.422-35.313-20.128c0,0-37.785,1.413-68.154,15.538"/>
<path id="path462" d="M361.794,351.072c2.723,2.583,50.33,53.664,50.33,53.664c62.15,64.624,12.713,4.236,12.713,4.236
	c-13.419-8.475-29.663-41.669-29.663-41.669c-2.119-4.944,24.719,12.713,24.719,12.713c7.063,1.412,31.075,35.313,31.075,35.313
	c-12.006-4.237-3.53,8.476-3.53,8.476c4.943,3.531,40.965,31.077,40.965,31.077c6.355,7.063,13.419,9.888,13.419,9.888
	c24.719-9.182,13.419,14.125,13.419,14.125c4.236,12.007,14.125-8.476,14.125-8.476c19.774-29.664-9.182-25.425-9.182-25.425
	c-52.972,4.942-64.978-23.31-64.978-23.31c-4.238-4.236,11.3,0,11.3,0c14.833,3.531-12.713-21.894-12.713-21.894
	c4.237,0,20.481,12.006,20.481,12.006c18.363,16.244,21.896,12.713,21.896,12.713c31.782-15.538,50.146-2.119,50.146-2.119
	c3.53,2.825-6.356,14.832-3.531,24.016c2.825,9.182,11.3,31.075,11.3,31.075c-4.237,2.824-3.531,21.895-3.531,21.895
	c29.663,40.963,12.713,37.432,12.713,37.432c-27.544-0.707-1.411,12.712-1.411,12.712c5.648,3.531,21.188,16.244,21.188,16.244
	c-4.944-2.119-7.769,7.063-7.769,7.063c8.475,7.063,3.53,15.538,3.53,15.538c-10.594,2.118-12.713,9.181-12.713,9.181
	c12.006,14.126-5.649,14.832-5.649,14.832c6.355,7.769-2.118,28.956-2.118,28.956c-8.477,0-19.775,9.888-19.775,9.888
	c4.237,8.477-14.125,18.363-14.125,18.363c-14.832,2.824-9.888,14.831-9.888,14.831c-14.125,10.594-18.363,38.844-18.363,38.844
	c-1.412,18.363-5.648,24.014,3.531,20.481c9.182-3.531,7.77-25.425,7.77-25.425c-8.476-27.545,67.095-55.795,67.095-55.795
	c7.063-2.824,8.476-12.007,8.476-12.007c3.531,0.706,19.069,14.125,19.069,14.125c13.418,19.775,14.125,3.531,14.125,3.531
	c2.118-6.356-0.707-16.95-0.707-16.95c10.595-38.138-14.125-49.438-14.125-49.438c-17.656-59.326,7.063-44.494,7.063-44.494
	c4.944,9.888,24.014,19.068,24.014,19.068l6.355-4.237c-2.824-8.477,12.007-19.069,12.007-19.069
	c4.943,11.301,15.537-2.824,15.537-2.824c6.356-43.082,28.251-17.656,28.251-17.656c7.063,2.119,9.182-9.889,9.182-9.889
	c6.355-18.361,0-42.375,0-42.375c6.355-0.706,23.307,9.889,23.307,9.889c4.944-6.356-11.3-36.021-4.237-31.781
	c7.063,4.237,14.831,7.063,14.831,7.063c1.413-3.53-16.243-25.426-16.243-25.426c-7.77-4.945-16.949-40.965-16.949-40.965
	c12.712,6.356-4.944-20.481-4.944-20.481c0-5.65,10.594-25.425,10.594-25.425c-1.412-12.006,0-11.3,0-11.3
	c4.944,2.119,19.069,4.944,7.063-6.356c-12.006-11.3,1.413-19.775,1.413-19.775c7.769-4.944-16.244-4.238-16.244-4.238
	c-9.183-7.769-8.477-14.831-8.477-14.831c14.126,3.531-11.3-21.894-15.536-28.25c-4.237-6.356,12.713-15.538,12.713-15.538
	c23.307-6.356,2.823-12.006,2.823-12.006c-34.605,0.706-15.536-18.363-15.536-18.363c10.594,0.707,7.769-3.531,7.769-3.531
	c-9.181-2.119-26.132-13.419-26.132-13.419c-7.063-6.356-0.706-4.944-0.706-4.944c29.663,2.119-21.188-17.656-21.188-17.656
	c14.125,0-17.655-18.363-17.655-18.363c-3.531-2.825-9.183-16.244-9.183-16.244c-10.594-9.182-19.067-21.188-19.067-21.188
	c-0.707-7.769-9.183-16.244-9.183-16.244c-20.48-24.013-30.369-23.307-30.369-23.307c-26.132-6.356-35.313-4.944-35.313-4.944
	l-93.229,7.769c-46.612,22.6-32.842,59.679-32.842,59.679c11.301,14.831,27.544,8.122,27.544,8.122
	c8.122-10.947,28.604-7.063,28.604-7.063c36.021,5.65,31.431-0.706,31.431-0.706c-4.237-8.122-32.843-19.069-33.196-20.128
	c-0.353-1.06-15.891-7.063-15.891-7.063c-5.297-2.119-13.065-18.363-13.065-18.363c-5.649-6.003,22.247,4.238,22.247,4.238
	c-2.119,1.766,10.947,8.828,10.947,8.828c30.724-1.766,49.439,17.303,49.439,17.303c19.068,29.31,19.422,14.832,19.422,14.832
	c4.943-16.597-15.892-54.029-15.892-54.029c0.706-3.531,15.186,8.122,15.186,8.122c2.472-3.531,3.885,6.709,3.885,6.709
	c0.353,4.237,7.063,18.362,7.063,18.362c4.942,22.954,11.3,9.888,11.3,9.888l8.122,16.597c2.472,4.591-8.122,18.01-8.122,18.01
	c-0.354,4.944,1.06,4.59-8.828,18.009s-3.885,21.188-3.885,21.188c-2.473,11.653,13.064,10.947,13.064,10.947
	c4.591,3.884,10.595,3.884,10.595,3.884c3.179,3.531,7.415,2.472,7.415,2.472c2.825-6.709,13.772-3.178,13.772-3.178
	c2.472-4.238,16.95-4.944,16.95-4.944c1.766-4.591,2.472-7.416,8.475-8.475c6.004-1.06-37.432-76.982-37.432-76.982
	c11.301-1.413-3.179-23.307-3.179-23.307c-3.885-11.653,16.244,14.125,20.128,16.597c3.886,2.472,5.65,6.356,2.825,6.003
	s-6.003,3.532-3.531,3.885c2.473,0.354,25.427,26.837,31.43,44.847c6.003,18.01,16.597,25.072,27.544,35.666
	c10.947,10.594,9.534,53.322,9.534,53.322c-0.706,15.538,9.888,34.253,9.888,34.253c3.531,6.709-3.885,38.844-3.885,38.844
	c-3.531,3.884-1.06,5.297-1.06,5.297c1.767,2.119,13.771,25.425,13.771,25.425c-3.178-0.353,3.179,6.003,3.179,6.003
	c9.181,10.594-2.119,5.297-2.119,5.297c-10.594-2.825,1.767,14.479,1.767,14.479c2.119,3.178-13.772-4.944-13.772-4.944
	c-16.243-1.06,4.238,11.653,4.238,11.653c15.185,12.713-4.944,4.943-4.944,4.943c-8.122-3.179-2.472,8.828-2.472,8.828
	c5.649,2.824,36.02,15.186,36.02,15.186c0.706,6.711-4.591,15.539-4.591,15.539c0.706,7.063-3.179,13.064-3.179,13.064
	c-2.118,14.479-3.178,15.891-3.178,15.891c-7.416,0.354-20.481,24.721-20.481,24.721c-3.179,4.591-21.188,25.777-21.188,25.777
	c-3.531,12.359-35.313-0.354-35.313-0.354c-11.653,6.003-8.122,0-8.122,0c-0.706-3.884,7.771-14.479,7.771-14.479
	c12.358-4.59,7.769-23.658,7.769-23.658c7.063-2.473-12.713-7.416-12.359-9.534c0.354-2.119,10.595-4.591,10.595-4.591
	c14.125-3.531,6.355-7.77,6.355-7.77c-1.06-7.063,4.237-16.95,4.237-16.95c20.48-1.413,0-30.019,0-30.019
	c-19.068-13.418-20.835-23.659-20.835-23.659c22.247-14.478,7.77-36.372,8.122-42.729c0.354-6.356,2.473-44.494,2.473-44.494
	c-3.531-10.947-8.828-34.96-8.828-34.96c3.885-9.181,16.949-31.428,16.949-31.428c4.944-7.416,20.481-15.891,16.598-21.188
	c-3.885-5.297-17.655-2.119-17.655-2.119c-13.772-2.472-12.713,6.709-12.713,6.709c-2.825,1.766-4.237,10.594-4.237,10.594
	c-1.273,14.007-16.95,25.072-16.95,25.072c-19.775,10.947-3.531,18.01-3.531,18.01c10.595,11.653-6.71,12.006-6.71,12.006
	c-19.422-3.178-4.942,14.831-4.942,14.831c19.067,22.601,13.771,27.544,13.771,27.544c-18.009,1.766,4.237,18.009,4.237,18.009
	s-1.412-3.531-1.06-0.353c0.354,3.178,5.649,10.594,7.063,14.125c1.412,3.531-5.65,3.885-5.65,3.885
	c1.061,16.95-26.132,9.534-26.132,9.534s0,0-2.824,0.353c-2.824,0.354-22.601-1.059-32.841-4.944
	c-10.241-3.884-22.248-3.884-22.248-3.884s-7.063,3.178-20.481,2.825s-27.544,4.59-27.544,4.59
	c-7.771-0.706,7.415-8.475,7.769-8.122s10.24-9.535-3.885-8.475c-38.485,2.887-57.561-15.185-57.561-15.185
	c-3.53-2.472-8.122-7.416-8.122-7.416c-17.655-3.531,2.473,21.894,2.473,21.894c2.119,2.472-0.354,4.238-0.354,4.238
	c-1.413-2.825-15.185-12.359-15.185-12.359C368.316,357.817,365.91,355.461,361.794,351.072z"/>
<path id="path466" fill="#4C0000" d="M319.604,330.579c0,0,20.481,9.887,25.072,14.831c4.591,4.944,29.311,25.072,29.311,25.072
	s-9.535-3.531-14.125-6.709c-4.592-3.178-23.66-17.656-23.66-17.656S329.492,335.522,319.604,330.579z"/>
<path id="path470" fill="#99CC32" d="M217.181,275.496c0.595-0.261-0.33-5.05-0.69-6.008c-1.804-4.813-17.656-7.416-17.656-7.416
	c-0.401,2.41-0.498,5.229-0.311,8.121C198.523,270.192,207.119,279.936,217.181,275.496z"/>
<path id="path474" fill="#659900" d="M217.181,275.143c-0.793,0.279-0.026-4.827-0.337-5.655
	c-1.804-4.813-18.009-7.592-18.009-7.592c-0.401,2.41-0.498,5.228-0.311,8.12C198.523,270.015,206.06,279.053,217.181,275.143z"/>
<path id="path478" d="M209.428,275.395c-1.104,0-1.997-2.013-1.997-4.495c0-2.481,0.894-4.494,1.997-4.494
	c1.104,0,1.999,2.013,1.999,4.494C211.427,273.382,210.532,275.395,209.428,275.395z"/>
<path id="path486" d="M128.915,448.525c0,0-9.888,17.655,33.9,7.063c0,0,24.719-2.119,28.957-6.355
	c2.119,1.411,16.89,6.591,21.894,7.769c12.006,2.825,26.838-14.833,26.838-14.833s8.122-18.539,13.066-18.539
	c4.944,0-0.707,2.825-0.707,2.825s-11.653,17.834-10.947,20.659c0,0-9.181,35.313-37.432,36.726c0,0-28.515,1.678-26.131,12.007
	c0,0,15.538-4.237,19.775,0c0,0,19.069-0.707,4.944,10.595l-12.006,20.48c0,0,0.247,6.918-17.656,0.706
	c-17.303-6.003-35.489-28.78-35.489-28.78S109.758,473.156,128.915,448.525z"/>
<path id="path490" fill="#E59999" d="M126.796,455.588c0,0-3.531,16.95,61.444-1.413c0,0,7.769,0,12.007,1.413
	c4.237,1.412,25.425,6.356,28.957,4.237c0,0-12.713,24.013-33.194,21.188c0,0-23.307,2.825-22.6,11.302
	c0,0,7.063,12.712,15.538,16.949c0,0,4.944,4.237,4.237,9.888c-0.706,5.649-5.65,8.476-9.181,9.888
	c-3.531,1.413-9.181-4.237-12.006-4.237s-17.656-11.3-25.425-19.774c-7.769-8.476-22.6-29.662-21.894-34.606
	C125.384,465.476,126.796,455.588,126.796,455.588z"/>
<path id="path494" fill="#B26565" d="M132.446,486.398c4.591,6.974,10.241,14.39,14.125,18.627
	c7.769,8.476,22.6,19.774,25.425,19.774c2.825,0,8.475,5.65,12.006,4.237c3.531-1.412,8.475-4.237,9.181-9.888
	c0.707-5.649-4.237-9.888-4.237-9.888c-5.414-2.707-10.251-8.873-13.04-12.975c0,0,0.327,4.499-8.854,3.087
	c-9.181-1.413-18.363-6.356-21.188-12.007c-2.825-5.65-7.063-9.888-4.238-3.531s7.063,12.713,9.888,13.419
	c2.825,0.706,2.119,2.825-2.119,2.119c-4.238-0.707-9.182-1.413-16.95-10.594L132.446,486.398L132.446,486.398z"/>
<path id="path498" fill="#992600" d="M127.855,449.231c0,0,3.178-24.016,5.297-31.077c0,0-1.413-12.007,2.825-19.422
	c4.237-7.417,7.769-18.363,13.066-27.897s5.65-16.597,12.712-19.422c7.062-2.825,17.656-18.01,22.6-19.775
	c4.944-1.765,4.591-0.353,4.591-0.353s12.006-26.131,36.019-19.069c0,0-28.604-4.944-0.706-21.541c0,0-8.475,1.942-2.648-10.417
	c3.886-8.242,3.001,3.708-16.421,24.542c0,0-8.828,15.185-18.009,20.481c-9.181,5.297-30.369,17.657-32.488,24.366
	c-2.119,6.709-7.769,16.95-11.3,19.775c-3.531,2.825-8.475,10.241-9.181,16.244c0,0-2.119,7.063-4.591,9.181
	c-2.472,2.119-2.825,7.769-2.825,11.299c0,3.532-3.531,8.477-3.178,12.714c0,0,1.412,33.549,0.706,37.079L127.855,449.231z"/>
<path id="path502" fill="#FFFFFF" d="M112.671,457.354c0,0-3.531-2.472-11.3,8.122c0,0,12.889,58.267,12.889,60.738
	c0,0,1.942-3.708-0.354-16.421c-2.295-12.713-3.884-35.137-3.884-35.137L112.671,457.354z"/>
<path id="path506" fill="#992600" d="M150.809,350.354c0,0-31.076,5.65-30.369,57.207l-1.413,43.79c0,0-2.119-45.202-4.238-48.026
	c-2.119-2.825,4.944-22.601-0.706-12.007c0,0-24.719,24.719-10.594,62.152c0,0,2.648,5.827-2.648-2.295
	c0,0-8.122-22.249-6.18-33.549c0,0,0.353-3.885,3.708-8.828c0,0,15.185-20.659,19.952-24.72c0,0,3.178-25.425,30.369-34.606
	C148.69,349.471,158.754,345.41,150.809,350.354z"/>
<path id="path510" d="M396.939,233.468c1.164-0.625,1.148-2.338,2.174-2.644c2.027-0.607,2.317-2.491,3.231-3.875
	c1.542-2.329,1.883-5.036,2.91-7.668c0.48-1.236,0.527-2.922-0.024-4.087c-2.072-4.381-3.313-8.705-5.858-12.988
	c-0.473-0.794-0.937-2.196-1.29-3.252c-0.817-2.443-3.037-4.193-4.556-6.524c-0.51-0.779,0.419-2.412-0.847-2.56
	c-1.584-0.186-4.143-1.209-4.554,0.602c-1.038,4.568,0.747,9.022,2.456,13.334c-1.381,1.222-0.791,2.848-0.522,4.202
	c1.255,6.367-0.86,12.286-2.204,18.419c-0.041,0.184,0.563,0.533,0.514,0.643c-2.158,4.743-4.722,9.06-7.935,13.264
	c-1.338,1.751-2.878,3.369-3.755,5.246c-0.649,1.39-1.37,3.095-0.929,4.84c-6.065,4.908-10.038,11.697-14.647,18.488
	c-0.815,1.201-0.303,3.335,0.672,3.811c1.435,0.703,3.123-1.105,3.953-2.599c0.687-1.232,1.31-2.38,2.177-3.516
	c0.233-0.309-0.081-1.049,0.157-1.262c4.647-4.144,7.596-9.328,11.927-13.509c3.442-0.581,6.157-2.343,9.243-4.131
	c0.544-0.316,1.469,0.124,1.98-0.221c3.095-2.078,3.091-5.673,3.278-9.045C394.58,236.872,394.927,234.547,396.939,233.468z"/>
<path id="path514" d="M381.329,225.583c0.22-0.136-0.055-0.883,0.138-1.264c0.286-0.572,0.998-0.904,1.284-1.476
	c0.192-0.381-0.096-1.052,0.146-1.303c4.118-4.321,4.572-9.66,2.743-14.909c1.809-1.095,1.915-3.323,1.165-4.818
	c-1.506-3.002-1.847-6.402-3.567-9.127c-1.416-2.24-4.202-4.437-6.623-2.136c-0.743,0.706-1.311,2.096-0.819,3.353
	c0.113,0.288,0.616,0.545,0.568,0.69c-0.188,0.572-1.152,0.967-1.163,1.448c-0.053,2.641-1.737,5.309-0.625,7.656
	c1.363,2.876,2.809,6.155,4.003,9.291c-2.179,3.736-0.355,8.06-3.45,11.374c-0.24,0.258-0.225,0.939-0.009,1.296
	c0.516,0.858,1.231,1.575,2.09,2.091c0.357,0.213,0.972,0.217,1.324-0.002C379.553,227.106,380.256,226.247,381.329,225.583z"/>
<path id="path518" d="M492.233,207.377c2.451,3.164,2.964,8.099-0.653,10.554c0.971,5.842,6.888,2.348,10.594,1.412
	c-0.191-0.685,0.208-1.292,0.708-1.301c1.866-0.026,3.066-1.849,4.941-1.523c0.767-2.75,3.659-3.989,4.796-6.425
	c3.048-6.524,2.004-14.069-2.559-19.8c-0.356-0.449,0.025-1.361-0.192-2c-1.335-3.904-4.986-4.46-8.401-5.675
	c-2.078-6.842-3.245-13.959-6.354-20.481c-2.851-0.441-4.082-3.512-6.443-4.783c-2.354-1.27-3.355,1.519-3.284,3.365
	c0.014,0.362,0.812,0.757,0.512,1.402c-0.136,0.29-0.595,0.486-0.595,0.722c0.002,0.238,0.394,0.47,0.629,0.707
	c-1.62,1.448-4.134,2.29-4.653,4.312c-1.686,6.55,2.857,12.068,5.804,17.72c1.044,2.004-0.256,4.249-1.598,6.381
	c-0.773,1.227-0.583,3.217-0.097,4.729C486.714,200.806,489.521,203.876,492.233,207.377z"/>
<path id="path522" d="M426.622,239.84c-2.626,3.268-8.65,7.804-3.5,11.208c0.343,0.228,0.996,0.234,1.302-0.002
	c3.568-2.763,7.104-4.357,11.405-5.385c0.22-0.051,0.703,0.773,1.354,0.489c2.849-1.242,6.397-1.139,8.487-3.501
	c6.651,0.396,12.946-1.575,18.934-3.884c2.051-0.791,4.293-1.778,6.412-2.665c2.431-1.017,4.557-2.655,6.521-4.67
	c0.233-0.24,0.858-0.082,1.331-0.082c-0.07-1.523,1.628-1.748,2.063-2.846c0.163-0.41-0.102-1.109,0.133-1.289
	c3.775-2.878,5.399-6.441,3.336-10.638c-0.504-1.021-0.942-2.112-1.941-2.952c-1.916-1.608-3.862-0.101-5.711-0.637
	c-0.28,1.108-1.567,0.805-2.249,1.155c-1.517,0.775-3.87-0.258-5.387,0.515c-2.405,1.227-4.598,1.526-7.106,2.191
	c-0.552,0.145-1.925-0.025-2.208,1.083c-0.236-0.237-0.497-0.65-0.685-0.611c-3.369,0.699-5.595,1.077-7.892,4.064
	c-0.182,0.235-0.962-0.081-1.243,0.157c-1.688,1.427-2.403,3.605-4.349,4.792c-0.354,0.217-0.977-0.079-1.319,0.148
	c-1.141,0.761-1.787,1.893-2.922,2.682c-0.581,0.404-1.287-0.169-1.229-0.622c0.433-3.438,1.585-6.593,0.569-9.905
	c3.667-4.449,8.111-7.891,11.301-12.713c0.025-3.824,1.248-7.613,1.049-11.28c-0.019-0.341-0.526-1.635-0.748-2.248
	c-0.552-1.508,1.049-3.39-0.441-4.668c-2.479-2.124-4.761-0.578-6.216,1.953c-3.245,0.688-6.893,1.912-9.679-0.267
	c-1.778-1.39-2.799-2.989-4.21-4.854c-1.738-2.299-1.147-4.834-1.023-7.596c0.011-0.226-0.546-0.466-0.546-0.703
	c0.002-0.238,0.391-0.47,0.627-0.706c-1.246-1.105-1.731-2.974-3.531-3.532c0.538-1.928-0.654-3.489-2.192-4.022
	c-3.522-1.22-6.483,2.156-9.823,2.285c-0.908,0.034-1.732-1.799-2.878-2.373c-0.764-0.381-2.006-0.439-2.646,0.03
	c-1.215,0.89-2.255,1.091-3.593,1.453c-2.854,0.77-5.11,2.701-7.725,4.211c-2.622,1.513-4.31,4.05-6.216,6.381
	c-1.661,2.034-1.901,6.296,0.605,7.179c3.254,1.148,5.557-3.625,9.027-3.049c0.551,0.09,0.915,0.639,0.721,1.324
	c0.688,0.193,1.071-0.212,1.412-0.706c1.515,1.799,3.57,2.394,5.227,3.936c1.714,1.596,4.796,0.858,6.589,2.619
	c2.698,2.652,1.712,7.386,5.136,9.69c-1.034,2.318-2.106,4.573-2.698,7.092c-0.497,2.129,1.258,4.243,3.396,4.082
	c2.222-0.166,2.684-1.506,3.54-3.406c0.472,0.472,1.3,0.996,1.228,1.377c-0.807,4.214-2.62,7.733-3.429,12.025
	c-0.104,0.56-0.644,0.917-1.33,0.722c-0.826,7.326-7.98,11.553-12.475,17.141c-0.712,0.886-0.719,3.092,0.004,3.803
	c2.478,2.449,5.938-0.281,8.938-1.169c0.376-2.129,1.893-3.792,4.245-3.694c0.452,0.018,0.866-0.939,1.438-1.169
	c0.614-0.244,1.501,0.152,2.007-0.198c3.053-2.11,5.539-4.063,8.606-6.162c0.339-0.231,0.946,0.05,1.328-0.141
	c0.574-0.286,0.904-0.969,1.475-1.296c0.614-0.353,1.041,0.159,1.383,0.653c-1.142,0.616-1.147,2.306-2.176,2.663
	c-1.367,0.473-2.358,1.379-3.549,2.168c-0.516,0.341-1.68-0.097-1.862,0.219C429.966,237.508,427.875,238.281,426.622,239.84z"/>
<path id="path526" d="M328.785,152.602c0,0-16.312-5.071-36.019,40.257c0,0-4.238,9.181-8.475,12.712
	c-4.238,3.531-24.013,9.888-27.544,16.95l-18.363,28.25c0,0,26.131-28.25,31.782-32.488c0,0,14.125-14.832,8.475-2.825
	c0,0-24.719,19.069-22.601,35.313c0,0-9.887,25.425-11.3,28.957c0,0,28.25-56.5,32.488-58.62c4.237-2.119,6.356-2.119,4.237,4.238
	c-2.119,6.357-2.825,35.313-7.769,38.844c0,0,14.125-36.02,12.712-41.669c0,0,5.65-6.356,9.888,2.825l-2.119,28.25l7.769,21.188
	c0,0-4.237-19.775-1.413-47.319c0,0-3.531-18.363,3.531-8.475c7.062,9.888,24.013,20.481,24.013,28.957
	c0,0-9.181-31.075-25.425-39.55l-7.063,10.594l-2.119-3.531c0,0-6.356-1.413,1.413-13.419c7.769-12.006,7.063-13.419,7.063-13.419
	s11.3,12.713,14.125,12.713c0,0,23.307-13.419,25.425,29.663c0,0,12.007-25.425-4.237-37.432c0,0-26.132-3.531-24.013-12.712
	l12.713-21.894c6.356-9.182,3.531-4.238,3.531-4.238L328.785,152.602z"/>
<path id="path530" d="M293.473,181.558c0,0-22.6,0-28.25,9.181l-12.713,16.95c0,0,30.369-17.656,37.432-19.775
	S293.473,181.558,293.473,181.558z"/>
<path id="path534" d="M222.847,192.858c0,0-3.531,2.119-4.238,7.063c-0.706,4.944-4.944,5.65-3.531,10.594
	c1.413,4.944,4.944,9.182,4.944,2.119c0-7.063,2.825-10.594,4.238-12.712C225.672,197.802,228.497,190.033,222.847,192.858z"/>
<path id="path538" d="M207.31,300.916c0,0-14.832-7.063-20.481-13.419c-5.65-6.356-4.852,2.765-13.419,2.119
	c-10.324-0.779-8.475-28.957-8.475-28.957l-7.063,13.418c0,0-2.119,25.425,12.006,21.188c6.898-2.069,9.181,0.706,6.356,2.119
	c-2.825,1.413,9.887,2.119,4.943,4.944c-4.943,2.825,20.481-6.356,16.244,12.006L207.31,300.916z"/>
<path id="path542" d="M185.063,326.341c0,0-27.191,7.769-33.547-9.181c0,0-8.475,4.237-4.591,9.534
	c3.885,5.297,6.003,6.003,6.003,6.003s9.534,2.119,8.475,3.531c-1.06,1.413-5.297,7.416-5.297,7.416S174.115,333.05,185.063,326.341
	z"/>
<path id="path546" fill="#FFFFFF" d="M588.337,464.416c-0.754,3.768-3.704,5.182-7.063,6.355c-3.386-1.69-7.973-7.176-11.301-3.53
	c-0.837-0.849-2.213-0.954-2.819-2.123c-0.82-1.585-0.342-3.433-0.944-4.841c-0.962-2.246-2.214-4.658-1.886-7.161
	c3.188-1.258,4.239-4.623,3.401-7.735c-0.122-0.454-0.879-0.802-0.525-1.418c0.329-0.57,0.89-0.972,1.36-1.441
	c-0.237,0.237-0.493,0.648-0.689,0.613c-1.077-0.188-0.857-1.313-0.628-1.995c1.032-3.083,4.589-3.549,6.969-1.443
	c0.452-0.998,1.352-0.655,2.118-0.706c-0.088-1.022,0.633-1.953,0.982-2.694c0.913-1.938,3.791,0.014,5.197-1.065
	c1.899-1.457,3.776-2.691,5.681-1.628c3.193,1.789,6.212,3.93,8.327,7.004c1.017,1.473,1.439,3.733,1.338,5.426
	c-0.067,1.143-2.507,0.521-3.111,2.161c-1.139,3.086,2.095,4.003,3.43,6.364c0.35,0.616-0.117,1.153-0.673,1.326
	c-0.726,0.227-2.11-0.107-1.866,0.691C597.351,462.212,592.484,463.409,588.337,464.416z"/>
<path id="path550" fill="#FFFFFF" d="M571.385,499.022c-0.012-3.068-2.839-6.17-0.704-9.183c0.238,0.237,0.471,0.627,0.706,0.627
	c0.238,0,0.471-0.39,0.706-0.627c2.641,3.913,9.088,5.552,8.837,10.576c-0.038,0.79-1.958,2.41-0.36,3.55
	c-3.201,2.38-3.3,6.564-4.944,9.887c-2.186-0.505-4.325-1.146-6.356-2.117c0.622-2.624,0.415-5.599,1.863-7.929
	C571.896,502.575,571.391,500.67,571.385,499.022z"/>
<path id="path554" fill="#CCCCCC" d="M277.935,483.132c0,0-29.765,17.896-4.944-9.182c15.538-16.95,33.194-26.838,33.194-26.838
	s18.362-7.771,24.719-9.89c6.355-2.119,33.193-11.301,38.845-12.007c5.649-0.706,22.6-7.769,34.606-0.706
	c12.006,7.063,26.131,14.831,26.131,14.831s-28.956-14.831-35.313-10.594c-6.356,4.237-19.069,3.531-29.663,9.182
	c0,0-26.131,7.771-31.781,11.303c-5.649,3.53-24.013,24.013-26.837,22.601c-2.825-1.413,0.706-2.119,2.825-7.063
	c2.119-4.943-1.412-7.77-15.538,3.531C280.054,479.601,277.935,483.132,277.935,483.132z"/>
<path id="path558" d="M291.01,472.596c0,0,2.49-23.022,17.459-20.084c0,0,14.523-7.361,19.33-10.837c0,0,14.37-3.006,16.685-4.095
	c32.627-15.361,58.614-7.383,59.581-9.359c0.965-1.977,35.614,10.59,41.986,17.806c0.69,0.781-18.063-9.884-35.188-13.223
	c-14.607-2.85-52.748,0.438-72.005,10.211c-5.249,2.664-21.043,12.877-25.513,12.682C308.878,455.498,291.01,472.596,291.01,472.596
	z"/>
<path id="path562" fill="#CCCCCC" d="M284.292,517.738c0,0-26.838-4.237,2.825-7.063c0,0,31.782-3.531,38.844-12.713
	c0,0,24.013-16.244,28.956-16.95c4.944-0.706,57.913-13.419,58.619-17.656c0.707-4.236,10.595-4.236,13.419-2.824
	c2.825,1.413,1.413,3.53-3.531,4.943c-4.943,1.412-60.031,30.369-71.332,32.487c-11.3,2.119-31.781,15.538-40.256,17.656
	C303.36,517.738,284.292,517.738,284.292,517.738z"/>
<path id="path566" d="M318.757,504.676c0,0-15.153-1.464,0.033-2.909c0,0,15.566-6.046,19.183-10.748c0,0,12.296-8.316,14.826-8.678
	c2.531-0.362,27.18-6.872,27.542-9.04c0.362-2.17,60.51-24.384,68.314-18.751c5.14,3.709-12.343,0.748-29.354,8.535
	c-2.393,1.095-62.164,26.85-67.95,27.934c-5.785,1.087-16.271,7.956-20.611,9.04C326.402,501.145,318.757,504.676,318.757,504.676z"
	/>
<path id="path570" d="M304.773,508.557c0,0,9.181-0.706,7.063,2.119c-2.119,2.825-6.357,1.412-6.357,1.412L304.773,508.557z"/>
<path id="path574" d="M292.061,511.382c0,0,9.181-0.706,7.063,2.119c-2.119,2.825-6.356,1.412-6.356,1.412L292.061,511.382z"/>
<path id="path578" d="M273.698,514.207c0,0,9.181-0.706,7.063,2.119c-2.119,2.824-6.356,1.412-6.356,1.412L273.698,514.207z"/>
<path id="path582" d="M260.279,515.619c0,0,9.181-0.706,7.063,2.119c-2.118,2.825-6.356,1.412-6.356,1.412L260.279,515.619z"/>
<path id="path586" d="M328.079,445.7c0,0,7.77,0,5.649,2.825c-2.119,2.824-7.769,2.117-7.769,2.117L328.079,445.7z"/>
<path id="path590" d="M310.423,455.588c0,0,11.487-3.78,7.063,2.118c-2.118,2.825-6.356,1.413-6.356,1.413L310.423,455.588z"/>
<path id="path594" d="M290.648,464.063c0,0,9.181-0.705,7.063,2.119c-2.118,2.825-6.356,1.412-6.356,1.412L290.648,464.063z"/>
<path id="path598" d="M277.229,474.656c0,0,9.181-0.706,7.063,2.119c-2.118,2.824-6.356,1.411-6.356,1.411L277.229,474.656z"/>
<path id="path602" d="M265.223,483.132c0,0,9.181-0.706,7.063,2.118c-2.119,2.825-6.356,1.413-6.356,1.413L265.223,483.132z"/>
<path id="path606" d="M334.228,494.427c0,0,12.221-0.938,9.4,2.819c-2.82,3.761-8.461,1.881-8.461,1.881L334.228,494.427z"/>
<path id="path610" d="M352.59,485.951c0,0,12.221-0.939,9.4,2.82c-2.819,3.761-8.461,1.88-8.461,1.88L352.59,485.951z"/>
<path id="path614" d="M371.659,478.183c0,0,12.22-0.938,9.399,2.819c-2.819,3.761-8.461,1.881-8.461,1.881L371.659,478.183z"/>
<path id="path618" d="M390.021,469.708c0,0,12.221-0.939,9.399,2.819c-2.819,3.761-8.461,1.88-8.461,1.88L390.021,469.708z"/>
<path id="path622" d="M341.29,437.926c0,0,12.22-0.938,9.4,2.82c-2.82,3.761-9.874,3.293-9.874,3.293L341.29,437.926z"/>
<path id="path626" d="M358.946,432.276c0,0,12.22-0.939,9.399,2.818c-2.818,3.762-10.58,3.293-10.58,3.293L358.946,432.276z"/>
<path id="path630" d="M318.898,502.907c0,0,9.181-0.706,7.063,2.118c-2.119,2.824-6.355,1.413-6.355,1.413L318.898,502.907z"/>
<path id="path634" fill="#992600" d="M189.653,327.753c0,0-7.769,15.538-8.475,21.188c0,0,1.413-15.538,3.531-19.069
	C186.828,326.341,189.653,327.753,189.653,327.753z"/>
<path id="path638" fill="#992600" d="M157.165,352.472c0,0-5.65,25.425-4.944,30.369c0,0-2.119-20.481-1.412-22.6
	C151.515,358.123,157.165,352.472,157.165,352.472z"/>
<path id="path642" fill="#CCCCCC" d="M193.891,220.755l-0.353,5.65l-3.885,0.354c0,0,25.072,22.247,26.132,35.666
	C215.785,262.425,217.197,247.946,193.891,220.755z"/>
<path id="path646" d="M200.925,222.989c-0.761-0.734-0.374-2.05-1.095-2.509c-1.428-0.911,2.292-1.012,1.889-2.276
	c-0.676-2.129-0.346-2.167-0.562-4.419c-0.101-1.056,0.938-3.775,1.618-4.552c2.553-2.917,0.215-8.094,3.111-10.833
	c0.537-0.51,1.201-1.485,1.704-2.223c1.164-1.7,3.254-2.562,4.931-4.024c0.562-0.487,0.207-1.948,1.211-1.785
	c1.261,0.203,3.452-0.026,3.373,1.458c-0.2,3.743-2.546,6.78-4.806,9.725c0.796,1.243-0.013,2.364-0.514,3.348
	c-2.357,4.626-2.023,9.642-2.331,14.657c-0.009,0.15-0.551,0.288-0.537,0.381c0.623,4.123,1.654,8.005,3.207,11.941
	c0.646,1.642,1.478,3.222,1.743,4.859c0.196,1.211,0.378,2.682-0.343,3.927c3.593,5.103,1.282,9.783,3.346,16.018
	c0.365,1.104,3.353,4.483,2.535,4.199c-4.437-1.538-4.635-2.241-4.947-3.57c-0.258-1.1-0.84-3.531-1.259-4.594
	c-0.113-0.29-0.415-3.616-0.553-3.832c-2.671-4.206-0.274-3.895-2.692-8.059c-2.521-1.201-4.227-3.15-6.21-5.202
	c-0.35-0.36,1.668-1.638,1.349-2.014c-1.928-2.276-3.964-3.63-3.371-6.267C201.997,226.126,202.238,224.26,200.925,222.989z"/>
<path id="path650" d="M194.597,226.052c0,0,0.707,12.006,4.944,14.832c4.238,2.825,2.119,1.413-3.531-0.706
	c-5.65-2.119-3.531-3.531-3.531-3.531s-4.944,0.706-0.706,4.237c4.237,3.531,10.594,7.769,7.769,7.769s-16.244-7.063-16.244-12.006
	c0-4.944-1.766-12.183-1.766-12.183s1.942-1.413,10.417-1.236C191.948,223.228,194.42,224.463,194.597,226.052z"/>
<path id="path654" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M193.184,258.894c0,0-15.043-4.928-47.672,1.059
	c0,0,15.946-3.669,49.085,0.353C212.783,262.513,193.184,258.894,193.184,258.894z"/>
<path id="path658" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M196.889,258.768c0,0-14.56-6.211-47.586-3.067
	c0,0,16.205-2.276,48.871,4.596C216.103,264.068,196.889,258.768,196.889,258.768z"/>
<path id="path662" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M200.045,258.932c0,0-14.058-7.276-47.226-6.596
	c0,0,16.329-1.066,48.395,8.217C218.811,265.647,200.045,258.932,200.045,258.932z"/>
<path id="path666" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M202.288,259.326c0,0-12.049-7.604-41.842-9.543
	c0,0,14.724,0.3,42.764,11.086C218.599,266.789,202.288,259.326,202.288,259.326z"/>
<path id="path670" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M405.838,277.894c0,0-1.642,1.137-1.264-0.948
	c0.38-2.085,50.185-25.339,56.564-24.897C461.14,252.048,407.732,275.365,405.838,277.894z"/>
<path id="path674" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M399.846,279.021c0,0-1.547,1.263-1.333-0.846
	c0.214-2.108,48.04-29.202,54.436-29.262C452.947,248.914,401.537,276.354,399.846,279.021z"/>
<path id="path678" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M394.044,281.449c0,0-1.462,1.363-1.388-0.755
	c0.074-2.117,35.063-29.479,52.389-32.788C445.045,247.906,413.21,262.255,394.044,281.449z"/>
<path id="path682" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M388.966,284.739c0,0-1.314,1.226-1.248-0.68
	c0.066-1.907,31.557-26.532,47.147-29.509C434.865,254.55,406.216,267.464,388.966,284.739z"/>
<path id="path686" fill="#CCCCCC" d="M333.023,545.988c0,0-26.838-4.237,2.824-7.063c0,0,31.781-3.531,38.845-12.712
	c0,0,24.013-16.244,28.956-16.95c4.943-0.707,33.899-7.063,34.606-11.301c0.706-4.237,11.3-8.475,14.125-7.063
	c2.825,1.413,2.825,17.655-2.119,19.068c-4.942,1.412-38.138,14.125-49.438,16.244c-11.301,2.118-31.782,15.537-40.257,17.656
	C352.092,545.988,333.023,545.988,333.023,545.988z"/>
<path id="path690" d="M461.915,479.953c0,0-5.297,2.825-7.416,7.416c0,0-11.3,18.716-36.372,24.366c0,0-40.609,15.891-54.382,19.422
	c0,0-23.659,8.828-36.727,7.416c0,0-12.358,0.353-1.411,3.178c0,0,35.666-3.531,41.669-6.709c0,0,27.544-9.182,32.841-13.772
	c5.297-4.59,37.432-13.419,41.315-16.949C445.317,500.789,462.621,485.957,461.915,479.953z"/>
<path id="path694" d="M358.24,535.589c0,0,9.231-0.398,7.195,2.336c-2.034,2.737-6.356,1.193-6.356,1.193L358.24,535.589z"/>
<path id="path698" d="M345.523,537.977c0,0,9.23-0.398,7.196,2.336c-2.036,2.736-6.357,1.195-6.357,1.195L345.523,537.977z"/>
<path id="path702" d="M327.11,540.18c0,0,9.231-0.399,7.195,2.336c-2.034,2.735-6.356,1.193-6.356,1.193L327.11,540.18z"/>
<path id="path706" d="M313.631,541.141c0,0,9.232-0.398,7.197,2.336c-2.036,2.736-6.358,1.193-6.358,1.193L313.631,541.141z"/>
<path id="path710" d="M387.432,522.526c0,0,12.289-0.531,9.578,3.108c-2.708,3.642-8.463,1.59-8.463,1.59L387.432,522.526z"/>
<path id="path714" d="M405.645,514.714c0,0,10.521-5.828,9.578,3.109c-0.477,4.513-8.463,1.589-8.463,1.589L405.645,514.714z"/>
<path id="path718" d="M421.768,509.745c0,0,12.642-6.534,9.579,3.108c-1.374,4.326-8.465,1.59-8.465,1.59L421.768,509.745z"/>
<path id="path722" d="M438.566,501.226c0,0,7.695-8.652,9.578,3.109c0.717,4.481-8.464,1.59-8.464,1.59L438.566,501.226z"/>
<path id="path726" d="M372.28,530.444c0,0,9.23-0.401,7.196,2.336c-2.035,2.733-6.359,1.192-6.359,1.192L372.28,530.444z"/>
<path id="path730" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M435.138,316.105c0,0-1.282,1.174-1.284-0.717
	c0-1.889,30.871-25.309,46.484-27.752C480.338,287.636,451.913,299.517,435.138,316.105z"/>
<path id="path734" d="M440.374,428.748c0,0,38.847,39.553,55.09,45.908c0,0,16.244,19.774,9.183,65.683
	c0,0-5.65,13.419-11.301-23.307c0,0,5.649-44.494-14.125-16.244c0,0-14.834-17.479-3.533-16.95c0,0,5.651,3.531,6.357,0.706
	c0.707-2.825-13.42-26.838-43.789-52.265C407.887,406.854,440.374,428.748,440.374,428.748z"/>
<path id="path738" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M337.261,497.257c0,0-0.354-3.178,2.825-1.766
	c3.178,1.412,169.503,12.358,225.298,54.734C565.384,550.227,485.576,509.264,337.261,497.257z"/>
<path id="path742" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M355.623,489.488c0,0-0.354-3.18,2.825-1.767
	c3.179,1.412,244.367-0.354,286.036,56.854C644.484,544.576,605.641,500.082,355.623,489.488z"/>
<path id="path746" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M376.104,482.426c0,0-0.353-3.179,2.825-1.766
	c3.18,1.412,309.343-21.541,351.013,35.666C729.941,516.326,712.991,471.125,376.104,482.426z"/>
<path id="path750" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M393.762,473.95c0,0-0.354-3.178,2.824-1.767
	c3.179,1.413,218.941-66.742,260.611-9.533C657.197,462.65,633.537,419.214,393.762,473.95z"/>
<path id="path754" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M291.354,514.207c0,0-0.353-3.178,2.825-1.766
	c3.178,1.412,34.606,5.297,38.138,73.804C332.317,586.245,319.604,512.088,291.354,514.207z"/>
<path id="path758" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M275.816,517.032c0,0-0.353-3.18,2.825-1.767
	c3.178,1.412,28.25-6.71,23.306,61.797C301.948,577.063,304.066,514.913,275.816,517.032z"/>
<path id="path762" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M261.691,517.738c0,0-0.354-3.179,2.825-1.767
	c3.179,1.412,30.369,2.473,8.475,42.022C272.991,557.995,289.941,515.619,261.691,517.738z"/>
<path id="path766" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M345.252,439.457c0,0-0.784,3.529,1.951,1.381
	c28.37-22.292,85.65-126.292,183.971-136.239C531.174,304.599,463.536,283.217,345.252,439.457z"/>
<path id="path770" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M365.027,436.278c0,0-2.406-2.106,0.892-3.21
	c3.298-1.104,201.831-129.115,271.194-115.05C637.113,318.018,589.252,304.758,365.027,436.278z"/>
<path id="path774" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M328.229,447.053c0,0-0.897,2.823,2.122,1.101
	c15.848-9.04,22.229-110.054,99.171-112.271C429.521,335.882,372.297,309.903,328.229,447.053z"/>
<path id="path778" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M293.053,466.521c0,0-1.902,2.271,1.546,1.821
	c18.091-2.352,55.884-75.222,134.348-66.254C428.947,402.089,372.507,376.759,293.053,466.521z"/>
<path id="path782" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M312.895,455.704c0,0-1.432,2.594,1.868,1.49
	c17.303-5.78,40.403-84.549,119.13-90.813C433.893,366.382,373.639,352.357,312.895,455.704z"/>
<path id="path786" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M280.623,475.559c0,0-1.542,1.841,1.252,1.478
	c14.653-1.905,45.265-60.929,108.822-53.665C390.696,423.37,344.979,402.854,280.623,475.559z"/>
<path id="path790" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M267.206,485.992c0,0-1.775,1.845,1.035,1.637
	c7.359-0.546,61.455-58.951,94.063-31.58C362.303,456.049,341.089,422.99,267.206,485.992z"/>
<path id="path794" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M389.974,429.627c0,0-2.12-2.392,1.291-3.071
	c3.411-0.679,216.529-102.579,283.56-79.862C674.823,346.693,629.021,327.494,389.974,429.627z"/>
<path id="path798" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M330.904,543.164c0,0-0.354-3.179,2.824-1.768
	c3.179,1.413,30.369,2.474,8.476,42.022C342.204,583.42,359.154,541.045,330.904,543.164z"/>
<path id="path802" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M349.268,540.339c0,0-0.354-3.179,2.824-1.766
	c3.18,1.412,34.607,5.297,38.14,73.804C390.23,612.377,377.518,538.22,349.268,540.339z"/>
<path id="path806" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M361.273,537.514c0,0-0.354-3.179,2.824-1.766
	c3.179,1.412,46.613,7.416,88.282,64.622C452.381,600.37,389.523,535.395,361.273,537.514z"/>
<path id="path810" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M374.736,533.931c0,0-0.771-3.104,2.564-2.125
	c3.337,0.979,39.416-2.375,106.684,57.969C483.984,589.773,402.455,528.076,374.736,533.931z"/>
<path id="path814" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M393.1,526.162c0,0-0.771-3.104,2.565-2.126
	c3.337,0.979,64.841,8.926,156.119,70.681C551.784,594.717,420.818,520.308,393.1,526.162z"/>
<path id="path818" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M321.723,505.732c0,0-0.353-3.18,2.825-1.767
	c3.179,1.412,97.464,6.003,151.14,53.322C475.688,557.289,414.064,513.545,321.723,505.732z"/>
<path id="path822" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M304.066,512.795c0,0-0.353-3.179,2.825-1.766
	c3.179,1.412,46.613,7.415,88.282,64.622C395.174,575.651,332.317,510.676,304.066,512.795z"/>
<path id="path826" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M412.306,518.021c0,0-0.997-3.037,2.403-2.308
	s65.321,4.147,160.88,59.049C575.589,574.764,438.462,514.036,412.306,518.021z"/>
<path id="path830" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M427.138,513.785c0,0-0.998-3.039,2.402-2.309
	c3.401,0.729,65.322,4.147,160.88,59.049C590.42,570.525,454.354,509.092,427.138,513.785z"/>
<path id="path834" fill="#FFFFFF" stroke="#000000" stroke-width="0.1" d="M444.088,504.957c0,0-0.998-3.039,2.402-2.308
	c3.399,0.729,79.447,8.385,237.863,68.936C684.354,571.585,471.303,500.264,444.088,504.957z"/>
<path id="path838" d="M247.566,517.032c0,0,9.182-0.706,7.063,2.118s-6.356,1.412-6.356,1.412L247.566,517.032z"/>
<path id="path842" d="M301.948,541.751c0,0,9.181-0.706,7.063,2.119c-2.119,2.825-6.356,1.412-6.356,1.412L301.948,541.751z"/>
<path id="path846" d="M286.41,541.045c0,0,9.182-0.706,7.063,2.119c-2.119,2.824-6.356,1.412-6.356,1.412L286.41,541.045z"/>
<path id="path850" d="M118.022,520.177c0,0,8.908,2.336,5.98,4.313c-2.926,1.978-6.469-0.745-6.469-0.745L118.022,520.177z"/>
<path id="path854" d="M121.554,503.227c0,0,8.908,2.336,5.98,4.313c-2.926,1.978-6.469-0.745-6.469-0.745L121.554,503.227z"/>
<path id="path858" d="M108.841,495.458c0,0,8.908,2.336,5.98,4.312c-2.925,1.979-6.469-0.744-6.469-0.744L108.841,495.458z"/>
<path id="path862" fill="#CCCCCC" d="M249.685,627.914c0,0-2.825,0-9.888,3.531c-3.531,0-23.307,6.355-33.194,24.013
	C206.603,655.458,228.497,638.508,249.685,627.914z"/>
<path id="path866" fill="#CCCCCC" d="M404.56,791.494c0.249,0.456,0.348,1.197,0.862,1.228c1.161,0.07,3.339,0.603,3.118-0.521
	c-1.497-7.604-3.041-16.319-10.338-19.51c-1.129-0.493-3.675,0.235-3.806,1.797c-0.225,2.69-0.432,5.072,0.114,7.661
	c0.529,2.509,4.34,2.525,5.959,0.083C402.123,785.184,402.886,788.438,404.56,791.494z"/>
<path id="path870" fill="#CCCCCC" d="M385,799.854c1.321,2.494,1.097,5.776,3.595,6.771c1.308,0.519,4.573-1.202,3.835-3.099
	c-1.416-3.64-2.101-7.594-4.554-10.79c-0.353-0.463,0.071-1.403-0.212-1.982c-1.048-2.154-3.07-3.452-5.556-2.871
	c-1.97,3.891,0.058,7.648,2.744,10.666C385.094,798.816,384.801,799.48,385,799.854z"/>
<path id="path874" fill="#CCCCCC" d="M315.077,790.689c-0.19-0.666-0.258-1.483,0.033-2.052c0.938-1.822,2.338-3.805,1.742-5.608
	c-0.613-1.864-2.585-1.543-3.731-0.538c-2.004,1.755-2.091,4.979-3.312,7.379c-0.347,0.682-0.256,1.692-1.034,2.383
	c-0.838,0.744-1.613,3.435-1.444,4.442c0.094,0.553-0.229,18.047,0.163,17.583c1.093-1.295,6.478-18.481,6.6-20.058
	C314.194,792.932,315.487,792.11,315.077,790.689z"/>
<path id="path878" fill="#CCCCCC" d="M269.81,778.697c4.651-4.413,9.577-9.642,8.796-16.195c-0.205-1.723-3.339-0.792-3.669,0.701
	c-1.416,6.4-5.016,11.099-9.55,15.322c-3.877,3.613-7.165,14.814-7.58,15.713C264.334,784.958,268.319,780.109,269.81,778.697z"/>
<path id="path882" fill="#CCCCCC" d="M245.843,768.167c0.923-0.653,0.39-1.521,0.773-2.106c1.683-2.574,3.979-4.773,4.012-7.844
	c0.005-0.489-0.662-1.034-1.254-0.639c-0.489,0.324-1.093,0.555-1.284,0.784c-3.584,4.322-6.056,9.04-8.604,14.005
	c-0.323,0.63-2.343,8.56-1.79,8.756c0.422,0.148,3.459-7.232,3.83-7.434C243.756,772.479,243.777,769.627,245.843,768.167z"/>
<path id="path886" fill="#CCCCCC" d="M275.387,802.674c0.784-1.534,3.567-3.656,3.367-5.226c-0.208-1.64,0.618-4.188-0.992-2.973
	c-2.22,1.675-8.309,4.057-8.786,14.312C268.93,809.795,274.182,805.04,275.387,802.674z"/>
<path id="path890" fill="#CCCCCC" d="M300.889,772.344c0.706-1.179,1.956-0.344,2.767-0.809c1.144-0.656,2.223-1.643,2.738-2.788
	c1.713-3.794,4.836-7.008,5.089-11.234c-2.634-2.479-3.831,1.121-4.944,2.825c-2.336-2.908-4.1,0.4-6.395,1.316
	c-0.124,0.05-0.5-0.563-0.632-0.516c-2.078,0.776-3.279,2.687-5.041,4.064c-0.302,0.236-1.017-0.082-1.276,0.158
	c-1.151,1.064-2.869,1.639-3.364,2.843c-1.959,4.78-7.504,8.479-10.835,21.795c0.672,1.604,7.966-11.728,8.826-12.959
	c1.476-2.112,1.685,2.933,3.938,1.757c0.09-0.048,0.418,0.372,0.655,0.608c0.342-0.494,0.727-0.898,1.413-0.706
	c0-0.706-0.237-1.688,0.118-1.969c2.184-1.726,2.036-3.61,3.413-5.801C298.166,772.324,300.039,771.055,300.889,772.344z"/>
<path id="path894" fill="#CCCCCC" d="M406.474,868.395c0,0,13.066-36.019,5.298-55.794c0,0,20.129,38.139,12.007,57.913
	c0,0-0.706-18.361-7.77-27.189C416.009,843.323,408.946,865.923,406.474,868.395z"/>
<path id="path898" fill="#CCCCCC" d="M380.343,863.805c0,0,9.534-15.538-4.591-48.024c0,0-1.413,36.019-13.419,55.439
	C362.333,871.22,387.405,835.554,380.343,863.805z"/>
<path id="path902" fill="#CCCCCC" d="M362.686,860.273c0,0-0.353-35.313,0.354-40.61c0,0-6.709,29.31-24.719,46.26
	C338.32,865.923,363.745,844.735,362.686,860.273z"/>
<path id="path906" fill="#CCCCCC" d="M345.736,803.771c0,0,10.594,24.014-7.063,56.502c0,0,11.301-21.541,2.825-33.9
	C341.498,826.373,346.089,820.369,345.736,803.771z"/>
<path id="path910" fill="#CCCCCC" d="M311.836,859.566c0,0-1.766-27.545,1.412-31.429c0,0,0.354-11.301-0.354-13.065
	c0,0,7.063-10.946,7.416,2.119c0,0,2.473,13.771,7.416,21.894c0,0,6.356,9.535,6.003,20.835
	C333.729,859.92,316.073,806.598,311.836,859.566z"/>
<path id="path914" fill="#CCCCCC" d="M305.479,810.835c0,0-11.653,19.069-14.831,52.616c0,0-2.472-10.947,4.237-36.372
	C294.885,827.079,302.301,799.888,305.479,810.835z"/>
<path id="path918" fill="#CCCCCC" d="M266.988,845.795c0,0,8.828-9.535,11.3-18.363c0,0,6.356-27.896-4.943-12.712
	c0,0,0.353,14.125-14.125,27.19C259.219,841.91,267.694,837.673,266.988,845.795z"/>
<path id="path922" fill="#CCCCCC" d="M256.748,836.967c0,0,6.003-30.723,7.416-32.135c0,0,3.178-6.003-1.766-0.354
	c0,0-15.538,33.9-22.6,45.555C239.797,850.032,253.922,833.788,256.748,836.967z"/>
<path id="path926" fill="#CCCCCC" d="M246.507,807.657c0,0,20.481-39.552-18.01,6.003
	C228.497,813.66,247.919,796.356,246.507,807.657z"/>
<path id="path930" fill="#CCCCCC" d="M219.316,781.879c0,0,8.475-33.193,13.065-32.842c0,0,14.479-15.891,2.825,2.825
	c0,0-10.594,16.95-9.535,34.254C225.672,786.116,224.613,769.166,219.316,781.879z"/>
<path id="path934" fill="#CCCCCC" d="M802.508,761.748c0,0-21.188-17.656-25.602-23.836c0,0,23.836,32.664,23.836,45.023
	C800.742,782.938,805.156,769.693,802.508,761.748z"/>
<path id="path938" fill="#CCCCCC" d="M812.219,722.904c0,0-37.078-26.484-43.259-39.728c0,0,46.79,52.086,46.79,60.031
	C815.75,743.209,816.633,727.318,812.219,722.904z"/>
<path id="path942" fill="#CCCCCC" d="M842.234,450.995c0,0-21.188-14.125-23.836-10.594c0,0,18.539,11.477,22.952,26.483
	C841.352,466.886,838.703,450.995,842.234,450.995z"/>
<path id="path946" fill="#CCCCCC" d="M857.242,593.13l-30.898-21.188c0,0,33.547,30.017,34.431,37.079L857.242,593.13z"/>
<path id="path950" stroke="#000000" d="M167.317,553.402l38.844,8.387"/>
<path id="path954" stroke="#000000" d="M256.041,839.438c0,0-0.883-6.181-16.773,12.358"/>
<path id="path958" stroke="#000000" d="M265.752,848.265c0,0,3.531-11.477-7.946-3.53"/>
<path id="path962" stroke="#000000" d="M361.097,863.271c0,0,2.648-19.422-17.655,3.531"/>
</svg>
`,X5=`<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 40 40' width='40' height='40'>
    <style>
        circle {
        fill: none;
        stroke: #fff;
        stroke-width: 20px;
        shape-rendering: geometricPrecision;
        stroke-dasharray: 63;
        stroke-dashoffset: 126;
        transform-origin: 50%;
        animation: animate 2s linear infinite;
        }
        @keyframes animate {
        to {
        stroke-dashoffset: 0;
        transform: rotate(360deg);
        }
        }
    </style>
    <circle cx='20' cy='20' r='10'/>
</svg>
`,q5=(t=1)=>{const e=[()=>`matrix(${Array.from({length:6},()=>Math.random()*10-5).join(", ")})`,()=>`matrix3d(${Array.from({length:16},()=>Math.random()*2-1).join(", ")})`,()=>`perspective(${Math.random()*1e3}px)`,()=>`rotate(${Math.random()*360}deg)`,()=>`rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()*360}deg)`,()=>`rotateX(${Math.random()*360}deg)`,()=>`rotateY(${Math.random()*360}deg)`,()=>`rotateZ(${Math.random()*360}deg)`,()=>`translate(${Math.random()*100}px, ${Math.random()*100}%)`,()=>`translate3d(${Math.random()*100}px, ${Math.random()*100}%, ${Math.random()*100}em)`,()=>`translateX(${Math.random()*100}em)`,()=>`translateY(${Math.random()*100}in)`,()=>`translateZ(${Math.random()*100}px)`,()=>`scale(${Math.random()*3}, ${Math.random()*3})`,()=>`scale3d(${Math.random()*3}, ${Math.random()*3}, ${Math.random()*3})`,()=>`scaleX(${Math.random()*3})`,()=>`scaleY(${Math.random()*3})`,()=>`scaleZ(${Math.random()*3})`,()=>`skew(${Math.random()*90}deg, ${Math.random()*90}deg)`,()=>`skewX(${Math.random()*90}deg)`,()=>`skewY(${Math.random()*Math.PI/2}rad)`],n=e[Math.floor(Math.random()*e.length)];return Array(t).fill(null).map(()=>`transform: ${n()};`).join(" ")},Z5=(t=1,e=0)=>{const n=[()=>`matrix(1, 0, 0, 1, 0, ${e})`,()=>`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, ${1+e})`,()=>`perspective(${1e3+e}px)`,()=>`rotate(${e}deg)`,()=>`rotate3d(1, 1, 1, ${e}deg)`,()=>`rotateX(${e}deg)`,()=>`rotateY(${e}deg)`,()=>`rotateZ(${e}deg)`,()=>`translate(${e}px, ${e}%)`,()=>`translate3d(${e}px, ${e}%, ${e}em)`,()=>`translateX(${e}em)`,()=>`translateY(${e}in)`,()=>`translateZ(${e}px)`,()=>`scale(${1+e}, ${1+e})`,()=>`scale3d(${1+e}, ${1+e}, ${1+e})`,()=>`scaleX(${1+e})`,()=>`scaleY(${1+e})`,()=>`scaleZ(${1+e})`,()=>`skew(${e}deg, ${e}deg)`,()=>`skewX(${e}deg)`,()=>`skewY(${e}rad)`],c=()=>n[Math.floor(Math.random()*n.length)]();return Array(t).fill(null).map(()=>`transform: ${c()};`).join(" ")},J5=[{id:"replace",name:"Replace",active:!0,description:"Replace the target values with a single value",function:(t,e,n,c)=>t.replace(e,n)},{id:"multiply",name:"Multiply",active:!0,description:"Multiply the target values by the selected value",function:(t,e,n,c)=>t.replace(e,r=>String(Math.trunc(Number(r)*Number(n))))},{id:"add",name:"Add",active:!0,description:"Add the selected value to the target values",function:(t,e,n,c)=>t.replace(e,r=>String(Math.trunc(Number(r)+Number(n))))},{id:"subtract",name:"Subtract",active:!0,description:"Subtract the selected value from the target values",function:(t,e,n,c)=>t.replace(e,r=>String(Math.trunc(Number(r)-Number(n))))},{id:"divide",name:"Divide",active:!0,description:"Divide the target values by the selected value",function:(t,e,n,c)=>t.replace(e,r=>String(Math.trunc(Number(r)/Number(n))))},{id:"transform",name:"Random transforms",active:!0,description:"Applies random transforms to the target values",random:!0,function:(t,e,n,c)=>(c.setAttribute("style",q5(Number(n))),t)},{id:"transform_addition",name:"Addition Transforms",active:!0,description:"Applies random transforms to the target values",random:!0,function:(t,e,n,c)=>(c.setAttribute("style",Z5(10,Number(n)/50)),t)}];class Q5{constructor(){P1(this,"parser",new DOMParser);P1(this,"svgElement",null);P1(this,"originalSvgString","");P1(this,"originalSvgNode",null);P1(this,"panZoom",null);P1(this,"targetValuesArray",[]);P1(this,"targetValuesRegexp",new RegExp("0","gi"));P1(this,"replaceValue","0");P1(this,"corruptionModes",B1(J5))}get currentCorruptionMode(){return this.corruptionModes.value.find(e=>e.active)}get disableCorrupt(){return this.targetValuesArray.length===0&&!this.currentCorruptionMode.random}async init(e,n){this.svgElement=e,this.panZoom=n,await this.loadFromString(Y5)}resetSvg(){this.setSvgElement(this.originalSvgString)}setSvgElement(e){var r,s,i,o;this.originalSvgString=e;const n=this.parser.parseFromString(e,"image/svg+xml").documentElement;(s=(r=this.svgElement)==null?void 0:r.value.firstChild)==null||s.remove(),(i=this.panZoom)==null||i.reset();const c=(o=this.svgElement)==null?void 0:o.value.appendChild(n);c&&(c.setAttribute("style","width: 100%; height: 100%;"),this.originalSvgNode=c.cloneNode(!0))}async loadFromString(e){let n=e;this.isSVGUrl(n)&&(n=await this.loadSvgFromUrl(n)),this.setSvgElement(n)}async loadSvgFromUrl(e){try{this.setSvgElement(X5);const n=await fetch(e);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const c=n.headers.get("content-type");if(!c||!c.includes("image/svg+xml"))throw new Error("The fetched content is not an SVG");return await n.text()}catch(n){throw alert(`Error fetching SVG: 

 ${n}`),n}}isSVGUrl(e){try{const n=new URL(e);return["http:","https:"].includes(n.protocol)?/\.svg$/i.test(n.pathname):!1}catch{return!1}}corruptSvg(){var i;if(this.disableCorrupt)return;const e=(i=this.svgElement)==null?void 0:i.value.querySelector("svg");if(!e)return;const n=e.querySelectorAll("path"),c=this.originalSvgNode.querySelectorAll("path"),r=Math.min(n.length,c.length),s=this.currentCorruptionMode.function;for(let o=0;o<r;o++){const a=c[o].getAttribute("d");if(!a)continue;const u=s(a,this.targetValuesRegexp,this.replaceValue,n[o]);n[o].setAttribute("d",u)}}setTargetValues(e){this.targetValuesArray=[];for(const[n,c]of e.entries())c&&this.targetValuesArray.push(n);this.targetValuesArray.length===0&&this.resetSvg(),this.targetValuesRegexp=new RegExp(this.targetValuesArray.join("|"),"gi")}setReplaceValue(e){this.replaceValue=String(e)}setCorruptionMode(e){this.corruptionModes.value.find(n=>{n.active=n.id===e})}async exportSvgToPng(){var a;const e=(a=this.svgElement)==null?void 0:a.value.querySelector("svg");if(!e)return;const n=document.createElement("canvas"),c=n.getContext("2d");if(!c)return;const r=new XMLSerializer().serializeToString(e),s=new Blob([r],{type:"image/svg+xml;charset=utf-8"}),i=URL.createObjectURL(s),o=new Image;o.onload=()=>{n.width=e.clientWidth,n.height=e.clientHeight,c.drawImage(o,0,0),URL.revokeObjectURL(i),n.toBlob(u=>{if(u){const d=document.createElement("a");d.href=URL.createObjectURL(u),d.download="corrupted.png",d.click(),URL.revokeObjectURL(d.href)}},"image/png")},o.src=i}}const p1=new Q5,t6={class:"input-slider"},e6=["for"],n6=["id","value"],c6=K0({__name:"RangeSlider",props:{modelValue:{},label:{},id:{}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,c=r=>{const s=r.target;n("update:modelValue",s.value)};return(r,s)=>($1(),j1("div",t6,[q("label",{for:r.id},$0(r.label)+": "+$0(r.modelValue),9,e6),q("input",ie({id:r.id},r.$attrs,{value:r.modelValue,onInput:c}),null,16,n6)]))}}),wt=(t,e)=>{const n=t.__vccOpts||t;for(const[c,r]of e)n[c]=r;return n},r6=wt(c6,[["__scopeId","data-v-f1f6fa04"]]),F2=t=>(i4("data-v-f5ef8259"),t=t(),o4(),t),s6={class:"panel"},i6={class:"panel__inner"},o6={class:"panel__section"},l6=F2(()=>q("div",null,[q("label",{for:"svg-input"},"SVG string or URL")],-1)),a6={class:"panel__section"},f6=F2(()=>q("span",null,"Corruption mode",-1)),u6=["value"],d6={key:0,class:"panel__section"},h6=F2(()=>q("span",null,"Target Values",-1)),p6={class:"section__target-values"},g6=["for"],C6=["id","value","onUpdate:modelValue"],m6={class:"panel__section"},F6={class:"panel__section"},v6={class:"section__corrupt-buttons"},_6={class:"panel__section"},M6=K0({__name:"Panel",setup(t){const e=B1(""),n=B1(new Array(10).fill(!1)),c=B1(0),r=p1.corruptionModes,s=a4(()=>G5(()=>import("./EmojiPicker-WZ8rM8R5.js"),__vite__mapDeps([0,1]))),i=async()=>{const F=await W5();await p1.loadFromString(F)},o=()=>{p1.setTargetValues(n.value),p1.corruptSvg()},a=()=>{p1.setReplaceValue(c.value),p1.corruptSvg()},u=qt({get(){return p1.currentCorruptionMode.id},set(F){p1.setCorruptionMode(F),p1.corruptSvg()}}),d=qt(()=>p1.currentCorruptionMode);return ot(e,()=>{p1.loadFromString(e.value)}),(F,v)=>{var S;return $1(),j1("div",s6,[q("div",i6,[q("div",o6,[q("div",{class:"input"},[l6,q("button",{class:"file-select",onClick:i},"Upload SVG")]),zt(q("input",{"onUpdate:modelValue":v[0]||(v[0]=x=>e.value=x),id:"svg-input",type:"text"},null,512),[[R5,e.value]])]),q("div",a6,[f6,q("div",null,[zt(q("select",{"onUpdate:modelValue":v[1]||(v[1]=x=>u.value=x)},[($1(!0),j1(S1,null,P2(F0(r),x=>($1(),j1("option",{key:x.id,value:x.id},$0(x.name),9,u6))),128))],512),[[V5,u.value]])])]),(S=d.value)!=null&&S.random?s5("",!0):($1(),j1("div",d6,[h6,q("div",p6,[($1(!0),j1(S1,null,P2(n.value,(x,T)=>($1(),j1("label",{for:"target-values-"+T},[zt(q("input",{id:"target-values-"+T,type:"checkbox",value:n.value[T],"onUpdate:modelValue":G=>n.value[T]=G,onChange:o},null,40,C6),[[I5,n.value[T]]]),se(" "+$0(T),1)],8,g6))),256))])])),q("div",m6,[i1(r6,{modelValue:c.value,"onUpdate:modelValue":v[2]||(v[2]=x=>c.value=x),label:d.value.name,id:"replace-value",step:"1",max:"100",min:"0",type:"range",onInput:a},null,8,["modelValue","label"])]),q("div",F6,[q("div",v6,[q("button",{class:"corrupt",onClick:v[3]||(v[3]=x=>F0(p1).corruptSvg())}," Corrupt SVG "),q("button",{class:"reset",onClick:v[4]||(v[4]=x=>F0(p1).resetSvg())}," Reset SVG "),q("button",{class:"download",onClick:v[5]||(v[5]=x=>F0(p1).exportSvgToPng())}," Download PNG ")])]),q("div",_6,[i1(F0(s))])])])}}}),y6=wt(M6,[["__scopeId","data-v-f5ef8259"]]);var c1=function(){return c1=Object.assign||function(e){for(var n,c=1,r=arguments.length;c<r;c++){n=arguments[c];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},c1.apply(this,arguments)};typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),typeof window.CustomEvent!="function"&&(window.CustomEvent=function(e,n){n=n||{bubbles:!1,cancelable:!1,detail:null};var c=document.createEvent("CustomEvent");return c.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),c}));function fe(t,e){for(var n=t.length;n--;)if(t[n].pointerId===e.pointerId)return n;return-1}function Zt(t,e){var n;if(e.touches){n=0;for(var c=0,r=e.touches;c<r.length;c++){var s=r[c];s.pointerId=n++,Zt(t,s)}return}n=fe(t,e),n>-1&&t.splice(n,1),t.push(e)}function w6(t,e){if(e.touches){for(;t.length;)t.pop();return}var n=fe(t,e);n>-1&&t.splice(n,1)}function s3(t){t=t.slice(0);for(var e=t.pop(),n;n=t.pop();)e={clientX:(n.clientX-e.clientX)/2+e.clientX,clientY:(n.clientY-e.clientY)/2+e.clientY};return e}function Lt(t){if(t.length<2)return 0;var e=t[0],n=t[1];return Math.sqrt(Math.pow(Math.abs(n.clientX-e.clientX),2)+Math.pow(Math.abs(n.clientY-e.clientY),2))}var j0={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};typeof window<"u"&&(typeof window.PointerEvent=="function"?j0={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:typeof window.TouchEvent=="function"&&(j0={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));function $t(t,e,n,c){j0[t].split(" ").forEach(function(r){e.addEventListener(r,n,c)})}function Rt(t,e,n){j0[t].split(" ").forEach(function(c){e.removeEventListener(c,n)})}var b6=typeof document<"u"&&!!document.documentMode,It;function x6(){return It||(It=document.createElement("div").style)}var i3=["webkit","moz","ms"],tt={};function v2(t){if(tt[t])return tt[t];var e=x6();if(t in e)return tt[t]=t;for(var n=t[0].toUpperCase()+t.slice(1),c=i3.length;c--;){var r="".concat(i3[c]).concat(n);if(r in e)return tt[t]=r}}function et(t,e){return parseFloat(e[v2(t)])||0}function nt(t,e,n){n===void 0&&(n=window.getComputedStyle(t));var c=e==="border"?"Width":"";return{left:et("".concat(e,"Left").concat(c),n),right:et("".concat(e,"Right").concat(c),n),top:et("".concat(e,"Top").concat(c),n),bottom:et("".concat(e,"Bottom").concat(c),n)}}function v0(t,e,n){t.style[v2(e)]=n}function z6(t,e){var n=v2("transform");v0(t,"transition","".concat(n," ").concat(e.duration,"ms ").concat(e.easing))}function S6(t,e,n){var c=e.x,r=e.y,s=e.scale,i=e.isSVG;if(v0(t,"transform","scale(".concat(s,") translate(").concat(c,"px, ").concat(r,"px)")),i&&b6){var o=window.getComputedStyle(t).getPropertyValue("transform");t.setAttribute("transform",o)}}function Vt(t){var e=t.parentNode,n=window.getComputedStyle(t),c=window.getComputedStyle(e),r=t.getBoundingClientRect(),s=e.getBoundingClientRect();return{elem:{style:n,width:r.width,height:r.height,top:r.top,bottom:r.bottom,left:r.left,right:r.right,margin:nt(t,"margin",n),border:nt(t,"border",n)},parent:{style:c,width:s.width,height:s.height,top:s.top,bottom:s.bottom,left:s.left,right:s.right,padding:nt(e,"padding",c),border:nt(e,"border",c)}}}function E6(t){var e=t.ownerDocument,n=t.parentNode;return e&&n&&e.nodeType===9&&n.nodeType===1&&e.documentElement.contains(n)}function A6(t){return(t.getAttribute("class")||"").trim()}function k6(t,e){return t.nodeType===1&&" ".concat(A6(t)," ").indexOf(" ".concat(e," "))>-1}function O6(t,e){for(var n=t;n!=null;n=n.parentNode)if(k6(n,e.excludeClass)||e.exclude.indexOf(n)>-1)return!0;return!1}var T6=/^http:[\w\.\/]+svg$/;function P6(t){return T6.test(t.namespaceURI)&&t.nodeName.toLowerCase()!=="svg"}function L6(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var ue={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(t){t.preventDefault(),t.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:S6,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function de(t,e){if(!t)throw new Error("Panzoom requires an element as an argument");if(t.nodeType!==1)throw new Error("Panzoom requires an element with a nodeType of 1");if(!E6(t))throw new Error("Panzoom should be called on elements that have been attached to the DOM");e=c1(c1({},ue),e);var n=P6(t),c=t.parentNode;c.style.overflow=e.overflow,c.style.userSelect="none",c.style.touchAction=e.touchAction,(e.canvas?c:t).style.cursor=e.cursor,t.style.userSelect="none",t.style.touchAction=e.touchAction,v0(t,"transformOrigin",typeof e.origin=="string"?e.origin:n?"0 0":"50% 50%");function r(){c.style.overflow="",c.style.userSelect="",c.style.touchAction="",c.style.cursor="",t.style.cursor="",t.style.userSelect="",t.style.touchAction="",v0(t,"transformOrigin","")}function s(M){M===void 0&&(M={});for(var k in M)M.hasOwnProperty(k)&&(e[k]=M[k]);(M.hasOwnProperty("cursor")||M.hasOwnProperty("canvas"))&&(c.style.cursor=t.style.cursor="",(e.canvas?c:t).style.cursor=e.cursor),M.hasOwnProperty("overflow")&&(c.style.overflow=M.overflow),M.hasOwnProperty("touchAction")&&(c.style.touchAction=M.touchAction,t.style.touchAction=M.touchAction)}var i=0,o=0,a=1,u=!1;T(e.startScale,{animate:!1,force:!0}),setTimeout(function(){x(e.startX,e.startY,{animate:!1,force:!0})});function d(M,k,P){if(!P.silent){var I=new CustomEvent(M,{detail:k});t.dispatchEvent(I)}}function F(M,k,P){var I={x:i,y:o,scale:a,isSVG:n,originalEvent:P};return requestAnimationFrame(function(){typeof k.animate=="boolean"&&(k.animate?z6(t,k):v0(t,"transition","none")),k.setTransform(t,I,k),d(M,I,k),d("panzoomchange",I,k)}),I}function v(M,k,P,I){var z=c1(c1({},e),I),B={x:i,y:o,opts:z};if(!z.force&&(z.disablePan||z.panOnlyWhenZoomed&&a===z.startScale))return B;if(M=parseFloat(M),k=parseFloat(k),z.disableXAxis||(B.x=(z.relative?i:0)+M),z.disableYAxis||(B.y=(z.relative?o:0)+k),z.contain){var L=Vt(t),n1=L.elem.width/a,d1=L.elem.height/a,N1=n1*P,Y1=d1*P,_1=(N1-n1)/2,O1=(Y1-d1)/2;if(z.contain==="inside"){var C0=(-L.elem.margin.left-L.parent.padding.left+_1)/P,l=(L.parent.width-N1-L.parent.padding.left-L.elem.margin.left-L.parent.border.left-L.parent.border.right+_1)/P;B.x=Math.max(Math.min(B.x,l),C0);var f=(-L.elem.margin.top-L.parent.padding.top+O1)/P,h=(L.parent.height-Y1-L.parent.padding.top-L.elem.margin.top-L.parent.border.top-L.parent.border.bottom+O1)/P;B.y=Math.max(Math.min(B.y,h),f)}else if(z.contain==="outside"){var C0=(-(N1-L.parent.width)-L.parent.padding.left-L.parent.border.left-L.parent.border.right+_1)/P,l=(_1-L.parent.padding.left)/P;B.x=Math.max(Math.min(B.x,l),C0);var f=(-(Y1-L.parent.height)-L.parent.padding.top-L.parent.border.top-L.parent.border.bottom+O1)/P,h=(O1-L.parent.padding.top)/P;B.y=Math.max(Math.min(B.y,h),f)}}return z.roundPixels&&(B.x=Math.round(B.x),B.y=Math.round(B.y)),B}function S(M,k){var P=c1(c1({},e),k),I={scale:a,opts:P};if(!P.force&&P.disableZoom)return I;var z=e.minScale,B=e.maxScale;if(P.contain){var L=Vt(t),n1=L.elem.width/a,d1=L.elem.height/a;if(n1>1&&d1>1){var N1=L.parent.width-L.parent.border.left-L.parent.border.right,Y1=L.parent.height-L.parent.border.top-L.parent.border.bottom,_1=N1/n1,O1=Y1/d1;e.contain==="inside"?B=Math.min(B,_1,O1):e.contain==="outside"&&(z=Math.max(z,_1,O1))}}return I.scale=Math.min(Math.max(M,z),B),I}function x(M,k,P,I){var z=v(M,k,a,P);return i!==z.x||o!==z.y?(i=z.x,o=z.y,F("panzoompan",z.opts,I)):{x:i,y:o,scale:a,isSVG:n,originalEvent:I}}function T(M,k,P){var I=S(M,k),z=I.opts;if(!(!z.force&&z.disableZoom)){M=I.scale;var B=i,L=o;if(z.focal){var n1=z.focal;B=(n1.x/M-n1.x/a+i*M)/M,L=(n1.y/M-n1.y/a+o*M)/M}var d1=v(B,L,M,{relative:!1,force:!0});return i=d1.x,o=d1.y,a=M,F("panzoomzoom",z,P)}}function G(M,k){var P=c1(c1(c1({},e),{animate:!0}),k);return T(a*Math.exp((M?1:-1)*P.step),P)}function W(M){return G(!0,M)}function U(M){return G(!1,M)}function j(M,k,P,I){var z=Vt(t),B={width:z.parent.width-z.parent.padding.left-z.parent.padding.right-z.parent.border.left-z.parent.border.right,height:z.parent.height-z.parent.padding.top-z.parent.padding.bottom-z.parent.border.top-z.parent.border.bottom},L=k.clientX-z.parent.left-z.parent.padding.left-z.parent.border.left-z.elem.margin.left,n1=k.clientY-z.parent.top-z.parent.padding.top-z.parent.border.top-z.elem.margin.top;n||(L-=z.elem.width/a/2,n1-=z.elem.height/a/2);var d1={x:L/B.width*(B.width*M),y:n1/B.height*(B.height*M)};return T(M,c1(c1({},P),{animate:!1,focal:d1}),I)}function t1(M,k){M.preventDefault();var P=c1(c1(c1({},e),k),{animate:!1}),I=M.deltaY===0&&M.deltaX?M.deltaX:M.deltaY,z=I<0?1:-1,B=S(a*Math.exp(z*P.step/3),P).scale;return j(B,M,P,M)}function g1(M){var k=c1(c1(c1({},e),{animate:!0,force:!0}),M);a=S(k.startScale,k).scale;var P=v(k.startX,k.startY,a,k);return i=P.x,o=P.y,F("panzoomreset",k)}var N,C1,f1,G1,A1,k1,u1=[];function W1(M){if(!O6(M.target,e)){Zt(u1,M),u=!0,e.handleStartEvent(M),N=i,C1=o,d("panzoomstart",{x:i,y:o,scale:a,isSVG:n,originalEvent:M},e);var k=s3(u1);f1=k.clientX,G1=k.clientY,A1=a,k1=Lt(u1)}}function s0(M){if(!(!u||N===void 0||C1===void 0||f1===void 0||G1===void 0)){Zt(u1,M);var k=s3(u1),P=u1.length>1,I=a;if(P){k1===0&&(k1=Lt(u1));var z=Lt(u1)-k1;I=S(z*e.step/80+A1).scale,j(I,k,{animate:!1},M)}(!P||e.pinchAndPan)&&x(N+(k.clientX-f1)/I,C1+(k.clientY-G1)/I,{animate:!1},M)}}function g0(M){u1.length===1&&d("panzoomend",{x:i,y:o,scale:a,isSVG:n,originalEvent:M},e),w6(u1,M),u&&(u=!1,N=C1=f1=G1=void 0)}var e1=!1;function X(){e1||(e1=!0,$t("down",e.canvas?c:t,W1),$t("move",document,s0,{passive:!0}),$t("up",document,g0,{passive:!0}))}function Y(){e1=!1,Rt("down",e.canvas?c:t,W1),Rt("move",document,s0),Rt("up",document,g0)}return e.noBind||X(),{bind:X,destroy:Y,eventNames:j0,getPan:function(){return{x:i,y:o}},getScale:function(){return a},getOptions:function(){return L6(e)},handleDown:W1,handleMove:s0,handleUp:g0,pan:x,reset:g1,resetStyle:r,setOptions:s,setStyle:function(M,k){return v0(t,M,k)},zoom:T,zoomIn:W,zoomOut:U,zoomToPoint:j,zoomWithWheel:t1}}de.defaultOptions=ue;const $6=K0({__name:"Canvas",setup(t){const e=B1(),n=B1();return N3(()=>{const c=de(e.value);e.value.addEventListener("wheel",r=>{c.zoomWithWheel(r)}),p1.init(n,c)}),(c,r)=>($1(),j1("div",{ref_key:"canvas",ref:e,class:"canvas"},[q("div",{ref_key:"svg",ref:n},null,512)],512))}}),R6=wt($6,[["__scopeId","data-v-d4935a7c"]]),I6={class:"root"},V6=K0({__name:"App",setup(t){return(e,n)=>($1(),j1("div",I6,[i1(R6),i1(y6)]))}}),N6=wt(V6,[["__scopeId","data-v-6d3b68f8"]]);j5(N6).mount("#app");export{S1 as F,p1 as S,G5 as _,$1 as a,j1 as b,qt as c,K0 as d,q as e,P2 as f,s5 as g,o4 as h,wt as i,N3 as o,i4 as p,B1 as r,$0 as t,R5 as v,zt as w};
