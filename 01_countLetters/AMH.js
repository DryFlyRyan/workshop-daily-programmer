
// Daily Programmer 01 countLetters
////////////////////////////////////////////
// # Count It
// count the letters in a string.
//
// ## Input
// A string - like "Hello World"
//
// ## Output
// Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1
//
// ## Special
// convert all to lowercase. Ignore whitespace and anything not a-z
//
// ## Challenge input:
// "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."


var testString = 'This is a string.';

//function to put letters into an object by letter count
function countString(string) {
    var resultsObj = {};

    for(var i = 0; i < string.length; i++) {
      string = string.replace(/\s+/g, '').toLowerCase();
      var newKey = string.charAt(i);
      if (resultsObj[newKey]) {
        resultsObj[newKey]++;
      } else {
        resultsObj[newKey] = 1;
      }
    }
  return resultsObj;
} //end function

var test1 = countString(testString); //if you dont call it a variable it will be lost
var test2 = countString('Amanda is my name!');
console.log(test1);
console.log(test2);
