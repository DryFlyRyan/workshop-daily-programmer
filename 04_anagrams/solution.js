// # Anagram
// Write a program to test if a word is an anagram of another word.
//
// ## Input
// Two strings e.g. "pameesxl" and "examples".
//
// ## Output
// Boolean. True if the words are anagrams.
//
// ## Stretch
// The program can take a string and an array of words e.g. "examples" and ["pameesxl", "woamxapl", "emaplsic"].
// The output is an array of words that are anagrams from the list inputed.

function anagramTest(wordOne, wordTwo) {
  // remove all but letters and change to lower case
  function cleanWord(word) {
    return word.toLowerCase().replace(/[^a-z]+/g, '');
  };

  // check length
  if (wordOne.length !== wordTwo.length) {
    return false;
  } else {
    cleanWordOne = cleanWord(wordOne);
    cleanWordTwo = cleanWord(wordTwo);

      // sort alphabetically and compare
    return cleanWordOne.split('').sort().join('') === cleanWordTwo.split('').sort().join('');
  }
};

function anagramCompare(wordOne, wordsArray) {
  return wordsArray.map(word => {
    return anagramTest(wordOne, word);
  })
}

console.log(anagramTest('pameesxl', 'examples'));
console.log(anagramTest('a1', 's1'));

console.log(anagramCompare('examples',  ['pameesxl', 'woamxapl', 'emaplsic']));
