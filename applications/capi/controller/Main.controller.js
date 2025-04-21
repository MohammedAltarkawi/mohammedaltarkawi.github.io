sap.ui.define(['./BaseController', 'sap/ui/core/Fragment', 'sap/ui/model/json/JSONModel', 'sap/ui/model/Filter', 'sap/ui/model/FilterOperator', '../model/MainControllerState', '../model/ModelLoader'], function (e, t, o, a, n, s, i) {
  'use strict';
  function l (e) { return e && e.__esModule && typeof e.default !== 'undefined' ? e.default : e; }
  const r = l(e); const c = s.MainStateController; const d = s.StateMainControllerModel;
  const u = i.ModelLoader; const p = r.extend('com.altarkawi.capi.controller.Main', {
    constructor: function e () {
      r.prototype.constructor.apply(this, arguments); this._oState = c;
    },
	 onInit: function e () {
      this.setModel(d, 'mainView');
      this._oTable = this.getView().byId('table'); u.getYear('2022').then((e) => {
        const t = e.getData().objectReleaseInfo; this._oState.setAPI(t);
      }).catch((e) => {
        console.error('Failed to load model:', e);
      });
    },
    handleDetailsPress: async function e (a) {
      const n = a.getSource(); const s = n.getBindingContext('mainView').getObject();
      const i = new o({ successors: s.successors });
      if (!this._pValueHelpDialog) {
        this._pValueHelpDialog = await t.load({ id: 'SelectBusinessPartner', name: 'com.altarkawi.capi.view.Popover', controller: this });
      } this._pValueHelpDialog.setModel(i, 'dialogView'); this.getView().addDependent(this._pValueHelpDialog); this._pValueHelpDialog.openBy(n);
    },
    formatAvailableToObjectState: function e (t) {
      let o; switch (t) {
        case 'released': o = 'Success'; break;
        case 'notToBeReleased': o = 'Error'; break;
        case 'notToBeReleasedStable': o = 'Warning'; break;
        case 'deprecated': o = 'Error'; break;
      } return o;
    },
    onChangeVersion: function e (t) {
      const o = t.getSource();
      const a = o.getSelectedKey(); u.getYear(a).then((e) => {
        const t = e.getData().objectReleaseInfo; this._oState.setAPI(t);
      }).catch((e) => { console.error('Failed to load model:', e); });
    },
    onSearch: function e (t) {
      const o = t.getSource();
      const s = o.getValue();
      const i = [];
      const l = [new a('tadirObject', n.Contains, s), new a('tadirObjName', n.Contains, s)];
      const r = new a({ filters: l, and: false }); i.push(r); const c = this._oTable.getBinding(); c.filter(i);
    }
  }); return p;
});
