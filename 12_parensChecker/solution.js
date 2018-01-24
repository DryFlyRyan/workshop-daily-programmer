function parensChecker(paraString) {
  let checkerStack = [];
  const stringArray = paraString.split('');

  // check length, if odd return false
  if (stringArray.length % 2 !== 0) return false;
  // if first para is ), return false
  if (stringArray[0] === ')') return false;

  stringArray.forEach((para) => {
    // if no paras in checker stack and para is (, add to checker stack
    if (checkerStack.length >= 0 && para === '(') {
      checkerStack.push(para);

    // if para closes the last item in checker stack, remove ( from checker stack
    } else if (checkerStack[checkerStack.length - 1] === "(" && para === ')') {
      checkerStack.pop();
    }
  })
  return checkerStack.length === 0;
}


console.log(parensChecker(")")); // false, check odd
console.log(parensChecker(")())")); // false, check start with )
console.log(parensChecker("())))(")); // false, check too many close
console.log(parensChecker(")(")); // false, check opposing
console.log(parensChecker("()()")); // true, check simple double
console.log(parensChecker("()(((())))")); // true, check nested
