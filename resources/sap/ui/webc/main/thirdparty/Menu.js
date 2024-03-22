sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/decorators/property","sap/ui/webc/common/thirdparty/base/decorators/slot","sap/ui/webc/common/thirdparty/base/decorators/event","sap/ui/webc/common/thirdparty/base/types/DOMReference","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/common/thirdparty/base/Device","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/icons/slim-arrow-right","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/types/Integer","./ResponsivePopover","./Button","./List","./StandardListItem","./Icon","./BusyIndicator","./generated/templates/MenuTemplate.lit","./generated/i18n/i18n-defaults","./generated/themes/Menu.css"],function(e,t,n,s,i,o,r,u,a,p,l,c,m,d,h,f,_,b,M,I,y,v){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=S(t);n=S(n);s=S(s);i=S(i);o=S(o);r=S(r);c=S(c);m=S(m);d=S(d);h=S(h);f=S(f);_=S(_);b=S(b);M=S(M);I=S(I);v=S(v);function S(e){return e&&e.__esModule?e:{default:e}}var g=void 0&&(void 0).__decorate||function(e,t,n,s){var i=arguments.length,o=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,n,s);else for(var u=e.length-1;u>=0;u--)if(r=e[u])o=(i<3?r(o):i>3?r(t,n,o):r(t,n))||o;return i>3&&o&&Object.defineProperty(t,n,o),o};var T;const C=300;const E=400;let P=T=class e extends t.default{static async onDefine(){T.i18nBundle=await(0,p.getI18nBundle)("@ui5/webcomponents")}get itemsWithChildren(){return!!this._currentItems.filter(e=>e.item.items.length).length}get itemsWithIcon(){return!!this._currentItems.filter(e=>e.item.icon!=="").length}get isRtl(){return this.effectiveDir==="rtl"}get placementType(){const e=this.isRtl?"Left":"Right";return this._isSubMenu?e:"Bottom"}get verticalAlign(){return this._isSubMenu?"Top":"Bottom"}get labelBack(){return T.i18nBundle.getText(y.MENU_BACK_BUTTON_ARIA_LABEL)}get labelClose(){return T.i18nBundle.getText(y.MENU_CLOSE_BUTTON_ARIA_LABEL)}get isPhone(){return(0,a.isPhone)()}get isSubMenuOpened(){return!!this._parentMenuItem}get menuHeaderTextPhone(){return this._parentMenuItem?this._parentMenuItem.text:this.headerText}onBeforeRendering(){!(0,a.isPhone)()&&this._prepareCurrentItems(this.items);const e=this.itemsWithChildren;const t=this.itemsWithIcon;this._currentItems.forEach(n=>{n.item._siblingsWithChildren=e;n.item._siblingsWithIcon=t;const s=n.item._subMenu;const i=n.item;if(s&&s.busy){s.innerHTML="";const e=this._clonedItemsFragment(i);s.appendChild(e)}if(s){s.busy=n.item.busy;s.busyDelay=n.item.busyDelay}})}onAfterRendering(){if(!this.opener){return}if(this.open){const e=this.getRootNode();const t=this.opener instanceof HTMLElement?this.opener:e&&e.getElementById(this.opener);if(t){this.showAt(t)}}else{this.close()}}async showAt(e){if((0,a.isPhone)()){this._prepareCurrentItems(this.items);this._parentItemsStack=[]}if(!this._isSubMenu){this._parentMenuItem=undefined}const t=await this._createPopover();t.initialFocus="";for(let e=0;e<this._currentItems.length;e++){if(!this._currentItems[e].item.disabled){t.initialFocus=`${this._id}-menu-item-${e}`;break}}t.showAt(e)}close(){if(this._popover){if((0,a.isPhone)()){this._parentItemsStack=[]}this._popover.close();this._popover.resetFocus()}}async _createPopover(){const e=await this.getStaticAreaItemDomRef();this._popover=e.querySelector("[ui5-responsive-popover]");return this._popover}_navigateBack(){const e=this._parentItemsStack.pop();this.focus();if(e){const t=e.parentElement;this._prepareCurrentItems(t.items);this._parentMenuItem=this._parentItemsStack.length?this._parentItemsStack[this._parentItemsStack.length-1]:undefined}}_prepareCurrentItems(e){this._currentItems=e.map((e,t)=>({item:e,position:t+1,ariaHasPopup:e.hasSubmenu?"menu":undefined}))}_createSubMenu(e,t){const n=this.constructor;const s=document.createElement(n.getMetadata().getTag());s._isSubMenu=true;s.setAttribute("id",`submenu-${t}`);s._parentMenuItem=e;s.busy=e.busy;s.busyDelay=e.busyDelay;const i=this._clonedItemsFragment(e);s.appendChild(i);this.staticAreaItem.shadowRoot.querySelector(".ui5-menu-submenus").appendChild(s);e._subMenu=s}_clonedItemsFragment(e){const t=document.createDocumentFragment();for(let n=0;n<e.items.length;++n){const s=e.items[n].cloneNode(true);t.appendChild(s)}return t}_openItemSubMenu(e,t,n){const s=this._findMainMenu(e);s.fireEvent("before-open",{item:e});e._subMenu.showAt(t);e._preventSubMenuClose=true;this._openedSubMenuItem=e;this._subMenuOpenerId=n}_closeItemSubMenu(e,t=false){if(e){if(t){e._preventSubMenuClose=false;this._closeSubMenuPopover(e._subMenu,true)}else{setTimeout(()=>this._closeSubMenuPopover(e._subMenu),0)}}}_closeSubMenuPopover(e,t=false){if(e){const n=e._parentMenuItem;if(t||!n._preventSubMenuClose){e.close();e.remove();n._subMenu=undefined;this._openedSubMenuItem=undefined;this._subMenuOpenerId=""}}}_prepareSubMenuDesktopTablet(e,t,n){if(n!==this._subMenuOpenerId||e&&e.hasSubmenu){this._closeItemSubMenu(this._openedSubMenuItem,true)}if(e&&e.hasSubmenu){this._createSubMenu(e,n);this._openItemSubMenu(e,t,n)}if(this._parentMenuItem){this._parentMenuItem._preventSubMenuClose=true}}_prepareSubMenuPhone(e){this._prepareCurrentItems(e.items);this._parentMenuItem=e;this._parentItemsStack.push(e)}_startOpenTimeout(e,t,n){this._clearTimeout();this._timeout=setTimeout(()=>{this._prepareSubMenuDesktopTablet(e,t,n)},C)}_startCloseTimeout(e){this._clearTimeout();this._timeout=setTimeout(()=>{this._closeItemSubMenu(e)},E)}_clearTimeout(){if(this._timeout){clearTimeout(this._timeout)}}_itemMouseOver(e){if((0,a.isDesktop)()){const t=e.target;const n=t.associatedItem;const s=t.getAttribute("id");t.focus();this._clearTimeout();this._startOpenTimeout(n,t,s)}}_busyMouseOver(){if(this._parentMenuItem){this._parentMenuItem._preventSubMenuClose=true}}_itemMouseOut(e){if((0,a.isDesktop)()){const t=e.target;const n=t.associatedItem;this._clearTimeout();if(n&&n.hasSubmenu&&n._subMenu){n._preventSubMenuClose=false;this._startCloseTimeout(n)}}}_itemKeyDown(e){const t=this.isRtl?(0,u.isRight)(e):(0,u.isLeft)(e);const n=this.isRtl?(0,u.isLeft)(e):(0,u.isRight)(e);if((0,u.isEnter)(e)){e.preventDefault()}if(n){const t=e.target;const n=t.associatedItem;const s=t.getAttribute("id");n.hasSubmenu&&this._prepareSubMenuDesktopTablet(n,t,s)}else if(t&&this._isSubMenu&&this._parentMenuItem){const e=this._parentMenuItem.parentElement;e._closeItemSubMenu(this._parentMenuItem,true)}}_itemClick(e){const t=e.detail.item;const n=t.associatedItem;const s=t.getAttribute("id");if(!n.hasSubmenu){if(!this._isSubMenu){if((0,a.isPhone)()){this._parentMenuItem=undefined}const e=!this.fireEvent("item-click",{item:n,text:n.text},true,false);if(!e){this._popover.close()}}else{const e=this._findMainMenu(n);const t=!e.fireEvent("item-click",{item:n,text:n.text},true,false);if(!t){let t=n;let s=t.parentElement;do{t._preventSubMenuClose=false;this._closeItemSubMenu(t);s=t.parentElement;t=s._parentMenuItem}while(s._parentMenuItem);e._popover.close()}}}else if((0,a.isPhone)()){this._prepareSubMenuPhone(n)}else if((0,a.isTablet)()){this._prepareSubMenuDesktopTablet(n,t,s)}}_findMainMenu(e){let t=e.parentElement;while(t._parentMenuItem){t=t._parentMenuItem.parentElement}return t}_beforePopoverOpen(e){const t=!this.fireEvent("before-open",{},true,false);if(t){this.open=false;e.preventDefault()}}_afterPopoverOpen(){this.open=true;this.fireEvent("after-open")}_beforePopoverClose(e){const t=!this.fireEvent("before-close",{escPressed:e.detail.escPressed},true,false);if(t){this.open=true;e.preventDefault();return}if(this._openedSubMenuItem){this._openedSubMenuItem._preventSubMenuClose=false;this._closeItemSubMenu(this._openedSubMenuItem)}}_afterPopoverClose(){this.open=false;this.fireEvent("after-close")}};g([(0,s.default)()],P.prototype,"headerText",void 0);g([(0,s.default)({type:Boolean})],P.prototype,"open",void 0);g([(0,s.default)({type:Boolean})],P.prototype,"busy",void 0);g([(0,s.default)({validator:m.default,defaultValue:1e3})],P.prototype,"busyDelay",void 0);g([(0,s.default)({validator:r.default,defaultValue:""})],P.prototype,"opener",void 0);g([(0,s.default)({type:Boolean,noAttribute:true})],P.prototype,"_isSubMenu",void 0);g([(0,s.default)()],P.prototype,"_subMenuOpenerId",void 0);g([(0,s.default)({type:Object,multiple:true})],P.prototype,"_currentItems",void 0);g([(0,s.default)({type:Object,multiple:true})],P.prototype,"_parentItemsStack",void 0);g([(0,s.default)({type:Object,defaultValue:undefined})],P.prototype,"_popover",void 0);g([(0,s.default)({type:Object,defaultValue:undefined})],P.prototype,"_parentMenuItem",void 0);g([(0,s.default)({type:Object,defaultValue:undefined})],P.prototype,"_openedSubMenuItem",void 0);g([(0,i.default)({default:true,type:HTMLElement,invalidateOnChildChange:true})],P.prototype,"items",void 0);P=T=g([(0,n.default)({tag:"ui5-menu",renderer:c.default,staticAreaStyles:v.default,staticAreaTemplate:I.default,dependencies:[d.default,h.default,f.default,_.default,b.default,M.default]}),(0,o.default)("item-click",{detail:{item:{type:HTMLElement},text:{type:String}}}),(0,o.default)("before-open",{detail:{item:{type:HTMLElement}}}),(0,o.default)("after-open"),(0,o.default)("before-close",{detail:{escPressed:{type:Boolean}}}),(0,o.default)("after-close")],P);P.define();var w=P;e.default=w});
//# sourceMappingURL=Menu.js.map