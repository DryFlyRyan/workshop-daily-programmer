// # Up Down
// Given an array of numbers, write a program that describes whether each number was higher, lower or even to the previous number.
//
// ## Input
// An array of numbers (e.g [6,3,5,4,3,4,4,5])
//
// ## Output
// An array of up down strings (e.g. ["down","up","down","down","up","even","up"])

function upDown(numbers) {
  return numbers.map((number, index) => {
    const numBefore = numbers[index - 1];
    if (index > 0) {
      if (number === numBefore) {
        return 'same';
      } else if (number < numBefore) {
        return 'down';
      } else if (number > numBefore) {
        return 'up';
      }
    }
  }).splice(1);
};

console.log(upDown([6,3,5,4,3,4,4,5]));
console.log(upDown([1,2,3,4,4,3,2,1]))
