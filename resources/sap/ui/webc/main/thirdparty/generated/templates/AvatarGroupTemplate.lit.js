sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(t,i){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;function e(t,e,n){return(0,i.html)`<div class="ui5-avatar-group-root"><div class="ui5-avatar-group-items" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" tabindex="${(0,i.ifDefined)(this._groupTabIndex)}" @click="${this._onClick}" @ui5-click="${(0,i.ifDefined)(this._onUI5Click)}" aria-label="${(0,i.ifDefined)(this._ariaLabelText)}" role="${(0,i.ifDefined)(this._role)}" aria-haspopup="${(0,i.ifDefined)(this._containerAriaHasPopup)}"><slot></slot>${this._customOverflowButton?o.call(this,t,e,n):s.call(this,t,e,n)}</div></div>`}function o(t,e,o){return(0,i.html)`<slot name="overflowButton"></slot>`}function s(t,e,o){return o?(0,i.html)`<${(0,i.scopeTag)("ui5-button",e,o)} .accessibilityAttributes="${(0,i.ifDefined)(this._overflowButtonAccAttributes)}" aria-label="${(0,i.ifDefined)(this._overflowButtonAriaLabelText)}" ?hidden="${this._overflowBtnHidden}" ?non-interactive=${this._isGroup} class="${(0,i.classMap)(this.classes.overflowButton)}">${(0,i.ifDefined)(this._overflowButtonText)}</${(0,i.scopeTag)("ui5-button",e,o)}>`:(0,i.html)`<ui5-button .accessibilityAttributes="${(0,i.ifDefined)(this._overflowButtonAccAttributes)}" aria-label="${(0,i.ifDefined)(this._overflowButtonAriaLabelText)}" ?hidden="${this._overflowBtnHidden}" ?non-interactive=${this._isGroup} class="${(0,i.classMap)(this.classes.overflowButton)}">${(0,i.ifDefined)(this._overflowButtonText)}</ui5-button>`}var n=e;t.default=n});
//# sourceMappingURL=AvatarGroupTemplate.lit.js.map