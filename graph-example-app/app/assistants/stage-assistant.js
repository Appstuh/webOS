/*
	Copyright: 	Appstuh 2010 All rights reserved
	License: 	AGPLv3
	Warranty:	None.
	Purpose:	To demonstrate usage of the Appstuh HTML5 Canvas Graphing Library
*/
function StageAssistant() {
	/* this is the creator function for your stage assistant object */
}

StageAssistant.prototype.setup = function() {
	this.controller.setWindowOrientation("free");
	this.controller.pushScene("nav");
};
