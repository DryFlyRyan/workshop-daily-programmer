// # Ramp Numbers
// A ramp number is a number whose digits from left to right either only rise or stay the same.
// 1234 is a ramp number as is 1124. 1032 is not.
//
// ## Input
// A positive integer, n.
//
// ## Output
// true if the input is a ramp number, false if it is not

function rampNumber(number) {
  let isRampNumber = true;
  // convert to string, replace all non-digits with '' and put in an array
  const numberAsArray = number.toString().replace(/\D/g,'').split('');
  for (let i = 0; i < numberAsArray.length - 1; i++) {
    if (numberAsArray[i] > numberAsArray[i+1]) {
      isRampNumber = false;
    }
  }
  console.log(isRampNumber);
};

rampNumber(1124); // should return true
rampNumber(1122234566789) // should return true
rampNumber(1032); // should return false
rampNumber(123134561678); // should return false
