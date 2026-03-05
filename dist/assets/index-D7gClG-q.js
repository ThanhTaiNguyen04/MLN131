function yh(o,d){for(var a=0;a<d.length;a++){const f=d[a];if(typeof f!="string"&&!Array.isArray(f)){for(const v in f)if(v!=="default"&&!(v in o)){const w=Object.getOwnPropertyDescriptor(f,v);w&&Object.defineProperty(o,v,w.get?w:{enumerable:!0,get:()=>f[v]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))f(v);new MutationObserver(v=>{for(const w of v)if(w.type==="childList")for(const N of w.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&f(N)}).observe(document,{childList:!0,subtree:!0});function a(v){const w={};return v.integrity&&(w.integrity=v.integrity),v.referrerPolicy&&(w.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?w.credentials="include":v.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(v){if(v.ep)return;v.ep=!0;const w=a(v);fetch(v.href,w)}})();function uc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ds={exports:{}},br={},Vs={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu;function wh(){if(Qu)return X;Qu=1;var o=Symbol.for("react.element"),d=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),T=Symbol.iterator;function F(g){return g===null||typeof g!="object"?null:(g=T&&g[T]||g["@@iterator"],typeof g=="function"?g:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,U={};function L(g,C,K){this.props=g,this.context=C,this.refs=U,this.updater=K||Y}L.prototype.isReactComponent={},L.prototype.setState=function(g,C){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,C,"setState")},L.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function re(){}re.prototype=L.prototype;function ie(g,C,K){this.props=g,this.context=C,this.refs=U,this.updater=K||Y}var Z=ie.prototype=new re;Z.constructor=ie,$(Z,L.prototype),Z.isPureReactComponent=!0;var ae=Array.isArray,ue=Object.prototype.hasOwnProperty,le={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function ye(g,C,K){var G,ee={},te=null,de=null;if(C!=null)for(G in C.ref!==void 0&&(de=C.ref),C.key!==void 0&&(te=""+C.key),C)ue.call(C,G)&&!ce.hasOwnProperty(G)&&(ee[G]=C[G]);var se=arguments.length-2;if(se===1)ee.children=K;else if(1<se){for(var ge=Array(se),$e=0;$e<se;$e++)ge[$e]=arguments[$e+2];ee.children=ge}if(g&&g.defaultProps)for(G in se=g.defaultProps,se)ee[G]===void 0&&(ee[G]=se[G]);return{$$typeof:o,type:g,key:te,ref:de,props:ee,_owner:le.current}}function ht(g,C){return{$$typeof:o,type:g.type,key:C,ref:g.ref,props:g.props,_owner:g._owner}}function wt(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Gt(g){var C={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(K){return C[K]})}var pt=/\/+/g;function We(g,C){return typeof g=="object"&&g!==null&&g.key!=null?Gt(""+g.key):C.toString(36)}function lt(g,C,K,G,ee){var te=typeof g;(te==="undefined"||te==="boolean")&&(g=null);var de=!1;if(g===null)de=!0;else switch(te){case"string":case"number":de=!0;break;case"object":switch(g.$$typeof){case o:case d:de=!0}}if(de)return de=g,ee=ee(de),g=G===""?"."+We(de,0):G,ae(ee)?(K="",g!=null&&(K=g.replace(pt,"$&/")+"/"),lt(ee,C,K,"",function($e){return $e})):ee!=null&&(wt(ee)&&(ee=ht(ee,K+(!ee.key||de&&de.key===ee.key?"":(""+ee.key).replace(pt,"$&/")+"/")+g)),C.push(ee)),1;if(de=0,G=G===""?".":G+":",ae(g))for(var se=0;se<g.length;se++){te=g[se];var ge=G+We(te,se);de+=lt(te,C,K,ge,ee)}else if(ge=F(g),typeof ge=="function")for(g=ge.call(g),se=0;!(te=g.next()).done;)te=te.value,ge=G+We(te,se++),de+=lt(te,C,K,ge,ee);else if(te==="object")throw C=String(g),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return de}function ft(g,C,K){if(g==null)return g;var G=[],ee=0;return lt(g,G,"","",function(te){return C.call(K,te,ee++)}),G}function He(g){if(g._status===-1){var C=g._result;C=C(),C.then(function(K){(g._status===0||g._status===-1)&&(g._status=1,g._result=K)},function(K){(g._status===0||g._status===-1)&&(g._status=2,g._result=K)}),g._status===-1&&(g._status=0,g._result=C)}if(g._status===1)return g._result.default;throw g._result}var we={current:null},z={transition:null},Q={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:z,ReactCurrentOwner:le};function D(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:ft,forEach:function(g,C,K){ft(g,function(){C.apply(this,arguments)},K)},count:function(g){var C=0;return ft(g,function(){C++}),C},toArray:function(g){return ft(g,function(C){return C})||[]},only:function(g){if(!wt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},X.Component=L,X.Fragment=a,X.Profiler=v,X.PureComponent=ie,X.StrictMode=f,X.Suspense=k,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,X.act=D,X.cloneElement=function(g,C,K){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var G=$({},g.props),ee=g.key,te=g.ref,de=g._owner;if(C!=null){if(C.ref!==void 0&&(te=C.ref,de=le.current),C.key!==void 0&&(ee=""+C.key),g.type&&g.type.defaultProps)var se=g.type.defaultProps;for(ge in C)ue.call(C,ge)&&!ce.hasOwnProperty(ge)&&(G[ge]=C[ge]===void 0&&se!==void 0?se[ge]:C[ge])}var ge=arguments.length-2;if(ge===1)G.children=K;else if(1<ge){se=Array(ge);for(var $e=0;$e<ge;$e++)se[$e]=arguments[$e+2];G.children=se}return{$$typeof:o,type:g.type,key:ee,ref:te,props:G,_owner:de}},X.createContext=function(g){return g={$$typeof:N,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},X.createElement=ye,X.createFactory=function(g){var C=ye.bind(null,g);return C.type=g,C},X.createRef=function(){return{current:null}},X.forwardRef=function(g){return{$$typeof:P,render:g}},X.isValidElement=wt,X.lazy=function(g){return{$$typeof:I,_payload:{_status:-1,_result:g},_init:He}},X.memo=function(g,C){return{$$typeof:_,type:g,compare:C===void 0?null:C}},X.startTransition=function(g){var C=z.transition;z.transition={};try{g()}finally{z.transition=C}},X.unstable_act=D,X.useCallback=function(g,C){return we.current.useCallback(g,C)},X.useContext=function(g){return we.current.useContext(g)},X.useDebugValue=function(){},X.useDeferredValue=function(g){return we.current.useDeferredValue(g)},X.useEffect=function(g,C){return we.current.useEffect(g,C)},X.useId=function(){return we.current.useId()},X.useImperativeHandle=function(g,C,K){return we.current.useImperativeHandle(g,C,K)},X.useInsertionEffect=function(g,C){return we.current.useInsertionEffect(g,C)},X.useLayoutEffect=function(g,C){return we.current.useLayoutEffect(g,C)},X.useMemo=function(g,C){return we.current.useMemo(g,C)},X.useReducer=function(g,C,K){return we.current.useReducer(g,C,K)},X.useRef=function(g){return we.current.useRef(g)},X.useState=function(g){return we.current.useState(g)},X.useSyncExternalStore=function(g,C,K){return we.current.useSyncExternalStore(g,C,K)},X.useTransition=function(){return we.current.useTransition()},X.version="18.3.1",X}var Wu;function Ws(){return Wu||(Wu=1,Vs.exports=wh()),Vs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function kh(){if($u)return br;$u=1;var o=Ws(),d=Symbol.for("react.element"),a=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,v=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function N(P,k,_){var I,T={},F=null,Y=null;_!==void 0&&(F=""+_),k.key!==void 0&&(F=""+k.key),k.ref!==void 0&&(Y=k.ref);for(I in k)f.call(k,I)&&!w.hasOwnProperty(I)&&(T[I]=k[I]);if(P&&P.defaultProps)for(I in k=P.defaultProps,k)T[I]===void 0&&(T[I]=k[I]);return{$$typeof:d,type:P,key:F,ref:Y,props:T,_owner:v.current}}return br.Fragment=a,br.jsx=N,br.jsxs=N,br}var Ku;function Nh(){return Ku||(Ku=1,Ds.exports=kh()),Ds.exports}var c=Nh(),R=Ws();const cc=uc(R),Sh=yh({__proto__:null,default:cc},[R]);var Fl={},Hs={exports:{}},Qe={},Fs={exports:{}},Bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu;function Ch(){return Xu||(Xu=1,(function(o){function d(z,Q){var D=z.length;z.push(Q);e:for(;0<D;){var g=D-1>>>1,C=z[g];if(0<v(C,Q))z[g]=Q,z[D]=C,D=g;else break e}}function a(z){return z.length===0?null:z[0]}function f(z){if(z.length===0)return null;var Q=z[0],D=z.pop();if(D!==Q){z[0]=D;e:for(var g=0,C=z.length,K=C>>>1;g<K;){var G=2*(g+1)-1,ee=z[G],te=G+1,de=z[te];if(0>v(ee,D))te<C&&0>v(de,ee)?(z[g]=de,z[te]=D,g=te):(z[g]=ee,z[G]=D,g=G);else if(te<C&&0>v(de,D))z[g]=de,z[te]=D,g=te;else break e}}return Q}function v(z,Q){var D=z.sortIndex-Q.sortIndex;return D!==0?D:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var N=Date,P=N.now();o.unstable_now=function(){return N.now()-P}}var k=[],_=[],I=1,T=null,F=3,Y=!1,$=!1,U=!1,L=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(z){for(var Q=a(_);Q!==null;){if(Q.callback===null)f(_);else if(Q.startTime<=z)f(_),Q.sortIndex=Q.expirationTime,d(k,Q);else break;Q=a(_)}}function ae(z){if(U=!1,Z(z),!$)if(a(k)!==null)$=!0,He(ue);else{var Q=a(_);Q!==null&&we(ae,Q.startTime-z)}}function ue(z,Q){$=!1,U&&(U=!1,re(ye),ye=-1),Y=!0;var D=F;try{for(Z(Q),T=a(k);T!==null&&(!(T.expirationTime>Q)||z&&!Gt());){var g=T.callback;if(typeof g=="function"){T.callback=null,F=T.priorityLevel;var C=g(T.expirationTime<=Q);Q=o.unstable_now(),typeof C=="function"?T.callback=C:T===a(k)&&f(k),Z(Q)}else f(k);T=a(k)}if(T!==null)var K=!0;else{var G=a(_);G!==null&&we(ae,G.startTime-Q),K=!1}return K}finally{T=null,F=D,Y=!1}}var le=!1,ce=null,ye=-1,ht=5,wt=-1;function Gt(){return!(o.unstable_now()-wt<ht)}function pt(){if(ce!==null){var z=o.unstable_now();wt=z;var Q=!0;try{Q=ce(!0,z)}finally{Q?We():(le=!1,ce=null)}}else le=!1}var We;if(typeof ie=="function")We=function(){ie(pt)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ft=lt.port2;lt.port1.onmessage=pt,We=function(){ft.postMessage(null)}}else We=function(){L(pt,0)};function He(z){ce=z,le||(le=!0,We())}function we(z,Q){ye=L(function(){z(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){$||Y||($=!0,He(ue))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ht=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return F},o.unstable_getFirstCallbackNode=function(){return a(k)},o.unstable_next=function(z){switch(F){case 1:case 2:case 3:var Q=3;break;default:Q=F}var D=F;F=Q;try{return z()}finally{F=D}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=F;F=z;try{return Q()}finally{F=D}},o.unstable_scheduleCallback=function(z,Q,D){var g=o.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?g+D:g):D=g,z){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=D+C,z={id:I++,callback:Q,priorityLevel:z,startTime:D,expirationTime:C,sortIndex:-1},D>g?(z.sortIndex=D,d(_,z),a(k)===null&&z===a(_)&&(U?(re(ye),ye=-1):U=!0,we(ae,D-g))):(z.sortIndex=C,d(k,z),$||Y||($=!0,He(ue))),z},o.unstable_shouldYield=Gt,o.unstable_wrapCallback=function(z){var Q=F;return function(){var D=F;F=Q;try{return z.apply(this,arguments)}finally{F=D}}}})(Bs)),Bs}var Gu;function bh(){return Gu||(Gu=1,Fs.exports=Ch()),Fs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu;function Eh(){if(Yu)return Qe;Yu=1;var o=Ws(),d=bh();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,v={};function w(e,t){N(e,t),N(e+"Capture",t)}function N(e,t){for(v[e]=t,e=0;e<t.length;e++)f.add(t[e])}var P=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},T={};function F(e){return k.call(T,e)?!0:k.call(I,e)?!1:_.test(e)?T[e]=!0:(I[e]=!0,!1)}function Y(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $(e,t,n,r){if(t===null||typeof t>"u"||Y(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function U(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];L[t]=new U(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(re,ie);L[t]=new U(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(re,ie);L[t]=new U(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(re,ie);L[t]=new U(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,t,n,r){var l=L.hasOwnProperty(t)?L[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($(t,n,l,r)&&(n=null),r||l===null?F(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ae=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),le=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),ht=Symbol.for("react.profiler"),wt=Symbol.for("react.provider"),Gt=Symbol.for("react.context"),pt=Symbol.for("react.forward_ref"),We=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),z=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,g;function C(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var K=!1;function G(e,t){if(!e||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var l=y.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,u=i.length-1;1<=s&&0<=u&&l[s]!==i[u];)u--;for(;1<=s&&0<=u;s--,u--)if(l[s]!==i[u]){if(s!==1||u!==1)do if(s--,u--,0>u||l[s]!==i[u]){var h=`
`+l[s].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=s&&0<=u);break}}}finally{K=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?C(e):""}function ee(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case le:return"Portal";case ht:return"Profiler";case ye:return"StrictMode";case We:return"Suspense";case lt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gt:return(e.displayName||"Context")+".Consumer";case wt:return(e._context.displayName||"Context")+".Provider";case pt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case He:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $e(e){var t=ge(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _r(e){e._valueTracker||(e._valueTracker=$e(e))}function Gs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ge(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ys(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=se(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Js(e,t){t=t.checked,t!=null&&Z(e,"checked",t,!1)}function Ql(e,t){Js(e,t);var n=se(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wl(e,t.type,se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wl(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+se(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(Fn(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:se(n)}}function to(e,t){var n=se(t.value),r=se(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function no(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ro(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ro(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,lo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sc=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){Sc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function io(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function so(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=io(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Cc=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(Cc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,gn=null,mn=null;function oo(e){if(e=cr(e)){if(typeof Zl!="function")throw Error(a(280));var t=e.stateNode;t&&(t=tl(t),Zl(e.stateNode,e.type,t))}}function ao(e){gn?mn?mn.push(e):mn=[e]:gn=e}function uo(){if(gn){var e=gn,t=mn;if(mn=gn=null,oo(e),t)for(e=0;e<t.length;e++)oo(t[e])}}function co(e,t){return e(t)}function ho(){}var ei=!1;function po(e,t,n){if(ei)return e(t,n);ei=!0;try{return co(e,t,n)}finally{ei=!1,(gn!==null||mn!==null)&&(ho(),uo())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var ti=!1;if(P)try{var An={};Object.defineProperty(An,"passive",{get:function(){ti=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{ti=!1}function bc(e,t,n,r,l,i,s,u,h){var y=Array.prototype.slice.call(arguments,3);try{t.apply(n,y)}catch(b){this.onError(b)}}var Qn=!1,zr=null,Ir=!1,ni=null,Ec={onError:function(e){Qn=!0,zr=e}};function jc(e,t,n,r,l,i,s,u,h){Qn=!1,zr=null,bc.apply(Ec,arguments)}function Tc(e,t,n,r,l,i,s,u,h){if(jc.apply(this,arguments),Qn){if(Qn){var y=zr;Qn=!1,zr=null}else throw Error(a(198));Ir||(Ir=!0,ni=y)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function go(e){if(Yt(e)!==e)throw Error(a(188))}function Pc(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return go(l),e;if(i===r)return go(l),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,u=l.child;u;){if(u===n){s=!0,n=l,r=i;break}if(u===r){s=!0,r=l,n=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===n){s=!0,n=i,r=l;break}if(u===r){s=!0,r=i,n=l;break}u=u.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function mo(e){return e=Pc(e),e!==null?vo(e):null}function vo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vo(e);if(t!==null)return t;e=e.sibling}return null}var xo=d.unstable_scheduleCallback,yo=d.unstable_cancelCallback,_c=d.unstable_shouldYield,Lc=d.unstable_requestPaint,Ne=d.unstable_now,Rc=d.unstable_getCurrentPriorityLevel,ri=d.unstable_ImmediatePriority,wo=d.unstable_UserBlockingPriority,Or=d.unstable_NormalPriority,zc=d.unstable_LowPriority,ko=d.unstable_IdlePriority,Mr=null,gt=null;function Ic(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Mr,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Dc,Oc=Math.log,Mc=Math.LN2;function Dc(e){return e>>>=0,e===0?32:31-(Oc(e)/Mc|0)|0}var Dr=64,Vr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var u=s&~l;u!==0?r=Wn(u):(i&=s,i!==0&&(r=Wn(i)))}else s=n&~l,s!==0?r=Wn(s):i!==0&&(r=Wn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),l=1<<n,r|=e[n],t&=~l;return r}function Vc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-it(i),u=1<<s,h=l[s];h===-1?((u&n)===0||(u&r)!==0)&&(l[s]=Vc(u,t)):h<=t&&(e.expiredLanes|=u),i&=~u}}function li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function No(){var e=Dr;return Dr<<=1,(Dr&4194240)===0&&(Dr=64),e}function ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $n(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function Fc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-it(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function si(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var oe=0;function So(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Co,oi,bo,Eo,jo,ai=!1,Fr=[],Pt=null,_t=null,Lt=null,Kn=new Map,Xn=new Map,Rt=[],Bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function To(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Gn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=cr(t),t!==null&&oi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Uc(e,t,n,r,l){switch(t){case"focusin":return Pt=Gn(Pt,e,t,n,r,l),!0;case"dragenter":return _t=Gn(_t,e,t,n,r,l),!0;case"mouseover":return Lt=Gn(Lt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Kn.set(i,Gn(Kn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Xn.set(i,Gn(Xn.get(i)||null,e,t,n,r,l)),!0}return!1}function Po(e){var t=Jt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=fo(n),t!==null){e.blockedOn=t,jo(e.priority,function(){bo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=cr(n),t!==null&&oi(t),e.blockedOn=n,!1;t.shift()}return!0}function _o(e,t,n){Br(e)&&n.delete(t)}function qc(){ai=!1,Pt!==null&&Br(Pt)&&(Pt=null),_t!==null&&Br(_t)&&(_t=null),Lt!==null&&Br(Lt)&&(Lt=null),Kn.forEach(_o),Xn.forEach(_o)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,ai||(ai=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,qc)))}function Jn(e){function t(l){return Yn(l,e)}if(0<Fr.length){Yn(Fr[0],e);for(var n=1;n<Fr.length;n++){var r=Fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pt!==null&&Yn(Pt,e),_t!==null&&Yn(_t,e),Lt!==null&&Yn(Lt,e),Kn.forEach(t),Xn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)Po(n),n.blockedOn===null&&Rt.shift()}var vn=ae.ReactCurrentBatchConfig,Ur=!0;function Ac(e,t,n,r){var l=oe,i=vn.transition;vn.transition=null;try{oe=1,ui(e,t,n,r)}finally{oe=l,vn.transition=i}}function Qc(e,t,n,r){var l=oe,i=vn.transition;vn.transition=null;try{oe=4,ui(e,t,n,r)}finally{oe=l,vn.transition=i}}function ui(e,t,n,r){if(Ur){var l=ci(e,t,n,r);if(l===null)ji(e,t,r,qr,n),To(e,r);else if(Uc(l,e,t,n,r))r.stopPropagation();else if(To(e,r),t&4&&-1<Bc.indexOf(e)){for(;l!==null;){var i=cr(l);if(i!==null&&Co(i),i=ci(e,t,n,r),i===null&&ji(e,t,r,qr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ji(e,t,r,null,n)}}var qr=null;function ci(e,t,n,r){if(qr=null,e=Jl(r),e=Jt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function Lo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rc()){case ri:return 1;case wo:return 4;case Or:case zc:return 16;case ko:return 536870912;default:return 16}default:return 16}}var zt=null,di=null,Ar=null;function Ro(){if(Ar)return Ar;var e,t=di,n=t.length,r,l="value"in zt?zt.value:zt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return Ar=l.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function zo(){return!1}function Ke(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wr:zo,this.isPropagationStopped=zo,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hi=Ke(xn),Zn=D({},xn,{view:0,detail:0}),Wc=Ke(Zn),pi,fi,er,$r=D({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(pi=e.screenX-er.screenX,fi=e.screenY-er.screenY):fi=pi=0,er=e),pi)},movementY:function(e){return"movementY"in e?e.movementY:fi}}),Io=Ke($r),$c=D({},$r,{dataTransfer:0}),Kc=Ke($c),Xc=D({},Zn,{relatedTarget:0}),gi=Ke(Xc),Gc=D({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yc=Ke(Gc),Jc=D({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zc=Ke(Jc),ed=D({},xn,{data:0}),Oo=Ke(ed),td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rd[e])?!!t[e]:!1}function mi(){return ld}var id=D({},Zn,{key:function(e){if(e.key){var t=td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sd=Ke(id),od=D({},$r,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mo=Ke(od),ad=D({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),ud=Ke(ad),cd=D({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dd=Ke(cd),hd=D({},$r,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pd=Ke(hd),fd=[9,13,27,32],vi=P&&"CompositionEvent"in window,tr=null;P&&"documentMode"in document&&(tr=document.documentMode);var gd=P&&"TextEvent"in window&&!tr,Do=P&&(!vi||tr&&8<tr&&11>=tr),Vo=" ",Ho=!1;function Fo(e,t){switch(e){case"keyup":return fd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function md(e,t){switch(e){case"compositionend":return Bo(t);case"keypress":return t.which!==32?null:(Ho=!0,Vo);case"textInput":return e=t.data,e===Vo&&Ho?null:e;default:return null}}function vd(e,t){if(yn)return e==="compositionend"||!vi&&Fo(e,t)?(e=Ro(),Ar=di=zt=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Do&&t.locale!=="ko"?null:t.data;default:return null}}var xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xd[e.type]:t==="textarea"}function qo(e,t,n,r){ao(r),t=Jr(t,"onChange"),0<t.length&&(n=new hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function yd(e){oa(e,0)}function Kr(e){var t=Cn(e);if(Gs(t))return e}function wd(e,t){if(e==="change")return t}var Ao=!1;if(P){var xi;if(P){var yi="oninput"in document;if(!yi){var Qo=document.createElement("div");Qo.setAttribute("oninput","return;"),yi=typeof Qo.oninput=="function"}xi=yi}else xi=!1;Ao=xi&&(!document.documentMode||9<document.documentMode)}function Wo(){nr&&(nr.detachEvent("onpropertychange",$o),rr=nr=null)}function $o(e){if(e.propertyName==="value"&&Kr(rr)){var t=[];qo(t,rr,e,Jl(e)),po(yd,t)}}function kd(e,t,n){e==="focusin"?(Wo(),nr=t,rr=n,nr.attachEvent("onpropertychange",$o)):e==="focusout"&&Wo()}function Nd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kr(rr)}function Sd(e,t){if(e==="click")return Kr(t)}function Cd(e,t){if(e==="input"||e==="change")return Kr(t)}function bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:bd;function lr(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!k.call(t,l)||!st(e[l],t[l]))return!1}return!0}function Ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xo(e,t){var n=Ko(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ko(n)}}function Go(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Go(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yo(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function wi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ed(e){var t=Yo(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Go(n.ownerDocument.documentElement,n)){if(r!==null&&wi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Xo(n,i);var s=Xo(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jd=P&&"documentMode"in document&&11>=document.documentMode,wn=null,ki=null,ir=null,Ni=!1;function Jo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ni||wn==null||wn!==Lr(r)||(r=wn,"selectionStart"in r&&wi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&lr(ir,r)||(ir=r,r=Jr(ki,"onSelect"),0<r.length&&(t=new hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionend:Xr("Transition","TransitionEnd")},Si={},Zo={};P&&(Zo=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Gr(e){if(Si[e])return Si[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zo)return Si[e]=t[n];return e}var ea=Gr("animationend"),ta=Gr("animationiteration"),na=Gr("animationstart"),ra=Gr("transitionend"),la=new Map,ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){la.set(e,t),w(t,[e])}for(var Ci=0;Ci<ia.length;Ci++){var bi=ia[Ci],Td=bi.toLowerCase(),Pd=bi[0].toUpperCase()+bi.slice(1);It(Td,"on"+Pd)}It(ea,"onAnimationEnd"),It(ta,"onAnimationIteration"),It(na,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(ra,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_d=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tc(r,t,void 0,e),e.currentTarget=null}function oa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var u=r[s],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==i&&l.isPropagationStopped())break e;sa(l,u,y),i=h}else for(s=0;s<r.length;s++){if(u=r[s],h=u.instance,y=u.currentTarget,u=u.listener,h!==i&&l.isPropagationStopped())break e;sa(l,u,y),i=h}}}if(Ir)throw e=ni,Ir=!1,ni=null,e}function pe(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+"__bubble";n.has(r)||(aa(t,e,2,!1),n.add(r))}function Ei(e,t,n){var r=0;t&&(r|=4),aa(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Yr]){e[Yr]=!0,f.forEach(function(n){n!=="selectionchange"&&(_d.has(n)||Ei(n,!1,e),Ei(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,Ei("selectionchange",!1,t))}}function aa(e,t,n,r){switch(Lo(t)){case 1:var l=Ac;break;case 4:l=Qc;break;default:l=ui}n=l.bind(null,t,n,e),l=void 0,!ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ji(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var h=s.tag;if((h===3||h===4)&&(h=s.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;s=s.return}for(;u!==null;){if(s=Jt(u),s===null)return;if(h=s.tag,h===5||h===6){r=i=s;continue e}u=u.parentNode}}r=r.return}po(function(){var y=i,b=Jl(n),E=[];e:{var S=la.get(e);if(S!==void 0){var O=hi,V=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":O=sd;break;case"focusin":V="focus",O=gi;break;case"focusout":V="blur",O=gi;break;case"beforeblur":case"afterblur":O=gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Io;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Kc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=ud;break;case ea:case ta:case na:O=Yc;break;case ra:O=dd;break;case"scroll":O=Wc;break;case"wheel":O=pd;break;case"copy":case"cut":case"paste":O=Zc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Mo}var H=(t&4)!==0,Se=!H&&e==="scroll",m=H?S!==null?S+"Capture":null:S;H=[];for(var p=y,x;p!==null;){x=p;var j=x.stateNode;if(x.tag===5&&j!==null&&(x=j,m!==null&&(j=qn(p,m),j!=null&&H.push(ar(p,j,x)))),Se)break;p=p.return}0<H.length&&(S=new O(S,V,null,n,b),E.push({event:S,listeners:H}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",S&&n!==Yl&&(V=n.relatedTarget||n.fromElement)&&(Jt(V)||V[kt]))break e;if((O||S)&&(S=b.window===b?b:(S=b.ownerDocument)?S.defaultView||S.parentWindow:window,O?(V=n.relatedTarget||n.toElement,O=y,V=V?Jt(V):null,V!==null&&(Se=Yt(V),V!==Se||V.tag!==5&&V.tag!==6)&&(V=null)):(O=null,V=y),O!==V)){if(H=Io,j="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(H=Mo,j="onPointerLeave",m="onPointerEnter",p="pointer"),Se=O==null?S:Cn(O),x=V==null?S:Cn(V),S=new H(j,p+"leave",O,n,b),S.target=Se,S.relatedTarget=x,j=null,Jt(b)===y&&(H=new H(m,p+"enter",V,n,b),H.target=x,H.relatedTarget=Se,j=H),Se=j,O&&V)t:{for(H=O,m=V,p=0,x=H;x;x=Nn(x))p++;for(x=0,j=m;j;j=Nn(j))x++;for(;0<p-x;)H=Nn(H),p--;for(;0<x-p;)m=Nn(m),x--;for(;p--;){if(H===m||m!==null&&H===m.alternate)break t;H=Nn(H),m=Nn(m)}H=null}else H=null;O!==null&&ua(E,S,O,H,!1),V!==null&&Se!==null&&ua(E,Se,V,H,!0)}}e:{if(S=y?Cn(y):window,O=S.nodeName&&S.nodeName.toLowerCase(),O==="select"||O==="input"&&S.type==="file")var B=wd;else if(Uo(S))if(Ao)B=Cd;else{B=Nd;var q=kd}else(O=S.nodeName)&&O.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(B=Sd);if(B&&(B=B(e,y))){qo(E,B,n,b);break e}q&&q(e,S,y),e==="focusout"&&(q=S._wrapperState)&&q.controlled&&S.type==="number"&&Wl(S,"number",S.value)}switch(q=y?Cn(y):window,e){case"focusin":(Uo(q)||q.contentEditable==="true")&&(wn=q,ki=y,ir=null);break;case"focusout":ir=ki=wn=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,Jo(E,n,b);break;case"selectionchange":if(jd)break;case"keydown":case"keyup":Jo(E,n,b)}var A;if(vi)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else yn?Fo(e,n)&&(W="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(W="onCompositionStart");W&&(Do&&n.locale!=="ko"&&(yn||W!=="onCompositionStart"?W==="onCompositionEnd"&&yn&&(A=Ro()):(zt=b,di="value"in zt?zt.value:zt.textContent,yn=!0)),q=Jr(y,W),0<q.length&&(W=new Oo(W,e,null,n,b),E.push({event:W,listeners:q}),A?W.data=A:(A=Bo(n),A!==null&&(W.data=A)))),(A=gd?md(e,n):vd(e,n))&&(y=Jr(y,"onBeforeInput"),0<y.length&&(b=new Oo("onBeforeInput","beforeinput",null,n,b),E.push({event:b,listeners:y}),b.data=A))}oa(E,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=qn(e,n),i!=null&&r.unshift(ar(e,i,l)),i=qn(e,t),i!=null&&r.push(ar(e,i,l))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ua(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var u=n,h=u.alternate,y=u.stateNode;if(h!==null&&h===r)break;u.tag===5&&y!==null&&(u=y,l?(h=qn(n,i),h!=null&&s.unshift(ar(n,h,u))):l||(h=qn(n,i),h!=null&&s.push(ar(n,h,u)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ld=/\r\n?/g,Rd=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Ld,`
`).replace(Rd,"")}function Zr(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(a(425))}function el(){}var Ti=null,Pi=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,zd=typeof clearTimeout=="function"?clearTimeout:void 0,da=typeof Promise=="function"?Promise:void 0,Id=typeof queueMicrotask=="function"?queueMicrotask:typeof da<"u"?function(e){return da.resolve(null).then(e).catch(Od)}:Li;function Od(e){setTimeout(function(){throw e})}function Ri(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Jn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Sn,ur="__reactProps$"+Sn,kt="__reactContainer$"+Sn,zi="__reactEvents$"+Sn,Md="__reactListeners$"+Sn,Dd="__reactHandles$"+Sn;function Jt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ha(e);e!==null;){if(n=e[mt])return n;e=ha(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[mt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function tl(e){return e[ur]||null}var Ii=[],bn=-1;function Mt(e){return{current:e}}function fe(e){0>bn||(e.current=Ii[bn],Ii[bn]=null,bn--)}function he(e,t){bn++,Ii[bn]=e.current,e.current=t}var Dt={},ze=Mt(Dt),Fe=Mt(!1),Zt=Dt;function En(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Be(e){return e=e.childContextTypes,e!=null}function nl(){fe(Fe),fe(ze)}function pa(e,t,n){if(ze.current!==Dt)throw Error(a(168));he(ze,t),he(Fe,n)}function fa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(a(108,de(e)||"Unknown",l));return D({},n,r)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Zt=ze.current,he(ze,e),he(Fe,Fe.current),!0}function ga(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=fa(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,fe(Fe),fe(ze),he(ze,e)):fe(Fe),he(Fe,n)}var Nt=null,ll=!1,Oi=!1;function ma(e){Nt===null?Nt=[e]:Nt.push(e)}function Vd(e){ll=!0,ma(e)}function Vt(){if(!Oi&&Nt!==null){Oi=!0;var e=0,t=oe;try{var n=Nt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,ll=!1}catch(l){throw Nt!==null&&(Nt=Nt.slice(e+1)),xo(ri,Vt),l}finally{oe=t,Oi=!1}}return null}var jn=[],Tn=0,il=null,sl=0,Je=[],Ze=0,en=null,St=1,Ct="";function tn(e,t){jn[Tn++]=sl,jn[Tn++]=il,il=e,sl=t}function va(e,t,n){Je[Ze++]=St,Je[Ze++]=Ct,Je[Ze++]=en,en=e;var r=St;e=Ct;var l=32-it(r)-1;r&=~(1<<l),n+=1;var i=32-it(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,St=1<<32-it(t)+l|n<<l|r,Ct=i+e}else St=1<<i|n<<l|r,Ct=e}function Mi(e){e.return!==null&&(tn(e,1),va(e,1,0))}function Di(e){for(;e===il;)il=jn[--Tn],jn[Tn]=null,sl=jn[--Tn],jn[Tn]=null;for(;e===en;)en=Je[--Ze],Je[Ze]=null,Ct=Je[--Ze],Je[Ze]=null,St=Je[--Ze],Je[Ze]=null}var Xe=null,Ge=null,me=!1,ot=null;function xa(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ge=null,!0):!1;default:return!1}}function Vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hi(e){if(me){var t=Ge;if(t){var n=t;if(!ya(e,t)){if(Vi(e))throw Error(a(418));t=Ot(n.nextSibling);var r=Xe;t&&ya(e,t)?xa(r,n):(e.flags=e.flags&-4097|2,me=!1,Xe=e)}}else{if(Vi(e))throw Error(a(418));e.flags=e.flags&-4097|2,me=!1,Xe=e}}}function wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function ol(e){if(e!==Xe)return!1;if(!me)return wa(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=Ge)){if(Vi(e))throw ka(),Error(a(418));for(;t;)xa(e,t),t=Ot(t.nextSibling)}if(wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Xe?Ot(e.stateNode.nextSibling):null;return!0}function ka(){for(var e=Ge;e;)e=Ot(e.nextSibling)}function Pn(){Ge=Xe=null,me=!1}function Fi(e){ot===null?ot=[e]:ot.push(e)}var Hd=ae.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var u=l.refs;s===null?delete u[i]:u[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function al(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Na(e){var t=e._init;return t(e._payload)}function Sa(e){function t(m,p){if(e){var x=m.deletions;x===null?(m.deletions=[p],m.flags|=16):x.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function l(m,p){return m=Wt(m,p),m.index=0,m.sibling=null,m}function i(m,p,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<p?(m.flags|=2,p):x):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,p,x,j){return p===null||p.tag!==6?(p=Ls(x,m.mode,j),p.return=m,p):(p=l(p,x),p.return=m,p)}function h(m,p,x,j){var B=x.type;return B===ce?b(m,p,x.props.children,j,x.key):p!==null&&(p.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===He&&Na(B)===p.type)?(j=l(p,x.props),j.ref=dr(m,p,x),j.return=m,j):(j=Rl(x.type,x.key,x.props,null,m.mode,j),j.ref=dr(m,p,x),j.return=m,j)}function y(m,p,x,j){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Rs(x,m.mode,j),p.return=m,p):(p=l(p,x.children||[]),p.return=m,p)}function b(m,p,x,j,B){return p===null||p.tag!==7?(p=cn(x,m.mode,j,B),p.return=m,p):(p=l(p,x),p.return=m,p)}function E(m,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ls(""+p,m.mode,x),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ue:return x=Rl(p.type,p.key,p.props,null,m.mode,x),x.ref=dr(m,null,p),x.return=m,x;case le:return p=Rs(p,m.mode,x),p.return=m,p;case He:var j=p._init;return E(m,j(p._payload),x)}if(Fn(p)||Q(p))return p=cn(p,m.mode,x,null),p.return=m,p;al(m,p)}return null}function S(m,p,x,j){var B=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return B!==null?null:u(m,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:return x.key===B?h(m,p,x,j):null;case le:return x.key===B?y(m,p,x,j):null;case He:return B=x._init,S(m,p,B(x._payload),j)}if(Fn(x)||Q(x))return B!==null?null:b(m,p,x,j,null);al(m,x)}return null}function O(m,p,x,j,B){if(typeof j=="string"&&j!==""||typeof j=="number")return m=m.get(x)||null,u(p,m,""+j,B);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ue:return m=m.get(j.key===null?x:j.key)||null,h(p,m,j,B);case le:return m=m.get(j.key===null?x:j.key)||null,y(p,m,j,B);case He:var q=j._init;return O(m,p,x,q(j._payload),B)}if(Fn(j)||Q(j))return m=m.get(x)||null,b(p,m,j,B,null);al(p,j)}return null}function V(m,p,x,j){for(var B=null,q=null,A=p,W=p=0,_e=null;A!==null&&W<x.length;W++){A.index>W?(_e=A,A=null):_e=A.sibling;var ne=S(m,A,x[W],j);if(ne===null){A===null&&(A=_e);break}e&&A&&ne.alternate===null&&t(m,A),p=i(ne,p,W),q===null?B=ne:q.sibling=ne,q=ne,A=_e}if(W===x.length)return n(m,A),me&&tn(m,W),B;if(A===null){for(;W<x.length;W++)A=E(m,x[W],j),A!==null&&(p=i(A,p,W),q===null?B=A:q.sibling=A,q=A);return me&&tn(m,W),B}for(A=r(m,A);W<x.length;W++)_e=O(A,m,W,x[W],j),_e!==null&&(e&&_e.alternate!==null&&A.delete(_e.key===null?W:_e.key),p=i(_e,p,W),q===null?B=_e:q.sibling=_e,q=_e);return e&&A.forEach(function($t){return t(m,$t)}),me&&tn(m,W),B}function H(m,p,x,j){var B=Q(x);if(typeof B!="function")throw Error(a(150));if(x=B.call(x),x==null)throw Error(a(151));for(var q=B=null,A=p,W=p=0,_e=null,ne=x.next();A!==null&&!ne.done;W++,ne=x.next()){A.index>W?(_e=A,A=null):_e=A.sibling;var $t=S(m,A,ne.value,j);if($t===null){A===null&&(A=_e);break}e&&A&&$t.alternate===null&&t(m,A),p=i($t,p,W),q===null?B=$t:q.sibling=$t,q=$t,A=_e}if(ne.done)return n(m,A),me&&tn(m,W),B;if(A===null){for(;!ne.done;W++,ne=x.next())ne=E(m,ne.value,j),ne!==null&&(p=i(ne,p,W),q===null?B=ne:q.sibling=ne,q=ne);return me&&tn(m,W),B}for(A=r(m,A);!ne.done;W++,ne=x.next())ne=O(A,m,W,ne.value,j),ne!==null&&(e&&ne.alternate!==null&&A.delete(ne.key===null?W:ne.key),p=i(ne,p,W),q===null?B=ne:q.sibling=ne,q=ne);return e&&A.forEach(function(xh){return t(m,xh)}),me&&tn(m,W),B}function Se(m,p,x,j){if(typeof x=="object"&&x!==null&&x.type===ce&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:e:{for(var B=x.key,q=p;q!==null;){if(q.key===B){if(B=x.type,B===ce){if(q.tag===7){n(m,q.sibling),p=l(q,x.props.children),p.return=m,m=p;break e}}else if(q.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===He&&Na(B)===q.type){n(m,q.sibling),p=l(q,x.props),p.ref=dr(m,q,x),p.return=m,m=p;break e}n(m,q);break}else t(m,q);q=q.sibling}x.type===ce?(p=cn(x.props.children,m.mode,j,x.key),p.return=m,m=p):(j=Rl(x.type,x.key,x.props,null,m.mode,j),j.ref=dr(m,p,x),j.return=m,m=j)}return s(m);case le:e:{for(q=x.key;p!==null;){if(p.key===q)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(m,p.sibling),p=l(p,x.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Rs(x,m.mode,j),p.return=m,m=p}return s(m);case He:return q=x._init,Se(m,p,q(x._payload),j)}if(Fn(x))return V(m,p,x,j);if(Q(x))return H(m,p,x,j);al(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(m,p.sibling),p=l(p,x),p.return=m,m=p):(n(m,p),p=Ls(x,m.mode,j),p.return=m,m=p),s(m)):n(m,p)}return Se}var _n=Sa(!0),Ca=Sa(!1),ul=Mt(null),cl=null,Ln=null,Bi=null;function Ui(){Bi=Ln=cl=null}function qi(e){var t=ul.current;fe(ul),e._currentValue=t}function Ai(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){cl=e,Bi=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(Bi!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(cl===null)throw Error(a(308));Ln=e,cl.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var nn=null;function Qi(e){nn===null?nn=[e]:nn.push(e)}function ba(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Qi(t)):(n.next=l.next,l.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ea(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(J&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,bt(e,n)}return l=r.interleaved,l===null?(t.next=t,Qi(r)):(t.next=l.next,l.next=t),r.interleaved=t,bt(e,n)}function dl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,si(e,n)}}function ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hl(e,t,n,r){var l=e.updateQueue;Ht=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var h=u,y=h.next;h.next=null,s===null?i=y:s.next=y,s=h;var b=e.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==s&&(u===null?b.firstBaseUpdate=y:u.next=y,b.lastBaseUpdate=h))}if(i!==null){var E=l.baseState;s=0,b=y=h=null,u=i;do{var S=u.lane,O=u.eventTime;if((r&S)===S){b!==null&&(b=b.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var V=e,H=u;switch(S=t,O=n,H.tag){case 1:if(V=H.payload,typeof V=="function"){E=V.call(O,E,S);break e}E=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=H.payload,S=typeof V=="function"?V.call(O,E,S):V,S==null)break e;E=D({},E,S);break e;case 2:Ht=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,S=l.effects,S===null?l.effects=[u]:S.push(u))}else O={eventTime:O,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(y=b=O,h=E):b=b.next=O,s|=S;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;S=u,u=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);if(b===null&&(h=E),l.baseState=h,l.firstBaseUpdate=y,l.lastBaseUpdate=b,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);sn|=s,e.lanes=s,e.memoizedState=E}}function Ta(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(a(191,l));l.call(r)}}}var hr={},vt=Mt(hr),pr=Mt(hr),fr=Mt(hr);function rn(e){if(e===hr)throw Error(a(174));return e}function $i(e,t){switch(he(fr,t),he(pr,e),he(vt,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}fe(vt),he(vt,t)}function zn(){fe(vt),fe(pr),fe(fr)}function Pa(e){rn(fr.current);var t=rn(vt.current),n=Kl(t,e.type);t!==n&&(he(pr,e),he(vt,n))}function Ki(e){pr.current===e&&(fe(vt),fe(pr))}var ve=Mt(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xi=[];function Gi(){for(var e=0;e<Xi.length;e++)Xi[e]._workInProgressVersionPrimary=null;Xi.length=0}var fl=ae.ReactCurrentDispatcher,Yi=ae.ReactCurrentBatchConfig,ln=0,xe=null,Ee=null,Te=null,gl=!1,gr=!1,mr=0,Fd=0;function Ie(){throw Error(a(321))}function Ji(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Zi(e,t,n,r,l,i){if(ln=i,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fl.current=e===null||e.memoizedState===null?Ad:Qd,e=n(r,l),gr){i=0;do{if(gr=!1,mr=0,25<=i)throw Error(a(301));i+=1,Te=Ee=null,t.updateQueue=null,fl.current=Wd,e=n(r,l)}while(gr)}if(fl.current=xl,t=Ee!==null&&Ee.next!==null,ln=0,Te=Ee=xe=null,gl=!1,t)throw Error(a(300));return e}function es(){var e=mr!==0;return mr=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?xe.memoizedState=Te=e:Te=Te.next=e,Te}function tt(){if(Ee===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Te===null?xe.memoizedState:Te.next;if(t!==null)Te=t,Ee=e;else{if(e===null)throw Error(a(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Te===null?xe.memoizedState=Te=e:Te=Te.next=e}return Te}function vr(e,t){return typeof t=="function"?t(e):t}function ts(e){var t=tt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Ee,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=s=null,h=null,y=i;do{var b=y.lane;if((ln&b)===b)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var E={lane:b,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=E,s=r):h=h.next=E,xe.lanes|=b,sn|=b}y=y.next}while(y!==null&&y!==i);h===null?s=r:h.next=u,st(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,xe.lanes|=i,sn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ns(e){var t=tt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);st(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _a(){}function La(e,t){var n=xe,r=tt(),l=t(),i=!st(r.memoizedState,l);if(i&&(r.memoizedState=l,Ue=!0),r=r.queue,rs(Ia.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,xr(9,za.bind(null,n,r,l,t),void 0,null),Pe===null)throw Error(a(349));(ln&30)!==0||Ra(n,t,l)}return l}function Ra(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function za(e,t,n,r){t.value=n,t.getSnapshot=r,Oa(t)&&Ma(e)}function Ia(e,t,n){return n(function(){Oa(t)&&Ma(e)})}function Oa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Ma(e){var t=bt(e,1);t!==null&&dt(t,e,1,-1)}function Da(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=qd.bind(null,xe,e),[t.memoizedState,e]}function xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Va(){return tt().memoizedState}function ml(e,t,n,r){var l=xt();xe.flags|=e,l.memoizedState=xr(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var l=tt();r=r===void 0?null:r;var i=void 0;if(Ee!==null){var s=Ee.memoizedState;if(i=s.destroy,r!==null&&Ji(r,s.deps)){l.memoizedState=xr(t,n,i,r);return}}xe.flags|=e,l.memoizedState=xr(1|t,n,i,r)}function Ha(e,t){return ml(8390656,8,e,t)}function rs(e,t){return vl(2048,8,e,t)}function Fa(e,t){return vl(4,2,e,t)}function Ba(e,t){return vl(4,4,e,t)}function Ua(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qa(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,Ua.bind(null,t,e),n)}function ls(){}function Aa(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ji(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qa(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ji(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wa(e,t,n){return(ln&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n):(st(n,t)||(n=No(),xe.lanes|=n,sn|=n,e.baseState=!0),t)}function Bd(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{oe=n,Yi.transition=r}}function $a(){return tt().memoizedState}function Ud(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ka(e))Xa(t,n);else if(n=ba(e,t,n,r),n!==null){var l=Ve();dt(n,e,r,l),Ga(n,t,r)}}function qd(e,t,n){var r=At(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ka(e))Xa(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,u=i(s,n);if(l.hasEagerState=!0,l.eagerState=u,st(u,s)){var h=t.interleaved;h===null?(l.next=l,Qi(t)):(l.next=h.next,h.next=l),t.interleaved=l;return}}catch{}finally{}n=ba(e,t,l,r),n!==null&&(l=Ve(),dt(n,e,r,l),Ga(n,t,r))}}function Ka(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Xa(e,t){gr=gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ga(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,si(e,n)}}var xl={readContext:et,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Ad={readContext:et,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Ha,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ml(4194308,4,Ua.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ml(4194308,4,e,t)},useInsertionEffect:function(e,t){return ml(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ud.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Da,useDebugValue:ls,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=Bd.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,l=xt();if(me){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Pe===null)throw Error(a(349));(ln&30)!==0||Ra(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ha(Ia.bind(null,r,i,e),[e]),r.flags|=2048,xr(9,za.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=xt(),t=Pe.identifierPrefix;if(me){var n=Ct,r=St;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qd={readContext:et,useCallback:Aa,useContext:et,useEffect:rs,useImperativeHandle:qa,useInsertionEffect:Fa,useLayoutEffect:Ba,useMemo:Qa,useReducer:ts,useRef:Va,useState:function(){return ts(vr)},useDebugValue:ls,useDeferredValue:function(e){var t=tt();return Wa(t,Ee.memoizedState,e)},useTransition:function(){var e=ts(vr)[0],t=tt().memoizedState;return[e,t]},useMutableSource:_a,useSyncExternalStore:La,useId:$a,unstable_isNewReconciler:!1},Wd={readContext:et,useCallback:Aa,useContext:et,useEffect:rs,useImperativeHandle:qa,useInsertionEffect:Fa,useLayoutEffect:Ba,useMemo:Qa,useReducer:ns,useRef:Va,useState:function(){return ns(vr)},useDebugValue:ls,useDeferredValue:function(e){var t=tt();return Ee===null?t.memoizedState=e:Wa(t,Ee.memoizedState,e)},useTransition:function(){var e=ns(vr)[0],t=tt().memoizedState;return[e,t]},useMutableSource:_a,useSyncExternalStore:La,useId:$a,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=D({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yl={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),l=At(e),i=Et(r,l);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,l),t!==null&&(dt(t,e,l,r),dl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),l=At(e),i=Et(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,l),t!==null&&(dt(t,e,l,r),dl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=At(e),l=Et(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ft(e,l,r),t!==null&&(dt(t,e,r,n),dl(t,e,r))}};function Ya(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(l,i):!0}function Ja(e,t,n){var r=!1,l=Dt,i=t.contextType;return typeof i=="object"&&i!==null?i=et(i):(l=Be(t)?Zt:ze.current,r=t.contextTypes,i=(r=r!=null)?En(e,l):Dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function ss(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Wi(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=et(i):(i=Be(t)?Zt:ze.current,l.context=En(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(is(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&yl.enqueueReplaceState(l,l.state,null),hl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=ee(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function as(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $d=typeof WeakMap=="function"?WeakMap:Map;function eu(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){El||(El=!0,Ss=r),as(e,t)},n}function tu(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){as(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){as(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $d;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=oh.bind(null,e,t,n),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Kd=ae.ReactCurrentOwner,Ue=!1;function De(e,t,n,r){t.child=e===null?Ca(t,null,n,r):_n(t,e.child,n,r)}function iu(e,t,n,r,l){n=n.render;var i=t.ref;return Rn(t,l),r=Zi(e,t,n,r,i,l),n=es(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,jt(e,t,l)):(me&&n&&Mi(t),t.flags|=1,De(e,t,r,l),t.child)}function su(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!_s(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ou(e,t,i,r,l)):(e=Rl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:lr,n(s,r)&&e.ref===t.ref)return jt(e,t,l)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function ou(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,jt(e,t,l)}return us(e,t,n,r,l)}function au(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Mn,Ye),Ye|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Mn,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he(Mn,Ye),Ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,he(Mn,Ye),Ye|=r;return De(e,t,l,n),t.child}function uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function us(e,t,n,r,l){var i=Be(n)?Zt:ze.current;return i=En(t,i),Rn(t,l),n=Zi(e,t,n,r,i,l),r=es(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,jt(e,t,l)):(me&&r&&Mi(t),t.flags|=1,De(e,t,n,l),t.child)}function cu(e,t,n,r,l){if(Be(n)){var i=!0;rl(t)}else i=!1;if(Rn(t,l),t.stateNode===null)kl(e,t),Ja(t,n,r),ss(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,u=t.memoizedProps;s.props=u;var h=s.context,y=n.contextType;typeof y=="object"&&y!==null?y=et(y):(y=Be(n)?Zt:ze.current,y=En(t,y));var b=n.getDerivedStateFromProps,E=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function";E||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==r||h!==y)&&Za(t,s,r,y),Ht=!1;var S=t.memoizedState;s.state=S,hl(t,r,s,l),h=t.memoizedState,u!==r||S!==h||Fe.current||Ht?(typeof b=="function"&&(is(t,n,b,r),h=t.memoizedState),(u=Ht||Ya(t,n,u,r,S,h,y))?(E||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=y,r=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ea(e,t),u=t.memoizedProps,y=t.type===t.elementType?u:at(t.type,u),s.props=y,E=t.pendingProps,S=s.context,h=n.contextType,typeof h=="object"&&h!==null?h=et(h):(h=Be(n)?Zt:ze.current,h=En(t,h));var O=n.getDerivedStateFromProps;(b=typeof O=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==E||S!==h)&&Za(t,s,r,h),Ht=!1,S=t.memoizedState,s.state=S,hl(t,r,s,l);var V=t.memoizedState;u!==E||S!==V||Fe.current||Ht?(typeof O=="function"&&(is(t,n,O,r),V=t.memoizedState),(y=Ht||Ya(t,n,y,r,S,V,h)||!1)?(b||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,V,h),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,V,h)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=V),s.props=r,s.state=V,s.context=h,r=y):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),r=!1)}return cs(e,t,n,r,i,l)}function cs(e,t,n,r,l,i){uu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&ga(t,n,!1),jt(e,t,i);r=t.stateNode,Kd.current=t;var u=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=_n(t,e.child,null,i),t.child=_n(t,null,u,i)):De(e,t,u,i),t.memoizedState=r.state,l&&ga(t,n,!0),t.child}function du(e){var t=e.stateNode;t.pendingContext?pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pa(e,t.context,!1),$i(e,t.containerInfo)}function hu(e,t,n,r,l){return Pn(),Fi(l),t.flags|=256,De(e,t,n,r),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function pu(e,t,n){var r=t.pendingProps,l=ve.current,i=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),he(ve,l&1),e===null)return Hi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=zl(s,r,0,null),e=cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=hs(n),t.memoizedState=ds,e):ps(t,s));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Xd(e,t,s,r,u,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,u=l.sibling;var h={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=Wt(l,h),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=Wt(u,i):(i=cn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?hs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=ds,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ps(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wl(e,t,n,r){return r!==null&&Fi(r),_n(t,e.child,null,n),e=ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xd(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=os(Error(a(422))),wl(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),i=cn(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&_n(t,e.child,null,s),t.child.memoizedState=hs(s),t.memoizedState=ds,i);if((t.mode&1)===0)return wl(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(a(419)),r=os(i,r,void 0),wl(e,t,s,r)}if(u=(s&e.childLanes)!==0,Ue||u){if(r=Pe,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|s))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,bt(e,l),dt(r,e,l,-1))}return Ps(),r=os(Error(a(421))),wl(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=ah.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ge=Ot(l.nextSibling),Xe=t,me=!0,ot=null,e!==null&&(Je[Ze++]=St,Je[Ze++]=Ct,Je[Ze++]=en,St=e.id,Ct=e.overflow,en=t),t=ps(t,r.children),t.flags|=4096,t)}function fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ai(e.return,t,n)}function fs(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function gu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(De(e,t,r.children,n),r=ve.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fu(e,n,t);else if(e.tag===19)fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(ve,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),fs(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}fs(t,!0,n,null,i);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function kl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gd(e,t,n){switch(t.tag){case 3:du(t),Pn();break;case 5:Pa(t);break;case 1:Be(t.type)&&rl(t);break;case 4:$i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;he(ul,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(ve,ve.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?pu(e,t,n):(he(ve,ve.current&1),e=jt(e,t,n),e!==null?e.sibling:null);he(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return gu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),he(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,au(e,t,n)}return jt(e,t,n)}var mu,gs,vu,xu;mu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},gs=function(){},vu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,rn(vt.current);var i=null;switch(n){case"input":l=Al(e,l),r=Al(e,r),i=[];break;case"select":l=D({},l,{value:void 0}),r=D({},r,{value:void 0}),i=[];break;case"textarea":l=$l(e,l),r=$l(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=el)}Xl(n,r);var s;n=null;for(y in l)if(!r.hasOwnProperty(y)&&l.hasOwnProperty(y)&&l[y]!=null)if(y==="style"){var u=l[y];for(s in u)u.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(v.hasOwnProperty(y)?i||(i=[]):(i=i||[]).push(y,null));for(y in r){var h=r[y];if(u=l!=null?l[y]:void 0,r.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(s in u)!u.hasOwnProperty(s)||h&&h.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in h)h.hasOwnProperty(s)&&u[s]!==h[s]&&(n||(n={}),n[s]=h[s])}else n||(i||(i=[]),i.push(y,n)),n=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(i=i||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(v.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&pe("scroll",e),i||u===h||(i=[])):(i=i||[]).push(y,h))}n&&(i=i||[]).push("style",n);var y=i;(t.updateQueue=y)&&(t.flags|=4)}},xu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yd(e,t,n){var r=t.pendingProps;switch(Di(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Be(t.type)&&nl(),Oe(t),null;case 3:return r=t.stateNode,zn(),fe(Fe),fe(ze),Gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ol(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ot!==null&&(Es(ot),ot=null))),gs(e,t),Oe(t),null;case 5:Ki(t);var l=rn(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)vu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Oe(t),null}if(e=rn(vt.current),ol(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[ur]=i,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(l=0;l<sr.length;l++)pe(sr[l],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Ys(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":eo(r,i),pe("invalid",r)}Xl(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var u=i[s];s==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),l=["children",""+u]):v.hasOwnProperty(s)&&u!=null&&s==="onScroll"&&pe("scroll",r)}switch(n){case"input":_r(r),Zs(r,i,!0);break;case"textarea":_r(r),no(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=el)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ro(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[mt]=t,e[ur]=r,mu(e,t,!1,!1),t.stateNode=e;e:{switch(s=Gl(n,r),n){case"dialog":pe("cancel",e),pe("close",e),l=r;break;case"iframe":case"object":case"embed":pe("load",e),l=r;break;case"video":case"audio":for(l=0;l<sr.length;l++)pe(sr[l],e);l=r;break;case"source":pe("error",e),l=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),l=r;break;case"details":pe("toggle",e),l=r;break;case"input":Ys(e,r),l=Al(e,r),pe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=D({},r,{value:void 0}),pe("invalid",e);break;case"textarea":eo(e,r),l=$l(e,r),pe("invalid",e);break;default:l=r}Xl(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var h=u[i];i==="style"?so(e,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&lo(e,h)):i==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Bn(e,h):typeof h=="number"&&Bn(e,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(v.hasOwnProperty(i)?h!=null&&i==="onScroll"&&pe("scroll",e):h!=null&&Z(e,i,h,s))}switch(n){case"input":_r(e),Zs(e,r,!1);break;case"textarea":_r(e),no(e);break;case"option":r.value!=null&&e.setAttribute("value",""+se(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?fn(e,!!r.multiple,i,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)xu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=rn(fr.current),rn(vt.current),ol(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Oe(t),null;case 13:if(fe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&Ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ka(),Pn(),t.flags|=98560,i=!1;else if(i=ol(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));i[mt]=t}else Pn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else ot!==null&&(Es(ot),ot=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ve.current&1)!==0?je===0&&(je=3):Ps())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return zn(),gs(e,t),e===null&&or(t.stateNode.containerInfo),Oe(t),null;case 10:return qi(t.type._context),Oe(t),null;case 17:return Be(t.type)&&nl(),Oe(t),null;case 19:if(fe(ve),i=t.memoizedState,i===null)return Oe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)yr(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=pl(e),s!==null){for(t.flags|=128,yr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(ve,ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ne()>Dn&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304)}else{if(!r)if(e=pl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!me)return Oe(t),null}else 2*Ne()-i.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ne(),t.sibling=null,n=ve.current,he(ve,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Ts(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ye&1073741824)!==0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Jd(e,t){switch(Di(t),t.tag){case 1:return Be(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),fe(Fe),fe(ze),Gi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ki(t),null;case 13:if(fe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ve),null;case 4:return zn(),null;case 10:return qi(t.type._context),null;case 22:case 23:return Ts(),null;case 24:return null;default:return null}}var Nl=!1,Me=!1,Zd=typeof WeakSet=="function"?WeakSet:Set,M=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function ms(e,t,n){try{n()}catch(r){ke(e,t,r)}}var yu=!1;function eh(e,t){if(Ti=Ur,e=Yo(),wi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,u=-1,h=-1,y=0,b=0,E=e,S=null;t:for(;;){for(var O;E!==n||l!==0&&E.nodeType!==3||(u=s+l),E!==i||r!==0&&E.nodeType!==3||(h=s+r),E.nodeType===3&&(s+=E.nodeValue.length),(O=E.firstChild)!==null;)S=E,E=O;for(;;){if(E===e)break t;if(S===n&&++y===l&&(u=s),S===i&&++b===r&&(h=s),(O=E.nextSibling)!==null)break;E=S,S=E.parentNode}E=O}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pi={focusedElem:e,selectionRange:n},Ur=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var V=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var H=V.memoizedProps,Se=V.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?H:at(t.type,H),Se);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(j){ke(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return V=yu,yu=!1,V}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ms(t,n,i)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[ur],delete t[zi],delete t[Md],delete t[Dd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ku(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=el));else if(r!==4&&(e=e.child,e!==null))for(xs(e,t,n),e=e.sibling;e!==null;)xs(e,t,n),e=e.sibling}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}var Le=null,ut=!1;function Bt(e,t,n){for(n=n.child;n!==null;)Su(e,t,n),n=n.sibling}function Su(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Mr,n)}catch{}switch(n.tag){case 5:Me||On(n,t);case 6:var r=Le,l=ut;Le=null,Bt(e,t,n),Le=r,ut=l,Le!==null&&(ut?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(ut?(e=Le,n=n.stateNode,e.nodeType===8?Ri(e.parentNode,n):e.nodeType===1&&Ri(e,n),Jn(e)):Ri(Le,n.stateNode));break;case 4:r=Le,l=ut,Le=n.stateNode.containerInfo,ut=!0,Bt(e,t,n),Le=r,ut=l;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&ms(n,t,s),l=l.next}while(l!==r)}Bt(e,t,n);break;case 1:if(!Me&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ke(n,t,u)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Bt(e,t,n),Me=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function Cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zd),t.forEach(function(r){var l=uh.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 5:Le=u.stateNode,ut=!1;break e;case 3:Le=u.stateNode.containerInfo,ut=!0;break e;case 4:Le=u.stateNode.containerInfo,ut=!0;break e}u=u.return}if(Le===null)throw Error(a(160));Su(i,s,l),Le=null,ut=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(y){ke(l,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bu(t,e),t=t.sibling}function bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),yt(e),r&4){try{wr(3,e,e.return),Sl(3,e)}catch(H){ke(e,e.return,H)}try{wr(5,e,e.return)}catch(H){ke(e,e.return,H)}}break;case 1:ct(t,e),yt(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(ct(t,e),yt(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var l=e.stateNode;try{Bn(l,"")}catch(H){ke(e,e.return,H)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Js(l,i),Gl(u,s);var y=Gl(u,i);for(s=0;s<h.length;s+=2){var b=h[s],E=h[s+1];b==="style"?so(l,E):b==="dangerouslySetInnerHTML"?lo(l,E):b==="children"?Bn(l,E):Z(l,b,E,y)}switch(u){case"input":Ql(l,i);break;case"textarea":to(l,i);break;case"select":var S=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var O=i.value;O!=null?fn(l,!!i.multiple,O,!1):S!==!!i.multiple&&(i.defaultValue!=null?fn(l,!!i.multiple,i.defaultValue,!0):fn(l,!!i.multiple,i.multiple?[]:"",!1))}l[ur]=i}catch(H){ke(e,e.return,H)}}break;case 6:if(ct(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(H){ke(e,e.return,H)}}break;case 3:if(ct(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(H){ke(e,e.return,H)}break;case 4:ct(t,e),yt(e);break;case 13:ct(t,e),yt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ns=Ne())),r&4&&Cu(e);break;case 22:if(b=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(y=Me)||b,ct(t,e),Me=y):ct(t,e),yt(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!b&&(e.mode&1)!==0)for(M=e,b=e.child;b!==null;){for(E=M=b;M!==null;){switch(S=M,O=S.child,S.tag){case 0:case 11:case 14:case 15:wr(4,S,S.return);break;case 1:On(S,S.return);var V=S.stateNode;if(typeof V.componentWillUnmount=="function"){r=S,n=S.return;try{t=r,V.props=t.memoizedProps,V.state=t.memoizedState,V.componentWillUnmount()}catch(H){ke(r,n,H)}}break;case 5:On(S,S.return);break;case 22:if(S.memoizedState!==null){Tu(E);continue}}O!==null?(O.return=S,M=O):Tu(E)}b=b.sibling}e:for(b=null,E=e;;){if(E.tag===5){if(b===null){b=E;try{l=E.stateNode,y?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=E.stateNode,h=E.memoizedProps.style,s=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=io("display",s))}catch(H){ke(e,e.return,H)}}}else if(E.tag===6){if(b===null)try{E.stateNode.nodeValue=y?"":E.memoizedProps}catch(H){ke(e,e.return,H)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;b===E&&(b=null),E=E.return}b===E&&(b=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:ct(t,e),yt(e),r&4&&Cu(e);break;case 21:break;default:ct(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ku(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Bn(l,""),r.flags&=-33);var i=Nu(e);ys(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,u=Nu(e);xs(e,u,s);break;default:throw Error(a(161))}}catch(h){ke(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function th(e,t,n){M=e,Eu(e)}function Eu(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var l=M,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||Nl;if(!s){var u=l.alternate,h=u!==null&&u.memoizedState!==null||Me;u=Nl;var y=Me;if(Nl=s,(Me=h)&&!y)for(M=l;M!==null;)s=M,h=s.child,s.tag===22&&s.memoizedState!==null?Pu(l):h!==null?(h.return=s,M=h):Pu(l);for(;i!==null;)M=i,Eu(i),i=i.sibling;M=l,Nl=u,Me=y}ju(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,M=i):ju(e)}}function ju(e){for(;M!==null;){var t=M;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Me||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ta(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ta(t,s,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var b=y.memoizedState;if(b!==null){var E=b.dehydrated;E!==null&&Jn(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Me||t.flags&512&&vs(t)}catch(S){ke(t,t.return,S)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Tu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Pu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(h){ke(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(h){ke(t,l,h)}}var i=t.return;try{vs(t)}catch(h){ke(t,i,h)}break;case 5:var s=t.return;try{vs(t)}catch(h){ke(t,s,h)}}}catch(h){ke(t,t.return,h)}if(t===e){M=null;break}var u=t.sibling;if(u!==null){u.return=t.return,M=u;break}M=t.return}}var nh=Math.ceil,Cl=ae.ReactCurrentDispatcher,ws=ae.ReactCurrentOwner,nt=ae.ReactCurrentBatchConfig,J=0,Pe=null,Ce=null,Re=0,Ye=0,Mn=Mt(0),je=0,kr=null,sn=0,bl=0,ks=0,Nr=null,qe=null,Ns=0,Dn=1/0,Tt=null,El=!1,Ss=null,Ut=null,jl=!1,qt=null,Tl=0,Sr=0,Cs=null,Pl=-1,_l=0;function Ve(){return(J&6)!==0?Ne():Pl!==-1?Pl:Pl=Ne()}function At(e){return(e.mode&1)===0?1:(J&2)!==0&&Re!==0?Re&-Re:Hd.transition!==null?(_l===0&&(_l=No()),_l):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Lo(e.type)),e)}function dt(e,t,n,r){if(50<Sr)throw Sr=0,Cs=null,Error(a(185));$n(e,n,r),((J&2)===0||e!==Pe)&&(e===Pe&&((J&2)===0&&(bl|=n),je===4&&Qt(e,Re)),Ae(e,r),n===1&&J===0&&(t.mode&1)===0&&(Dn=Ne()+500,ll&&Vt()))}function Ae(e,t){var n=e.callbackNode;Hc(e,t);var r=Hr(e,e===Pe?Re:0);if(r===0)n!==null&&yo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yo(n),t===1)e.tag===0?Vd(Lu.bind(null,e)):ma(Lu.bind(null,e)),Id(function(){(J&6)===0&&Vt()}),n=null;else{switch(So(r)){case 1:n=ri;break;case 4:n=wo;break;case 16:n=Or;break;case 536870912:n=ko;break;default:n=Or}n=Hu(n,_u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _u(e,t){if(Pl=-1,_l=0,(J&6)!==0)throw Error(a(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=Hr(e,e===Pe?Re:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ll(e,r);else{t=r;var l=J;J|=2;var i=zu();(Pe!==e||Re!==t)&&(Tt=null,Dn=Ne()+500,an(e,t));do try{ih();break}catch(u){Ru(e,u)}while(!0);Ui(),Cl.current=i,J=l,Ce!==null?t=0:(Pe=null,Re=0,t=je)}if(t!==0){if(t===2&&(l=li(e),l!==0&&(r=l,t=bs(e,l))),t===1)throw n=kr,an(e,0),Qt(e,r),Ae(e,Ne()),n;if(t===6)Qt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!rh(l)&&(t=Ll(e,r),t===2&&(i=li(e),i!==0&&(r=i,t=bs(e,i))),t===1))throw n=kr,an(e,0),Qt(e,r),Ae(e,Ne()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:un(e,qe,Tt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=Ns+500-Ne(),10<t)){if(Hr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Li(un.bind(null,e,qe,Tt),t);break}un(e,qe,Tt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-it(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nh(r/1960))-r,10<r){e.timeoutHandle=Li(un.bind(null,e,qe,Tt),r);break}un(e,qe,Tt);break;case 5:un(e,qe,Tt);break;default:throw Error(a(329))}}}return Ae(e,Ne()),e.callbackNode===n?_u.bind(null,e):null}function bs(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Ll(e,t),e!==2&&(t=qe,qe=n,t!==null&&Es(t)),e}function Es(e){qe===null?qe=e:qe.push.apply(qe,e)}function rh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!st(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~ks,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if((J&6)!==0)throw Error(a(327));Vn();var t=Hr(e,0);if((t&1)===0)return Ae(e,Ne()),null;var n=Ll(e,t);if(e.tag!==0&&n===2){var r=li(e);r!==0&&(t=r,n=bs(e,r))}if(n===1)throw n=kr,an(e,0),Qt(e,t),Ae(e,Ne()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,qe,Tt),Ae(e,Ne()),null}function js(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Dn=Ne()+500,ll&&Vt())}}function on(e){qt!==null&&qt.tag===0&&(J&6)===0&&Vn();var t=J;J|=1;var n=nt.transition,r=oe;try{if(nt.transition=null,oe=1,e)return e()}finally{oe=r,nt.transition=n,J=t,(J&6)===0&&Vt()}}function Ts(){Ye=Mn.current,fe(Mn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zd(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Di(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:zn(),fe(Fe),fe(ze),Gi();break;case 5:Ki(r);break;case 4:zn();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:qi(r.type._context);break;case 22:case 23:Ts()}n=n.return}if(Pe=e,Ce=e=Wt(e.current,null),Re=Ye=t,je=0,kr=null,ks=bl=sn=0,qe=Nr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}nn=null}return e}function Ru(e,t){do{var n=Ce;try{if(Ui(),fl.current=xl,gl){for(var r=xe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}gl=!1}if(ln=0,Te=Ee=xe=null,gr=!1,mr=0,ws.current=null,n===null||n.return===null){je=1,kr=t,Ce=null;break}e:{var i=e,s=n.return,u=n,h=t;if(t=Re,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,b=u,E=b.tag;if((b.mode&1)===0&&(E===0||E===11||E===15)){var S=b.alternate;S?(b.updateQueue=S.updateQueue,b.memoizedState=S.memoizedState,b.lanes=S.lanes):(b.updateQueue=null,b.memoizedState=null)}var O=ru(s);if(O!==null){O.flags&=-257,lu(O,s,u,i,t),O.mode&1&&nu(i,y,t),t=O,h=y;var V=t.updateQueue;if(V===null){var H=new Set;H.add(h),t.updateQueue=H}else V.add(h);break e}else{if((t&1)===0){nu(i,y,t),Ps();break e}h=Error(a(426))}}else if(me&&u.mode&1){var Se=ru(s);if(Se!==null){(Se.flags&65536)===0&&(Se.flags|=256),lu(Se,s,u,i,t),Fi(In(h,u));break e}}i=h=In(h,u),je!==4&&(je=2),Nr===null?Nr=[i]:Nr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=eu(i,h,t);ja(i,m);break e;case 1:u=h;var p=i.type,x=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ut===null||!Ut.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=tu(i,u,t);ja(i,j);break e}}i=i.return}while(i!==null)}Ou(n)}catch(B){t=B,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function zu(){var e=Cl.current;return Cl.current=xl,e===null?xl:e}function Ps(){(je===0||je===3||je===2)&&(je=4),Pe===null||(sn&268435455)===0&&(bl&268435455)===0||Qt(Pe,Re)}function Ll(e,t){var n=J;J|=2;var r=zu();(Pe!==e||Re!==t)&&(Tt=null,an(e,t));do try{lh();break}catch(l){Ru(e,l)}while(!0);if(Ui(),J=n,Cl.current=r,Ce!==null)throw Error(a(261));return Pe=null,Re=0,je}function lh(){for(;Ce!==null;)Iu(Ce)}function ih(){for(;Ce!==null&&!_c();)Iu(Ce)}function Iu(e){var t=Vu(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Ou(e):Ce=t,ws.current=null}function Ou(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Yd(n,t,Ye),n!==null){Ce=n;return}}else{if(n=Jd(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Ce=null;return}}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);je===0&&(je=5)}function un(e,t,n){var r=oe,l=nt.transition;try{nt.transition=null,oe=1,sh(e,t,n,r)}finally{nt.transition=l,oe=r}return null}function sh(e,t,n,r){do Vn();while(qt!==null);if((J&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Fc(e,i),e===Pe&&(Ce=Pe=null,Re=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||jl||(jl=!0,Hu(Or,function(){return Vn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=nt.transition,nt.transition=null;var s=oe;oe=1;var u=J;J|=4,ws.current=null,eh(e,n),bu(n,e),Ed(Pi),Ur=!!Ti,Pi=Ti=null,e.current=n,th(n),Lc(),J=u,oe=s,nt.transition=i}else e.current=n;if(jl&&(jl=!1,qt=e,Tl=l),i=e.pendingLanes,i===0&&(Ut=null),Ic(n.stateNode),Ae(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(El)throw El=!1,e=Ss,Ss=null,e;return(Tl&1)!==0&&e.tag!==0&&Vn(),i=e.pendingLanes,(i&1)!==0?e===Cs?Sr++:(Sr=0,Cs=e):Sr=0,Vt(),null}function Vn(){if(qt!==null){var e=So(Tl),t=nt.transition,n=oe;try{if(nt.transition=null,oe=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,Tl=0,(J&6)!==0)throw Error(a(331));var l=J;for(J|=4,M=e.current;M!==null;){var i=M,s=i.child;if((M.flags&16)!==0){var u=i.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(M=y;M!==null;){var b=M;switch(b.tag){case 0:case 11:case 15:wr(8,b,i)}var E=b.child;if(E!==null)E.return=b,M=E;else for(;M!==null;){b=M;var S=b.sibling,O=b.return;if(wu(b),b===y){M=null;break}if(S!==null){S.return=O,M=S;break}M=O}}}var V=i.alternate;if(V!==null){var H=V.child;if(H!==null){V.child=null;do{var Se=H.sibling;H.sibling=null,H=Se}while(H!==null)}}M=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,M=s;else e:for(;M!==null;){if(i=M,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:wr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,M=m;break e}M=i.return}}var p=e.current;for(M=p;M!==null;){s=M;var x=s.child;if((s.subtreeFlags&2064)!==0&&x!==null)x.return=s,M=x;else e:for(s=p;M!==null;){if(u=M,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Sl(9,u)}}catch(B){ke(u,u.return,B)}if(u===s){M=null;break e}var j=u.sibling;if(j!==null){j.return=u.return,M=j;break e}M=u.return}}if(J=l,Vt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Mr,e)}catch{}r=!0}return r}finally{oe=n,nt.transition=t}}return!1}function Mu(e,t,n){t=In(n,t),t=eu(e,t,1),e=Ft(e,t,1),t=Ve(),e!==null&&($n(e,1,t),Ae(e,t))}function ke(e,t,n){if(e.tag===3)Mu(e,e,n);else for(;t!==null;){if(t.tag===3){Mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=In(n,e),e=tu(t,e,1),t=Ft(t,e,1),e=Ve(),t!==null&&($n(t,1,e),Ae(t,e));break}}t=t.return}}function oh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Re&n)===n&&(je===4||je===3&&(Re&130023424)===Re&&500>Ne()-Ns?an(e,0):ks|=n),Ae(e,t)}function Du(e,t){t===0&&((e.mode&1)===0?t=1:(t=Vr,Vr<<=1,(Vr&130023424)===0&&(Vr=4194304)));var n=Ve();e=bt(e,t),e!==null&&($n(e,t,n),Ae(e,n))}function ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Du(e,n)}function uh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Du(e,n)}var Vu;Vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ue=!1,Gd(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,me&&(t.flags&1048576)!==0&&va(t,sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;kl(e,t),e=t.pendingProps;var l=En(t,ze.current);Rn(t,n),l=Zi(null,t,r,e,l,n);var i=es();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(i=!0,rl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Wi(t),l.updater=yl,t.stateNode=l,l._reactInternals=t,ss(t,r,e,n),t=cs(null,t,r,!0,i,n)):(t.tag=0,me&&i&&Mi(t),De(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(kl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=dh(r),e=at(r,e),l){case 0:t=us(null,t,r,e,n);break e;case 1:t=cu(null,t,r,e,n);break e;case 11:t=iu(null,t,r,e,n);break e;case 14:t=su(null,t,r,at(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:at(r,l),us(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:at(r,l),cu(e,t,r,l,n);case 3:e:{if(du(t),e===null)throw Error(a(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Ea(e,t),hl(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=In(Error(a(423)),t),t=hu(e,t,r,n,l);break e}else if(r!==l){l=In(Error(a(424)),t),t=hu(e,t,r,n,l);break e}else for(Ge=Ot(t.stateNode.containerInfo.firstChild),Xe=t,me=!0,ot=null,n=Ca(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),r===l){t=jt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return Pa(t),e===null&&Hi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,_i(r,l)?s=null:i!==null&&_i(r,i)&&(t.flags|=32),uu(e,t),De(e,t,s,n),t.child;case 6:return e===null&&Hi(t),null;case 13:return pu(e,t,n);case 4:return $i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:at(r,l),iu(e,t,r,l,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,he(ul,r._currentValue),r._currentValue=s,i!==null)if(st(i.value,s)){if(i.children===l.children&&!Fe.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){s=i.child;for(var h=u.firstContext;h!==null;){if(h.context===r){if(i.tag===1){h=Et(-1,n&-n),h.tag=2;var y=i.updateQueue;if(y!==null){y=y.shared;var b=y.pending;b===null?h.next=h:(h.next=b.next,b.next=h),y.pending=h}}i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),Ai(i.return,n,t),u.lanes|=n;break}h=h.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(a(341));s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ai(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}De(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Rn(t,n),l=et(l),r=r(l),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,l=at(r,t.pendingProps),l=at(r.type,l),su(e,t,r,l,n);case 15:return ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:at(r,l),kl(e,t),t.tag=1,Be(r)?(e=!0,rl(t)):e=!1,Rn(t,n),Ja(t,r,l),ss(t,r,l,n),cs(null,t,r,!0,e,n);case 19:return gu(e,t,n);case 22:return au(e,t,n)}throw Error(a(156,t.tag))};function Hu(e,t){return xo(e,t)}function ch(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new ch(e,t,n,r)}function _s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dh(e){if(typeof e=="function")return _s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pt)return 11;if(e===ft)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rl(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")_s(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ce:return cn(n.children,l,i,t);case ye:s=8,l|=8;break;case ht:return e=rt(12,n,t,l|2),e.elementType=ht,e.lanes=i,e;case We:return e=rt(13,n,t,l),e.elementType=We,e.lanes=i,e;case lt:return e=rt(19,n,t,l),e.elementType=lt,e.lanes=i,e;case we:return zl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wt:s=10;break e;case Gt:s=9;break e;case pt:s=11;break e;case ft:s=14;break e;case He:s=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=rt(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function cn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=rt(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function Ls(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Rs(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hh(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function zs(e,t,n,r,l,i,s,u,h){return e=new hh(e,t,n,u,h),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wi(i),e}function ph(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fu(e){if(!e)return Dt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(Be(n))return fa(e,n,t)}return t}function Bu(e,t,n,r,l,i,s,u,h){return e=zs(n,r,!0,e,l,i,s,u,h),e.context=Fu(null),n=e.current,r=Ve(),l=At(n),i=Et(r,l),i.callback=t??null,Ft(n,i,l),e.current.lanes=l,$n(e,l,r),Ae(e,r),e}function Il(e,t,n,r){var l=t.current,i=Ve(),s=At(l);return n=Fu(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(l,t,s),e!==null&&(dt(e,l,s,i),dl(e,l,s)),s}function Ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Is(e,t){Uu(e,t),(e=e.alternate)&&Uu(e,t)}function fh(){return null}var qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Os(e){this._internalRoot=e}Ml.prototype.render=Os.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Il(e,t,null,null)},Ml.prototype.unmount=Os.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Il(null,e,null,null)}),t[kt]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&Po(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Au(){}function gh(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var y=Ol(s);i.call(y)}}var s=Bu(t,r,e,0,null,!1,!1,"",Au);return e._reactRootContainer=s,e[kt]=s.current,or(e.nodeType===8?e.parentNode:e),on(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var y=Ol(h);u.call(y)}}var h=zs(e,0,!1,null,null,!1,!1,"",Au);return e._reactRootContainer=h,e[kt]=h.current,or(e.nodeType===8?e.parentNode:e),on(function(){Il(t,h,n,r)}),h}function Vl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var u=l;l=function(){var h=Ol(s);u.call(h)}}Il(t,s,e,l)}else s=gh(n,t,e,l,r);return Ol(s)}Co=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(si(t,n|1),Ae(t,Ne()),(J&6)===0&&(Dn=Ne()+500,Vt()))}break;case 13:on(function(){var r=bt(e,1);if(r!==null){var l=Ve();dt(r,e,1,l)}}),Is(e,1)}},oi=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Ve();dt(t,e,134217728,n)}Is(e,134217728)}},bo=function(e){if(e.tag===13){var t=At(e),n=bt(e,t);if(n!==null){var r=Ve();dt(n,e,t,r)}Is(e,t)}},Eo=function(){return oe},jo=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}},Zl=function(e,t,n){switch(t){case"input":if(Ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=tl(r);if(!l)throw Error(a(90));Gs(r),Ql(r,l)}}}break;case"textarea":to(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}},co=js,ho=on;var mh={usingClientEntryPoint:!1,Events:[cr,Cn,tl,ao,uo,js]},Cr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vh={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mo(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||fh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{Mr=Hl.inject(vh),gt=Hl}catch{}}return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mh,Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(t))throw Error(a(200));return ph(e,t,null,n)},Qe.createRoot=function(e,t){if(!Ms(e))throw Error(a(299));var n=!1,r="",l=qu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=zs(e,1,!1,null,null,n,!1,r,l),e[kt]=t.current,or(e.nodeType===8?e.parentNode:e),new Os(t)},Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=mo(t),e=e===null?null:e.stateNode,e},Qe.flushSync=function(e){return on(e)},Qe.hydrate=function(e,t,n){if(!Dl(t))throw Error(a(200));return Vl(null,e,t,!0,n)},Qe.hydrateRoot=function(e,t,n){if(!Ms(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=qu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Bu(t,null,e,1,n??null,l,!1,i,s),e[kt]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ml(t)},Qe.render=function(e,t,n){if(!Dl(t))throw Error(a(200));return Vl(null,e,t,!1,n)},Qe.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(a(40));return e._reactRootContainer?(on(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Qe.unstable_batchedUpdates=js,Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Dl(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Vl(e,t,n,!1,r)},Qe.version="18.3.1-next-f1338f8080-20240426",Qe}var Ju;function dc(){if(Ju)return Hs.exports;Ju=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),Hs.exports=Eh(),Hs.exports}var Zu;function jh(){if(Zu)return Fl;Zu=1;var o=dc();return Fl.createRoot=o.createRoot,Fl.hydrateRoot=o.hydrateRoot,Fl}var Th=jh();const Ph=uc(Th);dc();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Er(){return Er=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var a=arguments[d];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(o[f]=a[f])}return o},Er.apply(this,arguments)}var Kt;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(Kt||(Kt={}));const ec="popstate";function _h(o){o===void 0&&(o={});function d(f,v){let{pathname:w,search:N,hash:P}=f.location;return qs("",{pathname:w,search:N,hash:P},v.state&&v.state.usr||null,v.state&&v.state.key||"default")}function a(f,v){return typeof v=="string"?v:Ul(v)}return Rh(d,a,null,o)}function be(o,d){if(o===!1||o===null||typeof o>"u")throw new Error(d)}function $s(o,d){if(!o){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Lh(){return Math.random().toString(36).substr(2,8)}function tc(o,d){return{usr:o.state,key:o.key,idx:d}}function qs(o,d,a,f){return a===void 0&&(a=null),Er({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof d=="string"?Hn(d):d,{state:a,key:d&&d.key||f||Lh()})}function Ul(o){let{pathname:d="/",search:a="",hash:f=""}=o;return a&&a!=="?"&&(d+=a.charAt(0)==="?"?a:"?"+a),f&&f!=="#"&&(d+=f.charAt(0)==="#"?f:"#"+f),d}function Hn(o){let d={};if(o){let a=o.indexOf("#");a>=0&&(d.hash=o.substr(a),o=o.substr(0,a));let f=o.indexOf("?");f>=0&&(d.search=o.substr(f),o=o.substr(0,f)),o&&(d.pathname=o)}return d}function Rh(o,d,a,f){f===void 0&&(f={});let{window:v=document.defaultView,v5Compat:w=!1}=f,N=v.history,P=Kt.Pop,k=null,_=I();_==null&&(_=0,N.replaceState(Er({},N.state,{idx:_}),""));function I(){return(N.state||{idx:null}).idx}function T(){P=Kt.Pop;let L=I(),re=L==null?null:L-_;_=L,k&&k({action:P,location:U.location,delta:re})}function F(L,re){P=Kt.Push;let ie=qs(U.location,L,re);_=I()+1;let Z=tc(ie,_),ae=U.createHref(ie);try{N.pushState(Z,"",ae)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;v.location.assign(ae)}w&&k&&k({action:P,location:U.location,delta:1})}function Y(L,re){P=Kt.Replace;let ie=qs(U.location,L,re);_=I();let Z=tc(ie,_),ae=U.createHref(ie);N.replaceState(Z,"",ae),w&&k&&k({action:P,location:U.location,delta:0})}function $(L){let re=v.location.origin!=="null"?v.location.origin:v.location.href,ie=typeof L=="string"?L:Ul(L);return ie=ie.replace(/ $/,"%20"),be(re,"No window.location.(origin|href) available to create URL for href: "+ie),new URL(ie,re)}let U={get action(){return P},get location(){return o(v,N)},listen(L){if(k)throw new Error("A history only accepts one active listener");return v.addEventListener(ec,T),k=L,()=>{v.removeEventListener(ec,T),k=null}},createHref(L){return d(v,L)},createURL:$,encodeLocation(L){let re=$(L);return{pathname:re.pathname,search:re.search,hash:re.hash}},push:F,replace:Y,go(L){return N.go(L)}};return U}var nc;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(nc||(nc={}));function zh(o,d,a){return a===void 0&&(a="/"),Ih(o,d,a)}function Ih(o,d,a,f){let v=typeof d=="string"?Hn(d):d,w=Ks(v.pathname||"/",a);if(w==null)return null;let N=hc(o);Oh(N);let P=null;for(let k=0;P==null&&k<N.length;++k){let _=$h(w);P=Ah(N[k],_)}return P}function hc(o,d,a,f){d===void 0&&(d=[]),a===void 0&&(a=[]),f===void 0&&(f="");let v=(w,N,P)=>{let k={relativePath:P===void 0?w.path||"":P,caseSensitive:w.caseSensitive===!0,childrenIndex:N,route:w};k.relativePath.startsWith("/")&&(be(k.relativePath.startsWith(f),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+f+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(f.length));let _=Xt([f,k.relativePath]),I=a.concat(k);w.children&&w.children.length>0&&(be(w.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),hc(w.children,d,I,_)),!(w.path==null&&!w.index)&&d.push({path:_,score:Uh(_,w.index),routesMeta:I})};return o.forEach((w,N)=>{var P;if(w.path===""||!((P=w.path)!=null&&P.includes("?")))v(w,N);else for(let k of pc(w.path))v(w,N,k)}),d}function pc(o){let d=o.split("/");if(d.length===0)return[];let[a,...f]=d,v=a.endsWith("?"),w=a.replace(/\?$/,"");if(f.length===0)return v?[w,""]:[w];let N=pc(f.join("/")),P=[];return P.push(...N.map(k=>k===""?w:[w,k].join("/"))),v&&P.push(...N),P.map(k=>o.startsWith("/")&&k===""?"/":k)}function Oh(o){o.sort((d,a)=>d.score!==a.score?a.score-d.score:qh(d.routesMeta.map(f=>f.childrenIndex),a.routesMeta.map(f=>f.childrenIndex)))}const Mh=/^:[\w-]+$/,Dh=3,Vh=2,Hh=1,Fh=10,Bh=-2,rc=o=>o==="*";function Uh(o,d){let a=o.split("/"),f=a.length;return a.some(rc)&&(f+=Bh),d&&(f+=Vh),a.filter(v=>!rc(v)).reduce((v,w)=>v+(Mh.test(w)?Dh:w===""?Hh:Fh),f)}function qh(o,d){return o.length===d.length&&o.slice(0,-1).every((f,v)=>f===d[v])?o[o.length-1]-d[d.length-1]:0}function Ah(o,d,a){let{routesMeta:f}=o,v={},w="/",N=[];for(let P=0;P<f.length;++P){let k=f[P],_=P===f.length-1,I=w==="/"?d:d.slice(w.length)||"/",T=Qh({path:k.relativePath,caseSensitive:k.caseSensitive,end:_},I),F=k.route;if(!T)return null;Object.assign(v,T.params),N.push({params:v,pathname:Xt([w,T.pathname]),pathnameBase:Jh(Xt([w,T.pathnameBase])),route:F}),T.pathnameBase!=="/"&&(w=Xt([w,T.pathnameBase]))}return N}function Qh(o,d){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[a,f]=Wh(o.path,o.caseSensitive,o.end),v=d.match(a);if(!v)return null;let w=v[0],N=w.replace(/(.)\/+$/,"$1"),P=v.slice(1);return{params:f.reduce((_,I,T)=>{let{paramName:F,isOptional:Y}=I;if(F==="*"){let U=P[T]||"";N=w.slice(0,w.length-U.length).replace(/(.)\/+$/,"$1")}const $=P[T];return Y&&!$?_[F]=void 0:_[F]=($||"").replace(/%2F/g,"/"),_},{}),pathname:w,pathnameBase:N,pattern:o}}function Wh(o,d,a){d===void 0&&(d=!1),a===void 0&&(a=!0),$s(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let f=[],v="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(N,P,k)=>(f.push({paramName:P,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(f.push({paramName:"*"}),v+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?v+="\\/*$":o!==""&&o!=="/"&&(v+="(?:(?=\\/|$))"),[new RegExp(v,d?void 0:"i"),f]}function $h(o){try{return o.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return $s(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+d+").")),o}}function Ks(o,d){if(d==="/")return o;if(!o.toLowerCase().startsWith(d.toLowerCase()))return null;let a=d.endsWith("/")?d.length-1:d.length,f=o.charAt(a);return f&&f!=="/"?null:o.slice(a)||"/"}const Kh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xh=o=>Kh.test(o);function Gh(o,d){d===void 0&&(d="/");let{pathname:a,search:f="",hash:v=""}=typeof o=="string"?Hn(o):o,w;if(a)if(Xh(a))w=a;else{if(a.includes("//")){let N=a;a=a.replace(/\/\/+/g,"/"),$s(!1,"Pathnames cannot have embedded double slashes - normalizing "+(N+" -> "+a))}a.startsWith("/")?w=lc(a.substring(1),"/"):w=lc(a,d)}else w=d;return{pathname:w,search:Zh(f),hash:ep(v)}}function lc(o,d){let a=d.replace(/\/+$/,"").split("/");return o.split("/").forEach(v=>{v===".."?a.length>1&&a.pop():v!=="."&&a.push(v)}),a.length>1?a.join("/"):"/"}function Us(o,d,a,f){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+d+"` field ["+JSON.stringify(f)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yh(o){return o.filter((d,a)=>a===0||d.route.path&&d.route.path.length>0)}function fc(o,d){let a=Yh(o);return d?a.map((f,v)=>v===a.length-1?f.pathname:f.pathnameBase):a.map(f=>f.pathnameBase)}function gc(o,d,a,f){f===void 0&&(f=!1);let v;typeof o=="string"?v=Hn(o):(v=Er({},o),be(!v.pathname||!v.pathname.includes("?"),Us("?","pathname","search",v)),be(!v.pathname||!v.pathname.includes("#"),Us("#","pathname","hash",v)),be(!v.search||!v.search.includes("#"),Us("#","search","hash",v)));let w=o===""||v.pathname==="",N=w?"/":v.pathname,P;if(N==null)P=a;else{let T=d.length-1;if(!f&&N.startsWith("..")){let F=N.split("/");for(;F[0]==="..";)F.shift(),T-=1;v.pathname=F.join("/")}P=T>=0?d[T]:"/"}let k=Gh(v,P),_=N&&N!=="/"&&N.endsWith("/"),I=(w||N===".")&&a.endsWith("/");return!k.pathname.endsWith("/")&&(_||I)&&(k.pathname+="/"),k}const Xt=o=>o.join("/").replace(/\/\/+/g,"/"),Jh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Zh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,ep=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function tp(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const mc=["post","put","patch","delete"];new Set(mc);const np=["get",...mc];new Set(np);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jr(){return jr=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var a=arguments[d];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(o[f]=a[f])}return o},jr.apply(this,arguments)}const Xs=R.createContext(null),rp=R.createContext(null),hn=R.createContext(null),ql=R.createContext(null),pn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),vc=R.createContext(null);function lp(o,d){let{relative:a}=d===void 0?{}:d;Tr()||be(!1);let{basename:f,navigator:v}=R.useContext(hn),{hash:w,pathname:N,search:P}=yc(o,{relative:a}),k=N;return f!=="/"&&(k=N==="/"?f:Xt([f,N])),v.createHref({pathname:k,search:P,hash:w})}function Tr(){return R.useContext(ql)!=null}function Pr(){return Tr()||be(!1),R.useContext(ql).location}function xc(o){R.useContext(hn).static||R.useLayoutEffect(o)}function ip(){let{isDataRoute:o}=R.useContext(pn);return o?xp():sp()}function sp(){Tr()||be(!1);let o=R.useContext(Xs),{basename:d,future:a,navigator:f}=R.useContext(hn),{matches:v}=R.useContext(pn),{pathname:w}=Pr(),N=JSON.stringify(fc(v,a.v7_relativeSplatPath)),P=R.useRef(!1);return xc(()=>{P.current=!0}),R.useCallback(function(_,I){if(I===void 0&&(I={}),!P.current)return;if(typeof _=="number"){f.go(_);return}let T=gc(_,JSON.parse(N),w,I.relative==="path");o==null&&d!=="/"&&(T.pathname=T.pathname==="/"?d:Xt([d,T.pathname])),(I.replace?f.replace:f.push)(T,I.state,I)},[d,f,N,w,o])}function yc(o,d){let{relative:a}=d===void 0?{}:d,{future:f}=R.useContext(hn),{matches:v}=R.useContext(pn),{pathname:w}=Pr(),N=JSON.stringify(fc(v,f.v7_relativeSplatPath));return R.useMemo(()=>gc(o,JSON.parse(N),w,a==="path"),[o,N,w,a])}function op(o,d){return ap(o,d)}function ap(o,d,a,f){Tr()||be(!1);let{navigator:v}=R.useContext(hn),{matches:w}=R.useContext(pn),N=w[w.length-1],P=N?N.params:{};N&&N.pathname;let k=N?N.pathnameBase:"/";N&&N.route;let _=Pr(),I;if(d){var T;let L=typeof d=="string"?Hn(d):d;k==="/"||(T=L.pathname)!=null&&T.startsWith(k)||be(!1),I=L}else I=_;let F=I.pathname||"/",Y=F;if(k!=="/"){let L=k.replace(/^\//,"").split("/");Y="/"+F.replace(/^\//,"").split("/").slice(L.length).join("/")}let $=zh(o,{pathname:Y}),U=pp($&&$.map(L=>Object.assign({},L,{params:Object.assign({},P,L.params),pathname:Xt([k,v.encodeLocation?v.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?k:Xt([k,v.encodeLocation?v.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),w,a,f);return d&&U?R.createElement(ql.Provider,{value:{location:jr({pathname:"/",search:"",hash:"",state:null,key:"default"},I),navigationType:Kt.Pop}},U):U}function up(){let o=vp(),d=tp(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),a=o instanceof Error?o.stack:null,v={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},d),a?R.createElement("pre",{style:v},a):null,null)}const cp=R.createElement(up,null);class dp extends R.Component{constructor(d){super(d),this.state={location:d.location,revalidation:d.revalidation,error:d.error}}static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,a){return a.location!==d.location||a.revalidation!=="idle"&&d.revalidation==="idle"?{error:d.error,location:d.location,revalidation:d.revalidation}:{error:d.error!==void 0?d.error:a.error,location:a.location,revalidation:d.revalidation||a.revalidation}}componentDidCatch(d,a){console.error("React Router caught the following error during render",d,a)}render(){return this.state.error!==void 0?R.createElement(pn.Provider,{value:this.props.routeContext},R.createElement(vc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hp(o){let{routeContext:d,match:a,children:f}=o,v=R.useContext(Xs);return v&&v.static&&v.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(v.staticContext._deepestRenderedBoundaryId=a.route.id),R.createElement(pn.Provider,{value:d},f)}function pp(o,d,a,f){var v;if(d===void 0&&(d=[]),a===void 0&&(a=null),f===void 0&&(f=null),o==null){var w;if(!a)return null;if(a.errors)o=a.matches;else if((w=f)!=null&&w.v7_partialHydration&&d.length===0&&!a.initialized&&a.matches.length>0)o=a.matches;else return null}let N=o,P=(v=a)==null?void 0:v.errors;if(P!=null){let I=N.findIndex(T=>T.route.id&&(P==null?void 0:P[T.route.id])!==void 0);I>=0||be(!1),N=N.slice(0,Math.min(N.length,I+1))}let k=!1,_=-1;if(a&&f&&f.v7_partialHydration)for(let I=0;I<N.length;I++){let T=N[I];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(_=I),T.route.id){let{loaderData:F,errors:Y}=a,$=T.route.loader&&F[T.route.id]===void 0&&(!Y||Y[T.route.id]===void 0);if(T.route.lazy||$){k=!0,_>=0?N=N.slice(0,_+1):N=[N[0]];break}}}return N.reduceRight((I,T,F)=>{let Y,$=!1,U=null,L=null;a&&(Y=P&&T.route.id?P[T.route.id]:void 0,U=T.route.errorElement||cp,k&&(_<0&&F===0?(yp("route-fallback"),$=!0,L=null):_===F&&($=!0,L=T.route.hydrateFallbackElement||null)));let re=d.concat(N.slice(0,F+1)),ie=()=>{let Z;return Y?Z=U:$?Z=L:T.route.Component?Z=R.createElement(T.route.Component,null):T.route.element?Z=T.route.element:Z=I,R.createElement(hp,{match:T,routeContext:{outlet:I,matches:re,isDataRoute:a!=null},children:Z})};return a&&(T.route.ErrorBoundary||T.route.errorElement||F===0)?R.createElement(dp,{location:a.location,revalidation:a.revalidation,component:U,error:Y,children:ie(),routeContext:{outlet:null,matches:re,isDataRoute:!0}}):ie()},null)}var wc=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(wc||{}),kc=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(kc||{});function fp(o){let d=R.useContext(Xs);return d||be(!1),d}function gp(o){let d=R.useContext(rp);return d||be(!1),d}function mp(o){let d=R.useContext(pn);return d||be(!1),d}function Nc(o){let d=mp(),a=d.matches[d.matches.length-1];return a.route.id||be(!1),a.route.id}function vp(){var o;let d=R.useContext(vc),a=gp(),f=Nc();return d!==void 0?d:(o=a.errors)==null?void 0:o[f]}function xp(){let{router:o}=fp(wc.UseNavigateStable),d=Nc(kc.UseNavigateStable),a=R.useRef(!1);return xc(()=>{a.current=!0}),R.useCallback(function(v,w){w===void 0&&(w={}),a.current&&(typeof v=="number"?o.navigate(v):o.navigate(v,jr({fromRouteId:d},w)))},[o,d])}const ic={};function yp(o,d,a){ic[o]||(ic[o]=!0)}function wp(o,d){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function Bl(o){be(!1)}function kp(o){let{basename:d="/",children:a=null,location:f,navigationType:v=Kt.Pop,navigator:w,static:N=!1,future:P}=o;Tr()&&be(!1);let k=d.replace(/^\/*/,"/"),_=R.useMemo(()=>({basename:k,navigator:w,static:N,future:jr({v7_relativeSplatPath:!1},P)}),[k,P,w,N]);typeof f=="string"&&(f=Hn(f));let{pathname:I="/",search:T="",hash:F="",state:Y=null,key:$="default"}=f,U=R.useMemo(()=>{let L=Ks(I,k);return L==null?null:{location:{pathname:L,search:T,hash:F,state:Y,key:$},navigationType:v}},[k,I,T,F,Y,$,v]);return U==null?null:R.createElement(hn.Provider,{value:_},R.createElement(ql.Provider,{children:a,value:U}))}function Np(o){let{children:d,location:a}=o;return op(As(d),a)}new Promise(()=>{});function As(o,d){d===void 0&&(d=[]);let a=[];return R.Children.forEach(o,(f,v)=>{if(!R.isValidElement(f))return;let w=[...d,v];if(f.type===R.Fragment){a.push.apply(a,As(f.props.children,w));return}f.type!==Bl&&be(!1),!f.props.index||!f.props.children||be(!1);let N={id:f.props.id||w.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(N.children=As(f.props.children,w)),a.push(N)}),a}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qs(){return Qs=Object.assign?Object.assign.bind():function(o){for(var d=1;d<arguments.length;d++){var a=arguments[d];for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(o[f]=a[f])}return o},Qs.apply(this,arguments)}function Sp(o,d){if(o==null)return{};var a={},f=Object.keys(o),v,w;for(w=0;w<f.length;w++)v=f[w],!(d.indexOf(v)>=0)&&(a[v]=o[v]);return a}function Cp(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function bp(o,d){return o.button===0&&(!d||d==="_self")&&!Cp(o)}const Ep=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jp="6";try{window.__reactRouterVersion=jp}catch{}const Tp="startTransition",sc=Sh[Tp];function Pp(o){let{basename:d,children:a,future:f,window:v}=o,w=R.useRef();w.current==null&&(w.current=_h({window:v,v5Compat:!0}));let N=w.current,[P,k]=R.useState({action:N.action,location:N.location}),{v7_startTransition:_}=f||{},I=R.useCallback(T=>{_&&sc?sc(()=>k(T)):k(T)},[k,_]);return R.useLayoutEffect(()=>N.listen(I),[N,I]),R.useEffect(()=>wp(f),[f]),R.createElement(kp,{basename:d,children:a,location:P.location,navigationType:P.action,navigator:N,future:f})}const _p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dn=R.forwardRef(function(d,a){let{onClick:f,relative:v,reloadDocument:w,replace:N,state:P,target:k,to:_,preventScrollReset:I,viewTransition:T}=d,F=Sp(d,Ep),{basename:Y}=R.useContext(hn),$,U=!1;if(typeof _=="string"&&Lp.test(_)&&($=_,_p))try{let Z=new URL(window.location.href),ae=_.startsWith("//")?new URL(Z.protocol+_):new URL(_),ue=Ks(ae.pathname,Y);ae.origin===Z.origin&&ue!=null?_=ue+ae.search+ae.hash:U=!0}catch{}let L=lp(_,{relative:v}),re=Rp(_,{replace:N,state:P,target:k,preventScrollReset:I,relative:v,viewTransition:T});function ie(Z){f&&f(Z),Z.defaultPrevented||re(Z)}return R.createElement("a",Qs({},F,{href:$||L,onClick:U||w?f:ie,ref:a,target:k}))});var oc;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(oc||(oc={}));var ac;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(ac||(ac={}));function Rp(o,d){let{target:a,replace:f,state:v,preventScrollReset:w,relative:N,viewTransition:P}=d===void 0?{}:d,k=ip(),_=Pr(),I=yc(o,{relative:N});return R.useCallback(T=>{if(bp(T,a)){T.preventDefault();let F=f!==void 0?f:Ul(_)===Ul(I);k(o,{replace:F,state:v,preventScrollReset:w,relative:N,viewTransition:P})}},[_,k,I,f,v,a,o,w,N,P])}function zp(){const o=[{title:"Nội Dung Chi Tiết",description:"Tìm hiểu về nền kinh tế thị trường định hướng XHCN một cách đầy đủ và dễ hiểu"},{title:"Trò Chơi Quiz",description:"Kiểm tra kiến thức của bạn qua các câu hỏi tương tác thú vị"},{title:"Trực Quan Hóa",description:"Biểu đồ, hình ảnh minh họa giúp dễ dàng tiếp thu kiến thức"},{title:"Học Tập Hiệu Quả",description:"Phương pháp học tập hiện đại với giao diện thân thiện"}],d=[{number:"8",label:"Đặc Trưng CNXH"},{number:"8",label:"Phương Hướng"},{number:"100+",label:"Câu Hỏi Quiz"},{number:"∞",label:"Kiến Thức"}];return c.jsxs("div",{className:"animate-fade-in",children:[c.jsxs("section",{className:"relative bg-gradient-to-br from-red-600 via-red-700 to-blue-900 text-white py-32 overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-black opacity-10"}),c.jsxs("div",{className:"absolute inset-0",children:[c.jsx("div",{className:"absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"}),c.jsx("div",{className:"absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow",style:{animationDelay:"1s"}})]}),c.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"text-center animate-slide-down",children:[c.jsx("div",{className:"mb-8",children:c.jsx("span",{className:"inline-block bg-yellow-400 text-red-900 px-6 py-3 rounded-full font-bold text-lg mb-6",children:"Việt Nam"})}),c.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight",children:["Nền Kinh Tế Thị Trường",c.jsx("br",{}),c.jsx("span",{className:"text-yellow-300",children:"Định Hướng Xã Hội Chủ Nghĩa"})]}),c.jsxs("p",{className:"text-2xl sm:text-3xl mb-12 max-w-4xl mx-auto font-light leading-relaxed",children:["Khám phá mô hình kinh tế độc đáo của Việt Nam",c.jsx("br",{}),"Học tập hiệu quả với công nghệ hiện đại"]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 justify-center items-center",children:[c.jsx(dn,{to:"/learn",className:"bg-white text-red-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-2xl w-64 text-center",children:"Bắt Đầu Học"}),c.jsx(dn,{to:"/quiz",className:"bg-blue-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-2xl w-64 text-center",children:"Chơi Quiz"})]})]})})]}),c.jsx("section",{className:"py-16 bg-white",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:d.map((a,f)=>c.jsxs("div",{className:"text-center p-8 bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg",children:[c.jsx("div",{className:"text-5xl font-black text-blue-600 mb-3",children:a.number}),c.jsx("div",{className:"text-lg font-semibold text-gray-700",children:a.label})]},f))})})}),c.jsx("section",{className:"py-20 bg-gray-50",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"text-center mb-16",children:[c.jsx("h2",{className:"text-5xl font-black text-gray-900 mb-4",children:"Đặc Điểm Nổi Bật"}),c.jsx("div",{className:"w-24 h-2 bg-red-600 mx-auto rounded-full"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:o.map((a,f)=>c.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-t-4 border-blue-600",children:[c.jsx("h3",{className:"text-2xl font-bold mb-4 text-gray-900",children:a.title}),c.jsx("p",{className:"text-gray-600 text-lg leading-relaxed",children:a.description})]},f))})]})}),c.jsx("section",{className:"py-20 bg-white",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-5xl font-black mb-8 text-gray-900",children:"Tại Sao Nên Học?"}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"flex items-start space-x-4 bg-blue-50 p-6 rounded-xl",children:[c.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl",children:"1"}),c.jsx("p",{className:"text-xl text-gray-700 pt-2",children:"Hiểu rõ về mô hình kinh tế độc đáo của Việt Nam"})]}),c.jsxs("div",{className:"flex items-start space-x-4 bg-red-50 p-6 rounded-xl",children:[c.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl",children:"2"}),c.jsx("p",{className:"text-xl text-gray-700 pt-2",children:"Nắm vững kiến thức cho các kỳ thi và học tập"})]}),c.jsxs("div",{className:"flex items-start space-x-4 bg-blue-50 p-6 rounded-xl",children:[c.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl",children:"3"}),c.jsx("p",{className:"text-xl text-gray-700 pt-2",children:"Phát triển tư duy phản biện về kinh tế - xã hội"})]})]})]}),c.jsxs("div",{className:"bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl",children:[c.jsx("h3",{className:"text-4xl font-black mb-6",children:"Nội Dung Học Tập"}),c.jsxs("ul",{className:"space-y-4 text-xl",children:[c.jsxs("li",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),c.jsx("span",{children:"8 Đặc trưng cơ bản của CNXH"})]}),c.jsxs("li",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),c.jsx("span",{children:"8 Phương hướng xây dựng"})]}),c.jsxs("li",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),c.jsx("span",{children:"Ý nghĩa bỏ qua TBCN"})]}),c.jsxs("li",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),c.jsx("span",{children:"Đặc điểm thời kỳ quá độ"})]}),c.jsxs("li",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:"w-2 h-2 bg-yellow-400 rounded-full"}),c.jsx("span",{children:"Mục tiêu phát triển đến 2045"})]})]}),c.jsx(dn,{to:"/learn",className:"mt-8 inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300",children:"Xem Chi Tiết"})]})]})})}),c.jsxs("section",{className:"py-24 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 relative overflow-hidden",children:[c.jsx("div",{className:"absolute inset-0 bg-black opacity-20"}),c.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[c.jsx("h2",{className:"text-5xl sm:text-6xl font-black text-white mb-8",children:"Sẵn Sàng Bắt Đầu?"}),c.jsx("p",{className:"text-2xl text-white mb-12 max-w-3xl mx-auto",children:"Hành trình khám phá kiến thức về nền kinh tế Việt Nam bắt đầu từ đây"}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 justify-center",children:[c.jsx(dn,{to:"/learn",className:"bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-2xl",children:"Học Ngay"}),c.jsx(dn,{to:"/about",className:"bg-transparent border-4 border-white text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-blue-600 transform hover:scale-110 transition-all duration-300",children:"Tìm Hiểu Thêm"})]})]})]})]})}function Ip(){const[o,d]=R.useState(0),[a,f]=R.useState([]),[v,w]=R.useState(!1);R.useEffect(()=>{const _=localStorage.getItem("mln131-progress");_&&f(JSON.parse(_))},[]),R.useEffect(()=>{a.length>0&&(localStorage.setItem("mln131-progress",JSON.stringify(a)),a.length===4&&!v&&setTimeout(()=>w(!0),500))},[a]);const N=_=>{a.includes(_)||f([...a,_])},P=()=>{f([]),localStorage.removeItem("mln131-progress"),w(!1)},k=[{id:1,title:"I. ĐẶC ĐIỂM QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM",content:`
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            Quá trình quá độ lên chủ nghĩa xã hội ở Việt Nam mang đặc điểm <strong>đặc thù</strong>,
            xuất phát từ điểm khởi đầu thấp kém và diễn ra trong bối cảnh thời đại đầy biến động.
          </p>
        </div>

        <!-- Section 1: Điểm xuất phát -->
        <div class="mb-10">
          <div class="relative bg-white border-l-8 border-blue-600 shadow-xl rounded-lg p-6 mb-6 hover:shadow-2xl transition-all">
            <h4 class="text-2xl font-bold text-blue-800 mb-4">
              1. Điểm xuất phát: thấp, phức tạp và nhiều hệ lụy lịch sử
            </h4>
          </div>

          <!-- Hình ảnh minh họa -->
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/pics/I/Ia.png" 
                alt="Nông nghiệp truyền thống Việt Nam"
                class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p class="text-white font-semibold">Nền nông nghiệp lạc hậu - điểm xuất phát</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/pics/I/Screenshot 2026-03-04 204716.png" 
                alt="Khắc phục hậu quả chiến tranh"
                class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p class="text-white font-semibold">Khắc phục hậu quả chiến tranh</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h5 class="text-xl font-bold text-blue-700 mb-4">
                a. Xuất phát từ xã hội thuộc địa, nửa phong kiến
              </h5>
              <div class="space-y-3 text-gray-700">
                <p class="leading-relaxed">
                  Việt Nam bước vào thời kỳ quá độ từ một nền kinh tế mang đặc trưng <strong>nông nghiệp lạc hậu</strong>,
                  sản xuất nhỏ là chủ yếu; lực lượng sản xuất còn thấp kém, cơ sở vật chất — kỹ thuật nghèo nàn;
                  giai cấp công nhân còn non yếu, tư sản dân tộc chưa phát triển đủ mạnh.
                </p>
                <div class="bg-blue-50 p-4 rounded-lg mt-4">
                  <p class="font-semibold text-blue-800">Hệ quả:</p>
                  <p class="text-gray-700 mt-2">
                    Điều này khiến thời kỳ quá độ tất yếu phải <strong>kéo dài</strong>, vì Việt Nam không có 
                    <em>bệ phóng công nghiệp tư bản</em> như các nước phương Tây từng trải qua.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h5 class="text-xl font-bold text-red-700 mb-4">
                b. Hậu quả nặng nề của chiến tranh
              </h5>
              <div class="space-y-3 text-gray-700">
                <p class="leading-relaxed">
                  Hàng chục năm chiến tranh liên tiếp đã để lại những hệ lụy sâu sắc:
                </p>
                <ul class="space-y-2 ml-6">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2 mt-1">•</span>
                    <span>Hạ tầng kinh tế bị <strong>tàn phá</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2 mt-1">•</span>
                    <span>Nguồn nhân lực <strong>tổn thất lớn</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2 mt-1">•</span>
                    <span>Môi trường xã hội chịu nhiều <strong>biến động</strong></span>
                  </li>
                </ul>
                <div class="bg-red-50 p-4 rounded-lg mt-4">
                  <p class="leading-relaxed">
                    Vì vậy, nhiệm vụ của thời kỳ quá độ không chỉ là xây dựng mà còn phải đồng thời 
                    <strong>khôi phục và hàn gắn</strong> những tổn thất do chiến tranh để lại.
                  </p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg mt-4 border-l-4 border-gray-400">
                  <div class="mb-3">
                    <img 
                      src="/pics/I/Mưa đỏ.png" 
                      alt="Phim Mưa đỏ - Tái hiện chiến tranh Việt Nam"
                      class="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <p class="text-sm italic text-gray-600 mb-2">
                    <strong>Tư liệu điện ảnh:</strong> Bộ phim <em>Mưa đỏ</em> là một trong những tác phẩm tái hiện 
                    chân thực sự tàn khốc của chiến tranh, cho thấy mức độ tàn phá mà Việt Nam phải gánh chịu.
                  </p>
                  <p class="text-sm text-gray-600">
                    <strong>Tư liệu tham khảo:</strong> Bảo tàng Chứng tích Chiến tranh (baotangchungtichchientranh.vn), 
                    Bảo tàng Lịch sử Quân sự Việt Nam (baotanglichsuquansu.vn).
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h5 class="text-xl font-bold text-purple-700 mb-4">
                c. Tàn dư thực dân — phong kiến và sự chống phá từ bên ngoài
              </h5>
              <div class="space-y-3 text-gray-700">
                <p class="leading-relaxed">
                  Tư duy sản xuất nhỏ và tâm lý tiểu nông vẫn còn tồn tại dai dẳng trong xã hội. 
                  Những tàn dư về văn hóa, phương thức quản lý và thói quen xã hội cũ chưa thể xóa bỏ ngay. 
                  Bên cạnh đó, các thế lực thù địch không ngừng tìm cách can thiệp, gây bất ổn.
                </p>
                <div class="bg-purple-50 p-4 rounded-lg mt-4">
                  <p class="font-semibold text-purple-800 mb-2">Thực tế:</p>
                  <p class="text-gray-700">
                    Quá trình quá độ ở Việt Nam mang tính vừa <strong>xây dựng</strong>, vừa 
                    <strong>đấu tranh bảo vệ</strong> thành quả cách mạng.
                  </p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg mt-4 border-l-4 border-gray-400">
                  <p class="text-sm text-gray-600 mb-2">
                    <strong>Tư liệu văn học:</strong> <em>Tắt đèn</em> (Ngô Tất Tố) — phê phán sưu cao thuế nặng; 
                    <em>Chí Phèo</em> (Nam Cao) — khắc họa sự tha hóa con người trong xã hội nửa phong kiến; 
                    <em>Số phận con người</em> (Nam Cao) — phản ánh thất bại của người trí thức trước tàn dư phong kiến.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Bối cảnh thời đại -->
        <div class="mb-10">
          <div class="relative bg-white border-l-8 border-green-600 shadow-xl rounded-lg p-6 mb-6 hover:shadow-2xl transition-all">
            <h4 class="text-2xl font-bold text-green-800 mb-4">
              2. Bối cảnh thời đại: thuận lợi và khó khăn đan xen
            </h4>
          </div>

          <!-- Hình ảnh minh họa bối cảnh -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80" 
                alt="Toàn cầu hóa"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-3">
                <p class="text-white font-semibold text-sm">Toàn cầu hóa</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" 
                alt="Cách mạng 4.0"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-3">
                <p class="text-white font-semibold text-sm">Cách mạng 4.0</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&q=80" 
                alt="Hội nhập quốc tế"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-3">
                <p class="text-white font-semibold text-sm">Hội nhập quốc tế</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-300 rounded-xl p-6 shadow-lg">
              <h5 class="text-xl font-bold text-green-800 mb-4">
                a. Những thuận lợi cơ bản
              </h5>
              <div class="space-y-4 text-gray-700">
                <p class="leading-relaxed">
                  Cuộc cách mạng khoa học — công nghệ hiện đại mở ra cơ hội <strong>rút ngắn</strong> quá trình công nghiệp hóa. 
                  Toàn cầu hóa giúp mở rộng thị trường, thu hút vốn và tiếp cận tri thức nhân loại. 
                  Hợp tác quốc tế đa phương tạo điều kiện thuận lợi để Việt Nam hội nhập sâu rộng.
                </p>
                <div class="bg-white p-4 rounded-lg">
                  <p class="font-semibold text-green-700 mb-2">Chiến lược "đi tắt đón đầu":</p>
                  <p class="text-sm text-gray-600 mb-3">
                    Không lặp lại con đường phát triển tuần tự kéo dài của các nước phương Tây.
                  </p>
                  <ul class="space-y-2 ml-4 text-sm">
                    <li class="flex items-start">
                      <span class="text-green-600 font-bold mr-2">►</span>
                      <span><strong>Viễn thông:</strong> Chuyển thẳng sang mạng di động 4G/5G (Viettel)</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 font-bold mr-2">►</span>
                      <span><strong>Công nghiệp:</strong> Thu hút Samsung, Intel vào chuỗi cung ứng toàn cầu</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 font-bold mr-2">►</span>
                      <span><strong>Thanh toán:</strong> Bước thẳng vào ví điện tử, QR code</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 font-bold mr-2">►</span>
                      <span><strong>Hội nhập:</strong> WTO (2007), CPTPP, EVFTA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6 shadow-lg">
              <h5 class="text-xl font-bold text-orange-800 mb-4">
                b. Những khó khăn và thách thức
              </h5>
              <div class="space-y-4 text-gray-700">
                <p class="leading-relaxed">
                  Bên cạnh những thuận lợi, bối cảnh thời đại cũng đặt ra nhiều thách thức không nhỏ:
                </p>
                <ul class="space-y-3 ml-4">
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2 mt-1">•</span>
                    <span><strong>Cạnh tranh quốc tế:</strong> Doanh nghiệp phải đối đầu tập đoàn đa quốc gia; 
                    nông sản bị áp tiêu chuẩn khắt khe; kiện chống bán phá giá (thép, thủy sản, gỗ)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2 mt-1">•</span>
                    <span><strong>Địa chính trị:</strong> Tranh chấp Biển Đông, áp lực từ cạnh tranh cường quốc</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2 mt-1">•</span>
                    <span><strong>An ninh phi truyền thống:</strong> Thông tin sai lệch trên mạng xã hội, 
                    biến động chuỗi cung ứng, giá năng lượng (COVID-19, xung đột Nga-Ukraine)</span>
                  </li>
                </ul>
                <div class="bg-orange-50 p-4 rounded-lg mt-4 border-l-4 border-orange-500">
                  <p class="font-semibold text-orange-800">Bài học:</p>
                  <p class="text-gray-700 mt-2">
                    Thực tế thế giới cho thấy xu thế phát triển <strong>không tuyến tính</strong>: 
                    không có một con đường duy nhất, tất yếu cho tất cả các quốc gia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `},{id:2,title:'II. NHẬN THỨC CỦA ĐẢNG VỀ CON ĐƯỜNG "BỎ QUA CHẾ ĐỘ TƯ BẢN CHỦ NGHĨA"',content:`
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
          <div class="mb-4">
            <img 
              src="/pics/II/3.jpg" 
              alt="Con đường bỏ qua chế độ tư bản chủ nghĩa"
              class="w-full rounded-lg shadow-lg"
            />
          </div>
          <p class="text-lg text-gray-700 leading-relaxed">
            "Bỏ qua" chế độ tư bản chủ nghĩa không phải là lựa chọn cảm tính, mà xuất phát từ 
            <strong>quy luật vận động tất yếu</strong> của cách mạng Việt Nam.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/II/1.jpg" 
                alt="Con đường cách mạng tất yếu khách quan"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-purple-700 mb-4">
              1. Đây là con đường cách mạng tất yếu khách quan
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                "Bỏ qua" chế độ tư bản chủ nghĩa không phải là lựa chọn cảm tính, mà xuất phát từ 
                quy luật vận động tất yếu của cách mạng Việt Nam. Việt Nam giành độc lập dưới sự lãnh đạo 
                của <strong>giai cấp công nhân</strong> thông qua Đảng Cộng sản — không phải giai cấp tư sản.
              </p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="font-semibold text-purple-800 mb-2">Lịch sử khẳng định:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">▪</span>
                    <span>Từ khi thành lập năm <strong>1930</strong>, Đảng xác định: hoàn thành cách mạng dân tộc dân chủ để tiến lên chủ nghĩa xã hội</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">▪</span>
                    <span>Hồ Chí Minh khẳng định: <em>"Độc lập dân tộc phải gắn liền với chủ nghĩa xã hội"</em></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">▪</span>
                    <span>Giai cấp tư sản dân tộc trước 1945 còn <strong>yếu ớt</strong>, lệ thuộc thực dân Pháp</span>
                  </li>
                </ul>
              </div>
              <p class="text-sm italic text-gray-600 mt-4">
                Cương lĩnh 1991 và Cương lĩnh 2011 đều khẳng định con đường này.
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/II/2.jpg" 
                alt="Bỏ qua việc xác lập vị trí thống trị của QHSX tư bản chủ nghĩa"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              2. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất tư bản chủ nghĩa
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Nội dung cốt lõi của "bỏ qua" không phải là xóa bỏ hoàn toàn các yếu tố kinh tế thị trường, 
                mà là <strong>không để quan hệ sản xuất tư bản chủ nghĩa trở thành nền tảng chi phối toàn xã hội</strong>.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-800 mb-3">Hiến pháp 2013 quy định:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">✓</span>
                    <span><strong>Điều 53:</strong> Đất đai thuộc sở hữu toàn dân do Nhà nước đại diện quản lý</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">✓</span>
                    <span><strong>Điều 51:</strong> Kinh tế nhà nước giữ vai trò chủ đạo trong nền kinh tế nhiều thành phần</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">✓</span>
                    <span><strong>Điều 4:</strong> Nhà nước pháp quyền XHCN do nhân dân, vì nhân dân, đặt dưới sự lãnh đạo của Đảng</span>
                  </li>
                </ul>
              </div>
              <p class="text-sm text-gray-600 mt-4">
                Trong thực tế, các lĩnh vực then chốt như <strong>quốc phòng, an ninh, năng lượng và tài chính</strong> 
                vẫn do Nhà nước kiểm soát.
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/II/4.jpg" 
                alt="Tiếp thu thành tựu của chủ nghĩa tư bản"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-green-700 mb-4">
              3. Tiếp thu và kế thừa thành tựu của chủ nghĩa tư bản
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Nếu chỉ "bỏ qua" mà không "kế thừa", xã hội sẽ tự cô lập khỏi dòng chảy tiến bộ của nhân loại. 
                Vì vậy, Đảng xác định rõ: <strong>tiếp thu khoa học — công nghệ hiện đại, học hỏi phương thức quản lý 
                tiên tiến và tận dụng thành tựu của toàn cầu hóa</strong>.
              </p>
              <div class="grid md:grid-cols-2 gap-4 mt-4">
                <div class="bg-green-50 p-4 rounded-lg">
                  <p class="font-semibold text-green-800 mb-2">Tiếp thu công nghệ:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Thu hút Samsung Electronics và Intel</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Chuyển đổi số quốc gia</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Phát triển hạ tầng 5G</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                  <p class="font-semibold text-green-800 mb-2">Học hỏi quản lý:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Công ty cổ phần</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Thị trường chứng khoán</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Cải cách hành chính minh bạch</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-green-100 p-4 rounded-lg mt-4 border-l-4 border-green-600">
                <p class="font-semibold text-green-900">Nguyên tắc:</p>
                <p class="text-gray-800 mt-2">
                  Cơ chế thị trường được sử dụng như một <strong>công cụ</strong>, 
                  không để nó quyết định bản chất chế độ.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-orange-700 mb-4">
              4. Là sự biến đổi toàn diện, lâu dài và phức tạp
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Quá độ lên chủ nghĩa xã hội không diễn ra trong một sớm một chiều. 
                Từ năm <strong>1975</strong> đến nay, Việt Nam vẫn trong thời kỳ quá độ và 
                chưa tuyên bố hoàn thành xây dựng chủ nghĩa xã hội.
              </p>
              <div class="bg-orange-50 p-4 rounded-lg">
                <p class="font-semibold text-orange-800 mb-3">Sự biến đổi diễn ra trên tất cả các lĩnh vực:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">►</span>
                    <span><strong>Kinh tế:</strong> Từ kế hoạch hóa tập trung → Kinh tế thị trường định hướng XHCN (Đổi mới 1986)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">►</span>
                    <span><strong>Chính trị:</strong> Xây dựng Nhà nước pháp quyền XHCN</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">►</span>
                    <span><strong>Văn hóa - Xã hội:</strong> Mở rộng giáo dục và phổ cập y tế</span>
                  </li>
                </ul>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg mt-4 border-l-4 border-yellow-500">
                <p class="font-semibold text-yellow-900 mb-2">Đặc điểm thời kỳ quá độ:</p>
                <p class="text-gray-800">
                  Nhiều hình thức sở hữu và nhiều thành phần kinh tế cùng tồn tại. 
                  Quan hệ thuê mướn lao động và chênh lệch thu nhập vẫn còn, song Nhà nước điều tiết 
                  thông qua chính sách an sinh xã hội nhằm hướng tới công bằng. 
                  <strong>Cái mới chưa hoàn toàn thay thế cái cũ</strong> — xã hội vận động trong trạng thái đan xen.
                </p>
              </div>
            </div>
          </div>
        </div>
      `},{id:3,title:"III. NHỮNG ĐẶC TRƯNG BẢN CHẤT CỦA CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM",content:`
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            Trải qua quá trình đổi mới, nhận thức của Đảng về chủ nghĩa xã hội ngày càng sáng tỏ. 
            Từ <strong>6 đặc trưng</strong> trong Cương lĩnh năm 1991, đến Cương lĩnh bổ sung, phát triển năm 2011, 
            Đảng đã hoàn thiện mô hình chủ nghĩa xã hội ở Việt Nam với <strong>8 đặc trưng cơ bản</strong>.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/III/1.png" 
                alt="Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-red-700 mb-4">
              1. Dân giàu, nước mạnh, dân chủ, công bằng, văn minh
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Đây là <strong>mục tiêu tổng quát</strong> — sự kết tinh giữa mục tiêu kinh tế, chính trị và giá trị nhân văn của chế độ.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-red-50 p-4 rounded-lg">
                  <p class="font-semibold text-red-800 mb-2">Dân giàu + Nước mạnh:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Từ nhóm nước nghèo → thu nhập trung bình</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Tỷ lệ hộ nghèo giảm mạnh</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Vị thế quốc tế nâng cao</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                  <p class="font-semibold text-red-800 mb-2">Dân chủ + Công bằng + Văn minh:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Bầu cử định kỳ, góp ý dự thảo luật</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Thuế lũy tiến, hỗ trợ vùng sâu vùng xa</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Cam kết phát thải ròng về 0 năm 2050</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/III/2.png" 
                alt="Do nhân dân làm chủ"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              2. Do nhân dân làm chủ
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Bản chất của chủ nghĩa xã hội là xóa bỏ áp bức bóc lột và trao quyền làm chủ thực sự cho nhân dân lao động. 
                Hiến pháp 2013 khẳng định quyền lực nhà nước thuộc về nhân dân, thực hiện thông qua cả <strong>dân chủ trực tiếp</strong> 
                lẫn <strong>dân chủ đại diện</strong> (Điều 6).
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-800 mb-3">Cơ chế giám sát quyền lực:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">1.</span>
                    <span><strong>Quốc hội:</strong> Chất vấn Thủ tướng và Bộ trưởng tại kỳ họp</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">2.</span>
                    <span><strong>Thanh tra nhân dân:</strong> Hoạt động tại xã, phường, đơn vị sự nghiệp</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">3.</span>
                    <span><strong>Tiếp công dân:</strong> Giải quyết khiếu nại, tố cáo</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">4.</span>
                    <span><strong>Mặt trận Tổ quốc:</strong> Phản biện xã hội đối với dự thảo chính sách</span>
                  </li>
                </ul>
              </div>
              <p class="text-sm italic text-gray-600 mt-4">
                Nguyên tắc: <strong>"Dân biết, dân bàn, dân làm, dân kiểm tra"</strong>
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/III/3.png" 
                alt="Nền kinh tế phát triển cao"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-purple-700 mb-4">
              3. Nền kinh tế phát triển cao, lực lượng sản xuất hiện đại, quan hệ sản xuất phù hợp
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Chủ nghĩa xã hội không phải là <em>"chia đều cái nghèo"</em> mà phải tạo ra <strong>của cải dồi dào</strong> 
                trên nền tảng lực lượng sản xuất hiện đại.
              </p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="font-semibold text-purple-800 mb-3">Thực tiễn sau Đổi mới:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">►</span>
                    <span>Cơ cấu kinh tế chuyển dịch: Nông nghiệp → Công nghiệp và Dịch vụ</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">►</span>
                    <span>Điện thoại và linh kiện điện tử: nhóm xuất khẩu hàng đầu</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">►</span>
                    <span>Chuyển đổi số quốc gia, hạ tầng 5G, kinh tế số</span>
                  </li>
                </ul>
              </div>
              <div class="bg-purple-100 p-4 rounded-lg mt-4 border-l-4 border-purple-600">
                <p class="font-semibold text-purple-900">Bài học Đổi mới:</p>
                <p class="text-gray-800 mt-2">
                  Khi cơ chế bao cấp bị xóa bỏ và kinh tế tư nhân được thừa nhận, <strong>lực lượng sản xuất được giải phóng</strong> 
                  — chứng minh tính tất yếu của mô hình kinh tế thị trường định hướng xã hội chủ nghĩa.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/III/4.png" 
                alt="Nền văn hóa tiên tiến"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-orange-700 mb-4">
              4. Nền văn hóa tiên tiến, đậm đà bản sắc dân tộc
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Văn hóa là nền tảng tinh thần của xã hội. <strong>"Tiên tiến"</strong> là tiếp nhận những giá trị phổ quát của nhân loại, 
                còn <strong>"đậm đà bản sắc dân tộc"</strong> là giữ gìn truyền thống trong quá trình hiện đại hóa.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-orange-50 p-4 rounded-lg">
                  <p class="font-semibold text-orange-800 mb-2">Di sản UNESCO:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Nhã nhạc cung đình Huế</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Dân ca quan họ Bắc Ninh</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Tín ngưỡng thờ cúng Hùng Vương</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-orange-50 p-4 rounded-lg">
                  <p class="font-semibold text-orange-800 mb-2">Bảo tồn bản sắc:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Tiếng Việt là ngôn ngữ thống nhất</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Tết Nguyên đán và lễ hội truyền thống</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Phát triển công nghiệp văn hóa</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-sm italic text-gray-600 mt-4">
                Nền văn hóa Việt Nam phát triển như <em>cây tre</em>: rễ bám sâu vào đất truyền thống, thân vươn cao trong dòng chảy toàn cầu.
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/III/5.png" 
                alt="Con người có cuộc sống ấm no, tự do, hạnh phúc"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-teal-700 mb-4">
              5. Con người có cuộc sống ấm no, tự do, hạnh phúc, phát triển toàn diện
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Con người vừa là <strong>mục tiêu</strong> vừa là <strong>động lực</strong> của chủ nghĩa xã hội.
              </p>
              <div class="bg-teal-50 p-4 rounded-lg">
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">✓</span>
                    <span><strong>Ấm no:</strong> Bảo hiểm y tế toàn dân, chương trình giảm nghèo bền vững</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">✓</span>
                    <span><strong>Tự do:</strong> Quyền tín ngưỡng, kinh doanh, học tập, sáng tạo (Hiến pháp 2013)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">✓</span>
                    <span><strong>Hạnh phúc:</strong> An toàn, gắn kết cộng đồng, đời sống tinh thần phong phú</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">✓</span>
                    <span><strong>Phát triển toàn diện:</strong> Phổ cập giáo dục, mạng lưới y tế, nâng cao tuổi thọ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/III/6.png" 
                alt="Các dân tộc bình đẳng, đoàn kết"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-indigo-700 mb-4">
              6. Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Việt Nam là cộng đồng của <strong>54 dân tộc anh em</strong>. 
                Hiến pháp 2013 khẳng định các dân tộc bình đẳng về quyền và nghĩa vụ, 
                nghiêm cấm mọi hành vi kỳ thị và chia rẽ dân tộc.
              </p>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <p class="font-semibold text-indigo-800 mb-3">Nguyên tắc "giúp nhau cùng phát triển":</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">•</span>
                    <span>Chương trình mục tiêu quốc gia phát triển vùng đồng bào dân tộc thiểu số</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">•</span>
                    <span>Đầu tư hạ tầng vùng sâu vùng xa</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">•</span>
                    <span>Chính sách học bổng cho học sinh dân tộc thiểu số</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">•</span>
                    <span>Bảo tồn tiếng nói, chữ viết và di sản văn hóa các dân tộc</span>
                  </li>
                </ul>
              </div>
              <p class="text-sm italic text-gray-600 mt-4">
                Đa dạng văn hóa là <strong>tài sản quốc gia</strong>, không phải trở ngại phát triển.
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/III/7.png" 
                alt="Nhà nước pháp quyền xã hội chủ nghĩa"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-red-700 mb-4">
              7. Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân, do Đảng Cộng sản lãnh đạo
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Nhà nước pháp quyền xã hội chủ nghĩa là trụ cột tổ chức quyền lực: 
                quyền lực không đứng trên pháp luật mà được <strong>đặt vào khuôn khổ pháp luật</strong> 
                và chịu sự giám sát của nhân dân.
              </p>
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="font-semibold text-red-800 mb-3">Đặc điểm:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">1.</span>
                    <span>Hiến pháp 2013 dành một chương riêng quy định <strong>quyền con người và quyền công dân</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">2.</span>
                    <span>Việt Nam tham gia nhiều công ước quốc tế về quyền con người (LHQ)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">3.</span>
                    <span>Quyền lực bắt nguồn từ <strong>bầu cử</strong>; nhân dân giám sát pháp luật</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">4.</span>
                    <span>Sự lãnh đạo của Đảng định hướng xây dựng pháp luật theo mục tiêu XHCN</span>
                  </li>
                </ul>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg mt-4 border-l-4 border-red-500">
                <p class="font-semibold text-red-900">Điểm khác biệt:</p>
                <p class="text-gray-800 mt-2">
                  Sự lãnh đạo của Đảng Cộng sản không thay thế pháp luật mà định hướng xây dựng pháp luật 
                  theo mục tiêu xã hội chủ nghĩa — điểm khác biệt căn bản so với mô hình nhà nước pháp quyền tư sản.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/III/8.png" 
                alt="Quan hệ hữu nghị và hợp tác quốc tế"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              8. Quan hệ hữu nghị và hợp tác với các nước trên thế giới
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Chủ nghĩa xã hội Việt Nam không khép kín. Đường lối đối ngoại nhất quán là 
                <strong>độc lập, tự chủ, hòa bình, hữu nghị và hợp tác cùng có lợi</strong>.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-800 mb-3">Thực tiễn hội nhập:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>Thành viên tích cực của <strong>Liên Hợp Quốc</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>Ủy viên không thường trực <strong>Hội đồng Bảo an</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>Tham gia lực lượng <strong>gìn giữ hòa bình quốc tế</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>ASEAN, WTO, APEC, CPTPP, EVFTA</span>
                  </li>
                </ul>
              </div>
              <div class="bg-blue-100 p-4 rounded-lg mt-4 border-l-4 border-blue-600">
                <p class="font-semibold text-blue-900">Nguyên tắc:</p>
                <p class="text-gray-800 mt-2">
                  Hội nhập quốc tế là đòn bẩy để thu hút vốn đầu tư, tiếp thu khoa học — công nghệ và nâng cao vị thế quốc gia, 
                  song Việt Nam kiên định <strong>không lệ thuộc</strong> vào bất kỳ cường quốc nào.
                </p>
              </div>
            </div>
          </div>
        </div>
      `},{id:4,title:"IV. CÁC PHƯƠNG HƯỚNG XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM HIỆN NAY",content:`
        <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 mb-8 rounded-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            Nếu <strong>tám đặc trưng</strong> xác định bản chất và hình ảnh của xã hội xã hội chủ nghĩa Việt Nam, 
            thì <strong>tám phương hướng</strong> chỉ ra con đường hiện thực hóa mô hình đó. 
            Chúng gắn kết như <em>mục tiêu và phương tiện, lý tưởng và hành động</em>.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/IV/1.jpg" 
                alt="Công nghiệp hóa, hiện đại hóa"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-green-700 mb-4">
              1. Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với kinh tế tri thức và bảo vệ môi trường
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Đây là điều kiện vật chất quyết định để xây dựng chủ nghĩa xã hội. 
                Từ sau Đổi mới, cơ cấu kinh tế chuyển dịch mạnh từ nông nghiệp sang công nghiệp và dịch vụ giá trị cao; 
                Việt Nam tham gia chuỗi cung ứng toàn cầu và hình thành các khu công nghệ cao.
              </p>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-semibold text-green-800 mb-3">Công nghiệp hóa gắn với kinh tế tri thức:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">•</span>
                    <span>Chuyển đổi số quốc gia</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">•</span>
                    <span>Phát triển thương mại điện tử</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">•</span>
                    <span>Khuyến khích khởi nghiệp đổi mới sáng tạo</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">•</span>
                    <span>Viettel đầu tư nghiên cứu thiết bị 5G</span>
                  </li>
                </ul>
              </div>
              <div class="bg-green-100 p-4 rounded-lg mt-4 border-l-4 border-green-600">
                <p class="font-semibold text-green-900">Cam kết môi trường:</p>
                <p class="text-gray-800 mt-2">
                  Phát triển không thể đánh đổi môi trường: Việt Nam cam kết tại <strong>COP26</strong> 
                  đạt mức <strong>phát thải ròng bằng 0 vào năm 2050</strong>, đồng thời thúc đẩy năng lượng tái tạo 
                  theo định hướng tăng trưởng xanh và bền vững.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/IV/2.jpg" 
                alt="Kinh tế thị trường định hướng XHCN"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              2. Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Việt Nam vận dụng cơ chế thị trường nhưng đặt dưới sự <strong>quản lý của Nhà nước</strong> 
                và <strong>định hướng xã hội chủ nghĩa</strong>. 
                Thị trường tạo năng lượng cạnh tranh; Nhà nước điều tiết thông qua pháp luật, chính sách tài khóa 
                và tiền tệ để bảo đảm an sinh và định hướng phát triển dài hạn.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-800 mb-3">Kinh tế nhà nước giữ vai trò chủ đạo:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>Nắm giữ các lĩnh vực then chốt: năng lượng, tài chính, hạ tầng</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>PetroVietnam (dầu khí quốc gia)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>EVN (điện lực Việt Nam)</span>
                  </li>
                </ul>
              </div>
              <div class="bg-blue-100 p-4 rounded-lg mt-4 border-l-4 border-blue-600">
                <p class="font-semibold text-blue-900 mb-2">Định hướng xã hội chủ nghĩa:</p>
                <p class="text-gray-800">
                  Tăng trưởng gắn với <strong>tiến bộ và công bằng xã hội</strong>: 
                  thị trường tạo ra của cải, Nhà nước định hướng phân phối thông qua chính sách thuế và phúc lợi 
                  để hạn chế bất bình đẳng cực đoan.
                </p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg mt-4 border-2 border-yellow-300">
                <p class="font-semibold text-yellow-900 mb-2">Phân biệt với kinh tế hỗn hợp tư bản:</p>
                <p class="text-gray-800 text-sm mb-3">
                  Điểm khác biệt căn bản so với kinh tế hỗn hợp ở các nước tư bản (như mô hình Bắc Âu hay kinh tế xã hội thị trường của Đức):
                </p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-yellow-700 font-bold mr-2">1.</span>
                    <span><strong>Về sở hữu:</strong> Đất đai và tài nguyên chiến lược thuộc sở hữu toàn dân, không thể tư nhân hóa</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-yellow-700 font-bold mr-2">2.</span>
                    <span><strong>Về quyền lực:</strong> Nhà nước trực tiếp tham gia sản xuất và phân bổ nguồn lực (kinh tế nhà nước chủ đạo)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-yellow-700 font-bold mr-2">3.</span>
                    <span><strong>Về mục tiêu:</strong> Không dừng lại ở phúc lợi xã hội, mà hướng tới xóa bỏ dần quan hệ bóc lột</span>
                  </li>
                </ul>
                <p class="text-gray-700 text-sm mt-3 italic">
                  → Thị trường là <strong>công cụ</strong>, không quyết định bản chất chế độ.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/IV/3.jpg" 
                alt="Xây dựng văn hóa, con người"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-purple-700 mb-4">
              3. Xây dựng văn hóa, con người và nâng cao đời sống nhân dân
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Phương hướng này đặt <strong>con người vào trung tâm</strong> của phát triển. 
                Kinh tế là nền móng, nhưng văn hóa và con người mới là linh hồn.
              </p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="font-semibold text-purple-800 mb-3">Các văn kiện Đại hội Đảng khẳng định:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span>Phát triển kinh tế đi đôi với <strong>tiến bộ và công bằng xã hội</strong> ngay trong từng bước</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span><strong>Giáo dục</strong> là quốc sách hàng đầu</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span><strong>Khoa học — công nghệ</strong> là động lực phát triển</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span><strong>Bảo hiểm y tế</strong> bao phủ phần lớn dân số</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span>Bảo tồn di sản, phát triển công nghiệp văn hóa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/IV/4.png" 
                alt="Quốc phòng và an ninh"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-red-700 mb-4">
              4. Bảo đảm quốc phòng và an ninh
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Giữ vững độc lập, chủ quyền là <strong>điều kiện tiên quyết</strong> cho mọi kế hoạch phát triển. 
                Việt Nam xây dựng <strong>thế trận quốc phòng toàn dân</strong> gắn với thế trận an ninh nhân dân, 
                kết hợp phát triển kinh tế với củng cố quốc phòng.
              </p>
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="font-semibold text-red-800 mb-3">An ninh toàn diện:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>An ninh mạng</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>An ninh kinh tế</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>An ninh năng lượng</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>Ứng phó thiên tai, dịch bệnh (COVID-19)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>Tham gia lực lượng gìn giữ hòa bình Liên Hợp Quốc</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/IV/5.jpeg" 
                alt="Đường lối đối ngoại"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-teal-700 mb-4">
              5. Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hợp tác và phát triển
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Việt Nam chủ trương hội nhập bằng bàn tay mở nhưng đứng vững trên lợi ích dân tộc. 
                Nguyên tắc nhất quán là <strong>không liên minh quân sự</strong> để chống nước khác, 
                không phụ thuộc vào bất kỳ cường quốc nào và đặt <strong>lợi ích quốc gia — dân tộc</strong> lên hàng đầu.
              </p>
              <div class="bg-teal-50 p-4 rounded-lg">
                <p class="font-semibold text-teal-800 mb-3">Chiến lược đa phương hóa, đa dạng hóa:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">►</span>
                    <span>Liên Hợp Quốc, ASEAN, WTO, APEC</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">►</span>
                    <span>CPTPP, EVFTA</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">►</span>
                    <span>Giảm rủi ro phụ thuộc vào một thị trường duy nhất</span>
                  </li>
                </ul>
              </div>
              <div class="bg-teal-100 p-4 rounded-lg mt-4 border-l-4 border-teal-600">
                <p class="font-semibold text-teal-900">Hội nhập là động lực:</p>
                <p class="text-gray-800 mt-2">
                  Đối ngoại không chỉ là nghi thức ngoại giao mà là <strong>động lực phát triển</strong> 
                  và công cụ củng cố an ninh quốc gia.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/IV/6.jpg" 
                alt="Dân chủ XHCN và đại đoàn kết"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-orange-700 mb-4">
              6. Xây dựng nền dân chủ xã hội chủ nghĩa và đại đoàn kết toàn dân
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Dân chủ trong chủ nghĩa xã hội Việt Nam là cơ chế để nhân dân <strong>tham gia, giám sát và hưởng lợi</strong> 
                từ quá trình phát triển — không chỉ là quyền bầu cử định kỳ.
              </p>
              <div class="bg-orange-50 p-4 rounded-lg">
                <p class="font-semibold text-orange-800 mb-3">Hiến pháp 2013 khẳng định:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">•</span>
                    <span>Tất cả quyền lực nhà nước thuộc về nhân dân</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">•</span>
                    <span>Nguyên tắc <strong>"dân biết, dân bàn, dân làm, dân kiểm tra"</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">•</span>
                    <span>Dân chủ không tách rời kỷ cương pháp luật</span>
                  </li>
                </ul>
              </div>
              <div class="bg-orange-100 p-4 rounded-lg mt-4 border-l-4 border-orange-600">
                <p class="font-semibold text-orange-900">Đại đoàn kết toàn dân:</p>
                <p class="text-gray-800 mt-2">
                  Không chỉ là tình cảm mà là <strong>chiến lược phát triển lâu dài</strong>. 
                  Trong bối cảnh toàn cầu biến động, sự đồng thuận xã hội chính là nguồn lực chính trị quý giá nhất.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/IV/7.jpg" 
                alt="Nhà nước pháp quyền XHCN"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-indigo-700 mb-4">
              7. Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Nhà nước pháp quyền xã hội chủ nghĩa bảo đảm quyền lực được thực thi trong <strong>khuôn khổ pháp luật</strong>, 
                minh bạch và có kiểm soát.
              </p>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <p class="font-semibold text-indigo-800 mb-3">Các biện pháp cụ thể:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Hệ thống pháp luật được xây dựng và sửa đổi liên tục</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Cải cách hành chính, tinh gọn bộ máy</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Chuyển đổi số quốc gia → Chính phủ số, giảm thủ tục rườm rà</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Đẩy mạnh phòng chống tham nhũng</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-red-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div class="mb-4">
              <img 
                src="/pics/IV/8.jpg" 
                alt="Xây dựng Đảng trong sạch, vững mạnh"
                class="w-full rounded-lg shadow-md"
              />
            </div>
            <h4 class="text-xl font-bold text-red-700 mb-4">
              8. Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Đảng Cộng sản Việt Nam là <strong>lực lượng lãnh đạo Nhà nước và xã hội</strong> theo Hiến pháp 2013. 
                Vai trò đó đòi hỏi Đảng phải kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội, 
                đề ra đường lối phát triển phù hợp thực tiễn và giữ vững bản chất cách mạng và khoa học.
              </p>
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="font-semibold text-red-800 mb-3">Sức chiến đấu của Đảng:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">•</span>
                    <span>Kiên quyết đấu tranh chống <strong>tham nhũng, tiêu cực</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">•</span>
                    <span>Kiểm soát quyền lực trong công tác cán bộ</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">•</span>
                    <span>Tự chỉnh đốn — một Đảng mạnh là Đảng biết tự sửa mình</span>
                  </li>
                </ul>
              </div>
              <div class="bg-red-100 p-4 rounded-lg mt-4 border-l-4 border-red-600">
                <p class="font-semibold text-red-900">Nguyên tắc lãnh đạo:</p>
                <p class="text-gray-800 mt-2">
                  Đảng lãnh đạo nhưng phải <strong>dựa vào dân, lắng nghe dân và chịu sự giám sát của dân</strong>; 
                  khi lợi ích nhân dân là mục tiêu và dân chủ được phát huy, chính sách mới bén rễ vào thực tiễn.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mục tiêu Đại hội XIII -->
        <div class="mt-10">
          <div class="relative bg-white border-l-8 border-purple-600 shadow-xl rounded-lg p-6 mb-6 hover:shadow-2xl transition-all">
            <h4 class="text-2xl font-bold text-purple-800 mb-4">
              Cập nhật mục tiêu tại Đại hội XIII (2021)
            </h4>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6 shadow-lg mb-6">
            <h5 class="text-xl font-bold text-purple-800 mb-4">Các mục tiêu chiến lược đến năm 2045:</h5>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg">
                <p class="font-semibold text-purple-700 mb-2">Đến năm 2025:</p>
                <p class="text-gray-700 text-sm">
                  Nước đang phát triển có <strong>công nghiệp theo hướng hiện đại</strong>, vượt mức thu nhập trung bình thấp
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <p class="font-semibold text-purple-700 mb-2">Đến năm 2030:</p>
                <p class="text-gray-700 text-sm">
                  Nước có <strong>công nghiệp hiện đại</strong>, thu nhập trung bình cao
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <p class="font-semibold text-purple-700 mb-2">Đến năm 2045:</p>
                <p class="text-gray-700 text-sm">
                  Trở thành <strong>nước phát triển, thu nhập cao</strong>
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg">
            <h5 class="text-xl font-bold text-blue-800 mb-4">
              12 định hướng phát triển đất nước giai đoạn 2021 — 2030
            </h5>
            <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">1.</span>
                  <span>Đổi mới mạnh mẽ tư duy</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">2.</span>
                  <span>Hoàn thiện đồng bộ thể chế kinh tế thị trường định hướng XHCN</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">3.</span>
                  <span>Tạo đột phá trong giáo dục, đào tạo và khoa học công nghệ</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">4.</span>
                  <span>Phát triển con người toàn diện và văn hóa</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">5.</span>
                  <span>Thích ứng với biến đổi khí hậu và phát triển kinh tế xanh, kinh tế tuần hoàn</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">6.</span>
                  <span>Bảo vệ vững chắc Tổ quốc</span>
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">7.</span>
                  <span>Hội nhập quốc tế sâu rộng</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">8.</span>
                  <span>Phát huy dân chủ xã hội chủ nghĩa</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">9.</span>
                  <span>Xây dựng Nhà nước pháp quyền</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">10.</span>
                  <span>Xây dựng Đảng trong sạch vững mạnh</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">11.</span>
                  <span>Tiếp tục nắm vững 10 mối quan hệ lớn của Đảng</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">12.</span>
                  <span>Xây dựng hệ thống chính trị trong sạch, vững mạnh toàn diện</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-6 bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-300 rounded-xl p-6">
            <h5 class="text-lg font-bold text-gray-900 mb-4">Tài liệu tham khảo thêm</h5>
            <div class="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2">•</span>
                  <span>Bảo tàng Lịch sử Việt Nam: <a href="https://baotanglichsu.vn" class="text-blue-600 hover:underline">baotanglichsu.vn</a></span>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2">•</span>
                  <span>Bảo tàng Lịch sử TP.HCM: <a href="https://baotanglichsutphcm.com.vn" class="text-blue-600 hover:underline">baotanglichsutphcm.com.vn</a></span>
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2">•</span>
                  <span>Bảo tàng Chứng tích Chiến tranh: <a href="https://baotangchungtichchientranh.vn" class="text-blue-600 hover:underline">baotangchungtichchientranh.vn</a></span>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2">•</span>
                  <span>Bảo tàng Lịch sử Quân sự: <a href="https://baotanglichsuquansu.vn" class="text-blue-600 hover:underline">baotanglichsuquansu.vn</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `}];return c.jsxs(c.Fragment,{children:[v&&c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn",children:c.jsx("div",{className:"bg-white rounded-2xl p-10 max-w-md mx-4 shadow-2xl transform animate-scaleIn",children:c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-6xl mb-4 animate-bounce",children:"🎉"}),c.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Xuất sắc!"}),c.jsxs("p",{className:"text-lg text-gray-600 mb-4",children:["Bạn đã hoàn thành ",c.jsx("strong",{className:"text-blue-600",children:"toàn bộ bài học"}),"!"]}),c.jsxs("div",{className:"flex justify-center gap-2 text-4xl mb-6",children:[c.jsx("span",{className:"animate-bounce",style:{animationDelay:"0s"},children:"⭐"}),c.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.1s"},children:"⭐"}),c.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.2s"},children:"⭐"}),c.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.3s"},children:"⭐"})]}),c.jsxs("p",{className:"text-gray-600 mb-6",children:["Bạn đã thu thập đủ ",c.jsx("strong",{children:"4/4 sao"}),"!",c.jsx("br",{}),"Hãy thử sức với ",c.jsx("strong",{children:"Quiz Game"})," để kiểm tra kiến thức nhé!"]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:()=>w(!1),className:"flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all",children:"Đóng"}),c.jsx("button",{onClick:()=>window.location.href="/quiz",className:"flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all",children:"Làm Quiz →"})]}),c.jsx("button",{onClick:P,className:"mt-4 text-sm text-gray-500 hover:text-red-600 transition-colors",children:"Reset tiến độ"})]})})}),c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50",children:c.jsxs("div",{className:"container mx-auto px-4 py-12",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h1",{className:"text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent",children:"Quá Độ Lên Chủ Nghĩa Xã Hội Ở Việt Nam"}),c.jsx("p",{className:"text-xl text-gray-600",children:"Tài liệu tham khảo môn Chủ nghĩa Mác – Lênin (MLN131)"})]}),c.jsxs("div",{className:"grid lg:grid-cols-4 gap-8",children:[c.jsx("div",{className:"lg:col-span-1",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6 sticky top-6",children:[c.jsx("h2",{className:"text-2xl font-bold mb-6 text-blue-600",children:"Nội Dung"}),c.jsx("nav",{className:"space-y-3",children:k.map((_,I)=>{const T=a.includes(_.id);return c.jsx("button",{onClick:()=>d(I),className:`w-full text-left px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-300 relative ${o===I?"bg-blue-600 text-white shadow-lg transform scale-105":"bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"}`,children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"flex-1",children:_.title}),T&&c.jsx("span",{className:"ml-2 text-2xl animate-bounce",children:"⭐"})]})},_.id)})}),c.jsxs("div",{className:"mt-8",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Tiến Độ"}),c.jsxs("p",{className:"text-sm font-bold text-blue-600",children:[a.length,"/4 ⭐"]})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:c.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500",style:{width:`${a.length/k.length*100}%`}})})]})]})}),c.jsx("div",{className:"lg:col-span-3",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-10 animate-slide-up",children:[c.jsx("h2",{className:"text-4xl font-bold text-blue-600 mb-8",children:k[o].title}),c.jsx("div",{className:"prose prose-lg max-w-none learn-page",dangerouslySetInnerHTML:{__html:k[o].content}}),c.jsxs("div",{className:"flex justify-between mt-10 pt-8 border-t-2 border-gray-200",children:[c.jsx("button",{onClick:()=>d(Math.max(0,o-1)),disabled:o===0,className:`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${o===0?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg"}`,children:"← Trước"}),a.includes(k[o].id)?c.jsxs("div",{className:"px-8 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg flex items-center gap-2",children:[c.jsx("span",{className:"animate-bounce",children:"⭐"}),c.jsx("span",{children:"Đã hoàn thành"})]}):c.jsx("button",{onClick:()=>N(k[o].id),className:"px-8 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 shadow-lg transition-all duration-300",children:"✓ Hoàn thành"}),c.jsx("button",{onClick:()=>d(Math.min(k.length-1,o+1)),disabled:o===k.length-1,className:`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${o===k.length-1?"bg-gray-200 text-gray-400 cursor-not-allowed":"bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg"}`,children:"Sau →"})]})]})})]})]})})]})}function Op(){const[o,d]=R.useState(!1),[a,f]=R.useState(0),[v,w]=R.useState(0),[N,P]=R.useState(null),[k,_]=R.useState(!1),[I,T]=R.useState(!1),[F,Y]=R.useState(30),[$,U]=R.useState(0),L=[{question:"Việt Nam bắt đầu xây dựng chủ nghĩa xã hội từ giai đoạn phát triển nào?",options:["Phong kiến lạc hậu","Tư bản chủ nghĩa","Công nghiệp hóa","Hậu công nghiệp"],correct:0,explanation:"Việt Nam chuyển từ xã hội phong kiến lạc hậu, kém phát triển sang xây dựng chủ nghĩa xã hội, bỏ qua giai đoạn tư bản chủ nghĩa."},{question:"Đại hội Đảng nào đã khởi xướng công cuộc Đổi Mới năm 1986?",options:["Đại hội V","Đại hội VI","Đại hội VII","Đại hội VIII"],correct:1,explanation:"Đại hội Đảng lần thứ VI (1986) đã khởi xướng công cuộc Đổi Mới, xác lập nền kinh tế thị trường định hướng XHCN."},{question:"Theo bối cảnh thời đại, sự kiện nào tạo áp lực tư tưởng lớn đối với Việt Nam?",options:["Chiến tranh lạnh kết thúc","Liên Xô và các nước XHCN Đông Âu tan rã (1989-1991)","Khủng hoảng tài chính châu Á 1997","Gia nhập WTO"],correct:1,explanation:"Sự suy tàn của CNXH hiện thực khi Liên Xô và các nước XHCN Đông Âu tan rã (1989-1991) tạo áp lực tư tưởng lớn."},{question:'"Bỏ qua chế độ tư bản chủ nghĩa" có nghĩa là gì?',options:["Từ chối mọi thành tựu của thời kỳ tư bản","Bỏ qua chế độ chính trị và kinh tế tư bản, nhưng tiếp thu có chọn lọc thành tựu khoa học công nghệ","Cấm hoàn toàn kinh tế tư nhân","Không học hỏi từ các nước phát triển"],correct:1,explanation:"Bỏ qua chế độ chính trị và kinh tế tư bản thuần túy, nhưng tiếp thu có chọn lọc thành tựu khoa học công nghệ và kinh nghiệm quản lý."},{question:"Có bao nhiêu đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam theo Cương lĩnh 2011?",options:["5 đặc trưng","6 đặc trưng","8 đặc trưng","10 đặc trưng"],correct:2,explanation:"Theo Cương lĩnh (bổ sung, phát triển năm 2011), có 8 đặc trưng cơ bản của CNXH ở Việt Nam."},{question:"Đặc trưng đầu tiên của CNXH Việt Nam là gì?",options:["Nhân dân làm chủ","Dân giàu, nước mạnh, dân chủ, công bằng, văn minh","Kinh tế phát triển cao","Đảng lãnh đạo"],correct:1,explanation:'Đặc trưng đầu tiên là "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh" - mục tiêu tổng quát kết tinh giữa mục tiêu kinh tế, chính trị và giá trị nhân văn.'},{question:"Thành phần kinh tế nào giữ vai trò chủ đạo trong nền kinh tế thị trường định hướng XHCN?",options:["Kinh tế tư nhân","Kinh tế FDI","Kinh tế nhà nước","Kinh tế cá thể"],correct:2,explanation:"Kinh tế nhà nước giữ vai trò chủ đạo, nắm giữ các ngành then chốt như quốc phòng, an ninh, năng lượng, hạ tầng, tài chính, ngân hàng."},{question:"Có bao nhiêu phương hướng xây dựng CNXH ở Việt Nam?",options:["6 phương hướng","7 phương hướng","8 phương hướng","9 phương hướng"],correct:2,explanation:'8 phương hướng xây dựng CNXH trả lời câu hỏi "Làm thế nào để xây dựng CNXH?", bổ trợ cho 8 đặc trưng.'},{question:"Theo lộ trình phát triển, Việt Nam phấn đấu trở thành nước phát triển vào năm nào?",options:["Năm 2025","Năm 2030","Năm 2035","Năm 2045"],correct:3,explanation:"Theo Đại hội XIII (2021), đến năm 2045 (kỷ niệm 100 năm thành lập nước), Việt Nam trở thành nước phát triển, thu nhập cao."},{question:"Nguyên tắc nào là nhân tố quyết định mọi thắng lợi trong xây dựng CNXH ở Việt Nam?",options:["Kinh tế thị trường tự do","Sự lãnh đạo của Đảng Cộng sản Việt Nam","Vốn đầu tư nước ngoài","Công nghệ hiện đại"],correct:1,explanation:"Đảng Cộng sản Việt Nam là lực lượng lãnh đạo nhà nước và xã hội, nguyên tắc lãnh đạo của Đảng là nhân tố quyết định mọi thắng lợi."}];R.useEffect(()=>{if(o&&!k&&!I&&F>0){const le=setTimeout(()=>Y(F-1),1e3);return()=>clearTimeout(le)}else F===0&&!k&&ie(null)},[F,o,k,I]);const re=()=>{d(!0),f(0),w(0),P(null),_(!1),T(!1),Y(30),U(0)},ie=le=>{if(P(le),_(!0),le===L[a].correct){const ce=Math.floor(F/3),ye=$*5,ht=10+ce+ye;w(v+ht),U($+1)}else U(0)},Z=()=>{a<L.length-1?(f(a+1),P(null),_(!1),Y(30)):T(!0)},ae=()=>{const le=v/(L.length*10)*100;return le>=90?{emoji:"🏆",text:"Xuất Sắc!",color:"text-yellow-500"}:le>=70?{emoji:"🌟",text:"Giỏi Lắm!",color:"text-green-500"}:le>=50?{emoji:"👍",text:"Khá Tốt!",color:"text-blue-500"}:{emoji:"💪",text:"Cố Gắng Thêm!",color:"text-orange-500"}};if(!o)return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-12 px-4 animate-fade-in",children:c.jsx("div",{className:"max-w-4xl mx-auto",children:c.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-slide-up",children:[c.jsx("div",{className:"text-8xl mb-6 animate-bounce-slow",children:"🎮"}),c.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-6",children:"Trò Chơi Quiz Siêu Hấp Dẫn!"}),c.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Kiểm tra kiến thức của bạn về Nền Kinh Tế Thị Trường Định Hướng XHCN"}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-10",children:[c.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6",children:[c.jsx("div",{className:"text-4xl mb-2",children:"📝"}),c.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:L.length}),c.jsx("div",{className:"text-gray-700 font-semibold",children:"Câu Hỏi"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6",children:[c.jsx("div",{className:"text-4xl mb-2",children:"⏱️"}),c.jsx("div",{className:"text-3xl font-bold text-green-600 mb-2",children:"30s"}),c.jsx("div",{className:"text-gray-700 font-semibold",children:"Mỗi Câu"})]}),c.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6",children:[c.jsx("div",{className:"text-4xl mb-2",children:"🏆"}),c.jsx("div",{className:"text-3xl font-bold text-purple-600 mb-2",children:"10+"}),c.jsx("div",{className:"text-gray-700 font-semibold",children:"Điểm/Câu"})]})]}),c.jsxs("div",{className:"bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 text-left",children:[c.jsxs("h3",{className:"font-bold text-lg mb-3 flex items-center",children:[c.jsx("span",{className:"text-2xl mr-2",children:"💡"}),"Luật Chơi:"]}),c.jsxs("ul",{className:"space-y-2 text-gray-700",children:[c.jsx("li",{children:"✓ Mỗi câu hỏi có 4 đáp án, chọn 1 đáp án đúng"}),c.jsx("li",{children:"✓ Bạn có 30 giây để trả lời mỗi câu"}),c.jsx("li",{children:"✓ Càng trả lời nhanh, điểm thưởng càng cao"}),c.jsx("li",{children:"✓ Trả lời đúng liên tiếp để nhận điểm streak bonus"}),c.jsx("li",{children:"✓ Xem giải thích sau mỗi câu để học thêm"})]})]}),c.jsx("button",{onClick:re,className:"bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-5 rounded-full text-2xl font-bold hover:from-green-600 hover:to-blue-600 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse-slow",children:"Bắt Đầu Chơi 🚀"})]})})});if(I){const le=ae();return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-12 px-4 animate-fade-in",children:c.jsx("div",{className:"max-w-4xl mx-auto",children:c.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-slide-up",children:[c.jsx("div",{className:"text-9xl mb-6 animate-bounce-slow",children:le.emoji}),c.jsx("h2",{className:`text-5xl font-bold mb-4 ${le.color}`,children:le.text}),c.jsx("h3",{className:"text-3xl font-bold text-gray-800 mb-8",children:"Hoàn Thành Quiz!"}),c.jsxs("div",{className:"bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8",children:[c.jsxs("div",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4",children:[v," điểm"]}),c.jsx("div",{className:"text-xl text-gray-700",children:"Tổng điểm của bạn"})]}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-10",children:[c.jsxs("div",{className:"bg-blue-50 rounded-xl p-6",children:[c.jsx("div",{className:"text-4xl mb-2",children:"✅"}),c.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[L.filter((ce,ye)=>ye<=a).length," / ",L.length]}),c.jsx("div",{className:"text-gray-700",children:"Câu Đã Trả Lời"})]}),c.jsxs("div",{className:"bg-green-50 rounded-xl p-6",children:[c.jsx("div",{className:"text-4xl mb-2",children:"🔥"}),c.jsx("div",{className:"text-2xl font-bold text-green-600",children:$>0?`${$} liên tiếp!`:"Không có"}),c.jsx("div",{className:"text-gray-700",children:"Streak Cao Nhất"})]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[c.jsx("button",{onClick:re,className:"bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg",children:"Chơi Lại 🔄"}),c.jsx("button",{onClick:()=>d(!1),className:"bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg",children:"Quay Lại 🏠"})]})]})})})}const ue=L[a];return c.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-8 px-4 animate-fade-in",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[c.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-4 text-center",children:[c.jsx("div",{className:"text-sm text-gray-600 mb-1",children:"Câu hỏi"}),c.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[a+1,"/",L.length]})]}),c.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-4 text-center",children:[c.jsx("div",{className:"text-sm text-gray-600 mb-1",children:"Điểm"}),c.jsx("div",{className:"text-2xl font-bold text-green-600",children:v})]}),c.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-4 text-center",children:[c.jsx("div",{className:"text-sm text-gray-600 mb-1",children:"Thời gian"}),c.jsxs("div",{className:`text-2xl font-bold ${F<=10?"text-red-600 animate-pulse":"text-orange-600"}`,children:[F,"s"]})]})]}),$>0&&c.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl p-3 mb-6 text-center animate-slide-down",children:c.jsxs("div",{className:"font-bold text-lg",children:["🔥 Streak: ",$," câu liên tiếp! (+",$*5," điểm bonus)"]})}),c.jsx("div",{className:"bg-white rounded-full h-3 mb-6 overflow-hidden shadow-lg",children:c.jsx("div",{className:"bg-gradient-to-r from-green-500 to-blue-500 h-full transition-all duration-500",style:{width:`${(a+1)/L.length*100}%`}})}),c.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-up",children:[c.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed",children:ue.question}),c.jsx("div",{className:"space-y-4 mb-8",children:ue.options.map((le,ce)=>{let ye="w-full text-left p-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ";return k?ce===ue.correct?ye+="bg-green-100 border-green-500 text-green-800":ce===N?ye+="bg-red-100 border-red-500 text-red-800":ye+="bg-gray-100 border-gray-300 text-gray-600":ye+="bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50 transform hover:scale-105 cursor-pointer",c.jsx("button",{onClick:()=>!k&&ie(ce),disabled:k,className:ye,children:c.jsxs("div",{className:"flex items-center",children:[c.jsx("span",{className:"text-2xl mr-4 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center",children:String.fromCharCode(65+ce)}),c.jsx("span",{children:le}),k&&ce===ue.correct&&c.jsx("span",{className:"ml-auto text-3xl",children:"✓"}),k&&ce===N&&ce!==ue.correct&&c.jsx("span",{className:"ml-auto text-3xl",children:"✗"})]})},ce)})}),k&&c.jsxs("div",{className:"animate-slide-down",children:[c.jsxs("div",{className:`rounded-xl p-6 mb-6 ${N===ue.correct?"bg-green-50 border-l-4 border-green-500":"bg-blue-50 border-l-4 border-blue-500"}`,children:[c.jsxs("h3",{className:"font-bold text-lg mb-2 flex items-center",children:[c.jsx("span",{className:"text-2xl mr-2",children:"💡"}),"Giải Thích:"]}),c.jsx("p",{className:"text-gray-700",children:ue.explanation})]}),c.jsx("button",{onClick:Z,className:"w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl text-xl font-bold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg",children:a<L.length-1?"Câu Tiếp Theo →":"Xem Kết Quả 🏆"})]})]})]})})}function Mp(){const o=Pr(),d=[{path:"/",label:"Trang Chủ"},{path:"/learn",label:"Bài Học"},{path:"/quiz",label:"Trò Chơi Quiz"}];return c.jsx("nav",{className:"bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 shadow-lg sticky top-0 z-50",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex justify-between items-center h-16",children:[c.jsx(dn,{to:"/",className:"flex items-center space-x-2",children:c.jsx("span",{className:"text-white font-bold text-xl",children:"Kinh Tế Việt Nam"})}),c.jsx("div",{className:"flex space-x-1 sm:space-x-4",children:d.map(a=>c.jsx(dn,{to:a.path,className:`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${o.pathname===a.path?"bg-white text-red-600 shadow-md transform scale-105":"text-white hover:bg-red-700 hover:scale-105"}`,children:c.jsx("span",{children:a.label})},a.path))})]})})})}function Dp(){return c.jsx("footer",{className:"bg-gray-800 text-white py-8 mt-auto",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"text-center",children:[c.jsx("p",{className:"text-lg font-semibold mb-2",children:"Nền Kinh Tế Thị Trường Định Hướng Xã Hội Chủ Nghĩa ở Việt Nam"}),c.jsx("p",{className:"text-gray-400 text-sm",children:"© 2026 - Website Học Tập Tương Tác"})]})})})}function Vp(){return c.jsx(Pp,{children:c.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-50",children:[c.jsx(Mp,{}),c.jsx("main",{className:"flex-grow",children:c.jsxs(Np,{children:[c.jsx(Bl,{path:"/",element:c.jsx(zp,{})}),c.jsx(Bl,{path:"/learn",element:c.jsx(Ip,{})}),c.jsx(Bl,{path:"/quiz",element:c.jsx(Op,{})})]})}),c.jsx(Dp,{})]})})}Ph.createRoot(document.getElementById("root")).render(c.jsx(cc.StrictMode,{children:c.jsx(Vp,{})}));
