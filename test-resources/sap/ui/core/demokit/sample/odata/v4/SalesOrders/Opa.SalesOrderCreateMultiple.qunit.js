/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/sample/common/Helper",
	"sap/ui/core/sample/odata/v4/SalesOrders/tests/CreateMultiple",
	"sap/ui/test/opaQunit"
], function (Helper, CreateMultiple, opaQunit) {
	"use strict";

	Helper.qUnitModule("sap.ui.core.sample.odata.v4.SalesOrders - Create Multiple", 180);

	//*****************************************************************************
	opaQunit("Multiple create, modify and delete", function (Given, When, Then) {
		CreateMultiple.createMultiple(Given, When, Then);
	});
});
