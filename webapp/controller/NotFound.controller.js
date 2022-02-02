sap.ui.define([
		"MyFirstProject/MyFirstProject/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("MyFirstProject.MyFirstProject.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);