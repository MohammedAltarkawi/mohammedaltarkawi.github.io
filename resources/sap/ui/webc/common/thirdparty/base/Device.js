sap.ui.define(["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.supportsTouch=e.isTablet=e.isSafari=e.isPhone=e.isMac=e.isIOS=e.isIE=e.isFirefox=e.isDesktop=e.isCombi=e.isChrome=e.isAndroid=void 0;const t=typeof document==="undefined";const r={get userAgent(){if(t){return""}return navigator.userAgent},get touch(){if(t){return false}return"ontouchstart"in window||navigator.maxTouchPoints>0},get ie(){if(t){return false}return/(msie|trident)/i.test(r.userAgent)},get chrome(){if(t){return false}return!r.ie&&/(Chrome|CriOS)/.test(r.userAgent)},get firefox(){if(t){return false}return/Firefox/.test(r.userAgent)},get safari(){if(t){return false}return!r.ie&&!r.chrome&&/(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(r.userAgent)},get webkit(){if(t){return false}return!r.ie&&/webkit/.test(r.userAgent)},get windows(){if(t){return false}return navigator.platform.indexOf("Win")!==-1},get macOS(){if(t){return false}return!!navigator.userAgent.match(/Macintosh|Mac OS X/i)},get iOS(){if(t){return false}return!!navigator.platform.match(/iPhone|iPad|iPod/)||!!(r.userAgent.match(/Mac/)&&"ontouchend"in document)},get android(){if(t){return false}return!r.windows&&/Android/.test(r.userAgent)},get androidPhone(){if(t){return false}return r.android&&/(?=android)(?=.*mobile)/i.test(r.userAgent)},get ipad(){if(t){return false}return/ipad/i.test(r.userAgent)||/Macintosh/i.test(r.userAgent)&&"ontouchend"in document}};let i;let n;let s;const o=()=>{if(t){return false}if(!r.windows){return false}if(i===undefined){const e=r.userAgent.match(/Windows NT (\d+).(\d)/);i=e?parseFloat(e[1]):0}return i>=8};const u=()=>{if(t){return false}if(!r.webkit){return false}if(n===undefined){const e=r.userAgent.match(/(webkit)[ /]([\w.]+)/);n=e?parseFloat(e[1]):0}return n>=537.1};const a=()=>{if(t){return false}if(s!==undefined){return}if(r.ipad){s=true;return}if(r.touch){if(o()){s=true;return}if(r.chrome&&r.android){s=!/Mobile Safari\/[.0-9]+/.test(r.userAgent);return}let e=window.devicePixelRatio?window.devicePixelRatio:1;if(r.android&&u()){e=1}s=Math.min(window.screen.width/e,window.screen.height/e)>=600;return}s=r.ie&&r.userAgent.indexOf("Touch")!==-1||r.android&&!r.androidPhone};const f=()=>r.touch;e.supportsTouch=f;const d=()=>r.ie;e.isIE=d;const c=()=>r.safari;e.isSafari=c;const h=()=>r.chrome;e.isChrome=h;const g=()=>r.firefox;e.isFirefox=g;const l=()=>{a();return(r.touch||o())&&s};e.isTablet=l;const m=()=>{a();return r.touch&&!s};e.isPhone=m;const w=()=>{if(t){return false}return!l()&&!m()||o()};e.isDesktop=w;const A=()=>l()&&w();e.isCombi=A;const p=()=>r.iOS;e.isIOS=p;const P=()=>r.macOS;e.isMac=P;const S=()=>r.android||r.androidPhone;e.isAndroid=S});
//# sourceMappingURL=Device.js.map