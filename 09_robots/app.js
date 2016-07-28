var challenge = require('./robots');

function robotRunner(challenge) {
  var direction;
  while (!robotOne.onMarker() && !robotTwo.onMarker())
  direction = "left";
  robotOne.moveOne(direction);
  
}
