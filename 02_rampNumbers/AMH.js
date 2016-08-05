
// Daily Programmer 02
////////////////////////////////////////////
// # Ramp Numbers
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// ## Input
// A positive integer, n.

// ## Output
// true if the input is a ramp number, false if it is not


//check 3434


function rampNumber(number){

//define variables for loop
  var output;
  var sumDifferences = 0;

//loop through numbers and check that difference is +/- 1
  for(var i=0; i<number.length - 1; i++){
    var difference = number.charAt(i+1) - number.charAt(i);

    if(difference == 1 || difference == -1) {
      output = true;
      sumDifferences += difference;
    }else{
      return false;
    }
  }

// Check to make sure all are -1 or all are +1
  if(sumDifferences == (number.length -1) || sumDifferences == -1*(number.length-1)) {
    output = true;
  } else {
    return false;
  }


  return output;

} //end function

var integer = prompt('Enter a number');
console.log(rampNumber(integer));
