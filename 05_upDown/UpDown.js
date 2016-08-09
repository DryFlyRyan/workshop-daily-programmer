// # Up Down
//
// Given an array of numbers, write a program that describes whether each number was higher, lower or even to the previous number.
//
// ## Input
//
// An array of numbers (e.g [6,3,5,4,3,4,4,5])
//
// ## Output
//
// An array of up down strings (e.g. ["down","up","down","down","up","even","up"])

//1. Turn numbers into an array
//2. Turn values into numbers
//3. Loop through the numbers.
//4. if +1 = up, if -1 = down, if == even

console.log('Up Down Project');

var numbers = window.prompt('Enter in some Numbers!', 'enter them here...');

function upDown(input){
  var upDownArray = [];

  var cleanNumbers = input.replace(/\D/g, '');
  console.log(cleanNumbers);

  var splitNumbers = cleanNumbers.split('');
  console.log(splitNumbers);

  var numberArray = splitNumbers.map(Number);
  console.log(numberArray);

  for (i=0; i<numberArray.length; i++){
    if (numberArray[i] === numberArray[i-1]){
      upDownArray.push('even');
    } else if (numberArray[i] < numberArray[i-1]){
      upDownArray.push('down');
    } else if (numberArray[i] > numberArray[i-1]){
      upDownArray.push('up');
    }
  }
  return upDownArray;
}
console.log(upDown(numbers));
