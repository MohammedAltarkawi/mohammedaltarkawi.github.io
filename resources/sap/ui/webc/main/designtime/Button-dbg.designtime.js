/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.ui.webc.main.Button
sap.ui.define([],
	function () {
		"use strict";

		return {
			actions: {
				remove: {
					changeType: "hideControl"
				},
				rename: function () {
					return {
						changeType: "rename",
						domRef: function (oControl) {
							return oControl.getDomRef().getDomRef().querySelector("span>bdi");
						},
						getTextMutators: function (oControl) {
							return {
								getText: function () {
									return oControl.getDomRef().textContent;
								},
								setText: function (sNewText) {
									oControl.getDomRef().textContent = sNewText;
								}
							};
						},
						isEnabled: function (oControl) {
							return oControl.getText().length > 0;
						},
						validators: [
							"noEmptyText"
						]
					};
				},
				reveal: {
					changeType: "unhideControl"
				}
			}
		};
	});