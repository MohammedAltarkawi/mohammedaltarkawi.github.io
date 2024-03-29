sap.ui.define([
	'sap/base/Log',
	'sap/base/strings/hyphenate',
	'sap/base/util/Deferred',
	'sap/base/util/ObjectPath',
	'sap/ui/core/UIComponent',
	'sap/ui/core/ComponentContainer',
	'sap/ui/core/ComponentSupport',
	"sap/ui/core/Element",
	'sap/ui/core/library'
], function(Log, hyphenate, Deferred, ObjectPath, UIComponent, ComponentContainer, ComponentSupport, Element, library) {

	"use strict";
	/*global QUnit, sinon*/

	var ComponentLifecycle = library.ComponentLifecycle;

	// helper functionality to create component container DIVs
	function createComponentDIV(sId, mAttributes) {
		var oDIV = document.createElement("div");
		if (mAttributes) {
			Object.keys(mAttributes).forEach(function(sKey) {
				oDIV.setAttribute(sKey, mAttributes[sKey]);
			});
		}
		oDIV.setAttribute("id", sId);
		return oDIV;
	}

	var oContentElement = createComponentDIV("content");
	document.body.appendChild(oContentElement);

	/**
	 * @deprecated As of 1.120, the support for events is deprecated as it relies on global names
	 */
	ObjectPath.set("myAppController.onComponentCreated", function() {});

	// settings
	var mSettings = {
		"div1": {
			id: "container1",
			name: "sap.ui.test.v2empty",
			settings: {
				id: "component1"
			},
			/**
			 * @deprecated As of 1.120, the support for events is deprecated as it relies on global names
			 */
			componentCreated: "myAppController.onComponentCreated"
		},
		"div2": {
			id: "container2",
			name: "sap.ui.test.v2empty",
			settings: {
				id: "component2"
			},
			/**
			 * @deprecated As of 1.120, the support for events is deprecated as it relies on global names
			 */
			componentCreated: "myAppController.onComponentCreated",
			async: false
		},
		"div3": {
			id: "container3",
			name: "sap.ui.test.v2empty",
			settings: {
				id: "component3"
			},
			/**
			 * @deprecated As of 1.120, the support for events is deprecated as it relies on global names
			 */
			componentCreated: "myAppController.onComponentCreated",
			manifest: "true"
		},
		"div4": {
			id: "container4",
			name: "sap.ui.test.v2empty",
			settings: {
				id: "component4"
			},
			/**
			 * @deprecated As of 1.120, the support for events is deprecated as it relies on global names
			 */
			componentCreated: "myAppController.onComponentCreated",
			manifest: "false"
		}
	};

	// convert the settings and create the component container div elements
	var mContainers = {};
	Object.keys(mSettings).forEach(function(sId) {
		// create the component configuration for the div element from the settings
		var mContainer = mContainers[sId] = {
			"data-sap-ui-component": ""
		};
		Object.keys(mSettings[sId]).forEach(function(sKey) {
			mContainer["data-" + hyphenate(sKey)] = sKey === "settings" ? JSON.stringify(mSettings[sId][sKey]) : mSettings[sId][sKey];
		});
		// create the div element for the component container
		oContentElement.appendChild(createComponentDIV(sId, mContainer));
	});


	QUnit.module("Component Support");

	QUnit.test("Finder, Parser and Default Settings", function(assert) {

		// check the finder
		var aElements = ComponentSupport._find();
		assert.equal(aElements.length, 4, "Found 4 declarative components!");

		for (var i = 0, l = aElements.length; i < l; i++) {
			var oElement = aElements[i];
			var mExpectedSettings = mSettings[oElement.id];

			// check the parser
			var mComponentSettings = ComponentSupport._parse(oElement);
			/**
			 * @deprecated As of 1.120, the support for events is deprecated as it relies on global names
			 * Check event handler separately. Parser returns resolved function, whereas the expected settings
			 * contain a global name /(string) only
			 */
			if ( mExpectedSettings.componentCreated ) {
				assert.strictEqual(
					mComponentSettings.componentCreated,
					ObjectPath.get(mExpectedSettings.componentCreated),
					"Event handler parsed correctly for component " + oElement.id + "!");
				delete mComponentSettings.componentCreated;
				delete mExpectedSettings.componentCreated;
			}
			assert.deepEqual(mComponentSettings, mExpectedSettings, "Component settings parsed correctly for component " + oElement.id + "!");

			// check the default settings
			ComponentSupport._applyDefaultSettings(mComponentSettings);
			mExpectedSettings.async = true;
			mExpectedSettings.lifecycle = ComponentLifecycle.Container;
			mExpectedSettings.manifest = true;
			mExpectedSettings.autoPrefixId = true;
			assert.deepEqual(mComponentSettings, mExpectedSettings, "Component settings defaults applied properly for component " + oElement.id + "!");
		}

	});

	QUnit.test("Parser with unknown setting", function(assert) {

		this.spy(Log, "warning");
		var oElement = document.createElement("div");
		oElement.setAttribute("data-unknown", "foo");
		ComponentSupport._parse(oElement);
		assert.ok(
			Log.warning.calledWithMatch("Property or event \"unknown\" will be ignored as it does not exist in sap.ui.core.ComponentContainer"),
			"should log a warning with the expected message");

	});

	/**
	 * @deprecated As of 1.120, the support for events is deprecated as it relies on global names
	 */
	QUnit.test("Parser with invalid event callback", function(assert) {

		var oElement = document.createElement("div");
		oElement.setAttribute("data-component-created", "does.not.exist");
		assert.throws(function() {
			ComponentSupport._parse(oElement);
		}, new Error("Callback handler for event \"componentCreated\" not found"));

	});

	QUnit.test("ComponentContainer Factory", function(assert) {

		const aComponentElements = document.querySelectorAll("[data-sap-ui-component]");

		assert.equal(aComponentElements.length, 4, "There should be four declarative elements");
		assert.ok(aComponentElements[0].hasAttribute("data-sap-ui-component"), "First element should have the indicator attribute");
		assert.ok(aComponentElements[1].hasAttribute("data-sap-ui-component"), "Second element should have the indicator attribute");
		assert.ok(aComponentElements[2].hasAttribute("data-sap-ui-component"), "Third element should have the indicator attribute");
		assert.ok(aComponentElements[3].hasAttribute("data-sap-ui-component"), "Fourth element should have the indicator attribute");

		const deferred = new Deferred();
		let iComponentCount = 0;
		this.stub(ComponentContainer.prototype, "applySettings").callsFake(function(mSettings) {
			// inject `componentCreated` event handler and wait for component creation
			mSettings.componentCreated = function() {
				iComponentCount++;
				// continue the test once all component instances have been created
				if (iComponentCount == 4) {
					deferred.resolve();
				}
			};
			return ComponentContainer.prototype.applySettings.wrappedMethod.apply(this, arguments);
		});

		// execute the ComponentSupport
		ComponentSupport.run();

		// Four ComponentContainers should have been created
		sinon.assert.callCount(ComponentContainer.prototype.applySettings, 4);

		assert.notOk(aComponentElements[0].hasAttribute("data-sap-ui-component"), "First element should not have the indicator attribute anymore");
		assert.ok(aComponentElements[0].parentNode, "First element should still be part of the DOM");
		assert.notOk(aComponentElements[1].hasAttribute("data-sap-ui-component"), "Second element should not have the indicator attribute anymore");
		assert.ok(aComponentElements[1].parentNode, "Second element should still be part of the DOM");
		assert.notOk(aComponentElements[1].hasAttribute("data-sap-ui-component"), "Third element should not have the indicator attribute anymore");
		assert.ok(aComponentElements[1].parentNode, "Third element should still be part of the DOM");
		assert.notOk(aComponentElements[1].hasAttribute("data-sap-ui-component"), "Fourth element should not have the indicator attribute anymore");
		assert.ok(aComponentElements[1].parentNode, "Fourth element should still be part of the DOM");

		assert.equal(document.querySelectorAll("[data-sap-ui-component]").length, 0, "There should not be any declarative elements anymore");

		// Directly executing run again shouldn't try to create the same containers again
		ComponentSupport.run();

		// Still, only four ComponentContainers should have been created
		sinon.assert.callCount(ComponentContainer.prototype.applySettings, 4);

		return deferred.promise.then(function() {

			assert.ok(document.getElementById("div1"), "Placeholder DIV for first Component found!");
			assert.ok(document.getElementById("div2"), "Placeholder DIV for second Component found!");
			assert.ok(document.getElementById("div3"), "Placeholder DIV for third Component found!");
			assert.ok(document.getElementById("div4"), "Placeholder DIV for fourth Component found!");
			assert.ok(document.getElementById("container1"), "ComponentContainer element for first Component found!");
			assert.ok(document.getElementById("container2"), "ComponentContainer element for second Component found!");
			assert.ok(document.getElementById("container3"), "ComponentContainer element for third Component found!");
			assert.ok(document.getElementById("container4"), "ComponentContainer element for fourth Component found!");

			var oContainer1 = Element.getElementById("container1");
			var oContainer2 = Element.getElementById("container2");
			var oContainer3 = Element.getElementById("container3");
			var oContainer4 = Element.getElementById("container4");
			assert.ok(oContainer1 instanceof ComponentContainer, "ComponentContainer for first Component found!");
			assert.ok(oContainer2 instanceof ComponentContainer, "ComponentContainer for second Component found!");
			assert.ok(oContainer3 instanceof ComponentContainer, "ComponentContainer for third Component found!");
			assert.ok(oContainer4 instanceof ComponentContainer, "ComponentContainer for fourth Component found!");

			var oComponent1 = oContainer1.getComponentInstance();
			var oComponent2 = oContainer2.getComponentInstance();
			var oComponent3 = oContainer3.getComponentInstance();
			var oComponent4 = oContainer4.getComponentInstance();
			assert.ok(oComponent1 instanceof UIComponent, "UIComponent instance for first Component found!");
			assert.ok(oComponent2 instanceof UIComponent, "UIComponent instance for second Component found!");
			assert.ok(oComponent3 instanceof UIComponent, "UIComponent instance for third Component found!");
			assert.ok(oComponent4 instanceof UIComponent, "UIComponent instance for fourth Component found!");

			assert.equal(oComponent1.getId(), oContainer1.getId() + "-component1", "The id of the first Component is correct!");
			assert.equal(oComponent1.getMetadata().getName(), "sap.ui.test.v2empty.Component", "The name of the first Component is correct!");
			assert.equal(oComponent2.getId(), oContainer2.getId() + "-component2", "The id of the second Component is correct!");
			assert.equal(oComponent2.getMetadata().getName(), "sap.ui.test.v2empty.Component", "The name of the second Component is correct!");
			assert.equal(oComponent3.getId(), oContainer3.getId() + "-component3", "The id of the third Component is correct!");
			assert.equal(oComponent3.getMetadata().getName(), "sap.ui.test.v2empty.Component", "The name of the third Component is correct!");
			assert.equal(oComponent4.getId(), oContainer4.getId() + "-component4", "The id of the fourth Component is correct!");
			assert.equal(oComponent4.getMetadata().getName(), "sap.ui.test.v2empty.Component", "The name of the fourth Component is correct!");

			// Executing run again afterwards also shouldn't try to create the same containers again
			ComponentSupport.run();

			// Still, only four ComponentContainers should have been created
			sinon.assert.callCount(ComponentContainer.prototype.applySettings, 4);

		});

	});

});