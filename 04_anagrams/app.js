var stringMatch = function(string1, string2) {
  var remove = string2;
  for (var i = 0; i < string2.length; i++) {
    if (letter === string2[i]) {
      remove = remove.splice(i, 1);
    }
  }
  return false;
};

var lengthCheck = function (string1, string2) {
  if (string1.length > string2.length || string1.length < string2.length) {
    return false;
  }
};

var isAnagram = function(string1, array) {

  string1 = string1.toLowerCase().split('');
  var string2;
  for (x = 0; x < array.length; x++) {
    string2 = array[x].toLowerCase().split('');
    if (!lengthCheck(string1, string2)) {
      console.log(string1.join('') + ' & ' + string2.join('') + " are not anagrams!");
    } else if () {
      stringMatch(string1, string2);
    }


    console.log(string1.join('') + ' & ' + string2.join('') + " are anagrams!");
    }
  };



isAnagram("examples", ["pameesxl", "woamxapl", "emaplsic"]);
