// # Longest String
// Write a function that returns the longest string in the array and it's length as an object.
//
// ## Input
// An array of strings (e.g ["truck", "sidewalk", "book"])
//
// ## Output
// An object with the key of the longest string and a value of the length of the string (e.g. { sidewalk: 8 })

function longestString(words) {
  let longestWord = '';

  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    };
  });

  return {[longestWord]: longestWord.length};
}

console.log(longestString(["truck", "sidewalk", "book"]));
