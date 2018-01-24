function reversePolish(exp) {
  const stack = [];
  const expArray = exp.split(' ');

  expArray.forEach(item => {
    // if it is a number, add to stack
    if(!isNaN(item)) {
      stack.push(parseInt(item))

    // if it is an operator, perform the operation on the last 2 in the stack
    } else {
      let operator = item;
      const item1 = stack.pop();
      const item2 = stack.pop();

      switch(operator) {
        case '+':
          stack.push(item2 + item1);
          break;
        case '-':
          stack.push(item2 - item1);
          break;
        case '*':
          stack.push(item2 * item1);
          break;
        case '/':
          stack.push(item2 / item1);
          break;
        default:
          break;
      }
    }
  })

  return stack[0];
}

console.log(reversePolish('5 1 2 + 4 * + 3 -')) //14
console.log(reversePolish('1 2 + 4 5 6 8 * - + +')) //-36

//
// | INPUT | STACK |
// | ----- | ----- |
// | 5 | 5 |
// | 1 | 5,1 |
// | 2 | 5,1,2 |
// | + | 5,3 |
// | 4 | 5,3,4 |
// | x | 5,12 |
// | + | 17 |
// | 3 | 17,3 |
// | - | 14 |
