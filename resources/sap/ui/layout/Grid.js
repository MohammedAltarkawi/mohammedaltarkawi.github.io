/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","./library","sap/ui/Device","sap/ui/core/ResizeHandler","sap/ui/base/ManagedObjectObserver","./GridRenderer","sap/ui/thirdparty/jquery"],function(e,t,i,s,a,n,jQuery){"use strict";var o=e.extend("sap.ui.layout.Grid",{metadata:{library:"sap.ui.layout",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%"},vSpacing:{type:"float",group:"Dimension",defaultValue:1},hSpacing:{type:"float",group:"Dimension",defaultValue:1},position:{type:"sap.ui.layout.GridPosition",group:"Dimension",defaultValue:"Left"},defaultSpan:{type:"sap.ui.layout.GridSpan",group:"Behavior",defaultValue:"XL3 L3 M6 S12"},defaultIndent:{type:"sap.ui.layout.GridIndent",group:"Behavior",defaultValue:"XL0 L0 M0 S0"},containerQuery:{type:"boolean",group:"Behavior",defaultValue:false}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},designtime:"sap/ui/layout/designtime/Grid.designtime"},renderer:n});(function(){o.prototype.init=function(){(()=>{var e=t.GridHelper.getLibrarySpecificClass();if(e){this.addStyleClass(e)}})();this._iBreakPointTablet=i.media._predefinedRangeSets[i.media.RANGESETS.SAP_STANDARD_EXTENDED].points[0];this._iBreakPointDesktop=i.media._predefinedRangeSets[i.media.RANGESETS.SAP_STANDARD_EXTENDED].points[1];this._iBreakPointLargeDesktop=i.media._predefinedRangeSets[i.media.RANGESETS.SAP_STANDARD_EXTENDED].points[2];this._indentXLChanged=false;this._spanXLChanged=false;this._oObserver=new a(o.prototype._observeChanges.bind(this));this._oObserver.observe(this,{aggregations:["content"]})};o.prototype.onAfterRendering=function(){if(this.getContainerQuery()){this._sContainerResizeListener=s.register(this,jQuery.proxy(this._onParentResize,this));this._onParentResize()}else{this._attachMediaContainerWidthChange(this._handleMediaChange,this,i.media.RANGESETS.SAP_STANDARD_EXTENDED)}};o.prototype.onBeforeRendering=function(){this._cleanup()};o.prototype.exit=function(){this._cleanup();if(this._oObserver){this._oObserver.disconnect();this._oObserver=null}};o.prototype._cleanup=function(){if(this._sContainerResizeListener){s.deregister(this._sContainerResizeListener);this._sContainerResizeListener=null}this._detachMediaContainerWidthChange(this._handleMediaChange,this,i.media.RANGESETS.SAP_STANDARD_EXTENDED)};o.prototype._observeVisibility=function(e){this._oObserver.observe(e,{properties:["visible"]})};o.prototype._unobserveVisibility=function(e){this._oObserver.unobserve(e,{properties:["visible"]})};o.prototype._observeChanges=function(e){var t=e.object,i=e.name,s=e.mutation,a=e.child;if(t===this){if(s==="insert"){this._observeVisibility(a)}else if(s==="remove"){this._unobserveVisibility(a)}}else if(i==="visible"){var n=this.getContent().indexOf(t);jQuery(this.$().children()[n]).toggleClass("sapUiRespGridSpanInvisible",!e.current)}};o.prototype._handleMediaChange=function(e){this._toggleClass(e.name)};o.prototype._setBreakPointTablet=function(e){this._iBreakPointTablet=e};o.prototype._setBreakPointDesktop=function(e){this._iBreakPointDesktop=e};o.prototype._setBreakPointLargeDesktop=function(e){this._iBreakPointLargeDesktop=e};o.prototype.setDefaultIndent=function(e){if(/XL/gi.test(e)){this._setIndentXLChanged(true)}return this.setProperty("defaultIndent",e)};o.prototype._setIndentXLChanged=function(e){this._indentXLChanged=e};o.prototype._getIndentXLChanged=function(){return this._indentXLChanged};o.prototype.setDefaultSpan=function(e){if(/XL/gi.test(e)){this._setSpanXLChanged(true)}return this.setProperty("defaultSpan",e)};o.prototype._setSpanXLChanged=function(e){this._spanXLChanged=e};o.prototype._getSpanXLChanged=function(){return this._spanXLChanged};o.prototype._onParentResize=function(){var e=this.getDomRef();if(!e){this._cleanup();return}if(!jQuery(e).is(":visible")){return}var t=e.clientWidth;if(t<=this._iBreakPointTablet){this._toggleClass("Phone")}else if(t>this._iBreakPointTablet&&t<=this._iBreakPointDesktop){this._toggleClass("Tablet")}else if(t>this._iBreakPointDesktop&&t<=this._iBreakPointLargeDesktop){this._toggleClass("Desktop")}else{this._toggleClass("LargeDesktop")}};o.prototype._toggleClass=function(e){var t=this.$();if(!t){return}if(t.hasClass("sapUiRespGridMedia-Std-"+e)){return}t.toggleClass("sapUiRespGridMedia-Std-"+e,true);if(e==="Phone"){t.toggleClass("sapUiRespGridMedia-Std-Desktop",false).toggleClass("sapUiRespGridMedia-Std-Tablet",false).toggleClass("sapUiRespGridMedia-Std-LargeDesktop",false)}else if(e==="Tablet"){t.toggleClass("sapUiRespGridMedia-Std-Desktop",false).toggleClass("sapUiRespGridMedia-Std-Phone",false).toggleClass("sapUiRespGridMedia-Std-LargeDesktop",false)}else if(e==="LargeDesktop"){t.toggleClass("sapUiRespGridMedia-Std-Desktop",false).toggleClass("sapUiRespGridMedia-Std-Phone",false).toggleClass("sapUiRespGridMedia-Std-Tablet",false)}else{t.toggleClass("sapUiRespGridMedia-Std-Phone",false).toggleClass("sapUiRespGridMedia-Std-Tablet",false).toggleClass("sapUiRespGridMedia-Std-LargeDesktop",false)}this.fireEvent("mediaChanged",{media:e})};o.prototype._getLayoutDataForControl=function(e){var t=e.getLayoutData();if(!t){return undefined}else if(t.isA("sap.ui.layout.GridData")){return t}else if(t.isA("sap.ui.core.VariantLayoutData")){var i=t.getMultipleLayoutData();for(var s=0;s<i.length;s++){var a=i[s];if(a&&a.isA("sap.ui.layout.GridData")){return a}}}};o.prototype.onLayoutDataChange=function(e){if(this.getDomRef()){this.invalidate()}};o.prototype._getAccessibleRole=function(){return null};o.prototype.getAccessibilityInfo=function(){return{children:this.getContent().filter(function(e){return e.$().is(":visible")})}}})();return o});
//# sourceMappingURL=Grid.js.map