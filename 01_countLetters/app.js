

var string = "This is a string.";
function countString(string) {
  var resultsObj = {};
  for (var i = 0; i < string.length; i++) {
    var newKey = string.charAt(i);
     if (resultsObj[newKey]) {
      resultsObj[newKey]++;
    } else {
      resultsObj[newKey] = 1;
    };
  };
  return resultsObj;
};

var fn1Value = countString(string)
var fn2Value = countString("AAAAAAA")
console.log(fn1Value);
console.log(fn2Value);
