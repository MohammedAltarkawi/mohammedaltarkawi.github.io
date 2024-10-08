sap.ui.define([
  'sap/ui/core/UIComponent',
  'samples/applications/singlt/Singleton'
], function (UIComponent, Singleton) {
  return UIComponent.extend('com.altarkawi.singlt.Component', {
    metadata: {
      manifest: 'json'
    },

    exit: function () {
      Singleton.destroy();
    }
  });
});
