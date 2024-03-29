/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the design-time metadata for the sap.ui.webc.fiori.SideNavigationSubItem control
sap.ui.define([],
	function () {
		"use strict";

		var getItemDomRef = function (oControl) {
			return Array.from(oControl.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-item-ui5")).find(function (item) {
				return item.associatedItem === oControl.getDomRef();
			});
		};
		return {
			name: {
				singular: "SIDE_NAVIGATION_SUB_ITEM_NAME",
				plural: "SIDE_NAVIGATION_ITEM_SUB_PLURAL"
			},
			domRef: function (oControl) {
				var aItems = Array.from(oControl.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[0].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));
				return aItems.find(function (item) {
					return item.treeItem === getItemDomRef(oControl);
				});
			},
			actions: {
				rename: {
					changeType: "rename",
					domRef: function (oControl) {
						var aItems = Array.from(oControl.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[0].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));

						return aItems.find(function (item) {
							return item.treeItem === getItemDomRef(oControl);
						}).shadowRoot.querySelector(".ui5-li-title");
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