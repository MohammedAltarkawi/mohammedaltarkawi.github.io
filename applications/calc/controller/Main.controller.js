sap.ui.define(["samples/util/BaseController"], function (BaseController) {
  return BaseController.extend("com.altarkawi.calc.controller.Main", {
    onInit: function () {
      this._oCurrentDate = new Date();
      this._oDatePicker = this.byId("DP");
      this._oInputNumber = this.byId("inputNr");
      this._oInputPercent = this.byId("inputPr");
      this._oTextDaily = this.byId("daily");
      this._oTextMonthly = this.byId("monthly");
      this._oTextResult = this.byId("result");
    },

    onCalculate: function () {
      const sNum = parseFloat(this._oInputNumber.getValue());

      // Jahreszins
      const annualRate = parseFloat(this._oInputPercent.getValue()) / 100;

      // Effektiver Tages- und Monatszins
      const dailyRate = Math.pow(1 + annualRate, 1 / 365) - 1;
      const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;

      // --- 1 Tag ---
      let interestOneDay = sNum * dailyRate;

      // --- 1 Monat ---
      let interestOneMonth = sNum * monthlyRate;

      // Ausgabe
      this._oTextDaily.setText(interestOneDay.toFixed(2) + " €");
      this._oTextMonthly.setText(interestOneMonth.toFixed(2) + " €");

      // --- Endbetrag (seit Startdatum, tägliche Verzinsung) ---
      // Anzahl Tage seit Start (für Result)
      // Heutiges Datum
      const startDate = this._oDatePicker.getDateValue();
      if (startDate) {
        const today = new Date();
        const diffTime = today.getTime() - startDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        let endAmountDaily = sNum * Math.pow(1 + dailyRate, diffDays);
        this._oTextResult.setText(endAmountDaily.toFixed(2) + " €");
      }
    }
  });
});