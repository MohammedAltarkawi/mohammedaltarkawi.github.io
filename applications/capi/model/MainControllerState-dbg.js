"use strict";

sap.ui.define(["./GenericStateModel"], function (__GenericJSONModel) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const GenericJSONModel = _interopRequireDefault(__GenericJSONModel);
  class MainControllerStateDef {
    busy = false;
    APIs = [];
    versions = [{
      year: "2022"
    }, {
      year: "2023"
    }];

    /**
     * setAPI
    API: API[] = []     */
    setAPI() {
      let APIs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.APIs = APIs;
    }
  }
  const StateMainControllerModel = new GenericJSONModel(new MainControllerStateDef());
  const MainStateController = StateMainControllerModel.getState();
  var __exports = {
    __esModule: true
  };
  __exports.StateMainControllerModel = StateMainControllerModel;
  __exports.MainStateController = MainStateController;
  return __exports;
});
//# sourceMappingURL=MainControllerState-dbg.js.map
