"use strict";

sap.ui.define(["./utils/ResourceBundle", "sap/ui/core/format/DateFormat"], function (___utils_ResourceBundle, DateFormat) {
  "use strict";

  const ResourceBundlerAccessor = ___utils_ResourceBundle["ResourceBundlerAccessor"];
  const fromHauni = new Date(2019, 0);
  const toHauni = new Date(2019, 6);
  const fromImplico = new Date(2019, 7);
  const toImplico = new Date(2022, 5);
  const fromMSGGroup = new Date(2022, 6);
  const getFormattedDate = date => {
    const dateFormat = DateFormat.getDateInstance({
      pattern: "MMM yyyy"
    });
    return dateFormat.format(date);
  };
  const aJobsData = [{
    title: ResourceBundlerAccessor.getText('msgGroup'),
    text: ResourceBundlerAccessor.getText('msgGroupText', [getFormattedDate(fromMSGGroup)]),
    role: ResourceBundlerAccessor.getText('msgGroupRole'),
    icon: 'sap-icon://building',
    link: 'https://www.msg.group/'
  }, {
    title: ResourceBundlerAccessor.getText('implico'),
    text: ResourceBundlerAccessor.getText('implicoText', [getFormattedDate(fromImplico), getFormattedDate(toImplico)]),
    role: ResourceBundlerAccessor.getText('implicoRole'),
    icon: 'sap-icon://education',
    link: 'https://www.implico.com/'
  }, {
    title: ResourceBundlerAccessor.getText('hauni'),
    text: ResourceBundlerAccessor.getText('hauniText', [getFormattedDate(fromHauni), getFormattedDate(toHauni)]),
    role: ResourceBundlerAccessor.getText('hauniRole'),
    icon: 'sap-icon://education',
    link: 'https://www.koerber-technologies.com/'
  }];
  var __exports = {
    __esModule: true
  };
  __exports.aJobsData = aJobsData;
  return __exports;
});
//# sourceMappingURL=jobData-dbg.js.map
