function garland(word) {
  // clean up word
  word.toLowerCase().replace(/[^a-z]+/g, '');

  // set initial count
  let count = 0;

  // check substrings and adjust count if equal
  for (let i = 1; i < word.length; i++) {
    if (word.substr(0, i) === word.substr(-i)) {
      count = i;
    }
  }

  return count;
};


console.log(garland('programmer')); //0
console.log(garland('ceramic')); //1
console.log(garland('onion')); //2
console.log(garland('alfalfa')); //4
console.log(garland('hotshots')); //4
