// Created by Elana Kopelevich

// Only solved for  2 x 3 matrix

var matrix =

  [[1, 64, 23],
  [22, 50, 2]];

var matrix1 =

  [[44, 23],
  [21, 10],
  [9, 28],
  [85, 16],
  [33, 18]];

var matrix2 =

  [[29,62,8],
  [12,60, 31],
  [99,79,12]];

function matrixRotate(matrix){
  var newArray;
  var incr;
  var result = [];

  for (var i = 0; i < matrix[0].length; i++) {
    newArray = [];
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[j]) {
        newArray.unshift(matrix[j][i]);
      }
    }
    result.push(newArray);
  }

  console.log(result);
}

// matrixRotate(matrix);
// matrixRotate(matrix1);
matrixRotate(matrix2);
