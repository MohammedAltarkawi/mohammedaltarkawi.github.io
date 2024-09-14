sap.ui.define([
  'sap/ui/base/Object'
], function (UI5Object) {
  return UI5Object.extend('com.altarkawi.intrfc.interface.ISerializable', {
    write: function (data) {},
    constructor: function () {
      throw new Error('Abstract class');
    }
  });
});
