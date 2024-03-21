"use strict";

sap.ui.define([], function () {
  "use strict";

  /**
   * @namespace tvc.ui5.configurator.model.utils
   */
  class ResourceBundlerAccessorDef {
    init(bndl) {
      this._bndl = bndl;
    }
    getText(text, parameter) {
      return this._bndl.getText(text, parameter);
    }
  }
  const ResourceBundlerAccessor = new ResourceBundlerAccessorDef();
  var __exports = {
    __esModule: true
  };
  __exports.ResourceBundlerAccessor = ResourceBundlerAccessor;
  return __exports;
});
//# sourceMappingURL=ResourceBundle-dbg.js.map
