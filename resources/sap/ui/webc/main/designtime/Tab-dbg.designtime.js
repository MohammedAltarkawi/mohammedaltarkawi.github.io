/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the design-time metadata for the sap.ui.webc.main.Tab control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "TAB_NAME",
				plural: "TAB_NAME_PLURAL"
			},
			domRef: function (oControl) {
				return oControl.getParent().getItems().find(function (item) {
					return item.sId === oControl.sId;
				}).getDomRef()._getRealDomRef();
			},
			actions: {
				rename: {
					changeType: "rename",
					domRef: function (oControl) {
						return oControl.getDomRef()._getRealDomRef().querySelector(".ui5-tab-strip-itemText");
					},
					getTextMutators: function (oControl) {
						return {
							getText: function () {
								return oControl.getText();
							},
							setText: function (sNewText) {
								oControl.setText(sNewText);
							}
						};
					}
				}
			}
		};
	});