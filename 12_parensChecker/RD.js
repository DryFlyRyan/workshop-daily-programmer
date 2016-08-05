function parensChecker(string) {
  var tracker = 0;
  for (var i = 0; i < string.length;  i++) {
    if (string.charAt(i) === "(") {
      tracker += 1;
    } else if (string.charAt(i) === ")"){
      tracker -= 1;
    }
    if (tracker < 0) {
      return false;
    }
  }
  if (tracker !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(parensChecker("()(((())))"));
console.log(parensChecker("())))("));
console.log(parensChecker(")("));
console.log(parensChecker("())(()"));
