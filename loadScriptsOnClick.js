(function(){ 
	var controllerMouse = "http://howard-stearns.github.io/models/scripts/handControllerPointer.js";
	var moveBox = "https://raw.githubusercontent.com/lucasholucasho/HiFi-scripts/master/movetextbox.js";
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
		Script.loadURL(controllerMouse, true);
		Script.loadURL(moveBox, true); 
    }; 	
})