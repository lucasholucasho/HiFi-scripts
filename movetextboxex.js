var screenSize = Controller.getViewportDimensions();
var BUTTON_SIZE = 32;
var PADDING = 3;
var xyrotation = 0;
var yzrotation = 0;
var xzrotation = 0;
var textId = "{25dc5148-1091-472a-90e8-3c76f0c7809e}";


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

var xyrotateButton = toolBar.addOverlay("image", {
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

var yzrotateButton = toolBar.addOverlay("image", {
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

var xzrotateButton = toolBar.addOverlay("image", {
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

function rotate(axis) {

  switch (axis){
    case "xyplane":
      xyrotation += 90.0;
      break;
    case "yzplane":
      yzrotation += 90.0;
      break;
    case "xzplane":
      xzrotation += 90.0;
      break;

  }

  var textProperties = Entities.getEntityProperties(textId);
  var newProperties = {
        rotation: Quat.fromPitchYawRollDegrees(yzrotation, xzrotation, xyrotation)
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
  } else if (clickedOverlay == xyrotateButton) {
  rotate("xyplane");
  }
  else if (clickedOverlay == xzrotateButton) {
  rotate("xzplane");
  }
  else if (clickedOverlay == yzrotateButton) {
  rotate("yzplane");
  }
}

function scriptEnding() {
  toolBar.cleanup();
}

Controller.mousePressEvent.connect(mousePressEvent);
Script.scriptEnding.connect(scriptEnding);