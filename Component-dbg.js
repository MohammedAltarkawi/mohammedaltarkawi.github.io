"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "./model/models", "sap/ui/Device", "./model/utils/ResourceBundle"], function (UIComponent, __models, Device, ___model_utils_ResourceBundle) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const models = _interopRequireDefault(__models);
  const ResourceBundlerAccessor = ___model_utils_ResourceBundle["ResourceBundlerAccessor"];
  /**
   * @namespace mst.github
   */
  const Component = UIComponent.extend("mst.github.Component", {
    metadata: {
      manifest: "json"
    },
    init: function _init() {
      ResourceBundlerAccessor.init(this.getResourceBundle());
      // call the base component's init function
      UIComponent.prototype.init.call(this);

      // create the device model
      this.setModel(models.createDeviceModel(), "device");

      // create the views based on the url/hash
      this.getRouter().initialize();
    },
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @returns css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass: function _getContentDensityClass() {
      if (this.contentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
          this.contentDensityClass = "";
        } else if (!Device.support.touch) {
          // apply "compact" mode if touch is not supported
          this.contentDensityClass = "sapUiSizeCompact";
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this.contentDensityClass = "sapUiSizeCozy";
        }
      }
      return this.contentDensityClass;
    },
    getResourceBundle: function _getResourceBundle() {
      const resourceModel = this.getModel('i18n');
      return resourceModel.getResourceBundle();
    }
  });
  return Component;
});
//# sourceMappingURL=Component-dbg.js.map
