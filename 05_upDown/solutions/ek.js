// Created by Elana Kopelevich

var input = [6,3,5,4,3,4,4,5];

function upDown(input){
  var results = [];
  for (var i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      results.push('up');
    } else if (input[i] < input[i - 1]) {
      results.push('down');
    } else if (input[i] === input[i - 1]) {
      results.push('even');
    }
  }
  console.log(results);
}

upDown(input);
