var square4 =

              [[1, 0, 0, 0],

              [0, 1, 0, 0],

              [0, 0, 1, 0],

              [0, 0, 0, 1]]

var square5 =

             [[2, 5, 1, 3, 9],

              [4, 1, 3, 0, 8],

              [1, 0, 9, 7, 6],

              [1, 7, 7, 3, 0],

              [3, 3, 8, 2, 4]]

function diagonal(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i][i];
  }
  return sum;
}

console.log(diagonal(square4));
console.log(diagonal(square5));
