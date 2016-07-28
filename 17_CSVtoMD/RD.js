var input = require('./csv');
var values = [];
var output = '';

function stringSplitter (string) {
  var input = string.split('\n');
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].split(',');
  }
  return input;
}

function findLongest (input) {
  var longest = 0;
  for (var i = 0; i<input.length; i++) {
    if (input[i].length > longest) {
      longest = input[i].length;
    }
  }
  return longest;
}

function dbBuilder(string) {
  var input = stringSplitter(string);
  for (var i = 0; i < input[0].length; i++) {
    var workingArray = [];
    for (var x = 0; x < input.length; x++) {
      workingArray.push(input[x][i]);
    }
    values.push(workingArray);
  }
  return values;
}

function populator(input) {
  var input = dbBuilder(string);
  for (var i = 0; i < input.length; i++) {

    var length = findLongest(input[i]);
    for (var x = 0; x < length; x++) {
      if (x === 0) {
        out
      }
    }
  }
}

console.log(dbBuilder(input));
