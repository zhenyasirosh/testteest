/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"MyFirstProject/MyFirstProject/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"MyFirstProject/MyFirstProject/test/integration/pages/Worklist",
	"MyFirstProject/MyFirstProject/test/integration/pages/Object",
	"MyFirstProject/MyFirstProject/test/integration/pages/NotFound",
	"MyFirstProject/MyFirstProject/test/integration/pages/Browser",
	"MyFirstProject/MyFirstProject/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "MyFirstProject.MyFirstProject.view."
	});

	sap.ui.require([
		"MyFirstProject/MyFirstProject/test/integration/WorklistJourney",
		"MyFirstProject/MyFirstProject/test/integration/ObjectJourney",
		"MyFirstProject/MyFirstProject/test/integration/NavigationJourney",
		"MyFirstProject/MyFirstProject/test/integration/NotFoundJourney",
		"MyFirstProject/MyFirstProject/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});