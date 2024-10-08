sap.ui.define([
  'samples/util/BaseController',
  'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
  return BaseController.extend('com.altarkawi.siprev.controller.Main', {
    onInit: function () {
      this.objectModel = new JSONModel({});
      this.viewState = new JSONModel({
        siRequired: false,
        siAcknowledged: false
      });
      this.viewState.attachPropertyChange(this.simulateSpecialInstruction, this);
      this.onMount();
    },

    simulateSpecialInstruction: function () {
      let specialInstruction;
      if (this.viewState.getProperty('/siAcknowledged')) {
        specialInstruction = {};
      } else {
        specialInstruction = null;
      }
      this.defaultModel.setProperty('/specialInstruction', specialInstruction);
    },

    onAcknowledgeSpecialInstructions: function () {
      this.viewState.setProperty('/siAcknowledged', true);
      this.simulateSpecialInstruction();
    },

    onMount: function () {
      this.defaultModel = this.objectModel;
      this.view.bindElement('/');
      this.view.setModel(this.viewState, 'viewState');
    },

    onUnmount: function () {
      this.defaultModel = new JSONModel({});
      this.view.bindElement('/');
      this.view.setModel(new JSONModel({}), 'viewState');
    }
  });
});
