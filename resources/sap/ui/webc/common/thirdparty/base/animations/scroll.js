sap.ui.define(["exports","./animate"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=n(t);function r(e){if(typeof WeakMap!=="function")return null;var t=new WeakMap;var n=new WeakMap;return(r=function(e){return e?n:t})(e)}function n(e,t){if(!t&&e&&e.__esModule){return e}if(e===null||typeof e!=="object"&&typeof e!=="function"){return{default:e}}var n=r(t);if(n&&n.has(e)){return n.get(e)}var o={};var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e){if(u!=="default"&&Object.prototype.hasOwnProperty.call(e,u)){var f=a?Object.getOwnPropertyDescriptor(e,u):null;if(f&&(f.get||f.set)){Object.defineProperty(o,u,f)}else{o[u]=e[u]}}}o.default=e;if(n){n.set(e,o)}return o}const o=(e,r,n)=>{let o;let a;return(0,t.default)({beforeStart:()=>{o=e.scrollLeft;a=e.scrollTop},duration:t.duration,element:e,advance:t=>{e.scrollLeft=o+t*r;e.scrollTop=a+t*n}})};var a=o;e.default=a});
//# sourceMappingURL=scroll.js.map