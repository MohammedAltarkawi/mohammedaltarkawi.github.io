sap.ui.define(["exports","../types/CalendarType","../InitialConfiguration"],function(e,n,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.getSecondaryCalendarType=e.getCalendarType=void 0;n=r(n);function r(e){return e&&e.__esModule?e:{default:e}}let a;let d;const i=()=>{if(a===undefined){a=(0,t.getCalendarType)()}if(a&&a in n.default){return a}return n.default.Gregorian};e.getCalendarType=i;const u=()=>{if(d===undefined){d=(0,t.getSecondaryCalendarType)()}if(d&&d in n.default){return d}return d};e.getSecondaryCalendarType=u});
//# sourceMappingURL=CalendarType.js.map