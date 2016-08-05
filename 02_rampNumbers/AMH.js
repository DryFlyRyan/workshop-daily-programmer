
// Daily Programmer 02
////////////////////////////////////////////
// # Ramp Numbers
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// ## Input
// A positive integer, n.

// ## Output
// true if the input is a ramp number, false if it is not




function rampNumber(number){

  var numString = number.toString();
  var output;
  for(var i=0; i<numString.length; i++){
    var difference = numString.charAt(i+1) - numString.charAt(i);
    if(difference === 1 || difference === -1) {
      output = true;
    }else{
      output = false;
    }
  };
  return output;
} //end function


var integer1 = 1234;
var integer2 = 4321;
var integer3 = 1111;
console.log(rampNumber(integer1));
console.log(rampNumber(integer2));
console.log(rampNumber(integer3));
