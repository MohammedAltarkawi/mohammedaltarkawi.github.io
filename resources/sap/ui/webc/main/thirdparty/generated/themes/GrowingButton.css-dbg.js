sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", async () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/GrowingButton.css",
    content: "[growing-button]{align-items:center;border-bottom:var(--_ui5-v1-18-0_load_more_border-bottom);border-top:1px solid var(--sapList_BorderColor);box-sizing:border-box;cursor:pointer;display:flex;outline:none;padding:var(--_ui5-v1-18-0_load_more_padding)}[growing-button-inner]{align-items:center;background-color:var(--sapList_Background);border:var(--_ui5-v1-18-0_load_more_border);border-radius:var(--_ui5-v1-18-0_load_more_border_radius);box-sizing:border-box;color:var(--sapButton_TextColor);display:flex;flex-direction:column;justify-content:center;min-height:var(--_ui5-v1-18-0_load_more_text_height);width:100%}[growing-button-inner]:focus{border-color:transparent;outline:var(--_ui5-v1-18-0_load_more_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:-.125rem}[growing-button-inner]:hover{background-color:var(--sapList_Hover_Background)}[growing-button-inner]:active,[growing-button-inner][active]{background-color:var(--sapList_Active_Background);border-color:var(--sapList_Active_Background)}[growing-button-inner]:active>*,[growing-button-inner][active]>*{color:var(--sapList_Active_TextColor)}[growing-button-subtext],[growing-button-text]{box-sizing:border-box;font-family:\"72override\",var(--sapFontFamily);overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:100%}[growing-button-text]{font-size:var(--_ui5-v1-18-0_load_more_text_font_size);font-weight:700;height:var(--_ui5-v1-18-0_load_more_text_height);padding:.875rem 1rem 0 1rem}[growing-button-subtext]{font-size:var(--sapFontSize);padding:var(--_ui5-v1-18-0_load_more_desc_padding)}"
  };
  var _default = styleData;
  _exports.default = _default;
});