// #Palindrome
// Write a program to test if a string is palindromic.
//
// ##Input
// A string, typically a word or sentance.
//
// ##Output
// Boolean. True if the string is a palindrome.

function isPalendrome(string) {
  // remove punctuation and spaces, convert to lower case
  const cleanString = string.toLowerCase().replace(/[^a-z]+/g, '');
  const stringReverse = cleanString.split('').reverse().join('');
  console.log(cleanString === stringReverse);
};

isPalendrome('Hannah');
isPalendrome('Never a Foot too far, Even.');
isPalendrome('Definitely not a palendrome!');
