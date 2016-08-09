// Created By DryFlyRyan
// This uses an array generator for a test.
// Results are returned between the two tested numbers

function arrayGenerator(length) {
  var result = [];
  for (var i = 0; i < length; i++) {
    var num = Math.floor(Math.random() * 123).toString();
    if (num > 96) {
      num = String.fromCharCode(num);
      result.push(num);
    } else {
      result.push(num);
    }

  }
  updown(result);
}

function updown(array) {
  var result = [];
  result.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[i-1]) {
      result.push("UP", array[i]);
    } else if (array[i] < array[i-1]) {
      result.push("DOWN", array[i]);
    } else {
      result.push("EVEN", array[i]);
    }
  }
  console.log(result);
  return result;
}

arrayGenerator(10);
