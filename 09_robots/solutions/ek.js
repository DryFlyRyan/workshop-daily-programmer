//Created by Elana Kopelevich

var challenge = require('../robots');

function collisionCheck(challenge){
  var moves = 0;
  var r1 = challenge.robotOne;
  var r2 = challenge.robotTwo;

  // initial check
  console.log(challenge);

  while (!challenge.checkCollision()) {
    if (!r1.onMarker() || !r2.onMarker()) {
      if (r1.onMarker()){
        r2.moveOne('left');
        moves++;
      } else if (r2.onMarker()){
        r1.moveOne('left');
        moves++;
      } else {
        r1.moveOne('right');
        moves++;
        r2.moveOne('right');
        moves++;
      }
    }
  }

  // final check
  console.log(challenge);

  // total move count
  console.log('The robots collided in ' + moves + ' total moves.');
}

collisionCheck(challenge);
