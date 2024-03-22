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
    fileName: "themes/TabInStrip.css",
    content: ".ui5-tab-semantic-icon{display:var(--_ui5-v1-18-0_tc_headerItemSemanticIcon_display);height:var(--_ui5-v1-18-0_tc_headerItemSemanticIcon_size);margin-inline-end:.5rem;width:var(--_ui5-v1-18-0_tc_headerItemSemanticIcon_size)}.ui5-tab-semantic-icon--positive{color:var(--sapPositiveElementColor)}.ui5-tab-semantic-icon--negative{color:var(--sapNegativeElementColor)}.ui5-tab-semantic-icon--critical{color:var(--sapCriticalElementColor)}.ui5-tab-strip-item{align-items:center;box-sizing:border-box;color:var(--_ui5-v1-18-0_tc_headerItem_color);cursor:pointer;display:flex;flex-shrink:0;font-size:var(--sapFontSmallSize);font-weight:var(--_ui5-v1-18-0_tc_headeritem_text_font_weight);height:var(--_ui5-v1-18-0_tc_header_height);justify-content:center;max-width:100%;min-width:2rem;padding:0 var(--_ui5-v1-18-0_tc_headeritem_padding);position:relative;text-shadow:var(--sapContent_TextShadow)}.ui5-tab-strip-itemText{overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap}.ui5-tab-strip-design-description,.ui5-tab-strip-item--textOnly[hidden],.ui5-tab-strip-item.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--inline[hidden],.ui5-tab-strip-item[hidden],.ui5-tc__separator[hidden]{display:none}.ui5-tab-strip-itemContent{border:var(--_ui5-v1-18-0_tc_headerItemContent_default_focus_border);border-radius:var(--_ui5-v1-18-0_tc_headerItemContent_focus_border_radius);display:flex;flex-direction:column;height:100%;justify-content:center;min-width:0;transition:var(--_ui5-v1-18-0_tc_headerItem_transition)}.ui5-tab-expand-button{background-color:var(--_ui5-v1-18-0_tc_header_background);display:flex;flex-direction:column;justify-content:center;padding-inline-end:.188rem;position:relative;z-index:1}.ui5-tab-expand-button>[ui5-button]{--_ui5-v1-18-0_button_border_radius:var(--_ui5-v1-18-0_tc_headerItem_expand_button_border_radius);--_ui5-v1-18-0_button_focused_border_radius:var(--_ui5-v1-18-0_tc_headerItem_expand_button_border_radius);height:1.5rem;margin-inline-start:var(--_ui5-v1-18-0_tc_headerItem_expand_button_margin_inline_start);min-width:1.5rem}.ui5-tab-expand-button>[ui5-button]:not([active]){color:var(--_ui5-v1-18-0_tc_headerItem_color)}.ui5-tab-strip-item--selected .ui5-tab-expand-button>[ui5-button]:not([active]){color:var(--_ui5-v1-18-0_tc_headerItem_text_selected_color)}.ui5-tab-expand-button>[ui5-button]:hover:not([active]){color:var(--_ui5-v1-18-0_tc_headerItem_text_selected_hover_color)}.ui5-tab-expand-button-separator{background:var(--sapTextColor);display:var(--_ui5-v1-18-0_tc_headerItem_expand_button_separator_display);height:1rem;margin-inline-start:.0625rem;position:relative;right:-.0625rem;width:.0625rem;z-index:2}.ui5-tab-expand-button:hover{z-index:2}.ui5-tab-strip-item--selected .ui5-tab-expand-button-separator{background:var(--_ui5-v1-18-0_tc_headerItem_text_selected_color)}.ui5-tab-single-click-icon{margin-inline-start:var(--_ui5-v1-18-0_tc_headerItem_single_click_expand_button_margin_inline_start)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly{color:var(--_ui5-v1-18-0_tc_headerItem_text_selected_color)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon>[ui5-icon]{color:var(--_ui5-v1-18-0_tc_headerItem_text_selected_color)}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText{align-items:center;display:flex}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon{display:flex}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon>[ui5-icon]{color:var(--_ui5-v1-18-0_tc_headerItem_color)}.ui5-tab-strip-item--singleClickArea:not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--disabled):hover .ui5-tab-single-click-icon>[ui5-icon],.ui5-tab-strip-item--textOnly:not(.ui5-tab-strip-item--twoClickArea):not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--negative):hover,.ui5-tab-strip-item--twoClickArea:not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--negative) .ui5-tab-strip-itemContent:hover{color:var(--_ui5-v1-18-0_tc_headerItem_text_hover_color)}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer:after,.ui5-tab-strip-item--selected.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemContent:after{background-color:var(--_ui5-v1-18-0_tc_headerItemContent_border_bg);border-bottom:var(--_ui5-v1-18-0_tc_headerItemContent_border_bottom);border-radius:var(--_ui5-v1-18-0_tc_headerItemContent_border_radius);bottom:0;content:\"\";height:var(--_ui5-v1-18-0_tc_headerItemContent_border_height);left:0;position:absolute;right:0}.ui5-tab-strip-item--selected.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemContent:after{left:var(--_ui5-v1-18-0_tc_headeritem_padding);right:var(--_ui5-v1-18-0_tc_headeritem_padding)}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer:after{bottom:-.9375rem}.ui5-tab-strip-item--disabled{cursor:default;opacity:var(--sapContent_DisabledOpacity)}.ui5-tab-strip-item{outline:none}.ui5-tab-strip-item--inline.ui5-tab-strip-item--textOnly:focus .ui5-tab-strip-itemText:before,.ui5-tab-strip-item--textOnly:focus .ui5-tab-strip-itemText:before{border:var(--_ui5-v1-18-0_tc_headerItem_focus_border);border-radius:var(--_ui5-v1-18-0_tc_headerItem_focus_border_radius);bottom:var(--_ui5-v1-18-0_tc_headerItem_text_focus_border_offset_bottom);content:\"\";left:var(--_ui5-v1-18-0_tc_headerItem_text_focus_border_offset_left);pointer-events:none;position:absolute;right:var(--_ui5-v1-18-0_tc_headerItem_text_focus_border_offset_right);top:var(--_ui5-v1-18-0_tc_headerItem_text_focus_border_offset_top)}.ui5-tab-strip-item--mixedMode:focus .ui5-tab-strip-itemContent:before{border:var(--_ui5-v1-18-0_tc_headerItem_focus_border);border-radius:var(--_ui5-v1-18-0_tc_headerItem_focus_border_radius);bottom:var(--_ui5-v1-18-0_tc_headerItem_mixed_mode_focus_border_offset_bottom);content:\"\";left:var(--_ui5-v1-18-0_tc_headerItem_mixed_mode_focus_border_offset_left);pointer-events:none;position:absolute;right:var(--_ui5-v1-18-0_tc_headerItem_mixed_mode_focus_border_offset_right);top:var(--_ui5-v1-18-0_tc_headerItem_mixed_mode_focus_border_offset_top)}.ui5-tab-strip-item--withIcon:focus .ui5-tab-strip-item-icon-outer:before{border:var(--_ui5-v1-18-0_tc_headerItem_focus_border);border-radius:var(--_ui5-v1-18-0_tc_headerItemIcon_focus_border_radius);bottom:var(--_ui5-v1-18-0_tc_headerItem_focus_border_offset);content:\"\";left:var(--_ui5-v1-18-0_tc_headerItem_focus_border_offset);pointer-events:none;position:absolute;right:var(--_ui5-v1-18-0_tc_headerItem_focus_border_offset);top:var(--_ui5-v1-18-0_tc_headerItem_focus_border_offset)}.ui5-tab-strip-item-icon-outer{align-items:center;background-color:var(--_ui5-v1-18-0_tc_headerItemIcon_background_color);border:var(--_ui5-v1-18-0_tc_headerItemIcon_border);border-radius:50%;display:flex;height:var(--_ui5-v1-18-0_tc_item_icon_circle_size);justify-content:center;margin-inline-end:.25rem;pointer-events:none;position:relative;width:var(--_ui5-v1-18-0_tc_item_icon_circle_size)}.ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItemIcon_color);height:var(--_ui5-v1-18-0_tc_item_icon_size);pointer-events:none;text-shadow:var(--sapContent_TextShadow);width:var(--_ui5-v1-18-0_tc_item_icon_size)}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v1-18-0_tc_headerItemIcon_selected_background)}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItemIcon_selected_color);text-shadow:none}.ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{display:flex}.ui5-tab-strip-itemAdditionalText-hidden{margin-top:1.25rem;visibility:hidden}.ui5-tab-strip-item--inline .ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{display:inline}.ui5-tab-strip-item--withIcon .ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{margin-block-start:var(--_ui5-v1-18-0_tc_item_add_text_margin_top)}.ui5-tab-strip-item--textOnly,.ui5-tab-strip-item.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--inline{align-items:center;display:flex;font-size:var(--sapFontSize);height:var(--_ui5-v1-18-0_tc_item_text_only_height);line-height:var(--_ui5-v1-18-0_tc_item_text_line_height)}.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{padding:0 .188rem}.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--withAdditionalText{height:var(--_ui5-v1-18-0_tc_item_text_only_with_additional_text_height);justify-content:flex-start}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText,.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemText{display:inline-block;vertical-align:middle}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent{align-items:center;flex-direction:row}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText{font-size:1.5rem;margin-inline-end:.5rem}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemText{color:var(--_ui5-v1-18-0_tc_mixedMode_itemText_color);font-family:var(--_ui5-v1-18-0_tc_mixedMode_itemText_font_family);font-size:var(--_ui5-v1-18-0_tc_mixedMode_itemText_font_size);font-weight:var(--_ui5-v1-18-0_tc_mixedMode_itemText_font_weight)}.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon-outer,.ui5-tab-strip-item--positive.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{border-color:var(--_ui5-v1-18-0_tc_headerItem_positive_selected_border_color);color:var(--_ui5-v1-18-0_tc_headerItem_positive_color)}.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItem_positive_color)}.ui5-tab-strip-item--positive.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v1-18-0_tc_headerItemIcon_positive_selected_background);color:var(--_ui5-v1-18-0_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item--positive.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon-outer:after,.ui5-tab-strip-item.ui5-tab-strip-item--neutral .ui5-tab-strip-itemContent:after{background-color:var(--_ui5-v1-18-0_tc_headerItem_neutral_border_bg);border-color:var(--_ui5-v1-18-0_tc_headerItem_neutral_border_color)}.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon-outer:after,.ui5-tab-strip-item.ui5-tab-strip-item--positive .ui5-tab-strip-itemContent:after{background-color:var(--_ui5-v1-18-0_tc_headerItem_positive_border_bg);border-color:var(--_ui5-v1-18-0_tc_headerItem_positive_border_color)}.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon-outer,.ui5-tab-strip-item--negative.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{border-color:var(--_ui5-v1-18-0_tc_headerItem_negative_selected_border_color);color:var(--_ui5-v1-18-0_tc_headerItem_negative_color)}.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItem_negative_color)}.ui5-tab-strip-item--negative.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v1-18-0_tc_headerItemIcon_negative_selected_background)}.ui5-tab-strip-item--negative.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon-outer:after,.ui5-tab-strip-item.ui5-tab-strip-item--negative .ui5-tab-strip-itemContent:after{background-color:var(--_ui5-v1-18-0_tc_headerItem_negative_border_bg);border-color:var(--_ui5-v1-18-0_tc_headerItem_negative_border_color)}.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon-outer,.ui5-tab-strip-item--critical.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{border-color:var(--_ui5-v1-18-0_tc_headerItem_critical_selected_border_color);color:var(--_ui5-v1-18-0_tc_headerItem_critical_color)}.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItem_critical_color)}.ui5-tab-strip-item--critical.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v1-18-0_tc_headerItemIcon_critical_selected_background)}.ui5-tab-strip-item--critical.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon-outer:after,.ui5-tab-strip-item.ui5-tab-strip-item--critical .ui5-tab-strip-itemContent:after{background-color:var(--_ui5-v1-18-0_tc_headerItem_critical_border_bg);border-color:var(--_ui5-v1-18-0_tc_headerItem_critical_border_color)}.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon-outer,.ui5-tab-strip-item--neutral.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{border-color:var(--_ui5-v1-18-0_tc_headerItem_neutral_selected_border_color);color:var(--_ui5-v1-18-0_tc_headerItem_neutral_color)}.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItem_neutral_color)}.ui5-tab-strip-item--neutral.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--_ui5-v1-18-0_tc_headerItemIcon_neutral_selected_background)}.ui5-tab-strip-item--neutral.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--_ui5-v1-18-0_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon:after,.ui5-tab-strip-item.ui5-tab-strip-item--neutral .ui5-tab-strip-itemContent:after{background-color:var(--_ui5-v1-18-0_tc_headerItem_neutral_border_bg);border-color:var(--_ui5-v1-18-0_tc_headerItem_neutral_border_color)}.ui5-tab-strip-item--withIcon .ui5-tab-strip-itemContent .ui5-tab-strip-itemAdditionalText{padding:0}.ui5-tab-strip-item .ui5-tab-strip-itemAdditionalText{color:var(--_ui5-v1-18-0_tc_headerItem_additional_text_color);font-weight:var(--_ui5-v1-18-0_tc_headerItem_additional_text_font_weight);padding:0 .188rem}"
  };
  var _default = styleData;
  _exports.default = _default;
});