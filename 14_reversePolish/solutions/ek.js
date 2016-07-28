// Created by Elana Kopelevich

function calculateRPN(equation){
  var compact = equation.replace(/\s+/g, '');
  var regexp = /[0-9]/g;
  var stack = [];
  var sum = 0;
  for (var i = 0; i < compact.length; i++) {

    if (compact[i].match(regexp)) {
      stack.push(compact[i]);

    } else if(compact[i] === '+'){

      sum = parseInt(stack[stack.length - 2]) +
            parseInt(stack[stack.length - 1]);
      stack.splice(stack.length - 2, 2);
      stack.push(sum);

    } else if(compact[i] === '-'){

      sum = parseInt(stack[stack.length - 2]) -
            parseInt(stack[stack.length - 1]);

      stack.splice(stack.length - 2, 2);
      stack.push(sum);


    } else if(compact[i] === 'x'){

      sum = parseInt(stack[stack.length - 2]) *
            parseInt(stack[stack.length - 1]);

      stack.splice(stack.length - 2, 2);
      stack.push(sum);


    } else if(compact[i] === '/'){

      sum = parseInt(stack[stack.length - 2]) /
            parseInt(stack[stack.length - 1]);

      stack.splice(stack.length - 2, 2);
      stack.push(sum);

    }
  }
  console.log(sum);
}

calculateRPN('5 1 2 + 4 x + 3 -'); //14
calculateRPN('1 2 + 4 5 6 8 x - + +'); //-36
