// # Find Greater
// Write a function that takes two arguments. The first argument is an array of numbers. The second argument is a number two compare with each item in the array. Your function should return an array of numbers that are greater than the second argument.
//
// Example:
// findGreater([1,2,3,4,5,6,7,8], 5);
// // => [6,7,8]
//
// ## Input
// An array of numbers [1, 2, 3, 4, 5, 6, 7, 8] and a number to compare each number with
//
// ## Output
// An array of numbers that are greater than the second argument (e.g. [6,7,8])

function findGreater(numbers, compareNum) {
  return numbers.filter(number => number > compareNum);
};

console.log(findGreater([1,2,3,4,5,6,7,8], 5));
console.log(findGreater([1,2,3,4,5,6,7,8], 0));
