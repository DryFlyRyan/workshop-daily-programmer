// # Ramp Numbers
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// ## Input
// A positive integer, n.
//
// ## Output
// true if the input is a ramp number, false if it is not


//1. turn input into an array of numbers.
//2. loop through numbers in array to see if + or - 1
//3. if +1 or -1 push to number list
//4. else empty number list
//5. boolean on number list to determine if it has numbers or not - no then return false.

console.log('Ramped Numbers');
var userNumber = window.prompt('Enter Number','enter 3 + digit number here..');

function rampNumber(input){
  var numberList;
  var splitNumbers = userNumber.split('');
  console.log(splitNumbers);

  var mappedInput = splitNumbers.map(Number);
  console.log(mappedInput);

for (i=0; i<mappedInput.length; i++){
  if ((a-b) === -1 || a-b === 1){
    numberList.push()
    console.log(numberList);
  }
}

}

console.log(rampNumber(1234));
