/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

(function () {
	"use strict";

	var fnOnError = window.onerror;

	if (!/aDependencies/.test(sap.ui.define.toString()) ) {
		// only if we run with minified sources, it makes a difference to load debug sources
		window["sap-ui-optimized"] = true;
		window.onerror = function (sMessage) {
			// ignore expected error
			return sMessage.indexOf("This is not a real error. Aborting UI5 bootstrap") >= 0
				|| fnOnError.apply(this, arguments);
		};
	}
}());