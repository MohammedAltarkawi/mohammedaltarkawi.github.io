"use strict";

sap.ui.define(["./BaseController", "sap/ui/core/Theming", "sap/ui/model/json/JSONModel", "../model/jobData", "sap/m/library"], function (__BaseController, Theming, JSONModel, ___model_jobData, sap_m_library) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  /* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  const BaseController = _interopRequireDefault(__BaseController);
  const aJobsData = ___model_jobData["aJobsData"];
  const URLHelper = sap_m_library["URLHelper"];
  /**
   * @namespace mst.github.controller
   */
  const Main = BaseController.extend("mst.github.controller.Main", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this._sLightTheme = "sap_horizon";
      this._sDarkTheme = "sap_horizon_dark";
      //@ts-expect-error
      this.webclient = window.sap.cai.webclient;
    },
    onInit: function _onInit() {
      const oModel = new JSONModel({
        jobs: aJobsData
      });
      this.getView().setModel(oModel, 'myJobs');
      this._oSwitch = this.getView().byId('themeSwitch');
      const sCurrentTheme = Theming.getTheme();
      if (sCurrentTheme === this._sDarkTheme) {
        this._oSwitch.setState(true);
      }
    },
    /**
     * @returns {void}
     */
    onCompanyName: function _onCompanyName(oEvent) {
      const oTimeLineItem = oEvent.getSource();
      const obj = oTimeLineItem.getBindingContext('myJobs').getObject();
      URLHelper.redirect(obj.link, true);
    },
    /**
     * @returns {void}
     */
    toggleTheme: function _toggleTheme() {
      const sState = this._oSwitch.getState();
      if (sState) {
        Theming.setTheme(this._sDarkTheme);
        this.webclient.setTheme(this._sDarkTheme);
      } else {
        Theming.setTheme(this._sLightTheme);
        this.webclient.setTheme(this._sLightTheme);
      }
    },
    /**
     * @returns {void}
     */
    handlePopoverPress: function _handlePopoverPress() {
      this.webclient.toggle();
    }
  });
  return Main;
});
//# sourceMappingURL=Main-dbg.controller.js.map
