/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.ui.webc.fiori.Page control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "PAGE_NAME",
				plural: "PAGE_NAME_PLURAL"
			},
			aggregations: {
				header: {
					domRef: function (oControl) {
						return oControl.getDomRef().querySelector("[ui5-bar][slot='header']");
					}
				},
				content: {
					domRef: function (oControl) {
						return oControl.getDomRef().shadowRoot.querySelector(".ui5-page-content-root");
					},
					actions: {
						move: "moveControls"
					}
				},
				footer: {
					domRef: function (oControl) {
						return oControl.getDomRef().querySelector("[ui5-bar][slot='footer']");
					}
				}
			}
		};
	});