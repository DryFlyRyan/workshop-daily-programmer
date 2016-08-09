function isAnagram(workingString1,workingString2) {

  if (typeof workingString2 !== 'string') {
    for (var i = 0; i < workingString2.length; i++) {
      var target = workingString2[i].toString();
      // console.log(target);
      wordChecker(workingString1, target);
    }
  } else {
    wordChecker(workingString1, workingString2);
  }
}

function wordChecker(workingString1, workingString2) {
  string1 = workingString1.toLowerCase().split('').sort().join('');
  // console.log(typeof workingString2);
  string2 = workingString2.toLowerCase().split('').sort().join('');

  if (string1 === string2) {
    console.log(workingString1 + ' & ' + workingString2 + ' are anagrams.');
    return true;
  } else {
    console.log(workingString1 + ' & ' + workingString2 + ' are not anagrams.');
    return false;
  }
}

isAnagram('examples', 'pameesxl');
isAnagram('examples', 'woamxapl');
isAnagram('examples', 'emaplsic');
isAnagram('examples', ["pameesxl", "woamxapl", "emaplsic"])
