// # Ramp Numbers
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// ## Input
// A positive integer, n.
//
// ## Output
// true if the input is a ramp number, false if it is not

//turn input into an array of numbers.
//loop through numbers in array to see if + or - 1
//if +1 or -1 push to number list
//else empty number list
//boolean on number list to determine if it has numbers or not - no then return false.


//1: Check that there are more than 1 items
//2: Check that the 2nd item is ramping up or down, set expectedOutcome based on that
//3: Loop through all items
//4: Check to see if current - next item matches expectedOutcome
//5: If not, return false. If yes, keep looping.

// Test Case 1: 12345
// Test Case 2: 12343
// Test Case 3: 54321
// Test Case 4: 54323
// Test Case 5: 1
// Test Case 6: 11
// Test Case 7: 16
// Test Case 8: 12
// Test Case 9: 21

console.log('Ramped Numbers');
var userNumber = window.prompt('Enter Number','enter 3 + digit number here..');

function rampNumber(input){
  var i;
  var expectedOutcome;
  var isRamped = false;
  var splitNumbers = input.split('');
  var numbers = splitNumbers.map(Number);

  if (numbers.length > 1){
    if (numbers[1] - numbers[0] === -1){
      expectedOutcome = -1;
    } else if (numbers[1] - numbers[0] === 1){
      expectedOutcome = 1;
    }

    for (i = 0; i < numbers.length; i++){
      if (numbers[i + 1] && (numbers[i + 1] - numbers[i] === expectedOutcome)){
        isRamped = true;
      } else if (numbers[i + 1] && numbers[i + 1] - numbers[i] !== expectedOutcome){
        isRamped = false;
        break;
      }
    }
  }

  return isRamped;
}
console.log(rampNumber(userNumber));
