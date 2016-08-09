// created by DryFlyRyan

var matrix = [[1, 64, 23],
              [22, 50, 2]];
var matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];

//Funtions
function matrixDimensions(matrix) {
  var results=matrix.length + 'x' + matrix[0].length;
  return results;
}
function rotateMatrix(matrix) {
  var results=[];
  for (var i = 0; i < matrix[0].length; i++) {
    var workingArray = [];
    for (var x = 0; x < matrix.length; x++) {
      workingArray.unshift(matrix[x][i]);
    }
    results.push(workingArray);
  }
  return results;
}
//Tests
console.log(matrix);
console.log(matrixDimensions(matrix));
console.log(rotateMatrix(matrix));
console.log("  ");
console.log(matrix1);
console.log(matrixDimensions(matrix1));
console.log(rotateMatrix(matrix1));
