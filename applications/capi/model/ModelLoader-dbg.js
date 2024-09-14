"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel", "./Enums"], function (JSONModel, ___Enums) {
  "use strict";

  const LINKS = ___Enums["LINKS"];
  class ModelLoader {
    static getYear(year) {
      return new Promise(resolve => {
        let sVersion;
        switch (year) {
          case "2022":
            sVersion = LINKS.V2022;
            break;
          case "2023":
            sVersion = LINKS.V2023;
            break;
        }
        const oModel = new JSONModel(sVersion);

        // Attach event to know when data is loaded
        oModel.attachRequestCompleted(() => {
          resolve(oModel);
        });
      });
    }
  }
  var __exports = {
    __esModule: true
  };
  __exports.ModelLoader = ModelLoader;
  return __exports;
});
//# sourceMappingURL=ModelLoader-dbg.js.map
