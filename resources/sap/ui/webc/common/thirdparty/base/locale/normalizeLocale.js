sap.ui.define(["exports","../generated/AssetParameters"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;const n=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;const s=/(?:^|-)(saptrc|sappsd)(?:-|$)/i;const r={he:"iw",yi:"ji",nb:"no",sr:"sh"};const i=e=>{let i;if(!e){return t.DEFAULT_LOCALE}if(typeof e==="string"&&(i=n.exec(e.replace(/_/g,"-")))){let e=i[1].toLowerCase();let t=i[3]?i[3].toUpperCase():undefined;const n=i[2]?i[2].toLowerCase():undefined;const o=i[4]?i[4].slice(1):undefined;const a=i[6];e=r[e]||e;if(a&&(i=s.exec(a))||o&&(i=s.exec(o))){return`en_US_${i[1].toLowerCase()}`}if(e==="zh"&&!t){if(n==="hans"){t="CN"}else if(n==="hant"){t="TW"}}return e+(t?"_"+t+(o?"_"+o.replace("-","_"):""):"")}return t.DEFAULT_LOCALE};var o=i;e.default=o});
//# sourceMappingURL=normalizeLocale.js.map