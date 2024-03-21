/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/webc/main/library","./thirdparty/NotificationListGroupItem"],function(e,t,a){"use strict";var i=a.Priority;var o=e.extend("sap.ui.webc.fiori.NotificationListGroupItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-li-notification-group-ui5",interfaces:["sap.ui.webc.main.IListItem"],properties:{busy:{type:"boolean",defaultValue:false},busyDelay:{type:"int",defaultValue:1e3},collapsed:{type:"boolean",defaultValue:false},priority:{type:"sap.ui.webc.main.Priority",defaultValue:i.None},read:{type:"boolean",defaultValue:false},selected:{type:"boolean",defaultValue:false},showClose:{type:"boolean",defaultValue:false},showCounter:{type:"boolean",defaultValue:false},titleText:{type:"string",defaultValue:""}},defaultAggregation:"items",aggregations:{actions:{type:"sap.ui.webc.fiori.INotificationAction",multiple:true,slot:"actions"},items:{type:"sap.ui.webc.fiori.INotificationListItem",multiple:true}},events:{close:{parameters:{item:{type:"HTMLElement"}}},toggle:{parameters:{}}}}});return o});
//# sourceMappingURL=NotificationListGroupItem.js.map