function calculateRPN(input) {
  input = input.split(' ');
  var arr = [];
  for (var i = 0; i < input.length; i++) {
    if (!(/\d/).test(input[i])) {
      var operation = [];
      var operator = input[i];
      var index = 0;
      var result;
      for (var x = index; x > 0; x--) {
        if ((/\d/).test(input[x]) && operation.length < 3) {
          operation.push(input[x])
          if (index < x) {
            index = x;
          }
        }
      }

      switch (operator) {
        case 'x':
          result = operation[0] * operation[1];
          break;
        case '/':
          result = operation[0] / operation[1];
          break;
        case '+':
          result = operation[0] + operation[1];
          break;
        case '-':
          result = operation[0] - operation[1];
          break;
      }
    input[index] = result;
    input.splice(index - 1, 1);
    i = i - 1;
    }
  }
  console.log(input);
};


console.log(calculateRPN('5 1 2 + 4 × + 3 −'))
console.log(calculateRPN('1 2 + 4 5 6 8 * - + +'))
