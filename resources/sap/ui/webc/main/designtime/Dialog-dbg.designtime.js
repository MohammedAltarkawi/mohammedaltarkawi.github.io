/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the design-time metadata for the sap.ui.webc.main.Dialog control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "DIALOG_NAME",
				plural: "DIALOG_NAME_PLURAL"
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				},
				rename: {
					changeType: "rename",
					domRef: function (oControl) {
						return oControl.getDomRef().shadowRoot.querySelector(".ui5-popup-header-text");
					},
					getTextMutators: function (oControl) {
						return {
							getText: function () {
								return oControl.getDomRef().getAttribute("header-text");
							},
							setText: function (sNewText) {
								oControl.getDomRef().setAttribute("header-text", sNewText);
							}
						};
					}
				}
			}
		};
	});