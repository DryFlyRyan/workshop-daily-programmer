
// Daily Programmer 03
// #Palindrome
//
// Write a program to test if a string is palindromic.
//
// ##Input:  A string, typically a word.
// ##Output: Boolean. True if the string is a palindrome.

function palindromeCheck(){
  //define variables
  var string = prompt('Enter a word to see if it is a palindrome'),
    cleanString = string.replace(/[^\w\s!?]/g,'').toLowerCase(),
    reverseString = cleanString.split('').reverse().join('');

  //check strings
    console.log('Clean string: ' + cleanString);
    console.log('Reverse string: ' + reverseString);

  //compare forward and backwards
  if(cleanString === reverseString){
    return true;
  }else{
    return false;
  }
}

console.log(palindromeCheck());
