/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/merge","sap/ui/core/util/reflection/JsControlTreeModifier"],(e,t)=>{"use strict";const r={};r.enhanceConfig=(n,o)=>{const i=o.propertyBag;const a=i?i.modifier:t;let s;let g;return a.getControlMetadata(n).then(e=>{s=e;o.controlMetadata=s;return a.getAggregation(n,"customData")}).then(e=>Promise.all(e.map(e=>a.getProperty(e,"key"))).then(t=>e.reduce((e,r,n)=>t[n]==="xConfig"?r:e,undefined))).then(t=>{g=t;if(g){return a.getProperty(g,"value").then(t=>e({},JSON.parse(t.replace(/\\/g,""))))}return{}}).then(t=>{let s;if(o.controlMeta&&o.controlMeta.aggregation){s=r.createAggregationConfig(n,o,t)}else{s=r.createPropertyConfig(n,o,t)}if(o.markAsModified){s.modified=true}const c=i?i.appComponent:undefined;let p=Promise.resolve();if(g&&n.isA){p=a.removeAggregation(n,"customData",g).then(()=>a.destroy(g))}return p.then(()=>a.createAndAddCustomData(n,"xConfig",JSON.stringify(s),c).then(()=>e({},s)))})};r.readConfig=(r,n)=>{if(n){const o=n.propertyBag?n.propertyBag.modifier:t;return o.getAggregation(r,"customData").then(e=>Promise.all(e.map(e=>o.getProperty(e,"key"))).then(t=>e.reduce((e,r,n)=>t[n]==="xConfig"?r:e,undefined))).then(t=>{if(t){return o.getProperty(t,"value").then(t=>e({},JSON.parse(t.replace(/\\/g,""))))}return null})}const o=(e,t)=>{const r=(e,t)=>{if(e){if(e.getMetadata){const r=e.getMetadata();const n=r.getAllAggregations();if(n){return n[t]}}}return undefined};const n=r(e,t);if(n){return e[n._sGetter]()}return undefined};const i=(e,t)=>{const r=e.getMetadata().getPropertyLikeSetting(t);if(r){const t=r._sGetter;return e[t]()}return undefined};const a=o(r,"customData").find(e=>i(e,"key")=="xConfig");const s=a?e({},JSON.parse(i(a,"value").replace(/\\/g,""))):null;return s};r.createAggregationConfig=(e,t,r)=>{const n=t.key||t.name;const o=t.controlMeta;const i=t.property;const a=t.value;const s=t.controlMetadata||e.getMetadata();const g=o.aggregation;const c=g?g:s.getDefaultAggregation().name;const p=r||{};if(!p.hasOwnProperty("aggregations")){p.aggregations={}}if(!p.aggregations.hasOwnProperty(c)){if(s.hasAggregation(c)){p.aggregations[c]={}}else{throw new Error("The aggregation "+c+" does not exist for"+e)}}if(!p.aggregations[c].hasOwnProperty(n)){p.aggregations[c][n]={}}if(a!==null||a&&a.hasOwnProperty("value")&&a.value!==null){const e=t.currentState;switch(t.operation){case"move":Object.entries(p.aggregations[c]).forEach(e=>{if(e[0]!==n&&e[1].position!==undefined){const r=a.index;const o=t.currentState;const i=o?.find(e=>e.key==n);const s=o?.indexOf(i);if(r<e[1].position){e[1].position++}if(r>e[1].position&&s<e[1].position){e[1].position--}if(e[1].position==r){s>e[1].position?e[1].position++:e[1].position--}}});p.aggregations[c][n][i]=a.index;if(a.persistenceIdentifier){p.aggregations[c][n]["persistenceIdentifier"]=a.persistenceIdentifier}break;case"remove":case"add":default:if(e&&e instanceof Array){e.forEach((e,t)=>{if(p.aggregations[c].hasOwnProperty(e.key)){p.aggregations[c][e.key]["position"]=t}})}if(a.hasOwnProperty("value")){p.aggregations[c][n][i]=a.value;p.aggregations[c][n]["position"]=a.index;if(a.persistenceIdentifier){p.aggregations[c][n]["persistenceIdentifier"]=a.persistenceIdentifier}}else{p.aggregations[c][n][i]=a}break}}else{delete p.aggregations[c][n][i];if(Object.keys(p.aggregations[c][n]).length===0){delete p.aggregations[c][n];if(Object.keys(p.aggregations[c]).length===0){delete p.aggregations[c]}}}return p};r.createPropertyConfig=(e,t,r)=>{const n=t.value;const o=t.property;const i=r||{};if(!i.properties){i.properties={}}if(!i.properties.hasOwnProperty(o)){i.properties[o]=[]}const a=t.operation;const s=i.properties[o].find(e=>e.key===t.key);if(s&&a!=="add"){i.properties[o].splice(i.properties[o].indexOf(s),1)}if(a!=="remove"){i.properties[o].splice(t.value.index,0,n)}return i};return r});
//# sourceMappingURL=xConfigAPI.js.map