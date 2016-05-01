(function(){ 
	var skyboxId = "{7626c954-6ade-41b4-a1be-411cfdf1241c}";
	var skyboxProperties = Entities.getEntityProperties(skyboxId);
    var xPosition = JSON.stringify(sProperties);
    var clicked = false;
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        if (clicked){
            Entities.editEntity(entityID, { color: { red: 0, green: 255, blue: 255} });
            clicked = false;
        }else{
            Entities.editEntity(entityID, { color: { red: 255, green: 255, blue: 0} });
            clicked = true; 
        }
    }; 
})