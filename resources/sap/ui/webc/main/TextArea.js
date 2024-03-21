/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","sap/ui/core/library","./thirdparty/features/InputElementsFormSupport","./thirdparty/TextArea"],function(e,a,t,l){"use strict";var r=l.ValueState;var p=e.extend("sap.ui.webc.main.TextArea",{metadata:{library:"sap.ui.webc.main",tag:"ui5-textarea-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{accessibleName:{type:"string"},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},growing:{type:"boolean",defaultValue:false},growingMaxLines:{type:"int",defaultValue:0},height:{type:"sap.ui.core.CSSSize",mapping:"style"},maxlength:{type:"int",defaultValue:null},name:{type:"string",defaultValue:""},placeholder:{type:"string",defaultValue:""},readonly:{type:"boolean",defaultValue:false},required:{type:"boolean",defaultValue:false},rows:{type:"int",defaultValue:0},showExceededText:{type:"boolean",defaultValue:false},value:{type:"string",defaultValue:""},valueState:{type:"sap.ui.core.ValueState",defaultValue:r.None},valueStateMessage:{type:"string",defaultValue:"",mapping:{type:"slot",to:"div"}},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}}},events:{change:{parameters:{}},input:{parameters:{}}}}});t.call(p.prototype);return p});
//# sourceMappingURL=TextArea.js.map