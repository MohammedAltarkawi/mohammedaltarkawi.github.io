"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";

  /**
   * @namespace @namespace tvc.ui5.configurator
   */
  class GenericJSONModel extends JSONModel {
    constructor(data) {
      super();
      this._setData(data);
    }
    _setData(oData, bMerge) {
      this.setData(oData, bMerge);
      this._checkUpdate();
      this._observeFunctions();
    }
    getState() {
      return this.oData;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getContext(key) {
      //@ts-ignore
      return JSONModel.prototype.getContext.apply(this, arguments);
    }
    _observeFunctions() {
      //small trick: we are calling a check update after every single function (instead of after every single attribute change)
      //as we are 100% ensuring, that nobody is adjusting the values..
      const allData = this.oData;
      let bHooked = false;
      Object.getOwnPropertyNames(Object.getPrototypeOf(this.oData)).forEach(sAttr => {
        const sVal = allData[sAttr];
        if (typeof sVal === 'function') {
          const funcBefore = sVal;
          const funcCheckUpdate = this._checkUpdate.bind(this);
          allData[sAttr] = function () {
            let ret = null;
            const bFirstCall = bHooked === false;
            bHooked = true;
            try {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              ret = funcBefore.apply(this, args);
            } finally {
              bHooked = bFirstCall === true ? false : true;
            }
            if (bFirstCall === true) {
              funcCheckUpdate();
            }
            return ret;
          };
        }
      });
    }
    _checkUpdate() {
      this.checkUpdate(false, true);
    }
  }
  return GenericJSONModel;
});
//# sourceMappingURL=GenericStateModel-dbg.js.map
