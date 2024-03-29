/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/qunit/analytics/o4aFakeService"
], function (o4aFakeService) {
	"use strict";
	o4aFakeService.addResponse({
		uri: "", //empty string is a query against the base uri, meaning the service document
		header: o4aFakeService.headers.JSON,
		content: "{ \"d\": { \"EntitySets\": [\"ActualPlannedCostsResults\", \"ActualPlannedCosts\", \"ControllingAreas\", \"CostCenterResults\", \"CostCentersTemporalView\", \"CostCenters\", \"CostElements\"] } }"
	});
});