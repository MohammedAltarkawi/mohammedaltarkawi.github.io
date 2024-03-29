/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/sample/common/Helper",
	"sap/ui/core/sample/odata/v4/SalesOrders/tests/TypeDeterminationAndDelete",
	"sap/ui/test/opaQunit"
], function (Helper, TypeDeterminationAndDeleteTest, opaTest) {
	"use strict";

	Helper.qUnitModule("sap.ui.core.sample.odata.v4.SalesOrders - Type Determination and Delete");

	//*****************************************************************************
	opaTest("Type Determination, Delete Sales Orders", function (Given, When, Then) {
		TypeDeterminationAndDeleteTest.typeDeterminationAndDelete(Given, When, Then);
	});
});
