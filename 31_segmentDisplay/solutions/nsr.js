function sevenSegment(number){
  var numberArray = number.toString().split('');
  var length = numberArray.length;

  //Draw Top Line String
  var topString = '';
  numberArray.forEach(function(value){
      topString += drawNumberTopLine(value)+'   '
  })
  console.log(topString);
  //Draw Second Line
  var secondString = '';
  numberArray.forEach(function(value){
    secondString += drawSecondString(value)+'   '
  })
  console.log(secondString);

  //Draw Third Line
  var thirdString = '';
  numberArray.forEach(function(value){
    thirdString += drawThirdString(value)+'   ';
  })
  console.log(thirdString);
}

function drawNumberTopLine(number){
  if(number == 1){
    return '   ';
  }
  if(number == 6 || number == 9){
    return ' _ '
  }
  if(number == 8 || number == 7 || number == 2){
    return ' _ '
  }
  if(number == 3){
    return ' _ ';
  }

  if(number == 4){
    return '   ';
  }
  if(number == 5){
    return ' _ '
  }
}

function drawSecondString(number){
  if(number == 1){
    return ' | ';
  }
  if(number == 5 || number == 6){
    return '|_ ';
  }
  if(number == 3){
    return ' _|';
  }
  if(number == 2){
    return ' _|';
  }
  if(number == 4 || number == 8 || number == 9){
    return '|_|';
  }
  if(number == 7){
    return '  |';
  }
}
function drawThirdString(number){
  if(number == 1){
    return ' | ';
  }
  if(number == 2){
    return '|_ ';
  }
  if(number == 5){
    return ' _|';
  }
  if(number == 3){
    return ' _|';
  }
  if(number == 4 || number == 7 || number == 9){
    return '  |';
  }
  if(number == 6 || number == 8){
    return '|_|';
  }
}

sevenSegment(123456789);
sevenSegment(9998456938271);
sevenSegment(888);
sevenSegment(777);
sevenSegment(666);
sevenSegment(555);
sevenSegment(444);
sevenSegment(333);
sevenSegment(222);
sevenSegment(111);
