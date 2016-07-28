function isAnagram(workingString1, workingString2) {
  string1 = workingString1.toLowerCase().split('').sort().join('');
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
