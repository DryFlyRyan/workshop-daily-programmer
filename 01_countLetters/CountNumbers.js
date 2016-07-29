// <!-- # Count It
// count the letters in a string.
//
// ## Input
// A string - like "Hello World"

//## Output
//Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

//## Special
//convert all to lowercase. Ignore whitespace and anything not a-z

//## Challenge input:
//"The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

//[Source](https://www.reddit.com/r/dailyprogrammer/comments/2mkh5g/weekly_17_mini_challenges/cm51y55) -->

console.log('Version 1');

var string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
//console.log(string);

var lowercaseString = string.toLowerCase();
//console.log(lowercaseString);

var splitString = lowercaseString.split(' ');
//console.log(splitString);

var joinedString = splitString.join('');
//console.log(joinedString);

var letterString = joinedString.slice(0,-1);
//console.log(letterString);

function countString(letterString){
  var resultsObject = {};
  for (i = 0; i < letterString.length; i++) {
    var newKey = letterString.charAt(i);
    if (resultsObject[newKey]){
      resultsObject[newKey]++;
    } else {
      resultsObject[newKey] = 1;
    }

  }//end loop
 return resultsObject;
}//end function

var stringValue = countString(letterString);
console.log(stringValue);


console.log('Version 2');

var string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
//console.log(string);

var lowercaseString = string.toLowerCase();
//console.log(lowercaseString);

var regex = /\W+/g;
lowercaseString = lowercaseString.replace(regex,'');
//console.log(lowercaseString);

function countString(lowercaseString){
  var resultsObject = {};
  for (i = 0; i < lowercaseString.length; i++) {
    var newKey = lowercaseString.charAt(i);
    if (resultsObject[newKey]){
      resultsObject[newKey]++;
    } else {
      resultsObject[newKey] = 1;
    }

  }//end loop
 return resultsObject;
}//end function

var stringValue = countString(lowercaseString);

console.log(stringValue);
