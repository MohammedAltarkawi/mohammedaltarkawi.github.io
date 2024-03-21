sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v4/business-one", "./v5/business-one"], function (_exports, _Theme, _businessOne, _businessOne2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _businessOne.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _businessOne.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isLegacyThemeFamily)() ? _businessOne.pathData : _businessOne2.pathData;
  _exports.pathData = pathData;
  var _default = "business-one";
  _exports.default = _default;
});