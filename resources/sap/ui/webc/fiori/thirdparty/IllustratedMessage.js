sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/decorators/property","sap/ui/webc/common/thirdparty/base/decorators/slot","sap/ui/webc/common/thirdparty/base/delegate/ResizeHandler","sap/ui/webc/common/thirdparty/base/asset-registries/Illustrations","sap/ui/webc/common/thirdparty/base/util/AriaLabelHelper","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/main/thirdparty/Title","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","./types/IllustrationMessageSize","./types/IllustrationMessageType","./illustrations/BeforeSearch","./generated/themes/IllustratedMessage.css","./generated/templates/IllustratedMessageTemplate.lit"],function(t,e,i,s,a,l,r,o,n,u,d,h,f,c,p,g){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;e=b(e);i=b(i);s=b(s);a=b(a);l=b(l);u=b(u);d=b(d);h=b(h);f=b(f);p=b(p);g=b(g);function b(t){return t&&t.__esModule?t:{default:t}}var m=void 0&&(void 0).__decorate||function(t,e,i,s){var a=arguments.length,l=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")l=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)if(r=t[o])l=(a<3?r(l):a>3?r(e,i,l):r(e,i))||l;return a>3&&l&&Object.defineProperty(e,i,l),l};var S;let A=S=class t extends e.default{constructor(){super();this._handleResize=this.handleResize.bind(this);this._lastKnownOffsetWidthForMedia={};this._lastKnownMedia="base"}static async onDefine(){S.i18nBundle=await(0,n.getI18nBundle)("@ui5/webcomponents-fiori")}static get BREAKPOINTS(){return{DIALOG:679,SPOT:319,BASE:259}}static get MEDIA(){return{BASE:"base",SPOT:"spot",DIALOG:"dialog",SCENE:"scene"}}async onBeforeRendering(){let t=(0,r.getIllustrationDataSync)(this.name);const e=this.getAttribute("name");if(this.hasAttribute("name")&&!this.isValidIllustration(e)){console.warn(`The illustration "${e}" does not exist. The default illustration "${f.default.BeforeSearch}" is loaded instead.`)}if(t===undefined){t=await(0,r.getIllustrationData)(this.name)}this.spotSvg=t.spotSvg;this.dialogSvg=t.dialogSvg;this.sceneSvg=t.sceneSvg;this.illustrationTitle=S.i18nBundle.getText(t.title);this.illustrationSubtitle=S.i18nBundle.getText(t.subtitle);if(this.size!==h.default.Auto){this._handleCustomSize()}}onEnterDOM(){l.default.register(this,this._handleResize)}onExitDOM(){l.default.deregister(this,this._handleResize)}handleResize(){if(this.size!==h.default.Auto){return}this._applyMedia()}_applyMedia(){const t=this.offsetWidth;let e="";if(this.offsetWidth<=S.BREAKPOINTS.BASE){e=S.MEDIA.BASE}else if(this.offsetWidth<=S.BREAKPOINTS.SPOT){e=S.MEDIA.SPOT}else if(this.offsetWidth<=S.BREAKPOINTS.DIALOG){e=S.MEDIA.DIALOG}else{e=S.MEDIA.SCENE}const i=this._lastKnownOffsetWidthForMedia[e];if(!(i&&t===i)||this._lastKnownOffsetWidthForMedia[this._lastKnownMedia]===0){this.media=e;this._lastKnownOffsetWidthForMedia[e]=t;this._lastKnownMedia=e}}_setSVGAccAttrs(){const t=this.shadowRoot.querySelector(".ui5-illustrated-message-illustration svg");if(t){if(this.ariaLabelText){t.setAttribute("aria-label",this.ariaLabelText)}else{t.removeAttribute("aria-label")}}}onAfterRendering(){this._setSVGAccAttrs()}_handleCustomSize(){switch(this.size){case h.default.Base:this.media=S.MEDIA.BASE;return;case h.default.Spot:this.media=S.MEDIA.SPOT;return;case h.default.Dialog:this.media=S.MEDIA.DIALOG;return;default:this.media=S.MEDIA.SCENE}}get ariaLabelText(){return(0,o.getEffectiveAriaLabelText)(this)}get effectiveIllustration(){switch(this.media){case S.MEDIA.SPOT:return this.spotSvg;case S.MEDIA.DIALOG:return this.dialogSvg;case S.MEDIA.SCENE:return this.sceneSvg;default:return""}}get hasFormattedSubtitle(){return!!this.subtitle.length}get hasFormattedTitle(){return!!this.title.length}get effectiveTitleText(){return this.titleText?this.titleText:this.illustrationTitle}get effectiveSubitleText(){return this.subtitleText?this.subtitleText:this.illustrationSubtitle}get hasTitle(){return!!(this.hasFormattedTitle||this.titleText||this.illustrationTitle)}get hasSubtitle(){return!!(this.hasFormattedSubtitle||this.subtitleText||this.illustrationSubtitle)}get hasActions(){return!!this.actions.length&&this.media!==S.MEDIA.BASE}isValidIllustration(t){return t in f.default}};m([(0,s.default)({type:f.default,defaultValue:f.default.BeforeSearch})],A.prototype,"name",void 0);m([(0,s.default)({type:h.default,defaultValue:h.default.Auto})],A.prototype,"size",void 0);m([(0,s.default)()],A.prototype,"subtitleText",void 0);m([(0,s.default)()],A.prototype,"titleText",void 0);m([(0,s.default)({defaultValue:""})],A.prototype,"accessibleNameRef",void 0);m([(0,s.default)({noAttribute:true})],A.prototype,"spotSvg",void 0);m([(0,s.default)({noAttribute:true})],A.prototype,"sceneSvg",void 0);m([(0,s.default)({noAttribute:true})],A.prototype,"dialogSvg",void 0);m([(0,s.default)()],A.prototype,"media",void 0);m([(0,a.default)({type:HTMLElement})],A.prototype,"title",void 0);m([(0,a.default)({type:HTMLElement})],A.prototype,"subtitle",void 0);m([(0,a.default)({type:HTMLElement,default:true})],A.prototype,"actions",void 0);A=S=m([(0,i.default)({tag:"ui5-illustrated-message",languageAware:true,themeAware:true,renderer:d.default,styles:p.default,template:g.default,dependencies:[u.default]})],A);A.define();var y=A;t.default=y});
//# sourceMappingURL=IllustratedMessage.js.map