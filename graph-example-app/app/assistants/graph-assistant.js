/*
	Copyright: 	Appstuh 2010 All rights reserved
	License: 	AGPLv3
	Warranty:	None.
	Purpose:	To demonstrate usage of the Appstuh HTML5 Canvas Graphing Library
*/

// Create the GraphAssistant class
var GraphAssistant = Class.create({
	initialize: function(graphType) {
		this.type = graphType;
	},
	setup: function() {
		// set orientation to left
		Mojo.Controller.stageController.setWindowOrientation("left");
		
		// Code below makes this work on ALL screen resolutions, Pre, Pixi, and any future devices. Because of the nature of the library, this graph library will work on any resolution. It can scale wonderfully
		this.controller.get("canvas").width = Mojo.Environment.DeviceInfo.screenHeight;
		this.controller.get("canvas").height = Mojo.Environment.DeviceInfo.screenWidth;
		// Code above makes this work on ALL screen resolutions, Pre, Pixi, and any future devices. Because of the nature of the library, this graph library will work on any resolution. It can scale wonderfully
		
		// graph options
		graphOpt = {
			lineWidth: 3,
			lOffset: 30, // how far to place graph from the left--so we can show a y-axis
			bOffset: 30, // how far to place graph from bottom--so we can show an x-axis label of months
			fillStyle: ['rgba(54, 65, 200, .4)', 'rgba(54, 200, 65, .4)', 'rgba(200, 54, 65, .4)', 'rgba(200, 200, 200, .4)'],
			strokeStyle: ['rgba(54, 65, 200, .8)', 'rgba(54, 200, 65, .8)', 'rgba(200, 54, 65, .8)', 'rgba(200, 200, 200, .8)'],
			data: [this.getRandomData(), this.getRandomData(), this.getRandomData(), this.getRandomData()],
			numData: 4,
			xLabel: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
			yLabel: "values",
			legend: true, // display legend -- optional, defaults to false
			legendLabel: ["Expense 1", "Expense 2", "Expense 3", "Expense 4"] // labels for the legend
		};
		expenses = new graph(this.controller.get("canvas")); // initiliaze the graph class with the canvas object
		switch(this.type) {
			case 'line': // are we drawing a line graph?
				expenses.drawLine(graphOpt);
				break;
			case 'area': // or an area graph
				expenses.drawArea(graphOpt);
				break;
			default:
				Mojo.Controller.errorDialog("Sorry, we do not support that type of graph.. How did you get here?");
				break;
		}
	},
	deactivate: function() {
		Mojo.Controller.stageController.setWindowOrientation("free"); // set it free
	},
	getRandomData: function() { // make a random data set from 6 numbers...
		data = [];
		for (i = 0; i < 6; i++) {
			d = Math.floor(Math.random() * 6);
			data[i] = d * (5 / ((i === 0 || i < 5) ? 1 : i / 3)); // as with expenses, it will fluctuate, hopefully mostly downward
			if (data[i] === 0) data[i] = Math.random() * i; // make sure the expenses are never nothing... kind of awkward..
		}
		return data;
	}
});