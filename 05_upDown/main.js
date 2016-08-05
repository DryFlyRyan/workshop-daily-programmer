//# Count It
//count the letters in a string.
//
//## Input
//A string - like "Hello World"
//
//## Output
//Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1
//
//## Special
//convert all to lowercase. Ignore whitespace and anything not a-z
//
//## Challenge input:
//"The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."
//
//[Source](https://www.reddit.com/r/dailyprogrammer/comments/2mkh5g/weekly_17_mini_challenges/cm51y55)

var sentence = prompt("Please enter a text to count", "Enter text here...");

function countString(string) {
    var results = {}
    string = string.replace(/[\s\d]|[^a-zA-Z]/g, "").toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (results[string[i]]) {
            results[string[i]]++;
        } else {
            results[string[i]] = 1;
        }
    }
    return results;
}

console.log(countString(sentence));
