sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("kpmg.home.exercise4.controller.View1", {
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				singerPath: window.encodeURIComponent(oItem.getBindingContext("singersModel").getPath().substr(1))
			});
		}
	});
});