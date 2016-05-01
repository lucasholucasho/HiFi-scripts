var screenSize = Controller.getViewportDimensions();
var BUTTON_SIZE = 100;
var PADDING = 3;
var rotation = 0;

//a helper library for creating toolbars
Script.include("http://hifi-production.s3.amazonaws.com/tutorials/dice/toolBars.js");

var toolBar = new ToolBar(0, 0, ToolBar.HORIZONTAL, "highfidelity.dice.toolbar", function(screenSize) {
  return {
    x: (screenSize.x / 2 - BUTTON_SIZE * 2 + PADDING),
    y: (screenSize.y - (BUTTON_SIZE + PADDING))
  };
});

var stopButton = toolBar.addOverlay("image", {
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  imageURL: "http://hifi-production.s3.amazonaws.com/tutorials/dice/close.png",
  color: {
    red: 255,
    green: 255,
    blue: 255
  },
  alpha: 1
});

var leftButton = toolBar.addOverlay("image", {
  x: screenSize.x / 2 - BUTTON_SIZE,
  y: screenSize.y - (BUTTON_SIZE + PADDING),
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  imageURL: "http://hifi-production.s3.amazonaws.com/tutorials/dice/delete.png",
  color: {
    red: 255,
    green: 255,
    blue: 255
  },
  alpha: 1
});

var rightButton = toolBar.addOverlay("image", {
  x: screenSize.x / 2 - BUTTON_SIZE,
  y: screenSize.y - (BUTTON_SIZE + PADDING),
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  imageURL: "http://hifi-production.s3.amazonaws.com/tutorials/dice/delete.png",
  color: {
    red: 255,
    green: 255,
    blue: 255
  },
  alpha: 1
});

var rotateButton = toolBar.addOverlay("image", {
  x: screenSize.x / 2 - BUTTON_SIZE,
  y: screenSize.y - (BUTTON_SIZE + PADDING),
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  imageURL: "http://hifi-production.s3.amazonaws.com/tutorials/dice/delete.png",
  color: {
    red: 255,
    green: 255,
    blue: 255
  },
  alpha: 1
});



function move(distance){
  var textId = "{77bdc7a0-f78c-4fd3-bbde-2e6b93d509d7}"
  var textProperties = Entities.getEntityProperties(textId);
  var xPosition = JSON.stringify(textProperties.position.x);
  var yPosition = JSON.stringify(textProperties.position.y);
  var zPosition = JSON.stringify(textProperties.position.z);
  var newXPosition = parseInt(xPosition) + distance;
  var newProperties = {
    position: {
      x: newXPosition,
      y: yPosition,
      z: zPosition
    }
  };
  Entities.editEntity(textId, newProperties);
}

function rotate() {
	rotation += 90.0;
	var textId = "{77bdc7a0-f78c-4fd3-bbde-2e6b93d509d7}"
	var textProperties = Entities.getEntityProperties(textId);
	var newProperties = {
    		rotation: Quat.fromPitchYawRollDegrees(0.0, 0.0, rotation)
	};
	Entities.editEntity(textId, newProperties);
}


function mousePressEvent(event) {
  var clickedText = false;
  var clickedOverlay = Overlays.getOverlayAtPoint({
      x: event.x,
      y: event.y
    });
  if (clickedOverlay == stopButton) {
    Script.stop();
  } else if (clickedOverlay == leftButton) {
	move(-1);
  } else if (clickedOverlay == rightButton) {
	move(1);
  } else if (clickedOverlay == rotateButton) {
	rotate();
  }
}

function scriptEnding() {
  toolBar.cleanup();
}

Controller.mousePressEvent.connect(mousePressEvent);
Script.scriptEnding.connect(scriptEnding);