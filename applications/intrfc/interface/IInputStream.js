sap.ui.define([
  'sap/ui/base/Object'
], function (UI5Object) {
  return UI5Object.extend('com.altarkawi.intrfc.interface.IInputStream', {
    read: function () {},
    constructor: function () {
      throw new Error('Abstract class');
    }
  });
});
