// count the letters in a string.
//
// Input: a string - like "Hello World"
// Output: letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1
//
// Other
// Convert all to lowercase. Ignore whitespace and anything not a-z
//
// Challenge input: "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

function countLetters(string) {
  const stringAsArray = string.toLowerCase().replace(/[^a-z]+/g, '').split('');
  const lettersInString = {};

  stringAsArray.map(letter => {
    lettersInString[letter]
    ? lettersInString[letter] += 1
    : lettersInString[letter] = 1
  });

  console.log(lettersInString);
}

countLetters("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.");
countLetters("amanda");
