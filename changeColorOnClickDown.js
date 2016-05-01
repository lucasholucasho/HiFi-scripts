(function(){ 
	var skyboxId = "{7626c954-6ade-41b4-a1be-411cfdf1241c}";
	var skyboxProperties = Entities.getEntityProperties(skyboxId);
    var xPosition = JSON.stringify(skyboxProperties);

    var clicked = false;
    this.clickDownOnEntity = function(entityID, mouseEvent) { 
        if (clicked){
            Entities.editEntity(skyboxId, { skybox: { color: { red: 255, green: 255, blue: 255}, url: "http://schmedia.com/wp-content/uploads/2015/04/SKYPAX-_0008_NoCal-Coast-Sunset.jpg"} });
            clicked = false;
        }else{
			Entities.editEntity(skyboxId, { skybox: { color: { red: 255, green: 255, blue: 255}, url: "https://raw.githubusercontent.com/lucasholucasho/HiFi-scripts/master/Cubemap_Test_01.jpg"} });            clicked = true; 
        }
    }; 
})