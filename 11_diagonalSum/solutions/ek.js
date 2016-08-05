// Created by Elana Kopelevich

var square4 =

  [[1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]];

var square5 =

  [[2, 5, 1, 3, 9],
  [4, 1, 3, 0, 8],
  [1, 0, 9, 7, 6],
  [1, 7, 7, 3, 0],
  [3, 3, 8, 2, 4]];

function diagSum(square) {
  var sum = 0;
  for (var i = 0; i < square.length; i++) {
    sum = sum + parseInt(square[i][i]);
  }
  console.log(sum);
}

diagSum(square4);
diagSum(square5);
