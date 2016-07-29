function parensChecker(parens) {
  var extraParens = 0;

  for (var i = 0; i < parens.length; i++) {

    if (!extraParens && parens.charAt(i) === ')') {
      return false
    }

    if (parens.charAt(i) === '(') {
      extraParens++;
    } else if (parens.charAt(i) === ')') {
      extraParens--;
    }
  }

  if (!extraParens) {
    return true
  }

  return false;
}

console.log(parensChecker("()(((())))"));
console.log(parensChecker("())))("));
console.log(parensChecker(")("));
console.log(parensChecker("(i + 4)(((3)))"));
