sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(s,e){"use strict";Object.defineProperty(s,"__esModule",{value:true});s.default=void 0;function t(s,t,a){return(0,e.html)`<div class="ui5-dsc-root" style="${(0,e.styleMap)(this.styles.root)}">${this._isSideContentFirst?l.call(this,s,t,a):i.call(this,s,t,a)}</div> `}function l(s,t,l){return(0,e.html)`<aside role="complementary" aria-label="${(0,e.ifDefined)(this.accInfo.label)}" class="${(0,e.classMap)(this.classes.side)}" style="${(0,e.styleMap)(this.styles.side)}"><slot name="sideContent"></slot></aside><div class="${(0,e.classMap)(this.classes.main)}" style="${(0,e.styleMap)(this.styles.main)}"><slot></slot></div>`}function i(s,t,l){return(0,e.html)`<div class="${(0,e.classMap)(this.classes.main)}" style="${(0,e.styleMap)(this.styles.main)}"><slot></slot></div><aside role="complementary" aria-label="${(0,e.ifDefined)(this.accInfo.label)}" class="${(0,e.classMap)(this.classes.side)}" style="${(0,e.styleMap)(this.styles.side)}"><slot name="sideContent"></slot></aside>`}var a=t;s.default=a});
//# sourceMappingURL=DynamicSideContentTemplate.lit.js.map