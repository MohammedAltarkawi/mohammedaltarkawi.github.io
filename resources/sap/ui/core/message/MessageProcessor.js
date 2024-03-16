/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/EventProvider","sap/base/util/uid"],function(e,s){"use strict";var t=e.extend("sap.ui.core.message.MessageProcessor",{constructor:function(){e.apply(this,arguments);this.mMessages=null;this.id=s()},metadata:{abstract:true,publicMethods:["getId","setMessages","attachMessageChange","detachMessageChange"]}});t.M_EVENTS={messageChange:"messageChange"};t.prototype.attachMessageChange=function(e,s,t){this.attachEvent("messageChange",e,s,t);return this};t.prototype.detachMessageChange=function(e,s){this.detachEvent("messageChange",e,s);return this};t.prototype.fireMessageChange=function(e){var s=sap.ui.require("sap/ui/core/Messaging");if(s){s.registerMessageProcessor(this);s.updateMessages(e.oldMessages,e.newMessages);this.fireEvent("messageChange",e)}else{sap.ui.require(["sap/ui/core/Messaging"],function(s){s.registerMessageProcessor(this);s.updateMessages(e.oldMessages,e.newMessages);this.fireEvent("messageChange",e)}.bind(this))}return this};t.prototype.getId=function(){return this.id};return t});
//# sourceMappingURL=MessageProcessor.js.map