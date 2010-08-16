/*
	Copyright: 	Appstuh 2010 All rights reserved
	License: 	AGPLv3
	Warranty:	None.
	Purpose:	To demonstrate usage of the Appstuh HTML5 Canvas Graphing Library
*/
var NavAssistant = Class.create({
	initialize: function() {},
	setup: function() {
		this.controller.setupWidget("navList", {
			itemTemplate: 'nav/navItem',
			listTemplate: 'nav/navList',
			reorderable: false,
			swipeToDelete: false
		}, this.list = {
			items: [
		        {
					friendlyName: "Area Graph",
					type: "area"
		        },
		        {
					friendlyName: "Line Graph",
					type: "line"
		        }
			]
		});
		this.handleNavTap = this.goToGraph.bindAsEventListener(this);
	},
	activate: function() {
		this.controller.listen("navList", Mojo.Event.listTap, this.handleNavTap);
	},
	deactivate: function() {
		this.controller.stopListening("navList", Mojo.Event.listTap, this.handleNavTap);
	},
	goToGraph: function(event) {
		Mojo.Controller.stageController.pushScene("graph", event.item.type);
	}
});